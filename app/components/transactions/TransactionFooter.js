import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import colors from "../../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { BlurView } from "expo-blur";
const TransactionFooter = ({ navigate = true, onSee }) => {
  return (
    <View style={styles.transactionHeadContainer}>
      <BlurView
        tint="light"
        intensity={60}
        style={[
          styles.blurView,
          { backgroundColor: "rgba(255, 255, 255, 0.5)" },
        ]}
      >
        <View style={styles.spacing}>
          {navigate && (
            <View style={styles.headerTitleContainer}>
              <TouchableOpacity
                style={styles.navigationContainer}
                onPress={onSee}
              >
                <Text style={styles.navigationText}>View all</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </BlurView>
    </View>
  );
};

export default TransactionFooter;

const styles = StyleSheet.create({
  blurView: {
    paddingTop: 10,
    paddingHorizontal: "3%",
  },

  transactionHeadContainer: {
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    overflow: "hidden",
  },
  headerTitleContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: { fontWeight: "600" },
  navigationText: {
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
