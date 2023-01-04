import * as React from "react";
import { Text, StyleSheet, View, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import GlobalStyles from "../GlobalStyles";

const DirectorsOrPartners2 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.directorsOrPartners2}>
      <View style={styles.firstNameParent}>
        <Text style={[styles.firstName, styles.nameTypo, styles.nameTypo1]}>
          First Name
        </Text>
        <Text style={[styles.lastName, styles.nameTypo, styles.nameTypo1]}>
          Last Name
        </Text>
        <Text style={[styles.addressLine1, styles.nameTypo, styles.nameTypo1]}>
          Address Line 1
        </Text>
        <Text
          style={[
            styles.addressLine2Optional,
            styles.nameTypo,
            styles.nameTypo1,
          ]}
        >
          <Text style={styles.addressLine2}>{`Address Line 2 `}</Text>
          <Text style={styles.optional}>(optional)</Text>
        </Text>
        <Text style={[styles.townOrCity, styles.nameTypo, styles.nameTypo1]}>
          Town or city
        </Text>
        <Text style={[styles.postcode, styles.nameTypo, styles.nameTypo1]}>
          Postcode
        </Text>
        <Text style={[styles.dateOfBirth, styles.nameTypo, styles.nameTypo1]}>
          Date of Birth
        </Text>
        <Text style={[styles.appointedOn, styles.nameTypo, styles.nameTypo1]}>
          Appointed on
        </Text>
        <Text style={[styles.role, styles.nameTypo, styles.nameTypo1]}>
          Role
        </Text>
        <Text
          style={[styles.countryOfResidence, styles.nameTypo, styles.nameTypo1]}
        >
          Country of residence
        </Text>
        <Text style={[styles.nationality, styles.nameTypo, styles.nameTypo1]}>
          Nationality
        </Text>
        <Text style={[styles.occupation, styles.nameTypo, styles.nameTypo1]}>
          Occupation
        </Text>
        <Text style={[styles.identityProof, styles.nameTypo, styles.nameTypo1]}>
          Identity Proof
        </Text>
        <View
          style={[
            styles.groupChild,
            styles.groupChildBorder,
            styles.groupBorder,
          ]}
        />
        <View
          style={[
            styles.groupItem,
            styles.groupChildBorder,
            styles.groupBorder,
          ]}
        />
        <View style={[styles.groupInner, styles.groupChildPosition]} />
        <View style={[styles.groupView, styles.groupChildPosition]} />
        <View style={[styles.groupChild1, styles.groupChildPosition]} />
        <View style={[styles.groupChild2, styles.groupChildPosition]} />
        <View style={[styles.helloParent, styles.helloPosition1]}>
          <Text style={[styles.hello, styles.helloPosition1]}>
            Directors or Partners
          </Text>
          <Text style={[styles.hello1, styles.helloTypo]}>
            <Text style={styles.carbonyteWouldLike}>
              Carbonyte would like to know details of any
            </Text>
            <Text style={styles.carbonyteWouldLike}>
              Associates - usually the Directors or Partners
            </Text>
          </Text>
        </View>
        <Text style={[styles.hello2, styles.helloTypo]}>
          Enter the first name
        </Text>
        <Text style={[styles.hello3, styles.helloTypo]}>
          Enter the second name
        </Text>
        <Text style={[styles.hello4, styles.helloPosition]}>
          Enter the address line 1
        </Text>
        <Text style={[styles.hello5, styles.helloPosition]}>
          Enter the address line 2
        </Text>
        <Text style={[styles.hello6, styles.helloPosition]}>
          Enter the Town or city
        </Text>
        <Text style={[styles.hello7, styles.helloPosition]}>
          Enter the postcode
        </Text>
        <View
          style={[
            styles.helloGroup,
            styles.helloGroupLayout,
            styles.groupChildBorder,
            styles.helloGroupPosition,
          ]}
        >
          <Text style={[styles.hello8, styles.helloTypo]}>dd-mm-yyyy</Text>
          <View style={styles.rectangleView} />
          <View style={styles.layer}>
            <View style={[styles.vrstva98, styles.helloPosition1]}>
              <Image
                style={[styles.vrstva98, styles.helloPosition1]}
                resizeMode="cover"
                source={require("../assets/path-72.png")}
              />
              <View style={[styles.vrstva98Child, styles.vrstva98Layout]} />
              <View style={[styles.vrstva98Item, styles.vrstva98Layout]} />
            </View>
          </View>
        </View>
        <View
          style={[
            styles.iconIonicIosArrowDownParent,
            styles.helloGroupLayout,
            styles.groupChildBorder,
            styles.helloGroupPosition,
          ]}
        >
          <Image
            style={styles.iconIonicIosArrowDown}
            resizeMode="cover"
            source={require("../assets/icon-ioniciosarrowdown.png")}
          />
          <Text style={[styles.hello8, styles.helloTypo]}>
            Select the nationality
          </Text>
        </View>
        <View
          style={[
            styles.iconIonicIosArrowDownGroup,
            styles.helloGroupLayout,
            styles.groupChildBorder,
            styles.helloGroupPosition,
          ]}
        >
          <Image
            style={styles.iconIonicIosArrowDown}
            resizeMode="cover"
            source={require("../assets/icon-ioniciosarrowdown.png")}
          />
          <Text style={[styles.hello8, styles.helloTypo]}>
            Select the occupation
          </Text>
        </View>
        <View
          style={[
            styles.iconIonicIosArrowDownContainer,
            styles.helloGroupLayout,
            styles.groupChildBorder,
            styles.helloGroupPosition,
          ]}
        >
          <Image
            style={styles.iconIonicIosArrowDown}
            resizeMode="cover"
            source={require("../assets/icon-ioniciosarrowdown.png")}
          />
          <Text style={[styles.hello8, styles.helloTypo]}>
            Select the country of residence
          </Text>
        </View>
        <View
          style={[
            styles.helloContainer,
            styles.helloGroupLayout,
            styles.groupChildBorder,
            styles.helloGroupPosition,
          ]}
        >
          <Text style={[styles.hello8, styles.helloTypo]}>dd-mm-yyyy</Text>
          <View style={styles.rectangleView} />
          <View style={styles.layer}>
            <View style={[styles.vrstva98, styles.helloPosition1]}>
              <Image
                style={[styles.vrstva98, styles.helloPosition1]}
                resizeMode="cover"
                source={require("../assets/path-72.png")}
              />
              <View style={[styles.vrstva98Child, styles.vrstva98Layout]} />
              <View style={[styles.vrstva98Item, styles.vrstva98Layout]} />
            </View>
          </View>
        </View>
        <View
          style={[
            styles.iconIonicIosArrowDownParent1,
            styles.helloGroupLayout,
            styles.groupChildBorder,
            styles.helloGroupPosition,
          ]}
        >
          <Image
            style={styles.iconIonicIosArrowDown}
            resizeMode="cover"
            source={require("../assets/icon-ioniciosarrowdown.png")}
          />
          <Text style={[styles.hello8, styles.helloTypo]}>Select the role</Text>
        </View>
        <Pressable
          style={styles.groupParent}
          onPress={() => navigation.navigate("ConfirmDirectors")}
        >
          <View style={[styles.rectangleParent, styles.maskGroup236Position]}>
            <View style={[styles.groupChild4, styles.helloGroupLayout]} />
            <View style={[styles.maskGroup236, styles.maskGroup236Position]} />
          </View>
          <Text style={[styles.hello14, styles.nameTypo]}>Continue</Text>
        </Pressable>
        <Pressable
          style={[styles.rectangleGroup, styles.helloGroupPosition]}
          onPress={() => navigation.navigate("DirectorsOrPartners")}
        >
          <View style={[styles.groupChild4, styles.helloGroupLayout]} />
          <Image
            style={styles.iconIonicIosAdd}
            resizeMode="cover"
            source={require("../assets/icon-ioniciosadd.png")}
          />
        </Pressable>
        <View style={styles.personsWithSignificantContrParent}>
          <Text
            style={[
              styles.personsWithSignificantContr,
              styles.nameTypo,
              styles.nameTypo1,
            ]}
          >
            Persons with significant control
          </Text>
          <View
            style={[
              styles.groupChild6,
              styles.helloPosition1,
              styles.groupChildBorder,
            ]}
          />
        </View>
        <View
          style={[
            styles.currentSignedPassportParent,
            styles.parentShadowBox,
            styles.currentParentShadowBox,
          ]}
        >
          <Text style={[styles.currentSignedPassport, styles.currentPosition]}>
            <Text style={styles.carbonyteWouldLike}>Current</Text>
            <Text style={styles.carbonyteWouldLike}>signed</Text>
            <Text style={styles.carbonyteWouldLike}>passport </Text>
          </Text>
          <View style={[styles.groupChild7, styles.groupChildLayout]} />
          <Image
            style={[styles.iconIonicIosArrowForward, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/icon-ioniciosarrowforward16.png")}
          />
        </View>
        <View
          style={[
            styles.currentPhotoCardDrivingLicParent,
            styles.parentShadowBox,
            styles.currentParentShadowBox,
          ]}
        >
          <Text
            style={[styles.currentPhotoCardDrivingLic, styles.currentPosition]}
          >
            <Text style={styles.carbonyteWouldLike}>Current</Text>
            <Text style={styles.carbonyteWouldLike}>photo-card</Text>
            <Text style={styles.carbonyteWouldLike}>driving license </Text>
          </Text>
          <View style={[styles.groupChild8, styles.groupChildLayout]} />
          <Image
            style={[styles.iconIonicIosArrowForward1, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/icon-ioniciosarrowforward16.png")}
          />
        </View>
        <View style={[styles.birthCertificateParent, styles.parentShadowBox]}>
          <Text style={[styles.birthCertificate, styles.helloTypo]}>
            <Text style={styles.carbonyteWouldLike}>Birth</Text>
            <Text style={styles.carbonyteWouldLike}>Certificate </Text>
          </Text>
          <View style={[styles.groupChild9, styles.groupChildLayout]} />
          <Image
            style={[styles.iconIonicIosArrowForward2, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/icon-ioniciosarrowforward16.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  nameTypo: {
    fontFamily: GlobalStyles.FontFamily.helvetica,
    textAlign: "left",
    position: "absolute",
  },
  nameTypo1: {
    fontSize: GlobalStyles.FontSize.size_xl,
    fontFamily: GlobalStyles.FontFamily.helvetica,
  },
  groupChildBorder: {
    borderWidth: 1,
    borderColor: "#e8e8e8",
    borderStyle: "solid",
    left: 0,
    backgroundColor: GlobalStyles.Color.white,
  },
  groupBorder: {
    borderRadius: GlobalStyles.Border.br_2xs,
    height: 60,
    borderColor: "#e8e8e8",
    borderStyle: "solid",
    right: 24,
    position: "absolute",
  },
  groupChildPosition: {
    right: 22,
    height: 60,
    borderWidth: 1,
    borderColor: "#e8e8e8",
    borderStyle: "solid",
    borderRadius: GlobalStyles.Border.br_2xs,
    top: "50%",
    left: 2,
    position: "absolute",
    backgroundColor: GlobalStyles.Color.white,
  },
  helloPosition1: {
    top: 0,
    position: "absolute",
  },
  helloTypo: {
    fontSize: GlobalStyles.FontSize.size_base,
    top: "50%",
    textAlign: "left",
    fontFamily: GlobalStyles.FontFamily.helvetica,
    position: "absolute",
  },
  helloPosition: {
    left: 21,
    fontSize: GlobalStyles.FontSize.size_base,
    color: GlobalStyles.Color.gray_700,
    top: "50%",
    textAlign: "left",
    fontFamily: GlobalStyles.FontFamily.helvetica,
    position: "absolute",
  },
  helloGroupLayout: {
    borderRadius: GlobalStyles.Border.br_lg,
    position: "absolute",
  },
  helloGroupPosition: {
    right: 24,
    height: 60,
  },
  vrstva98Layout: {
    height: 3,
    backgroundColor: GlobalStyles.Color.blue_100,
    borderRadius: GlobalStyles.Border.br_7xs,
    top: 10,
    position: "absolute",
  },
  maskGroup236Position: {
    right: 0,
    top: 0,
    left: 0,
    position: "absolute",
  },
  parentShadowBox: {
    height: 148,
    shadowOpacity: 1,
    elevation: 20,
    shadowRadius: 20,
    shadowOffset: {
      width: 0,
      height: -3,
    },
    shadowColor: "rgba(1, 1, 253, 0.1)",
    borderBottomLeftRadius: GlobalStyles.Border.br_4xl,
    borderTopLeftRadius: GlobalStyles.Border.br_4xl,
    marginTop: 555.5,
    top: "50%",
    position: "absolute",
    backgroundColor: GlobalStyles.Color.white,
  },
  currentParentShadowBox: {
    width: 137,
    height: 148,
    shadowOpacity: 1,
    elevation: 20,
    shadowRadius: 20,
    shadowOffset: {
      width: 0,
      height: -3,
    },
    shadowColor: "rgba(1, 1, 253, 0.1)",
    borderBottomLeftRadius: GlobalStyles.Border.br_4xl,
    borderTopLeftRadius: GlobalStyles.Border.br_4xl,
    marginTop: 555.5,
  },
  currentPosition: {
    marginTop: 10.89,
    left: "50%",
    fontSize: GlobalStyles.FontSize.size_base,
    top: "50%",
    textAlign: "left",
    color: GlobalStyles.Color.indigo_100,
    fontFamily: GlobalStyles.FontFamily.helvetica,
    position: "absolute",
  },
  groupChildLayout: {
    height: 27,
    width: 86,
    top: 11,
    position: "absolute",
    backgroundColor: GlobalStyles.Color.white,
  },
  iconLayout: {
    height: 6,
    width: 11,
    top: 21,
    position: "absolute",
  },
  firstName: {
    top: 112,
    textAlign: "left",
    color: GlobalStyles.Color.indigo_100,
    left: 0,
  },
  lastName: {
    top: 233,
    textAlign: "left",
    color: GlobalStyles.Color.indigo_100,
    left: 0,
  },
  addressLine1: {
    top: 357,
    left: 2,
    textAlign: "left",
    color: GlobalStyles.Color.indigo_100,
  },
  addressLine2: {
    color: GlobalStyles.Color.indigo_100,
  },
  optional: {
    color: GlobalStyles.Color.gray_700,
  },
  addressLine2Optional: {
    marginTop: -584.5,
    top: "50%",
    left: 2,
    textAlign: "left",
  },
  townOrCity: {
    marginTop: -462.5,
    top: "50%",
    left: 2,
    textAlign: "left",
    color: GlobalStyles.Color.indigo_100,
  },
  postcode: {
    marginTop: -340.5,
    top: "50%",
    left: 2,
    textAlign: "left",
    color: GlobalStyles.Color.indigo_100,
  },
  dateOfBirth: {
    marginTop: -94.5,
    top: "50%",
    textAlign: "left",
    color: GlobalStyles.Color.indigo_100,
    left: 0,
  },
  appointedOn: {
    marginTop: 283.5,
    top: "50%",
    textAlign: "left",
    color: GlobalStyles.Color.indigo_100,
    left: 0,
  },
  role: {
    marginTop: -218.5,
    top: "50%",
    textAlign: "left",
    color: GlobalStyles.Color.indigo_100,
    left: 0,
  },
  countryOfResidence: {
    marginTop: 29.5,
    top: "50%",
    textAlign: "left",
    color: GlobalStyles.Color.indigo_100,
    left: 0,
  },
  nationality: {
    marginTop: 159.5,
    top: "50%",
    textAlign: "left",
    color: GlobalStyles.Color.indigo_100,
    left: 0,
  },
  occupation: {
    marginTop: 407.5,
    top: "50%",
    textAlign: "left",
    color: GlobalStyles.Color.indigo_100,
    left: 0,
  },
  identityProof: {
    marginTop: 531.5,
    top: "50%",
    textAlign: "left",
    color: GlobalStyles.Color.indigo_100,
    left: 0,
  },
  groupChild: {
    top: 136,
    height: 60,
  },
  groupItem: {
    top: 257,
    height: 60,
  },
  groupInner: {
    marginTop: -682.5,
  },
  groupView: {
    marginTop: -560.5,
  },
  groupChild1: {
    marginTop: -438.5,
  },
  groupChild2: {
    marginTop: -316.5,
  },
  hello: {
    fontSize: GlobalStyles.FontSize.size_8xl,
    fontWeight: "700",
    fontFamily: GlobalStyles.FontFamily.typoGrotesk,
    textAlign: "left",
    color: GlobalStyles.Color.indigo_100,
    left: 0,
  },
  carbonyteWouldLike: {
    margin: GlobalStyles.Margin.margin_8xs,
  },
  hello1: {
    marginTop: 4.74,
    left: 1,
    lineHeight: 20,
    color: GlobalStyles.Color.gray_700,
  },
  helloParent: {
    width: 281,
    height: 77,
    left: 2,
  },
  hello2: {
    marginTop: -904.5,
    left: 19,
    color: GlobalStyles.Color.gray_700,
  },
  hello3: {
    marginTop: -780.5,
    left: 19,
    color: GlobalStyles.Color.gray_700,
  },
  hello4: {
    marginTop: -658.5,
  },
  hello5: {
    marginTop: -536.5,
  },
  hello6: {
    marginTop: -414.5,
  },
  hello7: {
    marginTop: -292.5,
  },
  hello8: {
    marginTop: -6,
    left: 14,
    color: GlobalStyles.Color.gray_700,
  },
  rectangleView: {
    height: "38.33%",
    width: "7.06%",
    top: "31.67%",
    right: "7.06%",
    bottom: "30%",
    left: "85.89%",
    position: "absolute",
  },
  vrstva98: {
    width: 22,
    height: 20,
    left: 0,
  },
  vrstva98Child: {
    left: 3,
    width: 3,
  },
  vrstva98Item: {
    left: 8,
    width: 4,
  },
  layer: {
    height: "32.7%",
    width: "6.63%",
    top: "34.7%",
    right: "7.27%",
    bottom: "32.6%",
    left: "86.1%",
    position: "absolute",
  },
  helloGroup: {
    marginTop: 307.5,
    height: 60,
    top: "50%",
  },
  iconIonicIosArrowDown: {
    marginTop: -2.64,
    right: 26,
    width: 9,
    height: 5,
    top: "50%",
    position: "absolute",
  },
  iconIonicIosArrowDownParent: {
    marginTop: 183.5,
    height: 60,
    top: "50%",
  },
  iconIonicIosArrowDownGroup: {
    marginTop: 431.5,
    height: 60,
    top: "50%",
  },
  iconIonicIosArrowDownContainer: {
    marginTop: 53.5,
    height: 60,
    top: "50%",
  },
  helloContainer: {
    marginTop: -70.5,
    height: 60,
    top: "50%",
  },
  iconIonicIosArrowDownParent1: {
    marginTop: -194.5,
    height: 60,
    top: "50%",
  },
  groupChild4: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    backgroundColor: GlobalStyles.Color.gray_500,
    width: "100%",
  },
  maskGroup236: {
    bottom: 13,
  },
  rectangleParent: {
    bottom: 0,
  },
  hello14: {
    top: "40%",
    left: "34.65%",
    fontSize: GlobalStyles.FontSize.size_lg,
    lineHeight: 10,
    textTransform: "uppercase",
    color: GlobalStyles.Color.black,
    textAlign: "left",
  },
  groupParent: {
    width: 254,
    bottom: 0,
    height: 60,
    left: 0,
    position: "absolute",
  },
  iconIonicIosAdd: {
    marginTop: -9.04,
    marginLeft: -9.04,
    width: 18,
    height: 18,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  rectangleGroup: {
    width: 60,
    bottom: 0,
    height: 60,
    position: "absolute",
  },
  personsWithSignificantContr: {
    bottom: 2,
    left: 31,
    textAlign: "left",
    color: GlobalStyles.Color.indigo_100,
  },
  groupChild6: {
    borderRadius: GlobalStyles.Border.br_5xs,
    width: 23,
    bottom: 0,
  },
  personsWithSignificantContrParent: {
    bottom: 294,
    width: 251,
    height: 23,
    left: 0,
    position: "absolute",
  },
  currentSignedPassport: {
    marginLeft: -51,
  },
  groupChild7: {
    left: 16,
  },
  iconIonicIosArrowForward: {
    left: 17,
  },
  currentSignedPassportParent: {
    left: 0,
  },
  currentPhotoCardDrivingLic: {
    marginLeft: -49.5,
  },
  groupChild8: {
    left: 19,
  },
  iconIonicIosArrowForward1: {
    left: 20,
  },
  currentPhotoCardDrivingLicParent: {
    marginLeft: -57,
    left: "50%",
  },
  birthCertificate: {
    marginTop: 26.89,
    marginLeft: -38,
    left: "50%",
    color: GlobalStyles.Color.indigo_100,
  },
  groupChild9: {
    right: 9,
  },
  iconIonicIosArrowForward2: {
    marginLeft: -36.95,
    left: "50%",
  },
  birthCertificateParent: {
    width: 114,
    height: 148,
    shadowOpacity: 1,
    elevation: 20,
    shadowRadius: 20,
    shadowOffset: {
      width: 0,
      height: -3,
    },
    shadowColor: "rgba(1, 1, 253, 0.1)",
    borderBottomLeftRadius: GlobalStyles.Border.br_4xl,
    borderTopLeftRadius: GlobalStyles.Border.br_4xl,
    marginTop: 555.5,
    right: 0,
  },
  firstNameParent: {
    width: 350,
    height: 2127,
  },
  directorsOrPartners2: {
    flex: 1,
    paddingLeft: GlobalStyles.Padding.padding_7xs,
    paddingTop: GlobalStyles.Padding.padding_5xl,
    width: "100%",
    backgroundColor: GlobalStyles.Color.white,
  },
});

export default DirectorsOrPartners2;
