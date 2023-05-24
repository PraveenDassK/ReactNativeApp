import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, View, SafeAreaView, Text, TextInput, Image, Pressable, useWindowDimensions, Dimensions, TouchableWithoutFeedback, Keyboard } from "react-native";
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
import ErrorMessage from "./forms/ErrorMessage";

const validationSchema = Yup.object().shape({

})

const CompanyDirectors = ({ SaveDetails, setScreenToShow, companyType, companyNumber }) => {
    const [directors, setDirectors] = useState([])
    const [beneficalOwners, setBeneficalOwners] = useState([])
    const [controlingIntrests, setControlingIntrests] = useState([])

    const handleSubmit = () => {
        
        const details = {
            "emails": [
                {
                    "emailId": emailandPhone.emailAddress
                }
            ],
            "phoneNumbers": [
                {
                    "phoneNo": emailandPhone.phoneNumber
                }
            ],
            "customerDetails": {
                "documentNo": "",
                "documentType": "",
                "address": addresses[0].address1,
                "firstName": personalDetails.firstName,
                "dob": "01-01-1970",
                "nationalId": Id,
                "lastName": personalDetails.lastName,
                "postCode": addresses[0].postcode,
                "postTown": addresses[0].area,
                "country": nationality.country,
                "locale": addresses[0].locale,
                "salutation": "Mr",
                "gender": personalDetails.gender,
                "maritalStatus": maritalStatus,
                "employmentDetails": employmentDetails
            },
            "income": income.incomeDetails,
            "key": "",
            "role": "",
            "ownershipPercentage": 0,
            "marketingChoices": ""
        }
        //SaveDetails(details, "CompanyDirectors")
    }
    const handleBack = () => {
        console.log("!")
        setScreenToShow("CompanyUsage")
    }
    console.log(companyType)



    return (

        <AuthScreen title="Directors or Partners" img="bear" handleBack={handleBack}>
            <Text>
                Carbonyte would like to know the details your partners and directors
            </Text>
            <Text>
                Company Type: {companyType}
            </Text>



        </AuthScreen>



    );
};

const styles = StyleSheet.create({
    childBorder: {
        borderWidth: 0.5,
        borderRadius: 10,
        borderColor: "#D3D3D3",
        opacity: 1,
        height: 40,
        marginTop: "2.5%",
        marginBottom: "5%"
    }
});

export default CompanyDirectors;
