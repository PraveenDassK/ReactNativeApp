import * as React from "react";
import { Text, StyleSheet, View, Pressable,TextInput } from "react-native";

import GlobalStyles from "../../GlobalStyles";


import { horizontalScale, verticalScale, moderateScale } from "../config/scaling"
const AddBeneficiarySchedulePay1 = ({navigation}) => {
 

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
            <Text style={[styles.hello1, styles.helloTypo]}>Sort Code</Text>
            <TextInput style={[styles.hello4, styles.helloTypo]} placeholder="00-00-00"/>
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
            <TextInput style={[styles.hello4, styles.helloTypo]} placeholder="Bank Name"/>
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
            <TextInput style={[styles.hello4, styles.helloTypo]}
            placeholder='Ortiz Tyrese'/>
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
            <TextInput style={[styles.hello4, styles.helloTypo]} placeholder="01234567890"/>
            <View style={[styles.groupChild, styles.groupPosition1]} />
          </View>
          <Pressable
            style={[styles.groupContainer, styles.groupContainerPosition]}
            onPress={() => navigation.navigate("SendAccountSelection")}
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
    bottom: verticalScale(0),
    left: horizontalScale(0),
    right: horizontalScale(0),
    top: verticalScale(0),
    position: "absolute",
  },
  helloTypo: {
    // fontFamily: GlobalStyles.FontFamily.helvetica,
    textAlign: "left",
    position: "absolute",
  },
  groupPosition1: {
    right: horizontalScale(0),
    left: horizontalScale(0),
    position: "absolute",
  },
  groupContainerPosition: {
    height: verticalScale(60),
    left: horizontalScale(25),
    top: "50%",
    position: "absolute",
  },
  groupPosition: {
    right: horizontalScale(40),
    height: verticalScale(60),
  },
  hello: {
    marginLeft: horizontalScale(-40),
    top: verticalScale(39),
    left: "50%",
    fontSize: GlobalStyles.FontSize.size_4xl,
    fontWeight: "700",
    // fontFamily: GlobalStyles.FontFamily.typoGrotesk,
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
  groupParent: {
    left: horizontalScale(0),
  },
  hello1: {
    fontSize: GlobalStyles.FontSize.size_base,
    color: GlobalStyles.Color.gray_700,
    left: horizontalScale(0),
    top: verticalScale(0),
  },
  hello2: {
    top: verticalScale(24),
    left: horizontalScale(96),
    fontSize: GlobalStyles.FontSize.size_13xl,
    lineHeight: verticalScale(37),
    color: GlobalStyles.Color.blue_100,
  },
  groupChild: {
    bottom: verticalScale(-1),
    borderStyle: "solid",
    borderColor: "#707070",
    borderTopWidth: 1,
    height: verticalScale(2),
    left: horizontalScale(0),
  },
  helloParent: {
    marginTop: verticalScale(52.5),
    height: verticalScale(64),
    left: horizontalScale(25),
    top: "50%",
    right: horizontalScale(40),
    position: "absolute",
  },
  hello4: {
    top: verticalScale(28),
    left: horizontalScale(1),
    fontSize: GlobalStyles.FontSize.size_6xl,
    color: GlobalStyles.Color.indigo_100,
    // fontFamily: GlobalStyles.FontFamily.helvetica,
  },
  helloGroup: {
    marginTop: verticalScale(-255.5),
  },
  helloContainer: {
    marginTop: verticalScale(-153.5),
  },
  groupView: {
    marginTop: verticalScale(-50.5),
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
    bottom: verticalScale(13),
    left: horizontalScale(0),
    top: verticalScale(0),
  },
  hello9: {
    top: "30%",
    left: "42.5%",
    fontSize: GlobalStyles.FontSize.size_lg,
    textTransform: "uppercase",
    color: GlobalStyles.Color.white,
  },
  groupContainer: {
    marginTop: verticalScale(264.5),
    right: horizontalScale(24),
  },
  addBeneficiarySchedulePayInner: {
    width: "100%",
    height: verticalScale(749),
  },
  addBeneficiarySchedulePay: {
    flex: 1,
    paddingTop: GlobalStyles.Padding.padding_12xs,
    paddingLeft: GlobalStyles.Padding.padding_10xs,
    width: "100%",
    backgroundColor: GlobalStyles.Color.white,
  },
});



export default AddBeneficiarySchedulePay1;