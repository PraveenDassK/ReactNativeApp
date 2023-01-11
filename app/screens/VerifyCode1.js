import * as React from "react";
import { Text, StyleSheet, Image, View } from "react-native";
import GlobalStyles from "../../GlobalStyles";

const VerifyCode1 = () => {
  return (
    <View style={styles.verifyCode1}>
      <View style={styles.helloParent}>
        <Text style={[styles.hello, styles.helloTypo]}>
          <Text style={styles.yourBankAccount}>Your bank account is{"\n"}</Text>
          <Text style={styles.yourBankAccount}>successfully linked to{"\n"}</Text>
          <Text style={styles.yourBankAccount}>Carboynyte</Text>
        </Text>
        <Image
          style={[styles.iconAwesomeCheckCircle, styles.hello1Position]}
          resizeMode="cover"
          source={require("../assets/icon-awesomecheckcircle.png")}
        />
        <Text style={[styles.hello1, styles.hello1Position, styles.helloTypo]}>
          Tap anywhere to continue
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  helloTypo: {
    textAlign: "center",
  },
  hello1Position: {
    top: "50%",
    position: "absolute",
  },
  yourBankAccount: {
    margin: GlobalStyles.Margin.margin_8xs,
  },
  hello: {
    top: 221,
    left: 0,
    fontSize: GlobalStyles.FontSize.size_4xl,
    lineHeight: 24,
    fontWeight: "700",
    color: GlobalStyles.Color.indigo_100,
    position: "absolute",
    textAlign: "center",
  },
  iconAwesomeCheckCircle: {
    marginTop: -241.28,
    marginLeft: -93.56,
    left: "50%",
    width: 187,
    height: 187,
  },
  hello1: {
    marginTop: 229.28,
    left: 37,
    fontSize: GlobalStyles.FontSize.size_xs,
    color: GlobalStyles.Color.gray_700,
  },
  helloParent: {
    width: 208,
    height: 483,
  },
  verifyCode1: {
    backgroundColor: GlobalStyles.Color.gray_100,
    flex: 1,
    width: "100%",
    paddingLeft: GlobalStyles.Padding.padding_xl,
    paddingTop: 249,
    paddingRight: GlobalStyles.Padding.padding_xl,
  },
});

export default VerifyCode1;
