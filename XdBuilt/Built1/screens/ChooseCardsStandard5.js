import * as React from "react";
import { StyleSheet, View, Image, Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

const ChooseCardsStandard5 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.chooseCardsStandard5}>
      <View style={[styles.rectangleView, styles.mt_13]} />
      <Pressable
        style={[styles.groupPressable, styles.mt_765]}
        onPress={() => navigation.navigate("Account3")}
      >
        <Image
          style={styles.iconFeatherArrowLeft}
          resizeMode="cover"
          source={require("../assets/icon-featherarrowleft.png")}
        />
      </Pressable>
      <View style={[styles.statusBarBlack, styles.mt3]}>
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
      <View style={[styles.homeIndicator, styles.mt18, styles.ml121]} />
      <Pressable
        style={[styles.groupPressable1, styles.mt36, styles.ml25]}
        onPress={() => navigation.navigate("Carbon")}
      >
        <View style={styles.component208164}>
          <View style={styles.groupView}>
            <View style={styles.rectangleView5} />
            <View style={styles.maskGroup236} />
          </View>
        </View>
        <Text style={styles.hello}>
          <Text style={styles.pURCHASEPROJECT}>PURCHASE pROJECT</Text>
        </Text>
      </Pressable>
      <View style={[styles.rectangleView6, styles.mt23, styles.ml28]} />
      <View style={[styles.rectangleView7, styles.mt_87, styles.ml151]} />
      <View style={[styles.rectangleView8, styles.mt14, styles.ml25]} />
      <View style={[styles.rectangleView9, styles.mt28, styles.ml25]} />
      <View style={[styles.rectangleView10, styles.mt28, styles.ml25]} />
      <View style={[styles.rectangleView11, styles.mt28, styles.ml25]} />
      <Text style={[styles.hello1, styles.mt3, styles.ml30]}>
        <Text style={styles.shrinkYourFootprint}>Shrink your footprint,</Text>
        <Text style={styles.butAlsoGrow}>{`but also grow `}</Text>
        <Text style={styles.yourHandPrint}>your hand print!</Text>
      </Text>
      <View style={[styles.groupView1, styles.mt_65, styles.ml45]}>
        <Text style={styles.hello2}>7</Text>
      </View>
      <Text style={[styles.totalAssets, styles.mt_41, styles.ml75]}>
        <Text style={styles.total1}>
          <Text style={styles.total}>{`Total `}</Text>
        </Text>
        <Text style={styles.assets1}>
          <Text style={styles.assets}>Assets</Text>
        </Text>
      </Text>
      <View style={[styles.groupView2, styles.mt_14, styles.ml244]}>
        <Text style={styles.cO2Removed}>
          <Text style={styles.cO}>CO</Text>
          <Text style={styles.text1}>2</Text>
          <Text style={styles.removed}> Removed</Text>
        </Text>
      </View>
      <Text style={[styles.tons, styles.mt_29, styles.ml243]}> Tons</Text>
      <View style={[styles.groupView3, styles.mt_44, styles.ml147]}>
        <Text style={styles.hello3}> 1,39</Text>
      </View>
      <Image
        style={[styles.treeIcon, styles.mt_63, styles.ml35]}
        resizeMode="cover"
        source={require("../assets/tree.png")}
      />
      <Image
        style={[styles.treeIcon1, styles.mt_63, styles.ml35]}
        resizeMode="cover"
        source={require("../assets/tree.png")}
      />
      <Image
        style={[styles.treeIcon2, styles.mt_63, styles.ml35]}
        resizeMode="cover"
        source={require("../assets/tree.png")}
      />
      <Image
        style={[styles.treeIcon3, styles.mt_63, styles.ml35]}
        resizeMode="cover"
        source={require("../assets/tree.png")}
      />
      <Text style={[styles.hello4, styles.mt53, styles.ml32]}>Assets</Text>
      <Text style={[styles.hello5, styles.mt_14, styles.ml306]}>Token</Text>
      <Text style={[styles.hello6, styles.mt_12, styles.ml76]}>
        (1 Tonne = 1 CO2 Token)
      </Text>
      <Text
        style={[styles.drylandsProtectionKasigauW, styles.mt_53, styles.ml79]}
      >
        <Text
          style={styles.drylandsProtectionKasigau}
        >{`Drylands Protection, Kasigau Wildlife Corridor `}</Text>
        <Text style={styles.tonne}>£19 / Tonne</Text>
      </Text>
      <Text
        style={[styles.drylandsProtectionKasigauW1, styles.mt_53, styles.ml79]}
      >
        <Text
          style={styles.drylandsProtectionKasigau1}
        >{`Drylands Protection, Kasigau Wildlife Corridor `}</Text>
        <Text style={styles.tonne1}>£19 / Tonne</Text>
      </Text>
      <Text
        style={[styles.drylandsProtectionKasigauW2, styles.mt_53, styles.ml79]}
      >
        <Text
          style={styles.drylandsProtectionKasigau2}
        >{`Drylands Protection, Kasigau Wildlife Corridor `}</Text>
        <Text style={styles.tonne2}>£19 / Tonne</Text>
      </Text>
      <Text
        style={[styles.drylandsProtectionKasigauW3, styles.mt_53, styles.ml79]}
      >
        <Text
          style={styles.drylandsProtectionKasigau3}
        >{`Drylands Protection, Kasigau Wildlife Corridor `}</Text>
        <Text style={styles.tonne3}>£19 / Tonne</Text>
      </Text>
      <Text style={[styles.nov2022At1820, styles.mt15, styles.ml79]}>
        25 Nov 2022 at 18:20
      </Text>
      <Text style={[styles.nov2022At18201, styles.mt15, styles.ml79]}>
        25 Nov 2022 at 18:20
      </Text>
      <Text style={[styles.nov2022At18202, styles.mt15, styles.ml79]}>
        25 Nov 2022 at 18:20
      </Text>
      <Text style={[styles.nov2022At18203, styles.mt15, styles.ml79]}>
        25 Nov 2022 at 18:20
      </Text>
      <Text style={[styles.hello7, styles.mt_31, styles.ml323]}>1</Text>
      <Text style={[styles.hello8, styles.mt_31, styles.ml323]}>3</Text>
      <Text style={[styles.hello9, styles.mt_31, styles.ml323]}>1</Text>
      <Text style={[styles.hello10, styles.mt_31, styles.ml323]}>2</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mt_13: {
    marginTop: -13,
  },
  mt_765: {
    marginTop: -765,
  },
  mt3: {
    marginTop: 3,
  },
  mt18: {
    marginTop: 18,
  },
  ml121: {
    marginLeft: 121,
  },
  mt36: {
    marginTop: 36,
  },
  ml25: {
    marginLeft: 25,
  },
  mt23: {
    marginTop: 23,
  },
  ml28: {
    marginLeft: 28,
  },
  mt_87: {
    marginTop: -87,
  },
  ml151: {
    marginLeft: 151,
  },
  mt14: {
    marginTop: 14,
  },
  mt28: {
    marginTop: 28,
  },
  ml30: {
    marginLeft: 30,
  },
  mt_65: {
    marginTop: -65,
  },
  ml45: {
    marginLeft: 45,
  },
  mt_41: {
    marginTop: -41,
  },
  ml75: {
    marginLeft: 75,
  },
  mt_14: {
    marginTop: -14,
  },
  ml244: {
    marginLeft: 244,
  },
  mt_29: {
    marginTop: -29,
  },
  ml243: {
    marginLeft: 243,
  },
  mt_44: {
    marginTop: -44,
  },
  ml147: {
    marginLeft: 147,
  },
  mt_63: {
    marginTop: -63,
  },
  ml35: {
    marginLeft: 35,
  },
  mt53: {
    marginTop: 53,
  },
  ml32: {
    marginLeft: 32,
  },
  ml306: {
    marginLeft: 306,
  },
  mt_12: {
    marginTop: -12,
  },
  ml76: {
    marginLeft: 76,
  },
  mt_53: {
    marginTop: -53,
  },
  ml79: {
    marginLeft: 79,
  },
  mt15: {
    marginTop: 15,
  },
  mt_31: {
    marginTop: -31,
  },
  ml323: {
    marginLeft: 323,
  },
  rectangleView: {
    position: "relative",
    backgroundColor: "#f6f5f8",
    width: 375,
    height: 777,
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
  component208164: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  pURCHASEPROJECT: {
    margin: 0,
  },
  hello: {
    position: "absolute",
    top: "36.67%",
    left: "25.77%",
    fontSize: 15,
    lineHeight: 17,
    textTransform: "uppercase",
    fontFamily: "Helvetica",
    color: "#fff",
    textAlign: "center",
  },
  groupPressable1: {
    position: "relative",
    width: 326,
    height: 60,
  },
  rectangleView6: {
    position: "relative",
    borderRadius: 15,
    backgroundColor: "rgba(65, 160, 57, 0.17)",
    width: 111,
    height: 87,
  },
  rectangleView7: {
    position: "relative",
    borderRadius: 15,
    backgroundColor: "rgba(136, 136, 136, 0.13)",
    width: 201,
    height: 87,
  },
  rectangleView8: {
    position: "relative",
    borderRadius: 15,
    backgroundColor: "#fff",
    width: 326,
    height: 76,
  },
  rectangleView9: {
    position: "relative",
    borderRadius: 15,
    backgroundColor: "#fff",
    width: 326,
    height: 76,
  },
  rectangleView10: {
    position: "relative",
    borderRadius: 15,
    backgroundColor: "#fff",
    width: 326,
    height: 76,
  },
  rectangleView11: {
    position: "relative",
    borderRadius: 15,
    backgroundColor: "#fff",
    width: 326,
    height: 76,
  },
  shrinkYourFootprint: {
    margin: 0,
  },
  butAlsoGrow: {
    margin: 0,
  },
  yourHandPrint: {
    margin: 0,
  },
  hello1: {
    position: "relative",
    fontSize: 26,
    lineHeight: 28,
    fontWeight: "700",
    fontFamily: "Typo Grotesk",
    color: "#00003d",
    textAlign: "left",
  },
  hello2: {
    position: "absolute",
    top: "0%",
    left: "0%",
    fontSize: 40,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#00003d",
    textAlign: "left",
  },
  groupView1: {
    position: "relative",
    width: 22,
    height: 44,
  },
  total: {
    fontWeight: "300",
    fontFamily: "Helvetica",
  },
  total1: {
    margin: 0,
  },
  assets: {
    fontWeight: "700",
    fontFamily: "Helvetica",
  },
  assets1: {
    margin: 0,
  },
  totalAssets: {
    position: "relative",
    fontSize: 14,
    color: "#00003d",
    textAlign: "left",
    width: 60,
  },
  cO: {
    fontSize: 14,
  },
  text1: {
    fontSize: 8,
    verticalAlign: "sub",
  },
  removed: {
    fontSize: 14,
  },
  cO2Removed: {
    position: "absolute",
    marginTop: -8,
    top: "50%",
    left: 0,
    fontWeight: "300",
    fontFamily: "Helvetica",
    color: "#00003d",
    textAlign: "left",
    width: 148,
  },
  groupView2: {
    position: "relative",
    width: 147,
    height: 16,
  },
  tons: {
    position: "relative",
    fontSize: 14,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#00003d",
    textAlign: "left",
    width: 36,
  },
  hello3: {
    position: "absolute",
    top: "0%",
    left: "0%",
    fontSize: 40,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#00003d",
    textAlign: "left",
  },
  groupView3: {
    position: "relative",
    width: 89,
    height: 44,
  },
  treeIcon: {
    position: "relative",
    width: 37,
    height: 53,
  },
  treeIcon1: {
    position: "relative",
    width: 37,
    height: 53,
  },
  treeIcon2: {
    position: "relative",
    width: 37,
    height: 53,
  },
  treeIcon3: {
    position: "relative",
    width: 37,
    height: 53,
  },
  hello4: {
    position: "relative",
    fontSize: 12,
    lineHeight: 14,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#00003d",
    textAlign: "left",
  },
  hello5: {
    position: "relative",
    fontSize: 12,
    lineHeight: 14,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#00003d",
    textAlign: "left",
  },
  hello6: {
    position: "relative",
    fontSize: 10,
    fontFamily: "Helvetica",
    color: "#00003d",
    textAlign: "left",
  },
  drylandsProtectionKasigau: {
    fontFamily: "Helvetica",
  },
  tonne: {
    fontWeight: "700",
    fontFamily: "Helvetica",
  },
  drylandsProtectionKasigauW: {
    position: "relative",
    fontSize: 14,
    color: "#00003d",
    textAlign: "left",
    width: 198,
    opacity: 0.77,
  },
  drylandsProtectionKasigau1: {
    fontFamily: "Helvetica",
  },
  tonne1: {
    fontWeight: "700",
    fontFamily: "Helvetica",
  },
  drylandsProtectionKasigauW1: {
    position: "relative",
    fontSize: 14,
    color: "#00003d",
    textAlign: "left",
    width: 198,
    opacity: 0.77,
  },
  drylandsProtectionKasigau2: {
    fontFamily: "Helvetica",
  },
  tonne2: {
    fontWeight: "700",
    fontFamily: "Helvetica",
  },
  drylandsProtectionKasigauW2: {
    position: "relative",
    fontSize: 14,
    color: "#00003d",
    textAlign: "left",
    width: 198,
    opacity: 0.77,
  },
  drylandsProtectionKasigau3: {
    fontFamily: "Helvetica",
  },
  tonne3: {
    fontWeight: "700",
    fontFamily: "Helvetica",
  },
  drylandsProtectionKasigauW3: {
    position: "relative",
    fontSize: 14,
    color: "#00003d",
    textAlign: "left",
    width: 198,
    opacity: 0.77,
  },
  nov2022At1820: {
    position: "relative",
    fontSize: 12,
    fontFamily: "Helvetica",
    color: "#888",
    textAlign: "left",
    width: 167,
    opacity: 0.77,
  },
  nov2022At18201: {
    position: "relative",
    fontSize: 12,
    fontFamily: "Helvetica",
    color: "#888",
    textAlign: "left",
    width: 167,
    opacity: 0.77,
  },
  nov2022At18202: {
    position: "relative",
    fontSize: 12,
    fontFamily: "Helvetica",
    color: "#888",
    textAlign: "left",
    width: 167,
    opacity: 0.77,
  },
  nov2022At18203: {
    position: "relative",
    fontSize: 12,
    fontFamily: "Helvetica",
    color: "#888",
    textAlign: "left",
    width: 167,
    opacity: 0.77,
  },
  hello7: {
    position: "relative",
    fontSize: 18,
    lineHeight: 15,
    fontFamily: "Helvetica",
    color: "#00003d",
    textAlign: "left",
  },
  hello8: {
    position: "relative",
    fontSize: 18,
    lineHeight: 15,
    fontFamily: "Helvetica",
    color: "#00003d",
    textAlign: "left",
  },
  hello9: {
    position: "relative",
    fontSize: 18,
    lineHeight: 15,
    fontFamily: "Helvetica",
    color: "#00003d",
    textAlign: "left",
  },
  hello10: {
    position: "relative",
    fontSize: 18,
    lineHeight: 15,
    fontFamily: "Helvetica",
    color: "#00003d",
    textAlign: "left",
  },
  chooseCardsStandard5: {
    position: "relative",
    backgroundColor: "#4b4b4b",
    flex: 1,
    width: "100%",
    flexDirection: "column",
    alignItems: "flex-start",
  },
});

export default ChooseCardsStandard5;
