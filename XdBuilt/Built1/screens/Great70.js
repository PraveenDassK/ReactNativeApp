import * as React from "react";
import { StyleSheet, View, Image, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Great70 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.great70}>
      <View style={[styles.rectangleView, styles.mt9]} />
      <View style={[styles.groupView, styles.mt2]}>
        <Image
          style={styles.iconFeatherArrowLeft}
          resizeMode="cover"
          source={require("../assets/icon-featherarrowleft.png")}
        />
      </View>
      <View style={[styles.homeIndicator, styles.mt36, styles.ml1]} />
      <View style={[styles.statusBarBlack, styles.mt2]}>
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
      <Image
        style={[styles.ellipseIcon, styles.mt74, styles.mr11]}
        resizeMode="cover"
        source={require("../assets/ellipse-3254.png")}
      />
      <View style={[styles.groupView3, styles.mt_128, styles.mr47]}>
        <Text style={styles.text1}>%</Text>
        <View style={styles.maskGroup290}>
          <View style={styles.groupView1}>
            <Text style={styles.text2}>1</Text>
            <Text style={styles.text3}>0</Text>
            <Text style={styles.text4}>2</Text>
            <Text style={styles.text5}>3</Text>
            <Text style={styles.text6}>4</Text>
            <Text style={styles.text7}>5</Text>
            <Text style={styles.text8}>6</Text>
            <Text style={styles.text9}>7</Text>
            <Text style={styles.text10}>8</Text>
            <Text style={styles.text11}>9</Text>
            <Text style={styles.text12}>0</Text>
            <Text style={styles.text13}>1</Text>
          </View>
        </View>
        <View style={styles.maskGroup291}>
          <View style={styles.groupView2}>
            <Text style={styles.text14}>1</Text>
            <Text style={styles.text15}>0</Text>
            <Text style={styles.text16}>2</Text>
            <Text style={styles.text17}>3</Text>
            <Text style={styles.text18}>4</Text>
            <Text style={styles.text19}>5</Text>
            <Text style={styles.text20}>6</Text>
            <Text style={styles.text21}>7</Text>
            <Text style={styles.text22}>8</Text>
            <Text style={styles.text23}>9</Text>
            <Text style={styles.text24}>0</Text>
            <Text style={styles.text25}>1</Text>
          </View>
        </View>
      </View>
      <Text style={[styles.hello, styles.mt134]}>
        We're verifying your identity
      </Text>
      <Text style={[styles.hello1, styles.mt52]}>While we're doing that</Text>
      <Text style={[styles.hello2, styles.mt8]}>
        <Text style={styles.youCanChoose}>You can choose your</Text>
        <Text style={styles.carbonyteCardAnd}>Carbonyte card and plan</Text>
      </Text>
      <Pressable
        style={[styles.groupPressable, styles.mt28, styles.ml1]}
        onPress={() => navigation.navigate("ChooseCardsStandard")}
      >
        <View style={styles.component20819}>
          <View style={styles.groupView4}>
            <View style={styles.rectangleView5} />
            <View style={styles.maskGroup236} />
          </View>
        </View>
        <Text style={styles.hello3}>Choose Card</Text>
      </Pressable>
      <Text style={[styles.hello4, styles.mt_806, styles.mr1]}>Great!</Text>
      <Text style={[styles.hello5, styles.mt11]}>You are almost done</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mt9: {
    marginTop: 9,
  },
  mt2: {
    marginTop: 2,
  },
  mt36: {
    marginTop: 36,
  },
  ml1: {
    marginLeft: 1,
  },
  mt74: {
    marginTop: 74,
  },
  mr11: {
    marginRight: 11,
  },
  mt_128: {
    marginTop: -128,
  },
  mr47: {
    marginRight: 47,
  },
  mt134: {
    marginTop: 134,
  },
  mt52: {
    marginTop: 52,
  },
  mt8: {
    marginTop: 8,
  },
  mt28: {
    marginTop: 28,
  },
  mt_806: {
    marginTop: -806,
  },
  mr1: {
    marginRight: 1,
  },
  mt11: {
    marginTop: 11,
  },
  rectangleView: {
    position: "relative",
    backgroundColor: "#f6f5f8",
    width: 375,
    height: 812,
  },
  iconFeatherArrowLeft: {
    position: "absolute",
    marginLeft: -0.5,
    bottom: 4,
    left: "50%",
    width: 17,
    height: 17,
  },
  groupView: {
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
  ellipseIcon: {
    position: "relative",
    width: 166,
    height: 166,
  },
  text1: {
    position: "absolute",
    top: "4.48%",
    left: "74.04%",
    fontSize: 53,
    verticalAlign: "super",
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#0101fd",
    textAlign: "left",
  },
  text2: {
    position: "absolute",
    top: 72,
    left: 0,
    fontSize: 53,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#0101fd",
    textAlign: "left",
  },
  text3: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 53,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#0101fd",
    textAlign: "left",
  },
  text4: {
    position: "absolute",
    top: 141,
    left: 0,
    fontSize: 53,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#0101fd",
    textAlign: "left",
  },
  text5: {
    position: "absolute",
    top: 207,
    left: 0,
    fontSize: 53,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#0101fd",
    textAlign: "left",
  },
  text6: {
    position: "absolute",
    top: 277,
    left: 0,
    fontSize: 53,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#0101fd",
    textAlign: "left",
  },
  text7: {
    position: "absolute",
    top: 344,
    left: 0,
    fontSize: 53,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#0101fd",
    textAlign: "left",
  },
  text8: {
    position: "absolute",
    top: 414,
    left: 0,
    fontSize: 53,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#0101fd",
    textAlign: "left",
  },
  text9: {
    position: "absolute",
    top: 484,
    left: 0,
    fontSize: 53,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#0101fd",
    textAlign: "left",
  },
  text10: {
    position: "absolute",
    top: 552,
    left: 0,
    fontSize: 53,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#0101fd",
    textAlign: "left",
  },
  text11: {
    position: "absolute",
    top: 621,
    left: 0,
    fontSize: 53,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#0101fd",
    textAlign: "left",
  },
  text12: {
    position: "absolute",
    top: 689,
    left: 0,
    fontSize: 53,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#0101fd",
    textAlign: "left",
  },
  text13: {
    position: "absolute",
    top: 757,
    left: 0,
    fontSize: 53,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#0101fd",
    textAlign: "left",
  },
  groupView1: {
    position: "absolute",
    top: -482,
    left: 8,
    width: 29,
    height: 816,
  },
  maskGroup290: {
    position: "absolute",
    height: "100%",
    width: "47.12%",
    top: "0%",
    right: "52.88%",
    bottom: "0%",
    left: "0%",
  },
  text14: {
    position: "absolute",
    top: 72,
    left: 0,
    fontSize: 53,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#0101fd",
    textAlign: "left",
  },
  text15: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 53,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#0101fd",
    textAlign: "left",
  },
  text16: {
    position: "absolute",
    top: 141,
    left: 0,
    fontSize: 53,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#0101fd",
    textAlign: "left",
  },
  text17: {
    position: "absolute",
    top: 207,
    left: 0,
    fontSize: 53,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#0101fd",
    textAlign: "left",
  },
  text18: {
    position: "absolute",
    top: 277,
    left: 0,
    fontSize: 53,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#0101fd",
    textAlign: "left",
  },
  text19: {
    position: "absolute",
    top: 344,
    left: 0,
    fontSize: 53,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#0101fd",
    textAlign: "left",
  },
  text20: {
    position: "absolute",
    top: 414,
    left: 0,
    fontSize: 53,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#0101fd",
    textAlign: "left",
  },
  text21: {
    position: "absolute",
    top: 484,
    left: 0,
    fontSize: 53,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#0101fd",
    textAlign: "left",
  },
  text22: {
    position: "absolute",
    top: 552,
    left: 0,
    fontSize: 53,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#0101fd",
    textAlign: "left",
  },
  text23: {
    position: "absolute",
    top: 621,
    left: 0,
    fontSize: 53,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#0101fd",
    textAlign: "left",
  },
  text24: {
    position: "absolute",
    top: 689,
    left: 0,
    fontSize: 53,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#0101fd",
    textAlign: "left",
  },
  text25: {
    position: "absolute",
    top: 757,
    left: 0,
    fontSize: 53,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#0101fd",
    textAlign: "left",
  },
  groupView2: {
    position: "absolute",
    top: -688,
    left: 8,
    width: 29,
    height: 816,
  },
  maskGroup291: {
    position: "absolute",
    height: "100%",
    width: "46.15%",
    top: "0%",
    right: "20.19%",
    bottom: "0%",
    left: "33.65%",
  },
  groupView3: {
    position: "relative",
    width: 104,
    height: 67,
  },
  hello: {
    position: "relative",
    fontSize: 18,
    lineHeight: 20,
    fontFamily: "Helvetica",
    color: "#00003d",
    textAlign: "left",
  },
  hello1: {
    position: "relative",
    fontSize: 18,
    lineHeight: 20,
    fontFamily: "Helvetica",
    color: "#999",
    textAlign: "left",
  },
  youCanChoose: {
    margin: 0,
  },
  carbonyteCardAnd: {
    margin: 0,
  },
  hello2: {
    position: "relative",
    fontSize: 26,
    lineHeight: 30,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#00003d",
    textAlign: "center",
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
  groupView4: {
    position: "absolute",
    marginTop: -30,
    top: "50%",
    right: 0,
    left: 0,
    height: 60,
  },
  component20819: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  hello3: {
    position: "absolute",
    top: "36.67%",
    left: "36.5%",
    fontSize: 15,
    lineHeight: 17,
    textTransform: "uppercase",
    fontFamily: "Helvetica",
    color: "#fff",
    textAlign: "left",
  },
  groupPressable: {
    position: "relative",
    width: 326,
    height: 60,
  },
  hello4: {
    position: "relative",
    fontSize: 50,
    lineHeight: 73,
    fontWeight: "700",
    fontFamily: "Typo Grotesk",
    color: "#00003d",
    textAlign: "left",
  },
  hello5: {
    position: "relative",
    fontSize: 14,
    fontFamily: "Helvetica",
    color: "#00003d",
    textAlign: "left",
  },
  great70: {
    position: "relative",
    backgroundColor: "#4b4b4b",
    flex: 1,
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
  },
});

export default Great70;
