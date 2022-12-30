import * as React from "react";
import { StyleSheet, View, Pressable, Image, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import GlobalStyles from "../GlobalStyles";

const LogoAnimation3 = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.logoAnimation3}
      onPress={() => navigation.navigate("Onboarding1")}
    >
      <Pressable
        style={styles.logoAnimation3Inner}
        onPress={() => navigation.navigate("Onboarding1")}
      >
        <View style={styles.groupChild} />
      </Pressable>
      <Image
        style={[styles.maskGroup261, styles.mt74]}
        resizeMode="cover"
        source={require("../assets/mask-group-261.png")}
      />
      <Image
        style={[styles.layer12Icon, styles.mt110, styles.ml1]}
        resizeMode="cover"
        source={require("../assets/layer-129.png")}
      />
      <Text style={[styles.hello, styles.mt_616, styles.ml15]}>Welcome to</Text>
      <View style={[styles.homeIndicator, styles.mt_13, styles.ml1]} />
      <Text
        style={[styles.quickSecuredBanking, styles.mt_120]}
      >{`Quick & Secured Banking`}</Text>
      <Image
        style={[styles.maskGroup259, styles.mt_121, styles.ml4]}
        resizeMode="cover"
        source={require("../assets/mask-group-259.png")}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  mt74: {
    marginTop: GlobalStyles.Margin.margin_35xl,
  },
  mt110: {
    marginTop: GlobalStyles.Margin.margin_49xl,
  },
  ml1: {
    marginLeft: GlobalStyles.Margin.margin_32xs,
  },
  mt_616: {
    marginTop: -616,
  },
  ml15: {
    marginLeft: GlobalStyles.Margin.margin_18xs,
  },
  mt_13: {
    marginTop: GlobalStyles.Margin.margin_39xs,
  },
  mt_120: {
    marginTop: -120,
  },
  mt_121: {
    marginTop: -121,
  },
  ml4: {
    marginLeft: GlobalStyles.Margin.margin_29xs,
  },
  groupChild: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: GlobalStyles.Color.gray_300,
  },
  logoAnimation3Inner: {
    height: 812,
    width: 375,
  },
  maskGroup261: {
    height: 132,
    width: 375,
  },
  layer12Icon: {
    width: 128,
    height: 136,
  },
  hello: {
    fontSize: GlobalStyles.FontSize.size_11xl,
    lineHeight: 50,
    fontFamily: GlobalStyles.FontFamily.typoGrotesk,
    color: GlobalStyles.Color.indigo,
    textAlign: "center",
  },
  homeIndicator: {
    borderRadius: GlobalStyles.Border.br_8xl,
    backgroundColor: GlobalStyles.Color.black,
    width: 134,
    height: 5,
  },
  quickSecuredBanking: {
    fontSize: GlobalStyles.FontSize.size_2xl,
    lineHeight: 16,
    fontFamily: GlobalStyles.FontFamily.helvetica,
    color: GlobalStyles.Color.blue,
    width: 326,
    textAlign: "center",
  },
  maskGroup259: {
    width: 337,
    height: 337,
  },
  logoAnimation3: {
    backgroundColor: GlobalStyles.Color.white,
    flex: 1,
    width: "100%",
    alignItems: "center",
  },
});

export default LogoAnimation3;
