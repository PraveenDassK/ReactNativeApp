import * as React from "react";
import { StyleSheet, View, Text, Pressable, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import GlobalStyles from "../GlobalStyles";

const BusinessAddress2 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.businessAddress2}>
      <View style={[styles.businessAddress2Child, styles.ml_1]} />
      <Text
        style={[
          styles.postcode,
          styles.mt37,
          styles.ml25,
          styles.hello1Color,
          styles.postcodeTypo,
        ]}
      >
        Postcode
      </Text>
      <Pressable
        style={[styles.mt22, styles.ml25]}
        onPress={() => navigation.navigate("PersonalAddress")}
      >
        <Text style={[styles.dontKnowPostcode1, styles.postcodeTypo]}>
          Don't know postcode?
        </Text>
      </Pressable>
      <View
        style={[
          styles.helloWrapper,
          styles.mt9,
          styles.ml25,
          styles.helloWrapperLayout,
        ]}
      >
        <Text style={[styles.hello, styles.helloTypo]}>
          Enter your postcode
        </Text>
      </View>
      <View style={[styles.helloParent, styles.mt10, styles.ml27]}>
        <Text style={[styles.hello1, styles.hello1Color]}>Your Address</Text>
        <Text style={[styles.hello2, styles.helloTypo]}>
          <Text style={styles.byLawWe}>
            By law we need your home address to open your
          </Text>
          <Text style={styles.byLawWe}>account</Text>
        </Text>
      </View>
      <View style={[styles.statusBarBlack, styles.mt_812]}>
        <View style={[styles.rectangle, styles.timePosition]} />
        <View style={[styles.statusBar, styles.statusBarPosition]}>
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
      <Pressable
        style={[
          styles.component208151Parent,
          styles.mt35,
          styles.ml25,
          styles.helloWrapperLayout,
        ]}
        onPress={() => navigation.navigate("BusinessChooseAddress")}
      >
        <View style={[styles.component208151, styles.timePosition]}>
          <View style={[styles.rectangleParent, styles.statusBarPosition]}>
            <View style={[styles.groupChild, styles.iconLayout]} />
            <View style={styles.maskGroup236} />
          </View>
        </View>
        <Text style={styles.hello3}>Search Address</Text>
      </Pressable>
      <View style={[styles.homeIndicator, styles.mt358, styles.ml121]} />
      <Pressable
        style={[styles.wrapper, styles.mt2]}
        onPress={() => navigation.navigate("ProofVerified")}
      >
        <Image
          style={styles.iconLayout}
          resizeMode="cover"
          source={require("../assets/group-31042.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  ml_1: {
    marginLeft: GlobalStyles.Margin.margin_34xs,
  },
  mt37: {
    marginTop: GlobalStyles.Margin.margin_7xl,
  },
  ml25: {
    marginLeft: GlobalStyles.Margin.margin_7xs,
  },
  mt22: {
    marginTop: GlobalStyles.Margin.margin_10xs,
  },
  mt9: {
    marginTop: GlobalStyles.Margin.margin_25xs,
  },
  mt10: {
    marginTop: GlobalStyles.Margin.margin_24xs,
  },
  ml27: {
    marginLeft: GlobalStyles.Margin.margin_4xs,
  },
  mt_812: {
    marginTop: GlobalStyles.Margin.margin_90xs,
  },
  mt35: {
    marginTop: GlobalStyles.Margin.margin_5xl,
  },
  mt358: {
    marginTop: 358,
  },
  ml121: {
    marginLeft: GlobalStyles.Margin.margin_54xl,
  },
  mt2: {
    marginTop: GlobalStyles.Margin.margin_31xs,
  },
  hello1Color: {
    color: GlobalStyles.Color.indigo,
    textAlign: "left",
  },
  postcodeTypo: {
    fontSize: GlobalStyles.FontSize.size_base,
    fontFamily: GlobalStyles.FontFamily.helvetica,
  },
  helloWrapperLayout: {
    width: 326,
    height: 60,
  },
  helloTypo: {
    color: GlobalStyles.Color.gray_800,
    top: "50%",
    position: "absolute",
    textAlign: "left",
    fontFamily: GlobalStyles.FontFamily.helvetica,
    fontSize: GlobalStyles.FontSize.size_base,
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
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  businessAddress2Child: {
    backgroundColor: GlobalStyles.Color.gray_300,
    height: 812,
    width: 375,
  },
  postcode: {
    textAlign: "left",
    fontFamily: GlobalStyles.FontFamily.helvetica,
  },
  dontKnowPostcode1: {
    color: GlobalStyles.Color.blue,
    textAlign: "left",
    fontFamily: GlobalStyles.FontFamily.helvetica,
  },
  hello: {
    marginTop: -8,
    left: 14,
  },
  helloWrapper: {
    borderStyle: "solid",
    borderColor: "#e8e8e8",
    borderWidth: 1,
    height: 60,
    borderRadius: GlobalStyles.Border.br_lg,
    backgroundColor: GlobalStyles.Color.white,
  },
  hello1: {
    fontSize: GlobalStyles.FontSize.size_8xl,
    lineHeight: 30,
    fontWeight: "700",
    fontFamily: GlobalStyles.FontFamily.typoGrotesk,
    left: 0,
    top: 0,
    position: "absolute",
    textAlign: "left",
  },
  byLawWe: {
    margin: GlobalStyles.Margin.margin_33xs,
  },
  hello2: {
    marginTop: 6.74,
    left: 1,
    lineHeight: 20,
  },
  helloParent: {
    width: 305,
    height: 85,
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
  },
  batteryIcon: {
    width: 22,
    height: 11,
    marginTop: -3,
    right: 0,
    top: "50%",
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
  },
  statusBarBlack: {
    height: 44,
    width: 375,
  },
  groupChild: {
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    backgroundColor: GlobalStyles.Color.gray_500,
    position: "absolute",
    borderRadius: GlobalStyles.Border.br_lg,
  },
  maskGroup236: {
    bottom: 13,
    right: 0,
    left: 0,
    top: 0,
    position: "absolute",
  },
  rectangleParent: {
    marginTop: -30,
    right: 0,
    left: 0,
    height: 60,
  },
  component208151: {
    right: 0,
  },
  hello3: {
    top: "36.67%",
    left: "28.83%",
    fontSize: GlobalStyles.FontSize.size_lg,
    lineHeight: 17,
    textTransform: "uppercase",
    color: GlobalStyles.Color.black,
    position: "absolute",
    textAlign: "left",
    fontFamily: GlobalStyles.FontFamily.helvetica,
  },
  component208151Parent: {
    height: 60,
  },
  homeIndicator: {
    borderRadius: GlobalStyles.Border.br_8xl,
    backgroundColor: GlobalStyles.Color.black,
    width: 134,
    height: 5,
  },
  wrapper: {
    width: 55,
    height: 45,
  },
  businessAddress2: {
    flex: 1,
    width: "100%",
    backgroundColor: GlobalStyles.Color.white,
  },
});

export default BusinessAddress2;
