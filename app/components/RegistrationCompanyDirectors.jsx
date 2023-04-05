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

const CompanyDirectors = ({SaveDetails,setScreenToShow}) => {
    const [name, setName] = useState("");
    const [type, setType] = useState(null)
    const [isFocus, setIsFocus] = useState(false);

    const handleSubmit = ({details}) => {
        SaveDetails(details,"CompanyDirectors")
    }
    const handleBack = () =>{
        console.log("!")
        setScreenToShow("CompanyUsage")
      }
    return (
        <Screen>
            <AuthScreen title="Directors or Partners" img="bear" handleBack = {handleBack}>            
            <Text>
                Carbonyte would like to know the details of two of your partners or directors
            </Text>

            <Formik
                initialValues={{
                    details:''
                }}
                onSubmit={handleSubmit}
            >
            {({ handleChange, handleSubmit, setFieldTouched}) => (
                <View style={[styles.component1981, styles.mt14]}>
                    
                    <Text>Full name</Text>
                    <TextInput 
                        editable
                        numberOfLines={1}
                        maxLength={50}
                        placeholder=""
                        placeholderTextColor="grey"
                        keyboardType="Text" 
                        onBlur={() => setFieldTouched("details")}
                        onChangeText={handleChange("details")}
                        style={[styles.component1981Child, styles.childBorder,]} 
                    />
                    
                    <Text>Position</Text>
                    <TextInput 
                        editable
                        multiline
                        numberOfLines={1}
                        maxLength={50}
                        placeholder=""
                        placeholderTextColor="grey"
                        keyboardType="Text" 
                        onBlur={() => setFieldTouched("details")}
                        onChangeText={handleChange("details")}
                        style={[styles.component1981Child, styles.childBorder,]} 
                    />

                    <Text>Full name</Text>
                    <TextInput 
                        editable
                        multiline
                        numberOfLines={1}
                        maxLength={50}
                        placeholder=""
                        placeholderTextColor="grey"
                        keyboardType="Text" 
                        onBlur={() => setFieldTouched("details")}
                        onChangeText={handleChange("details")}
                        style={[styles.component1981Child, styles.childBorder,]} 
                    />

                    <Text>Position</Text>
                    <TextInput 
                        editable
                        multiline
                        numberOfLines={1}
                        maxLength={50}
                        placeholder=""
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
        height: 40,
        marginTop: "2.5%",
        marginBottom: "5%"
      }
});

export default CompanyDirectors;
