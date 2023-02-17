import React, { useEffect, useState, useContext, useCallback } from "react";
import {
  RefreshControl,
  Text,
  StyleSheet,
  Image,
  View,
  TouchableOpacity,
  ScrollView,
  
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

import moment from "moment";

const HomeScreenPersonal = ({ navigation }) => {
 
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

  const todaydate = moment().format("ll");

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
    const userData = await apiCall.GetCustomerDetails(authContext.accountID);
    const cardData = await apiCall.GetCardDetails("686283112");
    const resposeData = await apiCall.GetUserImpact("CC11875");

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
      pageShow.push(
        <TouchableOpacity
          style={[styles.transactionBox, styles.rounded]}
          key={i}
          onPress={() => navigation.navigate("Transactions")}
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
              <Text
                style={{
                  alignSelf: "center",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlignVertical: "center",
                  fontWeight: "700",
                
                }}
              >
                {dataHold.description.replace("Payment to ", "")[0]}
              </Text>
            </View>
            <View
              style={{
                flex: 3.5,
                alignSelf: "center",
                justifyContent: "space-evenly",
                marginLeft: "5%",
              }}
            >
              <Text style={{ fontSize: 14, fontWeight: "700" }}>
                {dataHold.description.replace("Payment to ", "")}
              </Text>
              <Text style={{}}>
                {moment(dataHold.transactionDate).format("MMM Do YY")}
              </Text>
            </View>
            <View
              style={{
                flex: 5,
                justifyContent: "space-evenly",
                alignItems: "flex-end",
                marginRight: "2.5%",
              }}
            >
              <Text style={{ marginRight: "2.5%", fontWeight: "700" }}>
                £{dataHold.amount.toFixed(2)}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      );
    }

    setTransactionTable(pageShow);
  };

  let currency = "£";
  const catNames = ["Health", "Food", "House", "Sping", "Transport"];
  const dataPercentages = ["700%", "50%", "40%", "30%", "20%"];

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
  return (
    <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
    
      <View style={styles.screen}>

        <View style={styles.divContainer}>
          <Text style={{fontWeight: "700", textAlign: "center"}}>
              Business Account
            </Text>
            <Text style={{textAlign: "center", fontSize: 11.8, fontWeight: '300'}}>
              {sortCode} | {accountnumber} 
            </Text>
          <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
          <View style={styles.totalWalletBalanceContainer11}>
          <Text style={[styles.totalWalletBalanceText11, {position: "absolute", top: verticalScale(10), right:horizontalScale(15) , fontSize: 20}]}>
              Carbonyte
            </Text>
            
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

            <Text style={[styles.totalWalletBalanceText11, {top:verticalScale(20), fontSize:18 ,fontWeight:'400'}]}>
              {cardnumber}
            </Text>
              
            <Image 
            resizeMode="contain"
            style={{position: "absolute", bottom:verticalScale(10), right: horizontalScale(20),height: 45, width: horizontalScale(45), }}
              source={require("../assets/group-31766.png")}
            />
            
            <Text style={[styles.totalWalletBalanceText11, { position: "absolute",bottom: verticalScale(10), left:horizontalScale(20) , fontSize: 11, wordSpacing: 20}]}>
             {accountname}
            </Text>
            
          </View>
          </View>

          <View style={{flex: 1, flexDirection: "row", alignItems: "center", justifyContent: "space-evenly"}}>
              <TouchableOpacity
              onPress={()=> setHideBalance(prev => !prev)}
               style={{ alignItems: "center", justifyContent: "center", backgroundColor: "white", width: 40, height: 40, borderRadius: 15, padding:10}}>
                <Image 
                  resizeMode="contain" 
                  source={require("../assets/icon-view.png")}
                  style={{height: 25, width: 25}}
                />
              </TouchableOpacity>
             
        
          </View>


          
          {status &&<Text style={{textAlign: "center", fontSize: 11.8, fontWeight: '300', marginTop: 15,marginBottom: 15, color:"red"}}>
              Card in post
            </Text>
          }

          <View style={styles.totalWalletBalanceContainer}>
            <Text style={styles.totalWalletBalanceText}>
              Total Wallet Balance
            </Text>
            {settings.hideBalnce || hideBalance ? (
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
                    height: 30,
                    shadowOpacity: 1,
                    shadowColor: "blue",
                    shadowOffset: { width: 0, height: 0 },
                    shadowRadius: 5,
                    elevation: 5,
                    borderRadius: 10,
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    marginBottom: 10 
                  }}
                />
              </View>
            ) : (
              <Text style={[styles.BalanceText, styles.blueTitle]}>
                <Text style={{color: "grey"}}>£</Text>{balance}</Text>
            )}
            <Text style={styles.dateText}>{todaydate}</Text>
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity
              onPress={() => navigation.navigate("AddFunds")}
              style={styles.inputBox}
            >
              
              <View style={styles.inputBoxDiv}>
                <Image
                  style={styles.inputIcon}
                  resizeMode="contain"
                  source={require("../assets/add.png")}
                />
                <Text style={styles.inputBoxText}>Add Funds</Text>
              </View>
            </TouchableOpacity>
           

            <TouchableOpacity
              onPress={() => navigation.navigate("SendMoney")}
              style={styles.inputBox}
            >
              <View style={styles.inputBoxDiv}>
                <Image
                  style={styles.inputIcon}
                  resizeMode="contain"
                  source={require("../assets/send-1.png")}
                />
                <Text style={styles.inputBoxText}>Send Money</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.navigate("MyCards")}
              style={styles.inputBox}
            >
              <View style={styles.inputBoxDiv}>
                <Image
                  style={styles.inputIcon}
                  resizeMode="contain"
                  source={require("../assets/icon-outlinecreditcard.png")}
                />
                <Text style={styles.inputBoxText}>My Cards</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.navigate("SwitchAccounts")}
              style={styles.inputBox}
            >
              <View style={styles.inputBoxDiv}>
                <Image
                  style={styles.inputIcon}
                  resizeMode="contain"
                  source={require("../assets/transfer-1.png")}
                />
                <Text style={styles.inputBoxText}>SwitchAccount</Text>
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
          <Text style={styles.titleText}>Carbon Spending</Text>
        </View>

        {/**
         * @dev Carbon spending section
         */}
        <View style={styles.carbonSpendingDiv}>
          {/**
           * @notice the actual carbon holder
           */}
          <View style={styles.carbonItemDiv}>
            <View style={[styles.estimatedCarbonDiv]}>
              <View style={{ flex: 3.5 }}>
                <Text style={styles.blueTitle}>{carbonAmount}</Text>
              </View>
              <View style={{ flex: 2.5 }}>
                <Text>Estimated</Text>
                <Text style={{ fontWeight: "700", paddingRight: "5%" }}>
                  Tonnes of CO2
                </Text>
              </View>
              <View style={{ flex: 5, justifyContent: "flex-end" }}>
                <Image
                  style={styles.imageco2}
                  source={require("../assets/greenc02.png")}
                />
              </View>
            </View>
            <View style={[styles.carbonSpendingAnalysysDiv, styles.rounded]}>
              <Text style={styles.subtitleText}>{catNames[0]}</Text>
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
                  <Text style={styles.barText}>{dataPercentages[0]}</Text>
                </View>
              </View>

              <Text style={styles.subtitleText}>{catNames[1]}</Text>
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
                  <Text style={styles.barText}>{dataPercentages[1]}</Text>
                </View>
              </View>

              <Text style={styles.subtitleText}>{catNames[2]}</Text>
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
                  <Text style={styles.barText}>{dataPercentages[2]}</Text>
                </View>
              </View>

              <Text style={styles.subtitleText}>{catNames[3]}</Text>
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
                  <Text style={styles.barText}>{dataPercentages[3]}</Text>
                </View>
              </View>

              <Text style={styles.subtitleText}>{catNames[4]}</Text>
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
                  <Text style={styles.barText}>{dataPercentages[4]}</Text>
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
            <Text style={styles.titleText}>Carbon Assets </Text>
          </View>
          <View style={[styles.carbonAssetsDiv]}>
            <View style={styles.carbonAssetsDivLeft}>
              <Text style={styles.largeNumber}>{TokenAmount}</Text>
              <View>
                <Text>Trees</Text>
                <Text style={{ fontWeight: "700" }}>Planted</Text>
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
              <Text style={styles.largeNumber}>{animalsSaved}</Text>
              <View style={{ fontWeight: "700" }}>
                <Text>Animals </Text>
                <Text style={{ fontWeight: "700" }}>Saved</Text>
              </View>
            </View>
          </View>
          <View style={styles.subTextRow}>
            <Text style={styles.subTextAssets}>Assets</Text>
            <Text style={styles.subTextDescriptor}>
              (1 Tonne = 1 CO2 Token)
            </Text>
            <Text style={styles.subTextToken}>Token</Text>
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
                  width: 50,
                  height: 50,
                  borderRadius: 25,
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
                <Text
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    fontWeight: "700",
                  }}
                >
                  {projects[0]?.name?.charAt(0)}
                </Text>
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
                <Text style={{ fontSize: 14, fontWeight: "700" }}>
                  {projects[0]?.name} £{projects[0]?.displayAssetPrice} / {projects[0]?.type}
                </Text>
                <Text style={{}}>{moment(projects[0]?.lastUpdated).format("MMM Do YY")}</Text>
              </View>
              <View
                style={{
                  flex: 3,
                  justifyContent: "space-evenly",
                  alignItems: "flex-end",
                  marginRight: "2.5%",
                }}
              >
                <Text style={{ marginRight: "2.5%", fontWeight: "700" }}>
                  1
                </Text>
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
                <Text
                  style={{
                    alignSelf: "center",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlignVertical: "center",
                  
                    fontWeight: "700",
                  }}
                >
                  {projects[1]?.name?.charAt(0)}
                </Text>
              </View>
              <View
                style={{
                  flex: 5.5,
                  alignSelf: "center",
                  justifyContent: "space-evenly",
                  marginLeft: "5%",
                }}
              >
                <Text style={{ fontSize: 14, fontWeight: "700" }}>
                  {projects[1]?.name} £{projects[1]?.displayAssetPrice} / {projects[1]?.type}
                </Text>
                <Text style={{}}>{moment(projects[1]?.lastUpdated).format("MMM Do YY")}</Text>
              </View>
              <View
                style={{
                  flex: 3,
                  justifyContent: "space-evenly",
                  alignItems: "flex-end",
                  marginRight: "2.5%",
                }}
              >
                <Text style={{ marginRight: "2.5%", fontWeight: "700" }}>
                  1
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>

        {/**
         * @dev Transactions section
         */}

        <View style={styles.carbonSpendingTitleDiv}>
        <Image 
          resizeMode="contain"
          source={require("../assets/icon-withdraw.png")} 
          style={{ width: horizontalScale(25), height: verticalScale(25)}}
        />
          <Text style={styles.titleText}>Recent Transactions</Text>
        </View>
        <View style={styles.transactionsContainer}>{transactionTable}</View>
        
        <View style={styles.NFTContainer}>
          <Text style={styles.titleText}>NFT Assets</Text>
          <ScrollView style={{width: "100%", marginTop: "5%"}}>

          <Image style={styles.NFTinputIcon} source={{uri:nftimg}} />

          <Text style={styles.NFTNameText}>
            <Text style={{fontWeight:'bold'}}>{name}</Text> 
          </Text>
          <Text style={styles.NFTPriceText}>
          <Text style={{fontWeight:'bold'}}>{price}</Text> 
        </Text>
    
          </ScrollView>
        </View>

        <View style={[styles.carbonContainer, styles.rounded]}>
          <View style={styles.treeContainer}>
            <Image
              style={styles.treeImage}
              resizeMode="contain"
              source={require("../assets/image-tree.png")}
            />
          </View>
          <View width="100%" height="40%">
            <Text
              style={{ textAlign: "center", fontWeight: "700", fontSize: 24 }}
            >
              Congratulations!
            </Text>
            <Text style={{ textAlign: "center", marginTop: verticalScale(2) }}>
              You have planted {TotalAmount} trees with advance card purchase
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate("VirtualEcoSystem")}>
              <Text
                style={{
                  marginTop: verticalScale(2),
                  textAlign: "center",
                  fontSize: 22,
                  fontWeight: "700",
                  color: "blue",
                  marginBottom: "10%",
                }}
              >
                View more
              </Text>
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
  divContainer: {
  },
  congratulationsText: {
    textAlign: "center",
    width: "100%",
    backgroundColor: "black",
    height: "10%",
  },
  titleText: {
    top: 2,
    left: 10,
    fontSize: 18,
    fontWeight: "700",
  },
  subtitleText: {
    marginLeft: "5%",
    marginTop: "2.5%",
    fontSize: 15,
    fontWeight: "700",
  },
  barText: {
    left: 20,
    top: "25%",
    fontSize: 15,
    fontWeight: "bold",
  },
  blueTitle: {
    color: "blue",
    fontSize: 30,
    fontWeight: "bold",
  },
  blueTitle11: {
    fontSize: 11.5,
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
    height: verticalScale(300),
    backgroundColor: "white",
    marginTop: "2.5%",
  },
  carbonAssetsDiv: {
    marginTop: "5%",
    width: GlobalStyles.DivContainer.width,
    marginLeft: GlobalStyles.DivContainer.marginLeft,
    height: verticalScale(75),
    backgroundColor: "#D8EBF9",
    borderRadius: 15,

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
    borderRadius: 15,
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
    borderRadius: 15,
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
    borderRadius: 15,
    top: "10%",
  },
  transactionsContainer: {
    height: "auto",
    width: GlobalStyles.DivContainer.width,
    marginLeft: GlobalStyles.DivContainer.marginLeft,
    marginTop: "12.5%",
    borderRadius: 15,
  },

  carbonItemDiv: {
    width: GlobalStyles.DivContainer.width,
    marginLeft: GlobalStyles.DivContainer.marginLeft,
    height: "auto",
    paddingBottom: "4.5%",
    marginTop: "2.5%",
    borderRadius: 15,
    backgroundColor: "white",
  },
  screen: {
    flex: GlobalStyles.DivContainer.flex,
    height: "auto",
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
    height: 2.5,
    backgroundColor: "#0101FD",
    width: "50%",
    borderRadius: 25,
  },

  blackLine: {
    height: 2.5,
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
    borderRadius: 15,
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
    width: 75,
    justifyContent: "center",
  },

  congratulationsText: {
    fontSize: 14,
    fontWeight: "700",
  },

  congratulationsSubText: {
    marginTop: "2.5%",
    fontSize: 12,
    fontWeight: "400",
  },

  applyNowText: {
    marginTop: "2.5%",
    fontSize: 12,
    fontWeight: "400",
    color: "blue",
  },

  totalWalletBalanceContainer: {
    marginTop: "2.5%",
    width: GlobalStyles.DivContainer.width,
    marginLeft: GlobalStyles.DivContainer.marginLeft,
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
    flexDirection: "column",
    paddingHorizontal: "2.5%",
    paddingVertical:"5.5%",
    justifyContent: "center",
  },
  totalWalletBalanceContainer11: {
    marginTop: "3.5%",
    width: GlobalStyles.DivContainer.width,
    
    backgroundColor: "blue",
    height: 170,
    width: 290,
    borderRadius: 15,
    justifyContent: "center",
    padding: "5%",
   alignItems: "center",
    marginVertical: 20
  },

  totalWalletBalanceText: {
    textAlign: "center",
    fontSize: 14,
    marginBottom:8,
    fontWeight: "500"
  },
  totalWalletBalanceText11: {
    textAlign: "left",
    fontSize: 14,
    color: "white",
    textTransform: "uppercase",
    fontWeight: "700"
  },
  BalanceText: {
    fontSize: 26,
    textAlign: "center",
    lineHeight: 30,
  },
  BalanceText11: {
    fontSize: 26,
    textAlign: "left",
    lineHeight: 30,
  },

  dateText: {
    textAlign: "center",
    fontSize: 14,
    fontWeight: "500"
  },
  dateText11: {
    textAlign: "left",
    fontSize: 14,
  },
  dateText12: {
    textAlign: "left",
    fontSize: 14,
    marginTop:5,
  },
  dateText13: {
    textAlign: "left",
    fontSize: 14,
    marginTop:5,
  },
  dateText14: {
    textAlign: "left",
    fontSize: 14,
    marginTop:5,
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
    borderRadius: 10,
    paddingBottom: verticalScale(18),
    paddingTop: verticalScale(25)

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
    fontSize: 10,
    textAlign: "center",
    fontWeight: "500"
  },

  carbonSpendingDiv: {},

  carbonIcon: {
    height: 25,
    width: 25,
    resizeMode: "contain",
  },

  carbonSpendingTitleDiv: {
    width: GlobalStyles.DivContainer.width,
    marginLeft: GlobalStyles.DivContainer.marginLeft,
    height: 30,
    display: "flex",
    flexDirection: "row",
    marginTop: "5%",
  },

  carbonSpendingText: {
    top: 2,
    left: 10,
    fontSize: 18,
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
    height: 100,
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
    marginRight: 10,
    backgroundColor: "#FFFFFF",
    height: "auto",
    borderRadius: 15,
    flexDirection: "column",
    padding: 20,
    justifyContent: "center",
  },
  NFTContainer11: {
    width: 200,
  },
  NFTNameText: {
    textAlign: "center",
    fontSize: 14,
  },
  NFTDescriptionText: {
    fontSize: 14,
    textAlign: "center",
    lineHeight: 30,
  },
  NFTPriceText: {
    textAlign: "center",
    fontSize: 14,
  },
  NFTinputIcon: {
    resizeMode: "contain",
    width: "100%",
    height: 250,
    borderRadius: 15
  },
});

export default HomeScreenPersonal;
