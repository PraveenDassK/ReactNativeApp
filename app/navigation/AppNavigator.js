import React, { useEffect, useState, useContext } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { BlurView } from "expo-blur";
import { LinearGradient } from "expo-linear-gradient";

import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { gestureHandlerRootHOC } from "react-native-gesture-handler";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { useSafeAreaInsets } from "react-native-safe-area-context";
import AddNewCard from "../screens/AddNewCard";
import AccountMain from "../screens/AccountMain";
import Analytics from "../screens/Analytics";
import Carbon from "../screens/Carbon";
import CarbonExplore from "../screens/CarbonExplore";
import Settings from "../screens/Settings";

import AccountDummy from "../screens/AccountDummy";
import AccountDummy2 from "../screens/AccountDummy2";
import DashBoard from "../screens/Dashboard";
import ViewPin from "../screens/ViewPin";
import Notification from "../screens/Notifications";
/**
 * @notice Screens on account page to navigate to
 */
//Add funds
import AddFunds from "../screens/AddFunds";

//Send money
import SendMoney from "../screens/SendMoney";
import AddBeneficiary from "../screens/AddBeneficiary";
import AddBeneficiaryContact from "../screens/AddBeneficiaryContact";
import AddBeneficiaryRefrence from "../screens/AddBeneficiaryRefrence";
import AddBeneficiarySuccess from "../screens/AddBeneficiarySuccess";
import BankTransferAmount from "../screens/BankTransferAmount";
import GroupBeneficiaryMoney from "../screens/GroupSendMoney";
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

import Subscriptions from "../screens/Subscriptions";
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

import PaymentLink from "../screens/PaymentLink";

import Invoices from "../screens/Invoices";
import DirectDebits from "../screens/DirectDebits";
import DirectDebitForm from "../screens/DirectDebitForm";
import MoveMoneyFromAccount from "../screens/MoveMoneyFromAccount";

import Teams from "../screens/Teams";
import TeamsUser from "../screens/TeamsUser";
import TeamsUserAdd from "../screens/TeamsUserAdd";

import ReferralCode from "../screens/ReferralCode";

import C02 from "../assets/Dashboard/CO2.svg";
import Profile from "../assets/Dashboard/Profile.svg";
import Send from "../assets/Dashboard/SendMoney.svg";
import Home from "../assets/Dashboard/home.svg";
import Analysis from "../assets/Dashboard/Analysis.svg";
import AuthContext from "../auth/context";
//Tabs and navs
const Tab = createMaterialTopTabNavigator();

const Stack = createStackNavigator();

import {
  Animated,
  View,
  TouchableOpacity,
  Platform,
  Text,
  Image,
  StyleSheet,
} from "react-native";
import GlobalStyles from "../../GlobalStyles";
import colors from "../config/colors";
import Marketplace from "../screens/Marketplace";
import MarketPlaceItem from "../screens/MarketPlaceItem";
import OrderCard from "../screens/OrderCard";
import Dashboard from "../screens/Dashboard";
import MoveMoney from "../screens/MoveMoney";
import MoveMoneyAmount from "../screens/MoveMoneyAmount";
import MoveMoneyPin from "../screens/MoveMoneyPin";
import MoveMoneySuccess from "../screens/MoveMoneySuccess";
import SendMoneySuccessPage from "../screens/SendMoneySucessPage";
import {
  BackdropBlur,
  Blur,
  BlurMask,
  Canvas,
  Circle,
  Fill,
  Group,
  Paint,
  rect,
  Rect,
} from "@shopify/react-native-skia";
function MyTabBar({ state, descriptors, navigation, position }) {
  const [selectedTab, setSelectedTab] = useState("");

  const insets = useSafeAreaInsets();

  return (
    <BlurView
      tint="light"
      intensity={Platform.OS === "ios" ? 70 : 135}
      style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        height: 70 + insets.bottom,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        // backgroundColor: "rgba(255, 255, 255, 0.2)",
        // backgroundColor: 'rgba(255, 255, 255, 0.1)',
        opacity: 0.9,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        overflow: "hidden",
      }}
    >
      <View
        style={{
          ...Platform.select({
            ios: {
              backgroundColor: "transparent",
            },
            android: {
              backgroundColor: "rgba(155, 155, 155, 0.3)",
            },
          }),

          flex: 1,
          height: 70 + insets.bottom,

          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          // backgroundColor: "rgba(255, 255, 255, 0.2)",
          // backgroundColor: 'rgba(255, 255, 255, 0.1)',
          opacity: 0.9,
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
          overflow: "hidden",
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
            setSelectedTab(route);
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
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

          // Define the image source for each tab
          let imageSource;
          switch (index) {
            case 0:
              imageSource = <C02 width={30} height={30} />;
              break;
            case 1:
              imageSource = <Home width={30} height={30} />;
              break;
            case 2:
              imageSource = <Analysis width={30} height={30} />;
              break;
            case 3:
              imageSource = <Send width={50} height={50} />;
              break;
            case 4:
              imageSource = <C02 width={40} height={40} />;
              break;
            case 5:
              imageSource = <Profile width={30} height={30} />;
              break;
            // Add cases for other tabs
            default:
              imageSource = <C02 width={30} height={30} />; // Set a default image source if needed
              break;
          }

          return (
            <React.Fragment key={route.name.toString()}>
              {index === 6 || index === 0 ? null : (
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
                      marginLeft: index !== 3 ? "33%" : "20%",
                    }}
                  >
                    {imageSource}
                    {/* {imageSource !== 'molecule-co2' ?<MaterialCommunityIcons
                    name={imageSource}
                    size={40}
                    color={isFocused ? colors.blue : colors.black}
                  />: <C02 width={40} height={40}/> } */}
                  </Animated.View>
                </TouchableOpacity>
              )}
            </React.Fragment>
          );
        })}
      </View>
    </BlurView>
  );
}

