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
import { CheckBox } from "@rneui/themed";

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
    label: "First name",
    placeholder: "Enter your name",
    initialValue: "firstName",
  },
  {
    id: 3,
    label: "Last name",
    placeholder: "Enter your name",
    initialValue: "lastName",
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
  const [selectedOption, setSelectedOption] = useState("personal");

  const handleCheckboxChange = (value) => {
    setSelectedOption(value);
  };

  const handleSubmit = async ({
    firstName,
    lastName,
    accNum,
    sortCode,
  }) => {
    console.log(firstName, lastName, accNum, sortCode)

    const requestObj = {
      "externalReference": "",
      "name": firstName + " " + lastName,
      "birthdate": "",
      "emailAddress": "",
      "phoneNumber": "",
      "destinationIdentifier": {
        "type": "SCAN",
        "accountNumber": accNum,
        "sortCode": sortCode,
        "iban": "",
        "bic": "",
        "currency": "",
        "countrySpecificDetails": {
          "bankName": "",
          "bankAddress": "",
          "bankCity": "",
          "bankBranchName": "",
          "bankBranchCode": "",
          "bankCode": "",
          "chineseId": "",
          "province": "",
          "business": true
        }
      },
      "defaultReference": "Friend",
      "idToReplace": "",
      "address": {
        "addressLine1": "",
        "addressLine2": "",
        "postTown": "",
        "postCode": "",
        "country": ""
      },
      "qualifier": ""
    }

    const obj = {
      "externalReference": "",
      "name": "",
      "birthdate": "",
      "emailAddress": "",
      "phoneNumber": "",
      "destinationIdentifier": {
        "type": "",
        "accountNumber": "",
        "sortCode": "",
        "iban": "",
        "bic": "",
        "currency": "",
        "countrySpecificDetails": {
          "bankName": "",
          "bankAddress": "",
          "bankCity": "",
          "bankBranchName": "",
          "bankBranchCode": "",
          "bankCode": "",
          "chineseId": "",
          "province": "",
          "business": true
        }
      },
      "defaultReference": "",
      "idToReplace": "",
      "address": {
        "addressLine1": "",
        "addressLine2": "",
        "postTown": "",
        "postCode": "",
        "country": ""
      },
      "qualifier": ""
    }
    console.log(requestObj)

    navigation.navigate("AddBeneficiaryContact", requestObj)

    // const response = await api.AddBeneficiary(
    //   authContext.userID,
    //   phoneNumber,
    //   accountName,
    //   accNum,
    //   sortCode
    // );
  };



  return (
    <KeyboardAvoider>
      <CountdownBar />
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={{ flex: 1, paddingVertical: verticalScale(60) }}>
          <Formik
            initialValues={{
              firstName: "Jack",
              lastName: "Huang",
              sortCode: "123456",
              accNum: "12341234",
            }}
            onSubmit={handleSubmit}
          // validationSchema={validationSchema}
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

                  <Text>Select account type</Text>
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <CheckBox
                      title="Personal"
                      checked={selectedOption === 'personal'}
                      checkedColor="black"
                      onPress={() => handleCheckboxChange('personal')}
                    />
                  </View>
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <CheckBox
                      title="Business"
                      checked={selectedOption === 'business'}
                      checkedColor="black"
                      onPress={() => handleCheckboxChange('business')}
                    />
                  </View>

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
