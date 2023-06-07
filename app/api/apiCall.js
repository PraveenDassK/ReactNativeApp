import client from "./client";
import moment from "moment";

/**
 * @dev Use this for a specific Enfuse account only
 * @notice  Function will not work with a carbonyte ID
 *          Only gets one account
 * @notice If account data is needed from a carbonyte ID, use GetAllAccounts
 * @param {Account ID} Id Takes the account ID and returns details about the user
 * @returns Data for the user
 * name
 * accountId    (this is the same ID as the param)
 * customerId   Carbonyte ID
 * balance      The current balance in the account
 * status       The current status of the account
 *              "ACTIVE" is live
 */
const GetCustomerDetails = async (Id) => {
  const request = await client.get(
    `https://api.carbonyte.io/walletmodule/GetAccount/${Id}`
  );
  const requestData = request?.data?.details;
  const data = {
    name: requestData.name,
    accountId: requestData.id,
    customerId: requestData.customerId,
    status: requestData.status,
    balance: requestData.balance,
  };
  return data;
};

/**
 * @dev This is used to get all the Enfuse IDs from a carbonyte ID
 * @param {Carbonyte ID} Id 
 * @returns An array of objects, each item in the array is a different account
 * Each object in the array looks like this:
 * {
    "id": "A12274AW",
    "name": "Renvick Fernandes",
    "balance": "7301.00",
    "availableBalance": null,
    "currency": "GBP",
    "status": "ACTIVE",
    "identifiers": [
        {
            "type": "SCAN",
            "accountNumber": "02628116",
            "sortCode": "000000",
            "iban": null,
            "bic": null,
            "currency": null,
            "countrySpecificDetails": null
        }
    ],
    "customerId": "C1220XHD",
    "customerName": "Renvick Fernandes",
    "externalReference": null,
    "accessGroups": [],
    "createdDate": "2023-01-17T11:14:31.044+00:00",
    "directDebit": true
    }
 */
const GetAllAccounts = async (Id) => {
  const request = await client.get(
    `https://api.carbonyte.io/walletmodule/GetAccountByCustomer/${Id}`
  );
  const requestData = request?.data?.details.content;
  return requestData;
};

/**
 * @dev This is used just to get the balance specificaly
 * @param {Account ID} Id
 * @returns Int The current user's balance
 */
const GetBalance = async (Id) => {
  const request = await client.get(
    `https://api.carbonyte.io/walletmodule/GetAccount/${Id}`
  );
  const requestData = request?.data?.details.availableBalance;
  return requestData;
};

/**
 * @dev This gets x amount of transactions for the user
 * @todo Add in time period and pagination
 * @param {Account ID} Id
 * @param {Int} amount The amount of transactions to get
 * @returns An object of the transaction data
 * {
 *      transactions    An array of the items in that transaction
 *      total           The total spend in all of the transactions
 *      number          The amount of transactions in the transactions array
 * }
 */
const GetTransactions = async (Id, amount) => {
  let toGet = amount ? amount : 10;
  const request = await client.get(
    `https://api.carbonyte.io/walletmodule/GetTransactions/${Id}?size=${toGet}`
  );
  if (!request.data.result) {
    return {
      transactions: [],
      total: 0,
      number: 0,
    };
  }
  const returnData = request?.data?.details;
  let total = 0;
  returnData?.content.forEach((transaction) => {
    total += transaction.amount;
  });
  return {
    transactions: returnData?.content,
    total: total,
    number: returnData.size,
  };
};

/**
 * @dev Use this to get all the scheduled paymets of a user
 * @todo Sort by the date
 * @todo Add a Modulr ID filter
 * @param {Carbonyte ID} Id "CC11875" 
 * @returns An array of objects
 * Each item in the obhect
 * {
    "scheduleID": "CYVW1J5II2",
    "individualOrGroupType": 1,
    "fromCarbonyteId": "CC11875",
    "frommodulrAccountId": "A1225G75",
    "toBeneficiariesId": [
        {
            "id": "B12006BJBS"
        }
    ],
    "date": "2023-02-23T14:43:34.494+00:00",
    "amount": 7
    }
 */
