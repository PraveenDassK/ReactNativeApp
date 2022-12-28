import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import GlobalStyles from "../GlobalStyles";

const ItsDamagedOrDoesntWork = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.itsDamagedOrDoesntWork}>
      <View style={styles.itsDamagedOrDoesntWorkChild} />
      <Text style={[styles.hello, styles.mt11, styles.ml27]}>
        <Text style={styles.itsDamagedOr}>It’s damaged or doesn’t</Text>
        <Text style={styles.itsDamagedOr}>work</Text>
      </Text>
      <Pressable
        style={[styles.iconFeatherArrowLeftWrapper, styles.mt_769]}
        onPress={() => navigation.navigate("ReplaceCard")}
      >
        <Image
          style={styles.iconFeatherArrowLeft}
          resizeMode="cover"
          source={require("../assets/icon-featherarrowleft.png")}
        />
      </Pressable>
      <View style={[styles.component208114Parent, styles.mt331, styles.ml25]}>
        <View style={[styles.component208114, styles.maskGroup236Position]}>
          <View style={[styles.rectangleParent, styles.groupItemPosition]}>
            <View style={styles.groupChild} />
            <View style={[styles.maskGroup236, styles.maskGroup236Position]} />
          </View>
        </View>
        <Text style={styles.hello1}>{`Terminate & Order card`}</Text>
      </View>
      <View style={[styles.rectangleGroup, styles.mt14, styles.ml25]}>
        <View style={[styles.groupItem, styles.groupItemPosition]} />
        <View
          style={[
            styles.yourCurrentCardWillBeTermWrapper,
            styles.yourCardPosition1,
          ]}
        >
          <Text
            style={[styles.yourCurrentCardWillBeTerm, styles.yourCardPosition]}
          >
            <Text style={styles.itsDamagedOr}>
              <Text style={[styles.yourCardTypo, styles.yourCardTypo1]}>
                Your current card will be terminated
              </Text>
            </Text>
            <Text style={styles.itsDamagedOr}>
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
          <Text style={[styles.text, styles.yourCardTypo]}>1</Text>
        </View>
      </View>
      <View style={[styles.rectangleGroup, styles.mt10, styles.ml25]}>
        <View style={[styles.groupItem, styles.groupItemPosition]} />
        <View
          style={[
            styles.yourCurrentCardWillBeTermWrapper,
            styles.yourCardPosition1,
          ]}
        >
          <Text
            style={[styles.yourCurrentCardWillBeTerm, styles.yourCardPosition]}
          >
            <Text style={styles.itsDamagedOr}>
              <Text style={styles.yourCardTypo1}>
                Order a replacement card below
              </Text>
            </Text>
            <Text style={styles.itsDamagedOr}>
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
          <Text style={[styles.text, styles.yourCardTypo]}>2</Text>
        </View>
      </View>
      <View style={[styles.rectangleGroup, styles.mt10, styles.ml25]}>
        <View style={[styles.groupItem, styles.groupItemPosition]} />
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
              styles.yourCardTypo1,
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
          <Text style={[styles.text, styles.yourCardTypo]}>3</Text>
        </View>
      </View>
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
  mt_769: {
    marginTop: GlobalStyles.Margin.margin_60xs,
  },
  mt331: {
    marginTop: GlobalStyles.Margin.margin_62xl,
  },
  ml25: {
    marginLeft: GlobalStyles.Margin.margin_3xl,
  },
  mt14: {
    marginTop: GlobalStyles.Margin.margin_9xs,
  },
  mt10: {
    marginTop: GlobalStyles.Margin.margin_16xs,
  },
  maskGroup236Position: {
    left: 0,
    right: 0,
    top: 0,
    position: "absolute",
  },
  groupItemPosition: {
    top: "50%",
    left: 0,
    right: 0,
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
  yourCardTypo1: {
    fontSize: GlobalStyles.FontSize.size_2xs,
    fontWeight: "700",
  },
  wrapperLayout: {
    height: 14,
    width: 7,
    top: "50%",
    position: "absolute",
  },
  yourCardTypo: {
    color: GlobalStyles.Color.gray_1300,
    fontSize: GlobalStyles.FontSize.size_2xs,
    fontFamily: GlobalStyles.FontFamily.helvetica,
  },
  itsDamagedOrDoesntWorkChild: {
    width: 375,
    height: 815,
    backgroundColor: GlobalStyles.Color.gray_300,
  },
  itsDamagedOr: {
    margin: GlobalStyles.Margin.margin_25xs,
  },
  hello: {
    fontSize: GlobalStyles.FontSize.size_5xl,
    lineHeight: 30,
    fontFamily: GlobalStyles.FontFamily.typoGrotesk,
    color: GlobalStyles.Color.indigo,
    textAlign: "left",
    fontWeight: "700",
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
    backgroundColor: GlobalStyles.Color.gray_300,
  },
  groupChild: {
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
  },
  rectangleParent: {
    marginTop: -30,
    height: 60,
  },
  component208114: {
    bottom: 0,
  },
  hello1: {
    top: "35%",
    left: "18.71%",
    fontSize: GlobalStyles.FontSize.size_base,
    lineHeight: 17,
    textTransform: "uppercase",
    color: GlobalStyles.Color.black,
    textAlign: "center",
    fontFamily: GlobalStyles.FontFamily.helvetica,
    position: "absolute",
  },
  component208114Parent: {
    height: 60,
    width: 326,
  },
  groupItem: {
    marginTop: -31.5,
    borderRadius: GlobalStyles.Border.br_xl,
    height: 63,
    backgroundColor: GlobalStyles.Color.white,
  },
  toKeepYour: {
    fontSize: GlobalStyles.FontSize.size_4xs,
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
    width: 22,
    height: 22,
    marginTop: -11.5,
    top: "50%",
    position: "absolute",
  },
  text: {
    marginTop: -7,
    width: 8,
    lineHeight: 14,
    fontSize: GlobalStyles.FontSize.size_2xs,
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
  },
  startUsingYourNewCardRighWrapper: {
    height: 28,
  },
  itsDamagedOrDoesntWork: {
    flex: 1,
    width: "100%",
    backgroundColor: GlobalStyles.Color.white,
  },
});

export default ItsDamagedOrDoesntWork;
