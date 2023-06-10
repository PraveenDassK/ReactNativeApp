import { StyleSheet, Text, View, Switch } from "react-native";
import React from "react";
import colors from "../config/colors";

const AppSwitch = ({ title, onValueChange, value }) => {
  return (
    <View style={styles.notoficationRowContainer}>
      <Text>{title}</Text>
      <Switch
        trackColor={{ false: colors.black, true: colors.blue }}
        thumbColor={value ? colors.white : colors.black}
        onValueChange={onValueChange}
        value={value}
      />
    </View>
  );
};

export default AppSwitch;

const styles = StyleSheet.create({
  notoficationRowContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    notoficationRowContainer: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },
  },
});
