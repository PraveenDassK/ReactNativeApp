import React, { useContext, useEffect, useState } from "react";
//import * as React from "react";
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
import Screen from "./Screen";
import AuthContext from "../auth/context";
import GlobalStyles from "../../GlobalStyles";
import api from "../api/api_list";
import { Formik } from "formik";
import * as Yup from "yup";
import {
  horizontalScale,
  verticalScale,
  moderateScale,
} from "../config/scaling";
import Button from "./AppButton";
import AuthScreen from "./AuthScreen";
import ErrorMessage from "./forms/ErrorMessage";

const validationSchema = Yup.object().shape({
  incomeDetails: Yup.string().required().min(1).max(10).label("Annual income"),
  taxResidency: Yup.string().required().min(1).max(10).label("Tax residency"),
  nationalInsurance: Yup.string().required().min(1).max(10).label("National Insurance"),
});


const Income = ({ SaveDetails, setScreenToShow }) => {
  const handleSubmit = async ({ incomeDetails, taxResidency, nationalInsurance }) => {
    SaveDetails({
      "incomeDetails": {
        "totalIncome": incomeDetails,
        "savings": "",
        "taxResidency": taxResidency,
        "incomeSources": [
          "Salary"
        ]
      },
      nationalInsurance: nationalInsurance
    }, "Income");
  };

  const handleBack = () => {
    console.log("!");
    setScreenToShow("EmploymentDetails");
  };
  return (
    <AuthScreen title="Income details" img="eagleCard" handleBack={handleBack}>
      <Formik
        initialValues={{
          incomeDetails: "",
          taxResidency: "",
          nationalInsurance: "",
        }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {({ handleChange, handleSubmit, errors, setFieldTouched, touched }) => (
          <View
            style={[
              styles.component1981,
              styles.mt14,
              { marginLeft: horizontalScale(10) },
            ]}
          >
            <Text>Annual income</Text>
            <TextInput
              keyboardType="numeric"
              onBlur={() => setFieldTouched("incomeDeatils")}
              onChangeText={handleChange("incomeDetails")}
              style={[
                styles.component1981Child,
                styles.childBorder,
                { padding: 10 },
              ]}
            />
            <ErrorMessage
              error={errors.incomeDetails}
              visible={touched.incomeDetails}
            />

            <Text>Tax residency</Text>
            <TextInput
              onBlur={() => setFieldTouched("taxResidency")}
              onChangeText={handleChange("taxResidency")}
              style={[
                styles.component1981Child,
                styles.childBorder,
                { padding: 10 },
              ]}
            />

            <ErrorMessage
              error={errors.taxResidency}
              visible={touched.taxResidency}
            />
            <Text>National insurance number</Text>
            <TextInput
              onBlur={() => setFieldTouched("nationalInsurance")}
              onChangeText={handleChange("nationalInsurance")}
              style={[
                styles.component1981Child,
                styles.childBorder,
                { padding: 10 },
              ]}
            />
             <ErrorMessage
              error={errors.nationalInsurance}
              visible={touched.nationalInsurance}
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

export default Income;
