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
import { LinearGradient } from "expo-linear-gradient";
import StepProgress from "../components/SteeperCounter";
const validationSchema = Yup.object().shape({
  firstName: Yup.string()

    .required("Name is required")

    .matches(/^[a-zA-Z\s]+$/, "Invalid name format")

    .min(2, "Name must be at least 2 characters")

    .max(20, "Name must be less than 20 characters"),

  lastName: Yup.string()

    .required("Name is required")

    .matches(/^[a-zA-Z\s]+$/, "Invalid name format")

    .min(2, "Name must be at least 2 characters")

    .max(20, "Name must be less than 20 characters"),

  sortCode: Yup.string()

    .required("Sort code is required")

    .matches(/^\d{6}$/, "Sort code must be 6 digits"),

  accNum: Yup.string()

    .required("Account number is required")

    .matches(/^\d{8}$/, "Account number must be 8 digits"),
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
  const { darkMode } = useContext(AuthContext);

  const handleCheckboxChange = (value) => {
    setSelectedOption(value);
  };

  const handleSubmit = async ({ firstName, lastName, accNum, sortCode }) => {
    console.log(firstName, lastName, accNum, sortCode);

    const requestObj = {
      externalReference: "",
      name: firstName + " " + lastName,
      birthdate: "",
      emailAddress: "",
      phoneNumber: "",
      destinationIdentifier: {
        type: "SCAN",
        accountNumber: accNum,
        sortCode: sortCode,
        iban: "",
        bic: "",
        currency: "",
        countrySpecificDetails: {
          bankName: "",
          bankAddress: "",
          bankCity: "",
          bankBranchName: "",
          bankBranchCode: "",
          bankCode: "",
          chineseId: "",
          province: "",
          business: true,
        },
      },
      defaultReference: "Friend",
      idToReplace: "",
      address: {
        addressLine1: "",
        addressLine2: "",
        postTown: "",
        postCode: "",
        country: "",
      },
      qualifier: "",
    };

    const obj = {
      externalReference: "",
      name: "",
      birthdate: "",
      emailAddress: "",
      phoneNumber: "",
      destinationIdentifier: {
        type: "",
        accountNumber: "",
        sortCode: "",
        iban: "",
        bic: "",
        currency: "",
        countrySpecificDetails: {
          bankName: "",
          bankAddress: "",
          bankCity: "",
          bankBranchName: "",
          bankBranchCode: "",
          bankCode: "",
          chineseId: "",
          province: "",
          business: true,
        },
      },
      defaultReference: "",
      idToReplace: "",
      address: {
        addressLine1: "",
        addressLine2: "",
        postTown: "",
        postCode: "",
        country: "",
      },
      qualifier: "",
    };
    console.log(requestObj);

    navigation.navigate("AddBeneficiaryContact", requestObj);

    // const response = await api.AddBeneficiary(
    //   authContext.userID,
    //   phoneNumber,
    //   accountName,
    //   accNum,
    //   sortCode
    // );
  };

  return (
    <KeyboardAvoider
     darkMode={darkMode}
    >
      {/* <CountdownBar /> */}
      <View
        style={{
          height: "100%",
          flex: 1,
          backgroundColor:
            darkMode === "DARK" ? GlobalStyles.Color.darkTheme_bg : null,
        }}
      >
        <StepProgress currentStep={1} darkMode={darkMode} />
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View
            style={{
              flex: 1,
              paddingHorizontal: 20,
              paddingVertical: 24,
              backgroundColor:
                darkMode === "DARK"
                  ? GlobalStyles.Color.secondaryDarkTheme_bg
                  : GlobalStyles.Color.white,
              marginTop: 27,
              borderTopEndRadius: 20,
              borderTopStartRadius: 20,
            }}
          >
            <Formik
              initialValues={{
                firstName: "",
                lastName: "",
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
                    <Text
                      style={
                        darkMode === "DARK"
                          ? styles.darkformLabel
                          : styles.formLabel
                      }
                    >
                      Select account type
                    </Text>
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        backgroundColor:
                          darkMode === "DARK"
                            ? GlobalStyles.Color.secondaryDarkTheme_bg
                            : GlobalStyles.Color.white,
                      }}
                    >
                      <CheckBox
                        title="Personal"
                        checked={selectedOption === "personal"}
                        checkedColor={darkMode === "DARK" ? "white" : "black"}
                        onPress={() => handleCheckboxChange("personal")}
                        containerStyle={{
                          backgroundColor:
                            darkMode === "DARK"
                              ? GlobalStyles.Color.secondaryDarkTheme_bg
                              : GlobalStyles.Color.white,
                        }}
                        textStyle={{
                          color:
                            darkMode === "DARK"
                              ? GlobalStyles.Color.white
                              : GlobalStyles.Color.secondaryDarkTheme_bg,
                        }}
                      />
                      <CheckBox
                        title="Business"
                        checked={selectedOption === "business"}
                        checkedColor={darkMode === "DARK" ? "white" : "black"}
                        onPress={() => handleCheckboxChange("business")}
                        containerStyle={{
                          backgroundColor:
                            darkMode === "DARK"
                              ? GlobalStyles.Color.secondaryDarkTheme_bg
                              : GlobalStyles.Color.white,
                        }}
                        textStyle={{
                          color:
                            darkMode === "DARK"
                              ? GlobalStyles.Color.white
                              : GlobalStyles.Color.secondaryDarkTheme_bg,
                        }}
                      />
                    </View>

                    {items.map((item, index) => (
                      <View
                        key={item.id}
                        style={{
                          marginTop: 22,
                        }}
                      >
                        {console.log("item", item)}
                        <Text
                          style={
                            darkMode === "DARK"
                              ? styles.darkformLabel
                              : styles.formLabel
                          }
                        >
                          {item.label}
                        </Text>
                        <TextInput
                          style={
                            darkMode === "DARK"
                              ? styles.darkinputBox
                              : styles.inputBox
                          }
                          onChangeText={handleChange(item.initialValue)}
                          placeholder={item.placeholder}
                          placeholderTextColor={
                            darkMode === "DARK"
                              ? GlobalStyles.Color.white
                              : null
                          }
                        />
                        <ErrorMessage
                          error={errors[item.initialValue]}
                          visible={touched[item.initialValue]}
                        />
                      </View>
                    ))}
                  </View>
                  {/* <Button
                      title="Continue"
                      textColor={GlobalStyles.Color.white}
                      color="black"
                      style={styles.buttonColor}
                      onPress={handleSubmit}
                    /> */}
                  <View style={styles.buttonContainer}>
                    <TouchableOpacity onPress={handleSubmit}>
                      <LinearGradient
                        colors={
                          darkMode === "DARK"
                            ? ["#178BFF", "#0101FD"]
                            : ["#212529", "#3A3A3A"]
                        }
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        style={
                          darkMode === "DARK"
                            ? styles.darkbuttonPayNew
                            : styles.buttonPayNew
                        }
                      >
                        <Text style={styles.buttonPayNewText}>Continue</Text>
                      </LinearGradient>
                    </TouchableOpacity>
                  </View>
                </>
              )}
            </Formik>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </KeyboardAvoider>
  );
};

