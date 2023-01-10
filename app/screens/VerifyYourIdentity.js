import * as React from "react";
import { Text, StyleSheet, View, Pressable, Image } from "react-native";
import Screen from "../components/Screen";
import GlobalStyles from "../../GlobalStyles";

const VerifyYourIdentity = () => {
  

  return (
    <Screen>
    <View style={styles.verifyYourIdentity}>
      <View style={styles.helloParent}>
        <Text style={styles.hello}>Verify your identity</Text>
        <Text style={[styles.hello1, styles.helloTypo, styles.helloTypo1]}>
          <Text style={styles.whereYouWould}>
            Where you would like Carbonyte to send you the
          </Text>
          <Text style={styles.whereYouWould}>verification code.</Text>
        </Text>
        <Pressable
          style={[styles.groupParent, styles.parentPosition]}
          onPress={() => navigation.navigate("VerifyCode")}
        >
          <View style={[styles.rectangleParent, styles.parentPosition]}>
            <View style={[styles.groupChild, styles.groupChildLayout]} />
            <View style={styles.maskGroup236} />
          </View>
          <Text style={[styles.hello2, styles.helloTypo]}>Submit</Text>
        </Pressable>
        <View style={[styles.helloGroup, styles.groupPosition]}>
          <Text style={[styles.hello3, styles.helloTypo, styles.helloTypo1]}>
            Text
          </Text>
          <View
            style={[
              styles.iconMaterialTextsmsWrapper,
              styles.groupChildLayout,
              styles.parentPosition,
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
            style={[styles.groupItem, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/component-226--1.png")}
          />
        </View>
        <View style={[styles.helloContainer, styles.groupPosition]}>
          <Text style={[styles.hello3, styles.helloTypo, styles.helloTypo1]}>
            Phone
          </Text>
          <View
            style={[
              styles.iconMaterialTextsmsWrapper,
              styles.groupChildLayout,
              styles.parentPosition,
            ]}
          >
            <Image
              style={[styles.iconAwesomePhoneVolume, styles.iconPosition]}
              resizeMode="cover"
              source={require("../assets/icon-awesomephonevolume.png")}
            />
          </View>
          <Image
            style={[styles.groupItem, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/component-226--1.png")}
          />
        </View>
        <View style={[styles.groupView, styles.groupPosition]}>
          <Text style={[styles.hello3, styles.helloTypo, styles.helloTypo1]}>
            Email
          </Text>
          <View
            style={[
              styles.iconMaterialTextsmsWrapper,
              styles.groupChildLayout,
              styles.parentPosition,
            ]}
          >
            <Image
              style={[styles.iconMaterialEmail, styles.iconPosition1]}
              resizeMode="cover"
              source={require("../assets/icon-materialemail.png")}
            />
          </View>
          <Image
            style={[styles.groupItem, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/component-226--1.png")}
          />
        </View>
        <View style={[styles.lineView, styles.lineViewPosition]} />
        <View style={[styles.groupChild1, styles.lineViewPosition]} />
      </View>
    </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  helloTypo: {
    // fontFamily: GlobalStyles.FontFamily.helvetica,
    position: "absolute",
  },
  helloTypo1: {
    fontSize: GlobalStyles.FontSize.size_base,
    // fontFamily: GlobalStyles.FontFamily.helvetica,
  },
  parentPosition: {
    bottom: 0,
    left: 0,
  },
  groupChildLayout: {
    borderRadius: GlobalStyles.Border.br_lg,
    position: "absolute",
  },
  groupPosition: {
    height: 49,
    right: 8,
    left: 3,
    top: "50%",
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
  lineViewPosition: {
    height: 2,
    borderTopWidth: 1,
    borderColor: "#fff",
    borderStyle: "solid",
    right: 9,
    left: 3,
    top: "50%",
    position: "absolute",
  },
  hello: {
    left: 2,
    fontSize: GlobalStyles.FontSize.size_8xl,
    fontWeight: "700",
    // fontFamily: GlobalStyles.FontFamily.typoGrotesk,
    textAlign: "left",
    color: GlobalStyles.Color.indigo_100,
    top: 0,
    position: "absolute",
  },
  whereYouWould: {
    margin: GlobalStyles.Margin.margin_8xs,
  },
  hello1: {
    marginTop: -187.52,
    lineHeight: 20,
    color: GlobalStyles.Color.gray_700,
    left: 3,
    fontSize: GlobalStyles.FontSize.size_base,
    top: "50%",
    textAlign: "left",
  },
  groupChild: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    backgroundColor: GlobalStyles.Color.blue_100,
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
    left: 0,
    right: 0,
    top: 0,
    position: "absolute",
  },
  hello2: {
    top: "40%",
    left: "41.41%",
    fontSize: GlobalStyles.FontSize.size_lg,
    textTransform: "uppercase",
    color: GlobalStyles.Color.white,
    textAlign: "left",
  },
  groupParent: {
    height: 60,
    left: 0,
    right: 0,
    position: "absolute",
  },
  hello3: {
    top: "38.78%",
    left: "20.32%",
    lineHeight: 14,
    textAlign: "center",
    color: GlobalStyles.Color.indigo_100,
  },
  iconMaterialTextsms: {
    width: 20,
    left: "50%",
  },
  iconMaterialTextsmsWrapper: {
    width: 49,
    left: 0,
    top: 0,
    backgroundColor: GlobalStyles.Color.white,
  },
  groupItem: {
    width: 20,
    right: 0,
  },
  helloGroup: {
    marginTop: -96,
  },
  iconAwesomePhoneVolume: {
    marginLeft: -7.5,
    width: 15,
    left: "50%",
  },
  helloContainer: {
    marginTop: -16,
  },
  iconMaterialEmail: {
    marginTop: -7.5,
    height: 16,
    width: 20,
    left: "50%",
    top: "50%",
    marginLeft: -9.5,
    position: "absolute",
  },
  groupView: {
    marginTop: 64,
  },
  lineView: {
    marginTop: -32.52,
  },
  groupChild1: {
    marginTop: 47.52,
  },
  helloParent: {
    width: 326,
    height: 462,
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
  verifyYourIdentity: {
    flex: 1,
    paddingLeft: GlobalStyles.Padding.padding_7xs,
    paddingTop: GlobalStyles.Padding.padding_xl,
    paddingRight: GlobalStyles.Padding.padding_8xs,
    width: "100%",
    backgroundColor: GlobalStyles.Color.gray_100,
  },
});

export default VerifyYourIdentity;
