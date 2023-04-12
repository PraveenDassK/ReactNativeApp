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
import Screen from "./Screen";
import AuthContext from "../auth/context";
import GlobalStyles from "../../GlobalStyles";
import apiLoginRegister from "../api/apiLogin";
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

const CompanyOperations = ({ SaveDetails, setScreenToShow }) => {
  const [isNewOwnership, setIsNewOwnership] = useState(false);
  const [isResumingTrading, setIsResumingTrading] = useState(false);
  const [isZeroToSixMonths, setIsZeroToSixMonths] = useState(false);
  const [isSixMonthsToOneYear, setIsSixMonthsToOneYear] = useState(false);
  const [isOneToTwoYears, setIsOneToTwoYears] = useState(false);
  const [isTwoToFiveYears, setIsTwoToFiveYears] = useState(false);
  const [isFiveToTenYears, setIsFiveToTenYears] = useState(false);
  const [isTenPlusYears, setIsTenPlusYears] = useState(false);

  const [operationTime, setOperationTime] = useState("");
  const timeOptions = [
    { label: "New ownership" },
    { label: "Resuming trading" },
    { label: "0 - 6 Months" },
    { label: "6 Months - 1 Year" },
    { label: "1 - 2 Years" },
    { label: "2 - 5 Years" },
    { label: "5 - 10 Years" },
    { label: "10+ Years" },
  ];

  /**
   * @dev This sends the String of the item back
   */
  const sendDetails = () => {
    SaveDetails(operationTime, "CompanyOperations");
  };

  const handleBack = () => {
    console.log("!");
    setScreenToShow("CompanyIncome");
  };

  return (
    <AuthScreen
      img="lion"
      title="How long have you been operating?"
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
              value={timeOptions}
              onChange={(item) => {
                setOperationTime(item.value);
              }}
            />
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
