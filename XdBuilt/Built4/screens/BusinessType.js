import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import GlobalStyles from "../GlobalStyles";

const BusinessType = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.businessType}>
      <View style={styles.businessTypeChild} />
      <Text
        style={[
          styles.companyStatus,
          styles.mt1,
          styles.ml25,
          styles.companyColor,
          styles.companyTypo,
        ]}
      >
        Company Status
      </Text>
      <View style={[styles.component2154, styles.mt9, styles.ml25]}>
        <View
          style={[
            styles.component2154Child,
            styles.helloBorder,
            styles.timePosition,
          ]}
        />
        <Image
          style={[styles.iconIonicIosArrowDown, styles.statusBarPosition]}
          resizeMode="cover"
          source={require("../assets/icon-ioniciosarrowdown.png")}
        />
        <Text style={[styles.hello, styles.helloTypo]}>
          Current status of the company
        </Text>
      </View>
      <View style={[styles.component2154, styles.mt9, styles.ml25]}>
        <View
          style={[
            styles.component2154Child,
            styles.helloBorder,
            styles.timePosition,
          ]}
        />
        <Text style={[styles.hello, styles.helloTypo]}>dd-mm-yyyy</Text>
        <View style={styles.component2153Item} />
        <View style={styles.layer}>
          <View style={styles.vrstva98}>
            <Image
              style={styles.vrstva98}
              resizeMode="cover"
              source={require("../assets/path-72.png")}
            />
            <View style={[styles.vrstva98Child, styles.vrstva98Layout]} />
            <View style={[styles.vrstva98Item, styles.vrstva98Layout]} />
          </View>
        </View>
      </View>
      <Text
        style={[
          styles.companyStatus,
          styles.mt35,
          styles.ml25,
          styles.companyColor,
          styles.companyTypo,
        ]}
      >
        Nature of business (SIC)
      </Text>
      <Text
        style={[
          styles.companyStatus,
          styles.mt35,
          styles.ml25,
          styles.companyColor,
          styles.companyTypo,
        ]}
      >
        Incorporated on
      </Text>
      <Text
        style={[
          styles.companyStatus,
          styles.mt35,
          styles.ml25,
          styles.companyColor,
          styles.companyTypo,
        ]}
      >
        Company name
      </Text>
      <View
        style={[
          styles.helloWrapper,
          styles.mt9,
          styles.ml25,
          styles.helloBorder,
        ]}
      >
        <Text style={[styles.hello, styles.helloTypo]}>Company full name</Text>
      </View>
      <View style={[styles.helloParent, styles.mt10, styles.ml27]}>
        <Text style={[styles.hello3, styles.companyColor]}>
          Tell us about your Business
        </Text>
        <Text style={[styles.hello4, styles.helloTypo]}>
          Carbonyte would like to know your business details
        </Text>
      </View>
      <Text
        style={[
          styles.companyStatus,
          styles.mt35,
          styles.ml25,
          styles.companyColor,
          styles.companyTypo,
        ]}
      >
        Company type
      </Text>
      <View style={[styles.companyNumberParent, styles.mt35, styles.ml25]}>
        <Text
          style={[
            styles.companyNumber,
            styles.companyColor,
            styles.companyTypo,
          ]}
        >
          Company number
        </Text>
        <View
          style={[
            styles.helloContainer,
            styles.helloBorder,
            styles.timePosition,
          ]}
        >
          <Text style={[styles.hello, styles.helloTypo]}>0000000</Text>
        </View>
      </View>
      <View style={[styles.component2154, styles.mt9, styles.ml25]}>
        <View
          style={[
            styles.component2154Child,
            styles.helloBorder,
            styles.timePosition,
          ]}
        />
        <Image
          style={[styles.iconIonicIosArrowDown, styles.statusBarPosition]}
          resizeMode="cover"
          source={require("../assets/icon-ioniciosarrowdown.png")}
        />
        <Text style={[styles.hello, styles.helloTypo]}>
          Select your nature of business
        </Text>
      </View>
      <View style={[styles.statusBarBlack, styles.mt_1150]}>
        <View style={[styles.rectangle, styles.timePosition]} />
        <View style={[styles.statusBar, styles.statusBarPosition]}>
          <View style={[styles.time, styles.timePosition]}>
            <Text style={styles.text}>9:41</Text>
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
            <View style={[styles.rectangleView, styles.networkChildLayout]} />
          </View>
        </View>
      </View>
      <View style={[styles.homeIndicator, styles.mt28, styles.ml121]} />
      <Pressable
        style={[styles.wrapper, styles.mt2]}
        onPress={() => navigation.navigate("Address1")}
      >
        <Image
          style={styles.iconLayout}
          resizeMode="cover"
          source={require("../assets/group-31042.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.component2154, styles.mt168, styles.ml25]}
        onPress={() => navigation.navigate("DirectorsOrPartners")}
      >
        <View style={[styles.component208106, styles.timePosition]}>
          <View style={[styles.rectangleParent, styles.statusBarPosition]}>
            <View style={[styles.groupChild, styles.iconLayout]} />
            <View style={styles.maskGroup236} />
          </View>
        </View>
        <Text style={styles.hello7}>Continue</Text>
      </Pressable>
      <View style={[styles.component2154, styles.mt9, styles.ml25]}>
        <View
          style={[
            styles.component2154Child,
            styles.helloBorder,
            styles.timePosition,
          ]}
        />
        <Image
          style={[styles.iconIonicIosArrowDown, styles.statusBarPosition]}
          resizeMode="cover"
          source={require("../assets/icon-ioniciosarrowdown.png")}
        />
        <Text style={[styles.hello, styles.helloTypo]}>
          Select your company type
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mt1: {
    marginTop: GlobalStyles.Margin.margin_32xs,
  },
  ml25: {
    marginLeft: GlobalStyles.Margin.margin_7xs,
  },
  mt9: {
    marginTop: GlobalStyles.Margin.margin_25xs,
  },
  mt35: {
    marginTop: GlobalStyles.Margin.margin_5xl,
  },
  mt10: {
    marginTop: GlobalStyles.Margin.margin_24xs,
  },
  ml27: {
    marginLeft: GlobalStyles.Margin.margin_4xs,
  },
  mt_1150: {
    marginTop: -1150,
  },
  mt28: {
    marginTop: GlobalStyles.Margin.margin_3xs,
  },
  ml121: {
    marginLeft: GlobalStyles.Margin.margin_54xl,
  },
  mt2: {
    marginTop: GlobalStyles.Margin.margin_31xs,
  },
  mt168: {
    marginTop: 168,
  },
  companyColor: {
    color: GlobalStyles.Color.indigo,
    textAlign: "left",
  },
  companyTypo: {
    fontSize: GlobalStyles.FontSize.size_xl,
    color: GlobalStyles.Color.indigo,
    fontFamily: GlobalStyles.FontFamily.helvetica,
  },
  helloBorder: {
    borderWidth: 1,
    borderColor: "#e8e8e8",
    borderStyle: "solid",
    borderRadius: GlobalStyles.Border.br_lg,
    backgroundColor: GlobalStyles.Color.white,
  },
  timePosition: {
    bottom: 0,
    left: 0,
    position: "absolute",
  },
  statusBarPosition: {
    top: "50%",
    position: "absolute",
  },
  helloTypo: {
    color: GlobalStyles.Color.gray_800,
    fontSize: GlobalStyles.FontSize.size_base,
    top: "50%",
    position: "absolute",
    textAlign: "left",
    fontFamily: GlobalStyles.FontFamily.helvetica,
  },
  vrstva98Layout: {
    height: 3,
    backgroundColor: GlobalStyles.Color.blue,
    borderRadius: GlobalStyles.Border.br_8xs,
    top: 10,
    position: "absolute",
  },
  networkPosition1: {
    width: 17,
    marginTop: -3,
    top: "50%",
    position: "absolute",
  },
  networkChildLayout: {
    backgroundColor: GlobalStyles.Color.gray_1400,
    borderRadius: GlobalStyles.Border.br_7xs,
    width: 3,
    bottom: 0,
    position: "absolute",
  },
  networkPosition: {
    left: "50%",
    backgroundColor: GlobalStyles.Color.gray_1400,
    borderRadius: GlobalStyles.Border.br_7xs,
    width: 3,
    bottom: 0,
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  businessTypeChild: {
    backgroundColor: GlobalStyles.Color.gray_300,
    height: 1150,
    width: 375,
  },
  companyStatus: {
    textAlign: "left",
    fontFamily: GlobalStyles.FontFamily.helvetica,
  },
  component2154Child: {
    left: 0,
    right: 0,
    top: 0,
  },
  iconIonicIosArrowDown: {
    marginTop: -2.64,
    right: 26,
    width: 9,
    height: 5,
  },
  hello: {
    marginTop: -8,
    left: 14,
  },
  component2154: {
    height: 60,
    width: 326,
  },
  component2153Item: {
    height: "38.33%",
    width: "7.06%",
    top: "31.67%",
    right: "7.06%",
    bottom: "30%",
    left: "85.89%",
    position: "absolute",
  },
  vrstva98: {
    height: 20,
    width: 22,
    left: 0,
    top: 0,
    position: "absolute",
  },
  vrstva98Child: {
    left: 3,
    width: 3,
    height: 3,
    backgroundColor: GlobalStyles.Color.blue,
    borderRadius: GlobalStyles.Border.br_8xs,
    top: 10,
  },
  vrstva98Item: {
    left: 8,
    width: 4,
    height: 3,
    backgroundColor: GlobalStyles.Color.blue,
    borderRadius: GlobalStyles.Border.br_8xs,
    top: 10,
  },
  layer: {
    height: "32.7%",
    width: "6.63%",
    top: "34.7%",
    right: "7.27%",
    bottom: "32.6%",
    left: "86.1%",
    position: "absolute",
  },
  helloWrapper: {
    height: 60,
    width: 326,
  },
  hello3: {
    fontSize: GlobalStyles.FontSize.size_8xl,
    lineHeight: 30,
    fontWeight: "700",
    fontFamily: GlobalStyles.FontFamily.typoGrotesk,
    left: 0,
    top: 0,
    position: "absolute",
    textAlign: "left",
  },
  hello4: {
    marginTop: 16.74,
    left: 1,
  },
  helloParent: {
    width: 329,
    height: 65,
  },
  companyNumber: {
    left: 0,
    top: 0,
    position: "absolute",
    textAlign: "left",
    fontFamily: GlobalStyles.FontFamily.helvetica,
  },
  helloContainer: {
    top: 26,
    left: 0,
    right: 0,
  },
  companyNumberParent: {
    height: 86,
    width: 326,
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
    bottom: 0,
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
    marginTop: -3,
    width: 22,
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
  groupChild: {
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    backgroundColor: GlobalStyles.Color.gray_500,
    borderRadius: GlobalStyles.Border.br_lg,
    height: "100%",
    position: "absolute",
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
    left: 0,
    right: 0,
    height: 60,
  },
  component208106: {
    left: 0,
    right: 0,
    top: 0,
  },
  hello7: {
    top: "36.67%",
    left: "38.04%",
    fontSize: GlobalStyles.FontSize.size_lg,
    lineHeight: 17,
    textTransform: "uppercase",
    color: GlobalStyles.Color.black,
    position: "absolute",
    textAlign: "left",
    fontFamily: GlobalStyles.FontFamily.helvetica,
  },
  businessType: {
    flex: 1,
    width: "100%",
    backgroundColor: GlobalStyles.Color.white,
  },
});

export default BusinessType;
