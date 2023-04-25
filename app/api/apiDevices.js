import client from "./client";
import jwt_decode from "jwt-decode";

const GetDevices = async (customerID) => {
    const request = await client.get(
        `https://api.carbonyte.io/authverifymodule/GetUserDevices/${customerID}`,);
    return request.data;
};

const DeleteDevice = async(deviceID) => {
    
}

export default {
    GetDevices,
};
