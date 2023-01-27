import client from "./client";
import AuthContext from "../auth/context";
import React,{ useEffect, useState,useContext } from "react";
/**
 * @dev customer details endpoint
 * @todo Get these on login
 */
const enfuceID = "A12277V1"
const carbonyteID = "C1220XHD"

const GetCustomerDetails = (Id) => client.get('https://api.carbonyte.io/regmodule/GetCustomerDetais?CustomerId=CC3569');

const SendLoginOTP = (email) => {
  console.log(email)
  return client.post("https://api.carbonyte.io/authverifymodule/SendLoginOTP?email=jack.h%40carbonyte.io&phoneNumber=447494560838")
};
const VerifyLoginOTP = (mailOTP,email) => client.post("https://api.carbonyte.io/authverifymodule/VerifyLoginOTP?email="+
  email+
  "&emailOTP=" +
  mailOTP +"&phoneNumber=447494560838&phoneOTP=9090")

const GetAccountByCustomer = (Id) => client.get("https://api.carbonyte.io/walletmodule/GetAccountByCustomer/" + Id)
const GetCustomer = (Id) => client.get("https://api.carbonyte.io/walletmodule/GetCustomer/" + Id)

const GetAccount = (eID) => client.get("https://api.carbonyte.io/walletmodule/GetAccount/" + eID)

const GetTransactions = (eID,amount) =>  {
  let toGet = amount ? amount : 10
  return client.get("https://api.carbonyte.io/walletmodule/GetTransactions/" + eID + "?size=" + toGet)
}

const RetriveBenificiaries = (Id) => client.get("https://api.carbonyte.io/walletmodule/RetrieveBeneficiaries/" + Id)

const GetLimit = () => client.get("https://api.carbonyte.io/transactionmodule/GetBudget?accountId=" + enfuceID)
const SetLimit = (amount) =>  client.post("https://api.carbonyte.io/transactionmodule/SetBudget?accountId=" + 
                              enfuceID + 
                              "&periodType=monthly&amount=" + amount)

const GetProjectByID = (project) => client.get("https://api.carbonyte.io/ecomodule/Earthly/GetProjectById?companyId=" + project)

const SendFunds = (amount) => client.post("https://api.carbonyte.io/walletmodule/SendMoneyProcedureImplementation",
  {
    "sourceAccountId": "A12277V1",
    "destination": {
      "type": "SCAN",
      "id": "A1226WEM",
      "accountNumber": "02619527",
      "sortCode": "000000",
      "name": "Gorthalax",
      "address": {
        "addressLine1": "string",
        "postTown": "London",
        "postCode": "W2 1AS",
        "country": "GB"
      }
    },
    "currency": "GBP",
    "amount": amount,
    "reference": "tithes"
  }
)

const SetToggles = (
  online,
  swipe,
  atm,
  contactless
) => {
  console.log("---")
  console.log(online)
  console.log(swipe)
  console.log(atm)
  console.log(contactless)
  const request = "https://api.carbonyte.io/cardmodule/SetToggles?accountId=" + 
    enfuceID +"&onlineTransactions="+ 
    online +"&swipePayments="+ 
    swipe +"&atmWithdrawals=" + 
    atm + "&contactlessPayments=" + 
    contactless
  return client.post(request)
}
const GetToggles = () => client.get("https://api.carbonyte.io/cardmodule/GetToggles?accountId=" + enfuceID)

const Checkout = (obj) => client.post("https://api.carbonyte.io/ecomodule/Earthly/Checkout",obj)

const CreateBenificiary = (obj) => client.post("https://api.carbonyte.io/walletmodule/Wallet/CreateNewBeneficiary?cid=A12277V1",       
{
  "id": "B120066MBF",
  "name": "Anthony",
  "birthdate": null,
  "emailAddress": "anthony@test.com",
  "phoneNumber": "4407812345678",
  "destinationIdentifier": {
    "type": "SCAN",
    "accountNumber": "02631260",
    "sortCode": "000000",
    "iban": null,
    "bic": null,
    "currency": "GBP",
    "countrySpecificDetails": {
      "branchCode": null
    }
  },
  "redirectedDestination": null,
  "defaultReference": "friend",
  "status": "ACTIVE",
  "created": "2023-01-20T10:37:26.445+00:00",
  "accountId": "A1227775",
  "externalReference": null,
  "approvalRequired": false,
  "customerId": "C1220XHD",
  "updated": "2023-01-20T10:37:26.429+00:00",
  "address": {
    "addressLine1": "London",
    "addressLine2": null,
    "postTown": "London",
    "postCode": "HA1 3AW",
    "country": "GB"
  },
  "qualifier": null,
  "approvalRequestId": null,
  "approvalStatus": "APPROVED",
  "accessGroups": []
})

const DeleteBenificiary = (Id) => client.delete("https://api.carbonyte.io/walletmodule/DeleteBeneficiaries/" + carbonyteID + "/" + Id)

const testAPI = () => {'v'
  const authContext = useContext(AuthContext) 
  console.log(authContext)
}

export default {
    GetCustomerDetails,
    SendLoginOTP,
    GetAccountByCustomer,
    GetCustomer,
    GetAccount,
    GetTransactions,
    SetToggles,
    GetToggles,
    RetriveBenificiaries,
    GetLimit,
    SetLimit,
    SendFunds,
    VerifyLoginOTP,
    GetProjectByID,
    Checkout,
    DeleteBenificiary,
    testAPI
  };