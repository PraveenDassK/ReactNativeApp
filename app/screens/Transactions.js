import React,{ useEffect, useState,useContext } from "react";
import { Text, StyleSheet, Image, View, Pressable, ScrollView,Modal } from "react-native";
import GlobalStyles from "../../GlobalStyles";

import moment from "moment";
import api from "../api/api_list"
import AuthContext from "../auth/context";

const Transactions = ({navigation,route}) => {
    const [balanceData, setBalance] = useState(0)
    const [transactionData, setTransactionData] = useState([])
    const [modalVisible, setModalVisible] = useState(false);
    const [modalId, setModalId] = useState(false);
    const authContext = useContext(AuthContext)


    //Calls the API once during load
    useEffect(() => {
        const unsubscribe = navigation.addListener('focus',  () => {
            loadData()
        })
    },[])

    const loadData = async () => {
        const responseBalance = await api.GetAccount(authContext.accountID);
        const data = responseBalance.data.details
        setBalance(data.availableBalance)
        console.log(authContext.accountID)
        //Load the data for transactions
        const response = await api.GetTransactions(authContext.accountID,10);
        const transactions = response.data.details.content
        setTransactionData(transactions)
    }

    let transactionList = []
    const showTransaction = (Id) => {
        setModalVisible(true)
        setModalId(Id)
    }

    const reportTransaction = () =>{
        console.log("Reported")
    }
    const shareTransaction = () =>{
        console.log("Shared")
    }

    const modal = (Id) => {
        let transaction = transactionData[modalId]
        console.log(transaction)
        return (            
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert('Modal has been closed.');
              setModalVisible(!modalVisible);
            }}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={styles.modalText}>From: {transaction.account.customerName}</Text>
                <Text style={styles.modalText}>To: {transaction.description}</Text>
                <Text style={styles.modalText}>Amount: £{transaction.amount}</Text>
                <Text style={styles.modalText}>Date: {transaction.transactionDate}</Text>
                <Text style={styles.modalText}>ID: {transaction.id}</Text>
                <Text style={styles.modalText}>Source ID: {transaction.sourceId}</Text>
                <Text style={styles.modalText}>Currency: {transaction.currency}</Text>

                <Pressable
                  style={[styles.button, styles.buttonReport]}
                  onPress={() => reportTransaction()}>
                  <Text style={styles.textStyle}>Report</Text>
                </Pressable>

                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => shareTransaction()}>
                  <Text style={styles.textStyle}>Share</Text>
                </Pressable>

                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  backgroundColor = "red"
                  onPress={() => setModalVisible(!modalVisible)}>
                  <Text style={styles.textStyle}>Dismiss</Text>
                </Pressable>
                
                
              </View>
            </View>
            
          </Modal>
          )
    }


    const showData = () => {
        transactionData.forEach((transaction,i) => {
            transactionList.push(
              <Pressable
              style={[styles.transactionBox, styles.rounded, styles.shadow]}
              key = {i}
              onPress = {() => showTransaction(i)}>
              <View style={{height: "100%", flexDirection: "row",}}>
              <View style={{width: 50, height: 50, borderRadius: 25, backgroundColor: "green", borderColor: "black", alignSelf: "center", marginLeft: "2.5%"}}>
              <Text style={{alignSelf: "center", justifyContent: "center", alignItems: "center", textAlignVertical: "center", height: "100%"}}>A W</Text>
              </View>
              <View style={{flex: 3.5, alignSelf: "center", justifyContent: "space-evenly", marginLeft: "5%"}}>
                  <Text style={{fontSize :14, fontWeight: "700"}}>
                    {transaction.account.customerName}
                  </Text>
                  <Text style={{}}>
                    {moment(transaction.transactionDate).format("MMM Do YY")}
                  </Text>
              </View>
              <View style={{flex: 5, justifyContent: "space-evenly", alignItems: "flex-end", marginRight: "2.5%"}}>
              <Text style={{marginRight: "2.5%", fontWeight: "700"}}>
                £{transaction.amount}
              </Text>
              </View>
             </View>
            </Pressable>
                
            )
        })
    }
    showData()
    return (
        <View style={styles.page}>
            <Text>
                Transactions
            </Text>
            
            
            <ScrollView>
              
                {transactionList}
                {modalVisible ? modal() : null}
                
            </ScrollView>
            
        </View>
        
    )

};

const styles = StyleSheet.create({
    page:{
        width:"80%",
        left:"10%",
        marginTop:"2.5%",
    },
    myCards1: {
      width: "100%",
      textAlign: "center",
      fontSize: GlobalStyles.FontSize.size_2xl,
      textAlign: "center",
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
      },
      historyTypo: {
        textAlign: "center",
        color: GlobalStyles.Color.indigo_100,
        fontWeight: "700",
        position: "absolute",
      },
      myCards1: {
        width: "100%",
        
        fontSize: GlobalStyles.FontSize.size_4xl,
        textAlign: "center",
      },
      modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
      },
      button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
      },
      buttonOpen: {
        backgroundColor: '#F194FF',
      },
      buttonClose: {
        backgroundColor: '#2196F3',
      },
      buttonReport: {
        backgroundColor: 'red',
      },
      textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
      },
      rounded: {
        borderRadius: 15,
      },
      shadow: {
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 1,
        shadowRadius: 1,
    
        elevation: 1,
      },
      transactionBox: {
        width: "100%",
        height: 80,
        marginTop: 10,
        top: 5,
        backgroundColor: "white",
      },
      modalText: {
        marginBottom: 15,
        textAlign: 'center',
      },
    
});

export default Transactions;
