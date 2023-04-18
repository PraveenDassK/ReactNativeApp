import React,{ useEffect, useState,useContext } from "react";
import { Text, StyleSheet, Image, View, Pressable, ScrollView } from "react-native";
import GlobalStyles from "../../GlobalStyles";
import Button from "../components/Button";

import apiCarbon from "../api/apiCarbon"
import apiLogin from "../api/apiLogin"
import AuthContext from "../auth/context";

import DoughnutChart from "../components/DoughnutChart";

const TestEnviro = ({navigation}) => {
  //Calls the API once during load
  const authContext = useContext(AuthContext)
  const [data, setData] = useState("")
  
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus',  () => {
      loadData()
    })
  },[])

  const loadData = async() =>{
    const response = await apiLogin.VerifyLogin(
      {
        "email": "saily.s@carbonyte.io",
        "emailOTP": "9398",
        "phoneNumber": "8698743985",
        "phoneOTP": "9090"
      }
    );
    console.log(response)
    setData(response)
    // {
    //   "email": "saily.s@carbonyte.io",
    //   "emailOTP": "9398",
    //   "phoneNumber": "8698743985",
    //   "phoneOTP": "9090"
    // }
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
