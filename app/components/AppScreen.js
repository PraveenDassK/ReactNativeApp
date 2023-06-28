import React from "react";
import { ImageBackground, StyleSheet, View } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';



const AppScreen = ({ children, gradient= '#192A20' }) => {
  return (
   
<View style={styles.mainContainer}>
    {children}
    <ImageBackground
    resizeMode="stretch"
      source={require("../assets/backgrounds/Ice.png")}
      style={styles.container}
    >
    <LinearGradient
        // Background Linear Gradient
        colors={['transparent',]}
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: -15,
          height: '10%'
       }}
      />
    </ImageBackground>
    </View>
   
  )
};
const styles = StyleSheet.create({
  mainContainer: { flex:1, backgroundColor:  "#F6F5F8", position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      height: '100%'  },
  container: {
    width: '100%',
    height: 300,
    position: 'absolute',
    bottom: -5,
    zIndex:  -100,
   
  },

});
export default AppScreen;
