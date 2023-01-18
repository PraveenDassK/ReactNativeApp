import React, { useContext, useEffect, useState } from "react";
//import * as React from "react";
import { Text, StyleSheet, View, Pressable, Image } from "react-native";
import Screen from "../components/Screen";
import GlobalStyles from "../../GlobalStyles";

const ReplaceCard = ({navigation}) => 
  //Comment
  // const cardName = "Carbonyte Standard - 7761"
  {
    const [cardname, setCardname] = useState(null)
    
  
  
  return (
    <Screen>
    <View style={styles.replaceCard}>
      <View style={styles.helloParent}>
        <Text style={[styles.hello, styles.helloTypo]}>Replace card</Text>
        <Pressable
          style={[styles.rectangleParent, styles.groupPosition]}
          onPress={() => navigation.navigate("ItWasLost")}
        >
          <View style={[styles.groupChild, styles.groupPosition]} />
          <View style={styles.itWasLostWrapper}>
            <Text
              style={[
                styles.itWasLost,
                styles.itWasLostPosition,
                styles.itWasLostTypo,
              ]}
            >
              It was lost
            </Text>
          </View>
        </Pressable>
        <Pressable
          style={[styles.rectangleGroup, styles.groupPosition]}
          onPress={() => navigation.navigate("IWasAVictimOfFraudOrThe")}
        >
          <View style={[styles.groupChild, styles.groupPosition]} />
          <View style={styles.itWasLostWrapper}>
            <Text
              style={[
                styles.itWasLost,
                styles.itWasLostPosition,
                styles.itWasLostTypo,
              ]}
            >
              I was a victim of fraud or theft
            </Text>
          </View>
        </Pressable>
        <Pressable
          style={[styles.rectangleContainer, styles.groupPosition]}
          onPress={() => navigation.navigate("ItsDamagedOrDoesntWork")}
        >
          <View style={[styles.groupChild, styles.groupPosition]} />
          <View style={styles.itWasLostWrapper}>
            <Text
              style={[
                styles.itWasLost,
                styles.itWasLostPosition,
                styles.itWasLostTypo,
              ]}
            >
              It’s damaged or doesn’t work
            </Text>
          </View>
        </Pressable>
        <Text style={[styles.hello1, styles.hello1Color, styles.helloTypo]}>
          Select the best option:
        </Text>
        <Image
          style={[styles.iconFeatherChevronRight, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/icon-featherchevronright.png")}
        />
        <Image
          style={[styles.iconFeatherChevronRight1, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/icon-featherchevronright.png")}
        />
        <Image
          style={[styles.iconFeatherChevronRight2, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/icon-featherchevronright.png")}
        />
        <View style={[styles.groupView, styles.viewPosition]}>
          <View style={[styles.rectangleView, styles.viewPosition]} />
          <View style={styles.carbonyteStandard7761MastParent}>
            <Text
              style={[
                styles.carbonyteStandard7761Mast,
                styles.itWasLostPosition,
              ]}
            >
              <Text style={styles.carbonyteStandard7761}>
                <Text style={[styles.carbonyteStandard, styles.itWasLostTypo]}>
                  {cardname}
                </Text>
              </Text>
              <Text style={styles.carbonyteStandard7761}>
                <Text style={styles.hello1Color}>{"\n"}Mastercard</Text>
              </Text>
            </Text>
            <Image
              style={styles.iconFeatherCreditCard}
              resizeMode="cover"
              source={require("../assets/icon-feathercreditcard.png")}
            />
          </View>
        </View>
      </View>
    </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  helloTypo: {
    textAlign: "left",
    fontWeight: "700",
    left: 2,
    position: "absolute",
  },
  groupPosition: {
    height: 43,
    right: 0,
    left: 0,
    position: "absolute",
  },
  itWasLostPosition: {
    width: 257,
    top: "50%",
    textAlign: "left",
    position: "absolute",
  },
  itWasLostTypo: {
    fontWeight: "700",
  },
  hello1Color: {
    color: GlobalStyles.Color.gray_800,
  },
  iconLayout: {
    height: 14,
    width: 8,
    right: 18,
    position: "absolute",
  },
  viewPosition: {
    height: 63,
    left: 0,
    right: 0,
    top: "50%",
    position: "absolute",
  },
  hello: {
    top: 0,
    fontSize: GlobalStyles.FontSize.size_7xl,
    color: GlobalStyles.Color.indigo_100,
  },
  groupChild: {
    marginTop: -21.5,
    borderRadius: GlobalStyles.Border.br_md,
    backgroundColor: GlobalStyles.Color.gray_400,
    top: "50%",
  },
  itWasLost: {
    marginTop: -6,
    color: GlobalStyles.Color.gray_1300,
    fontSize: GlobalStyles.FontSize.size_xs,
    left: 0,
  },
  itWasLostWrapper: {
    marginTop: -7.5,
    right: 46,
    left: 24,
    height: 12,
    top: "50%",
    position: "absolute",
  },
  rectangleParent: {
    marginTop: 9,
    top: "50%",
  },
  rectangleGroup: {
    marginTop: 57,
    top: "50%",
  },
  rectangleContainer: {
    bottom: 0,
  },
  hello1: {
    marginTop: -15,
    fontSize: GlobalStyles.FontSize.size_xs,
    top: "50%",
  },
  iconFeatherChevronRight: {
    marginTop: 23.5,
    top: "50%",
  },
  iconFeatherChevronRight1: {
    marginTop: 71.8,
    top: "50%",
  },
  iconFeatherChevronRight2: {
    bottom: 14,
  },
  rectangleView: {
    marginTop: -31.5,
    borderRadius: GlobalStyles.Border.br_2xl,
    backgroundColor: GlobalStyles.Color.white,
  },
  carbonyteStandard: {
    color: GlobalStyles.Color.gray_1400,
  },
  carbonyteStandard7761: {
    margin: GlobalStyles.Margin.margin_8xs,
  },
  carbonyteStandard7761Mast: {
    marginTop: -16,
    left: 38,
    fontSize: GlobalStyles.FontSize.size_base,
    lineHeight: 18,
  },
  iconFeatherCreditCard: {
    top: 4,
    width: 29,
    height: 21,
    left: 0,
    position: "absolute",
  },
  carbonyteStandard7761MastParent: {
    marginTop: -15.5,
    left: 14,
    height: 32,
    right: 18,
    top: "50%",
    position: "absolute",
  },
  groupView: {
    marginTop: -102,
  },
  helloParent: {
    width: "100%",
    height: 296,
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
  replaceCard: {
    flex: 1,
    width: "100%",
    paddingLeft: GlobalStyles.Padding.padding_7xs,
    paddingTop: GlobalStyles.Padding.padding_xl,
    paddingRight: GlobalStyles.Padding.padding_8xs,
    backgroundColor: GlobalStyles.Color.gray_100,
  },
});

export default ReplaceCard;
