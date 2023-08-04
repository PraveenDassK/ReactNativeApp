import React, { useContext, useEffect, useState } from "react";
import {
  Text,
  TextInput,
  StyleSheet,
  View,
  ActivityIndicator,
  FlatList,
  ImageBackground,
  TouchableWithoutFeedback,
  Alert,
} from "react-native";
import { moderateScale } from "../config/scaling";
import GlobalStyles from "../../GlobalStyles";
import AuthContext from "../auth/context";
import PinModal from "../components/PinModal";
import Button from "../components/AppButton";
import RecentTransactions from "../components/RecentTransactions";
import UserIcon from "../components/UserIcon";
import moment from "moment";
import formatCurrency from "../utility/formatCurrency";
import { MaterialIcons } from "@expo/vector-icons";

const TeamsUser = ({ navigation, route }) => {
  const [showPinModal, setShowPinModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const userData = route.params;
  const { darkMode } = useContext(AuthContext);
  const deleteUser = () => {
    navigation.navigate("Teams");
  };
  const date = moment(new Date());
  const formattedDate = date.format("DD MMM YYYY");
  const transactionData = [
    {
      name: "Essential",
      date: formattedDate,
      amount: 5,
      cardNo: " **** 8985 ",
    },
    {
      name: "Essential",
      date: formattedDate,
      amount: 7,
      cardNo: " **** 8985 ",
    },
    {
      name: "Essential",
      date: formattedDate,
      amount: 8,
      cardNo: " **** 8985 ",
    },
    {
      name: "Essential",
      date: formattedDate,
      amount: 5,
      cardNo: " **** 8985 ",
    },
  ];
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
        flex: 1,
        backgroundColor:
          darkMode === "DARK"
            ? GlobalStyles.Color.darkTheme_bg
            : GlobalStyles.Color.lightTheme_bg,
      }}
    >
      {/* <View style={styles.mainContainer}>
        <Text>{userData.name}</Text>
        <RecentTransactions />

        <Button title={"delete"} onPress={() => deleteUser()} />
      </View> */}
      <View
        // style={
        //   darkMode === "DARK" ? styles.darkmainContainer : styles.mainContainer
        // }
        style={{ padding: "6%" }}
      >
        {/* <RecentTransactions
                amount={10}
            /> */}
        <View
          style={{
            marginVertical: "10%",
            backgroundColor:
              darkMode === "DARK" ? "rgba(255,255,255,0.2)" : "white",
            padding: "7%",
            borderRadius: 20,
          }}
        >
          <View style={{ alignItems: "center", marginVertical: "10%" }}>
            <UserIcon
              name={userData?.name}
              darkMode={darkMode}
              showName={false}
              size={80}
            />
          </View>
          <View
            style={{
              //   marginBottom: "5%",
              borderBottomColor: GlobalStyles.Color.borderColor,
              borderBottomWidth: 0.5,
              paddingBottom: "5%",
            }}
          >
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text
                style={
                  darkMode === "DARK" ? styles.darkleftText : styles.leftText
                }
              >
                Name
              </Text>
              <Text
                style={
                  darkMode === "DARK" ? styles.darkrightText : styles.rightText
                }
              >
                Ava Bel
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginVertical: "5%",
              }}
            >
              <Text
                style={
                  darkMode === "DARK" ? styles.darkleftText : styles.leftText
                }
              >
                Email
              </Text>
              <Text
                style={
                  darkMode === "DARK" ? styles.darkrightText : styles.rightText
                }
              >
                Avabel@gmail.com
              </Text>
            </View>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text
                style={
                  darkMode === "DARK" ? styles.darkleftText : styles.leftText
                }
              >
                Phone no.
              </Text>
              <Text
                style={
                  darkMode === "DARK" ? styles.darkrightText : styles.rightText
                }
              >
                +41956328645
              </Text>
            </View>
          </View>
          <View style={{ marginVertical: "3%" }}>
            <Text
              style={
                darkMode === "DARK" ? styles.darkleftText : styles.leftText
              }
            >
              Transactions History
            </Text>
            <TransactionsBody
              formattedDate={formattedDate}
              darkMode={darkMode}
              transactionData={transactionData?.slice(0, 3)}
            />
          </View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text
              style={
                darkMode === "DARK" ? styles.darkleftText : styles.leftText
              }
            >
              Current balance
            </Text>
            <Text
              style={
                darkMode === "DARK" ? styles.darkrightText : styles.rightText
              }
            >
              {formatCurrency(45000, "GBP", false)}
            </Text>
          </View>
          <TouchableWithoutFeedback
            onPress={() => Alert.alert("Function will be add soon")}
          >
            <View
              style={{
                alignItems: "center",
                width: "100%",
                marginTop: "5%",
                flexDirection: "row",
                justifyContent: "center",
                gap: 3,
              }}
            >
              <MaterialIcons
                name="delete"
                size={24}
                color={GlobalStyles.Color.skyblue}
              />
              <Text
                style={{
                  color: GlobalStyles.Color.skyblue,
                  fontFamily: "Montserrat-Regular",
                }}
              >
                Remove
              </Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </View>
    </ImageBackground>
  );
};

export default TeamsUser;

const TransactionsBody = ({ formattedDate, darkMode, transactionData }) => {
  return (
    <>
      {transactionData?.map((eachTrans, i) => {
        return (
          <View style={{ marginVertical: "5%" }} key={i}>
            <View
              style={{ justifyContent: "space-between", flexDirection: "row" }}
            >
              <Text
                style={
                  darkMode === "DARK"
                    ? styles.darktransactionTop
                    : styles.transactionTop
                }
              >
                {eachTrans?.name}
              </Text>
              <Text
                style={
                  darkMode === "DARK"
                    ? styles.darktransactionTop
                    : styles.transactionTop
                }
              >
                {formatCurrency(eachTrans?.amount, "GBP", true)}
              </Text>
            </View>
            <View
              style={{ justifyContent: "space-between", flexDirection: "row" }}
            >
              <Text
                style={
                  darkMode === "DARK"
                    ? styles.darktransactionBottom
                    : styles.transactionBottom
                }
              >
                {eachTrans?.date}
              </Text>
              <Text
                style={
                  darkMode === "DARK"
                    ? styles.darktransactionBottom
                    : styles.transactionBottom
                }
              >
                Card:{eachTrans?.cardNo}
              </Text>
            </View>
          </View>
        );
      })}
    </>
  );
};

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
  leftText: {
    color: GlobalStyles.Color.name_textGray,
    fontFamily: "Montserrat-Regular",
    fontSize: 14,
  },
  darkleftText: {
    color: GlobalStyles.Color.darkGray,
    fontFamily: "Montserrat-Regular",
    fontSize: 14,
  },
  rightText: {
    color: GlobalStyles.Color.black,
    fontSize: 16,
    fontFamily: "Montserrat-SemiBold",
  },
  darkrightText: {
    color: GlobalStyles.Color.white,
    fontSize: 16,
    fontFamily: "Montserrat-SemiBold",
  },
  transactionTop: {
    fontSize: 14,
    fontFamily: "Montserrat",
    color: GlobalStyles.Color.black,
  },
  darktransactionTop: {
    fontSize: 14,
    fontFamily: "Montserrat",
    color: GlobalStyles.Color.white,
  },
  transactionBottom: {
    color: GlobalStyles.Color.darkGray,
    fontFamily: "Montserrat-Regular",
    fontSize: 14,
  },
  darktransactionBottom: {
    color: GlobalStyles.Color.darkGray,
    fontFamily: "Montserrat-Regular",
    fontSize: 14,
  },
});
