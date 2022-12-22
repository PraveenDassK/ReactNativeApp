import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Requested = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.requested}
      onPress={() => navigation.navigate("SendMoney")}
    >
      <View style={styles.groupView1}>
        <View style={styles.groupView}>
          <View style={styles.rectangleView} />
          <View style={styles.rectangleView1} />
        </View>
      </View>
      <View style={[styles.lineView, styles.mt28_5, styles.mr2]} />
      <Text style={[styles.hello, styles.mt30_5]}>
        <Text style={styles.youHaveRequested}>You have requested £500</Text>
        <Text style={styles.fromHudsonMaia}>from Hudson Maia</Text>
      </Text>
      <Image
        style={[styles.iconAwesomeCheckCircle, styles.mt220_5]}
        resizeMode="cover"
        source={require("../assets/icon-awesomecheckcircle.png")}
      />
      <View style={[styles.statusBarBlack, styles.mt_811_5]}>
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
      <View style={[styles.homeIndicator, styles.mt17_5, styles.ml1]} />
      <Text style={[styles.hello1, styles.mt204_5, styles.ml1]}>
        Tap anywhere to continue
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  mt28_5: {
    marginTop: 28.5,
  },
  mr2: {
    marginRight: 2,
  },
  mt30_5: {
    marginTop: 30.5,
  },
  mt220_5: {
    marginTop: 220.5,
  },
  mt_811_5: {
    marginTop: -811.5,
  },
  mt17_5: {
    marginTop: 17.5,
  },
  ml1: {
    marginLeft: 1,
  },
  mt204_5: {
    marginTop: 204.5,
  },
  rectangleView: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 172,
    left: 0,
    backgroundColor: "#f6f5f8",
  },
  rectangleView1: {
    position: "absolute",
    top: 63,
    right: 0,
    bottom: 0,
    left: 0,
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
  },
  groupView: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  groupView1: {
    position: "relative",
    width: 375,
    height: 812,
  },
  lineView: {
    position: "relative",
    borderStyle: "solid",
    borderColor: "#707070",
    borderTopWidth: 3,
    width: 52,
    height: 6,
  },
  youHaveRequested: {
    margin: 0,
  },
  fromHudsonMaia: {
    margin: 0,
  },
  hello: {
    position: "relative",
    fontSize: 20,
    lineHeight: 24,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#00003d",
    textAlign: "center",
  },
  iconAwesomeCheckCircle: {
    position: "relative",
    width: 188,
    height: 188,
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
  homeIndicator: {
    position: "relative",
    borderRadius: 100,
    backgroundColor: "#000",
    width: 134,
    height: 5,
  },
  hello1: {
    position: "relative",
    fontSize: 12,
    fontFamily: "Helvetica",
    color: "#999",
    textAlign: "center",
  },
  requested: {
    position: "relative",
    backgroundColor: "#4b4b4b",
    flex: 1,
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
  },
});

export default Requested;
