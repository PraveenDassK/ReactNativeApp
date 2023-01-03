import * as React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import GlobalStyles from "../GlobalStyles";

const CarbonSpending = () => {
  return (
    <View style={styles.carbonSpending}>
      <View style={styles.groupParent}>
        <View style={styles.helloParent}>
          <Text style={[styles.hello, styles.helloTypo5, styles.helloLayout]}>
            ↓10%
          </Text>
          <Text style={[styles.hello1, styles.helloTypo5, styles.helloLayout]}>
            550 kg
          </Text>
          <Text style={[styles.hello2, styles.helloTypo3, styles.helloTypo4]}>
            From last month
          </Text>
          <Text style={[styles.hello3, styles.helloTypo3, styles.helloTypo4]}>
            Left this month
          </Text>
        </View>
        <Text style={[styles.hello4, styles.helloTypo2]}>
          September 1 - September 30, 2022
        </Text>
        <Text style={styles.hello5}>
          <Text style={styles.yourAverageMonthly}>Your average monthly</Text>
          <Text style={styles.yourAverageMonthly}>Carbon Footprint is</Text>
        </Text>
        <View style={[styles.groupContainer, styles.parentPosition]}>
          <View style={styles.helloGroup}>
            <Text style={[styles.hello6, styles.helloTypo5]}>Monthly</Text>
            <Text style={[styles.hello7, styles.helloTypo3]}>Quarterly</Text>
            <Text style={[styles.hello8, styles.helloTypo1]}>Yearly</Text>
            <Text style={[styles.hello9, styles.helloTypo1]}>All</Text>
          </View>
          <View style={[styles.groupChild, styles.groupPosition1]} />
          <View style={[styles.groupItem, styles.groupPosition1]} />
        </View>
        <View style={[styles.ellipseParent, styles.groupIconPosition]}>
          <Image
            style={styles.groupInner}
            resizeMode="cover"
            source={require("../assets/ellipse-3211.png")}
          />
          <Image
            style={[styles.groupIcon, styles.groupIconPosition]}
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
        <View style={[styles.lanceBogrolParent, styles.parentPosition]}>
          <Text
            style={[
              styles.lanceBogrol,
              styles.lanceTypo,
              styles.historyPosition,
            ]}
          >
            Categories
          </Text>
          <View style={styles.groupView}>
            <View style={[styles.helloContainer, styles.helloParentPosition]}>
              <Text
                style={[styles.hello12, styles.helloTypo2]}
              >{`Health & Beauty`}</Text>
              <View style={[styles.rectangleView, styles.groupChildPosition]} />
              <Image
                style={[styles.iconFeatherHeart1, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/icon-featherheart.png")}
              />
              <Text style={[styles.hello13, styles.helloTypo]}>254</Text>
            </View>
            <View style={[styles.helloParent1, styles.helloParentPosition]}>
              <Text
                style={[styles.hello12, styles.helloTypo2]}
              >{`Food & Beverages`}</Text>
              <View style={[styles.groupChild1, styles.groupChildPosition]} />
              <Text style={[styles.hello13, styles.helloTypo]}>254</Text>
              <Image
                style={[styles.layer2Icon, styles.iconPosition1]}
                resizeMode="cover"
                source={require("../assets/layer-2.png")}
              />
            </View>
            <View style={[styles.helloParent2, styles.helloParentPosition]}>
              <Text style={[styles.hello12, styles.helloTypo2]}>House</Text>
              <View style={[styles.groupChild2, styles.groupChildPosition]} />
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
            <View style={[styles.helloParent3, styles.helloParentPosition]}>
              <Text style={[styles.hello12, styles.helloTypo2]}>Shopping</Text>
              <View style={[styles.groupChild3, styles.groupChildPosition]} />
              <Text style={[styles.hello13, styles.helloTypo]}>254</Text>
              <Image
                style={[styles.shoppingIcon, styles.house1IconPosition]}
                resizeMode="cover"
                source={require("../assets/shopping.png")}
              />
            </View>
            <View style={[styles.helloParent4, styles.helloParentPosition]}>
              <Text style={[styles.hello12, styles.helloTypo2]}>Transport</Text>
              <View style={[styles.groupChild4, styles.groupChildPosition]} />
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
        <View style={[styles.historyParent, styles.parentPosition]}>
          <Text
            style={[styles.history, styles.lanceTypo, styles.historyPosition]}
          >
            Transactions
          </Text>
          <Image
            style={[styles.path23339Icon, styles.groupChild9Layout]}
            resizeMode="cover"
            source={require("../assets/path-23339.png")}
          />
          <View style={[styles.groupParent1, styles.groupParentShadowBox]}>
            <View style={[styles.lanceBogrolGroup, styles.groupPosition]}>
              <Text style={[styles.lanceBogrol1, styles.lanceTypo]}>
                Flight
              </Text>
              <Text style={[styles.moneyTransfer, styles.moneyPosition]}>
                <Text style={styles.yourAverageMonthly}>
                  September 22, 2022
                </Text>
                <Text style={styles.yourAverageMonthly}>12:06 PM</Text>
              </Text>
            </View>
            <Text style={[styles.text1, styles.lanceTypo]}>
              <Text style={styles.kgCo1}>7.2 kg CO</Text>
              <Text style={styles.text2}>2</Text>
            </Text>
            <View style={[styles.groupChild5, styles.groupPosition]} />
            <Image
              style={[styles.iconAwesomePlaneDeparture, styles.iconPosition]}
              resizeMode="cover"
              source={require("../assets/icon-awesomeplanedeparture.png")}
            />
          </View>
          <View style={[styles.groupParent2, styles.groupParentShadowBox]}>
            <View style={[styles.lanceBogrolGroup, styles.groupPosition]}>
              <Text style={[styles.lanceBogrol1, styles.lanceTypo]}>Food</Text>
              <Text style={styles.moneyPosition}>
                <Text style={styles.yourAverageMonthly}>
                  September 22, 2022
                </Text>
                <Text style={styles.yourAverageMonthly}>12:06 PM</Text>
              </Text>
            </View>
            <Text style={[styles.text1, styles.lanceTypo]}>
              <Text style={styles.kgCo1}>10 kg CO</Text>
              <Text style={styles.text2}>2</Text>
            </Text>
            <View style={[styles.groupChild5, styles.groupPosition]} />
            <Image
              style={[styles.iconMapFood, styles.iconPosition]}
              resizeMode="cover"
              source={require("../assets/icon-mapfood.png")}
            />
          </View>
          <View style={[styles.groupParent3, styles.groupParentShadowBox]}>
            <View style={[styles.lanceBogrolGroup, styles.groupPosition]}>
              <Text style={[styles.lanceBogrol1, styles.lanceTypo]}>Car</Text>
              <Text style={styles.moneyPosition}>
                <Text style={styles.yourAverageMonthly}>
                  September 22, 2022
                </Text>
                <Text style={styles.yourAverageMonthly}>12:06 PM</Text>
              </Text>
            </View>
            <Text style={[styles.text1, styles.lanceTypo]}>
              <Text style={styles.kgCo1}>5 kg CO</Text>
              <Text style={styles.text2}>2</Text>
            </Text>
            <View style={[styles.groupChild5, styles.groupPosition]} />
            <Image
              style={[styles.iconAwesomeCar, styles.iconPosition1]}
              resizeMode="cover"
              source={require("../assets/icon-awesomecar.png")}
            />
          </View>
          <View style={[styles.groupParent4, styles.groupParentShadowBox]}>
            <View style={[styles.lanceBogrolGroup, styles.groupPosition]}>
              <Text style={[styles.lanceBogrol1, styles.lanceTypo]}>Shop</Text>
              <Text style={styles.moneyPosition}>
                <Text style={styles.yourAverageMonthly}>
                  September 22, 2022
                </Text>
                <Text style={styles.yourAverageMonthly}>12:06 PM</Text>
              </Text>
            </View>
            <Text style={[styles.text1, styles.lanceTypo]}>
              <Text style={styles.kgCo1}>7.2 kg CO</Text>
              <Text style={styles.text2}>2</Text>
            </Text>
            <View style={[styles.groupChild5, styles.groupPosition]} />
            <Image
              style={[styles.iconAwesomeShoppingCart, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/icon-awesomeshoppingcart.png")}
            />
          </View>
        </View>
        <Image
          style={[styles.groupChild9, styles.groupChild9Layout]}
          resizeMode="cover"
          source={require("../assets/group-31146.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  helloTypo5: {
    textAlign: "left",
    color: GlobalStyles.Color.blue_100,
    fontFamily: GlobalStyles.FontFamily.helvetica,
    fontSize: GlobalStyles.FontSize.size_xl,
    position: "absolute",
  },
  helloLayout: {
    lineHeight: 16,
    textAlign: "left",
  },
  helloTypo3: {
    color: GlobalStyles.Color.gray_700,
    textAlign: "left",
    fontFamily: GlobalStyles.FontFamily.helvetica,
    position: "absolute",
  },
  helloTypo4: {
    fontSize: GlobalStyles.FontSize.size_xs,
    top: 22,
    color: GlobalStyles.Color.gray_700,
  },
  helloTypo2: {
    color: GlobalStyles.Color.gray_800,
    fontSize: GlobalStyles.FontSize.size_3xs,
    textAlign: "left",
    fontFamily: GlobalStyles.FontFamily.helvetica,
    position: "absolute",
  },
  parentPosition: {
    right: 10,
    left: 10,
    position: "absolute",
  },
  helloTypo1: {
    opacity: 0.5,
    fontSize: GlobalStyles.FontSize.size_base,
    top: 1,
    color: GlobalStyles.Color.gray_800,
    textAlign: "left",
    fontFamily: GlobalStyles.FontFamily.helvetica,
    position: "absolute",
  },
  groupPosition1: {
    height: 2,
    borderTopWidth: 1,
    borderColor: "#fff",
    borderStyle: "solid",
    right: 1,
    position: "absolute",
  },
  groupIconPosition: {
    right: 0,
    left: 0,
    position: "absolute",
  },
  helloTypo: {
    color: GlobalStyles.Color.gray_1600,
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
    color: GlobalStyles.Color.indigo_100,
    fontFamily: GlobalStyles.FontFamily.typoGrotesk,
    textAlign: "left",
    top: 0,
  },
  helloParentPosition: {
    height: 44,
    backgroundColor: GlobalStyles.Color.gray_200,
    borderRadius: GlobalStyles.Border.br_3xl,
    left: 25,
    right: 19,
    position: "absolute",
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
  groupChild9Layout: {
    height: 20,
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
  groupPosition: {
    marginTop: -16,
    top: "50%",
    position: "absolute",
  },
  moneyPosition: {
    color: GlobalStyles.Color.gray_900,
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
  hello: {
    left: 24,
    top: 0,
  },
  hello1: {
    top: 3,
    left: 213,
  },
  hello2: {
    left: 0,
  },
  hello3: {
    left: 197,
  },
  helloParent: {
    marginTop: -291.03,
    right: 37,
    left: 34,
    height: 34,
    top: "50%",
    position: "absolute",
  },
  hello4: {
    top: "36.36%",
    left: "2.78%",
  },
  yourAverageMonthly: {
    margin: GlobalStyles.Margin.margin_8xs,
  },
  hello5: {
    marginLeft: -93.5,
    lineHeight: 20,
    textAlign: "center",
    fontFamily: GlobalStyles.FontFamily.typoGrotesk,
    color: GlobalStyles.Color.indigo_100,
    fontWeight: "700",
    fontSize: GlobalStyles.FontSize.size_2xl,
    left: "50%",
    top: 0,
    position: "absolute",
  },
  hello6: {
    fontWeight: "700",
    left: 0,
    top: 0,
  },
  hello7: {
    left: 115,
    opacity: 0.56,
    fontSize: GlobalStyles.FontSize.size_base,
    top: 1,
  },
  hello8: {
    left: 218,
  },
  hello9: {
    left: 310,
  },
  helloGroup: {
    height: "43.24%",
    width: "99.69%",
    top: "34.9%",
    right: "0%",
    bottom: "21.85%",
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
  groupContainer: {
    marginTop: -225.95,
    height: 37,
    left: 10,
    top: "50%",
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
    top: 0,
  },
  hello10: {
    top: "43.12%",
    left: "37.8%",
    fontSize: 65,
    verticalAlign: "super",
    fontWeight: "700",
  },
  kgCo: {
    fontSize: GlobalStyles.FontSize.size_2xl,
  },
  text: {
    fontSize: 10,
    verticalAlign: "sub",
  },
  hello11: {
    top: "55.08%",
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
    top: 5,
    height: 346,
  },
  lanceBogrol: {
    fontSize: GlobalStyles.FontSize.size_xl,
    left: 30,
  },
  hello12: {
    top: "0%",
    left: "0%",
  },
  rectangleView: {
    backgroundColor: GlobalStyles.Color.orange_200,
    width: 213,
  },
  iconFeatherHeart1: {
    marginTop: 2.45,
    left: 13,
  },
  hello13: {
    top: "57.07%",
    left: "90.81%",
    fontSize: GlobalStyles.FontSize.size_3xs,
    color: GlobalStyles.Color.gray_1600,
  },
  helloContainer: {
    top: 20,
  },
  groupChild1: {
    backgroundColor: GlobalStyles.Color.orange_100,
    width: 191,
  },
  layer2Icon: {
    marginTop: 1.3,
    width: 12,
    left: 13,
  },
  helloParent1: {
    marginTop: -86.94,
    top: "50%",
  },
  groupChild2: {
    backgroundColor: GlobalStyles.Color.violet_100,
    width: 125,
  },
  house1Icon1: {
    marginTop: 2.48,
    left: 12,
  },
  helloParent2: {
    marginTop: -30.04,
    top: "50%",
  },
  groupChild3: {
    backgroundColor: GlobalStyles.Color.violet_200,
    width: 72,
  },
  shoppingIcon: {
    marginTop: 2.65,
    width: 10,
    left: 10,
  },
  helloParent3: {
    marginTop: 26.86,
    top: "50%",
  },
  groupChild4: {
    backgroundColor: GlobalStyles.Color.green_100,
    width: 47,
  },
  transportationIcon1: {
    marginTop: 2.95,
    left: 11,
  },
  helloParent4: {
    bottom: 35,
  },
  groupView: {
    top: 32,
    shadowOpacity: 1,
    elevation: 20,
    shadowRadius: 20,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(1, 1, 253, 0.05)",
    borderRadius: GlobalStyles.Border.br_4xl,
    bottom: 0,
    right: 0,
    left: 0,
    position: "absolute",
    backgroundColor: GlobalStyles.Color.white,
  },
  lanceBogrolParent: {
    marginTop: -122.36,
    height: 359,
    left: 10,
    top: "50%",
  },
  history: {
    fontSize: GlobalStyles.FontSize.size_2xl,
  },
  path23339Icon: {
    width: 19,
    top: 1,
    left: 0,
  },
  lanceBogrol1: {
    color: GlobalStyles.Color.indigo_100,
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
    marginLeft: -98.52,
    width: 105,
    height: 36,
    left: "50%",
  },
  kgCo1: {
    fontSize: GlobalStyles.FontSize.size_base,
  },
  text2: {
    fontSize: GlobalStyles.FontSize.size_5xs,
    verticalAlign: "sub",
  },
  text1: {
    marginTop: -6,
    right: 24,
    textAlign: "right",
    letterSpacing: 1,
    color: GlobalStyles.Color.blue_100,
    fontFamily: GlobalStyles.FontFamily.helvetica,
    top: "50%",
  },
  groupChild5: {
    left: 14,
    borderRadius: GlobalStyles.Border.br_3xs,
    backgroundColor: GlobalStyles.Color.gray_100,
    width: 34,
    height: 34,
  },
  iconAwesomePlaneDeparture: {
    marginTop: -4.89,
    height: 14,
  },
  groupParent1: {
    top: 41,
  },
  iconMapFood: {
    marginTop: -6.81,
    height: 16,
  },
  groupParent2: {
    marginTop: 26.5,
    top: "50%",
  },
  iconAwesomeCar: {
    marginTop: -4.92,
    left: 23,
    width: 16,
  },
  groupParent3: {
    marginTop: -49.5,
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
    height: 333,
    bottom: 0,
    left: 10,
  },
  groupChild9: {
    marginTop: -125.36,
    width: 20,
    left: 10,
    top: "50%",
  },
  groupParent: {
    width: 346,
    height: 1253,
  },
  carbonSpending: {
    flex: 1,
    width: "100%",
    paddingLeft: GlobalStyles.Padding.padding_10xs,
    paddingTop: GlobalStyles.Padding.padding_2xl,
    paddingRight: GlobalStyles.Padding.padding_10xs,
    alignItems: "center",
    backgroundColor: GlobalStyles.Color.white,
  },
});

export default CarbonSpending;
