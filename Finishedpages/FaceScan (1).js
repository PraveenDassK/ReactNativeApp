import * as React from "react";
import { Text, StyleSheet, Pressable, View, Image} from "react-native";
import GlobalStyles from "../../GlobalStyles";

const FaceScan = () => {
  return (
    <View style={styles.faceScan}>
      <View style={styles.faceScanInner}>
        <View
          style={[
            styles.helloParent,
            styles.parentGroupPosition,
            styles.parentPosition,
          ]}
        >
          <Image

            style={[styles.imageCircle, styles.imagePosition]}

            resizeMode="cover"

            source={require("../assets/shutterstock-2057026517@3x.png")}

          />
          <Text style={styles.hello}>Scanning your face</Text>
          <Text style={[styles.thisWillHelpUsSecurelyAut, styles.hello1Typo]}>
            <Text style={styles.thisWillHelp}>
              Please take a look into the camera and hold still
            </Text>
            {/* <Text style={styles.thisWillHelp}>
              your account. Make sure your face is clearly visible
            </Text> */}
            {/* <Text style={styles.thisWillHelp}>and nothing is covering it.</Text> */}
          </Text>
          <Pressable
            style={[
              styles.groupParent,
              styles.parentGroupPosition,
              styles.parentPosition,
            ]}
          >
            <View
              style={[
                styles.helloParent,
                styles.parentGroupPosition,
                styles.parentPosition,
              ]}
            >
              <View style={styles.groupChild} />
              <View style={[styles.maskGroup236, styles.parentGroupPosition]} />
            </View>
            <Text style={[styles.hello1, styles.hello1Typo]}>Scan my face</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  parentGroupPosition: {
    left: 0,
    right: 0,
    position: "absolute",
  },
  parentPosition: {
    bottom: 0,
    left: 0,
    right: 0,
  },
  hello1Typo: {
    //fontFamily: GlobalStyles.FontFamily.helvetica,
    textAlign: "left",
    position: "absolute",
  },
  hello: {
    fontSize: GlobalStyles.FontSize.size_8xl,
    fontWeight: "700",
    //fontFamily: GlobalStyles.FontFamily.typoGrotesk,
    color: GlobalStyles.Color.white,
    textAlign: "left",
    left: 0,
    top: 0,
    position: "absolute",
  },
  thisWillHelp: {
    margin: GlobalStyles.Margin.margin_8xs,
  },
  thisWillHelpUsSecurelyAut: {
    marginTop: -43.5,
    top: "50%",
    left: 2,
    fontSize: GlobalStyles.FontSize.size_base,
    color: GlobalStyles.Color.gray_700,
  },
  groupChild: {
    height: "100%",
    top: "580%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: GlobalStyles.Border.br_lg,
    backgroundColor: GlobalStyles.Color.blue_100,
    position: "absolute",
    width: "100%",
  },
  imagePosition: {

    top: "3%",

    position: "absolute",

  },

  imageCircle: {

    marginTop: 80.11,

    marginRight: 303.54,

    width: 300,

    height: 350,

  },
  maskGroup236: {
    bottom: 13,
    left: 0,
    right: 0,
    top: 0,
  },
  helloParent: {
    top: 0,
    bottom: 0,
  },
  hello1: {
    top: "620%",
    left: "33.13%",
    fontSize: GlobalStyles.FontSize.size_lg,
    textTransform: "uppercase",
    color: GlobalStyles.Color.white,
  },
  groupParent: {
    height: 60,
  },
  faceScanInner: {
    width: 326,
    height: 177,
  },
  faceScan: {
    backgroundColor: GlobalStyles.Color.black,
    flex: 1,
    paddingLeft: GlobalStyles.Padding.padding_7xs,
    paddingTop: GlobalStyles.Padding.padding_5xl,
    paddingRight: GlobalStyles.Padding.padding_5xs,
    width: "100%",
  },
});

export default FaceScan;
