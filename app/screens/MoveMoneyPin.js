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
import formatCurrency from "../utility/formatCurrency";
const Pin = ({ route, navigation }) => {
  let title = route.params.title ? route.params.title : "Enter Pin";
  const pindata = route.params;
  const amount = 10;
  const pinView = useRef(null);
  const [isLoading, setLoading] = useState(false);
  const [showRemoveButton, setShowRemoveButton] = useState(false);
  const [enteredPin, setEnteredPin] = useState("");
  const [showCompletedButton, setShowCompletedButton] = useState(false);
  const { darkMode } = useContext(AuthContext);
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
    // if ('"' + enteredPin + '"' != (await authStorage.getPasscode())) {
    //   alert("Pin is incorrect");
    //   pinView.current.clearAll();
    //   return;
    // }

    //If it is a group send and
    //If pin is correct then atempt to send
    setLoading(true);
    const requestObj = route.params;
    console.log(requestObj)
    const transferRequest = await apiTransaction.sendMoney(requestObj);
    console.log(transferRequest)
    setLoading(false);

    //Check if the sending was successful
    if (!transferRequest.data.result) {
      alert("Transaction unsuccessful");
      // alert(transferRequest?.data?.resultMessage?.errorReason);
      pinView.current.clearAll();
      return;
    }
    navigation.navigate("MoveMoneySuccess", requestObj);
  };

  if (isLoading) {
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor:
            darkMode === "DARK" ? GlobalStyles.Color.darkTheme_bg : null,
        }}
      >
        <ActivityIndicator
          size={"large"}
          color={
            darkMode === "DARK"
              ? GlobalStyles.Color.white
              : GlobalStyles.Color.black
          }
        />
      </View>
    );
  }

  return (
    <View
      style={[
        darkMode === "DARK" ? styles.darksendEnterPin1 : styles.sendEnterPin1,
        darkMode === "DARK"
          ? styles.darksendEnterPin1Child
          : styles.sendEnterPin1Child,
      ]}
    >
      {pindata && (
        <View
          style={{
            width: "100%",
            gap: 10,
            paddingTop: "5%",
          }}
        >
          <View style={styles.nameContainer}>
            <Text
              style={[
                darkMode === "DARK"
                  ? styles.darktopLeftText
                  : styles.topLeftText,
              ]}
            >
              Send to
            </Text>
            <Text
              style={[
                darkMode === "DARK"
                  ? styles.darktopRightText
                  : styles.topRightText,
              ]}
            >
              {pindata?.destination?.accountNumber}
            </Text>
          </View>
          <View style={styles.nameContainer}>
            <Text
              style={[
                darkMode === "DARK"
                  ? styles.darktopLeftText
                  : styles.topLeftText,
              ]}
            >
              Amout
            </Text>
            <Text
              style={[
                darkMode === "DARK"
                  ? styles.darktopRightText
                  : styles.topRightText,
              ]}
            >
              {formatCurrency(pindata?.amount, "GBP", false)}
            </Text>
          </View>
        </View>
      )}
      {!pindata && (
        <Text
          style={[
            darkMode === "DARK" ? styles.darkhello : styles.hello,
            styles.mt_615,
          ]}
        >
          {title}
        </Text>
      )}
      <ReactNativePinView
        disabled={isLoading}
        style={[
          darkMode === "DARK"
            ? styles.darksendEnterPin12
            : styles.sendEnterPin12,
          // styles.sendEnterPin1Child,
        ]}
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
          borderColor:
            darkMode === "DARK"
              ? GlobalStyles.Color.white
              : GlobalStyles.Color.indigo_100,
        }}
        inputViewFilledStyle={{
          backgroundColor:
            darkMode === "DARK"
              ? GlobalStyles.Color.white
              : GlobalStyles.Color.indigo_100,
        }}
        buttonTextStyle={{
          color:
            darkMode === "DARK"
              ? GlobalStyles.Color.white
              : GlobalStyles.Color.indigo_100,
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
              color={
                darkMode === "DARK"
                  ? GlobalStyles.Color.white
                  : GlobalStyles.Color.indigo_100
              }
            />
          ) : undefined
        }
        customRightButton={
          showCompletedButton ? (
            <View>
              <Text
                style={{
                  color:
                    darkMode === "DARK"
                      ? GlobalStyles.Color.white
                      : GlobalStyles.Color.secondaryDarkTheme_bg,
                }}
              >
                Enter
              </Text>
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
    backgroundColor: GlobalStyles.Color.gray_10,
    width: "100%",
    height: 812,
  },
  darksendEnterPin1Child: {
    backgroundColor: GlobalStyles.Color.darkTheme_bg,
    width: "100%",
    height: 812,
  },
  hello: {
    fontSize: GlobalStyles.FontSize.size_base,
    textAlign: "left",
    color: GlobalStyles.Color.indigo_100,
  },
  darkhello: {
    fontSize: GlobalStyles.FontSize.size_base,
    textAlign: "left",
    color: GlobalStyles.Color.white,
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
    backgroundColor: GlobalStyles.Color.white,
    flex: 1,
    width: "100%",
    alignItems: "center",
    marginTop: 50,
    paddingTop: "3%",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  darksendEnterPin12: {
    backgroundColor: GlobalStyles.Color.secondaryDarkTheme_bg,
    flex: 1,
    width: "100%",
    alignItems: "center",
    marginTop: 50,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingTop: "3%",
  },
  sendEnterPin1: {
    backgroundColor: GlobalStyles.Color.white,
    flex: 1,
    width: "100%",
    alignItems: "center",
  },
  darksendEnterPin1: {
    backgroundColor: GlobalStyles.Color.darkTheme_bg,
    flex: 1,
    width: "100%",
    alignItems: "center",
  },
  nameContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  topLeftText: {
    fontFamily: "Montserrat-Regular",
    fontSize: 16,
    color: GlobalStyles.Color.black,
  },
  darktopLeftText: {
    fontFamily: "Montserrat-Regular",
    fontSize: 16,
    color: GlobalStyles.Color.white,
  },
  topRightText: {
    fontFamily: "Montserrat",
    fontSize: 16,
    color: GlobalStyles.Color.secondaryDarkTheme_bg,
  },
  darktopRightText: {
    fontFamily: "Montserrat",
    fontSize: 16,
    color: GlobalStyles.Color.white,
  },
});

export default Pin;
