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
import apiLogin from "../api/apiLogin";
import { Formik } from "formik";
import * as Yup from "yup";
import {
  horizontalScale,
  verticalScale,
  moderateScale,
} from "../config/scaling";
import Button from "./AppButton";
import { Dropdown } from "react-native-element-dropdown";
import { CheckBox } from "@rneui/themed";

const Postcode = ({ AddAddress }) => {
  const [addressData, setAddressData] = useState([]);
  const [address, setAddress] = useState(null);

  /**
   * @dev This finds the correct address from the postcode
   * @param {Str} postcode The postcode entered
   */
  const handleSubmit = async ({ postcode }) => {
    // const response = await apiLogin.GetAddressByPostCode(postcode)
    // 
    // setAddressData(response)

    // Remove this on live
    const dummyAddress = [
      {
        label: "Fake address",
        value: {
          address1: "123 street",
          address2: "456 house",
          area: "Area 5",
          city: "City 6",
          locale: "en_GB",
          postcode: postcode,
        },
      },
    ];
    setAddressData(dummyAddress);
  };

  const sendData = () => {
    AddAddress(address);
  };
  

  return (
    <>
      <Formik
        initialValues={{
          postcode: "",
        }}
        onSubmit={handleSubmit}
      >
        {({ handleChange, handleSubmit, errors, setFieldTouched, touched }) => (
          <View style={[styles.component1981, styles.mt14]}>
            <Text>Enter your postcode</Text>
            <TextInput
              autoCapitalize="none"
              textContentType="postcode"
              keyboardType="postcode"
              onBlur={() => setFieldTouched("postcode")}
              onChangeText={handleChange("postcode")}
              style={[styles.childBorder, { padding: 10 }]}
            />
            <Button
              title="search"
              textColor="black"
              color="white"
              onPress={handleSubmit}
            />

            {/* <Button title="Search"   onPress={handleSubmit} /> */}
          </View>
        )}
      </Formik>
      {addressData?.length > 0 ? (
        <View>
          <Dropdown
            style={[styles.dropdown]}
            containerStyle={styles.dropdownContainer}
            data={addressData}
            maxHeight={100}
            labelField="label"
            valueField="value"
            placeholder={"Search your address"}
            value={address?.address1}
            onChange={(item) => {
              setAddress(item.value);
            }}
          />
          {address ? (
            <Button
              title="Add"
              textColor="white"
              color="black"
              onPress={() => sendData()}
            />
          ) : null}
        </View>
      ) : (
        <View />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  dropdown: {
    borderRadius: 10,
    borderWidth: 0.5,
    height: 50,
    paddingHorizontal: 8,
    marginBottom: "5%",
    marginTop: "2.5%",
    opacity: 1,
    borderColor: "#D3D3D3",
  },
  dropdownContainer: {
    borderBottomEndRadius: 10,
    borderBottomStartRadius: 10,
  },
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

export default Postcode;
