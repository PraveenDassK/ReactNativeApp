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

import SecurityAndPrivacy from "../screens/SecurityAndPrivacy"

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

//My cards
import MyCards from "../screens/MyCards"
import CardSettings from "../screens/CardSettings"

//No pages for analysis

/**
 * @notice Screens on the carbon page to navigate to
 */


//Tabs and navs
const Tab = createMaterialTopTabNavigator();
const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return(
    <Stack.Navigator>
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
      component={AccountMain}
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
