import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import GlobalStyles from "../GlobalStyles";

const AddBeneficiarySchedulePay1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.addBeneficiarySchedulePay}>
      <View style={styles.addBeneficiarySchedulePayInner}>
        <View style={[styles.groupParent, styles.groupParentPosition]}>
          <View style={[styles.groupParent, styles.groupParentPosition]}>
            <View style={[styles.helloWrapper, styles.groupParentPosition]}>
              <Text style={styles.hello}>Bank Details</Text>
            </View>
          </View>
          <View style={styles.helloParent}>
            <Text style={[styles.hello1, styles.helloTypo]}>Amount</Text>
            <Text style={[styles.hello2, styles.helloTypo]}>£500</Text>
            <View style={[styles.groupChild, styles.groupPosition1]} />
          </View>
          <View
            style={[
              styles.helloGroup,
              styles.groupContainerPosition,
              styles.groupPosition,
            ]}
          >
            <Text style={[styles.hello1, styles.helloTypo]}>
              Name of the Bank
            </Text>
            <Text style={[styles.hello4, styles.helloTypo]}>Bank Name</Text>
            <View style={[styles.groupChild, styles.groupPosition1]} />
          </View>
          <View
            style={[
              styles.helloContainer,
              styles.groupContainerPosition,
              styles.groupPosition,
            ]}
          >
            <Text style={[styles.hello1, styles.helloTypo]}>Account Name</Text>
            <Text style={[styles.hello4, styles.helloTypo]}>Ortiz Tyrese</Text>
            <View style={[styles.groupChild, styles.groupPosition1]} />
          </View>
          <View
            style={[
              styles.groupView,
              styles.groupContainerPosition,
              styles.groupPosition,
            ]}
          >
            <Text style={[styles.hello1, styles.helloTypo]}>
              International Bank Account Number (IBAN)
            </Text>
            <Text style={[styles.hello4, styles.helloTypo]}>01234567890</Text>
            <View style={[styles.groupChild, styles.groupPosition1]} />
          </View>
          <Pressable
            style={[styles.groupContainer, styles.groupContainerPosition]}
            onPress={() => navigation.navigate("PaymentOnMonthOrWeek")}
          >
            <View style={[styles.groupParent, styles.groupParentPosition]}>
              <View style={[styles.groupParent, styles.groupParentPosition]}>
                <View style={styles.rectangleView} />
                <View style={[styles.maskGroup236, styles.groupPosition1]} />
              </View>
              <Text style={[styles.hello9, styles.helloTypo]}>Confirm</Text>
            </View>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupParentPosition: {
    bottom: 0,
    left: 0,
    right: 0,
    top: 0,
    position: "absolute",
  },
  helloTypo: {
    fontFamily: GlobalStyles.FontFamily.helvetica,
    textAlign: "left",
    position: "absolute",
  },
  groupPosition1: {
    right: 0,
    left: 0,
    position: "absolute",
  },
  groupContainerPosition: {
    height: 60,
    left: 25,
    top: "50%",
    position: "absolute",
  },
  groupPosition: {
    right: 40,
    height: 60,
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
  groupParent: {
    left: 0,
  },
  hello1: {
    fontSize: GlobalStyles.FontSize.size_base,
    color: GlobalStyles.Color.gray_700,
    left: 0,
    top: 0,
  },
  hello2: {
    top: 24,
    left: 96,
    fontSize: GlobalStyles.FontSize.size_13xl,
    lineHeight: 37,
    color: GlobalStyles.Color.blue_100,
  },
  groupChild: {
    bottom: -1,
    borderStyle: "solid",
    borderColor: "#707070",
    borderTopWidth: 1,
    height: 2,
    left: 0,
  },
  helloParent: {
    marginTop: 52.5,
    height: 84,
    left: 25,
    top: "50%",
    right: 40,
    position: "absolute",
  },
  hello4: {
    top: 28,
    left: 1,
    fontSize: GlobalStyles.FontSize.size_6xl,
    color: GlobalStyles.Color.indigo_100,
    fontFamily: GlobalStyles.FontFamily.helvetica,
  },
  helloGroup: {
    marginTop: -255.5,
  },
  helloContainer: {
    marginTop: -153.5,
  },
  groupView: {
    marginTop: -50.5,
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
    top: 0,
  },
  hello9: {
    top: "40%",
    left: "39.26%",
    fontSize: GlobalStyles.FontSize.size_lg,
    textTransform: "uppercase",
    color: GlobalStyles.Color.black,
  },
  groupContainer: {
    marginTop: 264.5,
    right: 24,
  },
  addBeneficiarySchedulePayInner: {
    width: 375,
    height: 749,
  },
  addBeneficiarySchedulePay: {
    flex: 1,
    paddingTop: GlobalStyles.Padding.padding_md,
    width: "100%",
    backgroundColor: GlobalStyles.Color.white,
  },
});

export default AddBeneficiarySchedulePay1;
