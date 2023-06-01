import React,{ useEffect, useState,useContext } from "react";
import { Text, StyleSheet, Image, View, Pressable, ScrollView } from "react-native";
import Screen from "../components/Screen";
import GlobalStyles from "../../GlobalStyles";

import api from "../api/api_list"
import AuthContext from "../auth/context";
import Button from "../components/AppButton";

const AccountMain = ({navigation}) => {
  //Saves all the data from the API call
  const [data, setData] = useState(null)
  const [balance, setBalance] = useState(null)
  const authContext = useContext(AuthContext)

  //Calls the API once during load
  useEffect(() => {
    loadData()
  },[])
  
  //Gets the data for the user
  const loadData = async () => {
    const response = await api.GetAccount();
    const data = response.data.details
    setData(data)

    //Verified calculation 
    console.log(data)
    setBalance(data.availableBalance)

  }
  console.log(new Date().toLocaleString())