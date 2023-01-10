import * as React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import GlobalStyles from "../../GlobalStyles";
import Screen from "../components/Screen";

const SpendingLimit1 = () => {
  return (
    <Screen>
    <View style={styles.spendingLimit1}>
    
      <View style={styles.spendingLimit1Child} />
      <View style={[styles.groupParent, styles.mt_706, styles.ml1]}>
        <View style={[styles.rectangleParent, styles.groupChildPosition]}>
          <View style={[styles.groupChild, styles.groupChildPosition]} />
          <View
            style={[
              styles.cardSpendingLimitTheSpendParent,
              styles.rectangleGroupPosition,
            ]}
          >
            <Text style={styles.cardSpendingLimitTheSpend}>
              <Text style={styles.cardSpendingLimit}>
                <Text style={styles.cardSpendingLimit1}>
                  Card spending limit
                </Text>
              </Text>
              <Text style={styles.cardSpendingLimit}>
                <Text
                  style={[styles.theSpend, styles.theColor]}
                >{`\n The spend & withdrawal cap`}</Text>
              </Text>
            </Text>
            <Image
              style={[styles.meter1Icon, styles.hello3Position]}
              resizeMode="cover"
              source={require("../assets/meter-1.png")}
            />
          </View>
          <View style={[styles.rectangleGroup, styles.rectangleGroupPosition]}>
            <View style={styles.groupItem} />
            <Image
              style={[styles.groupInner, styles.groupLayout]}
              resizeMode="cover"
              source={require("../assets/ellipse-350.png")}
            />
          </View>
          <Image
            style={[styles.groupIcon, styles.groupLayout]}
            resizeMode="cover"
            source={require("../assets/group-275792.png")}
          />
        </View>
        <Text style={styles.hello}>£22.33</Text>
        <Text style={styles.hello1}>Spent this month</Text>
        <Text style={styles.hello2}>
          <Text style={styles.limitIs100}>{`Limit is £100. `}</Text>
          <Text style={styles.changeLimit}>Change limit</Text>
        </Text>
        <Image
          style={styles.cardIcon}
          resizeMode="cover"
          source={require("../assets/card.png")}
        />
        <Text style={[styles.hello3, styles.hello3Position]}>
          Spending limit
        </Text>
        <Text style={[styles.theLimitDeterminesTheAmoun, styles.theColor]}>
          The limit determines the amount that can be spent {"\n"}or withdrawn using
          this card per month
        </Text>
      </View>
    </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  mt_706: {
    marginTop: -756,
  },
  ml1: {
    marginLeft: GlobalStyles.Margin.margin_7xs,
  },
  groupChildPosition: {
    right: 0,
    left: 0,
    position: "absolute",
  },
  rectangleGroupPosition: {
    right: 22,
    position: "absolute",
  },
  theColor: {
    color: GlobalStyles.Color.gray_800,
    // fontFamily: GlobalStyles.FontFamily.helvetica,
  },
  hello3Position: {
    top: 0,
    position: "absolute",
  },
  groupLayout: {
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  spendingLimit1Child: {
    backgroundColor: GlobalStyles.Color.gray_200,
    width: 375,
    height: 815,
  },
  groupChild: {
    marginTop: -181,
    borderRadius: GlobalStyles.Border.br_5xl,
    backgroundColor: GlobalStyles.Color.white,
    height: 362,
    top: "50%",
    left: 0,
  },
  cardSpendingLimit1: {
    color: GlobalStyles.Color.gray_1400,
    // fontFamily: GlobalStyles.FontFamily.helvetica,
    fontWeight: "700",
    fontSize: GlobalStyles.FontSize.size_base,
  },
  cardSpendingLimit: {
    margin: GlobalStyles.Margin.margin_8xs,
  },
  theSpend: {
    fontSize: GlobalStyles.FontSize.size_3xs,
  },
  cardSpendingLimitTheSpend: {
    marginTop: -15.5,
    left: 27,
    lineHeight: 18,
    width: 257,
    textAlign: "left",
    top: "50%",
    position: "absolute",
  },
  meter1Icon: {
    width: 17,
    height: 17,
    left: 0,
  },
  cardSpendingLimitTheSpendParent: {
    top: 20,
    left: 21,
    height: 31,
  },
  groupItem: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: GlobalStyles.Border.br_sm,
    backgroundColor: GlobalStyles.Color.blue_100,
    position: "absolute",
    width: "100%",
  },
  groupInner: {
    height: "76.92%",
    width: "43.48%",
    top: "11.54%",
    right: "6.52%",
    bottom: "11.54%",
    maxHeight: "100%",
    left: "50%",
  },
  rectangleGroup: {
    top: 23,
    width: 46,
    height: 26,
  },
  groupIcon: {
    marginTop: -80.03,
    right: 49,
    left: 48,
    height: 180,
    top: "50%",
  },
  rectangleParent: {
    top: 135,
    bottom: 0,
    left: 0,
  },
  hello: {
    marginTop: 93.5,
    marginLeft: -38,
    fontSize: GlobalStyles.FontSize.size_7xl,
    color: GlobalStyles.Color.gray_700,
    left: "50%",
    // fontFamily: GlobalStyles.FontFamily.helvetica,
    fontWeight: "700",
    textAlign: "left",
    top: "50%",
    position: "absolute",
  },
  hello1: {
    marginTop: 126.5,
    marginLeft: -57,
    color: GlobalStyles.Color.gray_700,
    left: "50%",
    // fontFamily: GlobalStyles.FontFamily.helvetica,
    fontWeight: "700",
    fontSize: GlobalStyles.FontSize.size_base,
    textAlign: "left",
    top: "50%",
    position: "absolute",
  },
  limitIs100: {
    color: GlobalStyles.Color.gray_700,
  },
  changeLimit: {
    color: GlobalStyles.Color.blue_100,
  },
  hello2: {
    marginLeft: -58,
    bottom: 16,
    left: "50%",
    fontSize: GlobalStyles.FontSize.size_3xs,
    // fontFamily: GlobalStyles.FontFamily.helvetica,
    textAlign: "left",
    position: "absolute",
  },
  cardIcon: {
    marginLeft: -6,
    bottom: 37,
    width: 12,
    height: 9,
    left: "50%",
    position: "absolute",
  },
  hello3: {
    left: 2,
    fontSize: GlobalStyles.FontSize.size_8xl,
    // fontFamily: GlobalStyles.FontFamily.typoGrotesk,
    color: GlobalStyles.Color.indigo_100,
    fontWeight: "700",
    textAlign: "left",
  },
  theLimitDeterminesTheAmoun: {
    top: 40,
    left: 3,
    lineHeight: 16,
    width: 316,
    fontSize: GlobalStyles.FontSize.size_base,
    textAlign: "left",
    position: "absolute",
  },
  groupParent: {
    width: 326,
    height: 497,
  },
  arrowPosition: {
    top: "6%",
    position: "absolute",
  },
  arrowCircle: {
    marginTop: 10.11,
    marginRight: 303.54,
    width: 15,
    height: 15,
  },
  spendingLimit1: {
    backgroundColor: GlobalStyles.Color.gray_100,
    flex: 1,
    alignItems: "center",
    width: "100%",
  },
});

export default SpendingLimit1;
