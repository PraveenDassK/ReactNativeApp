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
const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    phoneNumber: Yup.string().required().min(10).max(10).label("Phone number")
})

const Success = ({SaveDetails}) => {
    const handleSubmit = async () => {
        SaveDetails(null,"Success")
    }

    return (
        <Screen style={{alignItems: "center", justifyContent: "center"}}>
            <View style={styles.successContainer} >
                <Text style={styles.successText}>Congratulations</Text>
                <Text style={styles.successText}>Welcome to Carbonyte!</Text>
                <Text style={styles.successSubText}>Your carbonyte account is ready</Text>
            </View>
            <View style={styles.buttonContainer}>
                <Button title="Continue" color="black" textColor="white" onPress={() => handleSubmit()} />
            </View>
            
        </Screen>
  );
};

const styles = StyleSheet.create({
    buttonContainer: {
        position: "absolute",
        bottom: 10,
        width: "80%"
    },
    successContainer: {
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center"

    },
    successText: {
        fontSize: 30
    }, 
    successSubText: {
        fontSize: 10
    }
});

export default Success;
