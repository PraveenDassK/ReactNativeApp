import client from "./client";

/**
 * {
      "sourceAccountId": "A122HTHM",
      "destination": {
        "type": "SCAN",
        "id": "A1226WEM",
        "accountNumber": "12345678",
        "sortCode": "000000",
        "name": "Jack"
      },
      "currency": "GBP",
      "amount": 1,
      "reference": "Transfer"
    }
 */
const sendMoney = async (obj) => {
  const request = await client.post("https://api.carbonyte.io/walletmodule/SendMoneyProcedureImplementation", obj);
  return request
}

const sendToGroup = async (obj) => {
  const sendToGroupRequest = await client.post(`https://api.carbonyte.io/walletmodule/Wallet/SendMoneyToGroupBeneficiaries`,
    obj
  )
  return sendToGroupRequest
}
/**
 * {
  "sourceAccountId": "string",
  "groupId": "string",
  "currency": "string",
  "amount": 0,
  "reference": "string"
  }
 */

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
    "aspspId": "H120000002",
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
  sendMoney,
  sendToGroup,
  getPaymentLink
}
