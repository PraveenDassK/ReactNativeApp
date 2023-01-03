import * as React from "react";
import { Text, StyleSheet, Image, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import GlobalStyles from "../GlobalStyles";

const Success = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.success}
      onPress={() => navigation.navigate("PersonalOrBusiness")}
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
          source={require("../assets/group-117.png")}
        />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  helloTypo: {
    textAlign: "center",
    fontFamily: GlobalStyles.FontFamily.helvetica,
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
    top: 0,
    right: 19,
    left: 19,
    maxWidth: "100%",
    overflow: "hidden",
    height: 188,
    position: "absolute",
  },
  helloParent: {
    width: 226,
    height: 344,
  },
  success: {
    backgroundColor: GlobalStyles.Color.white,
    flex: 1,
    width: "100%",
    paddingLeft: 75,
    paddingTop: 252,
    paddingRight: 74,
  },
});

export default Success;
