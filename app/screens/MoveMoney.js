import React, { Fragment, useContext, useEffect, useState } from "react";
import { useIsFocused } from "@react-navigation/native";
import { Text, StyleSheet, View, ScrollView, ActivityIndicator, FlatList,TouchableOpacity } from "react-native";

import AuthContext from "../auth/context";
import apiCall from "../api/apiCall";
import UserIcon from "../components/UserIcon";
import Button from "../components/AppButton";

const MoveMoney = ({ navigation }) => {
    const [accountList, setAccountList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const { userID, customerDetails, accountID } = useContext(AuthContext);
    const isFocused = useIsFocused();

    useEffect(() => {
        loadData();
    }, [isFocused]);

    /**
     * @dev This loads the account data
     */
    const loadData = async () => {
        try {
            setIsLoading(true)
            const accountDataResponse = await apiCall.GetAllAccounts(userID);
            console.log(accountDataResponse)
            setAccountList(accountDataResponse)
            setIsLoading(false)
        } catch {
            setIsLoading(false)
        }
    }
    console.log(accountList)

    /**
     * @dev If the page is loading show the loading icon
     */
    if (isLoading) {
        return (
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <ActivityIndicator size="large" color="black" />
            </View>
        );
    }

    return (
        <View>
            <View>
                <Text>
                    Select account
                </Text>
                <FlatList
                    data={accountList}
                    keyExtractor={(accountList, index) => accountList.id}
                    numColumns={1}
                    contentContainerStyle={styles.flatListContent}
                    renderItem={(account) => {
                        console.log(account)
                        return (
                            <TouchableOpacity onPress={() => console.log("!")}>

                                <View style={styles.itemContainer}>
                                    <Text>{account.item.id}</Text>
                                    <Text>{account.item.balance}</Text>
                                </View>
                            </TouchableOpacity>
                        );
                    }}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
});

export default MoveMoney;
