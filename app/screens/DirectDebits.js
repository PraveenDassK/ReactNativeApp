import React, { useContext, useEffect, useState } from "react";
import {
  Text,
  TextInput,
  StyleSheet,
  View,
  TouchableOpacity,
  Pressable,
  ActivityIndicator,
  FlatList,
  ImageBackground,
} from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import { Dropdown } from "react-native-element-dropdown";
import Button from "../components/AppButton";
import ErrorMessage from "../components/forms/ErrorMessage";
import AuthContext from "../auth/context";
import { LinearGradient } from "expo-linear-gradient";
import Icon from "../components/Icon";
import TransactionBody from "../components/transHistory/DDTransactionBody";
import apiBeneficiaries from "../api/apiBeneficiaries";
import AccountDetails from "../components/AccountDetails";
import apiCall from "../api/apiCall";
import apiLogin from "../api/apiLogin";
import apiDDMandate from "../api/apiDDMandate";
// import {
//   TransactionBody,
//   TransactionHead,
//   TransactionFooter,
// } from "../components/transactions";
import Tagline from "../components/Tagline";
import { moderateScale } from "../config/scaling";
import GlobalStyles from "../../GlobalStyles";

const DirectDebits = ({ navigation }) => {
  const [accountBalance, setBalance] = useState([]);
  const [bannerName, setbannerName] = useState();
  const [userImpact, setUserImpact] = useState([]);
  const [userData, setuserData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [directDebits, setDirectDebits] = useState([]);
  const { darkMode, accountDetails, accountID, customerDetails } =
    useContext(AuthContext);
  useEffect(() => {
    loadData();
  }, []);
  var dummyData = [
    {
      mandateId: "string",
      merchantNumber: "76544334",
      merchantName: "Netflix",
      merchantAccountNumber: "string",
      merchantSortCode: "string",
      mandateStatus: "string",
      auddisIndicator: "A",
      setupDate: "string",
      mandateReference: "1234567",
    },
    {
      mandateId: "string",
      merchantNumber: "123456",
      merchantName: "Amazon prime",
      merchantAccountNumber: "string",
      merchantSortCode: "string",
      mandateStatus: "string",
      auddisIndicator: "A",
      setupDate: "string",
      mandateReference: "5672323",
    },
  ];
  const loadData = async () => {
    try {
      setIsLoading(true);

      // const userDataReturn = await apiCall.GetAllAccounts("C122BMS7");
      const userImpactReturn = await apiCall.GetUserImpact(customerDetails);
      const getUserID = await apiLogin.GetCustomerDetails(customerDetails);
      const details = getUserID;
      setuserData(details?.accountDetails);
      // setuserData(userDataReturn);
      setUserImpact(userImpactReturn);
      console.log(accountID, "this is account");
      const apiDataforDD = await apiDDMandate.GetOutBound(
        accountBalance?.accountId
      );
      console.log(apiDataforDD, "this is after api call");
      setDirectDebits(apiDataforDD > 1 ? apiDataforDD : dummyData);

      setIsLoading(false);
    } catch {
      setIsLoading(false);
      return;
    }
  };
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

  return (
    <ImageBackground
      source={
        darkMode === "DARK"
          ? require("../assets/backgrounds/directdebit/DirectDebitBlack.png")
          : require("../assets/backgrounds/directdebit/DirectDebitWhite.png")
      }
      resizeMode="contain"
      imageStyle={{
        bottom: "-70%", // Whatever offset you want from the bottom
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
      <View style={styles.mainContainer}>
        {/* <Text
          style={{
            color:
              darkMode === "DARK"
                ? GlobalStyles.Color.white
                : GlobalStyles.Color.secondaryDarkTheme_bg,
          }}
        >
          Direct debits
        </Text> */}
        <View style={{ marginVertical: "5%" }}>
          <AccountDetails
            userData={userData}
            userImpact={userImpact}
            handlePress={() => navigation.navigate("SendMoney")}
            accountBalance={accountBalance}
            setBalance={setBalance}
            accountDetails={accountDetails}
            accountId={accountID}
            isVisible={false}
          />
        </View>
        <View
          style={{
            backgroundColor:
              darkMode === "DARK"
                ? "rgba(255,255,255,0.2)"
                : GlobalStyles.Color.white,
            // paddingVertical: "10%",
            borderRadius: 20,
            width: "100%",
          }}
        >
          {/* <TransactionHead
            headerTitle="Carbon transactions"
            darkMode={darkMode}
          /> */}

          <View style={{ paddingVertical: "3%" }}>
            {directDebits?.map(({ merchantName, mandateReference }, index) => (
              <TransactionBody
                key={index}
                name={`${merchantName}`}
                index={index}
                date={mandateReference}
                token={5}
                amount={5}
                darkMode={darkMode}
                lastElement={directDebits.length - 1}
                description={merchantName}
                onTransaction={() =>
                  navigation.navigate("DirectDebitDetails", directDebits[index])
                }
              />
            ))}
          </View>
          {/* <TransactionFooter
            number={directDebits.length}
            total={5}
            // onSee={() => navigation.navigate("VirtualEcoSystem")}
          /> */}
        </View>

        <View style={styles.buttonContainer}>
          {/* <Button
          title={"Make a new direct debit"}
          onPress={() => navigation.navigate("DirectDebitForm")}
        /> */}
          {/* <TouchableOpacity
            onPress={() => navigation.navigate("DirectDebitForm")}
          >
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
              <Text style={styles.buttonPayNewText}>
                Setup new direct debit
              </Text>
            </LinearGradient>
          </TouchableOpacity> */}
        </View>
      </View>
      <Tagline darkMode={darkMode} />
    </ImageBackground>
  );
};

export default DirectDebits;

const styles = StyleSheet.create({
  comingSoonText: {
    textTransform: "uppercase",
    fontSize: moderateScale(80),
    fontWeight: "bold",
    textAlign: "center",
  },
  mainContainer: {
    flex: 1,
    paddingHorizontal: 20,
    width: "100%",
    alignSelf: "flex-start",
  },
  darkmainContainer: {
    flex: 1,
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "5%",
  },
  buttonPayNew: {
    borderRadius: 10,
    // backgroundColor: GlobalStyles.Color.lightBlack,
    height: 47,
    width: 312.33,
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
    width: 312.33,
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
    marginLeft: 6,
  },
});
