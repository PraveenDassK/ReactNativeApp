import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import GlobalStyles from "../GlobalStyles";

const FaceScanComplete = () => {
  return (
    <View style={styles.faceScanComplete}>
      <View style={styles.groupParent}>
        <Image
          style={[styles.groupChild, styles.helloPosition]}
          resizeMode="cover"
          source={require("../assets/group-30764.png")}
        />
        <Text style={[styles.hello, styles.helloPosition]}>
          Face Scan Complete
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  helloPosition: {
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  groupChild: {
    marginTop: -58.13,
    marginLeft: -92.5,
    width: 190,
    height: 191,
  },
  hello: {
    marginTop: -120,
    marginLeft: -124.5,
    fontSize: GlobalStyles.FontSize.size_8xl,
    fontWeight: "700",
    fontFamily: GlobalStyles.FontFamily.typoGrotesk,
    color: GlobalStyles.Color.indigo_100,
    textAlign: "left",
  },
  groupParent: {
    backgroundColor: "rgba(1, 1, 253, 0.05)",
    width: 375,
    height: 812,
  },
  faceScanComplete: {
    backgroundColor: GlobalStyles.Color.gray_300,
    flex: 1,
    width: "100%",
  },
});

export default FaceScanComplete;
