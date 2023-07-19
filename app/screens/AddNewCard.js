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
import React, { useState, useContext } from "react";
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
const AddNewCard = ({ navigation }) => {
  const [selectedCard, setSelectedCard] = useState();
  const { accountID, userID } = useContext(AuthContext);

  console.log(accountID, userID);
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
  ];
  const requestObj = {
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
  };

  const handleSubmit = async ({ firstName, lastName }) => {
    console.log(firstName, lastName, selectedCard, "this is data");
    requestObj.embossing.firstName = firstName;
    requestObj.embossing.lastName = lastName;
    let response = await apiVirtualCard.getNewVirtualCard(
      userID,
      accountID,
      selectedCard,
      requestObj
    );
    navigation.navigate("MyCards")
    console.log(response, "this is a new virtual card");
  };

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
  return (
    <KeyboardAvoider>
      {/* <StepProgress currentStep={1} /> */}

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
              firstName: "",
              lastName: "",
             
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
                  {items.map((item, index) => (
                    <View
                      key={item.id}
                      style={{
                        marginTop: 22,
                      }}
                    >
                      {console.log("item", item)}
                      <Text style={styles.formLabel}>{item.label}</Text>
                      <TextInput
                        style={styles.inputBox}
                        onChangeText={handleChange(item.initialValue)}
                        placeholder={item.placeholder}
                      />
                      <ErrorMessage
                        error={errors[item.initialValue]}
                        visible={touched[item.initialValue]}
                      />
                    </View>
                  ))}
                  <View
                    style={{
                      width: "100%",
                      marginVertical: "5%",
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
                </View>
                <View style={{flex:1,justifyContent:"flex-end"}}>
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
});
