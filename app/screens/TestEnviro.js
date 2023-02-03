import React,{ useEffect, useState,useContext } from "react";
import { Text, StyleSheet, Image, View, Pressable, ScrollView } from "react-native";
import GlobalStyles from "../../GlobalStyles";

import api from "../api/api"
import AuthContext from "../auth/context";

const Carbon = ({navigation}) => {
  //Calls the API once during load
  const {settings} = useContext(AuthContext)
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus',  () => {
      loadData()
    })
  },[])

  const loadData = async() =>{
    const request = await api.GetAccount("A12277V1")
    
  }


  return (
    <View>
    </View>
  )
};

const styles = StyleSheet.create({
  page:{

  },

});

export default Carbon;
