import React, { useContext, useState, useEffect, useCallback } from "react";
import {
  RefreshControl,
  StyleSheet,
  View,
  Image,
  FlatList,
  ActivityIndicator,
  Vibration,
  Alert,
  useWindowDimensions,
  SafeAreaView,
  ImageBackground,
  Text,
  Dimensions,
} from "react-native";
import * as Device from "expo-device";
import { Canvas } from "@shopify/react-native-skia";
import GlobalStyles from "../../GlobalStyles";

import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from "../config/metrics";
import apiCall from "../api/api";
import Button from "../components/AppButton";
import LargeButton from "../components/Button";

import Pressable from "react-native/Libraries/Components/Pressable/Pressable";

import FadeInView from "../components/fadeInview";
import AppText from "../components/Text";
import AuthContext from "../auth/context";
import * as Clipboard from "expo-clipboard";
import colors from "../config/colors";
import { BlurView } from "expo-blur";
import CarbonFootprints from "./CarbonFootprints";

const screenWidth = Dimensions.get("window").width;

const smallDevice = { height: 600 };

const Carbon = ({ route, navigation }) => {
  const { height, width } = useWindowDimensions();
  const [device, setDevice] = useState("");
  const { accountID, cart, setCart, darkMode } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [refreshing, setRefreshing] = useState(false);
  const [count, setCount] = useState(cart.length);
  const [visitedCarbon, setVisitedCarbon] = useState(false);
  const [projects, setProjects] = useState([]);

 

  useEffect(() => {
    const deviceType = async () => {
      const deviceSize = await Device.getDeviceTypeAsync();

      setDevice(deviceSize);
    };
    deviceType();
  }, [height, width]);

  useEffect(() => {
    loadData();
  }, [accountID]);

  const loadData = async () => {
    setIsLoading(true);
    try {
      const response = await apiCall.GetProjectList();
      const responseProjects = response;
      setProjects(
        responseProjects.map((project) => {
          return {
            id: project.id,
            displayName: project.displayName,
            price: project.asset.displayAssetPriceWithMarkup,
          };
        })
      );
      setData(response);
      setIsLoading(false);
    } catch {
      setIsLoading(false);
    }
  };

  const incrementCart = (item) => {
    let incCount = cart.length;
    setCount((incCount += 1));
    const incrementProject = projects.find((project) => project.id == item.id);
    setCart([...cart, incrementProject]);
  };

  const decrementCart = (item) => {
    if (!cart.length)
      return Alert.alert(`Add ${item.displayName} project to cart`);

    const filteredProjects = cart.filter((project) => project.id !== item.id);
    const decrementedProjects = cart.filter((project) => project.id == item.id);

    if (decrementedProjects.length > 0) {
      let decCount = cart.length;
      setCount((decCount -= 1));
      decrementedProjects.pop();
      setCart([...filteredProjects, ...decrementedProjects]);
    } else {
      Alert.alert(`Add Project`);
    }
  };

  const copyToClipboard = async (copy) => {
    Vibration.vibrate();
    alert(`${copy} copied`);
    await Clipboard.setStringAsync(copy);
  };

  const goToBasket = () => {
    navigation.navigate("CarbonCart", cart);
  };

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      loadData();
      setRefreshing(false);
    }, 2000);
  }, [refreshing]);

  if (isLoading) {
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor:
            darkMode === "DARK" ? GlobalStyles.Color.darkTheme_bg : null,
        }}
      >
        <ActivityIndicator
          size="large"
          color={
            darkMode === "DARK"
              ? GlobalStyles.Color.white
              : GlobalStyles.Color.black
          }
        />
      </View>
    );
  }

  if (visitedCarbon) {
    return <CarbonFootprints navigation={navigation} />;
  }

  return (
    <View style={{ flex: 1, backgroundColor: "grey" }}>
      <View>
        <ImageBackground
          resizeMode="cover"
          style={{
            width: screenWidth,
            height: screenWidth * 1,
            marginTop: -70,
          }}
          source={require("../assets/backgrounds/carbonInside.png")}
        />
      </View>
      <View
        style={{
          backgroundColor:
            darkMode === "DARK" ? GlobalStyles.Color.darkTheme_bg : "#F7F7F7",
          flex: 1,
          padding: "5%",
          paddingBottom: "30%",
          justifyContent: "flex-end",
          borderTopStartRadius: 20,
          borderTopEndRadius: 20,
          marginTop: -80,
        }}
      >
        <BlurView tint="light" intensity={60} style={styles.blurView}>
          <CarbonFeature darkMode={darkMode} height={height} />
        </BlurView>
        <Button
          title="Lets Go"
          onPress={() => setVisitedCarbon(true)}
          isNavigate={true}
        />
      </View>
    </View>
  );
};

