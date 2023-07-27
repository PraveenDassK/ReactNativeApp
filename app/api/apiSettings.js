// import client from "./client";
import { jwtClient as client } from './client'

/**
 * @dev This gets the card settings 
 * @param {Account ID} Id
 * @returns an object of the toggles
 */
const GetSettings = async (Id) => {
    try {
        const request = await client.get(
            `https://api.carbonyte.io/cardmodule/GetToggles?modulrAccountId=${Id}`
        );
        const requestData = request?.data?.details;
        return requestData;
    } catch {
        SetToggles(Id,false,false,false,false)
        return(GetSettings(Id))
    }
};

const SetToggles = (enfuceid,
    online,
    swipe,
    atm,
    contactless
) => {
    const request = "https://api.carbonyte.io/cardmodule/SetToggles?accountId=" +
        enfuceid + "&onlineTransactions=" +
        online + "&swipePayments=" +
        swipe + "&atmWithdrawals=" +
        atm + "&contactlessPayments=" +
        contactless
    return client.post(request)
}

export default {
    GetSettings,
    SetToggles
}