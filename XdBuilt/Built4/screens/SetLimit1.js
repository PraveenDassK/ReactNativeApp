import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import GlobalStyles from "../GlobalStyles";

const SetLimit1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.setLimit1}>
      <View style={styles.setLimit1Child} />
      <Text style={[styles.hello, styles.mt11, styles.ml27, styles.helloTypo]}>
        Set a monthly limit
      </Text>
      <View style={[styles.statusBarBlack, styles.mt_815]}>
        <View style={styles.rectangle} />
        <View style={[styles.statusBar, styles.statusBarPosition]}>
          <View style={styles.time}>
            <Text style={styles.text}>9:41</Text>
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
            <View style={[styles.rectangleView, styles.networkLayout]} />
          </View>
        </View>
      </View>
      <View style={[styles.setLimit1Inner, styles.mt19, styles.ml25]}>
        <View style={[styles.groupChild, styles.statusBarPosition]} />
      </View>
      <Pressable
        style={[styles.iconFeatherArrowLeftWrapper, styles.mt2]}
        onPress={() => navigation.navigate("SpendingLimit3")}
      >
        <Image
          style={[styles.iconFeatherArrowLeft, styles.networkPosition]}
          resizeMode="cover"
          source={require("../assets/icon-featherarrowleft.png")}
        />
      </Pressable>
      <Text
        style={[styles.hello1, styles.mt_15, styles.ml300, styles.helloColor]}
      >
        £0
      </Text>
      <Text style={[styles.hello2, styles.mt_51, styles.ml318]}>|</Text>
      <Text
        style={[styles.hello3, styles.mt_18, styles.ml40, styles.helloTypo]}
      >
        GBP
      </Text>
      <View style={[styles.keyboardNumberic, styles.mt12]}>
        <View style={styles.background}>
          <View
            style={[styles.backgroundBackground, styles.backgroundPosition]}
          />
          <View style={styles.background1} />
        </View>
        <View
          style={[styles.homeIndicatorLightPortr, styles.backgroundPosition]}
        />
        <View style={styles.keys}>
          <Image
            style={styles.deleteIcon}
            resizeMode="cover"
            source={require("../assets/delete1.png")}
          />
          <View
            style={[styles.view, styles.viewShadowBox, styles.viewPosition2]}
          >
            <Text style={[styles.number, styles.labelPosition]}>0</Text>
          </View>
          <View style={[styles.view1, styles.viewPosition1]}>
            <View
              style={[styles.backgroundBackground, styles.backgroundPosition]}
            />
            <View style={styles.keyBackground} />
            <Text
              style={[styles.label, styles.labelTypo, styles.labelPosition]}
            >
              WXYZ
            </Text>
            <Text style={[styles.number1, styles.numberPosition]}>9</Text>
          </View>
          <View style={[styles.viewPosition1, styles.viewPosition2]}>
            <View
              style={[styles.backgroundBackground, styles.backgroundPosition]}
            />
            <View style={styles.keyBackground} />
            <Text
              style={[styles.label, styles.labelTypo, styles.labelPosition]}
            >
              TUV
            </Text>
            <Text style={[styles.number1, styles.numberPosition]}>8</Text>
          </View>
          <View style={[styles.view3, styles.viewPosition1]}>
            <View
              style={[styles.backgroundBackground, styles.backgroundPosition]}
            />
            <View style={styles.keyBackground} />
            <Text
              style={[styles.label, styles.labelTypo, styles.labelPosition]}
            >
              PQRS
            </Text>
            <Text style={[styles.number1, styles.numberPosition]}>7</Text>
          </View>
          <View style={[styles.view4, styles.viewPosition]}>
            <View
              style={[styles.backgroundBackground, styles.backgroundPosition]}
            />
            <View style={styles.keyBackground} />
            <Text
              style={[styles.label, styles.labelTypo, styles.labelPosition]}
            >
              MNO
            </Text>
            <Text style={[styles.number1, styles.numberPosition]}>6</Text>
          </View>
          <View style={[styles.viewPosition, styles.viewPosition2]}>
            <View
              style={[styles.backgroundBackground, styles.backgroundPosition]}
            />
            <View style={styles.keyBackground} />
            <Text
              style={[styles.label, styles.labelTypo, styles.labelPosition]}
            >
              JKL
            </Text>
            <Text style={[styles.number1, styles.numberPosition]}>5</Text>
          </View>
          <View style={[styles.view6, styles.viewPosition]}>
            <View
              style={[styles.backgroundBackground, styles.backgroundPosition]}
            />
            <View style={styles.keyBackground} />
            <Text
              style={[styles.label, styles.labelTypo, styles.labelPosition]}
            >
              GHI
            </Text>
            <Text style={[styles.number1, styles.numberPosition]}>4</Text>
          </View>
          <View style={[styles.view7, styles.viewShadowBox]}>
            <Text
              style={[styles.label, styles.labelTypo, styles.labelPosition]}
            >
              DEF
            </Text>
            <Text style={[styles.number7, styles.numberPosition]}>3</Text>
          </View>
          <View
            style={[styles.view8, styles.viewShadowBox, styles.viewPosition2]}
          >
            <Text
              style={[styles.label, styles.labelTypo, styles.labelPosition]}
            >
              ABC
            </Text>
            <Text style={[styles.number7, styles.numberPosition]}>2</Text>
          </View>
          <View style={[styles.view9, styles.viewShadowBox]}>
            <Text
              style={[styles.label, styles.labelTypo, styles.labelPosition]}
            >{` `}</Text>
            <Text style={[styles.number7, styles.numberPosition]}>1</Text>
          </View>
        </View>
      </View>
      <Text
        style={[styles.labelTypo, styles.ml40, styles.helloColor]}
      >{`Spent this month : £22.33 `}</Text>
      <View style={[styles.homeIndicator, styles.mt_13, styles.ml121]} />
      <Pressable
        style={[styles.component208158Parent, styles.mt247, styles.ml25]}
        onPress={() => navigation.navigate("SpendingLimit2")}
      >
        <View style={styles.background}>
          <View style={[styles.rectangleParent, styles.statusBarPosition]}>
            <View style={styles.groupItem} />
            <View style={styles.maskGroup236} />
          </View>
        </View>
        <Text style={styles.hello5}>SET LIMIT</Text>
      </Pressable>
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
  mt19: {
    marginTop: GlobalStyles.Margin.margin_14xs,
  },
  ml25: {
    marginLeft: GlobalStyles.Margin.margin_7xs,
  },
  mt2: {
    marginTop: GlobalStyles.Margin.margin_31xs,
  },
  mt_15: {
    marginTop: GlobalStyles.Margin.margin_41xs,
  },
  ml300: {
    marginLeft: GlobalStyles.Margin.margin_92xl,
  },
  mt_51: {
    marginTop: GlobalStyles.Margin.margin_63xs,
  },
  ml318: {
    marginLeft: GlobalStyles.Margin.margin_94xl,
  },
  mt_18: {
    marginTop: GlobalStyles.Margin.margin_45xs,
  },
  ml40: {
    marginLeft: GlobalStyles.Margin.margin_10xl,
  },
  mt12: {
    marginTop: GlobalStyles.Margin.margin_22xs,
  },
  mt_13: {
    marginTop: GlobalStyles.Margin.margin_39xs,
  },
  ml121: {
    marginLeft: GlobalStyles.Margin.margin_54xl,
  },
  mt247: {
    marginTop: GlobalStyles.Margin.margin_85xl,
  },
  helloTypo: {
    textAlign: "left",
    color: GlobalStyles.Color.indigo,
    fontWeight: "700",
  },
  statusBarPosition: {
    top: "50%",
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
  helloColor: {
    color: GlobalStyles.Color.gray_800,
    textAlign: "left",
  },
  backgroundPosition: {
    backgroundColor: GlobalStyles.Color.gray_1700,
    left: 0,
    bottom: 0,
    right: 0,
    position: "absolute",
  },
  viewShadowBox: {
    height: 46,
    width: 117,
    elevation: 0,
    shadowRadius: 0,
    shadowColor: "#898a8d",
    backgroundColor: GlobalStyles.Color.gray_100,
    borderRadius: GlobalStyles.Border.br_5xs,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    position: "absolute",
  },
  viewPosition2: {
    marginLeft: -58.5,
    left: "50%",
  },
  labelPosition: {
    width: 118,
    textAlign: "center",
    color: GlobalStyles.Color.black,
    left: 0,
    position: "absolute",
  },
  viewPosition1: {
    height: 47,
    marginTop: 3.5,
    width: 117,
    top: "50%",
    position: "absolute",
  },
  labelTypo: {
    fontSize: GlobalStyles.FontSize.size_3xs,
    fontFamily: GlobalStyles.FontFamily.helvetica,
  },
  numberPosition: {
    top: 1,
    width: 118,
    textAlign: "center",
    color: GlobalStyles.Color.black,
    fontFamily: GlobalStyles.FontFamily.sFProDisplay,
    letterSpacing: 0,
    left: 0,
    position: "absolute",
    fontSize: GlobalStyles.FontSize.size_7xl,
  },
  viewPosition: {
    marginTop: -50.5,
    height: 47,
    width: 117,
    top: "50%",
    position: "absolute",
  },
  setLimit1Child: {
    height: 815,
    width: 375,
    backgroundColor: GlobalStyles.Color.gray_300,
  },
  hello: {
    fontFamily: GlobalStyles.FontFamily.typoGrotesk,
    fontSize: GlobalStyles.FontSize.size_7xl,
    textAlign: "left",
    color: GlobalStyles.Color.indigo,
  },
  rectangle: {
    shadowColor: "rgba(0, 0, 0, 0.05)",
    shadowRadius: 6,
    elevation: 6,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    left: 0,
    bottom: 0,
    right: 0,
    top: 0,
    position: "absolute",
    backgroundColor: GlobalStyles.Color.white,
  },
  text: {
    lineHeight: 24,
    fontWeight: "500",
    fontFamily: GlobalStyles.FontFamily.roboto,
    color: GlobalStyles.Color.gray_1900,
    letterSpacing: 0,
    fontSize: GlobalStyles.FontSize.size_4xl,
    left: 0,
    top: 0,
    position: "absolute",
    textAlign: "left",
  },
  time: {
    width: 40,
    left: 0,
    bottom: 0,
    top: 0,
    position: "absolute",
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
    top: 0,
    position: "absolute",
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
    marginTop: -31.5,
    borderRadius: GlobalStyles.Border.br_2xl,
    height: 63,
    left: 0,
    right: 0,
    backgroundColor: GlobalStyles.Color.white,
  },
  setLimit1Inner: {
    height: 63,
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
    backgroundColor: GlobalStyles.Color.gray_300,
  },
  hello1: {
    fontSize: GlobalStyles.FontSize.size_2xl,
    fontFamily: GlobalStyles.FontFamily.helvetica,
    fontWeight: "700",
  },
  hello2: {
    fontWeight: "300",
    color: GlobalStyles.Color.blue,
    fontFamily: GlobalStyles.FontFamily.helvetica,
    fontSize: GlobalStyles.FontSize.size_4xl,
    textAlign: "left",
  },
  hello3: {
    fontSize: GlobalStyles.FontSize.size_base,
    fontFamily: GlobalStyles.FontFamily.helvetica,
  },
  backgroundBackground: {
    top: 0,
  },
  background1: {
    backgroundColor: GlobalStyles.Color.gray_600,
    left: 0,
    bottom: 0,
    right: 0,
    top: 0,
    position: "absolute",
  },
  background: {
    left: 0,
    bottom: 0,
    right: 0,
    top: 0,
    position: "absolute",
  },
  homeIndicatorLightPortr: {
    height: 34,
  },
  deleteIcon: {
    right: 44,
    bottom: 15,
    width: 24,
    height: 18,
    position: "absolute",
  },
  number: {
    marginTop: -16,
    height: 30,
    fontFamily: GlobalStyles.FontFamily.sFProDisplay,
    width: 118,
    letterSpacing: 0,
    top: "50%",
    fontSize: GlobalStyles.FontSize.size_7xl,
  },
  view: {
    bottom: 0,
  },
  keyBackground: {
    elevation: 0,
    shadowRadius: 0,
    shadowColor: "#898a8d",
    backgroundColor: GlobalStyles.Color.gray_100,
    borderRadius: GlobalStyles.Border.br_5xs,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    left: 0,
    bottom: 0,
    right: 0,
    top: 0,
    position: "absolute",
  },
  label: {
    bottom: 5,
    letterSpacing: 2,
    height: 12,
    fontWeight: "700",
  },
  number1: {
    height: 31,
  },
  view1: {
    right: 0,
  },
  view3: {
    left: 0,
  },
  view4: {
    right: 0,
  },
  view6: {
    left: 0,
  },
  number7: {
    height: 30,
  },
  view7: {
    right: 0,
    top: 0,
  },
  view8: {
    top: 0,
  },
  view9: {
    left: 0,
    top: 0,
  },
  keys: {
    top: 6,
    right: 6,
    left: 6,
    height: 207,
    position: "absolute",
  },
  keyboardNumberic: {
    height: 291,
    width: 375,
  },
  homeIndicator: {
    borderRadius: GlobalStyles.Border.br_8xl,
    backgroundColor: GlobalStyles.Color.black,
    width: 134,
    height: 5,
  },
  groupItem: {
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
    top: 0,
    position: "absolute",
  },
  rectangleParent: {
    marginTop: -30,
    height: 60,
    left: 0,
    right: 0,
  },
  hello5: {
    top: "35%",
    left: "38.96%",
    fontSize: GlobalStyles.FontSize.size_lg,
    lineHeight: 17,
    textTransform: "uppercase",
    textAlign: "center",
    color: GlobalStyles.Color.black,
    fontFamily: GlobalStyles.FontFamily.helvetica,
    position: "absolute",
  },
  component208158Parent: {
    height: 60,
    width: 326,
  },
  setLimit1: {
    flex: 1,
    width: "100%",
    backgroundColor: GlobalStyles.Color.white,
  },
});

export default SetLimit1;
