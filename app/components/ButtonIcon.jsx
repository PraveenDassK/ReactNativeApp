import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";

const ButtonIcon = ({
  name = "Default",
  size = 50,
  image = "dots-horizontal",
  onPress,
  colour = `#D8EBF9`,
  textColour = "",
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.container, { width: size, height: size }]}>
        <View style={styles.icon} backgroundColor={colour}>
          <MaterialCommunityIcons name={image} size={30} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.name}>{name}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
  },
  icon: {
    borderWidth: 0,
    width: "100%",
    aspectRatio: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
  },
  initials: {
    fontSize: 18,
    fontWeight: "bold",
  },
  textContainer: {
    height: 50, // Set a fixed height for the text container
  },
  name: {
    fontSize: 12,
    color: "black",
    marginTop: 5,
    textAlign: "center",
  },
});

export default ButtonIcon;
