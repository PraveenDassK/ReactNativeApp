import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import GlobalStyles from "../GlobalStyles";

const FaceScanning0 = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.faceScanning0}
      onPress={() => navigation.navigate("FaceScanning100")}
    >
      <View style={[styles.faceScanning0Child, styles.mt_5]} />
      <Text style={[styles.hello, styles.mt_711, styles.mr1]}>
        Scanning your face
      </Text>
      <Text style={[styles.pleaseTakeALookIntoTheCa, styles.mt5]}>
        Please take a look into the camera and hold still
      </Text>
      <View style={[styles.statusBarBlack, styles.mt5]}>
        <View style={[styles.rectangle, styles.timePosition]} />
        <View style={styles.statusBar}>
          <View style={[styles.time, styles.timePosition]}>
            <Text style={[styles.text, styles.textPosition]}>9:41</Text>
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
      <View style={[styles.homeIndicator, styles.mt17, styles.ml1]} />
      <Image
        style={[styles.maskGroup292, styles.mt14, styles.ml2]}
        resizeMode="cover"
        source={require("../assets/mask-group-292.png")}
      />
      <Image
        style={[styles.faceScanning0Item, styles.mt_451, styles.ml8]}
        resizeMode="cover"
        source={require("../assets/group-30760.png")}
      />
      <View style={[styles.parent, styles.mt162, styles.ml5]}>
        <Text style={[styles.text1, styles.textTypo]}>%</Text>
        <View style={[styles.maskGroup290, styles.maskGroupPosition]}>
          <View style={[styles.group, styles.textPosition]}>
            <Text style={[styles.text2, styles.textTypo]}>1</Text>
            <Text style={[styles.text3, styles.textTypo]}>0</Text>
            <Text style={[styles.text4, styles.textTypo]}>2</Text>
            <Text style={[styles.text5, styles.textTypo]}>3</Text>
            <Text style={[styles.text6, styles.textTypo]}>4</Text>
            <Text style={[styles.text7, styles.textTypo]}>5</Text>
            <Text style={[styles.text8, styles.textTypo]}>6</Text>
            <Text style={[styles.text9, styles.textTypo]}>7</Text>
            <Text style={[styles.text10, styles.textTypo]}>8</Text>
            <Text style={[styles.text11, styles.textTypo]}>9</Text>
            <Text style={[styles.text12, styles.textTypo]}>0</Text>
            <Text style={[styles.text13, styles.textTypo]}>1</Text>
          </View>
        </View>
        <View style={[styles.maskGroup293, styles.maskGroupPosition]}>
          <View style={[styles.group, styles.textPosition]}>
            <Text style={[styles.text2, styles.textTypo]}>1</Text>
            <Text style={[styles.text3, styles.textTypo]}>0</Text>
            <Text style={[styles.text4, styles.textTypo]}>2</Text>
            <Text style={[styles.text5, styles.textTypo]}>3</Text>
            <Text style={[styles.text6, styles.textTypo]}>4</Text>
            <Text style={[styles.text7, styles.textTypo]}>5</Text>
            <Text style={[styles.text8, styles.textTypo]}>6</Text>
            <Text style={[styles.text9, styles.textTypo]}>7</Text>
            <Text style={[styles.text10, styles.textTypo]}>8</Text>
            <Text style={[styles.text11, styles.textTypo]}>9</Text>
            <Text style={[styles.text12, styles.textTypo]}>0</Text>
            <Text style={[styles.text13, styles.textTypo]}>1</Text>
          </View>
        </View>
        <View style={[styles.maskGroup291, styles.maskGroupPosition]}>
          <View style={[styles.group, styles.textPosition]}>
            <Text style={[styles.text2, styles.textTypo]}>1</Text>
            <Text style={[styles.text3, styles.textTypo]}>0</Text>
            <Text style={[styles.text4, styles.textTypo]}>2</Text>
            <Text style={[styles.text5, styles.textTypo]}>3</Text>
            <Text style={[styles.text6, styles.textTypo]}>4</Text>
            <Text style={[styles.text7, styles.textTypo]}>5</Text>
            <Text style={[styles.text8, styles.textTypo]}>6</Text>
            <Text style={[styles.text9, styles.textTypo]}>7</Text>
            <Text style={[styles.text10, styles.textTypo]}>8</Text>
            <Text style={[styles.text11, styles.textTypo]}>9</Text>
            <Text style={[styles.text12, styles.textTypo]}>0</Text>
            <Text style={[styles.text13, styles.textTypo]}>1</Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  mt_5: {
    marginTop: GlobalStyles.Margin.margin_37xs,
  },
  mt_711: {
    marginTop: -711,
  },
  mr1: {
    marginRight: GlobalStyles.Margin.margin_32xs,
  },
  mt5: {
    marginTop: GlobalStyles.Margin.margin_28xs,
  },
  mt17: {
    marginTop: GlobalStyles.Margin.margin_16xs,
  },
  ml1: {
    marginLeft: GlobalStyles.Margin.margin_32xs,
  },
  mt14: {
    marginTop: GlobalStyles.Margin.margin_20xs,
  },
  ml2: {
    marginLeft: GlobalStyles.Margin.margin_31xs,
  },
  mt_451: {
    marginTop: GlobalStyles.Margin.margin_82xs,
  },
  ml8: {
    marginLeft: GlobalStyles.Margin.margin_26xs,
  },
  mt162: {
    marginTop: GlobalStyles.Margin.margin_66xl,
  },
  ml5: {
    marginLeft: GlobalStyles.Margin.margin_28xs,
  },
  timePosition: {
    bottom: 0,
    left: 0,
    top: 0,
    position: "absolute",
  },
  textPosition: {
    position: "absolute",
    top: 0,
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
  textTypo: {
    fontSize: GlobalStyles.FontSize.size_3xl,
    position: "absolute",
    fontFamily: GlobalStyles.FontFamily.helvetica,
    textAlign: "left",
    color: GlobalStyles.Color.white,
    fontWeight: "700",
  },
  maskGroupPosition: {
    bottom: "0%",
    top: "0%",
    width: "30.36%",
    height: "100%",
    position: "absolute",
  },
  faceScanning0Child: {
    backgroundColor: GlobalStyles.Color.black,
    height: 768,
    width: 375,
  },
  hello: {
    fontSize: GlobalStyles.FontSize.size_8xl,
    fontFamily: GlobalStyles.FontFamily.typoGrotesk,
    textAlign: "left",
    color: GlobalStyles.Color.white,
    fontWeight: "700",
  },
  pleaseTakeALookIntoTheCa: {
    fontSize: GlobalStyles.FontSize.size_base,
    color: GlobalStyles.Color.gray_800,
    fontFamily: GlobalStyles.FontFamily.helvetica,
    textAlign: "left",
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
    left: 0,
    top: 0,
    textAlign: "left",
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
    backgroundColor: GlobalStyles.Color.gray_800,
    width: 134,
    height: 5,
  },
  maskGroup292: {
    width: 323,
    height: 570,
  },
  faceScanning0Item: {
    width: 307,
    height: 307,
  },
  text1: {
    top: "4.35%",
    left: "69.64%",
  },
  text2: {
    top: 25,
    left: 0,
  },
  text3: {
    left: 0,
    top: 0,
  },
  text4: {
    top: 49,
    left: 0,
  },
  text5: {
    top: 72,
    left: 0,
  },
  text6: {
    top: 96,
    left: 0,
  },
  text7: {
    top: 120,
    left: 0,
  },
  text8: {
    top: 144,
    left: 0,
  },
  text9: {
    top: 168,
    left: 0,
  },
  text10: {
    top: 192,
    left: 0,
  },
  text11: {
    top: 216,
    left: 0,
  },
  text12: {
    top: 240,
    left: 0,
  },
  text13: {
    top: 263,
    left: 0,
  },
  group: {
    left: 3,
    width: 11,
    height: 284,
    top: 0,
  },
  maskGroup290: {
    right: "48.21%",
    left: "21.43%",
  },
  maskGroup293: {
    right: "69.64%",
    left: "0%",
  },
  maskGroup291: {
    right: "26.79%",
    left: "42.86%",
  },
  parent: {
    width: 56,
    height: 23,
  },
  faceScanning0: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    backgroundColor: GlobalStyles.Color.white,
  },
});

export default FaceScanning0;
