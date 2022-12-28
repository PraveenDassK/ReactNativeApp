import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import GlobalStyles from "../GlobalStyles";

const RequestContact = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.requestContact}>
      <View style={styles.requestContactChild} />
      <View style={[styles.requestContactItem, styles.mt_576_5]} />
      <View style={[styles.requestContactInner, styles.mt_739_5, styles.mr2]} />
      <View style={[styles.helloParent, styles.mt28_5, styles.mr13]}>
        <Text
          style={[
            styles.hello,
            styles.helloTypo1,
            styles.helloColor,
            styles.helloTypo2,
          ]}
        >
          Joined September 2022
        </Text>
        <Image
          style={styles.groupChild}
          resizeMode="cover"
          source={require("../assets/group-30337.png")}
        />
        <Text style={[styles.hello1, styles.helloTypo]}>Hudson Maia</Text>
        <Text style={[styles.hello2, styles.helloTypo]}>+440123456789</Text>
      </View>
      <View style={[styles.lineView, styles.mt_0_5, styles.lineViewBorder]} />
      <View style={[styles.helloGroup, styles.mt10_5, styles.ml1]}>
        <Text
          style={[
            styles.hello3,
            styles.helloTypo1,
            styles.helloColor,
            styles.helloTypo2,
          ]}
        >
          Add a note
        </Text>
        <Image
          style={styles.iconMaterialKeyboardVoice}
          resizeMode="cover"
          source={require("../assets/icon-materialkeyboardvoice.png")}
        />
      </View>
      <View style={[styles.groupParent, styles.mt58_5, styles.ml2]}>
        <View style={styles.helloContainer}>
          <Text style={[styles.hello4, styles.helloTypo1, styles.helloColor]}>
            £20
          </Text>
          <Image
            style={[styles.groupItem, styles.groupPosition]}
            resizeMode="cover"
            source={require("../assets/group-30410.png")}
          />
        </View>
        <View style={styles.groupView}>
          <Text style={[styles.hello4, styles.helloTypo1, styles.helloColor]}>
            £50
          </Text>
          <Image
            style={[styles.groupInner, styles.groupPosition]}
            resizeMode="cover"
            source={require("../assets/group-304101.png")}
          />
        </View>
        <View
          style={[
            styles.helloParent1,
            styles.groupParentPosition,
            styles.helloParent1Position,
          ]}
        >
          <Text style={[styles.hello4, styles.helloTypo1, styles.helloColor]}>
            £100
          </Text>
          <Image
            style={[styles.groupIcon, styles.groupPosition]}
            resizeMode="cover"
            source={require("../assets/group-30410.png")}
          />
        </View>
      </View>
      <View style={[styles.helloParent2, styles.mt92_5, styles.ml1]}>
        <Text style={[styles.hello7, styles.helloTypo1, styles.helloColor]}>
          Request
        </Text>
        <Text style={[styles.hello8, styles.helloTypo1]}>£500</Text>
        <View
          style={[
            styles.groupChild1,
            styles.groupParentPosition,
            styles.lineViewBorder,
          ]}
        />
      </View>
      <Pressable
        style={[styles.component20825Parent, styles.mt66_5, styles.ml1]}
        onPress={() => navigation.navigate("Requested")}
      >
        <View
          style={[
            styles.component20825,
            styles.groupParentPosition,
            styles.helloParent1Position,
          ]}
        >
          <View style={[styles.rectangleParent, styles.groupParentPosition]}>
            <View style={styles.rectangleView} />
            <View style={[styles.maskGroup236, styles.groupParentPosition]} />
          </View>
        </View>
        <Text style={styles.hello9}>Request</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  mt_576_5: {
    marginTop: -576.5,
  },
  mt_739_5: {
    marginTop: GlobalStyles.Margin.margin_57xs,
  },
  mr2: {
    marginRight: GlobalStyles.Margin.margin_23xs,
  },
  mt28_5: {
    marginTop: 28.5,
  },
  mr13: {
    marginRight: GlobalStyles.Margin.margin_10xs,
  },
  mt_0_5: {
    marginTop: -0.5,
  },
  mt10_5: {
    marginTop: GlobalStyles.Margin.margin_15xs,
  },
  ml1: {
    marginLeft: GlobalStyles.Margin.margin_24xs,
  },
  mt58_5: {
    marginTop: 58.5,
  },
  ml2: {
    marginLeft: GlobalStyles.Margin.margin_23xs,
  },
  mt92_5: {
    marginTop: 92.5,
  },
  mt66_5: {
    marginTop: GlobalStyles.Margin.margin_35xl,
  },
  helloTypo1: {
    textAlign: "left",
    fontFamily: GlobalStyles.FontFamily.helvetica,
    position: "absolute",
  },
  helloColor: {
    color: GlobalStyles.Color.gray_800,
    textAlign: "left",
  },
  helloTypo2: {
    fontSize: GlobalStyles.FontSize.size_sm,
    color: GlobalStyles.Color.gray_800,
  },
  helloTypo: {
    color: GlobalStyles.Color.indigo,
    fontSize: GlobalStyles.FontSize.size_2xl,
    textAlign: "left",
    fontFamily: GlobalStyles.FontFamily.helvetica,
    position: "absolute",
  },
  lineViewBorder: {
    height: 2,
    borderTopWidth: 1,
    borderColor: "#707070",
    borderStyle: "solid",
  },
  groupPosition: {
    height: 17,
    width: 18,
    left: "50%",
    bottom: 0,
    position: "absolute",
  },
  groupParentPosition: {
    right: 0,
    position: "absolute",
  },
  helloParent1Position: {
    bottom: 0,
    right: 0,
    top: 0,
  },
  requestContactChild: {
    height: 640,
    width: 375,
    backgroundColor: GlobalStyles.Color.gray_300,
  },
  requestContactItem: {
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
  requestContactInner: {
    borderTopWidth: 3,
    width: 52,
    height: 6,
    borderColor: "#707070",
    borderStyle: "solid",
  },
  hello: {
    top: 156,
    left: 0,
  },
  groupChild: {
    right: 44,
    bottom: 106,
    left: 43,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    top: 0,
    position: "absolute",
  },
  hello1: {
    top: 97,
    left: 21,
    fontWeight: "700",
  },
  hello2: {
    top: 127,
    left: 9,
  },
  helloParent: {
    width: 154,
    height: 172,
  },
  lineView: {
    width: 311,
  },
  hello3: {
    top: 13,
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
  helloGroup: {
    borderRadius: GlobalStyles.Border.br_4xl,
    width: 312,
    height: 42,
    backgroundColor: GlobalStyles.Color.gray_300,
  },
  hello4: {
    fontSize: GlobalStyles.FontSize.size_5xl,
    lineHeight: 22,
    top: 0,
    left: 0,
  },
  groupItem: {
    marginLeft: -7.94,
  },
  helloContainer: {
    width: 42,
    bottom: 0,
    top: 0,
    left: 0,
    position: "absolute",
  },
  groupInner: {
    marginLeft: -7.71,
  },
  groupView: {
    marginLeft: -27.5,
    left: "50%",
    width: 42,
    bottom: 0,
    top: 0,
    position: "absolute",
  },
  groupIcon: {
    marginLeft: -7.22,
  },
  helloParent1: {
    width: 56,
  },
  groupParent: {
    height: 54,
    width: 311,
  },
  hello7: {
    left: 112,
    fontSize: GlobalStyles.FontSize.size_lg,
    top: 0,
  },
  hello8: {
    top: 32,
    left: 75,
    fontSize: GlobalStyles.FontSize.size_10xl,
    lineHeight: 37,
    color: GlobalStyles.Color.blue,
  },
  groupChild1: {
    bottom: -1,
    left: -1,
  },
  helloParent2: {
    width: 310,
    height: 99,
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
  maskGroup236: {
    bottom: 13,
    top: 0,
    left: 0,
  },
  rectangleParent: {
    marginTop: -30,
    height: 60,
    top: "50%",
    left: 0,
  },
  component20825: {
    left: 0,
  },
  hello9: {
    top: "35%",
    left: "38.96%",
    fontSize: GlobalStyles.FontSize.size_base,
    lineHeight: 17,
    textTransform: "uppercase",
    color: GlobalStyles.Color.black,
    textAlign: "center",
    fontFamily: GlobalStyles.FontFamily.helvetica,
    position: "absolute",
  },
  component20825Parent: {
    width: 326,
    height: 60,
  },
  requestContact: {
    flex: 1,
    alignItems: "center",
    width: "100%",
    backgroundColor: GlobalStyles.Color.white,
  },
});

export default RequestContact;
