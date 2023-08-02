import React from "react";
import { ImageBackground, StyleSheet, View } from "react-native";
import GlobalStyles from "../../GlobalStyles";

const AppScreen = ({ children, darkMode }) => {
  return (
    <View
      style={
        darkMode === "DARK" ? styles.darkmainContainer : styles.mainContainer
      }
    >
      {children}
      <ImageBackground
        resizeMode="stretch"
        source={
          darkMode === "DARK"
            ? require("../assets/dashboardDark/cards.jpg")
            : require("../assets/backgrounds/cards.jpg")
        }
        style={styles.container}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: GlobalStyles.Color.backgroundColor,
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: "100%",
  },
  darkmainContainer: {
    flex: 1,
    backgroundColor: GlobalStyles.Color.darkTheme_bg,
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: "100%",
  },
  container: {
    width: "100%",
    height: 300,
    position: "absolute",
    bottom: -5,
    zIndex: -100,
  },
});
export default AppScreen;
