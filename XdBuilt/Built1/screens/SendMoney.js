import * as React from "react";
import { StyleSheet, View, Image, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const SendMoney = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.sendMoney1}>
      <View style={styles.rectangleView} />
      <Pressable
        style={[styles.groupPressable, styles.mt18]}
        onPress={() => navigation.navigate("Account3")}
      >
        <View style={styles.groupView1}>
          <View style={styles.groupView}>
            <Image
              style={styles.iconIonicIosArrowForward}
              resizeMode="cover"
              source={require("../assets/icon-ioniciosarrowforward.png")}
            />
          </View>
          <Text style={styles.sendMoney}>Send Money</Text>
        </View>
      </Pressable>
      <Text style={[styles.hello, styles.mt24, styles.ml25]}>Recent</Text>
      <Text style={[styles.hello1, styles.mt24, styles.ml25]}>Contacts</Text>
      <View style={[styles.groupView2, styles.mt60]}>
        <Image
          style={styles.iconAwesomeSearch}
          resizeMode="cover"
          source={require("../assets/icon-awesomesearch.png")}
        />
        <Image
          style={styles.iconMaterialKeyboardVoice}
          resizeMode="cover"
          source={require("../assets/icon-materialkeyboardvoice.png")}
        />
      </View>
      <View style={[styles.rectangle, styles.mt12, styles.ml25]} />
      <View style={[styles.groupView3, styles.mt_54, styles.ml36]}>
        <Text style={styles.hello2}>Konopelski Mitchel</Text>
        <Text style={styles.hello3}>+440123456789</Text>
        <Image
          style={styles.groupIcon}
          resizeMode="cover"
          source={require("../assets/group-303373.png")}
        />
      </View>
      <View style={[styles.rectangle1, styles.mt21, styles.ml25]} />
      <View style={[styles.groupView4, styles.mt_54, styles.ml36]}>
        <Text style={styles.hello4}>Bogan Hubert</Text>
        <Text style={styles.hello5}>+440123456789</Text>
        <Image
          style={styles.groupIcon1}
          resizeMode="cover"
          source={require("../assets/group-303374.png")}
        />
      </View>
      <View style={[styles.rectangle2, styles.mt21, styles.ml25]} />
      <View style={[styles.groupView5, styles.mt_54, styles.ml36]}>
        <Text style={styles.hello6}>Fisher Judy</Text>
        <Text style={styles.hello7}>+440123456789</Text>
        <Image
          style={styles.groupIcon2}
          resizeMode="cover"
          source={require("../assets/group-303375.png")}
        />
      </View>
      <View style={[styles.homeIndicator, styles.mt187, styles.ml121]} />
      <View style={[styles.groupView6, styles.mt_42]}>
        <Image
          style={styles.iconAwesomeSearch1}
          resizeMode="cover"
          source={require("../assets/icon-awesomesearch.png")}
        />
        <Image
          style={styles.iconMaterialKeyboardVoice1}
          resizeMode="cover"
          source={require("../assets/icon-materialkeyboardvoice.png")}
        />
      </View>
      <View style={[styles.lineView, styles.mt_739, styles.ml161]} />
      <Image
        style={[styles.groupIcon3, styles.mt12, styles.ml25]}
        resizeMode="cover"
        source={require("../assets/group-30456.png")}
      />
      <View style={[styles.statusBarBlack, styles.mt_812]}>
        <View style={styles.rectangle3} />
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
      <View style={[styles.groupView8, styles.mt12, styles.ml25]}>
        <Image
          style={styles.groupIcon4}
          resizeMode="cover"
          source={require("../assets/group-30474.png")}
        />
        <Pressable
          style={styles.groupPressable1}
          onPress={() => navigation.navigate("SendContact")}
        >
          <View style={styles.groupView7}>
            <Text style={styles.hello8}>Pay</Text>
          </View>
        </Pressable>
        <Pressable
          style={styles.groupPressable2}
          onPress={() => navigation.navigate("RequestContact")}
        >
          <Text style={styles.hello9}>Request</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mt18: {
    marginTop: 18,
  },
  mt24: {
    marginTop: 24,
  },
  ml25: {
    marginLeft: 25,
  },
  mt60: {
    marginTop: 60,
  },
  mt12: {
    marginTop: 12,
  },
  mt_54: {
    marginTop: -54,
  },
  ml36: {
    marginLeft: 36,
  },
  mt21: {
    marginTop: 21,
  },
  mt187: {
    marginTop: 187,
  },
  ml121: {
    marginLeft: 121,
  },
  mt_42: {
    marginTop: -42,
  },
  mt_739: {
    marginTop: -739,
  },
  ml161: {
    marginLeft: 161,
  },
  mt_812: {
    marginTop: -812,
  },
  rectangleView: {
    position: "relative",
    backgroundColor: "#f6f5f8",
    width: 375,
    height: 812,
  },
  iconIonicIosArrowForward: {
    position: "absolute",
    marginTop: -3.73,
    top: "50%",
    left: 1,
    width: 11,
    height: 6,
  },
  groupView: {
    position: "absolute",
    top: 11,
    right: 18,
    left: 24,
    backgroundColor: "#fff",
    height: 27,
  },
  sendMoney: {
    position: "absolute",
    marginLeft: -58.5,
    top: 30,
    left: "50%",
    fontSize: 20,
    fontWeight: "700",
    fontFamily: "Typo Grotesk",
    color: "#00003d",
    textAlign: "left",
  },
  groupView1: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    backgroundColor: "#fff",
    shadowColor: "rgba(1, 1, 253, 0.1)",
    shadowOffset: {
      width: 0,
      height: -3,
    },
    shadowRadius: 20,
    elevation: 20,
    shadowOpacity: 1,
  },
  groupPressable: {
    position: "relative",
    width: 375,
    height: 750,
  },
  hello: {
    position: "relative",
    fontSize: 14,
    fontFamily: "Helvetica",
    color: "#999",
    textAlign: "left",
  },
  hello1: {
    position: "relative",
    fontSize: 14,
    fontFamily: "Helvetica",
    color: "#999",
    textAlign: "left",
  },
  iconAwesomeSearch: {
    position: "absolute",
    marginTop: -9.35,
    top: "50%",
    left: 14,
    width: 19,
    height: 19,
  },
  iconMaterialKeyboardVoice: {
    position: "absolute",
    marginTop: -9.35,
    top: "50%",
    right: 16,
    width: 14,
    height: 19,
  },
  groupView2: {
    position: "relative",
    borderRadius: 21,
    backgroundColor: "#f6f6f6",
    width: 327,
    height: 42,
    alignSelf: "center",
  },
  rectangle: {
    position: "relative",
    borderRadius: 20,
    backgroundColor: "#f6f5f8",
    width: 326,
    height: 64,
  },
  hello2: {
    position: "absolute",
    top: 3,
    right: -1,
    fontSize: 14,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#00003d",
    textAlign: "left",
  },
  hello3: {
    position: "absolute",
    right: 25,
    bottom: 6,
    fontSize: 14,
    fontFamily: "Helvetica",
    color: "#999",
    textAlign: "left",
  },
  groupIcon: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    maxHeight: "100%",
    width: 45,
  },
  groupView3: {
    position: "relative",
    width: 187,
    height: 45,
  },
  rectangle1: {
    position: "relative",
    borderRadius: 20,
    backgroundColor: "#f6f5f8",
    width: 326,
    height: 64,
  },
  hello4: {
    position: "absolute",
    top: 3,
    right: 8,
    fontSize: 14,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#00003d",
    textAlign: "left",
  },
  hello5: {
    position: "absolute",
    right: -1,
    bottom: 6,
    fontSize: 14,
    fontFamily: "Helvetica",
    color: "#999",
    textAlign: "left",
  },
  groupIcon1: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    maxHeight: "100%",
    width: 45,
  },
  groupView4: {
    position: "relative",
    width: 161,
    height: 45,
  },
  rectangle2: {
    position: "relative",
    borderRadius: 20,
    backgroundColor: "#f6f5f8",
    width: 326,
    height: 64,
  },
  hello6: {
    position: "absolute",
    top: 3,
    right: 22,
    fontSize: 14,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#00003d",
    textAlign: "left",
  },
  hello7: {
    position: "absolute",
    right: -1,
    bottom: 6,
    fontSize: 14,
    fontFamily: "Helvetica",
    color: "#999",
    textAlign: "left",
  },
  groupIcon2: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    maxHeight: "100%",
    width: 45,
  },
  groupView5: {
    position: "relative",
    width: 161,
    height: 45,
  },
  homeIndicator: {
    position: "relative",
    borderRadius: 100,
    backgroundColor: "#000",
    width: 134,
    height: 5,
  },
  iconAwesomeSearch1: {
    position: "absolute",
    marginTop: -9.35,
    top: "50%",
    left: 14,
    width: 19,
    height: 19,
  },
  iconMaterialKeyboardVoice1: {
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
    width: 327,
    height: 42,
    alignSelf: "center",
  },
  lineView: {
    position: "relative",
    borderStyle: "solid",
    borderColor: "#707070",
    borderTopWidth: 3,
    width: 52,
    height: 6,
  },
  groupIcon3: {
    position: "relative",
    width: 385,
    height: 45,
  },
  rectangle3: {
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
  groupIcon4: {
    position: "absolute",
    marginLeft: -22,
    bottom: 9,
    left: "50%",
    width: 45,
    height: 45,
  },
  hello8: {
    position: "absolute",
    marginTop: -6,
    marginLeft: 18.5,
    top: "50%",
    left: "50%",
    fontSize: 14,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#00003d",
    textAlign: "left",
  },
  groupView7: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: 14,
    backgroundColor: "#f6f5f8",
  },
  groupPressable1: {
    position: "absolute",
    top: 2,
    right: 10,
    bottom: 4,
    width: 127,
  },
  hello9: {
    position: "absolute",
    marginTop: -7,
    top: "50%",
    left: 1,
    fontSize: 14,
    fontFamily: "Helvetica",
    color: "#999",
    textAlign: "left",
  },
  groupPressable2: {
    position: "absolute",
    top: 2,
    bottom: 2,
    left: 10,
    borderRadius: 22,
    backgroundColor: "#f6f5f8",
    width: 107,
  },
  groupView8: {
    position: "relative",
    borderRadius: 20,
    backgroundColor: "#f6f5f8",
    width: 326,
    height: 64,
  },
  sendMoney1: {
    position: "relative",
    backgroundColor: "#4b4b4b",
    flex: 1,
    width: "100%",
    flexDirection: "column",
    alignItems: "flex-start",
  },
});

export default SendMoney;
