import client from "./client";

const endpoint = 
'/regmodule/GetCustomerDetais?CustomerId=CC11875'
;
const endPoint = "/authverifymodule"


const getListings = () => client.get(endpoint);
const SendLoginOTP = ({email, phoneNumber}) => client.post(endPoint+"/SendLoginOTP", { email, phoneNumber }, {params: { email, phoneNumber}}); 
//client.post("https://api.carbonyte.io/authverifymodule/SendLoginOTP?email=ryan.s%40carbonyte.io&phoneNumber=447494560838");
const verifyLoginOTP = ({email, phoneNumber, emailOTP, phoneOTP}) => client.post(endPoint + "/VerifyLoginOTP",{email, phoneNumber, emailOTP, phoneOTP} ,{params: {email, phoneNumber, emailOTP, phoneOTP}});

const GetAccountByCustomer = (carbonID) => client.get("https://api.carbonyte.io/walletmodule/GetAccountByCustomer/"+carbonID)

export default {
    getListings,
    SendLoginOTP,
    GetAccountByCustomer,
    verifyLoginOTP
  };