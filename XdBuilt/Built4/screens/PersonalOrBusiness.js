import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import GlobalStyles from "../GlobalStyles";

const PersonalOrBusiness = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.personalOrBusiness}>
      <View style={styles.personalOrBusinessChild} />
      <View style={[styles.homeIndicator, styles.mt275, styles.mr120]} />
      <View style={[styles.statusBarBlack, styles.mt_812]}>
        <View style={[styles.rectangle, styles.componentPosition]} />
        <View style={[styles.statusBar, styles.statusBarPosition]}>
          <View style={[styles.time, styles.componentPosition]}>
            <Text style={styles.text}>9:41</Text>
          </View>
          <Image
            style={styles.batteryIcon}
            resizeMode="cover"
            source={require("../assets/icon-awesomebatterythreequarters.png")}
          />
          <Image
            style={[styles.wifiIcon, styles.networkPosition1]}
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
      <Text style={[styles.hello, styles.mt48, styles.mr68]}>
        You want to use for
      </Text>
      <Image
        style={[styles.personalOrBusinessItem, styles.mt_278]}
        resizeMode="cover"
        source={require("../assets/group-30771.png")}
      />
      <Pressable
        style={[styles.component2081Parent, styles.mt123, styles.mr24]}
        onPress={() => navigation.navigate("CountryOfResidence")}
      >
        <View style={[styles.component2081, styles.componentPosition]}>
          <View style={[styles.rectangleParent, styles.statusBarPosition]}>
            <View style={styles.groupChild} />
            <View style={styles.maskGroup236} />
          </View>
        </View>
        <Text style={[styles.hello1, styles.helloTypo]}>Business</Text>
      </Pressable>
      <View style={[styles.component2131, styles.mt26, styles.mr_4049]}>
        <Pressable
          style={[styles.component2082, styles.componentPosition]}
          onPress={() => navigation.navigate("Name")}
        >
          <View style={[styles.rectangleParent, styles.statusBarPosition]}>
            <View style={styles.groupChild} />
            <View style={styles.maskGroup236} />
          </View>
        </Pressable>
        <Text style={[styles.hello2, styles.helloTypo]}>Personal</Text>
        <Text style={styles.personal}>Personal</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mt275: {
    marginTop: GlobalStyles.Margin.margin_89xl,
  },
  mr120: {
    marginRight: GlobalStyles.Margin.margin_53xl,
  },
  mt_812: {
    marginTop: GlobalStyles.Margin.margin_90xs,
  },
  mt48: {
    marginTop: GlobalStyles.Margin.margin_19xl,
  },
  mr68: {
    marginRight: GlobalStyles.Margin.margin_32xl,
  },
  mt_278: {
    marginTop: -278,
  },
  mt123: {
    marginTop: GlobalStyles.Margin.margin_55xl,
  },
  mr24: {
    marginRight: GlobalStyles.Margin.margin_8xs,
  },
  mt26: {
    marginTop: GlobalStyles.Margin.margin_6xs,
  },
  mr_4049: {
    marginRight: -4049,
  },
  componentPosition: {
    bottom: 0,
    left: 0,
    position: "absolute",
  },
  statusBarPosition: {
    top: "50%",
    position: "absolute",
  },
  networkPosition1: {
    width: 17,
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
  helloTypo: {
    textAlign: "center",
    textTransform: "uppercase",
    lineHeight: 17,
    fontSize: GlobalStyles.FontSize.size_lg,
    color: GlobalStyles.Color.black,
    fontFamily: GlobalStyles.FontFamily.helvetica,
    position: "absolute",
  },
  personalOrBusinessChild: {
    backgroundColor: GlobalStyles.Color.gray_300,
    height: 812,
    width: 375,
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
    left: 0,
    right: 0,
    top: 0,
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
    top: 0,
  },
  batteryIcon: {
    width: 22,
    height: 11,
    marginTop: -3,
    top: "50%",
    right: 0,
    position: "absolute",
  },
  wifiIcon: {
    right: 37,
    height: 12,
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
    height: 11,
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
  hello: {
    fontSize: GlobalStyles.FontSize.size_8xl,
    lineHeight: 30,
    fontWeight: "700",
    fontFamily: GlobalStyles.FontFamily.typoGrotesk,
    color: GlobalStyles.Color.indigo,
    textAlign: "left",
  },
  personalOrBusinessItem: {
    width: 152,
    height: 101,
    alignSelf: "center",
  },
  groupChild: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: GlobalStyles.Border.br_lg,
    backgroundColor: GlobalStyles.Color.gray_500,
    position: "absolute",
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
    height: 60,
    left: 0,
    right: 0,
  },
  component2081: {
    left: 0,
    right: 0,
    top: 0,
  },
  hello1: {
    top: "36.67%",
    left: "38.34%",
  },
  component2081Parent: {
    width: 326,
    height: 60,
  },
  component2082: {
    top: 304,
    right: 4073,
    left: 0,
  },
  hello2: {
    top: "89.56%",
    left: "2.77%",
  },
  personal: {
    top: 1,
    right: -1,
    fontSize: GlobalStyles.FontSize.size_3xs,
    color: GlobalStyles.Color.black,
    fontFamily: GlobalStyles.FontFamily.helvetica,
    textAlign: "left",
    position: "absolute",
  },
  component2131: {
    width: 4399,
    height: 364,
  },
  personalOrBusiness: {
    flex: 1,
    alignItems: "flex-end",
    width: "100%",
    backgroundColor: GlobalStyles.Color.white,
  },
});

export default PersonalOrBusiness;
