import React, { useEffect, useState, useContext } from "react";
import {RefreshControl,Text,StyleSheet,Image,View,TouchableOpacity,ScrollView,ActivityIndicator,Platform,Dimensions,TouchableWithoutFeedback,Vibration,useWindowDimensions,ImageBackground,} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import AuthContext from "../auth/context";
import apiCall from "../api/apiCall";
import bgImage from "../assets/backgrounds/River.png";
import UserIcon from "../components/UserIcon";
import AccountDeatils from "../components/AccountDeatils";
const HomeScreenPersonal = ({ navigation, route }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [showPinModal, setShowPinModal] = useState(true);

  const [userImpact, setUserImpact] = useState({});
  const [userData, setuserData] = useState({});

  const { accountID, customerDetails } = useContext(AuthContext);

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
      const userDataReturn = await apiCall.GetCustomerDetails(accountID);
      const userImpactReturn = await apiCall.GetUserImpact(customerDetails);
      setuserData(userDataReturn);
      setUserImpact(userImpactReturn);
      setIsLoading(false);
    } catch {
      setIsLoading(false);
      return;
    }
  };
  console.log(userData)
  if (isLoading) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <ActivityIndicator size="large" color="black" />
      </View>
    );
  }

  return (
    <View style={{position:"relative"}}>
      <ImageBackground
        source={require("../assets/backgrounds/River.png")}
        style={styles.backgroundImage}
      >
        <View style={styles.header}>
          <View>
            <Text style={styles.welcomText}>Welcome back,</Text>
            <Text style={styles.nameText}>{userData.name} !</Text>
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
        <AccountDeatils/>
      </View>
    </View>
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
    marginTop: 20,
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
    display:"flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    borderRadius: 20,
  },
  AccountDetailsCard:{
    position: "absolute",
    top:130,
    width:"100%",
    padding:20,
  }
});

export default HomeScreenPersonal;
