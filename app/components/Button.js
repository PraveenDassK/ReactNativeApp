import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

import colors from "../config/colors";

function AppButton({ title, onPress, color = "black" ,style, textColor, transform}) {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: colors[color] }, style ]}
      onPress={onPress}
    >
      <Text style={[ styles.text, transform]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.black,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 5,
    paddingVertical: 15,
    width: "100%",
    height: 70,
    marginVertical: 10,
  },
  text: {
    color: colors.white,
    fontSize: 15,
    textTransform: "uppercase",
    fontWeight: "400",
  },
});

export default AppButton;
