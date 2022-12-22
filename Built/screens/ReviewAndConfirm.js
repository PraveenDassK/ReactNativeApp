import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const ReviewAndConfirm = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.reviewAndConfirm}>
      <View style={styles.rectangleView} />
      <View style={[styles.statusBarBlack, styles.mt_811]}>
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
      <View style={[styles.rectangleView5, styles.mt18]} />
      <Text style={[styles.hello, styles.mt17, styles.mr2]}>
        Review and Confirm
      </Text>
      <View style={[styles.lineView, styles.mt_738, styles.mr2]} />
      <View style={[styles.groupView, styles.mt46, styles.mr14]}>
        <Text style={styles.hello1}>From</Text>
        <Text style={styles.hello2}>Daily Saving</Text>
        <Text style={styles.hello3}>- £ 500.00</Text>
      </View>
      <View style={[styles.groupView1, styles.mt17, styles.mr15]}>
        <Text style={styles.hello4}>To</Text>
        <Text style={styles.hello5}>Visa *0000</Text>
        <Text style={styles.hello6}>- £ 500.00</Text>
      </View>
      <View style={[styles.lineView1, styles.mt_4, styles.mr187]} />
      <View style={[styles.lineView2, styles.mt_2, styles.ml157]} />
      <Text style={[styles.hello7, styles.mt37, styles.mr304]}>Fee</Text>
      <Text style={[styles.hello8, styles.mt14, styles.mr216]}>
        Est. completion date
      </Text>
      <Text style={[styles.hello9, styles.mt_14, styles.ml262]}>£ 0.00</Text>
      <Text style={[styles.hello10, styles.mt_14, styles.ml263]}>Today</Text>
      <Image
        style={[styles.iconIonicIosArrowForward, styles.mt14, styles.mr15]}
        resizeMode="cover"
        source={require("../assets/icon-ioniciosarrowforward3.png")}
      />
      <View style={[styles.homeIndicator, styles.mt36, styles.ml1]} />
      <Pressable
        style={[styles.groupPressable, styles.mt326, styles.ml1]}
        onPress={() => navigation.navigate("AddFundsSuccess")}
      >
        <View style={styles.component20826}>
          <View style={styles.groupView2}>
            <View style={styles.rectangleView6} />
            <View style={styles.maskGroup236} />
          </View>
        </View>
        <Text style={styles.hello11}>Confirm</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  mt_811: {
    marginTop: -811,
  },
  mt18: {
    marginTop: 18,
  },
  mt17: {
    marginTop: 17,
  },
  mr2: {
    marginRight: 2,
  },
  mt_738: {
    marginTop: -738,
  },
  mt46: {
    marginTop: 46,
  },
  mr14: {
    marginRight: 14,
  },
  mr15: {
    marginRight: 15,
  },
  mt_4: {
    marginTop: -4,
  },
  mr187: {
    marginRight: 187,
  },
  mt_2: {
    marginTop: -2,
  },
  ml157: {
    marginLeft: 157,
  },
  mt37: {
    marginTop: 37,
  },
  mr304: {
    marginRight: 304,
  },
  mt14: {
    marginTop: 14,
  },
  mr216: {
    marginRight: 216,
  },
  mt_14: {
    marginTop: -14,
  },
  ml262: {
    marginLeft: 262,
  },
  ml263: {
    marginLeft: 263,
  },
  mt36: {
    marginTop: 36,
  },
  ml1: {
    marginLeft: 1,
  },
  mt326: {
    marginTop: 326,
  },
  rectangleView: {
    position: "relative",
    backgroundColor: "#f6f5f8",
    width: 375,
    height: 811,
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
    position: "relative",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: "#fff",
    shadowColor: "rgba(1, 1, 253, 0.1)",
    shadowOffset: {
      width: 0,
      height: -3,
    },
    shadowRadius: 20,
    elevation: 20,
    shadowOpacity: 1,
    width: 375,
    height: 749,
  },
  hello: {
    position: "relative",
    fontSize: 20,
    lineHeight: 25,
    fontWeight: "700",
    fontFamily: "Typo Grotesk",
    color: "#00003d",
    textAlign: "left",
  },
  lineView: {
    position: "relative",
    borderStyle: "solid",
    borderColor: "#707070",
    borderTopWidth: 3,
    width: 52,
    height: 6,
  },
  hello1: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 14,
    fontFamily: "Helvetica",
    color: "#999",
    textAlign: "left",
  },
  hello2: {
    position: "absolute",
    top: 29,
    left: 0,
    fontSize: 12,
    fontFamily: "Helvetica",
    color: "#999",
    textAlign: "left",
  },
  hello3: {
    position: "absolute",
    top: 27,
    left: 228,
    fontSize: 18,
    fontFamily: "Helvetica",
    color: "#0101fd",
    textAlign: "right",
  },
  groupView: {
    position: "relative",
    width: 309,
    height: 47,
  },
  hello4: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 14,
    fontFamily: "Helvetica",
    color: "#999",
    textAlign: "left",
  },
  hello5: {
    position: "absolute",
    top: 29,
    left: 0,
    fontSize: 12,
    fontFamily: "Helvetica",
    color: "#999",
    textAlign: "left",
  },
  hello6: {
    position: "absolute",
    top: 27,
    left: 229,
    fontSize: 18,
    fontFamily: "Helvetica",
    color: "#0101fd",
    textAlign: "right",
  },
  groupView1: {
    position: "relative",
    width: 310,
    height: 47,
  },
  lineView1: {
    position: "relative",
    borderStyle: "solid",
    borderColor: "#707070",
    borderTopWidth: 1,
    width: 139,
    height: 2,
  },
  lineView2: {
    position: "relative",
    borderStyle: "solid",
    borderColor: "#707070",
    borderTopWidth: 1,
    width: 139,
    height: 2,
  },
  hello7: {
    position: "relative",
    fontSize: 12,
    fontFamily: "Helvetica",
    color: "#999",
    textAlign: "left",
  },
  hello8: {
    position: "relative",
    fontSize: 12,
    fontFamily: "Helvetica",
    color: "#999",
    textAlign: "left",
  },
  hello9: {
    position: "relative",
    fontSize: 12,
    fontFamily: "Helvetica",
    color: "#999",
    textAlign: "right",
  },
  hello10: {
    position: "relative",
    fontSize: 12,
    fontFamily: "Helvetica",
    color: "#999",
    textAlign: "right",
  },
  iconIonicIosArrowForward: {
    position: "relative",
    width: 12,
    height: 7,
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
  component20826: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  hello11: {
    position: "absolute",
    top: "36.67%",
    left: "39.26%",
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
  reviewAndConfirm: {
    position: "relative",
    backgroundColor: "#4b4b4b",
    flex: 1,
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
  },
});

export default ReviewAndConfirm;
