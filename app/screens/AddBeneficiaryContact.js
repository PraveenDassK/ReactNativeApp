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
  const handleSubmit = async ({
    phoneNumber,
    emailAddress,
    postcode,
    postTown,
    address1,
  }) => {
    console.log("this is console", postTown, address1);

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

    console.log(requestObj, "this is requestObj");
    console.log(phoneNumber, emailAddress, postcode, postTown, address1);

    navigation.navigate("AddBeneficiaryRefrence", requestObj);
  };

  const handleAddress = async (postCode) => {
    // const response = await apiLogin.GetAddressByPostCode(postcode)
    // console.log(response)
    // setAddressData(response)

    // Remove this on live
    console.log(postCode, "this is postcode");
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

  console.log(selectedCard, "this is addree");
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
      <StepProgress currentStep={2}/>

      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View
          style={{
            flex: 1,
            paddingHorizontal: 20,
            paddingVertical: 24,
            backgroundColor: GlobalStyles.Color.white,
            marginTop: 27,
            borderRadius: 20,
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
                          <Text style={styles.lable}>{item.label}</Text>
                          <TextInput
                            onBlur={() => setFieldTouched(item.initialValue)}
                            onChangeText={handleChange(item.initialValue)}
                            onChange={() => {
                              if (item.label === "Postcode") {
                                handleAddress(item.initialValue);
                              }
                            }}
                            // style={{ fontSize: 24, marginTop: "1%" }}
                            style={styles.inputBox}
                            placeholder={item.placeholder}
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
                      <Text style={styles.lable}>{"Address"}</Text>

                      <Dropdown
                        data={arrayData}
                        value={selectedCard}
                        labelField="label"
                        valueField="value"
                        // defalutValue="Mr"
                        onChange={(item) => {
                          console.log(item, "thsis is item selected");
                          setSelectedCard(item.value);
                          // handleChange(item.value);
                        }}
                        style={styles.dropdown}
                        containerStyle={styles.containerStyle}
                        // renderRightIcon={() => (
                        //   <AntDesign name="checkcircle" size={24} color="green" />
                        // )}
                        // renderItem={renderItem}
                        placeholder="Select Address"
                        autoScroll={false}
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
    borderColor:  GlobalStyles.Color.borderColor,
    paddingHorizontal: 10,
    marginVertical: 5,
    paddingVertical: 14,
    fontSize: 14,
    color:  GlobalStyles.Color.darkGray,
  },
  lable: {
    color: GlobalStyles.Color.black,
    fontFamily: "Montserrat",
    fontSize: 14,
  },
});

export default AddBeneficiary;
