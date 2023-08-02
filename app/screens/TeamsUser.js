import React, { useContext, useEffect, useState } from "react";
import {
    Text,
    TextInput,
    StyleSheet,
    View,
    ActivityIndicator,
    FlatList
} from "react-native";
import { moderateScale } from '../config/scaling'

import PinModal from "../components/PinModal";
import UserIcon from "../components/UserIcon";
import Button from "../components/AppButton";
import RecentTransactions from "../components/RecentTransactions";
const TeamsUser = ({ navigation, route }) => {
    const [showPinModal, setShowPinModal] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const userData = route.params
    

    const deleteUser = () => {
        navigation.navigate("Teams")
    }

    return (
        <View style={styles.mainContainer}>
            <Text>
                {userData.name}
            </Text>
            <RecentTransactions />

            <Button
                title={"delete"}
                onPress={() => deleteUser()}
            />
        </View>
    );
};

export default TeamsUser

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