import React, { useContext, useEffect, useState } from "react";
import {
    Text,
    TextInput,
    StyleSheet,
    View,
    TouchableOpacity,
    Pressable,
    FlatList,
} from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import { Dropdown } from "react-native-element-dropdown";
import Button from "../components/AppButton";
import ErrorMessage from "../components/forms/ErrorMessage";
import AuthContext from "../auth/context";

import Icon from "../components/Icon";

import apiBeneficiaries from "../api/apiBeneficiaries"
import {
    TransactionBody,
    TransactionHead,
    TransactionFooter,
} from "../components/transactions";

import { moderateScale } from '../config/scaling'

const DirectDebits = ({ navigation }) => {
    const [directDebits, setDirectDebits] = useState([
        {
            name: "Netflix",
            date: "1687339",
            amount: 5,
        }
    ])
    useEffect(() => {
        //loadData()
    }, [])

    return (
        <View style={styles.mainContainer}>
            <View>
                <Text>
                    Direct debits
                </Text>
                <View style={styles.containerSpacing}>
                    <TransactionHead headerTitle="Carbon transactions" />
                    {directDebits?.map(({ name, date, amount }) => (
                        <TransactionBody
                            name={`${name}`}
                            date={date}
                            token={amount}
                        />
                    ))}
                    <TransactionFooter
                        number={directDebits.length}
                        total={5}
                        onSee={() => navigation.navigate("VirtualEcoSystem")} />
                </View>
            </View>

            <View>
                <Button
                    title={"Make a new direct debit"}
                    onPress={() => navigation.navigate("DirectDebitForm")}
                />
            </View>
        </View>
    )
}

export default DirectDebits

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