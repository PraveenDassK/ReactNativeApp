import React, { useContext } from "react";
import { StyleSheet, View, SafeAreaView, Text, TextInput, Image,Pressable, useWindowDimensions, Dimensions, TouchableWithoutFeedback, Keyboard} from "react-native";
import { Formik } from "formik";
import * as Yup from 'yup';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

import AuthContext from "../auth/context";
import Button from "../components/Button"
import ErrorMessage from "../components/forms/ErrorMessage";
import FadeInView from "../components/fadeInview";
import GlobalStyles from "../../GlobalStyles";
import otpApi from "../api/otp";
import Screen from "../components/Screen";
import SwipeUp from "../components/SwipeUp"
import { horizontalScale, verticalScale, moderateScale } from "../config/scaling"
import { PanGestureHandler } from "react-native-gesture-handler";
import Animated, {
  Easing,
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming
} from "react-native-reanimated";




const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  phoneNumber: Yup.string().required().min(10).max(10).label("Phone number")
})

const SignUpPersonalScreen = ({ navigation }) => {
  const { height } = useWindowDimensions()
  
  const y = useSharedValue(0)
  

  const prefix = "44"

  const { setUser } = useContext(AuthContext)

  const handleSubmit = async ({ email, phoneNumber }) => {
    phoneNumber = prefix + phoneNumber
    const result = await otpApi.otp({ email, phoneNumber })
    setUser({ email, phoneNumber })

    console.log(result.data)
    if (!result.ok) return  alert('Could not send otp')
    // alert('Success')
    
    navigation.navigate("OTPVerificationPersonal2", { registration: true })
  }

  const fn = () => {
    navigation.navigate("Login")
  }

  const swipeUpGestureHandler = useAnimatedGestureHandler({
    onStart: () => {
      console.log("On Start")
    },
    onActive: (event) => {
      console.log("On Active")
      y.value = event.translationY
      
    },
    onEnd: (event) => {
      'worklet';
       console.log("On End", event.velocityY)
      if (y.value < -height / 2 || event.velocityY < -500) {
        runOnJS(fn)()
        y.value = withTiming(0, { easing: Easing.linear});
        
      } else {
        // reset
        y.value = withTiming(0, {easing: Easing.linear});
      }
    }
  })

  const animatedContainerStyle = useAnimatedStyle(() => ({
    transform: [{translateY: withTiming(y.value, 
      { 
        duration: 100,
        easing: Easing.linear
      })}],
  }))

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <Animated.View style={[{flex:1},animatedContainerStyle]}>
    
    <Screen>
      {/* <SwipeUp> */}
    <View style={[styles.signUpPersonal,  {marginTop: 26}]}>
      
      <View style={[styles.helloParent, styles.mt10, styles.ml25]}>
        <View style={[styles.hello1, styles.enterColor]}>
          <Text style={[styles.getStartedWith, styles.enterColor]}>Get Started With</Text>
          <Text style={styles.getStartedWith}>Carbonyte</Text>
        </View>
        <Text style={[styles.enterYourMobileNumber, styles.enterColor]}>
          Enter your mobile number
        </Text>
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
    textContentType="emailAddress"
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

      <Button title="Continue" color="babyBlue" onPress={handleSubmit} />
    </View>
            
            </>
          )}
        </Formik>
      <View style={styles.swipeUp}>
        <MaterialCommunityIcons name="chevron-up" size={24} color="black" />
        <FadeInView>
          <Text>Swipe up if you already have an account</Text>
        </FadeInView>
      </View>
      
        

    </View>
    {/* </SwipeUp> */}
    <PanGestureHandler onGestureEvent={swipeUpGestureHandler} >
        <Animated.View 
        style={{
        
          position: "absolute",
          backgroundColor: "none",
          left:0,
          bottom:0,
          width: "100%",
          height:100,
        }}>

        </Animated.View>
       
      </PanGestureHandler> 
    </Screen>
    </Animated.View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  continueButton:{
    //backgroundColor:"#0101FD",
    color:"#0101FD",
  },
  button:{
    marginTop: verticalScale(150),
    //color:"#0101FD",
    backgroundColor:"#D8EBF9",
    color: "#1A1A1A",
    borderRadius: 15,
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
  swipeUp : {
  alignItems: "center",
  justifyContent: "center",
   top: verticalScale(50),
  }
});


export default SignUpPersonalScreen;
