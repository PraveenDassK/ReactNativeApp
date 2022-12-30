import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import GlobalStyles from "../GlobalStyles";

const SentMoney = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.sentMoney}
      onPress={() => navigation.navigate("SendMoney")}
    >
      <View style={styles.sentMoneyInner}>
        <View style={[styles.rectangleParent, styles.timePosition]}>
          <View style={styles.groupChild} />
          <View style={[styles.groupItem, styles.groupItemShadowBox]} />
          <Text style={[styles.hello, styles.helloTypo, styles.helloTypo1]}>
            Tap anywhere to continue
          </Text>
        </View>
      </View>
      <View style={[styles.sentMoneyChild, styles.mt28_5, styles.mr2]} />
      <View style={[styles.statusBarBlack, styles.mt_811_5]}>
        <View style={[styles.rectangle, styles.groupItemShadowBox]} />
        <View style={styles.statusBar}>
          <View style={[styles.time, styles.timePosition]}>
            <Text style={[styles.text, styles.textLayout]}>9:41</Text>
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
      <View style={[styles.homeIndicator, styles.mt242_5, styles.ml1]} />
      <Text
        style={[
          styles.hello1,
          styles.mt32_5,
          styles.ml1,
          styles.textLayout,
          styles.helloTypo,
        ]}
      >
        <Text style={styles.youveSent}>{`You've sent `}</Text>
        <Text style={styles.text1}>{`£3,420 `}</Text>
        <Text style={styles.youveSent}>{`to `}</Text>
        <Text style={styles.text1}>Tribe First</Text>
      </Text>
      <Image
        style={[styles.iconAwesomeCheckCircle, styles.mt140_5]}
        resizeMode="cover"
        source={require("../assets/icon-awesomecheckcircle.png")}
      />
      <View style={[styles.groupParent, styles.mt32_5, styles.ml1]}>
        <View style={[styles.groupInner, styles.groupPosition]} />
        <View style={[styles.groupChild1, styles.groupPosition]} />
      </View>
      <View style={[styles.helloWrapper, styles.mt18_5, styles.ml1]}>
        <Text style={[styles.hello2, styles.helloTypo, styles.helloTypo1]}>
          <Text style={styles.youveUsed1}>
            You've used 1 of your 100 monthly free local
          </Text>
          <Text style={styles.youveUsed1}>{`transfers allowance `}</Text>
        </Text>
      </View>
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
  mt_811_5: {
    marginTop: GlobalStyles.Margin.margin_88xs,
  },
  mt242_5: {
    marginTop: 242.5,
  },
  ml1: {
    marginLeft: GlobalStyles.Margin.margin_32xs,
  },
  mt32_5: {
    marginTop: GlobalStyles.Margin.margin_lg,
  },
  mt140_5: {
    marginTop: 140.5,
  },
  mt18_5: {
    marginTop: 18.5,
  },
  timePosition: {
    bottom: 0,
    left: 0,
    top: 0,
    position: "absolute",
  },
  groupItemShadowBox: {
    shadowOpacity: 1,
    elevation: 6,
    shadowRadius: 6,
    shadowOffset: {
      width: 0,
      height: 3,
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
  helloTypo1: {
    color: GlobalStyles.Color.gray_800,
    textAlign: "center",
    fontFamily: GlobalStyles.FontFamily.helvetica,
    position: "absolute",
  },
  textLayout: {
    lineHeight: 24,
    fontSize: GlobalStyles.FontSize.size_4xl,
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
  groupPosition: {
    borderRadius: GlobalStyles.Border.br_6xs,
    left: 0,
    bottom: 0,
    top: 0,
    position: "absolute",
  },
  groupChild: {
    bottom: 172,
    backgroundColor: GlobalStyles.Color.gray_300,
    left: 0,
    right: 0,
    top: 0,
    position: "absolute",
  },
  groupItem: {
    top: 63,
    borderTopLeftRadius: GlobalStyles.Border.br_4xl,
    borderTopRightRadius: GlobalStyles.Border.br_4xl,
    shadowColor: "rgba(1, 1, 253, 0.05)",
  },
  hello: {
    marginTop: 362,
    left: 120,
    fontSize: GlobalStyles.FontSize.size_xs,
    top: "50%",
  },
  rectangleParent: {
    left: 0,
    right: 0,
  },
  sentMoneyInner: {
    height: 812,
    width: 375,
  },
  sentMoneyChild: {
    borderStyle: "solid",
    borderColor: "#707070",
    borderTopWidth: 3,
    width: 52,
    height: 6,
  },
  rectangle: {
    shadowColor: "rgba(0, 0, 0, 0.05)",
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
    position: "absolute",
  },
  time: {
    width: 40,
    left: 0,
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
  homeIndicator: {
    borderRadius: GlobalStyles.Border.br_8xl,
    backgroundColor: GlobalStyles.Color.black,
    width: 134,
    height: 5,
  },
  youveSent: {
    color: GlobalStyles.Color.indigo,
  },
  text1: {
    color: GlobalStyles.Color.blue,
  },
  hello1: {
    fontWeight: "700",
    textAlign: "center",
    fontFamily: GlobalStyles.FontFamily.helvetica,
    lineHeight: 24,
    fontSize: GlobalStyles.FontSize.size_4xl,
  },
  iconAwesomeCheckCircle: {
    width: 187,
    height: 187,
  },
  groupInner: {
    backgroundColor: "#bebebe",
    right: 0,
  },
  groupChild1: {
    backgroundColor: GlobalStyles.Color.blue,
    width: 17,
  },
  groupParent: {
    width: 308,
    height: 5,
  },
  youveUsed1: {
    margin: GlobalStyles.Margin.margin_33xs,
  },
  hello2: {
    fontSize: GlobalStyles.FontSize.size_base,
    lineHeight: 25,
    left: 0,
    top: 0,
  },
  helloWrapper: {
    width: 274,
    height: 41,
  },
  sentMoney: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    backgroundColor: GlobalStyles.Color.white,
  },
});

export default SentMoney;
