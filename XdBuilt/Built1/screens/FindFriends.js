import * as React from "react";
import { StyleSheet, View, Image, Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

const FindFriends = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.findFriends}>
      <View style={styles.rectangleView} />
      <Pressable
        style={styles.groupPressable}
        onPress={() => navigation.navigate("Account3")}
      >
        <Image
          style={styles.iconFeatherArrowLeft}
          resizeMode="cover"
          source={require("../assets/icon-featherarrowleft.png")}
        />
      </Pressable>
      <View style={[styles.homeIndicator, styles.mt268, styles.ml121]} />
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
      <View style={[styles.groupView2, styles.mt12, styles.ml25]}>
        <Text style={styles.hello}>Find your friends</Text>
        <Text style={styles.hello1}>
          <Text style={styles.allowAccessTo}>
            Allow access to contacts to send and request
          </Text>
          <Text style={styles.moneyFromYour}>
            money from your friends more easily, split bills
          </Text>
          <Text style={styles.andMuchMore}>and much more.</Text>
        </Text>
        <Pressable
          style={styles.groupPressable1}
          onPress={() => navigation.navigate("Account3")}
        >
          <View style={styles.component20817}>
            <View style={styles.groupView}>
              <View style={styles.rectangleView5} />
              <View style={styles.maskGroup236} />
            </View>
          </View>
          <Text style={styles.hello2}>Allow Access</Text>
        </Pressable>
        <Pressable
          style={styles.groupPressable2}
          onPress={() => navigation.navigate("Account3")}
        >
          <View style={styles.component20818}>
            <View style={styles.groupView1}>
              <View style={styles.rectangleView6} />
              <View style={styles.maskGroup2361} />
            </View>
          </View>
          <Text style={styles.hello3}>Not Now</Text>
        </Pressable>
      </View>
      <Image
        style={[styles.groupIcon, styles.mt_480]}
        resizeMode="cover"
        source={require("../assets/group-30777.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mt268: {
    marginTop: 268,
  },
  ml121: {
    marginLeft: 121,
  },
  mt_812: {
    marginTop: -812,
  },
  mt12: {
    marginTop: 12,
  },
  ml25: {
    marginLeft: 25,
  },
  mt_480: {
    marginTop: -480,
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
  hello: {
    position: "absolute",
    top: 0,
    left: 2,
    fontSize: 26,
    lineHeight: 30,
    fontWeight: "700",
    fontFamily: "Typo Grotesk",
    color: "#00003d",
    textAlign: "left",
  },
  allowAccessTo: {
    margin: 0,
  },
  moneyFromYour: {
    margin: 0,
  },
  andMuchMore: {
    margin: 0,
  },
  hello1: {
    position: "absolute",
    marginTop: -280.52,
    top: "50%",
    left: 3,
    fontSize: 14,
    lineHeight: 20,
    fontFamily: "Helvetica",
    color: "#999",
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
  component20817: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  hello2: {
    position: "absolute",
    top: "36.67%",
    left: "31.9%",
    fontSize: 15,
    lineHeight: 17,
    textTransform: "uppercase",
    fontFamily: "Helvetica",
    color: "#fff",
    textAlign: "left",
  },
  groupPressable1: {
    position: "absolute",
    right: 0,
    bottom: 76,
    left: 0,
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
    backgroundColor: "#999",
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
  groupView1: {
    position: "absolute",
    marginTop: -30,
    top: "50%",
    right: 0,
    left: 0,
    height: 60,
  },
  component20818: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  hello3: {
    position: "absolute",
    top: "35%",
    left: "38.96%",
    fontSize: 15,
    lineHeight: 17,
    textTransform: "uppercase",
    fontFamily: "Helvetica",
    color: "#fff",
    textAlign: "left",
  },
  groupPressable2: {
    position: "absolute",
    right: 0,
    bottom: 0,
    left: 0,
    height: 60,
  },
  groupView2: {
    position: "relative",
    width: 326,
    height: 660,
  },
  groupIcon: {
    position: "relative",
    width: 283,
    height: 249,
    alignSelf: "center",
  },
  findFriends: {
    position: "relative",
    backgroundColor: "#4b4b4b",
    flex: 1,
    width: "100%",
    flexDirection: "column",
    alignItems: "flex-start",
  },
});

export default FindFriends;
