import * as React from "react";
import { StyleSheet, View, Image, Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import GlobalStyles from "../GlobalStyles";

const ProofOfResidencyListA = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.proofOfResidencyListA}>
      <View style={styles.proofOfResidencyListAChild} />
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
        <Text style={[styles.hello1, styles.helloTypo]}>
          Please provide us a proof of your residence.
        </Text>
      </View>
      <View style={[styles.homeIndicator, styles.mt300, styles.ml121]} />
      <Text style={[styles.yourCountry, styles.mt38, styles.ml25]}>
        Your Country
      </Text>
      <Text style={[styles.helloTypo, styles.mt45, styles.ml25]}>
        Select one document from below categories
      </Text>
      <View style={[styles.unitedKingdomParent, styles.mt9, styles.ml25]}>
        <Text style={styles.unitedKingdom}>United Kingdom</Text>
        <Image
          style={styles.maskGroup288}
          resizeMode="cover"
          source={require("../assets/mask-group-288.png")}
        />
      </View>
      <Pressable
        style={[
          styles.currentPhotoCardDrivingLicParent,
          styles.mt24,
          styles.ml136,
          styles.rectangleShadowBox,
        ]}
        onPress={() => navigation.navigate("CurrentPhotoCardDrivingLicense")}
      >
        <Text
          style={[
            styles.currentPhotoCardDrivingLic,
            styles.birthCertificateTypo,
          ]}
        >
          <Text style={styles.current}>Current</Text>
          <Text style={styles.current}>photo-card</Text>
          <Text style={styles.current}>driving license </Text>
        </Text>
        <Image
          style={[
            styles.iconIonicIosArrowForward,
            styles.iconLayout,
            styles.iconPosition,
          ]}
          resizeMode="cover"
          source={require("../assets/icon-ioniciosarrowforward19.png")}
        />
      </Pressable>
      <Pressable
        style={[
          styles.currentPhotoCardDrivingLicParent,
          styles.mt_125,
          styles.ml247,
          styles.rectangleShadowBox,
        ]}
        onPress={() => navigation.navigate("BirthCertificate")}
      >
        <Text style={[styles.birthCertificate, styles.birthCertificateTypo]}>
          <Text style={styles.current}>Birth</Text>
          <Text style={styles.current}>Certificate </Text>
        </Text>
        <Image
          style={[
            styles.iconIonicIosArrowForward1,
            styles.iconLayout,
            styles.iconPosition,
          ]}
          resizeMode="cover"
          source={require("../assets/icon-ioniciosarrowforward20.png")}
        />
      </Pressable>
      <Pressable
        style={[
          styles.currentPhotoCardDrivingLicParent,
          styles.mt_125,
          styles.ml25,
          styles.rectangleShadowBox,
        ]}
        onPress={() => navigation.navigate("CurrentSignedPassport")}
      >
        <Text
          style={[
            styles.currentPhotoCardDrivingLic,
            styles.birthCertificateTypo,
          ]}
        >
          <Text style={styles.current}>Current signed</Text>
          <Text style={styles.current}>passport </Text>
        </Text>
        <Image
          style={[
            styles.iconIonicIosArrowForward1,
            styles.iconLayout,
            styles.iconPosition,
          ]}
          resizeMode="cover"
          source={require("../assets/icon-ioniciosarrowforward20.png")}
        />
      </Pressable>
      <View style={[styles.statusBarBlack, styles.mt_812]}>
        <View
          style={[
            styles.rectangle,
            styles.timePosition,
            styles.rectangleShadowBox,
          ]}
        />
        <View style={styles.statusBar}>
          <View style={[styles.time, styles.timePosition]}>
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
            <View
              style={[
                styles.networkItem,
                styles.networkLayout,
                styles.iconLayout,
              ]}
            />
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
  mt10: {
    marginTop: GlobalStyles.Margin.margin_24xs,
  },
  ml27: {
    marginLeft: GlobalStyles.Margin.margin_4xs,
  },
  mt300: {
    marginTop: GlobalStyles.Margin.margin_92xl,
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
  mt45: {
    marginTop: GlobalStyles.Margin.margin_16xl,
  },
  mt9: {
    marginTop: GlobalStyles.Margin.margin_25xs,
  },
  mt24: {
    marginTop: GlobalStyles.Margin.margin_8xs,
  },
  ml136: {
    marginLeft: GlobalStyles.Margin.margin_57xl,
  },
  mt_125: {
    marginTop: GlobalStyles.Margin.margin_74xs,
  },
  ml247: {
    marginLeft: GlobalStyles.Margin.margin_85xl,
  },
  mt_812: {
    marginTop: GlobalStyles.Margin.margin_90xs,
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
  rectangleShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    backgroundColor: GlobalStyles.Color.white,
  },
  birthCertificateTypo: {
    textAlign: "center",
    fontSize: GlobalStyles.FontSize.size_sm,
    color: GlobalStyles.Color.blue,
    fontFamily: GlobalStyles.FontFamily.helvetica,
    position: "absolute",
  },
  iconLayout: {
    height: 6,
    left: "50%",
  },
  iconPosition: {
    width: 11,
    marginTop: -41.98,
    height: 6,
    top: "50%",
    position: "absolute",
  },
  timePosition: {
    bottom: 0,
    left: 0,
    top: 0,
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
  proofOfResidencyListAChild: {
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
    top: "50%",
    position: "absolute",
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
    color: GlobalStyles.Color.blue,
    fontFamily: GlobalStyles.FontFamily.helvetica,
    top: "50%",
    textAlign: "left",
    position: "absolute",
  },
  maskGroup288: {
    marginTop: -10.76,
    left: 6,
    height: 22,
    width: 22,
    top: "50%",
    position: "absolute",
  },
  unitedKingdomParent: {
    borderRadius: GlobalStyles.Border.br_2xs,
    width: 326,
    height: 60,
    backgroundColor: GlobalStyles.Color.white,
  },
  current: {
    margin: GlobalStyles.Margin.margin_33xs,
  },
  currentPhotoCardDrivingLic: {
    bottom: 16,
    left: 9,
  },
  iconIonicIosArrowForward: {
    marginLeft: -6.17,
  },
  currentPhotoCardDrivingLicParent: {
    borderRadius: GlobalStyles.Border.br_4xl,
    shadowColor: "rgba(1, 1, 253, 0.1)",
    shadowRadius: 20,
    elevation: 20,
    width: 104,
    height: 125,
  },
  birthCertificate: {
    marginTop: 12.5,
    marginLeft: -31,
    top: "50%",
    left: "50%",
  },
  iconIonicIosArrowForward1: {
    marginLeft: -5.67,
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
  },
  time: {
    width: 40,
  },
  batteryIcon: {
    right: 0,
    width: 22,
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
    backgroundColor: GlobalStyles.Color.gray_1400,
    borderRadius: GlobalStyles.Border.br_7xs,
  },
  networkItem: {
    marginLeft: -3.5,
  },
  networkInner: {
    marginLeft: 0.5,
    height: 9,
    left: "50%",
  },
  rectangleView: {
    right: 0,
    top: 0,
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
    top: "50%",
    position: "absolute",
  },
  statusBarBlack: {
    height: 44,
    width: 375,
  },
  proofOfResidencyListA: {
    flex: 1,
    width: "100%",
    backgroundColor: GlobalStyles.Color.white,
  },
});

export default ProofOfResidencyListA;
