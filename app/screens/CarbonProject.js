import React, { useEffect, useState, useContext } from "react";
import {
  Text,
  StyleSheet,
  Image,
  View,
  Pressable,
  ScrollView,
  ActivityIndicator,
  useWindowDimensions,
} from "react-native";
import AppText from "../components/Text";
import GlobalStyles from "../../GlobalStyles";
import apiCall from "../api/api";
import AuthContext from "../auth/context";
import Button from "../components/AppButton";
import LinearAccountButton from "../components/LinearAccountButton";
import colors from "../config/colors";

import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from "../config/metrics";
import * as Device from "expo-device";

const CarbonProject = ({ navigation, route }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const { darkMode, setCart, cart } = useContext(AuthContext);
  const [count, setCount] = useState(cart.length);
  const [device, setDevice] = useState("");
  const { height, width } = useWindowDimensions();
  const [project, setProjects] = useState([]);

  useEffect(() => {
    loadData();
  }, []);
  useEffect(() => {
    const deviceType = async () => {
      const deviceSize = await Device.getDeviceTypeAsync();

      setDevice(deviceSize);
    };
    deviceType();
  }, [height, width]);
  const loadData = async () => {
    setIsLoading(true);
    const response = await apiCall.GetSingleProject(route.params.Id);
    setIsLoading(false);
    setData(response);
  };
  const incrementCart = (item) => {
    let incCount = cart.length;
    setCount((incCount += 1));
    const incrementProject = {
      id: data.id,
      displayName: data.displayName,
      price: data.asset.displayAssetPriceWithMarkup,
    };
    console.log(incrementProject);
    setCart([...cart, incrementProject]);
  };
  let projects = [];

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
  const goToBasket = () => {
    navigation.navigate("CarbonCart", cart);
  };

  const formatData = () => {
    if (data != null) {
      projects.push(
        <View
          key={data.id}
          style={
            darkMode === "DARK"
              ? styles.darkrectanglePressable
              : styles.rectanglePressable
          }
        >
          {/* <View style={styles.mainContainer}>
            
          </View> */}

          <Image
            style={[styles.image, { borderRadius: data.image ? 15 : 0 }]}
            source={
              data.image != ""
                ? { uri: data.image }
                : require("../assets/BearWithUs.png")
            }
          />
          {/* <View style={styles.titleTextRow}>
            <Text style={styles.titleText}>{data.displayName}</Text>
          </View> */}
          <View style={styles.subTitle}>
            <View style={styles.subTitleText}>
              <AppText
                style={
                  darkMode === "DARK" ? styles.darktextSub : styles.textSub
                }
              >
                {data.displayName}
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
                £{data.asset.displayAssetPriceWithMarkup.toFixed(2)}
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
                      data.asset.type == "LAND" ? "none" : "capitalize",
                  },
                ]}
              >
                /{data.asset.type == "LAND" ? "tCO\u2082e" : data.asset.type}
              </AppText>
            </View>
          </View>
          <View
            style={{
              backgroundColor: darkMode === "DARK" ? "transparent" : "white",
            }}
          >
            <Text
              style={{
                textAlign: "left",
                marginVertical: "5%",
                color: darkMode === "DARK" ? "white" : "black",
                fontFamily: "Montserrat-Regular",
                fontSize: 14,
              }}
            >
              {data.description.replace(/<[^>]*>/g, " ")}
            </Text>
          </View>
          <View style={{ width: "100%" }}>
            <LinearAccountButton
              disabled={true}
              counter={true}
              style={{ width: "49%", height: device == 1 ? 50 : 55 }}
              title="ADD TO CART"
              // onPress={() => addToCart(item)}
              onPress={() => incrementCart()}
              darkMode={darkMode}
            />
          </View>
        </View>
      );
    }
  };

  formatData();

  return (
    <View style={darkMode === "DARK" ? styles.darkmainPage : styles.mainPage}>
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
      <ScrollView style={styles.page}>{projects}</ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  rectanglePressable: {
    marginTop: verticalScale(20),
    borderRadius: moderateScale(15),
    paddingVertical: verticalScale(20),
    paddingHorizontal: horizontalScale(14),
    backgroundColor: "white",
    width: "100%",
    alignItems: "center",
  },
  darkrectanglePressable: {
    marginTop: verticalScale(20),
    borderRadius: moderateScale(15),
    paddingVertical: verticalScale(20),
    paddingHorizontal: horizontalScale(14),
    backgroundColor: "rgba(255,255,255,0.2)",
    width: "100%",
    alignItems: "center",
  },
  titleText: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 30,
  },
  page: {
    width: "90%",
    left: "5%",
    color: "black",
    height: "auto",
    borderWidth: 0,
    borderColor: "black",
    borderRadius: 25,
  },
  image: {
    flex: 1,
    width: "100%",
    height: 200,
    marginBottom: "5%",
    marginTop: "5%",
    resizeMode: "contain",
  },
  textBox: {
    backgroundColor: "red",
  },
  mainPage: {
    backgroundColor: GlobalStyles.DivContainer.backgroundColor,
    width: "100%",
    flex: 1,
  },
  darkmainPage: {
    backgroundColor: GlobalStyles.Color.darkTheme_bg,
    width: "100%",
    flex: 1,
  },
  mainContainer: {
    height: GlobalStyles.DivContainer.height,
    width: "100%",
    flex: GlobalStyles.DivContainer.flex,
  },

  titleTextRow: {
    width: GlobalStyles.DivContainer.width,
    marginLeft: GlobalStyles.DivContainer.marginLeft,
  },

  titleText: {
    fontSize: GlobalStyles.Title.fontSize,
    fontWeight: GlobalStyles.Title.fontWeight,
  },
  subTitle: {
    flexDirection: "row",
    marginTop: verticalScale(10),
  },
  subTitleText: {
    flex: 2,
    fontWeight: "bold",
  },
  subTitlePrice: {
    flex: 1,
    alignItems: "flex-end",
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
  priceSub: {
    fontSize: 16,
    fontFamily: "Montserrat",
  },
});

export default CarbonProject;
