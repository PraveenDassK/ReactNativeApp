import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import GlobalStyles from "../GlobalStyles";

const CarbonCart1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.carbonCart1}>
      <View style={[styles.carbonCart1Child, styles.mt_20]} />
      <View
        style={[
          styles.carbonCart1Item,
          styles.mt23,
          styles.ml1,
          styles.rectangleShadowBox,
        ]}
      />
      <Text style={[styles.hello, styles.mt11, styles.mr133]}>
        Order Summary
      </Text>
      <View style={[styles.statusBarBlack, styles.mt11]}>
        <View
          style={[
            styles.rectangle,
            styles.timePosition,
            styles.rectangleShadowBox,
          ]}
        />
        <View style={[styles.statusBar, styles.statusBarPosition]}>
          <View style={[styles.time, styles.timePosition]}>
            <Text style={styles.text}>9:41</Text>
          </View>
          <Image
            style={[styles.batteryIcon, styles.networkPosition1]}
            resizeMode="cover"
            source={require("../assets/icon-awesomebatterythreequarters.png")}
          />
          <Image
            style={styles.wifiIcon}
            resizeMode="cover"
            source={require("../assets/icon-awesomewifi.png")}
          />
          <View style={[styles.network, styles.networkPosition1]}>
            <View style={[styles.networkChild, styles.networkLayout]} />
            <View
              style={[
                styles.networkItem,
                styles.networkPosition,
                styles.networkLayout,
              ]}
            />
            <View
              style={[
                styles.networkInner,
                styles.networkPosition,
                styles.networkLayout,
              ]}
            />
            <View
              style={[
                styles.rectangleView,
                styles.networkLayout,
                styles.maskGroup236Position,
              ]}
            />
          </View>
        </View>
      </View>
      <Text
        style={[
          styles.helloTypo1,
          styles.mt20,
          styles.mr176,
          styles.helloTypo2,
        ]}
      >
        <Text style={styles.agroforestry}>Agroforestry -</Text>
        <Text style={styles.agroforestry}>Tree Planting</Text>
        <Text style={styles.agroforestry}>Initiative</Text>
      </Text>
      <Text
        style={[
          styles.hello2,
          styles.mt_227,
          styles.mr214,
          styles.helloTypo1,
          styles.helloTypo2,
        ]}
      >
        Project
      </Text>
      <Text style={[styles.helloTypo2, styles.mt52, styles.mr186]}>
        <Text style={styles.agroforestry}>Woodland</Text>
        <Text style={styles.agroforestry}>Restoration,</Text>
        <Text style={styles.agroforestry}>Devon</Text>
      </Text>
      <Text
        style={[
          styles.hello2,
          styles.mt12,
          styles.mr229,
          styles.helloTypo1,
          styles.helloTypo2,
        ]}
      >
        Total
      </Text>
      <Text style={[styles.helloTypo2, styles.mt_50, styles.ml58]}>1</Text>
      <Text
        style={[
          styles.hello2,
          styles.mt_16,
          styles.ml59,
          styles.helloTypo1,
          styles.helloTypo2,
        ]}
      >
        Unit
      </Text>
      <Text style={[styles.helloTypo2, styles.mt_50, styles.ml58]}>1</Text>
      <Text
        style={[
          styles.hello2,
          styles.mt_16,
          styles.ml58,
          styles.helloTypo1,
          styles.helloTypo2,
        ]}
      >
        2
      </Text>
      <Text style={[styles.helloTypo, styles.mt_16, styles.ml242]}>£1.45</Text>
      <Text
        style={[styles.hello10, styles.mt_16, styles.ml243, styles.helloTypo]}
      >
        Price
      </Text>
      <Text style={[styles.helloTypo, styles.mt_16, styles.ml261]}>£6</Text>
      <Text
        style={[styles.hello10, styles.mt_16, styles.ml242, styles.helloTypo]}
      >
        £7.45
      </Text>
      <View style={[styles.carbonCart1Inner, styles.mt41]} />
      <View style={[styles.carbonCart1Inner, styles.mt13]} />
      <View style={[styles.component208161Parent, styles.mt66, styles.ml1]}>
        <View style={[styles.component208161, styles.timePosition]}>
          <View style={[styles.rectangleParent, styles.statusBarPosition]}>
            <View style={styles.groupChild} />
            <View style={[styles.maskGroup236, styles.maskGroup236Position]} />
          </View>
        </View>
        <Text style={[styles.hello13, styles.helloTypo1]}>
          Proceed to payment
        </Text>
      </View>
      <View style={[styles.homeIndicator, styles.mt289, styles.ml1]} />
      <Pressable
        style={[styles.iconFeatherArrowLeftWrapper, styles.mt_766]}
        onPress={() => navigation.navigate("Carbon2")}
      >
        <Image
          style={[styles.iconFeatherArrowLeft, styles.networkPosition]}
          resizeMode="cover"
          source={require("../assets/icon-featherarrowleft.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  mt_20: {
    marginTop: -20,
  },
  mt23: {
    marginTop: GlobalStyles.Margin.margin_9xs,
  },
  ml1: {
    marginLeft: GlobalStyles.Margin.margin_32xs,
  },
  mt11: {
    marginTop: GlobalStyles.Margin.margin_23xs,
  },
  mr133: {
    marginRight: 133,
  },
  mt20: {
    marginTop: GlobalStyles.Margin.margin_12xs,
  },
  mr176: {
    marginRight: 176,
  },
  mt_227: {
    marginTop: -227,
  },
  mr214: {
    marginRight: 214,
  },
  mt52: {
    marginTop: GlobalStyles.Margin.margin_21xl,
  },
  mr186: {
    marginRight: 186,
  },
  mt12: {
    marginTop: GlobalStyles.Margin.margin_22xs,
  },
  mr229: {
    marginRight: 229,
  },
  mt_50: {
    marginTop: GlobalStyles.Margin.margin_62xs,
  },
  ml58: {
    marginLeft: GlobalStyles.Margin.margin_26xl,
  },
  mt_16: {
    marginTop: GlobalStyles.Margin.margin_43xs,
  },
  ml59: {
    marginLeft: GlobalStyles.Margin.margin_27xl,
  },
  ml242: {
    marginLeft: GlobalStyles.Margin.margin_82xl,
  },
  ml243: {
    marginLeft: GlobalStyles.Margin.margin_83xl,
  },
  ml261: {
    marginLeft: 261,
  },
  mt41: {
    marginTop: GlobalStyles.Margin.margin_12xl,
  },
  mt13: {
    marginTop: GlobalStyles.Margin.margin_21xs,
  },
  mt66: {
    marginTop: GlobalStyles.Margin.margin_30xl,
  },
  mt289: {
    marginTop: 289,
  },
  mt_766: {
    marginTop: GlobalStyles.Margin.margin_86xs,
  },
  rectangleShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    backgroundColor: GlobalStyles.Color.white,
  },
  timePosition: {
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
  },
  networkPosition: {
    left: "50%",
    position: "absolute",
  },
  maskGroup236Position: {
    top: 0,
    right: 0,
    position: "absolute",
  },
  helloTypo2: {
    fontSize: GlobalStyles.FontSize.size_base,
    fontFamily: GlobalStyles.FontFamily.helvetica,
    lineHeight: 17,
    color: GlobalStyles.Color.indigo,
  },
  helloTypo1: {
    fontFamily: GlobalStyles.FontFamily.helvetica,
    lineHeight: 17,
    textAlign: "left",
  },
  helloTypo: {
    textAlign: "right",
    fontFamily: GlobalStyles.FontFamily.helvetica,
    lineHeight: 17,
    fontSize: GlobalStyles.FontSize.size_base,
    color: GlobalStyles.Color.indigo,
  },
  carbonCart1Child: {
    height: 777,
    width: 375,
    backgroundColor: GlobalStyles.Color.gray_300,
  },
  carbonCart1Item: {
    borderRadius: GlobalStyles.Border.br_6xl,
    shadowColor: "rgba(1, 1, 253, 0.1)",
    shadowRadius: 20,
    elevation: 20,
    width: 320,
    height: 248,
  },
  hello: {
    fontSize: GlobalStyles.FontSize.size_7xl,
    lineHeight: 30,
    fontFamily: GlobalStyles.FontFamily.typoGrotesk,
    textAlign: "center",
    color: GlobalStyles.Color.indigo,
    fontWeight: "700",
  },
  rectangle: {
    shadowColor: "rgba(0, 0, 0, 0.05)",
    shadowRadius: 6,
    elevation: 6,
    left: 0,
    right: 0,
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
    right: 0,
  },
  wifiIcon: {
    right: 37,
    height: 12,
    width: 17,
    marginTop: -3,
    top: "50%",
    position: "absolute",
  },
  networkChild: {
    height: 4,
    left: 0,
    position: "absolute",
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
  },
  statusBarBlack: {
    height: 44,
    width: 375,
  },
  agroforestry: {
    margin: GlobalStyles.Margin.margin_33xs,
  },
  hello2: {
    fontWeight: "700",
  },
  hello10: {
    fontWeight: "700",
  },
  carbonCart1Inner: {
    borderStyle: "solid",
    borderColor: "#f6f5f8",
    borderTopWidth: 1,
    width: 321,
    height: 2,
  },
  groupChild: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: GlobalStyles.Border.br_lg,
    backgroundColor: GlobalStyles.Color.gray_500,
    position: "absolute",
    width: "100%",
  },
  maskGroup236: {
    bottom: 13,
    left: 0,
    right: 0,
  },
  rectangleParent: {
    marginTop: -30,
    height: 60,
    left: 0,
    right: 0,
  },
  component208161: {
    left: 0,
    right: 0,
  },
  hello13: {
    top: "35%",
    left: "23.62%",
    fontSize: GlobalStyles.FontSize.size_lg,
    textTransform: "uppercase",
    color: GlobalStyles.Color.black,
    position: "absolute",
  },
  component208161Parent: {
    width: 326,
    height: 60,
  },
  homeIndicator: {
    borderRadius: GlobalStyles.Border.br_8xl,
    backgroundColor: GlobalStyles.Color.black,
    width: 134,
    height: 5,
  },
  iconFeatherArrowLeft: {
    marginLeft: -0.5,
    bottom: 4,
    height: 17,
    width: 17,
  },
  iconFeatherArrowLeftWrapper: {
    width: 55,
    height: 45,
    alignSelf: "flex-start",
    backgroundColor: GlobalStyles.Color.gray_300,
  },
  carbonCart1: {
    flex: 1,
    alignItems: "center",
    width: "100%",
    backgroundColor: GlobalStyles.Color.white,
  },
});

export default CarbonCart1;
