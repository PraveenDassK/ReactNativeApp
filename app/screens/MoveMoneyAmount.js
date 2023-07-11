import React, { Fragment, useContext, useEffect, useState } from "react";
import { useIsFocused } from "@react-navigation/native";
import {
  Text,
  StyleSheet,
  View,
  ActivityIndicator,
  TextInput,
  Image,
} from "react-native";
import apiCall from "../api/apiCall";
import CountdownBar from "../components/CountdownBar";
import Button from "../components/AppButton";
import { Formik, Field, Form } from "formik";
import StepProgress from "../components/SteeperCounter";
import formatCurrency from "../utility/formatCurrency";
import SendFrom from "../components/SendFrom";
import AuthContext from "../auth/context";

const MoveMoneyAmount = ({ navigation, route }) => {
  const [isModal, setModal] = useState(false);
  const [accountList, setAccountList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { userID, customerDetails, accountID } = useContext(AuthContext);
  const [amountPay, setAmountPay] = useState("");
  const [selectedAccount, setSelectedAccount] = useState([]);
  let requestObj = route.params;

  useEffect(() => {
    loadData();
    setModal(false)
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
    <View style={[isModal && styles.blurMainContainer]}>
      <View>
        {/* <CountdownBar pageCount={3} currentPage={3} /> */}
        <StepProgress currentStep={2} />

        <View
          style={[styles.mainContainer, isModal && styles.blurMainContainer]}
        >
          <View style={styles.topSentTo}>
            <View>
              <Text style={styles.sendToText}>Send to</Text>
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
                <Text style={styles.idText}>
                  {formatCurrency(
                    accountValue?.destination?.balance,
                    "GBP",
                    false
                  )}
                </Text>
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
                message: "(Optional)",
              }}
              onSubmit={handleSubmit}
            >
              {({ handleChange, handleSubmit, setFieldTouched, values }) => (
                <View style={{ width: "100%" }}>
                  <Text style={styles.sendToText}>
                    Enter the amount you want to send
                  </Text>
                  <TextInput
                    value={"£" + values.amountToSend}
                    keyboardType="numeric"
                    onBlur={() => setFieldTouched("amountToSend")}
                    onChangeText={(text) =>
                      handleChange("amountToSend")(text.replace(/^£/, ""))
                    }
                    style={styles.amountInput}
                  />

                  <TextInput
                    value={values.message}
                    onBlur={() => setFieldTouched("message")}
                    onChangeText={(text) =>
                      handleChange("message")(text.replace(/^£/, ""))
                    }
                    style={styles.messageText}
                    multiline={true}
                    underlineColorAndroid="transparent"
                    placeholder="Enter the message(optional)"
                  />
                  <Button
                    title="Proceed to send"
                    color="black"
                    textColor="white"
                    onPress={handleSubmit}
                    style={{ alignItems: "flex-end" }}
                  />
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
    color: "#000000",
    fontSize: 16,
    fontFamily: "Montserrat-Regular",
  },
  idText: {
    color: "#000000",
    fontSize: 16,
    fontFamily: "Montserrat-Medium",
  },
  amountInput: {
    width: "100%",
    paddingVertical: 25,
    paddingHorizontal: 10,
    fontSize: 30,
    color: "#179424",
    fontWeight: "bold",
    borderWidth: 2,
    borderColor: "#EBEBEB",
    marginTop: 20,
    borderRadius: 10,
  },
  messageText: {
    width: "100%",
    fontWeight: "bold",
    borderWidth: 2,
    fontSize: 16,
    borderColor: "#EBEBEB",
    marginVertical: 20,
    paddingVertical: 5,
    paddingHorizontal: 5,
    height: 200,
    borderRadius: 10,
  },
  mainContainer: {
    width: "100%",
    backgroundColor: "white",
    height: "100%",
    paddingHorizontal: "7%",
    marginTop: "5%",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  blurMainContainer: {
    backgroundColor: "rgba(105, 105, 105, 1)",
  },
});

export default MoveMoneyAmount;
