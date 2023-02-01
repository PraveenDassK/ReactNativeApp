import React,{ useEffect, useState,useContext } from "react";
import { Text, StyleSheet, Image, View, Pressable, ScrollView } from "react-native";
import GlobalStyles from "../../GlobalStyles";

import api from "../api/carbonSingle"
import AuthContext from "../auth/context";
import Button from "../components/Button"


const CarbonProject = ({navigation,route}) => {
  const [data, setData] = useState(null)
  console.log(route)
  useEffect(() => {
    loadData()
  },[])
  
  const loadData = async () => {
    const response = await api.getListingsSingle(route.params.Id);
    setData(response.data.details)
    console.log(response.data)
  }
  
  let projects = [];

  const formatData = () => {
    if(data != null){        
        projects.push(
          <View key = {data.id} style={styles.rectanglePressable}>
            <Text style={styles.titleText}> 
              {data.displayName} 
            </Text>
            
            <Image 
              style={styles.image}
              source={
                data.image != "" ? {uri:data.image} : require("../assets/icon-bluecheck.png")
              }
            />
            <View style={{backgroundColor: "grey"}}>
              <Text>
                {data.description}
              </Text>
            </View>
          </View>
        )
        console.log(data)
    }
  }

  formatData()


  return (
    <View style = {styles.mainPage}>
      <ScrollView>
        <View style = {styles.page}>
            {projects}
        </View>
      </ScrollView>
    </View>
  )
};

const styles = StyleSheet.create({
  rectanglePressable: {
    borderRadius: GlobalStyles.Border.br_lg,
  },
  titleText:{
    fontWeight:"bold",
    textAlign:"center",
    fontSize:30,
  },
  page:{
    width:"80%",
    left:"10%",
    color: "black",
    borderWidth: 0,
    borderColor: "black",
    borderRadius: 25,
  },
  image:{
    flex:1,
    width:"100%",
    height:200,
  },
  textBox:{
    backgroundColor: "red"

  },
  mainPage:{
    backroundColor:"white",
    width:"100%",

  },
});

export default CarbonProject;
