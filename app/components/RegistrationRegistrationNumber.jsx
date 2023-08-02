import React, { useContext, useEffect, useState } from "react";
//import * as React from "react";
import { StyleSheet, View, Text, TextInput, Alert } from "react-native";
import apiLoginRegister from "../api/apiLogin";

import Button from "./AppButton";
import AuthScreen from "./AuthScreen";
import { Dropdown } from "react-native-element-dropdown";
import SICCodes from "../utility/sicCodes.json";
const BusinessDetails = ({ SaveDetails, setScreenToShow }) => {
  const [regNum, setRegNum] = useState("");
  const [regName, setRegName] = useState("");
  const [companyDetails, setCompanyDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  const [sicCode, setSicCode] = useState(null);
  const [dropdownShow, setDropdownShow] = useState(false);
  const [dropdownData, setDropdownData] = useState([{ label: "", value: "" }]);

  const [type, setType] = useState();
  /**
   * @dev This gets the company data and the SIC code
   * @returns alert if the company cannot be found
   */
  const searchCompany = async () => {
    let newArray = [];
    if (regName == "") return Alert.alert("Nothing entered");
    setLoading(true);
    const regNumber = await apiLoginRegister.getCompanyRegNoByName(regName);
    
    if (regNumber == null) {
      setLoading(false);
      return Alert.alert("The companay could not be found");
    }
    newArray.push(regNumber);
    
    let newData = newArray?.[0]?.items?.map((eachData, i) => {
      
      return {
        label: eachData?.company_name,
        value: eachData?.company_number,
      };
    });
    
    setDropdownData(newData);
    // const request = await apiLoginRegister.GetCompanyByRegNo(regNumber);
    // 
    setDropdownShow(true);
    setLoading(false);
    // if (request === null) return Alert.alert("Invalid business address");

    // const sicCode = SICCodes.filter(SICCodes => +request?.sic_codes?.[0].includes(SICCodes.sic_code))[0].section;
    // 
    // setSicCode(sicCode)

    // setCompanyDetails(request);
  };

  const handleDropDown = async (value) => {
    const request = await apiLoginRegister.GetCompanyByRegNo(value);
    
    setCompanyDetails(request);
  };

  const sendDetails = () => {
    SaveDetails(companyDetails, "RegistrationNumber");
  };

  const handleBack = () => {
    
    setScreenToShow("");
  };

  return (
    <AuthScreen
      title="Company name"
      img="elephantCarbon"
      handleBack={handleBack}
    >
      <View style={[styles.component1981, styles.mt14]}>
        <Text>We need the name of your company to search on company house</Text>
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
      {dropdownShow ? (
        <Dropdown
          style={[styles.dropdown]}
          containerStyle={styles.dropdownContainer}
          data={dropdownData}
          maxHeight={150}
          labelField="label"
          valueField="value"
          placeholder={"Select an option"}
          searchPlaceholder={"Search..."}
          search={false}
          value={type}
          onChange={(item) => {
            setType(item.value);
            handleDropDown(item.value);
          }}
        />
      ) : null}

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
      {loading ? (
        <Button
          title="Searching"
          color="white"
          textColor="black"
          onPress={() => {}}
        />
      ) : (
        <Button
          title="Search"
          color="white"
          textColor="black"
          onPress={() => searchCompany()}
        />
      )}

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
  dropdown: {
    borderRadius: 10,
    borderWidth: 0.5,
    height: 50,
    paddingHorizontal: 8,
    marginBottom: "5%",
    marginTop: "2.5%",
    opacity: 1,
    borderColor: "#D3D3D3",
  },
  dropdownContainer: {
    borderTopEndRadius: 10,
    borderTopStartRadius: 10,
  },
});

export default BusinessDetails;
