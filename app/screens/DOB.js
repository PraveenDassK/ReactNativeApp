import * as React from "react";
import { Text, StyleSheet, View, Pressable, Image, TextInput } from "react-native";

import GlobalStyles from "../../GlobalStyles";

const DOB = ({navigation}) => {
  const [number, onChangeNumber] = React.useState(null);

  return (
    <View style={styles.dob}>
      <Image
            style={[styles.arrowCircle, styles.arrowPosition]}
            resizeMode="cover"
            source={require("../assets/icon-whitearrow.png")}
          />
      <View style={styles.helloParent}>
        <Text style={styles.hello}>Verify Date of Birth</Text>
        <Text style={[styles.requiresToMakeSureYouAre, styles.hello2Typo]}>
          Requires to make sure you are above 18
        </Text>
        <Text style={[styles.dateOfBirth, styles.hello1Typo]}>
          Date of Birth
        </Text>
        <Pressable
          style={[styles.groupPosition, styles.parentPosition]}
          onPress={() => navigation.navigate("AccountMain")}
        >
          <View style={[styles.parentPosition, styles.maskGroup236Position]}>
            <View style={[styles.groupChild, styles.groupLayout]} />
            <View style={[styles.maskGroup236, styles.maskGroup236Position]} />
          </View>
          <Text style={[styles.hello1, styles.hello1Typo]}>Continue</Text>
        </Pressable>
        <View
          style={[styles.helloGroup, styles.groupLayout, styles.groupPosition]}
        >
            
        <TextInput style={[styles.hello2, styles.hello2Typo]}
          onChangeText={onChangeNumber}
          value={number}
          placeholder="dd-mm-yyyy"
          keyboardType="numeric"
        />

          <View style={styles.groupItem} />
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
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  hello2Typo: {
    color: GlobalStyles.Color.gray_700,
    // fontFamily: GlobalStyles.FontFamily.helvetica,
    fontSize: GlobalStyles.FontSize.size_base,
    top: "50%",
    textAlign: "left",
    position: "absolute",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  hello1Typo: {
    // fontFamily: GlobalStyles.FontFamily.helvetica,
    textAlign: "left",
    position: "absolute",
  },
  parentPosition: {
    bottom: 0,
    position: "absolute",
  },
  maskGroup236Position: {
    right: 0,
    left: 0,
    top: 0,
  },
  groupLayout: {
    borderRadius: GlobalStyles.Border.br_lg,
    position: "absolute",
  },
  groupPosition: {
    height: 60,
    right: 0,
    left: 0,
  },
  vrstva98Layout: {
    height: 3,
    backgroundColor: GlobalStyles.Color.blue_100,
    borderRadius: GlobalStyles.Border.br_7xs,
    top: 10,
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
  requiresToMakeSureYouAre: {
    marginTop: -91.5,
    left: 0,
  },
  dateOfBirth: {
    marginTop: -45.5,
    fontSize: GlobalStyles.FontSize.size_base,
    // fontFamily: GlobalStyles.FontFamily.helvetica,
    top: "50%",
    color: GlobalStyles.Color.indigo_100,
    left: 0,
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
    position: "absolute",
  },
  hello1: {
    top: "30%",
    left: "38.04%",
    fontSize: GlobalStyles.FontSize.size_lg,
    textTransform: "uppercase",
    color: GlobalStyles.Color.white,
  },
  hello2: {
    marginTop: -6,
    left: 14,
  },
  groupItem: {
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
    top: 0,
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
    marginTop: -22.5,
    borderStyle: "solid",
    borderColor: "#e8e8e8",
    borderWidth: 1,
    top: "50%",
    borderRadius: GlobalStyles.Border.br_lg,
    height: 60,
    backgroundColor: GlobalStyles.Color.white,
  },
  helloParent: {
    width: "100%",
    height: 273,
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
  dob: {
    flex: 1,
    paddingLeft: GlobalStyles.Padding.padding_7xs,
    paddingTop: GlobalStyles.Padding.padding_xl,
    paddingRight: GlobalStyles.Padding.padding_8xs,
    width: "100%",
    backgroundColor: GlobalStyles.Color.gray_100,
  },
});

export default DOB;
