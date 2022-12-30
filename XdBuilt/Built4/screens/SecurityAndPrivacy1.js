import * as React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import GlobalStyles from "../GlobalStyles";

const SecurityAndPrivacy1 = () => {
  return (
    <View style={styles.securityAndPrivacy1}>
      <View style={styles.securityAndPrivacy1Child} />
      <View style={[styles.homeIndicator, styles.mt401, styles.ml121]} />
      <View style={[styles.statusBarBlack, styles.mt_812]}>
        <View
          style={[styles.rectangle, styles.timePosition, styles.timePosition1]}
        />
        <View style={styles.statusBar}>
          <View
            style={[styles.time, styles.timePosition, styles.timePosition1]}
          >
            <Text style={[styles.text, styles.timePosition]}>9:41</Text>
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
            <View
              style={[
                styles.networkChild,
                styles.networkLayout,
                styles.timePosition,
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
      <Text style={[styles.hello, styles.mt9, styles.ml30]}>About us</Text>
      <View style={[styles.iconFeatherArrowLeftWrapper, styles.mt2]}>
        <Image
          style={[styles.iconFeatherArrowLeft, styles.networkPosition]}
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
  mt401: {
    marginTop: 401,
  },
  ml121: {
    marginLeft: GlobalStyles.Margin.margin_54xl,
  },
  mt_812: {
    marginTop: GlobalStyles.Margin.margin_90xs,
  },
  mt9: {
    marginTop: GlobalStyles.Margin.margin_25xs,
  },
  ml30: {
    marginLeft: GlobalStyles.Margin.margin_sm,
  },
  mt2: {
    marginTop: GlobalStyles.Margin.margin_31xs,
  },
  mt22: {
    marginTop: GlobalStyles.Margin.margin_10xs,
  },
  ml25: {
    marginLeft: GlobalStyles.Margin.margin_7xs,
  },
  mt42: {
    marginTop: GlobalStyles.Margin.margin_13xl,
  },
  mt_16: {
    marginTop: GlobalStyles.Margin.margin_43xs,
  },
  ml75: {
    marginLeft: GlobalStyles.Margin.margin_36xl,
  },
  mt_17: {
    marginTop: GlobalStyles.Margin.margin_44xs,
  },
  ml73: {
    marginLeft: GlobalStyles.Margin.margin_34xl,
  },
  mt_84: {
    marginTop: -84,
  },
  ml45: {
    marginLeft: GlobalStyles.Margin.margin_16xl,
  },
  mt_14: {
    marginTop: GlobalStyles.Margin.margin_40xs,
  },
  ml47: {
    marginLeft: GlobalStyles.Margin.margin_18xl,
  },
  mt_119: {
    marginTop: -119,
  },
  ml48: {
    marginLeft: GlobalStyles.Margin.margin_19xl,
  },
  ml46: {
    marginLeft: GlobalStyles.Margin.margin_17xl,
  },
  mt18: {
    marginTop: GlobalStyles.Margin.margin_15xs,
  },
  ml49: {
    marginLeft: GlobalStyles.Margin.margin_20xl,
  },
  timePosition: {
    left: 0,
    position: "absolute",
  },
  timePosition1: {
    bottom: 0,
    left: 0,
    top: 0,
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
  groupPosition: {
    borderRadius: GlobalStyles.Border.br_5xl,
    top: "50%",
    left: 0,
    right: 0,
    position: "absolute",
    backgroundColor: GlobalStyles.Color.white,
  },
  securityAndPrivacy1Child: {
    height: 812,
    width: 375,
    backgroundColor: GlobalStyles.Color.gray_300,
  },
  homeIndicator: {
    borderRadius: GlobalStyles.Border.br_8xl,
    backgroundColor: GlobalStyles.Color.black,
    width: 134,
    height: 5,
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
    textAlign: "left",
    top: 0,
  },
  time: {
    width: 40,
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
    backgroundColor: GlobalStyles.Color.gray_1400,
    borderRadius: GlobalStyles.Border.br_7xs,
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
    top: "50%",
    position: "absolute",
  },
  statusBarBlack: {
    height: 44,
    width: 375,
  },
  hello: {
    fontSize: GlobalStyles.FontSize.size_8xl,
    fontWeight: "700",
    fontFamily: GlobalStyles.FontFamily.typoGrotesk,
    color: GlobalStyles.Color.indigo,
    textAlign: "left",
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
    fontSize: GlobalStyles.FontSize.size_base,
    fontFamily: GlobalStyles.FontFamily.helvetica,
    color: GlobalStyles.Color.gray_1600,
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
