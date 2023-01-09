import * as React from "react";
import { Text, StyleSheet, Image, View, Pressable } from "react-native";
import GlobalStyles from "../../GlobalStyles";

const LogoAnimation21 = () => {

  return (
    <Pressable
      style={styles.logoAnimation21}
      onPress={() => navigation.navigate("LogoAnimation31")}
    >
      <View style={styles.helloParent}>
        <Text style={styles.hello}>Whoop!</Text>
        <Image
          style={styles.groupChild}
          resizeMode="cover"
          source={require("../assets/layer-126@3x.png")}
        />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  hello: {
    top: 0,
    left: 0,
    fontSize: GlobalStyles.FontSize.size_11xl,
    fontWeight: "700",
    //fontFamily: GlobalStyles.FontFamily.typoGrotesk,
    color: GlobalStyles.Color.blue_100,
    textAlign: "center",
    position: "absolute",
  },
  groupChild: {
    marginTop: -20.82,
    marginLeft: -62.88,
    top: "50%",
    left: "50%",
    width: 127,
    height: 135,
    position: "absolute",
  },
  helloParent: {
    width: 138,
    height: 229,
  },
  logoAnimation21: {
    backgroundColor: GlobalStyles.Color.white,
    flex: 1,
    width: "100%",
    paddingLeft: GlobalStyles.Padding.padding_8xl,
    paddingTop: GlobalStyles.Padding.padding_9xl,
    paddingRight: 111,
  },
});

export default LogoAnimation21;
