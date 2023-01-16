import React, { useContext } from "react";
import { StyleSheet, View, SafeAreaView, Text, TextInput, Image,Pressable } from "react-native";
import { GestureDetector, Gesture, Directions } from "react-native-gesture-handler"
import { Formik } from "formik";
import * as Yup from 'yup';

import AuthContext from "../auth/context";
import Button from "../components/Button"
import ErrorMessage from "../components/forms/ErrorMessage";
import GlobalStyles from "../../GlobalStyles";
import otpApi from "../api/otp";
import Screen from "../components/Screen";
import FormField from "../components/forms/FormField"
import SwipeUp from "../components/SwipeUp"

import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  phoneNumber: Yup.string().required().min(10).max(10).label("Phone number")
})





const SignUpPersonalScreen = ({ navigation }) => {

  // const flingGesture = Gesture.Fling()
  // .direction(Directions.UP)
  // .onStart(()=>console.log("start"))
  // .onEnd(()=> navigation.navigate("Login"));

  const prefix = "44"

  const authContext = useContext(AuthContext)

  const handleSubmit = async ({ email, phoneNumber }) => {
    phoneNumber = prefix + phoneNumber
    const result = await otpApi.otp({ email, phoneNumber })
    authContext.setUser({ email, phoneNumber })

    console.log(result.data)
    if (!result.ok) return  alert('Could not send otp')
    // alert('Success')
    
    navigation.navigate("OTPVerificationPersonal")
  }

  return (
    <Screen>
      <SwipeUp>
    <View style={styles.signUpPersonal}>
      <View style={[styles.helloParent, styles.mt10, styles.ml25]}>
        <View style={[styles.hello1, styles.enterColor]}>
          <Text style={[styles.getStartedWith, styles.enterColor,]}>Get Started With</Text>
          <Text style={styles.getStartedWith}>Carbonyte</Text>
        </View>
        <Text style={[styles.enterYourMobileNumber, styles.enterColor]}>
          Enter your mobile number
        </Text>
        <Text styrle={[styles.hello2, styles.text1Typo]}>
          <Text>{`We will send an OTP to verify `}</Text>
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
            <View style={[styles.component1981, styles.mt14]}>
      
              <TextInput 
              
                keyboardType="numeric" 
                autoCorrect="none" 
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
    autoCorrect="none" 
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

      <Button title="Continue" color="blue" onPress={handleSubmit} />
    </View>
            
            </>
          )}
        </Formik>
      <View style={styles.swipeUp}>
        <Text>Swipe up if you already have an account</Text>
      </View>
       {/* <GestureDetector gesture={flingGesture}>
        <Text>Swipe up if you already have an account</Text>
        </GestureDetector> */}
        

    </View>
    </SwipeUp>
    </Screen>
  );
};

