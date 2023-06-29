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

const PROXY_TEAM_DATA = [{
    "name": "Ava Bel",
    "id": "1"
},
]
const TeamsUser = ({ navigation }) => {
    const [showPinModal, setShowPinModal] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const [teamData, setTeamData] = useState(PROXY_TEAM_DATA)

    return (
        <View style={styles.mainContainer}>

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