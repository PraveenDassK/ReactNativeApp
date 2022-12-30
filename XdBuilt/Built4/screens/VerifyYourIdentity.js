import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import GlobalStyles from "../GlobalStyles";

const VerifyYourIdentity = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.verifyYourIdentity}>
      <View style={styles.verifyYourIdentityChild} />
      <Text style={[styles.hello, styles.mt10, styles.ml27]}>
        Verify your identity
      </Text>
      <View style={[styles.statusBarBlack, styles.mt_812]}>
        <View style={[styles.rectangle, styles.timePosition]} />
        <View style={[styles.statusBar, styles.statusBarPosition]}>
          <View style={[styles.time, styles.timePosition]}>
            <Text style={styles.text}>9:41</Text>
          </View>
          <Image
            style={[styles.batteryIcon, styles.networkPosition]}
            resizeMode="cover"
            source={require("../assets/icon-awesomebatterythreequarters.png")}
          />
          <Image
            style={[styles.wifiIcon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/icon-awesomewifi.png")}
          />
          <View
            style={[styles.network, styles.iconLayout, styles.networkPosition]}
          >
            <View style={[styles.networkChild, styles.networkLayout]} />
            <View style={[styles.networkItem, styles.networkLayout]} />
            <View style={[styles.networkInner, styles.networkLayout]} />
            <View style={[styles.rectangleView, styles.networkLayout]} />
          </View>
        </View>
      </View>
      <Pressable
        style={[styles.iconFeatherArrowLeftWrapper, styles.mt2]}
        onPress={() => navigation.navigate("SelectBank1")}
      >
        <Image
          style={[styles.iconFeatherArrowLeft, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/icon-featherarrowleft.png")}
        />
      </Pressable>
      <Text style={[styles.hello1, styles.mt14, styles.ml28, styles.helloTypo]}>
        <Text style={styles.whereYouWould}>
          Where you would like Carbonyte to send you the
        </Text>
        <Text style={styles.whereYouWould}>verification code.</Text>
      </Text>
      <Pressable
        style={[styles.component208119Parent, styles.mt58, styles.ml25]}
        onPress={() => navigation.navigate("VerifyCode")}
      >
        <View style={[styles.component208119, styles.timePosition]}>
          <View style={[styles.rectangleParent, styles.statusBarPosition]}>
            <View style={[styles.groupChild, styles.groupChildLayout]} />
            <View style={styles.maskGroup236} />
          </View>
        </View>
        <Text style={styles.hello2}>Submit</Text>
      </Pressable>
      <View style={[styles.helloParent, styles.mt58, styles.ml28]}>
        <Text style={[styles.hello3, styles.helloTypo]}>Text</Text>
        <View
          style={[
            styles.iconMaterialTextsmsWrapper,
            styles.groupChildLayout,
            styles.timePosition,
          ]}
        >
          <Image
            style={[
              styles.iconMaterialTextsms,
              styles.iconPosition,
              styles.iconPosition1,
            ]}
            resizeMode="cover"
            source={require("../assets/icon-materialtextsms.png")}
          />
        </View>
        <Image
          style={[styles.component2261, styles.iconPosition]}
          resizeMode="cover"
          source={require("../assets/component-226--1.png")}
        />
      </View>
      <View style={[styles.helloParent, styles.mt15, styles.ml28]}>
        <Text style={[styles.hello3, styles.helloTypo]}>Phone</Text>
        <View
          style={[
            styles.iconMaterialTextsmsWrapper,
            styles.groupChildLayout,
            styles.timePosition,
          ]}
        >
          <Image
            style={[styles.iconAwesomePhoneVolume, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/icon-awesomephonevolume.png")}
          />
        </View>
        <Image
          style={[styles.component2261, styles.iconPosition]}
          resizeMode="cover"
          source={require("../assets/component-226--1.png")}
        />
      </View>
      <View style={[styles.helloParent, styles.mt14, styles.ml28]}>
        <Text style={[styles.hello3, styles.helloTypo]}>Email</Text>
        <View
          style={[
            styles.iconMaterialTextsmsWrapper,
            styles.groupChildLayout,
            styles.timePosition,
          ]}
        >
          <Image
            style={[
              styles.iconMaterialEmail,
              styles.iconPosition1,
              styles.statusBarPosition,
            ]}
            resizeMode="cover"
            source={require("../assets/icon-materialemail.png")}
          />
        </View>
        <Image
          style={[styles.component2261, styles.iconPosition]}
          resizeMode="cover"
          source={require("../assets/component-226--1.png")}
        />
      </View>
      <View style={[styles.verifyYourIdentityItem, styles.mt14, styles.ml28]} />
      <View style={[styles.verifyYourIdentityItem, styles.mt15, styles.ml28]} />
      <View style={[styles.homeIndicator, styles.mt228, styles.ml121]} />
    </View>
  );
};

const styles = StyleSheet.create({
  mt10: {
    marginTop: GlobalStyles.Margin.margin_24xs,
  },
  ml27: {
    marginLeft: GlobalStyles.Margin.margin_4xs,
  },
  mt_812: {
    marginTop: GlobalStyles.Margin.margin_90xs,
  },
  mt2: {
    marginTop: GlobalStyles.Margin.margin_31xs,
  },
  mt14: {
    marginTop: GlobalStyles.Margin.margin_20xs,
  },
  ml28: {
    marginLeft: GlobalStyles.Margin.margin_3xs,
  },
  mt58: {
    marginTop: GlobalStyles.Margin.margin_26xl,
  },
  ml25: {
    marginLeft: GlobalStyles.Margin.margin_7xs,
  },
  mt15: {
    marginTop: GlobalStyles.Margin.margin_18xs,
  },
  mt228: {
    marginTop: 228,
  },
  ml121: {
    marginLeft: GlobalStyles.Margin.margin_54xl,
  },
  timePosition: {
    bottom: 0,
    left: 0,
    top: 0,
  },
  statusBarPosition: {
    top: "50%",
    position: "absolute",
  },
  networkPosition: {
    height: 11,
    marginTop: -3,
    top: "50%",
  },
  iconLayout: {
    width: 17,
    position: "absolute",
  },
  networkLayout: {
    width: 3,
    backgroundColor: GlobalStyles.Color.gray_1400,
    borderRadius: GlobalStyles.Border.br_7xs,
    bottom: 0,
    position: "absolute",
  },
  helloTypo: {
    fontSize: GlobalStyles.FontSize.size_base,
    fontFamily: GlobalStyles.FontFamily.helvetica,
  },
  groupChildLayout: {
    borderRadius: GlobalStyles.Border.br_lg,
    position: "absolute",
  },
  iconPosition: {
    height: 20,
    marginTop: -9.5,
    top: "50%",
    position: "absolute",
  },
  iconPosition1: {
    marginLeft: -9.5,
    width: 20,
    left: "50%",
  },
  verifyYourIdentityChild: {
    height: 812,
    width: 375,
    backgroundColor: GlobalStyles.Color.gray_300,
  },
  hello: {
    fontSize: GlobalStyles.FontSize.size_8xl,
    fontWeight: "700",
    fontFamily: GlobalStyles.FontFamily.typoGrotesk,
    textAlign: "left",
    color: GlobalStyles.Color.indigo,
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
    position: "absolute",
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
    position: "absolute",
    textAlign: "left",
  },
  time: {
    width: 40,
    left: 0,
    position: "absolute",
  },
  batteryIcon: {
    width: 22,
    right: 0,
    position: "absolute",
  },
  wifiIcon: {
    right: 37,
    height: 12,
    marginTop: -3,
    width: 17,
    top: "50%",
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
  iconFeatherArrowLeft: {
    marginLeft: -0.5,
    bottom: 4,
    height: 17,
    left: "50%",
  },
  iconFeatherArrowLeftWrapper: {
    width: 55,
    height: 45,
    backgroundColor: GlobalStyles.Color.gray_300,
  },
  whereYouWould: {
    margin: GlobalStyles.Margin.margin_33xs,
  },
  hello1: {
    lineHeight: 20,
    color: GlobalStyles.Color.gray_800,
    fontFamily: GlobalStyles.FontFamily.helvetica,
    textAlign: "left",
  },
  groupChild: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    backgroundColor: GlobalStyles.Color.gray_500,
    width: "100%",
  },
  maskGroup236: {
    bottom: 13,
    left: 0,
    right: 0,
    top: 0,
    position: "absolute",
  },
  rectangleParent: {
    marginTop: -30,
    height: 60,
    left: 0,
    right: 0,
  },
  component208119: {
    left: 0,
    right: 0,
    position: "absolute",
  },
  hello2: {
    top: "36.67%",
    left: "41.41%",
    fontSize: GlobalStyles.FontSize.size_lg,
    lineHeight: 17,
    textTransform: "uppercase",
    color: GlobalStyles.Color.black,
    fontFamily: GlobalStyles.FontFamily.helvetica,
    position: "absolute",
    textAlign: "left",
  },
  component208119Parent: {
    width: 326,
    height: 60,
  },
  hello3: {
    top: "34.69%",
    left: "20.32%",
    lineHeight: 14,
    textAlign: "center",
    fontFamily: GlobalStyles.FontFamily.helvetica,
    position: "absolute",
    color: GlobalStyles.Color.indigo,
  },
  iconMaterialTextsms: {
    width: 20,
  },
  iconMaterialTextsmsWrapper: {
    width: 49,
    left: 0,
    backgroundColor: GlobalStyles.Color.white,
  },
  component2261: {
    width: 20,
    right: 0,
  },
  helloParent: {
    height: 49,
    width: 315,
  },
  iconAwesomePhoneVolume: {
    marginLeft: -7.5,
    width: 15,
    left: "50%",
  },
  iconMaterialEmail: {
    marginTop: -7.5,
    height: 16,
    width: 20,
  },
  verifyYourIdentityItem: {
    borderStyle: "solid",
    borderColor: "#fff",
    borderTopWidth: 1,
    height: 2,
    width: 315,
  },
  homeIndicator: {
    borderRadius: GlobalStyles.Border.br_8xl,
    backgroundColor: GlobalStyles.Color.black,
    width: 134,
    height: 5,
  },
  verifyYourIdentity: {
    flex: 1,
    width: "100%",
    backgroundColor: GlobalStyles.Color.white,
  },
});

export default VerifyYourIdentity;
