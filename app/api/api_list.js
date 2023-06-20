import client from "./client";
import AuthContext from "../auth/context";
import React,{ useEffect, useState,useContext } from "react";
/**
 * @dev customer details endpoint
 * @todo Get these on login
 */
const enfuceID = "A12277V1"
const carbonyteID = "C1220XHD"

const GetCustomerDetails = (id) => client.get('https://api.carbonyte.io/regmodule/GetCustomerDetais?CustomerId='+id);

const SendLoginOTP = (email) => {
  return client.post("https://api.carbonyte.io/authverifymodule/SendLoginOTP?email=jack.h%40carbonyte.io&phoneNumber=447494560838")
};
const VerifyLoginOTP = (mailOTP,email) => client.post("https://api.carbonyte.io/authverifymodule/VerifyLoginOTP?email="+
  email+
  "&emailOTP=" +
  mailOTP +"&phoneNumber=447494560838&phoneOTP=9090")

const GetAccountByCustomer = (carbonyteid) => client.get("https://api.carbonyte.io/walletmodule/GetAccountByCustomer/" + carbonyteid)
const GetCustomer = (userid) => client.get("https://api.carbonyte.io/walletmodule/GetCustomer/" + userid)

const GetAccount = (enfuceid) => client.get("https://api.carbonyte.io/walletmodule/GetAccount/" + enfuceid)

const GetTransactions = (enfuceid,amount) =>  {
  let toGet = amount ? amount : 10
  return client.get("https://api.carbonyte.io/walletmodule/GetTransactions/" + enfuceid + "?size=" + toGet)
}

const RetriveBenificiaries = (carbonyteid) => client.get("https://api.carbonyte.io/walletmodule/RetrieveBeneficiaries/" + carbonyteid)

const GetLimit = (enfuceid) => client.get("https://api.carbonyte.io/transactionmodule/GetBudget?accountId=" + enfuceid)
const SetLimit = (enfuceid,amount) =>  client.post("https://api.carbonyte.io/transactionmodule/SetBudget?accountId=" + 
                              enfuceid + 
                              "&periodType=monthly&amount=" + amount)

const GetProjectByID = (project) => client.get("https://api.carbonyte.io/ecomodule/Earthly/GetProjectById?companyId=" + project)

const SendFunds = (amount) => client.post("https://api.carbonyte.io/walletmodule/SendMoneyProcedureImplementation",
  {
    "sourceAccountId": "A12274AW",
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

const SetToggles = (enfuceid,
  online,
  swipe,
  atm,
  contactless
) => {
  const request = "https://api.carbonyte.io/cardmodule/SetToggles?accountId=" + 
    enfuceid +"&onlineTransactions="+ 
    online +"&swipePayments="+ 
    swipe +"&atmWithdrawals=" + 
    atm + "&contactlessPayments=" + 
    contactless
  return client.post(request)
}
const GetToggles = (enfuceid) => client.get("https://api.carbonyte.io/cardmodule/GetToggles?accountId=" + enfuceid)

const Checkout = (obj) => client.post("https://api.carbonyte.io/ecomodule/Earthly/Checkout",obj)

const DeleteBenificiary = (carbonid,Id) => client.delete("https://api.carbonyte.io/walletmodule/DeleteBeneficiaries/" + carbonid + "/" + Id)

const testAPI = () => {'v'
  const authContext = useContext(AuthContext) 
}

const AddBeneficiary = (modulrCustomerId,phonenumber,accountName,accNum,sortCode) => client.post("https://api.carbonyte.io/walletmodule/Wallet/CreateNewBeneficiary?modulrCustomerId="+modulrCustomerId,

  {
   "externalReference": "",
   "name": accountName,
   "birthdate": "",
   "emailAddress": "",
   "phoneNumber": phonenumber,
   "destinationIdentifier": {
   "type": "SCAN",
   "accountNumber": accNum,
   "sortCode": sortCode,
   "iban": "",
   "bic": "",
   "currency": "",
   "countrySpecificDetails": {
   "bankName": "",
   "bankAddress": "",
   "bankCity": "",
   "bankBranchName": "",
   "bankBranchCode": "",
   "bankCode": "",
   "chineseId": "",
   "province": "",
   "business": false
   }
   },
   "defaultReference": "Friend",
   "idToReplace": "",
   "address": {
   "addressLine1": "",
   "addressLine2": "",
   "postTown": "",
   "postCode": "",
   "country": ""
   },
   "qualifier": ""
  }
)

const GetUserImpacts = async(Id) => await client.get("https://api.carbonyte.io/ecomodule/Earthly/GetUserImpacts/CC11875");

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
    testAPI,
    AddBeneficiary,
    GetUserImpacts
  };