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
import apiLogin from "../api/apiLogin";

const CompanyDirectors = ({ SaveDetails, setScreenToShow, companyType, companyNumber }) => {
    const [directors, setDirectors] = useState([{
        "email": "jack.h@carbonyte.io",
        "phoneNumber": "7927201649",
        "address": {
            address1: "123 street",
            address2: "456 house",
            area: "Area 5",
            city: "City 6",
            locale: "en_GB",
            postcode: "WD40 1UB"
        },
        "firstName": "Jack",
        "lastName": "Huang",
        "dob": "01-01-1970",
        "nationalID": "2",
        "country": "UK",
        "gender": "Male",
        "ownershipPercentage": "50",
        "role": "Director"
    }])
    const [beneficalOwners, setBeneficalOwners] = useState([])
    const [controlingIntrests, setControlingIntrests] = useState([])

    const handleSubmit = async() => {
        let detailSubmission = []
        directors.forEach(person => {
            
            detailSubmission.push({
                "emails": [
                    {
                        "emailId": person.email
                    }
                ],
                "phoneNumbers": [
                    {
                        "phoneNo": person.phoneNumber
                    }
                ],
                "customerDetails": {
                    "documentNo": "",
                    "documentType": "",
                    "address": person.address?.address1,
                    "firstName": person.firstName,
                    "dob": person.dob,
                    "nationalId": person.nationalID,
                    "lastName": person.lastName,
                    "postCode": person.address?.postcode,
                    "postTown": person.address?.area,
                    "country": "UK",
                    "locale": person.address?.locale,
                    "salutation": "Mr",
                    "gender": person.gender,
                    "maritalStatus": "",
                    "employmentDetails": ""
                },
                "income": "",
                "key": companyNumber,
                "role": person.role,
                "ownershipPercentage": person.ownershipPercentage,
                "marketingChoices": ""
            })
        })
        
        //SaveDetails(details, "CompanyDirectors")
        const response = await apiLogin.RegisterBusinessUsers(detailSubmission)
        
    }
    const handleBack = () => {
        
        setScreenToShow("CompanyUsage")
    }

    return (

        <AuthScreen title="Directors or Partners" img="bear" handleBack={handleBack}>
            <Text>
                Carbonyte would like to know the details your partners and directors
            </Text>
            <Text>
                Company Type: {companyType}
            </Text>
            <Button
                title="Continue"
                color="black"
                textColor="white"
                onPress={() => handleSubmit()}
            />


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
