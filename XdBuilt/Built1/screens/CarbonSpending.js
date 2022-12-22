import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const CarbonSpending = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.carbonSpending}>
      <View style={[styles.rectangleView, styles.mt_5]} />
      <View style={[styles.groupView, styles.mt_15, styles.ml48]}>
        <Text style={styles.hello}>↓10%</Text>
        <Text style={styles.hello1}>550 kg</Text>
        <Text style={styles.hello2}>From last month</Text>
        <Text style={styles.hello3}>Left this month</Text>
      </View>
      <Text style={[styles.hello4, styles.mt17, styles.ml24]}>
        September 1 - September 30, 2022
      </Text>
      <View style={[styles.homeIndicator, styles.mt178, styles.ml121]} />
      <Text style={[styles.hello5, styles.mt4, styles.ml95]}>
        <Text style={styles.yourAverageMonthly}>Your average monthly</Text>
        <Text style={styles.carbonFootprintIs}>Carbon Footprint is</Text>
      </Text>
      <View style={[styles.groupView2, styles.mt31]}>
        <View style={styles.groupView1}>
          <Text style={styles.hello6}>Monthly</Text>
          <Text style={styles.hello7}>Quarterly</Text>
          <Text style={styles.hello8}>Yearly</Text>
          <Text style={styles.hello9}>All</Text>
        </View>
        <View style={styles.lineView} />
        <View style={styles.lineView1} />
      </View>
      <View style={[styles.groupView3, styles.mt_34]}>
        <Image
          style={styles.ellipseIcon}
          resizeMode="cover"
          source={require("../assets/ellipse-3211.png")}
        />
        <Image
          style={styles.groupIcon}
          resizeMode="cover"
          source={require("../assets/group-30652.png")}
        />
        <Text style={styles.hello10}>2436</Text>
        <Text style={styles.hello11}>
          <Text style={styles.kgCO}>kg CO</Text>
          <Text style={styles.text}>2</Text>
        </Text>
        <Image
          style={styles.iconFeatherHeart}
          resizeMode="cover"
          source={require("../assets/icon-featherheart.png")}
        />
        <Image
          style={styles.house1Icon}
          resizeMode="cover"
          source={require("../assets/house-1.png")}
        />
        <Image
          style={styles.transportationIcon}
          resizeMode="cover"
          source={require("../assets/transportation.png")}
        />
      </View>
      <View style={[styles.groupView9, styles.mt33]}>
        <Text style={styles.lanceBogrol}>Categories</Text>
        <View style={styles.groupView4}>
          <Text style={styles.hello12}>{`Health & Beauty`}</Text>
          <View style={styles.rectangleView1} />
          <View style={styles.rectangleView2} />
          <Image
            style={styles.iconFeatherHeart1}
            resizeMode="cover"
            source={require("../assets/icon-featherheart.png")}
          />
          <Text style={styles.hello13}>254</Text>
        </View>
        <View style={styles.groupView5}>
          <Text style={styles.hello14}>{`Food & Beverages`}</Text>
          <View style={styles.rectangleView3} />
          <View style={styles.rectangleView4} />
          <Text style={styles.hello15}>254</Text>
          <Image
            style={styles.layer2Icon}
            resizeMode="cover"
            source={require("../assets/layer-2.png")}
          />
        </View>
        <View style={styles.groupView6}>
          <Text style={styles.hello16}>House</Text>
          <View style={styles.rectangleView5} />
          <View style={styles.rectangleView6} />
          <Text style={styles.hello17}>254</Text>
          <Image
            style={styles.house1Icon1}
            resizeMode="cover"
            source={require("../assets/house-11.png")}
          />
        </View>
        <View style={styles.groupView7}>
          <Text style={styles.hello18}>Shopping</Text>
          <View style={styles.rectangleView7} />
          <View style={styles.rectangleView8} />
          <Text style={styles.hello19}>254</Text>
          <Image
            style={styles.shoppingIcon}
            resizeMode="cover"
            source={require("../assets/shopping.png")}
          />
        </View>
        <View style={styles.groupView8}>
          <Text style={styles.hello20}>Transport</Text>
          <View style={styles.rectangleView9} />
          <View style={styles.rectangleView10} />
          <Text style={styles.hello21}>254</Text>
          <Image
            style={styles.transportationIcon1}
            resizeMode="cover"
            source={require("../assets/transportation.png")}
          />
        </View>
      </View>
      <View style={[styles.groupView18, styles.mt211]}>
        <Text style={styles.history}>Transactions</Text>
        <Image
          style={styles.path23339Icon}
          resizeMode="cover"
          source={require("../assets/path-23663.png")}
        />
        <View style={styles.groupView11}>
          <View style={styles.groupView10}>
            <Text style={styles.lanceBogrol1}>Flight</Text>
            <Text style={styles.moneyTransfer}>
              <Text style={styles.september222022}>September 22, 2022</Text>
              <Text style={styles.pM}>12:06 PM</Text>
            </Text>
          </View>
          <Text style={styles.text2}>
            <Text style={styles.kgCO1}>7.2 kg CO</Text>
            <Text style={styles.text1}>2</Text>
          </Text>
          <View style={styles.rectangleView11} />
          <Image
            style={styles.iconAwesomePlaneDeparture}
            resizeMode="cover"
            source={require("../assets/icon-awesomeplanedeparture.png")}
          />
        </View>
        <View style={styles.groupView13}>
          <View style={styles.groupView12}>
            <Text style={styles.lanceBogrol2}>Food</Text>
            <Text style={styles.moneyTransfer1}>
              <Text style={styles.september2220221}>September 22, 2022</Text>
              <Text style={styles.pM1}>12:06 PM</Text>
            </Text>
          </View>
          <Text style={styles.text4}>
            <Text style={styles.kgCO2}>10 kg CO</Text>
            <Text style={styles.text3}>2</Text>
          </Text>
          <View style={styles.rectangleView12} />
          <Image
            style={styles.iconMapFood}
            resizeMode="cover"
            source={require("../assets/icon-mapfood.png")}
          />
        </View>
        <View style={styles.groupView15}>
          <View style={styles.groupView14}>
            <Text style={styles.lanceBogrol3}>Car</Text>
            <Text style={styles.moneyTransfer2}>
              <Text style={styles.september2220222}>September 22, 2022</Text>
              <Text style={styles.pM2}>12:06 PM</Text>
            </Text>
          </View>
          <Text style={styles.text6}>
            <Text style={styles.kgCO3}>5 kg CO</Text>
            <Text style={styles.text5}>2</Text>
          </Text>
          <View style={styles.rectangleView13} />
          <Image
            style={styles.iconAwesomeCar}
            resizeMode="cover"
            source={require("../assets/icon-awesomecar.png")}
          />
        </View>
        <View style={styles.groupView17}>
          <View style={styles.groupView16}>
            <Text style={styles.lanceBogrol4}>Shop</Text>
            <Text style={styles.moneyTransfer3}>
              <Text style={styles.september2220223}>September 22, 2022</Text>
              <Text style={styles.pM3}>12:06 PM</Text>
            </Text>
          </View>
          <Text style={styles.text8}>
            <Text style={styles.kgCO4}>7.2 kg CO</Text>
            <Text style={styles.text7}>2</Text>
          </Text>
          <View style={styles.rectangleView14} />
          <Image
            style={styles.iconAwesomeShoppingCart}
            resizeMode="cover"
            source={require("../assets/icon-awesomeshoppingcart.png")}
          />
        </View>
      </View>
      <Image
        style={[styles.groupIcon1, styles.mt_362, styles.ml24]}
        resizeMode="cover"
        source={require("../assets/group-31146.png")}
      />
      <Pressable
        style={[styles.groupPressable, styles.mt_1380]}
        onPress={() => navigation.navigate("Carbon")}
      >
        <Image
          style={styles.iconFeatherArrowLeft}
          resizeMode="cover"
          source={require("../assets/icon-featherarrowleft.png")}
        />
      </Pressable>
      <View style={[styles.homeIndicator1, styles.mt_5, styles.ml121]} />
      <View style={[styles.statusBarBlack, styles.mt4]}>
        <View style={styles.rectangle} />
        <View style={styles.statusBar}>
          <View style={styles.time}>
            <Text style={styles.text9}>9:41</Text>
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
            <View style={styles.rectangleView15} />
            <View style={styles.rectangleView16} />
            <View style={styles.rectangleView17} />
            <View style={styles.rectangleView18} />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mt_5: {
    marginTop: -5,
  },
  mt_15: {
    marginTop: -15,
  },
  ml48: {
    marginLeft: 48,
  },
  mt17: {
    marginTop: 17,
  },
  ml24: {
    marginLeft: 24,
  },
  mt178: {
    marginTop: 178,
  },
  ml121: {
    marginLeft: 121,
  },
  mt4: {
    marginTop: 4,
  },
  ml95: {
    marginLeft: 95,
  },
  mt31: {
    marginTop: 31,
  },
  mt_34: {
    marginTop: -34,
  },
  mt33: {
    marginTop: 33,
  },
  mt211: {
    marginTop: 211,
  },
  mt_362: {
    marginTop: -362,
  },
  mt_1380: {
    marginTop: -1380,
  },
  rectangleView: {
    position: "relative",
    backgroundColor: "#f6f5f8",
    width: 375,
    height: 1383,
  },
  hello: {
    position: "absolute",
    top: 0,
    left: 24,
    fontSize: 16,
    lineHeight: 16,
    fontFamily: "Helvetica",
    color: "#0101fd",
    textAlign: "left",
  },
  hello1: {
    position: "absolute",
    top: 0,
    left: 213,
    fontSize: 16,
    lineHeight: 16,
    fontFamily: "Helvetica",
    color: "#0101fd",
    textAlign: "left",
  },
  hello2: {
    position: "absolute",
    top: 19,
    left: 0,
    fontSize: 12,
    fontFamily: "Helvetica",
    color: "#999",
    textAlign: "left",
  },
  hello3: {
    position: "absolute",
    top: 19,
    left: 197,
    fontSize: 12,
    fontFamily: "Helvetica",
    color: "#999",
    textAlign: "left",
  },
  groupView: {
    position: "relative",
    width: 276,
    height: 33,
  },
  hello4: {
    position: "relative",
    fontSize: 10,
    fontFamily: "Helvetica",
    color: "#888",
    textAlign: "left",
  },
  homeIndicator: {
    position: "relative",
    borderRadius: 100,
    backgroundColor: "#000",
    width: 134,
    height: 5,
  },
  yourAverageMonthly: {
    margin: 0,
  },
  carbonFootprintIs: {
    margin: 0,
  },
  hello5: {
    position: "relative",
    fontSize: 18,
    lineHeight: 20,
    fontWeight: "700",
    fontFamily: "Typo Grotesk",
    color: "#00003d",
    textAlign: "center",
  },
  hello6: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 16,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#0101fd",
    textAlign: "left",
  },
  hello7: {
    position: "absolute",
    top: 1,
    left: 115,
    fontSize: 14,
    fontFamily: "Helvetica",
    color: "#999",
    textAlign: "left",
    opacity: 0.56,
  },
  hello8: {
    position: "absolute",
    top: 1,
    left: 218,
    fontSize: 14,
    fontFamily: "Helvetica",
    color: "#888",
    textAlign: "left",
    opacity: 0.5,
  },
  hello9: {
    position: "absolute",
    top: 1,
    left: 310,
    fontSize: 14,
    fontFamily: "Helvetica",
    color: "#888",
    textAlign: "left",
    opacity: 0.5,
  },
  groupView1: {
    position: "absolute",
    height: "45.95%",
    width: "99.69%",
    top: "29.5%",
    right: "0%",
    bottom: "24.56%",
    left: "0.31%",
  },
  lineView: {
    position: "absolute",
    top: -1,
    right: 1,
    left: 0,
    borderStyle: "solid",
    borderColor: "#fff",
    borderTopWidth: 1,
    height: 2,
  },
  lineView1: {
    position: "absolute",
    right: 1,
    bottom: -1,
    left: -1,
    borderStyle: "solid",
    borderColor: "#fff",
    borderTopWidth: 1,
    height: 2,
  },
  groupView2: {
    position: "relative",
    width: 327,
    height: 37,
    alignSelf: "center",
  },
  ellipseIcon: {
    position: "absolute",
    marginLeft: -46.52,
    bottom: 15,
    left: "50%",
    width: 100,
    height: 22,
    opacity: 0.32,
  },
  groupIcon: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  hello10: {
    position: "absolute",
    top: "40.81%",
    left: "37.8%",
    fontSize: 65,
    verticalAlign: "super",
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#1f1f1f",
    textAlign: "center",
  },
  kgCO: {
    fontSize: 18,
  },
  text: {
    fontSize: 10,
    verticalAlign: "sub",
  },
  hello11: {
    position: "absolute",
    top: "54.5%",
    left: "41.27%",
    lineHeight: 24,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#1f1f1f",
    textAlign: "center",
  },
  iconFeatherHeart: {
    position: "absolute",
    marginTop: -72.01,
    marginLeft: 68.35,
    top: "50%",
    left: "50%",
    width: 14,
    height: 13,
  },
  house1Icon: {
    position: "absolute",
    marginTop: 45.32,
    marginLeft: -94.71,
    top: "50%",
    left: "50%",
    width: 11,
    height: 10,
  },
  transportationIcon: {
    position: "absolute",
    marginTop: -89.76,
    marginLeft: -62.21,
    top: "50%",
    left: "50%",
    width: 11,
    height: 9,
  },
  groupView3: {
    position: "relative",
    width: 346,
    height: 346,
    alignSelf: "center",
  },
  lanceBogrol: {
    position: "absolute",
    top: 0,
    left: 30,
    fontSize: 16,
    letterSpacing: 1,
    lineHeight: 20,
    fontWeight: "700",
    fontFamily: "Typo Grotesk",
    color: "#00003d",
    textAlign: "left",
  },
  hello12: {
    position: "absolute",
    top: "0%",
    left: "0%",
    fontSize: 10,
    fontFamily: "Helvetica",
    color: "#888",
    textAlign: "left",
  },
  rectangleView1: {
    position: "absolute",
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: 19,
    backgroundColor: "#f6f5f8",
    height: 30,
  },
  rectangleView2: {
    position: "absolute",
    bottom: 0,
    left: 0,
    borderRadius: 19,
    backgroundColor: "#e4732d",
    width: 213,
    height: 30,
  },
  iconFeatherHeart1: {
    position: "absolute",
    marginTop: 2.95,
    top: "50%",
    left: 13,
    width: 14,
    height: 13,
  },
  hello13: {
    position: "absolute",
    top: "55.81%",
    left: "90.81%",
    fontSize: 10,
    fontFamily: "Helvetica",
    color: "#1f1f1f",
    textAlign: "center",
  },
  groupView4: {
    position: "absolute",
    marginTop: -126.34,
    top: "50%",
    right: 19,
    left: 25,
    height: 45,
  },
  hello14: {
    position: "absolute",
    top: "0%",
    left: "0%",
    fontSize: 10,
    fontFamily: "Helvetica",
    color: "#888",
    textAlign: "left",
  },
  rectangleView3: {
    position: "absolute",
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: 19,
    backgroundColor: "#f6f5f8",
    height: 30,
  },
  rectangleView4: {
    position: "absolute",
    bottom: 0,
    left: 0,
    borderRadius: 19,
    backgroundColor: "#f3b53f",
    width: 191,
    height: 30,
  },
  hello15: {
    position: "absolute",
    top: "55.81%",
    left: "90.81%",
    fontSize: 10,
    fontFamily: "Helvetica",
    color: "#1f1f1f",
    textAlign: "center",
  },
  layer2Icon: {
    position: "absolute",
    marginTop: 1.8,
    top: "50%",
    left: 13,
    width: 12,
    height: 12,
  },
  groupView5: {
    position: "absolute",
    marginTop: -69.44,
    top: "50%",
    right: 19,
    left: 25,
    height: 45,
  },
  hello16: {
    position: "absolute",
    top: "0%",
    left: "0%",
    fontSize: 10,
    fontFamily: "Helvetica",
    color: "#888",
    textAlign: "left",
  },
  rectangleView5: {
    position: "absolute",
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: 19,
    backgroundColor: "#f6f5f8",
    height: 30,
  },
  rectangleView6: {
    position: "absolute",
    bottom: 0,
    left: 0,
    borderRadius: 19,
    backgroundColor: "#dc85f5",
    width: 125,
    height: 30,
  },
  hello17: {
    position: "absolute",
    top: "55.81%",
    left: "90.81%",
    fontSize: 10,
    fontFamily: "Helvetica",
    color: "#1f1f1f",
    textAlign: "center",
  },
  house1Icon1: {
    position: "absolute",
    marginTop: 2.98,
    top: "50%",
    left: 12,
    width: 11,
    height: 10,
  },
  groupView6: {
    position: "absolute",
    marginTop: -12.54,
    top: "50%",
    right: 19,
    left: 25,
    height: 45,
  },
  hello18: {
    position: "absolute",
    top: "0%",
    left: "0%",
    fontSize: 10,
    fontFamily: "Helvetica",
    color: "#888",
    textAlign: "left",
  },
  rectangleView7: {
    position: "absolute",
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: 19,
    backgroundColor: "#f6f5f8",
    height: 30,
  },
  rectangleView8: {
    position: "absolute",
    bottom: 0,
    left: 0,
    borderRadius: 19,
    backgroundColor: "#5888f5",
    width: 72,
    height: 30,
  },
  hello19: {
    position: "absolute",
    top: "55.81%",
    left: "90.81%",
    fontSize: 10,
    fontFamily: "Helvetica",
    color: "#1f1f1f",
    textAlign: "center",
  },
  shoppingIcon: {
    position: "absolute",
    marginTop: 3.15,
    top: "50%",
    left: 10,
    width: 10,
    height: 10,
  },
  groupView7: {
    position: "absolute",
    marginTop: 44.36,
    top: "50%",
    right: 19,
    left: 25,
    height: 45,
  },
  hello20: {
    position: "absolute",
    top: "0%",
    left: "0%",
    fontSize: 10,
    fontFamily: "Helvetica",
    color: "#888",
    textAlign: "left",
  },
  rectangleView9: {
    position: "absolute",
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: 19,
    backgroundColor: "#f6f5f8",
    height: 30,
  },
  rectangleView10: {
    position: "absolute",
    bottom: 0,
    left: 0,
    borderRadius: 19,
    backgroundColor: "#5ac661",
    width: 47,
    height: 30,
  },
  hello21: {
    position: "absolute",
    top: "55.81%",
    left: "90.81%",
    fontSize: 10,
    fontFamily: "Helvetica",
    color: "#1f1f1f",
    textAlign: "center",
  },
  transportationIcon1: {
    position: "absolute",
    marginTop: 3.45,
    top: "50%",
    left: 11,
    width: 11,
    height: 9,
  },
  groupView8: {
    position: "absolute",
    right: 19,
    bottom: 35,
    left: 25,
    height: 45,
  },
  groupView9: {
    position: "relative",
    borderRadius: 20,
    backgroundColor: "#fff",
    shadowColor: "rgba(1, 1, 253, 0.05)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 20,
    elevation: 20,
    shadowOpacity: 1,
    width: 327,
    height: 364,
    alignSelf: "center",
  },
  history: {
    position: "absolute",
    top: 0,
    left: 30,
    fontSize: 18,
    letterSpacing: 1,
    fontWeight: "700",
    fontFamily: "Typo Grotesk",
    color: "#00003d",
    textAlign: "left",
  },
  path23339Icon: {
    position: "absolute",
    top: 6,
    left: 0,
    width: 19,
    height: 20,
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
    textShadowColor: "rgba(1, 1, 253, 0.05)",
    textShadowOffset: {
      width: 0,
      height: 3,
    },
    textShadowRadius: 6,
  },
  groupView10: {
    position: "absolute",
    marginTop: -18,
    marginLeft: -98.52,
    top: "50%",
    left: "50%",
    width: 105,
    height: 37,
  },
  kgCO1: {
    fontSize: 14,
  },
  text1: {
    fontSize: 8,
    verticalAlign: "sub",
  },
  text2: {
    position: "absolute",
    marginTop: -8,
    top: "50%",
    right: 24,
    letterSpacing: 1,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#0101fd",
    textAlign: "right",
  },
  rectangleView11: {
    position: "absolute",
    marginTop: -16,
    top: "50%",
    left: 14,
    borderRadius: 9,
    backgroundColor: "#f6f6f6",
    width: 34,
    height: 34,
  },
  iconAwesomePlaneDeparture: {
    position: "absolute",
    marginTop: -4.89,
    top: "50%",
    left: 22,
    width: 18,
    height: 14,
  },
  groupView11: {
    position: "absolute",
    top: 46,
    right: 0,
    left: 0,
    borderRadius: 20,
    backgroundColor: "#fff",
    shadowColor: "rgba(1, 1, 253, 0.05)",
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
  groupView12: {
    position: "absolute",
    marginTop: -18,
    marginLeft: -98.52,
    top: "50%",
    left: "50%",
    width: 105,
    height: 37,
  },
  kgCO2: {
    fontSize: 14,
  },
  text3: {
    fontSize: 8,
    verticalAlign: "sub",
  },
  text4: {
    position: "absolute",
    marginTop: -8,
    top: "50%",
    right: 24,
    letterSpacing: 1,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#0101fd",
    textAlign: "right",
  },
  rectangleView12: {
    position: "absolute",
    marginTop: -16,
    top: "50%",
    left: 14,
    borderRadius: 9,
    backgroundColor: "#f6f6f6",
    width: 34,
    height: 34,
  },
  iconMapFood: {
    position: "absolute",
    marginTop: -6.81,
    top: "50%",
    left: 22,
    width: 18,
    height: 16,
  },
  groupView13: {
    position: "absolute",
    marginTop: 29,
    top: "50%",
    right: 0,
    left: 0,
    borderRadius: 20,
    backgroundColor: "#fff",
    shadowColor: "rgba(1, 1, 253, 0.05)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 20,
    elevation: 20,
    shadowOpacity: 1,
    height: 64,
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
  groupView14: {
    position: "absolute",
    marginTop: -18,
    marginLeft: -98.52,
    top: "50%",
    left: "50%",
    width: 105,
    height: 37,
  },
  kgCO3: {
    fontSize: 14,
  },
  text5: {
    fontSize: 8,
    verticalAlign: "sub",
  },
  text6: {
    position: "absolute",
    marginTop: -8,
    top: "50%",
    right: 24,
    letterSpacing: 1,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#0101fd",
    textAlign: "right",
  },
  rectangleView13: {
    position: "absolute",
    marginTop: -16,
    top: "50%",
    left: 14,
    borderRadius: 9,
    backgroundColor: "#f6f6f6",
    width: 34,
    height: 34,
  },
  iconAwesomeCar: {
    position: "absolute",
    marginTop: -4.92,
    top: "50%",
    left: 23,
    width: 16,
    height: 12,
  },
  groupView15: {
    position: "absolute",
    marginTop: -47,
    top: "50%",
    right: 0,
    left: 0,
    borderRadius: 20,
    backgroundColor: "#fff",
    shadowColor: "rgba(1, 1, 253, 0.05)",
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
  groupView16: {
    position: "absolute",
    marginTop: -18,
    marginLeft: -98.52,
    top: "50%",
    left: "50%",
    width: 105,
    height: 37,
  },
  kgCO4: {
    fontSize: 14,
  },
  text7: {
    fontSize: 8,
    verticalAlign: "sub",
  },
  text8: {
    position: "absolute",
    marginTop: -8,
    top: "50%",
    right: 24,
    letterSpacing: 1,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#0101fd",
    textAlign: "right",
  },
  rectangleView14: {
    position: "absolute",
    marginTop: -16,
    top: "50%",
    left: 14,
    borderRadius: 9,
    backgroundColor: "#f6f6f6",
    width: 34,
    height: 34,
  },
  iconAwesomeShoppingCart: {
    position: "absolute",
    marginTop: -4.4,
    top: "50%",
    left: 24,
    width: 14,
    height: 13,
  },
  groupView17: {
    position: "absolute",
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: 20,
    backgroundColor: "#fff",
    shadowColor: "rgba(1, 1, 253, 0.05)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 20,
    elevation: 20,
    shadowOpacity: 1,
    height: 64,
  },
  groupView18: {
    position: "relative",
    width: 327,
    height: 338,
    alignSelf: "center",
  },
  groupIcon1: {
    position: "relative",
    width: 20,
    height: 20,
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
  homeIndicator1: {
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
  text9: {
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
  rectangleView15: {
    position: "absolute",
    bottom: 0,
    left: 0,
    borderRadius: 2,
    backgroundColor: "#272727",
    width: 3,
    height: 4,
  },
  rectangleView16: {
    position: "absolute",
    marginLeft: -3.5,
    bottom: 0,
    left: "50%",
    borderRadius: 2,
    backgroundColor: "#272727",
    width: 3,
    height: 6,
  },
  rectangleView17: {
    position: "absolute",
    marginLeft: 0.5,
    bottom: 0,
    left: "50%",
    borderRadius: 2,
    backgroundColor: "#272727",
    width: 3,
    height: 9,
  },
  rectangleView18: {
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
  carbonSpending: {
    position: "relative",
    backgroundColor: "#4b4b4b",
    flex: 1,
    width: "100%",
    flexDirection: "column",
    alignItems: "flex-start",
  },
});

export default CarbonSpending;
