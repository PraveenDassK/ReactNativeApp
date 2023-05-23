import React, { useContext, useEffect, useState } from "react";
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
import apiLoginRegister from "../api/apiLogin";
import * as Yup from "yup";
import {
  horizontalScale,
  verticalScale,
  moderateScale,
} from "../config/scaling";

import Button from "./AppButton";
import { Formik, Field, Form } from "formik";
import { Dropdown } from "react-native-element-dropdown";
import { CheckBox } from "@rneui/themed";
import AuthScreen from "./AuthScreen";

const CompanyInformation = ({ SaveDetails, setScreenToShow }) => {

  const handleSubmit = ({ details }) => {
    SaveDetails(details, "CompanyInformation");
  };
  const handleBack = () => {
    console.log("!");
    setScreenToShow("CompanyAddress");
  };
  return (
    <AuthScreen
      title="Tell us something more"
      img="turtleCard"
      handleBack={handleBack}
    >
      <Formik
        initialValues={{
          details: "",
        }}
        onSubmit={handleSubmit}
      >
        {({ handleChange, handleSubmit, setFieldTouched }) => (
          <View style={[styles.component1981, styles.mt14]}>
            <Text>About your business</Text>
            <TextInput
              editable
              multiline
              numberOfLines={4}
              maxLength={500}
              minLength={250}
              placeholder="Write about your business... (min 250 characters)"
              placeholderTextColor="grey"
              keyboardType="Text"
              onBlur={() => setFieldTouched("details")}
              onChangeText={handleChange("details")}
              style={[styles.component1981Child, styles.childBorder]}
            />
            <Button
              title="Continue"
              color="black"
              textColor="white"
              onPress={() => handleSubmit()}
            />
          </View>
        )}
      </Formik>
    </AuthScreen>
  );
};

const styles = StyleSheet.create({
  childBorder: {
    borderWidth: 0.5,
    borderRadius: 10,
    borderColor: "#D3D3D3",
    opacity: 1,
    height: 100,
    marginTop: "2.5%",
    marginBottom: "5%",
  },
});

export default CompanyInformation;
