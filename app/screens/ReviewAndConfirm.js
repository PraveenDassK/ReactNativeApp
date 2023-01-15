import * as React from "react";
import { Text, StyleSheet, View, Image, Pressable } from "react-native";
import GlobalStyles from "../../GlobalStyles";

const ReviewAndConfirm = ({navigation}) => {

  return (
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
            styles.helloContainerPosition1,
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
  );
};

const styles = StyleSheet.create({
  helloLayout: {
    height: 45,
    right: "5%",
    width: "100%"
  },
  helloTypo: {
    color: GlobalStyles.Color.blue_100,
    fontSize: GlobalStyles.FontSize.size_2xl,
    top: 25,
    textAlign: "right",
    position: "absolute",
  },
  helloContainerPosition: {
    top: 300,
    position: "absolute",
    width:"100%"
  },
  helloContainerPosition1: {
    top: 350,
    position: "absolute",
  },
  groupPosition: {
    height: 2,
    width: "30%",
    borderTopWidth: 1,
    borderColor: "#707070",
    borderStyle: "solid",
    marginTop: 180,
    position: "absolute",
  },
  helloPosition1: {
    top: "45%",
    fontSize: GlobalStyles.FontSize.size_xs,
    color: GlobalStyles.Color.gray_700,
    position: "absolute",
  },
  helloPosition: {
    top: "48%",
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
    marginLeft: "20%",
    fontSize: GlobalStyles.FontSize.size_4xl,
    fontWeight: "700",
    color: GlobalStyles.Color.indigo_100,
    textAlign: "left",
    position: "absolute",
    width:"80%"
  },
  hello1: {
    fontSize: GlobalStyles.FontSize.size_base,
    color: GlobalStyles.Color.gray_700,
    left: 0,
    top: 10,
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
    left: "30%",
    textAlign: "right",
    width:"50%"
  },
  helloGroup: {
    top: 108,
    left: "10%",
    position: "absolute",
  },
  hello6: {
    left: "30%",
    textAlign: "right",
    width:"50%"
  },
  helloContainer: {
    marginTop: "-30%",
    left: "10%",
  },
  groupChild: {
    left: "10%",
  },
  groupItem: {
    right: "10%",
    width: 139,
    borderTopWidth: 1,
    borderColor: "#707070",
    borderStyle: "solid",
    marginTop: -204.27,
  },
  hello7: {
    left: "10%",
    textAlign: "left",
  },
  hello8: {
    left:"10%",
    textAlign: "left",
  },
  hello9: {
    right: "10%",
    textAlign: "right",
  },
  hello10: {
    right: "10%",
    textAlign: "right",
  },
  iconIonicIosArrowForward: {
    marginTop: -170,
    marginLeft: -4.5,
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
    width:"100%",
    fontSize: GlobalStyles.FontSize.size_lg,
    textTransform: "uppercase",
    color: GlobalStyles.Color.white,
    textAlign: "center",
    position: "absolute",
  },
  groupParent: {
    left: "10%",
    bottom: 88,
    height: 60,
    position: "absolute",
    width:"80%"
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
    width: "100%",
    height: "100%",
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
