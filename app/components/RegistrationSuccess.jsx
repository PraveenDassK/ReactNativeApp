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

const Success = ({SaveDetails}) => {
    const handleSubmit = async () => {
        SaveDetails(null,"Success")
    }

    return (
        <Screen>
            <Text>Success</Text>

            <Button title="Continue" color="babyBlue" onPress={() => handleSubmit()} />
        </Screen>
  );
};

const styles = StyleSheet.create({
});

export default Success;
