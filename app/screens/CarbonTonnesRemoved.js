import React, { useEffect, useState, useContext } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  Pressable,
  TouchableOpacity,
} from "react-native";
import GlobalStyles from "../../GlobalStyles";
import colors from "../config/colors";
import Button from "../components/Button";

import api from "../api/api_list";
import AuthContext from "../auth/context";

const CarbonTonnesRemoved = ({ navigation }) => {
  const startMonth = "Jan";
  const authContext = useContext(AuthContext);
  const [numTrees, setTrees] = useState(0);
  const [numCarbon, setCarbon] = useState(0);
  const numArray = [0, numTrees, 0, 0, 0, 0];
  const tonnesOfCarbon = 1.5;

  //Calls the API once during load
  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      loadData();
    });
  }, []);

  const loadData = async () => {
    let respose = await api.GetUserImpacts();
    const assets = respose.data.details.assets;
    let trees = 0;
    let carbon = 0;
    assets.forEach((element) => {
      element.type == "TREE" ? (trees += element.count) : null;
      carbon += element.offset;
    });
    setTrees(trees);
    setCarbon(Number(carbon).toFixed(1));
  };

  return (
  <ScrollView>
    <View style={styles.mainContainer}>
      <View style={styles.titleTextRow}>
        <Text style={styles.titleText}>Shrink your footprint</Text>
      </View>

      <View style={styles.subTextRow}>
        <Text style={styles.subText}>Grow your hand print!</Text>
      </View>

      <View
        style={{
          width: "90%",
          backgroundColor: "white",
          height: "auto",
          marginLeft: "5%",
          marginTop: "5%",
          borderRadius: 15,
        }}
      >
        <View
          style={{
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View>
            <Image
              style={{ resizeMode: "contain", width: 200, height: 200 }}
              source={require("../assets/image-cloud.png")}
            />
            <View
              style={{
                width: 200,
                height: 200,
                position: "absolute",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: 18, fontWeight: "700" }}>Total</Text>
              <Text style={{ fontSize: 24, fontWeight: "700" }}>
                {tonnesOfCarbon}
              </Text>
              <Text style={{ fontSize: 24, fontWeight: "700" }}>Tons</Text>
              <Text style={{ fontSize: 16, fontWeight: "700" }}>
                C0₂ Removed
              </Text>
            </View>
          </View>
        </View>

        <View
          style={{
            width: "90%",
            height: 150,
            flexDirection: "row",
            justifyContent: "space-between",
            marginLeft: "5%",
          }}
        >
          <View style={{ alignItems: "center" }}>
            <Text>{numArray[0]}</Text>
            <Image
              style={{ resizeMode: "contain", width: 62.5, height: 100 }}
              source={require("../assets/leafTree.png")}
            />
            <View
              style={{
                height: 5,
                width: 5,
                backgroundColor: "gray",
                borderRadius: 5,
              }}
            />
            <Text>January</Text>
          </View>

          <View style={{ alignItems: "center" }}>
            <Text>{numArray[1]}</Text>
            <Image
              style={{ resizeMode: "contain", width: 62.5, height: 100 }}
              source={require("../assets/leafTree.png")}
            />
            <View
              style={{
                height: 5,
                width: 5,
                backgroundColor: "gray",
                borderRadius: 5,
              }}
            />
            <Text>February</Text>
          </View>

          <View style={{ alignItems: "center" }}>
            <Text>{numArray[2]}</Text>
            <Image
              style={{ resizeMode: "contain", width: 62.5, height: 100 }}
              source={require("../assets/leafTree.png")}
            />
            <View
              style={{
                height: 5,
                width: 5,
                backgroundColor: "gray",
                borderRadius: 5,
              }}
            />
            <Text>March</Text>
          </View>
        </View>

        <View
          style={{
            width: "90%",
            marginLeft: "5%",
            height: 100,
            backgroundColor: "#E4E4FF",
            borderRadius: 15,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <View
            style={{
              width: "49.5%",
              height: "100%",
              flexDirection: "row",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            <Image
              style={{ resizeMode: "contain", width: 62.5, height: "100%" }}
              source={require("../assets/leafTree.png")}
            />

            <View>
              <Text style={{ fontSize: 18 }}>Trees</Text>
              <Text style={{ fontWeight: "700", fontSize: 26 }}>
                +{numTrees}
              </Text>
            </View>
          </View>

          <View
            style={{ height: "90%", backgroundColor: "#B5CEEF", width: 1 }}
          />
          <View
            style={{
              width: "49.5%",
              height: "100%",
              flexDirection: "row",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            <Image
              style={{ resizeMode: "contain", width: 62.5, height: "100%" }}
              source={require("../assets/image-co2cloud.png")}
            />
            <View>
              <Text style={{ fontSize: 18 }}>Carbon</Text>
              <Text style={{ fontWeight: "500", fontSize: 26, maxWidth: 70 }}>
                -{tonnesOfCarbon} Tons
              </Text>
            </View>
          </View>
        </View>
        <TouchableOpacity style={styles.button}>
          <Button
            title="Buy Projects"
            color="babyBlue"
            onPress={() => navigation.navigate("Account")}
          />
        </TouchableOpacity>
      </View>
    <View style={{height: 25, width: "100%"}}/>
    </View>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: GlobalStyles.DivContainer.backgroundColor,
    height: GlobalStyles.DivContainer.height,
    minHeight: 812,
    width: "100%",
    flex: GlobalStyles.DivContainer.flex,
  },

  titleTextRow: {
    marginTop: GlobalStyles.Title.marginTop,
    width: GlobalStyles.DivContainer.width,
    marginLeft: GlobalStyles.DivContainer.marginLeft,
  },

  titleText: {
    fontSize: GlobalStyles.Title.fontSize,
    fontWeight: GlobalStyles.Title.fontWeight,
  },

  subText: {
    fontSize: GlobalStyles.RowText.fontSize,
    fontWeight: GlobalStyles.RowText.fontWeight,
  },

  subTextRow: {
    marginTop: GlobalStyles.RowText.marginTop,
    width: GlobalStyles.DivContainer.width,
    marginLeft: GlobalStyles.DivContainer.marginLeft,
    fontColor: GlobalStyles.RowText.fontColor,
  },
  bottom: {
    bottom: "5%",
    flex: 1,
    justifyContent: "flex-end",
  },

  button: {
    width: "90%",
    left: "5%",
  },
});

export default CarbonTonnesRemoved;
