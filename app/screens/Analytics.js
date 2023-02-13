import React, { useContext, useEffect, useState, useCallback } from "react";
import {
  RefreshControl,
  Text,
  StyleSheet,
  Image,
  View,
  Pressable,
  ScrollView,
  Dimensions,
} from "react-native";
import GlobalStyles from "../../GlobalStyles";
import * as Progress from "react-native-progress";
import { LineChart } from "react-native-chart-kit";

import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from "../config/metrics";

import api from "../api/api_list";
import AuthContext from "../auth/context";
import moment from "moment";
import Screen from "../components/Screen";
import { NONE } from "apisauce";
import { Rect, Text as TextSVG, Svg } from "react-native-svg";

const Analytics = ({ navigation }) => {
  const [balance, setBal] = useState(0);
  const [transactions, setTrans] = useState([]);
  const [totalSpend, setTotal] = useState(0);
  const [totalTransactions, setTotalTrans] = useState(0);
  const [priceData, setPriceData] = useState([]);
  const [dates, setDates] = useState([]);
  const [dataObj, setDataObj] = useState([]);
  const catNames = ["Health", "Food & Beverages", "Shopping", "Transport"];
  const dataPercentages = ["70%", "50%", "40%", "30%"];

  const [recentTransactions, setRecent] = useState([]);
  const [transactionCategories, setCat] = useState();

    const [refreshing, setRefreshing] = useState(false);

  const authContext = useContext(AuthContext);

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    if (recentTransactions.length !== 0) {
      const data = transactionData(recentTransactions);
      const dates = transactionDate(recentTransactions);
      const transData = transactionObj(recentTransactions).map((data) => {
        return data.amount;
      });
      console.log("why", data, dates);
      console.log("herreeee");
      setPriceData(data);
      setDates(dates);
      setDataObj(transData);
    }
  }, [recentTransactions]);

  const loadData = async () => {
    const response = await api.GetAccount(authContext.accountID);
    const data = response.data.details.balance;
    setBal(data);

    const transactionCall = await api.GetTransactions(authContext.accountID);
    const transData = transactionCall.data.details;
    let total = 0;
    let transCat = {};

    transData.content.forEach((transaction) => {
      total += transaction.amount;
      transCat[transaction.type] = transCat[transaction.type]
        ? transCat[transaction.type] + transaction.amount
        : transaction.amount;
    });

    setTotalTrans(transData.totalSize);
    setTotal(total);
    setRecent([
      transData.content[1],
      transData.content[1],
      transData.content[2],
    ]);
    setCat(transCat);
    setTrans(transData);

    const acc = await api.GetAccount(authContext.accountID);
    const det = acc.data.details.associates;
  };
  console.log(transactionCategories);

  const transcationKeys = (trans) => {
    return (transKeys = Object.keys(trans));
  };

  const transactionData = (transactions) => {
    return transactions.map((transaction) => {
      console.log("deya", transaction.amount);
      return transaction.amount;
    });
  };

  const transactionDate = (transactions) => {
    return transactions.map((transaction) => {
      console.log("deya", transaction.transactionDate);
      return transaction.transactionDate.split("T")[0].split("-")[1];
    });
  };

  const transactionObj = (transactions) => {
    const arr = transactions.map((transaction) => {
      console.log("deya", transaction.amount);

      return {
        amount: transaction.amount,
        date: transaction.transactionDate.split("T")[0].split("-")[1],
      };
    });

    // const date = transactions.map((transaction) => {
    //   console.log('deya2deya',transaction.transactionDate)
    //   return {date: transaction.transactionDate.split("T")[0].split("-")[1]}
    // })

    let result = Object.values(
      arr.reduce((a, { amount, date }) => {
        if (!a[date]) a[date] = Object.assign({}, { amount, date });
        else a[date].amount += amount;
        return a;
      }, {})
    );

    return result;
  };

  console.log(transactionCategories);
  console.log(
    "here",
    recentTransactions,
    recentTransactions[0]?.transactionDate?.split("T")[0]
  );

    const onRefresh = useCallback(() => {
    console.log("1st refresh")
    setRefreshing(true);
    setTimeout(() => {
      console.log("2nd refresh")
      loadData()
      setRefreshing(false);
    }, 2000);
  }, [refreshing]);

  return (
    <ScrollView
       refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
    >

      <View style={styles.mainContainer}>
        <View style={styles.titleTextRow}>
          <Text style={styles.titleText}>Analysis</Text>
        </View>

        <View style={styles.balanceContainer}>
          <Text style={{ flex: 8, fontWeight: "700" }}>Balance</Text>
          <Text
            style={{
              flex: 2,
              alignItems: "flex-end",
              justifyContent: "flex-end",
              textAlign: "left",
              width: "100%",
              fontWeight: "700",
              color: "#0101FD",
            }}
          >
            £{balance}
          </Text>
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
            style={{
              height: "100%",
              backgroundColor: "white",
              width: "47.5%",
              borderRadius: 15,
              padding: "5%",
              alignSelf: "center",
            }}
          >
            <Text>Total Spend</Text>
            <Text style={styles.money}>£ {totalSpend.toFixed(2)}</Text>
            <View style={{ flex: 1, flexDirection: "row" }}>
              <Text
                style={{
                  color: "#999",
                  fontSize: 14,
                  alignItems: "flex-start",
                }}
              >
                No. of Payments
              </Text>
              <Text
                style={{ color: "#999", fontSize: 14, alignItems: "flex-end" }}
              >
                {" "}
                {totalTransactions}
              </Text>
            </View>
          </View>
          <View
            style={{
              height: "100%",
              backgroundColor: "white",
              width: "47.5%",
              borderRadius: 15,
              padding: "5%",
            }}
          >
            <Text>Average Monthly Spendings</Text>
            <Text style={styles.money}>£ {balance}</Text>
          </View>
        </View>

        <View style={styles.titleTextRow}>
          <Text style={styles.titleText}>Spending's</Text>
        </View>
        <View style={[styles.carbonSpendingAnalysysDiv, styles.rounded]}>
          <Text style={styles.subtitleText}>{catNames[0]}</Text>
          <View
            style={[styles.carbonSpendingAnalysysBarBackground, styles.rounded]}
          >
            <View
              style={[styles.carbonSpendingAnalysysBarProgress, styles.rounded]}
              width={dataPercentages[0]}
              backgroundColor="#E4732D"
            >
              <Text style={styles.barText}>{dataPercentages[0]}</Text>
            </View>
          </View>

          <Text style={styles.subtitleText}>{catNames[1]}</Text>
          <View
            style={[styles.carbonSpendingAnalysysBarBackground, styles.rounded]}
          >
            <View
              style={[styles.carbonSpendingAnalysysBarProgress, styles.rounded]}
              width={dataPercentages[1]}
              backgroundColor="#F3B53F"
            >
              <Text style={styles.barText}>{dataPercentages[1]}</Text>
            </View>
          </View>

          <Text style={styles.subtitleText}>{catNames[2]}</Text>
          <View
            style={[styles.carbonSpendingAnalysysBarBackground, styles.rounded]}
          >
            <View
              style={[styles.carbonSpendingAnalysysBarProgress, styles.rounded]}
              width={dataPercentages[2]}
              backgroundColor="#DC85F5"
            >
              <Text style={styles.barText}>{dataPercentages[2]}</Text>
            </View>
          </View>

          <Text style={styles.subtitleText}>{catNames[3]}</Text>
          <View
            style={[styles.carbonSpendingAnalysysBarBackground, styles.rounded]}
          >
            <View
              style={[styles.carbonSpendingAnalysysBarProgress, styles.rounded]}
              width={dataPercentages[3]}
              backgroundColor="#5888F5"
            >
              <Text style={styles.barText}>{dataPercentages[3]}</Text>
            </View>
          </View>

          {priceData.length !== 0 ? (
            <Bazier
              priceData={priceData}
              transDate={dates}
              transObj={dataObj}
              style={{ backgroundColor: "red" }}
            />
          ) : null}
        </View>

        <View style={styles.titleTextRow}>
          <Text style={styles.titleText}>Recent transactions</Text>
        </View>

        {recentTransactions.map((transaction, index) => (
          <View key={index}>
            <Pressable
              style={[styles.transactionBox, styles.rounded]}
              onPress={() => navigation.navigate("Transactions")}
            >
              <View style={{ height: "100%", flexDirection: "row" }}>
                <View
                  style={{
                    width: 50,
                    height: 50,
                    borderRadius: 25,
                    backgroundColor: "#F6F5F8",
                    borderColor: "black",
                    alignSelf: "center",
                    marginLeft: "2.5%",
                  }}
                >
                  <Text
                    style={{
                      alignSelf: "center",
                      justifyContent: "center",
                      alignItems: "center",
                      textAlignVertical: "center",
                      height: "100%",
                      fontWeight: "700",
                    }}
                  >
                    {transaction.sourceId[0]}
                  </Text>
                </View>
                <View
                  style={{
                    flex: 3.5,
                    alignSelf: "center",
                    justifyContent: "space-evenly",
                    marginLeft: "5%",
                  }}
                >
                  <Text style={{ fontSize: 14, fontWeight: "700" }}>
                    {transaction.sourceId}
                  </Text>
                  <Text style={{}}>
                    {moment(transaction.transactionDate).format("LL")}
                  </Text>
                </View>
                <View
                  style={{
                    flex: 5,
                    justifyContent: "space-evenly",
                    alignItems: "flex-end",
                    marginRight: "2.5%",
                  }}
                >
                  <Text style={{ marginRight: "2.5%", fontWeight: "700" }}>
                    £{transaction.amount.toFixed(2)}
                  </Text>
                </View>
              </View>
            </Pressable>
          </View>
        ))}

        <View style={styles.titleTextRow}>
          <Text style={styles.titleText}>Upcoming Spending's</Text>
        </View>

        {recentTransactions.map((transaction, index) => (
          <View key={index}>
            <Pressable
              style={[styles.transactionBox, styles.rounded]}
              onPress={() => navigation.navigate("Transactions")}
            >
              <View style={{ height: "100%", flexDirection: "row" }}>
                <View
                  style={{
                    width: 50,
                    height: 50,
                    borderRadius: 25,
                    backgroundColor: "#F6F5F8",
                    borderColor: "black",
                    alignSelf: "center",
                    marginLeft: "2.5%",
                  }}
                >
                  <Text
                    style={{
                      alignSelf: "center",
                      justifyContent: "center",
                      alignItems: "center",
                      textAlignVertical: "center",
                      height: "100%",
                      fontWeight: "700",
                    }}
                  >
                    {transaction.sourceId[0]}
                  </Text>
                </View>
                <View
                  style={{
                    flex: 3.5,
                    alignSelf: "center",
                    justifyContent: "space-evenly",
                    marginLeft: "5%",
                  }}
                >
                  <Text style={{ fontSize: 14, fontWeight: "700" }}>
                    {transaction.sourceId}
                  </Text>
                  <Text style={{}}>
                    {moment(transaction.transactionDate).format("LL")}
                  </Text>
                </View>
                <View
                  style={{
                    flex: 5,
                    justifyContent: "space-evenly",
                    alignItems: "flex-end",
                    marginRight: "2.5%",
                  }}
                >
                  <Text style={{ marginRight: "2.5%", fontWeight: "700" }}>
                    £{transaction.amount.toFixed(2)}
                  </Text>
                </View>
              </View>
            </Pressable>
          </View>
        ))}
              <View style={{height: 20, width: "100%"}}/>

      </View>
    </ScrollView>
  );
};

