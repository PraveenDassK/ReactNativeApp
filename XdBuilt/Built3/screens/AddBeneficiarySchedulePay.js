import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import GlobalStyles from "../GlobalStyles";

const AddBeneficiarySchedulePay = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.addBeneficiarySchedulePay}>
      <View style={styles.addBeneficiarySchedulePayInner}>
        <View style={[styles.rectangleParent, styles.groupPosition1]}>
          <View style={[styles.groupChild, styles.groupPosition1]} />
          <View style={[styles.groupItem, styles.groupPosition1]} />
          <Text style={styles.hello}>Bank Details</Text>
        </View>
      </View>
      <View
        style={[
          styles.addBeneficiarySchedulePayChild,
          styles.mt_739_5,
          styles.ml153,
        ]}
      />
      <View style={[styles.helloWrapper, styles.mt41_5, styles.ml25]}>
        <Text style={[styles.hello1, styles.helloTypo1]}>Sort Code</Text>
      </View>
      <View style={[styles.helloParent, styles.mt101_5, styles.ml25]}>
        <Text style={[styles.hello1, styles.helloTypo1]}>Name of the Bank</Text>
        <Text style={[styles.hello3, styles.helloTypo]}>Bank Name</Text>
        <View style={[styles.groupInner, styles.groupPosition]} />
      </View>
      <View style={[styles.helloParent, styles.mt40_5, styles.ml25]}>
        <Text style={[styles.hello1, styles.helloTypo1]}>Account Name</Text>
        <Text style={[styles.hello3, styles.helloTypo]}>Ortiz Tyrese</Text>
        <View style={[styles.groupInner, styles.groupPosition]} />
      </View>
      <View style={[styles.helloParent, styles.mt41_5, styles.ml25]}>
        <Text style={[styles.hello1, styles.helloTypo1]}>
          International Bank Account Number (IBAN)
        </Text>
        <Text style={[styles.hello3, styles.helloTypo]}>01234567890</Text>
        <View style={[styles.groupInner, styles.groupPosition]} />
      </View>
      <View style={[styles.groupView, styles.mt10_5, styles.ml26]}>
        <Text style={[styles.hello8, styles.helloTypo]}>00 - 00 - 00</Text>
        <View style={[styles.groupChild2, styles.groupPosition]} />
      </View>
      <Pressable
        style={[styles.groupPressable, styles.mt152_5, styles.ml25]}
        onPress={() => navigation.navigate("SendAccountSelection")}
      >
        <View style={[styles.rectangleParent, styles.groupPosition1]}>
          <View style={[styles.rectangleParent, styles.groupPosition1]}>
            <View style={[styles.rectangleGroup, styles.groupPosition2]}>
              <View style={styles.rectangleView} />
              <View style={[styles.maskGroup236, styles.groupPosition2]} />
            </View>
          </View>
          <Text style={[styles.hello9, styles.helloTypo1]}>Confirm</Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  mt_739_5: {
    marginTop: GlobalStyles.Margin.margin_57xs,
  },
  ml153: {
    marginLeft: GlobalStyles.Margin.margin_49xl,
  },
  mt41_5: {
    marginTop: GlobalStyles.Margin.margin_18xl,
  },
  ml25: {
    marginLeft: GlobalStyles.Margin.margin_3xl,
  },
  mt101_5: {
    marginTop: 101.5,
  },
  mt40_5: {
    marginTop: 40.5,
  },
  mt10_5: {
    marginTop: GlobalStyles.Margin.margin_15xs,
  },
  ml26: {
    marginLeft: GlobalStyles.Margin.margin_4xl,
  },
  mt152_5: {
    marginTop: 152.5,
  },
  groupPosition1: {
    bottom: 0,
    left: 0,
    right: 0,
    position: "absolute",
  },
  helloTypo1: {
    fontFamily: GlobalStyles.FontFamily.helvetica,
    textAlign: "left",
    position: "absolute",
  },
  helloTypo: {
    fontSize: GlobalStyles.FontSize.size_4xl,
    fontFamily: GlobalStyles.FontFamily.helvetica,
    textAlign: "left",
    color: GlobalStyles.Color.indigo,
    position: "absolute",
  },
  groupPosition: {
    height: 2,
    borderTopWidth: 1,
    bottom: -1,
    borderColor: "#707070",
    borderStyle: "solid",
    right: 0,
    position: "absolute",
  },
  groupPosition2: {
    right: 0,
    left: 0,
    position: "absolute",
  },
  groupChild: {
    backgroundColor: GlobalStyles.Color.gray_300,
    left: 0,
    top: 0,
  },
  groupItem: {
    top: 63,
    borderTopLeftRadius: GlobalStyles.Border.br_3xl,
    borderTopRightRadius: GlobalStyles.Border.br_3xl,
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
  hello: {
    marginLeft: -56.5,
    top: 95,
    left: "50%",
    fontSize: GlobalStyles.FontSize.size_2xl,
    lineHeight: 25,
    fontWeight: "700",
    fontFamily: GlobalStyles.FontFamily.typoGrotesk,
    textAlign: "left",
    color: GlobalStyles.Color.indigo,
    position: "absolute",
  },
  rectangleParent: {
    left: 0,
    top: 0,
  },
  addBeneficiarySchedulePayInner: {
    width: 375,
    height: 812,
  },
  addBeneficiarySchedulePayChild: {
    borderTopWidth: 3,
    width: 52,
    height: 6,
    borderColor: "#707070",
    borderStyle: "solid",
  },
  hello1: {
    fontSize: GlobalStyles.FontSize.size_sm,
    color: GlobalStyles.Color.gray_800,
    left: 0,
    top: 0,
  },
  helloWrapper: {
    width: 63,
    height: 16,
  },
  hello3: {
    top: 26,
    left: 1,
  },
  groupInner: {
    left: 0,
  },
  helloParent: {
    width: 311,
    height: 62,
  },
  hello8: {
    left: 0,
    top: 0,
  },
  groupChild2: {
    left: -1,
  },
  groupView: {
    width: 310,
    height: 36,
  },
  rectangleView: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: GlobalStyles.Border.br_md,
    backgroundColor: GlobalStyles.Color.gray_500,
    position: "absolute",
    width: "100%",
  },
  maskGroup236: {
    bottom: 13,
    left: 0,
    top: 0,
  },
  rectangleGroup: {
    marginTop: -30,
    top: "50%",
    height: 60,
    left: 0,
  },
  hello9: {
    top: "36.67%",
    left: "39.26%",
    fontSize: GlobalStyles.FontSize.size_base,
    lineHeight: 17,
    textTransform: "uppercase",
    color: GlobalStyles.Color.black,
  },
  groupPressable: {
    width: 326,
    height: 60,
  },
  addBeneficiarySchedulePay: {
    flex: 1,
    width: "100%",
    backgroundColor: GlobalStyles.Color.white,
  },
});

export default AddBeneficiarySchedulePay;
