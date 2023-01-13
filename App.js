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
import CountryOfResidence from "./app/screens/CountryOfResidence"
import SignUpPersonal from "./app/screens/SignUpPersonal"
import FaceScan from "./app/screens/FaceScan"
import BiometrixComplete from "./app/screens/BiometrixComplete"
import Pin from "./app/screens/Pin"
import Success from "./app/screens/Success"
import Name from "./app/screens/Name"

import SignUpPersonal3 from "./app/screens/SignUpPersonal3";


import SendEnterPIN from "./app/screens/SendEnterPIN";

import BusinessChooseAddress from "./app/screens/BusinessChooseAddress";

import ChooseCardsPremium from "./app/screens/ChooseCardsPremium";
import ChooseCardsElite from "./app/screens/ChooseCardsElite";

import ProofOfResidencyList from "./app/screens/ProofOfResidencyList"
import SendMoney from "./app/screens/SendMoney"
import BankTransfer from "./app/screens/BankTransfer"
import Analytics from "./app/screens/Analytics"
import SecurityAndPrivacy from "./app/screens/SecurityAndPrivacy"
import FindFriends from "./app/screens/FindFriends"
import PersonalAddress from "./app/screens/PersonalAddress"
import ReviewAndConfirm from "./app/screens/ReviewAndConfirm"
import SendAccountSelection from "./app/screens/SendAccountSelection"

import MyCards from "./app/screens/MyCards"

import ProofVerified from "./app/screens/ProofVerified"
import BusinessAddress2 from "./app/screens/BusinessAddress2"
import AddFunds from "./app/screens/AddFunds"
import AddFundsSuccess from "./app/screens/AddFundsSuccess";

import SendEnterPIN1 from "./app/screens/SendEnterPIN1";
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
import AddBeneficiarySchedulePay1 from "./app/screens/AddBeneficiarySchedulePay1";
import Address1 from "./app/screens/Address1";
import ConfirmDirectors from "./app/screens/ConfirmDirectors";
import DirectorsOrPartners from "./app/screens/DirectorsOrPartners";

import PushNotification from "./app/screens/PushNotifications";
import DOB from "./app/screens/DOB"

import SendContact from "./app/screens/SendContact";
import RequestContact from "./app/screens/RequestContact"
import Requested from "./app/screens/Requested"
import Settings from "./app/screens/Settings";
import BusinessType from "./app/screens/BusinessType";
import CarbonCart1 from "./app/screens/CarbonCart1";
import SentMoney from "./app/screens/SentMoney";

import SelectBank from "./app/screens/SelectBank";
import SelectBank1 from "./app/screens/SelectBank1";
import VerifyYourIdentity from "./app/screens/VerifyYourIdentity";




