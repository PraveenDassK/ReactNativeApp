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
import Screen from "./Screen";
import AuthContext from "../auth/context";
import GlobalStyles from "../../GlobalStyles";
import api from "../api/api_list";
import { Formik } from "formik";
import * as Yup from "yup";
import {
  horizontalScale,
  verticalScale,
  moderateScale,
} from "../config/scaling";
import Button from "./AppButton";
import AuthScreen from "./AuthScreen";
import PostCode from "./RegistrationPostCode.jsx";
import { CheckBox } from "@rneui/themed";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  phoneNumber: Yup.string().required().min(10).max(10).label("Phone number"),
});

const CompanyAddressTrading = ({ SaveDetails, setScreenToShow, companyAddresses }) => {
  
  const [addresses, setAddresses] = useState([]);
  const [isAdding, setAdding] = useState(false);
  const [add, setAdd] = useState(null);
  const [isChecked, setChecked] = useState(false);


  useEffect(() => {
    if (addresses?.length > 0) setAdd(addresses.address1);
  }, [addresses, isAdding]);

  const handleSubmit = async () => {
    SaveDetails(addresses, "CompanyAddress");
  };

  //Do this if box is checked
  useEffect(() => {
    if (isChecked) {
      setAddresses([
        {
          "address1": "123 street",
          "address2": "456 house",
          "area": "Area 5",
          "city": "City 6",
          "locale": "en_GB",
          "postcode": "WD25 9XX"
        }
      ]);
    }
  }, [isChecked]);
  
  /**
   * @dev This sets the is adding to false which will show the past addresses page when used
   * @notice This does not validate data, validate the data on entry
   * @param {Object} address The address object that the address finder passes back
   */
  const addAddress = (addressObj) => {
    setAdding(false);
    setAddresses((address) => [...address, addressObj]);
  };

  const handleBack = () => {
    
    setScreenToShow("CompanyDetails");
  };
  return (
    <AuthScreen
      title="What is the trading address?"
      img="elephantCard"
      width="70%"
      handleBack={handleBack}
    >
      {addresses?.length > 0 ? (
        <>
          <Text>{`${addresses[0].address1}`}</Text>
          <Text>{`${addresses[0].address2} `}</Text>
          <Text>{`${addresses[0].area} `}</Text>
          <Text>{`${addresses[0].postcode} `}</Text>
        </>
      ) : null}
      {
      {isAdding ? (
        <PostCode AddAddress={addAddress} />
      ) : (

        <View>
          <CheckBox
            title="Is the trading address the same as the registred address?"
            checkedIcon="check-square-o"
            uncheckedIcon="square-o"
            checkedColor="black"
            checked={isChecked}
            onPress={() => setChecked(!isChecked)}
          />
          <Button
            title="Add"
            textColor="white"
            color="black"
            onPress={() => setAdding(true)}
          />
          <Button
            title="Continue"
            textColor="black"
            color="white"
            onPress={() => handleSubmit()}
          />
        </View>
      )}
    </AuthScreen>
  );
};

const styles = StyleSheet.create({});

export default CompanyAddressTrading;
