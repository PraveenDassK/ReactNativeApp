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
import { moderateScale } from '../config/scaling'

import RecentTransactions from "../components/RecentTransactions";
import PinModal from "../components/PinModal";

const Teams = ({ navigation }) => {

    useEffect(() => {
        // loadData()
    }, [])

    const onSuccess = () => {
        console.log("!")
    }

    return (
        <View style={styles.mainContainer}>
            {/* <RecentTransactions
            amount = {10}
          /> */}
            <PinModal
                title="Enter your pin"
                success={() => onSuccess()}
            />
        </View>
    )
}

export default Teams

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