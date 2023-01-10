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

import ChooseCardsPremium from "./app/screens/ChooseCardsPremium";
import ChooseCardsElite from "./app/screens/ChooseCardsElite";
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
import SignUpPersonal3 from "./app/screens/SignUpPersonal3";
import FaceScan from "./app/screens/FaceScan"
import BiometrixComplete from "./app/screens/BiometrixComplete"
import Pin from "./app/screens/Pin"
import Success from "./app/screens/Success"
import Name from "./app/screens/Name"
import MyCards from "./app/screens/MyCards"
import ProofOfResidencyList from "./app/screens/ProofOfResidencyList"
import ProofVerified from "./app/screens/ProofVerified"
import SendEnterPIN1 from "./app/screens/SendEnterPIN1";
import SendEnterPIN from "./app/screens/SendEnterPIN";
import FreezeCard from "./app/screens/FreezeCard";
import CardSettings from "./app/screens/CardSettings";
import SetLimit from "./app/screens/SetLimit";
import SpendingLimit from "./app/screens/SpendingLimit";
import SpendingLimit1 from "./app/screens/SpendingLimit1";
import CarbonSpending from "./app/screens/CarbonSpending";
import OTPVerificationPersonal2 from "./app/screens/OTPVerificationPersonal2";
import Account3 from "./app/screens/Account3";
import Account2 from "./app/screens/Account2";
import SpendingLimit3 from "./app/screens/SpendingLimit3";
import SpendingLimit2 from "./app/screens/SpendingLimit2";
import ItsDamagedOrDoesntWork from "./app/screens/ItsDamagedOrDoesntWork";
import IWasAVictimOfFraudOrThe from "./app/screens/IWasAVictimOfFraudOrThe";
import Terminate from "./app/screens/Terminate";
import TerminatedCard from "./app/screens/TerminatedCard";
import ItWasLost from "./app/screens/ItWasLost";
import ReplaceCard from "./app/screens/ReplaceCard";
import AddBeneficiarySuccess from "./app/screens/AddBeneficiarySuccess";
import BankTransferAmount from "./app/screens/BankTransferAmount";
import VerifyCode1 from "./app/screens/VerifyCode1";
import VerifyCode from "./app/screens/VerifyCode";
import AddBeneficiary from "./app/screens/AddBeneficiary";
import VerifyYourIdentity from "./app/screens/VerifyYourIdentity";
import SelectBank1 from "./app/screens/SelectBank1";
import SelectBank from "./app/screens/SelectBank";
import SentMoney from "./app/screens/SentMoney";
import CarbonCart1 from "./app/screens/CarbonCart1";
import AddFundsSuccess from "./app/screens/AddFundsSuccess";
import BusinessChooseAddress1 from "./app/screens/BusinessChooseAddress1";
import ConfirmDirectors from "./app/screens/ConfirmDirectors";
import DirectorsOrPartners from "./app/screens/DirectorsOrPartners";
// SplashScreen.preventAutoHideAsync(); 

