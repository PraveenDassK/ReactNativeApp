import React, { useContext, useEffect, useState } from "react";
//import * as React from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  Text,
  TextInput,
  Image,
  Pressable,
  useWindowDimensions,
  Dimensions,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import Screen from "../components/Screen";
import AuthContext from "../auth/context";
import GlobalStyles from "../../GlobalStyles";
import apiLogin from "../api/apiLogin";
import { Formik } from "formik";
import * as Yup from "yup";
import {
  horizontalScale,
  verticalScale,
  moderateScale,
} from "../config/scaling";
import ErrorMessage from "../components/forms/ErrorMessage";
import Button from "../components/Button";

import RegistrationPersonalDetails from "../components/RegistrationPersonalDetails.jsx";
import RegistraionEmailAndPhone from "../components/RegistrationEmailAndPhone.jsx";
import PersonalOrBusiness from "../components/RegistrationPersonalOrBusiness.jsx";
import Nationality from "../components/RegistrationNationality.jsx";
import PastAddresses from "../components/RegistrationPastAddresses.jsx";
import MaritalStatus from "../components/RegistrationMaritalStatus.jsx";
import EmploymentDetails from "../components/RegistrationEmploymentDetails.jsx";
import Income from "../components/RegistrationIncomeDetails.jsx";
import Success from "../components/RegistrationSuccess.jsx";

import RegistrationNumber from "../components/RegistrationRegistrationNumber.jsx";
import CompanyDetails from "../components/RegistrationCompanyDetails.jsx";
import CompanyAddress from "../components/RegistrationCompanyAddress.jsx";
import CompanyInformation from "../components/RegistrationCompanyInformation.jsx";
import CompanyIncome from "../components/RegistrationCompanyIncome.jsx";
import CompanyOperations from "../components/RegistrationCompanyOperations.jsx";
import CompanyUsage from "../components/RegistrationCompanyUsage.jsx";
import CompanyDirectors from "../components/RegistrationCompanyDirectors.jsx";

import colors from "../config/colors";

