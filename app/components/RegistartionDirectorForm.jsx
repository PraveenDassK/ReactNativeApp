import React, { useState, useRef } from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  Text,
  TextInput,
  ScrollView,
  Image,
  Pressable,
  useWindowDimensions,
  Dimensions,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { CheckBox } from "@rneui/themed";
import Button from "./AppButton";

import { Formik } from "formik";
import * as Yup from "yup";
import colors from "../config/colors";
import ErrorMessage from "../components/forms/ErrorMessage";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Dropdown } from "react-native-element-dropdown";
import { CountryPicker } from "react-native-country-codes-picker";
import PhoneInput from "react-native-phone-number-input";
import GetPostCode from "../components/RegistrationPostCode";

const RegistartionDirectorForm = ({ back = true }) => {
  const [date, setDate] = useState(new Date());
  const [birthdate, setBirthDate] = useState(new Date());
  const [birthShow, setBirthShow] = useState(false);
  const [title, setTitle] = useState("Mr");
  const [displaymode, setMode] = useState("date");
  const [isDisplayDate, setDateShow] = useState(false);
  const [show, setShow] = useState(false);
  const [countryCode, setCountryCode] = useState();
  const [manualView, setManualView] = useState(false);
  const [isChecked, setChecked] = useState(false);
  const [formCheck, setIsFormCheck] = useState(false);
  const [postCode, setPostCode] = useState("");
  const phoneInput = useRef();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [formattedValue, setFormattedValue] = useState("");

  const handleOnchange = (values) => {
    console.log(values, "onchange");
  };
  const onChange = (event, selectedDate) => {
    // const currentDate = selectedDate || date;
    // setDate(currentDate);
    const currentDate = selectedDate;
    setDate(currentDate);
    setDateShow(false);
  };
  const onDobChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setBirthDate(currentDate);
    setBirthShow(false)
  };
  console.log(countryCode, "this is countryCode");
  const data = [
    { label: "Mr", value: "Mr" },
    { label: "Mrs", value: "Mrs" },
    { label: "Miss", value: "Miss" },
    { label: "Ms", value: "Ms" },
    { label: "Dr", value: "Dr" },
    { label: "Prof", value: "Prof" },
    { label: "Rev", value: "Rev" },
    { label: "Capt", value: "Capt" },
    { label: "Sir", value: "Sir" },
    { label: "Madam", value: "Madam" },

    { label: "Lord", value: "Lord" },

    { label: "Lady", value: "Lady" },
    { label: "Esq", value: "Esq" },
  ];

  return (
    <ScrollView>
      <View style={{ backgroundColor: "#ffffff" }}>
        <View
          style={{
            display: "flex",
            height: 100,
            // backgroundColor: "#ffffff",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {back && (
            <TouchableOpacity
              onPress={() => handleBack()}
              style={{
                zIndex: 100,
                position: "absolute",
                top: 20,
                left: 10,
                backgroundColor: colors.light,
                height: 40,
                width: 40,
                borderRadius: 20,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <MaterialCommunityIcons name="keyboard-backspace" size={30} />
            </TouchableOpacity>
          )}
        </View>
        <View
          style={{
            // display: "flex",
            // height: 100,
            backgroundColor: "#F6F6F6",
            padding: 25,
            justifyContent: "center",
            alignItems: "center",
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
          }}
        >
          <Text style={styles.header}>Directors or Partners</Text>
        </View>
        {/* <ScrollView> */}
        <View
          style={{
            display: "flex",
            // height: 100,
            width: "100%",
            flexDirection: "column",
            backgroundColor: "#FFFFFF",
            alignItems: "center",
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            paddingTop: 30,
            paddingHorizontal: 10,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              color: "#212529",
              fontSize: 16,
              letterSpacing: 0.4,
            }}
          >
            Carbonyte would like to know details of any {"\n"} Associates -
            usually the Directors or Partners
          </Text>
          <View style={{ width: "100%" }}>
            <Formik
              initialValues={{
                title: "",
                amount: "",
                toAccount: "",
                fromAccount: "",
                timePeriod: "",
              }}
              //   onSubmit={handleSubmit}
              //   validationSchema={validationSchema}
            >
              <View style={{ width: "100%" }}>
                <View
                  style={{
                    width: "100%",
                    paddingHorizontal: 10,
                    marginTop: 10,
                  }}
                >
                  <Text style={styles.textStyle}>First Name</Text>
                  <View
                    style={{
                      width: "100%",
                      display: "flex",
                      flexDirection: "row",
                      gap: 2,
                    }}
                  >
                    <Dropdown
                      data={data}
                      value={title}
                      labelField="label"
                      valueField="value"
                      defalutValue="Mr"
                      onChange={(item) => {
                        console.log(item, "thsis is item selected");
                        setTitle(item.value);
                      }}
                      style={styles.dropdown}
                      containerStyle={styles.containerStyle}
                    />
                    <TextInput
                      style={styles.firtNameText}
                      placeholder="Enter the FirstName"
                    />
                  </View>
                </View>
                <View
                  style={{
                    width: "100%",
                    paddingHorizontal: 10,
                    marginTop: 10,
                  }}
                >
                  <Text style={styles.textStyle}>Last Name</Text>
                  <TextInput
                    style={styles.textInuput}
                    placeholder="Enter the LastName"
                  />
                </View>
                <View
                  style={{
                    width: "100%",
                    paddingHorizontal: 10,
                    marginTop: 10,
                  }}
                >
                  <Text style={styles.textStyle}>Email Address</Text>
                  <TextInput
                    style={styles.textInuput}
                    placeholder="Enter the Email Address"
                  />
                </View>
                <View
                  style={{
                    width: "100%",
                    paddingHorizontal: 10,
                    marginTop: 10,
                  }}
                >
                  <Text style={styles.textStyle}>Phone Number</Text>
                  {/* <TextInput
                    style={styles.textInuput}
                    placeholder="Enter the Phone Number"
                  /> */}
                  <PhoneInput
                    ref={phoneInput}
                    defaultValue={phoneNumber}
                    defaultCode="IN"
                    onChangeFormattedText={(text) => {
                      setPhoneNumber(text);
                    }}
                    withDarkTheme
                    withShadow
                    autoFocus
                    containerStyle={styles.textPhoneInuput}
                  />
                </View>
                {manualView && (
                  <View>
                    <View
                      style={{
                        width: "100%",
                        paddingHorizontal: 10,
                        marginTop: 10,
                      }}
                    >
                      <Text style={styles.textStyle}>
                        Building Name or Number
                      </Text>
                      <TextInput
                        style={styles.textInuput}
                        placeholder="Enter Building Name or Number"
                      />
                    </View>
                    <View
                      style={{
                        width: "100%",
                        paddingHorizontal: 10,
                        marginTop: 10,
                      }}
                    >
                      <Text style={styles.textStyle}>Street</Text>
                      <TextInput
                        style={styles.textInuput}
                        placeholder="Enter Name of the street"
                      />
                    </View>
                    <View
                      style={{
                        width: "100%",
                        paddingHorizontal: 10,
                        marginTop: 10,
                      }}
                    >
                      <Text style={styles.textStyle}>City</Text>
                      <TextInput
                        style={styles.textInuput}
                        placeholder="Enter the City"
                      />
                    </View>
                    <View
                      style={{
                        width: "100%",
                        paddingHorizontal: 10,
                        marginTop: 10,
                      }}
                    >
                      <Text style={styles.textStyle}>Country</Text>
                      <TextInput
                        style={styles.textInuput}
                        placeholder="Enter the Country"
                      />
                    </View>
                  </View>
                )}
                <View style={{ width: "100%", padding: 10, marginTop: 10 }}>
                  <Text style={styles.textStyle}>Post Code</Text>
                  <TextInput
                    style={styles.textInuput}
                    placeholder="Enter the PostCode"
                    onChangeText={(event) => {
                      console.log(event, "this ois post");
                      setPostCode(event);
                    }}
                  />
                  {manualView && (
                    <Text
                      style={styles.enterManually}
                      onPress={() => setManualView(false)}
                    >
                      Enter Postcode
                    </Text>
                  )}
                </View>
                {!manualView && (
                  <View style={{ width: "100%", padding: 10, marginTop: 10 }}>
                    <Text style={styles.textStyle}>Address</Text>
                    <Dropdown
                      data={data}
                      value={title}
                      labelField="label"
                      valueField="value"
                      defalutValue="Mr"
                      onChange={(item) => {
                        console.log(item, "thsis is item selected");
                        setTitle(item.value);
                      }}
                      style={styles.addressDropdown}
                      containerStyle={styles.containerStyle}
                    />
                    <Text
                      style={styles.enterManually}
                      onPress={() => setManualView(true)}
                    >
                      Enter Manually
                    </Text>
                  </View>
                )}
                <View style={{ width: "100%", padding: 10, marginTop: 10 }}>
                  <Text style={styles.textStyle}>Role</Text>
                  <Dropdown
                    data={data}
                    value={title}
                    labelField="label"
                    valueField="value"
                    defalutValue="Mr"
                    onChange={(item) => {
                      console.log(item, "thsis is item selected");
                      setTitle(item.value);
                    }}
                    style={styles.addressDropdown}
                    containerStyle={styles.containerStyle}
                  />
                </View>
                <View style={{ width: "100%", padding: 10, marginTop: 10 }}>
                  <Text style={styles.textStyle}>Date of Birth </Text>
                  <TouchableOpacity
                    onPress={() => setBirthShow(true)}
                    style={styles.textCountryInuput}
                  >
                    {birthdate && (
                      <Text
                        style={{
                          color: "#212529",
                          fontSize: 22,
                          fontWeight: "bold",
                        }}
                      >
                        {`${birthdate.toLocaleDateString("en-US")}`}
                      </Text>
                    )}
                  </TouchableOpacity>
                  {birthShow && (
                    <DateTimePicker
                      testID="dateTimePicker"
                      value={birthdate}
                      mode={"date"}
                      is24Hour={true}
                      display="spinner"
                      onChange={onDobChange}
                    />
                  )}
                </View>

                <View style={{ width: "100%", padding: 10, marginTop: 10 }}>
                  <Text style={styles.textStyle} onPress={() => setShow(true)}>
                    Country of residence
                  </Text>
                  <TouchableOpacity
                    onPress={() => setShow(true)}
                    style={styles.textCountryInuput}
                  >
                    {countryCode?.dial_code && (
                      <Text
                        style={{
                          color: "#212529",
                          fontSize: 22,
                          fontWeight: "bold",
                        }}
                      >
                        {`${countryCode?.dial_code}   ${countryCode?.name?.en}`}
                      </Text>
                    )}
                    {!countryCode?.dial_code && (
                      <Text
                        style={{
                          color: "#999999",
                          fontSize: 20,
                        }}
                      >
                        Select the Country of residence{" "}
                      </Text>
                    )}
                  </TouchableOpacity>
                  <CountryPicker
                    show={show}
                    // when picker button press you will get the country object with dial code
                    pickerButtonOnPress={(item) => {
                      console.log(item.name.en, "this is country");
                      setCountryCode(item);
                      setShow(false);
                    }}
                  />
                </View>
                <View style={{ width: "100%", padding: 10, marginTop: 10 }}>
                  <Text style={styles.textStyle}>Nationality</Text>
                  <Dropdown
                    data={data}
                    value={title}
                    labelField="label"
                    valueField="value"
                    placeholder="Please enter the Nationality"
                    onChange={(item) => {
                      console.log(item, "thsis is item selected");
                      setTitle(item.value);
                    }}
                    style={styles.addressDropdown}
                    containerStyle={styles.containerStyle}
                  />
                </View>

                <View style={{ width: "100%", padding: 10, marginTop: 10 }}>
                  <Text style={styles.textStyle}>Appointed on </Text>
                  <TouchableOpacity
                    onPress={() => setDateShow(true)}
                    style={styles.textCountryInuput}
                  >
                    {date && (
                      <Text
                        style={{
                          color: "#212529",
                          fontSize: 22,
                          fontWeight: "bold",
                        }}
                      >
                        {`${date.toLocaleDateString("en-US")}`}
                      </Text>
                    )}
                  </TouchableOpacity>
                  {isDisplayDate && (
                    <DateTimePicker
                      testID="dateTimePicker"
                      value={date}
                      mode={"date"}
                      is24Hour={true}
                      display="spinner"
                      onChange={onChange}
                    />
                  )}
                </View>
                <View style={{ width: "100%", padding: 10, marginTop: 10 }}>
                  <Text style={styles.textStyle}>Occupation</Text>
                  <Dropdown
                    data={data}
                    value={title}
                    labelField="label"
                    valueField="value"
                    placeholder="Please enter the Occupation"
                    onChange={(item) => {
                      console.log(item, "thsis is item selected");
                      setTitle(item.value);
                    }}
                    style={styles.addressDropdown}
                    containerStyle={styles.containerStyle}
                  />
                </View>
                <View>
                  <CheckBox
                    title="Persons with significant control"
                    checkedIcon="check-square-o"
                    uncheckedIcon="square-o"
                    checkedColor="black"
                    checked={isChecked}
                    onPress={() => setChecked(!isChecked)}
                    textStyle={{ fontSize: 16, color: "#212529" }}
                  />
                </View>
                {isChecked && (
                  <View style={{ width: "100%", padding: 20, marginTop: 10 }}>
                    <Text style={{ color: "#212529", fontSize: 20 }}>
                      Nature of control
                    </Text>
                    <View style={styles.bottomContainer}>
                      <View style={styles.bottomContainerInside}>
                        <View>
                          <Text
                            style={{
                              color: "#0101FD",
                              fontSize: 16,
                              fontWeight: "bold",
                            }}
                          >
                            Ownership of shares
                          </Text>
                        </View>
                        <View style={styles.percentageContainer}>
                          <TextInput style={styles.textPercentageInuput} />
                          <Text
                            style={{
                              color: "#0101FD",
                              fontSize: 16,
                              fontWeight: "bold",
                            }}
                          >
                            %
                          </Text>
                        </View>
                      </View>
                      <View style={styles.bottomContainerInside}>
                        <View>
                          <Text
                            style={{
                              color: "#0101FD",
                              fontSize: 16,
                              fontWeight: "bold",
                            }}
                          >
                            Ownership of voting rights
                          </Text>
                        </View>
                        <View style={styles.percentageContainer}>
                          <TextInput style={styles.textPercentageInuput} />
                          <Text
                            style={{
                              color: "#0101FD",
                              fontSize: 16,
                              fontWeight: "bold",
                            }}
                          >
                            %
                          </Text>
                        </View>
                      </View>
                      <View style={styles.bottomContainerInside}>
                        <View>
                          <Text
                            style={{
                              color: "#0101FD",
                              fontSize: 16,
                              fontWeight: "bold",
                            }}
                          >
                            Right to appoint & remove directors
                          </Text>
                        </View>
                        <View style={styles.percentageContainer}>
                          <CheckBox
                            checkedIcon="check-square-o"
                            uncheckedIcon="square-o"
                            checkedColor="#0101FD"
                            checked={formCheck}
                            onPress={() => setIsFormCheck(!formCheck)}
                            style={{ width: 40, height: 40 }}
                          />
                        </View>
                      </View>
                    </View>
                  </View>
                )}
                <View style={{ width: "100%", padding: 10, marginTop: 10 }}>
                  <Button
                    title="Continue"
                    textColor="white"
                    color="black"
                    style={styles.buttonColor}
                    onPress={() => console.log("Personal")}
                  />
                </View>
              </View>
            </Formik>
          </View>
        </View>
        {/* </ScrollView> */}
      </View>
    </ScrollView>
  );
};

export default RegistartionDirectorForm;

const styles = StyleSheet.create({
  header: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#212529",
  },
  textInuput: {
    borderColor: "#EBEBEB",
    borderRadius: 5,
    height: 70,
    width: "100%",
    padding: 5,
    paddingLeft: 20,
    borderWidth: 4,
    marginTop: 10,
    fontSize: 20,
  },
  textCountryInuput: {
    borderColor: "#EBEBEB",
    borderRadius: 5,
    height: 65,
    width: "100%",
    paddingHorizontal: 10,
    paddingTop: 15,
    borderWidth: 4,
    marginTop: 10,
    fontSize: 20,
  },
  firtNameText: {
    borderColor: "#EBEBEB",
    borderRadius: 5,
    height: 70,
    width: "70%",
    padding: 5,
    paddingLeft: 20,
    borderWidth: 4,
    marginTop: 10,
    fontSize: 20,
  },
  textStyle: {
    color: "#000000",
    fontSize: 16,
    fontWeight: "bold",
  },
  dropdown: {
    borderColor: "#EBEBEB",
    borderRadius: 5,
    height: 70,
    width: "30%",
    padding: 1,
    fontSize: 16,

    paddingLeft: 20,
    borderWidth: 4,
    marginBottom: "5%",
    marginTop: "2.5%",
    opacity: 1,
  },
  dropdownContainer: {
    borderBottomEndRadius: 10,
    borderBottomStartRadius: 10,
  },
  containerStyle: {
    borderBottomEndRadius: 10,
    borderBottomStartRadius: 10,
    // backgroundColor:"red",
    // color:"white",
  },
  addressDropdown: {
    borderColor: "#EBEBEB",
    borderRadius: 5,
    height: 70,
    width: "100%",
    padding: 5,
    fontSize: 16,

    paddingLeft: 20,
    borderWidth: 4,
    marginBottom: "5%",
    marginTop: "2.5%",
    opacity: 1,
  },
  enterManually: {
    textAlign: "right",
    color: "#0101FD",
    fontWeight: "bold",
  },
  datePicker: {
    width: "100%",
    height: 70,
  },
  bottomContainer: {
    borderColor: "#E8E8E8",
    borderRadius: 10,
    width: "100%",
    borderWidth: 2,
    marginHorizontal: 5,
    paddingHorizontal: 5,
    marginVertical: 20,
  },
  bottomContainerInside: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 5,
    paddingVertical: 10,
  },
  percentageContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 4,
    alignItems: "center",
  },
  textPercentageInuput: {
    borderColor: "#EBEBEB",
    borderRadius: 5,
    height: 40,
    color: "#0101FD",
    width: 50,
    padding: 5,
    borderWidth: 4,
    fontSize: 20,
  },
  textPhoneInuput: {
    borderColor: "#EBEBEB",
    borderRadius: 5,
    height: 70,
    width: "100%",
    borderWidth: 4,
    marginTop: 10,
    fontSize: 20,
    elevation: 0,
  },
});
