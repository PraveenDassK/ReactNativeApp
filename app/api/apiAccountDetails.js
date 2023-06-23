import client from "./client";
import apiCarbon from "./apiCarbon";

/**
 * @dev Use this for a specific Enfuse account only
 * @notice  Function will not work with a carbonyte ID
 *          Only gets one account
 * @notice If account data is needed from a carbonyte ID, use GetAllAccounts
 * @param {Account ID} Id Takes the account ID and returns details about the user
 * @returns Data for the user
 * name
 * accountId    (this is the same ID as the param)
 * customerId   Carbonyte ID
 * balance      The current balance in the account
 * status       The current status of the account
 *              "ACTIVE" is live
 */
const GetCustomerDetails = async (Id) => {
    const request = await client.get(
      `https://api.carbonyte.io/walletmodule/GetAccount/${Id}`
    );
    const requestData = request?.data?.details;
    const data = {
      name: requestData.name,
      accountId: requestData.id,
      customerId: requestData.customerId,
      status: requestData.status,
      balance: requestData.balance,
    };
    return data;
  };

  
const GetAccountData = async (Id) => {
    const customerDetails = await GetCustomerDetails(Id)
    const carbonSpend = await apiCarbon.GetUserImpact("CC1")
    return {customerDetails,carbonSpend}
}

export default {
    GetAccountData,
    GetCustomerDetails
}