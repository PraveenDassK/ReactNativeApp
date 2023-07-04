import client from "./client";

const getLinkSelection = async () => {
  const url = `https://api.carbonyte.io/walletmodule/GetSupportedASPSPs`
  const links = await client.post(url)
  return links.data.details
}

const getPaymentLink = async () => {
  const obj = {
    "paymentAmount": {
      "currency": "GBP",
      "value": 10
    },
    "paymentReference": "Payment from Jack",
    "destination": {
      "type": "ACCOUNT",
      "id": "A122HTHM",
      "accountNumber": "03011666",
      "sortCode": "000000",
      "name": "Jack"
    },
    "aspspId": "H120000001",
    "paymentContext": {
      "paymentContextCode": "",
      "deliveryAddress": {
        "addressLine1": "",
        "addressLine2": "",
        "postTown": "",
        "postCode": "",
        "country": ""
      },
      "merchantCategoryCode": "",
      "merchantCustomerIdentification": ""
    }
  }
  const url = `https://api.carbonyte.io/walletmodule/InitiatePaymentFromASPSP`
  const PaymentUrlRequest = await client.post(url, obj)
  return PaymentUrlRequest.data.details.redirectUrl
}

export default {
  getPaymentLink,
  getLinkSelection
}
