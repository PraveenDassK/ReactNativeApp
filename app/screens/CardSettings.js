import React, { useContext, useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  Pressable,
  Switch,
  ScrollView,
  ActivityIndicator,
  ImageBackground,
  Text,
} from "react-native";
import GlobalStyles from "../../GlobalStyles";
import AuthContext from "../auth/context";
import { useFocusEffect } from "@react-navigation/native";
import Tagline from "../components/Tagline";
import apiSettings from "../api/apiSettings";
import AppText from "../components/Text";
import terminateCardAlert from "../utility/terminateCardAlert";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import SwipePaymentsImage from "../assets/CardsettingsIcons/swipecarddark.svg";
import ATMwidthdrawal from "../assets/CardsettingsIcons/ATM.svg";
import Contactless from "../assets/CardsettingsIcons/Contactless.svg";
import ReplaceCard from "../assets/CardsettingsIcons/Replacecard.svg";
const CardSettings = ({ navigation, route }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isEnabled, setIsEnabled] = useState(false);
  const [isEnabled1, setIsEnabled1] = useState(false);
  const [isEnabled2, setIsEnabled2] = useState(false);
  const [isEnabled3, setIsEnabled3] = useState(false);

  let routeObj = route.params;
  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState);
    sendRequest();
  };

  const toggleSwitch1 = () => {
    setIsEnabled1((previousState) => !previousState);
    sendRequest();
  };
  const toggleSwitch2 = () => {
    setIsEnabled2((previousState) => !previousState);
    sendRequest();
  };
  const toggleSwitch3 = () => {
    setIsEnabled3((previousState) => !previousState);
    sendRequest();
  };
  const authContext = useContext(AuthContext);
  const { darkMode } = useContext(AuthContext);
  useEffect(() => {
    getSettings();
  }, []);

  //Calls the API once during load
  useFocusEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      getSettings();
    });
  });

  const getSettings = async () => {
    setIsLoading(true);
    try {
      const cardSettings = await apiSettings.GetSettings(authContext.accountID);

      const data = cardSettings;

      data.onlineTransactions ? setIsEnabled(true) : null;
      data.swipePayments ? setIsEnabled1(true) : null;
      data.atmWithdrawals ? setIsEnabled2(true) : null;
      data.contactlessPayments ? setIsEnabled3(true) : null;
      setIsLoading(false);
    } catch {
      setIsLoading(false);
    }
    setIsLoading(false);
  };

  const sendRequest = async () => {
    setIsLoading(true);

    try {
      const response = await apiSettings.SetToggles(
        authContext.accountID,
        isEnabled,
        isEnabled1,
        isEnabled2,
        isEnabled3
      );

      setIsLoading(false);
    } catch {
      setIsLoading(false);
    }
  };

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
    <ImageBackground
      source={
        darkMode === "DARK"
          ? require("../assets/backgrounds/cardsettings-dark.jpg")
          : require("../assets/backgrounds/cardsettings.jpg")
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
      }}
    >
      <ScrollView>
        <View
          style={
            darkMode === "DARK"
              ? styles.darkmainContainer
              : styles.mainContainer
          }
        >
          {/* <View style={styles.titleTextRow}>
          <AppText style={styles.titleText}>Settings</AppText>
        </View> */}
          <Pressable
            style={[styles.boxShadow]}
            onPress={() => navigation.navigate("viewpin", routeObj)}
          >
            <View
              style={[
                {
                  width: "90%",
                  marginLeft: "5%",
                  borderRadius: 15,
                  marginTop: "5%",
                  backgroundColor:
                    darkMode === "DARK"
                      ? "rgba(255,255,255,0.2)"
                      : GlobalStyles.Color.white,
                  // height: 60,
                  paddingVertical: "5%",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  borderColor:
                    darkMode === "DARK" ? GlobalStyles.Color.white : null,
                  borderWidth: darkMode === "DARK" ? 0.3 : 0,
                },
              ]}
            >
              {/* <Image
              style={{
                height: "60%",
                resizeMode: "contain",
                flex: 1,
                alignSelf: "center",
                marginLeft: "5%",
              }}
              source={require("../assets/newAssets/reset.png")}
            /> */}
              <View style={{ marginLeft: "5%" }}>
                <FontAwesome
                  name="lock"
                  size={24}
                  color={
                    darkMode === "DARK"
                      ? GlobalStyles.Color.white
                      : GlobalStyles.Color.secondaryDarkTheme_bg
                  }
                />
              </View>
              <View
                style={{
                  flex: 9,
                  justifyContent: "center",
                  marginLeft: "2.5%",
                }}
              >
                <AppText
                  style={
                    darkMode === "DARK"
                      ? styles.darkcardHeading
                      : styles.cardHeading
                  }
                >
                  View Pin
                </AppText>
                <AppText
                  style={
                    darkMode === "DARK"
                      ? styles.darkcardSubHeading
                      : styles.cardSubHeading
                  }
                >
                  View your security PIN number
                </AppText>
              </View>
            </View>
          </Pressable>

          <Pressable
            style={[styles.boxShadow]}
            onPress={() => navigation.navigate("SpendingLimit")}
          >
            <View
              style={[
                {
                  width: "90%",
                  marginLeft: "5%",
                  borderRadius: 15,
                  marginTop: "5%",
                  backgroundColor:
                    darkMode === "DARK"
                      ? "rgba(255,255,255,0.2)"
                      : GlobalStyles.Color.white,
                  // height: 60,
                  paddingVertical: "5%",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  borderColor:
                    darkMode === "DARK" ? GlobalStyles.Color.white : null,
                  borderWidth: darkMode === "DARK" ? 0.3 : 0,
                },
              ]}
            >
              {/* <Image
              style={{
                height: "60%",
                resizeMode: "contain",
                flex: 1,
                alignSelf: "center",
                marginLeft: "5%",
              }}
              source={require("../assets/newAssets/meter.png")}
            /> */}
              <View style={{ marginLeft: "5%" }}>
                <SimpleLineIcons
                  name="speedometer"
                  size={24}
                  color={
                    darkMode === "DARK"
                      ? GlobalStyles.Color.white
                      : GlobalStyles.Color.secondaryDarkTheme_bg
                  }
                />
              </View>
              <View
                style={{
                  flex: 9,
                  justifyContent: "center",
                  marginLeft: "2.5%",
                }}
              >
                <AppText
                  style={
                    darkMode === "DARK"
                      ? styles.darkcardHeading
                      : styles.cardHeading
                  }
                >
                  Spending Limit
                </AppText>
                <AppText
                  style={
                    darkMode === "DARK"
                      ? styles.darkcardSubHeading
                      : styles.cardSubHeading
                  }
                >
                  Set you monthly spending limit
                </AppText>
              </View>
            </View>
          </Pressable>

          <AppText
            style={{
              marginLeft: "10%",
              marginTop: "5%",
              fontSize: 14,
              fontFamily: "Montserrat",
              color: GlobalStyles.Color.gray_2100,
            }}
          >
            Security
          </AppText>

          <View
            style={[
              {
                width: "90%",
                marginLeft: "5%",
                borderRadius: 15,
                marginTop: "5%",
                backgroundColor:
                  darkMode === "DARK"
                    ? "rgba(255,255,255,0.2)"
                    : GlobalStyles.Color.white,
                height: "auto",
                paddingRight: "2.5%",
                borderColor:
                  darkMode === "DARK" ? GlobalStyles.Color.white : null,
                borderWidth: darkMode === "DARK" ? 0.3 : 0,
              },
            ]}
          >
            <View
              style={{
                width: "100%",
                // height: 60,
                paddingVertical: "5%",
                borderRadius: 15,
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                // alignItems: "center",
              }}
            >
              {/* <Image
              style={{
                height: 22,
                resizeMode: "contain",
                flex: 1,
                alignSelf: "center",
                marginLeft: "5%",
              }}
              source={require("../assets/newAssets/globe.png")}
            /> */}
              <View style={{ marginLeft: "5%" }}>
                <Ionicons
                  name="ios-globe-outline"
                  size={24}
                  color={
                    darkMode === "DARK"
                      ? GlobalStyles.Color.white
                      : GlobalStyles.Color.secondaryDarkTheme_bg
                  }
                />
              </View>
              <View
                style={{
                  flex: 7,
                  justifyContent: "center",
                  marginLeft: "2.5%",
                }}
              >
                <AppText
                  style={
                    darkMode === "DARK"
                      ? styles.darkcardHeading
                      : styles.cardHeading
                  }
                >
                  Online Transactions
                </AppText>
                <AppText
                  style={
                    darkMode === "DARK"
                      ? styles.darkcardSubHeading
                      : styles.cardSubHeading
                  }
                >
                  Internet based transactions are generally high-risk. You can
                  switch them off for extra security. Payments you make using
                  mobile wallets like Apple Pay won’t be affected.
                </AppText>
              </View>
              <Switch
                trackColor={{
                  false:
                    darkMode === "DARK"
                      ? GlobalStyles.Color.darkTheme_bg
                      : GlobalStyles.Color.gray_600,
                  true: GlobalStyles.Color.blue_100,
                }}
                thumbColor={
                  isEnabled
                    ? "#f4f3f4"
                    : darkMode === "DARK"
                    ? GlobalStyles.Color.gray_1200
                    : "#f4f3f4"
                }
                onValueChange={toggleSwitch}
                value={isEnabled}
              />
            </View>

            <View
              style={[
                {
                  width: "100%",
                  // height: 60,
                  paddingVertical: "5%",
                  borderRadius: 15,
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                },
              ]}
            >
              {darkMode === "DARK" ? (
                <SwipePaymentsImage
                  style={{
                    height: "50%",
                    resizeMode: "contain",
                    // flex: 1,
                    alignSelf: "center",
                    marginLeft: "5%",
                  }}
                />
              ) : (
                <Image
                  style={{
                    height: "50%",
                    resizeMode: "contain",
                    // flex: 1,
                    alignSelf: "center",
                    marginLeft: "5%",
                  }}
                  source={require("../assets/newAssets/swipe-card.png")}
                />
              )}
              <View
                style={{
                  flex: 7,
                  justifyContent: "center",
                  marginLeft: "2.5%",
                }}
              >
                <AppText
                  style={
                    darkMode === "DARK"
                      ? styles.darkcardHeading
                      : styles.cardHeading
                  }
                >
                  Swipe Payments
                </AppText>
                <AppText
                  style={
                    darkMode === "DARK"
                      ? styles.darkcardSubHeading
                      : styles.cardSubHeading
                  }
                >
                  Sometimes cards can be cloned, you can turn of the magnetic
                  stripe here
                </AppText>
              </View>
              <Switch
                trackColor={{
                  false:
                    darkMode === "DARK"
                      ? GlobalStyles.Color.darkTheme_bg
                      : GlobalStyles.Color.gray_600,
                  true: GlobalStyles.Color.blue_100,
                }}
                thumbColor={
                  isEnabled
                    ? "#f4f3f4"
                    : darkMode === "DARK"
                    ? GlobalStyles.Color.gray_1200
                    : "#f4f3f4"
                }
                onValueChange={toggleSwitch1}
                value={isEnabled1}
              />
            </View>

            <View
              style={[
                {
                  width: "100%",
                  // height: 60,
                  paddingVertical: "5%",
                  borderRadius: 15,
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                },
              ]}
            >
              {darkMode === "DARK" ? (
                <ATMwidthdrawal
                  style={{
                    height: "50%",
                    resizeMode: "contain",
                    // flex: 1,
                    alignSelf: "center",
                    marginLeft: "5%",
                  }}
                />
              ) : (
                <Image
                  style={{
                    height: "50%",
                    resizeMode: "contain",
                    // flex: 1,
                    alignSelf: "center",
                    marginLeft: "5%",
                  }}
                  source={require("../assets/newAssets/ATM-withdrawals.png")}
                />
              )}
              <View
                style={{
                  flex: 7,
                  justifyContent: "center",
                  marginLeft: "2.5%",
                }}
              >
                <AppText
                  style={
                    darkMode === "DARK"
                      ? styles.darkcardHeading
                      : styles.cardHeading
                  }
                >
                  ATM Withdrawals
                </AppText>
                <AppText
                  style={
                    darkMode === "DARK"
                      ? styles.darkcardSubHeading
                      : styles.cardSubHeading
                  }
                >
                  Turn off ATM Withdrawals here
                </AppText>
              </View>
              <Switch
                trackColor={{
                  false:
                    darkMode === "DARK"
                      ? GlobalStyles.Color.darkTheme_bg
                      : GlobalStyles.Color.gray_600,
                  true: GlobalStyles.Color.blue_100,
                }}
                thumbColor={
                  isEnabled
                    ? "#f4f3f4"
                    : darkMode === "DARK"
                    ? GlobalStyles.Color.gray_1200
                    : "#f4f3f4"
                }
                onValueChange={toggleSwitch2}
                value={isEnabled2}
              />
            </View>

            <View
              style={[
                {
                  width: "100%",
                  // height: 60,
                  paddingVertical: "5%",
                  borderRadius: 15,
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                },
              ]}
            >
              {darkMode === "DARK" ? (
                <Contactless
                  style={{
                    height: "50%",
                    resizeMode: "contain",
                    // flex: 1,
                    alignSelf: "center",
                    marginLeft: "5%",
                  }}
                />
              ) : (
                <Image
                  style={{
                    height: "50%",
                    resizeMode: "contain",
                    // flex: 1,
                    alignSelf: "center",
                    marginLeft: "5%",
                  }}
                  source={require("../assets/newAssets/contactless.png")}
                />
              )}
              <View
                style={{
                  flex: 7,
                  justifyContent: "center",
                  marginLeft: "2.5%",
                }}
              >
                <AppText
                  style={
                    darkMode === "DARK"
                      ? styles.darkcardHeading
                      : styles.cardHeading
                  }
                >
                  Contactless Payments
                </AppText>
                <AppText
                  style={
                    darkMode === "DARK"
                      ? styles.darkcardSubHeading
                      : styles.cardSubHeading
                  }
                >
                  Turn off contactless functionality
                </AppText>
              </View>
              <Switch
                trackColor={{
                  false:
                    darkMode === "DARK"
                      ? GlobalStyles.Color.darkTheme_bg
                      : GlobalStyles.Color.gray_600,
                  true: GlobalStyles.Color.blue_100,
                }}
                thumbColor={
                  isEnabled
                    ? "#f4f3f4"
                    : darkMode === "DARK"
                    ? GlobalStyles.Color.gray_1200
                    : "#f4f3f4"
                }
                onValueChange={toggleSwitch3}
                value={isEnabled3}
              />
            </View>
          </View>

          <View
            style={[
              {
                width: "90%",
                marginLeft: "5%",
                borderRadius: 15,
                marginTop: "5%",
                backgroundColor:
                  darkMode === "DARK"
                    ? "rgba(255,255,255,0.2)"
                    : GlobalStyles.Color.white,
                height: "auto",
                borderColor:
                  darkMode === "DARK" ? GlobalStyles.Color.white : null,
                borderWidth: darkMode === "DARK" ? 0.3 : 0,
              },
            ]}
          >
            <Pressable onPress={() => navigation.navigate("ReplaceCard")}>
              <View
                style={{
                  width: "100%",
                  // height: 60,
                  // height: 60,
                  paddingVertical: "5%",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                {darkMode === "DARK" ? (
                  <ReplaceCard
                    style={{
                      height: "50%",
                      resizeMode: "contain",
                      // flex: 1,
                      alignSelf: "center",
                      marginLeft: "5%",
                    }}
                  />
                ) : (
                  <Image
                    style={{
                      height: "50%",
                      resizeMode: "contain",
                      // flex: 1,
                      alignSelf: "center",
                      marginLeft: "5%",
                    }}
                    source={require("../assets/newAssets/reset.png")}
                  />
                )}

                <View
                  style={{
                    flex: 9,
                    justifyContent: "center",
                    marginLeft: "2.5%",
                  }}
                >
                  <AppText
                    style={
                      darkMode === "DARK"
                        ? styles.darkcardHeading
                        : styles.cardHeading
                    }
                  >
                    Replace Card
                  </AppText>
                  <AppText
                    style={
                      darkMode === "DARK"
                        ? styles.darkcardSubHeading
                        : styles.cardSubHeading
                    }
                  >
                    Lost, Stolen, Not Delivered
                  </AppText>
                </View>
              </View>
            </Pressable>
            <Pressable
              onPress={() => navigation.navigate("Terminate", routeObj)}
            >
              <View
                style={{
                  width: "100%",
                  // height: 60,
                  paddingVertical: "5%",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                {/* <Image
                style={{
                  height: "60%",
                  resizeMode: "contain",
                  flex: 1,
                  alignSelf: "center",
                  marginLeft: "5%",
                }}
                source={require("../assets/newAssets/delete.png")}
              /> */}
                <View style={{ marginLeft: "5%" }}>
                  <MaterialCommunityIcons
                    name="delete"
                    size={24}
                    color={
                      darkMode === "DARK"
                        ? GlobalStyles.Color.white
                        : GlobalStyles.Color.secondaryDarkTheme_bg
                    }
                  />
                </View>
                <View
                  style={{
                    flex: 9,
                    justifyContent: "center",
                    marginLeft: "2.5%",
                  }}
                >
                  <AppText
                    style={
                      darkMode === "DARK"
                        ? styles.darkcardHeading
                        : styles.cardHeading
                    }
                  >
                    Terminate Card
                  </AppText>
                  <AppText
                    style={
                      darkMode === "DARK"
                        ? styles.darkcardSubHeading
                        : styles.cardSubHeading
                    }
                  >
                    This card will be permanently terminated
                  </AppText>
                </View>
              </View>
            </Pressable>
          </View>

          <Pressable
            style={[styles.groupChild]}
            onPress={() => navigation.navigate("Subscriptions")}
          >
            <View
              style={[
                {
                  width: "90%",
                  marginLeft: "5%",
                  borderRadius: 15,
                  marginTop: "5%",
                  backgroundColor:
                    darkMode === "DARK"
                      ? "rgba(255,255,255,0.2)"
                      : GlobalStyles.Color.white, // height: 60,
                  paddingVertical: "5%",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  borderColor:
                    darkMode === "DARK" ? GlobalStyles.Color.white : null,
                  borderWidth: darkMode === "DARK" ? 0.3 : 0,
                },
              ]}
            >
              <Image
                style={{
                  height: "50%",
                  resizeMode: "contain",
                  // flex: 1,
                  alignSelf: "center",
                  marginLeft: "5%",
                }}
                source={require("../assets/newAssets/upgrade.png")}
              />
              <View
                style={{
                  flex: 9,
                  justifyContent: "center",
                  marginLeft: "2.5%",
                }}
              >
                <AppText
                  style={
                    darkMode === "DARK"
                      ? styles.darkcardHeading
                      : styles.cardHeading
                  }
                >
                  Upgrade Card
                </AppText>
                <AppText
                  style={
                    darkMode === "DARK"
                      ? styles.darkcardSubHeading
                      : styles.cardSubHeading
                  }
                >
                  Upgrade your card plan
                </AppText>
              </View>
            </View>
          </Pressable>
        </View>
        <View style={{ marginTop: "10%" }}>
          <Tagline darkMode={darkMode} />
        </View>
        {/* <ImageBackground
          resizeMode="stretch"
          source={require("../assets/backgrounds/cardsettings.jpg")}
          style={styles.container}
        /> */}
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  boxShadow: {},
  mainContainer: {
    backgroundColor: GlobalStyles.DivContainer.backgroundColor,
    height: "auto",
    width: "100%",
    flex: GlobalStyles.DivContainer.flex,
    minHeight: 812,
  },
  darkmainContainer: {
    backgroundColor: GlobalStyles.DivContainer.darkTheme_bg,
    height: "auto",
    width: "100%",
    flex: GlobalStyles.DivContainer.flex,
    minHeight: 812,
  },

  titleTextRow: {
    marginTop: GlobalStyles.Title.marginTop,
    marginLeft: "5%",
    width: "90%",
  },

  titleText: {
    fontSize: GlobalStyles.Title.fontSize,
    fontWeight: GlobalStyles.Title.fontWeight,
  },
  cardHeading: {
    fontFamily: "Montserrat",
    color: GlobalStyles.Color.gray_1400,
    fontSize: 14,
  },
  darkcardHeading: {
    fontFamily: "Montserrat",
    color: GlobalStyles.Color.white,
    fontSize: 14,
  },
  cardSubHeading: {
    color: GlobalStyles.Color.gray_2100,
    fontFamily: "Montserrat-Regular",
    fontSize: 10,
  },
  darkcardSubHeading: {
    color: GlobalStyles.Color.white,
    fontFamily: "Montserrat-Regular",
    fontSize: 10,
  },
  container: {
    width: "100%",
    height: 250,
    // position: "absolute",
    bottom: 0,
    zIndex: 0,
  },
  bottomText: {
    color: GlobalStyles.Color.black,
    fontSize: 14,
    fontFamily: "Montserrat",
  },
  bottomTextBold: {
    color: GlobalStyles.Color.black,
    fontSize: 16,
    fontFamily: "Montserrat",
  },
});

export default CardSettings;
