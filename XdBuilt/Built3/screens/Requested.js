import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import GlobalStyles from "../GlobalStyles";

const Requested = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.requested}
      onPress={() => navigation.navigate("SendMoney")}
    >
      <View style={styles.requestedInner}>
        <View
          style={[
            styles.rectangleParent,
            styles.groupPosition,
            styles.groupItemPosition,
          ]}
        >
          <View style={[styles.groupChild, styles.groupPosition]} />
          <View
            style={[
              styles.groupItem,
              styles.groupPosition,
              styles.groupItemPosition,
            ]}
          />
        </View>
      </View>
      <View style={[styles.requestedChild, styles.mt_739_06, styles.mr2]} />
      <Text
        style={[styles.hello, styles.mt30_939999999999998, styles.helloTypo]}
      >
        <Text style={styles.youHaveRequested}>You have requested £500</Text>
        <Text style={styles.youHaveRequested}>from Hudson Maia</Text>
      </Text>
      <Image
        style={[styles.iconAwesomeCheckCircle, styles.mt220_94]}
        resizeMode="cover"
        source={require("../assets/icon-awesomecheckcircle.png")}
      />
      <Text
        style={[styles.hello1, styles.mt204_94, styles.ml1, styles.helloTypo]}
      >
        Tap anywhere to continue
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  mt_739_06: {
    marginTop: -739.06,
  },
  mr2: {
    marginRight: GlobalStyles.Margin.margin_23xs,
  },
  mt30_939999999999998: {
    marginTop: 30.939999999999998,
  },
  mt220_94: {
    marginTop: 220.94,
  },
  mt204_94: {
    marginTop: 204.94,
  },
  ml1: {
    marginLeft: GlobalStyles.Margin.margin_24xs,
  },
  groupPosition: {
    left: 0,
    right: 0,
    position: "absolute",
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
  groupChild: {
    bottom: 172,
    backgroundColor: GlobalStyles.Color.gray_300,
    left: 0,
    right: 0,
    position: "absolute",
    top: 0,
  },
  groupItem: {
    top: 63,
    borderTopLeftRadius: GlobalStyles.Border.br_3xl,
    borderTopRightRadius: GlobalStyles.Border.br_3xl,
    shadowColor: "rgba(1, 1, 253, 0.1)",
    shadowOffset: {
      width: 0,
      height: -3,
    },
    shadowRadius: 20,
    elevation: 20,
    shadowOpacity: 1,
    backgroundColor: GlobalStyles.Color.white,
  },
  rectangleParent: {
    top: 0,
    bottom: 0,
  },
  requestedInner: {
    width: 375,
    height: 812,
  },
  requestedChild: {
    borderStyle: "solid",
    borderColor: "#707070",
    borderTopWidth: 3,
    width: 52,
    height: 6,
  },
  youHaveRequested: {
    margin: GlobalStyles.Margin.margin_25xs,
  },
  hello: {
    fontSize: GlobalStyles.FontSize.size_2xl,
    lineHeight: 24,
    fontWeight: "700",
    color: GlobalStyles.Color.indigo,
  },
  iconAwesomeCheckCircle: {
    width: 187,
    height: 187,
  },
  hello1: {
    fontSize: GlobalStyles.FontSize.size_2xs,
    color: GlobalStyles.Color.gray_800,
  },
  requested: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    backgroundColor: GlobalStyles.Color.white,
  },
});

export default Requested;
