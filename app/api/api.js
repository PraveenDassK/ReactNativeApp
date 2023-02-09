import client from "./client";
import AuthContext from "../auth/context";
import React,{ useEffect, useState,useContext } from "react";

const GetCustomerDetails = async (Id) => {
    const request = await client.get('https://api.carbonyte.io/walletmodule/GetCustomer/'+ id);
    const requestData = request.data.details
    console.log(requestData)
    const data = {
        "name": requestData.name,
        "id": requestData.id,
        "accountType": requestData.type,
        "status": requestData.status,
        "verified": requestData.verificationStatus
    }
    return data
}

const GetUserImpacts = async(Id) => {
    const request = await client.get("https://api.carbonyte.io/ecomodule/Earthly/GetUserImpacts/CC11875");
    const requestData = request.data.details
    return requestData
}

const GetAccountByCustomer = async (Id) => {
    const request = await client.get("https://api.carbonyte.io/ecomodule/Earthly/GetUserImpacts/" + Id);
    const requestData = request.data.details
    console.log(requestData)
}

const GetAccount = async (Id) => {
    const request = await client.get("https://api.carbonyte.io/walletmodule/GetAccount/A12277V1");
    const requestData = request.data.details
    console.log(requestData)
}

const GetProjectList = async() => {
    const request = await client.get("https://api.carbonyte.io/ecomodule/Earthly/GetProjectList")
    const requestData = request.data.details.data
    return requestData
}

const GetSingleProject = async(Id) => {
    const request = await client.get("https://api.carbonyte.io/ecomodule/Earthly/GetProjectById?projectId=" + Id)
    return requestData
}

const Checkout = async(obj) => {
    const request = await client.post("https://api.carbonyte.io/ecomodule/Earthly/Checkout",obj)
    const requestData = request.data.details
    console.log(requestData)
    return requestData
}

const getUsersNFTs = async (address) => {
    const request = await client.post("https://9c42-138-248-219-178.eu.ngrok.io")
    const requestData = request.data.details
    return requestData
}

const GetTransactions = async (Id,amount) => {
    let toGet = amount ? amount : 10
    const request = await client.get("https://api.carbonyte.io/walletmodule/GetTransactions/A12274AW?size=" + toGet)
    const requestData = request.data.details
    return requestData
}

export default {
    GetCustomerDetails,
    GetUserImpacts,
    GetAccount,
    GetAccountByCustomer,
    GetProjectList,
    GetSingleProject,
    Checkout,
    getUsersNFTs,
    GetTransactions
  };