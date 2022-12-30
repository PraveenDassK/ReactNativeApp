import * as React from "react";
import { StyleSheet, View, Pressable, Image, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import GlobalStyles from "../GlobalStyles";

const DOB = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.dob}>
      <Pressable
        style={styles.dobChild}
        onPress={() => navigation.navigate("LogoAnimation1")}
      />
      <Pressable
        style={[styles.iconFeatherArrowLeftWrapper, styles.mt2]}
        onPress={() => navigation.navigate("BusinessAddress2")}
      >
        <Image
          style={styles.iconFeatherArrowLeft}
          resizeMode="cover"
          source={require("../assets/icon-featherarrowleft.png")}
        />
      </Pressable>
      <Text style={[styles.hello, styles.mt10, styles.ml25]}>
        Verify Date of Birth
      </Text>
      <Text style={[styles.hello2Typo, styles.mt16, styles.ml25]}>
        Requires to make sure you are above 18
      </Text>
      <Text
        style={[
          styles.dateOfBirth,
          styles.mt30,
          styles.ml25,
          styles.hello1Typo,
        ]}
      >
        Date of Birth
      </Text>
      <View style={[styles.homeIndicator, styles.mt417, styles.ml121]} />
      <Pressable
        style={[styles.component20812Parent, styles.mt39, styles.ml25]}
        onPress={() => navigation.navigate("LogoAnimation1")}
      >
        <View style={[styles.component20812, styles.timePosition]}>
          <View style={[styles.rectangleParent, styles.hello2Position]}>
            <View style={[styles.groupChild, styles.childLayout]} />
            <View style={styles.maskGroup236} />
          </View>
        </View>
        <Text style={[styles.hello1, styles.hello1Typo]}>Continue</Text>
      </Pressable>
      <View style={[styles.component20812Parent, styles.mt9, styles.ml25]}>
        <View
          style={[
            styles.component21531Child,
            styles.childLayout,
            styles.timePosition,
          ]}
        />
        <Text style={[styles.hello2, styles.hello2Position, styles.hello2Typo]}>
          dd-mm-yyyy
        </Text>
        <View style={styles.component21531Item} />
        <View style={styles.layer}>
          <View style={styles.vrstva98}>
            <Image
              style={styles.vrstva98}
              resizeMode="cover"
              source={require("../assets/path-72.png")}
            />
            <View style={[styles.vrstva98Child, styles.vrstva98Layout]} />
            <View style={[styles.vrstva98Item, styles.vrstva98Layout]} />
          </View>
        </View>
      </View>
      <View style={[styles.statusBarBlack, styles.mt_812]}>
        <View style={[styles.rectangle, styles.timePosition]} />
        <View style={[styles.statusBar, styles.hello2Position]}>
          <View style={[styles.time, styles.timePosition]}>
            <Text style={styles.text}>9:41</Text>
          </View>
          <Image
            style={[styles.batteryIcon, styles.networkPosition]}
            resizeMode="cover"
            source={require("../assets/icon-awesomebatterythreequarters.png")}
          />
          <Image
            style={styles.wifiIcon}
            resizeMode="cover"
            source={require("../assets/icon-awesomewifi.png")}
          />
          <View style={[styles.network, styles.networkPosition]}>
            <View style={[styles.networkChild, styles.networkLayout]} />
            <View style={[styles.networkItem, styles.networkLayout]} />
            <View style={[styles.networkInner, styles.networkLayout]} />
            <View style={[styles.rectangleView, styles.networkLayout]} />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mt2: {
    marginTop: GlobalStyles.Margin.margin_31xs,
  },
  mt10: {
    marginTop: GlobalStyles.Margin.margin_24xs,
  },
  ml25: {
    marginLeft: GlobalStyles.Margin.margin_7xs,
  },
  mt16: {
    marginTop: GlobalStyles.Margin.margin_17xs,
  },
  mt30: {
    marginTop: GlobalStyles.Margin.margin_sm,
  },
  mt417: {
    marginTop: 417,
  },
  ml121: {
    marginLeft: GlobalStyles.Margin.margin_54xl,
  },
  mt39: {
    marginTop: GlobalStyles.Margin.margin_9xl,
  },
  mt9: {
    marginTop: GlobalStyles.Margin.margin_25xs,
  },
  mt_812: {
    marginTop: GlobalStyles.Margin.margin_90xs,
  },
  hello1Typo: {
    fontFamily: GlobalStyles.FontFamily.helvetica,
    textAlign: "left",
  },
  timePosition: {
    bottom: 0,
    left: 0,
    top: 0,
  },
  hello2Position: {
    top: "50%",
    position: "absolute",
  },
  childLayout: {
    borderRadius: GlobalStyles.Border.br_lg,
    position: "absolute",
  },
  hello2Typo: {
    color: GlobalStyles.Color.gray_800,
    fontFamily: GlobalStyles.FontFamily.helvetica,
    fontSize: GlobalStyles.FontSize.size_base,
    textAlign: "left",
  },
  vrstva98Layout: {
    height: 3,
    backgroundColor: GlobalStyles.Color.blue,
    borderRadius: GlobalStyles.Border.br_8xs,
    top: 10,
    position: "absolute",
  },
  networkPosition: {
    height: 11,
    marginTop: -3,
    top: "50%",
    position: "absolute",
  },
  networkLayout: {
    backgroundColor: GlobalStyles.Color.gray_1400,
    borderRadius: GlobalStyles.Border.br_7xs,
    width: 3,
    bottom: 0,
    position: "absolute",
  },
  dobChild: {
    height: 812,
    width: 375,
    backgroundColor: GlobalStyles.Color.gray_300,
  },
  iconFeatherArrowLeft: {
    marginLeft: -0.5,
    bottom: 4,
    height: 17,
    width: 17,
    left: "50%",
    position: "absolute",
  },
  iconFeatherArrowLeftWrapper: {
    width: 55,
    height: 45,
    backgroundColor: GlobalStyles.Color.gray_300,
  },
  hello: {
    fontSize: GlobalStyles.FontSize.size_8xl,
    fontWeight: "700",
    fontFamily: GlobalStyles.FontFamily.typoGrotesk,
    textAlign: "left",
    color: GlobalStyles.Color.indigo,
  },
  dateOfBirth: {
    fontSize: GlobalStyles.FontSize.size_base,
    fontFamily: GlobalStyles.FontFamily.helvetica,
    color: GlobalStyles.Color.indigo,
  },
  homeIndicator: {
    borderRadius: GlobalStyles.Border.br_8xl,
    backgroundColor: GlobalStyles.Color.black,
    width: 134,
    height: 5,
  },
  groupChild: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    backgroundColor: GlobalStyles.Color.gray_500,
    width: "100%",
  },
  maskGroup236: {
    bottom: 13,
    left: 0,
    right: 0,
    top: 0,
    position: "absolute",
  },
  rectangleParent: {
    marginTop: -30,
    left: 0,
    right: 0,
    height: 60,
  },
  component20812: {
    left: 0,
    right: 0,
    position: "absolute",
  },
  hello1: {
    top: "36.67%",
    left: "38.04%",
    fontSize: GlobalStyles.FontSize.size_lg,
    lineHeight: 17,
    textTransform: "uppercase",
    color: GlobalStyles.Color.black,
    position: "absolute",
  },
  component20812Parent: {
    width: 326,
    height: 60,
  },
  component21531Child: {
    borderStyle: "solid",
    borderColor: "#e8e8e8",
    borderWidth: 1,
    left: 0,
    right: 0,
    backgroundColor: GlobalStyles.Color.white,
  },
  hello2: {
    marginTop: -8,
    left: 14,
  },
  component21531Item: {
    height: "38.33%",
    width: "7.06%",
    top: "31.67%",
    right: "7.06%",
    bottom: "30%",
    left: "85.89%",
    position: "absolute",
  },
  vrstva98: {
    height: 20,
    width: 22,
    left: 0,
    top: 0,
    position: "absolute",
  },
  vrstva98Child: {
    left: 3,
    width: 3,
    height: 3,
    backgroundColor: GlobalStyles.Color.blue,
    borderRadius: GlobalStyles.Border.br_8xs,
    top: 10,
  },
  vrstva98Item: {
    left: 8,
    width: 4,
    height: 3,
    backgroundColor: GlobalStyles.Color.blue,
    borderRadius: GlobalStyles.Border.br_8xs,
    top: 10,
  },
  layer: {
    height: "32.7%",
    width: "6.63%",
    top: "34.7%",
    right: "7.27%",
    bottom: "32.6%",
    left: "86.1%",
    position: "absolute",
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
    position: "absolute",
    backgroundColor: GlobalStyles.Color.white,
  },
  text: {
    fontSize: GlobalStyles.FontSize.size_4xl,
    letterSpacing: 0,
    lineHeight: 24,
    fontWeight: "500",
    fontFamily: GlobalStyles.FontFamily.roboto,
    color: GlobalStyles.Color.gray_1900,
    left: 0,
    top: 0,
    textAlign: "left",
    position: "absolute",
  },
  time: {
    width: 40,
    left: 0,
    position: "absolute",
  },
  batteryIcon: {
    width: 22,
    right: 0,
  },
  wifiIcon: {
    right: 37,
    height: 12,
    marginTop: -3,
    top: "50%",
    width: 17,
    position: "absolute",
  },
  networkChild: {
    height: 4,
    left: 0,
  },
  networkItem: {
    marginLeft: -3.5,
    height: 6,
    left: "50%",
  },
  networkInner: {
    marginLeft: 0.5,
    height: 9,
    left: "50%",
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
  },
  statusBarBlack: {
    height: 44,
    width: 375,
  },
  dob: {
    flex: 1,
    width: "100%",
    backgroundColor: GlobalStyles.Color.white,
  },
});

export default DOB;
