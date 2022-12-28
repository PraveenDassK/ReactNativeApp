import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import GlobalStyles from "../GlobalStyles";

const SetLimit = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.setLimit}>
      <View style={styles.setLimitChild} />
      <Text style={[styles.hello, styles.mt11, styles.ml27, styles.helloTypo]}>
        Set a monthly limit
      </Text>
      <View style={[styles.setLimitInner, styles.mt19, styles.ml25]}>
        <View style={[styles.groupChild, styles.groupChildPosition]} />
      </View>
      <View style={[styles.iconFeatherArrowLeftWrapper, styles.mt_769]}>
        <Image
          style={styles.iconFeatherArrowLeft}
          resizeMode="cover"
          source={require("../assets/icon-featherarrowleft.png")}
        />
      </View>
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
            source={require("../assets/delete.png")}
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
      <Pressable
        style={[styles.component208157Parent, styles.mt247, styles.ml25]}
        onPress={() => navigation.navigate("SpendingLimit1")}
      >
        <View style={styles.background}>
          <View style={[styles.rectangleParent, styles.groupChildPosition]}>
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
    marginTop: GlobalStyles.Margin.margin_14xs,
  },
  ml27: {
    marginLeft: GlobalStyles.Margin.margin_5xl,
  },
  mt19: {
    marginTop: GlobalStyles.Margin.margin_2xs,
  },
  ml25: {
    marginLeft: GlobalStyles.Margin.margin_3xl,
  },
  mt_769: {
    marginTop: GlobalStyles.Margin.margin_60xs,
  },
  mt_15: {
    marginTop: GlobalStyles.Margin.margin_28xs,
  },
  ml300: {
    marginLeft: GlobalStyles.Margin.margin_58xl,
  },
  mt_51: {
    marginTop: GlobalStyles.Margin.margin_43xs,
  },
  ml318: {
    marginLeft: GlobalStyles.Margin.margin_60xl,
  },
  mt_18: {
    marginTop: GlobalStyles.Margin.margin_31xs,
  },
  ml40: {
    marginLeft: GlobalStyles.Margin.margin_17xl,
  },
  mt12: {
    marginTop: GlobalStyles.Margin.margin_13xs,
  },
  mt247: {
    marginTop: GlobalStyles.Margin.margin_55xl,
  },
  helloTypo: {
    color: GlobalStyles.Color.indigo,
    textAlign: "left",
    fontWeight: "700",
  },
  groupChildPosition: {
    top: "50%",
    left: 0,
    right: 0,
    position: "absolute",
  },
  helloColor: {
    color: GlobalStyles.Color.gray_800,
    textAlign: "left",
  },
  backgroundPosition: {
    backgroundColor: GlobalStyles.Color.gray_1600,
    bottom: 0,
    left: 0,
    right: 0,
    position: "absolute",
  },
  viewShadowBox: {
    height: 46,
    width: 117,
    shadowOpacity: 1,
    elevation: 0,
    shadowRadius: 0,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "#898a8d",
    backgroundColor: GlobalStyles.Color.gray_100,
    borderRadius: GlobalStyles.Border.br_6xs,
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
    fontSize: GlobalStyles.FontSize.size_4xs,
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
    fontSize: GlobalStyles.FontSize.size_5xl,
  },
  viewPosition: {
    marginTop: -50.5,
    height: 47,
    width: 117,
    top: "50%",
    position: "absolute",
  },
  setLimitChild: {
    height: 815,
    width: 375,
    backgroundColor: GlobalStyles.Color.gray_300,
  },
  hello: {
    fontFamily: GlobalStyles.FontFamily.typoGrotesk,
    textAlign: "left",
    fontSize: GlobalStyles.FontSize.size_5xl,
    color: GlobalStyles.Color.indigo,
  },
  groupChild: {
    marginTop: -31.5,
    borderRadius: GlobalStyles.Border.br_xl,
    backgroundColor: GlobalStyles.Color.white,
    left: 0,
    right: 0,
    height: 63,
  },
  setLimitInner: {
    height: 63,
    width: 326,
  },
  iconFeatherArrowLeft: {
    marginLeft: -0.5,
    bottom: 4,
    width: 17,
    height: 17,
    left: "50%",
    position: "absolute",
  },
  iconFeatherArrowLeftWrapper: {
    width: 55,
    height: 45,
    backgroundColor: GlobalStyles.Color.gray_300,
  },
  hello1: {
    fontSize: GlobalStyles.FontSize.size_xl,
    fontFamily: GlobalStyles.FontFamily.helvetica,
    fontWeight: "700",
  },
  hello2: {
    fontSize: GlobalStyles.FontSize.size_2xl,
    fontWeight: "300",
    color: GlobalStyles.Color.blue,
    fontFamily: GlobalStyles.FontFamily.helvetica,
    textAlign: "left",
  },
  hello3: {
    fontSize: GlobalStyles.FontSize.size_sm,
    fontFamily: GlobalStyles.FontFamily.helvetica,
    textAlign: "left",
  },
  backgroundBackground: {
    top: 0,
  },
  background1: {
    backgroundColor: GlobalStyles.Color.gray_600,
    bottom: 0,
    top: 0,
    left: 0,
    right: 0,
    position: "absolute",
  },
  background: {
    bottom: 0,
    top: 0,
    left: 0,
    right: 0,
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
    letterSpacing: 0,
    width: 118,
    top: "50%",
    fontSize: GlobalStyles.FontSize.size_5xl,
  },
  view: {
    bottom: 0,
  },
  keyBackground: {
    shadowOpacity: 1,
    elevation: 0,
    shadowRadius: 0,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "#898a8d",
    backgroundColor: GlobalStyles.Color.gray_100,
    borderRadius: GlobalStyles.Border.br_6xs,
    bottom: 0,
    top: 0,
    left: 0,
    right: 0,
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
    top: 0,
    right: 0,
  },
  view8: {
    top: 0,
  },
  view9: {
    top: 0,
    left: 0,
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
  groupItem: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: GlobalStyles.Border.br_md,
    backgroundColor: GlobalStyles.Color.gray_500,
    position: "absolute",
    width: "100%",
  },
  maskGroup236: {
    bottom: 13,
    top: 0,
    left: 0,
    right: 0,
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
    fontSize: GlobalStyles.FontSize.size_base,
    lineHeight: 17,
    textTransform: "uppercase",
    textAlign: "center",
    color: GlobalStyles.Color.black,
    fontFamily: GlobalStyles.FontFamily.helvetica,
    position: "absolute",
  },
  component208157Parent: {
    height: 60,
    width: 326,
  },
  setLimit: {
    backgroundColor: GlobalStyles.Color.gray_1100,
    flex: 1,
    width: "100%",
  },
});

export default SetLimit;
