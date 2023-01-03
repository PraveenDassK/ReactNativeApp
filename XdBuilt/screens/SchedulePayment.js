import * as React from "react";
import { Text, StyleSheet, Image, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import GlobalStyles from "../GlobalStyles";

const SchedulePayment = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.schedulePayment}>
      <View style={styles.groupParent}>
        <View
          style={[
            styles.schedulePaymentsParent,
            styles.groupParentPosition,
            styles.parentPosition,
          ]}
        >
          <Text style={styles.schedulePayments}>Schedule Payments</Text>
          <View style={styles.iconIonicIosArrowForwardWrapper}>
            <Image
              style={styles.iconIonicIosArrowForward}
              resizeMode="cover"
              source={require("../assets/icon-ioniciosarrowforward3.png")}
            />
          </View>
        </View>
        <Text style={[styles.hello, styles.helloTypo1]}>Active</Text>
        <View style={styles.groupContainer}>
          <View style={[styles.groupWrapper, styles.groupPosition]}>
            <View style={styles.helloParent}>
              <Text
                style={[styles.hello1, styles.helloTypo, styles.helloTypo2]}
              >
                To Hudson Maia *1234
              </Text>
              <Text
                style={[styles.hello2, styles.helloTypo, styles.helloTypo2]}
              >
                -£500
              </Text>
              <Text
                style={[styles.hello3, styles.helloTypo]}
              >{`Monthly - Next : 01 October  `}</Text>
              <Image
                style={[styles.groupChild, styles.groupParentPosition]}
                resizeMode="cover"
                source={require("../assets/group-30337.png")}
              />
            </View>
          </View>
          <View style={[styles.groupFrame, styles.groupPosition]}>
            <View style={styles.helloParent}>
              <Text
                style={[styles.hello1, styles.helloTypo, styles.helloTypo2]}
              >
                To Hudson Maia *1234
              </Text>
              <Text
                style={[styles.hello2, styles.helloTypo, styles.helloTypo2]}
              >
                -£500
              </Text>
              <Text
                style={[styles.hello3, styles.helloTypo]}
              >{`Monthly - Next : 01 October  `}</Text>
              <Image
                style={[styles.groupChild, styles.groupParentPosition]}
                resizeMode="cover"
                source={require("../assets/group-30337.png")}
              />
            </View>
          </View>
          <View style={[styles.groupView, styles.groupPosition]}>
            <View style={styles.helloParent}>
              <Text
                style={[styles.hello1, styles.helloTypo, styles.helloTypo2]}
              >
                To Hudson Maia *1234
              </Text>
              <Text
                style={[styles.hello2, styles.helloTypo, styles.helloTypo2]}
              >
                -£500
              </Text>
              <Text
                style={[styles.hello3, styles.helloTypo]}
              >{`Monthly - Next : 01 October  `}</Text>
              <Image
                style={[styles.groupChild, styles.groupParentPosition]}
                resizeMode="cover"
                source={require("../assets/group-30337.png")}
              />
            </View>
          </View>
        </View>
        <Image
          style={styles.groupIcon}
          resizeMode="cover"
          source={require("../assets/group-30407.png")}
        />
        <Pressable
          style={styles.groupPressable}
          onPress={() => navigation.navigate("AddBeneficiarySchedulePayment")}
        >
          <View
            style={[
              styles.rectangleParent,
              styles.groupParentPosition,
              styles.parentPosition,
            ]}
          >
            <View style={styles.rectangleView} />
            <View
              style={[
                styles.maskGroup236,
                styles.groupParentPosition,
                styles.parentPosition,
              ]}
            />
          </View>
          <Text style={[styles.hello10, styles.helloTypo1]}>
            Add Beneficiary
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupParentPosition: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  parentPosition: {
    right: 0,
    left: 0,
  },
  helloTypo1: {
    fontFamily: GlobalStyles.FontFamily.helvetica,
    textAlign: "left",
    position: "absolute",
  },
  groupPosition: {
    height: 64,
    backgroundColor: GlobalStyles.Color.gray_200,
    borderRadius: GlobalStyles.Border.br_4xl,
    left: 0,
    right: 0,
    position: "absolute",
  },
  helloTypo: {
    fontSize: GlobalStyles.FontSize.size_xs,
    fontFamily: GlobalStyles.FontFamily.helvetica,
    textAlign: "left",
    position: "absolute",
  },
  helloTypo2: {
    color: GlobalStyles.Color.indigo_100,
    fontWeight: "700",
    fontSize: GlobalStyles.FontSize.size_xs,
    top: "50%",
  },
  schedulePayments: {
    marginLeft: -92.5,
    top: 41,
    fontSize: GlobalStyles.FontSize.size_4xl,
    fontFamily: GlobalStyles.FontFamily.typoGrotesk,
    textAlign: "left",
    color: GlobalStyles.Color.indigo_100,
    fontWeight: "700",
    left: "50%",
    position: "absolute",
  },
  iconIonicIosArrowForward: {
    marginTop: -3.08,
    left: 2,
    width: 11,
    height: 6,
    top: "50%",
    position: "absolute",
  },
  iconIonicIosArrowForwardWrapper: {
    top: 11,
    right: 26,
    left: 16,
    height: 27,
    position: "absolute",
  },
  schedulePaymentsParent: {
    borderTopLeftRadius: GlobalStyles.Border.br_4xl,
    borderTopRightRadius: GlobalStyles.Border.br_4xl,
    shadowColor: "rgba(1, 1, 253, 0.1)",
    shadowOffset: {
      width: 0,
      height: -3,
    },
    shadowRadius: 20,
    elevation: 20,
    shadowOpacity: 1,
    bottom: 0,
    backgroundColor: GlobalStyles.Color.white,
  },
  hello: {
    top: 195,
    fontSize: GlobalStyles.FontSize.size_base,
    color: GlobalStyles.Color.gray_700,
    left: 25,
  },
  hello1: {
    marginTop: -15.5,
    marginLeft: -90.5,
    top: "50%",
    left: "50%",
  },
  hello2: {
    marginTop: -4.5,
    right: -1,
    top: "50%",
  },
  hello3: {
    marginLeft: -89.5,
    bottom: 6,
    color: GlobalStyles.Color.gray_700,
    left: "50%",
  },
  groupChild: {
    maxHeight: "100%",
    width: 45,
    bottom: 0,
  },
  helloParent: {
    right: 17,
    bottom: 9,
    left: 12,
    height: 45,
    position: "absolute",
  },
  groupWrapper: {
    top: 0,
    backgroundColor: GlobalStyles.Color.gray_200,
    borderRadius: GlobalStyles.Border.br_4xl,
  },
  groupFrame: {
    marginTop: -32,
    top: "50%",
  },
  groupView: {
    bottom: 0,
  },
  groupContainer: {
    marginTop: -153.5,
    right: 20,
    height: 206,
    left: 25,
    top: "50%",
    position: "absolute",
  },
  groupIcon: {
    top: 135,
    left: 46,
    width: 8,
    height: 8,
    position: "absolute",
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
  maskGroup236: {
    bottom: 13,
  },
  rectangleParent: {
    bottom: 0,
  },
  hello10: {
    top: "38.33%",
    left: "29.14%",
    fontSize: GlobalStyles.FontSize.size_lg,
    textTransform: "uppercase",
    color: GlobalStyles.Color.black,
  },
  groupPressable: {
    top: 102,
    right: 24,
    height: 60,
    left: 25,
    position: "absolute",
  },
  groupParent: {
    width: 375,
    height: 749,
  },
  schedulePayment: {
    flex: 1,
    paddingTop: GlobalStyles.Padding.padding_md,
    width: "100%",
    backgroundColor: GlobalStyles.Color.white,
  },
});

export default SchedulePayment;
