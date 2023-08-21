import React,{ useLayoutEffect} from "react";
import { Text, StyleSheet, View, Image, Pressable } from "react-native";

import GlobalStyles from "../../GlobalStyles";

const AccountDummy = ({navigation}) => {


  useLayoutEffect(() => {
    unsubscribe = navigation.addListener('focus', () => {
      navigation.navigate("Dashboard")
    });
  },[])

  return (
    <View style={styles.account}>
    </View>
  );
};

const styles = StyleSheet.create({
  helloTypo: {
    // fontFamily: GlobalStyles.FontFamily.helvetica,
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
    borderColor: GlobalStyles.Color.backgroundColor,
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
    marginTop: -3,
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
    // fontFamily: GlobalStyles.FontFamily.helvetica,
    textAlign: "left",
    fontWeight: "700",
  },
  hello: {
    top: 0,
    color: GlobalStyles.Color.indigo_100,
    textAlign: "left",
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
    //fontFamily: GlobalStyles.FontFamily.helvetica,
  },
  hello2: {
    top: 28,
    color: GlobalStyles.Color.gray_700,
    fontSize: GlobalStyles.FontSize.size_base,
    textAlign: "left",
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
    marginTop: -70.5,
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
    width: "100%",
    height: "100%",
  },
  account: {
    flex: 1,
    paddingTop: GlobalStyles.Padding.padding_6xl,
    width: "100%",
    paddingLeft:"10%",
    paddingRight:"10%",
    backgroundColor: GlobalStyles.Color.gray_100,
  },
});

export default AccountDummy;
