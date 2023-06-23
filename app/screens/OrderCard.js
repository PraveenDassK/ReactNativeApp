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

import { moderateScale } from '../config/scaling'

const Teams = ({ navigation }) => {

    useEffect(() => {
        // loadData()
    }, [])

    return (
        <View style={styles.mainContainer}>
          <Text style={styles.comingSoonText}>coming</Text>
          <Text style={styles.comingSoonText}>soon</Text>
        </View>
      )
    }
    
    export default Teams
    
    const styles = StyleSheet.create({
        comingSoonText: {
            textTransform: "uppercase",
            fontSize: moderateScale(80),
            fontWeight: "bold",
            textAlign:"center",
    
        },
        mainContainer: {
            flex:1,
            justifyContent:"center",
            alignContent: "center",
           
        }
    })