const Bazier = ({ priceData, transDate, transObj }) => {
  let [tooltipPos, setTooltipPos] = useState({
    x: 0,
    y: 0,
    visible: false,
    value: 0,
  });

  console.log("finished", transObj);

  return (
    <View
      style={{
        width: "90%",
        marginLeft: "5%",
      }}
    >
      {/* <Text>Bezier Line Chart</Text> */}

      <LineChart
        data={{
          labels: ["Sep", "Oct", "Nov", "Dec", "Jan", "Feb"],
          datasets: [{ data: [0, 0, 0, 0, ...transObj] }],
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
          backgroundGradientFrom: "#F6F5F8",
          backgroundGradientTo: "#F6F5F8",
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(0,0,255,${opacity})`,
          labelColor: (opacity = 1) => `rgba(105,105,105, ${opacity})`,
          fillShadowGradientFrom: "blue",
          fillShadowGradientTo: "#F6F5F8",
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
                  fill="blue"
                  fontSize="10"
                  fontWeight="bold"
                  textAnchor="middle"
                >
                  {`£ ${tooltipPos.value}`}
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
  mainContainer: {
    backgroundColor: GlobalStyles.DivContainer.backgroundColor,
    height: GlobalStyles.DivContainer.height,
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

  balanceContainer: {
    width: "90%",
    marginLeft: "5%",
    flexDirection: "row",
    backgroundColor: "white",
    borderRadius: 15,
    height: 45,
    alignItems: "center",
    padding: "2.5%",
    marginTop: "5%",
  },

  money: {
    color: "#0101FD",
    fontWeight: "700",
  },
  carbonSpendingAnalysysBarBackground: {
    width: "100%",
    height: verticalScale(35),
    marginTop: "2.5%",
    backgroundColor: "white",
  },

  carbonSpendingAnalysysBarProgress: {
    height: "100%",
    backgroundColor: "orange",
    borderRadius: 15,
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
