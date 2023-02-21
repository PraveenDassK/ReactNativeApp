import React, { useContext, useEffect, useState } from "react";
import { Text, StyleSheet, View, Image, Pressable, Switch, Button, ScrollView } from "react-native";
import GlobalStyles from "../../GlobalStyles";
import AuthContext from "../auth/context";
import Screen from "../components/Screen";
import api from "../api/api_list";
import apiCall from "../api/api";
import { horizontalScale, verticalScale, moderateScale } from "../config/scaling";
import { useFocusEffect } from "@react-navigation/native";

import SinglePie from "../components/SinglePie";

const SpendingLimit = ({ navigation, route }) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const authContext = useContext(AuthContext);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  const [monthLim, setMonLim] = useState(0);
  const [spend, setSpend] = useState(0);
  const [percent, setPercent] = useState(0);

  //Calls the API once during load
  useEffect(() => {
    loadData();
  }, []);

  //Calls the API once during load
  useFocusEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      loadData();
    });
  });

  //Gets the data for the user
  const loadData = async () => {
    //Gets the data from the api
    const response = await api.GetLimit(authContext.accountID);
    //Then isolate the useful dataa
    const data = response.data.details;
    console.log(data);

    //Gets the monthly spend
    const transactionRequest = await apiCall.GetAllTransactionsThisMonth();
    let spendTotal = transactionRequest.total;

    //If there is a limit
    //50 is the amount spent
    if (data.monthlyAmount > 0) {
      // const percentamount = Math.floor((spendTotal / data.monthlyAmount) * 100) + "%";
      const percentamount = Math.floor((spendTotal / data.monthlyAmount));
      setPercent(percentamount);
      setIsEnabled(true);
    } else {
      setPercent(0);
    }

    setMonLim(data.monthlyAmount);
    setSpend(spendTotal);
    console.log(data.monthlyAmount);
  };

  /**
   * @todo set spending limit to 0 on trigger
   */
  const spendingToggle = () => {
    if (isEnabled) {
      setIsEnabled(false);
      setPercent(0);
      setMonLim(0);
    } else {
      setIsEnabled(true);
      navigation.navigate("SetLimit");
      console.log(setIsEnabled);
    }
  };

  return (
  <ScrollView>
    <View style={styles.mainContainer}>
      <View style={styles.titleTextRow}>
        <Text style={styles.titleText}>Spending Limit</Text>
      </View>

      <View style={styles.subTextRow}>
        <Text style={styles.subText}>The limit determines the amount that can be spent or withdrawn using this card per month</Text>
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
          <Image style={{ flex: 2, height: 35, width: 35 }} resizeMode="contain" source={require("../assets/meter-1.png")} />
          <View style={{ flex: 6, marginLeft: "5%" }}>
            <Text style={{ fontWeight: "700", fontSize: 16 }}>Card Spending limit</Text>
            <Text style={{ fontSize: 10 }}>The spend & withdrawal cap</Text>
          </View>
          <Pressable style={{ height: 50, width: "auto" }} onPress={() => console.log("?")} title="Set Limit">
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
        <View style={{ flex:1, marginTop: "2.5%", justifyContent: "center", alignItems: "center" }}>
          <Text style={{ fontSize: 25, fontWeight: "700" }}>£{spend.toFixed(2)}</Text>
          <Text style={{ fontSize: 14, marginTop: "1%" }}>Spent this month</Text>
          <Text style={{ fontSize: 25, marginTop: "5%", fontWeight: "700" }}>£{monthLim.toFixed(2)}</Text>
          <Text style={{ fontSize: 14, marginTop: "1%" }}>Current spend limit</Text>
          {monthLim - spend >= 0 ? (<View style={{marginTop: "5%"}} >
            {/* <View style={{ maxWidth: "90%", marginTop: "2.5%", height: 35, borderRadius: 15 }} width={percent} backgroundColor="#F6F5F8">
              <Text style={styles.barText}>test</Text>
            </View> */}
            
            <SinglePie  percent={percent} />
            </View>
          ) : (<View >
            {/* <View style={{ maxWidth: "90%", marginTop: "2.5%", height: 35, borderRadius: 15 }} width={percent} backgroundColor="red">
              <Text style={styles.barText}>£{(monthLim - spend).toFixed(2)}</Text>
            </View> */}
            <SinglePie  percent={percent}/>
            </View>
          )}
          
          <View style={{position: "absolute", flex: 1, justifyContent: "center", alignItems: "center", top: 300}}>
          {monthLim - spend >= 0 ? (
            <Text style={{ fontSize: 25, color: "blue", fontWeight: "700" }}> £{(monthLim - spend).toFixed(2)}</Text>
          )
            : 
          (
            <Text style={{ fontSize: 25, marginTop: "2.5%", color: "red", fontWeight: "700" }}> £{(monthLim - spend).toFixed(2)}</Text>
          )}
          <Text style={{ fontSize: 14, marginTop: "1%" }}>Spendable funds left</Text>
          </View>
        </View>
      <View style={{ width: "100%", flex: 1, justifyContent: "center", alignItems: "center", marginBottom: "5%" }}>
          <Image style={{ height: 35, width: 35 }} resizeMode="contain" source={require("../assets/card.png")} />
          {isEnabled ? <View style={{flexDirection: "row", }}>
            <Text style={{ fontSize: 10, fontWeight: "700", opacity: 0.3, marginRight: "1%"}}>Limit is £{monthLim.toFixed(2)}</Text>
            <Text onPress={() => navigation.navigate("SetLimit")} style={{fontSize: 10, fontWeight: "700",color: "blue", opacity: 1}}>Change limit</Text>
          </View> : <Text style={{ fontSize: 10, marginTop: "2.5%", fontWeight: "700" }}>Limit is toggled off</Text>}
       </View>
      </View>
      <View style={{width: "100%", height: 35}}/>
    </View>
    </ScrollView>
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
