import client from "./client";

/**
 * 
 * @param {Str} ID The user ID
 * @returns An array with the beneficiary data or empty is there is no data or an error
 */
const GetUserBeneficiaries = async(ID) => {
    const beneficiaryRequest = await client.get(`https://api.carbonyte.io/walletmodule/Wallet/RetrieveBeneficiaries?customerId=C122BMS7`)
    if(beneficiaryRequest.data.result){

    }
    return beneficiaryRequest.data.details.content
}

const GetGroupBeneficiaries = async(ID) => {
    const request = await client.get(`https://api.carbonyte.io/walletmodule/Wallet/RetrieveGroupBeneficiariesByCarbonyteId?carbonyteId=${ID}`)
    
    //If the call failed
    if(!request.data.result) return ""
    return request
}

const CreateNewGroupBeneficiary = async(obj) => {
    
    const post = await client.post(`https://api.carbonyte.io/walletmodule/Wallet/NewGroupBeneficiary`,
        obj
    )

    //On success
    if(post.data.result){

    }
    return post.data.result
}

export default {
    GetUserBeneficiaries,
    GetGroupBeneficiaries,
    CreateNewGroupBeneficiary
};
