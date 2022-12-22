import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Account1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.account1}>
      <View style={styles.rectangleView} />
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
      <Text style={[styles.hello, styles.mt14, styles.ml30]}>Statements</Text>
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
      <View style={[styles.homeIndicator, styles.mt_61, styles.ml121]} />
      <View style={[styles.groupView22, styles.mt26, styles.ml28]}>
        <View style={styles.component2208}>
          <View style={styles.groupView10}>
            <View style={styles.groupView1}>
              <View style={styles.groupView}>
                <Text style={styles.lanceBogrol}>Grocery Market</Text>
                <Text style={styles.moneyTransfer}>
                  <Text style={styles.september222022}>September 22, 2022</Text>
                  <Text style={styles.pM}>12:06 PM</Text>
                </Text>
              </View>
              <Text style={styles.text1}>- £70.00</Text>
              <Image
                style={styles.maskGroup14}
                resizeMode="cover"
                source={require("../assets/mask-group-148.png")}
              />
            </View>
            <View style={styles.groupView3}>
              <View style={styles.groupView2}>
                <Text style={styles.lanceBogrol1}>Grocery Market</Text>
                <Text style={styles.moneyTransfer1}>
                  <Text style={styles.september2220221}>
                    September 22, 2022
                  </Text>
                  <Text style={styles.pM1}>12:06 PM</Text>
                </Text>
              </View>
              <Text style={styles.text2}>- £70.00</Text>
              <Image
                style={styles.maskGroup141}
                resizeMode="cover"
                source={require("../assets/mask-group-149.png")}
              />
            </View>
            <View style={styles.groupView5}>
              <View style={styles.groupView4}>
                <Text style={styles.lanceBogrol2}>Grocery Market</Text>
                <Text style={styles.moneyTransfer2}>
                  <Text style={styles.september2220222}>
                    September 22, 2022
                  </Text>
                  <Text style={styles.pM2}>12:06 PM</Text>
                </Text>
              </View>
              <Text style={styles.text3}>- £70.00</Text>
              <Image
                style={styles.maskGroup142}
                resizeMode="cover"
                source={require("../assets/mask-group-149.png")}
              />
            </View>
            <View style={styles.groupView7}>
              <View style={styles.groupView6}>
                <Text style={styles.lanceBogrol3}>Spotify Music</Text>
                <Text style={styles.moneyTransfer3}>
                  <Text style={styles.september2220223}>
                    September 22, 2022
                  </Text>
                  <Text style={styles.pM3}>12:06 PM</Text>
                </Text>
              </View>
              <Text style={styles.text4}>- £50.00</Text>
              <Image
                style={styles.maskGroup16}
                resizeMode="cover"
                source={require("../assets/mask-group-16.png")}
              />
            </View>
            <View style={styles.groupView9}>
              <View style={styles.groupView8}>
                <Text style={styles.lanceBogrol4}>Lance Bogrol</Text>
                <Text style={styles.moneyTransfer4}>
                  <Text style={styles.september2220224}>
                    September 22, 2022
                  </Text>
                  <Text style={styles.pM4}>12:06 PM</Text>
                </Text>
              </View>
              <Text style={styles.text5}>+ £350.00</Text>
              <Image
                style={styles.rectangleIcon}
                resizeMode="cover"
                source={require("../assets/rectangle-502.png")}
              />
            </View>
          </View>
        </View>
        <View style={styles.component2209}>
          <View style={styles.groupView21}>
            <View style={styles.groupView12}>
              <View style={styles.groupView11}>
                <Text style={styles.lanceBogrol5}>Grocery Market</Text>
                <Text style={styles.moneyTransfer5}>
                  <Text style={styles.september2220225}>
                    September 22, 2022
                  </Text>
                  <Text style={styles.pM5}>12:06 PM</Text>
                </Text>
              </View>
              <Text style={styles.text6}>- £70.00</Text>
              <Image
                style={styles.maskGroup143}
                resizeMode="cover"
                source={require("../assets/mask-group-148.png")}
              />
            </View>
            <View style={styles.groupView14}>
              <View style={styles.groupView13}>
                <Text style={styles.lanceBogrol6}>Grocery Market</Text>
                <Text style={styles.moneyTransfer6}>
                  <Text style={styles.september2220226}>
                    September 22, 2022
                  </Text>
                  <Text style={styles.pM6}>12:06 PM</Text>
                </Text>
              </View>
              <Text style={styles.text7}>- £70.00</Text>
              <Image
                style={styles.maskGroup144}
                resizeMode="cover"
                source={require("../assets/mask-group-149.png")}
              />
            </View>
            <View style={styles.groupView16}>
              <View style={styles.groupView15}>
                <Text style={styles.lanceBogrol7}>Grocery Market</Text>
                <Text style={styles.moneyTransfer7}>
                  <Text style={styles.september2220227}>
                    September 22, 2022
                  </Text>
                  <Text style={styles.pM7}>12:06 PM</Text>
                </Text>
              </View>
              <Text style={styles.text8}>- £70.00</Text>
              <Image
                style={styles.maskGroup145}
                resizeMode="cover"
                source={require("../assets/mask-group-149.png")}
              />
            </View>
            <View style={styles.groupView18}>
              <View style={styles.groupView17}>
                <Text style={styles.lanceBogrol8}>Spotify Music</Text>
                <Text style={styles.moneyTransfer8}>
                  <Text style={styles.september2220228}>
                    September 22, 2022
                  </Text>
                  <Text style={styles.pM8}>12:06 PM</Text>
                </Text>
              </View>
              <Text style={styles.text9}>- £50.00</Text>
              <Image
                style={styles.maskGroup161}
                resizeMode="cover"
                source={require("../assets/mask-group-16.png")}
              />
            </View>
            <View style={styles.groupView20}>
              <View style={styles.groupView19}>
                <Text style={styles.lanceBogrol9}>Lance Bogrol</Text>
                <Text style={styles.moneyTransfer9}>
                  <Text style={styles.september2220229}>
                    September 22, 2022
                  </Text>
                  <Text style={styles.pM9}>12:06 PM</Text>
                </Text>
              </View>
              <Text style={styles.text10}>+ £350.00</Text>
              <Image
                style={styles.rectangleIcon1}
                resizeMode="cover"
                source={require("../assets/rectangle-502.png")}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mt_812: {
    marginTop: -812,
  },
  mt14: {
    marginTop: 14,
  },
  ml30: {
    marginLeft: 30,
  },
  mt2: {
    marginTop: 2,
  },
  mt_61: {
    marginTop: -61,
  },
  ml121: {
    marginLeft: 121,
  },
  mt26: {
    marginTop: 26,
  },
  ml28: {
    marginLeft: 28,
  },
  rectangleView: {
    position: "relative",
    backgroundColor: "#f6f5f8",
    width: 375,
    height: 812,
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
    position: "relative",
    fontSize: 20,
    fontWeight: "700",
    fontFamily: "Typo Grotesk",
    color: "#00003d",
    textAlign: "left",
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
  groupView: {
    position: "absolute",
    top: 15,
    bottom: 14,
    left: 66,
    width: 105,
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
  maskGroup14: {
    position: "absolute",
    top: 16,
    bottom: 16,
    left: 12,
    maxHeight: "100%",
    width: 34,
  },
  groupView1: {
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
  groupView2: {
    position: "absolute",
    marginLeft: -96.5,
    top: 14,
    left: "50%",
    width: 105,
    height: 37,
  },
  text2: {
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
  groupView3: {
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
  groupView4: {
    position: "absolute",
    marginTop: -19,
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
  maskGroup142: {
    position: "absolute",
    marginTop: -17,
    top: "50%",
    left: 12,
    width: 34,
    height: 34,
  },
  groupView5: {
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
  groupView6: {
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
  groupView7: {
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
  groupView8: {
    position: "absolute",
    marginTop: -18,
    marginLeft: -96.5,
    top: "50%",
    left: "50%",
    width: 105,
    height: 37,
  },
  text5: {
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
  groupView9: {
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
  groupView10: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  component2208: {
    position: "absolute",
    top: 0,
    right: 0,
    left: 0,
    height: 347,
  },
  lanceBogrol5: {
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
  september2220225: {
    margin: 0,
  },
  pM5: {
    margin: 0,
  },
  moneyTransfer5: {
    position: "absolute",
    bottom: 0,
    left: 0,
    fontSize: 10,
    letterSpacing: 1,
    fontFamily: "Helvetica",
    color: "#7c7c7c",
    textAlign: "left",
  },
  groupView11: {
    position: "absolute",
    top: 15,
    bottom: 14,
    left: 66,
    width: 105,
  },
  text6: {
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
  maskGroup143: {
    position: "absolute",
    top: 16,
    bottom: 16,
    left: 12,
    maxHeight: "100%",
    width: 34,
  },
  groupView12: {
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
  lanceBogrol6: {
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
  september2220226: {
    margin: 0,
  },
  pM6: {
    margin: 0,
  },
  moneyTransfer6: {
    position: "absolute",
    bottom: 0,
    left: 0,
    fontSize: 10,
    letterSpacing: 1,
    fontFamily: "Helvetica",
    color: "#7c7c7c",
    textAlign: "left",
  },
  groupView13: {
    position: "absolute",
    marginLeft: -96.5,
    top: 14,
    left: "50%",
    width: 105,
    height: 37,
  },
  text7: {
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
  maskGroup144: {
    position: "absolute",
    marginTop: -17,
    top: "50%",
    left: 12,
    width: 34,
    height: 34,
  },
  groupView14: {
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
  lanceBogrol7: {
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
  september2220227: {
    margin: 0,
  },
  pM7: {
    margin: 0,
  },
  moneyTransfer7: {
    position: "absolute",
    bottom: 0,
    left: 0,
    fontSize: 10,
    letterSpacing: 1,
    fontFamily: "Helvetica",
    color: "#7c7c7c",
    textAlign: "left",
  },
  groupView15: {
    position: "absolute",
    marginTop: -19,
    marginLeft: -96.5,
    top: "50%",
    left: "50%",
    width: 105,
    height: 37,
  },
  text8: {
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
  maskGroup145: {
    position: "absolute",
    marginTop: -17,
    top: "50%",
    left: 12,
    width: 34,
    height: 34,
  },
  groupView16: {
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
  lanceBogrol8: {
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
  september2220228: {
    margin: 0,
  },
  pM8: {
    margin: 0,
  },
  moneyTransfer8: {
    position: "absolute",
    bottom: 0,
    left: 0,
    fontSize: 10,
    letterSpacing: 1,
    fontFamily: "Helvetica",
    color: "#7c7c7c",
    textAlign: "left",
  },
  groupView17: {
    position: "absolute",
    marginTop: -18,
    marginLeft: -96.5,
    top: "50%",
    left: "50%",
    width: 105,
    height: 37,
  },
  text9: {
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
  maskGroup161: {
    position: "absolute",
    marginTop: -17,
    top: "50%",
    left: 14,
    width: 34,
    height: 34,
  },
  groupView18: {
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
  lanceBogrol9: {
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
  september2220229: {
    margin: 0,
  },
  pM9: {
    margin: 0,
  },
  moneyTransfer9: {
    position: "absolute",
    bottom: 0,
    left: 0,
    fontSize: 10,
    letterSpacing: 1,
    fontFamily: "Helvetica",
    color: "#7c7c7c",
    textAlign: "left",
  },
  groupView19: {
    position: "absolute",
    marginTop: -18,
    marginLeft: -96.5,
    top: "50%",
    left: "50%",
    width: 105,
    height: 37,
  },
  text10: {
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
  rectangleIcon1: {
    position: "absolute",
    marginTop: -16,
    top: "50%",
    left: 14,
    borderRadius: 11,
    width: 34,
    height: 34,
  },
  groupView20: {
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
  groupView21: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  component2209: {
    position: "absolute",
    right: 0,
    bottom: 0,
    left: 0,
    height: 347,
  },
  groupView22: {
    position: "relative",
    width: 325,
    height: 702,
  },
  account1: {
    position: "relative",
    backgroundColor: "#4b4b4b",
    flex: 1,
    width: "100%",
    flexDirection: "column",
    alignItems: "flex-start",
  },
});

export default Account1;