const GetScheduledPayments = async (Id) => {
  const request = await client.get(
    `https://api.carbonyte.io/walletmodule/Wallet/RetrieveSchedulePaymentByCarbonyteId?carbonyteId=${Id}`
  );
  const returnData = request?.data?.details;
  return returnData;
};

/**
 * @todo remove this from the mobile app
 */
const GetCustomersAccounts = async (Id) => {
  const request = await client.get(
    `https://api.carbonyte.io/walletmodule/GetAccountByCustomer/${Id}`
  );
  const requestData = request?.data?.details;
  const returnData = {};
  return requestData;
};

/**
 * @dev This gets all of the transactions for the current month
 * @notice This starts from the first of the month
 * @param {Account ID} Id
 * @returns An object with the details inside
 * total The total amount spent this month
 * transactions The array of transactions spent
 */
const GetTransactionsThisMonth = async (Id) => {
  const then =
    moment()
      .startOf("month")
      .format("YYYY-MM-DDTHH:MM:SS")
      .replace(/\:/g, "%3A") + "%2B0000";
  const request = await client.get(
    `https://api.carbonyte.io/walletmodule/GetTransactions/${Id}?fromTransactionDate=${then}`
  );
  if (!request.data.result) {
    return {
      total: 0,
      transactions: [],
    };
  }

  const requestData = request?.data?.details;
  let total = 0;
  let data = new Array(10).fill(0);
  requestData?.content.forEach((element) => {
    total += element.amount;
    let category = moment().diff(element.postedDate, "Years");
    data[category] += element.amount;
  });
  return {
    total: total,
    transactions: requestData?.content,
  };
};

/**
 * @dev Use this for data for the analyisis page
 * @notice This only gets the last 500 transactions
 * @todo Add a catch all to get all the data
 * @param {Account ID} Id
 * @returns A object of data
 * balance              The balance of the user
 * totalSpend           The total amount spent by the user
 * totalTransactions    The total amount of transactions
 * transactions         The array of transactions
 * average month        This month's total
 */
const GetAnalysisData = async (Id) => {
  const balance = await GetBalance(Id);
  const transactions = await GetTransactions(Id, 500);
  const thisMonth = await GetTransactionsThisMonth(Id);
  return {
    balance: balance,
    totalSpend: transactions.total,
    totalTransactions: transactions.number,
    average: transactions.total / transactions.number,
    transactions: transactions.transactions,
    averageMonth: thisMonth.total,
  };
};

/******************************Card APIs */

/**
 * @dev Use this to get the details of a SINGLE card
 * @param {Card ID} Id "686283112"
 * @returns An object with the details of a single card
 * If the card is not found return with default values
 * accountId    The modulr account ID that the
 */
const GetCardDetails = async (Id) => {
  let data;
  try {
    const request = await client.get(
      `https://api.carbonyte.io/walletmodule/Enfuce/GetCardByAccount?accountId=${Id}`
    );
    const requestData = request?.data?.details[0];
    console.log(requestData);
    data = {
      accountId: requestData.id,
      cardID: requestData.id,
      cardNumberMasked:
        "**** ****  **** " +
        requestData.maskedCardNumber.substr(
          requestData.maskedCardNumber.length - 4
        ),
      isMain: requestData.cardRole == "MAIN",
      inPost: false,
    };
  } catch {
    data = {
      accountId: Id,
      cardID: "000000",
      cardNumberMasked: "**** ****  **** ****",
      isMain: false,
      inPost: "true",
    };
  }

  return data;
};

/**
 * @todo Delete this
 */
const GetAllCardDetails = async (Id) => {
  let data;
  try {
    const request = await client.get(
      `https://api.carbonyte.io/walletmodule/Enfuce/GetCardByAccount?accountId=${Id}`
    );
    const requestData = request?.data?.details[0];
    data = {
      accountId: requestData.id,
      cardID: requestData.id,
      cardNumberMasked:
        "**** ****  **** " +
        requestData.maskedCardNumber.substr(
          requestData.maskedCardNumber.length - 4
        ),
      isMain: requestData.cardRole == "MAIN",
      inPost: "true",
    };
  } catch {
    data = {
      accountId: Id,
      cardID: "000000",
      cardNumberMasked: "**** ****  **** ****",
      isMain: false,
      inPost: "true",
    };
  }

  return data;
};

