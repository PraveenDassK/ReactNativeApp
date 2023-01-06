import React, {useCallback, useState} from "react";
import { View,Text, Image, SafeAreaView, Pressable, StyleSheet, ScrollView } from "react-native";
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import 'expo-dev-menu';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";


import SignUpPersonalScreen from "./app/screens/SignUpPersonalScreen";
import OTPVerificationPersonal2 from "./app/screens/OTPVerificationPersonal2";
import PersonalOrBusiness from "./app/screens/PersonalOrBusiness";
import Account from "./app/screens/Account"
import GlobalStyles from "./GlobalStyles";
import AuthContext from "./app/auth/context";
import Carbon from "./app/screens/Carbon"
import CarbonStyle from "./app/screens/CarbonStyle"
import CarbonProject from "./app/screens/CarbonProject"
import ChooseCardsStandard5 from "./app/screens/ChooseCardsStandard5"


// SplashScreen.preventAutoHideAsync(); 

const Stack = createNativeStackNavigator();
const StackNavigator = () => (
  
  <Stack.Navigator initialRouteName="ChooseCardsStandard5">
    <Stack.Screen  name="ChooseCardsStandard5" component={ChooseCardsStandard5}/>
    <Stack.Screen  name="Carbon" component={Carbon}/>
    <Stack.Screen  name="CarbonProject" component={CarbonProject}/>
  </Stack.Navigator>
)

export default function App() {

  const [user, setUser] = useState()
  
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
    <AuthContext.Provider value={{user, setUser}}>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </AuthContext.Provider>
    
  )

 
}



