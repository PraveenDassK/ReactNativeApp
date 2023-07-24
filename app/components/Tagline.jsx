import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import GlobalStyles from "../../GlobalStyles";

const Tagline = ({ darkMode }) => {
  return (
    <View style={[styles.container, { marginBottom: 200 }]}>
      <Text
        style={darkMode === "DARK" ? styles.darkbottomText : styles.bottomText}
      >
        Your{" "}
        <Text
          style={
            darkMode === "DARK"
              ? styles.darkbottomTextBold
              : styles.bottomTextBold
          }
        >
          Money{" "}
        </Text>
        • Your{" "}
        <Text
          style={
            darkMode === "DARK"
              ? styles.darkbottomTextBold
              : styles.bottomTextBold
          }
        >
          Planet
        </Text>{" "}
        • Your{" "}
        <Text
          style={
            darkMode === "DARK"
              ? styles.darkbottomTextBold
              : styles.bottomTextBold
          }
        >
          Choice
        </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
  },
  bottomText: {
    color: "#212529",
    fontSize: 16,
    fontFamily: "Montserrat-Regular",
    fontWeight: "light",
  },
  darkbottomText: {
    color: GlobalStyles.Color.white,
    fontSize: 16,
    fontFamily: "Montserrat-Regular",
    fontWeight: "light",
  },
  bottomTextBold: {
    color: "#212529",
    fontSize: 16,
    fontFamily: "Montserrat",
    fontWeight: "bold",
  },
  darkbottomTextBold: {
    color: GlobalStyles.Color.white,
    fontSize: 16,
    fontFamily: "Montserrat",
    fontWeight: "bold",
  },
});

export default Tagline;
