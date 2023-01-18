import * as React from "react";
import { Image, StyleSheet, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import GlobalStyles from "../GlobalStyles";

const LogoAnimation = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.logoAnimation}
      onPress={() => navigation.navigate("LogoAnimation2")}
    >
      <Image
        style={styles.layer12Icon}
        resizeMode="cover"
        source={require("../assets/layer-125.png")}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  layer12Icon: {
    width: 1875,
    height: 853,
  },
  logoAnimation: {
    backgroundColor: GlobalStyles.Color.gray_300,
    flex: 1,
    width: "100%",
  },
});

export default LogoAnimation;
