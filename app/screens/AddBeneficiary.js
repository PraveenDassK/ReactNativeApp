import React, { useContext, useState } from "react";
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
import AuthContext from "../auth/context";
import api from "../api/api_list";
import apiBeneficiaries from "../api/apiBeneficiaries";
import Button from "../components/AppButton";
import { verticalScale } from "../config/scaling";
import { Formik } from "formik";
import * as Yup from "yup";

import ErrorMessage from "../components/forms/ErrorMessage";
import KeyboardAvoider from "../components/KeyboardAvoider";
import CountdownBar from "../components/CountdownBar";

const validationSchema = Yup.object().shape({
  accountName: Yup.string().required().min(1).max(30).label("Account name"),
  phoneNumber: Yup.string()
    .required()
    .matches(/^[0-9]+$/, "Phone number must be digits")
    .min(9)
    .max(11)
    .label("Phone number"),

  sortCode: Yup.string()
    .required()
    .matches(/^[0-9]+$/, "Sort code must be digits")
    .min(6, "Must be exactly 6 digits")
    .max(6, "Must be exactly 6 digits")
    .label("Sort code"),
  accNum: Yup.string()
    .required()
    .matches(/^[0-9]+$/, "Account number must be digits")
    .min(8, "Must be exactly 8 digits")
    .max(8, "Must be exactly 8 digits")
    .label("Account number"),
});

const items = [
  {
    id: 2,
    label: "Phone Number",
    placeholder: "Enter phone number",
    initialValue: "phoneNumber",
  },
  {
    id: 3,
    label: "Account Owner Name",
    placeholder: "Enter owner name",
    initialValue: "accountName",
  },
  {
    id: 4,
    label: "Account Number",
    placeholder: "Enter Account number",
    initialValue: "accNum",
  },
  {
    id: 5,
    label: "Sort Code",
    placeholder: "Enter sort code",
    initialValue: "sortCode",
  },
];

const AddBeneficiary = ({ navigation }) => {
  const [accountName, setAccountName] = useState("");
  const [phoneNumber, setIban] = useState("");
  const [sortCode, setPhoneNumber] = useState("");
  const [accNum, setAccNum] = useState("");
  const authContext = useContext(AuthContext);

  const handleSubmit = async ({
    accountName,
    phoneNumber,
    accNum,
    sortCode,
  }) => {
    const beneficaryCheck = await apiBeneficiaries.checkBeneficary()
    console.log(beneficaryCheck.result.code == "MATCHED")
    if (beneficaryCheck.result.code == "MATCHED") {
      const response = await api.AddBeneficiary(
        authContext.userID,
        phoneNumber,
        accountName,
        accNum,
        sortCode
      );
      navigation.navigate("SendMoney");
      console.log(response);
    }
  };



  return (
    <KeyboardAvoider>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <CountdownBar/>
        <View style={{ flex: 1, paddingVertical: verticalScale(60) }}>
          <Formik
            initialValues={{
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
                    { flex: 1, justifyContent: "flex-end" }
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
