import React, { useContext, useEffect, useState } from "react";
import { Text, StyleSheet, View, Pressable,Image, TextInput } from "react-native";
import GlobalStyles from "../../GlobalStyles";
import { horizontalScale, verticalScale, moderateScale } from "../config/scaling"


const VerifyCode = ({navigation}) => {
  const [one, setOne] = useState("")
  const [two, setTwo] = useState("")
  const [three, setThree] = useState("")
  const [four, setFour] = useState("")
  const [five, setFive] = useState("")
  const [six, setSix] = useState("")

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
        <View style={[styles.groupItem, styles.groupChildBorder]} >
          <TextInput
          textAlign="center"
          keyboardType="numeric"
          onChangeText={one => setOne(one)}
           />
        </View>

        <View style={[styles.groupInner, styles.groupChildBorder]} >
          <TextInput 
          textAlign="center"
          keyboardType="numeric"
          onChangeText={two => setTwo(two)}
           />
        </View>

        <View style={[styles.rectangleView, styles.groupChildBorder]} >
        <TextInput 
          textAlign="center"
          keyboardType="numeric"
          onChangeText={three => setThree(three)}
           />
        </View>
        <View style={[styles.groupChild1, styles.groupChildBorder]}>
        <TextInput 
          textAlign="center"
          keyboardType="numeric"
          onChangeText={four => setFour(four)}
           />
        </View>
        <View style={[styles.groupChild2, styles.groupChildBorder]}>
        <TextInput 
          textAlign="center"
          keyboardType="numeric"
          onChangeText={five => setFive(five)}
           />
        </View>
        <View style={[styles.groupChild3, styles.groupChildBorder]}>
        <TextInput 
          textAlign="center"
          keyboardType="numeric"
          onChangeText={six => setSix(six)}
           />
        </View>
        {/* <Text style={[styles.text, styles.textTypo]}>1</Text> */}
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
    top: "50%",
    textAlign: "left",
    position: "absolute",
  },
  groupParentPosition: {
    left: horizontalScale(0),
    right: horizontalScale(0),
    position: "absolute",
  },
  parentPosition: {
    bottom: verticalScale(0),
    left: horizontalScale(0),
    right: horizontalScale(0),
  },
  textTypo: {
    textAlign: "left",
    position: "absolute",
  },
  groupLayout: {
    height: "5%",
    width: "5%",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: GlobalStyles.Border.br_2xs,
    marginTop: verticalScale(-40.5),
    top: "50%",
    position: "absolute",
    backgroundColor: GlobalStyles.Color.white,
  },
  groupChildBorder: {
    borderColor: "#e8e8e8",
    height: verticalScale(45),
    width: horizontalScale(45),
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: moderateScale(7.5),
    marginTop: verticalScale(-43.5),
    top: "50%",
    position: "absolute",
    justifyContent: "space-evenly",
    backgroundColor: GlobalStyles.Color.white,
  },
  hello: {
    left: horizontalScale(2),
    fontSize: GlobalStyles.FontSize.size_8xl,
    fontWeight: "700",
    color: GlobalStyles.Color.indigo_100,
    textAlign: "left",
    top: verticalScale(0),
    position: "absolute",
  },
  hello1: {
    marginTop: verticalScale(-132.02),
    left: horizontalScale(3),
  },
  groupChild: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: GlobalStyles.Border.br_lg,
    backgroundColor: GlobalStyles.Color.blue_100,
    position: "absolute",
    width: "100%",
  },
  maskGroup236: {
    bottom: verticalScale(13),
    left: horizontalScale(0),
    right: horizontalScale(0),
    top: verticalScale(0),
  },
  rectangleParent: {
    top: verticalScale(0),
    bottom: verticalScale(0),
  },
  hello2: {
    top: "40%",
    left: "50%",
    marginLeft: horizontalScale(-25),
    fontSize: GlobalStyles.FontSize.size_lg,
    textTransform: "uppercase",
    color: "black",
  },
  groupParent: {
    height: verticalScale(60),
  },
  groupItem: {
    marginLeft: horizontalScale(-163),
    left: "50%",
  },
  groupInner: {
    marginLeft: horizontalScale(-103),
    //borderColor: "#ff4b4b",
    left: "50%",
  },
  rectangleView: {
    marginLeft: horizontalScale(-48),
    left: "50%",
  },
  groupChild1: {
    marginLeft: horizontalScale(61),
    left: "50%",
  },
  groupChild2: {
    marginLeft: horizontalScale(6),
    left: "50%",
  },
  groupChild3: {
    marginLeft: horizontalScale(116),
    left: "50%",
  },
  text: {
    marginTop: verticalScale(-38.5),
    left: horizontalScale(19),
    fontSize: 27,
    color: GlobalStyles.Color.blue_100,
    top: "50%",
  },
  resendCodeIn0010: {
    marginTop: verticalScale(14.5),
    left: horizontalScale(6),
  },
  helloParent: {
    width: "100%",
    height: "70%",
  },
  arrowPosition: {
    top: "6%",
    position: "absolute",
  },
  arrowCircle: {
    marginTop: verticalScale(-10.11),
    marginRight: horizontalScale(303.54),
    width: horizontalScale(15),
    height: verticalScale(15),
  },
  verifyCode: {
    flex: 1,
    paddingLeft: GlobalStyles.Padding.padding_7xs,
    paddingTop: GlobalStyles.Padding.padding_xl,
    paddingRight: GlobalStyles.Padding.padding_8xs,
    width: "100%",
    height: "80%",
    backgroundColor: GlobalStyles.Color.gray_100,
  },
});

export default VerifyCode;
