import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Vibration,
} from "react-native";

import * as Clipboard from 'expo-clipboard';

const Referral = ({ refCode = 9090 }) => {
  const copyReferral = async () => {
    
    Vibration.vibrate();
    alert("Referral copied");
    await Clipboard.setStringAsync(`${refCode}`);

    // Clipboard.setString(refCode);
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
