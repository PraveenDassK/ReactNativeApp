import React, { useContext, useEffect, useState } from "react";
import { View, KeyboardAvoidingView, TextInput, StyleSheet, Text, Platform, TouchableWithoutFeedback, Pressable, Keyboard, TouchableOpacity } from "react-native";
import GlobalStyles from "../../GlobalStyles";
import AuthContext from "../auth/context";
import api from "../api/api_list";
import Button from "../components/Button"


const AddBeneficiary = ({ navigation }) => {
  const [bankName, setBankName] = useState("");
  const [accountName, setAccountName] = useState("");
  const [phoneNumber, setIban] = useState("");
  const [sortCode, setPhoneNumber] = useState("");
  const [accNum, setAccNum] = useState("");
  const authContext = useContext(AuthContext);

  const addBene = async () => {
    const response = await api.AddBeneficiary(authContext.userID, phoneNumber, accountName, accNum, sortCode);
    navigation.navigate("BankTransferAmount", { bankName: bankName, accountName: accountName, phoneNumber: phoneNumber, sortCode: sortCode, accNum: accNum });
    console.log(response);
  };

  return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style= {{justifyContent: "space-between"}}>
          <View style={{ width: "100%", height: "auto", justifyContent: "center", alignItems: "center", height: 50}}>
            <Text style={{ fontWeight: "700", fontSize: 20 }}>Bank Details</Text>
          </View>

          <View style={{ height: 25 }} />

          <View style={{ width: "90%", marginLeft: "5%", marginBottom: "5%"}}>
            <Text style={{ fontSize: 14 }}>Name of the bank</Text>
            <TextInput style={{ fontWeight: "700", fontSize: 24, marginTop: "1%" }}>Master Splinter</TextInput>
            <View style={{ height: 1, backgroundColor: "black", marginTop: "1%" }} />
          </View>

          <View style={{ width: "90%", marginLeft: "5%", marginBottom: "5%" }}>
            <Text style={{ fontSize: 14 }}>Phone Number</Text>
            <TextInput style={{ fontWeight: "700", fontSize: 24, marginTop: "1%" }}>01489424242</TextInput>
            <View style={{ height: 1, backgroundColor: "black", marginTop: "1%" }} />
          </View>

          <View style={{ width: "90%", marginLeft: "5%", marginBottom: "5%" }}>
            <Text style={{ fontSize: 14 }}>Account Owner Name</Text>
            <TextInput style={{ fontWeight: "700", fontSize: 24, marginTop: "1%" }}>Spaff Jezos</TextInput>
            <View style={{ height: 1, backgroundColor: "black", marginTop: "1%" }} />
          </View>

          <View style={{ width: "90%", marginLeft: "5%", marginBottom: "5%" }}>
            <Text style={{ fontSize: 14 }}>Account Number</Text>
            <TextInput style={{ fontWeight: "700", fontSize: 24, marginTop: "1%" }}>4242-4242</TextInput>
            <View style={{ height: 1, backgroundColor: "black", marginTop: "1%" }} />
          </View>

          <View style={{ width: "90%", marginLeft: "5%", marginBottom: "5%" }}>
            <Text style={{ fontSize: 14 }}>Sort Code</Text>
            <TextInput style={{ fontWeight: "700", fontSize: 24, marginTop: "1%" }}>00-00-00</TextInput>
            <View style={{ height: 1, backgroundColor: "black", marginTop: "1%" }} />
          </View>

          <View style={{justifyContent: "flex-end"}}>
                  <TouchableOpacity style={styles.button}>
                      <Button title="Confirm" color="babyBlue" onPress={() => addBene()}/>
                  </TouchableOpacity>
              </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: GlobalStyles.DivContainer.backgroundColor,
    minHeight: 830,
    height: "auto",
  },bottom: {
            bottom: "5%",
            flex: 1,
            justifyContent: 'flex-end',

        },

        button: {
            width: "90%",
            left: "5%"
        }
});

export default AddBeneficiary;
