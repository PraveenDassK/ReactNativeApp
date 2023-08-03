import React, { useContext, useEffect, useState } from "react";
import {
  Text,
  TextInput,
  StyleSheet,
  View,
  TouchableOpacity,
  Pressable,
  FlatList,
} from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import { Dropdown } from "react-native-element-dropdown";
import Button from "../components/AppButton";
import ErrorMessage from "../components/forms/ErrorMessage";
import AuthContext from "../auth/context";
import { LinearGradient } from "expo-linear-gradient";
import Icon from "../components/Icon";

import apiBeneficiaries from "../api/apiBeneficiaries";
import {
  TransactionBody,
  TransactionHead,
  TransactionFooter,
} from "../components/transactions";

import { moderateScale } from "../config/scaling";
import GlobalStyles from "../../GlobalStyles";

const DirectDebits = ({ navigation }) => {
  const [directDebits, setDirectDebits] = useState([
    {
      name: "Netflix",
      date: "1687339",
      amount: 5,
    },
  ]);
  const { darkMode } = useContext(AuthContext);
  useEffect(() => {
    //loadData()
  }, []);

  return (
    <View
      style={
        darkMode === "DARK" ? styles.darkmainContainer : styles.mainContainer
      }
    >
      <View>
        <Text
          style={{
            color:
              darkMode === "DARK"
                ? GlobalStyles.Color.white
                : GlobalStyles.Color.secondaryDarkTheme_bg,
          }}
        >
          Direct debits
        </Text>
        <View style={styles.containerSpacing}>
          <TransactionHead
            headerTitle="Carbon transactions"
            darkMode={darkMode}
          />
          {directDebits?.map(({ name, date, amount }) => (
            <TransactionBody
              name={`${name}`}
              date={date}
              token={amount}
              darkMode={darkMode}
            />
          ))}
          <TransactionFooter
            number={directDebits.length}
            total={5}
            // onSee={() => navigation.navigate("VirtualEcoSystem")}
          />
        </View>
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
              Make a new direct debit"
            </Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
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
    justifyContent: "center",
    alignContent: "center",
  },
  darkmainContainer: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: GlobalStyles.Color.darkTheme_bg,
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop:"5%"
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
