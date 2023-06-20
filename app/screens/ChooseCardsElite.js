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
import { Alert } from "react-native";
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

  const { customerDetails } = useContext(AuthContext);
  const account = customerDetails;

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {}, [change]);

  const loadData = async () => {
    setIsLoading(true);
    const response = await apiCall.GetSubscriptions();
    setData(response);
    console.log("benefits", response[2]["benefits"][0]);
    const currentSub = await apiCall.GetUsersSubscriptions("CC1");
    setCurrentSubscription(currentSub.subID);
    setIsLoading(false);
    console.log(currentSub.subID);
    console.log(response[0].id);
  };
  const changePlan = async (Id) => {
    const response = Alert.alert("", "Do you want to purchase this plan?", [
      {
        text: "No",
        onPress: () => setChange(false),
        style: "cancel",
      },
      {
        text: "Yes",
        onPress: async () => {
          setIsLoading(true)
          await apiCall.ChangeUsersSubscription("CC1", Id);
          loadData();
          setIsLoading(false)
        },
      },
    ]);
    console.log(change);
    if (change) {
    }
  };

  if (isLoading) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <ActivityIndicator size="large" color="black" />
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      {data.length !== 0 && (
        <Tab.Navigator>
          {data.map((item, index) => {
            return (
              <Tab.Screen key={`${item}-${index}`} name={`${item.title}`}>
                {() => (
                  <ScrollView>
                    <View style={styles.chooseCardsContainer}>
                      <View style={styles.imageBox}>
                        <Image
                          style={styles.image}
                          source={BUSINESS_CARDS[index % BUSINESS_CARDS.length]}
                        />
                      </View>

                      <View style={styles.cardNameBox}>
                        <Text style={styles.cardTitle}>{item.title}</Text>
                        <Text style={styles.cardPrice}>
                          £ {item.price} Per Month
                        </Text>
                      </View>

                      <View style={styles.featureListBox}>
                        {item.benefits.map((benefit, index) => {
                          return (
                            <React.Fragment key={`${item}-${index}`}>
                              <View style={styles.featureListRow}>
                                <Image
                                  style={styles.iconImage}
                                  source={require("../assets/icon-awesomecheckcircle.png")}
                                />
                                <Text style={styles.featureListText}>
                                  {benefit.name}
                                </Text>
                              </View>
                              {benefit.benefits.map((benefit) => (
                                <Text
                                  style={{
                                    marginBottom: "2.5%",
                                    marginLeft: "10%",
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
                          <Button
                            title="Swap to this plan"
                            onPress={() => changePlan(item.id)}
                          />
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
    color: "#0101FD",
    fontSize: 18,
    fontWeight: "700",
  },
  Premium: {
    position: "absolute",
    left: "45%",
    color: "#999999",
    fontSize: 18,
    fontWeight: "700",
  },
  Elite: {
    left: "87.5%",
    color: "#999999",
    fontSize: 18,
    fontWeight: "700",
  },
  whiteLine: {
    width: "100%",
    marginTop: "2.5%",
    height: 1.5,
    backgroundColor: "#ffffff",
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
    height: verticalScale(300),
    width: horizontalScale(450),
    resizeMode: "contain",
  },
  cardNameBox: {
    marginTop: verticalScale(15),
    width: "100%",
  },
  cardTitle: {
    position: "absolute",
    width: "100%",
    textAlign: "center",
    color: "#0101FD",
    fontSize: 25,
    fontWeight: "700",
  },
  cardPrice: {
    marginTop: verticalScale(25),
    width: "100%",
    textAlign: "center",
  },
  featureListBox: {
    backgroundColor: "white",
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
  featureListSubText: {
    left: "9%",
    color: "#999999",
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
});

export default ChooseCardsElite;
