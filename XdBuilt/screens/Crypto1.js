import * as React from "react";
import { StyleSheet, View, Text, ScrollView, Image } from "react-native";
import GlobalStyles from "../GlobalStyles";

const Crypto1 = () => {
  return (
    <View style={styles.crypto}>
      <View style={styles.groupParent}>
        <View style={styles.groupWrapper}>
          <View style={styles.rectangleParent}>
            <View style={[styles.groupChild, styles.groupChildPosition]} />
            <Text style={[styles.hello, styles.helloTypo]}>+4.00%</Text>
            <Text style={[styles.hello1, styles.helloColor, styles.helloTypo]}>
              £309.41
            </Text>
            <Text style={styles.hello2}>
              <Text style={styles.binanceCoin}>
                <Text style={[styles.binanceCoin1, styles.helloColor]}>
                  Binance Coin
                </Text>
              </Text>
              <Text style={styles.binanceCoin}>
                <Text style={styles.bnb1Color}>BNB</Text>
              </Text>
            </Text>
            <View style={[styles.groupItem, styles.groupItemPosition]} />
            <Text style={[styles.hello3, styles.helloPosition]}>
              <Text style={styles.binanceCoin}>
                <Text style={styles.low1Typo}>Low</Text>
              </Text>
              <Text style={styles.binanceCoin}>
                <Text style={styles.bnb1Color}>£30</Text>1.52
              </Text>
            </Text>
            <Text style={[styles.hello4, styles.helloPosition]}>
              <Text style={styles.binanceCoin}>
                <Text style={styles.low1Typo}>Vol</Text>
              </Text>
              <Text style={styles.binanceCoin}>
                <Text style={styles.bnb1Color}>£301M</Text>
              </Text>
              <Text style={styles.bnb1Color} />
            </Text>
            <Text style={[styles.hello5, styles.helloPosition]}>
              <Text style={styles.binanceCoin}>
                <Text style={styles.low1Typo}>High</Text>
              </Text>
              <Text style={styles.binanceCoin}>
                <Text style={styles.bnb1Color}>£331.</Text>73
              </Text>
            </Text>
            <View style={styles.scrollGroup16Parent}>
              <ScrollView
                style={[styles.scrollGroup16, styles.scrollGroup16Position]}
                contentContainerStyle={styles.scrollGroup16Content}
              >
                <Text style={[styles.hello6, styles.bnb1Color]}>Mar</Text>
                <Text
                  style={[
                    styles.hello6,
                    styles.mt_12,
                    styles.ml129,
                    styles.bnb1Color,
                  ]}
                >
                  Jun
                </Text>
                <Text
                  style={[
                    styles.hello6,
                    styles.mt_12,
                    styles.ml43,
                    styles.bnb1Color,
                  ]}
                >
                  Apr
                </Text>
                <Text style={[styles.hello9, styles.mt_12, styles.ml172]}>
                  Jul
                </Text>
                <Text
                  style={[
                    styles.hello6,
                    styles.mt_12,
                    styles.ml84,
                    styles.bnb1Color,
                  ]}
                >
                  May
                </Text>
                <Text
                  style={[
                    styles.hello6,
                    styles.mt_12,
                    styles.ml213,
                    styles.bnb1Color,
                  ]}
                >
                  Aug
                </Text>
                <Text
                  style={[
                    styles.hello6,
                    styles.mt_12,
                    styles.ml256,
                    styles.bnb1Color,
                  ]}
                >
                  Sept
                </Text>
                <Text
                  style={[
                    styles.hello6,
                    styles.mt_12,
                    styles.ml303,
                    styles.bnb1Color,
                  ]}
                >
                  Oct
                </Text>
                <Text
                  style={[
                    styles.hello6,
                    styles.mt_12,
                    styles.ml344,
                    styles.bnb1Color,
                  ]}
                >
                  Nov
                </Text>
                <Text
                  style={[
                    styles.hello6,
                    styles.mt_12,
                    styles.ml391,
                    styles.bnb1Color,
                  ]}
                >
                  Dec
                </Text>
                <Text
                  style={[
                    styles.hello6,
                    styles.mt_12,
                    styles.ml434,
                    styles.bnb1Color,
                  ]}
                >
                  Jan
                </Text>
                <Text
                  style={[
                    styles.hello6,
                    styles.mt_12,
                    styles.ml479,
                    styles.bnb1Color,
                  ]}
                >
                  Feb
                </Text>
              </ScrollView>
              <View style={styles.union23Parent}>
                <Image
                  style={styles.union23Icon}
                  resizeMode="cover"
                  source={require("../assets/union-23.png")}
                />
                <Text style={[styles.hello18, styles.low1Typo]}>£ 20.00</Text>
              </View>
            </View>
            <View style={[styles.union20Wrapper, styles.groupItemPosition]}>
              <Image
                style={[styles.union20Icon, styles.groupInnerLayout]}
                resizeMode="cover"
                source={require("../assets/union-20.png")}
              />
            </View>
            <Image
              style={[styles.groupInner, styles.groupInnerLayout]}
              resizeMode="cover"
              source={require("../assets/group-32070.png")}
            />
          </View>
        </View>
        <View style={[styles.historyParent, styles.scrollGroup16Position]}>
          <Text style={[styles.history, styles.historyPosition]}>Account</Text>
          <Text style={[styles.history1, styles.historyPosition]}>
            Analysis
          </Text>
          <Text style={[styles.history2, styles.historyPosition]}>Carbon</Text>
          <Text style={styles.history3}>Trade</Text>
          <Text style={[styles.history4, styles.historyPosition]}>
            Settings
          </Text>
        </View>
        <Text
          style={[styles.hello19, styles.hello19Position, styles.helloColor]}
        >
          Trade
        </Text>
        <View style={[styles.groupContainer, styles.hello19Position]}>
          <View style={styles.rectangleParent}>
            <View style={[styles.rectangleView, styles.groupChildPosition]} />
            <View style={styles.maskGroup236} />
          </View>
          <Text style={styles.hello20}>add to Portfolio</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mt_12: {
    marginTop: GlobalStyles.Margin.margin_11xs,
  },
  ml129: {
    marginLeft: GlobalStyles.Margin.margin_4xl,
  },
  ml43: {
    marginLeft: GlobalStyles.Margin.margin_xl,
  },
  ml172: {
    marginLeft: GlobalStyles.Margin.margin_5xl,
  },
  ml84: {
    marginLeft: GlobalStyles.Margin.margin_3xl,
  },
  ml213: {
    marginLeft: GlobalStyles.Margin.margin_6xl,
  },
  ml256: {
    marginLeft: GlobalStyles.Margin.margin_7xl,
  },
  ml303: {
    marginLeft: GlobalStyles.Margin.margin_10xl,
  },
  ml344: {
    marginLeft: GlobalStyles.Margin.margin_11xl,
  },
  ml391: {
    marginLeft: GlobalStyles.Margin.margin_12xl,
  },
  ml434: {
    marginLeft: GlobalStyles.Margin.margin_13xl,
  },
  ml479: {
    marginLeft: GlobalStyles.Margin.margin_14xl,
  },
  scrollGroup16Content: {
    flexDirection: "column",
    paddingTop: 2,
  },
  groupChildPosition: {
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  helloTypo: {
    textAlign: "right",
    textTransform: "uppercase",
    fontFamily: GlobalStyles.FontFamily.helvetica,
    position: "absolute",
  },
  helloColor: {
    color: GlobalStyles.Color.indigo_100,
    fontWeight: "700",
  },
  groupItemPosition: {
    left: 49,
    position: "absolute",
  },
  helloPosition: {
    textAlign: "center",
    marginTop: -77.83,
    lineHeight: 19,
    fontSize: GlobalStyles.FontSize.size_lg,
    top: "50%",
    position: "absolute",
  },
  scrollGroup16Position: {
    height: 12,
    left: 0,
    position: "absolute",
  },
  bnb1Color: {
    color: GlobalStyles.Color.gray_700,
    fontFamily: GlobalStyles.FontFamily.helvetica,
  },
  low1Typo: {
    color: GlobalStyles.Color.white,
    fontWeight: "700",
    fontFamily: GlobalStyles.FontFamily.helvetica,
  },
  groupInnerLayout: {
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  historyPosition: {
    opacity: 0.3,
    letterSpacing: 1,
    marginTop: -6,
    color: GlobalStyles.Color.gray_700,
    textAlign: "left",
    fontSize: GlobalStyles.FontSize.size_xs,
    fontFamily: GlobalStyles.FontFamily.helvetica,
    top: "50%",
    position: "absolute",
  },
  hello19Position: {
    left: 55,
    position: "absolute",
  },
  groupChild: {
    width: "87.29%",
    right: "4.48%",
    left: "8.23%",
    borderRadius: GlobalStyles.Border.br_sm,
    shadowColor: "rgba(1, 1, 253, 0.05)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 20,
    elevation: 20,
    shadowOpacity: 1,
    backgroundColor: GlobalStyles.Color.white,
  },
  hello: {
    top: "13.42%",
    left: "82.04%",
    fontSize: GlobalStyles.FontSize.size_3xs,
    color: GlobalStyles.Color.turquoise,
  },
  hello1: {
    top: "9.04%",
    left: "79.51%",
    fontSize: GlobalStyles.FontSize.size_xs,
  },
  binanceCoin1: {
    fontFamily: GlobalStyles.FontFamily.helvetica,
    color: GlobalStyles.Color.indigo_100,
  },
  binanceCoin: {
    margin: GlobalStyles.Margin.margin_8xs,
  },
  hello2: {
    marginLeft: -88.92,
    top: 27,
    textAlign: "left",
    lineHeight: 19,
    fontSize: GlobalStyles.FontSize.size_lg,
    left: "50%",
    position: "absolute",
  },
  groupItem: {
    marginTop: -93.33,
    right: 49,
    borderStyle: "solid",
    borderColor: "#272727",
    borderTopWidth: 1,
    height: 2,
    top: "50%",
  },
  hello3: {
    left: 50,
  },
  hello4: {
    right: 52,
  },
  hello5: {
    marginLeft: -27.42,
    left: "50%",
    textAlign: "center",
    marginTop: -77.83,
  },
  hello6: {
    textAlign: "left",
    fontSize: GlobalStyles.FontSize.size_xs,
  },
  hello9: {
    color: GlobalStyles.Color.blue_100,
    textAlign: "left",
    fontWeight: "700",
    fontSize: GlobalStyles.FontSize.size_xs,
    fontFamily: GlobalStyles.FontFamily.helvetica,
  },
  scrollGroup16: {
    top: 141,
    width: 291,
    maxWidth: 291,
  },
  union23Icon: {
    width: 76,
    height: 48,
    left: 0,
    top: 0,
    position: "absolute",
  },
  hello18: {
    top: 9,
    left: 14,
    fontSize: GlobalStyles.FontSize.size_4xs,
    textAlign: "left",
    position: "absolute",
  },
  union23Parent: {
    left: 137,
    width: 58,
    height: 30,
    top: 0,
    position: "absolute",
  },
  scrollGroup16Parent: {
    height: "46.18%",
    width: "77.14%",
    top: "45.24%",
    right: "8.19%",
    bottom: "8.58%",
    left: "14.67%",
    position: "absolute",
  },
  union20Icon: {
    top: 4,
    right: 4,
    bottom: 4,
    left: 5,
    maxHeight: "100%",
  },
  union20Wrapper: {
    top: 25,
    borderRadius: GlobalStyles.Border.br_5xs,
    backgroundColor: GlobalStyles.Color.gray_100,
    width: 37,
    height: 36,
  },
  groupInner: {
    bottom: 38,
    height: 152,
    left: 0,
    right: 0,
  },
  rectangleParent: {
    left: 0,
    bottom: 0,
    top: 0,
    right: 0,
    position: "absolute",
  },
  groupWrapper: {
    marginTop: -244,
    left: 22,
    height: 331,
    right: 0,
    top: "50%",
    position: "absolute",
  },
  history: {
    left: "0%",
  },
  history1: {
    left: "22.95%",
  },
  history2: {
    left: "46.17%",
  },
  history3: {
    left: "67.76%",
    letterSpacing: 1,
    marginTop: -6,
    color: GlobalStyles.Color.gray_700,
    textAlign: "left",
    fontSize: GlobalStyles.FontSize.size_xs,
    fontFamily: GlobalStyles.FontFamily.helvetica,
    top: "50%",
    position: "absolute",
  },
  history4: {
    left: "86.61%",
  },
  historyParent: {
    right: 33,
    top: 0,
  },
  hello19: {
    top: 48,
    fontSize: GlobalStyles.FontSize.size_8xl,
    fontFamily: GlobalStyles.FontFamily.typoGrotesk,
    textAlign: "left",
  },
  rectangleView: {
    right: "0%",
    borderRadius: GlobalStyles.Border.br_lg,
    backgroundColor: GlobalStyles.Color.gray_500,
    left: "0%",
    width: "100%",
  },
  maskGroup236: {
    bottom: 13,
    left: 0,
    top: 0,
    right: 0,
    position: "absolute",
  },
  hello20: {
    top: "40%",
    left: "27.61%",
    color: GlobalStyles.Color.black,
    textAlign: "left",
    fontSize: GlobalStyles.FontSize.size_lg,
    fontFamily: GlobalStyles.FontFamily.helvetica,
    textTransform: "uppercase",
    position: "absolute",
  },
  groupContainer: {
    right: 18,
    height: 60,
    bottom: 0,
  },
  groupParent: {
    width: 399,
    height: 702,
  },
  crypto: {
    flex: 1,
    paddingTop: GlobalStyles.Padding.padding_xs,
    paddingRight: 6,
    width: "100%",
    backgroundColor: GlobalStyles.Color.white,
  },
});

export default Crypto1;
