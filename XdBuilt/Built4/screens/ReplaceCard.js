import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
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
      <View style={[styles.statusBarBlack, styles.mt_815]}>
        <View style={[styles.rectangle, styles.timePosition]} />
        <View style={[styles.statusBar, styles.groupChildPosition]}>
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
            <View
              style={[
                styles.networkChild,
                styles.networkLayout,
                styles.networkChildPosition,
              ]}
            />
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
        style={[styles.rectangleParent, styles.mt12, styles.mr24]}
        onPress={() => navigation.navigate("ItWasLost")}
      >
        <View style={[styles.groupChild, styles.groupChildPosition]} />
        <View style={[styles.itWasLostWrapper, styles.groupChildPosition]}>
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
        <View style={[styles.itWasLostWrapper, styles.groupChildPosition]}>
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
        <View style={[styles.itWasLostWrapper, styles.groupChildPosition]}>
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
        style={[styles.iconFeatherArrowLeftWrapper, styles.mt2]}
        onPress={() => navigation.navigate("MyCards")}
      >
        <Image
          style={[styles.iconFeatherArrowLeft, styles.networkPosition]}
          resizeMode="cover"
          source={require("../assets/icon-featherarrowleft.png")}
        />
      </Pressable>
      <View style={[styles.homeIndicator, styles.mt407, styles.mr120]} />
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
        <View style={[styles.groupChild1, styles.groupChildPosition]} />
        <View
          style={[
            styles.carbonyteStandard7761MastParent,
            styles.groupChildPosition,
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
            style={[styles.iconFeatherCreditCard, styles.networkChildPosition]}
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
    marginTop: GlobalStyles.Margin.margin_23xs,
  },
  mr200: {
    marginRight: 200,
  },
  mt_815: {
    marginTop: GlobalStyles.Margin.margin_91xs,
  },
  mt12: {
    marginTop: GlobalStyles.Margin.margin_22xs,
  },
  mr24: {
    marginRight: GlobalStyles.Margin.margin_8xs,
  },
  mt19: {
    marginTop: GlobalStyles.Margin.margin_14xs,
  },
  mt2: {
    marginTop: GlobalStyles.Margin.margin_31xs,
  },
  mt407: {
    marginTop: 407,
  },
  mr120: {
    marginRight: GlobalStyles.Margin.margin_53xl,
  },
  mt22: {
    marginTop: GlobalStyles.Margin.margin_10xs,
  },
  mr219: {
    marginRight: 219,
  },
  mt_28: {
    marginTop: GlobalStyles.Margin.margin_48xs,
  },
  mr42: {
    marginRight: GlobalStyles.Margin.margin_13xl,
  },
  mt21: {
    marginTop: GlobalStyles.Margin.margin_11xs,
  },
  helloTypo: {
    fontWeight: "700",
    textAlign: "left",
  },
  timePosition: {
    bottom: 0,
    left: 0,
    top: 0,
    position: "absolute",
  },
  groupChildPosition: {
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
  networkChildPosition: {
    position: "absolute",
    left: 0,
  },
  networkPosition: {
    left: "50%",
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
    height: 815,
    width: 375,
    backgroundColor: GlobalStyles.Color.gray_300,
  },
  hello: {
    fontSize: GlobalStyles.FontSize.size_7xl,
    fontFamily: GlobalStyles.FontFamily.typoGrotesk,
    color: GlobalStyles.Color.indigo,
    textAlign: "left",
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
  groupChild: {
    marginTop: -21.5,
    borderRadius: GlobalStyles.Border.br_md,
    backgroundColor: GlobalStyles.Color.gray_400,
    height: 43,
    left: 0,
    right: 0,
  },
  itWasLost: {
    marginTop: -7,
    lineHeight: 14,
    color: GlobalStyles.Color.gray_1300,
    fontSize: GlobalStyles.FontSize.size_xs,
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
    height: 17,
    width: 17,
  },
  iconFeatherArrowLeftWrapper: {
    width: 55,
    height: 45,
    alignSelf: "flex-start",
    backgroundColor: GlobalStyles.Color.gray_300,
  },
  homeIndicator: {
    borderRadius: GlobalStyles.Border.br_8xl,
    backgroundColor: GlobalStyles.Color.black,
    width: 134,
    height: 5,
  },
  hello1: {
    fontSize: GlobalStyles.FontSize.size_xs,
    textAlign: "left",
  },
  iconFeatherChevronRight: {
    width: 8,
    height: 14,
  },
  groupChild1: {
    marginTop: -31.5,
    borderRadius: GlobalStyles.Border.br_2xl,
    height: 63,
    left: 0,
    right: 0,
    backgroundColor: GlobalStyles.Color.white,
  },
  carbonyteStandard: {
    color: GlobalStyles.Color.gray_1400,
  },
  carbonyteStandard7761: {
    margin: GlobalStyles.Margin.margin_33xs,
  },
  carbonyteStandard7761Mast: {
    marginTop: -17,
    left: 38,
    fontSize: GlobalStyles.FontSize.size_base,
    lineHeight: 18,
  },
  iconFeatherCreditCard: {
    top: 4,
    width: 29,
    height: 21,
    left: 0,
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
