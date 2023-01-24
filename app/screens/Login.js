import React, { useContext } from "react";
import { Text, StyleSheet, Image, Pressable, TextInput, View, ScrollView } from "react-native";
import { Formik } from "formik"
import * as Yup from 'yup';
import { horizontalScale, verticalScale, moderateScale } from "../config/scaling"
import AuthContext from "../auth/context";
import Button from "../components/Button"
import ErrorMessage from "../components/forms/ErrorMessage";
import GlobalStyles from "../../GlobalStyles";
import loginApi from "../api/login";
import Screen from "../components/Screen";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  phoneNumber: Yup.string().required().min(10).max(10).label("Phone number")
})

const Login = ({navigation}) => {

  const prefix = "44"

  const { setUser } = useContext(AuthContext);

  const handleSubmit = async ({ email, phoneNumber }) => {
    phoneNumber = prefix + phoneNumber
    const result = await loginApi.login({ email, phoneNumber})
    setUser({ email, phoneNumber })

    console.log(result.data)
    if (!result.ok) return  alert('Could not send otp')
    // alert('Success')
    
    navigation.navigate("OTPVerificationPersonal", { registration: false })
  }
return (
    <ScrollView>
    <View style={styles.viewBox}>

    <View style={styles.textRow}>
        <Text style={styles.SignInText}>Sign In to your account</Text>
    </View>

    <View style={styles.textRow}>
        <Text style={styles.SignInTextSub}>We will send an OTP to verify your number and email ID.</Text>
    </View>

    <View style={styles.textRow}>
        <Text style={styles.EnterMobileText}>Enter your mobile number</Text>
    </View>

    <View style={styles.inputContainers}>

        <View style={styles.countryCode}>
            <Image style = {styles.icon} source={require("../assets/image-ukflag.png")}/>
            <Text style={styles.countryCodeText}>+44</Text>
        </View>

        <View style={styles.phoneInputBox}>
        </View>
    </View>

    <View style={styles.textRow}>
       <Text style={styles.EnterEmailText}>Enter your Email ID</Text>
    </View>

    <View style={styles.inputContainers}>
            <View style={styles.emailBox}>
            </View>
    </View>

    <View style={styles.buttonPosition}>
        <Button title="CONTINUE" color="babyBlue"/>

    </View>

    <View style={styles.textRow}>
           <Text style={styles.SwipeUp}>Swipe up if you already have an account</Text>
    </View>
    </View>
    </ScrollView>

);};

const styles = StyleSheet.create({
viewBox: {
height: verticalScale(812),
width: "100%",
flex: 1,
backgroundColor: "#F6F5F8"

}, textRow: {
width: "100%",

}, SignInText: {
textAlign: "left",
marginTop: "5%",
marginLeft: "10%",
fontSize: 26,
fontWeight: "700"

}, SignInTextSub: {
fontSize: 14,
color: "#999999",
marginTop: "2.5%",
marginLeft: "10%",

}, EnterMobileText: {
marginTop: "10%",
marginLeft: "10%",
fontSize: 14,

}, inputContainers: {

width: "80%",
left: "10%",
marginTop: "2.5%",
height: verticalScale(40),


}, phoneInputBox: {
backgroundColor: "white",
width: "75%",
left: "25%",
height: "100%",
position: "absolute",
borderRadius: 10,
shadowColor: '#000',
shadowOffset: { width: 1, height: 3 },
shadowOpacity: 0.8,
shadowRadius: 14,
elevation: 5

}, countryCode: {
backgroundColor: "white",
width: "17.5%",
height: "100%",
borderRadius: 10,
shadowColor: '#000',
shadowOffset: { width: 1, height: 3 },
shadowOpacity: 0.8,
shadowRadius: 14,
elevation: 5

}, icon: {
resizeMode: "contain",
height: verticalScale(25),
width: horizontalScale(25),
top: verticalScale(7.5),
left: horizontalScale(2.5)

}, countryCodeText: {
position: "absolute",
top: verticalScale(12.5),
left: horizontalScale(27.5)

}, EnterEmailText: {
marginTop: "5%",
marginLeft: "10%",

}, emailBox: {
width: "100%",
backgroundColor: "white",
height: "100%",
borderRadius: 10,
shadowColor: '#000',
shadowOffset: { width: 1, height: 3 },
shadowOpacity: 0.8,
shadowRadius: 14,
elevation: 5

}, buttonPosition:{
width: "80%",
left: "10%",

}, SwipeUp: {
width: "100%",
textAlign: "center"

}



});

export default Login;
