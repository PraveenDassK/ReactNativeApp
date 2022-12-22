import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Settings = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.settings}>
      <Image
        style={styles.path33370Icon}
        resizeMode="cover"
        source={require("../assets/path-33370.png")}
      />
      <Text style={[styles.hello, styles.mt_61, styles.ml30]}>Full Name</Text>
      <Text style={[styles.hello1, styles.mt1, styles.ml30]}>Standard</Text>
      <Image
        style={[styles.ellipseIcon, styles.mt24, styles.ml288]}
        resizeMode="cover"
        source={require("../assets/ellipse-3158.png")}
      />
      <View style={[styles.groupView, styles.mt58]}>
        <Text style={styles.hello2}>Log out</Text>
        <Image
          style={styles.iconOpenAccountLogout}
          resizeMode="cover"
          source={require("../assets/icon-openaccountlogout.png")}
        />
      </View>
      <Text
        style={[styles.hello3, styles.mt49, styles.ml136]}
      >{`Terms & Conditions`}</Text>
      <View style={[styles.homeIndicator, styles.mt23, styles.ml121]} />
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
            <View style={styles.rectangleView} />
            <View style={styles.rectangleView1} />
            <View style={styles.rectangleView2} />
            <View style={styles.rectangleView3} />
          </View>
        </View>
      </View>
      <Text
        style={[styles.hello4, styles.mt52, styles.ml30]}
      >{`Accounts details `}</Text>
      <View style={[styles.rectangleView4, styles.mt7, styles.ml25]} />
      <Text style={[styles.hello5, styles.mt_96, styles.ml46]}>Currency</Text>
      <Text style={[styles.hello6, styles.mt14, styles.ml46]}>Account</Text>
      <Text style={[styles.hello7, styles.mt14, styles.ml46]}>Sort Code</Text>
      <View style={[styles.groupView1, styles.mt_15, styles.ml238]}>
        <Text style={styles.britishPounds}>British Pounds</Text>
      </View>
      <View style={[styles.groupView2, styles.mt_15, styles.ml262]}>
        <Text style={styles.text1}>12345678</Text>
      </View>
      <Image
        style={[styles.maskGroup241, styles.mt_17, styles.ml210]}
        resizeMode="cover"
        source={require("../assets/mask-group-2415.png")}
      />
      <Image
        style={[styles.iconMaterialContentCopy, styles.mt_18, styles.ml241]}
        resizeMode="cover"
        source={require("../assets/icon-materialcontentcopy.png")}
      />
      <Image
        style={[styles.iconMaterialContentCopy1, styles.mt_17, styles.ml241]}
        resizeMode="cover"
        source={require("../assets/icon-materialcontentcopy.png")}
      />
      <Text style={[styles.text2, styles.mt_15, styles.ml267]}>12-34-56</Text>
      <View style={[styles.component2128, styles.mt11, styles.ml_29]}>
        <Pressable
          style={styles.history}
          onPress={() => navigation.navigate("Account3")}
        >
          <Text style={styles.account}>Account</Text>
        </Pressable>
        <Pressable
          style={styles.history1}
          onPress={() => navigation.navigate("Analytics")}
        >
          <Text style={styles.analysis}>Analysis</Text>
        </Pressable>
        <Pressable
          style={styles.history2}
          onPress={() => navigation.navigate("Carbon")}
        >
          <Text style={styles.carbon}>Carbon</Text>
        </Pressable>
        <Text style={styles.history3}>Profile</Text>
      </View>
      <Pressable
        style={[styles.groupPressable, styles.mt34, styles.ml25]}
        onPress={() => navigation.navigate("Plan")}
      >
        <View style={styles.component20856}>
          <View style={styles.groupView3}>
            <View style={styles.rectangleView5} />
            <View style={styles.maskGroup236} />
          </View>
        </View>
        <Text style={styles.hello8}>My Plan</Text>
      </Pressable>
      <Pressable
        style={[styles.groupPressable1, styles.mt13, styles.ml25]}
        onPress={() => navigation.navigate("Account")}
      >
        <View style={styles.component20857}>
          <View style={styles.groupView4}>
            <View style={styles.rectangleView6} />
            <View style={styles.maskGroup2361} />
          </View>
        </View>
        <Text style={styles.hello9}>Account</Text>
      </Pressable>
      <Pressable
        style={[styles.groupPressable2, styles.mt13, styles.ml25]}
        onPress={() => navigation.navigate("SecurityAndPrivacy")}
      >
        <View style={styles.component20858}>
          <View style={styles.groupView5}>
            <View style={styles.rectangleView7} />
            <View style={styles.maskGroup2362} />
          </View>
        </View>
        <Text style={styles.hello10}>{`Security & Privacy`}</Text>
      </Pressable>
      <Pressable
        style={[styles.groupPressable3, styles.mt13, styles.ml25]}
        onPress={() => navigation.navigate("SecurityAndPrivacy1")}
      >
        <View style={styles.component20859}>
          <View style={styles.groupView6}>
            <View style={styles.rectangleView8} />
            <View style={styles.maskGroup2363} />
          </View>
        </View>
        <Text style={styles.hello11}>About us</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  mt_61: {
    marginTop: -61,
  },
  ml30: {
    marginLeft: 30,
  },
  mt1: {
    marginTop: 1,
  },
  mt24: {
    marginTop: 24,
  },
  ml288: {
    marginLeft: 288,
  },
  mt58: {
    marginTop: 58,
  },
  mt49: {
    marginTop: 49,
  },
  ml136: {
    marginLeft: 136,
  },
  mt23: {
    marginTop: 23,
  },
  ml121: {
    marginLeft: 121,
  },
  mt_812: {
    marginTop: -812,
  },
  mt52: {
    marginTop: 52,
  },
  mt7: {
    marginTop: 7,
  },
  ml25: {
    marginLeft: 25,
  },
  mt_96: {
    marginTop: -96,
  },
  ml46: {
    marginLeft: 46,
  },
  mt14: {
    marginTop: 14,
  },
  mt_15: {
    marginTop: -15,
  },
  ml238: {
    marginLeft: 238,
  },
  ml262: {
    marginLeft: 262,
  },
  mt_17: {
    marginTop: -17,
  },
  ml210: {
    marginLeft: 210,
  },
  mt_18: {
    marginTop: -18,
  },
  ml241: {
    marginLeft: 241,
  },
  ml267: {
    marginLeft: 267,
  },
  mt11: {
    marginTop: 11,
  },
  ml_29: {
    marginLeft: -29,
  },
  mt34: {
    marginTop: 34,
  },
  mt13: {
    marginTop: 13,
  },
  path33370Icon: {
    position: "relative",
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
  hello1: {
    position: "relative",
    fontSize: 14,
    fontFamily: "Typo Grotesk",
    color: "#999",
    textAlign: "left",
  },
  ellipseIcon: {
    position: "relative",
    width: 63,
    height: 63,
  },
  hello2: {
    position: "absolute",
    top: "0%",
    left: "33.76%",
    fontSize: 14,
    lineHeight: 16,
    fontFamily: "Helvetica",
    color: "#0101fd",
    textAlign: "left",
  },
  iconOpenAccountLogout: {
    position: "absolute",
    top: 2,
    bottom: 2,
    left: 0,
    maxHeight: "100%",
    width: 14,
  },
  groupView: {
    position: "relative",
    width: 71,
    height: 16,
    alignSelf: "center",
  },
  hello3: {
    position: "relative",
    fontSize: 12,
    fontFamily: "Helvetica",
    color: "#0101fd",
    textAlign: "left",
  },
  homeIndicator: {
    position: "relative",
    borderRadius: 100,
    backgroundColor: "#000",
    width: 134,
    height: 5,
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
  rectangleView: {
    position: "absolute",
    bottom: 0,
    left: 0,
    borderRadius: 2,
    backgroundColor: "#272727",
    width: 3,
    height: 4,
  },
  rectangleView1: {
    position: "absolute",
    marginLeft: -3.5,
    bottom: 0,
    left: "50%",
    borderRadius: 2,
    backgroundColor: "#272727",
    width: 3,
    height: 6,
  },
  rectangleView2: {
    position: "absolute",
    marginLeft: 0.5,
    bottom: 0,
    left: "50%",
    borderRadius: 2,
    backgroundColor: "#272727",
    width: 3,
    height: 9,
  },
  rectangleView3: {
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
  hello4: {
    position: "relative",
    fontSize: 14,
    fontFamily: "Typo Grotesk",
    color: "#00003d",
    textAlign: "left",
  },
  rectangleView4: {
    position: "relative",
    borderRadius: 20,
    backgroundColor: "#fff",
    shadowColor: "rgba(1, 1, 253, 0.05)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 20,
    elevation: 20,
    shadowOpacity: 1,
    width: 326,
    height: 111,
  },
  hello5: {
    position: "relative",
    fontSize: 14,
    fontFamily: "Typo Grotesk",
    color: "#00003d",
    textAlign: "left",
  },
  hello6: {
    position: "relative",
    fontSize: 14,
    fontFamily: "Typo Grotesk",
    color: "#00003d",
    textAlign: "left",
  },
  hello7: {
    position: "relative",
    fontSize: 14,
    fontFamily: "Typo Grotesk",
    color: "#00003d",
    textAlign: "left",
  },
  britishPounds: {
    position: "absolute",
    marginTop: -7,
    marginLeft: -38.5,
    top: "50%",
    left: "50%",
    fontSize: 12,
    fontFamily: "Helvetica",
    color: "#00003d",
    textAlign: "right",
  },
  groupView1: {
    position: "relative",
    width: 77,
    height: 14,
  },
  text1: {
    position: "absolute",
    marginTop: -7,
    marginLeft: -26.5,
    top: "50%",
    left: "50%",
    fontSize: 12,
    fontFamily: "Helvetica",
    color: "#00003d",
    textAlign: "right",
  },
  groupView2: {
    position: "relative",
    width: 53,
    height: 14,
  },
  maskGroup241: {
    position: "relative",
    width: 17,
    height: 17,
  },
  iconMaterialContentCopy: {
    position: "relative",
    width: 14,
    height: 16,
  },
  iconMaterialContentCopy1: {
    position: "relative",
    width: 14,
    height: 16,
  },
  text2: {
    position: "relative",
    fontSize: 12,
    fontFamily: "Helvetica",
    color: "#00003d",
    textAlign: "right",
  },
  account: {
    marginTop: -8.5,
    fontSize: 16,
    letterSpacing: 1,
    fontFamily: "Helvetica",
    color: "#999",
    textAlign: "left",
    opacity: 0.3,
  },
  history: {
    position: "absolute",
    left: "0%",
    top: "50%",
  },
  analysis: {
    marginTop: -8.5,
    fontSize: 16,
    letterSpacing: 1,
    fontFamily: "Helvetica",
    color: "#999",
    textAlign: "left",
    opacity: 0.3,
  },
  history1: {
    position: "absolute",
    left: "28.67%",
    top: "50%",
  },
  carbon: {
    marginTop: -8.5,
    fontSize: 16,
    letterSpacing: 1,
    fontFamily: "Helvetica",
    color: "#999",
    textAlign: "left",
    opacity: 0.3,
  },
  history2: {
    position: "absolute",
    left: "57.68%",
    top: "50%",
  },
  history3: {
    position: "absolute",
    marginTop: -7.5,
    top: "50%",
    left: "83.28%",
    fontSize: 14,
    letterSpacing: 1,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#999",
    textAlign: "left",
  },
  component2128: {
    position: "relative",
    width: 293,
    height: 19,
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
  groupView3: {
    position: "absolute",
    marginTop: -30,
    top: "50%",
    right: 0,
    left: 0,
    height: 60,
  },
  component20856: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  hello8: {
    position: "absolute",
    top: "36.67%",
    left: "41.72%",
    fontSize: 15,
    lineHeight: 17,
    fontFamily: "Helvetica",
    color: "#fff",
    textAlign: "left",
  },
  groupPressable: {
    position: "relative",
    width: 326,
    height: 60,
  },
  rectangleView6: {
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
  maskGroup2361: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 13,
    left: 0,
  },
  groupView4: {
    position: "absolute",
    marginTop: -30,
    top: "50%",
    right: 0,
    left: 0,
    height: 60,
  },
  component20857: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  hello9: {
    position: "absolute",
    top: "36.67%",
    left: "41.72%",
    fontSize: 15,
    lineHeight: 17,
    fontFamily: "Helvetica",
    color: "#fff",
    textAlign: "left",
  },
  groupPressable1: {
    position: "relative",
    width: 326,
    height: 60,
  },
  rectangleView7: {
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
  maskGroup2362: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 13,
    left: 0,
  },
  groupView5: {
    position: "absolute",
    marginTop: -30,
    top: "50%",
    right: 0,
    left: 0,
    height: 60,
  },
  component20858: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  hello10: {
    position: "absolute",
    top: "36.67%",
    left: "31.29%",
    fontSize: 15,
    lineHeight: 17,
    fontFamily: "Helvetica",
    color: "#fff",
    textAlign: "left",
  },
  groupPressable2: {
    position: "relative",
    width: 326,
    height: 60,
  },
  rectangleView8: {
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
  maskGroup2363: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 13,
    left: 0,
  },
  groupView6: {
    position: "absolute",
    marginTop: -30,
    top: "50%",
    right: 0,
    left: 0,
    height: 60,
  },
  component20859: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  hello11: {
    position: "absolute",
    top: "33.33%",
    left: "41.1%",
    fontSize: 15,
    lineHeight: 17,
    fontFamily: "Helvetica",
    color: "#fff",
    textAlign: "left",
  },
  groupPressable3: {
    position: "relative",
    width: 326,
    height: 60,
  },
  settings: {
    position: "relative",
    backgroundColor: "#4b4b4b",
    flex: 1,
    width: "100%",
    flexDirection: "column",
    alignItems: "flex-start",
  },
});

export default Settings;
