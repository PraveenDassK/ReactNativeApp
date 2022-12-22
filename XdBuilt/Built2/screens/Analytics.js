import * as React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  Pressable,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const Analytics = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.analytics}>
      <View style={styles.rectangleView} />
      <View style={[styles.groupView1, styles.mt22, styles.ml35]}>
        <View style={styles.groupView}>
          <Text style={styles.hello}>Total Spend</Text>
          <Text style={styles.hello1}>£ 1200.00</Text>
        </View>
        <Text style={styles.hello2}>
          <Text style={styles.noOf}>No. of</Text>
          <Text style={styles.payments}>Payments</Text>
        </Text>
        <Text style={styles.hello3}>1000</Text>
        <Image
          style={styles.rectangleIcon}
          resizeMode="cover"
          source={require("../assets/rectangle-6058.png")}
        />
      </View>
      <View style={[styles.groupView3, styles.mt_88, styles.ml203]}>
        <View style={styles.groupView2}>
          <Text style={styles.hello4}>
            <Text style={styles.averageMonthly}>Average Monthly</Text>
            <Text style={styles.spendings}>Spendings</Text>
          </Text>
          <Text style={styles.hello5}>£ 500.00</Text>
        </View>
        <Image
          style={styles.rectangleIcon1}
          resizeMode="cover"
          source={require("../assets/rectangle-6058.png")}
        />
      </View>
      <View style={[styles.groupView5, styles.mt12, styles.ml35]}>
        <View style={styles.groupView4}>
          <Text style={styles.hello6}>Balance</Text>
          <Text style={styles.hello7}>£ 500.00</Text>
        </View>
        <Image
          style={styles.rectangleIcon2}
          resizeMode="cover"
          source={require("../assets/rectangle-60582.png")}
        />
      </View>
      <Text style={[styles.hello8, styles.mt27, styles.ml25]}>Analytics</Text>
      <View style={[styles.groupView15, styles.mt37, styles.ml25]}>
        <View style={styles.groupView7}>
          <View style={styles.rectangle} />
          <View style={styles.rectangle1} />
          <View style={styles.groupView6}>
            <Text style={styles.lanceBogrol}>Shopping</Text>
          </View>
          <Text style={styles.text}>£1458</Text>
          <Image
            style={styles.bagShoppingSolidIcon}
            resizeMode="cover"
            source={require("../assets/bagshoppingsolid.png")}
          />
          <Text style={styles.text2}>
            <Text style={styles.kgCO}>7.2 kg CO</Text>
            <Text style={styles.text1}>2</Text>
          </Text>
        </View>
        <View style={styles.groupView9}>
          <View style={styles.rectangle2} />
          <View style={styles.rectangle3} />
          <View style={styles.groupView8}>
            <Text style={styles.lanceBogrol1}>{`Food & Drinks`}</Text>
          </View>
          <Image
            style={styles.groupIcon}
            resizeMode="cover"
            source={require("../assets/group-1804.png")}
          />
          <Text style={styles.text3}>£1458</Text>
          <Text style={styles.text5}>
            <Text style={styles.kgCO1}>7.2 kg CO</Text>
            <Text style={styles.text4}>2</Text>
          </Text>
        </View>
        <View style={styles.groupView11}>
          <View style={styles.rectangle4} />
          <View style={styles.rectangle5} />
          <View style={styles.groupView10}>
            <Text style={styles.lanceBogrol2}>Utilities</Text>
          </View>
          <Image
            style={styles.iconAwesomeCar}
            resizeMode="cover"
            source={require("../assets/icon-awesomecar1.png")}
          />
          <Text style={styles.text6}>£1458</Text>
          <Text style={styles.text8}>
            <Text style={styles.kgCO2}>7.2 kg CO</Text>
            <Text style={styles.text7}>2</Text>
          </Text>
        </View>
        <View style={styles.groupView13}>
          <View style={styles.rectangle6} />
          <View style={styles.rectangle7} />
          <View style={styles.groupView12}>
            <Text style={styles.lanceBogrol3}>Health</Text>
          </View>
          <Image
            style={styles.groupIcon1}
            resizeMode="cover"
            source={require("../assets/group-30299.png")}
          />
          <Text style={styles.text9}>£1458</Text>
          <Text style={styles.text11}>
            <Text style={styles.kgCO3}>7.2 kg CO</Text>
            <Text style={styles.text10}>2</Text>
          </Text>
        </View>
        <View style={styles.groupView14}>
          <Text style={styles.lanceBogrol4}>Spendings</Text>
          <Image
            style={styles.iconFeatherPieChart}
            resizeMode="cover"
            source={require("../assets/icon-featherpiechart.png")}
          />
        </View>
      </View>
      <View style={[styles.groupView19, styles.mt29, styles.ml_2]}>
        <View style={styles.groupView16}>
          <Text style={styles.hello9}>Month</Text>
          <Text style={styles.hello10}>Day</Text>
          <Text style={styles.hello11}>Week</Text>
          <Text style={styles.hello12}>Month</Text>
          <Text style={styles.hello13}>Year</Text>
        </View>
        <View style={styles.lineView} />
        <View style={styles.groupView18}>
          <Image
            style={styles.path23773Icon}
            resizeMode="cover"
            source={require("../assets/path-23773.png")}
          />
          <View style={styles.lineView1} />
          <Image
            style={styles.path23772Icon}
            resizeMode="cover"
            source={require("../assets/path-23772.png")}
          />
          <ScrollView
            style={styles.scrollGroup16}
            contentContainerStyle={styles.scrollGroup16Content}
          >
            <Text style={styles.hello14}>Mar</Text>
            <Text style={[styles.hello15, styles.mt_14, styles.ml129]}>
              Jun
            </Text>
            <Text style={[styles.hello16, styles.mt_14, styles.ml43]}>Apr</Text>
            <Text style={[styles.hello17, styles.mt_14, styles.ml172]}>
              Jul
            </Text>
            <Text style={[styles.hello18, styles.mt_14, styles.ml84]}>May</Text>
            <Text style={[styles.hello19, styles.mt_14, styles.ml213]}>
              Aug
            </Text>
            <Text style={[styles.hello20, styles.mt_14, styles.ml256]}>
              Sept
            </Text>
            <Text style={[styles.hello21, styles.mt_14, styles.ml303]}>
              Oct
            </Text>
            <Text style={[styles.hello22, styles.mt_14]}>Nov</Text>
            <Text style={[styles.hello23, styles.mt_14, styles.ml391]}>
              Dec
            </Text>
            <Text style={[styles.hello24, styles.mt_14, styles.ml434]}>
              Jan
            </Text>
            <Text style={[styles.hello25, styles.mt_14, styles.ml479]}>
              Feb
            </Text>
          </ScrollView>
          <View style={styles.lineView2} />
          <Image
            style={styles.ellipseIcon}
            resizeMode="cover"
            source={require("../assets/ellipse-3200.png")}
          />
          <Image
            style={styles.ellipseIcon1}
            resizeMode="cover"
            source={require("../assets/ellipse-3199.png")}
          />
          <View style={styles.groupView17}>
            <Image
              style={styles.union23Icon}
              resizeMode="cover"
              source={require("../assets/union-23.png")}
            />
            <Text style={styles.hello26}>£ 20.00</Text>
          </View>
          <View style={styles.homeIndicator} />
        </View>
      </View>
      <View style={[styles.groupView26, styles.mt34, styles.ml25]}>
        <View style={styles.groupView21}>
          <View style={styles.groupView20}>
            <Text style={styles.lanceBogrol5}>Wallmart</Text>
            <Text style={styles.moneyTransfer}>
              <Text style={styles.september222022}>September 22, 2022</Text>
              <Text style={styles.pM}>12:06 PM</Text>
            </Text>
          </View>
          <Image
            style={styles.walmartIcon}
            resizeMode="cover"
            source={require("../assets/walmarticon.png")}
          />
          <Text style={styles.text12}>£1458</Text>
          <Text style={styles.text14}>
            <Text style={styles.kgCO4}>7.2 kg CO</Text>
            <Text style={styles.text13}>2</Text>
          </Text>
        </View>
        <View style={styles.groupView23}>
          <View style={styles.groupView22}>
            <Text style={styles.lanceBogrol6}>Adidas</Text>
            <Text style={styles.moneyTransfer1}>
              <Text style={styles.september2220221}>September 22, 2022</Text>
              <Text style={styles.pM1}>12:06 PM</Text>
            </Text>
          </View>
          <Image
            style={styles.maskGroup16}
            resizeMode="cover"
            source={require("../assets/mask-group-162.png")}
          />
        </View>
        <View style={styles.groupView25}>
          <View style={styles.groupView24}>
            <Text style={styles.lanceBogrol7}>Grocery Market</Text>
            <Text style={styles.moneyTransfer2}>
              <Text style={styles.september2220222}>September 22, 2022</Text>
              <Text style={styles.pM2}>12:06 PM</Text>
            </Text>
          </View>
          <Image
            style={styles.maskGroup14}
            resizeMode="cover"
            source={require("../assets/mask-group-146.png")}
          />
          <Image
            style={styles.groupIcon2}
            resizeMode="cover"
            source={require("../assets/group-30454.png")}
          />
          <Text style={styles.text15}>£1458</Text>
          <Text style={styles.text17}>
            <Text style={styles.kgCO5}>7.2 kg CO</Text>
            <Text style={styles.text16}>2</Text>
          </Text>
        </View>
        <Text style={styles.history}>Recent Transactions</Text>
        <Image
          style={styles.transationsIcon}
          resizeMode="cover"
          source={require("../assets/path-23663.png")}
        />
        <Text style={styles.text18}>£1458</Text>
        <Text style={styles.text20}>
          <Text style={styles.kgCO6}>7.2 kg CO</Text>
          <Text style={styles.text19}>2</Text>
        </Text>
      </View>
      <View style={[styles.groupView37, styles.mt52, styles.ml25]}>
        <View style={styles.groupView28}>
          <View style={styles.groupView27}>
            <Text style={styles.lanceBogrol8}>House Rent</Text>
            <Text style={styles.moneyTransfer3}>Due Tomorrow</Text>
          </View>
          <Text style={styles.text21}>£350.00</Text>
          <Image
            style={styles.walmartIcon1}
            resizeMode="cover"
            source={require("../assets/walmarticon1.png")}
          />
        </View>
        <View style={styles.groupView31}>
          <View style={styles.groupView30}>
            <View style={styles.groupView29}>
              <Text style={styles.lanceBogrol9}>Amazon Prime</Text>
              <Text style={styles.moneyTransfer4}>in 5 Days</Text>
            </View>
          </View>
          <Text style={styles.text22}>£50.00</Text>
          <Image
            style={styles.maskGroup161}
            resizeMode="cover"
            source={require("../assets/mask-group-163.png")}
          />
        </View>
        <View style={styles.groupView35}>
          <View style={styles.groupView34}>
            <View style={styles.groupView32}>
              <Text style={styles.lanceBogrol10}>Netflix</Text>
            </View>
            <View style={styles.groupView33}>
              <Text style={styles.moneyTransfer5}>in a week</Text>
            </View>
          </View>
          <Text style={styles.text23}>£70.00</Text>
          <Image
            style={styles.maskGroup141}
            resizeMode="cover"
            source={require("../assets/mask-group-147.png")}
          />
        </View>
        <View style={styles.groupView36}>
          <Text style={styles.lanceBogrol11}>Upcoming Spendings</Text>
          <Image
            style={styles.iconFeatherPieChart1}
            resizeMode="cover"
            source={require("../assets/icon-featherpiechart.png")}
          />
        </View>
        <Image
          style={styles.groupIcon3}
          resizeMode="cover"
          source={require("../assets/group-30454.png")}
        />
      </View>
      <View style={[styles.statusBarBlack, styles.mt_1788]}>
        <View style={styles.rectangle8} />
        <View style={styles.statusBar}>
          <View style={styles.time}>
            <Text style={styles.text24}>9:41</Text>
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
      <View style={[styles.component2124, styles.mt11, styles.ml33]}>
        <Pressable
          style={styles.history1}
          onPress={() => navigation.navigate("Account3")}
        >
          <Text style={styles.account}>Account</Text>
        </Pressable>
        <Text style={styles.history2}>Analysis</Text>
        <Pressable
          style={styles.history3}
          onPress={() => navigation.navigate("Carbon")}
        >
          <Text style={styles.carbon}>Carbon</Text>
        </Pressable>
        <Pressable
          style={styles.history4}
          onPress={() => navigation.navigate("Settings")}
        >
          <Text style={styles.profile}>Profile</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mt_14: {
    marginTop: -14,
  },
  ml129: {
    marginLeft: 129,
  },
  ml43: {
    marginLeft: 43,
  },
  ml172: {
    marginLeft: 172,
  },
  ml84: {
    marginLeft: 84,
  },
  ml213: {
    marginLeft: 213,
  },
  ml256: {
    marginLeft: 256,
  },
  ml303: {
    marginLeft: 303,
  },
  ml391: {
    marginLeft: 391,
  },
  ml434: {
    marginLeft: 434,
  },
  ml479: {
    marginLeft: 479,
  },
  scrollGroup16Content: {
    flexDirection: "column",
  },
  mt22: {
    marginTop: 22,
  },
  ml35: {
    marginLeft: 35,
  },
  mt_88: {
    marginTop: -88,
  },
  ml203: {
    marginLeft: 203,
  },
  mt12: {
    marginTop: 12,
  },
  mt27: {
    marginTop: 27,
  },
  ml25: {
    marginLeft: 25,
  },
  mt37: {
    marginTop: 37,
  },
  mt29: {
    marginTop: 29,
  },
  ml_2: {
    marginLeft: -2,
  },
  mt34: {
    marginTop: 34,
  },
  mt52: {
    marginTop: 52,
  },
  mt_1788: {
    marginTop: -1788,
  },
  mt11: {
    marginTop: 11,
  },
  ml33: {
    marginLeft: 33,
  },
  rectangleView: {
    position: "relative",
    backgroundColor: "#f6f5f8",
    width: 375,
    height: 1805,
  },
  hello: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 14,
    lineHeight: 16,
    fontFamily: "Helvetica",
    color: "#00003d",
    textAlign: "left",
  },
  hello1: {
    position: "absolute",
    bottom: 0,
    left: 0,
    fontSize: 18,
    lineHeight: 14,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#0101fd",
    textAlign: "left",
  },
  groupView: {
    position: "absolute",
    top: 10,
    left: 11,
    width: 80,
    height: 37,
  },
  noOf: {
    margin: 0,
  },
  payments: {
    margin: 0,
  },
  hello2: {
    position: "absolute",
    bottom: 6,
    left: 11,
    fontSize: 12,
    lineHeight: 12,
    fontFamily: "Helvetica",
    color: "#999",
    textAlign: "left",
  },
  hello3: {
    position: "absolute",
    right: 14,
    bottom: 10,
    fontSize: 16,
    lineHeight: 14,
    fontFamily: "Helvetica",
    color: "#999",
    textAlign: "left",
  },
  rectangleIcon: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    opacity: 0.2,
  },
  groupView1: {
    position: "relative",
    borderRadius: 15,
    backgroundColor: "#fff",
    shadowColor: "rgba(1, 1, 253, 0.05)",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 6,
    elevation: 6,
    shadowOpacity: 1,
    width: 142,
    height: 88,
  },
  averageMonthly: {
    margin: 0,
  },
  spendings: {
    margin: 0,
  },
  hello4: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 14,
    lineHeight: 16,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#00003d",
    textAlign: "left",
  },
  hello5: {
    position: "absolute",
    bottom: 0,
    left: 6,
    fontSize: 16,
    lineHeight: 14,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#0101fd",
    textAlign: "left",
  },
  groupView2: {
    position: "absolute",
    top: 12,
    right: 15,
    left: 15,
    height: 62,
  },
  rectangleIcon1: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    opacity: 0.2,
  },
  groupView3: {
    position: "relative",
    borderRadius: 15,
    backgroundColor: "#fff",
    shadowColor: "rgba(1, 1, 253, 0.05)",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 6,
    elevation: 6,
    shadowOpacity: 1,
    width: 142,
    height: 88,
  },
  hello6: {
    position: "absolute",
    marginTop: -8.5,
    top: "50%",
    left: 0,
    fontSize: 14,
    lineHeight: 16,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#00003d",
    textAlign: "left",
  },
  hello7: {
    position: "absolute",
    top: 0,
    right: -1,
    fontSize: 28,
    lineHeight: 25,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#0101fd",
    textAlign: "left",
  },
  groupView4: {
    position: "absolute",
    marginTop: -16.5,
    top: "50%",
    right: 19,
    left: 15,
    height: 31,
  },
  rectangleIcon2: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    opacity: 0.2,
  },
  groupView5: {
    position: "relative",
    borderRadius: 15,
    backgroundColor: "#fff",
    shadowColor: "rgba(1, 1, 253, 0.05)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 6,
    elevation: 6,
    shadowOpacity: 1,
    width: 310,
    height: 65,
  },
  hello8: {
    position: "relative",
    fontSize: 26,
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
    borderRadius: 19,
    backgroundColor: "#fff",
    shadowColor: "rgba(1, 1, 253, 0.05)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 20,
    elevation: 20,
    shadowOpacity: 1,
  },
  rectangle1: {
    position: "absolute",
    top: 0,
    right: 255,
    bottom: 0,
    left: 0,
    borderTopLeftRadius: 19,
    borderBottomLeftRadius: 19,
    backgroundColor: "#e4732d",
  },
  lanceBogrol: {
    position: "absolute",
    marginTop: -7,
    top: "50%",
    left: "0%",
    fontSize: 12,
    letterSpacing: 1,
    fontFamily: "Helvetica",
    color: "#00003d",
    textAlign: "left",
  },
  groupView6: {
    position: "absolute",
    marginTop: -7.5,
    marginLeft: -102.83,
    top: "50%",
    left: "50%",
    width: 57,
    height: 14,
  },
  text: {
    position: "absolute",
    marginTop: -13.25,
    top: "50%",
    left: "82.26%",
    fontSize: 14,
    letterSpacing: 1,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#0101fd",
    textAlign: "right",
  },
  bagShoppingSolidIcon: {
    position: "absolute",
    marginTop: -8.01,
    marginLeft: -145.26,
    top: "50%",
    left: "50%",
    width: 13,
    height: 15,
  },
  kgCO: {
    fontSize: 8,
  },
  text1: {
    fontSize: 4,
    verticalAlign: "sub",
  },
  text2: {
    position: "absolute",
    right: 11,
    bottom: 2,
    letterSpacing: 0,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#999",
    textAlign: "right",
  },
  groupView7: {
    position: "absolute",
    marginTop: -56.25,
    top: "50%",
    right: 0,
    left: 0,
    height: 33,
  },
  rectangle2: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: 19,
    backgroundColor: "#fff",
    shadowColor: "rgba(1, 1, 253, 0.05)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 20,
    elevation: 20,
    shadowOpacity: 1,
  },
  rectangle3: {
    position: "absolute",
    top: 0,
    right: 124,
    bottom: 0,
    left: 0,
    borderTopLeftRadius: 19,
    borderBottomLeftRadius: 19,
    backgroundColor: "#f3b53f",
  },
  lanceBogrol1: {
    position: "absolute",
    marginTop: -7,
    top: "50%",
    left: "0%",
    fontSize: 12,
    letterSpacing: 1,
    fontFamily: "Helvetica",
    color: "#00003d",
    textAlign: "left",
  },
  groupView8: {
    position: "absolute",
    marginTop: -7.5,
    marginLeft: -102.55,
    top: "50%",
    left: "50%",
    width: 86,
    height: 14,
  },
  groupIcon: {
    position: "absolute",
    top: 10,
    left: 13,
    width: 15,
    height: 13,
  },
  text3: {
    position: "absolute",
    marginTop: -14.25,
    top: "50%",
    left: "82.26%",
    fontSize: 14,
    letterSpacing: 1,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#0101fd",
    textAlign: "right",
  },
  kgCO1: {
    fontSize: 8,
  },
  text4: {
    fontSize: 4,
    verticalAlign: "sub",
  },
  text5: {
    position: "absolute",
    right: 11,
    bottom: 3,
    letterSpacing: 0,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#999",
    textAlign: "right",
  },
  groupView9: {
    position: "absolute",
    marginTop: -14.25,
    top: "50%",
    right: 0,
    left: 0,
    height: 33,
  },
  rectangle4: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: 19,
    backgroundColor: "#fff",
    shadowColor: "rgba(1, 1, 253, 0.05)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 20,
    elevation: 20,
    shadowOpacity: 1,
  },
  rectangle5: {
    position: "absolute",
    top: 0,
    right: 155,
    bottom: 0,
    left: 0,
    borderTopLeftRadius: 19,
    borderBottomLeftRadius: 19,
    backgroundColor: "#dc85f5",
  },
  lanceBogrol2: {
    position: "absolute",
    marginTop: -7,
    top: "50%",
    left: "0%",
    fontSize: 12,
    letterSpacing: 1,
    fontFamily: "Helvetica",
    color: "#00003d",
    textAlign: "left",
  },
  groupView10: {
    position: "absolute",
    marginTop: -7.5,
    marginLeft: -102.92,
    top: "50%",
    left: "50%",
    width: 46,
    height: 14,
  },
  iconAwesomeCar: {
    position: "absolute",
    top: 12,
    right: 290,
    bottom: 10,
    left: 14,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  text6: {
    position: "absolute",
    marginTop: -14.25,
    top: "50%",
    left: "82.26%",
    fontSize: 14,
    letterSpacing: 1,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#0101fd",
    textAlign: "right",
  },
  kgCO2: {
    fontSize: 8,
  },
  text7: {
    fontSize: 4,
    verticalAlign: "sub",
  },
  text8: {
    position: "absolute",
    right: 11,
    bottom: 3,
    letterSpacing: 0,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#999",
    textAlign: "right",
  },
  groupView11: {
    position: "absolute",
    marginTop: 27.75,
    top: "50%",
    right: 0,
    left: 0,
    height: 33,
  },
  rectangle6: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: 19,
    backgroundColor: "#fff",
    shadowColor: "rgba(1, 1, 253, 0.05)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 20,
    elevation: 20,
    shadowOpacity: 1,
  },
  rectangle7: {
    position: "absolute",
    top: 0,
    right: 196,
    bottom: 0,
    left: 0,
    borderTopLeftRadius: 19,
    borderBottomLeftRadius: 19,
    backgroundColor: "#5888f5",
  },
  lanceBogrol3: {
    position: "absolute",
    marginTop: -7,
    top: "50%",
    left: "0%",
    fontSize: 12,
    letterSpacing: 1,
    fontFamily: "Helvetica",
    color: "#00003d",
    textAlign: "left",
  },
  groupView12: {
    position: "absolute",
    marginTop: -7.5,
    marginLeft: -102.98,
    top: "50%",
    left: "50%",
    width: 39,
    height: 14,
  },
  groupIcon1: {
    position: "absolute",
    marginTop: -3.53,
    top: "50%",
    left: 15,
    width: 12,
    height: 11,
  },
  text9: {
    position: "absolute",
    marginTop: -14.25,
    top: "50%",
    left: "82.26%",
    fontSize: 14,
    letterSpacing: 1,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#0101fd",
    textAlign: "right",
  },
  kgCO3: {
    fontSize: 8,
  },
  text10: {
    fontSize: 4,
    verticalAlign: "sub",
  },
  text11: {
    position: "absolute",
    right: 11,
    bottom: 3,
    letterSpacing: 0,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#999",
    textAlign: "right",
  },
  groupView13: {
    position: "absolute",
    right: 0,
    bottom: 0,
    left: 0,
    height: 33,
  },
  lanceBogrol4: {
    position: "absolute",
    marginTop: -12,
    top: "50%",
    left: "22.22%",
    fontSize: 18,
    letterSpacing: 1,
    fontWeight: "700",
    fontFamily: "Typo Grotesk",
    color: "#00003d",
    textAlign: "left",
  },
  iconFeatherPieChart: {
    position: "absolute",
    height: "87.52%",
    width: "16.68%",
    top: "14.58%",
    right: "83.32%",
    bottom: "-2.11%",
    left: "0%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  groupView14: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 126,
    height: 24,
  },
  groupView15: {
    position: "relative",
    width: 320,
    height: 206,
  },
  hello9: {
    position: "absolute",
    top: 1,
    left: 162,
    fontSize: 16,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#0101fd",
    textAlign: "left",
  },
  hello10: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 16,
    lineHeight: 16,
    fontFamily: "Helvetica",
    color: "#999",
    textAlign: "left",
  },
  hello11: {
    position: "absolute",
    top: 0,
    left: 76,
    fontSize: 16,
    lineHeight: 16,
    fontFamily: "Helvetica",
    color: "#888",
    textAlign: "left",
  },
  hello12: {
    position: "absolute",
    top: 0,
    left: 164,
    fontSize: 16,
    lineHeight: 16,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#0101fd",
    textAlign: "left",
  },
  hello13: {
    position: "absolute",
    top: 0,
    left: 255,
    fontSize: 16,
    lineHeight: 16,
    fontFamily: "Helvetica",
    color: "#888",
    textAlign: "left",
  },
  groupView16: {
    position: "absolute",
    top: 0,
    right: 43,
    left: 46,
    height: 18,
  },
  lineView: {
    position: "absolute",
    top: 25,
    right: 0,
    left: 2,
    borderStyle: "solid",
    borderColor: "#000",
    borderTopWidth: 1,
    height: 2,
  },
  path23773Icon: {
    position: "absolute",
    top: 22,
    right: 1,
    bottom: 19,
    left: 0,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  lineView1: {
    position: "absolute",
    right: 0,
    bottom: 18,
    left: 2,
    borderStyle: "solid",
    borderColor: "#000",
    borderTopWidth: 1,
    height: 2,
  },
  path23772Icon: {
    position: "absolute",
    top: 20,
    right: -1,
    left: 7,
    maxWidth: "100%",
    overflow: "hidden",
    height: 143,
  },
  hello14: {
    position: "relative",
    fontSize: 12,
    fontFamily: "Helvetica",
    color: "#999",
    textAlign: "left",
  },
  hello15: {
    position: "relative",
    fontSize: 12,
    fontFamily: "Helvetica",
    color: "#999",
    textAlign: "left",
  },
  hello16: {
    position: "relative",
    fontSize: 12,
    fontFamily: "Helvetica",
    color: "#999",
    textAlign: "left",
  },
  hello17: {
    position: "relative",
    fontSize: 12,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#0101fd",
    textAlign: "left",
  },
  hello18: {
    position: "relative",
    fontSize: 12,
    fontFamily: "Helvetica",
    color: "#999",
    textAlign: "left",
  },
  hello19: {
    position: "relative",
    fontSize: 12,
    fontFamily: "Helvetica",
    color: "#999",
    textAlign: "left",
  },
  hello20: {
    position: "relative",
    fontSize: 12,
    fontFamily: "Helvetica",
    color: "#999",
    textAlign: "left",
  },
  hello21: {
    position: "relative",
    fontSize: 12,
    fontFamily: "Helvetica",
    color: "#999",
    textAlign: "left",
  },
  hello22: {
    position: "relative",
    fontSize: 12,
    fontFamily: "Helvetica",
    color: "#999",
    textAlign: "left",
    alignSelf: "flex-end",
  },
  hello23: {
    position: "relative",
    fontSize: 12,
    fontFamily: "Helvetica",
    color: "#999",
    textAlign: "left",
  },
  hello24: {
    position: "relative",
    fontSize: 12,
    fontFamily: "Helvetica",
    color: "#999",
    textAlign: "left",
  },
  hello25: {
    position: "relative",
    fontSize: 12,
    fontFamily: "Helvetica",
    color: "#999",
    textAlign: "left",
  },
  scrollGroup16: {
    position: "absolute",
    right: 0,
    bottom: 0,
    left: 12,
    height: 14,
  },
  lineView2: {
    position: "absolute",
    marginLeft: 10.9,
    bottom: 19,
    left: "50%",
    borderStyle: "dashed",
    borderColor: "#707070",
    borderRadius: 0.001,
    borderRightWidth: 1,
    width: 2,
    height: 127,
  },
  ellipseIcon: {
    position: "absolute",
    marginTop: -62.5,
    marginLeft: 1.69,
    top: "50%",
    left: "50%",
    width: 22,
    height: 22,
    opacity: 0.45,
  },
  ellipseIcon1: {
    position: "absolute",
    marginTop: -56.5,
    marginLeft: 7.69,
    top: "50%",
    left: "50%",
    width: 10,
    height: 10,
  },
  union23Icon: {
    position: "absolute",
    top: 0,
    right: -18,
    bottom: -18,
    left: 0,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  hello26: {
    position: "absolute",
    bottom: 13,
    left: 15,
    fontSize: 10,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#0101fd",
    textAlign: "left",
  },
  groupView17: {
    position: "absolute",
    marginLeft: -19.31,
    top: 0,
    left: "50%",
    width: 63,
    height: 34,
  },
  homeIndicator: {
    position: "absolute",
    marginTop: 41.5,
    top: "50%",
    right: 120,
    left: 123,
    borderRadius: 100,
    backgroundColor: "#000",
    height: 5,
  },
  groupView18: {
    position: "absolute",
    top: 67,
    right: 0,
    bottom: 0,
    left: 0,
  },
  groupView19: {
    position: "relative",
    width: 377,
    height: 260,
  },
  lanceBogrol5: {
    position: "absolute",
    marginTop: -18.5,
    top: "50%",
    left: "0%",
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
    marginTop: -3.5,
    top: "50%",
    left: "0%",
    fontSize: 10,
    letterSpacing: 1,
    fontFamily: "Helvetica",
    color: "#7c7c7c",
    textAlign: "left",
  },
  groupView20: {
    position: "absolute",
    marginTop: -18,
    marginLeft: -97.08,
    top: "50%",
    left: "50%",
    width: 105,
    height: 37,
  },
  walmartIcon: {
    position: "absolute",
    marginTop: -16,
    top: "50%",
    left: 14,
    width: 34,
    height: 34,
  },
  text12: {
    position: "absolute",
    marginTop: -18,
    top: "50%",
    left: "70.97%",
    fontSize: 21,
    letterSpacing: 1,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#0101fd",
    textAlign: "right",
  },
  kgCO4: {
    fontSize: 12,
  },
  text13: {
    fontSize: 7,
    verticalAlign: "sub",
  },
  text14: {
    position: "absolute",
    right: 24,
    bottom: 9,
    letterSpacing: 1,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#999",
    textAlign: "right",
  },
  groupView21: {
    position: "absolute",
    marginTop: -97.49,
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
  lanceBogrol6: {
    position: "absolute",
    marginTop: -18.5,
    top: "50%",
    left: "0%",
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
    marginTop: -3.5,
    top: "50%",
    left: "0%",
    fontSize: 10,
    letterSpacing: 1,
    fontFamily: "Helvetica",
    color: "#7c7c7c",
    textAlign: "left",
  },
  groupView22: {
    position: "absolute",
    marginTop: -18,
    marginLeft: -97.08,
    top: "50%",
    left: "50%",
    width: 105,
    height: 37,
  },
  maskGroup16: {
    position: "absolute",
    marginTop: -16,
    top: "50%",
    left: 14,
    width: 34,
    height: 34,
  },
  groupView23: {
    position: "absolute",
    marginTop: -21.49,
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
  lanceBogrol7: {
    position: "absolute",
    marginTop: -18.5,
    top: "50%",
    left: "0%",
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
    marginTop: -3.5,
    top: "50%",
    left: "0%",
    fontSize: 10,
    letterSpacing: 1,
    fontFamily: "Helvetica",
    color: "#7c7c7c",
    textAlign: "left",
  },
  groupView24: {
    position: "absolute",
    marginTop: -29.49,
    marginLeft: -97.08,
    top: "50%",
    left: "50%",
    width: 105,
    height: 37,
  },
  maskGroup14: {
    position: "absolute",
    marginTop: -27.49,
    top: "50%",
    left: 14,
    width: 34,
    height: 34,
  },
  groupIcon2: {
    position: "absolute",
    marginLeft: -8.2,
    bottom: 0,
    left: "50%",
    width: 18,
    height: 17,
  },
  text15: {
    position: "absolute",
    marginTop: -31.49,
    top: "50%",
    left: "70.97%",
    fontSize: 21,
    letterSpacing: 1,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#0101fd",
    textAlign: "right",
  },
  kgCO5: {
    fontSize: 12,
  },
  text16: {
    fontSize: 7,
    verticalAlign: "sub",
  },
  text17: {
    position: "absolute",
    marginTop: -6.02,
    top: "50%",
    right: 24,
    letterSpacing: 1,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#999",
    textAlign: "right",
  },
  groupView25: {
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
    height: 87,
  },
  history: {
    position: "absolute",
    marginTop: -141.49,
    top: "50%",
    left: "11.29%",
    fontSize: 18,
    letterSpacing: 1,
    fontWeight: "700",
    fontFamily: "Typo Grotesk",
    color: "#00003d",
    textAlign: "left",
  },
  transationsIcon: {
    position: "absolute",
    top: 6,
    left: 5,
    width: 19,
    height: 20,
  },
  text18: {
    position: "absolute",
    marginTop: -10.49,
    top: "50%",
    left: "70.97%",
    fontSize: 21,
    letterSpacing: 1,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#0101fd",
    textAlign: "right",
  },
  kgCO6: {
    fontSize: 12,
  },
  text19: {
    fontSize: 7,
    verticalAlign: "sub",
  },
  text20: {
    position: "absolute",
    marginTop: 14.98,
    top: "50%",
    right: 24,
    letterSpacing: 1,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#999",
    textAlign: "right",
  },
  groupView26: {
    position: "relative",
    width: 320,
    height: 283,
  },
  lanceBogrol8: {
    position: "absolute",
    marginTop: -13,
    top: "50%",
    left: "0%",
    fontSize: 12,
    letterSpacing: 1,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#00003d",
    textAlign: "left",
  },
  moneyTransfer3: {
    position: "absolute",
    marginTop: 2,
    top: "50%",
    left: "0%",
    fontSize: 10,
    letterSpacing: 1,
    fontFamily: "Helvetica",
    color: "#7c7c7c",
    textAlign: "left",
  },
  groupView27: {
    position: "absolute",
    marginTop: -12,
    marginLeft: -97,
    top: "50%",
    left: "50%",
    width: 74,
    height: 26,
  },
  text21: {
    position: "absolute",
    marginTop: -8,
    top: "50%",
    left: "74.06%",
    fontSize: 14,
    letterSpacing: 1,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#00003d",
    textAlign: "right",
  },
  walmartIcon1: {
    position: "absolute",
    marginTop: -16,
    top: "50%",
    left: 14,
    width: 34,
    height: 34,
  },
  groupView28: {
    position: "absolute",
    marginTop: -97.49,
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
  lanceBogrol9: {
    position: "absolute",
    marginTop: -13,
    top: "50%",
    left: "0%",
    fontSize: 12,
    letterSpacing: 1,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#00003d",
    textAlign: "left",
  },
  moneyTransfer4: {
    position: "absolute",
    marginTop: 2,
    top: "50%",
    left: "0%",
    fontSize: 10,
    letterSpacing: 1,
    fontFamily: "Helvetica",
    color: "#7c7c7c",
    textAlign: "left",
  },
  groupView29: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  groupView30: {
    position: "absolute",
    marginTop: -12,
    marginLeft: -97,
    top: "50%",
    left: "50%",
    width: 93,
    height: 26,
  },
  text22: {
    position: "absolute",
    marginTop: -8,
    top: "50%",
    left: "76.88%",
    fontSize: 14,
    letterSpacing: 1,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#00003d",
    textAlign: "right",
  },
  maskGroup161: {
    position: "absolute",
    marginTop: -16,
    top: "50%",
    left: 14,
    width: 34,
    height: 34,
  },
  groupView31: {
    position: "absolute",
    marginTop: -21.49,
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
  lanceBogrol10: {
    position: "absolute",
    marginTop: -7,
    top: "50%",
    left: "0%",
    fontSize: 12,
    letterSpacing: 1,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#00003d",
    textAlign: "left",
  },
  groupView32: {
    position: "absolute",
    top: 0,
    right: 7,
    left: 0,
    height: 14,
  },
  moneyTransfer5: {
    position: "absolute",
    marginTop: -5.5,
    top: "50%",
    left: "0%",
    fontSize: 10,
    letterSpacing: 1,
    fontFamily: "Helvetica",
    color: "#7c7c7c",
    textAlign: "left",
  },
  groupView33: {
    position: "absolute",
    right: 0,
    bottom: 0,
    left: 0,
    height: 11,
  },
  groupView34: {
    position: "absolute",
    marginTop: -12,
    marginLeft: -98,
    top: "50%",
    left: "50%",
    width: 49,
    height: 26,
  },
  text23: {
    position: "absolute",
    marginTop: -8,
    top: "50%",
    left: "76.88%",
    fontSize: 14,
    letterSpacing: 1,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#00003d",
    textAlign: "right",
  },
  maskGroup141: {
    position: "absolute",
    marginTop: -16,
    top: "50%",
    left: 14,
    width: 34,
    height: 34,
  },
  groupView35: {
    position: "absolute",
    right: 0,
    bottom: 25,
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
  lanceBogrol11: {
    position: "absolute",
    marginTop: -12,
    top: "50%",
    left: "12.17%",
    fontSize: 18,
    letterSpacing: 1,
    fontWeight: "700",
    fontFamily: "Typo Grotesk",
    color: "#00003d",
    textAlign: "left",
  },
  iconFeatherPieChart1: {
    position: "absolute",
    height: "87.52%",
    width: "9.14%",
    top: "14.58%",
    right: "90.86%",
    bottom: "-2.11%",
    left: "0%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  groupView36: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 230,
    height: 24,
  },
  groupIcon3: {
    position: "absolute",
    marginLeft: -8.19,
    bottom: 0,
    left: "50%",
    width: 18,
    height: 17,
  },
  groupView37: {
    position: "relative",
    width: 320,
    height: 288,
  },
  rectangle8: {
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
  text24: {
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
  account: {
    marginTop: -8.5,
    fontSize: 16,
    letterSpacing: 1,
    fontFamily: "Helvetica",
    color: "#999",
    textAlign: "left",
    opacity: 0.3,
  },
  history1: {
    position: "absolute",
    left: "0%",
    top: "50%",
  },
  history2: {
    position: "absolute",
    marginTop: -8.5,
    top: "50%",
    left: "29.17%",
    fontSize: 16,
    letterSpacing: 1,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#999",
    textAlign: "left",
  },
  carbon: {
    marginTop: -8.5,
    fontSize: 16,
    letterSpacing: 1,
    fontFamily: "Helvetica",
    color: "#999",
    textAlign: "left",
    opacity: 0.3,
  },
  history3: {
    position: "absolute",
    left: "58.68%",
    top: "50%",
  },
  profile: {
    marginTop: -7.5,
    fontSize: 14,
    letterSpacing: 1,
    fontFamily: "Helvetica",
    color: "#999",
    textAlign: "left",
    opacity: 0.3,
  },
  history4: {
    position: "absolute",
    left: "84.72%",
    top: "50%",
  },
  component2124: {
    position: "relative",
    width: 288,
    height: 19,
  },
  analytics: {
    position: "relative",
    backgroundColor: "#4b4b4b",
    flex: 1,
    width: "100%",
    flexDirection: "column",
    alignItems: "flex-start",
  },
});

export default Analytics;
