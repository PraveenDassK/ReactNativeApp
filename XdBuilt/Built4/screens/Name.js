import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import GlobalStyles from "../GlobalStyles";

const Name = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.name}>
      <View style={styles.nameChild} />
      <View style={[styles.helloParent, styles.mt5, styles.ml27]}>
        <Text style={[styles.hello, styles.textPosition]}>Your Full Name</Text>
        <Text
          style={[
            styles.hello1,
            styles.helloTypo,
            styles.hello1Typo,
            styles.hello1Position,
          ]}
        >
          Your name should match your documents.
        </Text>
      </View>
      <View style={[styles.statusBarBlack, styles.mt_812]}>
        <View style={[styles.rectangle, styles.timePosition]} />
        <View style={[styles.statusBar, styles.hello1Position]}>
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
                styles.maskGroup236Position,
              ]}
            />
          </View>
        </View>
      </View>
      <View style={[styles.homeIndicator, styles.mt279, styles.ml121]} />
      <Text
        style={[
          styles.firstName,
          styles.mt42,
          styles.ml25,
          styles.helloTypo,
          styles.hello1Typo,
        ]}
      >
        First Name
      </Text>
      <Text
        style={[
          styles.firstName,
          styles.mt28,
          styles.ml25,
          styles.helloTypo,
          styles.hello1Typo,
        ]}
      >
        Last Name
      </Text>
      <View
        style={[
          styles.nameItem,
          styles.mt9,
          styles.ml25,
          styles.nameItemLayout,
        ]}
      />
      <View
        style={[
          styles.nameItem,
          styles.mt9,
          styles.ml25,
          styles.nameItemLayout,
        ]}
      />
      <Pressable
        style={[
          styles.component2089Parent,
          styles.mt54,
          styles.ml25,
          styles.nameItemLayout,
        ]}
        onPress={() => navigation.navigate("ProofOfResidencyListA")}
      >
        <View style={[styles.component2089, styles.timePosition]}>
          <View style={[styles.rectangleParent, styles.hello1Position]}>
            <View style={styles.groupChild} />
            <View style={[styles.maskGroup236, styles.maskGroup236Position]} />
          </View>
        </View>
        <Text style={[styles.hello2, styles.helloTypo]}>Continue</Text>
      </Pressable>
      <Pressable
        style={[styles.iconFeatherArrowLeftWrapper, styles.mt7]}
        onPress={() => navigation.navigate("PersonalOrBusiness")}
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
  mt5: {
    marginTop: GlobalStyles.Margin.margin_28xs,
  },
  ml27: {
    marginLeft: GlobalStyles.Margin.margin_4xs,
  },
  mt_812: {
    marginTop: GlobalStyles.Margin.margin_90xs,
  },
  mt279: {
    marginTop: 279,
  },
  ml121: {
    marginLeft: GlobalStyles.Margin.margin_54xl,
  },
  mt42: {
    marginTop: GlobalStyles.Margin.margin_13xl,
  },
  ml25: {
    marginLeft: GlobalStyles.Margin.margin_7xs,
  },
  mt28: {
    marginTop: GlobalStyles.Margin.margin_3xs,
  },
  mt9: {
    marginTop: GlobalStyles.Margin.margin_25xs,
  },
  mt54: {
    marginTop: GlobalStyles.Margin.margin_23xl,
  },
  mt7: {
    marginTop: GlobalStyles.Margin.margin_27xs,
  },
  textPosition: {
    textAlign: "left",
    left: 0,
    top: 0,
    position: "absolute",
  },
  helloTypo: {
    fontFamily: GlobalStyles.FontFamily.helvetica,
    textAlign: "left",
  },
  hello1Typo: {
    fontSize: GlobalStyles.FontSize.size_base,
    fontFamily: GlobalStyles.FontFamily.helvetica,
  },
  hello1Position: {
    top: "50%",
    position: "absolute",
  },
  timePosition: {
    bottom: 0,
    left: 0,
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
  maskGroup236Position: {
    top: 0,
    right: 0,
    position: "absolute",
  },
  nameItemLayout: {
    width: 326,
    height: 60,
  },
  nameChild: {
    height: 812,
    width: 375,
    backgroundColor: GlobalStyles.Color.gray_300,
  },
  hello: {
    fontSize: GlobalStyles.FontSize.size_8xl,
    lineHeight: 30,
    fontWeight: "700",
    fontFamily: GlobalStyles.FontFamily.typoGrotesk,
    color: GlobalStyles.Color.indigo,
  },
  hello1: {
    marginTop: 16.74,
    left: 1,
    color: GlobalStyles.Color.gray_800,
  },
  helloParent: {
    width: 263,
    height: 65,
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
  homeIndicator: {
    borderRadius: GlobalStyles.Border.br_8xl,
    backgroundColor: GlobalStyles.Color.black,
    width: 134,
    height: 5,
  },
  firstName: {
    color: GlobalStyles.Color.indigo,
  },
  nameItem: {
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
    right: 0,
    left: 0,
  },
  rectangleParent: {
    marginTop: -30,
    height: 60,
    right: 0,
    left: 0,
  },
  component2089: {
    right: 0,
  },
  hello2: {
    top: "36.67%",
    left: "38.04%",
    fontSize: GlobalStyles.FontSize.size_lg,
    lineHeight: 17,
    textTransform: "uppercase",
    color: GlobalStyles.Color.black,
    position: "absolute",
  },
  component2089Parent: {
    height: 60,
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
  name: {
    flex: 1,
    width: "100%",
    backgroundColor: GlobalStyles.Color.white,
  },
});

export default Name;
