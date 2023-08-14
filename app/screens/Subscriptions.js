import React, { useEffect, useState, useContext } from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
  Pressable,
  ScrollView,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
  useWindowDimensions,
} from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import GlobalStyles from "../../GlobalStyles";
import {
  horizontalScale,
  verticalScale,
  moderateScale,
} from "../config/scaling";

import Button from "../components/AppButton";
import AuthContext from "../auth/context";

import apiCall from "../api/apiCall";
import PinModal from "../components/PinModal";
import { Alert } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Feather, Ionicons, AntDesign } from "@expo/vector-icons";

const Tab = createMaterialTopTabNavigator();

const BUSINESS_CARDS = [
  require("../assets/cards/Business01.png"),
  require("../assets/cards/Business02.png"),
  require("../assets/cards/Business03.png"),
];

const account = "147147";
const ChooseCardsElite = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(false);

  const [data, setData] = useState([]);
  const [currentSubscruption, setCurrentSubscription] = useState(null);
  const [change, setChange] = useState(false);

  const [showPinModal, setShowPinModal] = useState(false);
  const [subscriptionToChange, setSubscriptionToChange] = useState(null);
  const { customerDetails, darkMode } = useContext(AuthContext);
  const account = customerDetails;

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {}, [change]);

  const loadData = async () => {
    setIsLoading(true);
    const response = await apiCall.GetSubscriptions();
    setData(response);

    const currentSub = await apiCall.GetUsersSubscriptions("CC1");
    setCurrentSubscription(currentSub.subID);
    setIsLoading(false);
  };
  const changePlan = async () => {
    const Id = subscriptionToChange;
    const response = await Alert.alert(
      "",
      "Do you want to purchase this plan?",
      [
        {
          text: "No",
          onPress: () => setChange(false),
          style: "cancel",
        },
        {
          text: "Yes",
          onPress: async () => {
            setIsLoading(true);
            await apiCall.ChangeUsersSubscription("CC1", Id);
            loadData();
            setIsLoading(false);
            setShowPinModal(false);
          },
        },
      ]
    );

    if (change) {
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

  if (showPinModal) {
    return (
      <View style={styles.mainContainer}>
        {/* <RecentTransactions
        amount={10}
      /> */}
        {showPinModal ? (
          <PinModal title="Enter your PIN" success={() => changePlan()} />
        ) : null}
      </View>
    );
  }

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      {data.length !== 0 && (
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarActiveTintColor:
              darkMode === "DARK"
                ? GlobalStyles.Color.white
                : GlobalStyles.Color.black,
            tabBarInactiveTintColor:
              darkMode === "DARK"
                ? GlobalStyles.Color.darkGray
                : GlobalStyles.Color.gray_1000,
            tabBarStyle: {
              backgroundColor:
                darkMode === "DARK"
                  ? GlobalStyles.Color.darkTheme_bg
                  : GlobalStyles.Color.white,
            },
          })}
        >
          {data.map((item, index) => {
            return (
              <Tab.Screen key={`${item}-${index}`} name={`${item.title}`}>
                {() => (
                  <ScrollView>
                    <View
                      style={{
                        backgroundColor:
                          darkMode === "DARK"
                            ? GlobalStyles.Color.secondaryDarkTheme_bg
                            : null,
                      }}
                    >
                      <View style={styles.imageBox}>
                        <Image
                          style={styles.image}
                          source={BUSINESS_CARDS[index % BUSINESS_CARDS.length]}
                        />
                      </View>

                      <View style={styles.cardNameBox}>
                        <Text style={styles.cardTitle}>{item.title}</Text>
                        <Text
                          style={
                            darkMode === "DARK"
                              ? styles.darkcardPrice
                              : styles.cardPrice
                          }
                        >
                          £ {item.price} Per Month
                        </Text>
                      </View>

                      <View
                        style={
                          darkMode === "DARK"
                            ? styles.darkfeatureListBox
                            : styles.featureListBox
                        }
                      >
                        {item.benefits.map((benefit, index) => {
                          return (
                            <React.Fragment key={`${item}-${index}`}>
                              <View style={styles.featureListRow}>
                                <Image
                                  style={styles.iconImage}
                                  source={require("../assets/icon-awesomecheckcircle.png")}
                                />
                                <Text
                                  style={
                                    darkMode === "DARK"
                                      ? styles.darkfeatureListText
                                      : styles.featureListText
                                  }
                                >
                                  {benefit.name}
                                </Text>
                              </View>
                              {benefit.benefits.map((benefit, index) => (
                                <Text
                                  key={`${item}-${index}`}
                                  style={{
                                    marginBottom: "2.5%",
                                    marginLeft: "10%",
                                    color:
                                      darkMode === "DARK"
                                        ? GlobalStyles.Color.white
                                        : GlobalStyles.Color
                                            .secondaryDarkTheme_bg,
                                  }}
                                >
                                  - {benefit.name}
                                </Text>
                              ))}
                            </React.Fragment>
                          );
                        })}
                        {currentSubscruption == item.id ? (
                          <Button
                            title="Current plan"
                            disabled={true}
                            color="white"
                            textColor="black"
                          />
                        ) : (
                          // <Button
                          //   title="Swap to this plan"
                          //   onPress={() => {
                          //     setSubscriptionToChange(item.id);
                          //     setShowPinModal(true);
                          //     //changePlan(item.id);
                          //   }}
                          // />
                          <TouchableOpacity
                            onPress={() => {
                              setSubscriptionToChange(item.id);
                              setShowPinModal(true);
                            }}
                          >
                            <LinearGradient
                              colors={
                                darkMode === "DARK"
                                  ? ["#178BFF", "#0101FD"]
                                  : ["#212529", "#3A3A3A"]
                              }
                              start={{ x: 0, y: 0 }}
                              end={{ x: 1, y: 0 }}
                              style={
                                darkMode === "DARK"
                                  ? styles.darkbuttonPayNew
                                  : styles.buttonPayNew
                              }
                            >
                              {/* <Ionicons
                                name="add-circle-outline"
                                size={20}
                                color={GlobalStyles.Color.white}
                              /> */}
                              <Text style={styles.buttonPayNewText}>
                                Swap to this plan
                              </Text>
                            </LinearGradient>
                          </TouchableOpacity>
                        )}
                      </View>
                    </View>
                  </ScrollView>
                )}
              </Tab.Screen>
            );
          })}
        </Tab.Navigator>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  Standard: {
    position: "absolute",
    left: "7.5%",
    textAlign: "left",
    color: GlobalStyles.Color.gray_500,
    fontSize: 18,
    fontWeight: "700",
  },
  Premium: {
    position: "absolute",
    left: "45%",
    color: GlobalStyles.Color.darkGray,
    fontSize: 18,
    fontWeight: "700",
  },
  Elite: {
    left: "87.5%",
    color: GlobalStyles.Color.darkGray,
    fontSize: 18,
    fontWeight: "700",
  },
  whiteLine: {
    width: "100%",
    marginTop: "2.5%",
    height: 1.5,
    backgroundColor: GlobalStyles.Color.white,
  },
  ChooseCards: {
    marginLeft: "7.5%",
    marginTop: "5%",
    fontWeight: "700",
    fontSize: 26,
  },
  imageBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    marginTop: "5%",
    height: 300,
    width: 450,
    resizeMode: "contain",
  },
  cardNameBox: {
    marginTop: 15,
    width: "100%",
  },
  cardTitle: {
    position: "absolute",
    width: "100%",
    textAlign: "center",
    color: GlobalStyles.Color.gray_500,
    fontSize: 25,
    fontWeight: "700",
  },
  comingSoonText: {
    textTransform: "uppercase",
    fontSize: moderateScale(80),
    fontWeight: "bold",
    textAlign: "center",
  },
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
  },
  cardPrice: {
    marginTop: 25,
    width: "100%",
    textAlign: "center",
  },
  darkcardPrice: {
    marginTop: 25,
    width: "100%",
    textAlign: "center",
    color: GlobalStyles.Color.white,
  },
  featureListBox: {
    backgroundColor: GlobalStyles.Color.white,
    width: "90%",
    left: "5%",
    marginVertical: "2.5%",
    paddingTop: "2.5%",
    paddingBottom: "2.5%",
    borderRadius: 15,
    marginBottom: "5%",
    paddingHorizontal: "5%",
    // shadowColor: '#000',
    //     shadowOffset: { width: 1, height: 3 },
    //     // shadowOpacity: 0.8,
    //     shadowRadius: 14,
    //     elevation: 5
  },
  darkfeatureListBox: {
    backgroundColor: GlobalStyles.Color.darkTheme_bg,
    width: "90%",
    left: "5%",
    marginVertical: "2.5%",
    paddingTop: "2.5%",
    paddingBottom: "2.5%",
    borderRadius: 15,
    marginBottom: "5%",
    paddingHorizontal: "5%",
    // shadowColor: '#000',
    //     shadowOffset: { width: 1, height: 3 },
    //     // shadowOpacity: 0.8,
    //     shadowRadius: 14,
    //     elevation: 5
  },
  featureListRow: {
    width: "100%",
    padding: "1%",
  },
  iconImage: {
    height: verticalScale(20),
    width: horizontalScale(20),

    resizeMode: "contain",
  },
  featureListText: {
    position: "absolute",
    left: "10%",
    top: "30%",
    fontWeight: "700",
  },
  darkfeatureListText: {
    position: "absolute",
    left: "10%",
    top: "30%",
    fontWeight: "700",
    color: GlobalStyles.Color.white,
  },
  featureListSubText: {
    left: "9%",
    color: GlobalStyles.Color.darkGray,
  },
  featureListTextBusiness: {
    position: "absolute",
    left: "10%",
    top: "10%",
    fontWeight: "700",
  },
  featureListTextCards: {
    position: "absolute",
    left: "10%",
    top: "15%",
    fontWeight: "700",
  },
  featureListTextPayments: {
    position: "absolute",
    left: "10%",
    top: "20%",
    fontWeight: "700",
  },

  featureListTextCustomer: {
    position: "absolute",
    left: "10%",
    top: "18%",
    fontWeight: "700",
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  buttonPayNew: {
    borderRadius: 10,
    // backgroundColor: GlobalStyles.Color.lightBlack,
    height: 47,
    width: 312.33,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
  },
  darkbuttonPayNew: {
    borderRadius: 10,
    // backgroundColor: GlobalStyles.Color.gray_500,
    height: 47,
    width: 312.33,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
  },
  buttonPayNewText: {
    color: GlobalStyles.Color.white,
    fontFamily: "Montserrat-Medium",
    fontSize: 14,
    marginLeft: 6,
  },
});

export default ChooseCardsElite;
