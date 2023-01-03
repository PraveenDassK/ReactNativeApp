import * as React from "react";
import { Text, StyleSheet, Image, View } from "react-native";
import GlobalStyles from "../GlobalStyles";

const FaceScanning1001 = () => {
  return (
    <View style={styles.faceScanning1001}>
      <View style={styles.pleaseTakeALookIntoTheCaParent}>
        <Text style={styles.pleaseTakeALookIntoTheCa}>
          Please take a look into the camera and hold still
        </Text>
        <Image
          style={styles.groupChild}
          resizeMode="cover"
          source={require("../assets/group-30760.png")}
        />
        <View style={styles.parent}>
          <Text style={[styles.text, styles.textTypo1]}>%</Text>
          <View style={[styles.maskGroup290, styles.maskGroupPosition]}>
            <View style={[styles.group, styles.groupLayout]}>
              <Text style={[styles.text1, styles.textTypo]}>1</Text>
              <Text style={[styles.text2, styles.textTypo]}>0</Text>
              <Text style={[styles.text3, styles.textTypo]}>2</Text>
              <Text style={[styles.text4, styles.textTypo]}>3</Text>
              <Text style={[styles.text5, styles.textTypo]}>4</Text>
              <Text style={[styles.text6, styles.textTypo]}>5</Text>
              <Text style={[styles.text7, styles.textTypo]}>6</Text>
              <Text style={[styles.text8, styles.textTypo]}>7</Text>
              <Text style={[styles.text9, styles.textTypo]}>8</Text>
              <Text style={[styles.text10, styles.textTypo]}>9</Text>
              <Text style={[styles.text11, styles.textTypo]}>0</Text>
              <Text style={[styles.text12, styles.textTypo]}>1</Text>
            </View>
          </View>
          <View style={[styles.maskGroup293, styles.maskGroupPosition]}>
            <View style={[styles.container, styles.groupLayout]}>
              <Text style={[styles.text1, styles.textTypo]}>1</Text>
              <Text style={[styles.text2, styles.textTypo]}>0</Text>
              <Text style={[styles.text3, styles.textTypo]}>2</Text>
              <Text style={[styles.text4, styles.textTypo]}>3</Text>
              <Text style={[styles.text5, styles.textTypo]}>4</Text>
              <Text style={[styles.text6, styles.textTypo]}>5</Text>
              <Text style={[styles.text7, styles.textTypo]}>6</Text>
              <Text style={[styles.text8, styles.textTypo]}>7</Text>
              <Text style={[styles.text9, styles.textTypo]}>8</Text>
              <Text style={[styles.text10, styles.textTypo]}>9</Text>
              <Text style={[styles.text11, styles.textTypo]}>0</Text>
              <Text style={[styles.text12, styles.textTypo]}>1</Text>
            </View>
          </View>
          <View style={[styles.maskGroup291, styles.maskGroupPosition]}>
            <View style={[styles.group, styles.groupLayout]}>
              <Text style={[styles.text1, styles.textTypo]}>1</Text>
              <Text style={[styles.text2, styles.textTypo]}>0</Text>
              <Text style={[styles.text3, styles.textTypo]}>2</Text>
              <Text style={[styles.text4, styles.textTypo]}>3</Text>
              <Text style={[styles.text5, styles.textTypo]}>4</Text>
              <Text style={[styles.text6, styles.textTypo]}>5</Text>
              <Text style={[styles.text7, styles.textTypo]}>6</Text>
              <Text style={[styles.text8, styles.textTypo]}>7</Text>
              <Text style={[styles.text9, styles.textTypo]}>8</Text>
              <Text style={[styles.text10, styles.textTypo]}>9</Text>
              <Text style={[styles.text11, styles.textTypo]}>0</Text>
              <Text style={[styles.text12, styles.textTypo]}>1</Text>
            </View>
          </View>
        </View>
        <Text style={[styles.hello, styles.textTypo1]}>Scanning your face</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textTypo1: {
    color: GlobalStyles.Color.black,
    fontWeight: "700",
    textAlign: "left",
    position: "absolute",
  },
  maskGroupPosition: {
    bottom: "0%",
    top: "0%",
    width: "30.36%",
    height: "100%",
    position: "absolute",
  },
  groupLayout: {
    height: 282,
    width: 11,
    left: 3,
    position: "absolute",
  },
  textTypo: {
    left: 0,
    color: GlobalStyles.Color.black,
    fontWeight: "700",
    fontSize: GlobalStyles.FontSize.size_3xl,
    textAlign: "left",
    fontFamily: GlobalStyles.FontFamily.helvetica,
    position: "absolute",
  },
  pleaseTakeALookIntoTheCa: {
    top: 143,
    left: 39,
    fontSize: GlobalStyles.FontSize.size_base,
    color: GlobalStyles.Color.gray_700,
    textAlign: "left",
    fontFamily: GlobalStyles.FontFamily.helvetica,
    position: "absolute",
  },
  groupChild: {
    marginTop: -116.5,
    top: "50%",
    right: 30,
    left: 38,
    maxWidth: "100%",
    overflow: "hidden",
    height: 307,
    position: "absolute",
  },
  text: {
    top: "13.04%",
    left: "69.64%",
    fontSize: GlobalStyles.FontSize.size_3xl,
    color: GlobalStyles.Color.black,
    fontWeight: "700",
    fontFamily: GlobalStyles.FontFamily.helvetica,
  },
  text1: {
    top: 25,
  },
  text2: {
    top: 0,
  },
  text3: {
    top: 49,
  },
  text4: {
    top: 72,
  },
  text5: {
    top: 96,
  },
  text6: {
    top: 120,
  },
  text7: {
    top: 144,
  },
  text8: {
    top: 168,
  },
  text9: {
    top: 192,
  },
  text10: {
    top: 216,
  },
  text11: {
    top: 240,
  },
  text12: {
    top: 263,
  },
  group: {
    top: -238,
  },
  maskGroup290: {
    right: "48.21%",
    left: "21.43%",
  },
  container: {
    top: -23,
  },
  maskGroup293: {
    right: "69.64%",
    left: "0%",
  },
  maskGroup291: {
    right: "26.79%",
    left: "42.86%",
  },
  parent: {
    marginLeft: -25.5,
    bottom: 30,
    width: 56,
    height: 23,
    left: "50%",
    position: "absolute",
  },
  hello: {
    marginLeft: -116.5,
    top: 109,
    fontSize: GlobalStyles.FontSize.size_8xl,
    fontFamily: GlobalStyles.FontFamily.typoGrotesk,
    left: "50%",
  },
  pleaseTakeALookIntoTheCaParent: {
    backgroundColor: "rgba(1, 1, 253, 0.1)",
    width: 375,
    height: 812,
  },
  faceScanning1001: {
    backgroundColor: GlobalStyles.Color.white,
    flex: 1,
    width: "100%",
  },
});

export default FaceScanning1001;
