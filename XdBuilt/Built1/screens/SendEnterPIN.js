import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const SendEnterPIN = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.sendEnterPIN}
      onPress={() => navigation.navigate("SentMoney")}
    >
      <View style={styles.rectangleView} />
      <View style={[styles.statusBarBlack, styles.mt_812]}>
        <View style={styles.rectangle} />
        <View style={styles.statusBar}>
          <View style={styles.time}>
            <Text style={styles.text}>9:41</Text>
          </View>
          <Image
            style={styles.batteryIcon}
            resizeMode="cover"
            source={require("../assets/battery.png")}
          />
          <Image
            style={styles.wifiIcon}
            resizeMode="cover"
            source={require("../assets/wifi.png")}
          />
          <View style={styles.network}>
            <View style={styles.rectangleView1} />
            <View style={styles.rectangleView2} />
            <View style={styles.rectangleView3} />
            <View style={styles.rectangleView4} />
          </View>
        </View>
      </View>
      <View style={[styles.homeIndicator, styles.mt183, styles.ml1]} />
      <View style={[styles.homeIndicator1, styles.mt_5, styles.ml1]} />
      <Text style={[styles.hello, styles.mt151]}>Enter PIN</Text>
      <View style={[styles.groupView, styles.mt78]}>
        <Text style={styles.hello1}>2</Text>
        <Text style={styles.hello2}>5</Text>
        <Text style={styles.hello3}>8</Text>
        <Text style={styles.hello4}>0</Text>
        <Text style={styles.hello5}>3</Text>
        <Text style={styles.hello6}>6</Text>
        <Text style={styles.hello7}>9</Text>
        <Text style={styles.hello8}>1</Text>
        <Text style={styles.hello9}>4</Text>
        <Text style={styles.hello10}>7</Text>
        <Image
          style={styles.iconIonicIosBackspace}
          resizeMode="cover"
          source={require("../assets/icon-ioniciosbackspace.png")}
        />
      </View>
      <View style={[styles.homeIndicator2, styles.mt_5, styles.ml1]} />
      <Image
        style={[styles.groupIcon, styles.mt28, styles.ml1]}
        resizeMode="cover"
        source={require("../assets/group-30317.png")}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  mt_812: {
    marginTop: -812,
  },
  mt183: {
    marginTop: 183,
  },
  ml1: {
    marginLeft: 1,
  },
  mt_5: {
    marginTop: -5,
  },
  mt151: {
    marginTop: 151,
  },
  mt78: {
    marginTop: 78,
  },
  mt28: {
    marginTop: 28,
  },
  rectangleView: {
    position: "relative",
    backgroundColor: "#f6f5f8",
    width: 375,
    height: 812,
  },
  rectangle: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: "#fff",
    shadowColor: "rgba(0, 0, 0, 0.05)",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 6,
    elevation: 6,
    shadowOpacity: 1,
  },
  text: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 20,
    letterSpacing: 0,
    lineHeight: 24,
    fontWeight: "500",
    fontFamily: "Roboto",
    color: "rgba(0, 0, 0, 0.87)",
    textAlign: "left",
  },
  time: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    width: 40,
  },
  batteryIcon: {
    position: "absolute",
    marginTop: -3,
    top: "50%",
    right: 0,
    width: 22,
    height: 11,
  },
  wifiIcon: {
    position: "absolute",
    marginTop: -3,
    top: "50%",
    right: 37,
    width: 17,
    height: 12,
  },
  rectangleView1: {
    position: "absolute",
    bottom: 0,
    left: 0,
    borderRadius: 2,
    backgroundColor: "#272727",
    width: 3,
    height: 4,
  },
  rectangleView2: {
    position: "absolute",
    marginLeft: -3.5,
    bottom: 0,
    left: "50%",
    borderRadius: 2,
    backgroundColor: "#272727",
    width: 3,
    height: 6,
  },
  rectangleView3: {
    position: "absolute",
    marginLeft: 0.5,
    bottom: 0,
    left: "50%",
    borderRadius: 2,
    backgroundColor: "#272727",
    width: 3,
    height: 9,
  },
  rectangleView4: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    borderRadius: 2,
    backgroundColor: "#272727",
    width: 3,
  },
  network: {
    position: "absolute",
    marginTop: -3,
    top: "50%",
    right: 68,
    width: 17,
    height: 11,
  },
  statusBar: {
    position: "absolute",
    marginTop: -15,
    top: "50%",
    right: 16,
    left: 15,
    height: 26,
  },
  statusBarBlack: {
    position: "relative",
    width: 375,
    height: 44,
  },
  homeIndicator: {
    position: "relative",
    borderRadius: 100,
    backgroundColor: "#000",
    width: 134,
    height: 5,
  },
  homeIndicator1: {
    position: "relative",
    borderRadius: 100,
    backgroundColor: "#000",
    width: 134,
    height: 5,
  },
  hello: {
    position: "relative",
    fontSize: 14,
    fontFamily: "Helvetica",
    color: "#00003d",
    textAlign: "left",
  },
  hello1: {
    position: "absolute",
    top: 0,
    left: 114,
    fontSize: 30,
    lineHeight: 25,
    fontFamily: "Helvetica",
    color: "#00003d",
    textAlign: "center",
  },
  hello2: {
    position: "absolute",
    top: 84,
    left: 114,
    fontSize: 30,
    lineHeight: 25,
    fontFamily: "Helvetica",
    color: "#00003d",
    textAlign: "center",
  },
  hello3: {
    position: "absolute",
    top: 168,
    left: 114,
    fontSize: 30,
    lineHeight: 25,
    fontFamily: "Helvetica",
    color: "#00003d",
    textAlign: "center",
  },
  hello4: {
    position: "absolute",
    top: 252,
    left: 114,
    fontSize: 30,
    lineHeight: 25,
    fontFamily: "Helvetica",
    color: "#00003d",
    textAlign: "center",
  },
  hello5: {
    position: "absolute",
    top: 0,
    left: 228,
    fontSize: 30,
    lineHeight: 25,
    fontFamily: "Helvetica",
    color: "#00003d",
    textAlign: "center",
  },
  hello6: {
    position: "absolute",
    top: 84,
    left: 228,
    fontSize: 30,
    lineHeight: 25,
    fontFamily: "Helvetica",
    color: "#00003d",
    textAlign: "center",
  },
  hello7: {
    position: "absolute",
    top: 168,
    left: 228,
    fontSize: 30,
    lineHeight: 25,
    fontFamily: "Helvetica",
    color: "#00003d",
    textAlign: "center",
  },
  hello8: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 30,
    lineHeight: 25,
    fontFamily: "Helvetica",
    color: "#00003d",
    textAlign: "center",
  },
  hello9: {
    position: "absolute",
    top: 84,
    left: 0,
    fontSize: 30,
    lineHeight: 25,
    fontFamily: "Helvetica",
    color: "#00003d",
    textAlign: "center",
  },
  hello10: {
    position: "absolute",
    top: 168,
    left: 0,
    fontSize: 30,
    lineHeight: 25,
    fontFamily: "Helvetica",
    color: "#00003d",
    textAlign: "center",
  },
  iconIonicIosBackspace: {
    position: "absolute",
    right: 0,
    bottom: 9,
    width: 29,
    height: 23,
  },
  groupView: {
    position: "relative",
    width: 251,
    height: 285,
  },
  homeIndicator2: {
    position: "relative",
    borderRadius: 100,
    backgroundColor: "#000",
    width: 134,
    height: 5,
  },
  groupIcon: {
    position: "relative",
    width: 100,
    height: 14,
  },
  sendEnterPIN: {
    position: "relative",
    backgroundColor: "#4b4b4b",
    flex: 1,
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
  },
});

export default SendEnterPIN;
