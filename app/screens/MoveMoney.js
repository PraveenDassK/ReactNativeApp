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

const MoveMoney = ({ navigation }) => {
  const [accountList, setAccountList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { userID, customerDetails, accountID } = useContext(AuthContext);
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
  console.log(accountList);

  /**
   * @dev This takes the selected destination account data and passes it to another screen
   */
  const selectAccount = (account) => {
    console.log(account.balance, "this is account");
    const requestObj = {
      sourceAccountId: "",
      destination: {
        type: "SCAN",
        id: account.id,
        accountNumber: account.identifiers[0].accountNumber,
        sortCode: account.identifiers[0].sortCode,
        balance: account.balance,
        name: account.name,
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
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <ActivityIndicator size="large" color="black" />
      </View>
    );
  }

  // item separator

  return (
    <View>
      <View>
        {/* <CountdownBar pageCount={3} currentPage={1} /> */}
        <StepProgress currentStep={1} />

        <View style={styles.overallAccountContainer}>
          <Text style={styles.containerHeading}>Send to</Text>
          <View>
            <FlatList
              data={accountList}
              keyExtractor={(accountList, index) => accountList.id}
              numColumns={1}
              contentContainerStyle={styles.flatListContent}
              style={styles.accountContainer}
              ItemSeparatorComponent={() => (
                <View
                  style={{
                    width: "100%",
                    height: 1,
                    backgroundColor: "#EBEBEB",
                    color: "#EBEBEB",
                  }}
                />
              )}
              renderItem={(account) => {
                return (
                  <TouchableOpacity onPress={() => selectAccount(account.item)}>
                    <View style={styles.itemContainer}>
                      <Image
                        source={require("../assets/cardLion.png")}
                        style={{ height: 30, width: 30 }}
                        resizeMode="contain"
                      />
                      <View>
                        <Text style={styles.itemContent}>
                          {account.item.id}
                        </Text>
                        <Text style={styles.itemContent}>
                          {account.item.balance}
                        </Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                );
              }}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  overallAccountContainer: {
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 20,
    paddingVertical: 30,
    borderRadius: 20,
    marginVertical: 27,
  },
  containerHeading: {
    fontFamily: "Montserrat",
    fontSize: 14,
    color: "#000000",
  },
  accountContainer: {
    marginVertical: 20,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#EBEBEB",
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
    color: "#000000",
  },
});

export default MoveMoney;
