import React, { useContext, useEffect, useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
} from "react-native";

import GlobalStyles from "../../GlobalStyles";
import ErrorMessage from "../components/forms/ErrorMessage";
import { verticalScale } from "../config/scaling";
import Button from "../components/AppButton";
import Dropdown from "../components/AppDropdown";
import apiBeneficiaries from "../api/apiBeneficiaries";
import AuthContext from "../auth/context";

import KeyboardAvoider from "../components/KeyboardAvoider";

import DateTimePicker from "@react-native-community/datetimepicker";

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
  timePeriod: Yup.string().required(),
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
  // {
  //   id: 3,
  //   label: "To Account: ",
  //   placeholder: "Enter account",
  //   initialValue: "toAccount",
  // },
  // {
  //   id: 4,
  //   label: "From Account: ",
  //   placeholder: "Enter account",
  //   initialValue: "fromAccount",
  // },
  // {
  //   id: 5,
  //   label: "Time period: ",
  //   placeholder: "Enter time period",
  //   initialValue: "timePeriod",
  // },
];

const BENEFICIARY = [
  { label: "Item 1", value: "1" },
  { label: "Item 2", value: "2" },
  { label: "Item 3", value: "3" },
  { label: "Item 4", value: "4" },
  { label: "Item 5", value: "5" },
  { label: "Item 6", value: "6" },
  { label: "Item 7", value: "7" },
  { label: "Item 8", value: "8" },
];

const ScheduledPayment = () => {
  const [date, setDate] = useState(new Date());
  const { userID, customerDetails } = useContext(AuthContext);
  const [beneficiary, setBeneficiary] = useState(BENEFICIARY);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setDate(currentDate);
  };

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {};

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

  const handleSubmit = async ({
    title,
    amount,
    toAccount,
    fromAccount,
    timePeriod,
  }) => {
    console.log(title, amount, toAccount, fromAccount, timePeriod);

    const obj = {
      individualOrGroupType: 0,
      fromCarbonyteId: customerDetails,
      frommodulrAccountId: userID,
      toBeneficiaryOrGroupId: "string",
      date: "2023-05-02" + "T00:00:00.000Z",
      amount: 0,
    };
    apiBeneficiaries.SchedulePayment(obj);
  };

  return (
    <KeyboardAvoider>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <Formik
            initialValues={{
              title: "",
              amount: "",
              toAccount: "",
              fromAccount: "",
              timePeriod: "",
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
                  {items.map((item, index) => (
                    <View
                      key={item.id}
                      style={{
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
                  <View>
                    <Dropdown
                      data={beneficiary}
                      onChange={(item) => handleChange(item.value)}
                    />
                  </View>
                  <View>
                    <Text>Schedulde date & time</Text>
                    <DateTimePicker
                      testID="dateTimePicker"
                      value={date}
                      mode="datetime"
                      is24Hour={true}
                      display="spinner"
                      onChange={onChange}
                    />
                  </View>
                </View>
                <View
                  style={[
                    { flex: 1, justifyContent: "flex-end" },
                    styles.boxShadow,
                  ]}
                >
                  <TouchableOpacity style={styles.button}>
                    <Button title="Confirm" onPress={handleSubmit} />
                  </TouchableOpacity>
                </View>
              </>
            )}
          </Formik>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoider>
  );
};
const styles = StyleSheet.create({
  boxShadow: {},
  container: {
    flex: 1,
    backgroundColor: GlobalStyles.DivContainer.backgroundColor,
    paddingVertical: verticalScale(60),
    paddingHorizontal: "5%",
  },
  bottom: {
    bottom: "5%",
    flex: 1,
    justifyContent: "flex-end",
  },

  button: {},
});
export default ScheduledPayment;
