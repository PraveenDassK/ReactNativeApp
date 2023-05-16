import client from "./client";

const GetDevices = async (customerID) => {
  const request = await client.get(
    `https://api.carbonyte.io/authverifymodule/GetUserDevices/${customerID}`
  );
  return request.data;
};

const DeleteDevice = async (customerId, deviceId) => {
  const deleteDeviceEndpoint = `/authverifymodule/DeleteUserDevice/${customerId}/${deviceId}`;
  try {
    const response = await client.delete(deleteDeviceEndpoint);

    if (response.ok) {
      return response.ok;
    } else {
      return response.ok;
    }
  } catch (error) {
    console.log("Error:", error);
  }
};

export default {
  GetDevices,
  DeleteDevice,
};
