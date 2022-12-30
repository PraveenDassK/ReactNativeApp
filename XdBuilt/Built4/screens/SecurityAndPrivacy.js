import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import GlobalStyles from "../GlobalStyles";

const SecurityAndPrivacy = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.securityAndPrivacy}>
      <View style={styles.securityAndPrivacyChild} />
      <View style={[styles.homeIndicator, styles.mt377, styles.mr120]} />
      <View style={[styles.statusBarBlack, styles.mt_812]}>
        <View style={[styles.rectangle, styles.timePosition]} />
        <View style={styles.statusBar}>
          <View style={[styles.time, styles.timePosition]}>
            <Text style={styles.text}>9:41</Text>
          </View>
          <Image
            style={[styles.batteryIcon, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/icon-awesomebatterythreequarters.png")}
          />
          <Image
            style={[styles.wifiIcon, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/icon-awesomewifi.png")}
          />
          <View style={[styles.network, styles.iconPosition]}>
            <View style={[styles.networkChild, styles.networkLayout]} />
            <View
              style={[
                styles.networkItem,
                styles.networkItemPosition,
                styles.networkLayout,
              ]}
            />
            <View
              style={[
                styles.networkInner,
                styles.networkItemPosition,
                styles.networkLayout,
              ]}
            />
            <View style={[styles.rectangleView, styles.networkLayout]} />
          </View>
        </View>
      </View>
      <Text style={[styles.hello, styles.mt9, styles.mr98]}>
        Security and Privacy
      </Text>
      <Pressable
        style={[styles.iconFeatherArrowLeftWrapper, styles.mt2]}
        onPress={() => navigation.navigate("Settings")}
      >
        <Image
          style={[styles.iconFeatherArrowLeft, styles.networkItemPosition]}
          resizeMode="cover"
          source={require("../assets/icon-featherarrowleft.png")}
        />
      </Pressable>
      <Text style={[styles.hello1, styles.mt913, styles.mr_546]}>Security</Text>
      <Text
        style={[
          styles.changePasscode,
          styles.mt_25,
          styles.mr89,
          styles.withTypo,
        ]}
      >
        Change Passcode
      </Text>
      <View style={[styles.securityAndPrivacyItem, styles.mt26, styles.mr40]} />
      <View style={[styles.securityAndPrivacyItem, styles.mt38, styles.mr40]} />
      <View style={[styles.securityAndPrivacyItem, styles.mt41, styles.mr40]} />
      <View style={[styles.securityAndPrivacyItem, styles.mt35, styles.mr40]} />
      <Text
        style={[
          styles.signInWithFaceId,
          styles.mt_18,
          styles.mr172,
          styles.withTypo,
        ]}
      >{`Sign in with face ID `}</Text>
      <Text
        style={[
          styles.hideBalances,
          styles.mt_23,
          styles.mr202,
          styles.withTypo,
        ]}
      >
        Hide balances
      </Text>
      <Text
        style={[
          styles.shareWithFriends,
          styles.mt_18,
          styles.mr177,
          styles.withTypo,
        ]}
      >{`Share with friends `}</Text>
      <Text
        style={[
          styles.messagingWithFriends,
          styles.mt_17,
          styles.mr145,
          styles.withTypo,
        ]}
      >
        Messaging with friends
      </Text>
      <View style={[styles.component22411Layout, styles.mt_41, styles.mr55]}>
        <View style={[styles.component22411Child, styles.childLayout]} />
        <Image
          style={[styles.component22411Item, styles.networkItemPosition]}
          resizeMode="cover"
          source={require("../assets/ellipse-350.png")}
        />
      </View>
      <View style={[styles.component22411Layout, styles.mt_39, styles.mr55]}>
        <View
          style={[
            styles.component22412Child,
            styles.childLayout,
            styles.component22411Layout,
          ]}
        />
        <Image
          style={[styles.component22412Item, styles.iconFaceIdLayout]}
          resizeMode="cover"
          source={require("../assets/ellipse-350.png")}
        />
      </View>
      <View style={[styles.component22411Layout, styles.mt_44, styles.mr55]}>
        <View
          style={[
            styles.component22412Child,
            styles.childLayout,
            styles.component22411Layout,
          ]}
        />
        <Image
          style={[styles.component22412Item, styles.iconFaceIdLayout]}
          resizeMode="cover"
          source={require("../assets/ellipse-350.png")}
        />
      </View>
      <View style={[styles.component22411Layout, styles.mt_41, styles.mr55]}>
        <View
          style={[
            styles.component22412Child,
            styles.childLayout,
            styles.component22411Layout,
          ]}
        />
        <Image
          style={[styles.component22412Item, styles.iconFaceIdLayout]}
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
      <View style={[styles.component22411Layout, styles.mt_26, styles.mr55]}>
        <View style={[styles.component22411Child, styles.childLayout]} />
        <Image
          style={[styles.component22411Item, styles.networkItemPosition]}
          resizeMode="cover"
          source={require("../assets/ellipse-350.png")}
        />
      </View>
      <Image
        style={[styles.iconFaceIdLayout, styles.mt_14, styles.mr312]}
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
    marginRight: GlobalStyles.Margin.margin_53xl,
  },
  mt_812: {
    marginTop: GlobalStyles.Margin.margin_90xs,
  },
  mt9: {
    marginTop: GlobalStyles.Margin.margin_25xs,
  },
  mr98: {
    marginRight: 98,
  },
  mt2: {
    marginTop: GlobalStyles.Margin.margin_31xs,
  },
  mt913: {
    marginTop: 913,
  },
  mr_546: {
    marginRight: -546,
  },
  mt_25: {
    marginTop: GlobalStyles.Margin.margin_47xs,
  },
  mr89: {
    marginRight: 89,
  },
  mt26: {
    marginTop: GlobalStyles.Margin.margin_6xs,
  },
  mr40: {
    marginRight: GlobalStyles.Margin.margin_10xl,
  },
  mt38: {
    marginTop: GlobalStyles.Margin.margin_8xl,
  },
  mt41: {
    marginTop: GlobalStyles.Margin.margin_12xl,
  },
  mt35: {
    marginTop: GlobalStyles.Margin.margin_5xl,
  },
  mt_18: {
    marginTop: GlobalStyles.Margin.margin_45xs,
  },
  mr172: {
    marginRight: GlobalStyles.Margin.margin_68xl,
  },
  mt_23: {
    marginTop: GlobalStyles.Margin.margin_46xs,
  },
  mr202: {
    marginRight: GlobalStyles.Margin.margin_74xl,
  },
  mr177: {
    marginRight: 177,
  },
  mt_17: {
    marginTop: GlobalStyles.Margin.margin_44xs,
  },
  mr145: {
    marginRight: 145,
  },
  mt_41: {
    marginTop: GlobalStyles.Margin.margin_57xs,
  },
  mr55: {
    marginRight: GlobalStyles.Margin.margin_24xl,
  },
  mt_39: {
    marginTop: GlobalStyles.Margin.margin_55xs,
  },
  mt_44: {
    marginTop: GlobalStyles.Margin.margin_59xs,
  },
  mt_14: {
    marginTop: GlobalStyles.Margin.margin_40xs,
  },
  mr315: {
    marginRight: 315,
  },
  mt_15: {
    marginTop: GlobalStyles.Margin.margin_41xs,
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
  timePosition: {
    bottom: 0,
    left: 0,
    top: 0,
    position: "absolute",
  },
  iconPosition: {
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
  networkItemPosition: {
    left: "50%",
    position: "absolute",
  },
  withTypo: {
    color: GlobalStyles.Color.gray_1400,
    lineHeight: 14,
    fontSize: GlobalStyles.FontSize.size_base,
    fontFamily: GlobalStyles.FontFamily.helvetica,
    fontWeight: "700",
    textAlign: "left",
  },
  childLayout: {
    borderRadius: GlobalStyles.Border.br_sm,
    position: "absolute",
  },
  component22411Layout: {
    width: 46,
    height: 26,
  },
  iconFaceIdLayout: {
    height: 20,
    width: 20,
  },
  securityAndPrivacyChild: {
    height: 812,
    width: 375,
    backgroundColor: GlobalStyles.Color.gray_300,
  },
  homeIndicator: {
    borderRadius: GlobalStyles.Border.br_8xl,
    backgroundColor: GlobalStyles.Color.black,
    height: 5,
    width: 134,
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
    left: 0,
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
    left: 0,
    top: 0,
    position: "absolute",
  },
  time: {
    width: 40,
    left: 0,
  },
  batteryIcon: {
    width: 22,
    height: 11,
    right: 0,
  },
  wifiIcon: {
    right: 37,
    height: 12,
    width: 17,
  },
  networkChild: {
    height: 4,
    left: 0,
    position: "absolute",
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
  },
  network: {
    right: 68,
    width: 17,
    height: 11,
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
    fontFamily: GlobalStyles.FontFamily.typoGrotesk,
    color: GlobalStyles.Color.indigo,
    fontWeight: "700",
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
    alignSelf: "flex-start",
    backgroundColor: GlobalStyles.Color.gray_300,
  },
  hello1: {
    fontSize: GlobalStyles.FontSize.size_xs,
    color: GlobalStyles.Color.gray_900,
    fontFamily: GlobalStyles.FontFamily.helvetica,
    fontWeight: "700",
    textAlign: "left",
  },
  changePasscode: {
    width: 257,
  },
  securityAndPrivacyItem: {
    borderRadius: GlobalStyles.Border.br_lg,
    width: 305,
    height: 57,
    backgroundColor: GlobalStyles.Color.white,
  },
  signInWithFaceId: {
    width: 134,
  },
  hideBalances: {
    width: 104,
  },
  shareWithFriends: {
    width: 129,
  },
  messagingWithFriends: {
    width: 161,
  },
  component22411Child: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    backgroundColor: GlobalStyles.Color.blue,
    width: "100%",
  },
  component22411Item: {
    height: "76.92%",
    width: "43.48%",
    top: "11.54%",
    right: "6.52%",
    bottom: "11.54%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  component22412Child: {
    backgroundColor: GlobalStyles.Color.gray_700,
    left: 0,
    top: 0,
  },
  component22412Item: {
    top: 3,
    left: 3,
    position: "absolute",
  },
  iconMetroEye: {
    width: 17,
    height: 11,
  },
  iconAwesomeUserFriends: {
    width: 25,
    height: 18,
  },
  iconFeatherMessageCircle: {
    width: 18,
    height: 18,
  },
  securityAndPrivacy: {
    flex: 1,
    alignItems: "flex-end",
    width: "100%",
    backgroundColor: GlobalStyles.Color.white,
  },
});

export default SecurityAndPrivacy;
