import { StyleSheet, TouchableOpacity, View } from "react-native";
import React, { useContext } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import GlobalStyles from "../../../GlobalStyles";
import AuthContext from "../../auth/context";

const HeaderBackButton = ({ onBack, direction = "left" }) => {
  const { darkMode } = useContext(AuthContext);
  return onBack ? (
    <TouchableOpacity
      onPress={onBack}
      style={
        darkMode === "DARK"
          ? styles.darkiconDropDownContainer
          : styles.iconDropDownContainer
      }
    >
      <MaterialCommunityIcons
        name={`arrow-${direction}`}
        size={30}
        color={darkMode === "DARK" ? GlobalStyles.Color.white : null}
      />
    </TouchableOpacity>
  ) : (
    <View style={styles.iconDropDownContainer}>
      <MaterialCommunityIcons name={`arrow-${direction}`} size={30} />
    </View>
  );
};

export default HeaderBackButton;

const styles = StyleSheet.create({
  iconDropDownContainer: {
    marginLeft: "10%",
    backgroundColor: "lightgrey",
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  darkiconDropDownContainer: {
    marginLeft: "10%",
    backgroundColor: GlobalStyles.Color.black,
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});
