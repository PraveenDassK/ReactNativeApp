import client from "./client";

const getListings = () => client.get('https://api.carbonyte.io/regmodule/GetCustomerDetais?CustomerId=CC11875');
const SendLoginOTP = () => client.post("https://api.carbonyte.io/authverifymodule/SendLoginOTP?email=ryan.s%40carbonyte.io&phoneNumber=447494560838");
const GetAccountByCustomer = () => client.get("https://api.carbonyte.io/walletmodule/GetAccountByCustomer/C121ZFD6")

export default {
    getListings,
    SendLoginOTP,
    GetAccountByCustomer
  };