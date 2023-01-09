import React, {useCallback, useState} from "react";
import { View,Text, Image, SafeAreaView, Pressable, StyleSheet, ScrollView } from "react-native";
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import 'expo-dev-menu';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import SplashAnimation from "./app/screens/SplashAnimation";

import SignUpPersonalScreen from "./app/screens/SignUpPersonalScreen";
import OTPVerificationPersonal2 from "./app/screens/OTPVerificationPersonal";
import PersonalOrBusiness from "./app/screens/PersonalOrBusiness";
import Account from "./app/screens/Account"
import GlobalStyles from "./GlobalStyles";
import AuthContext from "./app/auth/context";
import Carbon from "./app/screens/Carbon"
import CarbonStyle from "./app/screens/CarbonStyle"
import CarbonProject from "./app/screens/CarbonProject"
import ChooseCardsStandard5 from "./app/screens/ChooseCardsStandard5"
import Onboarding1 from "./app/screens/Onboarding1"
import Onboarding2 from "./app/screens/Onboarding2"
import Onboarding3 from "./app/screens/Onboarding3"
import LoginPersonal from "./app/screens/SignUpPersonal"
import CountryOfResidence from "./app/screens/CountryOfResidence"
import SignUpPersonal from "./app/screens/SignUpPersonal"
import FaceScan from "./app/screens/FaceScan"
import BiometrixComplete from "./app/screens/BiometrixComplete"

// SplashScreen.preventAutoHideAsync(); 

const Stack = createNativeStackNavigator();
const StackNavigator = () => (
  
  <Stack.Navigator initialRouteName="carbon">
    <Stack.Screen  name="BiometrixComplete" component={BiometrixComplete}/>
    <Stack.Screen  name="FaceScan" component={FaceScan}/>
    <Stack.Screen  name="OTPVerificationPersonal2" component={OTPVerificationPersonal2}/>

    <Stack.Screen  name="SignUpPersonal" component={SignUpPersonal}/>
    <Stack.Screen  name="CountryOfResidence" component={CountryOfResidence}/>
    <Stack.Screen  name="Account" component={Account}/>

    <Stack.Screen  name="LoginPersonal" component={LoginPersonal}/>

    <Stack.Screen  name="SplashAnimation" component={SplashAnimation}/>

    <Stack.Screen  name="Onboarding1" component={Onboarding1}/>
    <Stack.Screen  name="Onboarding2" component={Onboarding2}/>
    <Stack.Screen  name="Onboarding3" component={Onboarding3}/>
    
    <Stack.Screen  name="Carbon" component={Carbon}/>
    
    <Stack.Screen  name="SignUpPersonalScreen" component={SignUpPersonalScreen}/>
    <Stack.Screen  name="ChooseCardsStandard5" component={ChooseCardsStandard5}/>
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



