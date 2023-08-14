import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import GlobalStyles from "../../GlobalStyles";
import Svg, { Use, Image } from "react-native-svg";
import LogoImage from "../assets/Dashboard/Carbonyte-Xero-full.svg"
const XeroDashboard = ({ darkMode ,handleXero}) => {
  return (
    <View style={styles.container}>
      <View>
      <LogoImage style={{ height: 100, width: 100 }}/>
      </View>
      <View>
        <Text
          style={{
            color:
              darkMode === "DARK"
                ? GlobalStyles.Color.white
                : GlobalStyles.Color.lightBlack,
            textAlign: "center",
            fontSize: 14,
            fontFamily: "Montserrat-Regular",
          }}
        >
          Sync your Carbonyte bank {`\n`}directly into your XERO account and
          {`\n`}
          keep a track of all your transactions.
        </Text>
      </View>
      <View style={{ width: "100%", display: "flex", alignItems: "center" }}>
        <Pressable style={styles.sendButton} onPress={handleXero}>
          <Text style={styles.sendButtonText}>Know more</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default XeroDashboard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    borderRadius: 15,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: 25,
    paddingVertical: 20,
  },
  sendButton: {
    height: 60,
    width: "50%",
    backgroundColor: GlobalStyles.Color.lightBlack,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
  },
  sendButtonText: {
    color: GlobalStyles.Color.white,
    fontSize: 16,
    fontFamily: "Montserrat-Medium",
  },
});
