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
import { FontAwesome } from "@expo/vector-icons";
import AuthContext from "../auth/context";
import apiCall from "../api/apiCall";
import AccountDeatils from "../components/AccountDeatils";
import SquareIcon from "../components/ButtonIcon";
import GlobalStyles from "../../GlobalStyles";
import RecentTransactions from "../components/RecentTransactions";
import CarbonSpendGraph from "../components/CarbonSpendGraph";
import VirtualPlanet from "../components/VirtualPlanet";
import XeroDashboard from "../components/XeroDashboard";
import ReferNow from "../components/ReferNow";
const HomeScreenPersonal = ({ navigation, route }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [showPinModal, setShowPinModal] = useState(true);

  const [userImpact, setUserImpact] = useState([]);
  const [userData, setuserData] = useState([]);

  const { accountID, customerDetails } = useContext(AuthContext);
  const [iconShow, setIconShow] = useState(false);

  useEffect(() => {
    loadData();
  }, [accountID, customerDetails]);

  /**
   * @dev This loads the data from the Backend
   * @notice Loading is set at the start of this function
   * @dev if any call fails then no data is set and the loading
   */
  const loadData = async () => {
    try {
      setIsLoading(true);
      const userDataReturn = await apiCall.GetAllAccounts("C122BMS7");
      const userImpactReturn = await apiCall.GetUserImpact(customerDetails);
      setuserData(userDataReturn);
      setUserImpact(userImpactReturn);
      setIsLoading(false);
    } catch {
      setIsLoading(false);
      return;
    }
  };
  console.log(userData?.[0]?.customerName, "userData");
  if (isLoading) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <ActivityIndicator size="large" color="black" />
      </View>
    );
  }

  return (
    <ImageBackground
      source={require("../assets/backgrounds/Dashboard.jpg")}
      // style={{  width: "100%" }}
      resizeMode="contain"
      imageStyle={{
        bottom: "-70%", // Whatever offset you want from the bottom
      }}
      style={{
        width: "100%",
      }}
    >
      <View style={{ position: "relative", marginBottom: 50 }}>
        <ScrollView nestedScrollEnabled={true}>
          <ImageBackground
            source={require("../assets/backgrounds/River.png")}
            style={styles.backgroundImage}
          >
            <View style={styles.header}>
              <View>
                <Text style={styles.welcomText}>Welcome back,</Text>
                <Text style={styles.nameText}>
                  {userData?.[0]?.customerName} !
                </Text>
              </View>
              <View style={styles.iconContainer}>
                <View style={styles.iconStyle}>
                  <FontAwesome name="moon-o" size={24} color="white" />
                </View>
                <View style={styles.iconStyle}>
                  <Ionicons name="notifications" size={24} color="white" />
                </View>
              </View>
            </View>
          </ImageBackground>
          <View style={styles.AccountDetailsCard}>
            <AccountDeatils
              userData={userData}
              userImpact={userImpact}
              handlePress={() => navigation.navigate("SendMoney")}
            />
          </View>
          {!iconShow && (
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
            <Text style={styles.headingText}>Your Carbon Footprints</Text>
            <CarbonSpendGraph
              handleViewMore={() => navigation.navigate("ChooseCardsStandard5")}
            />
          </View>
          <View style={{ margin: 25 }}>
            <Text style={styles.headingText}>Your Virtual Planet Summary</Text>
            <VirtualPlanet
              treeData={userImpact}
              handleVirtual={() => navigation.navigate("VirtualEcoSystem")}
            />
          </View>
          <View style={{ margin: 25 }}>
            <Text style={styles.headingText}>Carbonyte + Xero</Text>
            <XeroDashboard />
          </View>
          <View style={{ margin: 25 }}>
            <ReferNow />
          </View>
          <View style={{ display: "flex", alignItems: "center" }}>
            <Text style={styles.bottomText}>
              Your <Text style={styles.bottomTextBold}> Money </Text>• Your{" "}
              <Text style={styles.bottomTextBold}>Planet</Text> • Your{" "}
              <Text style={styles.bottomTextBold}>Choice</Text>
            </Text>
          </View>
          <View style={{ marginTop: 50 }}></View>
        </ScrollView>
      </View>
    </ImageBackground>
  );
};

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
    height: 200,
    width: "100%",
  },
  iconContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 5,
  },
  welcomText: {
    fontSize: 14,
    color: "white",
    fontWeight: "normal",
  },
  nameText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
  iconStyle: {
    height: 38,
    width: 38,
    // borderWidth: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    borderRadius: 20,
  },
  AccountDetailsCard: {
    position: "absolute",
    top: 130,
    width: "100%",
    padding: 20,
  },
  buttonContainer: {
    marginTop: "2.5%",
    top: "60%",
    width: GlobalStyles.DivContainer.width,
    marginLeft: GlobalStyles.DivContainer.marginLeft,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  recentTransactionsContainer: {
    marginTop: "60%",
  },
  headingText: {
    color: "#212529",
    fontSize: 18,
    fontWeight: "bold",
    fontFamily: "Montserrat",
    marginBottom: 10,
  },
  bottomText: {
    color: "#212529",
    fontSize: 14,
    fontFamily: "Montserrat",
    fontWeight: "regular",
  },
  bottomTextBold: {
    color: "#212529",
    fontSize: 16,
    fontFamily: "Montserrat",
    fontWeight: "bold",
  },
});

export default HomeScreenPersonal;
