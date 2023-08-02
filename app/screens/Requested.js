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
import Screen from "../components/Screen";
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
import ErrorMessage from "../components/forms/ErrorMessage";
import Button from "../components/AppButton";

import RegistrationPersonalDetails from "../components/RegistrationPersonalDetails.jsx";
import RegistraionEmailAndPhone from "../components/RegistrationPersonalDetails.jsx";
import PersonalOrBusiness from "../components/RegistrationPersonalOrBusiness.jsx";
import DirectororPartner from "../components/RegistartionDirectororPartner";
const Registration = ({ navigation }) => {
  //Personal details
  const [accountType, setPersonalBusiness] = useState(null);
  const [personalDetails, setPersonalDetails] = useState(null);
  const [emailandPhone, setEmailandPhone] = useState(null);
  const [nationality, setNationality] = useState(null);
  const [addresses, setAddresses] = useState(null);

  const [registrationNumberDetails, setRegistrationNumberDetails] =
    useState(null);
  const [companyDetails, setCompanyDetails] = useState(null);
  const [screenToShow, setScreenToShow] = useState(null);

  /**
   * @dev Use this to differentiate between Personal or business accounts
   * @param {String} type This is the choice of which account to use
   */
  const accountSelector = async (type) => {
    await sendDetails();

    if (type == "Personal") {
      setScreenToShow("Registration");
      setPersonalBusiness(type);
    } else {
      setScreenToShow("BusinessRegNumber");
      setPersonalBusiness(type);
    }
    
  };

  /**
   * @notice Validation for the objects are done on the Component side
   * @todo Add business details in
   * @param {Object} details The details that the component sends back
   * @param {Str} page This is the page that the information is coming from
   */
  const detailsSaver = (details, page) => {
    switch (page) {
      case "RegistrationPersonalDetails":
        setPersonalDetails(details);
        setScreenToShow("RegistrationEmailAndPhone");
        break;
      case "RegistrationEmailAndPhone":
        setPersonalDetails(details);
        setScreenToShow("EmailandPhone");
        break;
      case "PersonalOrBusiness":
        break;
    }
  };

  const pagePicker = () => {
    switch (screenToShow) {
      case "RegistrationPersonalDetails":
        return <RegistrationPersonalDetails SaveDetails={detailsSaver} />;
      case "RegistrationEmailAndPhone":
        return <RegistrationPersonalDetails SaveDetails={detailsSaver} />;
      default:
        return <PersonalOrBusiness chooseAccount={accountSelector} />;
    }
  };

  const handleSubmit = async ({ email, phoneNumber }) => {};

  return <Screen>{pagePicker()}</Screen>;
};

const styles = StyleSheet.create({});

export default Registration;
