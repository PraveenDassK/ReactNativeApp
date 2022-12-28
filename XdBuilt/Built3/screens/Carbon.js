import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import GlobalStyles from "../GlobalStyles";

const Carbon = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.carbon}>
      <View style={styles.carbonChild} />
      <Text
        style={[
          styles.hello,
          styles.mt41,
          styles.mr108,
          styles.benefitsTypo1,
          styles.helloTypo6,
        ]}
      >
        <Text style={styles.removeCarbon}>Remove Carbon,</Text>
        <Text style={styles.removeCarbon}>Restore Nature</Text>
      </Text>
      <Image
        style={[styles.image88Icon, styles.mt31]}
        resizeMode="cover"
        source={require("../assets/image-88.png")}
      />
      <View style={[styles.carbonItem, styles.mt_272, styles.ml100]} />
      <View style={[styles.helloWrapper, styles.mt32, styles.ml1]}>
        <Text style={styles.hello1}>
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
        style={[styles.component20875Parent, styles.mt258, styles.ml1]}
        onPress={() => navigation.navigate("CarbonSpending")}
      >
        <View
          style={[
            styles.component20875,
            styles.text18Position,
            styles.maskGroup236Position,
          ]}
        >
          <View style={[styles.rectangleParent, styles.maskGroup236Position]}>
            <View style={[styles.groupChild, styles.historyPosition]} />
            <View style={[styles.maskGroup236, styles.maskGroup236Position]} />
          </View>
        </View>
        <Text style={[styles.hello2, styles.helloTypo4, styles.helloTypo5]}>
          Calculate Carbon Footprint
        </Text>
      </Pressable>
      <Text
        style={[
          styles.removeYourCarbonFootprintA,
          styles.mt23,
          styles.yourTypo,
        ]}
      >
        Remove your carbon footprint and restore nature in seconds with our
        revolutionary instant purchase platform. Just choose what you want to
        balance – personal, business or travel impact – then go climate positive
      </Text>
      <Text
        style={[
          styles.removeYourCarbonFootprintA,
          styles.mt15,
          styles.yourTypo,
        ]}
      >
        We only profile high-quality projects that meet our minimum standards in
        relation to carbon + biodiversity + social benefits
      </Text>
      <Text style={[styles.selectYourProject, styles.mt42, styles.yourTypo]}>
        Select your project
      </Text>
      <View style={[styles.historyWrapper, styles.mt_77, styles.mr213]}>
        <Text
          style={[
            styles.history,
            styles.historyPosition,
            styles.benefitsTypo1,
            styles.helloTypo6,
          ]}
        >
          <Text style={styles.removeCarbon}>Invest in</Text>
          <Text style={styles.removeCarbon}>Nature</Text>
        </Text>
      </View>
      <View style={[styles.rectangleGroup, styles.mt21, styles.ml1]}>
        <View style={styles.groupItem} />
        <View
          style={[
            styles.groupChildLayout2,
            styles.groupChildLayout3,
            styles.groupChildPosition18,
          ]}
        />
        <View style={[styles.rectangleView, styles.groupChild8Position]} />
        <View style={[styles.groupChildLayout1, styles.groupChildPosition17]} />
        <View style={[styles.groupChild2, styles.groupChildPosition16]} />
        <View style={[styles.groupChild3, styles.groupChildPosition15]} />
        <View style={[styles.groupChild4, styles.groupChildLayout]} />
        <View style={[styles.groupChild5, styles.groupChildLayout2]} />
        <View style={[styles.groupChild6, styles.groupChildLayout]} />
        <View
          style={[
            styles.groupChild7,
            styles.groupChildPosition14,
            styles.groupChildLayout2,
            styles.groupChildPosition18,
          ]}
        />
        <View style={[styles.groupChild8, styles.groupChild8Position]} />
        <View
          style={[styles.groupChildPosition13, styles.groupChildPosition17]}
        />
        <View
          style={[
            styles.groupChild10,
            styles.groupChildPosition12,
            styles.groupChildPosition16,
          ]}
        />
        <View style={[styles.groupChild11, styles.groupChildPosition15]} />
        <View
          style={[
            styles.groupChild12,
            styles.groupChildLayout2,
            styles.groupChildPosition18,
          ]}
        />
        <View style={[styles.groupChild13, styles.groupChildPosition17]} />
        <View style={[styles.groupChild14, styles.groupChildPosition16]} />
        <Image
          style={styles.maskGroup295}
          resizeMode="cover"
          source={require("../assets/mask-group-295.png")}
        />
        <Text style={[styles.hello3, styles.helloTypo2, styles.helloTypo3]}>
          <Text style={styles.removeCarbon}>Agroforestry-</Text>
          <Text style={styles.removeCarbon}>Tree Planting</Text>
          <Text style={styles.removeCarbon}>Initiative, Kenya</Text>
        </Text>
        <Text
          style={[styles.thisTreePlantingInitiative, styles.projectPosition]}
        >{`This Tree Planting Initiative is a wonderful chance to support local local farmers in Kenya at the beginning of their tree planting journey under the TIST program! With a long history of successful agroforestry projects around the world, new TIST plantation areas keep growing. Since carbon benefits from planted saplings take years to cash in, this project bridges this gap in conservation finance by supporting farmers right from the beginning of their carbon removal journey. This means their positive efforts for the environment are always rewarded, including when the finance is needed most. `}</Text>
        <Text
          style={[
            styles.benefitsTypo,
            styles.coBenefitsPosition,
            styles.erosionSpaceBlock,
          ]}
        >
          erosion control
        </Text>
        <Text
          style={[
            styles.coBenefits,
            styles.benefitsTypo,
            styles.coBenefitsPosition,
            styles.benefitsTypo1,
          ]}
        >
          Co-benefits
        </Text>
        <Text style={[styles.airQuality, styles.airQualityPosition]}>
          air quality
        </Text>
        <Text style={[styles.pollination, styles.soilHealthPosition]}>
          pollination
        </Text>
        <Text style={[styles.floodControl, styles.floodControlTypo]}>
          flood control
        </Text>
        <Text style={[styles.training, styles.trainingTypo]}>training</Text>
        <Text
          style={[
            styles.womenEmpowered,
            styles.nutritiusFoodTypo,
            styles.womenEmpoweredPosition,
          ]}
        >
          women empowered
        </Text>
        <Text style={[styles.nutritiusFood, styles.nutritiusFoodTypo]}>
          nutritius food
        </Text>
        <Text
          style={[
            styles.youthRepresented,
            styles.womenEmpoweredPosition,
            styles.benefitsTypo,
          ]}
        >
          youth represented
        </Text>
        <Text style={[styles.hello4, styles.helloTypo1, styles.helloPosition]}>
          <Text style={styles.removeCarbon}>
            <Text style={styles.text1}>£1.45</Text>
          </Text>
          <Text style={styles.removeCarbon}>
            <Text style={styles.tree1}>/ Tree</Text>
          </Text>
        </Text>
        <Text
          style={[
            styles.employment,
            styles.employmentLayout,
            styles.benefitsTypo,
            styles.erosionSpaceBlock,
          ]}
        >
          employment
        </Text>
        <Text
          style={[
            styles.increaseBiodiversity,
            styles.increaseLayout,
            styles.airQualityPosition,
          ]}
        >
          increase biodiversity
        </Text>
        <Text
          style={[
            styles.soilHealth,
            styles.soilPosition,
            styles.soilHealthPosition,
          ]}
        >
          soil health
        </Text>
        <Text
          style={[
            styles.foodSecurity,
            styles.employmentLayout,
            styles.floodControlTypo,
          ]}
        >
          food security
        </Text>
        <Text
          style={[
            styles.waterFlowRegulation,
            styles.groupChildPosition11,
            styles.trainingTypo,
          ]}
        >
          water flow regulation
        </Text>
        <Text
          style={[
            styles.erosionControl1,
            styles.benefitsTypo,
            styles.erosionSpaceBlock,
          ]}
        >
          erosion control
        </Text>
        <Text
          style={[
            styles.communityGroups,
            styles.communityGroupsPosition,
            styles.soilHealthPosition,
          ]}
        >
          community groups
        </Text>
        <Text style={[styles.sustainableIncome, styles.floodControlTypo]}>
          sustainable income
        </Text>
        <Pressable
          style={[styles.groupParent, styles.groupParentPosition]}
          onPress={() => navigation.navigate("Carbon2")}
        >
          <View
            style={[
              styles.component20875,
              styles.text18Position,
              styles.maskGroup236Position,
            ]}
          >
            <View style={[styles.groupChild, styles.historyPosition]} />
            <View style={[styles.maskGroup236, styles.maskGroup236Position]} />
          </View>
          <Text style={[styles.hello5, styles.helloTypo2, styles.helloTypo4]}>
            Add To Cart
          </Text>
        </Pressable>
      </View>
      <View style={[styles.groupView, styles.mt885, styles.ml1]}>
        <View style={styles.groupItem} />
        <View style={[styles.groupChildPosition10, styles.groupChildLayout3]} />
        <View style={[styles.groupChildPosition9, styles.groupChildLayout3]} />
        <View style={[styles.groupChildPosition8, styles.groupChildLayout1]} />
        <View
          style={[
            styles.groupChild20,
            styles.groupChildPosition10,
            styles.groupChildPosition14,
          ]}
        />
        <View
          style={[
            styles.groupChild21,
            styles.groupChildPosition9,
            styles.groupChildPosition14,
          ]}
        />
        <View
          style={[styles.groupChildPosition8, styles.groupChildPosition13]}
        />
        <View style={[styles.groupChild23, styles.groupChildPosition10]} />
        <View style={[styles.groupChild24, styles.groupChildPosition8]} />
        <Image
          style={styles.maskGroup295}
          resizeMode="cover"
          source={require("../assets/mask-group-2951.png")}
        />
        <Text style={[styles.hello6, styles.helloTypo2, styles.helloTypo3]}>
          <Text style={styles.removeCarbon}>Woodland Restoration,</Text>
          <Text style={styles.removeCarbon}>Devon</Text>
        </Text>
        <Text
          style={[styles.culmMoorNatureReserveInDe, styles.projectPosition]}
        >
          Culm Moor Nature Reserve in Devon, UK shows how local actions can
          contribute to global targets to tackle biodiversity loss and
          atmospheric carbon removal The project pays close attention to
          creating a resilient woodland forest that will support a diversity of
          plant and animal life, while increasing local awareness of
          biodiversity.
        </Text>
        <Text style={[styles.employment1, styles.employment1Typo]}>
          employment
        </Text>
        <Text style={[styles.airQuality1, styles.airQuality1Typo]}>
          air quality
        </Text>
        <Text style={[styles.pollination1, styles.soilHealth1Typo]}>
          pollination
        </Text>
        <Text style={[styles.hello7, styles.helloTypo1]}>
          <Text style={styles.removeCarbon}>
            <Text style={styles.text1}>£6</Text>
          </Text>
          <Text style={styles.removeCarbon}>
            <Text style={styles.tree1}>/ Tree</Text>
          </Text>
        </Text>
        <Text
          style={[
            styles.connectivity,
            styles.employment1Typo,
            styles.employmentLayout,
          ]}
        >
          Connectivity
        </Text>
        <Text
          style={[
            styles.increaseBiodiversity1,
            styles.airQuality1Typo,
            styles.increaseLayout,
          ]}
        >
          increase biodiversity
        </Text>
        <Text
          style={[
            styles.soilHealth1,
            styles.soilHealth1Typo,
            styles.soilPosition,
          ]}
        >
          soil health
        </Text>
        <Text style={[styles.erosionControl2, styles.employment1Typo]}>
          erosion control
        </Text>
        <Text
          style={[
            styles.habitatCreation,
            styles.soilHealth1Typo,
            styles.communityGroupsPosition,
          ]}
        >
          habitat creation
        </Text>
        <Text
          style={[
            styles.coBenefits1,
            styles.benefitsTypo,
            styles.benefitsTypo1,
          ]}
        >
          Co-benefits
        </Text>
        <Pressable
          style={[styles.groupContainer, styles.groupParentPosition]}
          onPress={() => navigation.navigate("Carbon2")}
        >
          <View
            style={[
              styles.component20875,
              styles.text18Position,
              styles.maskGroup236Position,
            ]}
          >
            <View style={[styles.groupChild, styles.historyPosition]} />
            <View style={[styles.maskGroup236, styles.maskGroup236Position]} />
          </View>
          <Text style={[styles.hello5, styles.helloTypo2, styles.helloTypo4]}>
            Add To Cart
          </Text>
        </Pressable>
      </View>
      <View style={[styles.rectangleParent2, styles.mt36, styles.ml1]}>
        <View style={styles.groupItem} />
        <View style={[styles.groupChild27, styles.groupChildPosition7]} />
        <View style={[styles.groupChild28, styles.groupChildPosition6]} />
        <View style={[styles.groupChild29, styles.groupChildLayout2]} />
        <View style={[styles.groupChild30, styles.groupChildLayout2]} />
        <View
          style={[
            styles.groupChild31,
            styles.groupChildPosition7,
            styles.groupChildPosition11,
          ]}
        />
        <View style={[styles.groupChild32, styles.groupChildPosition6]} />
        <View
          style={[
            styles.groupChild33,
            styles.groupChild33Layout,
            styles.groupChildLayout2,
          ]}
        />
        <View style={[styles.groupChild34, styles.groupChildLayout2]} />
        <View style={[styles.groupChild35, styles.groupChild35Position]} />
        <Image
          style={styles.maskGroup295}
          resizeMode="cover"
          source={require("../assets/group-295.png")}
        />
        <Text style={[styles.hello9, styles.helloTypo2, styles.helloTypo3]}>
          <Text style={styles.removeCarbon}>Drylands Protection, Kasigau</Text>
          <Text style={styles.removeCarbon}>Wildlife Corridor</Text>
        </Text>
        <Text
          style={[styles.theKasigauCorridorProjectI, styles.projectPosition]}
        >
          The Kasigau Corridor project is a REDD+ project based in Rukinga,
          Kenya. It protects an expanse of over 200,000 hectares of dryland
          Acacia-Commiphora forest home to over 2,000 elephants.
        </Text>
        <Text style={[styles.school, styles.schoolPosition]}>school</Text>
        <Text style={[styles.educationInvestment, styles.employment2Typo]}>
          education investment
        </Text>
        <Text style={[styles.endangeredSpecies, styles.training1Typo]}>
          endangered species
        </Text>
        <Text style={[styles.erosionControl3, styles.erosionControl3Typo]}>
          erosion control
        </Text>
        <Text style={[styles.hello10, styles.helloTypo]}>
          <Text style={styles.removeCarbon}>
            <Text style={styles.text1}>£19</Text>
          </Text>
          <Text style={styles.removeCarbon}>
            <Text style={styles.tree1}>/ Tonn</Text>e
          </Text>
        </Text>
        <Text style={[styles.waterPosition, styles.schoolPosition]}>
          water Security
        </Text>
        <Text style={[styles.employment2, styles.employment2Typo]}>
          employment
        </Text>
        <Text style={[styles.connectivity1, styles.training1Typo]}>
          connectivity
        </Text>
        <Text
          style={[
            styles.communityGroups1,
            styles.communityGroups1Layout,
            styles.erosionControl3Typo,
          ]}
        >
          community groups
        </Text>
        <Text style={[styles.training1, styles.training1Typo]}>training</Text>
        <View
          style={[styles.groupChildPosition5, styles.groupChildPosition7]}
        />
        <Text style={[styles.womenEmpowered1, styles.schoolPosition]}>
          women empowered
        </Text>
        <Text
          style={[
            styles.coBenefits2,
            styles.benefitsTypo,
            styles.benefitsTypo1,
          ]}
        >
          Co-benefits
        </Text>
        <Pressable
          style={[styles.groupPressable, styles.groupParentPosition]}
          onPress={() => navigation.navigate("Carbon2")}
        >
          <View
            style={[
              styles.component20875,
              styles.text18Position,
              styles.maskGroup236Position,
            ]}
          >
            <View style={[styles.groupChild, styles.historyPosition]} />
            <View style={[styles.maskGroup236, styles.maskGroup236Position]} />
          </View>
          <Text style={[styles.hello5, styles.helloTypo2, styles.helloTypo4]}>
            Add To Cart
          </Text>
        </Pressable>
      </View>
      <View style={[styles.rectangleParent4, styles.mt36, styles.ml1]}>
        <View style={styles.groupItem} />
        <View style={[styles.groupChild39, styles.groupChildPosition4]} />
        <View style={[styles.groupChild40, styles.groupChildPosition3]} />
        <View style={[styles.groupChild41, styles.groupChildPosition2]} />
        <View style={[styles.groupChild42, styles.groupChildPosition1]} />
        <View style={[styles.groupChild43, styles.groupChildLayout2]} />
        <View style={[styles.groupChild44, styles.groupChild44Layout]} />
        <View
          style={[
            styles.groupChild45,
            styles.groupChildPosition4,
            styles.groupChildPosition11,
          ]}
        />
        <View
          style={[
            styles.groupChild46,
            styles.groupChildPosition3,
            styles.groupChildPosition12,
          ]}
        />
        <View style={[styles.groupChild47, styles.groupChildPosition2]} />
        <View
          style={[
            styles.groupChild48,
            styles.groupChildPosition1,
            styles.groupChildPosition14,
          ]}
        />
        <View style={[styles.groupChild49, styles.groupChildPosition3]} />
        <Image
          style={styles.maskGroup295}
          resizeMode="cover"
          source={require("../assets/group-2957.png")}
        />
        <Text style={[styles.hello12, styles.helloTypo2, styles.helloTypo3]}>
          <Text style={styles.removeCarbon}>Tropical Forest Protection,</Text>
          <Text style={styles.removeCarbon}>{`Keo Seima `}</Text>
        </Text>
        <Text style={[styles.aReddProjectWithAFocusO, styles.projectPosition]}>
          A REDD+ project with a focus on reducing high deforestation rates in
          eastern Cambodia by helping secure land rights for the indigenous
          Bunong in the area. The project began in 2010 and impacts more than
          20,000 people.
        </Text>
        <Text style={[styles.school1, styles.school1Position]}>school</Text>
        <Text style={[styles.landRights, styles.training2Position]}>
          land rights
        </Text>
        <Text style={[styles.endangeredSpecies1, styles.culturalSpacesTypo]}>
          endangered species
        </Text>
        <Text style={[styles.erosionControl4, styles.erosionControl4Typo]}>
          erosion control
        </Text>
        <Text
          style={[styles.sustainableIncome1, styles.sustainableIncome1Typo]}
        >
          sustainable income
        </Text>
        <Text
          style={[styles.inclusiveGovernance, styles.sustainableIncome1Typo]}
        >
          inclusive governance
        </Text>
        <Text style={[styles.hello13, styles.helloTypo]}>
          <Text style={styles.removeCarbon}>
            <Text style={styles.text1}>£14</Text>
          </Text>
          <Text style={styles.removeCarbon}>
            <Text style={styles.tree1}>/ Tonn</Text>e
          </Text>
        </Text>
        <Text style={[styles.school1Position, styles.waterPosition]}>
          water Security
        </Text>
        <Text
          style={[
            styles.biodiversityProtection,
            styles.habitatCreationFramePosition,
            styles.training2Position,
          ]}
        >
          biodiversity protection
        </Text>
        <Text style={[styles.culturalSpaces, styles.culturalSpacesTypo]}>
          cultural spaces
        </Text>
        <Text
          style={[
            styles.climateRegulation,
            styles.erosionControl4Typo,
            styles.communityGroups1Layout,
          ]}
        >
          climate regulation
        </Text>
        <Text style={[styles.training2, styles.training2Position]}>
          training
        </Text>
        <View
          style={[styles.groupChildPosition4, styles.groupChildPosition5]}
        />
        <Text style={[styles.healthInsurance, styles.school1Position]}>
          health insurance
        </Text>
        <Text
          style={[
            styles.coBenefits3,
            styles.benefitsTypo,
            styles.benefitsTypo1,
          ]}
        >
          Co-benefits
        </Text>
        <Pressable
          style={[styles.groupParent1, styles.groupParentPosition]}
          onPress={() => navigation.navigate("Carbon2")}
        >
          <View
            style={[
              styles.component20875,
              styles.text18Position,
              styles.maskGroup236Position,
            ]}
          >
            <View style={[styles.groupChild, styles.historyPosition]} />
            <View style={[styles.maskGroup236, styles.maskGroup236Position]} />
          </View>
          <Text style={[styles.hello5, styles.helloTypo2, styles.helloTypo4]}>
            Add To Cart
          </Text>
        </Pressable>
      </View>
      <View style={[styles.rectangleParent6, styles.mt36, styles.ml1]}>
        <View style={styles.groupItem} />
        <Image
          style={styles.maskGroup295}
          resizeMode="cover"
          source={require("../assets/group-2952.png")}
        />
        <Text style={[styles.hello15, styles.helloTypo2, styles.helloTypo3]}>
          <Text style={styles.removeCarbon}>Mangrove Planting,</Text>
          <Text style={styles.removeCarbon}>Maroalika</Text>
        </Text>
        <Text
          style={[styles.thisTrailBlazingProjectRun, styles.projectPosition]}
        >
          This trail-blazing project run by Eden Reforestation Projects has
          reforestation and poverty alleviation at its heart. Mangroves pack
          some punch when it comes to carbon sequestration but also provide a
          whole load of other natural benefits such as storm surge protection
          and vital habitat for many species.
        </Text>
        <View style={[styles.schoolWrapper, styles.wrapperPosition9]}>
          <Text style={[styles.school2, styles.trainingPosition1]}>school</Text>
        </View>
        <View style={[styles.disasterDefenceWrapper, styles.wrapperPosition8]}>
          <Text
            style={[styles.disasterDefence, styles.disasterDefencePosition]}
          >{`disaster defence `}</Text>
        </View>
        <View
          style={[styles.endangeredSpeciesWrapper, styles.wrapperPosition7]}
        >
          <Text style={[styles.endangeredSpecies2, styles.trainingPosition1]}>
            endangered species
          </Text>
        </View>
        <View style={[styles.womenEmpoweredWrapper, styles.wrapperPosition6]}>
          <Text style={[styles.womenEmpowered2, styles.womenPosition]}>
            women empowered
          </Text>
        </View>
        <View
          style={[styles.sustainableIncomeWrapper, styles.wrapperPosition7]}
        >
          <Text style={[styles.sustainableIncome2, styles.trainingPosition1]}>
            sustainable income
          </Text>
        </View>
        <View
          style={[
            styles.oceanAcidificationControlWrapper,
            styles.wrapperPosition5,
            styles.healthInsuranceContainerPosition,
          ]}
        >
          <Text
            style={[styles.oceanAcidificationControl, styles.trainingPosition1]}
          >
            ocean acidification control
          </Text>
        </View>
        <Text style={[styles.hello16, styles.helloTypo1, styles.helloPosition]}>
          <Text style={styles.removeCarbon}>
            <Text style={styles.text1}>£0.17</Text>
          </Text>
          <Text style={styles.removeCarbon}>
            <Text style={styles.tree1}>/ Tree</Text>
          </Text>
          <Text style={styles.tree1} />
        </Text>
        <View style={[styles.employmentWrapper, styles.wrapperPosition9]}>
          <Text style={[styles.employment3, styles.trainingPosition1]}>
            employment
          </Text>
        </View>
        <View
          style={[
            styles.biodiversityProtectionWrapper,
            styles.fishNurseriesContainerPosition,
            styles.wrapperPosition8,
          ]}
        >
          <Text
            style={[styles.biodiversityProtection1, styles.trainingPosition1]}
          >
            biodiversity protection
          </Text>
        </View>
        <View style={[styles.fishNurseriesWrapper, styles.wrapperPosition4]}>
          <Text style={[styles.fishNurseries, styles.trainingPosition1]}>
            fish nurseries
          </Text>
        </View>
        <View
          style={[
            styles.habitatCreationWrapper,
            styles.containerPosition4,
            styles.wrapperPosition4,
          ]}
        >
          <Text style={[styles.habitatCreation1, styles.trainingPosition1]}>
            habitat creation
          </Text>
        </View>
        <View style={[styles.foodSecurityWrapper, styles.wrapperPosition6]}>
          <Text style={[styles.foodSecurity1, styles.foodPosition]}>
            food security
          </Text>
        </View>
        <View style={[styles.trainingWrapper, styles.wrapperPosition5]}>
          <Text style={[styles.training3, styles.trainingPosition1]}>
            training
          </Text>
        </View>
        <Text
          style={[
            styles.coBenefits4,
            styles.benefitsTypo,
            styles.benefitsTypo1,
          ]}
        >
          Co-benefits
        </Text>
        <View style={[styles.healthInsuranceWrapper, styles.wrapperPosition9]}>
          <Text
            style={[styles.healthInsurance1, styles.healthInsurance1Position]}
          >
            health insurance
          </Text>
        </View>
        <Pressable
          style={[styles.groupParent2, styles.groupParentPosition]}
          onPress={() => navigation.navigate("Carbon2")}
        >
          <View
            style={[
              styles.component20875,
              styles.text18Position,
              styles.maskGroup236Position,
            ]}
          >
            <View style={[styles.groupChild, styles.historyPosition]} />
            <View style={[styles.maskGroup236, styles.maskGroup236Position]} />
          </View>
          <Text style={[styles.hello5, styles.helloTypo2, styles.helloTypo4]}>
            Add To Cart
          </Text>
        </Pressable>
      </View>
      <View style={[styles.rectangleParent8, styles.mt36, styles.ml1]}>
        <View style={styles.groupItem} />
        <Image
          style={styles.maskGroup295}
          resizeMode="cover"
          source={require("../assets/group-2953.png")}
        />
        <Text style={[styles.hello18, styles.helloTypo2, styles.helloTypo3]}>
          <Text style={styles.removeCarbon}>Degraded Forest</Text>
          <Text style={styles.removeCarbon}>Restoration, Mijares</Text>
        </Text>
        <Text style={[styles.aPlanToRestoreA200Hectar, styles.projectPosition]}>
          A plan to restore a 200 hectare burned forest in Spain to improve
          ecosystem resilience, protect species and benefit local communities.
        </Text>
        <View style={[styles.soilHealthWrapper, styles.groupChildLayout2]}>
          <Text style={[styles.soilHealth2, styles.trainingPosition1]}>
            soil health
          </Text>
        </View>
        <View
          style={[
            styles.disasterDefenceContainer,
            styles.containerPosition3,
            styles.containerPosition4,
          ]}
        >
          <Text
            style={[styles.disasterDefence, styles.disasterDefencePosition]}
          >{`disaster defence `}</Text>
        </View>
        <View
          style={[styles.endangeredSpeciesContainer, styles.containerPosition2]}
        >
          <Text style={[styles.endangeredSpecies2, styles.trainingPosition1]}>
            endangered species
          </Text>
        </View>
        <View
          style={[styles.climateRegulationWrapper, styles.wrapperPosition3]}
        >
          <Text style={[styles.womenEmpowered2, styles.womenPosition]}>
            climate regulation
          </Text>
        </View>
        <View style={[styles.naturalAccessWrapper, styles.wrapperPosition2]}>
          <Text style={[styles.naturalAccess, styles.naturalAccessPosition]}>
            natural access
          </Text>
        </View>
        <Text style={[styles.hello19, styles.helloTypo1]}>
          <Text style={styles.removeCarbon}>
            <Text style={styles.text1}>£6.1</Text>
          </Text>
          <Text style={styles.removeCarbon}>
            <Text style={styles.tree1}>/ Tree</Text>
          </Text>
        </Text>
        <View style={[styles.employmentContainer, styles.containerPosition3]}>
          <Text style={[styles.employment3, styles.trainingPosition1]}>
            employment
          </Text>
        </View>
        <View
          style={[styles.increasesBiodiversityWrapper, styles.wrapperPosition2]}
        >
          <Text
            style={[styles.biodiversityProtection1, styles.trainingPosition1]}
          >
            Increases biodiversity
          </Text>
        </View>
        <View style={[styles.waterSecurityWrapper, styles.groupChildLayout2]}>
          <Text style={[styles.fishNurseries, styles.trainingPosition1]}>
            water security
          </Text>
        </View>
        <View
          style={[styles.habitatCreationContainer, styles.containerPosition2]}
        >
          <Text style={[styles.habitatCreation1, styles.trainingPosition1]}>
            habitat creation
          </Text>
        </View>
        <View
          style={[styles.eroisionControlWrapper, styles.groupChild35Position]}
        >
          <Text style={[styles.eroisionControl, styles.naturalAccessPosition]}>
            eroision control
          </Text>
        </View>
        <Text
          style={[
            styles.coBenefits5,
            styles.benefitsTypo,
            styles.benefitsTypo1,
          ]}
        >
          Co-benefits
        </Text>
        <View style={[styles.airQualityWrapper, styles.wrapperPosition3]}>
          <Text style={[styles.airQuality2, styles.trainingPosition1]}>
            air quality
          </Text>
        </View>
        <View style={[styles.component21421, styles.groupParentPosition]}>
          <View
            style={[
              styles.component20875,
              styles.text18Position,
              styles.maskGroup236Position,
            ]}
          >
            <View style={[styles.groupChild, styles.historyPosition]} />
            <View style={[styles.maskGroup236, styles.maskGroup236Position]} />
          </View>
          <Text style={[styles.hello5, styles.helloTypo2, styles.helloTypo4]}>
            Add To Cart
          </Text>
        </View>
      </View>
      <View style={[styles.rectangleParent10, styles.mt36, styles.ml1]}>
        <View style={styles.groupItem} />
        <Image
          style={styles.maskGroup295}
          resizeMode="cover"
          source={require("../assets/group-2954.png")}
        />
        <Text style={[styles.hello21, styles.helloTypo2, styles.helloTypo3]}>
          <Text style={styles.removeCarbon}>Peatland Protection,</Text>
          <Text style={styles.removeCarbon}>Rimba Raya</Text>
        </Text>
        <Text
          style={[styles.theRimbaRayaBiodiversityRe, styles.projectPosition]}
        >
          The Rimba Raya Biodiversity Reserve Project is protecting one of the
          most highly endangered ecosystems in the world. Without this project,
          the carbon-rich, peatland forest would have been turned into palm oil
          estates, emitting over 100 million tonnes of carbon into the
          atmosphere. Instead, the project is protecting the land and working
          with local communities to achieve 12 of the 17 SDGs
        </Text>
        <View
          style={[
            styles.connectivityWrapper,
            styles.wrapperPosition1,
            styles.groupChild33Layout,
          ]}
        >
          <Text style={[styles.connectivity2, styles.trainingPosition1]}>
            connectivity
          </Text>
        </View>
        <View
          style={[
            styles.disasterDefenceFrame,
            styles.disasterDefenceFramePosition,
          ]}
        >
          <Text
            style={[styles.disasterDefence, styles.disasterDefencePosition]}
          >{`disaster defence `}</Text>
        </View>
        <View
          style={[styles.educationInvestmentWrapper, styles.groupChildLayout2]}
        >
          <Text style={[styles.endangeredSpecies2, styles.trainingPosition1]}>
            education investment
          </Text>
        </View>
        <View
          style={[styles.healthServicesWrapper, styles.employmentFramePosition]}
        >
          <Text style={[styles.healthServices, styles.trainingPosition1]}>
            health services
          </Text>
        </View>
        <View
          style={[
            styles.climateRegulationContainer,
            styles.healthcareAccessWrapperLayout,
          ]}
        >
          <Text style={[styles.womenEmpowered2, styles.womenPosition]}>
            climate regulation
          </Text>
        </View>
        <View
          style={[
            styles.speciesReintroductionWrapper,
            styles.groupChild44Layout,
          ]}
        >
          <Text
            style={[styles.speciesReintroduction, styles.trainingPosition1]}
          >
            species reintroduction
          </Text>
        </View>
        <View
          style={[
            styles.temperatureModerationWrapper,
            styles.groupChildPosition8,
          ]}
        >
          <Text
            style={[styles.temperatureModeration, styles.trainingPosition1]}
          >
            temperature moderation
          </Text>
        </View>
        <View
          style={[
            styles.healthcareAccessWrapper,
            styles.healthcareAccessWrapperLayout,
          ]}
        >
          <Text style={[styles.womenEmpowered2, styles.womenPosition]}>
            healthcare access
          </Text>
        </View>
        <View
          style={[styles.sustainableIncomeContainer, styles.groupChildLayout2]}
        >
          <Text style={[styles.womenEmpowered2, styles.womenPosition]}>
            sustainable income
          </Text>
        </View>
        <View
          style={[
            styles.waterFlowRegulationWrapper,
            styles.groupChildPosition8,
          ]}
        >
          <Text
            style={[
              styles.waterFlowRegulation1,
              styles.healthInsurance1Position,
            ]}
          >
            water flow regulation
          </Text>
        </View>
        <View style={[styles.communityGroupsWrapper, styles.wrapperPosition1]}>
          <Text style={[styles.communityGroups2, styles.trainingPosition1]}>
            community groups
          </Text>
        </View>
        <Text style={[styles.hello22, styles.helloTypo1]}>
          <Text style={styles.removeCarbon}>
            <Text style={styles.text1}>£12.03</Text>
          </Text>
          <Text style={styles.removeCarbon}>
            <Text style={styles.tree1}>/ Tonn</Text>e
          </Text>
        </Text>
        <View style={[styles.employmentFrame, styles.employmentFramePosition]}>
          <Text style={[styles.employment3, styles.trainingPosition1]}>
            employment
          </Text>
        </View>
        <View
          style={[
            styles.biodiversityProtectionContainer,
            styles.containerPosition1,
          ]}
        >
          <Text
            style={[styles.biodiversityProtection1, styles.trainingPosition1]}
          >
            biodiversity protection
          </Text>
        </View>
        <View
          style={[
            styles.foodSecurityContainer,
            styles.containerPosition,
            styles.groupChildLayout2,
          ]}
        >
          <Text style={[styles.foodSecurity2, styles.foodPosition]}>
            food security
          </Text>
        </View>
        <View
          style={[
            styles.womenEmpoweredContainer,
            styles.containerPosition,
            styles.groupChildLayout2,
          ]}
        >
          <Text style={[styles.womenEmpowered3, styles.womenPosition]}>
            women empowered
          </Text>
        </View>
        <View style={[styles.endangeredSpeciesFrame, styles.groupChildLayout2]}>
          <Text
            style={[styles.biodiversityProtection1, styles.trainingPosition1]}
          >
            endangered species
          </Text>
        </View>
        <View style={[styles.waterQualityWrapper, styles.wrapperPosition]}>
          <Text style={[styles.fishNurseries, styles.trainingPosition1]}>
            water quality
          </Text>
        </View>
        <View
          style={[
            styles.fishNurseriesContainer,
            styles.disasterDefenceFramePosition,
            styles.fishNurseriesContainerPosition,
          ]}
        >
          <Text style={[styles.habitatCreation1, styles.trainingPosition1]}>
            fish nurseries
          </Text>
        </View>
        <View
          style={[
            styles.habitatCreationFrame,
            styles.wrapperPosition,
            styles.habitatCreationFramePosition,
          ]}
        >
          <Text style={[styles.habitatCreation1, styles.trainingPosition1]}>
            habitat creation
          </Text>
        </View>
        <View style={[styles.floodControlWrapper, styles.wrapperPosition]}>
          <Text style={[styles.floodControl1, styles.trainingPosition1]}>
            flood control
          </Text>
        </View>
        <View style={[styles.eroisionPosition, styles.containerPosition1]}>
          <Text style={[styles.eroisionControl, styles.naturalAccessPosition]}>
            eroision control
          </Text>
        </View>
        <View style={[styles.trainingPosition, styles.containerPosition]}>
          <Text style={[styles.training4, styles.trainingPosition1]}>
            training
          </Text>
        </View>
        <Text
          style={[
            styles.coBenefits6,
            styles.benefitsTypo,
            styles.benefitsTypo1,
          ]}
        >
          Co-benefits
        </Text>
        <Pressable
          style={[styles.groupParent3, styles.groupParentPosition]}
          onPress={() => navigation.navigate("Carbon2")}
        >
          <View
            style={[
              styles.component20875,
              styles.text18Position,
              styles.maskGroup236Position,
            ]}
          >
            <View style={[styles.groupChild, styles.historyPosition]} />
            <View style={[styles.maskGroup236, styles.maskGroup236Position]} />
          </View>
          <Text style={[styles.hello5, styles.helloTypo2, styles.helloTypo4]}>
            Add To Cart
          </Text>
        </Pressable>
      </View>
      <View style={[styles.rectangleParent12, styles.mt36, styles.ml1]}>
        <View style={styles.groupItem} />
        <Image
          style={styles.maskGroup295}
          resizeMode="cover"
          source={require("../assets/group-2955.png")}
        />
        <Text style={[styles.hello24, styles.helloTypo2, styles.helloTypo3]}>
          <Text style={styles.removeCarbon}>Tropical Forest Protection,</Text>
          <Text style={styles.removeCarbon}>{`Mai Ndombe `}</Text>
        </Text>
        <Text
          style={[styles.thisProjectWasLaunchedIn2, styles.projectPosition]}
        >
          This project was launched in 2011 and is run by Wildlife Works. It is
          pushing the boundaries of what a REDD+ project can achieve, and is a
          world-class example.
        </Text>
        <View
          style={[
            styles.educationInvestmentContainer,
            styles.employmentWrapper1Position,
            styles.containerPosition4,
          ]}
        >
          <Text style={[styles.endangeredSpecies2, styles.trainingPosition1]}>
            education investment
          </Text>
        </View>
        <View
          style={[styles.employmentWrapper1, styles.employmentWrapper1Position]}
        >
          <Text style={[styles.employment6, styles.trainingPosition1]}>
            employment
          </Text>
        </View>
        <View style={[styles.schoolsWrapper, styles.healthContainerPosition]}>
          <Text style={[styles.schools, styles.trainingPosition1]}>
            schools
          </Text>
        </View>
        <View
          style={[
            styles.healthInsuranceContainer,
            styles.healthContainerPosition,
            styles.healthInsuranceContainerPosition,
          ]}
        >
          <Text
            style={[styles.healthInsurance2, styles.disasterDefencePosition]}
          >
            health insurance
          </Text>
        </View>
        <Text style={[styles.hello25, styles.helloTypo]}>
          <Text style={styles.removeCarbon}>
            <Text style={styles.text1}>£19</Text>
          </Text>
          <Text style={styles.removeCarbon}>
            <Text style={styles.tree1}>/ Tonne</Text>
          </Text>
        </Text>
        <View
          style={[
            styles.healthServicesContainer,
            styles.healthContainerPosition,
          ]}
        >
          <Text style={[styles.employment3, styles.trainingPosition1]}>
            health services
          </Text>
        </View>
        <View
          style={[styles.biodiversityProtectionFrame, styles.framePosition]}
        >
          <Text
            style={[styles.biodiversityProtection1, styles.trainingPosition1]}
          >
            biodiversity protection
          </Text>
        </View>
        <View style={[styles.foodSecurityFrame, styles.groupChildLayout2]}>
          <Text style={[styles.foodSecurity2, styles.foodPosition]}>
            food security
          </Text>
        </View>
        <View style={[styles.womenEmpoweredFrame, styles.groupChildLayout2]}>
          <Text style={[styles.womenEmpowered3, styles.womenPosition]}>
            women empowered
          </Text>
        </View>
        <View style={[styles.endangeredSpeciesWrapper1, styles.wrapperLayout]}>
          <Text
            style={[styles.biodiversityProtection1, styles.trainingPosition1]}
          >
            endangered species
          </Text>
        </View>
        <View style={[styles.inclusiveGovernanceWrapper, styles.wrapperLayout]}>
          <Text
            style={[styles.biodiversityProtection1, styles.trainingPosition1]}
          >
            inclusive governance
          </Text>
        </View>
        <View style={[styles.framePosition, styles.eroisionPosition]}>
          <Text style={[styles.eroisionControl, styles.naturalAccessPosition]}>
            eroision control
          </Text>
        </View>
        <View style={[styles.trainingFrame, styles.trainingPosition]}>
          <Text style={[styles.training4, styles.trainingPosition1]}>
            training
          </Text>
        </View>
        <Text
          style={[
            styles.coBenefits7,
            styles.benefitsTypo,
            styles.benefitsTypo1,
          ]}
        >
          Co-benefits
        </Text>
        <View style={[styles.component21423, styles.groupParentPosition]}>
          <View
            style={[
              styles.component20875,
              styles.text18Position,
              styles.maskGroup236Position,
            ]}
          >
            <View style={[styles.groupChild, styles.historyPosition]} />
            <View style={[styles.maskGroup236, styles.maskGroup236Position]} />
          </View>
          <Text style={[styles.hello5, styles.helloTypo2, styles.helloTypo4]}>
            Add To Cart
          </Text>
        </View>
      </View>
      <View
        style={[
          styles.iconFeatherShoppingCartParent,
          styles.mt_854,
          styles.ml1,
          styles.parentShadowBox,
        ]}
      >
        <Image
          style={styles.iconFeatherShoppingCart}
          resizeMode="cover"
          source={require("../assets/icon-feathershoppingcart.png")}
        />
        <Text style={[styles.hello27, styles.text17Typo]}>
          Swipe to Go to Cart
        </Text>
        <View style={styles.rectangleParent14}>
          <View style={[styles.groupChild65, styles.groupChildPosition]} />
          <Text style={[styles.text17, styles.text17Typo]}>1</Text>
        </View>
      </View>
      <Image
        style={[styles.twoTreesIcon, styles.mt45, styles.ml165]}
        resizeMode="cover"
        source={require("../assets/twotrees1.png")}
      />
      <Pressable
        style={[styles.component20875Parent, styles.mt53, styles.ml1]}
        onPress={() => navigation.navigate("ChooseCardsStandard5")}
      >
        <View
          style={[
            styles.component20875,
            styles.text18Position,
            styles.maskGroup236Position,
          ]}
        >
          <View style={[styles.rectangleParent, styles.maskGroup236Position]}>
            <View style={[styles.groupChild, styles.historyPosition]} />
            <View style={[styles.maskGroup236, styles.maskGroup236Position]} />
          </View>
        </View>
        <Text style={[styles.hello28, styles.helloTypo4, styles.helloTypo5]}>
          Visit Your virtual forest
        </Text>
      </Pressable>
      <View style={[styles.component21211, styles.mt_7489, styles.mr15]}>
        <Pressable
          style={[styles.history1, styles.historyPosition]}
          onPress={() => navigation.navigate("Account3")}
        >
          <Text style={[styles.account, styles.accountTypo]}>Account</Text>
        </Pressable>
        <Pressable
          style={styles.history2}
          onPress={() => navigation.navigate("Analytics")}
        >
          <Text style={[styles.account, styles.accountTypo]}>Analysis</Text>
        </Pressable>
        <Text style={[styles.history3, styles.accountTypo]}>Carbon</Text>
        <Pressable
          style={styles.history4}
          onPress={() => navigation.navigate("Settings")}
        >
          <Text style={[styles.account, styles.accountTypo]}>Profile</Text>
        </Pressable>
      </View>
      <View
        style={[
          styles.helloParent,
          styles.mt57,
          styles.ml2,
          styles.parentShadowBox,
        ]}
      >
        <Text style={[styles.hello29, styles.text18Typo]}>
          Swipe to Go to Cart
        </Text>
        <View style={[styles.rectangleParent16, styles.text18Position]}>
          <View style={[styles.groupChild67, styles.groupChildPosition]} />
          <Text
            style={[styles.text18, styles.text18Typo, styles.text18Position]}
          >
            1
          </Text>
        </View>
        <Image
          style={styles.iconFeatherShoppingCart1}
          resizeMode="cover"
          source={require("../assets/icon-feathershoppingcart1.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mt41: {
    marginTop: GlobalStyles.Margin.margin_19xl,
  },
  mr108: {
    marginRight: GlobalStyles.Margin.margin_44xl,
  },
  mt31: {
    marginTop: GlobalStyles.Margin.margin_9xl,
  },
  mt_272: {
    marginTop: GlobalStyles.Margin.margin_55xs,
  },
  ml100: {
    marginLeft: GlobalStyles.Margin.margin_43xl,
  },
  mt32: {
    marginTop: GlobalStyles.Margin.margin_11xl,
  },
  ml1: {
    marginLeft: GlobalStyles.Margin.margin_24xs,
  },
  mt258: {
    marginTop: GlobalStyles.Margin.margin_56xl,
  },
  mt23: {
    marginTop: GlobalStyles.Margin.margin_lg,
  },
  mt15: {
    marginTop: GlobalStyles.Margin.margin_7xs,
  },
  mt42: {
    marginTop: GlobalStyles.Margin.margin_20xl,
  },
  mt_77: {
    marginTop: GlobalStyles.Margin.margin_49xs,
  },
  mr213: {
    marginRight: GlobalStyles.Margin.margin_53xl,
  },
  mt21: {
    marginTop: GlobalStyles.Margin.margin_sm,
  },
  mt885: {
    marginTop: GlobalStyles.Margin.margin_63xl,
  },
  mt36: {
    marginTop: GlobalStyles.Margin.margin_14xl,
  },
  mt_854: {
    marginTop: GlobalStyles.Margin.margin_62xs,
  },
  mt45: {
    marginTop: GlobalStyles.Margin.margin_23xl,
  },
  ml165: {
    marginLeft: GlobalStyles.Margin.margin_51xl,
  },
  mt53: {
    marginTop: GlobalStyles.Margin.margin_29xl,
  },
  mt_7489: {
    marginTop: GlobalStyles.Margin.margin_64xs,
  },
  mr15: {
    marginRight: GlobalStyles.Margin.margin_7xs,
  },
  mt57: {
    marginTop: GlobalStyles.Margin.margin_31xl,
  },
  ml2: {
    marginLeft: GlobalStyles.Margin.margin_23xs,
  },
  benefitsTypo1: {
    textAlign: "left",
    fontWeight: "700",
  },
  helloTypo6: {
    fontFamily: GlobalStyles.FontFamily.typoGrotesk,
    textAlign: "left",
    color: GlobalStyles.Color.indigo,
  },
  text18Position: {
    bottom: 0,
    left: 0,
  },
  maskGroup236Position: {
    right: 0,
    position: "absolute",
  },
  historyPosition: {
    left: "0%",
    position: "absolute",
  },
  helloTypo4: {
    color: GlobalStyles.Color.black,
    textTransform: "uppercase",
    fontSize: GlobalStyles.FontSize.size_base,
  },
  helloTypo5: {
    lineHeight: 17,
    color: GlobalStyles.Color.black,
    textTransform: "uppercase",
    fontFamily: GlobalStyles.FontFamily.helvetica,
    position: "absolute",
    textAlign: "left",
  },
  yourTypo: {
    width: 321,
    lineHeight: 17,
    fontSize: GlobalStyles.FontSize.size_base,
    fontFamily: GlobalStyles.FontFamily.helvetica,
    textAlign: "left",
  },
  groupChildLayout3: {
    width: 94,
    left: 22,
  },
  groupChildPosition18: {
    marginTop: 197,
    backgroundColor: GlobalStyles.Color.gray_200,
    borderRadius: GlobalStyles.Border.br_3xs,
    top: "50%",
  },
  groupChild8Position: {
    marginTop: 234,
    height: 27,
    backgroundColor: GlobalStyles.Color.gray_200,
    borderRadius: GlobalStyles.Border.br_3xs,
    top: "50%",
    position: "absolute",
  },
  groupChildPosition17: {
    marginTop: 271,
    height: 27,
    backgroundColor: GlobalStyles.Color.gray_200,
    borderRadius: GlobalStyles.Border.br_3xs,
    top: "50%",
    position: "absolute",
  },
  groupChildPosition16: {
    bottom: 132,
    height: 27,
    backgroundColor: GlobalStyles.Color.gray_200,
    borderRadius: GlobalStyles.Border.br_3xs,
    position: "absolute",
  },
  groupChildPosition15: {
    bottom: 95,
    height: 27,
    backgroundColor: GlobalStyles.Color.gray_200,
    borderRadius: GlobalStyles.Border.br_3xs,
    position: "absolute",
  },
  groupChildLayout: {
    bottom: 58,
    width: 122,
    height: 27,
    backgroundColor: GlobalStyles.Color.gray_200,
    borderRadius: GlobalStyles.Border.br_3xs,
    position: "absolute",
  },
  groupChildLayout2: {
    height: 27,
    backgroundColor: GlobalStyles.Color.gray_200,
    borderRadius: GlobalStyles.Border.br_3xs,
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
    fontFamily: GlobalStyles.FontFamily.helvetica,
    position: "absolute",
    textAlign: "left",
  },
  helloTypo3: {
    left: "6.56%",
    lineHeight: 14,
    fontSize: GlobalStyles.FontSize.size_sm,
    color: GlobalStyles.Color.indigo,
    fontWeight: "700",
  },
  projectPosition: {
    width: 280,
    left: 21,
    color: GlobalStyles.Color.gray_800,
    lineHeight: 17,
    top: "50%",
    fontSize: GlobalStyles.FontSize.size_base,
    fontFamily: GlobalStyles.FontFamily.helvetica,
    position: "absolute",
    textAlign: "left",
  },
  coBenefitsPosition: {
    left: 27,
    fontSize: GlobalStyles.FontSize.size_2xs,
    width: 80,
    top: "50%",
  },
  erosionSpaceBlock: {
    marginTop: 203,
    textAlign: "center",
  },
  benefitsTypo: {
    fontSize: GlobalStyles.FontSize.size_2xs,
    color: GlobalStyles.Color.gray_800,
    fontFamily: GlobalStyles.FontFamily.helvetica,
    position: "absolute",
  },
  airQualityPosition: {
    marginTop: 240,
    fontSize: GlobalStyles.FontSize.size_2xs,
    color: GlobalStyles.Color.gray_800,
    top: "50%",
    textAlign: "center",
    fontFamily: GlobalStyles.FontFamily.helvetica,
    position: "absolute",
  },
  soilHealthPosition: {
    marginTop: 277,
    fontSize: GlobalStyles.FontSize.size_2xs,
    color: GlobalStyles.Color.gray_800,
    top: "50%",
    textAlign: "center",
    fontFamily: GlobalStyles.FontFamily.helvetica,
    position: "absolute",
  },
  floodControlTypo: {
    bottom: 139,
    fontSize: GlobalStyles.FontSize.size_2xs,
    color: GlobalStyles.Color.gray_800,
    textAlign: "center",
    fontFamily: GlobalStyles.FontFamily.helvetica,
    position: "absolute",
  },
  trainingTypo: {
    bottom: 102,
    fontSize: GlobalStyles.FontSize.size_2xs,
    color: GlobalStyles.Color.gray_800,
    textAlign: "center",
    fontFamily: GlobalStyles.FontFamily.helvetica,
    position: "absolute",
  },
  nutritiusFoodTypo: {
    left: 26,
    fontSize: GlobalStyles.FontSize.size_2xs,
    color: GlobalStyles.Color.gray_800,
    textAlign: "center",
    fontFamily: GlobalStyles.FontFamily.helvetica,
    position: "absolute",
  },
  womenEmpoweredPosition: {
    bottom: 65,
    width: 115,
  },
  helloTypo1: {
    textAlign: "right",
    color: GlobalStyles.Color.blue,
    lineHeight: 14,
    fontFamily: GlobalStyles.FontFamily.helvetica,
    position: "absolute",
    fontWeight: "700",
  },
  helloPosition: {
    left: "69.69%",
    textAlign: "right",
    color: GlobalStyles.Color.blue,
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
    backgroundColor: GlobalStyles.Color.gray_200,
    borderRadius: GlobalStyles.Border.br_3xs,
    position: "absolute",
  },
  groupChildPosition9: {
    bottom: 59,
    height: 27,
    backgroundColor: GlobalStyles.Color.gray_200,
    borderRadius: GlobalStyles.Border.br_3xs,
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
    backgroundColor: GlobalStyles.Color.gray_200,
    borderRadius: GlobalStyles.Border.br_3xs,
    position: "absolute",
  },
  employment1Typo: {
    bottom: 103,
    fontSize: GlobalStyles.FontSize.size_2xs,
    color: GlobalStyles.Color.gray_800,
    textAlign: "center",
    fontFamily: GlobalStyles.FontFamily.helvetica,
    position: "absolute",
  },
  airQuality1Typo: {
    bottom: 66,
    fontSize: GlobalStyles.FontSize.size_2xs,
    color: GlobalStyles.Color.gray_800,
    textAlign: "center",
    fontFamily: GlobalStyles.FontFamily.helvetica,
    position: "absolute",
  },
  soilHealth1Typo: {
    bottom: 29,
    fontSize: GlobalStyles.FontSize.size_2xs,
    color: GlobalStyles.Color.gray_800,
    textAlign: "center",
    fontFamily: GlobalStyles.FontFamily.helvetica,
    position: "absolute",
  },
  groupChildPosition7: {
    marginTop: 161,
    height: 27,
    backgroundColor: GlobalStyles.Color.gray_200,
    borderRadius: GlobalStyles.Border.br_3xs,
    top: "50%",
    position: "absolute",
  },
  groupChildPosition6: {
    bottom: 93,
    height: 27,
    backgroundColor: GlobalStyles.Color.gray_200,
    borderRadius: GlobalStyles.Border.br_3xs,
    position: "absolute",
  },
  groupChild33Layout: {
    width: 79,
    left: "50%",
  },
  groupChild35Position: {
    right: 24,
    bottom: 56,
    height: 27,
    backgroundColor: GlobalStyles.Color.gray_200,
    borderRadius: GlobalStyles.Border.br_3xs,
    position: "absolute",
  },
  schoolPosition: {
    marginTop: 167,
    fontSize: GlobalStyles.FontSize.size_2xs,
    color: GlobalStyles.Color.gray_800,
    top: "50%",
    textAlign: "center",
    fontFamily: GlobalStyles.FontFamily.helvetica,
    position: "absolute",
  },
  employment2Typo: {
    bottom: 100,
    fontSize: GlobalStyles.FontSize.size_2xs,
    color: GlobalStyles.Color.gray_800,
    textAlign: "center",
    fontFamily: GlobalStyles.FontFamily.helvetica,
    position: "absolute",
  },
  training1Typo: {
    bottom: 63,
    fontSize: GlobalStyles.FontSize.size_2xs,
    color: GlobalStyles.Color.gray_800,
    textAlign: "center",
    fontFamily: GlobalStyles.FontFamily.helvetica,
    position: "absolute",
  },
  erosionControl3Typo: {
    bottom: 26,
    fontSize: GlobalStyles.FontSize.size_2xs,
    color: GlobalStyles.Color.gray_800,
    textAlign: "center",
    fontFamily: GlobalStyles.FontFamily.helvetica,
    position: "absolute",
  },
  helloTypo: {
    left: "77.5%",
    textAlign: "right",
    color: GlobalStyles.Color.blue,
    lineHeight: 14,
    fontFamily: GlobalStyles.FontFamily.helvetica,
    position: "absolute",
    fontWeight: "700",
  },
  communityGroups1Layout: {
    width: 101,
    left: "50%",
  },
  groupChildPosition4: {
    marginTop: 140,
    height: 27,
    backgroundColor: GlobalStyles.Color.gray_200,
    borderRadius: GlobalStyles.Border.br_3xs,
    top: "50%",
    position: "absolute",
  },
  groupChildPosition3: {
    marginTop: 177,
    height: 27,
    backgroundColor: GlobalStyles.Color.gray_200,
    borderRadius: GlobalStyles.Border.br_3xs,
    top: "50%",
    position: "absolute",
  },
  groupChildPosition2: {
    bottom: 98,
    height: 27,
    backgroundColor: GlobalStyles.Color.gray_200,
    borderRadius: GlobalStyles.Border.br_3xs,
    position: "absolute",
  },
  groupChildPosition1: {
    bottom: 61,
    height: 27,
    backgroundColor: GlobalStyles.Color.gray_200,
    borderRadius: GlobalStyles.Border.br_3xs,
    position: "absolute",
  },
  groupChild44Layout: {
    width: 131,
    height: 27,
    backgroundColor: GlobalStyles.Color.gray_200,
    borderRadius: GlobalStyles.Border.br_3xs,
    position: "absolute",
  },
  school1Position: {
    marginTop: 146,
    fontSize: GlobalStyles.FontSize.size_2xs,
    color: GlobalStyles.Color.gray_800,
    top: "50%",
    textAlign: "center",
    fontFamily: GlobalStyles.FontFamily.helvetica,
    position: "absolute",
  },
  training2Position: {
    marginTop: 183,
    fontSize: GlobalStyles.FontSize.size_2xs,
    color: GlobalStyles.Color.gray_800,
    top: "50%",
    textAlign: "center",
    fontFamily: GlobalStyles.FontFamily.helvetica,
    position: "absolute",
  },
  culturalSpacesTypo: {
    bottom: 105,
    fontSize: GlobalStyles.FontSize.size_2xs,
    color: GlobalStyles.Color.gray_800,
    textAlign: "center",
    fontFamily: GlobalStyles.FontFamily.helvetica,
    position: "absolute",
  },
  erosionControl4Typo: {
    bottom: 68,
    fontSize: GlobalStyles.FontSize.size_2xs,
    color: GlobalStyles.Color.gray_800,
    textAlign: "center",
    fontFamily: GlobalStyles.FontFamily.helvetica,
    position: "absolute",
  },
  sustainableIncome1Typo: {
    bottom: 31,
    fontSize: GlobalStyles.FontSize.size_2xs,
    color: GlobalStyles.Color.gray_800,
    textAlign: "center",
    fontFamily: GlobalStyles.FontFamily.helvetica,
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
    backgroundColor: GlobalStyles.Color.gray_200,
    borderRadius: GlobalStyles.Border.br_3xs,
    top: "50%",
    position: "absolute",
  },
  trainingPosition1: {
    marginTop: -7.5,
    fontSize: GlobalStyles.FontSize.size_2xs,
    color: GlobalStyles.Color.gray_800,
    top: "50%",
    textAlign: "center",
    fontFamily: GlobalStyles.FontFamily.helvetica,
    position: "absolute",
  },
  wrapperPosition8: {
    marginTop: 182,
    height: 27,
    backgroundColor: GlobalStyles.Color.gray_200,
    borderRadius: GlobalStyles.Border.br_3xs,
    top: "50%",
    position: "absolute",
  },
  disasterDefencePosition: {
    width: 91,
    marginTop: -7.5,
    fontSize: GlobalStyles.FontSize.size_2xs,
    color: GlobalStyles.Color.gray_800,
    top: "50%",
    textAlign: "center",
    fontFamily: GlobalStyles.FontFamily.helvetica,
    position: "absolute",
  },
  wrapperPosition7: {
    marginTop: 219,
    height: 27,
    backgroundColor: GlobalStyles.Color.gray_200,
    borderRadius: GlobalStyles.Border.br_3xs,
    top: "50%",
    position: "absolute",
  },
  wrapperPosition6: {
    bottom: 47,
    height: 27,
    backgroundColor: GlobalStyles.Color.gray_200,
    borderRadius: GlobalStyles.Border.br_3xs,
    position: "absolute",
  },
  womenPosition: {
    width: 107,
    marginTop: -7.5,
    fontSize: GlobalStyles.FontSize.size_2xs,
    color: GlobalStyles.Color.gray_800,
    top: "50%",
    textAlign: "center",
    fontFamily: GlobalStyles.FontFamily.helvetica,
    position: "absolute",
  },
  wrapperPosition5: {
    bottom: 84,
    height: 27,
    backgroundColor: GlobalStyles.Color.gray_200,
    borderRadius: GlobalStyles.Border.br_3xs,
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
    backgroundColor: GlobalStyles.Color.gray_200,
    borderRadius: GlobalStyles.Border.br_3xs,
    position: "absolute",
  },
  containerPosition4: {
    marginLeft: -41,
    left: "50%",
  },
  foodPosition: {
    width: 71,
    marginTop: -7.5,
    fontSize: GlobalStyles.FontSize.size_2xs,
    color: GlobalStyles.Color.gray_800,
    top: "50%",
    textAlign: "center",
    fontFamily: GlobalStyles.FontFamily.helvetica,
    position: "absolute",
  },
  healthInsurance1Position: {
    left: 4,
    marginTop: -7.5,
    fontSize: GlobalStyles.FontSize.size_2xs,
    color: GlobalStyles.Color.gray_800,
    top: "50%",
    textAlign: "center",
    fontFamily: GlobalStyles.FontFamily.helvetica,
    position: "absolute",
  },
  containerPosition3: {
    marginTop: 129.5,
    height: 27,
    backgroundColor: GlobalStyles.Color.gray_200,
    borderRadius: GlobalStyles.Border.br_3xs,
    top: "50%",
    position: "absolute",
  },
  containerPosition2: {
    marginTop: 165.5,
    height: 27,
    backgroundColor: GlobalStyles.Color.gray_200,
    borderRadius: GlobalStyles.Border.br_3xs,
    top: "50%",
    position: "absolute",
  },
  wrapperPosition3: {
    bottom: 20,
    height: 27,
    backgroundColor: GlobalStyles.Color.gray_200,
    borderRadius: GlobalStyles.Border.br_3xs,
    position: "absolute",
  },
  wrapperPosition2: {
    bottom: 92,
    height: 27,
    backgroundColor: GlobalStyles.Color.gray_200,
    borderRadius: GlobalStyles.Border.br_3xs,
    position: "absolute",
  },
  naturalAccessPosition: {
    width: 86,
    marginTop: -7.5,
    fontSize: GlobalStyles.FontSize.size_2xs,
    color: GlobalStyles.Color.gray_800,
    top: "50%",
    textAlign: "center",
    fontFamily: GlobalStyles.FontFamily.helvetica,
    position: "absolute",
  },
  wrapperPosition1: {
    marginTop: 245.32,
    height: 27,
    backgroundColor: GlobalStyles.Color.gray_200,
    borderRadius: GlobalStyles.Border.br_3xs,
    top: "50%",
    position: "absolute",
  },
  disasterDefenceFramePosition: {
    bottom: 158,
    height: 27,
    backgroundColor: GlobalStyles.Color.gray_200,
    borderRadius: GlobalStyles.Border.br_3xs,
    position: "absolute",
  },
  employmentFramePosition: {
    marginTop: 105.32,
    height: 27,
    backgroundColor: GlobalStyles.Color.gray_200,
    borderRadius: GlobalStyles.Border.br_3xs,
    top: "50%",
    position: "absolute",
  },
  healthcareAccessWrapperLayout: {
    bottom: 90,
    width: 121,
    height: 27,
    backgroundColor: GlobalStyles.Color.gray_200,
    borderRadius: GlobalStyles.Border.br_3xs,
    position: "absolute",
  },
  containerPosition1: {
    marginTop: 175.32,
    height: 27,
    backgroundColor: GlobalStyles.Color.gray_200,
    borderRadius: GlobalStyles.Border.br_3xs,
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
    backgroundColor: GlobalStyles.Color.gray_200,
    borderRadius: GlobalStyles.Border.br_3xs,
    position: "absolute",
  },
  employmentWrapper1Position: {
    marginTop: 166.26,
    height: 27,
    backgroundColor: GlobalStyles.Color.gray_200,
    borderRadius: GlobalStyles.Border.br_3xs,
    top: "50%",
    position: "absolute",
  },
  healthContainerPosition: {
    marginTop: 131.26,
    height: 27,
    backgroundColor: GlobalStyles.Color.gray_200,
    borderRadius: GlobalStyles.Border.br_3xs,
    top: "50%",
    position: "absolute",
  },
  framePosition: {
    bottom: 54,
    height: 27,
    backgroundColor: GlobalStyles.Color.gray_200,
    borderRadius: GlobalStyles.Border.br_3xs,
    position: "absolute",
  },
  wrapperLayout: {
    bottom: 89,
    width: 130,
    height: 27,
    backgroundColor: GlobalStyles.Color.gray_200,
    borderRadius: GlobalStyles.Border.br_3xs,
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
    left: "50%",
    height: 27,
    backgroundColor: GlobalStyles.Color.gray_200,
    borderRadius: GlobalStyles.Border.br_3xs,
    position: "absolute",
  },
  parentShadowBox: {
    backgroundColor: GlobalStyles.Color.gray_1300,
    borderRadius: GlobalStyles.Border.br_3xs,
    elevation: 20,
    shadowRadius: 20,
    shadowColor: "rgba(1, 1, 253, 0.1)",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
  },
  text17Typo: {
    transform: [
      {
        scaleY: -1,
      },
    ],
    fontFamily: GlobalStyles.FontFamily.helvetica,
    position: "absolute",
    textAlign: "left",
  },
  groupChildPosition: {
    borderRadius: GlobalStyles.Border.br_5xs,
    left: 0,
    right: 0,
    position: "absolute",
    backgroundColor: GlobalStyles.Color.white,
  },
  accountTypo: {
    letterSpacing: 1,
    fontSize: GlobalStyles.FontSize.size_lg,
    marginTop: -8.5,
    color: GlobalStyles.Color.gray_800,
    fontFamily: GlobalStyles.FontFamily.helvetica,
    textAlign: "left",
  },
  text18Typo: {
    lineHeight: 1,
    fontSize: GlobalStyles.FontSize.size_14xs,
    fontFamily: GlobalStyles.FontFamily.helvetica,
    position: "absolute",
    textAlign: "left",
  },
  carbonChild: {
    backgroundColor: GlobalStyles.Color.gray_300,
    width: 375,
    height: 7509,
  },
  removeCarbon: {
    margin: GlobalStyles.Margin.margin_25xs,
  },
  hello: {
    fontSize: GlobalStyles.FontSize.size_6xl,
    lineHeight: 24,
    color: GlobalStyles.Color.indigo,
  },
  image88Icon: {
    width: 267,
    height: 384,
  },
  carbonItem: {
    borderStyle: "solid",
    borderColor: "#707070",
    borderWidth: 1,
    height: 1,
    width: 1,
    backgroundColor: GlobalStyles.Color.white,
  },
  atCarbonyteWe: {
    fontSize: GlobalStyles.FontSize.size_base,
  },
  hello1: {
    top: "12%",
    left: "4.29%",
    lineHeight: 20,
    textAlign: "center",
    fontFamily: GlobalStyles.FontFamily.helvetica,
    position: "absolute",
    color: GlobalStyles.Color.indigo,
    fontWeight: "700",
  },
  helloWrapper: {
    shadowColor: "rgba(1, 1, 253, 0.05)",
    shadowRadius: 6,
    elevation: 6,
    height: 75,
    width: 326,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    borderRadius: GlobalStyles.Border.br_md,
    backgroundColor: GlobalStyles.Color.white,
  },
  groupChild: {
    backgroundColor: GlobalStyles.Color.gray_500,
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    left: "0%",
    borderRadius: GlobalStyles.Border.br_md,
    width: "100%",
  },
  maskGroup236: {
    bottom: 13,
    left: 0,
    top: 0,
  },
  rectangleParent: {
    marginTop: -30,
    top: "50%",
    left: 0,
    height: 60,
  },
  component20875: {
    left: 0,
    top: 0,
  },
  hello2: {
    left: "12.27%",
    top: "36.67%",
  },
  component20875Parent: {
    height: 60,
    width: 326,
  },
  removeYourCarbonFootprintA: {
    color: GlobalStyles.Color.gray_800,
    width: 321,
  },
  selectYourProject: {
    color: GlobalStyles.Color.indigo,
    fontWeight: "700",
  },
  history: {
    marginTop: -33,
    fontSize: GlobalStyles.FontSize.size_5xl,
    letterSpacing: 2,
    top: "50%",
    color: GlobalStyles.Color.indigo,
  },
  historyWrapper: {
    width: 112,
    height: 66,
  },
  groupItem: {
    borderRadius: GlobalStyles.Border.br_5xl,
    elevation: 20,
    shadowRadius: 20,
    shadowColor: "rgba(1, 1, 253, 0.1)",
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    width: "100%",
    backgroundColor: GlobalStyles.Color.white,
  },
  rectangleView: {
    width: 66,
    left: 22,
  },
  groupChild2: {
    width: 78,
    left: 22,
  },
  groupChild3: {
    width: 52,
    left: 22,
  },
  groupChild4: {
    width: 122,
    left: 22,
  },
  groupChild5: {
    bottom: 21,
    width: 88,
    left: 22,
  },
  groupChild6: {
    right: 47,
    width: 122,
  },
  groupChild7: {
    width: 80,
    left: "50%",
  },
  groupChild8: {
    marginLeft: -64,
    width: 135,
    left: "50%",
  },
  groupChild10: {
    width: 80,
  },
  groupChild11: {
    marginLeft: -81,
    width: 129,
    left: "50%",
  },
  groupChild12: {
    width: 92,
    right: 20,
  },
  groupChild13: {
    width: 113,
    right: 27,
  },
  groupChild14: {
    right: 16,
    width: 113,
  },
  maskGroup295: {
    top: 18,
    maxWidth: "100%",
    overflow: "hidden",
    height: 170,
    left: 21,
    right: 20,
    position: "absolute",
  },
  hello3: {
    top: "21.94%",
    fontSize: GlobalStyles.FontSize.size_sm,
  },
  thisTreePlantingInitiative: {
    marginTop: -202,
  },
  coBenefits: {
    marginTop: 166,
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
    bottom: 28,
    width: 84,
  },
  youthRepresented: {
    marginLeft: -5,
    width: 115,
    left: "50%",
    textAlign: "center",
  },
  text1: {
    fontSize: GlobalStyles.FontSize.size_7xl,
  },
  tree1: {
    fontSize: GlobalStyles.FontSize.size_sm,
  },
  hello4: {
    top: "21.84%",
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
    top: "36.67%",
  },
  groupParent: {
    marginTop: 88.66,
  },
  rectangleGroup: {
    height: 934,
    width: 320,
  },
  groupChild20: {
    width: 80,
    left: "50%",
  },
  groupChild21: {
    width: 121,
    left: "50%",
  },
  groupChild23: {
    width: 92,
    right: 20,
  },
  groupChild24: {
    width: 113,
    right: 27,
  },
  hello6: {
    top: "30.63%",
    fontSize: GlobalStyles.FontSize.size_sm,
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
    top: "30.49%",
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
  },
  groupContainer: {
    marginTop: 102.16,
  },
  groupView: {
    height: 669,
    width: 320,
  },
  groupChild27: {
    width: 59,
    left: 22,
  },
  groupChild28: {
    width: 138,
    left: 22,
  },
  groupChild29: {
    bottom: 56,
    width: 129,
    left: 22,
  },
  groupChild30: {
    bottom: 19,
    width: 129,
    left: 22,
  },
  groupChild31: {
    width: 93,
  },
  groupChild32: {
    marginLeft: 5,
    width: 84,
    left: "50%",
  },
  groupChild33: {
    bottom: 56,
    marginLeft: -5,
  },
  groupChild34: {
    bottom: 19,
    marginLeft: -5,
    width: 113,
    left: "50%",
  },
  groupChild35: {
    width: 60,
  },
  hello9: {
    top: "32.22%",
    fontSize: GlobalStyles.FontSize.size_sm,
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
    top: "32.08%",
  },
  employment2: {
    marginLeft: 9,
    left: "50%",
    width: 78,
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
  },
  groupPressable: {
    marginTop: 54.66,
  },
  rectangleParent2: {
    height: 636,
    width: 320,
  },
  groupChild39: {
    width: 59,
    left: 22,
  },
  groupChild40: {
    width: 76,
    left: 22,
  },
  groupChild41: {
    width: 129,
    left: 22,
  },
  groupChild42: {
    width: 96,
    left: 22,
  },
  groupChild43: {
    width: 120,
    bottom: 24,
    left: 22,
  },
  groupChild44: {
    right: 39,
    bottom: 24,
  },
  groupChild45: {
    width: 93,
  },
  groupChild46: {
    width: 130,
  },
  groupChild47: {
    marginLeft: -5,
    width: 92,
    left: "50%",
  },
  groupChild48: {
    width: 113,
    left: "50%",
  },
  groupChild49: {
    width: 60,
    right: 20,
  },
  hello12: {
    top: "30.22%",
    fontSize: GlobalStyles.FontSize.size_sm,
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
    top: "30.09%",
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
  },
  groupParent1: {
    marginTop: 33.66,
  },
  rectangleParent4: {
    height: 678,
    width: 320,
  },
  hello15: {
    top: "27.92%",
    fontSize: GlobalStyles.FontSize.size_sm,
  },
  thisTrailBlazingProjectRun: {
    marginTop: -113,
  },
  school2: {
    left: 8,
    width: 41,
  },
  schoolWrapper: {
    marginLeft: -29,
    width: 59,
    left: "50%",
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
    top: "27.79%",
  },
  employment3: {
    left: 6,
    width: 82,
  },
  employmentWrapper: {
    right: 30,
    width: 93,
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
  },
  healthInsurance1: {
    width: 96,
  },
  healthInsuranceWrapper: {
    width: 103,
    left: 21,
  },
  groupParent2: {
    marginTop: 41.66,
  },
  rectangleParent6: {
    height: 734,
    width: 320,
  },
  hello18: {
    top: "31.97%",
    fontSize: GlobalStyles.FontSize.size_sm,
  },
  aPlanToRestoreA200Hectar: {
    marginTop: -66.5,
  },
  soilHealth2: {
    left: 8,
    width: 56,
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
    top: "31.83%",
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
  component21421: {
    marginTop: 20.16,
  },
  rectangleParent8: {
    height: 641,
    width: 320,
  },
  hello21: {
    top: "22.17%",
    fontSize: GlobalStyles.FontSize.size_sm,
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
    width: 114,
    left: 24,
  },
  hello22: {
    top: "22.08%",
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
    right: 30,
    width: 130,
    top: "50%",
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
  },
  groupParent3: {
    marginTop: -2.34,
  },
  rectangleParent10: {
    height: 924,
    width: 320,
  },
  hello24: {
    top: "32.27%",
    fontSize: GlobalStyles.FontSize.size_sm,
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
    top: "32.13%",
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
  },
  component21423: {
    marginTop: 23.16,
  },
  rectangleParent12: {
    height: 635,
    width: 320,
  },
  iconFeatherShoppingCart: {
    marginTop: -1.2,
    right: 2,
    width: 4,
    top: "50%",
    position: "absolute",
    height: 1,
  },
  hello27: {
    top: "60.01%",
    left: "31.48%",
    lineHeight: 2,
    color: GlobalStyles.Color.white,
    fontSize: GlobalStyles.FontSize.size_14xs,
    transform: [
      {
        scaleY: -1,
      },
    ],
  },
  groupChild65: {
    marginTop: -0.5,
    height: 0,
    top: "50%",
  },
  text17: {
    marginLeft: -0.5,
    fontSize: GlobalStyles.FontSize.size_13xs,
    lineHeight: 3,
    color: GlobalStyles.Color.gray_1300,
    left: "50%",
    top: 0,
  },
  rectangleParent14: {
    left: 1,
    width: 3,
    height: 3,
    top: 0,
    position: "absolute",
  },
  iconFeatherShoppingCartParent: {
    width: 54,
    height: 5,
  },
  twoTreesIcon: {
    height: 87,
    width: 103,
  },
  hello28: {
    top: "35%",
    left: "16.87%",
  },
  account: {
    opacity: 0.3,
  },
  history1: {
    top: "50%",
  },
  history2: {
    left: "28.57%",
    top: "50%",
    position: "absolute",
  },
  history3: {
    left: "57.48%",
    top: "50%",
    position: "absolute",
    fontWeight: "700",
  },
  history4: {
    left: "82.99%",
    top: "50%",
    position: "absolute",
  },
  component21211: {
    width: 294,
    height: 19,
  },
  hello29: {
    top: "33.33%",
    left: "30.77%",
    color: GlobalStyles.Color.white,
  },
  groupChild67: {
    height: 2,
    top: 0,
  },
  text18: {
    color: GlobalStyles.Color.gray_1300,
    left: 0,
  },
  rectangleParent16: {
    left: 0,
    top: 0,
    position: "absolute",
    width: 1,
  },
  iconFeatherShoppingCart1: {
    marginTop: -0.92,
    right: 1,
    top: "50%",
    position: "absolute",
    height: 1,
    width: 1,
  },
  helloParent: {
    width: 13,
    height: 3,
  },
  carbon: {
    flex: 1,
    paddingTop: GlobalStyles.Padding.padding_sm,
    alignItems: "center",
    width: "100%",
    backgroundColor: GlobalStyles.Color.white,
  },
});

export default Carbon;
