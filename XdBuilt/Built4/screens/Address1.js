import * as React from "react";
import { StyleSheet, View, Image, Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import GlobalStyles from "../GlobalStyles";

const Address1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.address1}>
      <View style={styles.address1Child} />
      <Pressable
        style={[styles.iconFeatherArrowLeftWrapper, styles.mt2]}
        onPress={() => navigation.navigate("CountryOfResidence")}
      >
        <Image
          style={styles.iconFeatherArrowLeft}
          resizeMode="cover"
          source={require("../assets/icon-featherarrowleft.png")}
        />
      </Pressable>
      <Text style={[styles.hello, styles.mt10, styles.ml27]}>
        Business Address
      </Text>
      <Text
        style={[
          styles.byLawWeNeedYourHomeAddre,
          styles.mt16,
          styles.ml27,
          styles.hello1Typo,
        ]}
      >
        <Text style={styles.byLawWe}>
          By law we need your home address to open your
        </Text>
        <Text style={styles.byLawWe}>account</Text>
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
      <View style={[styles.towncityWrapper, styles.mt23, styles.ml25]}>
        <Text style={[styles.towncity, styles.hello1Typo]}>Town/City</Text>
      </View>
      <View style={[styles.towncityWrapper, styles.mt23, styles.ml25]}>
        <Text style={[styles.towncity, styles.hello1Typo]}>Postcode</Text>
      </View>
      <View style={[styles.homeIndicator, styles.mt36, styles.ml121]} />
      <Pressable
        style={[styles.component208142Parent, styles.mt75, styles.ml25]}
        onPress={() => navigation.navigate("BusinessType")}
      >
        <View style={[styles.component208142, styles.timePosition]}>
          <View style={[styles.rectangleParent, styles.statusBarPosition]}>
            <View style={styles.groupChild} />
            <View style={styles.maskGroup236} />
          </View>
        </View>
        <Text style={[styles.hello1, styles.hello1Typo]}>Continue</Text>
      </Pressable>
      <View style={[styles.towncityWrapper, styles.mt31, styles.ml25]}>
        <Text style={[styles.towncity, styles.hello1Typo]}>Address Line 1</Text>
      </View>
      <View style={[styles.towncityWrapper, styles.mt23, styles.ml25]}>
        <Text style={[styles.towncity, styles.hello1Typo]}>Address Line 2</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mt2: {
    marginTop: GlobalStyles.Margin.margin_31xs,
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
  mt_812: {
    marginTop: GlobalStyles.Margin.margin_90xs,
  },
  mt23: {
    marginTop: GlobalStyles.Margin.margin_9xs,
  },
  ml25: {
    marginLeft: GlobalStyles.Margin.margin_7xs,
  },
  mt36: {
    marginTop: GlobalStyles.Margin.margin_6xl,
  },
  ml121: {
    marginLeft: GlobalStyles.Margin.margin_54xl,
  },
  mt75: {
    marginTop: GlobalStyles.Margin.margin_36xl,
  },
  mt31: {
    marginTop: GlobalStyles.Margin.margin_md,
  },
  hello1Typo: {
    fontFamily: GlobalStyles.FontFamily.helvetica,
    textAlign: "left",
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
  address1Child: {
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
  hello: {
    fontSize: GlobalStyles.FontSize.size_8xl,
    fontWeight: "700",
    fontFamily: GlobalStyles.FontFamily.typoGrotesk,
    textAlign: "left",
    color: GlobalStyles.Color.indigo,
  },
  byLawWe: {
    margin: GlobalStyles.Margin.margin_33xs,
  },
  byLawWeNeedYourHomeAddre: {
    fontSize: GlobalStyles.FontSize.size_base,
    color: GlobalStyles.Color.gray_800,
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
  },
  statusBarBlack: {
    height: 44,
    width: 375,
  },
  towncity: {
    fontSize: GlobalStyles.FontSize.size_xl,
    left: 0,
    top: 0,
    color: GlobalStyles.Color.indigo,
    position: "absolute",
  },
  towncityWrapper: {
    borderStyle: "solid",
    borderColor: "#e8e8e8",
    borderWidth: 1,
    height: 86,
    width: 326,
    borderRadius: GlobalStyles.Border.br_lg,
    backgroundColor: GlobalStyles.Color.white,
  },
  homeIndicator: {
    borderRadius: GlobalStyles.Border.br_8xl,
    backgroundColor: GlobalStyles.Color.black,
    width: 134,
    height: 5,
  },
  groupChild: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    backgroundColor: GlobalStyles.Color.gray_500,
    borderRadius: GlobalStyles.Border.br_lg,
    position: "absolute",
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
  component208142: {
    left: 0,
    right: 0,
  },
  hello1: {
    top: "36.67%",
    left: "38.04%",
    fontSize: GlobalStyles.FontSize.size_lg,
    lineHeight: 17,
    textTransform: "uppercase",
    color: GlobalStyles.Color.black,
    position: "absolute",
  },
  component208142Parent: {
    height: 60,
    width: 326,
  },
  address1: {
    flex: 1,
    width: "100%",
    backgroundColor: GlobalStyles.Color.white,
  },
});

export default Address1;
