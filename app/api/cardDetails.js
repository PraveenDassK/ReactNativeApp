
import { enfuceClient as client } from './client'

/**
 * 
 * @param {Str} id The user ID number of the account 687942912
 * @returns The endpoint data and post data to pass to the endpoint
 */
const getCardResponse = (id) => {
  const data = id
  const cardId = id
  const endpoint = `/v4/card/${cardId}/controlToken?auditUser=`

  
  return client.post(endpoint, data, {
    auth: {
      username: 'carbonyte_test_demo_apiuser',
      password: 'yAo8dvc*B6pDgfGcYQae_z!Hgndhv.MN'
    },

  });
}

/**
 * 
 * @param {*} url 
 * @param {*} token 
 * @returns 
 */
const getCardDetails = (url, token) => {
  client.setBaseURL(url)
  client.setHeaders({
    'Content-Type': 'application/x-www-form-urlencoded'
  })

  return client.any({
    method: 'POST', params: { token }, data: {}, headers: {
      'Accept': '*/*',
      'Content-Type': 'application/x-www-form-urlencoded',
    }
  })
}

/**
 * @dev Use this rather than the other two functions
 * @todo Get sort code of the card
 * @param {str} ID The user's account number
 * @returns An object with the extracted card details
 */
const GetCardFromID = async(ID) => {
  const responseDetails = await getCardResponse(ID)
  const cardText = await getCardDetails(
    responseDetails?.data?.cardDataUrl,
    responseDetails?.data?.token
  );
  console.log(cardText)

  const cardExpiry = cardText?.data?.substr(601, 4);
  const formattedExpiraty =
    cardExpiry?.slice(0, 2) + "/" + cardExpiry?.slice(2);

  const cardCVV = cardText?.data.substr(637, 3);

  const image = require("../assets/cardLion.png");

  const cardNumber = cardText?.data.substr(548, 16);
  const formattedCard = cardNumber?.replace(/(.{4})/g, "$1 ");

  return{
    name: formattedExpiraty,
    number: formattedCard,
    image: image,
    cvv: cardCVV,
  };
}

export default {
  getCardDetails,
  getCardResponse,
  GetCardFromID
}