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
import Account from "../screens/Account";
import SecurityAndPrivacy from "../screens/SecurityAndPrivacy"


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
        name="SecurityAndPrivacy" 
        component={SecurityAndPrivacy}
        options={{
          title: "SecurityAndPrivacy",
       
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
