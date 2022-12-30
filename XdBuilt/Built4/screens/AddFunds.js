import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import GlobalStyles from "../GlobalStyles";

const AddFunds = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.addFunds}
      onPress={() => navigation.navigate("Account")}
    >
      <View style={styles.addFundsChild} />
      <View
        style={[styles.addFundsItem, styles.mt19, styles.rectangleShadowBox]}
      />
      <Text style={[styles.hello, styles.mt17, styles.ml1, styles.textTypo]}>
        Add Funds
      </Text>
      <View style={[styles.groupParent, styles.mt88, styles.ml2]}>
        <View style={[styles.helloParent, styles.helloPosition1]}>
          <Text style={[styles.hello1, styles.helloColor, styles.helloTypo1]}>
            £20
          </Text>
          <Image
            style={[styles.groupChild, styles.groupPosition]}
            resizeMode="cover"
            source={require("../assets/group-30410.png")}
          />
        </View>
        <View style={[styles.helloGroup, styles.helloPosition1]}>
          <Text style={[styles.hello1, styles.helloColor, styles.helloTypo1]}>
            £50
          </Text>
          <Image
            style={[styles.groupItem, styles.groupPosition]}
            resizeMode="cover"
            source={require("../assets/group-304101.png")}
          />
        </View>
        <View style={styles.helloContainer}>
          <Text style={[styles.hello1, styles.helloColor, styles.helloTypo1]}>
            £100
          </Text>
          <Image
            style={[styles.groupInner, styles.groupPosition]}
            resizeMode="cover"
            source={require("../assets/group-30410.png")}
          />
        </View>
      </View>
      <View style={[styles.groupView, styles.mt105, styles.ml1]}>
        <Text style={[styles.hello4, styles.helloColor, styles.helloTypo1]}>
          Pay
        </Text>
        <Text style={[styles.hello5, styles.helloTypo1]}>£500</Text>
        <View style={[styles.lineView, styles.lineViewBorder]} />
      </View>
      <View style={[styles.helloParent1, styles.mt24, styles.ml1]}>
        <Text style={[styles.hello6, styles.helloTypo]}>Add a note</Text>
        <Image
          style={[styles.iconMaterialKeyboardVoice, styles.statusBarPosition]}
          resizeMode="cover"
          source={require("../assets/icon-materialkeyboardvoice.png")}
        />
      </View>
      <View
        style={[
          styles.addFundsInner,
          styles.mt_739,
          styles.mr2,
          styles.lineViewBorder,
        ]}
      />
      <View style={[styles.homeIndicator, styles.mt36, styles.ml1]} />
      <View style={[styles.statusBarBlack, styles.mt_811]}>
        <View style={[styles.rectangle, styles.rectangleShadowBox]} />
        <View style={[styles.statusBar, styles.statusBarPosition]}>
          <View style={styles.time}>
            <Text style={[styles.text, styles.textTypo]}>9:41</Text>
          </View>
          <Image
            style={[styles.batteryIcon, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/icon-awesomebatterythreequarters.png")}
          />
          <Image
            style={[styles.wifiIcon, styles.networkPosition]}
            resizeMode="cover"
            source={require("../assets/icon-awesomewifi.png")}
          />
          <View style={[styles.network, styles.networkPosition]}>
            <View style={[styles.networkChild, styles.networkLayout]} />
            <View style={[styles.networkItem, styles.networkLayout]} />
            <View style={[styles.networkInner, styles.networkLayout]} />
            <View style={[styles.rectangleView, styles.networkLayout]} />
          </View>
        </View>
      </View>
      <View style={[styles.component2071Parent, styles.mt32]}>
        <View style={styles.component2071}>
          <View style={[styles.component2071Child, styles.childLayout]} />
          <Image
            style={[styles.iconIonicIosArrowForward, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/icon-ioniciosarrowforward14.png")}
          />
        </View>
        <Text style={[styles.hello7, styles.helloTypo]}>Select Account</Text>
        <View style={styles.helloParent2}>
          <Text
            style={[styles.hello8, styles.helloPosition, styles.helloColor]}
          >
            XYZ Card
          </Text>
          <Text style={[styles.hello9, styles.helloPosition]}>£12,534.00</Text>
          <Image
            style={[
              styles.iconFeatherCreditCard,
              styles.rectangleParentPosition,
            ]}
            resizeMode="cover"
            source={require("../assets/icon-feathercreditcard.png")}
          />
        </View>
      </View>
      <Pressable
        style={[styles.component20823Parent, styles.mt67, styles.ml1]}
        onPress={() => navigation.navigate("ReviewAndConfirm")}
      >
        <View style={styles.component20823}>
          <View
            style={[styles.rectangleParent, styles.rectangleParentPosition]}
          >
            <View style={[styles.groupChild1, styles.childLayout]} />
            <View style={styles.maskGroup236} />
          </View>
        </View>
        <Text style={[styles.hello10, styles.helloTypo1]}>Add Funds</Text>
      </Pressable>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  mt19: {
    marginTop: GlobalStyles.Margin.margin_14xs,
  },
  mt17: {
    marginTop: GlobalStyles.Margin.margin_16xs,
  },
  ml1: {
    marginLeft: GlobalStyles.Margin.margin_32xs,
  },
  mt88: {
    marginTop: 88,
  },
  ml2: {
    marginLeft: GlobalStyles.Margin.margin_31xs,
  },
  mt105: {
    marginTop: GlobalStyles.Margin.margin_47xl,
  },
  mt24: {
    marginTop: GlobalStyles.Margin.margin_8xs,
  },
  mt_739: {
    marginTop: GlobalStyles.Margin.margin_85xs,
  },
  mr2: {
    marginRight: GlobalStyles.Margin.margin_31xs,
  },
  mt36: {
    marginTop: GlobalStyles.Margin.margin_6xl,
  },
  mt_811: {
    marginTop: GlobalStyles.Margin.margin_87xs,
  },
  mt32: {
    marginTop: GlobalStyles.Margin.margin_xl,
  },
  mt67: {
    marginTop: GlobalStyles.Margin.margin_31xl,
  },
  rectangleShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: -10,
    },
    backgroundColor: GlobalStyles.Color.white,
  },
  textTypo: {
    fontSize: GlobalStyles.FontSize.size_4xl,
    textAlign: "left",
  },
  helloPosition1: {
    width: 42,
    bottom: 0,
    top: 0,
    position: "absolute",
  },
  helloColor: {
    color: GlobalStyles.Color.gray_800,
    top: 0,
  },
  helloTypo1: {
    fontFamily: GlobalStyles.FontFamily.helvetica,
    position: "absolute",
  },
  groupPosition: {
    height: 17,
    width: 18,
    left: "50%",
    bottom: 0,
    position: "absolute",
  },
  lineViewBorder: {
    borderColor: "#707070",
    borderStyle: "solid",
  },
  helloTypo: {
    fontSize: GlobalStyles.FontSize.size_base,
    color: GlobalStyles.Color.gray_800,
    fontFamily: GlobalStyles.FontFamily.helvetica,
    position: "absolute",
    textAlign: "left",
  },
  statusBarPosition: {
    right: 16,
    top: "50%",
    position: "absolute",
  },
  iconPosition: {
    marginTop: -3,
    top: "50%",
    position: "absolute",
  },
  networkPosition: {
    width: 17,
    marginTop: -3,
    top: "50%",
    position: "absolute",
  },
  networkLayout: {
    width: 3,
    backgroundColor: GlobalStyles.Color.gray_1400,
    borderRadius: GlobalStyles.Border.br_7xs,
    bottom: 0,
    position: "absolute",
  },
  childLayout: {
    borderRadius: GlobalStyles.Border.br_lg,
    position: "absolute",
  },
  helloPosition: {
    left: 44,
    fontFamily: GlobalStyles.FontFamily.helvetica,
    position: "absolute",
    textAlign: "left",
  },
  rectangleParentPosition: {
    top: "50%",
    left: 0,
    position: "absolute",
  },
  addFundsChild: {
    height: 811,
    width: 375,
    backgroundColor: GlobalStyles.Color.gray_300,
  },
  addFundsItem: {
    borderTopLeftRadius: GlobalStyles.Border.br_6xl,
    borderTopRightRadius: GlobalStyles.Border.br_6xl,
    shadowColor: "rgba(1, 1, 253, 0.05)",
    shadowRadius: 50,
    elevation: 50,
    height: 749,
    width: 375,
  },
  hello: {
    lineHeight: 25,
    fontWeight: "700",
    fontFamily: GlobalStyles.FontFamily.typoGrotesk,
    textAlign: "left",
    color: GlobalStyles.Color.indigo,
  },
  hello1: {
    fontSize: GlobalStyles.FontSize.size_7xl,
    lineHeight: 22,
    left: 0,
    textAlign: "left",
  },
  groupChild: {
    marginLeft: -7.94,
  },
  helloParent: {
    left: 0,
  },
  groupItem: {
    marginLeft: -7.71,
  },
  helloGroup: {
    marginLeft: -27.5,
    left: "50%",
  },
  groupInner: {
    marginLeft: -7.22,
  },
  helloContainer: {
    width: 56,
    right: 0,
    bottom: 0,
    top: 0,
    position: "absolute",
  },
  groupParent: {
    width: 311,
    height: 54,
  },
  hello4: {
    left: 142,
    fontSize: GlobalStyles.FontSize.size_xl,
    textAlign: "left",
  },
  hello5: {
    top: 32,
    left: 88,
    fontSize: GlobalStyles.FontSize.size_14xl,
    lineHeight: 37,
    color: GlobalStyles.Color.blue,
    textAlign: "left",
  },
  lineView: {
    bottom: -1,
    left: -1,
    borderTopWidth: 1,
    height: 2,
    right: 0,
    position: "absolute",
  },
  groupView: {
    width: 310,
    height: 99,
  },
  hello6: {
    top: 13,
    left: 13,
  },
  iconMaterialKeyboardVoice: {
    marginTop: -9.35,
    width: 14,
    height: 19,
  },
  helloParent1: {
    borderRadius: GlobalStyles.Border.br_5xl,
    width: 312,
    height: 42,
    backgroundColor: GlobalStyles.Color.gray_300,
  },
  addFundsInner: {
    borderTopWidth: 3,
    width: 52,
    height: 6,
  },
  homeIndicator: {
    borderRadius: GlobalStyles.Border.br_8xl,
    backgroundColor: GlobalStyles.Color.black,
    height: 5,
    width: 134,
  },
  rectangle: {
    shadowColor: "rgba(0, 0, 0, 0.05)",
    shadowRadius: 6,
    elevation: 6,
    right: 0,
    left: 0,
    bottom: 0,
    top: 0,
    position: "absolute",
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
    textAlign: "left",
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
    height: 11,
    right: 0,
  },
  wifiIcon: {
    right: 37,
    height: 12,
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
    height: 11,
  },
  statusBar: {
    marginTop: -15,
    left: 15,
    height: 26,
  },
  statusBarBlack: {
    height: 44,
    width: 375,
  },
  component2071Child: {
    right: 0,
    left: 0,
    bottom: 0,
    top: 0,
    backgroundColor: GlobalStyles.Color.gray_300,
  },
  iconIonicIosArrowForward: {
    right: 14,
    width: 11,
    height: 6,
  },
  component2071: {
    top: 21,
    right: 0,
    left: 0,
    bottom: 0,
    position: "absolute",
  },
  hello7: {
    left: 0,
    top: 0,
  },
  hello8: {
    fontSize: GlobalStyles.FontSize.size_xs,
  },
  hello9: {
    top: 15,
    fontSize: GlobalStyles.FontSize.size_2xl,
    color: GlobalStyles.Color.indigo,
  },
  iconFeatherCreditCard: {
    marginTop: -10.5,
    width: 29,
    height: 21,
  },
  helloParent2: {
    bottom: 7,
    left: 14,
    height: 35,
    width: 134,
    position: "absolute",
  },
  component2071Parent: {
    width: 325,
    height: 71,
  },
  groupChild1: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    backgroundColor: GlobalStyles.Color.gray_500,
    width: "100%",
  },
  maskGroup236: {
    bottom: 13,
    right: 0,
    left: 0,
    top: 0,
    position: "absolute",
  },
  rectangleParent: {
    marginTop: -30,
    height: 60,
    right: 0,
  },
  component20823: {
    right: 0,
    left: 0,
    bottom: 0,
    top: 0,
    position: "absolute",
  },
  hello10: {
    top: "36.67%",
    left: "36.5%",
    fontSize: GlobalStyles.FontSize.size_lg,
    lineHeight: 17,
    textTransform: "uppercase",
    color: GlobalStyles.Color.black,
    textAlign: "center",
  },
  component20823Parent: {
    width: 326,
    height: 60,
  },
  addFunds: {
    flex: 1,
    alignItems: "center",
    width: "100%",
    backgroundColor: GlobalStyles.Color.white,
  },
});

export default AddFunds;
