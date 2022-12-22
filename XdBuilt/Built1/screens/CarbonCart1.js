import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const CarbonCart1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.carbonCart1}>
      <View style={[styles.rectangleView, styles.mt_20]} />
      <View style={[styles.rectangleView1, styles.mt23, styles.ml1]} />
      <Text style={[styles.hello, styles.mt11, styles.mr133]}>
        Order Summary
      </Text>
      <View style={[styles.statusBarBlack, styles.mt11]}>
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
            <View style={styles.rectangleView2} />
            <View style={styles.rectangleView3} />
            <View style={styles.rectangleView4} />
            <View style={styles.rectangleView5} />
          </View>
        </View>
      </View>
      <Text style={[styles.hello1, styles.mt20, styles.mr176]}>
        <Text style={styles.agroforestry}>Agroforestry -</Text>
        <Text style={styles.treePlanting}>Tree Planting</Text>
        <Text style={styles.initiative}>Initiative</Text>
      </Text>
      <Text style={[styles.hello2, styles.mt_227, styles.mr214]}>Project</Text>
      <Text style={[styles.hello3, styles.mt52, styles.mr186]}>
        <Text style={styles.woodland}>Woodland</Text>
        <Text style={styles.restoration}>Restoration,</Text>
        <Text style={styles.devon}>Devon</Text>
      </Text>
      <Text style={[styles.hello4, styles.mt12, styles.mr229]}>Total</Text>
      <Text style={[styles.hello5, styles.mt_50, styles.ml58]}>1</Text>
      <Text style={[styles.hello6, styles.mt_16, styles.ml59]}>Unit</Text>
      <Text style={[styles.hello7, styles.mt_50, styles.ml58]}>1</Text>
      <Text style={[styles.hello8, styles.mt_16, styles.ml58]}>2</Text>
      <Text style={[styles.hello9, styles.mt_16, styles.ml242]}>£1.45</Text>
      <Text style={[styles.hello10, styles.mt_16, styles.ml243]}>Price</Text>
      <Text style={[styles.hello11, styles.mt_16, styles.ml261]}>£6</Text>
      <Text style={[styles.hello12, styles.mt_16, styles.ml242]}>£7.45</Text>
      <View style={[styles.lineView, styles.mt41]} />
      <View style={[styles.lineView1, styles.mt13]} />
      <View style={[styles.groupView1, styles.mt66, styles.ml1]}>
        <View style={styles.component208161}>
          <View style={styles.groupView}>
            <View style={styles.rectangleView6} />
            <View style={styles.maskGroup236} />
          </View>
        </View>
        <Text style={styles.hello13}>Proceed to payment</Text>
      </View>
      <View style={[styles.homeIndicator, styles.mt289, styles.ml1]} />
      <Pressable
        style={[styles.groupPressable, styles.mt_766]}
        onPress={() => navigation.navigate("Carbon2")}
      >
        <Image
          style={styles.iconFeatherArrowLeft}
          resizeMode="cover"
          source={require("../assets/icon-featherarrowleft.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  mt_20: {
    marginTop: -20,
  },
  mt23: {
    marginTop: 23,
  },
  ml1: {
    marginLeft: 1,
  },
  mt11: {
    marginTop: 11,
  },
  mr133: {
    marginRight: 133,
  },
  mt20: {
    marginTop: 20,
  },
  mr176: {
    marginRight: 176,
  },
  mt_227: {
    marginTop: -227,
  },
  mr214: {
    marginRight: 214,
  },
  mt52: {
    marginTop: 52,
  },
  mr186: {
    marginRight: 186,
  },
  mt12: {
    marginTop: 12,
  },
  mr229: {
    marginRight: 229,
  },
  mt_50: {
    marginTop: -50,
  },
  ml58: {
    marginLeft: 58,
  },
  mt_16: {
    marginTop: -16,
  },
  ml59: {
    marginLeft: 59,
  },
  ml242: {
    marginLeft: 242,
  },
  ml243: {
    marginLeft: 243,
  },
  ml261: {
    marginLeft: 261,
  },
  mt41: {
    marginTop: 41,
  },
  mt13: {
    marginTop: 13,
  },
  mt66: {
    marginTop: 66,
  },
  mt289: {
    marginTop: 289,
  },
  mt_766: {
    marginTop: -766,
  },
  rectangleView: {
    position: "relative",
    backgroundColor: "#f6f5f8",
    width: 375,
    height: 777,
  },
  rectangleView1: {
    position: "relative",
    borderRadius: 30,
    backgroundColor: "#fff",
    shadowColor: "rgba(1, 1, 253, 0.1)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 20,
    elevation: 20,
    shadowOpacity: 1,
    width: 320,
    height: 248,
  },
  hello: {
    position: "relative",
    fontSize: 25,
    lineHeight: 30,
    fontWeight: "700",
    fontFamily: "Typo Grotesk",
    color: "#00003d",
    textAlign: "center",
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
  rectangleView2: {
    position: "absolute",
    bottom: 0,
    left: 0,
    borderRadius: 2,
    backgroundColor: "#272727",
    width: 3,
    height: 4,
  },
  rectangleView3: {
    position: "absolute",
    marginLeft: -3.5,
    bottom: 0,
    left: "50%",
    borderRadius: 2,
    backgroundColor: "#272727",
    width: 3,
    height: 6,
  },
  rectangleView4: {
    position: "absolute",
    marginLeft: 0.5,
    bottom: 0,
    left: "50%",
    borderRadius: 2,
    backgroundColor: "#272727",
    width: 3,
    height: 9,
  },
  rectangleView5: {
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
  agroforestry: {
    margin: 0,
  },
  treePlanting: {
    margin: 0,
  },
  initiative: {
    margin: 0,
  },
  hello1: {
    position: "relative",
    fontSize: 14,
    lineHeight: 17,
    fontFamily: "Helvetica",
    color: "#00003d",
    textAlign: "left",
  },
  hello2: {
    position: "relative",
    fontSize: 14,
    lineHeight: 17,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#00003d",
    textAlign: "left",
  },
  woodland: {
    margin: 0,
  },
  restoration: {
    margin: 0,
  },
  devon: {
    margin: 0,
  },
  hello3: {
    position: "relative",
    fontSize: 14,
    lineHeight: 17,
    fontFamily: "Helvetica",
    color: "#00003d",
    textAlign: "left",
  },
  hello4: {
    position: "relative",
    fontSize: 14,
    lineHeight: 17,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#00003d",
    textAlign: "left",
  },
  hello5: {
    position: "relative",
    fontSize: 14,
    lineHeight: 17,
    fontFamily: "Helvetica",
    color: "#00003d",
    textAlign: "left",
  },
  hello6: {
    position: "relative",
    fontSize: 14,
    lineHeight: 17,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#00003d",
    textAlign: "left",
  },
  hello7: {
    position: "relative",
    fontSize: 14,
    lineHeight: 17,
    fontFamily: "Helvetica",
    color: "#00003d",
    textAlign: "left",
  },
  hello8: {
    position: "relative",
    fontSize: 14,
    lineHeight: 17,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#00003d",
    textAlign: "left",
  },
  hello9: {
    position: "relative",
    fontSize: 14,
    lineHeight: 17,
    fontFamily: "Helvetica",
    color: "#00003d",
    textAlign: "right",
  },
  hello10: {
    position: "relative",
    fontSize: 14,
    lineHeight: 17,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#00003d",
    textAlign: "right",
  },
  hello11: {
    position: "relative",
    fontSize: 14,
    lineHeight: 17,
    fontFamily: "Helvetica",
    color: "#00003d",
    textAlign: "right",
  },
  hello12: {
    position: "relative",
    fontSize: 14,
    lineHeight: 17,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#00003d",
    textAlign: "right",
  },
  lineView: {
    position: "relative",
    borderStyle: "solid",
    borderColor: "#f6f5f8",
    borderTopWidth: 1,
    width: 321,
    height: 2,
  },
  lineView1: {
    position: "relative",
    borderStyle: "solid",
    borderColor: "#f6f5f8",
    borderTopWidth: 1,
    width: 321,
    height: 2,
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
  groupView: {
    position: "absolute",
    marginTop: -30,
    top: "50%",
    right: 0,
    left: 0,
    height: 60,
  },
  component208161: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  hello13: {
    position: "absolute",
    top: "35%",
    left: "23.62%",
    fontSize: 15,
    lineHeight: 17,
    textTransform: "uppercase",
    fontFamily: "Helvetica",
    color: "#fff",
    textAlign: "left",
  },
  groupView1: {
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
  carbonCart1: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
  },
});

export default CarbonCart1;
