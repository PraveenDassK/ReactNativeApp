import client from "./client";

const endpoint = 
'https://api.carbonyte.io/regmodule/GetCustomerDetais?CustomerId=CC11875'
;

const getListings = () => client.get(endpoint);
const SendLoginOTP = () => client.post("https://api.carbonyte.io/authverifymodule/SendLoginOTP?email=ryan.s%40carbonyte.io&phoneNumber=447494560838");

export default {
    getListings,
    SendLoginOTP
  };