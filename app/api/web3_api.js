import client from "./client";
import AuthContext from "../auth/context";
import React,{ useEffect, useState,useContext } from "react";

const sendTokens = (id) => {
    fetch("http://localhost:3000/" + "2", {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
    return client.get('http://localhost:3000/'+ id);
}
const GetBalance = async() => {
    const request = await client.get("https://9c42-138-248-219-178.eu.ngrok.io");
    return request
}

export default {
    sendTokens,
    GetBalance
  };