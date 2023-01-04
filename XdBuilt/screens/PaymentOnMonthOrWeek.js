import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import GlobalStyles from "../GlobalStyles";

const PaymentOnMonthOrWeek = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.paymentOnMonthOrWeek}>
      <View style={styles.paymentOnMonthOrWeekInner}>
        <View style={[styles.path23664Parent, styles.maskGroup236Position]}>
          <Image
            style={[styles.path23664Icon, styles.groupChildPosition]}
            resizeMode="cover"
            source={require("../assets/path-23664.png")}
          />
          <View style={[styles.helloParent, styles.helloParentPosition]}>
            <Text style={[styles.hello, styles.helloTypo1]}>September</Text>
            <Image
              style={[styles.groupChild, styles.groupChildPosition]}
              resizeMode="cover"
              source={require("../assets/group-30564.png")}
            />
          </View>
          <View style={[styles.component2421, styles.helloParentPosition]}>
            <View
              style={[styles.component2421Child, styles.component2421Position]}
            />
            <View
              style={[styles.component2421Item, styles.component2421Position]}
            />
            <Text style={[styles.hello1, styles.helloTypo]}>
              <Text style={styles.every}>Every</Text>
              <Text style={styles.every}>Month On</Text>
            </Text>
            <Image
              style={[styles.component2421Inner, styles.groupChildPosition]}
              resizeMode="cover"
              source={require("../assets/rectangle-60331.png")}
            />
            <Text style={[styles.hello2, styles.helloTypo]}>
              <Text style={styles.every}>Every</Text>
              <Text style={styles.every}>Week On</Text>
            </Text>
          </View>
          <Text style={[styles.hello3, styles.helloTypo1]}>
            <Text style={styles.every}>How often this payment</Text>
            <Text style={styles.every}>should be made</Text>
          </Text>
          <Pressable
            style={[styles.groupWrapper, styles.helloParentPosition]}
            onPress={() => navigation.navigate("SuccessScheduledPayment")}
          >
            <View style={[styles.path23664Parent, styles.maskGroup236Position]}>
              <View
                style={[styles.path23664Parent, styles.maskGroup236Position]}
              >
                <View style={styles.groupItem} />
                <View
                  style={[styles.maskGroup236, styles.maskGroup236Position]}
                />
              </View>
              <Text style={styles.hello4}>Setup Schedule Payment</Text>
            </View>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  maskGroup236Position: {
    left: 0,
    top: 0,
    right: 0,
    position: "absolute",
  },
  groupChildPosition: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    left: 0,
    top: 0,
    position: "absolute",
  },
  helloParentPosition: {
    top: "50%",
    position: "absolute",
  },
  helloTypo1: {
    textAlign: "center",
    color: GlobalStyles.Color.indigo_100,
    fontWeight: "700",
    position: "absolute",
  },
  component2421Position: {
    borderRadius: GlobalStyles.Border.br_sm,
    left: 0,
    bottom: 0,
    top: 0,
    position: "absolute",
  },
  helloTypo: {
    lineHeight: 14,
    fontSize: GlobalStyles.FontSize.size_xs,
    marginTop: -12.5,
    textAlign: "center",
    fontFamily: GlobalStyles.FontFamily.helvetica,
    top: "50%",
    position: "absolute",
  },
  path23664Icon: {
    right: -60,
    bottom: -60,
  },
  hello: {
    marginLeft: -41.08,
    top: 3,
    fontSize: GlobalStyles.FontSize.size_xl,
    fontFamily: GlobalStyles.FontFamily.helvetica,
    left: "50%",
  },
  groupChild: {
    bottom: 0,
    right: 0,
  },
  helloParent: {
    marginTop: -169.25,
    marginLeft: -127.5,
    width: 240,
    height: 269,
    left: "50%",
  },
  component2421Child: {
    backgroundColor: GlobalStyles.Color.gray_200,
    right: 0,
  },
  component2421Item: {
    backgroundColor: GlobalStyles.Color.blue_100,
    width: 117,
  },
  every: {
    margin: GlobalStyles.Margin.margin_8xs,
  },
  hello1: {
    left: 34,
    color: GlobalStyles.Color.white,
  },
  component2421Inner: {
    opacity: 0.1,
    bottom: 0,
    right: 0,
  },
  hello2: {
    right: 31,
    color: GlobalStyles.Color.gray_700,
  },
  component2421: {
    marginTop: -252.5,
    marginLeft: -124.5,
    width: 234,
    height: 45,
    left: "50%",
  },
  hello3: {
    top: 39,
    left: 75,
    fontSize: GlobalStyles.FontSize.size_4xl,
    lineHeight: 25,
    fontFamily: GlobalStyles.FontFamily.typoGrotesk,
  },
  groupItem: {
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
  path23664Parent: {
    bottom: 0,
  },
  hello4: {
    top: "40%",
    left: "17.79%",
    fontSize: GlobalStyles.FontSize.size_lg,
    textTransform: "uppercase",
    color: GlobalStyles.Color.black,
    textAlign: "left",
    fontFamily: GlobalStyles.FontFamily.helvetica,
    position: "absolute",
  },
  groupWrapper: {
    marginTop: 264.5,
    right: 24,
    left: 25,
    height: 60,
  },
  paymentOnMonthOrWeekInner: {
    width: 375,
    height: 749,
  },
  paymentOnMonthOrWeek: {
    backgroundColor: GlobalStyles.Color.white,
    flex: 1,
    paddingTop: GlobalStyles.Padding.padding_md,
    width: "100%",
  },
});

export default PaymentOnMonthOrWeek;
