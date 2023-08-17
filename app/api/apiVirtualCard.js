import client from "./client";

const getNewVirtualCard = async (customerId, accountId, role, obj) => {
  const sendTogetNewVirtualCard = await client.post(
    `https://api.carbonyte.io/walletmodule/Enfuce/CreateVirtualCard/${customerId}/${accountId}/${role}`,
    obj
  );
  console.log(sendTogetNewVirtualCard);
  return sendTogetNewVirtualCard;
};
const getNewPhysicalCard = async (customerId, accountId, role, obj) => {
  const sendTogetNewVirtualCard = await client.post(
    `https://api.carbonyte.io/walletmodule/Enfuce/CreateMCBrandedCard/${customerId}/${accountId}/${role}`,
    obj
  );
  console.log(sendTogetNewVirtualCard);

  return sendTogetNewVirtualCard;
};

export default {
  getNewVirtualCard,
  getNewPhysicalCard,
};
