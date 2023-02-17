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

const GetCardDetails = async(Id) => {
    let data 
    try{
        const request = await client.get(`https://api.carbonyte.io/walletmodule/Enfuce/GetCardByAccount?accountId=${Id}`)
        const requestData = request.data.details[0]
        data = {
            "accountId": requestData.id,
            "cardID": requestData.id,
            "cardNumberMasked": "**** ****  **** " + requestData.maskedCardNumber.substr(requestData.maskedCardNumber.length - 4),
            "isMain" : (requestData.cardRole == "MAIN"),
            "inPost" : "true"
        }
    }catch{
        data = {
            "accountId": Id,
            "cardID": "000000",
            "cardNumberMasked": "**** ****  **** ****",
            "isMain" : false,
            "inPost" : "true"
        }
    }

    return data
}

const GetBalance = async (Id) => {
    const request = await client.get(`https://api.carbonyte.io/walletmodule/GetAccount/${Id}`);
    const requestData = request.data.details.availableBalance
    console.log(request)
    return requestData
}

const GetTransactions = async(Id,amount) =>  {
    let toGet = amount ? amount : 10
    const request = await client.get(`https://api.carbonyte.io/walletmodule/GetTransactions/${Id}?size=${toGet}`)
    const returnData = request.data.details
    let total = 0
    returnData.content?.forEach(transaction => {
        total +=transaction.amount
    })
    return({
        transactions: returnData.content,
        total:total,
        number:returnData.size
    })
}

const GetCustomersAccounts = async (Id) => {
    const request = await client.get(`https://api.carbonyte.io/walletmodule/GetAccountByCustomer/${Id}`)
    const requestData = request.data.details
    const returnData = {

    }
    return requestData
}


const GetTransactionsThisMonth = async(Id) =>  {
    const then = (moment().startOf('month').format("YYYY-MM-DDTHH:MM:SS")).replace(/\:/g,"%3A") + "%2B0000"
    const request = await client.get(`https://api.carbonyte.io/walletmodule/GetTransactions/${Id}?fromTransactionDate=${then}`)
    const requestData = request.data.details

    let total = 0
    let data = new Array(10).fill(0);
    requestData.content.forEach(element => {
        total += element.amount
        let category = moment().diff(element.postedDate, 'Years')
        data[category] += element.amount
    });
    return {
        "total": total,
        "transactions": requestData.content
    }
}
    
const GetAnalysisData = async (Id) =>{
    const balance = await GetBalance(Id)
    const transactions = await GetTransactions(Id,500)
    const thisMonth = await GetTransactionsThisMonth(Id)

    return {
        balance: balance,
        totalSpend: transactions.total,
        totalTransactions: transactions.number,
        average: transactions.total / transactions.number,
        transactions: transactions.transactions,
        average: thisMonth.total
    }
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
    const request = await client.get(`https://api.carbonyte.io/ecomodule/Earthly/GetProjectById?projectId=${Id}`)
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
            returnData.assets[2],
            returnData.assets[3]
        ]
    }
}

const GetStatments = async(Id) => {
    const transactions = await GetTransactions(Id,500)
    console.log(transactions)

    //return transactions
}

const GetTransactionsYear = async (Id) => {
    const then = (moment().subtract(52,'W').format("YYYY-MM-DDTHH:MM")).replace(/\:/g,"%3A") + "%3A00%2B0000"
    const request = await client.get("https://api.carbonyte.io/walletmodule/GetTransactions/A12274AW?fromTransactionDate=" + then)
    const requestData = request.data.details
    let total = 0
    let data = new Array(10).fill(0);
    requestData.content.forEach(element => {
        total += element.amount
        let category = moment().diff(element.postedDate, 'Years')
        data[category] += element.amount
    });
    const labels = ["Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct"]
    return {
        "total": total,
        "yAxis": data,
        "xAxis": labels
    }
}

/**Subcriptions */
const GetSubscriptions = async() =>{
    const request = await client.get(`https://api.carbonyte.io/submodule/Subcription/ListSubcriptions`)
    const requestData = request.data.details
    let returnData = []
    requestData.forEach(card => {
        let description = card.subcriptionFeatureList[0].benefits
        .split(
            "Free 0/0 after that0/0@\n"
        )

        returnData.push({
            title: card.name.substring(
                0,
                card.name.lastIndexOf("(") - 1
            ),
            price: card.name.substring(
                card.name.indexOf("(") + 1, 
                card.name.lastIndexOf(")")
            ),
            description: description
        })
    })
    console.log(returnData)
    return returnData
}

/**Beneficiaries */
const GetGroupBeneficiarys = (Id) => {
    const request = client.get("https://api.carbonyte.io/walletmodule/Wallet/RetrieveBeneficiaries?customerId=C1220XHD")
    const requestData = request.data.details
    return requestData
}

/**Posters */
const SendFunds = (amount,from,name,accountNumber,sortCode,address) => {
    const request = client.post("https://api.carbonyte.io/walletmodule/SendMoneyProcedureImplementation",
    {
        "sourceAccountId": from,
        "destination": {
        "type": "SCAN",
        "id": "A1226WEM",
        "accountNumber": accountNumber,
        "sortCode": sortCode,
        "name": name,
        "address": address
        },
        "currency": "GBP",
        "amount": amount,
        "reference": "Transfer"
    })
    return request
}

const StatmentPost = (Id) => {
    try{
        //const request = client.post("https://api.carbonyte.io/walletmodule/SendMoneyProcedureImplementation",
        alert("A statment has been emailed to you")
        return true
    }catch{
        alert("Something went wrong")
        return false
    }
}

const ReportTransaction = (Id) => {

}


export default {
    GetBalance,
    GetCustomerDetails,
    GetCardDetails,
    GetProjectList,
    GetProject,
    GetUserImpact,
    GetTransactions,
    SendFunds,
    GetCustomersAccounts,
    ReportTransaction,
    GetGroupBeneficiarys,
    GetStatments,
    StatmentPost,
    GetAnalysisData,
    GetTransactionsYear,
    GetSubscriptions
}