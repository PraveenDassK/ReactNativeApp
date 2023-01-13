import * as React from "react";
import { Text, StyleSheet, View, Pressable, Image,TextInput } from "react-native";
import GlobalStyles from "../../GlobalStyles";

const BusinessChooseAddress1 = ({navigation}) => {

  return (
    <View style={styles.businessChooseAddress1}>
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
          <View
            style={[
              styles.helloWrapper,
              styles.helloWrapperPosition,
              styles.helloWrapperBorder,
            ]}
          >
            <TextInput style={styles.hello} placeholder={"HA13AW"}/>
          </View>
          <Pressable
            style={[styles.groupContainer, styles.helloWrapperPosition]}
            onPress={() => navigation.navigate("DOB")}
          >
            <View style={[styles.rectangleParent, styles.parentPosition]}>
              <View style={styles.groupChild} />
              <View style={[styles.maskGroup236, styles.parentPosition]} />
            </View>
            <TextInput style={[styles.hello1, styles.helloFlexBox]} placeholder={"Continue"}/>
          </Pressable>
          <View
            style={[
              styles.iconIonicIosArrowDownParent,
              styles.parentLayout,
              styles.helloWrapperBorder,
              styles.parentPosition,
            ]}
          >
            <Image
              style={styles.iconIonicIosArrowDown}
              resizeMode="cover"
              source={require("../assets/icon-ioniciosarrowdown12.png")}
            />
            <Text style={[styles.hello2, styles.helloTypo]}>
              <Text style={styles.lowlandsRoadHarrow}>
                33 Lowlands Road, HARROW,
              </Text>
              <Text style={styles.lowlandsRoadHarrow}>{"\n"}Middlesex, HA1 3AW</Text>
            </Text>
          </View>
        </View>
        <View style={[styles.helloParent, styles.parentLayout]}>
          <Text
            style={[styles.hello3, styles.helloFlexBox, styles.hello3Color]}
          >
            Your Address
          </Text>
          <Text style={[styles.hello4, styles.helloTypo]}>
            <Text style={styles.lowlandsRoadHarrow}>
              By law we need your home address to open your
            </Text>
            <Text style={styles.lowlandsRoadHarrow}>{"\n"}account</Text>
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
    borderRadius: GlobalStyles.Border.br_lg,
    backgroundColor: GlobalStyles.Color.white,
  },
  parentLayout: {
    height: 76,
    position: "absolute",
  },
  helloTypo: {
    lineHeight: 20,
    fontSize: GlobalStyles.FontSize.size_base,
    top: "50%",
    textAlign: "left",
    position: "absolute",
  },
  postcode: {
    top: 0,
  },
  chooseAddress: {
    marginTop: -37,
    top: "50%",
  },
  hello: {
    marginTop: -6,
    color: GlobalStyles.Color.gray_1700,
    fontSize: GlobalStyles.FontSize.size_base,
    left: 14,
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
    position: "absolute",
  },
  rectangleParent: {
    top: 0,
    bottom: 0,
    position: "absolute",
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
    marginTop: -3,
    right: 26,
    width: 9,
    height: 5,
    top: "50%",
    position: "absolute",
  },
  lowlandsRoadHarrow: {
    margin: GlobalStyles.Margin.margin_8xs,
  },
  hello2: {
    marginTop: -14,
    color: GlobalStyles.Color.blue_100,
    left: 14,
    lineHeight: 20,
  },
  iconIonicIosArrowDownParent: {
    marginTop: -13,
    top: "50%",
  },
  postcodeParent: {
    top: 114,
    bottom: 0,
    position: "absolute",
  },
  hello3: {
    fontSize: GlobalStyles.FontSize.size_7xl,
    fontWeight: "700",
    top: 0,
  },
  hello4: {
    marginTop: 4.24,
    left: 1,
    color: GlobalStyles.Color.gray_700,
  },
  helloParent: {
    right: 19,
    left: 2,
    top: 0,
  },
  groupParent: {
    width: "100%",
    height: 430,
  },
  businessChooseAddress1: {
    flex: 1,
    paddingLeft: GlobalStyles.Padding.padding_7xs,
    paddingTop: GlobalStyles.Padding.padding_xl,
    paddingRight: GlobalStyles.Padding.padding_8xs,
    width: "100%",
    backgroundColor: GlobalStyles.Color.gray_100,
  },
});

export default BusinessChooseAddress1;
