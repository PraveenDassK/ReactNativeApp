import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import GlobalStyles from "../GlobalStyles";

const VerifyCode = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.verifyCode}>
      <View style={styles.verifyCodeChild} />
      <Text style={[styles.hello, styles.mt10, styles.ml27]}>
        Verify your identity
      </Text>
      <Pressable
        style={[styles.iconFeatherArrowLeftWrapper, styles.mt_766]}
        onPress={() => navigation.navigate("VerifyYourIdentity")}
      >
        <Image
          style={styles.iconFeatherArrowLeft}
          resizeMode="cover"
          source={require("../assets/icon-featherarrowleft.png")}
        />
      </Pressable>
      <Text style={[styles.hello1, styles.mt14, styles.ml28, styles.helloTypo]}>
        Enter the verification code sent to +44 123....
      </Text>
      <Pressable
        style={[styles.component208121Parent, styles.mt87, styles.ml25]}
        onPress={() => navigation.navigate("VerifyCode1")}
      >
        <View
          style={[
            styles.component208121,
            styles.maskGroup236Position,
            styles.maskGroup236Position1,
          ]}
        >
          <View style={[styles.rectangleParent, styles.maskGroup236Position]}>
            <View style={styles.groupChild} />
            <View
              style={[
                styles.maskGroup236,
                styles.maskGroup236Position,
                styles.maskGroup236Position1,
              ]}
            />
          </View>
        </View>
        <Text style={[styles.hello2, styles.helloTypo]}>Verify</Text>
      </Pressable>
      <View
        style={[
          styles.verifyCodeItem,
          styles.mt75,
          styles.ml31,
          styles.verifyLayout,
        ]}
      />
      <View
        style={[
          styles.verifyCodeInner,
          styles.mt_42,
          styles.ml85,
          styles.verifyLayout,
        ]}
      />
      <View
        style={[
          styles.rectangleView,
          styles.mt_42,
          styles.ml140,
          styles.verifyLayout,
        ]}
      />
      <View
        style={[
          styles.rectangleView,
          styles.mt_42,
          styles.ml249,
          styles.verifyLayout,
        ]}
      />
      <View
        style={[
          styles.rectangleView,
          styles.mt_42,
          styles.ml194,
          styles.verifyLayout,
        ]}
      />
      <View
        style={[
          styles.rectangleView,
          styles.mt_42,
          styles.ml303,
          styles.verifyLayout,
        ]}
      />
      <Text style={[styles.text, styles.mt_35, styles.ml44, styles.helloTypo]}>
        1
      </Text>
      <Text style={[styles.hello1, styles.mt19, styles.ml31, styles.helloTypo]}>
        Resend Code in 00:10
      </Text>
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
  mt87: {
    marginTop: 87,
  },
  ml25: {
    marginLeft: GlobalStyles.Margin.margin_3xl,
  },
  mt75: {
    marginTop: GlobalStyles.Margin.margin_38xl,
  },
  ml31: {
    marginLeft: GlobalStyles.Margin.margin_9xl,
  },
  mt_42: {
    marginTop: GlobalStyles.Margin.margin_39xs,
  },
  ml85: {
    marginLeft: 85,
  },
  ml140: {
    marginLeft: 140,
  },
  ml249: {
    marginLeft: 249,
  },
  ml194: {
    marginLeft: 194,
  },
  ml303: {
    marginLeft: GlobalStyles.Margin.margin_59xl,
  },
  mt_35: {
    marginTop: GlobalStyles.Margin.margin_37xs,
  },
  ml44: {
    marginLeft: GlobalStyles.Margin.margin_22xl,
  },
  mt19: {
    marginTop: GlobalStyles.Margin.margin_2xs,
  },
  helloTypo: {
    fontFamily: GlobalStyles.FontFamily.helvetica,
    textAlign: "left",
  },
  maskGroup236Position: {
    left: 0,
    right: 0,
    position: "absolute",
  },
  maskGroup236Position1: {
    top: 0,
    right: 0,
  },
  verifyLayout: {
    height: 42,
    width: 42,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: GlobalStyles.Border.br_3xs,
    backgroundColor: GlobalStyles.Color.white,
  },
  verifyCodeChild: {
    width: 375,
    height: 812,
    backgroundColor: GlobalStyles.Color.gray_300,
  },
  hello: {
    fontSize: GlobalStyles.FontSize.size_6xl,
    fontWeight: "700",
    fontFamily: GlobalStyles.FontFamily.typoGrotesk,
    color: GlobalStyles.Color.indigo,
    textAlign: "left",
  },
  iconFeatherArrowLeft: {
    marginLeft: -0.5,
    bottom: 4,
    left: "50%",
    width: 17,
    height: 17,
    position: "absolute",
  },
  iconFeatherArrowLeftWrapper: {
    width: 55,
    height: 45,
    backgroundColor: GlobalStyles.Color.gray_300,
  },
  hello1: {
    fontSize: GlobalStyles.FontSize.size_sm,
    color: GlobalStyles.Color.gray_800,
  },
  groupChild: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: GlobalStyles.Border.br_md,
    backgroundColor: GlobalStyles.Color.gray_500,
    position: "absolute",
    width: "100%",
  },
  maskGroup236: {
    bottom: 13,
  },
  rectangleParent: {
    marginTop: -30,
    top: "50%",
    height: 60,
  },
  component208121: {
    bottom: 0,
  },
  hello2: {
    top: "36.67%",
    left: "41.72%",
    fontSize: GlobalStyles.FontSize.size_base,
    lineHeight: 17,
    textTransform: "uppercase",
    color: GlobalStyles.Color.black,
    position: "absolute",
  },
  component208121Parent: {
    width: 326,
    height: 60,
  },
  verifyCodeItem: {
    borderColor: "#0101fd",
  },
  verifyCodeInner: {
    borderColor: "#ff4b4b",
  },
  rectangleView: {
    borderColor: "#e8e8e8",
  },
  text: {
    fontSize: 27,
    color: GlobalStyles.Color.blue,
  },
  verifyCode: {
    flex: 1,
    width: "100%",
    backgroundColor: GlobalStyles.Color.white,
  },
});

export default VerifyCode;
