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
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import { useFocusEffect } from "@react-navigation/native";
import jwtDecode from "jwt-decode";

import colors from "../config/colors";

import GlobalStyles from "../../GlobalStyles";
import AuthContext from "../auth/context";
import Button from "../components/AppButton";
import ErrorMessage from "../components/forms/ErrorMessage";
import loginApi from "../api/apiLogin";
import authStorage from "../auth/storage";
import Screen from "../components/Screen";
import { TouchableOpacity } from "react-native-gesture-handler";

import * as Device from 'expo-device';

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

const OTPVerificationPersonal = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [resetVisible, setResetVisible] = useState(false);
  const {
    user,
    currentUser,
    setCurrentUser,
    setUserID,
    setAccountID,
    setUserDetails,
    setCardID,
    expoPushToken,
    setCustomerDetails
  } = useContext(AuthContext);
  const [count, setCount] = useState(59);
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

  /**
   * @dev This function sends to OTP to the endpoint
   *      Then we get the JWT back
   * @param {Obj} param0 
   * @returns False if OTP fails
   */
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
    //Variable setup for OTP
    const email = user.email;
    const phoneNumber = user.phoneNumber;
    const emailOTP = pVer1 + pVer2 + pVer3 + pVer4;
    const phoneOTP = eVer1 + eVer2 + eVer3 + eVer4;

    setResendOTP({ email, phoneNumber, emailOTP, phoneOTP });

    //This sets the loading icon and disables the button
    setIsLoading(true);

    //Sending of the OTP is here
    const result = await loginApi.VerifyLogin({
      phoneNumber,
      email,
      phoneOTP,
      emailOTP,
    });
    console.log(result)
    if (!result) return alert("Could not verify otp");

    const IDs = await loginApi.GetIDs(result?.token)

    //If the account details cannot be found
    // console.log(IDs)
    // if(!IDs){
    //   alert("Warning your account could not be authenticated")
    //   return;
    // }
    
    authStorage.storeToken(result?.token);
    setCurrentUser(IDs.token)
    setUserID(IDs.userID)
    setAccountID(IDs.accountID)
    setCardID(IDs.cardID)
    setCustomerDetails(IDs.customerDetails)
    console.log({      
      tokenID:expoPushToken,
      customerID: IDs.customerDetails,
      deviceID: Device.osInternalBuildId,
      deviceName: Device.deviceName,
      macAddress: "",
      operatingSystem: Device.osName
    })
    const pushNotification = await loginApi.SendPushNotificationToken({
      tokenID:expoPushToken,
      customerID: IDs.customerDetails,
      deviceID: Device.osInternalBuildId,
      deviceName: Device.deviceName,
      macAddress: "",
      operatingSystem: Device.osName
    })
    console.log("notification",pushNotification)

    //Turns off the loading
    setIsLoading(false);
  };

  const resendCred = async () => {
    const email = user.email;
    const phoneNumber = user.phoneNumber;

    const result = await loginApi.Login({ email, phoneNumber });
    console.log(email, phoneNumber, result);
    setResetVisible(false);
    setCount(59);
  };

  useEffect(() => {
    if (count === 0) {
      //setCount(59);
      setResetVisible(true);
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
    <TouchableWithoutFeedback onPress={Keyboard.dis}>
      <Screen style={{ backgroundColor: "white" }}>
        {/* <View style={styles.titleTextRow}>
          <Text style={styles.titleText}>OTP Verification</Text>
        </View>

        <View style={styles.subTextRow}>
          <Text style={styles.subText}>
            {`Please enter the code sent to `}{user.email}
          </Text>
        </View> */}

        <View style={{ flex: 1, justifyContent: "flex-end" }}>
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <Image
              style={{ width: "70%" }}
              resizeMode="contain"
              source={require("../assets/login/LoginAnimal2.png")}
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
              <Text style={{ fontSize: 30 }}>OTP Verification</Text>
            </View>

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
                  <View
                    style={{
                      paddingHorizontal: 30,
                      paddingVertical: 50,
                      backgroundColor: "white",
                      borderTopLeftRadius: 20,
                      borderTopRightRadius: 20,
                    }}
                  >
                    <View style={styles.subTextRow}>
                      <Text style={styles.subText}>
                        {`Please enter the code sent to `}
                        {user.email}
                      </Text>
                    </View>
                    <View style={styles.entryBoxContainer}>
                      <TextInput
                        autoFocus={true}
                        maxLength={1}
                        keyboardType="numeric"
                        onBlur={() => setFieldTouched("pVer1")}
                        onChangeText={handleChange("pVer1")}
                        onChange={() => pVer2Ref.current.focus()}
                        style={styles.inputBox}
                      />
                      <ErrorMessage
                        error={errors.pVer1}
                        visible={touched.pVer1}
                      />
                      <TextInput
                        maxLength={1}
                        keyboardType="numeric"
                        onBlur={() => setFieldTouched("pVer2")}
                        onChangeText={handleChange("pVer2")}
                        onChange={() => pVer3Ref.current.focus()}
                        ref={pVer2Ref}
                        returnKeyType="next"
                        style={styles.inputBox}
                      />
                      <ErrorMessage
                        error={errors.pVer2}
                        visible={touched.pVer2}
                      />

                      <TextInput
                        maxLength={1}
                        keyboardType="numeric"
                        onBlur={() => setFieldTouched("pVer3")}
                        onChangeText={handleChange("pVer3")}
                        onChange={() => pVer4Ref.current.focus()}
                        ref={pVer3Ref}
                        returnKeyType="next"
                        style={styles.inputBox}
                      />
                      <ErrorMessage
                        error={errors.pVer3}
                        visible={touched.pVer3}
                      />

                      <TextInput
                        maxLength={1}
                        keyboardType="numeric"
                        onBlur={() => setFieldTouched("pVer4")}
                        onChangeText={handleChange("pVer4")}
                        onChange={() => eVer1Ref.current.focus()}
                        ref={pVer4Ref}
                        returnKeyType="next"
                        style={styles.inputBox}
                      />
                      <ErrorMessage
                        error={errors.pVer4}
                        visible={touched.pVer4}
                      />
                    </View>

                    {!resetVisible ? (
                      <Text style={styles.countdown}>
                        Resend Code in 00:{count < 10 ? `0${count}` : count}
                      </Text>
                    ) : (
                      <TouchableOpacity
                        style={styles.resendContainer}
                        onPress={resendCred}
                      >
                        <Text style={styles.resendItem}>Resend</Text>
                      </TouchableOpacity>
                    )}

                    <View style={styles.subTextRow}>
                      <Text style={[styles.subText, { marginTop: "10%" }]}>
                        {`Please enter the code sent to `}+{user.phoneNumber}
                      </Text>
                    </View>

                    <View style={styles.entryBoxContainer}>
                      <TextInput
                        maxLength={1}
                        keyboardType="numeric"
                        onBlur={() => setFieldTouched("eVer1")}
                        onChangeText={handleChange("eVer1")}
                        onChange={() => eVer2Ref.current.focus()}
                        ref={eVer1Ref}
                        style={styles.inputBox}
                      />
                      <ErrorMessage
                        error={errors.eVer1}
                        visible={touched.eVer1}
                      />
                      <TextInput
                        maxLength={1}
                        keyboardType="numeric"
                        onBlur={() => setFieldTouched("eVer2")}
                        onChangeText={handleChange("eVer2")}
                        onChange={() => eVer3Ref.current.focus()}
                        ref={eVer2Ref}
                        returnKeyType="next"
                        style={styles.inputBox}
                      />
                      <ErrorMessage
                        error={errors.eVer2}
                        visible={touched.eVer2}
                      />

                      <TextInput
                        maxLength={1}
                        keyboardType="numeric"
                        onBlur={() => setFieldTouched("eVer3")}
                        onChangeText={handleChange("eVer3")}
                        onChange={() => eVer4Ref.current.focus()}
                        ref={eVer3Ref}
                        returnKeyType="next"
                        style={styles.inputBox}
                      />
                      <ErrorMessage
                        error={errors.eVer3}
                        visible={touched.eVer3}
                      />

                      <TextInput
                        maxLength={1}
                        keyboardType="numeric"
                        onBlur={() => setFieldTouched("eVer4")}
                        onChangeText={handleChange("eVer4")}
                        ref={eVer4Ref}
                        returnKeyType="next"
                        style={styles.inputBox}
                      />
                      <ErrorMessage
                        error={errors.eVer4}
                        visible={touched.eVer4}
                      />
                    </View>
                    {!resetVisible ? (
                      <Text style={[styles.countdown, { marginBottom: "10%" }]}>
                        Resend Code in 00:{count < 10 ? `0${count}` : count}
                      </Text>
                    ) : (
                      <TouchableOpacity
                        style={[
                          styles.resendContainer,
                          { marginBottom: "10%" },
                        ]}
                        onPress={resendCred}
                      >
                        <Text style={styles.resendItem}>Resend</Text>
                      </TouchableOpacity>
                    )}
                    <View style={styles.button}>
                      <Button
                        title="Verify"
                        textColor="white"
                        color="black"
                        onPress={handleSubmit}
                        visible={isLoading}
                        disabled={isLoading}
                      />
                    </View>
                  </View>
                </>
              )}
            </Formik>
          </View>
        </View>
      </Screen>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  resendContainer: {
    width: "80%",
    marginTop: "2.5%",
    marginLeft: "10%",
  },
  resendItem: {
    color: "blue",
    textDecorationLine: "underline",
  },
  mainContainer: {
    backgroundColor: GlobalStyles.DivContainer.backgroundColor,
    minHeight: "100%",
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
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },

  countdown: {
    width: "80%",
    marginTop: "2.5%",
    marginLeft: "10%",
    opacity: 0.3,
  },

  button: {
    flex: 1,
    flexDirection: "column",
    width: "80%",
    marginLeft: "10%",
    justifyContent: "flex-start",
    alignItems: "flex-end",
    marginBottom: "20%",
  },

  swipeUp: {
    justifyContent: "flex-end",
    textAlign: "center",
    textHorizontalAlign: "flex-end",
  },
});

export default OTPVerificationPersonal;
