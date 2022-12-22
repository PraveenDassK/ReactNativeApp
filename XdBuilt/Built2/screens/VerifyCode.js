import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const VerifyCode = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.verifyCode}>
      <View style={styles.rectangleView} />
      <Text style={[styles.hello, styles.mt10, styles.ml27]}>
        Verify your identity
      </Text>
      <View style={[styles.statusBarBlack, styles.mt_812]}>
        <View style={styles.rectangle} />
        <View style={styles.statusBar}>
          <View style={styles.time}>
            <Text style={styles.text}>9:41</Text>
          </View>
          <Image
            style={styles.batteryIcon}
            resizeMode="cover"
            source={require("../assets/battery.png")}
          />
          <Image
            style={styles.wifiIcon}
            resizeMode="cover"
            source={require("../assets/wifi.png")}
          />
          <View style={styles.network}>
            <View style={styles.rectangleView1} />
            <View style={styles.rectangleView2} />
            <View style={styles.rectangleView3} />
            <View style={styles.rectangleView4} />
          </View>
        </View>
      </View>
      <Pressable
        style={[styles.groupPressable, styles.mt2]}
        onPress={() => navigation.navigate("VerifyYourIdentity")}
      >
        <Image
          style={styles.iconFeatherArrowLeft}
          resizeMode="cover"
          source={require("../assets/icon-featherarrowleft.png")}
        />
      </Pressable>
      <Text style={[styles.hello1, styles.mt14, styles.ml28]}>
        Enter the verification code sent to +44 123....
      </Text>
      <Pressable
        style={[styles.groupPressable1, styles.mt87, styles.ml25]}
        onPress={() => navigation.navigate("VerifyCode1")}
      >
        <View style={styles.component208121}>
          <View style={styles.groupView}>
            <View style={styles.rectangleView5} />
            <View style={styles.maskGroup236} />
          </View>
        </View>
        <Text style={styles.hello2}>Verify</Text>
      </Pressable>
      <View style={[styles.homeIndicator, styles.mt339, styles.ml121]} />
      <View style={[styles.rectangleView6, styles.mt75, styles.ml31]} />
      <View style={[styles.rectangleView7, styles.mt_42, styles.ml85]} />
      <View style={[styles.rectangleView8, styles.mt_42, styles.ml140]} />
      <View style={[styles.rectangleView9, styles.mt_42, styles.ml249]} />
      <View style={[styles.rectangleView10, styles.mt_42, styles.ml194]} />
      <View style={[styles.rectangleView11, styles.mt_42, styles.ml303]} />
      <Text style={[styles.text1, styles.mt_35, styles.ml44]}>1</Text>
      <Text style={[styles.resendCodeIn0010, styles.mt19, styles.ml31]}>
        Resend Code in 00:10
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mt10: {
    marginTop: 10,
  },
  ml27: {
    marginLeft: 27,
  },
  mt_812: {
    marginTop: -812,
  },
  mt2: {
    marginTop: 2,
  },
  mt14: {
    marginTop: 14,
  },
  ml28: {
    marginLeft: 28,
  },
  mt87: {
    marginTop: 87,
  },
  ml25: {
    marginLeft: 25,
  },
  mt339: {
    marginTop: 339,
  },
  ml121: {
    marginLeft: 121,
  },
  mt75: {
    marginTop: 75,
  },
  ml31: {
    marginLeft: 31,
  },
  mt_42: {
    marginTop: -42,
  },
  ml85: {
    marginLeft: 85,
  },
  ml140: {
    marginLeft: 140,
  },
  ml249: {
    marginLeft: 249,
  },
  ml194: {
    marginLeft: 194,
  },
  ml303: {
    marginLeft: 303,
  },
  mt_35: {
    marginTop: -35,
  },
  ml44: {
    marginLeft: 44,
  },
  mt19: {
    marginTop: 19,
  },
  rectangleView: {
    position: "relative",
    backgroundColor: "#f6f5f8",
    width: 375,
    height: 812,
  },
  hello: {
    position: "relative",
    fontSize: 26,
    fontWeight: "700",
    fontFamily: "Typo Grotesk",
    color: "#00003d",
    textAlign: "left",
  },
  rectangle: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: "#fff",
    shadowColor: "rgba(0, 0, 0, 0.05)",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 6,
    elevation: 6,
    shadowOpacity: 1,
  },
  text: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 20,
    letterSpacing: 0,
    lineHeight: 24,
    fontWeight: "500",
    fontFamily: "Roboto",
    color: "rgba(0, 0, 0, 0.87)",
    textAlign: "left",
  },
  time: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    width: 40,
  },
  batteryIcon: {
    position: "absolute",
    marginTop: -3,
    top: "50%",
    right: 0,
    width: 22,
    height: 11,
  },
  wifiIcon: {
    position: "absolute",
    marginTop: -3,
    top: "50%",
    right: 37,
    width: 17,
    height: 12,
  },
  rectangleView1: {
    position: "absolute",
    bottom: 0,
    left: 0,
    borderRadius: 2,
    backgroundColor: "#272727",
    width: 3,
    height: 4,
  },
  rectangleView2: {
    position: "absolute",
    marginLeft: -3.5,
    bottom: 0,
    left: "50%",
    borderRadius: 2,
    backgroundColor: "#272727",
    width: 3,
    height: 6,
  },
  rectangleView3: {
    position: "absolute",
    marginLeft: 0.5,
    bottom: 0,
    left: "50%",
    borderRadius: 2,
    backgroundColor: "#272727",
    width: 3,
    height: 9,
  },
  rectangleView4: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    borderRadius: 2,
    backgroundColor: "#272727",
    width: 3,
  },
  network: {
    position: "absolute",
    marginTop: -3,
    top: "50%",
    right: 68,
    width: 17,
    height: 11,
  },
  statusBar: {
    position: "absolute",
    marginTop: -15,
    top: "50%",
    right: 16,
    left: 15,
    height: 26,
  },
  statusBarBlack: {
    position: "relative",
    width: 375,
    height: 44,
  },
  iconFeatherArrowLeft: {
    position: "absolute",
    marginLeft: -0.5,
    bottom: 4,
    left: "50%",
    width: 17,
    height: 17,
  },
  groupPressable: {
    position: "relative",
    backgroundColor: "#f6f5f8",
    width: 55,
    height: 45,
  },
  hello1: {
    position: "relative",
    fontSize: 14,
    fontFamily: "Helvetica",
    color: "#999",
    textAlign: "left",
  },
  rectangleView5: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: 15,
    backgroundColor: "#0101fd",
    shadowColor: "rgba(1, 1, 253, 0.1)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 20,
    elevation: 20,
    shadowOpacity: 1,
  },
  maskGroup236: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 13,
    left: 0,
  },
  groupView: {
    position: "absolute",
    marginTop: -30,
    top: "50%",
    right: 0,
    left: 0,
    height: 60,
  },
  component208121: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  hello2: {
    position: "absolute",
    top: "36.67%",
    left: "41.72%",
    fontSize: 15,
    lineHeight: 17,
    textTransform: "uppercase",
    fontFamily: "Helvetica",
    color: "#fff",
    textAlign: "left",
  },
  groupPressable1: {
    position: "relative",
    width: 326,
    height: 60,
  },
  homeIndicator: {
    position: "relative",
    borderRadius: 100,
    backgroundColor: "#000",
    width: 134,
    height: 5,
  },
  rectangleView6: {
    position: "relative",
    borderRadius: 10,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "#0101fd",
    borderWidth: 1,
    width: 42,
    height: 42,
  },
  rectangleView7: {
    position: "relative",
    borderRadius: 10,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "#ff4b4b",
    borderWidth: 1,
    width: 42,
    height: 42,
  },
  rectangleView8: {
    position: "relative",
    borderRadius: 10,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "#e8e8e8",
    borderWidth: 1,
    width: 42,
    height: 42,
  },
  rectangleView9: {
    position: "relative",
    borderRadius: 10,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "#e8e8e8",
    borderWidth: 1,
    width: 42,
    height: 42,
  },
  rectangleView10: {
    position: "relative",
    borderRadius: 10,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "#e8e8e8",
    borderWidth: 1,
    width: 42,
    height: 42,
  },
  rectangleView11: {
    position: "relative",
    borderRadius: 10,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "#e8e8e8",
    borderWidth: 1,
    width: 42,
    height: 42,
  },
  text1: {
    position: "relative",
    fontSize: 27,
    fontFamily: "Helvetica",
    color: "#0101fd",
    textAlign: "left",
  },
  resendCodeIn0010: {
    position: "relative",
    fontSize: 14,
    fontFamily: "Helvetica",
    color: "#999",
    textAlign: "left",
  },
  verifyCode: {
    position: "relative",
    backgroundColor: "#4b4b4b",
    flex: 1,
    width: "100%",
    flexDirection: "column",
    alignItems: "flex-start",
  },
});

export default VerifyCode;
