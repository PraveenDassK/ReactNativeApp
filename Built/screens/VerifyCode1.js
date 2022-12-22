import * as React from "react";
import { StyleSheet, View, Pressable, Text, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

const VerifyCode1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.verifyCode1}>
      <Pressable
        style={styles.rectanglePressable}
        onPress={() => navigation.navigate("Account3")}
      />
      <View style={[styles.statusBarBlack, styles.mt_812_06]}>
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
            <View style={styles.rectangleView} />
            <View style={styles.rectangleView1} />
            <View style={styles.rectangleView2} />
            <View style={styles.rectangleView3} />
          </View>
        </View>
      </View>
      <Text style={[styles.hello, styles.mt30_939999999999998]}>
        <Text style={styles.yourBankAccount}>Your bank account is</Text>
        <Text style={styles.successfullyLinkedTo}>successfully linked to</Text>
        <Text style={styles.carboynyte}>Carboynyte</Text>
      </Text>
      <Image
        style={[styles.iconAwesomeCheckCircle, styles.mt254_94]}
        resizeMode="cover"
        source={require("../assets/icon-awesomecheckcircle.png")}
      />
      <View
        style={[styles.homeIndicator, styles.mt16_939999999999998, styles.ml1]}
      />
      <Text style={[styles.hello1, styles.mt180_94, styles.ml1]}>
        Tap anywhere to continue
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mt_812_06: {
    marginTop: -812.06,
  },
  mt30_939999999999998: {
    marginTop: 30.939999999999998,
  },
  mt254_94: {
    marginTop: 254.94,
  },
  mt16_939999999999998: {
    marginTop: 16.939999999999998,
  },
  ml1: {
    marginLeft: 1,
  },
  mt180_94: {
    marginTop: 180.94,
  },
  rectanglePressable: {
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
  rectangleView: {
    position: "absolute",
    bottom: 0,
    left: 0,
    borderRadius: 2,
    backgroundColor: "#272727",
    width: 3,
    height: 4,
  },
  rectangleView1: {
    position: "absolute",
    marginLeft: -3.5,
    bottom: 0,
    left: "50%",
    borderRadius: 2,
    backgroundColor: "#272727",
    width: 3,
    height: 6,
  },
  rectangleView2: {
    position: "absolute",
    marginLeft: 0.5,
    bottom: 0,
    left: "50%",
    borderRadius: 2,
    backgroundColor: "#272727",
    width: 3,
    height: 9,
  },
  rectangleView3: {
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
  yourBankAccount: {
    margin: 0,
  },
  successfullyLinkedTo: {
    margin: 0,
  },
  carboynyte: {
    margin: 0,
  },
  hello: {
    position: "relative",
    fontSize: 20,
    lineHeight: 24,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#00003d",
    textAlign: "center",
  },
  iconAwesomeCheckCircle: {
    position: "relative",
    width: 188,
    height: 188,
  },
  homeIndicator: {
    position: "relative",
    borderRadius: 100,
    backgroundColor: "#000",
    width: 134,
    height: 5,
  },
  hello1: {
    position: "relative",
    fontSize: 12,
    fontFamily: "Helvetica",
    color: "#999",
    textAlign: "center",
  },
  verifyCode1: {
    position: "relative",
    backgroundColor: "#4b4b4b",
    flex: 1,
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
  },
});

export default VerifyCode1;
