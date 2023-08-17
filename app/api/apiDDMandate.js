import client from "./client";

const GetOutBound = async (Id) => {
  const request = await client.get(
    `https://api.carbonyte.io/walletmodule/GetOutboundMandatesByAccountId/${Id}`
  );
  const requestData = request?.data?.details?.mandatesList;
  return requestData;
};

const DeleteDDBound = async (Id, obj) => {
  const request = await client.post(
    `https://api.carbonyte.io/walletmodule/CancelMandate/${Id}
    `,
    obj
  );
  return request;
};
export default {
  GetOutBound,
  DeleteDDBound,
};
