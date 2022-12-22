import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const LogoAnimation21 = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.logoAnimation21}
      onPress={() => navigation.navigate("LogoAnimation31")}
    >
      <View style={[styles.groupView1, styles.ml1]}>
        <View style={styles.groupView}>
          <View style={styles.rectangleView} />
          <Text style={styles.hello}>Whoop!</Text>
          <View style={styles.homeIndicator} />
          <Image
            style={styles.ellipseIcon}
            resizeMode="cover"
            source={require("../assets/ellipse-3240.png")}
          />
        </View>
      </View>
      <View style={[styles.statusBarBlack, styles.mt_1236]}>
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
      <Image
        style={[styles.layer12Icon, styles.mt310]}
        resizeMode="cover"
        source={require("../assets/layer-121.png")}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  ml1: {
    marginLeft: 1,
  },
  mt_1236: {
    marginTop: -1236,
  },
  mt310: {
    marginTop: 310,
  },
  rectangleView: {
    position: "absolute",
    top: 0,
    right: 37,
    left: 36,
    backgroundColor: "#f6f5f8",
    height: 812,
  },
  hello: {
    position: "absolute",
    top: 246,
    left: 161,
    fontSize: 37,
    lineHeight: 50,
    fontWeight: "700",
    fontFamily: "Typo Grotesk",
    color: "#0101fd",
    textAlign: "center",
  },
  homeIndicator: {
    position: "absolute",
    marginTop: 181,
    top: "50%",
    right: 157,
    left: 157,
    borderRadius: 100,
    backgroundColor: "#000",
    height: 5,
  },
  ellipseIcon: {
    position: "absolute",
    right: -300,
    bottom: -300,
    left: 0,
    maxWidth: "100%",
    overflow: "hidden",
    height: 622,
  },
  groupView: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  groupView1: {
    position: "relative",
    width: 448,
    height: 1236,
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
  layer12Icon: {
    position: "relative",
    width: 127,
    height: 135,
  },
  logoAnimation21: {
    position: "relative",
    backgroundColor: "#4b4b4b",
    flex: 1,
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
  },
});

export default LogoAnimation21;
