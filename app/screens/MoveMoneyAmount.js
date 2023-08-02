import React, { Fragment, useContext, useEffect, useState } from "react";
import { useIsFocused } from "@react-navigation/native";
import {
  Text,
  StyleSheet,
  View,
  ActivityIndicator,
  TextInput,
  Image,
  TouchableOpacity
} from "react-native";
import apiCall from "../api/apiCall";
import CountdownBar from "../components/CountdownBar";
import Button from "../components/AppButton";
import { Formik, Field, Form } from "formik";
import StepProgress from "../components/SteeperCounter";
import formatCurrency from "../utility/formatCurrency";
import SendFrom from "../components/SendFrom";
import AuthContext from "../auth/context";
import GlobalStyles from "../../GlobalStyles";
import { LinearGradient } from "expo-linear-gradient";

const MoveMoneyAmount = ({ navigation, route }) => {
  const [isModal, setModal] = useState(false);
  const [accountList, setAccountList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { userID, customerDetails, accountID, darkMode } =
    useContext(AuthContext);
  const [amountPay, setAmountPay] = useState("");
  const [selectedAccount, setSelectedAccount] = useState([]);
  let requestObj = route.params;

  useEffect(() => {
    loadData();
    setModal(false);
  }, []);

  /**
   * @dev This loads the account data
   */
  const loadData = async () => {
    try {
      setIsLoading(true);
      const accountDataResponse = await apiCall.GetAllAccounts(userID);
      //Remove the selected "to" account
      // let requestObj = route.params
      setAccountList(accountDataResponse);
    } catch {
      setIsLoading(false);
    }
  };
  const accountValue = route.params;
  const handleSubmit = (values) => {
    setAmountPay(values.amountToSend);
    setModal(true);
    requestObj.amount = values.amountToSend;
  };

  const handleAccount = (value) => {
    setSelectedAccount(value);
  };

  const handleSendMoney = () => {
    requestObj.sourceAccountId = selectedAccount.id;
    navigation.navigate("MoveMoneyPin", requestObj);
  };

  return (
    <View
      style={[
        darkMode === "DARK"
          ? styles.darkblurMainContainer
          : styles.blurMainContainer,
      ]}
    >
      <View>
        {/* <CountdownBar pageCount={3} currentPage={3} /> */}
        <StepProgress currentStep={2} />

        <View
          style={[
            darkMode === "DARK"
              ? styles.darkmainContainer
              : styles.mainContainer,
            isModal && styles.blurMainContainer,
          ]}
        >
          <View style={styles.topSentTo}>
            <View>
              <Text
                style={
                  darkMode === "DARK"
                    ? styles.darksendToText
                    : styles.sendToText
                }
              >
                Send to
              </Text>
            </View>
            <View style={styles.sendTo}>
              <Image
                source={require("../assets/cardLion.png")}
                style={{ height: 30, width: 30 }}
                resizeMode="contain"
              />
              <View>
                <Text style={styles.idText}>
                  {accountValue?.destination?.id}
                </Text>
                {/* <Text style={styles.idText}>
                  {formatCurrency(
                    accountValue?.destination?.balance,
                    "GBP",
                    false
                  )}
                </Text> */}
              </View>
            </View>
          </View>

          <View
            style={{
              marginTop: 50,
              width: "100%",
              paddingHorizontal: 10,
              paddingVertical: 20,
            }}
          >
            <Formik
              initialValues={{
                amountToSend: "1",
                message: "",
              }}
              onSubmit={handleSubmit}
            >
              {({ handleChange, handleSubmit, setFieldTouched, values }) => (
                <View style={{ width: "100%" }}>
                  <Text
                    style={
                      darkMode === "DARK"
                        ? styles.darksendToText
                        : styles.sendToText
                    }
                  >
                    Enter the amount you want to send
                  </Text>
                  <TextInput
                    value={"£" + values.amountToSend}
                    keyboardType="numeric"
                    onBlur={() => setFieldTouched("amountToSend")}
                    onChangeText={(text) =>
                      handleChange("amountToSend")(text.replace(/^£/, ""))
                    }
                    style={
                      darkMode === "DARK"
                        ? styles.darkamountInput
                        : styles.amountInput
                    }
                  />

                  <TextInput
                    value={values.message}
                    onBlur={() => setFieldTouched("message")}
                    onChangeText={(text) =>
                      handleChange("message")(text.replace(/^£/, ""))
                    }
                    style={
                      darkMode === "DARK"
                        ? styles.darkmessageText
                        : styles.messageText
                    }
                    multiline={true}
                    underlineColorAndroid="transparent"
                    placeholder="Enter the message(optional)"
                    placeholderTextColor={
                      darkMode === "DARK"
                        ? GlobalStyles.Color.white
                        : null
                    }
                  />
                  {/* <Button
                    title="Proceed to send"
                    color="black"
                    textColor="white"
                    onPress={handleSubmit}
                    style={{ alignItems: "flex-end" }}
                  /> */}
                  <View style={styles.buttonContainer}>
                    <TouchableOpacity onPress={handleSubmit}>
                      <LinearGradient
                        colors={
                          darkMode === "DARK"
                            ? ["#178BFF", "#0101FD"]
                            : ["#212529", "#3A3A3A"]
                        }
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        style={
                          darkMode === "DARK"
                            ? styles.darkbuttonPayNew
                            : styles.buttonPayNew
                        }
                      >
                        <Text style={styles.buttonPayNewText}>Processed to send</Text>
                      </LinearGradient>
                    </TouchableOpacity>
                  </View>
                </View>
              )}
            </Formik>
          </View>
          <View></View>
        </View>
        <SendFrom
          setModal={setModal}
          isModal={isModal}
          accountList={accountList}
          amountPay={amountPay}
          handleAccount={handleAccount}
          selectedAccount={selectedAccount}
          handleSendMoney={handleSendMoney}
          darkMode={darkMode}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  flatListContent: {
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
  itemContainer: {
    backgroundColor: "#e5e5e5",
    padding: 10,
    marginBottom: 10,
    width: "100%",
  },
  topSentTo: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    paddingVertical: 20,
  },
  sendTo: {
    display: "flex",
    flexDirection: "row",
    gap: 20,
    alignItems: "center",
  },
  sendToText: {
    color: GlobalStyles.Color.black,
    fontSize: 16,
    fontFamily: "Montserrat-Regular",
  },
  darksendToText: {
    color: GlobalStyles.Color.white,
    fontSize: 16,
    fontFamily: "Montserrat-Regular",
  },
  idText: {
    color: GlobalStyles.Color.black,
    fontSize: 16,
    fontFamily: "Montserrat-Medium",
  },
  amountInput: {
    width: "100%",
    paddingVertical: 25,
    paddingHorizontal: 10,
    fontSize: 30,
    color: GlobalStyles.Color.green_total,
    fontWeight: "bold",
    borderWidth: 2,
    borderColor: GlobalStyles.Color.borderColor,
    marginTop: 20,
    borderRadius: 10,
  },
  darkamountInput: {
    width: "100%",
    paddingVertical: 25,
    paddingHorizontal: 10,
    fontSize: 30,
    color: GlobalStyles.Color.green_total,
    fontWeight: "bold",
    borderWidth: 2,
    borderColor: GlobalStyles.Color.secondaryDarkTheme_bg,
    backgroundColor: GlobalStyles.Color.darkTheme_bg,
    marginTop: 20,
    borderRadius: 10,
  },
  messageText: {
    width: "100%",
    fontWeight: "bold",
    borderWidth: 2,
    fontSize: 16,
    borderColor: GlobalStyles.Color.borderColor,
    marginVertical: 20,
    paddingVertical: 5,
    paddingHorizontal: 5,
    height: 200,
    borderRadius: 10,
  },
  darkmessageText: {
    width: "100%",
    fontWeight: "bold",
    borderWidth: 2,
    fontSize: 16,
    borderColor: GlobalStyles.Color.secondaryDarkTheme_bg,
    backgroundColor: GlobalStyles.Color.darkTheme_bg,
    color: GlobalStyles.Color.white,
    marginVertical: 20,
    paddingVertical: 5,
    paddingHorizontal: 5,
    height: 200,
    borderRadius: 10,
  },
  mainContainer: {
    width: "100%",
    backgroundColor: GlobalStyles.Color.white,
    height: "100%",
    paddingHorizontal: "7%",
    marginTop: "5%",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  darkmainContainer: {
    width: "100%",
    backgroundColor: GlobalStyles.Color.secondaryDarkTheme_bg,
    height: "100%",
    paddingHorizontal: "7%",
    marginTop: "5%",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  blurMainContainer: {
    backgroundColor: "rgba(105, 105, 105, 1)",
  },
  darkblurMainContainer: {
    backgroundColor: GlobalStyles.Color.darkTheme_bg,
  },
  buttonContainer: {
    width: "100%",
    marginTop: "15%",
  },

  // button: {
  //   width: 331.08,
  //   height: 47,
  //   display: "flex",
  //   flexDirection: "column",
  //   justifyContent: "center",
  //   alignItems: "center",
  //   borderRadius: 5,
  // },
  buttonText: {
    color: GlobalStyles.Color.white,
    fontSize: 14,
    fontFamily: "Montserrat",
  },
  buttonPayNew: {
    borderRadius: 10,
    // backgroundColor: GlobalStyles.Color.lightBlack,
    height: 47,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
  },
  darkbuttonPayNew: {
    borderRadius: 10,
    // backgroundColor: GlobalStyles.Color.gray_500,
    height: 47,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
  },
  buttonPayNewText: {
    color: GlobalStyles.Color.white,
    fontFamily: "Montserrat-Medium",
    fontSize: 14,
    // marginLeft: 6,
  },
});

export default MoveMoneyAmount;
