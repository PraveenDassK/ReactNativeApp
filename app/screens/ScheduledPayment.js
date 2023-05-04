import React, { useContext, useEffect, useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
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
import ErrorMessage from "../components/forms/ErrorMessage";
import { verticalScale } from "../config/scaling";
import Button from "../components/Button";

import apiBeneficiaries from "../api/apiBeneficiaries";
import AuthContext from "../auth/context";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).max(30).label("Schedulde payment"),
  amount: Yup.number().required("Must be number").label("Amount"),
  toAccount: Yup.string()
    .required()
    .matches(/^[0-9]+$/, "Account must be digits")
    .min(8, "Must be exactly 8 digits")
    .max(8, "Must be exactly 8 digits")
    .label("Phone number"),
  fromAccount: Yup.string()
    .required()
    .matches(/^[0-9]+$/, "Account  must be digits")
    .min(8, "Must be exactly 8 digits")
    .max(8, "Must be exactly 8 digits")
    .label("Sort code"),
  timePeriod: Yup.string()
    .required()
  // .matches(/^[0-9]+$/, "Account number must be digits")
  // .min(8, "Must be exactly 8 digits")
  // .max(8, "Must be exactly 8 digits")
  // .label("Account number"),
});

const items = [
  {
    id: 1,
    label: "Name of the scheduled payment: ",
    placeholder: "Enter scheduled payment name",
    initialValue: "title",
  },
  {
    id: 2,
    label: "Amount: ",
    placeholder: "Enter the amount",
    initialValue: "amount",
  },
  {
    id: 3,
    label: "To Account: ",
    placeholder: "Enter account",
    initialValue: "toAccount",
  },
  {
    id: 4,
    label: "From Account: ",
    placeholder: "Enter account",
    initialValue: "fromAccount",
  },
  {
    id: 5,
    label: "Time period: ",
    placeholder: "Enter time period",
    initialValue: "timePeriod",
  },
];

const ScheduledPayment = () => {
  const { userID, customerDetails } = useContext(AuthContext);
  
  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    
  }

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

  const handleSubmit = async ({ title, amount, toAccount, fromAccount, timePeriod }) => {
    console.log(title, amount, toAccount, fromAccount, timePeriod);

    const obj = {
      "individualOrGroupType": 0,
      "fromCarbonyteId": customerDetails,
      "frommodulrAccountId": userID,
      "toBeneficiaryOrGroupId": "string",
      "date": "2023-05-02" + "T00:00:00.000Z",
      "amount": 0
    }
    apiBeneficiaries.SchedulePayment(obj)


  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={{ flex: 1, paddingVertical: verticalScale(60) }}>
          <Formik
            initialValues={{
              title: "",
              amount: "",
              toAccount: "",
              fromAccount: "",
              timePeriod: ""
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
    flex: 1,
    backgroundColor: GlobalStyles.DivContainer.backgroundColor,
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
export default ScheduledPayment;
