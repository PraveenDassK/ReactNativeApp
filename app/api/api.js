import client from "./client";
import AuthContext from "../auth/context";
import React, { useEffect, useState, useContext } from "react";
import moment from "moment";

/**Getters */
const GetCustomerDetails = async (Id) => {
  const request = await client.get(
    "https://api.carbonyte.io/walletmodule/GetCustomer/" + id
  );
  const requestData = request?.data?.details;
  const data = {
    name: requestData.name,
    id: requestData.id,
    accountType: requestData.type,
    status: GetAccountrequestData.status,
    verified: requestData.verificationStatus,
  };
  return data;
};

const GetUserImpacts = async (Id) => {
  const request = await client.get(
    "https://api.carbonyte.io/ecomodule/Earthly/GetUserImpacts/CC11875"
  );
  const requestData = request.data;
  return requestData;
};

const GetAccountByCustomer = async (Id) => {
  const request = await client.get(
    "https://api.carbonyte.io/ecomodule/Earthly/GetUserImpacts/" + Id
  );
  const requestData = request?.data?.details;
  return requestData;
};

const GetAccount = async (Id) => {
  const request = await client.get(
    "https://api.carbonyte.io/walletmodule/GetAccount/" + Id
  );
  const requestData = request?.data?.details;
  return requestData;
};

const GetProjectList = async () => {
  const request = await client.get(
    "https://api.carbonyte.io/ecomodule/Earthly/GetProjectList"
  );
  const requestData = request?.data?.details.data;
  return requestData;
};

const GetSingleProject = async (Id) => {
  const request = await client.get(
    "https://api.carbonyte.io/ecomodule/Earthly/GetProjectById?projectId=" + Id
  );
  const requestData = request?.data?.details;

  return requestData;
};

const Checkout = async (obj) => {
  const request = await client.post(
    "https://api.carbonyte.io/ecomodule/Earthly/Checkout",
    obj
  );
  const requestData = request?.data?.details;
  return requestData;
};

const getUsersNFTs = async (address) => {
  const request = await client.post("https://9c42-138-248-219-178.eu.ngrok.io");
  const requestData = request?.data?.details;
  return requestData;
};

const GetTransactions = async (Id, amount, fromDate, toDate) => {
  console.log("running");
  let toGet = amount ? amount : 10;
  const request = await client.get(
    "https://api.carbonyte.io/walletmodule/GetTransactions/" +
      Id +
      "?size=" +
      toGet
  );
  const requestData = request?.data?.details;
  return requestData;
};

const GetTransactionsWeek = async (Id) => {
  const then =
    moment()
      .subtract(1, "W")
      .format("YYYY-MM-DDTHH:MM:SS")
      .replace(/\:/g, "%3A") + "%2B0000";
  const request = await client.get(
    "https://api.carbonyte.io/walletmodule/GetTransactions/A12274AW?fromTransactionDate=" +
      then
  );
  const requestData = request?.data?.details;

  let total = 0;
  let data = new Array(10).fill(0);
  requestData?.content.forEach((element) => {
    total += element.amount;
    let category = moment().diff(element.postedDate, "Years");
    data[category] += element.amount;
  });
  const labels = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
  ];
  return {
    total: total,
    yAxis: data,
    xAxis: labels,
  };
};

const GetTransactionsMonth = async (Id) => {
  const then =
    moment()
      .subtract(1, "W")
      .format("YYYY-MM-DDTHH:MM:SS")
      .replace(/\:/g, "%3A") + "%2B0000";
  const request = await client.get(
    "https://api.carbonyte.io/walletmodule/GetTransactions/A12274AW?fromTransactionDate=" +
      then
  );
  const requestData = request?.data?.details;

  let total = 0;
  let data = new Array(10).fill(0);
  requestData?.content.forEach((element) => {
    total += element.amount;
    let category = moment().diff(element.postedDate, "Years");
    data[category] += element.amount;
  });
  const labels = [
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
  ];
  return {
    total: total,
    yAxis: data,
    xAxis: labels,
  };
};

const GetTransactionsYear = async (Id) => {
  const then =
    moment()
      .subtract(52, "W")
      .format("YYYY-MM-DDTHH:MM:SS")
      .replace(/\:/g, "%3A") + "%2B0000";
  const request = await client.get(
    "https://api.carbonyte.io/walletmodule/GetTransactions/A12274AW?fromTransactionDate=" +
      then
  );
  const requestData = request?.data?.details;

  let total = 0;
  let data = new Array(10).fill(0);
  requestData?.content.forEach((element) => {
    total += element.amount;
    let category = moment().diff(element.postedDate, "Years");
    data[category] += element.amount;
  });
  const labels = [
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
  ];
  return {
    total: total,
    yAxis: data,
    xAxis: labels,
  };
};

