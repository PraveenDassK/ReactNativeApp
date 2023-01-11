import * as React from "react";
import { Text, StyleSheet, View, Pressable, Image,TextInput } from "react-native";
import Screen from "../components/Screen";
import GlobalStyles from "../../GlobalStyles";

const SelectBank1 = () => {

  return (
    <Screen>
    <View style={styles.selectBank1}>
      <View style={styles.helloParent}>
        <Text style={styles.hello}>Enter your detail</Text>
        <Text style={[styles.hello1, styles.helloTypo]}>
          <Text style={styles.byProvidingYour}>
            By providing your information to Carbonyte, you are{"\n"}
          </Text>
          <Text style={styles.byProvidingYour}>
            enabling Carbonyte to retrieve your personal data.
          </Text>
        </Text>
        <TextInput style={[styles.username, styles.usernameTypo]} placeholder={"Username"}/>
        <TextInput style={[styles.password, styles.usernameTypo]} placeholder={"Password"}/>
        <TextInput style={[styles.groupChild, styles.groupBorder]} placeholder={""} />
        <TextInput style={[styles.groupItem, styles.groupBorder]} />
        <Pressable
          style={[styles.groupParent, styles.parentPosition]}
          onPress={() => navigation.navigate("VerifyYourIdentity")}
        >
          <View style={[styles.rectangleParent, styles.parentPosition]}>
            <View style={styles.groupInner} />
            <View style={styles.maskGroup236} />
          </View>
          <Text style={[styles.hello2, styles.helloTypo]}>Submit</Text>
        </Pressable>
      </View>
    </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  helloTypo: {
    // fontFamily: GlobalStyles.FontFamily.helvetica,
    textAlign: "left",
    position: "absolute",
  },
  usernameTypo: {
    fontSize: GlobalStyles.FontSize.size_xl,
    left: 0,
    // fontFamily: GlobalStyles.FontFamily.helvetica,
    top: "50%",
    textAlign: "left",
    color: GlobalStyles.Color.indigo_100,
    position: "absolute",
  },
  groupBorder: {
    borderWidth: 1,
    borderColor: "#e8e8e8",
    borderStyle: "solid",
    height: 60,
    borderRadius: GlobalStyles.Border.br_lg,
    right: 0,
    left: 0,
    top: "50%",
    position: "absolute",
    backgroundColor: GlobalStyles.Color.white,
  },
  parentPosition: {
    bottom: 0,
    right: 0,
    left: 0,
    position: "absolute",
  },
  hello: {
    left: 2,
    fontSize: GlobalStyles.FontSize.size_8xl,
    fontWeight: "700",
    textAlign: "left",
    color: GlobalStyles.Color.indigo_100,
    position: "absolute",
    top: 0,
  },
  byProvidingYour: {
    margin: GlobalStyles.Margin.margin_8xs,
  },
  hello1: {
    marginTop: -165.02,
    left: 3,
    fontSize: GlobalStyles.FontSize.size_base,
    lineHeight: 20,
    color: GlobalStyles.Color.gray_700,
    top: "50%",
    // fontFamily: GlobalStyles.FontFamily.helvetica,
  },
  username: {
    marginTop: -94.5,
  },
  password: {
    marginTop: 28.5,
  },
  groupChild: {
    marginTop: -70.5,
    height: 60,
  },
  groupItem: {
    marginTop: 52.5,
    height: 60,
  },
  groupInner: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    backgroundColor: GlobalStyles.Color.blue_100,
    borderRadius: GlobalStyles.Border.br_lg,
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
    top: 0,
    bottom: 0,
  },
  hello2: {
    top: "40%",
    left: "41.41%",
    fontSize: GlobalStyles.FontSize.size_lg,
    textTransform: "uppercase",
    color: GlobalStyles.Color.white,
  },
  groupParent: {
    height: 60,
  },
  helloParent: {
    width: 326,
    height: 417,
  },
  arrowPosition: {
    top: "6%",
    position: "absolute",
  },
  arrowCircle: {
    marginTop: -10.11,
    marginRight: 303.54,
    width: 15,
    height: 15,
  },
  selectBank1: {
    flex: 1,
    paddingLeft: GlobalStyles.Padding.padding_7xs,
    paddingTop: GlobalStyles.Padding.padding_xl,
    paddingRight: GlobalStyles.Padding.padding_8xs,
    width: "100%",
    backgroundColor: GlobalStyles.Color.gray_100,
  },
});

export default SelectBank1;
