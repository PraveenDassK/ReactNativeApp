import React, {
  useEffect,
  useState,
  useContext,
  useCallback,
  useRef,
  Fragment,
} from "react";

import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Vibration,
  ImageBackground,
  ActivityIndicator,
  Share,
} from "react-native";
import Icon from "../components/Icon";
import { Entypo } from "@expo/vector-icons";
import * as Clipboard from "expo-clipboard";
import apiTransaction from "../api/apiPaymentLink";
import GlobalStyles from "../../GlobalStyles";
import Tagline from "../components/Tagline";
import { Dropdown } from "react-native-element-dropdown";
import AuthContext from "../auth/context";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome5 } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

const LINK = "https://www.google.com";

const PaymentLink = () => {
  const [link, setLink] = useState(LINK);
  const [isLoading, setIsLoading] = useState(false);
  const [linkSelection, setLinkSelection] = useState([]);
  const [selectedLink, setSelectedLink] = useState("");
  const [isshareLink, setIsShareLink] = useState(false);
  const { darkMode } = useContext(AuthContext);
  const copyToClipboard = async () => {
    Vibration.vibrate();
    alert("Referral copied");
    await Clipboard.setStringAsync(link);
    setIsShareLink(true);
  };

  //Calls the API once during load
  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    getPaymentLink();
  }, [selectedLink]);
  console.log(link);
  const loadData = async () => {
    try {
      setIsLoading(true);
      const paymentLinkSelection = await apiTransaction.getLinkSelection();
      setLinkSelection(paymentLinkSelection);
      setIsLoading(false);
    } catch {
      setIsLoading(false);
      return;
    }
  };
  const showShareModal = async () => {
    try {
      // const result = await Share.share({
      //   // message: `Pay Jack <a href=${link}>Click here</a>`,
      //   title: "pay Jack",
      //   message: `Pay Jack: Click here `,
      //   url: link,
      // });
      // if (result.action === Share.sharedAction) {
      //   if (result.activityType) {
      //     // shared with activity type of result.activityType
      //   } else {
      //     // shared
      //   }
      // } else if (result.action === Share.dismissedAction) {
      //   // dismissed
      // }
      await Share.share({
        title: "Share Link",
        message: "pay Jack",
        url: link, // Shortened URL to open when the recipient clicks "Click here"
      });
    } catch (error) {
      Alert.alert(error.message);
    }
  };
  const getPaymentLink = async () => {
    try {
      setIsLoading(true);
      const obj = {
        paymentAmount: {
          currency: "GBP",
          value: 10,
        },
        paymentReference: "Payment from Jack",
        destination: {
          type: "ACCOUNT",
          id: "A122HTHM",
          accountNumber: "03011666",
          sortCode: "000000",
          name: "Jack",
        },
        aspspId: selectedLink,
        paymentContext: {
          paymentContextCode: "",
          deliveryAddress: {
            addressLine1: "",
            addressLine2: "",
            postTown: "",
            postCode: "",
            country: "",
          },
          merchantCategoryCode: "",
          merchantCustomerIdentification: "",
        },
      };
      const paymentRequestURL = await apiTransaction.getPaymentLink(obj);
      setLink(paymentRequestURL);
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

  return (
    <ImageBackground
      source={
        darkMode === "DARK"
          ? require("../assets/dashboardDark/paymentLink1.jpg")
          : require("../assets/backgrounds/replaceCard.jpg")
      }
      // style={{  width: "100%" }}
      resizeMode="contain"
      imageStyle={{
        bottom: "-50%",
      }}
      // style={styles.mainContainer}
      style={{
        width: "100%",
        backgroundColor:
          darkMode === "DARK"
            ? GlobalStyles.Color.darkTheme_bg
            : GlobalStyles.Color.lightTheme_bg,
      }}
    >
      <View style={styles.mainContainer}>
        <View
          style={
            darkMode === "DARK"
              ? styles.darkbalanceContainer
              : styles.balanceContainer
          }
        >
          <Text
            style={darkMode === "DARK" ? styles.darkbalance : styles.balance}
          >
            Copy this payment link to allow someone to send money to you
          </Text>

          <Dropdown
            style={[
              darkMode === "DARK" ? styles.darkdropdown : styles.dropdown,
            ]}
            containerStyle={styles.dropdownContainer}
            data={linkSelection}
            maxHeight={100}
            labelField="name"
            valueField="id"
            placeholder={"Select a bank"}
            // placeholderStyle={{fontSize: 14, color: "#D3D3D3"}}
            value={selectedLink}
            onChange={(item) => {
              setSelectedLink(item.id);
            }}
            placeholderStyle={{
              color: darkMode === "DARK" ? GlobalStyles.Color.white : null,
            }}
            selectedTextStyle={{
              color: darkMode === "DARK" ? GlobalStyles.Color.white : null,
            }}
          />

          <View
            style={
              darkMode === "DARK"
                ? styles.darklinkContainer
                : styles.linkContainer
            }
          >
            <Entypo
              name="link"
              size={20}
              color={darkMode === "DARK" ? GlobalStyles.Color.white : "black"}
            />
            <Text
              style={{
                color:
                  darkMode === "DARK"
                    ? GlobalStyles.Color.white
                    : GlobalStyles.Color.black,
              }}
            >
              {link?.slice(0, 100)}...
            </Text>
          </View>
          {/* <TouchableOpacity
            style={styles.paymentContainer}
            onPress={copyToClipboard}
          >
            <Text style={styles.paymentLink}>Copy link</Text>
            <Icon name="content-copy" size={45} />
          </TouchableOpacity> */}
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              onPress={!isshareLink ? copyToClipboard : showShareModal}
            >
              <LinearGradient
                colors={
                  darkMode === "DARK"
                    ? ["#178BFF", "#0101FD"]
                    : ["#212529", "#3A3A3A"]
                }
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={
                  darkMode === "DARK"
                    ? styles.darkbuttonPayNew
                    : styles.buttonPayNew
                }
              >
                {!isshareLink ? (
                  <>
                    <Text style={styles.buttonPayNewText}>Copy link </Text>
                    <FontAwesome5 name="copy" size={24} color="white" />
                  </>
                ) : (
                  <>
                    <Text style={styles.buttonPayNewText}>
                      Link Copied.Start Sharing{" "}
                    </Text>
                    <Feather name="share" size={24} color="white" />
                  </>
                )}
                {/* <Icon name="content-copy" size={45} color={} /> */}
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ position: "absolute", bottom: 0, left: "15%" }}>
          <Tagline darkMode={darkMode} />
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  balance: {
    fontSize: 13,
    color: GlobalStyles.Color.black,
    fontFamily: "Montserrat-SemiBold",
  },
  darkbalance: {
    fontSize: 13,
    color: GlobalStyles.Color.white,
    fontFamily: "Montserrat-SemiBold",
  },
  balanceContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: GlobalStyles.Color.white,
    padding: 20,
    // marginHorizontal:"10%"
    borderRadius: 20,
  },
  darkbalanceContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: GlobalStyles.Color.secondaryDarkTheme_bg,
    padding: 20,
    // marginHorizontal:"10%"
    borderRadius: 20,
  },
  dropdownContainer: {
    flex: 1,
    width: "100%",
    justifyContent: "flex-end",
  },
  mainContainer: {
    display: "flex",
    paddingVertical: "10%",
    paddingHorizontal: "5%",
    height: "100%",
  },
  darkmainContainer: {
    display: "flex",
    paddingVertical: "10%",
    paddingHorizontal: "5%",
    height: "100%",
    backgroundColor: GlobalStyles.Color.darkTheme_bg,
  },
  paymentContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
    paddingVertical: "3%",
    borderRadius: 10,
    margin: 10,
  },
  paymentLink: {
    color: GlobalStyles.Color.white,
    fontSize: 17,
    marginRight: 10,
    fontFamily: "Montserrat-Medium",
  },
  linkContainer: {
    borderColor: "#F7F7F7",
    borderWidth: 3,
    padding: "4%",
    marginVertical: "5%",
    gap: 3,
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  darklinkContainer: {
    borderColor: GlobalStyles.Color.secondaryDarkTheme_bg,
    borderWidth: 3,
    padding: "4%",
    marginVertical: "5%",
    gap: 3,
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center",
    backgroundColor: GlobalStyles.Color.darkTheme_bg,
    borderRadius: 10,
  },
  dropdown: {
    borderRadius: 10,
    borderWidth: 0.5,
    height: 50,
    paddingHorizontal: 8,
    marginBottom: "5%",
    marginTop: "2.5%",
    opacity: 1,
    borderColor: "#D3D3D3",
  },
  darkdropdown: {
    borderRadius: 10,
    borderWidth: 0.5,
    height: 50,
    paddingHorizontal: 8,
    marginBottom: "5%",
    marginTop: "2.5%",
    opacity: 1,
    borderColor: GlobalStyles.Color.secondaryDarkTheme_bg,
    backgroundColor: GlobalStyles.Color.darkTheme_bg,
  },
  dropdownContainer: {
    borderBottomEndRadius: 10,
    borderBottomStartRadius: 10,
  },
  buttonContainer: {
    width: "100%",
    marginTop: "15%",
  },
  buttonPayNew: {
    borderRadius: 10,
    // backgroundColor: GlobalStyles.Color.lightBlack,
    height: 47,
    width: "100%",
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
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
  },
  buttonPayNewText: {
    color: GlobalStyles.Color.white,
    fontFamily: "Montserrat-Medium",
    fontSize: 14,
    paddingRight: 10,
    // marginLeft: 6,
  },
});

export default PaymentLink;
