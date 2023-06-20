import client from "./client";

const SchedulePayment = async(obj) => {
    const scheduleRequest = await client.post(`https://api.carbonyte.io/walletmodule/Wallet/SchedulePayment`,obj)
    //If successful
    if(scheduleRequest.data.result){
        
    }
    return scheduleRequest.data.details
}

const GetScheduledPayments = async(ID) => {
    const request = await client.patch(`https://api.carbonyte.io/walletmodule/Wallet/RetrieveSchedulePaymentByCarbonyteId?carbonyteId=${ID}`)
    //If no data
    if(!request.data.result){
        return null
    }
    return request.data.details
}

export default {
    SchedulePayment,
    GetScheduledPayments
};