/**
 * @dev Function is used to freeze or unfreeze a card
 * @notice Don't use this for termination
 * @todo Add validation for termination here/check if the card is terminated
 * @param {Str} Id Card ID "686283112"
 * @param {Str} freeze The command to send with the card
 *  CARD_OK         Used if the card is unfrozen
 *  CARD_BLOCKED    Used if the card is frozen
 * @returns Bool True if successful
 */
const FreezeCard = async (Id, freeze) => {
  const request = await client.patch(
    `https://api.carbonyte.io/walletmodule/Enfuce/UpdateVirtualCard?cardId=${Id}`,
    {
      status: freeze,
    }
  );
  return request;
};

/**
 * @dev This is used to get all of the card details for a user
 * @param {String} Id The Id of the account "686283112"
 * @returns An array of object, each index represents a card
 *          Example of each index:
 * {
    "customerId": "212195412",
    "id": "688802412",
    "template": "MC_VIRTUAL",
    "accountId": "686283112",
    "cardRole": "MAIN",
    "status": "CARD_BLOCKED",
    "maskedCardNumber": "999914______7990",
    "statusDate": "2023-02-28T15:16:20",
    "embossing": {
        "companyName": null,
        "firstName": "RENONE",
        "lastName": "ONEONE"
    },
    "productCode": "MC_VIRTUAL"
   }
 */
const GetCardByAccount = async (Id) => {
  const request = await client.get(
    `https://api.carbonyte.io/walletmodule/Enfuce/GetCardByAccount?accountId=686283112`
  );
  const requestData = request?.data?.details;
  return requestData;
};

/**
 * @dev Function is used to terminate card
 * @notice Do not use this for freezing a card
 * @todo Add in checks
 * @todo Test for a bug:
 *  If the card can be terminated and reactivated if frozen then unfrozen
 * @param {Str} Id Card ID "686283112"
 * @param {Str} freeze The command to send with the card
 *  CARD_LOST                   Used if the card is reported lost
 *  CARD_STOLEN                 Used if the card is reported stolen
 *  CARD_CLOSED_DUE_TO_FRAUD    Used if the card is reported as a fraud
 * @returns Bool True if successful
 */
const TerminateCard = async (Id, terminate) => {
  const request = await client.patch(
    `https://api.carbonyte.io/walletmodule/Enfuce/UpdateVirtualCard?cardId=${Id}`,
    {
      status: terminate,
    }
  );
  return request.data.result;
};

/**Carbon */

/**
 * @dev Use this to get ALL the projects
 * @notice  The desciption here is returned from the API with HTML tags
 *          They are removed here
 * @returns An array of objects with the details of each project
 * {
 *  id      The ID of the project, an identifier for the backend
 *  name    The display name of the project
 *  price   The display price with a 50% markup
 *  image   The image URL from earthly
 *  description
 *  type
 *  tags
 * }
 */
const GetProjectList = async () => {
  const request = await client.get(
    "https://api.carbonyte.io/ecomodule/Earthly/GetProjectList"
  );
  const requestData = request?.data?.details.data;
  let returnData = [];
  requestData.forEach((project) => {
    returnData.push({
      id: project.id,
      name: project.displayName,
      price: project.asset.displayAssetPriceWithMarkup.toFixed(2),
      image: project.image,
      description: project.description
        .replace(/<[^>]*>/g, "")
        .substring(0, 150)
        .trim(),
      type: project.asset.type,
      tags: project.tags,
    });
  });
  return returnData.slice(0, 6);
};

/**
 * @dev Use this to get the details of a single project
 *      Get the project ID from GetProjectList first
 * @param {Project ID} Id
 * @returns The data for the project
 * See get project list returns for more details
 */
const GetProject = async (Id) => {
  const request = await client.get(
    `https://api.carbonyte.io/ecomodule/Earthly/GetProjectById?projectId=${Id}`
  );
  const project = request?.data?.details;
  let returnData = {
    id: project.id,
    name: project.displayName,
    price: project.asset.displayAssetPriceWithMarkup.toFixed(2),
    image: project.image,
    description: project.description.replace(/<[^>]*>/g, "").substring(0, 150),
    type: project.asset.type,
    tags: project.tags,
  };
  return returnData;
};

