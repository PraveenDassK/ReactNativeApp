import React from "react";
import {
  ScrollView,
  Text,
  ImageBackground,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import { BlurView } from "expo-blur";

import Button from "../components/AppButton";
import CarbonSpendGraph from "../components/CarbonSpendGraph";
import colors from "../config/colors";
import { FlatList } from "react-native-gesture-handler";
import { center } from "@shopify/react-native-skia";
import Tagline from "../components/Tagline";

const CarbonFootprints = () => {
  return (
    <ScrollView>
      <ImageBackground
        style={{ height: 280 }}
        source={require("../assets/backgrounds/beach.jpg")}
      >
        <View style={styles.backgroundTextContainer}>
          <Text style={styles.backgroundFont}>Your Carbon Footprints</Text>
          <Text
            style={[
              styles.backgroundFont,
              styles.backgroundSub,
              { marginTop: "1.5%" },
            ]}
          >
            Monitor & Minimize Your Carbon Footprint for a Greener Planet.{" "}
          </Text>
        </View>
      </ImageBackground>
      <View
        style={{
          backgroundColor: "#F7F7F7",
          flex: 1,
          padding: "5%",
          // marginBottom: "30%",
          // justifyContent: "flex-end",
          borderTopStartRadius: 20,
          borderTopEndRadius: 20,
          marginTop: -20,
        }}
      >
        <BlurView tint="light" intensity={60} style={styles.blurView}>
          <CarbonSpendGraph isStyled={false} />
        </BlurView>
        <CarbonContainer title='Carbon offset summary'>
          <ImageCardContainer />
        </CarbonContainer >
        <CarbonContainer title='Your virtual planet'>
          <View style={styles.center}>
            <Image resizeMode="contain" source={require("../assets/Forest/1.png")} style={{width: 300, height: 173}} />
          </View>
        </CarbonContainer>
        <CarbonContainer >
          <View style={styles.center}>
            <Image resizeMode="contain" source={require("../assets/Turtles/1.png")} style={{width: 300, height: 173}}  />
          </View>
        </CarbonContainer>
          <Tagline margin={false}/>
      </View>
        <ImageBackground source={require('../assets/backgrounds/Coral.png')} style={{width: "100%", height: 300}}>
        </ImageBackground>
    </ScrollView>
  );
};

const CarbonContainer = ({ title, children }) => {
  return (
    <View style={styles.containerSpacing}>
      <Text style={styles.header}>{title}</Text>
      <View style={[styles.container, title ? styles.containerSpacing : {marginTop: '-10%'}]}>
        <View style={styles.containerHeader}>
          <View
            style={[
              styles.containerItems,
              { borderRightWidth: 0.2, borderColor: "#999999" },
            ]}
          >
            <Text style={styles.containerHeaderText}>10</Text>
            <Text style={styles.subHeader}>Purchased </Text>
            <Text style={styles.subHeader}>Projects </Text>
          </View>
          <View style={styles.containerItems}>
            <Text style={styles.containerHeaderText}>250kg</Text>
            <Text style={styles.subHeader}>Carbon </Text>
            <Text style={styles.subHeader}>Offset </Text>
          </View>
        </View>
        <View
          style={[
            styles.containerSpacing,
            { borderBottomWidth: 0.5, borderColor: "#999999" },
          ]}
        />

        {children}

        <TouchableOpacity
          style={[styles.navigateContainer, styles.containerSpacing]}
          onPress={() => console.log("navigate")}
        >
          <Text style={styles.navigateText}>Explore more projects</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const ImageCardContainer = () => {
  return (
    <>
      <View style={styles.containerSpacing}>
        <Text style={styles.subHeader}>My projects</Text>
      </View>

      <View style={[styles.projectContainer, styles.bottomBorder]}>
        <View style={{ flex: 1, justifyContent: "flex-start" }}>
          <Image
            source={require("../assets/BearWithUs.png")}
            style={styles.projectImage}
          />
        </View>
        <View style={{ flex: 2, justifyContent: "flex-start" }}>
          <Text style={styles.projectHeader}>Project Type: Forests</Text>
          <View style={styles.itemSpacing}>
            <Text numberOfLines={3} style={styles.subHeader}>
              Agroforestry-Tree Planting Initiative, Kenya
            </Text>
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  blurView: {
    backgroundColor: "rgba(255,255,255,0.5)",
    borderRadius: 20,
    marginBottom: "5%",
    overflow: "hidden",
    marginTop: "-30%",
  },
  bottomBorder: {
    borderBottomWidth: 0.2,
    borderColor: "#999999",
  },
  backgroundFont: {
    color: "white",
    fontFamily: "Montserrat",
    fontSize: 18,
  },
  backgroundTextContainer: {
    marginTop: "15%",
    paddingHorizontal: "5%",
    width: "70%",
  },
  backgroundSub: {
    fontFamily: "Montserrat-Regular",
    fontSize: 14,
  },
  center: {
    justifyContent: "center",
    alignItems: 'center'
  },
  containerSpacing: {
    marginVertical: "5%",
  },
  container: {
    backgroundColor: colors.white,
    borderRadius: 20,
    width: "100%",
    padding: "5%",
  },
  containerHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: "5%",
  },
  containerHeaderText: {
    color: "#179424",
    fontSize: 24,
    fontFamily: "Montserrat",
    lineHeight: 40,
  },
  containerItems: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    fontFamily: "Montserrat",
    fontSize: 18,
  },
  itemSpacing: {
    marginTop: "2.5%",
  },
  navigateContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  navigateText: {
    color: "#178BFF",
    fontSize: 14,
    fontFamily: "Montserrat",
  },
  projectContainer: {
    flexDirection: "row",
    paddingBottom: "5%",
  },
  projectImage: {
    height: 74,
    width: 110,
    borderRadius: 10,
  },
  projectHeader: {
    color: "#999999",
    fontSize: 10,
  },
  subHeader: {
    fontFamily: "Montserrat",
    fontSize: 14,
  },
});
export default CarbonFootprints;