const CarbonFeature = ({ darkMode, height }) => {
  console.log(height, smallDevice.height, height < smallDevice.height);

  const isSmallDevice = height < smallDevice.height


  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1, paddingHorizontal: "15%", paddingTop: "15%" }}>
        <Text
          style={{
            fontSize: isSmallDevice ? 20 : 30,
            fontFamily: "Montserrat-Regular",
            color: "white",
          }}
        >
          Embracing a{" "}
          <Text style={{ fontFamily: "Montserrat" }}>
            Carbon-Neutral Lifestyle
          </Text>
        </Text>
      </View>

      
        <View style={{ flex: 3, padding: "10%" }}>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              marginBottom: "0%",
            }}
          >
            <Image
              source={require("../assets/newAssets/Carbon-TreeAnimation.gif")}
              style={{ height: 200, width: 200 }}
            />
          </View>
          {!isSmallDevice && <View>
            <View>
              <Text
                style={{
                  fontFamily: "Montserrat",
                  fontSize: 18,
                  marginBottom: "5%",
                  color:
                    darkMode === "DARK"
                      ? GlobalStyles.Color.white
                      : GlobalStyles.Color.lightBlack,
                }}
              >
                Track, Reduce, and Offset your daily CO2 Emisssions
              </Text>
            </View>
            <View>
              <Text
                style={{
                  fontFamily: "Montserrat-Regular",
                  fontSize: 14,
                  color:
                    darkMode === "DARK"
                      ? GlobalStyles.Color.white
                      : GlobalStyles.Color.lightBlack,
                }}
              >
                With carbonyte app you can track and control your carbon emisson
                from your daily life spendings and invest in nature by
                offsetting in high quality nature-based verified projects
              </Text>
            </View>
          </View>}
        </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  boxShadow: {},
  treeImage: {
    height: verticalScale(300),
    width: horizontalScale(300),
  },
  benifitsContainer: {
    width: "100%",
  },
  blurView: {
    borderRadius: 20,
    height: "120%",
    marginBottom: "5%",
    overflow: "hidden",
    borderColor: "white",
    borderWidth: 0.5,
  },
  container: {
    flex: 1,
  },
  customTitle: {
    fontWeight: Platform.OS === "android" ? "normal" : "700",
    fontFamily: "Helvetica",
    color: "black",
  },
  description: {
    color: "grey",
    marginTop: verticalScale(10),
    textAlign: "center",
  },
  investNature: {
    alignItems: "flex-start",
    justifyContent: "center",
  },
  listImage: {
    borderRadius: moderateScale(15),
  },
  listImageContainer: {
    height: verticalScale(200),
  },
  listItems: {
    marginTop: verticalScale(20),
    borderRadius: moderateScale(15),
    paddingVertical: verticalScale(20),
    paddingHorizontal: horizontalScale(14),
    backgroundColor: "white",
    width: "100%",
    alignItems: "center",
  },
  mainContainer: {
    paddingHorizontal: horizontalScale(25),
    paddingVertical: verticalScale(25),
  },
  priceSub: {
    fontSize: moderateScale(30),
    fontWeight: "bold",
  },
  tabletImageTextContainer: {
    flex: 1,
    flexDirection: "row",

    justifyContent: "space-evenly",
  },
  tags: {
    color: "grey",
  },
  tagsContainer: {
    backgroundColor: "#f3f5f5",
    borderRadius: moderateScale(10),
    marginLeft: horizontalScale(10),
    marginTop: verticalScale(10),
    paddingVertical: verticalScale(5),
    paddingHorizontal: horizontalScale(10),
  },
  AppText: {
    fontWeight: "bold",
    textAlign: "center",
    color: "black",
  },
  textSub: {
    fontWeight: "bold",
    textAlign: "left",
    color: "black",
  },
  title: {
    fontSize: moderateScale(30),
    fontWeight: "bold",
    lineHeight: verticalScale(30),
    width: "70%",
  },
  tree: {
    fontWeight: "bold",
  },
  treeContainer: {
    alignItems: "center",
    marginVertical: verticalScale(20),
  },
  subTitle: {
    flexDirection: "row",
    marginTop: verticalScale(10),
  },
  subContainer: {
    marginTop: verticalScale(20),
    borderRadius: moderateScale(15),
    paddingVertical: verticalScale(20),
    paddingHorizontal: horizontalScale(20),
    backgroundColor: "white",
    width: "100%",
  },
  subTitleText: {
    flex: 1,
    fontWeight: "bold",
  },
  subTitlePrice: {
    flex: 1,
    alignItems: "flex-end",
  },

  NavBarBottom: {
    marginTop: "3%",
    flexDirection: "row",
    width: "85%",
    justifyContent: "space-around",
    marginLeft: "7.5%",
  },

  NavBarBottomText: {
    fontSize: GlobalStyles.NavBarBottomText.fontSize,
    fontWeight: GlobalStyles.NavBarBottomText.fontWeight,
    color: GlobalStyles.NavBarBottomText.fontColor,
  },

  titleText: {
    fontSize: GlobalStyles.Title.fontSize,
    fontWeight: GlobalStyles.Title.fontWeight,
    color: GlobalStyles.NavBarBottomText.fontColor,
  },

  doubleButtonDiv: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
  },
});

export default Carbon;
