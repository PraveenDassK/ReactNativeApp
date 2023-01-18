import React, { useContext, useEffect, useState } from "react";
import { View,
  KeyboardAvoidingView,
  TextInput,
  StyleSheet,
  Text,
  Platform,
  TouchableWithoutFeedback,
  Pressable,
  Keyboard, } from "react-native";
import GlobalStyles from "../../GlobalStyles";
// import { horizontalScale, verticalScale, moderateScale } from "../config/scaling"

const AddBeneficiary = ({navigation}) => {
  const [bankName, setBankName] = useState("")
  const [accountName, setAccountName] = useState("")
  const [iban, setIban] = useState("")
  const [sortCode, setSortCode] = useState("")

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View style={styles.addBeneficiary}>
      <View style={styles.groupParent}>
        <View style={[styles.groupWrapper, styles.wrapperPosition]}>
          <View style={[styles.helloWrapper, styles.wrapperPosition]}>
            <Text style={styles.hello}>Add Beneficiary</Text>
          </View>
        </View>
        <View style={[styles.groupWrapper, styles.wrapperPosition]}>
          <View style={[styles.helloWrapper, styles.wrapperPosition]}>
            <Text style={styles.hello}>Add Beneficiary</Text>
          </View>
        </View>
        <View style={[styles.helloParent, styles.groupPosition]}>
          <Text
            style={[styles.hello2, styles.helloTypo1, styles.helloPosition]}
          >
            Name of the Bank
          </Text>
          <TextInput style={[styles.hello3, styles.helloTypo]} 
          placeholder={"Bank Name"}
          onChangeText={newText => setBankName(newText)}/>
          <View style={[styles.groupChild, styles.lineViewPosition]} />
        </View>
        <View style={[styles.helloGroup, styles.groupPosition]}>
          <Text
            style={[styles.hello2, styles.helloTypo1, styles.helloPosition]}
          >
            Account Name
          </Text>
          <TextInput style={[styles.hello3, styles.helloTypo]} 
          placeholder={"Ortiz Tyrese"}
          onChangeText = {newText => setAccountName(newText)}/>
          <View style={[styles.groupChild, styles.lineViewPosition]} />
        </View>
        <View style={[styles.groupView, styles.groupPosition]}>
          <Text
            style={[styles.hello2, styles.helloTypo1, styles.helloPosition]}
          >
            International Bank Account Number (IBAN)
          </Text>
          <TextInput style={[styles.hello3, styles.helloTypo]}
          placeholder={"01234567890"}
          onChangeText={newText => setIban(newText)}/>
          <View style={[styles.groupChild, styles.lineViewPosition]} />
        </View>
        <Pressable
          style={[styles.groupFrame, styles.groupPosition]}
          onPress={() => navigation.navigate("BankTransferAmount")}
        >
          <View style={[styles.groupWrapper, styles.wrapperPosition]}>
            <View style={[styles.groupWrapper, styles.wrapperPosition]}>
              <View style={styles.rectangleView} />
              <View style={styles.maskGroup236} />
            </View>
            <Text style={[styles.hello8, styles.helloTypo1]}>Confirm</Text>
          </View>
        </Pressable>
        <View style={styles.helloFrame}>
          <Text
            style={[styles.hello2, styles.helloTypo1, styles.helloPosition]}
          >
            Sort Code
          </Text>
        </View>
        <View style={styles.helloParent1}>
          <TextInput
            style={[styles.hello10, styles.helloTypo, styles.helloPosition]}
            placeholder={"00 - 00 - 00"}
            onChangeText={newText => setSortCode(newText)}
          />
          <View style={[styles.lineView, styles.lineViewPosition]} />
        </View>
      </View>
    </View>
    </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapperPosition: {
    bottom: verticalScale(10),
    left: horizontalScale(0),
    right: horizontalScale(0),
    top: verticalScale(-10),
    position: "absolute",
  },
  groupPosition: {
    height: verticalScale(60),
    left: horizontalScale(25),
    top: "50%",
    position: "absolute",
  },
  helloTypo1: {
    // fontFamily: GlobalStyles.FontFamily.helvetica,
    textAlign: "left",
    position: "absolute",
  },
  helloPosition: {
    top: verticalScale(0),
    left: horizontalScale(0),
  },
  helloTypo: {
    fontSize: GlobalStyles.FontSize.size_6xl,
    // fontFamily: GlobalStyles.FontFamily.helvetica,
    textAlign: "left",
    color: GlobalStyles.Color.indigo_100,
    position: "absolute",
  },
  lineViewPosition: {
    height: verticalScale(2),
    borderTopWidth: 1,
    borderColor: "#707070",
    borderStyle: "solid",
    bottom: verticalScale(-1),
    right: horizontalScale(0),
    position: "absolute",
  },
  hello: {
    marginLeft: horizontalScale(-75.5),
    top: verticalScale(39),
    left: "50%",
    fontSize: GlobalStyles.FontSize.size_4xl,
    fontWeight: "700",
    textAlign: "left",
    color: GlobalStyles.Color.indigo_100,
    position: "absolute",
  },
  helloWrapper: {
    borderTopLeftRadius: GlobalStyles.Border.br_4xl,
    borderTopRightRadius: GlobalStyles.Border.br_4xl,
    shadowColor: "rgba(1, 1, 253, 0.1)",
    shadowOffset: {
      width: horizontalScale(0),
      height: verticalScale(-3),
    },
    shadowRadius: 20,
    elevation: 20,
    shadowOpacity: 1,
    left: horizontalScale(0),
    backgroundColor: GlobalStyles.Color.white,
    bottom: verticalScale(0),
  },
  groupWrapper: {
    left: horizontalScale(0),
  },
  hello2: {
    fontSize: GlobalStyles.FontSize.size_base,
    color: GlobalStyles.Color.gray_700,
    left: horizontalScale(0),
  },
  hello3: {
    top: verticalScale(28),
    left: horizontalScale(1),
  },
  groupChild: {
    left: horizontalScale(0),
  },
  helloParent: {
    marginTop: verticalScale(-255.5),
    right: horizontalScale(40),
  },
  helloGroup: {
    marginTop: verticalScale(-153.5),
    right: horizontalScale(40),
  },
  groupView: {
    marginTop: verticalScale(-50.5),
    right: horizontalScale(40),
  },
  rectangleView: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "10%",
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
    position: "absolute",
  },
  hello8: {
    top: "0.33%",
    left: "50%",
    marginLeft: horizontalScale(-20),
    fontSize: GlobalStyles.FontSize.size_lg,
    textTransform: "uppercase",
    color: GlobalStyles.Color.white,
  },
  groupFrame: {
    marginTop: verticalScale(234.5),
    right: horizontalScale(24),
  },
  helloFrame: {
    marginTop: verticalScale(52.5),
    width: horizontalScale(73),
    height: verticalScale(14),
    left: horizontalScale(25),
    top: "50%",
    position: "absolute",
  },
  hello10: {
    left: horizontalScale(0),
  },
  lineView: {
    left: horizontalScale(-1),
  },
  helloParent1: {
    marginTop: verticalScale(100.75),
    left: horizontalScale(26),
    height: verticalScale(32),
    right: horizontalScale(40),
    top: "50%",
    position: "absolute",
  },
  groupParent: {
    width: "100%",
    height: "110%",
  },
  addBeneficiary: {
    flex: 1,
    width: "100%",
    backgroundColor: GlobalStyles.Color.gray_100,
    paddingTop: GlobalStyles.Padding.padding_xs,
  },
});

export default AddBeneficiary;
