import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import GlobalStyles from "../GlobalStyles";

const SentMoney = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.sentMoney}
      onPress={() => navigation.navigate("SendMoney")}
    >
      <View style={styles.sentMoneyInner}>
        <View style={[styles.rectangleParent, styles.groupItemPosition]}>
          <View style={styles.groupChild} />
          <View style={[styles.groupItem, styles.groupItemPosition]} />
          <Text style={[styles.hello, styles.helloTypo, styles.helloTypo1]}>
            Tap anywhere to continue
          </Text>
        </View>
      </View>
      <View style={[styles.sentMoneyChild, styles.mt_739_62, styles.mr2]} />
      <Text
        style={[
          styles.hello1,
          styles.mt32_379999999999995,
          styles.ml1,
          styles.helloTypo,
        ]}
      >
        <Text style={styles.youveSent}>{`You've sent `}</Text>
        <Text style={styles.text}>{`£3,420 `}</Text>
        <Text style={styles.youveSent}>{`to `}</Text>
        <Text style={styles.text}>Robert Dyla</Text>
      </Text>
      <Image
        style={[styles.iconAwesomeCheckCircle, styles.mt140_38]}
        resizeMode="cover"
        source={require("../assets/icon-awesomecheckcircle.png")}
      />
      <View
        style={[styles.groupParent, styles.mt32_379999999999995, styles.ml1]}
      >
        <View style={[styles.groupInner, styles.groupInnerPosition]} />
        <View style={[styles.rectangleView, styles.groupInnerPosition]} />
      </View>
      <View
        style={[styles.helloWrapper, styles.mt18_379999999999995, styles.ml1]}
      >
        <Text style={[styles.hello2, styles.helloTypo, styles.helloTypo1]}>
          <Text style={styles.youveUsed1}>
            You've used 1 of your 100 monthly free local
          </Text>
          <Text style={styles.youveUsed1}>{`transfers allowance `}</Text>
        </Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  mt_739_62: {
    marginTop: -739.62,
  },
  mr2: {
    marginRight: GlobalStyles.Margin.margin_23xs,
  },
  mt32_379999999999995: {
    marginTop: GlobalStyles.Margin.margin_10xl,
  },
  ml1: {
    marginLeft: GlobalStyles.Margin.margin_24xs,
  },
  mt140_38: {
    marginTop: 140.38,
  },
  mt18_379999999999995: {
    marginTop: 18.379999999999995,
  },
  groupItemPosition: {
    bottom: 0,
    left: 0,
    right: 0,
    position: "absolute",
  },
  helloTypo: {
    textAlign: "center",
    fontFamily: GlobalStyles.FontFamily.helvetica,
  },
  helloTypo1: {
    color: GlobalStyles.Color.gray_800,
    textAlign: "center",
    fontFamily: GlobalStyles.FontFamily.helvetica,
    position: "absolute",
  },
  groupInnerPosition: {
    borderRadius: GlobalStyles.Border.br_7xs,
    left: 0,
    bottom: 0,
    top: 0,
    position: "absolute",
  },
  groupChild: {
    bottom: 172,
    backgroundColor: GlobalStyles.Color.gray_300,
    left: 0,
    right: 0,
    top: 0,
    position: "absolute",
  },
  groupItem: {
    top: 63,
    borderTopLeftRadius: GlobalStyles.Border.br_3xl,
    borderTopRightRadius: GlobalStyles.Border.br_3xl,
    shadowColor: "rgba(1, 1, 253, 0.05)",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 6,
    elevation: 6,
    shadowOpacity: 1,
    left: 0,
    backgroundColor: GlobalStyles.Color.white,
  },
  hello: {
    marginTop: 362,
    top: "50%",
    left: 120,
    fontSize: GlobalStyles.FontSize.size_2xs,
  },
  rectangleParent: {
    left: 0,
    top: 0,
  },
  sentMoneyInner: {
    width: 375,
    height: 812,
  },
  sentMoneyChild: {
    borderStyle: "solid",
    borderColor: "#707070",
    borderTopWidth: 3,
    width: 52,
    height: 6,
  },
  youveSent: {
    color: GlobalStyles.Color.indigo,
  },
  text: {
    color: GlobalStyles.Color.blue,
  },
  hello1: {
    fontSize: GlobalStyles.FontSize.size_2xl,
    lineHeight: 24,
    fontWeight: "700",
    textAlign: "center",
    fontFamily: GlobalStyles.FontFamily.helvetica,
  },
  iconAwesomeCheckCircle: {
    width: 187,
    height: 187,
  },
  groupInner: {
    backgroundColor: "#bebebe",
    right: 0,
  },
  rectangleView: {
    backgroundColor: GlobalStyles.Color.blue,
    width: 17,
  },
  groupParent: {
    width: 308,
    height: 5,
  },
  youveUsed1: {
    margin: GlobalStyles.Margin.margin_25xs,
  },
  hello2: {
    fontSize: GlobalStyles.FontSize.size_sm,
    lineHeight: 25,
    left: 0,
    top: 0,
  },
  helloWrapper: {
    width: 274,
    height: 41,
  },
  sentMoney: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    backgroundColor: GlobalStyles.Color.white,
  },
});

export default SentMoney;
