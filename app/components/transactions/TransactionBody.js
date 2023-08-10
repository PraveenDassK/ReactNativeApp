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
  index,
  transLength,
}) => {
  const textStyle =
    darkMode === "DARK" ? styles.darkdisplayText : styles.displayText;

  const transactionItem =
    !transLength === 1
      ? {
          paddingTop: index === 0 ? 20 : null,
          borderTopLeftRadius: index === 0 ? 20 : null,
          borderTopRightRadius: index === 0 ? 20 : null,
          paddingBottom: index === -1 ? 20 : null,
          borderBottomRightRadius: index === -1 ? 20 : null,
          borderBottomLeftRadius: index === -1 ? 20 : null,
          borderBottomColor: "#D2D2D2",
          borderBottomWidth: index === -1 ? null : 0.5,
        }
      : {
          padding: 20,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          borderBottomRightRadius: 20,
          borderBottomLeftRadius: 20,
        };

  return (
    <Pressable style={[styles.transactionMainContainer, transactionItem, {}]}>
      <View style={styles.transactionContainer}>
        <View style={styles.nameContainer}>
          <Text style={textStyle}>{name.replace("Payment to ", "")}</Text>

          <View style={styles.spacing}>
            <Text style={[textStyle, styles.subText]}>
              {moment(date).format("DD MMMM YYYY")}
            </Text>
          </View>
        </View>

        <View style={styles.amountContainer}>
          {!token ? (
            <Text style={[textStyle, { color: !credit ? "red" : "green" }]}>
              {!credit ? "-" : "+"} {amount}.00
            </Text>
          ) : (
            <Text style={textStyle}>{token}</Text>
          )}
          <View style={styles.spacing}>
            <Text style={styles.subText}>Card **** 8986</Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

export default TransactionBody;

const styles = StyleSheet.create({
  amountContainer: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "flex-end",
  },
  dateContainer: {
    justifyContent: "center",
    alignItems: "flex-start",
    flex: 2,
  },
  nameContainer: {
    flex: 1,
    justifyContent: "center",
  },

  transactionMainContainer: {
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    padding: "3%",
    // height: moderateScale(50),
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
  subText: { fontSize: 12, color: "#999999" },
  spacing: { marginTop: "2%" },
});
