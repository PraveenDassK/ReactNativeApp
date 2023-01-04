import * as React from "react";
import { Image, StyleSheet, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import GlobalStyles from "../GlobalStyles";

const LogoAnimation1 = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.logoAnimation1}
      onPress={() => navigation.navigate("LogoAnimation21")}
    >
      <Image
        style={styles.layer12Icon}
        resizeMode="cover"
        source={require("../assets/layer-124.png")}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  layer12Icon: {
    width: 1875,
    height: 853,
  },
  logoAnimation1: {
    backgroundColor: GlobalStyles.Color.white,
    flex: 1,
    width: "100%",
  },
});

export default LogoAnimation1;
