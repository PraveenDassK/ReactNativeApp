import * as React from "react";
import { StyleSheet, View, Pressable, Image, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import GlobalStyles from "../GlobalStyles";

const SignUpPersonal = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.signUpPersonal}>
      <Pressable
        style={styles.signUpPersonalChild}
        onPress={() => navigation.navigate("OTPVerificationPersonal")}
      />
      <Pressable
        style={[styles.wrapper, styles.mt2]}
        onPress={() => navigation.navigate("Onboarding3")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/group-31063.png")}
        />
      </Pressable>
      <Text style={[styles.hello, styles.mt15, styles.ml76]}>
        Swipe up if already have an account
      </Text>
      <Image
        style={[styles.iconIonicIosArrowDown, styles.mt295, styles.ml184]}
        resizeMode="cover"
        source={require("../assets/icon-ioniciosarrowdown14.png")}
      />
      <View style={[styles.helloParent, styles.mt10, styles.ml25]}>
        <Text style={[styles.hello1, styles.enterColor]}>
          <Text style={styles.getStartedWith}>Get Started With</Text>
          <Text style={styles.getStartedWith}>Carbonyte</Text>
        </Text>
        <Text style={[styles.enterYourMobileNumber, styles.enterColor]}>
          Enter your mobile number
        </Text>
        <Text style={[styles.hello2, styles.text1Typo]}>
          <Text
            style={styles.getStartedWith}
          >{`We will send an OTP to verify `}</Text>
          <Text style={styles.getStartedWith}>your number and email ID.</Text>
        </Text>
      </View>
      <View style={[styles.statusBarBlack, styles.mt_812]}>
        <View style={styles.rectangle} />
        <View style={styles.statusBar}>
          <View style={styles.time}>
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
            <View style={[styles.rectangleView, styles.networkLayout]} />
          </View>
        </View>
      </View>
      <View style={[styles.homeLayout, styles.mt17, styles.ml121]} />
      <View style={[styles.component1981, styles.mt14]}>
        <View style={[styles.component1981Child, styles.childBorder]} />
        <View style={styles.keyboardNumberic}>
          <View style={styles.background}>
            <View
              style={[styles.backgroundBackground, styles.backgroundPosition]}
            />
            <View style={styles.background1} />
          </View>
          <View
            style={[styles.homeIndicatorLightPortr, styles.backgroundPosition]}
          >
            <View
              style={[
                styles.homeIndicator1,
                styles.homeLayout,
                styles.networkPosition,
              ]}
            />
          </View>
          <View style={[styles.keys, styles.keysPosition]}>
            <Image
              style={styles.deleteIcon}
              resizeMode="cover"
              source={require("../assets/delete2.png")}
            />
            <View
              style={[styles.view, styles.viewShadowBox, styles.viewPosition2]}
            >
              <Text style={[styles.number, styles.labelPosition]}>0</Text>
            </View>
            <View style={[styles.view1, styles.viewPosition1]}>
              <View
                style={[styles.backgroundBackground, styles.backgroundPosition]}
              />
              <View style={styles.keyBackground} />
              <Text style={[styles.label, styles.labelPosition]}>WXYZ</Text>
              <Text style={[styles.number1, styles.numberPosition]}>9</Text>
            </View>
            <View style={[styles.viewPosition1, styles.viewPosition2]}>
              <View
                style={[styles.backgroundBackground, styles.backgroundPosition]}
              />
              <View style={styles.keyBackground} />
              <Text style={[styles.label, styles.labelPosition]}>TUV</Text>
              <Text style={[styles.number1, styles.numberPosition]}>8</Text>
            </View>
            <View style={[styles.view3, styles.viewPosition1]}>
              <View
                style={[styles.backgroundBackground, styles.backgroundPosition]}
              />
              <View style={styles.keyBackground} />
              <Text style={[styles.label, styles.labelPosition]}>PQRS</Text>
              <Text style={[styles.number1, styles.numberPosition]}>7</Text>
            </View>
            <View style={[styles.view4, styles.viewPosition]}>
              <View
                style={[styles.backgroundBackground, styles.backgroundPosition]}
              />
              <View style={styles.keyBackground} />
              <Text style={[styles.label, styles.labelPosition]}>MNO</Text>
              <Text style={[styles.number1, styles.numberPosition]}>6</Text>
            </View>
            <View style={[styles.viewPosition, styles.viewPosition2]}>
              <View
                style={[styles.backgroundBackground, styles.backgroundPosition]}
              />
              <View style={styles.keyBackground} />
              <Text style={[styles.label, styles.labelPosition]}>JKL</Text>
              <Text style={[styles.number1, styles.numberPosition]}>5</Text>
            </View>
            <View style={[styles.view6, styles.viewPosition]}>
              <View
                style={[styles.backgroundBackground, styles.backgroundPosition]}
              />
              <View style={styles.keyBackground} />
              <Text style={[styles.label, styles.labelPosition]}>GHI</Text>
              <Text style={[styles.number1, styles.numberPosition]}>4</Text>
            </View>
            <View style={[styles.view7, styles.viewShadowBox]}>
              <Text style={[styles.label, styles.labelPosition]}>DEF</Text>
              <Text style={[styles.number7, styles.numberPosition]}>3</Text>
            </View>
            <View
              style={[styles.view8, styles.viewShadowBox, styles.viewPosition2]}
            >
              <Text style={[styles.label, styles.labelPosition]}>ABC</Text>
              <Text style={[styles.number7, styles.numberPosition]}>2</Text>
            </View>
            <View style={[styles.view9, styles.viewShadowBox]}>
              <Text style={[styles.label, styles.labelPosition]}>{` `}</Text>
              <Text style={[styles.number7, styles.numberPosition]}>1</Text>
            </View>
          </View>
        </View>
        <Pressable
          style={styles.component2083Parent}
          onPress={() => navigation.navigate("OTPVerificationPersonal")}
        >
          <View style={styles.component2083}>
            <View style={styles.rectangleParent}>
              <View style={styles.groupChild} />
              <View style={styles.maskGroup236} />
            </View>
          </View>
          <Text style={styles.hello3}>Continue</Text>
        </Pressable>
      </View>
      <View style={[styles.component1971, styles.mt_850, styles.ml24]}>
        <View style={[styles.component1971Child, styles.childBorder]} />
        <Text style={[styles.text1, styles.networkPosition, styles.text1Typo]}>
          +44
        </Text>
        <Image
          style={[styles.maskGroup288, styles.keysPosition]}
          resizeMode="cover"
          source={require("../assets/mask-group-288.png")}
        />
      </View>
      <View
        style={[
          styles.signUpPersonalItem,
          styles.mt9,
          styles.ml24,
          styles.childBorder,
        ]}
      />
      <Text
        style={[
          styles.enterYourEmailId,
          styles.mt27,
          styles.ml25,
          styles.enterColor,
        ]}
      >
        Enter your Email ID
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mt2: {
    marginTop: GlobalStyles.Margin.margin_31xs,
  },
  mt15: {
    marginTop: GlobalStyles.Margin.margin_18xs,
  },
  ml76: {
    marginLeft: GlobalStyles.Margin.margin_37xl,
  },
  mt295: {
    marginTop: 295,
  },
  ml184: {
    marginLeft: GlobalStyles.Margin.margin_71xl,
  },
  mt10: {
    marginTop: GlobalStyles.Margin.margin_24xs,
  },
  ml25: {
    marginLeft: GlobalStyles.Margin.margin_7xs,
  },
  mt_812: {
    marginTop: GlobalStyles.Margin.margin_90xs,
  },
  mt17: {
    marginTop: GlobalStyles.Margin.margin_16xs,
  },
  ml121: {
    marginLeft: GlobalStyles.Margin.margin_54xl,
  },
  mt14: {
    marginTop: GlobalStyles.Margin.margin_20xs,
  },
  mt_850: {
    marginTop: -850,
  },
  ml24: {
    marginLeft: GlobalStyles.Margin.margin_8xs,
  },
  mt9: {
    marginTop: GlobalStyles.Margin.margin_25xs,
  },
  mt27: {
    marginTop: GlobalStyles.Margin.margin_4xs,
  },
  enterColor: {
    color: GlobalStyles.Color.indigo,
    textAlign: "left",
  },
  text1Typo: {
    textAlign: "left",
    color: GlobalStyles.Color.gray_800,
    top: "50%",
    fontFamily: GlobalStyles.FontFamily.helvetica,
  },
  networkPosition1: {
    width: 17,
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
  childBorder: {
    borderWidth: 1,
    borderColor: "#e8e8e8",
    borderStyle: "solid",
    borderRadius: GlobalStyles.Border.br_lg,
    backgroundColor: GlobalStyles.Color.white,
  },
  backgroundPosition: {
    backgroundColor: GlobalStyles.Color.gray_1700,
    right: 0,
    left: 0,
    bottom: 0,
    position: "absolute",
  },
  homeLayout: {
    width: 134,
    backgroundColor: GlobalStyles.Color.black,
    borderRadius: GlobalStyles.Border.br_8xl,
    height: 5,
  },
  keysPosition: {
    left: 6,
    position: "absolute",
  },
  viewShadowBox: {
    height: 46,
    width: 117,
    elevation: 0,
    shadowRadius: 0,
    shadowColor: "#898a8d",
    backgroundColor: GlobalStyles.Color.gray_100,
    borderRadius: GlobalStyles.Border.br_5xs,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    position: "absolute",
  },
  viewPosition2: {
    marginLeft: -58.5,
    left: "50%",
  },
  labelPosition: {
    width: 118,
    color: GlobalStyles.Color.black,
    left: 0,
    position: "absolute",
    textAlign: "center",
  },
  viewPosition1: {
    height: 47,
    marginTop: 3.5,
    width: 117,
    top: "50%",
    position: "absolute",
  },
  numberPosition: {
    top: 1,
    width: 118,
    color: GlobalStyles.Color.black,
    fontFamily: GlobalStyles.FontFamily.sFProDisplay,
    fontSize: GlobalStyles.FontSize.size_7xl,
    letterSpacing: 0,
    left: 0,
    position: "absolute",
    textAlign: "center",
  },
  viewPosition: {
    marginTop: -50.5,
    height: 47,
    width: 117,
    top: "50%",
    position: "absolute",
  },
  signUpPersonalChild: {
    backgroundColor: GlobalStyles.Color.gray_300,
    height: 812,
    width: 375,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    width: 55,
    height: 45,
  },
  hello: {
    lineHeight: 16,
    textAlign: "center",
    color: GlobalStyles.Color.gray_800,
    fontFamily: GlobalStyles.FontFamily.helvetica,
    fontSize: GlobalStyles.FontSize.size_base,
  },
  iconIonicIosArrowDown: {
    width: 8,
    height: 5,
  },
  getStartedWith: {
    margin: GlobalStyles.Margin.margin_33xs,
  },
  hello1: {
    left: 2,
    fontSize: GlobalStyles.FontSize.size_8xl,
    lineHeight: 30,
    fontFamily: GlobalStyles.FontFamily.typoGrotesk,
    textAlign: "left",
    fontWeight: "700",
    top: 0,
    position: "absolute",
  },
  enterYourMobileNumber: {
    left: 0,
    bottom: 0,
    textAlign: "left",
    position: "absolute",
    fontFamily: GlobalStyles.FontFamily.helvetica,
    fontSize: GlobalStyles.FontSize.size_base,
  },
  hello2: {
    marginTop: -6.52,
    left: 3,
    lineHeight: 20,
    top: "50%",
    textAlign: "left",
    position: "absolute",
    fontSize: GlobalStyles.FontSize.size_base,
  },
  helloParent: {
    width: 208,
    height: 164,
  },
  rectangle: {
    shadowColor: "rgba(0, 0, 0, 0.05)",
    shadowRadius: 6,
    elevation: 6,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    right: 0,
    left: 0,
    bottom: 0,
    top: 0,
    position: "absolute",
    backgroundColor: GlobalStyles.Color.white,
  },
  text: {
    fontSize: GlobalStyles.FontSize.size_4xl,
    lineHeight: 24,
    fontWeight: "500",
    fontFamily: GlobalStyles.FontFamily.roboto,
    color: GlobalStyles.Color.gray_1900,
    letterSpacing: 0,
    left: 0,
    textAlign: "left",
    top: 0,
    position: "absolute",
  },
  time: {
    width: 40,
    left: 0,
    bottom: 0,
    top: 0,
    position: "absolute",
  },
  batteryIcon: {
    height: 11,
    width: 22,
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
    top: 0,
    position: "absolute",
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
    top: "50%",
    position: "absolute",
  },
  statusBarBlack: {
    height: 44,
    width: 375,
  },
  component1981Child: {
    right: 24,
    bottom: 790,
    left: 111,
    top: 0,
    position: "absolute",
  },
  backgroundBackground: {
    top: 0,
  },
  background1: {
    backgroundColor: GlobalStyles.Color.gray_600,
    right: 0,
    left: 0,
    bottom: 0,
    top: 0,
    position: "absolute",
  },
  background: {
    right: 0,
    left: 0,
    bottom: 0,
    top: 0,
    position: "absolute",
  },
  homeIndicator1: {
    marginTop: 3,
    marginLeft: -66.5,
    top: "50%",
  },
  homeIndicatorLightPortr: {
    height: 34,
  },
  deleteIcon: {
    right: 44,
    bottom: 15,
    width: 24,
    height: 18,
    position: "absolute",
  },
  number: {
    marginTop: -16,
    height: 30,
    fontFamily: GlobalStyles.FontFamily.sFProDisplay,
    fontSize: GlobalStyles.FontSize.size_7xl,
    width: 118,
    letterSpacing: 0,
    top: "50%",
  },
  view: {
    bottom: 0,
  },
  keyBackground: {
    elevation: 0,
    shadowRadius: 0,
    shadowColor: "#898a8d",
    backgroundColor: GlobalStyles.Color.gray_100,
    borderRadius: GlobalStyles.Border.br_5xs,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    right: 0,
    left: 0,
    bottom: 0,
    top: 0,
    position: "absolute",
  },
  label: {
    bottom: 5,
    fontSize: GlobalStyles.FontSize.size_3xs,
    letterSpacing: 2,
    height: 12,
    fontWeight: "700",
    fontFamily: GlobalStyles.FontFamily.helvetica,
  },
  number1: {
    height: 31,
  },
  view1: {
    right: 0,
  },
  view3: {
    left: 0,
  },
  view4: {
    right: 0,
  },
  view6: {
    left: 0,
  },
  number7: {
    height: 30,
  },
  view7: {
    right: 0,
    top: 0,
  },
  view8: {
    top: 0,
  },
  view9: {
    left: 0,
    top: 0,
  },
  keys: {
    top: 6,
    right: 6,
    height: 207,
  },
  keyboardNumberic: {
    height: 291,
    right: 0,
    left: 0,
    bottom: 0,
    position: "absolute",
  },
  groupChild: {
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    backgroundColor: GlobalStyles.Color.gray_500,
    borderRadius: GlobalStyles.Border.br_lg,
    position: "absolute",
    height: "100%",
    width: "100%",
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
    height: 60,
    right: 0,
    top: "50%",
    left: 0,
    position: "absolute",
  },
  component2083: {
    height: 60,
    right: 0,
    left: 0,
    top: 0,
    position: "absolute",
  },
  hello3: {
    top: "36.67%",
    left: "38.04%",
    fontSize: GlobalStyles.FontSize.size_lg,
    lineHeight: 17,
    textTransform: "uppercase",
    color: GlobalStyles.Color.black,
    textAlign: "left",
    position: "absolute",
    fontFamily: GlobalStyles.FontFamily.helvetica,
  },
  component2083Parent: {
    top: 382,
    right: 25,
    left: 25,
    height: 60,
    position: "absolute",
  },
  component1981: {
    height: 850,
    width: 375,
  },
  component1971Child: {
    right: 0,
    left: 0,
    bottom: 0,
    top: 0,
    position: "absolute",
  },
  text1: {
    marginTop: -8,
    marginLeft: -2,
    fontSize: GlobalStyles.FontSize.size_xl,
    top: "50%",
    textAlign: "left",
  },
  maskGroup288: {
    top: 19,
    bottom: 19,
    maxHeight: "100%",
    width: 22,
  },
  component1971: {
    width: 70,
    height: 60,
  },
  signUpPersonalItem: {
    width: 326,
    height: 60,
  },
  enterYourEmailId: {
    textAlign: "left",
    fontFamily: GlobalStyles.FontFamily.helvetica,
    fontSize: GlobalStyles.FontSize.size_base,
  },
  signUpPersonal: {
    flex: 1,
    width: "100%",
    backgroundColor: GlobalStyles.Color.white,
  },
});

export default SignUpPersonal;
