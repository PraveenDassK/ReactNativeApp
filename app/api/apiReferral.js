import client from "./client";

const getLinkSelection = async () => {
    const url = `https://api.carbonyte.io/walletmodule/GetSupportedASPSPs`
    const links = await client.get(url)
    return links.data.details
}

const getPaymentLink = async (obj) => {
    const url = `https://api.carbonyte.io/walletmodule/InitiatePaymentFromASPSP`
    const PaymentUrlRequest = await client.post(url, obj)
    return PaymentUrlRequest.data.details.redirectUrl
}

const getReferralCode = async ({ user, type, name }) => {
    const url = `https://api.carbonyte.io/referralmodule/GenerateReferralCode?carbonyteUserId=${user}&typeOfUser=${type}&nameOfReferred=${name}  `
    const referralCodeRequest = await client.post(url)
    return referralCodeRequest.data.details
}

const getVerifyReferralCode = async (code) => {
    try {
        const url = `https://api.carbonyte.io/referralmodule/VerifyReferralCode?referralCode=${code}`
        const verifyCode = await client.get(url)
        return verifyCode.data
    } catch {

    }
}

export default {
    getPaymentLink,
    getLinkSelection,
    getReferralCode,
    getVerifyReferralCode
}