const StackNavigator = () => {
  const { darkMode } = useContext(AuthContext);

  return (
    <Stack.Navigator
      screenOptions={{
        gestureEnabled: true,
        gestureResponseDistance: 100,
        gestureDirection: "horizontal",
        initialRouteName: "Account",

        headerTitleStyle: {
          fontFamily: "Montserrat",
          fontWeight: "normal",
          fontSize: 28,
        },
        headerBackTitleVisible: false,
        headerStyle: { backgroundColor: GlobalStyles.Color.backgroundColor },
        headerBackImage: () => (
          <View
            style={{
              marginLeft: "10%",
              backgroundColor: GlobalStyles.Color.lightGrey,
              width: 40,
              height: 40,
              borderRadius: 20,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <MaterialCommunityIcons name="arrow-left" size={30} />
          </View>
        ),
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
        component={CarbonyteLabs}
        options={{
          title: "Carbonyte labs",
          presentation: "modal",
          gestureEnabled: true,
          ...TransitionPresets.ModalTransition,
          headerStyle: {
            backgroundColor:
              darkMode === "DARK"
                ? GlobalStyles.Color.darkBlack
                : GlobalStyles.Color.backgroundColor,
          },
          headerTitleStyle: {
            color: darkMode === "DARK" ? GlobalStyles.Color.white : null,
            fontFamily: "Montserrat",
            fontSize: 20,
          },
          headerBackImage: () => (
            <View
              style={
                darkMode === "DARK"
                  ? styles.darkiconDropDownContainer
                  : styles.iconDropDownContainer
              }
            >
              <MaterialCommunityIcons
                name="arrow-left"
                size={30}
                color={darkMode === "DARK" ? GlobalStyles.Color.white : null}
              />
            </View>
          ),
        }}
      />

      <Stack.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          title: "Dashboard",
          presentation: "modal",
          gestureEnabled: true,
          ...TransitionPresets.ModalTransition,
          headerBackImage: () => (
            <View style={styles.iconDropDownContainer}>
              <MaterialCommunityIcons name="arrow-down" size={30} />
            </View>
          ),
          headerBackTitleVisible: false,
          headerStyle: { backgroundColor: GlobalStyles.Color.backgroundColor },
        }}
      />

      <Stack.Screen
        name="MoveMoney"
        component={MoveMoney}
        options={{
          title: "Move Money",
          presentation: "modal",
          gestureEnabled: true,
          ...TransitionPresets.ModalTransition,
          headerBackImage: () => (
            <View
              style={
                darkMode === "DARK"
                  ? styles.darkiconDropDownContainer
                  : styles.iconDropDownContainer
              }
            >
              <MaterialCommunityIcons
                name="arrow-left"
                size={30}
                color={darkMode === "DARK" ? GlobalStyles.Color.white : null}
              />
            </View>
          ),
          headerBackTitleVisible: false,
          headerStyle: {
            backgroundColor:
              darkMode === "DARK"
                ? GlobalStyles.Color.darkBlack
                : GlobalStyles.Color.backgroundColor,
          },
          headerTitleStyle: {
            color: darkMode === "DARK" ? GlobalStyles.Color.white : null,
            fontFamily: "Montserrat",
            fontSize: 30,
          },
        }}
      />

      <Stack.Screen
        name="ReferralCode"
        component={ReferralCode}
        options={{
          title: "Referral Code",
          presentation: "modal",
          gestureEnabled: true,
          ...TransitionPresets.ModalTransition,
          headerBackImage: () => (
            <View style={styles.iconDropDownContainer}>
              <MaterialCommunityIcons name="arrow-left" size={30} />
            </View>
          ),
          headerBackTitleVisible: false,
          headerStyle: { backgroundColor: GlobalStyles.Color.backgroundColor },
        }}
      />

      <Stack.Screen
        name="MoveMoneyFromAccount"
        component={MoveMoneyFromAccount}
        options={{
          title: "Move Money",
          presentation: "modal",
          gestureEnabled: true,
          ...TransitionPresets.ModalTransition,
          headerBackImage: () => (
            <View
              style={
                darkMode === "DARK"
                  ? styles.darkiconDropDownContainer
                  : styles.iconDropDownContainer
              }
            >
              <MaterialCommunityIcons
                name="arrow-left"
                size={30}
                color={darkMode === "DARK" ? GlobalStyles.Color.white : null}
              />
            </View>
          ),
          headerBackTitleVisible: false,
          headerStyle: {
            backgroundColor:
              darkMode === "DARK"
                ? GlobalStyles.Color.darkBlack
                : GlobalStyles.Color.backgroundColor,
          },
          headerTitleStyle: {
            color: darkMode === "DARK" ? GlobalStyles.Color.white : null,
            fontFamily: "Montserrat",
            fontSize: 30,
          },
        }}
      />

      <Stack.Screen
        name="MoveMoneyAmount"
        component={MoveMoneyAmount}
        options={{
          title: "Move Money",
          presentation: "modal",
          gestureEnabled: true,
          ...TransitionPresets.ModalTransition,
          headerBackImage: () => (
            <View
              style={
                darkMode === "DARK"
                  ? styles.darkiconDropDownContainer
                  : styles.iconDropDownContainer
              }
            >
              <MaterialCommunityIcons
                name="arrow-left"
                size={30}
                color={darkMode === "DARK" ? GlobalStyles.Color.white : null}
              />
            </View>
          ),
          headerBackTitleVisible: false,
          headerStyle: {
            backgroundColor:
              darkMode === "DARK"
                ? GlobalStyles.Color.darkBlack
                : GlobalStyles.Color.backgroundColor,
          },
          headerTitleStyle: {
            color: darkMode === "DARK" ? GlobalStyles.Color.white : null,
            fontFamily: "Montserrat",
            fontSize: 30,
          },
        }}
      />

      <Stack.Screen
        name="MoveMoneyPin"
        component={MoveMoneyPin}
        options={{
          title: "Move Money",
          presentation: "modal",
          gestureEnabled: true,
          ...TransitionPresets.ModalTransition,
          headerBackImage: () => (
            <View
              style={
                darkMode === "DARK"
                  ? styles.darkiconDropDownContainer
                  : styles.iconDropDownContainer
              }
            >
              <MaterialCommunityIcons
                name="arrow-left"
                size={30}
                color={darkMode === "DARK" ? GlobalStyles.Color.white : null}
              />
            </View>
          ),
          headerBackTitleVisible: false,
          headerStyle: {
            backgroundColor:
              darkMode === "DARK"
                ? GlobalStyles.Color.darkBlack
                : GlobalStyles.Color.backgroundColor,
          },
          headerTitleStyle: {
            color: darkMode === "DARK" ? GlobalStyles.Color.white : null,
            fontFamily: "Montserrat",
            fontSize: 30,
          },
        }}
      />
      <Stack.Screen
        name="MoveMoneySuccess"
        component={MoveMoneySuccess}
        options={{
          title: "Move Money",
          presentation: "modal",
          gestureEnabled: true,
          ...TransitionPresets.ModalTransition,
          headerBackImage: () => (
            <View
              style={
                darkMode === "DARK"
                  ? styles.darkiconDropDownContainer
                  : styles.iconDropDownContainer
              }
            >
              <MaterialCommunityIcons
                name="arrow-left"
                size={30}
                color={darkMode === "DARK" ? GlobalStyles.Color.white : null}
              />
            </View>
          ),
          headerBackTitleVisible: false,
          headerStyle: {
            backgroundColor:
              darkMode === "DARK"
                ? GlobalStyles.Color.darkBlack
                : GlobalStyles.Color.backgroundColor,
          },
          headerTitleStyle: {
            color: darkMode === "DARK" ? GlobalStyles.Color.white : null,
            fontFamily: "Montserrat",
            fontSize: 30,
          },
        }}
      />
      <Stack.Screen
        name="sendmoneysuccess"
        component={SendMoneySuccessPage}
        options={{
          title: "Send Money",
          presentation: "modal",
          gestureEnabled: true,
          ...TransitionPresets.ModalTransition,
          headerBackImage: () => (
            <View
              style={
                darkMode === "DARK"
                  ? styles.darkiconDropDownContainer
                  : styles.iconDropDownContainer
              }
            >
              <MaterialCommunityIcons
                name="arrow-left"
                size={30}
                color={darkMode === "DARK" ? GlobalStyles.Color.white : null}
              />
            </View>
          ),
          headerBackTitleVisible: false,
          headerStyle: {
            backgroundColor:
              darkMode === "DARK"
                ? GlobalStyles.Color.darkBlack
                : GlobalStyles.Color.backgroundColor,
          },
          headerTitleStyle: {
            color: darkMode === "DARK" ? GlobalStyles.Color.white : null,
            fontFamily: "Montserrat",
            fontSize: 20,
          },
        }}
      />
      <Stack.Screen
        name="GroupBeneficiaryMoney"
        component={gestureHandlerRootHOC(GroupBeneficiaryMoney)}
        options={{
          title: "Send money to group",
          presentation: "modal",
          gestureEnabled: true,
          ...TransitionPresets.ModalTransition,
          headerBackImage: () => (
            <View
              style={
                darkMode === "DARK"
                  ? styles.darkiconDropDownContainer
                  : styles.iconDropDownContainer
              }
            >
              <MaterialCommunityIcons
                name="arrow-left"
                size={30}
                color={darkMode === "DARK" ? GlobalStyles.Color.white : null}
              />
            </View>
          ),
          headerBackTitleVisible: false,
          headerStyle: {
            backgroundColor:
              darkMode === "DARK"
                ? GlobalStyles.Color.darkBlack
                : GlobalStyles.Color.backgroundColor,
          },
          headerTitleStyle: {
            color: darkMode === "DARK" ? GlobalStyles.Color.white : null,
            fontFamily: "Montserrat",
            fontSize: 20,
          },
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
            <View style={styles.iconDropDownContainer}>
              <MaterialCommunityIcons name="arrow-down" size={30} />
            </View>
          ),
          headerBackTitleVisible: false,
          headerStyle: { backgroundColor: GlobalStyles.Color.backgroundColor },
        }}
      />

      <Stack.Screen
        name="OrderCard"
        component={gestureHandlerRootHOC(OrderCard)}
        options={{
          title: "Order Card",
          presentation: "modal",
          gestureEnabled: true,
          ...TransitionPresets.ModalTransition,
          headerBackImage: () => (
            <View style={styles.iconDropDownContainer}>
              <MaterialCommunityIcons name="arrow-down" size={30} />
            </View>
          ),
          headerBackTitleVisible: false,
          headerStyle: { backgroundColor: GlobalStyles.Color.backgroundColor },
        }}
      />

      <Stack.Screen
        name="Marketplace"
        component={gestureHandlerRootHOC(Marketplace)}
        options={{
          title: "Marketplace",
          presentation: "modal",
          gestureEnabled: true,
          ...TransitionPresets.ModalTransition,
          headerBackImage: () => (
            <View style={styles.iconDropDownContainer}>
              <MaterialCommunityIcons name="arrow-down" size={30} />
            </View>
          ),
          headerBackTitleVisible: false,
          headerStyle: { backgroundColor: GlobalStyles.Color.backgroundColor },
        }}
      />

      <Stack.Screen
        name="DirectDebitForm"
        component={gestureHandlerRootHOC(DirectDebitForm)}
        options={{
          title: "New Direct Debit",
          presentation: "modal",
          gestureEnabled: true,
          ...TransitionPresets.ModalTransition,
          headerBackImage: () => (
            <View
              style={
                darkMode === "DARK"
                  ? styles.darkiconDropDownContainer
                  : styles.iconDropDownContainer
              }
            >
              <MaterialCommunityIcons
                name="arrow-left"
                size={30}
                color={darkMode === "DARK" ? GlobalStyles.Color.white : null}
              />
            </View>
          ),
          headerBackTitleVisible: false,
          headerStyle: {
            backgroundColor:
              darkMode === "DARK"
                ? GlobalStyles.Color.darkBlack
                : GlobalStyles.Color.backgroundColor,
          },
          headerTitleStyle: {
            color: darkMode === "DARK" ? GlobalStyles.Color.white : null,
            fontFamily: "Montserrat",
            fontSize: 25,
          },
        }}
      />

      <Stack.Screen
        name="Invoices"
        component={gestureHandlerRootHOC(Invoices)}
        options={{
          title: "Invoices",
          presentation: "modal",
          gestureEnabled: true,
          ...TransitionPresets.ModalTransition,
          headerBackImage: () => (
            <View
              style={
                darkMode === "DARK"
                  ? styles.darkiconDropDownContainer
                  : styles.iconDropDownContainer
              }
            >
              <MaterialCommunityIcons
                name="arrow-left"
                size={30}
                color={darkMode === "DARK" ? GlobalStyles.Color.white : null}
              />
            </View>
          ),
          headerBackTitleVisible: false,
          headerStyle: {
            backgroundColor:
              darkMode === "DARK"
                ? GlobalStyles.Color.darkBlack
                : GlobalStyles.Color.backgroundColor,
          },
          headerTitleStyle: {
            color: darkMode === "DARK" ? GlobalStyles.Color.white : null,
            fontFamily: "Montserrat",
            fontSize: 25,
          },
        }}
      />

      <Stack.Screen
        name="Teams"
        component={gestureHandlerRootHOC(Teams)}
        options={{
          title: "Teams",
          presentation: "modal",
          gestureEnabled: true,
          ...TransitionPresets.ModalTransition,
          headerBackImage: () => (
            <View
              style={
                darkMode === "DARK"
                  ? styles.darkiconDropDownContainer
                  : styles.iconDropDownContainer
              }
            >
              <MaterialCommunityIcons
                name="arrow-left"
                size={30}
                color={darkMode === "DARK" ? GlobalStyles.Color.white : null}
              />
            </View>
          ),
          headerBackTitleVisible: false,
          headerStyle: {
            backgroundColor:
              darkMode === "DARK"
                ? GlobalStyles.Color.darkBlack
                : GlobalStyles.Color.backgroundColor,
          },
          headerTitleStyle: {
            color: darkMode === "DARK" ? GlobalStyles.Color.white : null,
            fontFamily: "Montserrat",
            fontSize: 25,
          },
        }}
      />
      <Stack.Screen
        name="TeamsUser"
        component={gestureHandlerRootHOC(TeamsUser)}
        options={{
          title: "Teams user",
          presentation: "modal",
          gestureEnabled: true,
          ...TransitionPresets.ModalTransition,
          headerBackImage: () => (
            <View style={styles.iconDropDownContainer}>
              <MaterialCommunityIcons name="arrow-down" size={30} />
            </View>
          ),
          headerBackTitleVisible: false,
          headerStyle: { backgroundColor: GlobalStyles.Color.backgroundColor },
        }}
      />
      <Stack.Screen
        name="TeamsUserAdd"
        component={gestureHandlerRootHOC(TeamsUserAdd)}
        options={{
          title: "Teams add",
          presentation: "modal",
          gestureEnabled: true,
          ...TransitionPresets.ModalTransition,
          headerBackImage: () => (
            <View style={styles.iconDropDownContainer}>
              <MaterialCommunityIcons name="arrow-down" size={30} />
            </View>
          ),
          headerBackTitleVisible: false,
          headerStyle: { backgroundColor: GlobalStyles.Color.backgroundColor },
        }}
      />

      <Stack.Screen
        name="DirectDebits"
        component={gestureHandlerRootHOC(DirectDebits)}
        options={{
          title: "DirectDebits",
          presentation: "modal",
          gestureEnabled: true,
          ...TransitionPresets.ModalTransition,
          headerBackImage: () => (
            <View
              style={
                darkMode === "DARK"
                  ? styles.darkiconDropDownContainer
                  : styles.iconDropDownContainer
              }
            >
              <MaterialCommunityIcons
                name="arrow-left"
                size={30}
                color={darkMode === "DARK" ? GlobalStyles.Color.white : null}
              />
            </View>
          ),
          headerBackTitleVisible: false,
          headerStyle: {
            backgroundColor:
              darkMode === "DARK"
                ? GlobalStyles.Color.darkBlack
                : GlobalStyles.Color.backgroundColor,
          },
          headerTitleStyle: {
            color: darkMode === "DARK" ? GlobalStyles.Color.white : null,
            fontFamily: "Montserrat",
            fontSize: 25,
          },
        }}
      />

      <Stack.Screen
        name="PaymentLink"
        component={gestureHandlerRootHOC(PaymentLink)}
        options={{
          title: "Payment Link",
          presentation: "modal",
          gestureEnabled: true,
          ...TransitionPresets.ModalTransition,
          headerBackImage: () => (
            <View
              style={
                darkMode === "DARK"
                  ? styles.darkiconDropDownContainer
                  : styles.iconDropDownContainer
              }
            >
              <MaterialCommunityIcons
                name="arrow-left"
                size={30}
                color={darkMode === "DARK" ? GlobalStyles.Color.white : null}
              />
            </View>
          ),
          headerBackTitleVisible: false,
          headerStyle: {
            backgroundColor:
              darkMode === "DARK"
                ? GlobalStyles.Color.darkBlack
                : GlobalStyles.Color.backgroundColor,
          },
          headerTitleStyle: {
            color: darkMode === "DARK" ? GlobalStyles.Color.white : null,
            fontFamily: "Montserrat",
            fontSize: 30,
          },
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
            <View style={styles.iconDropDownContainer}>
              <MaterialCommunityIcons name="arrow-down" size={30} />
            </View>
          ),
          headerBackTitleVisible: false,
          headerStyle: {
            backgroundColor: GlobalStyles.Color.backgroundColor,
          },
        }}
      />

      <Stack.Screen
        name="AboutUs"
        component={gestureHandlerRootHOC(AboutUs)}
        options={{
          title: "Contact Us",
          headerStyle: {
            backgroundColor:
              darkMode === "DARK"
                ? GlobalStyles.Color.darkBlack
                : GlobalStyles.Color.backgroundColor,
          },
          headerTitleStyle: {
            color: darkMode === "DARK" ? GlobalStyles.Color.white : null,
            fontFamily: "Montserrat",
            fontSize: 30,
          },
          headerBackImage: () => (
            <View
              style={
                darkMode === "DARK"
                  ? styles.darkiconDropDownContainer
                  : styles.iconDropDownContainer
              }
            >
              <MaterialCommunityIcons
                name="arrow-left"
                size={30}
                color={darkMode === "DARK" ? GlobalStyles.Color.white : null}
              />
            </View>
          ),
        }}
      />

      <Stack.Screen
        name="Faq"
        component={gestureHandlerRootHOC(Faq)}
        options={{
          title: "FAQs",
          headerStyle: {
            backgroundColor:
              darkMode === "DARK"
                ? GlobalStyles.Color.darkBlack
                : GlobalStyles.Color.backgroundColor,
          },
          headerTitleStyle: {
            color: darkMode === "DARK" ? GlobalStyles.Color.white : null,
            fontFamily: "Montserrat",
            fontSize: 30,
            left: "50%",
          },
          headerBackImage: () => (
            <View
              style={
                darkMode === "DARK"
                  ? styles.darkiconDropDownContainer
                  : styles.iconDropDownContainer
              }
            >
              <MaterialCommunityIcons
                name="arrow-left"
                size={30}
                color={darkMode === "DARK" ? GlobalStyles.Color.white : null}
              />
            </View>
          ),
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
            <View
              style={
                darkMode === "DARK"
                  ? styles.darkiconDropDownContainer
                  : styles.iconDropDownContainer
              }
            >
              <MaterialCommunityIcons
                name="arrow-left"
                size={30}
                color={darkMode === "DARK" ? GlobalStyles.Color.white : null}
              />
            </View>
          ),
          headerBackTitleVisible: false,
          headerStyle: {
            backgroundColor:
              darkMode === "DARK"
                ? GlobalStyles.Color.darkBlack
                : GlobalStyles.Color.backgroundColor,
          },
          headerTitleStyle: {
            color: darkMode === "DARK" ? GlobalStyles.Color.white : null,
            fontFamily: "Montserrat",
            fontSize: 30,
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
            <View
              style={
                darkMode === "DARK"
                  ? styles.darkiconDropDownContainer
                  : styles.iconDropDownContainer
              }
            >
              <MaterialCommunityIcons
                name="arrow-left"
                size={30}
                color={darkMode === "DARK" ? GlobalStyles.Color.white : null}
              />
            </View>
          ),
          headerBackTitleVisible: false,
          headerStyle: {
            backgroundColor:
              darkMode === "DARK"
                ? GlobalStyles.Color.darkBlack
                : GlobalStyles.Color.backgroundColor,
          },
          headerTitleStyle: {
            color: darkMode === "DARK" ? GlobalStyles.Color.white : null,
            fontFamily: "Montserrat",
            fontSize: 25,
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
          title: "Close Account",
          headerStyle: {
            backgroundColor:
              darkMode === "DARK"
                ? GlobalStyles.Color.darkBlack
                : GlobalStyles.Color.backgroundColor,
          },
          headerTitleStyle: {
            color: darkMode === "DARK" ? GlobalStyles.Color.white : null,
            fontFamily: "Montserrat",
            fontSize: 25,
          },
          headerBackImage: () => (
            <View
              style={
                darkMode === "DARK"
                  ? styles.darkiconDropDownContainer
                  : styles.iconDropDownContainer
              }
            >
              <MaterialCommunityIcons
                name="arrow-left"
                size={30}
                color={darkMode === "DARK" ? GlobalStyles.Color.white : null}
              />
            </View>
          ),
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
          title: "Add new beneficiary",
          presentation: "modal",
          headerShown: true,
          gestureEnabled: true,
          ...TransitionPresets.ModalTransition,
          headerBackImage: () => (
            <View
              style={
                darkMode === "DARK"
                  ? styles.darkiconDropDownContainer
                  : styles.iconDropDownContainer
              }
            >
              <MaterialCommunityIcons
                name="arrow-left"
                size={30}
                color={darkMode === "DARK" ? GlobalStyles.Color.white : null}
              />
            </View>
          ),
          headerBackTitleVisible: false,
          headerStyle: {
            backgroundColor:
              darkMode === "DARK"
                ? GlobalStyles.Color.darkBlack
                : GlobalStyles.Color.backgroundColor,
          },
          headerTitleStyle: {
            color: darkMode === "DARK" ? GlobalStyles.Color.white : null,
            fontFamily: "Montserrat",
            fontSize: 20,
          },
        }}
      />
      <Stack.Screen
        name="AddBeneficiarySuccess"
        component={gestureHandlerRootHOC(AddBeneficiarySuccess)}
        options={{
          title: "Add new beneficiary",
          presentation: "modal",
          headerShown: true,
          gestureEnabled: true,
          ...TransitionPresets.ModalTransition,
          headerTitleStyle: {
            fontFamily: "Montserrat",
            fontSize: 20,
          },
          headerBackImage: () => (
            <View style={styles.iconDropDownContainer}>
              <MaterialCommunityIcons name="arrow-left" size={30} />
            </View>
          ),
          headerBackTitleVisible: false,
        }}
      />
      <Stack.Screen
        name="AddBeneficiaryContact"
        component={gestureHandlerRootHOC(AddBeneficiaryContact)}
        options={{
          title: "Add new beneficiary",
          presentation: "modal",
          headerShown: true,
          gestureEnabled: true,
          ...TransitionPresets.ModalTransition,
          headerBackImage: () => (
            <View
              style={
                darkMode === "DARK"
                  ? styles.darkiconDropDownContainer
                  : styles.iconDropDownContainer
              }
            >
              <MaterialCommunityIcons
                name="arrow-left"
                size={30}
                color={darkMode === "DARK" ? GlobalStyles.Color.white : null}
              />
            </View>
          ),
          headerBackTitleVisible: false,
          headerStyle: {
            backgroundColor:
              darkMode === "DARK"
                ? GlobalStyles.Color.darkBlack
                : GlobalStyles.Color.backgroundColor,
          },
          headerTitleStyle: {
            color: darkMode === "DARK" ? GlobalStyles.Color.white : null,
            fontFamily: "Montserrat",
            fontSize: 20,
          },
        }}
      />

      <Stack.Screen
        name="AddBeneficiaryRefrence"
        component={gestureHandlerRootHOC(AddBeneficiaryRefrence)}
        options={{
          title: "Add new beneficiary",
          presentation: "modal",
          headerShown: true,
          gestureEnabled: true,
          ...TransitionPresets.ModalTransition,
          headerBackImage: () => (
            <View
              style={
                darkMode === "DARK"
                  ? styles.darkiconDropDownContainer
                  : styles.iconDropDownContainer
              }
            >
              <MaterialCommunityIcons
                name="arrow-left"
                size={30}
                color={darkMode === "DARK" ? GlobalStyles.Color.white : null}
              />
            </View>
          ),
          headerBackTitleVisible: false,
          headerStyle: {
            backgroundColor:
              darkMode === "DARK"
                ? GlobalStyles.Color.darkBlack
                : GlobalStyles.Color.backgroundColor,
          },
          headerTitleStyle: {
            color: darkMode === "DARK" ? GlobalStyles.Color.white : null,
            fontFamily: "Montserrat",
            fontSize: 20,
          },
        }}
      />

      <Stack.Screen
        name="BankTransferAmount"
        component={gestureHandlerRootHOC(BankTransferAmount)}
        options={{
          title: "Send money ",
          presentation: "modal",
          gestureEnabled: true,
          ...TransitionPresets.ModalTransition,
          headerStyle: {
            backgroundColor:
              darkMode === "DARK"
                ? GlobalStyles.Color.darkBlack
                : GlobalStyles.Color.backgroundColor,
          },
          headerTitleStyle: {
            color: darkMode === "DARK" ? GlobalStyles.Color.white : null,
            fontFamily: "Montserrat",
            fontSize: 30,
          },
          headerBackImage: () => (
            <View
              style={
                darkMode === "DARK"
                  ? styles.darkiconDropDownContainer
                  : styles.iconDropDownContainer
              }
            >
              <MaterialCommunityIcons
                name="arrow-left"
                size={30}
                color={darkMode === "DARK" ? GlobalStyles.Color.white : null}
              />
            </View>
          ),

          headerBackTitleVisible: false,
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
            <View style={styles.iconDropDownContainer}>
              <MaterialCommunityIcons name="arrow-down" size={30} />
            </View>
          ),
          headerBackTitleVisible: false,
          headerStyle: { backgroundColor: GlobalStyles.Color.backgroundColor },
        }}
      />
      <Stack.Screen
        name="AddNewCard"
        component={gestureHandlerRootHOC(AddNewCard)}
        options={{
          title: "New Card",
          presentation: "modal",
          headerShown: true,
          gestureEnabled: true,
          ...TransitionPresets.ModalTransition,
          headerBackImage: () => (
            <View style={styles.iconDropDownContainer}>
              <MaterialCommunityIcons name="arrow-left" size={30} />
            </View>
          ),
          headerBackTitleVisible: false,
          headerStyle: { backgroundColor: GlobalStyles.Color.backgroundColor },
        }}
      />

      <Stack.Screen
        name="CardSettings"
        component={gestureHandlerRootHOC(CardSettings)}
        options={{
          title: "Settings",
          headerStyle: { backgroundColor: GlobalStyles.Color.backgroundColor },
        }}
      />
      <Stack.Screen
        name="viewpin"
        component={gestureHandlerRootHOC(ViewPin)}
        options={{
          title: "Your security PIN",
          headerStyle: { backgroundColor: GlobalStyles.Color.backgroundColor },
        }}
      />
      <Stack.Screen
        name="Notification"
        component={gestureHandlerRootHOC(Notification)}
        options={{
          title: "Notification",
          headerStyle: {
            backgroundColor:
              darkMode === "DARK"
                ? GlobalStyles.Color.darkBlack
                : GlobalStyles.Color.backgroundColor,
          },
          headerTitleStyle: {
            color: darkMode === "DARK" ? GlobalStyles.Color.white : null,
            fontFamily: "Montserrat",
            fontSize: 30,
          },
          headerBackImage: () => (
            <View
              style={
                darkMode === "DARK"
                  ? styles.darkiconDropDownContainer
                  : styles.iconDropDownContainer
              }
            >
              <MaterialCommunityIcons
                name="arrow-left"
                size={30}
                color={darkMode === "DARK" ? GlobalStyles.Color.white : null}
              />
            </View>
          ),
        }}
      />

      <Stack.Screen
        name="SpendingLimit"
        component={gestureHandlerRootHOC(SpendingLimit)}
        options={{
          title: "Spending Limit",
          headerStyle: { backgroundColor: GlobalStyles.Color.backgroundColor },
        }}
      />
      <Stack.Screen
        name="Devices"
        component={gestureHandlerRootHOC(Devices)}
        options={{
          title: "Devices",
          headerStyle: {
            backgroundColor:
              darkMode === "DARK"
                ? GlobalStyles.Color.darkBlack
                : GlobalStyles.Color.backgroundColor,
          },
          headerTitleStyle: {
            color: darkMode === "DARK" ? GlobalStyles.Color.white : null,
            fontFamily: "Montserrat",
            fontSize: 30,
            left: "20%",
          },
          headerBackImage: () => (
            <View
              style={
                darkMode === "DARK"
                  ? styles.darkiconDropDownContainer
                  : styles.iconDropDownContainer
              }
            >
              <MaterialCommunityIcons
                name="arrow-left"
                size={30}
                color={darkMode === "DARK" ? GlobalStyles.Color.white : null}
              />
            </View>
          ),
        }}
      />

      <Stack.Screen
        name="SetLimit"
        component={gestureHandlerRootHOC(SetLimit)}
        options={{
          title: "Set Limit",
          headerStyle: { backgroundColor: GlobalStyles.Color.backgroundColor },
        }}
      />

      <Stack.Screen
        name="ReplaceCard"
        component={gestureHandlerRootHOC(ReplaceCard)}
        options={{
          title: "Replace Card",
          headerStyle: { backgroundColor: GlobalStyles.Color.backgroundColor },
        }}
      />

      <Stack.Screen
        name="ItsDamagedOrDoesntWork"
        component={gestureHandlerRootHOC(ItsDamagedOrDoesntWork)}
        options={{
          title: "",
          headerStyle: { backgroundColor: GlobalStyles.Color.backgroundColor },
        }}
      />
      <Stack.Screen
        name="ItWasLost"
        component={gestureHandlerRootHOC(ItWasLost)}
        options={{
          title: "Lost",
          headerStyle: { backgroundColor: GlobalStyles.Color.backgroundColor },
        }}
      />
      <Stack.Screen
        name="IWasAVictimOfFraudOrThe"
        component={gestureHandlerRootHOC(IWasAVictimOfFraudOrThe)}
        options={{
          title: "Report",
          headerStyle: { backgroundColor: GlobalStyles.Color.backgroundColor },
        }}
      />
      <Stack.Screen
        name="Terminate"
        component={gestureHandlerRootHOC(Terminate)}
        options={{
          title: "Terminate card",
          headerStyle: { backgroundColor: GlobalStyles.Color.backgroundColor },
        }}
      />
      <Stack.Screen
        name="TerminatedCard"
        component={gestureHandlerRootHOC(TerminatedCard)}
        options={{
          title: "Terminated Card",
          headerStyle: { backgroundColor: GlobalStyles.Color.backgroundColor },
        }}
      />

      <Stack.Screen
        name="CarbonCart"
        component={gestureHandlerRootHOC(CarbonCart)}
        options={{
          title: "Cart",
          headerStyle: { backgroundColor: GlobalStyles.Color.backgroundColor },
        }}
      />
      <Stack.Screen
        name="CarbonProject"
        component={gestureHandlerRootHOC(CarbonProject)}
        options={{
          title: "Carbon Project",
          headerStyle: { backgroundColor: GlobalStyles.Color.backgroundColor },
        }}
      />
      <Stack.Screen
        name="CarbonExplore"
        component={gestureHandlerRootHOC(CarbonExplore)}
        options={{
          title: "",
          headerStyle: { backgroundColor: GlobalStyles.Color.backgroundColor },
        }}
      />
      <Stack.Screen
        name="ChooseCardsStandard5"
        component={gestureHandlerRootHOC(ChooseCardsStandard5)}
        options={{
          title: "Eco summary",
          headerStyle: { backgroundColor: GlobalStyles.Color.backgroundColor },
        }}
      />

      <Stack.Screen
        name="VirtualEcoSystem"
        component={gestureHandlerRootHOC(VirtualEcoSystem)}
        options={{
          title: "Virtual EcoSystem",
          headerStyle: { backgroundColor: GlobalStyles.Color.backgroundColor },
        }}
      />

      <Stack.Screen
        name="Subscriptions"
        component={gestureHandlerRootHOC(Subscriptions)}
        options={{
          title: "Subscription",
          headerStyle: {
            backgroundColor:
              darkMode === "DARK"
                ? GlobalStyles.Color.darkBlack
                : GlobalStyles.Color.backgroundColor,
          },
          headerTitleStyle: {
            color: darkMode === "DARK" ? GlobalStyles.Color.white : null,
            fontFamily: "Montserrat",
            fontSize: 30,
          },
          headerBackImage: () => (
            <View
              style={
                darkMode === "DARK"
                  ? styles.darkiconDropDownContainer
                  : styles.iconDropDownContainer
              }
            >
              <MaterialCommunityIcons
                name="arrow-left"
                size={30}
                color={darkMode === "DARK" ? GlobalStyles.Color.white : null}
              />
            </View>
          ),
        }}
      />
      <Stack.Screen
        name="AccountSettings"
        component={gestureHandlerRootHOC(AccountSettings)}
        options={{
          title: "Account Settings",
          headerStyle: {
            backgroundColor:
              darkMode === "DARK"
                ? GlobalStyles.Color.darkBlack
                : GlobalStyles.Color.backgroundColor,
          },
          headerTitleStyle: {
            color: darkMode === "DARK" ? GlobalStyles.Color.white : null,
            fontFamily: "Montserrat",
            fontSize: 20,
          },
          headerBackImage: () => (
            <View
              style={
                darkMode === "DARK"
                  ? styles.darkiconDropDownContainer
                  : styles.iconDropDownContainer
              }
            >
              <MaterialCommunityIcons
                name="arrow-left"
                size={30}
                color={darkMode === "DARK" ? GlobalStyles.Color.white : null}
              />
            </View>
          ),
        }}
      />
      <Stack.Screen
        name="SecurityAndPrivacy"
        component={gestureHandlerRootHOC(SecurityAndPrivacy)}
        options={{
          title: "Security & Privacy",
          headerStyle: {
            backgroundColor:
              darkMode === "DARK"
                ? GlobalStyles.Color.darkBlack
                : GlobalStyles.Color.backgroundColor,
          },
          headerTitleStyle: {
            color: darkMode === "DARK" ? GlobalStyles.Color.white : null,
            fontFamily: "Montserrat",
            fontSize: 25,
          },
          headerBackImage: () => (
            <View
              style={
                darkMode === "DARK"
                  ? styles.darkiconDropDownContainer
                  : styles.iconDropDownContainer
              }
            >
              <MaterialCommunityIcons
                name="arrow-left"
                size={30}
                color={darkMode === "DARK" ? GlobalStyles.Color.white : null}
              />
            </View>
          ),
        }}
      />
      <Stack.Screen
        name="Transactions"
        component={gestureHandlerRootHOC(Transactions)}
        options={{
          title: "Transactions",
          headerStyle: {
            backgroundColor:
              darkMode === "DARK"
                ? GlobalStyles.Color.darkBlack
                : GlobalStyles.Color.backgroundColor,
          },
          headerTitleStyle: {
            color: darkMode === "DARK" ? GlobalStyles.Color.white : null,
            fontFamily: "Montserrat",
            fontSize: 30,
          },
          headerBackImage: () => (
            <View
              style={
                darkMode === "DARK"
                  ? styles.darkiconDropDownContainer
                  : styles.iconDropDownContainer
              }
            >
              <MaterialCommunityIcons
                name="arrow-left"
                size={30}
                color={darkMode === "DARK" ? GlobalStyles.Color.white : null}
              />
            </View>
          ),
        }}
      />
      <Stack.Screen
        name="PinSetApp"
        component={gestureHandlerRootHOC(PinSetApp)}
        options={{
          title: "Passcode reset",
          headerStyle: { backgroundColor: GlobalStyles.Color.backgroundColor },
        }}
      />
      <Stack.Screen
        name="AccountLetter"
        component={gestureHandlerRootHOC(AccountLetter)}
        options={{
          title: "Account Verification",
          headerStyle: {
            backgroundColor:
              darkMode === "DARK"
                ? GlobalStyles.Color.darkBlack
                : GlobalStyles.Color.backgroundColor,
          },
          headerTitleStyle: {
            color: darkMode === "DARK" ? GlobalStyles.Color.white : null,
            fontFamily: "Montserrat",
            fontSize: 20,
          },
          headerBackImage: () => (
            <View
              style={
                darkMode === "DARK"
                  ? styles.darkiconDropDownContainer
                  : styles.iconDropDownContainer
              }
            >
              <MaterialCommunityIcons
                name="arrow-left"
                size={30}
                color={darkMode === "DARK" ? GlobalStyles.Color.white : null}
              />
            </View>
          ),
        }}
      />
      <Stack.Screen
        name="TermsAndConditions"
        component={gestureHandlerRootHOC(TermsAndConditions)}
        options={{
          title: "Terms & Conditions",
          headerStyle: {
            backgroundColor:
              darkMode === "DARK"
                ? GlobalStyles.Color.darkBlack
                : GlobalStyles.Color.backgroundColor,
          },
          headerTitleStyle: {
            color: darkMode === "DARK" ? GlobalStyles.Color.white : null,
            fontFamily: "Montserrat",
            fontSize: 25,
          },
          headerBackImage: () => (
            <View
              style={
                darkMode === "DARK"
                  ? styles.darkiconDropDownContainer
                  : styles.iconDropDownContainer
              }
            >
              <MaterialCommunityIcons
                name="arrow-left"
                size={30}
                color={darkMode === "DARK" ? GlobalStyles.Color.white : null}
              />
            </View>
          ),
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
          headerStyle: {
            backgroundColor:
              darkMode === "DARK"
                ? GlobalStyles.Color.darkBlack
                : GlobalStyles.Color.backgroundColor,
          },
          headerTitleStyle: {
            color: darkMode === "DARK" ? GlobalStyles.Color.white : null,
            fontFamily: "Montserrat",
            fontSize: 30,
          },
          headerBackImage: () => (
            <View
              style={
                darkMode === "DARK"
                  ? styles.darkiconDropDownContainer
                  : styles.iconDropDownContainer
              }
            >
              <MaterialCommunityIcons
                name="arrow-left"
                size={30}
                color={darkMode === "DARK" ? GlobalStyles.Color.white : null}
              />
            </View>
          ),
        }}
      />
      <Stack.Screen
        name="MarketPlaceItem"
        component={MarketPlaceItem}
        options={{
          title: null,
          headerStyle: { backgroundColor: GlobalStyles.Color.backgroundColor },
        }}
      />

      <Stack.Screen
        name="CarbonTonnesRemoved"
        component={CarbonTonnesRemoved}
        options={{
          title: "Carbon",
          headerStyle: { backgroundColor: GlobalStyles.Color.backgroundColor },
        }}
      />
    </Stack.Navigator>
  );
};

const AppNavigator = () => {
  return (
    <Tab.Navigator
      tabBarPosition="bottom"
      tabBar={(props) => <MyTabBar {...props} />}
      initialRouteName="Dashboard"
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
        name="Dashboard"
        component={gestureHandlerRootHOC(DashBoard)}
        options={{
          title: "Dashboard",
        }}
      />

      <Tab.Screen name="Analysis" component={Analytics} options={{}} />

      <Tab.Screen
        name="SendMoneyTab"
        component={gestureHandlerRootHOC(SendMoney)}
        options={{
          headerShown: false,
          presentation: "modal",
          animationTypeForReplace: "push",
        }}
      />
      <Tab.Screen
        name="CarbonTab"
        component={gestureHandlerRootHOC(Carbon)}
        options={{
          title: "Carbon",
        }}
      />

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

const styles = StyleSheet.create({
  iconDropDownContainer: {
    marginLeft: "10%",
    backgroundColor: "lightgrey",
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  darkiconDropDownContainer: {
    marginLeft: "10%",
    backgroundColor: GlobalStyles.Color.black,
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  headerBackImage: {
    marginLeft: "10%",
    backgroundColor: "lightgrey",
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default StackNavigator;
