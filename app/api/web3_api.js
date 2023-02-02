import client from "./client";
import AuthContext from "../auth/context";
import React,{ useEffect, useState,useContext } from "react";

const GetNFTId = (id) => {
    fetch("http://localhost:3000/" + "1", {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
    return client.get('http://localhost:3000/'+ id);
}


export default {
    GetNFTId
  };