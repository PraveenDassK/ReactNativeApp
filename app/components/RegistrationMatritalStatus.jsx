import React, { useContext, useEffect, useState } from "react"; 
//import * as React from "react";
import { StyleSheet, View, SafeAreaView, Text, TextInput, Image,Pressable, useWindowDimensions, Dimensions, TouchableWithoutFeedback, Keyboard} from "react-native";
import Screen from "./Screen";
import AuthContext from "../auth/context";
import GlobalStyles from "../../GlobalStyles";
import api from "../api/api_list";
import * as Yup from 'yup';
import { horizontalScale, verticalScale, moderateScale } from "../config/scaling"

import Button from "./Button"
import { Formik, Field, Form } from 'formik';
import { Dropdown } from 'react-native-element-dropdown';
import { CheckBox } from '@rneui/themed';

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    phoneNumber: Yup.string().required().min(10).max(10).label("Phone number")
})

const MaritalStatus = ({SaveDetails}) => {
    const [open, setOpen] = useState(false)
    const [isFocus, setIsFocus] = useState(false);
    const [status, setStatus] = useState(false);
    const [value, setValue] = useState("");

    const marrigeData = [
        {'label': 'Single', 'value': 'Single'},    
        {'label': 'Married', 'value': 'Married'},    
        {'label': 'Separated', 'value': 'Separated'},    
        {'label': 'Divorced', 'value': 'Divorced'},    
        {'label': 'Widowed', 'value': 'Widowed'},    
        {'label': 'Domestic partnership', 'value': 'Domestic partnership'},    
        {'label': 'Civil union', 'value': 'Civil union'}
    ]

    const handleSubmit = async () => {
        SaveDetails(status,"MaritalStatus")
    }

    return (
        <Screen>
            <Text>Marital status</Text>
            <Formik
            initialValues={{
                email:'', 
                phoneNumber: ''
            }}
            onSubmit={handleSubmit}
            //validationSchema={validationSchema}
            >
            {({ handleChange, handleSubmit, errors, setFieldTouched, touched }) => (
                <View style={[styles.component1981, styles.mt14,{marginLeft:horizontalScale(10)}]}>
                    <Text>What's your martital status</Text>
                    <Dropdown
                        data={marrigeData}
                        maxHeight={100}
                        labelField="label"
                        valueField="value"
                        placeholder={!isFocus ? 'Choose one' : '....'}
                        value={status}
                        onChange={item => {
                            setStatus(item.value);
                            setIsFocus(false);
                        }}
                    />
                    <Button title="Continue" color="babyBlue" onPress={() => handleSubmit()} />
                </View>
                )}
            </Formik>
        </Screen>
  );
};

const styles = StyleSheet.create({
});

export default MaritalStatus;
