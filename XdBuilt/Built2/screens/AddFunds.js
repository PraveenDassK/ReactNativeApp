import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const AddFunds = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.addFunds}
      onPress={() => navigation.navigate("Account3")}
    >
      <View style={styles.rectangleView} />
      <View style={[styles.rectangleView1, styles.mt19]} />
      <Text style={[styles.hello, styles.mt17, styles.ml1]}>Add Funds</Text>
      <View style={[styles.groupView3, styles.mt88, styles.ml2]}>
        <View style={styles.groupView}>
          <Text style={styles.hello1}>£20</Text>
          <Image
            style={styles.groupIcon}
            resizeMode="cover"
            source={require("../assets/group-30410.png")}
          />
        </View>
        <View style={styles.groupView1}>
          <Text style={styles.hello2}>£50</Text>
          <Image
            style={styles.groupIcon1}
            resizeMode="cover"
            source={require("../assets/group-304101.png")}
          />
        </View>
        <View style={styles.groupView2}>
          <Text style={styles.hello3}>£100</Text>
          <Image
            style={styles.groupIcon2}
            resizeMode="cover"
            source={require("../assets/group-30410.png")}
          />
        </View>
      </View>
      <View style={[styles.groupView4, styles.mt105, styles.ml1]}>
        <Text style={styles.hello4}>Pay</Text>
        <Text style={styles.hello5}>£500</Text>
        <View style={styles.lineView} />
      </View>
      <View style={[styles.groupView5, styles.mt24, styles.ml1]}>
        <Text style={styles.hello6}>Add a note</Text>
        <Image
          style={styles.iconMaterialKeyboardVoice}
          resizeMode="cover"
          source={require("../assets/icon-materialkeyboardvoice.png")}
        />
      </View>
      <View style={[styles.lineView1, styles.mt_739, styles.mr2]} />
      <View style={[styles.homeIndicator, styles.mt36, styles.ml1]} />
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
            <View style={styles.rectangleView2} />
            <View style={styles.rectangleView3} />
            <View style={styles.rectangleView4} />
            <View style={styles.rectangleView5} />
          </View>
        </View>
      </View>
      <View style={[styles.groupView7, styles.mt32]}>
        <View style={styles.component2071}>
          <View style={styles.rectangleView6} />
          <Image
            style={styles.iconIonicIosArrowForward}
            resizeMode="cover"
            source={require("../assets/icon-ioniciosarrowforward4.png")}
          />
        </View>
        <Text style={styles.hello7}>Select Account</Text>
        <View style={styles.groupView6}>
          <Text style={styles.hello8}>XYZ Card</Text>
          <Text style={styles.hello9}>£12,534.00</Text>
          <Image
            style={styles.iconFeatherCreditCard}
            resizeMode="cover"
            source={require("../assets/icon-feathercreditcard.png")}
          />
        </View>
      </View>
      <Pressable
        style={[styles.groupPressable, styles.mt67, styles.ml1]}
        onPress={() => navigation.navigate("ReviewAndConfirm")}
      >
        <View style={styles.component20823}>
          <View style={styles.groupView8}>
            <View style={styles.rectangleView7} />
            <View style={styles.maskGroup236} />
          </View>
        </View>
        <Text style={styles.hello10}>Add Funds</Text>
      </Pressable>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  mt19: {
    marginTop: 19,
  },
  mt17: {
    marginTop: 17,
  },
  ml1: {
    marginLeft: 1,
  },
  mt88: {
    marginTop: 88,
  },
  ml2: {
    marginLeft: 2,
  },
  mt105: {
    marginTop: 105,
  },
  mt24: {
    marginTop: 24,
  },
  mt_739: {
    marginTop: -739,
  },
  mr2: {
    marginRight: 2,
  },
  mt36: {
    marginTop: 36,
  },
  mt_811: {
    marginTop: -811,
  },
  mt32: {
    marginTop: 32,
  },
  mt67: {
    marginTop: 67,
  },
  rectangleView: {
    position: "relative",
    backgroundColor: "#f6f5f8",
    width: 375,
    height: 811,
  },
  rectangleView1: {
    position: "relative",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: "#fff",
    shadowColor: "rgba(1, 1, 253, 0.05)",
    shadowOffset: {
      width: 0,
      height: -10,
    },
    shadowRadius: 50,
    elevation: 50,
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
  hello1: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 25,
    lineHeight: 22,
    fontFamily: "Helvetica",
    color: "#999",
    textAlign: "left",
  },
  groupIcon: {
    position: "absolute",
    marginLeft: -7.94,
    bottom: 0,
    left: "50%",
    width: 18,
    height: 17,
  },
  groupView: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    width: 42,
  },
  hello2: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 25,
    lineHeight: 22,
    fontFamily: "Helvetica",
    color: "#999",
    textAlign: "left",
  },
  groupIcon1: {
    position: "absolute",
    marginLeft: -7.71,
    bottom: 0,
    left: "50%",
    width: 18,
    height: 17,
  },
  groupView1: {
    position: "absolute",
    marginLeft: -27.5,
    top: 0,
    bottom: 0,
    left: "50%",
    width: 42,
  },
  hello3: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 25,
    lineHeight: 22,
    fontFamily: "Helvetica",
    color: "#999",
    textAlign: "left",
  },
  groupIcon2: {
    position: "absolute",
    marginLeft: -7.22,
    bottom: 0,
    left: "50%",
    width: 18,
    height: 17,
  },
  groupView2: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    width: 56,
  },
  groupView3: {
    position: "relative",
    width: 311,
    height: 54,
  },
  hello4: {
    position: "absolute",
    top: 0,
    left: 142,
    fontSize: 16,
    fontFamily: "Helvetica",
    color: "#999",
    textAlign: "left",
  },
  hello5: {
    position: "absolute",
    top: 32,
    left: 88,
    fontSize: 60,
    lineHeight: 37,
    fontFamily: "Helvetica",
    color: "#0101fd",
    textAlign: "left",
  },
  lineView: {
    position: "absolute",
    right: 0,
    bottom: -1,
    left: -1,
    borderStyle: "solid",
    borderColor: "#707070",
    borderTopWidth: 1,
    height: 2,
  },
  groupView4: {
    position: "relative",
    width: 310,
    height: 99,
  },
  hello6: {
    position: "absolute",
    top: 13,
    left: 13,
    fontSize: 14,
    fontFamily: "Helvetica",
    color: "#999",
    textAlign: "left",
  },
  iconMaterialKeyboardVoice: {
    position: "absolute",
    marginTop: -9.35,
    top: "50%",
    right: 16,
    width: 14,
    height: 19,
  },
  groupView5: {
    position: "relative",
    borderRadius: 21,
    backgroundColor: "#f6f5f8",
    width: 312,
    height: 42,
  },
  lineView1: {
    position: "relative",
    borderStyle: "solid",
    borderColor: "#707070",
    borderTopWidth: 3,
    width: 52,
    height: 6,
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
  rectangleView6: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: 15,
    backgroundColor: "#f6f5f8",
  },
  iconIonicIosArrowForward: {
    position: "absolute",
    marginTop: -3,
    top: "50%",
    right: 14,
    width: 11,
    height: 6,
  },
  component2071: {
    position: "absolute",
    top: 21,
    right: 0,
    bottom: 0,
    left: 0,
  },
  hello7: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 14,
    fontFamily: "Helvetica",
    color: "#999",
    textAlign: "left",
  },
  hello8: {
    position: "absolute",
    top: 0,
    left: 44,
    fontSize: 12,
    fontFamily: "Helvetica",
    color: "#999",
    textAlign: "left",
  },
  hello9: {
    position: "absolute",
    top: 15,
    left: 44,
    fontSize: 18,
    fontFamily: "Helvetica",
    color: "#00003d",
    textAlign: "left",
  },
  iconFeatherCreditCard: {
    position: "absolute",
    marginTop: -10.5,
    top: "50%",
    left: 0,
    width: 29,
    height: 21,
  },
  groupView6: {
    position: "absolute",
    bottom: 7,
    left: 14,
    width: 134,
    height: 35,
  },
  groupView7: {
    position: "relative",
    width: 325,
    height: 71,
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
  maskGroup236: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 13,
    left: 0,
  },
  groupView8: {
    position: "absolute",
    marginTop: -30,
    top: "50%",
    right: 0,
    left: 0,
    height: 60,
  },
  component20823: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  hello10: {
    position: "absolute",
    top: "36.67%",
    left: "36.5%",
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
  addFunds: {
    position: "relative",
    backgroundColor: "#4b4b4b",
    flex: 1,
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
  },
});

export default AddFunds;
