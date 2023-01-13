import React, {useCallback, useState} from "react";
import { View,Text, Image, SafeAreaView, Pressable, StyleSheet, ScrollView } from "react-native";
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import 'expo-dev-menu';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";


import Account from "./app/screens/Account"
import AuthContext from "./app/auth/context";
import BusinessAddress2 from "./app/screens/BusinessAddress2"
import Carbon from "./app/screens/Carbon"
import CountryOfResidence from "./app/screens/CountryOfResidence"
import GlobalStyles from "./GlobalStyles";
import Name from "./app/screens/Name";
import OTPVerificationPersonal2 from "./app/screens/OTPVerificationPersonal2";
import PersonalOrBusiness from "./app/screens/PersonalOrBusiness";
import ProofOfResidencyListA1 from "./app/screens/ProofOfResidencyListA1";
import SignUpPersonalScreen from "./app/screens/SignUpPersonalScreen";
import ProofOfResidency from "./app/screens/ProofOfResidency";
import PersonalAddress from "./app/screens/PersonalAddress";
import DOB from "./app/screens/DOB"


// SplashScreen.preventAutoHideAsync(); 

const Stack = createNativeStackNavigator();
const StackNavigator = () => (
  <Stack.Navigator initialRouteName="">
    <Stack.Screen  name="SignUp" component={SignUpPersonalScreen} />
    <Stack.Screen  name="OTPVerification" component={OTPVerificationPersonal2} />
    <Stack.Screen  name="PersonalOrBusiness" component={PersonalOrBusiness} />
    <Stack.Screen  name="Name" component={Name} />
    <Stack.Screen  name="Proof" component={ProofOfResidency} />
    <Stack.Screen  name="PostCodeSignUp" component={BusinessAddress2} />
    <Stack.Screen  name="PersonalAddress" component={PersonalAddress} />
    <Stack.Screen  name="DOB" component={DOB} />
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



