import React, { useContext, useEffect, useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
  Pressable,
  TextInput,
  Switch,
  ScrollView,
  ActivityIndicator,
  ImageBackground,
  Button,
} from "react-native";
import GlobalStyles from "../../GlobalStyles";
import AuthContext from "../auth/context";
import api from "../api/api_list";
import apiCall from "../api/apiCall";
import { useFocusEffect } from "@react-navigation/native";
import SinglePie from "../components/SinglePie";
import AntDesign from "@expo/vector-icons/AntDesign";
import storage from "../auth/storage";
import KeyboardAvoider from "../components/KeyboardAvoider";
import { Dropdown } from "react-native-element-dropdown";
import Tagline from "../components/Tagline";
import apiLogin from "../api/apiLogin";
import LinearAccountButton from "../components/LinearAccountButton";
import apiSettings from "../api/apiSettings";
const SpendingLimit = ({ navigation, route }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isEnabled, setIsEnabled] = useState(false);
  const authContext = useContext(AuthContext);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const [dropDownValue, setDropDownValue] = useState([]);
  const [monthLim, setMonLim] = useState(0);
  const [spend, setSpend] = useState(0);
  const [percent, setPercent] = useState();
  const [selectedCard, setSelectedCard] = useState();
  const [accountData, setAccountData] = useState([]);
  const [isToggled, setIsToggled] = useState(false);
  const [validCheck, setValidator] = useState(false);
  const [amount, setAmount] = useState("0");
  const [isMonthWise, setMonthWise] = useState("MONTHLY");
  const [transactionMode, setTransactionMode] = useState("ALL");
  const { userID, customerDetails, darkMode } = useContext(AuthContext);
  useEffect(() => {}, []);
  console.log(route.params, "this is route object");
  const requestObject = route.params;
  //Calls the API once during load
  useFocusEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      loadData();
    });
  });

  const restoreLimit = async () => {
    const limitToggle = await storage.getLimits();
    if (!limitToggle) return;
    const limitBoolean = limitToggle === "true";
    setIsEnabled(limitBoolean);
  };

  //Gets the data for the user
  const loadData = async () => {
    //Gets the data from the api
    setIsLoading(true);
    const response = await apiCall.GetLimits(selectedCard);
    const responseData = await apiSettings.GetCardById(requestObject?.cardID);
    console.log(responseData?.usageLimits, "this is data from the api");
    console.log(isMonthWise, transactionMode, "this is filtered Value");
    const settingValues = responseData?.usageLimits;
    const eachData = responseData?.usageLimits?.map((eachValue, index) => {
      if (eachValue.code === isMonthWise) {
        console.log(eachValue?.values, "this ios itme");
        eachValue?.values?.map((eachTransactionCode, index) => {
          if (eachTransactionCode.code === transactionMode) {
            console.log(eachTransactionCode?.count);
            const spendTotal =
              eachValue === null ? 0 : eachTransactionCode?.sumAmount;
            const monthlyAmount =
              eachValue === null ? 0 : eachTransactionCode?.singleAmount;
            setMonLim(eachTransactionCode?.singleAmount);
            setSpend(eachTransactionCode?.sumAmount);
            setPercent(spendTotal / monthlyAmount);
            console.log(spendTotal / monthlyAmount, "thsisnbsns");
          }
        });
      }
    });
    // const spendTotal = response === null ? 0 : response?.spend;
    // const monthlyAmount = response === null ? 0 : response?.monthlyAmount;
    // const cards = await apiCall.GetCardByAccount("686283112");
    // const accountApi = await apiCall.GetAllAccounts(userID);
    const getUserID = await apiLogin.GetCustomerDetails(customerDetails);
    const details = getUserID;
    // setDropDownValue(cards);
    // setMonLim(monthlyAmount);
    // setAccountData(details?.accountDetails);
    // setSpend(spendTotal);
    // setPercent(spendTotal / monthlyAmount);
    setIsLoading(false);
  };
  // const setandGetValue= ()={}

  let newArray = dropDownValue?.map((eachData, i) => {
    return { label: eachData?.accountId, value: eachData?.accountId };
  });
  const checkText = (text) => {
    setAmount(text);
    //First check if there is a value
    if (
      //First check if there is a value
      text == " " &&
      //Then check if it is above a limit
      text > 1000
      //Any other checks for the text add it here
    ) {
      setValidator(false);
    } else {
      //If all the checks pass then set the validator to true
      setValidator(true);
    }
  };
  const navigate = async () => {
    //Check if the text is valid from the validator
    const apiData = [
      {
        code: isMonthWise,
        values: [
          {
            code: transactionMode,
            count: 0,
            reset: true,
            singleAmount: amount,
            sumAmount: 0,
          },
        ],
      },
    ];
    console.log(apiData);
    if (validCheck) {
      //If it is do this
      // const response = await api.SetLimit(selectedCard, amount);
      // setIsToggled(false);
      // loadData();
    } else {
      //If it isn't show an error message here
    }
  };
  let newAccountArray = accountData?.map((eachData, i) => {
    return { label: eachData?.accountId, value: eachData?.accountId };
  });

  /**
   * @todo set spending limit to 0 on trigger
   * @amount variable is a patch as the server does not accept 0 as an argument
   */
  const spendingToggle = async () => {
    if (isEnabled) {
      const amount = "3000";
      const response = await api.SetLimit(selectedCard, amount);

      setIsEnabled(false);
      loadData();
    } else {
      setIsEnabled(true);
      storage.storeLimits(true);
      // navigation.navigate("SetLimit");
    }
  };
  //Month dropdown values
  const monthDropdown = [
    { label: "Daily", value: "DAILY" },
    { label: "Weekly", value: "WEEKLY" },
    { label: "Monthly", value: "MONTHLY" },
  ];

  const WithdrawtypeDropdown = [
    { label: "ALL", value: "ALL" },
    { label: "ATM", value: "ATM" },
    { label: "RETAIL", value: "RETAIL" },
  ];

  if (isLoading) {
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor:
            darkMode === "DARK" ? GlobalStyles.Color.darkTheme_bg : null,
        }}
      >
        <ActivityIndicator
          size="large"
          color={
            darkMode === "DARK"
              ? GlobalStyles.Color.white
              : GlobalStyles.Color.black
          }
        />
      </View>
    );
  }
  const renderItem = (item) => {
    const newElemet = accountData.filter(
      (eachValue, index) => index === item._index
    );
    return (
      <View style={styles.dropDownarrayitem}>
        <Image
          source={require("../assets/cardLion.png")}
          resizeMode="contain"
          style={{ height: 30, width: 30 }}
        />
        <View
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* <Text>{` ${newElemet[0]?.customerName}`}</Text> */}
          <Text style={styles.textItem}>{item.label}</Text>
        </View>
      </View>
    );
  };

  return (
    <KeyboardAvoider>
      <ImageBackground
        source={
          darkMode === "DARK"
            ? require("../assets/CardsettingsIcons/spendingLimitblack.jpg")
            : require("../assets/backgrounds/spendingLimit.jpg")
        }
        // style={{  width: "100%" }}
        resizeMode="contain"
        imageStyle={{
          top: "65%", // Whatever offset you want from the bottom
        }}
        style={{
          width: "100%",
          backgroundColor:
            darkMode === "DARK"
              ? GlobalStyles.Color.darkTheme_bg
              : GlobalStyles.Color.lightTheme_bg,
          flex: 1,
        }}
      >
        <ScrollView>
          <View style={styles.subTextRow}>
            <Text
              style={darkMode === "DARK" ? styles.darksubText : styles.subText}
            >
              The limit determines the amount that can be spent or withdrawn
              using this card per month
            </Text>
          </View>
          {/* <View style={styles.subTextRow}>
            <Text
              style={darkMode === "DARK" ? styles.darksubText : styles.subText}
            >
              Select Card
            </Text>
            <Dropdown
              data={newAccountArray}
              value={selectedCard}
              labelField="label"
              valueField="value"
              // defalutValue="Mr"
              onChange={(item) => {
                setSelectedCard(item.value);
                loadData();
              }}
              style={
                darkMode === "DARK" ? styles.darkdropdown : styles.dropdown
              }
              containerStyle={styles.containerStyle}
              renderRightIcon={() => (
                <AntDesign name="checkcircle" size={24} color="green" />
              )}
              renderItem={renderItem}
              placeholder="Select Card"
              selectedTextStyle={{
                color: darkMode === "DARK" ? GlobalStyles.Color.white : null,
              }}
              placeholderStyle={{
                color: darkMode === "DARK" ? GlobalStyles.Color.white : null,
              }}
              autoScroll={false}
            />
          </View> */}
          <View style={{ paddingHorizontal: "5%", marginTop: "5%" }}>
            <Text
              style={darkMode === "DARK" ? styles.darksubText : styles.subText}
            >
              Select Range
            </Text>
            <Dropdown
              data={monthDropdown}
              value={isMonthWise}
              labelField="label"
              valueField="value"
              // defalutValue="Mr"
              onChange={(item) => {
                setMonthWise(item.value);
                // loadData();
              }}
              style={
                darkMode === "DARK" ? styles.darkdropdown : styles.dropdown
              }
              containerStyle={styles.containerStyle}
              // renderRightIcon={() => (
              //   <AntDesign name="checkcircle" size={24} color="green" />
              // )}
              // renderItem={renderItem}
              placeholder="Select an option..."
              selectedTextStyle={{
                color: darkMode === "DARK" ? GlobalStyles.Color.white : null,
              }}
              placeholderStyle={{
                color: darkMode === "DARK" ? GlobalStyles.Color.white : null,
              }}
              autoScroll={false}
            />
          </View>

          <View style={{ paddingHorizontal: "5%" }}>
            <Text
              style={darkMode === "DARK" ? styles.darksubText : styles.subText}
            >
              Select Method of withdrawal
            </Text>
            <Dropdown
              data={WithdrawtypeDropdown}
              value={transactionMode}
              labelField="label"
              valueField="value"
              // defalutValue="Mr"
              onChange={(item) => {
                setTransactionMode(item.value);
                // loadData();
              }}
              style={
                darkMode === "DARK" ? styles.darkdropdown : styles.dropdown
              }
              containerStyle={styles.containerStyle}
              // renderRightIcon={() => (
              //   <AntDesign name="checkcircle" size={24} color="green" />
              // )}
              // renderItem={renderItem}
              placeholder="Select an option..."
              selectedTextStyle={{
                color: darkMode === "DARK" ? GlobalStyles.Color.white : null,
              }}
              placeholderStyle={{
                color: darkMode === "DARK" ? GlobalStyles.Color.white : null,
              }}
              autoScroll={false}
            />
          </View>
          <View style={{ paddingHorizontal: "5%" }}>
            <LinearAccountButton
              darkMode={darkMode}
              title="Apply"
              onPress={() => loadData()}
            />
          </View>
          <View
            style={{
              width: "90%",
              marginLeft: "5%",
              backgroundColor:
                darkMode === "DARK" ? "rgba(255,255,255,0.2)" : "white",
              borderRadius: 15,
              marginTop: "5%",
            }}
          >
            {isToggled ? (
              <View style={{ padding: "10%" }}>
                <Text>Set a monthly limit</Text>
                <TextInput
                  style={
                    darkMode === "DARK"
                      ? styles.darktextInput
                      : styles.textInput
                  }
                  placeholder={"£"}
                  keyboardType="numeric"
                  onChangeText={(newText) => checkText(newText)}
                />
                <LinearAccountButton
                  darkMode={darkMode}
                  title="Continue"
                  onPress={() => navigate()}
                />
              </View>
            ) : (
              <>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {monthLim - spend && percent >= 0 ? (
                    <View style={{ marginTop: "5%" }}>
                      <SinglePie percent={percent} />
                    </View>
                  ) : (
                    <View>
                      <SinglePie percent={percent} />
                    </View>
                  )}

                  <View
                    style={{
                      position: "absolute",
                      flex: 1,
                      justifyContent: "center",
                      alignItems: "center",
                      top: 150,
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 28,
                        color:
                          darkMode === "DARK"
                            ? GlobalStyles.Color.white
                            : "blue",
                        fontFamily: "Montserrat-Bold",
                      }}
                    >
                      {" "}
                      £{monthLim.toFixed(2)}
                    </Text>
                    {/* {monthLim - spend >= 0 ? (
                      <Text
                        style={{
                          fontSize: 28,
                          color:
                            darkMode === "DARK"
                              ? GlobalStyles.Color.white
                              : "blue",
                          fontFamily: "Montserrat-Bold",
                        }}
                      >
                        {" "}
                        £{(monthLim - spend).toFixed(2)}
                      </Text>
                    ) : (
                      <Text
                        style={{
                          fontSize: 28,
                          marginTop: "2.5%",
                          color: "red",
                          fontFamily: "Montserrat-Bold",
                        }}
                      >
                        {" "}
                        £{(monthLim - spend).toFixed(2)}
                      </Text>
                    )} */}
                    <Text
                      style={{
                        fontSize: 16,
                        marginTop: "1%",
                        fontFamily: "Montserrat",
                        // opacity: 0.3,
                        color:
                          darkMode === "DARK"
                            ? GlobalStyles.Color.white
                            : GlobalStyles.Color.gray_2100,
                      }}
                    >
                      Spent this month
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    width: "100%",
                    justifyContent: "space-between",
                    alignItems: "center",
                    height: 60,
                    paddingHorizontal: "5%",
                  }}
                >
                  <Image
                    style={{ flex: 2, height: 35, width: 35 }}
                    resizeMode="contain"
                    source={require("../assets/meter-1.png")}
                  />
                  <View style={{ flex: 6, marginLeft: "5%" }}>
                    <Text
                      style={{
                        fontSize: 16,
                        fontFamily: "Montserrat",
                        color:
                          darkMode === "DARK"
                            ? GlobalStyles.Color.white
                            : GlobalStyles.Color.gray_1400,
                      }}
                    >
                      Card Spending limit
                    </Text>
                    <Text
                      style={{
                        fontSize: 10,
                        fontFamily: "Montserrat-Regular",
                        color:
                          darkMode === "DARK"
                            ? GlobalStyles.Color.white
                            : GlobalStyles.Color.gray_2100,
                      }}
                    >
                      The spend & withdrawal cap
                    </Text>
                  </View>
                  <Pressable
                    style={{ height: 50, width: "auto" }}
                    onPress={() => console.log("?")}
                    title="Set Limit"
                  >
                    <Switch
                      style={{ flex: 2 }}
                      trackColor={{
                        false: GlobalStyles.Color.gray_600,
                        true: GlobalStyles.Color.blue_100,
                      }}
                      thumbColor={isEnabled ? "#f4f3f4" : "#f4f3f4"}
                      onValueChange={spendingToggle}
                      value={isEnabled}
                    />
                  </Pressable>
                </View>
                <View
                  style={{
                    width: "100%",
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                    marginBottom: "5%",
                    flexDirection: "row",
                    gap: 3,
                  }}
                >
                  <Image
                    style={{ height: 15, width: 15 }}
                    resizeMode="contain"
                    source={require("../assets/card.png")}
                  />

                  <View style={{ flexDirection: "row", gap: 2 }}>
                    <Text
                      style={{
                        fontSize: 12,
                        fontFamily: "Montserrat-Regular",
                        color:
                          darkMode === "DARK"
                            ? GlobalStyles.Color.white
                            : GlobalStyles.Color.lightBlack,
                        opacity: darkMode === "DARK" ? 1 : 0.3,
                        marginRight: "1%",
                      }}
                    >
                      Limit is £{monthLim.toFixed(2)}
                    </Text>
                    <Text
                      onPress={() => setIsToggled(true)}
                      style={{
                        fontSize: 10,
                        fontFamily: "Montserrat",
                        color: GlobalStyles.Color.skyblue,
                        opacity: 1,
                      }}
                    >
                      Change limit
                    </Text>
                  </View>
                </View>
              </>
            )}
          </View>
          <View style={{ marginTop: "10%" }}>
            <Tagline darkMode={darkMode} />
          </View>
        </ScrollView>
      </ImageBackground>
    </KeyboardAvoider>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: GlobalStyles.DivContainer.backgroundColor,
    height: GlobalStyles.DivContainer.height,
    width: "100%",
    flex: GlobalStyles.DivContainer.flex,
  },

  titleTextRow: {
    marginTop: GlobalStyles.Title.marginTop,
    width: GlobalStyles.DivContainer.width,
    marginLeft: GlobalStyles.DivContainer.marginLeft,
  },

  titleText: {
    fontSize: GlobalStyles.Title.fontSize,
    fontWeight: GlobalStyles.Title.fontWeight,
  },

  subText: {
    fontSize: 14,
    fontFamily: "Montserrat-Regular",
    color: GlobalStyles.Color.gray_1000,
  },
  darksubText: {
    fontSize: 14,
    fontFamily: "Montserrat-Regular",
    color: GlobalStyles.Color.white,
  },

  subTextRow: {
    textAlign: "center",
    marginTop: "10%",
    width: "100%",
    paddingHorizontal: "5%",
  },
  carbonSpendingAnalysysBarProgress: {
    height: "100%",
    backgroundColor: "orange",
    borderRadius: 15,
    maxWidth: "100%",
  },
  barText: {
    left: 20,
    top: "25%",
    fontSize: 15,
    fontWeight: "bold",
  },
  dropdown: {
    borderColor: GlobalStyles.Color.borderColor,
    borderRadius: 10,
    width: "100%",
    padding: 10,
    fontSize: 16,
    paddingLeft: 20,
    borderWidth: 1,
    marginBottom: "5%",
    marginTop: "2.5%",
    opacity: 1,
    backgroundColor: GlobalStyles.Color.white,
  },
  darkdropdown: {
    borderColor: GlobalStyles.Color.borderColor,
    borderRadius: 10,
    width: "100%",
    padding: 10,
    fontSize: 16,
    paddingLeft: 20,
    borderWidth: 0.3,
    marginBottom: "5%",
    marginTop: "2.5%",
    opacity: 1,
    backgroundColor: "rgba(255,255,255,0.2)",
  },
  dropdownContainer: {
    borderBottomEndRadius: 10,
    borderBottomStartRadius: 10,
  },
  containerStyle: {
    borderBottomEndRadius: 10,
    borderBottomStartRadius: 10,
    color: GlobalStyles.Color.white,
  },
  dropDownarrayitem: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
    margin: 10,
  },
  container: {
    width: "100%",
    height: 350,
    // position: "absolute",
    bottom: 0,
    zIndex: 0,
  },
  bottomText: {
    color: GlobalStyles.Color.white,
    fontSize: 14,
    fontFamily: "Montserrat-Regular",
  },
  bottomTextBold: {
    color: GlobalStyles.Color.black,
    fontSize: 16,
    fontFamily: "Montserrat",
  },
  groupParent: {
    height: 60,
  },
  // parentPosition: {
  //   bottom: 0,
  //   left: 0,
  //   right: 0,
  //   position: "absolute",
  // },
  textInput: {
    borderColor: GlobalStyles.Color.borderColor,
    backgroundColor: GlobalStyles.Color.white,
    borderWidth: 1,
    paddingHorizontal: "7%",
    paddingVertical: "5%",
    fontSize: 15,
    marginVertical: "10%",
    borderRadius: 5,
  },
  darktextInput: {
    borderColor: GlobalStyles.Color.borderColor,
    backgroundColor: GlobalStyles.Color.darkTheme_bg,
    borderWidth: 0.2,
    paddingHorizontal: "7%",
    paddingVertical: "5%",
    fontSize: 15,
    borderRadius: 5,
    marginVertical: "10%",
    color: "white",
  },
  button: {
    paddingVertical: 20,
    backgroundColor: GlobalStyles.Color.lightBlack,
    color: GlobalStyles.Color.white,
    borderRadius: 10,
  },
  buttonText: {
    color: GlobalStyles.Color.white,
    fontSize: 16,
    fontFamily: "Montserrat-Regular",
    textAlign: "center",
  },
});

export default SpendingLimit;
