import * as React from "react";
import { Text, StyleSheet, View, Pressable,Image } from "react-native";
import GlobalStyles from "../../GlobalStyles";
import { horizontalScale, verticalScale, moderateScale } from "../config/scaling"


const Terminate = ({navigation}) => {
  const navigate = () => {
    console.log("Function")
    navigation.navigate("CardSettings")
  }

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
          <Text style={[styles.hello, styles.helloPosition1]}>
            <Text style={styles.areYouSure}>Are you sure you want to{"\n"}</Text>
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
              <Pressable
                style={[
                  styles.maskGroup236,
                  styles.helloPosition,
                  styles.helloParentPosition,
                ]}
                onPress={() => navigate()}
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
  },
  helloPosition1: {
    width: "100%",
    left: horizontalScale(8),
    top: verticalScale(0),
    position: "absolute",
  },
  helloParentPosition: {
    right: horizontalScale(0),
    left: horizontalScale(0),
    top: verticalScale(0),
    position: "absolute",
  },
  groupPosition1: {
    height: "25%",
    width: horizontalScale(200),
    left: "50%",
    marginLeft: horizontalScale(-92.5),
    position: "absolute",
  },
  groupPosition: {
    borderRadius: GlobalStyles.Border.br_lg,
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  helloTypo: {
    textAlign: "center",
    color: "black",
    // fontFamily: GlobalStyles.FontFamily.helvetica,
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
    lineHeight: verticalScale(30),
    fontWeight: "700",
    color: GlobalStyles.Color.indigo_100,
    textAlign: "center",
    position: "absolute",
  },
  groupChild: {
    backgroundColor: GlobalStyles.Color.blue_100,
  },
  maskGroup236: {
    bottom: verticalScale(13),
  },
  helloParent: {
    bottom: verticalScale(0),
  },
  hello1: {
    width: "100%",
    color: GlobalStyles.Color.white,
  },
  groupParent: {
    bottom: verticalScale(0),
  },
  groupItem: {
    backgroundColor: GlobalStyles.Color.white,

    height: "100%",
  },
  hello2: {
    width: "100%",
    color: GlobalStyles.Color.blue_100,
  },
  groupContainer: {
    marginTop: verticalScale(-21.5),
    top: "50%",
  },
  terminateInner: {
    width: "100%",
    height: verticalScale(235),
  },
  arrowPosition: {
    top: "6%",
    position: "absolute",
  },
  arrowCircle: {
    marginTop: verticalScale(-10.11),
    marginRight: horizontalScale(303.54),
    width: horizontalScale(15),
    height: verticalScale(15),
  },
  terminate: {
    flex: 1,
    paddingLeft: GlobalStyles.Padding.padding_6xs,
    paddingTop: verticalScale(220),
    paddingRight: GlobalStyles.Padding.padding_4xs,
    width: "100%",
    backgroundColor: GlobalStyles.Color.gray_100,
  },
});

export default Terminate;
