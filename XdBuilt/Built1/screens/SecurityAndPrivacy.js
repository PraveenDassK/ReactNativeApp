import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const SecurityAndPrivacy = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.securityAndPrivacy}>
      <View style={styles.rectangleView} />
      <View style={[styles.homeIndicator, styles.mt377, styles.mr120]} />
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
      <Text style={[styles.hello, styles.mt9, styles.mr98]}>
        Security and Privacy
      </Text>
      <Pressable
        style={[styles.groupPressable, styles.mt2]}
        onPress={() => navigation.navigate("Settings")}
      >
        <Image
          style={styles.iconFeatherArrowLeft}
          resizeMode="cover"
          source={require("../assets/icon-featherarrowleft.png")}
        />
      </Pressable>
      <Text style={[styles.hello1, styles.mt913, styles.mr_546]}>Security</Text>
      <Text style={[styles.changePasscode, styles.mt_25, styles.mr89]}>
        Change Passcode
      </Text>
      <View style={[styles.rectangleView5, styles.mt26, styles.mr40]} />
      <View style={[styles.rectangleView6, styles.mt38, styles.mr40]} />
      <View style={[styles.rectangleView7, styles.mt41, styles.mr40]} />
      <View style={[styles.rectangleView8, styles.mt35, styles.mr40]} />
      <Text
        style={[styles.signInWithFaceID, styles.mt_18, styles.mr172]}
      >{`Sign in with face ID `}</Text>
      <Text style={[styles.hideBalances, styles.mt_23, styles.mr202]}>
        Hide balances
      </Text>
      <Text
        style={[styles.shareWithFriends, styles.mt_18, styles.mr177]}
      >{`Share with friends `}</Text>
      <Text style={[styles.messagingWithFriends, styles.mt_17, styles.mr145]}>
        Messaging with friends
      </Text>
      <View style={[styles.component22411, styles.mt_41, styles.mr55]}>
        <View style={styles.rectangleView9} />
        <Image
          style={styles.ellipseIcon}
          resizeMode="cover"
          source={require("../assets/ellipse-350.png")}
        />
      </View>
      <View style={[styles.component22412, styles.mt_39, styles.mr55]}>
        <View style={styles.rectangleView10} />
        <Image
          style={styles.ellipseIcon1}
          resizeMode="cover"
          source={require("../assets/ellipse-350.png")}
        />
      </View>
      <View style={[styles.component22413, styles.mt_44, styles.mr55]}>
        <View style={styles.rectangleView11} />
        <Image
          style={styles.ellipseIcon2}
          resizeMode="cover"
          source={require("../assets/ellipse-350.png")}
        />
      </View>
      <View style={[styles.component22414, styles.mt_41, styles.mr55]}>
        <View style={styles.rectangleView12} />
        <Image
          style={styles.ellipseIcon3}
          resizeMode="cover"
          source={require("../assets/ellipse-350.png")}
        />
      </View>
      <Image
        style={[styles.iconMetroEye, styles.mt_14, styles.mr315]}
        resizeMode="cover"
        source={require("../assets/icon-metroeye.png")}
      />
      <Image
        style={[styles.iconAwesomeUserFriends, styles.mt_15, styles.mr311]}
        resizeMode="cover"
        source={require("../assets/icon-awesomeuserfriends.png")}
      />
      <Image
        style={[styles.iconFeatherMessageCircle, styles.mt_23, styles.mr314]}
        resizeMode="cover"
        source={require("../assets/icon-feathermessagecircle.png")}
      />
      <View style={[styles.component22417, styles.mt_26, styles.mr55]}>
        <View style={styles.rectangleView13} />
        <Image
          style={styles.ellipseIcon4}
          resizeMode="cover"
          source={require("../assets/ellipse-350.png")}
        />
      </View>
      <Image
        style={[styles.iCONFaceId, styles.mt_14, styles.mr312]}
        resizeMode="cover"
        source={require("../assets/iconfaceid.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mt377: {
    marginTop: 377,
  },
  mr120: {
    marginRight: 120,
  },
  mt_812: {
    marginTop: -812,
  },
  mt9: {
    marginTop: 9,
  },
  mr98: {
    marginRight: 98,
  },
  mt2: {
    marginTop: 2,
  },
  mt913: {
    marginTop: 913,
  },
  mr_546: {
    marginRight: -546,
  },
  mt_25: {
    marginTop: -25,
  },
  mr89: {
    marginRight: 89,
  },
  mt26: {
    marginTop: 26,
  },
  mr40: {
    marginRight: 40,
  },
  mt38: {
    marginTop: 38,
  },
  mt41: {
    marginTop: 41,
  },
  mt35: {
    marginTop: 35,
  },
  mt_18: {
    marginTop: -18,
  },
  mr172: {
    marginRight: 172,
  },
  mt_23: {
    marginTop: -23,
  },
  mr202: {
    marginRight: 202,
  },
  mr177: {
    marginRight: 177,
  },
  mt_17: {
    marginTop: -17,
  },
  mr145: {
    marginRight: 145,
  },
  mt_41: {
    marginTop: -41,
  },
  mr55: {
    marginRight: 55,
  },
  mt_39: {
    marginTop: -39,
  },
  mt_44: {
    marginTop: -44,
  },
  mt_14: {
    marginTop: -14,
  },
  mr315: {
    marginRight: 315,
  },
  mt_15: {
    marginTop: -15,
  },
  mr311: {
    marginRight: 311,
  },
  mr314: {
    marginRight: 314,
  },
  mt_26: {
    marginTop: -26,
  },
  mr312: {
    marginRight: 312,
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
  groupPressable: {
    position: "relative",
    backgroundColor: "#f6f5f8",
    width: 55,
    height: 45,
    alignSelf: "flex-start",
  },
  hello1: {
    position: "relative",
    fontSize: 12,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#888",
    textAlign: "left",
  },
  changePasscode: {
    position: "relative",
    fontSize: 14,
    lineHeight: 14,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#272727",
    textAlign: "left",
    width: 257,
  },
  rectangleView5: {
    position: "relative",
    borderRadius: 15,
    backgroundColor: "#fff",
    width: 305,
    height: 57,
  },
  rectangleView6: {
    position: "relative",
    borderRadius: 15,
    backgroundColor: "#fff",
    width: 305,
    height: 57,
  },
  rectangleView7: {
    position: "relative",
    borderRadius: 15,
    backgroundColor: "#fff",
    width: 305,
    height: 57,
  },
  rectangleView8: {
    position: "relative",
    borderRadius: 15,
    backgroundColor: "#fff",
    width: 305,
    height: 57,
  },
  signInWithFaceID: {
    position: "relative",
    fontSize: 14,
    lineHeight: 14,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#272727",
    textAlign: "left",
    width: 134,
  },
  hideBalances: {
    position: "relative",
    fontSize: 14,
    lineHeight: 14,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#272727",
    textAlign: "left",
    width: 104,
  },
  shareWithFriends: {
    position: "relative",
    fontSize: 14,
    lineHeight: 14,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#272727",
    textAlign: "left",
    width: 129,
  },
  messagingWithFriends: {
    position: "relative",
    fontSize: 14,
    lineHeight: 14,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#272727",
    textAlign: "left",
    width: 161,
  },
  rectangleView9: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: 13,
    backgroundColor: "#0101fd",
  },
  ellipseIcon: {
    position: "absolute",
    height: "76.92%",
    width: "43.48%",
    top: "11.54%",
    right: "6.52%",
    bottom: "11.54%",
    left: "50%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  component22411: {
    position: "relative",
    width: 46,
    height: 26,
  },
  rectangleView10: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 13,
    backgroundColor: "#d2d2d2",
    width: 46,
    height: 26,
  },
  ellipseIcon1: {
    position: "absolute",
    top: 3,
    left: 3,
    width: 20,
    height: 20,
  },
  component22412: {
    position: "relative",
    width: 46,
    height: 26,
  },
  rectangleView11: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 13,
    backgroundColor: "#d2d2d2",
    width: 46,
    height: 26,
  },
  ellipseIcon2: {
    position: "absolute",
    top: 3,
    left: 3,
    width: 20,
    height: 20,
  },
  component22413: {
    position: "relative",
    width: 46,
    height: 26,
  },
  rectangleView12: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 13,
    backgroundColor: "#d2d2d2",
    width: 46,
    height: 26,
  },
  ellipseIcon3: {
    position: "absolute",
    top: 3,
    left: 3,
    width: 20,
    height: 20,
  },
  component22414: {
    position: "relative",
    width: 46,
    height: 26,
  },
  iconMetroEye: {
    position: "relative",
    width: 17,
    height: 11,
  },
  iconAwesomeUserFriends: {
    position: "relative",
    width: 25,
    height: 18,
  },
  iconFeatherMessageCircle: {
    position: "relative",
    width: 18,
    height: 18,
  },
  rectangleView13: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: 13,
    backgroundColor: "#0101fd",
  },
  ellipseIcon4: {
    position: "absolute",
    height: "76.92%",
    width: "43.48%",
    top: "11.54%",
    right: "6.52%",
    bottom: "11.54%",
    left: "50%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  component22417: {
    position: "relative",
    width: 46,
    height: 26,
  },
  iCONFaceId: {
    position: "relative",
    width: 20,
    height: 20,
  },
  securityAndPrivacy: {
    position: "relative",
    backgroundColor: "#4b4b4b",
    flex: 1,
    width: "100%",
    flexDirection: "column",
    alignItems: "flex-end",
  },
});

export default SecurityAndPrivacy;
