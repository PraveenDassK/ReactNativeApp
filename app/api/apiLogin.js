import React, {
  useContext,
  useEffect,
  useState,
  useCallback,
  useRef,
} from "react";
import client from "./client";
import jwt_decode from "jwt-decode";
import * as Device from 'expo-device';
import AuthContext from "../auth/context";


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
  const request = await client.post(
    "https://api.carbonyte.io/authverifymodule/VerifyLoginOTP",
    {
      email: email,
      emailOTP: emailOTP,
      phoneNumber: phoneNumber,
      phoneOTP: phoneOTP,
    }
  );
  console.log(request.data)
  if (!request.data.result || request.status == 500) {
    return null;
  }

  const token = request?.data?.details;
  const decryptedToken = jwt_decode(token);
  const userData = JSON.parse(decryptedToken.Data.substr());

  const accountID = userData.CustomerId;
  const accountDetails = await GetCustomerDetails(accountID);

  return {
    data: accountDetails,
    token: token,
    customerID: accountID
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
  try {
    const response = await client.get(
      `https://api.carbonyte.io/authverifymodule/GetCompanySearch/${Reg}`
    );
    console.log(response.data)
    if (!response.data.result) {
      return null;
    }
    const returnData = response.data.details;
    return returnData;
  } catch {
    return null
  }
};

const getCompanyRegNoByName = async (name) => {
  try {
    const response = await client.get(
      `https://api.carbonyte.io/authverifymodule/AdvanceCompanySearch?company_name_includes=${name}`
    );
    console.log(response.data)
    const returnData = response?.data?.details?.top_hit.company_number;
    return returnData;
  } catch {
    return null
  }

}

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
  const device = Device.osInternalBuildId
  const response = await client.post(
    "https://api.carbonyte.io/regmodule/SaveCustomerAccountDetails?typeOfAccount=personal",
    regData
  );
  return response;
};

const RegisterBusinessAccount = async (regData, pushToken) => {
  const response = await client.post(
    `https://api.carbonyte.io/regmodule/SaveCompanyDetails?tokenId=${pushToken}`,
    regData
  );
  return response
};

const RegisterBusinessUsers = async (regData) => {
  const device = Device.osInternalBuildId
  const response = await client.post(
    "https://api.carbonyte.io/regmodule/SaveCustomerAccountDetails?typeOfAccount=business",
    regData
  );
  return response;
};

const SendPushNotificationToken = async ({ customerID, tokenID, deviceID, deviceName, macAddress, operatingSystem }) => {
  const response = await client.post(
    `https://api.carbonyte.io/authverifymodule/SaveDeviceDetails/${customerID}/${tokenID}/${deviceID}?deviceName=${deviceName}&macAddress=${macAddress}&operatingSystem=${operatingSystem}`
  );
  return response;
};

/**
 * @dev This gets the IDs of the tokens
 * @todo Validation
 * @param {str} JWT The string of a token
 * @returns Obj an object of all the IDs
 */
const GetIDs = async (JWT) => {
  try {
    //Decrypt the token and get the data
    const decryptedToken = jwt_decode(JWT);
    const tokenData = JSON.parse(decryptedToken.Data.substr());

    //Isolate the customer ID
    const accountID = tokenData.CustomerId;

    //Get all the other IDs
    const accountData = await GetCustomerDetails(accountID);
    const missingAccountSetup = false
    if (missingAccountSetup) {
      return "Missing Setup"
    }

    return {
      token: JWT,
      userID: accountData.modulrCustomerId,
      accountID: accountData.accountDetails[0]?.accountId,
      cardID: accountData.accountDetails[0]?.accountNo,
      customerDetails: accountID
    }
  } catch {
    return null
  }
}

const VerifyDocument = async () => {
  const device = Device.osInternalBuildId
  const obj = [
    {
      "clientReference": "",
      "documentType": "",
      "frontImage": "",
      "backImage": ""
    }
  ]
  //https://api.carbonyte.io/authverifymodule/VerifyDocument
  const response = await client.post(`https://api.carbonyte.io/authverifymodule/VerifyDocument`, obj)
  return response
}

const RegisterBusinessDirectors = async ({ businessId, obj }) => {
  const businessDirectorRegistrationCall = await client.post(`https://api.carbonyte.io/regmodule/SaveCustomerAccountDetails?typeOfAccount=Business&businessId=${businessId}`
    , obj
  )
  return businessDirectorRegistrationCall
}

export default {
  Login,
  VerifyLogin,
  GetCompanyByRegNo,
  RegisterPersonalAccount,
  RegisterBusinessAccount,
  GetAddressByPostCode,
  GetCustomerDetails,
  SendPushNotificationToken,
  GetIDs,
  VerifyDocument,
  getCompanyRegNoByName,
  RegisterBusinessUsers,
  RegisterBusinessDirectors
};
