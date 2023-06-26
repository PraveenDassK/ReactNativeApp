import "react-native-gesture-handler";
import "expo-dev-menu";

import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import { Text, View, Button, Platform, ActivityIndicator } from "react-native";
import { AppState } from "react-native";
import { useFonts } from "expo-font";

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
import { usePreventScreenCapture } from 'expo-screen-capture';






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
  const [loaded] = useFonts({
    Helvetica: require("./app/assets/fonts/Helvetica.ttf"),
    Typo: require("./app/assets/fonts/typo-grotesk.regular.otf"),
  });
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

  const [version, setVersion] = useState("0.0.9");

  const [missingAccountSetup, setMissingAccountSetup] = useState(false);

  //App Pin
  const [pin, setPin] = useState("0000");

  //Shopping card Details
  const [cart, setCart] = useState([]);

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
    console.log(expoPushToken);
    notificationListener.current =
      Notifications.addNotificationReceivedListener((notification) => {
        setNotification(notification);
      });

    responseListener.current =
      Notifications.addNotificationResponseReceivedListener((response) => {
        console.log(response);
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

    console.log("currentUser & isAuth on load", currentUser, isAuth);
  }, [currentUser, isAuth]);

  useEffect(() => {
    restoreToken();
    restoreSignIn();
    versionChecker.compareVersion(version);
    console.log(version);
  }, []);
  //usePreventScreenCapture();

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
      // console.log('authenticated', device, authStorage.storeSignInSetting(JSON.stringify({"signedIn":`${result.success}`})))
      console.log("turn off authenticator", result.success);
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
      console.log("the app is closed");
      console.log(currentUser);
      // setCurrent9User(null)
    }
  };

  /**
   * @dev This pgets the token from storage and gets the user's details from it
   * @dev ID hooks are set here
   * @returns null if there is no token
   */
  const restoreToken = async () => {
    console.log("trying for restore token");
    //Get the token from storage
    const token = await authStorage.getToken();
    if (!token) {
      setIsLoading(false);
      return;
    }
    console.log("token", token);

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


 
  return (
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

        directors,
        setDirectors,
        beneficialOwners,
        setOwners,
        controllingInterests,
        setIntrests,
        version,
        setVersion,
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

        {/**
         *  @Devs- Do not delete the Authentication code above. Render the Navigator you require for development. i.e. <AppNavigator />
            or <AuthNavigator />
        */}
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
  console.log("pushToken", token);

  return token;
}
