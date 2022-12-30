import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import GlobalStyles from "../GlobalStyles";

const LogoAnimation31 = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.logoAnimation31}
      onPress={() => navigation.navigate("PushNotification")}
    >
      <View style={styles.logoAnimation31Inner}>
        <View style={[styles.groupChild, styles.timePosition]} />
      </View>
      <View style={[styles.statusBarBlack, styles.mt_812]}>
        <View style={[styles.rectangle, styles.timePosition]} />
        <View style={styles.statusBar}>
          <View style={[styles.time, styles.timePosition]}>
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
        style={[styles.layer12Icon, styles.mt59, styles.ml1]}
        resizeMode="cover"
        source={require("../assets/layer-126.png")}
      />
      <View style={[styles.homeIndicator, styles.mt196, styles.ml1]} />
      <Text style={[styles.hello, styles.mt48, styles.ml15, styles.helloTypo]}>
        Your account has beencreated successfully
      </Text>
      <Text
        style={[styles.hello1, styles.mt202, styles.ml15, styles.helloTypo]}
      >
        Whoop!
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  mt_812: {
    marginTop: GlobalStyles.Margin.margin_90xs,
  },
  mt59: {
    marginTop: GlobalStyles.Margin.margin_27xl,
  },
  ml1: {
    marginLeft: GlobalStyles.Margin.margin_32xs,
  },
  mt196: {
    marginTop: 196,
  },
  mt48: {
    marginTop: GlobalStyles.Margin.margin_19xl,
  },
  ml15: {
    marginLeft: GlobalStyles.Margin.margin_18xs,
  },
  mt202: {
    marginTop: GlobalStyles.Margin.margin_74xl,
  },
  timePosition: {
    bottom: 0,
    left: 0,
    top: 0,
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
  helloTypo: {
    textAlign: "center",
    fontFamily: GlobalStyles.FontFamily.typoGrotesk,
    fontWeight: "700",
  },
  groupChild: {
    backgroundColor: GlobalStyles.Color.gray_300,
    left: 0,
    right: 0,
  },
  logoAnimation31Inner: {
    height: 812,
    width: 375,
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
    right: 37,
    height: 12,
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
    top: "50%",
    position: "absolute",
  },
  statusBarBlack: {
    height: 44,
    width: 375,
  },
  layer12Icon: {
    width: 128,
    height: 136,
  },
  homeIndicator: {
    borderRadius: GlobalStyles.Border.br_8xl,
    backgroundColor: GlobalStyles.Color.black,
    width: 134,
    height: 5,
  },
  hello: {
    fontSize: GlobalStyles.FontSize.size_8xl,
    lineHeight: 30,
    color: GlobalStyles.Color.indigo,
  },
  hello1: {
    fontSize: GlobalStyles.FontSize.size_12xl,
    lineHeight: 50,
    color: GlobalStyles.Color.blue,
  },
  logoAnimation31: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    backgroundColor: GlobalStyles.Color.white,
  },
});

export default LogoAnimation31;
