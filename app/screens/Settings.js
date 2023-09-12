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
  ImageBackground,
} from "react-native";
import { BlurView } from "expo-blur";
import { LinearGradient } from "expo-linear-gradient";
import * as Clipboard from "expo-clipboard";
import LinearAccountButton from "../components/LinearAccountButton";
import GlobalStyles from "../../GlobalStyles";
import api from "../api/apiCall";
import AuthContext from "../auth/context";
import authStorage from "../auth/storage";
import Button from "../components/AppButton";
import { verticalScale, moderateScale } from "../config/metrics";
import AppText from "../components/Text";
import colors from "../config/colors";
import Tagline from "../components/Tagline";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const Settings = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [account, setAccNum] = useState(null);
  const [sortcode, setSortCode] = useState(null);
  const [fullname, setName] = useState(null);
  const [plan, setPlan] = useState(null);
  const [balance, setBal] = useState(null);
  const [currency, setCurrency] = useState("");
  const [initials, setInitals] = useState(null);
  const [iban, setIban] = useState(null);
  const [bic, setBIC] = useState(null);
  const [status, setStatus] = useState(null);
  const [refreshing, setRefreshing] = useState(false);

  const { userID, accountID, setCurrentUser, darkMode, setDarkMode } =
    useContext(AuthContext);

  /**
   * @dev Loads the data once
   */
  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      loadData();
    });
    // Return the function to unsubscribe from the event so it gets removed on unmount
    return unsubscribe;
  }, [navigation]);

  /**
   * @dev Thislogs the user out
   * @todo Wioe the current user in app.js
   */
  const handleLogout = () => {
    authStorage.removeToken();
    authStorage.removeSignInSetting();
    setCurrentUser(null);
  };

  const handleDark = async () => {
    // const data=authStorage.removeColor();
    //
    if (darkMode === "DARK") {
      authStorage.removeColor();
      setDarkMode(authStorage.getColor());
    } else {
      authStorage.storeColor("DARK");
      setDarkMode(authStorage.getColor());
    }
    //  authStorage.removeColor();
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

    const data = userDetails;
    const accountdata = accountDetails;
    setPlan(subscriptionDetails?.subName);
    setName(accountdata?.customerName);
    setBal(accountdata?.balance);
    setSortCode(accountdata?.identifiers[0]?.sortCode);
    setAccNum(accountdata.identifiers[0]?.accountNumber);
    // setCurrency(data?.currency ? data?.currency : "GBP");
    setCurrency(accountdata?.currency ? accountdata?.currency : "GBP");
    setStatus(accountdata?.status);

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
    Vibration.vibrate();
    alert("Account code copied");
    await Clipboard.setStringAsync(account);
  };
  const copyAddress = async () => {
    Vibration.vibrate();
    alert("Address code copied");
    await Clipboard.setStringAsync(
      "83 Integer House Bre Innovation Campus, Bucknalls Lane, Watford, Hertfordshire,England, WD25 9XX."
    );
  };
  const copySort = async () => {
    Vibration.vibrate();
    alert("Sort code copied");
    await Clipboard.setStringAsync(sortcode);
  };

  const copyIban = async () => {
    Vibration.vibrate();
    alert("IBAN copied");
    await Clipboard.setStringAsync(iban);
  };

  const copyBIC = async () => {
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
    setRefreshing(true);
    setTimeout(() => {
      loadData();
      setRefreshing(false);
    }, 2000);
  }, [refreshing]);

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

  const clipBoardSpacing = (iban) => (iban?.length > 12 ? 2 : 1);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
      style={{
        backgroundColor:
          darkMode === "DARK" ? GlobalStyles.Color.darkTheme_bg : null,
      }}
    >
      <ImageBackground
        style={{ height: 280 }}
        source={
          darkMode === "DARK"
            ? require("../assets/backgrounds/profilepage/Profile-banner1.png")
            : require("../assets/backgrounds/profilepage/Profile-banner1.png")
        }
      >
        <View style={styles.TopImageheader}>
          <View style={styles.backgroundTextContainer}>
            <Text style={styles.backgroundFont}>{fullname}</Text>
            <Text
              style={[
                styles.backgroundFont,
                styles.backgroundSub,
                { marginTop: "1.5%" },
              ]}
            >
              {plan} Subscription
            </Text>
          </View>
          <View style={styles.iconContainer}>
            <TouchableOpacity onPress={() => handleDark()}>
              <DarkMode darkMode={darkMode} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("Notification")}
            >
              <Notification />
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
      <View
        style={{
          backgroundColor:
            darkMode === "DARK"
              ? GlobalStyles.Color.darkTheme_bg
              : GlobalStyles.Color.white,
          // flex: 1,
          // marginBottom: "30%",
          // justifyContent: "flex-end",
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          marginTop: -20,
        }}
      >
        <View style={{ padding: "5%" }}>
          <BlurView tint="light" intensity={60} style={styles.blurView}>
            <AppText
              style={[
                styles.subText,
                darkMode === "DARK" ? styles.customTitle1 : styles.customTitle1,
              ]}
            >
              Account Details
            </AppText>
            <View style={styles.accountDetailsRow}>
              <View style={{ flex: 1 }}>
                <AppText
                  style={[
                    styles.divStart,
                    darkMode === "DARK"
                      ? styles.darkcustomTitle
                      : styles.customTitle,
                  ]}
                >
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
                <AppText
                  style={[
                    styles.divEnd,
                    darkMode === "DARK"
                      ? styles.darkcustomTitle
                      : styles.customTitle,
                  ]}
                >
                  {currency}
                </AppText>
              </View>
            </View>

            <View style={styles.accountDetailsRow}>
              <View style={{ flex: 1 }}>
                <AppText
                  style={[
                    styles.divStart,
                    darkMode === "DARK"
                      ? styles.darkcustomTitle
                      : styles.customTitle,
                  ]}
                >
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
                  flex: clipBoardSpacing(iban),
                  justifyContent: "flex-end",
                  alignItems: "flex-end",
                }}
              >
                <AppText
                  style={[
                    styles.divEnd,
                    darkMode === "DARK"
                      ? styles.darkcustomTitle
                      : styles.customTitle,
                  ]}
                >
                  {account}
                </AppText>
              </View>
            </View>

            <View style={styles.accountDetailsRow}>
              <View style={{ flex: 1 }}>
                <AppText
                  style={[
                    styles.divStart,
                    darkMode === "DARK"
                      ? styles.darkcustomTitle
                      : styles.customTitle,
                  ]}
                >
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
                  flex: clipBoardSpacing(iban),
                  justifyContent: "flex-end",
                  alignItems: "flex-end",
                }}
              >
                <AppText
                  style={[
                    styles.divEnd,
                    darkMode === "DARK"
                      ? styles.darkcustomTitle
                      : styles.customTitle,
                  ]}
                >
                  {sortcode}
                </AppText>
              </View>
            </View>

            <View style={styles.accountDetailsRow}>
              <View style={{ flex: 1 }}>
                <AppText
                  style={[
                    styles.divStart,
                    darkMode === "DARK"
                      ? styles.darkcustomTitle
                      : styles.customTitle,
                  ]}
                >
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
                  flex: clipBoardSpacing(iban),
                  justifyContent: "flex-end",
                  alignItems: "flex-end",
                }}
              >
                <AppText
                  style={[
                    styles.divEnd,
                    darkMode === "DARK"
                      ? styles.darkcustomTitle
                      : styles.customTitle,
                  ]}
                >
                  {iban}
                </AppText>
              </View>
            </View>

            <View style={styles.accountDetailsRow}>
              <View style={{ flex: 1 }}>
                <AppText
                  style={[
                    styles.divStart,
                    darkMode === "DARK"
                      ? styles.darkcustomTitle
                      : styles.customTitle,
                  ]}
                >
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
                  flex: clipBoardSpacing(iban),
                  justifyContent: "flex-end",
                  alignItems: "flex-end",
                }}
              >
                <AppText
                  style={[
                    styles.divEnd,
                    darkMode === "DARK"
                      ? styles.darkcustomTitle
                      : styles.customTitle,
                  ]}
                >
                  {bic}
                </AppText>
              </View>
            </View>
            <View style={styles.accountDetailsRow1}>
              <View style={{ flex: 1 }}>
                <AppText
                  style={[
                    styles.divStart,
                    darkMode === "DARK"
                      ? styles.darkcustomTitle
                      : styles.customTitle,
                  ]}
                >
                  Bank Address
                </AppText>
              </View>

              <View style={[styles.splitDiv]}>
                <Pressable style={styles.helloParent} onPress={copyAddress}>
                  <Image
                    style={{
                      resizeMode: "contain",
                      height: "25%",
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
                <AppText
                  style={[
                    // styles.divEnd,
                    darkMode === "DARK"
                      ? styles.darkcustomTitleAddress
                      : styles.customTitleAddress,
                    { textAlign: "left" },
                  ]}
                >
                  {`83 Integer House Bre Innovation Campus, Bucknalls Lane,Watford, Hertfordshire,England,\n WD25 9XX.`}
                  {/* Press to Copy */}
                </AppText>
              </View>
            </View>
            <View style={styles.accountDetailsRow}>
              <View style={{ flex: 1 }}>
                <AppText
                  style={[
                    styles.divStart,
                    darkMode === "DARK"
                      ? styles.darkcustomTitle
                      : styles.customTitle,
                  ]}
                >
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
                  <AppText
                    style={[
                      styles.divEnd,
                      darkMode === "DARK"
                        ? styles.darkcustomTitle
                        : styles.customTitle,
                    ]}
                  >
                    {status}
                  </AppText>
                </View>
              </View>
            </View>
          </BlurView>
        </View>
        <TouchableOpacity style={styles.button}>
          <LinearAccountButton
            title="Account details"
            // style={styles.boxShadow}
            transform={{ textTransform: "none" }}
            onPress={() => navigation.navigate("AccountSettings")}
            darkMode={darkMode}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <LinearAccountButton
            title="Login and Security"
            transform={{ textTransform: "none" }}
            onPress={() => navigation.navigate("SecurityAndPrivacy")}
            darkMode={darkMode}
          />
        </TouchableOpacity>

        {/* <TouchableOpacity style={styles.button}>
          <LinearAccountButton
            title="Carbonyte labs"
            transform={{ textTransform: "none" }}
            onPress={() => navigation.navigate("CarbonyteLabs")}
            darkMode={darkMode}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <LinearAccountButton
            title="Devices"
            transform={{ textTransform: "none" }}
            onPress={() => navigation.navigate("Devices")}
            darkMode={darkMode}
          />
        </TouchableOpacity> */}

        {/* <TouchableOpacity style={styles.button}>
          <LinearAccountButton
            title="Subscriptions"
            transform={{ textTransform: "none" }}
            onPress={() => navigation.navigate("Subscriptions")}
            darkMode={darkMode}
          />
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.button}>
          <LinearAccountButton
            title="Invoices"
            transform={{ textTransform: "none" }}
            onPress={() => navigation.navigate("Invoices")}
            darkMode={darkMode}
          />
        </TouchableOpacity> */}

        <TouchableOpacity style={styles.button}>
          <LinearAccountButton
            title="Contact us"
            transform={{ textTransform: "none" }}
            onPress={() => navigation.navigate("AboutUs")}
            darkMode={darkMode}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <LinearAccountButton
            title="FAQs"
            textTransform="none"
            onPress={() => navigation.navigate("Faq")}
            darkMode={darkMode}
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
          <AppText
            style={{ marginLeft: "2.5%", color: GlobalStyles.Color.skyblue }}
          >
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
            marginBottom: "25%",
          }}
          onPress={() => navigation.navigate("TermsAndConditions")}
        >
          <AppText style={{ color: GlobalStyles.Color.skyblue }}>
            Terms & Conditions
          </AppText>
        </Pressable>
      </View>
    </ScrollView>
  );
};
const DarkMode = ({ darkMode }) => (
  <View style={styles.iconStyle}>
    {darkMode === "DARK" ? (
      <Ionicons name="ios-sunny-outline" color="white" size={24} />
    ) : (
      <Ionicons name="moon" color="white" size={24} />
    )}
  </View>
);
const Notification = () => (
  <View style={styles.iconStyle}>
    <View style={styles.iconBadgeContainer}>
      <Text style={styles.iconBadgeNumber}>1</Text>
    </View>
    <MaterialCommunityIcons name="bell-outline" color="white" size={24} />
  </View>
);

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: GlobalStyles.DivContainer.backgroundColor,
    height: GlobalStyles.DivContainer.height,
    width: "100%",
    flex: GlobalStyles.DivContainer.flex,
  },
  customTitle: {
    // fontWeight: Platform.OS === "android" ? "normal" : "700",
    fontFamily: "Montserrat-Medium",
    fontSize: moderateScale(14),
    color: GlobalStyles.Color.secondaryDarkTheme_bg,
  },
  darkcustomTitle: {
    // fontWeight: Platform.OS === "android" ? "normal" : "700",
    fontFamily: "Montserrat-Medium",
    fontSize: moderateScale(14),
    color: GlobalStyles.Color.white,
  },
  darkcustomTitleAddress: {
    // fontWeight: Platform.OS === "android" ? "normal" : "700",
    fontFamily: "Montserrat-Medium",
    fontSize: 10,
    color: GlobalStyles.Color.white,
  },
  customTitleAddress: {
    // fontWeight: Platform.OS === "android" ? "normal" : "700",
    fontFamily: "Montserrat-Medium",
    fontSize: 10,
    color: GlobalStyles.Color.secondaryDarkTheme_bg,
  },
  customTitle1: {
    fontFamily: "Montserrat",
    fontSize: moderateScale(14),
    color: GlobalStyles.Color.secondaryDarkTheme_bg,
  },
  darkcustomTitle1: {
    fontFamily: "Montserrat",
    fontSize: moderateScale(14),
    color: GlobalStyles.Color.white,
  },
  titleTextRow: {
    marginTop: GlobalStyles.Title.marginTop,
    width: GlobalStyles.DivContainer.width,
    marginLeft: GlobalStyles.DivContainer.marginLeft,
  },

  titleText: {
    fontSize: moderateScale(GlobalStyles.Title.fontSize),
    // fontWeight: GlobalStyles.Title.fontWeight,
  },

  subText: {
    fontSize: moderateScale(GlobalStyles.RowText.fontSize),
    // fontWeight: GlobalStyles.RowText.fontWeight,
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
  accountDetailsRow1: {
    flex: 1,
    flexDirection: "row",
    width: "100%",
    // height: 35,
    alignItems: "center",
  },
  splitDiv: {
    flexDirection: "row",
    flex: 1,
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
    marginVertical: "1%",
  },
  blurView: {
    backgroundColor: "transparent",
    borderRadius: 20,
    marginBottom: "0%",
    overflow: "hidden",
    marginTop: "-30%",
    paddingHorizontal: "4%",
    paddingTop: "7%",
  },
  bottomBorder: {
    borderBottomWidth: 0.2,
    borderColor: GlobalStyles.Color.darkGray,
  },
  backgroundFont: {
    color: GlobalStyles.Color.white,
    fontFamily: "Montserrat",
    fontSize: moderateScale(18),
  },
  backgroundTextContainer: {
    // marginTop: "15%",
    // paddingHorizontal: "5%",
    width: "70%",
  },
  backgroundSub: {
    fontFamily: "Montserrat-Regular",
    fontSize: moderateScale(14),
  },
  center: {
    justifyContent: "center",
    alignItems: "center",
  },
  containerSpacing: {
    marginVertical: "5%",
  },
  container: {
    backgroundColor: colors.white,
    borderRadius: 20,
    width: "100%",
    padding: "5%",
  },
  containerHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: "5%",
  },
  containerHeaderText: {
    color: GlobalStyles.Color.green_total,
    fontSize: moderateScale(24),
    fontFamily: "Montserrat",
    lineHeight: 40,
  },
  containerItems: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    fontFamily: "Montserrat",
    fontSize: moderateScale(18),

    color: GlobalStyles.Color.lightBlack,
  },
  darkheader: {
    fontFamily: "Montserrat",
    fontSize: moderateScale(18),

    color: GlobalStyles.Color.white,
  },
  itemSpacing: {
    marginTop: "2.5%",
  },
  navigateContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  navigateText: {
    color: GlobalStyles.Color.skyblue,
    fontSize: moderateScale(14),
    fontFamily: "Montserrat",
  },
  projectContainer: {
    flexDirection: "row",
    paddingBottom: "5%",
  },
  projectImage: {
    height: 74,
    width: 110,
    borderRadius: 10,
  },
  projectHeader: {
    color: GlobalStyles.Color.darkGray,
    fontSize: moderateScale(10),
  },
  subHeader: {
    fontFamily: "Montserrat",
    fontSize: moderateScale(14),
  },
  iconContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 5,
  },
  TopImageheader: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
    marginTop: "10%",
  },
  iconStyle: {
    height: 40,
    width: 40,
    // borderWidth: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    borderRadius: 20,
    backgroundColor: "rgba(0, 0, 0, .25)",
  },
  iconBadgeContainer: {
    position: "absolute",
    backgroundColor: "red",
    height: 10,
    width: 10,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    right: 8,
    top: 8,
    zIndex: 5,
  },
  iconBadgeNumber: {
    fontSize: moderateScale(6),
    color: colors.white,
    fontWeight: "900",
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
    fontSize: moderateScale(14),
    marginLeft: 6,
  },
});

export default Settings;
