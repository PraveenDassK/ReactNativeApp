import client from "./client";
import api from "../api/api_list"
import React,{ useEffect, useState,useContext } from "react";

const getTransactions = () => client.get("https://api.carbonyte.io/walletmodule/GetTransactions/A121BXVM")

export default {
    getTransactions
};