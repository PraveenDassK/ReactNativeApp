import React, { useContext, useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
} from "react-native";
import GlobalStyles from "../../GlobalStyles";
import AuthContext from "../auth/context";
import api from "../api/api_list";
import apiBeneficiaries from "../api/apiBeneficiaries";
import Button from "../components/AppButton";
import { verticalScale } from "../config/scaling";
import { Formik } from "formik";
import * as Yup from "yup";

import ErrorMessage from "../components/forms/ErrorMessage";
import KeyboardAvoider from "../components/KeyboardAvoider";
import CountdownBar from "../components/CountdownBar";
import CheckBox from '@react-native-community/checkbox';

const validationSchema = Yup.object().shape({
  accountName: Yup.string().required().min(1).max(30).label("Account name"),
  phoneNumber: Yup.string()
    .required()
    .matches(/^[0-9]+$/, "Phone number must be digits")
    .min(9)
    .max(11)
    .label("Phone number"),

  sortCode: Yup.string()
    .required()
    .matches(/^[0-9]+$/, "Sort code must be digits")
    .min(6, "Must be exactly 6 digits")
    .max(6, "Must be exactly 6 digits")
    .label("Sort code"),
  accNum: Yup.string()
    .required()
    .matches(/^[0-9]+$/, "Account number must be digits")
    .min(8, "Must be exactly 8 digits")
    .max(8, "Must be exactly 8 digits")
    .label("Account number"),
});

const items = [
  {
    id: 2,
    label: "First name",
    placeholder: "Enter your name",
    initialValue: "firstName",
  },
  {
    id: 3,
    label: "Last name",
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
];

const AddBeneficiary = ({ navigation }) => {
  const [accountName, setAccountName] = useState("");
  const [phoneNumber, setIban] = useState("");
  const [sortCode, setPhoneNumber] = useState("");
  const [accNum, setAccNum] = useState("");
  const [selectedOption, setSelectedOption] = useState(null);

  const handleCheckboxChange = (value) => {
    setSelectedOption(value);
  };

  const authContext = useContext(AuthContext);

  const handleSubmit = async ({
    accountName,
    phoneNumber,
    accNum,
    sortCode,
  }) => {

  };



  return (
    <KeyboardAvoider>
      <CountdownBar />
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={{ flex: 1, paddingVertical: verticalScale(60) }}>
          <Formik
            initialValues={{
              firstName: "",
              lastName: "",
              sortCode: "",
              accNum: "",
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

                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <CheckBox
                      value={selectedOption === 'personal'}
                      onValueChange={() => handleCheckboxChange('personal')}
                    />
                    <Text>Personal</Text>
                  </View>
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <CheckBox
                      value={selectedOption === 'business'}
                      onValueChange={() => handleCheckboxChange('business')}
                    />
                    <Text>Business</Text>
                  </View>

                  {items.map((item, index) => (
                    <View
                      key={item.id}
                      style={{
                        width: "90%",
                        marginLeft: "5%",
                        marginBottom: "5%",
                      }}
                    >
                      <Text style={{ fontSize: 14 }}>{item.label}</Text>
                      <TextInput
                        onBlur={() => setFieldTouched(item.initialValue)}
                        onChangeText={handleChange(item.initialValue)}
                        style={{ fontSize: 24, marginTop: "1%" }}
                      ></TextInput>
                      <View
                        style={{
                          height: 1,
                          backgroundColor: "black",
                          marginTop: "1%",
                          opacity: 0.7,
                        }}
                      />
                      <ErrorMessage
                        error={errors[item.initialValue]}
                        visible={touched[item.initialValue]}
                      />
                    </View>
                  ))}
                </View>
                <View
                  style={[
                    { flex: 1, justifyContent: "flex-end" }
                  ]}
                >
                  <TouchableOpacity style={styles.button}>
                    <Button title="Confirm" onPress={handleSubmit} />
                  </TouchableOpacity>
                </View>
              </>
            )}
          </Formik>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoider>
  );
};

const styles = StyleSheet.create({
  boxShadow: {},
  container: {
    flex: 1,
    backgroundColor: GlobalStyles.DivContainer.backgroundColor,
  },
  bottom: {
    bottom: "5%",
    flex: 1,
    justifyContent: "flex-end",
  },

  button: {
    width: "90%",
    left: "5%",
  },
});

export default AddBeneficiary;
