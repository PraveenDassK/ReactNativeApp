import client from "./client";

/**
 * @dev customer details endpoint
 */
const enfuceID = "A12277V1"


const GetCustomerDetails = () => client.get('https://api.carbonyte.io/regmodule/GetCustomerDetais?CustomerId=C121ZFD6');
const SendLoginOTP = () => client.post("https://api.carbonyte.io/authverifymodule/SendLoginOTP?email=ryan.s%40carbonyte.io&phoneNumber=447494560838");


const GetAccountByCustomer = () => client.get("https://api.carbonyte.io/walletmodule/GetAccountByCustomer/C121ZFD6")
const GetCustomer = () => client.get("https://api.carbonyte.io/walletmodule/GetCustomer/C121ZFD6")

const GetAccount = () => client.get("https://api.carbonyte.io/walletmodule/GetAccount/A12277V1")
const GetTransactions = () =>  client.get("https://api.carbonyte.io/walletmodule/GetTransactions/A121BXVM?size=500")

const RetriveBenificiaries = () => client.get("https://api.carbonyte.io/walletmodule/RetrieveBeneficiaries/C121ZFD6")

const GetLimit = () => client.get("https://api.carbonyte.io/transactionmodule/GetBudget?accountId=A121BXVM")
const SetLimit = (amount) => client.post("https://api.carbonyte.io/transactionmodule/SetBudget?accountId=A121BXVM&periodType=monthly&amount=" + amount)

const SendFunds = () => client.post("https://api.carbonyte.io/walletmodule/SendMoneyProcedureImplementation?sourceAccountId=A12277V1&destination.type=SCAN&destination.id=A1226XEJ&destination.accountNumber=02620614&destination.sortCode=000000&destination.name=Selina%20Wells&currency=GBP&amount=1&reference=salary")

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
  const request = "https://api.carbonyte.io/cardmodule/SetToggles?accountId=A121BXVM&onlineTransactions="+ online +"&swipePayments="+ swipe +"&atmWithdrawals=" + atm + "&contactlessPayments=" + contactless
  //return client.post(request)
}
const GetToggles = () => client.get("https://api.carbonyte.io/cardmodule/GetToggles?accountId=A121BXVM")

const Checkout = () => client.post("https://api.carbonyte.io/ecomodule/Earthly/Checkout")

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