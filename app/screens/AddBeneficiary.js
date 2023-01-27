import React, { useContext, useEffect, useState} from "react";
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
import api from "../api/api_list"

const AddBeneficiary = ({navigation}) => {
  const [bankName, setBankName] = useState("")
  const [accountName, setAccountName] = useState("")
  const [iban, setIban] = useState("")
  const [sortCode, setSortCode] = useState("")
  const [accNum, setAccNum] = useState("")

  const addBene = async () => {
  const response = await api.AddBeneficiary();
    navigation.navigate("BankTransferAmount",
            {bankName: bankName,
              accountName: accountName,
            iban:iban,
            sortCode:sortCode,
          accNum: accNum})
    console.log(response)
  }
  
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

          onChangeText={bankName => setBankName(bankName)}/>
          <View style={[styles.groupChild, styles.lineViewPosition]} />
        </View>
        <View style={[styles.helloParent12, styles.groupPosition]}>
          <Text
            style={[styles.hello2, styles.helloTypo1, styles.helloPosition]}
          >
            Account Number
          </Text>
          <TextInput style={[styles.hello3, styles.helloTypo]} 
          placeholder={"Account Number"}

          onChangeText={accNum => setAccNum(accNum)}/>
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
          onChangeText = {accountName => setAccountName(accountName)}/>
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
          keyboardType="numeric"
          onChangeText={iban => setIban(iban)}/>
          <View style={[styles.groupChild, styles.lineViewPosition]} />
        </View>
        <Pressable
          style={[styles.groupFrame, styles.groupPosition]}
          onPress={() => addBene()}
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
            keyboardType="numeric"
            onChangeText={sortCode => setSortCode(sortCode)}
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
    bottom: 10,
    left: 0,
    right: 0,
    top: -10,
    position: "absolute",
  },
  groupPosition: {
    height: 60,
    left: 25,
    top: "50%",
    position: "absolute",
  },
  helloTypo1: {
    // fontFamily: GlobalStyles.FontFamily.helvetica,
    textAlign: "left",
    position: "absolute",
  },
  helloPosition: {
    top: 0,
    left: 0,
  },
  helloTypo: {
    fontSize: GlobalStyles.FontSize.size_6xl,
    // fontFamily: GlobalStyles.FontFamily.helvetica,
    textAlign: "left",
    color: GlobalStyles.Color.indigo_100,
    position: "absolute",
  },
  lineViewPosition: {
    height: 2,
    borderTopWidth: 1,
    borderColor: "#707070",
    borderStyle: "solid",
    bottom: -1,
    right: 0,
    position: "absolute",
  },
  hello: {
    marginLeft: -75.5,
    top: 39,
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
      width: 0,
      height: -3,
    },
    shadowRadius: 20,
    elevation: 20,
    shadowOpacity: 1,
    left: 0,
    backgroundColor: GlobalStyles.Color.white,
    bottom: 0,
  },
  groupWrapper: {
    left: 0,
  },
  hello2: {
    fontSize: GlobalStyles.FontSize.size_base,
    color: GlobalStyles.Color.gray_700,
    left: 0,
  },
  hello3: {
    top: 28,
    left: 1,
  },
  groupChild: {
    left: 0,
  },
  helloParent: {
    marginTop: -255.5,
    right: 40,
  },
  helloParent12: {
    marginTop: 135.5,
    right: 40,
  },
  helloGroup: {
    marginTop: -153.5,
    right: 40,
  },
  groupView: {
    marginTop: -50.5,
    right: 40,
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
    bottom: 13,
    left: 0,
    right: 0,
    top: 0,
    position: "absolute",
  },
  hello8: {
    top: "20.33%",
    left: "50%",
    marginLeft:-50,
    fontSize: GlobalStyles.FontSize.size_lg,
    textTransform: "uppercase",
    color: GlobalStyles.Color.black,
  },
  groupFrame: {
    marginTop: 234.5,
    right: 24,
  },
  helloFrame: {
    marginTop: 52.5,
    width: 73,
    height: 14,
    left: 25,
    top: "50%",
    position: "absolute",
  },
  hello10: {
    left: 0,
  },
  lineView: {
    left: -1,
  },
  helloParent1: {
    marginTop: 80.75,
    left: 26,
    height: 32,
    right: 40,
    top: "50%",
    position: "absolute",
  },
  historyParent: {
    top: 10,
    width: 300,
    left: 0,
  },
  iconContentLayout: {
    height: 16,
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
