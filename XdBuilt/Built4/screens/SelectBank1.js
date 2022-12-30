import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import GlobalStyles from "../GlobalStyles";

const SelectBank1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.selectBank1}>
      <View style={styles.selectBank1Child} />
      <Text style={[styles.hello, styles.mt10, styles.ml27]}>
        Enter your detail
      </Text>
      <View style={[styles.statusBarBlack, styles.mt_812]}>
        <View style={[styles.rectangle, styles.timePosition]} />
        <View style={[styles.statusBar, styles.statusBarPosition]}>
          <View style={[styles.time, styles.timePosition]}>
            <Text style={[styles.text, styles.textPosition]}>9:41</Text>
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
                styles.textPosition,
              ]}
            />
          </View>
        </View>
      </View>
      <Pressable
        style={[styles.iconFeatherArrowLeftWrapper, styles.mt2]}
        onPress={() => navigation.navigate("SelectBank")}
      >
        <Image
          style={[styles.iconFeatherArrowLeft, styles.networkPosition]}
          resizeMode="cover"
          source={require("../assets/icon-featherarrowleft.png")}
        />
      </Pressable>
      <Text style={[styles.hello1, styles.mt14, styles.ml28, styles.helloTypo]}>
        <Text style={styles.byProvidingYour}>
          By providing your information to Carbonyte, you are
        </Text>
        <Text style={styles.byProvidingYour}>
          enabling Carbonyte to retrieve your personal data.
        </Text>
      </Text>
      <Text
        style={[styles.username, styles.mt35, styles.ml25, styles.helloTypo]}
      >
        Username
      </Text>
      <Text
        style={[styles.username, styles.mt37, styles.ml25, styles.helloTypo]}
      >
        Password
      </Text>
      <View
        style={[
          styles.selectBank1Item,
          styles.mt9,
          styles.ml25,
          styles.selectBank1ItemLayout,
        ]}
      />
      <View
        style={[
          styles.selectBank1Item,
          styles.mt9,
          styles.ml25,
          styles.selectBank1ItemLayout,
        ]}
      />
      <Pressable
        style={[
          styles.component208118Parent,
          styles.mt36,
          styles.ml25,
          styles.selectBank1ItemLayout,
        ]}
        onPress={() => navigation.navigate("VerifyYourIdentity")}
      >
        <View style={[styles.component208118, styles.timePosition]}>
          <View style={[styles.rectangleParent, styles.statusBarPosition]}>
            <View style={styles.groupChild} />
            <View style={[styles.maskGroup236, styles.textPosition]} />
          </View>
        </View>
        <Text style={[styles.hello2, styles.helloTypo]}>Submit</Text>
      </Pressable>
      <View style={[styles.homeIndicator, styles.mt273, styles.ml121]} />
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
  mt35: {
    marginTop: GlobalStyles.Margin.margin_5xl,
  },
  ml25: {
    marginLeft: GlobalStyles.Margin.margin_7xs,
  },
  mt37: {
    marginTop: GlobalStyles.Margin.margin_7xl,
  },
  mt9: {
    marginTop: GlobalStyles.Margin.margin_25xs,
  },
  mt36: {
    marginTop: GlobalStyles.Margin.margin_6xl,
  },
  mt273: {
    marginTop: 273,
  },
  ml121: {
    marginLeft: GlobalStyles.Margin.margin_54xl,
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
  textPosition: {
    top: 0,
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
  helloTypo: {
    fontFamily: GlobalStyles.FontFamily.helvetica,
    textAlign: "left",
  },
  selectBank1ItemLayout: {
    width: 326,
    height: 60,
  },
  selectBank1Child: {
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
    textAlign: "left",
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
  iconFeatherArrowLeft: {
    marginLeft: -0.5,
    bottom: 4,
    height: 17,
    width: 17,
  },
  iconFeatherArrowLeftWrapper: {
    width: 55,
    height: 45,
    backgroundColor: GlobalStyles.Color.gray_300,
  },
  byProvidingYour: {
    margin: GlobalStyles.Margin.margin_33xs,
  },
  hello1: {
    fontSize: GlobalStyles.FontSize.size_base,
    lineHeight: 20,
    color: GlobalStyles.Color.gray_800,
  },
  username: {
    fontSize: GlobalStyles.FontSize.size_xl,
    color: GlobalStyles.Color.indigo,
  },
  selectBank1Item: {
    borderStyle: "solid",
    borderColor: "#e8e8e8",
    borderWidth: 1,
    height: 60,
    borderRadius: GlobalStyles.Border.br_lg,
    backgroundColor: GlobalStyles.Color.white,
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
  },
  rectangleParent: {
    marginTop: -30,
    height: 60,
    left: 0,
    right: 0,
  },
  component208118: {
    left: 0,
    right: 0,
  },
  hello2: {
    top: "36.67%",
    left: "41.41%",
    fontSize: GlobalStyles.FontSize.size_lg,
    lineHeight: 17,
    textTransform: "uppercase",
    color: GlobalStyles.Color.black,
    position: "absolute",
  },
  component208118Parent: {
    height: 60,
  },
  homeIndicator: {
    borderRadius: GlobalStyles.Border.br_8xl,
    backgroundColor: GlobalStyles.Color.black,
    width: 134,
    height: 5,
  },
  selectBank1: {
    flex: 1,
    width: "100%",
    backgroundColor: GlobalStyles.Color.white,
  },
});

export default SelectBank1;
