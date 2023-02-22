import React, { useContext, useEffect, useState, useCallback } from "react";
import {
  RefreshControl,
  Text,
  StyleSheet,
  Image,
  View,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  Pressable,
  TouchableWithoutFeedback, 
  ActivityIndicator
} from "react-native";
import GlobalStyles from "../../GlobalStyles";
import * as Progress from "react-native-progress";
import { LineChart } from "react-native-chart-kit";



import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from "../config/metrics";

import apiCall from "../api/apiCall";
import AuthContext from "../auth/context";
import moment from "moment";
import { Rect, Text as TextSVG, Svg } from "react-native-svg";

import DoughnutChart from "../components/DoughnutChart";


const Analytics = ({ navigation }) => {
  const [balance, setBal] = useState(0);
  const [transactions, setTrans] = useState([]);
  const [totalSpend, setTotal] = useState(0);
  const [totalTransactions, setTotalTrans] = useState(0);
  const [graphData, setGraphData] = useState(null)
  const [graphSetting, setGraph] = useState("Year")

  const [monthAverage, setMonthAverage] = useState(0);
  const catNames = ["Health", "Food & Beverages", "Shopping", "Transport"];
  const dataPercentages = ["75%", "50%", "40%", "30%"];
  const [recentTransactions, setRecent] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [isLoading, setIsLoading] = useState(false)
  const authContext = useContext(AuthContext);


  useEffect(() => {
    loadData();
  }, []);
 
  const loadData = async () => {
    setIsLoading(true)
    const dataCall = await apiCall.GetAnalysisData(authContext.accountID);
    setTotalTrans(dataCall.totalTransactions);
    setTotal(dataCall.totalSpend);
    setRecent([
      dataCall.transactions[0],
      dataCall.transactions[1],
      dataCall.transactions[2],
    ]);
    setTrans(dataCall.transactions);
    setBal(dataCall.balance);
    setMonthAverage(dataCall.average)


    const graphData = await apiCall.GetTransactionsWeek(authContext.accountID);
    setIsLoading(false)
    setGraphData(graphData)
    

  };

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


    const onRefresh = useCallback(() => {
    console.log("1st refresh")
    setRefreshing(true);
    setTimeout(() => {
      console.log("2nd refresh")
      loadData()
      setRefreshing(false);
    }, 2000);
  }, [refreshing]);

  const changeGraphData = async(time) => {
    console.log(time)
    switch(time){
      case "Year":
          const graphDataYear = await apiCall.GetTransactionsYear(authContext.accountID);
          setGraphData(graphDataYear)
        break;
      case "Month":
          const graphDataMonth = await apiCall.GetTransactionsMonth(authContext.accountID);
          setGraphData(graphDataMonth)
        break;
      case "Week":
          const graphDataWeek = await apiCall.GetTransactionsWeek(authContext.accountID);
          setGraphData(graphDataWeek)
        break;
    }
  }

  const graphTabs = [
    {id: 1, title: "Week"},
    {id: 2, title: "Month"},
    {id: 3, title: "Year"}
  ]

  if(isLoading) {
    return (
         <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
             <ActivityIndicator size={'large'}/>
         </View>
    )
   }

  return (
    <ScrollView
       refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
    >

      <View style={styles.mainContainer}>
        <View style={styles.titleTextRow}>
          {/* <Text style={[styles.titleText, ]}>Analysis</Text> */}
        </View>

        <View style={{flex:1, justifyContent: "center", alignItems: "center", marginTop: 28,}}>
          <Text style={{fontSize: 20, fontWeight: "700",  width: 250, textAlign: "center"}}>Your average monthly Carbon Footprint is</Text>
        </View>

       <View>
       
        <View style={{position: "absolute", flex:1, justifyContent: "center", alignItems: "center", marginTop: 28, bottom:"40%", left: "20%"}}>
          <Text style={{fontSize:  50, fontWeight: "700",  width: 250, textAlign: "center"}}>2436</Text>
          <Text style={{fontSize: 20, fontWeight: "700",  width: 250, textAlign: "center"}}>kg CO2</Text>
        </View>

        <DoughnutChart /></View>
        <View style={styles.balanceContainer}>
          <Text style={{ flex: 2, fontWeight: "700", fontSize: 16}}>Balance</Text>
          <Text
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
            <Text style={{
              fontWeight: "800",
              fontSize: 30
            }}>£ {balance}</Text>
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
            <Text style={{fontWeight: "500"}}>Total Spend</Text>
            <Text style={styles.money}>£ {totalSpend.toFixed(2)}</Text>
            <View style={{ flex: 1, flexDirection: "row" }}>
              <View style={{
                  flex:1,
                  marginTop: verticalScale(5),
                  alignItems: "flex-start",
                  width: horizontalScale(75)
                }} >
              <Text
              style={{color: "#999", fontSize: 14,}}
              >
                No. of Payments
              </Text>
              </View>


              <View style={{  flex:1, alignItems: "flex-end", justifyContent:"flex-end"}}>
              <Text style={{color: "#999",fontSize: 22}}>
                {totalTransactions}
              </Text>
              </View>
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
            <Text style={{fontWeight: "700"}}>Average Monthly Spendings</Text>
            <View style={{marginTop: verticalScale(5), flex: 1, justifyContent: "flex-end"}}>
              <Text style={styles.money}>£ {monthAverage.toFixed(2)}</Text>
            </View>
          </View>
        </View>

        <View style={styles.titleTextRow}>
          <Image 
            source={require("../assets/icon-featherpiechart.png")} 
            resizeMode="contain"
            style={{ width: horizontalScale(25), height: verticalScale(25)}} />
          <Text style={[styles.titleText,{fontSize: 24}]}>Spendings</Text>
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

      
          {graphData && <View style={
            {
              flexDirection: "row",
              flex:1,
              justifyContent: "space-evenly",
              alignItems: "center",
              marginTop: verticalScale(30),
              paddingBottom: verticalScale(5),
              opacity: 0.3,
              
            
              borderBottomWidth: 1.5
              


            }
          }>
          {graphData && (
            
            graphTabs.map((tab, index) => (
              <TouchableWithoutFeedback
                key={index}
                onPress={() => changeGraphData(tab.title)}
              >
                <Text style={{
                  fontSize: 15,
                  fontWeight: "700"
                }}>{tab.title}</Text>
              </TouchableWithoutFeedback>

              ))
            )}
          </View>}

          
         
            {graphData && <Bazier
              graphData={graphData}
            />}
         
          
         
        
         
        </View>

        <View style={styles.titleTextRow}>
        <Image 
          resizeMode="contain"
          source={require("../assets/icon-withdraw.png")} 
          style={{ width: horizontalScale(25), height: verticalScale(25)}}/>
          <Text style={[styles.titleText,{fontSize: 24}]}>Recent transactions</Text>
        </View>

        {recentTransactions.map((transaction, index) => (
          <View key={index}>
            <TouchableOpacity
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
                    justifyContent: "center",
                      alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      alignSelf: "center",
                      
                      textAlignVertical: "center",
                     
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
            </TouchableOpacity>
          </View>
        ))}

        <View style={styles.titleTextRow}>
        <Image 
          resizeMode="contain"
          source={require("../assets/icon-featherpiechart.png")} 
          style={{ width: horizontalScale(25), height: verticalScale(25)}}/>
          <Text style={[styles.titleText,{fontSize: 24}]}>Upcoming Spendings</Text>
        </View>

        {recentTransactions.map((transaction, index) => (
          <View key={index}>
            <TouchableOpacity
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
                    justifyContent: "center",
                      alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      alignSelf: "center",
                      justifyContent: "center",
                      alignItems: "center",
                      textAlignVertical: "center",
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
            </TouchableOpacity>
          </View>
        ))}
              <View style={{height: 20, width: "100%"}}/>

      </View>
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

  const { total, xAxis, yAxis } = graphData

  console.log("finished", total, xAxis, yAxis );

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
    marginLeft: horizontalScale(10)
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
    color: "#0101FD",
    fontWeight: "700",
    fontSize: 16
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
    maxWidth: "100%"
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
