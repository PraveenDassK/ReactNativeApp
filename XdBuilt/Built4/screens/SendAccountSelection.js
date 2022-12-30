import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import GlobalStyles from "../GlobalStyles";

const SendAccountSelection = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.sendAccountSelection}>
      <View style={styles.sendAccountSelectionChild} />
      <View
        style={[
          styles.sendAccountSelectionInner,
          styles.mt19,
          styles.rectangleShadowBox,
        ]}
      >
        <View style={[styles.groupChild, styles.groupChildLayout]} />
      </View>
      <View style={[styles.helloParent, styles.mt_705]}>
        <Text style={[styles.hello, styles.helloFlexBox, styles.helloTypo2]}>
          Hudson Maia
        </Text>
        <Text style={[styles.hello1, styles.helloFlexBox, styles.helloTypo2]}>
          +440123456789
        </Text>
        <Text style={[styles.hello2, styles.helloTypo1]}>
          Joined September 2022
        </Text>
        <Image
          style={[styles.groupItem, styles.groupItemLayout]}
          resizeMode="cover"
          source={require("../assets/group-30337.png")}
        />
      </View>
      <View style={[styles.groupParent, styles.mt_31, styles.ml2]}>
        <View style={[styles.helloGroup, styles.helloPosition1]}>
          <Text style={[styles.hello3, styles.helloTypo1]}>£20</Text>
          <Image
            style={[styles.groupInner, styles.groupPosition]}
            resizeMode="cover"
            source={require("../assets/group-30409.png")}
          />
        </View>
        <View style={[styles.helloContainer, styles.helloPosition1]}>
          <Text style={[styles.hello3, styles.helloTypo1]}>£50</Text>
          <Image
            style={[styles.groupIcon, styles.groupPosition]}
            resizeMode="cover"
            source={require("../assets/group-30410.png")}
          />
        </View>
        <View style={[styles.groupView, styles.timePosition]}>
          <Text style={[styles.hello3, styles.helloTypo1]}>£100</Text>
          <Image
            style={[styles.groupChild1, styles.groupPosition]}
            resizeMode="cover"
            source={require("../assets/group-30408.png")}
          />
        </View>
      </View>
      <View style={[styles.helloParent1, styles.mt_441, styles.ml1]}>
        <Text style={[styles.hello6, styles.helloTypo1]}>Pay</Text>
        <Text style={[styles.hello7, styles.helloTypo]}>£500</Text>
        <View style={styles.lineView} />
      </View>
      <View style={[styles.helloParent2, styles.mt12, styles.ml1]}>
        <Text style={[styles.hello8, styles.helloTypo1]}>Add a note</Text>
        <Image
          style={[styles.iconMaterialKeyboardVoice, styles.statusBarPosition]}
          resizeMode="cover"
          source={require("../assets/icon-materialkeyboardvoice.png")}
        />
      </View>
      <View style={[styles.maskGroup236, styles.mt43, styles.ml1]} />
      <View style={[styles.statusBarBlack, styles.mt_812]}>
        <View
          style={[
            styles.rectangle,
            styles.timePosition,
            styles.rectangleShadowBox,
          ]}
        />
        <View style={[styles.statusBar, styles.statusBarPosition]}>
          <View style={[styles.time, styles.timePosition]}>
            <Text style={[styles.text, styles.helloFlexBox]}>9:41</Text>
          </View>
          <Image
            style={styles.batteryIcon}
            resizeMode="cover"
            source={require("../assets/icon-awesomebatterythreequarters.png")}
          />
          <Image
            style={[styles.wifiIcon, styles.networkPosition]}
            resizeMode="cover"
            source={require("../assets/icon-awesomewifi.png")}
          />
          <View style={[styles.network, styles.networkPosition]}>
            <View style={[styles.networkChild, styles.networkLayout]} />
            <View
              style={[
                styles.networkItem,
                styles.networkLayout,
                styles.groupChildLayout,
              ]}
            />
            <View style={[styles.networkInner, styles.networkLayout]} />
            <View style={[styles.rectangleView, styles.networkLayout]} />
          </View>
        </View>
      </View>
      <View style={[styles.homeIndicator, styles.mt163, styles.ml1]} />
      <View style={[styles.helloParent2, styles.mt_42, styles.ml1]}>
        <Text style={[styles.hello8, styles.helloTypo1]}>Add a note</Text>
        <Image
          style={[styles.iconMaterialKeyboardVoice, styles.statusBarPosition]}
          resizeMode="cover"
          source={require("../assets/icon-materialkeyboardvoice.png")}
        />
      </View>
      <View style={[styles.helloParent4, styles.mt77]}>
        <Text style={[styles.hello10, styles.helloTypo1]}>
          Choose Account to Pay With
        </Text>
        <View style={[styles.groupChild2, styles.groupChild2Position]} />
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
        <View style={[styles.groupChild3, styles.groupChildPosition]} />
        <View style={[styles.groupChild4, styles.groupChildPosition]} />
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
            styles.groupChild2Position,
          ]}
          onPress={() => navigation.navigate("SendEnterPIN")}
        >
          <View style={[styles.component20827, styles.timePosition]}>
            <View style={[styles.rectangleParent, styles.parentLayout]}>
              <View style={[styles.groupChild5, styles.bank2IconPosition]} />
              <View style={styles.maskGroup2361} />
            </View>
          </View>
          <Text style={[styles.hello16, styles.helloFlexBox]}>Send</Text>
        </Pressable>
      </View>
      <View style={[styles.homeIndicator, styles.mt_5, styles.ml1]} />
    </View>
  );
};

