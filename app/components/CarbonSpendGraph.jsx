import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, View, Text, ActivityIndicator } from "react-native";
import DoughnutChart from "../components/DoughnutChart";
import AuthContext from "../auth/context";
import AppText from "../components/Text";
import apiCarbon from "../api/apiCarbon";
import * as Progress from "react-native-progress";
import GlobalStyles from "../../GlobalStyles";

const CarbonSpendGraph = ({ handleViewMore, isStyled = true }) => {
  const [carbnonSpendData, setCarbonSpendData] = useState([]);
  const { userID, accountID } = useContext(AuthContext);
  const [totalFootprint, setTotalFootprint] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    loadData();
  }, [accountID, userID]);

  const loadData = async () => {
    try {
      setIsLoading(true);
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
  function getRandomItem(arr, i) {
    // get random index value
    const randomIndex = i;

    // get random item
    const item = arr[randomIndex];

    return item;
  }
  console.log();
  let sumofValues = carbnonSpendData.reduce((n, { y }) => n + y, 0);

  if (isLoading) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <ActivityIndicator size="large" color={GlobalStyles.Color.black} />
      </View>
    );
  }

  const styled = {
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    borderRadius: 15,
  };

  return (
    <View style={[styles.container, isStyled ? styled : null]}>
      <DoughnutChart
        data={carbnonSpendData}
        children={
          <View>
            {/* <AppText
            style={{
              fontSize: 20,
              fontWeight: "700",
              width: 250,
              textAlign: "center",
            }}
            >
              Total
            </AppText> */}
            <AppText
              style={{
                fontSize: 50,
                width: 250,
                fontFamily: "Montserrat-Bold",
                textAlign: "center",
              }}
            >
              {totalFootprint}
            </AppText>
            <AppText
              style={{
                fontSize: 20,
                fontFamily: "Montserrat-Bold",
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
                <Text style={styles.headingText}>{eachValue?.y} kg</Text>
              </View>
              <Progress.Bar
                progress={value}
                width={300}
                height={30}
                borderRadius={15}
                borderColor={GlobalStyles.Color.white}
                unfilledColor={GlobalStyles.Color.backgroundColor}
                color={getRandomItem(colorsArray, i)}
                animated={true}
                indeterminateAnimationDuration={1000}
                useNativeDriver={true}
                animationConfig={{ bounciness: 1 }}
                animationType="spring"
              />
            </View>
          );
        })}
      </View>
      <View style={{ marginVertical: 10 }}>
        <Text
          style={{
            color: GlobalStyles.Color.skyblue,
            fontSize: 18,
            fontFamily: "Montserrat",
          }}
          onPress={handleViewMore}
        >
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
    fontSize: 16,
    fontFamily: "Montserrat-SemiBold",
    marginBottom: 3,
  },
});

export default CarbonSpendGraph;
