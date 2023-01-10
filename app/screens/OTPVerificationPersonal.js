import React, { useContext, useEffect, useState } from "react";
import {
  Text,
  StyleSheet,
  Image,
  View,
  TextInput,
  Pressable,
} from "react-native";
import * as Yup from 'yup';

import GlobalStyles from "../../GlobalStyles";
import AuthContext from "../auth/context";
import Form from "../components/forms/Form"

const OTPVerificationPersonal = () => {

  const initialValues= {'pVer1': '', 'pVer2':'', 'pVer3':''}

  const [count, setCount] = useState(45)

  const { user } = useContext(AuthContext)

  const countdown = () => {
    setCount(prev => prev - 1)

  }


const validationSchema = Yup.object().shape({
  pVer1: Yup.number().required().min(0).max(9).label("P Ver1"),
  pVer2: Yup.number().required().min(0).max(9).label("P Ver2"),
  pVer3: Yup.number().required().min(0).max(9).label("P Ver3")
})

  useEffect(()=> {
    if (count === 0) {
      setCount(45)
      console.log("send api request")
    } 
  },[count])

  useEffect(() => {
    setInterval(countdown, 1000)
  
  },[])
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

        <Form initialValues={initialValues} onSubmit={values => console.log(values)} validationSchema={validationSchema}/>
        <View style={[styles.groupChild, styles.groupLayout]} />
        <TextInput
          style={[styles.groupChildPosition, styles.groupLayout]}
          keyboardType="number-pad"
        />
        <TextInput
          style={[styles.groupInner, styles.groupInnerBorder]}
          keyboardType="number-pad"
        />
        <View style={[styles.groupInnerBorder, styles.groupChildPosition]} />
        <TextInput
          style={[styles.rectangleTextinput, styles.groupChild1Border]}
          keyboardType="default"
        />
        <View style={[styles.groupChild1Border, styles.groupChildPosition]} />
        <View style={[styles.groupChild2, styles.groupChildBorder2]} />
        <View style={[styles.groupChildBorder2, styles.groupChildPosition]} />
        <View style={[styles.groupChild4, styles.groupChildBorder1]} />
        <View style={[styles.groupChildBorder1, styles.groupChildPosition]} />
        <View style={[styles.groupChild6, styles.groupChildBorder]} />
        <View style={[styles.groupChildBorder, styles.groupChildPosition]} />
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
          <Text style={styles.text}>+44{ user.phoneNumber }</Text>
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
        <Pressable style={styles.rectanglePressable} />
        <Text style={[styles.hello2, styles.helloFlexBox]}>Verify</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
    width: 326,
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

export default OTPVerificationPersonal;
