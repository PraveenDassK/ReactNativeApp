import client from "./client";
import moment from "moment";

/**Details */
const GetCustomerDetails = async (Id) => {
    const request = await client.get(`https://api.carbonyte.io/walletmodule/GetAccount/${Id}`);
    const requestData = request.data.details
    const data = {
        "name": requestData.name,
        "accountId": requestData.id,
        "customerId": requestData.customerId,
        "status": requestData.status,
        "balance": requestData.balance, 
    }
    return data
}

const GetCardDetails = async() => {
    const request = await client.get(`https://api.carbonyte.io/walletmodule/Enfuce/GetCardByAccount?accountId=686283112`)
    const requestData = request.data.details
    const data = {
        "accountId": requestData.id,
        "cardID": requestData.id,
        "cardNumberMasked": requestData.maskedCardNumber,
        "isMain" : (requestData.cardRole == "MAIN")
    }
    return data
}

const GetBalance = async (Id) => {
    console.log(Id)
    const request = await client.get(`https://api.carbonyte.io/walletmodule/GetAccount/${Id}`);
    const requestData = request.data.details.availableBalance
    return requestData
}

/**Carbon */
const GetProjectList = async(Id) => {
    const request = await client.get("https://api.carbonyte.io/ecomodule/Earthly/GetProjectList")
    const requestData = request.data.details.data
    let returnData = []
    requestData.forEach(project => {
        returnData.push({
            id: project.id,
            name:project.displayName,
            price:project.asset.displayAssetPriceWithMarkup.toFixed(2),
            image: project.image,
            description: project.description
                .replace(/<[^>]*>/g, "")
                .substring(0, 150)
                .trim(),
            type:project.asset.type,
            tags:project.tags
        })
    });
    return returnData
}

const GetProject = async(Id) => {
    const request = await client.get("https://api.carbonyte.io/ecomodule/Earthly/GetProjectById?projectId=5f96f967a3a85800118be4d1")
    const project = request.data.details
    let returnData = {
        id: project.id,
        name:project.displayName,
        price:project.asset.displayAssetPriceWithMarkup.toFixed(2),
        image: project.image,
        description: project.description
            .replace(/<[^>]*>/g, "").substring(0, 150),
        type:project.asset.type,
        tags:project.tags
    }
    return returnData
}

const GetUserImpact = async(Id) => {
    const request = await client.get(`https://api.carbonyte.io/ecomodule/Earthly/GetUserImpacts/${Id}`)
    const returnData = request.data.details
    return {
        totalOffset: returnData.data.totalOffsetInTonnes.toFixed(1),
        totalAssets: returnData.data.totalNumAssets,
        assets: [
            returnData.assets[0],
            returnData.assets[1],
            returnData.assets[2]
        ]
    }
}

const GetTransactions = async(Id,amount) =>  {
    let toGet = amount ? amount : 10
    const request = await client.get(`https://api.carbonyte.io/walletmodule/GetTransactions/${Id}?size=${toGet}`)
    const returnData = request.data.details
    return({
        transactions: returnData.content,
        total:50,
        number:returnData.size
      })
  }
export default {
    GetBalance,
    GetCustomerDetails,
    GetCardDetails,
    GetProjectList,
    GetProject,
    GetUserImpact,
    GetTransactions
}