const GetCardByAccount = async () => {
  const request = await client.get(
    "https://api.carbonyte.io/walletmodule/Enfuce/GetCardByAccount?accountId=686283112&auditUser=A12277V1"
  );
  const requestData = request?.data?.details;
  return requestData;
};

const GetCardByEnfuseAccountId = async (accountId) => {
  const request = await client.get(
    `https://api.carbonyte.io/walletmodule/Enfuce/GetCardByAccount?accountId=${accountId}`
  );
  const requestData = request?.data?.details;
  return requestData;
};

const AcceptTermsAndConditions = async (Id) => {
  const sendPost = (amount) => client.post("", { id: Id });
  const requestData = sendPost.data.details;
  return requestData;
};

/**Posters */
const SendFunds = (amount, from, name, accountNumber, sortCode, address) => {
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
      reference: "Transfer",
    }
  );
  return request;
};

const GetCustomerByID = async () => {
  const request = await client.get(
    "https://api.carbonyte.io/walletmodule/Enfuce/GetCustomerbyId/212850012"
  );
};

const SetPin = async (pin) => {
  const request = await client.post(
    "https://api.carbonyte.io/walletmodule/Enfuce/GetCustomerbyId/212850012"
  );
};

const GetCustomersAccounts = async (Id) => {
  const request = await client.get(
    "https://api.carbonyte.io/walletmodule/GetAccountByCustomer/C1220XHD"
  );
  const requestData = request?.data?.details;
  return requestData;
};

const ReportTransaction = async (Id) => {
  const request = await client.get("");
  return request;
};

const GetTransactionData = async (Id, amount) => {
  let toGet = amount ? amount : 10;
  const request = await client.get(
    "https://api.carbonyte.io/walletmodule/GetTransactions/" +
      Id +
      "?size=" +
      toGet
  );
  const requestData = request?.data?.details;
  let total = 0;
  requestData?.content.forEach((transaction) => {
    total += transaction.amount;
  });
  const Average = (total / amount).toFixed(2);
  return {
    total: total,
    requestData: requestData,
    average: Average,
  };
};

const GetAllTransactionsThisMonth = async () => {
  const startOfMonth =
    moment()
      .startOf("month")
      .format("YYYY-MM-DDTHH:MM:SS")
      .replace(/\:/g, "%3A") + "%2B0000";
  const request = await client.get(
    "https://api.carbonyte.io/walletmodule/GetTransactions/A12274AW?fromTransactionDate=" +
      startOfMonth
  );
  const requestData = request?.data?.details;

  let total = 0;
  requestData?.content.forEach((element) => {
    total += element.amount;
  });
  return {
    data: requestData,
    total: total,
  };
};

const GetBalance = async (Id) => {
  const request = await client.get(
    "https://api.carbonyte.io/walletmodule/GetAccount/" + Id
  );
  const requestData = request?.data?.details;
  return requestData;
};

const cardSettings = async (Id) => {
  const request = await client.get(
    "https://api.carbonyte.io/cardmodule/GetToggles?modulrAccountId=" + Id
  );
  const requestData = request?.data?.details;
  return requestData;
};

const SetToggles = (enfuceid, online, swipe, atm, contactless) => {
  const request =
    "https://api.carbonyte.io/cardmodule/SetToggles?accountId=" +
    enfuceid +
    "&onlineTransactions=" +
    online +
    "&swipePayments=" +
    swipe +
    "&atmWithdrawals=" +
    atm +
    "&contactlessPayments=" +
    contactless;
  return client.post(request);
};

export default {
  GetCustomerDetails,
  GetUserImpacts,
  GetAccount,
  GetAccountByCustomer,
  GetProjectList,
  GetSingleProject,
  Checkout,
  getUsersNFTs,
  GetTransactions,
  SendFunds,
  GetCardByAccount,
  AcceptTermsAndConditions,
  SetPin,
  GetCustomersAccounts,
  GetTransactionsWeek,
  GetTransactionsMonth,
  GetTransactionsYear,
  ReportTransaction,
  GetTransactionData,
  GetAllTransactionsThisMonth,
  cardSettings,
  SetToggles,
  GetCardByEnfuseAccountId,
};
