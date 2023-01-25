import client from "./client";

const endpoint = 
'/regmodule/GetCustomerDetais?CustomerId=CC11875'
;
const endPoint = "/authverifymodule"


const getListings = () => client.get(endpoint);
const SendLoginOTP = ({email, phoneNumber}) => client.post(endPoint+"/SendLoginOTP", { email, phoneNumber }, {params: { email, phoneNumber}}); 
//client.post("https://api.carbonyte.io/authverifymodule/SendLoginOTP?email=ryan.s%40carbonyte.io&phoneNumber=447494560838");
const verifyLoginOTP = ({email, phoneNumber, emailOTP, phoneOTP}) => client.post(endPoint + "/VerifyLoginOTP",{email, phoneNumber, emailOTP, phoneOTP} ,{params: {email, phoneNumber, emailOTP, phoneOTP}});

const GetAccountByCustomer = () => client.get("https://api.carbonyte.io/walletmodule/GetAccountByCustomer/C121ZFD6")

export default {
    getListings,
    SendLoginOTP,
    GetAccountByCustomer,
    verifyLoginOTP
  };