import React, { useContext, useEffect, useState } from "react";
import {
    Text,
    TextInput,
    StyleSheet,
    View,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Keyboard,
} from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import { Dropdown } from "react-native-element-dropdown";
import Button from "../components/AppButton";
import ErrorMessage from "../components/forms/ErrorMessage";
import AuthContext from "../auth/context";

import { verticalScale } from "../config/scaling";

import KeyboardAvoider from "../components/KeyboardAvoider";

import { moderateScale } from '../config/scaling'


const validationSchema = Yup.object().shape({
    accountName: Yup.string().required().min(1).max(30).label("Account name"),
    phoneNumber: Yup.string()
      .required()
      .matches(/^[0-9]+$/, "Phone number must be digits")
      .min(9)
      .max(11)
      .label("Phone number"),
  
    sortCode: Yup.string()
      .required()
      .matches(/^[0-9]+$/, "Sort code must be digits")
      .min(6, "Must be exactly 6 digits")
      .max(6, "Must be exactly 6 digits")
      .label("Sort code"),
    accNum: Yup.string()
      .required()
      .matches(/^[0-9]+$/, "Account number must be digits")
      .min(8, "Must be exactly 8 digits")
      .max(8, "Must be exactly 8 digits")
      .label("Account number"),
  });
  
  const items = [
    {
      id: 2,
      label: "Phone Number",
      placeholder: "Enter phone number",
      initialValue: "phoneNumber",
    },
    {
      id: 3,
      label: "Account Owner Name",
      placeholder: "Enter owner name",
      initialValue: "accountName",
    },
    {
      id: 4,
      label: "Account Number",
      placeholder: "Enter Account number",
      initialValue: "accNum",
    },
    {
      id: 5,
      label: "Sort Code",
      placeholder: "Enter sort code",
      initialValue: "sortCode",
    },
  ];
  
const DirectDebitForm = ({ navigation }) => {
    const [directDebits, setDirectDebits] = useState([
        {
            name: "Netflic",
            date: "1687339",
            amount: 5,
        }
    ])
    useEffect(() => {
        //loadData()
    }, [])

    const handleSubmit = async ({
        accountName,
        phoneNumber,
        accNum,
        sortCode,
    }) => {

    };


    return (
        <KeyboardAvoider>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={{ flex: 1, paddingVertical: verticalScale(60) }}>
                    <Formik
                        initialValues={{
                            accountName: "",
                            phoneNumber: "",
                            sortCode: "",
                            accNum: "",
                        }}
                        onSubmit={handleSubmit}
                        validationSchema={validationSchema}
                    >
                        {({
                            handleChange,
                            handleSubmit,
                            errors,
                            setFieldTouched,
                            touched,
                        }) => (
                            <>
                                <View>
                                    {items.map((item, index) => (
                                        <View
                                            key={item.id}
                                            style={{
                                                width: "90%",
                                                marginLeft: "5%",
                                                marginBottom: "5%",
                                            }}
                                        >
                                            <Text style={{ fontSize: 14 }}>{item.label}</Text>
                                            <TextInput
                                                onBlur={() => setFieldTouched(item.initialValue)}
                                                onChangeText={handleChange(item.initialValue)}
                                                // placeholder={item.placeholder}
                                                style={{ fontSize: 24, marginTop: "1%" }}
                                            ></TextInput>
                                            <View
                                                style={{
                                                    height: 1,
                                                    backgroundColor: "black",
                                                    marginTop: "1%",
                                                    opacity: 0.7,
                                                }}
                                            />
                                            <ErrorMessage
                                                error={errors[item.initialValue]}
                                                visible={touched[item.initialValue]}
                                            />
                                        </View>
                                    ))}
                                </View>
                                <View
                                    style={[
                                        { flex: 1, justifyContent: "flex-end" }
                                    ]}
                                >
                                    <TouchableOpacity style={styles.button}>
                                        <Button title="Confirm" onPress={handleSubmit} />
                                    </TouchableOpacity>
                                </View>
                            </>
                        )}
                    </Formik>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoider>
    )
}

export default DirectDebitForm

const styles = StyleSheet.create({
    comingSoonText: {
        textTransform: "uppercase",
        fontSize: moderateScale(80),
        fontWeight: "bold",
        textAlign: "center",

    },
    mainContainer: {
        flex: 1,
        justifyContent: "center",
        alignContent: "center",

    }
})