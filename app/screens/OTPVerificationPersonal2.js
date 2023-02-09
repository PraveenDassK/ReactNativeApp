import React, {
  useContext,
  useEffect,
  useState,
  useCallback,
  useRef,
} from "react";
import {
  Text,
  StyleSheet,
  Image,
  View,
  TextInput,
  Pressable,
} from "react-native";

import { Formik } from "formik";
import * as Yup from "yup";
import { useFocusEffect } from "@react-navigation/native";
import jwtDecode from "jwt-decode";

import GlobalStyles from "../../GlobalStyles";
import AuthContext from "../auth/context";
import Button from "../components/Button";
import ErrorMessage from "../components/forms/ErrorMessage";
import Form from "../components/forms/Form";
import otpVerificationAPI from '../api/otpVerification'
import otpAPI from '../api/otp'


const validationSchema = Yup.object().shape({
  // pVer1: Yup.number().required().min(0).max(9).label("P Ver1"),
  // pVer2: Yup.number().required().min(0).max(9).label("P Ver2"),
  // pVer3: Yup.number().required().min(0).max(9).label("P Ver3"),
  // pVer4: Yup.number().required().min(0).max(9).label("P Ver4"),
  // eVer1: Yup.number().required().min(0).max(9).label("E Ver1"),
  // eVer2: Yup.number().required().min(0).max(9).label("E Ver2"),
  // eVer3: Yup.number().required().min(0).max(9).label("E Ver3"),
  // eVer4: Yup.number().required().min(0).max(9).label("E Ver4"),
}); // add required if necessary

