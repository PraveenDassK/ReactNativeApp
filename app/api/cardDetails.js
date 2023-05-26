import { enfuceClient as client } from './client'
import {format as prettyFormat} from 'pretty-format'; // development only

const getPinControlToken = async(id) => {
    //https://integration-api-cat2.{{environment}}.ext.{{realm}}.cia.enfuce.com/pincontrol/v2/plastic/{plasticId}
    const data = id
    const cardId = id
    const endpoint = `/pincontrol/v2/plastic/${id}`
    
    return await client.post(endpoint, data, {
      auth: {
        username: 'carbonyte_test_demo_apiuser',
        password: 'yAo8dvc*B6pDgfGcYQae_z!Hgndhv.MN'
      },
    });}
    
/**
 * @dev This gets the token to request the card details
 * @todo Update the username and password in the payload to live when live
 * @param {Str} id The user ID number of the account for example 687942912
 * @returns The endpoint data and post data to pass to the endpoint
 */
const getCardResponse = (id) => {
  const data = id
  const cardId = id
  const endpoint = `/card/v4/card/${cardId}/controlToken?auditUser=`
  
  return client.post(endpoint, data, {
    auth: {
      username: 'carbonyte_test_demo_apiuser',
      password: 'yAo8dvc*B6pDgfGcYQae_z!Hgndhv.MN'
    },
  });
}

/**
 * @dev This gets the card details
 * @param {Str} url The URL provided by the getCardResponse return
 * @param {Srt} token The request token provided by the getCardResponse return
 * @returns The unedited HTML return for the card details
 */
const getCardDetails = (url, token) => {
  client.setBaseURL(url)


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
  console.log(responseDetails,cardText)

  const cardExpiry = cardText?.data?.substr(601, 4);
  const formattedExpiraty =
    cardExpiry?.slice(0, 2) + "/" + cardExpiry?.slice(2);

  const cardCVV = cardText?.data?.substr(637, 3);

  const image = require("../assets/cardLion.png");

  const cardNumber = cardText?.data?.substr(548, 16);
  const formattedCard = cardNumber?.replace(/(.{4})/g, "$1 ");

  return{
    name: formattedExpiraty,
    number: formattedCard,
    image: image,
    cvv: cardCVV,
  };
}

const getPlasticCards = async (id) => {
  client.setBaseURL('https://integration-api-cat2.demo.ext.test.cia.enfuce.com')
  const endpoint = `/card/v3/${id}/plastic?auditUser=`

//const string = 'https://integration-api-cat2.demo.ext.test.cia.enfuce.com/card/v3/714613712/plastic?auditUser='

  const response = await client.get(endpoint, null, {
    
    auth: {
      username: 'carbonyte_test_demo_apiuser',
      password: 'yAo8dvc*B6pDgfGcYQae_z!Hgndhv.MN'
    }})

  console.log('plastic cards', response.ok, prettyFormat(response.data),prettyFormat(response))
}

export default {
  getCardDetails,
  getCardResponse,
  GetCardFromID,
  getPinControlToken,
  getPlasticCards
}