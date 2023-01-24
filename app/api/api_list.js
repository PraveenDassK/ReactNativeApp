import client from "./client";

/**
 * @dev customer details endpoint
 * @todo Get these on login
 */
const enfuceID = "A12277V1"
const carbonyteID = "C1220XHD"

const GetCustomerDetails = () => client.get('https://api.carbonyte.io/regmodule/GetCustomerDetais?CustomerId=CC11875');

const SendLoginOTP = (email) => {
  console.log(email)
  return client.post("https://api.carbonyte.io/authverifymodule/SendLoginOTP?email=jack.h%40carbonyte.io&phoneNumber=447494560838")
};
const VerifyLoginOTP = (mailOTP,email) => client.post("https://api.carbonyte.io/authverifymodule/VerifyLoginOTP?email="+
  email+
  "&emailOTP=" +
  mailOTP +"&phoneNumber=447494560838&phoneOTP=9090")

const GetAccountByCustomer = () => client.get("https://api.carbonyte.io/walletmodule/GetAccountByCustomer/" + carbonyteID)
const GetCustomer = () => client.get("https://api.carbonyte.io/walletmodule/GetCustomer/" + carbonyteID)

const GetAccount = () => client.get("https://api.carbonyte.io/walletmodule/GetAccount/" + enfuceID)
const GetTransactions = () =>  client.get("https://api.carbonyte.io/walletmodule/GetTransactions/" + enfuceID + "?size=500")

const RetriveBenificiaries = () => client.get("https://api.carbonyte.io/walletmodule/RetrieveBeneficiaries/" + carbonyteID)

const GetLimit = () => client.get("https://api.carbonyte.io/transactionmodule/GetBudget?accountId=" + enfuceID)
const SetLimit = (amount) =>  client.post("https://api.carbonyte.io/transactionmodule/SetBudget?accountId=" + 
                              enfuceID + 
                              "&periodType=monthly&amount=" + amount)

const SendFunds = (amount) => client.post("https://api.carbonyte.io/walletmodule/SendMoneyProcedureImplementation",
  {
    "sourceAccountId": "A12277V1",
    "destination": {
      "type": "SCAN",
      "id": "A1226WEM",
      "accountNumber": "02619527",
      "sortCode": "000000",
      "name": "Dory Ray",
      "address": {
        "addressLine1": "string",
        "postTown": "London",
        "postCode": "W2 1AS",
        "country": "GB"
      }
    },
    "currency": "GBP",
    "amount": amount,
    "reference": "friends"
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
    VerifyLoginOTP
  };