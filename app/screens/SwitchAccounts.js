import React, { useEffect, useState, useContext } from "react";
import {
  Text,
  StyleSheet,
  Image,
  View,
  ScrollView,
  Modal,
  TouchableOpacity,
} from "react-native";
import GlobalStyles from "../../GlobalStyles";
import Button from "../components/AppButton";

import apiCall from "../api/apiCall";
import AuthContext from "../auth/context";
import {
  horizontalScale,
  verticalScale,
  moderateScale,
} from "../config/scaling";
import authStorage from "../auth/storage";
import loginApi from "../api/apiLogin";

const SwitchAccounts = ({ navigation, route }) => {
  const token = route.params
  const [IDs, setIDs] = useState([])
  const [userData, setUserData] = useState(IDs?.accountData?.accountDetails);
  const { darkMode } = useContext(AuthContext);
  const {
    setCurrentUser,
    setUserID,
    setAccountID,
    setUser,
    setCardID,
    setCustomerDetails,
    setAccountDetails,
  } = useContext(AuthContext);

  //Calls the API once during load
  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const IDs = await loginApi.GetIDs(token);
    console.log(IDs)
    setIDs(IDs)
    // const response = await apiCall.GetAllAccounts("A122HTHM");
    setUserData(IDs?.accountData?.accountDetails);
  };

  const showUserAccounts = () => {
    let accounts = [];
    userData?.forEach((element, i) => {
      accounts.push(
        <TouchableOpacity key={i} onPress={() => switchAccount(element.id)}>
          <View style={[styles.benBoxCon]}>
            <View style={styles.accountTextDiv}>
              <Text
                style={
                  darkMode === "DARK"
                    ? styles.darkaccountName
                    : styles.accountName
                }
              >
                {element.accountId}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      );
    });
    return <View>{accounts}</View>;
  };

  const switchAccount = (Id) => {

    authStorage.storeToken(token);
    setCurrentUser(IDs.token);
    setUserID(IDs.userID);
    setAccountID(IDs.accountID);
    setCardID(IDs.cardID);
    setCustomerDetails(IDs.customerDetails);
    setAccountDetails(IDs.accountData);
    //Turns off the loading
    // setIsLoading(false);
    // setAccountID(Id);
    // navigation.navigate("Account")
  };

  return (
    <ScrollView
      style={{
        backgroundColor:
          darkMode === "DARK"
            ? GlobalStyles.Color.darkTheme_bg
            : GlobalStyles.Color.white,
      }}
    >
      <View style={darkMode === "DARK" ? styles.darkpage : styles.page}>

        <View style={styles.subTextDiv}>
          <Text
            style={darkMode === "DARK" ? styles.darksubText : styles.subText}
          >
            Accounts:
          </Text>
        </View>

        {showUserAccounts()}
        <View
          style={{
            position: "absolute",
            bottom: 20,
            width: "100%",
            alignItems: "center",
          }}
        ></View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  accountName: {
    fontSize: 14,
    fontWeight: "700",
  },
  darkaccountName: {
    fontSize: 14,
    fontWeight: "700",
    color: GlobalStyles.Color.white,
  },
  accountTextDiv: {
    flex: 6,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  boxShadow: {},
  page: {
    flex: 1,
    width: "80%",
    left: "10%",
    marginTop: "2.5%",
  },
  darkpage: {
    flex: 1,
    width: "100%",
    // left: "10%",
    // marginTop: "2.5%",
    backgroundColor: GlobalStyles.Color.darkTheme_bg,
  },
  accountContainter: {
    width: "100%",
    height: "20%",
    backgroundColor: "white",
    borderRadius: 20,
    marginTop: "2.5%",
    padding: "2%",
  },
  benBoxCon: {
    marginTop: "2.5%",
    width: "80%",
    marginLeft: "10%",
    backgroundColor: GlobalStyles.Color.backgroundColor,
    borderRadius: 15,
    flexDirection: "row",
    justifyContent: "space-around",
    height: verticalScale(65),
  },
  subTextDiv: {
    width: "80%",
    marginLeft: "10%",
    marginTop: "5.5%",
  },

  subText: {
    fontSize: 14,
    color: "rgba(153, 153, 153, 0.75)",
  },
  darksubText: {
    fontSize: 14,
    color: GlobalStyles.Color.white,
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
});

export default SwitchAccounts;
