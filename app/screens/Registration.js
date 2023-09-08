import React, { useContext, useEffect, useState } from "react";
//import * as React from "react";
import { StyleSheet } from "react-native";
import Screen from "../components/Screen";
import apiLogin from "../api/apiLogin";

import RegistrationPersonalDetails from "../components/RegistrationPersonalDetails.jsx";
import RegistraionEmailAndPhone from "../components/RegistrationEmailAndPhone.jsx";
import PersonalOrBusiness from "../components/RegistrationPersonalOrBusiness.jsx";
import Nationality from "../components/RegistrationNationality.jsx";
import PastAddresses from "../components/RegistrationPastAddresses.jsx";
import MaritalStatus from "../components/RegistrationMaritalStatus.jsx";
import EmploymentDetails from "../components/RegistrationEmploymentDetails.jsx";
import Income from "../components/RegistrationIncomeDetails.jsx";
import Confirm from "../components/RegistrationSendDetails";
import Success from "../components/RegistrationSuccess.jsx";

import RegistrationNumber from "../components/RegistrationRegistrationNumber.jsx";
import CompanyDetails from "../components/RegistrationCompanyDetails.jsx";
import CompanyAddress from "../components/RegistrationCompanyAddress.jsx";
import CompanyInformation from "../components/RegistrationCompanyInformation.jsx";
import CompanyIncome from "../components/RegistrationCompanyIncome.jsx";
import CompanyOperations from "../components/RegistrationCompanyOperations.jsx";
import CompanyUsage from "../components/RegistrationCompanyUsage.jsx";
import CompanyDirectors from "../components/RegistrationDirectorsPartners.jsx";
import CompanyConfirm from "../components/RegistrationCompanySendDetails";

import colors from "../config/colors";
import { add } from "react-native-reanimated";

