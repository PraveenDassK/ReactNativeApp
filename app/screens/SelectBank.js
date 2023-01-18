import * as React from "react";
import { Text, StyleSheet, Image, View, Pressable ,TextInput, ScrollView} from "react-native";
import GlobalStyles from "../../GlobalStyles";

const SelectBank = ({navigation}) => {

  return (
    <ScrollView>
    <View style={styles.selectBank}>
      <View style={styles.helloParent}>
        <Text style={styles.hello}>Select Bank</Text>
        <View style={[styles.iconAwesomeSearchParent, styles.iconLayout2]}>
          <Image
            style={[styles.iconAwesomeSearch, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/icon-awesomesearch.png")}
          />
          <Image
            style={[styles.iconMaterialKeyboardVoice, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/icon-materialkeyboardvoice.png")}
          />
          <TextInput style={styles.hello1} placeholder={"Search"}/>
        </View>
        <View style={[styles.groupChild, styles.groupShadowBox]} />
        <View style={[styles.groupPosition, styles.groupShadowBox]} />
        <Text style={[styles.hello2, styles.helloTypo2]}>Popular Banks</Text>
        <Text style={[styles.hello3, styles.helloTypo2]}>Other Banks</Text>
        <Pressable
          style={[styles.helloWrapper, styles.helloWrapperPosition]}
          onPress={() => navigation.navigate("SelectBank1")}
        >
          <Text style={styles.hello4}>HSBC</Text>
        </Pressable>
        <Pressable
          style={[styles.rectangleParent, styles.rectangleParentPosition1]}
          onPress={() => navigation.navigate("SelectBank1")}
        >
          <View style={[styles.groupInner, styles.groupLayout]} />
          <Text style={[styles.hello5, styles.helloTypo1]}>
            <Text style={styles.standard}>Standard{"\n"}</Text>
            <Text style={styles.standard}>Chartered</Text>
          </Text>
        </Pressable>
        <Pressable
          style={[styles.rectangleGroup, styles.helloWrapperPosition]}
          onPress={() => navigation.navigate("SelectBank1")}
        >
          <View style={[styles.rectangleView, styles.groupLayout]} />
          <Text style={styles.hello6}>Barclays</Text>
        </Pressable>
        <Pressable
          style={styles.rectangleContainer}
          onPress={() => navigation.navigate("SelectBank1")}
        >
          <View style={[styles.groupChild1, styles.groupChildPosition]} />
          <Text style={[styles.hello7, styles.helloTypo1]}>
            <Text style={styles.standard}>Royal Bank{"\n"}</Text>
            <Text style={styles.standard}>of Scotland{"\n"}</Text>
            <Text style={styles.standard}>{`Group `}</Text>
          </Text>
        </Pressable>
        <Pressable
          style={styles.groupPressable}
          onPress={() => navigation.navigate("SelectBank1")}
        >
          <View style={[styles.groupChild2, styles.groupLayout]} />
          <Text style={[styles.hello7, styles.helloTypo1]}>
            <Text style={styles.standard}>Lloyds{"\n"}</Text>
            <Text style={styles.standard}>Banking{"\n"}</Text>
            <Text style={styles.standard}>Group</Text>
          </Text>
        </Pressable>
        <Pressable
          style={[styles.rectangleParent1, styles.image145IconPosition]}
          onPress={() => navigation.navigate("SelectBank1")}
        >
          <View style={[styles.groupChild3, styles.groupChildPosition]} />
          <Text style={[styles.hello7, styles.helloTypo1]}>
            <Text style={styles.standard}>Nationwide{"\n"}</Text>
            <Text style={styles.standard}>Building{"\n"}</Text>
            <Text style={styles.standard}>Society</Text>
          </Text>
        </Pressable>
        <Pressable
          style={[styles.rectangleParent2, styles.rectangleParentPosition]}
          onPress={() => navigation.navigate("SelectBank1")}
        >
          <View style={[styles.groupChild4, styles.groupPosition]} />
          <Text style={[styles.hello10, styles.helloTypo]}>Santander UK</Text>
        </Pressable>
        <Pressable
          style={[styles.rectangleParent3, styles.rectangleParentPosition]}
          onPress={() => navigation.navigate("SelectBank1")}
        >
          <View style={[styles.groupChild4, styles.groupPosition]} />
          <Text style={[styles.hello11, styles.helloTypo]}>
            Nationwide Building Society
          </Text>
        </Pressable>
        <Pressable
          style={[styles.rectangleParent4, styles.rectangleParentPosition]}
          onPress={() => navigation.navigate("SelectBank1")}
        >
          <View style={[styles.groupChild4, styles.groupPosition]} />
          <Text style={[styles.hello12, styles.helloTypo]}>Schroders</Text>
        </Pressable>
        <Pressable
          style={[styles.rectangleParent5, styles.rectangleParentPosition]}
          onPress={() => navigation.navigate("SelectBank1")}
        >
          <View style={[styles.groupChild4, styles.groupPosition]} />
          <Text style={[styles.hello13, styles.helloTypo]}>
            Close Brothers Group plc
          </Text>
        </Pressable>
        <Pressable
          style={[styles.rectangleParent6, styles.rectangleParentPosition]}
          onPress={() => navigation.navigate("SelectBank1")}
        >
          <View style={[styles.groupChild4, styles.groupPosition]} />
          <Text style={[styles.hello14, styles.helloTypo]}>
            Coventry Building Society
          </Text>
        </Pressable>
        <View style={[styles.lineView, styles.groupChildLayout]} />
        <View style={[styles.groupChild9, styles.groupChildLayout]} />
        <View style={[styles.groupChild10, styles.groupChildLayout]} />
        <View style={[styles.groupChild11, styles.groupChildLayout]} />
        <Image
          style={styles.hsbcSymbolIcon}
          resizeMode="cover"
          source={require("../assets/hsbcsymbol.png")}
        />
        <Image
          style={[styles.image145Icon, styles.image145IconPosition]}
          resizeMode="cover"
          source={require("../assets/image-145.png")}
        />
        <Image
          style={[styles.image146Icon, styles.iconLayout1]}
          resizeMode="cover"
          source={require("../assets/image-146.png")}
        />
        <Image
          style={styles.image148Icon}
          resizeMode="cover"
          source={require("../assets/image-148.png")}
        />
        <Image
          style={[styles.downloadIcon, styles.iconLayout2]}
          resizeMode="cover"
          source={require("../assets/download.png")}
        />
        <Image
          style={styles.nationwideLogo20012011Icon}
          resizeMode="cover"
          source={require("../assets/nationwidelogo20012011.png")}
        />
        <Image
          style={[styles.nationwideLogo20012011Icon1, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/nationwidelogo200120111.png")}
        />
        <Image
          style={[styles.image149Icon, styles.iconLayout1]}
          resizeMode="cover"
          source={require("../assets/image-149.png")}
        />
        <Image
          style={[
            styles.schrodersLogoPngTransparentIcon,
            styles.rectangleParentPosition1,
          ]}
          resizeMode="cover"
          source={require("../assets/schroderslogopngtransparent.png")}
        />
        <Image
          style={[styles.image150Icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/image-150.png")}
        />
        <Image
          style={styles.image151Icon}
          resizeMode="cover"
          source={require("../assets/image-151.png")}
        />
      </View>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  iconLayout2: {
    borderRadius: GlobalStyles.Border.br_5xl,
    position: "absolute",
  },
  iconPosition: {
    height: 19,
    marginTop: -9.35,
    top: "50%",
    position: "absolute",
  },
  groupShadowBox: {
    height: 261,
    shadowOpacity: 1,
    elevation: 20,
    shadowRadius: 20,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(1, 1, 253, 0.05)",
    borderRadius: GlobalStyles.Border.br_4xl,
    right: 0,
    backgroundColor: GlobalStyles.Color.white,
  },
  helloTypo2: {
    color: GlobalStyles.Color.gray_800,
    // fontFamily: GlobalStyles.FontFamily.helvetica,
    fontSize: GlobalStyles.FontSize.size_xs,
    textAlign: "left",
    fontWeight: "700",
    left: 3,
    position: "absolute",
  },
  helloWrapperPosition: {
    height: 73,
    marginTop: -190,
    top: "50%",
    position: "absolute",
  },
  rectangleParentPosition1: {
    left: 21,
    position: "absolute",
  },
  groupLayout: {
    height: 49,
    backgroundColor: GlobalStyles.Color.gray_200,
    borderRadius: GlobalStyles.Border.br_lg,
    top: 0,
    position: "absolute",
  },
  helloTypo1: {
    textAlign: "center",
    lineHeight: 14,
    left: "0%",
    fontSize: GlobalStyles.FontSize.size_base,
    // fontFamily: GlobalStyles.FontFamily.helvetica,
    color: GlobalStyles.Color.indigo_100,
    position: "absolute",
  },
  groupChildPosition: {
    right: 10,
    height: 49,
    backgroundColor: GlobalStyles.Color.gray_200,
    borderRadius: GlobalStyles.Border.br_lg,
    top: 0,
    position: "absolute",
  },
  image145IconPosition: {
    width: 70,
    top: "50%",
    position: "absolute",
  },
  rectangleParentPosition: {
    height: 35,
    left: 18,
    position: "absolute",
  },
  groupPosition: {
    bottom: 0,
    left: 0,
    position: "absolute",
  },
  helloTypo: {
    top: "32.98%",
    fontSize: GlobalStyles.FontSize.size_base,
    // fontFamily: GlobalStyles.FontFamily.helvetica,
    textAlign: "left",
    color: GlobalStyles.Color.indigo_100,
    position: "absolute",
  },
  groupChildLayout: {
    height: 2,
    width: 244,
    borderTopWidth: 1,
    borderColor: "#f6f5f8",
    borderStyle: "solid",
    right: 16,
    position: "absolute",
  },
  iconLayout1: {
    height: 37,
    width: 37,
    top: "50%",
    position: "absolute",
  },
  iconLayout: {
    width: 26,
    position: "absolute",
  },
  hello: {
    fontSize: GlobalStyles.FontSize.size_8xl,
    textAlign: "left",
    color: GlobalStyles.Color.indigo_100,
    fontWeight: "700",
    left: 3,
    top: 0,
    position: "absolute",
  },
  iconAwesomeSearch: {
    left: 14,
    width: 19,
  },
  iconMaterialKeyboardVoice: {
    width: 14,
    right: 16,
  },
  hello1: {
    marginTop: "-2%",
    left: 50,
    color: GlobalStyles.Color.gray_700,
    // fontFamily: GlobalStyles.FontFamily.helvetica,
    fontSize: GlobalStyles.FontSize.size_xs,
    top: "50%",
    textAlign: "left",
    position: "absolute",
  },
  iconAwesomeSearchParent: {
    top: 41,
    height: 42,
    left: 0,
    right: 0,
    borderRadius: GlobalStyles.Border.br_5xl,
    backgroundColor: GlobalStyles.Color.white,
  },
  groupChild: {
    marginTop: -213,
    top: "50%",
    left: 0,
    position: "absolute",
  },
  hello2: {
    top: 122,
  },
  hello3: {
    marginTop: 79,
    top: "50%",
  },
  hello4: {
    left: "10.2%",
    fontSize: GlobalStyles.FontSize.size_base,
    top: "80.82%",
    // fontFamily: GlobalStyles.FontFamily.helvetica,
    textAlign: "left",
    color: GlobalStyles.Color.indigo_100,
    position: "absolute",
  },
  helloWrapper: {
    left: 27,
    width: 49,
    backgroundColor: GlobalStyles.Color.gray_200,
    borderRadius: GlobalStyles.Border.br_lg,
    height: 73,
  },
  groupInner: {
    right: 7,
    left: 6,
  },
  standard: {
    margin: GlobalStyles.Margin.margin_8xs,
  },
  hello5: {
    top: "67.82%",
  },
  rectangleParent: {
    width: 62,
    height: 87,
    marginTop: -70,
    top: "50%",
  },
  rectangleView: {
    right: 3,
    left: 2,
  },
  hello6: {
    left: "0%",
    fontSize: GlobalStyles.FontSize.size_base,
    top: "80.82%",
    // fontFamily: GlobalStyles.FontFamily.helvetica,
    textAlign: "left",
    color: GlobalStyles.Color.indigo_100,
    position: "absolute",
  },
  rectangleGroup: {
    marginLeft: -26.5,
    width: 54,
    left: "50%",
  },
  groupChild1: {
    width: 49,
  },
  hello7: {
    top: "58.42%",
    width: "110%",
  },
  rectangleContainer: {
    marginLeft: -37.5,
    width: 72,
    height: 101,
    left: "50%",
    marginTop: -70,
    top: "50%",
    position: "absolute",
  },
  groupChild2: {
    right: 1,
    left: 0,
  },
  groupPressable: {
    right: 26,
    width: 50,
    height: 101,
    marginTop: -190,
    top: "50%",
    position: "absolute",
  },
  groupChild3: {
    left: 11,
  },
  rectangleParent1: {
    height: 101,
    marginTop: -70,
    right: 16,
  },
  groupChild4: {
    borderRadius: GlobalStyles.Border.br_2xs,
    width: 35,
    backgroundColor: GlobalStyles.Color.gray_200,
    top: 0,
    bottom: 0,
  },
  hello10: {
    left: "36.17%",
  },
  rectangleParent2: {
    marginTop: 116.37,
    width: 138,
    top: "50%",
  },
  hello11: {
    left: "22.38%",
  },
  rectangleParent3: {
    marginTop: 162.37,
    width: 223,
    top: "50%",
  },
  hello12: {
    left: "43.8%",
  },
  rectangleParent4: {
    marginTop: 213.37,
    width: 114,
    top: "50%",
  },
  hello13: {
    left: "23.71%",
  },
  rectangleParent5: {
    bottom: 60,
    width: 207,
  },
  hello14: {
    left: "23.76%",
  },
  rectangleParent6: {
    bottom: 14,
    width: 210,
  },
  lineView: {
    marginTop: 155,
    top: "50%",
  },
  groupChild9: {
    marginTop: 206,
    top: "50%",
  },
  groupChild10: {
    bottom: 104,
  },
  groupChild11: {
    bottom: 50,
  },
  hsbcSymbolIcon: {
    marginTop: -178,
    left: 28,
    width: 48,
    height: 26,
    top: "50%",
    position: "absolute",
  },
  image145Icon: {
    marginTop: -185,
    marginLeft: -34.5,
    height: 40,
    left: "50%",
  },
  image146Icon: {
    marginTop: -183,
    borderRadius: GlobalStyles.Border.br_3xl,
    right: 31,
  },
  image148Icon: {
    marginTop: -63,
    left: 33,
    borderRadius: GlobalStyles.Border.br_xl,
    height: 36,
    width: 37,
    top: "50%",
    position: "absolute",
  },
  downloadIcon: {
    marginTop: -67,
    marginLeft: -21.5,
    width: 41,
    height: 41,
    left: "50%",
    top: "50%",
  },
  nationwideLogo20012011Icon: {
    marginTop: -56,
    width: 40,
    height: 23,
    right: 31,
    top: "50%",
    position: "absolute",
  },
  nationwideLogo20012011Icon1: {
    marginTop: 173,
    left: 24,
    height: 15,
    top: "50%",
  },
  image149Icon: {
    marginTop: 117,
    left: 18,
    height: 37,
  },
  schrodersLogoPngTransparentIcon: {
    bottom: 115,
    borderRadius: GlobalStyles.Border.br_xs,
    width: 27,
    height: 27,
  },
  image150Icon: {
    bottom: 65,
    left: 23,
    height: 26,
  },
  image151Icon: {
    bottom: 15,
    left: 22,
    width: 29,
    height: 29,
    position: "absolute",
  },
  helloParent: {
    width: "100%",
    height: 720,
  },
  selectBank: {
    flex: 1,
    width: "100%",
    paddingLeft: GlobalStyles.Padding.padding_8xs,
    paddingTop: GlobalStyles.Padding.padding_xs,
    paddingRight: GlobalStyles.Padding.padding_8xs,
    backgroundColor: GlobalStyles.Color.gray_100,
  },
});

export default SelectBank;
