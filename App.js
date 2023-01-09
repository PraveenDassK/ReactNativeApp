import React, {useCallback, useState} from "react";
import { View,Text, Image, SafeAreaView, Pressable, StyleSheet, ScrollView } from "react-native";
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import 'expo-dev-menu';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import SplashAnimation from "./app/screens/SplashAnimation";

import Onboarding1 from "./app/screens/Onboarding1"
import Onboarding2 from "./app/screens/Onboarding2"
import Onboarding3 from "./app/screens/Onboarding3"

import GlobalStyles from "./GlobalStyles";

import SignUpPersonalScreen from "./app/screens/SignUpPersonalScreen";
import OTPVerificationPersonal from "./app/screens/OTPVerificationPersonal";
import PersonalOrBusiness from "./app/screens/PersonalOrBusiness";
import Account from "./app/screens/Account"
import AuthContext from "./app/auth/context";
import Carbon from "./app/screens/Carbon"
import CarbonProject from "./app/screens/CarbonProject"
import ChooseCardsStandard5 from "./app/screens/ChooseCardsStandard5"
import LoginPersonal from "./app/screens/SignUpPersonal"
import CountryOfResidence from "./app/screens/CountryOfResidence"
import SignUpPersonal from "./app/screens/SignUpPersonal"
import FaceScan from "./app/screens/FaceScan"
import BiometrixComplete from "./app/screens/BiometrixComplete"
import Pin from "./app/screens/Pin"
import Success from "./app/screens/Success"
import Name from "./app/screens/Name"

import ProofOfResidencyList from "./app/screens/ProofOfResidencyList"
import ProofVerified from "./app/screens/ProofVerified"

// SplashScreen.preventAutoHideAsync(); 

const Stack = createNativeStackNavigator();
const StackNavigator = () => (
  
  <Stack.Navigator initialRouteName="carbon">
    <Stack.Screen  name="SplashAnimation" component={SplashAnimation}/>


    <Stack.Screen  name="Onboarding1" component={Onboarding1}/>
    <Stack.Screen  name="Onboarding2" component={Onboarding2}/>
    <Stack.Screen  name="Onboarding3" component={Onboarding3}/>
    <Stack.Screen  name="OTPVerificationPersonal" component={OTPVerificationPersonal}/>

    <Stack.Screen  name="ProofVerified" component={ProofVerified}/>
    <Stack.Screen  name="ProofOfResidencyList" component={ProofOfResidencyList}/>
    <Stack.Screen  name="Name" component={Name}/>
    <Stack.Screen  name="PersonalOrBusiness" component={PersonalOrBusiness}/>
    <Stack.Screen  name="Account" component={Account}/>

    <Stack.Screen  name="Success" component={Success}/>
    <Stack.Screen  name="Pin" component={Pin}/>

    <Stack.Screen  name="BiometrixComplete" component={BiometrixComplete}/>
    <Stack.Screen  name="FaceScan" component={FaceScan}/>

    <Stack.Screen  name="SignUpPersonal" component={SignUpPersonal}/>
    <Stack.Screen  name="CountryOfResidence" component={CountryOfResidence}/>

    <Stack.Screen  name="LoginPersonal" component={LoginPersonal}/>

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



