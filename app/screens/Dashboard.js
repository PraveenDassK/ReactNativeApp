
import React, { useEffect, useState, useContext } from "react";
import { RefreshControl, Text, StyleSheet, Image, View, TouchableOpacity, ScrollView, ActivityIndicator, Platform, Dimensions, TouchableWithoutFeedback, Vibration, useWindowDimensions, } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AuthContext from "../auth/context";
import apiCall from "../api/apiCall";

import UserIcon from "../components/UserIcon";

const HomeScreenPersonal = ({ navigation, route }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [showPinModal, setShowPinModal] = useState(true);

    const [userImpact, setUserImpact] = useState({});
    const [userData, setuserData] = useState({});

    const { accountID, customerDetails } = useContext(AuthContext);

    useEffect(() => {
        loadData()
    }, [accountID, customerDetails]);

    /**
     * @dev This loads the data from the Backend
     * @notice Loading is set at the start of this function
     * @dev if any call fails then no data is set and the loading
     */
    const loadData = async () => {
        try{
            setIsLoading(true)
            const userDataReturn = await apiCall.GetCustomerDetails(accountID);
            const userImpactReturn = await apiCall.GetUserImpact(customerDetails);
            setuserData(userDataReturn)
            setUserImpact(userImpactReturn)
            setIsLoading(false)
        }catch{
            setIsLoading(false)
            return
        }
    }

    if (isLoading) {
        return (
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <ActivityIndicator size="large" color="black" />
            </View>
        );
    }

    return (
        <View>
            
        </View>
    );
};

const styles = StyleSheet.create({

});

export default HomeScreenPersonal;
