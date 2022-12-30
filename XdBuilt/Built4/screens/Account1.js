import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import GlobalStyles from "../GlobalStyles";

const Account1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.account1}>
      <View style={styles.account1Child} />
      <View style={[styles.statusBarBlack, styles.mt_812]}>
        <View style={styles.rectangle} />
        <View style={styles.statusBar}>
          <View style={styles.time}>
            <Text style={[styles.text, styles.textTypo2]}>9:41</Text>
          </View>
          <Image
            style={[styles.batteryIcon, styles.networkPosition]}
            resizeMode="cover"
            source={require("../assets/icon-awesomebatterythreequarters.png")}
          />
          <Image
            style={[styles.wifiIcon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/icon-awesomewifi.png")}
          />
          <View
            style={[styles.network, styles.iconLayout, styles.networkPosition]}
          >
            <View style={[styles.networkChild, styles.networkLayout]} />
            <View style={[styles.networkItem, styles.networkLayout]} />
            <View style={[styles.networkInner, styles.networkLayout]} />
            <View style={[styles.rectangleView, styles.networkLayout]} />
          </View>
        </View>
      </View>
      <Text
        style={[
          styles.hello,
          styles.mt14,
          styles.ml30,
          styles.helloColor,
          styles.textTypo2,
        ]}
      >
        Statements
      </Text>
      <Pressable
        style={[styles.iconFeatherArrowLeftWrapper, styles.mt2]}
        onPress={() => navigation.navigate("Account3")}
      >
        <Image
          style={[styles.iconFeatherArrowLeft, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/icon-featherarrowleft.png")}
        />
      </Pressable>
      <View style={[styles.homeIndicator, styles.mt_61, styles.ml121]} />
      <View style={[styles.component2208Parent, styles.mt26, styles.ml28]}>
        <View style={[styles.component2208, styles.componentPosition]}>
          <View style={styles.groupParent}>
            <View style={[styles.groupContainer, styles.groupShadowBox]}>
              <View style={styles.lanceBogrolParent}>
                <Text
                  style={[
                    styles.lanceBogrol,
                    styles.lanceBogrolTypo,
                    styles.helloColor,
                  ]}
                >
                  Grocery Market
                </Text>
                <Text style={[styles.moneyTransfer, styles.lanceBogrolTypo]}>
                  <Text style={styles.september222022}>September 22, 2022</Text>
                  <Text style={styles.september222022}>12:06 PM</Text>
                </Text>
              </View>
              <Text style={[styles.text1, styles.textTypo, styles.textTypo1]}>
                - £70.00
              </Text>
              <Image
                style={styles.maskGroup14}
                resizeMode="cover"
                source={require("../assets/mask-group-1411.png")}
              />
            </View>
            <View style={[styles.groupView, styles.groupParentShadowBox]}>
              <View style={[styles.lanceBogrolGroup, styles.lancePosition]}>
                <Text
                  style={[
                    styles.lanceBogrol,
                    styles.lanceBogrolTypo,
                    styles.helloColor,
                  ]}
                >
                  Grocery Market
                </Text>
                <Text style={[styles.moneyTransfer, styles.lanceBogrolTypo]}>
                  <Text style={styles.september222022}>September 22, 2022</Text>
                  <Text style={styles.september222022}>12:06 PM</Text>
                </Text>
              </View>
              <Text style={[styles.text1, styles.textTypo, styles.textTypo1]}>
                - £70.00
              </Text>
              <Image
                style={styles.maskGroup141}
                resizeMode="cover"
                source={require("../assets/mask-group-1412.png")}
              />
            </View>
            <View style={[styles.groupParent1, styles.groupShadowBox]}>
              <View style={[styles.lanceBogrolContainer, styles.lancePosition]}>
                <Text
                  style={[
                    styles.lanceBogrol,
                    styles.lanceBogrolTypo,
                    styles.helloColor,
                  ]}
                >
                  Grocery Market
                </Text>
                <Text style={[styles.moneyTransfer, styles.lanceBogrolTypo]}>
                  <Text style={styles.september222022}>September 22, 2022</Text>
                  <Text style={styles.september222022}>12:06 PM</Text>
                </Text>
              </View>
              <Text style={[styles.text3, styles.textTypo, styles.textTypo1]}>
                - £70.00
              </Text>
              <Image
                style={styles.maskGroup141}
                resizeMode="cover"
                source={require("../assets/mask-group-1412.png")}
              />
            </View>
            <View style={[styles.groupParent2, styles.groupParentShadowBox]}>
              <View style={[styles.lanceBogrolParent1, styles.lancePosition]}>
                <Text
                  style={[
                    styles.lanceBogrol,
                    styles.lanceBogrolTypo,
                    styles.helloColor,
                  ]}
                >
                  Spotify Music
                </Text>
                <Text style={[styles.moneyTransfer, styles.lanceBogrolTypo]}>
                  <Text style={styles.september222022}>September 22, 2022</Text>
                  <Text style={styles.september222022}>12:06 PM</Text>
                </Text>
              </View>
              <Text style={[styles.text3, styles.textTypo, styles.textTypo1]}>
                - £50.00
              </Text>
              <Image
                style={[styles.maskGroup16, styles.groupPosition]}
                resizeMode="cover"
                source={require("../assets/mask-group-16.png")}
              />
            </View>
            <View style={[styles.groupParent3, styles.groupParentShadowBox]}>
              <View style={[styles.lanceBogrolParent1, styles.lancePosition]}>
                <Text
                  style={[
                    styles.lanceBogrol,
                    styles.lanceBogrolTypo,
                    styles.helloColor,
                  ]}
                >
                  Lance Bogrol
                </Text>
                <Text style={[styles.moneyTransfer, styles.lanceBogrolTypo]}>
                  <Text style={styles.september222022}>September 22, 2022</Text>
                  <Text style={styles.september222022}>12:06 PM</Text>
                </Text>
              </View>
              <Text style={[styles.text5, styles.textTypo]}>+ £350.00</Text>
              <Image
                style={[styles.groupChild, styles.groupPosition]}
                resizeMode="cover"
                source={require("../assets/rectangle-502.png")}
              />
            </View>
          </View>
        </View>
        <View style={[styles.component2209, styles.componentPosition]}>
          <View style={styles.groupParent}>
            <View style={[styles.groupContainer, styles.groupShadowBox]}>
              <View style={styles.lanceBogrolParent}>
                <Text
                  style={[
                    styles.lanceBogrol,
                    styles.lanceBogrolTypo,
                    styles.helloColor,
                  ]}
                >
                  Grocery Market
                </Text>
                <Text style={[styles.moneyTransfer, styles.lanceBogrolTypo]}>
                  <Text style={styles.september222022}>September 22, 2022</Text>
                  <Text style={styles.september222022}>12:06 PM</Text>
                </Text>
              </View>
              <Text style={[styles.text1, styles.textTypo, styles.textTypo1]}>
                - £70.00
              </Text>
              <Image
                style={styles.maskGroup14}
                resizeMode="cover"
                source={require("../assets/mask-group-1411.png")}
              />
            </View>
            <View style={[styles.groupView, styles.groupParentShadowBox]}>
              <View style={[styles.lanceBogrolGroup, styles.lancePosition]}>
                <Text
                  style={[
                    styles.lanceBogrol,
                    styles.lanceBogrolTypo,
                    styles.helloColor,
                  ]}
                >
                  Grocery Market
                </Text>
                <Text style={[styles.moneyTransfer, styles.lanceBogrolTypo]}>
                  <Text style={styles.september222022}>September 22, 2022</Text>
                  <Text style={styles.september222022}>12:06 PM</Text>
                </Text>
              </View>
              <Text style={[styles.text1, styles.textTypo, styles.textTypo1]}>
                - £70.00
              </Text>
              <Image
                style={styles.maskGroup141}
                resizeMode="cover"
                source={require("../assets/mask-group-1412.png")}
              />
            </View>
            <View style={[styles.groupParent1, styles.groupShadowBox]}>
              <View style={[styles.lanceBogrolContainer, styles.lancePosition]}>
                <Text
                  style={[
                    styles.lanceBogrol,
                    styles.lanceBogrolTypo,
                    styles.helloColor,
                  ]}
                >
                  Grocery Market
                </Text>
                <Text style={[styles.moneyTransfer, styles.lanceBogrolTypo]}>
                  <Text style={styles.september222022}>September 22, 2022</Text>
                  <Text style={styles.september222022}>12:06 PM</Text>
                </Text>
              </View>
              <Text style={[styles.text3, styles.textTypo, styles.textTypo1]}>
                - £70.00
              </Text>
              <Image
                style={styles.maskGroup141}
                resizeMode="cover"
                source={require("../assets/mask-group-1412.png")}
              />
            </View>
            <View style={[styles.groupParent2, styles.groupParentShadowBox]}>
              <View style={[styles.lanceBogrolParent1, styles.lancePosition]}>
                <Text
                  style={[
                    styles.lanceBogrol,
                    styles.lanceBogrolTypo,
                    styles.helloColor,
                  ]}
                >
                  Spotify Music
                </Text>
                <Text style={[styles.moneyTransfer, styles.lanceBogrolTypo]}>
                  <Text style={styles.september222022}>September 22, 2022</Text>
                  <Text style={styles.september222022}>12:06 PM</Text>
                </Text>
              </View>
              <Text style={[styles.text3, styles.textTypo, styles.textTypo1]}>
                - £50.00
              </Text>
              <Image
                style={[styles.maskGroup16, styles.groupPosition]}
                resizeMode="cover"
                source={require("../assets/mask-group-16.png")}
              />
            </View>
            <View style={[styles.groupParent3, styles.groupParentShadowBox]}>
              <View style={[styles.lanceBogrolParent1, styles.lancePosition]}>
                <Text
                  style={[
                    styles.lanceBogrol,
                    styles.lanceBogrolTypo,
                    styles.helloColor,
                  ]}
                >
                  Lance Bogrol
                </Text>
                <Text style={[styles.moneyTransfer, styles.lanceBogrolTypo]}>
                  <Text style={styles.september222022}>September 22, 2022</Text>
                  <Text style={styles.september222022}>12:06 PM</Text>
                </Text>
              </View>
              <Text style={[styles.text5, styles.textTypo]}>+ £350.00</Text>
              <Image
                style={[styles.groupChild, styles.groupPosition]}
                resizeMode="cover"
                source={require("../assets/rectangle-502.png")}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mt_812: {
    marginTop: GlobalStyles.Margin.margin_90xs,
  },
  mt14: {
    marginTop: GlobalStyles.Margin.margin_20xs,
  },
  ml30: {
    marginLeft: GlobalStyles.Margin.margin_sm,
  },
  mt2: {
    marginTop: GlobalStyles.Margin.margin_31xs,
  },
  mt_61: {
    marginTop: GlobalStyles.Margin.margin_67xs,
  },
  ml121: {
    marginLeft: GlobalStyles.Margin.margin_54xl,
  },
  mt26: {
    marginTop: GlobalStyles.Margin.margin_6xs,
  },
  ml28: {
    marginLeft: GlobalStyles.Margin.margin_3xs,
  },
  textTypo2: {
    textAlign: "left",
    fontSize: GlobalStyles.FontSize.size_4xl,
  },
  networkPosition: {
    height: 11,
    marginTop: -3,
    top: "50%",
  },
  iconLayout: {
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
  helloColor: {
    color: GlobalStyles.Color.indigo,
    fontWeight: "700",
  },
  componentPosition: {
    height: 347,
    left: 0,
    right: 0,
    position: "absolute",
  },
  groupShadowBox: {
    height: 66,
    elevation: 20,
    shadowRadius: 20,
    shadowColor: "rgba(1, 1, 253, 0.1)",
    borderRadius: GlobalStyles.Border.br_4xl,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    position: "absolute",
    backgroundColor: GlobalStyles.Color.white,
  },
  lanceBogrolTypo: {
    fontFamily: GlobalStyles.FontFamily.helvetica,
    letterSpacing: 1,
    textAlign: "left",
    left: 0,
    position: "absolute",
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
    elevation: 20,
    shadowRadius: 20,
    shadowColor: "rgba(1, 1, 253, 0.1)",
    borderRadius: GlobalStyles.Border.br_4xl,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    left: 0,
    right: 0,
    position: "absolute",
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
  account1Child: {
    height: 812,
    width: 375,
    backgroundColor: GlobalStyles.Color.gray_300,
  },
  rectangle: {
    shadowColor: "rgba(0, 0, 0, 0.05)",
    shadowRadius: 6,
    elevation: 6,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    left: 0,
    bottom: 0,
    right: 0,
    top: 0,
    position: "absolute",
    backgroundColor: GlobalStyles.Color.white,
  },
  text: {
    letterSpacing: 0,
    lineHeight: 24,
    fontWeight: "500",
    fontFamily: GlobalStyles.FontFamily.roboto,
    color: GlobalStyles.Color.gray_1900,
    left: 0,
    top: 0,
    position: "absolute",
  },
  time: {
    width: 40,
    left: 0,
    bottom: 0,
    top: 0,
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
    height: 6,
    left: "50%",
  },
  networkInner: {
    marginLeft: 0.5,
    height: 9,
    left: "50%",
  },
  rectangleView: {
    right: 0,
    top: 0,
  },
  network: {
    right: 68,
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
  hello: {
    fontFamily: GlobalStyles.FontFamily.typoGrotesk,
  },
  iconFeatherArrowLeft: {
    marginLeft: -0.5,
    bottom: 4,
    height: 17,
    left: "50%",
  },
  iconFeatherArrowLeftWrapper: {
    width: 55,
    height: 45,
    backgroundColor: GlobalStyles.Color.gray_300,
  },
  homeIndicator: {
    borderRadius: GlobalStyles.Border.br_8xl,
    backgroundColor: GlobalStyles.Color.black,
    width: 134,
    height: 5,
  },
  lanceBogrol: {
    fontSize: GlobalStyles.FontSize.size_xs,
    top: 0,
  },
  september222022: {
    margin: GlobalStyles.Margin.margin_33xs,
  },
  moneyTransfer: {
    fontSize: GlobalStyles.FontSize.size_3xs,
    color: GlobalStyles.Color.gray_1000,
    bottom: 0,
  },
  lanceBogrolParent: {
    top: 15,
    bottom: 14,
    left: 66,
    width: 105,
    position: "absolute",
  },
  text1: {
    marginLeft: 77.5,
    left: "50%",
  },
  maskGroup14: {
    top: 16,
    bottom: 16,
    maxHeight: "100%",
    width: 34,
    left: 12,
    position: "absolute",
  },
  groupContainer: {
    marginLeft: -162.5,
    width: 325,
    left: "50%",
    bottom: 0,
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
  groupView: {
    bottom: 72,
  },
  lanceBogrolContainer: {
    marginTop: -19,
    top: "50%",
  },
  text3: {
    right: 27,
  },
  groupParent1: {
    bottom: 141,
    left: 0,
    right: 0,
  },
  lanceBogrolParent1: {
    marginTop: -18,
    top: "50%",
  },
  maskGroup16: {
    marginTop: -17,
    left: 14,
  },
  groupParent2: {
    marginTop: -103.5,
    top: "50%",
  },
  text5: {
    right: 29,
    color: GlobalStyles.Color.turquoise,
    textAlign: "right",
    fontSize: GlobalStyles.FontSize.size_base,
    marginTop: -8,
  },
  groupChild: {
    marginTop: -16,
    borderRadius: GlobalStyles.Border.br_xs,
  },
  groupParent3: {
    top: 0,
  },
  groupParent: {
    left: 0,
    bottom: 0,
    right: 0,
    top: 0,
    position: "absolute",
  },
  component2208: {
    top: 0,
  },
  component2209: {
    bottom: 0,
  },
  component2208Parent: {
    height: 702,
    width: 325,
  },
  account1: {
    flex: 1,
    width: "100%",
    backgroundColor: GlobalStyles.Color.white,
  },
});

export default Account1;
