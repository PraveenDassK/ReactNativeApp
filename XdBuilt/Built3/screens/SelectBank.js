import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import GlobalStyles from "../GlobalStyles";

const SelectBank = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.selectBank}>
      <View style={styles.selectBankChild} />
      <Text style={[styles.hello, styles.mt10, styles.ml27]}>Select Bank</Text>
      <Pressable
        style={[styles.iconFeatherArrowLeftWrapper, styles.mt_951]}
        onPress={() => navigation.navigate("SendAccountSelection")}
      >
        <Image
          style={styles.iconFeatherArrowLeft}
          resizeMode="cover"
          source={require("../assets/icon-featherarrowleft.png")}
        />
      </Pressable>
      <View
        style={[
          styles.iconAwesomeSearchParent,
          styles.mt14,
          styles.selectBankItemFlexBox,
        ]}
      >
        <Image
          style={[styles.iconAwesomeSearch, styles.iconPosition]}
          resizeMode="cover"
          source={require("../assets/icon-awesomesearch.png")}
        />
        <Image
          style={[styles.iconMaterialKeyboardVoice, styles.iconPosition]}
          resizeMode="cover"
          source={require("../assets/icon-materialkeyboardvoice.png")}
        />
        <Text style={[styles.hello1, styles.helloTypo2]}>Search</Text>
      </View>
      <View
        style={[
          styles.selectBankItem,
          styles.mt13,
          styles.selectBankItemFlexBox,
        ]}
      />
      <View
        style={[
          styles.selectBankItem,
          styles.mt8,
          styles.selectBankItemFlexBox,
        ]}
      />
      <Text
        style={[styles.hello2, styles.mt37, styles.ml27, styles.helloTypo2]}
      >
        Popular Banks
      </Text>
      <Text
        style={[styles.hello2, styles.mt110, styles.ml27, styles.helloTypo2]}
      >
        Other Banks
      </Text>
      <Pressable
        style={[styles.helloWrapper, styles.mt_238, styles.ml51]}
        onPress={() => navigation.navigate("SelectBank1")}
      >
        <Text style={styles.hello4}>HSBC</Text>
      </Pressable>
      <Pressable
        style={[styles.rectangleParent, styles.mt82, styles.ml45]}
        onPress={() => navigation.navigate("SelectBank1")}
      >
        <View
          style={[styles.groupChild, styles.groupLayout, styles.groupPosition1]}
        />
        <Text style={[styles.hello5, styles.helloTypo1]}>
          <Text style={styles.standard}>Standard</Text>
          <Text style={styles.standard}>Chartered</Text>
        </Text>
      </Pressable>
      <Pressable
        style={[styles.rectangleGroup, styles.mt_73, styles.ml161]}
        onPress={() => navigation.navigate("SelectBank1")}
      >
        <View
          style={[styles.groupItem, styles.groupLayout, styles.groupPosition1]}
        />
        <Text style={styles.hello6}>Barclays</Text>
      </Pressable>
      <Pressable
        style={[styles.rectangleContainer, styles.mt_87, styles.ml150]}
        onPress={() => navigation.navigate("SelectBank1")}
      >
        <View style={[styles.groupInner, styles.groupPosition]} />
        <Text style={[styles.hello7, styles.helloTypo1]}>
          <Text style={styles.standard}>Royal Bank</Text>
          <Text style={styles.standard}>of Scotland</Text>
          <Text style={styles.standard}>{`Group `}</Text>
        </Text>
      </Pressable>
      <Pressable
        style={[styles.groupPressable, styles.mt_73, styles.ml275]}
        onPress={() => navigation.navigate("SelectBank1")}
      >
        <View
          style={[
            styles.rectangleView,
            styles.groupChild2Position,
            styles.groupLayout,
          ]}
        />
        <Text style={[styles.hello7, styles.helloTypo1]}>
          <Text style={styles.standard}>Lloyds</Text>
          <Text style={styles.standard}>Banking</Text>
          <Text style={styles.standard}>Group</Text>
        </Text>
      </Pressable>
      <Pressable
        style={[styles.rectangleParent1, styles.mt_101, styles.ml265]}
        onPress={() => navigation.navigate("SelectBank1")}
      >
        <View style={[styles.groupChild1, styles.groupPosition]} />
        <Text style={[styles.hello7, styles.helloTypo1]}>
          <Text style={styles.standard}>Nationwide</Text>
          <Text style={styles.standard}>Building</Text>
          <Text style={styles.standard}>Society</Text>
        </Text>
      </Pressable>
      <Pressable
        style={[styles.rectangleParent2, styles.mt_244, styles.ml42]}
        onPress={() => navigation.navigate("SelectBank1")}
      >
        <View style={[styles.groupChild2, styles.groupChild2Position]} />
        <Text style={[styles.hello10, styles.helloTypo]}>Santander UK</Text>
      </Pressable>
      <Pressable
        style={[styles.rectangleParent3, styles.mt5, styles.ml42]}
        onPress={() => navigation.navigate("SelectBank1")}
      >
        <View style={[styles.groupChild2, styles.groupChild2Position]} />
        <Text style={[styles.hello11, styles.helloTypo]}>
          Nationwide Building Society
        </Text>
      </Pressable>
      <Pressable
        style={[styles.rectangleParent4, styles.mt5, styles.ml42]}
        onPress={() => navigation.navigate("SelectBank1")}
      >
        <View style={[styles.groupChild2, styles.groupChild2Position]} />
        <Text style={[styles.hello12, styles.helloTypo]}>Schroders</Text>
      </Pressable>
      <Pressable
        style={[styles.rectangleParent5, styles.mt8, styles.ml42]}
        onPress={() => navigation.navigate("SelectBank1")}
      >
        <View style={[styles.groupChild2, styles.groupChild2Position]} />
        <Text style={[styles.hello13, styles.helloTypo]}>
          Close Brothers Group plc
        </Text>
      </Pressable>
      <Pressable
        style={[styles.rectangleParent6, styles.ml42]}
        onPress={() => navigation.navigate("SelectBank1")}
      >
        <View style={[styles.groupChild2, styles.groupChild2Position]} />
        <Text style={[styles.hello14, styles.helloTypo]}>
          Coventry Building Society
        </Text>
      </Pressable>
      <View style={[styles.lineView, styles.mt1, styles.ml92]} />
      <View style={[styles.lineView, styles.mt18, styles.ml92]} />
      <View style={[styles.lineView, styles.mt9, styles.ml92]} />
      <View style={[styles.lineView, styles.mt13, styles.ml92]} />
      <View style={[styles.homeIndicator, styles.mt_15, styles.ml121]} />
      <Image
        style={[styles.hsbcSymbolIcon, styles.mt_32, styles.ml52]}
        resizeMode="cover"
        source={require("../assets/hsbcsymbol.png")}
      />
      <Image
        style={[styles.image145Icon, styles.mt_96, styles.ml153]}
        resizeMode="cover"
        source={require("../assets/image-145.png")}
      />
      <Image
        style={[
          styles.image146Icon,
          styles.mt_38,
          styles.ml283,
          styles.iconLayout,
        ]}
        resizeMode="cover"
        source={require("../assets/image-146.png")}
      />
      <Image
        style={[styles.image148Icon, styles.mt_37, styles.ml57]}
        resizeMode="cover"
        source={require("../assets/image-148.png")}
      />
      <Image
        style={[styles.downloadIcon, styles.mt_98, styles.ml166]}
        resizeMode="cover"
        source={require("../assets/download.png")}
      />
      <Image
        style={[styles.nationwideLogo20012011Icon, styles.mt_29, styles.ml280]}
        resizeMode="cover"
        source={require("../assets/nationwidelogo20012011.png")}
      />
      <Image
        style={[styles.nationwideLogo20012011Icon1, styles.mt_25, styles.ml48]}
        resizeMode="cover"
        source={require("../assets/nationwidelogo200120111.png")}
      />
      <Image
        style={[styles.iconLayout, styles.mt_35, styles.ml42]}
        resizeMode="cover"
        source={require("../assets/image-149.png")}
      />
      <Image
        style={[
          styles.schrodersLogoPngTransparentIcon,
          styles.mt_31,
          styles.ml45,
        ]}
        resizeMode="cover"
        source={require("../assets/schroderslogopngtransparent.png")}
      />
      <Image
        style={[styles.image150Icon, styles.mt_31, styles.ml47]}
        resizeMode="cover"
        source={require("../assets/image-150.png")}
      />
      <Image
        style={[styles.image151Icon, styles.mt_30, styles.ml46]}
        resizeMode="cover"
        source={require("../assets/image-151.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mt10: {
    marginTop: GlobalStyles.Margin.margin_16xs,
  },
  ml27: {
    marginLeft: GlobalStyles.Margin.margin_5xl,
  },
  mt_951: {
    marginTop: -951,
  },
  mt14: {
    marginTop: GlobalStyles.Margin.margin_9xs,
  },
  mt13: {
    marginTop: GlobalStyles.Margin.margin_10xs,
  },
  mt8: {
    marginTop: GlobalStyles.Margin.margin_19xs,
  },
  mt37: {
    marginTop: GlobalStyles.Margin.margin_15xl,
  },
  mt110: {
    marginTop: 110,
  },
  mt_238: {
    marginTop: -238,
  },
  ml51: {
    marginLeft: 51,
  },
  mt82: {
    marginTop: 82,
  },
  ml45: {
    marginLeft: GlobalStyles.Margin.margin_23xl,
  },
  mt_73: {
    marginTop: GlobalStyles.Margin.margin_48xs,
  },
  ml161: {
    marginLeft: GlobalStyles.Margin.margin_50xl,
  },
  mt_87: {
    marginTop: GlobalStyles.Margin.margin_50xs,
  },
  ml150: {
    marginLeft: 150,
  },
  ml275: {
    marginLeft: 275,
  },
  mt_101: {
    marginTop: -101,
  },
  ml265: {
    marginLeft: 265,
  },
  mt_244: {
    marginTop: -244,
  },
  ml42: {
    marginLeft: GlobalStyles.Margin.margin_20xl,
  },
  mt5: {
    marginTop: GlobalStyles.Margin.margin_21xs,
  },
  mt1: {
    marginTop: GlobalStyles.Margin.margin_24xs,
  },
  ml92: {
    marginLeft: GlobalStyles.Margin.margin_42xl,
  },
  mt18: {
    marginTop: GlobalStyles.Margin.margin_3xs,
  },
  mt9: {
    marginTop: GlobalStyles.Margin.margin_17xs,
  },
  mt_15: {
    marginTop: GlobalStyles.Margin.margin_28xs,
  },
  ml121: {
    marginLeft: GlobalStyles.Margin.margin_46xl,
  },
  mt_32: {
    marginTop: -32,
  },
  ml52: {
    marginLeft: GlobalStyles.Margin.margin_28xl,
  },
  mt_96: {
    marginTop: GlobalStyles.Margin.margin_52xs,
  },
  ml153: {
    marginLeft: GlobalStyles.Margin.margin_49xl,
  },
  mt_38: {
    marginTop: -38,
  },
  ml283: {
    marginLeft: 283,
  },
  mt_37: {
    marginTop: -37,
  },
  ml57: {
    marginLeft: GlobalStyles.Margin.margin_31xl,
  },
  mt_98: {
    marginTop: -98,
  },
  ml166: {
    marginLeft: 166,
  },
  mt_29: {
    marginTop: GlobalStyles.Margin.margin_35xs,
  },
  ml280: {
    marginLeft: 280,
  },
  mt_25: {
    marginTop: GlobalStyles.Margin.margin_33xs,
  },
  ml48: {
    marginLeft: GlobalStyles.Margin.margin_26xl,
  },
  mt_35: {
    marginTop: GlobalStyles.Margin.margin_37xs,
  },
  mt_31: {
    marginTop: GlobalStyles.Margin.margin_36xs,
  },
  ml47: {
    marginLeft: GlobalStyles.Margin.margin_25xl,
  },
  mt_30: {
    marginTop: -30,
  },
  ml46: {
    marginLeft: GlobalStyles.Margin.margin_24xl,
  },
  selectBankItemFlexBox: {
    alignSelf: "center",
    width: 327,
    backgroundColor: GlobalStyles.Color.white,
  },
  iconPosition: {
    height: 19,
    marginTop: -9.35,
    top: "50%",
    position: "absolute",
  },
  helloTypo2: {
    fontFamily: GlobalStyles.FontFamily.helvetica,
    fontSize: GlobalStyles.FontSize.size_2xs,
    textAlign: "left",
  },
  groupLayout: {
    height: 49,
    borderRadius: GlobalStyles.Border.br_md,
  },
  groupPosition1: {
    top: 0,
    height: 49,
    position: "absolute",
    backgroundColor: GlobalStyles.Color.gray_300,
  },
  helloTypo1: {
    textAlign: "center",
    lineHeight: 14,
    left: "0%",
    fontSize: GlobalStyles.FontSize.size_sm,
    fontFamily: GlobalStyles.FontFamily.helvetica,
    position: "absolute",
    color: GlobalStyles.Color.indigo,
  },
  groupPosition: {
    right: 10,
    height: 49,
    top: 0,
    borderRadius: GlobalStyles.Border.br_md,
    position: "absolute",
    backgroundColor: GlobalStyles.Color.gray_300,
  },
  groupChild2Position: {
    left: 0,
    top: 0,
    position: "absolute",
    backgroundColor: GlobalStyles.Color.gray_300,
  },
  helloTypo: {
    top: "27.31%",
    lineHeight: 16,
    fontSize: GlobalStyles.FontSize.size_sm,
    fontFamily: GlobalStyles.FontFamily.helvetica,
    position: "absolute",
    textAlign: "left",
    color: GlobalStyles.Color.indigo,
  },
  iconLayout: {
    height: 37,
    width: 37,
  },
  selectBankChild: {
    width: 375,
    height: 997,
    backgroundColor: GlobalStyles.Color.gray_300,
  },
  hello: {
    fontSize: GlobalStyles.FontSize.size_6xl,
    fontFamily: GlobalStyles.FontFamily.typoGrotesk,
    textAlign: "left",
    color: GlobalStyles.Color.indigo,
    fontWeight: "700",
  },
  iconFeatherArrowLeft: {
    marginLeft: -0.5,
    bottom: 4,
    left: "50%",
    width: 17,
    height: 17,
    position: "absolute",
  },
  iconFeatherArrowLeftWrapper: {
    width: 55,
    height: 45,
    backgroundColor: GlobalStyles.Color.gray_300,
  },
  iconAwesomeSearch: {
    left: 14,
    width: 19,
  },
  iconMaterialKeyboardVoice: {
    right: 16,
    width: 14,
  },
  hello1: {
    marginTop: -7,
    left: 50,
    color: GlobalStyles.Color.gray_800,
    top: "50%",
    fontFamily: GlobalStyles.FontFamily.helvetica,
    fontSize: GlobalStyles.FontSize.size_2xs,
    position: "absolute",
  },
  iconAwesomeSearchParent: {
    height: 42,
    borderRadius: GlobalStyles.Border.br_4xl,
  },
  selectBankItem: {
    borderRadius: GlobalStyles.Border.br_3xl,
    shadowColor: "rgba(1, 1, 253, 0.05)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 20,
    elevation: 20,
    shadowOpacity: 1,
    height: 261,
  },
  hello2: {
    color: GlobalStyles.Color.gray_900,
    fontFamily: GlobalStyles.FontFamily.helvetica,
    fontSize: GlobalStyles.FontSize.size_2xs,
    fontWeight: "700",
  },
  hello4: {
    left: "10.2%",
    lineHeight: 16,
    fontSize: GlobalStyles.FontSize.size_sm,
    top: "78.08%",
    fontFamily: GlobalStyles.FontFamily.helvetica,
    position: "absolute",
    textAlign: "left",
    color: GlobalStyles.Color.indigo,
  },
  helloWrapper: {
    height: 73,
    width: 49,
    borderRadius: GlobalStyles.Border.br_md,
    backgroundColor: GlobalStyles.Color.gray_300,
  },
  groupChild: {
    right: 7,
    left: 6,
  },
  standard: {
    margin: GlobalStyles.Margin.margin_25xs,
  },
  hello5: {
    top: "65.52%",
  },
  rectangleParent: {
    width: 62,
    height: 87,
  },
  groupItem: {
    right: 3,
    left: 2,
  },
  hello6: {
    left: "0%",
    lineHeight: 16,
    fontSize: GlobalStyles.FontSize.size_sm,
    top: "78.08%",
    fontFamily: GlobalStyles.FontFamily.helvetica,
    position: "absolute",
    textAlign: "left",
    color: GlobalStyles.Color.indigo,
  },
  rectangleGroup: {
    width: 54,
    height: 73,
  },
  groupInner: {
    width: 49,
  },
  hello7: {
    top: "56.44%",
  },
  rectangleContainer: {
    width: 72,
    height: 101,
  },
  rectangleView: {
    right: 1,
  },
  groupPressable: {
    width: 50,
    height: 101,
  },
  groupChild1: {
    left: 11,
  },
  rectangleParent1: {
    width: 70,
    height: 101,
  },
  groupChild2: {
    bottom: 0,
    borderRadius: GlobalStyles.Border.br_3xs,
    width: 35,
  },
  hello10: {
    left: "36.17%",
  },
  rectangleParent2: {
    width: 138,
    height: 35,
  },
  hello11: {
    left: "22.38%",
  },
  rectangleParent3: {
    width: 223,
    height: 35,
  },
  hello12: {
    left: "43.8%",
  },
  rectangleParent4: {
    width: 114,
    height: 35,
  },
  hello13: {
    left: "24.11%",
  },
  rectangleParent5: {
    width: 207,
    height: 35,
  },
  hello14: {
    left: "23.76%",
  },
  rectangleParent6: {
    width: 210,
    height: 35,
  },
  lineView: {
    borderStyle: "solid",
    borderColor: "#f6f5f8",
    borderTopWidth: 1,
    width: 244,
    height: 2,
  },
  homeIndicator: {
    borderRadius: GlobalStyles.Border.br_7xl,
    backgroundColor: GlobalStyles.Color.black,
    width: 134,
    height: 5,
  },
  hsbcSymbolIcon: {
    width: 48,
    height: 26,
  },
  image145Icon: {
    height: 40,
    width: 70,
  },
  image146Icon: {
    borderRadius: GlobalStyles.Border.br_2xl,
  },
  image148Icon: {
    borderRadius: GlobalStyles.Border.br_lg,
    height: 36,
    width: 37,
  },
  downloadIcon: {
    width: 41,
    height: 41,
    borderRadius: GlobalStyles.Border.br_4xl,
  },
  nationwideLogo20012011Icon: {
    width: 40,
    height: 23,
  },
  nationwideLogo20012011Icon1: {
    height: 15,
    width: 26,
  },
  schrodersLogoPngTransparentIcon: {
    borderRadius: GlobalStyles.Border.br_2xs,
    width: 27,
    height: 27,
  },
  image150Icon: {
    width: 26,
    height: 26,
  },
  image151Icon: {
    width: 29,
    height: 29,
  },
  selectBank: {
    flex: 1,
    width: "100%",
    backgroundColor: GlobalStyles.Color.white,
  },
});

export default SelectBank;
