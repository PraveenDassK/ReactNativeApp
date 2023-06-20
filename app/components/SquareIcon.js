import React, { useEffect, useState, useContext, useCallback, useRef, Fragment, } from "react";
import { RefreshControl, Text, StyleSheet, Image, View, TouchableOpacity, ScrollView, ActivityIndicator, Platform, Dimensions, TouchableWithoutFeedback, Vibration, useWindowDimensions, } from "react-native";
import AppText from "../components/Text";
import { horizontalScale, verticalScale, moderateScale, } from "../config/scaling";
import { MaterialCommunityIcons } from "@expo/vector-icons";


const SquareIcon = (
    { text = "My cards",
        trigger,
        image }
) => {
    return (
        <TouchableOpacity
            onPress={() => trigger()}
            style={[styles.inputBox]}
        >
            <View style={styles.inputBoxDiv}>

                <MaterialCommunityIcons
                    name={image}
                    size={40}
                />
                <AppText style={styles.inputBoxText}>{text}</AppText>
            </View>
        </TouchableOpacity>)
}

const styles = StyleSheet.create({
    inputBox: {
        backgroundColor: "white",
        width: "23.5%",
        flexDirection: "row",
        borderRadius: moderateScale(10),
        paddingBottom: verticalScale(18),
        paddingTop: verticalScale(25),
    },

    inputBoxDiv: {
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
    },
    inputIcon: {
        resizeMode: "contain",
        height: verticalScale(20),
        marginBottom: "2.5%",
    },

    inputBoxText: {
        marginTop: "5.5%",
        fontSize: moderateScale(10),
        textAlign: "center",
        fontWeight: "500",
    },
})
export default SquareIcon