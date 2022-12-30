const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import LogoAnimation3 from "./screens/LogoAnimation3";
import Account from "./screens/Account";
import ConfirmDirectors from "./screens/ConfirmDirectors";
import DirectorsOrPartners2 from "./screens/DirectorsOrPartners2";
import DirectorsOrPartners from "./screens/DirectorsOrPartners";
import BusinessType from "./screens/BusinessType";
import Address1 from "./screens/Address1";
import CountryOfResidence from "./screens/CountryOfResidence";
import CurrentPhotoCardDrivingLic from "./screens/CurrentPhotoCardDrivingLic";
import BirthCertificate from "./screens/BirthCertificate";
import BankBuildingsocietymortgage from "./screens/BankBuildingsocietymortgage";
import BankBuildingsocietymortgage1 from "./screens/BankBuildingsocietymortgage1";
import PersonalAddress from "./screens/PersonalAddress";
import VerifyCode1 from "./screens/VerifyCode1";
import VerifyCode from "./screens/VerifyCode";
import VerifyYourIdentity from "./screens/VerifyYourIdentity";
import SelectBank1 from "./screens/SelectBank1";
import SelectBank from "./screens/SelectBank";
import SentMoney from "./screens/SentMoney";
import SendEnterPIN from "./screens/SendEnterPIN";
import SendAccountSelection from "./screens/SendAccountSelection";
import AddBeneficiarySchedulePay from "./screens/AddBeneficiarySchedulePay";
import SendContact from "./screens/SendContact";
import Requested from "./screens/Requested";
import RequestContact from "./screens/RequestContact";
import SendMoney from "./screens/SendMoney";
import FreezeCard from "./screens/FreezeCard";
import SendEnterPIN1 from "./screens/SendEnterPIN1";
import SpendingLimit1 from "./screens/SpendingLimit1";
import SetLimit from "./screens/SetLimit";
import SpendingLimit from "./screens/SpendingLimit";
import ItWasLost from "./screens/ItWasLost";
import IWasAVictimOfFraudOrThe from "./screens/IWasAVictimOfFraudOrThe";
import ItsDamagedOrDoesntWork from "./screens/ItsDamagedOrDoesntWork";
import ReplaceCard from "./screens/ReplaceCard";
import TerminatedCard from "./screens/TerminatedCard";
import Terminate from "./screens/Terminate";
import CardSettings from "./screens/CardSettings";
import MyCards from "./screens/MyCards";
import AddFundsSuccess from "./screens/AddFundsSuccess";
import ReviewAndConfirm from "./screens/ReviewAndConfirm";
import AddFunds from "./screens/AddFunds";
import CarbonSpending from "./screens/CarbonSpending";
import CarbonCart1 from "./screens/CarbonCart1";
import Carbon2 from "./screens/Carbon2";
import Analytics from "./screens/Analytics";
import ChooseCardsPremium from "./screens/ChooseCardsPremium";
import ChooseCardsElite from "./screens/ChooseCardsElite";
import ChooseCardsStandard2 from "./screens/ChooseCardsStandard2";
import Plan from "./screens/Plan";
import Account1 from "./screens/Account1";
import SpendingLimit2 from "./screens/SpendingLimit2";
import SetLimit1 from "./screens/SetLimit1";
import SpendingLimit3 from "./screens/SpendingLimit3";
import Account2 from "./screens/Account2";
import Account3 from "./screens/Account3";
import SecurityAndPrivacy from "./screens/SecurityAndPrivacy";
import SecurityAndPrivacy1 from "./screens/SecurityAndPrivacy1";
import Settings from "./screens/Settings";
import Carbon from "./screens/Carbon";
import ChooseCardsStandard5 from "./screens/ChooseCardsStandard5";
import FindFriends from "./screens/FindFriends";
import PushNotification from "./screens/PushNotification";
import LogoAnimation31 from "./screens/LogoAnimation31";
import LogoAnimation21 from "./screens/LogoAnimation21";
import LogoAnimation1 from "./screens/LogoAnimation1";
import DOB from "./screens/DOB";
import BusinessChooseAddress1 from "./screens/BusinessChooseAddress1";
import BusinessChooseAddress from "./screens/BusinessChooseAddress";
import BusinessAddress2 from "./screens/BusinessAddress2";
import ProofVerified from "./screens/ProofVerified";
import CurrentSignedPassportB from "./screens/CurrentSignedPassportB";
import ProofOfResidencyListA1 from "./screens/ProofOfResidencyListA1";
import CurrentSignedPassport from "./screens/CurrentSignedPassport";
import ProofOfResidencyListA from "./screens/ProofOfResidencyListA";
import Name from "./screens/Name";
import PersonalOrBusiness from "./screens/PersonalOrBusiness";
import Success from "./screens/Success";
import Pin from "./screens/Pin";
import BiometrixComplete from "./screens/BiometrixComplete";
import Biometrix2 from "./screens/Biometrix2";
import Biometrix1 from "./screens/Biometrix1";
import Biometrix from "./screens/Biometrix";
import FaceScanComplete from "./screens/FaceScanComplete";
import FaceScanning100 from "./screens/FaceScanning100";
import FaceScanning0 from "./screens/FaceScanning0";
import FaceScan from "./screens/FaceScan";
import OTPVerificationPersonal from "./screens/OTPVerificationPersonal";
import SignUpPersonal from "./screens/SignUpPersonal";
import Onboarding3 from "./screens/Onboarding3";
import Onboarding2 from "./screens/Onboarding2";
import Onboarding1 from "./screens/Onboarding1";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);
  const [fontsLoaded] = useFonts({
    "Typo Grotesk": require("./assets/fonts/Typo_Grotesk.ttf"),
    Helvetica: require("./assets/fonts/Helvetica.ttf"),
    Roboto: require("./assets/fonts/Roboto.ttf"),
    "SF Pro Display": require("./assets/fonts/SF_Pro_Display.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator
            initialRouteName="LogoAnimation3"
            screenOptions={{ headerShown: false }}
          >
            <Stack.Screen
              name="LogoAnimation3"
              component={LogoAnimation3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Account"
              component={Account}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ConfirmDirectors"
              component={ConfirmDirectors}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="DirectorsOrPartners2"
              component={DirectorsOrPartners2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="DirectorsOrPartners"
              component={DirectorsOrPartners}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="BusinessType"
              component={BusinessType}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Address1"
              component={Address1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CountryOfResidence"
              component={CountryOfResidence}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CurrentPhotoCardDrivingLicense"
              component={CurrentPhotoCardDrivingLic}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="BirthCertificate"
              component={BirthCertificate}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="BankBuildingsocietymortgageOrHMRCTaxstatement"
              component={BankBuildingsocietymortgage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="BankBuildingsocietymortgageOrHMRCTaxstatement1"
              component={BankBuildingsocietymortgage1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PersonalAddress"
              component={PersonalAddress}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="VerifyCode1"
              component={VerifyCode1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="VerifyCode"
              component={VerifyCode}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="VerifyYourIdentity"
              component={VerifyYourIdentity}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SelectBank1"
              component={SelectBank1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SelectBank"
              component={SelectBank}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SentMoney"
              component={SentMoney}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SendEnterPIN"
              component={SendEnterPIN}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SendAccountSelection"
              component={SendAccountSelection}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AddBeneficiarySchedulePayment1"
              component={AddBeneficiarySchedulePay}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SendContact"
              component={SendContact}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Requested"
              component={Requested}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="RequestContact"
              component={RequestContact}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SendMoney"
              component={SendMoney}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="FreezeCard"
              component={FreezeCard}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SendEnterPIN1"
              component={SendEnterPIN1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SpendingLimit1"
              component={SpendingLimit1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SetLimit"
              component={SetLimit}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SpendingLimit"
              component={SpendingLimit}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ItWasLost"
              component={ItWasLost}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IWasAVictimOfFraudOrTheft"
              component={IWasAVictimOfFraudOrThe}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ItsDamagedOrDoesntWork"
              component={ItsDamagedOrDoesntWork}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ReplaceCard"
              component={ReplaceCard}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="TerminatedCard"
              component={TerminatedCard}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Terminate"
              component={Terminate}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CardSettings"
              component={CardSettings}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MyCards"
              component={MyCards}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AddFundsSuccess"
              component={AddFundsSuccess}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ReviewAndConfirm"
              component={ReviewAndConfirm}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AddFunds"
              component={AddFunds}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CarbonSpending"
              component={CarbonSpending}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CarbonCart1"
              component={CarbonCart1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Carbon2"
              component={Carbon2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Analytics"
              component={Analytics}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ChooseCardsPremium"
              component={ChooseCardsPremium}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ChooseCardsElite"
              component={ChooseCardsElite}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ChooseCardsStandard2"
              component={ChooseCardsStandard2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Plan"
              component={Plan}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Account1"
              component={Account1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SpendingLimit2"
              component={SpendingLimit2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SetLimit1"
              component={SetLimit1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SpendingLimit3"
              component={SpendingLimit3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Account2"
              component={Account2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Account3"
              component={Account3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SecurityAndPrivacy"
              component={SecurityAndPrivacy}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SecurityAndPrivacy1"
              component={SecurityAndPrivacy1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Settings"
              component={Settings}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Carbon"
              component={Carbon}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ChooseCardsStandard5"
              component={ChooseCardsStandard5}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="FindFriends"
              component={FindFriends}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PushNotification"
              component={PushNotification}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LogoAnimation31"
              component={LogoAnimation31}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LogoAnimation21"
              component={LogoAnimation21}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LogoAnimation1"
              component={LogoAnimation1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="DOB"
              component={DOB}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="BusinessChooseAddress1"
              component={BusinessChooseAddress1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="BusinessChooseAddress"
              component={BusinessChooseAddress}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="BusinessAddress2"
              component={BusinessAddress2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ProofVerified"
              component={ProofVerified}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CurrentSignedPassportB"
              component={CurrentSignedPassportB}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ProofOfResidencyListA1"
              component={ProofOfResidencyListA1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CurrentSignedPassport"
              component={CurrentSignedPassport}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ProofOfResidencyListA"
              component={ProofOfResidencyListA}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Name"
              component={Name}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PersonalOrBusiness"
              component={PersonalOrBusiness}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Success"
              component={Success}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Pin"
              component={Pin}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="BiometrixComplete"
              component={BiometrixComplete}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Biometrix2"
              component={Biometrix2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Biometrix1"
              component={Biometrix1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Biometrix"
              component={Biometrix}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="FaceScanComplete"
              component={FaceScanComplete}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="FaceScanning100"
              component={FaceScanning100}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="FaceScanning0"
              component={FaceScanning0}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="FaceScan"
              component={FaceScan}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="OTPVerificationPersonal"
              component={OTPVerificationPersonal}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SignUpPersonal"
              component={SignUpPersonal}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Onboarding3"
              component={Onboarding3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Onboarding2"
              component={Onboarding2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Onboarding1"
              component={Onboarding1}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
