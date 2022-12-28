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
          styles.mt_906_9,
          styles.groupParentShadowBox1,
        ]}
        onPress={() => navigation.navigate("Account3")}
      >
        <View style={styles.rectangleParent}>
          <View style={styles.childPosition} />
          <Image
            style={styles.iconIonicIosArrowForward}
            resizeMode="cover"
            source={require("../assets/icon-ioniciosarrowforward1.png")}
          />
        </View>
        <Text style={[styles.myCards1, styles.historyTypo]}>My Cards</Text>
      </Pressable>
      <View style={[styles.historyParent, styles.mt37_099999999999994]}>
        <Text
          style={[styles.history, styles.historyPosition, styles.historyTypo]}
        >
          Recent Transactions
        </Text>
        <Image
          style={[styles.path23663Icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/path-23663.png")}
        />
        <View style={[styles.component2206, styles.groupPosition1]}>
          <View style={[styles.groupContainer, styles.groupPosition1]}>
            <View style={[styles.groupView, styles.groupShadowBox]}>
              <View style={styles.lanceBogrolParent}>
                <Text
                  style={[
                    styles.lanceBogrol,
                    styles.bTypo,
                    styles.helloTypo,
                    styles.historyPosition,
                  ]}
                >
                  Grocery Market
                </Text>
                <Text
                  style={[
                    styles.moneyTransfer,
                    styles.bTypo,
                    styles.historyPosition,
                  ]}
                >
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
                    styles.bTypo,
                    styles.helloTypo,
                    styles.historyPosition,
                  ]}
                >
                  Grocery Market
                </Text>
                <Text
                  style={[
                    styles.moneyTransfer,
                    styles.bTypo,
                    styles.historyPosition,
                  ]}
                >
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
                source={require("../assets/mask-group-141.png")}
              />
            </View>
            <View
              style={[
                styles.groupParent2,
                styles.groupShadowBox,
                styles.groupPosition1,
              ]}
            >
              <View style={[styles.lanceBogrolContainer, styles.lancePosition]}>
                <Text
                  style={[
                    styles.lanceBogrol,
                    styles.bTypo,
                    styles.helloTypo,
                    styles.historyPosition,
                  ]}
                >
                  Grocery Market
                </Text>
                <Text
                  style={[
                    styles.moneyTransfer,
                    styles.bTypo,
                    styles.historyPosition,
                  ]}
                >
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
                source={require("../assets/mask-group-141.png")}
              />
            </View>
            <View style={[styles.groupParent3, styles.groupParentShadowBox]}>
              <View style={[styles.lanceBogrolParent1, styles.lancePosition]}>
                <Text
                  style={[
                    styles.lanceBogrol,
                    styles.bTypo,
                    styles.helloTypo,
                    styles.historyPosition,
                  ]}
                >
                  Spotify Music
                </Text>
                <Text
                  style={[
                    styles.moneyTransfer,
                    styles.bTypo,
                    styles.historyPosition,
                  ]}
                >
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
                    styles.bTypo,
                    styles.helloTypo,
                    styles.historyPosition,
                  ]}
                >
                  Lance Bogrol
                </Text>
                <Text
                  style={[
                    styles.moneyTransfer,
                    styles.bTypo,
                    styles.historyPosition,
                  ]}
                >
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
      <View style={[styles.maskGroup236Wrapper, styles.mt66_1, styles.mr221]}>
        <View style={[styles.groupContainer, styles.groupPosition1]} />
      </View>
      <View
        style={[
          styles.maskGroup236Wrapper,
          styles.mt_46_900000000000006,
          styles.ml1,
        ]}
      >
        <View style={[styles.groupContainer, styles.groupPosition1]} />
      </View>
      <View
        style={[
          styles.maskGroup236Wrapper,
          styles.mt_46_900000000000006,
          styles.ml241,
        ]}
      >
        <View style={[styles.groupContainer, styles.groupPosition1]} />
      </View>
      <Pressable
        style={[
          styles.component2221,
          styles.mt_41_900000000000006,
          styles.mr59,
        ]}
        onPress={() => navigation.navigate("SendEnterPIN1")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/component-222--1.png")}
        />
      </Pressable>
      <Text
        style={[
          styles.hello,
          styles.mt12_099999999999994,
          styles.mr120,
          styles.bTypo,
          styles.helloTypo,
        ]}
      >
        FREEZE
      </Text>
      <Pressable
        style={[styles.component2231, styles.mt_109_9, styles.ml111]}
        onPress={() => navigation.navigate("CardSettings")}
      >
        <View
          style={[
            styles.component2231Child,
            styles.childPosition,
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
        style={[
          styles.hello,
          styles.mt_13_900000000000006,
          styles.ml111,
          styles.bTypo,
          styles.helloTypo,
        ]}
      >
        SETTINGS
      </Text>
      <View style={[styles.card1, styles.mt_875_9]}>
        <View style={[styles.groupContainer, styles.groupPosition1]}>
          <View style={[styles.groupContainer, styles.groupPosition1]}>
            <Image
              style={[styles.path33118Icon, styles.groupIconLayout]}
              resizeMode="cover"
              source={require("../assets/path-33118.png")}
            />
            <View style={[styles.groupContainer, styles.groupPosition1]}>
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
              <View style={styles.rectangleView} />
              <Image
                style={[styles.rectangleIcon, styles.groupIconLayout]}
                resizeMode="cover"
                source={require("../assets/rectangle-26204.png")}
              />
              <View style={styles.bWrapper}>
                <Text style={[styles.b, styles.bTypo, styles.bTypo1]}>B</Text>
              </View>
              <Text style={[styles.business, styles.bTypo, styles.bTypo1]}>
                BUSINESS
              </Text>
            </View>
          </View>
          <Image
            style={styles.groupChild1}
            resizeMode="cover"
            source={require("../assets/group-31764.png")}
          />
          <Image
            style={styles.groupChild2}
            resizeMode="cover"
            source={require("../assets/group-31766.png")}
          />
          <Image
            style={styles.groupChild3}
            resizeMode="cover"
            source={require("../assets/group-31767.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mt_906_9: {
    marginTop: -906.9,
  },
  mt37_099999999999994: {
    marginTop: 37.099999999999994,
  },
  mt66_1: {
    marginTop: 66.1,
  },
  mr221: {
    marginRight: 221,
  },
  mt_46_900000000000006: {
    marginTop: GlobalStyles.Margin.margin_41xs,
  },
  ml1: {
    marginLeft: GlobalStyles.Margin.margin_24xs,
  },
  ml241: {
    marginLeft: GlobalStyles.Margin.margin_54xl,
  },
  mt_41_900000000000006: {
    marginTop: -41.900000000000006,
  },
  mr59: {
    marginRight: 59,
  },
  mt12_099999999999994: {
    marginTop: GlobalStyles.Margin.margin_11xs,
  },
  mr120: {
    marginRight: 120,
  },
  mt_109_9: {
    marginTop: -109.9,
  },
  ml111: {
    marginLeft: GlobalStyles.Margin.margin_45xl,
  },
  mt_13_900000000000006: {
    marginTop: -13.900000000000006,
  },
  mt_875_9: {
    marginTop: -875.9,
  },
  groupParentShadowBox1: {
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
  historyTypo: {
    textAlign: "left",
    fontFamily: GlobalStyles.FontFamily.typoGrotesk,
    color: GlobalStyles.Color.indigo,
    fontWeight: "700",
  },
  historyPosition: {
    letterSpacing: 1,
    position: "absolute",
  },
  iconLayout: {
    height: 20,
    position: "absolute",
  },
  groupPosition1: {
    right: 0,
    left: 0,
  },
  groupShadowBox: {
    height: 66,
    borderRadius: GlobalStyles.Border.br_3xl,
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
  bTypo: {
    fontFamily: GlobalStyles.FontFamily.helvetica,
    textAlign: "left",
  },
  helloTypo: {
    fontSize: GlobalStyles.FontSize.size_2xs,
    fontFamily: GlobalStyles.FontFamily.helvetica,
  },
  textTypo: {
    textAlign: "right",
    fontSize: GlobalStyles.FontSize.size_sm,
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
    fontSize: GlobalStyles.FontSize.size_sm,
    marginTop: -8,
  },
  groupParentShadowBox: {
    height: 64,
    borderRadius: GlobalStyles.Border.br_3xl,
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
  bTypo1: {
    fontWeight: "700",
    fontFamily: GlobalStyles.FontFamily.helvetica,
    position: "absolute",
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
    fontSize: GlobalStyles.FontSize.size_2xl,
    left: "50%",
    position: "absolute",
  },
  groupParent: {
    borderTopLeftRadius: GlobalStyles.Border.br_3xl,
    borderTopRightRadius: GlobalStyles.Border.br_3xl,
    height: 987,
    width: 375,
  },
  history: {
    marginTop: -193.5,
    left: "9.54%",
    fontSize: GlobalStyles.FontSize.size_xl,
    top: "50%",
  },
  path23663Icon: {
    top: 6,
    width: 19,
    left: 0,
  },
  lanceBogrol: {
    top: 0,
    left: 0,
    color: GlobalStyles.Color.indigo,
    fontSize: GlobalStyles.FontSize.size_2xs,
    letterSpacing: 1,
    fontWeight: "700",
  },
  september222022: {
    margin: GlobalStyles.Margin.margin_25xs,
  },
  moneyTransfer: {
    fontSize: GlobalStyles.FontSize.size_4xs,
    color: GlobalStyles.Color.gray_1000,
    bottom: 0,
    left: 0,
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
    fontSize: GlobalStyles.FontSize.size_sm,
    marginTop: -8,
  },
  groupItem: {
    marginTop: -16,
    borderRadius: GlobalStyles.Border.br_2xs,
  },
  groupParent4: {
    top: 0,
  },
  groupContainer: {
    top: 0,
    bottom: 0,
    position: "absolute",
  },
  component2206: {
    top: 40,
    bottom: 0,
    position: "absolute",
  },
  historyParent: {
    height: 387,
    width: 325,
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
    color: GlobalStyles.Color.gray_1500,
  },
  component2231Child: {
    borderRadius: GlobalStyles.Border.br_md,
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
  rectangleView: {
    height: "33.14%",
    width: "108.22%",
    top: "68.51%",
    right: "-3.68%",
    bottom: "-1.65%",
    left: "-4.55%",
    backgroundColor: GlobalStyles.Color.gray_1500,
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
    fontSize: GlobalStyles.FontSize.size_11xl,
    letterSpacing: 5,
    color: GlobalStyles.Color.gray_1600,
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
    fontSize: GlobalStyles.FontSize.size_3xs,
    letterSpacing: 0,
    color: GlobalStyles.Color.white,
  },
  groupChild1: {
    top: 17,
    right: 15,
    width: 28,
    height: 30,
    position: "absolute",
  },
  groupChild2: {
    right: 16,
    bottom: 21,
    width: 48,
    height: 41,
    position: "absolute",
  },
  groupChild3: {
    marginLeft: 25.31,
    top: 21,
    width: 17,
    height: 22,
    left: "50%",
    position: "absolute",
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
