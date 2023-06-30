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
} from "react-native";
import Dropdown from "../components/AppDropdown";
import Icon from "../components/Icon";
import { Entypo } from '@expo/vector-icons'; 
import * as Clipboard from "expo-clipboard";
import apiTransaction from "../api/apiTransaction";

const ACCOUNT = [
  { label: "account1", value: 1 },
  { label: "account2", value: 2 },
  { label: "account3", value: 3 },
  { label: "account4", value: 4 },
];

const BALANCE = 1000;

const LINK = "https://www.google.com";

const PaymentLink = () => {
  const [accounts, setAccounts] = useState(ACCOUNT);
  const [balance, setBalance] = useState(BALANCE);
  const [link, setLink] = useState(LINK);

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

  const loadData = async () => {
    const paymentRequestURL = await apiTransaction.getPaymentLink();
    console.log(paymentRequestURL);
    setLink(paymentRequestURL);
  };

  const handleChange = (item) => console.log(item);

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
          <View style={styles.linkContainer}>
          <Entypo name="link" size={20} color="black" />
            <Text>{link.slice(0, 100)}...</Text>
          </View>
          <TouchableOpacity
            style={styles.paymentContainer}
            onPress={copyToClipboard}
          >
            <Text style={styles.paymentLink}>Copy link</Text>
            <Icon name="content-copy" size={45}  />
          </TouchableOpacity>
        </View>
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
    padding:20,
    // marginHorizontal:"10%"
    borderRadius:20,
  },
  dropdownContainer: {
    flex: 1,
    width: "100%",
    justifyContent: "flex-end",
  },
  mainContainer: {
    display: "flex",
    paddingVertical: "10%",
    paddingHorizontal:"5%",
    height: "100%",
  },
  paymentContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent:"center",
    alignItems: "center",
    backgroundColor:"black",
    paddingVertical:"3%",
    borderRadius:10,
    margin:10,
  },
  paymentLink: {
    color: "#FFFFFF",
    fontSize: 17,
    marginRight: 10,
  },
  linkContainer:{
    borderColor:"#F7F7F7",
    borderWidth:3,
    padding:"4%",
    marginVertical:"5%",
    gap:3,
    display:"flex",
    flexDirection:"row",
    alignContent:"center",
    justifyContent:"center",
  }
});

export default PaymentLink;
