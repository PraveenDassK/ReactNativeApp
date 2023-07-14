import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { treeImages } from "../assets/Forest/AllForest";
import { turtleImages } from "../assets/Turtles/AllTurtles";
import GlobalStyles from "../../GlobalStyles";
const VirtualPlanetCard = ({ data, handleVirtual }) => {
  return (
    <>
      {data.map((eachValue, i) => {
        console.log(eachValue);
        return (
          <View style={styles.container} key={i}>
            <View style={{ paddingVertical: 10 }}>
              <Text
                style={{
                  fontSize: 15,
                  color: GlobalStyles.Color.lightBlack,
                  fontFamily: "Montserrat",
                }}
              >
                {eachValue.title}
              </Text>
            </View>
            <View style={styles.insideCard}>
              <View style={{ width: 150 }}>
                <Image
                  resizeMode="contain"
                  source={eachValue.image}
                  style={{ height: 120, width: "100%" }}
                />
              </View>

              <View >
                <Text
                  style={{
                    fontSize: 30,
                    color: GlobalStyles.Color.green_total,
                    fontFamily: "Montserrat",
                  }}
                >
                  {eachValue?.total}
                </Text>
                <Text
                  style={{
                    fontSize: 14,
                    color: GlobalStyles.Color.indigo_100,
                    fontFamily: "Montserrat",
                    width: "80%",
                  }}
                >
                  {eachValue.subTitle}
                </Text>
                <Text
                  style={{
                    fontSize: 14,
                    color: GlobalStyles.Color.skyblue,
                    fontFamily: "Montserrat",
                    marginTop: 10,
                  }}
                  onPress={handleVirtual}
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
const VirtualPlanet = ({ treeData, handleVirtual }) => {
  console.log(treeData?.totalAssets, "this is a virtual planet");
  const data = [
    {
      title: "Virtual Forest",
      image:
        treeData?.totalAssets > 50
          ? treeImages[49]?.image
          : treeImages[treeData?.totalAssets - 1]?.image,
      total: treeData?.totalAssets,
      subTitle: "Total Trees Planted",
    },
    {
      title: "Virtual Ocean",
      image:
        treeData?.totalAssets > 50
          ? turtleImages[49]?.image
          : turtleImages[treeData?.totalAssets - 1]?.image,
      total: treeData?.totalAssets,
      subTitle: "Total Turtle Released",
    },
  ];
  return (
    <View>
      <VirtualPlanetCard data={data} handleVirtual={handleVirtual} />
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
