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

const Income = ({SaveDetails}) => {
    const handleSubmit = async () => {
        SaveDetails(null,"Income")
    }

    return (
        <Screen>
            <Text>Income details</Text>
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
                    <Text>Annual income</Text>
                    <TextInput 
                        keyboardType="numeric" 
                        onBlur={() => setFieldTouched("phoneNumber")}
                        onChangeText={handleChange("phoneNumber")}
                        style={[styles.component1981Child, styles.childBorder, {padding:10}]} 
                    />

                <Text>Tax residency</Text>
                    <TextInput 
                        keyboardType="numeric" 
                        onBlur={() => setFieldTouched("phoneNumber")}
                        onChangeText={handleChange("phoneNumber")}
                        style={[styles.component1981Child, styles.childBorder, {padding:10}]} 
                    />
                </View>
                )}
            </Formik>
            <Button title="Continue" color="babyBlue" onPress={() => handleSubmit()} />
        </Screen>
  );
};

const styles = StyleSheet.create({
});

export default Income;
