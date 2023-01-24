import client from "./client"

const endpoint = '/authverifymodule/VerifyDocument'

const verifyDocument = (clientReference, documentType, frontImage, backImage) => client.post(endpoint, [{ clientReference, documentType, frontImage, backImage}]);

export default {
    verifyDocument
};