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
} from "react-native";
import { format as prettyFormat } from "pretty-format"; //development only

import GlobalStyles from "../../GlobalStyles";

import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from "../config/metrics";
import apiCall from "../api/api";
import Button from "../components/AppButton";
import LargeButton from "../components/Button";
import Screen from "../components/Screen";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";

import FadeInView from "../components/fadeInview";
import AppText from "../components/Text";
import AuthContext from "../auth/context";
import * as Clipboard from "expo-clipboard";
import colors from "../config/colors";

const Carbon = ({ route, navigation }) => {
  const { userID, accountID, cart, setCart } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [refreshing, setRefreshing] = useState(false);
  const [count, setCount] = useState(cart.length);

  const [projects, setProjects] = useState([]);

  console.log("cart length", cart, cart.length);

  useEffect(() => {
    loadData();
  }, [accountID]);

  const loadData = async () => {
    setIsLoading(true);
    const response = await apiCall.GetProjectList();
    console.log("pretty\n", prettyFormat(response[0]));
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
    setCount((prevcount) => (prevcount += 1));
    const incrementProject = projects.find((project) => project.id == item.id);
    setCart([...cart, incrementProject]);
  };

  const decrementCart = (item) => {
    if (!cart.length) return Alert.alert("Add to Cart");

    const filteredProjects = cart.filter((project) => project.id !== item.id);
    const decrementedProjects = cart.filter((project) => project.id == item.id);

    if (decrementedProjects.length > 0) {
      setCount((prevcount) => (prevcount -= 1));
      decrementedProjects.pop();
      setCart([...filteredProjects, ...decrementedProjects]);
    } else {
      Alert.alert(`Add Project`);
    }
  };

  /**
   * @dev This function adds a project to the cart
   * @param {obj} ID The project object selected
   *
   *
   */
  const addToCart = (item) => {
    setCount((prevcount) => (prevcount += 1));
    //Check here if the project already exists
    const multipleChecker = cart.findIndex(
      (existingArr) => existingArr.projectId === item.id
    );

    if (multipleChecker === -1) {
      //If it dosen't exist already
      let arrobj = {
        projectId: item.id,
        name: item.displayName,
        price: item.asset.displayAssetPriceWithMarkup,
        quantity: 1,
      };
      setCart((prevArray) => [...prevArray, arrobj]);
    } else {
      //If the item already exists
      setCart((prevArray) =>
        prevArray.map((prev) => {
          if (prev.projectId === item.id) {
            return { ...prev, quantity: prev.quantity + 1 };
          }
          return item;
        })
      );
    }
  };

  const deleteToCart = (item) => {
    console.log("deleteItem", item);
    if (count > 0) setCount((prevcount) => (prevcount -= 1));
  };

  const copyToClipboard = async (copy) => {
    console.log("Copied", copy);
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

  const generateBoxShadowStyle = (
    xOffset,
    yOffset,
    shadowColorIos,
    shadowOpacity,
    shadowRadius,
    elevation,
    shadowColorAndroid
  ) => {
    if (Platform.OS === "ios") {
      styles.boxShadow = {
        shadowColor: shadowColorIos,
        shadowOffset: { width: xOffset, height: yOffset },
        shadowOpacity,
        shadowRadius,
      };
    } else if (Platform.OS === "android") {
      styles.boxShadow = {
        elevation,
        shadowColor: shadowColorAndroid,
      };
    }
  };

  generateBoxShadowStyle(-2, 4, "#171717", 0.2, 3, 4, "#171717");

  if (isLoading) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <ActivityIndicator size="large" color="black" />
      </View>
    );
  }

  return (
    <View style={styles.mainContainer}>
      {cart && cart.length ? (
        <Pressable
          style={{ position: "absolute", zIndex: 5, bottom: 0, right: 0 }}
          onPress={goToBasket}
        >
          <View style={styles.badgeContainer}>
            <AppText>{count}</AppText>
          </View>
          <Image
            resizeMode="contain"
            style={{ width: horizontalScale(120), height: verticalScale(120) }}
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
          <View style={styles.container}>
            <View style={styles.titleTextRow}>
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
            </View>
            <FadeInView>
              <View style={styles.treeContainer}>
                <Image
                  style={styles.treeImage}
                  resizeMode="contain"
                  source={require("../assets/leafTree.png")}
                />
              </View>
            </FadeInView>
            {/* <AppText>
                At Carbonyte we help you to track, reduce and calvulate your C0<AppText style={{fontSize: 15, lineHeight: 37}}>2</AppText>emission from your daily transcation
            </AppText> */}

            <Button
              title="CALCULATE CARBON FOOTPRINT"
              color="white"
              textColor="black"
              style={styles.boxShadow}
              onPress={() => navigation.navigate("CarbonTonnesRemoved")}
            />
            <View style={styles.subContainer}>
              <AppText numberOflines={3} style={styles.AppText}>
                At Carbonyte we help you track, reduce and calculate your C0
                {"\u2082"}
                emission from your daily transaction
              </AppText>
            </View>
            <View style={[styles.subTitle, { marginTop: verticalScale(40) }]}>
              <View style={styles.investNature}>
                <AppText style={[styles.titleText, styles.customTitle]}>
                  Invest in
                </AppText>
                <AppText style={[styles.titleText, styles.customTitle]}>
                  Nature
                </AppText>
              </View>
              <View
                style={{ alignItems: "flex-start", justifyContent: "center" }}
              >
                <Image
                  resizeMode="contain"
                  style={{
                    width: horizontalScale(120),
                    height: verticalScale(120),
                    marginLeft: horizontalScale(100),
                  }}
                  source={require("../assets/image-twotrees.png")}
                />
              </View>
            </View>
            <View style={{ marginTop: verticalScale(20) }}>
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
            </View>

            <View style={{ marginBottom: "5%", textAlign: "center" }}>
              <AppText style={styles.description}>
                Remove your carbon footprint and restore nature in seconds with
                our revolutionary instant purchase platform. Just choose what
                you want to balance - personal, business or travel impact - then
                go climate positive
              </AppText>
              <AppText style={styles.description}>
                We only profile high-quality projects that meet our minimum
                standards in relation to carbon + biodiversity + social benefits
              </AppText>
            </View>

            {cart && cart.length ? (
              <Button
                color="white"
                textColor="black"
                title="Visit Your Cart"
                style={styles.boxShadow}
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
            )}
            <AppText style={[styles.textSub, { marginTop: verticalScale(50) }]}>
              Select your project
            </AppText>
          </View>
        }
        data={data}
        keyExtractor={(data) => data.id.toString()}
        renderItem={({ item, index }) => (
          <View style={[styles.listItems, styles.boxShadow]}>
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

            <View style={styles.subTitle}>
              <View style={styles.subTitleText}>
                <AppText style={styles.textSub}>{item.displayName}</AppText>
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
                        item.asset.type == "LAND" ? "none" : "capitalize",
                    },
                  ]}
                >
                  /{item.asset.type == "LAND" ? "tCO\u2082e" : item.asset.type}
                </AppText>
              </View>
            </View>
            <View style={{ width: "100%", alignItems: "flex-start" }}>
              <AppText style={styles.description}>
                {item.description
                  .replace(/<[^>]*>/g, "")
                  .substring(0, 200)
                  .trim()}
                ...
              </AppText>
            </View>
            <View style={styles.doubleButtonDiv}>
              <Button
                disabled={true}
                counter={true}
                style={{ width: "49%" }}
                title="ADD TO CART"
                // onPress={() => addToCart(item)}
                onDelete={() => decrementCart(item, index)}
                onAdd={() => incrementCart(item, index)}
              />
              <Button
                style={{ width: "49%" }}
                title="Learn More"
                onPress={() =>
                  navigation.navigate("CarbonProject", { Id: item.id })
                }
              />
            </View>
            <View style={styles.benifitsContainer}>
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
            </View>
          </View>
        )}
      />
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
  container: {
    backgroundColor: "#f3f5f5",
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
  badgeContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: horizontalScale(20),
    height: verticalScale(20),
    borderRadius: moderateScale(10),
    backgroundColor: colors.danger,
    position: "absolute",
    zIndex: 5,
    top: 25,
    right: 30,
  },
});

export default Carbon;
