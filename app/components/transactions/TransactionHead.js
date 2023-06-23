import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const TransactionHead = ({ headerTitle = "Recent transactions" }) => {
  return (
    <View style={styles.transactionHeadContainer}>
      <View style={styles.spacing}>
        <View style={styles.headerTitleContainer}>
          <Text style={[styles.headerText, styles.spacing]}>{headerTitle}</Text>
        </View>

        <View style={styles.transactionContainer}>
          <View style={styles.transactionContainerTH}>
            <Text style={styles.transactionText}>All</Text>
          </View>
          <View style={styles.dateContainerTH}>
            <Text style={styles.transactionText}>Income</Text>
          </View>
          <View style={styles.amountContainerTH}>
            <Text style={styles.transactionText}>Expenses</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default TransactionHead

const styles = StyleSheet.create({
  transactionHeadContainer: {
    backgroundColor: "white",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingTop: 10,
    marginBottom: "1%",
    paddingHorizontal: "3%"
  },
  headerTitleContainer: { flex: 1, },
  headerText: { fontWeight: "700", fontSize: 20 },
  transactionContainer: {
    flexDirection: "row",
    // paddingHorizontal: "0.5%"
  },
  transactionContainerTH: { flex: 4 },
  dateContainerTH: { flex: 2 },
  transactionText: { opacity: 0.4 },
  amountContainerTH: { flex: 3, alignItems: "flex-end" },
  spacing: { marginBottom: "5%" }
})