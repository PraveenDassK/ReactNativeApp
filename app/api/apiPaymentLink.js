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

export default {
  getPaymentLink,
  getLinkSelection
}
