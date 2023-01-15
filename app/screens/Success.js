import * as React from "react";
import { Text, StyleSheet, Image, View, Pressable } from "react-native";
//import { useNavigation } from "@react-navigation/native";
import GlobalStyles from "../../GlobalStyles";

const Success = ({navigation}) => {

  return (
    <Pressable
      style={styles.success}
      onPress={() => navigation.navigate("AccountMain")}
    >
      <View style={styles.helloParent}>
        <Text style={[styles.hello, styles.helloTypo]}>All set</Text>
        <Text style={[styles.hello1, styles.helloTypo]}>
          <Text style={styles.yourFaceId}>Your face ID, pin and biometric authentication has been setup successfully</Text>
        </Text>
        <Image
          style={styles.groupChild}
          resizeMode="cover"
          source={require("../assets/icon-bluecheck.png")}
        />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  helloTypo: {
    textAlign: "center",
    position: "absolute",
  },
  hello: {
    top: "50%",
    fontSize: 38,
    fontWeight: "700",
    width:"100%",
    color: GlobalStyles.Color.gray_1300,
  },
  yourFaceId: {
  },
  hello1: {
    top: "70%",
    left: 0,
    textAlign:"center",
    fontSize: GlobalStyles.FontSize.size_2xl,
    lineHeight: 25,
    color: GlobalStyles.Color.indigo_100,
  },
  groupChild: {
    width:"50%",
    height:"50%",
    top:"0%",
    left:"25%",
    resizeMode:"contain"
  },
  helloParent: {
    width: "100%",
    height: "100%",
  },
  success: {
    backgroundColor: GlobalStyles.Color.gray_400,
    flex: 1,
    width: "100%",
  },
});

export default Success;
