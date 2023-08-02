import React, { useEffect, useState, useContext } from "react";
import {
  Text,
  StyleSheet,
  Image,
  View,
  Pressable,
  ScrollView,
  ActivityIndicator
} from "react-native";
import GlobalStyles from "../../GlobalStyles";

import apiCall from "../api/api";
import AuthContext from "../auth/context";
import Button from "../components/AppButton";
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from "../config/metrics";

const CarbonProject = ({ navigation, route }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    setIsLoading(true);
    const response = await apiCall.GetSingleProject(route.params.Id);
    setIsLoading(false);
    setData(response);
    
  };

  let projects = [];

  if (isLoading) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <ActivityIndicator size="large" color="black" />
      </View>
    );
  }

  const formatData = () => {
    if (data != null) {
      projects.push(
        <View key={data.id} style={styles.rectanglePressable}>
          <View style={styles.mainContainer}>
            <View style={styles.titleTextRow}>
              <Text style={styles.titleText}>{data.displayName}</Text>
            </View>
          </View>
          <Image
            style={[styles.image, { borderRadius: data.image ? 15: 0,}]}
            source={
              data.image != ""
                ? { uri: data.image }
                : require("../assets/BearWithUs.png")
            }
          />
          <View style={{ backgroundColor: "white" }}>
            <Text style={{ textAlign: "center" }}>
              {data.description.replace(/<[^>]*>/g, "\n")}
            </Text>
          </View>
        </View>
      );
    }
  };

  formatData();

  return (
    <View style={styles.mainPage}>
      <ScrollView style={styles.page}>{projects}</ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  rectanglePressable: {
    marginTop: verticalScale(20),
    borderRadius: moderateScale(15),
    paddingVertical: verticalScale(20),
    paddingHorizontal: horizontalScale(14),
    backgroundColor: "white",
    width: "100%",
    alignItems: "center",
  },
  titleText: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 30,
  },
  page: {
    width: "90%",
    left: "5%",
    color: "black",
    height: "auto",
    borderWidth: 0,
    borderColor: "black",
    borderRadius: 25,
  },
  image: {
    flex: 1,
    width: "100%",
    height: 200,
    marginBottom: "5%",
    marginTop: "5%",
    resizeMode: "contain",
  },
  textBox: {
    backgroundColor: "red",
  },
  mainPage: {
    backgroundColor: GlobalStyles.DivContainer.backgroundColor,
    width: "100%",
  },
  mainContainer: {
    height: GlobalStyles.DivContainer.height,
    width: "100%",
    flex: GlobalStyles.DivContainer.flex,
  },

  titleTextRow: {
    width: GlobalStyles.DivContainer.width,
    marginLeft: GlobalStyles.DivContainer.marginLeft,
  },

  titleText: {
    fontSize: GlobalStyles.Title.fontSize,
    fontWeight: GlobalStyles.Title.fontWeight,
  },
});

export default CarbonProject;
