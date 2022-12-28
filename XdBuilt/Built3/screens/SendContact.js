import * as React from "react";
import { StyleSheet, View, Pressable, Text, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import GlobalStyles from "../GlobalStyles";

const SendContact = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.sendContact}>
      <View style={styles.sendContactChild} />
      <Pressable
        style={[styles.sendContactInner, styles.mt_749]}
        onPress={() => navigation.navigate("SendMoney")}
      >
        <View style={[styles.groupChild, styles.lineViewBorder]} />
      </Pressable>
      <View style={[styles.helloParent, styles.mt_705]}>
        <Text style={[styles.hello, styles.helloTypo2, styles.helloTypo3]}>
          Hudson Maia
        </Text>
        <Text style={[styles.hello1, styles.helloTypo2, styles.helloTypo3]}>
          +440123456789
        </Text>
        <Text style={[styles.hello2, styles.helloTypo, styles.helloTypo1]}>
          Joined September 2022
        </Text>
        <Image
          style={[styles.groupItem, styles.helloGroupPosition]}
          resizeMode="cover"
          source={require("../assets/group-30337.png")}
        />
      </View>
      <View style={[styles.groupParent, styles.mt_31, styles.ml2]}>
        <View style={[styles.helloGroup, styles.helloPosition]}>
          <Text
            style={[styles.hello3, styles.helloGroupPosition, styles.helloTypo]}
          >
            £20
          </Text>
          <Image
            style={[styles.groupInner, styles.groupPosition]}
            resizeMode="cover"
            source={require("../assets/group-30410.png")}
          />
        </View>
        <View style={[styles.helloContainer, styles.helloPosition]}>
          <Text
            style={[styles.hello3, styles.helloGroupPosition, styles.helloTypo]}
          >
            £50
          </Text>
          <Image
            style={[styles.groupIcon, styles.groupPosition]}
            resizeMode="cover"
            source={require("../assets/group-304101.png")}
          />
        </View>
        <View style={[styles.groupView, styles.groupViewPosition]}>
          <Text
            style={[styles.hello3, styles.helloGroupPosition, styles.helloTypo]}
          >
            £100
          </Text>
          <Image
            style={[styles.groupChild1, styles.groupPosition]}
            resizeMode="cover"
            source={require("../assets/group-30410.png")}
          />
        </View>
      </View>
      <View style={[styles.helloParent1, styles.mt92, styles.ml1]}>
        <Text
          style={[styles.hello6, styles.helloGroupPosition, styles.helloTypo]}
        >
          Pay
        </Text>
        <Text style={[styles.hello7, styles.helloTypo2, styles.helloTypo4]}>
          £500
        </Text>
        <View style={[styles.lineView, styles.lineViewBorder]} />
      </View>
      <View style={[styles.helloParent2, styles.mt12, styles.ml1]}>
        <Text style={[styles.hello8, styles.helloTypo, styles.helloTypo1]}>
          Add a note
        </Text>
        <Image
          style={[
            styles.iconMaterialKeyboardVoice,
            styles.rectangleParentPosition,
          ]}
          resizeMode="cover"
          source={require("../assets/icon-materialkeyboardvoice.png")}
        />
      </View>
      <View style={[styles.maskGroup236, styles.mt43, styles.ml1]} />
      <Pressable
        style={[styles.component20824Parent, styles.mt67, styles.ml1]}
        onPress={() => navigation.navigate("AddBeneficiarySchedulePayment1")}
      >
        <View style={[styles.component20824, styles.groupViewPosition]}>
          <View
            style={[styles.rectangleParent, styles.rectangleParentPosition]}
          >
            <View style={styles.rectangleView} />
            <View style={[styles.maskGroup2361, styles.helloGroupPosition]} />
          </View>
        </View>
        <Text style={[styles.hello9, styles.helloTypo2, styles.helloTypo4]}>
          Send
        </Text>
      </Pressable>
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
  mt92: {
    marginTop: GlobalStyles.Margin.margin_42xl,
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
  mt67: {
    marginTop: 67,
  },
  lineViewBorder: {
    borderColor: "#707070",
    borderStyle: "solid",
    position: "absolute",
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
  helloTypo: {
    color: GlobalStyles.Color.gray_800,
    textAlign: "left",
    fontFamily: GlobalStyles.FontFamily.helvetica,
  },
  helloTypo1: {
    fontSize: GlobalStyles.FontSize.size_sm,
    color: GlobalStyles.Color.gray_800,
    position: "absolute",
  },
  helloGroupPosition: {
    top: 0,
    position: "absolute",
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
  helloTypo4: {
    textAlign: "left",
    fontFamily: GlobalStyles.FontFamily.helvetica,
  },
  rectangleParentPosition: {
    top: "50%",
    position: "absolute",
  },
  sendContactChild: {
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
    left: "50%",
  },
  sendContactInner: {
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
    left: 0,
  },
  groupItem: {
    right: 39,
    bottom: 106,
    left: 43,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
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
    color: GlobalStyles.Color.blue,
  },
  lineView: {
    bottom: -1,
    left: -1,
    borderTopWidth: 1,
    height: 2,
    right: 0,
  },
  helloParent1: {
    height: 99,
    width: 310,
  },
  hello8: {
    top: 13,
    left: 13,
  },
  iconMaterialKeyboardVoice: {
    marginTop: -9.35,
    right: 16,
    width: 14,
    height: 19,
  },
  helloParent2: {
    borderRadius: GlobalStyles.Border.br_4xl,
    width: 312,
    height: 42,
    backgroundColor: GlobalStyles.Color.gray_300,
  },
  maskGroup236: {
    height: 47,
    width: 310,
  },
  rectangleView: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: GlobalStyles.Border.br_md,
    backgroundColor: GlobalStyles.Color.gray_500,
    position: "absolute",
    width: "100%",
  },
  maskGroup2361: {
    bottom: 13,
    right: 0,
    left: 0,
  },
  rectangleParent: {
    marginTop: -30,
    height: 60,
    right: 0,
    left: 0,
  },
  component20824: {
    right: 0,
    left: 0,
  },
  hello9: {
    top: "36.67%",
    left: "43.56%",
    fontSize: GlobalStyles.FontSize.size_base,
    lineHeight: 17,
    textTransform: "uppercase",
    color: GlobalStyles.Color.black,
  },
  component20824Parent: {
    width: 326,
    height: 60,
  },
  sendContact: {
    flex: 1,
    alignItems: "center",
    width: "100%",
    backgroundColor: GlobalStyles.Color.white,
  },
});

export default SendContact;
