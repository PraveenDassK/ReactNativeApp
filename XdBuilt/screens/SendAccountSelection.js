import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import GlobalStyles from "../GlobalStyles";

const SendAccountSelection = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.sendAccountSelection}>
      <View style={styles.groupParent}>
        <View style={styles.groupChild} />
        <View style={styles.helloParent}>
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
            style={[styles.groupItem, styles.groupItemLayout]}
            resizeMode="cover"
            source={require("../assets/group-303373.png")}
          />
        </View>
        <View style={styles.groupContainer}>
          <View style={[styles.helloGroup, styles.helloPosition]}>
            <Text style={[styles.hello3, styles.helloTypo2, styles.helloTypo4]}>
              £20
            </Text>
            <Image
              style={[styles.groupInner, styles.groupPosition]}
              resizeMode="cover"
              source={require("../assets/group-30409.png")}
            />
          </View>
          <View style={[styles.helloContainer, styles.helloPosition]}>
            <Text style={[styles.hello3, styles.helloTypo2, styles.helloTypo4]}>
              £50
            </Text>
            <Image
              style={[styles.groupIcon, styles.groupPosition]}
              resizeMode="cover"
              source={require("../assets/group-30410.png")}
            />
          </View>
          <View style={styles.groupView}>
            <Text style={[styles.hello3, styles.helloTypo2, styles.helloTypo4]}>
              £100
            </Text>
            <Image
              style={[styles.groupChild1, styles.groupPosition]}
              resizeMode="cover"
              source={require("../assets/group-30408.png")}
            />
          </View>
        </View>
        <View style={[styles.helloParent1, styles.helloParent1Position]}>
          <Text style={[styles.hello6, styles.helloTypo2, styles.helloTypo4]}>
            Pay
          </Text>
          <Text style={[styles.hello7, styles.helloTypo2, styles.helloTypo4]}>
            £500
          </Text>
          <View style={styles.lineView} />
        </View>
        <View
          style={[
            styles.helloParent2,
            styles.helloParentBg,
            styles.helloParent2Layout,
          ]}
        >
          <Text style={[styles.hello8, styles.helloTypo1]}>Add a note</Text>
          <Image
            style={[
              styles.iconMaterialKeyboardVoice,
              styles.helloParent6Position,
            ]}
            resizeMode="cover"
            source={require("../assets/icon-materialkeyboardvoice.png")}
          />
        </View>
        <View style={[styles.maskGroup236, styles.helloParent1Position]} />
        <View
          style={[
            styles.helloParent2,
            styles.helloParentBg,
            styles.helloParent2Layout,
          ]}
        >
          <Text style={[styles.hello8, styles.helloTypo1]}>Add a note</Text>
          <Image
            style={[
              styles.iconMaterialKeyboardVoice,
              styles.helloParent6Position,
            ]}
            resizeMode="cover"
            source={require("../assets/icon-materialkeyboardvoice.png")}
          />
        </View>
        <View style={[styles.helloParent4, styles.helloParentBg]}>
          <Text style={[styles.hello10, styles.helloTypo1]}>
            Choose Account to Pay With
          </Text>
          <View
            style={[
              styles.rectangleView,
              styles.groupParent1Position,
              styles.helloParent2Layout,
            ]}
          />
          <View style={[styles.helloParent5, styles.helloParentPosition]}>
            <Text style={[styles.hello11, styles.helloTypo]}>
              XYZ Bank ****1234
            </Text>
            <Text style={[styles.hello12, styles.helloTypo1]}>
              Current Account
            </Text>
            <View style={styles.groupChild2} />
          </View>
          <Pressable
            style={styles.groupWrapper}
            onPress={() => navigation.navigate("SelectBank")}
          >
            <View style={[styles.helloParent6, styles.helloParent6Position]}>
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
          <View style={[styles.helloParent7, styles.helloParentPosition]}>
            <Text style={[styles.hello11, styles.helloTypo]}>
              XYZ Bank ****1234
            </Text>
            <Text style={[styles.hello12, styles.helloTypo1]}>
              Current Account
            </Text>
            <View style={styles.groupChild2} />
          </View>
          <View style={[styles.groupParent1, styles.groupParent1Position]}>
            <View style={styles.rectangleParent}>
              <View style={[styles.groupChild6, styles.bank2IconPosition]} />
              <View style={styles.maskGroup2361} />
            </View>
            <Text
              style={[styles.hello16, styles.helloTypo2, styles.helloTypo4]}
            >
              Send
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  helloTypo2: {
    textAlign: "left",
    fontFamily: GlobalStyles.FontFamily.helvetica,
    position: "absolute",
  },
  helloTypo3: {
    color: GlobalStyles.Color.indigo_100,
    fontSize: GlobalStyles.FontSize.size_4xl,
    textAlign: "left",
    fontFamily: GlobalStyles.FontFamily.helvetica,
  },
  helloTypo1: {
    fontSize: GlobalStyles.FontSize.size_base,
    color: GlobalStyles.Color.gray_700,
    textAlign: "left",
    fontFamily: GlobalStyles.FontFamily.helvetica,
    position: "absolute",
  },
  groupItemLayout: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
  },
  helloPosition: {
    width: 42,
    bottom: 0,
    top: 0,
    position: "absolute",
  },
  helloTypo4: {
    textAlign: "left",
    fontFamily: GlobalStyles.FontFamily.helvetica,
  },
  groupPosition: {
    height: 17,
    width: 18,
    left: "50%",
    bottom: 0,
    position: "absolute",
  },
  helloParent1Position: {
    right: 32,
    left: 33,
    top: "50%",
    position: "absolute",
  },
  helloParentBg: {
    backgroundColor: GlobalStyles.Color.gray_200,
    position: "absolute",
  },
  helloParent2Layout: {
    borderRadius: GlobalStyles.Border.br_5xl,
    top: "50%",
  },
  helloParent6Position: {
    top: "50%",
    position: "absolute",
  },
  groupParent1Position: {
    left: 25,
    right: 24,
    position: "absolute",
  },
  helloParentPosition: {
    height: 32,
    width: 181,
    left: 36,
    top: "50%",
    position: "absolute",
  },
  helloTypo: {
    right: -1,
    fontSize: GlobalStyles.FontSize.size_base,
    textAlign: "left",
    fontFamily: GlobalStyles.FontFamily.helvetica,
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
    height: 2,
    borderTopWidth: 1,
    borderStyle: "solid",
    top: "50%",
    position: "absolute",
  },
  groupChild: {
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
    left: 0,
    bottom: 0,
    right: 0,
    top: 0,
    position: "absolute",
    backgroundColor: GlobalStyles.Color.white,
  },
  hello: {
    top: 100,
    left: 12,
    fontWeight: "700",
  },
  hello1: {
    top: 130,
    left: 0,
  },
  hello2: {
    top: 158,
    color: GlobalStyles.Color.gray_700,
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
    marginLeft: -74.5,
    top: 44,
    width: 149,
    height: 172,
    left: "50%",
    position: "absolute",
  },
  hello3: {
    fontSize: GlobalStyles.FontSize.size_7xl,
    lineHeight: 22,
    color: GlobalStyles.Color.gray_700,
    left: 0,
    top: 0,
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
    bottom: 0,
    right: 0,
    top: 0,
    position: "absolute",
  },
  groupContainer: {
    marginTop: 149,
    height: 50,
    left: 33,
    right: 31,
    top: "50%",
    position: "absolute",
  },
  hello6: {
    left: 142,
    fontSize: GlobalStyles.FontSize.size_xl,
    color: GlobalStyles.Color.gray_700,
    top: 0,
  },
  hello7: {
    top: 38,
    left: 75,
    fontSize: GlobalStyles.FontSize.size_13xl,
    lineHeight: 37,
    color: GlobalStyles.Color.blue_100,
  },
  lineView: {
    bottom: -1,
    left: -1,
    borderColor: "#707070",
    height: 2,
    borderTopWidth: 1,
    borderStyle: "solid",
    right: 0,
    position: "absolute",
  },
  helloParent1: {
    marginTop: -64.5,
    height: 98,
  },
  hello8: {
    top: 15,
    left: 13,
    color: GlobalStyles.Color.gray_700,
  },
  iconMaterialKeyboardVoice: {
    marginTop: -9.35,
    right: 16,
    width: 14,
    height: 19,
  },
  helloParent2: {
    marginTop: 44.5,
    left: 32,
    height: 42,
    right: 31,
    backgroundColor: GlobalStyles.Color.gray_200,
    borderRadius: GlobalStyles.Border.br_5xl,
  },
  maskGroup236: {
    marginTop: 129.5,
    height: 47,
  },
  hello10: {
    top: 36,
    left: 99,
    color: GlobalStyles.Color.gray_700,
  },
  rectangleView: {
    marginTop: -151,
    height: 234,
    backgroundColor: GlobalStyles.Color.white,
  },
  hello11: {
    top: 2,
    color: GlobalStyles.Color.gray_700,
  },
  hello12: {
    right: 19,
    color: GlobalStyles.Color.gray_700,
    bottom: 0,
  },
  groupChild2: {
    borderRadius: GlobalStyles.Border.br_4xs,
    backgroundColor: GlobalStyles.Color.indigo_100,
    width: 48,
    left: 0,
    bottom: 0,
    top: 0,
    position: "absolute",
  },
  helloParent5: {
    marginTop: -80,
  },
  hello13: {
    bottom: 2,
    color: GlobalStyles.Color.blue_100,
  },
  bank2Icon: {
    width: "24.49%",
    right: "75.51%",
  },
  helloParent6: {
    marginTop: -11.8,
    marginLeft: -45.5,
    width: 90,
    height: 21,
    left: "50%",
  },
  groupWrapper: {
    marginTop: 16,
    right: 38,
    borderRadius: GlobalStyles.Border.br_xl,
    borderColor: "#0101fd",
    borderWidth: 1,
    height: 53,
    left: 36,
    borderStyle: "solid",
    top: "50%",
    position: "absolute",
  },
  groupChild3: {
    marginTop: -91.5,
  },
  groupChild4: {
    marginTop: -38.5,
  },
  helloParent7: {
    marginTop: -132,
  },
  groupChild6: {
    right: "0%",
    borderRadius: GlobalStyles.Border.br_lg,
    backgroundColor: GlobalStyles.Color.gray_500,
    width: "100%",
  },
  maskGroup2361: {
    bottom: 13,
    left: 0,
    right: 0,
    top: 0,
    position: "absolute",
  },
  rectangleParent: {
    left: 0,
    bottom: 0,
    right: 0,
    top: 0,
    position: "absolute",
  },
  hello16: {
    top: "40%",
    left: "43.56%",
    fontSize: GlobalStyles.FontSize.size_lg,
    textTransform: "uppercase",
    color: GlobalStyles.Color.black,
  },
  groupParent1: {
    bottom: 49,
    height: 60,
  },
  helloParent4: {
    borderTopLeftRadius: GlobalStyles.Border.br_7xl,
    borderTopRightRadius: GlobalStyles.Border.br_7xl,
    height: 456,
    left: 0,
    bottom: 0,
    right: 0,
  },
  groupParent: {
    width: 375,
    height: 749,
  },
  sendAccountSelection: {
    flex: 1,
    paddingTop: GlobalStyles.Padding.padding_md,
    width: "100%",
    backgroundColor: GlobalStyles.Color.white,
  },
});

export default SendAccountSelection;
