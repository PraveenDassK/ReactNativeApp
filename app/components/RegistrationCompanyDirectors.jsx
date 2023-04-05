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
import ErrorMessage from "./forms/ErrorMessage";

const validationSchema = Yup.object().shape({
    fullName: Yup.string().required().min(1).max(11).label("Full name"),
    position: Yup.string().required().min(1).max(11).label("Position"),
    fullName2: Yup.string().required().min(1).max(11).label("Full name"),
    position2: Yup.string().required().min(1).max(11).label("Position")
  })

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
                    fullName:'',
                    position:'',
                    fullName2:'',
                    position2:'',
                }}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
            {({ handleChange, handleSubmit, errors, setFieldTouched, touched}) => (
                <View style={[styles.component1981, styles.mt14]}>
                    
                    <Text>Full name</Text>
                    <TextInput 
                        editable
                        numberOfLines={1}
                        maxLength={50}
                        placeholder=""
                        placeholderTextColor="grey"
                        keyboardType="Text" 
                        onBlur={() => setFieldTouched("fullName")}
                        onChangeText={handleChange("fullName")}
                        style={[styles.component1981Child, styles.childBorder,]} 
                    />
                     <ErrorMessage error={errors.fullName} visible={touched.fullName}/>
                    <Text>Position</Text>
                    <TextInput 
                        editable
                        multiline
                        numberOfLines={1}
                        maxLength={50}
                        placeholder=""
                        placeholderTextColor="grey"
                        keyboardType="Text" 
                        onBlur={() => setFieldTouched("position")}
                        onChangeText={handleChange("position")}
                        style={[styles.component1981Child, styles.childBorder,]} 
                    />
                     <ErrorMessage error={errors.position} visible={touched.position}/>
                    <Text>Full name</Text>
                    <TextInput 
                        editable
                        multiline
                        numberOfLines={1}
                        maxLength={50}
                        placeholder=""
                        placeholderTextColor="grey"
                        keyboardType="Text" 
                        onBlur={() => setFieldTouched("fullName2")}
                        onChangeText={handleChange("fullName2")}
                        style={[styles.component1981Child, styles.childBorder,]} 
                    />
                     <ErrorMessage error={errors.fullName2} visible={touched.fullName2}/>
                    <Text>Position</Text>
                    <TextInput 
                        editable
                        multiline
                        numberOfLines={1}
                        maxLength={50}
                        placeholder=""
                        placeholderTextColor="grey"
                        keyboardType="Text" 
                        onBlur={() => setFieldTouched("position2")}
                        onChangeText={handleChange("position2")}
                        style={[styles.component1981Child, styles.childBorder,]} 
                    />
                     <ErrorMessage error={errors.position2} visible={touched.position2}/>
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
