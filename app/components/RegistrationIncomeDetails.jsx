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
    incomeDetails: Yup.string().required().min(1).max(10).label("Annual income"),
    taxResidency: Yup.string().required().min(1).max(10).label("Tax residency")
})
import ErrorMessage from "./forms/ErrorMessage";

const Income = ({SaveDetails,setScreenToShow}) => {
    const handleSubmit = async ({incomeDetails, taxResidency}) => {
        SaveDetails(null,"Income")
    }
    const handleBack = () =>{
        console.log("!")
        setScreenToShow("EmploymentDetails")
      }
    return (
        <Screen>
            <AuthScreen title="Income details" img="eagleCard" handleBack = {handleBack}>
            <Formik
            initialValues={{
                incomeDetails:'', 
                taxResidency: ''
            }}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
            >
            {({ handleChange, handleSubmit, errors, setFieldTouched, touched }) => (
                <View style={[styles.component1981, styles.mt14,{marginLeft:horizontalScale(10)}]}>
                    <Text>Annual income</Text>
                    <TextInput 
                        keyboardType="numeric" 
                        onBlur={() => setFieldTouched("incomeDeatils")}
                        onChangeText={handleChange("incomeDetails")}
                        style={[styles.component1981Child, styles.childBorder, {padding:10}]} 
                    />
                    <ErrorMessage error={errors.incomeDetails} visible={touched.incomeDetails}/>

                <Text>Tax residency</Text>
                    <TextInput 
                        onBlur={() => setFieldTouched("taxResidency")}
                        onChangeText={handleChange("taxResidency")}
                        style={[styles.component1981Child, styles.childBorder, {padding:10}]} 
                    />
                    <ErrorMessage error={errors.taxResidency} visible={touched.taxResidency}/>
               
               <Button title="Continue" color="black" textColor="white" onPress={handleSubmit} />
                </View>
                
                )}
            </Formik>
            


            </AuthScreen>
            {/* <Text>Income details</Text>
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
                <Text>Income sources</Text>
                </View>
                )}
            </Formik>
            <Button title="Continue" color="babyBlue" onPress={() => handleSubmit()} /> */}
        </Screen>
  );
};

const styles = StyleSheet.create({
    childBorder: {
        borderWidth: 0.5,
        borderRadius: 10,
        borderColor: "#D3D3D3",
        opacity: 1,
        height: 50,
        marginTop: "2.5%",
        marginBottom: "5%"
      }
});

export default Income;
