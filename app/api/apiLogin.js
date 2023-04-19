import client from "./client";
import jwt_decode from "jwt-decode";

/**
 * @dev Used to get a login request
 * @notice Sends an OTP to the requested email address
 * @param {*} mobile Mobile number
 * @notice Remove the + at the end it takes a string of only numbers
 * @param {*} email The email address
 * @returns
 */
const Login = async ({ phoneNumber, email }) => {
  const request = await client.post(
    "https://api.carbonyte.io/authverifymodule/SendLoginOTP",
    {
      email: email,
      phoneNumber: phoneNumber,
    }
  );
  console.log(request);
  return request.data;
};

/**
 * @dev This function accepts the otp and returns the account details
 * @return The account details tied to the login
 * @return If the OTP is incorrect then it returns null
 * @param {str} mobile
 * @param {str} email
 * @param {str} motp
 * @param {str} eotp
 */
const VerifyLogin = async ({ email, phoneNumber, emailOTP, phoneOTP }) => {
  console.log();
  const request = await client.post(
    "https://api.carbonyte.io/authverifymodule/VerifyLoginOTP",
    {
      email: email,
      emailOTP: emailOTP,
      phoneNumber: phoneNumber,
      phoneOTP: phoneOTP,
    }
  );
  console.log(request);
  if (!request.data.result || request.status == 500) {
    return null;
  }

  const token = request?.data?.details;
  const decryptedToken = jwt_decode(token);

  const userData = JSON.parse(decryptedToken.Data.substr());
  console.log("UserData", userData);

  const accountID = userData.CustomerId;
  console.log(accountID);
  const accountDetails = await GetCustomerDetails(accountID);

  return {
    data: accountDetails,
    token: token,
  };
};

/**
 * @dev This should only be used to pass though the JWT ID
 * @param {Str} Id The ID returned from the JWT
 * @returns An object with all of the data from the endpoint in
 */
const GetCustomerDetails = async (Id) => {
  const request = await client.get(
    `https://api.carbonyte.io/regmodule/GetCustomerDetails?customerId=${Id}`
  );
  const returnData = request?.data?.details;
  return returnData;
};

/**
 * @param {Int} Reg This is the registration number of the company
 * @returns null if no company is found if found
 *          If the company number is correct then return the details
 */
const GetCompanyByRegNo = async (Reg) => {
  const response = await client.get(
    `https://api.carbonyte.io/authverifymodule/GetCompanySearch/${Reg}`
  );
  console.log(response);
  if (!response.data.result) {
    return null;
  }
  const returnData = response.data.details;
  return returnData;
};

/**
 *
 * @param {*} postcode
 * @returns
 */
const GetAddressByPostCode = async (postcode) => {
  const response = await client.get(
    `https://api.carbonyte.io/authverifymodule/GetAddressesByPostcode?postcode=${postcode}`
  );
  if (!response.data.result) {
    return null;
  }
  const returnData = response.data.details;
  let addressObj = [];
  returnData?.addresses.forEach((address) => {
    const split = address.split(",");
    addressObj.push({
      label: split[0],
      value: {
        address1: split[0],
        address2: split[1],
        area: split[5],
        city: split[6],
        postcode: postcode,
      },
    });
  });
  return addressObj;
};

const RegisterPersonalAccount = async (regData) => {
  const response = await client.post(
    "https://api.carbonyte.io/regmodule/SaveCustomerAccountDetails?typeOfAccount=personal",
    regData
  );
  return response;
};

const RegisterBusinessAccount = async () => {
  const response = await client.post(
    "https://api.carbonyte.io/regmodule/SaveCompanyDetails",
    {
      type: "string",
      company_status: "string",
      etag: "string",
      aboutBusiness: "string",
      incomeSources: ["string"],
      operationTime: "string",
      targetCustomer: "string",
      customerOutOfUk: "string",
      sic_codes: ["string"],
      registered_office_is_in_dispute: true,
      jurisdiction: "string",
      undeliverable_registered_office_address: true,
      links: {
        self: "string",
        filing_history: "string",
        persons_with_significant_control: "string",
        officers: "string",
      },
      company_name: "string",
      accounts: {
        next_made_up_to: "string",
        next_due: "string",
        overdue: true,
        accounting_reference_date: {
          month: "string",
          day: "string",
        },
        last_accounts: {
          type: "string",
          made_up_to: "string",
          period_start_on: "string",
          period_end_on: "string",
        },
        next_accounts: {
          overdue: true,
          due_on: "string",
          period_start_on: "string",
          period_end_on: "string",
        },
      },
      previous_company_names: [
        {
          ceased_on: "string",
          effective_from: "string",
          name: "string",
        },
      ],
      date_of_creation: "string",
      company_number: "string",
      has_insolvency_history: true,
      has_charges: true,
      confirmation_statement: {
        next_made_up_to: "string",
        next_due: "string",
        overdue: true,
        last_made_up_to: "string",
      },
      registered_office_address: {
        country: "string",
        address_line_1: "string",
        postal_code: "string",
        locality: "string",
        address_line_2: "string",
        region: "string",
        dateMovedIn: "string",
      },
      has_super_secure_pscs: true,
      can_file: true,
    }
  );
};
const SendPushNotificationToken = async ({ customerID, tokenID }) => {
  const response = await client.post(
    `https://api.carbonyte.io/authverifymodule/SaveTokenDetails?customerID=${customerID}&tokenId=${tokenID}&DeviceId=1`
  );
  return response;
};

export default {
  Login,
  VerifyLogin,
  GetCompanyByRegNo,
  RegisterPersonalAccount,
  RegisterBusinessAccount,
  GetAddressByPostCode,
  GetCustomerDetails,
  SendPushNotificationToken,
};
