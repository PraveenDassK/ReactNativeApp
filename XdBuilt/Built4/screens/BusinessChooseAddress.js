import * as React from "react";
import { StyleSheet, View, Image, Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import GlobalStyles from "../GlobalStyles";

const BusinessChooseAddress = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.businessChooseAddress}>
      <View style={styles.businessChooseAddressChild} />
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
        <View style={[styles.rectangle, styles.rectanglePosition]} />
        <View style={styles.statusBar}>
          <View style={styles.time}>
            <Text style={[styles.text, styles.textFlexBox]}>9:41</Text>
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
            <View style={[styles.networkChild, styles.networkChildLayout]} />
            <View style={[styles.networkItem, styles.networkPosition]} />
            <View style={[styles.networkInner, styles.networkPosition]} />
            <View
              style={[styles.networkChildLayout, styles.rectanglePosition]}
            />
          </View>
        </View>
      </View>
      <View style={[styles.homeIndicator, styles.mt276, styles.mr120]} />
      <View style={[styles.postcodeParent, styles.mt_545, styles.mr24]}>
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
          style={[styles.component208152Parent, styles.parentPosition]}
          onPress={() => navigation.navigate("BusinessChooseAddress1")}
        >
          <View style={[styles.component208152, styles.rectanglePosition]}>
            <View style={[styles.rectangleParent, styles.parentPosition]}>
              <View style={styles.groupChild} />
              <View style={[styles.maskGroup236, styles.rectanglePosition]} />
            </View>
          </View>
          <Text style={[styles.hello1, styles.textFlexBox]}>Continue</Text>
        </Pressable>
        <View style={[styles.component21532, styles.parentPosition]}>
          <View
            style={[
              styles.component21532Child,
              styles.helloWrapperBorder,
              styles.rectanglePosition,
            ]}
          />
          <Image
            style={styles.iconIonicIosArrowDown}
            resizeMode="cover"
            source={require("../assets/icon-ioniciosarrowdown.png")}
          />
          <Text style={[styles.hello2, styles.helloTypo]}>
            Select your company address
          </Text>
        </View>
      </View>
      <View style={[styles.helloParent, styles.mt11, styles.mr43]}>
        <Text style={[styles.hello3, styles.hello3Position]}>Your Address</Text>
        <Text style={[styles.hello4, styles.helloTypo]}>
          <Text style={styles.byLawWe}>
            By law we need your home address to open your
          </Text>
          <Text style={styles.byLawWe}>account</Text>
        </Text>
      </View>
      <Image
        style={[styles.shutterstock2057026517Icon, styles.mt15, styles.mr_784]}
        resizeMode="cover"
        source={require("../assets/shutterstock-2057026517.png")}
      />
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
  mt276: {
    marginTop: 276,
  },
  mr120: {
    marginRight: GlobalStyles.Margin.margin_53xl,
  },
  mt_545: {
    marginTop: -545,
  },
  mr24: {
    marginRight: GlobalStyles.Margin.margin_8xs,
  },
  mt11: {
    marginTop: GlobalStyles.Margin.margin_23xs,
  },
  mr43: {
    marginRight: GlobalStyles.Margin.margin_14xl,
  },
  mt15: {
    marginTop: GlobalStyles.Margin.margin_18xs,
  },
  mr_784: {
    marginRight: -784,
  },
  rectanglePosition: {
    right: 0,
    top: 0,
  },
  textFlexBox: {
    textAlign: "left",
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
    color: GlobalStyles.Color.gray_800,
    fontSize: GlobalStyles.FontSize.size_base,
    fontFamily: GlobalStyles.FontFamily.helvetica,
    textAlign: "left",
    top: "50%",
    position: "absolute",
  },
  businessChooseAddressChild: {
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
    alignSelf: "flex-start",
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
    position: "absolute",
    backgroundColor: GlobalStyles.Color.white,
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
    marginTop: -3,
    top: "50%",
    right: 0,
    position: "absolute",
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
    marginTop: -29.5,
    fontFamily: GlobalStyles.FontFamily.helvetica,
    top: "50%",
  },
  hello: {
    color: GlobalStyles.Color.gray_1600,
    fontSize: GlobalStyles.FontSize.size_base,
    left: 14,
    marginTop: -8,
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
    position: "absolute",
  },
  rectangleParent: {
    marginTop: -30,
    top: "50%",
  },
  component208152: {
    left: 0,
    bottom: 0,
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
  component208152Parent: {
    bottom: 0,
  },
  component21532Child: {
    left: 0,
    bottom: 0,
    position: "absolute",
  },
  iconIonicIosArrowDown: {
    marginTop: -2.64,
    right: 26,
    width: 9,
    height: 5,
    top: "50%",
    position: "absolute",
  },
  hello2: {
    left: 14,
    marginTop: -8,
    color: GlobalStyles.Color.gray_800,
  },
  component21532: {
    marginTop: -3.5,
    top: "50%",
  },
  postcodeParent: {
    width: 326,
    height: 301,
  },
  hello3: {
    fontSize: GlobalStyles.FontSize.size_7xl,
    lineHeight: 30,
    fontWeight: "700",
    fontFamily: GlobalStyles.FontFamily.typoGrotesk,
    top: 0,
  },
  byLawWe: {
    margin: GlobalStyles.Margin.margin_33xs,
  },
  hello4: {
    marginTop: 6.24,
    left: 1,
    lineHeight: 20,
  },
  helloParent: {
    width: 305,
    height: 84,
  },
  shutterstock2057026517Icon: {
    width: 1004,
    height: 566,
  },
  businessChooseAddress: {
    flex: 1,
    alignItems: "flex-end",
    width: "100%",
    backgroundColor: GlobalStyles.Color.white,
  },
});

export default BusinessChooseAddress;
