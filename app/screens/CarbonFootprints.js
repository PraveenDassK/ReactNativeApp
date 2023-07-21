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
import GlobalStyles from "../../GlobalStyles";
import Button from "../components/AppButton";
import CarbonSpendGraph from "../components/CarbonSpendGraph";
import colors from "../config/colors";
import { FlatList } from "react-native-gesture-handler";
import { center } from "@shopify/react-native-skia";
import Tagline from "../components/Tagline";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
const CarbonFootprints = ({ navigation }) => {
  const handleNavigation = () => navigation.navigate("CarbonExplore");
  return (
    <ScrollView>
      <ImageBackground
        style={{ height: 280 }}
        source={require("../assets/backgrounds/carbonInside.png")}
      >
        <View style={styles.TopImageheader}>
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
          <View style={styles.iconContainer}>
            <DarkMode />
            <TouchableOpacity
              onPress={() => navigation.navigate("Notification")}
            >
              <Notification />
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>

      <View
        style={{
          backgroundColor: "#ffff",
          // flex: 1,
          // marginBottom: "30%",
          // justifyContent: "flex-end",
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          marginTop: -20,
        }}
      >
        <ImageBackground
          source={require("../assets/backgrounds/beach.jpg")}
          resizeMode="contain"
          imageStyle={{
            bottom: "-95%", // Whatever offset you want from the bottom
          }}
          style={{
            zIndex: 10,
            width: "100%",
          }}
        >
          <View style={{padding:"5%"}}>
          <BlurView tint="light" intensity={60} style={styles.blurView}>
            <CarbonSpendGraph isStyled={false} />
          </BlurView>
          <CarbonContainer
            title="Carbon offset summary"
            onNavigate={handleNavigation}
          >
            <ImageCardContainer />
          </CarbonContainer>
          <CarbonContainer title="Your virtual planet">
            <View style={styles.center}>
              <Image
                resizeMode="contain"
                source={require("../assets/Forest/1.png")}
                style={{ width: 300, height: 173 }}
              />
            </View>
          </CarbonContainer>
          <CarbonContainer>
            <View style={styles.center}>
              <Image
                resizeMode="contain"
                source={require("../assets/Turtles/1.png")}
                style={{ width: 300, height: 173 }}
              />
            </View>
          </CarbonContainer>
          <Tagline margin={false} />
          </View>
        </ImageBackground>
      </View>
    </ScrollView>
  );
};
const DarkMode = () => (
  <View style={styles.iconStyle}>
    <Ionicons name="moon" color="white" size={24} />
  </View>
);
const Notification = () => (
  <View style={styles.iconStyle}>
    <View style={styles.iconBadgeContainer}>
      <Text style={styles.iconBadgeNumber}>1</Text>
    </View>
    <MaterialCommunityIcons name="bell-outline" color="white" size={24} />
  </View>
);

const CarbonContainer = ({ title, children, onNavigate }) => {
  return (
    <View style={styles.containerSpacing}>
      <Text style={styles.header}>{title}</Text>
      <View
        style={[
          styles.container,
          title ? styles.containerSpacing : { marginTop: "-10%" },
        ]}
      >
        <View style={styles.containerHeader}>
          <View
            style={[
              styles.containerItems,
              {
                borderRightWidth: 0.2,
                borderColor: GlobalStyles.Color.darkGray,
              },
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
            {
              borderBottomWidth: 0.5,
              borderColor: GlobalStyles.Color.darkGray,
            },
          ]}
        />

        {children}

        <TouchableOpacity
          style={[styles.navigateContainer, styles.containerSpacing]}
          onPress={onNavigate}
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
    backgroundColor: "transparent",
    borderRadius: 20,
    marginBottom: "0%",
    overflow: "hidden",
    marginTop: "-30%",
  },
  bottomBorder: {
    borderBottomWidth: 0.2,
    borderColor: GlobalStyles.Color.darkGray,
  },
  backgroundFont: {
    color: GlobalStyles.Color.white,
    fontFamily: "Montserrat",
    fontSize: 18,
  },
  backgroundTextContainer: {
    // marginTop: "15%",
    // paddingHorizontal: "5%",
    width: "70%",
  },
  backgroundSub: {
    fontFamily: "Montserrat-Regular",
    fontSize: 14,
  },
  center: {
    justifyContent: "center",
    alignItems: "center",
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
    color: GlobalStyles.Color.green_total,
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

    color: GlobalStyles.Color.lightBlack,
  },
  itemSpacing: {
    marginTop: "2.5%",
  },
  navigateContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  navigateText: {
    color: GlobalStyles.Color.skyblue,
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
    color: GlobalStyles.Color.darkGray,
    fontSize: 10,
  },
  subHeader: {
    fontFamily: "Montserrat",
    fontSize: 14,
  },
  iconContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 5,
  },
  TopImageheader: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
    marginTop: "10%",
  },
  iconStyle: {
    height: 40,
    width: 40,
    // borderWidth: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    borderRadius: 20,
    backgroundColor: "rgba(0, 0, 0, .25)",
  },
  iconBadgeContainer: {
    position: "absolute",
    backgroundColor: "red",
    height: 10,
    width: 10,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    right: 8,
    top: 8,
    zIndex: 5,
  },
  iconBadgeNumber: {
    fontSize: 6,
    color: colors.white,
    fontWeight: "900",
  },
});
export default CarbonFootprints;
