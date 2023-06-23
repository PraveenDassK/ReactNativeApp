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
import UserIcon from "../components/UserIcon";
import ButtonIcon from "../components/ButtonIcon";

const Teams = ({ navigation }) => {
    const [showPinModal, setShowPinModal] = useState(false);
    const [isLoading, setIsLoading] = useState(false);


    useEffect(() => {
        // loadData()
    }, []);

    const onSuccess = () => {
        console.log("Success!");
        setShowPinModal(false);
    };

    if (showPinModal) {
        return (
            <View style={styles.mainContainer}>
                {showPinModal ? (
                    <PinModal
                        title="Enter your PIN"
                        success={() => onSuccess()}
                    />
                ) : null}
            </View>
        )
    }

    return (
        <View style={styles.mainContainer}>
            {/* <RecentTransactions
                amount={10}
            /> */}
            <ButtonIcon
                name = "My cards"
                image = "dots-horizontal"
            />
        </View>
    );
};

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