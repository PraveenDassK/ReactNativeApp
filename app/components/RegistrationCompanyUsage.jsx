import React, { useContext, useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  Text,
  TextInput,
  Image,
  Pressable,
  useWindowDimensions,
  Dimensions,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import * as Yup from "yup";
import {
  horizontalScale,
  verticalScale,
  moderateScale,
} from "../config/scaling";

import Button from "./AppButton";
import { Formik, Field, Form } from "formik";
import { Dropdown } from "react-native-element-dropdown";
import { CheckBox } from "@rneui/themed";
import AuthScreen from "./AuthScreen";
import ErrorMessage from "./forms/ErrorMessage";

const validationSchema = Yup.object().shape({
  customers: Yup.string().required().min(1).max(50).label("Customers"),
});

const CompanyUsage = ({ SaveDetails, setScreenToShow, setCompanyUsage }) => {
  const [name, setName] = useState("");
  const [isChecked, setChecked] = useState(false);
  const [operationTime, setOperationTime] = useState("");
  const handleSubmit = ({ customers }) => {
    // console.log(customers)
    // let newArray = [
    //   {
    //     operationType: operationTime,
    //     user_outofUK: isChecked,
    //     main_customers: customers,
    //   },
    // ];
    const value={
      operationType: operationTime,
      user_outofUK: isChecked,
      main_customers: customers,
    }
    SaveDetails(value, "CompanyUsage");
  };
  const handleBack = () => {
    setScreenToShow("CompanyOperations");
  };

  const companyData = [
    { label: "LLC", value: "LLC" },
    { label: "SOLETRADER", value: "SOLETRADER" },
    { label: "OPARTNRSHP", value: "OPARTNRSHP" },
    { label: "LPARTNRSHP", value: "LPARTNRSHP" },
    { label: "LLP", value: "LLP" },
    { label: "PLC", value: "PLC" },
  ];

  return (
    <AuthScreen
      title="How would you use this account"
      img="eagleCard"
      handleBack={handleBack}
    >
      <Formik
        initialValues={{
          customers: "",
        }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {({ handleChange, handleSubmit, setFieldTouched, errors, touched }) => (
          <View style={[styles.component1981, styles.mt14]}>
            <Text>Who are your main customers</Text>
            <TextInput
              keyboardType="Text"
              placeholder="Enter you main customers"
              placeholderTextColor="#D3D3D3"
              onBlur={() => setFieldTouched("customers")}
              onChangeText={handleChange("customers")}
              style={[
                styles.component1981Child,
                styles.childBorder,
                { padding: 10 },
              ]}
            />
            <ErrorMessage
              error={errors.customers}
              visible={touched.customers}
            />
            <CheckBox
              title="Are there any customers outside the EU?"
              checkedIcon="check-square-o"
              uncheckedIcon="square-o"
              checkedColor="black"
              checked={isChecked}
              onPress={() => setChecked(!isChecked)}
            />

            <Dropdown
              style={[styles.dropdown]}
              containerStyle={styles.dropdownContainer}
              data={companyData}
              maxHeight={100}
              labelField="label"
              valueField="label"
              placeholder={"Select an option"}
              value={operationTime}
              onChange={(item) => {
                setOperationTime(item.value);
              }}
            />

            <Button
              title="Continue"
              color="black"
              textColor="white"
              onPress={handleSubmit}
            />
          </View>
        )}
      </Formik>
    </AuthScreen>
  );
};

const styles = StyleSheet.create({
  childBorder: {
    borderWidth: 0.5,
    borderRadius: 10,
    borderColor: "#D3D3D3",
    opacity: 1,
    height: 50,
    marginTop: "2.5%",
    marginBottom: "5%",
  },
});

export default CompanyUsage;
