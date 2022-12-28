import * as React from "react";
import { StyleSheet, View, Text, Pressable, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import GlobalStyles from "../GlobalStyles";

const ReplaceCard = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.replaceCard}>
      <View style={styles.replaceCardChild} />
      <Text style={[styles.hello, styles.mt11, styles.mr200, styles.helloTypo]}>
        Replace card
      </Text>
      <Pressable
        style={[styles.rectangleParent, styles.mt12, styles.mr24]}
        onPress={() => navigation.navigate("ItWasLost")}
      >
        <View style={[styles.groupChild, styles.groupChildPosition]} />
        <View
          style={[styles.itWasLostWrapper, styles.itWasLostWrapperPosition]}
        >
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
        style={[styles.rectangleParent, styles.mt19, styles.mr24]}
        onPress={() => navigation.navigate("IWasAVictimOfFraudOrTheft")}
      >
        <View style={[styles.groupChild, styles.groupChildPosition]} />
        <View
          style={[styles.itWasLostWrapper, styles.itWasLostWrapperPosition]}
        >
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
        style={[styles.rectangleParent, styles.mt19, styles.mr24]}
        onPress={() => navigation.navigate("ItsDamagedOrDoesntWork")}
      >
        <View style={[styles.groupChild, styles.groupChildPosition]} />
        <View
          style={[styles.itWasLostWrapper, styles.itWasLostWrapperPosition]}
        >
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
      <Pressable
        style={[styles.iconFeatherArrowLeftWrapper, styles.mt_769]}
        onPress={() => navigation.navigate("MyCards")}
      >
        <Image
          style={styles.iconFeatherArrowLeft}
          resizeMode="cover"
          source={require("../assets/icon-featherarrowleft.png")}
        />
      </Pressable>
      <Text
        style={[
          styles.hello1,
          styles.mt22,
          styles.mr219,
          styles.hello1Color,
          styles.helloTypo,
        ]}
      >
        Select the best option:
      </Text>
      <Image
        style={[styles.iconFeatherChevronRight, styles.mt_28, styles.mr42]}
        resizeMode="cover"
        source={require("../assets/icon-featherchevronright.png")}
      />
      <Image
        style={[styles.iconFeatherChevronRight, styles.mt_28, styles.mr42]}
        resizeMode="cover"
        source={require("../assets/icon-featherchevronright.png")}
      />
      <Image
        style={[styles.iconFeatherChevronRight, styles.mt_28, styles.mr42]}
        resizeMode="cover"
        source={require("../assets/icon-featherchevronright.png")}
      />
      <View style={[styles.groupView, styles.mt21, styles.mr24]}>
        <View style={[styles.rectangleView, styles.groupChildPosition]} />
        <View
          style={[
            styles.carbonyteStandard7761MastParent,
            styles.itWasLostWrapperPosition,
          ]}
        >
          <Text
            style={[styles.carbonyteStandard7761Mast, styles.itWasLostPosition]}
          >
            <Text style={styles.carbonyteStandard7761}>
              <Text style={[styles.carbonyteStandard, styles.itWasLostTypo]}>
                Carbonyte Standard - 7761
              </Text>
            </Text>
            <Text style={styles.carbonyteStandard7761}>
              <Text style={styles.hello1Color}>Mastercard</Text>
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
  );
};

const styles = StyleSheet.create({
  mt11: {
    marginTop: GlobalStyles.Margin.margin_14xs,
  },
  mr200: {
    marginRight: 200,
  },
  mt12: {
    marginTop: GlobalStyles.Margin.margin_13xs,
  },
  mr24: {
    marginRight: GlobalStyles.Margin.margin_2xl,
  },
  mt19: {
    marginTop: GlobalStyles.Margin.margin_2xs,
  },
  mt_769: {
    marginTop: GlobalStyles.Margin.margin_60xs,
  },
  mt22: {
    marginTop: GlobalStyles.Margin.margin_md,
  },
  mr219: {
    marginRight: 219,
  },
  mt_28: {
    marginTop: GlobalStyles.Margin.margin_34xs,
  },
  mr42: {
    marginRight: GlobalStyles.Margin.margin_20xl,
  },
  mt21: {
    marginTop: GlobalStyles.Margin.margin_sm,
  },
  helloTypo: {
    textAlign: "left",
    fontWeight: "700",
  },
  groupChildPosition: {
    right: 0,
    left: 0,
    top: "50%",
    position: "absolute",
  },
  itWasLostWrapperPosition: {
    top: "50%",
    position: "absolute",
  },
  itWasLostPosition: {
    width: 257,
    top: "50%",
    position: "absolute",
    textAlign: "left",
  },
  itWasLostTypo: {
    fontFamily: GlobalStyles.FontFamily.helvetica,
    fontWeight: "700",
  },
  hello1Color: {
    color: GlobalStyles.Color.gray_900,
    fontFamily: GlobalStyles.FontFamily.helvetica,
  },
  replaceCardChild: {
    width: 375,
    height: 815,
    backgroundColor: GlobalStyles.Color.gray_300,
  },
  hello: {
    fontSize: GlobalStyles.FontSize.size_5xl,
    fontFamily: GlobalStyles.FontFamily.typoGrotesk,
    color: GlobalStyles.Color.indigo,
  },
  groupChild: {
    marginTop: -21.5,
    borderRadius: GlobalStyles.Border.br_sm,
    backgroundColor: GlobalStyles.Color.gray_400,
    left: 0,
    height: 43,
  },
  itWasLost: {
    marginTop: -7,
    lineHeight: 14,
    color: GlobalStyles.Color.gray_1200,
    fontSize: GlobalStyles.FontSize.size_2xs,
    left: 0,
  },
  itWasLostWrapper: {
    marginTop: -7.5,
    right: 46,
    left: 24,
    height: 14,
  },
  rectangleParent: {
    height: 43,
    width: 326,
  },
  iconFeatherArrowLeft: {
    marginLeft: -0.5,
    bottom: 4,
    left: "50%",
    width: 17,
    height: 17,
    position: "absolute",
  },
  iconFeatherArrowLeftWrapper: {
    width: 55,
    height: 45,
    alignSelf: "flex-start",
    backgroundColor: GlobalStyles.Color.gray_300,
  },
  hello1: {
    fontSize: GlobalStyles.FontSize.size_2xs,
  },
  iconFeatherChevronRight: {
    width: 8,
    height: 14,
  },
  rectangleView: {
    marginTop: -31.5,
    borderRadius: GlobalStyles.Border.br_xl,
    height: 63,
    left: 0,
    backgroundColor: GlobalStyles.Color.white,
  },
  carbonyteStandard: {
    color: GlobalStyles.Color.gray_1300,
  },
  carbonyteStandard7761: {
    margin: GlobalStyles.Margin.margin_25xs,
  },
  carbonyteStandard7761Mast: {
    marginTop: -17,
    left: 38,
    fontSize: GlobalStyles.FontSize.size_sm,
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
    right: 18,
    left: 14,
    height: 34,
  },
  groupView: {
    height: 63,
    width: 326,
  },
  replaceCard: {
    flex: 1,
    width: "100%",
    alignItems: "flex-end",
    backgroundColor: GlobalStyles.Color.white,
  },
});

export default ReplaceCard;
