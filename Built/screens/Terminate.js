import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Terminate = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.terminate}>
      <View style={styles.rectangleView} />
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
      <Pressable
        style={[styles.groupPressable, styles.mt2]}
        onPress={() => navigation.navigate("CardSettings")}
      >
        <Image
          style={styles.iconFeatherArrowLeft}
          resizeMode="cover"
          source={require("../assets/icon-featherarrowleft.png")}
        />
      </Pressable>
      <View style={[styles.homeIndicator, styles.mt274, styles.ml121]} />
      <View style={[styles.groupView4, styles.mt191, styles.ml27]}>
        <Text style={styles.hello}>
          <Text style={styles.areYouSure}>Are you sure you want to</Text>
          <Text style={styles.terminateYourCard}>terminate your card?</Text>
        </Text>
        <View style={styles.groupView1}>
          <View style={styles.component208115}>
            <View style={styles.groupView}>
              <View style={styles.rectangleView5} />
              <View style={styles.maskGroup236} />
            </View>
          </View>
          <Text style={styles.hello1}>No</Text>
        </View>
        <View style={styles.groupView3}>
          <Pressable
            style={styles.component208116}
            onPress={() => navigation.navigate("TerminatedCard")}
          >
            <View style={styles.groupView2}>
              <View style={styles.rectangleView6} />
              <View style={styles.maskGroup2361} />
            </View>
          </Pressable>
          <Text style={styles.hello2}>Yes</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mt_815: {
    marginTop: -815,
  },
  mt2: {
    marginTop: 2,
  },
  mt274: {
    marginTop: 274,
  },
  ml121: {
    marginLeft: 121,
  },
  mt191: {
    marginTop: 191,
  },
  ml27: {
    marginLeft: 27,
  },
  rectangleView: {
    position: "relative",
    backgroundColor: "#f6f5f8",
    width: 375,
    height: 815,
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
  },
  homeIndicator: {
    position: "relative",
    borderRadius: 100,
    backgroundColor: "#000",
    width: 134,
    height: 5,
  },
  areYouSure: {
    margin: 0,
  },
  terminateYourCard: {
    margin: 0,
  },
  hello: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 25,
    lineHeight: 30,
    fontWeight: "700",
    fontFamily: "Typo Grotesk",
    color: "#00003d",
    textAlign: "left",
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
  groupView: {
    position: "absolute",
    marginTop: -30,
    top: "50%",
    right: 0,
    left: 0,
    height: 60,
  },
  component208115: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  hello1: {
    position: "absolute",
    top: "35%",
    left: "42.47%",
    fontSize: 15,
    lineHeight: 17,
    textTransform: "uppercase",
    fontFamily: "Helvetica",
    color: "#fff",
    textAlign: "center",
  },
  groupView1: {
    position: "absolute",
    marginLeft: -70.5,
    bottom: 0,
    left: "50%",
    width: 146,
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
    backgroundColor: "#fff",
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
  groupView2: {
    position: "absolute",
    marginTop: -30,
    top: "50%",
    right: 0,
    left: 0,
    height: 60,
  },
  component208116: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  hello2: {
    position: "absolute",
    top: "35%",
    left: "39.73%",
    fontSize: 15,
    lineHeight: 17,
    textTransform: "uppercase",
    fontFamily: "Helvetica",
    color: "#0101fd",
    textAlign: "center",
  },
  groupView3: {
    position: "absolute",
    marginTop: -17.5,
    marginLeft: -70.5,
    top: "50%",
    left: "50%",
    width: 146,
    height: 60,
  },
  groupView4: {
    position: "relative",
    width: 295,
    height: 243,
  },
  terminate: {
    position: "relative",
    backgroundColor: "#4b4b4b",
    flex: 1,
    width: "100%",
    flexDirection: "column",
    alignItems: "flex-start",
  },
});

export default Terminate;
