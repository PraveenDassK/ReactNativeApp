import * as React from "react";
import { StyleSheet, View, Pressable, Image, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

const AddFundsSuccess = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.addFundsSuccess}>
      <Pressable
        style={styles.groupPressable}
        onPress={() => navigation.navigate("Account3")}
      >
        <View style={styles.homeIndicator} />
      </Pressable>
      <Image
        style={[styles.iconAwesomeCheckCircle, styles.mt230_5, styles.ml1]}
        resizeMode="cover"
        source={require("../assets/icon-awesomecheckcircle3.png")}
      />
      <Text style={[styles.hello, styles.mt35_5, styles.ml1]}>
        <Text style={styles.congratulations1}>
          <Text style={styles.congratulations}>Congratulations!</Text>
        </Text>
        <Text style={styles.blankLine1}>
          <Text style={styles.blankLine}> </Text>
        </Text>
        <Text style={styles.added1}>
          <Text style={styles.added}>{`£500.00 added `}</Text>
        </Text>
        <Text style={styles.successfully1}>
          <Text style={styles.successfully}>successfully</Text>
        </Text>
      </Text>
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
            <View style={styles.rectangleView} />
            <View style={styles.rectangleView1} />
            <View style={styles.rectangleView2} />
            <View style={styles.rectangleView3} />
          </View>
        </View>
      </View>
      <Text style={[styles.hello1, styles.mt183_5, styles.ml1]}>
        Tap anywhere to continue
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mt230_5: {
    marginTop: 230.5,
  },
  ml1: {
    marginLeft: 1,
  },
  mt35_5: {
    marginTop: 35.5,
  },
  mt_811_5: {
    marginTop: -811.5,
  },
  mt183_5: {
    marginTop: 183.5,
  },
  homeIndicator: {
    position: "absolute",
    marginTop: 393,
    top: "50%",
    right: 120,
    left: 121,
    borderRadius: 100,
    backgroundColor: "#000",
    height: 5,
  },
  groupPressable: {
    position: "relative",
    backgroundColor: "#f6f5f8",
    width: 375,
    height: 812,
  },
  iconAwesomeCheckCircle: {
    position: "relative",
    width: 181,
    height: 181,
  },
  congratulations: {
    fontWeight: "700",
    fontFamily: "Helvetica",
  },
  congratulations1: {
    margin: 0,
  },
  blankLine: {
    fontWeight: "700",
    fontFamily: "Helvetica",
  },
  blankLine1: {
    margin: 0,
  },
  added: {
    fontFamily: "Helvetica",
  },
  added1: {
    margin: 0,
  },
  successfully: {
    fontFamily: "Helvetica",
  },
  successfully1: {
    margin: 0,
  },
  hello: {
    position: "relative",
    fontSize: 20,
    lineHeight: 24,
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
  hello1: {
    position: "relative",
    fontSize: 12,
    fontFamily: "Helvetica",
    color: "#999",
    textAlign: "center",
  },
  addFundsSuccess: {
    position: "relative",
    backgroundColor: "#4b4b4b",
    flex: 1,
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
  },
});

export default AddFundsSuccess;
