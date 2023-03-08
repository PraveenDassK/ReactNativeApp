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

import AuthContext from "./app/auth/context";
import AppNavigator from "./app/navigation/AppNavigator";
import AuthNavigator from "./app/navigation/AuthNavigator";
import authStorage from "./app/auth/storage";





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


//External
const [accountID, setAccountID] = useState("A12274AW")
//CarbonyteID
const [userID, setUserID] = useState("C1220XHD")
const [pin, setPin] = useState("0000")

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

  const authenticate = async () => {
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
    // setCurrentUser(null)
  }    
}



const restoreToken = async () => {
  console.log('trying for restore token')
  const token = await authStorage.getToken()
  if(!token) return
  console.log('restore token found',token)
  setCurrentUser(jwtDecode(token))
}

const restoreSignIn = async () => {
  console.log('trying for restore sign in')
  const token = await authStorage.getSignInSettings()
  if(!token) return
  console.log('restore token sign in',token, token.includes('true'))
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
      pin, setPin
    }}>
      <NavigationContainer>

        <AppNavigator />
        {/* {!currentUser ? (
          <AuthNavigator /> 
        ) :  currentUser ? (
          <AppNavigator /> 
        ) : (
          <AuthNavigator />
        )} */}

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
    token = (await Notifications.getExpoPushTokenAsync()).data;
    console.log(token);
  } else {
    alert('Must use physical device for Push Notifications');
  }
  console.log("token", token)

  return token;
}