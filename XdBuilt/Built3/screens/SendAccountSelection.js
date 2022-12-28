import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import GlobalStyles from "../GlobalStyles";

const SendAccountSelection = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.sendAccountSelection}>
      <View style={styles.sendAccountSelectionChild} />
      <View style={[styles.sendAccountSelectionInner, styles.mt_749]}>
        <View style={styles.groupChild} />
      </View>
      <View style={[styles.helloParent, styles.mt_705]}>
        <Text style={[styles.hello, styles.helloTypo2, styles.helloTypo3]}>
          Hudson Maia
        </Text>
        <Text style={[styles.hello1, styles.helloTypo2, styles.helloTypo3]}>
          +440123456789
        </Text>
        <Text style={[styles.hello2, styles.helloTypo1]}>
          Joined September 2022
        </Text>
        <Image
          style={[
            styles.groupItem,
            styles.groupItemLayout,
            styles.helloGroupPosition,
          ]}
          resizeMode="cover"
          source={require("../assets/group-30337.png")}
        />
      </View>
      <View style={[styles.groupParent, styles.mt_31, styles.ml2]}>
        <View style={[styles.helloGroup, styles.helloPosition1]}>
          <Text
            style={[
              styles.hello3,
              styles.helloGroupPosition,
              styles.helloTypo1,
            ]}
          >
            £20
          </Text>
          <Image
            style={[styles.groupInner, styles.groupPosition]}
            resizeMode="cover"
            source={require("../assets/group-30409.png")}
          />
        </View>
        <View style={[styles.helloContainer, styles.helloPosition1]}>
          <Text
            style={[
              styles.hello3,
              styles.helloGroupPosition,
              styles.helloTypo1,
            ]}
          >
            £50
          </Text>
          <Image
            style={[styles.groupIcon, styles.groupPosition]}
            resizeMode="cover"
            source={require("../assets/group-30410.png")}
          />
        </View>
        <View style={[styles.groupView, styles.groupViewPosition]}>
          <Text
            style={[
              styles.hello3,
              styles.helloGroupPosition,
              styles.helloTypo1,
            ]}
          >
            £100
          </Text>
          <Image
            style={[styles.groupChild1, styles.groupPosition]}
            resizeMode="cover"
            source={require("../assets/group-30408.png")}
          />
        </View>
      </View>
      <View style={[styles.helloParent1, styles.mt_441, styles.ml1]}>
        <Text
          style={[styles.hello6, styles.helloGroupPosition, styles.helloTypo1]}
        >
          Pay
        </Text>
        <Text style={[styles.hello7, styles.helloTypo]}>£500</Text>
        <View style={styles.lineView} />
      </View>
      <View style={[styles.helloParent2, styles.mt12, styles.ml1]}>
        <Text style={[styles.hello8, styles.helloTypo1]}>Add a note</Text>
        <Image
          style={styles.iconMaterialKeyboardVoice}
          resizeMode="cover"
          source={require("../assets/icon-materialkeyboardvoice.png")}
        />
      </View>
      <View style={[styles.maskGroup236, styles.mt43, styles.ml1]} />
      <View style={[styles.homeIndicator, styles.mt163, styles.ml1]} />
      <View style={[styles.helloParent2, styles.mt_42, styles.ml1]}>
        <Text style={[styles.hello8, styles.helloTypo1]}>Add a note</Text>
        <Image
          style={styles.iconMaterialKeyboardVoice}
          resizeMode="cover"
          source={require("../assets/icon-materialkeyboardvoice.png")}
        />
      </View>
      <View style={[styles.helloParent4, styles.mt77]}>
        <Text style={[styles.hello10, styles.helloTypo1]}>
          Choose Account to Pay With
        </Text>
        <View style={[styles.rectangleView, styles.rectangleViewPosition]} />
        <View
          style={[
            styles.component2041,
            styles.componentPosition,
            styles.componentLayout,
          ]}
        >
          <Text style={[styles.hello11, styles.helloPosition]}>
            XYZ Bank ****1234
          </Text>
          <Text style={[styles.hello12, styles.helloPosition]}>
            Current Account
          </Text>
          <View style={[styles.component2041Child, styles.componentPosition]} />
        </View>
        <Pressable
          style={styles.groupWrapper}
          onPress={() => navigation.navigate("SelectBank")}
        >
          <View style={styles.helloParent5}>
            <Text style={[styles.hello13, styles.helloTypo]}>Add Bank</Text>
            <Image
              style={[
                styles.bank2Icon,
                styles.bank2IconPosition,
                styles.groupItemLayout,
              ]}
              resizeMode="cover"
              source={require("../assets/bank2.png")}
            />
          </View>
        </Pressable>
        <View style={[styles.groupChild2, styles.groupChildPosition]} />
        <View style={[styles.groupChild3, styles.groupChildPosition]} />
        <View
          style={[
            styles.component2042,
            styles.componentPosition,
            styles.componentLayout,
          ]}
        >
          <Text style={[styles.hello11, styles.helloPosition]}>
            XYZ Bank ****1234
          </Text>
          <Text style={[styles.hello12, styles.helloPosition]}>
            Current Account
          </Text>
          <View style={[styles.component2041Child, styles.componentPosition]} />
        </View>
        <Pressable
          style={[
            styles.component20827Parent,
            styles.parentLayout,
            styles.rectangleViewPosition,
          ]}
          onPress={() => navigation.navigate("SendEnterPIN")}
        >
          <View style={[styles.component20827, styles.groupViewPosition]}>
            <View style={[styles.rectangleParent, styles.parentLayout]}>
              <View style={[styles.groupChild4, styles.bank2IconPosition]} />
              <View style={[styles.maskGroup2361, styles.helloGroupPosition]} />
            </View>
          </View>
          <Text style={[styles.hello16, styles.helloTypo2]}>Send</Text>
        </Pressable>
      </View>
      <View style={[styles.homeIndicator, styles.mt_5, styles.ml1]} />
    </View>
  );
};

