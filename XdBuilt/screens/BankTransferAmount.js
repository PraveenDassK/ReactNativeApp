import * as React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import GlobalStyles from "../GlobalStyles";

const BankTransferAmount = () => {
  return (
    <View style={styles.bankTransferAmount}>
      <View style={styles.groupParent}>
        <View style={[styles.groupChild, styles.groupPosition1]} />
        <View style={styles.helloParent}>
          <Text style={[styles.hello, styles.helloTypo2, styles.helloTypo3]}>
            Hudson Maia
          </Text>
          <Text style={[styles.hello1, styles.helloTypo2, styles.helloTypo3]}>
            Bank Name
          </Text>
          <Text style={[styles.hello2, styles.helloTypo2, styles.helloTypo3]}>
            01234567890
          </Text>
          <Text style={[styles.hello3, styles.helloTypo, styles.helloTypo1]}>
            00 - 00 - 00
          </Text>
        </View>
        <View style={styles.groupContainer}>
          <View style={[styles.helloGroup, styles.helloPosition]}>
            <Text style={[styles.hello4, styles.helloTypo]}>£20</Text>
            <Image
              style={[styles.groupItem, styles.groupPosition]}
              resizeMode="cover"
              source={require("../assets/group-30409.png")}
            />
          </View>
          <View style={[styles.helloContainer, styles.helloPosition]}>
            <Text style={[styles.hello4, styles.helloTypo]}>£50</Text>
            <Image
              style={[styles.groupInner, styles.groupPosition]}
              resizeMode="cover"
              source={require("../assets/group-30410.png")}
            />
          </View>
          <View style={[styles.groupView, styles.groupPosition1]}>
            <Text style={[styles.hello4, styles.helloTypo]}>£100</Text>
            <Image
              style={[styles.groupIcon, styles.groupPosition]}
              resizeMode="cover"
              source={require("../assets/group-30408.png")}
            />
          </View>
        </View>
        <View style={[styles.helloParent1, styles.helloParent1Position]}>
          <Text style={[styles.hello7, styles.helloTypo]}>Pay</Text>
          <Text style={[styles.hello8, styles.helloTypo2, styles.helloTypo4]}>
            £500
          </Text>
          <View style={[styles.lineView, styles.lineViewPosition]} />
        </View>
        <View style={styles.helloParent2}>
          <Text style={[styles.hello9, styles.helloTypo, styles.helloTypo1]}>
            Add a note
          </Text>
          <Image
            style={styles.iconMaterialKeyboardVoice}
            resizeMode="cover"
            source={require("../assets/icon-materialkeyboardvoice.png")}
          />
        </View>
        <View style={[styles.maskGroup236, styles.helloParent1Position]} />
        <View style={styles.groupParent1}>
          <View style={[styles.rectangleParent, styles.groupPosition1]}>
            <View style={styles.rectangleView} />
            <View style={[styles.maskGroup2361, styles.lineViewPosition]} />
          </View>
          <Text style={[styles.hello10, styles.helloTypo2, styles.helloTypo4]}>
            Send
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupPosition1: {
    bottom: 0,
    right: 0,
    top: 0,
    position: "absolute",
  },
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
  helloTypo: {
    color: GlobalStyles.Color.gray_700,
    textAlign: "left",
    fontFamily: GlobalStyles.FontFamily.helvetica,
    position: "absolute",
  },
  helloTypo1: {
    fontSize: GlobalStyles.FontSize.size_base,
    color: GlobalStyles.Color.gray_700,
  },
  helloPosition: {
    width: 42,
    bottom: 0,
    top: 0,
    position: "absolute",
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
  helloTypo4: {
    textAlign: "left",
    fontFamily: GlobalStyles.FontFamily.helvetica,
  },
  lineViewPosition: {
    right: 0,
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
    backgroundColor: GlobalStyles.Color.white,
  },
  hello: {
    top: 32,
    left: 2,
  },
  hello1: {
    left: 9,
    top: 0,
  },
  hello2: {
    top: 64,
    left: 0,
  },
  hello3: {
    top: 94,
    left: 25,
  },
  helloParent: {
    marginLeft: -67.5,
    top: 101,
    width: 122,
    height: 108,
    left: "50%",
    position: "absolute",
  },
  hello4: {
    fontSize: GlobalStyles.FontSize.size_7xl,
    lineHeight: 22,
    left: 0,
    top: 0,
  },
  groupItem: {
    marginLeft: -7.94,
  },
  helloGroup: {
    left: 0,
  },
  groupInner: {
    marginLeft: -7.71,
  },
  helloContainer: {
    marginLeft: -27.5,
    left: "50%",
  },
  groupIcon: {
    marginLeft: -7.22,
  },
  groupView: {
    width: 56,
  },
  groupContainer: {
    marginTop: 149,
    height: 50,
    left: 33,
    right: 31,
    top: "50%",
    position: "absolute",
  },
  hello7: {
    left: 142,
    fontSize: GlobalStyles.FontSize.size_xl,
    top: 0,
  },
  hello8: {
    top: 38,
    left: 75,
    fontSize: GlobalStyles.FontSize.size_13xl,
    lineHeight: 37,
    color: GlobalStyles.Color.blue_100,
  },
  lineView: {
    bottom: -1,
    left: -1,
    borderStyle: "solid",
    borderColor: "#707070",
    borderTopWidth: 1,
    height: 2,
  },
  helloParent1: {
    marginTop: -64.5,
    height: 98,
  },
  hello9: {
    top: 15,
    left: 13,
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
    marginTop: 44.5,
    left: 32,
    borderRadius: GlobalStyles.Border.br_5xl,
    backgroundColor: GlobalStyles.Color.gray_200,
    height: 42,
    right: 31,
    top: "50%",
    position: "absolute",
  },
  maskGroup236: {
    marginTop: 129.5,
    height: 47,
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
    left: 0,
    top: 0,
  },
  rectangleParent: {
    left: 0,
  },
  hello10: {
    top: "40%",
    left: "43.56%",
    fontSize: GlobalStyles.FontSize.size_lg,
    textTransform: "uppercase",
    color: GlobalStyles.Color.black,
  },
  groupParent1: {
    right: 24,
    bottom: 49,
    height: 60,
    left: 25,
    position: "absolute",
  },
  groupParent: {
    width: 375,
    height: 749,
  },
  bankTransferAmount: {
    flex: 1,
    paddingTop: GlobalStyles.Padding.padding_md,
    width: "100%",
    backgroundColor: GlobalStyles.Color.white,
  },
});

export default BankTransferAmount;
