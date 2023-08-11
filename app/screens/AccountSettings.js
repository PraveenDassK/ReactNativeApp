import React, { useContext, useEffect, useState, Keyboard } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import {
  ActivityIndicator,
  Text,
  StyleSheet,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";

import AppText from "../components/Text";

import apiCall from "../api/apiCall";

import api from "../api/api_list";
import AuthContext from "../auth/context";

import GlobalStyles from "../../GlobalStyles";
import { FlatList } from "react-native-gesture-handler";
import Tagline from "../components/Tagline";
const ITEMS = [
  {
    id: 1,
    title: "statements",
    route: "Transactions",
  },
  {
    id: 2,
    title: "limits",
    route: "SpendingLimit",
  },
  {
    id: 3,
    title: "verification",
    route: "AccountLetter",
  },
];

const AccountSettings = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState("");
  const [balance, setBalance] = useState(0);
  const [subscriptions, setSubscriptions] = useState(null);

  const { settings, accountID, version, darkMode } = useContext(AuthContext);

  const insets = useSafeAreaInsets();

  //Calls the API once during load
  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      loadData();
    });
  }, []);

  const loadData = async () => {
    setIsLoading(true);
    const customer = await api.GetAccount(accountID);
    const userData = await apiCall.GetUsersSubscriptions("CC1");

    const data = customer.data.details;
    setSubscriptions(userData.subName);
    setName(data.name);
    setBalance(data.availableBalance);
    setIsLoading(false);
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
          size={"large"}
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
          ? require("../assets/backgrounds/profilepage/spendingLimit-dark.png")
          : require("../assets/backgrounds/profilepage/spendingLimit-white.png")
      }
      resizeMode="contain"
      imageStyle={{
        bottom: "-65%", // Whatever offset you want from the bottom
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
      <View style={{ padding: "8%" }}>
        <View
          style={
            darkMode === "DARK"
              ? styles.darkitemsContainer
              : styles.itemsContainer
          }
        >
          <View
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginVertical: "10%",
            }}
          >
            <AppText
              style={{ fontSize: 40, color: GlobalStyles.Color.skyblue }}
            >
              £{balance}
            </AppText>
          </View>

          <FlatList
            data={ITEMS}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity
                  onPress={() => navigation.navigate(item.route)}
                >
                  <View style={styles.item}>
                    <View style={styles.itemTitle}>
                      <AppText
                        style={{
                          textTransform: "capitalize",
                          fontFamily: "Montserrat",
                          color:
                            darkMode === "DARK"
                              ? GlobalStyles.Color.white
                              : GlobalStyles.Color.darkTheme_bg,
                          fontSize: 14,
                        }}
                      >
                        {item.title}
                      </AppText>
                    </View>
                    <View style={styles.itemChevron}>
                      <MaterialCommunityIcons
                        name="chevron-right"
                        size={20}
                        color="blue"
                      />
                    </View>
                  </View>
                </TouchableOpacity>
              );
            }}
            ItemSeparatorComponent={() => (
              <View
                style={{
                  width: "100%",
                  height: 0.3,
                  backgroundColor: "black",
                  opacity: 0.2,
                }}
              />
            )}
          />
        </View>
      </View>
      <Tagline darkMode={darkMode} />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  accountContainer: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",

    backgroundColor: GlobalStyles.Color.backgroundColor,
  },
  accountTypeContainer: {
    width: "80%",

    alignItems: "flex-start",
    marginTop: 5,
  },
  item: {
    backgroundColor: "transparent",
    width: "100%",
    height: 60,
    flexDirection: "row",
    borderTopColor: GlobalStyles.Color.borderColor,
    borderTopWidth: 1,
  },
  itemsContainer: {
    backgroundColor: "white",
    width: "100%",
    borderRadius: 15,
  },
  darkitemsContainer: {
    backgroundColor: GlobalStyles.Color.secondaryDarkTheme_bg,
    width: "100%",
    borderRadius: 15,
  },
  itemTitle: {
    flex: 2,
    justifyContent: "center",
    paddingLeft: 15,
  },
  itemChevron: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "center",
    paddingRight: 15,
  },
  nameBalanceContainer: {
    flexDirection: "row",
    width: "80%",
  },
  nameBalanceItem: {
    flex: 1,
  },
});

export default AccountSettings;
