import React,{ useEffect, useState,useContext } from "react";
import { Text, StyleSheet, Image, View, Pressable, ScrollView } from "react-native";
import GlobalStyles from "../../GlobalStyles";

import api from "../api/transactionList"
import AuthContext from "../auth/context";
import Button from "../components/Button"

import Moment from 'moment';

const Carbon = ({navigation}) => {
  const [data, setData] = useState(null)
  const [transactionData, setTransactionData] = useState(null)
  const authContext = useContext(AuthContext)

  let display = ""
  
  useEffect(() => {
    loadData()
  },[])

  const loadData = async () => {
    //Load the data for transactions
      const response = await api.getTransactions();
      const data = response.data.details
      setData(data)

      //Format the data for transactions
      const numberOfTransactions = data.totalSize
      let transactionList = [];
      for(let i = 0; i < 10; i++){
        console.log(i)
        let dataHold = data.content[i]
        transactionList.push(dataHold)
        console.log(data)
      }

      setTransactionData( {
        "numTransaction" : numberOfTransactions,
        "transactions" : transactionList
      })


  }

  let currency = (transactionData? transactionData.transactions[0].currency : "£")
  console.log(currency)

  let date = (transactionData? transactionData.transactions[0].transactionDate : "0")
  console.log(Moment(date).format('d MMM'))
  console.log(Moment(date).format('H:mma'))
  


  return (
    <View>
      <View style={[styles.groupParent2, styles.groupParentShadowBox]}>
          <View style={[styles.lanceBogrolParent, styles.lancePosition]}>
            <Text style={styles.lanceBogrol}>{transactionData? transactionData.transactions[0].description : 0}</Text>
            <Text style={[styles.moneyTransfer, styles.helloTypo2]}>
              <Text style={styles.total}>{Moment(date).format('d MMM')}</Text>
              <Text style={styles.total}> {Moment(date).format('H:mma')}</Text>
            </Text>
          </View>
          <Text style={[styles.text, styles.textTypo]}>- £{transactionData? transactionData.transactions[0].amount : 0}</Text>
          <Image
            style={styles.maskGroup14}
            resizeMode="cover"
            source={require("../assets/freshsupermarket.png")}
          />
        </View>
    </View>
  )
};

const styles = StyleSheet.create({
});

export default Carbon;
