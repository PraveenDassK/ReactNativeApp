import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";

import GlobalStyles from "../../GlobalStyles";

const SendEnterPIN1 = () => {
  

  return (
    
    <Pressable
      style={styles.sendEnterPin1}
      onPress={() => navigation.navigate("FreezeCard")}
    >
      <View style={styles.sendEnterPin1Child} />
      
      <View style={[styles.helloParent, styles.mt82]}>
      <Text style={[styles.hello, styles.mt_615]}>Enter PIN</Text>
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
          source={require("../assets/icon-caebonyteiosbackspace.png")}
        />
      </View>
      <Image
        style={[styles.sendEnterPin1Item, styles.mt28, styles.ml1]}
        resizeMode="cover"
        source={require("../assets/group-fullpin.png")}
      />
    </Pressable>
   
  );
};

const styles = StyleSheet.create({
  mt_615: {
    marginTop: -105,
    marginLeft: 95,
  },
  mt82: {
    marginTop: -582,
  },
  mt28: {
    marginTop: -350,
  },
  ml1: {
    marginLeft: GlobalStyles.Margin.margin_7xs,
  },
  helloTypo2: {
    textAlign: "center",
    lineHeight: 25,
    fontSize: GlobalStyles.FontSize.size_9xl,
    left: 114,
    position: "absolute",
    color: GlobalStyles.Color.indigo_100,
    // fontFamily: GlobalStyles.FontFamily.helvetica,
  },
  helloTypo1: {
    left: 228,
    textAlign: "center",
    lineHeight: 25,
    fontSize: GlobalStyles.FontSize.size_9xl,
    position: "absolute",
    color: GlobalStyles.Color.indigo_100,
    // fontFamily: GlobalStyles.FontFamily.helvetica,
  },
  helloTypo: {
    left: 0,
    textAlign: "center",
    lineHeight: 25,
    fontSize: GlobalStyles.FontSize.size_9xl,
    position: "absolute",
    color: GlobalStyles.Color.indigo_100,
    // fontFamily: GlobalStyles.FontFamily.helvetica,
  },
  sendEnterPin1Child: {
    backgroundColor: GlobalStyles.Color.gray_100,
    width: 375,
    height: 812,
  },
  hello: {
    fontSize: GlobalStyles.FontSize.size_base,
    textAlign: "left",
    color: GlobalStyles.Color.indigo_100,
    // fontFamily: GlobalStyles.FontFamily.helvetica,
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
    bottom: 10,
    width: 29,
    height: 23,
    position: "absolute",
  },
  helloParent: {
    width: 251,
    height: 282,
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
