import React, { useContext, useEffect, useState } from "react";
import {
  Text,
  TextInput,
  StyleSheet,
  View,
  TouchableOpacity,
  Pressable,
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
import TransactionBody from "../components/transHistory/TransactionBody";
import apiBeneficiaries from "../api/apiBeneficiaries";
// import {
//   TransactionBody,
//   TransactionHead,
//   TransactionFooter,
// } from "../components/transactions";
import Tagline from "../components/Tagline";
import { moderateScale } from "../config/scaling";
import GlobalStyles from "../../GlobalStyles";

const DirectDebits = ({ navigation }) => {
  const [directDebits, setDirectDebits] = useState([
    {
      name: "Netflix",
      date: "1687339",
      amount: 5,
      description: "HHwe",
    },
    {
      name: "Netflix",
      date: "1687339",
      amount: 5,
      description: "HHwe",
    },
    {
      name: "Netflix",
      date: "1687339",
      amount: 5,
      description: "HHwe",
    },
    {
      name: "Netflix",
      date: "1687339",
      amount: 5,
      description: "HHwe",
    },
  ]);
  const { darkMode } = useContext(AuthContext);
  useEffect(() => {
    //loadData()
  }, []);

  return (
    <ImageBackground
      source={
        darkMode === "DARK"
          ? require("../assets/dashboardDark/DashboardBottom.jpg")
          : require("../assets/backgrounds/Dashboard.jpg")
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
        <View
          style={{
            backgroundColor:
              darkMode === "DARK"
                ? "rgba(255,255,255,0.2)"
                : GlobalStyles.Color.white,
            // paddingVertical: "10%",
            borderRadius: 30,
            width: "100%",
            marginVertical: "5%",
          }}
        >
          {/* <TransactionHead
            headerTitle="Carbon transactions"
            darkMode={darkMode}
          /> */}
          {directDebits?.map(({ name, date, amount, description }, index) => (
            <TransactionBody
              key={index}
              name={`${name}`}
              index={index}
              date={date}
              token={amount}
              amount={amount}
              darkMode={darkMode}
              lastElement={directDebits.length - 1}
              description={name}
            />
          ))}
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
          <TouchableOpacity
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
              {/* <Ionicons
                                name="add-circle-outline"
                                size={20}
                                color={GlobalStyles.Color.white}
                              /> */}
              <Text style={styles.buttonPayNewText}>
                Setup new direct debit
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
      <Tagline darkMode={darkMode}/>
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
