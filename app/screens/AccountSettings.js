import React, { useContext, useEffect, useState, Keyboard } from "react";
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { Text, StyleSheet, View, Image, TouchableOpacity } from "react-native";

import AppText from "../components/Text";

import api from "../api/api_list"
import AuthContext from "../auth/context";

import GlobalStyles from "../../GlobalStyles";
import { FlatList } from "react-native-gesture-handler";




const ITEMS = [
  {
    id:1, title: "statements", route: "Transactions"
  },
  {
    id:2, title: "limits", route: "SpendingLimit"
  },
  {
    id:3, title: "account and verification letter", route: "AccountLetter"
  },
  


]

const AccountSettings = ({navigation}) => {
  const [name, setName] = useState("")
  const [balance, setBalance] = useState(0)
  const authContext = useContext(AuthContext)
  const {settings} = useContext(AuthContext)

  const insets = useSafeAreaInsets();


  //Calls the API once during load
  useEffect(() => {
      const unsubscribe = navigation.addListener('focus',  () => {
        loadData()
      })
    },[])

  const loadData = async() =>{
      const customer = await api.GetAccount(authContext.accountID)
      const data = customer.data.details
      setName(data.name)
      setBalance(data.availableBalance)
      console.log(data)
  }

  

  return (
    <View 
    style={[
      styles.accountContainer,
      {
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right,
      }
    ]}>
      <View style={styles.nameBalanceContainer}>
        <View style={[styles.nameBalanceItem, {flex: 2}]}>
          <AppText style={{fontSize: 20}}>{name}</AppText>
        </View>
        <View style={[styles.nameBalanceItem, {alignItems: "flex-end"}]}>
          <AppText style={{fontSize: 20, color: "blue"}}>£{balance}</AppText>
        </View>
      </View>
      <View style={styles.accountTypeContainer}>
        <AppText style={{opacity: 0.3}}>Standard</AppText>
      </View>

      <View style={styles.managementContainer}>
        <AppText style={{opacity: 0.5}}>Management</AppText>
        <View style={styles.itemsContainer}>
          <FlatList 
            data={ITEMS}
            keyExtractor={item => item.id}
           renderItem={({item}) => {
            return (
              <TouchableOpacity onPress={() => navigation.navigate(item.route)}>
                <View style={styles.item}>
                  <View style={styles.itemTitle}>
                    <AppText>{item.title}</AppText>
                  </View>
                  <View style={styles.itemChevron}>
                  <MaterialCommunityIcons name="chevron-right" size={20} color="blue" />
                  </View>
                </View>
              </TouchableOpacity>
              )
           }}
           ItemSeparatorComponent={() => (
            <View 
            style={{
              width: "100%",
              height: 1,
              backgroundColor: "black",
              opacity: 0.3
              
           
          }}/>
           )}
          />

        </View>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  accountContainer: {
    flex:1,
    justifyContent: "flex-start",
    alignItems: "center",
  
    backgroundColor: "#F6F5F8"
  },
  accountTypeContainer: {
    width: "80%",
    
    alignItems: 'flex-start',
    marginTop: 5
   
  },
  item: {
    backgroundColor:"transparent",
    width: "100%",
    height: 50,
    flexDirection: "row"
  },
  itemsContainer: {
    backgroundColor:"white",
    width: "100%", 
    borderRadius: 15,
    
    marginTop: 15
  
  },
  itemTitle: {
    flex:2,
    justifyContent: "center",
    paddingLeft: 15,
  },
  itemChevron: {
    flex:1, 
    alignItems: "flex-end",
    justifyContent: "center",
    paddingRight: 15,

  },
  nameBalanceContainer: {
  
    flexDirection: "row",
    width: "80%",
    
  },
  nameBalanceItem: {
    flex: 1,
  },
  managementContainer:  {
    marginTop: 100,
    justifyContent: "flex-start",
    alignItems: "flex-start", 
    width: "80%"

  },
 
});

export default AccountSettings;
