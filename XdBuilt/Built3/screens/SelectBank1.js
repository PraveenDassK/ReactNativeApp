import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import GlobalStyles from "../GlobalStyles";

const SelectBank1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.selectBank1}>
      <View style={styles.selectBank1Child} />
      <Text style={[styles.hello, styles.mt10, styles.ml27]}>
        Enter your detail
      </Text>
      <Pressable
        style={[styles.iconFeatherArrowLeftWrapper, styles.mt_766]}
        onPress={() => navigation.navigate("SelectBank")}
      >
        <Image
          style={styles.iconFeatherArrowLeft}
          resizeMode="cover"
          source={require("../assets/icon-featherarrowleft.png")}
        />
      </Pressable>
      <Text style={[styles.hello1, styles.mt14, styles.ml28, styles.helloTypo]}>
        <Text style={styles.byProvidingYour}>
          By providing your information to Carbonyte, you are
        </Text>
        <Text style={styles.byProvidingYour}>
          enabling Carbonyte to retrieve your personal data.
        </Text>
      </Text>
      <Text
        style={[styles.username, styles.mt35, styles.ml25, styles.helloTypo]}
      >
        Username
      </Text>
      <Text
        style={[styles.username, styles.mt37, styles.ml25, styles.helloTypo]}
      >
        Password
      </Text>
      <View
        style={[
          styles.selectBank1Item,
          styles.mt9,
          styles.ml25,
          styles.selectBank1ItemLayout,
        ]}
      />
      <View
        style={[
          styles.selectBank1Item,
          styles.mt9,
          styles.ml25,
          styles.selectBank1ItemLayout,
        ]}
      />
      <Pressable
        style={[
          styles.component208118Parent,
          styles.mt36,
          styles.ml25,
          styles.selectBank1ItemLayout,
        ]}
        onPress={() => navigation.navigate("VerifyYourIdentity")}
      >
        <View
          style={[
            styles.component208118,
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
        <Text style={[styles.hello2, styles.helloTypo]}>Submit</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  mt10: {
    marginTop: GlobalStyles.Margin.margin_16xs,
  },
  ml27: {
    marginLeft: GlobalStyles.Margin.margin_5xl,
  },
  mt_766: {
    marginTop: GlobalStyles.Margin.margin_59xs,
  },
  mt14: {
    marginTop: GlobalStyles.Margin.margin_9xs,
  },
  ml28: {
    marginLeft: GlobalStyles.Margin.margin_6xl,
  },
  mt35: {
    marginTop: GlobalStyles.Margin.margin_13xl,
  },
  ml25: {
    marginLeft: GlobalStyles.Margin.margin_3xl,
  },
  mt37: {
    marginTop: GlobalStyles.Margin.margin_15xl,
  },
  mt9: {
    marginTop: GlobalStyles.Margin.margin_17xs,
  },
  mt36: {
    marginTop: GlobalStyles.Margin.margin_14xl,
  },
  helloTypo: {
    fontFamily: GlobalStyles.FontFamily.helvetica,
    textAlign: "left",
  },
  selectBank1ItemLayout: {
    width: 326,
    height: 60,
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
  selectBank1Child: {
    width: 375,
    height: 812,
    backgroundColor: GlobalStyles.Color.gray_300,
  },
  hello: {
    fontSize: GlobalStyles.FontSize.size_6xl,
    fontWeight: "700",
    fontFamily: GlobalStyles.FontFamily.typoGrotesk,
    textAlign: "left",
    color: GlobalStyles.Color.indigo,
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
  byProvidingYour: {
    margin: GlobalStyles.Margin.margin_25xs,
  },
  hello1: {
    fontSize: GlobalStyles.FontSize.size_sm,
    lineHeight: 20,
    color: GlobalStyles.Color.gray_800,
  },
  username: {
    fontSize: GlobalStyles.FontSize.size_lg,
    color: GlobalStyles.Color.indigo,
    fontFamily: GlobalStyles.FontFamily.helvetica,
  },
  selectBank1Item: {
    borderStyle: "solid",
    borderColor: "#e8e8e8",
    borderWidth: 1,
    height: 60,
    borderRadius: GlobalStyles.Border.br_md,
    backgroundColor: GlobalStyles.Color.white,
  },
  groupChild: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    backgroundColor: GlobalStyles.Color.gray_500,
    borderRadius: GlobalStyles.Border.br_md,
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
  component208118: {
    bottom: 0,
  },
  hello2: {
    top: "36.67%",
    left: "41.41%",
    fontSize: GlobalStyles.FontSize.size_base,
    lineHeight: 17,
    textTransform: "uppercase",
    color: GlobalStyles.Color.black,
    position: "absolute",
  },
  component208118Parent: {
    height: 60,
  },
  selectBank1: {
    flex: 1,
    width: "100%",
    backgroundColor: GlobalStyles.Color.white,
  },
});

export default SelectBank1;
