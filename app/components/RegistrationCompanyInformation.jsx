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

const CompanyInformation = ({SaveDetails}) => {
    const [name, setName] = useState("");
    const [type, setType] = useState(null)
    const [isFocus, setIsFocus] = useState(false);

    const handleSubmit = ({details}) => {
        SaveDetails(details,"CompanyInformation")
    }

    return (
        <Screen>
            <Text>Tell us something more</Text>
            <Formik
                initialValues={{
                    details:''
                }}
                onSubmit={handleSubmit}
            >
            {({ handleChange, handleSubmit, setFieldTouched}) => (
                <View style={[styles.component1981, styles.mt14,{marginLeft:horizontalScale(10)}]}>
                    <Text>About your business</Text>
                    <TextInput 
                        keyboardType="Text" 
                        onBlur={() => setFieldTouched("details")}
                        onChangeText={handleChange("details")}
                        style={[styles.component1981Child, styles.childBorder, {padding:10}]} 
                    />
                    <Button title="Continue" color="babyBlue" onPress={() => handleSubmit()} />
                  </View>                  
                )}
            </Formik>
        </Screen>
  );
};

const styles = StyleSheet.create({
});

export default CompanyInformation;
