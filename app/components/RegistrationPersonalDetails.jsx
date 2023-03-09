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

const PersonalDetails = ({navigation}) => {
    const handleSubmit = async ({ email, phoneNumber }) => {
        
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
                    <Text>First name</Text>
                    <TextInput 
                        keyboardType="numeric" 
                        onBlur={() => setFieldTouched("phoneNumber")}
                        onChangeText={handleChange("phoneNumber")}
                        style={[styles.component1981Child, styles.childBorder, {padding:10}]} 
                    />
                    <Text>Last name</Text>
                    <TextInput 
                        keyboardType="numeric" 
                        onBlur={() => setFieldTouched("phoneNumber")}
                        onChangeText={handleChange("phoneNumber")}
                        style={[styles.component1981Child, styles.childBorder, {padding:10}]} 
                    />
                    <Text>Gender</Text>
                    <TextInput 
                        keyboardType="numeric" 
                        onBlur={() => setFieldTouched("phoneNumber")}
                        onChangeText={handleChange("phoneNumber")}
                        style={[styles.component1981Child, styles.childBorder, {padding:10}]} 
                    />
                    <Text>Date of Birth</Text>
                    <TextInput 
                        keyboardType="numeric" 
                        onBlur={() => setFieldTouched("phoneNumber")}
                        onChangeText={handleChange("phoneNumber")}
                        style={[styles.component1981Child, styles.childBorder, {padding:10}]} 
                    />

                    <Text>I have read and accepted the privacy policy</Text>
                    <TextInput 
                        keyboardType="numeric" 
                        onBlur={() => setFieldTouched("phoneNumber")}
                        onChangeText={handleChange("phoneNumber")}
                        style={[styles.component1981Child, styles.childBorder, {padding:10}]} 
                    />
                    <Button title="Continue" color="babyBlue" onPress={handleSubmit} />
                  </View>
                  
                )}
            </Formik>
        </Screen>
  );
};

const styles = StyleSheet.create({
});

export default PersonalDetails;
