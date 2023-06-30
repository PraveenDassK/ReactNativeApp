import client from "./client";

/**
 * @dev This gets all of the user's single beneficiaries
 * @param {Str} ID The user ID
 * @returns An array with the beneficiary data or empty is there is no data or an error
 */
const GetUserBeneficiaries = async (ID) => {
  const beneficiaryRequest = await client.get(
    `https://api.carbonyte.io/walletmodule/Wallet/RetrieveBeneficiaries?customerId=C122BMS7`
  );
  if (beneficiaryRequest.data.result) {
  }
  return beneficiaryRequest.data.details.content;
};

/**
 * @dev This gets the group benefificiaries for the user
 * @param {Str} ID The Carbonyte ID of the user
 * @returns An array with all of the beneficiaries
 */
const GetGroupBeneficiaries = async (ID) => {
  const request = await client.get(
    `https://api.carbonyte.io/walletmodule/Wallet/RetrieveGroupBeneficiariesByCarbonyteId?carbonyteId=${ID}`
  );
  //If the call failed
  if (!request.data.result) return "";
  return request.data.details;
};

/**
 * 
 * @param {Obj} obj The beneficiary object to pass
 * {
   "beneficiariesDetails":[
      {
         "beneficiariesId":"B12006KTPP",
         "beneficiariesName":"Renvickvick"
      }
   ],
   "carbonyteId":"CC1",
   "groupName":"Gg"
}
 * @returns True if the addition was a success
 */
const CreateNewGroupBeneficiary = async (obj) => {
  console.log(obj);
  const post = await client.post(
    `https://api.carbonyte.io/walletmodule/Wallet/NewGroupBeneficiary`,
    obj
  );

  //On success
  if (post.data.result) {
  }
  return post.data.result;
};

/**
 * 
 * @param {Obj} obj The scheduled payment object
 * {
  "individualOrGroupType": 0,
  "fromCarbonyteId": "string",
  "frommodulrAccountId": "string",
  "toBeneficiaryOrGroupId": "string",
  "date": "2023-05-02T14:13:57.879Z",
  "amount": 0
}
 * @returns 
 */
const SchedulePayment = async (obj) => {
  const scheduleRequest = await client.post(
    `https://api.carbonyte.io/walletmodule/Wallet/SchedulePayment`,
    obj
  );
  //If successful
  if (scheduleRequest.data.result) {
  }
  return scheduleRequest.data.details;
};

const GetScheduledPayments = async (ID) => {
  const request = await client.patch(
    `https://api.carbonyte.io/walletmodule/Wallet/RetrieveSchedulePaymentByCarbonyteId?carbonyteId=${ID}`
  );
  //If no data
  if (!request.data.result) {
    return null;
  }
  return request.data.details;
};

const checkBeneficary = async (userAccount, requestObj) => {
  const obj = {
    "paymentAccountId": "A122HTHM",
    "sortCode": "000000",
    "accountNumber": "12345674",
    "secondaryAccountId": "1",
    "accountType": "PERSONAL",
    "name": "a"
  }
  const beneficaryCheckRequest = await client.post(`https://api.carbonyte.io/walletmodule/AccountNameCheck/${userAccount}`,
    requestObj
  )
  return beneficaryCheckRequest?.data.details
}
const AddBeneficiary = (modulrCustomerId,obj) => client.post("https://api.carbonyte.io/walletmodule/Wallet/CreateNewBeneficiary?modulrCustomerId=" + modulrCustomerId, obj)

const DeleteBenificiary = async (enfuseId, beneficaryId) => {
  return await client.delete(`https://api.carbonyte.io/walletmodule/Wallet/DeleteBeneficiaries?customerId=${enfuseId}&beneficiaryId=${beneficaryId}`)
}

/**
 * 
 * @param {*} Id 
 * @returns 
 */
const DeleteGroupBenificiary = async (Id) => {
  return await client.delete("https://api.carbonyte.io/walletmodule/Wallet/DeleteGroupBeneficiaries?groupId=" + Id)
}

export default {
  GetUserBeneficiaries,
  GetGroupBeneficiaries,
  CreateNewGroupBeneficiary,
  SchedulePayment,
  GetScheduledPayments,
  checkBeneficary,
  AddBeneficiary,
  DeleteBenificiary,
  DeleteGroupBenificiary
};
