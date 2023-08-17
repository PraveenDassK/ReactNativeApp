import React, { useContext, useEffect, useState } from "react";
//import * as React from "react";
import {
  Text,
  StyleSheet,
  View,
  Pressable,
  Image,
  ImageBackground,
  Dimensions,
} from "react-native";
import Screen from "../components/Screen";
import AuthContext from "../auth/context";
import GlobalStyles from "../../GlobalStyles";
import api from "../api/api_list";
import Tagline from "../components/Tagline";
let height = Dimensions.get("window").height;
const smallDevice = { height: 650 };
const isSmallDevice = height < smallDevice.height;
const ReplaceCard = ({ navigation }) =>
  //Comment
  // const cardName = "Carbonyte Standard - 7761"
  {
    const [cardname, setCardname] = useState(null);
    const authContext = useContext(AuthContext);
    const { darkMode } = useContext(AuthContext);
    //Calls the API once during load
    useEffect(() => {
      const unsubscribe = navigation.addListener("focus", () => {
        loadData();
      });
    }, []);
    const loadData = async () => {
      setCardname(authContext.accountID);
    };

    const dataOfLost = [
      {
        name: "It was lost",
        navigate: () => navigation.navigate("ItWasLost"),
      },
      {
        name: "I was a victim of fraud or theft",
        navigate: () => navigation.navigate("IWasAVictimOfFraudOrThe"),
      },
      {
        name: "It’s damaged or doesn’t work",
        navigate: () => navigation.navigate("ItsDamagedOrDoesntWork"),
      },
    ];

    return (
      <ImageBackground
        source={
          darkMode === "DARK"
            ? require("../assets/dashboardDark/DashboardBottom.png")
            : require("../assets/backgrounds/replaceCard.jpg")
        }
        resizeMode="contain"
        imageStyle={{
          bottom: "-70%", // Whatever offset you want from the bottom
        }}
        style={{
          width: "100%",
          backgroundColor:
            darkMode === "DARK"
              ? GlobalStyles.Color.darkTheme_bg
              : GlobalStyles.Color.lightTheme_bg,
          flex: 1,
        }}
      >
        <View style={styles.replaceCard}>
          <View>
            <View
              style={
                darkMode === "DARK"
                  ? styles.darktopContainer
                  : styles.topContainer
              }
            >
              <Image
                style={styles.iconFeatherCreditCard}
                resizeMode="contain"
                source={require("../assets/cardLion.png")}
              />
              <View
                style={{
                  display: "flex",
                  gap: 10,
                  paddingBottom: 10,
                  justifyContent: "center",
                  alignItems: "baseline",
                }}
              >
                <Text
                  style={
                    darkMode === "DARK"
                      ? styles.darkhello1Color
                      : styles.hello1Color
                  }
                >
                  Business Elite
                </Text>
                <Text
                  style={
                    darkMode === "DARK"
                      ? styles.darktextAccount
                      : styles.textAccount
                  }
                >
                  {cardname}
                </Text>
              </View>
            </View>
            <Text style={darkMode === "DARK" ? styles.darktitle : styles.title}>
              Why do you need a new card?
            </Text>
            <Text style={styles.selectText}>Select the best option :</Text>

            {dataOfLost.map((eachValue, index) => {
              return (
                <Pressable
                  style={
                    darkMode === "DARK"
                      ? styles.darkbuttonStyle
                      : styles.buttonStyle
                  }
                  onPress={eachValue.navigate}
                  key={index}
                >
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between",
                      width: "100%",
                      padding: 10,
                    }}
                  >
                    <Text
                      style={
                        darkMode === "DARK"
                          ? styles.darklostTextColor
                          : styles.lostTextColor
                      }
                    >
                      {eachValue.name}
                    </Text>
                    <Image
                      resizeMode="contain"
                      style={{ height: 15, width: 15 }}
                      source={require("../assets/icon-featherchevronright.png")}
                    />
                  </View>
                </Pressable>
              );
            })}
          </View>
        </View>
        {/* <ImageBackground
          resizeMode="stretch"
          source={require("../assets/backgrounds/replaceCard.jpg")}
          style={styles.container}
        /> */}
        <Tagline darkMode={darkMode} />
      </ImageBackground>
    );
  };

const styles = StyleSheet.create({
  topContainer: {
    backgroundColor: GlobalStyles.Color.white,
    borderColor: "gray",
    padding: 10,
    display: "flex",
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    borderRadius: 10,
  },
  darktopContainer: {
    backgroundColor: "rgba(255,255,255,0.2)",
    borderColor: "white",
    borderWidth: 0.5,
    padding: 10,
    display: "flex",
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    borderRadius: 10,
  },
  title: {
    color: GlobalStyles.Color.lightBlack,
    fontFamily: "Montserrat",
    fontSize: 16,
    marginVertical: 15,
  },
  darktitle: {
    color: GlobalStyles.Color.white,
    fontFamily: "Montserrat",
    fontSize: 16,
    marginVertical: 15,
  },
  buttonStyle: {
    backgroundColor: GlobalStyles.Color.white,
    borderColor: "gray",
    padding: 5,
    display: "flex",
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    borderRadius: 10,
    marginVertical: 10,
  },
  darkbuttonStyle: {
    backgroundColor: "rgba(255,255,255,0.2)",
    borderColor: "white",
    borderWidth: 0.5,
    padding: 5,
    display: "flex",
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    borderRadius: 10,
    marginVertical: 10,
  },
  lostTextColor: {
    color: GlobalStyles.Color.gray_1300,
    fontFamily: "Montserrat",
    fontSize: 16,
  },
  darklostTextColor: {
    color: GlobalStyles.Color.white,
    fontFamily: "Montserrat",
    fontSize: 16,
  },
  selectText: {
    color: GlobalStyles.Color.gray_2100,
    fontFamily: "Montserrat",
    fontSize: 14,
  },

  hello1Color: {
    color: GlobalStyles.Color.black,
    fontFamily: "Montserrat",
    fontSize: 16,
  },
  darkhello1Color: {
    color: GlobalStyles.Color.white,
    fontFamily: "Montserrat",
    fontSize: 16,
  },
  textAccount: {
    color: GlobalStyles.Color.black,
    fontFamily: "Montserrat",
    fontSize: 16,
  },
  darktextAccount: {
    color: GlobalStyles.Color.white,
    fontFamily: "Montserrat",
    fontSize: 16,
  },
  iconFeatherCreditCard: {
    width: 50,
    height: 50,
  },

  replaceCard: {
    flex: 1,
    width: "100%",
    paddingLeft: GlobalStyles.Padding.padding_7xs,
    paddingTop: isSmallDevice ? 3 : GlobalStyles.Padding.padding_xl,
    paddingRight: GlobalStyles.Padding.padding_8xs,
    // backgroundColor: GlobalStyles.Color.gray_100,
  },
  container: {
    width: "100%",
    // height: isSmallDevice ? height / 3 : height / 2.6,
    // position: "absolute",
    bottom: 0,
    zIndex: 0,
  },
  bottomText: {
    color: GlobalStyles.Color.white,
    fontSize: 14,
    fontFamily: "Montserrat-Regular",
  },
  bottomTextBold: {
    color: GlobalStyles.Color.white,
    fontSize: 16,
    fontFamily: "Montserrat",
  },
});

export default ReplaceCard;
