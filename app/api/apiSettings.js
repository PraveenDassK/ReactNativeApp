// import client from "./client";
import { jwtClient as client } from "./client";
import { format as prettyFormat } from "pretty-format";
/**
 * @dev This gets the card settings
 * @param {Account ID} Id
 * @returns an object of the toggles
 */
const GetSettings = async (Id) => {
  try {
    const response = await client.get(`/cardmodule/GetToggles?cardId=${Id}`);
    console.log(response, "this is res after api call for jwt");
    const requestData = response?.data?.details;

    return requestData;
  } catch {
    SetToggles(Id, false, false, false, false);
    return GetSettings(Id);
  }
};

const SetToggles = (enfuceid, online, swipe, atm, contactless) => {
  const request =
    "/cardmodule/SetToggles?cardId=" +
    enfuceid +
    "&onlineTransactions=" +
    online +
    "&swipePayments=" +
    swipe +
    "&atmWithdrawals=" +
    atm +
    "&contactlessPayments=" +
    contactless;
  return client.post(request);
};

const GetCardById = async (Id) => {
  const response = await client.get(
    `/walletmodule/Enfuce/GetCardById?cardId=${Id}`
  );
  return response?.data?.details;
};
const SetCardLimit = async (card, Id) => {
  console.log(card, "before api call");
  const response = await client.patch(
    `/cardmodule/SetCardUsageLimits?cardId=${Id}`,
    card
  );
  console.log(response, "this is response of card usage limit");
  return response;
};

export default {
  GetSettings,
  SetToggles,
  GetCardById,
  SetCardLimit,
};
