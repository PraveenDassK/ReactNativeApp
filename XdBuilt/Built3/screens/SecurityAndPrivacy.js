import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import GlobalStyles from "../GlobalStyles";

const SecurityAndPrivacy = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.securityAndPrivacy}>
      <View style={styles.securityAndPrivacyChild} />
      <Text style={[styles.hello, styles.mt9, styles.mr98]}>
        Security and Privacy
      </Text>
      <Pressable
        style={[styles.iconFeatherArrowLeftWrapper, styles.mt_766]}
        onPress={() => navigation.navigate("Settings")}
      >
        <Image
          style={[
            styles.iconFeatherArrowLeft,
            styles.component22411ItemPosition,
          ]}
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
          style={[styles.component22411Item, styles.component22411ItemPosition]}
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
          style={[styles.component22411Item, styles.component22411ItemPosition]}
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
  mt9: {
    marginTop: GlobalStyles.Margin.margin_17xs,
  },
  mr98: {
    marginRight: 98,
  },
  mt_766: {
    marginTop: GlobalStyles.Margin.margin_59xs,
  },
  mt913: {
    marginTop: 913,
  },
  mr_546: {
    marginRight: -546,
  },
  mt_25: {
    marginTop: GlobalStyles.Margin.margin_33xs,
  },
  mr89: {
    marginRight: 89,
  },
  mt26: {
    marginTop: GlobalStyles.Margin.margin_4xl,
  },
  mr40: {
    marginRight: GlobalStyles.Margin.margin_17xl,
  },
  mt38: {
    marginTop: 38,
  },
  mt41: {
    marginTop: GlobalStyles.Margin.margin_19xl,
  },
  mt35: {
    marginTop: GlobalStyles.Margin.margin_13xl,
  },
  mt_18: {
    marginTop: GlobalStyles.Margin.margin_31xs,
  },
  mr172: {
    marginRight: GlobalStyles.Margin.margin_52xl,
  },
  mt_23: {
    marginTop: GlobalStyles.Margin.margin_32xs,
  },
  mr202: {
    marginRight: 202,
  },
  mr177: {
    marginRight: 177,
  },
  mt_17: {
    marginTop: GlobalStyles.Margin.margin_30xs,
  },
  mr145: {
    marginRight: 145,
  },
  mt_41: {
    marginTop: GlobalStyles.Margin.margin_38xs,
  },
  mr55: {
    marginRight: GlobalStyles.Margin.margin_30xl,
  },
  mt_39: {
    marginTop: -39,
  },
  mt_44: {
    marginTop: GlobalStyles.Margin.margin_40xs,
  },
  mt_14: {
    marginTop: GlobalStyles.Margin.margin_27xs,
  },
  mr315: {
    marginRight: 315,
  },
  mt_15: {
    marginTop: GlobalStyles.Margin.margin_28xs,
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
  component22411ItemPosition: {
    left: "50%",
    position: "absolute",
  },
  withTypo: {
    color: GlobalStyles.Color.gray_1300,
    lineHeight: 14,
    fontSize: GlobalStyles.FontSize.size_sm,
    fontFamily: GlobalStyles.FontFamily.helvetica,
    textAlign: "left",
    fontWeight: "700",
  },
  childLayout: {
    borderRadius: GlobalStyles.Border.br_xs,
    position: "absolute",
  },
  component22411Layout: {
    height: 26,
    width: 46,
  },
  iconFaceIdLayout: {
    height: 20,
    width: 20,
  },
  securityAndPrivacyChild: {
    width: 375,
    height: 812,
    backgroundColor: GlobalStyles.Color.gray_300,
  },
  hello: {
    fontSize: GlobalStyles.FontSize.size_6xl,
    fontFamily: GlobalStyles.FontFamily.typoGrotesk,
    color: GlobalStyles.Color.indigo,
    textAlign: "left",
    fontWeight: "700",
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
    fontSize: GlobalStyles.FontSize.size_2xs,
    color: GlobalStyles.Color.gray_900,
    fontFamily: GlobalStyles.FontFamily.helvetica,
    textAlign: "left",
    fontWeight: "700",
  },
  changePasscode: {
    width: 257,
  },
  securityAndPrivacyItem: {
    borderRadius: GlobalStyles.Border.br_md,
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
    top: 0,
    left: 0,
    backgroundColor: GlobalStyles.Color.gray_700,
  },
  component22412Item: {
    top: 3,
    left: 3,
    position: "absolute",
    width: 20,
  },
  iconMetroEye: {
    height: 11,
    width: 17,
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
