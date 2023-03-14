import React, { useContext, useEffect, useState } from "react"; 
import { StyleSheet, View, SafeAreaView, Text, TextInput, Image,Pressable, useWindowDimensions, Dimensions, TouchableWithoutFeedback, Keyboard} from "react-native";
import Screen from "./Screen";
import AuthContext from "../auth/context";
import GlobalStyles from "../../GlobalStyles";
import apiLoginRegister from "../api/apiLogin";
import * as Yup from 'yup';
import { horizontalScale, verticalScale, moderateScale } from "../config/scaling"

import Button from "./Button"
import { Formik, Field, Form } from 'formik';
import { Dropdown } from 'react-native-element-dropdown';
import { CheckBox } from '@rneui/themed';

const CompanyIncome = ({SaveDetails}) => {
    const [salesRevenue, setSalesRevenue] = useState(false);
    const [subscriptionRevenue, setSubscriptionRevenue] = useState(false);
    const [advertisingRevenue, setAdvertisingRevenue] = useState(false);
    const [affiliateIncome, setAffiliateIncome] = useState(false);
    const [licensingFranchisingRevenue, setLicensingFranchisingRevenue] = useState(false);
    const [rentalIncome, setRentalIncome] = useState(false);
    const [consultancyServicesIncome, setConsultancyServicesIncome] = useState(false);
    const [grantsSubsidiesIncome, setGrantsSubsidiesIncome] = useState(false);
    const [crowdfundingIncome, setCrowdfundingIncome] = useState(false);

    const sendDetails = (type) => {

        
        SaveDetails(null,"CompanyIncome")
    }

    return (
        <Screen>
            <Text>Your company income</Text>
            <Formik
            onSubmit={(values) => sendData(values)}
            >
            {({ handleChange, handleSubmit, setFieldTouched}) => (
                <View style={[styles.component1981, styles.mt14,{marginLeft:horizontalScale(10)}]}>
                    <Text>Enter all that apply</Text>
                    <CheckBox
                        title="Sales revenue"
                        checkedIcon="dot-circle-o"
                        uncheckedIcon="circle-o"
                        checked={salesRevenue}
                        onPress={() => setSalesRevenue(!salesRevenue)}
                    />
                    <CheckBox
                        title="Subscription revenue"
                        checkedIcon="dot-circle-o"
                        uncheckedIcon="circle-o"
                        checked={subscriptionRevenue}
                        onPress={() => setSubscriptionRevenue(!subscriptionRevenue)}
                    />
                    <CheckBox
                        title="Advertising revenue"
                        checkedIcon="dot-circle-o"
                        uncheckedIcon="circle-o"
                        checked={advertisingRevenue}
                        onPress={() => setAdvertisingRevenue(!advertisingRevenue)}
                    />
                    <CheckBox
                        title="Affiliate income"
                        checkedIcon="dot-circle-o"
                        uncheckedIcon="circle-o"
                        checked={affiliateIncome}
                        onPress={() => setAffiliateIncome(!affiliateIncome)}
                    />
                    <CheckBox
                        title="Licensing or franchising"
                        checkedIcon="dot-circle-o"
                        uncheckedIcon="circle-o"
                        checked={licensingFranchisingRevenue}
                        onPress={() => setLicensingFranchisingRevenue(!licensingFranchisingRevenue)}
                    />
                    <CheckBox
                        title="Rental income"
                        checkedIcon="dot-circle-o"
                        uncheckedIcon="circle-o"
                        checked={rentalIncome}
                        onPress={() => setRentalIncome(!rentalIncome)}
                    />
                    <CheckBox
                        title="Consultancy or professional services"
                        checkedIcon="dot-circle-o"
                        uncheckedIcon="circle-o"
                        checked={consultancyServicesIncome}
                        onPress={() => setConsultancyServicesIncome(!consultancyServicesIncome)}
                    />
                    <CheckBox
                        title="Grants and subsidies"
                        checkedIcon="dot-circle-o"
                        uncheckedIcon="circle-o"
                        checked={grantsSubsidiesIncome}
                        onPress={() => setGrantsSubsidiesIncome(!grantsSubsidiesIncome)}
                    />
                    <CheckBox
                        title="Crowdfunding"
                        checkedIcon="dot-circle-o"
                        uncheckedIcon="circle-o"
                        checked={crowdfundingIncome}
                        onPress={() => setCrowdfundingIncome(!crowdfundingIncome)}
                    />
                  </View>                  
                )}
            </Formik>
            <Button title="Continue" color="babyBlue" onPress={() => sendDetails()} />
        </Screen>
  );
};

const styles = StyleSheet.create({
});

export default CompanyIncome;
