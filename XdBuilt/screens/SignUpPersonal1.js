import * as React from "react";
import {
  Text,
  StyleSheet,
  Image,
  View,
  Pressable,
  TextInput,
} from "react-native";
import GlobalStyles from "../GlobalStyles";

const SignUpPersonal1 = () => {
  return (
    <View style={styles.signUpPersonal1}>
      <View style={styles.helloParent}>
        <Text style={[styles.hello, styles.helloTypo]}>
          Swipe up if already have an account
        </Text>
        <Image
          style={styles.iconIonicIosArrowDown}
          resizeMode="cover"
          source={require("../assets/icon-ioniciosarrowdown14.png")}
        />
        <View style={styles.helloGroup}>
          <Text
            style={[styles.hello1, styles.helloFlexBox, styles.hello1Color]}
          >
            <Text style={styles.getStartedWith}>Get Started With</Text>
            <Text style={styles.getStartedWith}>Mobile Number</Text>
          </Text>
          <Text
            style={[
              styles.selectYourMobileNumber,
              styles.helloFlexBox,
              styles.hello1Color,
            ]}
          >{`Select your Mobile Number `}</Text>
          <Text style={[styles.hello2, styles.helloFlexBox, styles.helloTypo]}>
            We will send an OTP to verify your number.
          </Text>
        </View>
        <Pressable style={[styles.groupParent, styles.groupParentPosition]}>
          <View style={[styles.rectangleParent, styles.groupParentPosition]}>
            <View style={styles.groupChild} />
            <View style={[styles.maskGroup236, styles.groupParentPosition]} />
          </View>
          <Text style={[styles.hello3, styles.helloFlexBox]}>Continue</Text>
        </Pressable>
        <View style={[styles.groupItem, styles.groupBorder]} />
        <TextInput
          style={[styles.groupInner, styles.groupBorder]}
          keyboardType="default"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  helloTypo: {
    color: GlobalStyles.Color.gray_700,
    fontFamily: GlobalStyles.FontFamily.helvetica,
    fontSize: GlobalStyles.FontSize.size_base,
    top: "50%",
  },
  helloFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  hello1Color: {
    color: GlobalStyles.Color.indigo_100,
    left: 0,
    textAlign: "left",
  },
  groupParentPosition: {
    right: 0,
    left: 0,
    position: "absolute",
  },
  groupBorder: {
    borderWidth: 1,
    borderColor: "#e8e8e8",
    borderStyle: "solid",
    bottom: 443,
    top: 170,
    borderRadius: GlobalStyles.Border.br_lg,
    position: "absolute",
    backgroundColor: GlobalStyles.Color.white,
  },
  hello: {
    marginTop: 322.5,
    left: 52,
    textAlign: "center",
    position: "absolute",
  },
  iconIonicIosArrowDown: {
    marginTop: 300.34,
    marginLeft: -3.41,
    left: "50%",
    width: 8,
    height: 5,
    top: "50%",
    position: "absolute",
  },
  getStartedWith: {
    margin: GlobalStyles.Margin.margin_8xs,
  },
  hello1: {
    fontSize: GlobalStyles.FontSize.size_8xl,
    lineHeight: 30,
    fontWeight: "700",
    fontFamily: GlobalStyles.FontFamily.typoGrotesk,
    top: 0,
  },
  selectYourMobileNumber: {
    bottom: 0,
    fontFamily: GlobalStyles.FontFamily.helvetica,
    fontSize: GlobalStyles.FontSize.size_base,
    color: GlobalStyles.Color.indigo_100,
    left: 0,
  },
  hello2: {
    marginTop: 4.98,
    left: 1,
  },
  helloGroup: {
    left: 3,
    width: 270,
    height: 137,
    top: 0,
    position: "absolute",
  },
  groupChild: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    backgroundColor: GlobalStyles.Color.gray_500,
    borderRadius: GlobalStyles.Border.br_lg,
    position: "absolute",
    width: "100%",
  },
  maskGroup236: {
    bottom: 13,
    top: 0,
  },
  rectangleParent: {
    bottom: 0,
    top: 0,
  },
  hello3: {
    top: "40%",
    left: "38.04%",
    fontSize: GlobalStyles.FontSize.size_lg,
    textTransform: "uppercase",
    color: GlobalStyles.Color.black,
    fontFamily: GlobalStyles.FontFamily.helvetica,
  },
  groupParent: {
    bottom: 88,
    height: 60,
  },
  groupItem: {
    right: 12,
    left: 74,
  },
  groupInner: {
    right: 255,
    left: 1,
  },
  helloParent: {
    width: 326,
    height: 673,
  },
  signUpPersonal1: {
    flex: 1,
    paddingLeft: GlobalStyles.Padding.padding_8xs,
    paddingTop: GlobalStyles.Padding.padding_5xl,
    paddingRight: GlobalStyles.Padding.padding_7xs,
    width: "100%",
    backgroundColor: GlobalStyles.Color.white,
  },
});

export default SignUpPersonal1;
