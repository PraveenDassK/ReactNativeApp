import React from "react";
import {
  ScrollView,
  Text,
  ImageBackground,
  StyleSheet,
  View,
} from "react-native";
import { BlurView } from "expo-blur";

import Button from "../components/AppButton";
import CarbonSpendGraph from "../components/CarbonSpendGraph";

const CarbonFootprints = () => {
  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: "grey" }}
      contentContainerStyle={{ flex: 1 }}
    >
      <ImageBackground
        style={{ height: 280 }}
        source={require("../assets/backgrounds/beach.jpg")}
      >
        <View style={styles.backgroundTextContainer}>
          <Text style={styles.backgroundFont}>Your Carbon Footprints</Text>
          <Text
            style={[
              styles.backgroundFont,
              styles.backgroundSub,
              { marginTop: "1.5%" },
            ]}
          >
            Monitor & Minimize Your Carbon Footprint for a Greener Planet.{" "}
          </Text>
        </View>
      </ImageBackground>
      <View
        style={{
          backgroundColor: "#F7F7F7",
          flex: 1,
          padding: "5%",
          paddingBottom: "30%",
          justifyContent: "flex-end",
          borderTopStartRadius: 20,
          borderTopEndRadius: 20,
          marginTop: -20,
        }}
      >
        <BlurView tint="light" intensity={60} style={styles.blurView}>
          <CarbonSpendGraph isStyled={false} />
        </BlurView>

        {/* <View style={styles.containerSpacing}>
          <Text style={styles.header}>Carbon offset summary</Text>

        </View> */}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  blurView: {
    backgroundColor: "rgba(255,255,255,0.5)",
    borderRadius: 20,
    height: "120%",
    marginBottom: "5%",
    overflow: "hidden",
  },

  backgroundFont: {
    color: "white",
    fontFamily: "Montserrat",
    fontSize: 18,
  },
  backgroundTextContainer: {
    marginTop: "15%",
    paddingHorizontal: "5%",
    width: "70%",
  },
  backgroundSub: {
    fontFamily: "Montserrat-Regular",
    fontSize: 14,
  },
  containerSpacing: {
      marginVertical: "5%",
    },
    header: {
      fontFamily: "Montserrat",
      fontSize: 18,
    },
});
export default CarbonFootprints;
