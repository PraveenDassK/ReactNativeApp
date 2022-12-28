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
        source={require("../assets/path-33380.png")}
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
      <Text
        style={[styles.hello4, styles.mt52, styles.ml30]}
      >{`Accounts details `}</Text>
      <View style={[styles.settingsItem, styles.mt7, styles.ml25]} />
      <Text style={[styles.hello4, styles.mt_96, styles.ml46]}>Currency</Text>
      <Text style={[styles.hello4, styles.mt14, styles.ml46]}>Account</Text>
      <Text style={[styles.hello4, styles.mt14, styles.ml46]}>Sort Code</Text>
      <View style={[styles.britishPoundsWrapper, styles.mt_15, styles.ml238]}>
        <Text
          style={[styles.britishPounds, styles.textTypo, styles.textPosition]}
        >
          British Pounds
        </Text>
      </View>
      <View style={[styles.wrapper, styles.mt_15, styles.ml262]}>
        <Text style={[styles.text, styles.textTypo, styles.textPosition]}>
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
      <View style={[styles.component2128, styles.mt_757, styles.ml_29]}>
        <Pressable
          style={[styles.history, styles.historyPosition]}
          onPress={() => navigation.navigate("Account3")}
        >
          <Text style={[styles.account, styles.accountTypo]}>Account</Text>
        </Pressable>
        <Pressable
          style={[styles.history1, styles.historyPosition1]}
          onPress={() => navigation.navigate("Analytics")}
        >
          <Text style={[styles.account, styles.accountTypo]}>Analysis</Text>
        </Pressable>
        <Pressable
          style={[styles.history2, styles.historyPosition1]}
          onPress={() => navigation.navigate("Carbon")}
        >
          <Text style={[styles.account, styles.accountTypo]}>Carbon</Text>
        </Pressable>
        <Text
          style={[styles.history3, styles.accountTypo, styles.historyPosition1]}
        >
          Profile
        </Text>
      </View>
      <Pressable
        style={[styles.component20856Parent, styles.mt34, styles.ml25]}
        onPress={() => navigation.navigate("Plan")}
      >
        <View
          style={[
            styles.component20856,
            styles.maskGroup236Position,
            styles.maskGroup236Position1,
          ]}
        >
          <View style={[styles.rectangleParent, styles.maskGroup236Position]}>
            <View style={[styles.groupChild, styles.historyPosition]} />
            <View
              style={[
                styles.maskGroup236,
                styles.maskGroup236Position,
                styles.maskGroup236Position1,
              ]}
            />
          </View>
        </View>
        <Text style={[styles.hello8, styles.helloTypo, styles.helloPosition]}>
          My Plan
        </Text>
      </Pressable>
      <Pressable
        style={[styles.component20856Parent, styles.mt13, styles.ml25]}
        onPress={() => navigation.navigate("Account")}
      >
        <View
          style={[
            styles.component20856,
            styles.maskGroup236Position,
            styles.maskGroup236Position1,
          ]}
        >
          <View style={[styles.rectangleParent, styles.maskGroup236Position]}>
            <View style={[styles.groupChild, styles.historyPosition]} />
            <View
              style={[
                styles.maskGroup236,
                styles.maskGroup236Position,
                styles.maskGroup236Position1,
              ]}
            />
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
        <View
          style={[
            styles.component20856,
            styles.maskGroup236Position,
            styles.maskGroup236Position1,
          ]}
        >
          <View style={[styles.rectangleParent, styles.maskGroup236Position]}>
            <View style={[styles.groupChild, styles.historyPosition]} />
            <View
              style={[
                styles.maskGroup236,
                styles.maskGroup236Position,
                styles.maskGroup236Position1,
              ]}
            />
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
        <View
          style={[
            styles.component20856,
            styles.maskGroup236Position,
            styles.maskGroup236Position1,
          ]}
        >
          <View style={[styles.rectangleParent, styles.maskGroup236Position]}>
            <View style={[styles.groupChild, styles.historyPosition]} />
            <View
              style={[
                styles.maskGroup236,
                styles.maskGroup236Position,
                styles.maskGroup236Position1,
              ]}
            />
          </View>
        </View>
        <Text style={[styles.hello11, styles.helloTypo]}>About us</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  mt_61: {
    marginTop: GlobalStyles.Margin.margin_46xs,
  },
  ml30: {
    marginLeft: GlobalStyles.Margin.margin_8xl,
  },
  mt1: {
    marginTop: GlobalStyles.Margin.margin_24xs,
  },
  mt24: {
    marginTop: GlobalStyles.Margin.margin_2xl,
  },
  ml288: {
    marginLeft: 288,
  },
  mt58: {
    marginTop: GlobalStyles.Margin.margin_32xl,
  },
  mt49: {
    marginTop: GlobalStyles.Margin.margin_27xl,
  },
  ml136: {
    marginLeft: 136,
  },
  mt52: {
    marginTop: GlobalStyles.Margin.margin_28xl,
  },
  mt7: {
    marginTop: GlobalStyles.Margin.margin_20xs,
  },
  ml25: {
    marginLeft: GlobalStyles.Margin.margin_3xl,
  },
  mt_96: {
    marginTop: GlobalStyles.Margin.margin_52xs,
  },
  ml46: {
    marginLeft: GlobalStyles.Margin.margin_24xl,
  },
  mt14: {
    marginTop: GlobalStyles.Margin.margin_9xs,
  },
  mt_15: {
    marginTop: GlobalStyles.Margin.margin_28xs,
  },
  ml238: {
    marginLeft: 238,
  },
  ml262: {
    marginLeft: 262,
  },
  mt_17: {
    marginTop: GlobalStyles.Margin.margin_30xs,
  },
  ml210: {
    marginLeft: 210,
  },
  mt_18: {
    marginTop: GlobalStyles.Margin.margin_31xs,
  },
  ml241: {
    marginLeft: GlobalStyles.Margin.margin_54xl,
  },
  ml267: {
    marginLeft: 267,
  },
  mt_757: {
    marginTop: -757,
  },
  ml_29: {
    marginLeft: GlobalStyles.Margin.margin_35xs,
  },
  mt34: {
    marginTop: 34,
  },
  mt13: {
    marginTop: GlobalStyles.Margin.margin_10xs,
  },
  textTypo: {
    textAlign: "right",
    fontSize: GlobalStyles.FontSize.size_2xs,
    fontFamily: GlobalStyles.FontFamily.helvetica,
    color: GlobalStyles.Color.indigo,
  },
  textPosition: {
    left: "50%",
    marginTop: -7,
    textAlign: "right",
    top: "50%",
    position: "absolute",
  },
  historyPosition: {
    left: "0%",
    position: "absolute",
  },
  accountTypo: {
    letterSpacing: 1,
    fontSize: GlobalStyles.FontSize.size_lg,
    marginTop: -8.5,
    fontFamily: GlobalStyles.FontFamily.helvetica,
    color: GlobalStyles.Color.gray_800,
    textAlign: "left",
  },
  historyPosition1: {
    position: "absolute",
    top: "50%",
  },
  maskGroup236Position: {
    right: 0,
    left: 0,
    position: "absolute",
  },
  maskGroup236Position1: {
    top: 0,
    right: 0,
  },
  helloTypo: {
    color: GlobalStyles.Color.black,
    lineHeight: 17,
    fontSize: GlobalStyles.FontSize.size_base,
    fontFamily: GlobalStyles.FontFamily.helvetica,
    position: "absolute",
    textAlign: "left",
  },
  helloPosition: {
    top: "36.67%",
    color: GlobalStyles.Color.black,
    lineHeight: 17,
    fontSize: GlobalStyles.FontSize.size_base,
  },
  path33370Icon: {
    width: 375,
    height: 812,
  },
  hello: {
    fontSize: GlobalStyles.FontSize.size_6xl,
    textAlign: "left",
    color: GlobalStyles.Color.indigo,
    fontFamily: GlobalStyles.FontFamily.typoGrotesk,
    fontWeight: "700",
  },
  hello1: {
    color: GlobalStyles.Color.gray_800,
    fontSize: GlobalStyles.FontSize.size_sm,
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
    fontSize: GlobalStyles.FontSize.size_sm,
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
    fontSize: GlobalStyles.FontSize.size_2xs,
    color: GlobalStyles.Color.blue,
    fontFamily: GlobalStyles.FontFamily.helvetica,
    textAlign: "left",
  },
  hello4: {
    fontSize: GlobalStyles.FontSize.size_sm,
    textAlign: "left",
    color: GlobalStyles.Color.indigo,
    fontFamily: GlobalStyles.FontFamily.typoGrotesk,
  },
  settingsItem: {
    borderRadius: GlobalStyles.Border.br_3xl,
    shadowColor: "rgba(1, 1, 253, 0.05)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 20,
    elevation: 20,
    shadowOpacity: 1,
    height: 111,
    width: 326,
    backgroundColor: GlobalStyles.Color.white,
  },
  britishPounds: {
    marginLeft: -38.5,
  },
  britishPoundsWrapper: {
    width: 77,
    height: 14,
  },
  text: {
    marginLeft: -26.5,
  },
  wrapper: {
    width: 53,
    height: 14,
  },
  maskGroup241: {
    width: 17,
    height: 17,
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
  },
  history2: {
    left: "56.52%",
    top: "50%",
  },
  history3: {
    left: "81.61%",
    top: "50%",
    fontWeight: "700",
    letterSpacing: 1,
    fontSize: GlobalStyles.FontSize.size_lg,
    marginTop: -8.5,
    position: "absolute",
  },
  component2128: {
    width: 299,
    height: 19,
  },
  groupChild: {
    height: "100%",
    right: "0%",
    bottom: "0%",
    borderRadius: GlobalStyles.Border.br_md,
    backgroundColor: GlobalStyles.Color.gray_500,
    top: "0%",
    left: "0%",
    width: "100%",
  },
  maskGroup236: {
    bottom: 13,
  },
  rectangleParent: {
    marginTop: -30,
    height: 60,
    top: "50%",
  },
  component20856: {
    bottom: 0,
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
