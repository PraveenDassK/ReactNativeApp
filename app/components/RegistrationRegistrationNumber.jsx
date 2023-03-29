import React, { useContext, useEffect, useState } from "react"; 
//import * as React from "react";
import { StyleSheet, View, SafeAreaView, Text, TextInput, Image,Pressable, useWindowDimensions, Dimensions, TouchableWithoutFeedback, Keyboard} from "react-native";
import Screen from "./Screen";
import AuthContext from "../auth/context";
import GlobalStyles from "../../GlobalStyles";
import apiLoginRegister from "../api/apiLogin";
import * as Yup from 'yup';
import { horizontalScale, verticalScale, moderateScale } from "../config/scaling"

import Button from "./AppButton"
import { Formik, Field, Form } from 'formik';
import { Dropdown } from 'react-native-element-dropdown';
import { CheckBox } from '@rneui/themed';
import AuthScreen from "./AuthScreen";

const PersonalDetails = ({SaveDetails}) => {
    const [regNum, setRegNum] = useState("");
    const [companyDetails, setCompanyDetails] = useState(null)

    const searchCompany = async() => {
        const request = await apiLoginRegister.GetCompanyByRegNo(regNum)
        setCompanyDetails(request)
        console.log(request)
    }

    const sendDetails = () => {
        SaveDetails(companyDetails,"RegistrationNumber")
    }
    console.log(regNum)
    return (
        <Screen style={{backgroundColor: "white"}}>
            <AuthScreen title="Company registration number" img="elephantCarbon">
            <View style={[styles.component1981, styles.mt14]}>
                    <TextInput 
                        placeholder="Company registration number"
                        placeholderTextColor="grey"
                        keyboardType="numeric" 
                        onChangeText={(value) => setRegNum(value)}
                        style={[styles.component1981Child, styles.childBorder, {padding:10}]} 
                    />
                </View>
                {companyDetails?
                <View style={styles.spacing}>
                    <Text style={styles.spacing}>Are theese your details?</Text>    
                    <Text>{companyDetails.registered_office_address.address_line_1}</Text>    
                    <Text>{companyDetails.registered_office_address.address_line_2}</Text>    
                    <Text>{companyDetails.registered_office_address.locality}</Text>    
                    <Text>{companyDetails.registered_office_address.postal_code}</Text>    
                </View>
                : null}
            <Button title="Search" color="white" textColor="black" onPress={() => searchCompany()} />
            {companyDetails ?  
                <Button title="Continue" color="black" textColor="white" onPress={() => sendDetails()} />
            : null}
            </AuthScreen>
            {/* <Text>Company registration number</Text>
                <View style={[styles.component1981, styles.mt14,{marginLeft:horizontalScale(10)}]}>
                    <TextInput 
                        keyboardType="numeric" 
                        onChangeText={(value) => setRegNum(value)}
                        style={[styles.component1981Child, styles.childBorder, {padding:10}]} 
                    />
                </View>
                {companyDetails?
                <View>
                    <Text>Are theese your details?</Text>    
                    <Text>{companyDetails.registered_office_address.address_line_1}</Text>    
                    <Text>{companyDetails.registered_office_address.address_line_2}</Text>    
                    <Text>{companyDetails.registered_office_address.locality}</Text>    
                    <Text>{companyDetails.registered_office_address.postal_code}</Text>    
                </View>
                : null}
            <Button title="Search" color="babyBlue" onPress={() => searchCompany()} />
            {companyDetails ?  
                <Button title="Continue" color="babyBlue" onPress={() => sendDetails()} />
            : null} */}
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
        marginBottom: "5%",
        
      }, 
      spacing: {
        marginBottom: "2.5%"
      }
});

export default PersonalDetails;
