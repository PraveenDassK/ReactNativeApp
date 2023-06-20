import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";

import GlobalStyles from "../../GlobalStyles";

const Onboarding2 = ({navigation}) => {
  return (
    <Pressable
      style={styles.container}
      onPress={() => navigation.navigate("Onboarding3")}
    >
      <Text
        style={styles.text}
      >
        Money Exchange Simple, Safe and Secure
      </Text>
      <Image
          style={styles.image}
          source={require("../assets/login/LoginAnimal8.png")}
        />
      <Image
          style={styles.ProgressBar}
          source={require("../assets/image-progress23.png")}
        />
    </Pressable>
  );
};

const styles = StyleSheet.create({
container: {
    flex: 1,
}, text: {
    fontSize: 25,
    fontWeight: '500',
    textAlign: 'center',
    top: "10%",
    padding: "10%"
}, image: {
    height: "40%",
    top: "15%",
    alignSelf: 'center',
    aspectRatio: 53.98/85.60,
    borderRadius: 5,
}, ProgressBar: {
top: "32.5%",
alignSelf: 'center',
height: "1%",
resizeMode: 'contain',
}})

export default Onboarding2;