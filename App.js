import "react-native-gesture-handler";

import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import NetInfo, { useNetInfo } from "@react-native-community/netinfo";
import { Text, View, Button, Platform, ActivityIndicator } from "react-native";
import { AppState } from "react-native";
import { useFonts } from "expo-font";
import * as Font from "expo-font";

import * as Device from "expo-device";
import * as Notifications from "expo-notifications";
import { NavigationContainer } from "@react-navigation/native";

import * as SplashScreen from "expo-splash-screen";
import * as LocalAuthentication from "expo-local-authentication";
import { decode, encode } from "base-64";
import AuthContext from "./app/auth/context";
import AppNavigator from "./app/navigation/AppNavigator";
import AuthNavigator from "./app/navigation/AuthNavigator";
import authStorage from "./app/auth/storage";
import apiLogin from "./app/api/apiLogin";

import versionChecker from "./app/utility/versionChecker";
import { usePreventScreenCapture } from "expo-screen-capture";


if (!global.btoa) {
  global.btoa = encode;
}

if (!global.atob) {
}

if (!global.atob) {
  global.atob = decode;
}

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

export default function App() {
  const netInfo = useNetInfo();

  const [loaded] = useFonts({
    Helvetica: require("./app/assets/fonts/Helvetica.ttf"),
    Typo: require("./app/assets/fonts/typo-grotesk.regular.otf"),
  });

  const [fontLoaded, setFontLoaded] = useState(false);
  const fetchFonts = () => {
    return Font.loadAsync({
      Montserrat: require("./app/assets/fonts/Montserrat-Bold.ttf"),
      "Montserrat-Bold": require("./app/assets/fonts/Montserrat-Bold.ttf"),
      "Montserrat-Medium": require("./app/assets/fonts/Montserrat-Medium.ttf"),
      "Montserrat-Regular": require("./app/assets/fonts/Montserrat-Regular.ttf"),
      "Montserrat-SemiBold": require("./app/assets/fonts/Montserrat-SemiBold.ttf"),
    });
  };

  if (!fontLoaded) {
    fetchFonts();
  }
  const notificationListener = useRef();
  const responseListener = useRef();

  //Push token
  const [expoPushToken, setExpoPushToken] = useState("");
  const [notification, setNotification] = useState(false);

  const [user, setUser] = useState();
  const [currentUser, setCurrentUser] = useState(null);
  const [isAuth, setIsAuth] = useState(true);

  const [directors, setDirectors] = useState([]);
  const [beneficialOwners, setOwners] = useState([]);
  const [controllingInterests, setIntrests] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  /**
   * @dev IDs used though the app
   */
  /**
   * @dev IDs used though the app
   */

  //Enfuse customer ID A122HTHM
  const [accountID, setAccountID] = useState("");

  //Modulr ID C122BMS7
  const [userID, setUserID] = useState("");

  //Card ID and Enfuse card details A122HTHM
  const [cardDetails, setCardDetails] = useState(null);
  const [cardID, setCardID] = useState("");

  //Carbonyte ID CC1
  const [customerDetails, setCustomerDetails] = useState("");

  const [version, setVersion] = useState("0.0.14");

  const [missingAccountSetup, setMissingAccountSetup] = useState(false);

  //App Pin
  const [pin, setPin] = useState("0000");

  //A122HTHM
  const [enfuseId, setEnfuseId] = useState("")
  //C122BMS7
  const [modulrId, setModulrId] = useState("")
  //CC1120
  const [carbonyteId, setCarbonyteId] = useState("")
  
  
  const [accountDetails, setAccountDetails] = useState("")

  //Shopping card Details
  const [cart, setCart] = useState([]);

  //state for Dark and light mode Context

  const [darkMode, setDarkMode] = useState("");

  const [settings, setSettings] = useState({
    faceId: false,
    hideBalance: false,
    transactionSharing: false,
  });

  useEffect(() => {
    const prepare = async () => {
      await SplashScreen.preventAutoHideAsync();
    };
    prepare();
  }, []);

  useEffect(() => {
    registerForPushNotificationsAsync().then((token) =>
      setExpoPushToken(token)
    );
    notificationListener.current =
      Notifications.addNotificationReceivedListener((notification) => {
        setNotification(notification);
      });

    responseListener.current =
      Notifications.addNotificationResponseReceivedListener((response) => {
      });

    return () => {
      Notifications.removeNotificationSubscription(
        notificationListener.current
      );
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);

  useLayoutEffect(() => {
    if (isAuth && currentUser) {
      if (Device.isDevice || Platform.OS == "ios") authenticate();
    }

  }, [currentUser, isAuth]);

  // use Effect and Function to set Dark theme

  useEffect(() => {
    loadDarkTheme();
  }, [darkMode]);

  const loadDarkTheme = async () => {
    const darkTheme = await authStorage.getColor();
    setDarkMode(darkTheme);
  };
  useEffect(() => {
    restoreToken();
    restoreSignIn();
    versionChecker.compareVersion(version);

    // if (JailMonkey.isJailBroken()) {
    //   // Alternative behaviour for jail-broken/rooted devices.
    // }
    // 
  }, []);
  // usePreventScreenCapture();

  useEffect(() => {
    AppState.addEventListener("change", handleAppStateChange);

    return () => {
      AppState.removeEventListener("change", handleAppStateChange);
    };
  }, []);

  const authenticate = async () => {
    "starting authentication";

    const result = await LocalAuthentication.authenticateAsync();
    const device =
      await LocalAuthentication.supportedAuthenticationTypesAsync();
    if (result.success) {
      setIsAuth(false);
      setIsLoading(false);
    }
    // if (result) authStorage.storeSignInSetting(JSON.stringify({"signedIn":`${isEnabled}`}))
    if (!result.success) {
      alert("not authenticated");
      authenticate();
    }
  };

  const handleAppStateChange = (nextAppState) => {
    if (nextAppState === "inactive") {

      // setCurrent9User(null)
    }
  };

  /**
   * @dev This pgets the token from storage and gets the user's details from it
   * @dev ID hooks are set here
   * @returns null if there is no token
   */
  const restoreToken = async () => {
    //Get the token from storage
    const token = await authStorage.removeToken();
    if (!token) {
      setIsLoading(false);
      return;
    }

    //Get the IDs here
    const IDs = await apiLogin.GetIDs(token);
    setCurrentUser(token);
    if (IDs == "Missing Setup") {
      setMissingAccountSetup(true);
    }
    setUserID(IDs.userID);
    setAccountID(IDs.accountID);
    setCardID(IDs.cardID);
    setCustomerDetails(IDs.customerDetails);
  };

  const restoreSignIn = async () => {
    const token = await authStorage.getSignInSettings();
    if (!token) return;
    setIsAuth(token.includes("true"));
  };

  if (!AppState.currentState) {
    setIsAuth(null);
  }

  if (!loaded) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <ActivityIndicator size="large" color="black" />
      </View>
    );
  } else {
    SplashScreen.hideAsync();
  }

  if (isLoading) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <ActivityIndicator size="large" color="black" />
      </View>
    );
  }

  

  return !netInfo.isInternetReachable ? (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>No internet connection</Text>
      <ActivityIndicator size="large" color="black" />
    </View>
  ) : (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        currentUser,
        setCurrentUser,
        isAuth,
        setIsAuth,
        accountID,
        setAccountID,
        userID,
        setUserID,
        settings,
        setSettings,
        pin,
        setPin,
        cardID,
        setCardID,
        customerDetails,
        setCustomerDetails,
        cardDetails,
        setCardDetails,
        cart,
        setCart,
        expoPushToken,
        missingAccountSetup,
        setMissingAccountSetup,
        darkMode,
        setDarkMode,
        directors,
        setDirectors,
        beneficialOwners,
        setOwners,
        controllingInterests,
        setIntrests,
        version,
        setVersion,
        accountDetails, setAccountDetails,
      }}
    >
      <NavigationContainer>
        {!currentUser ? (
          <AuthNavigator />
        ) : currentUser ? (
          <AppNavigator />
        ) : (
          <AuthNavigator />
        )}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}

export async function registerForPushNotificationsAsync() {
  let token;

  if (Platform.OS === "android") {
    await Notifications.setNotificationChannelAsync("default", {
      name: "default",
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: "#FF231F7C",
    });
  }

  if (Device.isDevice) {
    const { status: existingStatus } =
      await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== "granted") {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== "granted") {
      alert(
        "Failed to get push token for push notification! Please update permissions to continue use the App."
      );
      return;
    }
    token = (await Notifications.getDevicePushTokenAsync()).data;
  } else {
    alert("Must use physical device for Push Notifications");
  }

  return token;
}
