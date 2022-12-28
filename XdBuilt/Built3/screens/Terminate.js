import * as React from "react";
import { StyleSheet, View, Image, Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import GlobalStyles from "../GlobalStyles";

const Terminate = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.terminate}>
      <View style={styles.terminateChild} />
      <Pressable
        style={[styles.iconFeatherArrowLeftWrapper, styles.mt_769]}
        onPress={() => navigation.navigate("CardSettings")}
      >
        <Image
          style={styles.iconFeatherArrowLeft}
          resizeMode="cover"
          source={require("../assets/icon-featherarrowleft.png")}
        />
      </Pressable>
      <View style={[styles.helloParent, styles.mt191, styles.ml27]}>
        <Text style={styles.hello}>
          <Text style={styles.areYouSure}>Are you sure you want to</Text>
          <Text style={styles.areYouSure}>terminate your card?</Text>
        </Text>
        <View style={styles.component208115Parent}>
          <View style={[styles.component208115, styles.maskGroup236Position]}>
            <View
              style={[
                styles.rectangleParent,
                styles.parentPosition,
                styles.maskGroup236Position,
              ]}
            >
              <View style={[styles.groupChild, styles.groupPosition]} />
              <View
                style={[styles.maskGroup236, styles.maskGroup236Position]}
              />
            </View>
          </View>
          <Text style={[styles.hello1, styles.helloTypo]}>No</Text>
        </View>
        <View style={[styles.component208116Parent, styles.parentPosition]}>
          <Pressable
            style={[styles.component208115, styles.maskGroup236Position]}
            onPress={() => navigation.navigate("TerminatedCard")}
          >
            <View
              style={[
                styles.rectangleParent,
                styles.parentPosition,
                styles.maskGroup236Position,
              ]}
            >
              <View style={[styles.groupItem, styles.groupPosition]} />
              <View
                style={[styles.maskGroup236, styles.maskGroup236Position]}
              />
            </View>
          </Pressable>
          <Text style={[styles.hello2, styles.helloTypo]}>Yes</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mt_769: {
    marginTop: GlobalStyles.Margin.margin_60xs,
  },
  mt191: {
    marginTop: 191,
  },
  ml27: {
    marginLeft: GlobalStyles.Margin.margin_5xl,
  },
  maskGroup236Position: {
    right: 0,
    left: 0,
  },
  parentPosition: {
    top: "50%",
    height: 60,
    position: "absolute",
  },
  groupPosition: {
    borderRadius: GlobalStyles.Border.br_md,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  helloTypo: {
    textAlign: "center",
    fontFamily: GlobalStyles.FontFamily.helvetica,
    textTransform: "uppercase",
    lineHeight: 17,
    fontSize: GlobalStyles.FontSize.size_base,
    top: "35%",
    position: "absolute",
  },
  terminateChild: {
    width: 375,
    height: 815,
    backgroundColor: GlobalStyles.Color.gray_300,
  },
  iconFeatherArrowLeft: {
    marginLeft: -0.5,
    bottom: 4,
    width: 17,
    height: 17,
    left: "50%",
    position: "absolute",
  },
  iconFeatherArrowLeftWrapper: {
    width: 55,
    height: 45,
    backgroundColor: GlobalStyles.Color.gray_300,
  },
  areYouSure: {
    margin: GlobalStyles.Margin.margin_25xs,
  },
  hello: {
    fontSize: GlobalStyles.FontSize.size_5xl,
    lineHeight: 30,
    fontWeight: "700",
    fontFamily: GlobalStyles.FontFamily.typoGrotesk,
    color: GlobalStyles.Color.indigo,
    textAlign: "left",
    left: 0,
    top: 0,
    position: "absolute",
  },
  groupChild: {
    backgroundColor: GlobalStyles.Color.gray_500,
  },
  maskGroup236: {
    bottom: 13,
    top: 0,
    right: 0,
    position: "absolute",
  },
  rectangleParent: {
    marginTop: -30,
  },
  component208115: {
    bottom: 0,
    right: 0,
    top: 0,
    position: "absolute",
  },
  hello1: {
    left: "42.47%",
    color: GlobalStyles.Color.black,
  },
  component208115Parent: {
    height: 60,
    width: 146,
    bottom: 0,
    marginLeft: -70.5,
    left: "50%",
    position: "absolute",
  },
  groupItem: {
    backgroundColor: GlobalStyles.Color.white,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
  },
  hello2: {
    left: "39.73%",
    color: GlobalStyles.Color.blue,
  },
  component208116Parent: {
    marginTop: -17.5,
    width: 146,
    marginLeft: -70.5,
    top: "50%",
    left: "50%",
  },
  helloParent: {
    width: 295,
    height: 243,
  },
  terminate: {
    flex: 1,
    width: "100%",
    backgroundColor: GlobalStyles.Color.white,
  },
});

export default Terminate;
