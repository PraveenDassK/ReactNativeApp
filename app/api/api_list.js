import client from "./client";

const GetCustomerDetails = () => client.get('https://api.carbonyte.io/regmodule/GetCustomerDetais?CustomerId=CC11875');
const SendLoginOTP = () => client.post("https://api.carbonyte.io/authverifymodule/SendLoginOTP?email=ryan.s%40carbonyte.io&phoneNumber=447494560838");
const GetAccountByCustomer = () => client.get("https://api.carbonyte.io/walletmodule/GetAccountByCustomer/C121ZFD6")
const GetCustomer = () => client.get("https://api.carbonyte.io/walletmodule/GetCustomer/C121ZFD6")

const GetAccount = () => client.get("https://api.carbonyte.io/walletmodule/GetAccount/A121BXVM")
const GetTransactions = () =>  client.get("https://api.carbonyte.io/walletmodule/GetTransactions/A121BXVM")


export default {
    GetCustomerDetails,
    SendLoginOTP,
    GetAccountByCustomer,
    GetCustomer,
    GetAccount,
    GetTransactions
  };