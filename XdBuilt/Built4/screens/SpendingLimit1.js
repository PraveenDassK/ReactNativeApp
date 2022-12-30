import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import GlobalStyles from "../GlobalStyles";

const SpendingLimit1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.spendingLimit1}>
      <View style={styles.spendingLimit1Child} />
      <View style={[styles.statusBarBlack, styles.mt_815]}>
        <View
          style={[
            styles.rectangle,
            styles.rectanglePosition,
            styles.timePosition,
          ]}
        />
        <View style={styles.statusBar}>
          <View style={[styles.time, styles.timePosition]}>
            <Text style={[styles.text, styles.textPosition]}>9:41</Text>
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
      <View style={[styles.rectangleParent, styles.mt63, styles.ml1]}>
        <View style={[styles.groupChild, styles.rectanglePosition]} />
        <View
          style={[
            styles.cardSpendingLimitTheSpendParent,
            styles.component22410Position,
          ]}
        >
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
            style={[styles.meter1Icon, styles.iconLayout, styles.textPosition]}
            resizeMode="cover"
            source={require("../assets/meter-1.png")}
          />
        </View>
        <View style={[styles.component22410, styles.component22410Position]}>
          <View style={styles.component22410Child} />
          <Image
            style={[styles.component22410Item, styles.itemLayout]}
            resizeMode="cover"
            source={require("../assets/ellipse-350.png")}
          />
        </View>
        <Image
          style={[styles.groupItem, styles.itemLayout]}
          resizeMode="cover"
          source={require("../assets/group-27579.png")}
        />
      </View>
      <Pressable
        style={[styles.iconFeatherArrowLeftWrapper, styles.mt2]}
        onPress={() => navigation.navigate("CardSettings")}
      >
        <Image
          style={[styles.iconFeatherArrowLeft, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/icon-featherarrowleft.png")}
        />
      </Pressable>
      <Text style={[styles.hello, styles.mt_159, styles.ml1]}>£22.33</Text>
      <Text style={[styles.hello1, styles.mt7, styles.ml1]}>
        Spent this month
      </Text>
      <Text style={[styles.hello2, styles.mt10, styles.ml2]}>
        <Text style={styles.limitIs100}>{`Limit is £100. `}</Text>
        <Text style={styles.changeLimit}>Change limit</Text>
      </Text>
      <View style={[styles.homeIndicator, styles.mt209, styles.ml1]} />
      <Image
        style={[styles.cardIcon, styles.mt62, styles.ml1]}
        resizeMode="cover"
        source={require("../assets/card1.png")}
      />
      <Text style={[styles.hello3, styles.mt10, styles.mr142]}>
        Spending limit
      </Text>
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
    </View>
  );
};

const styles = StyleSheet.create({
  mt_815: {
    marginTop: GlobalStyles.Margin.margin_91xs,
  },
  mt63: {
    marginTop: GlobalStyles.Margin.margin_29xl,
  },
  ml1: {
    marginLeft: GlobalStyles.Margin.margin_32xs,
  },
  mt2: {
    marginTop: GlobalStyles.Margin.margin_31xs,
  },
  mt_159: {
    marginTop: GlobalStyles.Margin.margin_76xs,
  },
  mt7: {
    marginTop: GlobalStyles.Margin.margin_27xs,
  },
  mt10: {
    marginTop: GlobalStyles.Margin.margin_24xs,
  },
  ml2: {
    marginLeft: GlobalStyles.Margin.margin_31xs,
  },
  mt209: {
    marginTop: GlobalStyles.Margin.margin_77xl,
  },
  mt62: {
    marginTop: GlobalStyles.Margin.margin_28xl,
  },
  mr142: {
    marginRight: GlobalStyles.Margin.margin_59xl,
  },
  mt13: {
    marginTop: GlobalStyles.Margin.margin_21xs,
  },
  mr4: {
    marginRight: GlobalStyles.Margin.margin_29xs,
  },
  rectanglePosition: {
    backgroundColor: GlobalStyles.Color.white,
    left: 0,
    right: 0,
    position: "absolute",
  },
  timePosition: {
    bottom: 0,
    top: 0,
  },
  textPosition: {
    top: 0,
    left: 0,
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
  component22410Position: {
    right: 22,
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
  itemLayout: {
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  spendingLimit1Child: {
    height: 815,
    width: 375,
    backgroundColor: GlobalStyles.Color.gray_300,
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
    position: "absolute",
  },
  time: {
    width: 40,
    left: 0,
    position: "absolute",
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
    backgroundColor: GlobalStyles.Color.gray_1400,
    borderRadius: GlobalStyles.Border.br_7xs,
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
  groupChild: {
    marginTop: -181,
    borderRadius: GlobalStyles.Border.br_5xl,
    height: 362,
    top: "50%",
  },
  cardSpendingLimit1: {
    color: GlobalStyles.Color.gray_1400,
    fontFamily: GlobalStyles.FontFamily.helvetica,
    fontWeight: "700",
    fontSize: GlobalStyles.FontSize.size_base,
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
    textAlign: "left",
    top: "50%",
    position: "absolute",
  },
  meter1Icon: {
    left: 0,
  },
  cardSpendingLimitTheSpendParent: {
    top: 20,
    left: 21,
    height: 33,
  },
  component22410Child: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: GlobalStyles.Border.br_sm,
    backgroundColor: GlobalStyles.Color.blue,
    position: "absolute",
    width: "100%",
  },
  component22410Item: {
    height: "76.92%",
    width: "43.48%",
    top: "11.54%",
    right: "6.52%",
    bottom: "11.54%",
    maxHeight: "100%",
    left: "50%",
  },
  component22410: {
    top: 23,
    width: 46,
    height: 26,
  },
  groupItem: {
    marginTop: -80.03,
    right: 49,
    left: 48,
    height: 180,
    top: "50%",
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
  hello: {
    fontSize: GlobalStyles.FontSize.size_7xl,
    color: GlobalStyles.Color.gray_800,
    fontFamily: GlobalStyles.FontFamily.helvetica,
    fontWeight: "700",
    textAlign: "left",
  },
  hello1: {
    color: GlobalStyles.Color.gray_800,
    fontFamily: GlobalStyles.FontFamily.helvetica,
    fontWeight: "700",
    fontSize: GlobalStyles.FontSize.size_base,
    textAlign: "left",
  },
  limitIs100: {
    color: GlobalStyles.Color.gray_800,
  },
  changeLimit: {
    color: GlobalStyles.Color.blue,
  },
  hello2: {
    fontSize: GlobalStyles.FontSize.size_3xs,
    fontFamily: GlobalStyles.FontFamily.helvetica,
    textAlign: "left",
  },
  homeIndicator: {
    borderRadius: GlobalStyles.Border.br_8xl,
    backgroundColor: GlobalStyles.Color.black,
    width: 134,
    height: 5,
  },
  cardIcon: {
    width: 12,
    height: 9,
  },
  hello3: {
    fontSize: GlobalStyles.FontSize.size_8xl,
    fontFamily: GlobalStyles.FontFamily.typoGrotesk,
    color: GlobalStyles.Color.indigo,
    fontWeight: "700",
    textAlign: "left",
  },
  theLimitDeterminesTheAmoun: {
    lineHeight: 16,
    width: 316,
    fontSize: GlobalStyles.FontSize.size_base,
    textAlign: "left",
  },
  spendingLimit1: {
    backgroundColor: GlobalStyles.Color.gray_1100,
    flex: 1,
    alignItems: "center",
    width: "100%",
  },
});

export default SpendingLimit1;
