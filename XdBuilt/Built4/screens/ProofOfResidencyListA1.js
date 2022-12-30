import * as React from "react";
import { StyleSheet, View, Image, Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import GlobalStyles from "../GlobalStyles";

const ProofOfResidencyListA1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.proofOfResidencyListA1}>
      <View style={styles.proofOfResidencyListA1Child} />
      <Pressable
        style={[styles.iconFeatherArrowLeftWrapper, styles.mt2]}
        onPress={() => navigation.navigate("Name")}
      >
        <Image
          style={styles.iconFeatherArrowLeft}
          resizeMode="cover"
          source={require("../assets/icon-featherarrowleft.png")}
        />
      </Pressable>
      <View style={[styles.helloParent, styles.mt10, styles.ml27]}>
        <Text style={[styles.hello, styles.textPosition]}>
          Proof of Residency
        </Text>
        <Text style={[styles.hello1, styles.helloTypo, styles.hello1Position]}>
          Please provide us a proof of your residence.
        </Text>
      </View>
      <View style={[styles.statusBarBlack, styles.mt_812]}>
        <View style={styles.rectangle} />
        <View style={[styles.statusBar, styles.hello1Position]}>
          <View style={styles.time}>
            <Text style={[styles.text, styles.textPosition]}>9:41</Text>
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
            <View style={styles.networkItem} />
            <View style={[styles.networkInner, styles.networkLayout]} />
            <View style={[styles.rectangleView, styles.networkLayout]} />
          </View>
        </View>
      </View>
      <View style={[styles.homeIndicator, styles.mt193, styles.ml121]} />
      <Text style={[styles.yourCountry, styles.mt38, styles.ml25]}>
        Your Country
      </Text>
      <View
        style={[
          styles.unitedKingdomParent,
          styles.mt9,
          styles.ml25,
          styles.parentLayout,
        ]}
      >
        <Text
          style={[
            styles.unitedKingdom,
            styles.underReviewTypo,
            styles.hello1Position,
          ]}
        >
          United Kingdom
        </Text>
        <Image
          style={[styles.maskGroup288, styles.hello1Position]}
          resizeMode="cover"
          source={require("../assets/mask-group-288.png")}
        />
      </View>
      <Text style={[styles.helloTypo, styles.mt38, styles.ml29]}>
        Select one document from below categories
      </Text>
      <Pressable
        style={[
          styles.bankBuildingSocietyMortgaParent,
          styles.mt14,
          styles.ml137,
          styles.parentShadowBox,
        ]}
        onPress={() =>
          navigation.navigate("BankBuildingsocietymortgageOrHMRCTaxstatement")
        }
      >
        <Text
          style={[
            styles.bankBuildingSocietyMortga,
            styles.councilTaxOrUtilityBillTypo,
            styles.councilTaxOrUtilityBillPosition,
          ]}
        >
          <Text style={styles.bankBuilding}>Bank, building</Text>
          <Text style={styles.bankBuilding}>society,</Text>
          <Text style={styles.bankBuilding}>mortgage or</Text>
          <Text style={styles.bankBuilding}>HMRC tax</Text>
          <Text style={styles.bankBuilding}>statement</Text>
        </Text>
        <Image
          style={[styles.iconIonicIosArrowForward, styles.iconPosition]}
          resizeMode="cover"
          source={require("../assets/icon-ioniciosarrowforward19.png")}
        />
      </Pressable>
      <Pressable
        style={[
          styles.bankBuildingSocietyMortgaParent,
          styles.mt_125,
          styles.ml248,
          styles.parentShadowBox,
        ]}
        onPress={() =>
          navigation.navigate("BankBuildingsocietymortgageOrHMRCTaxstatement1")
        }
      >
        <Text
          style={[
            styles.houseOrMotorInsuranceCerti,
            styles.councilTaxOrUtilityBillTypo,
          ]}
        >
          <Text style={styles.bankBuilding}>House or</Text>
          <Text style={styles.bankBuilding}>motor</Text>
          <Text style={styles.bankBuilding}>insurance</Text>
          <Text style={styles.bankBuilding}>certificate</Text>
        </Text>
        <Image
          style={[styles.iconIonicIosArrowForward1, styles.iconPosition]}
          resizeMode="cover"
          source={require("../assets/icon-ioniciosarrowforward20.png")}
        />
      </Pressable>
      <Pressable
        style={[
          styles.bankBuildingSocietyMortgaParent,
          styles.mt_125,
          styles.ml26,
          styles.parentShadowBox,
        ]}
        onPress={() => navigation.navigate("CurrentSignedPassportB")}
      >
        <Text
          style={[
            styles.councilTaxOrUtilityBill,
            styles.councilTaxOrUtilityBillTypo,
            styles.councilTaxOrUtilityBillPosition,
          ]}
        >
          <Text style={styles.bankBuilding}>Council tax</Text>
          <Text style={styles.bankBuilding}>{`or `}</Text>
          <Text style={styles.bankBuilding}>utility bill</Text>
        </Text>
        <Image
          style={[styles.iconIonicIosArrowForward1, styles.iconPosition]}
          resizeMode="cover"
          source={require("../assets/icon-ioniciosarrowforward20.png")}
        />
      </Pressable>
      <Text style={[styles.helloTypo, styles.mt45, styles.ml25]}>
        Select one document from below categories
      </Text>
      <View
        style={[
          styles.currentSignedPassportParent,
          styles.mt14,
          styles.parentShadowBox,
          styles.parentLayout,
        ]}
      >
        <Text
          style={[
            styles.currentSignedPassport,
            styles.underReviewPosition,
            styles.underReviewTypo,
            styles.underReviewTypo1,
          ]}
        >
          Current signed passport 
        </Text>
        <Text
          style={[
            styles.underReview,
            styles.underReviewPosition,
            styles.underReviewTypo,
            styles.underReviewTypo1,
          ]}
        >
          Under Review
        </Text>
        <Image
          style={[styles.iconAwesomeCheckCircle, styles.underReviewPosition]}
          resizeMode="cover"
          source={require("../assets/icon-awesomecheckcircle166.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mt2: {
    marginTop: GlobalStyles.Margin.margin_31xs,
  },
  mt10: {
    marginTop: GlobalStyles.Margin.margin_24xs,
  },
  ml27: {
    marginLeft: GlobalStyles.Margin.margin_4xs,
  },
  mt_812: {
    marginTop: GlobalStyles.Margin.margin_90xs,
  },
  mt193: {
    marginTop: 193,
  },
  ml121: {
    marginLeft: GlobalStyles.Margin.margin_54xl,
  },
  mt38: {
    marginTop: GlobalStyles.Margin.margin_8xl,
  },
  ml25: {
    marginLeft: GlobalStyles.Margin.margin_7xs,
  },
  mt9: {
    marginTop: GlobalStyles.Margin.margin_25xs,
  },
  ml29: {
    marginLeft: GlobalStyles.Margin.margin_xs,
  },
  mt14: {
    marginTop: GlobalStyles.Margin.margin_20xs,
  },
  ml137: {
    marginLeft: 137,
  },
  mt_125: {
    marginTop: GlobalStyles.Margin.margin_74xs,
  },
  ml248: {
    marginLeft: 248,
  },
  ml26: {
    marginLeft: GlobalStyles.Margin.margin_6xs,
  },
  mt45: {
    marginTop: GlobalStyles.Margin.margin_16xl,
  },
  textPosition: {
    textAlign: "left",
    left: 0,
    top: 0,
    position: "absolute",
  },
  helloTypo: {
    color: GlobalStyles.Color.gray_800,
    fontFamily: GlobalStyles.FontFamily.helvetica,
    fontSize: GlobalStyles.FontSize.size_base,
    textAlign: "left",
  },
  hello1Position: {
    top: "50%",
    position: "absolute",
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
  parentLayout: {
    width: 326,
    borderRadius: GlobalStyles.Border.br_2xs,
  },
  underReviewTypo: {
    color: GlobalStyles.Color.blue,
    fontFamily: GlobalStyles.FontFamily.helvetica,
    textAlign: "left",
  },
  parentShadowBox: {
    elevation: 20,
    shadowRadius: 20,
    shadowColor: "rgba(1, 1, 253, 0.1)",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    backgroundColor: GlobalStyles.Color.white,
  },
  councilTaxOrUtilityBillTypo: {
    textAlign: "center",
    fontSize: GlobalStyles.FontSize.size_sm,
    color: GlobalStyles.Color.blue,
    fontFamily: GlobalStyles.FontFamily.helvetica,
    position: "absolute",
  },
  councilTaxOrUtilityBillPosition: {
    bottom: 8,
    fontSize: GlobalStyles.FontSize.size_sm,
  },
  iconPosition: {
    width: 11,
    marginTop: -41.98,
    height: 6,
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  underReviewPosition: {
    marginTop: -8.11,
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  underReviewTypo1: {
    fontSize: GlobalStyles.FontSize.size_base,
    marginTop: -8.11,
    color: GlobalStyles.Color.blue,
  },
  proofOfResidencyListA1Child: {
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
    fontSize: GlobalStyles.FontSize.size_8xl,
    lineHeight: 30,
    fontWeight: "700",
    fontFamily: GlobalStyles.FontFamily.typoGrotesk,
    color: GlobalStyles.Color.indigo,
    textAlign: "left",
  },
  hello1: {
    marginTop: 16.74,
    left: 1,
  },
  helloParent: {
    width: 275,
    height: 65,
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
    bottom: 0,
    right: 0,
    left: 0,
    top: 0,
    position: "absolute",
    backgroundColor: GlobalStyles.Color.white,
  },
  text: {
    fontSize: GlobalStyles.FontSize.size_4xl,
    letterSpacing: 0,
    lineHeight: 24,
    fontWeight: "500",
    fontFamily: GlobalStyles.FontFamily.roboto,
    color: GlobalStyles.Color.gray_1900,
  },
  time: {
    width: 40,
    bottom: 0,
    left: 0,
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
    marginTop: -3,
    top: "50%",
    width: 17,
    position: "absolute",
  },
  networkChild: {
    height: 4,
    left: 0,
    width: 3,
    backgroundColor: GlobalStyles.Color.gray_1400,
    borderRadius: GlobalStyles.Border.br_7xs,
  },
  networkItem: {
    marginLeft: -3.5,
    height: 6,
    width: 3,
    backgroundColor: GlobalStyles.Color.gray_1400,
    borderRadius: GlobalStyles.Border.br_7xs,
    bottom: 0,
    left: "50%",
    position: "absolute",
  },
  networkInner: {
    marginLeft: 0.5,
    height: 9,
    left: "50%",
  },
  rectangleView: {
    right: 0,
    top: 0,
    width: 3,
    backgroundColor: GlobalStyles.Color.gray_1400,
    borderRadius: GlobalStyles.Border.br_7xs,
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
  homeIndicator: {
    borderRadius: GlobalStyles.Border.br_8xl,
    backgroundColor: GlobalStyles.Color.black,
    width: 134,
    height: 5,
  },
  yourCountry: {
    fontFamily: GlobalStyles.FontFamily.helvetica,
    fontSize: GlobalStyles.FontSize.size_base,
    textAlign: "left",
    color: GlobalStyles.Color.indigo,
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
  bankBuilding: {
    margin: GlobalStyles.Margin.margin_33xs,
  },
  bankBuildingSocietyMortga: {
    left: 11,
  },
  iconIonicIosArrowForward: {
    marginLeft: -6.17,
  },
  bankBuildingSocietyMortgaParent: {
    borderRadius: GlobalStyles.Border.br_4xl,
    width: 104,
    height: 125,
  },
  houseOrMotorInsuranceCerti: {
    marginLeft: -28,
    bottom: 10,
    left: "50%",
  },
  iconIonicIosArrowForward1: {
    marginLeft: -5.67,
  },
  councilTaxOrUtilityBill: {
    marginLeft: -32,
    left: "50%",
  },
  currentSignedPassport: {
    marginLeft: -148,
  },
  underReview: {
    marginLeft: 59.67,
  },
  iconAwesomeCheckCircle: {
    marginLeft: 40.54,
    width: 15,
    height: 15,
  },
  currentSignedPassportParent: {
    height: 50,
    alignSelf: "center",
  },
  proofOfResidencyListA1: {
    flex: 1,
    width: "100%",
    backgroundColor: GlobalStyles.Color.white,
  },
});

export default ProofOfResidencyListA1;
