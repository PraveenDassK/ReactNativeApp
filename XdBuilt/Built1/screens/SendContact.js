import * as React from "react";
import { StyleSheet, View, Pressable, Text, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

const SendContact = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.sendContact}>
      <View style={styles.rectangleView} />
      <Pressable
        style={[styles.groupPressable, styles.mt19]}
        onPress={() => navigation.navigate("SendMoney")}
      >
        <View style={styles.lineView} />
      </Pressable>
      <View style={[styles.groupView, styles.mt_705]}>
        <Text style={styles.hello}>Hudson Maia</Text>
        <Text style={styles.hello1}>+440123456789</Text>
        <Text style={styles.hello2}>Joined September 2022</Text>
        <Image
          style={styles.groupIcon}
          resizeMode="cover"
          source={require("../assets/group-30337.png")}
        />
      </View>
      <View style={[styles.groupView4, styles.mt_31, styles.ml2]}>
        <View style={styles.groupView1}>
          <Text style={styles.hello3}>£20</Text>
          <Image
            style={styles.groupIcon1}
            resizeMode="cover"
            source={require("../assets/group-30410.png")}
          />
        </View>
        <View style={styles.groupView2}>
          <Text style={styles.hello4}>£50</Text>
          <Image
            style={styles.groupIcon2}
            resizeMode="cover"
            source={require("../assets/group-304101.png")}
          />
        </View>
        <View style={styles.groupView3}>
          <Text style={styles.hello5}>£100</Text>
          <Image
            style={styles.groupIcon3}
            resizeMode="cover"
            source={require("../assets/group-30410.png")}
          />
        </View>
      </View>
      <View style={[styles.groupView5, styles.mt92, styles.ml1]}>
        <Text style={styles.hello6}>Pay</Text>
        <Text style={styles.hello7}>£500</Text>
        <View style={styles.lineView1} />
      </View>
      <View style={[styles.groupView6, styles.mt12, styles.ml1]}>
        <Text style={styles.hello8}>Add a note</Text>
        <Image
          style={styles.iconMaterialKeyboardVoice}
          resizeMode="cover"
          source={require("../assets/icon-materialkeyboardvoice.png")}
        />
      </View>
      <View style={[styles.maskGroup236, styles.mt43, styles.ml1]} />
      <View style={[styles.homeIndicator, styles.mt36, styles.ml1]} />
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
        style={[styles.groupPressable1, styles.mt67, styles.ml1]}
        onPress={() => navigation.navigate("AddBeneficiarySchedulePayment1")}
      >
        <View style={styles.component20824}>
          <View style={styles.groupView7}>
            <View style={styles.rectangleView5} />
            <View style={styles.maskGroup2361} />
          </View>
        </View>
        <Text style={styles.hello9}>Send</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  mt19: {
    marginTop: 19,
  },
  mt_705: {
    marginTop: -705,
  },
  mt_31: {
    marginTop: -31,
  },
  ml2: {
    marginLeft: 2,
  },
  mt92: {
    marginTop: 92,
  },
  ml1: {
    marginLeft: 1,
  },
  mt12: {
    marginTop: 12,
  },
  mt43: {
    marginTop: 43,
  },
  mt36: {
    marginTop: 36,
  },
  mt_812: {
    marginTop: -812,
  },
  mt67: {
    marginTop: 67,
  },
  rectangleView: {
    position: "relative",
    backgroundColor: "#f6f5f8",
    width: 375,
    height: 812,
  },
  lineView: {
    position: "absolute",
    marginLeft: -27,
    top: 10,
    left: "50%",
    borderStyle: "solid",
    borderColor: "#707070",
    borderTopWidth: 3,
    width: 52,
    height: 6,
  },
  groupPressable: {
    position: "relative",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
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
    position: "absolute",
    top: 97,
    left: 12,
    fontSize: 20,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#00003d",
    textAlign: "left",
  },
  hello1: {
    position: "absolute",
    top: 127,
    left: 0,
    fontSize: 20,
    fontFamily: "Helvetica",
    color: "#00003d",
    textAlign: "left",
  },
  hello2: {
    position: "absolute",
    top: 156,
    left: 0,
    fontSize: 14,
    fontFamily: "Helvetica",
    color: "#999",
    textAlign: "left",
  },
  groupIcon: {
    position: "absolute",
    top: 0,
    right: 39,
    bottom: 106,
    left: 43,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  groupView: {
    position: "relative",
    width: 149,
    height: 172,
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
  groupIcon1: {
    position: "absolute",
    marginLeft: -7.94,
    bottom: 0,
    left: "50%",
    width: 18,
    height: 17,
  },
  groupView1: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    width: 42,
  },
  hello4: {
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
    marginLeft: -7.71,
    bottom: 0,
    left: "50%",
    width: 18,
    height: 17,
  },
  groupView2: {
    position: "absolute",
    marginLeft: -27.5,
    top: 0,
    bottom: 0,
    left: "50%",
    width: 42,
  },
  hello5: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 25,
    lineHeight: 22,
    fontFamily: "Helvetica",
    color: "#999",
    textAlign: "left",
  },
  groupIcon3: {
    position: "absolute",
    marginLeft: -7.22,
    bottom: 0,
    left: "50%",
    width: 18,
    height: 17,
  },
  groupView3: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    width: 56,
  },
  groupView4: {
    position: "relative",
    width: 311,
    height: 54,
  },
  hello6: {
    position: "absolute",
    top: 0,
    left: 142,
    fontSize: 16,
    fontFamily: "Helvetica",
    color: "#999",
    textAlign: "left",
  },
  hello7: {
    position: "absolute",
    top: 32,
    left: 75,
    fontSize: 60,
    lineHeight: 37,
    fontFamily: "Helvetica",
    color: "#0101fd",
    textAlign: "left",
  },
  lineView1: {
    position: "absolute",
    right: 0,
    bottom: -1,
    left: -1,
    borderStyle: "solid",
    borderColor: "#707070",
    borderTopWidth: 1,
    height: 2,
  },
  groupView5: {
    position: "relative",
    width: 310,
    height: 99,
  },
  hello8: {
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
  groupView6: {
    position: "relative",
    borderRadius: 21,
    backgroundColor: "#f6f5f8",
    width: 312,
    height: 42,
  },
  maskGroup236: {
    position: "relative",
    width: 310,
    height: 47,
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
  maskGroup2361: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 13,
    left: 0,
  },
  groupView7: {
    position: "absolute",
    marginTop: -30,
    top: "50%",
    right: 0,
    left: 0,
    height: 60,
  },
  component20824: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  hello9: {
    position: "absolute",
    top: "36.67%",
    left: "43.56%",
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
  sendContact: {
    position: "relative",
    backgroundColor: "#4b4b4b",
    flex: 1,
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
  },
});

export default SendContact;
