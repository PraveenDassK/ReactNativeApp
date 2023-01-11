import * as React from "react";
import { Text, StyleSheet, View, Image, Pressable } from "react-native";
import GlobalStyles from "../../GlobalStyles";

const ReviewAndConfirm = ({navigation}) => {

  return (
    <Pressable
      style={styles.reviewAndConfirm}
      onPress={() => navigation.navigate("Account")}
    >
    <View style={styles.reviewAndConfirm}>
      <View style={styles.helloParent}>
        <Text style={styles.hello}>Review and Confirm</Text>
        <View style={[styles.helloGroup, styles.helloLayout]}>
          <Text style={styles.hello1}>From</Text>
          <Text style={styles.hello2}>Daily Saving</Text>
          <Text style={[styles.hello3, styles.helloTypo]}>- £ 500.00</Text>
        </View>
        <View
          style={[
            styles.helloContainer,
            styles.helloContainerPosition,
            styles.helloLayout,
          ]}
        >
          <Text style={styles.hello1}>To</Text>
          <Text style={styles.hello2}>Visa *0000</Text>
          <Text style={[styles.hello6, styles.helloTypo]}>- £ 500.00</Text>
        </View>
        <View style={[styles.groupChild, styles.groupPosition]} />
        <View style={[styles.groupItem, styles.groupPosition]} />
        <Text style={[styles.hello7, styles.helloPosition1]}>Fee</Text>
        <Text style={[styles.hello8, styles.helloPosition]}>
          Est. completion date
        </Text>
        <Text style={[styles.hello9, styles.helloPosition1]}>£ 0.00</Text>
        <Text style={[styles.hello10, styles.helloPosition]}>Today</Text>
        <Image
          style={[
            styles.iconIonicIosArrowForward,
            styles.helloContainerPosition,
          ]}
          resizeMode="cover"
          source={require("../assets/icon-ioniciosarrowforward13.png")}
        />
        <Pressable
          style={styles.groupParent}
          onPress={() => navigation.navigate("AddFundsSuccess")}
        >
          <View style={[styles.rectangleParent, styles.maskGroup236Position]}>
            <View style={styles.groupInner} />
            <View style={[styles.maskGroup236, styles.maskGroup236Position]} />
          </View>
          <Text style={styles.hello11}>Confirm</Text>
        </Pressable>
      </View>
    </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  helloLayout: {
    height: 45,
    right: 20,
  },
  helloTypo: {
    color: GlobalStyles.Color.blue_100,
    fontSize: GlobalStyles.FontSize.size_2xl,
    top: 10,
    textAlign: "right",
    position: "absolute",
  },
  helloContainerPosition: {
    top: "50%",
    position: "absolute",
  },
  groupPosition: {
    height: 2,
    width: 139,
    borderTopWidth: 1,
    borderColor: "#707070",
    borderStyle: "solid",
    marginTop: -204.27,
    top: "50%",
    position: "absolute",
  },
  helloPosition1: {
    top: 275,
    fontSize: GlobalStyles.FontSize.size_xs,
    color: GlobalStyles.Color.gray_700,
    position: "absolute",
  },
  helloPosition: {
    top: 303,
    fontSize: GlobalStyles.FontSize.size_xs,
    color: GlobalStyles.Color.gray_700,
    position: "absolute",
  },
  maskGroup236Position: {
    right: 0,
    left: 0,
    top: 0,
    position: "absolute",
  },
  hello: {
    top: 40,
    left: 92,
    fontSize: GlobalStyles.FontSize.size_4xl,
    fontWeight: "700",
    color: GlobalStyles.Color.indigo_100,
    textAlign: "left",
    position: "absolute",
  },
  hello1: {
    fontSize: GlobalStyles.FontSize.size_base,
    color: GlobalStyles.Color.gray_700,
    left: 0,
    top: 0,
    textAlign: "left",
    position: "absolute",
  },
  hello2: {
    top: 29,
    fontSize: GlobalStyles.FontSize.size_xs,
    color: GlobalStyles.Color.gray_700,
    left: 0,
    textAlign: "left",
    position: "absolute",
  },
  hello3: {
    left: 228,
    textAlign: "right",
  },
  helloGroup: {
    top: 108,
    left: 46,
    position: "absolute",
  },
  hello6: {
    left: 229,
    textAlign: "right",
  },
  helloContainer: {
    marginTop: -188.5,
    left: 45,
  },
  groupChild: {
    left: 45,
  },
  groupItem: {
    right: 20,
    width: 139,
    borderTopWidth: 1,
    borderColor: "#707070",
    borderStyle: "solid",
    marginTop: -204.27,
  },
  hello7: {
    left: 45,
    textAlign: "left",
  },
  hello8: {
    left: 45,
    textAlign: "left",
  },
  hello9: {
    left: 322,
    textAlign: "right",
  },
  hello10: {
    left: 323,
    textAlign: "right",
  },
  iconIonicIosArrowForward: {
    marginTop: -207.29,
    marginLeft: 3.5,
    left: "50%",
    width: 12,
    height: 7,
  },
  groupInner: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: GlobalStyles.Border.br_lg,
    backgroundColor: GlobalStyles.Color.blue_100,
    position: "absolute",
    width: "100%",
  },
  maskGroup236: {
    bottom: 13,
  },
  rectangleParent: {
    bottom: 0,
  },
  hello11: {
    top: "30%",
    left: "39.26%",
    fontSize: GlobalStyles.FontSize.size_lg,
    textTransform: "uppercase",
    color: GlobalStyles.Color.white,
    textAlign: "left",
    position: "absolute",
  },
  groupParent: {
    right: 14,
    bottom: 88,
    height: 60,
    left: 55,
    position: "absolute",
  },
  helloParent: {
    borderTopLeftRadius: GlobalStyles.Border.br_6xl,
    borderTopRightRadius: GlobalStyles.Border.br_6xl,
    shadowColor: "rgba(1, 1, 253, 0.1)",
    shadowOffset: {
      width: 0,
      height: -3,
    },
    shadowRadius: 20,
    elevation: 20,
    shadowOpacity: 1,
    width: 375,
    height: 749,
    left:15,
    backgroundColor: GlobalStyles.Color.white,
  },
  reviewAndConfirm: {
    flex: 1,
    paddingTop: GlobalStyles.Padding.padding_11xs,
    width: "100%",
    backgroundColor: GlobalStyles.Color.gray_100,
  },
});

export default ReviewAndConfirm;
