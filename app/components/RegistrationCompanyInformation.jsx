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

const CompanyInformation = ({SaveDetails}) => {
    const [name, setName] = useState("");
    const [type, setType] = useState(null)
    const [isFocus, setIsFocus] = useState(false);

    const handleSubmit = ({details}) => {
        SaveDetails(details,"CompanyInformation")
    }

    return (
        <Screen>
            <AuthScreen title="Tell us something more" img="turtleCard">
            <Formik
                initialValues={{
                    details:''
                }}
                onSubmit={handleSubmit}
            >
            {({ handleChange, handleSubmit, setFieldTouched}) => (
                <View style={[styles.component1981, styles.mt14]}>
                    <Text>About your business</Text>
                    <TextInput 
                        editable
                        multiline
                        numberOfLines={4}
                        maxLength={50}
                        placeholder="Write about your business in about 50 words..."
                        placeholderTextColor="grey"
                        keyboardType="Text" 
                        onBlur={() => setFieldTouched("details")}
                        onChangeText={handleChange("details")}
                        style={[styles.component1981Child, styles.childBorder,]} 
                    />
                    <Button title="Continue" color="black" textColor="white" onPress={() => handleSubmit()} />
                  </View>                  
                )}
            </Formik>
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
        height: 100,
        marginTop: "2.5%",
        marginBottom: "5%"
      }
});

export default CompanyInformation;
