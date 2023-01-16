import React, { useContext, useEffect, useState, useCallback, useRef} from "react";
import {
  Text,
  StyleSheet,
  Image,
  View,
  TextInput,
  Pressable,
} from "react-native";
import { Formik } from "formik";
import * as Yup from 'yup';
import { useFocusEffect } from "@react-navigation/native";

import GlobalStyles from "../../GlobalStyles";
import AuthContext from "../auth/context";
import Button from "../components/Button";
import ErrorMessage from "../components/forms/ErrorMessage";
import Form from "../components/forms/Form"
import otpVerificationAPI from '../api/otpVerification'
import otpAPI from '../api/otp'

const validationSchema = Yup.object().shape({
  pVer1: Yup.number().required().min(0).max(9).label("P Ver1"),
  pVer2: Yup.number().required().min(0).max(9).label("P Ver2"),
  pVer3: Yup.number().required().min(0).max(9).label("P Ver3"),
  pVer4: Yup.number().required().min(0).max(9).label("P Ver4"),
  eVer1: Yup.number().required().min(0).max(9).label("E Ver1"),
  eVer2: Yup.number().required().min(0).max(9).label("E Ver2"),
  eVer3: Yup.number().required().min(0).max(9).label("E Ver3"),
  eVer4: Yup.number().required().min(0).max(9).label("E Ver4"),

}) // add required if necessary

