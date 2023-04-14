import React, { useState, useEffect, useRef  } from "react";
import { Text, View, Button, Platform ,  ActivityIndicator} from 'react-native';
import {AppState} from 'react-native';
import { useFonts } from 'expo-font';

// import 'expo-dev-menu';
import 'react-native-gesture-handler';
import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';
import { NavigationContainer } from "@react-navigation/native";
import jwtDecode from 'jwt-decode'
import AppLoading from 'expo-app-loading';
import * as SplashScreen from 'expo-splash-screen';
import * as LocalAuthentication from 'expo-local-authentication';
import {decode, encode} from 'base-64'
import AuthContext from "./app/auth/context";
import AppNavigator from "./app/navigation/AppNavigator";
import AuthNavigator from "./app/navigation/AuthNavigator";
import authStorage from "./app/auth/storage";
import apiLogin from "./app/api/apiLogin";

import CardSelection from "./app/components/CardSelection";


if (!global.btoa) {
  global.btoa = encode;
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
    Helvetica: require('./app/assets/fonts/Helvetica.ttf'),
    Typo: require("./app/assets/fonts/typo-grotesk.regular.otf")
  });

  const [expoPushToken, setExpoPushToken] = useState('');
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();

const [user, setUser] = useState()
const [currentUser, setCurrentUser] = useState()
const [isAuth, setIsAuth] = useState(false)
const [login, setLogin] = useState(false)

/**
 * @dev IDs used though the app
 */

//Enfuse customer ID A122HTHM
const [accountID, setAccountID] = useState("")

//Modulr ID C122BMS7
const [userID, setUserID] = useState("")

//Card ID and Enfuse card details A122HTHM
const [cardDetails, setCardDetails] = useState(null)
const [cardID, setCardID] = useState("")

//Carbonyte ID CC1
const [customerDetails, setCustomerDetails] = ("")

//App Pin
const [pin, setPin] = useState("0000")

//Shopping card Details
const [cart, setCart] = useState([])
const [pushToken, setPushToken] = useState()

const [settings, setSettings] = useState({
  faceId: false,
  hideBalance:false,
  transactionSharing:false
})

useEffect(() => {
  const prepare = async () => {
    await SplashScreen.preventAutoHideAsync()
  }
  prepare()
},[])

useEffect(() => {
  registerForPushNotificationsAsync().then(token => setExpoPushToken(token));

  notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
    setNotification(notification);
  });

  responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
    console.log(response);
  });

  return () => {
    Notifications.removeNotificationSubscription(notificationListener.current);
    Notifications.removeNotificationSubscription(responseListener.current);
  };
}, []);



useEffect(() => {
  // console.log('auth storage', currentUser === true, signedAuth.signedIn)
  if(isAuth) {
    authenticate()
  }
  console.log('currentUser & isAuth on load', currentUser, isAuth)
}, [currentUser, isAuth ])

useEffect(() =>{
  restoreToken()
  restoreSignIn()
}, [])

  useEffect(() => {
    AppState.addEventListener('change', handleAppStateChange);

    return () => {
      AppState.removeEventListener('change', handleAppStateChange);
    };
  }, []);



  const  authenticate = async () => {
    "starting authentication"
    const result = await LocalAuthentication.authenticateAsync()
    const device = await LocalAuthentication.supportedAuthenticationTypesAsync()
    if(result.success) {
      // console.log('authenticated', device, authStorage.storeSignInSetting(JSON.stringify({"signedIn":`${result.success}`})))
      console.log('turn off authenticator', result.success)
      setIsAuth(false)
    }
    // if (result) authStorage.storeSignInSetting(JSON.stringify({"signedIn":`${isEnabled}`}))
    if(!result.success) {
      console.log('not authenticated', result.success)
      alert('not authenticated')
    }
  }

const handleAppStateChange = (nextAppState) => {
  if (nextAppState === 'inactive') {
    console.log('the app is closed');
    console.log(currentUser)
    // setCurrent9User(null)
  }    
}

/**
 * @dev This pgets the token from storage and gets the user's details from it
 * @dev ID hooks are set here
 * @returns null if there is no token 
 */
const restoreToken = async () => {
  console.log('trying for restore token')
  const token = await authStorage.getToken()
  if(!token) return
  const decodedToken = jwtDecode(token)
  setCurrentUser(decodedToken)

  const dataobject = JSON.parse(decodedToken.Data.substr())
  
  const carbonyteId = dataobject.CustomerId
  //setCustomerDetails(carbonyteID)
  const result = await apiLogin.GetCustomerDetails(carbonyteId)

  setUserID(result.modulrCustomerId)
  setAccountID(result.accountDetails[0].accountId)
  setCardID(result.accountDetails[0].accountNo)
}

const restoreSignIn = async () => {
  const token = await authStorage.getSignInSettings()
  if(!token) return
  setIsAuth(token.includes('true'))
}

if(!AppState.currentState) {
 setIsAuth(null)
}

if (!loaded) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <ActivityIndicator size="large" color="blue" />
    </View>
  )
} else {
  SplashScreen.hideAsync()
}

  return (
  
    <AuthContext.Provider value={{
      user, setUser, 
      currentUser, setCurrentUser, 
      isAuth, setIsAuth,
      accountID,setAccountID,
      userID, setUserID,
      settings, setSettings,
      pin, setPin,
      cardID, setCardID,
      customerDetails, setCustomerDetails,
      cardDetails, setCardDetails,
      cart, setCart,
      pushToken, setPushToken
    }}>
      <NavigationContainer>

        {/* <AppNavigator /> */}
        {/* <AuthNavigator /> */}

        {!currentUser ? (
          <AuthNavigator /> 
        ) :  currentUser ? (
          <AppNavigator /> 
        ) : (
          <AuthNavigator />
        )}

        {/* @Devs- Do not delete the Authentication code above. Render the Navigator you require for development. i.e. <AppNavigator />
        or <AuthNavigator />*/}

      </NavigationContainer>
    </AuthContext.Provider>    
  )
}

async function registerForPushNotificationsAsync() {
  let token;

  if (Platform.OS === 'android') {
    await Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#FF231F7C',
    });
  }

  if (Device.isDevice) {
    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== 'granted') {
      alert('Failed to get push token for push notification! Please update permissions to continue use the App.');
      return;
    }
    token = (await Notifications.getDevicePushTokenAsync()).data;
    console.log(token);
    setPushToken(token)
  } else {
    alert('Must use physical device for Push Notifications');
  }
  console.log("pushToken", token)

  return token;
}