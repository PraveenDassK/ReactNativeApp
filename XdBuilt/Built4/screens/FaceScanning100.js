import * as React from "react";
import { StyleSheet, View, Image, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import GlobalStyles from "../GlobalStyles";

const FaceScanning100 = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.faceScanning100}
      onPress={() => navigation.navigate("FaceScanComplete")}
    >
      <View style={[styles.faceScanning100Child, styles.mt_10]} />
      <View style={[styles.iconFeatherArrowLeftWrapper, styles.mt_766]}>
        <Image
          style={styles.iconFeatherArrowLeft}
          resizeMode="cover"
          source={require("../assets/icon-featherarrowleft.png")}
        />
      </View>
      <Text style={[styles.pleaseTakeALookIntoTheCa, styles.mt5]}>
        Please take a look into the camera and hold still
      </Text>
      <View style={[styles.statusBarBlack, styles.mt10]}>
        <View style={[styles.rectangle, styles.timePosition]} />
        <View style={styles.statusBar}>
          <View style={[styles.time, styles.timePosition]}>
            <Text style={styles.text}>9:41</Text>
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
      <View style={[styles.homeIndicator, styles.mt17, styles.ml1]} />
      <Image
        style={[styles.maskGroup292, styles.mt14, styles.ml2]}
        resizeMode="cover"
        source={require("../assets/mask-group-292.png")}
      />
      <Image
        style={[styles.faceScanning100Item, styles.mt_451, styles.ml8]}
        resizeMode="cover"
        source={require("../assets/group-30760.png")}
      />
      <View style={[styles.parent, styles.mt162, styles.ml5]}>
        <Text style={[styles.text1, styles.textTypo, styles.textTypo1]}>%</Text>
        <View style={[styles.maskGroup290, styles.maskGroupPosition]}>
          <View style={[styles.group, styles.groupLayout]}>
            <Text style={[styles.text2, styles.textTypo, styles.textTypo1]}>
              1
            </Text>
            <Text style={[styles.text3, styles.textTypo, styles.textTypo1]}>
              0
            </Text>
            <Text style={[styles.text4, styles.textTypo, styles.textTypo1]}>
              2
            </Text>
            <Text style={[styles.text5, styles.textTypo, styles.textTypo1]}>
              3
            </Text>
            <Text style={[styles.text6, styles.textTypo, styles.textTypo1]}>
              4
            </Text>
            <Text style={[styles.text7, styles.textTypo, styles.textTypo1]}>
              5
            </Text>
            <Text style={[styles.text8, styles.textTypo, styles.textTypo1]}>
              6
            </Text>
            <Text style={[styles.text9, styles.textTypo, styles.textTypo1]}>
              7
            </Text>
            <Text style={[styles.text10, styles.textTypo, styles.textTypo1]}>
              8
            </Text>
            <Text style={[styles.text11, styles.textTypo, styles.textTypo1]}>
              9
            </Text>
            <Text style={[styles.text12, styles.textTypo, styles.textTypo1]}>
              0
            </Text>
            <Text style={[styles.text13, styles.textTypo, styles.textTypo1]}>
              1
            </Text>
          </View>
        </View>
        <View style={[styles.maskGroup293, styles.maskGroupPosition]}>
          <View style={[styles.container, styles.groupLayout]}>
            <Text style={[styles.text2, styles.textTypo, styles.textTypo1]}>
              1
            </Text>
            <Text style={[styles.text3, styles.textTypo, styles.textTypo1]}>
              0
            </Text>
            <Text style={[styles.text4, styles.textTypo, styles.textTypo1]}>
              2
            </Text>
            <Text style={[styles.text5, styles.textTypo, styles.textTypo1]}>
              3
            </Text>
            <Text style={[styles.text6, styles.textTypo, styles.textTypo1]}>
              4
            </Text>
            <Text style={[styles.text7, styles.textTypo, styles.textTypo1]}>
              5
            </Text>
            <Text style={[styles.text8, styles.textTypo, styles.textTypo1]}>
              6
            </Text>
            <Text style={[styles.text9, styles.textTypo, styles.textTypo1]}>
              7
            </Text>
            <Text style={[styles.text10, styles.textTypo, styles.textTypo1]}>
              8
            </Text>
            <Text style={[styles.text11, styles.textTypo, styles.textTypo1]}>
              9
            </Text>
            <Text style={[styles.text12, styles.textTypo, styles.textTypo1]}>
              0
            </Text>
            <Text style={[styles.text13, styles.textTypo, styles.textTypo1]}>
              1
            </Text>
          </View>
        </View>
        <View style={[styles.maskGroup291, styles.maskGroupPosition]}>
          <View style={[styles.group, styles.groupLayout]}>
            <Text style={[styles.text2, styles.textTypo, styles.textTypo1]}>
              1
            </Text>
            <Text style={[styles.text3, styles.textTypo, styles.textTypo1]}>
              0
            </Text>
            <Text style={[styles.text4, styles.textTypo, styles.textTypo1]}>
              2
            </Text>
            <Text style={[styles.text5, styles.textTypo, styles.textTypo1]}>
              3
            </Text>
            <Text style={[styles.text6, styles.textTypo, styles.textTypo1]}>
              4
            </Text>
            <Text style={[styles.text7, styles.textTypo, styles.textTypo1]}>
              5
            </Text>
            <Text style={[styles.text8, styles.textTypo, styles.textTypo1]}>
              6
            </Text>
            <Text style={[styles.text9, styles.textTypo, styles.textTypo1]}>
              7
            </Text>
            <Text style={[styles.text10, styles.textTypo, styles.textTypo1]}>
              8
            </Text>
            <Text style={[styles.text11, styles.textTypo, styles.textTypo1]}>
              9
            </Text>
            <Text style={[styles.text12, styles.textTypo, styles.textTypo1]}>
              0
            </Text>
            <Text style={[styles.text13, styles.textTypo, styles.textTypo1]}>
              1
            </Text>
          </View>
        </View>
      </View>
      <Text style={[styles.hello, styles.mt10, styles.mr1, styles.textTypo]}>
        Scanning your face
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  mt_10: {
    marginTop: GlobalStyles.Margin.margin_38xs,
  },
  mt_766: {
    marginTop: GlobalStyles.Margin.margin_86xs,
  },
  mt5: {
    marginTop: GlobalStyles.Margin.margin_28xs,
  },
  mt10: {
    marginTop: GlobalStyles.Margin.margin_24xs,
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
  mr1: {
    marginRight: GlobalStyles.Margin.margin_32xs,
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
  textTypo: {
    color: GlobalStyles.Color.white,
    fontWeight: "700",
    textAlign: "left",
  },
  textTypo1: {
    fontSize: GlobalStyles.FontSize.size_3xl,
    fontWeight: "700",
    fontFamily: GlobalStyles.FontFamily.helvetica,
    position: "absolute",
  },
  maskGroupPosition: {
    bottom: "0%",
    top: "0%",
    width: "30.36%",
    height: "100%",
    position: "absolute",
  },
  groupLayout: {
    height: 284,
    width: 11,
    left: 3,
    position: "absolute",
  },
  faceScanning100Child: {
    height: 768,
    width: 375,
    backgroundColor: GlobalStyles.Color.black,
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
    alignSelf: "flex-start",
    backgroundColor: GlobalStyles.Color.black,
  },
  pleaseTakeALookIntoTheCa: {
    fontSize: GlobalStyles.FontSize.size_base,
    color: GlobalStyles.Color.gray_800,
    textAlign: "left",
    fontFamily: GlobalStyles.FontFamily.helvetica,
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
    position: "absolute",
  },
  time: {
    width: 40,
    left: 0,
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
  faceScanning100Item: {
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
    top: -240,
  },
  maskGroup290: {
    right: "48.21%",
    left: "21.43%",
  },
  container: {
    top: -25,
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
  },
  faceScanning100: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    backgroundColor: GlobalStyles.Color.white,
  },
});

export default FaceScanning100;
