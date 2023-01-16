import React, { useContext } from "react";
import {
  Text,
  StyleSheet,
  Image,
  Pressable,
  TextInput,
  View,
} from "react-native";
import { Formik } from "formik"
import * as Yup from 'yup';

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
    <View style={styles.signUpPersonal3}>
      <View style={styles.helloParent}>

        <Text style={[styles.hello1, styles.helloFlexBox]}>
          Sign In to your account
        </Text>
        <Text style={[styles.enterYourMobileNumber, styles.enterPosition]}>
          Enter your mobile number
        </Text>
        <Text style={[styles.hello2, styles.helloFlexBox, styles.helloTypo]}>
          <Text
            style={styles.weWillSend}
          >We will send an OTP to verify your number and email ID.</Text>
        </Text>  
        <Formik
          initialValues={{email:'', phoneNumber: ''}}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          {({ handleChange, handleSubmit, errors, setFieldTouched, touched }) => (
            <>
           <View 
            style={styles.groupChild} 
          >
                <Text onPress={handleSubmit} style={[styles.hello3, styles.helloFlexBox]} >Continue</Text>
          </View>
        
          <TextInput
          placeholder="in the house"
            keyboardType="numeric" 
            autoCorrect="none" 
            onBlur={() => setFieldTouched("phoneNumber")}
            onChangeText={handleChange("phoneNumber")}
            style={[styles.groupItem, styles.groupBorder]}
           
          />
          <View style={styles.phoneError}>
            <ErrorMessage error={errors.phoneNumber} visible={touched.phoneNumber}/>

          </View>

          <TextInput
          placeholder="wtf"
            autoCapitalize="none"
            autoCorrect="none" 
            textContentType="emailAdress"
            keyboardType="email-address"
            onBlur={() => setFieldTouched('email')}
            onChangeText={handleChange('email')}
            style={[styles.groupInner, styles.groupBorder]}
            
          />
          <View style={styles.emailError}>

           <ErrorMessage error={errors.email} visible={touched.email} />
          </View>
         
          </>
          )}
        </Formik>
        <Text style={[styles.enterYourEmailId, styles.enterPosition]}>
          Enter your Email ID
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  emailError: {
    zIndex:15,
    position: 'absolute',
    bottom: 380
  },
  phoneError: {
    zIndex:35,
    position: 'absolute',
   bottom: 490
  },
  helloTypo: {
    color: GlobalStyles.Color.gray_700,
    fontSize: GlobalStyles.FontSize.size_base,
    // fontFamily: GlobalStyles.FontFamily.helvetica,
    top: "45%",
  },
  helloFlexBox: {
    textAlign: "center",
    width:"100%",
    paddingTop: 0
  },
  enterPosition: {
    left: 1,
    textAlign: "left",
    color: GlobalStyles.Color.indigo_100,
    // fontFamily: GlobalStyles.FontFamily.helvetica,
    fontSize: GlobalStyles.FontSize.size_base,
    top: "50%",
    position: "absolute",
  },
  groupBorder: {
    height: 60,
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: GlobalStyles.Color.white,
    left: 0,
    right: 1,
    borderRadius: GlobalStyles.Border.br_lg,
    top: "50%",
    position: "absolute",
  },
  hello: {
    marginTop: 322.5,
    left: 52,
    textAlign: "center",
    position: "absolute",
    color: GlobalStyles.Color.gray_700,
    fontSize: GlobalStyles.FontSize.size_base,
  },
  iconIonicIosArrowDown: {
    marginTop: 300.34,
    marginLeft: -3.66,
    left: "50%",
    width: 8,
    height: 5,
    top: "50%",
    position: "absolute",
  },
  hello1: {
    top: 0,
    left: 3,
    fontSize: GlobalStyles.FontSize.size_8xl,
    fontWeight: "700",
    color: GlobalStyles.Color.indigo_100,
    textAlign: "left",
  },
  enterYourMobileNumber: {
    marginTop: -194.5,
  },
  weWillSend: {
    margin: GlobalStyles.Margin.margin_8xs,
    width:"50%"
  },
  hello2: {
    marginTop: -289.02,
    left: 4,
    lineHeight: 20,
  },
  groupChild: {
    height: "8.92%",
    width: "100%",
    top: "85%",
    right: "0%",
    bottom: "9.1%",
    left: "0.15%",
    backgroundColor: GlobalStyles.Color.gray_500,
    borderRadius: GlobalStyles.Border.br_lg,
  },
  hello3: {
    top: "30%",
    left: "0%",
    fontSize: GlobalStyles.FontSize.size_lg,
    textTransform: "uppercase",
    color: GlobalStyles.Color.white,
    // fontFamily: GlobalStyles.FontFamily.helvetica,
    textAlign: "left",
    width:"100%",
  },
  groupItem: {
    marginTop: -166.5,
    width:"100%",
  },
  groupInner: {
    marginTop: -54.38,
    width:"100%",
  },
  enterYourEmailId: {
    marginTop: -77.62,
  },
  helloParent: {
    width: "100%",
    height: "100%",
  },
  signUpPersonal3: {
    backgroundColor: GlobalStyles.Color.gray_300,
    flex: 1,
    width: "100%",
    paddingLeft: GlobalStyles.Padding.padding_8xs,
    paddingRight: GlobalStyles.Padding.padding_7xs,
    alignItems: "flex-end",
  },
});

export default Login;
