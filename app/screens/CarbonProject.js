import React,{ useEffect, useState,useContext } from "react";
import { Text, StyleSheet, Image, View, Pressable, ScrollView } from "react-native";
import GlobalStyles from "../../GlobalStyles";

import carbonApi from "../api/carbonSingle"
import AuthContext from "../auth/context";
import Button from "../components/Button"


const CarbonProject = ({navigation,route}) => {
  console.log(route.params)

  const [data, setData] = useState(null)
  const authContext = useContext(AuthContext)

  useEffect(() => {
    authContext.setUser({ID : route.params.Id})
    loadData()
  },[])
  
  const loadData = async () => {
    const response = await carbonApi.getListingsSingle(route.params.Id);
    setData(response.data.details)
  }
  
  var projects = [];

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
            <View style={styles.textBox}>
              <Text>
                {data.description.replace(/<[^>]*>/g, "").trim()}... 
              </Text>
            </View>
          </View>
        )
    }
  }

  formatData()


  return (
    <View>
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
    borderStartColor:"white",
    width:"80%",
    left:"10%",
    top:"5%",
    backroundColor: "black"
  },
  image:{
    flex:1,
    width:"100%",
    height:200,
  },
  textBox:{

  }
});

export default CarbonProject;
