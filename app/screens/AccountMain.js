import React, { useEffect, useState, useContext } from "react";
import {
  Text,
  StyleSheet,
  Image,
  View,
  Pressable,
  ScrollView,
} from "react-native";
import { useFocusEffect } from '@react-navigation/native';

import Screen from "../components/Screen";
import GlobalStyles from "../../GlobalStyles";
import {
  horizontalScale,
  verticalScale,
  moderateScale,
} from "../config/scaling";

import api from "../api/api_list";
import AuthContext from "../auth/context";

import moment from "moment";

const HomeScreenPersonal = ({ navigation }) => {
  //Saves all the data from the API call
  const [data, setData] = useState(null);
  const [balance, setBalance] = useState(null);
  const [transactionTable, setTransactionTable] = useState(null);

  const [status, setStatus] = useState(null);
  const [accountnumber, setaccountnumber] = useState(null);
  const [sortCode, setSortCode] = useState(null);
  const [accountname, setaccountname] = useState(null);
  const authContext = useContext(AuthContext);
  const {settings} = useContext(AuthContext)
  console.log(settings)

  const [transactionData, setTransactionData] = useState(null);

  const todaydate = moment().format("ll");

  const TotalAmount = 1
  const TokenAmount = 1
  const carbonAmount = 500

  //Calls the API once during load
  useFocusEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      loadData();
    });
  });

  //Gets the data for the user
  const loadData = async () => {
    const response = await api.GetAccount(authContext.accountID);
    const data = response.data.details;
    const response1 = await api.GetAccountByCustomer(authContext.userID);
    const accountresponse = await api.GetAccount(authContext.accountID);
    const data1 = response1.data
    const accountdata = accountresponse.data.details
    console.log("==================================="+accountresponse+"=======================================")
    setBalance(data.availableBalance);
    setSortCode(accountdata.identifiers[0].sortCode)
    setaccountnumber(accountdata.identifiers[0].accountNumber)
    setaccountname(accountdata.name)
    //Verified calculation
    setStatus(data.status != "ACTIVE");

    //Load the data for transactions
    const transactionCall = await api.GetTransactions(authContext.accountID);
    const transactionData = transactionCall.data.details;

    //Format the data for transactions
    const numberOfTransactions = transactionData.totalSize;

    let transactionList = [];
    let pageShow = [];
    for (let i = 0; i < 5; i++) {
      let dataHold = transactionData.content[i];
      transactionList.push(dataHold);
      pageShow.push(
        <Pressable
          style={[styles.transactionBox, styles.rounded]}
          key={i}
          onPress={() => navigation.navigate("Transactions")}>
          <View style={{height: "100%", flexDirection: "row",}}>
          <View style={{width: 50, height: 50, borderRadius: 25, backgroundColor: "green", borderColor: "black", alignSelf: "center", marginLeft: "2.5%"}}>
          <Text style={{alignSelf: "center", justifyContent: "center", alignItems: "center", textAlignVertical: "center", height: "100%"}}>A W</Text>
          </View>
          <View style={{flex: 3.5, alignSelf: "center", justifyContent: "space-evenly", marginLeft: "5%"}}>
              <Text style={{fontSize :14, fontWeight: "700"}}>
                {dataHold.description.replace("Payment to ", "")}
              </Text>
              <Text style={{}}>
                {moment(dataHold.transactionDate).format("MMM Do YY")}
              </Text>
          </View>
          <View style={{flex: 5, justifyContent: "space-evenly", alignItems: "flex-end", marginRight: "2.5%"}}>
          <Text style={{marginRight: "2.5%", fontWeight: "700"}}>
            £{dataHold.amount}
          </Text>
          </View>
         </View>
        </Pressable>
      );
    }
    setTransactionData({
      numTransaction: numberOfTransactions,
      transactions: transactionList,
    });

    setTransactionTable(pageShow);
  };

  let currency = transactionData ? transactionData.transactions[0].amount : "£";

  const catNames = ["Health", "Food", "House", "Sping", "Transport"];
  const dataPercentages = ["70%", "50%", "40%", "30%", "20%"];

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
          <Text style={[styles.navBarTopText, styles.blueOverwrite]}>
            Personal
          </Text>
          <Text style={styles.navBarTopText}>Business</Text>
        </View>

        <View style={styles.lineSeparatorDiv}>
          <View style={styles.blueLine} />
          <View style={styles.blackLine} />
        </View>



        <View style={styles.divContainer}>
          {/* <View style={styles.congratulationsContainer}>
            <View style={styles.progressDiv}>
              <Image
                style={styles.progressIcon}
                resizeMode="contain"
                source={require("../assets/icon-bluecheck.png")}
              />
            </View>

            <View style={styles.congratulationsDiv}>
              <Text style={styles.congratulationsText}>Congratulations!</Text>
              <Text style={styles.congratulationsSubText}>
                You are almost ready with your account, Avail more benefits by
                choosing our card plans.
              </Text>
              <Text style={styles.applyNowText}>Apply Now</Text>
            </View>
          </View> */}
          <View style={styles.totalWalletBalanceContainer11}>
            <Text style={styles.totalWalletBalanceText11}>
              Account name:{accountname}
            </Text>
            <Text style={[styles.BalanceText11, styles.blueTitle11]}>
              SortCode:{sortCode}
            </Text>
            <Text style={styles.dateText11}>Account Number: {accountnumber}</Text>
          </View>

          <View style={styles.totalWalletBalanceContainer}>
            <Text style={styles.totalWalletBalanceText}>
              Total Wallet Balance
            </Text>
            <Text style={[styles.BalanceText, styles.blueTitle]}>
              {settings.hideBalance ? "Balance Hidden" : "£"+balance}
            </Text>
            <Text style={styles.dateText}>{todaydate}</Text>
          </View>

          <View style={styles.buttonContainer}>
            <Pressable
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
            </Pressable>

            <Pressable
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
            </Pressable>

            <Pressable
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
            </Pressable>

            <Pressable
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
            </Pressable>
          </View>
        </View>

        <View style={styles.carbonSpendingTitleDiv}>
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
                  Kg of CO2
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

            <View style={{marginTop: verticalScale(25)}}>
            <Text style={styles.titleText}>Carbon Assets </Text>
            </View>
            <View style={[styles.carbonAssetsDiv]}>
              <View style={styles.carbonAssetsDivLeft}>
                <Text style={styles.largeNumber}>{TokenAmount}</Text>
                <View>
                  <Text>Carbonyte</Text>
                  <Text style={{ fontWeight: "700" }}>Tokens</Text>
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
                <Text style={styles.largeNumber}>{TotalAmount}</Text>
                <View style={{ fontWeight: "700" }}>
                  <Text>Total</Text>
                  <Text style={{ fontWeight: "700" }}>Assets</Text>
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

            <View style={styles.subTextRow}>
                          <Text  style={{fontSize: 12, flex: 8}}>Drylands Protection, Kasigau Wildlife Corridor £19 / Tonne</Text>
                          <Text style={styles.subTextToken}>1</Text>
                        </View>

            <View style={styles.subTextRow}>
                                      <Text  style={{fontSize: 12, flex: 8}}>Tropical Forest Protection, Keo Seima £14 / Tree</Text>
                                      <Text style={styles.subTextToken}>1</Text>
                                    </View>


          </View>
        </View>

        {/**
         * @dev Transactions section
         */}

        <View style={styles.carbonSpendingTitleDiv}>
                  <Text style={styles.titleText}>Recent Transactions</Text>
                </View>
        <View style={styles.transactionsContainer}>
          {transactionTable}
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
            <Text style={{textAlign: "center", fontWeight: "700", fontSize: 24}}>Congratulations!</Text>
            <Text style={{textAlign: "center", marginTop: verticalScale(2)}}>
              You have planted 5 trees with advance card purchase
            </Text>
            <Pressable onPress={() => navigation.navigate("VirtualEcoSystem")}>
            <Text style={{marginTop: verticalScale(2), textAlign: "center",fontSize: 22, fontWeight: "700", color: "blue", marginBottom: "10%"}}>View more</Text>
            </Pressable>
          </View>
          <View style={{marginTop: "5%"}}></View>
        </View>
        <View style={{marginTop: "5%"}}/>

      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
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
    fontWeight: "700"
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
    fontSize: 14,
  },
  referContainer: {
    width: "80%",
    height: verticalScale(200),
    left: "10%",
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
    width: "80%",
    height: verticalScale(300),
    left: "10%",
    backgroundColor: "white",
    marginTop: "2.5%",
  },
  carbonAssetsDiv: {
    marginTop: "2.5%",
    width: "90%",
    height: verticalScale(75),
    backgroundColor: "#F6F5F8",
    borderRadius: 15,
    marginLeft: "5%",
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
    height: "80%",
    borderRadius: 15,
    top: "10%",
    marginLeft: "5%",
  },
  transactionsContainer: {
    height: "auto",
    width: "80%",
    marginLeft: "10%",
    marginTop: "12.5%",
    borderRadius: 15,
  },

  carbonItemDiv: {
    width: "80%",
    height: "auto",
    paddingBottom: "4.5%",
    marginLeft: "10%",
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
    width: "80%",
    backgroundColor: "#E4E4FF",
    height: verticalScale(125),
    marginLeft: "10%",
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
    width: "80%",
    backgroundColor: "#FFFFFF",
    height: verticalScale(75),
    marginLeft: "10%",
    borderRadius: 15,
    flexDirection: "column",
    padding: "2.5%",
    justifyContent: "center",
  },
  totalWalletBalanceContainer11: {
    marginTop: "1.5%",
    width: "80%",
    backgroundColor: "#FFFFFF",
    height: verticalScale(75),
    marginLeft: "10%",
    borderRadius: 15,
    flexDirection: "column",
    padding: "5%",
    justifyContent: "center",
  },

  totalWalletBalanceText: {
    textAlign: "center",
    fontSize: 14,
  },
  totalWalletBalanceText11: {
    textAlign: "left",
    fontSize: 14,
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
  },
  dateText11: {
    textAlign: "left",
    fontSize: 14,
  },

  buttonContainer: {
    marginTop: "2.5%",
    width: GlobalStyles.DivContainer.width,
    marginLeft: GlobalStyles.RowText.marginLeft,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },

  inputBox: {
    backgroundColor: "white",
    width: "23.5%",
    height: 60,
    flexDirection: "row",
    borderRadius: 10,
  },

  inputBoxDiv: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },

  inputIcon: {
    resizeMode: "contain",
    height: verticalScale(20),
    marginBottom: "2.5%"
  },

  inputBoxText: {
    fontSize: 10,
    textAlign: "center",
  },

  carbonSpendingDiv: {},

  carbonIcon: {
    height: 25,
    width: 25,
    resizeMode: "contain",
  },

  carbonSpendingTitleDiv: {
    width: "80%",
    height: 30,
    display: "flex",
    flexDirection: "row",
    marginLeft: "10%",
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

  }

});

export default HomeScreenPersonal;