const styles = StyleSheet.create({
  continueButton:{
    backgroundColor:"#0101FD",
    color:"#0101FD",
  },
  button:{
    marginTop:50,
    color:"#0101FD",
    backgroundColor:"#0101FD",
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
    marginTop: 295,
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
    marginTop: -850,
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
    textAlign: "left",
    color: GlobalStyles.Color.gray_800,
    top: "50%",
    // fontFamily: GlobalStyles.FontFamily.helvetica,
  },
  networkPosition1: {
    marginTop: -3,
    top: "50%",
    position: "absolute",
  },
  networkLayout: {
    backgroundColor: GlobalStyles.Color.gray_1400,
    borderRadius: GlobalStyles.Border.br_7xs,
    bottom: 0,
  },
  networkPosition: {
    left: "50%",
    position: "absolute",
  },
  childBorder: {
    borderWidth: 1,
    borderColor: "#0101FD",
    borderStyle: "solid",
    borderRadius: GlobalStyles.Border.br_lg,
    backgroundColor: GlobalStyles.Color.white,
  },
  backgroundPosition: {
    backgroundColor: GlobalStyles.Color.gray_1700,
    right: 0,
    left: 0,
    bottom: 0,
    position: "absolute",
  },
  homeLayout: {
    backgroundColor: GlobalStyles.Color.black,
    borderRadius: GlobalStyles.Border.br_8xl,
    height: 5,
  },
  keysPosition: {
    left: 6,
    position: "absolute",
  },
  viewShadowBox: {
    height: 46,
    elevation: 0,
    shadowRadius: 0,
    shadowColor: "#0101FD",
    backgroundColor: GlobalStyles.Color.gray_100,
    borderRadius: GlobalStyles.Border.br_5xs,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    position: "absolute",
  },
  viewPosition2: {
    marginLeft: -58.5,
    left: "50%",
  },
  labelPosition: {
    color: GlobalStyles.Color.black,
    left: 0,
    position: "absolute",
    textAlign: "center",
  },
  viewPosition1: {
    height: 47,
    marginTop: 3.5,
    top: "50%",
    position: "absolute",
  },
  numberPosition: {
    top: 1,
    color: GlobalStyles.Color.black,
    // fontFamily: GlobalStyles.FontFamily.sFProDisplay,
    fontSize: GlobalStyles.FontSize.size_7xl,
    letterSpacing: 0,
    left: 0,
    position: "absolute",
    textAlign: "center",
  },
  viewPosition: {
    marginTop: -50.5,
    height: 47,
    top: "50%",
    position: "absolute",
  },
  signUpPersonalChild: {
    backgroundColor: GlobalStyles.Color.gray_300,
    height: 812,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    width: 55,
    height: 45,
  },
  hello: {
    lineHeight: 16,
    textAlign: "center",
    color: GlobalStyles.Color.gray_800,
    // fontFamily: GlobalStyles.FontFamily.helvetica,
    fontSize: GlobalStyles.FontSize.size_base,
  },
  iconIonicIosArrowDown: {
    height: 5,
  },
  getStartedWith: {
    margin: GlobalStyles.Margin.margin_33xs,
    fontSize: 28,
  },
  hello1: {
    
    fontSize: GlobalStyles.FontSize.size_8xl,
    lineHeight: 30,
    textAlign: "left",
    fontWeight: "700",
   
  },
  enterYourMobileNumber: {
    left: 0,
    bottom: 0,
    textAlign: "left",
    position: "absolute",
    // fontFamily: GlobalStyles.FontFamily.helvetica,
    fontSize: GlobalStyles.FontSize.size_base,
  },
  hello2: {
    marginTop: -6.52,
    left: 3,
    lineHeight: 20,
    top: "50%",
    textAlign: "left",
    position: "absolute",
    fontSize: GlobalStyles.FontSize.size_base,
  },
  helloParent: {
    width: "100%",
    height: 164,
  },
  rectangle: {
    shadowColor: "rgba(0, 0, 0, 0.05)",
    shadowRadius: 6,
    elevation: 6,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    right: 0,
    left: 0,
    bottom: 0,
    top: 0,
    position: "absolute",
    backgroundColor: GlobalStyles.Color.white,
  },
  text: {
    fontSize: GlobalStyles.FontSize.size_4xl,
    lineHeight: 24,
    fontWeight: "500",
    // fontFamily: GlobalStyles.FontFamily.roboto,
    color: GlobalStyles.Color.gray_1900,
    letterSpacing: 0,
    left: 0,
    textAlign: "left",
    top: 0,
    position: "absolute",
  },
  time: {
    width: 40,
    left: 0,
    bottom: 0,
    top: 0,
    position: "absolute",
  },
  batteryIcon: {
    height: 11,
    width: 22,
    marginTop: -3,
    right: 0,
    top: "50%",
    position: "absolute",
  },
  wifiIcon: {
    right: 37,
    height: 12,
  },
  networkChild: {
    height: 4,
    left: 0,
    position: "absolute",
  },
  networkItem: {
    marginLeft: -3.5,
    height: 6,
  },
  networkInner: {
    marginLeft: 0.5,
    height: 9,
  },
  rectangleView: {
    right: 0,
    top: 0,
    position: "absolute",
  },
  network: {
    right: 68,
    height: 11,
  },
  statusBar: {
    marginTop: -15,
    right: 16,
    left: 15,
    height: 26,
    top: "50%",
    position: "absolute",
  },
  statusBarBlack: {
    height: 44,
    width: "100%",
  },
  component1981Child: {
    right: 24,
    bottom: 790,
    left: 111,
    top: 0,
    position: "absolute",
    width: '57%'
  },
  backgroundBackground: {
    top: 0,
  },
  background1: {
    backgroundColor: GlobalStyles.Color.gray_600,
    right: 0,
    left: 0,
    bottom: 0,
    top: 0,
    position: "absolute",
  },
  background: {
    right: 0,
    left: 0,
    bottom: 0,
    top: 0,
    position: "absolute",
  },
  homeIndicator1: {
    marginTop: 3,
    marginLeft: -66.5,
    top: "50%",
  },
  homeIndicatorLightPortr: {
    height: 34,
  },
  deleteIcon: {
    right: 44,
    bottom: 15,
    width: 24,
    height: 18,
    position: "absolute",
  },
  number: {
    marginTop: -16,
    height: 30,
    // fontFamily: GlobalStyles.FontFamily.sFProDisplay,
    fontSize: GlobalStyles.FontSize.size_7xl,
    width: 118,
    letterSpacing: 0,
    top: "50%",
  },
  view: {
    bottom: 0,
  },
  keyBackground: {
    elevation: 0,
    shadowRadius: 0,
    shadowColor: "#0101FD",
    backgroundColor: GlobalStyles.Color.gray_100,
    borderRadius: GlobalStyles.Border.br_5xs,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    right: 0,
    left: 0,
    bottom: 0,
    top: 0,
    position: "absolute",
  },
  label: {
    bottom: 5,
    fontSize: GlobalStyles.FontSize.size_3xs,
    letterSpacing: 2,
    height: 12,
    fontWeight: "700",
    // fontFamily: GlobalStyles.FontFamily.helvetica,
  },
  number1: {
    height: "100%",
  },
  view1: {
    right: 0,
  },
  view3: {
    left: 0,
  },
  view4: {
    right: 0,
  },
  view6: {
    left: 0,
  },
  number7: {
    height: 30,
  },
  view7: {
    right: 0,
    top: 0,
  },
  view8: {
    top: 0,
  },
  view9: {
    left: 0,
    top: 0,
  },
  keys: {
    top: 6,
    right: 6,
    height: 207,
  },
  keyboardNumberic: {
    height: 291,
    right: 0,
    left: 0,
    bottom: 0,
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
    bottom: 13,
    right: 0,
    left: 0,
    top: 0,
    position: "absolute",
  },
  rectangleParent: {
    marginTop: -30,
    height: 60,
    right: 0,
    top: "50%",
    left: 0,
    position: "absolute",
  },
  component2083: {
    height: 60,
    right: 0,
    left: 0,
    top: 0,
    position: "absolute",
  },
  hello3: {
    top: "36.67%",
    left: "38.04%",
    fontSize: GlobalStyles.FontSize.size_lg,
    lineHeight: 17,
    textTransform: "uppercase",
    color: GlobalStyles.Color.black,
    textAlign: "left",
    position: "absolute",
  },
  component2083Parent: {
    top: 382,
    right: 25,
    left: 25,
    height: 60,
    position: "absolute",
  },
  component1981: {
    height: 850,
    width: "100%",
  },
  component1971Child: {
    right: 0,
    left: 0,
    bottom: 0,
    top: 0,
    position: "absolute",
  },
  text1: {
    marginTop: -8,
    marginLeft: -2,
    fontSize: GlobalStyles.FontSize.size_xl,
    top: "50%",
    textAlign: "left",
  },
  maskGroup288: {
    top: 19,
    bottom: 19,
    maxHeight: "100%",
    height:20,
    width: 22,
  },
  component1971: {
    width: 70,
    height: 60,
  },
  signUpPersonalItem: {
    width: "100%",
    height: 60,
  },
  enterYourEmailId: {
    textAlign: "left",
    fontSize: GlobalStyles.FontSize.size_base,
  },
  signUpPersonal: {
    paddingHorizontal:35,
    flex: 1,
    width: "100%",
  },
  swipeUp : {
  alignItems: "center",
  justifyContent: "center",
   top:50
  }
});

export default SignUpPersonalScreen;
