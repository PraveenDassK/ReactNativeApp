import * as React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import GlobalStyles from "../GlobalStyles";

const SecurityAndPrivacy1 = () => {
  return (
    <View style={styles.securityAndPrivacy1}>
      <View style={styles.securityAndPrivacy1Child} />
      <Text style={[styles.hello, styles.mt9, styles.ml30]}>About us</Text>
      <View style={[styles.iconFeatherArrowLeftWrapper, styles.mt_766]}>
        <Image
          style={styles.iconFeatherArrowLeft}
          resizeMode="cover"
          source={require("../assets/icon-featherarrowleft.png")}
        />
      </View>
      <View style={[styles.securityAndPrivacy1Inner, styles.mt22, styles.ml25]}>
        <View style={[styles.groupChild, styles.groupPosition]} />
      </View>
      <View style={[styles.groupView, styles.mt42, styles.ml25]}>
        <View style={[styles.groupItem, styles.groupPosition]} />
      </View>
      <Text style={[styles.ourBlog, styles.mt_16, styles.ml75]}>Our blog</Text>
      <Text
        style={[styles.ourBlog, styles.mt_16, styles.ml75]}
      >{`Follow us on Twitter `}</Text>
      <Text
        style={[styles.ourBlog, styles.mt_17, styles.ml75]}
      >{`Like us on Facebook `}</Text>
      <Text
        style={[styles.ourBlog, styles.mt_16, styles.ml73]}
      >{`Rate us on the App Store `}</Text>
      <Text
        style={[styles.ourBlog, styles.mt22, styles.ml73]}
      >{`Tell us how to improve `}</Text>
      <Image
        style={[styles.starIcon, styles.mt_84, styles.ml45]}
        resizeMode="cover"
        source={require("../assets/star.png")}
      />
      <Image
        style={[styles.fqIcon, styles.mt_14, styles.ml47]}
        resizeMode="cover"
        source={require("../assets/fq.png")}
      />
      <Image
        style={[styles.fqIcon, styles.mt_119, styles.ml48]}
        resizeMode="cover"
        source={require("../assets/blog.png")}
      />
      <Image
        style={[styles.twitterIcon, styles.mt22, styles.ml46]}
        resizeMode="cover"
        source={require("../assets/twitter.png")}
      />
      <Image
        style={[styles.facebookIcon, styles.mt18, styles.ml49]}
        resizeMode="cover"
        source={require("../assets/facebook.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mt9: {
    marginTop: GlobalStyles.Margin.margin_17xs,
  },
  ml30: {
    marginLeft: GlobalStyles.Margin.margin_8xl,
  },
  mt_766: {
    marginTop: GlobalStyles.Margin.margin_59xs,
  },
  mt22: {
    marginTop: GlobalStyles.Margin.margin_md,
  },
  ml25: {
    marginLeft: GlobalStyles.Margin.margin_3xl,
  },
  mt42: {
    marginTop: GlobalStyles.Margin.margin_20xl,
  },
  mt_16: {
    marginTop: GlobalStyles.Margin.margin_29xs,
  },
  ml75: {
    marginLeft: GlobalStyles.Margin.margin_38xl,
  },
  mt_17: {
    marginTop: GlobalStyles.Margin.margin_30xs,
  },
  ml73: {
    marginLeft: GlobalStyles.Margin.margin_37xl,
  },
  mt_84: {
    marginTop: -84,
  },
  ml45: {
    marginLeft: GlobalStyles.Margin.margin_23xl,
  },
  mt_14: {
    marginTop: GlobalStyles.Margin.margin_27xs,
  },
  ml47: {
    marginLeft: GlobalStyles.Margin.margin_25xl,
  },
  mt_119: {
    marginTop: -119,
  },
  ml48: {
    marginLeft: GlobalStyles.Margin.margin_26xl,
  },
  ml46: {
    marginLeft: GlobalStyles.Margin.margin_24xl,
  },
  mt18: {
    marginTop: GlobalStyles.Margin.margin_3xs,
  },
  ml49: {
    marginLeft: GlobalStyles.Margin.margin_27xl,
  },
  groupPosition: {
    borderRadius: GlobalStyles.Border.br_4xl,
    left: 0,
    right: 0,
    top: "50%",
    position: "absolute",
    backgroundColor: GlobalStyles.Color.white,
  },
  securityAndPrivacy1Child: {
    width: 375,
    height: 812,
    backgroundColor: GlobalStyles.Color.gray_300,
  },
  hello: {
    fontSize: GlobalStyles.FontSize.size_6xl,
    fontWeight: "700",
    fontFamily: GlobalStyles.FontFamily.typoGrotesk,
    color: GlobalStyles.Color.indigo,
    textAlign: "left",
  },
  iconFeatherArrowLeft: {
    marginLeft: -0.5,
    bottom: 4,
    left: "50%",
    width: 17,
    height: 17,
    position: "absolute",
  },
  iconFeatherArrowLeftWrapper: {
    width: 55,
    height: 45,
    backgroundColor: GlobalStyles.Color.gray_300,
  },
  groupChild: {
    marginTop: -53,
    height: 106,
  },
  securityAndPrivacy1Inner: {
    height: 106,
    width: 326,
  },
  groupItem: {
    marginTop: -72,
    height: 144,
  },
  groupView: {
    height: 144,
    width: 326,
  },
  ourBlog: {
    fontSize: GlobalStyles.FontSize.size_sm,
    fontFamily: GlobalStyles.FontFamily.helvetica,
    color: GlobalStyles.Color.gray_1500,
    textAlign: "left",
  },
  starIcon: {
    height: 19,
    width: 20,
  },
  fqIcon: {
    width: 16,
    height: 17,
  },
  twitterIcon: {
    width: 20,
    height: 17,
  },
  facebookIcon: {
    width: 12,
    height: 21,
  },
  securityAndPrivacy1: {
    flex: 1,
    width: "100%",
    backgroundColor: GlobalStyles.Color.white,
  },
});

export default SecurityAndPrivacy1;
