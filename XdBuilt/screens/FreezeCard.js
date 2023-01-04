import * as React from "react";
import { StyleSheet, View, Image, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import GlobalStyles from "../GlobalStyles";

const FreezeCard = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.freezeCard}>
      <View style={styles.groupParent}>
        <Pressable
          style={[styles.groupContainer, styles.rectangleViewShadowBox]}
          onPress={() => navigation.navigate("Account3")}
        >
          <View style={styles.rectangleParent}>
            <View style={styles.groupChild} />
            <Image
              style={styles.iconIonicIosArrowForward}
              resizeMode="cover"
              source={require("../assets/icon-ioniciosarrowforward3.png")}
            />
          </View>
          <Text style={[styles.myCards, styles.myCardsTypo]}>My Cards</Text>
          <View style={styles.historyParent}>
            <Text style={[styles.history, styles.myCardsTypo]}>
              Recent Transactions
            </Text>
            <Image
              style={[styles.path23663Icon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/path-23339.png")}
            />
            <View style={[styles.groupView, styles.groupPosition2]}>
              <View style={[styles.groupParent1, styles.groupParentShadowBox1]}>
                <View style={[styles.lanceBogrolParent, styles.lancePosition]}>
                  <Text style={[styles.lanceBogrol, styles.bTypo]}>
                    Grocery Market
                  </Text>
                  <Text style={[styles.moneyTransfer, styles.bTypo]}>
                    <Text style={styles.september222022}>
                      September 22, 2022
                    </Text>
                    <Text style={styles.september222022}>12:06 PM</Text>
                  </Text>
                </View>
                <Text style={[styles.text, styles.textTypo]}>- £70.00</Text>
                <Image
                  style={styles.maskGroup14}
                  resizeMode="cover"
                  source={require("../assets/mask-group-146.png")}
                />
              </View>
              <View style={[styles.groupParent2, styles.groupParentShadowBox]}>
                <View style={[styles.lanceBogrolParent, styles.lancePosition]}>
                  <Text style={[styles.lanceBogrol, styles.bTypo]}>
                    Grocery Market
                  </Text>
                  <Text style={[styles.moneyTransfer, styles.bTypo]}>
                    <Text style={styles.september222022}>
                      September 22, 2022
                    </Text>
                    <Text style={styles.september222022}>12:06 PM</Text>
                  </Text>
                </View>
                <Text style={[styles.text, styles.textTypo]}>- £70.00</Text>
                <Image
                  style={styles.maskGroup14}
                  resizeMode="cover"
                  source={require("../assets/mask-group-147.png")}
                />
              </View>
              <View style={[styles.groupParent3, styles.groupParentShadowBox1]}>
                <View
                  style={[styles.lanceBogrolContainer, styles.lancePosition]}
                >
                  <Text style={[styles.lanceBogrol, styles.bTypo]}>
                    Grocery Market
                  </Text>
                  <Text style={[styles.moneyTransfer, styles.bTypo]}>
                    <Text style={styles.september222022}>
                      September 22, 2022
                    </Text>
                    <Text style={styles.september222022}>12:06 PM</Text>
                  </Text>
                </View>
                <Text style={[styles.text, styles.textTypo]}>- £70.00</Text>
                <Image
                  style={styles.maskGroup14}
                  resizeMode="cover"
                  source={require("../assets/mask-group-147.png")}
                />
              </View>
              <View style={[styles.groupParent4, styles.groupParentShadowBox]}>
                <View style={[styles.lanceBogrolParent, styles.lancePosition]}>
                  <Text style={[styles.lanceBogrol, styles.bTypo]}>
                    Spotify Music
                  </Text>
                  <Text style={[styles.moneyTransfer, styles.bTypo]}>
                    <Text style={styles.september222022}>
                      September 22, 2022
                    </Text>
                    <Text style={styles.september222022}>12:06 PM</Text>
                  </Text>
                </View>
                <Text style={[styles.text, styles.textTypo]}>- £50.00</Text>
                <Image
                  style={[styles.maskGroup16, styles.groupPosition1]}
                  resizeMode="cover"
                  source={require("../assets/mask-group-16.png")}
                />
              </View>
              <View style={[styles.groupParent5, styles.groupParentShadowBox]}>
                <View style={[styles.lanceBogrolParent, styles.lancePosition]}>
                  <Text style={[styles.lanceBogrol, styles.bTypo]}>
                    Lance Bogrol
                  </Text>
                  <Text style={[styles.moneyTransfer, styles.bTypo]}>
                    <Text style={styles.september222022}>
                      September 22, 2022
                    </Text>
                    <Text style={styles.september222022}>12:06 PM</Text>
                  </Text>
                </View>
                <Text style={[styles.text4, styles.textTypo]}>+ £350.00</Text>
                <Image
                  style={[styles.groupItem, styles.groupPosition1]}
                  resizeMode="cover"
                  source={require("../assets/rectangle-502.png")}
                />
              </View>
            </View>
          </View>
        </Pressable>
        <Pressable
          style={[styles.groupPressable, styles.groupPosition]}
          onPress={() => navigation.navigate("MyCards")}
        >
          <Image
            style={styles.groupInner}
            resizeMode="cover"
            source={require("../assets/group-32339.png")}
          />
          <Text style={[styles.hello, styles.helloTypo]}>FREEZE</Text>
        </Pressable>
        <Pressable
          style={[styles.rectangleGroup, styles.groupPosition]}
          onPress={() => navigation.navigate("CardSettings")}
        >
          <View style={[styles.rectangleView, styles.rectangleViewShadowBox]} />
          <Image
            style={[styles.settingsIcon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/settings.png")}
          />
        </Pressable>
        <Text style={[styles.hello1, styles.helloTypo]}>SETTINGS</Text>
        <View style={[styles.card1, styles.card1Position]}>
          <View style={[styles.groupParent6, styles.groupPosition2]}>
            <View style={[styles.groupParent6, styles.groupPosition2]}>
              <Image
                style={[styles.path33118Icon, styles.groupIconLayout]}
                resizeMode="cover"
                source={require("../assets/path-3311820.png")}
              />
              <View style={[styles.groupParent6, styles.groupPosition2]}>
                <Image
                  style={[styles.groupIcon, styles.groupIconLayout]}
                  resizeMode="cover"
                  source={require("../assets/group-3175920.png")}
                />
                <Image
                  style={[styles.groupChild1, styles.groupIconLayout]}
                  resizeMode="cover"
                  source={require("../assets/group-3176020.png")}
                />
                <View style={styles.groupChild2} />
                <Image
                  style={[styles.rectangleIcon, styles.groupIconLayout]}
                  resizeMode="cover"
                  source={require("../assets/rectangle-2620420.png")}
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
              style={styles.groupChild3}
              resizeMode="cover"
              source={require("../assets/group-3176420.png")}
            />
            <Image
              style={styles.groupChild4}
              resizeMode="cover"
              source={require("../assets/group-3176620.png")}
            />
            <Image
              style={styles.groupChild5}
              resizeMode="cover"
              source={require("../assets/group-3176720.png")}
            />
          </View>
        </View>
        <Image
          style={[styles.maskGroup25046, styles.card1Position]}
          resizeMode="cover"
          source={require("../assets/mask-group-25046.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rectangleViewShadowBox: {
    shadowOpacity: 1,
    elevation: 20,
    shadowRadius: 20,
    shadowOffset: {
      width: 0,
      height: -3,
    },
    shadowColor: "rgba(1, 1, 253, 0.1)",
    backgroundColor: GlobalStyles.Color.white,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  myCardsTypo: {
    textAlign: "left",
    color: GlobalStyles.Color.indigo_100,
    fontFamily: GlobalStyles.FontFamily.typoGrotesk,
    fontWeight: "700",
    position: "absolute",
  },
  iconLayout: {
    height: 20,
    position: "absolute",
  },
  groupPosition2: {
    right: 0,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
  groupParentShadowBox1: {
    height: 66,
    borderRadius: GlobalStyles.Border.br_4xl,
    right: 0,
    left: 0,
    shadowOpacity: 1,
    elevation: 20,
    shadowRadius: 20,
    shadowOffset: {
      width: 0,
      height: -3,
    },
    shadowColor: "rgba(1, 1, 253, 0.1)",
    backgroundColor: GlobalStyles.Color.white,
    position: "absolute",
  },
  lancePosition: {
    height: 36,
    width: 105,
    marginLeft: -96.5,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  bTypo: {
    fontFamily: GlobalStyles.FontFamily.helvetica,
    textAlign: "left",
    position: "absolute",
  },
  textTypo: {
    textAlign: "right",
    fontSize: GlobalStyles.FontSize.size_base,
    marginTop: -6,
    fontFamily: GlobalStyles.FontFamily.helvetica,
    letterSpacing: 1,
    fontWeight: "700",
    top: "50%",
    position: "absolute",
  },
  groupParentShadowBox: {
    height: 64,
    borderRadius: GlobalStyles.Border.br_4xl,
    right: 0,
    left: 0,
    shadowOpacity: 1,
    elevation: 20,
    shadowRadius: 20,
    shadowOffset: {
      width: 0,
      height: -3,
    },
    shadowColor: "rgba(1, 1, 253, 0.1)",
    backgroundColor: GlobalStyles.Color.white,
    position: "absolute",
  },
  groupPosition1: {
    left: 14,
    height: 34,
    width: 34,
    top: "50%",
    position: "absolute",
  },
  groupPosition: {
    width: 50,
    marginTop: -47.5,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  helloTypo: {
    color: GlobalStyles.Color.gray_1700,
    textTransform: "uppercase",
    fontFamily: GlobalStyles.FontFamily.helvetica,
    fontSize: GlobalStyles.FontSize.size_xs,
    textAlign: "left",
    position: "absolute",
  },
  card1Position: {
    height: 262,
    width: 173,
    top: 111,
    left: "50%",
    position: "absolute",
  },
  groupIconLayout: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  bTypo1: {
    fontWeight: "700",
    fontFamily: GlobalStyles.FontFamily.helvetica,
  },
  groupChild: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  iconIonicIosArrowForward: {
    marginTop: 0.59,
    left: 6,
    width: 11,
    height: 6,
    top: "50%",
    position: "absolute",
  },
  rectangleParent: {
    height: "2.75%",
    width: "88.8%",
    top: "1.09%",
    right: "5.6%",
    bottom: "96.16%",
    left: "5.6%",
    position: "absolute",
  },
  myCards: {
    marginLeft: -43.5,
    top: 36,
    fontSize: GlobalStyles.FontSize.size_4xl,
    left: "50%",
  },
  history: {
    marginTop: -191,
    left: "9.54%",
    fontSize: GlobalStyles.FontSize.size_2xl,
    letterSpacing: 1,
    top: "50%",
  },
  path23663Icon: {
    top: 1,
    width: 19,
    left: 0,
  },
  lanceBogrol: {
    fontSize: GlobalStyles.FontSize.size_xs,
    fontFamily: GlobalStyles.FontFamily.helvetica,
    top: 0,
    left: 0,
    letterSpacing: 1,
    color: GlobalStyles.Color.indigo_100,
    fontWeight: "700",
  },
  september222022: {
    margin: GlobalStyles.Margin.margin_8xs,
  },
  moneyTransfer: {
    fontSize: GlobalStyles.FontSize.size_3xs,
    color: GlobalStyles.Color.gray_900,
    bottom: 0,
    left: 0,
    letterSpacing: 1,
  },
  lanceBogrolParent: {
    marginTop: -16,
  },
  text: {
    right: 27,
    color: GlobalStyles.Color.brown,
  },
  maskGroup14: {
    left: 12,
    height: 34,
    width: 34,
    marginTop: -17,
    top: "50%",
    position: "absolute",
  },
  groupParent1: {
    bottom: 0,
  },
  groupParent2: {
    marginTop: 37.5,
    top: "50%",
  },
  lanceBogrolContainer: {
    marginTop: -17,
  },
  groupParent3: {
    marginTop: -33.5,
    top: "50%",
  },
  maskGroup16: {
    marginTop: -17,
  },
  groupParent4: {
    marginTop: -103.5,
    top: "50%",
  },
  text4: {
    right: 29,
    color: GlobalStyles.Color.turquoise,
  },
  groupItem: {
    borderRadius: GlobalStyles.Border.br_xs,
    marginTop: -16,
  },
  groupParent5: {
    top: 0,
  },
  groupView: {
    top: 35,
    bottom: 0,
  },
  historyParent: {
    right: 25,
    bottom: 39,
    left: 25,
    height: 382,
    position: "absolute",
  },
  groupContainer: {
    borderTopLeftRadius: GlobalStyles.Border.br_4xl,
    borderTopRightRadius: GlobalStyles.Border.br_4xl,
  },
  groupInner: {
    height: 110,
    overflow: "hidden",
    maxWidth: "100%",
    right: -60,
    top: 0,
    left: 0,
    position: "absolute",
  },
  hello: {
    top: "84.21%",
    left: "2%",
  },
  groupPressable: {
    marginLeft: -84.5,
    height: 76,
  },
  rectangleView: {
    borderRadius: GlobalStyles.Border.br_lg,
  },
  settingsIcon: {
    marginTop: -10,
    marginLeft: -10,
    width: 20,
    left: "50%",
    top: "50%",
  },
  rectangleGroup: {
    marginLeft: 30.5,
    height: 50,
  },
  hello1: {
    top: "51.68%",
    left: "56.8%",
  },
  path33118Icon: {
    bottom: -60,
    right: -60,
    maxHeight: "100%",
    top: 0,
    left: 0,
  },
  groupIcon: {
    height: "6.35%",
    width: "49.25%",
    top: "-62.13%",
    right: "53.94%",
    bottom: "155.78%",
    left: "-3.18%",
  },
  groupChild1: {
    height: "10.54%",
    width: "81.73%",
    top: "34.63%",
    right: "9.14%",
    bottom: "54.83%",
    left: "9.14%",
  },
  groupChild2: {
    height: "33.14%",
    width: "108.22%",
    top: "68.51%",
    right: "-3.68%",
    bottom: "-1.65%",
    left: "-4.55%",
    backgroundColor: GlobalStyles.Color.gray_1700,
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
    top: "-2.67%",
    left: "-3.7%",
    fontSize: GlobalStyles.FontSize.size_14xl,
    letterSpacing: 5,
    color: GlobalStyles.Color.gray_1900,
  },
  bWrapper: {
    height: "28.67%",
    width: "31.27%",
    top: "80.5%",
    right: "65.31%",
    bottom: "-9.17%",
    left: "3.42%",
    opacity: 0.4,
    position: "absolute",
  },
  business: {
    top: "88.65%",
    left: "10.24%",
    fontSize: GlobalStyles.FontSize.size_2xs,
    letterSpacing: 0,
    color: GlobalStyles.Color.white,
  },
  groupParent6: {
    top: 0,
    bottom: 0,
  },
  groupChild3: {
    top: 17,
    right: 15,
    width: 28,
    height: 30,
    position: "absolute",
  },
  groupChild4: {
    right: 16,
    bottom: 21,
    width: 48,
    height: 41,
    position: "absolute",
  },
  groupChild5: {
    marginLeft: 25.31,
    top: 21,
    width: 17,
    height: 22,
    left: "50%",
    position: "absolute",
  },
  card1: {
    marginLeft: -86.5,
  },
  maskGroup25046: {
    marginLeft: -86.35,
    opacity: 0.47,
  },
  groupParent: {
    width: 375,
    height: 983,
  },
  freezeCard: {
    backgroundColor: GlobalStyles.Color.gray_1100,
    flex: 1,
    paddingTop: GlobalStyles.Padding.padding_md,
    width: "100%",
  },
});

export default FreezeCard;
