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

const CompanyUsage = ({SaveDetails}) => {
    const [name, setName] = useState("");
    const [isChecked, setChecked] = useState(false);

    const sendDetails = (type) => {
        SaveDetails(null,"CompanyUsage")
    }

    return (
        <Screen>
            <Text>How would you use this account</Text>
            <Formik
            onSubmit={(values) => sendData(values)}
            >
            {({ handleChange, handleSubmit, setFieldTouched}) => (
                <View style={[styles.component1981, styles.mt14,{marginLeft:horizontalScale(10)}]}>
                    <Text>Who are your main customers</Text>
                    <TextInput 
                        keyboardType="Text" 
                        onBlur={() => setFieldTouched("phoneNumber")}
                        onChangeText={setName("phoneNumber")}
                        style={[styles.component1981Child, styles.childBorder, {padding:10}]} 
                    />
                    <CheckBox
                        title="Are there any customers outside the EU?"
                        checkedIcon="dot-circle-o"
                        uncheckedIcon="circle-o"
                        checked={isChecked}
                        onPress={() => setChecked(!isChecked)}
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

export default CompanyUsage;
