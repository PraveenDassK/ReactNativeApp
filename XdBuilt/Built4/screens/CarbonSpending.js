import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import GlobalStyles from "../GlobalStyles";

const CarbonSpending = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.carbonSpending}>
      <View style={[styles.carbonSpendingChild, styles.mt_5]} />
      <View style={[styles.helloParent, styles.mt_15, styles.ml48]}>
        <Text
          style={[
            styles.hello,
            styles.helloFlexBox,
            styles.helloColor,
            styles.helloTypo4,
          ]}
        >
          ↓10%
        </Text>
        <Text
          style={[
            styles.hello1,
            styles.helloFlexBox,
            styles.helloColor,
            styles.helloTypo4,
          ]}
        >
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
          <Text style={[styles.hello6, styles.helloFlexBox, styles.helloColor]}>
            Monthly
          </Text>
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
        <Text style={[styles.hello11, styles.text9Layout, styles.helloTypo]}>
          <Text style={styles.kgCo}>kg CO</Text>
          <Text style={styles.text}>2</Text>
        </Text>
        <Image
          style={[styles.iconFeatherHeart, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/icon-featherheart.png")}
        />
        <Image
          style={[styles.house1Icon, styles.house1IconPosition]}
          resizeMode="cover"
          source={require("../assets/house-11.png")}
        />
        <Image
          style={styles.transportationIcon}
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
        <View style={[styles.groupContainer, styles.rectanglePosition]}>
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
              source={require("../assets/layer-21.png")}
            />
          </View>
          <View style={[styles.helloParent1, styles.helloParentPosition]}>
            <Text style={[styles.hello12, styles.helloTypo2]}>House</Text>
            <View style={[styles.rectangleView, styles.groupChildPosition]} />
            <View style={[styles.groupChild5, styles.groupChildPosition]} />
            <Text style={[styles.hello13, styles.helloTypo]}>254</Text>
            <Image
              style={[styles.house1Icon1, styles.house1IconPosition]}
              resizeMode="cover"
              source={require("../assets/house-12.png")}
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
              source={require("../assets/shopping1.png")}
            />
          </View>
          <View style={[styles.helloParent3, styles.helloParentPosition]}>
            <Text style={[styles.hello12, styles.helloTypo2]}>Transport</Text>
            <View style={[styles.rectangleView, styles.groupChildPosition]} />
            <View style={[styles.groupChild9, styles.groupChildPosition]} />
            <Text style={[styles.hello13, styles.helloTypo]}>254</Text>
            <Image
              style={styles.transportationIcon1}
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
          <Text style={[styles.text1, styles.lanceTypo, styles.helloColor]}>
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
          <Text style={[styles.text1, styles.lanceTypo, styles.helloColor]}>
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
          <Text style={[styles.text1, styles.lanceTypo, styles.helloColor]}>
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
          <Text style={[styles.text1, styles.lanceTypo, styles.helloColor]}>
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
      <View style={[styles.homeIndicator, styles.mt_5, styles.ml121]} />
      <View style={[styles.statusBarBlack, styles.mt4]}>
        <View style={[styles.rectangle, styles.rectanglePosition]} />
        <View style={styles.statusBar}>
          <View style={styles.time}>
            <Text
              style={[styles.text9, styles.text9Layout, styles.helloFlexBox]}
            >
              9:41
            </Text>
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
            <View style={[styles.networkChild, styles.networkChildLayout]} />
            <View style={[styles.networkItem, styles.networkChildLayout]} />
            <View style={[styles.networkInner, styles.networkChildLayout]} />
            <View style={[styles.networkChild1, styles.networkChildLayout]} />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mt_5: {
    marginTop: GlobalStyles.Margin.margin_37xs,
  },
  mt_15: {
    marginTop: GlobalStyles.Margin.margin_41xs,
  },
  ml48: {
    marginLeft: GlobalStyles.Margin.margin_19xl,
  },
  mt17: {
    marginTop: GlobalStyles.Margin.margin_16xs,
  },
  ml24: {
    marginLeft: GlobalStyles.Margin.margin_8xs,
  },
  mt178: {
    marginTop: GlobalStyles.Margin.margin_69xl,
  },
  ml121: {
    marginLeft: GlobalStyles.Margin.margin_54xl,
  },
  mt4: {
    marginTop: GlobalStyles.Margin.margin_29xs,
  },
  ml95: {
    marginLeft: 95,
  },
  mt31: {
    marginTop: GlobalStyles.Margin.margin_md,
  },
  mt_34: {
    marginTop: -34,
  },
  mt33: {
    marginTop: GlobalStyles.Margin.margin_2xl,
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
  helloFlexBox: {
    textAlign: "left",
    top: 0,
  },
  helloColor: {
    color: GlobalStyles.Color.blue,
    fontFamily: GlobalStyles.FontFamily.helvetica,
  },
  helloTypo4: {
    lineHeight: 16,
    textAlign: "left",
    fontFamily: GlobalStyles.FontFamily.helvetica,
    fontSize: GlobalStyles.FontSize.size_xl,
    position: "absolute",
  },
  helloTypo3: {
    color: GlobalStyles.Color.gray_800,
    fontSize: GlobalStyles.FontSize.size_xs,
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
    fontSize: GlobalStyles.FontSize.size_base,
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
    color: GlobalStyles.Color.gray_1500,
    textAlign: "center",
    fontFamily: GlobalStyles.FontFamily.helvetica,
  },
  text9Layout: {
    lineHeight: 24,
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
  rectanglePosition: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    bottom: 0,
    right: 0,
    left: 0,
    position: "absolute",
    backgroundColor: GlobalStyles.Color.white,
  },
  helloParentPosition: {
    left: 25,
    right: 19,
    height: 45,
    position: "absolute",
  },
  helloTypo2: {
    color: GlobalStyles.Color.gray_900,
    fontSize: GlobalStyles.FontSize.size_3xs,
    textAlign: "left",
    fontFamily: GlobalStyles.FontFamily.helvetica,
  },
  groupChildPosition: {
    height: 30,
    borderRadius: GlobalStyles.Border.br_3xl,
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
    borderRadius: GlobalStyles.Border.br_4xl,
    right: 0,
    left: 0,
    position: "absolute",
    backgroundColor: GlobalStyles.Color.white,
  },
  moneyPosition: {
    color: GlobalStyles.Color.gray_1000,
    letterSpacing: 1,
    bottom: 0,
    fontSize: GlobalStyles.FontSize.size_3xs,
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
  networkPosition: {
    height: 11,
    marginTop: -3,
    top: "50%",
    position: "absolute",
  },
  networkChildLayout: {
    width: 3,
    backgroundColor: GlobalStyles.Color.gray_1400,
    borderRadius: GlobalStyles.Border.br_7xs,
    bottom: 0,
    position: "absolute",
  },
  carbonSpendingChild: {
    height: 1383,
    width: 375,
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
    borderRadius: GlobalStyles.Border.br_8xl,
    backgroundColor: GlobalStyles.Color.black,
    width: 134,
    height: 5,
  },
  yourAverageMonthly: {
    margin: GlobalStyles.Margin.margin_33xs,
  },
  hello5: {
    textAlign: "center",
    fontFamily: GlobalStyles.FontFamily.typoGrotesk,
    color: GlobalStyles.Color.indigo,
    fontWeight: "700",
    lineHeight: 20,
    fontSize: GlobalStyles.FontSize.size_2xl,
  },
  hello6: {
    fontWeight: "700",
    left: 0,
    fontSize: GlobalStyles.FontSize.size_xl,
    textAlign: "left",
    fontFamily: GlobalStyles.FontFamily.helvetica,
    position: "absolute",
  },
  hello7: {
    left: 115,
    opacity: 0.56,
    fontSize: GlobalStyles.FontSize.size_base,
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
    position: "absolute",
  },
  kgCo: {
    fontSize: GlobalStyles.FontSize.size_2xl,
  },
  text: {
    fontSize: 10,
    verticalAlign: "sub",
  },
  hello11: {
    top: "54.5%",
    left: "41.27%",
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
    width: 11,
    left: "50%",
  },
  transportationIcon: {
    marginTop: -89.76,
    marginLeft: -62.21,
    height: 9,
    width: 11,
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  ellipseParent: {
    width: 346,
    height: 346,
    alignSelf: "center",
  },
  lanceBogrol: {
    lineHeight: 20,
    left: 30,
    fontSize: GlobalStyles.FontSize.size_xl,
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
    fontSize: GlobalStyles.FontSize.size_3xs,
    color: GlobalStyles.Color.gray_1500,
    position: "absolute",
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
    width: 11,
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
    height: 9,
    width: 11,
    top: "50%",
    position: "absolute",
  },
  helloParent3: {
    bottom: 35,
    height: 45,
  },
  groupContainer: {
    top: 37,
    elevation: 20,
    shadowRadius: 20,
    shadowColor: "rgba(1, 1, 253, 0.05)",
    borderRadius: GlobalStyles.Border.br_4xl,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
  },
  lanceBogrolParent: {
    height: 364,
    alignSelf: "center",
  },
  history: {
    fontSize: GlobalStyles.FontSize.size_2xl,
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
    fontSize: GlobalStyles.FontSize.size_xs,
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
    fontSize: GlobalStyles.FontSize.size_base,
  },
  text2: {
    fontSize: GlobalStyles.FontSize.size_7xs,
    verticalAlign: "sub",
  },
  text1: {
    marginTop: -8,
    right: 24,
    textAlign: "right",
    top: "50%",
  },
  groupChild10: {
    marginTop: -16,
    left: 14,
    borderRadius: GlobalStyles.Border.br_3xs,
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
    shadowRadius: 6,
    elevation: 6,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    top: 0,
  },
  text9: {
    fontSize: GlobalStyles.FontSize.size_4xl,
    letterSpacing: 0,
    fontWeight: "500",
    fontFamily: GlobalStyles.FontFamily.roboto,
    color: GlobalStyles.Color.gray_1900,
    left: 0,
  },
  time: {
    width: 40,
    bottom: 0,
    left: 0,
    top: 0,
    position: "absolute",
  },
  batteryIcon: {
    width: 22,
    right: 0,
  },
  wifiIcon: {
    right: 37,
    marginTop: -3,
    width: 17,
    height: 12,
    top: "50%",
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
  networkChild1: {
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
    top: "50%",
    position: "absolute",
  },
  statusBarBlack: {
    height: 44,
    width: 375,
  },
  carbonSpending: {
    flex: 1,
    width: "100%",
    backgroundColor: GlobalStyles.Color.white,
  },
});

export default CarbonSpending;
