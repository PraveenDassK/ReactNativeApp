import * as React from "react";
import {
  Text,
  StyleSheet,
  Image,
  Pressable,
  TextInput,
  View,
} from "react-native";
import GlobalStyles from "../../GlobalStyles";
import Screen from "../components/Screen";

const SignUpPersonal = () => {
  return (
    <Screen>
    <View style={styles.signUpPersonal3}>
      <View style={styles.helloParent}>
        <Text style={[styles.hello, styles.helloTypo]}>
          Swipe up if already have an account
        </Text>
        <Image
          style={styles.iconIonicIosArrowDown}
          resizeMode="cover"
          source={require("../assets/icon-carbonytedownarrow.png")}
        />
        <Text style={[styles.hello1, styles.helloFlexBox]}>
          Sign In to your account
        </Text>
        <Text style={[styles.enterYourMobileNumber, styles.enterPosition]}>
          Enter your mobile number
        </Text>
        <Text style={[styles.hello2, styles.helloFlexBox, styles.helloTypo]}>
          <Text
            style={styles.weWillSend}
          >{`We will send an OTP to verify `}</Text>
          <Text style={styles.weWillSend}>{"\n"}your number and email ID.</Text>
        </Text>
        <Pressable style={styles.groupChild} />
        <Text style={[styles.hello3, styles.helloFlexBox]}>Continue</Text>
        <TextInput
          style={[styles.groupItem, styles.groupBorder]}
          keyboardType="numeric"
        />
        <TextInput
          style={[styles.groupInner, styles.groupBorder]}
          keyboardType="default"
        />
        <Text style={[styles.enterYourEmailId, styles.enterPosition]}>
          Enter your Email ID
        </Text>
      </View>
    </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  helloTypo: {
    color: GlobalStyles.Color.gray_700,
    fontSize: GlobalStyles.FontSize.size_base,
    // fontFamily: GlobalStyles.FontFamily.helvetica,
    top: "50%",
  },
  helloFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  enterPosition: {
    left: 1,
    textAlign: "left",
    color: GlobalStyles.Color.indigo_100,
    // fontFamily: GlobalStyles.FontFamily.helvetica,
    fontSize: GlobalStyles.FontSize.size_base,
    top: "50%",
    position: "absolute",
  },
  groupBorder: {
    height: 60,
    borderWidth: 1,
    borderColor: "#e8e8e8",
    borderStyle: "solid",
    backgroundColor: GlobalStyles.Color.white,
    left: 0,
    right: 1,
    borderRadius: GlobalStyles.Border.br_lg,
    top: "50%",
    position: "absolute",
  },
  hello: {
    marginTop: 322.5,
    left: 52,
    textAlign: "center",
    position: "absolute",
    color: GlobalStyles.Color.gray_700,
    fontSize: GlobalStyles.FontSize.size_base,
  },
  iconIonicIosArrowDown: {
    marginTop: 300.34,
    marginLeft: -3.66,
    left: "50%",
    width: 8,
    height: 5,
    top: "50%",
    position: "absolute",
  },
  hello1: {
    top: 0,
    left: 3,
    fontSize: GlobalStyles.FontSize.size_8xl,
    fontWeight: "700",
    color: GlobalStyles.Color.indigo_100,
    textAlign: "left",
  },
  enterYourMobileNumber: {
    marginTop: -194.5,
  },
  weWillSend: {
    margin: GlobalStyles.Margin.margin_8xs,
  },
  hello2: {
    marginTop: -289.02,
    left: 4,
    lineHeight: 20,
  },
  groupChild: {
    height: "8.92%",
    width: "99.85%",
    top: "81.98%",
    right: "0%",
    bottom: "9.1%",
    left: "0.15%",
    backgroundColor: GlobalStyles.Color.blue_100,
    borderRadius: GlobalStyles.Border.br_lg,
    position: "absolute",
  },
  hello3: {
    top: "85.55%",
    left: "38.13%",
    fontSize: GlobalStyles.FontSize.size_lg,
    textTransform: "uppercase",
    color: GlobalStyles.Color.white,
    // fontFamily: GlobalStyles.FontFamily.helvetica,
    textAlign: "left",
  },
  groupItem: {
    marginTop: -166.5,
  },
  groupInner: {
    marginTop: -54.38,
  },
  enterYourEmailId: {
    marginTop: -77.62,
  },
  helloParent: {
    width: "100%",
    height: 673,
  },
  arrowPosition: {
    top: "6%",
    position: "absolute",
  },
  arrowCircle: {
    marginTop: -10.11,
    marginRight: 303.54,
    width: 15,
    height: 15,
  },
  signUpPersonal3: {
    backgroundColor: GlobalStyles.Color.gray_300,
    flex: 1,
    width: "100%",
    paddingLeft: GlobalStyles.Padding.padding_8xs,
    paddingTop: GlobalStyles.Padding.padding_xs,
    paddingRight: GlobalStyles.Padding.padding_7xs,
    alignItems: "flex-end",
  },
});

export default SignUpPersonal;