import * as React from "react";
import {
  StyleSheet,
  View,
  Image,
  Pressable,
  Text,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const ChooseCurrency = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.chooseCurrency}>
      <View style={styles.rectangleView} />
      <Pressable
        style={[styles.groupPressable, styles.mt2]}
        onPress={() => navigation.navigate("ChooseCardsStandard")}
      >
        <Image
          style={styles.iconFeatherArrowLeft}
          resizeMode="cover"
          source={require("../assets/icon-featherarrowleft.png")}
        />
      </Pressable>
      <View style={[styles.homeIndicator, styles.mt36, styles.ml121]} />
      <Text style={[styles.hello, styles.mt10, styles.ml27]}>
        <Text style={styles.currencyYouWould}>Currency you would like</Text>
        <Text style={styles.toProceedWith}>to proceed with</Text>
      </Text>
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
      <ScrollView
        style={[styles.scrollGroup22, styles.mt1, styles.ml24]}
        contentContainerStyle={styles.scrollGroup22Content}
      >
        <View style={styles.groupView3}>
          <View style={styles.rectangleView5} />
          <View style={styles.groupView2}>
            <View style={styles.groupView1}>
              <View style={styles.groupView}>
                <Text style={styles.gBP}>GBP</Text>
                <Text style={styles.britishPounds}>British Pounds</Text>
              </View>
              <Image
                style={styles.maskGroup241}
                resizeMode="cover"
                source={require("../assets/mask-group-241.png")}
              />
            </View>
          </View>
          <Image
            style={styles.groupIcon}
            resizeMode="cover"
            source={require("../assets/group-30825.png")}
          />
        </View>
        <View style={[styles.groupView7, styles.mt9_95]}>
          <View style={styles.rectangleView6} />
          <View style={styles.groupView6}>
            <View style={styles.groupView5}>
              <View style={styles.groupView4}>
                <Text style={styles.cNY}>CNY</Text>
                <Text style={styles.chineseYuan}>Chinese Yuan</Text>
              </View>
              <Image
                style={styles.groupIcon1}
                resizeMode="cover"
                source={require("../assets/group-241.png")}
              />
            </View>
          </View>
        </View>
        <View style={[styles.groupView11, styles.mt9_95]}>
          <View style={styles.rectangleView7} />
          <View style={styles.groupView10}>
            <View style={styles.groupView9}>
              <View style={styles.groupView8}>
                <Text style={styles.eUR}>EUR</Text>
                <Text style={styles.euro}>Euro</Text>
              </View>
              <Image
                style={styles.maskGroup2411}
                resizeMode="cover"
                source={require("../assets/mask-group-2411.png")}
              />
            </View>
          </View>
        </View>
        <View style={[styles.groupView15, styles.mt9_95]}>
          <View style={styles.rectangleView8} />
          <View style={styles.groupView14}>
            <View style={styles.groupView13}>
              <View style={styles.groupView12}>
                <Text style={styles.cAD}>CAD</Text>
                <Text style={styles.canadianDollar}>Canadian Dollar</Text>
              </View>
              <Image
                style={styles.maskGroup2412}
                resizeMode="cover"
                source={require("../assets/mask-group-2412.png")}
              />
            </View>
          </View>
        </View>
        <View style={[styles.groupView19, styles.mt9_95]}>
          <View style={styles.rectangleView9} />
          <View style={styles.groupView18}>
            <View style={styles.groupView17}>
              <View style={styles.groupView16}>
                <Text style={styles.uSD}>USD</Text>
                <Text style={styles.uSDollar}>US Dollar</Text>
              </View>
              <Image
                style={styles.maskGroup2413}
                resizeMode="cover"
                source={require("../assets/mask-group-2413.png")}
              />
            </View>
          </View>
        </View>
        <View style={[styles.groupView23, styles.mt9_95]}>
          <View style={styles.rectangleView10} />
          <View style={styles.groupView22}>
            <View style={styles.groupView21}>
              <View style={styles.groupView20}>
                <Text style={styles.jPY}>JPY</Text>
                <Text style={styles.japaneseYen}>Japanese Yen</Text>
              </View>
              <Image
                style={styles.maskGroup2414}
                resizeMode="cover"
                source={require("../assets/mask-group-2414.png")}
              />
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={[styles.groupView24, styles.mt34]}>
        <Image
          style={styles.iconAwesomeSearch}
          resizeMode="cover"
          source={require("../assets/icon-awesomesearch.png")}
        />
        <Image
          style={styles.iconMaterialKeyboardVoice}
          resizeMode="cover"
          source={require("../assets/icon-materialkeyboardvoice.png")}
        />
      </View>
      <Pressable
        style={[styles.groupPressable1, styles.mt28, styles.ml25]}
        onPress={() => navigation.navigate("LogoAnimation1")}
      >
        <View style={styles.component20821}>
          <View style={styles.groupView25}>
            <View style={styles.rectangleView11} />
            <View style={styles.maskGroup236} />
          </View>
        </View>
        <Text style={styles.hello1}>Continue</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  mt9_95: {
    marginTop: 9.95,
  },
  scrollGroup22Content: {
    flexDirection: "column",
    paddingHorizontal: 4,
    paddingTop: 15,
  },
  mt2: {
    marginTop: 2,
  },
  mt36: {
    marginTop: 36,
  },
  ml121: {
    marginLeft: 121,
  },
  mt10: {
    marginTop: 10,
  },
  ml27: {
    marginLeft: 27,
  },
  mt_812: {
    marginTop: -812,
  },
  mt1: {
    marginTop: 1,
  },
  ml24: {
    marginLeft: 24,
  },
  mt34: {
    marginTop: 34,
  },
  mt28: {
    marginTop: 28,
  },
  ml25: {
    marginLeft: 25,
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
  currencyYouWould: {
    margin: 0,
  },
  toProceedWith: {
    margin: 0,
  },
  hello: {
    position: "relative",
    fontSize: 26,
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
  rectangleView5: {
    position: "absolute",
    marginTop: -34.5,
    top: "50%",
    right: 0,
    left: 0,
    borderRadius: 21,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "#0101fd",
    borderWidth: 1,
    height: 69,
  },
  gBP: {
    position: "absolute",
    marginTop: -17.5,
    marginLeft: -50,
    top: "50%",
    left: "50%",
    fontSize: 14,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#00003d",
    textAlign: "left",
  },
  britishPounds: {
    position: "absolute",
    marginTop: 1.5,
    marginLeft: -50,
    top: "50%",
    left: "50%",
    fontSize: 14,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#00003d",
    textAlign: "left",
  },
  groupView: {
    position: "absolute",
    top: 2,
    right: 0,
    bottom: 2,
    width: 100,
  },
  maskGroup241: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    maxHeight: "100%",
    width: 39,
  },
  groupView1: {
    position: "absolute",
    top: 0,
    right: 0,
    left: 0,
    height: 39,
  },
  groupView2: {
    position: "absolute",
    bottom: 16,
    left: 14,
    width: 153,
    height: 39,
  },
  groupIcon: {
    position: "absolute",
    marginTop: -20.95,
    top: "50%",
    right: 14,
    width: 43,
    height: 43,
  },
  groupView3: {
    alignSelf: "stretch",
    position: "relative",
    height: 69,
  },
  rectangleView6: {
    position: "absolute",
    marginTop: -34.5,
    top: "50%",
    right: 0,
    left: 0,
    borderRadius: 21,
    backgroundColor: "#fff",
    height: 69,
  },
  cNY: {
    position: "absolute",
    marginTop: -17.5,
    marginLeft: -46,
    top: "50%",
    left: "50%",
    fontSize: 14,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#00003d",
    textAlign: "left",
  },
  chineseYuan: {
    position: "absolute",
    marginTop: 1.5,
    marginLeft: -46,
    top: "50%",
    left: "50%",
    fontSize: 14,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#00003d",
    textAlign: "left",
  },
  groupView4: {
    position: "absolute",
    top: 2,
    right: 0,
    bottom: 2,
    width: 92,
  },
  groupIcon1: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    maxHeight: "100%",
    width: 39,
  },
  groupView5: {
    position: "absolute",
    top: 0,
    right: 0,
    left: 0,
    height: 39,
  },
  groupView6: {
    position: "absolute",
    bottom: 16,
    left: 14,
    width: 145,
    height: 39,
  },
  groupView7: {
    alignSelf: "stretch",
    position: "relative",
    height: 69,
  },
  rectangleView7: {
    position: "absolute",
    marginTop: -34.5,
    top: "50%",
    right: 0,
    left: 0,
    borderRadius: 21,
    backgroundColor: "#fff",
    height: 69,
  },
  eUR: {
    position: "absolute",
    marginTop: -17.5,
    marginLeft: -16,
    top: "50%",
    left: "50%",
    fontSize: 14,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#00003d",
    textAlign: "left",
  },
  euro: {
    position: "absolute",
    marginTop: 1.5,
    marginLeft: -16,
    top: "50%",
    left: "50%",
    fontSize: 14,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#00003d",
    textAlign: "left",
  },
  groupView8: {
    position: "absolute",
    top: 2,
    right: 0,
    bottom: 2,
    width: 32,
  },
  maskGroup2411: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    maxHeight: "100%",
    width: 39,
  },
  groupView9: {
    position: "absolute",
    top: 0,
    right: 0,
    left: 0,
    height: 39,
  },
  groupView10: {
    position: "absolute",
    bottom: 16,
    left: 14,
    width: 85,
    height: 39,
  },
  groupView11: {
    alignSelf: "stretch",
    position: "relative",
    height: 69,
  },
  rectangleView8: {
    position: "absolute",
    marginTop: -34.5,
    top: "50%",
    right: 0,
    left: 0,
    borderRadius: 21,
    backgroundColor: "#fff",
    height: 69,
  },
  cAD: {
    position: "absolute",
    marginTop: -17.5,
    marginLeft: -53.5,
    top: "50%",
    left: "50%",
    fontSize: 14,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#00003d",
    textAlign: "left",
  },
  canadianDollar: {
    position: "absolute",
    marginTop: 1.5,
    marginLeft: -53.5,
    top: "50%",
    left: "50%",
    fontSize: 14,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#00003d",
    textAlign: "left",
  },
  groupView12: {
    position: "absolute",
    top: 2,
    right: 0,
    bottom: 2,
    width: 107,
  },
  maskGroup2412: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    maxHeight: "100%",
    width: 39,
  },
  groupView13: {
    position: "absolute",
    top: 0,
    right: 0,
    left: 0,
    height: 39,
  },
  groupView14: {
    position: "absolute",
    bottom: 16,
    left: 14,
    width: 160,
    height: 39,
  },
  groupView15: {
    alignSelf: "stretch",
    position: "relative",
    height: 69,
  },
  rectangleView9: {
    position: "absolute",
    marginTop: -34.5,
    top: "50%",
    right: 0,
    left: 0,
    borderRadius: 21,
    backgroundColor: "#fff",
    height: 69,
  },
  uSD: {
    position: "absolute",
    marginTop: -17.5,
    marginLeft: -31.5,
    top: "50%",
    left: "50%",
    fontSize: 14,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#00003d",
    textAlign: "left",
  },
  uSDollar: {
    position: "absolute",
    marginTop: 1.5,
    marginLeft: -31.5,
    top: "50%",
    left: "50%",
    fontSize: 14,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#00003d",
    textAlign: "left",
  },
  groupView16: {
    position: "absolute",
    top: 2,
    right: 0,
    bottom: 2,
    width: 63,
  },
  maskGroup2413: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    maxHeight: "100%",
    width: 39,
  },
  groupView17: {
    position: "absolute",
    top: 0,
    right: 0,
    left: 0,
    height: 39,
  },
  groupView18: {
    position: "absolute",
    bottom: 16,
    left: 14,
    width: 116,
    height: 39,
  },
  groupView19: {
    alignSelf: "stretch",
    position: "relative",
    height: 69,
  },
  rectangleView10: {
    position: "absolute",
    marginTop: -34.5,
    top: "50%",
    right: 0,
    left: 0,
    borderRadius: 21,
    backgroundColor: "#fff",
    height: 69,
  },
  jPY: {
    position: "absolute",
    marginTop: -17.5,
    marginLeft: -46,
    top: "50%",
    left: "50%",
    fontSize: 14,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#00003d",
    textAlign: "left",
  },
  japaneseYen: {
    position: "absolute",
    marginTop: 1.5,
    marginLeft: -46,
    top: "50%",
    left: "50%",
    fontSize: 14,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#00003d",
    textAlign: "left",
  },
  groupView20: {
    position: "absolute",
    top: 2,
    right: 0,
    bottom: 2,
    width: 92,
  },
  maskGroup2414: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    maxHeight: "100%",
    width: 39,
  },
  groupView21: {
    position: "absolute",
    top: 0,
    right: 0,
    left: 0,
    height: 39,
  },
  groupView22: {
    position: "absolute",
    bottom: 16,
    left: 14,
    width: 145,
    height: 39,
  },
  groupView23: {
    alignSelf: "stretch",
    position: "relative",
    height: 69,
  },
  scrollGroup22: {
    width: 334,
    height: 433,
    maxWidth: 334,
  },
  iconAwesomeSearch: {
    position: "absolute",
    marginTop: -9.35,
    top: "50%",
    left: 14,
    width: 19,
    height: 19,
  },
  iconMaterialKeyboardVoice: {
    position: "absolute",
    marginTop: -9.35,
    top: "50%",
    right: 16,
    width: 14,
    height: 19,
  },
  groupView24: {
    position: "relative",
    borderRadius: 21,
    backgroundColor: "#fff",
    width: 327,
    height: 42,
    alignSelf: "center",
  },
  rectangleView11: {
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
  groupView25: {
    position: "absolute",
    marginTop: -30,
    top: "50%",
    right: 0,
    left: 0,
    height: 60,
  },
  component20821: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  hello1: {
    position: "absolute",
    top: "36.67%",
    left: "38.04%",
    fontSize: 15,
    lineHeight: 17,
    textTransform: "uppercase",
    fontFamily: "Helvetica",
    color: "#fff",
    textAlign: "left",
  },
  groupPressable1: {
    position: "relative",
    width: 326,
    height: 60,
  },
  chooseCurrency: {
    position: "relative",
    backgroundColor: "#4b4b4b",
    flex: 1,
    width: "100%",
    flexDirection: "column",
    alignItems: "flex-start",
  },
});

export default ChooseCurrency;
