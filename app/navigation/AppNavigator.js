import React, { useEffect, useState } from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { gestureHandlerRootHOC } from "react-native-gesture-handler";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { useSafeAreaInsets } from "react-native-safe-area-context";

import AccountMain from "../screens/AccountMain";
import Analytics from "../screens/Analytics";
import Carbon from "../screens/Carbon";
import Settings from "../screens/Settings";

import AccountDummy from "../screens/AccountDummy";
import AccountDummy2 from "../screens/AccountDummy2";

/**
 * @notice Screens on account page to navigate to
 */
//Add funds
import AddFunds from "../screens/AddFunds";

//Send money
import SendMoney from "../screens/SendMoney";
import AddBeneficiary from "../screens/AddBeneficiary";
import BankTransferAmount from "../screens/BankTransferAmount";

//Generic
//Used by add funds and send money
import Pin from "../screens/Pin";
import Success from "../screens/Success";

/**
 * @notice Screens for card settings
 */
import MyCards from "../screens/MyCards";
import CardSettings from "../screens/CardSettings";
import SpendingLimit from "../screens/SpendingLimit";
import SetLimit from "../screens/SetLimit";

import ReplaceCard from "../screens/ReplaceCard";
import ItsDamagedOrDoesntWork from "../screens/ItsDamagedOrDoesntWork";
import ItWasLost from "../screens/ItWasLost";
import IWasAVictimOfFraudOrThe from "../screens/IWasAVictimOfFraudOrThe";
import Terminate from "../screens/Terminate";
import TerminatedCard from "../screens/TerminatedCard";

/**
 * @notice Screens on the carbon page to navigate to
 */
import ChooseCardsStandard5 from "../screens/ChooseCardsStandard5";
import CarbonCart from "../screens/CarbonCart";
import CarbonProject from "../screens/CarbonProject";
import VirtualEcoSystem from "../screens/VirtualEcoSystem";
import PinCart from "../screens/PinCart";
import PinSetApp from "../screens/PinSetApp";
import PinSet from "../screens/PinSet";

import CarbonyteLabs from "../screens/CarbonyteLabs";
/**
 * @notice Screens on the settings page to navigate to
 */

import ChooseCardsElite from "../screens/ChooseCardsElite";
import SecurityAndPrivacy from "../screens/SecurityAndPrivacy";
import AccountSettings from "../screens/AccountSettings";
import Transactions from "../screens/Transactions";
import AccountLetter from "../screens/AccountLetter";
import AboutUs from "../screens/AboutUs";

import Faq from "../screens/Faq";

import TermsAndConditions from "../screens/TermsAndConditions";
import SwitchAccounts from "../screens/SwitchAccounts";
import CarbonTonnesRemoved from "../screens/CarbonTonnesRemoved";
import FUP from "../screens/FUP";
import DeleteAccount from "../screens/DeleteAccount";

import GroupBeneficiary from "../screens/GroupBeneficiary";
import ScheduledPayment from "../screens/ScheduledPayment";
import FirstTimeSetup from "../screens/FirstTimeSetup";
import Devices from "../screens/Devices";

//Tabs and navs
const Tab = createMaterialTopTabNavigator();
// const Stack = createNativeStackNavigator();
const Stack = createStackNavigator();

import { Animated, View, TouchableOpacity, Platform } from "react-native";
import GlobalStyles from "../../GlobalStyles";
import colors from "../config/colors";
import Marketplace from "../screens/Marketplace";