const Registration = ({ navigation }) => {
  //Personal details
  const [accountType, setPersonalBusiness] = useState(null);
  const [personalDetails, setPersonalDetails] = useState(null);
  const [emailandPhone, setEmailandPhone] = useState(null);
  const [nationality, setNationality] = useState(null);
  const [addresses, setAddresses] = useState(null);
  const [maritalStatus, setMaritalStatus] = useState("single");
  const [employmentDetails, setEmploymentDetails] = useState("employed");
  const [income, setIncome] = useState({
    incomeDetails: {
      totalIncome: "0",
      savings: "",
      taxResidency: "Uk",
      incomeSources: ["Salary"],
    },
    nationalInsurance: "1",
  });

  const [companyHouse, setRegistrationNumberDetails] = useState(null);
  const [companyDetails, setCompanyDetails] = useState(null);
  const [companyInformation, setCompanyInformation] = useState(null);
  const [companyUsage, setCompanyUsage] = useState(null);
  const [companyOperations, setcompanyOperations] = useState(null);
  const [screenToShow, setScreenToShow] = useState(null);
  console.log(companyInformation, "this is the company operations");

  useEffect(() => {}, []);

  useEffect(() => {}, []);

  /**
   * @dev Use this to differentiate between Personal or business accounts
   * @param {String} type This is the choice of which account to use
   */
  const accountSelector = async (type) => {
    if (type == "Personal") {
      //Change this back to PersonalDetails once done
      setScreenToShow("PersonalDetails");
      setPersonalBusiness(type);
    } else if (type == "Business") {
      //Change this back to RegistrationNumber once done
      // setScreenToShow("CompanyAddress");
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
        //setEmploymentDetails(details);
        //setEmploymentDetails(details);
        setScreenToShow("Income");
        return;
      case "Income":
        setIncome(details);
        setScreenToShow("Confirm");
        return;
      case "Confirm":
        //Confirms and sends the data
        if (await sendDetails("Personal")) {
          //If successful
          setScreenToShow("Success");
        } else {
          //If unsuccessful
          alert("Registration is unsuccessful");
        }
        return;
      case "Success":
        return;
      case "RegistrationNumber":
        setRegistrationNumberDetails(details);
        setScreenToShow("CompanyDetails");
        return;
      case "CompanyDetails":
        //setCompanyDetails(details);
        setScreenToShow("CompanyAddress");
        return;
      case "CompanyAddress":
        setAddresses(details);
        setScreenToShow("CompanyInformation");
        return;
      case "CompanyInformation":
        setCompanyInformation(details);
        setScreenToShow("CompanyIncome");
        return;
      case "CompanyIncome":
        setPersonalDetails(details);
        setScreenToShow("CompanyOperations");
        return;
      case "CompanyOperations":
        setcompanyOperations(details);
        setScreenToShow("CompanyUsage");
        return;
      case "CompanyUsage":
        console.log(details);
        setCompanyUsage(details);
        setScreenToShow("CompanyConfirm");
        return;
      case "CompanyDirectors":
        setScreenToShow("CompanyConfirm");
        break;
      case "CompanyConfirm":
        //Confirms and sends the data
        // alert("Worked");
        const callResult = await sendDetails("Business");
        console.log(callResult, "this is call result");
        // const callResult = true
        if (callResult === true) {
          //If successful
          alert("Your business was registered");
          let formVariables = {
            businessType: companyUsage,
            businessId: companyHouse.company_number,
          };
          navigation.navigate("Directororpartner", formVariables);
          // setScreenToShow("CompanyDirectors");
        } else {
          //If unsuccessful
          alert(callResult);
        }
        return;
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
      case "Confirm":
        return (
          <Confirm
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
            companyAddresses={companyHouse}
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
            // setCompanyUsage={setCompanyUsage}
          />
        );
      case "CompanyDirectors":
        return (
          <CompanyDirectors
            SaveDetails={detailsSaver}
            setScreenToShow={setScreenToShow}
            // companyType = {companyHouse.type}
            // companyNumber={companyHouse.company_number}
          />
        );
      case "CompanyConfirm":
        return (
          <CompanyConfirm
            data={companyHouse}
            SaveDetails={detailsSaver}
            setScreenToShow={setScreenToShow}
            companyType={companyUsage}
            aboutBusines={companyInformation}
            companyOperations={companyOperations}
            personalDetails={personalDetails}
            addresses={addresses}
            setRegistrationNumberDetails={setRegistrationNumberDetails}
            setCompanyUsage={setCompanyUsage}
            setCompanyInformation={setCompanyInformation}
            setcompanyOperations={setcompanyOperations}
            setPersonalDetails={setPersonalDetails}
            setAddresses={setAddresses}
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
  const sendDetails = async (type) => {
    // const Id = String(Math.floor(Math.random() * 500000));
    const Id = income.nationalInsurance;
    if (type == "Personal") {
      const regData = [
        {
          emails: [
            {
              emailId: emailandPhone.emailAddress,
            },
          ],
          phoneNumbers: [
            {
              phoneNo: emailandPhone.phoneNumber,
            },
          ],
          customerDetails: {
            documentNo: "",
            documentType: "",
            address: addresses[0].address1,
            firstName: personalDetails.firstName,
            dob: "01-01-1970",
            nationalId: Id,
            lastName: personalDetails.lastName,
            postCode: addresses[0].postcode,
            postTown: addresses[0].area,
            country: nationality.country,
            locale: addresses[0].locale,
            salutation: "Mr",
            gender: personalDetails.gender,
            maritalStatus: maritalStatus,
            employmentDetails: employmentDetails,
          },
          income: income.incomeDetails,
          key: "",
          role: "",
          ownershipPercentage: 0,
          marketingChoices: "",
        },
      ];
      const response = await apiLogin.RegisterPersonalAccount(regData);
      // If registration was not successfull
      if (!response.data.result) return false;
      // return false;
      return true;
    } else {
      //Business registration
      const newRegObject = {
        type: companyUsage.operationType, //companyHouse.type,
        company_status: companyHouse.company_status,
        etag: companyHouse.etag,
        aboutBusiness: companyInformation,
        incomeSources: ["Sales revenue"],
        operationTime: companyOperations,
        targetCustomer: "People",
        customerOutOfUk: "True",
        sic_codes: companyHouse.sic_codes,

        sic_category: "A",
        expectedMonthlySpendings: 0,

        registered_office_is_in_dispute:
          companyHouse.registered_office_is_in_dispute,
        jurisdiction: companyHouse.jurisdiction,
        undeliverable_registered_office_address:
          companyHouse.undeliverable_registered_office_address,
        links: companyHouse.links,
        company_name: companyHouse.company_name,
        accounts: companyHouse.accounts,
        previous_company_names: companyHouse.previous_company_names,
        date_of_creation: companyHouse.date_of_creation,
        company_number: companyHouse.company_number,
        has_insolvency_history: companyHouse.has_insolvency_history,
        has_charges: companyHouse.has_charges,
        confirmation_statement: companyHouse.confirmation_statement,

        registered_office_address: {
          country: "UK",
          countryCode: "GBR",
          address_line_1: companyHouse.registered_office_address.address_line_1,
          postal_code: companyHouse.registered_office_address.postal_code,
          locality: companyHouse.registered_office_address.locality,
          address_line_2: companyHouse.registered_office_address.address_line_2,
          region: "London",
          locale: "en_GB",
          dateMovedIn: "2010-01-01",
        },
        trading_address: {
          country: "UK",
          countryCode: "GBR",
          address_line_1: companyHouse.registered_office_address.address_line_1,
          postal_code: companyHouse.registered_office_address.postal_code,
          locality: companyHouse.registered_office_address.locality,
          address_line_2: companyHouse.registered_office_address.address_line_2,
          region: "London",
          locale: "en_GB",
          dateMovedIn: "01-01-2023",
        },

        has_super_secure_pscs: companyHouse.has_super_secure_pscs,
        can_file: companyHouse.can_file,
        acceptanceDateTime: "29-06-2023",
        policyVersion: "1",
      };
      console.log(newRegObject, "This is the onj");
      const response = await apiLogin.RegisterBusinessAccount(
        newRegObject,
        "AA"
      );
      // console.log(response, "this is a business account");
      if (!response.data.result) return response.data.resultMessage;

      // return false;
      return true;
    }
  };

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
