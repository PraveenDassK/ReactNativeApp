import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import GlobalStyles from "../GlobalStyles";

const OTPVerificationPersonal = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.otpVerificationPersonal}>
      <View style={styles.otpVerificationPersonalChild} />
      <Text
        style={[
          styles.hello,
          styles.mt15_440000000000001,
          styles.ml74,
          styles.codeTypo,
        ]}
      >
        Swipe Up if already have an account
      </Text>
      <Image
        style={[styles.iconIonicIosArrowDown, styles.mt25_44, styles.ml184]}
        resizeMode="cover"
        source={require("../assets/icon-ioniciosarrowdown14.png")}
      />
      <View style={[styles.homeIndicator, styles.mt17_44, styles.ml121]} />
      <Text style={[styles.hello1, styles.mt13_440000000000001, styles.ml27]}>
        OTP Verfication
      </Text>
      <View
        style={[
          styles.otpVerificationPersonalItem,
          styles.mt26_44,
          styles.ml31,
          styles.otpLayout,
        ]}
      />
      <View
        style={[
          styles.otpVerificationPersonalItem,
          styles.mt23_44,
          styles.ml31,
          styles.otpLayout,
        ]}
      />
      <View
        style={[
          styles.rectangleView,
          styles.mt_41_56,
          styles.ml85,
          styles.otpLayout,
        ]}
      />
      <View
        style={[
          styles.rectangleView,
          styles.mt_41_56,
          styles.ml85,
          styles.otpLayout,
        ]}
      />
      <View
        style={[
          styles.otpVerificationPersonalChild2,
          styles.mt_41_56,
          styles.ml140,
          styles.otpLayout,
        ]}
      />
      <View
        style={[
          styles.otpVerificationPersonalChild2,
          styles.mt_41_56,
          styles.ml140,
          styles.otpLayout,
        ]}
      />
      <View
        style={[
          styles.otpVerificationPersonalChild2,
          styles.mt_41_56,
          styles.ml249,
          styles.otpLayout,
        ]}
      />
      <View
        style={[
          styles.otpVerificationPersonalChild2,
          styles.mt_41_56,
          styles.ml249,
          styles.otpLayout,
        ]}
      />
      <View
        style={[
          styles.otpVerificationPersonalChild2,
          styles.mt_41_56,
          styles.ml194,
          styles.otpLayout,
        ]}
      />
      <View
        style={[
          styles.otpVerificationPersonalChild2,
          styles.mt_41_56,
          styles.ml194,
          styles.otpLayout,
        ]}
      />
      <View
        style={[
          styles.otpVerificationPersonalChild2,
          styles.mt_41_56,
          styles.ml303,
          styles.otpLayout,
        ]}
      />
      <View
        style={[
          styles.otpVerificationPersonalChild2,
          styles.mt_41_56,
          styles.ml303,
          styles.otpLayout,
        ]}
      />
      <Text
        style={[
          styles.pleaseEnterTheCodeSentTo,
          styles.mt16_44,
          styles.ml27,
          styles.codeTypo,
        ]}
      >
        <Text
          style={styles.pleaseEnterThe}
        >{`Please enter the code sent to `}</Text>
        <Text style={styles.text}>+44 1234567890</Text>
      </Text>
      <Text
        style={[
          styles.pleaseEnterTheCodeSentTo,
          styles.mt36_44,
          styles.ml31,
          styles.codeTypo,
        ]}
      >
        <Text
          style={styles.pleaseEnterThe}
        >{`Please enter the code sent to `}</Text>
        <Text style={styles.text}>XYZ@gmail.com</Text>
      </Text>
      <Text style={[styles.text1, styles.mt_34_56, styles.ml44]}>1</Text>
      <Text style={[styles.text1, styles.mt_34_56, styles.ml44]}>1</Text>
      <Text
        style={[
          styles.resendCodeIn0010,
          styles.mt19_44,
          styles.ml31,
          styles.codeTypo,
        ]}
      >
        Resend Code in 00:10
      </Text>
      <Text
        style={[
          styles.resendCodeIn0010,
          styles.mt19_44,
          styles.ml31,
          styles.codeTypo,
        ]}
      >
        Resend Code in 00:10
      </Text>
      <View style={[styles.statusBarBlack, styles.mt_811_56]}>
        <View style={[styles.rectangle, styles.timePosition]} />
        <View style={[styles.statusBar, styles.statusBarPosition]}>
          <View style={[styles.time, styles.timePosition]}>
            <Text style={styles.text3}>9:41</Text>
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
            <View style={[styles.networkChild, styles.networkChildLayout]} />
            <View style={[styles.networkItem, styles.networkPosition]} />
            <View style={[styles.networkInner, styles.networkPosition]} />
            <View style={[styles.networkChild1, styles.networkChildLayout]} />
          </View>
        </View>
      </View>
      <Pressable
        style={[styles.iconFeatherArrowLeft, styles.mt26_44, styles.ml27]}
        onPress={() => navigation.navigate("SignUpPersonal")}
      >
        <Image
          style={styles.iconLayout}
          resizeMode="cover"
          source={require("../assets/icon-featherarrowleft.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.component2084Parent, styles.mt247_44, styles.ml25]}
        onPress={() => navigation.navigate("FaceScan")}
      >
        <View style={[styles.component2084, styles.timePosition]}>
          <View style={[styles.rectangleParent, styles.statusBarPosition]}>
            <View style={[styles.groupChild, styles.iconLayout]} />
            <View style={styles.maskGroup236} />
          </View>
        </View>
        <Text style={styles.hello2}>Verify</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  mt15_440000000000001: {
    marginTop: 15.440000000000001,
  },
  ml74: {
    marginLeft: GlobalStyles.Margin.margin_35xl,
  },
  mt25_44: {
    marginTop: 25.44,
  },
  ml184: {
    marginLeft: GlobalStyles.Margin.margin_71xl,
  },
  mt17_44: {
    marginTop: 17.44,
  },
  ml121: {
    marginLeft: GlobalStyles.Margin.margin_54xl,
  },
  mt13_440000000000001: {
    marginTop: 13.440000000000001,
  },
  ml27: {
    marginLeft: GlobalStyles.Margin.margin_4xs,
  },
  mt26_44: {
    marginTop: GlobalStyles.Margin.margin_5xs,
  },
  ml31: {
    marginLeft: GlobalStyles.Margin.margin_md,
  },
  mt23_44: {
    marginTop: 23.44,
  },
  mt_41_56: {
    marginTop: GlobalStyles.Margin.margin_56xs,
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
  mt16_44: {
    marginTop: 16.44,
  },
  mt36_44: {
    marginTop: 36.44,
  },
  mt_34_56: {
    marginTop: GlobalStyles.Margin.margin_51xs,
  },
  ml44: {
    marginLeft: GlobalStyles.Margin.margin_15xl,
  },
  mt19_44: {
    marginTop: GlobalStyles.Margin.margin_13xs,
  },
  mt_811_56: {
    marginTop: GlobalStyles.Margin.margin_89xs,
  },
  mt247_44: {
    marginTop: 247.44,
  },
  ml25: {
    marginLeft: GlobalStyles.Margin.margin_7xs,
  },
  codeTypo: {
    fontSize: GlobalStyles.FontSize.size_base,
    fontFamily: GlobalStyles.FontFamily.helvetica,
  },
  otpLayout: {
    height: 42,
    width: 42,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: GlobalStyles.Border.br_2xs,
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
  otpVerificationPersonalChild: {
    backgroundColor: GlobalStyles.Color.gray_300,
    height: 812,
    width: 375,
  },
  hello: {
    lineHeight: 16,
    textAlign: "center",
    color: GlobalStyles.Color.gray_800,
    fontFamily: GlobalStyles.FontFamily.helvetica,
  },
  iconIonicIosArrowDown: {
    width: 8,
    height: 5,
  },
  homeIndicator: {
    borderRadius: GlobalStyles.Border.br_8xl,
    backgroundColor: GlobalStyles.Color.black,
    width: 134,
    height: 5,
  },
  hello1: {
    fontSize: GlobalStyles.FontSize.size_8xl,
    fontWeight: "700",
    fontFamily: GlobalStyles.FontFamily.typoGrotesk,
    color: GlobalStyles.Color.indigo,
    textAlign: "left",
  },
  otpVerificationPersonalItem: {
    borderColor: "#0101fd",
  },
  rectangleView: {
    borderColor: "#ff4b4b",
  },
  otpVerificationPersonalChild2: {
    borderColor: "#e8e8e8",
  },
  pleaseEnterThe: {
    color: GlobalStyles.Color.gray_800,
  },
  text: {
    color: GlobalStyles.Color.gray_1600,
  },
  pleaseEnterTheCodeSentTo: {
    textAlign: "left",
    fontFamily: GlobalStyles.FontFamily.helvetica,
  },
  text1: {
    fontSize: GlobalStyles.FontSize.size_9xl,
    color: GlobalStyles.Color.blue,
    textAlign: "left",
    fontFamily: GlobalStyles.FontFamily.helvetica,
  },
  resendCodeIn0010: {
    textAlign: "left",
    color: GlobalStyles.Color.gray_800,
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
    bottom: 0,
  },
  text3: {
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
  },
  networkItem: {
    marginLeft: -3.5,
    height: 6,
  },
  networkInner: {
    marginLeft: 0.5,
    height: 9,
  },
  networkChild1: {
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
  iconFeatherArrowLeft: {
    height: 17,
    width: 17,
  },
  groupChild: {
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: GlobalStyles.Border.br_lg,
    backgroundColor: GlobalStyles.Color.gray_500,
    position: "absolute",
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
  component2084: {
    left: 0,
    right: 0,
  },
  hello2: {
    top: "36.67%",
    left: "44.17%",
    fontSize: GlobalStyles.FontSize.size_lg,
    lineHeight: 17,
    textTransform: "uppercase",
    color: GlobalStyles.Color.black,
    position: "absolute",
    textAlign: "left",
    fontFamily: GlobalStyles.FontFamily.helvetica,
  },
  component2084Parent: {
    width: 326,
    height: 60,
  },
  otpVerificationPersonal: {
    flex: 1,
    width: "100%",
    backgroundColor: GlobalStyles.Color.white,
  },
});

export default OTPVerificationPersonal;
