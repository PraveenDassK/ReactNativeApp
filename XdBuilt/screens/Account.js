import * as React from "react";
import { Text, StyleSheet, View, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import GlobalStyles from "../GlobalStyles";

const Account = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.account}>
      <View style={styles.helloParent}>
        <Text style={styles.hello}>Full Name</Text>
        <Text style={[styles.hello1, styles.helloTypo]}>£0.00</Text>
        <Text style={styles.hello2}>Standard</Text>
        <Text style={[styles.hello3, styles.helloTypo]}>Manage</Text>
        <View style={[styles.rectangleParent, styles.groupChildPosition]}>
          <View style={[styles.groupChild, styles.groupChildPosition]} />
          <View style={[styles.groupItem, styles.groupPosition]} />
          <View style={[styles.groupInner, styles.groupPosition]} />
          <Pressable
            style={[styles.statementsParent, styles.parentPosition]}
            onPress={() => navigation.navigate("Account1")}
          >
            <Text
              style={[
                styles.limits1Typo,
                styles.limits1SpaceBlock,
                styles.limitsPosition,
              ]}
            >
              Statements
            </Text>
            <Image
              style={[styles.iconIonicIosArrowForward, styles.iconPosition]}
              resizeMode="cover"
              source={require("../assets/icon-ioniciosarrowforward.png")}
            />
          </Pressable>
          <View style={[styles.limitsParent, styles.parentPosition]}>
            <Pressable
              style={styles.limitsPosition}
              onPress={() => navigation.navigate("SpendingLimit3")}
            >
              <Text style={[styles.limits1Typo, styles.limits1SpaceBlock]}>
                Limits
              </Text>
            </Pressable>
            <Pressable
              style={[styles.iconIonicIosArrowForward, styles.iconPosition]}
              onPress={() => navigation.navigate("SpendingLimit3")}
            >
              <Image
                style={styles.icon}
                resizeMode="cover"
                source={require("../assets/icon-ioniciosarrowforward.png")}
              />
            </Pressable>
          </View>
          <Pressable
            style={styles.accountVerificationLetterParent}
            onPress={() => navigation.navigate("Account2")}
          >
            <Text
              style={[
                styles.accountVerificationLetter,
                styles.limits1Typo,
                styles.limitsPosition,
              ]}
            >
              Account verification letter
            </Text>
            <Image
              style={[styles.iconIonicIosArrowForward, styles.iconPosition]}
              resizeMode="cover"
              source={require("../assets/icon-ioniciosarrowforward.png")}
            />
          </Pressable>
        </View>
        <Image
          style={[styles.groupIcon, styles.iconPosition]}
          resizeMode="cover"
          source={require("../assets/group-31123.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  helloTypo: {
    fontFamily: GlobalStyles.FontFamily.helvetica,
    textAlign: "left",
    fontWeight: "700",
    position: "absolute",
  },
  groupChildPosition: {
    height: 155,
    left: 0,
    top: "50%",
    position: "absolute",
  },
  groupPosition: {
    height: 2,
    borderTopWidth: 1,
    borderColor: "#f6f5f8",
    borderStyle: "solid",
    left: 0,
    right: 0,
    top: "50%",
    position: "absolute",
  },
  parentPosition: {
    height: 14,
    left: 23,
    right: 23,
    position: "absolute",
  },
  limits1SpaceBlock: {
    marginTop: -7,
    color: GlobalStyles.Color.gray_1400,
    lineHeight: 14,
  },
  limitsPosition: {
    left: 0,
    top: "50%",
    position: "absolute",
  },
  iconPosition: {
    position: "absolute",
    right: 0,
  },
  limits1Typo: {
    width: 257,
    color: GlobalStyles.Color.gray_1400,
    lineHeight: 14,
    fontSize: GlobalStyles.FontSize.size_base,
    fontFamily: GlobalStyles.FontFamily.helvetica,
    textAlign: "left",
    fontWeight: "700",
  },
  hello: {
    top: 0,
    color: GlobalStyles.Color.indigo_100,
    textAlign: "left",
    fontFamily: GlobalStyles.FontFamily.typoGrotesk,
    fontWeight: "700",
    left: 6,
    fontSize: GlobalStyles.FontSize.size_4xl,
    position: "absolute",
  },
  hello1: {
    top: 1,
    right: 10,
    color: GlobalStyles.Color.blue_100,
    fontSize: GlobalStyles.FontSize.size_4xl,
    fontFamily: GlobalStyles.FontFamily.helvetica,
  },
  hello2: {
    top: 28,
    color: GlobalStyles.Color.gray_700,
    fontSize: GlobalStyles.FontSize.size_base,
    textAlign: "left",
    fontFamily: GlobalStyles.FontFamily.typoGrotesk,
    left: 6,
    position: "absolute",
  },
  hello3: {
    marginTop: -104.25,
    left: 3,
    fontSize: GlobalStyles.FontSize.size_xs,
    color: GlobalStyles.Color.gray_800,
    top: "50%",
  },
  groupChild: {
    marginTop: -77.5,
    right: 1,
    borderRadius: GlobalStyles.Border.br_5xl,
    backgroundColor: GlobalStyles.Color.white,
  },
  groupItem: {
    marginTop: -29,
  },
  groupInner: {
    marginTop: 24,
  },
  iconIonicIosArrowForward: {
    bottom: 0,
    width: 6,
    height: 11,
    right: 0,
  },
  statementsParent: {
    top: 17,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  limitsParent: {
    marginTop: -9.5,
    top: "50%",
  },
  accountVerificationLetter: {
    marginTop: -7.83,
  },
  accountVerificationLetterParent: {
    bottom: 20,
    height: 16,
    left: 23,
    right: 23,
    position: "absolute",
  },
  rectangleParent: {
    marginTop: -74.25,
    right: 0,
  },
  groupIcon: {
    bottom: -1,
    left: 1,
    maxWidth: "100%",
    overflow: "hidden",
    height: 1,
    right: 0,
  },
  helloParent: {
    width: 327,
    height: 371,
  },
  account: {
    flex: 1,
    paddingLeft: GlobalStyles.Padding.padding_8xs,
    paddingTop: GlobalStyles.Padding.padding_7xl,
    paddingRight: GlobalStyles.Padding.padding_8xs,
    alignItems: "center",
    width: "100%",
    backgroundColor: GlobalStyles.Color.white,
  },
});

export default Account;
