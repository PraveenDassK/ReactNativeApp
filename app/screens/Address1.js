import * as React from "react";
import { Text, StyleSheet, View, Pressable,TextInput } from "react-native";
import GlobalStyles from "../../GlobalStyles";

const Address1 = () => {
  const [address1, onChangeAddress1] = React.useState(null);
  const [Address2, onChangeAddress2] = React.useState(null);
  const [City, onChangeCity] = React.useState(null);
  const [Postcode, onChangePostcode] = React.useState(null);

  return (
    <View style={styles.address1}>
      <View style={styles.helloParent}>
        <Text style={styles.hello}>Business Address</Text>
        <Text style={[styles.byLawWeNeedYourHomeAddre, styles.hello1Typo]}>
          <Text style={styles.byLawWe}>
            By law we need your home address to open your
          </Text>
          <Text style={styles.byLawWe}>account</Text>
        </Text>

        <TextInput 
            style={[styles.addressLine1Wrapper, styles.wrapperBorder]}
            placeholder = "Address Line 1"
            onChangeText = {onChangeAddress1}
        />

        <TextInput 
          style={[styles.addressLine2Wrapper, styles.wrapperBorder]}
            placeholder = "Address Line 2"
            onChangeText = {onChangeAddress2}
        />

        <TextInput 
          style={[styles.towncityWrapper, styles.wrapperBorder]}
          placeholder = "Town/City"
          onChangeText = {onChangeCity}
        />

        <TextInput 
          style={[styles.postcodeWrapper, styles.wrapperBorder]}
          placeholder = "Postcode"
          onChangeText = {onChangePostcode}
        />

        <Pressable
          style={[styles.groupParent, styles.parentPosition]}
          onPress={() => console.log(address1)}
        >
          <View style={[styles.rectangleParent, styles.parentPosition]}>
            <View style={styles.groupChild} />
            <View style={[styles.maskGroup236, styles.towncityPosition]} />
          </View>
          <Text style={[styles.hello1, styles.hello1Typo]}>Continue</Text>
        </Pressable>

          <Text
            style={[
              styles.towncity,
              styles.towncityPosition,
              styles.hello1Typo,
            ]}
          >
            Address Line 2
          </Text>
        </View>
      </View>
  );
};

const styles = StyleSheet.create({
  hello1Typo: {
    textAlign: "left"
  },
  wrapperBorder: {
    height: 84,
    borderWidth: 1,
    borderColor: "#e8e8e8",
    borderStyle: "solid",
    top: "50%",
    borderRadius: GlobalStyles.Border.br_lg,
    left: 0,
    right: 0,
    position: "absolute",
    backgroundColor: GlobalStyles.Color.white,
  },
  towncityPosition: {
    left: 0,
    top: -20,
    position: "absolute",
  },
  parentPosition: {
    bottom: 0,
    left: 0,
    right: 0,
    position: "absolute",
  },
  hello: {
    fontSize: GlobalStyles.FontSize.size_8xl,
    fontWeight: "700",
    textAlign: "left",
    color: GlobalStyles.Color.indigo_100,
    left: 2,
    top: 0,
    position: "absolute",
  },
  byLawWe: {
    margin: GlobalStyles.Margin.margin_8xs,
  },
  byLawWeNeedYourHomeAddre: {
    top: 45,
    fontSize: GlobalStyles.FontSize.size_base,
    color: GlobalStyles.Color.gray_700,
    left: 2,
    position: "absolute",
  },
  towncity: {
    fontSize: GlobalStyles.FontSize.size_xl,
    left: 0,
    color: GlobalStyles.Color.indigo_100,
  },
  towncityWrapper: {
    marginTop: -1,
  },
  postcodeWrapper: {
    marginTop: 108,
  },
  groupChild: {
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
    right: 0,
    left: 0,
  },
  rectangleParent: {
    top: 0,
    bottom: 0,
  },
  hello1: {
    top: "40%",
    left: "38.04%",
    fontSize: GlobalStyles.FontSize.size_lg,
    textTransform: "uppercase",
    color: GlobalStyles.Color.black,
    position: "absolute",
  },
  groupParent: {
    height: 60,
  },
  addressLine1Wrapper: {
    marginTop: -219,
  },
  addressLine2Wrapper: {
    marginTop: -110,
  },
  helloParent: {
    width: "100%",
    height: 654,
  },
  address1: {
    flex: 1,
    paddingLeft: GlobalStyles.Padding.padding_7xs,
    paddingTop: GlobalStyles.Padding.padding_5xl,
    paddingRight: GlobalStyles.Padding.padding_8xs,
    width: "100%",
    backgroundColor: GlobalStyles.Color.white,
  },
});

export default Address1;
