import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";

import GlobalStyles from "../../GlobalStyles";

const LogoAnimation3 = () => {
  

  return (
    <Pressable
      style={styles.logoAnimation3}
      onPress={() => navigation.navigate("Onboarding1")}
    >
      <View style={styles.maskGroup261Parent}>
        <Image
          style={[styles.maskGroup261, styles.maskGroupLayout]}
          resizeMode="cover"
          source={require("../assets/mask-group-261@3x.png")}
        />
        <Image
          style={styles.layer12Icon}
          resizeMode="cover"
          source={require("../assets/layer-129@3x.png")}
        />
        <Text style={[styles.hello, styles.helloFlexBox]}>Welcome to</Text>
        <Text
          style={[styles.quickSecuredBanking, styles.helloFlexBox]}
        >{`Quick & Secured Banking`}</Text>
        <Image
          style={[styles.maskGroup259, styles.maskGroupLayout]}
          resizeMode="cover"
          source={require("../assets/mask-group-259@3x.png")}
        />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  maskGroupLayout: {
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  helloFlexBox: {
    textAlign: "center",
    position: "absolute",
  },
  maskGroup261: {
    right: 0,
    bottom: 0,
    left: 0,
    height: 132,
  },
  layer12Icon: {
    marginTop: -165.5,
    marginLeft: -63.5,
    left: "50%",
    width: 128,
    height: 136,
    top: "50%",
    position: "absolute",
  },
  hello: {
    top: 0,
    left: 100,
    fontSize: GlobalStyles.FontSize.size_10xl,
    // fontFamily: GlobalStyles.FontFamily.typoGrotesk,
    color: GlobalStyles.Color.indigo_100,
  },
  quickSecuredBanking: {
    marginTop: 76.5,
    left: 25,
    fontSize: GlobalStyles.FontSize.size_2xl,
    lineHeight: 16,
    // fontFamily: GlobalStyles.FontFamily.helvetica,
    color: GlobalStyles.Color.blue_100,
    width: 326,
    top: "50%",
  },
  maskGroup259: {
    marginTop: -140.5,
    right: 17,
    left: 21,
    height: 337,
    top: "50%",
  },
  maskGroup261Parent: {
    width: 375,
    height: 605,
  },
  logoAnimation3: {
    backgroundColor: GlobalStyles.Color.gray_300,
    flex: 1,
    width: "100%",
    paddingTop: GlobalStyles.Padding.padding_xl,
  },
});

export default LogoAnimation3;