const OTPVerificationPersonal2 = ({ navigation }) => {

  const initialValues= {
    pVer1:'', 
    pVer2:'', 
    pVer3:'', 
    pVer4:'', 
    eVer1:'', 
    eVer2:'',
    eVer3:'',
    eVer4:''
  }

  const pVer1Ref = useRef() 
  const pVer2Ref = useRef() 
  const pVer3Ref = useRef() 
  const pVer4Ref = useRef() 
  const eVer1Ref = useRef() 
  const eVer2Ref = useRef()
  const eVer3Ref = useRef()
  const eVer4Ref = useRef()

  const [count, setCount] = useState(45)
  // const [resendOTP, setResendOTP] = useState(null)
  const { user } = useContext(AuthContext)

  const countdown = () => {
    setCount(prev => prev - 1)

   
  }

  const handleSubmit = async({pVer1, pVer2, pVer3, pVer4, eVer1, eVer2, eVer3, eVer4, })=> {

    const email = user.email
    const phoneNumber = user.phoneNumber
    const emailOTP = pVer1  + pVer2 + pVer3 + pVer4 
    const phoneOTP =  eVer1 + eVer2 + eVer3 + eVer4 
    
    // setResendOTP({email, phoneNumber, emailOTP, phoneOTP})
   
    const result = await otpVerificationAPI.otpVerification({email, phoneNumber, emailOTP, phoneOTP})

    console.log('what is this', result.ok, result.data)
    console.log({email, phoneNumber, emailOTP, phoneOTP})

    if (!result.ok) return alert('Could not verify otp') 

    if (!result.data.result) return alert('Could not verify otp') 

  
    console.log(result.ok)

   
    navigation.navigate("PersonalOrBusiness")

   
  }

  const resendCred = async () => {
    const email = user.email
    const phoneNumber = user.phoneNumber

    const result = await otpAPI.otp({ email, phoneNumber})
    console.log(result.data)
  }

  useEffect(()=> {
    if (count === 0) {
      setCount(45)
      resendCred()
    } 
  },[count])

  useFocusEffect(
    useCallback(() => {
    const countdownId = setInterval(countdown, 1000)

    return () => {
      clearInterval(countdownId);
    };
  
  },[]))
  return (
    <View style={styles.otpVerificationPersonal2}>
      <View style={styles.helloParent}>
        <Text style={[styles.hello, styles.helloTypo]}>
          Swipe Up if already have an account
        </Text>
        <Image
          style={styles.iconIonicIosArrowDown}
          resizeMode="cover"
          source={require("../assets/icon-carbonytedownarrow.png")}
        />
        <Text
          style={[styles.hello1, styles.helloFlexBox, styles.hello1Position]}
        >
          OTP Verfication
        </Text>

        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          {({ handleChange, handleSubmit, errors, setFieldTouched, touched }) => (
            <>
               <TextInput 
                autoCorrect="none" 
                autoFocus={true}
                maxLength={1}
                placeholder="1"
                keyboardType="numeric" 
                onBlur={() => setFieldTouched("eVer1")}
                onChangeText={
                  handleChange("eVer1")
                }
                ref={eVer1Ref}
              
                style={[styles.groupChild, styles.groupLayout, styles.inputText]}
              />
              <ErrorMessage error={errors.eVer1} visible={touched.eVer1}/>

              {/* <View style={[styles.groupChild, styles.groupLayout]} /> */}
              <TextInput 
                maxLength={1}
                placeholder="1"
                keyboardType="numeric" 
                autoCorrect="none" 
                onBlur={() => setFieldTouched("pVer1")}
                onChangeText={
                  handleChange("pVer1")
                }
                ref={pVer1Ref}
                returnKeyType="next"
               
                style={[styles.groupChildPosition, styles.groupLayout, styles.inputText]} 
              />
              <ErrorMessage error={errors.pVer1} visible={touched.pVer1}/>
        {/* <TextInput
          style={[styles.groupChildPosition, styles.groupLayout]}
          keyboardType="default"
        /> */}

        {/* <TextInput
          style={[styles.groupInner, styles.groupInnerBorder]}
          keyboardType="default"
        /> */}
            <TextInput 
              maxLength={1}
              placeholder="2"
              keyboardType="numeric" 
              autoCorrect="none" 
              onBlur={() => setFieldTouched("eVer2")}
              onChangeText={
                handleChange("eVer2")
               }
              ref={eVer2Ref}
              returnKeyType="next"
             
              style={[styles.groupInner, styles.groupInnerBorder, styles.inputText]} 
            />
            <ErrorMessage error={errors.eVer2} visible={touched.eVer2}/>
            <TextInput 
              maxLength={1}
              placeholder="2"
              keyboardType="numeric" 
              autoCorrect="none" 
              onBlur={() => setFieldTouched("pVer2")}
              onChangeText={
                handleChange("pVer2")
              }
              ref={pVer2Ref}
              returnKeyType="next"
              
              style={[styles.groupInnerBorder, styles.groupChildPosition, styles.inputText]} 
            />
            <ErrorMessage error={errors.pVer2} visible={touched.pVer2}/>
              {/* <View style={[styles.groupInnerBorder, styles.groupChildPosition]} /> */}
            <TextInput 
                  maxLength={1}
                  placeholder="3"
                  keyboardType="numeric" 
                  autoCorrect="none" 
                  onBlur={() => setFieldTouched("eVer3")}
                  onChangeText={
                   handleChange("eVer3")
                  }
                  ref={eVer3Ref}
                  returnKeyType="next"
                 
                style={[styles.rectangleTextinput, styles.groupChild1Border, styles.inputText]} 
                />
                <ErrorMessage error={errors.eVer3} visible={touched.eVer3}/>
            {/* <TextInput
              style={[styles.rectangleTextinput, styles.groupChild1Border]}
              keyboardType="default"
            /> */}
            <TextInput 
                  maxLength={1}
                  placeholder="3"
                  keyboardType="numeric" 
                  autoCorrect="none" 
                  onBlur={() => setFieldTouched("pVer3")}
                  onChangeText={
                    handleChange("pVer3")
                  }
                  ref={pVer3Ref}
                  returnKeyType="next"
                 
                  style={[styles.groupChild1Border, styles.groupChildPosition, styles.inputText]} 
                />
            <ErrorMessage error={errors.pVer3} visible={touched.pVer3}/>
            {/* <View style={[styles.groupChild1Border, styles.groupChildPosition]} /> */}
            {/* <TextInput 
                  placeholder="5"
                  keyboardType="numeric" 
                  autoCorrect="none" 
                  onBlur={() => setFieldTouched("eVer5")}
                  onChangeText={handleChange("eVer5")}
                  style={[styles.groupChild2, styles.groupChildBorder2]}
                />
            <ErrorMessage error={errors.eVer5} visible={touched.eVer5}/> */}
            {/* <View style={[styles.groupChild2, styles.groupChildBorder2]} /> */}
            {/* <TextInput 
                  placeholder="5"
                  keyboardType="numeric" 
                  autoCorrect="none" 
                  onBlur={() => setFieldTouched("pVer5")}
                  onChangeText={handleChange("pVer5")}
                  style={[styles.groupChildBorder2, styles.groupChildPosition]}
                />
            <ErrorMessage error={errors.pVer5} visible={touched.pVer5}/> */}
            {/* <View style={[styles.groupChildBorder2, styles.groupChildPosition]} /> */}
            <TextInput 
                  maxLength={1}
                  placeholder="4"
                  keyboardType="numeric" 
                  autoCorrect="none" 
                  onBlur={() => setFieldTouched("eVer4")}
                  onChangeText={
                    handleChange("eVer4")
                   }
                  ref={eVer4Ref}
                  returnKeyType="next"
                 
                  style={[styles.groupChild4, styles.groupChildBorder1, styles.inputText]} 
                />
            <ErrorMessage error={errors.eVer4} visible={touched.eVer4}/>
            {/* <View style={[styles.groupChild4, styles.groupChildBorder1]} /> */}
            <TextInput 
                  maxLength={1}
                  placeholder="4"
                  keyboardType="numeric" 
                  autoCorrect="none" 
                  onBlur={() => setFieldTouched("pVer4")}
                  onChangeText={handleChange("pVer4")}
                  ref={pVer4Ref}
                  style={[styles.groupChildBorder1, styles.groupChildPosition, styles.inputText]}
                />
            <ErrorMessage error={errors.pVer4} visible={touched.pVer4}/>
            {/* <View style={[styles.groupChildBorder1, styles.groupChildPosition]} /> */}
            {/* <TextInput 
                  placeholder="6"
                  keyboardType="numeric" 
                  autoCorrect="none" 
                  onBlur={() => setFieldTouched("pVer6")}
                  onChangeText={handleChange("pVer6")}
                  style={[styles.groupChild6, styles.groupChildBorder]} 
                />
            <ErrorMessage error={errors.pVer6} visible={touched.pVer6}/> */}
            {/* <View style={[styles.groupChild6, styles.groupChildBorder]} /> */}
            {/* <TextInput 
                  placeholder="6"
                  keyboardType="numeric" 
                  autoCorrect="none" 
                  onBlur={() => setFieldTouched("eVer6")}
                  onChangeText={handleChange("eVer6")}
                  style={[styles.groupChildBorder, styles.groupChildPosition]} 
                />
            <ErrorMessage error={errors.pVer6} visible={touched.pVer6}/> */}
            {/* <View style={[styles.groupChildBorder, styles.groupChildPosition]} /> */}
        <Text
          style={[
            styles.pleaseEnterTheCodeSentTo,
            styles.helloFlexBox,
            styles.hello1Position,
            styles.helloTypo,
          ]}
        >
          <Text
            style={styles.pleaseEnterThe}
          >{`Please enter the code sent to `}</Text>
          <Text style={styles.text}>+{ user.phoneNumber }</Text>
        </Text>
        <Text style={[styles.pleaseEnterTheCodeSentTo1, styles.resendPosition]}>
          <Text
            style={styles.pleaseEnterThe}
          >{`Please enter the code sent to `}</Text>
          <Text style={styles.text}>{ user.email }</Text>
        </Text>
        <Text style={[styles.resendCodeIn0010, styles.resendPosition]}>
          Resend Code in 00:{count < 10 ? `0${count}` : count}
        </Text>
        <Text style={[styles.resendCodeIn00101, styles.resendPosition]}>
          Resend Code in 00:{count < 10 ? `0${count}` : count}
        </Text>
        {/* <Pressable style={styles.rectanglePressable} /> */}
        <View style={styles.button}>
          <Button title="Verify" color="blue" onPress={handleSubmit} />
       </View>
        </>
          )}
        </Formik>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    top: 350
  },
  helloTypo: {
    fontSize: GlobalStyles.FontSize.size_base,
    // // fontFamily: GlobalStyles.FontFamily.helvetica,
  },
  helloFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  hello1Position: {
    left: 2,
    textAlign: "left",
  },
  inputText:{
    padding: 10
  },
  groupLayout: {
    height: 42,
    width: 42,
    borderWidth: 1,
    borderColor: "#0101fd",
    borderStyle: "solid",
    backgroundColor: GlobalStyles.Color.white,
    borderRadius: GlobalStyles.Border.br_2xs,
    left: 6,
    position: "absolute",
  },
  groupInnerBorder: {
    borderColor: "#ff4b4b",
    marginLeft: -103,
    height: 42,
    width: 42,
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: GlobalStyles.Color.white,
    borderRadius: GlobalStyles.Border.br_2xs,
    left: "50%",
    position: "absolute",
  },
  groupChildPosition: {
    marginTop: -104.5,
    top: "50%",
  },
  groupChild1Border: {
    borderColor: "#e8e8e8",
    marginLeft: -48,
    height: 42,
    width: 42,
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: GlobalStyles.Color.white,
    borderRadius: GlobalStyles.Border.br_2xs,
    left: "50%",
    position: "absolute",
  },
  groupChildBorder2: {
    marginLeft: 61,
    borderColor: "#e8e8e8",
    height: 42,
    width: 42,
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: GlobalStyles.Color.white,
    borderRadius: GlobalStyles.Border.br_2xs,
    left: "50%",
    position: "absolute",
  },
  groupChildBorder1: {
    marginLeft: 6,
    borderColor: "#e8e8e8",
    height: 42,
    width: 42,
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: GlobalStyles.Color.white,
    borderRadius: GlobalStyles.Border.br_2xs,
    left: "50%",
    position: "absolute",
  },
  groupChildBorder: {
    right: 6,
    borderColor: "#e8e8e8",
    height: 42,
    width: 42,
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: GlobalStyles.Color.white,
    borderRadius: GlobalStyles.Border.br_2xs,
    position: "absolute",
  },
  resendPosition: {
    left: 6,
    textAlign: "left",
    // fontFamily: GlobalStyles.FontFamily.helvetica,
    fontSize: GlobalStyles.FontSize.size_base,
    top: "50%",
    position: "absolute",
  },
  hello: {
    marginTop: 322.5,
    left: 49,
    textAlign: "center",
    color: GlobalStyles.Color.gray_700,
    // fontFamily: GlobalStyles.FontFamily.helvetica,
    top: "50%",
    fontSize: GlobalStyles.FontSize.size_base,
    position: "absolute",
  },
  iconIonicIosArrowDown: {
    marginTop: 300.34,
    marginLeft: -4.41,
    width: 8,
    height: 5,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  hello1: {
    top: 0,
    fontSize: GlobalStyles.FontSize.size_8xl,
    fontWeight: "700",
    color: GlobalStyles.Color.indigo_100,
  },
  groupChild: {
    top: 85,
  },
  groupInner: {
    top: 85,
  },
  rectangleTextinput: {
    top: 85,
  },
  groupChild2: {
    top: 85,
  },
  groupChild4: {
    top: 85,
  },
  groupChild6: {
    top: 85,
  },
  pleaseEnterThe: {
    color: GlobalStyles.Color.gray_700,
  },
  text: {
    color: GlobalStyles.Color.gray_1700,
  },
  pleaseEnterTheCodeSentTo: {
    top: 45,
    // fontFamily: GlobalStyles.FontFamily.helvetica,
  },
  pleaseEnterTheCodeSentTo1: {
    marginTop: -141.5,
  },
  resendCodeIn0010: {
    marginTop: -193.5,
    color: GlobalStyles.Color.gray_700,
  },
  resendCodeIn00101: {
    marginTop: -46.5,
    color: GlobalStyles.Color.gray_700,
  },
  rectanglePressable: {
    height: "8.92%",
    top: "81.87%",
    right: "0%",
    bottom: "9.21%",
    left: "0%",
    borderRadius: GlobalStyles.Border.br_lg,
    backgroundColor: GlobalStyles.Color.gray_500,
    position: "absolute",
    width: "100%",
  },
  hello2: {
    top: "85.44%",
    left: "44.17%",
    fontSize: GlobalStyles.FontSize.size_lg,
    textTransform: "uppercase",
    color: GlobalStyles.Color.black,
    // fontFamily: GlobalStyles.FontFamily.helvetica,
  },
  helloParent: {
    width: "100%",
    height: 673,
  },
  otpVerificationPersonal2: {
    backgroundColor: "#f5f4f7",
    flex: 1,
    paddingLeft: GlobalStyles.Padding.padding_4xs,
    paddingTop: GlobalStyles.Padding.padding_5xl,
    paddingRight: GlobalStyles.Padding.padding_8xs,
    width: "100%",
  },
});

export default OTPVerificationPersonal2;