const styles = StyleSheet.create({
  boxShadow: {},
  container: {
    flex: 1,
    backgroundColor: GlobalStyles.DivContainer.backgroundColor,
  },
  formLabel: { fontSize: 14, fontFamily: "Montserrat", marginBottom: 5 },
  darkformLabel: {
    fontSize: 14,
    fontFamily: "Montserrat",
    marginBottom: 5,
    color: GlobalStyles.Color.white,
  },
  inputBox: {
    width: "95%",
    height: 46,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: GlobalStyles.Color.borderColor,
    paddingHorizontal: 20,
    paddingVertical: 14,
    fontSize: 14,
    color: GlobalStyles.Color.darkGray,
  },
  darkinputBox: {
    width: "95%",
    height: 46,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: GlobalStyles.Color.secondaryDarkTheme_bg,
    paddingHorizontal: 20,
    paddingVertical: 14,
    fontSize: 14,
    color: GlobalStyles.Color.darkGray,
    backgroundColor: GlobalStyles.Color.darkTheme_bg,
  },
  buttonContainer: {
    width: "100%",
    marginTop: "15%",
  },

  // button: {
  //   width: 331.08,
  //   height: 47,
  //   display: "flex",
  //   flexDirection: "column",
  //   justifyContent: "center",
  //   alignItems: "center",
  //   borderRadius: 5,
  // },
  buttonText: {
    color: GlobalStyles.Color.white,
    fontSize: 14,
    fontFamily: "Montserrat",
  },
  buttonPayNew: {
    borderRadius: 10,
    // backgroundColor: GlobalStyles.Color.lightBlack,
    height: 47,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
  },
  darkbuttonPayNew: {
    borderRadius: 10,
    // backgroundColor: GlobalStyles.Color.gray_500,
    height: 47,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
  },
  buttonPayNewText: {
    color: GlobalStyles.Color.white,
    fontFamily: "Montserrat-Medium",
    fontSize: 14,
    // marginLeft: 6,
  },
});

export default AddBeneficiary;
