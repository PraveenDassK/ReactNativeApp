import * as React from "react";
import { StyleSheet, View, Image, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import GlobalStyles from "../GlobalStyles";

const TerminatedCard = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.terminatedCard}>
      <View style={styles.terminatedCardChild} />
      <Image
        style={[styles.brokenCreditCardIcon, styles.mt_592_95, styles.mr12]}
        resizeMode="cover"
        source={require("../assets/brokencreditcard.png")}
      />
      <Text
        style={[styles.hello, styles.mt43_05, styles.ml1, styles.helloTypo]}
      >
        <Text style={styles.yourCardHas}>Your card has been</Text>
        <Text style={styles.yourCardHas}>terminated.</Text>
      </Text>
      <Pressable
        style={[styles.component208117Parent, styles.mt82_05, styles.ml1]}
        onPress={() => navigation.navigate("CardSettings")}
      >
        <View
          style={[
            styles.component208117,
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
        <Text style={[styles.hello1, styles.helloTypo]}>GO Back</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  mt_592_95: {
    marginTop: -592.95,
  },
  mr12: {
    marginRight: GlobalStyles.Margin.margin_13xs,
  },
  mt43_05: {
    marginTop: 43.05,
  },
  ml1: {
    marginLeft: GlobalStyles.Margin.margin_24xs,
  },
  mt82_05: {
    marginTop: 82.05,
  },
  helloTypo: {
    textAlign: "center",
    fontFamily: GlobalStyles.FontFamily.helvetica,
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
  terminatedCardChild: {
    backgroundColor: GlobalStyles.Color.gray_300,
    width: 375,
    height: 815,
  },
  brokenCreditCardIcon: {
    width: 125,
    height: 85,
  },
  yourCardHas: {
    margin: GlobalStyles.Margin.margin_25xs,
  },
  hello: {
    fontSize: GlobalStyles.FontSize.size_5xl,
    lineHeight: 30,
    fontWeight: "700",
    color: GlobalStyles.Color.indigo,
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
  component208117: {
    bottom: 0,
  },
  hello1: {
    top: "35%",
    left: "26.71%",
    fontSize: GlobalStyles.FontSize.size_base,
    lineHeight: 17,
    textTransform: "uppercase",
    color: GlobalStyles.Color.black,
    position: "absolute",
  },
  component208117Parent: {
    width: 146,
    height: 60,
  },
  terminatedCard: {
    backgroundColor: GlobalStyles.Color.white,
    flex: 1,
    alignItems: "center",
    width: "100%",
  },
});

export default TerminatedCard;
