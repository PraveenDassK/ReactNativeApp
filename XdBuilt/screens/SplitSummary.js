import * as React from "react";
import {
  Text,
  StyleSheet,
  ScrollView,
  Image,
  View,
  Pressable,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import GlobalStyles from "../GlobalStyles";

const SplitSummary = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.splitSummary}>
      <View style={styles.helloParent}>
        <Text style={[styles.hello, styles.helloTypo5]}>Split Amongst (3)</Text>
        <Text style={[styles.hello1, styles.helloTypo4]}>
          Group : Our Expenses
        </Text>
        <ScrollView
          style={styles.scrollGroup2}
          contentContainerStyle={styles.scrollGroup2Content}
        >
          <View style={[styles.groupParent, styles.rectangleLayout]}>
            <View
              style={[
                styles.helloGroup,
                styles.groupPosition2,
                styles.helloPosition,
              ]}
            >
              <Text
                style={[styles.hello2, styles.helloTypo2, styles.helloTypo3]}
              >
                Hudson Maia
              </Text>
              <Text style={[styles.hello3, styles.helloTypo1]}>Paid</Text>
              <Image
                style={[styles.groupChild, styles.groupPosition1]}
                resizeMode="cover"
                source={require("../assets/group-30337.png")}
              />
            </View>
            <Text style={[styles.hello4, styles.helloTypo]}>£125</Text>
          </View>
          <View
            style={[styles.groupParent, styles.mt12, styles.rectangleLayout]}
          >
            <View
              style={[
                styles.helloContainer,
                styles.groupPosition2,
                styles.helloPosition,
              ]}
            >
              <Text
                style={[styles.hello2, styles.helloTypo2, styles.helloTypo3]}
              >
                Konopelski Mitchel
              </Text>
              <Text style={[styles.hello6, styles.helloTypo1]}>Paid</Text>
              <Image
                style={[styles.groupChild, styles.groupPosition1]}
                resizeMode="cover"
                source={require("../assets/group-303376.png")}
              />
            </View>
            <Text style={[styles.hello4, styles.helloTypo]}>£125</Text>
          </View>
          <View style={[styles.rectangleParent, styles.mt12]}>
            <View
              style={[
                styles.rectangle,
                styles.groupPosition,
                styles.rectangleLayout,
              ]}
            />
            <View style={[styles.groupView, styles.groupPosition2]}>
              <Text
                style={[styles.hello2, styles.helloTypo2, styles.helloTypo3]}
              >
                Bogan Hubert
              </Text>
              <Text style={[styles.hello9, styles.helloTypo1]}>Unpaid</Text>
              <Image
                style={[styles.groupChild, styles.groupPosition1]}
                resizeMode="cover"
                source={require("../assets/group-303377.png")}
              />
            </View>
            <Text style={[styles.hello4, styles.helloTypo]}>£125</Text>
            <Text style={[styles.hello11, styles.helloTypo]}>£125</Text>
          </View>
          <View
            style={[styles.groupParent, styles.mt_40, styles.rectangleLayout]}
          >
            <View
              style={[
                styles.helloParent1,
                styles.groupPosition2,
                styles.helloPosition,
              ]}
            >
              <Text
                style={[styles.hello12, styles.helloTypo2, styles.helloTypo3]}
              >
                Fisher Judy
              </Text>
              <Text style={[styles.hello13, styles.helloTypo1]}>
                Sent the request
              </Text>
              <Image
                style={[styles.groupChild, styles.groupPosition1]}
                resizeMode="cover"
                source={require("../assets/group-303378.png")}
              />
            </View>
            <Text style={[styles.hello4, styles.helloTypo]}>£125</Text>
          </View>
        </ScrollView>
        <View style={styles.groupParent2}>
          <View style={[styles.helloWrapper, styles.wrapperLayout]}>
            <Text style={[styles.hello15, styles.helloTypo5]}>£500</Text>
          </View>
          <Text style={[styles.hello16, styles.helloTypo4]}>£125 Paid</Text>
          <Text style={[styles.hello17, styles.helloTypo4]}>£250 Left</Text>
          <View style={[styles.lineView, styles.groupPosition]} />
          <Image
            style={styles.lineIcon}
            resizeMode="cover"
            source={require("../assets/line-288.png")}
          />
        </View>
        <View style={styles.maskGroup236} />
        <Text style={[styles.hello18, styles.helloTypo2]}>Summary</Text>
        <Pressable
          style={[styles.groupWrapper, styles.wrapperLayout]}
          onPress={() => navigation.navigate("Reminder")}
        >
          <View style={[styles.groupPosition, styles.groupPosition1]}>
            <View style={styles.groupPosition1}>
              <View style={styles.rectangleView} />
              <View style={[styles.maskGroup2361, styles.groupPosition]} />
            </View>
            <Text style={[styles.hello19, styles.helloTypo5]}>
              Send Reminder
            </Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mt12: {
    marginTop: GlobalStyles.Margin.margin_5xs,
  },
  mt_40: {
    marginTop: -40,
  },
  scrollGroup2Content: {
    flexDirection: "column",
    paddingLeft: 24,
    paddingTop: 30,
    paddingRight: 8,
    paddingBottom: 41,
  },
  helloTypo5: {
    fontFamily: GlobalStyles.FontFamily.helvetica,
    textAlign: "left",
    position: "absolute",
  },
  helloTypo4: {
    fontSize: GlobalStyles.FontSize.size_xs,
    top: 77,
    fontFamily: GlobalStyles.FontFamily.helvetica,
    position: "absolute",
  },
  rectangleLayout: {
    height: 64,
    backgroundColor: GlobalStyles.Color.gray_200,
    borderRadius: GlobalStyles.Border.br_4xl,
  },
  groupPosition2: {
    height: 45,
    left: 13,
    position: "absolute",
  },
  helloPosition: {
    bottom: 9,
    left: 13,
  },
  helloTypo2: {
    fontWeight: "700",
    color: GlobalStyles.Color.indigo_100,
    textAlign: "left",
    position: "absolute",
  },
  helloTypo3: {
    top: 5,
    fontWeight: "700",
    fontFamily: GlobalStyles.FontFamily.helvetica,
    fontSize: GlobalStyles.FontSize.size_base,
  },
  helloTypo1: {
    bottom: 6,
    textAlign: "left",
    color: GlobalStyles.Color.gray_700,
    fontFamily: GlobalStyles.FontFamily.helvetica,
    fontSize: GlobalStyles.FontSize.size_base,
    position: "absolute",
  },
  groupPosition1: {
    bottom: 0,
    top: 0,
    left: 0,
  },
  helloTypo: {
    left: 253,
    fontWeight: "700",
    fontSize: GlobalStyles.FontSize.size_xs,
    textAlign: "left",
    fontFamily: GlobalStyles.FontFamily.helvetica,
    position: "absolute",
  },
  groupPosition: {
    right: 0,
    position: "absolute",
  },
  wrapperLayout: {
    height: 60,
    position: "absolute",
  },
  hello: {
    top: 220,
    textAlign: "left",
    color: GlobalStyles.Color.gray_700,
    fontSize: GlobalStyles.FontSize.size_base,
    fontFamily: GlobalStyles.FontFamily.helvetica,
    left: 25,
  },
  hello1: {
    left: 24,
    textAlign: "left",
    color: GlobalStyles.Color.gray_700,
  },
  hello2: {
    color: GlobalStyles.Color.indigo_100,
    right: -1,
  },
  hello3: {
    marginLeft: -15,
    left: "50%",
  },
  groupChild: {
    maxHeight: "100%",
    width: 45,
    position: "absolute",
  },
  helloGroup: {
    width: 144,
  },
  hello4: {
    top: 28,
    color: GlobalStyles.Color.indigo_100,
  },
  groupParent: {
    alignSelf: "stretch",
  },
  hello6: {
    marginLeft: -35.5,
    left: "50%",
  },
  helloContainer: {
    width: 185,
  },
  rectangle: {
    top: 0,
    left: 0,
  },
  hello9: {
    marginLeft: -18,
    left: "50%",
  },
  groupView: {
    top: 10,
    width: 150,
  },
  hello11: {
    top: 104,
    color: GlobalStyles.Color.white,
  },
  rectangleParent: {
    height: 116,
    alignSelf: "stretch",
  },
  hello12: {
    marginLeft: -23,
    left: "50%",
    color: GlobalStyles.Color.indigo_100,
  },
  hello13: {
    right: -1,
  },
  helloParent1: {
    width: 160,
  },
  scrollGroup2: {
    marginTop: -148.5,
    right: 15,
    height: 363,
    left: 0,
    top: "50%",
    position: "absolute",
  },
  hello15: {
    fontSize: GlobalStyles.FontSize.size_13xl,
    lineHeight: 37,
    color: GlobalStyles.Color.gray_1300,
    top: 0,
    left: 0,
    textAlign: "left",
  },
  helloWrapper: {
    marginLeft: -65.86,
    width: 133,
    top: 0,
    left: "50%",
  },
  hello16: {
    left: 1,
    color: GlobalStyles.Color.blue_100,
    textAlign: "left",
  },
  hello17: {
    left: 259,
    textAlign: "right",
    color: GlobalStyles.Color.gray_700,
  },
  lineView: {
    marginTop: 12.75,
    left: -3,
    borderStyle: "solid",
    borderColor: "#f6f6f6",
    borderTopWidth: 3,
    height: 6,
    top: "50%",
  },
  lineIcon: {
    marginTop: 14.25,
    right: 89,
    left: -1,
    maxWidth: "100%",
    overflow: "hidden",
    height: 19,
    top: "50%",
    position: "absolute",
  },
  groupParent2: {
    top: 108,
    right: 39,
    left: 28,
    height: 89,
    position: "absolute",
  },
  maskGroup236: {
    right: 41,
    bottom: 54,
    height: 47,
    left: 24,
    position: "absolute",
  },
  hello18: {
    top: 39,
    left: 142,
    fontSize: GlobalStyles.FontSize.size_4xl,
    fontFamily: GlobalStyles.FontFamily.typoGrotesk,
    color: GlobalStyles.Color.indigo_100,
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
    top: 0,
    left: 0,
  },
  hello19: {
    top: "40%",
    left: "30.67%",
    fontSize: GlobalStyles.FontSize.size_lg,
    textTransform: "uppercase",
    color: GlobalStyles.Color.black,
    textAlign: "left",
  },
  groupWrapper: {
    marginTop: 264.5,
    right: 24,
    top: "50%",
    left: 25,
    height: 60,
  },
  helloParent: {
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
    width: 375,
    height: 749,
    backgroundColor: GlobalStyles.Color.white,
  },
  splitSummary: {
    flex: 1,
    paddingTop: GlobalStyles.Padding.padding_md,
    width: "100%",
    backgroundColor: GlobalStyles.Color.white,
  },
});

export default SplitSummary;
