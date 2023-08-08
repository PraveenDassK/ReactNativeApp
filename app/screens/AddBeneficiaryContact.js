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
  ScrollView,
} from "react-native";
import GlobalStyles from "../../GlobalStyles";
import { LinearGradient } from "expo-linear-gradient";

import AuthContext from "../auth/context";
import api from "../api/api_list";
import apiBeneficiaries from "../api/apiBeneficiaries";
import Button from "../components/AppButton";
import { verticalScale } from "../config/scaling";
import { Formik } from "formik";
import * as Yup from "yup";
import { Dropdown } from "react-native-element-dropdown";
import ErrorMessage from "../components/forms/ErrorMessage";
import KeyboardAvoider from "../components/KeyboardAvoider";
import CountdownBar from "../components/CountdownBar";
import { CheckBox } from "@rneui/themed";
import StepProgress from "../components/SteeperCounter";

const validationSchema = Yup.object().shape({
  phoneNumber: Yup.string().matches(
    /^\+?[1-9]\d{1,14}$/,

    "Invalid phone number"
  ),

  emailAddress: Yup.string().email("Invalid email address"),

  // address: Yup.string().max(
  //   100,

  //   "Address must be less than 100 characters"
  // ),
});

const AddBeneficiary = ({ navigation, route }) => {
  const [isManual, setManual] = useState(false);
  const [selectedCard, setSelectedCard] = useState();
  const [arrayData, setArrayData] = useState([]);
  const { darkMode } = useContext(AuthContext);

  const handleSubmit = async ({
    phoneNumber,
    emailAddress,
    postcode,
    postTown,
    address1,
  }) => {
    let requestObj = route.params;
    requestObj.address.postCode = postcode;
    requestObj.emailAddress = emailAddress;
    requestObj.phoneNumber = phoneNumber;
    requestObj.address.addressLine1 =
      selectedCard === "" ? address1 : selectedCard?.address1;
    requestObj.address.addressLine2 = selectedCard
      ? selectedCard?.address2
      : "";
    requestObj.address.postTown =
      selectedCard === "" ? postTown : selectedCard?.city;

    navigation.navigate("AddBeneficiaryRefrence", requestObj);
  };

  const handleAddress = async (postCode) => {
    // const response = await apiLogin.GetAddressByPostCode(postcode)
    //
    // setAddressData(response)

    // Remove this on live

    const dummyAddress = [
      {
        label: "Fake address",
        value: {
          address1: "123 street",
          address2: "456 house",
          area: "Area 5",
          city: "City 6",
          locale: "en_GB",
          postcode: postCode,
        },
      },
    ];
    setArrayData(dummyAddress);
  };

  const items = [
    {
      id: 2,
      label: "Phone number",
      placeholder: "Enter the phone number",
      initialValue: "phoneNumber",
      isManual: true,
    },
    {
      id: 3,
      label: "Email address",
      placeholder: "Enter the email address",
      initialValue: "emailAddress",
      isManual: true,
    },
    {
      id: 4,
      label: "Address1",
      placeholder: "Enter the address line1",
      initialValue: "address1",
      isManual: isManual,
    },
    {
      id: 5,
      label: "City/Town",
      placeholder: "Enter the city or town",
      initialValue: "postTown",
      isManual: isManual,
    },
    {
      id: 6,
      label: "Postcode",
      placeholder: "Enter the postcode",
      initialValue: "postcode",
      isManual: true,
    },
  ];

  return (
    <KeyboardAvoider>
      {/* <CountdownBar currentPage={2} /> */}
      <ScrollView
        style={{
          backgroundColor:
            darkMode === "DARK" ? GlobalStyles.Color.darkTheme_bg : null,
        }}
      >
        <View
          style={{
            height: "100%",
            flex: 1,
            backgroundColor:
              darkMode === "DARK" ? GlobalStyles.Color.darkTheme_bg : null,
          }}
        >
          <StepProgress currentStep={2} />

          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View
              style={{
                flex: 1,
                paddingHorizontal: 20,
                paddingVertical: 24,
                backgroundColor:
                  darkMode === "DARK"
                    ? GlobalStyles.Color.secondaryDarkTheme_bg
                    : GlobalStyles.Color.white,
                marginTop: 27,
                borderTopEndRadius: 20,
                borderTopStartRadius: 20,
              }}
            >
              <Formik
                initialValues={{
                  phoneNumber: " ",
                  emailAddress: " ",
                  postcode: "HA9 0HZ",
                  address1: "",
                  postTown: "",
                }}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
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
                      {items.map((item, index) => (
                        <View key={item.id}>
                          {item.isManual ? (
                            <View
                              key={item.id}
                              style={{
                                width: "90%",
                                marginLeft: "5%",
                                marginBottom: "5%",
                              }}
                            >
                              <Text
                                style={
                                  darkMode === "DARK"
                                    ? styles.darklable
                                    : styles.lable
                                }
                              >
                                {item.label}
                              </Text>
                              <TextInput
                                onBlur={() =>
                                  setFieldTouched(item.initialValue)
                                }
                                onChangeText={handleChange(item.initialValue)}
                                onChange={() => {
                                  if (item.label === "Postcode") {
                                    handleAddress(item.initialValue);
                                  }
                                }}
                                // style={{ fontSize: 24, marginTop: "1%" }}
                                style={
                                  darkMode === "DARK"
                                    ? styles.darkinputBox
                                    : styles.inputBox
                                }
                                placeholder={item.placeholder}
                                placeholderTextColor={
                                  darkMode === "DARK"
                                    ? GlobalStyles.Color.white
                                    : null
                                }
                              />

                              <ErrorMessage
                                error={errors[item.initialValue]}
                                visible={touched[item.initialValue]}
                              />
                            </View>
                          ) : null}
                        </View>
                      ))}
                      {!isManual && (
                        <View
                          style={{
                            width: "90%",
                            marginLeft: "5%",
                            marginBottom: "5%",
                          }}
                        >
                          <Text
                            style={
                              darkMode === "DARK"
                                ? styles.darklable
                                : styles.lable
                            }
                          >
                            {"Address"}
                          </Text>

                          <Dropdown
                            data={arrayData}
                            value={selectedCard}
                            labelField="label"
                            valueField="value"
                            // defalutValue="Mr"
                            onChange={(item) => {
                              setSelectedCard(item.value);
                              // handleChange(item.value);
                            }}
                            style={
                              darkMode === "DARK"
                                ? styles.darkdropdown
                                : styles.dropdown
                            }
                            containerStyle={styles.containerStyle}
                            // renderRightIcon={() => (
                            //   <AntDesign name="checkcircle" size={24} color="green" />
                            // )}
                            // renderItem={renderItem}
                            placeholder="Select Address"
                            autoScroll={false}
                            placeholderStyle={{
                              color:
                                darkMode === "DARK"
                                  ? GlobalStyles.Color.white
                                  : null,
                            }}
                            selectedTextStyle={{
                              color:
                                darkMode === "DARK"
                                  ? GlobalStyles.Color.white
                                  : null,
                            }}
                          />
                        </View>
                      )}
                      <View style={{ marginVertical: 5 }}>
                        {!isManual ? (
                          <Text
                            onPress={() => {
                              setManual(true);
                              setSelectedCard("");
                            }}
                            style={styles.manual}
                          >
                            Enter manually
                          </Text>
                        ) : (
                          <Text
                            onPress={() => setManual(false)}
                            style={styles.manual}
                          >
                            Enter PostCode
                          </Text>
                        )}
                      </View>
                    </View>
                    <View style={[{ flex: 1, justifyContent: "flex-end" }]}>
                      <View style={styles.buttonContainer}>
                        <TouchableOpacity onPress={handleSubmit}>
                          <LinearGradient
                            colors={
                              darkMode === "DARK"
                                ? ["#178BFF", "#0101FD"]
                                : ["#212529", "#3A3A3A"]
                            }
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 0 }}
                            style={
                              darkMode === "DARK"
                                ? styles.darkbuttonPayNew
                                : styles.buttonPayNew
                            }
                          >
                            <Text style={styles.buttonPayNewText}>
                              Continue
                            </Text>
                          </LinearGradient>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </>
                )}
              </Formik>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </ScrollView>
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
  inputBox: {
    width: "100%",
    height: 46,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: GlobalStyles.Color.borderColor,
    paddingHorizontal: 10,
    marginVertical: 5,
    paddingVertical: 14,
    fontSize: 14,
    color: GlobalStyles.Color.darkGray,
    marginTop: 10,
  },
  darkinputBox: {
    width: "100%",
    height: 46,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: GlobalStyles.Color.secondaryDarkTheme_bg,
    paddingHorizontal: 20,
    paddingVertical: 14,
    fontSize: 14,
    color: GlobalStyles.Color.darkGray,
    backgroundColor: GlobalStyles.Color.darkTheme_bg,
    marginTop: 10,
  },
  manual: {
    color: GlobalStyles.Color.skyblue,
    fontFamily: "Montserrat-Regular",
    fontSize: 14,
    textAlign: "right",
    paddingRight: 20,
    marginVertical: "3%",
  },
  containerStyle: {
    borderBottomEndRadius: 10,
    borderBottomStartRadius: 10,
    // backgroundColor:"red",
    // color:"white",
  },
  dropdown: {
    width: "100%",
    height: 46,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: GlobalStyles.Color.borderColor,
    paddingHorizontal: 10,
    marginVertical: 5,
    paddingVertical: 14,
    fontSize: 14,
    color: GlobalStyles.Color.darkGray,
    marginTop: 10,
  },
  darkdropdown: {
    marginTop: 10,
    width: "100%",
    height: 46,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: GlobalStyles.Color.secondaryDarkTheme_bg,
    paddingHorizontal: 10,
    marginVertical: 5,
    paddingVertical: 14,
    fontSize: 14,
    color: GlobalStyles.Color.darkGray,
    backgroundColor: GlobalStyles.Color.darkTheme_bg,
  },
  lable: {
    color: GlobalStyles.Color.black,
    fontFamily: "Montserrat",
    fontSize: 14,
  },
  darklable: {
    color: GlobalStyles.Color.white,
    fontFamily: "Montserrat",
    fontSize: 14,
  },
  buttonContainer: {
    width: "100%",
    marginTop: "15%",
  },
  buttonPayNew: {
    borderRadius: 10,
    // backgroundColor: GlobalStyles.Color.lightBlack,
    height: 47,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
  },
  darkbuttonPayNew: {
    borderRadius: 10,
    // backgroundColor: GlobalStyles.Color.gray_500,
    height: 47,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
  },
  buttonPayNewText: {
    color: GlobalStyles.Color.white,
    fontFamily: "Montserrat-Medium",
    fontSize: 14,
    // marginLeft: 6,
  },
});

export default AddBeneficiary;
