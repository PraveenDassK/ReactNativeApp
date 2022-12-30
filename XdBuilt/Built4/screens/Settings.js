import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import GlobalStyles from "../GlobalStyles";

const Settings = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.settings}>
      <Image
        style={styles.path33370Icon}
        resizeMode="cover"
        source={require("../assets/path-33370.png")}
      />
      <Text style={[styles.hello, styles.mt_61, styles.ml30]}>Full Name</Text>
      <Text style={[styles.hello1, styles.mt1, styles.ml30]}>Standard</Text>
      <Image
        style={[styles.settingsChild, styles.mt24, styles.ml288]}
        resizeMode="cover"
        source={require("../assets/ellipse-3158.png")}
      />
      <View style={[styles.helloParent, styles.mt58]}>
        <Text style={styles.hello2}>Log out</Text>
        <Image
          style={styles.iconOpenAccountLogout}
          resizeMode="cover"
          source={require("../assets/icon-openaccountlogout.png")}
        />
      </View>
      <Text
        style={[styles.hello3, styles.mt49, styles.ml136]}
      >{`Terms & Conditions`}</Text>
      <View style={[styles.homeIndicator, styles.mt23, styles.ml121]} />
      <View style={[styles.statusBarBlack, styles.mt_812]}>
        <View
          style={[
            styles.rectangle,
            styles.rectangleShadowBox,
            styles.timePosition,
          ]}
        />
        <View style={styles.statusBar}>
          <View style={[styles.time, styles.timePosition]}>
            <Text style={styles.text}>9:41</Text>
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
            <View style={[styles.networkChild, styles.networkChildLayout]} />
            <View style={[styles.networkItem, styles.networkPosition]} />
            <View style={[styles.networkInner, styles.networkPosition]} />
            <View style={[styles.rectangleView, styles.networkChildLayout]} />
          </View>
        </View>
      </View>
      <Text
        style={[styles.hello4, styles.mt52, styles.ml30]}
      >{`Accounts details `}</Text>
      <View
        style={[
          styles.settingsItem,
          styles.mt7,
          styles.ml25,
          styles.rectangleShadowBox,
        ]}
      />
      <Text style={[styles.hello4, styles.mt_96, styles.ml46]}>Currency</Text>
      <Text style={[styles.hello4, styles.mt14, styles.ml46]}>Account</Text>
      <Text style={[styles.hello4, styles.mt14, styles.ml46]}>Sort Code</Text>
      <View style={[styles.britishPoundsWrapper, styles.mt_15, styles.ml238]}>
        <Text
          style={[styles.britishPounds, styles.textTypo, styles.text1Position]}
        >
          British Pounds
        </Text>
      </View>
      <View style={[styles.wrapper, styles.mt_15, styles.ml262]}>
        <Text style={[styles.text1, styles.textTypo, styles.text1Position]}>
          12345678
        </Text>
      </View>
      <Image
        style={[styles.maskGroup241, styles.mt_17, styles.ml210]}
        resizeMode="cover"
        source={require("../assets/mask-group-241.png")}
      />
      <Image
        style={[styles.iconMaterialContentCopy, styles.mt_18, styles.ml241]}
        resizeMode="cover"
        source={require("../assets/icon-materialcontentcopy.png")}
      />
      <Image
        style={[styles.iconMaterialContentCopy, styles.mt_17, styles.ml241]}
        resizeMode="cover"
        source={require("../assets/icon-materialcontentcopy.png")}
      />
      <Text style={[styles.textTypo, styles.mt_15, styles.ml267]}>
        12-34-56
      </Text>
      <View style={[styles.component2128, styles.mt11, styles.ml_29]}>
        <Pressable
          style={[styles.history, styles.historyPosition]}
          onPress={() => navigation.navigate("Account")}
        >
          <Text style={[styles.account, styles.accountTypo]}>Account</Text>
        </Pressable>
        <Pressable
          style={styles.history1}
          onPress={() => navigation.navigate("Analytics")}
        >
          <Text style={[styles.account, styles.accountTypo]}>Analysis</Text>
        </Pressable>
        <Pressable
          style={styles.history2}
          onPress={() => navigation.navigate("Carbon")}
        >
          <Text style={[styles.account, styles.accountTypo]}>Carbon</Text>
        </Pressable>
        <Text style={[styles.history3, styles.accountTypo]}>Profile</Text>
      </View>
      <Pressable
        style={[styles.component20856Parent, styles.mt34, styles.ml25]}
        onPress={() => navigation.navigate("Plan")}
      >
        <View style={[styles.component20856, styles.timePosition]}>
          <View style={styles.rectangleParent}>
            <View style={[styles.groupChild, styles.historyPosition]} />
            <View style={styles.maskGroup236} />
          </View>
        </View>
        <Text style={[styles.hello8, styles.helloTypo, styles.helloPosition]}>
          My Plan
        </Text>
      </Pressable>
      <Pressable
        style={[styles.component20856Parent, styles.mt13, styles.ml25]}
        onPress={() => navigation.navigate("Account3")}
      >
        <View style={[styles.component20856, styles.timePosition]}>
          <View style={styles.rectangleParent}>
            <View style={[styles.groupChild, styles.historyPosition]} />
            <View style={styles.maskGroup236} />
          </View>
        </View>
        <Text style={[styles.hello8, styles.helloTypo, styles.helloPosition]}>
          Account
        </Text>
      </Pressable>
      <Pressable
        style={[styles.component20856Parent, styles.mt13, styles.ml25]}
        onPress={() => navigation.navigate("SecurityAndPrivacy")}
      >
        <View style={[styles.component20856, styles.timePosition]}>
          <View style={styles.rectangleParent}>
            <View style={[styles.groupChild, styles.historyPosition]} />
            <View style={styles.maskGroup236} />
          </View>
        </View>
        <Text
          style={[styles.hello10, styles.helloTypo, styles.helloPosition]}
        >{`Security & Privacy`}</Text>
      </Pressable>
      <Pressable
        style={[styles.component20856Parent, styles.mt13, styles.ml25]}
        onPress={() => navigation.navigate("SecurityAndPrivacy1")}
      >
        <View style={[styles.component20856, styles.timePosition]}>
          <View style={styles.rectangleParent}>
            <View style={[styles.groupChild, styles.historyPosition]} />
            <View style={styles.maskGroup236} />
          </View>
        </View>
        <Text style={[styles.hello11, styles.helloTypo]}>About us</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  mt_61: {
    marginTop: GlobalStyles.Margin.margin_67xs,
  },
  ml30: {
    marginLeft: GlobalStyles.Margin.margin_sm,
  },
  mt1: {
    marginTop: GlobalStyles.Margin.margin_32xs,
  },
  mt24: {
    marginTop: GlobalStyles.Margin.margin_8xs,
  },
  ml288: {
    marginLeft: GlobalStyles.Margin.margin_90xl,
  },
  mt58: {
    marginTop: GlobalStyles.Margin.margin_26xl,
  },
  mt49: {
    marginTop: GlobalStyles.Margin.margin_20xl,
  },
  ml136: {
    marginLeft: GlobalStyles.Margin.margin_57xl,
  },
  mt23: {
    marginTop: GlobalStyles.Margin.margin_9xs,
  },
  ml121: {
    marginLeft: GlobalStyles.Margin.margin_54xl,
  },
  mt_812: {
    marginTop: GlobalStyles.Margin.margin_90xs,
  },
  mt52: {
    marginTop: GlobalStyles.Margin.margin_21xl,
  },
  mt7: {
    marginTop: GlobalStyles.Margin.margin_27xs,
  },
  ml25: {
    marginLeft: GlobalStyles.Margin.margin_7xs,
  },
  mt_96: {
    marginTop: GlobalStyles.Margin.margin_73xs,
  },
  ml46: {
    marginLeft: GlobalStyles.Margin.margin_17xl,
  },
  mt14: {
    marginTop: GlobalStyles.Margin.margin_20xs,
  },
  mt_15: {
    marginTop: GlobalStyles.Margin.margin_41xs,
  },
  ml238: {
    marginLeft: 238,
  },
  ml262: {
    marginLeft: GlobalStyles.Margin.margin_88xl,
  },
  mt_17: {
    marginTop: GlobalStyles.Margin.margin_44xs,
  },
  ml210: {
    marginLeft: 210,
  },
  mt_18: {
    marginTop: GlobalStyles.Margin.margin_45xs,
  },
  ml241: {
    marginLeft: GlobalStyles.Margin.margin_81xl,
  },
  ml267: {
    marginLeft: 267,
  },
  mt11: {
    marginTop: GlobalStyles.Margin.margin_23xs,
  },
  ml_29: {
    marginLeft: GlobalStyles.Margin.margin_49xs,
  },
  mt34: {
    marginTop: GlobalStyles.Margin.margin_3xl,
  },
  mt13: {
    marginTop: GlobalStyles.Margin.margin_21xs,
  },
  rectangleShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    backgroundColor: GlobalStyles.Color.white,
  },
  timePosition: {
    bottom: 0,
    top: 0,
    left: 0,
    position: "absolute",
  },
  networkPosition1: {
    height: 11,
    marginTop: -3,
    top: "50%",
    position: "absolute",
  },
  networkChildLayout: {
    width: 3,
    backgroundColor: GlobalStyles.Color.gray_1400,
    borderRadius: GlobalStyles.Border.br_7xs,
    bottom: 0,
    position: "absolute",
  },
  networkPosition: {
    left: "50%",
    width: 3,
    backgroundColor: GlobalStyles.Color.gray_1400,
    borderRadius: GlobalStyles.Border.br_7xs,
    bottom: 0,
    position: "absolute",
  },
  textTypo: {
    textAlign: "right",
    fontSize: GlobalStyles.FontSize.size_xs,
    fontFamily: GlobalStyles.FontFamily.helvetica,
    color: GlobalStyles.Color.indigo,
  },
  text1Position: {
    marginTop: -7,
    textAlign: "right",
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  historyPosition: {
    left: "0%",
    position: "absolute",
  },
  accountTypo: {
    letterSpacing: 1,
    fontSize: GlobalStyles.FontSize.size_xl,
    marginTop: -8.5,
    fontFamily: GlobalStyles.FontFamily.helvetica,
    color: GlobalStyles.Color.gray_800,
    textAlign: "left",
  },
  helloTypo: {
    color: GlobalStyles.Color.black,
    lineHeight: 17,
    fontSize: GlobalStyles.FontSize.size_lg,
    fontFamily: GlobalStyles.FontFamily.helvetica,
    position: "absolute",
    textAlign: "left",
  },
  helloPosition: {
    top: "36.67%",
    color: GlobalStyles.Color.black,
    lineHeight: 17,
    fontSize: GlobalStyles.FontSize.size_lg,
  },
  path33370Icon: {
    height: 812,
    width: 375,
  },
  hello: {
    fontSize: GlobalStyles.FontSize.size_8xl,
    textAlign: "left",
    color: GlobalStyles.Color.indigo,
    fontFamily: GlobalStyles.FontFamily.typoGrotesk,
    fontWeight: "700",
  },
  hello1: {
    color: GlobalStyles.Color.gray_800,
    fontSize: GlobalStyles.FontSize.size_base,
    textAlign: "left",
    fontFamily: GlobalStyles.FontFamily.typoGrotesk,
  },
  settingsChild: {
    width: 63,
    height: 63,
  },
  hello2: {
    left: "33.76%",
    lineHeight: 16,
    color: GlobalStyles.Color.blue,
    fontFamily: GlobalStyles.FontFamily.helvetica,
    top: "0%",
    position: "absolute",
    fontSize: GlobalStyles.FontSize.size_base,
    textAlign: "left",
  },
  iconOpenAccountLogout: {
    top: 2,
    bottom: 2,
    maxHeight: "100%",
    width: 14,
    left: 0,
    position: "absolute",
  },
  helloParent: {
    width: 71,
    alignSelf: "center",
    height: 16,
  },
  hello3: {
    fontSize: GlobalStyles.FontSize.size_xs,
    color: GlobalStyles.Color.blue,
    fontFamily: GlobalStyles.FontFamily.helvetica,
    textAlign: "left",
  },
  homeIndicator: {
    borderRadius: GlobalStyles.Border.br_8xl,
    backgroundColor: GlobalStyles.Color.black,
    width: 134,
    height: 5,
  },
  rectangle: {
    shadowColor: "rgba(0, 0, 0, 0.05)",
    shadowRadius: 6,
    elevation: 6,
    right: 0,
  },
  text: {
    fontSize: GlobalStyles.FontSize.size_4xl,
    letterSpacing: 0,
    lineHeight: 24,
    fontWeight: "500",
    fontFamily: GlobalStyles.FontFamily.roboto,
    color: GlobalStyles.Color.gray_1900,
    top: 0,
    left: 0,
    position: "absolute",
    textAlign: "left",
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
    left: 0,
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
  hello4: {
    fontSize: GlobalStyles.FontSize.size_base,
    textAlign: "left",
    color: GlobalStyles.Color.indigo,
    fontFamily: GlobalStyles.FontFamily.typoGrotesk,
  },
  settingsItem: {
    borderRadius: GlobalStyles.Border.br_4xl,
    shadowColor: "rgba(1, 1, 253, 0.05)",
    shadowRadius: 20,
    elevation: 20,
    height: 111,
    width: 326,
  },
  britishPounds: {
    marginLeft: -38.5,
  },
  britishPoundsWrapper: {
    width: 77,
    height: 14,
  },
  text1: {
    marginLeft: -26.5,
  },
  wrapper: {
    width: 53,
    height: 14,
  },
  maskGroup241: {
    height: 17,
    width: 17,
  },
  iconMaterialContentCopy: {
    width: 14,
    height: 16,
  },
  account: {
    opacity: 0.3,
  },
  history: {
    top: "50%",
  },
  history1: {
    left: "28.09%",
    top: "50%",
    position: "absolute",
  },
  history2: {
    left: "56.52%",
    top: "50%",
    position: "absolute",
  },
  history3: {
    left: "81.61%",
    top: "50%",
    position: "absolute",
    fontWeight: "700",
    letterSpacing: 1,
    fontSize: GlobalStyles.FontSize.size_xl,
    marginTop: -8.5,
  },
  component2128: {
    width: 299,
    height: 19,
  },
  groupChild: {
    height: "100%",
    right: "0%",
    bottom: "0%",
    borderRadius: GlobalStyles.Border.br_lg,
    backgroundColor: GlobalStyles.Color.gray_500,
    top: "0%",
    left: "0%",
    width: "100%",
  },
  maskGroup236: {
    bottom: 13,
    right: 0,
    top: 0,
    left: 0,
    position: "absolute",
  },
  rectangleParent: {
    marginTop: -30,
    height: 60,
    top: "50%",
    right: 0,
    left: 0,
    position: "absolute",
  },
  component20856: {
    right: 0,
  },
  hello8: {
    left: "41.72%",
  },
  component20856Parent: {
    height: 60,
    width: 326,
  },
  hello10: {
    left: "31.29%",
  },
  hello11: {
    top: "33.33%",
    left: "41.1%",
  },
  settings: {
    flex: 1,
    width: "100%",
    backgroundColor: GlobalStyles.Color.white,
  },
});

export default Settings;
