import * as React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import GlobalStyles from "../GlobalStyles";

const ProofOfResidencyListA = () => {
  return (
    <View style={styles.proofOfResidencyListA}>
      <View style={styles.groupParent}>
        <View style={styles.helloParent}>
          <Text style={styles.hello}>Proof of Residency</Text>
          <Text style={[styles.hello1, styles.helloTypo]}>
            Please provide us a proof of your residence.
          </Text>
        </View>
        <Text style={styles.yourCountry}>Your Country</Text>
        <Text style={[styles.hello2, styles.helloTypo]}>
          Select one document from below categories
        </Text>
        <View style={[styles.unitedKingdomParent, styles.maskGroup288Position]}>
          <Text style={styles.unitedKingdom}>United Kingdom</Text>
          <Image
            style={[styles.maskGroup288, styles.maskGroup288Position]}
            resizeMode="cover"
            source={require("../assets/mask-group-288.png")}
          />
        </View>
        <View
          style={[
            styles.currentPhotoCardDrivingLicParent,
            styles.parentShadowBox,
          ]}
        >
          <Text
            style={[
              styles.currentPhotoCardDrivingLic,
              styles.currentTypo,
              styles.currentPosition,
            ]}
          >
            <Text style={styles.current}>Current</Text>
            <Text style={styles.current}>photo-card</Text>
            <Text style={styles.current}>driving license </Text>
          </Text>
          <Image
            style={[styles.iconIonicIosArrowForward, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/icon-ioniciosarrowforward13.png")}
          />
        </View>
        <View style={[styles.birthCertificateParent, styles.parentShadowBox]}>
          <Text style={[styles.birthCertificate, styles.currentTypo]}>
            <Text style={styles.current}>Birth</Text>
            <Text style={styles.current}>Certificate </Text>
          </Text>
          <Image
            style={[styles.iconIonicIosArrowForward1, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/icon-ioniciosarrowforward14.png")}
          />
        </View>
        <View
          style={[styles.currentSignedPassportParent, styles.parentShadowBox]}
        >
          <Text
            style={[
              styles.currentSignedPassport,
              styles.currentTypo,
              styles.currentPosition,
            ]}
          >
            <Text style={styles.current}>Current signed</Text>
            <Text style={styles.current}>passport </Text>
          </Text>
          <Image
            style={[styles.iconIonicIosArrowForward1, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/icon-ioniciosarrowforward14.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  helloTypo: {
    color: GlobalStyles.Color.gray_700,
    fontFamily: GlobalStyles.FontFamily.helvetica,
    fontSize: GlobalStyles.FontSize.size_base,
    top: "50%",
    textAlign: "left",
    position: "absolute",
  },
  maskGroup288Position: {
    position: "absolute",
    top: "50%",
  },
  parentShadowBox: {
    height: 125,
    width: 104,
    shadowOpacity: 1,
    elevation: 20,
    shadowRadius: 20,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(1, 1, 253, 0.1)",
    borderRadius: GlobalStyles.Border.br_4xl,
    bottom: 0,
    position: "absolute",
    backgroundColor: GlobalStyles.Color.white,
  },
  currentTypo: {
    textAlign: "center",
    fontSize: GlobalStyles.FontSize.size_sm,
    color: GlobalStyles.Color.blue_100,
    fontFamily: GlobalStyles.FontFamily.helvetica,
    position: "absolute",
  },
  currentPosition: {
    left: 9,
    fontSize: GlobalStyles.FontSize.size_sm,
  },
  iconPosition: {
    height: 6,
    width: 11,
    marginTop: -41.98,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  hello: {
    fontSize: GlobalStyles.FontSize.size_8xl,
    fontWeight: "700",
    fontFamily: GlobalStyles.FontFamily.typoGrotesk,
    textAlign: "left",
    color: GlobalStyles.Color.indigo_100,
    left: 0,
    top: 0,
    position: "absolute",
  },
  hello1: {
    marginTop: 14.74,
    left: 1,
  },
  helloParent: {
    left: 2,
    width: 275,
    height: 57,
    top: 0,
    position: "absolute",
  },
  yourCountry: {
    marginTop: -98,
    fontFamily: GlobalStyles.FontFamily.helvetica,
    fontSize: GlobalStyles.FontSize.size_base,
    top: "50%",
    textAlign: "left",
    color: GlobalStyles.Color.indigo_100,
    left: 0,
    position: "absolute",
  },
  hello2: {
    marginTop: 31.76,
    left: 0,
  },
  unitedKingdom: {
    marginTop: -6,
    left: 46,
    fontSize: GlobalStyles.FontSize.size_xl,
    color: GlobalStyles.Color.blue_100,
    fontFamily: GlobalStyles.FontFamily.helvetica,
    top: "50%",
    textAlign: "left",
    position: "absolute",
  },
  maskGroup288: {
    marginTop: -10.76,
    left: 6,
    width: 22,
    height: 22,
    top: "50%",
  },
  unitedKingdomParent: {
    marginTop: -75,
    borderRadius: GlobalStyles.Border.br_2xs,
    height: 60,
    right: 0,
    top: "50%",
    left: 0,
    backgroundColor: GlobalStyles.Color.white,
  },
  current: {
    margin: GlobalStyles.Margin.margin_8xs,
  },
  currentPhotoCardDrivingLic: {
    bottom: 14,
  },
  iconIonicIosArrowForward: {
    marginLeft: -6.17,
  },
  currentPhotoCardDrivingLicParent: {
    marginLeft: -52,
    left: "50%",
  },
  birthCertificate: {
    marginTop: 14.5,
    marginLeft: -31,
    left: "50%",
    top: "50%",
  },
  iconIonicIosArrowForward1: {
    marginLeft: -5.67,
  },
  birthCertificateParent: {
    right: 0,
  },
  currentSignedPassport: {
    bottom: 15,
  },
  currentSignedPassportParent: {
    left: 0,
  },
  groupParent: {
    width: 326,
    height: 390,
  },
  proofOfResidencyListA: {
    flex: 1,
    width: "100%",
    paddingLeft: GlobalStyles.Padding.padding_7xs,
    paddingTop: GlobalStyles.Padding.padding_5xl,
    paddingRight: GlobalStyles.Padding.padding_8xs,
    backgroundColor: GlobalStyles.Color.white,
  },
});

export default ProofOfResidencyListA;
