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
          <Text style={styles.yourFaceId}>Your face ID, pin and</Text>
          <Text style={styles.yourFaceId}>biometric authentication</Text>
          <Text style={styles.yourFaceId}>has been setup successfully</Text>
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
    top: 214,
    left: 56,
    fontSize: 38,
    fontWeight: "700",
    color: GlobalStyles.Color.gray_1300,
  },
  yourFaceId: {
    margin: GlobalStyles.Margin.margin_8xs,
  },
  hello1: {
    top: 276,
    left: 0,
    fontSize: GlobalStyles.FontSize.size_2xl,
    lineHeight: 25,
    color: GlobalStyles.Color.indigo_100,
  },
  groupChild: {
    width:"60%",
    height:"43%",
    left:50,
  },
  helloParent: {
    width: "100%",
    height: 344,
  },
  success: {
    backgroundColor: GlobalStyles.Color.white,
    flex: 1,
    width: "100%",
    paddingLeft: 75,
    paddingTop: 200,
    paddingRight: 75,
  },
});

export default Success;
