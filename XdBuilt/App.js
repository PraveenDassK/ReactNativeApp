const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import LogoAnimation3 from "./screens/LogoAnimation3";
import SecurityAndPrivacy from "./screens/SecurityAndPrivacy";
import SecurityAndPrivacy1 from "./screens/SecurityAndPrivacy1";
import Settings from "./screens/Settings";
import ChooseCardsPremium from "./screens/ChooseCardsPremium";
import ChooseCardsElite from "./screens/ChooseCardsElite";
import Onboarding3 from "./screens/Onboarding3";
import Onboarding2 from "./screens/Onboarding2";
import Onboarding1 from "./screens/Onboarding1";
import LogoAnimation2 from "./screens/LogoAnimation2";
import Carbon from "./screens/Carbon";
import YourForest5 from "./screens/YourForest5";
import CarbonSpending from "./screens/CarbonSpending";
import YourForest6 from "./screens/YourForest6";
import Trade from "./screens/Trade";
import ChooseCardsStandard4 from "./screens/ChooseCardsStandard4";
import Plan from "./screens/Plan";
import Crypto1 from "./screens/Crypto1";
import Account from "./screens/Account";
import Account1 from "./screens/Account1";
import Account2 from "./screens/Account2";
import CarbonCart1 from "./screens/CarbonCart1";
import CarbonCart from "./screens/CarbonCart";
import SpendingLimit3 from "./screens/SpendingLimit3";
import SetLimit1 from "./screens/SetLimit1";
import SpendingLimit2 from "./screens/SpendingLimit2";
import ChooseCardsStandard2 from "./screens/ChooseCardsStandard2";
import ChooseCardsStandard5 from "./screens/ChooseCardsStandard5";
import SchedulePayment from "./screens/SchedulePayment";
import VerifyCode1 from "./screens/VerifyCode1";
import VerifyCode from "./screens/VerifyCode";
import VerifyYourIdentity from "./screens/VerifyYourIdentity";
import SelectBank1 from "./screens/SelectBank1";
import SelectBank from "./screens/SelectBank";
import SendAccountSelection from "./screens/SendAccountSelection";
import AddBeneficiarySchedulePay from "./screens/AddBeneficiarySchedulePay";
import SendContact from "./screens/SendContact";
import Requested from "./screens/Requested";
import RequestContact from "./screens/RequestContact";
import SendMoney from "./screens/SendMoney";
import FreezeCard from "./screens/FreezeCard";
import SendEnterPIN1 from "./screens/SendEnterPIN1";
import MyCards from "./screens/MyCards";
import AddFundsSuccess from "./screens/AddFundsSuccess";
import ReviewAndConfirm from "./screens/ReviewAndConfirm";
import AddFunds from "./screens/AddFunds";
import Account3 from "./screens/Account3";
import BankTransfer from "./screens/BankTransfer";
import SplitBill from "./screens/SplitBill";
import SpendingLimit1 from "./screens/SpendingLimit1";
import SetLimit from "./screens/SetLimit";
import SpendingLimit from "./screens/SpendingLimit";
import CardSettings from "./screens/CardSettings";
import AddBeneficiary from "./screens/AddBeneficiary";
import UpcomingBills from "./screens/UpcomingBills";
import AddMembersToTheGroup from "./screens/AddMembersToTheGroup";
import AddBeneficiarySchedulePay1 from "./screens/AddBeneficiarySchedulePay1";
import BankTransferAmount from "./screens/BankTransferAmount";
import AddGroupName from "./screens/AddGroupName";
import PaymentOnMonthOrWeek from "./screens/PaymentOnMonthOrWeek";
import BillPaidSuccessfully from "./screens/BillPaidSuccessfully";
import SplitAmount from "./screens/SplitAmount";
import SuccessScheduledPayment from "./screens/SuccessScheduledPayment";
import AddBeneficiarySuccess from "./screens/AddBeneficiarySuccess";
import SplitSummary from "./screens/SplitSummary";
import Reminder from "./screens/Reminder";
import ItsDamagedOrDoesntWork from "./screens/ItsDamagedOrDoesntWork";
import IWasAVictimOfFraudOrThe from "./screens/IWasAVictimOfFraudOrThe";
import ItWasLost from "./screens/ItWasLost";
import ReplaceCard from "./screens/ReplaceCard";
import TerminatedCard from "./screens/TerminatedCard";
import Terminate from "./screens/Terminate";
import SentMoney from "./screens/SentMoney";
import Analytics from "./screens/Analytics";
import ReviewAndConfirm1 from "./screens/ReviewAndConfirm1";
import LogoAnimation32 from "./screens/LogoAnimation32";
import DOB from "./screens/DOB";
import FindFriends from "./screens/FindFriends";
import PushNotification from "./screens/PushNotification";
import LogoAnimation31 from "./screens/LogoAnimation31";
import LogoAnimation21 from "./screens/LogoAnimation21";
import LogoAnimation1 from "./screens/LogoAnimation1";
import ProofOfResidencyListA1 from "./screens/ProofOfResidencyListA1";
import PersonalAddress from "./screens/PersonalAddress";
import BusinessChooseAddress from "./screens/BusinessChooseAddress";
import BusinessChooseAddress1 from "./screens/BusinessChooseAddress1";
import BusinessAddress2 from "./screens/BusinessAddress2";
import FaceScanning1001 from "./screens/FaceScanning1001";
import ConfirmDirectors from "./screens/ConfirmDirectors";
import DirectorsOrPartners2 from "./screens/DirectorsOrPartners2";
import ProofVerified from "./screens/ProofVerified";
import ProofOfResidencyListA from "./screens/ProofOfResidencyListA";
import Name from "./screens/Name";
import PersonalOrBusiness from "./screens/PersonalOrBusiness";
import Success from "./screens/Success";
import Pin from "./screens/Pin";
import BiometrixComplete from "./screens/BiometrixComplete";
import FaceScanComplete from "./screens/FaceScanComplete";
import FaceScan from "./screens/FaceScan";
import CountryOfResidence from "./screens/CountryOfResidence";
import DirectorsOrPartners from "./screens/DirectorsOrPartners";
import BusinessType from "./screens/BusinessType";
import Address1 from "./screens/Address1";
import OTPVerificationPersonal2 from "./screens/OTPVerificationPersonal2";
import SignUpPersonal1 from "./screens/SignUpPersonal1";
import SignUpPersonal3 from "./screens/SignUpPersonal3";
import LogoAnimation from "./screens/LogoAnimation";
import Onboarding31 from "./screens/Onboarding31";
import Onboarding21 from "./screens/Onboarding21";
import Onboarding11 from "./screens/Onboarding11";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);
  const [fontsLoaded] = useFonts({
    "Typo Grotesk": require("./assets/fonts/Typo_Grotesk.ttf"),
    Helvetica: require("./assets/fonts/Helvetica.ttf"),
    "Poppins-SemiBold": require("./assets/fonts/Poppins-SemiBold.ttf"),
    "Segoe UI": require("./assets/fonts/Segoe_UI.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator
            initialRouteName="LogoAnimation2"
            screenOptions={{ headerShown: false }}
          >
            <Stack.Screen
              name="LogoAnimation3"
              component={LogoAnimation3}
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
            <Stack.Screen
              name="LogoAnimation2"
              component={LogoAnimation2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Carbon"
              component={Carbon}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="YourForest5"
              component={YourForest5}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CarbonSpending"
              component={CarbonSpending}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="YourForest6"
              component={YourForest6}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Trade"
              component={Trade}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ChooseCardsStandard4"
              component={ChooseCardsStandard4}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Plan"
              component={Plan}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Crypto"
              component={Crypto1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Account"
              component={Account}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Account1"
              component={Account1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Account2"
              component={Account2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CarbonCart1"
              component={CarbonCart1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CarbonCart"
              component={CarbonCart}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SpendingLimit3"
              component={SpendingLimit3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SetLimit1"
              component={SetLimit1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SpendingLimit2"
              component={SpendingLimit2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ChooseCardsStandard2"
              component={ChooseCardsStandard2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ChooseCardsStandard5"
              component={ChooseCardsStandard5}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SchedulePayment"
              component={SchedulePayment}
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
              name="Account3"
              component={Account3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="BankTransfer"
              component={BankTransfer}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SplitBill"
              component={SplitBill}
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
              name="CardSettings"
              component={CardSettings}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AddBeneficiary"
              component={AddBeneficiary}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="UpcomingBills"
              component={UpcomingBills}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AddMembersToTheGroup"
              component={AddMembersToTheGroup}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AddBeneficiarySchedulePayment"
              component={AddBeneficiarySchedulePay1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="BankTransferAmount"
              component={BankTransferAmount}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AddGroupName"
              component={AddGroupName}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PaymentOnMonthOrWeek"
              component={PaymentOnMonthOrWeek}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="BillPaidSuccessfully"
              component={BillPaidSuccessfully}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SplitAmount"
              component={SplitAmount}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SuccessScheduledPayment"
              component={SuccessScheduledPayment}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AddBeneficiarySuccess"
              component={AddBeneficiarySuccess}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SplitSummary"
              component={SplitSummary}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Reminder"
              component={Reminder}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ItsDamagedOrDoesntWork"
              component={ItsDamagedOrDoesntWork}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IWasAVictimOfFraudOrTheft"
              component={IWasAVictimOfFraudOrThe}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ItWasLost"
              component={ItWasLost}
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
              name="SentMoney"
              component={SentMoney}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Analytics"
              component={Analytics}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ReviewAndConfirm1"
              component={ReviewAndConfirm1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LogoAnimation32"
              component={LogoAnimation32}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="DOB"
              component={DOB}
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
              name="ProofOfResidencyListA1"
              component={ProofOfResidencyListA1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PersonalAddress"
              component={PersonalAddress}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="BusinessChooseAddress"
              component={BusinessChooseAddress}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="BusinessChooseAddress1"
              component={BusinessChooseAddress1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="BusinessAddress2"
              component={BusinessAddress2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="FaceScanning1001"
              component={FaceScanning1001}
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
              name="ProofVerified"
              component={ProofVerified}
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
              name="FaceScanComplete"
              component={FaceScanComplete}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="FaceScan"
              component={FaceScan}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CountryOfResidence"
              component={CountryOfResidence}
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
              name="OTPVerificationPersonal2"
              component={OTPVerificationPersonal2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SignUpPersonal1"
              component={SignUpPersonal1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SignUpPersonal3"
              component={SignUpPersonal3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LogoAnimation"
              component={LogoAnimation}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Onboarding31"
              component={Onboarding31}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Onboarding21"
              component={Onboarding21}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Onboarding11"
              component={Onboarding11}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
