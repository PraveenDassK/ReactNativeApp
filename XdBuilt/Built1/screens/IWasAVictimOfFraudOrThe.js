import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const IWasAVictimOfFraudOrThe = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.iWasAVictimOfFraudOrThe}>
      <View style={styles.rectangleView} />
      <Text style={[styles.hello, styles.mt11, styles.ml27]}>
        <Text style={styles.iWasA}>I was a victim of fraud or</Text>
        <Text style={styles.theft}>theft</Text>
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
        style={[styles.groupPressable, styles.mt2]}
        onPress={() => navigation.navigate("ReplaceCard")}
      >
        <Image
          style={styles.iconFeatherArrowLeft}
          resizeMode="cover"
          source={require("../assets/icon-featherarrowleft.png")}
        />
      </Pressable>
      <View style={[styles.homeIndicator, styles.mt20, styles.ml121]} />
      <View style={[styles.groupView1, styles.mt331, styles.ml25]}>
        <View style={styles.component208113}>
          <View style={styles.groupView}>
            <View style={styles.rectangleView5} />
            <View style={styles.maskGroup236} />
          </View>
        </View>
        <Text style={styles.hello1}>{`Terminate & Order card`}</Text>
      </View>
      <View style={[styles.groupView4, styles.mt14, styles.ml25]}>
        <View style={styles.rectangleView6} />
        <View style={styles.groupView2}>
          <Text style={styles.yourCurrentCardWillBeTerm1}>
            <Text style={styles.yourCurrentCardWillBeTerm}>
              <Text style={styles.yourCurrentCard}>
                Your current card will be terminated
              </Text>
            </Text>
            <Text style={styles.toKeepYourAccountSafe}>
              <Text style={styles.toKeepYour}>To keep your account safe</Text>
            </Text>
          </Text>
        </View>
        <Image
          style={styles.ellipseIcon}
          resizeMode="cover"
          source={require("../assets/ellipse-3260.png")}
        />
        <View style={styles.groupView3}>
          <Text style={styles.text1}>1</Text>
        </View>
      </View>
      <View style={[styles.groupView7, styles.mt10, styles.ml25]}>
        <View style={styles.rectangleView7} />
        <View style={styles.groupView5}>
          <Text style={styles.orderAReplacementCardBelow1}>
            <Text style={styles.orderAReplacementCardBelow}>
              <Text style={styles.orderAReplacement}>
                Order a replacement card below
              </Text>
            </Text>
            <Text style={styles.youMayBeChargedForTheNew}>
              <Text style={styles.youMayBe}>
                You may be charged for the new card
              </Text>
            </Text>
          </Text>
        </View>
        <Image
          style={styles.ellipseIcon1}
          resizeMode="cover"
          source={require("../assets/ellipse-3260.png")}
        />
        <View style={styles.groupView6}>
          <Text style={styles.text2}>2</Text>
        </View>
      </View>
      <View style={[styles.groupView10, styles.mt10, styles.ml25]}>
        <View style={styles.rectangleView8} />
        <View style={styles.groupView8}>
          <Text style={styles.startUsingYourNewCardRigh}>
            Start using your new card right away with Apple Pay
          </Text>
        </View>
        <Image
          style={styles.ellipseIcon2}
          resizeMode="cover"
          source={require("../assets/ellipse-3260.png")}
        />
        <View style={styles.groupView9}>
          <Text style={styles.text3}>3</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mt11: {
    marginTop: 11,
  },
  ml27: {
    marginLeft: 27,
  },
  mt_815: {
    marginTop: -815,
  },
  mt2: {
    marginTop: 2,
  },
  mt20: {
    marginTop: 20,
  },
  ml121: {
    marginLeft: 121,
  },
  mt331: {
    marginTop: 331,
  },
  ml25: {
    marginLeft: 25,
  },
  mt14: {
    marginTop: 14,
  },
  mt10: {
    marginTop: 10,
  },
  rectangleView: {
    position: "relative",
    backgroundColor: "#f6f5f8",
    width: 375,
    height: 815,
  },
  iWasA: {
    margin: 0,
  },
  theft: {
    margin: 0,
  },
  hello: {
    position: "relative",
    fontSize: 25,
    lineHeight: 30,
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
  component208113: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  hello1: {
    position: "absolute",
    top: "35%",
    left: "18.71%",
    fontSize: 15,
    lineHeight: 17,
    textTransform: "uppercase",
    fontFamily: "Helvetica",
    color: "#fff",
    textAlign: "center",
  },
  groupView1: {
    position: "relative",
    width: 326,
    height: 60,
  },
  rectangleView6: {
    position: "absolute",
    marginTop: -31.5,
    top: "50%",
    right: 0,
    left: 0,
    borderRadius: 18,
    backgroundColor: "#fff",
    height: 63,
  },
  yourCurrentCard: {
    fontSize: 12,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#272727",
  },
  yourCurrentCardWillBeTerm: {
    margin: 0,
  },
  toKeepYour: {
    fontSize: 10,
    fontFamily: "Helvetica",
    color: "#888",
  },
  toKeepYourAccountSafe: {
    margin: 0,
  },
  yourCurrentCardWillBeTerm1: {
    position: "absolute",
    marginTop: -13.5,
    top: "50%",
    left: 0,
    lineHeight: 14,
    textAlign: "left",
    width: 257,
  },
  groupView2: {
    position: "absolute",
    marginTop: -11.5,
    top: "50%",
    right: 22,
    left: 48,
    height: 27,
  },
  ellipseIcon: {
    position: "absolute",
    marginTop: -11.5,
    top: "50%",
    left: 16,
    width: 22,
    height: 22,
  },
  text1: {
    position: "absolute",
    marginTop: -7,
    top: "50%",
    left: 0,
    fontSize: 12,
    lineHeight: 14,
    fontFamily: "Helvetica",
    color: "#272727",
    textAlign: "left",
    width: 8,
  },
  groupView3: {
    position: "absolute",
    marginTop: -6.5,
    top: "50%",
    left: 23,
    width: 7,
    height: 14,
  },
  groupView4: {
    position: "relative",
    width: 326,
    height: 63,
  },
  rectangleView7: {
    position: "absolute",
    marginTop: -31.5,
    top: "50%",
    right: 0,
    left: 0,
    borderRadius: 18,
    backgroundColor: "#fff",
    height: 63,
  },
  orderAReplacement: {
    fontSize: 12,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#272727",
  },
  orderAReplacementCardBelow: {
    margin: 0,
  },
  youMayBe: {
    fontSize: 10,
    fontFamily: "Helvetica",
    color: "#888",
  },
  youMayBeChargedForTheNew: {
    margin: 0,
  },
  orderAReplacementCardBelow1: {
    position: "absolute",
    marginTop: -13.5,
    top: "50%",
    left: 0,
    lineHeight: 14,
    textAlign: "left",
    width: 257,
  },
  groupView5: {
    position: "absolute",
    marginTop: -11.5,
    top: "50%",
    right: 22,
    left: 48,
    height: 27,
  },
  ellipseIcon1: {
    position: "absolute",
    marginTop: -11.5,
    top: "50%",
    left: 16,
    width: 22,
    height: 22,
  },
  text2: {
    position: "absolute",
    marginTop: -7,
    top: "50%",
    left: 0,
    fontSize: 12,
    lineHeight: 14,
    fontFamily: "Helvetica",
    color: "#272727",
    textAlign: "left",
    width: 8,
  },
  groupView6: {
    position: "absolute",
    marginTop: -7.5,
    top: "50%",
    left: 24,
    width: 7,
    height: 14,
  },
  groupView7: {
    position: "relative",
    width: 326,
    height: 63,
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
  startUsingYourNewCardRigh: {
    position: "absolute",
    marginTop: -14,
    top: "50%",
    left: 0,
    fontSize: 12,
    lineHeight: 14,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#272727",
    textAlign: "left",
    width: 257,
  },
  groupView8: {
    position: "absolute",
    marginTop: -11.5,
    top: "50%",
    right: 22,
    left: 48,
    height: 28,
  },
  ellipseIcon2: {
    position: "absolute",
    marginTop: -11.5,
    top: "50%",
    left: 16,
    width: 22,
    height: 22,
  },
  text3: {
    position: "absolute",
    marginTop: -7,
    top: "50%",
    left: 0,
    fontSize: 12,
    lineHeight: 14,
    fontFamily: "Helvetica",
    color: "#272727",
    textAlign: "left",
    width: 8,
  },
  groupView9: {
    position: "absolute",
    marginTop: -7.5,
    top: "50%",
    left: 24,
    width: 7,
    height: 14,
  },
  groupView10: {
    position: "relative",
    width: 326,
    height: 63,
  },
  iWasAVictimOfFraudOrThe: {
    position: "relative",
    backgroundColor: "#4b4b4b",
    flex: 1,
    width: "100%",
    flexDirection: "column",
    alignItems: "flex-start",
  },
});

export default IWasAVictimOfFraudOrThe;
