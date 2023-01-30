import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

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

//Main screen
import Account from "../screens/Account";
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

//Tabs and navs
const Tab = createMaterialTopTabNavigator();
const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return(
    <Stack.Navigator initialRouteName="SwitchAccount">
      <Stack.Screen 
        name="Account" 
        component={AppNavigator}
        options={{
          title: "Account",
       
        }}
      />

      <Stack.Screen 
        name="AddFunds" 
        component={AddFunds}
        options={{
          title: "AddFunds",
       
        }}
      />

      <Stack.Screen 
        name="SendMoney" 
        component={SendMoney}
        options={{
          title: "SendMoney",
       
        }}
      />

      <Stack.Screen 
        name="Pin" 
        component={Pin}
        options={{
          title: "Pin",
       
        }}
      />

    <Stack.Screen 
        name="Success" 
        component={Success}
        options={{
          title: "Success",
       
        }}
      />

    <Stack.Screen 
        name="AddBeneficiary" 
        component={AddBeneficiary}
        options={{
          title: "AddBeneficiary",
       
        }}
      />

      <Stack.Screen 
        name="BankTransferAmount" 
        component={BankTransferAmount}
        options={{
          title: "BankTransferAmount",
       
        }}
      />

    <Stack.Screen 
        name="MyCards" 
        component={MyCards}
        options={{
          title: "MyCards",
       
        }}
      />

    <Stack.Screen 
        name="CardSettings" 
        component={CardSettings}
        options={{
          title: "CardSettings",
       
        }}
      />

    <Stack.Screen 
        name="SpendingLimit" 
        component={SpendingLimit}
        options={{
          title: "SpendingLimit",
       
        }}
      />

    <Stack.Screen 
        name="SetLimit" 
        component={SetLimit}
        options={{
          title: "SetLimit",
       
        }}
      />

  <Stack.Screen 
        name="ReplaceCard" 
        component={ReplaceCard}
        options={{
          title: "ReplaceCard",
       
        }}
      />
      
      <Stack.Screen 
        name="ItsDamagedOrDoesntWork" 
        component={ItsDamagedOrDoesntWork}
        options={{
          title: "ItsDamagedOrDoesntWork",
       
        }}
      />
        <Stack.Screen 
        name="ItWasLost" 
        component={ItWasLost}
        options={{
          title: "ItWasLost",
       
        }}
      />
        <Stack.Screen 
        name="IWasAVictimOfFraudOrThe" 
        component={IWasAVictimOfFraudOrThe}
        options={{
          title: "IWasAVictimOfFraudOrThe",
       
        }}
      />
        <Stack.Screen 
        name="Terminate" 
        component={Terminate}
        options={{
          title: "Terminate",
       
        }}
      />
      <Stack.Screen 
        name="TerminatedCard" 
        component={TerminatedCard}
        options={{
          title: "TerminatedCard",
       
        }}
      />

<Stack.Screen 
        name="CarbonCart" 
        component={CarbonCart}
        options={{
          title: "CarbonCart",
       
        }}
      />
      <Stack.Screen 
        name="CarbonProject" 
        component={CarbonProject}
        options={{
          title: "CarbonProject",
       
        }}
      />
      <Stack.Screen 
        name="VirtualEcoSystem" 
        component={VirtualEcoSystem}
        options={{
          title: "VirtualEcoSystem",
       
        }}
      />

    <Stack.Screen 
        name="ChooseCardsStandard5" 
        component={ChooseCardsStandard5}
        options={{
          title: "ChooseCardsStandard5",
       
        }}
      />

<Stack.Screen 
        name="ChooseCardsElite" 
        component={ChooseCardsElite}
        options={{
          title: "ChooseCardsElite",
       
        }}
      />
      <Stack.Screen 
        name="AccountSettings" 
        component={AccountSettings}
        options={{
          title: "AccountSettings",
       
        }}
      />
      <Stack.Screen 
        name="SecurityAndPrivacy" 
        component={SecurityAndPrivacy}
        options={{
          title: "SecurityAndPrivacy",
       
        }}
      />
      <Stack.Screen 
        name="Transactions" 
        component={Transactions}
        options={{
          title: "Transactions",
       
        }}
      />
      <Stack.Screen 
        name="AccountLetter" 
        component={AccountLetter}
        options={{
          title: "AccountLetter",
       
        }}
      />
      <Stack.Screen 
              name="TermsAndConditions" 
              component={TermsAndConditions}
              options={{
                title: "TermsAndConditions",
             
              }}
            />

    <Stack.Screen 
        name="SwitchAccounts" 
        component={SwitchAccounts}
        options={{
          title: "SwitchAccounts",
        
        }}
      />

    </Stack.Navigator>
  )
}

const AppNavigator = () => {


  return (
    // <Tab.Navigator>
    //   <Tab.Screen
    //     name="Feed"
    //     component={FeedNavigator}
    //     options={{
    //       tabBarIcon: ({ color, size }) => (
    //         <MaterialCommunityIcons name="home" color={color} size={size} />
    //       ),
    //     }}
    //   />
    //   <Tab.Screen
    //     name="ListingEdit"
    //     component={ListingEditScreen}
    //     options={({ navigation }) => ({
    //       tabBarButton: () => (
    //         <NewListingButton
    //           onPress={() => navigation.navigate(routes.LISTING_EDIT)}
    //         />
    //       ),
    //       tabBarIcon: ({ color, size }) => (
    //         <MaterialCommunityIcons
    //           name="plus-circle"
    //           color={color}
    //           size={size}
    //         />
    //       ),
    //     })}
    //   />
    //   <Tab.Screen
    //     name="Account"
    //     component={AccountNavigator}
    //     options={{
    //       tabBarIcon: ({ color, size }) => (
    //         <MaterialCommunityIcons name="account" color={color} size={size} />
    //       ),
    //     }}
    //   />
    // </Tab.Navigator>
    <Tab.Navigator>
    <Tab.Screen 
      name="AccountTab" 
      component={Settings}
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
      component={Carbon}
      options={{
        title: "Carbon"
      }}
    />
    <Tab.Screen 
      name="Profile" 
      component={Settings}
    />

  </Tab.Navigator>
  );
};

export default StackNavigator;
