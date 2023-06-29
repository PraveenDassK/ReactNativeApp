import { StyleSheet, Text, View, Pressable, Image, } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

const ReferNow = () => {

  return (
    <View>
      <LinearGradient
        colors={["#1567A2", "#D8EBF9"]}
        start={{ x: 0.0, y: 1.0 }}
        end={{ x: 1.0, y: 1.0 }}
        style={styles.container}
      >
        <View style={{width:"50%"}}>
          <Image
            source={require("../assets/Dashboard/ReferEarn.png")}
            resizeMode="cover"

            style={{ height: 150, width: "100%" }}
          />
        </View>
        <View style={{width:"50%",paddingVertical:5}}>
          <Text
            style={{
              color: "#212529",
              textAlign: "center",
              fontSize: 20,
              fontFamily: "Montserrat",
              fontWeight: "bold",
            }}
          >
            Refer & Earn
          </Text>
          <Text
            style={{
              color: "#212529",
              textAlign: "center",
              fontSize: 12,
              fontFamily: "Montserrat",
              fontWeight: "Regular",
              marginVertical:10,
            }}
          >
            Refer a friend & {`\n`}earn rewards
          </Text>
          <View
            style={{ width: "100%", display: "flex", alignItems: "center" }}
          >
            <Pressable style={styles.sendButton}>
              <Text style={styles.sendButtonText}>Know more</Text>
            </Pressable>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
};

export default ReferNow;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderRadius: 15,
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    gap:10,
  },
  sendButton: {
    height: 60,
    width: "100%",
    backgroundColor: "black",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
  },
  sendButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "normal",
  },
});
