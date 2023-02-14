import React,{ useEffect, useState,useContext } from "react";
import { Text, StyleSheet, Image, View, Pressable, ScrollView,Modal } from "react-native";
import GlobalStyles from "../../GlobalStyles";
import { Swipeable, TouchableWithoutFeedback } from "react-native-gesture-handler";
import { MaterialCommunityIcons} from '@expo/vector-icons'

import moment from "moment";
import api from "../api/api_list"
import apiCall from "../api/api"
import AuthContext from "../auth/context";
import { hide } from "expo-splash-screen";

const Transactions = ({navigation,route}) => {
    const [balanceData, setBalance] = useState(0)
    const [transactionData, setTransactionData] = useState([])
    const [modalVisible, setModalVisible] = useState(false);
    const [modalId, setModalId] = useState(false);
    const [initials, setInitals] = useState(null)

    const authContext = useContext(AuthContext)
    const { settings } = useContext(AuthContext);

    //Calls the API once during load
    useEffect(() => {
        const unsubscribe = navigation.addListener('focus',  () => {
            loadData()
        })
    },[])

    useEffect(() => {
      loadData();
    }, []);

    const renderRightActions = (i) => {
      return(
        <View style={{ backgroundColor: "#ff5252", width:70,  marginTop:15, justifyContent:"center", alignItems:"center"}}>
          <TouchableWithoutFeedback onPress={() => hideTransaction(i)}>
          <MaterialCommunityIcons 
          name="eye-off"
          size={35}
          color="white"
          />
          </TouchableWithoutFeedback>
        </View>
      )
    }

    const renderLeftActions = (i) => {
      return(
        <View style={{ backgroundColor: "grey", width:70,  marginTop:15, justifyContent:"center", alignItems:"center"}}>
            <TouchableWithoutFeedback onPress={() => reportTransaction(i)}>
            <MaterialCommunityIcons 
            name="progress-alert"
            size={35}
            color="white"
            />
            </TouchableWithoutFeedback>
       
          </View>
      )
    }

    const loadData = async () => {
        const responseBalance = await api.GetAccount(authContext.accountID);
        const accountresponse = await api.GetAccount(authContext.accountID);
        const accountdata = accountresponse.data.details
        const data = responseBalance.data.details
        setBalance(data.availableBalance)
        console.log(authContext.accountID)
        //Load the data for transactions
        const response = await api.GetTransactions(authContext.accountID,10);
        const transactions = response.data.details.content
        setTransactionData(transactions)

        let name = accountdata.customerName
        let names = name.split(' '), initialsHold = names[0].substring(0, 1).toUpperCase();
    
        if (names.length > 1) {
          initialsHold += names[names.length - 1].substring(0, 1).toUpperCase();
         }
        console.log(initialsHold)
        setInitals(initialsHold)
  
    }

    let transactionList = []
    const showTransaction = (Id) => {
        setModalVisible(true)
        setModalId(Id)
    }

    const reportTransaction = (Id) =>{
        console.log("Reported")
        console.log(Id)
        apiCall.ReportTransaction(Id)
    }
    const shareTransaction = (Id) =>{
        console.log("Shared")
        console.log(Id)
    }
    const hideTransaction = (Id) =>{
      console.log("Hided")
      console.log(Id)
      
      let newData = transactionData
      newData.splice(Id,1)
      console.log(newData)
      setTransactionData(newData)
      loadData()
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
              {!settings.transactionSharing
                ?
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => shareTransaction()}>
                  <Text style={styles.textStyle}>Share</Text>
                </Pressable>
                : null}

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
      let list = []
        transactionData.forEach((transaction,i) => {
          list.push(
              <Swipeable 
              renderLeftActions={()=> renderLeftActions(i)}
              renderRightActions={() =>renderRightActions(i)}>
              <Pressable
                        style={[styles.transactionBox, styles.rounded]}
                        key={i}
                        onPress={() => showTransaction(i)}>
                        <View style={{height: "100%", flexDirection: "row",}}>
                        <View style={{justifyContent: "center", alignItems: "center",width: 50, height: 50, borderRadius: 25, backgroundColor: "#F6F5F8", borderColor: "black", alignSelf: "center", marginLeft: "2.5%"}}>
                        <Text style={{ fontWeight: "700"}}>{initials}</Text>
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
                      </Swipeable>
                
            )
        })
        transactionList = list
        return list
    }
    showData()
    return (
        <View style={styles.page}>
            <Text style={styles.hello}>
                Transactions 
            </Text>
            
            
            <ScrollView style={{height: "90%"}}
            showsVerticalScrollIndicator={false}>
              
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
      hello:{
        textAlign:"center",
        fontSize: GlobalStyles.FontSize.size_10xl,
        fontWeight: "bold",
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
