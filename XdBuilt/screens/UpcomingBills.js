import * as React from "react";
import { Text, StyleSheet, Image, View } from "react-native";
import GlobalStyles from "../GlobalStyles";

const UpcomingBills = () => {
  return (
    <View style={styles.upcomingBills}>
      <View style={styles.groupParent}>
        <View
          style={[
            styles.upcomingBillsParent,
            styles.groupPosition1,
            styles.groupPosition2,
          ]}
        >
          <Text style={styles.upcomingBills1}>Upcoming Bills</Text>
          <View style={styles.iconIonicIosArrowForwardWrapper}>
            <Image
              style={styles.iconIonicIosArrowForward}
              resizeMode="cover"
              source={require("../assets/icon-ioniciosarrowforward9.png")}
            />
          </View>
        </View>
        <View style={[styles.groupContainer, styles.groupPosition]}>
          <View style={[styles.helloParent, styles.helloPosition2]}>
            <Text style={[styles.hello, styles.helloTypo, styles.helloTypo1]}>
              Electricty
            </Text>
            <Text
              style={[styles.hello1, styles.helloColor, styles.helloPosition1]}
            >
              Due on 22 September, 2022
            </Text>
            <Image
              style={[
                styles.groupChild,
                styles.groupPosition1,
                styles.groupPosition2,
              ]}
              resizeMode="cover"
              source={require("../assets/group-30337.png")}
            />
          </View>
          <Image
            style={styles.iconAwesomeCheckCircle}
            resizeMode="cover"
            source={require("../assets/icon-awesomecheckcircle165.png")}
          />
        </View>
        <View style={[styles.groupWrapper, styles.groupPosition]}>
          <View style={[styles.helloGroup, styles.helloPosition2]}>
            <Text
              style={[styles.hello2, styles.helloPosition, styles.helloTypo1]}
            >
              Water
            </Text>
            <Text style={[styles.hello3, styles.helloPosition1]}>£120</Text>
            <Image
              style={[
                styles.groupChild,
                styles.groupPosition1,
                styles.groupPosition2,
              ]}
              resizeMode="cover"
              source={require("../assets/group-30337.png")}
            />
            <Text
              style={[styles.hello4, styles.helloPosition, styles.helloColor]}
            >
              Due on 22 September, 2022
            </Text>
          </View>
        </View>
        <Text style={[styles.hello5, styles.helloTypo]}>
          Swipe right to select
        </Text>
        <View style={styles.groupFrame}>
          <View
            style={[
              styles.groupView,
              styles.groupPosition1,
              styles.groupPosition2,
            ]}
          >
            <View
              style={[
                styles.groupView,
                styles.groupPosition1,
                styles.groupPosition2,
              ]}
            >
              <View style={styles.groupInner} />
              <View style={[styles.maskGroup236, styles.groupPosition1]} />
            </View>
            <Text style={[styles.hello6, styles.helloTypo]}>Pay</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupPosition1: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  groupPosition2: {
    bottom: 0,
    left: 0,
    top: 0,
  },
  groupPosition: {
    height: 64,
    backgroundColor: GlobalStyles.Color.gray_200,
    borderRadius: GlobalStyles.Border.br_4xl,
    right: 40,
    left: 25,
    top: "50%",
    position: "absolute",
  },
  helloPosition2: {
    height: 45,
    left: 10,
    bottom: 9,
    position: "absolute",
  },
  helloTypo: {
    fontFamily: GlobalStyles.FontFamily.helvetica,
    textAlign: "left",
    position: "absolute",
  },
  helloTypo1: {
    marginTop: -13.5,
    fontSize: GlobalStyles.FontSize.size_base,
    color: GlobalStyles.Color.indigo_100,
    fontWeight: "700",
  },
  helloColor: {
    color: GlobalStyles.Color.blue_100,
    fontSize: GlobalStyles.FontSize.size_3xs,
  },
  helloPosition1: {
    right: -1,
    fontFamily: GlobalStyles.FontFamily.helvetica,
    top: "50%",
    textAlign: "left",
    position: "absolute",
  },
  helloPosition: {
    marginLeft: -82.5,
    fontFamily: GlobalStyles.FontFamily.helvetica,
    top: "50%",
    textAlign: "left",
    left: "50%",
    position: "absolute",
  },
  upcomingBills1: {
    marginLeft: -67.5,
    top: 35,
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
    left: 1,
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
  upcomingBillsParent: {
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
    right: 0,
    backgroundColor: GlobalStyles.Color.white,
  },
  hello: {
    marginLeft: -33,
    fontSize: GlobalStyles.FontSize.size_base,
    top: "50%",
    left: "50%",
    fontFamily: GlobalStyles.FontFamily.helvetica,
    marginTop: -13.5,
  },
  hello1: {
    marginTop: 5.5,
  },
  groupChild: {
    maxHeight: "100%",
    width: 45,
  },
  helloParent: {
    width: 184,
  },
  iconAwesomeCheckCircle: {
    marginTop: -11.5,
    right: 19,
    width: 24,
    height: 24,
    top: "50%",
    position: "absolute",
  },
  groupContainer: {
    marginTop: -260.75,
  },
  hello2: {
    fontSize: GlobalStyles.FontSize.size_base,
  },
  hello3: {
    marginTop: -5.5,
    fontSize: GlobalStyles.FontSize.size_base,
    color: GlobalStyles.Color.indigo_100,
    fontWeight: "700",
    right: -1,
  },
  hello4: {
    marginTop: 4.5,
  },
  helloGroup: {
    right: 17,
  },
  groupWrapper: {
    marginTop: -186.75,
  },
  hello5: {
    top: 90,
    color: GlobalStyles.Color.gray_700,
    fontSize: GlobalStyles.FontSize.size_base,
    left: 25,
  },
  groupInner: {
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
    right: 0,
    left: 0,
    top: 0,
  },
  groupView: {
    right: 0,
  },
  hello6: {
    top: "40%",
    left: "45.71%",
    fontSize: GlobalStyles.FontSize.size_lg,
    textTransform: "uppercase",
    color: GlobalStyles.Color.black,
  },
  groupFrame: {
    marginTop: 265.5,
    right: 24,
    height: 60,
    left: 25,
    top: "50%",
    position: "absolute",
  },
  groupParent: {
    width: 375,
    height: 749,
  },
  upcomingBills: {
    flex: 1,
    paddingTop: GlobalStyles.Padding.padding_sm,
    width: "100%",
    backgroundColor: GlobalStyles.Color.white,
  },
});

export default UpcomingBills;
