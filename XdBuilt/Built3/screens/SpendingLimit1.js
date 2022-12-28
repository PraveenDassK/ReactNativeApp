import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import GlobalStyles from "../GlobalStyles";

const SpendingLimit1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.spendingLimit1}>
      <View style={styles.spendingLimit1Child} />
      <View style={[styles.rectangleParent, styles.mt63, styles.ml1]}>
        <View style={styles.groupChild} />
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
            style={[styles.meter1Icon, styles.iconLayout]}
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
        style={[styles.iconFeatherArrowLeftWrapper, styles.mt_769]}
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
      <Image
        style={[styles.cardIcon, styles.mt62, styles.ml1]}
        resizeMode="cover"
        source={require("../assets/card.png")}
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
  mt63: {
    marginTop: GlobalStyles.Margin.margin_34xl,
  },
  ml1: {
    marginLeft: GlobalStyles.Margin.margin_24xs,
  },
  mt_769: {
    marginTop: GlobalStyles.Margin.margin_60xs,
  },
  mt_159: {
    marginTop: GlobalStyles.Margin.margin_53xs,
  },
  mt7: {
    marginTop: GlobalStyles.Margin.margin_20xs,
  },
  mt10: {
    marginTop: GlobalStyles.Margin.margin_16xs,
  },
  ml2: {
    marginLeft: GlobalStyles.Margin.margin_23xs,
  },
  mt62: {
    marginTop: GlobalStyles.Margin.margin_33xl,
  },
  mr142: {
    marginRight: GlobalStyles.Margin.margin_47xl,
  },
  mt13: {
    marginTop: GlobalStyles.Margin.margin_10xs,
  },
  mr4: {
    marginRight: GlobalStyles.Margin.margin_22xs,
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
    width: 375,
    height: 815,
    backgroundColor: GlobalStyles.Color.gray_300,
  },
  groupChild: {
    marginTop: -181,
    right: 0,
    borderRadius: GlobalStyles.Border.br_4xl,
    backgroundColor: GlobalStyles.Color.white,
    left: 0,
    top: "50%",
    position: "absolute",
    height: 362,
  },
  cardSpendingLimit1: {
    color: GlobalStyles.Color.gray_1300,
    fontFamily: GlobalStyles.FontFamily.helvetica,
    fontWeight: "700",
    fontSize: GlobalStyles.FontSize.size_sm,
  },
  cardSpendingLimit: {
    margin: GlobalStyles.Margin.margin_25xs,
  },
  theSpend: {
    fontSize: GlobalStyles.FontSize.size_4xs,
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
    top: 0,
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
    borderRadius: GlobalStyles.Border.br_xs,
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
    fontSize: GlobalStyles.FontSize.size_5xl,
    color: GlobalStyles.Color.gray_800,
    fontFamily: GlobalStyles.FontFamily.helvetica,
    fontWeight: "700",
    textAlign: "left",
  },
  hello1: {
    color: GlobalStyles.Color.gray_800,
    fontFamily: GlobalStyles.FontFamily.helvetica,
    fontWeight: "700",
    fontSize: GlobalStyles.FontSize.size_sm,
    textAlign: "left",
  },
  limitIs100: {
    color: GlobalStyles.Color.gray_800,
  },
  changeLimit: {
    color: GlobalStyles.Color.blue,
  },
  hello2: {
    fontSize: GlobalStyles.FontSize.size_4xs,
    fontFamily: GlobalStyles.FontFamily.helvetica,
    textAlign: "left",
  },
  cardIcon: {
    width: 12,
    height: 9,
  },
  hello3: {
    fontSize: GlobalStyles.FontSize.size_6xl,
    fontFamily: GlobalStyles.FontFamily.typoGrotesk,
    color: GlobalStyles.Color.indigo,
    fontWeight: "700",
    textAlign: "left",
  },
  theLimitDeterminesTheAmoun: {
    lineHeight: 16,
    width: 316,
    fontSize: GlobalStyles.FontSize.size_sm,
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
