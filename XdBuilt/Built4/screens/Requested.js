import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import GlobalStyles from "../GlobalStyles";

const Requested = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.requested}
      onPress={() => navigation.navigate("SendMoney")}
    >
      <View style={styles.requestedInner}>
        <View style={[styles.rectangleParent, styles.timePosition]}>
          <View style={[styles.groupChild, styles.textPosition]} />
          <View style={[styles.groupItem, styles.groupItemPosition]} />
        </View>
      </View>
      <View style={[styles.requestedChild, styles.mt28_5, styles.mr2]} />
      <Text
        style={[
          styles.hello,
          styles.mt31_5,
          styles.helloTypo,
          styles.textLayout,
        ]}
      >
        <Text style={styles.youHaveRequested}>You have requested £500</Text>
        <Text style={styles.youHaveRequested}>from Hudson Maia</Text>
      </Text>
      <Image
        style={[styles.iconAwesomeCheckCircle, styles.mt220_5]}
        resizeMode="cover"
        source={require("../assets/icon-awesomecheckcircle.png")}
      />
      <View style={[styles.statusBarBlack, styles.mt_811_5]}>
        <View style={[styles.rectangle, styles.groupItemPosition]} />
        <View style={styles.statusBar}>
          <View style={[styles.time, styles.timePosition]}>
            <Text style={[styles.text, styles.textLayout, styles.textPosition]}>
              9:41
            </Text>
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
      <View style={[styles.homeIndicator, styles.mt17_5, styles.ml1]} />
      <Text
        style={[styles.hello1, styles.mt204_5, styles.ml1, styles.helloTypo]}
      >
        Tap anywhere to continue
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  mt28_5: {
    marginTop: GlobalStyles.Margin.margin_2xs,
  },
  mr2: {
    marginRight: GlobalStyles.Margin.margin_31xs,
  },
  mt31_5: {
    marginTop: 31.5,
  },
  mt220_5: {
    marginTop: 220.5,
  },
  mt_811_5: {
    marginTop: GlobalStyles.Margin.margin_88xs,
  },
  mt17_5: {
    marginTop: 17.5,
  },
  ml1: {
    marginLeft: GlobalStyles.Margin.margin_32xs,
  },
  mt204_5: {
    marginTop: 204.5,
  },
  timePosition: {
    bottom: 0,
    left: 0,
    top: 0,
    position: "absolute",
  },
  textPosition: {
    position: "absolute",
    left: 0,
    top: 0,
  },
  groupItemPosition: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: -3,
    },
    left: 0,
    bottom: 0,
    right: 0,
    position: "absolute",
    backgroundColor: GlobalStyles.Color.white,
  },
  helloTypo: {
    textAlign: "center",
    fontFamily: GlobalStyles.FontFamily.helvetica,
  },
  textLayout: {
    lineHeight: 24,
    fontSize: GlobalStyles.FontSize.size_4xl,
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
  groupChild: {
    bottom: 172,
    backgroundColor: GlobalStyles.Color.gray_300,
    left: 0,
    right: 0,
    top: 0,
  },
  groupItem: {
    top: 63,
    borderTopLeftRadius: GlobalStyles.Border.br_4xl,
    borderTopRightRadius: GlobalStyles.Border.br_4xl,
    shadowColor: "rgba(1, 1, 253, 0.1)",
    shadowRadius: 20,
    elevation: 20,
  },
  rectangleParent: {
    left: 0,
    right: 0,
  },
  requestedInner: {
    height: 812,
    width: 375,
  },
  requestedChild: {
    borderStyle: "solid",
    borderColor: "#707070",
    borderTopWidth: 3,
    width: 52,
    height: 6,
  },
  youHaveRequested: {
    margin: GlobalStyles.Margin.margin_33xs,
  },
  hello: {
    fontWeight: "700",
    color: GlobalStyles.Color.indigo,
  },
  iconAwesomeCheckCircle: {
    width: 187,
    height: 187,
  },
  rectangle: {
    shadowColor: "rgba(0, 0, 0, 0.05)",
    shadowRadius: 6,
    elevation: 6,
    top: 0,
  },
  text: {
    letterSpacing: 0,
    fontWeight: "500",
    fontFamily: GlobalStyles.FontFamily.roboto,
    color: GlobalStyles.Color.gray_1900,
    textAlign: "left",
    left: 0,
    top: 0,
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
    top: "50%",
    position: "absolute",
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
  hello1: {
    fontSize: GlobalStyles.FontSize.size_xs,
    color: GlobalStyles.Color.gray_800,
  },
  requested: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    backgroundColor: GlobalStyles.Color.white,
  },
});

export default Requested;
