import React from "react";

import { Animated }from "react-native-reanimated";
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
import AccountDummy from "../screens/AccountDummy";
import SecurityAndPrivacy from "../screens/SecurityAndPrivacy"


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
    >
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
