import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import GlobalStyles from "../GlobalStyles";

const AddFunds = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.addFunds}
      onPress={() => navigation.navigate("Account3")}
    >
      <View style={styles.addFundsChild} />
      <View style={[styles.addFundsItem, styles.mt_747_5]} />
      <Text style={[styles.hello, styles.mt16_5, styles.ml1]}>Add Funds</Text>
      <View style={[styles.groupParent, styles.mt87_5, styles.ml2]}>
        <View style={styles.helloParent}>
          <Text style={[styles.hello1, styles.helloColor, styles.helloTypo1]}>
            £20
          </Text>
          <Image
            style={[styles.groupChild, styles.groupPosition]}
            resizeMode="cover"
            source={require("../assets/group-30410.png")}
          />
        </View>
        <View style={styles.helloGroup}>
          <Text style={[styles.hello1, styles.helloColor, styles.helloTypo1]}>
            £50
          </Text>
          <Image
            style={[styles.groupItem, styles.groupPosition]}
            resizeMode="cover"
            source={require("../assets/group-304101.png")}
          />
        </View>
        <View style={[styles.helloContainer, styles.componentPosition]}>
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
      <View style={[styles.groupView, styles.mt105_5, styles.ml1]}>
        <Text style={[styles.hello4, styles.helloColor, styles.helloTypo1]}>
          Pay
        </Text>
        <Text style={[styles.hello5, styles.helloTypo1]}>£500</Text>
        <View style={[styles.lineView, styles.lineViewBorder]} />
      </View>
      <View style={[styles.helloParent1, styles.mt23_5, styles.ml1]}>
        <Text style={[styles.hello6, styles.helloTypo]}>Add a note</Text>
        <Image
          style={[styles.iconMaterialKeyboardVoice, styles.iconPosition]}
          resizeMode="cover"
          source={require("../assets/icon-materialkeyboardvoice.png")}
        />
      </View>
      <View
        style={[
          styles.addFundsInner,
          styles.mt_739_5,
          styles.mr2,
          styles.lineViewBorder,
        ]}
      />
      <View style={[styles.component2071Parent, styles.mt32_5]}>
        <View style={[styles.component2071, styles.componentPosition]}>
          <View
            style={[
              styles.component2071Child,
              styles.rectangleViewLayout,
              styles.componentPosition,
            ]}
          />
          <Image
            style={[styles.iconIonicIosArrowForward, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/icon-ioniciosarrowforward4.png")}
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
            style={[styles.iconFeatherCreditCard, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/icon-feathercreditcard.png")}
          />
        </View>
      </View>
      <Pressable
        style={[styles.component20823Parent, styles.mt66_5, styles.ml1]}
        onPress={() => navigation.navigate("ReviewAndConfirm")}
      >
        <View style={[styles.component20823, styles.componentPosition]}>
          <View style={[styles.rectangleParent, styles.iconPosition]}>
            <View style={[styles.rectangleView, styles.rectangleViewLayout]} />
            <View style={styles.maskGroup236} />
          </View>
        </View>
        <Text style={[styles.hello10, styles.helloTypo1]}>Add Funds</Text>
      </Pressable>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  mt_747_5: {
    marginTop: -747.5,
  },
  mt16_5: {
    marginTop: GlobalStyles.Margin.margin_6xs,
  },
  ml1: {
    marginLeft: GlobalStyles.Margin.margin_24xs,
  },
  mt87_5: {
    marginTop: 87.5,
  },
  ml2: {
    marginLeft: GlobalStyles.Margin.margin_23xs,
  },
  mt105_5: {
    marginTop: 105.5,
  },
  mt23_5: {
    marginTop: 23.5,
  },
  mt_739_5: {
    marginTop: GlobalStyles.Margin.margin_57xs,
  },
  mr2: {
    marginRight: GlobalStyles.Margin.margin_23xs,
  },
  mt32_5: {
    marginTop: 32.5,
  },
  mt66_5: {
    marginTop: GlobalStyles.Margin.margin_35xl,
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
  componentPosition: {
    bottom: 0,
    right: 0,
  },
  lineViewBorder: {
    borderColor: "#707070",
    borderStyle: "solid",
  },
  helloTypo: {
    fontSize: GlobalStyles.FontSize.size_sm,
    color: GlobalStyles.Color.gray_800,
    fontFamily: GlobalStyles.FontFamily.helvetica,
    position: "absolute",
    textAlign: "left",
  },
  iconPosition: {
    top: "50%",
    position: "absolute",
  },
  rectangleViewLayout: {
    borderRadius: GlobalStyles.Border.br_md,
    position: "absolute",
  },
  helloPosition: {
    left: 44,
    fontFamily: GlobalStyles.FontFamily.helvetica,
    position: "absolute",
    textAlign: "left",
  },
  addFundsChild: {
    height: 811,
    width: 375,
    backgroundColor: GlobalStyles.Color.gray_300,
  },
  addFundsItem: {
    borderTopLeftRadius: GlobalStyles.Border.br_5xl,
    borderTopRightRadius: GlobalStyles.Border.br_5xl,
    shadowColor: "rgba(1, 1, 253, 0.05)",
    shadowOffset: {
      width: 0,
      height: -10,
    },
    shadowRadius: 50,
    elevation: 50,
    shadowOpacity: 1,
    height: 749,
    width: 375,
    backgroundColor: GlobalStyles.Color.white,
  },
  hello: {
    fontSize: GlobalStyles.FontSize.size_2xl,
    lineHeight: 25,
    fontWeight: "700",
    fontFamily: GlobalStyles.FontFamily.typoGrotesk,
    textAlign: "left",
    color: GlobalStyles.Color.indigo,
  },
  hello1: {
    fontSize: GlobalStyles.FontSize.size_5xl,
    lineHeight: 22,
    left: 0,
    textAlign: "left",
  },
  groupChild: {
    marginLeft: -7.94,
  },
  helloParent: {
    width: 42,
    left: 0,
    bottom: 0,
    top: 0,
    position: "absolute",
  },
  groupItem: {
    marginLeft: -7.71,
  },
  helloGroup: {
    marginLeft: -27.5,
    left: "50%",
    width: 42,
    bottom: 0,
    top: 0,
    position: "absolute",
  },
  groupInner: {
    marginLeft: -7.22,
  },
  helloContainer: {
    width: 56,
    right: 0,
    top: 0,
    position: "absolute",
  },
  groupParent: {
    width: 311,
    height: 54,
  },
  hello4: {
    left: 142,
    fontSize: GlobalStyles.FontSize.size_lg,
    textAlign: "left",
  },
  hello5: {
    top: 32,
    left: 88,
    fontSize: GlobalStyles.FontSize.size_10xl,
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
    right: 16,
    width: 14,
    height: 19,
  },
  helloParent1: {
    borderRadius: GlobalStyles.Border.br_4xl,
    width: 312,
    height: 42,
    backgroundColor: GlobalStyles.Color.gray_300,
  },
  addFundsInner: {
    borderTopWidth: 3,
    width: 52,
    height: 6,
  },
  component2071Child: {
    right: 0,
    left: 0,
    top: 0,
    backgroundColor: GlobalStyles.Color.gray_300,
  },
  iconIonicIosArrowForward: {
    marginTop: -3,
    right: 14,
    width: 11,
    height: 6,
  },
  component2071: {
    top: 21,
    right: 0,
    left: 0,
    position: "absolute",
  },
  hello7: {
    left: 0,
    top: 0,
  },
  hello8: {
    fontSize: GlobalStyles.FontSize.size_2xs,
  },
  hello9: {
    top: 15,
    fontSize: GlobalStyles.FontSize.size_xl,
    color: GlobalStyles.Color.indigo,
  },
  iconFeatherCreditCard: {
    marginTop: -10.5,
    width: 29,
    height: 21,
    left: 0,
  },
  helloParent2: {
    bottom: 7,
    left: 14,
    width: 134,
    height: 35,
    position: "absolute",
  },
  component2071Parent: {
    width: 325,
    height: 71,
  },
  rectangleView: {
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
    left: 0,
  },
  component20823: {
    right: 0,
    left: 0,
    top: 0,
    position: "absolute",
  },
  hello10: {
    top: "36.67%",
    left: "36.5%",
    fontSize: GlobalStyles.FontSize.size_base,
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
