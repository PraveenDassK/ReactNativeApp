import React from "react";
import { View, Text, StyleSheet } from "react-native";

import TransactionHeader from "./TransactionHeader";
import { TransactionFooter } from "../transactions";
import TransactionBody from "./TransactionBody";
import GlobalStyles from "../../../GlobalStyles";
import { BlurView } from "expo-blur";
const TransactionContainer = ({
  title = "Transactions",
  onTransaction,
  transactions,
  onTransactionFilter,
  darkMode,
  handleOnSee,
}) => (
  <View style={styles.transactionContainer}>
    <Text
      style={
        darkMode === "DARK"
          ? [styles.bold, styles.darkheader]
          : [styles.bold, styles.header]
      }
    >
      {title}
    </Text>

    <TransactionHeader
      onTransactionFilter={(item) => onTransactionFilter(item)}
      darkMode={darkMode}
    />
    <BlurView
      tint="light"
      intensity={60}
      style={{
        backgroundColor:
          darkMode === "DARK"
            ? "rgba(255, 255, 255, 0.5) "
            : "rgba(255, 255, 255, 0.5)",
        borderColor: "transparent",
        padding: "2%",
        borderWidth: 0,
        width: "100%",
      }}
    >
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
            darkMode={darkMode}
          />
        )
      )}
    </BlurView>
    <TransactionFooter navigate={true} onSee={handleOnSee} />
  </View>
);

const styles = StyleSheet.create({
  transactionContainer: {
    flex: 1,
    marginTop: "5%",
    padding: "5%",
  },
  bold: { fontFamily: "Montserrat" },
  header: { fontSize: 20 },
  darkheader: { fontSize: 20, color: GlobalStyles.Color.white },
});

export default TransactionContainer;
