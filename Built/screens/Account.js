import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Account = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.account}>
      <View style={styles.rectangleView} />
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
      <Text style={[styles.hello, styles.mt14, styles.ml30]}>Full Name</Text>
      <Text style={[styles.hello1, styles.mt_22, styles.ml290]}>£0.00</Text>
      <Text style={[styles.hello2, styles.mt4, styles.ml30]}>Standard</Text>
      <Text style={[styles.hello3, styles.mt36, styles.ml27]}>Manage</Text>
      <View style={[styles.groupView1, styles.mt18]}>
        <View style={styles.rectangleView5} />
        <View style={styles.lineView} />
        <View style={styles.lineView1} />
        <Pressable
          style={styles.groupPressable}
          onPress={() => navigation.navigate("Account1")}
        >
          <Text style={styles.statements}>Statements</Text>
          <Image
            style={styles.iconIonicIosArrowForward}
            resizeMode="cover"
            source={require("../assets/icon-ioniciosarrowforward5.png")}
          />
        </Pressable>
        <View style={styles.groupView}>
          <Pressable
            style={styles.limits1}
            onPress={() => navigation.navigate("SpendingLimit3")}
          >
            <Text style={styles.limits}>Limits</Text>
          </Pressable>
          <Pressable
            style={styles.iconIonicIosArrowForward1}
            onPress={() => navigation.navigate("SpendingLimit3")}
          >
            <Image
              style={styles.icon}
              resizeMode="cover"
              source={require("../assets/icon-ioniciosarrowforward5.png")}
            />
          </Pressable>
        </View>
        <Pressable
          style={styles.groupPressable1}
          onPress={() => navigation.navigate("Account2")}
        >
          <Text style={styles.accountVerificationLetter}>
            Account verification letter
          </Text>
          <Image
            style={styles.iconIonicIosArrowForward2}
            resizeMode="cover"
            source={require("../assets/icon-ioniciosarrowforward5.png")}
          />
        </Pressable>
      </View>
      <Image
        style={[styles.groupIcon, styles.mt105]}
        resizeMode="cover"
        source={require("../assets/group-31123.png")}
      />
      <Pressable
        style={[styles.groupPressable2, styles.mt2]}
        onPress={() => navigation.navigate("Settings")}
      >
        <Image
          style={styles.iconFeatherArrowLeft}
          resizeMode="cover"
          source={require("../assets/icon-featherarrowleft.png")}
        />
      </Pressable>
      <View style={[styles.homeIndicator, styles.mt316, styles.ml121]} />
    </View>
  );
};

const styles = StyleSheet.create({
  mt_812: {
    marginTop: -812,
  },
  mt14: {
    marginTop: 14,
  },
  ml30: {
    marginLeft: 30,
  },
  mt_22: {
    marginTop: -22,
  },
  ml290: {
    marginLeft: 290,
  },
  mt4: {
    marginTop: 4,
  },
  mt36: {
    marginTop: 36,
  },
  ml27: {
    marginLeft: 27,
  },
  mt18: {
    marginTop: 18,
  },
  mt105: {
    marginTop: 105,
  },
  mt2: {
    marginTop: 2,
  },
  mt316: {
    marginTop: 316,
  },
  ml121: {
    marginLeft: 121,
  },
  rectangleView: {
    position: "relative",
    backgroundColor: "#f6f5f8",
    width: 375,
    height: 812,
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
  hello: {
    position: "relative",
    fontSize: 20,
    fontWeight: "700",
    fontFamily: "Typo Grotesk",
    color: "#00003d",
    textAlign: "left",
  },
  hello1: {
    position: "relative",
    fontSize: 20,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#0101fd",
    textAlign: "left",
  },
  hello2: {
    position: "relative",
    fontSize: 14,
    fontFamily: "Typo Grotesk",
    color: "#999",
    textAlign: "left",
  },
  hello3: {
    position: "relative",
    fontSize: 12,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#888",
    textAlign: "left",
  },
  rectangleView5: {
    position: "absolute",
    marginTop: -77.5,
    top: "50%",
    right: 1,
    left: 0,
    borderRadius: 21,
    backgroundColor: "#fff",
    height: 155,
  },
  lineView: {
    position: "absolute",
    marginTop: -29,
    top: "50%",
    right: 0,
    left: 0,
    borderStyle: "solid",
    borderColor: "#f6f5f8",
    borderTopWidth: 1,
    height: 2,
  },
  lineView1: {
    position: "absolute",
    marginTop: 24,
    top: "50%",
    right: 0,
    left: 0,
    borderStyle: "solid",
    borderColor: "#f6f5f8",
    borderTopWidth: 1,
    height: 2,
  },
  statements: {
    position: "absolute",
    marginTop: -8,
    top: "50%",
    left: 0,
    fontSize: 14,
    lineHeight: 14,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#272727",
    textAlign: "left",
    width: 257,
  },
  iconIonicIosArrowForward: {
    position: "absolute",
    top: 2,
    right: 0,
    bottom: 2,
    maxHeight: "100%",
    width: 6,
  },
  groupPressable: {
    position: "absolute",
    top: 17,
    right: 23,
    left: 23,
    height: 16,
  },
  limits: {
    marginTop: -8,
    fontSize: 14,
    lineHeight: 14,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#272727",
    textAlign: "left",
    width: 257,
  },
  limits1: {
    position: "absolute",
    left: 0,
    top: "50%",
  },
  icon: {
    maxHeight: "100%",
    width: "100%",
  },
  iconIonicIosArrowForward1: {
    position: "absolute",
    top: 2,
    right: 0,
    bottom: 2,
    width: 6,
  },
  groupView: {
    position: "absolute",
    marginTop: -9.5,
    top: "50%",
    right: 23,
    left: 23,
    height: 16,
  },
  accountVerificationLetter: {
    position: "absolute",
    marginTop: -8,
    top: "50%",
    left: 0,
    fontSize: 14,
    lineHeight: 14,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#272727",
    textAlign: "left",
    width: 257,
  },
  iconIonicIosArrowForward2: {
    position: "absolute",
    right: 0,
    bottom: 0,
    width: 6,
    height: 11,
  },
  groupPressable1: {
    position: "absolute",
    right: 23,
    bottom: 20,
    left: 23,
    height: 16,
  },
  groupView1: {
    position: "relative",
    width: 327,
    height: 155,
    alignSelf: "center",
  },
  groupIcon: {
    position: "relative",
    width: 326,
    height: 1,
    alignSelf: "center",
  },
  iconFeatherArrowLeft: {
    position: "absolute",
    marginLeft: -0.5,
    bottom: 4,
    left: "50%",
    width: 17,
    height: 17,
  },
  groupPressable2: {
    position: "relative",
    backgroundColor: "#f6f5f8",
    width: 55,
    height: 45,
  },
  homeIndicator: {
    position: "relative",
    borderRadius: 100,
    backgroundColor: "#000",
    width: 134,
    height: 5,
  },
  account: {
    position: "relative",
    backgroundColor: "#4b4b4b",
    flex: 1,
    width: "100%",
    flexDirection: "column",
    alignItems: "flex-start",
  },
});

export default Account;
