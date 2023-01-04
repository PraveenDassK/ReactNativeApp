import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import GlobalStyles from "../GlobalStyles";

const Terminate = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.terminate}>
      <View style={styles.terminateInner}>
        <View
          style={[
            styles.helloParent,
            styles.helloPosition,
            styles.helloParentPosition,
          ]}
        >
          <Text style={[styles.hello, styles.helloPosition]}>
            <Text style={styles.areYouSure}>Are you sure you want to</Text>
            <Text style={styles.areYouSure}>terminate your card?</Text>
          </Text>
          <View style={[styles.groupParent, styles.groupPosition1]}>
            <View
              style={[
                styles.helloParent,
                styles.helloPosition,
                styles.helloParentPosition,
              ]}
            >
              <View style={[styles.groupChild, styles.groupPosition]} />
              <View
                style={[
                  styles.maskGroup236,
                  styles.helloPosition,
                  styles.helloParentPosition,
                ]}
              />
            </View>
            <Text style={[styles.hello1, styles.helloTypo]}>No</Text>
          </View>
          <View style={[styles.groupContainer, styles.groupPosition1]}>
            <Pressable
              style={[
                styles.helloParent,
                styles.helloPosition,
                styles.helloParentPosition,
              ]}
              onPress={() => navigation.navigate("TerminatedCard")}
            >
              <View style={[styles.groupItem, styles.groupPosition]} />
              <View
                style={[
                  styles.maskGroup236,
                  styles.helloPosition,
                  styles.helloParentPosition,
                ]}
              />
            </Pressable>
            <Text style={[styles.hello2, styles.helloTypo]}>Yes</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  helloPosition: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  helloParentPosition: {
    right: 0,
    left: 0,
    top: 0,
    position: "absolute",
  },
  groupPosition1: {
    height: 60,
    width: 146,
    left: "50%",
    marginLeft: -72.5,
    position: "absolute",
  },
  groupPosition: {
    borderRadius: GlobalStyles.Border.br_lg,
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
    fontSize: GlobalStyles.FontSize.size_lg,
    top: "38.33%",
    position: "absolute",
  },
  areYouSure: {
    margin: GlobalStyles.Margin.margin_8xs,
  },
  hello: {
    fontSize: GlobalStyles.FontSize.size_7xl,
    lineHeight: 30,
    fontWeight: "700",
    fontFamily: GlobalStyles.FontFamily.typoGrotesk,
    color: GlobalStyles.Color.indigo_100,
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
  },
  helloParent: {
    bottom: 0,
  },
  hello1: {
    left: "42.47%",
    color: GlobalStyles.Color.black,
  },
  groupParent: {
    bottom: 0,
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
    color: GlobalStyles.Color.blue_100,
  },
  groupContainer: {
    marginTop: -21.5,
    top: "50%",
  },
  terminateInner: {
    width: 299,
    height: 235,
  },
  terminate: {
    flex: 1,
    paddingLeft: GlobalStyles.Padding.padding_6xs,
    paddingTop: 290,
    paddingRight: GlobalStyles.Padding.padding_4xs,
    width: "100%",
    backgroundColor: GlobalStyles.Color.white,
  },
});

export default Terminate;
