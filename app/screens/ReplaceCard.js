import React, { useContext, useEffect, useState } from "react";
//import * as React from "react";
import {
  Text,
  StyleSheet,
  View,
  Pressable,
  Image,
  ImageBackground,
  Dimensions
} from "react-native";
import Screen from "../components/Screen";
import AuthContext from "../auth/context";
import GlobalStyles from "../../GlobalStyles";
import api from "../api/api_list";
 let height = Dimensions.get("window").height;
const ReplaceCard = ({ navigation }) =>
  //Comment
  // const cardName = "Carbonyte Standard - 7761"
  {
    const [cardname, setCardname] = useState(null);
    const authContext = useContext(AuthContext);
    //Calls the API once during load
    useEffect(() => {
      const unsubscribe = navigation.addListener("focus", () => {
        loadData();
      });
    }, []);
    const loadData = async () => {
      setCardname(authContext.accountID);
      console.log(authContext.accountID);
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
      <Screen>
        <View style={styles.replaceCard}>
          <View>
            <View style={styles.topContainer}>
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
                <Text style={styles.hello1Color}>Business Elite</Text>
                <Text style={styles.textAccount}>{cardname}</Text>
              </View>
            </View>
            <Text style={styles.title}>Why do you need a new card?</Text>
            <Text style={styles.selectText}>Select the best option :</Text>

            {dataOfLost.map((eachValue, index) => {
              return (
                <Pressable
                  style={styles.buttonStyle}
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
                    <Text style={styles.lostTextColor}>{eachValue.name}</Text>
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
        <ImageBackground
          resizeMode="stretch"
          source={require("../assets/backgrounds/replaceCard.jpg")}
          style={styles.container}
        />
        <View
          style={{
            position: "absolute",
            bottom: "10%",
            width: "100%",
            paddingHorizontal: 10,
            left: "10%",
          }}
        >
          <Text style={styles.bottomText}>
            Your <Text style={styles.bottomTextBold}> Money </Text>• Your{" "}
            <Text style={styles.bottomTextBold}>Planet</Text> • Your{" "}
            <Text style={styles.bottomTextBold}>Choice</Text>
          </Text>
        </View>
      </Screen>
    );
  };

const styles = StyleSheet.create({
  topContainer: {
    backgroundColor: "white",
    borderColor: "gray",
    padding: 10,
    display: "flex",
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    borderRadius: 10,
  },
  title: {
    color: "#212529",
    fontFamily: "Montserrat",
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 15,
  },
  buttonStyle: {
    backgroundColor: "white",
    borderColor: "gray",
    padding: 5,
    display: "flex",
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    borderRadius: 10,
    marginVertical: 10,
  },
  lostTextColor: {
    color: "#2B2B2B",
    fontFamily: "Montserrat",
    fontWeight: "bold",
    fontSize: 16,
  },
  selectText: {
    color: "#888888",
    fontFamily: "Montserrat",
    fontWeight: "bold",
    fontSize: 14,
  },

  hello1Color: {
    color: "#000000",
    fontFamily: "Montserrat",
    fontWeight: "normal",
    fontSize: 20,
  },
  textAccount: {
    color: "#000000",
    fontFamily: "Montserrat",
    fontWeight: "normal",
    fontSize: 20,
  },
  iconFeatherCreditCard: {
    width: 50,
    height: 50,
  },

  replaceCard: {
    flex: 1,
    width: "100%",
    paddingLeft: GlobalStyles.Padding.padding_7xs,
    paddingTop: GlobalStyles.Padding.padding_xl,
    paddingRight: GlobalStyles.Padding.padding_8xs,
    backgroundColor: GlobalStyles.Color.gray_100,
  },
  container: {
    width: "100%",
    height: height/2.6,
    // position: "absolute",
    bottom: 0,
    zIndex: 0,
  },
  bottomText: {
    color: "white",
    fontSize: 14,
    fontFamily: "Montserrat",
    fontWeight: "regular",
  },
  bottomTextBold: {
    color: "white",
    fontSize: 16,
    fontFamily: "Montserrat",
    fontWeight: "bold",
  },
});

export default ReplaceCard;
