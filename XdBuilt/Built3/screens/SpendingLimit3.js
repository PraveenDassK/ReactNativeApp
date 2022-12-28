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
      <View style={[styles.rectangleParent, styles.mt66, styles.ml1]}>
        <View style={styles.groupChild} />
        <View style={styles.cardSpendingLimitTheSpendParent}>
          <Text
            style={[styles.cardSpendingLimitTheSpend, styles.groupItemPosition]}
          >
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
            style={[styles.iconLayout, styles.meter1IconPosition]}
            resizeMode="cover"
            source={require("../assets/meter-14.png")}
          />
        </View>
        <Pressable
          style={styles.component22416}
          onPress={() => navigation.navigate("SetLimit1")}
        >
          <View
            style={[styles.component22416Child, styles.meter1IconPosition]}
          />
          <Image
            style={styles.component22416Item}
            resizeMode="cover"
            source={require("../assets/ellipse-350.png")}
          />
        </Pressable>
        <Image
          style={[styles.groupItem, styles.groupItemPosition]}
          resizeMode="cover"
          source={require("../assets/group-275793.png")}
        />
      </View>
      <Pressable
        style={[styles.iconFeatherArrowLeftWrapper, styles.mt_769]}
        onPress={() => navigation.navigate("Account")}
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
        source={require("../assets/card.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mt10: {
    marginTop: GlobalStyles.Margin.margin_16xs,
  },
  mr142: {
    marginRight: GlobalStyles.Margin.margin_47xl,
  },
  mt66: {
    marginTop: GlobalStyles.Margin.margin_36xl,
  },
  ml1: {
    marginLeft: GlobalStyles.Margin.margin_24xs,
  },
  mt_769: {
    marginTop: GlobalStyles.Margin.margin_60xs,
  },
  mt_178: {
    marginTop: GlobalStyles.Margin.margin_54xs,
  },
  mt7: {
    marginTop: GlobalStyles.Margin.margin_20xs,
  },
  mt11: {
    marginTop: GlobalStyles.Margin.margin_14xs,
  },
  ml2: {
    marginLeft: GlobalStyles.Margin.margin_23xs,
  },
  mt13: {
    marginTop: GlobalStyles.Margin.margin_10xs,
  },
  mr4: {
    marginRight: GlobalStyles.Margin.margin_22xs,
  },
  mt80: {
    marginTop: GlobalStyles.Margin.margin_41xl,
  },
  groupItemPosition: {
    top: "50%",
    position: "absolute",
  },
  theColor: {
    color: GlobalStyles.Color.gray_900,
    fontFamily: GlobalStyles.FontFamily.helvetica,
  },
  meter1IconPosition: {
    top: 0,
    left: 0,
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
    width: 375,
    height: 815,
    backgroundColor: GlobalStyles.Color.gray_300,
  },
  hello: {
    fontSize: GlobalStyles.FontSize.size_6xl,
    fontFamily: GlobalStyles.FontFamily.typoGrotesk,
    color: GlobalStyles.Color.indigo,
    textAlign: "left",
    fontWeight: "700",
  },
  groupChild: {
    marginTop: -181,
    right: 0,
    borderRadius: GlobalStyles.Border.br_4xl,
    left: 0,
    top: "50%",
    position: "absolute",
    height: 362,
    backgroundColor: GlobalStyles.Color.white,
  },
  cardSpendingLimit1: {
    color: GlobalStyles.Color.gray_1300,
    fontFamily: GlobalStyles.FontFamily.helvetica,
    fontSize: GlobalStyles.FontSize.size_sm,
    fontWeight: "700",
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
  },
  cardSpendingLimitTheSpendParent: {
    top: 20,
    right: 22,
    left: 21,
    height: 33,
    position: "absolute",
  },
  component22416Child: {
    borderRadius: GlobalStyles.Border.br_xs,
    backgroundColor: GlobalStyles.Color.gray_700,
    width: 46,
    height: 26,
    position: "absolute",
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
    fontSize: GlobalStyles.FontSize.size_5xl,
    fontWeight: "700",
  },
  hello2: {
    fontSize: GlobalStyles.FontSize.size_sm,
    fontWeight: "700",
  },
  hello3: {
    fontSize: GlobalStyles.FontSize.size_4xs,
  },
  theLimitDeterminesTheAmoun: {
    lineHeight: 16,
    width: 316,
    fontSize: GlobalStyles.FontSize.size_sm,
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