/**
 * @dev Use this to get a user's carbon offset
 * @dev For virtual forest use totalAssets for the value
 * @param {Carbonyte ID} Id
 * @returns An object of the data gathered
 * totalOffset  Total carbon offset
 * totalAssets  Total assets bought
 * assets       An array of the last four projects bought
 */
const GetUserImpact = async (Id) => {
  try {
    const request = await client.get(
      `https://api.carbonyte.io/ecomodule/Earthly/GetUserImpacts/${Id}`
    );
    const returnData = request?.data?.details;
    return {
      totalOffset: returnData.data.totalOffsetInTonnes.toFixed(1),
      totalAssets: returnData.data.totalNumAssets,
      assets: [
        returnData.assets[0],
        returnData.assets[1],
        returnData.assets[2],
        returnData.assets[3],
      ],
    };
  } catch {
    return {
      totalOffset: 0,
      totalAssets: 0,
      assets: [],
    };
  }
};

/**
 * @todo Finish this
 * @param {*} Id
 */
const GetStatments = async (Id) => {
  const transactions = await GetTransactions(Id, 500);

  //return transactions
};

/**
 * @dev This applies to all the Get transactions by time functions
 * @dev Theese are used to get the graph data for the analysis page
 * @param {Str} Id This is the ID of the account
 * @returns
 * {
 *  total       The total spent in that period
 *  xAxis       The data for the x axis
 *  yAxis       The data for the y axis
 * }
 */
const GetTransactionsYear = async (Id) => {
  //This gets the date range for the API to fetch
  //Then after fetch the list of transactions
  const then =
    moment()
      .subtract(52, "W")
      .format("YYYY-MM-DDTHH:MM")
      .replace(/\:/g, "%3A") + "%3A00%2B0000";
  const request = await client.get(
    `https://api.carbonyte.io/walletmodule/GetTransactions/${Id}?size=500&fromTransactionDate=${then}`
  );
  const requestData = request?.data?.details;

  //Count the total and intialise the array
  let total = 0;
  let data = new Array(10).fill(0);

  //This function will get the date for the end of the month first
  const endOfMonth = moment().endOf("month");
  console.log(endOfMonth);

  requestData?.content?.forEach((element) => {
    total += element.amount;
    let category = endOfMonth.diff(element.transactionDate, "months");
    data[category] += element.amount;
  });
  let xAxis = [];
  for (let i = 0; i < 10; i++) {
    xAxis.push(moment().subtract(i, "M").format("MMM"));
  }
  return {
    total: total,
    yAxis: data.reverse(),
    xAxis: xAxis.reverse(),
  };
};

/**
 * @dev This applies to all the Get transactions by time functions
 * @dev Theese are used to get the graph data for the analysis page
 * @param {Str} Id This is the ID of the account
 * @returns
 * {
 *  total       The total spent in that period
 *  xAxis       The data for the x axis
 *  yAxis       The data for the y axis
 * }
 */
const GetTransactionsMonth = async (Id) => {
  //This gets the date range for the API to fetch
  //Then after fetch the list of transactions
  const then =
    moment().subtract(4, "W").format("YYYY-MM-DDTHH:MM").replace(/\:/g, "%3A") +
    "%3A00%2B0000";
  const request = await client.get(
    `https://api.carbonyte.io/walletmodule/GetTransactions/${Id}?size=500&fromTransactionDate=${then}`
  );
  const requestData = request?.data?.details;
  let total = 0;
  let data = new Array(4).fill(0);

  //Gets the data
  const endOfDay = moment().endOf("day");
  requestData?.content?.forEach((element) => {
    total += element.amount;
    let category = endOfDay.diff(element.transactionDate, "weeks");
    data[category] += element.amount;
  });
  let xAxis = [];
  for (let i = 0; i < 4; i++) {
    xAxis.push(moment().subtract(i, "w").format("Do"));
  }
  return {
    total: total,
    yAxis: data.reverse(),
    xAxis: xAxis.reverse(),
  };
};

/**
 * @dev This gets the data for the graphs for a weeks worth of thransactions
 * @param {Str} Id This is the ID of the account
 * @returns An object with graph data
 */
