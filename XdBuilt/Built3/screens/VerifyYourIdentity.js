import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import GlobalStyles from "../GlobalStyles";

const VerifyYourIdentity = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.verifyYourIdentity}>
      <View style={styles.verifyYourIdentityChild} />
      <Text style={[styles.hello, styles.mt10, styles.ml27]}>
        Verify your identity
      </Text>
      <Pressable
        style={[styles.iconFeatherArrowLeftWrapper, styles.mt_766]}
        onPress={() => navigation.navigate("SelectBank1")}
      >
        <Image
          style={styles.iconFeatherArrowLeft}
          resizeMode="cover"
          source={require("../assets/icon-featherarrowleft.png")}
        />
      </Pressable>
      <Text style={[styles.hello1, styles.mt14, styles.ml28, styles.helloTypo]}>
        <Text style={styles.whereYouWould}>
          Where you would like Carbonyte to send you the
        </Text>
        <Text style={styles.whereYouWould}>verification code.</Text>
      </Text>
      <Pressable
        style={[styles.component208119Parent, styles.mt58, styles.ml25]}
        onPress={() => navigation.navigate("VerifyCode")}
      >
        <View style={[styles.component208119, styles.component208119Position]}>
          <View
            style={[styles.rectangleParent, styles.rectangleParentPosition]}
          >
            <View style={[styles.groupChild, styles.groupChildLayout]} />
            <View style={styles.maskGroup236} />
          </View>
        </View>
        <Text style={styles.hello2}>Submit</Text>
      </Pressable>
      <View style={[styles.helloParent, styles.mt58, styles.ml28]}>
        <Text style={[styles.hello3, styles.helloTypo]}>Text</Text>
        <View
          style={[
            styles.iconMaterialTextsmsWrapper,
            styles.groupChildLayout,
            styles.component208119Position,
          ]}
        >
          <Image
            style={[
              styles.iconMaterialTextsms,
              styles.iconPosition,
              styles.iconPosition1,
            ]}
            resizeMode="cover"
            source={require("../assets/icon-materialtextsms.png")}
          />
        </View>
        <Image
          style={[styles.component2261, styles.iconPosition]}
          resizeMode="cover"
          source={require("../assets/component-226--1.png")}
        />
      </View>
      <View style={[styles.helloParent, styles.mt15, styles.ml28]}>
        <Text style={[styles.hello3, styles.helloTypo]}>Phone</Text>
        <View
          style={[
            styles.iconMaterialTextsmsWrapper,
            styles.groupChildLayout,
            styles.component208119Position,
          ]}
        >
          <Image
            style={[styles.iconAwesomePhoneVolume, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/icon-awesomephonevolume.png")}
          />
        </View>
        <Image
          style={[styles.component2261, styles.iconPosition]}
          resizeMode="cover"
          source={require("../assets/component-226--1.png")}
        />
      </View>
      <View style={[styles.helloParent, styles.mt14, styles.ml28]}>
        <Text style={[styles.hello3, styles.helloTypo]}>Email</Text>
        <View
          style={[
            styles.iconMaterialTextsmsWrapper,
            styles.groupChildLayout,
            styles.component208119Position,
          ]}
        >
          <Image
            style={[
              styles.iconMaterialEmail,
              styles.iconPosition1,
              styles.rectangleParentPosition,
            ]}
            resizeMode="cover"
            source={require("../assets/icon-materialemail.png")}
          />
        </View>
        <Image
          style={[styles.component2261, styles.iconPosition]}
          resizeMode="cover"
          source={require("../assets/component-226--1.png")}
        />
      </View>
      <View style={[styles.verifyYourIdentityItem, styles.mt14, styles.ml28]} />
      <View style={[styles.verifyYourIdentityItem, styles.mt15, styles.ml28]} />
    </View>
  );
};

