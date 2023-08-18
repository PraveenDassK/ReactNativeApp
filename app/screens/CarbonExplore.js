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
import LinearAccountButton from "../components/LinearAccountButton";

const CarbonExplore = ({ route, navigation }) => {
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
  };

  const incrementCart = (item) => {
    let incCount = cart.length;
    setCount((incCount += 1));
    const incrementProject = projects.find((project) => project.id == item.id);
    console.log(incrementProject,"this is projects")
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
  return (
    <SafeAreaView>
      <View
        style={
          darkMode === "DARK" ? styles.darkmainContainer : styles.mainContainer
        }
      >
        {cart && cart.length ? (
          <Pressable
            style={{ position: "absolute", zIndex: 5, bottom: 50, right: 0 }}
            onPress={goToBasket}
          >
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                width: device == 1 ? 20 : 30,
                height: device == 1 ? 20 : 30,
                borderRadius: device == 1 ? 10 : 15,
                backgroundColor: colors.danger,
                position: "absolute",
                zIndex: 5,
                top: 25,
                right: device == 1 ? 30 : 85,
              }}
            >
              <AppText>{count}</AppText>
            </View>
            <Image
              resizeMode="contain"
              style={{
                width: horizontalScale(120),
                height: verticalScale(120),
              }}
              source={require("../assets/ShoppingIcon.png")}
            />
          </Pressable>
        ) : null}
        <FlatList
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
          ListHeaderComponent={
            <View>
              <ImageBackground
                source={
                  darkMode === "DARK"
                    ? require("../assets/dashboardDark/dashboardTop.jpg")
                    : require("../assets/dashboardDark/dashboardTop.jpg")
                }
                style={styles.backgroundImage}
              />
              {/* <View style={styles.titleTextRow}>
                <AppText
                  style={[
                    styles.titleText,
                    { lineHeight: 30 },
                    styles.customTitle,
                  ]}
                >
                  Remove Carbon,
                </AppText>
                <AppText
                  style={[
                    styles.titleText,
                    { lineHeight: 30 },
                    styles.customTitle,
                  ]}
                >
                  Restore Nature
                </AppText>
              </View> */}
              {/* <FadeInView>
                <View style={styles.treeContainer}>
                  <Image
                    style={styles.treeImage}
                    resizeMode="contain"
                    source={require("../assets/leafTree.png")}
                  />
                </View>
              </FadeInView> */}
              {/* <AppText>
                At Carbonyte we help you to track, reduce and calvulate your C0<AppText style={{fontSize: 15, lineHeight: 37}}>2</AppText>emission from your daily transcation
            </AppText> */}
              {/* 
              <Button
                title="CALCULATE CARBON FOOTPRINT"
                color="white"
                textColor="black"
                style={[{ height: device == 1 ? 50 : 55 }]}
                onPress={() => navigation.navigate("CarbonTonnesRemoved")}
              />
              <View style={styles.subContainer}>
                <AppText numberOflines={3} style={styles.AppText}>
                  At Carbonyte we help you track, reduce and calculate your C0
                  {"\u2082"}
                  emission from your daily transaction
                </AppText>
              </View> */}
              <View
                style={[
                  darkMode === "DARK" ? styles.darksubTitle1 : styles.subTitle1,
                  {
                    marginTop: verticalScale(-100),
                    paddingVertical: "5%",
                    paddingHorizontal: "10%",
                    gap: 10,
                  },
                ]}
              >
                <View style={styles.investNature}>
                  <AppText style={[styles.titleText, styles.customTitle]}>
                    Invest in Nature
                  </AppText>
                </View>
                <View>
                  <Image
                    resizeMode="contain"
                    style={{
                      width: horizontalScale(120),
                      height: verticalScale(120),
                    }}
                    source={require("../assets/image-twotrees.png")}
                  />
                </View>
                <View>
                  <LinearAccountButton
                    title="VISIT YOUR VIRTUAL FOREST"
                    onPress={() => navigation.navigate("VirtualEcoSystem")}
                    darkMode={darkMode}
                  />
                  <View>
                    <AppText
                      style={
                        darkMode === "DARK"
                          ? styles.darkdescription
                          : styles.description
                      }
                    >
                      Remove your carbon footprint and restore nature in seconds
                      with our revolutionary instant purchase platform. Just
                      choose what you want to balance - personal, business or
                      travel impact - then go climate positive
                    </AppText>
                    <AppText
                      style={
                        darkMode === "DARK"
                          ? styles.darkdescription
                          : styles.description
                      }
                    >
                      We only profile high-quality projects that meet our
                      minimum standards in relation to carbon + biodiversity +
                      social benefits
                    </AppText>
                  </View>
                </View>

                {/* {cart && cart.length ? (
                  <Button
                    color="white"
                    textColor="black"
                    title="Visit Your Cart"
                    style={[{ height: device == 1 ? 50 : 55 }]}
                    onPress={() => navigation.navigate("CarbonCart", cart)}
                  />
                ) : (
                  <Button
                    title="Visit Your Cart"
                    style={styles.boxShadow}
                    onPress={() =>
                      alert(
                        "Your cart is empty, please add some items to your basket"
                      )
                    }
                  />
                )} */}
              </View>
              {/* <View style={{ marginTop: verticalScale(20) }}>
                <View style={styles.doubleButtonDiv}>
                  <LargeButton
                    style={{
                      width: "49%",
                      borderColor: "#D8EBF9",
                      borderWidth: horizontalScale(1.5),
                    }}
                    title="VISIT YOUR VIRTUAL FOREST"
                    fontColor={{ color: "blue" }}
                    onPress={() => navigation.navigate("VirtualEcoSystem")}
                  />
                  <LargeButton
                    style={{
                      width: "49%",
                      borderColor: "#D8EBF9",
                      borderWidth: horizontalScale(1.5),
                    }}
                    title="VISIT YOUR ECO SUMMARY"
                    fontColor={{ color: "blue" }}
                    onPress={() => navigation.navigate("ChooseCardsStandard5")}
                  />
                </View>
              </View> */}

              <AppText
                style={[
                  darkMode === "DARK" ? styles.darktextSub1 : styles.textSub1,
                  { marginTop: verticalScale(50), marginLeft: "6%" },
                ]}
              >
                Select your project
              </AppText>
            </View>
          }
          data={data}
          keyExtractor={(data) => data.id.toString()}
          renderItem={({ item, index }) => (
            <View style={{ paddingHorizontal: "5%" }}>
              <View
                style={[
                  darkMode === "DARK" ? styles.darklistItems : styles.listItems,
                ]}
              >
                {device == 1 ? (
                  <>
                    <Image
                      resizeMode={item.image !== "" ? "contain" : "contain"}
                      style={[
                        styles.listImage,
                        {
                          width: horizontalScale(300),
                          height: verticalScale(180),
                          resizeMode: "stretch",
                        },
                      ]}
                      source={
                        item.image != ""
                          ? { uri: item.image }
                          : require("../assets/BearWithUs.png")
                      }
                    />
                    <View
                      style={{
                        paddingHorizontal: "10%",
                        paddingVertical: "3%",
                      }}
                    >
                      <View style={styles.subTitle}>
                        <View style={styles.subTitleText}>
                          <AppText
                            style={
                              darkMode === "DARK"
                                ? styles.darktextSub
                                : styles.textSub
                            }
                          >
                            {item.displayName}
                          </AppText>
                        </View>
                        <View style={styles.subTitlePrice}>
                          <AppText
                            style={[
                              styles.priceSub,
                              {
                                color:
                                  darkMode === "DARK"
                                    ? GlobalStyles.Color.skyblue
                                    : "black",
                              },
                            ]}
                          >
                            £{item.asset.displayAssetPriceWithMarkup.toFixed(2)}
                          </AppText>
                          <AppText
                            style={[
                              styles.tree,
                              {
                                color:
                                  darkMode === "DARK"
                                    ? GlobalStyles.Color.skyblue
                                    : "black",
                                textTransform:
                                  item.asset.type == "LAND"
                                    ? "none"
                                    : "capitalize",
                              },
                            ]}
                          >
                            /
                            {item.asset.type == "LAND"
                              ? "tCO\u2082e"
                              : item.asset.type}
                          </AppText>
                        </View>
                      </View>
                      <View style={{ width: "100%", alignItems: "flex-start" }}>
                        <AppText
                          style={
                            darkMode === "DARK"
                              ? styles.darkdescription
                              : styles.description
                          }
                        >
                          {item.description
                            .replace(/<[^>]*>/g, "")
                            .substring(0, 200)
                            .trim()}
                          ...
                          <Text
                            style={{
                              fontFamily: "Montserrat-Regular",
                              fontSize: 14,
                              color: GlobalStyles.Color.skyblue,
                              marginLeft: "2%",
                            }}
                            onPress={() =>
                              navigation.navigate("CarbonProject", {
                                Id: item.id,
                              })
                            }
                          >
                            ReadMore
                          </Text>
                        </AppText>
                      </View>
                    </View>
                  </>
                ) : (
                  <>
                    <View style={styles.tabletImageTextContainer}>
                      <View style={{ flex: 1 }}>
                        <Image
                          resizeMode={item.image !== "" ? "contain" : "contain"}
                          style={[
                            styles.listImage,
                            {
                              width: horizontalScale(140),
                              height: verticalScale(180),
                              resizeMode: "stretch",
                            },
                          ]}
                          source={
                            item.image != ""
                              ? { uri: item.image }
                              : require("../assets/BearWithUs.png")
                          }
                        />
                      </View>
                      <View style={{ flex: 1, alignItems: "flex-start" }}>
                        <AppText>
                          {item.description
                            .replace(/<[^>]*>/g, "")
                            .substring(0, 650)
                            .trim()}
                          ...
                        </AppText>
                      </View>
                    </View>

                    <View style={styles.subTitle}>
                      <View style={styles.subTitleText}>
                        <AppText style={styles.textSub}>
                          {item.displayName}
                        </AppText>
                      </View>
                      <View style={styles.subTitlePrice}>
                        <AppText style={[styles.priceSub, { color: "black" }]}>
                          £{item.asset.displayAssetPriceWithMarkup.toFixed(2)}
                        </AppText>
                        <AppText
                          style={[
                            styles.tree,
                            {
                              color: "black",
                              textTransform:
                                item.asset.type == "LAND"
                                  ? "none"
                                  : "capitalize",
                            },
                          ]}
                        >
                          /
                          {item.asset.type == "LAND"
                            ? "tCO\u2082e"
                            : item.asset.type}
                        </AppText>
                      </View>
                    </View>
                  </>
                )}

                <View style={{ width: "80%", paddingVertical: "3%" }}>
                  <LinearAccountButton
                    disabled={true}
                    counter={true}
                    style={{ width: "49%", height: device == 1 ? 50 : 55 }}
                    title="ADD TO CART"
                    // onPress={() => addToCart(item)}
                    onDelete={() => decrementCart(item, index)}
                    onPress={() => incrementCart(item, index)}
                    darkMode={darkMode}
                  />
                  {/* <Button
                    style={{ width: "49%", height: device == 1 ? 50 : 55 }}
                    title="Learn More"
                    onPress={() =>
                      navigation.navigate("CarbonProject", { Id: item.id })
                    }
                  /> */}
                </View>

                {/* <View style={styles.benifitsContainer}>
                  {item.tags.length ? (
                    <View>
                      <AppText style={[styles.tags, styles.tree]}>
                        Co-benefits
                      </AppText>
                    </View>
                  ) : null}
                  <View style={{ flexWrap: "wrap", flexDirection: "row" }}>
                    {item.tags.map((tag, index) => (
                      <View
                        key={index}
                        style={
                          index !== 0
                            ? styles.tagsContainer
                            : [
                                styles.tagsContainer,
                                { marginLeft: horizontalScale(0) },
                              ]
                        }
                      >
                        <Pressable onPress={() => copyToClipboard(tag)}>
                          <AppText style={styles.tags}>{tag}</AppText>
                        </Pressable>
                      </View>
                    ))}
                  </View>
                </View> */}
              </View>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default CarbonExplore;

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
    backgroundColor: "rgba(255,255,255,0.5)",
    borderRadius: 20,
    height: "120%",
    marginBottom: "5%",
    overflow: "hidden",
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
    color: GlobalStyles.Color.black,
    marginTop: verticalScale(10),
    textAlign: "left",
    fontFamily: "Montserrat-Regular",
    fontSize: 14,
  },
  darkdescription: {
    color: GlobalStyles.Color.white,
    marginTop: verticalScale(10),
    textAlign: "left",
    fontFamily: "Montserrat-Regular",
    fontSize: 14,
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
    // paddingHorizontal: horizontalScale(14),
    backgroundColor: "white",
    width: "100%",
    alignItems: "center",
  },
  darklistItems: {
    marginTop: verticalScale(20),
    borderRadius: moderateScale(15),
    paddingVertical: verticalScale(20),
    // paddingHorizontal: horizontalScale(14),
    backgroundColor: "rgba(255,255,255,0.2)",
    width: "100%",
    alignItems: "center",
  },
  mainContainer: {
    // paddingHorizontal: "20%",
    // paddingVertical: verticalScale(25),
    // zIndex: 10,
  },
  darkmainContainer: {
    backgroundColor: GlobalStyles.Color.darkTheme_bg,
  },
  priceSub: {
    fontSize: 16,
    fontFamily: "Montserrat",
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
    fontFamily: "Montserrat",
    fontSize: 14,
    color: "black",
  },
  darktextSub: {
    color: GlobalStyles.Color.white,
    fontFamily: "Montserrat",
    fontSize: 14,
  },
  textSub1: {
    fontFamily: "Montserrat",
    fontSize: 20,
    color: "black",
  },
  darktextSub1: {
    color: GlobalStyles.Color.white,
    fontFamily: "Montserrat",
    fontSize: 20,
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
  subTitle1: {
    flexDirection: "column",
    // top: "15%",
    // position: "absolute",
    marginTop: 0,
    alignItems: "center",
    backgroundColor: GlobalStyles.Color.white,
    marginHorizontal: "5%",
    borderRadius: 20,
  },
  darksubTitle1: {
    flexDirection: "column",
    // top: "15%",
    // position: "absolute",
    marginTop: 0,
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255,0.3)",
    marginHorizontal: "5%",
    borderRadius: 20,
    borderColor: GlobalStyles.Color.white,
    borderWidth: 0.3,
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
    flex: 2,
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
    fontSize: 26,
    color: GlobalStyles.Color.darkTheme_bg,
    fontFamily: "Montserrat-SemiBold",
  },

  doubleButtonDiv: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
  },
  backgroundImage: {
    height: 270,
    width: "100%",
  },
});
