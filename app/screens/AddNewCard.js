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
  ActivityIndicator,
} from "react-native";
import React, { useState, useContext, useEffect, useRef } from "react";
import StepProgress from "../components/SteeperCounter";
import { Formik } from "formik";
import * as Yup from "yup";
import Button from "../components/AppButton";
import ErrorMessage from "../components/forms/ErrorMessage";
import { CheckBox } from "@rneui/themed";
import GlobalStyles from "../../GlobalStyles";
import KeyboardAvoider from "../components/KeyboardAvoider";
import { Dropdown } from "react-native-element-dropdown";
import AuthContext from "../auth/context";
import apiVirtualCard from "../api/apiVirtualCard";
import Tagline from "../components/Tagline";
import api_list from "../api/api_list";
import PinModal from "../components/PinModal";

const AddNewCard = ({ navigation, route }) => {
  const [selectedCard, setSelectedCard] = useState();
  const { accountID, userID, carbonyteID, cardID, customerDetails } =
    useContext(AuthContext);
  const [selectedAddress, setSelectedAddress] = useState();
  const ref = useRef();
  const [addressData, setAddressData] = useState([]);
  const [data, setData] = useState([]);
  const [postCodeforAddresses, setPostCodeforAddresses] = useState();
  const [apiAccountId, setApiAccountId] = useState();
  const [apiCustomerid, setApiCustomerid] = useState();
  const [showPinModal, setShowPinModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  //setting obj for virtual Card api
  const [requestObj, setRequestob] = useState({
    embossing: {
      additionalField1: "",
      additionalField2: "",
      additionalField3: "",
      additionalField4: "",
      additionalField5: "",
      companyName: "",
      externalLayoutCode: "",
      firstName: "Praveen",
      lastName: "Dass",
      manufacturer: "",
    },
    encryptedData: "",
    expiration: {
      month: 0,
      year: 0,
    },
    pinStatus: "",
    productCode: "",
    segment: "",
  });
  //setting obj for physical Card api

  const [physicalCardObj, setPhysicalCardObj] = useState({
    cardAddress: {
      address1: "",
      address2: "",
      address3: "",
      address4: "",
      city: "",
      country: "",
      region: "",
      zipCode: "",
    },
    embossing: {
      additionalField1: "",
      additionalField2: "",
      additionalField3: "",
      additionalField4: "",
      additionalField5: "",
      companyName: "",
      externalLayoutCode: "",
      firstName: "",
      lastName: "",
      manufacturer: "",
    },
    encryptedData: "",
    expiration: {
      month: 0,
      year: 0,
    },
    pinAddress: {
      address1: "",
      address2: "",
      address3: "",
      address4: "",
      city: "",
      country: "",
      region: "",
      zipCode: "",
    },
    pinStatus: "",
    productCode: "",
    segment: "",
  });
  //getting card category from route

  const cardCategory = route.params;
  console.log(cardCategory, "this is a card category");

  //validation for firstName and lastName
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
  });

  // to check remove post code from array of input fields
  // useEffect(() => {
  //   if (cardCategory === "virtual") {
  //     items.pop();
  //     setData(items);
  //   } else {
  //     setData(items);
  //   }
  // }, []);
  //loading data to get EnfuseAccountId and EnfuseCustomerId
  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const response = await api_list.GetCustomerDetailsForCard(customerDetails);
    const listedAccount = response?.data?.details?.accountDetails;
    console.log(accountID, "this is accountId");
    const filterAccount = listedAccount.filter(
      (eachValue, index) => eachValue?.accountId === accountID
    );
    console.log(filterAccount?.[0]?.enfuceAccountId, "this enfuse account Id ");
    setApiAccountId(filterAccount?.[0]?.enfuceAccountId);
    console.log(
      response?.data?.details?.enfuceCustomerId,
      "this is enfuseCustomerId"
    );
    setApiCustomerid(response?.data?.details?.enfuceCustomerId);
  };
  // array for input fields
  const items = [
    {
      id: 1,
      label: "First name",
      placeholder: "Enter your name",
      initialValue: "firstName",
    },
    {
      id: 2,
      label: "Last name",
      placeholder: "Enter your name",
      initialValue: "lastName",
    },
    // {
    //   id: 3,
    //   label: "Postcode",
    //   placeholder: "Enter the postcode",
    //   initialValue: "postcode",
    // },
  ];

  // form submit to set req Obj
  const handleSubmit = async ({ firstName, lastName, postcode }) => {
    // handleAddress(postcode);
    console.log(
      firstName,
      lastName,
      selectedCard,
      postcode,
      selectedAddress,
      "this is data"
    );
    requestObj.embossing.firstName = firstName;
    requestObj.embossing.lastName = lastName;
    physicalCardObj.embossing.firstName = firstName;
    physicalCardObj.embossing.lastName = lastName;
    physicalCardObj.cardAddress.address1 = selectedAddress?.address1;
    physicalCardObj.cardAddress.address2 = selectedAddress?.address2;
    physicalCardObj.cardAddress.city = selectedAddress?.city;
    physicalCardObj.cardAddress.zipCode = selectedAddress?.postcode;
    physicalCardObj.cardAddress.region = selectedAddress?.area;
    physicalCardObj.cardAddress.country = selectedAddress?.country;
    setShowPinModal(true);
  };

  // after successful Pin enter
  const handleSuccess = async () => {
    setShowPinModal(false);
    setIsLoading(true);
    console.log(requestObj, "This is from api after pin");
    console.log(physicalCardObj, "this is physical obj");
    if (cardCategory === "virtual") {
      let response = await apiVirtualCard.getNewVirtualCard(
        apiCustomerid,
        apiAccountId,
        selectedCard,
        requestObj
      );
      if (response?.data?.status === 201) {
        alert("Your new card has been made successfully");

        navigation.navigate("MyCards");
      } else {
        alert(response?.data?.message);
        setIsLoading(false);
      }
    } else {
      let response = await apiVirtualCard.getNewPhysicalCard(
        apiCustomerid,
        apiAccountId,
        selectedCard,
        physicalCardObj
      );
      if (response?.data?.status === 201) {
        alert("Your new card has been ordered  successfully");
        console.log(response?.data, "this is a new physical card");

        navigation.navigate("MyCards");
      } else {
        console.log(response, "this is error");
        alert(response?.data?.message);
        setIsLoading(false);
      }
    }
  };

  // to show the pin modal
  if (showPinModal) {
    return (
      <View style={styles.mainContainer}>
        {/* <RecentTransactions
        amount={10}
      /> */}
        {showPinModal ? (
          <PinModal title="Enter your PIN" success={() => handleSuccess()} />
        ) : null}
      </View>
    );
  }
  // to show the loading on api calls

  if (isLoading) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <ActivityIndicator size="large" color="black" />
      </View>
    );
  }
  //array ti get cardRole category
  const arrayData = [
    {
      label: "Main",
      value: "Main",
    },
    {
      label: "Supplementary",
      value: "Supplementary",
    },
  ];

  //getting address from postcode
  const handleAddress = async (postcode) => {
    // const response = await apiLogin.GetAddressByPostCode(postcode)
    // console.log(response)
    // setAddressData(response)

    // Remove this on live

    console.log(postcode, "this is postcode");

    const dummyAddress = [
      {
        label: "Fake address",
        value: {
          address1: "123 street",
          address2: "456 house",
          area: "Area 5",
          city: "City 6",
          locale: "en_GB",
          postcode: postcode,
          country: "GBR",
        },
      },
    ];
    setAddressData(dummyAddress);
  };

  return (
    <KeyboardAvoider>
      {/* <StepProgress currentStep={1} /> */}

      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View
          style={{
            flex: 1,
            paddingVertical: 24,
            backgroundColor: GlobalStyles.Color.white,
            marginTop: 27,
            borderRadius: 20,
          }}
        >
          <ImageBackground
            source={require("../assets/backgrounds/Dashboard.jpg")}
            // style={{  width: "100%" }}
            resizeMode="contain"
            imageStyle={{
              bottom: "-70%", // Whatever offset you want from the bottom
            }}
            style={{
              width: "100%",
              flex: 1,
            }}
          >
            <Formik
              initialValues={{
                firstName: "",
                lastName: "",
                postcode: "HA9 0HZ",
              }}
              onSubmit={handleSubmit}
              validationSchema={validationSchema}
            >
              {({
                handleChange,
                setFieldValue,
                handleSubmit,
                errors,
                setFieldTouched,
                values,
                touched,
              }) => (
                <>
                  <View style={{ paddingHorizontal: 40 }}>
                    {items?.map((item, index) => {
                      return (
                        <View
                          key={item.id}
                          style={{
                            marginTop: 22,
                          }}
                        >
                          <Text style={styles.formLabel}>{item.label}</Text>

                          <TextInput
                            style={styles.inputBox}
                            onBlur={() => setFieldTouched(item.initialValue)}
                            onChangeText={(text) => {
                              // Update the firstName field with the new value entered in the TextInput
                              setFieldValue(item.initialValue, text);
                              console.log(text, "this is the new value");
                              const updatedFirstName = values.postcode;
                              if (item.label === "Postcode") {
                                handleAddress(text);
                              }
                            }}
                            placeholder={item.placeholder}
                            // value={values}
                          />

                          <ErrorMessage
                            error={errors[item.initialValue]}
                            visible={touched[item.initialValue]}
                          />
                        </View>
                      );
                    })}
                    <View
                      style={{
                        width: "100%",
                        marginVertical: "5%",
                      }}
                    >
                      <Text style={styles.formLabel}>{"Cardtype"}</Text>

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
                        style={styles.dropdown}
                        containerStyle={styles.containerStyle}
                        // renderRightIcon={() => (
                        //   <AntDesign name="checkcircle" size={24} color="green" />
                        // )}
                        // renderItem={renderItem}
                        placeholder="Select CardType"
                        autoScroll={false}
                      />
                    </View>
                    {/* Show postcode and address  if category not virtual */}
                    {cardCategory !== "virtual" ? (
                      <>
                        <View
                          style={{
                            marginTop: 22,
                          }}
                        >
                          <Text style={styles.formLabel}>{"PostCode"}</Text>

                          <TextInput
                            style={styles.inputBox}
                            onBlur={() => setFieldTouched("postcode")}
                            onChangeText={(text) => {
                              // Update the firstName field with the new value entered in the TextInput
                              setFieldValue("postcode", text);
                              console.log(text, "this is the new value");
                              handleAddress(text);
                            }}
                            placeholder={"Enter your postcode"}
                            // value={values}
                          />

                          <ErrorMessage
                            error={errors["postcode"]}
                            visible={touched["postcode"]}
                          />
                        </View>

                        <View
                          style={{
                            width: "100%",
                            marginVertical: "5%",
                          }}
                        >
                          <Text style={styles.lable}>{"Address"}</Text>

                          <Dropdown
                            data={addressData}
                            value={selectedAddress}
                            labelField="label"
                            valueField="value"
                            onChange={(item) => {
                              setSelectedAddress(item.value);
                            }}
                            style={styles.dropdown}
                            containerStyle={styles.containerStyle}
                            placeholder="Select Address"
                            autoScroll={false}
                          />
                        </View>
                      </>
                    ) : null}
                  </View>
                  <View
                    style={{
                      justifyContent: "flex-end",
                      paddingHorizontal: 40,
                    }}
                  >
                    <Button
                      title="Continue"
                      textColor={GlobalStyles.Color.white}
                      color="black"
                      style={styles.buttonColor}
                      onPress={handleSubmit}
                    />
                  </View>
                </>
              )}
            </Formik>
            <View style={{ marginTop: "20%" }}>
              <Tagline />
            </View>
          </ImageBackground>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoider>
  );
};

export default AddNewCard;

const styles = StyleSheet.create({
  formLabel: { fontSize: 14, fontFamily: "Montserrat", marginBottom: 5 },
  inputBox: {
    width: 332,
    height: 46,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: GlobalStyles.Color.borderColor,
    paddingHorizontal: 20,
    paddingVertical: 14,
    fontSize: 14,
    color: GlobalStyles.Color.darkGray,
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
  },
  containerStyle: {
    borderBottomEndRadius: 10,
    borderBottomStartRadius: 10,
    // backgroundColor:"red",
    // color:"white",
  },
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
  },
});
