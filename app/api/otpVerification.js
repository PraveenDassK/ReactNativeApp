import client from "./client";

const endpoint = '/regmodule/VerifyRegistrationOTP'
const otpVerification = (credentials) => client.post(endpoint, credentials, {params: credentials});


// "https://example.com", { myData: {} }, { params: { myQuery: "foo" }}
export default {
  otpVerification,
};
