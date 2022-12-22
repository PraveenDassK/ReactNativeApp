import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const SetLimit = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.setLimit}>
      <View style={styles.rectangleView} />
      <Text style={[styles.hello, styles.mt11, styles.ml27]}>
        Set a monthly limit
      </Text>
      <View style={[styles.statusBarBlack, styles.mt_815]}>
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
      <View style={[styles.groupView, styles.mt19, styles.ml25]}>
        <View style={styles.rectangleView5} />
      </View>
      <View style={[styles.groupView1, styles.mt2]}>
        <Image
          style={styles.iconFeatherArrowLeft}
          resizeMode="cover"
          source={require("../assets/icon-featherarrowleft.png")}
        />
      </View>
      <Text style={[styles.hello1, styles.mt_15, styles.ml300]}>£0</Text>
      <Text style={[styles.hello2, styles.mt_51, styles.ml318]}>|</Text>
      <Text style={[styles.hello3, styles.mt_18, styles.ml40]}>GBP</Text>
      <View style={[styles.keyboardNumberic, styles.mt12]}>
        <View style={styles.background1}>
          <View style={styles.backgroundBackground} />
          <View style={styles.background} />
        </View>
        <View style={styles.homeIndicatorLightPortr} />
        <View style={styles.keys}>
          <Image
            style={styles.deleteIcon}
            resizeMode="cover"
            source={require("../assets/delete.png")}
          />
          <View style={styles.view}>
            <Text style={styles.number}>0</Text>
          </View>
          <View style={styles.view1}>
            <View style={styles.background2} />
            <View style={styles.keyBackground} />
            <Text style={styles.label}>WXYZ</Text>
            <Text style={styles.number1}>9</Text>
          </View>
          <View style={styles.view2}>
            <View style={styles.background3} />
            <View style={styles.keyBackground1} />
            <Text style={styles.label1}>TUV</Text>
            <Text style={styles.number2}>8</Text>
          </View>
          <View style={styles.view3}>
            <View style={styles.background4} />
            <View style={styles.keyBackground2} />
            <Text style={styles.label2}>PQRS</Text>
            <Text style={styles.number3}>7</Text>
          </View>
          <View style={styles.view4}>
            <View style={styles.background5} />
            <View style={styles.keyBackground3} />
            <Text style={styles.label3}>MNO</Text>
            <Text style={styles.number4}>6</Text>
          </View>
          <View style={styles.view5}>
            <View style={styles.background6} />
            <View style={styles.keyBackground4} />
            <Text style={styles.label4}>JKL</Text>
            <Text style={styles.number5}>5</Text>
          </View>
          <View style={styles.view6}>
            <View style={styles.background7} />
            <View style={styles.keyBackground5} />
            <Text style={styles.label5}>GHI</Text>
            <Text style={styles.number6}>4</Text>
          </View>
          <View style={styles.view7}>
            <Text style={styles.label6}>DEF</Text>
            <Text style={styles.number7}>3</Text>
          </View>
          <View style={styles.view8}>
            <Text style={styles.label7}>ABC</Text>
            <Text style={styles.number8}>2</Text>
          </View>
          <View style={styles.view9}>
            <Text style={styles.label8}>{` `}</Text>
            <Text style={styles.number9}>1</Text>
          </View>
        </View>
      </View>
      <Text
        style={[styles.hello4, styles.ml40]}
      >{`Spent this month : £22.33 `}</Text>
      <View style={[styles.homeIndicator, styles.mt_13, styles.ml121]} />
      <Pressable
        style={[styles.groupPressable, styles.mt247, styles.ml25]}
        onPress={() => navigation.navigate("SpendingLimit1")}
      >
        <View style={styles.component208157}>
          <View style={styles.groupView2}>
            <View style={styles.rectangleView6} />
            <View style={styles.maskGroup236} />
          </View>
        </View>
        <Text style={styles.hello5}>SET LIMIT</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  mt11: {
    marginTop: 11,
  },
  ml27: {
    marginLeft: 27,
  },
  mt_815: {
    marginTop: -815,
  },
  mt19: {
    marginTop: 19,
  },
  ml25: {
    marginLeft: 25,
  },
  mt2: {
    marginTop: 2,
  },
  mt_15: {
    marginTop: -15,
  },
  ml300: {
    marginLeft: 300,
  },
  mt_51: {
    marginTop: -51,
  },
  ml318: {
    marginLeft: 318,
  },
  mt_18: {
    marginTop: -18,
  },
  ml40: {
    marginLeft: 40,
  },
  mt12: {
    marginTop: 12,
  },
  mt_13: {
    marginTop: -13,
  },
  ml121: {
    marginLeft: 121,
  },
  mt247: {
    marginTop: 247,
  },
  rectangleView: {
    position: "relative",
    backgroundColor: "#f6f5f8",
    width: 375,
    height: 815,
  },
  hello: {
    position: "relative",
    fontSize: 25,
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
  rectangleView5: {
    position: "absolute",
    marginTop: -31.5,
    top: "50%",
    right: 0,
    left: 0,
    borderRadius: 18,
    backgroundColor: "#fff",
    height: 63,
  },
  groupView: {
    position: "relative",
    width: 326,
    height: 63,
  },
  iconFeatherArrowLeft: {
    position: "absolute",
    marginLeft: -0.5,
    bottom: 4,
    left: "50%",
    width: 17,
    height: 17,
  },
  groupView1: {
    position: "relative",
    backgroundColor: "#f6f5f8",
    width: 55,
    height: 45,
  },
  hello1: {
    position: "relative",
    fontSize: 18,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#999",
    textAlign: "left",
  },
  hello2: {
    position: "relative",
    fontSize: 20,
    fontWeight: "300",
    fontFamily: "Helvetica",
    color: "#0101fd",
    textAlign: "left",
  },
  hello3: {
    position: "relative",
    fontSize: 14,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#00003d",
    textAlign: "left",
  },
  backgroundBackground: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: "rgba(0, 0, 0, 0)",
  },
  background: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: "#d1d5db",
  },
  background1: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  homeIndicatorLightPortr: {
    position: "absolute",
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: "rgba(0, 0, 0, 0)",
    height: 34,
  },
  deleteIcon: {
    position: "absolute",
    right: 44,
    bottom: 15,
    width: 24,
    height: 18,
  },
  number: {
    position: "absolute",
    marginTop: -16,
    top: "50%",
    left: 0,
    fontSize: 25,
    letterSpacing: 0,
    fontFamily: "SF Pro Display",
    color: "#000",
    textAlign: "center",
    width: 118,
    height: 30,
  },
  view: {
    position: "absolute",
    marginLeft: -58.5,
    bottom: 0,
    left: "50%",
    borderRadius: 5,
    backgroundColor: "#fcfcfe",
    shadowColor: "#898a8d",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 0,
    elevation: 0,
    shadowOpacity: 1,
    width: 117,
    height: 46,
  },
  background2: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: "rgba(0, 0, 0, 0)",
  },
  keyBackground: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: 5,
    backgroundColor: "#fcfcfe",
    shadowColor: "#898a8d",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 0,
    elevation: 0,
    shadowOpacity: 1,
  },
  label: {
    position: "absolute",
    bottom: 5,
    left: 0,
    fontSize: 10,
    letterSpacing: 2,
    fontWeight: "700",
    fontFamily: "SF Pro Text",
    color: "#000",
    textAlign: "center",
    width: 118,
    height: 12,
  },
  number1: {
    position: "absolute",
    top: 1,
    left: 0,
    fontSize: 25,
    letterSpacing: 0,
    fontFamily: "SF Pro Display",
    color: "#000",
    textAlign: "center",
    width: 118,
    height: 31,
  },
  view1: {
    position: "absolute",
    marginTop: 3.5,
    top: "50%",
    right: 0,
    width: 117,
    height: 47,
  },
  background3: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: "rgba(0, 0, 0, 0)",
  },
  keyBackground1: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: 5,
    backgroundColor: "#fcfcfe",
    shadowColor: "#898a8d",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 0,
    elevation: 0,
    shadowOpacity: 1,
  },
  label1: {
    position: "absolute",
    bottom: 5,
    left: 0,
    fontSize: 10,
    letterSpacing: 2,
    fontWeight: "700",
    fontFamily: "SF Pro Text",
    color: "#000",
    textAlign: "center",
    width: 118,
    height: 12,
  },
  number2: {
    position: "absolute",
    top: 1,
    left: 0,
    fontSize: 25,
    letterSpacing: 0,
    fontFamily: "SF Pro Display",
    color: "#000",
    textAlign: "center",
    width: 118,
    height: 31,
  },
  view2: {
    position: "absolute",
    marginTop: 3.5,
    marginLeft: -58.5,
    top: "50%",
    left: "50%",
    width: 117,
    height: 47,
  },
  background4: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: "rgba(0, 0, 0, 0)",
  },
  keyBackground2: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: 5,
    backgroundColor: "#fcfcfe",
    shadowColor: "#898a8d",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 0,
    elevation: 0,
    shadowOpacity: 1,
  },
  label2: {
    position: "absolute",
    bottom: 5,
    left: 0,
    fontSize: 10,
    letterSpacing: 2,
    fontWeight: "700",
    fontFamily: "SF Pro Text",
    color: "#000",
    textAlign: "center",
    width: 118,
    height: 12,
  },
  number3: {
    position: "absolute",
    top: 1,
    left: 0,
    fontSize: 25,
    letterSpacing: 0,
    fontFamily: "SF Pro Display",
    color: "#000",
    textAlign: "center",
    width: 118,
    height: 31,
  },
  view3: {
    position: "absolute",
    marginTop: 3.5,
    top: "50%",
    left: 0,
    width: 117,
    height: 47,
  },
  background5: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: "rgba(0, 0, 0, 0)",
  },
  keyBackground3: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: 5,
    backgroundColor: "#fcfcfe",
    shadowColor: "#898a8d",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 0,
    elevation: 0,
    shadowOpacity: 1,
  },
  label3: {
    position: "absolute",
    bottom: 5,
    left: 0,
    fontSize: 10,
    letterSpacing: 2,
    fontWeight: "700",
    fontFamily: "SF Pro Text",
    color: "#000",
    textAlign: "center",
    width: 118,
    height: 12,
  },
  number4: {
    position: "absolute",
    top: 1,
    left: 0,
    fontSize: 25,
    letterSpacing: 0,
    fontFamily: "SF Pro Display",
    color: "#000",
    textAlign: "center",
    width: 118,
    height: 31,
  },
  view4: {
    position: "absolute",
    marginTop: -50.5,
    top: "50%",
    right: 0,
    width: 117,
    height: 47,
  },
  background6: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: "rgba(0, 0, 0, 0)",
  },
  keyBackground4: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: 5,
    backgroundColor: "#fcfcfe",
    shadowColor: "#898a8d",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 0,
    elevation: 0,
    shadowOpacity: 1,
  },
  label4: {
    position: "absolute",
    bottom: 5,
    left: 0,
    fontSize: 10,
    letterSpacing: 2,
    fontWeight: "700",
    fontFamily: "SF Pro Text",
    color: "#000",
    textAlign: "center",
    width: 118,
    height: 12,
  },
  number5: {
    position: "absolute",
    top: 1,
    left: 0,
    fontSize: 25,
    letterSpacing: 0,
    fontFamily: "SF Pro Display",
    color: "#000",
    textAlign: "center",
    width: 118,
    height: 31,
  },
  view5: {
    position: "absolute",
    marginTop: -50.5,
    marginLeft: -58.5,
    top: "50%",
    left: "50%",
    width: 117,
    height: 47,
  },
  background7: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: "rgba(0, 0, 0, 0)",
  },
  keyBackground5: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: 5,
    backgroundColor: "#fcfcfe",
    shadowColor: "#898a8d",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 0,
    elevation: 0,
    shadowOpacity: 1,
  },
  label5: {
    position: "absolute",
    bottom: 5,
    left: 0,
    fontSize: 10,
    letterSpacing: 2,
    fontWeight: "700",
    fontFamily: "SF Pro Text",
    color: "#000",
    textAlign: "center",
    width: 118,
    height: 12,
  },
  number6: {
    position: "absolute",
    top: 1,
    left: 0,
    fontSize: 25,
    letterSpacing: 0,
    fontFamily: "SF Pro Display",
    color: "#000",
    textAlign: "center",
    width: 118,
    height: 31,
  },
  view6: {
    position: "absolute",
    marginTop: -50.5,
    top: "50%",
    left: 0,
    width: 117,
    height: 47,
  },
  label6: {
    position: "absolute",
    bottom: 5,
    left: 0,
    fontSize: 10,
    letterSpacing: 2,
    fontWeight: "700",
    fontFamily: "SF Pro Text",
    color: "#000",
    textAlign: "center",
    width: 118,
    height: 12,
  },
  number7: {
    position: "absolute",
    top: 1,
    left: 0,
    fontSize: 25,
    letterSpacing: 0,
    fontFamily: "SF Pro Display",
    color: "#000",
    textAlign: "center",
    width: 118,
    height: 30,
  },
  view7: {
    position: "absolute",
    top: 0,
    right: 0,
    borderRadius: 5,
    backgroundColor: "#fcfcfe",
    shadowColor: "#898a8d",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 0,
    elevation: 0,
    shadowOpacity: 1,
    width: 117,
    height: 46,
  },
  label7: {
    position: "absolute",
    bottom: 5,
    left: 0,
    fontSize: 10,
    letterSpacing: 2,
    fontWeight: "700",
    fontFamily: "SF Pro Text",
    color: "#000",
    textAlign: "center",
    width: 118,
    height: 12,
  },
  number8: {
    position: "absolute",
    top: 1,
    left: 0,
    fontSize: 25,
    letterSpacing: 0,
    fontFamily: "SF Pro Display",
    color: "#000",
    textAlign: "center",
    width: 118,
    height: 30,
  },
  view8: {
    position: "absolute",
    marginLeft: -58.5,
    top: 0,
    left: "50%",
    borderRadius: 5,
    backgroundColor: "#fcfcfe",
    shadowColor: "#898a8d",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 0,
    elevation: 0,
    shadowOpacity: 1,
    width: 117,
    height: 46,
  },
  label8: {
    position: "absolute",
    bottom: 5,
    left: 0,
    fontSize: 10,
    letterSpacing: 2,
    fontWeight: "700",
    fontFamily: "SF Pro Text",
    color: "#000",
    textAlign: "center",
    width: 118,
    height: 12,
  },
  number9: {
    position: "absolute",
    top: 1,
    left: 0,
    fontSize: 25,
    letterSpacing: 0,
    fontFamily: "SF Pro Display",
    color: "#000",
    textAlign: "center",
    width: 118,
    height: 30,
  },
  view9: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 5,
    backgroundColor: "#fcfcfe",
    shadowColor: "#898a8d",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 0,
    elevation: 0,
    shadowOpacity: 1,
    width: 117,
    height: 46,
  },
  keys: {
    position: "absolute",
    top: 6,
    right: 6,
    left: 6,
    height: 207,
  },
  keyboardNumberic: {
    position: "relative",
    width: 375,
    height: 291,
  },
  hello4: {
    position: "relative",
    fontSize: 10,
    fontFamily: "Helvetica",
    color: "#999",
    textAlign: "left",
  },
  homeIndicator: {
    position: "relative",
    borderRadius: 100,
    backgroundColor: "#000",
    width: 134,
    height: 5,
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
  maskGroup236: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 13,
    left: 0,
  },
  groupView2: {
    position: "absolute",
    marginTop: -30,
    top: "50%",
    right: 0,
    left: 0,
    height: 60,
  },
  component208157: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  hello5: {
    position: "absolute",
    top: "35%",
    left: "38.96%",
    fontSize: 15,
    lineHeight: 17,
    textTransform: "uppercase",
    fontFamily: "Helvetica",
    color: "#fff",
    textAlign: "center",
  },
  groupPressable: {
    position: "relative",
    width: 326,
    height: 60,
  },
  setLimit: {
    position: "relative",
    backgroundColor: "#4b4b4b",
    flex: 1,
    width: "100%",
    flexDirection: "column",
    alignItems: "flex-start",
  },
});

export default SetLimit;
