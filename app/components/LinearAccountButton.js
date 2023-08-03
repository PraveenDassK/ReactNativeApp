import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import GlobalStyles from "../../GlobalStyles";
const LinearAccountButton = ({ onPress, darkMode, title }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <LinearGradient
        colors={
          darkMode === "DARK" ? ["#178BFF", "#0101FD"] : ["#212529", "#3A3A3A"]
        }
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={
          darkMode === "DARK" ? styles.darkbuttonPayNew : styles.buttonPayNew
        }
      >
        {/* <Ionicons
        name="add-circle-outline"
        size={20}
        color={GlobalStyles.Color.white}
      /> */}
        <Text style={styles.buttonPayNewText}>{title}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default LinearAccountButton;

const styles = StyleSheet.create({
  buttonContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  buttonPayNew: {
    borderRadius: 10,
    // backgroundColor: GlobalStyles.Color.lightBlack,
    height: 47,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
  },
  darkbuttonPayNew: {
    borderRadius: 10,
    // backgroundColor: GlobalStyles.Color.gray_500,
    height: 47,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
  },
  buttonPayNewText: {
    color: GlobalStyles.Color.white,
    fontFamily: "Montserrat-Medium",
    fontSize: 14,
    marginLeft: 6,
  },
});
