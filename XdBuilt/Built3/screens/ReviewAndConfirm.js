import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import GlobalStyles from "../GlobalStyles";

const ReviewAndConfirm = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.reviewAndConfirm}>
      <View style={styles.reviewAndConfirmChild} />
      <View style={[styles.reviewAndConfirmItem, styles.mt_748_5]} />
      <Text style={[styles.hello, styles.mt16_5, styles.ml92]}>
        Review and Confirm
      </Text>
      <View
        style={[
          styles.reviewAndConfirmInner,
          styles.mt_738_5,
          styles.ml161,
          styles.lineViewBorder,
        ]}
      />
      <View style={[styles.helloParent, styles.mt46_5, styles.ml26]}>
        <Text style={styles.hello1}>From</Text>
        <Text style={[styles.hello2, styles.helloTypo2, styles.helloTypo3]}>
          Daily Saving
        </Text>
        <Text style={[styles.hello3, styles.helloTypo, styles.helloTypo1]}>
          - £ 500.00
        </Text>
      </View>
      <View style={[styles.helloGroup, styles.mt16_5, styles.ml25]}>
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
          styles.mt_3_5,
          styles.ml25,
          styles.lineViewBorder,
        ]}
      />
      <View
        style={[
          styles.lineView,
          styles.mt_1_5,
          styles.ml197,
          styles.lineViewBorder,
        ]}
      />
      <Text
        style={[
          styles.helloTypo2,
          styles.mt37_5,
          styles.ml25,
          styles.helloTypo3,
        ]}
      >
        Fee
      </Text>
      <Text style={[styles.helloTypo3, styles.mt14_5, styles.ml25]}>
        Est. completion date
      </Text>
      <Text
        style={[
          styles.helloTypo,
          styles.mt_13_5,
          styles.ml302,
          styles.helloTypo2,
        ]}
      >
        £ 0.00
      </Text>
      <Text style={[styles.helloTypo2, styles.mt_13_5, styles.ml303]}>
        Today
      </Text>
      <Image
        style={[styles.iconIonicIosArrowForward, styles.mt14_5, styles.ml174]}
        resizeMode="cover"
        source={require("../assets/icon-ioniciosarrowforward3.png")}
      />
      <Pressable
        style={[styles.component20826Parent, styles.mt326_5, styles.ml25]}
        onPress={() => navigation.navigate("AddFundsSuccess")}
      >
        <View
          style={[
            styles.component20826,
            styles.maskGroup236Position,
            styles.maskGroup236Position1,
          ]}
        >
          <View style={[styles.rectangleParent, styles.maskGroup236Position]}>
            <View style={styles.groupChild} />
            <View
              style={[
                styles.maskGroup236,
                styles.maskGroup236Position,
                styles.maskGroup236Position1,
              ]}
            />
          </View>
        </View>
        <Text style={[styles.hello11, styles.helloTypo3]}>Confirm</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  mt_748_5: {
    marginTop: -748.5,
  },
  mt16_5: {
    marginTop: GlobalStyles.Margin.margin_6xs,
  },
  ml92: {
    marginLeft: GlobalStyles.Margin.margin_42xl,
  },
  mt_738_5: {
    marginTop: -738.5,
  },
  ml161: {
    marginLeft: GlobalStyles.Margin.margin_50xl,
  },
  mt46_5: {
    marginTop: 46.5,
  },
  ml26: {
    marginLeft: GlobalStyles.Margin.margin_4xl,
  },
  ml25: {
    marginLeft: GlobalStyles.Margin.margin_3xl,
  },
  mt_3_5: {
    marginTop: -3.5,
  },
  mt_1_5: {
    marginTop: -1.5,
  },
  ml197: {
    marginLeft: 197,
  },
  mt37_5: {
    marginTop: 37.5,
  },
  mt14_5: {
    marginTop: GlobalStyles.Margin.margin_8xs,
  },
  mt_13_5: {
    marginTop: GlobalStyles.Margin.margin_26xs,
  },
  ml302: {
    marginLeft: 302,
  },
  ml303: {
    marginLeft: GlobalStyles.Margin.margin_59xl,
  },
  ml174: {
    marginLeft: 174,
  },
  mt326_5: {
    marginTop: 326.5,
  },
  lineViewBorder: {
    borderColor: "#707070",
    borderStyle: "solid",
  },
  helloTypo2: {
    fontSize: GlobalStyles.FontSize.size_2xs,
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
    fontSize: GlobalStyles.FontSize.size_xl,
    top: 27,
    textAlign: "right",
    position: "absolute",
  },
  maskGroup236Position: {
    right: 0,
    left: 0,
    position: "absolute",
  },
  maskGroup236Position1: {
    top: 0,
    right: 0,
  },
  reviewAndConfirmChild: {
    backgroundColor: GlobalStyles.Color.gray_300,
    height: 811,
    width: 375,
  },
  reviewAndConfirmItem: {
    borderTopLeftRadius: GlobalStyles.Border.br_5xl,
    borderTopRightRadius: GlobalStyles.Border.br_5xl,
    shadowColor: "rgba(1, 1, 253, 0.1)",
    shadowOffset: {
      width: 0,
      height: -3,
    },
    shadowRadius: 20,
    elevation: 20,
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
    color: GlobalStyles.Color.indigo,
    textAlign: "left",
  },
  reviewAndConfirmInner: {
    borderTopWidth: 3,
    width: 52,
    height: 6,
  },
  hello1: {
    fontSize: GlobalStyles.FontSize.size_sm,
    color: GlobalStyles.Color.gray_800,
    fontFamily: GlobalStyles.FontFamily.helvetica,
    left: 0,
    top: 0,
    position: "absolute",
    textAlign: "left",
  },
  hello2: {
    top: 29,
    left: 0,
    fontSize: GlobalStyles.FontSize.size_2xs,
    fontFamily: GlobalStyles.FontFamily.helvetica,
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
  groupChild: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: GlobalStyles.Border.br_md,
    backgroundColor: GlobalStyles.Color.gray_500,
    position: "absolute",
    width: "100%",
  },
  maskGroup236: {
    bottom: 13,
  },
  rectangleParent: {
    marginTop: -30,
    top: "50%",
    height: 60,
  },
  component20826: {
    bottom: 0,
  },
  hello11: {
    top: "36.67%",
    left: "39.26%",
    fontSize: GlobalStyles.FontSize.size_base,
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
    width: "100%",
    backgroundColor: GlobalStyles.Color.white,
  },
});

export default ReviewAndConfirm;
