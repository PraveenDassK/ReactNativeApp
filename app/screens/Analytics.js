import React, {
  useContext,
  useEffect,
  useState,
  useCallback,
  Fragment,
} from "react";
import {
  RefreshControl,
  StyleSheet,
  Image,
  View,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  Pressable,
  TouchableWithoutFeedback,
  ActivityIndicator,
  FlatList,
} from "react-native";

import GlobalStyles from "../../GlobalStyles";
import { LineChart } from "react-native-chart-kit";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { horizontalScale, verticalScale } from "../config/metrics";

import apiCall from "../api/apiCall";
import AuthContext from "../auth/context";
import moment from "moment";
import { Rect, Text as TextSVG, Svg } from "react-native-svg";
import DoughnutChart from "../components/DoughnutChart";
import AppText from "../components/Text";
import apiCarbon from "../api/apiCarbon";
import useDevice from "../hooks/useDevice";
import {
  TransactionBody,
  TransactionFooter,
  TransactionHead,
} from "../components/transactions";

import Tagline from "../components/Tagline";
const Analytics = ({ navigation }) => {
  const { device } = useDevice();
  const [isLoading, setIsLoading] = useState(false);
  const [active, setActive] = useState("");
  const [balance, setBal] = useState(0);
  const [totalSpend, setTotal] = useState(0);
  const [transactions, setTrans] = useState([]);
  const [totalTransactions, setTotalTrans] = useState(0);
  const [graphData, setGraphData] = useState(null);
  const [data, setData] = useState([]);
  const [fulldata, setFullData] = useState([]);
  const [loadMore, setLoadMore] = useState(false);
  const [totalFootprint, setTotalFootprint] = useState(false);
  const [monthAverage, setMonthAverage] = useState(0);
  const [catNames, setCatNames] = useState([
    "Health",
    "Food",
    "House",
    "Shopping",
    "Transport",
  ]);

  const [dataPercentages, setDataPercentages] = useState([
    "70%",
    "50%",
    "40%",
    "30%",
    "20%",
  ]);

  const [recentTransactions, setRecent] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const authContext = useContext(AuthContext);
  const { userID, accountID } = useContext(AuthContext);
  const [carbnonSpendData, setCarbonSpendData] = useState([]);
  const [carbonGraphData, setCarbonGraphData] = useState(null);

  useEffect(() => {
    loadData();
  }, [accountID, userID]);
  /**
   * @dev Loads all of the data on load
   * @todo Change the scheduled payment to the correct account ID
   */
  const loadData = async () => {
    setIsLoading(true);
    if (!accountID) return;
    const dataCall = await apiCall.GetAnalysisData(accountID);
    const response = await apiCall.GetScheduledPayments("CC1");
    const graphData = await apiCall.GetTransactionsWeek(accountID);
    const carbonSpendData = await apiCarbon.GetCarbonSpending();

    const carbonSpendDataBarGraph = await apiCarbon.GetBarGraphData();
    setCarbonGraphData(carbonSpendDataBarGraph);
    setCatNames(carbonSpendDataBarGraph.labels);
    setDataPercentages(carbonSpendDataBarGraph.percentages);
    setCarbonSpendData(carbonSpendData.chartData);
    setTotalFootprint(carbonSpendData.total);
    setTotalTrans(dataCall.totalTransactions);
    setTotal(dataCall.totalSpend);

    setRecent(dataCall.transactions.slice(0, 3));
    setTrans(dataCall.transactions);
    setBal(dataCall.balance);
    setMonthAverage(dataCall.average);
    const upcomingSpendings = response.filter((r, index) => index < 3);
    setData(upcomingSpendings);
    setFullData(response);

    setGraphData(graphData);
    setActive("Week");
    setIsLoading(false);
  };

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      loadData();
      setRefreshing(false);
    }, 2000);
  }, [refreshing]);

  /**
   * @dev This changes the data that is used for the graph
   * @dev All the data procesasing is done on apiCall
   * @param {str} time The time period to change
   */
  const changeGraphData = async (time) => {
    setActive(time);

    switch (time) {
      case "Year":
        const graphDataYear = await apiCall.GetTransactionsYear(accountID);
        setGraphData(graphDataYear);
        break;
      case "Month":
        const graphDataMonth = await apiCall.GetTransactionsMonth(accountID);
        setGraphData(graphDataMonth);
        break;
      case "Week":
        const graphDataWeek = await apiCall.GetTransactionsWeek(accountID);
        setGraphData(graphDataWeek);
        break;
    }
  };

  const colors = ["tomato", "orange", "gold", "cyan", "green"];

  const graphTabs = [
    { id: 1, title: "Week" },
    { id: 2, title: "Month" },
    { id: 3, title: "Year" },
  ];

  if (isLoading) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <ActivityIndicator size={"large"} color="black" />
      </View>
    );
  }

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <View style={styles.mainContainer}>
        <View style={styles.titleTextRow}>
          {/* <AppText style={[styles.titleText, ]}>Analysis</AppText> */}
        </View>

        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            marginTop: 28,
          }}
        >
          <AppText
            style={{
              fontWeight: Platform.OS === "android" ? "normal" : "700",
              fontFamily: "Helvetica",
              fontSize: device == 1 ? 24 : 40,
              width: device == 1 ? 250 : 350,
              textAlign: "center",
            }}
          >
            Your average monthly Carbon Footprint is
          </AppText>
        </View>

        <View>
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
        </View>
        <View style={[styles.balanceContainer]}>
          <AppText style={{ flex: 2, fontWeight: "700", fontSize: 16 }}>
            Balance
          </AppText>
          <AppText
            style={{
              flex: 2,
              alignItems: "center",
              justifyContent: "flex-end",
              textAlign: "right",
              width: "100%",
              fontWeight: "700",
              color: "#0101FD",
            }}
          >
            <AppText
              style={{
                fontWeight: "800",
                fontSize: 30,
                color: "blue",
              }}
            >
              £ {balance}
            </AppText>
          </AppText>
        </View>

        <View
          style={{
            flex: 1,
            width: "90%",
            height: "auto",
            marginTop: "5%",
            borderRadius: 15,
            flexDirection: "row",
            justifyContent: "space-between",
            marginLeft: "5%",
          }}
        >
          <View
            style={[
              {
                height: "100%",
                backgroundColor: "white",
                width: "47.5%",
                borderRadius: 15,
                padding: "5%",
                alignSelf: "center",
              },
              ,
            ]}
          >
            <AppText style={{ fontWeight: "500" }}>Total Spend</AppText>
            <AppText style={styles.money}>£ {totalSpend.toFixed(2)}</AppText>
            <View style={{ flex: 1, flexDirection: "row" }}>
              <View
                style={{
                  flex: 1,
                  marginTop: verticalScale(5),
                  alignItems: "flex-start",
                  width: horizontalScale(75),
                }}
              >
                <AppText style={{ color: "#999", fontSize: 14 }}>
                  No. of Payments
                </AppText>
              </View>

              <View
                style={{
                  flex: 1,
                  alignItems: "flex-end",
                  justifyContent: "flex-end",
                }}
              >
                <AppText style={{ color: "#999", fontSize: 22 }}>
                  {totalTransactions}
                </AppText>
              </View>
            </View>
          </View>
          <View
            style={[
              {
                height: "100%",
                backgroundColor: "white",
                width: "47.5%",
                borderRadius: 15,
                padding: "5%",
              },
              ,
            ]}
          >
            <AppText style={{ fontWeight: "700" }}>
              Average Transaction spend
            </AppText>
            <View
              style={{
                marginTop: verticalScale(5),
                flex: 1,
                justifyContent: "flex-end",
              }}
            >
              <AppText style={styles.money}>
                £ {monthAverage.toFixed(2)}
              </AppText>
            </View>
          </View>
        </View>

        <View style={styles.titleTextRow}>
          <Image
            source={require("../assets/icon-featherpiechart.png")}
            resizeMode="contain"
            style={{ width: horizontalScale(25), height: verticalScale(25) }}
          />
          <AppText
            style={[
              styles.titleText,
              {
                fontWeight: Platform.OS === "android" ? "normal" : "700",
                fontFamily: "Helvetica",
                fontSize: 24,
              },
            ]}
          >
            Spendings
          </AppText>
        </View>

        <View style={[styles.carbonSpendingAnalysysDiv, styles.rounded]}>
          {catNames.map((name, index) => {
            return (
              <Fragment key={`${name + index}`}>
                <AppText style={styles.subtitleText}>{name}</AppText>
                <View
                  style={[
                    styles.carbonSpendingAnalysysBarBackground,
                    styles.rounded,
                  ]}
                >
                  <View
                    style={[
                      styles.carbonSpendingAnalysysBarProgress,
                      styles.rounded,
                    ]}
                    width={dataPercentages[index]}
                    backgroundColor={colors[index % colors.length]}
                  >
                    <AppText style={styles.barText}>
                      {dataPercentages[index]}
                    </AppText>
                  </View>
                </View>
              </Fragment>
            );
          })}

          {graphData && (
            <View
              style={{
                flexDirection: "row",
                flex: 1,
                justifyContent: "space-evenly",
                alignItems: "center",
                marginTop: verticalScale(30),
                paddingBottom: verticalScale(5),
                opacity: 0.5,

                borderBottomWidth: 1.5,
              }}
            >
              {graphData &&
                graphTabs.map((tab, index) => (
                  <TouchableWithoutFeedback
                    key={index}
                    onPress={() => changeGraphData(tab.title)}
                  >
                    <AppText
                      style={{
                        fontSize: 15,
                        fontWeight: "800",
                        color: active === tab.title ? "blue" : "grey",
                      }}
                    >
                      {tab.title}
                    </AppText>
                  </TouchableWithoutFeedback>
                ))}
            </View>
          )}

          {graphData && <Bazier graphData={graphData} />}
        </View>
        <View style={[styles.containerSpacing, { marginVertical: 40 }]}>
          <TransactionHead />
          {recentTransactions.map((transaction, index) => (
            <TransactionBody
              key={index}
              name={transaction.description}
              date={transaction.transactionDate}
              amount={transaction.amount}
              credit={transaction.credit}
            />
          ))}
          <TransactionFooter
            number={3}
            total={transactions.length}
            onSee={() => navigation.navigate("Transactions")}
          />
        </View>
        <View style={[styles.containerSpacing, { marginVertical: 40 }]}>
          <TransactionHead headerTitle="Upcoming spending" />
          {data.map((transaction, index) => (
            <TransactionBody
              key={index}
              name={transaction.scheduleID}
              date={transaction.date}
              amount={transaction.amount}
              credit={transaction.credit}
            />
          ))}
        </View>
        <View style={{ height: 20, width: "100%" }} />
      </View>
      <Tagline />
    </ScrollView>
  );
};

