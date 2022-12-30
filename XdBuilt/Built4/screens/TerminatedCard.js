import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import GlobalStyles from "../GlobalStyles";

const TerminatedCard = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.terminatedCard}>
      <View style={styles.terminatedCardChild} />
      <View style={[styles.statusBarBlack, styles.mt_815]}>
        <View style={[styles.rectangle, styles.timePosition]} />
        <View style={[styles.statusBar, styles.statusBarPosition]}>
          <View style={[styles.time, styles.timePosition]}>
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
      <View style={[styles.homeIndicator, styles.mt249, styles.ml1]} />
      <Image
        style={[styles.brokenCreditCardIcon, styles.mt178, styles.mr12]}
        resizeMode="cover"
        source={require("../assets/brokencreditcard.png")}
      />
      <Text style={[styles.hello, styles.mt43, styles.ml1, styles.helloTypo]}>
        <Text style={styles.yourCardHas}>Your card has been</Text>
        <Text style={styles.yourCardHas}>terminated.</Text>
      </Text>
      <Pressable
        style={[styles.component208117Parent, styles.mt82, styles.ml1]}
        onPress={() => navigation.navigate("CardSettings")}
      >
        <View style={[styles.component208117, styles.timePosition]}>
          <View style={[styles.rectangleParent, styles.statusBarPosition]}>
            <View style={styles.groupChild} />
            <View style={styles.maskGroup236} />
          </View>
        </View>
        <Text style={[styles.hello1, styles.helloTypo]}>GO Back</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  mt_815: {
    marginTop: GlobalStyles.Margin.margin_91xs,
  },
  mt249: {
    marginTop: GlobalStyles.Margin.margin_86xl,
  },
  ml1: {
    marginLeft: GlobalStyles.Margin.margin_32xs,
  },
  mt178: {
    marginTop: GlobalStyles.Margin.margin_69xl,
  },
  mr12: {
    marginRight: GlobalStyles.Margin.margin_22xs,
  },
  mt43: {
    marginTop: GlobalStyles.Margin.margin_14xl,
  },
  mt82: {
    marginTop: GlobalStyles.Margin.margin_41xl,
  },
  timePosition: {
    bottom: 0,
    left: 0,
    top: 0,
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
    fontFamily: GlobalStyles.FontFamily.helvetica,
  },
  terminatedCardChild: {
    backgroundColor: GlobalStyles.Color.gray_300,
    height: 815,
    width: 375,
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
  homeIndicator: {
    borderRadius: GlobalStyles.Border.br_8xl,
    backgroundColor: GlobalStyles.Color.black,
    width: 134,
    height: 5,
  },
  brokenCreditCardIcon: {
    width: 125,
    height: 85,
  },
  yourCardHas: {
    margin: GlobalStyles.Margin.margin_33xs,
  },
  hello: {
    fontSize: GlobalStyles.FontSize.size_7xl,
    lineHeight: 30,
    fontWeight: "700",
    color: GlobalStyles.Color.indigo,
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
  component208117: {
    left: 0,
    right: 0,
  },
  hello1: {
    top: "35%",
    left: "26.71%",
    fontSize: GlobalStyles.FontSize.size_lg,
    lineHeight: 17,
    textTransform: "uppercase",
    color: GlobalStyles.Color.black,
    position: "absolute",
  },
  component208117Parent: {
    width: 146,
    height: 60,
  },
  terminatedCard: {
    flex: 1,
    alignItems: "center",
    width: "100%",
    backgroundColor: GlobalStyles.Color.white,
  },
});

export default TerminatedCard;
