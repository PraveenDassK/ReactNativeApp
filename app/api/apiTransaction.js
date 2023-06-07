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

export default {
  sendMoney,
  sendToGroup
}
