import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { gestureHandlerRootHOC } from "react-native-gesture-handler"

import Onboarding1 from "../screens/Onboarding1";
import Onboarding2 from "../screens/Onboarding2";
import Onboarding3 from "../screens/Onboarding3";

import SignUpPersonalScreen from "../screens/SignUpPersonalScreen";
import OTPVerificationPersonal from "../screens/OTPVerificationPersonal";
import OTPVerificationPersonal2 from "../screens/OTPVerificationPersonal2";
import Login from "../screens/Login";
import PersonalOrBusiness from "../screens/PersonalOrBusiness";
import Name from "../screens/Name";
import ProofOfResidency from "../screens/ProofOfResidency";
import BusinessAddress2 from "../screens/BusinessAddress2";
import PersonalAddress from "../screens/PersonalAddress";
import DOB from "../screens/DOB";
import Success from "../screens/Success";
import SplashAnimation from "../screens/SplashAnimation"
import Privacy from "../screens/Privacy"
import Registration from "../screens/Registration"

// import LoginScreen from "../screens/LoginScreen";
// import RegisterScreen from "../screens/RegisterScreen";
// import WelcomeScreen from "../screens/WelcomeScreen";

const Stack = createNativeStackNavigator();

const AuthNavigator = () => (
  <Stack.Navigator initialRouteName="Account"
  screenOptions={{ headerShown: false }}
  >
    {/* <Stack.Screen
      name="Welcome"
      component={WelcomeScreen}
      options={{ headerShown: false }}
    /> */}

    {
      //This has been changed to registration for development
      //Will need to be changed over later
    }
    <Stack.Screen  
      name="SplashAnimation"
      component={gestureHandlerRootHOC(Registration)}
      options={{ headerShown: false }}
    />
    <Stack.Screen  name="Onboarding1" component={gestureHandlerRootHOC(Onboarding1)}/>
    <Stack.Screen  name="Onboarding2" component={gestureHandlerRootHOC(Onboarding2)}/>
    <Stack.Screen  name="Onboarding3" component={gestureHandlerRootHOC(Onboarding3)}/>

    <Stack.Screen  
    name="Privacy" 
    component={gestureHandlerRootHOC(Privacy)}
    options={{ title: "Privacy",
    headerShown: true,
   }}
    />
    <Stack.Screen  
    name="SignUpPersonalScreen" 
    component={gestureHandlerRootHOC(SignUpPersonalScreen)}
    options={{ title: "Sign Up",
    headerShown: true,
   }}
    />
    <Stack.Screen  
      name="Login" 
      component={gestureHandlerRootHOC(Login)}
      // options={{ presentation: 'modal' }}
      options={{ 
        title: "Login",
        animation: "slide_from_bottom",
        headerShown: true,
      }}
      />

    <Stack.Screen  
      name="OTPVerificationPersonal" 
      component={gestureHandlerRootHOC(OTPVerificationPersonal)}
      options={{ 
        title: "OTPVerificationPersonal",
        headerShown: true,
      }}
    />
    <Stack.Screen  
      name="OTPVerificationPersonal2" 
      component={gestureHandlerRootHOC(OTPVerificationPersonal2)}
      options={{ 
        title: "OTPVerificationPersonal2",
        headerShown: true,
      }}
    />

    <Stack.Screen  name="PersonalOrBusiness" component={gestureHandlerRootHOC(PersonalOrBusiness)}/>
    <Stack.Screen  name="Name" component={gestureHandlerRootHOC(Name)}/>
    <Stack.Screen  name="ProofOfResidency" component={gestureHandlerRootHOC(ProofOfResidency)}/>
    <Stack.Screen  name="BusinessAddress2" component={gestureHandlerRootHOC(BusinessAddress2)}/>
    <Stack.Screen  name="PersonalAddress" component={gestureHandlerRootHOC(PersonalAddress)}/>
    <Stack.Screen  name="DOB" component={gestureHandlerRootHOC(DOB)}/>
    <Stack.Screen  name="Success" component={gestureHandlerRootHOC(Success)}/>

    
  </Stack.Navigator>
);

export default AuthNavigator;
