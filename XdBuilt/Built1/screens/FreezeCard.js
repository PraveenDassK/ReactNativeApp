import * as React from "react";
import { StyleSheet, View, Image, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const FreezeCard = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.freezeCard}>
      <View style={styles.rectangleView} />
      <Pressable
        style={[styles.groupPressable, styles.mt19]}
        onPress={() => navigation.navigate("Account3")}
      >
        <View style={styles.groupView}>
          <View style={styles.rectangleView1} />
          <Image
            style={styles.iconIonicIosArrowForward}
            resizeMode="cover"
            source={require("../assets/icon-ioniciosarrowforward1.png")}
          />
        </View>
        <Text style={styles.myCards}>My Cards</Text>
        <View style={styles.groupView12}>
          <Text style={styles.history}>Recent Transactions</Text>
          <Image
            style={styles.path23663Icon}
            resizeMode="cover"
            source={require("../assets/path-23663.png")}
          />
          <View style={styles.component2207}>
            <View style={styles.groupView11}>
              <View style={styles.groupView2}>
                <View style={styles.groupView1}>
                  <Text style={styles.lanceBogrol}>Grocery Market</Text>
                  <Text style={styles.moneyTransfer}>
                    <Text style={styles.september222022}>
                      September 22, 2022
                    </Text>
                    <Text style={styles.pM}>12:06 PM</Text>
                  </Text>
                </View>
                <Text style={styles.text}>- £70.00</Text>
                <Image
                  style={styles.maskGroup14}
                  resizeMode="cover"
                  source={require("../assets/mask-group-14.png")}
                />
              </View>
              <View style={styles.groupView4}>
                <View style={styles.groupView3}>
                  <Text style={styles.lanceBogrol1}>Grocery Market</Text>
                  <Text style={styles.moneyTransfer1}>
                    <Text style={styles.september2220221}>
                      September 22, 2022
                    </Text>
                    <Text style={styles.pM1}>12:06 PM</Text>
                  </Text>
                </View>
                <Text style={styles.text1}>- £70.00</Text>
                <Image
                  style={styles.maskGroup141}
                  resizeMode="cover"
                  source={require("../assets/mask-group-141.png")}
                />
              </View>
              <View style={styles.groupView6}>
                <View style={styles.groupView5}>
                  <Text style={styles.lanceBogrol2}>Grocery Market</Text>
                  <Text style={styles.moneyTransfer2}>
                    <Text style={styles.september2220222}>
                      September 22, 2022
                    </Text>
                    <Text style={styles.pM2}>12:06 PM</Text>
                  </Text>
                </View>
                <Text style={styles.text2}>- £70.00</Text>
                <Image
                  style={styles.maskGroup142}
                  resizeMode="cover"
                  source={require("../assets/mask-group-141.png")}
                />
              </View>
              <View style={styles.groupView8}>
                <View style={styles.groupView7}>
                  <Text style={styles.lanceBogrol3}>Spotify Music</Text>
                  <Text style={styles.moneyTransfer3}>
                    <Text style={styles.september2220223}>
                      September 22, 2022
                    </Text>
                    <Text style={styles.pM3}>12:06 PM</Text>
                  </Text>
                </View>
                <Text style={styles.text3}>- £50.00</Text>
                <Image
                  style={styles.maskGroup16}
                  resizeMode="cover"
                  source={require("../assets/mask-group-16.png")}
                />
              </View>
              <View style={styles.groupView10}>
                <View style={styles.groupView9}>
                  <Text style={styles.lanceBogrol4}>Lance Bogrol</Text>
                  <Text style={styles.moneyTransfer4}>
                    <Text style={styles.september2220224}>
                      September 22, 2022
                    </Text>
                    <Text style={styles.pM4}>12:06 PM</Text>
                  </Text>
                </View>
                <Text style={styles.text4}>+ £350.00</Text>
                <Image
                  style={styles.rectangleIcon}
                  resizeMode="cover"
                  source={require("../assets/rectangle-502.png")}
                />
              </View>
            </View>
          </View>
        </View>
      </Pressable>
      <View style={[styles.statusBarBlack, styles.mt_812]}>
        <View style={styles.rectangle} />
        <View style={styles.statusBar}>
          <View style={styles.time}>
            <Text style={styles.text5}>9:41</Text>
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
      <View style={[styles.homeIndicator, styles.mt216, styles.ml1]} />
      <Pressable
        style={[styles.groupPressable1, styles.mt71, styles.mr119]}
        onPress={() => navigation.navigate("MyCards")}
      >
        <Image
          style={styles.component2224}
          resizeMode="cover"
          source={require("../assets/component-222--4.png")}
        />
        <Text style={styles.hello}>FREEZE</Text>
      </Pressable>
      <Pressable
        style={[styles.component2234, styles.mt_76, styles.ml111]}
        onPress={() => navigation.navigate("CardSettings")}
      >
        <View style={styles.rectangleView6} />
        <Image
          style={styles.settingsIcon}
          resizeMode="cover"
          source={require("../assets/settings.png")}
        />
      </Pressable>
      <Text style={[styles.hello1, styles.mt12, styles.ml111]}>SETTINGS</Text>
      <View style={[styles.card1, styles.mt_262]}>
        <View style={styles.groupView16}>
          <View style={styles.groupView15}>
            <Image
              style={styles.path33118Icon}
              resizeMode="cover"
              source={require("../assets/path-33118.png")}
            />
            <View style={styles.groupView14}>
              <Image
                style={styles.groupIcon}
                resizeMode="cover"
                source={require("../assets/group-31759.png")}
              />
              <Image
                style={styles.groupIcon1}
                resizeMode="cover"
                source={require("../assets/group-31760.png")}
              />
              <View style={styles.rectangleView7} />
              <Image
                style={styles.rectangleIcon1}
                resizeMode="cover"
                source={require("../assets/rectangle-26204.png")}
              />
              <View style={styles.groupView13}>
                <Text style={styles.b}>B</Text>
              </View>
              <Text style={styles.bUSINESS}>BUSINESS</Text>
            </View>
          </View>
          <Image
            style={styles.groupIcon2}
            resizeMode="cover"
            source={require("../assets/group-31764.png")}
          />
          <Image
            style={styles.groupIcon3}
            resizeMode="cover"
            source={require("../assets/group-31766.png")}
          />
          <Image
            style={styles.groupIcon4}
            resizeMode="cover"
            source={require("../assets/group-31767.png")}
          />
        </View>
      </View>
      <Image
        style={[styles.maskGroup25046, styles.mt_872]}
        resizeMode="cover"
        source={require("../assets/mask-group-25046.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mt19: {
    marginTop: 19,
  },
  mt_812: {
    marginTop: -812,
  },
  mt216: {
    marginTop: 216,
  },
  ml1: {
    marginLeft: 1,
  },
  mt71: {
    marginTop: 71,
  },
  mr119: {
    marginRight: 119,
  },
  mt_76: {
    marginTop: -76,
  },
  ml111: {
    marginLeft: 111,
  },
  mt12: {
    marginTop: 12,
  },
  mt_262: {
    marginTop: -262,
  },
  mt_872: {
    marginTop: -872,
  },
  rectangleView: {
    position: "relative",
    backgroundColor: "#f6f5f8",
    width: 375,
    height: 814,
  },
  rectangleView1: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
  },
  iconIonicIosArrowForward: {
    position: "absolute",
    marginTop: 0.59,
    top: "50%",
    left: 6,
    width: 11,
    height: 6,
  },
  groupView: {
    position: "absolute",
    height: "2.75%",
    width: "88.8%",
    top: "1.09%",
    right: "5.6%",
    bottom: "96.16%",
    left: "5.6%",
  },
  myCards: {
    position: "absolute",
    marginLeft: -43.5,
    top: 29,
    left: "50%",
    fontSize: 20,
    fontWeight: "700",
    fontFamily: "Typo Grotesk",
    color: "#00003d",
    textAlign: "left",
  },
  history: {
    position: "absolute",
    marginTop: -193.5,
    top: "50%",
    left: "9.54%",
    fontSize: 18,
    letterSpacing: 1,
    fontWeight: "700",
    fontFamily: "Typo Grotesk",
    color: "#00003d",
    textAlign: "left",
  },
  path23663Icon: {
    position: "absolute",
    top: 6,
    left: 0,
    width: 19,
    height: 20,
  },
  lanceBogrol: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 12,
    letterSpacing: 1,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#00003d",
    textAlign: "left",
  },
  september222022: {
    margin: 0,
  },
  pM: {
    margin: 0,
  },
  moneyTransfer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    fontSize: 10,
    letterSpacing: 1,
    fontFamily: "Helvetica",
    color: "#7c7c7c",
    textAlign: "left",
  },
  groupView1: {
    position: "absolute",
    top: 15,
    bottom: 14,
    left: 66,
    width: 105,
  },
  text: {
    position: "absolute",
    marginTop: -8,
    marginLeft: 77.5,
    top: "50%",
    left: "50%",
    fontSize: 14,
    letterSpacing: 1,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#ff4b4b",
    textAlign: "right",
  },
  maskGroup14: {
    position: "absolute",
    top: 16,
    bottom: 16,
    left: 12,
    maxHeight: "100%",
    width: 34,
  },
  groupView2: {
    position: "absolute",
    marginLeft: -162.5,
    bottom: 0,
    left: "50%",
    borderRadius: 20,
    backgroundColor: "#fff",
    shadowColor: "rgba(1, 1, 253, 0.1)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 20,
    elevation: 20,
    shadowOpacity: 1,
    width: 325,
    height: 66,
  },
  lanceBogrol1: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 12,
    letterSpacing: 1,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#00003d",
    textAlign: "left",
  },
  september2220221: {
    margin: 0,
  },
  pM1: {
    margin: 0,
  },
  moneyTransfer1: {
    position: "absolute",
    bottom: 0,
    left: 0,
    fontSize: 10,
    letterSpacing: 1,
    fontFamily: "Helvetica",
    color: "#7c7c7c",
    textAlign: "left",
  },
  groupView3: {
    position: "absolute",
    marginLeft: -96.5,
    top: 14,
    left: "50%",
    width: 105,
    height: 37,
  },
  text1: {
    position: "absolute",
    marginTop: -8,
    marginLeft: 77.5,
    top: "50%",
    left: "50%",
    fontSize: 14,
    letterSpacing: 1,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#ff4b4b",
    textAlign: "right",
  },
  maskGroup141: {
    position: "absolute",
    marginTop: -17,
    top: "50%",
    left: 12,
    width: 34,
    height: 34,
  },
  groupView4: {
    position: "absolute",
    right: 0,
    bottom: 72,
    left: 0,
    borderRadius: 20,
    backgroundColor: "#fff",
    shadowColor: "rgba(1, 1, 253, 0.1)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 20,
    elevation: 20,
    shadowOpacity: 1,
    height: 64,
  },
  lanceBogrol2: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 12,
    letterSpacing: 1,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#00003d",
    textAlign: "left",
  },
  september2220222: {
    margin: 0,
  },
  pM2: {
    margin: 0,
  },
  moneyTransfer2: {
    position: "absolute",
    bottom: 0,
    left: 0,
    fontSize: 10,
    letterSpacing: 1,
    fontFamily: "Helvetica",
    color: "#7c7c7c",
    textAlign: "left",
  },
  groupView5: {
    position: "absolute",
    marginTop: -19,
    marginLeft: -96.5,
    top: "50%",
    left: "50%",
    width: 105,
    height: 37,
  },
  text2: {
    position: "absolute",
    marginTop: -8,
    top: "50%",
    right: 27,
    fontSize: 14,
    letterSpacing: 1,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#ff4b4b",
    textAlign: "right",
  },
  maskGroup142: {
    position: "absolute",
    marginTop: -17,
    top: "50%",
    left: 12,
    width: 34,
    height: 34,
  },
  groupView6: {
    position: "absolute",
    right: 0,
    bottom: 141,
    left: 0,
    borderRadius: 20,
    backgroundColor: "#fff",
    shadowColor: "rgba(1, 1, 253, 0.1)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 20,
    elevation: 20,
    shadowOpacity: 1,
    height: 66,
  },
  lanceBogrol3: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 12,
    letterSpacing: 1,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#00003d",
    textAlign: "left",
  },
  september2220223: {
    margin: 0,
  },
  pM3: {
    margin: 0,
  },
  moneyTransfer3: {
    position: "absolute",
    bottom: 0,
    left: 0,
    fontSize: 10,
    letterSpacing: 1,
    fontFamily: "Helvetica",
    color: "#7c7c7c",
    textAlign: "left",
  },
  groupView7: {
    position: "absolute",
    marginTop: -18,
    marginLeft: -96.5,
    top: "50%",
    left: "50%",
    width: 105,
    height: 37,
  },
  text3: {
    position: "absolute",
    marginTop: -8,
    top: "50%",
    right: 27,
    fontSize: 14,
    letterSpacing: 1,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#ff4b4b",
    textAlign: "right",
  },
  maskGroup16: {
    position: "absolute",
    marginTop: -17,
    top: "50%",
    left: 14,
    width: 34,
    height: 34,
  },
  groupView8: {
    position: "absolute",
    marginTop: -103.5,
    top: "50%",
    right: 0,
    left: 0,
    borderRadius: 20,
    backgroundColor: "#fff",
    shadowColor: "rgba(1, 1, 253, 0.1)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 20,
    elevation: 20,
    shadowOpacity: 1,
    height: 64,
  },
  lanceBogrol4: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 12,
    letterSpacing: 1,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#00003d",
    textAlign: "left",
  },
  september2220224: {
    margin: 0,
  },
  pM4: {
    margin: 0,
  },
  moneyTransfer4: {
    position: "absolute",
    bottom: 0,
    left: 0,
    fontSize: 10,
    letterSpacing: 1,
    fontFamily: "Helvetica",
    color: "#7c7c7c",
    textAlign: "left",
  },
  groupView9: {
    position: "absolute",
    marginTop: -18,
    marginLeft: -96.5,
    top: "50%",
    left: "50%",
    width: 105,
    height: 37,
  },
  text4: {
    position: "absolute",
    marginTop: -8,
    top: "50%",
    right: 29,
    fontSize: 14,
    letterSpacing: 1,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#27af7c",
    textAlign: "right",
  },
  rectangleIcon: {
    position: "absolute",
    marginTop: -16,
    top: "50%",
    left: 14,
    borderRadius: 11,
    width: 34,
    height: 34,
  },
  groupView10: {
    position: "absolute",
    top: 0,
    right: 0,
    left: 0,
    borderRadius: 20,
    backgroundColor: "#fff",
    shadowColor: "rgba(1, 1, 253, 0.1)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 20,
    elevation: 20,
    shadowOpacity: 1,
    height: 64,
  },
  groupView11: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  component2207: {
    position: "absolute",
    top: 40,
    right: 0,
    bottom: 0,
    left: 0,
  },
  groupView12: {
    position: "absolute",
    right: 25,
    bottom: 39,
    left: 25,
    height: 387,
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
    height: 983,
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
  text5: {
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
  component2224: {
    position: "absolute",
    top: 0,
    right: -60,
    left: 0,
    maxWidth: "100%",
    overflow: "hidden",
    height: 110,
  },
  hello: {
    position: "absolute",
    top: "81.58%",
    left: "2%",
    fontSize: 12,
    textTransform: "uppercase",
    fontFamily: "Helvetica",
    color: "#1a1a1a",
    textAlign: "left",
  },
  groupPressable1: {
    position: "relative",
    width: 50,
    height: 76,
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
  settingsIcon: {
    position: "absolute",
    marginTop: -10,
    marginLeft: -10,
    top: "50%",
    left: "50%",
    width: 20,
    height: 20,
  },
  component2234: {
    position: "relative",
    width: 50,
    height: 50,
  },
  hello1: {
    position: "relative",
    fontSize: 12,
    textTransform: "uppercase",
    fontFamily: "Helvetica",
    color: "#1a1a1a",
    textAlign: "left",
  },
  path33118Icon: {
    position: "absolute",
    top: 0,
    right: -60,
    bottom: -60,
    left: 0,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  groupIcon: {
    position: "absolute",
    height: "6.35%",
    width: "49.25%",
    top: "-62.13%",
    right: "53.94%",
    bottom: "155.78%",
    left: "-3.18%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  groupIcon1: {
    position: "absolute",
    height: "10.54%",
    width: "81.73%",
    top: "34.63%",
    right: "9.14%",
    bottom: "54.83%",
    left: "9.14%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  rectangleView7: {
    position: "absolute",
    height: "33.14%",
    width: "108.22%",
    top: "68.51%",
    right: "-3.68%",
    bottom: "-1.65%",
    left: "-4.55%",
    backgroundColor: "#1a1a1a",
  },
  rectangleIcon1: {
    position: "absolute",
    height: "13.04%",
    width: "21.19%",
    top: "101.17%",
    right: "-91.6%",
    bottom: "-14.22%",
    left: "170.41%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  b: {
    position: "absolute",
    top: "-2.38%",
    left: "-3.7%",
    fontSize: 75,
    letterSpacing: 5,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "rgba(0, 0, 0, 0)",
    textAlign: "left",
  },
  groupView13: {
    position: "absolute",
    height: "32.12%",
    width: "31.27%",
    top: "76.67%",
    right: "65.31%",
    bottom: "-8.79%",
    left: "3.42%",
    opacity: 0.4,
  },
  bUSINESS: {
    position: "absolute",
    top: "87.88%",
    left: "10.24%",
    fontSize: 11,
    letterSpacing: 0,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#fff",
    textAlign: "left",
  },
  groupView14: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  groupView15: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  groupIcon2: {
    position: "absolute",
    top: 17,
    right: 15,
    width: 28,
    height: 30,
  },
  groupIcon3: {
    position: "absolute",
    right: 16,
    bottom: 21,
    width: 48,
    height: 41,
  },
  groupIcon4: {
    position: "absolute",
    marginLeft: 25.31,
    top: 21,
    left: "50%",
    width: 17,
    height: 22,
  },
  groupView16: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  card1: {
    position: "relative",
    width: 173,
    height: 262,
  },
  maskGroup25046: {
    position: "relative",
    width: 173,
    height: 262,
    opacity: 0.47,
  },
  freezeCard: {
    position: "relative",
    backgroundColor: "#4b4b4b",
    flex: 1,
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
  },
});

export default FreezeCard;
