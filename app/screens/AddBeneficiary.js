import * as React from "react";
import { Text, StyleSheet, View, Pressable,TextInput } from "react-native";
import Screen from "../components/Screen";
import GlobalStyles from "../../GlobalStyles";

const AddBeneficiary = () => {
  

  return (
    <Screen>
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
          <TextInput style={[styles.hello3, styles.helloTypo]} placeholder={"Bank Name"}/>
          <View style={[styles.groupChild, styles.lineViewPosition]} />
        </View>
        <View style={[styles.helloGroup, styles.groupPosition]}>
          <Text
            style={[styles.hello2, styles.helloTypo1, styles.helloPosition]}
          >
            Account Name
          </Text>
          <TextInput style={[styles.hello3, styles.helloTypo]} placeholder={"Ortiz Tyrese"}/>
          <View style={[styles.groupChild, styles.lineViewPosition]} />
        </View>
        <View style={[styles.groupView, styles.groupPosition]}>
          <Text
            style={[styles.hello2, styles.helloTypo1, styles.helloPosition]}
          >
            International Bank Account Number (IBAN)
          </Text>
          <TextInput style={[styles.hello3, styles.helloTypo]}placeholder={"01234567890"}/>
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
          />
          <View style={[styles.lineView, styles.lineViewPosition]} />
        </View>
      </View>
    </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  wrapperPosition: {
    bottom: 0,
    left: 0,
    right: 0,
    top: 0,
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
    bottom: "0%",
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
    top: "43.33%",
    left: "39.26%",
    fontSize: GlobalStyles.FontSize.size_lg,
    textTransform: "uppercase",
    color: GlobalStyles.Color.white,
  },
  groupFrame: {
    marginTop: 264.5,
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
  groupParent: {
    width: 375,
    height: 749,
  },
  addBeneficiary: {
    flex: 1,
    paddingTop: GlobalStyles.Padding.padding_3xs,
    width: "100%",
    backgroundColor: GlobalStyles.Color.white,
  },
});

export default AddBeneficiary;
