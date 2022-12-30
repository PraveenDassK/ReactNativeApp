import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import GlobalStyles from "../GlobalStyles";

const ReviewAndConfirm = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.reviewAndConfirm}>
      <View style={styles.reviewAndConfirmChild} />
      <View style={[styles.statusBarBlack, styles.mt_811]}>
        <View
          style={[
            styles.rectangle,
            styles.rectangleShadowBox,
            styles.timePosition,
          ]}
        />
        <View style={[styles.statusBar, styles.statusBarPosition]}>
          <View style={[styles.time, styles.timePosition]}>
            <Text style={[styles.text, styles.textTypo]}>9:41</Text>
          </View>
          <Image
            style={styles.batteryIcon}
            resizeMode="cover"
            source={require("../assets/icon-awesomebatterythreequarters.png")}
          />
          <Image
            style={[styles.wifiIcon, styles.networkPosition1]}
            resizeMode="cover"
            source={require("../assets/icon-awesomewifi.png")}
          />
          <View style={[styles.network, styles.networkPosition1]}>
            <View style={[styles.networkChild, styles.networkChildLayout]} />
            <View style={[styles.networkItem, styles.networkPosition]} />
            <View style={[styles.networkInner, styles.networkPosition]} />
            <View style={[styles.rectangleView, styles.networkChildLayout]} />
          </View>
        </View>
      </View>
      <View
        style={[
          styles.reviewAndConfirmItem,
          styles.mt18,
          styles.rectangleShadowBox,
        ]}
      />
      <Text style={[styles.hello, styles.mt17, styles.mr2, styles.textTypo]}>
        Review and Confirm
      </Text>
      <View
        style={[
          styles.reviewAndConfirmInner,
          styles.mt_738,
          styles.mr2,
          styles.lineViewBorder,
        ]}
      />
      <View style={[styles.helloParent, styles.mt46, styles.mr14]}>
        <Text style={styles.hello1}>From</Text>
        <Text style={[styles.hello2, styles.helloTypo2, styles.helloTypo3]}>
          Daily Saving
        </Text>
        <Text style={[styles.hello3, styles.helloTypo, styles.helloTypo1]}>
          - £ 500.00
        </Text>
      </View>
      <View style={[styles.helloGroup, styles.mt17, styles.mr15]}>
        <Text style={styles.hello1}>To</Text>
        <Text style={[styles.hello2, styles.helloTypo2, styles.helloTypo3]}>
          Visa *0000
        </Text>
        <Text style={[styles.hello6, styles.helloTypo, styles.helloTypo1]}>
          - £ 500.00
        </Text>
      </View>
      <View
        style={[
          styles.lineView,
          styles.mt_4,
          styles.mr187,
          styles.lineViewBorder,
        ]}
      />
      <View
        style={[
          styles.lineView,
          styles.mt_2,
          styles.ml157,
          styles.lineViewBorder,
        ]}
      />
      <Text
        style={[
          styles.helloTypo2,
          styles.mt37,
          styles.mr304,
          styles.helloTypo3,
        ]}
      >
        Fee
      </Text>
      <Text style={[styles.helloTypo3, styles.mt14, styles.mr216]}>
        Est. completion date
      </Text>
      <Text
        style={[
          styles.helloTypo,
          styles.mt_14,
          styles.ml262,
          styles.helloTypo2,
        ]}
      >
        £ 0.00
      </Text>
      <Text style={[styles.helloTypo2, styles.mt_14, styles.ml263]}>Today</Text>
      <Image
        style={[styles.iconIonicIosArrowForward, styles.mt14, styles.mr15]}
        resizeMode="cover"
        source={require("../assets/icon-ioniciosarrowforward13.png")}
      />
      <View style={[styles.homeIndicator, styles.mt36, styles.ml1]} />
      <Pressable
        style={[styles.component20826Parent, styles.mt326, styles.ml1]}
        onPress={() => navigation.navigate("AddFundsSuccess")}
      >
        <View style={[styles.component20826, styles.timePosition]}>
          <View style={[styles.rectangleParent, styles.statusBarPosition]}>
            <View style={styles.groupChild} />
            <View style={styles.maskGroup236} />
          </View>
        </View>
        <Text style={[styles.hello11, styles.helloTypo3]}>Confirm</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  mt_811: {
    marginTop: GlobalStyles.Margin.margin_87xs,
  },
  mt18: {
    marginTop: GlobalStyles.Margin.margin_15xs,
  },
  mt17: {
    marginTop: GlobalStyles.Margin.margin_16xs,
  },
  mr2: {
    marginRight: GlobalStyles.Margin.margin_31xs,
  },
  mt_738: {
    marginTop: -738,
  },
  mt46: {
    marginTop: GlobalStyles.Margin.margin_17xl,
  },
  mr14: {
    marginRight: GlobalStyles.Margin.margin_20xs,
  },
  mr15: {
    marginRight: GlobalStyles.Margin.margin_18xs,
  },
  mt_4: {
    marginTop: GlobalStyles.Margin.margin_36xs,
  },
  mr187: {
    marginRight: GlobalStyles.Margin.margin_72xl,
  },
  mt_2: {
    marginTop: GlobalStyles.Margin.margin_35xs,
  },
  ml157: {
    marginLeft: GlobalStyles.Margin.margin_63xl,
  },
  mt37: {
    marginTop: GlobalStyles.Margin.margin_7xl,
  },
  mr304: {
    marginRight: 304,
  },
  mt14: {
    marginTop: GlobalStyles.Margin.margin_20xs,
  },
  mr216: {
    marginRight: GlobalStyles.Margin.margin_79xl,
  },
  mt_14: {
    marginTop: GlobalStyles.Margin.margin_40xs,
  },
  ml262: {
    marginLeft: GlobalStyles.Margin.margin_88xl,
  },
  ml263: {
    marginLeft: 263,
  },
  mt36: {
    marginTop: GlobalStyles.Margin.margin_6xl,
  },
  ml1: {
    marginLeft: GlobalStyles.Margin.margin_32xs,
  },
  mt326: {
    marginTop: 326,
  },
  rectangleShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    backgroundColor: GlobalStyles.Color.white,
  },
  timePosition: {
    bottom: 0,
    left: 0,
    top: 0,
    position: "absolute",
  },
  statusBarPosition: {
    top: "50%",
    position: "absolute",
  },
  textTypo: {
    textAlign: "left",
    fontSize: GlobalStyles.FontSize.size_4xl,
  },
  networkPosition1: {
    width: 17,
    marginTop: -3,
    top: "50%",
    position: "absolute",
  },
  networkChildLayout: {
    width: 3,
    backgroundColor: GlobalStyles.Color.gray_1400,
    borderRadius: GlobalStyles.Border.br_7xs,
    bottom: 0,
    position: "absolute",
  },
  networkPosition: {
    left: "50%",
    width: 3,
    backgroundColor: GlobalStyles.Color.gray_1400,
    borderRadius: GlobalStyles.Border.br_7xs,
    bottom: 0,
    position: "absolute",
  },
  lineViewBorder: {
    borderColor: "#707070",
    borderStyle: "solid",
  },
  helloTypo2: {
    fontSize: GlobalStyles.FontSize.size_xs,
    color: GlobalStyles.Color.gray_800,
  },
  helloTypo3: {
    fontFamily: GlobalStyles.FontFamily.helvetica,
    textAlign: "left",
  },
  helloTypo: {
    textAlign: "right",
    fontFamily: GlobalStyles.FontFamily.helvetica,
  },
  helloTypo1: {
    color: GlobalStyles.Color.blue,
    fontSize: GlobalStyles.FontSize.size_2xl,
    top: 27,
    textAlign: "right",
    position: "absolute",
  },
  reviewAndConfirmChild: {
    backgroundColor: GlobalStyles.Color.gray_300,
    height: 811,
    width: 375,
  },
  rectangle: {
    shadowColor: "rgba(0, 0, 0, 0.05)",
    shadowRadius: 6,
    elevation: 6,
    left: 0,
    right: 0,
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
  },
  batteryIcon: {
    width: 22,
    height: 11,
    marginTop: -3,
    top: "50%",
    right: 0,
    position: "absolute",
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
  },
  networkInner: {
    marginLeft: 0.5,
    height: 9,
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
    right: 16,
    left: 15,
    height: 26,
  },
  statusBarBlack: {
    height: 44,
    width: 375,
  },
  reviewAndConfirmItem: {
    borderTopLeftRadius: GlobalStyles.Border.br_6xl,
    borderTopRightRadius: GlobalStyles.Border.br_6xl,
    shadowColor: "rgba(1, 1, 253, 0.1)",
    shadowRadius: 20,
    elevation: 20,
    height: 749,
    width: 375,
  },
  hello: {
    lineHeight: 25,
    fontWeight: "700",
    fontFamily: GlobalStyles.FontFamily.typoGrotesk,
    color: GlobalStyles.Color.indigo,
  },
  reviewAndConfirmInner: {
    borderTopWidth: 3,
    width: 52,
    height: 6,
  },
  hello1: {
    fontSize: GlobalStyles.FontSize.size_base,
    color: GlobalStyles.Color.gray_800,
    fontFamily: GlobalStyles.FontFamily.helvetica,
    textAlign: "left",
    left: 0,
    top: 0,
    position: "absolute",
  },
  hello2: {
    top: 29,
    left: 0,
    position: "absolute",
  },
  hello3: {
    left: 228,
  },
  helloParent: {
    width: 309,
    height: 47,
  },
  hello6: {
    left: 229,
  },
  helloGroup: {
    width: 310,
    height: 47,
  },
  lineView: {
    borderTopWidth: 1,
    width: 139,
    height: 2,
  },
  iconIonicIosArrowForward: {
    width: 12,
    height: 7,
  },
  homeIndicator: {
    borderRadius: GlobalStyles.Border.br_8xl,
    backgroundColor: GlobalStyles.Color.black,
    width: 134,
    height: 5,
  },
  groupChild: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: GlobalStyles.Border.br_lg,
    backgroundColor: GlobalStyles.Color.gray_500,
    position: "absolute",
    width: "100%",
  },
  maskGroup236: {
    bottom: 13,
    left: 0,
    right: 0,
    top: 0,
    position: "absolute",
  },
  rectangleParent: {
    marginTop: -30,
    height: 60,
    left: 0,
    right: 0,
  },
  component20826: {
    left: 0,
    right: 0,
  },
  hello11: {
    top: "36.67%",
    left: "39.26%",
    fontSize: GlobalStyles.FontSize.size_lg,
    lineHeight: 17,
    textTransform: "uppercase",
    color: GlobalStyles.Color.black,
    position: "absolute",
  },
  component20826Parent: {
    width: 326,
    height: 60,
  },
  reviewAndConfirm: {
    flex: 1,
    alignItems: "center",
    width: "100%",
    backgroundColor: GlobalStyles.Color.white,
  },
});

export default ReviewAndConfirm;
