import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import GlobalStyles from "../GlobalStyles";

const BillPaidSuccessfully = () => {
  return (
    <View style={styles.billPaidSuccessfully}>
      <View style={styles.iconAwesomeCheckCircleParent}>
        <Image
          style={[styles.iconAwesomeCheckCircle, styles.componentPosition]}
          resizeMode="cover"
          source={require("../assets/icon-awesomecheckcircle164.png")}
        />
        <Text style={[styles.hello, styles.helloTypo, styles.helloTypo1]}>
          £ 500.00
        </Text>
        <Text style={[styles.hello1, styles.helloTypo, styles.helloTypo1]}>
          Bill Paid Successfully
        </Text>
        <View style={[styles.component37112Parent, styles.helloPosition]}>
          <View style={[styles.component37112, styles.helloPosition]}>
            <View style={[styles.helloWrapper, styles.helloPosition]}>
              <Text
                style={[styles.hello2, styles.helloPosition, styles.helloTypo]}
              >
                SMS
              </Text>
            </View>
            <Image
              style={[styles.component37112Child, styles.childLayout]}
              resizeMode="cover"
              source={require("../assets/group-32266.png")}
            />
          </View>
          <View style={[styles.component37113, styles.componentPosition]}>
            <View style={[styles.helloWrapper, styles.helloPosition]}>
              <Text
                style={[styles.hello2, styles.helloPosition, styles.helloTypo]}
              >
                Download
              </Text>
            </View>
            <Image
              style={[styles.component37113Child, styles.childLayout]}
              resizeMode="cover"
              source={require("../assets/group-32266.png")}
            />
          </View>
          <View style={[styles.component37114, styles.componentPosition]}>
            <View style={[styles.helloWrapper, styles.helloPosition]}>
              <Text
                style={[styles.hello2, styles.helloPosition, styles.helloTypo]}
              >
                Share
              </Text>
            </View>
            <Image
              style={[styles.component37114Child, styles.childLayout]}
              resizeMode="cover"
              source={require("../assets/group-32266.png")}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  componentPosition: {
    position: "absolute",
    top: 0,
  },
  helloTypo: {
    textAlign: "left",
    fontFamily: GlobalStyles.FontFamily.helvetica,
  },
  helloTypo1: {
    fontWeight: "700",
    top: "50%",
    textAlign: "left",
    fontFamily: GlobalStyles.FontFamily.helvetica,
    position: "absolute",
  },
  helloPosition: {
    left: 0,
    position: "absolute",
  },
  childLayout: {
    height: 12,
    width: 12,
    bottom: -16,
    position: "absolute",
  },
  iconAwesomeCheckCircle: {
    right: 19,
    left: 20,
    maxWidth: "100%",
    overflow: "hidden",
    height: 180,
    top: 0,
  },
  hello: {
    marginTop: 27.12,
    marginLeft: -58.5,
    fontSize: GlobalStyles.FontSize.size_9xl,
    color: GlobalStyles.Color.gray_1300,
    left: "50%",
  },
  hello1: {
    marginTop: 66.12,
    left: 6,
    fontSize: GlobalStyles.FontSize.size_4xl,
    color: GlobalStyles.Color.indigo_100,
  },
  hello2: {
    fontSize: GlobalStyles.FontSize.size_base,
    color: GlobalStyles.Color.gray_700,
    bottom: 0,
  },
  helloWrapper: {
    top: 2,
    height: 14,
    right: 0,
  },
  component37112Child: {
    right: 2,
  },
  component37112: {
    width: 30,
    bottom: 0,
    top: 0,
  },
  component37113Child: {
    marginLeft: -15.1,
    left: "50%",
  },
  component37113: {
    marginLeft: -34.5,
    width: 62,
    bottom: 0,
    left: "50%",
    top: 0,
  },
  component37114Child: {
    marginLeft: -2.6,
    left: "50%",
  },
  component37114: {
    width: 37,
    bottom: 0,
    right: 0,
    top: 0,
  },
  component37112Parent: {
    height: 34,
    bottom: 0,
    right: 0,
  },
  iconAwesomeCheckCircleParent: {
    width: 219,
    height: 446,
  },
  billPaidSuccessfully: {
    backgroundColor: GlobalStyles.Color.white,
    flex: 1,
    width: "100%",
    paddingLeft: GlobalStyles.Padding.padding_lg,
    paddingTop: GlobalStyles.Padding.padding_11xl,
    paddingRight: GlobalStyles.Padding.padding_lg,
  },
});

export default BillPaidSuccessfully;
