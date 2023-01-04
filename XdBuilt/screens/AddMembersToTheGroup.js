import * as React from "react";
import {
  ScrollView,
  Text,
  StyleSheet,
  Image,
  View,
  Pressable,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import GlobalStyles from "../GlobalStyles";

const AddMembersToTheGroup = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.addMembersToTheGroup}>
      <View style={styles.scrollGroup2Parent}>
        <ScrollView
          style={styles.scrollGroup2}
          contentContainerStyle={styles.scrollGroup2Content}
        >
          <View style={[styles.scrollGroup2Inner, styles.groupContainerBg]}>
            <View
              style={[
                styles.helloParent,
                styles.helloParentPosition,
                styles.helloParentLayout,
              ]}
            >
              <Text
                style={[
                  styles.hello,
                  styles.helloFlexBox,
                  styles.helloColor,
                  styles.helloTypo1,
                  styles.helloTypo2,
                ]}
              >
                Hudson Maia
              </Text>
              <Text
                style={[styles.hello1, styles.helloTypo, styles.helloPosition]}
              >
                +440123456789
              </Text>
              <Image
                style={[styles.groupChild, styles.groupChildPosition]}
                resizeMode="cover"
                source={require("../assets/group-30337.png")}
              />
            </View>
          </View>
          <View
            style={[
              styles.scrollGroup2Inner,
              styles.mt32,
              styles.groupContainerBg,
            ]}
          >
            <View style={[styles.helloGroup, styles.helloParentPosition]}>
              <Text
                style={[
                  styles.hello2,
                  styles.helloFlexBox,
                  styles.helloColor,
                  styles.helloTypo1,
                  styles.helloTypo2,
                ]}
              >
                Konopelski Mitchel
              </Text>
              <Text
                style={[styles.hello3, styles.helloTypo, styles.helloPosition]}
              >
                +440123456789
              </Text>
              <Image
                style={[styles.groupChild, styles.groupChildPosition]}
                resizeMode="cover"
                source={require("../assets/group-303376.png")}
              />
            </View>
          </View>
          <View
            style={[
              styles.scrollGroup2Inner,
              styles.mt12,
              styles.groupContainerBg,
            ]}
          >
            <View
              style={[
                styles.helloContainer,
                styles.helloParentPosition,
                styles.helloParentLayout,
              ]}
            >
              <Text
                style={[
                  styles.hello4,
                  styles.helloFlexBox,
                  styles.helloColor,
                  styles.helloTypo1,
                  styles.helloTypo2,
                ]}
              >
                Bogan Hubert
              </Text>
              <Text
                style={[styles.hello1, styles.helloTypo, styles.helloPosition]}
              >
                +440123456789
              </Text>
              <Image
                style={[styles.groupChild, styles.groupChildPosition]}
                resizeMode="cover"
                source={require("../assets/group-303377.png")}
              />
            </View>
          </View>
          <View
            style={[
              styles.scrollGroup2Inner,
              styles.mt12,
              styles.groupContainerBg,
            ]}
          >
            <View
              style={[
                styles.helloParent1,
                styles.helloParentPosition,
                styles.helloParentLayout,
              ]}
            >
              <Text
                style={[
                  styles.hello6,
                  styles.helloFlexBox,
                  styles.helloColor,
                  styles.helloTypo1,
                  styles.helloTypo2,
                ]}
              >
                Fisher Judy
              </Text>
              <Text
                style={[styles.hello1, styles.helloTypo, styles.helloPosition]}
              >
                +440123456789
              </Text>
              <Image
                style={[styles.groupChild, styles.groupChildPosition]}
                resizeMode="cover"
                source={require("../assets/group-303378.png")}
              />
            </View>
          </View>
          <Image
            style={[styles.iconAwesomeCheckCircle, styles.mt_44, styles.ml267]}
            resizeMode="cover"
            source={require("../assets/icon-awesomecheckcircle165.png")}
          />
        </ScrollView>
        <Text style={[styles.hello8, styles.groupPosition, styles.helloTypo]}>
          Swipe Right to Add Members
        </Text>
        <View style={[styles.lineView, styles.groupPosition]} />
        <View style={[styles.groupWrapper, styles.groupPosition]}>
          <View style={[styles.groupPosition1, styles.groupContainerBg]}>
            <View style={styles.helloParent2}>
              <Text
                style={[styles.hello9, styles.helloFlexBox, styles.helloColor]}
              >
                Hudson Maia
              </Text>
              <Image
                style={[styles.groupChild1, styles.groupChildPosition]}
                resizeMode="cover"
                source={require("../assets/group-3033715.png")}
              />
              <Image
                style={styles.iconIonicIosClose}
                resizeMode="cover"
                source={require("../assets/icon-ioniciosclose.png")}
              />
            </View>
          </View>
        </View>
        <Text
          style={[
            styles.hello10,
            styles.helloFlexBox,
            styles.helloColor,
            styles.helloTypo1,
          ]}
        >
          Add members to the Group
        </Text>
        <Pressable
          style={[styles.groupFrame, styles.groupPosition]}
          onPress={() => navigation.navigate("AddGroupName")}
        >
          <View style={styles.groupPosition1}>
            <View style={styles.groupPosition1}>
              <View style={styles.rectangleView} />
              <View style={styles.maskGroup236} />
            </View>
            <Text style={[styles.hello11, styles.helloFlexBox]}>Continue</Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mt32: {
    marginTop: GlobalStyles.Margin.margin_md,
  },
  mt12: {
    marginTop: GlobalStyles.Margin.margin_5xs,
  },
  mt_44: {
    marginTop: GlobalStyles.Margin.margin_12xs,
  },
  ml267: {
    marginLeft: GlobalStyles.Margin.margin_9xl,
  },
  scrollGroup2Content: {
    flexDirection: "column",
    paddingLeft: 25,
    paddingTop: 30,
    paddingRight: 22,
    paddingBottom: 9,
  },
  groupContainerBg: {
    backgroundColor: GlobalStyles.Color.gray_200,
    borderRadius: GlobalStyles.Border.br_4xl,
  },
  helloParentPosition: {
    height: 45,
    bottom: 9,
    position: "absolute",
  },
  helloParentLayout: {
    width: 161,
    height: 45,
    bottom: 9,
  },
  helloFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  helloColor: {
    color: GlobalStyles.Color.indigo_100,
    textAlign: "left",
  },
  helloTypo1: {
    fontWeight: "700",
    color: GlobalStyles.Color.indigo_100,
  },
  helloTypo2: {
    fontSize: GlobalStyles.FontSize.size_base,
    top: 5,
    fontFamily: GlobalStyles.FontFamily.helvetica,
    fontWeight: "700",
  },
  helloTypo: {
    color: GlobalStyles.Color.gray_700,
    textAlign: "left",
    fontFamily: GlobalStyles.FontFamily.helvetica,
    fontSize: GlobalStyles.FontSize.size_base,
  },
  helloPosition: {
    bottom: 6,
    color: GlobalStyles.Color.gray_700,
    position: "absolute",
  },
  groupChildPosition: {
    maxHeight: "100%",
    bottom: 0,
    top: 0,
    left: 0,
    position: "absolute",
  },
  groupPosition: {
    left: 25,
    position: "absolute",
  },
  hello: {
    right: 14,
    fontFamily: GlobalStyles.FontFamily.helvetica,
  },
  hello1: {
    right: -1,
  },
  groupChild: {
    width: 45,
  },
  helloParent: {
    left: 14,
  },
  scrollGroup2Inner: {
    alignSelf: "stretch",
    height: 64,
  },
  hello2: {
    right: -1,
    fontFamily: GlobalStyles.FontFamily.helvetica,
  },
  hello3: {
    right: 25,
  },
  helloGroup: {
    left: 15,
    width: 187,
    height: 45,
    bottom: 9,
  },
  hello4: {
    right: 8,
    fontFamily: GlobalStyles.FontFamily.helvetica,
  },
  helloContainer: {
    left: 13,
  },
  hello6: {
    right: 22,
    fontFamily: GlobalStyles.FontFamily.helvetica,
  },
  helloParent1: {
    left: 12,
  },
  iconAwesomeCheckCircle: {
    width: "7.32%",
    maxWidth: "100%",
    overflow: "hidden",
    height: 24,
  },
  scrollGroup2: {
    marginTop: -214.5,
    height: 331,
    left: 0,
    right: 0,
    top: "50%",
    position: "absolute",
  },
  hello8: {
    top: 138,
  },
  lineView: {
    top: 120,
    right: 40,
    borderStyle: "solid",
    borderColor: "#707070",
    borderTopWidth: 1,
    height: 2,
  },
  hello9: {
    marginLeft: -34.47,
    bottom: 3,
    left: "50%",
    fontSize: GlobalStyles.FontSize.size_xs,
    fontFamily: GlobalStyles.FontFamily.helvetica,
  },
  groupChild1: {
    width: 23,
  },
  iconIonicIosClose: {
    marginTop: -3.05,
    width: 7,
    height: 7,
    right: 0,
    top: "50%",
    position: "absolute",
  },
  helloParent2: {
    top: 2,
    right: 12,
    bottom: 2,
    left: 4,
    position: "absolute",
  },
  groupPosition1: {
    bottom: 0,
    top: 0,
    left: 0,
    right: 0,
    position: "absolute",
  },
  groupWrapper: {
    top: 87,
    width: 143,
    height: 27,
  },
  hello10: {
    top: 39,
    left: 55,
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
    top: 0,
    left: 0,
    right: 0,
    position: "absolute",
  },
  hello11: {
    top: "38.33%",
    left: "38.04%",
    fontSize: GlobalStyles.FontSize.size_lg,
    textTransform: "uppercase",
    color: GlobalStyles.Color.black,
    fontFamily: GlobalStyles.FontFamily.helvetica,
  },
  groupFrame: {
    marginTop: 264.5,
    right: 24,
    height: 60,
    top: "50%",
    left: 25,
  },
  scrollGroup2Parent: {
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
  addMembersToTheGroup: {
    flex: 1,
    paddingTop: GlobalStyles.Padding.padding_md,
    width: "100%",
    backgroundColor: GlobalStyles.Color.white,
  },
});

export default AddMembersToTheGroup;
