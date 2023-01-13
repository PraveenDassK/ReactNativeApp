import * as React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import GlobalStyles from "../../GlobalStyles";

const SecurityAndPrivacy1 = () => {
  return (
    <View style={styles.securityAndPrivacy1}>
      <Image
            style={[styles.arrowCircle, styles.arrowPosition]}
            resizeMode="cover"
            source={require("../assets/icon-featherarrowleft@3x.png")}
          />
      <View style={styles.helloParent}>
        <Text style={styles.hello}>About us</Text>
        <View style={[styles.rectangleWrapper, styles.groupChildPosition]}>
          <View
            style={[
              styles.groupChild,
              styles.groupLayout,
              styles.groupChildPosition,
            ]}
          />
        </View>
        <View style={[styles.rectangleContainer, styles.groupItemPosition]}>
          <View
            style={[
              styles.groupItem,
              styles.groupItemPosition,
              styles.groupLayout,
            ]}
          />
        </View>
        <Text style={[styles.ourBlog, styles.ourBlogTypo]}>Our blog</Text>
        <Text
          style={[styles.followUsOnTwitter, styles.ourBlogTypo]}
        >{`Follow us on Twitter `}</Text>
        <Text
          style={[styles.likeUsOnFacebook, styles.ourBlogTypo]}
        >{`Like us on Facebook `}</Text>
        <Text
          style={[
            styles.rateUsOnTheAppStore,
            styles.tellUsHowToImprovePosition,
          ]}
        >{`Rate us on the App Store `}</Text>
        <Text
          style={[styles.tellUsHowToImprove, styles.tellUsHowToImprovePosition]}
        >{`Tell us how to improve `}</Text>
        <Image
          style={styles.starIcon}
          resizeMode="cover"
          source={require("../assets/star@3x.png")}
        />
        <Image
          style={[styles.fqIcon, styles.iconPosition, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/fq@3x.png")}
        />
        <Image
          style={[styles.blogIcon, styles.iconPosition, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/blog@3x.png")}
        />
        <Image
          style={[styles.twitterIcon, styles.iconPosition]}
          resizeMode="cover"
          source={require("../assets/twitter@3x.png")}
        />
        <Image
          style={styles.facebookIcon}
          resizeMode="cover"
          source={require("../assets/facebook@3x.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupChildPosition: {
    height: 106,
    left: 0,
    right: 0,
    position: "absolute",
  },
  groupLayout: {
    borderRadius: GlobalStyles.Border.br_5xl,
    top: "50%",
    backgroundColor: GlobalStyles.Color.white,
  },
  groupItemPosition: {
    height: 144,
    left: 0,
    right: 0,
    position: "absolute",
  },
  ourBlogTypo: {
    color: GlobalStyles.Color.gray_1700,
    // fontFamily: GlobalStyles.FontFamily.helvetica,
    fontSize: GlobalStyles.FontSize.size_base,
    left: "50%",
    marginLeft: -113,
    textAlign: "left",
    position: "absolute",
  },
  tellUsHowToImprovePosition: {
    left: 48,
    color: GlobalStyles.Color.gray_1700,
    // fontFamily: GlobalStyles.FontFamily.helvetica,
    fontSize: GlobalStyles.FontSize.size_base,
    top: "50%",
    textAlign: "left",
    position: "absolute",
  },
  iconPosition: {
    height: 17,
    top: "50%",
    position: "absolute",
  },
  iconLayout: {
    width: 16,
    height: 17,
  },
  hello: {
    top: 0,
    left: 5,
    fontSize: GlobalStyles.FontSize.size_8xl,
    fontWeight: "700",
    // fontFamily: GlobalStyles.FontFamily.typoGrotesk,
    color: GlobalStyles.Color.indigo_100,
    textAlign: "left",
    position: "absolute",
  },
  groupChild: {
    marginTop: -53,
  },
  rectangleWrapper: {
    marginTop: -109,
    top: "50%",
  },
  groupItem: {
    marginTop: -72,
  },
  rectangleContainer: {
    bottom: 0,
  },
  ourBlog: {
    marginTop: 42,
    top: "50%",
  },
  followUsOnTwitter: {
    marginTop: 80,
    top: "50%",
  },
  likeUsOnFacebook: {
    bottom: 26,
  },
  rateUsOnTheAppStore: {
    marginTop: -82,
  },
  tellUsHowToImprove: {
    marginTop: -44,
  },
  starIcon: {
    marginTop: -86.75,
    left: 20,
    height: 19,
    width: 20,
    top: "50%",
    position: "absolute",
  },
  fqIcon: {
    marginTop: -44.5,
    left: 22,
  },
  blogIcon: {
    marginTop: 39.25,
    left: 23,
  },
  twitterIcon: {
    marginTop: 77.57,
    left: 21,
    width: 20,
  },
  facebookIcon: {
    bottom: 25,
    left: 24,
    width: 12,
    height: 21,
    position: "absolute",
  },
  helloParent: {
    width: 326,
    height: 316,
  },
  arrowPosition: {
    top: "6%",
    position: "absolute",
  },
  arrowCircle: {
    marginTop: -10.11,
    marginLeft: 6.54,
    width: 15,
    height: 15,
  },
  securityAndPrivacy1: {
    flex: 1,
    width: "100%",
    paddingLeft: GlobalStyles.Padding.padding_7xs,
    paddingTop: GlobalStyles.Padding.padding_xs,
    paddingRight: GlobalStyles.Padding.padding_8xs,
    backgroundColor: GlobalStyles.Color.gray_100,
  },
});

export default SecurityAndPrivacy1;
