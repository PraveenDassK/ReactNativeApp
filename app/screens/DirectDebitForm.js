import React, { useContext, useEffect, useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
} from "react-native";

import { moderateScale } from "../config/scaling";
import AuthContext from "../auth/context";
import PinModal from "../components/PinModal";
import UserIcon from "../components/UserIcon";
import Button from "../components/AppButton";
import GlobalStyles from "../../GlobalStyles";
import KeyboardAvoider from "../components/KeyboardAvoider";
import CountdownBar from "../components/CountdownBar";
import { LinearGradient } from "expo-linear-gradient";
import { Formik } from "formik";
import * as Yup from "yup";
import ErrorMessage from "../components/forms/ErrorMessage";
import DateTimePicker from "@react-native-community/datetimepicker";
import moment from "moment";
import { CheckBox } from "@rneui/themed";
const items = [
  {
    id: 2,
    label: " Account holders first name",
    placeholder: "Enter your name",
    initialValue: "firstName",
  },
  {
    id: 3,
    label: "Account holders last name",
    placeholder: "Enter your name",
    initialValue: "lastName",
  },
  {
    id: 4,
    label: "Account Number",
    placeholder: "Enter Account number",
    initialValue: "accNum",
  },
  {
    id: 5,
    label: "Sort Code",
    placeholder: "Enter sort code",
    initialValue: "sortCode",
  },
  {
    id: 6,
    label: "Service Users ID",
    placeholder: "Enter Service Users ID",
    initialValue: "serviceId",
  },
];
const DirectDebitForm = ({ navigation }) => {
  const [selectedOption, setSelectedOption] = useState("personal");
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const [mode, setMode] = useState("date");
  const [checked, setChecked] = useState(true);
  const [termsAgreed, setTermsAgreed] = useState(false);
  const [termsErrors, setTermsError] = useState("");
  const toggleCheckbox = () => setChecked(!checked);
  const termstoggleCheckbox = () => setTermsAgreed(!termsAgreed);

  const showDatepicker = () => {
    showMode("date");
  };
  const handleCheckboxChange = (value) => {
    setSelectedOption(value);
  };
  const validationSchema = Yup.object().shape({
    firstName: Yup.string()

      .required("Name is required")

      .matches(/^[a-zA-Z\s]+$/, "Invalid name format")

      .min(2, "Name must be at least 2 characters")

      .max(20, "Name must be less than 20 characters"),

    lastName: Yup.string()

      .required("Name is required")

      .matches(/^[a-zA-Z\s]+$/, "Invalid name format")

      .min(2, "Name must be at least 2 characters")

      .max(20, "Name must be less than 20 characters"),

    sortCode: Yup.string()

      .required("Sort code is required")

      .matches(/^\d{6}$/, "Sort code must be 6 digits"),

    accNum: Yup.string()

      .required("Account number is required")

      .matches(/^\d{8}$/, "Account number must be 8 digits"),
    serviceId: Yup.string().required("service user Id  is required"),
  });
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);
  };
  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };
  const { darkMode } = useContext(AuthContext);
  const termsText = {
    text: ` - This Guarantee is offered by all banks and building societies that accept instructions to pay Direct Debits. ${"\n"} - If there are any changes to the amount, date or frequency of your Direct Debit, Carbonyte will notify you 3 working days in advance of your account being debited or as otherwise agreed. If you request Carbonyte to collect a payment, confirmation of the amount and date will be given to you at the time of the request. ${"\n"}- If an error is made in the payment of your Direct Debit, by Carbonyte or your building society, you are entitled to a full and immediate refund of the amount paid from your bank or building society.  ${"\n"} - If you receive a refund you are not entitled to, you must pay it back when Carbonyte contacts you. ${"\n"}- You can cancel a Direct Debit at any time by simply contacting your bank or building society. Written confirmation may be required. Please also notify us.  ${"\n"} - I agree to set up a direct debit with Carbonyte. I give my consent for Carbonyte to arrange for funds on what is owned to be debited from the account details provided below.`,
  };
  const handleSubmit = async ({
    firstName,
    lastName,
    accNum,
    sortCode,
    serviceId,
  }) => {
    if (!termsAgreed || !checked) {
      return setTermsError(
        !checked
          ? "*Accept the payment setup"
          : "*Accept the terms and conditions"
      );
    } else {
      setTermsError("");
    }
    console.log(
      firstName,
      lastName,
      accNum,
      sortCode,
      serviceId,
      date,
      "Passed if statement"
    );
  };

  return (
    <ImageBackground
      source={
        darkMode === "DARK"
          ? require("../assets/dashboardDark/DashboardBottom.jpg")
          : require("../assets/backgrounds/Dashboard.jpg")
      }
      resizeMode="contain"
      imageStyle={{
        bottom: "-70%", // Whatever offset you want from the bottom
      }}
      style={{
        width: "100%",
        backgroundColor:
          darkMode === "DARK"
            ? GlobalStyles.Color.darkTheme_bg
            : GlobalStyles.Color.lightTheme_bg,
      }}
    >
      <ScrollView>
        {/* <TouchableWithoutFeedback onPress={Keyboard.dismiss}> */}
        <View
          style={{
            flex: 1,
            paddingHorizontal: 20,
            paddingVertical: 24,
            backgroundColor: "#FFFFFF",
            marginTop: 27,
            borderRadius: 20,
            marginHorizontal: "5%",
            marginBottom: "5%",
          }}
        >
          <Formik
            initialValues={{
              firstName: "",
              lastName: "",
              sortCode: "",
              accNum: "",
              serviceId: "",
              termsAgreed: "",
            }}
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
                <View>
                  <Text style={styles.formLabel}>
                    {" "}
                    Setup your automatic bill payment
                  </Text>

                  {items.map((item, index) => (
                    <View
                      key={item.id}
                      style={{
                        marginTop: 22,
                      }}
                    >
                      <Text style={styles.formLabel}>{item.label}</Text>
                      <TextInput
                        style={styles.inputBox}
                        onChangeText={handleChange(item.initialValue)}
                        placeholder={item.placeholder}
                      />
                      <ErrorMessage
                        error={errors[item.initialValue]}
                        visible={touched[item.initialValue]}
                      />
                    </View>
                  ))}
                  <View
                    style={{
                      marginTop: 22,
                    }}
                  >
                    <Text style={styles.formLabel}>Date</Text>
                    <View>
                      <View style={styles.buttonContainer}>
                        <TouchableOpacity
                          onPress={showDatepicker}
                          style={styles.inputBox}
                        >
                          <Text>{moment(date).format("MMM DD YYYY")}</Text>
                        </TouchableOpacity>
                      </View>
                      {show && (
                        <DateTimePicker
                          testID="dateTimePicker"
                          value={date}
                          mode={mode}
                          is24Hour={true}
                          display="spinner"
                          onChange={onChange}
                        />
                      )}
                    </View>
                  </View>
                </View>
                <View style={styles.bottomtextContainer}>
                  <Text style={styles.bottomHeading}>
                    The Direct Debit Guarantee
                  </Text>
                  <Text style={styles.bottomTermsText}>{termsText?.text}</Text>
                </View>
                <View>
                  <View
                    style={{
                      alignSelf: "center",
                      padding: 18,
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <CheckBox
                      checked={checked}
                      onPress={toggleCheckbox}
                      iconType="material-community"
                      checkedIcon="checkbox-outline"
                      uncheckedIcon={"checkbox-blank-outline"}
                    />
                    <Text
                      style={{
                        fontFamily: "Montserrat-Regular",
                        fontSize: 12,
                      }}
                    >
                      I agree to set up a Direct Debit with Carbonyte and I
                      authorised Carbonyte to arrange for funds to be debited
                      from the account details are provided for amounts owed to
                      the Carbonyte.
                    </Text>
                  </View>
                </View>
                <View>
                  <View
                    style={{
                      alignSelf: "center",
                      padding: 18,
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <CheckBox
                      checked={termsAgreed}
                      onPress={termstoggleCheckbox}
                      iconType="material-community"
                      checkedIcon="checkbox-outline"
                      uncheckedIcon={"checkbox-blank-outline"}
                    />
                    <Text
                      style={{
                        fontFamily: "Montserrat-Regular",
                        fontSize: 12,
                      }}
                    >
                      I accept the Terms & Conditions of Carbonyte.
                    </Text>
                  </View>
                  <ErrorMessage error={termsErrors} visible={termsErrors} />
                </View>
                <View style={styles.buttonContainer}>
                  <TouchableOpacity onPress={handleSubmit}>
                    <LinearGradient
                      colors={["#212529", "#3A3A3A"]}
                      start={{ x: 0, y: 0 }}
                      end={{ x: 1, y: 0 }}
                      style={styles.button}
                    >
                      <Text style={styles.buttonText}>Setup direct debit</Text>
                    </LinearGradient>
                  </TouchableOpacity>
                </View>
              </>
            )}
          </Formik>
        </View>
        {/* </TouchableWithoutFeedback> */}
      </ScrollView>
    </ImageBackground>
  );
};

export default DirectDebitForm;

const styles = StyleSheet.create({
  boxShadow: {},
  container: {
    flex: 1,
    backgroundColor: GlobalStyles.DivContainer.backgroundColor,
  },
  bottomtextContainer: {
    paddingHorizontal: 10,
    marginVertical: "5%",
  },
  bottomHeading: {
    color: GlobalStyles.Color.black,
    fontFamily: "Montserrat-Regular",
    fontSize: 14,
  },
  bottomTermsText: {
    color: GlobalStyles.Color.black,
    fontFamily: "Montserrat-Regular",
    fontSize: 12,
    paddingVertical: "4%",
  },
  formLabel: { fontSize: 14, fontFamily: "Montserrat", marginBottom: 5 },
  inputBox: {
    width: 332,
    height: 46,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#EBEBEB",
    paddingHorizontal: 20,
    paddingVertical: 14,
    fontSize: 14,
    color: "#999999",
  },
  // buttonContainer: {
  //   display: "flex",
  //   flexDirection: "row",
  //   justifyContent: "center",
  //   marginTop: 50,
  // },

  button: {
    width: 331.08,
    height: 47,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontFamily: "Montserrat",
  },
});