const styles = StyleSheet.create({
  mt19: {
    marginTop: GlobalStyles.Margin.margin_14xs,
  },
  mt_705: {
    marginTop: GlobalStyles.Margin.margin_84xs,
  },
  mt_31: {
    marginTop: GlobalStyles.Margin.margin_50xs,
  },
  ml2: {
    marginLeft: GlobalStyles.Margin.margin_31xs,
  },
  mt_441: {
    marginTop: -441,
  },
  ml1: {
    marginLeft: GlobalStyles.Margin.margin_32xs,
  },
  mt12: {
    marginTop: GlobalStyles.Margin.margin_22xs,
  },
  mt43: {
    marginTop: GlobalStyles.Margin.margin_14xl,
  },
  mt_812: {
    marginTop: GlobalStyles.Margin.margin_90xs,
  },
  mt163: {
    marginTop: 163,
  },
  mt_42: {
    marginTop: GlobalStyles.Margin.margin_58xs,
  },
  mt77: {
    marginTop: 77,
  },
  mt_5: {
    marginTop: GlobalStyles.Margin.margin_37xs,
  },
  rectangleShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: -3,
    },
    backgroundColor: GlobalStyles.Color.white,
  },
  groupChildLayout: {
    height: 6,
    left: "50%",
  },
  helloFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  helloTypo2: {
    color: GlobalStyles.Color.indigo,
    textAlign: "left",
    fontFamily: GlobalStyles.FontFamily.helvetica,
    fontSize: GlobalStyles.FontSize.size_4xl,
  },
  helloTypo1: {
    color: GlobalStyles.Color.gray_800,
    textAlign: "left",
    fontFamily: GlobalStyles.FontFamily.helvetica,
    position: "absolute",
  },
  groupItemLayout: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
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
  timePosition: {
    bottom: 0,
    top: 0,
    position: "absolute",
  },
  helloTypo: {
    color: GlobalStyles.Color.blue,
    textAlign: "left",
    fontFamily: GlobalStyles.FontFamily.helvetica,
    position: "absolute",
  },
  statusBarPosition: {
    right: 16,
    top: "50%",
    position: "absolute",
  },
  networkPosition: {
    width: 17,
    marginTop: -3,
    top: "50%",
    position: "absolute",
  },
  networkLayout: {
    width: 3,
    backgroundColor: GlobalStyles.Color.gray_1400,
    borderRadius: GlobalStyles.Border.br_7xs,
    bottom: 0,
    position: "absolute",
  },
  groupChild2Position: {
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
    fontSize: GlobalStyles.FontSize.size_base,
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
    borderColor: "#707070",
    borderStyle: "solid",
    height: 6,
    position: "absolute",
  },
  sendAccountSelectionInner: {
    borderTopLeftRadius: GlobalStyles.Border.br_4xl,
    borderTopRightRadius: GlobalStyles.Border.br_4xl,
    shadowColor: "rgba(1, 1, 253, 0.1)",
    shadowRadius: 20,
    elevation: 20,
    height: 749,
    width: 375,
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
    fontSize: GlobalStyles.FontSize.size_base,
    left: 0,
  },
  groupItem: {
    right: 39,
    bottom: 106,
    left: 43,
    top: 0,
    position: "absolute",
  },
  helloParent: {
    width: 149,
    height: 172,
  },
  hello3: {
    fontSize: GlobalStyles.FontSize.size_7xl,
    lineHeight: 22,
    top: 0,
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
    fontSize: GlobalStyles.FontSize.size_xl,
    top: 0,
  },
  hello7: {
    top: 32,
    left: 75,
    fontSize: GlobalStyles.FontSize.size_14xl,
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
    fontSize: GlobalStyles.FontSize.size_base,
  },
  iconMaterialKeyboardVoice: {
    marginTop: -9.35,
    width: 14,
    height: 19,
  },
  helloParent2: {
    width: 312,
    height: 42,
    borderRadius: GlobalStyles.Border.br_5xl,
    backgroundColor: GlobalStyles.Color.gray_300,
  },
  maskGroup236: {
    height: 47,
    width: 310,
  },
  rectangle: {
    shadowColor: "rgba(0, 0, 0, 0.05)",
    shadowRadius: 6,
    elevation: 6,
    right: 0,
    left: 0,
  },
  text: {
    letterSpacing: 0,
    lineHeight: 24,
    fontWeight: "500",
    fontFamily: GlobalStyles.FontFamily.roboto,
    color: GlobalStyles.Color.gray_1900,
    top: 0,
    left: 0,
    textAlign: "left",
    fontSize: GlobalStyles.FontSize.size_4xl,
  },
  time: {
    width: 40,
    left: 0,
  },
  batteryIcon: {
    width: 22,
    height: 11,
    marginTop: -3,
    top: "50%",
    right: 0,
    position: "absolute",
  },
  wifiIcon: {
    right: 37,
    height: 12,
  },
  networkChild: {
    height: 4,
    left: 0,
  },
  networkItem: {
    marginLeft: -3.5,
  },
  networkInner: {
    marginLeft: 0.5,
    height: 9,
    left: "50%",
  },
  rectangleView: {
    right: 0,
    top: 0,
  },
  network: {
    right: 68,
    height: 11,
  },
  statusBar: {
    marginTop: -15,
    left: 15,
    height: 26,
  },
  statusBarBlack: {
    height: 44,
    width: 375,
  },
  homeIndicator: {
    borderRadius: GlobalStyles.Border.br_8xl,
    backgroundColor: GlobalStyles.Color.black,
    width: 134,
    height: 5,
  },
  hello10: {
    top: 34,
    left: 99,
    fontSize: GlobalStyles.FontSize.size_base,
  },
  groupChild2: {
    marginTop: -151,
    height: 234,
    top: "50%",
    borderRadius: GlobalStyles.Border.br_5xl,
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
    borderRadius: GlobalStyles.Border.br_4xs,
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
    fontSize: GlobalStyles.FontSize.size_base,
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
    borderRadius: GlobalStyles.Border.br_xl,
    borderColor: "#0101fd",
    borderWidth: 1,
    height: 53,
    left: 36,
    top: "50%",
    borderStyle: "solid",
    position: "absolute",
  },
  groupChild3: {
    marginTop: -91.5,
  },
  groupChild4: {
    marginTop: -38.5,
  },
  component2042: {
    marginTop: -132,
  },
  groupChild5: {
    right: "0%",
    borderRadius: GlobalStyles.Border.br_lg,
    backgroundColor: GlobalStyles.Color.gray_500,
    width: "100%",
  },
  maskGroup2361: {
    bottom: 13,
    right: 0,
    top: 0,
    left: 0,
    position: "absolute",
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
    fontSize: GlobalStyles.FontSize.size_lg,
    lineHeight: 17,
    textTransform: "uppercase",
    color: GlobalStyles.Color.black,
    fontFamily: GlobalStyles.FontFamily.helvetica,
    textAlign: "left",
  },
  component20827Parent: {
    bottom: 49,
  },
  helloParent4: {
    borderTopLeftRadius: GlobalStyles.Border.br_7xl,
    borderTopRightRadius: GlobalStyles.Border.br_7xl,
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
