import * as React from "react";
import { Text, StyleSheet, Image, View, Pressable } from "react-native";

import Screen from "../components/Screen"
import GlobalStyles from "../../GlobalStyles";

const PersonalOrBusiness = ({ navigation }) => {



  return (
    <Screen>
      <View style={styles.personalOrBusiness}>
        <View style={styles.helloParent}>
          <Text style={styles.hello}>What account do you want?</Text>
          <Image
            style={styles.groupChild}
            resizeMode="cover"
            source={require("../assets/logo-iconwithtext.png")}
          />
          <Pressable
            style={[styles.groupParent, styles.groupPosition]}
            onPress={() => navigation.navigate("CountryOfResidence")}
          >
            <View style={[styles.rectangleParent, styles.maskGroup236Position]}>
              <View style={styles.groupItem} />
              <View style={[styles.maskGroup236, styles.maskGroup236Position]} />
            </View>
            <Text style={[styles.hello1, styles.helloTypo]}>Business</Text>
          </Pressable>
          <Pressable style={[styles.rectangleGroup, styles.groupPosition]}>
            <View style={styles.groupItem} />
            <View style={[styles.maskGroup236, styles.maskGroup236Position]} />
          </Pressable>
          <Text style={[styles.hello2, styles.helloTypo]} onPress={() => navigation.navigate('Name')}>Personal</Text>
        </View>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  groupPosition: {
    height: 60,
    left: 0,
    right: 0,
    position: "absolute",
  },
  maskGroup236Position: {
    left: 0,
    right: 0,
    top: 0,
    position: "absolute",
  },
  helloTypo: {
    textAlign: "center",
    color: GlobalStyles.Color.black,
    textTransform: "uppercase",
    fontSize: GlobalStyles.FontSize.size_lg,
    position: "absolute",
  },
  hello: {
    marginTop: -26.22,
    left: 44,
    fontSize: GlobalStyles.FontSize.size_8xl,
    fontWeight: "700",
    color: GlobalStyles.Color.indigo_100,
    textAlign: "left",
    top: "50%",
    position: "absolute",
  },
  groupChild: {
    marginLeft: -76.42,
    left: "50%",
    width: 152,
    height: 101,
    top: 0,
    position: "absolute",
  },
  groupItem: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: GlobalStyles.Border.br_lg,
    backgroundColor: GlobalStyles.Color.gray_500,
    position: "absolute",
    width: "100%",
  },
  maskGroup236: {
    bottom: 13,
  },
  rectangleParent: {
    bottom: 0,
  },
  hello1: {
    top: "40%",
    left: "38.34%",
  },
  groupParent: {
    bottom: 0,
  },
  rectangleGroup: {
    marginTop: 33.78,
    top: "50%",
  },
  hello2: {
    top: "65.72%",
    left: "37.42%",
  },
  helloParent: {
    width: 326,
    height: 368,
  },
  personalOrBusiness: {
    backgroundColor: GlobalStyles.Color.white,
    flex: 1,
    paddingLeft: GlobalStyles.Padding.padding_7xs,
    paddingTop: 156,
    paddingRight: GlobalStyles.Padding.padding_8xs,
    width: "100%",
  },
});

export default PersonalOrBusiness;
