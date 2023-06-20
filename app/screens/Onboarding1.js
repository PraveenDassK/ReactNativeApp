import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable, SafeAreaView } from "react-native";
import GlobalStyles from "../../GlobalStyles";
import { horizontalScale, verticalScale, moderateScale } from "../config/scaling"


const Onboarding1 = ({navigation}) => {
  return (
  <SafeAreaView style={styles.container}>
    <Pressable style={styles.container}
      onPress={() => navigation.navigate("Onboarding2")}
    >
      <Text
        style={styles.text}
      >
        Manage your Finances with your pocket
      </Text>
      <Image
            style = {styles.image}
          source={require("../assets/login/LoginAnimal7.png")}
        />
      <Image
            style = {styles.ProgressBar}
          source={require("../assets/image-progress13.png")}
        />
    </Pressable>
     </SafeAreaView>
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



export default Onboarding1;