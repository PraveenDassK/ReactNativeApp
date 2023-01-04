import * as React from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
  ScrollView,
  Pressable,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import GlobalStyles from "../GlobalStyles";

const SplitAmount = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.splitAmount}>
      <View style={styles.groupParent}>
        <View style={[styles.helloParent, styles.helloParentLayout]}>
          <Text style={[styles.hello, styles.helloTypo5]}>£500</Text>
          <View style={styles.groupChild} />
        </View>
        <View style={styles.helloGroup}>
          <Text style={[styles.hello1, styles.helloTypo4]}>Add a note</Text>
          <Image
            style={styles.iconMaterialKeyboardVoice}
            resizeMode="cover"
            source={require("../assets/icon-materialkeyboardvoice.png")}
          />
        </View>
        <Text style={[styles.hello2, styles.hello2Position, styles.helloTypo4]}>
          4 Members
        </Text>
        <ScrollView
          style={[styles.scrollGroup2, styles.groupPosition1]}
          contentContainerStyle={styles.scrollGroup2Content}
        >
          <View style={styles.scrollGroup2Inner}>
            <View style={[styles.helloContainer, styles.helloPosition]}>
              <Text
                style={[styles.hello3, styles.helloTypo2, styles.helloTypo3]}
              >
                Hudson Maia
              </Text>
              <Text style={[styles.hello4, styles.helloTypo2]}>£125</Text>
              <Text style={[styles.hello5, styles.helloTypo1]}>
                +440123456789
              </Text>
              <Image
                style={[styles.groupItem, styles.groupPosition]}
                resizeMode="cover"
                source={require("../assets/group-30337.png")}
              />
            </View>
          </View>
          <View style={[styles.scrollGroup2Inner, styles.mt12]}>
            <View style={[styles.groupView, styles.helloPosition]}>
              <Text
                style={[styles.hello6, styles.helloTypo2, styles.helloTypo3]}
              >
                Konopelski Mitchel
              </Text>
              <Text style={[styles.hello7, styles.helloTypo1]}>
                +440123456789
              </Text>
              <Image
                style={[styles.groupItem, styles.groupPosition]}
                resizeMode="cover"
                source={require("../assets/group-303376.png")}
              />
            </View>
            <Text style={[styles.hello8, styles.helloTypo]}>£125</Text>
          </View>
          <View style={[styles.scrollGroup2Inner, styles.mt12]}>
            <View style={[styles.helloParent1, styles.helloPosition]}>
              <Text
                style={[styles.hello9, styles.helloTypo2, styles.helloTypo3]}
              >
                Bogan Hubert
              </Text>
              <Text style={[styles.hello10, styles.helloTypo1]}>
                +440123456789
              </Text>
              <Image
                style={[styles.groupItem, styles.groupPosition]}
                resizeMode="cover"
                source={require("../assets/group-303377.png")}
              />
            </View>
            <Text style={[styles.hello8, styles.helloTypo]}>£125</Text>
          </View>
          <View style={[styles.scrollGroup2Inner, styles.mt12]}>
            <View style={[styles.helloParent1, styles.helloPosition]}>
              <Text
                style={[styles.hello12, styles.helloTypo2, styles.helloTypo3]}
              >
                Fisher Judy
              </Text>
              <Text style={[styles.hello10, styles.helloTypo1]}>
                +440123456789
              </Text>
              <Image
                style={[styles.groupItem, styles.groupPosition]}
                resizeMode="cover"
                source={require("../assets/group-303378.png")}
              />
            </View>
            <Text style={[styles.hello14, styles.helloTypo]}>£125</Text>
          </View>
        </ScrollView>
        <Text style={[styles.hello15, styles.helloTypo2]}>Split Amount</Text>
        <Pressable
          style={[
            styles.groupWrapper,
            styles.hello2Position,
            styles.helloParentLayout,
          ]}
          onPress={() => navigation.navigate("SplitSummary")}
        >
          <View style={[styles.groupParent3, styles.groupPosition]}>
            <View style={[styles.groupParent3, styles.groupPosition]}>
              <View style={styles.rectangleView} />
              <View style={[styles.maskGroup236, styles.groupPosition1]} />
            </View>
            <Text style={[styles.hello16, styles.helloTypo5]}>Split</Text>
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
  scrollGroup2Content: {
    flexDirection: "column",
    paddingLeft: 25,
    paddingTop: 30,
    paddingRight: 14,
    paddingBottom: 9,
  },
  helloParentLayout: {
    height: 60,
    top: "50%",
  },
  helloTypo5: {
    textAlign: "left",
    fontFamily: GlobalStyles.FontFamily.helvetica,
    position: "absolute",
  },
  helloTypo4: {
    color: GlobalStyles.Color.gray_700,
    fontSize: GlobalStyles.FontSize.size_base,
    textAlign: "left",
    fontFamily: GlobalStyles.FontFamily.helvetica,
  },
  hello2Position: {
    left: 25,
    position: "absolute",
  },
  groupPosition1: {
    left: 0,
    position: "absolute",
  },
  helloPosition: {
    height: 45,
    bottom: 9,
    left: 26,
    position: "absolute",
  },
  helloTypo2: {
    color: GlobalStyles.Color.indigo_100,
    fontWeight: "700",
    textAlign: "left",
    position: "absolute",
  },
  helloTypo3: {
    top: 5,
    color: GlobalStyles.Color.indigo_100,
    fontWeight: "700",
    fontSize: GlobalStyles.FontSize.size_base,
    fontFamily: GlobalStyles.FontFamily.helvetica,
  },
  helloTypo1: {
    bottom: 6,
    color: GlobalStyles.Color.gray_700,
    fontSize: GlobalStyles.FontSize.size_base,
    textAlign: "left",
    fontFamily: GlobalStyles.FontFamily.helvetica,
    position: "absolute",
  },
  groupPosition: {
    bottom: 0,
    left: 0,
    top: 0,
    position: "absolute",
  },
  helloTypo: {
    right: 21,
    color: GlobalStyles.Color.indigo_100,
    fontWeight: "700",
    fontSize: GlobalStyles.FontSize.size_base,
    textAlign: "left",
    fontFamily: GlobalStyles.FontFamily.helvetica,
    top: "50%",
    position: "absolute",
  },
  hello: {
    left: 96,
    fontSize: GlobalStyles.FontSize.size_13xl,
    lineHeight: 37,
    color: GlobalStyles.Color.gray_1300,
    top: 0,
  },
  groupChild: {
    bottom: -1,
    left: -1,
    borderStyle: "solid",
    borderColor: "#707070",
    borderTopWidth: 1,
    height: 2,
    right: 0,
    position: "absolute",
  },
  helloParent: {
    marginTop: -235.5,
    left: 26,
    height: 60,
    right: 26,
    position: "absolute",
  },
  hello1: {
    top: 15,
    left: 13,
    position: "absolute",
  },
  iconMaterialKeyboardVoice: {
    marginTop: -9.35,
    right: 16,
    width: 14,
    height: 19,
    top: "50%",
    position: "absolute",
  },
  helloGroup: {
    marginTop: -158.5,
    left: 24,
    borderRadius: GlobalStyles.Border.br_5xl,
    height: 42,
    backgroundColor: GlobalStyles.Color.gray_200,
    right: 26,
    top: "50%",
    position: "absolute",
  },
  hello2: {
    top: 267,
  },
  hello3: {
    marginLeft: -74.5,
    left: "50%",
  },
  hello4: {
    marginTop: -6.5,
    right: -1,
    fontSize: GlobalStyles.FontSize.size_base,
    color: GlobalStyles.Color.indigo_100,
    fontWeight: "700",
    fontFamily: GlobalStyles.FontFamily.helvetica,
    top: "50%",
  },
  hello5: {
    marginLeft: -73.5,
    left: "50%",
  },
  groupItem: {
    maxHeight: "100%",
    width: 45,
  },
  helloContainer: {
    right: 22,
  },
  scrollGroup2Inner: {
    alignSelf: "stretch",
    borderRadius: GlobalStyles.Border.br_4xl,
    height: 64,
    backgroundColor: GlobalStyles.Color.gray_200,
  },
  hello6: {
    right: -1,
  },
  hello7: {
    right: 25,
  },
  groupView: {
    width: 187,
  },
  hello8: {
    marginTop: -6,
  },
  hello9: {
    right: 8,
  },
  hello10: {
    right: -1,
  },
  helloParent1: {
    width: 161,
  },
  hello12: {
    right: 22,
  },
  hello14: {
    marginTop: -5,
  },
  scrollGroup2: {
    right: 15,
    bottom: 87,
    height: 331,
  },
  hello15: {
    top: 39,
    left: 120,
    fontSize: GlobalStyles.FontSize.size_4xl,
    fontFamily: GlobalStyles.FontFamily.typoGrotesk,
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
    right: 0,
    top: 0,
  },
  groupParent3: {
    right: 0,
  },
  hello16: {
    top: "40%",
    left: "43.56%",
    fontSize: GlobalStyles.FontSize.size_lg,
    textTransform: "uppercase",
    color: GlobalStyles.Color.black,
  },
  groupWrapper: {
    marginTop: 289.5,
    right: 24,
  },
  groupParent: {
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
    height: 699,
    backgroundColor: GlobalStyles.Color.white,
  },
  splitAmount: {
    flex: 1,
    paddingTop: GlobalStyles.Padding.padding_md,
    width: "100%",
    backgroundColor: GlobalStyles.Color.white,
  },
});

export default SplitAmount;
