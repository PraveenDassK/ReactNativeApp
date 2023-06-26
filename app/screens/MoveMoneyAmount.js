import React, { Fragment, useContext, useEffect, useState } from "react";
import { useIsFocused } from "@react-navigation/native";
import { Text, StyleSheet, View, ActivityIndicator, TextInput } from "react-native";

import AuthContext from "../auth/context";
import apiCall from "../api/apiCall";
import UserIcon from "../components/UserIcon";
import Button from "../components/AppButton";
import { Formik, Field, Form } from "formik";

const MoveMoneyAmount = ({ navigation, route }) => {


    const handleSubmit = (values) => {
        console.log(route.params)
        console.log(values)
        let requestObj = route.params
        requestObj.amount = values.amountToSend
        
        navigation.navigate("MoveMoneyPin", requestObj)

    }

    return (
        <View>
            <View>
                <Text>
                    Send to
                </Text>
                <Text>
                    <Formik
                        initialValues={{
                            amountToSend: "1",
                            message: "(Optional)",
                        }}
                        onSubmit={handleSubmit}
                    >
                        {({ handleChange, handleSubmit, setFieldTouched, values }) => (
                            <View>
                                <Text>Enter the amount you want to send</Text>
                                <TextInput

                                    value={"£" + values.amountToSend}
                                    keyboardType="numeric"
                                    onBlur={() => setFieldTouched("amountToSend")}
                                    onChangeText={(text) => handleChange("amountToSend")(text.replace(/^£/, ""))}
                                />

                                <TextInput
                                    value={values.message}
                                    onBlur={() => setFieldTouched("message")}
                                    onChangeText={(text) => handleChange("message")(text.replace(/^£/, ""))}
                                />

                                <Button
                                    title="Continue"
                                    color="black"
                                    textColor="white"
                                    onPress={handleSubmit}
                                />
                            </View>
                        )}
                    </Formik>
                </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    flatListContent: {
        paddingHorizontal: 10,
        paddingBottom: 10,
    },
    itemContainer: {
        backgroundColor: '#e5e5e5',
        padding: 10,
        marginBottom: 10,
        width: '100%',
    },
});

export default MoveMoneyAmount;
