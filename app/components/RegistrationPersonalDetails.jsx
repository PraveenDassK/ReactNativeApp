import React, { useContext, useEffect, useState } from "react"; 
//import * as React from "react";
import { StyleSheet, View, SafeAreaView, Text, TextInput, Image,Pressable, useWindowDimensions, Dimensions, TouchableWithoutFeedback, Keyboard} from "react-native";
import Screen from "./Screen";
import AuthContext from "../auth/context";
import GlobalStyles from "../../GlobalStyles";
import api from "../api/api_list";
import * as Yup from 'yup';
import { horizontalScale, verticalScale, moderateScale } from "../config/scaling"

import Button from "./Button"
import { Formik, Field, Form } from 'formik';
import { Dropdown } from 'react-native-element-dropdown';
import { CheckBox } from '@rneui/themed';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from "moment";

const PersonalDetails = ({SaveDetails}) => {
    
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState("");
    const [gender, setGender] = useState("");
    const [birthday, setBirthday] = useState(moment().toDate());
    const [privacyPolicy, setPrivacyPolicy] = useState(false);
    const [isFocus, setIsFocus] = useState(false);

    //Date
    const [dob, setDOB] = useState(new Date(1598051730000));
    const [viewDate, setView] = useState(false);

    const onChange = (event, selectedDate) => {
      const currentDate = selectedDate;
      setBirthday(currentDate);
      setView(false)
    };

    const genderData = [{
        label:"Male",
        value:"Male"
    },
    {
        label:"Female",
        value:"Female"
    },
    {
        label:"Other",
        value:"Other"
    }]

  /**
   * @dev Data is validated here
   * @notice This checks if the fail event is True
   * @returns If an Item has failed validation it returns null
   * This will not trigger the save details
   */
  const sendDetails = () => {
    //Checs if the names have been filled
    //If they haven't then ask to fill out
    if(!firstName && !lastName){
      alert("Please fill in your name")
      return;
    }
    //Then check if the privacy policy and gender box has been filled
    if(!gender){
      alert("Please finish filling in the form")
      return;
    }
    if(!privacyPolicy){
      alert("Privacy policy must be accepted")
      return
    }
    //Then check for birthdate
    //Users must be over 18
    const difference = Math.abs(moment(birthday).diff(moment())/1000)
    const age = Math.floor(difference / 86400 / 365)
    console.log(age)
    if(age < 18){
      //alert("Must be 18 or over")
      //return;
    }
    console.log("!")
    SaveDetails({
      firstName: firstName,
      lastName: lastName,
      gender: gender,
      //birthday: moment(birthday).format('DD-MM-YYYY'),
      privacyPolicy, privacyPolicy
    },"PersonalDetails")
  }

    return (
        <Screen>
            <Text>A bit about you</Text>
            <Formik
            onSubmit={(values) => sendData(values)}
            >
            {({ handleChange, handleSubmit, setFieldTouched}) => (
                <View style={[styles.component1981, styles.mt14,{marginLeft:horizontalScale(10)}]}>
                    <Text>First name</Text>
                    <TextInput 
                        keyboardType="Text" 
                        onBlur={() => setFieldTouched("phoneNumber")}
                        onChangeText={setFirstName("phoneNumber")}
                        style={[styles.component1981Child, styles.childBorder, {padding:10}]} 
                    />
                    <Text>Last name</Text>
                    <TextInput 
                        keyboardType="Text" 
                        onBlur={() => setFieldTouched("phoneNumber")}
                        onChangeText={setLastName("phoneNumber")}
                        style={[styles.component1981Child, styles.childBorder, {padding:10}]} 
                    />
                    <Text>Gender</Text>
                    <Dropdown
                        data={genderData}
                        maxHeight={100}
                        labelField="label"
                        valueField="value"
                        placeholder={'Select an option'}
                        value={gender}
                        onChange={item => {
                            setGender(item.value);
                            setIsFocus(false);
                        }}
                    />
                    <Text>Date of Birth</Text>
                    <Button title="Set" color="babyBlue" onPress={() => setView(true)} />

                    {viewDate?
                    <DateTimePicker
                        testID="dateTimePicker"
                        value={dob}
                        mode="date"
                        display="spinner"
                        onChange={onChange}
                    />: null}

                    <CheckBox
                        title="I have read and accepted the privacy policy"
                        checkedIcon="dot-circle-o"
                        uncheckedIcon="circle-o"
                        checked={privacyPolicy}
                        onPress={() => setPrivacyPolicy(!privacyPolicy)}
                        />
                    {
                        //<Button title="Continue" color="babyBlue" onPress={handleSubmit} />
                    }
                  </View>                  
                )}
            </Formik>
            <Button 
                title="Continue" 
                color="babyBlue" 
                onPress={() => sendDetails()
            }/>

        </Screen>
  );
};

const styles = StyleSheet.create({
});

export default PersonalDetails;