const GetTransactionsWeek = async (Id) => {
  //This gets the date range for the API to fetch
  //Then after fetch the list of transactions
  const then =
    moment().subtract(1, "W").format("YYYY-MM-DDTHH:MM").replace(/\:/g, "%3A") +
    "%3A00%2B0000";
  const request = await client.get(
    `https://api.carbonyte.io/walletmodule/GetTransactions/${Id}?size=500&fromTransactionDate=${then}`
  );
  const requestData = request.data;

  //Count the total and intialise the array
  let total = 0;
  let data = new Array(7).fill(0);

  //Calculates the y axis
  console.log(requestData.details.content);
  requestData.details.content?.forEach((element) => {
    total += element.amount;
    let category = moment().diff(element.transactionDate, "days");
    data[category] += element.amount;
  });

  //Get lables for the graph
  let xAxis = [];
  for (let i = 0; i < 7; i++) {
    xAxis.push(moment().subtract(i, "d").format("ddd"));
  }

  //Make the object for the graph
  return {
    total: total,
    yAxis: data.reverse(),
    xAxis: xAxis.reverse(),
  };
};

/**
 * @dev Use this to get a limit for the user
 * @param {Account ID} Id
 * @returns
 * {
 *  spend           The total amount the user has spent this month
 *  monthlyAmount   The monthly limit set for the user
 * }
 */
const GetLimits = async (Id) => {
  const spend = await (await GetTransactionsMonth()).total;
  const request = await client.get(
    `https://api.carbonyte.io/transactionmodule/GetBudget?accountId=${Id}`
  );
  if (
    request.data.resultMessage == "No budget found for the specified Account Id"
  ) {
    return {
      spend: spend,
      monthlyAmount: 0,
    };  }

  console.log("request data", request.data);
  const requestData = request?.data?.details;
  return {
    spend: spend,
    monthlyAmount: requestData?.monthlyAmount,
  };
};

const SetLimit = async (enfuceid, amount) => {
  const request = await client.post(
    "https://api.carbonyte.io/transactionmodule/SetBudget?accountId=" +
      enfuceid +
      "&periodType=monthly&amount=" +
      amount
  );
  console.log(request.data);
  return request;
};

/**
 *
 * @param {Account ID} Id
 * @returns an object of the toggles
 */
const GetSettings = async (Id) => {
  const request = await client.get(
    `https://api.carbonyte.io/cardmodule/GetToggles?modulrAccountId=${Id}`
  );
  const requestData = request?.data?.details;
  return requestData;
};

/**Subcriptions */
const GetSubscriptions = async () => {
  const request = await client.get(
    `https://api.carbonyte.io/submodule/Subcription/ListSubcriptions`
  );
  const requestData = request?.data?.details;
  let returnData = [];
  requestData.forEach((card) => {
    let benefits = [];
    card.subcriptionFeatureList.forEach((feature) => {
      benefits.push(feature);
    });
    returnData.push({
      title: card.name,
      price: card.price ? card.price : 0,
      description: card.description,
      id: card.id,
      benefits: benefits,
    });
  });
  return returnData;
};

const GetUsersSubscriptions = async (Id) => {
  const request = await client.get(
    `https://api.carbonyte.io/submodule/CustomerSub/GetSubAccount/${Id}`
  );
  const requestData = request?.data?.details;
  return requestData ? requestData : false;
};

const AssignUsersSubscription = async (user, Id) => {
  const request = await client.patch(
    `https://api.carbonyte.io/submodule/CustomerSub/AssignSub/${Id}/${user}`
  );
  return request;
};

/**
 * @dev This function changes the user's subscription
 * @notice If the user dosen't have a subscription then assign it
 * @param {String} user The modular ID
 * @param {Int} Id The ID of the subscription
 * @returns The response data
 */
const ChangeUsersSubscription = async (user, Id) => {
  if (!GetUsersSubscriptions(Id)) {
    //If the user DOSEN'T have a subscription
    const response = await AssignUsersSubscription(user, Id);
    return response;
  } else {
    //If the user has a subscription and wants to update
    const request = await client.patch(
      `https://api.carbonyte.io/submodule/CustomerSub/UpdateSubcription/${user}/${Id}/Upgrade`
    );
    return request;
  }
};

