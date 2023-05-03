import client from "./client";

/**
 * 
 * @param {Str} ID The modulr ID
 * @returns bool on success
 */
const DeleteAccount = async(ID) => {
    const deleteRequest = await client.patch(`https://api.carbonyte.io/walletmodule/Wallet/DeletePrepaidAccountByAccountId/${ID}`)
    //If successful
    if(deleteRequest.data.result){
        
    }
    return deleteRequest.data.details
}

export default {
    DeleteAccount,
};
