import * as React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import GlobalStyles from "../GlobalStyles";

const Onboarding11 = () => {
  return (
    <View style={styles.onboarding1}>
      <Image
        style={styles.maskGroup261}
        resizeMode="cover"
        source={require("../assets/mask-group-261.png")}
      />
      <View style={[styles.onboarding1Inner, styles.mt84_95]}>
        <View style={[styles.groupChild, styles.helloPosition]} />
      </View>
      <View style={[styles.helloParent, styles.mt_686_05, styles.ml1]}>
        <Text style={[styles.hello, styles.helloPosition]}>
          <Text style={styles.manageYourFinances}>
            <Text style={styles.manageYourFinances1}>Manage your Finances</Text>
          </Text>
          <Text style={styles.manageYourFinances}>
            <Text style={styles.withYourPocket1}>With Your Pocket</Text>
          </Text>
        </Text>
        <Image
          style={styles.card1Icon}
          resizeMode="cover"
          source={require("../assets/card-11.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mt84_95: {
    marginTop: 84.95,
  },
  mt_686_05: {
    marginTop: -686.05,
  },
  ml1: {
    marginLeft: GlobalStyles.Margin.margin_7xs,
  },
  helloPosition: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  maskGroup261: {
    height: 132,
    width: 375,
  },
  groupChild: {
    right: 0,
    bottom: 0,
    backgroundColor: GlobalStyles.Color.gray_200,
  },
  onboarding1Inner: {
    height: 812,
    width: 375,
  },
  manageYourFinances1: {
    fontWeight: "700",
    fontFamily: GlobalStyles.FontFamily.typoGrotesk,
  },
  manageYourFinances: {
    margin: GlobalStyles.Margin.margin_8xs,
  },
  withYourPocket1: {
    fontFamily: GlobalStyles.FontFamily.typoGrotesk,
  },
  hello: {
    fontSize: GlobalStyles.FontSize.size_8xl,
    lineHeight: 35,
    color: GlobalStyles.Color.indigo_100,
    textAlign: "center",
  },
  card1Icon: {
    right: -109,
    bottom: -150,
    left: 42,
    maxWidth: "100%",
    overflow: "hidden",
    height: 449,
    position: "absolute",
  },
  helloParent: {
    width: 280,
    height: 469,
  },
  onboarding1: {
    backgroundColor: GlobalStyles.Color.white,
    flex: 1,
    width: "100%",
    alignItems: "center",
  },
});

export default Onboarding11;
