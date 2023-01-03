import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import GlobalStyles from "../GlobalStyles";

const LogoAnimation32 = () => {
  return (
    <View style={styles.logoAnimation32}>
      <View style={styles.layer12Parent}>
        <Image
          style={styles.layer12Icon}
          resizeMode="cover"
          source={require("../assets/layer-122.png")}
        />
        <Text style={[styles.hello, styles.helloTypo]}>
          Your account has beencreated successfully
        </Text>
        <Text style={[styles.hello1, styles.helloTypo]}>Whoop!</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  helloTypo: {
    textAlign: "center",
    fontFamily: GlobalStyles.FontFamily.typoGrotesk,
    fontWeight: "700",
    position: "absolute",
  },
  layer12Icon: {
    marginTop: -76,
    marginLeft: -71,
    top: "50%",
    left: "50%",
    width: 128,
    height: 136,
    position: "absolute",
  },
  hello: {
    top: 288,
    left: 0,
    fontSize: GlobalStyles.FontSize.size_8xl,
    lineHeight: 30,
    color: GlobalStyles.Color.indigo_100,
  },
  hello1: {
    top: 0,
    left: 73,
    fontSize: GlobalStyles.FontSize.size_11xl,
    color: GlobalStyles.Color.gray_1300,
  },
  layer12Parent: {
    width: 284,
    height: 344,
  },
  logoAnimation32: {
    backgroundColor: GlobalStyles.Color.white,
    flex: 1,
    width: "100%",
    paddingLeft: GlobalStyles.Padding.padding_3xs,
    paddingTop: GlobalStyles.Padding.padding_10xl,
    paddingRight: GlobalStyles.Padding.padding_5xs,
  },
});

export default LogoAnimation32;
