import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import GlobalStyles from "../GlobalStyles";

const SpendingLimit3 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.spendingLimit3}>
      <View style={styles.spendingLimit3Child} />
      <Text style={[styles.hello, styles.mt10, styles.mr142]}>
        Spending limit
      </Text>
      <View style={[styles.statusBarBlack, styles.mt_815]}>
        <View style={[styles.rectangle, styles.timePosition]} />
        <View style={[styles.statusBar, styles.statusBarLayout]}>
          <View style={[styles.time, styles.timePosition]}>
            <Text style={styles.text}>9:41</Text>
          </View>
          <Image
            style={styles.batteryIcon}
            resizeMode="cover"
            source={require("../assets/icon-awesomebatterythreequarters.png")}
          />
          <Image
            style={[styles.wifiIcon, styles.networkPosition]}
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
      <View style={[styles.rectangleParent, styles.mt66, styles.ml1]}>
        <View style={styles.groupChild} />
        <View style={styles.cardSpendingLimitTheSpendParent}>
          <Text style={styles.cardSpendingLimitTheSpend}>
            <Text style={styles.cardSpendingLimit}>
              <Text style={styles.cardSpendingLimit1}>Card spending limit</Text>
            </Text>
            <Text style={styles.cardSpendingLimit}>
              <Text
                style={[styles.theSpend, styles.theColor]}
              >{`The spend & withdrawal cap`}</Text>
            </Text>
          </Text>
          <Image
            style={[styles.meter1Icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/meter-14.png")}
          />
        </View>
        <Pressable
          style={styles.component22416}
          onPress={() => navigation.navigate("SetLimit1")}
        >
          <View style={[styles.component22416Child, styles.statusBarLayout]} />
          <Image
            style={styles.component22416Item}
            resizeMode="cover"
            source={require("../assets/ellipse-350.png")}
          />
        </Pressable>
        <Image
          style={styles.groupItem}
          resizeMode="cover"
          source={require("../assets/group-275793.png")}
        />
      </View>
      <Pressable
        style={[styles.iconFeatherArrowLeftWrapper, styles.mt2]}
        onPress={() => navigation.navigate("Account3")}
      >
        <Image
          style={[styles.iconFeatherArrowLeft, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/icon-featherarrowleft.png")}
        />
      </Pressable>
      <Text
        style={[styles.hello1, styles.mt_178, styles.ml1, styles.helloTypo]}
      >
        £22.33
      </Text>
      <Text style={[styles.hello2, styles.mt7, styles.ml1, styles.helloTypo]}>
        Spent this month
      </Text>
      <Text style={[styles.hello3, styles.mt11, styles.ml2, styles.helloTypo]}>
        Limit is toggled off
      </Text>
      <View style={[styles.homeIndicator, styles.mt206, styles.ml1]} />
      <Text
        style={[
          styles.theLimitDeterminesTheAmoun,
          styles.mt13,
          styles.mr4,
          styles.theColor,
        ]}
      >
        The limit determines the amount that can be spent or withdrawn using
        this card per month
      </Text>
      <Image
        style={[styles.cardIcon, styles.mt80, styles.ml1]}
        resizeMode="cover"
        source={require("../assets/card1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mt10: {
    marginTop: GlobalStyles.Margin.margin_24xs,
  },
  mr142: {
    marginRight: GlobalStyles.Margin.margin_59xl,
  },
  mt_815: {
    marginTop: GlobalStyles.Margin.margin_91xs,
  },
  mt66: {
    marginTop: GlobalStyles.Margin.margin_30xl,
  },
  ml1: {
    marginLeft: GlobalStyles.Margin.margin_32xs,
  },
  mt2: {
    marginTop: GlobalStyles.Margin.margin_31xs,
  },
  mt_178: {
    marginTop: GlobalStyles.Margin.margin_77xs,
  },
  mt7: {
    marginTop: GlobalStyles.Margin.margin_27xs,
  },
  mt11: {
    marginTop: GlobalStyles.Margin.margin_23xs,
  },
  ml2: {
    marginLeft: GlobalStyles.Margin.margin_31xs,
  },
  mt206: {
    marginTop: GlobalStyles.Margin.margin_76xl,
  },
  mt13: {
    marginTop: GlobalStyles.Margin.margin_21xs,
  },
  mr4: {
    marginRight: GlobalStyles.Margin.margin_29xs,
  },
  mt80: {
    marginTop: GlobalStyles.Margin.margin_40xl,
  },
  timePosition: {
    bottom: 0,
    left: 0,
    top: 0,
    position: "absolute",
  },
  statusBarLayout: {
    height: 26,
    position: "absolute",
  },
  networkPosition: {
    width: 17,
    marginTop: -3,
    top: "50%",
    position: "absolute",
  },
  networkLayout: {
    width: 3,
    backgroundColor: GlobalStyles.Color.gray_1400,
    borderRadius: GlobalStyles.Border.br_7xs,
    bottom: 0,
    position: "absolute",
  },
  theColor: {
    color: GlobalStyles.Color.gray_900,
    fontFamily: GlobalStyles.FontFamily.helvetica,
  },
  iconLayout: {
    height: 17,
    width: 17,
    position: "absolute",
  },
  helloTypo: {
    color: GlobalStyles.Color.gray_800,
    fontFamily: GlobalStyles.FontFamily.helvetica,
    textAlign: "left",
  },
  spendingLimit3Child: {
    height: 815,
    width: 375,
    backgroundColor: GlobalStyles.Color.gray_300,
  },
  hello: {
    fontSize: GlobalStyles.FontSize.size_8xl,
    fontFamily: GlobalStyles.FontFamily.typoGrotesk,
    color: GlobalStyles.Color.indigo,
    textAlign: "left",
    fontWeight: "700",
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
    left: 0,
    top: 0,
    position: "absolute",
    textAlign: "left",
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
    height: 11,
  },
  statusBar: {
    marginTop: -15,
    right: 16,
    left: 15,
    top: "50%",
  },
  statusBarBlack: {
    height: 44,
    width: 375,
  },
  groupChild: {
    marginTop: -181,
    borderRadius: GlobalStyles.Border.br_5xl,
    height: 362,
    top: "50%",
    left: 0,
    right: 0,
    position: "absolute",
    backgroundColor: GlobalStyles.Color.white,
  },
  cardSpendingLimit1: {
    color: GlobalStyles.Color.gray_1400,
    fontFamily: GlobalStyles.FontFamily.helvetica,
    fontSize: GlobalStyles.FontSize.size_base,
    fontWeight: "700",
  },
  cardSpendingLimit: {
    margin: GlobalStyles.Margin.margin_33xs,
  },
  theSpend: {
    fontSize: GlobalStyles.FontSize.size_3xs,
  },
  cardSpendingLimitTheSpend: {
    marginTop: -16.5,
    left: 27,
    lineHeight: 18,
    width: 257,
    top: "50%",
    position: "absolute",
    textAlign: "left",
  },
  meter1Icon: {
    left: 0,
    top: 0,
  },
  cardSpendingLimitTheSpendParent: {
    top: 20,
    right: 22,
    left: 21,
    height: 33,
    position: "absolute",
  },
  component22416Child: {
    borderRadius: GlobalStyles.Border.br_sm,
    backgroundColor: GlobalStyles.Color.gray_700,
    width: 46,
    left: 0,
    top: 0,
  },
  component22416Item: {
    top: 3,
    left: 3,
    width: 20,
    height: 20,
    position: "absolute",
  },
  component22416: {
    height: "7.18%",
    width: "14.11%",
    top: "6.35%",
    right: "6.75%",
    bottom: "86.46%",
    left: "79.14%",
    position: "absolute",
  },
  groupItem: {
    marginTop: -80.03,
    right: 49,
    left: 48,
    maxWidth: "100%",
    overflow: "hidden",
    height: 180,
    top: "50%",
    position: "absolute",
  },
  rectangleParent: {
    width: 326,
    height: 362,
  },
  iconFeatherArrowLeft: {
    marginLeft: -0.5,
    bottom: 4,
    left: "50%",
  },
  iconFeatherArrowLeftWrapper: {
    width: 55,
    height: 45,
    alignSelf: "flex-start",
    backgroundColor: GlobalStyles.Color.gray_300,
  },
  hello1: {
    fontSize: GlobalStyles.FontSize.size_7xl,
    fontWeight: "700",
  },
  hello2: {
    fontSize: GlobalStyles.FontSize.size_base,
    fontWeight: "700",
  },
  hello3: {
    fontSize: GlobalStyles.FontSize.size_3xs,
  },
  homeIndicator: {
    borderRadius: GlobalStyles.Border.br_8xl,
    backgroundColor: GlobalStyles.Color.black,
    width: 134,
    height: 5,
  },
  theLimitDeterminesTheAmoun: {
    lineHeight: 16,
    width: 316,
    fontSize: GlobalStyles.FontSize.size_base,
    textAlign: "left",
  },
  cardIcon: {
    width: 12,
    height: 9,
  },
  spendingLimit3: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    backgroundColor: GlobalStyles.Color.white,
  },
});

export default SpendingLimit3;