const Stack = createNativeStackNavigator();
const StackNavigator = () => (
  
  <Stack.Navigator initialRouteName="Settings">
    <Stack.Screen  name="SplashAnimation" component={SplashAnimation}/>

    <Stack.Screen  name="Onboarding1" component={Onboarding1}/>
    <Stack.Screen  name="Onboarding2" component={Onboarding2}/>
    <Stack.Screen  name="Onboarding3" component={Onboarding3}/>

    <Stack.Screen  name="SignUpPersonal" component={SignUpPersonal}/>

    <Stack.Screen  name="OTPVerificationPersonal" component={OTPVerificationPersonal}/>
    <Stack.Screen  name="BiometrixComplete" component={BiometrixComplete}/>

    <Stack.Screen  name="Pin" component={Pin}/>
    <Stack.Screen  name="Success" component={Success}/>

    <Stack.Screen  name="PersonalOrBusiness" component={PersonalOrBusiness}/>
    <Stack.Screen  name="Name" component={Name}/>

    <Stack.Screen  name="ProofOfResidencyList" component={ProofOfResidencyList}/>
    <Stack.Screen name="ProofVerified" component={ProofVerified}/>

    <Stack.Screen  name="BusinessAddress2" component={BusinessAddress2}/>

    <Stack.Screen  name="Account" component={Account}/>
    <Stack.Screen  name="AddFunds" component={AddFunds}/>
    <Stack.Screen  name="AddFundsSuccess" component={AddFundsSuccess}/>
    <Stack.Screen  name="SendMoney" component={SendMoney}/>
    <Stack.Screen  name="RequestContact" component={RequestContact}/>
    <Stack.Screen  name="SendContact" component={SendContact}/>

    <Stack.Screen  name="BankTransfer" component={BankTransfer}/>
    <Stack.Screen  name="BankTransferAmount" component={BankTransferAmount}/>

    <Stack.Screen  name="Requested" component={Requested}/>

    <Stack.Screen  name="Settings" component={Settings}/>
    <Stack.Screen  name="SecurityAndPrivacy" component={SecurityAndPrivacy}/>
    
    <Stack.Screen  name="Analytics" component={Analytics}/>
    <Stack.Screen  name="DOB" component={DOB}/>
    <Stack.Screen  name="PushNotification" component={PushNotification}/>

    <Stack.Screen  name="FindFriends" component={FindFriends}/>
    <Stack.Screen  name="PersonalAddress" component={PersonalAddress}/>
    <Stack.Screen  name="ReviewAndConfirm" component={ReviewAndConfirm}/>

    <Stack.Screen  name="SendAccountSelection" component={SendAccountSelection}/>
    
    <Stack.Screen  name="BusinessChooseAddress" component={BusinessChooseAddress}/>
    <Stack.Screen  name="CountryOfResidence" component={CountryOfResidence}/>
    <Stack.Screen  name="Address1" component={Address1}/>
    <Stack.Screen  name="BusinessType" component={BusinessType}/>
    <Stack.Screen  name="DirectorsOrPartners" component={DirectorsOrPartners}/>
    <Stack.Screen  name="ConfirmDirectors" component={ConfirmDirectors}/>

    <Stack.Screen name="ChooseCardsElite" component={ChooseCardsElite}/>

    <Stack.Screen name="CarbonCart1" component={CarbonCart1}/>
    <Stack.Screen name="SentMoney" component={SentMoney}/>

    <Stack.Screen name="SelectBank" component={SelectBank}/>
    <Stack.Screen name="SelectBank1" component={SelectBank1}/>
    
    <Stack.Screen name="VerifyYourIdentity" component={VerifyYourIdentity}/>

    
    <Stack.Screen  name="VerifyCode1" component={VerifyCode1}/>
    <Stack.Screen  name="VerifyCode" component={VerifyCode}/>

    <Stack.Screen  name="AddBeneficiary" component={AddBeneficiary}/>
    <Stack.Screen  name="AddBeneficiarySchedulePay1" component={AddBeneficiarySchedulePay1}/>
    <Stack.Screen  name="AddBeneficiarySuccess" component={AddBeneficiarySuccess}/>

    <Stack.Screen  name="ReplaceCard" component={ReplaceCard}/>
    <Stack.Screen  name="ItWasLost" component={ItWasLost}/>
    <Stack.Screen  name="TerminatedCard" component={TerminatedCard}/>
    <Stack.Screen  name="Terminate" component={Terminate}/>
    <Stack.Screen  name="IWasAVictimOfFraudOrThe" component={IWasAVictimOfFraudOrThe}/>
    <Stack.Screen  name="ItsDamagedOrDoesntWork" component={ItsDamagedOrDoesntWork}/>
    <Stack.Screen name="MyCars" component={MyCards}/>
    <Stack.Screen name="FreezeCard" component={FreezeCard}/>
    <Stack.Screen name="CardSettings" component={CardSettings}/>
    <Stack.Screen name="SpendingLimit" component={SpendingLimit}/> 
    <Stack.Screen name="SetLimit" component={SetLimit}/>

    <Stack.Screen  name="Carbon" component={Carbon}/>
    <Stack.Screen name="CarbonSpending" component={CarbonSpending}/>

    <Stack.Screen  name="SignUpPersonal3" component={SignUpPersonal3}/>
    <Stack.Screen  name="OTPVerificationPersonal2" component={OTPVerificationPersonal2}/>



    <Stack.Screen name="ChooseCardsPremium" component={ChooseCardsPremium}/>
    <Stack.Screen name="SendEnterPIN1" component={SendEnterPIN1}/>
    <Stack.Screen name="SendEnterPIN" component={SendEnterPIN}/>

    <Stack.Screen  name="FaceScan" component={FaceScan}/>

    
    <Stack.Screen  name="SignUpPersonalScreen" component={SignUpPersonalScreen}/>
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