function MyTabBar({ state, descriptors, navigation, position }) {
  const [selectedTabs, setSelectTabs] = useState("");

  const insets = useSafeAreaInsets();

  return (
    <View
      style={{
        flexDirection: "row",
        height: 80,
        alignItems: "flex-end",
        backgroundColor: "#F6F5F8",
        marginBottom: "1.5%",
      }}
    >
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          setSelectTabs(route);
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({ name: route.name, merge: true });
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        const inputRange = state.routes.map((_, i) => i);
        const opacity = position.interpolate({
          inputRange,
          outputRange: inputRange.map((i) => (i === index ? 1 : 0.5)),
        });

        return (
          <React.Fragment key={route.name.toString()}>
            {index == 6 ? null : index == 0 ? null : (
              <TouchableOpacity
                key={route.name.toString()}
                accessibilityRole="button"
                accessibilityState={isFocused ? { selected: true } : {}}
                accessibilityLabel={options.tabBarAccessibilityLabel}
                testID={options.tabBarTestID}
                onPress={onPress}
                onLongPress={onLongPress}
                style={{ flex: 1 }}
              >
                <Animated.View
                  style={{
                    paddingVertical: 0,
                  }}
                >
                  <Animated.Text
                    style={{
                      opacity,
                      textAlign: "center",
                      fontFamily: "Helvetica",
                      fontWeight: isFocused ? "900" : "200",
                      color: isFocused ? colors.blue : colors.black,
                    }}
                  >
                    {label}
                  </Animated.Text>
                </Animated.View>
              </TouchableOpacity>
            )}
          </React.Fragment>
        );
      })}
    </View>
  );
}

