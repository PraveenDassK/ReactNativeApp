import React from "react";

import { Animated }from "react-native-reanimated";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { gestureHandlerRootHOC } from "react-native-gesture-handler";


// import { MaterialCommunityIcons } from "@expo/vector-icons";

// import AccountNavigator from "./AccountNavigator";
// import FeedNavigator from "./FeedNavigator";
// import ListingEditScreen from "../screens/ListingEditScreen";
// import NewListingButton from "./NewListingButton";
// import routes from "./routes";
// import navigation from "./rootNavigation";
// import useNotifications from "../hooks/useNotifications";
import AccountMain from "../screens/AccountMain";
import Analytics from "../screens/Analytics";
import Carbon from "../screens/Carbon";
import Settings from "../screens/Settings";
import FaceScan from "../screens/FaceScan";
//Main screen
import AccountDummy from "../screens/AccountDummy";
//import SwitchAccount from "../screens/SwitchAccount"

/**
 * @notice Screens on account page to navigate to
 */
//Add funds
import AddFunds from "../screens/AddFunds"

//Send money
import SendMoney from "../screens/SendMoney"
import AddBeneficiary from "../screens/AddBeneficiary"
import BankTransferAmount from "../screens/BankTransferAmount"

//Generic
//Used by add funds and send money
import Pin from "../screens/Pin"
import Success from "../screens/Success"

/**
 * @notice Screens for card settings
 */
import MyCards from "../screens/MyCards"
import CardSettings from "../screens/CardSettings"
import SpendingLimit from "../screens/SpendingLimit"
import SetLimit from "../screens/SetLimit"

import ReplaceCard from "../screens/ReplaceCard"
import ItsDamagedOrDoesntWork from "../screens/ItsDamagedOrDoesntWork"
import ItWasLost from "../screens/ItWasLost"
import IWasAVictimOfFraudOrThe from "../screens/IWasAVictimOfFraudOrThe"
import Terminate from "../screens/Terminate"
import TerminatedCard from "../screens/TerminatedCard"

//No pages for analysis

/**
 * @notice Screens on the carbon page to navigate to
 */
import CarbonCart from "../screens/CarbonCart"
import CarbonProject from "../screens/CarbonProject"
import VirtualEcoSystem from "../screens/VirtualEcoSystem"
import ChooseCardsStandard5 from "../screens/ChooseCardsStandard5"

/**
 * @notice Screens on the settings page to navigate to
 */
import ChooseCardsElite from "../screens/ChooseCardsElite"
import SecurityAndPrivacy from "../screens/SecurityAndPrivacy"
import AccountSettings from "../screens/AccountSettings"
import Transactions from "../screens/Transactions"
import AccountLetter from "../screens/AccountLetter"

import TermsAndConditions from "../screens/TermsAndConditions"
import SwitchAccounts from "../screens/SwitchAccounts"
import CarbonTonnesRemoved from "../screens/CarbonTonnesRemoved"
import CarbonSpending from "../screens/CarbonSpending"
import Login from "../screens/Login"
import SignUpPersonal from "../screens/SignUpPersonal";
import TestEnviro from "../screens/TestEnviro";
//Tabs and navs
const Tab = createMaterialTopTabNavigator();
const Stack = createNativeStackNavigator();

const leftToRightAnimation = {
  cardStyleInterpolator: ({ current, layouts }) => {
    return {
      cardStyle: {
        transform: [
          {
            translateX: current.progress.interpolate({
              inputRange: [0, 1],
              outputRange: [layouts.screen.width, 0],
            }),
          },
        ],
      },
    };
  },
};

