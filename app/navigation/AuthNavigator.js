import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
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

// import LoginScreen from "../screens/LoginScreen";
// import RegisterScreen from "../screens/RegisterScreen";
// import WelcomeScreen from "../screens/WelcomeScreen";

const Stack = createNativeStackNavigator();

const AuthNavigator = () => (
  <Stack.Navigator initialRouteName="">
    {/* <Stack.Screen
      name="Welcome"
      component={WelcomeScreen}
      options={{ headerShown: false }}
    /> */}
    <Stack.Screen  
      name="SplashAnimation"
      component={SplashAnimation}
      options={{ headerShown: false }}
    />
    <Stack.Screen  name="Onboarding1" component={Onboarding1}/>
    <Stack.Screen  name="Onboarding2" component={Onboarding2}/>
    <Stack.Screen  name="Onboarding3" component={Onboarding3}/>

    <Stack.Screen  name="SignUpPersonalScreen" component={SignUpPersonalScreen}/>
    <Stack.Screen  name="Login" component={Login}/>

    <Stack.Screen  name="OTPVerificationPersonal" component={OTPVerificationPersonal}/>
    <Stack.Screen  name="OTPVerificationPersonal2" component={OTPVerificationPersonal2}/>

    <Stack.Screen  name="PersonalOrBusiness" component={PersonalOrBusiness}/>
    <Stack.Screen  name="Name" component={Name}/>
    <Stack.Screen  name="ProofOfResidency" component={ProofOfResidency}/>
    <Stack.Screen  name="BusinessAddress2" component={BusinessAddress2}/>
    <Stack.Screen  name="PersonalAddress" component={PersonalAddress}/>
    <Stack.Screen  name="DOB" component={DOB}/>
    <Stack.Screen  name="Success" component={Success}/>

    
  </Stack.Navigator>
);

export default AuthNavigator;
