
import client from "./client"

const endpoint = '/authverifymodule/SendLoginOTP'

const loginOTP = ({email, phoneNumber}) => client.post(endpoint, { email, phoneNumber }, {params: { email, phoneNumber}});


const verifyEndpoint = '/regmodule/VerifyRegistrationOTP'
const loginOtpVerification = (credentials) => client.post(verifyEndpoint, credentials, {params: credentials});

export default {
    loginOTP,
    loginOtpVerification
}