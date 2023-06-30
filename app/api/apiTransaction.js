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

/**
 * @dev This gets x amount of transactions for the user
 * @todo Add in time period and pagination
 * @param {Account ID} Id
 * @param {Int} amount The amount of transactions to get
 * @returns An object of the transaction data
 * {
 *      transactions    An array of the items in that transaction
 *      total           The total spend in all of the transactions
 *      number          The amount of transactions in the transactions array
 * }
 */
const GetTransactions = async (Id, amount, typeSelection) => {
  try {
    let toGet = amount ? amount : 10;
    const request = await client.get(
      `https://api.carbonyte.io/walletmodule/GetTransactions/${Id}?size=${toGet}`
    );
    const returnData = request?.data?.details;

    //Process the data
    let total = 0;
    let transactions = []
    returnData?.content.forEach((transaction) => {
      console.log(transaction.credit)
      total += transaction.amount;
      
      if(transaction.credit == false){
        transactions.push(transaction)
      }
    });
    console.log(transactions)
  
    return {
      transactions: transactions,
      total: total,
      number: returnData.size,
    };
  } catch {
    return {
      transactions: [],
      total: 0,
      number: 0,
    };
  }
};

export default {
  sendMoney,
  sendToGroup,
  getPaymentLink,
  GetTransactions
}
