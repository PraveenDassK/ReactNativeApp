import * as React from "react";
import { StyleSheet, View, Pressable, Text, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import GlobalStyles from "../GlobalStyles";

const VerifyCode1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.verifyCode1}>
      <Pressable
        style={styles.verifyCode1Child}
        onPress={() => navigation.navigate("Account3")}
      />
      <Text style={[styles.hello, styles.mt31, styles.helloTypo]}>
        <Text style={styles.yourBankAccount}>Your bank account is</Text>
        <Text style={styles.yourBankAccount}>successfully linked to</Text>
        <Text style={styles.yourBankAccount}>Carboynyte</Text>
      </Text>
      <Image
        style={[styles.iconAwesomeCheckCircle, styles.mt_513]}
        resizeMode="cover"
        source={require("../assets/icon-awesomecheckcircle.png")}
      />
      <Text style={[styles.hello1, styles.mt180, styles.ml1, styles.helloTypo]}>
        Tap anywhere to continue
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mt31: {
    marginTop: GlobalStyles.Margin.margin_9xl,
  },
  mt_513: {
    marginTop: -513,
  },
  mt180: {
    marginTop: 180,
  },
  ml1: {
    marginLeft: GlobalStyles.Margin.margin_24xs,
  },
  helloTypo: {
    textAlign: "center",
    fontFamily: GlobalStyles.FontFamily.helvetica,
  },
  verifyCode1Child: {
    backgroundColor: GlobalStyles.Color.gray_300,
    width: 375,
    height: 812,
  },
  yourBankAccount: {
    margin: GlobalStyles.Margin.margin_25xs,
  },
  hello: {
    fontSize: GlobalStyles.FontSize.size_2xl,
    lineHeight: 24,
    fontWeight: "700",
    color: GlobalStyles.Color.indigo,
  },
  iconAwesomeCheckCircle: {
    width: 187,
    height: 187,
  },
  hello1: {
    fontSize: GlobalStyles.FontSize.size_2xs,
    color: GlobalStyles.Color.gray_800,
  },
  verifyCode1: {
    backgroundColor: GlobalStyles.Color.white,
    flex: 1,
    width: "100%",
    alignItems: "center",
  },
});

export default VerifyCode1;
