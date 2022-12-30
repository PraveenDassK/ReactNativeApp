import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import GlobalStyles from "../GlobalStyles";

const CountryOfResidence = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.countryOfResidence}>
      <View style={styles.countryOfResidenceChild} />
      <View style={[styles.rectangleParent, styles.mt28, styles.ml25]}>
        <View
          style={[
            styles.groupChild,
            styles.rectangleShadowBox,
            styles.groupPosition1,
          ]}
        />
        <Text style={[styles.hello, styles.helloTypo1]}>
          Terms and Conditions
        </Text>
      </View>
      <Text
        style={[styles.hello1, styles.mt_180, styles.ml113, styles.helloTypo]}
      >
        Content TBD
      </Text>
      <View style={[styles.helloParent, styles.mt10, styles.ml27]}>
        <Text style={[styles.hello2, styles.groupPosition, styles.helloTypo]}>
          Country of Incorporated In
        </Text>
        <Text style={[styles.hello3, styles.helloTypo1]}>
          <Text style={styles.theTermsAnd}>
            The terms and services which apply to you, will
          </Text>
          <Text style={styles.theTermsAnd}>
            depend on your country of residence.
          </Text>
        </Text>
      </View>
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
            <Text style={[styles.text, styles.groupPosition]}>9:41</Text>
          </View>
          <Image
            style={styles.batteryIcon}
            resizeMode="cover"
            source={require("../assets/icon-awesomebatterythreequarters.png")}
          />
          <Image
            style={[styles.wifiIcon, styles.networkPosition1]}
            resizeMode="cover"
            source={require("../assets/icon-awesomewifi.png")}
          />
          <View style={[styles.network, styles.networkPosition1]}>
            <View
              style={[
                styles.networkChild,
                styles.networkLayout,
                styles.groupPosition,
              ]}
            />
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
      <View style={[styles.homeIndicator, styles.mt36, styles.ml121]} />
      <Text
        style={[
          styles.selectYourCountry,
          styles.mt44,
          styles.ml25,
          styles.unitedKingdomTypo,
        ]}
      >
        Select your country
      </Text>
      <View style={[styles.component20898Parent, styles.mt179, styles.ml25]}>
        <Pressable
          style={[styles.component20898, styles.timePosition]}
          onPress={() => navigation.navigate("Address1")}
        >
          <View style={[styles.rectangleGroup, styles.groupPosition]}>
            <View
              style={[
                styles.groupItem,
                styles.groupItemLayout,
                styles.groupPosition1,
              ]}
            />
            <View style={[styles.maskGroup236, styles.groupPosition]} />
          </View>
        </Pressable>
        <Text style={styles.hello4}>Accept and Continue</Text>
      </View>
      <Pressable
        style={[styles.wrapper, styles.mt2]}
        onPress={() => navigation.navigate("PersonalOrBusiness")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/group-31042.png")}
        />
      </Pressable>
      <View style={[styles.component20898Parent, styles.mt8, styles.ml25]}>
        <View
          style={[
            styles.component2157Child,
            styles.groupItemLayout,
            styles.timePosition,
          ]}
        />
        <Image
          style={styles.iconIonicIosArrowDown}
          resizeMode="cover"
          source={require("../assets/icon-ioniciosarrowdown.png")}
        />
        <Text
          style={[
            styles.unitedKingdom,
            styles.unitedKingdomTypo,
            styles.networkPosition,
          ]}
        >
          United Kingdom
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mt28: {
    marginTop: GlobalStyles.Margin.margin_3xs,
  },
  ml25: {
    marginLeft: GlobalStyles.Margin.margin_7xs,
  },
  mt_180: {
    marginTop: -180,
  },
  ml113: {
    marginLeft: GlobalStyles.Margin.margin_51xl,
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
  mt36: {
    marginTop: GlobalStyles.Margin.margin_6xl,
  },
  ml121: {
    marginLeft: GlobalStyles.Margin.margin_54xl,
  },
  mt44: {
    marginTop: GlobalStyles.Margin.margin_15xl,
  },
  mt179: {
    marginTop: 179,
  },
  mt2: {
    marginTop: GlobalStyles.Margin.margin_31xs,
  },
  mt8: {
    marginTop: GlobalStyles.Margin.margin_26xs,
  },
  rectangleShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    position: "absolute",
    backgroundColor: GlobalStyles.Color.white,
  },
  groupPosition1: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    width: "100%",
  },
  helloTypo1: {
    color: GlobalStyles.Color.gray_800,
    fontSize: GlobalStyles.FontSize.size_base,
    textAlign: "left",
    fontFamily: GlobalStyles.FontFamily.helvetica,
    top: "50%",
    position: "absolute",
  },
  helloTypo: {
    fontFamily: GlobalStyles.FontFamily.typoGrotesk,
    fontWeight: "700",
    lineHeight: 30,
    textAlign: "left",
  },
  groupPosition: {
    left: 0,
    position: "absolute",
  },
  timePosition: {
    bottom: 0,
    left: 0,
    top: 0,
  },
  networkPosition1: {
    width: 17,
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
  unitedKingdomTypo: {
    fontSize: GlobalStyles.FontSize.size_xl,
    textAlign: "left",
    fontFamily: GlobalStyles.FontFamily.helvetica,
  },
  groupItemLayout: {
    borderRadius: GlobalStyles.Border.br_lg,
    position: "absolute",
  },
  countryOfResidenceChild: {
    backgroundColor: GlobalStyles.Color.gray_300,
    height: 812,
    width: 375,
  },
  groupChild: {
    borderRadius: GlobalStyles.Border.br_6xl,
    shadowColor: "rgba(1, 1, 253, 0.1)",
    shadowRadius: 20,
    elevation: 20,
  },
  hello: {
    marginTop: -143.52,
    left: 95,
    textAlign: "left",
  },
  rectangleParent: {
    height: 328,
    width: 326,
  },
  hello1: {
    fontSize: GlobalStyles.FontSize.size_7xl,
    color: "#ff0000",
  },
  hello2: {
    fontSize: GlobalStyles.FontSize.size_8xl,
    color: GlobalStyles.Color.indigo,
    top: 0,
  },
  theTermsAnd: {
    margin: GlobalStyles.Margin.margin_33xs,
  },
  hello3: {
    marginTop: 6.74,
    left: 1,
    lineHeight: 20,
    textAlign: "left",
  },
  helloParent: {
    width: 329,
    height: 85,
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
    top: 0,
    textAlign: "left",
  },
  time: {
    width: 40,
    position: "absolute",
  },
  batteryIcon: {
    width: 22,
    height: 11,
    marginTop: -3,
    right: 0,
    top: "50%",
    position: "absolute",
  },
  wifiIcon: {
    right: 37,
    height: 12,
  },
  networkChild: {
    height: 4,
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
  homeIndicator: {
    borderRadius: GlobalStyles.Border.br_8xl,
    backgroundColor: GlobalStyles.Color.black,
    width: 134,
    height: 5,
  },
  selectYourCountry: {
    color: GlobalStyles.Color.indigo,
  },
  groupItem: {
    backgroundColor: GlobalStyles.Color.gray_500,
  },
  maskGroup236: {
    bottom: 13,
    right: 0,
    top: 0,
  },
  rectangleGroup: {
    marginTop: -30,
    height: 60,
    right: 0,
    top: "50%",
  },
  component20898: {
    right: 0,
    position: "absolute",
  },
  hello4: {
    top: "36.67%",
    left: "22.7%",
    fontSize: GlobalStyles.FontSize.size_lg,
    lineHeight: 17,
    textTransform: "uppercase",
    color: GlobalStyles.Color.black,
    textAlign: "left",
    fontFamily: GlobalStyles.FontFamily.helvetica,
    position: "absolute",
  },
  component20898Parent: {
    height: 60,
    width: 326,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    width: 55,
    height: 45,
  },
  component2157Child: {
    borderStyle: "solid",
    borderColor: "#e8e8e8",
    borderWidth: 1,
    right: 0,
    backgroundColor: GlobalStyles.Color.white,
    borderRadius: GlobalStyles.Border.br_lg,
    bottom: 0,
  },
  iconIonicIosArrowDown: {
    marginTop: -2.64,
    right: 26,
    width: 9,
    height: 5,
    top: "50%",
    position: "absolute",
  },
  unitedKingdom: {
    marginTop: -8,
    marginLeft: -146.84,
    color: GlobalStyles.Color.blue,
    top: "50%",
  },
  countryOfResidence: {
    flex: 1,
    width: "100%",
    backgroundColor: GlobalStyles.Color.white,
  },
});

export default CountryOfResidence;
