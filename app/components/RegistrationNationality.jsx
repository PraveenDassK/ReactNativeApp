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
  TouchableOpacity,
  Keyboard,
} from "react-native";
import Screen from "./Screen";
import AuthContext from "../auth/context";
import GlobalStyles from "../../GlobalStyles";
import api from "../api/api_list";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import {
  horizontalScale,
  verticalScale,
  moderateScale,
} from "../config/scaling";
import Button from "./AppButton";
import colors from "../config/colors";
import AuthScreen from "./AuthScreen";
import ErrorMessage from "./forms/ErrorMessage";
import { CountryPicker } from "react-native-country-codes-picker";

const Nationality = ({ SaveDetails, setScreenToShow }) => {
  const [showNationality, setNationalityShow] = useState(false);
  const [showBirth, setBirthShow] = useState(false);
  const [nationality, setNationality] = useState('');
  const [birth, setBirth] = useState('');

  const handleSubmit = () => {
    
    SaveDetails(
      {
        country: birth,
        nationality: nationality,
      },
      "Nationality"
    );
  };
  const handleBack = () => {
    
    setScreenToShow("EmailAndPhone");
  };

  return (
    <AuthScreen title="Where are you from?" img="lion" handleBack={handleBack}>
      <Formik
        initialValues={{
          country: "",
          nationality: "",
        }}
        onSubmit={handleSubmit}
      >
        {({ handleChange, handleSubmit, errors, setFieldTouched, touched }) => (
          <View
            style={[
              styles.component1981,
              styles.mt14,
              { marginLeft: horizontalScale(10) },
            ]}
          >
            <Text>Country of birth</Text>

            <TouchableOpacity
              onPress={() => setBirthShow(true)}
              style={{
                width: '100%',
                height: 60,
                backgroundColor: 'white',
                borderWidth: 1,
                padding: 10,
              }}
            >
              <Text style={{
                color: 'black',
                fontSize: 20
              }}>
                {birth}
              </Text>
            </TouchableOpacity>
            <CountryPicker
              show={showBirth}
              // when picker button press you will get the country object with dial code
              pickerButtonOnPress={(item) => {
                
                setBirth(item.name.en);
                setBirthShow(false);
              }}
            />

            <ErrorMessage error={errors.country} visible={touched.country} />
            <Text>Nationality</Text>

            <TouchableOpacity
              onPress={() => setNationalityShow(true)}
              style={{
                width: '100%',
                height: 60,
                backgroundColor: 'white',
                borderWidth: 1,
                padding: 10,
              }}
            >
              <Text style={{
                color: 'black',
                fontSize: 20
              }}>
                {nationality}
              </Text>
            </TouchableOpacity>
            <CountryPicker
              show={showNationality}
              // when picker button press you will get the country object with dial code
              pickerButtonOnPress={(item) => {
                setNationality(item.name.en);
                setNationalityShow(false);
              }}
            />

            <ErrorMessage
              error={errors.nationality}
              visible={touched.nationality}
            />
            <Button
              title="continue"
              textColor="white"
              color="black"
              onPress={handleSubmit}
            />
          </View>
        )}
      </Formik>
    </AuthScreen>
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
    marginBottom: "5%",
  },
});

export default Nationality;
