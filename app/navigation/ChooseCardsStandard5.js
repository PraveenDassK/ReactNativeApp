import * as React from "react";
import { StyleSheet, View, Text, Pressable, Image, ScrollView } from "react-native";
import Screen from "../components/Screen";
import GlobalStyles from "../../GlobalStyles";

const ChooseCardsStandard5 = ({navigation}) => {
  return (
    <ScrollView>
    <Screen>
    <View style={styles.chooseCardsStandard5}>
      <View style={styles.groupParent}>
        <Pressable
          style={[styles.groupContainer, styles.groupContainerPosition]}
          onPress={() => navigation.navigate("Account")}
        >
          <View style={[styles.rectangleParent, styles.groupContainerPosition]}>
            <View style={styles.groupChild} />
            <View style={styles.maskGroup236} />
          </View>
          <Text style={styles.hello}>
            <Text style={styles.purchaseProject}>PURCHASE PROJECT</Text>
          </Text>
        </Pressable>
        <View style={[styles.groupItem, styles.groupPosition]} />
        <View style={[styles.groupInner, styles.groupPosition]} />
        <View style={[styles.rectangleView, styles.groupChildPosition]} />
        <View style={[styles.groupChild1, styles.groupChildPosition]} />
        <View style={[styles.groupChild2, styles.groupChildPosition]} />
        <View style={[styles.groupChild3, styles.groupChildPosition]} />
        <Text style={[styles.hello1, styles.helloFlexBox]}>
          <Text style={styles.purchaseProject}>Shrink your footprint,{"\n"}</Text>
          <Text style={styles.purchaseProject}>but also grow{"\n"}</Text>
          <Text style={styles.purchaseProject}>your hand print!</Text>
        </Text>
        <View style={[styles.helloWrapper21, styles.helloPosition12]}>
          <Text style={[styles.hello2, styles.helloFlexBox12]}>7</Text>
        </View>
        <Text style={[styles.totalAssets, styles.tonsPosition12]}>
          <Text style={styles.purchaseProject}>
            <Text style={styles.total1}>{`Total `}</Text>
          </Text>
          <Text style={styles.purchaseProject}>
            <Text style={styles.assets1}>{"\n"}Assets</Text>
          </Text>
        </Text>
        <View style={styles.co2RemovedWrapper}>
          <Text style={[styles.co2Removed, styles.helloFlexBox]}>
            <Text style={styles.co}>CO</Text>
            <Text style={styles.text}>2</Text>
            <Text style={styles.co}> Removed</Text>
          </Text>
        </View>
        <Text style={[styles.tons, styles.tonsPosition]}> Tons</Text>
        <View style={[styles.helloContainer, styles.helloPosition]}>
          <Text style={[styles.hello21, styles.helloFlexBox]}> 1,39</Text>
        </View>
        <Image
          style={[styles.treeIcon, styles.treeIconLayout]}
          resizeMode="cover"
          source={require("../assets/tree.png")}
        />
        <Image
          style={[styles.treeIcon1, styles.treeIconLayout]}
          resizeMode="cover"
          source={require("../assets/tree.png")}
        />
        <Image
          style={[styles.treeIcon2, styles.treeIconLayout]}
          resizeMode="cover"
          source={require("../assets/tree.png")}
        />
        <Image
          style={[styles.treeIcon3, styles.treeIconLayout]}
          resizeMode="cover"
          source={require("../assets/tree.png")}
        />
        <Text style={[styles.hello4, styles.helloTypo1]}>Assets</Text>
        <Text style={[styles.hello5, styles.helloTypo1]}>Token</Text>
        <Text style={[styles.hello6, styles.helloFlexBox]}>
          (1 Tonne = 1 CO2 Token)
        </Text>
        <Text
          style={[styles.drylandsProtectionKasigauW, styles.drylandsPosition]}
        >
          <Text
            style={styles.total1}
          >{`Drylands Protection, Kasigau Wildlife Corridor `}</Text>
          <Text style={styles.assets1}>£19 / Tonne</Text>
        </Text>
        <Text
          style={[styles.drylandsProtectionKasigauW1, styles.drylandsPosition]}
        >
          <Text
            style={styles.total1}
          >{`Drylands Protection, Kasigau Wildlife Corridor `}</Text>
          <Text style={styles.assets1}>£19 / Tonne</Text>
        </Text>
        <Text
          style={[styles.drylandsProtectionKasigauW2, styles.drylandsPosition]}
        >
          <Text
            style={styles.total1}
          >{`Drylands Protection, Kasigau Wildlife Corridor `}</Text>
          <Text style={styles.assets1}>£19 / Tonne</Text>
        </Text>
        <Text
          style={[styles.drylandsProtectionKasigauW3, styles.drylandsPosition]}
        >
          <Text
            style={styles.total1}
          >{`Drylands Protection, Kasigau Wildlife Corridor `}</Text>
          <Text style={styles.assets1}>£19 / Tonne</Text>
        </Text>
        <Text style={[styles.nov2022At1820, styles.nov2022Position]}>
          25 Nov 2022 at 18:20
        </Text>
        <Text style={[styles.nov2022At18201, styles.nov2022Position]}>
          25 Nov 2022 at 18:20
        </Text>
        <Text style={[styles.nov2022At18202, styles.nov2022Position]}>
          25 Nov 2022 at 18:20
        </Text>
        <Text style={[styles.nov2022At18203, styles.nov2022Position]}>
          25 Nov 2022 at 18:20
        </Text>
        <Text style={[styles.hello7, styles.helloTypo]}>1</Text>
        <Text style={[styles.hello8, styles.helloTypo]}>3</Text>
        <Text style={[styles.hello9, styles.helloTypo]}>1</Text>
        <Text style={[styles.hello10, styles.helloTypo]}>2</Text>
      </View>
    </View>
    </Screen>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  groupContainerPosition: {
    bottom: 0,
    left: 0,
    right: 0,
    position: "absolute",
  },
  groupPosition: {
    height: 87,
    marginTop: -233.5,
    top: "50%",
    borderRadius: GlobalStyles.Border.br_lg,
    position: "absolute",
  },
  groupChildPosition: {
    height: 76,
    borderRadius: GlobalStyles.Border.br_lg,
    left: 0,
    right: 0,
    position: "absolute",
    backgroundColor: GlobalStyles.Color.white,
  },
  helloFlexBox: {
    textAlign: "left",
    color: GlobalStyles.Color.indigo_100,
    position: "absolute",
  },
  helloFlexBox12: {
    textAlign: "left",
    color: GlobalStyles.Color.indigo_100,
    position: "absolute",
  },
  helloPosition: {
    height: 40,
    bottom: 506,
    left: "50%",
    position: "absolute",
  },
  helloPosition12: {
    height: 40,
    bottom: 506,
    left: "10%",
    position: "absolute",
  },
  tonsPosition12: {
    left: "42%",
    fontSize: GlobalStyles.FontSize.size_base,
    textAlign: "left",
    color: GlobalStyles.Color.indigo_100,
    position: "absolute",
  },
  tonsPosition: {
    left: "50%",
    fontSize: GlobalStyles.FontSize.size_base,
    textAlign: "left",
    color: GlobalStyles.Color.indigo_100,
    position: "absolute",
  },
  treeIconLayout: {
    height: 53,
    width: 37,
    left: 10,
    position: "absolute",
  },
  helloTypo1: {
    fontSize: GlobalStyles.FontSize.size_xs,
    top: "32.7%",
    textAlign: "left",
    color: GlobalStyles.Color.indigo_100,
    fontWeight: "700",
    // fontFamily: GlobalStyles.FontFamily.helvetica,
    position: "absolute",
  },
  drylandsPosition: {
    opacity: 0.77,
    width: 198,
    left: 54,
    fontSize: GlobalStyles.FontSize.size_base,
    textAlign: "left",
    color: GlobalStyles.Color.indigo_100,
    top: "50%",
    position: "absolute",
  },
  nov2022Position: {
    width: 167,
    color: GlobalStyles.Color.gray_800,
    opacity: 0.77,
    left: 54,
    fontSize: GlobalStyles.FontSize.size_xs,
    textAlign: "left",
    top: "50%",
    // fontFamily: GlobalStyles.FontFamily.helvetica,
    position: "absolute",
  },
  helloTypo: {
    lineHeight: 20,
    fontSize: GlobalStyles.FontSize.size_2xl,
    left: "91.41%",
    textAlign: "left",
    color: GlobalStyles.Color.indigo_100,
    // fontFamily: GlobalStyles.FontFamily.helvetica,
    position: "absolute",
  },
  groupChild: {
    height: "100%",
    right: "0%",
    bottom: "0%",
    backgroundColor: GlobalStyles.Color.blue_100,
    borderRadius: GlobalStyles.Border.br_lg,
    left: "0%",
    top: "0%",
    position: "absolute",
    width: "100%",
  },
  maskGroup236: {
    bottom: 13,
    top: 0,
    left: 0,
    right: 0,
    position: "absolute",
  },
  rectangleParent: {
    top: 0,
    left: 0,
  },
  purchaseProject: {
    margin: GlobalStyles.Margin.margin_8xs,
  },
  hello: {
    top: "40%",
    left: "50%",
    marginLeft: -70,
    fontSize: GlobalStyles.FontSize.size_lg,
    lineHeight: 17,
    textTransform: "uppercase",
    color: GlobalStyles.Color.white,
    textAlign: "center",
    // fontFamily: GlobalStyles.FontFamily.helvetica,
    position: "absolute",
  },
  groupContainer: {
    height: 60,
    left: 0,
  },
  groupItem: {
    left: 3,
    backgroundColor: "rgba(65, 160, 57, 0.17)",
    width: "35%",
  },
  groupInner: {
    backgroundColor: "rgba(136, 136, 136, 0.13)",
    width: "60%",
    right: 0,
  },
  rectangleView: {
    marginTop: -92.5,
    top: "50%",
  },
  groupChild1: {
    marginTop: -1.5,
    top: "50%",
  },
  groupChild2: {
    marginTop: 89.5,
    top: "50%",
  },
  groupChild3: {
    bottom: 83,
  },
  hello1: {
    marginLeft: 100,
  left:-65,
    fontSize: GlobalStyles.FontSize.size_8xl,
    lineHeight: 28,
    fontWeight: "700",
    top: 0,
  },
  hello2: {
    fontSize: GlobalStyles.FontSize.size_12xl,
    fontWeight: "700",
    // fontFamily: GlobalStyles.FontFamily.helvetica,
    left: "0%",
    marginLeft: -40,
    top: "0%",
    color: GlobalStyles.Color.indigo_100,
  },
  hello21: {
    marginLeft: -30,
    width: 300,
    fontSize: GlobalStyles.FontSize.size_12xl,
    fontWeight: "700",
    // fontFamily: GlobalStyles.FontFamily.helvetica,
    left: "50%",
    top: "-10%",
    color: GlobalStyles.Color.indigo_100,
  },
  helloWrapper21: {
    marginLeft: 10,
    width: 22,
  },
  helloWrapper: {
    marginLeft: -143.42,
    width: 22,
  },
  total1: {
    // fontFamily: GlobalStyles.FontFamily.helvetica,
  },
  assets1: {
    fontWeight: "700",
    // fontFamily: GlobalStyles.FontFamily.helvetica,
  },
  totalAssets: {
    marginLeft: -112.65,
    bottom: 517,
    width:"40%" ,
    fontSize: GlobalStyles.FontSize.size_base,
  },
  co: {
    fontSize: GlobalStyles.FontSize.size_base,
  },
  text: {
    fontSize: GlobalStyles.FontSize.size_5xs,
    textAlignVertical: "sub",
  },
  co2Removed: {
    marginTop: "-17%",
    width: 93,
    top: "50%",
    // fontFamily: GlobalStyles.FontFamily.helvetica,
    left: 0,
  },
  co2RemovedWrapper: {
    marginTop: -159.94,
    right: 30,
    width: 92,
    height: 14,
    top: "48%",
    position: "absolute",
  },
  tons: {
    marginTop: -206,
    marginLeft: 54.53,
    width: "95%",
    fontSize: GlobalStyles.FontSize.size_base,
    fontWeight: "700",
    top: "50%",
    // fontFamily: GlobalStyles.FontFamily.helvetica,
  },
  helloContainer: {
    
    marginLeft: -50.89,
    width: 89,
  },
  treeIcon: {
    marginTop: -79.5,
    top: "50%",
  },
  treeIcon1: {
    marginTop: 11.5,
    top: "50%",
  },
  treeIcon2: {
    marginTop: 102.5,
    top: "50%",
  },
  treeIcon3: {
    bottom: 93,
  },
  hello4: {
    left: "2.15%",
  },
  hello5: {
    left: "86.2%",
  },
  hello6: {
    top: "32.84%",
    left: "15.64%",
    fontSize: GlobalStyles.FontSize.size_3xs,
    // fontFamily: GlobalStyles.FontFamily.helvetica,
  },
  drylandsProtectionKasigauW: {
    marginTop: -79.5,
  },
  drylandsProtectionKasigauW1: {
    marginTop: 11.5,
  },
  drylandsProtectionKasigauW2: {
    marginTop: 102.5,
  },
  drylandsProtectionKasigauW3: {
    marginTop: 193.5,
  },
  nov2022At1820: {
    marginTop: -43.5,
  },
  nov2022At18201: {
    marginTop: 47.5,
  },
  nov2022At18202: {
    marginTop: 138.5,
  },
  nov2022At18203: {
    marginTop: 229.5,
  },
  hello7: {
    top: "38.73%",
  },
  hello8: {
    top: "52.14%",
  },
  hello9: {
    top: "65.54%",
  },
  hello10: {
    top: "78.94%",
  },
  groupParent: {
    width: "100%",
    height: 679,
  },
  arrowPosition: {
    top: "6%",
    position: "absolute",
  },
  arrowCircle: {
    marginTop: -10.11,
    marginRight: 303.54,
    width: 15,
    height: 15,
  },
  chooseCardsStandard5: {
    flex: 1,
    paddingLeft: GlobalStyles.Padding.padding_7xs,
    paddingRight: GlobalStyles.Padding.padding_8xs,
    width: "100%",
    backgroundColor: GlobalStyles.Color.gray_100,
  },
});

export default ChooseCardsStandard5;
