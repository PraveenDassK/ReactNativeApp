import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import GlobalStyles from "../GlobalStyles";

const IWasAVictimOfFraudOrThe = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.iWasAVictimOfFraudOrThe}>
      <View style={styles.iWasAVictimOfFraudOrTheChild} />
      <Text style={[styles.hello, styles.mt11, styles.ml27]}>
        <Text style={styles.iWasA}>I was a victim of fraud or</Text>
        <Text style={styles.iWasA}>theft</Text>
      </Text>
      <View style={[styles.statusBarBlack, styles.mt_815]}>
        <View style={[styles.rectangle, styles.timePosition]} />
        <View style={[styles.statusBar, styles.statusBarPosition]}>
          <View style={[styles.time, styles.timePosition]}>
            <Text style={[styles.text, styles.textPosition]}>9:41</Text>
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
            <View style={[styles.networkChild, styles.networkLayout]} />
            <View
              style={[
                styles.networkItem,
                styles.networkPosition,
                styles.networkLayout,
              ]}
            />
            <View
              style={[
                styles.networkInner,
                styles.networkPosition,
                styles.networkLayout,
              ]}
            />
            <View
              style={[
                styles.rectangleView,
                styles.networkLayout,
                styles.textPosition,
              ]}
            />
          </View>
        </View>
      </View>
      <Pressable
        style={[styles.iconFeatherArrowLeftWrapper, styles.mt2]}
        onPress={() => navigation.navigate("ReplaceCard")}
      >
        <Image
          style={[styles.iconFeatherArrowLeft, styles.networkPosition]}
          resizeMode="cover"
          source={require("../assets/icon-featherarrowleft.png")}
        />
      </Pressable>
      <View style={[styles.homeIndicator, styles.mt20, styles.ml121]} />
      <View style={[styles.component208113Parent, styles.mt331, styles.ml25]}>
        <View style={[styles.component208113, styles.timePosition]}>
          <View style={[styles.rectangleParent, styles.statusBarPosition]}>
            <View style={styles.groupChild} />
            <View style={[styles.maskGroup236, styles.textPosition]} />
          </View>
        </View>
        <Text style={styles.hello1}>{`Terminate & Order card`}</Text>
      </View>
      <View style={[styles.rectangleGroup, styles.mt14, styles.ml25]}>
        <View style={[styles.groupItem, styles.statusBarPosition]} />
        <View
          style={[
            styles.yourCurrentCardWillBeTermWrapper,
            styles.yourCardPosition1,
          ]}
        >
          <Text
            style={[styles.yourCurrentCardWillBeTerm, styles.yourCardPosition]}
          >
            <Text style={styles.iWasA}>
              <Text style={[styles.yourCurrentCard, styles.yourCardTypo]}>
                Your current card will be terminated
              </Text>
            </Text>
            <Text style={styles.iWasA}>
              <Text style={styles.toKeepYour}>To keep your account safe</Text>
            </Text>
          </Text>
        </View>
        <Image
          style={styles.groupInner}
          resizeMode="cover"
          source={require("../assets/ellipse-3260.png")}
        />
        <View style={[styles.wrapper, styles.wrapperLayout]}>
          <Text style={[styles.text1, styles.yourCardTypo]}>1</Text>
        </View>
      </View>
      <View style={[styles.rectangleGroup, styles.mt10, styles.ml25]}>
        <View style={[styles.groupItem, styles.statusBarPosition]} />
        <View
          style={[
            styles.yourCurrentCardWillBeTermWrapper,
            styles.yourCardPosition1,
          ]}
        >
          <Text
            style={[styles.yourCurrentCardWillBeTerm, styles.yourCardPosition]}
          >
            <Text style={styles.iWasA}>
              <Text style={[styles.yourCurrentCard, styles.yourCardTypo]}>
                Order a replacement card below
              </Text>
            </Text>
            <Text style={styles.iWasA}>
              <Text style={styles.toKeepYour}>
                You may be charged for the new card
              </Text>
            </Text>
          </Text>
        </View>
        <Image
          style={styles.groupInner}
          resizeMode="cover"
          source={require("../assets/ellipse-3260.png")}
        />
        <View style={[styles.container, styles.wrapperLayout]}>
          <Text style={[styles.text1, styles.yourCardTypo]}>2</Text>
        </View>
      </View>
      <View style={[styles.rectangleGroup, styles.mt10, styles.ml25]}>
        <View style={[styles.groupItem, styles.statusBarPosition]} />
        <View
          style={[
            styles.startUsingYourNewCardRighWrapper,
            styles.yourCardPosition1,
          ]}
        >
          <Text
            style={[
              styles.startUsingYourNewCardRigh,
              styles.yourCardTypo,
              styles.yourCardPosition,
            ]}
          >
            Start using your new card right away with Apple Pay
          </Text>
        </View>
        <Image
          style={styles.groupInner}
          resizeMode="cover"
          source={require("../assets/ellipse-3260.png")}
        />
        <View style={[styles.container, styles.wrapperLayout]}>
          <Text style={[styles.text1, styles.yourCardTypo]}>3</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mt11: {
    marginTop: GlobalStyles.Margin.margin_23xs,
  },
  ml27: {
    marginLeft: GlobalStyles.Margin.margin_4xs,
  },
  mt_815: {
    marginTop: GlobalStyles.Margin.margin_91xs,
  },
  mt2: {
    marginTop: GlobalStyles.Margin.margin_31xs,
  },
  mt20: {
    marginTop: GlobalStyles.Margin.margin_12xs,
  },
  ml121: {
    marginLeft: GlobalStyles.Margin.margin_54xl,
  },
  mt331: {
    marginTop: GlobalStyles.Margin.margin_96xl,
  },
  ml25: {
    marginLeft: GlobalStyles.Margin.margin_7xs,
  },
  mt14: {
    marginTop: GlobalStyles.Margin.margin_20xs,
  },
  mt10: {
    marginTop: GlobalStyles.Margin.margin_24xs,
  },
  timePosition: {
    bottom: 0,
    left: 0,
    top: 0,
    position: "absolute",
  },
  statusBarPosition: {
    top: "50%",
    position: "absolute",
  },
  textPosition: {
    top: 0,
    position: "absolute",
  },
  networkPosition1: {
    height: 11,
    marginTop: -3,
    top: "50%",
    position: "absolute",
  },
  networkLayout: {
    width: 3,
    backgroundColor: GlobalStyles.Color.gray_1400,
    borderRadius: GlobalStyles.Border.br_7xs,
    bottom: 0,
  },
  networkPosition: {
    left: "50%",
    position: "absolute",
  },
  yourCardPosition1: {
    left: 48,
    right: 22,
    marginTop: -11.5,
    top: "50%",
    position: "absolute",
  },
  yourCardPosition: {
    width: 257,
    lineHeight: 14,
    top: "50%",
    left: 0,
    position: "absolute",
    textAlign: "left",
  },
  yourCardTypo: {
    color: GlobalStyles.Color.gray_1400,
    fontSize: GlobalStyles.FontSize.size_xs,
    fontFamily: GlobalStyles.FontFamily.helvetica,
  },
  wrapperLayout: {
    height: 14,
    width: 7,
    top: "50%",
    position: "absolute",
  },
  iWasAVictimOfFraudOrTheChild: {
    height: 815,
    width: 375,
    backgroundColor: GlobalStyles.Color.gray_300,
  },
  iWasA: {
    margin: GlobalStyles.Margin.margin_33xs,
  },
  hello: {
    fontSize: GlobalStyles.FontSize.size_7xl,
    lineHeight: 30,
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
    textAlign: "left",
  },
  time: {
    width: 40,
    left: 0,
  },
  batteryIcon: {
    width: 22,
    height: 11,
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
    position: "absolute",
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
  },
  statusBarBlack: {
    height: 44,
    width: 375,
  },
  iconFeatherArrowLeft: {
    marginLeft: -0.5,
    bottom: 4,
    height: 17,
    width: 17,
  },
  iconFeatherArrowLeftWrapper: {
    width: 55,
    height: 45,
    backgroundColor: GlobalStyles.Color.gray_300,
  },
  homeIndicator: {
    borderRadius: GlobalStyles.Border.br_8xl,
    backgroundColor: GlobalStyles.Color.black,
    width: 134,
    height: 5,
  },
  groupChild: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: GlobalStyles.Border.br_lg,
    backgroundColor: GlobalStyles.Color.gray_500,
    position: "absolute",
    width: "100%",
  },
  maskGroup236: {
    bottom: 13,
    left: 0,
    right: 0,
  },
  rectangleParent: {
    marginTop: -30,
    height: 60,
    left: 0,
    right: 0,
  },
  component208113: {
    left: 0,
    right: 0,
  },
  hello1: {
    top: "35%",
    left: "18.71%",
    fontSize: GlobalStyles.FontSize.size_lg,
    lineHeight: 17,
    textTransform: "uppercase",
    color: GlobalStyles.Color.black,
    textAlign: "center",
    fontFamily: GlobalStyles.FontFamily.helvetica,
    position: "absolute",
  },
  component208113Parent: {
    height: 60,
    width: 326,
  },
  groupItem: {
    marginTop: -31.5,
    borderRadius: GlobalStyles.Border.br_2xl,
    height: 63,
    left: 0,
    right: 0,
    backgroundColor: GlobalStyles.Color.white,
  },
  yourCurrentCard: {
    fontWeight: "700",
  },
  toKeepYour: {
    fontSize: GlobalStyles.FontSize.size_3xs,
    color: GlobalStyles.Color.gray_900,
    fontFamily: GlobalStyles.FontFamily.helvetica,
  },
  yourCurrentCardWillBeTerm: {
    marginTop: -13.5,
  },
  yourCurrentCardWillBeTermWrapper: {
    height: 27,
  },
  groupInner: {
    left: 16,
    height: 22,
    marginTop: -11.5,
    width: 22,
    top: "50%",
    position: "absolute",
  },
  text1: {
    marginTop: -7,
    width: 8,
    lineHeight: 14,
    fontSize: GlobalStyles.FontSize.size_xs,
    top: "50%",
    left: 0,
    position: "absolute",
    textAlign: "left",
  },
  wrapper: {
    marginTop: -6.5,
    left: 23,
  },
  rectangleGroup: {
    height: 63,
    width: 326,
  },
  container: {
    marginTop: -7.5,
    left: 24,
  },
  startUsingYourNewCardRigh: {
    marginTop: -14,
    fontWeight: "700",
  },
  startUsingYourNewCardRighWrapper: {
    height: 28,
  },
  iWasAVictimOfFraudOrThe: {
    flex: 1,
    width: "100%",
    backgroundColor: GlobalStyles.Color.white,
  },
});

export default IWasAVictimOfFraudOrThe;
