import React, { useContext, useEffect, useState } from "react";
import {
    StyleSheet,
    View,
    Text,
    ActivityIndicator
} from "react-native";
import AuthContext from "../auth/context";

import apiTransaction from "../api/apiTransaction";

import {
    TransactionBody,
    TransactionHead,
    TransactionFooter,
} from "../components/transactions";

const RecentTransactions = ({ amount }) => {
    const [transactions, setTransactions] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    //All Income Expense
    const [typeSelection, setTypeSelection] = useState("All")

    const {
        accountID,
    } = useContext(AuthContext);

    useEffect(() => {
        loadData()
    }, []);

    const loadData = async () => {
        setIsLoading(true)
        const transactionCall = await apiTransaction.GetTransactions(accountID, amount,typeSelection);
        setTransactions(transactionCall.transactions)
        setIsLoading(false)
    }

    if (isLoading) {
        return (
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <ActivityIndicator size="large" color="black" />
            </View>
        );
    }


    return (
        <View style={{ paddingHorizontal: "5%", marginVertical: 40 }}>
            <TransactionHead/>
            {transactions.map((transaction, index) => (
                <TransactionBody
                    key={index}
                    name={transaction.description}
                    date={transaction.transactionDate}
                    amount={transaction.amount}
                    credit={transaction.credit}
                />
            ))}
            <TransactionFooter
                number={transactions.length}
                total={5}
                onSee={() => navigation.navigate("Transactions")}
            />
        </View>
    );
};

const styles = StyleSheet.create({

});

export default RecentTransactions;
