import * as React from "react";
import { Text, StyleSheet, Image, View, Pressable,TextInput } from "react-native";

import GlobalStyles from "../../GlobalStyles";

const RequestContact = () => {
 
  return (
    <View style={styles.requestContact}>
      <View style={styles.groupParent}>
        <View style={styles.helloParent}>
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
            source={require("../assets/group-303373.png")}
          />
          <Text style={[styles.hello1, styles.helloTypo]}>Hudson Maia{'\n'}</Text>
          <Text style={[styles.hello2, styles.helloTypo]}>+440123456789</Text>
        </View>
        <View
          style={[
            styles.groupItem,
            styles.lineViewBorder,
            styles.groupPosition1,
          ]}
        />
        <View style={[styles.helloGroup, styles.groupPosition1]}>
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
        <View style={[styles.groupContainer, styles.helloParent2Position]}>
          <View style={[styles.helloContainer, styles.groupViewPosition]}>
            <Text style={[styles.hello4, styles.helloTypo1, styles.helloColor]}>
              £20
            </Text>
            <Image
              style={[styles.groupInner, styles.groupPosition]}
              resizeMode="cover"
              source={require("../assets/group-30410.png")}
            />
          </View>
          <View style={[styles.groupView, styles.groupViewPosition]}>
            <Text style={[styles.hello4, styles.helloTypo1, styles.helloColor]}>
              £50
            </Text>
            <Image
              style={[styles.groupIcon, styles.groupPosition]}
              resizeMode="cover"
              source={require("../assets/group-304101.png")}
            />
          </View>
          <View
            style={[
              styles.helloParent1,
              styles.parentPosition,
              styles.parentPosition1,
            ]}
          >
            <Text style={[styles.hello4, styles.helloTypo1, styles.helloColor]}>
              £100
            </Text>
            <Image
              style={[styles.groupChild1, styles.groupPosition]}
              resizeMode="cover"
              source={require("../assets/group-30410.png")}
            />
          </View>
        </View>
        <View style={[styles.helloParent2, styles.helloParent2Position]}>
          <Text style={[styles.hello7, styles.helloTypo1, styles.helloColor]}>
            Request{"\n"}
          </Text>
          <TextInput style={[styles.hello8, styles.helloTypo1]} placeholder="£500" keyboardType="numeric"/>
          <View
            style={[
              styles.lineView,
              styles.parentPosition,
              styles.lineViewBorder,
            ]}
          />
        </View>
        <Pressable
          style={styles.groupPressable}
          onPress={() => navigation.navigate("Requested")}
        >
          <View
            style={[
              styles.rectangleParent,
              styles.parentPosition,
              styles.parentPosition1,
            ]}
          >
            <View style={styles.rectangleView} />
            <View style={[styles.maskGroup236, styles.parentPosition]} />
          </View>
          <Text style={styles.hello9}>Request</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  helloTypo1: {
    textAlign: "left",
    // fontFamily: GlobalStyles.FontFamily.helvetica,
    position: "absolute",
  },
  helloColor: {
    color: GlobalStyles.Color.gray_700,
    textAlign: "left",
  },
  helloTypo2: {
    fontSize: GlobalStyles.FontSize.size_base,
    color: GlobalStyles.Color.gray_700,
  },
  helloTypo: {
    color: GlobalStyles.Color.indigo_100,
    fontSize: GlobalStyles.FontSize.size_4xl,
    textAlign: "left",
    // fontFamily: GlobalStyles.FontFamily.helvetica,
    position: "absolute",
  },
  lineViewBorder: {
    height: 2,
    borderTopWidth: 1,
    borderColor: "#707070",
    borderStyle: "solid",
  },
  groupPosition1: {
    left: 32,
    top: "50%",
    position: "absolute",
  },
  helloParent2Position: {
    left: 33,
    top: "50%",
    position: "absolute",
  },
  groupViewPosition: {
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
  parentPosition: {
    right: 0,
    position: "absolute",
  },
  parentPosition1: {
    bottom: 0,
    right: 0,
    top: 0,
  },
  hello: {
    top: 158,
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
    top: 100,
    left: 21,
    fontWeight: "700",
  },
  hello2: {
    top: 130,
    left: 9,
  },
  helloParent: {
    marginLeft: -83.5,
    top: 44,
    width: 154,
    height: 172,
    left: "50%",
    position: "absolute",
  },
  groupItem: {
    marginTop: 31.75,
    right: 32,
  },
  hello3: {
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
  helloGroup: {
    marginTop: 44.5,
    borderRadius: GlobalStyles.Border.br_5xl,
    backgroundColor: GlobalStyles.Color.gray_200,
    height: 42,
    right: 31,
  },
  hello4: {
    fontSize: GlobalStyles.FontSize.size_7xl,
    lineHeight: 22,
    top: 0,
    left: 0,
  },
  groupInner: {
    marginLeft: -7.94,
  },
  helloContainer: {
    left: 0,
  },
  groupIcon: {
    marginLeft: -7.71,
  },
  groupView: {
    marginLeft: -27.5,
    left: "50%",
  },
  groupChild1: {
    marginLeft: -7.22,
  },
  helloParent1: {
    width: 56,
  },
  groupContainer: {
    marginTop: 149,
    height: 50,
    right: 31,
  },
  hello7: {
    left: 112,
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
  },
  helloParent2: {
    marginTop: -64.5,
    height: 98,
    right: 32,
  },
  rectangleView: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: GlobalStyles.Border.br_lg,
    backgroundColor: GlobalStyles.Color.blue_100,
    position: "absolute",
    width: "100%",
  },
  maskGroup236: {
    bottom: 13,
    top: 0,
    left: 0,
  },
  rectangleParent: {
    left: 0,
  },
  hello9: {
    top: "38.33%",
    left: "38.96%",
    fontSize: GlobalStyles.FontSize.size_lg,
    textTransform: "uppercase",
    color: GlobalStyles.Color.white,
    textAlign: "center",
    // fontFamily: GlobalStyles.FontFamily.helvetica,
    position: "absolute",
  },
  groupPressable: {
    right: 24,
    bottom: 49,
    left: 25,
    height: 60,
    position: "absolute",
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
    height: 749,
    backgroundColor: GlobalStyles.Color.white,
  },
  requestContact: {
    flex: 1,
    paddingTop: GlobalStyles.Padding.padding_9xs,
    width: "100%",
    backgroundColor: GlobalStyles.Color.white,
  },
});

export default RequestContact;
