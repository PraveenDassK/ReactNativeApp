import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import GlobalStyles from "../GlobalStyles";

const CurrentPhotoCardDrivingLic = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.currentPhotoCardDrivingLic}>
      <View style={styles.currentPhotoCardDrivingLicChild} />
      <Text
        style={[
          styles.yourResidence,
          styles.mt_609,
          styles.mr213,
          styles.hello1Color,
        ]}
      >
        Your Residence
      </Text>
      <View style={[styles.component1976, styles.mt9, styles.ml1]}>
        <View
          style={[
            styles.component1976Child,
            styles.component1976ChildBorder,
            styles.childPosition,
          ]}
        />
        <Text style={[styles.unitedKingdom, styles.hello2Typo]}>
          United Kingdom
        </Text>
        <Image
          style={styles.maskGroup288}
          resizeMode="cover"
          source={require("../assets/mask-group-288.png")}
        />
        <Image
          style={styles.iconAwesomeArrowRight}
          resizeMode="cover"
          source={require("../assets/icon-awesomearrowright.png")}
        />
      </View>
      <View
        style={[
          styles.positionAll4CornersOfTheParent,
          styles.mt36,
          styles.rectangleShadowBox,
        ]}
      >
        <Text style={[styles.positionAll4CornersOfThe, styles.helloColor]}>
          Position all 4 corners of the page clearly in the frame
        </Text>
        <Pressable
          style={styles.iconIonicIosArrowForwardWrapper}
          onPress={() => navigation.navigate("ProofOfResidencyListA")}
        >
          <Image
            style={[styles.iconIonicIosArrowForward, styles.hello2Position]}
            resizeMode="cover"
            source={require("../assets/icon-ioniciosarrowforward6.png")}
          />
        </Pressable>
      </View>
      <Text
        style={[
          styles.takeAPictureOfYourCurrent,
          styles.mt105,
          styles.ml1,
          styles.helloColor,
        ]}
      >
        <Text style={styles.takeAPicture}>Take a picture of your</Text>
        <Text style={styles.takeAPicture}>
          Current photo-card driving license 
        </Text>
      </Text>
      <Image
        style={[styles.currentPhotoCardDrivingLicItem, styles.mt34, styles.ml1]}
        resizeMode="cover"
        source={require("../assets/ellipse-3252.png")}
      />
      <Pressable
        style={[styles.wrapper, styles.mt_44, styles.ml1]}
        onPress={() => navigation.navigate("ProofOfResidencyListA1")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/ellipse-3253.png")}
        />
      </Pressable>
      <View
        style={[
          styles.currentPhotoCardDrivingLicInner,
          styles.mt7,
          styles.ml7,
          styles.component1976ChildBorder,
        ]}
      />
      <View style={[styles.rectangleParent, styles.mt_197, styles.ml7]}>
        <View style={[styles.groupChild, styles.childPosition]} />
        <Image
          style={styles.maskGroup265}
          resizeMode="cover"
          source={require("../assets/mask-group-265.png")}
        />
        <Image
          style={[styles.repeatGrid11, styles.repeatPosition]}
          resizeMode="cover"
          source={require("../assets/repeat-grid-11.png")}
        />
        <Image
          style={[styles.repeatGrid12, styles.repeatPosition]}
          resizeMode="cover"
          source={require("../assets/repeat-grid-11.png")}
        />
      </View>
      <Text style={[styles.hello, styles.mt36, styles.ml1, styles.helloColor]}>
        Powered by Yoti
      </Text>
      <View
        style={[
          styles.homeIndicator,
          styles.mt44,
          styles.ml1,
          styles.homeLayout,
        ]}
      />
      <View
        style={[
          styles.homeIndicator1,
          styles.mt_5,
          styles.ml1,
          styles.homeLayout,
        ]}
      />
      <View style={[styles.helloParent, styles.mt11, styles.mr46]}>
        <Text style={[styles.hello1, styles.hello1Color]}>
          Proof of Residency
        </Text>
        <Text style={[styles.hello2, styles.hello2Position, styles.hello2Typo]}>
          Please provide us a proof of your residence.
        </Text>
      </View>
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
        <View
          style={[
            styles.rectangle,
            styles.rectangleShadowBox,
            styles.childPosition,
          ]}
        />
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
  mt_609: {
    marginTop: GlobalStyles.Margin.margin_83xs,
  },
  mr213: {
    marginRight: GlobalStyles.Margin.margin_78xl,
  },
  mt9: {
    marginTop: GlobalStyles.Margin.margin_25xs,
  },
  ml1: {
    marginLeft: GlobalStyles.Margin.margin_32xs,
  },
  mt36: {
    marginTop: GlobalStyles.Margin.margin_6xl,
  },
  mt105: {
    marginTop: GlobalStyles.Margin.margin_47xl,
  },
  mt34: {
    marginTop: GlobalStyles.Margin.margin_3xl,
  },
  mt_44: {
    marginTop: GlobalStyles.Margin.margin_59xs,
  },
  mt7: {
    marginTop: GlobalStyles.Margin.margin_27xs,
  },
  ml7: {
    marginLeft: GlobalStyles.Margin.margin_27xs,
  },
  mt_197: {
    marginTop: GlobalStyles.Margin.margin_78xs,
  },
  mt44: {
    marginTop: GlobalStyles.Margin.margin_15xl,
  },
  mt_5: {
    marginTop: GlobalStyles.Margin.margin_37xs,
  },
  mt11: {
    marginTop: GlobalStyles.Margin.margin_23xs,
  },
  mr46: {
    marginRight: GlobalStyles.Margin.margin_17xl,
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
  component1976ChildBorder: {
    borderWidth: 1,
    borderStyle: "solid",
  },
  childPosition: {
    bottom: 0,
    left: 0,
    position: "absolute",
  },
  hello2Typo: {
    color: GlobalStyles.Color.gray_800,
    textAlign: "left",
    fontFamily: GlobalStyles.FontFamily.helvetica,
  },
  rectangleShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: -3,
    },
  },
  helloColor: {
    color: GlobalStyles.Color.white,
    fontFamily: GlobalStyles.FontFamily.helvetica,
  },
  hello2Position: {
    left: 1,
    top: "50%",
    position: "absolute",
  },
  repeatPosition: {
    overflow: "hidden",
    maxWidth: "100%",
    right: 6,
    left: 11,
    height: 6,
    position: "absolute",
  },
  homeLayout: {
    height: 5,
    width: 134,
    borderRadius: GlobalStyles.Border.br_8xl,
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
  currentPhotoCardDrivingLicChild: {
    height: 812,
    width: 375,
    backgroundColor: GlobalStyles.Color.gray_300,
  },
  yourResidence: {
    textAlign: "left",
    fontFamily: GlobalStyles.FontFamily.helvetica,
    color: GlobalStyles.Color.indigo,
    fontSize: GlobalStyles.FontSize.size_xl,
  },
  component1976Child: {
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
    left: "50%",
    top: "50%",
    position: "absolute",
    fontSize: GlobalStyles.FontSize.size_xl,
    color: GlobalStyles.Color.gray_800,
  },
  maskGroup288: {
    top: 19,
    bottom: 19,
    left: 6,
    maxHeight: "100%",
    width: 22,
    position: "absolute",
  },
  iconAwesomeArrowRight: {
    marginTop: -6,
    marginLeft: 136.87,
    height: 11,
    width: 11,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  component1976: {
    height: 60,
    width: 326,
  },
  positionAll4CornersOfThe: {
    marginTop: -242.78,
    marginLeft: -162.5,
    fontSize: GlobalStyles.FontSize.size_base,
    left: "50%",
    top: "50%",
    position: "absolute",
    textAlign: "left",
  },
  iconIonicIosArrowForward: {
    marginTop: -3.24,
    height: 6,
    width: 11,
  },
  iconIonicIosArrowForwardWrapper: {
    top: 11,
    right: 20,
    left: 18,
    height: 27,
    position: "absolute",
  },
  positionAll4CornersOfTheParent: {
    borderTopLeftRadius: GlobalStyles.Border.br_4xl,
    borderTopRightRadius: GlobalStyles.Border.br_4xl,
    backgroundColor: GlobalStyles.Color.gray_1800,
    shadowColor: "rgba(1, 1, 253, 0.05)",
    shadowRadius: 20,
    elevation: 20,
    height: 610,
    width: 375,
  },
  takeAPicture: {
    margin: GlobalStyles.Margin.margin_33xs,
  },
  takeAPictureOfYourCurrent: {
    textAlign: "center",
    fontSize: GlobalStyles.FontSize.size_base,
  },
  currentPhotoCardDrivingLicItem: {
    width: 48,
    height: 48,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    height: 40,
    width: 40,
  },
  currentPhotoCardDrivingLicInner: {
    borderRadius: GlobalStyles.Border.br_xl,
    backgroundColor: GlobalStyles.Color.gray_1200,
    borderColor: "#ff4b4b",
    height: 216,
    width: 326,
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
    borderRadius: GlobalStyles.Border.br_4xl,
    backgroundColor: GlobalStyles.Color.beige_200,
    width: 276,
    height: 178,
  },
  hello: {
    fontSize: GlobalStyles.FontSize.size_3xs,
    textAlign: "left",
  },
  homeIndicator: {
    backgroundColor: GlobalStyles.Color.black,
  },
  homeIndicator1: {
    backgroundColor: GlobalStyles.Color.gray_800,
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
    fontSize: GlobalStyles.FontSize.size_base,
  },
  helloParent: {
    width: 275,
    height: 64,
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
    alignSelf: "flex-start",
    backgroundColor: GlobalStyles.Color.gray_300,
  },
  rectangle: {
    shadowColor: "rgba(0, 0, 0, 0.05)",
    shadowRadius: 6,
    elevation: 6,
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
  currentPhotoCardDrivingLic: {
    flex: 1,
    alignItems: "center",
    width: "100%",
    backgroundColor: GlobalStyles.Color.white,
  },
});

export default CurrentPhotoCardDrivingLic;
