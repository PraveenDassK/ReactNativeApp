const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import Account3 from "./screens/Account3";
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
import Great70 from "./screens/Great70";
import FindFriends from "./screens/FindFriends";
import PushNotification from "./screens/PushNotification";
import LogoAnimation31 from "./screens/LogoAnimation31";
import LogoAnimation21 from "./screens/LogoAnimation21";
import LogoAnimation1 from "./screens/LogoAnimation1";
import ChooseCurrency from "./screens/ChooseCurrency";
import ChooseCardsPremium from "./screens/ChooseCardsPremium";
import ChooseCardsStandard from "./screens/ChooseCardsStandard";
import ChooseCardsElite from "./screens/ChooseCardsElite";
import ChooseCardsStandard2 from "./screens/ChooseCardsStandard2";
import Plan from "./screens/Plan";
import Account1 from "./screens/Account1";
import SpendingLimit2 from "./screens/SpendingLimit2";
import SetLimit1 from "./screens/SetLimit1";
import SpendingLimit3 from "./screens/SpendingLimit3";
import Account2 from "./screens/Account2";
import Account from "./screens/Account";
import SecurityAndPrivacy from "./screens/SecurityAndPrivacy";
import SecurityAndPrivacy1 from "./screens/SecurityAndPrivacy1";
import Settings from "./screens/Settings";
import Carbon from "./screens/Carbon";
import ChooseCardsStandard5 from "./screens/ChooseCardsStandard5";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  useFonts({
    Roboto: require("./assets/fonts/Roboto.ttf"),
    Helvetica: require("./assets/fonts/Helvetica.ttf"),
    "Typo Grotesk": require("./assets/fonts/Typo_Grotesk.ttf"),
    "SF Pro Display": require("./assets/fonts/SF_Pro_Display.ttf"),
    "SF Pro Text": require("./assets/fonts/SF_Pro_Text.ttf"),
  });

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="Account3"
              component={Account3}
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
              name="Great70"
              component={Great70}
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
              name="ChooseCurrency"
              component={ChooseCurrency}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ChooseCardsPremium"
              component={ChooseCardsPremium}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ChooseCardsStandard"
              component={ChooseCardsStandard}
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
              name="Account"
              component={Account}
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
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
