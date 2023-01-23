import React, { useContext } from "react";
import { Text, StyleSheet,  View, TextInput } from "react-native";
import { Formik } from "formik"
import * as Yup from 'yup'

import AuthContext from "../auth/context";
import Button from "../components/Button";
import ErrorMessage from "../components/forms/ErrorMessage";
import GlobalStyles from "../../GlobalStyles";
import Screen from "../components/Screen";
import AppButton from "../components/Button";

const validationSchema = Yup.object().shape({
  postCode: Yup.string().required().label("Post code"),

})

const BusinessAddress2 = ({ navigation }) => {
  
  const {setUser } = useContext(AuthContext)

  const handleSubmit = ({ postCode }) => {
    setUser(prevUser => ({...prevUser, postCode}))
    console.log(postCode)
    navigation.navigate("PersonalAddress")
  }

  return (
    <View style={styles.businessAddress2}>
      
      <View style={styles.postcodeParent}>
        <Text
          style={[styles.postcode, styles.hello1Position, styles.postcodeTypo]}
        >
          Postcode
        </Text>
        <View
          style={styles.dontKnowPostcode}
          onPress={() => navigation.navigate("PersonalAddress")}
        >
          {/* <Text style={[styles.dontKnowPostcode1, styles.postcodeTypo]}>
            Don't know postcode?
          </Text> */}
        </View>
        <Formik
          initialValues={{postCode:""}}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
          >
              {({ handleChange, handleSubmit, errors, setFieldTouched, touched }) => (
            <>
        <View
          style={[
            styles.helloWrapper,
            styles.groupChildLayout,
            styles.helloWrapperPosition,
          ]}
        >

          <TextInput
           keyboardType="default" 
           onBlur={() => setFieldTouched("postCode")}
           onChangeText={handleChange("postCode")}
           placeholder={"Enter your postcode"}
          style={[styles.hello, styles.helloTypo]}>
            
          </TextInput>
          <View style={{ position: "absolute", top:70}}>
          <ErrorMessage error={errors.postCode} visible={touched.postCode}/>
          </View>
        </View>
        <View style={styles.helloParent}>
          <Text style={[styles.hello1, styles.hello1Position]}>
            Your Address
          </Text>
          <Text style={[styles.hello2, styles.helloTypo]}>
            <Text style={styles.byLawWe}>
              By law we need your home address to open your
            </Text>
            <Text style={styles.byLawWe}>account</Text>
          </Text>
        </View>
        <View
          style={[styles.groupParent, styles.parentPosition]}
          onPress={() => navigation.navigate("BusinessChooseAddress")}
        >
          <AppButton title="continue" onPress={handleSubmit} />
        </View>
        </>
          )}
          </Formik>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  hello1Position: {
    color: GlobalStyles.Color.indigo_100,
    textAlign: "left",
    left: 0,
    position: "absolute",
  },
  postcodeTypo: {
    fontSize: GlobalStyles.FontSize.size_base,
    // fontFamily: GlobalStyles.FontFamily.helvetica,
  },
  groupChildLayout: {
    borderRadius: GlobalStyles.Border.br_lg,
    position: "absolute",
  },
  helloWrapperPosition: {
    right: 0,
    left: 0,
  },
  helloTypo: {
    color: GlobalStyles.Color.gray_700,
    textAlign: "left",
    color: GlobalStyles.Color.gray_700,
    textAlign: "left",
    // fontFamily: GlobalStyles.FontFamily.helvetica,
    fontSize: GlobalStyles.FontSize.size_base,
    top: "50%",
    position: "absolute",
  },
  parentPosition: {
    bottom: 0,
    right: 0,
    left: 0,
    position: "absolute",
  },
  postcode: {
    marginTop: -50,
    textAlign: "left",
    // fontFamily: GlobalStyles.FontFamily.helvetica,
    top: "50%",
  },
  dontKnowPostcode1: {
    marginTop: 57,
    color: GlobalStyles.Color.blue_100,
    textAlign: "left",
    // fontFamily: GlobalStyles.FontFamily.helvetica,
  },
  dontKnowPostcode: {
    left: 0,
    top: "50%",
    position: "absolute",
  },
  hello: {
    marginTop: -6,
    left: 14,
  },
  helloWrapper: {
    marginTop: -27,
    borderStyle: "solid",
    borderColor: "#e8e8e8",
    borderWidth: 1,
    height: 60,
    top: "50%",
    backgroundColor: GlobalStyles.Color.white,
  },
  hello1: {
    fontSize: GlobalStyles.FontSize.size_8xl,
    fontWeight: "700",
    top: 0,
    textAlign: "left",
  },
  byLawWe: {
    margin: GlobalStyles.Margin.margin_8xs,
  },
  hello2: {
    marginTop: 4.74,
    left: 1,
    lineHeight: 20,
  },
  helloParent: {
    right: 19,
    left: 2,
    height: 77,
    top: 0,
    position: "absolute",
  },
  groupChild: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    backgroundColor: GlobalStyles.Color.blue_100,
    width: "100%",
  },
  maskGroup236: {
    bottom: 13,
    top: 0,
    position: "absolute",
  },
  rectangleParent: {
    top: 0,
  },
  hello3: {
    top: "40%",
    left: "50%",
    marginLeft:-40,
    fontSize: GlobalStyles.FontSize.size_lg,
    textTransform: "uppercase",
    color: GlobalStyles.Color.white,
    textAlign: "left",
    // fontFamily: GlobalStyles.FontFamily.helvetica,
    position: "absolute",
  },
  groupParent: {
    height: 60,
  },
  postcodeParent: {
    width: "100%",
    height: 332,
  },
  businessAddress2: {
    flex: 1,
    paddingLeft: GlobalStyles.Padding.padding_7xs,
    paddingTop: GlobalStyles.Padding.padding_7xs,
    paddingRight: GlobalStyles.Padding.padding_8xs,
    width: "100%",
    backgroundColor: GlobalStyles.Color.gray_100,
  },
});

export default BusinessAddress2;