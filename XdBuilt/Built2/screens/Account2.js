import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Account2 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.account2}>
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
      <Text style={[styles.hello, styles.mt14, styles.mr69]}>
        Account verification letter
      </Text>
      <Pressable
        style={[styles.groupPressable, styles.mt2]}
        onPress={() => navigation.navigate("Account")}
      >
        <Image
          style={styles.iconFeatherArrowLeft}
          resizeMode="cover"
          source={require("../assets/icon-featherarrowleft.png")}
        />
      </Pressable>
      <View style={[styles.homeIndicator, styles.mt103, styles.ml1]} />
      <View style={[styles.rectangleView5, styles.mt48]} />
      <Text style={[styles.hello1, styles.mt44, styles.ml1]}>
        <Text
          style={styles.yayYourDetails}
        >{`Yay! your details has been verified `}</Text>
        <Text style={styles.text1}>{` `}</Text>
      </Text>
      <Text style={[styles.hello2, styles.mt123]}>Resend email</Text>
      <Text
        style={[styles.pleaseCheckYourEmailAndCl, styles.mt21]}
      >{`Please check your email and click on confirmation link to continue. `}</Text>
      <Text style={[styles.weSentAConfirmationEmailT1, styles.mt21]}>
        <Text style={styles.weSentAConfirmationEmailT}>
          <Text style={styles.weSentA}>We sent a confirmation email to:</Text>
        </Text>
        <Text style={styles.blankLine1}>
          <Text style={styles.blankLine}> </Text>
        </Text>
        <Text style={styles.emailgmailcom1}>
          <Text style={styles.emailgmailcom}>email@gmail.com</Text>
        </Text>
      </Text>
      <Image
        style={[styles.iconZocialEmail, styles.mt_433]}
        resizeMode="cover"
        source={require("../assets/icon-zocialemail.png")}
      />
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
  mr69: {
    marginRight: 69,
  },
  mt2: {
    marginTop: 2,
  },
  mt103: {
    marginTop: 103,
  },
  ml1: {
    marginLeft: 1,
  },
  mt48: {
    marginTop: 48,
  },
  mt44: {
    marginTop: 44,
  },
  mt123: {
    marginTop: 123,
  },
  mt21: {
    marginTop: 21,
  },
  mt_433: {
    marginTop: -433,
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
    alignSelf: "flex-start",
  },
  homeIndicator: {
    position: "relative",
    borderRadius: 100,
    backgroundColor: "#000",
    width: 134,
    height: 5,
  },
  rectangleView5: {
    position: "relative",
    borderRadius: 15,
    backgroundColor: "#fff",
    width: 326,
    height: 543,
  },
  yayYourDetails: {
    margin: 0,
  },
  text1: {
    margin: 0,
  },
  hello1: {
    position: "relative",
    fontSize: 14,
    lineHeight: 14,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#00003d",
    textAlign: "left",
  },
  hello2: {
    position: "relative",
    fontSize: 14,
    lineHeight: 14,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#0101fd",
    textAlign: "left",
  },
  pleaseCheckYourEmailAndCl: {
    position: "relative",
    fontSize: 15,
    lineHeight: 17,
    fontFamily: "Helvetica",
    color: "#999",
    textAlign: "center",
    width: 280,
  },
  weSentA: {
    fontFamily: "Helvetica",
    color: "#999",
  },
  weSentAConfirmationEmailT: {
    margin: 0,
  },
  blankLine: {
    fontFamily: "Helvetica",
    color: "#999",
  },
  blankLine1: {
    margin: 0,
  },
  emailgmailcom: {
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#272727",
  },
  emailgmailcom1: {
    margin: 0,
  },
  weSentAConfirmationEmailT1: {
    position: "relative",
    fontSize: 15,
    lineHeight: 17,
    textAlign: "center",
    width: 280,
  },
  iconZocialEmail: {
    position: "relative",
    width: 97,
    height: 66,
    opacity: 0.42,
  },
  account2: {
    position: "relative",
    backgroundColor: "#4b4b4b",
    flex: 1,
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
  },
});

export default Account2;
