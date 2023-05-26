import React, { useEffect, useRef, useState } from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import GlobalStyles from "../../GlobalStyles";
import ReactNativePinView from "react-native-pin-view";
import Icon from "react-native-vector-icons/Ionicons";

import cardDetails from "../api/cardDetails";
import pinControl from "../api/pinControl";

import WebView from "react-native-webview";

const Pin = ({ route, navigation }) => {
  const pinView = useRef(null);
  const [showRemoveButton, setShowRemoveButton] = useState(false);
  const [enteredPin, setEnteredPin] = useState("");
  const [showCompletedButton, setShowCompletedButton] = useState(false);
  const [firstPin, setFirstPin] = useState("");
  const [title, setTitle] = useState(
    route.params?.title ? route.params.title : "Enter New Pin"
  );

  useEffect(() => {
      // different ID to test
      // 714613712 // 46359612 // 38759312 // 687942912 // 714613712// Physical Card2 ID: 715767812 46765612

    // cardDetails.getPlasticCards('715767812');
    pinControl.getAccessToken('46765612')

  }, []);

  // useEffect(() => {
  //   loadIFrame();
  // }, []);

  /**
   * Pin display controlers
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

  const loadIFrame = async () => {
    console.log("!");
    const IframeToken = await cardDetails.getPinControlToken(
      "9999140099689729"
    );
    console.log(IframeToken);
  };

  /**
   * @dev This is the controler if the pin is correct or not
   * @returns null If pin is incorrect
   */
  const checkPin = async () => {
    if (firstPin == "") {
      setFirstPin(enteredPin);
      pinView.current.clearAll();
      setTitle("Confirm Pin");
    } else if (firstPin == enteredPin) {
      alert("Pin set");

      //@todo change to enfuse
      //apiCall.SetPin(firstPin)
      navigation.navigate("Account");
    } else {
      alert("Pin does not match");
      pinView.current.clearAll();
      setTitle("Enter New Pin");
      setFirstPin("");
    }
  };

  return (
    <WebView
      source={{ uri: "https://pin-web.demo.ext.test.cia.enfuce.com/pinweb/viewframe" }}
      // onMessage={(event) => console.log(event.nativeEvent.data)}
    />
  );

  return (
    <View style={[styles.sendEnterPin1, styles.sendEnterPin1Child]}>
      <Text style={[styles.hello, styles.mt_615]}>{title}</Text>
      <ReactNativePinView
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

export default Pin;
