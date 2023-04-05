import React,{ useEffect, useState,useContext } from "react";
import { Text, StyleSheet, Image, View, Pressable, ScrollView } from "react-native";
import GlobalStyles from "../../GlobalStyles";
import Button from "../components/Button";

import apiCarbon from "../api/apiCarbon"
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
    const response = await apiCarbon.GetCarbonSpending();
    console.log(response)
    setData(response)
  }

  return (
    <View>
      <Button 
        title="Reload" 
        color="babyBlue" 
        style={styles.boxShadow} 
        onPress={() => loadData()} 
      />
      <DoughnutChart data = {data}/>
    </View>
  )
};

const styles = StyleSheet.create({
  page:{

  },

});

export default TestEnviro;
