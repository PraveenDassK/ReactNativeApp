import React from "react";

import { useNavigation } from "@react-navigation/native";
import { Button } from "react-native";
import HeaderBackButton from "./HeaderBackButton";

function HeaderBackButtonWithCustomAction() {
  const navigation = useNavigation();

  const handleBackButtonPress = () => {
    // Add your custom navigation logic here
    // For example, navigate to the homepage
    console.log("here");
    navigation.navigate("Account");
  };

  return <HeaderBackButton onBack={handleBackButtonPress} />;
}

export default HeaderBackButtonWithCustomAction;
