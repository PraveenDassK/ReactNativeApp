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
import colors from "../config/colors";
import AuthScreen from "./AuthScreen";



const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    phoneNumber: Yup.string().required().min(10).max(10).label("Phone number")
})

const RegistrationEmailAndPhone = ({SaveDetails}) => {

    const handleSubmit = async ({ email, phoneNumber }) => {
        SaveDetails({        
            phoneNumber: phoneNumber,
            emailAddress: email
        },"EmailAndPhone")
    }

    return (
        <Screen>

<AuthScreen title="A bit more about you" img="elephantCarbon">
     <Formik
            initialValues={{
                email:'', 
                phoneNumber: ''
            }}
            onSubmit={handleSubmit}
            //Comment out if needed
            //Must be present in prod
            //validationSchema={validationSchema}
            >
            {({ handleChange, handleSubmit, errors, setFieldTouched, touched }) => (
                <View style={[styles.component1981, styles.mt14,{marginLeft:horizontalScale(10)}]}>
                    <Text>Phone Number</Text>
                    <TextInput 
                        keyboardType="numeric" 
                        onBlur={() => setFieldTouched("phoneNumber")}
                        onChangeText={handleChange("phoneNumber")}
                        style={[styles.component1981Child, styles.childBorder, {padding:10}]} 
                    />
                    <Text>Email Address</Text>
                    <TextInput
                        autoCapitalize="none"
                        textContentType="emailAdress"
                        keyboardType="email-address"
                        onBlur={() => setFieldTouched('email')}
                        onChangeText={handleChange('email')}
                        style={[
                            styles.signUpPersonalItem,
                            styles.mt9,
                            styles.ml24,
                            styles.childBorder,
                            {padding:10}
                            ]}
                    />
                      <Button title="continue" textColor="white" color="black" onPress={handleSubmit} />
                    
                </View>
                )}
            </Formik>
</AuthScreen>
      
           
          
        

            {/* <Text>Email and Phone number</Text>
            <Formik
            initialValues={{
                email:'', 
                phoneNumber: ''
            }}
            onSubmit={handleSubmit}
            //Comment out if needed
            //Must be present in prod
            //validationSchema={validationSchema}
            >
            {({ handleChange, handleSubmit, errors, setFieldTouched, touched }) => (
                <View style={[styles.component1981, styles.mt14,{marginLeft:horizontalScale(10)}]}>
                    <Text>Phone Number</Text>
                    <TextInput 
                        keyboardType="numeric" 
                        onBlur={() => setFieldTouched("phoneNumber")}
                        onChangeText={handleChange("phoneNumber")}
                        style={[styles.component1981Child, styles.childBorder, {padding:10}]} 
                    />
                    <Text>Email Address</Text>
                    <TextInput
                        autoCapitalize="none"
                        textContentType="emailAdress"
                        keyboardType="email-address"
                        onBlur={() => setFieldTouched('email')}
                        onChangeText={handleChange('email')}
                        style={[
                            styles.signUpPersonalItem,
                            styles.mt9,
                            styles.ml24,
                            styles.childBorder,
                            {padding:10}
                            ]}
                    />
                    <Button title="Continue" color="babyBlue" onPress={handleSubmit} />
                </View>
                )}
            </Formik> */}
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

export default RegistrationEmailAndPhone;
