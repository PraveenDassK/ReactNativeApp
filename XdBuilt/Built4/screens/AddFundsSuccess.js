import * as React from "react";
import { StyleSheet, View, Pressable, Image, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import GlobalStyles from "../GlobalStyles";

const AddFundsSuccess = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.addFundsSuccess}>
      <Pressable
        style={styles.homeIndicatorWrapper}
        onPress={() => navigation.navigate("Account")}
      >
        <View style={[styles.homeIndicator, styles.statusBarPosition]} />
      </Pressable>
      <Image
        style={[styles.iconAwesomeCheckCircle, styles.mt231, styles.ml1]}
        resizeMode="cover"
        source={require("../assets/icon-awesomecheckcircle3.png")}
      />
      <Text style={[styles.hello, styles.mt36, styles.ml1, styles.textLayout]}>
        <Text style={styles.congratulations}>
          <Text style={styles.congratulations1}>Congratulations!</Text>
        </Text>
        <Text style={styles.congratulations}>
          <Text style={styles.congratulations1}> </Text>
        </Text>
        <Text style={styles.congratulations}>
          <Text style={styles.added1}>{`£500.00 added `}</Text>
        </Text>
        <Text style={styles.congratulations}>
          <Text style={styles.added1}>successfully</Text>
        </Text>
      </Text>
      <View style={[styles.statusBarBlack, styles.mt_812]}>
        <View style={[styles.rectangle, styles.timePosition]} />
        <View style={[styles.statusBar, styles.statusBarPosition]}>
          <View style={[styles.time, styles.timePosition]}>
            <Text style={[styles.text, styles.textLayout]}>9:41</Text>
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
      <Text style={[styles.hello1, styles.mt183, styles.ml1]}>
        Tap anywhere to continue
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mt231: {
    marginTop: 231,
  },
  ml1: {
    marginLeft: GlobalStyles.Margin.margin_32xs,
  },
  mt36: {
    marginTop: GlobalStyles.Margin.margin_6xl,
  },
  mt_812: {
    marginTop: GlobalStyles.Margin.margin_90xs,
  },
  mt183: {
    marginTop: GlobalStyles.Margin.margin_70xl,
  },
  statusBarPosition: {
    top: "50%",
    position: "absolute",
  },
  textLayout: {
    lineHeight: 24,
    fontSize: GlobalStyles.FontSize.size_4xl,
  },
  timePosition: {
    bottom: 0,
    left: 0,
    top: 0,
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
  homeIndicator: {
    marginTop: 393,
    right: 120,
    left: 121,
    borderRadius: GlobalStyles.Border.br_8xl,
    backgroundColor: GlobalStyles.Color.black,
    height: 5,
  },
  homeIndicatorWrapper: {
    backgroundColor: GlobalStyles.Color.gray_300,
    height: 812,
    width: 375,
  },
  iconAwesomeCheckCircle: {
    width: 180,
    height: 180,
  },
  congratulations1: {
    fontWeight: "700",
    fontFamily: GlobalStyles.FontFamily.helvetica,
  },
  congratulations: {
    margin: GlobalStyles.Margin.margin_33xs,
  },
  added1: {
    fontFamily: GlobalStyles.FontFamily.helvetica,
  },
  hello: {
    color: GlobalStyles.Color.indigo,
    textAlign: "center",
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
    letterSpacing: 0,
    fontWeight: "500",
    fontFamily: GlobalStyles.FontFamily.roboto,
    color: GlobalStyles.Color.gray_1900,
    textAlign: "left",
    left: 0,
    top: 0,
    position: "absolute",
    fontSize: GlobalStyles.FontSize.size_4xl,
  },
  time: {
    width: 40,
    left: 0,
  },
  batteryIcon: {
    width: 22,
    height: 11,
    marginTop: -3,
    right: 0,
    top: "50%",
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
  hello1: {
    fontSize: GlobalStyles.FontSize.size_xs,
    color: GlobalStyles.Color.gray_800,
    fontFamily: GlobalStyles.FontFamily.helvetica,
    textAlign: "center",
  },
  addFundsSuccess: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    backgroundColor: GlobalStyles.Color.white,
  },
});

export default AddFundsSuccess;
