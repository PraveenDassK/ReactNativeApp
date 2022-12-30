import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import GlobalStyles from "../GlobalStyles";

const DirectorsOrPartners = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.directorsOrPartners}>
      <View style={[styles.directorsOrPartnersChild, styles.mt_49]} />
      <Text
        style={[
          styles.identityProof,
          styles.mt38,
          styles.ml25,
          styles.hello14Typo,
          styles.identityProofTypo,
        ]}
      >
        Identity Proof
      </Text>
      <View style={[styles.component2161, styles.mt43, styles.ml25]}>
        <Text
          style={[
            styles.personsWithSignificantContr,
            styles.hello14Typo,
            styles.identityProofTypo,
          ]}
        >
          Persons with significant control
        </Text>
        <View
          style={[
            styles.component2161Child,
            styles.childBorder,
            styles.childPosition,
          ]}
        />
      </View>
      <View
        style={[
          styles.currentSignedPassportParent,
          styles.mt9,
          styles.ml25,
          styles.parentShadowBox,
        ]}
      >
        <Text
          style={[
            styles.currentSignedPassport,
            styles.helloTypo,
            styles.helloIconPosition,
            styles.currentPosition,
          ]}
        >
          <Text style={styles.current}>Current</Text>
          <Text style={styles.current}>signed</Text>
          <Text style={styles.current}>passport </Text>
        </Text>
        <View style={[styles.groupChild, styles.groupLayout]} />
        <Image
          style={[styles.iconIonicIosArrowForward, styles.iconLayout1]}
          resizeMode="cover"
          source={require("../assets/icon-ioniciosarrowforward.png")}
        />
      </View>
      <View
        style={[
          styles.currentSignedPassportParent,
          styles.mt_148,
          styles.ml143,
          styles.parentShadowBox,
        ]}
      >
        <Text
          style={[
            styles.currentPhotoCardDrivingLic,
            styles.helloTypo,
            styles.helloIconPosition,
            styles.currentPosition,
          ]}
        >
          <Text style={styles.current}>Current</Text>
          <Text style={styles.current}>photo-card</Text>
          <Text style={styles.current}>driving license </Text>
        </Text>
        <View style={[styles.groupItem, styles.groupLayout]} />
        <Image
          style={[styles.iconIonicIosArrowForward1, styles.iconLayout1]}
          resizeMode="cover"
          source={require("../assets/icon-ioniciosarrowforward.png")}
        />
      </View>
      <View
        style={[
          styles.birthCertificateParent,
          styles.mt_148,
          styles.parentShadowBox,
        ]}
      >
        <Text
          style={[
            styles.birthCertificate,
            styles.helloTypo,
            styles.helloIconPosition,
          ]}
        >
          <Text style={styles.current}>Birth</Text>
          <Text style={styles.current}>Certificate </Text>
        </Text>
        <View style={[styles.groupInner, styles.groupLayout]} />
        <Image
          style={[styles.iconIonicIosArrowForward2, styles.iconLayout1]}
          resizeMode="cover"
          source={require("../assets/icon-ioniciosarrowforward.png")}
        />
      </View>
      <View
        style={[
          styles.component21524,
          styles.mt9,
          styles.ml25,
          styles.component21524Layout,
        ]}
      >
        <View
          style={[
            styles.component21524Child,
            styles.childBorder,
            styles.childPosition,
          ]}
        />
        <Image
          style={[styles.iconIonicIosArrowDown, styles.helloIconPosition]}
          resizeMode="cover"
          source={require("../assets/icon-ioniciosarrowdown.png")}
        />
        <Text
          style={[styles.hello, styles.helloTypo, styles.helloIconPosition]}
        >
          Select the occupation
        </Text>
      </View>
      <Text
        style={[
          styles.identityProof,
          styles.mt33,
          styles.ml25,
          styles.hello14Typo,
          styles.identityProofTypo,
        ]}
      >
        First Name
      </Text>
      <Text
        style={[
          styles.identityProof,
          styles.mt58,
          styles.ml25,
          styles.hello14Typo,
          styles.identityProofTypo,
        ]}
      >
        Last Name
      </Text>
      <Text
        style={[
          styles.identityProof,
          styles.mt58,
          styles.ml27,
          styles.hello14Typo,
          styles.identityProofTypo,
        ]}
      >
        Address Line 1
      </Text>
      <Text
        style={[
          styles.addressLine2Optional,
          styles.mt58,
          styles.ml27,
          styles.hello14Typo,
          styles.identityProofTypo,
        ]}
      >
        <Text style={styles.addressLine2}>{`Address Line 2 `}</Text>
        <Text style={styles.optional}>(optional)</Text>
      </Text>
      <Text
        style={[
          styles.identityProof,
          styles.mt58,
          styles.ml27,
          styles.hello14Typo,
          styles.identityProofTypo,
        ]}
      >
        Town or city
      </Text>
      <Text
        style={[
          styles.identityProof,
          styles.mt26,
          styles.ml27,
          styles.hello14Typo,
          styles.identityProofTypo,
        ]}
      >
        Postcode
      </Text>
      <Text
        style={[
          styles.identityProof,
          styles.mt38,
          styles.ml25,
          styles.hello14Typo,
          styles.identityProofTypo,
        ]}
      >
        Date of Birth
      </Text>
      <Text
        style={[
          styles.identityProof,
          styles.mt38,
          styles.ml25,
          styles.hello14Typo,
          styles.identityProofTypo,
        ]}
      >
        Appointed on
      </Text>
      <Text
        style={[
          styles.identityProof,
          styles.mt58,
          styles.ml25,
          styles.hello14Typo,
          styles.identityProofTypo,
        ]}
      >
        Role
      </Text>
      <Text
        style={[
          styles.identityProof,
          styles.mt38,
          styles.ml25,
          styles.hello14Typo,
          styles.identityProofTypo,
        ]}
      >
        Country of residence
      </Text>
      <Text
        style={[
          styles.identityProof,
          styles.mt44,
          styles.ml25,
          styles.hello14Typo,
          styles.identityProofTypo,
        ]}
      >
        Nationality
      </Text>
      <Text
        style={[
          styles.identityProof,
          styles.mt38,
          styles.ml25,
          styles.hello14Typo,
          styles.identityProofTypo,
        ]}
      >
        Occupation
      </Text>
      <View
        style={[
          styles.directorsOrPartnersItem,
          styles.mt9,
          styles.ml25,
          styles.component21524Layout,
          styles.childBorder,
        ]}
      />
      <View
        style={[
          styles.directorsOrPartnersItem,
          styles.mt9,
          styles.ml25,
          styles.component21524Layout,
          styles.childBorder,
        ]}
      />
      <View
        style={[
          styles.directorsOrPartnersItem,
          styles.mt9,
          styles.ml25,
          styles.component21524Layout,
          styles.childBorder,
        ]}
      />
      <View
        style={[
          styles.directorsOrPartnersItem,
          styles.mt9,
          styles.ml25,
          styles.component21524Layout,
          styles.childBorder,
        ]}
      />
      <View
        style={[
          styles.directorsOrPartnersItem,
          styles.mt9,
          styles.ml25,
          styles.component21524Layout,
          styles.childBorder,
        ]}
      />
      <View
        style={[
          styles.directorsOrPartnersItem,
          styles.mt9,
          styles.ml25,
          styles.component21524Layout,
          styles.childBorder,
        ]}
      />
      <View style={[styles.helloParent, styles.mt10, styles.ml27]}>
        <Text style={styles.hello1}>Directors or Partners</Text>
        <Text
          style={[styles.hello2, styles.helloTypo, styles.helloIconPosition]}
        >
          <Text style={styles.current}>
            Carbonyte would like to know details of any
          </Text>
          <Text style={styles.current}>
            Associates - usually the Directors or Partners
          </Text>
        </Text>
      </View>
      <Pressable
        style={[styles.wrapper, styles.mt_2352]}
        onPress={() => navigation.navigate("BusinessType")}
      >
        <Image
          style={styles.iconLayout}
          resizeMode="cover"
          source={require("../assets/group-31042.png")}
        />
      </Pressable>
      <Text
        style={[styles.hello3, styles.mt_39, styles.ml44, styles.helloTypo]}
      >
        Enter the first name
      </Text>
      <Text
        style={[styles.hello3, styles.mt_36, styles.ml44, styles.helloTypo]}
      >
        Enter the second name
      </Text>
      <Text
        style={[styles.hello3, styles.mt_38, styles.ml46, styles.helloTypo]}
      >
        Enter the address line 1
      </Text>
      <Text
        style={[styles.hello3, styles.mt_38, styles.ml46, styles.helloTypo]}
      >
        Enter the address line 2
      </Text>
      <Text
        style={[styles.hello3, styles.mt_38, styles.ml46, styles.helloTypo]}
      >
        Enter the Town or city
      </Text>
      <Text
        style={[styles.hello3, styles.mt_38, styles.ml46, styles.helloTypo]}
      >
        Enter the postcode
      </Text>
      <View
        style={[
          styles.component21524,
          styles.mt9,
          styles.ml25,
          styles.component21524Layout,
        ]}
      >
        <View
          style={[
            styles.component21524Child,
            styles.childBorder,
            styles.childPosition,
          ]}
        />
        <Text
          style={[styles.hello, styles.helloTypo, styles.helloIconPosition]}
        >
          dd-mm-yyyy
        </Text>
        <View style={styles.component21512Item} />
        <View style={styles.layer}>
          <View style={styles.vrstva98}>
            <Image
              style={styles.vrstva98}
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
          styles.component21524,
          styles.mt9,
          styles.ml25,
          styles.component21524Layout,
        ]}
      >
        <View
          style={[
            styles.component21524Child,
            styles.childBorder,
            styles.childPosition,
          ]}
        />
        <Image
          style={[styles.iconIonicIosArrowDown, styles.helloIconPosition]}
          resizeMode="cover"
          source={require("../assets/icon-ioniciosarrowdown.png")}
        />
        <Text
          style={[styles.hello, styles.helloTypo, styles.helloIconPosition]}
        >
          Select the nationality
        </Text>
      </View>
      <View
        style={[
          styles.component21524,
          styles.mt9,
          styles.ml25,
          styles.component21524Layout,
        ]}
      >
        <View
          style={[
            styles.component21524Child,
            styles.childBorder,
            styles.childPosition,
          ]}
        />
        <Image
          style={[styles.iconIonicIosArrowDown, styles.helloIconPosition]}
          resizeMode="cover"
          source={require("../assets/icon-ioniciosarrowdown.png")}
        />
        <Text
          style={[styles.hello, styles.helloTypo, styles.helloIconPosition]}
        >
          Select the country of residence
        </Text>
      </View>
      <View
        style={[
          styles.component21524,
          styles.mt9,
          styles.ml25,
          styles.component21524Layout,
        ]}
      >
        <View
          style={[
            styles.component21524Child,
            styles.childBorder,
            styles.childPosition,
          ]}
        />
        <Text
          style={[styles.hello, styles.helloTypo, styles.helloIconPosition]}
        >
          dd-mm-yyyy
        </Text>
        <View style={styles.component21512Item} />
        <View style={styles.layer}>
          <View style={styles.vrstva98}>
            <Image
              style={styles.vrstva98}
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
          styles.component21524,
          styles.mt9,
          styles.ml25,
          styles.component21524Layout,
        ]}
      >
        <View
          style={[
            styles.component21524Child,
            styles.childBorder,
            styles.childPosition,
          ]}
        />
        <Image
          style={[styles.iconIonicIosArrowDown, styles.helloIconPosition]}
          resizeMode="cover"
          source={require("../assets/icon-ioniciosarrowdown.png")}
        />
        <Text
          style={[styles.hello, styles.helloTypo, styles.helloIconPosition]}
        >
          Select the role
        </Text>
      </View>
      <View style={[styles.statusBarBlack, styles.mt10]}>
        <View style={styles.rectangle} />
        <View style={[styles.statusBar, styles.helloIconPosition]}>
          <View style={[styles.time, styles.childPosition]}>
            <Text style={styles.text}>9:41</Text>
          </View>
          <Image
            style={styles.batteryIcon}
            resizeMode="cover"
            source={require("../assets/icon-awesomebatterythreequarters.png")}
          />
          <Image
            style={[styles.wifiIcon, styles.networkPosition]}
            resizeMode="cover"
            source={require("../assets/icon-awesomewifi.png")}
          />
          <View style={[styles.network, styles.networkPosition]}>
            <View style={[styles.networkChild, styles.networkChildLayout]} />
            <View style={[styles.networkItem, styles.networkChildLayout]} />
            <View style={[styles.networkInner, styles.networkChildLayout]} />
            <View style={[styles.networkChild1, styles.networkChildLayout]} />
          </View>
        </View>
      </View>
      <View style={[styles.homeIndicator, styles.mt27, styles.ml121]} />
      <Pressable
        style={[styles.component208103Parent, styles.mt234, styles.ml25]}
        onPress={() => navigation.navigate("ConfirmDirectors")}
      >
        <View style={[styles.component208103, styles.childPosition]}>
          <View style={[styles.rectangleParent, styles.helloIconPosition]}>
            <View style={[styles.groupChild1, styles.iconLayout]} />
            <View style={styles.maskGroup236} />
          </View>
        </View>
        <Text style={[styles.hello14, styles.hello14Typo]}>Continue</Text>
      </Pressable>
      <Pressable
        style={[styles.rectangleGroup, styles.mt_60, styles.ml291]}
        onPress={() => navigation.navigate("DirectorsOrPartners2")}
      >
        <View style={[styles.groupChild1, styles.iconLayout]} />
        <Image
          style={[styles.iconIonicIosAdd, styles.helloIconPosition]}
          resizeMode="cover"
          source={require("../assets/icon-ioniciosadd.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  mt_49: {
    marginTop: GlobalStyles.Margin.margin_61xs,
  },
  mt38: {
    marginTop: GlobalStyles.Margin.margin_8xl,
  },
  ml25: {
    marginLeft: GlobalStyles.Margin.margin_7xs,
  },
  mt43: {
    marginTop: GlobalStyles.Margin.margin_14xl,
  },
  mt9: {
    marginTop: GlobalStyles.Margin.margin_25xs,
  },
  mt_148: {
    marginTop: GlobalStyles.Margin.margin_75xs,
  },
  ml143: {
    marginLeft: GlobalStyles.Margin.margin_60xl,
  },
  mt33: {
    marginTop: GlobalStyles.Margin.margin_2xl,
  },
  mt58: {
    marginTop: GlobalStyles.Margin.margin_26xl,
  },
  ml27: {
    marginLeft: GlobalStyles.Margin.margin_4xs,
  },
  mt26: {
    marginTop: GlobalStyles.Margin.margin_6xs,
  },
  mt44: {
    marginTop: GlobalStyles.Margin.margin_15xl,
  },
  mt10: {
    marginTop: GlobalStyles.Margin.margin_24xs,
  },
  mt_2352: {
    marginTop: GlobalStyles.Margin.margin_95xs,
  },
  mt_39: {
    marginTop: GlobalStyles.Margin.margin_55xs,
  },
  ml44: {
    marginLeft: GlobalStyles.Margin.margin_15xl,
  },
  mt_36: {
    marginTop: GlobalStyles.Margin.margin_53xs,
  },
  mt_38: {
    marginTop: GlobalStyles.Margin.margin_54xs,
  },
  ml46: {
    marginLeft: GlobalStyles.Margin.margin_17xl,
  },
  mt27: {
    marginTop: GlobalStyles.Margin.margin_4xs,
  },
  ml121: {
    marginLeft: GlobalStyles.Margin.margin_54xl,
  },
  mt234: {
    marginTop: GlobalStyles.Margin.margin_80xl,
  },
  mt_60: {
    marginTop: GlobalStyles.Margin.margin_66xs,
  },
  ml291: {
    marginLeft: GlobalStyles.Margin.margin_91xl,
  },
  hello14Typo: {
    fontFamily: GlobalStyles.FontFamily.helvetica,
    textAlign: "left",
  },
  identityProofTypo: {
    fontSize: GlobalStyles.FontSize.size_xl,
    fontFamily: GlobalStyles.FontFamily.helvetica,
  },
  childBorder: {
    borderWidth: 1,
    borderColor: "#e8e8e8",
    borderStyle: "solid",
    backgroundColor: GlobalStyles.Color.white,
  },
  childPosition: {
    bottom: 0,
    left: 0,
    top: 0,
    position: "absolute",
  },
  parentShadowBox: {
    height: 148,
    elevation: 20,
    shadowRadius: 20,
    shadowColor: "rgba(1, 1, 253, 0.1)",
    borderBottomLeftRadius: GlobalStyles.Border.br_4xl,
    borderTopLeftRadius: GlobalStyles.Border.br_4xl,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: -3,
    },
    backgroundColor: GlobalStyles.Color.white,
  },
  helloTypo: {
    fontSize: GlobalStyles.FontSize.size_base,
    textAlign: "left",
    fontFamily: GlobalStyles.FontFamily.helvetica,
  },
  helloIconPosition: {
    top: "50%",
    position: "absolute",
  },
  currentPosition: {
    marginTop: 8.89,
    fontSize: GlobalStyles.FontSize.size_base,
    left: "50%",
    top: "50%",
    color: GlobalStyles.Color.indigo,
  },
  groupLayout: {
    height: 27,
    width: 86,
    top: 11,
    position: "absolute",
    backgroundColor: GlobalStyles.Color.white,
  },
  iconLayout1: {
    width: 11,
    top: 21,
    height: 6,
    position: "absolute",
  },
  component21524Layout: {
    width: 326,
    height: 60,
  },
  vrstva98Layout: {
    height: 3,
    backgroundColor: GlobalStyles.Color.blue,
    borderRadius: GlobalStyles.Border.br_8xs,
    top: 10,
    position: "absolute",
  },
  networkPosition: {
    width: 17,
    marginTop: -3,
    top: "50%",
    position: "absolute",
  },
  networkChildLayout: {
    backgroundColor: GlobalStyles.Color.gray_1400,
    borderRadius: GlobalStyles.Border.br_7xs,
    width: 3,
    bottom: 0,
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  directorsOrPartnersChild: {
    backgroundColor: GlobalStyles.Color.gray_300,
    height: 2393,
    width: 375,
  },
  identityProof: {
    textAlign: "left",
    color: GlobalStyles.Color.indigo,
  },
  personsWithSignificantContr: {
    top: 3,
    left: 31,
    position: "absolute",
    textAlign: "left",
    color: GlobalStyles.Color.indigo,
  },
  component2161Child: {
    borderRadius: GlobalStyles.Border.br_5xs,
    width: 23,
    left: 0,
  },
  component2161: {
    width: 251,
    height: 23,
  },
  current: {
    margin: GlobalStyles.Margin.margin_33xs,
  },
  currentSignedPassport: {
    marginLeft: -51,
    left: "50%",
  },
  groupChild: {
    left: 16,
  },
  iconIonicIosArrowForward: {
    left: 17,
    height: 6,
  },
  currentSignedPassportParent: {
    width: 137,
  },
  currentPhotoCardDrivingLic: {
    marginLeft: -49.5,
    left: "50%",
  },
  groupItem: {
    left: 19,
  },
  iconIonicIosArrowForward1: {
    left: 20,
    height: 6,
  },
  birthCertificate: {
    marginTop: 24.89,
    marginLeft: -38,
    left: "50%",
    color: GlobalStyles.Color.indigo,
  },
  groupInner: {
    right: 9,
  },
  iconIonicIosArrowForward2: {
    marginLeft: -36.95,
    height: 6,
    left: "50%",
  },
  birthCertificateParent: {
    width: 114,
    alignSelf: "flex-end",
  },
  component21524Child: {
    borderRadius: GlobalStyles.Border.br_lg,
    right: 0,
    left: 0,
  },
  iconIonicIosArrowDown: {
    marginTop: -2.64,
    right: 26,
    width: 9,
    height: 5,
  },
  hello: {
    marginTop: -8,
    left: 14,
    color: GlobalStyles.Color.gray_800,
  },
  component21524: {
    height: 60,
  },
  addressLine2: {
    color: GlobalStyles.Color.indigo,
  },
  optional: {
    color: GlobalStyles.Color.gray_800,
  },
  addressLine2Optional: {
    textAlign: "left",
  },
  directorsOrPartnersItem: {
    borderRadius: GlobalStyles.Border.br_lg,
    height: 60,
  },
  hello1: {
    fontSize: GlobalStyles.FontSize.size_8xl,
    lineHeight: 30,
    fontWeight: "700",
    fontFamily: GlobalStyles.FontFamily.typoGrotesk,
    left: 0,
    top: 0,
    position: "absolute",
    textAlign: "left",
    color: GlobalStyles.Color.indigo,
  },
  hello2: {
    marginTop: 6.74,
    left: 1,
    lineHeight: 20,
    color: GlobalStyles.Color.gray_800,
  },
  helloParent: {
    width: 281,
    height: 85,
  },
  wrapper: {
    width: 55,
    height: 45,
  },
  hello3: {
    color: GlobalStyles.Color.gray_800,
  },
  component21512Item: {
    height: "38.33%",
    width: "7.06%",
    top: "31.67%",
    right: "7.06%",
    bottom: "30%",
    left: "85.89%",
    position: "absolute",
  },
  vrstva98: {
    height: 20,
    width: 22,
    left: 0,
    top: 0,
    position: "absolute",
  },
  vrstva98Child: {
    left: 3,
    width: 3,
    height: 3,
    backgroundColor: GlobalStyles.Color.blue,
    borderRadius: GlobalStyles.Border.br_8xs,
    top: 10,
  },
  vrstva98Item: {
    left: 8,
    width: 4,
    height: 3,
    backgroundColor: GlobalStyles.Color.blue,
    borderRadius: GlobalStyles.Border.br_8xs,
    top: 10,
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
  rectangle: {
    shadowColor: "rgba(0, 0, 0, 0.05)",
    shadowRadius: 6,
    elevation: 6,
    right: 0,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: -3,
    },
    left: 0,
    bottom: 0,
    top: 0,
    position: "absolute",
    backgroundColor: GlobalStyles.Color.white,
  },
  text: {
    fontSize: GlobalStyles.FontSize.size_4xl,
    letterSpacing: 0,
    lineHeight: 24,
    fontWeight: "500",
    fontFamily: GlobalStyles.FontFamily.roboto,
    color: GlobalStyles.Color.gray_1900,
    left: 0,
    top: 0,
    position: "absolute",
    textAlign: "left",
  },
  time: {
    width: 40,
    left: 0,
  },
  batteryIcon: {
    height: 11,
    marginTop: -3,
    width: 22,
    right: 0,
    top: "50%",
    position: "absolute",
  },
  wifiIcon: {
    right: 37,
    height: 12,
  },
  networkChild: {
    height: 4,
    left: 0,
  },
  networkItem: {
    marginLeft: -3.5,
    height: 6,
    left: "50%",
  },
  networkInner: {
    marginLeft: 0.5,
    height: 9,
    left: "50%",
  },
  networkChild1: {
    right: 0,
    top: 0,
  },
  network: {
    right: 68,
    height: 11,
  },
  statusBar: {
    marginTop: -15,
    right: 16,
    left: 15,
    height: 26,
  },
  statusBarBlack: {
    height: 44,
    width: 375,
  },
  homeIndicator: {
    borderRadius: GlobalStyles.Border.br_8xl,
    backgroundColor: GlobalStyles.Color.black,
    width: 134,
    height: 5,
  },
  groupChild1: {
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    backgroundColor: GlobalStyles.Color.gray_500,
    borderRadius: GlobalStyles.Border.br_lg,
    position: "absolute",
  },
  maskGroup236: {
    bottom: 13,
    right: 0,
    left: 0,
    top: 0,
    position: "absolute",
  },
  rectangleParent: {
    marginTop: -30,
    right: 0,
    height: 60,
    left: 0,
  },
  component208103: {
    right: 0,
    left: 0,
  },
  hello14: {
    top: "36.67%",
    left: "34.65%",
    fontSize: GlobalStyles.FontSize.size_lg,
    lineHeight: 10,
    textTransform: "uppercase",
    color: GlobalStyles.Color.black,
    position: "absolute",
    textAlign: "left",
  },
  component208103Parent: {
    width: 254,
    height: 60,
  },
  iconIonicIosAdd: {
    marginTop: -9.04,
    marginLeft: -9.04,
    width: 18,
    height: 18,
    left: "50%",
  },
  rectangleGroup: {
    width: 60,
    height: 60,
  },
  directorsOrPartners: {
    flex: 1,
    width: "100%",
    backgroundColor: GlobalStyles.Color.white,
  },
});

export default DirectorsOrPartners;
