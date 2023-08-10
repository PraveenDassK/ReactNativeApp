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

import Button from "./AppButton";
import { Formik, Field, Form } from "formik";
import { Dropdown } from "react-native-element-dropdown";
import { CheckBox } from "@rneui/themed";
import AuthScreen from "./AuthScreen";
import ErrorMessage from "./forms/ErrorMessage";
const CompanyOperations = ({ SaveDetails, setScreenToShow }) => {
  const [operationTime, setOperationTime] = useState("");
  const [error, setError] = useState("");
  const timeOptions = [
    { label: "New ownership", value: "New ownership" },
    { label: "0 - 6 Months", value: "0 - 6 Months" },
    { label: "6 Months - 1 Year", value: "6 Months - 1 Year" },
    { label: "1 - 2 Years", value: "1 - 2 Years" },
    { label: "2 - 5 Years", value: "2 - 5 Years" },
    { label: "5 - 10 Years", value: "5 - 10 Years" },
    { label: "10+ Years", value: "10+ Years" },
  ];

  /**
   * @dev This sends the String of the item back
   */
  const sendDetails = () => {
    console.log(operationTime, "this is the time");
    if (!operationTime) return setError("Select one option");
    SaveDetails(operationTime, "CompanyOperations");
  };

  const handleBack = () => {
    setScreenToShow("CompanyIncome");
  };

  return (
    <AuthScreen
      img="lion"
      title="When were you incorparated?"
      handleBack={handleBack}
    >
      <Formik onSubmit={(values) => sendData(values)}>
        {({ handleChange, handleSubmit, setFieldTouched }) => (
          <View style={[styles.component1981, styles.mt14]}>
            <Text>Enter one that applies</Text>

            <Dropdown
              style={[styles.dropdown]}
              containerStyle={styles.dropdownContainer}
              data={timeOptions}
              maxHeight={100}
              labelField="label"
              valueField="label"
              placeholder={"Select an option"}
              value={operationTime}
              onChange={(item) => {
                setOperationTime(item.value);
              }}
            />
            <ErrorMessage visible={error} error={error} />
          </View>
        )}
      </Formik>
      <Button
        title="Continue"
        color="black"
        textColor="white"
        onPress={() => sendDetails()}
      />
    </AuthScreen>
  );
};

const styles = StyleSheet.create({
  dropdown: {
    borderRadius: 10,
    borderWidth: 0.5,
    height: 50,
    paddingHorizontal: 8,
    marginBottom: "5%",
    marginTop: "2.5%",
    opacity: 1,
    borderColor: "#D3D3D3",
  },
  dropdownContainer: {
    borderBottomEndRadius: 10,
    borderBottomStartRadius: 10,
  },
});

export default CompanyOperations;
