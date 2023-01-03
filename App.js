import React, {useCallback} from "react";
import { View,Text, Image, SafeAreaView, Pressable, StyleSheet, ScrollView } from "react-native";
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import 'expo-dev-menu';


import SignUpPersonalScreen from "./app/screens/SignUpPersonalScreen";
import OTPVerificationPersonal2 from "./app/screens/OTPVerificationPersonal2";
import Account from "./app/screens/Account"
import GlobalStyles from "./GlobalStyles";


// SplashScreen.preventAutoHideAsync(); 

export default function App() {

  
  // const [fontsLoaded] = useFonts({

  //   Roboto: require("./app/assets/fonts/Roboto.ttf")
  // });

  // const onLayoutRootView = useCallback(async () => {
  //   console.log(fontsLoaded)
  //   if (fontsLoaded) {
  //     await SplashScreen.hideAsync();
  //   }
  // }, [fontsLoaded]);

  // if (!fontsLoaded) {
    
  //   return null;
  // }

  return (
    <Account />
    
  )

 
}



