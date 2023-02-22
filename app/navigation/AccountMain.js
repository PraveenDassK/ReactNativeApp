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
      const response = await api.GetAccount(authContext.accountID);
      const data = response.data.details
  
      setBalance(data.availableBalance)
  
  
      //Verified calculation 
      setStatus(data.status != "ACTIVE")
  
        //Load the data for transactions
        const transactionCall = await api.GetTransactions(authContext.accountID);
        const transactionData = transactionCall.data.details
  
        //Format the data for transactions
        const numberOfTransactions = transactionData.totalSize
        
        let transactionList = [];
        let pageShow = []
        for(let i = 0; i < 5; i++){
          let dataHold = transactionData.content[i]
          transactionList.push(dataHold)

          pageShow.push(
            <Pressable
              style={[styles.transactionBox,styles.rounded,styles.shadow]}
              key={i}
              onPress={() => console.log("!")}
            >
              <Image
                style={[styles.transactionPicture]}
                resizeMode="cover"
                source={require("../assets/image-profileplaceholder.png")}
              />
              <Text
                style={[styles.transactionText,styles.subtitleText]}
              >
               {dataHold.account.customerName}
              </Text>
              <Text
                style={[styles.transactionText,styles.subtitleText]}
                >
                {moment(dataHold.transactionDate).format("MMM Do YY")}
              </Text>
              <Text
                style={[styles.transactionText,styles.subtitleText]}
                >
                £{dataHold.amount}
              </Text>
            </Pressable>
          )
        }
        setTransactionData( {
          "numTransaction" : numberOfTransactions,
          "transactions" : transactionList
        })

        setTransactionTable(pageShow)
    }
  
    let currency = (transactionData ? transactionData.transactions[0].amount : "£")

    const catNames = ["Helth", "fod", "hoose", "sping", "tansport"]
    const dataPercentages = ["70%","50%","40%","30%","20%"]

    /**
     * @dev Data needed for this page
     *      Verification status
     *      Wallet balance
     *      Recent transactios
     */
  return (
    <ScrollView>
      <View style={styles.screen}>
        
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
                    <Text style={[styles.BalanceText,styles.blueTitle]}>£{balance}</Text>
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
            <View style={[styles.carbonSpendingDiv,styles.rounded]}>
                <View style={styles.carbonSpendingTitleDiv}>
                        <Text style={styles.titleText}>Carbon Spending</Text>
                </View>
                {/**
                 * @notice the actual carbon holder
                 */}
                <View style={styles.carbonItemDiv}>
                  <View style={[styles.estimatedCarbonDiv,styles.shadow]}>
                    <Text style={styles.blueTitle}>2400</Text>
                    <Text>Estimated Kg of CO2</Text>
                  </View>
                  <View style={[styles.carbonSpendingAnalysysDiv,styles.rounded,styles.shadow]}>

                    <Text style={styles.subtitleText}>
                    {catNames[0]}
                    </Text>
                    <View style={[styles.carbonSpendingAnalysysBarBackground,styles.rounded]}>
                      <View style={[styles.carbonSpendingAnalysysBarProgress,styles.rounded]} width = {dataPercentages[0]} backgroundColor = "#E4732D">
                        <Text style={styles.barText}>
                        {dataPercentages[0]}
                        </Text>
                      </View>
                    </View>  

                    <Text style={styles.subtitleText}>
                    {catNames[1]}
                    </Text>
                    <View style={[styles.carbonSpendingAnalysysBarBackground,styles.rounded]}>
                      <View style={[styles.carbonSpendingAnalysysBarProgress,styles.rounded]} width = {dataPercentages[1]} backgroundColor = "#F3B53F">
                        <Text style={styles.barText}>
                        {dataPercentages[1]}
                        </Text>
                      </View>
                    </View>  

                    <Text style={styles.subtitleText}>
                    {catNames[2]}
                    </Text>
                    <View style={[styles.carbonSpendingAnalysysBarBackground,styles.rounded]}>
                      <View style={[styles.carbonSpendingAnalysysBarProgress,styles.rounded]} width = {dataPercentages[2]} backgroundColor = "#DC85F5">
                        <Text style={styles.barText}>
                        {dataPercentages[2]}
                        </Text>
                      </View>
                    </View>  

                    <Text style={styles.subtitleText}>
                    {catNames[3]}
                    </Text>
                    <View style={[styles.carbonSpendingAnalysysBarBackground,styles.rounded]}>
                      <View style={[styles.carbonSpendingAnalysysBarProgress,styles.rounded]} width = {dataPercentages[3]} backgroundColor = "#5888F5">
                        <Text style={styles.barText}>
                        {dataPercentages[3]}
                        </Text>
                      </View>
                    </View>  

                    <Text style={styles.subtitleText}>
                    {catNames[4]}
                    </Text>
                    <View style={[styles.carbonSpendingAnalysysBarBackground,styles.rounded]}>
                      <View style={[styles.carbonSpendingAnalysysBarProgress,styles.rounded]} width = {dataPercentages[4]} backgroundColor = "#5AC661">
                        <Text style={styles.barText}>
                        {dataPercentages[4]}
                        </Text>
                      </View>
                    </View>  

                    <View style={[styles.carbonAssetsDiv]}>
                      <Text style={styles.titleText}>
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
              <Text style={styles.titleText}>
                Recent Transactions
              </Text>
              {transactionTable}
            </View>

            <View style={[styles.carbonContainer,styles.rounded,styles.shadow]}>
              <View style={styles.treeContainer}>
                <Image style={styles.treeImage} resizeMode="contain" source={require("../assets/image-tree.png")} />
              </View>
             <View width = "100%" height = "40%">
                <Text style={[styles.congratulationsText]}>
                  Congratulations!
                </Text>
                <Text style={[styles.congratulationsText]}>
                    You have planted 5 trees with advance card purchase
                </Text>
                <Text style={[styles.congratulationsText]}>
                  View more
                </Text>
             </View>
            </View>

            <View style={[styles.referContainer,styles.rounded,styles.shadow]}>
              <Text>
                Refer and Earn 
              </Text>
              <Text>
                Carbon Tokens 
              </Text>
              <Text>
                Refer Now
              </Text>
            </View>

        </View>
    </ScrollView>  
  );
};
  
  const styles = StyleSheet.create({
    congratulationsText:{
      textAlign:"center",
      width:"100%",
      backgroundColor:"black",
      height:"10%"
    },
    titleText:{
      top: verticalScale(2),
      left: horizontalScale(10),
      fontSize: moderateScale(18),
      fontWeight: "700",
    },
    subtitleText:{
      fontSize: moderateScale(15),
    },
    barText:{
      left:horizontalScale(20),
      top:"25%",
      fontSize: moderateScale(15),
      fontWeight:"bold"
    },
    blueTitle:{
      color:"blue",
      fontSize:moserateScale(30),
      fontWeight:"bold",
    },
    referContainer:{
      width:"80%",
      height:verticalScale(200),
      left:"10%",
      backgroundColor:"white",
      marginTop: "2.5%",
    },
    treeContainer:{
      height:"60%"
    },
    treeImage:{
      height:"100%",
      width:"100%",
    },
    carbonContainer:{
      width:"80%",
      height:verticalScale(400),
      left:"10%",
      backgroundColor:"white",
      marginTop: "2.5%",
    },
    carbonAssetsDiv:{

    },
    tokenBox:{
      width:"50%",
      height:"40%",
      left:"25%",
    },
    carbonSpendingAnalysysBarBackground:{
      width:"100%",
      height:"10%",
      backgroundColor:"#f6f5f8",
    },

    carbonSpendingAnalysysBarProgress:{
      height:"100%",
      backgroundColor:"orange"
    },
    
    rounded:{
      borderRadius: moderateScale(15),
    },
    shadow:{
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: verticalScale(1),
      },
      shadowOpacity: 1,
      shadowRadius: 1,

      elevation: 1,
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
      bottom:"70%",
    },
    transactionBox:{
      width:"100%",
      height:verticalScale(80),
      marginTop: "2.5%",
      backgroundColor:"white",
    },
    transactionPicture:{
      width:"20%",
      height:"80%",
      borderRadius: moderateScale(15),
      top:"10%",
      marginLeft: "5%",
    },
    transactionsContainer:{
      height:verticalScale(500),
      width: "80%",
      marginLeft: "10%",
      marginTop: "2.5%",
      borderRadius: moderateScale(15),
    },

      carbonItemDiv:{
          width:"100%",
          height:"150%",
          borderRadius: moderateScale(15),
      },
      screen: {
          flex: GlobalStyles.DivContainer.flex,
          height: verticalScale(2100),
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
          height: verticalScale(2.5),
          backgroundColor: "#0101FD",
          width: "50%",
          borderRadius: moderateScale(25),
      },
  
      blackLine: {
          height: verticalScale(2.5),
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
          height: verticalScale(150),
          marginLeft: "10%",
          borderRadius: moderateScale(15),
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
          width: horizontalScale(75),
          justifyContent: "center"
      },
  
      congratulationsText: {
          fontSize: moderateScale(14),
          fontWeight: "700"
      },
  
      congratulationsSubText: {
          marginTop: "2.5%",
          fontSize: moderateScale(12),
          fontWeight: "400"
  
      },
  
      applyNowText: {
          marginTop: "2.5%",
          fontSize: moderateScale(12),
          fontWeight: "400",
          color: "blue",
      },
  
      totalWalletBalanceContainer: {
          marginTop: "2.5%",
          width: "80%",
          backgroundColor: "#FFFFFF",
          height: verticalScale(75),
          marginLeft: "10%",
          borderRadius: moderateScale(15),
          flexDirection: 'column',
          padding: "2.5%",
          justifyContent: "center"
  
      },
  
      totalWalletBalanceText: {
          textAlign: "center",
          fontSize: moderateScale(14),
      },
  
      BalanceText: {
          fontSize: moderateScale(26),
          textAlign: "center",
      },
  
      dateText: {
          textAlign: "center",
          fontSize: moderateScale(14),
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
          height: verticalScale(60),
          flexDirection: 'row',
          borderRadius: moderateScale(10),
  
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
          fontSize: moderateScale(10),
          textAlign: "center",
      },
  
      carbonSpendingDiv: {
          width: "80%",
          height:verticalScale(500),
          marginLeft: "10%",
          marginTop: "2.5%",
          borderRadius: moderateScale(15),
      },
  
      carbonIcon: {
          height: verticalScale(25),
          width: horizontalScale(25),
          resizeMode: "contain",
      },
  
      carbonSpendingTitleDiv: {
          width: "100%",
          height: verticalScale(30),
          display: 'flex',
          flexDirection: 'row',
      },
  
      carbonSpendingText: {
          top: verticalScale(2),
          left: horizontalScale(10),
          fontSize: moderateScale(18),
          fontWeight: "700",
  
      }
  
  
  
  
  });
  
  export default HomeScreenPersonal;