import { StyleSheet, Text, View } from "react-native";
import React from "react";
import GlobalStyles from "../../../GlobalStyles";

const TransactionHead = ({ headerTitle = "Recent transactions", darkMode }) => {
  return (
    <View style={styles.transactionHeadContainer}>
      <View style={styles.spacing}>
        <View style={styles.headerTitleContainer}>
          <Text
            style={[
              darkMode === "DARK" ? styles.darkheaderText : styles.headerText,
              styles.spacing,
            ]}
          >
            {headerTitle}
          </Text>
        </View>

        <View style={styles.transactionContainer}>
          <View style={styles.transactionContainerTH}>
            <Text
              style={
                darkMode === "DARK"
                  ? styles.darktransactionText
                  : styles.transactionText
              }
            >
              All
            </Text>
          </View>
          <View style={styles.dateContainerTH}>
            <Text
              style={
                darkMode === "DARK"
                  ? styles.darktransactionText
                  : styles.transactionText
              }
            >
              Income
            </Text>
          </View>
          <View style={styles.amountContainerTH}>
            <Text
              style={
                darkMode === "DARK"
                  ? styles.darktransactionText
                  : styles.transactionText
              }
            >
              Expenses
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default TransactionHead;

const styles = StyleSheet.create({
  transactionHeadContainer: {
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingTop: 10,
    marginBottom: "1%",
    paddingHorizontal: "3%",
  },
  headerTitleContainer: { flex: 1 },
  headerText: { fontWeight: "700", fontSize: 20 },
  darkheaderText: {
    fontWeight: "700",
    fontSize: 20,
    color: GlobalStyles.Color.white,
  },

  transactionContainer: {
    flexDirection: "row",
    // paddingHorizontal: "0.5%"
  },
  transactionContainerTH: { flex: 4 },
  dateContainerTH: { flex: 2 },
  transactionText: { opacity: 0.4 },
  darktransactionText: {  color: GlobalStyles.Color.white },

  amountContainerTH: { flex: 3, alignItems: "flex-end" },
  spacing: { marginBottom: "5%" },
});
