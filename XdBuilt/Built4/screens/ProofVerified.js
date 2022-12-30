import * as React from "react";
import { StyleSheet, View, Image, Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import GlobalStyles from "../GlobalStyles";

const ProofVerified = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.proofVerified}>
      <View style={styles.proofVerifiedChild} />
      <Pressable
        style={[styles.iconFeatherArrowLeftWrapper, styles.mt2]}
        onPress={() => navigation.navigate("ProofOfResidencyListA")}
      >
        <Image
          style={styles.iconFeatherArrowLeft}
          resizeMode="cover"
          source={require("../assets/icon-featherarrowleft.png")}
        />
      </Pressable>
      <Text style={[styles.hello, styles.mt45, styles.ml25, styles.helloTypo]}>
        Select one document from below categories
      </Text>
      <Text style={[styles.hello, styles.mt38, styles.ml27, styles.helloTypo]}>
        Select one document from below categories
      </Text>
      <View style={[styles.helloParent, styles.mt10, styles.ml27]}>
        <Text style={[styles.hello2, styles.hello2Color]}>
          Proof of Residency
        </Text>
        <Text style={[styles.hello3, styles.hello3Position, styles.helloTypo]}>
          Please provide us a proof of your residence.
        </Text>
      </View>
      <View style={[styles.homeIndicator, styles.mt36, styles.ml121]} />
      <Pressable
        style={[styles.component2088Parent, styles.mt171, styles.ml25]}
        onPress={() => navigation.navigate("BusinessAddress2")}
      >
        <View style={[styles.component2088, styles.timePosition]}>
          <View style={[styles.rectangleParent, styles.hello3Position]}>
            <View style={styles.groupChild} />
            <View style={styles.maskGroup236} />
          </View>
        </View>
        <Text style={styles.hello4}>Continue</Text>
      </Pressable>
      <Text
        style={[
          styles.yourCountry,
          styles.mt38,
          styles.ml25,
          styles.hello2Color,
        ]}
      >
        Your Country
      </Text>
      <View
        style={[
          styles.currentSignedPassportParent,
          styles.mt14,
          styles.rectangleShadowBox,
          styles.parentLayout,
        ]}
      >
        <Text
          style={[
            styles.currentSignedPassport,
            styles.underReviewPosition,
            styles.underReviewPosition1,
          ]}
        >
          Current signed passport 
        </Text>
        <Text
          style={[
            styles.underReview,
            styles.underReviewPosition,
            styles.underReviewPosition1,
          ]}
        >
          Under Review
        </Text>
        <Image
          style={[
            styles.iconAwesomeCheckCircle,
            styles.underReviewPosition1,
            styles.hello3Position,
          ]}
          resizeMode="cover"
          source={require("../assets/icon-awesomecheckcircle166.png")}
        />
      </View>
      <View
        style={[
          styles.currentSignedPassportParent,
          styles.mt14,
          styles.rectangleShadowBox,
          styles.parentLayout,
        ]}
      >
        <Text
          style={[
            styles.currentSignedPassport,
            styles.underReviewPosition,
            styles.underReviewPosition1,
          ]}
        >
          Council tax or utility bill
        </Text>
        <Text
          style={[
            styles.underReview,
            styles.underReviewPosition,
            styles.underReviewPosition1,
          ]}
        >
          Under Review
        </Text>
        <Image
          style={[
            styles.iconAwesomeCheckCircle,
            styles.underReviewPosition1,
            styles.hello3Position,
          ]}
          resizeMode="cover"
          source={require("../assets/icon-awesomecheckcircle166.png")}
        />
      </View>
      <View
        style={[
          styles.unitedKingdomParent,
          styles.mt9,
          styles.ml25,
          styles.parentLayout,
        ]}
      >
        <Text style={[styles.unitedKingdom, styles.underReviewPosition]}>
          United Kingdom
        </Text>
        <Image
          style={[styles.maskGroup288, styles.hello3Position]}
          resizeMode="cover"
          source={require("../assets/mask-group-288.png")}
        />
      </View>
      <View style={[styles.statusBarBlack, styles.mt_812]}>
        <View
          style={[
            styles.rectangle,
            styles.rectangleShadowBox,
            styles.timePosition,
          ]}
        />
        <View style={[styles.statusBar, styles.hello3Position]}>
          <View style={[styles.time, styles.timePosition]}>
            <Text style={styles.text}>9:41</Text>
          </View>
          <Image
            style={[styles.batteryIcon, styles.networkPosition]}
            resizeMode="cover"
            source={require("../assets/icon-awesomebatterythreequarters.png")}
          />
          <Image
            style={styles.wifiIcon}
            resizeMode="cover"
            source={require("../assets/icon-awesomewifi.png")}
          />
          <View style={[styles.network, styles.networkPosition]}>
            <View style={[styles.networkChild, styles.networkLayout]} />
            <View style={[styles.networkItem, styles.networkLayout]} />
            <View style={[styles.networkInner, styles.networkLayout]} />
            <View style={[styles.rectangleView, styles.networkLayout]} />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mt2: {
    marginTop: GlobalStyles.Margin.margin_31xs,
  },
  mt45: {
    marginTop: GlobalStyles.Margin.margin_16xl,
  },
  ml25: {
    marginLeft: GlobalStyles.Margin.margin_7xs,
  },
  mt38: {
    marginTop: GlobalStyles.Margin.margin_8xl,
  },
  ml27: {
    marginLeft: GlobalStyles.Margin.margin_4xs,
  },
  mt10: {
    marginTop: GlobalStyles.Margin.margin_24xs,
  },
  mt36: {
    marginTop: GlobalStyles.Margin.margin_6xl,
  },
  ml121: {
    marginLeft: GlobalStyles.Margin.margin_54xl,
  },
  mt171: {
    marginTop: 171,
  },
  mt14: {
    marginTop: GlobalStyles.Margin.margin_20xs,
  },
  mt9: {
    marginTop: GlobalStyles.Margin.margin_25xs,
  },
  mt_812: {
    marginTop: GlobalStyles.Margin.margin_90xs,
  },
  helloTypo: {
    color: GlobalStyles.Color.gray_800,
    textAlign: "left",
    fontFamily: GlobalStyles.FontFamily.helvetica,
    fontSize: GlobalStyles.FontSize.size_base,
  },
  hello2Color: {
    color: GlobalStyles.Color.indigo,
    textAlign: "left",
  },
  hello3Position: {
    top: "50%",
    position: "absolute",
  },
  timePosition: {
    bottom: 0,
    left: 0,
    top: 0,
    position: "absolute",
  },
  rectangleShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: -3,
    },
    backgroundColor: GlobalStyles.Color.white,
  },
  parentLayout: {
    borderRadius: GlobalStyles.Border.br_2xs,
    width: 326,
  },
  underReviewPosition: {
    color: GlobalStyles.Color.blue,
    top: "50%",
    textAlign: "left",
    fontFamily: GlobalStyles.FontFamily.helvetica,
    position: "absolute",
  },
  underReviewPosition1: {
    marginTop: -8.11,
    left: "50%",
  },
  networkPosition: {
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
    position: "absolute",
  },
  proofVerifiedChild: {
    height: 812,
    width: 375,
    backgroundColor: GlobalStyles.Color.gray_300,
  },
  iconFeatherArrowLeft: {
    marginLeft: -0.5,
    bottom: 4,
    height: 17,
    width: 17,
    left: "50%",
    position: "absolute",
  },
  iconFeatherArrowLeftWrapper: {
    width: 55,
    height: 45,
    backgroundColor: GlobalStyles.Color.gray_300,
  },
  hello: {
    textAlign: "left",
  },
  hello2: {
    fontSize: GlobalStyles.FontSize.size_8xl,
    lineHeight: 30,
    fontWeight: "700",
    fontFamily: GlobalStyles.FontFamily.typoGrotesk,
    left: 0,
    top: 0,
    position: "absolute",
  },
  hello3: {
    marginTop: 16.74,
    left: 1,
    textAlign: "left",
  },
  helloParent: {
    width: 275,
    height: 65,
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
    right: 0,
    left: 0,
    top: 0,
    position: "absolute",
  },
  rectangleParent: {
    marginTop: -30,
    right: 0,
    height: 60,
    left: 0,
  },
  component2088: {
    right: 0,
  },
  hello4: {
    top: "36.67%",
    left: "38.04%",
    fontSize: GlobalStyles.FontSize.size_lg,
    lineHeight: 17,
    textTransform: "uppercase",
    color: GlobalStyles.Color.black,
    textAlign: "center",
    fontFamily: GlobalStyles.FontFamily.helvetica,
    position: "absolute",
  },
  component2088Parent: {
    height: 60,
    width: 326,
  },
  yourCountry: {
    fontFamily: GlobalStyles.FontFamily.helvetica,
    fontSize: GlobalStyles.FontSize.size_base,
  },
  currentSignedPassport: {
    marginLeft: -148,
    fontSize: GlobalStyles.FontSize.size_base,
  },
  underReview: {
    marginLeft: 59.67,
    fontSize: GlobalStyles.FontSize.size_base,
  },
  iconAwesomeCheckCircle: {
    marginLeft: 40.54,
    width: 15,
    height: 15,
  },
  currentSignedPassportParent: {
    shadowColor: "rgba(1, 1, 253, 0.1)",
    shadowRadius: 20,
    elevation: 20,
    height: 50,
    alignSelf: "center",
  },
  unitedKingdom: {
    marginTop: -8,
    left: 46,
    fontSize: GlobalStyles.FontSize.size_xl,
  },
  maskGroup288: {
    marginTop: -10.76,
    left: 6,
    height: 22,
    width: 22,
  },
  unitedKingdomParent: {
    height: 60,
    backgroundColor: GlobalStyles.Color.white,
  },
  rectangle: {
    shadowColor: "rgba(0, 0, 0, 0.05)",
    shadowRadius: 6,
    elevation: 6,
    right: 0,
  },
  text: {
    fontSize: GlobalStyles.FontSize.size_4xl,
    letterSpacing: 0,
    lineHeight: 24,
    fontWeight: "500",
    fontFamily: GlobalStyles.FontFamily.roboto,
    color: GlobalStyles.Color.gray_1900,
    left: 0,
    top: 0,
    textAlign: "left",
    position: "absolute",
  },
  time: {
    width: 40,
  },
  batteryIcon: {
    width: 22,
    right: 0,
  },
  wifiIcon: {
    right: 37,
    height: 12,
    marginTop: -3,
    top: "50%",
    width: 17,
    position: "absolute",
  },
  networkChild: {
    height: 4,
    left: 0,
  },
  networkItem: {
    marginLeft: -3.5,
    height: 6,
    left: "50%",
  },
  networkInner: {
    marginLeft: 0.5,
    height: 9,
    left: "50%",
  },
  rectangleView: {
    right: 0,
    top: 0,
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
  proofVerified: {
    flex: 1,
    width: "100%",
    backgroundColor: GlobalStyles.Color.white,
  },
});

export default ProofVerified;
