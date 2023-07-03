import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, View, Text ,ActivityIndicator} from "react-native";
import DoughnutChart from "../components/DoughnutChart";
import AuthContext from "../auth/context";
import AppText from "../components/Text";
import apiCarbon from "../api/apiCarbon";
import * as Progress from "react-native-progress";

const CarbonSpendGraph = ({ handleViewMore}) => {
  const [carbnonSpendData, setCarbonSpendData] = useState([]);
  const { userID, accountID } = useContext(AuthContext);
  const [totalFootprint, setTotalFootprint] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    loadData();
  }, [accountID, userID]);

  const loadData = async () => {
    try {
      setIsLoading(true)
      const carbonSpendData = await apiCarbon.GetCarbonSpending();
      setCarbonSpendData(carbonSpendData.chartData);
      setTotalFootprint(carbonSpendData.total);
      setIsLoading(false);
    } catch {
      setIsLoading(false);
      return;
    }
  };
  console.log(carbnonSpendData, "this is spend data");
  const colorsArray = ["tomato", "orange", "gold", "cyan", "green"];
  function getRandomItem(arr,i) {
    // get random index value
    const randomIndex = i

    // get random item
    const item = arr[randomIndex];

    return item;
  }
  console.log();
  let sumofValues = carbnonSpendData.reduce((n, { y }) => n + y, 0);

  if (isLoading) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <ActivityIndicator size="large" color="black" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <DoughnutChart
        data={carbnonSpendData}
        children={
          <View>
            <AppText
              style={{
                fontSize: 50,
                fontWeight: "700",
                width: 250,
                textAlign: "center",
              }}
            >
              {totalFootprint}
            </AppText>
            <AppText
              style={{
                fontSize: 20,
                fontWeight: "700",
                width: 250,
                textAlign: "center",
              }}
            >
              kg CO{"\u2082"}
            </AppText>
          </View>
        }
      />
      <View>
        {carbnonSpendData.map((eachValue, i) => {
          let value = eachValue?.y / sumofValues;
          console.log(value, "this is value");
          return (
            <View style={{ marginBottom: 10 }} key={i}>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  paddingHorizontal: 5,
                }}
              >
                <Text style={styles.headingText}>{eachValue?.x}</Text>
                <Text style={styles.headingText}>{eachValue?.y}kg</Text>
              </View>
              <Progress.Bar
                progress={value}
                width={300}
                height={30}
                borderRadius={15}
                borderColor={"white"}
                unfilledColor={"#F7F7F7"}
                color={getRandomItem(colorsArray,i)}
              />
            </View>
          );
        })}
      </View>
      <View style={{ marginVertical: 10 }}>
        <Text style={{ color: "#178BFF", fontSize: 18, fontWeight: "bold" }} onPress={handleViewMore}>
          View more
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    borderRadius: 15,
  },
  icon: {
    borderWidth: 0,
    width: "100%",
    aspectRatio: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
  },
  initials: {
    fontSize: 18,
    fontWeight: "bold",
  },
  name: {
    fontSize: 12,
    color: "black",
    marginTop: 5,
  },
  headingText: {
    color: "#212529",
    fontSize: 18,
    fontWeight: "bold",
    fontFamily: "Montserrat",
    marginBottom: 3,
  },
});

export default CarbonSpendGraph;
