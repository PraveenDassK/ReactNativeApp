import * as React from "react";
import { Text, StyleSheet, View, Image, Pressable } from "react-native";
import GlobalStyles from "../../GlobalStyles";

const SpendingLimit = ({navigation}) => {
 

  return (
    <View style={styles.spendingLimit}>
     
      <View style={styles.helloParent}>
        <Text style={[styles.hello, styles.limitFlexBox]}>Spending limit</Text>
        <View
          style={[
            styles.rectangleParent,
            styles.groupChildPosition,
            styles.groupChildPosition1,
          ]}
        >
          <View
            style={[
              styles.groupChild,
              styles.groupChildPosition,
              styles.groupChildPosition1,
            ]}
          />
          <View
            style={[
              styles.cardSpendingLimitTheSpendParent,
              styles.rectangleGroupPosition,
            ]}
          >
            <Text
              style={[styles.cardSpendingLimitTheSpend, styles.limitFlexBox]}
            >
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
              style={[styles.meter1Icon, styles.groupChildPosition]}
              resizeMode="cover"
              source={require("../assets/meter-1.png")}
            />
          </View>
          <Pressable
            style={[styles.rectangleGroup, styles.rectangleGroupPosition]}
            onPress={() => navigation.navigate("SetLimit")}
          >
            <View style={styles.groupItem} />
            <Image
              style={[styles.groupInner, styles.groupLayout]}
              resizeMode="cover"
              source={require("../assets/ellipse-350.png")}
            />
          </Pressable>
          <Image
            style={[styles.groupIcon, styles.groupLayout]}
            resizeMode="cover"
            source={require("../assets/group-275793.png")}
          />
        </View>
        <Text style={[styles.hello1, styles.helloPosition]}>£22.33</Text>
        <Text style={[styles.hello2, styles.helloPosition]}>
          Spent this month
        </Text>
        <Text style={[styles.hello3, styles.helloPosition]}>
          Limit is toggled off
        </Text>
        <Text
          style={[
            styles.theLimitDeterminesTheAmoun,
            styles.theColor,
            styles.limitFlexBox,
          ]}
        >
          The limit determines the amount that can be spent or withdrawn using
          this card per month
        </Text>
        <Image
          style={styles.cardIcon}
          resizeMode="cover"
          source={require("../assets/card.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  limitFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  groupChildPosition: {
    left: 0,
    position: "absolute",
  },
  groupChildPosition1: {
    right: 0,
    left: 0,
  },
  rectangleGroupPosition: {
    right: 22,
    position: "absolute",
  },
  theColor: {
    color: GlobalStyles.Color.gray_800,
    // fontFamily: GlobalStyles.FontFamily.helvetica,
  },
  groupLayout: {
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  helloPosition: {
    color: GlobalStyles.Color.gray_700,
    left: "50%",
    // fontFamily: GlobalStyles.FontFamily.helvetica,
    textAlign: "left",
    position: "absolute",
  },
  hello: {
    left: 2,
    fontSize: GlobalStyles.FontSize.size_8xl,
    color: GlobalStyles.Color.indigo_100,
    fontWeight: "700",
    top: 0,
  },
  groupChild: {
    marginTop: -181,
    borderRadius: GlobalStyles.Border.br_5xl,
    backgroundColor: GlobalStyles.Color.white,
    height: 362,
    top: "50%",
  },
  cardSpendingLimit1: {
    color: GlobalStyles.Color.gray_1400,
    // fontFamily: GlobalStyles.FontFamily.helvetica,
    fontSize: GlobalStyles.FontSize.size_base,
    fontWeight: "700",
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
    top: "50%",
  },
  meter1Icon: {
    width: 17,
    height: 17,
    top: 0,
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
    backgroundColor: GlobalStyles.Color.gray_600,
    position: "absolute",
    width: "100%",
  },
  groupInner: {
    height: "76.92%",
    width: "43.48%",
    top: "11.54%",
    right: "50%",
    bottom: "11.54%",
    left: "6.52%",
    maxHeight: "100%",
  },
  rectangleGroup: {
    top: 23,
    width: 46,
    height: 26,
  },
  groupIcon: {
    marginTop: -40.03,
    right: 49,
    left: 48,
    height: 100,
    top: "50%",
  },
  rectangleParent: {
    top: 138,
    bottom: 0,
  },
  hello1: {
    marginTop: 76,
    marginLeft: -38,
    fontSize: GlobalStyles.FontSize.size_7xl,
    top: "50%",
    fontWeight: "700",
  },
  hello2: {
    marginTop: 109,
    marginLeft: -57,
    fontSize: GlobalStyles.FontSize.size_base,
    top: "50%",
    fontWeight: "700",
  },
  hello3: {
    marginLeft: -40,
    bottom: 16,
    fontSize: GlobalStyles.FontSize.size_3xs,
  },
  theLimitDeterminesTheAmoun: {
    top: 40,
    left: 3,
    lineHeight: 16,
    width: 316,
    fontSize: GlobalStyles.FontSize.size_base,
  },
  cardIcon: {
    marginLeft: -6,
    bottom: 38,
    width: 12,
    height: 9,
    left: "50%",
    position: "absolute",
  },
  helloParent: {
    width: 326,
    height: 500,
  },
  arrowPosition: {
    top: "6%",
    position: "absolute",
  },
  arrowCircle: {
    marginTop: -10.11,
    marginRight: 303.54,
    width: 15,
    height: 15,
  },
  spendingLimit: {
    backgroundColor: GlobalStyles.Color.gray_100,
    flex: 1,
    paddingLeft: GlobalStyles.Padding.padding_7xs,
    paddingTop: GlobalStyles.Padding.padding_xl,
    paddingRight: GlobalStyles.Padding.padding_8xs,
    width: "100%",
  },
});

export default SpendingLimit;
