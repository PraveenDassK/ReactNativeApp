import React, {useCallback} from "react";
import { View,Text, Image, SafeAreaView, Pressable, StyleSheet, ScrollView } from "react-native";
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import 'expo-dev-menu';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import PersonalAddress from "./app/screens/PersonalAddress"
import ReviewAndConfirm from "./app/screens/ReviewAndConfirm"
import SendAccountSelection from "./app/screens/SendAccountSelection"
import BusinessChooseAddress from "./app/screens/BusinessChooseAddress"
import CountryOfResidence from "./app/screens/CountryOfResidence"
import Address1 from "./app/screens/Address1"
import BusinessType from "./app/screens/BusinessType"
import DirectorsOrPartners from "./app/screens/DirectorsOrPartners"
import BusinessAddress2 from "./app/screens/BusinessAddress2"
import FindFriends from "./app/screens/FindFriends"
import LogoAnimationError from "./app/screens/LogoAnimationError"
//import MyCards from "./app/screens/MyCards"
//import ProofOfResidencyListA1 from "./app/screens/ProofOfResidencyListA1"
import PushNotifications from "./app/screens/PushNotifications"
import LogoAnimation3 from "./app/screens/LogoAnimation3"
import SecurityAndPrivacy from "./app/screens/SecurityAndPrivacy"
import Onboarding1 from "./app/screens/Onboarding1"
import SignUpPersonal1 from "./app/screens/SignUpPersonal1"
import SendEnterPIN from "./app/screens/SendEnterPIN"
import Carbon from "./app/screens/Carbon"
//import ChooseCardsElite from "./app/screens/ChooseCardsElite"
import DOB from "./app/screens/DOB"
import OTPVerificationPersonal2 from "./app/screens/OTPVerificationPersonal2"
import ChooseCardsPremium from "./app/screens/ChooseCardsPremium"
import AddFundsSuccess from "./app/screens/AddFundsSuccess"
import PersonalOrBusiness from "./app/screens/PersonalOrBusiness"

import SignUpPersonalScreen from "./app/screens/SignUpPersonalScreen";
import OTPVerificationPersonal2 from "./app/screens/OTPVerificationPersonal2";
import PersonalOrBusiness from "./app/screens/PersonalOrBusiness";
import Account from "./app/screens/Account"
import GlobalStyles from "./GlobalStyles";
import AuthContext from "./app/auth/context";


// SplashScreen.preventAutoHideAsync(); 

const Stack = createNativeStackNavigator();
const StackNavigator = () => (
  <Stack.Navigator initialRouteName="SignUp">
    <Stack.Screen  name="SignUp" component={SignUpPersonalScreen} />
    <Stack.Screen  name="OTPVerification" component={OTPVerificationPersonal2} />
  </Stack.Navigator>
)

export default function App() {
  return (
    <AuthContext.Provider value={{user, setUser}}>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </AuthContext.Provider>
    
  )
}