import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const ReplaceCard = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.replaceCard}>
      <View style={styles.rectangleView} />
      <Text style={[styles.hello, styles.mt11, styles.mr200]}>
        Replace card
      </Text>
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
        style={[styles.groupPressable, styles.mt12, styles.mr24]}
        onPress={() => navigation.navigate("ItWasLost")}
      >
        <View style={styles.rectangleView5} />
        <View style={styles.groupView}>
          <Text style={styles.itWasLost}>It was lost</Text>
        </View>
      </Pressable>
      <Pressable
        style={[styles.groupPressable1, styles.mt19, styles.mr24]}
        onPress={() => navigation.navigate("IWasAVictimOfFraudOrTheft")}
      >
        <View style={styles.rectangleView6} />
        <View style={styles.groupView1}>
          <Text style={styles.iWasAVictimOfFraudOrThe}>
            I was a victim of fraud or theft
          </Text>
        </View>
      </Pressable>
      <Pressable
        style={[styles.groupPressable2, styles.mt19, styles.mr24]}
        onPress={() => navigation.navigate("ItsDamagedOrDoesntWork")}
      >
        <View style={styles.rectangleView7} />
        <View style={styles.groupView2}>
          <Text style={styles.itsDamagedOrDoesntWork}>
            It’s damaged or doesn’t work
          </Text>
        </View>
      </Pressable>
      <Pressable
        style={[styles.groupPressable3, styles.mt2]}
        onPress={() => navigation.navigate("MyCards")}
      >
        <Image
          style={styles.iconFeatherArrowLeft}
          resizeMode="cover"
          source={require("../assets/icon-featherarrowleft.png")}
        />
      </Pressable>
      <View style={[styles.homeIndicator, styles.mt407, styles.mr120]} />
      <Text style={[styles.hello1, styles.mt22, styles.mr219]}>
        Select the best option:
      </Text>
      <Image
        style={[styles.iconFeatherChevronRight, styles.mt_28, styles.mr42]}
        resizeMode="cover"
        source={require("../assets/icon-featherchevronright.png")}
      />
      <Image
        style={[styles.iconFeatherChevronRight1, styles.mt_28, styles.mr42]}
        resizeMode="cover"
        source={require("../assets/icon-featherchevronright.png")}
      />
      <Image
        style={[styles.iconFeatherChevronRight2, styles.mt_28, styles.mr42]}
        resizeMode="cover"
        source={require("../assets/icon-featherchevronright.png")}
      />
      <View style={[styles.groupView4, styles.mt21, styles.mr24]}>
        <View style={styles.rectangleView8} />
        <View style={styles.groupView3}>
          <Text style={styles.carbonyteStandard7761Mast}>
            <Text style={styles.carbonyteStandard7761}>
              <Text style={styles.carbonyteStandard}>
                Carbonyte Standard - 7761
              </Text>
            </Text>
            <Text style={styles.mastercard1}>
              <Text style={styles.mastercard}>Mastercard</Text>
            </Text>
          </Text>
          <Image
            style={styles.iconFeatherCreditCard}
            resizeMode="cover"
            source={require("../assets/icon-feathercreditcard.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mt11: {
    marginTop: 11,
  },
  mr200: {
    marginRight: 200,
  },
  mt_815: {
    marginTop: -815,
  },
  mt12: {
    marginTop: 12,
  },
  mr24: {
    marginRight: 24,
  },
  mt19: {
    marginTop: 19,
  },
  mt2: {
    marginTop: 2,
  },
  mt407: {
    marginTop: 407,
  },
  mr120: {
    marginRight: 120,
  },
  mt22: {
    marginTop: 22,
  },
  mr219: {
    marginRight: 219,
  },
  mt_28: {
    marginTop: -28,
  },
  mr42: {
    marginRight: 42,
  },
  mt21: {
    marginTop: 21,
  },
  rectangleView: {
    position: "relative",
    backgroundColor: "#f6f5f8",
    width: 375,
    height: 815,
  },
  hello: {
    position: "relative",
    fontSize: 25,
    fontWeight: "700",
    fontFamily: "Typo Grotesk",
    color: "#00003d",
    textAlign: "left",
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
    marginTop: -21.5,
    top: "50%",
    right: 0,
    left: 0,
    borderRadius: 14,
    backgroundColor: "#e8e8e8",
    height: 43,
  },
  itWasLost: {
    position: "absolute",
    marginTop: -7,
    top: "50%",
    left: 0,
    fontSize: 12,
    lineHeight: 14,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#2b2b2b",
    textAlign: "left",
    width: 257,
  },
  groupView: {
    position: "absolute",
    marginTop: -7.5,
    top: "50%",
    right: 46,
    left: 24,
    height: 14,
  },
  groupPressable: {
    position: "relative",
    width: 326,
    height: 43,
  },
  rectangleView6: {
    position: "absolute",
    marginTop: -21.5,
    top: "50%",
    right: 0,
    left: 0,
    borderRadius: 14,
    backgroundColor: "#e8e8e8",
    height: 43,
  },
  iWasAVictimOfFraudOrThe: {
    position: "absolute",
    marginTop: -7,
    top: "50%",
    left: 0,
    fontSize: 12,
    lineHeight: 14,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#2b2b2b",
    textAlign: "left",
    width: 257,
  },
  groupView1: {
    position: "absolute",
    marginTop: -7.5,
    top: "50%",
    right: 46,
    left: 24,
    height: 14,
  },
  groupPressable1: {
    position: "relative",
    width: 326,
    height: 43,
  },
  rectangleView7: {
    position: "absolute",
    marginTop: -21.5,
    top: "50%",
    right: 0,
    left: 0,
    borderRadius: 14,
    backgroundColor: "#e8e8e8",
    height: 43,
  },
  itsDamagedOrDoesntWork: {
    position: "absolute",
    marginTop: -7,
    top: "50%",
    left: 0,
    fontSize: 12,
    lineHeight: 14,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#2b2b2b",
    textAlign: "left",
    width: 257,
  },
  groupView2: {
    position: "absolute",
    marginTop: -7.5,
    top: "50%",
    right: 46,
    left: 24,
    height: 14,
  },
  groupPressable2: {
    position: "relative",
    width: 326,
    height: 43,
  },
  iconFeatherArrowLeft: {
    position: "absolute",
    marginLeft: -0.5,
    bottom: 4,
    left: "50%",
    width: 17,
    height: 17,
  },
  groupPressable3: {
    position: "relative",
    backgroundColor: "#f6f5f8",
    width: 55,
    height: 45,
    alignSelf: "flex-start",
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
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#888",
    textAlign: "left",
  },
  iconFeatherChevronRight: {
    position: "relative",
    width: 8,
    height: 14,
  },
  iconFeatherChevronRight1: {
    position: "relative",
    width: 8,
    height: 14,
  },
  iconFeatherChevronRight2: {
    position: "relative",
    width: 8,
    height: 14,
  },
  rectangleView8: {
    position: "absolute",
    marginTop: -31.5,
    top: "50%",
    right: 0,
    left: 0,
    borderRadius: 18,
    backgroundColor: "#fff",
    height: 63,
  },
  carbonyteStandard: {
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#272727",
  },
  carbonyteStandard7761: {
    margin: 0,
  },
  mastercard: {
    fontFamily: "Helvetica",
    color: "#888",
  },
  mastercard1: {
    margin: 0,
  },
  carbonyteStandard7761Mast: {
    position: "absolute",
    marginTop: -17,
    top: "50%",
    left: 38,
    fontSize: 14,
    lineHeight: 18,
    textAlign: "left",
    width: 257,
  },
  iconFeatherCreditCard: {
    position: "absolute",
    top: 4,
    left: 0,
    width: 29,
    height: 21,
  },
  groupView3: {
    position: "absolute",
    marginTop: -15.5,
    top: "50%",
    right: 18,
    left: 14,
    height: 34,
  },
  groupView4: {
    position: "relative",
    width: 326,
    height: 63,
  },
  replaceCard: {
    position: "relative",
    backgroundColor: "#4b4b4b",
    flex: 1,
    width: "100%",
    flexDirection: "column",
    alignItems: "flex-end",
  },
});

export default ReplaceCard;
