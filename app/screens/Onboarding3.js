import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";

import GlobalStyles from "../../GlobalStyles";

const Onboarding3 = ({navigation}) => {
  return (
    <Pressable
      style={styles.onboarding1}
      onPress={() => navigation.navigate("SignUpPersonalScreen")}
    >
      <Text
        style={styles.titleText}
      >
        The Next Gen of your Future Investments
      </Text>
      <Image
          style={styles.cardImage}
          source={require("../assets/image-cardblue.png")}
        />
      <Image
          style={styles.progressbar}
          source={require("../assets/image-progress33.png")}
        />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  onboarding1: {
    backgroundColor: GlobalStyles.Color.gray_300,
    flex: 1,
    width: "100%",
    paddingTop: GlobalStyles.Padding.padding_8xl,
  },
  titleText:{
    textAlign: 'center',
    alignItems: 'center',
    top: 0,
    fontSize: GlobalStyles.FontSize.size_10xl,
    color: GlobalStyles.Color.indigo_100,
  },
  cardImage:{
    height:"50%",
    width:"50%",
    alignItems: 'center',
    left: "25%",
    top:"10%",
  },
  progressbar:{
    top:75,
    left:"25%",
    alignItems: 'center',
    justifyContent: 'center',
    width:"50%",
    height:20,
    resizeMode: 'stretch',
  }

});

export default Onboarding3;
