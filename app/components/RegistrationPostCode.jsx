import React, { useContext, useEffect, useState } from "react"; 
//import * as React from "react";
import { StyleSheet, View, SafeAreaView, Text, TextInput, Image,Pressable, useWindowDimensions, Dimensions, TouchableWithoutFeedback, Keyboard} from "react-native";
import Screen from "./Screen";
import AuthContext from "../auth/context";
import GlobalStyles from "../../GlobalStyles";
import apiLogin from "../api/apiLogin";
import { Formik } from "formik";
import * as Yup from 'yup';
import { horizontalScale, verticalScale, moderateScale } from "../config/scaling"
import Button from "./Button"
import { Dropdown } from 'react-native-element-dropdown';

const Postcode = ({AddAddress}) => {
    const [addressData, setAddressData] = useState([]);
    const [address, setAddress] = useState([]);

    /**
     * @dev This finds the correct postcodes
     */
    const handleSubmit = async ({postcode}) => {
        const response = await apiLogin.GetAddressByPostCode(postcode)
        let addressObj = []
        response?.addresses.forEach(address => {
            const split = address.split(",")
            addressObj.push({
                label:split[0],
                value:{
                    address1: split[0],
                    address2: split[1],
                    area:split[5],
                    city:split[6],
                    postcode:postcode
                }
            })
        });
        setAddressData(addressObj)
    }

    const sendData = () => {
        AddAddress(address)
    }

    return (
        <Screen>
            <Text>Enter your postcode</Text>
            <Formik
            initialValues={{
                postcode: ''
            }}
            onSubmit={handleSubmit}
            >
            {({ handleChange, handleSubmit, errors, setFieldTouched, touched }) => (
                <View style={[styles.component1981, styles.mt14,{marginLeft:horizontalScale(10)}]}>
                    <Text>Postcode</Text>
                    <TextInput
                        autoCapitalize="none"
                        textContentType="postcode"
                        keyboardType="postcode"
                        onBlur={() => setFieldTouched('postcode')}
                        onChangeText={handleChange('postcode')}
                        style={[
                            styles.signUpPersonalItem,
                            styles.mt9,
                            styles.ml24,
                            styles.childBorder,
                            {padding:10}
                            ]}
                    />
                    <Button title="Search" color="babyBlue" onPress={handleSubmit} />
                </View>
                )}
            </Formik>

            <Dropdown
                data={addressData}
                maxHeight={100}
                labelField="label"
                valueField="value"
                placeholder={address[0]}
                value={address}
                onChange={item => {
                    setAddress(item.value);
                }}
            />
            <Button title="Add" color="babyBlue" onPress={() => sendData()} />
        </Screen>
  );
};

const styles = StyleSheet.create({
});

export default Postcode;