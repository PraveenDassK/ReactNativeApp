import { StyleSheet, Text, View } from "react-native";
import React from "react";

const UpcomingHead = ({ headerTitle = "Recent transactions" }) => {
  return (
    <View style={styles.transactionHeadContainer}>
      <View style={styles.spacing}>
        <View style={styles.headerTitleContainer}>
          <Text style={[styles.headerText, styles.spacing]}>{headerTitle}</Text>
        </View>

        <View style={styles.transactionContainer}>
          <View style={{ textAlign: "center", width: "100%" }}>
            <Text style={styles.transactionText}>Today</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default UpcomingHead;

const styles = StyleSheet.create({
  transactionHeadContainer: {
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingTop: 10,
    marginBottom: "1%",
    marginTop:"5%",
    paddingHorizontal: "3%",
  },
  headerTitleContainer: { flex: 1 },
  headerText: { fontWeight: "700", fontSize: 20 },
  transactionContainer: {
    flexDirection: "row",
    // paddingHorizontal: "0.5%"
  },
  transactionContainerTH: { flex: 4 },
  dateContainerTH: { flex: 2 },
  transactionText: {
    opacity: 0.4,
    textAlign: "center",
    fontFamily: "Montserrat-Regular",
    fontSize:14,
  },
  amountContainerTH: { flex: 3, alignItems: "flex-end" },
  spacing: { marginBottom: "5%" },
});
