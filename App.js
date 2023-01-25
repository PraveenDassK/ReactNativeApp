import React, { useState } from "react";

import 'expo-dev-menu';

import { NavigationContainer } from "@react-navigation/native";

import AuthContext from "./app/auth/context";

import AppNavigator from "./app/navigation/AppNavigator";
import AuthNavigator from "./app/navigation/AuthNavigator";


export default function App() {

const [user, setUser] = useState()
const [currentUser, setCurrentUser] = useState()

  return (
  
    <AuthContext.Provider value={{user, setUser, currentUser, setCurrentUser}}>
      <NavigationContainer>
        {currentUser ? <AppNavigator/> : <AuthNavigator/> }
      </NavigationContainer>
    </AuthContext.Provider>
    
  )
}



