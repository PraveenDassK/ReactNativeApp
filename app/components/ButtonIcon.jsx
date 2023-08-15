import React, { useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import GlobalStyles from "../../GlobalStyles";
import { FontAwesome } from "@expo/vector-icons";
import AuthContext from "../auth/context";

const ButtonIcon = ({
  name = "Default",
  size = 50,
  image = "dots-horizontal",
  onPress,
  colour = `#D8EBF9`,
  textColour = "",
}) => {
  const { darkMode, setDarkMode } = useContext(AuthContext);
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.container, { width: size, height: size }]}>
        <View
          style={styles.icon}
          backgroundColor={
            darkMode === "DARK"
              ? GlobalStyles.Color.gray_1700
              : GlobalStyles.Color.buttonIconbg
          }
        >
          {/* <MaterialCommunityIcons name={image} size={30} color={GlobalStyles.Color.lightBlack}/> */}
          {name === "Send money" ? (
            <FontAwesome
              name={image}
              size={24}
              color={
                darkMode === "DARK"
                  ? GlobalStyles.Color.white
                  : GlobalStyles.Color.lightBlack
              }
            />
          ) : (
            <MaterialCommunityIcons
              name={image}
              size={30}
              color={
                darkMode === "DARK"
                  ? GlobalStyles.Color.white
                  : GlobalStyles.Color.lightBlack
              }
            />
          )}
        </View>
        <View style={styles.textContainer}>
          <Text style={darkMode === "DARK" ? styles.darkName : styles.name} numberOfLines={2}>
            {name}
          </Text>
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
    width: 100,
  },
  name: {
    fontSize: 12,
    color: GlobalStyles.Color.lightBlack,
    marginTop: 5,
    textAlign: "center",
    fontFamily: "Montserrat-Medium",
  },
  darkName: {
    fontSize: 12,
    color: GlobalStyles.Color.white,
    marginTop: 5,
    textAlign: "center",
    fontFamily: "Montserrat-Medium",
  },
});

export default ButtonIcon;
