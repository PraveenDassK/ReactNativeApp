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
        onPress={() => navigation.navigate("Account")}
      />
      <View style={[styles.statusBarBlack, styles.mt_811_56]}>
        <View style={[styles.rectangle, styles.timePosition]} />
        <View style={styles.statusBar}>
          <View style={[styles.time, styles.timePosition]}>
            <Text style={[styles.text, styles.textLayout]}>9:41</Text>
          </View>
          <Image
            style={styles.batteryIcon}
            resizeMode="cover"
            source={require("../assets/icon-awesomebatterythreequarters.png")}
          />
          <Image
            style={[styles.wifiIcon, styles.networkPosition1]}
            resizeMode="cover"
            source={require("../assets/icon-awesomewifi.png")}
          />
          <View style={[styles.network, styles.networkPosition1]}>
            <View style={[styles.networkChild, styles.networkChildLayout]} />
            <View style={[styles.networkItem, styles.networkPosition]} />
            <View style={[styles.networkInner, styles.networkPosition]} />
            <View style={[styles.rectangleView, styles.networkChildLayout]} />
          </View>
        </View>
      </View>
      <Text
        style={[
          styles.hello,
          styles.mt31_439999999999998,
          styles.helloTypo,
          styles.textLayout,
        ]}
      >
        <Text style={styles.yourBankAccount}>Your bank account is</Text>
        <Text style={styles.yourBankAccount}>successfully linked to</Text>
        <Text style={styles.yourBankAccount}>Carboynyte</Text>
      </Text>
      <Image
        style={[styles.iconAwesomeCheckCircle, styles.mt255_44]}
        resizeMode="cover"
        source={require("../assets/icon-awesomecheckcircle.png")}
      />
      <View
        style={[styles.homeIndicator, styles.mt17_439999999999998, styles.ml1]}
      />
      <Text
        style={[styles.hello1, styles.mt180_44, styles.ml1, styles.helloTypo]}
      >
        Tap anywhere to continue
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mt_811_56: {
    marginTop: GlobalStyles.Margin.margin_89xs,
  },
  mt31_439999999999998: {
    marginTop: 31.439999999999998,
  },
  mt255_44: {
    marginTop: 255.44,
  },
  mt17_439999999999998: {
    marginTop: 17.439999999999998,
  },
  ml1: {
    marginLeft: GlobalStyles.Margin.margin_32xs,
  },
  mt180_44: {
    marginTop: 180.44,
  },
  timePosition: {
    bottom: 0,
    left: 0,
    top: 0,
    position: "absolute",
  },
  textLayout: {
    lineHeight: 24,
    fontSize: GlobalStyles.FontSize.size_4xl,
  },
  networkPosition1: {
    width: 17,
    marginTop: -3,
    top: "50%",
    position: "absolute",
  },
  networkChildLayout: {
    width: 3,
    backgroundColor: GlobalStyles.Color.gray_1400,
    borderRadius: GlobalStyles.Border.br_7xs,
    bottom: 0,
    position: "absolute",
  },
  networkPosition: {
    left: "50%",
    width: 3,
    backgroundColor: GlobalStyles.Color.gray_1400,
    borderRadius: GlobalStyles.Border.br_7xs,
    bottom: 0,
    position: "absolute",
  },
  helloTypo: {
    textAlign: "center",
    fontFamily: GlobalStyles.FontFamily.helvetica,
  },
  verifyCode1Child: {
    backgroundColor: GlobalStyles.Color.gray_300,
    height: 812,
    width: 375,
  },
  rectangle: {
    shadowColor: "rgba(0, 0, 0, 0.05)",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 6,
    elevation: 6,
    shadowOpacity: 1,
    left: 0,
    right: 0,
    backgroundColor: GlobalStyles.Color.white,
  },
  text: {
    letterSpacing: 0,
    fontWeight: "500",
    fontFamily: GlobalStyles.FontFamily.roboto,
    color: GlobalStyles.Color.gray_1900,
    textAlign: "left",
    left: 0,
    top: 0,
    position: "absolute",
    lineHeight: 24,
    fontSize: GlobalStyles.FontSize.size_4xl,
  },
  time: {
    width: 40,
    left: 0,
  },
  batteryIcon: {
    width: 22,
    height: 11,
    marginTop: -3,
    top: "50%",
    right: 0,
    position: "absolute",
  },
  wifiIcon: {
    right: 37,
    height: 12,
  },
  networkChild: {
    height: 4,
    left: 0,
  },
  networkItem: {
    marginLeft: -3.5,
    height: 6,
  },
  networkInner: {
    marginLeft: 0.5,
    height: 9,
  },
  rectangleView: {
    right: 0,
    top: 0,
  },
  network: {
    right: 68,
    height: 11,
  },
  statusBar: {
    marginTop: -15,
    right: 16,
    left: 15,
    height: 26,
    top: "50%",
    position: "absolute",
  },
  statusBarBlack: {
    height: 44,
    width: 375,
  },
  yourBankAccount: {
    margin: GlobalStyles.Margin.margin_33xs,
  },
  hello: {
    fontWeight: "700",
    color: GlobalStyles.Color.indigo,
  },
  iconAwesomeCheckCircle: {
    width: 187,
    height: 187,
  },
  homeIndicator: {
    borderRadius: GlobalStyles.Border.br_8xl,
    backgroundColor: GlobalStyles.Color.black,
    width: 134,
    height: 5,
  },
  hello1: {
    fontSize: GlobalStyles.FontSize.size_xs,
    color: GlobalStyles.Color.gray_800,
  },
  verifyCode1: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    backgroundColor: GlobalStyles.Color.white,
  },
});

export default VerifyCode1;
