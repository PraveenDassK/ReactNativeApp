import * as React from "react";
import { StyleSheet, View, Image, Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import GlobalStyles from "../GlobalStyles";

const ChooseCardsStandard5 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.chooseCardsStandard5}>
      <View style={[styles.chooseCardsStandard5Child, styles.mt_13]} />
      <Pressable
        style={[styles.iconFeatherArrowLeftWrapper, styles.mt_765]}
        onPress={() => navigation.navigate("Account")}
      >
        <Image
          style={styles.iconFeatherArrowLeft}
          resizeMode="cover"
          source={require("../assets/icon-featherarrowleft.png")}
        />
      </Pressable>
      <View style={[styles.statusBarBlack, styles.mt3]}>
        <View style={[styles.rectangle, styles.timePosition]} />
        <View style={[styles.statusBar, styles.statusBarPosition]}>
          <View style={[styles.time, styles.timePosition]}>
            <Text style={styles.text}>9:41</Text>
          </View>
          <Image
            style={[styles.batteryIcon, styles.networkPosition]}
            resizeMode="cover"
            source={require("../assets/icon-awesomebatterythreequarters.png")}
          />
          <Image
            style={styles.wifiIcon}
            resizeMode="cover"
            source={require("../assets/icon-awesomewifi.png")}
          />
          <View style={[styles.network, styles.networkPosition]}>
            <View style={[styles.networkChild, styles.networkLayout]} />
            <View style={[styles.networkItem, styles.networkLayout]} />
            <View style={[styles.networkInner, styles.networkLayout]} />
            <View style={[styles.rectangleView, styles.networkLayout]} />
          </View>
        </View>
      </View>
      <View style={[styles.homeIndicator, styles.mt18, styles.ml121]} />
      <Pressable
        style={[styles.component208164Parent, styles.mt36, styles.ml25]}
        onPress={() => navigation.navigate("Carbon")}
      >
        <View style={[styles.component208164, styles.timePosition]}>
          <View style={[styles.rectangleParent, styles.statusBarPosition]}>
            <View style={[styles.groupChild, styles.hello2Position]} />
            <View style={styles.maskGroup236} />
          </View>
        </View>
        <Text style={styles.hello}>
          <Text style={styles.purchaseProject}>PURCHASE pROJECT</Text>
        </Text>
      </Pressable>
      <View
        style={[
          styles.chooseCardsStandard5Item,
          styles.mt23,
          styles.ml28,
          styles.chooseLayout,
        ]}
      />
      <View
        style={[
          styles.chooseCardsStandard5Inner,
          styles.mt_87,
          styles.ml151,
          styles.chooseLayout,
        ]}
      />
      <View
        style={[styles.chooseCardsStandard5Child1, styles.mt14, styles.ml25]}
      />
      <View
        style={[styles.chooseCardsStandard5Child1, styles.mt28, styles.ml25]}
      />
      <View
        style={[styles.chooseCardsStandard5Child1, styles.mt28, styles.ml25]}
      />
      <View
        style={[styles.chooseCardsStandard5Child1, styles.mt28, styles.ml25]}
      />
      <Text style={[styles.hello1, styles.mt3, styles.ml30]}>
        <Text style={styles.purchaseProject}>Shrink your footprint,</Text>
        <Text style={styles.purchaseProject}>{`but also grow `}</Text>
        <Text style={styles.purchaseProject}>your hand print!</Text>
      </Text>
      <View style={[styles.helloWrapper, styles.mt_65, styles.ml45]}>
        <Text style={[styles.hello2, styles.hello2Position]}>7</Text>
      </View>
      <Text style={[styles.totalAssets, styles.mt_15, styles.ml75]}>
        <Text style={styles.purchaseProject}>
          <Text style={styles.total1}>{`Total `}</Text>
        </Text>
        <Text style={styles.purchaseProject}>
          <Text style={styles.assets1}>Assets</Text>
        </Text>
      </Text>
      <View style={[styles.co2RemovedWrapper, styles.mt_42, styles.ml244]}>
        <Text style={[styles.co2Removed, styles.statusBarPosition]}>
          <Text style={styles.co}>CO</Text>
          <Text style={styles.text1}>2</Text>
          <Text style={styles.co}> Removed</Text>
        </Text>
      </View>
      <Text style={[styles.tons, styles.mt_29, styles.ml243]}> Tons</Text>
      <View style={[styles.helloContainer, styles.mt_44, styles.ml147]}>
        <Text style={[styles.hello2, styles.hello2Position]}> 1,39</Text>
      </View>
      <Image
        style={[styles.treeIcon, styles.mt_63, styles.ml35]}
        resizeMode="cover"
        source={require("../assets/tree.png")}
      />
      <Image
        style={[styles.treeIcon, styles.mt_63, styles.ml35]}
        resizeMode="cover"
        source={require("../assets/tree.png")}
      />
      <Image
        style={[styles.treeIcon, styles.mt_63, styles.ml35]}
        resizeMode="cover"
        source={require("../assets/tree.png")}
      />
      <Image
        style={[styles.treeIcon, styles.mt_63, styles.ml35]}
        resizeMode="cover"
        source={require("../assets/tree.png")}
      />
      <Text
        style={[styles.hello4, styles.mt55, styles.ml32, styles.hello4Typo]}
      >
        Assets
      </Text>
      <Text
        style={[styles.hello4, styles.mt_14, styles.ml306, styles.hello4Typo]}
      >
        Token
      </Text>
      <Text style={[styles.hello6, styles.mt_12, styles.ml76]}>
        (1 Tonne = 1 CO2 Token)
      </Text>
      <Text
        style={[
          styles.drylandsProtectionKasigauW,
          styles.mt_53,
          styles.ml79,
          styles.nov2022At1820FlexBox,
        ]}
      >
        <Text
          style={styles.total1}
        >{`Drylands Protection, Kasigau Wildlife Corridor `}</Text>
        <Text style={styles.assets1}>£19 / Tonne</Text>
      </Text>
      <Text
        style={[
          styles.drylandsProtectionKasigauW,
          styles.mt_53,
          styles.ml79,
          styles.nov2022At1820FlexBox,
        ]}
      >
        <Text
          style={styles.total1}
        >{`Drylands Protection, Kasigau Wildlife Corridor `}</Text>
        <Text style={styles.assets1}>£19 / Tonne</Text>
      </Text>
      <Text
        style={[
          styles.drylandsProtectionKasigauW,
          styles.mt_53,
          styles.ml79,
          styles.nov2022At1820FlexBox,
        ]}
      >
        <Text
          style={styles.total1}
        >{`Drylands Protection, Kasigau Wildlife Corridor `}</Text>
        <Text style={styles.assets1}>£19 / Tonne</Text>
      </Text>
      <Text
        style={[
          styles.drylandsProtectionKasigauW,
          styles.mt_53,
          styles.ml79,
          styles.nov2022At1820FlexBox,
        ]}
      >
        <Text
          style={styles.total1}
        >{`Drylands Protection, Kasigau Wildlife Corridor `}</Text>
        <Text style={styles.assets1}>£19 / Tonne</Text>
      </Text>
      <Text
        style={[
          styles.nov2022At1820,
          styles.mt15,
          styles.ml79,
          styles.nov2022At1820FlexBox,
          styles.hello4Typo,
        ]}
      >
        25 Nov 2022 at 18:20
      </Text>
      <Text
        style={[
          styles.nov2022At1820,
          styles.mt15,
          styles.ml79,
          styles.nov2022At1820FlexBox,
          styles.hello4Typo,
        ]}
      >
        25 Nov 2022 at 18:20
      </Text>
      <Text
        style={[
          styles.nov2022At1820,
          styles.mt15,
          styles.ml79,
          styles.nov2022At1820FlexBox,
          styles.hello4Typo,
        ]}
      >
        25 Nov 2022 at 18:20
      </Text>
      <Text
        style={[
          styles.nov2022At1820,
          styles.mt15,
          styles.ml79,
          styles.nov2022At1820FlexBox,
          styles.hello4Typo,
        ]}
      >
        25 Nov 2022 at 18:20
      </Text>
      <Text style={[styles.hello7, styles.mt_31, styles.ml323]}>1</Text>
      <Text style={[styles.hello7, styles.mt_31, styles.ml323]}>3</Text>
      <Text style={[styles.hello7, styles.mt_31, styles.ml323]}>1</Text>
      <Text style={[styles.hello7, styles.mt_31, styles.ml323]}>2</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mt_13: {
    marginTop: GlobalStyles.Margin.margin_39xs,
  },
  mt_765: {
    marginTop: -765,
  },
  mt3: {
    marginTop: GlobalStyles.Margin.margin_30xs,
  },
  mt18: {
    marginTop: GlobalStyles.Margin.margin_15xs,
  },
  ml121: {
    marginLeft: GlobalStyles.Margin.margin_54xl,
  },
  mt36: {
    marginTop: GlobalStyles.Margin.margin_6xl,
  },
  ml25: {
    marginLeft: GlobalStyles.Margin.margin_7xs,
  },
  mt23: {
    marginTop: GlobalStyles.Margin.margin_9xs,
  },
  ml28: {
    marginLeft: GlobalStyles.Margin.margin_3xs,
  },
  mt_87: {
    marginTop: GlobalStyles.Margin.margin_71xs,
  },
  ml151: {
    marginLeft: GlobalStyles.Margin.margin_61xl,
  },
  mt14: {
    marginTop: GlobalStyles.Margin.margin_20xs,
  },
  mt28: {
    marginTop: GlobalStyles.Margin.margin_3xs,
  },
  ml30: {
    marginLeft: GlobalStyles.Margin.margin_sm,
  },
  mt_65: {
    marginTop: -65,
  },
  ml45: {
    marginLeft: GlobalStyles.Margin.margin_16xl,
  },
  mt_15: {
    marginTop: GlobalStyles.Margin.margin_41xs,
  },
  ml75: {
    marginLeft: GlobalStyles.Margin.margin_36xl,
  },
  mt_42: {
    marginTop: GlobalStyles.Margin.margin_58xs,
  },
  ml244: {
    marginLeft: GlobalStyles.Margin.margin_84xl,
  },
  mt_29: {
    marginTop: GlobalStyles.Margin.margin_49xs,
  },
  ml243: {
    marginLeft: GlobalStyles.Margin.margin_83xl,
  },
  mt_44: {
    marginTop: GlobalStyles.Margin.margin_59xs,
  },
  ml147: {
    marginLeft: 147,
  },
  mt_63: {
    marginTop: GlobalStyles.Margin.margin_68xs,
  },
  ml35: {
    marginLeft: GlobalStyles.Margin.margin_5xl,
  },
  mt55: {
    marginTop: GlobalStyles.Margin.margin_24xl,
  },
  ml32: {
    marginLeft: GlobalStyles.Margin.margin_xl,
  },
  mt_14: {
    marginTop: GlobalStyles.Margin.margin_40xs,
  },
  ml306: {
    marginLeft: 306,
  },
  mt_12: {
    marginTop: -12,
  },
  ml76: {
    marginLeft: GlobalStyles.Margin.margin_37xl,
  },
  mt_53: {
    marginTop: GlobalStyles.Margin.margin_64xs,
  },
  ml79: {
    marginLeft: GlobalStyles.Margin.margin_39xl,
  },
  mt15: {
    marginTop: GlobalStyles.Margin.margin_18xs,
  },
  mt_31: {
    marginTop: GlobalStyles.Margin.margin_50xs,
  },
  ml323: {
    marginLeft: GlobalStyles.Margin.margin_95xl,
  },
  timePosition: {
    bottom: 0,
    left: 0,
    top: 0,
    position: "absolute",
  },
  statusBarPosition: {
    top: "50%",
    position: "absolute",
  },
  networkPosition: {
    height: 11,
    marginTop: -3,
    top: "50%",
    position: "absolute",
  },
  networkLayout: {
    width: 3,
    backgroundColor: GlobalStyles.Color.gray_1400,
    borderRadius: GlobalStyles.Border.br_7xs,
    bottom: 0,
    position: "absolute",
  },
  hello2Position: {
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  chooseLayout: {
    height: 87,
    borderRadius: GlobalStyles.Border.br_lg,
  },
  hello4Typo: {
    fontSize: GlobalStyles.FontSize.size_xs,
    fontFamily: GlobalStyles.FontFamily.helvetica,
  },
  nov2022At1820FlexBox: {
    opacity: 0.77,
    textAlign: "left",
  },
  chooseCardsStandard5Child: {
    height: 777,
    width: 375,
    backgroundColor: GlobalStyles.Color.gray_300,
  },
  iconFeatherArrowLeft: {
    marginLeft: -0.5,
    bottom: 4,
    height: 17,
    width: 17,
    left: "50%",
    position: "absolute",
  },
  iconFeatherArrowLeftWrapper: {
    width: 55,
    height: 45,
    backgroundColor: GlobalStyles.Color.gray_300,
  },
  rectangle: {
    shadowColor: "rgba(0, 0, 0, 0.05)",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 6,
    elevation: 6,
    shadowOpacity: 1,
    left: 0,
    right: 0,
    backgroundColor: GlobalStyles.Color.white,
  },
  text: {
    fontSize: GlobalStyles.FontSize.size_4xl,
    letterSpacing: 0,
    lineHeight: 24,
    fontWeight: "500",
    fontFamily: GlobalStyles.FontFamily.roboto,
    color: GlobalStyles.Color.gray_1900,
    textAlign: "left",
    left: 0,
    top: 0,
    position: "absolute",
  },
  time: {
    width: 40,
    left: 0,
  },
  batteryIcon: {
    width: 22,
    right: 0,
  },
  wifiIcon: {
    right: 37,
    height: 12,
    marginTop: -3,
    top: "50%",
    width: 17,
    position: "absolute",
  },
  networkChild: {
    height: 4,
    left: 0,
  },
  networkItem: {
    marginLeft: -3.5,
    height: 6,
    left: "50%",
  },
  networkInner: {
    marginLeft: 0.5,
    height: 9,
    left: "50%",
  },
  rectangleView: {
    right: 0,
    top: 0,
  },
  network: {
    right: 68,
    width: 17,
  },
  statusBar: {
    marginTop: -15,
    right: 16,
    left: 15,
    height: 26,
  },
  statusBarBlack: {
    height: 44,
    width: 375,
  },
  homeIndicator: {
    borderRadius: GlobalStyles.Border.br_8xl,
    backgroundColor: GlobalStyles.Color.black,
    width: 134,
    height: 5,
  },
  groupChild: {
    height: "100%",
    right: "0%",
    bottom: "0%",
    backgroundColor: GlobalStyles.Color.gray_500,
    borderRadius: GlobalStyles.Border.br_lg,
    width: "100%",
  },
  maskGroup236: {
    bottom: 13,
    left: 0,
    right: 0,
    top: 0,
    position: "absolute",
  },
  rectangleParent: {
    marginTop: -30,
    height: 60,
    left: 0,
    right: 0,
  },
  component208164: {
    left: 0,
    right: 0,
  },
  purchaseProject: {
    margin: GlobalStyles.Margin.margin_33xs,
  },
  hello: {
    top: "36.67%",
    left: "25.77%",
    fontSize: GlobalStyles.FontSize.size_lg,
    lineHeight: 17,
    textTransform: "uppercase",
    color: GlobalStyles.Color.black,
    textAlign: "center",
    fontFamily: GlobalStyles.FontFamily.helvetica,
    position: "absolute",
  },
  component208164Parent: {
    height: 60,
    width: 326,
  },
  chooseCardsStandard5Item: {
    backgroundColor: "rgba(65, 160, 57, 0.17)",
    width: 111,
  },
  chooseCardsStandard5Inner: {
    backgroundColor: "rgba(136, 136, 136, 0.13)",
    width: 201,
  },
  chooseCardsStandard5Child1: {
    height: 76,
    borderRadius: GlobalStyles.Border.br_lg,
    width: 326,
    backgroundColor: GlobalStyles.Color.white,
  },
  hello1: {
    fontSize: GlobalStyles.FontSize.size_8xl,
    lineHeight: 28,
    fontFamily: GlobalStyles.FontFamily.typoGrotesk,
    color: GlobalStyles.Color.indigo,
    fontWeight: "700",
    textAlign: "left",
  },
  hello2: {
    fontSize: GlobalStyles.FontSize.size_13xl,
    color: GlobalStyles.Color.indigo,
    fontWeight: "700",
    fontFamily: GlobalStyles.FontFamily.helvetica,
    textAlign: "left",
  },
  helloWrapper: {
    width: 22,
    height: 44,
  },
  total1: {
    fontFamily: GlobalStyles.FontFamily.helvetica,
  },
  assets1: {
    fontWeight: "700",
    fontFamily: GlobalStyles.FontFamily.helvetica,
  },
  totalAssets: {
    width: 60,
    fontSize: GlobalStyles.FontSize.size_base,
    color: GlobalStyles.Color.indigo,
    textAlign: "left",
  },
  co: {
    fontSize: GlobalStyles.FontSize.size_base,
  },
  text1: {
    fontSize: GlobalStyles.FontSize.size_7xs,
    verticalAlign: "sub",
  },
  co2Removed: {
    marginTop: -8,
    width: 93,
    color: GlobalStyles.Color.indigo,
    fontFamily: GlobalStyles.FontFamily.helvetica,
    textAlign: "left",
    left: 0,
  },
  co2RemovedWrapper: {
    width: 92,
    height: 16,
  },
  tons: {
    width: 36,
    fontSize: GlobalStyles.FontSize.size_base,
    color: GlobalStyles.Color.indigo,
    fontWeight: "700",
    fontFamily: GlobalStyles.FontFamily.helvetica,
    textAlign: "left",
  },
  helloContainer: {
    width: 89,
    height: 44,
  },
  treeIcon: {
    width: 37,
    height: 53,
  },
  hello4: {
    lineHeight: 14,
    color: GlobalStyles.Color.indigo,
    fontWeight: "700",
    textAlign: "left",
  },
  hello6: {
    fontSize: GlobalStyles.FontSize.size_3xs,
    color: GlobalStyles.Color.indigo,
    fontFamily: GlobalStyles.FontFamily.helvetica,
    textAlign: "left",
  },
  drylandsProtectionKasigauW: {
    width: 198,
    fontSize: GlobalStyles.FontSize.size_base,
    color: GlobalStyles.Color.indigo,
  },
  nov2022At1820: {
    color: GlobalStyles.Color.gray_900,
    width: 167,
  },
  hello7: {
    fontSize: GlobalStyles.FontSize.size_2xl,
    lineHeight: 15,
    color: GlobalStyles.Color.indigo,
    fontFamily: GlobalStyles.FontFamily.helvetica,
    textAlign: "left",
  },
  chooseCardsStandard5: {
    flex: 1,
    width: "100%",
    backgroundColor: GlobalStyles.Color.white,
  },
});

export default ChooseCardsStandard5;
