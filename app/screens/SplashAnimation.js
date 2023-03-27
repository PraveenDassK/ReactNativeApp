import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable, Animated } from "react-native";
import { horizontalScale, verticalScale, moderateScale } from "../config/scaling"

import GlobalStyles from "../../GlobalStyles";


import FadeInView from "../components/fadeInview";
import Button from "../components/AppButton"
import colors from "../config/colors";

const SplashAnimation = ({navigation}) => {
  return (
    <Pressable
      style={styles.logoAnimation3}
      onPress={() => console.log("Onboarding1")}
    >
   
      <View style={{ flex: 1, justifyContent: "flex-end" }}>
      <View style={{  backgroundColor: colors.light,  borderTopLeftRadius: 20,borderTopRightRadius: 20,}}>
        <View style={{justifyContent: "center", alignItems: "center", marginVertical: 30}}>
          <Text style={{fontSize: 30}}>Welcome to Carbonyte</Text>
        </View>
        
        <View style={{paddingHorizontal: 30, paddingVertical: 50, backgroundColor: 'white',  borderTopLeftRadius: 20,
          borderTopRightRadius: 20,}}>
          <Button title="Signup" textColor="white" color="black" onPress={() => navigation.navigate("Registration")} />
          <Button title="Login" textColor="black" color="white" onPress={() => navigation.navigate("Login")} />
        </View> 
        </View> 

      </View>

      
    </Pressable>
  );
};

const styles = StyleSheet.create({
  maskGroupLayout: {
    overflow: "hidden",
    maxWidth: "100%",
    width:"100%",
    alignItems: 'center',
  },
  helloFlexBox: {
    textAlign: "center",
    position: "absolute",
  },
  maskGroup261: {
    right: horizontalScale(0),
    bottom: verticalScale(0),
    left: horizontalScale(0),
    height: verticalScale(132),
  },
  layer12Icon: {
    marginTop: verticalScale(-135.5),
    marginLeft: horizontalScale(-63.5),
    left: "50%",
    width: horizontalScale(128),
    height: verticalScale(136),
    top: "50%",
    position: "absolute",

  },
  hello: {
    textAlign: "center",
    marginleft: horizontalScale(-20),
    top: verticalScale(50),
    width: "100%",
    fontSize: GlobalStyles.FontSize.size_10xl,
    color: GlobalStyles.Color.indigo_100,
  },
  quickSecuredBanking: {
    fontSize: GlobalStyles.FontSize.size_2xl,
    fontWeight: "700",
    color: GlobalStyles.Color.black,
    width: "100%",
    top: "75%",
    textAlign: "center",
  },
  maskGroup259: {
    marginTop: verticalScale(-140.5),
    height: verticalScale(337),
    top: "50%",
    width:"100%"
  },
  maskGroup261Parent: {
    width: "100%",
    height: verticalScale(505),
  },
  logoAnimation3: {
    backgroundColor: GlobalStyles.Color.gray_300,
    flex: 1,
    width: "100%",
    height: "100%",
    paddingTop: GlobalStyles.Padding.padding_xl,
  },
});

export default SplashAnimation;