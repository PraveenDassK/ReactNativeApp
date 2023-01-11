import * as React from "react";
import { Text, StyleSheet, Image, View, Pressable,TextInput } from "react-native";

import GlobalStyles from "../../GlobalStyles";

const AddFunds = ({navigation}) =>{
  return (
    <Pressable
      style={styles.addFunds}
      onPress={() => navigation.navigate("Account3")}
    >
      <View style={styles.helloParent}>
        <Text style={styles.hello}>Add Funds</Text>
        <View style={[styles.groupParent, styles.parentPosition]}>
          <View style={styles.helloGroup}>
            <Text style={[styles.hello1, styles.helloColor, styles.helloTypo1]}>
              £20
            </Text>
            <Image
              style={[styles.groupChild, styles.groupPosition1]}
              resizeMode="cover"
              source={require("../assets/icon-doubleup.png")}
            />
          </View>
          <View style={styles.helloContainer}>
            <Text style={[styles.hello1, styles.helloColor, styles.helloTypo1]}>
              £50
            </Text>
            <Image
              style={[styles.groupItem, styles.groupPosition1]}
              resizeMode="cover"
              source={require("../assets/icon-doubleup.png")}
            />
          </View>
          <View style={[styles.groupView, styles.groupViewPosition]}>
            <Text style={[styles.hello1, styles.helloColor, styles.helloTypo1]}>
              £100
            </Text>
            <Image
              style={[styles.groupInner, styles.groupPosition1]}
              resizeMode="cover"
              source={require("../assets/icon-doubleup.png")}
            />
          </View>
        </View>
        <View style={[styles.helloParent1, styles.parentPosition]}>
          <Text style={[styles.hello4, styles.helloColor, styles.helloTypo1]}>
            Pay
          </Text>
        
          <View style={styles.lineView} />
        </View>
        <View style={[styles.helloParent11, styles.parentPosition]}>
          <TextInput style={[styles.hello5, styles.helloTypo1]} placeholder={"£100"}>
            
          </TextInput>
        </View>
        <View style={[styles.helloParent2, styles.iconPosition]}>
          <TextInput style={[styles.hello6, styles.helloTypo]} placeholder={"Add a note"}/>
          <Image
            style={[styles.iconMaterialKeyboardVoice, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/icon-speech.png")}
          />
        </View>
        <View style={[styles.groupContainer, styles.groupPosition]}>
          <View
            style={[
              styles.iconIonicIosArrowForwardWrapper,
              styles.rectangleViewLayout,
              styles.groupViewPosition,
            ]}
          >
            <Image
              style={[styles.iconIonicIosArrowForward, styles.iconPosition]}
              resizeMode="cover"
              source={require("../assets/icon-carbonytearrowforward.png")}
            />
          </View>
          <Text style={[styles.hello7, styles.helloTypo]}>Select Account</Text>
          <View style={styles.helloParent3}>
            <Text
              style={[styles.hello8, styles.helloPosition, styles.helloColor]}
            >
              XYZ Card
            </Text>
            <Text style={[styles.hello9, styles.helloPosition]}>
              £12,534.00
            </Text>
            <Image
              style={[styles.iconFeatherCreditCard, styles.iconPosition]}
              resizeMode="cover"
              source={require("../assets/icon-outlinecreditcard.png")}
            />
          </View>
        </View>
        <Pressable
          style={[styles.groupPressable, styles.groupPosition]}
          onPress={() => navigation.navigate("ReviewAndConfirm")}
        >
          <View style={[styles.rectangleParent, styles.groupViewPosition]}>
            <View style={[styles.rectangleView, styles.rectangleViewLayout]} />
            <View style={styles.maskGroup236} />
          </View>
          <Text style={[styles.hello10, styles.helloTypo1]}>Add Funds</Text>
        </Pressable>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  parentPosition: {
    left: 33,
    top: "50%",
    position: "absolute",
    paddingRight: 120,
  },
  helloColor: {
    color: GlobalStyles.Color.gray_700,
    top: 0,
  },
  helloTypo1: {
    // fontFamily: GlobalStyles.FontFamily.helvetica,
    position: "absolute",
  },
  groupPosition1: {
    height: 17,
    width: 18,
    left: "40%",
    bottom: 0,
    position: "absolute",
  },
  groupViewPosition: {
    bottom: 0,
    right: 0,
  },
  iconPosition: {
    top: "50%",
    position: "absolute",
  },
  helloTypo: {
    fontSize: GlobalStyles.FontSize.size_base,
    color: GlobalStyles.Color.gray_700,
    // fontFamily: GlobalStyles.FontFamily.helvetica,
    textAlign: "left",
    position: "absolute",
  },
  groupPosition: {
    left: 45,
    position: "absolute",
  },
  rectangleViewLayout: {
    borderRadius: GlobalStyles.Border.br_lg,
    position: "absolute",
  },
  helloPosition: {
    left: 44,
    // fontFamily: GlobalStyles.FontFamily.helvetica,
    textAlign: "left",
    position: "absolute",
  },
  hello: {
    top: 39,
    left: 138,
    fontSize: GlobalStyles.FontSize.size_4xl,
    fontWeight: "700",
    textAlign: "left",
    color: GlobalStyles.Color.indigo_100,
    position: "absolute",
  },
  hello1: {
    fontSize: GlobalStyles.FontSize.size_7xl,
    lineHeight: 32,
    left: 10,
    textAlign: "left",
  },
  groupChild: {
    marginLeft: -7.94,
  },
  helloGroup: {
    width: 80,
    left: 40,
    bottom: 0,
    top: 0,
    position: "absolute",
  },
  groupItem: {
    marginLeft: -7.71,
  },
  helloContainer: {
    marginLeft: 37.5,
    left: "50%",
    width: 80,
    bottom: 0,
    top: 0,
    position: "absolute",
  },
  groupInner: {
    marginLeft: -7.22,
  },
  groupView: {
    width: 80,
    right: 0,
    top: 0,
    position: "absolute",
  },
  groupParent: {
    marginTop: 149,
    height: 50,
    right: 31,
  },
  hello4: {
    left: 142,
    fontSize: GlobalStyles.FontSize.size_xl,
    textAlign: "left",
  },
  hello5: {
    top: 18,
    left: 108,
    fontSize: GlobalStyles.FontSize.size_12xl,
    lineHeight: 57,
    color: GlobalStyles.Color.blue_100,
    textAlign: "left",
  },
  lineView: {
    bottom: -1,
    left: -1,
    borderStyle: "solid",
    borderColor: "#707070",
    borderTopWidth: 1,
    height: 2,
    right: 0,
    position: "absolute",
  },
  helloParent1: {
    marginTop: -105.5,
    right: 32,
    height: 98,
  },
  helloParent11: {
    marginTop: -75.5,
    right: 32,
    height: 178,
    width: 300,
  },
  hello6: {
    left: 13,
    top: 10,
  },
  iconMaterialKeyboardVoice: {
    marginTop: -9.35,
    right: 16,
    width: 14,
    height: 19,
  },
  helloParent2: {
    marginTop: 15.5,
    left: 32,
    borderRadius: GlobalStyles.Border.br_5xl,
    height: 42,
    backgroundColor: GlobalStyles.Color.gray_200,
    right: 31,
  },
  iconIonicIosArrowForward: {
    marginTop: -3,
    right: 14,
    width: 11,
    height: 6,
  },
  iconIonicIosArrowForwardWrapper: {
    top: 19,
    backgroundColor: GlobalStyles.Color.gray_200,
    right: 0,
    left: 0,
  },
  hello7: {
    left: 0,
    top: 0,
  },
  hello8: {
    fontSize: GlobalStyles.FontSize.size_xs,
  },
  hello9: {
    fontSize: GlobalStyles.FontSize.size_2xl,
    top: 15,
    color: GlobalStyles.Color.indigo_100,
  },
  iconFeatherCreditCard: {
    marginTop: -11.5,
    width: 29,
    height: 21,
    left: 0,
  },
  helloParent3: {
    bottom: 7,
    left: 14,
    width: 134,
    height: 33,
    position: "absolute",
  },
  groupContainer: {
    top: 93,
    right: 25,
    height: 69,
  },
  rectangleView: {
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
    right: 0,
    left: 0,
    top: 0,
    position: "absolute",
  },
  rectangleParent: {
    right: 0,
    left: 0,
    top: 0,
    position: "absolute",
  },
  hello10: {
    top: "30%",
    left: "36.5%",
    fontSize: GlobalStyles.FontSize.size_lg,
    textTransform: "uppercase",
    color: GlobalStyles.Color.white,
    textAlign: "center",
  },
  groupPressable: {
    right: 24,
    bottom: 59,
    height: 60,
  },
  helloParent: {
    borderTopLeftRadius: GlobalStyles.Border.br_6xl,
    borderTopRightRadius: GlobalStyles.Border.br_6xl,
    shadowColor: "rgba(1, 1, 253, 0.05)",
    shadowOffset: {
      width: 0,
      height: -10,
    },
    shadowRadius: 50,
    elevation: 50,
    shadowOpacity: 1,
    width: 375,
    height: 749,
    backgroundColor: GlobalStyles.Color.white,
  },
  addFunds: {
    flex: 1,
    paddingTop: GlobalStyles.Padding.padding_19xs,
    width: "100%",
    backgroundColor: GlobalStyles.Color.white,
  },
});

export default AddFunds;
