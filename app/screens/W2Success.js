import React, { useContext, useEffect, useState, useRef } from "react";
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
  ScrollView,
} from "react-native";

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
import Screen from "../components/Screen";
import Button from "../components/AppButton";
import FadeInView from "../components/fadeInview";
import { Animated, Easing } from "react-native";
import Lottie from "lottie-react-native";
const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  phoneNumber: Yup.string().required().min(10).max(10).label("Phone number"),
});

const W2Success = ({ SaveDetails, navigation }) => {
  const animationProgress = useRef(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(animationProgress.current, {
      toValue: 1,
      duration: 5000,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start();
  }, []);
  const handleSubmit = async () => {
    navigation.navigate("Login");
  };

  return (
    <Screen
      style={{ width: "100%", alignItems: "center", justifyContent: "center" }}
    >
      <ScrollView
        style={{
          flex: 1,
        }}
      >
        <View>
          <FadeInView>
            <View style={styles.successContainer}>
              <Lottie
                progress={animationProgress.current}
                source={require("../assets/Animation/SuccessImage.json")}
                style={{ width: "100%" }}
                autoPlay={true}
                loop
              />
              <Text style={styles.successText}>Congratulations</Text>
              <Text style={styles.accountReady}>
                Your Carbonyte account is ready.
              </Text>
              {/* <Text style={styles.successSubText}>Your KYC is being processed</Text> */}
            </View>
          </FadeInView>
          <View style={styles.bottomContainer}>
            <View style={styles.eachContaimer}>
              <Image
                source={require("../assets/logo-carbonytetext.png")}
                style={{ width: "100%" }}
              />
            </View>
            <View style={styles.eachTextContainer}>
              <View>
                <Text style={styles.headerText}>Customer ID</Text>
                <Text style={styles.headerSubText}>123456681646</Text>
              </View>
            </View>
            <View style={styles.eachTextContainer}>
              <View>
                <Text style={styles.headerText}>Account number</Text>
                <Text style={styles.headerSubText}>123456681646</Text>
              </View>
              <View>
                <Text style={styles.headerText}>Account number</Text>
                <Text style={styles.headerSubText}>123456681646</Text>
              </View>
            </View>
            <View style={styles.eachTextContainer}>
              <View>
                <Text style={styles.headerText}>Card</Text>
                <Text style={styles.headerSubText}>**** 4681</Text>
              </View>
              <View>
                <Image
                  source={require("../assets/yellowCard.png")}
                  style={{ width: 50, height: 70 }}
                />
              </View>
            </View>
          </View>
        </View>
        <View style={{ height: 100 }}></View>
      </ScrollView>

      <View style={styles.buttonContainer}>
        <Button
          title="Login"
          color="black"
          textColor="white"
          onPress={() => handleSubmit()}
        />
      </View>
    </Screen>
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
    width: "100%",
  },
  successText: {
    fontSize: 30,
    color: "#0101FD",
  },
  successSubText: {
    fontSize: 10,
  },
  accountReady: {
    color: "#000000",
    fontFamily: "Montserrat",
    fontWeight: "bold",
    fontSize: 18,
  },
  bottomContainer: {
    backgroundColor: "#ffffff",
    shadowColor: "#0000000D",
    width: "80%",
    shadowOffset: 10,
    shadowOpacity: 0.1,
    shadowRadius: 0.1,
    marginTop: "10%",
    borderRadius: 10,
    marginLeft: "10%",
  },
  eachContaimer: {
    borderBottomColor: "#0000000D",
    borderBottomWidth: 3,
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  eachTextContainer: {
    borderBottomColor: "#0000000D",
    borderBottomWidth: 3,
    paddingVertical: 30,
    paddingHorizontal: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerText: {
    color: "#999999",
    fontFamily: "Montserrat",
    fontWeight: "regular",
    fontSize: 14,
  },
  headerSubText: {
    color: "#000000",
    fontFamily: "Montserrat",
    fontWeight: "normal",
    fontSize: 16,
  },
});

export default W2Success;
