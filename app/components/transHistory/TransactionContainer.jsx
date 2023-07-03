import React from "react";
import { View, Text, StyleSheet } from "react-native";

import TransactionHeader from "./TransactionHeader";
import { TransactionFooter } from "../transactions";
import TransactionBody from "./TransactionBody";

const TransactionContainer = ({
  title = "Transactions",
  onTransaction,
  transactions,
  onTransactionFilter,
}) => (
  <View style={styles.transactionContainer}>
    <Text style={[styles.bold, styles.header]}>{title}</Text>

    <TransactionHeader
      onTransactionFilter={(item) => onTransactionFilter(item)}
    />

    {transactions.map(
      ({ id, credit, description, transactionDate, amount }, index) => (
        <TransactionBody
          key={id}
          onTransaction={onTransaction}
          description={description}
          date={transactionDate}
          amount={amount}
          credit={credit}
          index={index}
          lastElement={transactions.length - 1}
        />
      )
    )}
    <TransactionFooter navigate={false} />
  </View>
);

const styles = StyleSheet.create({
  transactionContainer: {
    flex: 1,
    marginTop: "5%",
    padding: "5%",
  },
  bold: { fontWeight: "700" },
  header: { fontSize: 20 },
});

export default TransactionContainer;
