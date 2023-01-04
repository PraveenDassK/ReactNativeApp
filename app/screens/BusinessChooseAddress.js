import * as React from "react";
import { Text, StyleSheet, View, Pressable, Image, TextInput } from "react-native";
import GlobalStyles from "../../GlobalStyles";

const BusinessChooseAddress = () => {
  return (
    <View style={styles.businessChooseAddress}>
      <View style={styles.groupParent}>
        <View style={[styles.postcodeParent, styles.parentPosition]}>
          <Text
            style={[
              styles.postcode,
              styles.helloFlexBox,
              styles.hello3Color,
              styles.postcodeTypo,
            ]}
          >
            Postcode
          </Text>
          <Text
            style={[
              styles.chooseAddress,
              styles.helloFlexBox,
              styles.hello3Color,
              styles.postcodeTypo,
            ]}
          >
            Choose address
          </Text>
          <TextInput
            style={[
              styles.helloWrapper,
              styles.helloWrapperPosition,
              styles.helloWrapperBorder,
            ]}
            placeholder ="Postcode"
          />

          <Pressable
            style={[styles.groupContainer, styles.helloWrapperPosition]}
            onPress={() => navigation.navigate("BusinessChooseAddress1")}
          >
            <View style={[styles.rectangleParent, styles.parentPosition]}>
              <View style={styles.groupChild} />
              <View style={[styles.maskGroup236, styles.parentPosition]} />
            </View>
            <Text style={[styles.hello1, styles.helloFlexBox]}>Continue</Text>
          </Pressable>
          <View
            style={[
              styles.iconIonicIosArrowDownParent,
              styles.helloWrapperPosition,
              styles.helloWrapperBorder,
            ]}
          >
            <Image
              style={styles.iconIonicIosArrowDown}
              resizeMode="cover"
              source={require("../assets/icon-carbonytedownarrow.png")}
            />
            <Text style={[styles.hello2, styles.helloTypo]}>
              Select your company address
            </Text>
          </View>
        </View>
        <View style={styles.helloParent}>
          <Text
            style={[styles.hello3, styles.helloFlexBox, styles.hello3Color]}
          >
            Your Address
          </Text>
          <Text style={[styles.hello4, styles.helloTypo]}>
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
  parentPosition: {
    left: 0,
    right: 0,
    position: "absolute",
  },
  helloFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  hello3Color: {
    color: GlobalStyles.Color.indigo_100,
    textAlign: "left",
    left: 0,
  },
  postcodeTypo: {
    fontSize: GlobalStyles.FontSize.size_xl,
    color: GlobalStyles.Color.indigo_100,
  },
  helloWrapperPosition: {
    height: 60,
    left: 0,
    right: 0,
    position: "absolute",
  },
  helloWrapperBorder: {
    borderWidth: 1,
    borderColor: "#e8e8e8",
    borderStyle: "solid",
    height: 60,
    borderRadius: GlobalStyles.Border.br_lg,
    backgroundColor: GlobalStyles.Color.white,
  },
  helloTypo: {
    color: GlobalStyles.Color.gray_700,
    fontSize: GlobalStyles.FontSize.size_base,
    top: "50%",
    textAlign: "left",
    position: "absolute",
  },
  postcode: {
    top: 0,
  },
  chooseAddress: {
    marginTop: -28.5,
    top: "50%",
  },
  hello: {
    color: GlobalStyles.Color.gray_1700,
    fontSize: GlobalStyles.FontSize.size_base,
    left: 14,
    marginTop: -6,
    top: "50%",
    textAlign: "left",
    position: "absolute",
  },
  helloWrapper: {
    top: 24,
  },
  groupChild: {
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
    top: 0,
  },
  rectangleParent: {
    top: 0,
    bottom: 0,
  },
  hello1: {
    top: "40%",
    left: "38.04%",
    fontSize: GlobalStyles.FontSize.size_lg,
    textTransform: "uppercase",
    color: GlobalStyles.Color.black,
  },
  groupContainer: {
    bottom: 0,
  },
  iconIonicIosArrowDown: {
    marginTop: -2.64,
    right: 26,
    width: 9,
    height: 5,
    top: "50%",
    position: "absolute",
  },
  hello2: {
    left: 14,
    marginTop: -6,
    color: GlobalStyles.Color.gray_700,
  },
  iconIonicIosArrowDownParent: {
    marginTop: -4.5,
    top: "50%",
  },
  postcodeParent: {
    top: 114,
    bottom: 0,
  },
  hello3: {
    fontSize: GlobalStyles.FontSize.size_7xl,
    fontWeight: "700",
    top: 0,
  },
  byLawWe: {
    margin: GlobalStyles.Margin.margin_8xs,
  },
  hello4: {
    marginTop: 4.24,
    left: 1,
    lineHeight: 20,
  },
  helloParent: {
    right: 19,
    left: 2,
    height: 76,
    top: 0,
    position: "absolute",
  },
  groupParent: {
    width: 326,
    height: 413,
  },
  businessChooseAddress: {
    flex: 1,
    paddingLeft: GlobalStyles.Padding.padding_7xs,
    paddingTop: GlobalStyles.Padding.padding_6xl,
    paddingRight: GlobalStyles.Padding.padding_8xs,
    width: "100%",
    backgroundColor: GlobalStyles.Color.white,
  },
});

export default BusinessChooseAddress;
