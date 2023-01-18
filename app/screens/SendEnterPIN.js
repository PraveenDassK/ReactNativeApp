import React, { useEffect, useRef, useState } from "react"
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import GlobalStyles from "../../GlobalStyles";
import ReactNativePinView from 'react-native-pin-view';
import Icon from "react-native-vector-icons/Ionicons"

const SendEnterPIN = ({navigation}) => {
  const pinView = useRef(null)
  const [showRemoveButton, setShowRemoveButton] = useState(false)
  const [enteredPin, setEnteredPin] = useState("")
  const [showCompletedButton, setShowCompletedButton] = useState(false)
  useEffect(() => {
    if (enteredPin.length > 0) {
      setShowRemoveButton(true)
    } else {
      setShowRemoveButton(false)
    }
    if (enteredPin.length === 8) {
      setShowCompletedButton(true)
    } else {
      setShowCompletedButton(false)
    }
  }, [enteredPin])
  return (
    // <Pressable
    //   style={styles.sendEnterPin1}
    //   onPress={() => navigation.navigate("FreezeCard")}
    // > 
    
      <View style={[styles.sendEnterPin1,styles.sendEnterPin1Child]} >
        <Text style={[styles.hello, styles.mt_615]}>Enter PIN</Text>
      <ReactNativePinView
         style={[styles.sendEnterPin12,styles.sendEnterPin1Child]}
            inputSize={12}
            ref={pinView}
            pinLength={4}
            buttonSize={60}
            onValueChange={value => setEnteredPin(value)}
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
              color:GlobalStyles.Color.indigo_100,
            }}
            onButtonPress={key => {
              if (key === "custom_left") {
                pinView.current.clear()
              }
              if (key === "custom_right") {
                alert("Entered Pin: " + enteredPin)
              }
            }}
            customLeftButton={showRemoveButton ? <Icon name={"ios-backspace"} size={36} color={GlobalStyles.Color.indigo_100} /> : undefined}
            customRightButton={showCompletedButton ? <Icon name={"ios-unlock"} size={36} color={GlobalStyles.Color.indigo_100} /> : undefined}
          ></ReactNativePinView>
      
      {/* <View style={[styles.helloParent, styles.mt82]}>
        
        <Pressable
        onPress={() => navigation.navigate("Onboarding1")}
        ><Text  style={[styles.hello1, styles.helloTypo2]}>2</Text></Pressable>
        <Text style={[styles.hello2, styles.helloTypo2]}>5</Text>
        <Text style={[styles.hello3, styles.helloTypo2]}>8</Text>
        <Text style={[styles.hello4, styles.helloTypo2]}>0</Text>
        <Text style={[styles.hello5, styles.helloTypo1]}>3</Text>
        <Text style={[styles.hello6, styles.helloTypo1]}>6</Text>
        <Text style={[styles.hello7, styles.helloTypo1]}>9</Text>
        <Text style={[styles.hello8, styles.helloTypo]}>1</Text>
        <Text style={[styles.hello9, styles.helloTypo]}>4</Text>
        <Text style={[styles.hello10, styles.helloTypo]}>7</Text>

        <Image
          style={styles.iconIonicIosBackspace}
          resizeMode="cover"
          source={require("../assets/icon-backspace.png")}
        />
      </View>
      <Image
        style={[styles.sendEnterPin1Item, styles.mt28, styles.ml1]}
        resizeMode="cover"
        source={require("../assets/image-loadingdots.png")}
      /> */}
      </View>
    // </Pressable>
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
    marginTop:50,
  },
  sendEnterPin1: {
    backgroundColor: GlobalStyles.Color.gray_100,
    flex: 1,
    width: "100%",
    alignItems: "center",
  },
});

export default SendEnterPIN;