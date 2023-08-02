import client from "./client"



const verifyDocument = (clientReference, documentType, frontImage, backImage,expoPushToken) => {
    const endpoint = `/authverifymodule/VerifyDocument?tokenId=${expoPushToken}`
    
    return client.post(endpoint, { clientReference, documentType, frontImage, backImage });
}

export default {
    verifyDocument
};