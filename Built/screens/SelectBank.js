import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const SelectBank = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.selectBank}>
      <View style={styles.rectangleView} />
      <Text style={[styles.hello, styles.mt10, styles.ml27]}>Select Bank</Text>
      <View style={[styles.statusBarBlack, styles.mt_997]}>
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
        onPress={() => navigation.navigate("SendAccountSelection")}
      >
        <Image
          style={styles.iconFeatherArrowLeft}
          resizeMode="cover"
          source={require("../assets/icon-featherarrowleft.png")}
        />
      </Pressable>
      <View style={[styles.groupView, styles.mt14]}>
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
        <Text style={styles.hello1}>Search</Text>
      </View>
      <View style={[styles.rectangleView5, styles.mt13]} />
      <View style={[styles.rectangleView6, styles.mt8]} />
      <Text style={[styles.hello2, styles.mt37, styles.ml27]}>
        Popular Banks
      </Text>
      <Text style={[styles.hello3, styles.mt110, styles.ml27]}>
        Other Banks
      </Text>
      <Pressable
        style={[styles.groupPressable1, styles.mt_238, styles.ml51]}
        onPress={() => navigation.navigate("SelectBank1")}
      >
        <Text style={styles.hello4}>HSBC</Text>
      </Pressable>
      <Pressable
        style={[styles.groupPressable2, styles.mt82, styles.ml45]}
        onPress={() => navigation.navigate("SelectBank1")}
      >
        <View style={styles.rectangleView7} />
        <Text style={styles.hello5}>
          <Text style={styles.standard}>Standard</Text>
          <Text style={styles.chartered}>Chartered</Text>
        </Text>
      </Pressable>
      <Pressable
        style={[styles.groupPressable3, styles.mt_73, styles.ml161]}
        onPress={() => navigation.navigate("SelectBank1")}
      >
        <View style={styles.rectangleView8} />
        <Text style={styles.hello6}>Barclays</Text>
      </Pressable>
      <Pressable
        style={[styles.groupPressable4, styles.mt_87, styles.ml150]}
        onPress={() => navigation.navigate("SelectBank1")}
      >
        <View style={styles.rectangleView9} />
        <Text style={styles.hello7}>
          <Text style={styles.royalBank}>Royal Bank</Text>
          <Text style={styles.ofScotland}>of Scotland</Text>
          <Text style={styles.groupText}>{`Group `}</Text>
        </Text>
      </Pressable>
      <Pressable
        style={[styles.groupPressable5, styles.mt_73, styles.ml275]}
        onPress={() => navigation.navigate("SelectBank1")}
      >
        <View style={styles.rectangleView10} />
        <Text style={styles.hello8}>
          <Text style={styles.lloyds}>Lloyds</Text>
          <Text style={styles.banking}>Banking</Text>
          <Text style={styles.group}>Group</Text>
        </Text>
      </Pressable>
      <Pressable
        style={[styles.groupPressable6, styles.mt_101, styles.ml265]}
        onPress={() => navigation.navigate("SelectBank1")}
      >
        <View style={styles.rectangleView11} />
        <Text style={styles.hello9}>
          <Text style={styles.nationwide}>Nationwide</Text>
          <Text style={styles.building}>Building</Text>
          <Text style={styles.society}>Society</Text>
        </Text>
      </Pressable>
      <Pressable
        style={[styles.groupPressable7, styles.mt_244, styles.ml42]}
        onPress={() => navigation.navigate("SelectBank1")}
      >
        <View style={styles.rectangleView12} />
        <Text style={styles.hello10}>Santander UK</Text>
      </Pressable>
      <Pressable
        style={[styles.groupPressable8, styles.mt5, styles.ml42]}
        onPress={() => navigation.navigate("SelectBank1")}
      >
        <View style={styles.rectangleView13} />
        <Text style={styles.hello11}>Nationwide Building Society</Text>
      </Pressable>
      <Pressable
        style={[styles.groupPressable9, styles.mt5, styles.ml42]}
        onPress={() => navigation.navigate("SelectBank1")}
      >
        <View style={styles.rectangleView14} />
        <Text style={styles.hello12}>Schroders</Text>
      </Pressable>
      <Pressable
        style={[styles.groupPressable10, styles.mt8, styles.ml42]}
        onPress={() => navigation.navigate("SelectBank1")}
      >
        <View style={styles.rectangleView15} />
        <Text style={styles.hello13}>Close Brothers Group plc</Text>
      </Pressable>
      <Pressable
        style={[styles.groupPressable11, styles.ml42]}
        onPress={() => navigation.navigate("SelectBank1")}
      >
        <View style={styles.rectangleView16} />
        <Text style={styles.hello14}>Coventry Building Society</Text>
      </Pressable>
      <View style={[styles.lineView, styles.mt1, styles.ml92]} />
      <View style={[styles.lineView1, styles.mt18, styles.ml92]} />
      <View style={[styles.lineView2, styles.mt9, styles.ml92]} />
      <View style={[styles.lineView3, styles.mt13, styles.ml92]} />
      <View style={[styles.homeIndicator, styles.mt_15, styles.ml121]} />
      <Image
        style={[styles.hSBCSymbolIcon, styles.mt_32, styles.ml52]}
        resizeMode="cover"
        source={require("../assets/hsbcsymbol.png")}
      />
      <Image
        style={[styles.image145Icon, styles.mt_96, styles.ml153]}
        resizeMode="cover"
        source={require("../assets/image-145.png")}
      />
      <Image
        style={[styles.image146Icon, styles.mt_38, styles.ml283]}
        resizeMode="cover"
        source={require("../assets/image-146.png")}
      />
      <Image
        style={[styles.image148Icon, styles.mt_37, styles.ml57]}
        resizeMode="cover"
        source={require("../assets/image-148.png")}
      />
      <Image
        style={[styles.downloadIcon, styles.mt_98, styles.ml166]}
        resizeMode="cover"
        source={require("../assets/download.png")}
      />
      <Image
        style={[styles.nationwideLogo20012011Icon, styles.mt_29, styles.ml280]}
        resizeMode="cover"
        source={require("../assets/nationwidelogo20012011.png")}
      />
      <Image
        style={[styles.nationwideLogo20012011Icon1, styles.mt_25, styles.ml48]}
        resizeMode="cover"
        source={require("../assets/nationwidelogo200120111.png")}
      />
      <Image
        style={[styles.image149Icon, styles.mt_35, styles.ml42]}
        resizeMode="cover"
        source={require("../assets/image-149.png")}
      />
      <Image
        style={[
          styles.schrodersLogoPngTransparentIcon,
          styles.mt_31,
          styles.ml45,
        ]}
        resizeMode="cover"
        source={require("../assets/schroderslogopngtransparent.png")}
      />
      <Image
        style={[styles.image150Icon, styles.mt_31, styles.ml47]}
        resizeMode="cover"
        source={require("../assets/image-150.png")}
      />
      <Image
        style={[styles.image151Icon, styles.mt_30, styles.ml46]}
        resizeMode="cover"
        source={require("../assets/image-151.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mt10: {
    marginTop: 10,
  },
  ml27: {
    marginLeft: 27,
  },
  mt_997: {
    marginTop: -997,
  },
  mt2: {
    marginTop: 2,
  },
  mt14: {
    marginTop: 14,
  },
  mt13: {
    marginTop: 13,
  },
  mt8: {
    marginTop: 8,
  },
  mt37: {
    marginTop: 37,
  },
  mt110: {
    marginTop: 110,
  },
  mt_238: {
    marginTop: -238,
  },
  ml51: {
    marginLeft: 51,
  },
  mt82: {
    marginTop: 82,
  },
  ml45: {
    marginLeft: 45,
  },
  mt_73: {
    marginTop: -73,
  },
  ml161: {
    marginLeft: 161,
  },
  mt_87: {
    marginTop: -87,
  },
  ml150: {
    marginLeft: 150,
  },
  ml275: {
    marginLeft: 275,
  },
  mt_101: {
    marginTop: -101,
  },
  ml265: {
    marginLeft: 265,
  },
  mt_244: {
    marginTop: -244,
  },
  ml42: {
    marginLeft: 42,
  },
  mt5: {
    marginTop: 5,
  },
  mt1: {
    marginTop: 1,
  },
  ml92: {
    marginLeft: 92,
  },
  mt18: {
    marginTop: 18,
  },
  mt9: {
    marginTop: 9,
  },
  mt_15: {
    marginTop: -15,
  },
  ml121: {
    marginLeft: 121,
  },
  mt_32: {
    marginTop: -32,
  },
  ml52: {
    marginLeft: 52,
  },
  mt_96: {
    marginTop: -96,
  },
  ml153: {
    marginLeft: 153,
  },
  mt_38: {
    marginTop: -38,
  },
  ml283: {
    marginLeft: 283,
  },
  mt_37: {
    marginTop: -37,
  },
  ml57: {
    marginLeft: 57,
  },
  mt_98: {
    marginTop: -98,
  },
  ml166: {
    marginLeft: 166,
  },
  mt_29: {
    marginTop: -29,
  },
  ml280: {
    marginLeft: 280,
  },
  mt_25: {
    marginTop: -25,
  },
  ml48: {
    marginLeft: 48,
  },
  mt_35: {
    marginTop: -35,
  },
  mt_31: {
    marginTop: -31,
  },
  ml47: {
    marginLeft: 47,
  },
  mt_30: {
    marginTop: -30,
  },
  ml46: {
    marginLeft: 46,
  },
  rectangleView: {
    position: "relative",
    backgroundColor: "#f6f5f8",
    width: 375,
    height: 997,
  },
  hello: {
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
  hello1: {
    position: "absolute",
    marginTop: -7,
    top: "50%",
    left: 50,
    fontSize: 12,
    fontFamily: "Helvetica",
    color: "#999",
    textAlign: "left",
  },
  groupView: {
    position: "relative",
    borderRadius: 21,
    backgroundColor: "#fff",
    width: 327,
    height: 42,
    alignSelf: "center",
  },
  rectangleView5: {
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
    height: 261,
    alignSelf: "center",
  },
  rectangleView6: {
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
    height: 261,
    alignSelf: "center",
  },
  hello2: {
    position: "relative",
    fontSize: 12,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#888",
    textAlign: "left",
  },
  hello3: {
    position: "relative",
    fontSize: 12,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#888",
    textAlign: "left",
  },
  hello4: {
    position: "absolute",
    top: "78.08%",
    left: "10.2%",
    fontSize: 14,
    lineHeight: 16,
    fontFamily: "Helvetica",
    color: "#00003d",
    textAlign: "left",
  },
  groupPressable1: {
    position: "relative",
    borderRadius: 15,
    backgroundColor: "#f6f5f8",
    width: 49,
    height: 73,
  },
  rectangleView7: {
    position: "absolute",
    top: 0,
    right: 7,
    left: 6,
    borderRadius: 15,
    backgroundColor: "#f6f5f8",
    height: 49,
  },
  standard: {
    margin: 0,
  },
  chartered: {
    margin: 0,
  },
  hello5: {
    position: "absolute",
    top: "65.52%",
    left: "0%",
    fontSize: 14,
    lineHeight: 14,
    fontFamily: "Helvetica",
    color: "#00003d",
    textAlign: "center",
  },
  groupPressable2: {
    position: "relative",
    width: 62,
    height: 87,
  },
  rectangleView8: {
    position: "absolute",
    top: 0,
    right: 3,
    left: 2,
    borderRadius: 15,
    backgroundColor: "#f6f5f8",
    height: 49,
  },
  hello6: {
    position: "absolute",
    top: "78.08%",
    left: "0%",
    fontSize: 14,
    lineHeight: 16,
    fontFamily: "Helvetica",
    color: "#00003d",
    textAlign: "left",
  },
  groupPressable3: {
    position: "relative",
    width: 54,
    height: 73,
  },
  rectangleView9: {
    position: "absolute",
    top: 0,
    right: 10,
    borderRadius: 15,
    backgroundColor: "#f6f5f8",
    width: 49,
    height: 49,
  },
  royalBank: {
    margin: 0,
  },
  ofScotland: {
    margin: 0,
  },
  groupText: {
    margin: 0,
  },
  hello7: {
    position: "absolute",
    top: "56.44%",
    left: "0%",
    fontSize: 14,
    lineHeight: 14,
    fontFamily: "Helvetica",
    color: "#00003d",
    textAlign: "center",
  },
  groupPressable4: {
    position: "relative",
    width: 72,
    height: 101,
  },
  rectangleView10: {
    position: "absolute",
    top: 0,
    right: 1,
    left: 0,
    borderRadius: 15,
    backgroundColor: "#f6f5f8",
    height: 49,
  },
  lloyds: {
    margin: 0,
  },
  banking: {
    margin: 0,
  },
  group: {
    margin: 0,
  },
  hello8: {
    position: "absolute",
    top: "56.44%",
    left: "0%",
    fontSize: 14,
    lineHeight: 14,
    fontFamily: "Helvetica",
    color: "#00003d",
    textAlign: "center",
  },
  groupPressable5: {
    position: "relative",
    width: 50,
    height: 101,
  },
  rectangleView11: {
    position: "absolute",
    top: 0,
    right: 10,
    left: 11,
    borderRadius: 15,
    backgroundColor: "#f6f5f8",
    height: 49,
  },
  nationwide: {
    margin: 0,
  },
  building: {
    margin: 0,
  },
  society: {
    margin: 0,
  },
  hello9: {
    position: "absolute",
    top: "56.44%",
    left: "0%",
    fontSize: 14,
    lineHeight: 14,
    fontFamily: "Helvetica",
    color: "#00003d",
    textAlign: "center",
  },
  groupPressable6: {
    position: "relative",
    width: 70,
    height: 101,
  },
  rectangleView12: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    borderRadius: 10,
    backgroundColor: "#f6f5f8",
    width: 35,
  },
  hello10: {
    position: "absolute",
    top: "27.31%",
    left: "36.17%",
    fontSize: 14,
    lineHeight: 16,
    fontFamily: "Helvetica",
    color: "#00003d",
    textAlign: "left",
  },
  groupPressable7: {
    position: "relative",
    width: 138,
    height: 35,
  },
  rectangleView13: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    borderRadius: 10,
    backgroundColor: "#f6f5f8",
    width: 35,
  },
  hello11: {
    position: "absolute",
    top: "27.31%",
    left: "22.38%",
    fontSize: 14,
    lineHeight: 16,
    fontFamily: "Helvetica",
    color: "#00003d",
    textAlign: "left",
  },
  groupPressable8: {
    position: "relative",
    width: 223,
    height: 35,
  },
  rectangleView14: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    borderRadius: 10,
    backgroundColor: "#f6f5f8",
    width: 35,
  },
  hello12: {
    position: "absolute",
    top: "27.31%",
    left: "43.8%",
    fontSize: 14,
    lineHeight: 16,
    fontFamily: "Helvetica",
    color: "#00003d",
    textAlign: "left",
  },
  groupPressable9: {
    position: "relative",
    width: 114,
    height: 35,
  },
  rectangleView15: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    borderRadius: 10,
    backgroundColor: "#f6f5f8",
    width: 35,
  },
  hello13: {
    position: "absolute",
    top: "27.31%",
    left: "24.11%",
    fontSize: 14,
    lineHeight: 16,
    fontFamily: "Helvetica",
    color: "#00003d",
    textAlign: "left",
  },
  groupPressable10: {
    position: "relative",
    width: 207,
    height: 35,
  },
  rectangleView16: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    borderRadius: 10,
    backgroundColor: "#f6f5f8",
    width: 35,
  },
  hello14: {
    position: "absolute",
    top: "27.31%",
    left: "23.76%",
    fontSize: 14,
    lineHeight: 16,
    fontFamily: "Helvetica",
    color: "#00003d",
    textAlign: "left",
  },
  groupPressable11: {
    position: "relative",
    width: 210,
    height: 35,
  },
  lineView: {
    position: "relative",
    borderStyle: "solid",
    borderColor: "#f6f5f8",
    borderTopWidth: 1,
    width: 244,
    height: 2,
  },
  lineView1: {
    position: "relative",
    borderStyle: "solid",
    borderColor: "#f6f5f8",
    borderTopWidth: 1,
    width: 244,
    height: 2,
  },
  lineView2: {
    position: "relative",
    borderStyle: "solid",
    borderColor: "#f6f5f8",
    borderTopWidth: 1,
    width: 244,
    height: 2,
  },
  lineView3: {
    position: "relative",
    borderStyle: "solid",
    borderColor: "#f6f5f8",
    borderTopWidth: 1,
    width: 244,
    height: 2,
  },
  homeIndicator: {
    position: "relative",
    borderRadius: 100,
    backgroundColor: "#000",
    width: 134,
    height: 5,
  },
  hSBCSymbolIcon: {
    position: "relative",
    width: 48,
    height: 26,
  },
  image145Icon: {
    position: "relative",
    width: 70,
    height: 40,
  },
  image146Icon: {
    position: "relative",
    borderRadius: 19,
    width: 37,
    height: 37,
  },
  image148Icon: {
    position: "relative",
    borderRadius: 16,
    width: 37,
    height: 36,
  },
  downloadIcon: {
    position: "relative",
    borderRadius: 21,
    width: 41,
    height: 41,
  },
  nationwideLogo20012011Icon: {
    position: "relative",
    width: 40,
    height: 23,
  },
  nationwideLogo20012011Icon1: {
    position: "relative",
    width: 26,
    height: 15,
  },
  image149Icon: {
    position: "relative",
    width: 37,
    height: 37,
  },
  schrodersLogoPngTransparentIcon: {
    position: "relative",
    borderRadius: 11,
    width: 27,
    height: 27,
  },
  image150Icon: {
    position: "relative",
    width: 26,
    height: 26,
  },
  image151Icon: {
    position: "relative",
    width: 29,
    height: 29,
  },
  selectBank: {
    position: "relative",
    backgroundColor: "#4b4b4b",
    flex: 1,
    width: "100%",
    flexDirection: "column",
    alignItems: "flex-start",
  },
});

export default SelectBank;
