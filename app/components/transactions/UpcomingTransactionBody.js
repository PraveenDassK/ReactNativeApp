import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import moment from "moment";
import { moderateScale } from "../../config/scaling";
import GlobalStyles from "../../../GlobalStyles";
import { Ionicons } from "@expo/vector-icons";

const UpcomingTransactionBody = ({
  icon = "JZ",
  name = "Jason Ziche",
  date = "12 jun 23",
  amount,
  credit,
  token,
  accountID,
}) => {
  return (
    <Pressable style={styles.transactionMainContainer}>
      <View style={styles.transactionContainer}>
        <View style={styles.iconContainer}>
          <Ionicons
            name="timer-outline"
            size={24}
            color="rgba(255, 204, 0, 1)"
          />

          <View style={styles.dateContainer}>
            <Text style={styles.displayText}>
              {name.replace("Payment to ", "")}
            </Text>
            <Text style={styles.bottomdisplayText}>
              {moment(date).format(" DD MMM, HH:MM")}
              {/* {moment(item.transactionDate).format(" DD MMM YY")} */}
            </Text>
          </View>
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
          <Text style={styles.bottomdisplayText}>{accountID}</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default UpcomingTransactionBody;

const styles = StyleSheet.create({
  amountContainer: {
    textAlign: "center",
    display: "flex",
    gap: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  dateContainer: {
    textAlign: "center",
    display: "flex",
    gap: 5,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },

  transactionMainContainer: {
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    padding: "3%",
    height: moderateScale(50),
    // justifyContent: "center",
  },
  transactionContainer: {
    flexDirection: "row",
    display: "flex",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  icon: {
    justifyContent: "center",
    alignItems: "center",
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: GlobalStyles.Color.backgroundColor,
    borderColor: GlobalStyles.Color.black,
    alignSelf: "center",
    flex: 1,
  },
  iconContainer: {
    flexDirection: "row",
    gap: 25,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  displayText: {
    color: GlobalStyles.Color.black,
    fontFamily: "Montserrat",
    fontSize: 16,
  },
  bottomdisplayText: {
    color: GlobalStyles.Color.darkGray,
    fontFamily: "Montserrat-Regular",
    fontSize: 14,
  },
});
