import * as React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import GlobalStyles from "../../GlobalStyles";

const SecurityAndPrivacy = () => {
  return (
    <View style={styles.securityAndPrivacy}>
      <Image
            style={[styles.arrowCircle, styles.arrowPosition]}
            resizeMode="cover"
            source={require("../assets/icon-whitearrow.png")}
        />
      <Text style={[styles.hello, styles.mr_546]}>Security</Text>
      <View style={[styles.helloParent, styles.mt1021, styles.mr40]}>
        <Text style={styles.hello1}>Security and Privacy</Text>
        <Text style={styles.changePasscode}>Change Passcode</Text>
        <View style={[styles.groupChild, styles.groupPosition]} />
        <View style={[styles.groupItem, styles.groupPosition]} />
        <View style={[styles.groupInner, styles.groupPosition]} />
        <View style={[styles.rectangleView, styles.groupPosition]} />
        <Text
          style={[styles.signInWithFaceId, styles.withTypo]}
        >{`Sign in with face ID `}</Text>
        <Text style={[styles.hideBalances, styles.withTypo]}>
          Hide balances
        </Text>
        <Text
          style={[styles.shareWithFriends, styles.withTypo]}
        >{`Share with friends `}</Text>
        <Text style={[styles.messagingWithFriends, styles.withTypo]}>
          Messaging with friends
        </Text>
        <View style={[styles.rectangleParent, styles.groupLayout]}>
          <View style={[styles.groupChild1, styles.groupChildPosition]} />
          <Image
            style={[styles.ellipseIcon, styles.ellipseIconLayout]}
            resizeMode="cover"
            source={require("../assets/ellipse-350@3x.png")}
          />
        </View>
        <View style={[styles.rectangleGroup, styles.groupLayout]}>
          <View style={[styles.groupChild2, styles.groupChildPosition]} />
          <Image
            style={[styles.groupChild3, styles.ellipseIconLayout]}
            resizeMode="cover"
            source={require("../assets/ellipse-350@3x.png")}
          />
        </View>
        <View style={[styles.rectangleContainer, styles.groupLayout]}>
          <View style={[styles.groupChild2, styles.groupChildPosition]} />
          <Image
            style={[styles.groupChild3, styles.ellipseIconLayout]}
            resizeMode="cover"
            source={require("../assets/ellipse-350@3x.png")}
          />
        </View>
        <View style={[styles.groupView, styles.groupLayout]}>
          <View style={[styles.groupChild2, styles.groupChildPosition]} />
          <Image
            style={[styles.groupChild3, styles.ellipseIconLayout]}
            resizeMode="cover"
            source={require("../assets/ellipse-350@3x.png")}
          />
        </View>
        <Image
          style={[styles.iconMetroEye, styles.iconPosition]}
          resizeMode="cover"
          source={require("../assets/icon-metroeye@3x.png")}
        />
        <Image
          style={[styles.iconAwesomeUserFriends, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/icon-awesomeuserfriends@3x.png")}
        />
        <Image
          style={[styles.iconFeatherMessageCircle, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/icon-feathermessagecircle@3x.png")}
        />
        <View style={[styles.rectangleParent, styles.groupLayout]}>
          <View style={[styles.groupChild1, styles.groupChildPosition]} />
          <Image
            style={[styles.ellipseIcon, styles.ellipseIconLayout]}
            resizeMode="cover"
            source={require("../assets/ellipse-350@3x.png")}
          />
        </View>
        <Image
          style={[styles.iconFaceId, styles.iconPosition]}
          resizeMode="cover"
          source={require("../assets/iconfaceid@3x.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mr_546: {
    marginRight: -546,
  },
  mt1021: {
    marginTop: 1021,
  },
  mr40: {
    marginRight: 40,
  },
  groupPosition: {
    height: 57,
    borderRadius: GlobalStyles.Border.br_lg,
    right: 0,
    left: 0,
    position: "absolute",
    backgroundColor: GlobalStyles.Color.white,
  },
  withTypo: {
    left: 40,
    color: GlobalStyles.Color.gray_1400,
    lineHeight: 14,
    fontSize: GlobalStyles.FontSize.size_base,
    position: "absolute",
    textAlign: "left",

    fontWeight: "700",
  },
  groupLayout: {
    height: 26,
    width: 46,
    right: 15,
    position: "absolute",
  },
  groupChildPosition: {
    borderRadius: GlobalStyles.Border.br_sm,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  ellipseIconLayout: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    bottom: "11.54%",
    top: "11.54%",
    width: "43.48%",
    height: "76.92%",
    position: "absolute",
  },
  iconPosition: {
    position: "absolute",
    left: 13,
    top: "50%",
  },
  iconLayout: {
    height: 18,
    position: "absolute",
  },
  hello: {
    fontSize: GlobalStyles.FontSize.size_xs,
    color: GlobalStyles.Color.gray_800,
    textAlign: "left",

    fontWeight: "700",
  },
  hello1: {
    top: 0,
    fontSize: GlobalStyles.FontSize.size_8xl,


    color: GlobalStyles.Color.indigo_100,
    left: 0,
    position: "absolute",
    textAlign: "left",
    fontWeight: "700",
  },
  changePasscode: {
    marginTop: -97.5,
    width: 257,
    color: GlobalStyles.Color.gray_1400,
    lineHeight: 14,
    fontSize: GlobalStyles.FontSize.size_base,
    top: "50%",
    left: 0,
    position: "absolute",
    textAlign: "left",

    fontWeight: "700",
  },
  groupChild: {
    marginTop: -114.5,
    top: "50%",
  },
  groupItem: {
    marginTop: -39.5,
    top: "50%",
  },
  groupInner: {
    marginTop: 35.5,
    top: "50%",
  },
  rectangleView: {
    bottom: 0,
  },
  signInWithFaceId: {
    marginTop: -93.5,
    width: 134,
    top: "50%",
  },
  hideBalances: {
    marginTop: -18.5,
    width: 104,
    top: "50%",
  },
  shareWithFriends: {
    marginTop: 56.5,
    width: 129,
    top: "50%",
  },
  messagingWithFriends: {
    bottom: 23,
    width: 161,
  },
  groupChild1: {
    backgroundColor: GlobalStyles.Color.blue_100,
  },
  ellipseIcon: {
    right: "6.52%",
    left: "50%",
  },
  rectangleParent: {
    marginTop: -98.5,
    top: "50%",
  },
  groupChild2: {
    backgroundColor: GlobalStyles.Color.gray_600,
  },
  groupChild3: {
    right: "50%",
    left: "6.52%",
  },
  rectangleGroup: {
    marginTop: -21.5,
    top: "50%",
  },
  rectangleContainer: {
    marginTop: 48.5,
    top: "50%",
  },
  groupView: {
    bottom: 15,
  },
  iconMetroEye: {
    marginTop: -16.64,
    width: 17,
    height: 11,
    left: 13,
    top: "50%",
  },
  iconAwesomeUserFriends: {
    marginTop: 57.39,
    left: 9,
    width: 25,
    top: "50%",
  },
  iconFeatherMessageCircle: {
    bottom: 20,
    width: 18,
    left: 13,
  },
  iconFaceId: {
    marginTop: -95.24,
    width: 20,
    height: 20,
    left: 13,
    top: "50%",
  },
  helloParent: {
    width: 305,
    height: 335,
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
  securityAndPrivacy: {
    flex: 1,
    paddingLeft: 30,
    alignItems: "flex-end",
    width: "100%",
    backgroundColor: GlobalStyles.Color.white,
  },
});

export default SecurityAndPrivacy;
