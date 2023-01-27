import React, { useState, useEffect } from "react";
import {AppState} from 'react-native';
import 'expo-dev-menu';

import { NavigationContainer } from "@react-navigation/native";
import jwtDecode from 'jwt-decode'
import * as LocalAuthentication from 'expo-local-authentication';

import AuthContext from "./app/auth/context"
import AppNavigator from "./app/navigation/AppNavigator";
import AuthNavigator from "./app/navigation/AuthNavigator";
import authStorage from "./app/auth/storage";

export default function App() {

  const [user, setUser] = useState()
  const [currentUser, setCurrentUser] = useState()
  const [isAuth, setIsAuth] = useState(false)


  const authenticate = async () => {
    "starting authentication"
    const result = await LocalAuthentication.authenticateAsync()
    const device = await LocalAuthentication.supportedAuthenticationTypesAsync()
    if(result.success) {
      console.log('authenticated', device, authStorage.storeSignInSetting(JSON.stringify({"signedIn":`${result.success}`})))
      return setIsAuth(false)
    }
    if(!result.success) {
      console.log('not authenticated', result.success)
      alert('not authenticated')
    }
  }

  useEffect(() => {
    if(isAuth) {
      authenticate()
    }
    console.log('currentUser & isAuth on load', currentUser, isAuth)
  }, [currentUser, isAuth ])

  useEffect(() => {
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

    const handleAppStateChange = (nextAppState) => {
      if (nextAppState === 'inactive') {
        console.log('the app is closed');
        console.log(currentUser)
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

      <AuthContext.Provider value={{user, setUser, currentUser, setCurrentUser, isAuth, setIsAuth}}>
        <NavigationContainer>
          {!currentUser ? (
            <AuthNavigator /> 
          ) :  currentUser ? (
            <AppNavigator /> 
          ) : (
            <AuthNavigator />
          )}
        </NavigationContainer>
      </AuthContext.Provider>
   
  )
}
