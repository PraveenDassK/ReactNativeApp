import React,{ useEffect, useState,useContext } from "react";
import { Text, StyleSheet, Image, View, Pressable, ScrollView } from "react-native";
import GlobalStyles from "../../GlobalStyles";

import carbonApi from "../api/test_api_list"
import AuthContext from "../auth/context";
import Button from "../components/Button"

const Carbon = ({navigation}) => {
  const [data, setData] = useState(null)
  const authContext = useContext(AuthContext)

  useEffect(() => {
    loadData()
  },[])
  
  const loadData = async () => {
    const response = await carbonApi.EcoModule_Earthly_GetProjectList();
    setData(response.data.details.data)
  }

  const switchProject = (_ID) => {
    console.log("Navigate to:"+_ID)
    authContext.setUser({ID : _ID})    
    navigation.navigate("CarbonProject")
  }

  var projects = []

  const formatData = () => {
    if(data != null){
      data.map(element => {
        projects.push(
          <View style={styles.projectBoxPadding}>
            <View key = {element.id} style={styles.projectBox}>

              <Image 
                style={{height: 150, width:230}}
                source={
                  element.image != "" ? {uri:element.image} : require("../assets/icon-bluecheck.png")
                }
              />

              <Text style = {styles.projectBoxTitleFont}>
                {element.displayName} 
              </Text>

              <Text style = {styles.projectBoxFont}>
                {element.description.replace(/<[^>]*>/g, "").substring(0,200).trim()}... 
              </Text>

              <Pressable onPress = {() => switchProject(element.id)} style={[styles.mainFont, styles.button]}>
                <Text style = {styles.mainFont}>
                  More details
                </Text>
              </Pressable>
            </View>
          </View>
        )
      });
    }
  }
  formatData()
  return (
    <View style={styles.carbon}>
      <ScrollView>
      <View style={styles.helloParent}>
        <Text style={[styles.hello, styles.helloColor, styles.helloTypo6]}>
          <Text style={styles.removeCarbon}>Restore Nature</Text>
        </Text>
        <Image
          style={[styles.image88Icon, styles.image88IconLayout]}
          resizeMode="cover"
          source={require("../assets/image-tree.png")}
        />
        <View style={[styles.groupChild, styles.iconLayout]} />
        <View style={styles.helloWrapper}>
          <Text style={[styles.hello1, styles.helloTypo5, styles.helloColor]}>
            <Text style={styles.removeCarbon}>
              <Text style={styles.atCarbonyteWe}>
                At Carbonyte we help you to track,
              </Text>
            </Text>
            <Text style={styles.removeCarbon}>
              <Text style={styles.atCarbonyteWe}>
                reduce and calculate your CO
              </Text>
              <Text>{`2 `}</Text>
              <Text>emission</Text>
            </Text>
            <Text style={styles.removeCarbon}>
              <Text style={styles.atCarbonyteWe}>from your daily tran</Text>
              scation
            </Text>
          </Text>
        </View>
        <Pressable
          style={[styles.groupParent, styles.groupPosition]}
          onPress={() => navigation.navigate("CarbonSpending")}
        >
          <View style={[styles.rectangleParent, styles.maskGroup236Position]}>
            <View style={[styles.groupItem, styles.historyPosition]} />
            <View style={[styles.maskGroup236, styles.maskGroup236Position]} />
          </View>
          <Text
            style={[
              styles.hello2,
              styles.helloTypo4,
              styles.helloPosition1,
              styles.helloTypo5,
            ]}
          >
            Calculate Carbon Footprint
          </Text>
        </Pressable>
        <Text
          style={[
            styles.removeYourCarbonFootprintA,
            styles.yourTypo,
            styles.weOnlyProfileHighQualityPLayout,
          ]}
        >
          Remove your carbon footprint and restore nature in seconds with our
          revolutionary instant purchase platform. Just choose what you want to
          balance – personal, business or travel impact – then go climate
          positive
        </Text>
        <Text
          style={[
            styles.weOnlyProfileHighQualityP,
            styles.yourTypo,
            styles.weOnlyProfileHighQualityPLayout,
          ]}
        >
          We only profile high-quality projects that meet our minimum standards
          in relation to carbon + biodiversity + social benefits
        </Text>
        <Text style={[styles.selectYourProject, styles.yourTypo]}>
          Select your project
        </Text>
        <View
          style={[styles.projects]}        
        >
          {projects}
        </View>
      </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  projects: {
    top:1250
  },
  helloColor: {
    color: GlobalStyles.Color.indigo_100,
    fontWeight: "700",
  },
  helloTypo6: {


    textAlign: "left",
    color: GlobalStyles.Color.indigo_100,
  },
  image88IconLayout: {
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  iconLayout: {
    height: 1,
    position: "absolute",
  },
  helloTypo5: {
    position: "absolute",
  },
  groupPosition: {
    height: 60,
    left: 0,
    right: 0,
    position: "absolute",
  },
  maskGroup236Position: {
    right: 0,
    top: 0,
    left: 0,
    position: "absolute",
  },
  historyPosition: {
    left: "0%",
    position: "absolute",
  },
  helloTypo4: {
    color: GlobalStyles.Color.black,
    textTransform: "uppercase",
    fontSize: GlobalStyles.FontSize.size_lg,
  },
  helloPosition1: {
    top: "40%",
    color: GlobalStyles.Color.black,
    textTransform: "uppercase",
  },
  yourTypo: {
    width: 321,
    left: 3,
    fontSize: GlobalStyles.FontSize.size_lg,
    textAlign: "left",
    position: "absolute",
  },
  weOnlyProfileHighQualityPLayout: {
    color: GlobalStyles.Color.gray_700,
    lineHeight: 17,
    width: 321,
    left: 3,
  },
  groupParentPosition1: {
    right: 3,
    left: 3,
    position: "absolute",
  },
  groupChildLayout3: {
    width: 94,
    left: 22,
  },
  groupChildPosition19: {
    marginTop: 197,
    backgroundColor: GlobalStyles.Color.gray_100,
    borderRadius: GlobalStyles.Border.br_2xs,
    top: "50%",
  },
  groupChildPosition18: {
    marginTop: 234,
    height: 27,
    backgroundColor: GlobalStyles.Color.gray_100,
    borderRadius: GlobalStyles.Border.br_2xs,
    top: "50%",
    position: "absolute",
  },
  groupChildPosition17: {
    marginTop: 271,
    height: 27,
    backgroundColor: GlobalStyles.Color.gray_100,
    borderRadius: GlobalStyles.Border.br_2xs,
    top: "50%",
    position: "absolute",
  },
  groupChildPosition16: {
    bottom: 132,
    height: 27,
    backgroundColor: GlobalStyles.Color.gray_100,
    borderRadius: GlobalStyles.Border.br_2xs,
    position: "absolute",
  },
  groupChildPosition15: {
    bottom: 95,
    height: 27,
    backgroundColor: GlobalStyles.Color.gray_100,
    borderRadius: GlobalStyles.Border.br_2xs,
    position: "absolute",
  },
  groupChildLayout: {
    bottom: 58,
    width: 122,
    height: 27,
    backgroundColor: GlobalStyles.Color.gray_100,
    borderRadius: GlobalStyles.Border.br_2xs,
    position: "absolute",
  },
  groupChildLayout2: {
    height: 27,
    backgroundColor: GlobalStyles.Color.gray_100,
    borderRadius: GlobalStyles.Border.br_2xs,
    position: "absolute",
  },
  groupChildPosition14: {
    marginLeft: -37,
    left: "50%",
  },
  groupChildPosition12: {
    marginLeft: -56,
    left: "50%",
  },
  helloTypo2: {
    lineHeight: 14,
    textAlign: "left",
    position: "absolute",
  },
  helloTypo3: {
    left: "6.56%",
    lineHeight: 14,
    fontSize: GlobalStyles.FontSize.size_base,
    color: GlobalStyles.Color.indigo_100,
    fontWeight: "700",
  },
  projectPosition: {
    width: 280,
    left: 21,
    top: "50%",
    color: GlobalStyles.Color.gray_700,
    lineHeight: 17,
    fontSize: GlobalStyles.FontSize.size_lg,
    textAlign: "left",
    position: "absolute",
  },
  coBenefitsPosition: {
    left: 27,
    fontSize: GlobalStyles.FontSize.size_xs,
    width: 80,
    top: "50%",
  },
  erosionSpaceBlock: {
    marginTop: 203,
    textAlign: "center",
  },
  benefitsTypo: {
    fontSize: GlobalStyles.FontSize.size_xs,
    color: GlobalStyles.Color.gray_700,
    position: "absolute",
  },
  benefitsTypo1: {
    fontWeight: "700",
    textAlign: "left",
  },
  airQualityPosition: {
    marginTop: 240,
    fontSize: GlobalStyles.FontSize.size_xs,
    top: "50%",
    color: GlobalStyles.Color.gray_700,
    textAlign: "center",
    position: "absolute",
  },
  soilHealthPosition: {
    marginTop: 277,
    fontSize: GlobalStyles.FontSize.size_xs,
    top: "50%",
    color: GlobalStyles.Color.gray_700,
    textAlign: "center",
    position: "absolute",
  },
  floodControlTypo: {
    bottom: 141,
    fontSize: GlobalStyles.FontSize.size_xs,
    color: GlobalStyles.Color.gray_700,
    textAlign: "center",
    position: "absolute",
  },
  trainingTypo: {
    bottom: 104,
    fontSize: GlobalStyles.FontSize.size_xs,
    color: GlobalStyles.Color.gray_700,
    textAlign: "center",
    position: "absolute",
  },
  nutritiusFoodTypo: {
    left: 26,
    fontSize: GlobalStyles.FontSize.size_xs,
    color: GlobalStyles.Color.gray_700,
    textAlign: "center",
    position: "absolute",
  },
  womenEmpoweredPosition: {
    bottom: 67,
    width: 115,
  },
  helloTypo1: {
    textAlign: "right",
    color: GlobalStyles.Color.blue_100,
    lineHeight: 14,
    fontWeight: "700",
    position: "absolute",
  },
  helloPosition: {
    left: "69.69%",
    textAlign: "right",
    color: GlobalStyles.Color.blue_100,
  },
  employmentLayout: {
    width: 72,
    left: "50%",
  },
  increaseLayout: {
    width: 111,
    left: "50%",
  },
  soilPosition: {
    marginLeft: -50,
    width: 56,
    left: "50%",
  },
  groupChildPosition11: {
    marginLeft: -74,
    left: "50%",
  },
  communityGroupsPosition: {
    right: 33,
    width: 100,
  },
  groupParentPosition: {
    right: 22,
    left: 22,
    top: "50%",
    height: 60,
    position: "absolute",
  },
  groupChildLayout1: {
    width: 74,
    left: 22,
  },
  groupChildPosition10: {
    bottom: 96,
    height: 27,
    backgroundColor: GlobalStyles.Color.gray_100,
    borderRadius: GlobalStyles.Border.br_2xs,
    position: "absolute",
  },
  groupChildPosition9: {
    bottom: 59,
    height: 27,
    backgroundColor: GlobalStyles.Color.gray_100,
    borderRadius: GlobalStyles.Border.br_2xs,
    position: "absolute",
  },
  groupChildPosition13: {
    width: 70,
    marginLeft: -57,
    left: "50%",
  },
  groupChildPosition8: {
    bottom: 22,
    height: 27,
    backgroundColor: GlobalStyles.Color.gray_100,
    borderRadius: GlobalStyles.Border.br_2xs,
    position: "absolute",
  },
  employment1Typo: {
    bottom: 105,
    fontSize: GlobalStyles.FontSize.size_xs,
    color: GlobalStyles.Color.gray_700,
    textAlign: "center",
    position: "absolute",
  },
  airQuality1Typo: {
    bottom: 68,
    fontSize: GlobalStyles.FontSize.size_xs,
    color: GlobalStyles.Color.gray_700,
    textAlign: "center",
    position: "absolute",
  },
  soilHealth1Typo: {
    bottom: 31,
    fontSize: GlobalStyles.FontSize.size_xs,
    color: GlobalStyles.Color.gray_700,
    textAlign: "center",
    position: "absolute",
  },
  groupChildPosition7: {
    marginTop: 161,
    height: 27,
    backgroundColor: GlobalStyles.Color.gray_100,
    borderRadius: GlobalStyles.Border.br_2xs,
    top: "50%",
    position: "absolute",
  },
  groupChildPosition6: {
    bottom: 93,
    height: 27,
    backgroundColor: GlobalStyles.Color.gray_100,
    borderRadius: GlobalStyles.Border.br_2xs,
    position: "absolute",
  },
  groupChild34Layout: {
    width: 79,
    left: "50%",
  },
  groupChild36Position: {
    right: 24,
    bottom: 56,
    height: 27,
    backgroundColor: GlobalStyles.Color.gray_100,
    borderRadius: GlobalStyles.Border.br_2xs,
    position: "absolute",
  },
  schoolPosition: {
    marginTop: 167,
    fontSize: GlobalStyles.FontSize.size_xs,
    top: "50%",
    color: GlobalStyles.Color.gray_700,
    textAlign: "center",
    position: "absolute",
  },
  employment2Typo: {
    bottom: 102,
    fontSize: GlobalStyles.FontSize.size_xs,
    color: GlobalStyles.Color.gray_700,
    textAlign: "center",
    position: "absolute",
  },
  training1Typo: {
    bottom: 65,
    fontSize: GlobalStyles.FontSize.size_xs,
    color: GlobalStyles.Color.gray_700,
    textAlign: "center",
    position: "absolute",
  },
  erosionControl3Typo: {
    bottom: 28,
    fontSize: GlobalStyles.FontSize.size_xs,
    color: GlobalStyles.Color.gray_700,
    textAlign: "center",
    position: "absolute",
  },
  helloTypo: {
    left: "77.5%",
    textAlign: "right",
    color: GlobalStyles.Color.blue_100,
    lineHeight: 14,
    fontWeight: "700",
    position: "absolute",
  },
  communityGroups1Layout: {
    width: 101,
    left: "50%",
  },
  groupChildPosition4: {
    marginTop: 140,
    height: 27,
    backgroundColor: GlobalStyles.Color.gray_100,
    borderRadius: GlobalStyles.Border.br_2xs,
    top: "50%",
    position: "absolute",
  },
  groupChildPosition3: {
    marginTop: 177,
    height: 27,
    backgroundColor: GlobalStyles.Color.gray_100,
    borderRadius: GlobalStyles.Border.br_2xs,
    top: "50%",
    position: "absolute",
  },
  groupChildPosition2: {
    bottom: 98,
    height: 27,
    backgroundColor: GlobalStyles.Color.gray_100,
    borderRadius: GlobalStyles.Border.br_2xs,
    position: "absolute",
  },
  groupChildPosition1: {
    bottom: 61,
    height: 27,
    backgroundColor: GlobalStyles.Color.gray_100,
    borderRadius: GlobalStyles.Border.br_2xs,
    position: "absolute",
  },
  groupChild45Layout: {
    width: 131,
    height: 27,
    backgroundColor: GlobalStyles.Color.gray_100,
    borderRadius: GlobalStyles.Border.br_2xs,
    position: "absolute",
  },
  school1Position: {
    marginTop: 146,
    fontSize: GlobalStyles.FontSize.size_xs,
    top: "50%",
    color: GlobalStyles.Color.gray_700,
    textAlign: "center",
    position: "absolute",
  },
  training2Position: {
    marginTop: 183,
    fontSize: GlobalStyles.FontSize.size_xs,
    top: "50%",
    color: GlobalStyles.Color.gray_700,
    textAlign: "center",
    position: "absolute",
  },
  culturalSpacesTypo: {
    bottom: 107,
    fontSize: GlobalStyles.FontSize.size_xs,
    color: GlobalStyles.Color.gray_700,
    textAlign: "center",
    position: "absolute",
  },
  erosionControl4Typo: {
    bottom: 70,
    fontSize: GlobalStyles.FontSize.size_xs,
    color: GlobalStyles.Color.gray_700,
    textAlign: "center",
    position: "absolute",
  },
  sustainableIncome1Typo: {
    bottom: 33,
    fontSize: GlobalStyles.FontSize.size_xs,
    color: GlobalStyles.Color.gray_700,
    textAlign: "center",
    position: "absolute",
  },
  waterPosition: {
    marginLeft: -68,
    width: 82,
    left: "50%",
  },
  habitatCreationFramePosition: {
    marginLeft: -48,
    left: "50%",
  },
  groupChildPosition5: {
    right: 14,
    width: 122,
  },
  wrapperPosition9: {
    marginTop: 145,
    height: 27,
    backgroundColor: GlobalStyles.Color.gray_100,
    borderRadius: GlobalStyles.Border.br_2xs,
    top: "50%",
  },
  trainingPosition1: {
    marginTop: -7.5,
    fontSize: GlobalStyles.FontSize.size_xs,
    top: "50%",
    color: GlobalStyles.Color.gray_700,
    textAlign: "center",
    position: "absolute",
  },
  wrapperPosition8: {
    marginTop: 182,
    height: 27,
    backgroundColor: GlobalStyles.Color.gray_100,
    borderRadius: GlobalStyles.Border.br_2xs,
    top: "50%",
    position: "absolute",
  },
  disasterDefencePosition: {
    width: 91,
    marginTop: -7.5,
    fontSize: GlobalStyles.FontSize.size_xs,
    top: "50%",
    color: GlobalStyles.Color.gray_700,
    textAlign: "center",
    position: "absolute",
  },
  wrapperPosition7: {
    marginTop: 219,
    height: 27,
    backgroundColor: GlobalStyles.Color.gray_100,
    borderRadius: GlobalStyles.Border.br_2xs,
    top: "50%",
    position: "absolute",
  },
  wrapperPosition6: {
    bottom: 47,
    height: 27,
    backgroundColor: GlobalStyles.Color.gray_100,
    borderRadius: GlobalStyles.Border.br_2xs,
    position: "absolute",
  },
  womenPosition: {
    width: 107,
    marginTop: -7.5,
    fontSize: GlobalStyles.FontSize.size_xs,
    top: "50%",
    color: GlobalStyles.Color.gray_700,
    textAlign: "center",
    position: "absolute",
  },
  wrapperPosition5: {
    bottom: 84,
    height: 27,
    backgroundColor: GlobalStyles.Color.gray_100,
    borderRadius: GlobalStyles.Border.br_2xs,
    position: "absolute",
  },
  healthInsuranceContainerPosition: {
    marginLeft: -71,
    left: "50%",
  },
  fishNurseriesContainerPosition: {
    marginLeft: -26,
    left: "50%",
  },
  wrapperPosition4: {
    bottom: 10,
    height: 27,
    backgroundColor: GlobalStyles.Color.gray_100,
    borderRadius: GlobalStyles.Border.br_2xs,
    position: "absolute",
  },
  containerPosition4: {
    marginLeft: -41,
    left: "50%",
  },
  foodPosition: {
    width: 71,
    marginTop: -7.5,
    fontSize: GlobalStyles.FontSize.size_xs,
    top: "50%",
    color: GlobalStyles.Color.gray_700,
    textAlign: "center",
    position: "absolute",
  },
  twoTreesIconLayout: {
    width: 103,
    position: "absolute",
  },
  healthInsurance1Position: {
    left: 4,
    marginTop: -7.5,
    fontSize: GlobalStyles.FontSize.size_xs,
    top: "50%",
    color: GlobalStyles.Color.gray_700,
    textAlign: "center",
    position: "absolute",
  },
  containerPosition3: {
    marginTop: 129.5,
    height: 27,
    backgroundColor: GlobalStyles.Color.gray_100,
    borderRadius: GlobalStyles.Border.br_2xs,
    top: "50%",
    position: "absolute",
  },
  containerPosition2: {
    marginTop: 165.5,
    height: 27,
    backgroundColor: GlobalStyles.Color.gray_100,
    borderRadius: GlobalStyles.Border.br_2xs,
    top: "50%",
    position: "absolute",
  },
  wrapperPosition3: {
    bottom: 20,
    height: 27,
    backgroundColor: GlobalStyles.Color.gray_100,
    borderRadius: GlobalStyles.Border.br_2xs,
    position: "absolute",
  },
  wrapperPosition2: {
    bottom: 92,
    height: 27,
    backgroundColor: GlobalStyles.Color.gray_100,
    borderRadius: GlobalStyles.Border.br_2xs,
    position: "absolute",
  },
  naturalAccessPosition: {
    width: 86,
    marginTop: -7.5,
    fontSize: GlobalStyles.FontSize.size_xs,
    top: "50%",
    color: GlobalStyles.Color.gray_700,
    textAlign: "center",
    position: "absolute",
  },
  wrapperPosition1: {
    marginTop: 245.32,
    height: 27,
    backgroundColor: GlobalStyles.Color.gray_100,
    borderRadius: GlobalStyles.Border.br_2xs,
    top: "50%",
    position: "absolute",
  },
  disasterDefenceFramePosition: {
    bottom: 158,
    height: 27,
    backgroundColor: GlobalStyles.Color.gray_100,
    borderRadius: GlobalStyles.Border.br_2xs,
    position: "absolute",
  },
  employmentFramePosition: {
    marginTop: 105.32,
    height: 27,
    backgroundColor: GlobalStyles.Color.gray_100,
    borderRadius: GlobalStyles.Border.br_2xs,
    top: "50%",
    position: "absolute",
  },
  healthcareAccessWrapperLayout: {
    bottom: 90,
    width: 121,
    height: 27,
    backgroundColor: GlobalStyles.Color.gray_100,
    borderRadius: GlobalStyles.Border.br_2xs,
    position: "absolute",
  },
  containerPosition1: {
    marginTop: 175.32,
    height: 27,
    backgroundColor: GlobalStyles.Color.gray_100,
    borderRadius: GlobalStyles.Border.br_2xs,
    top: "50%",
    position: "absolute",
  },
  containerPosition: {
    marginTop: 210.32,
    top: "50%",
  },
  wrapperPosition: {
    bottom: 124,
    height: 27,
    backgroundColor: GlobalStyles.Color.gray_100,
    borderRadius: GlobalStyles.Border.br_2xs,
    position: "absolute",
  },
  employmentWrapper1Position: {
    marginTop: 166.26,
    height: 27,
    backgroundColor: GlobalStyles.Color.gray_100,
    borderRadius: GlobalStyles.Border.br_2xs,
    top: "50%",
    position: "absolute",
  },
  healthContainerPosition: {
    marginTop: 131.26,
    height: 27,
    backgroundColor: GlobalStyles.Color.gray_100,
    borderRadius: GlobalStyles.Border.br_2xs,
    top: "50%",
    position: "absolute",
  },
  framePosition: {
    bottom: 54,
    height: 27,
    backgroundColor: GlobalStyles.Color.gray_100,
    borderRadius: GlobalStyles.Border.br_2xs,
    position: "absolute",
  },
  wrapperLayout: {
    bottom: 89,
    width: 130,
    height: 27,
    backgroundColor: GlobalStyles.Color.gray_100,
    borderRadius: GlobalStyles.Border.br_2xs,
    position: "absolute",
  },
  eroisionPosition: {
    marginLeft: 0,
    width: 97,
    left: "50%",
  },
  trainingPosition: {
    marginLeft: -49,
    width: 56,
    height: 27,
    backgroundColor: GlobalStyles.Color.gray_100,
    borderRadius: GlobalStyles.Border.br_2xs,
    left: "50%",
    position: "absolute",
  },
  helloGroupShadowBox: {
    backgroundColor: GlobalStyles.Color.gray_1400,
    borderRadius: GlobalStyles.Border.br_2xs,
    elevation: 20,
    shadowRadius: 20,
    shadowColor: "rgba(1, 1, 253, 0.1)",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    left: "50%",
  },
  text17Typo: {
    transform: [
      {
        scaleY: -1,
      },
    ],
    textAlign: "left",
    position: "absolute",
  },
  helloGroupLayout: {
    height: 3,
    position: "absolute",
  },
  groupChildPosition: {
    borderRadius: GlobalStyles.Border.br_4xs,
    left: 0,
    right: 0,
    position: "absolute",
    backgroundColor: GlobalStyles.Color.white,
  },
  historyTypo: {
    opacity: 0.3,
    letterSpacing: 1,
    fontSize: GlobalStyles.FontSize.size_xl,
    color: GlobalStyles.Color.gray_700,
    top: 0,
    textAlign: "left",
    position: "absolute",
  },
  text18Typo: {
    lineHeight: 1,
    fontSize: GlobalStyles.FontSize.size_10xs,
    textAlign: "left",
    position: "absolute",
  },
  removeCarbon: {
    margin: GlobalStyles.Margin.margin_8xs,
  },
  hello: {
    top: 65,
    fontSize: GlobalStyles.FontSize.size_8xl,
    lineHeight: 24,
    textAlign: "left",
    left: 8,
    position: "absolute",
  },
  image88Icon: {
    top: 147,
    left: 29,
    height: 384,
    right: 30,
  },
  groupChild: {
    marginLeft: 49,
    top: 259,
    borderStyle: "solid",
    borderColor: "#707070",
    borderWidth: 1,
    width: 1,
    left: "50%",
    backgroundColor: GlobalStyles.Color.white,
    height: 1,
  },
  atCarbonyteWe: {
    fontSize: GlobalStyles.FontSize.size_lg,
  },
  hello1: {
    top: "14.67%",
    left: "4.29%",
    lineHeight: 20,
    textAlign: "center",
  },
  helloWrapper: {
    top: 610,
    shadowColor: "rgba(1, 1, 253, 0.05)",
    shadowRadius: 6,
    elevation: 6,
    height: 75,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    borderRadius: GlobalStyles.Border.br_lg,
    left: 0,
    right: 0,
    position: "absolute",
    backgroundColor: GlobalStyles.Color.white,
  },
  groupItem: {
    backgroundColor: GlobalStyles.Color.gray_500,
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    left: "0%",
    borderRadius: GlobalStyles.Border.br_lg,
    width: "100%",
  },
  maskGroup236: {
    bottom: 13,
    top: 0,
    left: 0,
  },
  rectangleParent: {
    bottom: 0,
    top: 0,
    left: 0,
  },
  hello2: {
    left: "12.27%",
    textAlign: "left",
  },
  groupParent: {
    top: 518,
  },
  removeYourCarbonFootprintA: {
    top: 1002,
  },
  weOnlyProfileHighQualityP: {
    top: 1102,
  },
  selectYourProject: {
    top: 1195,
    width: 321,
    left: 3,
    color: GlobalStyles.Color.indigo_100,
    fontWeight: "700",
  },
  history: {
    marginTop: -27.5,
    fontSize: GlobalStyles.FontSize.size_7xl,
    letterSpacing: 2,
    top: "50%",
    textAlign: "left",
  },
  historyWrapper: {
    top: 808,
    height: 55,
    width: 114,
    left: 0,
    position: "absolute",
  },
  groupInner: {
    borderRadius: GlobalStyles.Border.br_6xl,
    elevation: 20,
    shadowRadius: 20,
    shadowColor: "rgba(1, 1, 253, 0.1)",
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    position: "absolute",
    width: "100%",
    backgroundColor: GlobalStyles.Color.white,
  },
  groupChild1: {
    width: 66,
    left: 22,
  },
  groupChild3: {
    width: 78,
    left: 22,
  },
  groupChild4: {
    width: 52,
    left: 22,
  },
  groupChild5: {
    width: 122,
    left: 22,
  },
  groupChild6: {
    bottom: 21,
    width: 88,
    left: 22,
  },
  groupChild7: {
    right: 47,
    width: 122,
  },
  groupChild8: {
    width: 80,
  },
  groupChild9: {
    marginLeft: -64,
    width: 135,
    left: "50%",
  },
  groupChild11: {
    width: 80,
  },
  groupChild12: {
    marginLeft: -81,
    width: 129,
    left: "50%",
  },
  groupChild13: {
    width: 92,
    right: 20,
  },
  groupChild14: {
    width: 113,
    right: 27,
  },
  groupChild15: {
    right: 16,
    width: 113,
  },
  maskGroup295: {
    top: 18,
    height: 170,
    left: 21,
    right: 20,
  },
  hello3: {
    top: "22.15%",
    fontSize: GlobalStyles.FontSize.size_base,
  },
  thisTreePlantingInitiative: {
    marginTop: -202,
  },
  coBenefits: {
    marginTop: 166,
    textAlign: "left",
  },
  airQuality: {
    width: 57,
    left: 30,
  },
  pollination: {
    width: 59,
    left: 30,
  },
  floodControl: {
    width: 75,
    left: 24,
  },
  training: {
    width: 47,
    left: 24,
  },
  womenEmpowered: {
    width: 115,
  },
  nutritiusFood: {
    bottom: 30,
    width: 84,
  },
  youthRepresented: {
    marginLeft: -5,
    width: 115,
    textAlign: "center",
    left: "50%",
  },
  text1: {
    fontSize: GlobalStyles.FontSize.size_9xl,
  },
  tree1: {
    fontSize: GlobalStyles.FontSize.size_base,
  },
  hello4: {
    top: "22.27%",
  },
  employment: {
    marginLeft: -33,
    top: "50%",
  },
  increaseBiodiversity: {
    marginLeft: -53,
  },
  soilHealth: {
    width: 56,
  },
  foodSecurity: {
    marginLeft: -51,
  },
  waterFlowRegulation: {
    width: 116,
  },
  erosionControl1: {
    width: 82,
    right: 23,
    top: "50%",
  },
  communityGroups: {
    width: 100,
  },
  sustainableIncome: {
    right: 18,
    width: 108,
  },
  hello5: {
    left: "31.88%",
  },
  groupContainer: {
    marginTop: 88.66,
  },
  rectangleGroup: {
    marginTop: -2434.83,
    height: 934,
    top: "50%",
  },
  groupChild21: {
    width: 80,
  },
  groupChild22: {
    width: 121,
  },
  groupChild24: {
    width: 92,
    right: 20,
  },
  groupChild25: {
    width: 113,
    right: 27,
  },
  hello6: {
    top: "30.93%",
    fontSize: GlobalStyles.FontSize.size_base,
  },
  culmMoorNatureReserveInDe: {
    marginTop: -69.5,
  },
  employment1: {
    left: 30,
    width: 80,
  },
  airQuality1: {
    left: 30,
    width: 80,
  },
  pollination1: {
    width: 59,
    left: 30,
  },
  hello7: {
    top: "31.09%",
    left: "81.56%",
  },
  connectivity: {
    marginLeft: -32,
  },
  increaseBiodiversity1: {
    marginLeft: -33,
  },
  soilHealth1: {
    width: 56,
  },
  erosionControl2: {
    width: 82,
    right: 23,
  },
  habitatCreation: {
    width: 100,
  },
  coBenefits1: {
    marginTop: 179.5,
    left: 24,
    width: 80,
    top: "50%",
    textAlign: "left",
  },
  groupParent1: {
    marginTop: 102.16,
  },
  groupView: {
    marginTop: -1464.83,
    height: 669,
    top: "50%",
  },
  groupChild28: {
    width: 59,
    left: 22,
  },
  groupChild29: {
    width: 138,
    left: 22,
  },
  groupChild30: {
    bottom: 56,
    width: 129,
    left: 22,
  },
  groupChild31: {
    bottom: 19,
    width: 129,
    left: 22,
  },
  groupChild32: {
    width: 93,
  },
  groupChild33: {
    marginLeft: 5,
    width: 84,
    left: "50%",
  },
  groupChild34: {
    bottom: 56,
    marginLeft: -5,
  },
  groupChild35: {
    bottom: 19,
    marginLeft: -5,
    width: 113,
    left: "50%",
  },
  groupChild36: {
    width: 60,
  },
  hello9: {
    top: "32.53%",
    fontSize: GlobalStyles.FontSize.size_base,
  },
  theKasigauCorridorProjectI: {
    marginTop: -53,
  },
  school: {
    width: 41,
    left: 30,
  },
  educationInvestment: {
    left: 30,
    width: 122,
  },
  endangeredSpecies: {
    width: 116,
    left: 30,
  },
  erosionControl3: {
    width: 116,
    left: 30,
  },
  hello10: {
    top: "32.7%",
  },
  employment2: {
    marginLeft: 9,
    width: 78,
    left: "50%",
  },
  connectivity1: {
    width: 65,
    marginLeft: 2,
    left: "50%",
  },
  communityGroups1: {
    marginLeft: 2,
  },
  training1: {
    width: 50,
    right: 27,
  },
  womenEmpowered1: {
    right: 17,
    width: 115,
  },
  coBenefits2: {
    marginTop: 132,
    left: 24,
    width: 80,
    top: "50%",
    textAlign: "left",
  },
  groupParent2: {
    marginTop: 54.66,
  },
  rectangleParent2: {
    marginTop: -759.83,
    height: 636,
    top: "50%",
  },
  groupChild40: {
    width: 59,
    left: 22,
  },
  groupChild41: {
    width: 76,
    left: 22,
  },
  groupChild42: {
    width: 129,
    left: 22,
  },
  groupChild43: {
    width: 96,
    left: 22,
  },
  groupChild44: {
    width: 120,
    bottom: 24,
    left: 22,
  },
  groupChild45: {
    right: 39,
    bottom: 24,
  },
  groupChild46: {
    width: 93,
  },
  groupChild47: {
    width: 130,
  },
  groupChild48: {
    marginLeft: -5,
    width: 92,
    left: "50%",
  },
  groupChild49: {
    width: 113,
  },
  groupChild50: {
    width: 60,
    right: 20,
  },
  hello12: {
    top: "30.52%",
    fontSize: GlobalStyles.FontSize.size_base,
  },
  aReddProjectWithAFocusO: {
    marginTop: -85,
  },
  school1: {
    width: 41,
    left: 30,
  },
  landRights: {
    width: 63,
    left: 30,
  },
  endangeredSpecies1: {
    width: 116,
    left: 30,
  },
  erosionControl4: {
    width: 83,
    left: 30,
  },
  sustainableIncome1: {
    width: 104,
    left: 30,
  },
  inclusiveGovernance: {
    right: 44,
    width: 116,
  },
  hello13: {
    top: "30.68%",
  },
  biodiversityProtection: {
    width: 120,
  },
  culturalSpaces: {
    marginLeft: 2,
    width: 82,
    left: "50%",
  },
  climateRegulation: {
    marginLeft: -30,
  },
  training2: {
    width: 50,
    right: 23,
  },
  healthInsurance: {
    right: 17,
    width: 115,
  },
  coBenefits3: {
    marginTop: 111,
    width: 80,
    left: 22,
    top: "50%",
    textAlign: "left",
  },
  groupParent3: {
    marginTop: 33.66,
  },
  rectangleParent4: {
    marginTop: -87.83,
    height: 678,
    top: "50%",
  },
  hello15: {
    top: "28.19%",
    fontSize: GlobalStyles.FontSize.size_base,
  },
  thisTrailBlazingProjectRun: {
    marginTop: -113,
  },
  school2: {
    width: 41,
    left: 8,
  },
  schoolWrapper: {
    marginLeft: -29,
    width: 59,
    left: "50%",
    position: "absolute",
  },
  disasterDefence: {
    left: 8,
  },
  disasterDefenceWrapper: {
    width: 105,
    left: 21,
  },
  endangeredSpecies2: {
    left: 7,
    width: 116,
  },
  endangeredSpeciesWrapper: {
    right: 44,
    width: 129,
  },
  womenEmpowered2: {
    left: 7,
  },
  womenEmpoweredWrapper: {
    width: 121,
    left: 22,
  },
  sustainableIncome2: {
    left: 9,
    width: 104,
  },
  sustainableIncomeWrapper: {
    width: 120,
    left: 21,
  },
  oceanAcidificationControl: {
    width: 142,
    left: 8,
  },
  oceanAcidificationControlWrapper: {
    width: 158,
  },
  hello16: {
    top: "28.34%",
  },
  employment3: {
    left: 6,
    width: 82,
  },
  employmentWrapper: {
    width: 93,
    right: 30,
    position: "absolute",
  },
  biodiversityProtection1: {
    left: 6,
    width: 120,
  },
  biodiversityProtectionWrapper: {
    width: 130,
  },
  fishNurseries: {
    left: 6,
    width: 76,
  },
  fishNurseriesWrapper: {
    width: 88,
    left: 22,
  },
  habitatCreation1: {
    width: 87,
    left: 6,
  },
  habitatCreationWrapper: {
    width: 98,
  },
  foodSecurity1: {
    left: 7,
  },
  foodSecurityWrapper: {
    marginLeft: -9,
    width: 82,
    left: "50%",
  },
  training3: {
    left: 6,
    width: 50,
  },
  trainingWrapper: {
    width: 60,
    left: 22,
  },
  coBenefits4: {
    marginTop: 116,
    width: 80,
    left: 22,
    top: "50%",
    textAlign: "left",
  },
  healthInsurance1: {
    width: 96,
  },
  healthInsuranceWrapper: {
    left: 21,
  },
  groupParent4: {
    marginTop: 41.66,
  },
  rectangleParent6: {
    marginTop: 626.17,
    height: 734,
    top: "50%",
  },
  hello18: {
    top: "32.28%",
    fontSize: GlobalStyles.FontSize.size_base,
  },
  aPlanToRestoreA200Hectar: {
    marginTop: -66.5,
  },
  soilHealth2: {
    width: 56,
    left: 8,
  },
  soilHealthWrapper: {
    marginLeft: -40,
    width: 69,
    bottom: 56,
    left: "50%",
  },
  disasterDefenceContainer: {
    width: 105,
  },
  endangeredSpeciesContainer: {
    marginLeft: -35,
    width: 129,
    left: "50%",
  },
  climateRegulationWrapper: {
    width: 121,
    left: 22,
  },
  naturalAccess: {
    left: 9,
  },
  naturalAccessWrapper: {
    width: 102,
    marginLeft: -5,
    left: "50%",
  },
  hello19: {
    top: "32.45%",
    left: "75%",
  },
  employmentContainer: {
    width: 93,
    left: 21,
  },
  increasesBiodiversityWrapper: {
    width: 130,
    left: 21,
  },
  waterSecurityWrapper: {
    bottom: 56,
    width: 88,
    left: 22,
  },
  habitatCreationContainer: {
    width: 98,
    left: 22,
  },
  eroisionControl: {
    left: 6,
  },
  eroisionControlWrapper: {
    width: 97,
  },
  coBenefits5: {
    marginTop: 97.5,
    width: 80,
    left: 22,
    top: "50%",
    textAlign: "left",
  },
  airQuality2: {
    left: 2,
    width: 59,
  },
  airQualityWrapper: {
    marginLeft: -12,
    width: 62,
    left: "50%",
  },
  groupParent5: {
    marginTop: 20.16,
  },
  rectangleParent8: {
    marginTop: 1396.17,
    height: 641,
    top: "50%",
  },
  hello21: {
    top: "22.39%",
    fontSize: GlobalStyles.FontSize.size_base,
  },
  theRimbaRayaBiodiversityRe: {
    marginTop: -208,
  },
  connectivity2: {
    width: 67,
    left: 8,
  },
  connectivityWrapper: {
    marginLeft: -17,
  },
  disasterDefenceFrame: {
    width: 105,
    left: 24,
  },
  educationInvestmentWrapper: {
    marginTop: 140.32,
    width: 129,
    left: 22,
    top: "50%",
  },
  healthServices: {
    left: 7,
    width: 84,
  },
  healthServicesWrapper: {
    width: 97,
    left: 22,
  },
  climateRegulationContainer: {
    left: 24,
  },
  speciesReintroduction: {
    width: 118,
    left: 7,
  },
  speciesReintroductionWrapper: {
    bottom: 56,
    left: 24,
  },
  temperatureModeration: {
    left: 5,
    width: 132,
  },
  temperatureModerationWrapper: {
    width: 139,
    left: 24,
  },
  healthcareAccessWrapper: {
    marginLeft: -10,
    left: "50%",
  },
  sustainableIncomeContainer: {
    right: 34,
    bottom: 56,
    width: 121,
  },
  waterFlowRegulation1: {
    width: 115,
  },
  waterFlowRegulationWrapper: {
    width: 121,
    right: 27,
  },
  communityGroups2: {
    left: 7,
    width: 100,
  },
  communityGroupsWrapper: {
    left: 24,
    width: 114,
  },
  hello22: {
    top: "22.51%",
    left: "64.37%",
  },
  employmentFrame: {
    marginLeft: -34,
    width: 93,
    left: "50%",
  },
  biodiversityProtectionContainer: {
    width: 130,
    left: 22,
  },
  foodSecurity2: {
    left: 6,
  },
  foodSecurityContainer: {
    width: 82,
    left: 22,
  },
  womenEmpowered3: {
    left: 6,
  },
  womenEmpoweredContainer: {
    right: 26,
    width: 120,
  },
  endangeredSpeciesFrame: {
    marginTop: 141.32,
    width: 130,
    top: "50%",
    right: 30,
  },
  waterQualityWrapper: {
    right: 17,
    width: 88,
  },
  fishNurseriesContainer: {
    width: 98,
  },
  habitatCreationFrame: {
    width: 98,
  },
  floodControl1: {
    width: 73,
    left: 6,
  },
  floodControlWrapper: {
    width: 83,
    left: 24,
  },
  training4: {
    width: 44,
    left: 6,
  },
  coBenefits6: {
    marginTop: 76.32,
    width: 80,
    left: 22,
    top: "50%",
    textAlign: "left",
  },
  groupParent6: {
    marginTop: -2.34,
  },
  rectangleParent10: {
    bottom: 671,
    height: 924,
  },
  hello24: {
    top: "32.58%",
    fontSize: GlobalStyles.FontSize.size_base,
  },
  thisProjectWasLaunchedIn2: {
    marginTop: -63.5,
  },
  educationInvestmentContainer: {
    width: 129,
  },
  employment6: {
    left: 7,
    width: 75,
  },
  employmentWrapper1: {
    width: 87,
    left: 22,
  },
  schools: {
    width: 43,
    left: 7,
  },
  schoolsWrapper: {
    width: 59,
    left: 22,
  },
  healthInsurance2: {
    left: 7,
  },
  healthInsuranceContainer: {
    width: 104,
  },
  hello25: {
    top: "32.76%",
  },
  healthServicesContainer: {
    right: 26,
    width: 93,
  },
  biodiversityProtectionFrame: {
    width: 130,
    left: 22,
  },
  foodSecurityFrame: {
    bottom: 19,
    width: 82,
    left: 22,
  },
  womenEmpoweredFrame: {
    right: 26,
    width: 120,
    bottom: 19,
  },
  endangeredSpeciesWrapper1: {
    right: 30,
  },
  inclusiveGovernanceWrapper: {
    left: 22,
  },
  trainingFrame: {
    bottom: 19,
  },
  coBenefits7: {
    marginTop: 102.26,
    width: 80,
    left: 22,
    top: "50%",
    textAlign: "left",
  },
  groupParent7: {
    marginTop: 23.16,
  },
  rectangleParent12: {
    height: 635,
    bottom: 0,
  },
  iconFeatherShoppingCart: {
    marginTop: -1.2,
    right: 2,
    width: 4,
    top: "50%",
  },
  hello27: {
    top: "60%",
    left: "31.48%",
    lineHeight: 2,
    color: GlobalStyles.Color.white,
    fontSize: GlobalStyles.FontSize.size_10xs,
    transform: [
      {
        scaleY: -1,
      },
    ],
  },
  groupChild66: {
    marginTop: -0.5,
    height: 0,
    top: "50%",
  },
  text17: {
    marginLeft: -0.5,
    fontSize: 2,
    lineHeight: 3,
    color: GlobalStyles.Color.gray_1400,
    top: 0,
    left: "50%",
  },
  rectangleParent14: {
    left: 1,
    width: 3,
    top: 0,
  },
  iconFeatherShoppingCartParent: {
    marginLeft: -27,
    top: 1313,
    width: 54,
    height: 5,
    position: "absolute",
  },
  twoTreesIcon: {
    top: 790,
    height: 87,
    right: 30,
  },
  hello28: {
    top: "38.33%",
    left: "16.87%",
    textAlign: "left",
  },
  groupPressable: {
    top: 919,
  },
  history1: {
    left: 0,
  },
  history2: {
    marginLeft: -63.5,
    left: "50%",
  },
  history3: {
    marginLeft: 21.5,
    letterSpacing: 1,
    fontSize: GlobalStyles.FontSize.size_xl,
    color: GlobalStyles.Color.gray_700,
    top: 0,
    left: "50%",
    textAlign: "left",
    fontWeight: "700",
    position: "absolute",
  },
  history4: {
    right: -1,
  },
  historyParent: {
    height: 16,
    right: 23,
    top: 0,
    left: 8,
    position: "absolute",
  },
  hello29: {
    top: "33.33%",
    left: "30.77%",
    color: GlobalStyles.Color.white,
  },
  groupChild68: {
    height: 2,
    top: 0,
  },
  text18: {
    color: GlobalStyles.Color.gray_1400,
    bottom: 0,
    left: 0,
  },
  rectangleParent16: {
    bottom: 0,
    top: 0,
    left: 0,
    width: 1,
    position: "absolute",
  },
  iconFeatherShoppingCart1: {
    marginTop: -0.92,
    right: 1,
    top: "50%",
    width: 1,
  },
  helloGroup: {
    marginLeft: -6,
    top: 742,
    width: 13,
  },
  helloParent: {
    width: "100%",
    height: 7336,
  },
  carbon: {
    flex: 1,
    paddingLeft: GlobalStyles.Padding.padding_7xs,
    paddingRight: GlobalStyles.Padding.padding_8xs,
    width: "100%",
    backgroundColor: GlobalStyles.Color.white,
  },
  
});

export default Carbon;
