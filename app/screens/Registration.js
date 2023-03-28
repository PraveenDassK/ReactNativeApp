import React, { useContext, useEffect, useState } from "react"; 
//import * as React from "react";
import { StyleSheet, View, SafeAreaView, Text, TextInput, Image,Pressable, useWindowDimensions, Dimensions, TouchableWithoutFeedback, Keyboard} from "react-native";
import Screen from "../components/Screen";
import AuthContext from "../auth/context";
import GlobalStyles from "../../GlobalStyles";
import apiLogin from "../api/apiLogin";
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

import RegistrationNumber from "../components/RegistrationRegistrationNumber.jsx"
import CompanyDetails from "../components/RegistrationCompanyDetails.jsx"
import CompanyAddress from "../components/RegistrationCompanyAddress.jsx"
import CompanyInformation from "../components/RegistrationCompanyInformation.jsx"
import CompanyIncome from "../components/RegistrationCompanyIncome.jsx"
import CompanyOperations from "../components/RegistrationCompanyOperations.jsx"
import CompanyUsage from "../components/RegistrationCompanyUsage.jsx"

const Registration = ({navigation}) => {
      //Personal details
      const [accountType, setPersonalBusiness] = useState(null);
      const [personalDetails, setPersonalDetails] = useState(null)
      const [emailandPhone, setEmailandPhone] = useState(null)
      const [nationality, setNationality] = useState(null)
      const [addresses, setAddresses] = useState(null)
      const [maritalStatus, setMaritalStatus] = useState(null)
      const [employmentDetails, setEmploymentDetails] = useState(null)
      const [income, setIncome] = useState(null)

      const [registrationNumberDetails, setRegistrationNumberDetails] = useState(null)
      const [companyDetails, setCompanyDetails] = useState(null)
      const [screenToShow, setScreenToShow] = useState(null)

      /**
       * @dev Use this to differentiate between Personal or business accounts
       * @param {String} type This is the choice of which account to use
       */
      const accountSelector = async(type) => { 
        //sendDetails() 
        if(type == "Personal"){
            //Change this back to PersonalDetails once done
          setScreenToShow("PersonalDetails")
          setPersonalBusiness(type)
        }else if (type == "Business"){
          //Change this back to RegistrationNumber once done
          setScreenToShow("CompanyAddress")
          setPersonalBusiness(type)
        }else{
          navigation.navigate("Login")
        }
      }

      /**
       * @notice Validation for the objects are done on the Component side
       * @todo Add business details in
       * @param {Object} details The details that the component sends back
       * @param {Str} page This is the page that the information is coming from
       */
      const detailsSaver = (details,page) => {
        console.log(details)
        switch(page){
          case "PersonalDetails":
            setPersonalDetails(details)
            setScreenToShow("EmailAndPhone")
            break;
        case "EmailAndPhone":
            setEmailandPhone(details)
            setScreenToShow("Nationality")
            break;
        case "Nationality":
            setNationality(details)
            setScreenToShow("PastAddresses")
            break;
        case "PastAddresses":
            setAddresses(details)
            setScreenToShow("MaritalStatus")
            return;
        case "MaritalStatus":
            setMaritalStatus(details)
            setScreenToShow("EmploymentDetails")
            return;
        case "EmploymentDetails":
          setEmploymentDetails(details)
            setScreenToShow("Income")
            return;
        case "Income":
          setIncome(details)
            setScreenToShow("Success")
            return;
        case "Success":
            setPersonalDetails(details)
            sendDetails()
            return;
        case "RegistrationNumber":
            setPersonalDetails(details)
            setScreenToShow("CompanyDetails")
            return;
        case "CompanyDetails":
            setPersonalDetails(details)
            setScreenToShow("CompanyAddress")
            return;
        case "CompanyAddress":
            setPersonalDetails(details)
            setScreenToShow("CompanyInformation")
            return;
        case "CompanyInformation":
            setPersonalDetails(details)
            setScreenToShow("CompanyIncome")
            return;
        case "CompanyIncome":
            setPersonalDetails(details)
            setScreenToShow("CompanyOperations")
            return;
        case "CompanyOperations":
            setPersonalDetails(details)
            setScreenToShow("CompanyUsage")
            return;
        case "CompanyUsage":
            setPersonalDetails(details)
            setScreenToShow("PersonalDetails")
            return;
        case "PersonalOrBusiness":
            break;
        }
      }

      /**
       * @notice The page name is taken from the screen to show hook
       * @dev To change pages change use the setScreenToShow setter
       *      and pass though the name of the screen
       * @dev Defaults to the starting personal or business page
       * @returns The component to show
       */
      const pagePicker = () => {
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
        case "RegistrationNumber":
            return <RegistrationNumber SaveDetails = {detailsSaver}/>
        case "CompanyDetails":
            return <CompanyDetails SaveDetails = {detailsSaver}/>
        case "CompanyAddress":
            return <CompanyAddress SaveDetails = {detailsSaver}/>
        case "CompanyInformation":
            return <CompanyInformation SaveDetails = {detailsSaver}/>
        case "CompanyIncome":
            return <CompanyIncome SaveDetails = {detailsSaver}/>
        case "CompanyOperations":
            return <CompanyOperations SaveDetails = {detailsSaver}/>
        case "CompanyUsage":
            return <CompanyUsage SaveDetails = {detailsSaver}/>
        default:
            return <PersonalOrBusiness SaveDetails = {accountSelector}/>
        }
      }

    /**
     * @dev This function sends all of the details to register
     * @notice  The only validation done here is to check if an item
     *          has been added
     */
    const sendDetails = async() => {
      console.log(personalDetails)
      console.log(emailandPhone)
      console.log(nationality)
      console.log(income)
      console.log(addresses)
      console.log(employmentDetails)
        if(accountType == "Personal"){
          const regData = 
          [
            {
              "id": 22,
              "customerId": "",
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
                "firstName": "Jack",
                "dob": "29-12-1998",
                "nationalId": "22",
                "lastName": "Huang",
                "postCode": addresses[0].postcode,
                "postTown": addresses[0].area,
                "country": nationality.country,
                "locale": "",
                "salutation": "",
                "gender": "Male",
                "maritalStatus": "Single",
                "employmentDetails": "Unemployed"
              },
              "income": {
                "totalIncome": "",
                "savings": "",
                "taxResidency": "",
                "incomeSources": [
                  "string"
                ]
              },
              "key": "",
              "role": "",
              "ownershipPercentage": 0,
              "marketingChoices": "string"
            }
          ]
          const response = await apiLogin.RegisterPersonalAccount(regData)
          console.log(response)
          console.log(regData)
        }else{
          //Make a business account 
        }
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
