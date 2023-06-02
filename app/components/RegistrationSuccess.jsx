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
import FadeInView from "./fadeInview";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  phoneNumber: Yup.string().required().min(10).max(10).label("Phone number"),
});

const Success = ({ SaveDetails, navigation }) => {
  const handleSubmit = async () => {
    navigation.navigate("ProofOfResidency");
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <FadeInView>
        <View style={styles.successContainer}>
          <Text style={styles.successText}>Congratulations</Text>
          <Text style={styles.successText}>Welcome to Carbonyte!</Text>
          <Text style={styles.successSubText}>
            Your carbonyte account is ready. 
            We need a few more details before you can use it.
          </Text>
        </View>
      </FadeInView>
      <View style={styles.buttonContainer}>
        <Button
          title="Continue"
          color="black"
          textColor="white"
          onPress={() => handleSubmit()}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    position: "absolute",
    bottom: 10,
    width: "80%",
  },
  successContainer: {
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  successText: {
    fontSize: 30,
  },
  successSubText: {
    fontSize: 10,
  },
});

export default Success;
