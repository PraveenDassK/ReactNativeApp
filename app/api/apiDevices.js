import client from "./client";
import jwt_decode from "jwt-decode";

const GetDevices = async (customerID) => {
  const request = await client.get(
    `https://api.carbonyte.io/authverifymodule/GetUserDevices/${customerID}`
  );
  return request.data;
};

const DeleteDevice = async (customerId, deviceId) => {
  const deleteDeviceEndpoint = `/authverifymodule/DeleteUserDevice/${customerId}/${deviceId}`;
  console.log(typeof deviceId, typeof customerId);

  try {
    const response = await client.delete(deleteDeviceEndpoint, {
      customerId,
      deviceId,
    });

    console.log("Request:", response.config);
    console.log("Response:", response);

    if (response.ok) {
      // The response is ok, so we can use the data
      console.log("Data:", response.data);
      return response.ok;
    } else {
      // The response is not ok, so we handle the error
      console.log("Error1:", response.data);
      return response.ok;
    }
  } catch (error) {
    console.log("Error2:", error);
  }
};

export default {
  GetDevices,
  DeleteDevice,
};
