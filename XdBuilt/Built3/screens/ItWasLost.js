import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import GlobalStyles from "../GlobalStyles";

const ItWasLost = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.itWasLost}>
      <View style={styles.itWasLostChild} />
      <Text style={[styles.hello, styles.mt11, styles.ml27]}>It was lost</Text>
      <View style={[styles.rectangleParent, styles.mt19, styles.ml25]}>
        <View style={[styles.groupChild, styles.groupPosition]} />
        <View
          style={[
            styles.yourCurrentCardWillBeTermWrapper,
            styles.yourCardPosition1,
          ]}
        >
          <Text
            style={[styles.yourCurrentCardWillBeTerm, styles.yourCardPosition]}
          >
            <Text style={styles.yourCurrentCardWillBeTerm1}>
              <Text style={[styles.yourCardTypo, styles.yourCardTypo1]}>
                Your current card will be terminated
              </Text>
            </Text>
            <Text style={styles.yourCurrentCardWillBeTerm1}>
              <Text style={styles.toKeepYour}>To keep your account safe</Text>
            </Text>
          </Text>
        </View>
        <Image
          style={styles.groupItem}
          resizeMode="cover"
          source={require("../assets/ellipse-3260.png")}
        />
        <View style={[styles.wrapper, styles.wrapperLayout]}>
          <Text style={[styles.text, styles.yourCardTypo]}>1</Text>
        </View>
      </View>
      <View style={[styles.rectangleParent, styles.mt10, styles.ml25]}>
        <View style={[styles.groupChild, styles.groupPosition]} />
        <View
          style={[
            styles.yourCurrentCardWillBeTermWrapper,
            styles.yourCardPosition1,
          ]}
        >
          <Text
            style={[styles.yourCurrentCardWillBeTerm, styles.yourCardPosition]}
          >
            <Text style={styles.yourCurrentCardWillBeTerm1}>
              <Text style={styles.yourCardTypo1}>
                Order a replacement card below
              </Text>
            </Text>
            <Text style={styles.yourCurrentCardWillBeTerm1}>
              <Text style={styles.toKeepYour}>
                You may be charged for the new card
              </Text>
            </Text>
          </Text>
        </View>
        <Image
          style={styles.groupItem}
          resizeMode="cover"
          source={require("../assets/ellipse-3260.png")}
        />
        <View style={[styles.container, styles.wrapperLayout]}>
          <Text style={[styles.text, styles.yourCardTypo]}>2</Text>
        </View>
      </View>
      <View style={[styles.rectangleParent, styles.mt10, styles.ml25]}>
        <View style={[styles.groupChild, styles.groupPosition]} />
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
          style={styles.groupItem}
          resizeMode="cover"
          source={require("../assets/ellipse-3260.png")}
        />
        <View style={[styles.container, styles.wrapperLayout]}>
          <Text style={[styles.text, styles.yourCardTypo]}>3</Text>
        </View>
      </View>
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
      <View style={[styles.component208112Parent, styles.mt356, styles.ml25]}>
        <View style={[styles.component208112, styles.maskGroup236Position]}>
          <View style={[styles.groupView, styles.groupPosition]}>
            <View style={styles.groupChild2} />
            <View style={[styles.maskGroup236, styles.maskGroup236Position]} />
          </View>
        </View>
        <Text style={styles.hello1}>{`Terminate & Order card`}</Text>
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
  mt19: {
    marginTop: GlobalStyles.Margin.margin_2xs,
  },
  ml25: {
    marginLeft: GlobalStyles.Margin.margin_3xl,
  },
  mt10: {
    marginTop: GlobalStyles.Margin.margin_16xs,
  },
  mt_769: {
    marginTop: GlobalStyles.Margin.margin_60xs,
  },
  mt356: {
    marginTop: 356,
  },
  groupPosition: {
    left: 0,
    right: 0,
    top: "50%",
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
    left: 0,
    top: "50%",
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
  maskGroup236Position: {
    top: 0,
    left: 0,
    right: 0,
    position: "absolute",
  },
  itWasLostChild: {
    width: 375,
    height: 815,
    backgroundColor: GlobalStyles.Color.gray_300,
  },
  hello: {
    fontSize: GlobalStyles.FontSize.size_5xl,
    fontFamily: GlobalStyles.FontFamily.typoGrotesk,
    color: GlobalStyles.Color.indigo,
    textAlign: "left",
    fontWeight: "700",
  },
  groupChild: {
    marginTop: -31.5,
    borderRadius: GlobalStyles.Border.br_xl,
    height: 63,
    backgroundColor: GlobalStyles.Color.white,
  },
  yourCurrentCardWillBeTerm1: {
    margin: GlobalStyles.Margin.margin_25xs,
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
  groupItem: {
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
    left: 0,
    top: "50%",
    position: "absolute",
    textAlign: "left",
  },
  wrapper: {
    marginTop: -6.5,
    left: 23,
  },
  rectangleParent: {
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
  groupChild2: {
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
  groupView: {
    marginTop: -30,
    height: 60,
  },
  component208112: {
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
  component208112Parent: {
    height: 60,
    width: 326,
  },
  itWasLost: {
    flex: 1,
    width: "100%",
    backgroundColor: GlobalStyles.Color.white,
  },
});

export default ItWasLost;
