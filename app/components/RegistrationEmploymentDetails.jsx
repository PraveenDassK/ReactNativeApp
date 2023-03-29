import React, { useContext, useEffect, useState } from "react"; 
//import * as React from "react";
import { StyleSheet, View, SafeAreaView, Text, TextInput, Image,Pressable, useWindowDimensions, Dimensions, TouchableWithoutFeedback, Keyboard} from "react-native";
import Screen from "./Screen";
import AuthContext from "../auth/context";
import GlobalStyles from "../../GlobalStyles";
import api from "../api/api_list";
import { Formik } from "formik";
import * as Yup from 'yup';
import { horizontalScale, verticalScale, moderateScale } from "../config/scaling"
import Button from "./AppButton"
import { CheckBox } from '@rneui/themed';
import AuthScreen from "./AuthScreen";

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    phoneNumber: Yup.string().required().min(10).max(10).label("Phone number")
})

const EmploymentDetails = ({SaveDetails}) => {
    const [fulltime, setFulltime] = useState(false);
    const [parttime, setParttime] = useState(false);
    const [unemployed, setUnemployed] = useState(false);
    const [student, setStudent] = useState(false);
    const [other, setOther] = useState(false);

    const handleSubmit = async () => {
        SaveDetails(null,"EmploymentDetails")
    }

    return (
        <Screen>
            <AuthScreen title="Employment details" img="eagleCard" width="70%">
            <Formik
            initialValues={{
                email:'', 
                phoneNumber: ''
            }}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
            >
            {({ handleChange, handleSubmit, errors, setFieldTouched, touched }) => (
                <View style={[styles.component1981, styles.mt14,{marginLeft:horizontalScale(10)}]}>
                    <Text>What's your employment status?</Text>
                    <CheckBox
                        title="Full time"
                        checkedIcon="dot-circle-o"
                        checkedColor="black"
                        uncheckedIcon="circle-o"
                        checked={fulltime}
                        onPress={() => setFulltime(!fulltime)}
                        />
                    <CheckBox
                        title="Part time"
                        checkedIcon="dot-circle-o"
                        checkedColor="black"
                        uncheckedIcon="circle-o"
                        checked={parttime}
                        onPress={() => setParttime(!parttime)}
                        />
                    <CheckBox
                        title="Unemployed"
                        checkedIcon="dot-circle-o"
                        checkedColor="black"
                        uncheckedIcon="circle-o"
                        checked={unemployed}
                        onPress={() => setUnemployed(!unemployed)}
                        />
                    <CheckBox
                        title="Student"
                        checkedIcon="dot-circle-o"
                        checkedColor="black"
                        uncheckedIcon="circle-o"
                        checked={student}
                        onPress={() => setStudent(!student)}
                        />
                    <CheckBox
                        title="Other"
                        checkedIcon="dot-circle-o"
                        checkedColor="black"
                        uncheckedIcon="circle-o"
                        checked={other}
                        onPress={() => setOther(!other)}
                        />
                    
                </View>
                )}
            </Formik>
            <Button title="Continue" color="black" textColor="white" onPress={handleSubmit} />

            
            </AuthScreen>
           
        </Screen>
  );
};

const styles = StyleSheet.create({
});

export default EmploymentDetails;