const StackNavigator = () => {
   return(
     <Stack.Navigator
      initialRouteName="AccountMain">
        
      <Stack.Screen 
        name="Account" 
        component={AppNavigator}
        options={{
          title: "Pin",
       
        }}
      />
      

      <Stack.Screen 
        name="AddFunds" 
        component={gestureHandlerRootHOC(AddFunds)}
        options={{
          title: "AddFunds",
       
        }}
      />

      <Stack.Screen 
        name="SendMoney" 
        component={gestureHandlerRootHOC(SendMoney)}
        options={{
          title: "SendMoney",
       
        }}
      />

      <Stack.Screen 
        name="Pin" 
        component={gestureHandlerRootHOC(Pin)}
        options={{
          title: "Pin",
       
        }}
      />

    <Stack.Screen 
        name="Success" 
        component={gestureHandlerRootHOC(Success)}
        options={{
          title: "Success",
       
        }}
      />

    <Stack.Screen 
        name="AddBeneficiary" 
        component={gestureHandlerRootHOC(AddBeneficiary)}
        options={{
          title: "AddBeneficiary",
       
        }}
      />

      <Stack.Screen 
        name="BankTransferAmount" 
        component={gestureHandlerRootHOC(BankTransferAmount)}
        options={{
          title: "BankTransferAmount",
       
        }}
      />

    <Stack.Screen 
        name="MyCards" 
        component={gestureHandlerRootHOC(MyCards)}
        options={{
          title: "MyCards",
       
        }}
      />

    <Stack.Screen 
        name="CardSettings" 
        component={gestureHandlerRootHOC(CardSettings)}
        options={{
          title: "CardSettings",
       
        }}
      />

    <Stack.Screen 
        name="SpendingLimit" 
        component={gestureHandlerRootHOC(SpendingLimit)}
        options={{
          title: "SpendingLimit",
       
        }}
      />

    <Stack.Screen 
        name="SetLimit" 
        component={gestureHandlerRootHOC(SetLimit)}
        options={{
          title: "SetLimit",
       
        }}
      />

  <Stack.Screen 
        name="ReplaceCard" 
        component={gestureHandlerRootHOC(ReplaceCard)}
        options={{
          title: "ReplaceCard",
       
        }}
      />
      
      <Stack.Screen 
        name="ItsDamagedOrDoesntWork" 
        component={gestureHandlerRootHOC(ItsDamagedOrDoesntWork)}
        options={{
          title: "ItsDamagedOrDoesntWork",
       
        }}
      />
        <Stack.Screen 
        name="ItWasLost" 
        component={gestureHandlerRootHOC(ItWasLost)}
        options={{
          title: "ItWasLost",
       
        }}
      />
        <Stack.Screen 
        name="IWasAVictimOfFraudOrThe" 
        component={gestureHandlerRootHOC(IWasAVictimOfFraudOrThe)}
        options={{
          title: "IWasAVictimOfFraudOrThe",
       
        }}
      />
        <Stack.Screen 
        name="Terminate" 
        component={gestureHandlerRootHOC(Terminate)}
        options={{
          title: "Terminate",
       
        }}
      />
      <Stack.Screen 
        name="TerminatedCard" 
        component={gestureHandlerRootHOC(TerminatedCard)}
        options={{
          title: "TerminatedCard",
       
        }}
      />

<Stack.Screen 
        name="CarbonCart" 
        component={gestureHandlerRootHOC(CarbonCart)}
        options={{
          title: "CarbonCart",
       
        }}
      />
      <Stack.Screen 
        name="CarbonProject" 
        component={gestureHandlerRootHOC(CarbonProject)}
        options={{
          title: "CarbonProject",
       
        }}
      />
      <Stack.Screen 
        name="VirtualEcoSystem" 
        component={gestureHandlerRootHOC(VirtualEcoSystem)}
        options={{
          title: "VirtualEcoSystem",
       
        }}
      />

    <Stack.Screen 
        name="ChooseCardsStandard5" 
        component={gestureHandlerRootHOC(ChooseCardsStandard5)}
        options={{
          title: "ChooseCardsStandard5",
       
        }}
      />

<Stack.Screen 
        name="ChooseCardsElite" 
        component={gestureHandlerRootHOC(ChooseCardsElite)}
        options={{
          title: "ChooseCardsElite",
       
        }}
      />
      <Stack.Screen 
        name="AccountSettings" 
        component={gestureHandlerRootHOC(AccountSettings)}
        options={{
          title: "AccountSettings",
       
        }}
      />
      <Stack.Screen 
        name="SecurityAndPrivacy" 
        component={gestureHandlerRootHOC(SecurityAndPrivacy)}
        options={{
          title: "SecurityAndPrivacy",
       
        }}
      />
      <Stack.Screen 
        name="Transactions" 
        component={gestureHandlerRootHOC(Transactions)}
        options={{
          title: "Transactions",
       
        }}
      />
      <Stack.Screen 
        name="AccountLetter" 
        component={gestureHandlerRootHOC(AccountLetter)}
        options={{
          title: "AccountLetter",
       
        }}
      />
      <Stack.Screen 
              name="TermsAndConditions" 
              component={gestureHandlerRootHOC(TermsAndConditions)}
              options={{
                title: "TermsAndConditions",
             
              }}
            />

    <Stack.Screen 
        name="SwitchAccounts" 
        component={gestureHandlerRootHOC(SwitchAccounts)}
        options={{
          title: "SwitchAccounts",
        
        }}
      />

    <Stack.Screen 
        name="Login" 
        component={Login}
        options={{
          title: "Login",
       
        }}
      />
          
      <Stack.Screen 
        name="CarbonTonnesRemoved" 
        component={CarbonTonnesRemoved}
        options={{
          title: "CarbonTonnesRemoved",
       
        }}
      />
      <Stack.Screen 
        name="CarbonSpending" 
        component={CarbonSpending}
        options={{
          title: "CarbonSpending",
       
        }}
      />
      <Stack.Screen 
        name="TestEnviro" 
        component={TestEnviro}
        options={{
          title: "TestEnviro",
       
        }}
      />

    </Stack.Navigator>
  )
}

const AppNavigator = () => {


  return (
    <Tab.Navigator
    tabBarOptions={{ showLabel: true, style: { height: 40, width: '125%', }, visible: true, }}>
    
    <Tab.Screen 
      name="AccountTab" 
      component={gestureHandlerRootHOC(AccountMain)}
      options={{
        title: "Account"
      }}
      />
    <Tab.Screen 
      name="Analysis" 
      component={Analytics}
      options={{
        
      }}
      />
    <Tab.Screen 
      name="CarbonTab" 
      component={gestureHandlerRootHOC(Carbon)}
      options={{
        title: "Carbon"
      }}
    />
    <Tab.Screen 
      name="Profile" 
      component={gestureHandlerRootHOC(Settings)}
    />
    <Tab.Screen 
      name="Loop" 
      component={gestureHandlerRootHOC(AccountDummy)}
      options={{
        headerShown: false,
        presentation: 'modal',
        animationTypeForReplace: 'push',
        animation:'slide_from_left'
      }}
      // listeners={({ navigation, route }) => ({
      //   focus: () => {
         
      //     // Do something with the `navigation` object
      //     navigation.navigate('AccountTab');
      //   },
      // })}
    />
  </Tab.Navigator>
  );
};

export default StackNavigator;
