
import React, { useEffect, useState, useContext } from "react";
import { RefreshControl, Text, StyleSheet, Image, View, TouchableOpacity, ScrollView, ActivityIndicator, Platform, Dimensions, TouchableWithoutFeedback, Vibration, useWindowDimensions, } from "react-native";
import PinModal from "../components/PinModal";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const CARD_DATA = [];

const HomeScreenPersonal = ({ navigation, route }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [showPinModal, setShowPinModal] = useState(true);


    if (isLoading) {
        return (
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <ActivityIndicator size="large" color="black" />
            </View>
        );
    }

    const onSuccess = () => {
        console.log("Success!");
        setShowPinModal(false);
    };

    if (showPinModal) {
        return (
            <View>
                {showPinModal ? (
                    <PinModal
                        title="Enter your PIN"
                        success={() => onSuccess()}
                    />
                ) : null}
            </View>
        )
    }

    if (pin) { }

    return (
        <View>
        <View>Hello world</View>
        </View>
    );
};

const styles = StyleSheet.create({

});

export default HomeScreenPersonal;
