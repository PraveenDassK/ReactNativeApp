import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import GlobalStyles from "../GlobalStyles";

const Account3 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.account}>
      <View style={styles.accountChild} />
      <View style={[styles.accountChild, styles.mt_812, styles.ml_9]} />
      <View style={[styles.statusBarBlack, styles.mt_812]}>
        <View style={[styles.rectangle, styles.childPosition]} />
        <View style={styles.statusBar}>
          <View style={[styles.time, styles.childPosition]}>
            <Text style={styles.text}>9:41</Text>
          </View>
          <Image
            style={[styles.batteryIcon, styles.iconPosition2]}
            resizeMode="cover"
            source={require("../assets/icon-awesomebatterythreequarters.png")}
          />
          <Image
            style={[styles.wifiIcon, styles.iconPosition2]}
            resizeMode="cover"
            source={require("../assets/icon-awesomewifi.png")}
          />
          <View style={[styles.network, styles.iconPosition2]}>
            <View
              style={[
                styles.networkChild,
                styles.networkLayout,
                styles.childPosition,
              ]}
            />
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
            <View style={[styles.rectangleView, styles.networkLayout]} />
          </View>
        </View>
      </View>
      <Text style={[styles.hello, styles.mt14, styles.ml30]}>Full Name</Text>
      <Text
        style={[styles.hello1, styles.mt_22, styles.ml290, styles.helloTypo]}
      >
        £0.00
      </Text>
      <Text style={[styles.hello2, styles.mt4, styles.ml30]}>Standard</Text>
      <Text style={[styles.hello3, styles.mt36, styles.ml27, styles.helloTypo]}>
        Manage
      </Text>
      <View style={[styles.rectangleParent, styles.mt18]}>
        <View style={[styles.groupChild, styles.childPosition]} />
        <View style={[styles.groupItem, styles.groupPosition]} />
        <View style={[styles.groupInner, styles.groupPosition]} />
        <Pressable
          style={[styles.statementsParent, styles.parentPosition]}
          onPress={() => navigation.navigate("Account1")}
        >
          <Text
            style={[
              styles.statements,
              styles.limits1Typo,
              styles.childPosition,
            ]}
          >
            Statements
          </Text>
          <Image
            style={[
              styles.iconIonicIosArrowForward,
              styles.iconPosition,
              styles.iconPosition1,
            ]}
            resizeMode="cover"
            source={require("../assets/icon-ioniciosarrowforward15.png")}
          />
        </Pressable>
        <View style={[styles.limitsParent, styles.parentPosition]}>
          <Pressable
            style={[styles.limits, styles.childPosition]}
            onPress={() => navigation.navigate("SpendingLimit3")}
          >
            <Text style={styles.limits1Typo}>Limits</Text>
          </Pressable>
          <Pressable
            style={[styles.iconPosition, styles.iconPosition1]}
            onPress={() => navigation.navigate("SpendingLimit3")}
          >
            <Image
              style={styles.icon}
              resizeMode="cover"
              source={require("../assets/icon-ioniciosarrowforward15.png")}
            />
          </Pressable>
        </View>
        <Pressable
          style={[
            styles.accountVerificationLetterParent,
            styles.parentPosition,
          ]}
          onPress={() => navigation.navigate("Account2")}
        >
          <Text
            style={[
              styles.statements,
              styles.limits1Typo,
              styles.childPosition,
            ]}
          >
            Account verification letter
          </Text>
          <Image
            style={[styles.iconIonicIosArrowForward2, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/icon-ioniciosarrowforward15.png")}
          />
        </Pressable>
      </View>
      <Image
        style={[styles.accountInner, styles.mt105]}
        resizeMode="cover"
        source={require("../assets/group-31123.png")}
      />
      <Pressable
        style={[styles.iconFeatherArrowLeftWrapper, styles.mt2]}
        onPress={() => navigation.navigate("Settings")}
      >
        <Image
          style={[styles.iconFeatherArrowLeft, styles.networkPosition]}
          resizeMode="cover"
          source={require("../assets/icon-featherarrowleft.png")}
        />
      </Pressable>
      <View style={[styles.homeIndicator, styles.mt316, styles.ml121]} />
    </View>
  );
};

