import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import GlobalStyles from "../GlobalStyles";

const Account1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.account1}>
      <View style={styles.account1Child} />
      <Text style={[styles.hello, styles.mt14, styles.ml30]}>Statements</Text>
      <Pressable
        style={[styles.iconFeatherArrowLeftWrapper, styles.mt_766]}
        onPress={() => navigation.navigate("Account")}
      >
        <Image
          style={styles.iconFeatherArrowLeft}
          resizeMode="cover"
          source={require("../assets/icon-featherarrowleft.png")}
        />
      </Pressable>
      <View style={[styles.homeIndicator, styles.mt_61, styles.ml121]} />
      <View style={[styles.component2208Parent, styles.mt26, styles.ml28]}>
        <View style={[styles.component2208, styles.componentPosition]}>
          <View style={[styles.groupParent, styles.groupParentPosition]}>
            <View style={[styles.groupContainer, styles.groupShadowBox]}>
              <View style={styles.lanceBogrolParent}>
                <Text style={[styles.lanceBogrol, styles.lanceBogrolTypo]}>
                  Grocery Market
                </Text>
                <Text style={[styles.moneyTransfer, styles.lanceBogrolTypo]}>
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
                source={require("../assets/mask-group-148.png")}
              />
            </View>
            <View style={[styles.groupView, styles.groupParentShadowBox]}>
              <View style={[styles.lanceBogrolGroup, styles.lancePosition]}>
                <Text style={[styles.lanceBogrol, styles.lanceBogrolTypo]}>
                  Grocery Market
                </Text>
                <Text style={[styles.moneyTransfer, styles.lanceBogrolTypo]}>
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
                source={require("../assets/mask-group-149.png")}
              />
            </View>
            <View
              style={[
                styles.groupParent1,
                styles.groupShadowBox,
                styles.groupParentPosition,
              ]}
            >
              <View style={[styles.lanceBogrolContainer, styles.lancePosition]}>
                <Text style={[styles.lanceBogrol, styles.lanceBogrolTypo]}>
                  Grocery Market
                </Text>
                <Text style={[styles.moneyTransfer, styles.lanceBogrolTypo]}>
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
                source={require("../assets/mask-group-149.png")}
              />
            </View>
            <View style={[styles.groupParent2, styles.groupParentShadowBox]}>
              <View style={[styles.lanceBogrolParent1, styles.lancePosition]}>
                <Text style={[styles.lanceBogrol, styles.lanceBogrolTypo]}>
                  Spotify Music
                </Text>
                <Text style={[styles.moneyTransfer, styles.lanceBogrolTypo]}>
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
            <View style={[styles.groupParent3, styles.groupParentShadowBox]}>
              <View style={[styles.lanceBogrolParent1, styles.lancePosition]}>
                <Text style={[styles.lanceBogrol, styles.lanceBogrolTypo]}>
                  Lance Bogrol
                </Text>
                <Text style={[styles.moneyTransfer, styles.lanceBogrolTypo]}>
                  <Text style={styles.september222022}>September 22, 2022</Text>
                  <Text style={styles.september222022}>12:06 PM</Text>
                </Text>
              </View>
              <Text style={[styles.text4, styles.textTypo]}>+ £350.00</Text>
              <Image
                style={[styles.groupChild, styles.groupPosition]}
                resizeMode="cover"
                source={require("../assets/rectangle-502.png")}
              />
            </View>
          </View>
        </View>
        <View style={[styles.component2209, styles.componentPosition]}>
          <View style={[styles.groupParent, styles.groupParentPosition]}>
            <View style={[styles.groupContainer, styles.groupShadowBox]}>
              <View style={styles.lanceBogrolParent}>
                <Text style={[styles.lanceBogrol, styles.lanceBogrolTypo]}>
                  Grocery Market
                </Text>
                <Text style={[styles.moneyTransfer, styles.lanceBogrolTypo]}>
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
                source={require("../assets/mask-group-148.png")}
              />
            </View>
            <View style={[styles.groupView, styles.groupParentShadowBox]}>
              <View style={[styles.lanceBogrolGroup, styles.lancePosition]}>
                <Text style={[styles.lanceBogrol, styles.lanceBogrolTypo]}>
                  Grocery Market
                </Text>
                <Text style={[styles.moneyTransfer, styles.lanceBogrolTypo]}>
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
                source={require("../assets/mask-group-149.png")}
              />
            </View>
            <View
              style={[
                styles.groupParent1,
                styles.groupShadowBox,
                styles.groupParentPosition,
              ]}
            >
              <View style={[styles.lanceBogrolContainer, styles.lancePosition]}>
                <Text style={[styles.lanceBogrol, styles.lanceBogrolTypo]}>
                  Grocery Market
                </Text>
                <Text style={[styles.moneyTransfer, styles.lanceBogrolTypo]}>
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
                source={require("../assets/mask-group-149.png")}
              />
            </View>
            <View style={[styles.groupParent2, styles.groupParentShadowBox]}>
              <View style={[styles.lanceBogrolParent1, styles.lancePosition]}>
                <Text style={[styles.lanceBogrol, styles.lanceBogrolTypo]}>
                  Spotify Music
                </Text>
                <Text style={[styles.moneyTransfer, styles.lanceBogrolTypo]}>
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
            <View style={[styles.groupParent3, styles.groupParentShadowBox]}>
              <View style={[styles.lanceBogrolParent1, styles.lancePosition]}>
                <Text style={[styles.lanceBogrol, styles.lanceBogrolTypo]}>
                  Lance Bogrol
                </Text>
                <Text style={[styles.moneyTransfer, styles.lanceBogrolTypo]}>
                  <Text style={styles.september222022}>September 22, 2022</Text>
                  <Text style={styles.september222022}>12:06 PM</Text>
                </Text>
              </View>
              <Text style={[styles.text4, styles.textTypo]}>+ £350.00</Text>
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
  mt14: {
    marginTop: GlobalStyles.Margin.margin_9xs,
  },
  ml30: {
    marginLeft: GlobalStyles.Margin.margin_8xl,
  },
  mt_766: {
    marginTop: GlobalStyles.Margin.margin_59xs,
  },
  mt_61: {
    marginTop: GlobalStyles.Margin.margin_46xs,
  },
  ml121: {
    marginLeft: GlobalStyles.Margin.margin_46xl,
  },
  mt26: {
    marginTop: GlobalStyles.Margin.margin_4xl,
  },
  ml28: {
    marginLeft: GlobalStyles.Margin.margin_6xl,
  },
  componentPosition: {
    height: 347,
    left: 0,
    right: 0,
    position: "absolute",
  },
  groupParentPosition: {
    left: 0,
    right: 0,
  },
  groupShadowBox: {
    height: 66,
    shadowOpacity: 1,
    elevation: 20,
    shadowRadius: 20,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(1, 1, 253, 0.1)",
    borderRadius: GlobalStyles.Border.br_3xl,
    position: "absolute",
    backgroundColor: GlobalStyles.Color.white,
  },
  lanceBogrolTypo: {
    fontFamily: GlobalStyles.FontFamily.helvetica,
    letterSpacing: 1,
    left: 0,
    position: "absolute",
    textAlign: "left",
  },
  textTypo: {
    textAlign: "right",
    fontSize: GlobalStyles.FontSize.size_sm,
    marginTop: -8,
    top: "50%",
    fontFamily: GlobalStyles.FontFamily.helvetica,
    letterSpacing: 1,
    position: "absolute",
    fontWeight: "700",
  },
  textTypo1: {
    color: GlobalStyles.Color.brown,
    textAlign: "right",
    fontSize: GlobalStyles.FontSize.size_sm,
    marginTop: -8,
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
    shadowColor: "rgba(1, 1, 253, 0.1)",
    borderRadius: GlobalStyles.Border.br_3xl,
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
    width: 375,
    height: 812,
    backgroundColor: GlobalStyles.Color.gray_300,
  },
  hello: {
    fontSize: GlobalStyles.FontSize.size_2xl,
    fontFamily: GlobalStyles.FontFamily.typoGrotesk,
    textAlign: "left",
    color: GlobalStyles.Color.indigo,
    fontWeight: "700",
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
  homeIndicator: {
    borderRadius: GlobalStyles.Border.br_7xl,
    backgroundColor: GlobalStyles.Color.black,
    width: 134,
    height: 5,
  },
  lanceBogrol: {
    fontSize: GlobalStyles.FontSize.size_2xs,
    top: 0,
    color: GlobalStyles.Color.indigo,
    fontWeight: "700",
    fontFamily: GlobalStyles.FontFamily.helvetica,
    letterSpacing: 1,
  },
  september222022: {
    margin: GlobalStyles.Margin.margin_25xs,
  },
  moneyTransfer: {
    fontSize: GlobalStyles.FontSize.size_4xs,
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
  text: {
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
  groupView: {
    bottom: 72,
  },
  lanceBogrolContainer: {
    marginTop: -19,
    top: "50%",
  },
  text2: {
    right: 27,
  },
  groupParent1: {
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
  groupParent2: {
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
  groupChild: {
    marginTop: -16,
    borderRadius: GlobalStyles.Border.br_2xs,
  },
  groupParent3: {
    top: 0,
  },
  groupParent: {
    bottom: 0,
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
