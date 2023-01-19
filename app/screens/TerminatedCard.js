import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import GlobalStyles from "../../GlobalStyles";
import { horizontalScale, verticalScale, moderateScale } from "../config/scaling"


const TerminatedCard = ({navigation}) => {


  return (
    <View style={styles.terminatedCard}>
      <View style={styles.brokenCreditCardParent}>
        <Image
          style={[styles.brokenCreditCardIcon, styles.groupParentPosition]}
          resizeMode="contain"
          source={require("../assets/brokencreditcard.png")}
        />
        <Text style={[styles.hello, styles.helloTypo]}>
          <Text style={styles.yourCardHas}>Your card has been{" "}</Text>
          <Text style={styles.yourCardHas}>terminated.</Text>

        </Text>
        <Pressable
          style={[styles.groupParent, styles.groupParentPosition]}
          onPress={() => navigation.navigate("CardSettings")}
        >
          <View style={[styles.rectangleParent]}>
            <View style={styles.groupChild} />
            <View style={[styles.maskGroup236]} />
          </View>
          <Text style={[styles.hello1, styles.helloTypo]}>GO Back</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupParentPosition: {
    width: "100%",
    position: "absolute",
  },
  helloTypo: {
    textAlign: "center",
    position: "absolute",
  },
  maskGroup236Position: {
    right: "50%",
    left: "50%",
    top: verticalScale(0),

  },
  brokenCreditCardIcon: {
    width: "20%",
    height: "20%",
    top: "25%",
      },
  yourCardHas: {},
  hello: {
    fontSize: GlobalStyles.FontSize.size_7xl,
    fontWeight: "700",
    color: GlobalStyles.Color.indigo_100,
    textAlign: "center",
    width: "100%",
    top: "50%",
  },
  groupChild: {
    height: "100%",
    borderRadius: GlobalStyles.Border.br_lg,
    backgroundColor: "#D8EBF9",
    width: "100%",
    alignItems: 'center'
  },
  maskGroup236: {
  },
  rectangleParent: {
    bottom: verticalScale(0),
    width: "30%",
    left: horizontalScale(130),
  },
  hello1: {
    top: "35%",
    fontSize: GlobalStyles.FontSize.size_lg,
    textTransform: "uppercase",
    color: "black",
    width: "100%",

  },
  groupParent: {
    width: "40%",
    height: verticalScale(50),
    bottom: verticalScale(0),
  },
  brokenCreditCardParent: {
    width: "100%",
    height: "80%",

  },
  terminatedCard: {
    backgroundColor: GlobalStyles.Color.gray_100,
    flex: 1,
    height: "100%",
    width: "100%",
  },
});

export default TerminatedCard;
