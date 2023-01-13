import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";

import GlobalStyles from "../../GlobalStyles";

const LogoAnimation3 = ({navigation}) => {
  return (
    <Pressable
      style={styles.logoAnimation3}
      onPress={() => navigation.navigate("Onboarding1")}
    >
      <View style={styles.maskGroup261Parent}>

        <Image
          style={styles.layer12Icon}
          resizeMode="cover"
          source={require("../assets/logo-carbonyte.png")}
        />
        <Text style={[styles.hello, styles.helloFlexBox]}>Welcome to</Text>
        <Text
          style={[styles.quickSecuredBanking, styles.helloFlexBox]}
        >{`Quick & Secured Banking`}</Text>
        <Image
          style={[styles.maskGroup259, styles.maskGroupLayout]}
          resizeMode="cover"
          source={require("../assets/image-carbonytetext.png")}
        />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  maskGroupLayout: {
    width:"100%",
    alignItems: 'center',
  },
  helloFlexBox: {
    textAlign: "center",
  },
  maskGroup261: {
    height: 132,
  },
  layer12Icon: {
    marginTop: -165.5,
    marginLeft: -63.5,
    left: "50%",
    width: 128,
    height: 136,
    top: "50%",
    position: "absolute",
    
  },
  hello: {

    textAlign: "center",
    fontSize: GlobalStyles.FontSize.size_10xl,
    color: GlobalStyles.Color.indigo_100,
  },
  quickSecuredBanking: {
    fontSize: GlobalStyles.FontSize.size_2xl,
    color: GlobalStyles.Color.blue_100,
    width: "100%",
    top: "75%",
    textAlign: "center",
  },
  maskGroup259: {
    top: "30%",
    height: "30%",
    width:"80%"
  },
  maskGroup261Parent: {
    width: "100%",
    height: 605,
  },
  logoAnimation3: {
    backgroundColor: GlobalStyles.Color.gray_300,
    flex: 1,
    width: "100%",
    paddingTop: GlobalStyles.Padding.padding_xl,
  },
});

export default LogoAnimation3;
