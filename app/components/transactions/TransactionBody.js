import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import moment from "moment";
import { moderateScale } from "../../config/scaling";
import GlobalStyles from "../../../GlobalStyles";

const TransactionBody = ({
  icon = "JZ",
  name = "Jason Ziche",
  date = "12 jun 23",
  amount,
  credit,
  token,
  darkMode,
}) => {
  return (
    <Pressable style={styles.transactionMainContainer}>
      <View style={styles.transactionContainer}>
        <View style={styles.iconContainer}>
          <View>
            <View style={styles.icon}>
              <Text
                style={
                  darkMode === "DARK"
                    ? styles.darkdisplayText
                    : styles.displayText
                }
              >
                {name.replace("Payment to ", "")[0]}
              </Text>
            </View>
          </View>
          <View style={styles.nameContainer}>
            <Text
              style={
                darkMode === "DARK"
                  ? styles.darkdisplayText
                  : styles.displayText
              }
            >
              {name.replace("Payment to ", "")}
            </Text>
          </View>
        </View>

        <View style={styles.dateContainer}>
          <Text
            style={
              darkMode === "DARK" ? styles.darkdisplayText : styles.displayText
            }
          >
            {moment(date).format(" DD MMM, HH:MM")}
            {/* {moment(item.transactionDate).format(" DD MMM YY")} */}
          </Text>
        </View>

        <View style={styles.amountContainer}>
          {!token ? (
            <Text
              style={[
                darkMode === "DARK"
                  ? styles.darkdisplayText
                  : styles.displayText,
                { color: !credit ? "red" : "green" },
              ]}
            >
              {!credit ? "-" : "+"}£{amount.toFixed(2)}
            </Text>
          ) : (
            <Text
              style={
                darkMode === "DARK"
                  ? styles.darkdisplayText
                  : styles.displayText
              }
            >
              {token}
            </Text>
          )}
        </View>
      </View>
    </Pressable>
  );
};

export default TransactionBody;

const styles = StyleSheet.create({
  amountContainer: {
    flex: 3,
    justifyContent: "space-evenly",
    alignItems: "flex-end",
  },
  dateContainer: {
    justifyContent: "center",
    alignItems: "flex-start",
    flex: 2,
  },
  nameContainer: {
    flex: 2,
    justifyContent: "center",
    paddingLeft: "5%",
  },

  transactionMainContainer: {
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    padding: "3%",
    height: moderateScale(50),
    justifyContent: "center",
  },
  transactionContainer: {
    flexDirection: "row",
    height: 40,
  },
  icon: {
    justifyContent: "center",
    alignItems: "center",
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: GlobalStyles.Color.backgroundColor,
    borderColor: "black",
    alignSelf: "center",
    flex: 1,
  },
  iconContainer: { flex: 4, flexDirection: "row" },
  displayText: { fontWeight: "600", textTransform: "capitalize" },
  darkdisplayText: {
    fontWeight: "600",
    textTransform: "capitalize",
    color: GlobalStyles.Color.white,
  },
});
