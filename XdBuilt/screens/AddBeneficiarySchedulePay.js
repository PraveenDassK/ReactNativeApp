import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import GlobalStyles from "../GlobalStyles";

const AddBeneficiarySchedulePay = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.addBeneficiarySchedulePay}>
      <View style={styles.addBeneficiarySchedulePayInner}>
        <View style={[styles.helloWrapper, styles.groupParentPosition]}>
          <Text style={styles.hello}>Bank Details</Text>
        </View>
      </View>
      <View style={[styles.helloContainer, styles.mt43, styles.ml25]}>
        <Text style={[styles.hello1, styles.helloTypo1, styles.helloPosition]}>
          Sort Code
        </Text>
      </View>
      <View style={[styles.helloParent, styles.mt_630, styles.ml25]}>
        <Text style={[styles.hello1, styles.helloTypo1, styles.helloPosition]}>
          Name of the Bank
        </Text>
        <Text style={[styles.hello3, styles.helloTypo]}>Bank Name</Text>
        <View style={[styles.groupChild, styles.lineViewPosition]} />
      </View>
      <View style={[styles.helloParent, styles.mt42, styles.ml25]}>
        <Text style={[styles.hello1, styles.helloTypo1, styles.helloPosition]}>
          Account Name
        </Text>
        <Text style={[styles.hello3, styles.helloTypo]}>Ortiz Tyrese</Text>
        <View style={[styles.groupChild, styles.lineViewPosition]} />
      </View>
      <View style={[styles.helloParent, styles.mt43, styles.ml25]}>
        <Text style={[styles.hello1, styles.helloTypo1, styles.helloPosition]}>
          International Bank Account Number (IBAN)
        </Text>
        <Text style={[styles.hello3, styles.helloTypo]}>01234567890</Text>
        <View style={[styles.groupChild, styles.lineViewPosition]} />
      </View>
      <View style={[styles.helloParent1, styles.mt14, styles.ml26]}>
        <Text style={[styles.hello8, styles.helloTypo, styles.helloPosition]}>
          00 - 00 - 00
        </Text>
        <View style={[styles.lineView, styles.lineViewPosition]} />
      </View>
      <Pressable
        style={[
          styles.addBeneficiarySchedulePayChild,
          styles.mt152,
          styles.ml25,
        ]}
        onPress={() => navigation.navigate("SendAccountSelection")}
      >
        <View style={[styles.groupParent, styles.groupParentPosition]}>
          <View style={[styles.groupParent, styles.groupParentPosition]}>
            <View style={styles.rectangleView} />
            <View style={styles.maskGroup236} />
          </View>
          <Text style={[styles.hello9, styles.helloTypo1]}>Confirm</Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  mt43: {
    marginTop: GlobalStyles.Margin.margin_xl,
  },
  ml25: {
    marginLeft: GlobalStyles.Margin.margin_2xs,
  },
  mt_630: {
    marginTop: -630,
  },
  mt42: {
    marginTop: 42,
  },
  mt14: {
    marginTop: 14,
  },
  ml26: {
    marginLeft: 26,
  },
  mt152: {
    marginTop: 152,
  },
  groupParentPosition: {
    bottom: 0,
    left: 0,
    right: 0,
    top: 0,
    position: "absolute",
  },
  helloTypo1: {
    fontFamily: GlobalStyles.FontFamily.helvetica,
    textAlign: "left",
    position: "absolute",
  },
  helloPosition: {
    top: 0,
    left: 0,
  },
  helloTypo: {
    fontSize: GlobalStyles.FontSize.size_6xl,
    fontFamily: GlobalStyles.FontFamily.helvetica,
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
    marginLeft: -56.5,
    top: 39,
    left: "50%",
    fontSize: GlobalStyles.FontSize.size_4xl,
    fontWeight: "700",
    fontFamily: GlobalStyles.FontFamily.typoGrotesk,
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
  addBeneficiarySchedulePayInner: {
    width: 375,
    height: 749,
  },
  hello1: {
    fontSize: GlobalStyles.FontSize.size_base,
    color: GlobalStyles.Color.gray_700,
    left: 0,
  },
  helloContainer: {
    width: 63,
    height: 14,
  },
  hello3: {
    top: 28,
    left: 1,
  },
  groupChild: {
    left: 0,
  },
  helloParent: {
    width: 311,
    height: 60,
  },
  hello8: {
    left: 0,
  },
  lineView: {
    left: -1,
  },
  helloParent1: {
    width: 310,
    height: 32,
  },
  rectangleView: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: GlobalStyles.Border.br_lg,
    backgroundColor: GlobalStyles.Color.gray_500,
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
  groupParent: {
    left: 0,
  },
  hello9: {
    top: "40%",
    left: "39.26%",
    fontSize: GlobalStyles.FontSize.size_lg,
    textTransform: "uppercase",
    color: GlobalStyles.Color.black,
  },
  addBeneficiarySchedulePayChild: {
    width: 326,
    height: 60,
  },
  addBeneficiarySchedulePay: {
    flex: 1,
    paddingTop: GlobalStyles.Padding.padding_md,
    width: "100%",
    backgroundColor: GlobalStyles.Color.white,
  },
});

export default AddBeneficiarySchedulePay;
