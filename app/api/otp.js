import client from "./client";

const endpoint = '/regmodule/SendRegistrationOTP'
const otp = ({email, phoneNumber}) => client.post(endpoint, { email, phoneNumber }, {params: { email, phoneNumber}});


// "https://example.com", { myData: {} }, { params: { myQuery: "foo" }}
export default {
  otp,
};
