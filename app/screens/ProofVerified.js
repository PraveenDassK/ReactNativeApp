import * as React from "react";
import { Text, StyleSheet, View, Pressable, Image } from "react-native";
//import { useNavigation } from "@react-navigation/native";
import GlobalStyles from "../../GlobalStyles";

const ProofVerified = () => {
  //const navigation = useNavigation();

  return (
    <View style={styles.proofVerified}>
      <View style={styles.helloParent}>
        <Text style={[styles.hello, styles.helloTypo]}>
          Select one document from below categories
        </Text>
        <Text style={styles.hello1}>
          Select one document from below categories
        </Text>
        <View style={styles.helloGroup}>
          <Text style={[styles.hello2, styles.hello2Color]}>
            Proof of Residency
          </Text>
          <Text style={[styles.hello3, styles.helloTypo]}>
            Please provide us a proof of your residence.
          </Text>
        </View>
        <Pressable
          style={styles.groupParent}
          onPress={() => navigation.navigate("BusinessAddress2")}
        >
          <View style={styles.rectangleParent}>
            <View style={styles.groupChild} />
            <View style={styles.maskGroup236} />
          </View>
          <Text style={styles.hello4}>Continue</Text>
        </Pressable>
        <Text style={[styles.yourCountry, styles.hello2Color]}>
          Your Country
        </Text>
        <View
          style={[styles.currentSignedPassportParent, styles.parentShadowBox]}
        >
          <Text
            style={[
              styles.currentSignedPassport,
              styles.underReviewTypo,
              styles.underReviewPosition,
            ]}
          >
            Current signed passport 
          </Text>
          <Text
            style={[
              styles.underReview,
              styles.underReviewTypo,
              styles.underReviewPosition,
            ]}
          >
            Under Review
          </Text>
          <Image
            style={[styles.iconAwesomeCheckCircle, styles.maskGroup288Position]}
            resizeMode="cover"
            source={require("../assets/icon-awesomecheckcircle3.png")}
          />
        </View>
        <View
          style={[styles.councilTaxOrUtilityBillParent, styles.parentShadowBox]}
        >
          <Text
            style={[
              styles.currentSignedPassport,
              styles.underReviewTypo,
              styles.underReviewPosition,
            ]}
          >
            Council tax or utility bill
          </Text>
          <Text
            style={[
              styles.underReview,
              styles.underReviewTypo,
              styles.underReviewPosition,
            ]}
          >
            Under Review
          </Text>
          <Image
            style={[styles.iconAwesomeCheckCircle, styles.maskGroup288Position]}
            resizeMode="cover"
            source={require("../assets/icon-awesomecheckcircle3.png")}
          />
        </View>
        <View style={styles.unitedKingdomParent}>
          <Text style={[styles.unitedKingdom, styles.underReviewTypo]}>
            United Kingdom
          </Text>
          <Image
            style={[styles.maskGroup288, styles.maskGroup288Position]}
            resizeMode="cover"
            source={require("../assets/mask-group-288.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  helloTypo: {
    textAlign: "left",
    color: GlobalStyles.Color.gray_700,
    fontSize: GlobalStyles.FontSize.size_base,
    left: 1,
    top: "50%",
    position: "absolute",
  },
  hello2Color: {
    color: GlobalStyles.Color.indigo_100,
    textAlign: "left",
    position: "absolute",
  },
  parentShadowBox: {
    height: 50,
    shadowOpacity: 1,
    elevation: 20,
    shadowRadius: 20,
    shadowOffset: {
      width: 0,
      height: -3,
    },
    shadowColor: "rgba(1, 1, 253, 0.1)",
    right: 1,
    borderRadius: GlobalStyles.Border.br_2xs,
    left: 0,
    top: "50%",
    position: "absolute",
    backgroundColor: GlobalStyles.Color.white,
  },
  underReviewTypo: {
    color: GlobalStyles.Color.blue_100,
    textAlign: "left",
    top: "50%",
    position: "absolute",
  },
  underReviewPosition: {
    marginTop: -6.11,
    color: GlobalStyles.Color.blue_100,
    left: "50%",
    fontSize: GlobalStyles.FontSize.size_base,
  },
  maskGroup288Position: {
    top: "50%",
    position: "absolute",
  },
  hello: {
    marginTop: -100.24,
  },
  hello1: {
    marginTop: 17.49,
    left: 3,
    textAlign: "left",
    color: GlobalStyles.Color.gray_700,
    fontSize: GlobalStyles.FontSize.size_base,
    top: "50%",
    position: "absolute",
  },
  hello2: {
    fontSize: GlobalStyles.FontSize.size_8xl,
    fontWeight: "700",
    left: 0,
    color: GlobalStyles.Color.indigo_100,
    top: 0,
  },
  hello3: {
    marginTop: 14.74,
  },
  helloGroup: {
    width: 275,
    height: 57,
    top: 0,
    left: 3,
    position: "absolute",
  },
  groupChild: {
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
    right: 0,
    left: 0,
    top: 0,
    position: "absolute",
  },
  rectangleParent: {
    bottom: 0,
    right: 0,
    left: 0,
    top: 0,
    position: "absolute",
  },
  hello4: {
    top: "40%",
    left: "38.04%",
    fontSize: GlobalStyles.FontSize.size_lg,
    textTransform: "uppercase",
    color: GlobalStyles.Color.black,
    textAlign: "center",
    position: "absolute",
  },
  groupParent: {
    height: 60,
    bottom: 0,
    right: 0,
    left: 1,
    position: "absolute",
  },
  yourCountry: {
    top: 97,
    color: GlobalStyles.Color.indigo_100,
    fontSize: GlobalStyles.FontSize.size_base,
    left: 1,
  },
  currentSignedPassport: {
    marginLeft: -148,
    left: "50%",
  },
  underReview: {
    marginLeft: 59.67,
    left: "50%",
  },
  iconAwesomeCheckCircle: {
    marginTop: -8.11,
    marginLeft: 40.54,
    width: 15,
    height: 15,
    left: "50%",
  },
  currentSignedPassportParent: {
    marginTop: -72.24,
  },
  councilTaxOrUtilityBillParent: {
    marginTop: 45.49,
  },
  unitedKingdom: {
    marginTop: -6,
    left: 46,
    fontSize: GlobalStyles.FontSize.size_xl,
  },
  maskGroup288: {
    marginTop: -10.76,
    left: 6,
    width: 22,
    height: 22,
  },
  unitedKingdomParent: {
    marginTop: -207,
    borderRadius: GlobalStyles.Border.br_2xs,
    height: 60,
    right: 0,
    left: 1,
    top: "50%",
    position: "absolute",
    backgroundColor: GlobalStyles.Color.white,
  },
  helloParent: {
    width: 327,
    height: 654,
  },
  proofVerified: {
    flex: 1,
    paddingLeft: GlobalStyles.Padding.padding_7xs,
    paddingTop: GlobalStyles.Padding.padding_5xl,
    paddingRight: GlobalStyles.Padding.padding_8xs,
    width: "100%",
    backgroundColor: GlobalStyles.Color.gray_100,
  },
});

export default ProofVerified;
