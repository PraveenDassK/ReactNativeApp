import React, { useContext, useEffect, useState } from "react"; 
//import * as React from "react";
import { StyleSheet, View, FlatList, SafeAreaView, Text, TextInput, Image,Pressable, useWindowDimensions, Dimensions, TouchableWithoutFeedback, Keyboard} from "react-native";
import Screen from "./Screen";
import AuthContext from "../auth/context";
import GlobalStyles from "../../GlobalStyles";
import { Formik } from "formik";
import * as Yup from 'yup';
import { horizontalScale, verticalScale, moderateScale } from "../config/scaling"
import Button from "./AppButton"
import PostCode from './RegistrationPostCode.jsx'
import AuthScreen from "./AuthScreen";

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
    }
    console.log("Addresses", addresses)

    return (
        <Screen>
            <AuthScreen title="Past adresses" img="elephantCard" width="70%">
            {isAdding ? 
                <PostCode AddAddress = {addAddress}/>
          :
                <View>
                    <FlatList
                        data={addresses}
                        renderItem={({address}) => {
                            {console.log(address)}
                            <View/>
                        }}
                        keyExtractor={addresses => addresses.id}
                    />

                    <Button title="Add" textColor="white" color="black" onPress={() => setAdding(true)} />
                    <Button title="Continue" textColor="black" color="white" onPress={() => handleSubmit()} />
                </View>}
            </AuthScreen>
            {/* <Text>Past addresses</Text>
            {isAdding ? 
                <PostCode AddAddress = {addAddress}/>
          :
                <View>
                    <Button title="Add" color="babyBlue" onPress={() => setAdding(true)} />
                    <Button title="Continue" color="babyBlue" onPress={() => handleSubmit()} />
                </View>
            } */}
        </Screen>
  );
};

const styles = StyleSheet.create({
});

export default PastAddresses;