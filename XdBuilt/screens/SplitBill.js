import * as React from "react";
import { Image, StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import GlobalStyles from "../GlobalStyles";

const SplitBill = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.splitBill}>
      <View style={styles.groupParent}>
        <View
          style={[
            styles.path33381Parent,
            styles.path33381Position,
            styles.maskGroup2361Position,
          ]}
        >
          <Image
            style={[styles.path33381Icon, styles.path33381Position]}
            resizeMode="cover"
            source={require("../assets/path-33381.png")}
          />
          <View style={styles.iconIonicIosArrowForwardWrapper}>
            <Image
              style={[
                styles.iconIonicIosArrowForward,
                styles.groupChildPosition,
              ]}
              resizeMode="cover"
              source={require("../assets/icon-ioniciosarrowforward3.png")}
            />
          </View>
          <Text style={styles.splitBills}>Split Bills</Text>
        </View>
        <View style={styles.maskGroup236} />
        <Pressable
          style={[styles.helloParent, styles.helloPosition]}
          onPress={() => navigation.navigate("SplitSummary")}
        >
          <Text
            style={[
              styles.hello,
              styles.helloTypo,
              styles.helloTypo1,
              styles.helloTypo2,
            ]}
          >
            Our Expenses
          </Text>
          <Text
            style={[
              styles.hello1,
              styles.helloTypo,
              styles.helloTypo1,
              styles.helloTypo2,
            ]}
          >
            £500
          </Text>
          <Image
            style={[styles.groupChild, styles.groupChildPosition]}
            resizeMode="cover"
            source={require("../assets/group-30576.png")}
          />
        </Pressable>
        <View style={[styles.helloGroup, styles.helloPosition]}>
          <Text
            style={[
              styles.hello,
              styles.helloTypo,
              styles.helloTypo1,
              styles.helloTypo2,
            ]}
          >
            House Rent
          </Text>
          <Text
            style={[
              styles.hello1,
              styles.helloTypo,
              styles.helloTypo1,
              styles.helloTypo2,
            ]}
          >
            £230
          </Text>
          <Image
            style={[styles.groupChild, styles.groupChildPosition]}
            resizeMode="cover"
            source={require("../assets/group-30576.png")}
          />
        </View>
        <View style={[styles.helloContainer, styles.helloPosition]}>
          <Text
            style={[
              styles.hello,
              styles.helloTypo,
              styles.helloTypo1,
              styles.helloTypo2,
            ]}
          >
            Food
          </Text>
          <Text
            style={[
              styles.hello1,
              styles.helloTypo,
              styles.helloTypo1,
              styles.helloTypo2,
            ]}
          >
            £30
          </Text>
          <Image
            style={[styles.groupChild, styles.groupChildPosition]}
            resizeMode="cover"
            source={require("../assets/group-30576.png")}
          />
        </View>
        <Text style={[styles.hello6, styles.helloTypo, styles.helloTypo1]}>
          Your Groups
        </Text>
        <Pressable
          style={styles.groupContainer}
          onPress={() => navigation.navigate("AddMembersToTheGroup")}
        >
          <View
            style={[
              styles.path33381Parent,
              styles.path33381Position,
              styles.maskGroup2361Position,
            ]}
          >
            <View style={styles.rectangleView} />
            <View
              style={[
                styles.maskGroup2361,
                styles.path33381Position,
                styles.maskGroup2361Position,
              ]}
            />
          </View>
          <Text style={[styles.hello7, styles.helloTypo]}>
            Create New Group
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  path33381Position: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  maskGroup2361Position: {
    right: 0,
    left: 0,
    top: 0,
  },
  groupChildPosition: {
    top: "50%",
    position: "absolute",
  },
  helloPosition: {
    height: 64,
    backgroundColor: GlobalStyles.Color.gray_200,
    borderRadius: GlobalStyles.Border.br_4xl,
    left: 25,
    right: 24,
    top: "50%",
    position: "absolute",
  },
  helloTypo: {
    fontFamily: GlobalStyles.FontFamily.helvetica,
    textAlign: "left",
    position: "absolute",
  },
  helloTypo1: {
    fontSize: GlobalStyles.FontSize.size_base,
    fontFamily: GlobalStyles.FontFamily.helvetica,
  },
  helloTypo2: {
    top: 27,
    fontSize: GlobalStyles.FontSize.size_base,
    color: GlobalStyles.Color.indigo_100,
    fontWeight: "700",
  },
  path33381Icon: {
    right: -60,
    bottom: -60,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    left: 0,
    top: 0,
  },
  iconIonicIosArrowForward: {
    marginTop: -3.24,
    left: 1,
    width: 11,
    height: 6,
  },
  iconIonicIosArrowForwardWrapper: {
    top: 11,
    right: 26,
    left: 16,
    height: 27,
    position: "absolute",
    backgroundColor: GlobalStyles.Color.white,
  },
  splitBills: {
    marginLeft: -39.5,
    top: 41,
    left: "50%",
    fontSize: GlobalStyles.FontSize.size_4xl,
    fontFamily: GlobalStyles.FontFamily.typoGrotesk,
    textAlign: "left",
    color: GlobalStyles.Color.indigo_100,
    fontWeight: "700",
    position: "absolute",
  },
  path33381Parent: {
    bottom: 0,
  },
  maskGroup236: {
    top: 79,
    right: 41,
    left: 24,
    height: 47,
    position: "absolute",
  },
  hello: {
    left: 93,
  },
  hello1: {
    left: 261,
  },
  groupChild: {
    marginTop: -18,
    left: 15,
    width: 70,
    height: 37,
  },
  helloParent: {
    marginTop: -129.5,
  },
  helloGroup: {
    marginTop: -53.5,
  },
  helloContainer: {
    marginTop: 22.5,
  },
  hello6: {
    top: 219,
    color: GlobalStyles.Color.gray_700,
    left: 25,
  },
  rectangleView: {
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
  maskGroup2361: {
    bottom: 13,
  },
  hello7: {
    top: "38.33%",
    left: "25.77%",
    fontSize: GlobalStyles.FontSize.size_lg,
    textTransform: "uppercase",
    color: GlobalStyles.Color.black,
  },
  groupContainer: {
    top: 102,
    height: 60,
    left: 25,
    right: 24,
    position: "absolute",
  },
  groupParent: {
    width: 375,
    height: 749,
  },
  splitBill: {
    flex: 1,
    paddingTop: GlobalStyles.Padding.padding_md,
    width: "100%",
    backgroundColor: GlobalStyles.Color.white,
  },
});

export default SplitBill;
