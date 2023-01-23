import React, { useContext, useEffect, useState } from "react";
import { Text, StyleSheet, View, Image, Pressable, Switch, TextInput} from "react-native";
import { useNavigation } from "@react-navigation/native";
import GlobalStyles from "../../GlobalStyles";
import api from "../api/api_list"
import AuthContext from "../auth/context";

const SendMoney = ({navigation}) => {
  const [data, setData] = useState({})
  const [benList, setBen] = useState([])

  useEffect(() => {
    getSettings()
  },[])
  
  //API
  const getSettings = async () => {
    const response = await api.RetriveBenificiaries()
    const data = response.data.details.content
    setBen(data)
  }
  //Sending
  const sendDetails = (Id) => {
    console.log(Id)
    console.log(benList[Id])
    const details = benList[Id]
    navigation.navigate("BankTransferAmount",
    {bankName: "FakeName",
      accountName: details.name,
      accountNumber: details.destinationIdentifier.accountNumber,
      iban:details.destinationIdentifier.iban,
      sortCode:details.destinationIdentifier.sortCode,
    }) 
  }
  //Rendering
  let benText = ""
  if(benList.length != 0){
    let beniter = []

    benList.forEach((item,i) => {
      beniter.push(
      <Pressable
        onPress={details => {sendDetails(i)}}
      >
        <View style = {styles.benBoxCon}>
          <Text>
            {item.name}
          </Text>
          <Text>
            +{item.phoneNumber}
          </Text>
          <Text>
            {item.destinationIdentifier.accountNumber}
          </Text>
        </View>
      </Pressable>

      )
    })
    benText = 
    <View style = {styles.listBoxContainer}>
        {beniter}
    </View>
    console.log(benText)
  }else{
    benText = 
    <Text style = {styles.failToFind}>
      No Accounts Found
    </Text>
  }

return (
  <View style={styles.requested}>
    <View style={styles.groupParent}>

      <View style = {styles.titleContainter} >
        <Text style = {styles.titleText}>
          Send Money
        </Text>

        <Pressable
          onPress={() => navigation.navigate("AddBeneficiary")}
          style = {styles.benBox}
        >
          <View >
            <Text style = {styles.benBoxText}>
             Add benificiary
            </Text>
          </View>
        </Pressable>

      </View>

      <View style = {styles.benList}>
        <View style = {styles.searchBox}>
          <TextInput 
            style = {styles.searchBoxInput}
            placeholder = "Search"
          >

          </TextInput>
        </View>
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
    height:180,
    left:"10%"
  },
  titleText:{
    width:"100%",
    top: "10%",
    textAlign: "center",
    fontSize: GlobalStyles.FontSize.size_6xl,
  },
  benBox:{
    width:"100%",
    height:"30%",
    backgroundColor: GlobalStyles.Color.blue_100,
    top : "30%",
    borderRadius: 20,
  },
  benBoxText:{
    width:"100%",
    textAlign: "center",
    fontSize: GlobalStyles.FontSize.size_xl,
    color: "black",
    top : "100%",
  },
  benList:{
    width:"80%",
    height:"70%",
    left:"10%",
    top: "-3%"
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
    backgroundColor:"grey"
  },
  searchBox:{
    width:"100%",
    height:"10%",
    backgroundColor: GlobalStyles.Color.gray_600,
    borderRadius: 50,
  },
  searchBoxInput:{
    width:"80%",
    height:"60%",
    left: "10%",
    top:"20%",
  },
  benBoxCon:{
    width:"100%",
    backgroundColor:"white"
  }
});

export default SendMoney;
