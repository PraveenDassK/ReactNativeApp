import React,{ useEffect, useState,useContext } from "react";
import { Text, StyleSheet, Image, View, Pressable, ScrollView } from "react-native";
import GlobalStyles from "../../GlobalStyles";

import apiCall from "../api/api"
import AuthContext from "../auth/context";
import Button from "../components/Button"
import { horizontalScale, moderateScale, verticalScale } from '../config/metrics'


const CarbonProject = ({navigation,route}) => {
  const [data, setData] = useState(null)
  useEffect(() => {
    loadData()
  },[])
  
  const loadData = async () => {
    const response = await apiCall.GetSingleProject(route.params.Id);
    setData(response)
    console.log(route.params.Id)
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
            <View style={{backgroundColor: "white"}}>
              <Text>
                {data.description.replace(/<[^>]*>/g, "")}
              </Text>
            </View>
          </View>
        )
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
    marginTop: verticalScale(20),
    borderRadius: moderateScale(15),
    paddingVertical: verticalScale(20),
    paddingHorizontal: horizontalScale(14) ,
    backgroundColor: 'white',
    width: '100%',
    alignItems: 'center'
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
