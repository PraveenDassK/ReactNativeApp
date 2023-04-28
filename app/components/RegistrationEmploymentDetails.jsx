import React, { useContext, useEffect, useState } from "react";
//import * as React from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  Text,
  TextInput,
  Image,
  Pressable,
  useWindowDimensions,
  Dimensions,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import Screen from "./Screen";
import AuthContext from "../auth/context";
import GlobalStyles from "../../GlobalStyles";
import api from "../api/api_list";
import { Formik } from "formik";
import * as Yup from "yup";
import {
  horizontalScale,
  verticalScale,
  moderateScale,
} from "../config/scaling";
import Button from "./AppButton";
import { CheckBox } from "@rneui/themed";
import AuthScreen from "./AuthScreen";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  phoneNumber: Yup.string().required().min(10).max(10).label("Phone number"),
});

const EmploymentDetails = ({ SaveDetails, setScreenToShow }) => {
  const [selected, setSelected] = useState("");

  const handleSubmit = async () => {
    SaveDetails(null, "EmploymentDetails");
  };

  const handleBack = () => {
    console.log("!");
    setScreenToShow("MaritalStatus");
  };

  const handleCheck = () => {};
  return (
    <AuthScreen
      title="Employment details"
      img="eagleCard"
      width="70%"
      handleBack={handleBack}
    >
      <Formik
        initialValues={{
          email: "",
          phoneNumber: "",
        }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {({ handleChange, handleSubmit, errors, setFieldTouched, touched }) => (
          <View
            style={[
              styles.component1981,
              styles.mt14,
              { marginLeft: horizontalScale(10) },
            ]}
          >
            <Text>What's your employment status?</Text>
            <CheckBox
              title="Full time"
              checkedIcon="dot-circle-o"
              checkedColor="black"
              uncheckedIcon="circle-o"
              checked={"fulltime" === selected}
              onPress={() => setSelected("fulltime")}
            />
            <CheckBox
              title="Part time"
              checkedIcon="dot-circle-o"
              checkedColor="black"
              uncheckedIcon="circle-o"
              checked={"parttime" === selected}
              onPress={() => setSelected("parttime")}
            />
            <CheckBox
              title="Unemployed"
              checkedIcon="dot-circle-o"
              checkedColor="black"
              uncheckedIcon="circle-o"
              checked={"unemployed" === selected}
              onPress={() => setSelected("unemployed")}
            />
            <CheckBox
              title="Student"
              checkedIcon="dot-circle-o"
              checkedColor="black"
              uncheckedIcon="circle-o"
              checked={"student" === selected}
              onPress={() => setSelected("student")}
            />
            <CheckBox
              title="Other"
              checkedIcon="dot-circle-o"
              checkedColor="black"
              uncheckedIcon="circle-o"
              checked={"other" === selected}
              onPress={() => setSelected("other")}
            />
            {"other" === selected && (
              <TextInput
                style={[styles.childBorder, { padding: 10, marginTop:10 }]}
                onChangeText={setSelected}
              />
            )}
          </View>
        )}
      </Formik>
      <Button
        title="Continue"
        color="black"
        textColor="white"
        onPress={handleSubmit}
      />
    </AuthScreen>
  );
};

const styles = StyleSheet.create({
  childBorder: {
    borderWidth: 0.5,
    borderRadius: 10,
    borderColor: "#D3D3D3",
    opacity: 1,
    height: 50,
    marginTop: "2.5%",
    marginBottom: "5%",
  },
});

export default EmploymentDetails;
