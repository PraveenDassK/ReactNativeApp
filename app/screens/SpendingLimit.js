import React, { useContext, useEffect, useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
  Pressable,
  Switch,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import GlobalStyles from "../../GlobalStyles";
import AuthContext from "../auth/context";

import api from "../api/api_list";
import apiCall from "../api/apiCall";

import { useFocusEffect } from "@react-navigation/native";

import SinglePie from "../components/SinglePie";

import storage from "../auth/storage";
import KeyboardAvoider from "../components/KeyboardAvoider";

const SpendingLimit = ({ navigation, route }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isEnabled, setIsEnabled] = useState(false);
  const authContext = useContext(AuthContext);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  const [monthLim, setMonLim] = useState(0);
  const [spend, setSpend] = useState(0);
  const [percent, setPercent] = useState();

  useEffect(() => {}, []);

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
    const response = await apiCall.GetLimits(authContext.accountID);
    const spendTotal = response === null ? 0 : response.spend;
    const monthlyAmount = response === null ? 0 : response.monthlyAmount;

    console.log(response);
    setMonLim(monthlyAmount);
    setSpend(spendTotal);
    setPercent(spendTotal / monthlyAmount);
    setIsLoading(false);
  };

  /**
   * @todo set spending limit to 0 on trigger
   * @amount variable is a patch as the server does not accept 0 as an argument
   */
  const spendingToggle = async () => {
    if (isEnabled) {
      const amount = "3000";
      const response = await api.SetLimit(authContext.accountID, amount);
      console.log("setLimit", response);
      setIsEnabled(false);

      loadData();
    } else {
      setIsEnabled(true);
      storage.storeLimits(true);
      navigation.navigate("SetLimit");
      console.log(setIsEnabled);
    }
  };

  if (isLoading) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <ActivityIndicator size="large" color="black" />
      </View>
    );
  }

  return (
    <KeyboardAvoider>
      <ScrollView>
        <View style={styles.mainContainer}>
          <View style={styles.titleTextRow}>
            <Text style={styles.titleText}>Spending Limit</Text>
          </View>

          <View style={styles.subTextRow}>
            <Text style={styles.subText}>
              The limit determines the amount that can be spent or withdrawn
              using this card per month
            </Text>
          </View>

          <View
            style={{
              width: "90%",
              marginLeft: "5%",
              backgroundColor: "white",
              borderRadius: 15,

              marginTop: "15%",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                width: "100%",
                justifyContent: "space-between",
                alignItems: "center",
                height: 60,
                padding: "5%",
              }}
            >
              <Image
                style={{ flex: 2, height: 35, width: 35 }}
                resizeMode="contain"
                source={require("../assets/meter-1.png")}
              />
              <View style={{ flex: 6, marginLeft: "5%" }}>
                <Text style={{ fontWeight: "700", fontSize: 16 }}>
                  Card Spending limit
                </Text>
                <Text style={{ fontSize: 10 }}>The spend & withdrawal cap</Text>
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
                flex: 1,
                marginTop: "2.5%",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: 28, fontWeight: "700" }}>
                £{spend.toFixed(2)}
              </Text>
              <Text style={{ fontSize: 14, marginTop: "1%" }}>
                Spent this month
              </Text>
              <Text
                style={{ fontSize: 28, marginTop: "5%", fontWeight: "700" }}
              >
                £{monthLim.toFixed(2)}
              </Text>
              <Text style={{ fontSize: 14, marginTop: "1%" }}>
                Current spend limit
              </Text>
              {monthLim - spend && percent >= 0 ? (
                <View style={{ marginTop: "5%" }}>
                  {/* <View style={{ maxWidth: "90%", marginTop: "2.5%", height: 35, borderRadius: 15 }} width={percent} backgroundColor=GlobalStyles.Color.backgroundColor>
              <Text style={styles.barText}>test</Text>
            </View> */}

                  <SinglePie percent={percent} />
                </View>
              ) : (
                <View>
                  {/* <View style={{ maxWidth: "90%", marginTop: "2.5%", height: 35, borderRadius: 15 }} width={percent} backgroundColor="red">
              <Text style={styles.barText}>£{(monthLim - spend).toFixed(2)}</Text>
            </View> */}
                  <SinglePie percent={percent} />
                </View>
              )}

              <View
                style={{
                  position: "absolute",
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                  top: 300,
                }}
              >
                {monthLim - spend >= 0 ? (
                  <Text
                    style={{ fontSize: 28, color: "blue", fontWeight: "700" }}
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
                      fontWeight: "700",
                    }}
                  >
                    {" "}
                    £{(monthLim - spend).toFixed(2)}
                  </Text>
                )}
                <Text
                  style={{
                    fontSize: 14,
                    marginTop: "1%",
                    fontWeight: "700",
                    opacity: 0.3,
                  }}
                >
                  Spendable funds left
                </Text>
              </View>
            </View>
            <View
              style={{
                width: "100%",
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                marginBottom: "5%",
              }}
            >
              <Image
                style={{ height: 35, width: 35 }}
                resizeMode="contain"
                source={require("../assets/card.png")}
              />
              {monthLim ? (
                <View style={{ flexDirection: "row" }}>
                  <Text
                    style={{
                      fontSize: 10,
                      fontWeight: "700",
                      opacity: 0.3,
                      marginRight: "1%",
                    }}
                  >
                    Limit is £{monthLim.toFixed(2)}
                  </Text>
                  <Text
                    onPress={() => navigation.navigate("SetLimit")}
                    style={{
                      fontSize: 10,
                      fontWeight: "700",
                      color: "blue",
                      opacity: 1,
                    }}
                  >
                    Change limit
                  </Text>
                </View>
              ) : (
                <Text
                  style={{
                    fontSize: 10,
                    marginTop: "2.5%",
                    fontWeight: "700",
                    opacity: 0.3,
                  }}
                >
                  Limit is toggled off
                </Text>
              )}
            </View>
          </View>
          <View style={{ width: "100%", height: 35 }} />
        </View>
      </ScrollView>
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
    fontSize: GlobalStyles.RowText.fontSize,
    fontWeight: GlobalStyles.RowText.fontWeight,
  },

  subTextRow: {
    marginTop: GlobalStyles.RowText.marginTop,
    width: GlobalStyles.DivContainer.width,
    marginLeft: GlobalStyles.DivContainer.marginLeft,
    fontColor: GlobalStyles.RowText.fontColor,
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
});

export default SpendingLimit;
