import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import moment from "moment";
import { moderateScale } from "../../config/scaling";

const TransactionBody = ({
  icon = "JZ",
  name = "Jason Ziche",
  date = "12 jun 23",
  amount,
  credit,
  token,
}) => {
  return (
    <Pressable style={styles.transactionMainContainer}>
      <View style={styles.transactionContainer}>
        <View style={styles.iconContainer}>
          <View>
            <View style={styles.icon}>
              <Text style={styles.displayText}>
                {name.replace("Payment to ", "")[0]}
              </Text>
            </View>
          </View>
          <View style={styles.nameContainer}>
            <Text style={styles.displayText}>
              {name.replace("Payment to ", "")}
            </Text>
          </View>
        </View>

        <View style={styles.dateContainer}>
          <Text style={styles.displayText}>
            {moment(date).format(" DD MMM, YY")}
            {/* {moment(item.transactionDate).format(" DD MMM YY")} */}
          </Text>
        </View>

        <View style={styles.amountContainer}>
          {!token ? (
            <Text
              style={[styles.displayText, { color: !credit ? "red" : "green" }]}
            >
              {!credit ? "-" : "+"}£{amount.toFixed(2)}
            </Text>
          ) : (
            <Text style={styles.displayText}>{token}</Text>
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
    backgroundColor: "white",
    padding: "0.5%",
    height: moderateScale(50),
    justifyContent: "center",
  },
  transactionContainer: {
    flexDirection: "row",
    paddingHorizontal: "0.5%",
    height: 40,
  },
  icon: {
    justifyContent: "center",
    alignItems: "center",
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: "#F6F5F8",
    borderColor: "black",
    alignSelf: "center",
    flex: 1,
  },
  iconContainer: { flex: 4, flexDirection: "row" },
  displayText: { fontWeight: "600", textTransform: "capitalize"},
});
