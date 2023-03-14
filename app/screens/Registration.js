import React, { useContext, useEffect, useState } from "react"; 
//import * as React from "react";
import { StyleSheet, View, SafeAreaView, Text, TextInput, Image,Pressable, useWindowDimensions, Dimensions, TouchableWithoutFeedback, Keyboard} from "react-native";
import Screen from "../components/Screen";
import AuthContext from "../auth/context";
import GlobalStyles from "../../GlobalStyles";
import api from "../api/api_list";
import { Formik } from "formik";
import * as Yup from 'yup';
import { horizontalScale, verticalScale, moderateScale } from "../config/scaling"
import ErrorMessage from "../components/forms/ErrorMessage";
import Button from "../components/Button"

import RegistrationPersonalDetails from "../components/RegistrationPersonalDetails.jsx"
import RegistraionEmailAndPhone from "../components/RegistrationEmailAndPhone.jsx"
import PersonalOrBusiness from "../components/RegistrationPersonalOrBusiness.jsx"
import Nationality from "../components/RegistrationNationality.jsx"
import PastAddresses from "../components/RegistrationPastAddresses.jsx"
import MaritalStatus from "../components/RegistrationMatritalStatus.jsx"
import EmploymentDetails from "../components/RegistrationEmploymentDetails.jsx"
import Income from "../components/RegistrationIncomeDetails.jsx"
import Success from "../components/RegistrationSuccess.jsx"

const Registration = ({navigation}) => {

      //Personal details
      const [accountType, setPersonalBusiness] = useState(null);
      const [personalDetails, setPersonalDetails] = useState(null)
      const [emailandPhone, setEmailandPhone] = useState(null)
      const [nationality, setNationality] = useState(null)
      const [addresses, setAddresses] = useState(null)
  
      const [registrationNumberDetails, setRegistrationNumberDetails] = useState(null)
      const [companyDetails, setCompanyDetails] = useState(null)
      const [screenToShow, setScreenToShow] = useState(null)
  
      /**
       * @dev Use this to differentiate between Personal or business accounts
       * @param {String} type This is the choice of which account to use
       */
      const accountSelector = async(type) => {  
        if(type == "Personal"){
          setScreenToShow("PersonalDetails")
          setPersonalBusiness(type)
        }else{
          setScreenToShow("BusinessRegNumber")
          setPersonalBusiness(type)
        }
        console.log(type)
      }
  
      /**
       * @notice Validation for the objects are done on the Component side
       * @todo Add business details in
       * @param {Object} details The details that the component sends back
       * @param {Str} page This is the page that the information is coming from
       */
      const detailsSaver = (details,page) => {
        switch(page){
          case "PersonalDetails":
            setPersonalDetails(details)
            setScreenToShow("EmailAndPhone")
            break;
        case "EmailAndPhone":
            setPersonalDetails(details)
            setScreenToShow("Nationality")
            break;
        case "Nationality":
            setPersonalDetails(details)
            setScreenToShow("PastAddresses")
            break;
        case "PastAddresses":
            setPersonalDetails(details)
            setScreenToShow("MaritalStatus")
            return;
        case "MaritalStatus":
            setPersonalDetails(details)
            setScreenToShow("EmploymentDetails")
            return;
        case "EmploymentDetails":
            setPersonalDetails(details)
            setScreenToShow("Income")
            return;
        case "Income":
            setPersonalDetails(details)
            setScreenToShow("Success")
            return;
        case "Success":
            setPersonalDetails(details)
            setScreenToShow("")
            return;
        case "Copied":
            setPersonalDetails(details)
            setScreenToShow("")
            return;
        case "Copied":
            setPersonalDetails(details)
            setScreenToShow("")
            return;
        case "PersonalOrBusiness":
            break;
        }
      }
      const pagePicker = () => {
        console.log(screenToShow)
        switch(screenToShow){
          case "PersonalDetails":
            return <RegistrationPersonalDetails SaveDetails = {detailsSaver}/>
        case "EmailAndPhone":
            return <RegistraionEmailAndPhone SaveDetails = {detailsSaver}/>
        case "Nationality":
            return <Nationality SaveDetails = {detailsSaver}/>
        case "PastAddresses":
            return <PastAddresses SaveDetails = {detailsSaver}/>
        case "MaritalStatus":
            return <MaritalStatus SaveDetails = {detailsSaver}/>
        case "EmploymentDetails":
            return <EmploymentDetails SaveDetails = {detailsSaver}/>
        case "Income":
            return <Income SaveDetails = {detailsSaver}/>
        case "Success":
            return <Success SaveDetails = {detailsSaver}/>
        case "Copied":
            return <PastAddresses SaveDetails = {detailsSaver}/>
        case "Copied":
            return <PastAddresses SaveDetails = {detailsSaver}/>
        case "Copied":
            return <PastAddresses SaveDetails = {detailsSaver}/>
        case "Copied":
            return <PastAddresses SaveDetails = {detailsSaver}/>
        default:
            return <PersonalOrBusiness SaveDetails = {accountSelector}/>
        }
      }

    const handleSubmit = async ({ email, phoneNumber }) => {
        
    }


    return (
        <Screen>
            {pagePicker()}
        </Screen>
  );
};

const styles = StyleSheet.create({
});

export default Registration;
