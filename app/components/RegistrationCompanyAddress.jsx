import React, { useContext, useEffect, useState } from "react"; 
//import * as React from "react";
import { StyleSheet, View, SafeAreaView, Text, TextInput, Image,Pressable, useWindowDimensions, Dimensions, TouchableWithoutFeedback, Keyboard} from "react-native";
import Screen from "./Screen";
import AuthContext from "../auth/context";
import GlobalStyles from "../../GlobalStyles";
import api from "../api/api_list";
import { Formik } from "formik";
import * as Yup from 'yup';
import { horizontalScale, verticalScale, moderateScale } from "../config/scaling"
import Button from "./AppButton"
import AuthScreen from "./AuthScreen";
const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    phoneNumber: Yup.string().required().min(10).max(10).label("Phone number")
})

const PastAddresses = ({SaveDetails,setScreenToShow}) => {
    const handleSubmit = async () => {
        SaveDetails(null,"CompanyAddress")
    }
    const handleBack = () =>{
        console.log("!")
        setScreenToShow("CompanyDetails")
      }
    return (
        <Screen>
            <AuthScreen title="Company address" img="elephantCarbon" handleBack = {handleBack}>
            <Formik
            initialValues={{
                email:'', 
                phoneNumber: ''
            }}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
            >
            {({ handleChange, handleSubmit, errors, setFieldTouched, touched }) => (
                <View style={[styles.component1981, styles.mt14]}>
                    <Text>Past addresses</Text>
                    <Button title="Add" color="white" textColor="black" onPress={() => handleSubmit()} />

                </View>
                )}
            </Formik>
            <Button title="Continue" color="black" textColor="white" onPress={() => handleSubmit()} />
            </AuthScreen>
           
   
        </Screen>
  );
};

const styles = StyleSheet.create({
});

export default PastAddresses;
