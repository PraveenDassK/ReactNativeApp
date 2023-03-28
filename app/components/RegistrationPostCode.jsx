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
import Button from "./AppButton"
import { Dropdown } from 'react-native-element-dropdown';

const Postcode = ({AddAddress}) => {
    const [addressData, setAddressData] = useState([]);
    const [address, setAddress] = useState([]);

    /**
     * @dev This finds the correct postcodes
     */
    const handleSubmit = async ({postcode}) => {
        const response = await apiLogin.GetAddressByPostCode(postcode)
        console.log(response)
        setAddressData(response)
    }

    const sendData = () => {
        AddAddress(address)
    }

    return (
        <>
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
                            styles.childBorder,
                            {padding:10}
                            ]}
                    />
                                <Button title="search" textColor="black" color="white" onPress={handleSubmit} />

                    {/* <Button title="Search" color="babyBlue" onPress={handleSubmit} /> */}
                </View>
                )}
            </Formik>
            <Dropdown
                style={[styles.dropdown]}
                containerStyle={styles.dropdownContainer}
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
            <Button title="Add" textColor="white" color="black" onPress={() => sendData()} />
            {/* <Button title="Add" color="babyBlue" onPress={() => sendData()} /> */}
        </>
  );
};

const styles = StyleSheet.create({
    dropdown: {
        borderRadius: 10,
        borderWidth: 0.5,
        height: 50,
        paddingHorizontal: 8,
        marginBottom: "5%",
        marginTop: "2.5%",
        opacity: 1,
        borderColor: "#D3D3D3",
    
      },
      dropdownContainer: {
        borderBottomEndRadius: 10,
        borderBottomStartRadius: 10,
      },
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

export default Postcode;