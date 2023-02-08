import React, { useState, useEffect } from "react";
import {AppState} from 'react-native';
// import 'expo-dev-menu';

import { NavigationContainer } from "@react-navigation/native";
import jwtDecode from 'jwt-decode'
import AppLoading from 'expo-app-loading';
import * as SplashScreen from 'expo-splash-screen';
import * as LocalAuthentication from 'expo-local-authentication';

import AuthContext from "./app/auth/context";
import AppNavigator from "./app/navigation/AppNavigator";
import AuthNavigator from "./app/navigation/AuthNavigator";
import authStorage from "./app/auth/storage";

export default function App() {

const [user, setUser] = useState()
const [currentUser, setCurrentUser] = useState()
const [isAuth, setIsAuth] = useState(false)


//External
const [accountID, setAccountID] = useState("A12274AW")
//CarbonyteID
const [userID, setUserID] = useState("C1220XHD")

const [settings, setSettings] = useState({
  faceId: false,
  hideBalance:true,
  contactAccess:false,
  transactionSharing:false
})

// const [isReady, setIsReady] = useState(false)



  // useEffect(() => {
  //   if(isAuth) {
  //     authenticate()
  //   }
  //   console.log('currentUser & isAuth on load', currentUser, isAuth)
  // }, [currentUser, isAuth ])

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

  return (
  
    <AuthContext.Provider value={{
      user, setUser, 
      currentUser, setCurrentUser, 
      isAuth, setIsAuth,
      accountID,setAccountID,
      userID, setUserID,
      settings, setSettings
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
