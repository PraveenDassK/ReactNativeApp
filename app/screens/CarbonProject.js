import React,{ useEffect, useState,useContext } from "react";
import { Text, StyleSheet, Image, View, Pressable, ScrollView } from "react-native";
import GlobalStyles from "../../GlobalStyles";

import carbonApi from "../api/carbonSingle"
import AuthContext from "../auth/context";
import Button from "../components/Button"


const CarbonProject = ({navigation}) => {

  const [data, setData] = useState(null)
  const authContext = useContext(AuthContext)
  const { user } = useContext(AuthContext)

  useEffect(() => {
    authContext.setUser({ID : "5f96f967a3a85800118be4d1"})
    loadData()
  },[])
  
  const loadData = async () => {
    console.log(user.ID)

    const response = await carbonApi.getListingsSingle(user.ID);
    setData(response.data.details)
  }
  
  var projects = [];

  const formatData = () => {
    if(data != null){        
        projects.push(
          <View key = {data.id} style={styles.rectanglePressable}>
            <Text> 
              {data.displayName} 
            </Text>
            
            <Image 
              style={{height: 100, width:200}}
              source={
                data.image != "" ? {uri:data.image} : require("../assets/icon-bluecheck.png")
              }
            />

            <Text>
              {data.description.replace(/<[^>]*>/g, "").trim()}... 
            </Text>
          </View>
        )
    }
  }

  formatData()


  return (
    <View>
      <ScrollView>
        {projects}
      </ScrollView>
    </View>
  )
};

const styles = StyleSheet.create({
    rectanglePressable: {
        borderRadius: GlobalStyles.Border.br_lg,
        backgroundColor: GlobalStyles.Color.gray_500,
      }
});

export default CarbonProject;
