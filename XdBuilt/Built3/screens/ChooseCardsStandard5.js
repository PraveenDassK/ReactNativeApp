import * as React from "react";
import { StyleSheet, View, Image, Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import GlobalStyles from "../GlobalStyles";

const ChooseCardsStandard5 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.chooseCardsStandard5}>
      <View style={styles.chooseCardsStandard5Child} />
      <Pressable
        style={[styles.iconFeatherArrowLeftWrapper, styles.mt_765]}
        onPress={() => navigation.navigate("Account3")}
      >
        <Image
          style={styles.iconFeatherArrowLeft}
          resizeMode="cover"
          source={require("../assets/icon-featherarrowleft.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.component208164Parent, styles.mt36, styles.ml25]}
        onPress={() => navigation.navigate("Carbon")}
      >
        <View style={[styles.component208164, styles.maskGroup236Position]}>
          <View style={[styles.rectangleParent, styles.co2RemovedPosition]}>
            <View style={[styles.groupChild, styles.hello2Position]} />
            <View style={[styles.maskGroup236, styles.maskGroup236Position]} />
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
      <View style={[styles.rectangleView, styles.mt14, styles.ml25]} />
      <View style={[styles.rectangleView, styles.mt28, styles.ml25]} />
      <View style={[styles.rectangleView, styles.mt28, styles.ml25]} />
      <View style={[styles.rectangleView, styles.mt28, styles.ml25]} />
      <Text
        style={[styles.hello1, styles.mt3, styles.ml30, styles.helloFlexBox]}
      >
        <Text style={styles.purchaseProject}>Shrink your footprint,</Text>
        <Text style={styles.purchaseProject}>{`but also grow `}</Text>
        <Text style={styles.purchaseProject}>your hand print!</Text>
      </Text>
      <View style={[styles.helloWrapper, styles.mt_65, styles.ml45]}>
        <Text
          style={[styles.hello2, styles.helloFlexBox, styles.hello2Position]}
        >
          7
        </Text>
      </View>
      <Text
        style={[
          styles.totalAssets,
          styles.mt_15,
          styles.ml75,
          styles.helloFlexBox,
        ]}
      >
        <Text style={styles.purchaseProject}>
          <Text style={styles.total1}>{`Total `}</Text>
        </Text>
        <Text style={styles.purchaseProject}>
          <Text style={styles.assets1}>Assets</Text>
        </Text>
      </Text>
      <View style={[styles.co2RemovedWrapper, styles.mt_42, styles.ml244]}>
        <Text
          style={[
            styles.co2Removed,
            styles.helloFlexBox,
            styles.co2RemovedPosition,
          ]}
        >
          <Text style={styles.co}>CO</Text>
          <Text style={styles.text}>2</Text>
          <Text style={styles.co}> Removed</Text>
        </Text>
      </View>
      <Text
        style={[styles.tons, styles.mt_29, styles.ml243, styles.helloFlexBox]}
      >
        {" "}
        Tons
      </Text>
      <View style={[styles.helloContainer, styles.mt_44, styles.ml147]}>
        <Text
          style={[styles.hello2, styles.helloFlexBox, styles.hello2Position]}
        >
          {" "}
          1,39
        </Text>
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
        style={[
          styles.hello4,
          styles.mt55,
          styles.ml32,
          styles.hello4Typo,
          styles.helloFlexBox,
        ]}
      >
        Assets
      </Text>
      <Text
        style={[
          styles.hello4,
          styles.mt_14,
          styles.ml306,
          styles.hello4Typo,
          styles.helloFlexBox,
        ]}
      >
        Token
      </Text>
      <Text
        style={[styles.hello6, styles.mt_12, styles.ml76, styles.helloFlexBox]}
      >
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
      <Text
        style={[styles.hello7, styles.mt_31, styles.ml323, styles.helloFlexBox]}
      >
        1
      </Text>
      <Text
        style={[styles.hello7, styles.mt_31, styles.ml323, styles.helloFlexBox]}
      >
        3
      </Text>
      <Text
        style={[styles.hello7, styles.mt_31, styles.ml323, styles.helloFlexBox]}
      >
        1
      </Text>
      <Text
        style={[styles.hello7, styles.mt_31, styles.ml323, styles.helloFlexBox]}
      >
        2
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mt_765: {
    marginTop: -765,
  },
  mt36: {
    marginTop: GlobalStyles.Margin.margin_14xl,
  },
  ml25: {
    marginLeft: GlobalStyles.Margin.margin_3xl,
  },
  mt23: {
    marginTop: GlobalStyles.Margin.margin_lg,
  },
  ml28: {
    marginLeft: GlobalStyles.Margin.margin_6xl,
  },
  mt_87: {
    marginTop: GlobalStyles.Margin.margin_50xs,
  },
  ml151: {
    marginLeft: 151,
  },
  mt14: {
    marginTop: GlobalStyles.Margin.margin_9xs,
  },
  mt28: {
    marginTop: GlobalStyles.Margin.margin_6xl,
  },
  mt3: {
    marginTop: 3,
  },
  ml30: {
    marginLeft: GlobalStyles.Margin.margin_8xl,
  },
  mt_65: {
    marginTop: -65,
  },
  ml45: {
    marginLeft: GlobalStyles.Margin.margin_23xl,
  },
  mt_15: {
    marginTop: GlobalStyles.Margin.margin_28xs,
  },
  ml75: {
    marginLeft: GlobalStyles.Margin.margin_38xl,
  },
  mt_42: {
    marginTop: GlobalStyles.Margin.margin_39xs,
  },
  ml244: {
    marginLeft: 244,
  },
  mt_29: {
    marginTop: GlobalStyles.Margin.margin_35xs,
  },
  ml243: {
    marginLeft: 243,
  },
  mt_44: {
    marginTop: GlobalStyles.Margin.margin_40xs,
  },
  ml147: {
    marginLeft: 147,
  },
  mt_63: {
    marginTop: GlobalStyles.Margin.margin_47xs,
  },
  ml35: {
    marginLeft: GlobalStyles.Margin.margin_13xl,
  },
  mt55: {
    marginTop: GlobalStyles.Margin.margin_30xl,
  },
  ml32: {
    marginLeft: GlobalStyles.Margin.margin_11xl,
  },
  mt_14: {
    marginTop: GlobalStyles.Margin.margin_27xs,
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
    marginTop: GlobalStyles.Margin.margin_44xs,
  },
  ml79: {
    marginLeft: GlobalStyles.Margin.margin_40xl,
  },
  mt15: {
    marginTop: GlobalStyles.Margin.margin_7xs,
  },
  mt_31: {
    marginTop: GlobalStyles.Margin.margin_36xs,
  },
  ml323: {
    marginLeft: GlobalStyles.Margin.margin_61xl,
  },
  maskGroup236Position: {
    left: 0,
    top: 0,
    right: 0,
    position: "absolute",
  },
  co2RemovedPosition: {
    top: "50%",
    left: 0,
    position: "absolute",
  },
  hello2Position: {
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  chooseLayout: {
    height: 87,
    borderRadius: GlobalStyles.Border.br_md,
  },
  helloFlexBox: {
    textAlign: "left",
    color: GlobalStyles.Color.indigo,
  },
  hello4Typo: {
    fontSize: GlobalStyles.FontSize.size_2xs,
    fontFamily: GlobalStyles.FontFamily.helvetica,
  },
  nov2022At1820FlexBox: {
    opacity: 0.77,
    textAlign: "left",
  },
  chooseCardsStandard5Child: {
    width: 375,
    height: 777,
    backgroundColor: GlobalStyles.Color.gray_300,
  },
  iconFeatherArrowLeft: {
    marginLeft: -0.5,
    bottom: 4,
    left: "50%",
    width: 17,
    height: 17,
    position: "absolute",
  },
  iconFeatherArrowLeftWrapper: {
    width: 55,
    height: 45,
    backgroundColor: GlobalStyles.Color.gray_300,
  },
  groupChild: {
    height: "100%",
    right: "0%",
    bottom: "0%",
    backgroundColor: GlobalStyles.Color.gray_500,
    borderRadius: GlobalStyles.Border.br_md,
    width: "100%",
  },
  maskGroup236: {
    bottom: 13,
  },
  rectangleParent: {
    marginTop: -30,
    right: 0,
    top: "50%",
    height: 60,
  },
  component208164: {
    bottom: 0,
  },
  purchaseProject: {
    margin: GlobalStyles.Margin.margin_25xs,
  },
  hello: {
    top: "36.67%",
    left: "25.77%",
    fontSize: GlobalStyles.FontSize.size_base,
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
  rectangleView: {
    height: 76,
    borderRadius: GlobalStyles.Border.br_md,
    width: 326,
    backgroundColor: GlobalStyles.Color.white,
  },
  hello1: {
    fontSize: GlobalStyles.FontSize.size_6xl,
    lineHeight: 28,
    fontFamily: GlobalStyles.FontFamily.typoGrotesk,
    fontWeight: "700",
  },
  hello2: {
    fontSize: GlobalStyles.FontSize.size_9xl,
    fontWeight: "700",
    fontFamily: GlobalStyles.FontFamily.helvetica,
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
    fontSize: GlobalStyles.FontSize.size_sm,
  },
  co: {
    fontSize: GlobalStyles.FontSize.size_sm,
  },
  text: {
    fontSize: GlobalStyles.FontSize.size_8xs,
    verticalAlign: "sub",
  },
  co2Removed: {
    marginTop: -8,
    width: 93,
    fontFamily: GlobalStyles.FontFamily.helvetica,
  },
  co2RemovedWrapper: {
    width: 92,
    height: 16,
  },
  tons: {
    width: 36,
    fontSize: GlobalStyles.FontSize.size_sm,
    fontWeight: "700",
    fontFamily: GlobalStyles.FontFamily.helvetica,
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
    fontWeight: "700",
  },
  hello6: {
    fontSize: GlobalStyles.FontSize.size_4xs,
    fontFamily: GlobalStyles.FontFamily.helvetica,
  },
  drylandsProtectionKasigauW: {
    width: 198,
    fontSize: GlobalStyles.FontSize.size_sm,
    color: GlobalStyles.Color.indigo,
    opacity: 0.77,
  },
  nov2022At1820: {
    color: GlobalStyles.Color.gray_900,
    width: 167,
  },
  hello7: {
    fontSize: GlobalStyles.FontSize.size_xl,
    lineHeight: 15,
    fontFamily: GlobalStyles.FontFamily.helvetica,
  },
  chooseCardsStandard5: {
    flex: 1,
    paddingTop: 34,
    width: "100%",
    backgroundColor: GlobalStyles.Color.white,
  },
});

export default ChooseCardsStandard5;