const Stack = createNativeStackNavigator();
const StackNavigator = () => (
  
  <Stack.Navigator initialRouteName="carbon">
    <Stack.Screen  name="SplashAnimation" component={SplashAnimation}/>


    <Stack.Screen name="FreezeCard" component={FreezeCard}/>
    <Stack.Screen name="DirectorsOrPartners" component={DirectorsOrPartners}/>
    <Stack.Screen name="ConfirmDirectors" component={ConfirmDirectors}/>
    <Stack.Screen name="ChooseCardsPremium" component={ChooseCardsPremium}/>
    <Stack.Screen name="BusinessChooseAddress1" component={BusinessChooseAddress1}/>
    <Stack.Screen name="ChooseCardsElite" component={ChooseCardsElite}/>
    <Stack.Screen name="SendEnterPIN1" component={SendEnterPIN1}/>
    <Stack.Screen name="SendEnterPIN" component={SendEnterPIN}/>
    <Stack.Screen  name="Onboarding1" component={Onboarding1}/>
    <Stack.Screen  name="Onboarding2" component={Onboarding2}/>
    <Stack.Screen  name="Onboarding3" component={Onboarding3}/>
    <Stack.Screen  name="OTPVerificationPersonal" component={OTPVerificationPersonal}/>
    <Stack.Screen  name="OTPVerificationPersonal2" component={OTPVerificationPersonal2}/>
    <Stack.Screen  name="Account3" component={Account3}/>
    <Stack.Screen  name="Account2" component={Account2}/>
    <Stack.Screen  name="SpendingLimit3" component={SpendingLimit3}/>
    <Stack.Screen  name="ItsDamagedOrDoesntWork" component={ItsDamagedOrDoesntWork}/>
    <Stack.Screen  name="IWasAVictimOfFraudOrThe" component={IWasAVictimOfFraudOrThe}/>
    <Stack.Screen  name="ProofVerified" component={ProofVerified}/>
    <Stack.Screen  name="ProofOfResidencyList" component={ProofOfResidencyList}/>
    <Stack.Screen  name="Name" component={Name}/>
    <Stack.Screen  name="PersonalOrBusiness" component={PersonalOrBusiness}/>
    <Stack.Screen  name="Account" component={Account}/>
    <Stack.Screen  name="Terminate" component={Terminate}/>
    <Stack.Screen  name="TerminatedCard" component={TerminatedCard}/>
    <Stack.Screen  name="Success" component={Success}/>
    <Stack.Screen  name="Pin" component={Pin}/>
    <Stack.Screen  name="ItWasLost" component={ItWasLost}/>
    <Stack.Screen  name="ReplaceCard" component={ReplaceCard}/>
    <Stack.Screen  name="AddBeneficiarySuccess" component={AddBeneficiarySuccess}/>
    <Stack.Screen  name="BankTransferAmount" component={BankTransferAmount}/>
    <Stack.Screen  name="VerifyCode1" component={VerifyCode1}/>
    <Stack.Screen  name="VerifyCode" component={VerifyCode}/>
    <Stack.Screen  name="AddBeneficiary" component={AddBeneficiary}/>
    <Stack.Screen  name="VerifyYourIdentity" component={VerifyYourIdentity}/>
    <Stack.Screen  name="SelectBank1" component={SelectBank1}/>
    <Stack.Screen  name="SelectBank" component={SelectBank}/>
    <Stack.Screen  name="SentMoney" component={SentMoney}/>
    <Stack.Screen  name="CarbonCart1" component={CarbonCart1}/>
    <Stack.Screen  name="AddFundsSuccess" component={AddFundsSuccess}/>

    <Stack.Screen  name="BiometrixComplete" component={BiometrixComplete}/>
    <Stack.Screen  name="FaceScan" component={FaceScan}/>

    <Stack.Screen  name="SignUpPersonal" component={SignUpPersonal}/>
    <Stack.Screen  name="SignUpPersonal3" component={SignUpPersonal3}/>
    <Stack.Screen  name="CountryOfResidence" component={CountryOfResidence}/>

    <Stack.Screen  name="LoginPersonal" component={LoginPersonal}/>

    <Stack.Screen  name="Carbon" component={Carbon}/>
    
    <Stack.Screen  name="SignUpPersonalScreen" component={SignUpPersonalScreen}/>
    <Stack.Screen  name="ChooseCardsStandard5" component={ChooseCardsStandard5}/>
    <Stack.Screen  name="CarbonProject" component={CarbonProject}/>

    <Stack.Screen name="MyCars" component={MyCards}/>
    <Stack.Screen name="CardSettings" component={CardSettings}/>
    <Stack.Screen name="SetLimit" component={SetLimit}/>
    <Stack.Screen name="SpendingLimit" component={SpendingLimit}/> 
    <Stack.Screen name="SpendingLimit1" component={SpendingLimit1}/>
    <Stack.Screen name="SpendingLimit2" component={SpendingLimit2}/>
    <Stack.Screen name="CarbonSpending" component={CarbonSpending}/>
    
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