/**Beneficiaries */
const GetGroupBeneficiarys = (Id) => {
  const request = client.get(
    "https://api.carbonyte.io/walletmodule/Wallet/RetrieveBeneficiaries?customerId=C1220XHD"
  );
  const requestData = request?.data?.details;
  return requestData;
};

const RetriveBenificiaries = async (carbonyteid) => {
  const request = await client.get(
    "https://api.carbonyte.io/walletmodule/RetrieveBeneficiaries/" + carbonyteid
  );
  const returnData = request?.data?.details;
  return returnData;
};

const RetriveGroupBeneficiariesByID = async (Id, amount) => {
  const request = await client.get(
    "https://api.carbonyte.io/walletmodule/Wallet/RetrieveGroupBeneficiariesByCarbonyteId?carbonyteId=" +
      Id
  );
  const requestData = request?.data?.details;
  let returnData = [];
  for (let i = 0; i < requestData.length; i++) {
    let beneficiaryData = await RetriveGroupBeneficiares(
      requestData[i].groupId
    );
    returnData.push({
      name: beneficiaryData[0].groupName,
      id: beneficiaryData[0].groupId,
      benificiaries: beneficiaryData[0].beneficiariesDetails,
    });
  }
  return returnData;
};

const RetriveGroupBeneficiares = async (Id) => {
  const request = await client.get(
    `https://api.carbonyte.io/walletmodule/Wallet/RetrieveGroupBeneficiaries?groupId=${Id}`
  );
  const requestData = request?.data?.details;
  return requestData;
};

/**Posters */
const SendFunds = (amount, from, name, accountNumber, sortCode, address,reference) => {
  console.log(reference)
  let responseText = reference ? reference : "Transfer"
  const request = client.post(
    "https://api.carbonyte.io/walletmodule/SendMoneyProcedureImplementation",
    {
      sourceAccountId: from,
      destination: {
        type: "SCAN",
        id: "A1226WEM",
        accountNumber: accountNumber,
        sortCode: sortCode,
        name: name,
        address: address,
      },
      currency: "GBP",
      amount: amount,
      reference: responseText,
    }
  );
  return request;
};

const AddBeneficiary = async (
  modulrCustomerId,
  phonenumber,
  accountName,
  accNum,
  sortCode
) => {
  const request = await client.post(
    "https://api.carbonyte.io/walletmodule/Wallet/CreateNewBeneficiary?modulrCustomerId=" +
      modulrCustomerId,
    {
      externalReference: "",
      name: accountName,
      birthdate: "",
      emailAddress: "",
      phoneNumber: phonenumber,
      destinationIdentifier: {
        type: "SCAN",
        accountNumber: accNum,
        sortCode: sortCode,
        iban: "",
        bic: "",
        currency: "",
        countrySpecificDetails: {
          bankName: "",
          bankAddress: "",
          bankCity: "",
          bankBranchName: "",
          bankBranchCode: "",
          bankCode: "",
          chineseId: "",
          province: "",
          business: false,
        },
      },
      defaultReference: "Friend",
      idToReplace: "",
      address: {
        addressLine1: "",
        addressLine2: "",
        postTown: "",
        postCode: "",
        country: "",
      },
      qualifier: "",
    }
  );
  return request;
};

const StatmentPost = (Id) => {
  try {
    //const request = client.post("https://api.carbonyte.io/walletmodule/SendMoneyProcedureImplementation",
    alert("A statment has been emailed to you");
    return true;
  } catch {
    alert("Something went wrong");
    return false;
  }
};

const ReportTransaction = async (accountID, transactionId) => {
  const request = await client.post(
    `https://api.carbonyte.io/transactionmodule/DisputeTransaction?accountId=${accountID}&transactionId=${transactionId}`
  );
  console.log(request);
  return request.data;
};
//A122HTHM
const GetAccount = async (enfuceid) => {
  const request = await client.get(
    "https://api.carbonyte.io/walletmodule/GetAccount/" + enfuceid
  );
  const requestReturn = request?.data?.details;
  return requestReturn;
};

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
  GetLimits,
  GetSettings,
  GetAllAccounts,
  GetUsersSubscriptions,
  ChangeUsersSubscription,
  GetScheduledPayments,
  FreezeCard,
  TerminateCard,
};
