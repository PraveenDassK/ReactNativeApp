import React, {useState} from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import DateTimePicker from "@react-native-community/datetimepicker";
import moment from "moment";
import { Dropdown } from "react-native-element-dropdown";

import ErrorMessage from "./forms/ErrorMessage";
import Button from "./AppButton";
import AuthScreen from "./AuthScreen";
import { horizontalScale } from "../config/scaling";

const validationSchema = Yup.object().shape({
  percentage: Yup.string().required().min(1).max(11).label("First name"),
  lastName: Yup.string().required().min(1).max(11).label("Last name"),
  email: Yup.string().required().email().label("Email"),
  phoneNumber: Yup.string().required().min(10).max(10).label("Phone number"),
});

const RegistrationCompanyDBCDetails2 = ({ AddAddress}) => {
    const [show, setShow] = useState(false);
    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState("date");
    const [addressData, setAddressData] = useState([]);
    const [address, setAddress] = useState(null);


  const showDatepicker = () => {
    showMode("date");
  };
  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const sendData = () => {
    AddAddress(address);
  };

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);
  };
  const handleSubmit = ({ percentage, postcode }) => {
    console.log(percentage, lastName);
     // Remove this on live
     const dummyAddress = [{
        label: "Fake address",
        value:{
            address1: "123 street",
            address2: "456 house",
            area: "Area 5",
            city: "City 6",
            locale:"en_GB",
            postcode:postcode
        }
    }]
    setAddressData(dummyAddress)
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <AuthScreen
        title={"Details 2"}
        img="bear"
        width="40%"
        handleBack={() => console.log("here")}
      >
        <Formik
          initialValues={{ percentage: "", postcode: "" }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          {({
            handleChange,
            handleSubmit,
            setFieldTouched,
            errors,
            touched,
          }) => (
            <View
              style={[
                styles.component1981,
                styles.mt14,
                { marginLeft: horizontalScale(10) },
              ]}
            >
              <Text>Percentage ownership</Text>
              <TextInput
                placeholder="%"
                placeholderTextColor="#D3D3D3"
                keyboardType="Text"
                onBlur={() => setFieldTouched("percentage")}
                onChangeText={handleChange("percentage")}
                style={[
                  styles.component1981Child,
                  styles.childBorder,
                  { padding: 10 },
                ]}
              />
              <ErrorMessage
                error={errors.percentage}
                visible={touched.percentage}
              />
              <Text>Date of Birth</Text>

              <View style={styles.container}>
                <View style={styles.buttonContainer}>
                  <Button
                  textColor="black"
                  color="white"
                    onPress={showDatepicker}
                    title={moment(date).format("MMM DD YYYY")}
                  />
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

              <Text>Enter your postcode</Text>
            <TextInput
              autoCapitalize="none"
              textContentType="postcode"
              keyboardType="postcode"
              onBlur={() => setFieldTouched("postcode")}
              onChangeText={handleChange("postcode")}
              style={[styles.childBorder, { padding: 10 }]}
            />
            <Button
              title="search"
              textColor="black"
              color="white"
              onPress={handleSubmit}
            />
            
            
            {addressData?.length > 0 ? (
        <View>
          <Dropdown
            style={[styles.dropdown]}
            containerStyle={styles.dropdownContainer}
            data={addressData}
            maxHeight={100}
            labelField="label"
            valueField="value"
            placeholder={"Search your address"}
            value={address?.address1}
            onChange={(item) => {
              setAddress(item.value);
            }}
          />
          {address ? (
            <Button
              title="Add"
              textColor="white"
              color="black"
              onPress={() => sendData()}
            />
          ) : null}
        </View>
      ) : (
        <View />
      )}
              <Button
                title="continue"
                textColor="white"
                color="black"
                onPress={handleSubmit}
              />
            </View>
          )}
        </Formik>
      </AuthScreen>
    </TouchableWithoutFeedback>
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
export default RegistrationCompanyDBCDetails2;
