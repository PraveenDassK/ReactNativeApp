  import React, { useContext, useEffect, useState } from "react";
  import { Text, StyleSheet, View, Image, Pressable, Switch } from "react-native";
  import { useNavigation } from "@react-navigation/native";
  import GlobalStyles from "../../GlobalStyles";
  import api from "../api/api_list"
  import AuthContext from "../auth/context";
  
  const BankTransfer = ({navigation}) => {
    const [data, setData] = useState({})
    const [benList, setBen] = useState([])
  
    useEffect(() => {
      getSettings()
    },[])
    
    const getSettings = async () => {
      const response = await api.RetriveBenificiaries()
      const data = response.data.details.content
      setBen(data)
    }
    
    let benText = ""
    if(benList.length != 0){
      benText = 
      <View style = {styles.listBoxContainer}>

      </View>

    }else{
      benText = 
      <Text style = {styles.failToFind}>
        No Accounts Found
      </Text>
    }
    console.log(benList)

  return (
    <View style={styles.requested}>
      <View style={styles.groupParent}>

        <View style = {styles.titleContainter} >
          <Text style = {styles.titleText}>
            Bank Transfer
          </Text>

          <Pressable
            onPress={() => navigation.navigate("AddBeneficiary")}
            style = {styles.benBox}
          >
            <View >
              <Text style = {styles.benBoxText}>
                ADD Beneficiary
              </Text>
            </View>
          </Pressable>

        </View>

        <View style = {styles.benList}>
          <Text style = {styles.recentText}>
            Recent
          </Text>
          {benText}
        </View>
        {}

      </View>
    </View>
    );
};

const styles = StyleSheet.create({
  main:{
    flex: 1,
    width: "100%",
    backgroundColor: GlobalStyles.Color.white,
  },
  groupParent: {
    width: "100%",
    height: "100%",
  },
  titleContainter:{
    width:"80%",
    height:"30%",
    left:"10%"
  },
  titleText:{
    width:"100%",
    top: "10%",
    textAlign: "center",
    fontSize: GlobalStyles.FontSize.size_4xl,
  },
  benBox:{
    width:"100%",
    height:"30%",
    backgroundColor:"blue",
    top : "30%",
    borderRadius: 20,
  },
  benBoxText:{
    width:"100%",
    textAlign: "center",
    fontSize: GlobalStyles.FontSize.size_xl,
    color: "white",
    top : "100%",
  },
  benList:{
    width:"80%",
    height:"70%",
    left:"10%"
  },
  recentText:{
    colour: "grey",
    fontSize: GlobalStyles.FontSize.size_xl,
  },
  failToFind:{
    top: "20%",
    fontSize: GlobalStyles.FontSize.size_4xl,
    textAlign: "center",
  },
  listBoxContainer:{
    width:"100%",
    height:"50%",
    left:"10%",
    backgroundColor:"grey"
  }
});

export default BankTransfer;
