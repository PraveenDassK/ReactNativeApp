import cardDetails from "../api/cardDetails";

/**
 * @dev This is used to call the enfuse endpoints to get the card details
 * @param cardID The Enfuse ID (this is a number string)
 * @returns The card details number, expiary and cvv
 */
async function getCardDetails(cardID){
  console.log(cardID,"ID")
  try {
    // Call the API to get the response details
    const responseDetails = await cardDetails.getCardResponse(cardID);

    // Call the API to get the card text using the obtained cardDataUrl and token
    const cardText = await cardDetails.getCardDetails(
      responseDetails.data.cardDataUrl,
      responseDetails.data.token
    );

    // Define the 'extractCardInfo' function to extract the card details
    const extractCardInfo = (data) => {
      const cardNumberRegex = /<p id="card-number">(\d{4} \d{4} \d{4} \d{4})<\/p>/;
      const expirationDateRegex = /<p id="card-exp-date">(\d{2}\/\d{2})<\/p>/;
      const cvvRegex = /<p id="card-cvv">(\d{3})<\/p>/;

      const cardNumberMatch = data.match(cardNumberRegex);
      const expirationDateMatch = data.match(expirationDateRegex);
      const cvvMatch = data.match(cvvRegex);

      const cardNumber = cardNumberMatch ? cardNumberMatch[1] : null;
      const expirationDate = expirationDateMatch ? expirationDateMatch[1] : null;
      const cvv = cvvMatch ? cvvMatch[1] : null;

      return {
        cardNumber,
        expirationDate,
        cvv,
      };
    };

    // Call the 'extractCardInfo' function to get the card details
    const cardInfo = extractCardInfo(cardText);

    // You can now access the card details individually or return the object
    console.log("Card Number:", cardInfo.cardNumber);
    console.log("Expiration Date:", cardInfo.expirationDate);
    console.log("CVV:", cardInfo.cvv);

    return cardInfo; // You can return the object if needed
  } catch (error) {
    console.error("Error occurred:", error);
    return null; // Return null or handle the error as required
  }
};

export default getCardDetails