import React, { useContext, useEffect, useState } from "react"; 
import { StyleSheet, View, SafeAreaView, Text, TextInput, Image,Pressable, useWindowDimensions, Dimensions, TouchableWithoutFeedback, Keyboard} from "react-native";
import Screen from "./Screen";
import AuthContext from "../auth/context";
import GlobalStyles from "../../GlobalStyles";
import apiLoginRegister from "../api/apiLogin";
import * as Yup from 'yup';
import { horizontalScale, verticalScale, moderateScale } from "../config/scaling"

import Button from "./AppButton"
import { Formik, Field, Form } from 'formik';
import { Dropdown } from 'react-native-element-dropdown';
import { CheckBox } from '@rneui/themed';
import AuthScreen from "./AuthScreen";

const CompanyUsage = ({SaveDetails,setScreenToShow}) => {
    const [name, setName] = useState("");
    const [isChecked, setChecked] = useState(false);
    const [outsideEU, setOutsideEU] = useState(false);

    const sendDetails = (type) => {
        SaveDetails(null,"CompanyUsage")
    }
    const handleBack = () =>{
        console.log("!")
        setScreenToShow("RegistrationNumber")
      }
      
    return (
        <Screen>
            <AuthScreen title="How would you use this account" img="eagleCard" handleBack = {handleBack}>
            <Formik
                initialValues={{
                    customers:'', 
                    outsideEU: false
                }}
                onSubmit={(values) => sendData(values)}
            >
            {({ handleChange, handleSubmit, setFieldTouched}) => (
                <View style={[styles.component1981, styles.mt14,]}>
                    <Text>Who are your main customers</Text>
                    <TextInput 
                        keyboardType="Text" 
                        onBlur={() => setFieldTouched("customers")}
                        onChangeText={handleChange("customers")}
                        style={[styles.component1981Child, styles.childBorder, {padding:10}]} 
                    />
                    <CheckBox
                        title="Are there any customers outside the EU?"
                        checkedIcon="dot-circle-o"
                        uncheckedIcon="circle-o"
                        checkedColor="black"
                        checked={isChecked}
                        onPress={() => handleChange(outsideEU)}
                        />
                  </View>                  
                )}
            </Formik>
            <Button title="Continue" color="black" textColor="white" onPress={() => sendDetails()} />
            </AuthScreen>
        </Screen>
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
        marginBottom: "5%"
      }
});

export default CompanyUsage;
