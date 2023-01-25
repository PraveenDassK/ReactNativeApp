import React,{ useEffect, useState,useContext } from "react";
import { Text, StyleSheet, Image, View, Pressable, ScrollView } from "react-native";
import Screen from "../components/Screen";
import GlobalStyles from "../../GlobalStyles";
import { horizontalScale, verticalScale, moderateScale } from "../config/scaling";

import api from "../api/api_list";
import AuthContext from "../auth/context";

import moment from 'moment';

const HomeScreenPersonal = ({navigation}) => {
    //Saves all the data from the API call
    const [data, setData] = useState(null)
    const [balance, setBalance] = useState(null)
    const [transactionTable, setTransactionTable] = useState(null)
  
    const [status, setStatus] = useState(null)
    const authContext = useContext(AuthContext)
  
    const [transactionData, setTransactionData] = useState(null)
  
    const todaydate = moment().format('ll')
  
    //Calls the API once during load
    useEffect(() => {
      const unsubscribe = navigation.addListener('focus',  () => {
        loadData()
      })
    },[])
  
    //Gets the data for the user
    const loadData = async () => {
      const response = await api.GetAccount();
      const data = response.data.details
  
      setBalance(data.availableBalance)
  
  
      //Verified calculation 
      setStatus(data.status != "ACTIVE")
  
        //Load the data for transactions
        const transactionCall = await api.GetTransactions();
        const transactionData = transactionCall.data.details
  
        //Format the data for transactions
        const numberOfTransactions = transactionData.totalSize
        
        let transactionList = [];
        let pageShow = []
        for(let i = 0; i < 5; i++){
          let dataHold = transactionData.content[i]
          transactionList.push(dataHold)

          pageShow.push(
            <View
              style={styles.transactionBox}
              key={i}
            >
              <Image
                style={[styles.transactionPicture]}
                resizeMode="cover"
                source={require("../assets/image-profileplaceholder.png")}
              />
              <Text
                style={styles.transactionText}
              >
               {dataHold.account.customerName}
              </Text>
              <Text
                style={styles.transactionText}
              >
                {dataHold.transactionDate}
              </Text>
              <Text
                style={styles.transactionText}
              >
                {dataHold.amount}
              </Text>
            </View>
          )
        }
        setTransactionData( {
          "numTransaction" : numberOfTransactions,
          "transactions" : transactionList
        })

        setTransactionTable(pageShow)
    }
  
    let currency = (transactionData ? transactionData.transactions[0].amount : "£")
    
    /**
     * @dev Data needed for this page
     *      Verification status
     *      Wallet balance
     *      Recent transactios
     */
  return (
    <ScrollView>
      <View style={styles.screen}>

            <View style={styles.NavBarTop}>
                <Text style={[styles.navBarTopText, styles.blueOverwrite]}>Personal</Text>
                <Text style={styles.navBarTopText}>Business</Text>
            </View>

            <View style={styles.lineSeparatorDiv}>
                <View style={styles.blueLine}/>
                <View style={styles.blackLine}/>
            </View>

            <View style={styles.NavBarBottom}>
              <Pressable
                onPress={() => navigation.navigate("AccountMain")}
              >
                <Text style={styles.NavBarBottomText}>Account</Text>
              </Pressable>
              <Pressable
                onPress={() => navigation.navigate("Analytics")}
              >
                <Text style={styles.NavBarBottomText}>Analysis</Text>
                </Pressable>

                <Pressable
                onPress={() => navigation.navigate("Carbon")}
              >
                <Text style={styles.NavBarBottomText}>Carbon</Text>
                </Pressable>

                <Pressable
                onPress={() => navigation.navigate("Settings")}
              >
                <Text style={styles.NavBarBottomText}>Profile</Text>
                </Pressable>
            </View>



            <View style={styles.divContainer}>
                <View style={styles.congratulationsContainer}>
                    <View style={styles.progressDiv}>
                        <Image style={styles.progressIcon} resizeMode="contain" source={require("../assets/icon-bluecheck.png")} />
                    </View>

                    <View style={styles.congratulationsDiv}>
                        <Text style={styles.congratulationsText}>Congratulations!</Text>
                        <Text style={styles.congratulationsSubText}>You are almost ready with your account, Avail more benefits by choosing our card plans</Text>
                        <Text style={styles.applyNowText}>Apply Now</Text>
                    </View>
                </View>

                <View style={styles.totalWalletBalanceContainer}>
                    <Text style={styles.totalWalletBalanceText}>Total Wallet Balance</Text>
                    <Text style={styles.BalanceText}>£{balance}</Text>
                    <Text style={styles.dateText}>{todaydate}</Text>
                </View>

                <View style={styles.buttonContainer}>

                    <Pressable 
                    onPress={() => navigation.navigate("AddFunds")}
                    style={styles.inputBox}>
                        <View style={styles.inputBoxDiv}>
                            <Image style={styles.inputIcon} resizeMode="contain" source={require("../assets/add.png")}/>
                            <Text style={styles.inputBoxText}>Add Funds</Text>
                        </View>
                    </Pressable>

                    <Pressable 
                    onPress={() => navigation.navigate("SendMoney")}
                    style={styles.inputBox}>
                        <View style={styles.inputBoxDiv}>
                            <Image style={styles.inputIcon} resizeMode="contain" source={require("../assets/send-1.png")}/>
                            <Text style={styles.inputBoxText}>Send Money</Text>
                        </View>
                    </Pressable>

                    <Pressable 
                    onPress={() => navigation.navigate("MyCards")}
                    style={styles.inputBox}>
                        <View style={styles.inputBoxDiv}>
                            <Image style={styles.inputIcon} resizeMode="contain" source={require("../assets/icon-outlinecreditcard.png")}/>
                            <Text style={styles.inputBoxText}>My Cards</Text>
                        </View>
                    </Pressable>
                </View>
            </View>
            
            {/**
             * @dev Carbon spending section
             */}
            <View style={styles.carbonSpendingDiv}>
                <View style={styles.carbonSpendingTitleDiv}>
                        <Text style={styles.carbonSpendingText}>Carbon Spending</Text>
                </View>
                {/**
                 * @notice the actual carbon holder
                 */}
                <View style={styles.carbonItemDiv}>
                  <View style={[styles.estimatedCarbonDiv,styles.shadow]}>
                    <Text>2400</Text>
                    <Text>Estimated Kg of CO2</Text>
                  </View>
                  <View style={[styles.carbonSpendingAnalysysDiv]}>

                    <Text>
                      Cat 1
                    </Text>
                    <View style={[styles.carbonSpendingAnalysysBarBackground,styles.rounded,styles.shadow]}>
                      <View style={[styles.carbonSpendingAnalysysBarProgress,styles.rounded]} width = "20%" backgroundColor = "#E4732D"/>
                    </View>  

                    <Text>
                      Cat 2
                    </Text>
                    <View style={[styles.carbonSpendingAnalysysBarBackground,styles.rounded,styles.shadow]}>
                      <View style={[styles.carbonSpendingAnalysysBarProgress,styles.rounded]} width = "50%" backgroundColor = "#F3B53F"/>
                    </View>  

                    <Text>
                      Cat 3
                    </Text>
                    <View style={[styles.carbonSpendingAnalysysBarBackground,styles.rounded,styles.shadow]}>
                      <View style={[styles.carbonSpendingAnalysysBarProgress,styles.rounded]} width = "80%" backgroundColor = "#DC85F5"/>
                    </View>  

                    <Text>
                      Cat 4
                    </Text>
                    <View style={[styles.carbonSpendingAnalysysBarBackground,styles.rounded,styles.shadow]}>
                      <View style={[styles.carbonSpendingAnalysysBarProgress,styles.rounded]} width = "40%" backgroundColor = "#5888F5"/>
                    </View>  

                    <Text>
                      Cat 5
                    </Text>
                    <View style={[styles.carbonSpendingAnalysysBarBackground,styles.rounded,styles.shadow]}>
                      <View style={[styles.carbonSpendingAnalysysBarProgress,styles.rounded]} width = "60%" backgroundColor = "#5AC661"/>
                    </View>  

                    <View style={[styles.carbonAssetsDiv]}>
                      <Text>
                        Carbon Assets
                      </Text>
                      <View style={[styles.tokenBox]}>
                        <Text>
                          2 Carbonyte Tokens
                        </Text>
                        <Text>
                          2 Total Assets
                        </Text>
                      </View>
                    </View>

                  </View>
                </View>
            </View>
            
            {/**
             * @dev Transactions section
             */}
            <View style={styles.transactionsContainer}>
              <Text style={styles.carbonSpendingText}>
                Recent Transactions
              </Text>
              {transactionTable}
            </View>

            <View style={styles.carbonContainer}>

            </View>

        </View>
    </ScrollView>  
  );};
  
  const styles = StyleSheet.create({
    carbonContainer:{

    },
    carbonAssetsDiv:{

    },
    tokenBox:{
      width:"50%",
      height:"20%",
      left:"25%",
      backgroundColor:"lightgrey",
    },
    carbonSpendingAnalysysBarBackground:{
      width:"100%",
      height:"10%",
      backgroundColor:"lightgrey",
    },

    carbonSpendingAnalysysBarProgress:{
      height:"100%",
      backgroundColor:"orange"
    },
    
    rounded:{
      borderRadius: 50,
    },
    shadow:{
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 5,

      elevation: 5,
    },
    carbonSpendingAnalysysDiv:{
      backgroundColor:"white",
      width:"100%",
      height:"50%",
      padding:"5%",
      top: "2%",
    },
    estimatedCarbonDiv:{
      backgroundColor:"white",
      borderRadius: 15,
      width:"100%",
      height:"10%",
      padding:"5%",
    },
    transactionText:{
      left:"30%",
      bottom:"80%",
    },
    transactionBox:{
      width:"100%",
      height:verticalScale(80),
      borderRadius: 15,
      marginTop: "2.5%",
      backgroundColor:"white",
    },
    transactionPicture:{
      width:"20%",
      height:"80%",
      borderRadius: 15,
      top:"10%",
      marginLeft: "5%",
    },
    transactionsContainer:{
      height:"50%",
      width: "80%",
      marginLeft: "10%",
      marginTop: "2.5%",
      borderRadius: 15,
    },

      carbonItemDiv:{
          width:"100%",
          height:"150%",
          borderRadius: 15,
      },
      screen: {
          flex: GlobalStyles.DivContainer.flex,
          height:2000,
      },
  
      NavBarTop: {
          marginTop: GlobalStyles.Title.marginTop,
          flexDirection: 'row',
          width: "100%",
          justifyContent: "space-around"
      },
  
      navBarTopText: {
          fontSize: GlobalStyles.NavBar.fontSize,
          fontWeight: GlobalStyles.NavBar.fontWeight,
          Color: GlobalStyles.NavBar.fontColor,
      },
  
      lineSeparatorDiv: {
      marginTop: "1.5%",
          flexDirection: 'row',
          width: "95%",
          justifyContent: "space-around",
          marginLeft: "2.5%"
      },
  
      blueLine: {
          height: 2.5,
          backgroundColor: "#0101FD",
          width: "50%",
          borderRadius: 25,
      },
  
      blackLine: {
          height: 2.5,
          backgroundColor: "#707070",
          width: "50%"
      },
  
      blueOverwrite: {
          color: "blue",
          fontWeight: "700",
      },
  
      NavBarBottom: {
          marginTop: "4%",
          flexDirection: 'row',
          width: "85%",
          justifyContent: "space-around",
          marginLeft: "7.5%"
  
      },
  
      NavBarBottomText: {
          fontSize: GlobalStyles.NavBarBottomText.fontSize,
          fontWeight: GlobalStyles.NavBarBottomText.fontWeight,
          Color: GlobalStyles.NavBarBottomText.fontColor,
      },
  
  
      DivContainer: {
          width: GlobalStyles.DivContainer.width,
          height: "100%",
          backgroundColor: "red"
      },
  
      congratulationsContainer: {
          marginTop: "4.5%",
          width: "80%",
          backgroundColor: "#E4E4FF",
          height: 150,
          marginLeft: "10%",
          borderRadius: 15,
          flexDirection: 'row',
          padding: "2.5%",
      },
  
      progressDiv: {
          flex: 3.75,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
  
      },
  
      congratulationsDiv: {
          flex: 6.25,
          justifyContent: "center"
      },
  
      progressIcon: {
          height: "100%",
          width: 75,
          justifyContent: "center"
      },
  
      congratulationsText: {
          fontSize: 14,
          fontWeight: "700"
      },
  
      congratulationsSubText: {
          marginTop: "2.5%",
          fontSize: 12,
          fontWeight: "400"
  
      },
  
      applyNowText: {
          marginTop: "2.5%",
          fontSize: 12,
          fontWeight: "400",
          color: "blue",
      },
  
      totalWalletBalanceContainer: {
          marginTop: "2.5%",
          width: "80%",
          backgroundColor: "#FFFFFF",
          height: verticalScale(75),
          marginLeft: "10%",
          borderRadius: 15,
          flexDirection: 'column',
          padding: "2.5%",
          justifyContent: "center"
  
      },
  
      totalWalletBalanceText: {
          textAlign: "center",
          fontSize: 14,
      },
  
      BalanceText: {
          fontSize: 26,
          textAlign: "center",
      },
  
      dateText: {
          textAlign: "center",
          fontSize: 14,
      },
  
      buttonContainer: {
          marginTop: "2.5%",
          width: GlobalStyles.DivContainer.width,
          marginLeft: GlobalStyles.RowText.marginLeft,
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
      },
  
      inputBox: {
          backgroundColor: "white",
          width: "32%",
          height: 60,
          flexDirection: 'row',
          borderRadius: 10,
  
      },
  
      inputBoxDiv: {
          width: "100%",
          alignItems: "center",
          justifyContent: "center"
      },
  
      inputIcon: {
          resizeMode: "contain",
          height: verticalScale(25)
      },
  
      inputBoxText: {
          fontSize: 10,
          textAlign: "center",
      },
  
      carbonSpendingDiv: {
          width: "80%",
          height:verticalScale(500),
          marginLeft: "10%",
          marginTop: "2.5%",
          borderRadius: 15,
      },
  
      carbonIcon: {
          height: 25,
          width: 25,
          resizeMode: "contain",
      },
  
      carbonSpendingTitleDiv: {
          width: "100%",
          height: 30,
          display: 'flex',
          flexDirection: 'row',
      },
  
      carbonSpendingText: {
          top: 2,
          left: 10,
          fontSize: 18,
          fontWeight: "700",
  
      }
  
  
  
  
  });
  
  export default HomeScreenPersonal;