import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import GlobalStyles from "../GlobalStyles";

const Account = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.account}>
      <View style={styles.accountChild} />
      <View style={[styles.accountChild, styles.mt_812, styles.ml_9]} />
      <Text style={[styles.hello, styles.mt14, styles.ml30]}>Full Name</Text>
      <Text
        style={[styles.hello1, styles.mt_22, styles.ml290, styles.helloTypo]}
      >
        £0.00
      </Text>
      <Text style={[styles.hello2, styles.mt4, styles.ml30]}>Standard</Text>
      <Text style={[styles.hello3, styles.mt36, styles.ml27, styles.helloTypo]}>
        Manage
      </Text>
      <View style={[styles.rectangleParent, styles.mt18]}>
        <View style={[styles.groupChild, styles.limitsPosition]} />
        <View style={[styles.groupItem, styles.groupPosition]} />
        <View style={[styles.groupInner, styles.groupPosition]} />
        <Pressable
          style={[styles.statementsParent, styles.parentPosition]}
          onPress={() => navigation.navigate("Account1")}
        >
          <Text style={[styles.limits1Typo, styles.limitsPosition]}>
            Statements
          </Text>
          <Image
            style={[
              styles.iconIonicIosArrowForward,
              styles.iconPosition,
              styles.iconPosition1,
            ]}
            resizeMode="cover"
            source={require("../assets/icon-ioniciosarrowforward5.png")}
          />
        </Pressable>
        <View style={[styles.limitsParent, styles.parentPosition]}>
          <Pressable
            style={styles.limitsPosition}
            onPress={() => navigation.navigate("SpendingLimit3")}
          >
            <Text style={styles.limits1Typo}>Limits</Text>
          </Pressable>
          <Pressable
            style={[styles.iconPosition, styles.iconPosition1]}
            onPress={() => navigation.navigate("SpendingLimit3")}
          >
            <Image
              style={styles.icon}
              resizeMode="cover"
              source={require("../assets/icon-ioniciosarrowforward5.png")}
            />
          </Pressable>
        </View>
        <Pressable
          style={[
            styles.accountVerificationLetterParent,
            styles.parentPosition,
          ]}
          onPress={() => navigation.navigate("Account2")}
        >
          <Text style={styles.limitsPosition}>Account verification letter</Text>
          <Image
            style={[styles.iconIonicIosArrowForward2, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/icon-ioniciosarrowforward5.png")}
          />
        </Pressable>
      </View>
      <Image
        style={[styles.accountInner, styles.mt105]}
        resizeMode="cover"
        source={require("../assets/group-31123.png")}
      />
      <Pressable
        style={[styles.iconFeatherArrowLeftWrapper, styles.mt_766]}
        onPress={() => navigation.navigate("Settings")}
      >
        <Image
          style={styles.iconFeatherArrowLeft}
          resizeMode="cover"
          source={require("../assets/icon-featherarrowleft.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  mt_812: {
    marginTop: GlobalStyles.Margin.margin_61xs,
  },
  ml_9: {
    marginLeft: -9,
  },
  mt14: {
    marginTop: GlobalStyles.Margin.margin_9xs,
  },
  ml30: {
    marginLeft: GlobalStyles.Margin.margin_8xl,
  },
  mt_22: {
    marginTop: -22,
  },
  ml290: {
    marginLeft: 290,
  },
  mt4: {
    marginTop: GlobalStyles.Margin.margin_22xs,
  },
  mt36: {
    marginTop: GlobalStyles.Margin.margin_14xl,
  },
  ml27: {
    marginLeft: GlobalStyles.Margin.margin_5xl,
  },
  mt18: {
    marginTop: GlobalStyles.Margin.margin_3xs,
  },
  mt105: {
    marginTop: 105,
  },
  mt_766: {
    marginTop: GlobalStyles.Margin.margin_59xs,
  },
  helloTypo: {
    fontFamily: GlobalStyles.FontFamily.helvetica,
    textAlign: "left",
    fontWeight: "700",
  },
  limitsPosition: {
    left: 0,
    top: "50%",
    position: "absolute",
  },
  groupPosition: {
    height: 2,
    borderTopWidth: 1,
    borderColor: "#f6f5f8",
    borderStyle: "solid",
    right: 0,
    left: 0,
    top: "50%",
    position: "absolute",
  },
  parentPosition: {
    height: 16,
    left: 23,
    right: 23,
    position: "absolute",
  },
  iconPosition: {
    width: 6,
    right: 0,
    position: "absolute",
  },
  iconPosition1: {
    bottom: 2,
    top: 2,
    width: 6,
  },
  accountChild: {
    width: 375,
    height: 812,
    backgroundColor: GlobalStyles.Color.gray_300,
  },
  hello: {
    color: GlobalStyles.Color.indigo,
    textAlign: "left",
    fontFamily: GlobalStyles.FontFamily.typoGrotesk,
    fontWeight: "700",
    fontSize: GlobalStyles.FontSize.size_2xl,
  },
  hello1: {
    color: GlobalStyles.Color.blue,
    fontSize: GlobalStyles.FontSize.size_2xl,
    fontFamily: GlobalStyles.FontFamily.helvetica,
  },
  hello2: {
    color: GlobalStyles.Color.gray_800,
    fontSize: GlobalStyles.FontSize.size_sm,
    textAlign: "left",
    fontFamily: GlobalStyles.FontFamily.typoGrotesk,
  },
  hello3: {
    fontSize: GlobalStyles.FontSize.size_2xs,
    color: GlobalStyles.Color.gray_900,
  },
  groupChild: {
    marginTop: -77.5,
    right: 1,
    borderRadius: GlobalStyles.Border.br_4xl,
    height: 155,
    backgroundColor: GlobalStyles.Color.white,
  },
  groupItem: {
    marginTop: -29,
  },
  groupInner: {
    marginTop: 24,
  },
  limits1Typo: {
    width: 257,
    color: GlobalStyles.Color.gray_1300,
    lineHeight: 14,
    marginTop: -8,
    fontSize: GlobalStyles.FontSize.size_sm,
    fontFamily: GlobalStyles.FontFamily.helvetica,
    textAlign: "left",
    fontWeight: "700",
  },
  iconIonicIosArrowForward: {
    maxHeight: "100%",
  },
  statementsParent: {
    top: 17,
  },
  icon: {
    maxHeight: "100%",
    width: "100%",
  },
  limitsParent: {
    marginTop: -9.5,
    top: "50%",
    left: 23,
    right: 23,
  },
  iconIonicIosArrowForward2: {
    bottom: 0,
    height: 11,
  },
  accountVerificationLetterParent: {
    bottom: 20,
  },
  rectangleParent: {
    width: 327,
    alignSelf: "center",
    height: 155,
  },
  accountInner: {
    width: 326,
    height: 1,
    alignSelf: "center",
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
  account: {
    flex: 1,
    width: "100%",
    backgroundColor: GlobalStyles.Color.white,
  },
});

export default Account;
