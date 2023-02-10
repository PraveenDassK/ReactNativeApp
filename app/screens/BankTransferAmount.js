import React, { useContext, useEffect, useState } from "react";
import { Text, StyleSheet, Image, View, Pressable, TextInput, Keyboard, TouchableWithoutFeedback , TouchableOpacity} from "react-native";
import GlobalStyles from "../../GlobalStyles";
import BankTransfer from "./BankTransfer";
import Button from "../components/Button"


const BankTransferAmount = ({ route, navigation }) => {
  const [amount, setAmount] = useState("");
  const [userData, setCode] = useState("");
  const reciver = route.params.accountName;
  const sortCode = route.params.sortCode;
  const accountCode = route.params.accountNumber;

  let payment = (amount ? amount : 1).toString();

  const requestContact = (amount) => {
    console.log("Transfer to " + accountName + " of £" + amount + " successful");
    navigation.navigate("Pin", {
      amount: amount,
      name: accountName,
      successScreen: "Success",
      successText: "Transfer to " + accountName + " of £" + amount + " successful",
      beneficiaryData: route.params,
    });
  };
  const { accountName } = route.params;

  return (
    <View style={styles.mainContainer}>
      <Pressable style={styles.groupParent} onPress={Keyboard.dismiss}>
        <View style={styles.titleTextRow}>
          <Text style={styles.titleText}>Send funds</Text>
        </View>

        <View style={styles.centerDiv}>
          <Text style={styles.centerText}>
            {accountName}
            {"\n"}
          </Text>
          <Text style={styles.centerText}>{accountCode}</Text>
          <Text style={styles.centerText}>{sortCode}</Text>

          <View style={styles.paymentDiv}>
            <Text style={{ textAlign: "center", fontSize: 16 }}>Pay</Text>
            <TextInput
              style={{ textAlign: "center", fontSize: 60, fontWeight: "700" }}
              placeholder={"£" + payment}
              keyboardType="numeric"
              onChangeText={(newText) => setAmount(newText)}
            />
            <View
              style={{
                width: "90%",
                marginLeft: "5%",
                height: 1,
                backgroundColor: "grey",
              }}
            />
            <View
              style={{
                width: "100%",
                flexDirection: "row",
                height: 50,
                justifyContent: "center",
                marginTop: "2.5%"
              }}
            >
              <Pressable style={{ flex: 3, width: "30%", alignItems: "flex-end"}}
                onPress={() => {
                  setAmount("20");
                }}
              >
                <Text style={{fontSize: 25, color: "grey"}}>£20</Text>
              </Pressable>

              <Pressable style={{ flex: 3, width: "30%" }}
                onPress={() => {
                  setAmount("50");
                }}
              >
                <Text style={{textAlign: "center", fontSize: 25, color: "grey"}}>£50</Text>
              </Pressable>
              <Pressable style={{ flex: 3, width: "30%"}}
                onPress={() => {
                  setAmount("100");
                }}
              >
                <Text style={{fontSize: 25, color: "grey"}}>£100</Text>
              </Pressable>
            </View>
          </View>
        </View>

      </Pressable>
      <View style={styles.bottom}>
                      <TouchableOpacity style={styles.button}>
                          <Button title="Send" color="babyBlue" onPress={() => requestContact(payment)}/>
                      </TouchableOpacity>
                  </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: GlobalStyles.DivContainer.backgroundColor,
    height: GlobalStyles.DivContainer.height,
    width: "100%",
    flex: GlobalStyles.DivContainer.flex,
  },

  titleTextRow: {
    marginTop: GlobalStyles.Title.marginTop,
    width: GlobalStyles.DivContainer.width,
    marginLeft: GlobalStyles.DivContainer.marginLeft,
  },

  titleText: {
    fontSize: GlobalStyles.Title.fontSize,
    fontWeight: GlobalStyles.Title.fontWeight,
  },

  subText: {
    fontSize: GlobalStyles.RowText.fontSize,
    fontWeight: GlobalStyles.RowText.fontWeight,
  },

  subTextRow: {
    marginTop: GlobalStyles.RowText.marginTop,
    width: GlobalStyles.DivContainer.width,
    marginLeft: GlobalStyles.DivContainer.marginLeft,
    fontColor: GlobalStyles.RowText.fontColor,
  },
  centerDiv: {
    width: "100%",
    marginTop: "30%",
  },

  centerText: {
    textAlign: "center",
    marginTop: ".5%",
    fontWeight: "700",
    fontSize: 20,
  },

  paymentDiv: {
    marginTop: "30%",
    width: "100%",
    textAlign: "center",
  },
  bottom: {
          bottom: "5%",
          flex: 1,
          justifyContent: 'flex-end',

      },

      button: {
          width: "90%",
          left: "5%"
      }
});

export default BankTransferAmount;