const Registration = ({ navigation }) => {
  //Personal details
  const [accountType, setPersonalBusiness] = useState(null);
  const [personalDetails, setPersonalDetails] = useState(null)
  const [emailandPhone, setEmailandPhone] = useState(null)
  const [nationality, setNationality] = useState(null)
  const [addresses, setAddresses] = useState(null)
  const [maritalStatus, setMaritalStatus] = useState("single")
  const [employmentDetails, setEmploymentDetails] = useState("employed")
  const [income, setIncome] = useState({
    "totalIncome": "",
    "savings": "",
    "taxResidency": "Uk",
    "incomeSources": [
      "Salary"
    ]
  })

  const [registrationNumberDetails, setRegistrationNumberDetails] =
    useState(null);
  const [companyDetails, setCompanyDetails] = useState(null);
  const [screenToShow, setScreenToShow] = useState(null);

  /**
   * @dev Use this to differentiate between Personal or business accounts
   * @param {String} type This is the choice of which account to use
   */
  const accountSelector = async (type) => {
    console.log(type);
    if (type == "Personal") {
      //Change this back to PersonalDetails once done
      setScreenToShow("PersonalDetails");
      setPersonalBusiness(type);
    } else if (type == "Business") {
      //Change this back to RegistrationNumber once done
      setScreenToShow("RegistrationNumber");
      setPersonalBusiness(type);
    } else {
      navigation.navigate("Login");
    }
  };

  /**
   * @notice Validation for the objects are done on the Component side
   * @todo Add business details in
   * @param {Object} details The details that the component sends back
   * @param {Str} page This is the page that the information is coming from
   */
  const detailsSaver = async (details, page) => {
    console.log(details);
    switch (page) {
      case "PersonalDetails":
        setPersonalDetails(details);
        setScreenToShow("EmailAndPhone");
        break;
      case "EmailAndPhone":
        setEmailandPhone(details);
        setScreenToShow("Nationality");
        break;
      case "Nationality":
        setNationality(details);
        setScreenToShow("PastAddresses");
        break;
      case "PastAddresses":
        setAddresses(details);
        setScreenToShow("MaritalStatus");
        return;
      case "MaritalStatus":
        setMaritalStatus(details);
        setScreenToShow("EmploymentDetails");
        return;
      case "EmploymentDetails":
        setEmploymentDetails(details);
        setScreenToShow("Income");
        return;
      case "Income":
        // setIncome(details)
        // sendDetails()
        // setScreenToShow("Success")
        if (await sendDetails()) {
          //If successful
          setScreenToShow("Success");
        } else {
          //If unsuccessful
          alert("Registration is unsuccessful");
        }
        return;
      case "Success":
        setPersonalDetails(details);
        return;
      case "RegistrationNumber":
        setPersonalDetails(details);
        setScreenToShow("CompanyDetails");
        return;
      case "CompanyDetails":
        setPersonalDetails(details);
        setScreenToShow("CompanyAddress");
        return;
      case "CompanyAddress":
        setPersonalDetails(details);
        setScreenToShow("CompanyInformation");
        return;
      case "CompanyInformation":
        setPersonalDetails(details);
        setScreenToShow("CompanyIncome");
        return;
      case "CompanyIncome":
        setPersonalDetails(details);
        setScreenToShow("CompanyOperations");
        return;
      case "CompanyOperations":
        setPersonalDetails(details);
        setScreenToShow("CompanyUsage");
        return;
      case "CompanyUsage":
        setPersonalDetails(details);
        setScreenToShow("CompanyDirectors");
        return;
      case "CompanyDirectors":
        setScreenToShow("PersonalDetails");
        break;
      case "PersonalOrBusiness":
        break;
    }
  };

  /**
   * @notice The page name is taken from the screen to show hook
   * @dev To change pages change use the setScreenToShow setter
   *      and pass though the name of the screen
   * @dev Defaults to the starting personal or business page
   * @returns The component to show
   */
  const pagePicker = () => {
    switch (screenToShow) {
      case "PersonalDetails":
        return (
          <RegistrationPersonalDetails
            SaveDetails={detailsSaver}
            setScreenToShow={setScreenToShow}
            accountType={accountType}
          />
        );
      case "EmailAndPhone":
        return (
          <RegistraionEmailAndPhone
            SaveDetails={detailsSaver}
            setScreenToShow={setScreenToShow}
          />
        );
      case "Nationality":
        return (
          <Nationality
            SaveDetails={detailsSaver}
            setScreenToShow={setScreenToShow}
          />
        );
      case "PastAddresses":
        return (
          <PastAddresses
            SaveDetails={detailsSaver}
            setScreenToShow={setScreenToShow}
          />
        );
      case "MaritalStatus":
        return (
          <MaritalStatus
            SaveDetails={detailsSaver}
            setScreenToShow={setScreenToShow}
          />
        );
      case "EmploymentDetails":
        return (
          <EmploymentDetails
            SaveDetails={detailsSaver}
            setScreenToShow={setScreenToShow}
          />
        );
      case "Income":
        return (
          <Income
            SaveDetails={detailsSaver}
            setScreenToShow={setScreenToShow}
          />
        );
      case "Success":
        return (
          <Success
            SaveDetails={detailsSaver}
            setScreenToShow={setScreenToShow}
            navigation={navigation}
          />
        );
      case "RegistrationNumber":
        return (
          <RegistrationNumber
            SaveDetails={detailsSaver}
            setScreenToShow={setScreenToShow}
          />
        );
      case "CompanyDetails":
        return (
          <CompanyDetails
            SaveDetails={detailsSaver}
            setScreenToShow={setScreenToShow}
          />
        );
      case "CompanyAddress":
        return (
          <CompanyAddress
            SaveDetails={detailsSaver}
            setScreenToShow={setScreenToShow}
          />
        );
      case "CompanyInformation":
        return (
          <CompanyInformation
            SaveDetails={detailsSaver}
            setScreenToShow={setScreenToShow}
          />
        );
      case "CompanyIncome":
        return (
          <CompanyIncome
            SaveDetails={detailsSaver}
            setScreenToShow={setScreenToShow}
          />
        );
      case "CompanyOperations":
        return (
          <CompanyOperations
            SaveDetails={detailsSaver}
            setScreenToShow={setScreenToShow}
          />
        );
      case "CompanyUsage":
        return (
          <CompanyUsage
            SaveDetails={detailsSaver}
            setScreenToShow={setScreenToShow}
          />
        );
      case "CompanyDirectors":
        return (
          <CompanyDirectors
            SaveDetails={detailsSaver}
            setScreenToShow={setScreenToShow}
          />
        );
      default:
        return (
          <PersonalOrBusiness
            SaveDetails={accountSelector}
            navigation={navigation}
          />
        );
    }
  };

  /**
   * @dev This function sends all of the details to register
   * @notice  The only validation done here is to check if an item
   *          has been added
   */
  const sendDetails = async () => {
    const Id = String(Math.floor(Math.random() * 500000));
    // const Idperm = "10";
    // return false
    console.log(Id)
    console.log(emailandPhone)
    console.log(personalDetails)
    console.log(addresses)
    console.log(maritalStatus)
    console.log(nationality)
    console.log(nationality.country)
    // if (accountType == "Personal") {
    const regData =
      [
        {
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
            "salutation": "",
            "gender": personalDetails.gender,
            "maritalStatus": maritalStatus,
            "employmentDetails": employmentDetails
          },
          "income": income,
          "key": "",
          "role": "",
          "ownershipPercentage": 0,
          "marketingChoices": "string"
        }
      ]
    console.log(regData)
    const response = await apiLogin.RegisterPersonalAccount(regData)
    console.log(response.data)
    // If registration was not successfull
    if (!response.data.result) return false;
    // return false;
    return true;
  }

  return (
    <Screen
      enabled={screenToShow == "PersonalDetails" ? false : true}
      style={{ backgroundColor: colors.white }}
    >
      {pagePicker()}
    </Screen>
  );
};

const styles = StyleSheet.create({});

export default Registration;