const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        gestureEnabled: true,
        gestureResponseDistance: 100,
        gestureDirection: "horizontal",
        initialRouteName: "Account",
        headerTitleStyle: {
          fontFamily: "Helvetica",
          fontWeight: "normal",
          fontSize: 28,
        },
        headerBackTitleVisible: false,
        headerStyle: { backgroundColor: "transparent" },
      }}
    >
      <Stack.Screen
        name="Account"
        component={AppNavigator}
        options={{
          title: "Carbonyte",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="FirstTimeSetup"
        component={FirstTimeSetup}
        options={{
          title: "Carbonyte",
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="CarbonyteLabs"
        component={gestureHandlerRootHOC(CarbonyteLabs)}
        options={{
          title: "Carbonyte Labs",
          presentation: "modal",
          gestureEnabled: true,
          ...TransitionPresets.ModalTransition,
          headerBackImage: () => (
            <MaterialCommunityIcons name="chevron-down" size={40} />
          ),
          headerBackTitleVisible: false,
          headerStyle: { backgroundColor: "white" },
        }}
      />


      <Stack.Screen
        name="AddFunds"
        component={gestureHandlerRootHOC(AddFunds)}
        options={{
          title: "Add Funds",
          presentation: "modal",
          gestureEnabled: true,
          ...TransitionPresets.ModalTransition,
          headerBackImage: () => (
            <MaterialCommunityIcons name="chevron-down" size={40} />
          ),
          headerBackTitleVisible: false,
          headerStyle: { backgroundColor: "white" },
        }}
      />
      <Stack.Screen
        name="ScheduledPayment"
        component={gestureHandlerRootHOC(ScheduledPayment)}
        options={{
          title: "Scheduled Payment",
          presentation: "modal",
          gestureEnabled: true,
          ...TransitionPresets.ModalTransition,
          headerBackImage: () => (
            <MaterialCommunityIcons name="chevron-down" size={40} />
          ),
          headerBackTitleVisible: false,
          headerStyle: {
            backgroundColor: GlobalStyles.DivContainer.backgroundColor,
          },
        }}
      />

      <Stack.Screen
        name="AboutUs"
        component={gestureHandlerRootHOC(AboutUs)}
        options={{
          title: "Contact Us",
        }}
      />

      <Stack.Screen
        name="Faq"
        component={gestureHandlerRootHOC(Faq)}
        options={{
          title: "FAQs",
        }}
      />
      <Stack.Screen
        name="PinSet"
        component={gestureHandlerRootHOC(PinSet)}
        options={{
          title: "PinSet",
        }}
      />

      <Stack.Screen
        name="SendMoney"
        component={gestureHandlerRootHOC(SendMoney)}
        options={{
          title: "Send Money",
          presentation: "modal",
          gestureEnabled: true,
          ...TransitionPresets.ModalTransition,
          headerBackImage: () => (
            <MaterialCommunityIcons name="chevron-down" size={40} />
          ),
          headerBackTitleVisible: false,
          headerStyle: {
            backgroundColor: GlobalStyles.DivContainer.backgroundColor,
          },
        }}
      />

      <Stack.Screen
        name="GroupBeneficiary"
        component={gestureHandlerRootHOC(GroupBeneficiary)}
        options={{
          title: "GroupBeneficiary",
          presentation: "modal",
          gestureEnabled: true,
          ...TransitionPresets.ModalTransition,
          headerBackImage: () => (
            <MaterialCommunityIcons name="chevron-down" size={40} />
          ),
          headerBackTitleVisible: false,
          headerStyle: {
            backgroundColor: GlobalStyles.DivContainer.backgroundColor,
          },
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
        name="PinCart"
        component={gestureHandlerRootHOC(PinCart)}
        options={{
          title: "PinCart",
        }}
      />
      <Stack.Screen
        name="FUP"
        component={gestureHandlerRootHOC(FUP)}
        options={{
          title: "FUP",
        }}
      />

      <Stack.Screen
        name="DeleteAccount"
        component={gestureHandlerRootHOC(DeleteAccount)}
        options={{
          title: "",
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
          title: "Bank Details",
          presentation: "modal",
          headerShown: true,
          gestureEnabled: true,
          ...TransitionPresets.ModalTransition,
          headerBackImage: () => (
            <MaterialCommunityIcons name="chevron-down" size={40} />
          ),
          headerBackTitleVisible: false,
        }}
      />

      <Stack.Screen
        name="BankTransferAmount"
        component={gestureHandlerRootHOC(BankTransferAmount)}
        options={{
          title: "Send Funds",
          presentation: "modal",
          headerShown: false,
          gestureEnabled: true,
          ...TransitionPresets.ModalTransition,
          headerBackImage: () => (
            <MaterialCommunityIcons name="chevron-down" size={40} />
          ),
          headerBackTitleVisible: false,
          headerStyle: {
            backgroundColor: GlobalStyles.DivContainer.backgroundColor,
          },
        }}
      />

      <Stack.Screen
        name="MyCards"
        component={gestureHandlerRootHOC(MyCards)}
        options={{
          title: "My Cards",
          presentation: "modal",
          headerShown: true,
          gestureEnabled: true,
          ...TransitionPresets.ModalTransition,
          headerBackImage: () => (
            <MaterialCommunityIcons name="chevron-down" size={40} />
          ),
          headerBackTitleVisible: false,
          headerStyle: { backgroundColor: "transparent" },
        }}
      />

      <Stack.Screen
        name="CardSettings"
        component={gestureHandlerRootHOC(CardSettings)}
        options={{
          title: "Settings",
        }}
      />

      <Stack.Screen
        name="SpendingLimit"
        component={gestureHandlerRootHOC(SpendingLimit)}
        options={{
          title: "Spending Limit",
        }}
      />
      <Stack.Screen
        name="Devices"
        component={gestureHandlerRootHOC(Devices)}
        options={{
          title: "Devices",
        }}
      />

      <Stack.Screen
        name="SetLimit"
        component={gestureHandlerRootHOC(SetLimit)}
        options={{
          title: "Set Limit",
        }}
      />

      <Stack.Screen
        name="ReplaceCard"
        component={gestureHandlerRootHOC(ReplaceCard)}
        options={{
          title: "Replace Card",
        }}
      />

      <Stack.Screen
        name="ItsDamagedOrDoesntWork"
        component={gestureHandlerRootHOC(ItsDamagedOrDoesntWork)}
        options={{
          title: "",
        }}
      />
      <Stack.Screen
        name="ItWasLost"
        component={gestureHandlerRootHOC(ItWasLost)}
        options={{
          title: "Lost",
        }}
      />
      <Stack.Screen
        name="IWasAVictimOfFraudOrThe"
        component={gestureHandlerRootHOC(IWasAVictimOfFraudOrThe)}
        options={{
          title: "Report",
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
          title: "Terminated Card",
        }}
      />

      <Stack.Screen
        name="CarbonCart"
        component={gestureHandlerRootHOC(CarbonCart)}
        options={{
          title: "Cart",
        }}
      />
      <Stack.Screen
        name="CarbonProject"
        component={gestureHandlerRootHOC(CarbonProject)}
        options={{
          title: "Carbon Project",
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
        name="VirtualEcoSystem"
        component={gestureHandlerRootHOC(VirtualEcoSystem)}
        options={{
          title: "Virtual EcoSystem",
        }}
      />

      <Stack.Screen
        name="ChooseCardsElite"
        component={gestureHandlerRootHOC(ChooseCardsElite)}
        options={{
          title: "Choose Cards",
        }}
      />
      <Stack.Screen
        name="AccountSettings"
        component={gestureHandlerRootHOC(AccountSettings)}
        options={{
          title: "Account Settings",
        }}
      />
      <Stack.Screen
        name="SecurityAndPrivacy"
        component={gestureHandlerRootHOC(SecurityAndPrivacy)}
        options={{
          title: "Security & Privacy",
        }}
      />
      <Stack.Screen
        name="Transactions"
        component={gestureHandlerRootHOC(Transactions)}
        options={{
          title: "",
        }}
      />
      <Stack.Screen
        name="PinSetApp"
        component={gestureHandlerRootHOC(PinSetApp)}
        options={{
          title: "Passcode reset",
        }}
      />
      <Stack.Screen
        name="AccountLetter"
        component={gestureHandlerRootHOC(AccountLetter)}
        options={{
          title: "Account Verification",
        }}
      />
      <Stack.Screen
        name="TermsAndConditions"
        component={gestureHandlerRootHOC(TermsAndConditions)}
        options={{
          title: "Terms & Conditions",
        }}
      />

      <Stack.Screen
        name="SwitchAccounts"
        component={gestureHandlerRootHOC(SwitchAccounts)}
        options={{
          title: "Switch Accounts",
          presentation: "modal",
          gestureEnabled: true,
          ...TransitionPresets.ModalTransition,
          headerBackImage: () => (
            <MaterialCommunityIcons name="chevron-down" size={40} />
          ),
          headerBackTitleVisible: false,
          headerStyle: { backgroundColor: "transparent" },
        }}
      />

      <Stack.Screen
        name="CarbonTonnesRemoved"
        component={CarbonTonnesRemoved}
        options={{
          title: "Carbon",
        }}
      />
    </Stack.Navigator>
  );
};

const ChooseCardsEliteNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Standard"
        component={gestureHandlerRootHOC(ChooseCardsElite)}
      />
      <Tab.Screen
        name="Premium"
        component={gestureHandlerRootHOC(ChooseCardsElite)}
      />
      <Tab.Screen
        name="Elite"
        component={gestureHandlerRootHOC(ChooseCardsElite)}
      />
    </Tab.Navigator>
  );
};

const AppNavigator = () => {
  useEffect(() => {
    console.log("here");
  });

  return (
    <Tab.Navigator
      tabBar={(props) => <MyTabBar {...props} />}
      initialRouteName="AccountTab"
    >
      <Tab.Screen
        name="Loop1"
        component={gestureHandlerRootHOC(AccountDummy2)}
        options={{
          tabBarShowLabel: false,
          headerShown: false,
          presentation: "modal",
          animationTypeForReplace: "push",
          animation: "slide_from_left",

          tabBarItemStyle: {
            width: 7,
          },
          tabBarLabelStyle: {
            width: 0,
          },
        }}
      />

      <Tab.Screen
        name="AccountTab"
        component={gestureHandlerRootHOC(AccountMain)}
        options={{
          title: "Account",
        }}
      />
      <Tab.Screen name="Analysis" component={Analytics} options={{}} />

      <Tab.Screen
        name="CarbonTab"
        component={gestureHandlerRootHOC(Carbon)}
        options={{
          title: "Carbon",
        }}
      />
      <Tab.Screen name="Marketplace" component={gestureHandlerRootHOC(Marketplace)} options={{}} />
      <Tab.Screen name="Profile" component={gestureHandlerRootHOC(Settings)} />
      <Tab.Screen
        name="Loop"
        component={gestureHandlerRootHOC(AccountDummy)}
        options={{
          headerShown: false,
          presentation: "modal",
          animationTypeForReplace: "push",
          animation: "slide_from_left",
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
