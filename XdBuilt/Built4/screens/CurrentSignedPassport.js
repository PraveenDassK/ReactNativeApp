import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import GlobalStyles from "../GlobalStyles";

const CurrentSignedPassport = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.currentSignedPassport}>
      <View style={styles.currentSignedPassportChild} />
      <Text
        style={[
          styles.yourResidence,
          styles.mt_609,
          styles.ml25,
          styles.hello1Color,
        ]}
      >
        Your Residence
      </Text>
      <View style={[styles.component1975, styles.mt9, styles.ml25]}>
        <View
          style={[
            styles.component1975Child,
            styles.component1975ChildBorder,
            styles.childPosition,
          ]}
        />
        <Text style={styles.unitedKingdom}>United Kingdom</Text>
        <Image
          style={[styles.maskGroup288, styles.maskGroup288Position]}
          resizeMode="cover"
          source={require("../assets/mask-group-288.png")}
        />
        <Image
          style={[styles.iconAwesomeArrowRight, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/icon-awesomearrowright.png")}
        />
      </View>
      <Text style={[styles.hello, styles.mt16, styles.ml_371]}>
        Powered by Yoti
      </Text>
      <View style={[styles.helloParent, styles.mt11, styles.ml27]}>
        <Text style={[styles.hello1, styles.hello1Color]}>
          Proof of Residency
        </Text>
        <Text style={styles.hello2}>
          Please provide us a proof of your residence.
        </Text>
      </View>
      <Pressable
        style={[styles.positionAll4CornersOfTheParent, styles.mt36]}
        onPress={() => navigation.navigate("ProofOfResidencyListA")}
      >
        <Text
          style={[
            styles.positionAll4CornersOfThe,
            styles.positionAll4CornersOfTheTypo,
          ]}
        >
          Position all 4 corners of the page clearly in the frame
        </Text>
        <Image
          style={[
            styles.iconIonicIosArrowForward,
            styles.networkItemLayout,
            styles.iconLayout,
          ]}
          resizeMode="cover"
          source={require("../assets/icon-ioniciosarrowforward22.png")}
        />
      </Pressable>
      <View
        style={[
          styles.currentSignedPassportInner,
          styles.mt8,
          styles.ml25,
          styles.component1975ChildBorder,
        ]}
      >
        <View style={[styles.rectangleParent, styles.maskGroup288Position]}>
          <View style={[styles.groupChild, styles.childPosition]} />
          <Image
            style={styles.maskGroup265}
            resizeMode="cover"
            source={require("../assets/mask-group-265.png")}
          />
          <Image
            style={[styles.repeatGrid11, styles.repeatPosition]}
            resizeMode="cover"
            source={require("../assets/repeat-grid-115.png")}
          />
          <Image
            style={[styles.repeatGrid12, styles.repeatPosition]}
            resizeMode="cover"
            source={require("../assets/repeat-grid-115.png")}
          />
        </View>
      </View>
      <Text
        style={[
          styles.positionAll4CornersOfTheTypo,
          styles.mt119,
          styles.ml113,
        ]}
      >
        <Text style={styles.takeAPicture}>{`Take a picture of your `}</Text>
        <Text style={styles.takeAPicture}>Current signed passport</Text>
      </Text>
      <Pressable
        style={[styles.wrapper, styles.mt20, styles.ml164]}
        onPress={() => navigation.navigate("ProofOfResidencyListA1")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/group-30754.png")}
        />
      </Pressable>
      <View style={[styles.homeIndicator, styles.mt40, styles.ml121]} />
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
      <View style={[styles.statusBarBlack, styles.mt_812]}>
        <View style={[styles.rectangle, styles.childPosition]} />
        <View style={styles.statusBar}>
          <View style={[styles.time, styles.childPosition]}>
            <Text style={styles.text}>9:41</Text>
          </View>
          <Image
            style={[styles.batteryIcon, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/icon-awesomebatterythreequarters.png")}
          />
          <Image
            style={[styles.wifiIcon, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/icon-awesomewifi.png")}
          />
          <View style={[styles.network, styles.iconPosition]}>
            <View style={[styles.networkChild, styles.networkLayout]} />
            <View
              style={[
                styles.networkItem,
                styles.networkLayout,
                styles.networkItemLayout,
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
  mt_609: {
    marginTop: GlobalStyles.Margin.margin_83xs,
  },
  ml25: {
    marginLeft: GlobalStyles.Margin.margin_7xs,
  },
  mt9: {
    marginTop: GlobalStyles.Margin.margin_25xs,
  },
  mt16: {
    marginTop: GlobalStyles.Margin.margin_17xs,
  },
  ml_371: {
    marginLeft: -371,
  },
  mt11: {
    marginTop: GlobalStyles.Margin.margin_23xs,
  },
  ml27: {
    marginLeft: GlobalStyles.Margin.margin_4xs,
  },
  mt36: {
    marginTop: GlobalStyles.Margin.margin_6xl,
  },
  mt8: {
    marginTop: GlobalStyles.Margin.margin_26xs,
  },
  mt119: {
    marginTop: GlobalStyles.Margin.margin_52xl,
  },
  ml113: {
    marginLeft: GlobalStyles.Margin.margin_51xl,
  },
  mt20: {
    marginTop: GlobalStyles.Margin.margin_12xs,
  },
  ml164: {
    marginLeft: 164,
  },
  mt40: {
    marginTop: GlobalStyles.Margin.margin_10xl,
  },
  ml121: {
    marginLeft: GlobalStyles.Margin.margin_54xl,
  },
  mt2: {
    marginTop: GlobalStyles.Margin.margin_31xs,
  },
  mt_812: {
    marginTop: GlobalStyles.Margin.margin_90xs,
  },
  hello1Color: {
    color: GlobalStyles.Color.indigo,
    textAlign: "left",
  },
  component1975ChildBorder: {
    borderWidth: 1,
    borderStyle: "solid",
  },
  childPosition: {
    bottom: 0,
    left: 0,
    position: "absolute",
  },
  maskGroup288Position: {
    bottom: 19,
    top: 19,
    position: "absolute",
  },
  iconLayout: {
    width: 11,
    position: "absolute",
  },
  positionAll4CornersOfTheTypo: {
    textAlign: "center",
    fontSize: GlobalStyles.FontSize.size_base,
    color: GlobalStyles.Color.white,
    fontFamily: GlobalStyles.FontFamily.helvetica,
  },
  networkItemLayout: {
    height: 6,
    left: "50%",
  },
  repeatPosition: {
    overflow: "hidden",
    maxWidth: "100%",
    right: 6,
    left: 11,
    height: 6,
    position: "absolute",
  },
  iconPosition: {
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
  currentSignedPassportChild: {
    height: 812,
    width: 375,
    backgroundColor: GlobalStyles.Color.gray_300,
  },
  yourResidence: {
    textAlign: "left",
    fontFamily: GlobalStyles.FontFamily.helvetica,
    fontSize: GlobalStyles.FontSize.size_xl,
    color: GlobalStyles.Color.indigo,
  },
  component1975Child: {
    borderRadius: GlobalStyles.Border.br_lg,
    borderColor: "#e8e8e8",
    left: 0,
    right: 0,
    top: 0,
    backgroundColor: GlobalStyles.Color.white,
  },
  unitedKingdom: {
    marginTop: -8,
    marginLeft: -116.84,
    color: GlobalStyles.Color.gray_800,
    left: "50%",
    top: "50%",
    position: "absolute",
    textAlign: "left",
    fontFamily: GlobalStyles.FontFamily.helvetica,
    fontSize: GlobalStyles.FontSize.size_xl,
  },
  maskGroup288: {
    left: 6,
    maxHeight: "100%",
    width: 22,
  },
  iconAwesomeArrowRight: {
    marginTop: -6,
    marginLeft: 136.87,
    height: 11,
    left: "50%",
    top: "50%",
  },
  component1975: {
    height: 60,
    width: 326,
  },
  hello: {
    fontSize: GlobalStyles.FontSize.size_3xs,
    color: GlobalStyles.Color.white,
    textAlign: "left",
    fontFamily: GlobalStyles.FontFamily.helvetica,
  },
  hello1: {
    fontSize: GlobalStyles.FontSize.size_7xl,
    lineHeight: 30,
    fontWeight: "700",
    fontFamily: GlobalStyles.FontFamily.typoGrotesk,
    left: 0,
    top: 0,
    position: "absolute",
    textAlign: "left",
  },
  hello2: {
    marginTop: 16.24,
    left: 1,
    fontSize: GlobalStyles.FontSize.size_base,
    color: GlobalStyles.Color.gray_800,
    top: "50%",
    position: "absolute",
    textAlign: "left",
    fontFamily: GlobalStyles.FontFamily.helvetica,
  },
  helloParent: {
    width: 275,
    height: 64,
  },
  positionAll4CornersOfThe: {
    top: 38,
    left: 19,
    position: "absolute",
  },
  iconIonicIosArrowForward: {
    marginLeft: -5.5,
    top: 11,
  },
  positionAll4CornersOfTheParent: {
    borderTopLeftRadius: GlobalStyles.Border.br_4xl,
    borderTopRightRadius: GlobalStyles.Border.br_4xl,
    backgroundColor: "rgba(0, 0, 0, 0.72)",
    height: 610,
    width: 375,
  },
  groupChild: {
    borderBottomRightRadius: GlobalStyles.Border.br_4xl,
    borderBottomLeftRadius: GlobalStyles.Border.br_4xl,
    height: 65,
    left: 0,
    right: 0,
    backgroundColor: GlobalStyles.Color.white,
  },
  maskGroup265: {
    top: 12,
    width: 64,
    height: 82,
    left: 11,
    position: "absolute",
  },
  repeatGrid11: {
    marginTop: 47.48,
    top: "50%",
  },
  repeatGrid12: {
    bottom: 23,
  },
  rectangleParent: {
    right: 25,
    left: 25,
    borderRadius: GlobalStyles.Border.br_4xl,
    backgroundColor: GlobalStyles.Color.beige_200,
  },
  currentSignedPassportInner: {
    borderRadius: GlobalStyles.Border.br_xl,
    backgroundColor: GlobalStyles.Color.gray_1200,
    borderColor: "#ff4b4b",
    height: 216,
    width: 326,
  },
  takeAPicture: {
    margin: GlobalStyles.Margin.margin_33xs,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    width: 48,
    height: 48,
  },
  homeIndicator: {
    borderRadius: GlobalStyles.Border.br_8xl,
    backgroundColor: GlobalStyles.Color.gray_800,
    width: 134,
    height: 5,
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
    top: 0,
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
    top: 0,
    position: "absolute",
    textAlign: "left",
  },
  time: {
    width: 40,
    left: 0,
    top: 0,
  },
  batteryIcon: {
    height: 11,
    width: 22,
    right: 0,
  },
  wifiIcon: {
    right: 37,
    height: 12,
    width: 17,
  },
  networkChild: {
    height: 4,
    left: 0,
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
  },
  network: {
    right: 68,
    width: 17,
    height: 11,
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
  currentSignedPassport: {
    flex: 1,
    width: "100%",
    backgroundColor: GlobalStyles.Color.white,
  },
});

export default CurrentSignedPassport;
