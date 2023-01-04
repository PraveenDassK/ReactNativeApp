import * as React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  Pressable,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import GlobalStyles from "../GlobalStyles";

const Trade = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.trade}>
      <View style={styles.groupParent}>
        <View
          style={[
            styles.maskGroup235Parent,
            styles.maskGroup235ParentShadowBox,
          ]}
        >
          <View style={styles.maskGroup235}>
            <View style={styles.maskGroup235Child} />
          </View>
          <Text style={[styles.hello, styles.helloTypo23]}>£12,534.00</Text>
          <Text style={[styles.hello1, styles.helloTypo23]}>Balance</Text>
          <Image
            style={styles.groupChild}
            resizeMode="cover"
            source={require("../assets/group-30364.png")}
          />
          <View style={styles.helloParent}>
            <Text style={[styles.hello2, styles.helloTypo22]}>+0.56%</Text>
            <Text style={[styles.hello3, styles.helloTypo22]}>10%</Text>
            <Image
              style={[styles.path22725Icon, styles.path22725IconPosition]}
              resizeMode="cover"
              source={require("../assets/path-22725.png")}
            />
          </View>
        </View>
        <Text style={[styles.hello4, styles.helloTypo21]}>Trade</Text>
        <View style={[styles.groupContainer, styles.groupContainerPosition]}>
          <View style={[styles.helloGroup, styles.helloLayout1]}>
            <Text style={[styles.hello5, styles.helloTypo21]}>Assets</Text>
            <Image
              style={[
                styles.coinsSolidIcon,
                styles.iconPosition2,
                styles.iconLayout,
              ]}
              resizeMode="cover"
              source={require("../assets/coinssolid.png")}
            />
          </View>
          <View style={[styles.helloContainer, styles.helloLayout]}>
            <Text style={[styles.hello6, styles.helloTypo21]}>
              Today's Top Mover
            </Text>
            <Image
              style={[styles.iconAwesomeChartLine, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/icon-awesomechartline.png")}
            />
          </View>
          <Image
            style={styles.groupItem}
            resizeMode="cover"
            source={require("../assets/group-32271.png")}
          />
          <View style={styles.groupView}>
            <View style={[styles.helloParent1, styles.helloParentLayout]}>
              <Text style={[styles.hello7, styles.helloTypo21]}>Popular</Text>
              <Image
                style={[
                  styles.iconFeatherStar,
                  styles.helloLayout,
                  styles.iconPosition2,
                ]}
                resizeMode="cover"
                source={require("../assets/icon-featherstar.png")}
              />
            </View>
            <ScrollView
              style={[styles.scrollGroup19, styles.groupContainerPosition]}
              contentContainerStyle={styles.scrollGroup19Content}
            >
              <View style={styles.component37222Parent}>
                <View style={[styles.component37222, styles.componentPosition]}>
                  <View
                    style={[
                      styles.component37222Child,
                      styles.groupContainerPosition,
                      styles.maskGroup235ParentShadowBox,
                    ]}
                  />
                  <Text style={[styles.hello8, styles.helloPosition4]}>
                    <Text style={styles.tether}>
                      <Text style={styles.tether1Typo}>Tether</Text>
                    </Text>
                    <Text style={styles.tether}>
                      <Text style={styles.text1}>£ 3,589</Text>
                    </Text>
                  </Text>
                  <View style={styles.path22581Wrapper}>
                    <Image
                      style={[styles.path22581Icon, styles.helloLayout1]}
                      resizeMode="cover"
                      source={require("../assets/path-22581.png")}
                    />
                  </View>
                  <View style={[styles.helloParent2, styles.helloParentLayout]}>
                    <Text style={styles.hello9}>+0.56%</Text>
                    <Image
                      style={[
                        styles.path22725Icon1,
                        styles.path22725IconPosition,
                      ]}
                      resizeMode="cover"
                      source={require("../assets/path-227251.png")}
                    />
                  </View>
                </View>
                <Pressable
                  style={[styles.component37223, styles.componentPosition]}
                  onPress={() => navigation.navigate("Crypto")}
                >
                  <View
                    style={[
                      styles.component37222Child,
                      styles.groupContainerPosition,
                      styles.maskGroup235ParentShadowBox,
                    ]}
                  />
                  <View style={styles.path22581Wrapper}>
                    <Image
                      style={[styles.path23807Icon, styles.iconPosition1]}
                      resizeMode="cover"
                      source={require("../assets/path-23807.png")}
                    />
                    <Image
                      style={[styles.path23808Icon, styles.iconPosition]}
                      resizeMode="cover"
                      source={require("../assets/path-23808.png")}
                    />
                    <Image
                      style={[styles.path23809Icon, styles.iconPosition1]}
                      resizeMode="cover"
                      source={require("../assets/path-23809.png")}
                    />
                    <Image
                      style={[styles.path23810Icon, styles.iconPosition]}
                      resizeMode="cover"
                      source={require("../assets/path-23810.png")}
                    />
                  </View>
                  <View style={[styles.helloParent2, styles.helloParentLayout]}>
                    <Text style={styles.hello10}>-0.56%</Text>
                    <Image
                      style={[
                        styles.path22725Icon1,
                        styles.path22725IconPosition,
                      ]}
                      resizeMode="cover"
                      source={require("../assets/path-227252.png")}
                    />
                  </View>
                  <Text style={styles.helloPosition4}>
                    <Text style={styles.tether}>
                      <Text style={[styles.binance1, styles.tether1Typo]}>
                        Binance
                      </Text>
                    </Text>
                    <Text style={styles.tether}>
                      <Text style={styles.text1}>£ 3,589</Text>
                    </Text>
                  </Text>
                </Pressable>
                <View style={[styles.component37224, styles.componentPosition]}>
                  <View
                    style={[
                      styles.component37222Child,
                      styles.groupContainerPosition,
                      styles.maskGroup235ParentShadowBox,
                    ]}
                  />
                  <View style={styles.path22581Wrapper}>
                    <Image
                      style={styles.path23811Icon}
                      resizeMode="cover"
                      source={require("../assets/path-23811.png")}
                    />
                    <Image
                      style={[styles.path23812Icon, styles.helloParentLayout]}
                      resizeMode="cover"
                      source={require("../assets/path-23812.png")}
                    />
                  </View>
                  <View style={[styles.helloParent2, styles.helloParentLayout]}>
                    <Text style={styles.hello9}>+0.56%</Text>
                    <Image
                      style={[
                        styles.path22725Icon1,
                        styles.path22725IconPosition,
                      ]}
                      resizeMode="cover"
                      source={require("../assets/path-227251.png")}
                    />
                  </View>
                  <Text style={styles.helloPosition4}>
                    <Text style={styles.tether}>
                      <Text style={[styles.binance1, styles.tether1Typo]}>
                        USD Coin
                      </Text>
                    </Text>
                    <Text style={styles.tether}>
                      <Text style={styles.text1}>£ 3,589</Text>
                    </Text>
                  </Text>
                </View>
              </View>
            </ScrollView>
          </View>
          <View style={[styles.rectangleParent, styles.rectangleLayout]}>
            <View style={[styles.groupInner, styles.groupShadowBox]} />
            <Text style={[styles.hello14, styles.helloTypo20]}>Litecoin</Text>
            <Text style={[styles.hello15, styles.helloTypo20]}>Ethereum</Text>
            <Text style={[styles.hello16, styles.helloTypo20]}>Chainlink</Text>
            <Text style={[styles.hello17, styles.helloTypo20]}>Bitcoin</Text>
            <Text style={[styles.helloTypo18, styles.helloPosition3]}>
              +4.00%
            </Text>
            <Text style={[styles.helloPosition2, styles.helloTypo17]}>
              -4.00%
            </Text>
            <Text style={[styles.helloTypo16, styles.helloPosition3]}>
              +4.00%
            </Text>
            <Text style={[styles.helloTypo15, styles.helloPosition2]}>
              -4.00%
            </Text>
            <Text style={[styles.helloPosition1, styles.helloTypo18]}>
              £761
            </Text>
            <Text style={[styles.hello23, styles.helloTypo19]}>0.5BTC</Text>
            <Text style={[styles.hello24, styles.helloTypo19]}>0.75ETH</Text>
            <Text style={[styles.hello25, styles.helloTypo19]}>9.45 LTC</Text>
            <Text style={[styles.hello26, styles.helloTypo19]}>2.76 Link</Text>
            <Text style={[styles.helloPosition1, styles.helloTypo17]}>
              £761
            </Text>
            <Text style={[styles.helloPosition1, styles.helloTypo16]}>
              £761
            </Text>
            <Text style={[styles.helloPosition1, styles.helloTypo15]}>
              £761
            </Text>
            <Text style={[styles.hello30, styles.helloTypo14]}>£16,405.51</Text>
            <Text style={[styles.hello31, styles.helloTypo14]}>£16,405.51</Text>
            <Text style={[styles.hello32, styles.helloTypo14]}>£16,405.51</Text>
            <Text style={[styles.hello33, styles.helloTypo14]}>£16,405.51</Text>
            <View
              style={[
                styles.rectangleView,
                styles.groupChildPosition3,
                styles.groupChildPosition4,
              ]}
            />
            <View style={[styles.groupChild1, styles.groupChildPosition2]} />
            <View style={[styles.groupChild2, styles.groupChildPosition1]} />
            <View style={[styles.groupChild3, styles.groupChildPosition]} />
            <Image
              style={styles.groupIcon}
              resizeMode="cover"
              source={require("../assets/group-30653.png")}
            />
          </View>
          <View style={[styles.rectangleGroup, styles.rectangleLayout]}>
            <View style={[styles.groupInner, styles.groupShadowBox]} />
            <Text style={[styles.hello14, styles.helloTypo20]}>Litecoin</Text>
            <Text style={[styles.hello15, styles.helloTypo20]}>Ethereum</Text>
            <Text style={[styles.hello16, styles.helloTypo20]}>Chainlink</Text>
            <Text style={[styles.hello17, styles.helloTypo20]}>Bitcoin</Text>
            <Text style={styles.helloPosition3}>+4.00%</Text>
            <Text style={styles.helloTypo17}>-4.00%</Text>
            <Text style={styles.helloPosition3}>+4.00%</Text>
            <Text style={styles.helloPosition2}>-4.00%</Text>
            <Text style={styles.helloTypo18}>£761</Text>
            <Text style={[styles.hello23, styles.helloTypo19]}>0.5BTC</Text>
            <Text style={[styles.hello24, styles.helloTypo19]}>0.75ETH</Text>
            <Text style={[styles.hello25, styles.helloTypo19]}>9.45 LTC</Text>
            <Text style={[styles.hello26, styles.helloTypo19]}>2.76 Link</Text>
            <Text style={styles.helloTypo17}>£761</Text>
            <Text style={styles.helloTypo16}>£761</Text>
            <Text style={styles.helloTypo15}>£761</Text>
            <Text style={[styles.hello30, styles.helloTypo14]}>£16,405.51</Text>
            <Text style={[styles.hello31, styles.helloTypo14]}>£16,405.51</Text>
            <Text style={[styles.hello32, styles.helloTypo14]}>£16,405.51</Text>
            <Text style={[styles.hello33, styles.helloTypo14]}>£16,405.51</Text>
            <View
              style={[
                styles.rectangleView,
                styles.groupChildPosition3,
                styles.groupChildPosition4,
              ]}
            />
            <View style={[styles.groupChild1, styles.groupChildPosition2]} />
            <View style={[styles.groupChild2, styles.groupChildPosition1]} />
            <View style={[styles.groupChild3, styles.groupChildPosition]} />
            <Image
              style={styles.groupIcon}
              resizeMode="cover"
              source={require("../assets/group-306531.png")}
            />
          </View>
          <View
            style={[styles.rectangleContainer, styles.groupContainerPosition]}
          >
            <View style={[styles.groupInner, styles.groupShadowBox]} />
            <Text style={[styles.hello54, styles.helloTypo20]}>Litecoin</Text>
            <Text style={[styles.hello55, styles.helloTypo20]}>Ethereum</Text>
            <Text style={[styles.hello56, styles.helloTypo20]}>Chainlink</Text>
            <Text style={[styles.hello57, styles.helloTypo20]}>Bitcoin</Text>
            <Text style={[styles.helloTypo13, styles.helloPosition3]}>
              +4.00%
            </Text>
            <Text style={[styles.helloTypo12, styles.helloPosition2]}>
              -4.00%
            </Text>
            <Text style={[styles.helloTypo11, styles.helloPosition3]}>
              +4.00%
            </Text>
            <Text style={[styles.helloTypo10, styles.helloPosition2]}>
              -4.00%
            </Text>
            <Text style={[styles.helloTypo13, styles.helloPosition1]}>
              £761
            </Text>
            <Text style={[styles.hello63, styles.helloTypo19]}>0.5BTC</Text>
            <Text style={[styles.hello64, styles.helloTypo19]}>0.75ETH</Text>
            <Text style={[styles.hello65, styles.helloTypo19]}>9.45 LTC</Text>
            <Text style={[styles.hello66, styles.helloTypo19]}>2.76 Link</Text>
            <Text style={[styles.helloTypo12, styles.helloPosition1]}>
              £761
            </Text>
            <Text style={[styles.helloTypo11, styles.helloPosition1]}>
              £761
            </Text>
            <Text style={[styles.helloTypo10, styles.helloPosition1]}>
              £761
            </Text>
            <Text style={[styles.hello70, styles.helloTypo14]}>£16,405.51</Text>
            <Text style={[styles.hello71, styles.helloTypo14]}>£16,405.51</Text>
            <Text style={[styles.hello72, styles.helloTypo14]}>£16,405.51</Text>
            <Text style={[styles.hello73, styles.helloTypo14]}>£16,405.51</Text>
            <View
              style={[
                styles.groupChild11,
                styles.groupChildPosition3,
                styles.groupChildPosition4,
              ]}
            />
            <View style={[styles.groupChild12, styles.groupChildPosition2]} />
            <View style={[styles.groupChild13, styles.groupChildPosition1]} />
            <View style={[styles.groupChild14, styles.groupChildPosition]} />
            <Image
              style={[styles.groupChild15, styles.groupChildLayout1]}
              resizeMode="cover"
              source={require("../assets/group-30653.png")}
            />
            <Text style={[styles.hello74, styles.helloTypo9]}>
              Edit Watchlist
            </Text>
            <Text style={[styles.hello75, styles.helloTypo9]}>Add Crypto</Text>
            <View style={[styles.lineView, styles.lineViewLayout]} />
          </View>
          <View style={[styles.helloParent5, styles.helloLayout]}>
            <Text style={[styles.hello6, styles.helloTypo21]}>
              My Watchlist
            </Text>
            <Image
              style={[styles.iconFeatherEye, styles.historyParentLayout]}
              resizeMode="cover"
              source={require("../assets/icon-feathereye.png")}
            />
          </View>
          <View style={styles.groupParent1}>
            <View style={[styles.helloParent6, styles.helloLayout1]}>
              <Text style={[styles.hello5, styles.helloTypo21]}>
                My Investments
              </Text>
              <Image
                style={[
                  styles.coinsSolidIcon,
                  styles.iconPosition2,
                  styles.iconLayout,
                ]}
                resizeMode="cover"
                source={require("../assets/coinssolid.png")}
              />
            </View>
            <View
              style={[styles.rectangleParent1, styles.rectangleParentLayout]}
            >
              <View style={[styles.groupChild16, styles.groupShadowBox]} />
              <Text style={[styles.hello78, styles.helloTypo8]}>
                <Text style={styles.profitLoss}>{`Profit & Loss`}</Text>
                <Text style={styles.text1} />
              </Text>
              <Text style={[styles.hello79, styles.helloTypo8]}>
                <Text style={styles.profitLoss}>Today</Text>
                <Text style={styles.text1} />
              </Text>
              <Text style={styles.hello80}>-£31.73</Text>
              <Image
                style={[styles.groupChild17, styles.groupChildLayout]}
                resizeMode="cover"
                source={require("../assets/group-30586.png")}
              />
            </View>
            <View
              style={[styles.rectangleParent2, styles.rectangleParentLayout]}
            >
              <View style={[styles.groupInner, styles.groupShadowBox]} />
              <Text style={[styles.hello78, styles.helloTypo8]}>
                <Text style={styles.profitLoss}>Performance</Text>
                <Text style={styles.text1} />
              </Text>
              <Text style={[styles.hello79, styles.helloTypo8]}>
                <Text style={styles.profitLoss}>Today</Text>
                <Text style={styles.text1} />
              </Text>
              <Text style={styles.hello80}>-3.12%</Text>
              <Image
                style={[styles.groupChild19, styles.groupChildLayout]}
                resizeMode="cover"
                source={require("../assets/group-30586.png")}
              />
            </View>
            <View style={styles.rectangleParent3}>
              <View style={[styles.groupInner, styles.groupShadowBox]} />
              <Text style={[styles.hello84, styles.helloTypo20]}>Litecoin</Text>
              <Text style={[styles.hello85, styles.helloTypo20]}>Litecoin</Text>
              <Text style={[styles.hello86, styles.helloTypo20]}>Ethereum</Text>
              <Text style={[styles.hello87, styles.helloTypo20]}>Ethereum</Text>
              <Text style={[styles.hello88, styles.helloTypo20]}>
                Chainlink
              </Text>
              <Text style={[styles.hello89, styles.helloTypo20]}>
                Chainlink
              </Text>
              <Text style={[styles.hello90, styles.helloTypo20]}>Bitcoin</Text>
              <Text style={[styles.hello91, styles.helloTypo20]}>Bitcoin</Text>
              <Text style={[styles.helloTypo7, styles.helloPosition3]}>
                +4.00%
              </Text>
              <Text style={[styles.helloTypo6, styles.helloPosition3]}>
                +4.00%
              </Text>
              <Text style={[styles.helloTypo5, styles.helloPosition2]}>
                -4.00%
              </Text>
              <Text style={[styles.helloTypo4, styles.helloPosition2]}>
                -4.00%
              </Text>
              <Text style={[styles.helloTypo3, styles.helloPosition3]}>
                +4.00%
              </Text>
              <Text style={[styles.helloTypo2, styles.helloPosition3]}>
                +4.00%
              </Text>
              <Text style={[styles.helloTypo1, styles.helloPosition2]}>
                -4.00%
              </Text>
              <Text style={[styles.helloTypo, styles.helloPosition2]}>
                -4.00%
              </Text>
              <Text style={[styles.helloTypo7, styles.helloPosition1]}>
                £761
              </Text>
              <Text style={[styles.helloTypo6, styles.helloPosition1]}>
                £761
              </Text>
              <Text style={[styles.hello102, styles.helloTypo19]}>0.5BTC</Text>
              <Text style={[styles.hello103, styles.helloTypo19]}>0.5BTC</Text>
              <Text style={[styles.hello104, styles.helloTypo19]}>0.75ETH</Text>
              <Text style={[styles.hello105, styles.helloTypo19]}>0.75ETH</Text>
              <Text style={[styles.hello106, styles.helloTypo19]}>
                9.45 LTC
              </Text>
              <Text style={[styles.hello107, styles.helloTypo19]}>
                9.45 LTC
              </Text>
              <Text style={[styles.hello108, styles.helloTypo19]}>
                2.76 Link
              </Text>
              <Text style={[styles.hello109, styles.helloTypo19]}>
                2.76 Link
              </Text>
              <Text style={[styles.helloTypo5, styles.helloPosition1]}>
                £761
              </Text>
              <Text style={[styles.helloTypo4, styles.helloPosition1]}>
                £761
              </Text>
              <Text style={[styles.helloTypo3, styles.helloPosition1]}>
                £761
              </Text>
              <Text style={[styles.helloTypo2, styles.helloPosition1]}>
                £761
              </Text>
              <Text style={[styles.helloTypo1, styles.helloPosition1]}>
                £761
              </Text>
              <Text style={[styles.helloTypo, styles.helloPosition1]}>
                £761
              </Text>
              <Text style={[styles.hello116, styles.helloTypo14]}>
                £16,405.51
              </Text>
              <Text style={[styles.hello117, styles.helloTypo14]}>
                £16,405.51
              </Text>
              <Text style={[styles.hello118, styles.helloTypo14]}>
                £16,405.51
              </Text>
              <Text style={[styles.hello119, styles.helloTypo14]}>
                £16,405.51
              </Text>
              <Text style={[styles.hello120, styles.helloTypo14]}>
                £16,405.51
              </Text>
              <Text style={[styles.hello121, styles.helloTypo14]}>
                £16,405.51
              </Text>
              <Text style={[styles.hello122, styles.helloTypo14]}>
                £16,405.51
              </Text>
              <Text style={[styles.hello123, styles.helloTypo14]}>
                £16,405.51
              </Text>
              <View
                style={[
                  styles.groupChild21,
                  styles.groupChildPosition3,
                  styles.groupChildPosition4,
                ]}
              />
              <View style={[styles.groupChild22, styles.groupChildPosition3]} />
              <View style={[styles.groupChild23, styles.groupChildPosition2]} />
              <View style={[styles.groupChild24, styles.groupChildPosition3]} />
              <View style={[styles.groupChild25, styles.groupChildPosition1]} />
              <View style={[styles.groupChild26, styles.groupChildPosition3]} />
              <View style={[styles.groupChild27, styles.groupChildPosition]} />
              <View style={[styles.groupChild28, styles.groupChildPosition3]} />
              <Image
                style={[
                  styles.groupChild29,
                  styles.groupChildLayout1,
                  styles.groupChildSpaceBlock,
                ]}
                resizeMode="cover"
                source={require("../assets/group-30653.png")}
              />
              <Image
                style={[
                  styles.groupChild30,
                  styles.groupChildLayout1,
                  styles.groupChildSpaceBlock,
                ]}
                resizeMode="cover"
                source={require("../assets/group-30653.png")}
              />
            </View>
          </View>
        </View>
        <Text style={[styles.hello124, styles.helloPosition]}>Trade</Text>
        <Text style={[styles.hello125, styles.helloPosition]}>Dashboard</Text>
        <View style={[styles.groupChild31, styles.lineViewLayout]} />
        <View style={styles.groupChild32} />
        <View style={[styles.historyParent, styles.historyParentLayout]}>
          <Text style={[styles.history, styles.historyTypo]}>Account</Text>
          <Text style={[styles.history1, styles.historyTypo]}>Analysis</Text>
          <Text style={[styles.history2, styles.historyTypo]}>Carbon</Text>
          <Text style={[styles.history3, styles.historyTypo]}>Profile</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollGroup19Content: {
    flexDirection: "column",
    paddingLeft: 15,
    paddingTop: 19,
    paddingBottom: 24,
  },
  maskGroup235ParentShadowBox: {
    shadowOpacity: 1,
    elevation: 20,
    shadowRadius: 20,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    backgroundColor: GlobalStyles.Color.white,
  },
  helloTypo23: {
    textAlign: "center",
    fontFamily: GlobalStyles.FontFamily.helvetica,
    fontWeight: "700",
    position: "absolute",
  },
  helloTypo22: {
    textAlign: "left",
    color: GlobalStyles.Color.turquoise,
    fontSize: GlobalStyles.FontSize.size_xs,
    bottom: 0,
    fontFamily: GlobalStyles.FontFamily.helvetica,
    position: "absolute",
  },
  path22725IconPosition: {
    opacity: 0.5,
    bottom: -7,
    right: -6,
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    top: 0,
    position: "absolute",
  },
  helloTypo21: {
    color: GlobalStyles.Color.indigo_100,
    fontFamily: GlobalStyles.FontFamily.typoGrotesk,
    textAlign: "left",
    fontWeight: "700",
    position: "absolute",
  },
  groupContainerPosition: {
    bottom: 0,
    position: "absolute",
  },
  helloLayout1: {
    height: 19,
    position: "absolute",
  },
  iconPosition2: {
    top: -1,
    left: -1,
  },
  iconLayout: {
    maxHeight: "100%",
    width: 21,
    position: "absolute",
  },
  helloLayout: {
    height: 18,
    position: "absolute",
  },
  helloParentLayout: {
    height: 21,
    position: "absolute",
  },
  componentPosition: {
    width: 142,
    top: 0,
    bottom: 0,
    position: "absolute",
  },
  helloPosition4: {
    lineHeight: 24,
    bottom: 7,
    fontSize: GlobalStyles.FontSize.size_xl,
    left: 17,
    textAlign: "left",
    position: "absolute",
  },
  iconPosition1: {
    left: "28.96%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  iconPosition: {
    top: "40.2%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  tether1Typo: {
    color: GlobalStyles.Color.gray_1800,
    fontFamily: GlobalStyles.FontFamily.helvetica,
    fontWeight: "700",
  },
  rectangleLayout: {
    height: 188,
    left: 16,
    width: 328,
    position: "absolute",
  },
  groupShadowBox: {
    borderRadius: GlobalStyles.Border.br_sm,
    right: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    shadowOpacity: 1,
    elevation: 20,
    shadowRadius: 20,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowColor: "rgba(1, 1, 253, 0.05)",
    position: "absolute",
    backgroundColor: GlobalStyles.Color.white,
  },
  helloTypo20: {
    left: "16.73%",
    fontSize: GlobalStyles.FontSize.size_base,
    color: GlobalStyles.Color.indigo_100,
    textAlign: "left",
    fontFamily: GlobalStyles.FontFamily.helvetica,
    fontWeight: "700",
    position: "absolute",
  },
  helloPosition3: {
    left: "83.94%",
    color: GlobalStyles.Color.turquoise,
  },
  helloTypo17: {
    top: "39.45%",
    textAlign: "right",
    textTransform: "uppercase",
    fontSize: GlobalStyles.FontSize.size_3xs,
    fontFamily: GlobalStyles.FontFamily.helvetica,
    position: "absolute",
  },
  helloPosition2: {
    left: "84.59%",
    color: GlobalStyles.Color.brown,
  },
  helloTypo18: {
    textAlign: "right",
    top: "13.56%",
    textTransform: "uppercase",
    fontSize: GlobalStyles.FontSize.size_3xs,
    fontFamily: GlobalStyles.FontFamily.helvetica,
    position: "absolute",
  },
  helloTypo19: {
    textTransform: "uppercase",
    fontSize: GlobalStyles.FontSize.size_3xs,
    left: "16.73%",
    textAlign: "left",
    color: GlobalStyles.Color.gray_700,
    fontFamily: GlobalStyles.FontFamily.helvetica,
    position: "absolute",
  },
  helloTypo16: {
    top: "63.07%",
    textAlign: "right",
    textTransform: "uppercase",
    fontSize: GlobalStyles.FontSize.size_3xs,
    fontFamily: GlobalStyles.FontFamily.helvetica,
    position: "absolute",
  },
  helloTypo15: {
    top: "86.69%",
    textAlign: "right",
    textTransform: "uppercase",
    fontSize: GlobalStyles.FontSize.size_3xs,
    fontFamily: GlobalStyles.FontFamily.helvetica,
    position: "absolute",
  },
  helloTypo14: {
    left: "75.56%",
    textAlign: "right",
    textTransform: "uppercase",
    color: GlobalStyles.Color.indigo_100,
    fontSize: GlobalStyles.FontSize.size_xs,
    fontFamily: GlobalStyles.FontFamily.helvetica,
    fontWeight: "700",
    position: "absolute",
  },
  groupChildPosition3: {
    backgroundColor: GlobalStyles.Color.gray_200,
    left: 11,
    right: 285,
    borderRadius: GlobalStyles.Border.br_5xs,
    position: "absolute",
  },
  groupChildPosition4: {
    top: 12,
    left: 11,
    right: 285,
  },
  groupChildPosition2: {
    top: 56,
    backgroundColor: GlobalStyles.Color.gray_200,
    left: 11,
    right: 285,
    borderRadius: GlobalStyles.Border.br_5xs,
    position: "absolute",
  },
  groupChildPosition1: {
    top: 101,
    backgroundColor: GlobalStyles.Color.gray_200,
    left: 11,
    right: 285,
    borderRadius: GlobalStyles.Border.br_5xs,
    position: "absolute",
  },
  groupChildPosition: {
    top: 145,
    backgroundColor: GlobalStyles.Color.gray_200,
    left: 11,
    right: 285,
    borderRadius: GlobalStyles.Border.br_5xs,
    position: "absolute",
  },
  helloPosition1: {
    left: "74.91%",
    color: GlobalStyles.Color.gray_700,
  },
  groupChildLayout1: {
    height: 171,
    width: 73,
    left: "50%",
    position: "absolute",
  },
  helloTypo9: {
    top: "90.96%",
    fontSize: GlobalStyles.FontSize.size_3xs,
    textAlign: "left",
    color: GlobalStyles.Color.gray_700,
    fontFamily: GlobalStyles.FontFamily.helvetica,
    position: "absolute",
  },
  lineViewLayout: {
    height: 2,
    borderTopWidth: 1,
    borderStyle: "solid",
    position: "absolute",
  },
  historyParentLayout: {
    height: 16,
    position: "absolute",
  },
  rectangleParentLayout: {
    height: 149,
    width: 135,
    bottom: 0,
    position: "absolute",
  },
  helloTypo8: {
    fontSize: GlobalStyles.FontSize.size_lg,
    left: 15,
    textAlign: "left",
    position: "absolute",
  },
  groupChildLayout: {
    height: "38.78%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  groupChildSpaceBlock: {
    marginLeft: -5.72,
    height: 171,
  },
  helloPosition: {
    marginTop: -397.36,
    fontFamily: GlobalStyles.FontFamily.typoGrotesk,
    textAlign: "left",
    fontSize: GlobalStyles.FontSize.size_2xl,
    top: "50%",
    position: "absolute",
  },
  historyTypo: {
    opacity: 0.3,
    letterSpacing: 1,
    fontSize: GlobalStyles.FontSize.size_xl,
    top: 0,
    textAlign: "left",
    color: GlobalStyles.Color.gray_700,
    fontFamily: GlobalStyles.FontFamily.helvetica,
    position: "absolute",
  },
  maskGroup235Child: {
    width: "1.33%",
    right: "100%",
    left: "-1.33%",
    borderRadius: GlobalStyles.Border.br_lg,
    backgroundColor: "#0073b7",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  maskGroup235: {
    marginTop: 26.5,
    width: 75,
    height: 23,
    left: 19,
    top: "50%",
    position: "absolute",
  },
  hello: {
    marginTop: -20.39,
    left: 18,
    fontSize: GlobalStyles.FontSize.size_6xl,
    lineHeight: 26,
    color: GlobalStyles.Color.blue_100,
    top: "50%",
  },
  hello1: {
    top: 20,
    color: GlobalStyles.Color.gray_700,
    fontSize: GlobalStyles.FontSize.size_2xl,
    left: 19,
  },
  groupChild: {
    right: 13,
    bottom: 15,
    width: 139,
    height: 82,
    position: "absolute",
  },
  hello2: {
    left: 0,
  },
  hello3: {
    right: -1,
  },
  path22725Icon: {
    left: 25,
  },
  helloParent: {
    top: 13,
    right: 15,
    width: 77,
    height: 17,
    position: "absolute",
  },
  maskGroup235Parent: {
    top: 106,
    borderRadius: GlobalStyles.Border.br_4xl,
    height: 143,
    width: 328,
    shadowColor: "rgba(1, 1, 253, 0.05)",
    shadowOpacity: 1,
    elevation: 20,
    shadowRadius: 20,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    left: 25,
    position: "absolute",
  },
  hello4: {
    top: 51,
    fontSize: GlobalStyles.FontSize.size_8xl,
    left: 25,
  },
  hello5: {
    left: 29,
    top: 1,
    fontSize: GlobalStyles.FontSize.size_2xl,
  },
  coinsSolidIcon: {
    bottom: -1,
    width: 21,
    left: -1,
  },
  helloGroup: {
    width: 88,
    left: 17,
    height: 19,
    top: 0,
  },
  hello6: {
    top: 0,
    right: -1,
    fontSize: GlobalStyles.FontSize.size_2xl,
  },
  iconAwesomeChartLine: {
    bottom: 2,
    width: 21,
    top: 1,
    left: 0,
  },
  helloContainer: {
    marginTop: -214.13,
    width: 191,
    left: 16,
    top: "50%",
  },
  groupItem: {
    marginTop: 18.14,
    marginLeft: -187.59,
    width: 12,
    height: 13,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  hello7: {
    top: 3,
    left: 31,
    fontSize: GlobalStyles.FontSize.size_2xl,
  },
  iconFeatherStar: {
    width: 19,
    left: -1,
  },
  helloParent1: {
    width: 98,
    left: 15,
    top: 0,
  },
  component37222Child: {
    borderRadius: GlobalStyles.Border.br_xl,
    shadowColor: "rgba(1, 1, 253, 0.1)",
    right: 0,
    top: 0,
    left: 0,
  },
  tether: {
    margin: GlobalStyles.Margin.margin_8xs,
  },
  text1: {
    color: GlobalStyles.Color.gray_700,
    fontFamily: GlobalStyles.FontFamily.helvetica,
  },
  hello8: {
    letterSpacing: 0,
  },
  path22581Icon: {
    marginTop: -8.71,
    right: 7,
    left: 6,
    overflow: "hidden",
    maxWidth: "100%",
    height: 19,
    top: "50%",
  },
  path22581Wrapper: {
    backgroundColor: GlobalStyles.Color.gray_100,
    width: 34,
    height: 32,
    borderRadius: GlobalStyles.Border.br_5xs,
    top: 16,
    left: 17,
    position: "absolute",
  },
  hello9: {
    fontSize: GlobalStyles.FontSize.size_base,
    bottom: 1,
    left: 15,
    textAlign: "left",
    color: GlobalStyles.Color.turquoise,
    fontFamily: GlobalStyles.FontFamily.helvetica,
    position: "absolute",
  },
  path22725Icon1: {
    left: 0,
  },
  helloParent2: {
    marginTop: -35.92,
    right: 10,
    width: 63,
    top: "50%",
  },
  component37222: {
    left: 0,
  },
  path23807Icon: {
    height: "44.57%",
    width: "42.55%",
    top: "27.69%",
    right: "28.48%",
    bottom: "27.74%",
  },
  path23808Icon: {
    height: "44.54%",
    width: "42.57%",
    right: "16.69%",
    bottom: "15.26%",
    left: "40.74%",
  },
  path23809Icon: {
    height: "32.11%",
    width: "30.47%",
    top: "15.26%",
    right: "40.57%",
    bottom: "52.63%",
  },
  path23810Icon: {
    height: "19.74%",
    width: "18.49%",
    right: "64.3%",
    bottom: "40.06%",
    left: "17.21%",
  },
  hello10: {
    color: GlobalStyles.Color.brown,
    fontSize: GlobalStyles.FontSize.size_base,
    bottom: 1,
    textAlign: "left",
    fontFamily: GlobalStyles.FontFamily.helvetica,
    left: 19,
    position: "absolute",
  },
  binance1: {
    letterSpacing: 0,
  },
  component37223: {
    marginLeft: -70,
    left: "50%",
  },
  path23811Icon: {
    marginLeft: -3.48,
    bottom: 8,
    width: 9,
    height: 15,
    left: "50%",
    position: "absolute",
  },
  path23812Icon: {
    right: 4,
    bottom: 5,
    width: 24,
  },
  component37224: {
    right: 0,
  },
  component37222Parent: {
    width: "130.48%",
    height: 110,
  },
  scrollGroup19: {
    top: 15,
    right: 0,
    left: 0,
  },
  groupView: {
    marginTop: 56.29,
    width: 366,
    height: 168,
    left: 0,
    top: "50%",
    position: "absolute",
  },
  groupInner: {
    left: "0%",
    width: "100%",
  },
  hello14: {
    top: "55.58%",
  },
  hello15: {
    top: "31.21%",
  },
  hello16: {
    top: "77.56%",
  },
  hello17: {
    top: "8.24%",
  },
  hello23: {
    top: "17.29%",
  },
  hello24: {
    top: "39.59%",
  },
  hello25: {
    top: "63.64%",
  },
  hello26: {
    top: "86.31%",
  },
  hello30: {
    top: "5.85%",
  },
  hello31: {
    top: "31.74%",
  },
  hello32: {
    top: "55.36%",
  },
  hello33: {
    top: "78.97%",
  },
  rectangleView: {
    bottom: 144,
  },
  groupChild1: {
    bottom: 100,
  },
  groupChild2: {
    bottom: 55,
  },
  groupChild3: {
    bottom: 11,
  },
  groupIcon: {
    width: 73,
    marginLeft: -5.72,
    bottom: 1,
    top: 16,
    left: "50%",
    maxHeight: "100%",
    position: "absolute",
  },
  rectangleParent: {
    top: 41,
  },
  rectangleGroup: {
    marginTop: -184.13,
    top: "50%",
  },
  hello54: {
    top: "45.83%",
  },
  hello55: {
    top: "25.73%",
  },
  hello56: {
    top: "63.95%",
  },
  hello57: {
    top: "6.8%",
  },
  helloTypo13: {
    top: "11.18%",
    textAlign: "right",
    textTransform: "uppercase",
    fontSize: GlobalStyles.FontSize.size_3xs,
    fontFamily: GlobalStyles.FontFamily.helvetica,
    position: "absolute",
  },
  helloTypo12: {
    top: "32.53%",
    textAlign: "right",
    textTransform: "uppercase",
    fontSize: GlobalStyles.FontSize.size_3xs,
    fontFamily: GlobalStyles.FontFamily.helvetica,
    position: "absolute",
  },
  helloTypo11: {
    top: "52%",
    textAlign: "right",
    textTransform: "uppercase",
    fontSize: GlobalStyles.FontSize.size_3xs,
    fontFamily: GlobalStyles.FontFamily.helvetica,
    position: "absolute",
  },
  helloTypo10: {
    top: "71.48%",
    textAlign: "right",
    textTransform: "uppercase",
    fontSize: GlobalStyles.FontSize.size_3xs,
    fontFamily: GlobalStyles.FontFamily.helvetica,
    position: "absolute",
  },
  hello63: {
    top: "14.25%",
  },
  hello64: {
    top: "32.64%",
  },
  hello65: {
    top: "52.48%",
  },
  hello66: {
    top: "71.17%",
  },
  hello70: {
    top: "4.82%",
  },
  hello71: {
    top: "26.17%",
  },
  hello72: {
    top: "45.64%",
  },
  hello73: {
    top: "65.12%",
  },
  groupChild11: {
    bottom: 184,
  },
  groupChild12: {
    bottom: 140,
  },
  groupChild13: {
    bottom: 95,
  },
  groupChild14: {
    bottom: 51,
  },
  groupChild15: {
    marginLeft: -5.73,
    top: 16,
  },
  hello74: {
    left: "13.34%",
  },
  hello75: {
    left: "70.4%",
  },
  lineView: {
    bottom: 35,
    borderColor: "#f9f9f9",
    width: 311,
    left: -1,
  },
  rectangleContainer: {
    height: 228,
    left: 16,
    width: 328,
  },
  iconFeatherEye: {
    width: 21,
    top: 1,
    left: 0,
  },
  helloParent5: {
    marginTop: 251.71,
    width: 140,
    left: 15,
    top: "50%",
  },
  helloParent6: {
    width: 164,
    top: 0,
    left: 0,
  },
  groupChild16: {
    width: "99.86%",
    left: "0.14%",
  },
  profitLoss: {
    color: GlobalStyles.Color.white,
    fontFamily: GlobalStyles.FontFamily.helvetica,
    fontWeight: "700",
  },
  hello78: {
    top: 21,
  },
  hello79: {
    marginTop: -11.85,
    top: "50%",
  },
  hello80: {
    marginTop: -32.85,
    fontSize: GlobalStyles.FontSize.size_xl,
    left: 15,
    textAlign: "left",
    color: GlobalStyles.Color.blue_100,
    fontFamily: GlobalStyles.FontFamily.helvetica,
    fontWeight: "700",
    top: "50%",
    position: "absolute",
  },
  groupChild17: {
    width: "99.8%",
    top: "53.96%",
    right: "0.2%",
    bottom: "7.26%",
    left: "0%",
  },
  rectangleParent1: {
    left: 0,
  },
  groupChild19: {
    width: "99.94%",
    top: "52.12%",
    right: "-0.31%",
    bottom: "9.1%",
    left: "0.37%",
  },
  rectangleParent2: {
    right: 0,
  },
  hello84: {
    top: "28.4%",
  },
  hello85: {
    top: "77.07%",
  },
  hello86: {
    top: "15.94%",
  },
  hello87: {
    top: "64.62%",
  },
  hello88: {
    top: "39.62%",
  },
  hello89: {
    top: "88.3%",
  },
  hello90: {
    top: "4.21%",
  },
  hello91: {
    top: "52.89%",
  },
  helloTypo7: {
    top: "6.93%",
    textAlign: "right",
    textTransform: "uppercase",
    fontSize: GlobalStyles.FontSize.size_3xs,
    fontFamily: GlobalStyles.FontFamily.helvetica,
    position: "absolute",
  },
  helloTypo6: {
    top: "55.61%",
    textAlign: "right",
    textTransform: "uppercase",
    fontSize: GlobalStyles.FontSize.size_3xs,
    fontFamily: GlobalStyles.FontFamily.helvetica,
    position: "absolute",
  },
  helloTypo5: {
    top: "20.16%",
    textAlign: "right",
    textTransform: "uppercase",
    fontSize: GlobalStyles.FontSize.size_3xs,
    fontFamily: GlobalStyles.FontFamily.helvetica,
    position: "absolute",
  },
  helloTypo4: {
    top: "68.83%",
    textAlign: "right",
    textTransform: "uppercase",
    fontSize: GlobalStyles.FontSize.size_3xs,
    fontFamily: GlobalStyles.FontFamily.helvetica,
    position: "absolute",
  },
  helloTypo3: {
    top: "32.22%",
    textAlign: "right",
    textTransform: "uppercase",
    fontSize: GlobalStyles.FontSize.size_3xs,
    fontFamily: GlobalStyles.FontFamily.helvetica,
    position: "absolute",
  },
  helloTypo2: {
    top: "80.9%",
    textAlign: "right",
    textTransform: "uppercase",
    fontSize: GlobalStyles.FontSize.size_3xs,
    fontFamily: GlobalStyles.FontFamily.helvetica,
    position: "absolute",
  },
  helloTypo1: {
    top: "44.29%",
    textAlign: "right",
    textTransform: "uppercase",
    fontSize: GlobalStyles.FontSize.size_3xs,
    fontFamily: GlobalStyles.FontFamily.helvetica,
    position: "absolute",
  },
  helloTypo: {
    top: "92.96%",
    textAlign: "right",
    textTransform: "uppercase",
    fontSize: GlobalStyles.FontSize.size_3xs,
    fontFamily: GlobalStyles.FontFamily.helvetica,
    position: "absolute",
  },
  hello102: {
    top: "8.83%",
  },
  hello103: {
    top: "57.51%",
  },
  hello104: {
    top: "20.22%",
  },
  hello105: {
    top: "68.9%",
  },
  hello106: {
    top: "32.51%",
  },
  hello107: {
    top: "81.19%",
  },
  hello108: {
    top: "44.09%",
  },
  hello109: {
    top: "92.77%",
  },
  hello116: {
    top: "2.99%",
  },
  hello117: {
    top: "51.67%",
  },
  hello118: {
    top: "16.21%",
  },
  hello119: {
    top: "64.89%",
  },
  hello120: {
    top: "28.28%",
  },
  hello121: {
    top: "76.96%",
  },
  hello122: {
    top: "40.35%",
  },
  hello123: {
    top: "89.02%",
  },
  groupChild21: {
    bottom: 324,
  },
  groupChild22: {
    top: 191,
    bottom: 145,
  },
  groupChild23: {
    bottom: 280,
  },
  groupChild24: {
    top: 235,
    bottom: 101,
  },
  groupChild25: {
    bottom: 235,
  },
  groupChild26: {
    top: 280,
    bottom: 56,
  },
  groupChild27: {
    bottom: 191,
  },
  groupChild28: {
    top: 324,
    bottom: 12,
  },
  groupChild29: {
    top: 16,
  },
  groupChild30: {
    bottom: 1,
    marginLeft: -5.72,
  },
  rectangleParent3: {
    height: 368,
    top: 41,
    right: 0,
    left: 0,
    position: "absolute",
  },
  groupParent1: {
    height: 587,
    right: 0,
    top: 0,
    width: 328,
    position: "absolute",
  },
  groupContainer: {
    left: 9,
    height: 1019,
    right: 0,
  },
  hello124: {
    left: 61,
    color: GlobalStyles.Color.blue_100,
  },
  hello125: {
    marginLeft: -141.34,
    left: "50%",
    color: GlobalStyles.Color.gray_700,
  },
  groupChild31: {
    marginTop: -370.86,
    marginLeft: -173.84,
    borderColor: "#999",
    width: 188,
    left: "50%",
    top: "50%",
  },
  groupChild32: {
    marginTop: -371.86,
    left: -2,
    borderColor: "#0101fd",
    borderTopWidth: 2,
    width: 190,
    height: 4,
    borderStyle: "solid",
    top: "50%",
    position: "absolute",
  },
  history: {
    left: 0,
  },
  history1: {
    marginLeft: -63.5,
    left: "50%",
  },
  history2: {
    marginLeft: 21.5,
    left: "50%",
  },
  history3: {
    right: -1,
  },
  historyParent: {
    left: 33,
    width: 295,
    top: 0,
  },
  groupParent: {
    width: 722,
    height: 1346,
  },
  trade: {
    flex: 1,
    paddingLeft: GlobalStyles.Padding.padding_12xs,
    paddingTop: GlobalStyles.Padding.padding_2xs,
    alignItems: "flex-end",
    width: "100%",
    backgroundColor: GlobalStyles.Color.white,
  },
});

export default Trade;
