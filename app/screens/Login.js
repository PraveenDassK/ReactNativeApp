import React, { useContext, useEffect, useLayoutEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Image,
  TouchableWithoutFeedback,
  ActivityIndicator,
  Keyboard,
} from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";

import AuthContext from "../auth/context";
import Button from "../components/AppButton";
import ErrorMessage from "../components/forms/ErrorMessage";

import GlobalStyles from "../../GlobalStyles";
import loginApi from "../api/apiLogin";
import Screen from "../components/Screen";

import colors from "../config/colors";

import {
  horizontalScale,
  verticalScale,
  moderateScale,
} from "../config/scaling";
import authStorage from "../auth/storage";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  phoneNumber: Yup.string().required().min(9).max(11).label("Phone number"),
});

const Login = ({ navigation }) => {

  const [isLoading, setIsLoading] = useState(false);

  const {
    user,
    currentUser,
    setCurrentUser,
    setUserID,
    setAccountID,
    setUser,
    setCardID,
    expoPushToken,
    setCustomerDetails,
  } = useContext(AuthContext);

  const handleSubmit = async ({ email, phoneNumber }) => {
    setIsLoading(true);
    phoneNumber = phoneNumber;
    
    const request = await loginApi.Login({ email, phoneNumber });
    setIsLoading(false);
    setUser({ email, phoneNumber });
    if (!request.result) return alert("Could not send otp");

    navigation.navigate("OTPVerificationPersonal", { registration: true });
  };

  const dummyLogin = async () => {
    //This sets the loading icon and disables the button
    setIsLoading(true);

    const token = "eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTUxMiIsInR5cCI6IkpXVCJ9.eyJEYXRhIjoie1wiQ3VzdG9tZXJJZFwiOlwiQ0MxXCIsXCJFbWFpbFwiOlwiamFjay5oQGNhcmJvbnl0ZS5pb1wiLFwiUGhvbmVOdW1iZXJcIjpcIjc5MjcyMDE2NDlcIn0iLCJleHAiOjE2ODY5MDY3MzIsImlzcyI6IkNhcmJvbnl0ZSIsImF1ZCI6Imh0dHBzOi8vbG9jYWxob3N0OjUwMDMifQ.qAg1FhCF1gyycVP4kXEIbHqLYPpXIkr0iWPfl_2eNcGdKR5-RoADme5jj8_m8oqLtkykpEuzIsQsgmCxOKi_fQ"
    const altToken = "eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTUxMiIsInR5cCI6IkpXVCJ9.eyJEYXRhIjoie1wiQ3VzdG9tZXJJZFwiOlwiQ0MxMTIwXCIsXCJFbWFpbFwiOlwicmVudmljay5mQGNhcmJvbnl0ZS5pb1wiLFwiUGhvbmVOdW1iZXJcIjpcIjc3OTg2ODE2OTBcIn0iLCJleHAiOjE2OTEwNTE0NTEsImlzcyI6IkNhcmJvbnl0ZSIsImF1ZCI6Imh0dHBzOi8vbG9jYWxob3N0OjUwMDMifQ.UA3CV4oequvo-XTs2ZjO0e-mCYb4rxHT8wFbdq42JqUXlWht3x3aX4VRDUpL2WeTjir69IEwDc81mHDDCEA6yg"
    const IDs = await loginApi.GetIDs(altToken);

    authStorage.storeToken(altToken);
    setCurrentUser(IDs.token);
    setUserID(IDs.userID);
    setAccountID(IDs.accountID);
    setCardID(IDs.cardID);
    setCustomerDetails(IDs.customerDetails);

    //Turns off the loading
    setIsLoading(false);
  }

  return (
    <Screen style={{ backgroundColor: "white" }}>
      <View style={{ flex: 1, justifyContent: "flex-end" }}>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Image
            style={{ width: "100%" }}
            resizeMode="contain"
            source={require("../assets/login/LoginAnimalFull.png")}
          />
        </View>

        <View
          style={{
            backgroundColor: colors.light,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
          }}
        >
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              marginVertical: 30,
            }}
          >
            <Text style={{ fontSize: 30 }}>Log in to your account</Text>
            <Text style={[styles.otp]}>
              OTP will be sent to verify your number and email ID.
            </Text>
          </View>

          <Formik
            initialValues={{ email: "", phoneNumber: "" }}
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
                <View
                  style={{
                    paddingHorizontal: 30,
                    paddingVertical: 50,
                    backgroundColor: "white",
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                  }}
                >
                  <Text>Mobile number</Text>
                  <View
                    style={[
                      styles.component1981,
                      styles.mt14,
                      { marginLeft: horizontalScale(10) },
                    ]}
                  >
                    <TextInput
                      keyboardType="numeric"
                      onBlur={() => setFieldTouched("phoneNumber")}
                      onChangeText={handleChange("phoneNumber")}
                      style={[
                        styles.component1981Child,
                        styles.childBorder,
                        { padding: 10 },
                      ]}
                    />
                  </View>
                  <View
                    style={[styles.component1971, styles.mt_850, styles.ml24]}
                  >
                    <View
                      style={[styles.component1971Child, styles.childBorder]}
                    />
                    <Text
                      style={[
                        styles.text1,
                        styles.networkPosition,
                        styles.text1Typo,
                      ]}
                    >
                      +44
                    </Text>
                    <Image
                      style={[styles.maskGroup288, styles.keysPosition]}
                      resizeMode="cover"
                      source={require("../assets/image-ukflag.png")}
                    />
                  </View>
                  <ErrorMessage
                    error={errors.phoneNumber}
                    visible={touched.phoneNumber}
                  />
                  <Text
                    style={[
                      styles.enterYourEmailId,
                      styles.mt27,
                      styles.ml25,
                      styles.enterColor,
                    ]}
                  >
                    Email ID
                  </Text>
                  <TextInput
                    autoCapitalize="none"
                    textContentType="emailAddress"
                    keyboardType="email-address"
                    onBlur={() => setFieldTouched("email")}
                    onChangeText={handleChange("email")}
                    style={[
                      styles.signUpPersonalItem,
                      styles.mt9,
                      styles.ml24,
                      styles.childBorder,
                      { padding: 10 },
                    ]}
                  />
                  <ErrorMessage error={errors.email} visible={touched.email} />

                  <Button
                    title="Next"
                    textColor="white"
                    color="black"
                    onPress={handleSubmit}
                    visible={isLoading}
                    disabled={isLoading}
                  />

                  <Button
                    title="Test Login"
                    textColor="white"
                    color="black"
                    onPress={dummyLogin}
                    visible={isLoading}
                    disabled={isLoading}
                  />
                </View>
                {/* <View style={styles.button}>

        <Button title="Continue"   onPress={handleSubmit} />
      </View> */}
              </>
            )}
          </Formik>

          {/* <View style={{paddingHorizontal: 30, paddingVertical: 50, backgroundColor: 'white',  borderTopLeftRadius: 20,
          borderTopRightRadius: 20,}}>
          <Button title="Signup" textColor="white" color="black" onPress={() => navigation.navigate("Registration")} />
          <Button title="Login" textColor="black" color="white" onPress={() => navigation.navigate("Login")} />
        </View>  */}
        </View>
      </View>

      {/* <View style={[styles.signUpPersonal,  {marginTop: 26}]}>
        <View style={[styles.helloParent, styles.mt10, styles.ml25]}>
          <View style={[styles.hello1, styles.enterColor]}>
            <Text style={[styles.getStartedWith, styles.enterColor]}>Log in to your account</Text>
            <Text style={[styles.enterYourMobileNumber, styles.enterColor]}>
              OTP will be sent to verify your number and email ID.
            </Text>
          
          </View>
          <Text style={[styles.hello2, styles.text1Typo]}>
            <Text>We will send an OTP to verify</Text>
          </Text>
          <Text style={[styles.hello2, styles.text1Typo, {top:"60%"}]}>
            <Text >your number and email ID.</Text>
          </Text>
        </View>

        <Formik
            initialValues={{email:'', phoneNumber: ''}}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
          >
            {({ handleChange, handleSubmit, errors, setFieldTouched, touched }) => (
              <>
              <View style={[styles.component1981, styles.mt14,{marginLeft:horizontalScale(10)}]}>
        
                <TextInput 
                  keyboardType="numeric" 
                  onBlur={() => setFieldTouched("phoneNumber")}
                  onChangeText={handleChange("phoneNumber")}
                  style={[styles.component1981Child, styles.childBorder, {padding:10}]} 
                />
      
            </View>
        <View style={[styles.component1971, styles.mt_850, styles.ml24]}>
        <View style={[styles.component1971Child, styles.childBorder]} />
        <Text style={[styles.text1, styles.networkPosition, styles.text1Typo]}>
          +44
        </Text>
        <Image
          style={[styles.maskGroup288, styles.keysPosition]}
          resizeMode="cover"
          source={require("../assets/image-ukflag.png")}
        />
      </View>
      <ErrorMessage error={errors.phoneNumber} visible={touched.phoneNumber}/>
      <Text
        style={[
          styles.enterYourEmailId,
          styles.mt27,
          styles.ml25,
          styles.enterColor,
        ]}
      >
        
        Enter your Email ID
      </Text>
      <TextInput
      autoCapitalize="none"
      textContentType="emailAdress"
      keyboardType="email-address"
      onBlur={() => setFieldTouched('email')}
      onChangeText={handleChange('email')}
      style={[
          styles.signUpPersonalItem,
          styles.mt9,
          styles.ml24,
          styles.childBorder,
          {padding:10}
        ]}
      />
      <ErrorMessage error={errors.email} visible={touched.email}/>
      <View style={styles.button}>

        <Button title="Continue"   onPress={handleSubmit} />
      </View>
              
              </>
            )}
          </Formik>
      
        
    

      </View> */}
    </Screen>
  );
};

