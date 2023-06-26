import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreenPersonal from "../screens/AccountMain";
import Analytics from "../screens/Analytics";
import Carbon from "../screens/Carbon";
import Marketplace from "../screens/Marketplace";
import Settings from "../screens/Settings";
import { Platform, StyleSheet,View, Text } from "react-native";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
    
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          height: 90,
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
          backgroundColor: "#fff",
         
          opacity: 0.7,
          elevation: 0,
          ...styles.shadow,
        },
      }}
      
    >
      <Tab.Screen name="Home" component={HomeScreenPersonal} options={{
        tabBarIcon: ({focused}) => (
            <View>
                <Text>Home</Text> 
            </View>
        ),
      }} />
      <Tab.Screen name="Analysis" component={Analytics} />
      <Tab.Screen name="Carbon" component={Carbon} />
      <Tab.Screen name="Marketplace" component={Marketplace} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#7F5DF0",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius:3.5,
    elevation: 5
  },
});

export default Tabs;
