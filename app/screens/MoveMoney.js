import React, { Fragment, useContext, useEffect, useState } from "react";
import { useIsFocused } from "@react-navigation/native";
import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  ActivityIndicator,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import AuthContext from "../auth/context";
import apiCall from "../api/apiCall";
import CountdownBar from "../components/CountdownBar";
import StepProgress from "../components/SteeperCounter";
import GlobalStyles from "../../GlobalStyles";
const MoveMoney = ({ navigation }) => {
  const [accountList, setAccountList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { userID, customerDetails, accountID, darkMode } =
    useContext(AuthContext);
  const isFocused = useIsFocused();

  useEffect(() => {
    loadData();
  }, [isFocused]);

  /**
   * @dev This loads the account data
   */
  const loadData = async () => {
    try {
      setIsLoading(true);
      const accountDataResponse = await apiCall.GetAllAccounts(userID);
      console.log(accountDataResponse);
      setAccountList(accountDataResponse);
      setIsLoading(false);
    } catch {
      setIsLoading(false);
    }
  };

  /**
   * @dev This takes the selected destination account data and passes it to another screen
   */
  const selectAccount = (account) => {
    console.log("selectAccount", account?.customerId);
    const requestObj = {
      sourceAccountId: "",
      destination: {
        type: "SCAN",
        id: account?.customerId,
        accountNumber: account?.identifiers?.[0]?.accountNumber,
        sortCode: account?.identifiers?.[0]?.sortCode,
        // balance: account?.balance,
        name: account?.name,
        phoneNumber: "",
      },
      currency: "GBP",
      amount: 0,
      reference: "Transfer",
    };
    // console.log(requestObj);
    navigation.navigate("MoveMoneyAmount", requestObj);
  };

  /**
   * @dev If the page is loading show the loading icon
   */
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

  // item separator

  return (
    <View
      style={{
        backgroundColor:
          darkMode === "DARK"
            ? GlobalStyles.Color.secondaryDarkTheme_bg
            : GlobalStyles.Color.backgroundColorOg,
            flex: 1,

      }}
    >
      <FlatList
        data={accountList}
        keyExtractor={(accountList, index) => accountList.id}
        // numColumns={1}
        showsVerticalScrollIndicator={false}
        // contentContainerStyle={styles.flatListContent}
        // style={styles.accountContainer}
        ListHeaderComponent={
          <View
            style={{
              backgroundColor:
                darkMode === "DARK"
                  ? GlobalStyles.Color.darkTheme_bg
                  : GlobalStyles.Color.backgroundColorOg,
              paddingTop: 20,
            }}
          >
            <StepProgress currentStep={1} darkMode={darkMode} />
            <View
              style={
                darkMode === "DARK"
                  ? styles.darkpaymentContainer
                  : styles.paymentContainer
              }
            >
              <Text
                style={
                  darkMode === "DARK"
                    ? styles.darkcontainerHeading
                    : styles.containerHeading
                }
              >
                Send to
              </Text>
            </View>
          </View>
        }
        // ItemSeparatorComponent={() => (
        //   <View
        //     style={{
        //       // width: "100%",
        //       height: 1,
        //       backgroundColor:
        //         darkMode === "DARK"
        //           ? GlobalStyles.Color.darkGray
        //           : GlobalStyles.Color.borderColor,
        //       color:
        //         darkMode === "DARK"
        //           ? GlobalStyles.Color.darkGray
        //           : GlobalStyles.Color.borderColor,
        //       marginHorizontal: "5%",
        //     }}
        //   />
        // )}
        renderItem={(account) => {
          return (
            <TouchableOpacity
              onPress={() => selectAccount(account.item)}
              style={{
                backgroundColor:
                  darkMode === "DARK" ? GlobalStyles.Color.secondaryDarkTheme_bg : GlobalStyles.Color.white,
                // marginHorizontal: "5%",
              }}
            >
              <View style={styles.itemContainer}>
                <Image
                  source={require("../assets/cardLion.png")}
                  style={{ height: 30, width: 30 }}
                  resizeMode="contain"
                />
                <View>
                  <Text
                    style={
                      darkMode === "DARK"
                        ? styles.darkitemContent
                        : styles.itemContent
                    }
                  >
                    {account.item.id}
                  </Text>
                  <Text
                    style={
                      darkMode === "DARK"
                        ? styles.darkitemContent
                        : styles.itemContent
                    }
                  >
                    {account.item.balance}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  overallAccountContainer: {
    backgroundColor: GlobalStyles.Color.white,
    paddingHorizontal: 20,
    paddingVertical: 30,
    borderRadius: 20,
    marginVertical: 27,
  },
  darkoverallAccountContainer: {
    backgroundColor: GlobalStyles.Color.secondaryDarkTheme_bg,
    paddingHorizontal: 20,
    paddingVertical: 30,
    borderRadius: 20,
    marginVertical: 27,
  },
  containerHeading: {
    fontFamily: "Montserrat",
    fontSize: 14,
    color: GlobalStyles.Color.black,
  },
  darkcontainerHeading: {
    fontFamily: "Montserrat",
    fontSize: 14,
    color: GlobalStyles.Color.white,
  },
  accountContainer: {
    // marginVertical: 20,
    // borderWidth: 1,
    borderRadius: 10,
    borderColor: GlobalStyles.Color.borderColor,
  },
  flatListContent: {
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
  itemContainer: {
    paddingHorizontal: 22,
    paddingVertical: 17,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    gap: 20,
    alignItems: "center",
  },
  itemContent: {
    fontFamily: "Montserrat",
    fontSize: 14,
    color: GlobalStyles.Color.black,
  },
  darkitemContent: {
    fontFamily: "Montserrat",
    fontSize: 14,
    color: GlobalStyles.Color.white,
  },
  paymentContainer: {
    backgroundColor: GlobalStyles.Color.white,
    paddingHorizontal: 20,
    paddingVertical: 34,
    // borderTopStartRadius: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  darkpaymentContainer: {
    backgroundColor: GlobalStyles.Color.secondaryDarkTheme_bg,
    paddingHorizontal: 20,
    paddingVertical: 34,
    // borderTopStartRadius: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});

export default MoveMoney;