const styles = StyleSheet.create({
  continueButton: {
    //backgroundColor:"#0101FD",
    color: "#0101FD",
  },
  button: {
    flex: 1,
    flexDirection: "column",
    width: "100%",

    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  otp: {
    fontSize: 14,
  },
  mt2: {
    marginTop: GlobalStyles.Margin.margin_31xs,
  },
  mt15: {
    marginTop: GlobalStyles.Margin.margin_18xs,
  },
  ml76: {
    marginLeft: GlobalStyles.Margin.margin_37xl,
  },
  mt295: {
    marginTop: verticalScale(295),
  },
  ml184: {
    marginLeft: GlobalStyles.Margin.margin_71xl,
  },
  mt10: {
    marginTop: GlobalStyles.Margin.margin_24xs,
  },
  ml25: {
    marginLeft: GlobalStyles.Margin.margin_7xs,
  },
  mt_812: {
    marginTop: GlobalStyles.Margin.margin_90xs,
  },
  mt17: {
    marginTop: GlobalStyles.Margin.margin_16xs,
  },
  ml121: {
    marginLeft: GlobalStyles.Margin.margin_54xl,
  },
  mt14: {
    marginTop: GlobalStyles.Margin.margin_20xs,
  },
  mt_850: {
    marginTop: verticalScale(-850),
  },
  ml24: {
    marginLeft: GlobalStyles.Margin.margin_8xs,
  },
  mt9: {
    marginTop: GlobalStyles.Margin.margin_25xs,
  },
  mt27: {
    marginTop: GlobalStyles.Margin.margin_4xs,
  },
  enterColor: {
    color: GlobalStyles.Color.indigo,
    textAlign: "left",
  },
  text1Typo: {
    textAlign: "right",
    color: GlobalStyles.Color.gray_800,
    top: "50%",
    // fontFamily: GlobalStyles.FontFamily.helvetica,
  },
  networkPosition1: {
    marginTop: verticalScale(-3),
    top: "50%",
    position: "absolute",
  },
  networkLayout: {
    backgroundColor: GlobalStyles.Color.gray_1400,
    borderRadius: GlobalStyles.Border.br_7xs,
    bottom: verticalScale(0),
  },
  networkPosition: {
    left: "50%",
    position: "absolute",
  },
  childBorder: {
    borderWidth: 1,
    borderColor: "#e8e8e8",
    borderStyle: "solid",
    borderRadius: GlobalStyles.Border.br_lg,
    backgroundColor: GlobalStyles.Color.white,
  },
  help: {
    borderWidth: 1,
    borderColor: "#e8e8e8",
    borderStyle: "solid",
    height: 60,
    borderRadius: GlobalStyles.Border.br_lg,
    right: 0,
    top: "50%",
    left: 0,
    position: "absolute",
    backgroundColor: GlobalStyles.Color.white,
  },
  backgroundPosition: {
    backgroundColor: GlobalStyles.Color.gray_1700,
    right: horizontalScale(0),
    left: horizontalScale(0),
    bottom: verticalScale(0),
    position: "absolute",
  },
  homeLayout: {
    backgroundColor: GlobalStyles.Color.black,
    borderRadius: GlobalStyles.Border.br_8xl,
    height: verticalScale(5),
  },
  keysPosition: {
    left: horizontalScale(6),
    position: "absolute",
  },
  viewShadowBox: {
    height: verticalScale(46),
    elevation: 0,
    shadowRadius: 0,
    shadowColor: "#0101FD",
    backgroundColor: GlobalStyles.Color.gray_100,
    borderRadius: GlobalStyles.Border.br_5xs,
    shadowOpacity: 1,
    shadowOffset: {
      width: horizontalScale(0),
      height: verticalScale(3),
    },
    position: "absolute",
  },
  viewPosition2: {
    marginLeft: horizontalScale(-58.5),
    left: "50%",
  },
  labelPosition: {
    color: GlobalStyles.Color.black,
    left: horizontalScale(0),
    position: "absolute",
    textAlign: "center",
  },
  viewPosition1: {
    height: verticalScale(47),
    marginTop: verticalScale(3.5),
    top: "50%",
    position: "absolute",
  },
  numberPosition: {
    top: verticalScale(1),
    color: GlobalStyles.Color.black,
    // fontFamily: GlobalStyles.FontFamily.sFProDisplay,
    fontSize: GlobalStyles.FontSize.size_7xl,
    letterSpacing: 0,
    left: horizontalScale(0),
    position: "absolute",
    textAlign: "center",
  },
  viewPosition: {
    marginTop: verticalScale(-50.5),
    height: verticalScale(47),
    top: "50%",
    position: "absolute",
  },
  signUpPersonalChild: {
    backgroundColor: GlobalStyles.Color.gray_300,
    height: verticalScale(812),
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    width: horizontalScale(55),
    height: verticalScale(45),
  },
  hello: {
    lineHeight: verticalScale(16),
    textAlign: "center",
    color: GlobalStyles.Color.gray_800,
    // fontFamily: GlobalStyles.FontFamily.helvetica,
    fontSize: GlobalStyles.FontSize.size_base,
  },
  iconIonicIosArrowDown: {
    height: verticalScale(5),
  },
  getStartedWith: {
    margin: GlobalStyles.Margin.margin_33xs,
    fontSize: 28,
  },
  hello1: {
    fontSize: GlobalStyles.FontSize.size_8xl,
    lineHeight: verticalScale(30),
    textAlign: "left",
    fontWeight: "700",
  },
  enterYourMobileNumber: {
    top: verticalScale(140),
    left: horizontalScale(0),
    bottom: verticalScale(0),
    textAlign: "left",
    position: "absolute",
    // fontFamily: GlobalStyles.FontFamily.helvetica,
    fontSize: GlobalStyles.FontSize.size_base,
  },
  hello2: {
    marginTop: verticalScale(-6.52),
    left: horizontalScale(3),
    lineHeight: verticalScale(20),
    top: "50%",
    textAlign: "left",
    position: "absolute",
    fontSize: GlobalStyles.FontSize.size_base,
  },
  helloParent: {
    width: "100%",
    height: verticalScale(164),
  },
  rectangle: {
    shadowColor: "rgba(0, 0, 0, 0.05)",
    shadowRadius: 6,
    elevation: 6,
    shadowOpacity: 1,
    shadowOffset: {
      width: horizontalScale(0),
      height: verticalScale(3),
    },
    right: horizontalScale(0),
    left: horizontalScale(0),
    bottom: verticalScale(0),
    top: verticalScale(0),
    position: "absolute",
    backgroundColor: GlobalStyles.Color.white,
  },
  text: {
    fontSize: GlobalStyles.FontSize.size_4xl,
    lineHeight: verticalScale(24),
    fontWeight: "500",
    // fontFamily: GlobalStyles.FontFamily.roboto,
    color: GlobalStyles.Color.gray_1900,
    letterSpacing: 0,
    left: horizontalScale(0),
    textAlign: "left",
    top: verticalScale(0),
    position: "absolute",
  },
  time: {
    width: horizontalScale(40),
    left: horizontalScale(0),
    bottom: verticalScale(0),
    top: verticalScale(0),
    position: "absolute",
  },
  batteryIcon: {
    height: verticalScale(11),
    width: horizontalScale(22),
    marginTop: verticalScale(-3),
    right: horizontalScale(0),
    top: "50%",
    position: "absolute",
  },
  wifiIcon: {
    right: horizontalScale(37),
    height: verticalScale(12),
  },
  networkChild: {
    height: verticalScale(4),
    left: horizontalScale(0),
    position: "absolute",
  },
  networkItem: {
    marginLeft: horizontalScale(-3.5),
    height: verticalScale(6),
  },
  networkInner: {
    marginLeft: horizontalScale(0.5),
    height: verticalScale(9),
  },
  rectangleView: {
    right: horizontalScale(0),
    top: verticalScale(0),
    position: "absolute",
  },
  network: {
    right: horizontalScale(68),
    height: verticalScale(11),
  },
  statusBar: {
    marginTop: verticalScale(-15),
    right: horizontalScale(16),
    left: horizontalScale(15),
    height: verticalScale(26),
    top: "50%",
    position: "absolute",
  },
  statusBarBlack: {
    height: verticalScale(44),
    width: "100%",
  },
  component1981Child: {
    right: horizontalScale(0),
    bottom: verticalScale(790),
    left: horizontalScale(65),
    top: verticalScale(0),
    position: "absolute",
    //width: '100%'
  },
  backgroundBackground: {
    top: verticalScale(0),
  },
  background1: {
    backgroundColor: GlobalStyles.Color.gray_600,
    right: horizontalScale(0),
    left: horizontalScale(0),
    bottom: verticalScale(0),
    top: verticalScale(0),
    position: "absolute",
  },
  background: {
    right: horizontalScale(0),
    left: horizontalScale(0),
    bottom: verticalScale(0),
    top: verticalScale(0),
    position: "absolute",
  },
  homeIndicator1: {
    marginTop: verticalScale(3),
    marginLeft: horizontalScale(-66.5),
    top: "50%",
  },
  homeIndicatorLightPortr: {
    height: verticalScale(34),
  },
  deleteIcon: {
    right: horizontalScale(44),
    bottom: verticalScale(15),
    width: horizontalScale(24),
    height: verticalScale(18),
    position: "absolute",
  },
  number: {
    marginTop: verticalScale(-16),
    height: verticalScale(30),
    // fontFamily: GlobalStyles.FontFamily.sFProDisplay,
    fontSize: GlobalStyles.FontSize.size_7xl,
    width: horizontalScale(118),
    letterSpacing: 0,
    top: "50%",
  },
  view: {
    bottom: verticalScale(0),
  },
  keyBackground: {
    elevation: 0,
    shadowRadius: 0,
    shadowColor: "#0101FD",
    backgroundColor: GlobalStyles.Color.gray_100,
    borderRadius: GlobalStyles.Border.br_5xs,
    shadowOpacity: 1,
    shadowOffset: {
      width: horizontalScale(0),
      height: verticalScale(3),
    },
    right: horizontalScale(0),
    left: horizontalScale(0),
    bottom: verticalScale(0),
    top: verticalScale(0),
    position: "absolute",
  },
  label: {
    bottom: verticalScale(5),
    fontSize: GlobalStyles.FontSize.size_3xs,
    letterSpacing: 2,
    height: verticalScale(12),
    fontWeight: "700",
    // fontFamily: GlobalStyles.FontFamily.helvetica,
  },
  number1: {
    height: "100%",
  },
  view1: {
    right: horizontalScale(0),
  },
  view3: {
    left: horizontalScale(0),
  },
  view4: {
    right: horizontalScale(0),
  },
  view6: {
    left: horizontalScale(0),
  },
  number7: {
    height: verticalScale(30),
  },
  view7: {
    right: horizontalScale(0),
    top: verticalScale(0),
  },
  view8: {
    top: verticalScale(0),
  },
  view9: {
    left: horizontalScale(0),
    top: verticalScale(0),
  },
  keys: {
    top: verticalScale(6),
    right: horizontalScale(6),
    height: verticalScale(207),
  },
  keyboardNumberic: {
    height: verticalScale(291),
    right: horizontalScale(0),
    left: horizontalScale(0),
    bottom: verticalScale(0),
    position: "absolute",
  },
  groupChild: {
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    backgroundColor: GlobalStyles.Color.gray_500,
    borderRadius: GlobalStyles.Border.br_lg,
    position: "absolute",
    height: "100%",
    width: "100%",
  },
  maskGroup236: {
    bottom: verticalScale(13),
    right: horizontalScale(0),
    left: horizontalScale(0),
    top: verticalScale(0),
    position: "absolute",
  },
  rectangleParent: {
    marginTop: verticalScale(-30),
    height: verticalScale(60),
    right: horizontalScale(0),
    top: "50%",
    left: horizontalScale(0),
    position: "absolute",
  },
  component2083: {
    height: verticalScale(60),
    right: horizontalScale(0),
    left: horizontalScale(0),
    top: verticalScale(0),
    position: "absolute",
  },
  hello3: {
    top: "36.67%",
    left: "38.04%",
    fontSize: GlobalStyles.FontSize.size_lg,
    lineHeight: verticalScale(17),
    textTransform: "uppercase",
    color: GlobalStyles.Color.black,
    textAlign: "left",
    position: "absolute",
  },
  component2083Parent: {
    top: verticalScale(382),
    right: horizontalScale(25),
    left: horizontalScale(25),
    height: verticalScale(60),
    position: "absolute",
  },
  component1981: {
    height: verticalScale(850),
    width: "97%",
  },
  component1971Child: {
    right: horizontalScale(0),
    left: horizontalScale(0),
    bottom: verticalScale(0),
    top: verticalScale(0),
    position: "absolute",
  },
  text1: {
    marginTop: verticalScale(-10),
    marginLeft: horizontalScale(0),
    fontSize: GlobalStyles.FontSize.size_xl,
    top: "50%",
    textAlign: "left",
  },
  maskGroup288: {
    top: verticalScale(19),
    bottom: verticalScale(19),
    maxHeight: "100%",
    height: verticalScale(20),
    width: horizontalScale(20),
    resizeMode: "contain",
  },
  component1971: {
    width: horizontalScale(60),
    height: verticalScale(60),
    maxWidth: 80,
  },
  signUpPersonalItem: {
    width: "100%",
    height: verticalScale(60),
  },
  enterYourEmailId: {
    top: verticalScale(-5),
    textAlign: "left",
    fontSize: GlobalStyles.FontSize.size_base,
  },
  signUpPersonal: {
    paddingHorizontal: horizontalScale(35),
    flex: 1,
    width: "100%",
  },
  swipeUp: {
    alignItems: "center",
    justifyContent: "center",
    top: verticalScale(50),
  },
});

export default Login;
