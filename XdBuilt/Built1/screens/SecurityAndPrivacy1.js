import * as React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

const SecurityAndPrivacy1 = () => {
  return (
    <View style={styles.securityAndPrivacy1}>
      <View style={styles.rectangleView} />
      <View style={[styles.homeIndicator, styles.mt401, styles.ml121]} />
      <View style={[styles.statusBarBlack, styles.mt_812]}>
        <View style={styles.rectangle} />
        <View style={styles.statusBar}>
          <View style={styles.time}>
            <Text style={styles.text}>9:41</Text>
          </View>
          <Image
            style={styles.batteryIcon}
            resizeMode="cover"
            source={require("../assets/battery.png")}
          />
          <Image
            style={styles.wifiIcon}
            resizeMode="cover"
            source={require("../assets/wifi.png")}
          />
          <View style={styles.network}>
            <View style={styles.rectangleView1} />
            <View style={styles.rectangleView2} />
            <View style={styles.rectangleView3} />
            <View style={styles.rectangleView4} />
          </View>
        </View>
      </View>
      <Text style={[styles.hello, styles.mt9, styles.ml30]}>About us</Text>
      <View style={[styles.groupView, styles.mt2]}>
        <Image
          style={styles.iconFeatherArrowLeft}
          resizeMode="cover"
          source={require("../assets/icon-featherarrowleft.png")}
        />
      </View>
      <View style={[styles.groupView1, styles.mt22, styles.ml25]}>
        <View style={styles.rectangleView5} />
      </View>
      <View style={[styles.groupView2, styles.mt42, styles.ml25]}>
        <View style={styles.rectangleView6} />
      </View>
      <Text style={[styles.ourBlog, styles.mt_16, styles.ml75]}>Our blog</Text>
      <Text
        style={[styles.followUsOnTwitter, styles.mt_16, styles.ml75]}
      >{`Follow us on Twitter `}</Text>
      <Text
        style={[styles.likeUsOnFacebook, styles.mt_17, styles.ml75]}
      >{`Like us on Facebook `}</Text>
      <Text
        style={[styles.rateUsOnTheAppStore, styles.mt_16, styles.ml73]}
      >{`Rate us on the App Store `}</Text>
      <Text
        style={[styles.tellUsHowToImprove, styles.mt22, styles.ml73]}
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
        style={[styles.blogIcon, styles.mt_119, styles.ml48]}
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
    marginLeft: 121,
  },
  mt_812: {
    marginTop: -812,
  },
  mt9: {
    marginTop: 9,
  },
  ml30: {
    marginLeft: 30,
  },
  mt2: {
    marginTop: 2,
  },
  mt22: {
    marginTop: 22,
  },
  ml25: {
    marginLeft: 25,
  },
  mt42: {
    marginTop: 42,
  },
  mt_16: {
    marginTop: -16,
  },
  ml75: {
    marginLeft: 75,
  },
  mt_17: {
    marginTop: -17,
  },
  ml73: {
    marginLeft: 73,
  },
  mt_84: {
    marginTop: -84,
  },
  ml45: {
    marginLeft: 45,
  },
  mt_14: {
    marginTop: -14,
  },
  ml47: {
    marginLeft: 47,
  },
  mt_119: {
    marginTop: -119,
  },
  ml48: {
    marginLeft: 48,
  },
  ml46: {
    marginLeft: 46,
  },
  mt18: {
    marginTop: 18,
  },
  ml49: {
    marginLeft: 49,
  },
  rectangleView: {
    position: "relative",
    backgroundColor: "#f6f5f8",
    width: 375,
    height: 812,
  },
  homeIndicator: {
    position: "relative",
    borderRadius: 100,
    backgroundColor: "#000",
    width: 134,
    height: 5,
  },
  rectangle: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: "#fff",
    shadowColor: "rgba(0, 0, 0, 0.05)",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 6,
    elevation: 6,
    shadowOpacity: 1,
  },
  text: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 20,
    letterSpacing: 0,
    lineHeight: 24,
    fontWeight: "500",
    fontFamily: "Roboto",
    color: "rgba(0, 0, 0, 0.87)",
    textAlign: "left",
  },
  time: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    width: 40,
  },
  batteryIcon: {
    position: "absolute",
    marginTop: -3,
    top: "50%",
    right: 0,
    width: 22,
    height: 11,
  },
  wifiIcon: {
    position: "absolute",
    marginTop: -3,
    top: "50%",
    right: 37,
    width: 17,
    height: 12,
  },
  rectangleView1: {
    position: "absolute",
    bottom: 0,
    left: 0,
    borderRadius: 2,
    backgroundColor: "#272727",
    width: 3,
    height: 4,
  },
  rectangleView2: {
    position: "absolute",
    marginLeft: -3.5,
    bottom: 0,
    left: "50%",
    borderRadius: 2,
    backgroundColor: "#272727",
    width: 3,
    height: 6,
  },
  rectangleView3: {
    position: "absolute",
    marginLeft: 0.5,
    bottom: 0,
    left: "50%",
    borderRadius: 2,
    backgroundColor: "#272727",
    width: 3,
    height: 9,
  },
  rectangleView4: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    borderRadius: 2,
    backgroundColor: "#272727",
    width: 3,
  },
  network: {
    position: "absolute",
    marginTop: -3,
    top: "50%",
    right: 68,
    width: 17,
    height: 11,
  },
  statusBar: {
    position: "absolute",
    marginTop: -15,
    top: "50%",
    right: 16,
    left: 15,
    height: 26,
  },
  statusBarBlack: {
    position: "relative",
    width: 375,
    height: 44,
  },
  hello: {
    position: "relative",
    fontSize: 26,
    fontWeight: "700",
    fontFamily: "Typo Grotesk",
    color: "#00003d",
    textAlign: "left",
  },
  iconFeatherArrowLeft: {
    position: "absolute",
    marginLeft: -0.5,
    bottom: 4,
    left: "50%",
    width: 17,
    height: 17,
  },
  groupView: {
    position: "relative",
    backgroundColor: "#f6f5f8",
    width: 55,
    height: 45,
  },
  rectangleView5: {
    position: "absolute",
    marginTop: -53,
    top: "50%",
    right: 0,
    left: 0,
    borderRadius: 21,
    backgroundColor: "#fff",
    height: 106,
  },
  groupView1: {
    position: "relative",
    width: 326,
    height: 106,
  },
  rectangleView6: {
    position: "absolute",
    marginTop: -72,
    top: "50%",
    right: 0,
    left: 0,
    borderRadius: 21,
    backgroundColor: "#fff",
    height: 144,
  },
  groupView2: {
    position: "relative",
    width: 326,
    height: 144,
  },
  ourBlog: {
    position: "relative",
    fontSize: 14,
    fontFamily: "Helvetica",
    color: "#1a1a1a",
    textAlign: "left",
  },
  followUsOnTwitter: {
    position: "relative",
    fontSize: 14,
    fontFamily: "Helvetica",
    color: "#1a1a1a",
    textAlign: "left",
  },
  likeUsOnFacebook: {
    position: "relative",
    fontSize: 14,
    fontFamily: "Helvetica",
    color: "#1a1a1a",
    textAlign: "left",
  },
  rateUsOnTheAppStore: {
    position: "relative",
    fontSize: 14,
    fontFamily: "Helvetica",
    color: "#1a1a1a",
    textAlign: "left",
  },
  tellUsHowToImprove: {
    position: "relative",
    fontSize: 14,
    fontFamily: "Helvetica",
    color: "#1a1a1a",
    textAlign: "left",
  },
  starIcon: {
    position: "relative",
    width: 20,
    height: 19,
  },
  fqIcon: {
    position: "relative",
    width: 16,
    height: 17,
  },
  blogIcon: {
    position: "relative",
    width: 16,
    height: 17,
  },
  twitterIcon: {
    position: "relative",
    width: 20,
    height: 17,
  },
  facebookIcon: {
    position: "relative",
    width: 12,
    height: 21,
  },
  securityAndPrivacy1: {
    position: "relative",
    backgroundColor: "#4b4b4b",
    flex: 1,
    width: "100%",
    flexDirection: "column",
    alignItems: "flex-start",
  },
});

export default SecurityAndPrivacy1;
