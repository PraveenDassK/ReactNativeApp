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
          resizeMode="contain"
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
    top: 0,
    right: -50,
    bottom: 110,
    left: 0,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    position: "relative",
    margin:10
  },
  hello: {
    top: -40,
    padding:2,
    left: 13,
    fontSize: GlobalStyles.FontSize.size_8xl,
    fontWeight: "700",
    color: GlobalStyles.Color.indigo_100,
    textAlign: "left",
    position: "absolute",
  },
  groupItem: {
    marginTop: -39,
    marginLeft: -47,
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
    backgroundColor: GlobalStyles.Color.grey_100,
    flex: 3,
    width: "100%",
    paddingLeft: GlobalStyles.Padding.padding_2xs,
    paddingTop: 211,
    paddingRight: 58,
    
  },
});

export default BiometrixComplete;
