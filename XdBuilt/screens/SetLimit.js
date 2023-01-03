import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import GlobalStyles from "../GlobalStyles";

const SetLimit = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.setLimit}>
      <View style={styles.helloParent}>
        <Text style={[styles.hello, styles.helloColor1]}>
          Set a monthly limit
        </Text>
        <View style={styles.rectangleWrapper}>
          <View style={styles.groupChild} />
        </View>
        <Text style={[styles.hello1, styles.helloColor, styles.helloTypo]}>
          £0
        </Text>
        <Text style={[styles.hello2, styles.helloTypo]}>|</Text>
        <Text style={[styles.hello3, styles.helloPosition, styles.helloColor1]}>
          GBP
        </Text>
        <Text
          style={[styles.hello4, styles.helloPosition, styles.helloColor]}
        >{`Spent this month : £22.33 `}</Text>
        <Pressable
          style={[styles.groupParent, styles.parentPosition]}
          onPress={() => navigation.navigate("SpendingLimit1")}
        >
          <View style={[styles.rectangleParent, styles.parentPosition]}>
            <View style={styles.groupItem} />
            <View style={styles.maskGroup236} />
          </View>
          <Text style={[styles.hello5, styles.helloTypo]}>SET LIMIT</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  helloColor1: {
    color: GlobalStyles.Color.indigo_100,
    fontWeight: "700",
  },
  helloColor: {
    color: GlobalStyles.Color.gray_700,
    top: "50%",
  },
  helloTypo: {
    fontFamily: GlobalStyles.FontFamily.helvetica,
    position: "absolute",
  },
  helloPosition: {
    left: 15,
    fontFamily: GlobalStyles.FontFamily.helvetica,
    textAlign: "left",
    position: "absolute",
  },
  parentPosition: {
    bottom: 0,
    left: 0,
    right: 0,
    position: "absolute",
  },
  hello: {
    left: 2,
    fontSize: GlobalStyles.FontSize.size_7xl,
    fontFamily: GlobalStyles.FontFamily.typoGrotesk,
    textAlign: "left",
    top: 0,
    position: "absolute",
  },
  groupChild: {
    marginTop: -31.5,
    borderRadius: GlobalStyles.Border.br_2xl,
    backgroundColor: GlobalStyles.Color.white,
    top: "50%",
    height: 63,
    left: 0,
    right: 0,
    position: "absolute",
  },
  rectangleWrapper: {
    top: 44,
    height: 63,
    left: 0,
    right: 0,
    position: "absolute",
  },
  hello1: {
    marginTop: -136.5,
    right: 30,
    fontSize: GlobalStyles.FontSize.size_2xl,
    textAlign: "left",
    fontWeight: "700",
    color: GlobalStyles.Color.gray_700,
    fontFamily: GlobalStyles.FontFamily.helvetica,
  },
  hello2: {
    top: 59,
    right: 28,
    fontSize: GlobalStyles.FontSize.size_4xl,
    fontWeight: "300",
    color: GlobalStyles.Color.blue_100,
    textAlign: "left",
  },
  hello3: {
    top: 62,
    fontSize: GlobalStyles.FontSize.size_base,
  },
  hello4: {
    marginTop: -117.5,
    fontSize: GlobalStyles.FontSize.size_3xs,
  },
  groupItem: {
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
  rectangleParent: {
    top: 0,
  },
  hello5: {
    top: "38.33%",
    left: "38.96%",
    fontSize: GlobalStyles.FontSize.size_lg,
    textTransform: "uppercase",
    color: GlobalStyles.Color.black,
    textAlign: "center",
  },
  groupParent: {
    height: 60,
  },
  helloParent: {
    width: 326,
    height: 399,
  },
  setLimit: {
    backgroundColor: GlobalStyles.Color.gray_1100,
    flex: 1,
    paddingLeft: GlobalStyles.Padding.padding_7xs,
    paddingTop: GlobalStyles.Padding.padding_6xl,
    paddingRight: GlobalStyles.Padding.padding_8xs,
    width: "100%",
  },
});

export default SetLimit;
