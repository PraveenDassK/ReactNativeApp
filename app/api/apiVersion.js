import client from "./client";

const GetVersion = async() => {
    const versionRequest = await client.get(`https://api.carbonyte.io/authverifymodule/GetAppVersion`)
    return versionRequest.data.details.appVersionId
}

export default {
    GetVersion,
}