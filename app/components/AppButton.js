import React from "react";
import { StyleSheet, Text, TouchableOpacity, ActivityIndicator, View } from "react-native";

import colors from "../config/colors";

function AppButton({ title, onPress, color = "babyBlue" ,style, textColor, transform, visible=false}) {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: colors[color] }, style ]}
      onPress={onPress}
    >
      <View style={styles.textContainer}>
        <Text style={[ styles.text, {color: textColor}, transform]}>{title}</Text>
        {visible && <ActivityIndicator style={{position: "absolute", left: "25%"}} size={'small'} color="white" />}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.babyBlue,
    borderRadius: 10,
    borderColor: colors.black,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 5,
    paddingVertical: 15,
    width: "100%",
    height: 50,
    marginVertical: 10,

  },
  text: {
    color: colors.black,
    fontSize: 15,
    textTransform: "capitalize",
    fontWeight: "700",
    
  },
  textContainer: {
    flexDirection: "row"
  }
});

export default AppButton;