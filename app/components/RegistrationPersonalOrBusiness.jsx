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

const PersonalOrBusiness = ({SaveDetails}) => {
    const handleSubmit = async (type) => {
        console.log(type)
        SaveDetails(type)
    }

    return (
        <Screen>
            <View
                style={styles.navigationButtons}
            >
                <Text>Type of account</Text>
                <Button title="Personal" color="babyBlue" onPress={() => handleSubmit("Personal")} />
                <Button title="Business" color="babyBlue" onPress={() => handleSubmit("Business")} />
            </View>
        </Screen>
  );
};

const styles = StyleSheet.create({

});

export default PersonalOrBusiness;
