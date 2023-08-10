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

import Tagline from "../components/Tagline";
import Button from "../components/AppButton";
import ErrorMessage from "../components/forms/ErrorMessage";
import AuthContext from "../auth/context";

import Icon from "../components/Icon";

import apiBeneficiaries from "../api/apiBeneficiaries";
import {
  TransactionBody,
  TransactionHead,
  TransactionFooter,
} from "../components/transactions";

import { moderateScale } from "../config/scaling";
import GlobalStyles from "../../GlobalStyles";

const Invoice = ({ navigation }) => {
  const [directDebits, setDirectDebits] = useState([
    {
      name: "Standard subscription",
      date: "1022341",
      amount: "£10",
    },
  ]);
  const { darkMode } = useContext(AuthContext);

  useEffect(() => {
    //loadData()
  }, []);

  const textStyle =
    darkMode === "DARK"
      ? GlobalStyles.Color.white
      : GlobalStyles.Color.secondaryDarkTheme_bg;

  const containerStyle =
    darkMode === "DARK" ? styles.darkmainContainer : styles.mainContainer;

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
        padding: "5%",
        flex: 1,
        justifyContent: "space-between",
        backgroundColor:
          darkMode === "DARK"
            ? GlobalStyles.Color.darkTheme_bg
            : GlobalStyles.Color.lightTheme_bg,
      }}
    >
      {directDebits?.map(({ name, date, amount }, index) => (
        <TransactionBody
          key={index}
          name={`${name}`}
          date={date}
          amount={amount}
          credit={true}
          darkMode={darkMode}
          index={index}
          transLength={directDebits.length}
        />
      ))}
      <View>
        <Button title={"Download"} />
        <Tagline darkMode={darkMode} />
      </View>
    </ImageBackground>
  );
};

export default Invoice;

const styles = StyleSheet.create({
  comingSoonText: {
    textTransform: "uppercase",
    fontSize: moderateScale(80),
    fontWeight: "bold",
    textAlign: "center",
  },
  mainContainer: {
    flex: 1,
    justifyContent: "flex-start",
    alignContent: "center",
  },
  darkmainContainer: {
    flex: 1,
    justifyContent: "flex=start",
    alignContent: "center",
    backgroundColor: GlobalStyles.Color.darkTheme_bg,
  },
});
