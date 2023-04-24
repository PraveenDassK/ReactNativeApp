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
  Modal
} from "react-native";
import Screen from "./Screen";
import AuthContext from "../auth/context";
import GlobalStyles from "../../GlobalStyles";
import api from "../api/api_list";
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
import DateTimePicker from "@react-native-community/datetimepicker";
import moment from "moment";
import colors from "../config/colors";
import AuthScreen from "./AuthScreen";
import ErrorMessage from "./forms/ErrorMessage";
import Privacy from './PrivacyPolicy';

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required().min(1).max(11).label("First name"),
  lastName: Yup.string().required().min(1).max(11).label("Last name"),
});

const PersonalDetails = ({ SaveDetails, setScreenToShow, accountType }) => {
  const [gender, setGender] = useState("");
  const [birthday, setBirthday] = useState(moment().toDate());
  const [privacyPolicy, setPrivacyPolicy] = useState(false);
  const [isFocus, setIsFocus] = useState(false);

  //Date
  const [dob, setDOB] = useState(new Date(1598051730000));
  const [viewDate, setView] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setBirthday(currentDate);
    setView(false);
  };

  const genderData = [
    {
      label: "Male",
      value: "Male",
    },
    {
      label: "Female",
      value: "Female",
    },
    {
      label: "Other",
      value: "Other",
    },
  ];

  /**
   * @dev Data is validated here
   * @notice This checks if the fail event is True
   * @returns If an Item has failed validation it returns null
   * This will not trigger the save details
   */
  const handleSubmit = ({ firstName, lastName }) => {
    //Checs if the names have been filled
    //If they haven't then ask to fill out
    // if (!firstName && !lastName) {
    //   alert("Please fill in your name");
    //   return;
    // }
    //Then check if the privacy policy and gender box has been filled
    if (!gender) {
      alert("Please finish filling in the form");
      return;
    }
    if (!privacyPolicy) {
      alert("Privacy policy must be accepted");
      return;
    }
    //Then check for birthdate
    //Users must be over 18
    const difference = Math.abs(moment(birthday).diff(moment()) / 1000);
    const age = Math.floor(difference / 86400 / 365);
    console.log(age);
    if (age < 18) {
      //alert("Must be 18 or over")
      //return;
    }
    console.log("!");
    SaveDetails(
      {
        firstName: firstName,
        lastName: lastName,
        gender: gender,
        //birthday: moment(birthday).format('DD-MM-YYYY'),
        privacyPolicy,
        privacyPolicy,
      },
      "PersonalDetails"
    );
  };

  const handleBack = () => {
    console.log(accountType);
    if (accountType == "Business") {
      setScreenToShow("CompanyDirectors");
      return;
    }
    setScreenToShow("");
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <AuthScreen
        title={viewDate ? "" : "A bit about you"}
        img="bear"
        width="40%"
        handleBack={handleBack}
      >
        <Formik
          initialValues={{ firstName: "", lastName: "" }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          {({
            handleChange,
            handleSubmit,
            setFieldTouched,
            errors,
            touched,
          }) => (
            <View
              style={[
                styles.component1981,
                styles.mt14,
                { marginLeft: horizontalScale(10) },
              ]}
            >
              <Text>First name</Text>
              <TextInput
                placeholder="Enter you first name"
                placeholderTextColor="#D3D3D3"
                keyboardType="Text"
                onBlur={() => setFieldTouched("firstName")}
                onChangeText={handleChange("firstName")}
                style={[
                  styles.component1981Child,
                  styles.childBorder,
                  { padding: 10 },
                ]}
              />
              <ErrorMessage
                error={errors.firstName}
                visible={touched.firstName}
              />
              <Text>Last name</Text>
              <TextInput
                placeholder="Enter you last name"
                placeholderTextColor="#D3D3D3"
                keyboardType="Text"
                onBlur={() => setFieldTouched("lastName")}
                onChangeText={handleChange("lastName")}
                style={[
                  styles.component1981Child,
                  styles.childBorder,
                  { padding: 10 },
                ]}
              />
              <ErrorMessage
                error={errors.lastName}
                visible={touched.lastName}
              />
              <Text>Gender</Text>
              <Dropdown
                style={[styles.dropdown]}
                containerStyle={styles.dropdownContainer}
                data={genderData}
                maxHeight={100}
                labelField="label"
                valueField="value"
                placeholder={"Select an option"}
                placeholderStyle={{ fontSize: 14, color: "#D3D3D3" }}
                value={gender}
                onChange={(item) => {
                  setGender(item.value);
                  setIsFocus(false);
                  console.log(item);
                }}
              />
              <Text>Date of Birth</Text>
              <Button
                title="Set"
                textColor="black"
                color="white"
                onPress={() => setView(true)}
              />

              {viewDate && (
                <DateTimePicker
                  testID="dateTimePicker"
                  value={dob}
                  mode="date"
                  display="spinner"
                  onChange={onChange}
                />
              )}

              <CheckBox
                title="I have read and accepted the Privacy Policy"
                checked={privacyPolicy}
                checkedColor="black"
                onPress={() => setPrivacyPolicy(!privacyPolicy)}
              />

              <Button
                title="continue"
                textColor="white"
                color="black"
                onPress={handleSubmit}
              />
            </View>
          )}
        </Formik>
      </AuthScreen>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  dropdown: {
    borderRadius: 10,
    borderWidth: 0.5,
    height: 50,
    paddingHorizontal: 8,
    marginBottom: "5%",
    marginTop: "2.5%",
    opacity: 1,
    borderColor: "#D3D3D3",
  },
  dropdownContainer: {
    borderBottomEndRadius: 10,
    borderBottomStartRadius: 10,
  },
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

export default PersonalDetails;
