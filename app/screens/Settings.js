import React, { useContext, useEffect, useState, useCallback } from "react";
import {
  RefreshControl,
  Image,
  StyleSheet,
  Text,
  View,
  Pressable,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
  Vibration,
} from "react-native";

import * as Clipboard from "expo-clipboard";

import GlobalStyles from "../../GlobalStyles";
import api from "../api/apiCall";
import AuthContext from "../auth/context";
import authStorage from "../auth/storage";
import Button from "../components/AppButton";
import { verticalScale } from "../config/metrics";
import AppText from "../components/Text";
import colors from "../config/colors";

const Settings = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [account, setAccNum] = useState(null);
  const [sortcode, setSortCode] = useState(null);
  const [fullname, setName] = useState(null);
  const [plan, setPlan] = useState(null);
  const [balance, setBal] = useState(null);
  const [currency, setCurrency] = useState(null);
  const [initials, setInitals] = useState(null);
  const [iban, setIban] = useState(null);
  const [bic, setBIC] = useState(null);
  const [status, setStatus] = useState(null);
  const [refreshing, setRefreshing] = useState(false);

  const { userID, accountID, setCurrentUser } = useContext(AuthContext);

  /**
   * @dev Loads the data once
   */
  useEffect(() => {
    loadData();
  }, [accountID]);

  /**
   * @dev Thislogs the user out
   * @todo Wioe the current user in app.js
   */
  const handleLogout = () => {
    authStorage.removeToken();
    authStorage.removeSignInSetting();
    setCurrentUser(null);
  };

  /**
   * @dev This loads all of the data for this page
   * @todo Add validation here to check if the data exists
   */
  const loadData = async () => {
    //First set loading to true to show loading animation
    setIsLoading(true);
    if (!accountID) return;

    const userDetails = await api.GetAllAccounts(userID);
    const accountDetails = await api.GetAccount(accountID);
    const subscriptionDetails = await api.GetUsersSubscriptions("CC1");

    console.log("hello", userDetails, accountDetails, subscriptionDetails);
    const data = userDetails;
    const accountdata = accountDetails;

    setPlan(subscriptionDetails.subName);
    setName(accountdata.customerName);
    setBal(accountdata.balance);
    setSortCode(accountdata.identifiers[0].sortCode);
    setAccNum(accountdata.identifiers[0].accountNumber);
    setCurrency(data.currency ? data.currency : "GBP");
    setStatus(accountdata.status);

    if (accountdata.identifiers[0].iban === null) {
      setIban("Unavailable");
    } else {
      setIban(accountdata.identifiers[0].iban);
    }

    if (accountdata.identifiers[0].bic === null) {
      setBIC("Unavailable");
    } else {
      setBIC(accountdata.identifiers[0].bic);
    }

    let name = accountdata.customerName;
    let names = name.split(" "),
      initialsHold = names[0].substring(0, 1).toUpperCase();

    if (names.length > 1) {
      initialsHold += names[names.length - 1].substring(0, 1).toUpperCase();
    }
    setInitals(initialsHold);
    setIsLoading(false);
  };

  /**
   * @dev Copies the associated item
   * @todo Consolidate into one function
   */
  const copyAccount = async () => {
    console.log("Copied");
    Vibration.vibrate();
    alert("Account code copied");
    await Clipboard.setStringAsync(account);
  };

  const copySort = async () => {
    console.log("Copied");
    Vibration.vibrate();
    alert("Sort code copied");
    await Clipboard.setStringAsync(sortcode);
  };

  const copyIban = async () => {
    console.log("Copied");
    Vibration.vibrate();
    alert("IBAN copied");
    await Clipboard.setStringAsync(iban);
  };

  const copyBIC = async () => {
    console.log("Copied");
    Vibration.vibrate();
    alert("BIC copied");
    await Clipboard.setStringAsync(bic);
  };

  React.useEffect(() => {
    const swipeRight = navigation.addListener("state", (event) => {});
    // Return the function to unsubscribe from the event so it gets removed on unmount
    return swipeRight;
  }, [navigation]);

  const onRefresh = useCallback(() => {
    console.log("1st refresh");
    setRefreshing(true);
    setTimeout(() => {
      console.log("2nd refresh");
      loadData();
      setRefreshing(false);
    }, 2000);
  }, [refreshing]);

  if (isLoading) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <ActivityIndicator size="large" color="black" />
      </View>
    );
  }

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <View style={styles.mainContainer}>
        <View style={[styles.titleTextRow, { flex: 1, flexDirection: "row" }]}>
          <View style={[{ justifyContent: "center" }]}>
            <AppText style={[styles.titleText, styles.customTitle]}>
              {fullname}
            </AppText>
            <AppText
              style={[
                styles.subText,
                styles.customTitle,
                { marginTop: verticalScale(1), opacity: 0.4 },
              ]}
            >
              {plan} Subscription
            </AppText>
          </View>
          <View
            style={[
              { flex: 1, justifyContent: "center", alignItems: "flex-end" },
            ]}
          >
            <View
              style={[
                {
                  width: 80,
                  height: 80,
                  borderRadius: 40,
                  backgroundColor: "white",
                  justifyContent: "center",
                  alignItems: "center",
                },
              ]}
            >
              <AppText style={[{ fontSize: 28 }]}>{initials}</AppText>
            </View>
          </View>
        </View>

        <View style={styles.subTextRow}>
          <AppText
            style={[
              styles.subText,
              styles.customTitle,
              { fontWeight: "normal" },
            ]}
          >
            Account Details
          </AppText>
        </View>

        <View style={[styles.accountDetailsDiv]}>
          <View style={styles.accountDetailsRow}>
            <View style={{ flex: 1 }}>
              <AppText style={[styles.divStart, styles.customTitle]}>
                Currency
              </AppText>
            </View>

            <View style={[styles.splitDiv]}>
              <Image
                style={{
                  resizeMode: "contain",
                  height: "50%",
                  width: 30,
                  marginRight: "5%",
                }}
                source={require("../assets/image-ukflag.png")}
              />
              <AppText style={[styles.divEnd, styles.customTitle]}>
                {currency}
              </AppText>
            </View>
          </View>

          <View style={styles.accountDetailsRow}>
            <View style={{ flex: 1 }}>
              <AppText style={[styles.divStart, styles.customTitle]}>
                Account
              </AppText>
            </View>

            <View style={[styles.splitDiv]}>
              <Pressable style={styles.helloParent} onPress={copyAccount}>
                <Image
                  style={{
                    resizeMode: "contain",
                    height: "50%",
                    width: 30,
                    marginRight: "5%",
                  }}
                  source={require("../assets/icon-materialcontentcopy.png")}
                />
              </Pressable>
            </View>

            <View
              style={{
                flex: 1,
                justifyContent: "flex-end",
                alignItems: "flex-end",
              }}
            >
              <AppText style={[styles.divEnd, styles.customTitle]}>
                {account}
              </AppText>
            </View>
          </View>

          <View style={styles.accountDetailsRow}>
            <View style={{ flex: 1 }}>
              <AppText style={[styles.divStart, styles.customTitle]}>
                Sort Code
              </AppText>
            </View>

            <View style={styles.splitDiv}>
              <Pressable style={styles.helloParent} onPress={copySort}>
                <Image
                  style={{
                    resizeMode: "contain",
                    height: "50%",
                    width: 30,
                    marginRight: "5%",
                  }}
                  source={require("../assets/icon-materialcontentcopy.png")}
                />
              </Pressable>
            </View>

            <View
              style={{
                flex: 1,
                justifyContent: "flex-end",
                alignItems: "flex-end",
              }}
            >
              <AppText style={[styles.divEnd, styles.customTitle]}>
                {sortcode}
              </AppText>
            </View>
          </View>

          <View style={styles.accountDetailsRow}>
            <View style={{ flex: 1 }}>
              <AppText style={[styles.divStart, styles.customTitle]}>
                IBAN
              </AppText>
            </View>

            <View style={styles.splitDiv}>
              <Pressable style={styles.helloParent} onPress={copyIban}>
                <Image
                  style={{
                    resizeMode: "contain",
                    height: "50%",
                    width: 30,
                    marginRight: "5%",
                  }}
                  source={require("../assets/icon-materialcontentcopy.png")}
                />
              </Pressable>
            </View>
            <View
              style={{
                flex: 1,
                justifyContent: "flex-end",
                alignItems: "flex-end",
              }}
            >
              <AppText style={[styles.divEnd, styles.customTitle]}>
                {iban}
              </AppText>
            </View>
          </View>

          <View style={styles.accountDetailsRow}>
            <View style={{ flex: 1 }}>
              <AppText style={[styles.divStart, styles.customTitle]}>
                BIC
              </AppText>
            </View>

            <View style={styles.splitDiv}>
              <Pressable style={styles.helloParent} onPress={copyBIC}>
                <Image
                  style={{
                    resizeMode: "contain",
                    height: "50%",
                    width: 30,
                    marginRight: "5%",
                  }}
                  source={require("../assets/icon-materialcontentcopy.png")}
                />
              </Pressable>
            </View>
            <View
              style={{
                flex: 1,
                justifyContent: "flex-end",
                alignItems: "flex-end",
              }}
            >
              <AppText style={[styles.divEnd, styles.customTitle]}>
                {bic}
              </AppText>
            </View>
          </View>

          <View style={styles.accountDetailsRow}>
            <View style={{ flex: 1 }}>
              <AppText style={[styles.divStart, styles.customTitle]}>
                Status
              </AppText>
            </View>
            <View style={styles.splitDiv}>
              <View
                style={{
                  flex: 1,
                  justifyContent: "flex-end",
                  alignItems: "flex-end",
                }}
              >
                <AppText style={[styles.divEnd, styles.customTitle]}>
                  {status}
                </AppText>
              </View>
            </View>
          </View>
        </View>

        <TouchableOpacity style={[styles.button]}>
          <Button
            title="My plan"
            style={[styles.boxShadow]}
            transform={{ textTransform: "none" }}
            onPress={() => navigation.navigate("ChooseCardsElite")}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Button
            title="Account"
            style={styles.boxShadow}
            transform={{ textTransform: "none" }}
            onPress={() => navigation.navigate("AccountSettings")}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Button
            title="Settings"
            style={styles.boxShadow}
            transform={{ textTransform: "none" }}
            onPress={() => navigation.navigate("SecurityAndPrivacy")}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Button
            title="Carbonyte labs"
            style={styles.boxShadow}
            transform={{ textTransform: "none" }}
            onPress={() => navigation.navigate("CarbonyteLabs")}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Button
            title="Devices"
            style={styles.boxShadow}
            transform={{ textTransform: "none" }}
            onPress={() => navigation.navigate("Devices")}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Button
            title="Contact us"
            style={styles.boxShadow}
            transform={{ textTransform: "none" }}
            onPress={() => navigation.navigate("AboutUs")}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Button
            title="FAQs"
            style={styles.boxShadow}
            textTransform="none"
            onPress={() => navigation.navigate("Faq")}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Button
            title="Close account"
            textColor="black"
            color="danger"
            style={styles.boxShadow}
            transform={{ textTransform: "none" }}
            onPress={() => navigation.navigate("DeleteAccount")}
          />
        </TouchableOpacity>

        <Pressable
          style={{
            height: 50,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            width: "90%",
            marginLeft: "5%",
          }}
          onPress={handleLogout}
        >
          <Image
            style={styles.iconOpenAccountLogout}
            resizeMode="cover"
            source={require("../assets/icon-openaccountlogout.png")}
          />
          <AppText style={{ marginLeft: "2.5%", color: "blue" }}>
            Log out
          </AppText>
        </Pressable>

        <Pressable
          style={{
            height: 50,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            width: "90%",
            marginLeft: "5%",
          }}
          onPress={() => navigation.navigate("TermsAndConditions")}
        >
          <AppText style={{ color: "blue" }}>Terms & Conditions</AppText>
        </Pressable>
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
  customTitle: {
    fontWeight: Platform.OS === "android" ? "normal" : "700",
    fontFamily: "Helvetica",
    color: "black",
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
    marginTop: verticalScale(50),
    width: GlobalStyles.DivContainer.width,
    marginLeft: GlobalStyles.DivContainer.marginLeft,
    fontColor: GlobalStyles.RowText.fontColor,
  },

  accountDetailsDiv: {
    width: "90%",
    backgroundColor: "white",

    marginLeft: "5%",
    borderRadius: 15,
    marginTop: "1%",
    marginBottom: "5%",
    paddingHorizontal: "5%",
    paddingVertical: "2.5%",
  },

  accountDetailsRow: {
    flex: 1,
    flexDirection: "row",
    width: "100%",
    height: 35,
    alignItems: "center",
  },

  splitDiv: {
    flexDirection: "row",
    flex: 2,
    justifyContent: "flex-end",

    height: "100%",
    alignItems: "center",
  },

  divEnd: {
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  divStart: {
    marginLeft: "0%",
  },

  button: {
    width: "90%",
    marginLeft: "5%",
    height: "auto",
  },
});

export default Settings;
