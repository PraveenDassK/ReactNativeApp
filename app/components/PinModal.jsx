import React, { useContext, useEffect, useRef, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  Pressable,
  ActivityIndicator,
} from "react-native";
import GlobalStyles from "../../GlobalStyles";
import ReactNativePinView from "react-native-pin-view";
import Icon from "react-native-vector-icons/Ionicons";

import AuthContext from "../auth/context";
import api from "../api/apiCall";
import apiTransaction from "../api/apiTransaction";
import authStorage from "../auth/storage";

const PinModal = ({title, success, failure = () => null, atempts} ) => {
  const pinView = useRef(null);
  const [isLoading, setLoading] = useState(false);
  const [showRemoveButton, setShowRemoveButton] = useState(false);
  const [enteredPin, setEnteredPin] = useState("");
  const [showCompletedButton, setShowCompletedButton] = useState(false);

  /**
   * @dev Pin display controlers
   */
  useEffect(() => {
    if (enteredPin.length > 0) {
      setShowRemoveButton(true);
    } else {
      setShowRemoveButton(false);
    }
    if (enteredPin.length === 4) {
      setShowCompletedButton(true);
    } else {
      setShowCompletedButton(false);
    }
  }, [enteredPin]);


  /**
   * @dev Checks the pin and sends money when necissary
   * @returns 
   */
  const checkPin = async () => {
    if ('"' + enteredPin + '"' != (await authStorage.getPasscode())) {
      alert("Pin is incorrect");
      pinView.current.clearAll();
      failure()
      return;
    }

    success()
  };

  if (isLoading) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <ActivityIndicator size={"large"} color="black" />
      </View>
    );
  }

  return (
    <View style={[styles.sendEnterPin1, styles.sendEnterPin1Child]}>
      <Text style={[styles.hello, styles.mt_615]}>{title}</Text>
      <ReactNativePinView
        disabled={isLoading}
        style={[styles.sendEnterPin12, styles.sendEnterPin1Child]}
        inputSize={12}
        ref={pinView}
        pinLength={4}
        buttonSize={60}
        onValueChange={(value) => setEnteredPin(value)}
        buttonAreaStyle={{
          marginTop: 24,
        }}
        inputAreaStyle={{
          marginBottom: 24,
        }}
        inputViewEmptyStyle={{
          backgroundColor: "transparent",
          borderWidth: 1,
          borderColor: GlobalStyles.Color.indigo_100,
        }}
        inputViewFilledStyle={{
          backgroundColor: GlobalStyles.Color.indigo_100,
        }}
        buttonTextStyle={{
          color: GlobalStyles.Color.indigo_100,
        }}
        onButtonPress={(key) => {
          if (key === "custom_left") {
            pinView.current.clear();
          }
          if (key === "custom_right") {
            checkPin();
          }
        }}
        customLeftButton={
          showRemoveButton ? (
            <Icon
              name={"ios-backspace"}
              size={36}
              color={GlobalStyles.Color.indigo_100}
            />
          ) : undefined
        }
        customRightButton={
          showCompletedButton ? (
            <View>
              <Text>Enter</Text>
            </View>
          ) : undefined
        }
      ></ReactNativePinView>
    </View>
  );
};

const styles = StyleSheet.create({
  mt_615: {
    marginTop: 50,
  },
  mt82: {
    marginTop: 82,
  },
  mt28: {
    marginTop: -328,
  },
  ml1: {
    marginLeft: GlobalStyles.Margin.margin_7xs,
  },
  helloTypo2: {
    textAlign: "center",
    lineHeight: 35,
    fontSize: GlobalStyles.FontSize.size_9xl,
    left: 114,
    position: "absolute",
    color: GlobalStyles.Color.indigo_100,
  },
  helloTypo1: {
    left: 228,
    textAlign: "center",
    lineHeight: 35,
    fontSize: GlobalStyles.FontSize.size_9xl,
    position: "absolute",
    color: GlobalStyles.Color.indigo_100,
  },
  helloTypo: {
    left: 0,
    textAlign: "center",
    lineHeight: 35,
    fontSize: GlobalStyles.FontSize.size_9xl,
    position: "absolute",
    color: GlobalStyles.Color.indigo_100,
  },
  sendEnterPin1Child: {
    backgroundColor: GlobalStyles.Color.gray_200,
    width: "100%",
    height: 812,
  },
  hello: {
    fontSize: GlobalStyles.FontSize.size_base,
    textAlign: "left",
    color: GlobalStyles.Color.indigo_100,
  },
  hello1: {
    top: 0,
  },
  hello2: {
    top: 84,
  },
  hello3: {
    top: 168,
  },
  hello4: {
    top: 252,
  },
  hello5: {
    top: 0,
  },
  hello6: {
    top: 84,
  },
  hello7: {
    top: 168,
  },
  hello8: {
    top: 0,
  },
  hello9: {
    top: 84,
  },
  hello10: {
    top: 168,
  },
  iconIonicIosBackspace: {
    right: 0,
    bottom: 10,
    width: 29,
    height: 23,
    position: "absolute",
  },
  helloParent: {
    width: 251,
    height: 282,
  },
  sendEnterPin1Item: {
    width: 100,
    height: 14,
  },
  sendEnterPin12: {
    backgroundColor: GlobalStyles.Color.gray_100,
    flex: 1,
    width: "100%",
    alignItems: "center",
    marginTop: 50,
  },
  sendEnterPin1: {
    backgroundColor: GlobalStyles.Color.gray_100,
    flex: 1,
    width: "100%",
    alignItems: "center",
  },
});

export default PinModal;
