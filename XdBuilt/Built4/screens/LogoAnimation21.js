import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import GlobalStyles from "../GlobalStyles";

const LogoAnimation21 = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.logoAnimation21}
      onPress={() => navigation.navigate("LogoAnimation31")}
    >
      <View style={[styles.logoAnimation21Inner, styles.ml1]}>
        <View style={[styles.rectangleParent, styles.rectanglePosition]}>
          <View style={styles.groupChild} />
          <Text style={styles.hello}>Whoop!</Text>
          <View style={[styles.homeIndicator, styles.statusBarPosition]} />
          <Image
            style={styles.groupItem}
            resizeMode="cover"
            source={require("../assets/ellipse-3240.png")}
          />
        </View>
      </View>
      <View style={[styles.statusBarBlack, styles.mt_1236]}>
        <View style={[styles.rectangle, styles.rectanglePosition]} />
        <View style={[styles.statusBar, styles.statusBarPosition]}>
          <View style={[styles.time, styles.rectanglePosition]}>
            <Text style={styles.text}>9:41</Text>
          </View>
          <Image
            style={styles.batteryIcon}
            resizeMode="cover"
            source={require("../assets/icon-awesomebatterythreequarters.png")}
          />
          <Image
            style={[styles.wifiIcon, styles.networkPosition1]}
            resizeMode="cover"
            source={require("../assets/icon-awesomewifi.png")}
          />
          <View style={[styles.network, styles.networkPosition1]}>
            <View style={[styles.networkChild, styles.networkChildLayout]} />
            <View style={[styles.networkItem, styles.networkPosition]} />
            <View style={[styles.networkInner, styles.networkPosition]} />
            <View style={[styles.rectangleView, styles.networkChildLayout]} />
          </View>
        </View>
      </View>
      <Image
        style={[styles.layer12Icon, styles.mt310]}
        resizeMode="cover"
        source={require("../assets/layer-127.png")}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  ml1: {
    marginLeft: GlobalStyles.Margin.margin_32xs,
  },
  mt_1236: {
    marginTop: -1236,
  },
  mt310: {
    marginTop: 310,
  },
  rectanglePosition: {
    bottom: 0,
    left: 0,
    top: 0,
    position: "absolute",
  },
  statusBarPosition: {
    top: "50%",
    position: "absolute",
  },
  networkPosition1: {
    width: 17,
    marginTop: -3,
    top: "50%",
    position: "absolute",
  },
  networkChildLayout: {
    width: 3,
    backgroundColor: GlobalStyles.Color.gray_1400,
    borderRadius: GlobalStyles.Border.br_7xs,
    bottom: 0,
    position: "absolute",
  },
  networkPosition: {
    left: "50%",
    width: 3,
    backgroundColor: GlobalStyles.Color.gray_1400,
    borderRadius: GlobalStyles.Border.br_7xs,
    bottom: 0,
    position: "absolute",
  },
  groupChild: {
    left: 36,
    backgroundColor: GlobalStyles.Color.gray_300,
    height: 812,
    right: 37,
    top: 0,
    position: "absolute",
  },
  hello: {
    top: 246,
    left: 161,
    fontSize: GlobalStyles.FontSize.size_12xl,
    lineHeight: 50,
    fontWeight: "700",
    fontFamily: GlobalStyles.FontFamily.typoGrotesk,
    color: GlobalStyles.Color.blue,
    textAlign: "center",
    position: "absolute",
  },
  homeIndicator: {
    marginTop: 181,
    right: 157,
    left: 157,
    borderRadius: GlobalStyles.Border.br_8xl,
    backgroundColor: GlobalStyles.Color.black,
    height: 5,
  },
  groupItem: {
    right: -300,
    bottom: -300,
    maxWidth: "100%",
    overflow: "hidden",
    height: 622,
    left: 0,
    position: "absolute",
  },
  rectangleParent: {
    left: 0,
    right: 0,
  },
  logoAnimation21Inner: {
    width: 448,
    height: 1236,
  },
  rectangle: {
    shadowColor: "rgba(0, 0, 0, 0.05)",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 6,
    elevation: 6,
    shadowOpacity: 1,
    left: 0,
    right: 0,
    backgroundColor: GlobalStyles.Color.white,
  },
  text: {
    fontSize: GlobalStyles.FontSize.size_4xl,
    letterSpacing: 0,
    lineHeight: 24,
    fontWeight: "500",
    fontFamily: GlobalStyles.FontFamily.roboto,
    color: GlobalStyles.Color.gray_1900,
    textAlign: "left",
    left: 0,
    top: 0,
    position: "absolute",
  },
  time: {
    width: 40,
    left: 0,
  },
  batteryIcon: {
    width: 22,
    height: 11,
    marginTop: -3,
    top: "50%",
    right: 0,
    position: "absolute",
  },
  wifiIcon: {
    height: 12,
    right: 37,
  },
  networkChild: {
    height: 4,
    left: 0,
  },
  networkItem: {
    marginLeft: -3.5,
    height: 6,
  },
  networkInner: {
    marginLeft: 0.5,
    height: 9,
  },
  rectangleView: {
    right: 0,
    top: 0,
  },
  network: {
    right: 68,
    height: 11,
  },
  statusBar: {
    marginTop: -15,
    right: 16,
    left: 15,
    height: 26,
  },
  statusBarBlack: {
    width: 375,
    height: 44,
  },
  layer12Icon: {
    width: 127,
    height: 135,
  },
  logoAnimation21: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    backgroundColor: GlobalStyles.Color.white,
  },
});

export default LogoAnimation21;
