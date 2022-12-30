import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import GlobalStyles from "../GlobalStyles";

const PersonalAddress = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.personalAddress}>
      <View style={styles.personalAddressChild} />
      <View style={[styles.statusBarBlack, styles.mt_894]}>
        <View style={[styles.rectangle, styles.timePosition]} />
        <View style={[styles.statusBar, styles.hello2Position]}>
          <View style={[styles.time, styles.timePosition]}>
            <Text style={[styles.text, styles.textPosition]}>9:41</Text>
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
              style={[
                styles.rectangleView,
                styles.networkChildLayout,
                styles.maskGroup236Position,
              ]}
            />
          </View>
        </View>
      </View>
      <View style={[styles.homeIndicator, styles.mt7, styles.ml121]} />
      <Pressable
        style={[styles.wrapper, styles.mt2]}
        onPress={() => navigation.navigate("ProofVerified")}
      >
        <Image
          style={styles.iconLayout}
          resizeMode="cover"
          source={require("../assets/group-31042.png")}
        />
      </Pressable>
      <Text
        style={[
          styles.buildingNameOrNumber,
          styles.mt37,
          styles.ml25,
          styles.helloTypo,
          styles.hello2Typo,
        ]}
      >
        Building name or number
      </Text>
      <Text
        style={[
          styles.buildingNameOrNumber,
          styles.mt36,
          styles.ml25,
          styles.helloTypo,
          styles.hello2Typo,
        ]}
      >
        Address line 1
      </Text>
      <Text
        style={[styles.helloTypo, styles.mt36, styles.ml25, styles.hello2Typo]}
      >
        <Text style={styles.addressLine2}>{`Address line 2 `}</Text>
        <Text style={styles.optional}>(optional)</Text>
      </Text>
      <Text
        style={[
          styles.buildingNameOrNumber,
          styles.mt36,
          styles.ml25,
          styles.helloTypo,
          styles.hello2Typo,
        ]}
      >
        Town or city
      </Text>
      <View
        style={[
          styles.personalAddressItem,
          styles.mt9,
          styles.ml25,
          styles.personalAddressItemLayout,
        ]}
      />
      <Pressable
        style={[
          styles.component208147Parent,
          styles.mt28,
          styles.ml25,
          styles.personalAddressItemLayout,
        ]}
        onPress={() => navigation.navigate("DOB")}
      >
        <View style={[styles.component208147, styles.timePosition]}>
          <View style={[styles.rectangleParent, styles.hello2Position]}>
            <View style={[styles.groupChild, styles.iconLayout]} />
            <View style={[styles.maskGroup236, styles.maskGroup236Position]} />
          </View>
        </View>
        <Text style={[styles.hello, styles.helloTypo]}>Continue</Text>
      </Pressable>
      <View
        style={[
          styles.personalAddressItem,
          styles.mt9,
          styles.ml25,
          styles.personalAddressItemLayout,
        ]}
      />
      <View
        style={[
          styles.personalAddressItem,
          styles.mt9,
          styles.ml25,
          styles.personalAddressItemLayout,
        ]}
      />
      <View
        style={[
          styles.personalAddressItem,
          styles.mt9,
          styles.ml25,
          styles.personalAddressItemLayout,
        ]}
      />
      <Pressable
        style={[styles.mt17, styles.ml25]}
        onPress={() => navigation.navigate("BusinessAddress2")}
      >
        <Text
          style={[styles.enterPostcode1, styles.helloTypo, styles.hello2Typo]}
        >
          Enter postcode?
        </Text>
      </Pressable>
      <View style={[styles.helloParent, styles.mt10, styles.ml27]}>
        <Text style={[styles.hello1, styles.textPosition]}>Your Address</Text>
        <Text
          style={[
            styles.hello2,
            styles.helloTypo,
            styles.hello2Typo,
            styles.hello2Position,
          ]}
        >
          <Text style={styles.byLawWe}>
            By law we need your home address to open your
          </Text>
          <Text style={styles.byLawWe}>account</Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mt_894: {
    marginTop: -894,
  },
  mt7: {
    marginTop: GlobalStyles.Margin.margin_27xs,
  },
  ml121: {
    marginLeft: GlobalStyles.Margin.margin_54xl,
  },
  mt2: {
    marginTop: GlobalStyles.Margin.margin_31xs,
  },
  mt37: {
    marginTop: GlobalStyles.Margin.margin_7xl,
  },
  ml25: {
    marginLeft: GlobalStyles.Margin.margin_7xs,
  },
  mt36: {
    marginTop: GlobalStyles.Margin.margin_6xl,
  },
  mt9: {
    marginTop: GlobalStyles.Margin.margin_25xs,
  },
  mt28: {
    marginTop: GlobalStyles.Margin.margin_3xs,
  },
  mt17: {
    marginTop: GlobalStyles.Margin.margin_16xs,
  },
  mt10: {
    marginTop: GlobalStyles.Margin.margin_24xs,
  },
  ml27: {
    marginLeft: GlobalStyles.Margin.margin_4xs,
  },
  timePosition: {
    bottom: 0,
    left: 0,
    top: 0,
    position: "absolute",
  },
  hello2Position: {
    top: "50%",
    position: "absolute",
  },
  textPosition: {
    textAlign: "left",
    left: 0,
    top: 0,
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
  maskGroup236Position: {
    top: 0,
    right: 0,
  },
  helloTypo: {
    fontFamily: GlobalStyles.FontFamily.helvetica,
    textAlign: "left",
  },
  hello2Typo: {
    fontSize: GlobalStyles.FontSize.size_base,
    fontFamily: GlobalStyles.FontFamily.helvetica,
  },
  personalAddressItemLayout: {
    width: 326,
    height: 60,
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  personalAddressChild: {
    backgroundColor: GlobalStyles.Color.gray_300,
    height: 894,
    width: 375,
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
    left: 0,
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
  rectangleView: {
    right: 0,
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
  wrapper: {
    width: 55,
    height: 45,
  },
  buildingNameOrNumber: {
    color: GlobalStyles.Color.indigo,
  },
  addressLine2: {
    color: GlobalStyles.Color.indigo,
  },
  optional: {
    color: GlobalStyles.Color.gray_800,
  },
  personalAddressItem: {
    borderStyle: "solid",
    borderColor: "#e8e8e8",
    borderWidth: 1,
    height: 60,
    borderRadius: GlobalStyles.Border.br_lg,
    backgroundColor: GlobalStyles.Color.white,
  },
  groupChild: {
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    backgroundColor: GlobalStyles.Color.gray_500,
    borderRadius: GlobalStyles.Border.br_lg,
    position: "absolute",
  },
  maskGroup236: {
    bottom: 13,
    left: 0,
    right: 0,
    position: "absolute",
  },
  rectangleParent: {
    marginTop: -30,
    height: 60,
    left: 0,
    right: 0,
  },
  component208147: {
    left: 0,
    right: 0,
  },
  hello: {
    top: "36.67%",
    left: "38.04%",
    fontSize: GlobalStyles.FontSize.size_lg,
    lineHeight: 17,
    textTransform: "uppercase",
    color: GlobalStyles.Color.black,
    position: "absolute",
  },
  component208147Parent: {
    height: 60,
  },
  enterPostcode1: {
    color: GlobalStyles.Color.blue,
  },
  hello1: {
    fontSize: GlobalStyles.FontSize.size_8xl,
    lineHeight: 30,
    fontWeight: "700",
    fontFamily: GlobalStyles.FontFamily.typoGrotesk,
    color: GlobalStyles.Color.indigo,
  },
  byLawWe: {
    margin: GlobalStyles.Margin.margin_33xs,
  },
  hello2: {
    marginTop: 6.74,
    left: 1,
    lineHeight: 20,
    color: GlobalStyles.Color.gray_800,
  },
  helloParent: {
    width: 305,
    height: 85,
  },
  personalAddress: {
    flex: 1,
    width: "100%",
    backgroundColor: GlobalStyles.Color.white,
  },
});

export default PersonalAddress;
