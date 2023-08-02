import React,{ useEffect, useState} from "react";
import * as ImagePicker from "expo-image-picker"
import { Text, StyleSheet, View, Image } from "react-native";
import GlobalStyles from "../../GlobalStyles";

import Screen from "../components/Screen";

const ProofOfResidencyListA1 = () => {
  const [imageUri, setImageUri] = useState();
  const [base64, setBase64] = useState()

  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestCameraPermissionsAsync()
    if (!granted) alert('You need to enable permission to access the library')
  }

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        base64: true
      })

      
     
      if (!result.canceled) {
        setImageUri(result.assets[0].uri)
        setBase64(result.assets[0].base64)
      }

    } catch (error) {
      
    }
  }

  useEffect(() => {
    requestPermission();
  }, [])


  return (
    <Screen style={{backgroundColor: "#f3f5f5"}}>
    <View style={styles.proofOfResidencyListA1}>
      <Image
            style={[styles.arrowCircle, styles.arrowPosition]}
            resizeMode="cover"
            source={require("../assets/icon-whitearrow.png")}
          />
      <View style={styles.groupParent}>
        <View style={styles.helloParent}>
          <Text style={styles.hello}>Proof of Residency</Text>
          <Text style={[styles.hello1, styles.helloTypo, styles.helloPosition]}>
            Please provide us a proof of your residence.
          </Text>
        </View>
        <Text style={styles.yourCountry}>Your Country</Text>
        <View style={styles.unitedKingdomParent}>
          <Text style={styles.unitedKingdom}>United Kingdom</Text>
          {/* <Image
            style={[styles.maskGroup288, styles.maskGroup288Position]}
            resizeMode="cover"
            source={require("../assets/image-ukflag.png")}
          />
            source={require("../assets/mask-group-288@3x.png")}
          /> */}
        </View>
        <Text style={[styles.hello2, styles.helloTypo]}>
          Select one document from below categories
        </Text>
        <View
          style={[
            styles.bankBuildingSocietyMortgaParent,
            styles.parentShadowBox,
          ]}
        >
          <Text
            style={[
              styles.bankBuildingSocietyMortga,
              styles.councilTaxOrUtilityBillTypo,
            ]}
          >
            <Text style={styles.bankBuilding}>Bank, building{'\n'}</Text>
            <Text style={styles.bankBuilding}>society,{'\n'}</Text>
            <Text style={styles.bankBuilding}>mortgage or{'\n'}</Text>
            <Text style={styles.bankBuilding}>HMRC tax{'\n'}</Text>
            <Text style={styles.bankBuilding}>statement</Text>
          </Text>
          {/* <Image
            style={[styles.iconIonicIosArrowForward, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/icon-carbonyteforwardarrow@3x.png")}
          />
            source={require("../assets/icon-ioniciosarrowforward19@3x.png")}
          /> */}
        </View>
        <View
          style={[
            styles.houseOrMotorInsuranceCertiParent,
            styles.parentShadowBox,
          ]}
        >
          <Text
            style={[
              styles.houseOrMotorInsuranceCerti,
              styles.councilTaxOrUtilityBillTypo,
            ]}
          >
            <Text style={styles.bankBuilding}>House or{'\n'}</Text>
            <Text style={styles.bankBuilding}>motor{'\n'}</Text>
            <Text style={styles.bankBuilding}>insurance{'\n'}</Text>
            <Text style={styles.bankBuilding}>certificate</Text>
          </Text>
          {/* <Image
            style={[styles.iconIonicIosArrowForward1, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/icon-ioniciosarrowforward19@3x.png")}
          /> */}
        </View>
        <View
          style={[styles.councilTaxOrUtilityBillParent, styles.parentShadowBox]}
          onPress={selectImage}
        >
          <Text
            style={[
              styles.councilTaxOrUtilityBill,
              styles.councilTaxOrUtilityBillTypo,
            ]}
          >
            <Text onPress={selectImage}style={styles.bankBuilding}>Council tax {'\n'}</Text>
            <Text style={styles.bankBuilding}>or {'\n'}</Text>
            <Text style={styles.bankBuilding}>utility bill</Text>
          </Text>
          {/* <Image
            style={[styles.iconIonicIosArrowForward1, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/icon-carbonyteforwardarrow.png")}
          />
            source={require("../assets/icon-ioniciosarrowforward19@3x.png")}
          /> */}
        </View>
        <Text style={[styles.hello3, styles.helloTypo, styles.helloPosition]}>
          Select one document from below categories
        </Text>
        <View style={styles.currentSignedPassportParent}>
          <Text
            style={[styles.currentSignedPassport, styles.underReviewPosition]}
          >
            Current signed passport 
          </Text>
          <Text style={[styles.underReview, styles.underReviewPosition]}>
            Under Review
          </Text>
          {/* <Image
            style={[styles.iconAwesomeCheckCircle, styles.maskGroup288Position]}
            resizeMode="cover"
            source={require("../assets/icon-bluecheck.png")}
          /> */}
        </View>
      </View>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      
      {imageUri && <Image source={{ uri: imageUri }} style={{ width: 200, height: 200, zIndex: 7 }} />}
      {base64 && <Text>{base64}</Text>}
    </View>
    </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  helloTypo: {
    color: GlobalStyles.Color.gray_700,
    //fontFamily: GlobalStyles.FontFamily.helvetica,
    fontSize: GlobalStyles.FontSize.size_base,
    top: "50%",
    textAlign: "left",
    position: "absolute",
  },
  helloPosition: {
    left: 1,
    color: GlobalStyles.Color.gray_700,
  },
  maskGroup288Position: {
    top: "50%",
    position: "absolute",
  },
  arrowPosition: {
    top: "6%",
    position: "absolute",
  },
  arrowCircle: {
    marginTop: -10.11,
    marginLeft: 6.54,
    width: 15,
    height: 15,
  },
  parentShadowBox: {
    height: 125,
    width: 104,
    borderRadius: GlobalStyles.Border.br_4xl,
    bottom: 0,
    shadowOpacity: 1,
    elevation: 20,
    shadowRadius: 20,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(1, 1, 253, 0.1)",
    position: "absolute",
    backgroundColor: GlobalStyles.Color.white,
  },
  councilTaxOrUtilityBillTypo: {
    textAlign: "center",
    fontSize: GlobalStyles.FontSize.size_sm,
    color: GlobalStyles.Color.blue_100,
    // fontFamily: GlobalStyles.FontFamily.helvetica,
    position: "absolute",
  },
  iconPosition: {
    height: 6,
    width: 11,
    marginTop: -41.98,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  underReviewPosition: {
    marginTop: -6.11,
    left: "50%",
    color: GlobalStyles.Color.blue_100,
    // fontFamily: GlobalStyles.FontFamily.helvetica,
    fontSize: GlobalStyles.FontSize.size_base,
    top: "50%",
    textAlign: "left",
    position: "absolute",
  },
  hello: {
    fontSize: GlobalStyles.FontSize.size_8xl,
    fontWeight: "700",
    textAlign: "left",
    color: GlobalStyles.Color.indigo_100,
    left: 0,
    top: 0,
    position: "absolute",
  },
  hello1: {
    marginTop: 14.74,
  },
  helloParent: {
    left: 3,
    width: 275,
    height: 57,
    top: 0,
    position: "absolute",
  },
  yourCountry: {
    marginTop: -151.5,
    // fontFamily: GlobalStyles.FontFamily.helvetica,
    fontSize: GlobalStyles.FontSize.size_base,
    left: 1,
    top: "50%",
    textAlign: "left",
    color: GlobalStyles.Color.indigo_100,
    position: "absolute",
  },
  unitedKingdom: {
    marginTop: -6,
    left: 46,
    fontSize: GlobalStyles.FontSize.size_xl,
    color: GlobalStyles.Color.blue_100,
    // fontFamily: GlobalStyles.FontFamily.helvetica,
    top: "50%",
    textAlign: "left",
    position: "absolute",
  },
  maskGroup288: {
    marginTop: -10.76,
    left: 6,
    width: 22,
    height: 22,
  },
  unitedKingdomParent: {
    marginTop: -128.5,
    right: 1,
    height: 60,
    borderRadius: GlobalStyles.Border.br_2xs,
    left: 1,
    top: "50%",
    position: "absolute",
    backgroundColor: GlobalStyles.Color.white,
  },
  hello2: {
    marginTop: 95.99,
    left: 4,
  },
  bankBuilding: {
    margin: GlobalStyles.Margin.margin_8xs,
  },
  bankBuildingSocietyMortga: {
    bottom: 4,
    left: 11,
  },
  iconIonicIosArrowForward: {
    marginLeft: -6.17,
  },
  bankBuildingSocietyMortgaParent: {
    marginLeft: -51.25,
    left: "50%",
  },
  houseOrMotorInsuranceCerti: {
    marginLeft: -28,
    bottom: 7,
    left: "50%",
  },
  iconIonicIosArrowForward1: {
    marginLeft: -5.67,
  },
  houseOrMotorInsuranceCertiParent: {
    right: 0,
  },
  councilTaxOrUtilityBill: {
    marginLeft: -32,
    bottom: 6,
    left: "50%",
  },
  councilTaxOrUtilityBillParent: {
    left: 2,
  },
  hello3: {
    marginTop: -21.74,
  },
  currentSignedPassport: {
    marginLeft: -148,
  },
  underReview: {
    marginLeft: 59.67,
  },
  iconAwesomeCheckCircle: {
    marginTop: -8.11,
    marginLeft: 40.54,
    width: 15,
    height: 15,
    left: "50%",
  },
  currentSignedPassportParent: {
    marginTop: 6.26,
    right: 2,
    height: 50,
    shadowOpacity: 1,
    elevation: 20,
    shadowRadius: 20,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(1, 1, 253, 0.1)",
    borderRadius: GlobalStyles.Border.br_2xs,
    top: "50%",
    left: 0,
    position: "absolute",
    backgroundColor: GlobalStyles.Color.white,
  },
  groupParent: {
    width: 328,
    height: 497,
  },
  proofOfResidencyListA1: {
    flex: 1,
    width: "100%",
    paddingLeft: GlobalStyles.Padding.padding_7xs,
    paddingTop: GlobalStyles.Padding.padding_xs,
    paddingRight: 23,
    backgroundColor: GlobalStyles.Color.gray_100,
  },
});

export default ProofOfResidencyListA1;
