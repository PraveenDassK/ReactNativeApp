import React,{ useEffect, useState,useContext } from "react";
import { Text, StyleSheet, Image, View, Pressable, ScrollView } from "react-native";
import GlobalStyles from "../../GlobalStyles";

import api from "../api/web3_api"
import AuthContext from "../auth/context";

const Carbon = ({navigation}) => {
    //Calls the API once during load
    useEffect(() => {
      const unsubscribe = navigation.addListener('focus',  () => {
        loadData()
      })
    },[])

  const loadData = async() =>{
    const response = api.GetNFTId(1)
    console.log(response)
  }
  return (
    <View>
      <Text>
        AA
      </Text>
    </View>
  )
};

const styles = StyleSheet.create({
});

export default Carbon;
