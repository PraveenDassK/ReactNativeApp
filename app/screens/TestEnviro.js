import React,{ useEffect, useState,useContext } from "react";
import { Text, StyleSheet, Image, View, Pressable, ScrollView } from "react-native";
import GlobalStyles from "../../GlobalStyles";
import Button from "../components/Button";

import api from "../api/api"
import AuthContext from "../auth/context";

const TestEnviro = ({navigation}) => {
  //Calls the API once during load
  const authContext = useContext(AuthContext)

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus',  () => {
      loadData()
    })
  },[])

  const loadData = async() =>{
    console.log("Account ID:",authContext.accountID)
    const request = await api.GetAccount("A122HTHM")
    console.log(request)
    
  }


  return (
    <View>
      <Button 
        title="Reload" 
        color="babyBlue" 
        style={styles.boxShadow} 
        onPress={() => loadData()} 
      />
    </View>
  )
};

const styles = StyleSheet.create({
  page:{

  },

});

export default TestEnviro;
