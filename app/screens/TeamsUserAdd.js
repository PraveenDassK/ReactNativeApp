import React, { useContext, useEffect, useState } from "react";
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
import { moderateScale } from '../config/scaling'

import PinModal from "../components/PinModal";
import UserIcon from "../components/UserIcon";
import Button from "../components/AppButton";
import GlobalStyles from "../../GlobalStyles";
import KeyboardAvoider from "../components/KeyboardAvoider";
import CountdownBar from "../components/CountdownBar";
import { CheckBox } from "@rneui/themed";
import { LinearGradient } from "expo-linear-gradient";
import { Formik } from "formik";
import * as Yup from "yup";
import ErrorMessage from "../components/forms/ErrorMessage";

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
const TeamsUserAdd = ({ navigation }) => {  const [selectedOption, setSelectedOption] = useState("personal");

const handleCheckboxChange = (value) => {
  setSelectedOption(value);
};

const handleSubmit = async ({ firstName, lastName, accNum, sortCode }) => {
  console.log(firstName, lastName, accNum, sortCode);
};

return (
  <KeyboardAvoider>
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View
        style={{
          flex: 1,
          paddingHorizontal: 20,
          paddingVertical: 24,
          backgroundColor: "#FFFFFF",
          marginTop: 27,
          borderRadius: 20,
        }}
      >
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
                <Text style={styles.formLabel}>Select account type</Text>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <CheckBox
                    title="Personal"
                    checked={selectedOption === "personal"}
                    checkedColor="black"
                    onPress={() => handleCheckboxChange("personal")}
                  />
                  <CheckBox
                    title="Business"
                    checked={selectedOption === "business"}
                    checkedColor="black"
                    onPress={() => handleCheckboxChange("business")}
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
                    <Text style={styles.formLabel}>{item.label}</Text>
                    <TextInput
                      style={styles.inputBox}
                      onChangeText={handleChange(item.initialValue)}
                      placeholder={item.placeholder}
                    />
                    <ErrorMessage
                      error={errors[item.initialValue]}
                      visible={touched[item.initialValue]}
                    />
                  </View>
                ))}
              </View>
              <View style={styles.buttonContainer}>
                <TouchableOpacity>
                  <LinearGradient
                    colors={["#212529", "#3A3A3A"]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    style={styles.button}
                  >
                    <Text style={styles.buttonText}>Continue</Text>
                  </LinearGradient>
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

export default TeamsUserAdd

const styles = StyleSheet.create({
    boxShadow: {},
    container: {
      flex: 1,
      backgroundColor: GlobalStyles.DivContainer.backgroundColor,
    },
    formLabel: { fontSize: 14, fontFamily: "Montserrat", marginBottom: 5 },
    inputBox: {
      width: 332,
      height: 46,
      borderRadius: 10,
      borderWidth: 1,
      borderColor: "#EBEBEB",
      paddingHorizontal: 20,
      paddingVertical: 14,
      fontSize: 14,
      color: "#999999",
    },
    buttonContainer: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      marginTop: 50,
    },
  
    button: {
      width: 331.08,
      height: 47,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 5,
    },
    buttonText: {
      color: "#FFFFFF",
      fontSize: 14,
      fontFamily: "Montserrat",
    },
  });
  