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

const CompanyOperations = ({SaveDetails}) => {
    const [isNewOwnership, setIsNewOwnership] = useState(false);
    const [isResumingTrading, setIsResumingTrading] = useState(false);
    const [isZeroToSixMonths, setIsZeroToSixMonths] = useState(false);
    const [isSixMonthsToOneYear, setIsSixMonthsToOneYear] = useState(false);
    const [isOneToTwoYears, setIsOneToTwoYears] = useState(false);
    const [isTwoToFiveYears, setIsTwoToFiveYears] = useState(false);
    const [isFiveToTenYears, setIsFiveToTenYears] = useState(false);
    const [isTenPlusYears, setIsTenPlusYears] = useState(false);

    /**
     * @dev This sends the String of the 
     */
    const sendDetails = (type) => {
        SaveDetails(null,"CompanyOperations")
    }

    return (
        <Screen>
            <Text>How long have you been operating?</Text>
            <Formik
            onSubmit={(values) => sendData(values)}
            >
            {({ handleChange, handleSubmit, setFieldTouched}) => (
                <View style={[styles.component1981, styles.mt14,{marginLeft:horizontalScale(10)}]}>
                    <Text>Enter one that applies</Text>

                    <CheckBox
                    title="New ownership"
                    checkedIcon="dot-circle-o"
                    uncheckedIcon="circle-o"
                    checked={isNewOwnership}
                    onPress={() => setIsNewOwnership(!isNewOwnership)}
                    />
                    <CheckBox
                    title="Resuming trading"
                    checkedIcon="dot-circle-o"
                    uncheckedIcon="circle-o"
                    checked={isResumingTrading}
                    onPress={() => setIsResumingTrading(!isResumingTrading)}
                    />
                    <CheckBox
                    title="0 - 6 Months"
                    checkedIcon="dot-circle-o"
                    uncheckedIcon="circle-o"
                    checked={isZeroToSixMonths}
                    onPress={() => setIsZeroToSixMonths(!isZeroToSixMonths)}
                    />
                    <CheckBox
                    title="6 Months - 1 Year"
                    checkedIcon="dot-circle-o"
                    uncheckedIcon="circle-o"
                    checked={isSixMonthsToOneYear}
                    onPress={() => setIsSixMonthsToOneYear(!isSixMonthsToOneYear)}
                    />
                    <CheckBox
                    title="1 - 2 Years"
                    checkedIcon="dot-circle-o"
                    uncheckedIcon="circle-o"
                    checked={isOneToTwoYears}
                    onPress={() => setIsOneToTwoYears(!isOneToTwoYears)}
                    />
                    <CheckBox
                    title="2 - 5 Years"
                    checkedIcon="dot-circle-o"
                    uncheckedIcon="circle-o"
                    checked={isTwoToFiveYears}
                    onPress={() => setIsTwoToFiveYears(!isTwoToFiveYears)}
                    />
                    <CheckBox
                    title="5 - 10 Years"
                    checkedIcon="dot-circle-o"
                    uncheckedIcon="circle-o"
                    checked={isFiveToTenYears}
                    onPress={() => setIsFiveToTenYears(!isFiveToTenYears)}
                    />
                    <CheckBox
                    title="10 + Years"
                    checkedIcon="dot-circle-o"
                    uncheckedIcon="circle-o"
                    checked={isTenPlusYears}
                    onPress={() => setIsTenPlusYears(!isTenPlusYears)}
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

export default CompanyOperations;
