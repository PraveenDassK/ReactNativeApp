import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import {gestureHandlerRootHOC} from "react-native-gesture-handler"

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
import Account from "../screens/Account";
import SecurityAndPrivacy from "../screens/SecurityAndPrivacy"


const Tab = createMaterialTopTabNavigator();
const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return(
    <Stack.Navigator>
      <Stack.Screen 
        name="Account" 
        component={gestureHandlerRootHOC(AppNavigator)}
        options={{
          title: "Account",
       
        }}
      />
      <Stack.Screen 
        name="SecurityAndPrivacy" 
        component={gestureHandlerRootHOC(SecurityAndPrivacy)}
        options={{
          title: "SecurityAndPrivacy",
       
        }}
      />
    </Stack.Navigator>
  )
}

const AppNavigator = () => {
  return (
    <Tab.Navigator>
    <Tab.Screen 
      name="AccountTab" 
      component={gestureHandlerRootHOC(AccountMain)}
      options={{
        title: "Account"
      }}
      />
    <Tab.Screen 
      name="Analysis" 
      component={gestureHandlerRootHOC(Analytics)}
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
  </Tab.Navigator>
  );
};

export default StackNavigator;
