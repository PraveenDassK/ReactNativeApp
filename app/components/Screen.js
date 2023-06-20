import React from "react";
// import Constants from "expo-constants";
import { StyleSheet, SafeAreaView, View, TouchableWithoutFeedback, Keyboard,  Platform} from "react-native";
import KeyboardAvoider from "./KeyboardAvoider";

function Screen({ children, style, enabled = true }) {
  return (
<KeyboardAvoider>
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <SafeAreaView style={[styles.view, style]}>
      {children}
    </SafeAreaView>
    </TouchableWithoutFeedback>
   </KeyboardAvoider>
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
