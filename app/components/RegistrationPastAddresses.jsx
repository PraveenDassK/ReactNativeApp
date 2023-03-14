import React, { useContext, useEffect, useState } from "react"; 
//import * as React from "react";
import { StyleSheet, View, SafeAreaView, Text, TextInput, Image,Pressable, useWindowDimensions, Dimensions, TouchableWithoutFeedback, Keyboard} from "react-native";
import Screen from "./Screen";
import AuthContext from "../auth/context";
import GlobalStyles from "../../GlobalStyles";
import { Formik } from "formik";
import * as Yup from 'yup';
import { horizontalScale, verticalScale, moderateScale } from "../config/scaling"
import Button from "./Button"
import PostCode from './RegistrationPostCode.jsx'

const PastAddresses = ({SaveDetails}) => {
    const [addresses, setAddresses] = useState([]);
    const [isAdding, setAdding] = useState(false);

    const handleSubmit = async () => {
        SaveDetails(addresses,"PastAddresses")
    }

    /**
     * @dev This sets the is adding to false which will show the past addresses page when used
     * @notice This does not validate data, validate the data on entry
     * @param {Object} address The address object that the address finder passes back
     */
    const addAddress = (addressObj) => {
        setAdding(false)
        setAddresses(address => [...address, addressObj])
        console.log(addresses)
    }

    return (
        <Screen>
            <Text>Past addresses</Text>
            {isAdding ? 
                <PostCode AddAddress = {addAddress}/>
          :
                <View>
                    <Button title="Add" color="babyBlue" onPress={() => setAdding(true)} />
                    <Button title="Continue" color="babyBlue" onPress={() => handleSubmit()} />
                </View>
            }
        </Screen>
  );
};

const styles = StyleSheet.create({
});

export default PastAddresses;
