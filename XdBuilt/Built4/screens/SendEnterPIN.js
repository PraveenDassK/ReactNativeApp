import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import GlobalStyles from "../GlobalStyles";

const SendEnterPIN = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.sendEnterPin}
      onPress={() => navigation.navigate("SentMoney")}
    >
      <View style={styles.sendEnterPinChild} />
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
      <View style={[styles.homeIndicator, styles.mt183, styles.ml1]} />
      <View style={[styles.homeIndicator, styles.mt_5, styles.ml1]} />
      <Text style={[styles.hello, styles.mt151]}>Enter PIN</Text>
      <View style={[styles.helloParent, styles.mt78]}>
        <Text style={[styles.hello1, styles.helloTypo1, styles.helloTypo2]}>
          2
        </Text>
        <Text style={[styles.hello2, styles.helloTypo1, styles.helloTypo2]}>
          5
        </Text>
        <Text style={[styles.hello3, styles.helloTypo1, styles.helloTypo2]}>
          8
        </Text>
        <Text style={[styles.hello4, styles.helloTypo1, styles.helloTypo2]}>
          0
        </Text>
        <Text style={[styles.hello5, styles.helloTypo]}>3</Text>
        <Text style={[styles.hello6, styles.helloTypo]}>6</Text>
        <Text style={[styles.hello7, styles.helloTypo]}>9</Text>
        <Text style={[styles.hello8, styles.helloTypo1]}>1</Text>
        <Text style={[styles.hello9, styles.helloTypo1]}>4</Text>
        <Text style={[styles.hello10, styles.helloTypo1]}>7</Text>
        <Image
          style={styles.iconIonicIosBackspace}
          resizeMode="cover"
          source={require("../assets/icon-ioniciosbackspace.png")}
        />
      </View>
      <View style={[styles.homeIndicator, styles.mt_5, styles.ml1]} />
      <Image
        style={[styles.sendEnterPinItem, styles.mt28, styles.ml1]}
        resizeMode="cover"
        source={require("../assets/group-30317.png")}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  mt_812: {
    marginTop: GlobalStyles.Margin.margin_90xs,
  },
  mt183: {
    marginTop: GlobalStyles.Margin.margin_70xl,
  },
  ml1: {
    marginLeft: GlobalStyles.Margin.margin_32xs,
  },
  mt_5: {
    marginTop: GlobalStyles.Margin.margin_37xs,
  },
  mt151: {
    marginTop: GlobalStyles.Margin.margin_61xl,
  },
  mt78: {
    marginTop: GlobalStyles.Margin.margin_38xl,
  },
  mt28: {
    marginTop: GlobalStyles.Margin.margin_3xs,
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
  helloTypo1: {
    textAlign: "center",
    lineHeight: 25,
    fontSize: GlobalStyles.FontSize.size_10xl,
    color: GlobalStyles.Color.indigo,
    fontFamily: GlobalStyles.FontFamily.helvetica,
    position: "absolute",
  },
  helloTypo2: {
    left: 114,
    textAlign: "center",
    lineHeight: 25,
    fontSize: GlobalStyles.FontSize.size_10xl,
  },
  helloTypo: {
    left: 228,
    textAlign: "center",
    lineHeight: 25,
    fontSize: GlobalStyles.FontSize.size_10xl,
    color: GlobalStyles.Color.indigo,
    fontFamily: GlobalStyles.FontFamily.helvetica,
    position: "absolute",
  },
  sendEnterPinChild: {
    backgroundColor: GlobalStyles.Color.gray_300,
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
  homeIndicator: {
    borderRadius: GlobalStyles.Border.br_8xl,
    backgroundColor: GlobalStyles.Color.black,
    width: 134,
    height: 5,
  },
  hello: {
    fontSize: GlobalStyles.FontSize.size_base,
    color: GlobalStyles.Color.indigo,
    fontFamily: GlobalStyles.FontFamily.helvetica,
    textAlign: "left",
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
    left: 0,
    top: 0,
  },
  hello9: {
    top: 84,
    left: 0,
  },
  hello10: {
    top: 168,
    left: 0,
  },
  iconIonicIosBackspace: {
    bottom: 9,
    width: 29,
    height: 23,
    right: 0,
    position: "absolute",
  },
  helloParent: {
    width: 251,
    height: 285,
  },
  sendEnterPinItem: {
    width: 100,
    height: 14,
  },
  sendEnterPin: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    backgroundColor: GlobalStyles.Color.white,
  },
});

export default SendEnterPIN;
