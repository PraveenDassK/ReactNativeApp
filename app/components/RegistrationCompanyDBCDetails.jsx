import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import React, { useState, useContext, Fragment, } from "react";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import AuthContext from "../auth/context";

import ErrorMessage from "./forms/ErrorMessage";
import Button from "./AppButton";
import AuthScreen from "./AuthScreen";
import { horizontalScale } from "../config/scaling";

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required().min(1).max(11).label("First name"),
  lastName: Yup.string().required().min(1).max(11).label("Last name"),
  email: Yup.string().required().email().label("Email"),
  phoneNumber: Yup.string().required().min(10).max(10).label("Phone number"),
});

const RegistrationCompanyDBCDetails = ({setIsAdding, userType, setDirectors,setOwners,setIntrests}) => {
  const [id, setID] = useState(0)

  const handleSubmit = ({ firstName, lastName }) => {
    
    setID(prevCount => prevCount + 1);

    const obj =   {
      id: id,
      "email": "jack.h@carbonyte.io",
      "phoneNumber": "7927201649",
      "address": {
        address1: "123 street",
        address2: "456 house",
        area: "Area 5",
        city: "City 6",
        locale: "en_GB",
        postcode: "WD40 1UB"
      },
      firstName: firstName,
      lastName: lastName,
      "dob": "01-01-1970",
      "nationalID": "2",
      "country": "UK",
      "gender": "Male",
      "ownershipPercentage": "50",
      "role": "Director"
    }

    switch (userType) {
      case "Dir":
        // Code to execute for case "Dir"
        
        setDirectors(prevData => [...prevData, obj]);
        break;
      case "Con":
        // Code to execute for case "Con"
        
        setIntrests(prevData => [...prevData, obj]);
        break;
      case "Ben":
        // Code to execute for case "Ben"
        
        setOwners(prevData => [...prevData, obj]);
        break;
      default:
        // Code to execute for any other case
        
        break;
    }

    setIsAdding("")
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <AuthScreen
        title={"Details"}
        img="bear"
        width="40%"
        handleBack={() => console.log('here')}
      >
      <Formik
        initialValues={{ firstName: "", lastName: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {({ handleChange, handleSubmit, setFieldTouched, errors, touched }) => (
          <View
            style={[
              styles.component1981,
              styles.mt14,
              { marginLeft: horizontalScale(10) },
            ]}
          >
            <Text>First name</Text>
            <TextInput
              placeholder="Enter you first name"
              placeholderTextColor="#D3D3D3"
              keyboardType="Text"
              onBlur={() => setFieldTouched("firstName")}
              onChangeText={handleChange("firstName")}
              style={[
                styles.component1981Child,
                styles.childBorder,
                { padding: 10 },
              ]}
            />
            <ErrorMessage
              error={errors.firstName}
              visible={touched.firstName}
            />
            <Text>Last name</Text>
            <TextInput
              placeholder="Enter you last name"
              placeholderTextColor="#D3D3D3"
              keyboardType="Text"
              onBlur={() => setFieldTouched("lastName")}
              onChangeText={handleChange("lastName")}
              style={[
                styles.component1981Child,
                styles.childBorder,
                { padding: 10 },
              ]}
            />
            <ErrorMessage error={errors.lastName} visible={touched.lastName} />
            <Text>Phone Number</Text>
              <TextInput
                keyboardType="numeric"
                onBlur={() => setFieldTouched("phoneNumber")}
                onChangeText={handleChange("phoneNumber")}
                style={[
                  styles.component1981Child,
                  styles.childBorder,
                  { padding: 10 },
                ]}
              />
              <ErrorMessage
                error={errors.phoneNumber}
                visible={touched.phoneNumber}
              />
              <Text>Email Address</Text>
              <TextInput
                autoCapitalize="none"
                textContentType="emailAddress"
                keyboardType="email-address"
                onBlur={() => setFieldTouched("email")}
                onChangeText={handleChange("email")}
                style={[
                  styles.signUpPersonalItem,
                  styles.mt9,
                  styles.ml24,
                  styles.childBorder,
                  { padding: 10 },
                ]}
              />
              <ErrorMessage error={errors.email} visible={touched.email} />
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
export default RegistrationCompanyDBCDetails;
