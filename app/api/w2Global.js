import client from "./client"

const endpoint = '/authverifymodule/VerifyDocument'

const verifyDocument = (userDocument) => client.post(endpoint, userDocument);

export default {
    verifyDocument
};