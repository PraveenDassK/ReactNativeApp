import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import React from "react";
import { SafeAreaView, TextInput, Button, Dropdown} from "react-native";

const countryInput = () => {
  <Text>Filler</Text>
}

const emailInput = () => {
  const [text, onChangeText] = React.useState("Enter your email address");
  const [number, onChangeNumber] = React.useState(null);

  return (
    <SafeAreaView>
    <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="email"
        keyboardType="text"
    />
    </SafeAreaView>
  );
};

const mobileInput = () => {
  const [text, onChangeText] = React.useState("Enter your mobile number");
  const [number, onChangeNumber] = React.useState(null);

  return (
    <SafeAreaView>
    <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="mobile number"
        keyboardType="numeric"
    />
    </SafeAreaView>
  );
};

const enterButton = () => {
  return (
    <Button
      onPress={console.log("!")}
      title="Continue"
      color="#2E38F6"
      accessibilityLabel="Learn more about this purple button"
    />
  );
}

export default function App() {
  return (
    <View style={styles.container}>

      {countryInput()}
      <Text>Enter your email address</Text>
      {emailInput()}
      <Text>Enter your mobile number</Text>
      {mobileInput()}
      {enterButton()}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
