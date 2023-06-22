import React, { useContext, useEffect, useState } from "react";
//import * as React from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  Text,
  TextInput,
  Image,
  Pressable,
  useWindowDimensions,
  Dimensions,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import Screen from "./Screen";
import AuthContext from "../auth/context";
import GlobalStyles from "../../GlobalStyles";
import api from "../api/api_list";
import { Formik } from "formik";
import * as Yup from "yup";
import {
  horizontalScale,
  verticalScale,
  moderateScale,
} from "../config/scaling";
import Button from "./AppButton";
import colors from "../config/colors";
import AuthScreen from "./AuthScreen";
import RegistartionDirectorForm from "./RegistartionDirectorForm";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  phoneNumber: Yup.string().required().min(10).max(10).label("Phone number"),
});

const RegistrationDirectororPartner = ({ SaveDetails, navigation,onPress,setRole }) => {
  const handleSubmit = async (type) => {
    console.log(type);
    // SaveDetails(type)
    navigation.navigate("Directororpartner");
  };
  const handleBack = () => {
    console.log("!");
    navigation.navigate("SplashAnimation");
  };
  return (
    <AuthScreen
      title="Directors or Partners"
      img="penguinCard"
      handleBack={handleBack}
    >
      <View style={{ marginBottom:20 }}>
        <Text style={{ textAlign: "center" }}>
          Carbonyte would like to know details of any Associates - usually the
          Directors or Partners
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Director"
          textColor="white"
          color="#212529"
          style={styles.buttonColor}
          onPress={() => console.log("Personal")}
        />
        <Pressable
          style={styles.plusButton}
          onPress={()=>{ onPress("Director")}}
        >
          <Text style={{fontSize:30,fontWeight:"bold"}}>+</Text> 
        </Pressable>
      </View>
      <View style={styles.buttonContainer}>
      <Button
        title="Beneficial owners"
        textColor="white"
        color="#212529"
        style={styles.buttonColor}
        onPress={() => handleSubmit("Business")}
      />
        <Pressable
          style={styles.plusButton}
          onPress={() => console.log("Personal")}
        >
          <Text style={{fontSize:30,fontWeight:"bold"}}>+</Text> 
        </Pressable>
      </View>
      <View style={styles.buttonContainer}>
      <Button
        title="Controlling Interests"
        textColor="white"
        color="#212529"
        style={styles.buttonColor}
        onPress={() => handleSubmit("Business")}
      />
        <Pressable
          style={styles.plusButton}
          onPress={() => console.log("Personal")}
        >
          <Text style={{fontSize:30,fontWeight:"bold"}}>+</Text> 
        </Pressable>
      </View>
    </AuthScreen>
  );
};

const styles = StyleSheet.create({
  buttonColor: {
    backgroundColor: "#212529",
    width: "80%",
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 20,
    alignItems: "center",
  },
  plusButton: {
    height:50,
    width: 50,
    color: "#000000",
    // padding:8,
    borderColor:"#2B2B2B",
    borderRadius: 8,
    borderWidth:1,
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    fontSize:20
  },
});

export default RegistrationDirectororPartner;
