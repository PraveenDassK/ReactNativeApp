import React, { useEffect, useState, useContext } from "react";
import {
  RefreshControl,
  Text,
  StyleSheet,
  Image,
  View,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
  Platform,
  Dimensions,
  TouchableWithoutFeedback,
  Vibration,
  useWindowDimensions,
  ImageBackground,
} from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import AuthContext from "../auth/context";
import apiCall from "../api/apiCall";
import AccountDeatils from "../components/AccountDetails";
import SquareIcon from "../components/ButtonIcon";
import GlobalStyles from "../../GlobalStyles";
import RecentTransactions from "../components/RecentTransactions";
import CarbonSpendGraph from "../components/CarbonSpendGraph";
import VirtualPlanet from "../components/VirtualPlanet";
import XeroDashboard from "../components/XeroDashboard";
import ReferNow from "../components/ReferNow";
import MarketPlace from "../components/MarketPlaceComing";
import colors from "../config/colors";
import Tagline from "../components/Tagline";
import authStorage from "../auth/storage";
import apiLogin from "../api/apiLogin";
const HomeScreenPersonal = ({ navigation, route }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [showPinModal, setShowPinModal] = useState(true);
  const [accountBalance, setBalance] = useState([]);
  const [bannerName, setbannerName] = useState();
  const [userImpact, setUserImpact] = useState([]);
  const [userData, setuserData] = useState([]);

  const { accountID, customerDetails, userID,darkMode, setDarkMode, accountDetails } =
    useContext(AuthContext);
    
  const [iconShow, setIconShow] = useState(false);
  useEffect(() => {
    loadData();
  }, [accountID, customerDetails,userID]);

  /**
   * @dev This loads the data from the Backend
   * @notice Loading is set at the start of this function
   * @dev if any call fails then no data is set and the loading
   */
  const loadData = async () => {
    try {
      setIsLoading(true);
      console.log(customerDetails,"this is cc")
      const getUserID = await apiLogin.GetCustomerDetails(customerDetails);
      setuserData(getUserID?.accountDetails);
      setbannerName(getUserID?.customerDetails);
      // const userDataReturn = await apiCall.GetAllAccounts("C122BMS7");
      const userImpactReturn = await apiCall.GetUserImpact(customerDetails);
      let colorMode = await authStorage.getColor();
      setDarkMode(colorMode);
      // setuserData(userDataReturn);
      setUserImpact(userImpactReturn);
      setIsLoading(false);
    } catch {
      setIsLoading(false);
      return;
    }
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
        backgroundColor:
          darkMode === "DARK"
            ? GlobalStyles.Color.darkTheme_bg
            : GlobalStyles.Color.lightTheme_bg,
      }}
    >
      <ScrollView
        nestedScrollEnabled={true}
        showsVerticalScrollIndicator={false}
      >
        <ImageBackground
          source={
            darkMode === "DARK"
              ? require("../assets/dashboardDark/dashboardTop.jpg")
              : require("../assets/dashboardDark/dashboardTop.jpg")
          }
          style={styles.backgroundImage}
        >
          <View style={styles.header}>
            <View>
              <Text style={styles.welcomText}>Welcome back,</Text>
              <Text style={styles.nameText}>{`${bannerName?.firstName} ${bannerName?.lastName}`} !</Text>
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

        <View style={styles.AccountDetailsCard}>
          <AccountDeatils
            userData={userData}
            userImpact={userImpact}
            handlePress={() => navigation.navigate("SendMoney")}
            accountBalance={accountBalance}
            setBalance={setBalance}
            accountDetails = {accountDetails}
            accountId={accountID}
          />
        </View>

        <View
          style={
            darkMode === "DARK" ? styles.darkMainContent : styles.mainContent
          }
        />
        {/* <ImageBackground
          source={require("../assets/backgrounds/Dashboard.jpg")}
          resizeMode="contain"
          imageStyle={{
            bottom: "-90%", // Whatever offset you want from the bottom
          }}
          style={{
            width: "100%",
          }}
        > */}
        <View
          style={{
            backgroundColor: `${darkMode === "DARK" ? "transparent" : "transparent"
              }`,
          }}
        >
          {!iconShow && (
            <View style={styles.buttonContainer}>
              <SquareIcon
                name={"Move money"}
                image={"bank-transfer"}
                onPress={() => navigation.navigate("MoveMoney")}
              />
              <SquareIcon
                name={"Send money"}
                image={"send-o"}
                onPress={() => navigation.navigate("SendMoney")}
              />
              <SquareIcon
                name={"Cards"}
                image={"credit-card"}
                onPress={() => navigation.navigate("MyCards")}
              />
              <SquareIcon
                name={"More"}
                image={"dots-horizontal"}
                onPress={() => setIconShow(!iconShow)}
              />
            </View>
          )}
          {iconShow && (
            <View>
              <View style={styles.buttonContainer}>
                <SquareIcon
                  name={"Move money"}
                  image={"bank-transfer"}
                  onPress={() => navigation.navigate("MoveMoney")}
                />
                <SquareIcon
                  name={"Send money"}
                  image={"send"}
                  onPress={() => navigation.navigate("SendMoney")}
                />
                <SquareIcon
                  name={"Cards"}
                  image={"credit-card"}
                  onPress={() => navigation.navigate("MyCards")}
                />
                <SquareIcon
                  name={"Switch accounts"}
                  image={"account-switch"}
                  onPress={() => navigation.navigate("SwitchAccounts")}
                />
              </View>
              <View style={styles.buttonContainer}>
                <SquareIcon
                  name={"Payment link"}
                  image={"link-variant"}
                  onPress={() => navigation.navigate("PaymentLink")}
                />
                <SquareIcon
                  name={"Subscriptions"}
                  image={"newspaper-variant-outline"}
                  onPress={() => navigation.navigate("Subscriptions")}
                />
                <SquareIcon
                  name={"Set limits"}
                  image={"car-speed-limiter"}
                  onPress={() => navigation.navigate("SpendingLimit")}
                />
                <SquareIcon
                  name={"Transactions"}
                  image={"bank-outline"}
                  onPress={() => navigation.navigate("Transactions")}
                />
              </View>
              <View style={styles.buttonContainer}>
                <SquareIcon
                  name={"Teams"}
                  image={"account-group"}
                  onPress={() => navigation.navigate("Teams")}
                />
                <SquareIcon
                  name={"Invoices"}
                  image={"file-document-multiple"}
                  onPress={() => navigation.navigate("Invoices")}
                />
                <SquareIcon
                  name={"Direct debits"}
                  image={"directions"}
                  onPress={() => navigation.navigate("DirectDebits")}
                />
                <SquareIcon
                  name={"Less"}
                  image={"dots-horizontal"}
                  onPress={() => setIconShow(!iconShow)}
                />
              </View>
            </View>
          )}
          <View style={styles.recentTransactionsContainer}>
            <RecentTransactions />
          </View>
          <View style={{ margin: 25 }}>
            <Text
              style={
                darkMode === "DARK"
                  ? styles.darkheadingText
                  : styles.headingText
              }
            >
              Your Carbon Footprints
            </Text>
            <CarbonSpendGraph
              handleViewMore={() => navigation.navigate("ChooseCardsStandard5")}
            />
          </View>
          <View style={{ margin: 25 }}>
            <Text
              style={
                darkMode === "DARK"
                  ? styles.darkheadingText
                  : styles.headingText
              }
            >
              Your Virtual Planet Summary
            </Text>
            <VirtualPlanet
              treeData={userImpact}
              handleVirtual={() => navigation.navigate("VirtualEcoSystem")}
              darkMode={darkMode}
            />
          </View>
          <View style={{ margin: 25 }}>
            <Text
              style={
                darkMode === "DARK"
                  ? styles.darkheadingText
                  : styles.headingText
              }
            >
              Carbonyte + Xero
            </Text>
            <XeroDashboard darkMode={darkMode} />
          </View>
          <View style={{ margin: 25 }}>
            <ReferNow navigation={navigation} />
          </View>
          <View style={{ margin: 25 }}>
            <MarketPlace
              handleMarket={() => navigation.navigate("Marketplace")}
            />
          </View>

          <View style={{ display: "flex", alignItems: "center" }}>
            <Tagline darkMode={darkMode} />
          </View>
        </View>
        {/* </ImageBackground> */}
        {/* </View> */}
      </ScrollView>
    </ImageBackground>
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
  header: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
    marginTop: 30,
  },
  backgroundImage: {
    height: 270,
    width: "100%",
  },
  iconContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 5,
  },
  welcomText: {
    fontSize: 12,
    color: GlobalStyles.Color.white,
    fontFamily: "Montserrat-Medium",
  },
  nameText: {
    fontSize: 14,
    fontFamily: "Montserrat",
    color: GlobalStyles.Color.white,
  },
  mainContent: {
    backgroundColor: GlobalStyles.Color.backgroundColorOg,
    height: 30,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: -20,
    zIndex: 1,
  },
  darkMainContent: {
    backgroundColor: GlobalStyles.Color.darkTheme_bg,
    height: 30,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: -20,
    zIndex: 1,
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
    fontSize: 6,
    color: colors.white,
    fontWeight: "900",
  },
  AccountDetailsCard: {
    position: "absolute",
    top: 130,
    width: "100%",
    padding: 20,
    zIndex: 2,
  },
  buttonContainer: {
    marginTop: "2.5%",
    top: "35%",
    width: GlobalStyles.DivContainer.width,
    marginLeft: GlobalStyles.DivContainer.marginLeft,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  recentTransactionsContainer: {
    marginTop: "40%",
  },
  headingText: {
    color: GlobalStyles.Color.lightBlack,
    fontSize: 18,
    fontFamily: "Montserrat",
    marginBottom: 10,
  },
  darkheadingText: {
    color: GlobalStyles.Color.white,
    fontSize: 18,
    fontFamily: "Montserrat",
    marginBottom: 10,
  },
  bottomText: {
    color: GlobalStyles.Color.lightBlack,
    fontSize: 14,
    fontFamily: "Montserrat-Regular",
  },
  bottomTextBold: {
    color: GlobalStyles.Color.lightBlack,
    fontSize: 16,
    fontFamily: "Montserrat",
  },
});

export default HomeScreenPersonal;
