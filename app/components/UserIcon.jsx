import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import GlobalStyles from "../../GlobalStyles";
import ReactNativePinView from "react-native-pin-view";
import Icon from "react-native-vector-icons/Ionicons";

import AuthContext from "../auth/context";
import api from "../api/apiCall";

const UserIcon = ({ name = "Default", size = 50, onPress, darkMode }) => {
  const [initals, setInitals] = useState("");
  const [colour, setColour] = useState("");

  /**
   * @dev Loads the data once
   */
  useEffect(() => {
    setInitalsForHook();
  }, [name]);

  /**
   *
   */
  const setInitalsForHook = () => {
    setInitals(getInitials(name));
    setColour(iconColour(name));
  };
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.container, { width: size, height: size }]}>
        <View style={styles.icon} backgroundColor={colour}>
          <Text style={styles.initials}>{initals}</Text>
        </View>
        <View style={styles.textContainer}>
          <Text
            style={darkMode === "DARK" ? styles.darkname : styles.name}
            numberOfLines={1}
          >
            {name}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const staticColors = [
  "#FFB4B4", // 255, 180, 180
  "#FFC3B4", // 255, 195, 180
  "#FFD2B4", // 255, 210, 180
  "#FFE1B4", // 255, 225, 180
  "#FFF0B4", // 255, 240, 180
  "#FFFFB4", // 255, 255, 180
  "#F0FFB4", // 240, 255, 180
  "#E1FFB4", // 225, 255, 180
  "#D2FFB4", // 210, 255, 180
  "#C3FFB4", // 195, 255, 180
  "#B4FFB4", // 180, 255, 180
  "#B4FFC3", // 180, 255, 195
  "#B4FFD2", // 180, 255, 210
  "#B4FFE1", // 180, 255, 225
  "#B4FFF0", // 180, 255, 240
  "#B4FFFF", // 180, 255, 255
  "#B4F0FF", // 180, 240, 255
  "#B4E1FF", // 180, 225, 255
  "#B4D2FF", // 180, 210, 255
  "#B4C3FF", // 180, 195, 255
];

// Select a random color based on the given name
function iconColour(name) {
  const nameHash = getHash(name);
  const colors = staticColors;

  const randomIndex = nameHash % colors.length;

  return colors[randomIndex];
}

// Simple hash function to convert name into a numeric hash
function getHash(name) {
  let hash = 0;

  if (name.length === 0) {
    return hash;
  }

  for (let i = 0; i < name.length; i++) {
    const char = name.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash |= 0; // Convert to 32-bit integer
  }

  return Math.abs(hash);
}

function getInitials(name) {
  // Split the name into an array of words
  const words = name.split(" ");
  // Create an empty array to store the initials
  const initials = [];
  // Loop through the words
  for (let i = 0; i < words.length; i++) {
    // Get the first letter of each word and convert it to uppercase
    const firstLetter = words[i].charAt(0).toUpperCase();
    // Add the first letter to the initials array
    initials.push(firstLetter);
  }
  // Join the initials array into a string and return it
  return initials.join("");
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    borderWidth: 0,
    borderColor: "black",
    width: "100%",
    aspectRatio: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
  },
  initials: {
    fontSize: 15,
    fontWeight: "bold",
    color: "black",
  },
  textContainer: {
    height: 30, // Set a fixed height for the text container
    width: "140%",
  },
  name: {
    fontSize: 12,
    color: GlobalStyles.Color.black,
    textAlign: "center",
    fontFamily: "Montserrat-Medium",
  },
  darkname: {
    fontSize: 12,
    color: GlobalStyles.Color.white,
    textAlign: "center",
    fontFamily: "Montserrat-Medium",
  },
});

export default UserIcon;
