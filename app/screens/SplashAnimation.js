import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable, Animated } from "react-native";
import { horizontalScale, verticalScale, moderateScale } from "../config/scaling"

import GlobalStyles from "../../GlobalStyles";

import FadeInView from "../components/fadeInview";

const LogoAnimation3 = ({navigation}) => {
  return (
    <Pressable
      style={styles.logoAnimation3}
      onPress={() => navigation.navigate("Onboarding1")}
    >
    <FadeInView>
      <View style={styles.maskGroup261Parent}>

        <Image
          style={styles.layer12Icon}
          resizeMode="contain"
          source={require("../assets/logo-carbonyte.png")}
        />
        <Text style={[styles.hello, styles.helloFlexBox]}>Welcome to</Text>
        <Text
          style={[styles.quickSecuredBanking, styles.helloFlexBox]}
        >{`Quick & Secured Banking`}</Text>
        <Image
          style={[styles.maskGroup259, styles.maskGroupLayout]}
          resizeMode="contain"
          source={require("../assets/image-carbonytetext.png")}
        />
      </View>
          </FadeInView>

    </Pressable>
  );
};

const styles = StyleSheet.create({
  maskGroupLayout: {
    overflow: "hidden",
    maxWidth: "100%",
    width:"100%",
    alignItems: 'center',
  },
  helloFlexBox: {
    textAlign: "center",
    position: "absolute",
  },
  maskGroup261: {
    right: horizontalScale(0),
    bottom: verticalScale(0),
    left: horizontalScale(0),
    height: verticalScale(132),
  },
  layer12Icon: {
    marginTop: verticalScale(-165.5),
    marginLeft: horizontalScale(-63.5),
    left: "50%",
    width: horizontalScale(128),
    height: verticalScale(136),
    top: "50%",
    position: "absolute",

  },
  hello: {
    textAlign: "center",
    marginleft: horizontalScale(-20),
    top: verticalScale(50),
    width: "100%",
    fontSize: GlobalStyles.FontSize.size_10xl,
    color: GlobalStyles.Color.indigo_100,
  },
  quickSecuredBanking: {
    fontSize: GlobalStyles.FontSize.size_2xl,
    fontWeight: "700",
    color: GlobalStyles.Color.blue_100,
    width: "100%",
    top: "75%",
    textAlign: "center",
  },
  maskGroup259: {
    marginTop: verticalScale(-140.5),
    height: verticalScale(337),
    top: "50%",
    width:"100%"
  },
  maskGroup261Parent: {
    width: "100%",
    height: verticalScale(605),
  },
  logoAnimation3: {
    backgroundColor: GlobalStyles.Color.gray_300,
    flex: 1,
    width: "100%",
    height: "100%",
    paddingTop: GlobalStyles.Padding.padding_xl,
  },
});

export default LogoAnimation3;
