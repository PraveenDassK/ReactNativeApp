import React, { useContext, useEffect, useState } from "react"; 
//import * as React from "react";
import { StyleSheet, View, SafeAreaView, Text, TextInput, Image,Pressable, useWindowDimensions, Dimensions, TouchableWithoutFeedback, Keyboard} from "react-native";
import Screen from "./Screen";
import AuthContext from "../auth/context";
import GlobalStyles from "../../GlobalStyles";
import api from "../api/api_list";
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import { horizontalScale, verticalScale, moderateScale } from "../config/scaling"
import Button from "./AppButton"
import colors from "../config/colors";
import AuthScreen from "./AuthScreen";



const Nationality = ({SaveDetails}) => {

    const handleSubmit = ({country,nationality}) => {
        console.log(country,nationality)
        SaveDetails({
            country: country,
            nationality: nationality
        },"Nationality")
    }

    return (
        <Screen>
            <AuthScreen title="Where are you from?" img="lion">
               <Formik
            initialValues={{
                country:'', 
                nationality: ''
            }}
            onSubmit={handleSubmit}
            >
            {({ handleChange, handleSubmit, errors, setFieldTouched, touched }) => (
                <View style={[styles.component1981, styles.mt14,{marginLeft:horizontalScale(10)}]}>
                    <Text>Country of birth</Text>
                    <TextInput 
                        onBlur={() => setFieldTouched("country")}
                        onChangeText={handleChange("country")}
                        style={[styles.component1981Child, styles.childBorder, {padding:10}]} 
                    />
                    <Text>Nationality</Text>
                    <TextInput 
                        onBlur={() => setFieldTouched("nationality")}
                        onChangeText={handleChange("nationality")}
                        style={[styles.component1981Child, styles.childBorder, {padding:10}]} 
                    />
                        <Button title="continue" textColor="white" color="black" onPress={handleSubmit} />
                  </View>                  
                )}
            </Formik> 
            </AuthScreen>
            

    
            {/* <Text>A bit about you</Text>
            <Formik
            initialValues={{
                country:'', 
                nationality: ''
            }}
            onSubmit={handleSubmit}
            >
            {({ handleChange, handleSubmit, errors, setFieldTouched, touched }) => (
                <View style={[styles.component1981, styles.mt14,{marginLeft:horizontalScale(10)}]}>
                    <Text>CountryOfBirth</Text>
                    <TextInput 
                        onBlur={() => setFieldTouched("country")}
                        onChangeText={handleChange("country")}
                        style={[styles.component1981Child, styles.childBorder, {padding:10}]} 
                    />
                    <Text>Nationality</Text>
                    <TextInput 
                        onBlur={() => setFieldTouched("nationality")}
                        onChangeText={handleChange("nationality")}
                        style={[styles.component1981Child, styles.childBorder, {padding:10}]} 
                    />
                    <Button title="Continue" color="babyBlue" onPress={() => handleSubmit()} />
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

export default Nationality;