const styles = StyleSheet.create({
  mt_749: {
    marginTop: GlobalStyles.Margin.margin_58xs,
  },
  mt_705: {
    marginTop: GlobalStyles.Margin.margin_56xs,
  },
  mt_31: {
    marginTop: GlobalStyles.Margin.margin_36xs,
  },
  ml2: {
    marginLeft: GlobalStyles.Margin.margin_23xs,
  },
  mt_441: {
    marginTop: -441,
  },
  ml1: {
    marginLeft: GlobalStyles.Margin.margin_24xs,
  },
  mt12: {
    marginTop: GlobalStyles.Margin.margin_13xs,
  },
  mt43: {
    marginTop: GlobalStyles.Margin.margin_21xl,
  },
  mt163: {
    marginTop: 163,
  },
  mt_42: {
    marginTop: GlobalStyles.Margin.margin_39xs,
  },
  mt77: {
    marginTop: 77,
  },
  mt_5: {
    marginTop: -5,
  },
  helloTypo2: {
    textAlign: "left",
    fontFamily: GlobalStyles.FontFamily.helvetica,
    position: "absolute",
  },
  helloTypo3: {
    color: GlobalStyles.Color.indigo,
    fontSize: GlobalStyles.FontSize.size_2xl,
    textAlign: "left",
    fontFamily: GlobalStyles.FontFamily.helvetica,
  },
  helloTypo1: {
    color: GlobalStyles.Color.gray_800,
    textAlign: "left",
    fontFamily: GlobalStyles.FontFamily.helvetica,
  },
  groupItemLayout: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
  },
  helloGroupPosition: {
    top: 0,
    position: "absolute",
  },
  helloPosition1: {
    width: 42,
    bottom: 0,
    top: 0,
    position: "absolute",
  },
  groupPosition: {
    height: 17,
    width: 18,
    bottom: 0,
    left: "50%",
    position: "absolute",
  },
  groupViewPosition: {
    bottom: 0,
    right: 0,
    top: 0,
    position: "absolute",
  },
  helloTypo: {
    color: GlobalStyles.Color.blue,
    textAlign: "left",
    fontFamily: GlobalStyles.FontFamily.helvetica,
    position: "absolute",
  },
  rectangleViewPosition: {
    left: 25,
    right: 24,
  },
  componentPosition: {
    height: 32,
    top: "50%",
    position: "absolute",
  },
  componentLayout: {
    width: 181,
    height: 32,
    left: 36,
  },
  helloPosition: {
    marginLeft: -29.5,
    top: "50%",
    color: GlobalStyles.Color.gray_800,
    fontSize: GlobalStyles.FontSize.size_sm,
    textAlign: "left",
    fontFamily: GlobalStyles.FontFamily.helvetica,
    left: "50%",
    position: "absolute",
  },
  bank2IconPosition: {
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  groupChildPosition: {
    borderColor: "#f6f5f8",
    left: 25,
    right: 24,
    top: "50%",
    height: 2,
    borderTopWidth: 1,
    borderStyle: "solid",
    position: "absolute",
  },
  parentLayout: {
    height: 60,
    position: "absolute",
  },
  sendAccountSelectionChild: {
    height: 812,
    width: 375,
    backgroundColor: GlobalStyles.Color.gray_300,
  },
  groupChild: {
    marginLeft: -27,
    top: 10,
    borderTopWidth: 3,
    width: 52,
    height: 6,
    borderColor: "#707070",
    borderStyle: "solid",
    left: "50%",
    position: "absolute",
  },
  sendAccountSelectionInner: {
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
    height: 749,
    width: 375,
    backgroundColor: GlobalStyles.Color.white,
  },
  hello: {
    top: 97,
    left: 12,
    fontWeight: "700",
  },
  hello1: {
    top: 127,
    left: 0,
  },
  hello2: {
    top: 156,
    fontSize: GlobalStyles.FontSize.size_sm,
    left: 0,
    position: "absolute",
  },
  groupItem: {
    right: 39,
    bottom: 106,
    left: 43,
  },
  helloParent: {
    width: 149,
    height: 172,
  },
  hello3: {
    fontSize: GlobalStyles.FontSize.size_5xl,
    lineHeight: 22,
    left: 0,
  },
  groupInner: {
    marginLeft: -7.94,
  },
  helloGroup: {
    left: 0,
  },
  groupIcon: {
    marginLeft: -7.71,
  },
  helloContainer: {
    marginLeft: -27.5,
    left: "50%",
  },
  groupChild1: {
    marginLeft: -7.22,
  },
  groupView: {
    width: 56,
    right: 0,
  },
  groupParent: {
    width: 311,
    height: 54,
  },
  hello6: {
    left: 142,
    fontSize: GlobalStyles.FontSize.size_lg,
  },
  hello7: {
    top: 32,
    left: 75,
    fontSize: GlobalStyles.FontSize.size_10xl,
    lineHeight: 37,
  },
  lineView: {
    bottom: -1,
    left: -1,
    height: 2,
    borderTopWidth: 1,
    right: 0,
    borderColor: "#707070",
    borderStyle: "solid",
    position: "absolute",
  },
  helloParent1: {
    height: 99,
    width: 310,
  },
  hello8: {
    top: 13,
    left: 13,
    fontSize: GlobalStyles.FontSize.size_sm,
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
  helloParent2: {
    width: 312,
    height: 42,
    borderRadius: GlobalStyles.Border.br_4xl,
    backgroundColor: GlobalStyles.Color.gray_300,
  },
  maskGroup236: {
    height: 47,
    width: 310,
  },
  homeIndicator: {
    borderRadius: GlobalStyles.Border.br_7xl,
    backgroundColor: GlobalStyles.Color.black,
    width: 134,
    height: 5,
  },
  hello10: {
    top: 34,
    left: 99,
    fontSize: GlobalStyles.FontSize.size_sm,
    position: "absolute",
  },
  rectangleView: {
    marginTop: -151,
    height: 234,
    top: "50%",
    borderRadius: GlobalStyles.Border.br_4xl,
    position: "absolute",
    backgroundColor: GlobalStyles.Color.white,
  },
  hello11: {
    marginTop: -16,
  },
  hello12: {
    marginTop: 0,
  },
  component2041Child: {
    borderRadius: GlobalStyles.Border.br_5xs,
    backgroundColor: GlobalStyles.Color.indigo,
    width: 48,
    marginTop: -16,
    left: 0,
  },
  component2041: {
    marginTop: -80,
  },
  hello13: {
    right: -1,
    bottom: 2,
    fontSize: GlobalStyles.FontSize.size_sm,
  },
  bank2Icon: {
    width: "24.49%",
    right: "75.51%",
  },
  helloParent5: {
    marginTop: -11.8,
    marginLeft: -45.5,
    width: 90,
    height: 21,
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  groupWrapper: {
    marginTop: 16,
    right: 38,
    borderRadius: GlobalStyles.Border.br_lg,
    borderColor: "#0101fd",
    borderWidth: 1,
    height: 53,
    left: 36,
    top: "50%",
    borderStyle: "solid",
    position: "absolute",
  },
  groupChild2: {
    marginTop: -91.5,
  },
  groupChild3: {
    marginTop: -38.5,
  },
  component2042: {
    marginTop: -132,
  },
  groupChild4: {
    right: "0%",
    borderRadius: GlobalStyles.Border.br_md,
    backgroundColor: GlobalStyles.Color.gray_500,
    width: "100%",
  },
  maskGroup2361: {
    bottom: 13,
    right: 0,
    left: 0,
  },
  rectangleParent: {
    marginTop: -30,
    top: "50%",
    right: 0,
    left: 0,
  },
  component20827: {
    right: 0,
    left: 0,
  },
  hello16: {
    top: "36.67%",
    left: "43.56%",
    fontSize: GlobalStyles.FontSize.size_base,
    lineHeight: 17,
    textTransform: "uppercase",
    color: GlobalStyles.Color.black,
    textAlign: "left",
    fontFamily: GlobalStyles.FontFamily.helvetica,
  },
  component20827Parent: {
    bottom: 49,
  },
  helloParent4: {
    borderTopLeftRadius: GlobalStyles.Border.br_6xl,
    borderTopRightRadius: GlobalStyles.Border.br_6xl,
    height: 456,
    width: 375,
    backgroundColor: GlobalStyles.Color.gray_300,
  },
  sendAccountSelection: {
    flex: 1,
    alignItems: "center",
    width: "100%",
    backgroundColor: GlobalStyles.Color.white,
  },
});

export default SendAccountSelection;
