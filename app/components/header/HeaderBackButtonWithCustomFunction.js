import React from "react";

import { useNavigation } from "@react-navigation/native";
import { Button } from "react-native";
import HeaderBackButton from "./HeaderBackButton";

function HeaderBackButtonWithCustomAction() {
  const navigation = useNavigation();

  const handleBackButtonPress = () => {
    navigation.navigate("Account");
  };

  return <HeaderBackButton onBack={handleBackButtonPress} />;
}

export default HeaderBackButtonWithCustomAction;
