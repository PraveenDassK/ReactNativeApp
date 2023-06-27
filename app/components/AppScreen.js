import React from "react";
import { ImageBackground, StyleSheet, View } from "react-native";

const AppScreen = ({ children }) => {
  return (
   
<View style={styles.mainContainer}>
    {children}
    <ImageBackground
    resizeMode="contain"
      source={require("../assets/backgrounds/beach.jpg")}
      style={styles.container}
    >
    </ImageBackground>
    </View>
   
  )
};
const styles = StyleSheet.create({
  mainContainer: { flex:1,   },
  container: {
    width: '100%',
    height: 300,
    position: 'absolute',
    bottom: -50,
    zIndex:  -100,
   
  },
  content: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 10,
  },
});
export default AppScreen;
