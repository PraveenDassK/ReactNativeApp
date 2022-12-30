import * as React from "react";
import { StyleSheet, View, Image, Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import GlobalStyles from "../GlobalStyles";

const BusinessChooseAddress1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.businessChooseAddress1}>
      <View style={styles.businessChooseAddress1Child} />
      <Pressable
        style={[styles.wrapper, styles.mt2]}
        onPress={() => navigation.navigate("ProofVerified")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/group-31042.png")}
        />
      </Pressable>
      <View style={[styles.statusBarBlack, styles.mt_812]}>
        <View style={styles.rectangle} />
        <View style={styles.statusBar}>
          <View style={styles.time}>
            <Text style={[styles.text, styles.textFlexBox]}>9:41</Text>
          </View>
          <Image
            style={[styles.batteryIcon, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/icon-awesomebatterythreequarters.png")}
          />
          <Image
            style={[styles.wifiIcon, styles.networkPosition1]}
            resizeMode="cover"
            source={require("../assets/icon-awesomewifi.png")}
          />
          <View style={[styles.network, styles.networkPosition1]}>
            <View style={[styles.networkChild, styles.networkChildLayout]} />
            <View style={[styles.networkItem, styles.networkPosition]} />
            <View style={[styles.networkInner, styles.networkPosition]} />
            <View style={[styles.rectangleView, styles.networkChildLayout]} />
          </View>
        </View>
      </View>
      <View style={[styles.homeIndicator, styles.mt259, styles.ml121]} />
      <View style={[styles.postcodeParent, styles.mt36, styles.ml25]}>
        <Text
          style={[styles.postcode, styles.hello3Position, styles.postcodeTypo]}
        >
          Postcode
        </Text>
        <Text
          style={[
            styles.chooseAddress,
            styles.hello3Position,
            styles.postcodeTypo,
          ]}
        >
          Choose address
        </Text>
        <View
          style={[
            styles.helloWrapper,
            styles.parentPosition,
            styles.helloWrapperBorder,
          ]}
        >
          <Text style={styles.hello}>HA13AW</Text>
        </View>
        <Pressable
          style={[styles.component208153Parent, styles.parentPosition]}
          onPress={() => navigation.navigate("DOB")}
        >
          <View style={styles.component208153}>
            <View style={[styles.rectangleParent, styles.parentPosition]}>
              <View style={styles.groupChild} />
              <View style={styles.maskGroup236} />
            </View>
          </View>
          <Text style={[styles.hello1, styles.textFlexBox]}>Continue</Text>
        </Pressable>
        <View style={styles.component21533}>
          <View
            style={[styles.component21533Child, styles.helloWrapperBorder]}
          />
          <Image
            style={[styles.iconIonicIosArrowDown, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/icon-ioniciosarrowdown12.png")}
          />
          <Text style={[styles.hello2, styles.helloTypo]}>
            <Text style={styles.lowlandsRoadHarrow}>
              33 Lowlands Road, HARROW,
            </Text>
            <Text style={styles.lowlandsRoadHarrow}>Middlesex, HA1 3AW</Text>
          </Text>
        </View>
      </View>
      <View style={[styles.helloParent, styles.mt11, styles.ml27]}>
        <Text style={[styles.hello3, styles.hello3Position]}>Your Address</Text>
        <Text style={[styles.hello4, styles.helloTypo]}>
          <Text style={styles.lowlandsRoadHarrow}>
            By law we need your home address to open your
          </Text>
          <Text style={styles.lowlandsRoadHarrow}>account</Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mt2: {
    marginTop: GlobalStyles.Margin.margin_31xs,
  },
  mt_812: {
    marginTop: GlobalStyles.Margin.margin_90xs,
  },
  mt259: {
    marginTop: 259,
  },
  ml121: {
    marginLeft: GlobalStyles.Margin.margin_54xl,
  },
  mt36: {
    marginTop: GlobalStyles.Margin.margin_6xl,
  },
  ml25: {
    marginLeft: GlobalStyles.Margin.margin_7xs,
  },
  mt11: {
    marginTop: GlobalStyles.Margin.margin_23xs,
  },
  ml27: {
    marginLeft: GlobalStyles.Margin.margin_4xs,
  },
  textFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  iconPosition: {
    marginTop: -3,
    top: "50%",
    position: "absolute",
  },
  networkPosition1: {
    width: 17,
    marginTop: -3,
    top: "50%",
    position: "absolute",
  },
  networkChildLayout: {
    width: 3,
    backgroundColor: GlobalStyles.Color.gray_1400,
    borderRadius: GlobalStyles.Border.br_7xs,
    bottom: 0,
    position: "absolute",
  },
  networkPosition: {
    left: "50%",
    width: 3,
    backgroundColor: GlobalStyles.Color.gray_1400,
    borderRadius: GlobalStyles.Border.br_7xs,
    bottom: 0,
    position: "absolute",
  },
  hello3Position: {
    color: GlobalStyles.Color.indigo,
    textAlign: "left",
    left: 0,
    position: "absolute",
  },
  postcodeTypo: {
    fontSize: GlobalStyles.FontSize.size_xl,
    color: GlobalStyles.Color.indigo,
    fontFamily: GlobalStyles.FontFamily.helvetica,
  },
  parentPosition: {
    height: 60,
    left: 0,
    right: 0,
    position: "absolute",
  },
  helloWrapperBorder: {
    borderWidth: 1,
    borderColor: "#e8e8e8",
    borderStyle: "solid",
    borderRadius: GlobalStyles.Border.br_lg,
    backgroundColor: GlobalStyles.Color.white,
  },
  helloTypo: {
    lineHeight: 20,
    fontSize: GlobalStyles.FontSize.size_base,
    fontFamily: GlobalStyles.FontFamily.helvetica,
    textAlign: "left",
    top: "50%",
    position: "absolute",
  },
  businessChooseAddress1Child: {
    backgroundColor: GlobalStyles.Color.gray_300,
    height: 812,
    width: 375,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    width: 55,
    height: 45,
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
    bottom: 0,
    right: 0,
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
    left: 0,
    top: 0,
  },
  time: {
    width: 40,
    left: 0,
    bottom: 0,
    top: 0,
    position: "absolute",
  },
  batteryIcon: {
    width: 22,
    height: 11,
    right: 0,
  },
  wifiIcon: {
    right: 37,
    height: 12,
  },
  networkChild: {
    height: 4,
    left: 0,
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
  postcode: {
    fontFamily: GlobalStyles.FontFamily.helvetica,
    top: 0,
  },
  chooseAddress: {
    marginTop: -38,
    fontFamily: GlobalStyles.FontFamily.helvetica,
    top: "50%",
  },
  hello: {
    marginTop: -8,
    color: GlobalStyles.Color.gray_1600,
    fontSize: GlobalStyles.FontSize.size_base,
    left: 14,
    fontFamily: GlobalStyles.FontFamily.helvetica,
    textAlign: "left",
    top: "50%",
    position: "absolute",
  },
  helloWrapper: {
    top: 26,
  },
  groupChild: {
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    backgroundColor: GlobalStyles.Color.gray_500,
    borderRadius: GlobalStyles.Border.br_lg,
    position: "absolute",
    height: "100%",
    width: "100%",
  },
  maskGroup236: {
    bottom: 13,
    left: 0,
    right: 0,
    top: 0,
    position: "absolute",
  },
  rectangleParent: {
    marginTop: -30,
    top: "50%",
  },
  component208153: {
    left: 0,
    bottom: 0,
    right: 0,
    top: 0,
    position: "absolute",
  },
  hello1: {
    top: "36.67%",
    left: "38.04%",
    fontSize: GlobalStyles.FontSize.size_lg,
    lineHeight: 17,
    textTransform: "uppercase",
    color: GlobalStyles.Color.black,
    fontFamily: GlobalStyles.FontFamily.helvetica,
  },
  component208153Parent: {
    bottom: 0,
  },
  component21533Child: {
    left: 0,
    bottom: 0,
    right: 0,
    top: 0,
    position: "absolute",
  },
  iconIonicIosArrowDown: {
    right: 26,
    width: 9,
    height: 5,
  },
  lowlandsRoadHarrow: {
    margin: GlobalStyles.Margin.margin_33xs,
  },
  hello2: {
    marginTop: -16,
    color: GlobalStyles.Color.blue,
    left: 14,
    lineHeight: 20,
  },
  component21533: {
    marginTop: -12,
    height: 76,
    top: "50%",
    left: 0,
    right: 0,
    position: "absolute",
  },
  postcodeParent: {
    width: 326,
    height: 318,
  },
  hello3: {
    fontSize: GlobalStyles.FontSize.size_7xl,
    lineHeight: 30,
    fontWeight: "700",
    fontFamily: GlobalStyles.FontFamily.typoGrotesk,
    top: 0,
  },
  hello4: {
    marginTop: 6.24,
    left: 1,
    color: GlobalStyles.Color.gray_800,
  },
  helloParent: {
    width: 305,
    height: 84,
  },
  businessChooseAddress1: {
    flex: 1,
    width: "100%",
    backgroundColor: GlobalStyles.Color.white,
  },
});

export default BusinessChooseAddress1;
