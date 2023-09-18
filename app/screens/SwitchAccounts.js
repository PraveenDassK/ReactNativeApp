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

import FadeInView from "../components/fadeInview";
import colors from "../config/colors";


const SwitchAccounts = ({ navigation, route }) => {
  
  const [IDs, setIDs] = useState([])
  const [userData, setUserData] = useState(IDs?.accountData?.accountDetails);
  const [missingAccounts, setMissingAccounts] = useState(false)
  
  const { darkMode } = useContext(AuthContext);
  const {
    currentUser,
    setCurrentUser,
    setUserID,
    setAccountID,
    setUser,
    setCardID,
    setCustomerDetails,
    setAccountDetails,
  } = useContext(AuthContext);
  
  const token = currentUser
  //Calls the API once during load
  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const IDs = await loginApi.GetIDs(token);
    const businessName = await loginApi.GetAccount("A122HTHM");
    setIDs(IDs)

    // const response = await apiCall.GetAllAccounts("A122HTHM");

    //If there aren't any accounts
    if (IDs?.accountData?.AccountDeatils == []) {
      console.log("!")
      setMissingAccounts(true)
    }
    setUserData(IDs?.accountData?.accountDetails);
  };

  const getBusinessName = async () => {

  }

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
    navigation.navigate('Account')
  };


  //Show this if the user needs to initiate an account setup
  if (missingAccounts) {
    return (
      <ScrollView
        style={{
          backgroundColor:
            darkMode === "DARK"
              ? GlobalStyles.Color.darkTheme_bg
              : GlobalStyles.Color.white,
        }}
      >
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>

        </View>

        <View
          style={{
            backgroundColor: colors.light,
            borderTopLeftRadius: 25,
            borderTopRightRadius: 25,
          }}
        >
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              marginVertical: 30,
            }}
          >
            <Text style={{ fontSize: 25 }}>
              First time setup
            </Text>
          </View>

          <View
            style={{
              paddingHorizontal: 30,
              paddingVertical: 50,
              backgroundColor: "white",
              borderTopLeftRadius: 25,
              borderTopRightRadius: 25,
            }}
          >

            <Text>
              Welcome to our platform! This is your first time logging
              in, and we're excited to have you on board. Please note that as you're just getting
              started, some background processes may still be running to set up your account and fetch
              your data. Don't worry, this won't take long everything will be ready for you shortly.
              If you have any questions or need assistance, don't hesitate to reach out to our support
              team. Enjoy your experience!
            </Text>

            <Button
              title="Placeholder button put second API call here"
              textColor="white"
              color="black"
              // onPress={() => navigation.navigate("ProofOfFace")}
              // onPress={() => navigation.navigate("Registration")}
            />

          </View>
        </View>
      </ScrollView >
    )
  }

  //Regular account chosing
  return (
    <ScrollView
      style={{
        backgroundColor:
          darkMode === "DARK"
            ? GlobalStyles.Color.darkTheme_bg
            : GlobalStyles.Color.white,
      }}
    >
      <View style={{ flex: 1, justifyContent: "flex-end" }}>
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>

        </View>

        <View
          style={{
            backgroundColor: colors.light,
            borderTopLeftRadius: 25,
            borderTopRightRadius: 25,
          }}
        >
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              marginVertical: 30,
            }}
          >
            <Text style={{ fontSize: 30 }}>Select an account</Text>
          </View>

          <View
            style={{
              paddingHorizontal: 30,
              paddingVertical: 50,
              backgroundColor: "white",
              borderTopLeftRadius: 25,
              borderTopRightRadius: 25,
            }}
          >
            {showUserAccounts()}
          </View>
        </View>
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
  maskGroupLayout: {
    overflow: "hidden",
    maxWidth: "100%",
    width: "100%",
    alignItems: "center",
  },
  helloFlexBox: {
    textAlign: "center",
    position: "absolute",
  },
  maskGroup261: {
    right: horizontalScale(0),
    bottom: verticalScale(0),
    left: horizontalScale(0),
    height: verticalScale(132),
  },
  layer12Icon: {
    marginTop: verticalScale(-135.5),
    marginLeft: horizontalScale(-63.5),
    left: "50%",
    width: horizontalScale(128),
    height: verticalScale(136),
    top: "50%",
    position: "absolute",
  },
  hello: {
    textAlign: "center",
    marginleft: horizontalScale(-20),
    top: verticalScale(50),
    width: "100%",
    fontSize: GlobalStyles.FontSize.size_10xl,
    color: GlobalStyles.Color.indigo_100,
  },
  quickSecuredBanking: {
    fontSize: GlobalStyles.FontSize.size_2xl,
    fontWeight: "700",
    color: GlobalStyles.Color.black,
    width: "100%",
    top: "75%",
    textAlign: "center",
  },
  maskGroup259: {
    marginTop: verticalScale(-140.5),
    height: verticalScale(337),
    top: "50%",
    width: "100%",
  },
  maskGroup261Parent: {
    width: "100%",
    height: verticalScale(505),
  },
  logoAnimation3: {
    backgroundColor: colors.white,
    flex: 1,
    width: "100%",
    height: "100%",
    paddingTop: GlobalStyles.Padding.padding_xl,
  },
});

export default SwitchAccounts;
