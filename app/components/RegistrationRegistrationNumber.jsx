import React, { useContext, useEffect, useState } from "react";
//import * as React from "react";
import { StyleSheet, View, Text, TextInput, Alert } from "react-native";
import apiLoginRegister from "../api/apiLogin";

import Button from "./AppButton";
import AuthScreen from "./AuthScreen";

import SICCodes from "../utility/sicCodes.json";
const BusinessDetails = ({ SaveDetails, setScreenToShow }) => {
  const [regNum, setRegNum] = useState("");
  const [regName, setRegName] = useState("");
  const [companyDetails, setCompanyDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  const [sicCode, setSicCode] = useState(null)

  /**
   * @dev This gets the company data and the SIC code
   * @returns alert if the company cannot be found
   */
  const searchCompany = async () => {
    if (regName == "") return Alert.alert("Nothing entered");
    setLoading(true)
    const regNumber = await apiLoginRegister.getCompanyRegNoByName(regName)
    console.log(regNumber)
    if (regNumber == null) {
      setLoading(false)
      return Alert.alert("The companay could not be found");
    }

    const request = await apiLoginRegister.GetCompanyByRegNo(regNumber);
    setLoading(false)
    if (request === null) return Alert.alert("Invalid business address");

    const sicCode = SICCodes.filter(SICCodes => +request.sic_codes[0].includes(SICCodes.sic_code))[0].section;
    console.log(sicCode)
    setSicCode(sicCode)

    setCompanyDetails(request);
  };

  const sendDetails = () => {
    SaveDetails(companyDetails, "RegistrationNumber");
  };

  const handleBack = () => {
    console.log("!");
    setScreenToShow("");
  };

  return (
    <AuthScreen
      title="Company name"
      img="elephantCarbon"
      handleBack={handleBack}
    >
      <View style={[styles.component1981, styles.mt14]}>
        <Text>
          We need the name of your company to search on company house
        </Text>
        <TextInput
          placeholder="Company name"
          placeholderTextColor="grey"
          onChangeText={(value) => setRegName(value)}
          style={[
            styles.component1981Child,
            styles.childBorder,
            { padding: 10 },
          ]}
        />
      </View>
      {companyDetails ? (
        <View style={styles.spacing}>
          <Text style={styles.spacing}>Are these your details?</Text>
          <Text>{companyDetails.company_name}</Text>
          <Text>{companyDetails.registered_office_address.address_line_1}</Text>
          <Text>{companyDetails.registered_office_address.address_line_2}</Text>
          <Text>{companyDetails.registered_office_address.locality}</Text>
          <Text>{companyDetails.registered_office_address.postal_code}</Text>
        </View>
      ) : null}
      {loading ?
        <Button
          title="Searching"
          color="white"
          textColor="black"
          onPress={() => { }}
        /> :
        <Button
          title="Search"
          color="white"
          textColor="black"
          onPress={() => searchCompany()}
        />
      }

      {companyDetails ? (
        <Button
          title="Continue"
          color="black"
          textColor="white"
          onPress={() => sendDetails()}
        />
      ) : null}
    </AuthScreen>
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
    marginBottom: "2.5%",
  },
});

export default BusinessDetails;
