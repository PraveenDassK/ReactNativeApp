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

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  phoneNumber: Yup.string().required().min(10).max(10).label("Phone number"),
});

const ConfirmDetails = ({ SaveDetails, setScreenToShow }) => {
  const [loading, setLoading] = useState(false)

  const handleSubmit = async () => {
    setLoading(true)
    await SaveDetails(null, "Confirm");
    setLoading(false)
  };

  const handleBack = () => {
    
    setScreenToShow("Income");
  };
  
  return (
    <AuthScreen title="Confirm registration" img="turtleCard" handleBack={handleBack}>
      {loading ?
        <Button
          title="Submission in progress"
          color="black"
          textColor="white"
          onPress={() => {}}
        />
        :
        <Button
          title="Continue"
          color="black"
          textColor="white"
          onPress={handleSubmit}
        />
      }

    </AuthScreen>
  );
};

const styles = StyleSheet.create({

});

export default ConfirmDetails;
