import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const LogoAnimation31 = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.logoAnimation31}
      onPress={() => navigation.navigate("PushNotification")}
    >
      <View style={styles.groupView1}>
        <View style={styles.groupView} />
      </View>
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
            <View style={styles.rectangleView} />
            <View style={styles.rectangleView1} />
            <View style={styles.rectangleView2} />
            <View style={styles.rectangleView3} />
          </View>
        </View>
      </View>
      <Image
        style={[styles.layer12Icon, styles.mt59, styles.ml1]}
        resizeMode="cover"
        source={require("../assets/layer-12.png")}
      />
      <View style={[styles.homeIndicator, styles.mt196, styles.ml1]} />
      <Text style={[styles.hello, styles.mt48, styles.ml15]}>
        Your account has beencreated successfully
      </Text>
      <Text style={[styles.hello1, styles.mt202, styles.ml15]}>Whoop!</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  mt_812: {
    marginTop: -812,
  },
  mt59: {
    marginTop: 59,
  },
  ml1: {
    marginLeft: 1,
  },
  mt196: {
    marginTop: 196,
  },
  mt48: {
    marginTop: 48,
  },
  ml15: {
    marginLeft: 15,
  },
  mt202: {
    marginTop: 202,
  },
  groupView: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: "#f6f5f8",
  },
  groupView1: {
    position: "relative",
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
  layer12Icon: {
    position: "relative",
    width: 128,
    height: 136,
  },
  homeIndicator: {
    position: "relative",
    borderRadius: 100,
    backgroundColor: "#000",
    width: 134,
    height: 5,
  },
  hello: {
    position: "relative",
    fontSize: 26,
    lineHeight: 30,
    fontWeight: "700",
    fontFamily: "Typo Grotesk",
    color: "#00003d",
    textAlign: "center",
  },
  hello1: {
    position: "relative",
    fontSize: 37,
    lineHeight: 50,
    fontWeight: "700",
    fontFamily: "Typo Grotesk",
    color: "#0101fd",
    textAlign: "center",
  },
  logoAnimation31: {
    position: "relative",
    backgroundColor: "#4b4b4b",
    flex: 1,
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
  },
});

export default LogoAnimation31;
