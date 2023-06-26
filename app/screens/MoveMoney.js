import React, { Fragment, useContext, useEffect, useState } from "react";
import { useIsFocused } from "@react-navigation/native";
import { Text, StyleSheet, View, ScrollView, ActivityIndicator, FlatList, TouchableOpacity } from "react-native";

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
     * @dev This takes the selected destination account data and passes it to another screen
     */
    const selectAccount = (account) => {
        console.log(account)
        const requestObj = {
            "sourceAccountId": "",
            "destination": {
                "type": "SCAN",
                "id": account.id,
                "accountNumber": account.identifiers[0].accountNumber,
                "sortCode": account.identifiers[0].sortCode,
                "name": account.name,
                "phoneNumber": ""
            },
            "currency": "GBP",
            "amount": 0,
            "reference": "Transfer"
        }
        console.log(requestObj)
        navigation.navigate("MoveMoneyFromAccount", requestObj)
    }

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
                    Send to
                </Text>
                <FlatList
                    data={accountList}
                    keyExtractor={(accountList, index) => accountList.id}
                    numColumns={1}
                    contentContainerStyle={styles.flatListContent}
                    renderItem={(account) => {
                        return (
                            <TouchableOpacity onPress={() => selectAccount(account.item)}>
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
    flatListContent: {
        paddingHorizontal: 10,
        paddingBottom: 10,
    },
    itemContainer: {
        backgroundColor: '#e5e5e5',
        padding: 10,
        marginBottom: 10,
        width: '100%',
    },
});

export default MoveMoney;
