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

const CardSettings = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isEnabled, setIsEnabled] = useState(false);
  const [isEnabled1, setIsEnabled1] = useState(false);
  const [isEnabled2, setIsEnabled2] = useState(false);
  const [isEnabled3, setIsEnabled3] = useState(false);
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
    const cardSettings = await apiSettings.GetSettings(authContext.accountID);
    const data = cardSettings;
    console.log(data);
    data.onlineTransactions ? setIsEnabled(true) : null;
    data.swipePayments ? setIsEnabled1(true) : null;
    data.atmWithdrawals ? setIsEnabled2(true) : null;
    data.contactlessPayments ? setIsEnabled3(true) : null;
    setIsLoading(false);
  };

  const sendRequest = async () => {
    setIsLoading(true);
    console.log("!");
    const response = await apiSettings.SetToggles(
      authContext.accountID,
      isEnabled,
      isEnabled1,
      isEnabled2,
      isEnabled3
    );
    setIsLoading(false);
  };

  if (isLoading) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <ActivityIndicator size="large" color="black" />
      </View>
    );
  }

  return (
    <ScrollView>
      <View style={styles.mainContainer}>
        {/* <View style={styles.titleTextRow}>
          <AppText style={styles.titleText}>Settings</AppText>
        </View> */}
        <Pressable
          style={[styles.boxShadow]}
          onPress={() => navigation.navigate("viewpin")}
        >
          <View
            style={[
              {
                width: "90%",
                marginLeft: "5%",
                borderRadius: 15,
                marginTop: "5%",
                backgroundColor: GlobalStyles.Color.white,
                // height: 60,
                paddingVertical: "5%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              },
            ]}
          >
            <Image
              style={{
                height: "60%",
                resizeMode: "contain",
                flex: 1,
                alignSelf: "center",
                marginLeft: "5%",
              }}
              source={require("../assets/meter-1.png")}
            />
            <View
              style={{ flex: 9, justifyContent: "center", marginLeft: "2.5%" }}
            >
              <AppText style={styles.cardHeading}>View Pin</AppText>
              <AppText style={styles.cardSubHeading}>
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
                backgroundColor: GlobalStyles.Color.white,
                // height: 60,
                paddingVertical: "5%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              },
            ]}
          >
            <Image
              style={{
                height: "60%",
                resizeMode: "contain",
                flex: 1,
                alignSelf: "center",
                marginLeft: "5%",
              }}
              source={require("../assets/meter-1.png")}
            />
            <View
              style={{ flex: 9, justifyContent: "center", marginLeft: "2.5%" }}
            >
              <AppText style={styles.cardHeading}>Spending Limit</AppText>
              <AppText style={styles.cardSubHeading}>
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
              backgroundColor: GlobalStyles.Color.white,
              height: "auto",
              paddingRight: "2.5%",
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
              alignItems: "center",
            }}
          >
            <Image
              style={{
                height: "30%",
                resizeMode: "contain",
                flex: 1,
                alignSelf: "center",
                marginLeft: "5%",
              }}
              source={require("../assets/globe.png")}
            />
            <View
              style={{ flex: 5, justifyContent: "center", marginLeft: "2.5%" }}
            >
              <AppText style={styles.cardHeading}>Online Transactions</AppText>
              <AppText style={styles.cardSubHeading}>
                Internet based transactions are generally high-risk. You can
                switch them off for extra security. Payments you make using
                mobile wallets like Apple Pay won’t be affected.
              </AppText>
            </View>
            <Switch
              trackColor={{
                false: GlobalStyles.Color.gray_600,
                true: GlobalStyles.Color.blue_100,
              }}
              thumbColor={isEnabled ? "#f4f3f4" : "#f4f3f4"}
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
            <Image
              style={{
                height: "40%",
                resizeMode: "contain",
                flex: 1,
                alignSelf: "center",
                marginLeft: "5%",
              }}
              source={require("../assets/swipecard.png")}
            />
            <View
              style={{ flex: 7, justifyContent: "center", marginLeft: "2.5%" }}
            >
              <AppText style={styles.cardHeading}>Swipe Payments</AppText>
              <AppText style={styles.cardSubHeading}>
                Sometimes cards can be cloned, you can turn of the magnetic
                stripe here
              </AppText>
            </View>
            <Switch
              trackColor={{
                false: GlobalStyles.Color.gray_600,
                true: GlobalStyles.Color.blue_100,
              }}
              thumbColor={isEnabled ? "#f4f3f4" : "#f4f3f4"}
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
            <Image
              style={{
                height: "60%",
                resizeMode: "contain",
                flex: 1,
                alignSelf: "center",
                marginLeft: "5%",
              }}
              source={require("../assets/atm.png")}
            />
            <View
              style={{ flex: 7, justifyContent: "center", marginLeft: "2.5%" }}
            >
              <AppText style={styles.cardHeading}>ATM Withdrawals</AppText>
              <AppText style={styles.cardSubHeading}>
                Turn off ATM Withdrawals here
              </AppText>
            </View>
            <Switch
              trackColor={{
                false: GlobalStyles.Color.gray_600,
                true: GlobalStyles.Color.blue_100,
              }}
              thumbColor={isEnabled ? "#f4f3f4" : "#f4f3f4"}
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
            <Image
              style={{
                height: "60%",
                resizeMode: "contain",
                flex: 1,
                alignSelf: "center",
                marginLeft: "5%",
              }}
              source={require("../assets/contactlesspayment-1.png")}
            />
            <View
              style={{ flex: 7, justifyContent: "center", marginLeft: "2.5%" }}
            >
              <AppText style={styles.cardHeading}>Contactless Payments</AppText>
              <AppText style={styles.cardSubHeading}>
                Turn off contactless functionality
              </AppText>
            </View>
            <Switch
              trackColor={{
                false: GlobalStyles.Color.gray_600,
                true: GlobalStyles.Color.blue_100,
              }}
              thumbColor={isEnabled ? "#f4f3f4" : "#f4f3f4"}
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
              backgroundColor: GlobalStyles.Color.white,
              height: "auto",
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
              <Image
                style={{
                  height: "60%",
                  resizeMode: "contain",
                  flex: 1,
                  alignSelf: "center",
                  marginLeft: "5%",
                }}
                source={require("../assets/reset.png")}
              />
              <View
                style={{
                  flex: 9,
                  justifyContent: "center",
                  marginLeft: "2.5%",
                }}
              >
                <AppText style={styles.cardHeading}>Replace Card</AppText>
                <AppText style={styles.cardSubHeading}>
                  Lost, Stolen, Not Delivered
                </AppText>
              </View>
            </View>
          </Pressable>
          <Pressable onPress={() => navigation.navigate("Terminate")}>
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
              <Image
                style={{
                  height: "60%",
                  resizeMode: "contain",
                  flex: 1,
                  alignSelf: "center",
                  marginLeft: "5%",
                }}
                source={require("../assets/delete-redbin.png")}
              />
              <View
                style={{
                  flex: 9,
                  justifyContent: "center",
                  marginLeft: "2.5%",
                }}
              >
                <AppText style={styles.cardHeading}>Terminate Card</AppText>
                <AppText style={styles.cardSubHeading}>
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
                backgroundColor:GlobalStyles.Color.white,
                // height: 60,
                paddingVertical: "5%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              },
            ]}
          >
            <Image
              style={{
                height: "60%",
                resizeMode: "contain",
                flex: 1,
                alignSelf: "center",
                marginLeft: "5%",
              }}
              source={require("../assets/meter-1.png")}
            />
            <View
              style={{ flex: 9, justifyContent: "center", marginLeft: "2.5%" }}
            >
              <AppText style={styles.cardHeading}>Upgrade Card</AppText>
              <AppText style={styles.cardSubHeading}>
                Upgrade your card plan
              </AppText>
            </View>
          </View>
        </Pressable>
      </View>
      <View
        style={{
          position: "absolute",
          bottom: "0%",
          width: "100%",
          paddingHorizontal: 10,
          zIndex:10,
        }}
      >
       <Tagline/>
      </View>
      <ImageBackground
        resizeMode="stretch"
        source={require("../assets/backgrounds/cardsettings.jpg")}
        style={styles.container}
      />
    
    </ScrollView>
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
    fontSize: 16,
  },
  cardSubHeading: {
    color: GlobalStyles.Color.gray_2100,
    fontFamily: "Montserrat-Regular",
    fontSize: 14,
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
