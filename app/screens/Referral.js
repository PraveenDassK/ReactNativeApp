import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Vibration,
} from "react-native";

import Clipboard from "@react-native-clipboard/clipboard";

const Referral = ({ refCode = 9090 }) => {
  const copyReferral = () => {
    console.log("clicked", refCode);
    Vibration.vibrate();
    alert("Referral copied");
    Clipboard.setString(refCode);
  };

  return (
    <View style={styles.container}>
      <Text>Referral Code:</Text>
      <TouchableOpacity onPress={copyReferral}>
        <Text>{refCode}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Referral;

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
});
