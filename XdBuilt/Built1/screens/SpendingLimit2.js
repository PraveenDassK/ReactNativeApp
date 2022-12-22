import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const SpendingLimit2 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.spendingLimit2}>
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
      <View style={[styles.groupView1, styles.mt63, styles.ml1]}>
        <View style={styles.rectangleView5} />
        <View style={styles.groupView}>
          <Text style={styles.cardSpendingLimitTheSpend}>
            <Text style={styles.cardSpendingLimit1}>
              <Text style={styles.cardSpendingLimit}>Card spending limit</Text>
            </Text>
            <Text style={styles.theSpendWithdrawalCap}>
              <Text
                style={styles.theSpend}
              >{`The spend & withdrawal cap`}</Text>
            </Text>
          </Text>
          <Image
            style={styles.meter1Icon}
            resizeMode="cover"
            source={require("../assets/meter-14.png")}
          />
        </View>
        <View style={styles.component22415}>
          <View style={styles.rectangleView6} />
          <Image
            style={styles.ellipseIcon}
            resizeMode="cover"
            source={require("../assets/ellipse-350.png")}
          />
        </View>
        <Image
          style={styles.groupIcon}
          resizeMode="cover"
          source={require("../assets/group-275792.png")}
        />
      </View>
      <Pressable
        style={[styles.groupPressable, styles.mt2]}
        onPress={() => navigation.navigate("Account")}
      >
        <Image
          style={styles.iconFeatherArrowLeft}
          resizeMode="cover"
          source={require("../assets/icon-featherarrowleft.png")}
        />
      </Pressable>
      <Text style={[styles.hello, styles.mt_159, styles.ml1]}>£22.33</Text>
      <Text style={[styles.hello1, styles.mt7, styles.ml1]}>
        Spent this month
      </Text>
      <Text style={[styles.hello2, styles.mt10, styles.ml2]}>
        <Text style={styles.limitIs100}>{`Limit is £100. `}</Text>
        <Text style={styles.changeLimit}>Change limit</Text>
      </Text>
      <View style={[styles.homeIndicator, styles.mt209, styles.ml1]} />
      <Image
        style={[styles.cardIcon, styles.mt62, styles.ml1]}
        resizeMode="cover"
        source={require("../assets/card.png")}
      />
      <Text style={[styles.hello3, styles.mt10, styles.mr142]}>
        Spending limit
      </Text>
      <Text
        style={[styles.theLimitDeterminesTheAmoun, styles.mt13, styles.mr4]}
      >
        The limit determines the amount that can be spent or withdrawn using
        this card per month
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mt_815: {
    marginTop: -815,
  },
  mt63: {
    marginTop: 63,
  },
  ml1: {
    marginLeft: 1,
  },
  mt2: {
    marginTop: 2,
  },
  mt_159: {
    marginTop: -159,
  },
  mt7: {
    marginTop: 7,
  },
  mt10: {
    marginTop: 10,
  },
  ml2: {
    marginLeft: 2,
  },
  mt209: {
    marginTop: 209,
  },
  mt62: {
    marginTop: 62,
  },
  mr142: {
    marginRight: 142,
  },
  mt13: {
    marginTop: 13,
  },
  mr4: {
    marginRight: 4,
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
  rectangleView5: {
    position: "absolute",
    marginTop: -181,
    top: "50%",
    right: 0,
    left: 0,
    borderRadius: 21,
    backgroundColor: "#fff",
    height: 362,
  },
  cardSpendingLimit: {
    fontSize: 14,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#272727",
  },
  cardSpendingLimit1: {
    margin: 0,
  },
  theSpend: {
    fontSize: 10,
    fontFamily: "Helvetica",
    color: "#888",
  },
  theSpendWithdrawalCap: {
    margin: 0,
  },
  cardSpendingLimitTheSpend: {
    position: "absolute",
    marginTop: -16.5,
    top: "50%",
    left: 27,
    lineHeight: 18,
    textAlign: "left",
    width: 257,
  },
  meter1Icon: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 17,
    height: 17,
  },
  groupView: {
    position: "absolute",
    top: 20,
    right: 22,
    left: 21,
    height: 33,
  },
  rectangleView6: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: 13,
    backgroundColor: "#0101fd",
  },
  ellipseIcon: {
    position: "absolute",
    height: "76.92%",
    width: "43.48%",
    top: "11.54%",
    right: "6.52%",
    bottom: "11.54%",
    left: "50%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  component22415: {
    position: "absolute",
    top: 23,
    right: 22,
    width: 46,
    height: 26,
  },
  groupIcon: {
    position: "absolute",
    marginTop: -80.03,
    top: "50%",
    right: 49,
    left: 48,
    maxWidth: "100%",
    overflow: "hidden",
    height: 180,
  },
  groupView1: {
    position: "relative",
    width: 326,
    height: 362,
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
  hello: {
    position: "relative",
    fontSize: 25,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#999",
    textAlign: "left",
  },
  hello1: {
    position: "relative",
    fontSize: 14,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#999",
    textAlign: "left",
  },
  limitIs100: {
    color: "#999",
  },
  changeLimit: {
    color: "#0101fd",
  },
  hello2: {
    position: "relative",
    fontSize: 10,
    fontFamily: "Helvetica",
    textAlign: "left",
  },
  homeIndicator: {
    position: "relative",
    borderRadius: 100,
    backgroundColor: "#000",
    width: 134,
    height: 5,
  },
  cardIcon: {
    position: "relative",
    width: 12,
    height: 9,
  },
  hello3: {
    position: "relative",
    fontSize: 26,
    fontWeight: "700",
    fontFamily: "Typo Grotesk",
    color: "#00003d",
    textAlign: "left",
  },
  theLimitDeterminesTheAmoun: {
    position: "relative",
    fontSize: 14,
    lineHeight: 16,
    fontFamily: "Helvetica",
    color: "#888",
    textAlign: "left",
    width: 316,
  },
  spendingLimit2: {
    position: "relative",
    backgroundColor: "#4b4b4b",
    flex: 1,
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
  },
});

export default SpendingLimit2;
