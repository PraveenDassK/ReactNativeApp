import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import GlobalStyles from "../GlobalStyles";

const CarbonCart1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.carbonCart1}>
      <View style={styles.carbonCart1Child} />
      <View style={[styles.carbonCart1Item, styles.mt23, styles.ml28]} />
      <Text style={[styles.hello, styles.mt11, styles.ml27]}>
        Order Summary
      </Text>
      <Text
        style={[styles.helloTypo1, styles.mt20, styles.ml57, styles.helloTypo2]}
      >
        <Text style={styles.agroforestry}>Agroforestry -</Text>
        <Text style={styles.agroforestry}>Tree Planting</Text>
        <Text style={styles.agroforestry}>Initiative</Text>
      </Text>
      <Text
        style={[
          styles.hello2,
          styles.mt_227,
          styles.ml57,
          styles.helloTypo1,
          styles.helloTypo2,
        ]}
      >
        Project
      </Text>
      <Text style={[styles.helloTypo2, styles.mt52, styles.ml57]}>
        <Text style={styles.agroforestry}>Woodland</Text>
        <Text style={styles.agroforestry}>Restoration,</Text>
        <Text style={styles.agroforestry}>Devon</Text>
      </Text>
      <Text
        style={[
          styles.hello2,
          styles.mt12,
          styles.ml57,
          styles.helloTypo1,
          styles.helloTypo2,
        ]}
      >
        Total
      </Text>
      <Text style={[styles.helloTypo2, styles.mt_50, styles.ml213]}>1</Text>
      <Text
        style={[
          styles.hello2,
          styles.mt_16,
          styles.ml204,
          styles.helloTypo1,
          styles.helloTypo2,
        ]}
      >
        Unit
      </Text>
      <Text style={[styles.helloTypo2, styles.mt_50, styles.ml213]}>1</Text>
      <Text
        style={[
          styles.hello2,
          styles.mt_16,
          styles.ml213,
          styles.helloTypo1,
          styles.helloTypo2,
        ]}
      >
        2
      </Text>
      <Text style={[styles.helloTypo, styles.mt_16, styles.ml291]}>£1.45</Text>
      <Text
        style={[styles.hello10, styles.mt_16, styles.ml292, styles.helloTypo]}
      >
        Price
      </Text>
      <Text style={[styles.helloTypo, styles.mt_16, styles.ml310]}>£6</Text>
      <Text
        style={[styles.hello10, styles.mt_16, styles.ml291, styles.helloTypo]}
      >
        £7.45
      </Text>
      <View style={[styles.carbonCart1Inner, styles.mt41]} />
      <View style={[styles.carbonCart1Inner, styles.mt13]} />
      <View style={[styles.component208161Parent, styles.mt66, styles.ml25]}>
        <View
          style={[
            styles.component208161,
            styles.maskGroup236Position,
            styles.maskGroup236Position1,
          ]}
        >
          <View style={[styles.rectangleParent, styles.maskGroup236Position]}>
            <View style={styles.groupChild} />
            <View
              style={[
                styles.maskGroup236,
                styles.maskGroup236Position,
                styles.maskGroup236Position1,
              ]}
            />
          </View>
        </View>
        <Text style={[styles.hello13, styles.helloTypo1]}>
          Proceed to payment
        </Text>
      </View>
      <Pressable
        style={[styles.iconFeatherArrowLeftWrapper, styles.mt_766]}
        onPress={() => navigation.navigate("Carbon2")}
      >
        <Image
          style={styles.iconFeatherArrowLeft}
          resizeMode="cover"
          source={require("../assets/icon-featherarrowleft.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  mt23: {
    marginTop: GlobalStyles.Margin.margin_lg,
  },
  ml28: {
    marginLeft: GlobalStyles.Margin.margin_6xl,
  },
  mt11: {
    marginTop: GlobalStyles.Margin.margin_14xs,
  },
  ml27: {
    marginLeft: GlobalStyles.Margin.margin_5xl,
  },
  mt20: {
    marginTop: 20,
  },
  ml57: {
    marginLeft: GlobalStyles.Margin.margin_31xl,
  },
  mt_227: {
    marginTop: -227,
  },
  mt52: {
    marginTop: GlobalStyles.Margin.margin_28xl,
  },
  mt12: {
    marginTop: GlobalStyles.Margin.margin_13xs,
  },
  mt_50: {
    marginTop: GlobalStyles.Margin.margin_42xs,
  },
  ml213: {
    marginLeft: GlobalStyles.Margin.margin_53xl,
  },
  mt_16: {
    marginTop: GlobalStyles.Margin.margin_29xs,
  },
  ml204: {
    marginLeft: 204,
  },
  ml291: {
    marginLeft: GlobalStyles.Margin.margin_57xl,
  },
  ml292: {
    marginLeft: 292,
  },
  ml310: {
    marginLeft: 310,
  },
  mt41: {
    marginTop: GlobalStyles.Margin.margin_19xl,
  },
  mt13: {
    marginTop: GlobalStyles.Margin.margin_10xs,
  },
  mt66: {
    marginTop: GlobalStyles.Margin.margin_36xl,
  },
  ml25: {
    marginLeft: GlobalStyles.Margin.margin_3xl,
  },
  mt_766: {
    marginTop: GlobalStyles.Margin.margin_59xs,
  },
  helloTypo2: {
    fontSize: GlobalStyles.FontSize.size_sm,
    textAlign: "left",
    fontFamily: GlobalStyles.FontFamily.helvetica,
    lineHeight: 17,
    color: GlobalStyles.Color.indigo,
  },
  helloTypo1: {
    textAlign: "left",
    fontFamily: GlobalStyles.FontFamily.helvetica,
    lineHeight: 17,
  },
  helloTypo: {
    textAlign: "right",
    fontFamily: GlobalStyles.FontFamily.helvetica,
    lineHeight: 17,
    fontSize: GlobalStyles.FontSize.size_sm,
    color: GlobalStyles.Color.indigo,
  },
  maskGroup236Position: {
    left: 0,
    right: 0,
    position: "absolute",
  },
  maskGroup236Position1: {
    top: 0,
    right: 0,
  },
  carbonCart1Child: {
    width: 375,
    height: 777,
    backgroundColor: GlobalStyles.Color.gray_300,
  },
  carbonCart1Item: {
    borderRadius: GlobalStyles.Border.br_5xl,
    shadowColor: "rgba(1, 1, 253, 0.1)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 20,
    elevation: 20,
    shadowOpacity: 1,
    width: 320,
    height: 248,
    backgroundColor: GlobalStyles.Color.white,
  },
  hello: {
    fontSize: GlobalStyles.FontSize.size_5xl,
    lineHeight: 30,
    fontFamily: GlobalStyles.FontFamily.typoGrotesk,
    textAlign: "center",
    color: GlobalStyles.Color.indigo,
    fontWeight: "700",
  },
  agroforestry: {
    margin: GlobalStyles.Margin.margin_25xs,
  },
  hello2: {
    fontWeight: "700",
  },
  hello10: {
    fontWeight: "700",
  },
  carbonCart1Inner: {
    borderStyle: "solid",
    borderColor: "#f6f5f8",
    borderTopWidth: 1,
    width: 321,
    height: 2,
    alignSelf: "center",
  },
  groupChild: {
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
  },
  rectangleParent: {
    marginTop: -30,
    top: "50%",
    height: 60,
  },
  component208161: {
    bottom: 0,
  },
  hello13: {
    top: "35%",
    left: "23.62%",
    fontSize: GlobalStyles.FontSize.size_base,
    textTransform: "uppercase",
    color: GlobalStyles.Color.black,
    position: "absolute",
  },
  component208161Parent: {
    width: 326,
    height: 60,
  },
  iconFeatherArrowLeft: {
    marginLeft: -0.5,
    bottom: 4,
    left: "50%",
    width: 17,
    height: 17,
    position: "absolute",
  },
  iconFeatherArrowLeftWrapper: {
    width: 55,
    height: 45,
    backgroundColor: GlobalStyles.Color.gray_300,
  },
  carbonCart1: {
    flex: 1,
    paddingTop: GlobalStyles.Padding.padding_sm,
    width: "100%",
    backgroundColor: GlobalStyles.Color.white,
  },
});

export default CarbonCart1;