const styles = StyleSheet.create({
  mt10: {
    marginTop: GlobalStyles.Margin.margin_16xs,
  },
  ml27: {
    marginLeft: GlobalStyles.Margin.margin_5xl,
  },
  mt_766: {
    marginTop: GlobalStyles.Margin.margin_59xs,
  },
  mt14: {
    marginTop: GlobalStyles.Margin.margin_9xs,
  },
  ml28: {
    marginLeft: GlobalStyles.Margin.margin_6xl,
  },
  mt58: {
    marginTop: GlobalStyles.Margin.margin_32xl,
  },
  ml25: {
    marginLeft: GlobalStyles.Margin.margin_3xl,
  },
  mt15: {
    marginTop: GlobalStyles.Margin.margin_7xs,
  },
  helloTypo: {
    fontSize: GlobalStyles.FontSize.size_sm,
    fontFamily: GlobalStyles.FontFamily.helvetica,
  },
  component208119Position: {
    bottom: 0,
    left: 0,
    top: 0,
  },
  rectangleParentPosition: {
    top: "50%",
    position: "absolute",
  },
  groupChildLayout: {
    borderRadius: GlobalStyles.Border.br_md,
    position: "absolute",
  },
  iconPosition: {
    height: 20,
    marginTop: -9.5,
    top: "50%",
    position: "absolute",
  },
  iconPosition1: {
    marginLeft: -9.5,
    width: 20,
    left: "50%",
  },
  verifyYourIdentityChild: {
    width: 375,
    height: 812,
    backgroundColor: GlobalStyles.Color.gray_300,
  },
  hello: {
    fontSize: GlobalStyles.FontSize.size_6xl,
    fontWeight: "700",
    fontFamily: GlobalStyles.FontFamily.typoGrotesk,
    textAlign: "left",
    color: GlobalStyles.Color.indigo,
  },
  iconFeatherArrowLeft: {
    marginLeft: -0.5,
    bottom: 4,
    width: 17,
    height: 17,
    left: "50%",
    position: "absolute",
  },
  iconFeatherArrowLeftWrapper: {
    width: 55,
    height: 45,
    backgroundColor: GlobalStyles.Color.gray_300,
  },
  whereYouWould: {
    margin: GlobalStyles.Margin.margin_25xs,
  },
  hello1: {
    lineHeight: 20,
    color: GlobalStyles.Color.gray_800,
    fontFamily: GlobalStyles.FontFamily.helvetica,
    textAlign: "left",
  },
  groupChild: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    backgroundColor: GlobalStyles.Color.gray_500,
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
    left: 0,
    right: 0,
    height: 60,
  },
  component208119: {
    left: 0,
    right: 0,
    position: "absolute",
  },
  hello2: {
    top: "36.67%",
    left: "41.41%",
    fontSize: GlobalStyles.FontSize.size_base,
    lineHeight: 17,
    textTransform: "uppercase",
    color: GlobalStyles.Color.black,
    fontFamily: GlobalStyles.FontFamily.helvetica,
    position: "absolute",
    textAlign: "left",
  },
  component208119Parent: {
    width: 326,
    height: 60,
  },
  hello3: {
    top: "34.69%",
    left: "20.32%",
    lineHeight: 14,
    textAlign: "center",
    fontFamily: GlobalStyles.FontFamily.helvetica,
    position: "absolute",
    color: GlobalStyles.Color.indigo,
  },
  iconMaterialTextsms: {
    width: 20,
  },
  iconMaterialTextsmsWrapper: {
    width: 49,
    left: 0,
    backgroundColor: GlobalStyles.Color.white,
  },
  component2261: {
    width: 20,
    right: 0,
  },
  helloParent: {
    height: 49,
    width: 315,
  },
  iconAwesomePhoneVolume: {
    marginLeft: -7.5,
    width: 15,
    left: "50%",
  },
  iconMaterialEmail: {
    marginTop: -7.5,
    height: 16,
    width: 20,
  },
  verifyYourIdentityItem: {
    borderStyle: "solid",
    borderColor: "#fff",
    borderTopWidth: 1,
    height: 2,
    width: 315,
  },
  verifyYourIdentity: {
    flex: 1,
    width: "100%",
    backgroundColor: GlobalStyles.Color.white,
  },
});

export default VerifyYourIdentity;
