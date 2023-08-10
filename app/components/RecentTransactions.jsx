import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, View, Text, ActivityIndicator } from "react-native";
import AuthContext from "../auth/context";
import GlobalStyles from "../../GlobalStyles";
import apiTransaction from "../api/apiTransaction";

const transactionDisplayItems = [
  { id: 1, title: "All" },
  { id: 2, title: "Income" },
  { id: 3, title: "Expense" },
];

import { TransactionContainer } from "./transHistory";

const RecentTransactions = ({ amount, handleOnSee }) => {
  const [transactions, setTransactions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [filterTransactions, setFilterTransactions] = useState([
    ...transactions,
  ]);

  //All Income Expense
  const [typeSelection, setTypeSelection] = useState("All");

  const { accountID, darkMode } = useContext(AuthContext);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    setIsLoading(true);
    const transactionCall = await apiTransaction.GetTransactions(
      accountID,
      amount,
      typeSelection
    );
    setTransactions(transactionCall.transactions);
    setFilterTransactions(transactionCall.transactions);
    setIsLoading(false);
  };

  const handleTransactionFilter = (item) => {
    if (item == "income") {
      setFilterTransactions(
        transactions.filter(({ credit }) => credit !== false)
      );
    } else if (item == "expenses") {
      setFilterTransactions(
        transactions.filter(({ credit }) => credit === false)
      );
    } else {
      setFilterTransactions(transactions);
    }
  };

  if (isLoading) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <ActivityIndicator size="large" color={GlobalStyles.Color.black} />
      </View>
    );
  }

  return (
    <View>
      <TransactionContainer
        title="Transactions History"
        transactionDisplayItems={transactionDisplayItems}
        onTransaction={() => console.log("onTransaction")}
        transactions={filterTransactions.slice(0, 5)}
        onTransactionFilter={(item) => handleTransactionFilter(item)}
        darkMode={darkMode}
        handleOnSee={handleOnSee}
      />
    </View>
  );
};

export default RecentTransactions;
