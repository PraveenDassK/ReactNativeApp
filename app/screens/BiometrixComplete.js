import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
//import { useNavigation } from "@react-navigation/native";
import GlobalStyles from "../../GlobalStyles";

const BiometrixComplete = () => {
  //const navigation = useNavigation();

  return (
    <Pressable
      style={styles.biometrixComplete}
      onPress={() => navigation.navigate("Pin")}
    >
      <View style={styles.ellipseParent}>
        <Image
          style={styles.groupChild}
          resizeMode="cover"
          source={require("../assets/image-biometicsloadfinish.png")}
        />
        <Text style={styles.hello}>Biometric Completed</Text>
        <Image
          style={styles.groupItem}
          resizeMode="cover"
          source={require("../assets/icon-bluecheck.png")}
        />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  groupChild: {
    top: 56,
    right: 0,
    bottom: 0,
    left: 0,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    position: "absolute",
  },
  hello: {
    top: 0,
    left: 13,
    fontSize: GlobalStyles.FontSize.size_8xl,
    fontWeight: "700",
    color: GlobalStyles.Color.indigo_100,
    textAlign: "left",
    position: "absolute",
  },
  groupItem: {
    marginTop: -29,
    marginLeft: -57,
    top: "50%",
    left: "50%",
    width: 114,
    height: 114,
    position: "absolute",
  },
  ellipseParent: {
    width: 278,
    height: 334,
  },
  biometrixComplete: {
    backgroundColor: GlobalStyles.Color.white,
    flex: 1,
    width: "100%",
    paddingLeft: GlobalStyles.Padding.padding_4xs,
    paddingTop: 211,
    paddingRight: 48,
  },
});

export default BiometrixComplete;
