import * as React from "react";
import { Text, StyleSheet, Image, View, Pressable, ScrollView} from "react-native";
import GlobalStyles from "../../GlobalStyles";

const Carbon = () => {
  return (
    <ScrollView>
    <View style={styles.carbon}>
      <View style={styles.helloParent}>
        <Text style={[styles.hello, styles.helloColor, styles.helloTypo6]}>
          <Text style={styles.removeCarbon}>Remove Carbon,</Text>
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
        <View style={styles.historyWrapper}>
          <Text
            style={[
              styles.history,
              styles.historyPosition,
              styles.helloColor,
              styles.helloTypo6,
            ]}
          >
            <Text style={styles.removeCarbon}>Invest in</Text>
            <Text style={styles.removeCarbon}>Nature</Text>
          </Text>
        </View>
        <View style={[styles.rectangleGroup, styles.groupParentPosition1]}>
          <View style={styles.groupInner} />
          <View
            style={[
              styles.groupChildLayout2,
              styles.groupChildLayout3,
              styles.groupChildPosition19,
            ]}
          />
          <View style={[styles.groupChild1, styles.groupChildPosition18]} />
          <View
            style={[styles.groupChildLayout1, styles.groupChildPosition17]}
          />
          <View style={[styles.groupChild3, styles.groupChildPosition16]} />
          <View style={[styles.groupChild4, styles.groupChildPosition15]} />
          <View style={[styles.groupChild5, styles.groupChildLayout]} />
          <View style={[styles.groupChild6, styles.groupChildLayout2]} />
          <View style={[styles.groupChild7, styles.groupChildLayout]} />
          <View
            style={[
              styles.groupChild8,
              styles.groupChildPosition14,
              styles.groupChildLayout2,
              styles.groupChildPosition19,
            ]}
          />
          <View style={[styles.groupChild9, styles.groupChildPosition18]} />
          <View
            style={[styles.groupChildPosition13, styles.groupChildPosition17]}
          />
          <View
            style={[
              styles.groupChild11,
              styles.groupChildPosition12,
              styles.groupChildPosition16,
            ]}
          />
          <View style={[styles.groupChild12, styles.groupChildPosition15]} />
          <View
            style={[
              styles.groupChild13,
              styles.groupChildLayout2,
              styles.groupChildPosition19,
            ]}
          />
          <View style={[styles.groupChild14, styles.groupChildPosition17]} />
          <View style={[styles.groupChild15, styles.groupChildPosition16]} />
          <Image
            style={[styles.maskGroup295, styles.image88IconLayout]}
            resizeMode="cover"
            source={require("../assets/icon-fingerfull.png")}
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
          <Text
            style={[styles.hello4, styles.helloTypo1, styles.helloPosition]}
          >
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
          <View style={[styles.groupContainer, styles.groupParentPosition]}>
            <View style={[styles.rectangleParent, styles.maskGroup236Position]}>
              <View style={[styles.groupItem, styles.historyPosition]} />
              <View
                style={[styles.maskGroup236, styles.maskGroup236Position]}
              />
            </View>
            <Text
              style={[
                styles.hello5,
                styles.helloTypo2,
                styles.helloTypo4,
                styles.helloPosition1,
              ]}
            >
              Add To Cart
            </Text>
          </View>
        </View>
        <View style={[styles.groupView, styles.groupParentPosition1]}>
          <View style={styles.groupInner} />
          <View
            style={[styles.groupChildPosition10, styles.groupChildLayout3]}
          />
          <View
            style={[styles.groupChildPosition9, styles.groupChildLayout3]}
          />
          <View
            style={[styles.groupChildPosition8, styles.groupChildLayout1]}
          />
          <View
            style={[
              styles.groupChild21,
              styles.groupChildPosition10,
              styles.groupChildPosition14,
            ]}
          />
          <View
            style={[
              styles.groupChild22,
              styles.groupChildPosition9,
              styles.groupChildPosition14,
            ]}
          />
          <View
            style={[styles.groupChildPosition8, styles.groupChildPosition13]}
          />
          <View style={[styles.groupChild24, styles.groupChildPosition10]} />
          <View style={[styles.groupChild25, styles.groupChildPosition8]} />
          <Image
            style={[styles.maskGroup295, styles.image88IconLayout]}
            resizeMode="cover"
            source={require("../assets/image-carbon1.png")}
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
            creating a resilient woodland forest that will support a diversity
            of plant and animal life, while increasing local awareness of
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
          <View style={[styles.groupParent1, styles.groupParentPosition]}>
            <View style={[styles.rectangleParent, styles.maskGroup236Position]}>
              <View style={[styles.groupItem, styles.historyPosition]} />
              <View
                style={[styles.maskGroup236, styles.maskGroup236Position]}
              />
            </View>
            <Text
              style={[
                styles.hello5,
                styles.helloTypo2,
                styles.helloTypo4,
                styles.helloPosition1,
              ]}
            >
              Add To Cart
            </Text>
          </View>
        </View>
        <View style={[styles.rectangleParent2, styles.groupParentPosition1]}>
          <View style={styles.groupInner} />
          <View style={[styles.groupChild28, styles.groupChildPosition7]} />
          <View style={[styles.groupChild29, styles.groupChildPosition6]} />
          <View style={[styles.groupChild30, styles.groupChildLayout2]} />
          <View style={[styles.groupChild31, styles.groupChildLayout2]} />
          <View
            style={[
              styles.groupChild32,
              styles.groupChildPosition7,
              styles.groupChildPosition11,
            ]}
          />
          <View style={[styles.groupChild33, styles.groupChildPosition6]} />
          <View
            style={[
              styles.groupChild34,
              styles.groupChild34Layout,
              styles.groupChildLayout2,
            ]}
          />
          <View style={[styles.groupChild35, styles.groupChildLayout2]} />
          <View style={[styles.groupChild36, styles.groupChild36Position]} />
          <Image
            style={[styles.maskGroup295, styles.image88IconLayout]}
            resizeMode="cover"
            source={require("../assets/image-carbon1.png")}
          />
          <Text style={[styles.hello9, styles.helloTypo2, styles.helloTypo3]}>
            <Text style={styles.removeCarbon}>
              Drylands Protection, Kasigau
            </Text>
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
          <View style={[styles.groupParent2, styles.groupParentPosition]}>
            <View style={[styles.rectangleParent, styles.maskGroup236Position]}>
              <View style={[styles.groupItem, styles.historyPosition]} />
              <View
                style={[styles.maskGroup236, styles.maskGroup236Position]}
              />
            </View>
            <Text
              style={[
                styles.hello5,
                styles.helloTypo2,
                styles.helloTypo4,
                styles.helloPosition1,
              ]}
            >
              Add To Cart
            </Text>
          </View>
        </View>
        <View style={[styles.rectangleParent4, styles.groupParentPosition1]}>
          <View style={styles.groupInner} />
          <View style={[styles.groupChild40, styles.groupChildPosition4]} />
          <View style={[styles.groupChild41, styles.groupChildPosition3]} />
          <View style={[styles.groupChild42, styles.groupChildPosition2]} />
          <View style={[styles.groupChild43, styles.groupChildPosition1]} />
          <View style={[styles.groupChild44, styles.groupChildLayout2]} />
          <View style={[styles.groupChild45, styles.groupChild45Layout]} />
          <View
            style={[
              styles.groupChild46,
              styles.groupChildPosition4,
              styles.groupChildPosition11,
            ]}
          />
          <View
            style={[
              styles.groupChild47,
              styles.groupChildPosition3,
              styles.groupChildPosition12,
            ]}
          />
          <View style={[styles.groupChild48, styles.groupChildPosition2]} />
          <View
            style={[
              styles.groupChild49,
              styles.groupChildPosition1,
              styles.groupChildPosition14,
            ]}
          />
          <View style={[styles.groupChild50, styles.groupChildPosition3]} />
          <Image
            style={[styles.maskGroup295, styles.image88IconLayout]}
            resizeMode="cover"
            source={require("../assets/image-carbon1.png")}
          />
          <Text style={[styles.hello12, styles.helloTypo2, styles.helloTypo3]}>
            <Text style={styles.removeCarbon}>Tropical Forest Protection,</Text>
            <Text style={styles.removeCarbon}>{`Keo Seima `}</Text>
          </Text>
          <Text
            style={[styles.aReddProjectWithAFocusO, styles.projectPosition]}
          >
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
          <View style={[styles.groupParent3, styles.groupParentPosition]}>
            <View style={[styles.rectangleParent, styles.maskGroup236Position]}>
              <View style={[styles.groupItem, styles.historyPosition]} />
              <View
                style={[styles.maskGroup236, styles.maskGroup236Position]}
              />
            </View>
            <Text
              style={[
                styles.hello5,
                styles.helloTypo2,
                styles.helloTypo4,
                styles.helloPosition1,
              ]}
            >
              Add To Cart
            </Text>
          </View>
        </View>
        <View style={[styles.rectangleParent6, styles.groupParentPosition1]}>
          <View style={styles.groupInner} />
          <Image
            style={[styles.maskGroup295, styles.image88IconLayout]}
            resizeMode="cover"
            source={require("../assets/image-carbon1.png")}
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
            <Text style={[styles.school2, styles.trainingPosition1]}>
              school
            </Text>
          </View>
          <View
            style={[styles.disasterDefenceWrapper, styles.wrapperPosition8]}
          >
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
              style={[
                styles.oceanAcidificationControl,
                styles.trainingPosition1,
              ]}
            >
              ocean acidification control
            </Text>
          </View>
          <Text
            style={[styles.hello16, styles.helloTypo1, styles.helloPosition]}
          >
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
          <View
            style={[
              styles.healthInsuranceWrapper,
              styles.twoTreesIconLayout,
              styles.wrapperPosition9,
            ]}
          >
            <Text
              style={[styles.healthInsurance1, styles.healthInsurance1Position]}
            >
              health insurance
            </Text>
          </View>
          <View style={[styles.groupParent4, styles.groupParentPosition]}>
            <View style={[styles.rectangleParent, styles.maskGroup236Position]}>
              <View style={[styles.groupItem, styles.historyPosition]} />
              <View
                style={[styles.maskGroup236, styles.maskGroup236Position]}
              />
            </View>
            <Text
              style={[
                styles.hello5,
                styles.helloTypo2,
                styles.helloTypo4,
                styles.helloPosition1,
              ]}
            >
              Add To Cart
            </Text>
          </View>
        </View>
        <View style={[styles.rectangleParent8, styles.groupParentPosition1]}>
          <View style={styles.groupInner} />
          <Image
            style={[styles.maskGroup295, styles.image88IconLayout]}
            resizeMode="cover"
            source={require("../assets/image-carbon1.png")}
          />
          <Text style={[styles.hello18, styles.helloTypo2, styles.helloTypo3]}>
            <Text style={styles.removeCarbon}>Degraded Forest</Text>
            <Text style={styles.removeCarbon}>Restoration, Mijares</Text>
          </Text>
          <Text
            style={[styles.aPlanToRestoreA200Hectar, styles.projectPosition]}
          >
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
            style={[
              styles.endangeredSpeciesContainer,
              styles.containerPosition2,
            ]}
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
            style={[
              styles.increasesBiodiversityWrapper,
              styles.wrapperPosition2,
            ]}
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
            style={[styles.eroisionControlWrapper, styles.groupChild36Position]}
          >
            <Text
              style={[styles.eroisionControl, styles.naturalAccessPosition]}
            >
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
          <View style={[styles.groupParent5, styles.groupParentPosition]}>
            <View style={[styles.rectangleParent, styles.maskGroup236Position]}>
              <View style={[styles.groupItem, styles.historyPosition]} />
              <View
                style={[styles.maskGroup236, styles.maskGroup236Position]}
              />
            </View>
            <Text
              style={[
                styles.hello5,
                styles.helloTypo2,
                styles.helloTypo4,
                styles.helloPosition1,
              ]}
            >
              Add To Cart
            </Text>
          </View>
        </View>
        <View style={[styles.rectangleParent10, styles.groupParentPosition1]}>
          <View style={styles.groupInner} />
          <Image
            style={[styles.maskGroup295, styles.image88IconLayout]}
            resizeMode="cover"
            source={require("../assets/image-carbon1.png")}
          />
          <Text style={[styles.hello21, styles.helloTypo2, styles.helloTypo3]}>
            <Text style={styles.removeCarbon}>Peatland Protection,</Text>
            <Text style={styles.removeCarbon}>Rimba Raya</Text>
          </Text>
          <Text
            style={[styles.theRimbaRayaBiodiversityRe, styles.projectPosition]}
          >
            The Rimba Raya Biodiversity Reserve Project is protecting one of the
            most highly endangered ecosystems in the world. Without this
            project, the carbon-rich, peatland forest would have been turned
            into palm oil estates, emitting over 100 million tonnes of carbon
            into the atmosphere. Instead, the project is protecting the land and
            working with local communities to achieve 12 of the 17 SDGs
          </Text>
          <View
            style={[
              styles.connectivityWrapper,
              styles.wrapperPosition1,
              styles.groupChild34Layout,
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
            style={[
              styles.educationInvestmentWrapper,
              styles.groupChildLayout2,
            ]}
          >
            <Text style={[styles.endangeredSpecies2, styles.trainingPosition1]}>
              education investment
            </Text>
          </View>
          <View
            style={[
              styles.healthServicesWrapper,
              styles.employmentFramePosition,
            ]}
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
              styles.groupChild45Layout,
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
            style={[
              styles.sustainableIncomeContainer,
              styles.groupChildLayout2,
            ]}
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
          <View
            style={[styles.communityGroupsWrapper, styles.wrapperPosition1]}
          >
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
          <View
            style={[styles.employmentFrame, styles.employmentFramePosition]}
          >
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
          <View
            style={[styles.endangeredSpeciesFrame, styles.groupChildLayout2]}
          >
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
            <Text
              style={[styles.eroisionControl, styles.naturalAccessPosition]}
            >
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
          <View style={[styles.groupParent6, styles.groupParentPosition]}>
            <View style={[styles.rectangleParent, styles.maskGroup236Position]}>
              <View style={[styles.groupItem, styles.historyPosition]} />
              <View
                style={[styles.maskGroup236, styles.maskGroup236Position]}
              />
            </View>
            <Text
              style={[
                styles.hello5,
                styles.helloTypo2,
                styles.helloTypo4,
                styles.helloPosition1,
              ]}
            >
              Add To Cart
            </Text>
          </View>
        </View>
        <View style={[styles.rectangleParent12, styles.groupParentPosition1]}>
          <View style={styles.groupInner} />
          <Image
            style={[styles.maskGroup295, styles.image88IconLayout]}
            resizeMode="cover"
            source={require("../assets/image-carbon1.png")}
          />
          <Text style={[styles.hello24, styles.helloTypo2, styles.helloTypo3]}>
            <Text style={styles.removeCarbon}>Tropical Forest Protection,</Text>
            <Text style={styles.removeCarbon}>{`Mai Ndombe `}</Text>
          </Text>
          <Text
            style={[styles.thisProjectWasLaunchedIn2, styles.projectPosition]}
          >
            This project was launched in 2011 and is run by Wildlife Works. It
            is pushing the boundaries of what a REDD+ project can achieve, and
            is a world-class example.
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
            style={[
              styles.employmentWrapper1,
              styles.employmentWrapper1Position,
            ]}
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
          <View
            style={[styles.endangeredSpeciesWrapper1, styles.wrapperLayout]}
          >
            <Text
              style={[styles.biodiversityProtection1, styles.trainingPosition1]}
            >
              endangered species
            </Text>
          </View>
          <View
            style={[styles.inclusiveGovernanceWrapper, styles.wrapperLayout]}
          >
            <Text
              style={[styles.biodiversityProtection1, styles.trainingPosition1]}
            >
              inclusive governance
            </Text>
          </View>
          <View style={[styles.framePosition, styles.eroisionPosition]}>
            <Text
              style={[styles.eroisionControl, styles.naturalAccessPosition]}
            >
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
          <View style={[styles.groupParent7, styles.groupParentPosition]}>
            <View style={[styles.rectangleParent, styles.maskGroup236Position]}>
              <View style={[styles.groupItem, styles.historyPosition]} />
              <View
                style={[styles.maskGroup236, styles.maskGroup236Position]}
              />
            </View>
            <Text
              style={[
                styles.hello5,
                styles.helloTypo2,
                styles.helloTypo4,
                styles.helloPosition1,
              ]}
            >
              Add To Cart
            </Text>
          </View>
        </View>
        <View
          style={[
            styles.iconFeatherShoppingCartParent,
            styles.helloGroupShadowBox,
          ]}
        >
          <Image
            style={[styles.iconFeatherShoppingCart, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/icon-supermarketplaceholder.png")}
          />
          <Text style={[styles.hello27, styles.text17Typo]}>
            Swipe to Go to Cart
          </Text>
          <View style={[styles.rectangleParent14, styles.helloGroupLayout]}>
            <View style={[styles.groupChild66, styles.groupChildPosition]} />
            <Text style={[styles.text17, styles.text17Typo]}>1</Text>
          </View>
        </View>
        <Image
          style={[styles.twoTreesIcon, styles.twoTreesIconLayout]}
          resizeMode="cover"
          source={require("../assets/image-twotrees.png")}
        />
        <Pressable
          style={[styles.groupPressable, styles.groupPosition]}
          onPress={() => navigation.navigate("ChooseCardsStandard5")}
        >
          <View style={[styles.rectangleParent, styles.maskGroup236Position]}>
            <View style={[styles.groupItem, styles.historyPosition]} />
            <View style={[styles.maskGroup236, styles.maskGroup236Position]} />
          </View>
          <Text style={[styles.hello28, styles.helloTypo4, styles.helloTypo5]}>
            Visit Your virtual forest
          </Text>
        </Pressable>
        <View style={styles.historyParent}>
          <Text style={[styles.history1, styles.historyTypo]}>Account</Text>
          <Text style={[styles.history2, styles.historyTypo]}>Analysis</Text>
          <Text style={styles.history3}>Carbon</Text>
          <Text style={[styles.history4, styles.historyTypo]}>Profile</Text>
        </View>
        <View
          style={[
            styles.helloGroup,
            styles.helloGroupLayout,
            styles.helloGroupShadowBox,
          ]}
        >
          <Text style={[styles.hello29, styles.text18Typo]}>
            Swipe to Go to Cart
          </Text>
          <View style={styles.rectangleParent16}>
            <View style={[styles.groupChild68, styles.groupChildPosition]} />
            <Text style={[styles.text18, styles.text18Typo]}>1</Text>
          </View>
          <Image
            style={[styles.iconFeatherShoppingCart1, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/icon-supermarketplaceholder.png")}
          />
        </View>
      </View>
    </View>
    </ScrollView>

  );
};

const styles = StyleSheet.create({
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
    width: 326,
    height: 7336,
  },
  carbon: {
    flex: 1,
    paddingLeft: GlobalStyles.Padding.padding_7xs,
    paddingTop: GlobalStyles.Padding.padding_2xs,
    paddingRight: GlobalStyles.Padding.padding_8xs,
    width: "100%",
    backgroundColor: GlobalStyles.Color.white,
  },
});

export default Carbon;
