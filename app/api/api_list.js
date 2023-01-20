import client from "./client";

/**
 * @dev customer details endpoint
 */
const enfuceID = "A12277V1"
const carbonyteID = "C1220XHD"

const GetCustomerDetails = () => client.get('https://api.carbonyte.io/regmodule/GetCustomerDetais?CustomerId=' + carbonyteID);
const SendLoginOTP = () => client.post("https://api.carbonyte.io/authverifymodule/SendLoginOTP?email=ryan.s%40carbonyte.io&phoneNumber=447494560838");

const GetAccountByCustomer = () => client.get("https://api.carbonyte.io/walletmodule/GetAccountByCustomer/" + carbonyteID)
const GetCustomer = () => client.get("https://api.carbonyte.io/walletmodule/GetCustomer/" + carbonyteID)

const GetAccount = () => client.get("https://api.carbonyte.io/walletmodule/GetAccount/" + enfuceID)
const GetTransactions = () =>  client.get("https://api.carbonyte.io/walletmodule/GetTransactions/" + enfuceID + "?size=500")

const RetriveBenificiaries = () => client.get("https://api.carbonyte.io/walletmodule/RetrieveBeneficiaries/" + carbonyteID)

const GetLimit = () => client.get("https://api.carbonyte.io/transactionmodule/GetBudget?accountId=" + enfuceID)
const SetLimit = (amount) =>  client.post("https://api.carbonyte.io/transactionmodule/SetBudget?accountId=" + 
                              enfuceID + 
                              "&periodType=monthly&amount=" + amount)

const SendFunds = (amount) => client.post("https://api.carbonyte.io/walletmodule/SendMoneyProcedureImplementation?sourceAccountId=" + 
                              enfuceID + 
                              "&destination.type=SCAN&destination.id=A1226XEJ&destination.accountNumber=02620614&destination.sortCode=000000&destination.name=Selina%20Wells&currency=GBP&amount=" + 
                              amount + 
                              "&reference=salary")

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
  //return client.post(request)
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
    SendFunds
  };