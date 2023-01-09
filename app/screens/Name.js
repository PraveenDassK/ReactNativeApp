import * as React from "react";
import { Text, StyleSheet, View, TextInput, Pressable } from "react-native";
//import { useNavigation } from "@react-navigation/native";
import GlobalStyles from "../../GlobalStyles";

const Name = ({navigation}) => {
  //const navigation = useNavigation();

  return (
    <View style={styles.name}>
      <View style={styles.groupParent}>
        <View style={styles.helloParent}>
          <Text style={styles.hello}>Your Full Name</Text>
          <Text style={[styles.hello1, styles.helloTypo, styles.nameTypo]}>
            Your name should match your documents.
          </Text>
        </View>
        <Text
          style={[
            styles.firstName,
            styles.helloTypo,
            styles.nameTypo,
            styles.namePosition,
          ]}
        >
          First Name
        </Text>
        <Text
          style={[
            styles.lastName,
            styles.helloTypo,
            styles.nameTypo,
            styles.namePosition,
          ]}
        >
          Last Name
        </Text>
        <TextInput
          style={[styles.groupChild, styles.groupBorder]}
          keyboardType="default"
        />
        <TextInput 
            style={[styles.groupItem, styles.groupBorder]} 
            keyboardType="default"
        />
        <Pressable
          style={[styles.groupContainer, styles.groupContainerPosition]}
          onPress={() => navigation.navigate("ProofOfResidencyListA")}
        >
          <View style={[styles.rectangleParent, styles.groupContainerPosition]}>
            <View style={styles.groupInner} />
            <View style={styles.maskGroup236} />
          </View>
          <Text style={[styles.hello2, styles.helloTypo]} onPress={() => navigation.navigate("ProofOfResisendcyListA1")}>Continue</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  helloTypo: {
    //fontFamily: GlobalStyles.FontFamily.helvetica,
    textAlign: "left",
    position: "absolute",
  },
  nameTypo: {
    fontSize: GlobalStyles.FontSize.size_base,
    top: "50%",
   // fontFamily: GlobalStyles.FontFamily.helvetica,
  },
  namePosition: {
    color: GlobalStyles.Color.indigo_100,
    left: 0,
    top: "50%",
  },
  groupBorder: {
    borderWidth: 1,
    borderColor: "#e8e8e8",
    borderStyle: "solid",
    height: 60,
    borderRadius: GlobalStyles.Border.br_lg,
    right: 0,
    top: "50%",
    left: 0,
    position: "absolute",
    backgroundColor: GlobalStyles.Color.white,
  },
  groupContainerPosition: {
    bottom: 0,
    right: 0,
    left: 0,
    position: "absolute",
  },
  hello: {
    fontSize: GlobalStyles.FontSize.size_8xl,
    fontWeight: "700",
    //fontFamily: GlobalStyles.FontFamily.typoGrotesk,
    textAlign: "left",
    color: GlobalStyles.Color.indigo_100,
    left: 0,
    top: 0,
    position: "absolute",
  },
  hello1: {
    marginTop: 14.74,
    left: 1,
    color: GlobalStyles.Color.gray_700,
  },
  helloParent: {
    left: 2,
    width: 263,
    height: 57,
    top: 0,
    position: "absolute",
  },
  firstName: {
    marginTop: -104.5,
  },
  lastName: {
    marginTop: 8.5,
  },
  groupChild: {
    marginTop: -81.5,
    height: 60,
  },
  groupItem: {
    marginTop: 31.5,
    height: 60,
  },
  groupInner: {
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
    top: 0,
    position: "absolute",
  },
  rectangleParent: {
    top: 0,
  },
  hello2: {
    top: "40%",
    left: "38.04%",
    fontSize: GlobalStyles.FontSize.size_lg,
    textTransform: "uppercase",
    color: GlobalStyles.Color.black,
  },
  groupContainer: {
    height: 60,
  },
  groupParent: {
    width: 326,
    height: 411,
  },
  name: {
    flex: 1,
    paddingLeft: GlobalStyles.Padding.padding_7xs,
    paddingTop: GlobalStyles.Padding.padding_5xl,
    paddingRight: GlobalStyles.Padding.padding_8xs,
    width: "100%",
    backgroundColor: GlobalStyles.Color.white,
  },
});

export default Name;