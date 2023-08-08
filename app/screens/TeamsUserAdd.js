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
  Dimensions,
  ImageBackground,
} from "react-native";
import { moderateScale } from "../config/scaling";

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
import AuthContext from "../auth/context";
import LinearAccountButton from "../components/LinearAccountButton";
const height = Dimensions.get("window").height;
const smallDevice = { height: 650 };
const isSmallDevice = height < smallDevice.height;
const items = [
  {
    id: 2,
    label: "Name",
    placeholder: "Enter your name",
    initialValue: "name",
  },
  {
    id: 3,
    label: "Email",
    placeholder: "Enter your email address",
    initialValue: "email",
  },
  {
    id: 4,
    label: "Phone no.",
    placeholder: "Enter phone number",
    initialValue: "phonenumber",
  },
  {
    id: 5,
    label: "City/Town",
    placeholder: "Enter City/Town",
    initialValue: "city",
  },
  {
    id: 6,
    label: "Post Code",
    placeholder: "Enter PostCode",
    initialValue: "postcode",
  },
];
const TeamsUserAdd = ({ navigation }) => {
  const [selectedOption, setSelectedOption] = useState("personal");
  const { darkMode } = useContext(AuthContext);
  const handleCheckboxChange = (value) => {
    setSelectedOption(value);
  };

  const handleSubmit = async ({ name, email, phonenumber, postcode, city }) => {
    console.log(name, email, phonenumber, postcode, city);
  };
  const validationSchema = Yup.object().shape({
    phonenumber: Yup.string()
      .required("Phone No is required")
      .matches(/^\+?[1-9]\d{1,14}$/, "Invalid phone number"),

    email: Yup.string()
      .required("Email is Required")
      .email("Invalid email address"),
    name: Yup.string()
      .required("Name is required")
      .matches(/^[a-zA-Z\s]+$/, "Invalid name format")
      .min(2, "Name must be at least 2 characters")
      .max(20, "Name must be less than 20 characters"),
    postcode: Yup.string().required("Postcode is required"),
    city: Yup.string().required("City is required"),

    // address: Yup.string().max(
    //   100,

    //   "Address must be less than 100 characters"
    // ),
  });

  return (
    <KeyboardAvoider>
      <ImageBackground
        source={
          darkMode === "DARK"
            ? require("../assets/dashboardDark/DashboardBottom.jpg")
            : require("../assets/backgrounds/Dashboard.jpg")
        }
        resizeMode="contain"
        imageStyle={{
          bottom: "-70%", // Whatever offset you want from the bottom
        }}
        style={{
          width: "100%",
          flex: 1,
          backgroundColor:
            darkMode === "DARK"
              ? GlobalStyles.Color.darkTheme_bg
              : GlobalStyles.Color.lightTheme_bg,
        }}
      >
        {/* <TouchableWithoutFeedback onPress={Keyboard.dismiss}> */}
        <View
          style={{
            width: "100%",
            paddingHorizontal: "5%",
            paddingTop: isSmallDevice ? "0%" : "5%",
            flex: 1,
          }}
        >
          <View
            style={{
              // paddingHorizontal: 20,
              paddingTop: 24,
              backgroundColor:
                darkMode === "DARK" ? "rgba(255,255,255,0.2)" : "#FFFFFF",
              marginTop: isSmallDevice ? 10 : 27,
              borderRadius: 20,
              width: "100%",
              flex: 0.8,
            }}
          >
            <Formik
              initialValues={{
                name: "",
                email: "",
                postcode: "",
                city: "",
                phonenumber: "",
              }}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({
                handleChange,
                handleSubmit,
                errors,
                setFieldTouched,
                touched,
              }) => (
                <View style={styles.mainContainer}>
                  {/* <Text
                      style={
                        darkMode === "DARK"
                          ? styles.darkformLabel
                          : styles.formLabel
                      }
                    >
                      Select account type
                    </Text> */}

                  {items.map((item, index) => (
                    <View
                      key={item.id}
                      style={{
                        width: "100%",
                        marginHorizontal: "3%",
                        marginBottom: "5%",
                      }}
                    >
                      <Text
                        style={
                          darkMode === "DARK" ? styles.darklable : styles.lable
                        }
                      >
                        {item.label}
                      </Text>
                      <TextInput
                        onBlur={() => setFieldTouched(item.initialValue)}
                        onChangeText={handleChange(item.initialValue)}
                        onChange={() => {
                          if (item.label === "Postcode") {
                            handleAddress(item.initialValue);
                          }
                        }}
                        // style={{ fontSize: 24, marginTop: "1%" }}
                        style={
                          darkMode === "DARK"
                            ? styles.darkinputBox
                            : styles.inputBox
                        }
                        placeholder={item.placeholder}
                        placeholderTextColor={
                          darkMode === "DARK" ? GlobalStyles.Color.white : null
                        }
                      />

                      <ErrorMessage
                        error={errors[item.initialValue]}
                        visible={touched[item.initialValue]}
                      />
                    </View>
                  ))}
                  <View style={{ marginTop: "5%" }}>
                    <LinearAccountButton
                      title="Continue"
                      onPress={handleSubmit}
                      darkMode={darkMode}
                    />
                  </View>
                </View>
              )}
            </Formik>
          </View>
        </View>
        {/* </TouchableWithoutFeedback> */}
      </ImageBackground>
    </KeyboardAvoider>
  );
};

export default TeamsUserAdd;

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
  mainContainer: {
    width: "100%",
  },
  darkinputBox: {
    width: "100%",
    height: 46,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: GlobalStyles.Color.secondaryDarkTheme_bg,
    paddingHorizontal: 20,
    paddingVertical: 14,
    fontSize: 14,
    color: GlobalStyles.Color.darkGray,
    backgroundColor: GlobalStyles.Color.darkTheme_bg,
    marginTop: 10,
  },
  darklable: {
    color: GlobalStyles.Color.white,
    fontFamily: "Montserrat",
    fontSize: 14,
  },
});
