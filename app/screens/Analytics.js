import React, { useContext, useEffect, useState } from "react";
import { Text, StyleSheet, Image, View, Pressable, ScrollView, Dimensions } from "react-native";
import GlobalStyles from "../../GlobalStyles";
import * as Progress from 'react-native-progress';
import {
  LineChart,

} from "react-native-chart-kit";

import { horizontalScale, moderateScale, verticalScale } from '../config/metrics'

import api from "../api/api_list"
import AuthContext from "../auth/context";
import moment from 'moment';
import Screen from "../components/Screen";
import { NONE } from "apisauce";
import { Rect, Text as TextSVG, Svg } from "react-native-svg";



const Analytics = ({navigation}) => {

  const [balance, setBal] = useState(0)
  const [transactions, setTrans] = useState([])
  const [totalSpend, setTotal] = useState(0)
  const [totalTransactions, setTotalTrans] = useState(0)
  const [priceData, setPriceData] = useState([])
  const [dates, setDates] = useState([])
  const [dataObj, setDataObj] = useState([])
  
  const [recentTransactions, setRecent] = useState([])
  const [transactionCategories, setCat] = useState()
  

  
  const authContext = useContext(AuthContext)

  useEffect(() => {
    loadData()
  },[])

  useEffect(()=> {
   
    
    if(recentTransactions.length !== 0) {
      const data = transactionData(recentTransactions)
      const dates = transactionDate(recentTransactions)
      const transData = transactionObj(recentTransactions).map((data) => {
        return data.amount
      })
      console.log("why", data, dates)
      console.log('herreeee')
      setPriceData(data)
      setDates(dates)
      setDataObj(transData)
    } 
  },[recentTransactions])
  
  const loadData = async () => {
    const response = await api.GetAccount(authContext.accountID);
    const data = response.data.details.balance
    setBal(data)

    const transactionCall = await api.GetTransactions(authContext.accountID)
    const transData = transactionCall.data.details
    let total = 0
    let transCat = {}

    transData.content.forEach(transaction => {
      total += transaction.amount
      transCat[transaction.type] = transCat[transaction.type] ? transCat[transaction.type] + transaction.amount : transaction.amount;
    })

    setTotalTrans(transData.totalSize)
    setTotal(total)
    setRecent([transData.content[1],transData.content[1],transData.content[2]])
    setCat(transCat)
    setTrans(transData)

    const acc= await api.GetAccount(authContext.accountID)
    const det = acc.data.details.associates
   
  } 
  console.log(transactionCategories)



  const transcationKeys = (trans) => {
    return transKeys = Object.keys(trans)
  }

  const transactionData = (transactions) => {
    return transactions.map((transaction) => {
      console.log('deya',transaction.amount)
      return transaction.amount
    })
  }

  const transactionDate = (transactions) => {
    return transactions.map((transaction) => {
      console.log('deya',transaction.transactionDate)
      return transaction.transactionDate.split("T")[0].split("-")[1]
    })
  }

  const transactionObj = (transactions) => {
    const arr =transactions.map((transaction) => {
      console.log('deya',transaction.amount)
      
      return {amount: transaction.amount, date: transaction.transactionDate.split("T")[0].split("-")[1]}
    })

    // const date = transactions.map((transaction) => {
    //   console.log('deya2deya',transaction.transactionDate)
    //   return {date: transaction.transactionDate.split("T")[0].split("-")[1]}
    // })
   

    let result = Object.values(arr.reduce((a, {amount, date})=>{
      if(!a[date])
        a[date] = Object.assign({},{amount, date});
       else
        a[date].amount += amount;
      return a;
     },{}));

    return  result
  }


  console.log(transactionCategories)
  console.log('here',recentTransactions, recentTransactions[0]?.transactionDate?.split("T")[0])

  return (
          <Screen style={{backgroundColor: "#f3f5f5"}}>
              <ScrollView >
                
                  <View style={styles.mainContainer}>
                  <View style={[styles.historyParent, styles.iconContentLayout]}>

        </View>

                    <View style={styles.balanceContainer}>
                      <View style={{flex: 4}}>
                        <Text style={styles.textSub}>Balance</Text>
                      </View>
                      <View style={{flex: 6, alignItems: "flex-end"}}>
                        <Text style={styles.priceSub}>£{balance}</Text>
                      </View>
                    </View>

                    <View style={{flex: 1, width: "100%", height: "auto", marginTop:"5%", borderRadius: 15, flexDirection: "row", justifyContent: "space-between"}}>
                        <View style={{height: "100%", backgroundColor: "white", width: "49.5%", borderRadius: 15, padding: "5%"}}>
                            <Text>Total Spend</Text>
                            <Text style={styles.money}>£ {totalSpend}</Text>
                            <View style={{flex: 1, flexDirection: "row"}}>
                             <Text style={{color: "#999",fontSize: 14, alignItems: "flex-start"}}>No. of Payments</Text>
                             <Text style={{color: "#999", fontSize: 14 , alignItems: "flex-end"}}> {totalTransactions}</Text>
                             </View>
                        </View>
                        <View style={{height: "100%", backgroundColor: "white", width: "49.5%", borderRadius: 15, padding: "5%"}}>
                        <Text>Average Monthly Spendings</Text>
                          <Text style={styles.money}>£ {balance}</Text>

                        </View>
                    </View>


                    <View style={styles.containerSpace}>
                      <Text style={styles.subTitle}>Spendings</Text>
                    </View>
                    <View style={styles.progressContainer}>
                    {transactionCategories && transcationKeys(transactionCategories).map((transaction, index) =>(
                      <View style={styles.progressBar} key={index}>
                      <Progress.Bar 
                        progress={transactionCategories[transaction].toFixed(2)/totalSpend} 
                        width={null} 
                        height={40}
                        borderRadius={13}
                        borderColor={"transparent"}
                        color={['#42b0f5', '#ad42f5', '#17eb65', '#eb17d5'][index % 4]}
                        unfilledColor={"white"}

                      />
                      <View style={styles.progressItems}>
                        <View style={styles.shopping}>
                          <Text>{transaction}</Text>

                        </View>
                        <View style={styles.spendingAmount}>
                          <Text>£{transactionCategories[transaction].toFixed(2)}</Text>
                          <Text 
                          style={{
                            fontSize:8,
                            color: "#999",
                           
                          }}>7.2 kg C02</Text>
                        </View>
                      </View>
                      </View>
                    ))
                      
                     }
                     {/* {transactionCategories && console.log(transactionObj(transactions))} */}
                    </View>
                    
                    
                  </View>
                 {priceData.length !== 0 ? <Bazier priceData={priceData}  transDate={dates} transObj={dataObj} style={{backgroundColor: "red"}}/> : null}
                  <View style={styles.mainContainer}>
                  {priceData && console.log(transactionObj(recentTransactions))}
                    <View style={styles.containerSpace}>
                      <Text style={styles.subTitle}>Recent Transactions</Text>
                    </View>

                   
                      {recentTransactions.map((transaction, index) => (
                        
                      
                      <View  key={index} style={styles.balanceContainer}>
                        <View style={styles.transactionId}>
                          <Text style={styles.textSub}>{transaction.sourceId}</Text>
                          <Text style={styles.textSub}>{moment(transaction.transactionDate).format('LL')}</Text>
                          <Text style={styles.textSub}>{moment(transaction.transactionDate).format('LT')}</Text>
                        </View>
                        <View style={styles.transactionAmount}>
                          <Text style={styles.transactionPrice}>£ {transaction.amount.toFixed(2)}</Text>
                        </View>
                      </View>
                  
                          ))}
                  </View>
              </ScrollView>
          </Screen>
    );
};


