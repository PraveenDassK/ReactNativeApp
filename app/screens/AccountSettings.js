import React, { useContext, useEffect, useState, Keyboard } from "react";
import { Text, StyleSheet, View, Image, Pressable } from "react-native";
import api from "../api/api_list";
import AuthContext from "../auth/context";

import GlobalStyles from "../../GlobalStyles";

const AccountSettings = ({ navigation }) => {
  const [name, setName] = useState("");
  const [balance, setBalance] = useState(0);
  const authContext = useContext(AuthContext);
  const { settings } = useContext(AuthContext);

  //Calls the API once during load
  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      loadData();
    });
  }, []);

  const loadData = async () => {
    const customer = await api.GetAccount(authContext.accountID);
    const data = customer.data.details;
    setName(data.name);
    setBalance(data.availableBalance);
    console.log(data);
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.titleTextRow}>
        <Text style={styles.titleText}>{name}</Text>
      </View>

      <View style={styles.subTextRow}>
        <Text style={styles.subText}>TODO ADD CARD TIER</Text>
      </View>

      <Text style={{ marginLeft: "10%", marginTop: "15%" }}>Manage</Text>
      <View style={{ marginTop: "5%", width: "80%", marginLeft: "10%", backgroundColor: "white", borderRadius: 15, height: "auto" }}>
        <Pressable onPress={() => navigation.navigate("Transactions")}>
          <View style={{ width: "100%", height: 50, flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
            <Text style={{ fontWeight: "700", marginLeft: "10%" }}>Statements</Text>
            <Image style={{ height: 25, resideMode: "contain", marginRight: "5%" }} source={require("../assets/blueArrow.png")} />
          </View>
        </Pressable>
        <View style={{ width: "100%", backgroundColor: "#F6F5F8", height: 1 }} />

        <Pressable onPress={() => navigation.navigate("SpendingLimit")}>
          <View style={{ width: "100%", height: 50, flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
            <Text style={{ fontWeight: "700", marginLeft: "10%" }}>Limits</Text>
            <Image style={{ height: 25, resideMode: "contain", marginRight: "5%" }} source={require("../assets/blueArrow.png")} />
          </View>
        </Pressable>
        <View style={{ width: "100%", backgroundColor: "#F6F5F8", height: 1 }} />

        <Pressable onPress={() => navigation.navigate("AccountLetter")}>
          <View style={{ width: "100%", height: 50, flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
            <Text style={{ fontWeight: "700", marginLeft: "10%" }}>Account Verification Number</Text>
            <Image style={{ height: 25, resideMode: "contain", marginRight: "5%" }} source={require("../assets/blueArrow.png")} />
          </View>
        </Pressable>
        <View style={{ width: "100%", backgroundColor: "#F6F5F8", height: 1 }} />
      </View>
    </View>
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
    marginLeft: GlobalStyles.Title.marginLeft,
    width: GlobalStyles.Title.width,
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
    marginLeft: GlobalStyles.RowText.marginLeft,
    width: "80%",
    fontColor: GlobalStyles.RowText.fontColor,
  },
});

export default AccountSettings;
