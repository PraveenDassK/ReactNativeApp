import client from "./client";
import moment from "moment";

/**Getetrs**/
const GetCardByAccount = async() => {
    const request = await client.get("https://api.carbonyte.io/walletmodule/Enfuce/GetCardByAccount?accountId=686283112&auditUser=A12277V1")
    const requestData = request.data.details
    return requestData
}

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

const GetAllCardDetails = async(Id) => {
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
        averageMonth: thisMonth.total
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
    const request = await client.get("https://api.carbonyte.io/walletmodule/GetTransactions/A12274AW?size=500&fromTransactionDate=" + then)
    const requestData = request.data.details
    let total = 0
    let data = new Array(10).fill(0);
    requestData.content.forEach(element => {
        total += element.amount
        let category = moment().diff(element.transactionDate, 'Years')
        console.log(category)
        console.log(element.transactionDate)
        data[category] += element.amount
    });
    let xAxis = []
    for (let i = 0; i<10;i++){
        xAxis.push(moment().subtract(i,'M').format('MMM'))
    }
    return {
        "total": total,
        "yAxis": data.reverse(),
        "xAxis": xAxis.reverse()
    }
}

const GetTransactionsMonth = async (Id) => {
    const then = (moment().subtract(4,'W').format("YYYY-MM-DDTHH:MM")).replace(/\:/g,"%3A") + "%3A00%2B0000"
    const request = await client.get("https://api.carbonyte.io/walletmodule/GetTransactions/A12274AW?size=500&fromTransactionDate=" + then)
    const requestData = request.data.details
    let total = 0
    let data = new Array(4).fill(0);
    requestData.content.forEach(element => {
        total += element.amount
        let category = moment().diff(element.transactionDate, 'weeks')
        data[category] += element.amount
    });
    let xAxis = []
    for (let i = 0; i<4;i++){
        xAxis.push(moment().subtract(i,'w').format('Do'))
    }
    return {
        "total": total,
        "yAxis": data.reverse(),
        "xAxis": xAxis.reverse()
    }
}

const GetTransactionsWeek = async (Id) => {
    const then = (moment().subtract(1,'W').format("YYYY-MM-DDTHH:MM")).replace(/\:/g,"%3A") + "%3A00%2B0000"
    const request = await client.get("https://api.carbonyte.io/walletmodule/GetTransactions/A12274AW?size=500&fromTransactionDate=" + then)
    const requestData = request.data.details
    let total = 0
    let data = new Array(8).fill(0);
    requestData.content.forEach(element => {
        total += element.amount
        let category = moment().diff(element.transactionDate, 'days')

        data[category] += element.amount
    });
    let xAxis = []
    for (let i = 0; i<7;i++){
        xAxis.push(moment().subtract(i,'d').format('ddd'))
    }
    return {
        "total": total,
        "yAxis": data.reverse(),
        "xAxis": xAxis.reverse()
    }
}

const GetLimits = async(Id) => {
    const spend = (await GetTransactionsMonth()).total
    const request = await client.get(`https://api.carbonyte.io/transactionmodule/GetBudget?accountId=${Id}`)
    const requestData = request.data.details
    console.log(request)
    return {
        spend:spend,
        monthlyAmount:requestData.monthlyAmount
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
            "Free 0/0 after that0/0"
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
    return returnData
}

/**Beneficiaries */
const GetGroupBeneficiarys = (Id) => {
    const request = client.get("https://api.carbonyte.io/walletmodule/Wallet/RetrieveBeneficiaries?customerId=C1220XHD")
    const requestData = request.data.details
    return requestData
}

const RetriveBenificiaries = async(carbonyteid) => {
    const request = await client.get("https://api.carbonyte.io/walletmodule/RetrieveBeneficiaries/" + carbonyteid)
    const returnData = request.data.details
    return returnData
}

const RetriveGroupBeneficiariesByID = async (Id,amount) => {
    const request = await client.get("https://api.carbonyte.io/walletmodule/Wallet/RetrieveGroupBeneficiariesByCarbonyteId?carbonyteId=" + Id)
    const requestData = request.data.details
    let returnData = []
    for(let i = 0; i < requestData.length; i++){
        let beneficiaryData = await RetriveGroupBeneficiares(requestData[i].groupId)
        returnData.push({
            "name":beneficiaryData[0].groupName,
            "id":beneficiaryData[0].groupId,
            "benificiaries": beneficiaryData[0].beneficiariesDetails
        })
    }
    console.log(returnData)
    return returnData
}

const RetriveGroupBeneficiares = async (Id) => {
    const request = await client.get(`https://api.carbonyte.io/walletmodule/Wallet/RetrieveGroupBeneficiaries?groupId=${Id}`)
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

const AddBeneficiary = async (modulrCustomerId,phonenumber,accountName,accNum,sortCode) => {
    const request = await client.post("https://api.carbonyte.io/walletmodule/Wallet/CreateNewBeneficiary?modulrCustomerId="+modulrCustomerId,
  {
   "externalReference": "",
   "name": accountName,
   "birthdate": "",
   "emailAddress": "",
   "phoneNumber": phonenumber,
   "destinationIdentifier": {
   "type": "SCAN",
   "accountNumber": accNum,
   "sortCode": sortCode,
   "iban": "",
   "bic": "",
   "currency": "",
   "countrySpecificDetails": {
   "bankName": "",
   "bankAddress": "",
   "bankCity": "",
   "bankBranchName": "",
   "bankBranchCode": "",
   "bankCode": "",
   "chineseId": "",
   "province": "",
   "business": false
   }
   },
   "defaultReference": "Friend",
   "idToReplace": "",
   "address": {
   "addressLine1": "",
   "addressLine2": "",
   "postTown": "",
   "postCode": "",
   "country": ""
   },
   "qualifier": ""
  }
)}

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

const GetAccount = (enfuceid) => client.get("https://api.carbonyte.io/walletmodule/GetAccount/" + enfuceid)


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
    GetAccount,
    GetCardByAccount,
    GetAllCardDetails,
    RetriveBenificiaries,
    AddBeneficiary,
    GetTransactionsMonth,
    GetTransactionsWeek,
    GetSubscriptions,
    RetriveGroupBeneficiariesByID,
    RetriveGroupBeneficiares,
    GetLimits
}
