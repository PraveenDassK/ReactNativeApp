import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import GlobalStyles from "../GlobalStyles";

const DirectorsOrPartners2 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.directorsOrPartners2}>
      <View style={[styles.directorsOrPartners2Child, styles.mt_49]} />
      <Text
        style={[
          styles.firstName,
          styles.mt33,
          styles.ml25,
          styles.hello14Typo,
          styles.firstNameTypo,
        ]}
      >
        First Name
      </Text>
      <Text
        style={[
          styles.firstName,
          styles.mt58,
          styles.ml25,
          styles.hello14Typo,
          styles.firstNameTypo,
        ]}
      >
        Last Name
      </Text>
      <Text
        style={[
          styles.firstName,
          styles.mt58,
          styles.ml27,
          styles.hello14Typo,
          styles.firstNameTypo,
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
          styles.firstNameTypo,
        ]}
      >
        <Text style={styles.addressLine2}>{`Address Line 2 `}</Text>
        <Text style={styles.optional}>(optional)</Text>
      </Text>
      <Text
        style={[
          styles.firstName,
          styles.mt58,
          styles.ml27,
          styles.hello14Typo,
          styles.firstNameTypo,
        ]}
      >
        Town or city
      </Text>
      <Text
        style={[
          styles.firstName,
          styles.mt26,
          styles.ml27,
          styles.hello14Typo,
          styles.firstNameTypo,
        ]}
      >
        Postcode
      </Text>
      <Text
        style={[
          styles.firstName,
          styles.mt38,
          styles.ml25,
          styles.hello14Typo,
          styles.firstNameTypo,
        ]}
      >
        Date of Birth
      </Text>
      <Text
        style={[
          styles.firstName,
          styles.mt38,
          styles.ml25,
          styles.hello14Typo,
          styles.firstNameTypo,
        ]}
      >
        Appointed on
      </Text>
      <Text
        style={[
          styles.firstName,
          styles.mt58,
          styles.ml25,
          styles.hello14Typo,
          styles.firstNameTypo,
        ]}
      >
        Role
      </Text>
      <Text
        style={[
          styles.firstName,
          styles.mt38,
          styles.ml25,
          styles.hello14Typo,
          styles.firstNameTypo,
        ]}
      >
        Country of residence
      </Text>
      <Text
        style={[
          styles.firstName,
          styles.mt44,
          styles.ml25,
          styles.hello14Typo,
          styles.firstNameTypo,
        ]}
      >
        Nationality
      </Text>
      <Text
        style={[
          styles.firstName,
          styles.mt38,
          styles.ml25,
          styles.hello14Typo,
          styles.firstNameTypo,
        ]}
      >
        Occupation
      </Text>
      <Text
        style={[
          styles.firstName,
          styles.mt38,
          styles.ml25,
          styles.hello14Typo,
          styles.firstNameTypo,
        ]}
      >
        Identity Proof
      </Text>
      <View
        style={[
          styles.directorsOrPartners2Item,
          styles.mt9,
          styles.ml25,
          styles.component21525Layout,
          styles.childBorder,
        ]}
      />
      <View
        style={[
          styles.directorsOrPartners2Item,
          styles.mt9,
          styles.ml25,
          styles.component21525Layout,
          styles.childBorder,
        ]}
      />
      <View
        style={[
          styles.directorsOrPartners2Item,
          styles.mt9,
          styles.ml27,
          styles.component21525Layout,
          styles.childBorder,
        ]}
      />
      <View
        style={[
          styles.directorsOrPartners2Item,
          styles.mt9,
          styles.ml27,
          styles.component21525Layout,
          styles.childBorder,
        ]}
      />
      <View
        style={[
          styles.directorsOrPartners2Item,
          styles.mt9,
          styles.ml27,
          styles.component21525Layout,
          styles.childBorder,
        ]}
      />
      <View
        style={[
          styles.directorsOrPartners2Item,
          styles.mt9,
          styles.ml27,
          styles.component21525Layout,
          styles.childBorder,
        ]}
      />
      <View style={[styles.helloParent, styles.mt10, styles.ml27]}>
        <Text style={styles.hello}>Directors or Partners</Text>
        <Text
          style={[styles.hello1, styles.helloTypo, styles.helloIconPosition]}
        >
          <Text style={styles.carbonyteWouldLike}>
            Carbonyte would like to know details of any
          </Text>
          <Text style={styles.carbonyteWouldLike}>
            Associates - usually the Directors or Partners
          </Text>
        </Text>
      </View>
      <Pressable
        style={[styles.wrapper, styles.mt_2352]}
        onPress={() => navigation.navigate("DirectorsOrPartners")}
      >
        <Image
          style={styles.iconLayout1}
          resizeMode="cover"
          source={require("../assets/group-31042.png")}
        />
      </Pressable>
      <Text
        style={[styles.hello2, styles.mt_39, styles.ml44, styles.helloTypo]}
      >
        Enter the first name
      </Text>
      <Text
        style={[styles.hello2, styles.mt_36, styles.ml44, styles.helloTypo]}
      >
        Enter the second name
      </Text>
      <Text
        style={[styles.hello2, styles.mt_38, styles.ml46, styles.helloTypo]}
      >
        Enter the address line 1
      </Text>
      <Text
        style={[styles.hello2, styles.mt_38, styles.ml46, styles.helloTypo]}
      >
        Enter the address line 2
      </Text>
      <Text
        style={[styles.hello2, styles.mt_38, styles.ml46, styles.helloTypo]}
      >
        Enter the Town or city
      </Text>
      <Text
        style={[styles.hello2, styles.mt_38, styles.ml46, styles.helloTypo]}
      >
        Enter the postcode
      </Text>
      <View
        style={[
          styles.component21525,
          styles.mt9,
          styles.ml25,
          styles.component21525Layout,
        ]}
      >
        <View
          style={[
            styles.component21525Child,
            styles.childLayout,
            styles.childPosition,
            styles.childBorder,
          ]}
        />
        <Text
          style={[styles.hello8, styles.helloTypo, styles.helloIconPosition]}
        >
          dd-mm-yyyy
        </Text>
        <View style={styles.component21525Item} />
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
          styles.component21525,
          styles.mt9,
          styles.ml25,
          styles.component21525Layout,
        ]}
      >
        <View
          style={[
            styles.component21525Child,
            styles.childLayout,
            styles.childPosition,
            styles.childBorder,
          ]}
        />
        <Image
          style={[styles.iconIonicIosArrowDown, styles.helloIconPosition]}
          resizeMode="cover"
          source={require("../assets/icon-ioniciosarrowdown.png")}
        />
        <Text
          style={[styles.hello8, styles.helloTypo, styles.helloIconPosition]}
        >
          Select the nationality
        </Text>
      </View>
      <View
        style={[
          styles.component21525,
          styles.mt9,
          styles.ml25,
          styles.component21525Layout,
        ]}
      >
        <View
          style={[
            styles.component21525Child,
            styles.childLayout,
            styles.childPosition,
            styles.childBorder,
          ]}
        />
        <Image
          style={[styles.iconIonicIosArrowDown, styles.helloIconPosition]}
          resizeMode="cover"
          source={require("../assets/icon-ioniciosarrowdown.png")}
        />
        <Text
          style={[styles.hello8, styles.helloTypo, styles.helloIconPosition]}
        >
          Select the occupation
        </Text>
      </View>
      <View
        style={[
          styles.component21525,
          styles.mt9,
          styles.ml25,
          styles.component21525Layout,
        ]}
      >
        <View
          style={[
            styles.component21525Child,
            styles.childLayout,
            styles.childPosition,
            styles.childBorder,
          ]}
        />
        <Image
          style={[styles.iconIonicIosArrowDown, styles.helloIconPosition]}
          resizeMode="cover"
          source={require("../assets/icon-ioniciosarrowdown.png")}
        />
        <Text
          style={[styles.hello8, styles.helloTypo, styles.helloIconPosition]}
        >
          Select the country of residence
        </Text>
      </View>
      <View
        style={[
          styles.component21525,
          styles.mt9,
          styles.ml25,
          styles.component21525Layout,
        ]}
      >
        <View
          style={[
            styles.component21525Child,
            styles.childLayout,
            styles.childPosition,
            styles.childBorder,
          ]}
        />
        <Text
          style={[styles.hello8, styles.helloTypo, styles.helloIconPosition]}
        >
          dd-mm-yyyy
        </Text>
        <View style={styles.component21525Item} />
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
          styles.component21525,
          styles.mt9,
          styles.ml25,
          styles.component21525Layout,
        ]}
      >
        <View
          style={[
            styles.component21525Child,
            styles.childLayout,
            styles.childPosition,
            styles.childBorder,
          ]}
        />
        <Image
          style={[styles.iconIonicIosArrowDown, styles.helloIconPosition]}
          resizeMode="cover"
          source={require("../assets/icon-ioniciosarrowdown.png")}
        />
        <Text
          style={[styles.hello8, styles.helloTypo, styles.helloIconPosition]}
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
            <View style={styles.networkItem} />
            <View style={[styles.networkInner, styles.networkChildLayout]} />
            <View style={[styles.networkChild1, styles.networkChildLayout]} />
          </View>
        </View>
      </View>
      <View style={[styles.homeIndicator, styles.mt27, styles.ml121]} />
      <Pressable
        style={[styles.component208109Parent, styles.mt234, styles.ml25]}
        onPress={() => navigation.navigate("ConfirmDirectors")}
      >
        <View style={[styles.component208109, styles.childPosition]}>
          <View style={[styles.rectangleParent, styles.helloIconPosition]}>
            <View
              style={[
                styles.groupChild,
                styles.childLayout,
                styles.iconLayout1,
              ]}
            />
            <View style={styles.maskGroup236} />
          </View>
        </View>
        <Text style={[styles.hello14, styles.hello14Typo]}>Continue</Text>
      </Pressable>
      <Pressable
        style={[styles.rectangleGroup, styles.mt_60, styles.ml291]}
        onPress={() => navigation.navigate("DirectorsOrPartners")}
      >
        <View
          style={[styles.groupChild, styles.childLayout, styles.iconLayout1]}
        />
        <Image
          style={[styles.iconIonicIosAdd, styles.helloIconPosition]}
          resizeMode="cover"
          source={require("../assets/icon-ioniciosadd.png")}
        />
      </Pressable>
      <View style={[styles.component2163, styles.mt43, styles.ml25]}>
        <Text
          style={[
            styles.personsWithSignificantContr,
            styles.hello14Typo,
            styles.firstNameTypo,
          ]}
        >
          Persons with significant control
        </Text>
        <View
          style={[
            styles.component2163Child,
            styles.childPosition,
            styles.childBorder,
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
        <Text style={[styles.currentSignedPassport, styles.currentPosition]}>
          <Text style={styles.carbonyteWouldLike}>Current</Text>
          <Text style={styles.carbonyteWouldLike}>signed</Text>
          <Text style={styles.carbonyteWouldLike}>passport </Text>
        </Text>
        <View style={[styles.groupInner, styles.groupChildLayout]} />
        <Image
          style={[styles.iconIonicIosArrowForward, styles.iconLayout]}
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
          style={[styles.currentPhotoCardDrivingLic, styles.currentPosition]}
        >
          <Text style={styles.carbonyteWouldLike}>Current</Text>
          <Text style={styles.carbonyteWouldLike}>photo-card</Text>
          <Text style={styles.carbonyteWouldLike}>driving license </Text>
        </Text>
        <View style={[styles.groupChild1, styles.groupChildLayout]} />
        <Image
          style={[styles.iconIonicIosArrowForward1, styles.iconLayout]}
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
          <Text style={styles.carbonyteWouldLike}>Birth</Text>
          <Text style={styles.carbonyteWouldLike}>Certificate </Text>
        </Text>
        <View style={[styles.groupChild2, styles.groupChildLayout]} />
        <Image
          style={[styles.iconIonicIosArrowForward2, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/icon-ioniciosarrowforward.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mt_49: {
    marginTop: GlobalStyles.Margin.margin_61xs,
  },
  mt33: {
    marginTop: GlobalStyles.Margin.margin_2xl,
  },
  ml25: {
    marginLeft: GlobalStyles.Margin.margin_7xs,
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
  mt38: {
    marginTop: GlobalStyles.Margin.margin_8xl,
  },
  mt44: {
    marginTop: GlobalStyles.Margin.margin_15xl,
  },
  mt9: {
    marginTop: GlobalStyles.Margin.margin_25xs,
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
  mt43: {
    marginTop: GlobalStyles.Margin.margin_14xl,
  },
  mt_148: {
    marginTop: GlobalStyles.Margin.margin_75xs,
  },
  ml143: {
    marginLeft: GlobalStyles.Margin.margin_60xl,
  },
  hello14Typo: {
    fontFamily: GlobalStyles.FontFamily.helvetica,
    textAlign: "left",
  },
  firstNameTypo: {
    fontSize: GlobalStyles.FontSize.size_xl,
    fontFamily: GlobalStyles.FontFamily.helvetica,
  },
  component21525Layout: {
    width: 326,
    height: 60,
  },
  childBorder: {
    borderWidth: 1,
    borderColor: "#e8e8e8",
    borderStyle: "solid",
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
  childLayout: {
    borderRadius: GlobalStyles.Border.br_lg,
    position: "absolute",
  },
  childPosition: {
    bottom: 0,
    left: 0,
    top: 0,
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
  iconLayout1: {
    height: "100%",
    width: "100%",
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
      height: 3,
    },
    backgroundColor: GlobalStyles.Color.white,
  },
  currentPosition: {
    marginTop: 8.89,
    left: "50%",
    fontSize: GlobalStyles.FontSize.size_base,
    top: "50%",
    position: "absolute",
    textAlign: "left",
    color: GlobalStyles.Color.indigo,
    fontFamily: GlobalStyles.FontFamily.helvetica,
  },
  groupChildLayout: {
    height: 27,
    width: 86,
    top: 11,
    position: "absolute",
    backgroundColor: GlobalStyles.Color.white,
  },
  iconLayout: {
    width: 11,
    top: 21,
    height: 6,
    position: "absolute",
  },
  directorsOrPartners2Child: {
    backgroundColor: GlobalStyles.Color.gray_300,
    height: 2393,
    width: 375,
  },
  firstName: {
    textAlign: "left",
    color: GlobalStyles.Color.indigo,
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
  directorsOrPartners2Item: {
    borderRadius: GlobalStyles.Border.br_2xs,
    height: 60,
  },
  hello: {
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
  carbonyteWouldLike: {
    margin: GlobalStyles.Margin.margin_33xs,
  },
  hello1: {
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
  hello2: {
    color: GlobalStyles.Color.gray_800,
  },
  component21525Child: {
    right: 0,
  },
  hello8: {
    marginTop: -8,
    left: 14,
    color: GlobalStyles.Color.gray_800,
  },
  component21525Item: {
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
  component21525: {
    height: 60,
  },
  iconIonicIosArrowDown: {
    marginTop: -2.64,
    right: 26,
    width: 9,
    height: 5,
  },
  rectangle: {
    shadowColor: "rgba(0, 0, 0, 0.05)",
    shadowRadius: 6,
    elevation: 6,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    bottom: 0,
    right: 0,
    left: 0,
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
    position: "absolute",
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
    backgroundColor: GlobalStyles.Color.gray_1400,
    borderRadius: GlobalStyles.Border.br_7xs,
    width: 3,
    bottom: 0,
    position: "absolute",
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
  groupChild: {
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    backgroundColor: GlobalStyles.Color.gray_500,
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
    left: 0,
    height: 60,
  },
  component208109: {
    right: 0,
    position: "absolute",
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
  component208109Parent: {
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
  personsWithSignificantContr: {
    top: 3,
    left: 31,
    position: "absolute",
    textAlign: "left",
    color: GlobalStyles.Color.indigo,
  },
  component2163Child: {
    borderRadius: GlobalStyles.Border.br_5xs,
    width: 23,
    position: "absolute",
  },
  component2163: {
    width: 251,
    height: 23,
  },
  currentSignedPassport: {
    marginLeft: -51,
  },
  groupInner: {
    left: 16,
  },
  iconIonicIosArrowForward: {
    left: 17,
  },
  currentSignedPassportParent: {
    width: 137,
  },
  currentPhotoCardDrivingLic: {
    marginLeft: -49.5,
  },
  groupChild1: {
    left: 19,
  },
  iconIonicIosArrowForward1: {
    left: 20,
  },
  birthCertificate: {
    marginTop: 24.89,
    marginLeft: -38,
    left: "50%",
    color: GlobalStyles.Color.indigo,
  },
  groupChild2: {
    right: 9,
  },
  iconIonicIosArrowForward2: {
    marginLeft: -36.95,
    left: "50%",
  },
  birthCertificateParent: {
    width: 114,
    alignSelf: "flex-end",
  },
  directorsOrPartners2: {
    flex: 1,
    width: "100%",
    backgroundColor: GlobalStyles.Color.white,
  },
});

export default DirectorsOrPartners2;
