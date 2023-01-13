import React, { useContext, useEffect, useState, Keyboard } from "react";
import { Text, StyleSheet, View, Image, Pressable, TextInput } from "react-native";
import { Dropdown, MultiSelect } from 'react-native-element-dropdown';
import { useState } from "react";

import GlobalStyles from "../../GlobalStyles";

const roledata = [
  { label: 'United Kingdom', value: '1' },
  { label: 'United States of America', value: '2' },
  { label: 'India', value: '3' },
];
const countrydata = [
  { label: 'United Kingdom', value: '1' },
  { label: 'United States of America', value: '2' },
  { label: 'India', value: '3' },
];
const nationalitydata = [
  { label: 'United Kingdom', value: '1' },
  { label: 'United States of America', value: '2' },
  { label: 'India', value: '3' },
];
const occupationdata = [
  { label: 'United Kingdom', value: '1' },
  { label: 'United States of America', value: '2' },
  { label: 'India', value: '3' },
];
const DirectorsOrPartners = ({navigation}) => {
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const renderLabel = () => {
    if (value || isFocus) {
      return (
        <Text style={[styles.label, isFocus && { color: 'blue' }]}>
          Dropdown label
        </Text>
      );
    }
    return null;
  };
  return (
    <ScrollView>
    <View style={styles.directorsOrPartners}>
      <View style={styles.identityProofParent}>
        <Text style={[styles.identityProof, styles.nameTypo, styles.nameTypo1]}>
          Identity Proof
        </Text>
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
          <View style={[styles.groupChild, styles.groupChildBorder]} />
        </View>
        <View
          style={[
            styles.currentSignedPassportParent,
            styles.parentShadowBox,
            styles.currentParentShadowBox,
          ]}
        >
          <Text
            style={[
              styles.currentSignedPassport,
              styles.helloTypo,
              styles.currentPosition,
            ]}
          >
            <Text style={styles.current}>Current</Text>
            <Text style={styles.current}>signed</Text>
            <Text style={styles.current}>passport </Text>
          </Text>
          <View style={[styles.groupItem, styles.groupLayout]} />
          <Image
            style={[styles.iconIonicIosArrowForward, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/icon-carbonytedownarrow.png")}
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
            style={[
              styles.currentPhotoCardDrivingLic,
              styles.helloTypo,
              styles.currentPosition,
            ]}
          >
            <Text style={styles.current}>Current</Text>
            <Text style={styles.current}>photo-card</Text>
            <Text style={styles.current}>driving license </Text>
          </Text>
          <View style={[styles.helloPosition1, styles.groupLayout]} />
          <Image
            style={[styles.iconIonicIosArrowForward1, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/icon-carbonytedownarrow.png")}
          />
        </View>
        <View
          style={[
            styles.birthCertificateParent,
            styles.parentPosition,
            styles.parentShadowBox,
          ]}
        >
          <Text style={[styles.birthCertificate, styles.helloTypo]}>
            <Text style={styles.current}>Birth</Text>
            <Text style={styles.current}>Certificate </Text>
          </Text>
          <View style={[styles.rectangleView, styles.groupLayout]} />
          <Image
            style={[styles.iconIonicIosArrowForward2, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/icon-carbonytedownarrow.png")}
          />
        </View>
        {/* <View
          style={[
            styles.iconIonicIosArrowDownParent,
            styles.groupChildLayout,
            styles.groupChildPosition,
            styles.groupChildBorder,
          ]}
        >
          <Image
            style={styles.iconIonicIosArrowDown}
            resizeMode="cover"
            source={require("../assets/icon-carbonytedownarrow.png")}
          />
          <Text style={[styles.hello, styles.helloTypo]}>
            Select the occupation
          </Text>
        </View> */}

<Dropdown
          style={[ styles.iconIonicIosArrowDownParent,
            styles.groupChildLayout,
            styles.groupChildPosition,
            styles.groupChildBorder,
            isFocus && { borderColor: 'blue' }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={occupationdata}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? 'Select the occupation' : '....'}
          searchPlaceholder="Search..."
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setValue(item.value);
            setIsFocus(false);
          }}
        />
        
        <Text style={[styles.firstName, styles.nameTypo, styles.nameTypo1]}>
          First Name
        </Text>
        <Text style={[styles.lastName, styles.nameTypo, styles.nameTypo1]}>
          Last Name
        </Text>
        <Text
          style={[
            styles.addressLine1,
            styles.addressPosition,
            styles.nameTypo,
            styles.nameTypo1,
          ]}
        >
          Address Line 1
        </Text>
        <Text
          style={[
            styles.addressLine2Optional,
            styles.addressPosition,
            styles.nameTypo,
            styles.nameTypo1,
          ]}
        >
          <Text style={styles.addressLine2}>{`Address Line 2 `}</Text>
          <Text style={styles.optional}>(optional)</Text>
        </Text>
        <Text
          style={[
            styles.townOrCity,
            styles.addressPosition,
            styles.nameTypo,
            styles.nameTypo1,
          ]}
        >
          Town or city
        </Text>
        <Text
          style={[
            styles.postcode,
            styles.addressPosition,
            styles.nameTypo,
            styles.nameTypo1,
          ]}
        >
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
        
        <View
          style={[
            styles.groupView,
            styles.groupChildLayout,
            styles.groupChildPosition,
            styles.groupChildBorder,
          ]}
        />
        <View
          style={[
            styles.groupChild1,
            styles.groupChildLayout,
            styles.groupChildPosition,
            styles.groupChildBorder,
          ]}
        />
        <View
          style={[
            styles.groupChild2,
            styles.groupChildLayout,
            styles.groupChildPosition,
            styles.groupChildBorder,
          ]}
        />
        <View
          style={[
            styles.groupChild3,
            styles.groupChildLayout,
            styles.groupChildPosition,
            styles.groupChildBorder,
          ]}
        />
        <View
          style={[
            styles.groupChild4,
            styles.groupChildLayout,
            styles.groupChildPosition,
            styles.groupChildBorder,
          ]}
        />
        <View
          style={[
            styles.groupChild5,
            styles.groupChildLayout,
            styles.groupChildPosition,
            styles.groupChildBorder,
          ]}
        />
        <View style={[styles.helloParent, styles.addressPosition]}>
          <Text style={styles.hello1}>Directors or Partners</Text>
          <Text style={[styles.hello2, styles.helloTypo]}>
            <Text style={styles.current}>
              Carbonyte would like to know details of any{"\n"}
            </Text>
            <Text style={styles.current}>
              Associates - usually the Directors or Partners
            </Text>
          </Text>
        </View>

        <Text style={[styles.hello3, styles.helloPosition1, styles.helloTypo]}
          placeholder={"Enter the first name"}
        />
        <TextInput style={[styles.hello4, styles.helloPosition1, styles.helloTypo]}
          placeholder={"Enter the second name"}
        />
        <TextInput style={[styles.hello5, styles.helloPosition]}
          placeholder={"Enter the address line 1"}
        />
        <TextInput style={[styles.hello6, styles.helloPosition]}
          placeholder={"Enter the address line 2"}
        />
        <TextInput style={[styles.hello7, styles.helloPosition]}
          placeholder={"Enter the Town or city"}
        />
        <TextInput style={[styles.hello8, styles.helloPosition]}
          placeholder={"Enter the postcode"}
        />
        
        <View
          style={[
            styles.helloGroup,
            styles.groupChildLayout,
            styles.groupChildPosition,
            styles.groupChildBorder,
          ]}
        >
          <Text style={[styles.hello, styles.helloTypo]} placeholder={"dd-mm-yyyy"}/>
          <View style={styles.groupChild6} />
          <View style={styles.layer}>
            <View style={styles.vrstva98}>
              <Image
                style={styles.vrstva98}
                resizeMode="cover"
                source={require("../assets/icon-calender.png")}
              />
              <View style={[styles.vrstva98Child, styles.vrstva98Layout]} />
              <View style={[styles.vrstva98Item, styles.vrstva98Layout]} />
            </View>
          </View>
        </View>
        {/* <View
          style={[
            styles.iconIonicIosArrowDownGroup,
            styles.groupChildLayout,
            styles.groupChildPosition,
            styles.groupChildBorder,
          ]}
        >
          <Image
            style={styles.iconIonicIosArrowDown}
            resizeMode="cover"
            source={require("../assets/icon-carbonytedownarrow.png")}
          /> */}
           <Dropdown
          style={[ styles.iconIonicIosArrowDownGroup,
            styles.groupChildLayout,
            styles.groupChildPosition,
            styles.groupChildBorder,
            isFocus && { borderColor: 'blue' }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={nationalitydata}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? 'Select the nationality' : '....'}
          searchPlaceholder="Search..."
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setValue(item.value);
            setIsFocus(false);
          }}
        />
          {/* <Text style={[styles.hello, styles.helloTypo]}>
            Select the nationality
          </Text>
        </View> */}
          <Dropdown
          style={[ styles.iconIonicIosArrowDownContainer,
            styles.groupChildLayout,
            styles.groupChildPosition,
            styles.groupChildBorder,
            isFocus && { borderColor: 'blue' }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={countrydata}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? 'Select the country of residence' : '....'}
          searchPlaceholder="Search..."
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setValue(item.value);
            setIsFocus(false);
          }}
        />
        <View
          style={[
            styles.helloContainer,
            styles.groupChildLayout,
            styles.groupChildPosition,
            styles.groupChildBorder,
          ]}
        >
          <TextInput style={[styles.hello, styles.helloTypo]} placeholder={"dd-mm-yyyy"}/>
          <View style={styles.groupChild6} />
          <View style={styles.layer}>
            <View style={styles.vrstva98}>
              <Image
                style={styles.vrstva98}
                resizeMode="cover"
                source={require("../assets/icon-calender.png")}
              />
              <View style={[styles.vrstva98Child, styles.vrstva98Layout]} />
              <View style={[styles.vrstva98Item, styles.vrstva98Layout]} />
            </View>
          </View>
        </View>
        
          <Dropdown
          style={[ styles.iconIonicIosArrowDownParent1,
            styles.groupChildLayout,
            styles.groupChildPosition,
            styles.groupChildBorder,
            isFocus && { borderColor: 'blue' }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={roledata}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? 'Select the role' : '....'}
          searchPlaceholder="Search..."
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setValue(item.value);
            setIsFocus(false);
          }}
        />
        <Pressable
          style={[styles.groupParent, styles.groupChildLayout]}
          onPress={() => navigation.navigate("ConfirmDirectors")}
        >
          <View style={[styles.rectangleParent, styles.parentPosition]}>
            <View style={styles.groupChild8} />
            <View style={[styles.maskGroup236, styles.parentPosition]} />
          </View>
          <Text style={[styles.hello14, styles.nameTypo]}>Continue</Text>
        </Pressable>
        <Pressable
          style={[
            styles.rectangleGroup,
            styles.groupChildLayout,
            styles.groupChildPosition,
          ]}
          onPress={() => navigation.navigate("DirectorsOrPartners2")}
        >
          <View style={styles.groupChild8} />
          <Image
            style={styles.iconIonicIosAdd}
            resizeMode="cover"
            source={require("../assets/icon-blackadd.png")}
          />
        </Pressable>
      </View>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  nameTypo: {
    textAlign: "left",
  },
  nameTypo1: {
    fontSize: GlobalStyles.FontSize.size_xl,
  },
  groupChildBorder: {
    borderWidth: 1,
    borderColor: "#e8e8e8",
    borderStyle: "solid",
    left: 0,
    backgroundColor: GlobalStyles.Color.white,
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
    position: "absolute",
  },
  helloTypo: {
    fontSize: GlobalStyles.FontSize.size_base,
    textAlign: "left",
    top: "50%",
  },
  currentPosition: {
    marginTop: 10.89,
    fontSize: GlobalStyles.FontSize.size_base,
    left: "50%",
    color: GlobalStyles.Color.indigo_100,
    position: "absolute",
  },
  groupLayout: {
    height: 27,
    width: 86,
    top: 11,
    backgroundColor: GlobalStyles.Color.white,
  },
  iconLayout: {
    height: 6,
    width: 11,
    top: 21,
    position: "absolute",
  },
  parentPosition: {
    right: 0,
    position: "absolute",
  },
  groupChildLayout: {
    height: 60,
    position: "absolute",
  },
  groupChildPosition: {
    right: 24,
    height: 60,
  },
  addressPosition: {
    left: 2,
    position: "absolute",
  },
  helloPosition1: {
    left: 19,
    position: "absolute",
  },
  helloPosition: {
    left: 21,
    color: GlobalStyles.Color.gray_700,
    fontSize: GlobalStyles.FontSize.size_base,
    textAlign: "left",
    top: "50%",
    position: "absolute",
  },
  vrstva98Layout: {
    height: 3,
    backgroundColor: GlobalStyles.Color.blue_100,
    borderRadius: GlobalStyles.Border.br_7xs,
    top: 10,
    position: "absolute",
  },
  identityProof: {
    marginTop: 531.5,
    textAlign: "left",
    color: GlobalStyles.Color.indigo_100,
    left: 0,
    top: "50%",
    position: "absolute",
  },
  personsWithSignificantContr: {
    bottom: 2,
    left: 31,
    textAlign: "left",
    color: GlobalStyles.Color.indigo_100,
    position: "absolute",
  },
  groupChild: {
    borderRadius: GlobalStyles.Border.br_5xs,
    width: 23,
    bottom: 0,
    top: 0,
    position: "absolute",
  },
  personsWithSignificantContrParent: {
    bottom: 294,
    width: 251,
    height: 23,
    left: 0,
    position: "absolute",
  },
  current: {
    margin: GlobalStyles.Margin.margin_8xs,
  },
  currentSignedPassport: {
    marginLeft: -51,
    left: "50%",
  },
  groupItem: {
    left: 16,
    position: "absolute",
  },
  iconIonicIosArrowForward: {
    left: 17,
  },
  currentSignedPassportParent: {
    left: 0,
  },
  currentPhotoCardDrivingLic: {
    marginLeft: -49.5,
    left: "50%",
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
    position: "absolute",
  },
  rectangleView: {
    right: 9,
    position: "absolute",
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
  iconIonicIosArrowDown: {
    marginTop: -2.64,
    right: 26,
    width: 9,
    height: 5,
    top: "50%",
    position: "absolute",
  },
  hello: {
    marginTop: -6,
    left: 14,
    color: GlobalStyles.Color.gray_700,
    position: "absolute",
  },
  iconIonicIosArrowDownParent: {
    marginTop: 431.5,
    borderRadius: GlobalStyles.Border.br_lg,
    top: "50%",
  },
  firstName: {
    top: 112,
    textAlign: "left",
    color: GlobalStyles.Color.indigo_100,
    left: 0,
    position: "absolute",
  },
  lastName: {
    top: 233,
    textAlign: "left",
    color: GlobalStyles.Color.indigo_100,
    left: 0,
    position: "absolute",
  },
  addressLine1: {
    top: 357,
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
    textAlign: "left",
    top: "50%",
  },
  townOrCity: {
    marginTop: -462.5,
    textAlign: "left",
    color: GlobalStyles.Color.indigo_100,
    top: "50%",
  },
  postcode: {
    marginTop: -340.5,
    textAlign: "left",
    color: GlobalStyles.Color.indigo_100,
    top: "50%",
  },
  dateOfBirth: {
    marginTop: -94.5,
    textAlign: "left",
    color: GlobalStyles.Color.indigo_100,
    left: 0,
    top: "50%",
    position: "absolute",
  },
  appointedOn: {
    marginTop: 283.5,
    textAlign: "left",
    color: GlobalStyles.Color.indigo_100,
    left: 0,
    top: "50%",
    position: "absolute",
  },
  role: {
    marginTop: -218.5,
    textAlign: "left",
    color: GlobalStyles.Color.indigo_100,
    left: 0,
    top: "50%",
    position: "absolute",
  },
  countryOfResidence: {
    marginTop: 29.5,
    textAlign: "left",
    color: GlobalStyles.Color.indigo_100,
    left: 0,
    top: "50%",
    position: "absolute",
  },
  nationality: {
    marginTop: 159.5,
    textAlign: "left",
    color: GlobalStyles.Color.indigo_100,
    left: 0,
    top: "50%",
    position: "absolute",
  },
  occupation: {
    marginTop: 407.5,
    textAlign: "left",
    color: GlobalStyles.Color.indigo_100,
    left: 0,
    top: "50%",
    position: "absolute",
  },
  groupView: {
    top: 136,
    borderRadius: GlobalStyles.Border.br_lg,
  },
  groupChild1: {
    top: 257,
    borderRadius: GlobalStyles.Border.br_lg,
  },
  groupChild2: {
    marginTop: -682.5,
    borderRadius: GlobalStyles.Border.br_lg,
    top: "50%",
  },
  groupChild3: {
    marginTop: -560.5,
    borderRadius: GlobalStyles.Border.br_lg,
    top: "50%",
  },
  groupChild4: {
    marginTop: -438.5,
    borderRadius: GlobalStyles.Border.br_lg,
    top: "50%",
  },
  groupChild5: {
    marginTop: -316.5,
    borderRadius: GlobalStyles.Border.br_lg,
    top: "50%",
  },
  hello1: {
    fontSize: GlobalStyles.FontSize.size_8xl,
    fontWeight: "700",


    top: 0,
    textAlign: "left",
    color: GlobalStyles.Color.indigo_100,
    left: 0,
    position: "absolute",
  },
  hello2: {
    marginTop: 4.74,
    left: 1,
    lineHeight: 20,
    color: GlobalStyles.Color.gray_700,
    position: "absolute",
  },
  helloParent: {
    width: 281,
    height: 77,
    top: 0,
  },
  hello3: {
    marginTop: -904.5,
    color: GlobalStyles.Color.gray_700,
  },
  hello4: {
    marginTop: -780.5,
    color: GlobalStyles.Color.gray_700,
  },
  hello5: {
    marginTop: -658.5,
  },
  hello6: {
    marginTop: -536.5,
  },
  hello7: {
    marginTop: -414.5,
  },
  hello8: {
    marginTop: -292.5,
  },
  groupChild6: {
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
    top: 0,
    left: 0,
    position: "absolute",
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
    borderRadius: GlobalStyles.Border.br_lg,
    top: "50%",
  },
  iconIonicIosArrowDownGroup: {
    marginTop: 183.5,
    borderRadius: GlobalStyles.Border.br_lg,
    top: "50%",
  },
  iconIonicIosArrowDownContainer: {
    marginTop: 53.5,
    borderRadius: GlobalStyles.Border.br_lg,
    top: "50%",
  },
  helloContainer: {
    marginTop: -70.5,
    borderRadius: GlobalStyles.Border.br_lg,
    top: "50%",
  },
  iconIonicIosArrowDownParent1: {
    marginTop: -194.5,
    borderRadius: GlobalStyles.Border.br_lg,
    top: "50%",
  },
  groupChild8: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    backgroundColor: GlobalStyles.Color.gray_500,
    borderRadius: GlobalStyles.Border.br_lg,
    position: "absolute",
    width: "100%",
  },
  maskGroup236: {
    bottom: 13,
    top: 0,
    left: 0,
  },
  rectangleParent: {
    bottom: 0,
    top: 0,
    left: 0,
  },
  hello14: {
    top: "40%",
    left: "34.65%",
    fontSize: GlobalStyles.FontSize.size_lg,
    lineHeight: 10,
    textTransform: "uppercase",
    color: GlobalStyles.Color.black,
    textAlign: "left",
    position: "absolute",
  },
  groupParent: {
    width: 254,
    bottom: 0,
    left: 0,
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
  },
  identityProofParent: {
    width: "100%",
    height: 2127,
  },
  directorsOrPartners: {
    flex: 1,
    paddingLeft: GlobalStyles.Padding.padding_7xs,
    width: "100%",
    backgroundColor: GlobalStyles.Color.gray_100,
  },
});

export default DirectorsOrPartners;
