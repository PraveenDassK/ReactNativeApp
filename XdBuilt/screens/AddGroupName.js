import * as React from "react";
import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  Image,
  Pressable,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import GlobalStyles from "../GlobalStyles";

const AddGroupName = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.addGroupName}>
      <View style={styles.helloParent}>
        <Text style={[styles.hello, styles.helloFlexBox]}>
          <Text style={styles.enterGroupName}>{`Enter Group Name - `}</Text>
          <Text style={styles.ourExpenses}>Our Expenses</Text>
        </Text>
        <Text style={styles.hello1}>4 Members</Text>
        <View style={styles.groupChild} />
        <ScrollView
          style={styles.scrollGroup2}
          contentContainerStyle={styles.scrollGroup2Content}
        >
          <View style={styles.scrollGroup2Inner}>
            <View style={[styles.helloGroup, styles.helloPosition]}>
              <Text
                style={[styles.hello2, styles.helloTypo1, styles.helloTypo2]}
              >
                Hudson Maia
              </Text>
              <Text style={[styles.hello3, styles.helloTypo]}>
                +440123456789
              </Text>
              <Image
                style={styles.groupItem}
                resizeMode="cover"
                source={require("../assets/group-30337.png")}
              />
            </View>
          </View>
          <View style={[styles.scrollGroup2Inner, styles.mt32]}>
            <View style={[styles.helloContainer, styles.helloPosition]}>
              <Text
                style={[styles.hello4, styles.helloTypo1, styles.helloTypo2]}
              >
                Konopelski Mitchel
              </Text>
              <Text style={[styles.hello5, styles.helloTypo]}>
                +440123456789
              </Text>
              <Image
                style={styles.groupItem}
                resizeMode="cover"
                source={require("../assets/group-303376.png")}
              />
            </View>
          </View>
          <View style={[styles.scrollGroup2Inner, styles.mt12]}>
            <View style={[styles.helloGroup, styles.helloPosition]}>
              <Text
                style={[styles.hello6, styles.helloTypo1, styles.helloTypo2]}
              >
                Bogan Hubert
              </Text>
              <Text style={[styles.hello3, styles.helloTypo]}>
                +440123456789
              </Text>
              <Image
                style={styles.groupItem}
                resizeMode="cover"
                source={require("../assets/group-303377.png")}
              />
            </View>
          </View>
          <View style={[styles.scrollGroup2Inner, styles.mt12]}>
            <View style={[styles.helloGroup, styles.helloPosition]}>
              <Text
                style={[styles.hello8, styles.helloTypo1, styles.helloTypo2]}
              >
                Fisher Judy
              </Text>
              <Text style={[styles.hello3, styles.helloTypo]}>
                +440123456789
              </Text>
              <Image
                style={styles.groupItem}
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
        <Text style={[styles.hello10, styles.helloTypo1]}>Add Group Name</Text>
        <Pressable
          style={styles.groupWrapper}
          onPress={() => navigation.navigate("SplitAmount")}
        >
          <View style={[styles.groupParent, styles.groupPosition]}>
            <View style={[styles.groupParent, styles.groupPosition]}>
              <View style={styles.rectangleView} />
              <View style={[styles.maskGroup236, styles.groupPosition]} />
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
    paddingHorizontal: 25,
    paddingTop: 30,
    paddingBottom: 9,
  },
  helloFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  helloPosition: {
    height: 45,
    left: 26,
    bottom: 9,
    position: "absolute",
  },
  helloTypo1: {
    color: GlobalStyles.Color.indigo_100,
    fontWeight: "700",
    textAlign: "left",
    position: "absolute",
  },
  helloTypo2: {
    top: 5,
    color: GlobalStyles.Color.indigo_100,
    fontSize: GlobalStyles.FontSize.size_base,
    fontFamily: GlobalStyles.FontFamily.helvetica,
  },
  helloTypo: {
    bottom: 6,
    fontSize: GlobalStyles.FontSize.size_base,
    fontFamily: GlobalStyles.FontFamily.helvetica,
    textAlign: "left",
    color: GlobalStyles.Color.gray_700,
    position: "absolute",
  },
  groupPosition: {
    right: 0,
    top: 0,
    left: 0,
    position: "absolute",
  },
  enterGroupName: {
    fontFamily: GlobalStyles.FontFamily.helvetica,
  },
  ourExpenses: {
    fontWeight: "700",
    fontFamily: GlobalStyles.FontFamily.helvetica,
  },
  hello: {
    top: 94,
    left: 24,
    fontSize: GlobalStyles.FontSize.size_xl,
    color: GlobalStyles.Color.gray_700,
    textAlign: "left",
  },
  hello1: {
    top: 156,
    fontSize: GlobalStyles.FontSize.size_base,
    left: 25,
    fontFamily: GlobalStyles.FontFamily.helvetica,
    textAlign: "left",
    color: GlobalStyles.Color.gray_700,
    position: "absolute",
  },
  groupChild: {
    top: 115,
    right: 40,
    borderStyle: "solid",
    borderColor: "#707070",
    borderTopWidth: 1,
    height: 2,
    left: 25,
    position: "absolute",
  },
  hello2: {
    right: 14,
  },
  hello3: {
    right: -1,
  },
  groupItem: {
    maxHeight: "100%",
    width: 45,
    bottom: 0,
    top: 0,
    left: 0,
    position: "absolute",
  },
  helloGroup: {
    width: 161,
  },
  scrollGroup2Inner: {
    alignSelf: "stretch",
    borderRadius: GlobalStyles.Border.br_4xl,
    backgroundColor: GlobalStyles.Color.gray_200,
    height: 64,
  },
  hello4: {
    right: -1,
  },
  hello5: {
    right: 25,
  },
  helloContainer: {
    width: 187,
  },
  hello6: {
    right: 8,
  },
  hello8: {
    right: 22,
  },
  iconAwesomeCheckCircle: {
    width: 24,
    height: 24,
  },
  scrollGroup2: {
    marginTop: -204.5,
    right: 15,
    height: 331,
    left: 0,
    top: "50%",
    position: "absolute",
  },
  hello10: {
    top: 39,
    left: 104,
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
  },
  groupParent: {
    bottom: 0,
  },
  hello11: {
    top: "38.33%",
    left: "38.04%",
    fontSize: GlobalStyles.FontSize.size_lg,
    textTransform: "uppercase",
    color: GlobalStyles.Color.black,
    fontFamily: GlobalStyles.FontFamily.helvetica,
  },
  groupWrapper: {
    marginTop: 264.5,
    right: 24,
    height: 60,
    top: "50%",
    left: 25,
    position: "absolute",
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
  addGroupName: {
    flex: 1,
    paddingTop: GlobalStyles.Padding.padding_md,
    width: "100%",
    backgroundColor: GlobalStyles.Color.white,
  },
});

export default AddGroupName;
