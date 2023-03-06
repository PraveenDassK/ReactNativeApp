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
    // <View style={styles.account}>
    //   <View style={styles.helloParent}>
    //     <AppText style={styles.hello}>{name}</AppText>
    //     <AppText style={styles.hello2}>Standard</AppText>
    //     <AppText style={[styles.hello3, styles.helloTypo]}>Manage</AppText>
    //     <View style={[styles.rectangleParent, styles.groupChildPosition]}>
    //       <View style={[styles.groupChild, styles.groupChildPosition]} />
    //       <View style={[styles.groupItem, styles.groupPosition]} />
    //       <View style={[styles.groupInner, styles.groupPosition]} />
    //       <Pressable
    //         style={[styles.statementsParent, styles.parentPosition]}
    //         onPress={() => navigation.navigate("Transactions")}
    //       >
    //         <AppText
    //           style={[
    //             styles.limits1Typo,
    //             styles.limits1SpaceBlock,
    //             styles.limitsPosition,
    //           ]}
    //         >
    //           Statements
    //         </AppText>
    //         <Image
    //           style={[styles.iconIonicIosArrowForward, styles.iconPosition]}
    //           resizeMode="cover"
    //           source={("../assets/icon-carbonyteuparrow.png")}
    //         />
    //       </Pressable>
    //       <View style={[styles.limitsParent, styles.parentPosition]}>
    //         <Pressable
    //           style={styles.limitsPosition}
    //           onPress={() => navigation.navigate("SpendingLimit")}
    //         >
    //           <AppText style={[styles.limits1Typo, styles.limits1SpaceBlock]}>
    //             Limits
    //           </AppText>
    //         </Pressable>
    //         <Pressable
    //           style={[styles.iconIonicIosArrowForward, styles.iconPosition]}
    //           onPress={() => navigation.navigate("Transactions")}
    //         >
    //         </Pressable>
    //       </View>
    //       <Pressable
    //         style={styles.accountVerificationLetterParent}
    //         onPress={() => navigation.navigate("AccountLetter")}
    //       >
    //         <AppText
    //           style={[
    //             styles.accountVerificationLetter,
    //             styles.limits1Typo,
    //             styles.limitsPosition,
    //           ]}
    //         >
    //           Account verification letter
    //         </AppText>
    //       </Pressable>
    //     </View>
    //     <Image
    //       style={[styles.groupIcon, styles.iconPosition]}
    //       resizeMode="cover"
    //       source={("../assets/group-31123.png")}
    //     />
    //   </View>
    // </View>
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
    
    marginTop: 10
  
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
  helloTypo: {
    // fontFamily: GlobalStyles.FontFamily.helvetica,
    textAlign: "left",
    fontWeight: "700",
    position: "absolute",
  },
  groupChildPosition: {
    height: 155,
    left: 0,
    top: "50%",
    position: "absolute",
  },
  groupPosition: {
    height: 2,
    borderTopWidth: 1,
    borderColor: "#f6f5f8",
    borderStyle: "solid",
    left: 0,
    right: 0,
    top: "50%",
    position: "absolute",
  },
  parentPosition: {
    height: 14,
    left: 23,
    right: 23,
    position: "absolute",
  },
  limits1SpaceBlock: {
    marginTop: -7,
    color: GlobalStyles.Color.gray_1400,
    lineHeight: 14,
  },
  limitsPosition: {
    left: 0,
    top: "50%",
    position: "absolute",
  },
  iconPosition: {
    position: "absolute",
    right: 0,
  },
  limits1Typo: {
    width: 257,
    color: GlobalStyles.Color.gray_1400,
    lineHeight: 14,
    fontSize: GlobalStyles.FontSize.size_base,
    // fontFamily: GlobalStyles.FontFamily.helvetica,
    textAlign: "left",
    fontWeight: "700",
  },
  hello: {
    top: 0,
    color: GlobalStyles.Color.indigo_100,
    textAlign: "left",
    fontWeight: "700",
    left: 6,
    fontSize: GlobalStyles.FontSize.size_4xl,
    position: "absolute",
  },
  hello1: {
    top: 1,
    right: 10,
    color: GlobalStyles.Color.blue_100,
    fontSize: GlobalStyles.FontSize.size_4xl,
    //fontFamily: GlobalStyles.FontFamily.helvetica,
  },
  hello2: {
    top: 28,
    color: GlobalStyles.Color.gray_700,
    fontSize: GlobalStyles.FontSize.size_base,
    textAlign: "left",
    left: 6,
    position: "absolute",
  },
  hello3: {
    marginTop: -104.25,
    left: 3,
    fontSize: GlobalStyles.FontSize.size_xs,
    color: GlobalStyles.Color.gray_800,
    top: "50%",
  },
  groupChild: {
    marginTop: -77.5,
    right: 1,
    borderRadius: GlobalStyles.Border.br_5xl,
    backgroundColor: GlobalStyles.Color.white,
  },
  groupItem: {
    marginTop: -29,
  },
  groupInner: {
    marginTop: 24,
  },
  iconIonicIosArrowForward: {
    bottom: 0,
    width: 6,
    height: 11,
    right: 0,
  },
  statementsParent: {
    top: 17,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  limitsParent: {
    marginTop: -9.5,
    top: "50%",
  },
  accountVerificationLetter: {
    marginTop: -7.83,
  },
  accountVerificationLetterParent: {
    bottom: 20,
    height: 16,
    left: 23,
    right: 23,
    position: "absolute",
  },
  rectangleParent: {
    marginTop: -74.25,
    right: 0,
  },
  groupIcon: {
    bottom: -1,
    left: 1,
    maxWidth: "100%",
    overflow: "hidden",
    height: 1,
    right: 0,
  },
  helloParent: {
    width: "100%",
    height: "100%",
  },
  account: {
    flex: 1,
    paddingTop: GlobalStyles.Padding.padding_6xl,
    width: "100%",
    paddingLeft:"10%",
    paddingRight:"10%",
    backgroundColor: GlobalStyles.Color.white,
  },
});

export default AccountSettings;
