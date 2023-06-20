import React, { useContext } from "react";
import { Text, StyleSheet, View, TextInput, ScrollView } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";

import AuthContext from "../auth/context";
import Button from "../components/AppButton";
import ErrorMessage from "../components/forms/ErrorMessage";
import GlobalStyles from "../../GlobalStyles";
import Screen from "../components/Screen";

const validationSchema = Yup.object().shape({
  buildOrHouseNo: Yup.string()
    .required()
    .label("Building name or house number"),
  addressLine1: Yup.string().required().label("Address line 1"),
  addressLine2: Yup.string().label("Address line 2"),
  townOrCity: Yup.string().required().label("Town or city"),
});

const PersonalAddress = ({ navigation }) => {
  const authContext = useContext(AuthContext);

  const handleSubmit = ({
    buildOrHouseNo,
    addressLine1,
    addressLine2,
    townOrCity,
  }) => {
    const address = `${buildOrHouseNo},${addressLine1},${addressLine2},${townOrCity}`;
    authContext.setUser((prev) => ({ ...prev, address }));
    console.log(authContext.user);
    navigation.navigate("DOB");
  };

  return (
    <ScrollView>
      <Screen>
        <View style={styles.personalAddress}>
          <View style={styles.buildingNameOrNumberParent}>
            <Text
              style={[
                styles.buildingNameOrNumber,
                styles.helloTypo,
                styles.enterPostcode1Typo,
              ]}
            >
              Building name or number
            </Text>
            <Text style={[styles.addressLine1, styles.addressTypo]}>
              Address line 1
            </Text>

            <Text style={[styles.addressLine2Optional, styles.addressTypo]}>
              <Text style={styles.addressLine2}>{`Address line 2 `}</Text>
              <Text style={styles.optional}>(optional)</Text>
            </Text>
            <Text style={[styles.townOrCity, styles.addressTypo]}>
              Town or city
            </Text>

            <Formik
              initialValues={{
                buildOrHouseNo: "",
                addressLine1: "",
                addressLine2: "",
                townOrCity: "",
              }}
              onSubmit={handleSubmit}
              validationSchema={validationSchema}
            >
              {({
                handleChange,
                handleSubmit,
                errors,
                setFieldTouched,
                touched,
              }) => (
                <>
                  <TextInput
                    keyboardType="default"
                    onBlur={() => setFieldTouched("buildOrHouseNo")}
                    onChangeText={handleChange("buildOrHouseNo")}
                    style={[
                      styles.groupChild,
                      styles.groupChildLayout,
                      styles.groupChildBorder,
                      { paddingLeft: 10 },
                    ]}
                  />
                  <View style={{ position: "absolute", top: 190 }}>
                    <ErrorMessage
                      error={errors.buildOrHouseNo}
                      visible={touched.buildOrHouseNo}
                    />
                  </View>

                  <View
                    style={[styles.parentPosition, styles.groupChildLayout]}
                  >
                    <Button title="continue" onPress={handleSubmit} />
                  </View>
                  <TextInput
                    keyboardType="default"
                    onBlur={() => setFieldTouched("addressLine1")}
                    onChangeText={handleChange("addressLine1")}
                    style={[
                      styles.groupInner,
                      styles.groupChildLayout,
                      styles.groupChildBorder,
                      { paddingLeft: 10 },
                    ]}
                  />
                  <View style={{ position: "absolute", top: 313 }}>
                    <ErrorMessage
                      error={errors.addressLine1}
                      visible={touched.addressLine1}
                    />
                  </View>
                  <TextInput
                    keyboardType="default"
                    onBlur={() => setFieldTouched("addressLine2")}
                    onChangeText={handleChange("addressLine2")}
                    style={[
                      styles.groupView,
                      styles.groupChildLayout,
                      styles.groupChildBorder,
                      { paddingLeft: 10 },
                    ]}
                  />
                  <View style={{ position: "absolute", top: 403 }}>
                    <ErrorMessage
                      error={errors.addressLine2}
                      visible={touched.addressLine2}
                    />
                  </View>
                  <TextInput
                    keyboardType="default"
                    onBlur={() => setFieldTouched("townOrCity")}
                    onChangeText={handleChange("townOrCity")}
                    style={[
                      styles.groupChild1,
                      styles.groupChildLayout,
                      styles.groupChildBorder,
                      { paddingLeft: 10 },
                    ]}
                  />
                  <View style={{ position: "absolute", top: 554 }}>
                    <ErrorMessage
                      error={errors.townOrCity}
                      visible={touched.townOrCity}
                    />
                  </View>

                  <View
                    style={[styles.helloParent, styles.helloParentPosition]}
                  >
                    <Text style={[styles.hello1, styles.helloParentPosition]}>
                      Your Address
                    </Text>
                    <Text style={[styles.hello2, styles.addressTypo]}>
                      <Text style={styles.byLawWe}>
                        By law we need your home address to open your
                      </Text>
                      <Text style={styles.byLawWe}> account</Text>
                    </Text>
                  </View>
                </>
              )}
            </Formik>
          </View>
        </View>
      </Screen>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  helloTypo: {
    textAlign: "left",
  },
  enterPostcode1Typo: {
    fontSize: GlobalStyles.FontSize.size_base,
  },
  addressTypo: {
    top: "50%",
    textAlign: "left",
    fontSize: GlobalStyles.FontSize.size_base,
    position: "absolute",
  },
  groupChildLayout: {
    height: 60,
    position: "absolute",
  },
  groupChildBorder: {
    borderWidth: 1,
    borderColor: "#e8e8e8",
    borderStyle: "solid",
    height: 60,
    borderRadius: GlobalStyles.Border.br_lg,
    right: 0,
    top: "50%",
    left: 0,
    backgroundColor: GlobalStyles.Color.white,
  },
  parentPosition: {
    bottom: 0,
    right: 0,
    left: 0,
  },
  helloParentPosition: {
    top: 0,
    position: "absolute",
  },
  buildingNameOrNumber: {
    top: 116,
    textAlign: "left",
    color: GlobalStyles.Color.indigo_100,
    left: 0,
    position: "absolute",
  },
  addressLine1: {
    marginTop: -104.5,
    color: GlobalStyles.Color.indigo_100,
    left: 0,
  },
  addressLine2: {
    color: GlobalStyles.Color.indigo_100,
  },
  optional: {
    color: GlobalStyles.Color.gray_700,
  },
  addressLine2Optional: {
    marginTop: 16.5,
    left: 0,
  },
  townOrCity: {
    marginTop: 137.5,
    color: GlobalStyles.Color.indigo_100,
    left: 0,
  },
  groupChild: {
    marginTop: -202.5,
  },
  groupItem: {
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
    top: 0,
    left: 0,
  },
  hello: {
    top: "40%",
    left: "38.04%",
    fontSize: GlobalStyles.FontSize.size_lg,
    textTransform: "uppercase",
    color: GlobalStyles.Color.black,
    textAlign: "left",
    position: "absolute",
  },
  groupInner: {
    marginTop: -81.5,
  },
  groupView: {
    marginTop: 39.5,
  },
  groupChild1: {
    marginTop: 160.5,
  },
  enterPostcode1: {
    color: GlobalStyles.Color.blue_100,
    textAlign: "left",
  },
  enterPostcode: {
    bottom: 88,
    left: 0,
    position: "absolute",
  },
  hello1: {
    fontSize: GlobalStyles.FontSize.size_8xl,
    fontWeight: "700",
    textAlign: "left",
    color: GlobalStyles.Color.indigo_100,
    left: 0,
  },
  byLawWe: {
    margin: GlobalStyles.Margin.margin_8xs,
  },
  hello2: {
    marginTop: 4.74,
    left: 1,
    lineHeight: 20,
    color: GlobalStyles.Color.gray_700,
  },
  helloParent: {
    right: 19,
    left: 2,
    height: 77,
  },
  buildingNameOrNumberParent: {
    width: "100%",
    height: 670,
  },
  personalAddress: {
    flex: 1,
    paddingLeft: GlobalStyles.Padding.padding_7xs,
    paddingRight: GlobalStyles.Padding.padding_8xs,
    width: "100%",
    backgroundColor: GlobalStyles.Color.gray_100,
  },
});

export default PersonalAddress;