const styles = StyleSheet.create({
  mt_812: {
    marginTop: GlobalStyles.Margin.margin_90xs,
  },
  ml_9: {
    marginLeft: -9,
  },
  mt14: {
    marginTop: GlobalStyles.Margin.margin_20xs,
  },
  ml30: {
    marginLeft: GlobalStyles.Margin.margin_sm,
  },
  mt_22: {
    marginTop: -22,
  },
  ml290: {
    marginLeft: 290,
  },
  mt4: {
    marginTop: GlobalStyles.Margin.margin_29xs,
  },
  mt36: {
    marginTop: GlobalStyles.Margin.margin_6xl,
  },
  ml27: {
    marginLeft: GlobalStyles.Margin.margin_4xs,
  },
  mt18: {
    marginTop: GlobalStyles.Margin.margin_15xs,
  },
  mt105: {
    marginTop: GlobalStyles.Margin.margin_47xl,
  },
  mt2: {
    marginTop: GlobalStyles.Margin.margin_31xs,
  },
  mt316: {
    marginTop: 316,
  },
  ml121: {
    marginLeft: GlobalStyles.Margin.margin_54xl,
  },
  childPosition: {
    left: 0,
    position: "absolute",
  },
  iconPosition2: {
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
    fontWeight: "700",
    textAlign: "left",
  },
  groupPosition: {
    height: 2,
    borderTopWidth: 1,
    borderColor: "#f6f5f8",
    borderStyle: "solid",
    top: "50%",
    left: 0,
    right: 0,
    position: "absolute",
  },
  parentPosition: {
    height: 16,
    left: 23,
    right: 23,
    position: "absolute",
  },
  limits1Typo: {
    width: 257,
    color: GlobalStyles.Color.gray_1400,
    lineHeight: 14,
    marginTop: -8,
    fontSize: GlobalStyles.FontSize.size_base,
    fontFamily: GlobalStyles.FontFamily.helvetica,
    fontWeight: "700",
    textAlign: "left",
  },
  iconPosition: {
    width: 6,
    right: 0,
    position: "absolute",
  },
  iconPosition1: {
    bottom: 2,
    top: 2,
    width: 6,
  },
  accountChild: {
    height: 812,
    width: 375,
    backgroundColor: GlobalStyles.Color.gray_300,
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
    bottom: 0,
    right: 0,
    top: 0,
    backgroundColor: GlobalStyles.Color.white,
  },
  text: {
    letterSpacing: 0,
    lineHeight: 24,
    fontWeight: "500",
    fontFamily: GlobalStyles.FontFamily.roboto,
    color: GlobalStyles.Color.gray_1900,
    textAlign: "left",
    fontSize: GlobalStyles.FontSize.size_4xl,
    left: 0,
    top: 0,
    position: "absolute",
  },
  time: {
    width: 40,
    bottom: 0,
    top: 0,
  },
  batteryIcon: {
    width: 22,
    height: 11,
    right: 0,
  },
  wifiIcon: {
    right: 37,
    height: 12,
    width: 17,
  },
  networkChild: {
    height: 4,
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
    position: "absolute",
  },
  network: {
    right: 68,
    width: 17,
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
  hello: {
    color: GlobalStyles.Color.indigo,
    fontFamily: GlobalStyles.FontFamily.typoGrotesk,
    fontWeight: "700",
    textAlign: "left",
    fontSize: GlobalStyles.FontSize.size_4xl,
  },
  hello1: {
    color: GlobalStyles.Color.blue,
    fontSize: GlobalStyles.FontSize.size_4xl,
    fontFamily: GlobalStyles.FontFamily.helvetica,
  },
  hello2: {
    color: GlobalStyles.Color.gray_800,
    fontSize: GlobalStyles.FontSize.size_base,
    fontFamily: GlobalStyles.FontFamily.typoGrotesk,
    textAlign: "left",
  },
  hello3: {
    fontSize: GlobalStyles.FontSize.size_xs,
    color: GlobalStyles.Color.gray_900,
  },
  groupChild: {
    marginTop: -77.5,
    right: 1,
    borderRadius: GlobalStyles.Border.br_5xl,
    height: 155,
    top: "50%",
    backgroundColor: GlobalStyles.Color.white,
  },
  groupItem: {
    marginTop: -29,
  },
  groupInner: {
    marginTop: 24,
  },
  statements: {
    top: "50%",
  },
  iconIonicIosArrowForward: {
    maxHeight: "100%",
  },
  statementsParent: {
    top: 17,
  },
  limits: {
    top: "50%",
  },
  icon: {
    maxHeight: "100%",
    width: "100%",
  },
  limitsParent: {
    marginTop: -9.5,
    top: "50%",
  },
  iconIonicIosArrowForward2: {
    height: 11,
    bottom: 0,
  },
  accountVerificationLetterParent: {
    bottom: 20,
  },
  rectangleParent: {
    width: 327,
    alignSelf: "center",
    height: 155,
  },
  accountInner: {
    width: 326,
    height: 1,
    alignSelf: "center",
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
  homeIndicator: {
    borderRadius: GlobalStyles.Border.br_8xl,
    backgroundColor: GlobalStyles.Color.black,
    width: 134,
    height: 5,
  },
  account: {
    flex: 1,
    width: "100%",
    backgroundColor: GlobalStyles.Color.white,
  },
});

export default Account3;
