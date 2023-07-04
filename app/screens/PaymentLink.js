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
  ActivityIndicator
} from "react-native";
import Icon from "../components/Icon";
import { Entypo } from '@expo/vector-icons';
import * as Clipboard from "expo-clipboard";
import apiTransaction from "../api/apiPaymentLink";

import Tagline from "../components/Tagline";
import { Dropdown } from "react-native-element-dropdown";
const LINK = "https://www.google.com";

const PaymentLink = () => {
  const [link, setLink] = useState(LINK);
  const [isLoading, setIsLoading] = useState(false);
  const [linkSelection, setLinkSelection] = useState([])
  const [selectedLink, setSelectedLink] = useState("")

  const copyToClipboard = async () => {
    console.log("clicked", link);
    Vibration.vibrate();
    alert("Referral copied");
    await Clipboard.setStringAsync(link);
  };

  //Calls the API once during load
  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    getPaymentLink();
  }, [selectedLink]);

  const loadData = async () => {
    try {
      setIsLoading(true)
      const paymentLinkSelection = await apiTransaction.getLinkSelection()
      setLinkSelection(paymentLinkSelection)
      setIsLoading(false);
    } catch {
      setIsLoading(false);
      return;
    }
  };

  const getPaymentLink = async () => {
    try {
      setIsLoading(true)
      const obj = {
        "paymentAmount": {
          "currency": "GBP",
          "value": 10
        },
        "paymentReference": "Payment from Jack",
        "destination": {
          "type": "ACCOUNT",
          "id": "A122HTHM",
          "accountNumber": "03011666",
          "sortCode": "000000",
          "name": "Jack"
        },
        "aspspId": selectedLink,
        "paymentContext": {
          "paymentContextCode": "",
          "deliveryAddress": {
            "addressLine1": "",
            "addressLine2": "",
            "postTown": "",
            "postCode": "",
            "country": ""
          },
          "merchantCategoryCode": "",
          "merchantCustomerIdentification": ""
        }
      }
      const paymentRequestURL = await apiTransaction.getPaymentLink(obj);
      setLink(paymentRequestURL);
      setIsLoading(false);
    } catch {
      setIsLoading(false);
      return;
    }
  }

  if (isLoading) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <ActivityIndicator size="large" color="black" />
      </View>
    );
  }

  return (
    <ImageBackground
      source={require("../assets/backgrounds/replaceCard.jpg")}
      // style={{  width: "100%" }}
      resizeMode="contain"
      imageStyle={{
        bottom: "-50%",
      }}
    // style={styles.mainContainer}
    >
      <View style={styles.mainContainer}>
        <View style={styles.balanceContainer}>
          <Text style={styles.balance}>
            Copy this payment link to allow someone to send money to you
          </Text>

          <Dropdown
            style={[styles.dropdown]}
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
          />

          <View style={styles.linkContainer}>
            <Entypo name="link" size={20} color="black" />
            <Text>{link?.slice(0, 100)}...</Text>
          </View>
          <TouchableOpacity
            style={styles.paymentContainer}
            onPress={copyToClipboard}
          >
            <Text style={styles.paymentLink}>Copy link</Text>
            <Icon name="content-copy" size={45} />
          </TouchableOpacity>
        </View>
        <Tagline />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  balance: {
    fontSize: 13,
    color: "#212529",
    fontFamily: "Montserrat",
    fontWeight: "semibold",
  },
  balanceContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
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
    color: "#FFFFFF",
    fontSize: 17,
    marginRight: 10,
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
  dropdownContainer: {
    borderBottomEndRadius: 10,
    borderBottomStartRadius: 10,
  },
});

export default PaymentLink;