const OTPVerificationPersonal2 = ({ navigation }) => {
  const { user, currentUser, setCurrentUser } = useContext(AuthContext);
  const [count, setCount] = useState(45);
  const [resendOTP, setResendOTP] = useState(null);

  const initialValues = {
    pVer1: "",
    pVer2: "",
    pVer3: "",
    pVer4: "",
    eVer1: "",
    eVer2: "",
    eVer3: "",
    eVer4: "",
  };

  const pVer1Ref = useRef();
  const pVer2Ref = useRef();
  const pVer3Ref = useRef();
  const pVer4Ref = useRef();
  const eVer1Ref = useRef();
  const eVer2Ref = useRef();
  const eVer3Ref = useRef();
  const eVer4Ref = useRef();

  const countdown = () => {
    setCount((prev) => prev - 1);
  };

  const handleSubmit = async ({
    pVer1,
    pVer2,
    pVer3,
    pVer4,
    eVer1,
    eVer2,
    eVer3,
    eVer4,
  }) => {
    const email = user.email;
    const phoneNumber = user.phoneNumber;
    const emailOTP = pVer1 + pVer2 + pVer3 + pVer4;
    const phoneOTP = eVer1 + eVer2 + eVer3 + eVer4;

    setResendOTP({ email, phoneNumber, emailOTP, phoneOTP });

    const result = await otpVerificationAPI.otpVerification({
      email,
      phoneNumber,
      emailOTP,
      phoneOTP,
    });

    console.log("what is login", result.ok, result.data);

    console.log({ email, phoneNumber, emailOTP, phoneOTP });

    if (!result.ok) return alert("Could not verify otp");

    if (!result.data.result) return alert("Could not verify otp");
    const currentUser = jwtDecode(result?.data?.details);
    setCurrentUser(currentUser);
    authStorage.storeToken(result?.data?.details);

    console.log("authToken", currentUser);

    // with navigate router
  };

  const resendCred = async () => {
    const email = user.email;
    const phoneNumber = user.phoneNumber;

    // const result = await otpAPI.otp({ email, phoneNumber})
    console.log(email, phoneNumber);
  };

  useEffect(() => {
    if (count === 0) {
      setCount(45);
      resendCred();
    }
  }, [count]);

  useFocusEffect(
    useCallback(() => {
      const countdownId = setInterval(countdown, 1000);
      return () => {
        clearInterval(countdownId);
      };
    }, [])
  );
  return (
    <View style={styles.mainContainer}>
      <View style={styles.titleTextRow}>
        <Text style={styles.titleText}>OTP Verification</Text>
      </View>

      <View style={styles.subTextRow}>
        <Text style={styles.subText}>{`Please enter the code sent to `}+{ user.phoneNumber }</Text>
      </View>

      <View style={styles.entryBoxContainer}>
        <Formik
          initialValues={initialValues}
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
              <TextInput
                autoFocus={true}
                maxLength={1}
                placeholder="1"
                keyboardType="numeric"
                onBlur={() => setFieldTouched("pVer1")}
                onChangeText={handleChange("pVer1")}
                ref={pVer1Ref}
                style={styles.inputBox}
              />
              <ErrorMessage error={errors.eVer1} visible={touched.eVer1} />
              <TextInput
                maxLength={1}
                placeholder="2"
                keyboardType="numeric"
                onBlur={() => setFieldTouched("pVer2")}
                onChangeText={handleChange("pVer2")}
                ref={pVer2Ref}
                returnKeyType="next"
                style={styles.inputBox}
              />
              <ErrorMessage error={errors.eVer2} visible={touched.eVer2} />

              <TextInput
                maxLength={1}
                placeholder="3"
                keyboardType="numeric"
                onBlur={() => setFieldTouched("pVer3")}
                onChangeText={handleChange("pVer3")}
                ref={pVer3Ref}
                returnKeyType="next"
                style={styles.inputBox}
              />
              <ErrorMessage error={errors.eVer3} visible={touched.eVer3} />


              <TextInput
                maxLength={1}
                placeholder="4"
                keyboardType="numeric"
                onBlur={() => setFieldTouched("pVer4")}
                onChangeText={handleChange("pVer4")}
                ref={pVer4Ref}
                returnKeyType="next"
                style={styles.inputBox}
              />
              <ErrorMessage error={errors.eVer4} visible={touched.eVer4} />



            </>
          )}
        </Formik>

      </View>
      <Text style={styles.countdown}>Resend Code in 00:{count < 10 ? `0${count}` : count}</Text>

      <View style={styles.subTextRow}>
              <Text style={styles.subText}>{`Please enter the code sent to `}{ user.email }</Text>
            </View>

      <View style={styles.entryBoxContainer}>
              <Formik
                initialValues={initialValues}
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
                    <TextInput
                      autoFocus={true}
                      maxLength={1}
                      placeholder="1"
                      keyboardType="numeric"
                      onBlur={() => setFieldTouched("eVer1")}
                      onChangeText={handleChange("eVer1")}
                      ref={eVer1Ref}
                      style={styles.inputBox}
                    />
                    <ErrorMessage error={errors.eVer1} visible={touched.eVer1} />
                    <TextInput
                      maxLength={1}
                      placeholder="2"
                      keyboardType="numeric"
                      onBlur={() => setFieldTouched("eVer2")}
                      onChangeText={handleChange("eVer2")}
                      ref={eVer2Ref}
                      returnKeyType="next"
                      style={styles.inputBox}
                    />
                    <ErrorMessage error={errors.eVer2} visible={touched.eVer2} />

                    <TextInput
                      maxLength={1}
                      placeholder="3"
                      keyboardType="numeric"
                      onBlur={() => setFieldTouched("eVer3")}
                      onChangeText={handleChange("eVer3")}
                      ref={eVer3Ref}
                      returnKeyType="next"
                      style={styles.inputBox}
                    />
                    <ErrorMessage error={errors.eVer3} visible={touched.eVer3} />


                    <TextInput
                      maxLength={1}
                      placeholder="4"
                      keyboardType="numeric"
                      onBlur={() => setFieldTouched("eVer4")}
                      onChangeText={handleChange("eVer4")}
                      ref={eVer4Ref}
                      returnKeyType="next"
                      style={styles.inputBox}
                    />
                    <ErrorMessage error={errors.eVer4} visible={touched.eVer4} />



                  </>
                )}
              </Formik>

            </View>

                  <Text style={styles.countdown}>Resend Code in 00:{count < 10 ? `0${count}` : count}</Text>


            <View style={styles.button}>
                              <Button title="Verify" color="babyBlue" onPress={handleSubmit}/>
                          </View>

            <Text style={styles.swipeUp}>
                      Swipe Up if already have an account
                    </Text>


    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: GlobalStyles.DivContainer.backgroundColor,
    height: 812,
    width: "100%",
    flex: GlobalStyles.DivContainer.flex,
  },

  titleTextRow: {
    marginTop: GlobalStyles.Title.marginTop,
    marginLeft: GlobalStyles.Title.marginLeft,
    width: GlobalStyles.Title.width,
  },

  titleText: {
    fontSize: GlobalStyles.Title.fontSize,
    fontWeight: GlobalStyles.Title.fontWeight,
  },

  subText: {
    fontSize: GlobalStyles.RowText.fontSize,
    fontWeight: GlobalStyles.RowText.fontWeight,
  },

  subTextRow: {
    marginTop: GlobalStyles.RowText.marginTop,
    marginLeft: GlobalStyles.RowText.marginLeft,
    width: "80%",
    fontColor: GlobalStyles.RowText.fontColor,
  },

  entryBoxContainer: {
    width: "80%",
    marginLeft: "10%",
    flexDirection: "row",
    justifyContent: "space-between",
  },

  inputBox: {
  height: 40,
  width: 40,
  backgroundColor: "white",
  marginTop: "5%",
  borderRadius: 5,
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center"
  },

  countdown: {
  width: "80%",
  marginTop: "2.5%",
  marginLeft: "10%"
  },

  button: {
  flex: 1,
  flexDirection: "column",
  width: "80%",
  marginLeft: "10%",
  justifyContent: "flex-end",
  alignItems: "flex-end",
  },

  swipeUp: {
  justifyContent: "flex-end",
  textAlign: "center",
  textHorizontalAlign: "flex-end"
  }
});

export default OTPVerificationPersonal2;