const Bazier = ({ priceData, transDate, transObj }) => {
  let [tooltipPos,setTooltipPos] = useState(
    { x:0, y:0, visible:false, value:0 })

  console.log('finished', transObj)

  return(
    <View style={{justifyContent: "center", width: "80%", marginLeft: "10%"}}
    >
  {/* <Text>Bezier Line Chart</Text> */}


  <LineChart data={{ labels: ["Sep", "Oct", "Nov", "Dec" , "Jan", "Feb"],
      datasets: [{data: [0, 0, 0, 0,...transObj]}]}}
    width={Dimensions.get("window").width * .8} // from react-native
    height={220}
    yAxisLabel="£"
    yAxisSuffix=""
    yAxisInterval={1} // optional, defaults to 1
    withHorizontalLines= {false}
    withVerticalLines= {false}
    withHorizontalLabels={false}

    chartConfig={{
      backgroundGradientFrom: "#F6F5F8",
      backgroundGradientTo: "#F6F5F8",
      decimalPlaces: 2, // optional, defaults to 2dp
      color: (opacity = 1) => `rgba(0,0,255,${opacity})`,
      labelColor: (opacity = 1) => `rgba(105,105,105, ${opacity})`,
      fillShadowGradientFrom: "blue",
      fillShadowGradientTo: "white",
      strokeWidth: 5,
      style: {borderRadius: 16},
      propsForDots: {r: "3",strokeWidth: "8",stroke: `rgba(30, 81, 123, 0.3)`},
      }}
    bezier style={{marginVertical: 8,borderRadius: 0}}
    decorator={() => {
      return tooltipPos.visible ? <View>
          <Svg>
              <Rect x={tooltipPos.x - 15} 
                y={tooltipPos.y + 10} 
                width="60" 
                height="30"
                fill="white" 
                rx={.5} 
                ry={.5}
              />
                  <TextSVG
                      x={tooltipPos.x + 15}
                      y={tooltipPos.y + 30}
                      fill="blue"
                      fontSize="10"
                      fontWeight="bold"
                      textAnchor="middle">
                      {`£ ${tooltipPos.value}`}
                  </TextSVG>
          </Svg>
      </View> : null
      }}
      onDataPointClick={(data) => {
        let isSamePoint = (tooltipPos.x === data.x
                            && tooltipPos.y === data.y)
        isSamePoint ? setTooltipPos((previousState) => {
            return {
                      ...previousState,
                      value: data.value,
                      visible: !previousState.visible
                  }
        })
            :
    setTooltipPos({ x: data.x, value: data.value, y: data.y, visible: true });

}}
  />
</View>
  )
}
const styles = StyleSheet.create({
  avgSpendContainer: {
    backgroundColor: "white",
    borderRadius: moderateScale(15),
    borderWidth: 1,
    borderColor: "#e8e8e8",
    borderStyle: "solid",
    
    paddingHorizontal: horizontalScale(15),
    paddingVertical: verticalScale(15),
    width:170
    
  },
  balance: {
    flex: 5
  },
  balanceContainer: {
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: moderateScale(15),
    borderWidth: 1,
    borderColor: "#e8e8e8",
    borderStyle: "solid",
    flex: 1,
    flexDirection: "row",
    marginTop: verticalScale(20),
    width: "100%",
    height: "auto",
    paddingHorizontal: horizontalScale(25),
    paddingVertical: verticalScale(25)
  },
  containerSpace: {
    marginTop: 10
  },
  mainContainer: {
    paddingHorizontal: horizontalScale(25),
    paddingVertical: verticalScale(25)
  },
  money: {
    color: "blue",
    fontWeight: "bold"

  },
  noOfPayments: {
    flex:1,
    textAlign: "left"

  },
  payments: {
    flex:1,
    textAlign: "right"
  },
  priceSub: {
    color: "blue",
    fontSize: moderateScale(28),
    fontWeight: "bold"
    
  },
  iconContentLayout: {
    height: 16,
    position: "absolute",
  },
  historyParent: {
    top: 0,
    width: 300,
    left: 0,
  },
  historyTypo: {
    opacity: 0.3,
    letterSpacing: 1,
    fontSize: GlobalStyles.FontSize.size_xl,
    // fontFamily: GlobalStyles.FontFamily.helvetica,
    color: GlobalStyles.Color.gray_700,
    textAlign: "left",
    top: 0,
    position: "absolute",
  },
  history1: {
    marginLeft: -66,
    left: "50%",
  },
  progressBar: {
    marginTop: 10,
    shadowColor: "grey",
    shadowOpacity: "0.3",
  },
  progressContainer: {
    flex:1,
    width: "100%",
  },
  progressItems: {
    flex: 1,
    flexDirection: "row",
    paddingLeft: 30,
    position: "absolute",
    top: 12
    
 
  },
  groupParentPosition: {
    height: 60,
    left: "5%",
    right: "5%",
    top: "50%",
    position: "absolute",
  },
  groupParent: {
    marginTop: -46,
  },
  groupParent: {
    marginTop: -46,
  },
  history3: {
    right: -1,
    letterSpacing: 1,
    fontSize: GlobalStyles.FontSize.size_xl,
    // fontFamily: GlobalStyles.FontFamily.helvetica,
    color: GlobalStyles.Color.gray_800,
    textAlign: "left",
    fontWeight: "700",
    top: 0,
    position: "absolute",
  },
  history2: {
    marginLeft: 19,
    left: "50%",
  },
  shopping: {
    flex:2
  },
  spendContainer:{
    flex: 1,
    flexDirection: "row",
    marginTop: verticalScale(20),
    width: "100%",
    justifyContent:"space-between"
    
  },
  spendingAmount: {
   
    flex:1
  },
  subTitle: {
  
    fontSize: moderateScale(20),
    fontWeight: "bold"
  },
  totalSpendContainer: {
    backgroundColor: "white",
    borderRadius: moderateScale(15),
    borderWidth: 1,
    borderColor: "#e8e8e8",
    borderStyle: "solid",
    paddingHorizontal: horizontalScale(15),
    paddingVertical: verticalScale(15),
    width: 170,
  },
  textSub: {
    fontWeight: "bold",
    textAlign: "left",
    color: "#1B2356",
    fontSize:16
  

  },
  title: {
    fontSize: moderateScale(28),
    fontWeight: 'bold',
    lineHeight: verticalScale(30),
    width: '70%',
    
  },
  transactionAmount: {
    flex:1
  },
  transactionId: {
    flex:2
  },
  transactionPrice: {
    color: "blue",
    fontSize: moderateScale(20),
    fontWeight: "bold"
  }
})

export default Analytics