import { StyleSheet, Text, View } from "react-native";
import React from "react";
import GlobalStyles from "../../../GlobalStyles";
const UpcomingHead = ({ headerTitle = "Recent transactions", darkMode }) => {
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
          <View style={{ textAlign: "center", width: "100%" }}>
            <Text
              style={
                darkMode === "DARK"
                  ? styles.darktransactionText
                  : styles.transactionText
              }
            >
              Today
            </Text>
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
    marginTop: "5%",
    paddingHorizontal: "3%",
  },
  headerTitleContainer: { flex: 1 },
  headerText: {
    color: GlobalStyles.Color.lightBlack,
    fontFamily: "Montserrat",
    fontSize: 20,
  },
  darkheaderText: {
    color: GlobalStyles.Color.white,
    fontFamily: "Montserrat",
    fontSize: 20,
  },
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
    fontSize: 14,
  },
  darktransactionText: {
    // opacity: 0.4,
    textAlign: "center",
    fontFamily: "Montserrat-Regular",
    fontSize: 14,
    color: GlobalStyles.Color.white,
  },
  amountContainerTH: { flex: 3, alignItems: "flex-end" },
  spacing: { marginBottom: "5%" },
});
