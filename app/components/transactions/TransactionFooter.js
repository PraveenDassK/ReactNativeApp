import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import colors from "../../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const TransactionFooter = ({ number, total = 120, onSee }) => {
  return (
    <View style={styles.transactionHeadContainer}>
      <View style={styles.spacing}>
        <View style={styles.headerTitleContainer}>
          <Text
            style={[styles.headerText]}
          >{`Showing ${number} transactions`}</Text>
          <TouchableOpacity style={styles.navigationContainer} onPress={onSee}>
            <Text style={styles.navigationText}>see all</Text>
            <View style={styles.navaigationIcon}>
              <MaterialCommunityIcons
                name="arrow-right"
                size={18}
                color={colors.blue}
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default TransactionFooter;

const styles = StyleSheet.create({
  transactionHeadContainer: {
    backgroundColor: "white",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    paddingTop: 10,
    marginTop: "1%",
    paddingHorizontal: "3%",
  },
  headerTitleContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerText: { fontWeight: "600" },
  navigationText: {
    textTransform: "uppercase",
    fontWeight: "600",
    color: colors.blue,
  },
  navaigationIcon: {
    paddingLeft: "2%",
    justifyContent: "center",
    alignItems: "center",
  },
  navigationContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  spacing: { marginBottom: "2%" },
});
