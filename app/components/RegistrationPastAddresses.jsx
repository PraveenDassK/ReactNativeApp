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
import Button from "./Button"
const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    phoneNumber: Yup.string().required().min(10).max(10).label("Phone number")
})

const PastAddresses = ({SaveDetails}) => {
    const handleSubmit = async () => {
        SaveDetails(null,"PastAddresses")
    }

    return (
        <Screen>
            <Text>A bit about you</Text>
            <Formik
            initialValues={{
                email:'', 
                phoneNumber: ''
            }}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
            >
            {({ handleChange, handleSubmit, errors, setFieldTouched, touched }) => (
                <View style={[styles.component1981, styles.mt14,{marginLeft:horizontalScale(10)}]}>
                    <Text>Pastaddresses</Text>
                    <Button title="Add" color="babyBlue" onPress={() => handleSubmit()} />

                </View>
                )}
            </Formik>
            <Button title="Continue" color="babyBlue" onPress={() => handleSubmit()} />
        </Screen>
  );
};

const styles = StyleSheet.create({
});

export default PastAddresses;
