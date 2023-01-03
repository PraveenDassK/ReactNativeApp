import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import GlobalStyles from "../GlobalStyles";

const VerifyCode = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.verifyCode}>
      <View style={styles.helloParent}>
        <Text style={styles.hello}>Verify your identity</Text>
        <Text style={[styles.hello1, styles.hello1Typo]}>
          Enter the verification code sent to +44 123....
        </Text>
        <Pressable
          style={[
            styles.groupParent,
            styles.groupParentPosition,
            styles.parentPosition,
          ]}
          onPress={() => navigation.navigate("VerifyCode1")}
        >
          <View
            style={[
              styles.rectangleParent,
              styles.groupParentPosition,
              styles.parentPosition,
            ]}
          >
            <View style={styles.groupChild} />
            <View style={[styles.maskGroup236, styles.groupParentPosition]} />
          </View>
          <Text style={[styles.hello2, styles.textTypo]}>Verify</Text>
        </Pressable>
        <View style={[styles.groupItem, styles.groupLayout]} />
        <View style={[styles.groupInner, styles.groupLayout]} />
        <View style={[styles.rectangleView, styles.groupChildBorder]} />
        <View style={[styles.groupChild1, styles.groupChildBorder]} />
        <View style={[styles.groupChild2, styles.groupChildBorder]} />
        <View style={[styles.groupChild3, styles.groupChildBorder]} />
        <Text style={[styles.text, styles.textTypo]}>1</Text>
        <Text style={[styles.resendCodeIn0010, styles.hello1Typo]}>
          Resend Code in 00:10
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  hello1Typo: {
    color: GlobalStyles.Color.gray_700,
    fontSize: GlobalStyles.FontSize.size_base,
    fontFamily: GlobalStyles.FontFamily.helvetica,
    top: "50%",
    textAlign: "left",
    position: "absolute",
  },
  groupParentPosition: {
    left: 0,
    right: 0,
    position: "absolute",
  },
  parentPosition: {
    bottom: 0,
    left: 0,
    right: 0,
  },
  textTypo: {
    fontFamily: GlobalStyles.FontFamily.helvetica,
    textAlign: "left",
    position: "absolute",
  },
  groupLayout: {
    height: 42,
    width: 42,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: GlobalStyles.Border.br_2xs,
    marginTop: -43.5,
    top: "50%",
    position: "absolute",
    backgroundColor: GlobalStyles.Color.white,
  },
  groupChildBorder: {
    borderColor: "#e8e8e8",
    height: 42,
    width: 42,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: GlobalStyles.Border.br_2xs,
    marginTop: -43.5,
    top: "50%",
    position: "absolute",
    backgroundColor: GlobalStyles.Color.white,
  },
  hello: {
    left: 2,
    fontSize: GlobalStyles.FontSize.size_8xl,
    fontWeight: "700",
    fontFamily: GlobalStyles.FontFamily.typoGrotesk,
    color: GlobalStyles.Color.indigo_100,
    textAlign: "left",
    top: 0,
    position: "absolute",
  },
  hello1: {
    marginTop: -132.02,
    left: 3,
  },
  groupChild: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: GlobalStyles.Border.br_lg,
    backgroundColor: GlobalStyles.Color.gray_500,
    position: "absolute",
    width: "100%",
  },
  maskGroup236: {
    bottom: 13,
    left: 0,
    right: 0,
    top: 0,
  },
  rectangleParent: {
    top: 0,
    bottom: 0,
  },
  hello2: {
    top: "40%",
    left: "41.72%",
    fontSize: GlobalStyles.FontSize.size_lg,
    textTransform: "uppercase",
    color: GlobalStyles.Color.black,
  },
  groupParent: {
    height: 60,
  },
  groupItem: {
    borderColor: "#0101fd",
    left: 6,
  },
  groupInner: {
    marginLeft: -103,
    borderColor: "#ff4b4b",
    left: "50%",
  },
  rectangleView: {
    marginLeft: -48,
    left: "50%",
  },
  groupChild1: {
    marginLeft: 61,
    left: "50%",
  },
  groupChild2: {
    marginLeft: 6,
    left: "50%",
  },
  groupChild3: {
    right: 6,
  },
  text: {
    marginTop: -33.5,
    left: 19,
    fontSize: 27,
    color: GlobalStyles.Color.blue_100,
    top: "50%",
    fontFamily: GlobalStyles.FontFamily.helvetica,
  },
  resendCodeIn0010: {
    marginTop: 14.5,
    left: 6,
  },
  helloParent: {
    width: 326,
    height: 351,
  },
  verifyCode: {
    flex: 1,
    paddingLeft: GlobalStyles.Padding.padding_7xs,
    paddingTop: GlobalStyles.Padding.padding_5xl,
    paddingRight: GlobalStyles.Padding.padding_8xs,
    width: "100%",
    backgroundColor: GlobalStyles.Color.white,
  },
});

export default VerifyCode;
