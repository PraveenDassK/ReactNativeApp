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
} from "react-native";
import Dropdown from "../components/AppDropdown";
import Icon from "../components/Icon";

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

    const paymentRequestURL = await apiTransaction.getPaymentLink()
    console.log(paymentRequestURL)
    setLink(paymentRequestURL)
  }

  const handleChange = (item) => console.log(item)

  return (
    <View style={styles.mainContainer}>
      <View style={styles.balanceContainer}>
        <Text style={styles.balance}>Copy this payment link to allow someone to send money to you</Text>
      </View>
      <View>
        <Text>
          {link.slice(0,100)}...
        </Text>
      </View>
      <TouchableOpacity
        style={styles.paymentContainer}
        onPress={copyToClipboard}
      >
        <Text style={styles.paymentLink}>copy payment</Text>
        <Icon name="content-copy" size={20} backgroundColor="blue" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  balance: { fontSize: 18 },
  balanceContainer: {
    flex: 1,
    justifyContent: "center",
  },
  dropdownContainer: {
    flex: 1,
    width: "100%",
    justifyContent: "flex-end",
  },
  mainContainer: {
    flex: 1,
    padding: "10%",
    alignItems: "center",
    justifyContent: "center",
  },
  paymentContainer: {
    flex: 1,
    flexDirection: "row",
  },
  paymentLink: {
    textDecorationLine: "underline",
    color: "blue",
    fontSize: 17,
    marginRight: 10,
  },
});

export default PaymentLink;
