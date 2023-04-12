import React from "react";
import Constants from "expo-constants";
import { StyleSheet, SafeAreaView, View, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, Platform} from "react-native";

function Screen({ children, style }) {
  return (
    <KeyboardAvoidingView
    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    style={styles.screen}
    >

    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <SafeAreaView style={[styles.view, style]}>
      <View style={[styles.view, style]}>{children}</View>
    </SafeAreaView>
    </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  screen: {
    // paddingTop: Constants.statusBarHeight,
    flex: 1,
  },
  view: {
    flex: 1,
  },
});

export default Screen;
