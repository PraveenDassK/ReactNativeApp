import * as React from "react";
import { Text, StyleSheet, View, Pressable, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import GlobalStyles from "../GlobalStyles";

const LogoAnimation2 = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.logoAnimation2}
      onPress={() => navigation.navigate("LogoAnimation3")}
    >
      <View style={styles.groupParent}>
        <Pressable
          style={[
            styles.groupWrapper,
            styles.helloWrapperPosition,
            styles.wrapperPosition,
          ]}
          onPress={() => navigation.navigate("LogoAnimation3")}
        >
          <View
            style={[
              styles.helloWrapper,
              styles.helloWrapperPosition,
              styles.wrapperPosition,
            ]}
          >
            <Text style={[styles.hello, styles.helloWrapperPosition]}>
              Welcome to
            </Text>
          </View>
        </Pressable>
        <Image
          style={[styles.layer12Icon, styles.layer12IconPosition]}
          resizeMode="cover"
          source={require("../assets/layer-121.png")}
        />
        <Image
          style={[styles.maskGroup259, styles.layer12IconPosition]}
          resizeMode="cover"
          source={require("../assets/mask-group-2591.png")}
        />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  helloWrapperPosition: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  wrapperPosition: {
    right: 0,
    left: 0,
    top: 0,
    position: "absolute",
  },
  layer12IconPosition: {
    left: "50%",
    position: "absolute",
  },
  hello: {
    fontSize: GlobalStyles.FontSize.size_10xl,
    fontFamily: GlobalStyles.FontFamily.typoGrotesk,
    color: GlobalStyles.Color.indigo_100,
    textAlign: "center",
    left: 0,
    top: 0,
    position: "absolute",
  },
  helloWrapper: {
    bottom: 0,
  },
  groupWrapper: {
    height: 36,
  },
  layer12Icon: {
    marginTop: -7.5,
    marginLeft: -70.95,
    top: "50%",
    width: 127,
    height: 135,
  },
  maskGroup259: {
    marginLeft: -16,
    width: 21,
    height: 21,
    bottom: 0,
  },
  groupParent: {
    width: 190,
    height: 341,
  },
  logoAnimation2: {
    backgroundColor: GlobalStyles.Color.gray_300,
    flex: 1,
    width: "100%",
    paddingLeft: GlobalStyles.Padding.padding_2xl,
    paddingTop: GlobalStyles.Padding.padding_9xl,
    paddingRight: 85,
  },
});

export default LogoAnimation2;
