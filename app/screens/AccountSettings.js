import React, { useContext, useEffect, useState, Keyboard } from "react";
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { ActivityIndicator, Text, StyleSheet, View, Image, TouchableOpacity } from "react-native";

import AppText from "../components/Text";

import apiCall from "../api/apiCall";

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
]

const AccountSettings = ({navigation}) => {
  const [isLoading, setIsLoading] = useState(false)
  const [name, setName] = useState("")
  const [balance, setBalance] = useState(0)
  const [subscriptions, setSubscriptions] = useState(null)

  const {settings, accountID} = useContext(AuthContext)

  const insets = useSafeAreaInsets();


  //Calls the API once during load
  useEffect(() => {
      const unsubscribe = navigation.addListener('focus',  () => {
        loadData()
      })
    },[])

  const loadData = async() =>{
    setIsLoading(true)
    const customer = await api.GetAccount(accountID)
    const userData = await apiCall.GetUsersSubscriptions(accountID)
    

    const data = customer.data.details
    setSubscriptions(userData.subName)
    setName(data.name)
    setBalance(data.availableBalance)
    setIsLoading(false)
   
  }

  if(isLoading) {
    return (
         <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
             <ActivityIndicator size={'large'} color="blue" />
         </View>
    )
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
        <AppText style={{opacity: 0.3}}>{subscriptions}</AppText>
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
                    <AppText style={{textTransform: "capitalize"}}>{item.title}</AppText>
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
              height: 0.3,
              backgroundColor: "black",
              opacity: 0.2
              
           
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
