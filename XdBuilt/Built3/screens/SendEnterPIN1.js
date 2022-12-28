import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import GlobalStyles from "../GlobalStyles";

const SendEnterPIN1 = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.sendEnterPin1}
      onPress={() => navigation.navigate("FreezeCard")}
    >
      <View style={styles.sendEnterPin1Child} />
      <Text style={[styles.hello, styles.mt_617]}>Enter PIN</Text>
      <View style={[styles.helloParent, styles.mt78]}>
        <Text style={[styles.hello1, styles.helloTypo2]}>2</Text>
        <Text style={[styles.hello2, styles.helloTypo2]}>5</Text>
        <Text style={[styles.hello3, styles.helloTypo2]}>8</Text>
        <Text style={[styles.hello4, styles.helloTypo2]}>0</Text>
        <Text style={[styles.hello5, styles.helloTypo1]}>3</Text>
        <Text style={[styles.hello6, styles.helloTypo1]}>6</Text>
        <Text style={[styles.hello7, styles.helloTypo1]}>9</Text>
        <Text style={[styles.hello8, styles.helloTypo]}>1</Text>
        <Text style={[styles.hello9, styles.helloTypo]}>4</Text>
        <Text style={[styles.hello10, styles.helloTypo]}>7</Text>
        <Image
          style={styles.iconIonicIosBackspace}
          resizeMode="cover"
          source={require("../assets/icon-ioniciosbackspace.png")}
        />
      </View>
      <Image
        style={[styles.sendEnterPin1Item, styles.mt28, styles.ml1]}
        resizeMode="cover"
        source={require("../assets/group-30317.png")}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  mt_617: {
    marginTop: -617,
  },
  mt78: {
    marginTop: GlobalStyles.Margin.margin_39xl,
  },
  mt28: {
    marginTop: GlobalStyles.Margin.margin_6xl,
  },
  ml1: {
    marginLeft: GlobalStyles.Margin.margin_24xs,
  },
  helloTypo2: {
    textAlign: "center",
    lineHeight: 25,
    fontSize: GlobalStyles.FontSize.size_7xl,
    left: 114,
    position: "absolute",
    color: GlobalStyles.Color.indigo,
    fontFamily: GlobalStyles.FontFamily.helvetica,
  },
  helloTypo1: {
    left: 228,
    textAlign: "center",
    lineHeight: 25,
    fontSize: GlobalStyles.FontSize.size_7xl,
    position: "absolute",
    color: GlobalStyles.Color.indigo,
    fontFamily: GlobalStyles.FontFamily.helvetica,
  },
  helloTypo: {
    left: 0,
    textAlign: "center",
    lineHeight: 25,
    fontSize: GlobalStyles.FontSize.size_7xl,
    position: "absolute",
    color: GlobalStyles.Color.indigo,
    fontFamily: GlobalStyles.FontFamily.helvetica,
  },
  sendEnterPin1Child: {
    backgroundColor: GlobalStyles.Color.gray_300,
    width: 375,
    height: 812,
  },
  hello: {
    fontSize: GlobalStyles.FontSize.size_sm,
    textAlign: "left",
    color: GlobalStyles.Color.indigo,
    fontFamily: GlobalStyles.FontFamily.helvetica,
  },
  hello1: {
    top: 0,
  },
  hello2: {
    top: 84,
  },
  hello3: {
    top: 168,
  },
  hello4: {
    top: 252,
  },
  hello5: {
    top: 0,
  },
  hello6: {
    top: 84,
  },
  hello7: {
    top: 168,
  },
  hello8: {
    top: 0,
  },
  hello9: {
    top: 84,
  },
  hello10: {
    top: 168,
  },
  iconIonicIosBackspace: {
    right: 0,
    bottom: 9,
    width: 29,
    height: 23,
    position: "absolute",
  },
  helloParent: {
    width: 251,
    height: 285,
  },
  sendEnterPin1Item: {
    width: 100,
    height: 14,
  },
  sendEnterPin1: {
    backgroundColor: GlobalStyles.Color.gray_1100,
    flex: 1,
    width: "100%",
    alignItems: "center",
  },
});

export default SendEnterPIN1;
