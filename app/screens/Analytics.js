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
  ImageBackground,
  Text,
} from "react-native";



import GlobalStyles from "../../GlobalStyles";
import { LineChart } from "react-native-chart-kit";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { horizontalScale, verticalScale } from "../config/metrics";
import { VictoryPie, VictoryChart, VictoryTheme } from "victory-native";
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
  UpcomingTransactionBody,
  UpcomingHead,
} from "../components/transactions";
import colors from "../config/colors";
import Tagline from "../components/Tagline";
import * as Device from "expo-device";
import { BlurView } from "expo-blur/build";

const screenWidth = Dimensions.get("window").width;

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
  const [name, setName] = useState([]);
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
    const userDataReturn = await apiCall.GetAllAccounts("C122BMS7");
    console.log(dataCall, "this is data call");
    setCarbonGraphData(carbonSpendDataBarGraph);
    setCatNames(carbonSpendDataBarGraph.labels);
    setDataPercentages(carbonSpendDataBarGraph.percentages);
    setCarbonSpendData(carbonSpendData.chartData);
    setTotalFootprint(carbonSpendData.total);
    setTotalTrans(dataCall.totalTransactions);
    setTotal(dataCall.totalSpend);
    setName(userDataReturn);
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

  const colors = ["tomato", "orange", "gold", "cyan", "#5AC661"];

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
      <ImageBackground
        source={require("../assets/backgrounds/River.png")}
        style={styles.backgroundImage}
      >
        <View style={styles.header}>
          <View>
            <Text style={styles.nameText}>Spend Analytics</Text>
            <Text style={styles.welcomText}>Track & control your spending</Text>
          </View>
          <View style={styles.iconContainer}>
            <DarkMode />
            <Notification />
          </View>
        </View>
      </ImageBackground>
      <View style={styles.mainContainer}>
        <BlurView
         tint="light"
         intensity={60}
        style={styles.innerContainer}>
          {graphData && <Bazier graphData={graphData} />}
          {graphData && (
            <View
              style={{
                flexDirection: "row",
                flex: 1,
                justifyContent: "space-evenly",
                alignItems: "center",
                marginTop: verticalScale(30),
                paddingBottom: verticalScale(5),
                // opacity: 0.5,
                borderBottomWidth: 1.5,
                borderBottomColor: "gray",
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
                        fontFamily: "Montserrat",
                        color:
                          active === tab.title
                            ? GlobalStyles.Color.gray_500
                            : GlobalStyles.Color.lightBlack,
                      }}
                    >
                      {tab.title}
                    </AppText>
                  </TouchableWithoutFeedback>
                ))}
            </View>
          )}
          {/* <View style={styles.titleTextRow}>
            <AppText style={[styles.titleText, ]}>Analysis</AppText>
          </View> */}

          {/* 
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
          </View> */}
          <View
            style={{
              backgroundColor: GlobalStyles.Color.white,
              paddingBottom: "5%",
              borderRadius: 10,
            }}
          >
            <View
              style={{
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <VictoryPie
                style={{ labels: { fill: "black" }, width: "100%" }}
                colorScale={["tomato", "orange", "gold", "cyan", "#5AC661"]}
                innerRadius={device == 1 ? 130 : 300}
                labelRadius={device == 1 ? 110 : 320}
                padAngle={1}
                // labels={({ datum }) => `${datum.x[0]}`}
                labels={({ datum }) => `${datum.x[0]}`}
                // cornerRadius={10}
                data={carbnonSpendData}
                cornerRadius={({ datum }) => datum.y * 5}
                width={device == 1 ? 300 : 200}
                height={device == 1 ? 320 : 300}
              />

             <BlurView 
             tint="light"
             intensity={100}
              style={{
                marginTop: -20,
                marginBottom: '10%',
                width: 30,
                height: 10,
                backgroundColor: "rgba(0,0,0,0.5)",
                borderRadius: 15,
                transform: [
                  {scaleX: 3}
                ]

              }}
              overflow='hidden'
             />


              <View
                style={{
                  position: "absolute",
                  // flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: 28,
                  bottom: "43%",
                  left: device == 1 ? "30%" : "35%",
                }}
              >
                <View>
                  <AppText
                    style={{
                      fontSize: 20,
                      fontFamily: "Montserrat",
                      width: "100%",
                      textAlign: "center",
                      marginLeft: "5%",
                    }}
                  >
                    Total Spend
                  </AppText>
                  <AppText
                    style={{
                      fontSize: 25,
                      fontFamily: "Montserrat",
                      width: "100%",
                      textAlign: "center",
                      color: GlobalStyles.Color.black,
                    }}
                  >
                    {/* {totalFootprint} */}£ {totalSpend.toFixed(2)}
                  </AppText>
                </View>
              </View>
            </View>
            <View style={[styles.balanceContainer]}>
              <AppText
                style={{
                  flex: 2,
                  fontFamily: "Montserrat-Medium",
                  fontSize: 14,
                  color: GlobalStyles.Color.lightBlack,
                }}
              >
                Money Spent
              </AppText>

              <AppText
                style={{
                  fontFamily: "Montserrat",
                  fontSize: 16,
                  color: GlobalStyles.Color.lightBlack,
                }}
              >
                £ {totalSpend.toFixed(2)}{" "}
              </AppText>
            </View>
            <View style={[styles.balanceContainer]}>
              <AppText
                style={{
                  flex: 2,
                  fontFamily: "Montserrat-Medium",
                  fontSize: 14,
                  color: GlobalStyles.Color.lightBlack,
                }}
              >
                Money Received
              </AppText>

              <AppText
                style={{
                  fontFamily: "Montserrat",
                  fontSize: 16,
                  color: GlobalStyles.Color.lightBlack,
                }}
              >
                {/* £ {totalSpend.toFixed(2)}{" "} */}
                Coming soon..
              </AppText>
            </View>
            <View style={[styles.balanceContainer]}>
              <AppText
                style={{
                  flex: 2,
                  fontFamily: "Montserrat-Medium",
                  fontSize: 14,
                  color: GlobalStyles.Color.lightBlack,
                }}
              >
                No.of Payments
              </AppText>

              <AppText
                style={{
                  fontFamily: "Montserrat",
                  fontSize: 16,
                  color: GlobalStyles.Color.lightBlack,
                }}
              >
                {totalTransactions}
              </AppText>
            </View>
            <View style={[styles.balanceContainer]}>
              <AppText
                style={{
                  flex: 2,
                  fontFamily: "Montserrat-Medium",
                  fontSize: 14,
                  color: GlobalStyles.Color.lightBlack,
                }}
              >
                Current Balance
              </AppText>

              <AppText
                style={{
                  fontFamily: "Montserrat",
                  fontSize: 16,
                  color: GlobalStyles.Color.lightBlack,
                }}
              >
                £ {balance}
              </AppText>
            </View>

            {/* <View
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
                  <AppText style={{ color: "#999", fontSize: 12 }}>
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
          </View> */}
            {/* 
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
          </View> */}

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
            </View>
          </View>

          {/* <View style={[styles.containerSpacing, { marginVertical: 40,borderRadius:10 }]}>
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
          </View> */}
          <View
            style={[
              styles.containerSpacing,
              { marginVertical: 40, borderRadius: 10 },
            ]}
          >
            <UpcomingHead headerTitle="Upcoming spending" />
            {data.map((transaction, index) => (
              <UpcomingTransactionBody
                key={index}
                name={transaction.scheduleID}
                date={transaction.date}
                amount={transaction.amount}
                credit={transaction.credit}
                accountID={accountID}
              />
            ))}
          </View>
          <View style={{ height: 20, width: "100%", position: "relative" }} />
        </BlurView>
      </View>
      <View
        style={{
          position: "absolute",
          bottom: "0%",
          width: "100%",
          paddingHorizontal: 10,
          left: "0%",
          zIndex:10,
        }}
      >
        <Tagline />
      </View>

      <ImageBackground
        resizeMode="stretch"
        source={require("../assets/backgrounds/replaceCard.jpg")}
        style={styles.container}
      />

      {/* <Text style={styles.bottomText}>
          Your <Text style={styles.bottomTextBold}> Money </Text>• Your{" "}
          <Text style={styles.bottomTextBold}>Planet</Text> • Your{" "}
          <Text style={styles.bottomTextBold}>Choice</Text>
        </Text> */}
    </ScrollView>
  );
};
const DarkMode = () => (
  <View style={styles.iconStyle}>
    <Ionicons name="moon" color={GlobalStyles.Color.white} size={24} />
  </View>
);
const Notification = () => (
  <View style={styles.iconStyle}>
    <View style={styles.iconBadgeContainer}>
      <Text style={styles.iconBadgeNumber}>1</Text>
    </View>
    <MaterialCommunityIcons
      name="bell-outline"
      color={GlobalStyles.Color.white}
      size={24}
    />
  </View>
);

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
        width: "100%",
        
        // backgroundColor: "red"
      }}
    >
      {/* <AppText>Bezier Line Chart</AppText> */}
     
      <LineChart
        style={{
          
          paddingRight: 15,
          marginRight:10,

      }}
        data={{
          labels: xAxis,
          datasets: [{ data: yAxis }],
        }}
       width={screenWidth * 0.9} // from react-native
        height={220}
        yAxisLabel="£"
        yAxisSuffix=""
        yAxisInterval={1} // optional, defaults to 1
        withVerticalLines={false}
        segments={8}
        withHorizontalLabels={false}
        chartConfig={{
          // background: "transparent",
          backgroundGradientFrom: "rgba(255,255,255,0)",
          backgroundGradientFromOpacity: 0,
          backgroundGradientTo: "rgba(255,255,255,0)",
          backgroundGradientToOpacity: 0,
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => `#179424`,
          labelColor: (opacity = 1) => `rgba(105,105,105, ${opacity})`,
          fillShadowGradientFrom: "#5AC661",
          fillShadowGradientTo: GlobalStyles.Color.backgroundColorOg,
          strokeWidth: 1,
          style: { borderRadius: 16 },
          propsForBackgroundLines: {
            strokeDasharray: "",
            stroke: '#0101FD',
            strokeOpacity: 0.3,
            strokeWidth: 0.3
          },
          propsForDots: {
            r: "3",
            strokeWidth: "8",
            stroke: `rgba(1, 1, 253, 0.45)`,
            fill: '#0101FD'
            
            
          },
        }}
        
       
        decorator={() => {
          return tooltipPos.visible ? (
            <View>
              <Svg>
                <Rect
                  x={tooltipPos.x - 15}
                  y={tooltipPos.y + 10}
                  width="60"
                  height="30"
                  fill="#179424"
                  rx={15}
                  ry={15}
                />
                <TextSVG
                  x={tooltipPos.x + 15}
                  y={tooltipPos.y + 30}
                  fill="white"
                  fontSize="8"
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
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: -20,
    zIndex: 1,
    paddingHorizontal: "5%",
  },
  innerContainer: {
    backgroundColor: "rgba(255,255,255,0.5)",
    height: GlobalStyles.DivContainer.height,
    width: "100%",
    flex: GlobalStyles.DivContainer.flex,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderColor: 'white',
    borderWidth: 0.5,
    marginTop: -70,
    zIndex: 10,
    overflow: 'hidden'
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
    width: "100%",
    // marginLeft: "5%",
    flexDirection: "row",
    backgroundColor: GlobalStyles.Color.white,
    // borderRadius: 15,

    alignItems: "center",
    paddingHorizontal: "5%",
    paddingVertical: "1%",
  },

  money: {
    color: GlobalStyles.Color.blue_100,
    fontWeight: "700",
    fontSize: 16,
  },
  carbonSpendingAnalysysBarBackground: {
    width: "100%",
    height: verticalScale(35),
    marginTop: "2.5%",
    backgroundColor: GlobalStyles.DivContainer.backgroundColor,
  },
  containerSpacing: { paddingHorizontal: "0%" },
  carbonSpendingAnalysysBarProgress: {
    height: "100%",
    borderRadius: 15,
    maxWidth: "100%",
  },
  carbonSpendingAnalysysDiv: {
    width: "100%",
    height: "auto",
    backgroundColor: GlobalStyles.Color.white,
    paddingHorizontal: "5%",
    paddingVertical: "2%",
    marginTop: "5%",
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
    marginLeft: "0%",
    marginTop: "2.5%",
    fontSize: 15,
    fontFamily: "Montserrat-SemiBold",
    color: GlobalStyles.Color.lightBlack,
  },

  transactionBox: {
    width: "90%",
    height: verticalScale(80),
    marginTop: "5%",
    marginLeft: "5%",
    backgroundColor: GlobalStyles.Color.white,
    borderRadius: 15,
  },
  backgroundImage: {
    height: 270,
    width: "100%",
  },
  backgroundImage: {
    height: 270,
    width: "100%",
  },
  iconContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 5,
  },
  welcomText: {
    fontSize: 14,
    color: GlobalStyles.Color.white,
    fontFamily: "Montserrat-Regular",
  },
  nameText: {
    fontSize: 18,
    color: GlobalStyles.Color.white,
    fontFamily: "Montserrat",
  },
  iconStyle: {
    height: 40,
    width: 40,
    // borderWidth: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    borderRadius: 20,
    backgroundColor: "rgba(0, 0, 0, .25)",
  },
  iconBadgeContainer: {
    position: "absolute",
    backgroundColor: "red",
    height: 10,
    width: 10,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    right: 8,
    top: 8,
    zIndex: 5,
  },
  iconBadgeNumber: {
    fontSize: 6,
    color: colors.white,
    fontWeight: "900",
  },
  header: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
    marginTop: 30,
  },
  container: {
    width: "100%",
    height: 300,
    // position: "absolute",
    bottom: 0,
    zIndex: 0,
  },
  bottomText: {
    color: GlobalStyles.Color.white,
    fontSize: 14,
    fontFamily: "Montserrat",
    fontWeight: "regular",
  },
  bottomTextBold: {
    color: GlobalStyles.Color.white,
    fontSize: 16,
    fontFamily: "Montserrat",
    fontWeight: "bold",
  },
});

export default Analytics;
