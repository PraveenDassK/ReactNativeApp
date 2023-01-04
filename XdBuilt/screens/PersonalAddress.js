import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import GlobalStyles from "../GlobalStyles";

const PersonalAddress = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.personalAddress}>
      <View style={styles.buildingNameOrNumberParent}>
        <Text
          style={[
            styles.buildingNameOrNumber,
            styles.helloTypo,
            styles.enterPostcode1Typo,
          ]}
        >
          Building name or number
        </Text>
        <Text style={[styles.addressLine1, styles.addressTypo]}>
          Address line 1
        </Text>
        <Text style={[styles.addressLine2Optional, styles.addressTypo]}>
          <Text style={styles.addressLine2}>{`Address line 2 `}</Text>
          <Text style={styles.optional}>(optional)</Text>
        </Text>
        <Text style={[styles.townOrCity, styles.addressTypo]}>
          Town or city
        </Text>
        <View
          style={[
            styles.groupChild,
            styles.groupChildLayout,
            styles.groupChildBorder,
          ]}
        />
        <Pressable
          style={[styles.parentPosition, styles.groupChildLayout]}
          onPress={() => navigation.navigate("DOB")}
        >
          <View style={[styles.helloParentPosition, styles.parentPosition]}>
            <View style={styles.groupItem} />
            <View style={[styles.maskGroup236, styles.helloParentPosition]} />
          </View>
          <Text style={[styles.hello, styles.helloTypo]}>Continue</Text>
        </Pressable>
        <View
          style={[
            styles.groupInner,
            styles.groupChildLayout,
            styles.groupChildBorder,
          ]}
        />
        <View
          style={[
            styles.groupView,
            styles.groupChildLayout,
            styles.groupChildBorder,
          ]}
        />
        <View
          style={[
            styles.groupChild1,
            styles.groupChildLayout,
            styles.groupChildBorder,
          ]}
        />
        <Pressable
          style={styles.enterPostcode}
          onPress={() => navigation.navigate("BusinessAddress2")}
        >
          <Text
            style={[
              styles.enterPostcode1,
              styles.helloTypo,
              styles.enterPostcode1Typo,
            ]}
          >
            Enter postcode?
          </Text>
        </Pressable>
        <View style={[styles.helloParent, styles.helloParentPosition]}>
          <Text style={[styles.hello1, styles.helloParentPosition]}>
            Your Address
          </Text>
          <Text style={[styles.hello2, styles.addressTypo]}>
            <Text style={styles.byLawWe}>
              By law we need your home address to open your
            </Text>
            <Text style={styles.byLawWe}>account</Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  helloTypo: {
    fontFamily: GlobalStyles.FontFamily.helvetica,
    textAlign: "left",
  },
  enterPostcode1Typo: {
    fontSize: GlobalStyles.FontSize.size_base,
    fontFamily: GlobalStyles.FontFamily.helvetica,
  },
  addressTypo: {
    top: "50%",
    textAlign: "left",
    fontFamily: GlobalStyles.FontFamily.helvetica,
    fontSize: GlobalStyles.FontSize.size_base,
    position: "absolute",
  },
  groupChildLayout: {
    height: 60,
    position: "absolute",
  },
  groupChildBorder: {
    borderWidth: 1,
    borderColor: "#e8e8e8",
    borderStyle: "solid",
    height: 60,
    borderRadius: GlobalStyles.Border.br_lg,
    right: 0,
    top: "50%",
    left: 0,
    backgroundColor: GlobalStyles.Color.white,
  },
  parentPosition: {
    bottom: 0,
    right: 0,
    left: 0,
  },
  helloParentPosition: {
    top: 0,
    position: "absolute",
  },
  buildingNameOrNumber: {
    top: 116,
    textAlign: "left",
    color: GlobalStyles.Color.indigo_100,
    left: 0,
    position: "absolute",
  },
  addressLine1: {
    marginTop: -104.5,
    color: GlobalStyles.Color.indigo_100,
    left: 0,
  },
  addressLine2: {
    color: GlobalStyles.Color.indigo_100,
  },
  optional: {
    color: GlobalStyles.Color.gray_700,
  },
  addressLine2Optional: {
    marginTop: 16.5,
    left: 0,
  },
  townOrCity: {
    marginTop: 137.5,
    color: GlobalStyles.Color.indigo_100,
    left: 0,
  },
  groupChild: {
    marginTop: -202.5,
  },
  groupItem: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    backgroundColor: GlobalStyles.Color.gray_500,
    borderRadius: GlobalStyles.Border.br_lg,
    position: "absolute",
    width: "100%",
  },
  maskGroup236: {
    bottom: 13,
    right: 0,
    top: 0,
    left: 0,
  },
  hello: {
    top: "40%",
    left: "38.04%",
    fontSize: GlobalStyles.FontSize.size_lg,
    textTransform: "uppercase",
    color: GlobalStyles.Color.black,
    textAlign: "left",
    position: "absolute",
  },
  groupInner: {
    marginTop: -81.5,
  },
  groupView: {
    marginTop: 39.5,
  },
  groupChild1: {
    marginTop: 160.5,
  },
  enterPostcode1: {
    color: GlobalStyles.Color.blue_100,
    textAlign: "left",
  },
  enterPostcode: {
    bottom: 88,
    left: 0,
    position: "absolute",
  },
  hello1: {
    fontSize: GlobalStyles.FontSize.size_8xl,
    fontWeight: "700",
    fontFamily: GlobalStyles.FontFamily.typoGrotesk,
    textAlign: "left",
    color: GlobalStyles.Color.indigo_100,
    left: 0,
  },
  byLawWe: {
    margin: GlobalStyles.Margin.margin_8xs,
  },
  hello2: {
    marginTop: 4.74,
    left: 1,
    lineHeight: 20,
    color: GlobalStyles.Color.gray_700,
  },
  helloParent: {
    right: 19,
    left: 2,
    height: 77,
  },
  buildingNameOrNumberParent: {
    width: 326,
    height: 683,
  },
  personalAddress: {
    flex: 1,
    paddingLeft: GlobalStyles.Padding.padding_7xs,
    paddingTop: GlobalStyles.Padding.padding_5xl,
    paddingRight: GlobalStyles.Padding.padding_8xs,
    width: "100%",
    backgroundColor: GlobalStyles.Color.white,
  },
});

export default PersonalAddress;
