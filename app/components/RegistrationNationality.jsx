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
import ErrorMessage from "./forms/ErrorMessage";

const validationSchema = Yup.object().shape({
    country: Yup.string().required().min(3).max(11).label("Country"),
    nationality: Yup.string().required().min(3).max(11).label("Nationality")
  })

const Nationality = ({SaveDetails,setScreenToShow}) => {

    const handleSubmit = ({country,nationality}) => {
        console.log(country,nationality)
        SaveDetails({
            country: country,
            nationality: nationality
        },"Nationality")
    }
    const handleBack = () =>{
        console.log("!")
        setScreenToShow("EmailAndPhone")
      }
    
    return (
        <Screen>
            <AuthScreen title="Where are you from?" img="lion" handleBack = {handleBack}>
               <Formik
            initialValues={{
                country:'', 
                nationality: ''
            }}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
            >
            {({ handleChange, handleSubmit, errors, setFieldTouched, touched }) => (
                <View style={[styles.component1981, styles.mt14,{marginLeft:horizontalScale(10)}]}>
                    <Text>Country of birth</Text>
                    <TextInput 
                        onBlur={() => setFieldTouched("country")}
                        onChangeText={handleChange("country")}
                        style={[styles.component1981Child, styles.childBorder, {padding:10}]} 
                    />
                     <ErrorMessage error={errors.country} visible={touched.country}/>
                    <Text>Nationality</Text>
                    <TextInput 
                        onBlur={() => setFieldTouched("nationality")}
                        onChangeText={handleChange("nationality")}
                        style={[styles.component1981Child, styles.childBorder, {padding:10}]} 
                    />
                     <ErrorMessage error={errors.nationality} visible={touched.nationality}/>
                        <Button title="continue" textColor="white" color="black" onPress={handleSubmit} />
                  </View>                  
                )}
            </Formik> 
            </AuthScreen>
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
