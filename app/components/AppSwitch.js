import { StyleSheet, Text, View, Switch } from "react-native";
import React from "react";
import colors from "../config/colors";
import GlobalStyles from "../../GlobalStyles";

const AppSwitch = ({ title, onValueChange, value, darkMode }) => {
  return (
    <View style={styles.notoficationRowContainer}>
      <Text
        style={{
          color:
            darkMode === "DARK"
              ? GlobalStyles.Color.white
              : GlobalStyles.Color.secondaryDarkTheme_bg,
        }}
      >
        {title}
      </Text>
      <Switch
        trackColor={{
          false: darkMode === "DARK" ? GlobalStyles.Color.white : colors.black,
          true: colors.blue,
        }}
        thumbColor={
          value
            ? darkMode === "DARK"
              ? GlobalStyles.Color.black
              : colors.white
            : colors.black
        }
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
