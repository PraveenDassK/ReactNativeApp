import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import GlobalStyles from "../../GlobalStyles";
const TerminatedCard = ({navigation}) => {


  return (
    <View style={styles.terminatedCard}>
      <View style={styles.brokenCreditCardParent}>
        <Image
          style={[styles.brokenCreditCardIcon, styles.groupParentPosition]}
          resizeMode="cover"
          source={require("../assets/brokencreditcard.png")}
        />
        <Text style={[styles.hello, styles.helloTypo]}>
          <Text style={styles.yourCardHas}>Your card has been</Text>
          <Text style={styles.yourCardHas}>terminated.</Text>
        </Text>
        <Pressable
          style={[styles.groupParent, styles.groupParentPosition]}
          onPress={() => navigation.navigate("CardSettings")}
        >
          <View style={[styles.rectangleParent, styles.maskGroup236Position]}>
            <View style={styles.groupChild} />
            <View style={[styles.maskGroup236, styles.maskGroup236Position]} />
          </View>
          <Text style={[styles.hello1, styles.helloTypo]}>GO Back</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupParentPosition: {
    left: "50%",
    position: "absolute",
  },
  helloTypo: {
    textAlign: "center",
    // fontFamily: GlobalStyles.FontFamily.helvetica,
    position: "absolute",
  },
  maskGroup236Position: {
    right: 0,
    left: 0,
    top: 0,
    position: "absolute",
  },
  brokenCreditCardIcon: {
    marginLeft: -69,
    width: 125,
    height: 85,
    top: 0,
    left: "50%",
  },
  yourCardHas: {
    margin: GlobalStyles.Margin.margin_8xs,
  },
  hello: {
    marginTop: -32,
    top: "50%",
    fontSize: GlobalStyles.FontSize.size_7xl,
    lineHeight: 30,
    fontWeight: "700",
    color: GlobalStyles.Color.indigo_100,
    left: 0,
    textAlign: "center",
    // fontFamily: GlobalStyles.FontFamily.helvetica,
  },
  groupChild: {
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
    bottom: 13,
  },
  rectangleParent: {
    bottom: 0,
  },
  hello1: {
    top: "38.33%",
    left: "26.71%",
    fontSize: GlobalStyles.FontSize.size_lg,
    textTransform: "uppercase",
    color: GlobalStyles.Color.white,
  },
  groupParent: {
    marginLeft: -73,
    width: 146,
    height: 60,
    bottom: 0,
  },
  brokenCreditCardParent: {
    width: 230,
    height: 328,
  },
  terminatedCard: {
    backgroundColor: GlobalStyles.Color.gray_100,
    flex: 1,
    paddingLeft: 93,
    paddingTop: 162,
    paddingRight: 72,
    width: "100%",
  },
});

export default TerminatedCard;
