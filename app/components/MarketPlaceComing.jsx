import { StyleSheet, Text, View, Pressable, Image } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import GlobalStyles from "../../GlobalStyles";
import Logo from "../assets/Dashboard/Carbonytelogomark3.svg";
const MarketPlace = ({handleMarket}) => {
  return (
    <View>
      <LinearGradient
        colors={["#15A23B", "#D8F9F0"]}
        start={{ x: 0.0, y: 1.0 }}
        end={{ x: 1.0, y: 1.0 }}
        style={styles.container}
      >
        <View style={{ width: "50%" }}>
          <Logo
            // source={require("../assets/Dashboard/ReferEarn.png")}
            // resizeMode="cover"
            style={{ height: 150, width: "100%" }}
          />
        </View>
        <View style={{ width: "50%", paddingVertical: 5 }}>
          <Text
            style={{
              color: GlobalStyles.Color.lightBlack,
              textAlign: "center",
              fontSize: 20,
              fontFamily: "Montserrat",
            }}
          >
            Marketplace {"\n"} coming soon
          </Text>
          {/* <Text
            style={{
              color: GlobalStyles.Color.lightBlack,
              textAlign: "center",
              fontSize: 14,
              fontFamily: "Montserrat-Regular",
              marginVertical:10,
            }}
          >
            Refer a friend & {`\n`}earn rewards
          </Text> */}
          <Text style={styles.sendButtonText}>Benefits</Text>

          <View style={{ width: "100%", display: "flex" }}>
            <Pressable style={styles.sendButton} onPress={handleMarket}>
              <Text style={styles.sendButtonText2}>Know more</Text>
            </Pressable>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
};

export default MarketPlace;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderRadius: 15,
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    gap: 10,
  },
  sendButton: {
    height: 60,
    width: "100%",
    backgroundColor: GlobalStyles.Color.lightBlack,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
  },
  sendButtonText: {
    color: GlobalStyles.Color.dark_orange,
    fontSize: 20,
    fontFamily: "Montserrat",
    margin: "10%",
  },
  sendButtonText2: {
    color: GlobalStyles.Color.white,
    fontSize: 16,
    fontFamily: "Montserrat-Medium",
  },
});
