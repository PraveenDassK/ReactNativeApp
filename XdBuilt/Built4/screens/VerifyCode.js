import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import GlobalStyles from "../GlobalStyles";

const VerifyCode = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.verifyCode}>
      <View style={styles.verifyCodeChild} />
      <Text style={[styles.hello, styles.mt10, styles.ml27]}>
        Verify your identity
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
        onPress={() => navigation.navigate("VerifyYourIdentity")}
      >
        <Image
          style={[styles.iconFeatherArrowLeft, styles.networkPosition]}
          resizeMode="cover"
          source={require("../assets/icon-featherarrowleft.png")}
        />
      </Pressable>
      <Text style={[styles.hello1, styles.mt14, styles.ml28, styles.helloTypo]}>
        Enter the verification code sent to +44 123....
      </Text>
      <Pressable
        style={[styles.component208121Parent, styles.mt87, styles.ml25]}
        onPress={() => navigation.navigate("VerifyCode1")}
      >
        <View style={[styles.component208121, styles.timePosition]}>
          <View style={[styles.rectangleParent, styles.statusBarPosition]}>
            <View style={styles.groupChild} />
            <View style={[styles.maskGroup236, styles.textPosition]} />
          </View>
        </View>
        <Text style={[styles.hello2, styles.helloTypo]}>Verify</Text>
      </Pressable>
      <View style={[styles.homeIndicator, styles.mt339, styles.ml121]} />
      <View
        style={[
          styles.verifyCodeItem,
          styles.mt75,
          styles.ml31,
          styles.verifyLayout,
        ]}
      />
      <View
        style={[
          styles.verifyCodeInner,
          styles.mt_42,
          styles.ml85,
          styles.verifyLayout,
        ]}
      />
      <View
        style={[
          styles.verifyCodeChild1,
          styles.mt_42,
          styles.ml140,
          styles.verifyLayout,
        ]}
      />
      <View
        style={[
          styles.verifyCodeChild1,
          styles.mt_42,
          styles.ml249,
          styles.verifyLayout,
        ]}
      />
      <View
        style={[
          styles.verifyCodeChild1,
          styles.mt_42,
          styles.ml194,
          styles.verifyLayout,
        ]}
      />
      <View
        style={[
          styles.verifyCodeChild1,
          styles.mt_42,
          styles.ml303,
          styles.verifyLayout,
        ]}
      />
      <Text style={[styles.text1, styles.mt_35, styles.ml44, styles.helloTypo]}>
        1
      </Text>
      <Text style={[styles.hello1, styles.mt19, styles.ml31, styles.helloTypo]}>
        Resend Code in 00:10
      </Text>
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
  mt87: {
    marginTop: 87,
  },
  ml25: {
    marginLeft: GlobalStyles.Margin.margin_7xs,
  },
  mt339: {
    marginTop: 339,
  },
  ml121: {
    marginLeft: GlobalStyles.Margin.margin_54xl,
  },
  mt75: {
    marginTop: GlobalStyles.Margin.margin_36xl,
  },
  ml31: {
    marginLeft: GlobalStyles.Margin.margin_md,
  },
  mt_42: {
    marginTop: GlobalStyles.Margin.margin_58xs,
  },
  ml85: {
    marginLeft: GlobalStyles.Margin.margin_43xl,
  },
  ml140: {
    marginLeft: GlobalStyles.Margin.margin_58xl,
  },
  ml249: {
    marginLeft: GlobalStyles.Margin.margin_86xl,
  },
  ml194: {
    marginLeft: GlobalStyles.Margin.margin_73xl,
  },
  ml303: {
    marginLeft: GlobalStyles.Margin.margin_93xl,
  },
  mt_35: {
    marginTop: GlobalStyles.Margin.margin_52xs,
  },
  ml44: {
    marginLeft: GlobalStyles.Margin.margin_15xl,
  },
  mt19: {
    marginTop: GlobalStyles.Margin.margin_14xs,
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
  verifyLayout: {
    height: 42,
    width: 42,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: GlobalStyles.Border.br_2xs,
    backgroundColor: GlobalStyles.Color.white,
  },
  verifyCodeChild: {
    height: 812,
    width: 375,
    backgroundColor: GlobalStyles.Color.gray_300,
  },
  hello: {
    fontSize: GlobalStyles.FontSize.size_8xl,
    fontWeight: "700",
    fontFamily: GlobalStyles.FontFamily.typoGrotesk,
    color: GlobalStyles.Color.indigo,
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
  hello1: {
    fontSize: GlobalStyles.FontSize.size_base,
    color: GlobalStyles.Color.gray_800,
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
  component208121: {
    left: 0,
    right: 0,
  },
  hello2: {
    top: "36.67%",
    left: "41.72%",
    fontSize: GlobalStyles.FontSize.size_lg,
    lineHeight: 17,
    textTransform: "uppercase",
    color: GlobalStyles.Color.black,
    position: "absolute",
  },
  component208121Parent: {
    width: 326,
    height: 60,
  },
  homeIndicator: {
    borderRadius: GlobalStyles.Border.br_8xl,
    backgroundColor: GlobalStyles.Color.black,
    width: 134,
    height: 5,
  },
  verifyCodeItem: {
    borderColor: "#0101fd",
  },
  verifyCodeInner: {
    borderColor: "#ff4b4b",
  },
  verifyCodeChild1: {
    borderColor: "#e8e8e8",
  },
  text1: {
    fontSize: GlobalStyles.FontSize.size_9xl,
    color: GlobalStyles.Color.blue,
  },
  verifyCode: {
    flex: 1,
    width: "100%",
    backgroundColor: GlobalStyles.Color.white,
  },
});

export default VerifyCode;
