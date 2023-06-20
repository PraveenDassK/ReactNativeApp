import React, { useContext, useEffect, useState } from "react";
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
import apiLoginRegister from "../api/apiLogin";
import * as Yup from "yup";
import {
  horizontalScale,
  verticalScale,
  moderateScale,
} from "../config/scaling";

import Button from "./AppButton";
import { Formik, Field, Form } from "formik";
import { Dropdown } from "react-native-element-dropdown";
import { CheckBox } from "@rneui/themed";
import AuthScreen from "./AuthScreen";

const CompanyIncome = ({ SaveDetails, setScreenToShow }) => {
  const [salesRevenue, setSalesRevenue] = useState(false);
  const [subscriptionRevenue, setSubscriptionRevenue] = useState(false);
  const [advertisingRevenue, setAdvertisingRevenue] = useState(false);
  const [affiliateIncome, setAffiliateIncome] = useState(false);
  const [licensingFranchisingRevenue, setLicensingFranchisingRevenue] =
    useState(false);
  const [rentalIncome, setRentalIncome] = useState(false);
  const [consultancyServicesIncome, setConsultancyServicesIncome] =
    useState(false);
  const [grantsSubsidiesIncome, setGrantsSubsidiesIncome] = useState(false);
  const [crowdfundingIncome, setCrowdfundingIncome] = useState(false);

  const sendDetails = () => {
    const details = {
      salesRevenue: salesRevenue,
      subscriptionRevenue: subscriptionRevenue,
      advertisingRevenue: advertisingRevenue,
      affiliateIncome: affiliateIncome,
      licensingFranchisingRevenue: licensingFranchisingRevenue,
      rentalIncome: rentalIncome,
      consultancyServicesIncome: consultancyServicesIncome,
      grantsSubsidiesIncome: grantsSubsidiesIncome,
      crowdfundingIncome: crowdfundingIncome,
    };
    
    SaveDetails(getTrueItems(details), "CompanyIncome");
  };

  function getTrueItems(obj) {
    const trueItems = [];
  
    for (let key in obj) {
      if (obj.hasOwnProperty(key) && obj[key] === true) {
        trueItems.push(key);
      }
    }
  
    return trueItems;
  }
  

  function areAllItemsFalse(obj) {
    for (let key in obj) {
      if (obj.hasOwnProperty(key) && obj[key] !== false) {
        return false;
      }
    }
    return true;
  }

  const handleBack = () => {
    console.log("!");
    setScreenToShow("CompanyInformation");
  };
  return (
    <AuthScreen title="Your company income" handleBack={handleBack}>
      <Formik onSubmit={(values) => sendData(values)}>
        {({ handleChange, handleSubmit, setFieldTouched }) => (
          <View
            style={[
              styles.component1981,
              styles.mt14,
              { marginLeft: horizontalScale(10) },
            ]}
          >
            <Text>Enter all that apply</Text>
            <CheckBox
              title="Sales revenue"
              checkedIcon="dot-circle-o"
              uncheckedIcon="circle-o"
              checkedColor="black"
              checked={salesRevenue}
              onPress={() => setSalesRevenue(!salesRevenue)}
            />
            <CheckBox
              title="Subscription revenue"
              checkedIcon="dot-circle-o"
              uncheckedIcon="circle-o"
              checkedColor="black"
              checked={subscriptionRevenue}
              onPress={() => setSubscriptionRevenue(!subscriptionRevenue)}
            />
            <CheckBox
              title="Advertising revenue"
              checkedIcon="dot-circle-o"
              uncheckedIcon="circle-o"
              checkedColor="black"
              checked={advertisingRevenue}
              onPress={() => setAdvertisingRevenue(!advertisingRevenue)}
            />
            <CheckBox
              title="Affiliate income"
              checkedIcon="dot-circle-o"
              uncheckedIcon="circle-o"
              checkedColor="black"
              checked={affiliateIncome}
              onPress={() => setAffiliateIncome(!affiliateIncome)}
            />
            <CheckBox
              title="Licensing or franchising"
              checkedIcon="dot-circle-o"
              uncheckedIcon="circle-o"
              checkedColor="black"
              checked={licensingFranchisingRevenue}
              onPress={() =>
                setLicensingFranchisingRevenue(!licensingFranchisingRevenue)
              }
            />
            <CheckBox
              title="Rental income"
              checkedIcon="dot-circle-o"
              uncheckedIcon="circle-o"
              checkedColor="black"
              checked={rentalIncome}
              onPress={() => setRentalIncome(!rentalIncome)}
            />
            <CheckBox
              title="Consultancy or professional services"
              checkedIcon="dot-circle-o"
              uncheckedIcon="circle-o"
              checkedColor="black"
              checked={consultancyServicesIncome}
              onPress={() =>
                setConsultancyServicesIncome(!consultancyServicesIncome)
              }
            />
            <CheckBox
              title="Grants and subsidies"
              checkedIcon="dot-circle-o"
              uncheckedIcon="circle-o"
              checkedColor="black"
              checked={grantsSubsidiesIncome}
              onPress={() => setGrantsSubsidiesIncome(!grantsSubsidiesIncome)}
            />
            <CheckBox
              title="Crowdfunding"
              checkedIcon="dot-circle-o"
              uncheckedIcon="circle-o"
              checkedColor="black"
              checked={crowdfundingIncome}
              onPress={() => setCrowdfundingIncome(!crowdfundingIncome)}
            />
          </View>
        )}
      </Formik>
      <Button
        title="Continue"
        color="black"
        textColor="white"
        onPress={() => sendDetails()}
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
    height: 50,
    marginTop: "2.5%",
    marginBottom: "5%",
  },
});

export default CompanyIncome;
