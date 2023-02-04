import React,{ useEffect, useState,useContext } from "react";
import { StyleSheet, View, Text, Image, ScrollView,Pressable } from "react-native";
import GlobalStyles from "../../GlobalStyles";
import colors from "../config/colors";

import api from "../api/api_list"
import AuthContext from "../auth/context";

const CarbonTonnesRemoved = ({navigation}) => {

  const startMonth = "Jan"
  const authContext = useContext(AuthContext)
  const [numTrees, setTrees] = useState(0);
  const [numCarbon, setCarbon] = useState(0);
  const numArray = [0,numTrees,0,0,0,0]
  const tonnesOfCarbon = 1.5

  //Calls the API once during load
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus',  () => {
        loadData()
    })
  },[])
  
  const loadData = async () => {
    let respose = await api.GetUserImpacts();
    const assets = respose.data.details.assets
    let trees = 0
    let carbon = 0
    assets.forEach(element => {
      element.type == "TREE" ? trees += element.count : null
      carbon += element.offset
    });
    setTrees(trees)
    setCarbon(Number(carbon).toFixed(1))
  }

  return (
    <View style={styles.chooseCardsStandard4}>
      <View style={styles.groupParent}>
        <Pressable style={styles.groupContainer} onPress={() => navigation.navigate("Account")}>
          <View style={[styles.rectangleParent, styles.hello1Position]}>
            <View style={styles.groupChild} />
            <View style={[styles.maskGroup236, styles.hello1Position]} />
          </View>
          <Text style={styles.hello}>Purchase Projects</Text>
        </Pressable>
        <Image
          style={[styles.groupItem, styles.groupPosition]}
          resizeMode="cover"
          source={require("../assets/image-cloud.png")}
        />
        <View style={[styles.co2RemovedWrapper, styles.groupPosition]}>
          <Text style={[styles.co2Removed, styles.tPosition]}>
            <Text style={styles.co}>Tonnes CO</Text>
            <Text style={styles.text}>2</Text>
            <Text style={styles.co}> Removed</Text>
          </Text>
        </View>
        <Text style={[styles.t, styles.tPosition]}> {numCarbon} </Text>
        <Text style={[styles.total, styles.tPosition]}>Total</Text>
        <View style={[styles.lineParent, styles.groupPosition]}>
          <View style={styles.groupInner} />
          <Text style={[styles.trees5, styles.trees5Typo]}>
            <Text style={styles.trees}>
              <Text style={styles.trees1}>Trees</Text>
            </Text>
            <Text style={styles.trees}>
              <Text style={styles.text2}> {numTrees}</Text>
              <Text>{` `}</Text>
            </Text>
          </Text>
          <Text style={[styles.carbon1ton, styles.trees5Typo]}>
            <Text style={styles.trees}>
              <Text style={styles.trees1}>Carbon</Text>
            </Text>
            <Text style={styles.trees}>
              <Text>-{tonnesOfCarbon}</Text>
              <Text style={styles.trees1}></Text>
            </Text>
          </Text>
          <Image
            style={[styles.groupIcon, styles.groupPosition]}
            resizeMode="cover"
            source={require("../assets/image-co2cloud.png")}
          />
        </View>
        <ScrollView
          style={[styles.scrollGroup31, styles.groupPosition]}
          horizontal
          contentContainerStyle={styles.scrollGroup31Content}
        >
          <View style={styles.lineGroup}>
            <View style={[styles.lineView, styles.lineViewBorder]} />
            <View style={[styles.groupChild1, styles.lineViewBorder]} />
            <Text style={[styles.mon, styles.monPosition]}>January</Text>
            <Text style={[styles.tue, styles.monPosition]}>Febuary</Text>
            <Text style={[styles.wed, styles.wedPosition]}>March</Text>
            <Text style={[styles.text3, styles.textTypo1]}>{numArray[0]}</Text>
            <Text style={[styles.text4, styles.textTypo]}>{numArray[1]}</Text>
            <Text style={[styles.text5, styles.textTypo]}>{numArray[2]}</Text>

            <Image
              style={[
                styles.image88Icon,
                styles.image88IconLayout,
                styles.image88IconPosition,
              ]}
              resizeMode="cover"
              source={require("../assets/image-tree.png")}
            />
            <Image
              style={[styles.image88Icon1, styles.image88IconLayout]}
              resizeMode="cover"
              source={require("../assets/image-tree.png")}
            />
            <Image
              style={[
                styles.image88Icon2,
                styles.image88IconLayout,
                styles.image88IconPosition,
              ]}
              resizeMode="cover"
              source={require("../assets/image-tree.png")}
            />
            <Text style={[styles.wed1, styles.wedPosition]}>April</Text>
            <Text style={[styles.wed2, styles.wedPosition]}>May</Text>
            <Text style={[styles.wed3, styles.wedPosition]}>June</Text>
            <Text style={[styles.text6, styles.textTypo]}>{numArray[3]}</Text>
            <Text style={[styles.text7, styles.textTypo1]}>{numArray[4]}</Text>
            <Text style={[styles.text8, styles.textTypo]}>{numArray[5]}</Text>

            <Image
              style={[
                styles.image157Icon,
                styles.image88IconLayout,
                styles.image88IconPosition,
              ]}
              resizeMode="cover"
              source={require("../assets/image-tree.png")}
            />
            <Image
              style={[styles.image158Icon, styles.iconPosition]}
              resizeMode="cover"
              source={require("../assets/image-tree.png")}
            />
            <Image
              style={[styles.image159Icon, styles.iconPosition]}
              resizeMode="cover"
              source={require("../assets/image-tree.png")}
            />
          </View>
        </ScrollView>
        <Image
          style={[styles.image88Icon3, styles.image88IconLayout]}
          resizeMode="cover"
          source={require("../assets/image-881.png")}
        />
        <View style={[styles.rectangleView, styles.groupPosition]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollGroup31Content: {
    flexDirection: "row",
    paddingLeft: 1,
  },
  hello1Position: {
    top: 0,
    position: "absolute",
  },
  groupPosition: {
    top: "50%",
    position: "absolute",
  },
  tPosition: {
    color: GlobalStyles.Color.gray_1200,
    top: "50%",
    textAlign: "center",
    position: "absolute",
  },
  trees5Typo: {
    color: GlobalStyles.Color.gray_1700,
    textAlign: "left",
    top: "50%",
    position: "absolute",
  },
  lineViewBorder: {
    opacity: 0.39,
    height: 2,
    borderTopWidth: 1,
    borderRadius: 0.001,
    borderColor: "#707070",
    bottom: 29,
    position: "absolute",
  },
  monPosition: {
    color: GlobalStyles.Color.gray_1500,
    letterSpacing: 1,
    fontSize: GlobalStyles.FontSize.size_xs,
    marginTop: 59.5,
    top: "50%",
    position: "absolute",
  },
  wedPosition: {
    marginTop: 59,
    color: GlobalStyles.Color.gray_1500,
    letterSpacing: 1,
    fontSize: GlobalStyles.FontSize.size_xs,
    top: "50%",
    textAlign: "center",
    position: "absolute",
  },
  textTypo1: {
    height: 29,
    color: GlobalStyles.Color.gray_1000,
    fontSize: GlobalStyles.FontSize.size_4xl,
    textAlign: "left",
    top: 0,
    position: "absolute",
  },
  textTypo: {
    width: 70,
    height: 29,
    color: GlobalStyles.Color.gray_1000,
    fontSize: GlobalStyles.FontSize.size_4xl,
    textAlign: "left",
    top: 0,
    position: "absolute",
  },
  groupChildPosition: {
    height: 8,
    width: 8,
    marginTop: 43.5,
    top: "50%",
    position: "absolute",
  },
  image88IconLayout: {
    height: 75,
    width: 53,
    top: "50%",
    position: "absolute",
  },
  image88IconPosition: {
    marginTop: -40.5,
    height: 75,
    width: 53,
    left: "50%",
  },
  iconPosition: {
    marginTop: -38.5,
    height: 75,
    width: 53,
    top: "50%",
    position: "absolute",
  },
  groupChild: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    backgroundColor: "#D8EBF9",
    position: "absolute",
    borderRadius: GlobalStyles.Border.br_lg,
    width: "100%",
  },
  maskGroup236: {
    bottom: 13,
    left: 0,
    right: 0,
  },
  rectangleParent: {
    bottom: 0,
    left: 0,
    right: 0,
  },
  hello: {
    top: "40%",
    left: "25.77%",
    fontSize: GlobalStyles.FontSize.size_lg,
    textTransform: "uppercase",
    color: GlobalStyles.Color.black,
    textAlign: "center",
    position: "absolute",
  },
  groupContainer: {
    right: 13,
    bottom: 115,
    left: 12,
    height: 60,
    position: "absolute",
  },
  groupItem: {
    marginTop: -275.62,
    marginLeft: -108.21,
    width: 207,
    height: 117,
    left: "50%",
  },
  co: {
    fontSize: GlobalStyles.FontSize.size_xl,
  },
  text: {
    fontSize: 9,
    verticalAlign: "sub",
  },
  co2Removed: {
    marginTop: -8,
    width: 148,
    fontWeight: "700",
    left: 0,
  },
  co2RemovedWrapper: {
    marginTop: -193,
    marginLeft: -74.25,
    width: 147,
    height: 16,
    left: "50%",
  },
  t: {
    marginTop: -224,
    marginLeft: -68.25,
    fontSize: GlobalStyles.FontSize.size_6xl,
    width: 132,
    fontWeight: "700",
    left: "50%",
  },
  total: {
    marginTop: -250,
    marginLeft: -60.25,
    width: 116,
    fontSize: GlobalStyles.FontSize.size_2xl,
    left: "50%",
  },
  groupInner: {
    marginLeft: -6.28,
    top: 18,
    bottom: 20,
    borderStyle: "solid",
    borderColor: "#b5ceef",
    borderRightWidth: 2,
    width: 4,
    left: "50%",
    position: "absolute",
  },
  trees1: {
    fontSize: GlobalStyles.FontSize.size_2xl,
  },
  trees: {
    margin: GlobalStyles.Margin.margin_8xs,
  },
  text2: {
    fontSize: GlobalStyles.FontSize.size_6xl,
  },
  trees5: {
    marginTop: -27.5,
    marginLeft: -78.78,
    width: 60,
    textAlign: "left",
    left: "50%",
  },
  carbon1ton: {
    marginTop: -26.5,
    right: 12,
    width: 74,
    textAlign: "left",
  },
  groupIcon: {
    marginTop: -17.5,
    marginLeft: 8.13,
    width: 57,
    height: 39,
    left: "50%",
  },
  lineParent: {
    marginTop: 72,
    right: 16,
    left: 15,
    backgroundColor: "rgba(30, 127, 254, 0.15)",
    height: 123,
    borderRadius: GlobalStyles.Border.br_lg,
  },
  hello1: {
    left: 17,
    fontSize: GlobalStyles.FontSize.size_8xl,
    lineHeight: 28,
    color: GlobalStyles.Color.indigo_100,
    textAlign: "left",
    fontWeight: "700",
  },
  lineView: {
    left: -1,
    width: 351,
  },
  groupChild1: {
    width: 310,
    right: 0,
  },
  mon: {
    left: "5.82%",
    textAlign: "left",
  },
  tue: {
    left: "21.98%",
    textAlign: "center",
  },
  wed: {
    left: "39.35%",
  },
  text3: {
    left: 61,
    width: 14,
  },
  text4: {
    marginLeft: -169.5,
    left: "50%",
  },
  text5: {
    marginLeft: -63.5,
    left: "50%",
  },
  ellipseIcon: {
    left: 64,
  },
  groupChild2: {
    marginLeft: -163.5,
    left: "50%",
  },
  groupChild3: {
    marginLeft: -51.5,
    left: "50%",
  },
  image88Icon: {
    marginLeft: -76.5,
  },
  image88Icon1: {
    marginTop: -42.5,
    left: 42,
  },
  image88Icon2: {
    marginLeft: -184.5,
  },
  wed1: {
    left: "55.36%",
  },
  wed2: {
    left: "71.53%",
  },
  wed3: {
    right: 52,
  },
  text6: {
    marginLeft: 40.5,
    left: "50%",
  },
  text7: {
    marginLeft: 144.5,
    width: 28,
    left: "50%",
  },
  text8: {
    right: 55,
  },
  groupChild4: {
    marginLeft: 48.5,
    left: "50%",
  },
  groupChild5: {
    marginLeft: 152.5,
    left: "50%",
  },
  groupChild6: {
    right: 59,
  },
  image157Icon: {
    marginLeft: 129.5,
  },
  image158Icon: {
    right: 36,
  },
  image159Icon: {
    marginLeft: 28.5,
    left: "50%",
  },
  lineGroup: {
    alignSelf: "stretch",
    width: 662,
  },
  scrollGroup31: {
    marginTop: -125,
    left: 1,
    height: 153,
    maxHeight: 153,
    right: 0,
  },
  image88Icon3: {
    marginTop: 96,
    left: 31,
  },
  rectangleView: {
    marginTop: -132,
    marginLeft: -48.25,
    borderRadius: GlobalStyles.Border.br_4xl,
    width: 96,
    height: 167,
    left: "50%",
  },
  groupParent: {
    backgroundColor: GlobalStyles.Color.white,
    shadowColor: "rgba(0, 0, 0, 0.16)",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 3,
    elevation: 3,
    shadowOpacity: 1,
    height: 794,
    width: "100%",
    borderRadius: GlobalStyles.Border.br_lg,
  },
  chooseCardsStandard4: {
    backgroundColor: GlobalStyles.Color.gray_1100,
    flex: 1,
    paddingLeft: 13,
    paddingRight: 12,
    alignItems: "flex-end",
    width: "100%",
  },
});

export default CarbonTonnesRemoved;
