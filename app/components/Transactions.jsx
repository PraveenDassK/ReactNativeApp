import React, { useEffect, useState, useContext, useCallback } from "react";
import { Text, StyleSheet, Image, View, Pressable, ScrollView, Modal, RefreshControl, TouchableOpacity, Alert, FlatList, LayoutAnimation, ActivityIndicator, TouchableWithoutFeedback } from "react-native";
import GlobalStyles from "../../GlobalStyles";
import { Swipeable } from "react-native-gesture-handler";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import FadeInView from "../components/fadeInview";

import { horizontalScale, moderateScale, verticalScale } from "../config/metrics";

import moment from "moment";
import api from "../api/api_list";
import apiCall from "../api/apiCall";
import AuthContext from "../auth/context";
import { hide } from "expo-splash-screen";
import Animated from "react-native-reanimated";
import { Button } from "react-native-elements";

const Transactions = () => {
    const [transactions, setTransactions] = useState([]);

    //Calls the API once during load
    useEffect(() => {
        loadData();
    }, [accountID]);

    const loadData = async () => {
        const transactionCall = await apiCall.GetTransactions(accountID);
        setTransactions(transactionCall.transactions);
        
    }

        return (
            <View></View>
        );
    };

    const styles = StyleSheet.create({

    });

    export default Transactions;
