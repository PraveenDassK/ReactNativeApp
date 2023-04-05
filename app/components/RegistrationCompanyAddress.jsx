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
import AuthScreen from "./AuthScreen";
import PostCode from './RegistrationPostCode.jsx'

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    phoneNumber: Yup.string().required().min(10).max(10).label("Phone number")
})

const CompanyAddress = ({SaveDetails,setScreenToShow}) => {
    
    const [addresses, setAddresses] = useState([]);
    const [isAdding, setAdding] = useState(false);
    const [add, setAdd] = useState(null)

    useEffect(()=>{
        if(addresses.length > 0 ) setAdd(addresses.address1)
    },[addresses, isAdding])

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

    const handleBack = () => {
        console.log("!");
        setScreenToShow("CompanyDetails");
      };
    return (
        
        <Screen>
            <AuthScreen title="Where is it located?" img="elephantCard" width="70%"
            handleBack={handleBack}
            >
                
               {addresses.length > 0  ? (
                <>
                    <Text>{`${addresses[0].address1}`}</Text> 
                    <Text>{`${addresses[0].address2} `}</Text> 
                    <Text>{`${addresses[0].area} `}</Text> 
                    <Text>{`${addresses[0].postcode} `}</Text> 
                </>
               ): null}
               {console.log(addresses)}
            {isAdding ? 
                <PostCode AddAddress = {addAddress}/>
          :
                <View>
                    <Button title="Add" textColor="white" color="black" onPress={() => setAdding(true)} />
                    <Button title="Continue" textColor="black" color="white" onPress={() => handleSubmit()} />
                </View>
            }
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

export default CompanyAddress;