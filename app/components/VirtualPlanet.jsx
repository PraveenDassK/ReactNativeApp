import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { treeImages } from "../assets/Forest/AllForest";
import {turtleImages} from "../assets/Turtles/AllTurtles"
const VirtualPlanetCard = ({ data }) => {
  return (
    <>
      {data.map((eachValue, i) => {
        console.log(eachValue)
        return (
          <View style={styles.container} key={i}>
            <View style={{ paddingVertical: 10 }}>
              <Text
                style={{
                  fontSize: 18,
                  color: "#212529",
                  fontFamily: "Montserrat",
                  fontWeight: "bold",
                }}
              >
                {eachValue.title}
              </Text>
            </View>
            <View style={styles.insideCard}>
              <Image
                source={eachValue.image}
                style={{ height: 100, width: 130 }}
              />

              <View>
                <Text
                  style={{
                    fontSize: 30,
                    color: "#179424",
                    fontFamily: "Montserrat",
                    fontWeight: "bold",
                  }}
                >
                  {eachValue?.total}
                </Text>
                <Text
                  style={{
                    fontSize: 14,
                    color: "#00003D",
                    fontFamily: "Montserrat",
                    fontWeight: "bold",
                    width: "80%",
                  }}
                >
                  {eachValue.subTitle}
                </Text>
                <Text
                  style={{
                    fontSize: 14,
                    color: "#178BFF",
                    fontFamily: "Montserrat",
                    fontWeight: "bold",
                    marginTop: 10,
                  }}
                >
                  View more
                </Text>
              </View>
            </View>
          </View>
        );
      })}
    </>
  );
};
const VirtualPlanet = ({ treeData }) => {
  console.log(treeData?.totalAssets, "this is a virtual planet");
  const data = [
    {
      title: "Virtual Forest",
      image:
        treeData?.totalAssets > 50
          ? treeImages[49]?.image
          :treeImages[treeData?.totalAssets - 1]?.image ,
      total: treeData?.totalAssets,
      subTitle:"Total Trees Planted"
    },
    {
      title: "Virtual Ocean",
      image:
        treeData?.totalAssets > 50
        ? turtleImages[49]?.image
        :turtleImages[treeData?.totalAssets - 1]?.image ,
      total: treeData?.totalAssets,
      subTitle:"Total Turtle Released"
    },
  ];
  return (
    <View>
      <VirtualPlanetCard data={data} />
    </View>
  );
};

export default VirtualPlanet;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    borderRadius: 15,
    paddingVertical: 10,
    paddingLeft: 20,
    marginTop: 10,
  },
  insideCard: {
    display: "flex",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 5,
  },
});
