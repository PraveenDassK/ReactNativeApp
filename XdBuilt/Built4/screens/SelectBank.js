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
      <View style={[styles.statusBarBlack, styles.mt_997]}>
        <View
          style={[
            styles.rectangle,
            styles.rectangleShadowBox,
            styles.timePosition,
          ]}
        />
        <View style={[styles.statusBar, styles.hello1Position]}>
          <View style={[styles.time, styles.timePosition]}>
            <Text style={[styles.text, styles.textPosition]}>9:41</Text>
          </View>
          <Image
            style={[styles.batteryIcon, styles.networkPosition1]}
            resizeMode="cover"
            source={require("../assets/icon-awesomebatterythreequarters.png")}
          />
          <Image
            style={styles.wifiIcon}
            resizeMode="cover"
            source={require("../assets/icon-awesomewifi.png")}
          />
          <View style={[styles.network, styles.networkPosition1]}>
            <View style={[styles.networkChild, styles.networkLayout]} />
            <View
              style={[
                styles.networkItem,
                styles.networkPosition,
                styles.networkLayout,
              ]}
            />
            <View
              style={[
                styles.networkInner,
                styles.networkPosition,
                styles.networkLayout,
              ]}
            />
            <View
              style={[
                styles.rectangleView,
                styles.networkLayout,
                styles.textPosition,
              ]}
            />
          </View>
        </View>
      </View>
      <Pressable
        style={[styles.iconFeatherArrowLeftWrapper, styles.mt2]}
        onPress={() => navigation.navigate("SendAccountSelection")}
      >
        <Image
          style={[styles.iconFeatherArrowLeft, styles.networkPosition]}
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
        <Text style={[styles.hello1, styles.helloTypo2, styles.hello1Position]}>
          Search
        </Text>
      </View>
      <View
        style={[
          styles.selectBankItem,
          styles.mt13,
          styles.selectBankItemFlexBox,
          styles.rectangleShadowBox,
        ]}
      />
      <View
        style={[
          styles.selectBankItem,
          styles.mt8,
          styles.selectBankItemFlexBox,
          styles.rectangleShadowBox,
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
        <View style={[styles.groupChild, styles.groupChildLayout]} />
        <Text style={[styles.hello5, styles.helloTypo1]}>
          <Text style={styles.standard}>Standard</Text>
          <Text style={styles.standard}>Chartered</Text>
        </Text>
      </Pressable>
      <Pressable
        style={[styles.rectangleGroup, styles.mt_73, styles.ml161]}
        onPress={() => navigation.navigate("SelectBank1")}
      >
        <View style={[styles.groupItem, styles.groupChildLayout]} />
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
        <View style={[styles.groupChild1, styles.groupChildLayout]} />
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
        <View style={[styles.groupChild2, styles.groupPosition]} />
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
        <View style={[styles.groupChild3, styles.timePosition]} />
        <Text style={[styles.hello10, styles.helloTypo]}>Santander UK</Text>
      </Pressable>
      <Pressable
        style={[styles.rectangleParent3, styles.mt5, styles.ml42]}
        onPress={() => navigation.navigate("SelectBank1")}
      >
        <View style={[styles.groupChild3, styles.timePosition]} />
        <Text style={[styles.hello11, styles.helloTypo]}>
          Nationwide Building Society
        </Text>
      </Pressable>
      <Pressable
        style={[styles.rectangleParent4, styles.mt5, styles.ml42]}
        onPress={() => navigation.navigate("SelectBank1")}
      >
        <View style={[styles.groupChild3, styles.timePosition]} />
        <Text style={[styles.hello12, styles.helloTypo]}>Schroders</Text>
      </Pressable>
      <Pressable
        style={[styles.rectangleParent5, styles.mt8, styles.ml42]}
        onPress={() => navigation.navigate("SelectBank1")}
      >
        <View style={[styles.groupChild3, styles.timePosition]} />
        <Text style={[styles.hello13, styles.helloTypo]}>
          Close Brothers Group plc
        </Text>
      </Pressable>
      <Pressable
        style={[styles.rectangleParent6, styles.ml42]}
        onPress={() => navigation.navigate("SelectBank1")}
      >
        <View style={[styles.groupChild3, styles.timePosition]} />
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
    marginTop: GlobalStyles.Margin.margin_24xs,
  },
  ml27: {
    marginLeft: GlobalStyles.Margin.margin_4xs,
  },
  mt_997: {
    marginTop: -997,
  },
  mt2: {
    marginTop: GlobalStyles.Margin.margin_31xs,
  },
  mt14: {
    marginTop: GlobalStyles.Margin.margin_20xs,
  },
  mt13: {
    marginTop: GlobalStyles.Margin.margin_21xs,
  },
  mt8: {
    marginTop: GlobalStyles.Margin.margin_26xs,
  },
  mt37: {
    marginTop: GlobalStyles.Margin.margin_7xl,
  },
  mt110: {
    marginTop: GlobalStyles.Margin.margin_49xl,
  },
  mt_238: {
    marginTop: -238,
  },
  ml51: {
    marginLeft: 51,
  },
  mt82: {
    marginTop: GlobalStyles.Margin.margin_41xl,
  },
  ml45: {
    marginLeft: GlobalStyles.Margin.margin_16xl,
  },
  mt_73: {
    marginTop: GlobalStyles.Margin.margin_69xs,
  },
  ml161: {
    marginLeft: GlobalStyles.Margin.margin_65xl,
  },
  mt_87: {
    marginTop: GlobalStyles.Margin.margin_71xs,
  },
  ml150: {
    marginLeft: 150,
  },
  ml275: {
    marginLeft: GlobalStyles.Margin.margin_89xl,
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
    marginLeft: GlobalStyles.Margin.margin_13xl,
  },
  mt5: {
    marginTop: GlobalStyles.Margin.margin_28xs,
  },
  mt1: {
    marginTop: GlobalStyles.Margin.margin_32xs,
  },
  ml92: {
    marginLeft: GlobalStyles.Margin.margin_44xl,
  },
  mt18: {
    marginTop: GlobalStyles.Margin.margin_15xs,
  },
  mt9: {
    marginTop: GlobalStyles.Margin.margin_25xs,
  },
  mt_15: {
    marginTop: GlobalStyles.Margin.margin_41xs,
  },
  ml121: {
    marginLeft: GlobalStyles.Margin.margin_54xl,
  },
  mt_32: {
    marginTop: -32,
  },
  ml52: {
    marginLeft: GlobalStyles.Margin.margin_21xl,
  },
  mt_96: {
    marginTop: GlobalStyles.Margin.margin_73xs,
  },
  ml153: {
    marginLeft: GlobalStyles.Margin.margin_62xl,
  },
  mt_38: {
    marginTop: GlobalStyles.Margin.margin_54xs,
  },
  ml283: {
    marginLeft: 283,
  },
  mt_37: {
    marginTop: -37,
  },
  ml57: {
    marginLeft: 57,
  },
  mt_98: {
    marginTop: -98,
  },
  ml166: {
    marginLeft: 166,
  },
  mt_29: {
    marginTop: GlobalStyles.Margin.margin_49xs,
  },
  ml280: {
    marginLeft: 280,
  },
  mt_25: {
    marginTop: GlobalStyles.Margin.margin_47xs,
  },
  ml48: {
    marginLeft: GlobalStyles.Margin.margin_19xl,
  },
  mt_35: {
    marginTop: GlobalStyles.Margin.margin_52xs,
  },
  mt_31: {
    marginTop: GlobalStyles.Margin.margin_50xs,
  },
  ml47: {
    marginLeft: GlobalStyles.Margin.margin_18xl,
  },
  mt_30: {
    marginTop: -30,
  },
  ml46: {
    marginLeft: GlobalStyles.Margin.margin_17xl,
  },
  rectangleShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 3,
    },
  },
  timePosition: {
    bottom: 0,
    left: 0,
    top: 0,
    position: "absolute",
  },
  hello1Position: {
    top: "50%",
    position: "absolute",
  },
  textPosition: {
    top: 0,
    position: "absolute",
  },
  networkPosition1: {
    height: 11,
    marginTop: -3,
    top: "50%",
    position: "absolute",
  },
  networkLayout: {
    width: 3,
    backgroundColor: GlobalStyles.Color.gray_1400,
    borderRadius: GlobalStyles.Border.br_7xs,
    bottom: 0,
  },
  networkPosition: {
    left: "50%",
    position: "absolute",
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
    fontSize: GlobalStyles.FontSize.size_xs,
    textAlign: "left",
  },
  groupChildLayout: {
    height: 49,
    borderRadius: GlobalStyles.Border.br_lg,
    top: 0,
    position: "absolute",
    backgroundColor: GlobalStyles.Color.gray_300,
  },
  helloTypo1: {
    textAlign: "center",
    lineHeight: 14,
    left: "0%",
    fontSize: GlobalStyles.FontSize.size_base,
    fontFamily: GlobalStyles.FontFamily.helvetica,
    position: "absolute",
    color: GlobalStyles.Color.indigo,
  },
  groupPosition: {
    right: 10,
    height: 49,
    borderRadius: GlobalStyles.Border.br_lg,
    top: 0,
    position: "absolute",
    backgroundColor: GlobalStyles.Color.gray_300,
  },
  helloTypo: {
    top: "27.31%",
    lineHeight: 16,
    fontSize: GlobalStyles.FontSize.size_base,
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
    height: 997,
    width: 375,
    backgroundColor: GlobalStyles.Color.gray_300,
  },
  hello: {
    fontSize: GlobalStyles.FontSize.size_8xl,
    fontFamily: GlobalStyles.FontFamily.typoGrotesk,
    textAlign: "left",
    color: GlobalStyles.Color.indigo,
    fontWeight: "700",
  },
  rectangle: {
    shadowColor: "rgba(0, 0, 0, 0.05)",
    shadowRadius: 6,
    elevation: 6,
    left: 0,
    right: 0,
    backgroundColor: GlobalStyles.Color.white,
  },
  text: {
    fontSize: GlobalStyles.FontSize.size_4xl,
    letterSpacing: 0,
    lineHeight: 24,
    fontWeight: "500",
    fontFamily: GlobalStyles.FontFamily.roboto,
    color: GlobalStyles.Color.gray_1900,
    left: 0,
    textAlign: "left",
  },
  time: {
    width: 40,
    left: 0,
  },
  batteryIcon: {
    width: 22,
    right: 0,
  },
  wifiIcon: {
    right: 37,
    height: 12,
    width: 17,
    marginTop: -3,
    top: "50%",
    position: "absolute",
  },
  networkChild: {
    height: 4,
    left: 0,
    position: "absolute",
    backgroundColor: GlobalStyles.Color.gray_1400,
    borderRadius: GlobalStyles.Border.br_7xs,
  },
  networkItem: {
    marginLeft: -3.5,
    height: 6,
  },
  networkInner: {
    marginLeft: 0.5,
    height: 9,
  },
  rectangleView: {
    right: 0,
  },
  network: {
    right: 68,
    width: 17,
  },
  statusBar: {
    marginTop: -15,
    left: 15,
    height: 26,
    right: 16,
  },
  statusBarBlack: {
    height: 44,
    width: 375,
  },
  iconFeatherArrowLeft: {
    marginLeft: -0.5,
    bottom: 4,
    height: 17,
    width: 17,
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
    width: 14,
    right: 16,
  },
  hello1: {
    marginTop: -7,
    left: 50,
    color: GlobalStyles.Color.gray_800,
  },
  iconAwesomeSearchParent: {
    height: 42,
    borderRadius: GlobalStyles.Border.br_5xl,
  },
  selectBankItem: {
    borderRadius: GlobalStyles.Border.br_4xl,
    shadowColor: "rgba(1, 1, 253, 0.05)",
    shadowRadius: 20,
    elevation: 20,
    height: 261,
  },
  hello2: {
    color: GlobalStyles.Color.gray_900,
    fontWeight: "700",
    fontFamily: GlobalStyles.FontFamily.helvetica,
    fontSize: GlobalStyles.FontSize.size_xs,
  },
  hello4: {
    left: "10.2%",
    lineHeight: 16,
    fontSize: GlobalStyles.FontSize.size_base,
    top: "78.08%",
    fontFamily: GlobalStyles.FontFamily.helvetica,
    position: "absolute",
    textAlign: "left",
    color: GlobalStyles.Color.indigo,
  },
  helloWrapper: {
    height: 73,
    width: 49,
    borderRadius: GlobalStyles.Border.br_lg,
    backgroundColor: GlobalStyles.Color.gray_300,
  },
  groupChild: {
    right: 7,
    left: 6,
  },
  standard: {
    margin: GlobalStyles.Margin.margin_33xs,
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
    fontSize: GlobalStyles.FontSize.size_base,
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
  groupChild1: {
    right: 1,
    left: 0,
  },
  groupPressable: {
    width: 50,
    height: 101,
  },
  groupChild2: {
    left: 11,
  },
  rectangleParent1: {
    width: 70,
    height: 101,
  },
  groupChild3: {
    borderRadius: GlobalStyles.Border.br_2xs,
    width: 35,
    left: 0,
    backgroundColor: GlobalStyles.Color.gray_300,
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
    borderRadius: GlobalStyles.Border.br_8xl,
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
    borderRadius: GlobalStyles.Border.br_3xl,
  },
  image148Icon: {
    borderRadius: GlobalStyles.Border.br_xl,
    height: 36,
    width: 37,
  },
  downloadIcon: {
    width: 41,
    height: 41,
    borderRadius: GlobalStyles.Border.br_5xl,
  },
  nationwideLogo20012011Icon: {
    height: 23,
    width: 40,
  },
  nationwideLogo20012011Icon1: {
    height: 15,
    width: 26,
  },
  schrodersLogoPngTransparentIcon: {
    borderRadius: GlobalStyles.Border.br_xs,
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
