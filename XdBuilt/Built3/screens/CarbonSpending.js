import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import GlobalStyles from "../GlobalStyles";

const CarbonSpending = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.carbonSpending}>
      <View style={styles.carbonSpendingChild} />
      <View style={[styles.helloParent, styles.mt_15, styles.ml48]}>
        <Text style={[styles.hello, styles.helloTypo4, styles.helloTypo5]}>
          ↓10%
        </Text>
        <Text style={[styles.hello1, styles.helloTypo4, styles.helloTypo5]}>
          550 kg
        </Text>
        <Text style={[styles.hello2, styles.helloTypo3]}>From last month</Text>
        <Text style={[styles.hello3, styles.helloTypo3]}>Left this month</Text>
      </View>
      <Text style={[styles.helloTypo2, styles.mt17, styles.ml24]}>
        September 1 - September 30, 2022
      </Text>
      <View style={[styles.homeIndicator, styles.mt178, styles.ml121]} />
      <Text style={[styles.hello5, styles.mt4, styles.ml95]}>
        <Text style={styles.yourAverageMonthly}>Your average monthly</Text>
        <Text style={styles.yourAverageMonthly}>Carbon Footprint is</Text>
      </Text>
      <View style={[styles.groupParent, styles.mt31, styles.parentLayout]}>
        <View style={styles.helloGroup}>
          <Text style={[styles.hello6, styles.helloTypo4]}>Monthly</Text>
          <Text style={styles.hello7}>Quarterly</Text>
          <Text style={[styles.hello8, styles.helloTypo1]}>Yearly</Text>
          <Text style={[styles.hello9, styles.helloTypo1]}>All</Text>
        </View>
        <View style={[styles.groupChild, styles.groupPosition]} />
        <View style={[styles.groupItem, styles.groupPosition]} />
      </View>
      <View style={[styles.ellipseParent, styles.mt_34]}>
        <Image
          style={styles.groupInner}
          resizeMode="cover"
          source={require("../assets/ellipse-3211.png")}
        />
        <Image
          style={styles.groupIcon}
          resizeMode="cover"
          source={require("../assets/group-30652.png")}
        />
        <Text style={[styles.hello10, styles.helloTypo]}>2436</Text>
        <Text style={[styles.hello11, styles.helloTypo]}>
          <Text style={styles.kgCo}>kg CO</Text>
          <Text style={styles.text}>2</Text>
        </Text>
        <Image
          style={[styles.iconFeatherHeart, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/icon-featherheart.png")}
        />
        <Image
          style={[
            styles.house1Icon,
            styles.house1IconPosition,
            styles.house1IconLayout,
          ]}
          resizeMode="cover"
          source={require("../assets/house-1.png")}
        />
        <Image
          style={[styles.transportationIcon, styles.transportationIconLayout]}
          resizeMode="cover"
          source={require("../assets/transportation.png")}
        />
      </View>
      <View
        style={[styles.lanceBogrolParent, styles.mt33, styles.parentLayout]}
      >
        <Text
          style={[styles.lanceBogrol, styles.lanceTypo, styles.historyPosition]}
        >
          Categories
        </Text>
        <View style={styles.groupContainer}>
          <View style={[styles.helloContainer, styles.helloParentPosition]}>
            <Text
              style={[styles.hello12, styles.helloTypo2]}
            >{`Health & Beauty`}</Text>
            <View style={[styles.rectangleView, styles.groupChildPosition]} />
            <View style={[styles.groupChild1, styles.groupChildPosition]} />
            <Image
              style={[styles.iconFeatherHeart1, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/icon-featherheart.png")}
            />
            <Text style={[styles.hello13, styles.helloTypo]}>254</Text>
          </View>
          <View style={[styles.groupView, styles.helloParentPosition]}>
            <Text
              style={[styles.hello12, styles.helloTypo2]}
            >{`Food & Beverages`}</Text>
            <View style={[styles.rectangleView, styles.groupChildPosition]} />
            <View style={[styles.groupChild3, styles.groupChildPosition]} />
            <Text style={[styles.hello13, styles.helloTypo]}>254</Text>
            <Image
              style={[styles.layer2Icon, styles.iconPosition1]}
              resizeMode="cover"
              source={require("../assets/layer-2.png")}
            />
          </View>
          <View style={[styles.helloParent1, styles.helloParentPosition]}>
            <Text style={[styles.hello12, styles.helloTypo2]}>House</Text>
            <View style={[styles.rectangleView, styles.groupChildPosition]} />
            <View style={[styles.groupChild5, styles.groupChildPosition]} />
            <Text style={[styles.hello13, styles.helloTypo]}>254</Text>
            <Image
              style={[
                styles.house1Icon1,
                styles.house1IconPosition,
                styles.house1IconLayout,
              ]}
              resizeMode="cover"
              source={require("../assets/house-11.png")}
            />
          </View>
          <View style={[styles.helloParent2, styles.helloParentPosition]}>
            <Text style={[styles.hello12, styles.helloTypo2]}>Shopping</Text>
            <View style={[styles.rectangleView, styles.groupChildPosition]} />
            <View style={[styles.groupChild7, styles.groupChildPosition]} />
            <Text style={[styles.hello13, styles.helloTypo]}>254</Text>
            <Image
              style={[styles.shoppingIcon, styles.house1IconPosition]}
              resizeMode="cover"
              source={require("../assets/shopping.png")}
            />
          </View>
          <View style={[styles.helloParent3, styles.helloParentPosition]}>
            <Text style={[styles.hello12, styles.helloTypo2]}>Transport</Text>
            <View style={[styles.rectangleView, styles.groupChildPosition]} />
            <View style={[styles.groupChild9, styles.groupChildPosition]} />
            <Text style={[styles.hello13, styles.helloTypo]}>254</Text>
            <Image
              style={[
                styles.transportationIcon1,
                styles.transportationIconLayout,
              ]}
              resizeMode="cover"
              source={require("../assets/transportation.png")}
            />
          </View>
        </View>
      </View>
      <View style={[styles.historyParent, styles.mt211, styles.parentLayout]}>
        <Text
          style={[styles.history, styles.lanceTypo, styles.historyPosition]}
        >
          Transactions
        </Text>
        <Image
          style={styles.path23339Icon}
          resizeMode="cover"
          source={require("../assets/path-23663.png")}
        />
        <View style={[styles.groupParent1, styles.groupParentShadowBox]}>
          <View style={styles.lanceBogrolGroup}>
            <Text style={[styles.lanceBogrol1, styles.lanceTypo]}>Flight</Text>
            <Text style={[styles.moneyTransfer, styles.moneyPosition]}>
              <Text style={styles.yourAverageMonthly}>September 22, 2022</Text>
              <Text style={styles.yourAverageMonthly}>12:06 PM</Text>
            </Text>
          </View>
          <Text style={[styles.text1, styles.lanceTypo]}>
            <Text style={styles.kgCo1}>7.2 kg CO</Text>
            <Text style={styles.text2}>2</Text>
          </Text>
          <View style={styles.groupChild10} />
          <Image
            style={[styles.iconAwesomePlaneDeparture, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/icon-awesomeplanedeparture.png")}
          />
        </View>
        <View style={[styles.groupParent2, styles.groupParentShadowBox]}>
          <View style={styles.lanceBogrolGroup}>
            <Text style={[styles.lanceBogrol1, styles.lanceTypo]}>Food</Text>
            <Text style={styles.moneyPosition}>
              <Text style={styles.yourAverageMonthly}>September 22, 2022</Text>
              <Text style={styles.yourAverageMonthly}>12:06 PM</Text>
            </Text>
          </View>
          <Text style={[styles.text1, styles.lanceTypo]}>
            <Text style={styles.kgCo1}>10 kg CO</Text>
            <Text style={styles.text2}>2</Text>
          </Text>
          <View style={styles.groupChild10} />
          <Image
            style={[styles.iconMapFood, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/icon-mapfood.png")}
          />
        </View>
        <View style={[styles.groupParent3, styles.groupParentShadowBox]}>
          <View style={styles.lanceBogrolGroup}>
            <Text style={[styles.lanceBogrol1, styles.lanceTypo]}>Car</Text>
            <Text style={styles.moneyPosition}>
              <Text style={styles.yourAverageMonthly}>September 22, 2022</Text>
              <Text style={styles.yourAverageMonthly}>12:06 PM</Text>
            </Text>
          </View>
          <Text style={[styles.text1, styles.lanceTypo]}>
            <Text style={styles.kgCo1}>5 kg CO</Text>
            <Text style={styles.text2}>2</Text>
          </Text>
          <View style={styles.groupChild10} />
          <Image
            style={[styles.iconAwesomeCar, styles.iconPosition1]}
            resizeMode="cover"
            source={require("../assets/icon-awesomecar.png")}
          />
        </View>
        <View style={[styles.groupParent4, styles.groupParentShadowBox]}>
          <View style={styles.lanceBogrolGroup}>
            <Text style={[styles.lanceBogrol1, styles.lanceTypo]}>Shop</Text>
            <Text style={styles.moneyPosition}>
              <Text style={styles.yourAverageMonthly}>September 22, 2022</Text>
              <Text style={styles.yourAverageMonthly}>12:06 PM</Text>
            </Text>
          </View>
          <Text style={[styles.text1, styles.lanceTypo]}>
            <Text style={styles.kgCo1}>7.2 kg CO</Text>
            <Text style={styles.text2}>2</Text>
          </Text>
          <View style={styles.groupChild10} />
          <Image
            style={[styles.iconAwesomeShoppingCart, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/icon-awesomeshoppingcart.png")}
          />
        </View>
      </View>
      <Image
        style={[styles.carbonSpendingItem, styles.mt_362, styles.ml24]}
        resizeMode="cover"
        source={require("../assets/group-31146.png")}
      />
      <Pressable
        style={[styles.iconFeatherArrowLeftWrapper, styles.mt_1380]}
        onPress={() => navigation.navigate("Carbon")}
      >
        <Image
          style={styles.iconFeatherArrowLeft}
          resizeMode="cover"
          source={require("../assets/icon-featherarrowleft.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  mt_15: {
    marginTop: GlobalStyles.Margin.margin_28xs,
  },
  ml48: {
    marginLeft: GlobalStyles.Margin.margin_26xl,
  },
  mt17: {
    marginTop: GlobalStyles.Margin.margin_4xs,
  },
  ml24: {
    marginLeft: GlobalStyles.Margin.margin_2xl,
  },
  mt178: {
    marginTop: 178,
  },
  ml121: {
    marginLeft: GlobalStyles.Margin.margin_46xl,
  },
  mt4: {
    marginTop: GlobalStyles.Margin.margin_22xs,
  },
  ml95: {
    marginLeft: 95,
  },
  mt31: {
    marginTop: GlobalStyles.Margin.margin_9xl,
  },
  mt_34: {
    marginTop: -34,
  },
  mt33: {
    marginTop: GlobalStyles.Margin.margin_12xl,
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
  helloTypo4: {
    textAlign: "left",
    fontSize: GlobalStyles.FontSize.size_lg,
    color: GlobalStyles.Color.blue,
    fontFamily: GlobalStyles.FontFamily.helvetica,
    top: 0,
    position: "absolute",
  },
  helloTypo5: {
    lineHeight: 16,
    textAlign: "left",
    fontSize: GlobalStyles.FontSize.size_lg,
  },
  helloTypo3: {
    color: GlobalStyles.Color.gray_800,
    fontSize: GlobalStyles.FontSize.size_2xs,
    top: 19,
    textAlign: "left",
    fontFamily: GlobalStyles.FontFamily.helvetica,
    position: "absolute",
  },
  parentLayout: {
    width: 327,
    alignSelf: "center",
  },
  helloTypo1: {
    opacity: 0.5,
    fontSize: GlobalStyles.FontSize.size_sm,
    top: 1,
    color: GlobalStyles.Color.gray_900,
    textAlign: "left",
    fontFamily: GlobalStyles.FontFamily.helvetica,
    position: "absolute",
  },
  groupPosition: {
    height: 2,
    borderTopWidth: 1,
    borderColor: "#fff",
    borderStyle: "solid",
    right: 1,
    position: "absolute",
  },
  helloTypo: {
    color: GlobalStyles.Color.gray_1400,
    textAlign: "center",
    fontFamily: GlobalStyles.FontFamily.helvetica,
    position: "absolute",
  },
  iconLayout: {
    height: 13,
    width: 14,
    top: "50%",
    position: "absolute",
  },
  house1IconPosition: {
    height: 10,
    top: "50%",
    position: "absolute",
  },
  house1IconLayout: {
    width: 11,
    height: 10,
  },
  transportationIconLayout: {
    height: 9,
    width: 11,
    top: "50%",
    position: "absolute",
  },
  lanceTypo: {
    letterSpacing: 1,
    fontWeight: "700",
    position: "absolute",
  },
  historyPosition: {
    left: 30,
    letterSpacing: 1,
    color: GlobalStyles.Color.indigo,
    fontFamily: GlobalStyles.FontFamily.typoGrotesk,
    textAlign: "left",
    top: 0,
  },
  helloParentPosition: {
    left: 25,
    right: 19,
    height: 45,
    position: "absolute",
  },
  helloTypo2: {
    color: GlobalStyles.Color.gray_900,
    fontSize: GlobalStyles.FontSize.size_4xs,
    textAlign: "left",
    fontFamily: GlobalStyles.FontFamily.helvetica,
  },
  groupChildPosition: {
    height: 30,
    borderRadius: GlobalStyles.Border.br_2xl,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
  iconPosition1: {
    height: 12,
    top: "50%",
    position: "absolute",
  },
  groupParentShadowBox: {
    height: 64,
    shadowOpacity: 1,
    elevation: 20,
    shadowRadius: 20,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(1, 1, 253, 0.05)",
    borderRadius: GlobalStyles.Border.br_3xl,
    right: 0,
    left: 0,
    position: "absolute",
    backgroundColor: GlobalStyles.Color.white,
  },
  moneyPosition: {
    color: GlobalStyles.Color.gray_1000,
    letterSpacing: 1,
    bottom: 0,
    fontSize: GlobalStyles.FontSize.size_4xs,
    left: 0,
    textAlign: "left",
    fontFamily: GlobalStyles.FontFamily.helvetica,
    position: "absolute",
  },
  iconPosition: {
    width: 18,
    left: 22,
    top: "50%",
    position: "absolute",
  },
  carbonSpendingChild: {
    width: 375,
    height: 1383,
    backgroundColor: GlobalStyles.Color.gray_300,
  },
  hello: {
    left: 24,
  },
  hello1: {
    left: 213,
  },
  hello2: {
    left: 0,
  },
  hello3: {
    left: 197,
  },
  helloParent: {
    width: 276,
    height: 33,
  },
  homeIndicator: {
    borderRadius: GlobalStyles.Border.br_7xl,
    backgroundColor: GlobalStyles.Color.black,
    width: 134,
    height: 5,
  },
  yourAverageMonthly: {
    margin: GlobalStyles.Margin.margin_25xs,
  },
  hello5: {
    textAlign: "center",
    fontFamily: GlobalStyles.FontFamily.typoGrotesk,
    color: GlobalStyles.Color.indigo,
    fontWeight: "700",
    lineHeight: 20,
    fontSize: GlobalStyles.FontSize.size_xl,
  },
  hello6: {
    fontWeight: "700",
    left: 0,
    textAlign: "left",
    fontSize: GlobalStyles.FontSize.size_lg,
  },
  hello7: {
    left: 115,
    opacity: 0.56,
    fontSize: GlobalStyles.FontSize.size_sm,
    top: 1,
    color: GlobalStyles.Color.gray_800,
    textAlign: "left",
    fontFamily: GlobalStyles.FontFamily.helvetica,
    position: "absolute",
  },
  hello8: {
    left: 218,
  },
  hello9: {
    left: 310,
  },
  helloGroup: {
    height: "45.95%",
    width: "99.69%",
    top: "29.5%",
    right: "0%",
    bottom: "24.56%",
    left: "0.31%",
    position: "absolute",
  },
  groupChild: {
    top: -1,
    left: 0,
  },
  groupItem: {
    bottom: -1,
    left: -1,
  },
  groupParent: {
    alignSelf: "center",
    height: 37,
  },
  groupInner: {
    marginLeft: -46.52,
    bottom: 15,
    width: 100,
    height: 22,
    opacity: 0.32,
    left: "50%",
    position: "absolute",
  },
  groupIcon: {
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    bottom: 0,
    right: 0,
    left: 0,
    top: 0,
    position: "absolute",
  },
  hello10: {
    top: "40.81%",
    left: "37.8%",
    fontSize: 65,
    verticalAlign: "super",
    fontWeight: "700",
  },
  kgCo: {
    fontSize: GlobalStyles.FontSize.size_xl,
  },
  text: {
    fontSize: 10,
    verticalAlign: "sub",
  },
  hello11: {
    top: "54.5%",
    left: "41.27%",
    lineHeight: 24,
    fontWeight: "700",
  },
  iconFeatherHeart: {
    marginTop: -72.01,
    marginLeft: 68.35,
    left: "50%",
  },
  house1Icon: {
    marginTop: 45.32,
    marginLeft: -94.71,
    left: "50%",
  },
  transportationIcon: {
    marginTop: -89.76,
    marginLeft: -62.21,
    left: "50%",
  },
  ellipseParent: {
    width: 346,
    height: 346,
    alignSelf: "center",
  },
  lanceBogrol: {
    lineHeight: 20,
    left: 30,
    fontSize: GlobalStyles.FontSize.size_lg,
  },
  hello12: {
    top: "0%",
    left: "0%",
    position: "absolute",
  },
  rectangleView: {
    right: 0,
    backgroundColor: GlobalStyles.Color.gray_300,
  },
  groupChild1: {
    backgroundColor: GlobalStyles.Color.orange_200,
    width: 213,
  },
  iconFeatherHeart1: {
    marginTop: 2.95,
    left: 13,
  },
  hello13: {
    top: "55.81%",
    left: "90.81%",
    fontSize: GlobalStyles.FontSize.size_4xs,
    color: GlobalStyles.Color.gray_1400,
  },
  helloContainer: {
    height: 45,
    top: 19,
    right: 19,
  },
  groupChild3: {
    backgroundColor: GlobalStyles.Color.orange_100,
    width: 191,
  },
  layer2Icon: {
    marginTop: 1.8,
    width: 12,
    left: 13,
  },
  groupView: {
    marginTop: -87.94,
    height: 45,
    top: "50%",
  },
  groupChild5: {
    backgroundColor: GlobalStyles.Color.violet_100,
    width: 125,
  },
  house1Icon1: {
    marginTop: 2.98,
    left: 12,
  },
  helloParent1: {
    marginTop: -31.04,
    height: 45,
    top: "50%",
  },
  groupChild7: {
    backgroundColor: GlobalStyles.Color.violet_200,
    width: 72,
  },
  shoppingIcon: {
    marginTop: 3.15,
    left: 10,
    width: 10,
  },
  helloParent2: {
    marginTop: 25.86,
    height: 45,
    top: "50%",
  },
  groupChild9: {
    backgroundColor: GlobalStyles.Color.green_100,
    width: 47,
  },
  transportationIcon1: {
    marginTop: 3.45,
    left: 11,
  },
  helloParent3: {
    bottom: 35,
    height: 45,
  },
  groupContainer: {
    top: 37,
    shadowOpacity: 1,
    elevation: 20,
    shadowRadius: 20,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(1, 1, 253, 0.05)",
    borderRadius: GlobalStyles.Border.br_3xl,
    bottom: 0,
    right: 0,
    left: 0,
    position: "absolute",
    backgroundColor: GlobalStyles.Color.white,
  },
  lanceBogrolParent: {
    height: 364,
    alignSelf: "center",
  },
  history: {
    fontSize: GlobalStyles.FontSize.size_xl,
  },
  path23339Icon: {
    top: 6,
    width: 19,
    height: 20,
    left: 0,
    position: "absolute",
  },
  lanceBogrol1: {
    color: GlobalStyles.Color.indigo,
    letterSpacing: 1,
    fontSize: GlobalStyles.FontSize.size_2xs,
    left: 0,
    textAlign: "left",
    fontFamily: GlobalStyles.FontFamily.helvetica,
    top: 0,
  },
  moneyTransfer: {
    textShadowColor: "rgba(1, 1, 253, 0.05)",
    textShadowOffset: {
      width: 0,
      height: 3,
    },
    textShadowRadius: 6,
  },
  lanceBogrolGroup: {
    marginTop: -18,
    marginLeft: -98.52,
    width: 105,
    top: "50%",
    left: "50%",
    height: 37,
    position: "absolute",
  },
  kgCo1: {
    fontSize: GlobalStyles.FontSize.size_sm,
  },
  text2: {
    fontSize: GlobalStyles.FontSize.size_8xs,
    verticalAlign: "sub",
  },
  text1: {
    marginTop: -8,
    right: 24,
    textAlign: "right",
    top: "50%",
    letterSpacing: 1,
    color: GlobalStyles.Color.blue,
    fontFamily: GlobalStyles.FontFamily.helvetica,
  },
  groupChild10: {
    marginTop: -16,
    left: 14,
    borderRadius: GlobalStyles.Border.br_4xs,
    backgroundColor: GlobalStyles.Color.gray_200,
    width: 34,
    height: 34,
    top: "50%",
    position: "absolute",
  },
  iconAwesomePlaneDeparture: {
    marginTop: -4.89,
    height: 14,
  },
  groupParent1: {
    top: 46,
  },
  iconMapFood: {
    marginTop: -6.81,
    height: 16,
  },
  groupParent2: {
    marginTop: 29,
    top: "50%",
  },
  iconAwesomeCar: {
    marginTop: -4.92,
    left: 23,
    width: 16,
  },
  groupParent3: {
    marginTop: -47,
    top: "50%",
  },
  iconAwesomeShoppingCart: {
    marginTop: -4.4,
    left: 24,
  },
  groupParent4: {
    bottom: 0,
  },
  historyParent: {
    height: 338,
    alignSelf: "center",
  },
  carbonSpendingItem: {
    width: 20,
    height: 20,
  },
  iconFeatherArrowLeft: {
    marginLeft: -0.5,
    bottom: 4,
    width: 17,
    height: 17,
    left: "50%",
    position: "absolute",
  },
  iconFeatherArrowLeftWrapper: {
    width: 55,
    height: 45,
    backgroundColor: GlobalStyles.Color.gray_300,
  },
  carbonSpending: {
    flex: 1,
    width: "100%",
    paddingTop: 43,
    backgroundColor: GlobalStyles.Color.white,
  },
});

export default CarbonSpending;
