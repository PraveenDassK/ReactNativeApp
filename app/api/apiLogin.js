import client from "./client";

const Login = async(username,password,mobile,email) => {
    const request = await client.get("https://api.carbonyte.io/authverifymodule/SendLoginOTP",
    {
        "email": email,
        "phoneNumber": mobile
    })
    return request
}

const VerifyLogin = async(mobile,email,motp,) => {
    const request = await client.post("https://api.carbonyte.io/authverifymodule/VerifyLoginOTP",
    {
        "email": email,
        "emailOTP": eotp,
        "phoneNumber": mobile,
        "phoneOTP": motp
    })
    return request
}

const GetCompanyByRegNo = async(Reg) => {
    const response = await client.get(`https://api.carbonyte.io/authverifymodule/GetCompanySearch/${Reg}`)
    console.log(response)
    if(!response.data.result){
        return null
    }
    const returnData = response.data.details
    return returnData
}

const GetAddressByPostCode = async (postcode) => {
  const response = await client.get(`https://api.carbonyte.io/authverifymodule/GetAddressesByPostcode?postcode=${postcode}`)
  console.log(response)
  if(!response.data.result){
      return null
  }
  const returnData = response.data.details
  return returnData
}

const RegisterPersonalAccount = async() => {
    const response = await client.post("https://api.carbonyte.io/regmodule/SaveCustomerAccountDetails",
    [
      {
        "id": 0,
        "customerId": "",
        "emails": [
          {
            "emailId": "jack.h@carbonyte.io"
          }
        ],
        "phoneNumbers": [
          {
            "phoneNo": "07927201649"
          }
        ],
        "customerDetails": {
          "documentNo": "",
          "documentType": "1",
          "address": "40 South way",
          "firstName": "Jack",
          "dob": "29/12/1998",
          "nationalId": "",
          "lastName": "Huang",
          "postCode": "HA9 0HZ",
          "postTown": "",
          "salutation": "string",
          "gender": "Male",
          "maritalStatus": "Single",
          "employmentDetails": "Unemployed"
        },
        "income": {
          "totalIncome": "5",
          "savings": "5",
          "taxResidency": "GB",
          "incomeSources": [
            "Pensions"
          ]
        },
        "key": "07927201649",
        "role": "string",
        "ownershipPercentage": 0,
        "marketingChoices": "string"
      }
    ])
      return response;
}

const RegisterBusinessAccount = async() => {
    const response = await client.post("https://api.carbonyte.io/regmodule/SaveCompanyDetails",
    {
        "type": "string",
        "company_status": "string",
        "etag": "string",
        "aboutBusiness": "string",
        "incomeSources": [
          "string"
        ],
        "operationTime": "string",
        "targetCustomer": "string",
        "customerOutOfUk": "string",
        "sic_codes": [
          "string"
        ],
        "registered_office_is_in_dispute": true,
        "jurisdiction": "string",
        "undeliverable_registered_office_address": true,
        "links": {
          "self": "string",
          "filing_history": "string",
          "persons_with_significant_control": "string",
          "officers": "string"
        },
        "company_name": "string",
        "accounts": {
          "next_made_up_to": "string",
          "next_due": "string",
          "overdue": true,
          "accounting_reference_date": {
            "month": "string",
            "day": "string"
          },
          "last_accounts": {
            "type": "string",
            "made_up_to": "string",
            "period_start_on": "string",
            "period_end_on": "string"
          },
          "next_accounts": {
            "overdue": true,
            "due_on": "string",
            "period_start_on": "string",
            "period_end_on": "string"
          }
        },
        "previous_company_names": [
          {
            "ceased_on": "string",
            "effective_from": "string",
            "name": "string"
          }
        ],
        "date_of_creation": "string",
        "company_number": "string",
        "has_insolvency_history": true,
        "has_charges": true,
        "confirmation_statement": {
          "next_made_up_to": "string",
          "next_due": "string",
          "overdue": true,
          "last_made_up_to": "string"
        },
        "registered_office_address": {
          "country": "string",
          "address_line_1": "string",
          "postal_code": "string",
          "locality": "string",
          "address_line_2": "string",
          "region": "string",
          "dateMovedIn": "string"
        },
        "has_super_secure_pscs": true,
        "can_file": true
      })
}
export default {
    Login,
    VerifyLogin,
    GetCompanyByRegNo,
    RegisterPersonalAccount,
    RegisterBusinessAccount,
    GetAddressByPostCode
}