import React, { useEffect, useState, useContext, useCallback, useRef, Fragment, } from "react";
import { RefreshControl, Text, StyleSheet, Image, View, TouchableOpacity, ScrollView, ActivityIndicator, Platform, Dimensions, TouchableWithoutFeedback, Vibration, useWindowDimensions, } from "react-native";
import AppText from "../components/Text";

const SquareIcon = () => {
    return(
    <TouchableOpacity
        onPress={() => navigation.navigate("MyCards")}
        style={[styles.inputBox]}
    >
        <View style={styles.inputBoxDiv}>
            <Image
                style={styles.inputIcon}
                resizeMode="contain"
                source={require("../assets/icon-outlinecreditcard.png")}
            />
            <AppText style={styles.inputBoxText}>My Cards</AppText>
        </View>
    </TouchableOpacity>)
}

const styles = StyleSheet.create({

})
export default SquareIcon