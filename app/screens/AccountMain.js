import React, { useEffect, useState, useContext, useCallback, useRef } from "react";
import {
  RefreshControl,
  Text,
  StyleSheet,
  Image,
  View,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator, 
  Platform,
  
  
} from "react-native";

import GlobalStyles from "../../GlobalStyles";
import {
  horizontalScale,
  verticalScale,
  moderateScale,
} from "../config/scaling";

import apiweb3 from "../api/web3_api";
import apiCall from "../api/apiCall";
import AuthContext from "../auth/context";

import FadeInView from "../components/fadeInview";

import moment from "moment";
import AppText from "../components/Text";

const HomeScreenPersonal = ({ navigation, route }) => {

  console.log("route", route,route?.params, route?.params?.reload)
 
  const [isLoading, setIsLoading] = useState(false)
  //Saves all the data from the API call
  const [data, setData] = useState(null);
  const [balance, setBalance] = useState(null);
  const [hideBalance, setHideBalance] = useState(false)
  const [transactionTable, setTransactionTable] = useState(null);

  const [status, setStatus] = useState(null);
  const [accountnumber, setaccountnumber] = useState(null);
  const [sortCode, setSortCode] = useState(null);
  const [accountname, setaccountname] = useState(null);
  const [cardnumber, setcardnumber] = useState(null);
  const authContext = useContext(AuthContext);
  const { settings } = useContext(AuthContext);

  const todaydate = moment().format("MMMM D, YYYY");

  const [numTrees, setTrees] = useState(0);
  const [numCarbon, setCarbon] = useState(0);
  const [animalsSaved, setAnimalsSaved] = useState(0);
  const [projects, setProjects] = useState([]);

  const [refreshing, setRefreshing] = useState(false);

  const [name, setName] = useState(null)
  const [description, setDescription] = useState(null)
  const [price, setPrice] = useState(null)
  const [nftimg, setNftimg] = useState(null)

  
  const TotalAmount = numTrees;
  const TokenAmount = numTrees;
  const carbonAmount = numCarbon;

  //Calls the API once during load
  useEffect(() => {
    loadData();
  }, []);

  //Gets the data for the user
  const loadData = async () => {
    setIsLoading(true)
    const userData = await apiCall.GetCustomerDetails(authContext.accountID);
    const cardData = await apiCall.GetCardDetails("686283112");
    const resposeData = await apiCall.GetUserImpact("CC11875");
    const cards = await apiCall.GetCardByAccount("686283112")

  

    setcardnumber(cardData.cardNumberMasked)
    setSortCode("00-00-00");
    setStatus(cardData.inPost)

    setBalance(userData.balance);
    setaccountnumber(userData.accountId);
    setaccountname(userData.name);

    setProjects(resposeData.assets);
    setTrees(resposeData.totalAssets);
    setCarbon(resposeData.totalOffset);

    ////FUP Data
    try{
      const NFTresponse = await apiweb3.GetBalance()
      setName(NFTresponse.data.data.nftData[0].data.name)
      setDescription(NFTresponse.data.data.nftData[0].data.description)
      setPrice(NFTresponse.data.data.nftData[0].data.price)
      setNftimg(NFTresponse.data.data.nftData[0].data.url)
    }catch{

    }


    //Load the data for transactions
    const transactionCall = await apiCall.GetTransactions(authContext.accountID);

    

    let transactionList = [];
    let pageShow = [];
    for (let i = 0; i < 5; i++) {
      let dataHold = transactionCall.transactions[i];
      console.log("datahold",dataHold)
      pageShow.push(
        <TouchableOpacity
          style={[styles.transactionBox, styles.rounded, styles.boxShadow]}
          key={i}
          onPress={() => navigation.navigate("Transactions")}
        >
          <View style={{ height: "100%", flexDirection: "row" }}>
            <View
              style={{
                width: horizontalScale(50),
                height: verticalScale(50),
                borderRadius: moderateScale(25),
                backgroundColor: "#F6F5F8",
                borderColor: "black",
                alignSelf: "center",
                marginLeft: "2.5%",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <AppText
                style={{
                  alignSelf: "center",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlignVertical: "center",
                  fontWeight: "700",
                
                }}
              >
                {dataHold.description.replace("Payment to ", "")[0]}
              </AppText>
            </View>
            <View
              style={{
                flex: 3.5,
                alignSelf: "center",
                justifyContent: "space-evenly",
                marginLeft: "5%",
              }}
            >
              <AppText style={{ fontSize: moderateScale(14), fontWeight: "700" }}>
                {dataHold.description.replace("Payment to ", "")}
              </AppText>
              <AppText style={{opacity: 0.4}}>
                {moment(dataHold.transactionDate).format("MMMM D, YYYY")}
              </AppText>
            </View>
            <View
              style={{
                flex: 4,
                justifyContent: "space-evenly",
                alignItems: "flex-end",
                marginRight: "2.5%",
              }}
            >
              <AppText style={{ marginRight: "2.5%",fontSize: moderateScale(18), fontWeight: "700", color: !dataHold.credit ? "red": "green" }}>
                {!dataHold.credit ? "-": "+"} £{dataHold.amount.toFixed(2)}
              </AppText>
            </View>
          </View>
        </TouchableOpacity>
      );
    }

    setTransactionTable(pageShow);
    setIsLoading(false)
  };

  let currency = "£";
  const catNames = ["Health", "Food", "House", "Shopping", "Transport"];
  const dataPercentages = ["70%", "50%", "40%", "30%", "20%"];

  /**
   * @dev Data needed for this page
   *      Verification status
   *      Wallet balance
   *      Recent transactios
   */
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      loadData()
      setRefreshing(false);
    }, 2000);
  }, [refreshing]);

  const generateBoxShadowStyle = (
    xOffset,
    yOffset,
    shadowColorIos,
    shadowOpacity,
    shadowRadius,
    elevation,
    shadowColorAndroid,
  ) => {
    if (Platform.OS === 'ios') {
      styles.boxShadow = {
        shadowColor: shadowColorIos,
        shadowOffset: {width: xOffset, height: yOffset},
        shadowOpacity,
        shadowRadius,
      };
    } else if (Platform.OS === 'android') {
      styles.boxShadow = {
        elevation,
        shadowColor: shadowColorAndroid,
      };
    }
  };

  generateBoxShadowStyle(-2, 4, '#171717', 0.2, 3, 4, '#171717');

  if (isLoading) {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <ActivityIndicator size="large" color="blue" />
      </View>
    )
  }

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
    
      <View style={styles.screen}>

        <View style={styles.divContainer}>
          <AppText style={{fontWeight: "700", textAlign: "center", marginTop: verticalScale(20)}}>
              Business Account
            </AppText>
            <AppText style={{textAlign: "center", fontSize: moderateScale(11.8), fontWeight: '300'}}>
              {sortCode} | {accountnumber} 
            </AppText>
          <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>

          <FadeInView>
            <View style={styles.carbonyteCard}>
              <AppText style={[styles.totalWalletBalanceText11, {fontWeight: Platform.OS === "android" ? "normal" : "800",position: "absolute", top: verticalScale(15), left:horizontalScale(15) , fontSize: moderateScale(12), textTransform: "uppercase", width: horizontalScale(50)}]}>
                  <AppText style={{color: "white",fontWeight: Platform.OS === "android" ? "normal" : "300"}}>your</AppText> money <AppText style={{color: "white",fontWeight: Platform.OS === "android" ? "normal" : "300"}}>your</AppText> planet <AppText style={{color: "white",fontWeight: Platform.OS === "android" ? "normal" : "300"}}>your</AppText> choice
              </AppText>
              <Image 
                resizeMode="contain"
                  style={{position: "absolute", right: horizontalScale(20),height: verticalScale(30), width: horizontalScale(20),  top: verticalScale(20), transform: [{
                    rotate: "0deg"
                  }]}}
                  source={require("../assets/icon-contactless-reverse.png")}
                />

                <Image 
                  resizeMode="contain"
                  style={{ position: "absolute", right: horizontalScale(50), height: verticalScale(20), width: horizontalScale(30), top: verticalScale(25), transform: [{
                    rotate: "0deg"
                  }]}}
                  source={require("../assets/group-31764.png")}
                />

              <AppText style={[styles.totalWalletBalanceText11, {top:verticalScale(20), fontSize: moderateScale(16) ,fontWeight:'400'}]}>
                  {cardnumber}
              </AppText>
              <AppText style={[styles.totalWalletBalanceText11, {top: verticalScale(22.5) , fontSize: moderateScale(10), wordSpacing: 20}]}>
                {accountname}
              </AppText>

              <AppText style={[styles.totalWalletBalanceText11, {fontWeight: Platform.OS === "android" ? "normal" : "700",fontFamily: "Typo",position: "absolute", bottom: verticalScale(20), left:horizontalScale(15) , fontSize: moderateScale(16), textTransform: "lowercase"}]}>
                  Carbonyte
              </AppText>
              <Image 
                resizeMode="contain"
                style={{position: "absolute", bottom:verticalScale(10), right: horizontalScale(20),height: verticalScale(45), width: horizontalScale(45), }}
                  source={require("../assets/group-31766.png")}
              />

            </View>
          </FadeInView>

          {/* <FadeInView>
            <View style={styles.totalWalletBalanceContainer11}>
            <AppText style={[styles.totalWalletBalanceText11, {fontWeight: Platform.OS === "android" ? "normal" : "700",fontFamily: "Typo",position: "absolute", top: verticalScale(10), right:horizontalScale(15) , fontSize: moderateScale(20), textTransform: "lowercase"}]}>
                Carbonyte
            </AppText>
              
              <Image 
              resizeMode="contain"
                style={{position: "absolute", left: horizontalScale(70),height: verticalScale(30), width: horizontalScale(20),  top: verticalScale(55), transform: [{
                  rotate: "180deg"
                }]}}
                source={require("../assets/group-31767.png")}
              />

              <Image 
                resizeMode="contain"
                style={{ position: "absolute", left: horizontalScale(30), height: verticalScale(20), width: horizontalScale(30), top: verticalScale(60), transform: [{
                  rotate: "90deg"
                }]}}
                source={require("../assets/group-31764.png")}
              />

              <AppText style={[styles.totalWalletBalanceText11, {top:verticalScale(20), fontSize: moderateScale(18) ,fontWeight:'400'}]}>
                {cardnumber}
              </AppText>
                
              <Image 
              resizeMode="contain"
              style={{position: "absolute", bottom:verticalScale(10), right: horizontalScale(20),height: verticalScale(45), width: horizontalScale(45), }}
                source={require("../assets/group-31766.png")}
              />
              
              <AppText style={[styles.totalWalletBalanceText11, {position: "absolute",bottom: verticalScale(10), left:horizontalScale(20) , fontSize: moderateScale(11), wordSpacing: 20}]}>
              {accountname}
              </AppText>
              
            </View>
          </FadeInView> */}

          </View>

          <View style={{flex: 1, flexDirection: "row", alignItems: "center", justifyContent: "space-evenly"}}>
              <TouchableOpacity
              onPress={()=> setHideBalance(prev => !prev)}
               style={[{ alignItems: "center", justifyContent: "center", backgroundColor: "white", width: horizontalScale(40), height: verticalScale(40), borderRadius: moderateScale(20), padding: 10}, ]}>
                <Image 
                  resizeMode="contain" 
                  source={require("../assets/icon-view.png")}
                  style={{height: verticalScale(25), width: horizontalScale(25)}}
                />
              </TouchableOpacity>
             
        
          </View>


          
          {status &&<AppText style={{textAlign: "center", fontSize: moderateScale(11.8), fontWeight: '300', marginTop: verticalScale(5),marginBottom: verticalScale(5), color:"red"}}>
              Card in post
            </AppText>
          }

          <View style={[styles.totalWalletBalanceContainer, styles.boxShadow, {fontFamily: "Helvetica"}]}>
            <AppText style={[styles.totalWalletBalanceText, {fontFamily: "Helvetica"}]}>
              Total Wallet Balance
            </AppText>
            {settings.hideBalance || hideBalance ? (
              <View
                style={{
                  width: GlobalStyles.DivContainer.width,
                  marginLeft: GlobalStyles.DivContainer.marginLeft,
                  height: "auto",
                }}
              >
                <View
                  style={{
                    width: "100%",
                    height: horizontalScale(30),
                    shadowOpacity: 1,
                    shadowColor: "blue",
                    shadowOffset: { width: 0, height: 0 },
                    shadowRadius: moderateScale(5),
                    elevation: 5,
                    borderRadius: moderateScale(10),
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    marginBottom: verticalScale(10) 
                  }}
                />
              </View>
            ) : (
              <AppText style={[styles.BalanceText, styles.blueTitle]}>
                <AppText style={{color: "grey", fontSize: moderateScale(26)}}>£</AppText>{balance}</AppText>
            )}
            <AppText style={styles.dateText}>{todaydate}</AppText>
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity
              onPress={() => navigation.navigate("AddFunds")}
              style={[styles.inputBox, styles.boxShadow]}
            >
              
              <View style={styles.inputBoxDiv}>
                <Image
                  style={styles.inputIcon}
                  resizeMode="contain"
                  source={require("../assets/add.png")}
                />
                <AppText style={styles.inputBoxText}>Add Funds</AppText>
              </View>
            </TouchableOpacity>
           

            <TouchableOpacity
              onPress={() => navigation.navigate("SendMoney")}
              style={[styles.inputBox, styles.boxShadow]}
            >
              <View style={styles.inputBoxDiv}>
                <Image
                  style={styles.inputIcon}
                  resizeMode="contain"
                  source={require("../assets/send-1.png")}
                />
                <AppText style={styles.inputBoxText}>Send Money</AppText>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.navigate("MyCards")}
              style={[styles.inputBox, styles.boxShadow]}
            >
              <View style={styles.inputBoxDiv}>
                <Image
                  style={styles.inputIcon}
                  resizeMode="contain"
                  source={require("../assets/icon-outlinecreditcard.png")}
                />
                <AppText style={styles.inputBoxText}>My Cards</AppText>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.navigate("SwitchAccounts")}
              style={[styles.inputBox, styles.boxShadow]}
            >
              <View style={styles.inputBoxDiv}>
                <Image
                  style={styles.inputIcon}
                  resizeMode="contain"
                  source={require("../assets/transfer-1.png")}
                />
                <AppText style={styles.inputBoxText}>SwitchAccount</AppText>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.carbonSpendingTitleDiv}>
        <Image 
          resizeMode="contain"
          source={require("../assets/group-31984.png")} 
          style={{ width: horizontalScale(25), height: verticalScale(25)}}
        />
          <AppText style={[styles.titleText, { fontWeight: Platform.OS === "android" ? "normal" : "700",fontFamily: "Typo"}] }>Carbon Spending</AppText>
        </View>

        {/**
         * @dev Carbon spending section
         */}
        <View style={[styles.carbonSpendingDiv, styles.boxShadow]}>
          {/**
           * @notice the actual carbon holder
           */}
          <View style={styles.carbonItemDiv}>
            <View style={[styles.estimatedCarbonDiv, styles.boxShadow]}>
              <View style={{ flex: 3.5 }}>
                <AppText style={styles.blueTitle}>{carbonAmount}</AppText>
              </View>
              <View style={{ flex: 2.5 }}>
                <AppText>Estimated</AppText>
                <AppText style={{ fontWeight: "700", paddingRight: "5%" }}>
                  Tonnes of CO2
                </AppText>
              </View>
              <View style={{ flex: 5, justifyContent: "flex-end" }}>
                <Image
                  style={styles.imageco2}
                  source={require("../assets/greenc02.png")}
                />
              </View>
            </View>
            <View style={[styles.carbonSpendingAnalysysDiv, styles.rounded]}>
              <AppText style={styles.subtitleText}>{catNames[0]}</AppText>
              <View
                style={[
                  styles.carbonSpendingAnalysysBarBackground,
                  styles.rounded,
                ]}
              >
                <View
                  style={[
                    styles.carbonSpendingAnalysysBarProgress,
                    styles.rounded,
                  ]}
                  width={dataPercentages[0]}
                  backgroundColor="#E4732D"
                >
                  <AppText style={styles.barText}>{dataPercentages[0]}</AppText>
                </View>
              </View>

              <AppText style={styles.subtitleText}>{catNames[1]}</AppText>
              <View
                style={[
                  styles.carbonSpendingAnalysysBarBackground,
                  styles.rounded,
                ]}
              >
                <View
                  style={[
                    styles.carbonSpendingAnalysysBarProgress,
                    styles.rounded,
                  ]}
                  width={dataPercentages[1]}
                  backgroundColor="#F3B53F"
                >
                  <AppText style={styles.barText}>{dataPercentages[1]}</AppText>
                </View>
              </View>

              <AppText style={styles.subtitleText}>{catNames[2]}</AppText>
              <View
                style={[
                  styles.carbonSpendingAnalysysBarBackground,
                  styles.rounded,
                ]}
              >
                <View
                  style={[
                    styles.carbonSpendingAnalysysBarProgress,
                    styles.rounded,
                  ]}
                  width={dataPercentages[2]}
                  backgroundColor="#DC85F5"
                >
                  <AppText style={styles.barText}>{dataPercentages[2]}</AppText>
                </View>
              </View>

              <AppText style={styles.subtitleText}>{catNames[3]}</AppText>
              <View
                style={[
                  styles.carbonSpendingAnalysysBarBackground,
                  styles.rounded,
                ]}
              >
                <View
                  style={[
                    styles.carbonSpendingAnalysysBarProgress,
                    styles.rounded,
                  ]}
                  width={dataPercentages[3]}
                  backgroundColor="#5888F5"
                >
                  <AppText style={styles.barText}>{dataPercentages[3]}</AppText>
                </View>
              </View>

              <AppText style={styles.subtitleText}>{catNames[4]}</AppText>
              <View
                style={[
                  styles.carbonSpendingAnalysysBarBackground,
                  styles.rounded,
                ]}
              >
                <View
                  style={[
                    styles.carbonSpendingAnalysysBarProgress,
                    styles.rounded,
                  ]}
                  width={dataPercentages[4]}
                  backgroundColor="#5AC661"
                >
                  <AppText style={styles.barText}>{dataPercentages[4]}</AppText>
                </View>
              </View>
            </View>
          </View>

          <View style={[styles.carbonSpendingTitleDiv, {marginTop: verticalScale(25)}]}>
          <Image 
          resizeMode="contain"
          source={require("../assets/group-31984.png")} 
          style={{ width: horizontalScale(25), height: verticalScale(25)}}
        />
            <AppText style={[styles.titleText, {fontWeight: Platform.OS === "android" ? "normal" : "700",fontFamily: "Typo"}]}>Carbon Assets </AppText>
          </View>
          <View style={[styles.carbonAssetsDiv]}>
            <View style={styles.carbonAssetsDivLeft}>
              <AppText style={styles.largeNumber}>{TokenAmount}</AppText>
              <View>
                <AppText>Trees</AppText>
                <AppText style={{ fontWeight: "700" }}>Planted</AppText>
              </View>
            </View>

            <View
              style={{
                height: "60%",
                backgroundColor: "black",
                alignSelf: "center",
                justifyContent: "center",
                alignItems: "center",
                textAlignVertical: "center",
                alignContent: "center",
                flex: 0.1,
              }}
            ></View>

            <View style={styles.carbonAssetsDivRight}>
              <AppText style={styles.largeNumber}>{animalsSaved}</AppText>
              <View style={{ fontWeight: "700" }}>
                <AppText>Animals </AppText>
                <AppText style={{ fontWeight: "700" }}>Saved</AppText>
              </View>
            </View>
          </View>
          <View style={styles.subTextRow}>
            <AppText style={styles.subTextAssets}>Assets</AppText>
            <AppText style={styles.subTextDescriptor}>
              (1 Tonne = 1 CO2 Token)
            </AppText>
            <AppText style={styles.subTextToken}>Token</AppText>
          </View>
          <View style={{ marginTop: "2.5%" }} />
          <TouchableOpacity
            style={{
              width: GlobalStyles.DivContainer.width,
              marginLeft: GlobalStyles.DivContainer.marginLeft,
              height: verticalScale(80),
              marginTop: "2.5%",
              backgroundColor: "white",
              borderRadius: 15,
            }}
            onPress={() => navigation.navigate("VirtualEcoSystem")}
          >
            <View style={{ height: "100%", flexDirection: "row" }}>
              <View
                style={{
                  width: horizontalScale (50),
                  height: verticalScale(50),
                  borderRadius: moderateScale(25),
                  backgroundColor: "#F6F5F8",
                  borderColor: "black",
                  alignSelf: "center",
                  marginLeft: "2.5%",
                }}
              >
                <View style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                }}>
                <AppText
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    fontWeight: "700",
                  }}
                >
                  {projects[0]?.name?.charAt(0)}
                </AppText>
              </View>
              </View>
              <View
                style={{
                  flex: 5.5,
                  alignSelf: "center",
                  justifyContent: "space-evenly",
                  marginLeft: "5%",
                }}
              >
                <AppText style={{ fontSize: 14, fontWeight: "700", textTransform: "capitalize" }}>
                <AppText style={{fontWeight: "400"}}>{projects[0]?.name}</AppText> £{projects[0]?.displayAssetPrice} / {projects[0]?.type}
                </AppText>
                <AppText style={{opacity: 0.4}}>{moment(projects[0]?.lastUpdated).format("MMMM D, YYYY")}</AppText>
              </View>
              <View
                style={{
                  flex: 3,
                  justifyContent: "space-evenly",
                  alignItems: "flex-end",
                  marginRight: "2.5%",
                }}
              >
                <AppText style={{ marginRight: "2.5%", fontWeight: "500", fontSize: 18 }}>
                  1
                </AppText>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              width: GlobalStyles.DivContainer.width,
              marginLeft: GlobalStyles.DivContainer.marginLeft,
              height: verticalScale(80),
              marginTop: "2.5%",
              backgroundColor: "white",
              borderRadius: 15,
            }}
            onPress={() => navigation.navigate("VirtualEcoSystem")}
          >
            <View style={{ height: "100%", flexDirection: "row" }}>
              <View
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 25,
                  backgroundColor: "#F6F5F8",
                  borderColor: "black",
                  alignSelf: "center",
                  marginLeft: "2.5%",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <AppText
                  style={{
                    alignSelf: "center",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlignVertical: "center",
                  
                    fontWeight: "700",
                  }}
                >
                  {projects[1]?.name?.charAt(0)}
                </AppText>
              </View>
              <View
                style={{
                  flex: 5.5,
                  alignSelf: "center",
                  justifyContent: "space-evenly",
                  marginLeft: "5%",
                }}
              >
                <AppText style={{ fontSize: 14, fontWeight: "700", textTransform: "capitalize" }}>
                  <AppText style={{fontWeight: "400"}}>{projects[1]?.name} </AppText>£{projects[1]?.displayAssetPrice} / {projects[1]?.type}
                </AppText>
                <AppText style={{opacity: 0.4}}>{moment(projects[1]?.lastUpdated).format("MMMM D, YYYY")}</AppText>
              </View>
              <View
                style={{
                  flex: 3,
                  justifyContent: "space-evenly",
                  alignItems: "flex-end",
                  marginRight: "2.5%",
                }}
              >
                <AppText style={{ marginRight: "2.5%", fontWeight: "500", fontSize: 18 }}>
                  1
                </AppText>
              </View>
            </View>
          </TouchableOpacity>
        </View>

        {/**
         * @dev Transactions section
         */}

        <View style={[styles.carbonSpendingTitleDiv, styles.boxShadow]}>
        <Image 
          resizeMode="contain"
          source={require("../assets/icon-withdraw.png")} 
          style={{ width: horizontalScale(25), height: verticalScale(25)}}
        />
          <AppText style={[styles.titleText, {fontWeight: Platform.OS === "android" ? "normal" : "700",fontFamily: "Typo"}]}>Recent Transactions</AppText>
        </View>
        <View style={styles.transactionsContainer}>{transactionTable}</View>
        
        {nftimg && <View style={[styles.NFTContainer, styles.boxShadow]}>
          <AppText style={[styles.titleText, {fontWeight: Platform.OS === "android" ? "normal" : "700", fontFamily: "Typo"}]}>NFT Assets</AppText>
          <ScrollView style={{width: "100%", marginTop: "5%"}}>

          <Image style={styles.NFTinputIcon} source={{uri:nftimg}} />

          <AppText style={styles.NFTNameText}>
            <AppText style={{fontWeight:'bold'}}>{name}</AppText> 
          </AppText>
          <AppText style={styles.NFTPriceText}>
          <AppText style={{fontWeight:'bold'}}>{price}</AppText> 
        </AppText>
    
          </ScrollView>
        </View>}

        <View style={[styles.carbonContainer, styles.rounded , styles.boxShadow]}>
          <View style={styles.treeContainer}>
            <Image
              style={styles.treeImage}
              resizeMode="contain"
              source={require("../assets/image-tree.png")}
            />
            <View style={{position: "absolute",height: 350, width: 350, top:130, left:5}}>
            <Image 
              resizeMode="contain"
              source={require("../assets/group-32017.png")}
              style={{ height: 375, width: 380,}}
            /></View>
          </View>
          <View style={{flex: 1}} >
            <AppText
              style={{ textAlign: "center", fontWeight: "700", fontSize: moderateScale(24) }}
            >
              Congratulations!
            </AppText>
            <View style={{marginTop: verticalScale(6),  flex:1, alignItems: "center"}}>
            <AppText style={{ textAlign: "center", width: horizontalScale(250) }}>
              You have planted {TotalAmount} trees with advance card purchase
            </AppText>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate("VirtualEcoSystem")}>
              <AppText
                style={{
                  marginTop: verticalScale(0),
                  textAlign: "center",
                  fontSize: 22,
                  fontWeight: "700",
                  color: "blue",
                  marginBottom: "10%",
                }}
              >
                View more
              </AppText>
            </TouchableOpacity>
          </View>
          <View style={{ marginTop: "5%" }}></View>
        </View>
        <View style={{ marginTop: "5%" }} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  boxShadow:{},
  divContainer: {
  },
  congratulationsText: {
    textAlign: "center",
    width: "100%",
    backgroundColor: "black",
    height: "10%",
  },
  titleText: {
    top: verticalScale(2),
    left: horizontalScale(10),
    fontSize: moderateScale(18),
    fontWeight: "700",
  },
  subtitleText: {
    marginLeft: "5%",
    marginTop: "2.5%",
    fontSize: moderateScale(15),
    fontWeight: "500",
    opacity: 0.5
  },
  barText: {
    left: horizontalScale(20),
    top: "25%",
    fontSize: moderateScale(15),
    fontWeight: "bold",
  },
  blueTitle: {
    color: "blue",
    fontSize: 30,
    fontWeight: "bold",
  },
  blueTitle11: {
    fontSize: moderateScale(11.5),
  },
  referContainer: {
    width: GlobalStyles.DivContainer.width,
    marginLeft: GlobalStyles.DivContainer.marginLeft,
    height: verticalScale(200),
    backgroundColor: "white",
    marginTop: "2.5%",
  },
  treeContainer: {
    height: "60%",
  },
  treeImage: {
    height: "100%",
    width: "100%",
  },
  carbonContainer: {
    width: GlobalStyles.DivContainer.width,
    marginLeft: GlobalStyles.DivContainer.marginLeft,
    height: verticalScale(450),
    backgroundColor: "white",
    marginTop: "2.5%",
  },
  carbonAssetsDiv: {
    marginTop: "5%",
    width: GlobalStyles.DivContainer.width,
    marginLeft: GlobalStyles.DivContainer.marginLeft,
    height: verticalScale(75),
    backgroundColor: "#D8EBF9",
    borderRadius: moderateScale(15),

    flexDirection: "row",
    justifyContent: "space-around",
  },
  tokenBox: {
    width: "50%",
    height: "40%",
    left: "25%",
  },
  carbonSpendingAnalysysBarBackground: {
    width: "100%",
    height: verticalScale(35),
    marginTop: "2.5%",
    backgroundColor: "#f6f5f8",
  },

  carbonSpendingAnalysysBarProgress: {
    height: "100%",
    maxWidth: "100%",
    backgroundColor: "orange",
  },

  rounded: {
    borderRadius: moderateScale(15),
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 1,
    shadowRadius: 1,

    elevation: 1,
  },
  carbonSpendingAnalysysDiv: {
    backgroundColor: "white",
    width: "95%",
    marginLeft: "2.5%",
    height: "auto",
  },
  estimatedCarbonDiv: {
    backgroundColor: "white",
    borderRadius: moderateScale(15),
    width: "100%",
    height: verticalScale(65),
    paddingLeft: "5%",
    paddingTop: "2.5%",
    flexDirection: "row",
    alignSelf: "center",
    justifyContent: "space-evenly",
    alignItems: "center",
    textAlignVertical: "center",
    alignContent: "center",
    marginBottom: "5%",
  },
  transactionText: {
    left: "30%",
    bottom: "70%",
  },
  transactionBox: {
    width: "100%",
    height: verticalScale(80),
    marginTop: "2.5%",
    top: verticalScale(-30),
    backgroundColor: "white",
  },
  transactionPicture: {
    width: "20%",
    width: GlobalStyles.DivContainer.width,
    marginLeft: GlobalStyles.DivContainer.marginLeft,
    borderRadius: moderateScale(15),
    top: "10%",
  },
  transactionsContainer: {
    height: "auto",
    width: GlobalStyles.DivContainer.width,
    marginLeft: GlobalStyles.DivContainer.marginLeft,
    marginTop: "12.5%",
    borderRadius: moderateScale(15),
  },

  carbonItemDiv: {
    width: GlobalStyles.DivContainer.width,
    marginLeft: GlobalStyles.DivContainer.marginLeft,
    height: "auto",
    paddingBottom: "4.5%",
    marginTop: "2.5%",
    borderRadius: moderateScale(15),
    backgroundColor: "white",
  },
  screen: {
    flex: GlobalStyles.DivContainer.flex,
   
  },

  NavBarTop: {
    marginTop: GlobalStyles.Title.marginTop,
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-around",
  },

  navBarTopText: {
    fontSize: GlobalStyles.NavBar.fontSize,
    fontWeight: GlobalStyles.NavBar.fontWeight,
    Color: GlobalStyles.NavBar.fontColor,
  },

  lineSeparatorDiv: {
    marginTop: "1.5%",
    flexDirection: "row",
    width: "95%",
    justifyContent: "space-around",
    marginLeft: "2.5%",
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
    width: "50%",
  },

  blueOverwrite: {
    color: "blue",
    fontWeight: "700",
  },

  NavBarBottom: {
    marginTop: "4%",
    flexDirection: "row",
    width: "85%",
    justifyContent: "space-around",
    marginLeft: "7.5%",
  },

  NavBarBottomText: {
    fontSize: GlobalStyles.NavBarBottomText.fontSize,
    fontWeight: GlobalStyles.NavBarBottomText.fontWeight,
    Color: GlobalStyles.NavBarBottomText.fontColor,
  },

  DivContainer: {
    width: GlobalStyles.DivContainer.width,
    height: "100%",
    backgroundColor: "white",
  },

  congratulationsContainer: {
    marginTop: "4.5%",
    width: GlobalStyles.DivContainer.width,
    marginLeft: GlobalStyles.DivContainer.marginLeft,
    backgroundColor: "#E4E4FF",
    height: verticalScale(125),
    borderRadius: moderateScale(15),
    flexDirection: "row",
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
    justifyContent: "center",
  },

  progressIcon: {
    height: "100%",
    width: horizontalScale(75),
    justifyContent: "center",
  },

  congratulationsText: {
    fontSize: moderateScale(14),
    fontWeight: "700",
  },

  congratulationsSubText: {
    marginTop: "2.5%",
    fontSize: moderateScale(12),
    fontWeight: "400",
  },

  applyNowText: {
    marginTop: "2.5%",
    fontSize: moderateScale(12),
    fontWeight: "400",
    color: "blue",
  },

  totalWalletBalanceContainer: {
    marginTop: "2.5%",
    width: GlobalStyles.DivContainer.width,
    marginLeft: GlobalStyles.DivContainer.marginLeft,
    backgroundColor: "#FFFFFF",
    borderRadius: moderateScale(15),
    flexDirection: "column",
    paddingHorizontal: "2.5%",
    paddingVertical:"5.5%",
    justifyContent: "center",
  },
  totalWalletBalanceContainer11: {
    marginTop: "3.5%",
    width: GlobalStyles.DivContainer.width,
    
    backgroundColor: "blue",
    height: verticalScale(170),
    width: horizontalScale(290),
    borderRadius: moderateScale(15),
    justifyContent: "center",
    padding: "5%",
   alignItems: "center",
    marginVertical: verticalScale(20), 
    
  },
  carbonyteCard: {
    marginTop: "3.5%",
   
    backgroundColor: "black",
    height: verticalScale(250),
    width: horizontalScale(160),
    borderRadius: moderateScale(15),
    justifyContent: "center",
    padding: "5%",
    
    marginVertical: verticalScale(20), 
    
  },


  totalWalletBalanceText: {
    textAlign: "center",
    fontSize: moderateScale(14),
    marginBottom:verticalScale(8),
    fontWeight: "500"
  },
  totalWalletBalanceText11: {
    textAlign: "left",
    fontSize: moderateScale(14),
    color: "white",
    textTransform: "uppercase",
    fontWeight: "700"
  },
  BalanceText: {
    fontSize: moderateScale(26),
    textAlign: "center",
    lineHeight: 30,
  },
  BalanceText11: {
    fontSize: moderateScale(26),
    textAlign: "left",
    lineHeight: 30,
  },

  dateText: {
    textAlign: "center",
    fontSize: moderateScale(14),
    fontWeight: "500"
  },
  dateText11: {
    textAlign: "left",
    fontSize: moderateScale(14),
  },
  dateText12: {
    textAlign: "left",
    fontSize: moderateScale(14),
    marginTop:5,
  },
  dateText13: {
    textAlign: "left",
    fontSize: moderateScale(14),
    marginTop:verticalScale(5),
  },
  dateText14: {
    textAlign: "left",
    fontSize: moderateScale(14),
    marginTop:verticalScale(5),
  },
  buttonContainer: {
    marginTop: "2.5%",
    width: GlobalStyles.DivContainer.width,
    marginLeft: GlobalStyles.DivContainer.marginLeft,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },

  inputBox: {
    backgroundColor: "white",
    width: "23.5%",
    flexDirection: "row",
    borderRadius: moderateScale(10),
    paddingBottom: verticalScale(18),
    paddingTop: verticalScale(25),
    

  },

  inputBoxDiv: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    
  },

  inputIcon: {
    resizeMode: "contain",
    height: verticalScale(20),
    marginBottom: "2.5%",
  },

  inputBoxText: {
    marginTop: "5.5%",
    fontSize: moderateScale(10),
    textAlign: "center",
    fontWeight: "500"
  },

  carbonSpendingDiv: {},

  carbonIcon: {
    height: verticalScale(25),
    width: horizontalScale(25),
    resizeMode: "contain",
  },

  carbonSpendingTitleDiv: {
    width: GlobalStyles.DivContainer.width,
    marginLeft: GlobalStyles.DivContainer.marginLeft,
    height: verticalScale(30),
    display: "flex",
    flexDirection: "row",
    marginTop: "5%",
  },

  carbonSpendingText: {
    top: verticalScale(2),
    left: horizontalScale(10),
    fontSize: moderateScale(18),
    fontWeight: "700",
  },

  carbonAssetsDivLeft: {
    display: "flex",
    flex: 4.9,
    flexDirection: "row",
    alignSelf: "center",
    justifyContent: "space-evenly",
    alignItems: "center",
    textAlignVertical: "center",
    alignContent: "center",
  },

  carbonAssetsDivRight: {
    display: "flex",
    flex: 4.9,
    flexDirection: "row",
    alignSelf: "center",
    justifyContent: "space-evenly",
    alignItems: "center",
    textAlignVertical: "center",
    alignContent: "center",
  },

  largeNumber: {
    fontSize: 50,
  },

  subTextRow: {
    Width: "100%",
    marginLeft: "10%",
    marginRight: "10%",
    marginTop: verticalScale(25),
    flexDirection: "row",
    alignItems: "center",
  },

  subTextAssets: {
    flex: 1.5,
    fontWeight: "700",
    fontSize: verticalScale(12),
  },

  subTextDescriptor: {
    marginLeft: "1%",
    flex: 4.5,
    fontSize: verticalScale(10),
  },

  subTextToken: {
    flex: 4,
    fontWeight: "700",
    fontSize: verticalScale(12),
    textAlign: "right",
  },

  imageco2: {
    height: "90%",
    resizeMode: "contain",
  },

  transactionDiv: {
    height: verticalScale(100),
    flexDirection: "row",
    alignSelf: "center",
    justifyContent: "space-evenly",
    alignItems: "center",
    textAlignVertical: "center",
    alignContent: "center",
  },
  NFTContainer: {
    width: "90%",
    marginLeft: "5%",
    marginRight: horizontalScale(10),
    backgroundColor: "#FFFFFF",
    height: "auto",
    borderRadius: moderateScale(15),
    flexDirection: "column",
    padding: 20,
    justifyContent: "center",
  },
  NFTContainer11: {
    width: horizontalScale(200),
  },
  NFTNameText: {
    textAlign: "center",
    fontSize: moderateScale(14),
  },
  NFTDescriptionText: {
    fontSize: 14,
    textAlign: "center",
    lineHeight: 30,
  },
  NFTPriceText: {
    textAlign: "center",
    fontSize: moderateScale(14),
  },
  NFTinputIcon: {
    resizeMode: "contain",
    width: "100%",
    height: verticalScale(250),
    borderRadius: moderateScale(15)
  },
});

export default HomeScreenPersonal;
