import React, { useContext, useEffect, useState } from "react";
import {
  View,
  KeyboardAvoidingView,
  TextInput,
  StyleSheet,
  Text,
  Platform,
  TouchableWithoutFeedback,
  Pressable,
  Keyboard,
  TouchableOpacity,
} from "react-native";
import GlobalStyles from "../../GlobalStyles";
import AuthContext from "../auth/context";
import api from "../api/api_list";
import Button from "../components/Button";
import { verticalScale } from "../config/scaling";
import { Formik } from "formik";
import * as Yup from "yup";

import ErrorMessage from "../components/forms/ErrorMessage";

const validationSchema = Yup.object().shape({
  bankName: Yup.string().required().min(1).max(30).label("Bank name"),
  accountName: Yup.string().required().min(1).max(30).label("Account name"),
  phoneNumber: Yup.string().required().matches(/^[0-9]+$/, "Phone number must be digits").min(9).max(11).label("Phone number"),
  sortCode: Yup.string().required().matches(/^[0-9]+$/, "Sort code must be digits").min(6, 'Must be exactly 6 digits').max(6, 'Must be exactly 6 digits').label("Sort code"),
  accNum: Yup.string().required().matches(/^[0-9]+$/, "Account number must be digits").min(8, 'Must be exactly 8 digits').max(8, 'Must be exactly 8 digits').label("Account number"),
});

const items = [
  { id: 1, label: "Name of the bank", placeholder: "Enter bank name", initialValue: 'bankName' },
  { id: 2, label: "Phone Number", placeholder: "Enter phone number", initialValue: 'phoneNumber' },
  { id: 3, label: "Account Owner Name", placeholder: "Enter owner name", initialValue: 'accountName' },
  { id: 4, label: "Account Number", placeholder: "Enter Account number", initialValue: 'accNum' },
  { id: 5, label: "Sort Code", placeholder: "Enter sort code", initialValue: 'sortCode' },
];

const AddBeneficiary = ({ navigation }) => {
  const [bankName, setBankName] = useState("");
  const [accountName, setAccountName] = useState("");
  const [phoneNumber, setIban] = useState("");
  const [sortCode, setPhoneNumber] = useState("");
  const [accNum, setAccNum] = useState("");
  const authContext = useContext(AuthContext);

  const handleSubmit = async ({
    bankName,
    accountName,
    phoneNumber,
    accNum,
    sortCode,
  }) => {
    const response = await api.AddBeneficiary(
      authContext.userID,
      phoneNumber,
      accountName,
      accNum,
      sortCode
    );
    navigation.navigate("BankTransferAmount", {
      bankName: bankName,
      accountName: accountName,
      phoneNumber: phoneNumber,
      sortCode: sortCode,
      accNum: accNum,
    });
    console.log(response);
  };

  const generateBoxShadowStyle = (
    xOffset,
    yOffset,
    shadowColorIos,
    shadowOpacity,
    shadowRadius,
    elevation,
    shadowColorAndroid
  ) => {
    if (Platform.OS === "ios") {
      styles.boxShadow = {
        shadowColor: shadowColorIos,
        shadowOffset: { width: xOffset, height: yOffset },
        shadowOpacity,
        shadowRadius,
      };
    } else if (Platform.OS === "android") {
      styles.boxShadow = {
        elevation,
        shadowColor: shadowColorAndroid,
      };
    }
  };

  generateBoxShadowStyle(-2, 4, "#171717", 0.2, 3, 4, "#171717");

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={{ flex: 1, paddingVertical: verticalScale(60) }}>
          <Formik
            initialValues={{
              bankName: "",
              accountName: "",
              phoneNumber: "",
              sortCode: "",
              accNum: "",
            }}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
          >
            {({
              handleChange,
              handleSubmit,
              errors,
              setFieldTouched,
              touched,
            }) => (
              <>
                <View>
                  {/* <View style={{ width: "100%", height: "auto", justifyContent: "center", alignItems: "center", height: 50}}>
                <Text style={{  fontSize: 20 }}>Bank Details</Text>
              </View> */}

                  {items.map((item, index) => (
                    <View
                      key={item.id}
                      style={{
                        width: "90%",
                        marginLeft: "5%",
                        marginBottom: "5%",
                      }}
                    >
                      <Text style={{ fontSize: 14 }}>{item.label}</Text>
                      <TextInput
                        onBlur={() => setFieldTouched(item.initialValue)}
                        onChangeText={handleChange(item.initialValue)}
                        // placeholder={item.placeholder}
                        style={{ fontSize: 24, marginTop: "1%" }}
                      ></TextInput>
                      <View
                        style={{
                          height: 1,
                          backgroundColor: "black",
                          marginTop: "1%",
                          opacity: 0.7,
                        }}
                      />
                    <ErrorMessage
                      error={errors[item.initialValue]}
                      visible={touched[item.initialValue]}
                    />
                    </View>
                  ))}

                </View>
                <View
                  style={[
                    { flex: 1, justifyContent: "flex-end" },
                    styles.boxShadow,
                  ]}
                >
                  <TouchableOpacity style={styles.button}>
                    <Button
                      title="Confirm"
                      color="babyBlue"
                      onPress={handleSubmit}
                    />
                  </TouchableOpacity>
                </View>
              </>
            )}
          </Formik>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  boxShadow: {},
  container: {
    backgroundColor: GlobalStyles.DivContainer.backgroundColor,
    minHeight: 830,
    height: "auto",
  },
  bottom: {
    bottom: "5%",
    flex: 1,
    justifyContent: "flex-end",
  },

  button: {
    width: "90%",
    left: "5%",
  },
});

export default AddBeneficiary;