const Bazier = ({ graphData }) => {
  let [tooltipPos, setTooltipPos] = useState({
    x: 0,
    y: 0,
    visible: false,
    value: 0,
  });

  const { total, xAxis, yAxis } = graphData;

  return (
    <View
      style={{
        width: "90%",
        marginLeft: "5%",
      }}
    >
      {/* <AppText>Bezier Line Chart</AppText> */}

      <LineChart
        data={{
          labels: xAxis,
          datasets: [{ data: yAxis }],
        }}
        width={Dimensions.get("window").width * 0.8125} // from react-native
        height={220}
        yAxisLabel="£"
        yAxisSuffix=""
        yAxisInterval={1} // optional, defaults to 1
        withHorizontalLines={false}
        withVerticalLines={false}
        withHorizontalLabels={false}
        chartConfig={{
          backgroundGradientFrom: GlobalStyles.Color.backgroundColorOg,
          backgroundGradientTo: GlobalStyles.Color.backgroundColorOg,
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(0,0,255,${opacity})`,
          labelColor: (opacity = 1) => `rgba(105,105,105, ${opacity})`,
          fillShadowGradientFrom: "black",
          fillShadowGradientTo: GlobalStyles.Color.backgroundColorOg,
          strokeWidth: 5,
          style: { borderRadius: 16 },
          propsForDots: {
            r: "3",
            strokeWidth: "8",
            stroke: `rgba(30, 81, 123, 0.3)`,
          },
        }}
        bezier
        style={{ marginVertical: 8, borderRadius: 0 }}
        decorator={() => {
          return tooltipPos.visible ? (
            <View>
              <Svg>
                <Rect
                  x={tooltipPos.x - 15}
                  y={tooltipPos.y + 10}
                  width="60"
                  height="30"
                  fill="white"
                  rx={0.5}
                  ry={0.5}
                />
                <TextSVG
                  x={tooltipPos.x + 15}
                  y={tooltipPos.y + 30}
                  fill="black"
                  fontSize="10"
                  fontWeight="bold"
                  textAnchor="middle"
                >
                  {`£ ${tooltipPos.value.toFixed(2)}`}
                </TextSVG>
              </Svg>
            </View>
          ) : null;
        }}
        onDataPointClick={(data) => {
          let isSamePoint = tooltipPos.x === data.x && tooltipPos.y === data.y;
          isSamePoint
            ? setTooltipPos((previousState) => {
                return {
                  ...previousState,
                  value: data.value,
                  visible: !previousState.visible,
                };
              })
            : setTooltipPos({
                x: data.x,
                value: data.value,
                y: data.y,
                visible: true,
              });
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  boxShadow: {},
  mainContainer: {
    backgroundColor: GlobalStyles.DivContainer.backgroundColor,
    height: GlobalStyles.DivContainer.height,
    width: "100%",
    flex: GlobalStyles.DivContainer.flex,
  },

  titleTextRow: {
    flexDirection: "row",
    marginTop: GlobalStyles.Title.marginTop,
    width: GlobalStyles.DivContainer.width,
    marginLeft: GlobalStyles.DivContainer.marginLeft,
    alignItems: "center",
  },

  titleText: {
    fontSize: GlobalStyles.Title.fontSize,
    fontWeight: GlobalStyles.Title.fontWeight,
    marginLeft: horizontalScale(10),
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

  balanceContainer: {
    width: "90%",
    marginLeft: "5%",
    flexDirection: "row",
    backgroundColor: "white",
    borderRadius: 15,

    alignItems: "center",
    padding: "5%",

    marginTop: "5%",
  },

  money: {
    color: "blue",
    fontWeight: "700",
    fontSize: 16,
  },
  carbonSpendingAnalysysBarBackground: {
    width: "100%",
    height: verticalScale(35),
    marginTop: "2.5%",
    backgroundColor: "white",
  },
  containerSpacing: { paddingHorizontal: "5%" },
  carbonSpendingAnalysysBarProgress: {
    height: "100%",
    borderRadius: 15,
    maxWidth: "100%",
  },
  carbonSpendingAnalysysDiv: {
    width: "90%",
    marginLeft: "5%",
    height: "auto",
  },
  barText: {
    left: 20,
    top: "25%",
    fontSize: 15,
    fontWeight: "bold",
  },
  rounded: {
    borderRadius: 15,
  },

  subtitleText: {
    marginLeft: "5%",
    marginTop: "2.5%",
    fontSize: 15,
    fontWeight: "700",
  },

  transactionBox: {
    width: "90%",
    height: verticalScale(80),
    marginTop: "5%",
    marginLeft: "5%",
    backgroundColor: "white",
    borderRadius: 15,
  },
});

export default Analytics;
