import * as React from "react";
import { StyleSheet, View, Image, Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import GlobalStyles from "../GlobalStyles";

const Biometrix = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.biometrix}
      onPress={() => navigation.navigate("Biometrix1")}
    >
      <View style={styles.biometrixChild} />
      <Pressable
        style={[styles.iconFeatherArrowLeftWrapper, styles.mt2]}
        onPress={() => navigation.navigate("FaceScanComplete")}
      >
        <Image
          style={styles.iconFeatherArrowLeft}
          resizeMode="cover"
          source={require("../assets/icon-featherarrowleft.png")}
        />
      </Pressable>
      <Image
        style={[styles.biometrixItem, styles.mt_225, styles.ml119]}
        resizeMode="cover"
        source={require("../assets/group-1252.png")}
      />
      <View style={[styles.homeIndicator, styles.mt160, styles.ml121]} />
      <View style={[styles.parent, styles.mt124, styles.ml153]}>
        <Text style={[styles.text, styles.textTypo]}>%</Text>
        <View style={[styles.maskGroup290, styles.maskGroupPosition]}>
          <View style={styles.group}>
            <Text style={[styles.text1, styles.textTypo]}>1</Text>
            <Text style={[styles.text2, styles.textTypo]}>0</Text>
            <Text style={[styles.text3, styles.textTypo]}>2</Text>
            <Text style={[styles.text4, styles.textTypo]}>3</Text>
            <Text style={[styles.text5, styles.textTypo]}>4</Text>
            <Text style={[styles.text6, styles.textTypo]}>5</Text>
            <Text style={[styles.text7, styles.textTypo]}>6</Text>
            <Text style={[styles.text8, styles.textTypo]}>7</Text>
            <Text style={[styles.text9, styles.textTypo]}>8</Text>
            <Text style={[styles.text10, styles.textTypo]}>9</Text>
            <Text style={[styles.text11, styles.textTypo]}>0</Text>
            <Text style={[styles.text12, styles.textTypo]}>1</Text>
          </View>
        </View>
        <View style={[styles.maskGroup293, styles.maskGroupPosition]}>
          <View style={styles.group}>
            <Text style={[styles.text1, styles.textTypo]}>1</Text>
            <Text style={[styles.text2, styles.textTypo]}>0</Text>
            <Text style={[styles.text3, styles.textTypo]}>2</Text>
            <Text style={[styles.text4, styles.textTypo]}>3</Text>
            <Text style={[styles.text5, styles.textTypo]}>4</Text>
            <Text style={[styles.text6, styles.textTypo]}>5</Text>
            <Text style={[styles.text7, styles.textTypo]}>6</Text>
            <Text style={[styles.text8, styles.textTypo]}>7</Text>
            <Text style={[styles.text9, styles.textTypo]}>8</Text>
            <Text style={[styles.text10, styles.textTypo]}>9</Text>
            <Text style={[styles.text11, styles.textTypo]}>0</Text>
            <Text style={[styles.text12, styles.textTypo]}>1</Text>
          </View>
        </View>
        <View style={[styles.maskGroup291, styles.maskGroupPosition]}>
          <View style={styles.group}>
            <Text style={[styles.text1, styles.textTypo]}>1</Text>
            <Text style={[styles.text2, styles.textTypo]}>0</Text>
            <Text style={[styles.text3, styles.textTypo]}>2</Text>
            <Text style={[styles.text4, styles.textTypo]}>3</Text>
            <Text style={[styles.text5, styles.textTypo]}>4</Text>
            <Text style={[styles.text6, styles.textTypo]}>5</Text>
            <Text style={[styles.text7, styles.textTypo]}>6</Text>
            <Text style={[styles.text8, styles.textTypo]}>7</Text>
            <Text style={[styles.text9, styles.textTypo]}>8</Text>
            <Text style={[styles.text10, styles.textTypo]}>9</Text>
            <Text style={[styles.text11, styles.textTypo]}>0</Text>
            <Text style={[styles.text12, styles.textTypo]}>1</Text>
          </View>
        </View>
      </View>
      <Text style={[styles.hello, styles.mt10, styles.ml27]}>
        Setup Biometric Scan
      </Text>
      <Text
        style={[styles.touchTheFingerprintSensor, styles.mt16, styles.ml27]}
      >
        Touch the fingerprint sensor
      </Text>
      <Image
        style={[styles.biometrixInner, styles.mt99, styles.ml49]}
        resizeMode="cover"
        source={require("../assets/ellipse-32543.png")}
      />
      <View style={[styles.statusBarBlack, styles.mt_812]}>
        <View style={[styles.rectangle, styles.timePosition]} />
        <View style={styles.statusBar}>
          <View style={[styles.time, styles.timePosition]}>
            <Text style={styles.text37}>9:41</Text>
          </View>
          <Image
            style={[styles.batteryIcon, styles.networkPosition]}
            resizeMode="cover"
            source={require("../assets/icon-awesomebatterythreequarters.png")}
          />
          <Image
            style={styles.wifiIcon}
            resizeMode="cover"
            source={require("../assets/icon-awesomewifi.png")}
          />
          <View style={[styles.network, styles.networkPosition]}>
            <View style={[styles.networkChild, styles.networkLayout]} />
            <View style={[styles.networkItem, styles.networkLayout]} />
            <View style={[styles.networkInner, styles.networkLayout]} />
            <View style={[styles.rectangleView, styles.networkLayout]} />
          </View>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  mt2: {
    marginTop: GlobalStyles.Margin.margin_31xs,
  },
  mt_225: {
    marginTop: GlobalStyles.Margin.margin_79xs,
  },
  ml119: {
    marginLeft: GlobalStyles.Margin.margin_52xl,
  },
  mt160: {
    marginTop: GlobalStyles.Margin.margin_64xl,
  },
  ml121: {
    marginLeft: GlobalStyles.Margin.margin_54xl,
  },
  mt124: {
    marginTop: GlobalStyles.Margin.margin_56xl,
  },
  ml153: {
    marginLeft: GlobalStyles.Margin.margin_62xl,
  },
  mt10: {
    marginTop: GlobalStyles.Margin.margin_24xs,
  },
  ml27: {
    marginLeft: GlobalStyles.Margin.margin_4xs,
  },
  mt16: {
    marginTop: GlobalStyles.Margin.margin_17xs,
  },
  mt99: {
    marginTop: GlobalStyles.Margin.margin_45xl,
  },
  ml49: {
    marginLeft: GlobalStyles.Margin.margin_20xl,
  },
  mt_812: {
    marginTop: GlobalStyles.Margin.margin_90xs,
  },
  textTypo: {
    color: GlobalStyles.Color.blue,
    fontSize: GlobalStyles.FontSize.size_3xl,
    textAlign: "left",
    fontFamily: GlobalStyles.FontFamily.helvetica,
    fontWeight: "700",
    position: "absolute",
  },
  maskGroupPosition: {
    bottom: "0%",
    top: "0%",
    width: "30.36%",
    height: "100%",
    position: "absolute",
  },
  timePosition: {
    bottom: 0,
    left: 0,
    top: 0,
    position: "absolute",
  },
  networkPosition: {
    height: 11,
    marginTop: -3,
    top: "50%",
    position: "absolute",
  },
  networkLayout: {
    width: 3,
    backgroundColor: GlobalStyles.Color.gray_1400,
    borderRadius: GlobalStyles.Border.br_7xs,
    bottom: 0,
    position: "absolute",
  },
  biometrixChild: {
    height: 812,
    width: 375,
    backgroundColor: GlobalStyles.Color.gray_300,
  },
  iconFeatherArrowLeft: {
    marginLeft: -0.5,
    bottom: 4,
    height: 17,
    width: 17,
    left: "50%",
    position: "absolute",
  },
  iconFeatherArrowLeftWrapper: {
    width: 55,
    height: 45,
    backgroundColor: GlobalStyles.Color.gray_300,
  },
  biometrixItem: {
    width: 150,
    height: 172,
  },
  homeIndicator: {
    borderRadius: GlobalStyles.Border.br_8xl,
    backgroundColor: GlobalStyles.Color.black,
    width: 134,
    height: 5,
  },
  text: {
    top: "4.35%",
    left: "69.64%",
    textAlign: "left",
  },
  text1: {
    top: 25,
    left: 0,
    textAlign: "left",
  },
  text2: {
    left: 0,
    top: 0,
    textAlign: "left",
  },
  text3: {
    top: 49,
    left: 0,
    textAlign: "left",
  },
  text4: {
    top: 72,
    left: 0,
    textAlign: "left",
  },
  text5: {
    top: 96,
    left: 0,
    textAlign: "left",
  },
  text6: {
    top: 120,
    left: 0,
    textAlign: "left",
  },
  text7: {
    top: 144,
    left: 0,
    textAlign: "left",
  },
  text8: {
    top: 168,
    left: 0,
    textAlign: "left",
  },
  text9: {
    top: 192,
    left: 0,
    textAlign: "left",
  },
  text10: {
    top: 216,
    left: 0,
    textAlign: "left",
  },
  text11: {
    top: 240,
    left: 0,
    textAlign: "left",
  },
  text12: {
    top: 263,
    left: 0,
    textAlign: "left",
  },
  group: {
    left: 3,
    width: 11,
    height: 284,
    top: 0,
    position: "absolute",
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
  hello: {
    fontSize: GlobalStyles.FontSize.size_8xl,
    fontFamily: GlobalStyles.FontFamily.typoGrotesk,
    color: GlobalStyles.Color.indigo,
    textAlign: "left",
    fontWeight: "700",
  },
  touchTheFingerprintSensor: {
    fontSize: GlobalStyles.FontSize.size_base,
    color: GlobalStyles.Color.gray_800,
    textAlign: "left",
    fontFamily: GlobalStyles.FontFamily.helvetica,
  },
  biometrixInner: {
    width: 278,
    height: 278,
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
    right: 0,
    backgroundColor: GlobalStyles.Color.white,
  },
  text37: {
    fontSize: GlobalStyles.FontSize.size_4xl,
    letterSpacing: 0,
    lineHeight: 24,
    fontWeight: "500",
    fontFamily: GlobalStyles.FontFamily.roboto,
    color: GlobalStyles.Color.gray_1900,
    left: 0,
    top: 0,
    textAlign: "left",
    position: "absolute",
  },
  time: {
    width: 40,
  },
  batteryIcon: {
    width: 22,
    right: 0,
  },
  wifiIcon: {
    right: 37,
    height: 12,
    marginTop: -3,
    top: "50%",
    width: 17,
    position: "absolute",
  },
  networkChild: {
    height: 4,
    left: 0,
  },
  networkItem: {
    marginLeft: -3.5,
    height: 6,
    left: "50%",
  },
  networkInner: {
    marginLeft: 0.5,
    height: 9,
    left: "50%",
  },
  rectangleView: {
    right: 0,
    top: 0,
  },
  network: {
    right: 68,
    width: 17,
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
  biometrix: {
    flex: 1,
    width: "100%",
    backgroundColor: GlobalStyles.Color.white,
  },
});

export default Biometrix;
