import React, { useContext, useEffect, useState, useCallback} from "react";
import {
  RefreshControl,
  Image,
  StyleSheet,
  Text,
  View,
  Pressable,
  Clipboard,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { PanGestureHandler } from "react-native-gesture-handler";
import Animated, {
  Easing,
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

import GlobalStyles from "../../GlobalStyles";
import api from "../api/api_list";
import AuthContext from "../auth/context";
import authStorage from "../auth/storage";
import Button from "../components/Button";

const Settings = ({ navigation }) => {
  const [account, setAccNum] = useState(null);
  const [sortcode, setSortCode] = useState(null);
  const [fullname, setName] = useState(null);
  const [plan, setPlan] = useState(null);
  const [balance, setBal] = useState(null);
  const [currency, setCurrency] = useState(null);
  const [initials, setInitals] = useState(null);
  const [iban, setIban] = useState(null);
  const [status, setStatus] = useState(null);
  const [refreshing, setRefreshing] = useState(false);

  const authContext = useContext(AuthContext);
  const { userID, accountID, setCurrentUser } = useContext(AuthContext);

  const x = useSharedValue(0);

  useEffect(() => {
    loadData();
  }, []);

  const handleLogout = () => {
    setCurrentUser(null);
    authStorage.removeToken();
    authStorage.removeSignInSetting();
  };

  const loadData = async () => {
    const response = await api.GetAccountByCustomer(userID);
    const accountresponse = await api.GetAccount(accountID);
    const data = response.data;
    const accountdata = accountresponse.data.details;
    setPlan("Current Account");
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

    let name = accountdata.customerName;
    let names = name.split(" "),
      initialsHold = names[0].substring(0, 1).toUpperCase();

    if (names.length > 1) {
      initialsHold += names[names.length - 1].substring(0, 1).toUpperCase();
    }
    setInitals(initialsHold);
  };

  const copyAccount = () => {
    console.log("Copied");
    alert("Account code copied");
    Clipboard.setString(account);
  };

  const copySort = () => {
    console.log("Copied");
    alert("Sort code copied");
    Clipboard.setString(sortcode);
  };

  const copyIban = () => {
    console.log("Copied");
    alert("Iban copied");
    Clipboard.setString(iban);
  };

  React.useEffect(() => {
    const swipeRight = navigation.addListener("state", (event) => {
      console.log("event listner", event.data.state);
    });

    // Return the function to unsubscribe from the event so it gets removed on unmount
    return swipeRight;
  }, [navigation]);

  const fn = () => {
    navigation.navigate("Account");
  };

  const swipeRightGestureHandler = useAnimatedGestureHandler({
    onStart: () => {
      console.log("On Start");
    },
    onActive: (event) => {
      console.log("On Active");
      x.value = event.translationX;
    },
    onEnd: (event) => {
      // 'worklet';
      console.log("On End", event.velocityX);
      // if (y.value < -height / 2 || event.velocityY < -500) {
      //   runOnJS(fn)()
      //   y.value = withTiming(0, { easing: Easing.linear});

      // } else {
      //   // reset
      //   y.value = withTiming(0, {easing: Easing.linear});
      // }
    },
  });

  const animatedContainerStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: withTiming(x.value, {
          duration: 100,
          easing: Easing.linear,
        }),
      },
    ],
  }));

  const onRefresh = useCallback(() => {
    console.log("1st refresh")
    setRefreshing(true);
    setTimeout(() => {
      console.log("2nd refresh")
      loadData()
      setRefreshing(false);
    }, 2000);
  }, [refreshing]);

  return (
    <ScrollView
    refreshControl={
      <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
    }
    >
      <View style={styles.mainContainer}>
        <View style={styles.titleTextRow}>
          <Text style={styles.titleText}>{fullname}</Text>
        </View>

        <View style={styles.subTextRow}>
          <Text style={styles.subText}>{plan}</Text>
        </View>

        <View style={styles.subTextRow}>
          <Text style={styles.subText}>Account Details</Text>
        </View>

        <View style={styles.accountDetailsDiv}>
          <View style={styles.accountDetailsRow}>
            <Text style={styles.divStart}>Currency</Text>
            <View style={styles.splitDiv}>
              <Image
                style={{
                  resizeMode: "contain",
                  height: "50%",
                  width: 30,
                  marginRight: "5%",
                }}
                source={require("../assets/image-ukflag.png")}
              />
              <Text style={styles.divEnd}>{currency}</Text>
            </View>
          </View>

          <View style={styles.accountDetailsRow}>
            <Text style={styles.divStart}>Account</Text>
            <View style={styles.splitDiv}>
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

              <Text style={styles.divEnd}>{account}</Text>
            </View>
          </View>

          <View style={styles.accountDetailsRow}>
            <Text style={styles.divStart}>Sort Code</Text>
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

              <Text style={styles.divEnd}>{sortcode}</Text>
            </View>
          </View>

          <View style={styles.accountDetailsRow}>
            <Text style={styles.divStart}>Iban</Text>
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

              <Text style={styles.divEnd}>{iban}</Text>
            </View>
          </View>

          <View style={styles.accountDetailsRow}>
            <Text style={styles.divStart}>Status</Text>
            <View style={styles.splitDiv}>
              <Text style={styles.divEnd}>{status}</Text>
            </View>
          </View>
        </View>

        <TouchableOpacity style={styles.button}>
          <Button
            title="My Plan"
            color="babyBlue"
            onPress={() => navigation.navigate("ChooseCardsElite")}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Button
            title="Account"
            color="babyBlue"
            onPress={() => navigation.navigate("AccountSettings")}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Button
            title="Security & Privacy"
            color="babyBlue"
            onPress={() => navigation.navigate("SecurityAndPrivacy")}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Button
            title="About Us"
            color="babyBlue"
            onPress={() => navigation.navigate("AboutUs")}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
                  <Button
                    title="Faq"
                    color="babyBlue"
                    onPress={() => navigation.navigate("Faq")}
                  />
            </TouchableOpacity>

          <TouchableOpacity style={styles.button}>
          <Button
            title="Reset app pin"
            color="babyBlue"
            onPress={() => navigation.navigate("PinSetApp")}
          />
        </TouchableOpacity>

        <Pressable style={{height: 50, flexDirection: "row", justifyContent: "center", alignItems: "center", width: "90%", marginLeft: "5%"}} onPress={handleLogout}>

          <Image
            style={styles.iconOpenAccountLogout}
            resizeMode="cover"
            source={require("../assets/icon-openaccountlogout.png")}
          />
          <Text style={{marginLeft: "2.5%", color: "blue"}}>Log out</Text>
        </Pressable>

        <Pressable
          style={{height: 50, flexDirection: "row", justifyContent: "center", alignItems: "center", width: "90%", marginLeft: "5%"}}
          onPress={() => navigation.navigate("TermsAndConditions")}
        >
          <Text style={{color: "blue"}}>Terms & Conditions</Text>
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

  accountDetailsDiv: {
    width: "90%",
    backgroundColor: "white",
    height: "auto",
    marginLeft: "5%",
    borderRadius: 15,
    marginTop: "5%",
  },

  accountDetailsRow: {
    flexDirection: "row",
    width: "100%",
    height: 35,
    alignItems: "center",
  },

  splitDiv: {
    flexDirection: "row",
    flex: 9,
    justifyContent: "flex-end",
    height: "100%",
    alignItems: "center",
  },

  divEnd: {
    justifyContent: "flex-end",
    alignItems: "flex-end",
    marginRight: "5%",
  },
  divStart: {
    marginLeft: "5%",
  },

  button: {
    width: "90%",
    marginLeft: "5%",
    height: "auto",
  },
});

export default Settings;
