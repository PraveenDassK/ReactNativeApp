import * as React from "react";
import { StyleSheet, View, Image, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import GlobalStyles from "../GlobalStyles";

const MyCards = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.myCards}>
      <View style={styles.myCardsChild} />
      <Pressable
        style={[
          styles.groupParent,
          styles.mt19,
          styles.rectangleShadowBox,
          styles.groupParentShadowBox1,
        ]}
        onPress={() => navigation.navigate("Account")}
      >
        <View style={styles.rectangleParent}>
          <View style={styles.childPosition} />
          <Image
            style={styles.iconIonicIosArrowForward}
            resizeMode="cover"
            source={require("../assets/icon-ioniciosarrowforward11.png")}
          />
        </View>
        <Text
          style={[styles.myCards1, styles.historyColor, styles.historyTypo]}
        >
          My Cards
        </Text>
      </Pressable>
      <View style={[styles.historyParent, styles.mt37]}>
        <Text
          style={[
            styles.history,
            styles.historyPosition,
            styles.historyColor,
            styles.historyTypo,
          ]}
        >
          Recent Transactions
        </Text>
        <Image
          style={[styles.path23663Icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/path-23663.png")}
        />
        <View style={styles.component2206}>
          <View style={styles.groupContainer}>
            <View style={[styles.groupView, styles.groupShadowBox]}>
              <View style={styles.lanceBogrolParent}>
                <Text
                  style={[
                    styles.lanceBogrol,
                    styles.helloTypo,
                    styles.historyPosition,
                    styles.historyColor,
                  ]}
                >
                  Grocery Market
                </Text>
                <Text style={[styles.moneyTransfer, styles.historyPosition]}>
                  <Text style={styles.september222022}>September 22, 2022</Text>
                  <Text style={styles.september222022}>12:06 PM</Text>
                </Text>
              </View>
              <Text style={[styles.text, styles.textTypo, styles.textTypo1]}>
                - £70.00
              </Text>
              <Image
                style={styles.maskGroup14}
                resizeMode="cover"
                source={require("../assets/mask-group-14.png")}
              />
            </View>
            <View style={[styles.groupParent1, styles.groupParentShadowBox]}>
              <View style={[styles.lanceBogrolGroup, styles.lancePosition]}>
                <Text
                  style={[
                    styles.lanceBogrol,
                    styles.helloTypo,
                    styles.historyPosition,
                    styles.historyColor,
                  ]}
                >
                  Grocery Market
                </Text>
                <Text style={[styles.moneyTransfer, styles.historyPosition]}>
                  <Text style={styles.september222022}>September 22, 2022</Text>
                  <Text style={styles.september222022}>12:06 PM</Text>
                </Text>
              </View>
              <Text style={[styles.text, styles.textTypo, styles.textTypo1]}>
                - £70.00
              </Text>
              <Image
                style={styles.maskGroup141}
                resizeMode="cover"
                source={require("../assets/mask-group-144.png")}
              />
            </View>
            <View style={[styles.groupParent2, styles.groupShadowBox]}>
              <View style={[styles.lanceBogrolContainer, styles.lancePosition]}>
                <Text
                  style={[
                    styles.lanceBogrol,
                    styles.helloTypo,
                    styles.historyPosition,
                    styles.historyColor,
                  ]}
                >
                  Grocery Market
                </Text>
                <Text style={[styles.moneyTransfer, styles.historyPosition]}>
                  <Text style={styles.september222022}>September 22, 2022</Text>
                  <Text style={styles.september222022}>12:06 PM</Text>
                </Text>
              </View>
              <Text style={[styles.text2, styles.textTypo, styles.textTypo1]}>
                - £70.00
              </Text>
              <Image
                style={styles.maskGroup141}
                resizeMode="cover"
                source={require("../assets/mask-group-144.png")}
              />
            </View>
            <View style={[styles.groupParent3, styles.groupParentShadowBox]}>
              <View style={[styles.lanceBogrolParent1, styles.lancePosition]}>
                <Text
                  style={[
                    styles.lanceBogrol,
                    styles.helloTypo,
                    styles.historyPosition,
                    styles.historyColor,
                  ]}
                >
                  Spotify Music
                </Text>
                <Text style={[styles.moneyTransfer, styles.historyPosition]}>
                  <Text style={styles.september222022}>September 22, 2022</Text>
                  <Text style={styles.september222022}>12:06 PM</Text>
                </Text>
              </View>
              <Text style={[styles.text2, styles.textTypo, styles.textTypo1]}>
                - £50.00
              </Text>
              <Image
                style={[styles.maskGroup16, styles.groupPosition]}
                resizeMode="cover"
                source={require("../assets/mask-group-16.png")}
              />
            </View>
            <View style={[styles.groupParent4, styles.groupParentShadowBox]}>
              <View style={[styles.lanceBogrolParent1, styles.lancePosition]}>
                <Text
                  style={[
                    styles.lanceBogrol,
                    styles.helloTypo,
                    styles.historyPosition,
                    styles.historyColor,
                  ]}
                >
                  Lance Bogrol
                </Text>
                <Text style={[styles.moneyTransfer, styles.historyPosition]}>
                  <Text style={styles.september222022}>September 22, 2022</Text>
                  <Text style={styles.september222022}>12:06 PM</Text>
                </Text>
              </View>
              <Text style={[styles.text4, styles.textTypo]}>+ £350.00</Text>
              <Image
                style={[styles.groupItem, styles.groupPosition]}
                resizeMode="cover"
                source={require("../assets/rectangle-502.png")}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.homeIndicator, styles.mt_208, styles.ml1]} />
      <View style={[styles.statusBarBlack, styles.mt_970]}>
        <View style={[styles.rectangle, styles.rectangleShadowBox]} />
        <View style={[styles.statusBar, styles.statusBarPosition]}>
          <View style={styles.time}>
            <Text style={[styles.text5, styles.text5FlexBox]}>9:41</Text>
          </View>
          <Image
            style={[styles.batteryIcon, styles.networkPosition]}
            resizeMode="cover"
            source={require("../assets/icon-awesomebatterythreequarters.png")}
          />
          <Image
            style={[styles.wifiIcon, styles.networkLayout1]}
            resizeMode="cover"
            source={require("../assets/icon-awesomewifi.png")}
          />
          <View
            style={[
              styles.network,
              styles.networkLayout1,
              styles.networkPosition,
            ]}
          >
            <View style={[styles.networkChild, styles.networkLayout]} />
            <View style={[styles.networkItem, styles.networkLayout]} />
            <View style={[styles.networkInner, styles.networkLayout]} />
            <View style={[styles.rectangleView, styles.networkLayout]} />
          </View>
        </View>
      </View>
      <View style={[styles.maskGroup236Wrapper, styles.mt66, styles.mr221]}>
        <View style={styles.groupContainer} />
      </View>
      <View style={[styles.maskGroup236Wrapper, styles.mt_47, styles.ml1]}>
        <View style={styles.groupContainer} />
      </View>
      <View style={[styles.maskGroup236Wrapper, styles.mt_47, styles.ml241]}>
        <View style={styles.groupContainer} />
      </View>
      <Pressable
        style={[styles.component2221, styles.mt_42, styles.mr59]}
        onPress={() => navigation.navigate("SendEnterPIN1")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/component-222--1.png")}
        />
      </Pressable>
      <Text style={[styles.hello, styles.mt12, styles.mr120, styles.helloTypo]}>
        FREEZE
      </Text>
      <Pressable
        style={[styles.component2231, styles.mt_110, styles.ml111]}
        onPress={() => navigation.navigate("CardSettings")}
      >
        <View
          style={[
            styles.component2231Child,
            styles.childPosition,
            styles.rectangleShadowBox,
            styles.groupParentShadowBox1,
          ]}
        />
        <Image
          style={[styles.settingsIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/settings.png")}
        />
      </Pressable>
      <Text
        style={[styles.hello, styles.mt_14, styles.ml111, styles.helloTypo]}
      >
        SETTINGS
      </Text>
      <View style={[styles.card1, styles.mt_876]}>
        <View style={styles.groupContainer}>
          <View style={styles.groupContainer}>
            <Image
              style={[styles.path33118Icon, styles.groupIconLayout]}
              resizeMode="cover"
              source={require("../assets/path-33118.png")}
            />
            <View style={styles.groupContainer}>
              <Image
                style={[styles.groupInner, styles.groupIconLayout]}
                resizeMode="cover"
                source={require("../assets/group-31759.png")}
              />
              <Image
                style={[styles.groupIcon, styles.groupIconLayout]}
                resizeMode="cover"
                source={require("../assets/group-31760.png")}
              />
              <View style={styles.groupChild1} />
              <Image
                style={[styles.rectangleIcon, styles.groupIconLayout]}
                resizeMode="cover"
                source={require("../assets/rectangle-26204.png")}
              />
              <View style={styles.bWrapper}>
                <Text style={[styles.b, styles.bTypo]}>B</Text>
              </View>
              <Text
                style={[styles.business, styles.text5FlexBox, styles.bTypo]}
              >
                BUSINESS
              </Text>
            </View>
          </View>
          <Image
            style={styles.groupChild2}
            resizeMode="cover"
            source={require("../assets/group-31764.png")}
          />
          <Image
            style={[styles.groupChild3, styles.statusBarPosition]}
            resizeMode="cover"
            source={require("../assets/group-31766.png")}
          />
          <Image
            style={[styles.groupChild4, styles.networkLayout1]}
            resizeMode="cover"
            source={require("../assets/group-31767.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mt19: {
    marginTop: GlobalStyles.Margin.margin_14xs,
  },
  mt37: {
    marginTop: GlobalStyles.Margin.margin_7xl,
  },
  mt_208: {
    marginTop: -208,
  },
  ml1: {
    marginLeft: GlobalStyles.Margin.margin_32xs,
  },
  mt_970: {
    marginTop: -970,
  },
  mt66: {
    marginTop: GlobalStyles.Margin.margin_30xl,
  },
  mr221: {
    marginRight: 221,
  },
  mt_47: {
    marginTop: GlobalStyles.Margin.margin_60xs,
  },
  ml241: {
    marginLeft: GlobalStyles.Margin.margin_81xl,
  },
  mt_42: {
    marginTop: GlobalStyles.Margin.margin_58xs,
  },
  mr59: {
    marginRight: GlobalStyles.Margin.margin_27xl,
  },
  mt12: {
    marginTop: GlobalStyles.Margin.margin_22xs,
  },
  mr120: {
    marginRight: GlobalStyles.Margin.margin_53xl,
  },
  mt_110: {
    marginTop: -110,
  },
  ml111: {
    marginLeft: GlobalStyles.Margin.margin_50xl,
  },
  mt_14: {
    marginTop: GlobalStyles.Margin.margin_40xs,
  },
  mt_876: {
    marginTop: -876,
  },
  rectangleShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: -3,
    },
    backgroundColor: GlobalStyles.Color.white,
  },
  groupParentShadowBox1: {
    elevation: 20,
    shadowRadius: 20,
    shadowColor: "rgba(1, 1, 253, 0.1)",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: -3,
    },
    backgroundColor: GlobalStyles.Color.white,
  },
  historyColor: {
    color: GlobalStyles.Color.indigo,
    fontWeight: "700",
  },
  historyTypo: {
    fontFamily: GlobalStyles.FontFamily.typoGrotesk,
    textAlign: "left",
    color: GlobalStyles.Color.indigo,
  },
  historyPosition: {
    letterSpacing: 1,
    position: "absolute",
  },
  iconLayout: {
    height: 20,
    position: "absolute",
  },
  groupShadowBox: {
    height: 66,
    borderRadius: GlobalStyles.Border.br_4xl,
    position: "absolute",
    shadowOpacity: 1,
    elevation: 20,
    shadowRadius: 20,
    shadowOffset: {
      width: 0,
      height: -3,
    },
    shadowColor: "rgba(1, 1, 253, 0.1)",
    backgroundColor: GlobalStyles.Color.white,
  },
  helloTypo: {
    fontSize: GlobalStyles.FontSize.size_xs,
    fontFamily: GlobalStyles.FontFamily.helvetica,
    textAlign: "left",
  },
  textTypo: {
    textAlign: "right",
    fontSize: GlobalStyles.FontSize.size_base,
    marginTop: -8,
    fontFamily: GlobalStyles.FontFamily.helvetica,
    letterSpacing: 1,
    fontWeight: "700",
    top: "50%",
    position: "absolute",
  },
  textTypo1: {
    color: GlobalStyles.Color.brown,
    textAlign: "right",
    fontSize: GlobalStyles.FontSize.size_base,
    marginTop: -8,
  },
  groupParentShadowBox: {
    height: 64,
    borderRadius: GlobalStyles.Border.br_4xl,
    right: 0,
    left: 0,
    position: "absolute",
    shadowOpacity: 1,
    elevation: 20,
    shadowRadius: 20,
    shadowOffset: {
      width: 0,
      height: -3,
    },
    shadowColor: "rgba(1, 1, 253, 0.1)",
    backgroundColor: GlobalStyles.Color.white,
  },
  lancePosition: {
    height: 37,
    marginLeft: -96.5,
    width: 105,
    left: "50%",
    position: "absolute",
  },
  groupPosition: {
    left: 14,
    height: 34,
    width: 34,
    top: "50%",
    position: "absolute",
  },
  statusBarPosition: {
    right: 16,
    position: "absolute",
  },
  text5FlexBox: {
    letterSpacing: 0,
    textAlign: "left",
    position: "absolute",
  },
  networkPosition: {
    height: 11,
    marginTop: -3,
    top: "50%",
  },
  networkLayout1: {
    width: 17,
    position: "absolute",
  },
  networkLayout: {
    width: 3,
    backgroundColor: GlobalStyles.Color.gray_1400,
    borderRadius: GlobalStyles.Border.br_7xs,
    bottom: 0,
    position: "absolute",
  },
  childPosition: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  groupIconLayout: {
    overflow: "hidden",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
  },
  bTypo: {
    fontWeight: "700",
    fontFamily: GlobalStyles.FontFamily.helvetica,
  },
  myCardsChild: {
    backgroundColor: GlobalStyles.Color.gray_300,
    height: 972,
    width: 375,
  },
  iconIonicIosArrowForward: {
    marginTop: 1.03,
    left: 6,
    width: 11,
    height: 6,
    top: "50%",
    position: "absolute",
  },
  rectangleParent: {
    height: "2.98%",
    width: "88.8%",
    top: "1.19%",
    right: "5.6%",
    bottom: "95.84%",
    left: "5.6%",
    position: "absolute",
  },
  myCards1: {
    marginLeft: -43.5,
    top: 29,
    textAlign: "left",
    fontSize: GlobalStyles.FontSize.size_4xl,
    left: "50%",
    position: "absolute",
  },
  groupParent: {
    borderTopLeftRadius: GlobalStyles.Border.br_4xl,
    borderTopRightRadius: GlobalStyles.Border.br_4xl,
    height: 987,
    width: 375,
  },
  history: {
    marginTop: -193.5,
    left: "9.54%",
    fontSize: GlobalStyles.FontSize.size_2xl,
    textAlign: "left",
    top: "50%",
  },
  path23663Icon: {
    top: 6,
    width: 19,
    left: 0,
  },
  lanceBogrol: {
    fontFamily: GlobalStyles.FontFamily.helvetica,
    top: 0,
    left: 0,
  },
  september222022: {
    margin: GlobalStyles.Margin.margin_33xs,
  },
  moneyTransfer: {
    fontSize: GlobalStyles.FontSize.size_3xs,
    color: GlobalStyles.Color.gray_1000,
    fontFamily: GlobalStyles.FontFamily.helvetica,
    bottom: 0,
    left: 0,
    textAlign: "left",
  },
  lanceBogrolParent: {
    top: 15,
    bottom: 14,
    left: 66,
    width: 105,
    position: "absolute",
  },
  text: {
    marginLeft: 77.5,
    left: "50%",
  },
  maskGroup14: {
    top: 16,
    bottom: 16,
    width: 34,
    maxHeight: "100%",
    left: 12,
    position: "absolute",
  },
  groupView: {
    marginLeft: -162.5,
    bottom: 0,
    width: 325,
    left: "50%",
  },
  lanceBogrolGroup: {
    top: 14,
  },
  maskGroup141: {
    height: 34,
    marginTop: -17,
    width: 34,
    left: 12,
    top: "50%",
    position: "absolute",
  },
  groupParent1: {
    bottom: 72,
  },
  lanceBogrolContainer: {
    marginTop: -19,
    top: "50%",
  },
  text2: {
    right: 27,
  },
  groupParent2: {
    bottom: 141,
    right: 0,
    left: 0,
  },
  lanceBogrolParent1: {
    marginTop: -18,
    top: "50%",
  },
  maskGroup16: {
    marginTop: -17,
    left: 14,
  },
  groupParent3: {
    marginTop: -103.5,
    top: "50%",
  },
  text4: {
    right: 29,
    color: GlobalStyles.Color.turquoise,
    textAlign: "right",
    fontSize: GlobalStyles.FontSize.size_base,
    marginTop: -8,
  },
  groupItem: {
    marginTop: -16,
    borderRadius: GlobalStyles.Border.br_xs,
  },
  groupParent4: {
    top: 0,
  },
  groupContainer: {
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    position: "absolute",
  },
  component2206: {
    top: 40,
    bottom: 0,
    right: 0,
    left: 0,
    position: "absolute",
  },
  historyParent: {
    height: 387,
    width: 325,
  },
  homeIndicator: {
    borderRadius: GlobalStyles.Border.br_8xl,
    backgroundColor: GlobalStyles.Color.black,
    width: 134,
    height: 5,
  },
  rectangle: {
    shadowColor: "rgba(0, 0, 0, 0.05)",
    shadowRadius: 6,
    elevation: 6,
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    position: "absolute",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: -3,
    },
    backgroundColor: GlobalStyles.Color.white,
  },
  text5: {
    lineHeight: 24,
    fontWeight: "500",
    fontFamily: GlobalStyles.FontFamily.roboto,
    color: GlobalStyles.Color.gray_1900,
    top: 0,
    left: 0,
    fontSize: GlobalStyles.FontSize.size_4xl,
  },
  time: {
    width: 40,
    top: 0,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
  batteryIcon: {
    width: 22,
    right: 0,
    position: "absolute",
  },
  wifiIcon: {
    right: 37,
    height: 12,
    marginTop: -3,
    width: 17,
    top: "50%",
  },
  networkChild: {
    height: 4,
    left: 0,
  },
  networkItem: {
    marginLeft: -3.5,
    left: "50%",
    height: 6,
  },
  networkInner: {
    marginLeft: 0.5,
    height: 9,
    left: "50%",
  },
  rectangleView: {
    top: 0,
    right: 0,
  },
  network: {
    right: 68,
  },
  statusBar: {
    marginTop: -15,
    left: 15,
    height: 26,
    top: "50%",
  },
  statusBarBlack: {
    height: 44,
    width: 375,
  },
  maskGroup236Wrapper: {
    width: 60,
    height: 47,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  component2221: {
    width: 110,
    height: 110,
  },
  hello: {
    textTransform: "uppercase",
    color: GlobalStyles.Color.gray_1600,
    fontFamily: GlobalStyles.FontFamily.helvetica,
  },
  component2231Child: {
    borderRadius: GlobalStyles.Border.br_lg,
  },
  settingsIcon: {
    marginTop: -10,
    marginLeft: -10,
    width: 20,
    left: "50%",
    top: "50%",
  },
  component2231: {
    width: 50,
    height: 50,
  },
  path33118Icon: {
    right: -60,
    bottom: -60,
    top: 0,
    left: 0,
  },
  groupInner: {
    height: "6.35%",
    width: "49.25%",
    top: "-62.13%",
    right: "53.94%",
    bottom: "155.78%",
    left: "-3.18%",
  },
  groupIcon: {
    height: "10.54%",
    width: "81.73%",
    top: "34.63%",
    right: "9.14%",
    bottom: "54.83%",
    left: "9.14%",
  },
  groupChild1: {
    height: "33.14%",
    width: "108.22%",
    top: "68.51%",
    right: "-3.68%",
    bottom: "-1.65%",
    left: "-4.55%",
    backgroundColor: GlobalStyles.Color.gray_1600,
    position: "absolute",
  },
  rectangleIcon: {
    height: "13.04%",
    width: "21.19%",
    top: "101.17%",
    right: "-91.6%",
    bottom: "-14.22%",
    left: "170.41%",
  },
  b: {
    top: "-2.38%",
    left: "-3.7%",
    fontSize: GlobalStyles.FontSize.size_15xl,
    letterSpacing: 5,
    color: GlobalStyles.Color.gray_1700,
    fontFamily: GlobalStyles.FontFamily.helvetica,
    textAlign: "left",
    position: "absolute",
  },
  bWrapper: {
    height: "32.12%",
    width: "31.27%",
    top: "76.67%",
    right: "65.31%",
    bottom: "-8.79%",
    left: "3.42%",
    opacity: 0.4,
    position: "absolute",
  },
  business: {
    top: "87.88%",
    left: "10.24%",
    fontSize: GlobalStyles.FontSize.size_2xs,
    color: GlobalStyles.Color.white,
    fontFamily: GlobalStyles.FontFamily.helvetica,
  },
  groupChild2: {
    top: 17,
    right: 15,
    width: 28,
    height: 30,
    position: "absolute",
  },
  groupChild3: {
    bottom: 21,
    width: 48,
    height: 41,
  },
  groupChild4: {
    marginLeft: 25.31,
    top: 21,
    height: 22,
    left: "50%",
  },
  card1: {
    width: 173,
    height: 262,
  },
  myCards: {
    backgroundColor: GlobalStyles.Color.gray_1100,
    flex: 1,
    alignItems: "center",
    width: "100%",
  },
});

export default MyCards;
