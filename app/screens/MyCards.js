import React, { useContext, useEffect, useState } from "react";
import { Text, StyleSheet, Image, View, Pressable, ScrollView,Modal } from "react-native";

import GlobalStyles from "../../GlobalStyles";
import {
  horizontalScale,
  verticalScale,
  moderateScale,
} from "../config/scaling";

import api from "../api/api_list"
import AuthContext from "../auth/context";
import moment from 'moment';
import apiCall from "../api/api";


import cardYellow from "../assets/image-cardyellow.png";
import cardYellowFrozen from "../assets/cardFrozen.png";

const MyCards = ({ navigation }) => {
  const [checked, setChecked] = useState(false);
  const toggleChecked = () => setChecked((value) => !value);

  //Transactions
  const [transactionData, setTransactionData] = useState([])
  const [balanceData, setBalance] = useState(0)
  const [modalVisible, setModalVisible] = useState(false);
  const [modalId, setModalId] = useState(false);
  const [initials, setInitals] = useState(null)
  const [cardnumber, setcardnumber] = useState(null);
  const [firstname, setfirstname] = useState(null);
  const [lastname, setlastname] = useState(null);
  const [bool, setbool] = useState();
  const authContext = useContext(AuthContext)

  useEffect(() => {
    loadData()
  },[])

  const loadData = async () => {
    const responseBalance = await api.GetAccount(authContext.accountID);
    const accountresponse = await api.GetAccount(authContext.accountID);
        const accountdata = accountresponse.data.details
    const data = responseBalance.data.details

    console.log(authContext.accountID)
    //Load the data for transactions
    const response = await api.GetTransactions(authContext.accountID,5);
    const transactions = response.data.details.content
    setTransactionData(transactions)
    let name = accountdata.customerName
    let names = name.split(' '), initialsHold = names[0].substring(0, 1).toUpperCase();

    if (names.length > 1) {
      initialsHold += names[names.length - 1].substring(0, 1).toUpperCase();
     }
    console.log(initialsHold)
    setInitals(initialsHold)

    const response2 = await apiCall.GetCardByAccount(authContext.userID);
    const data2 = response2;

    console.log(response2)
    console.log(response2[1].embossing.lastName)

    const bool = true;
    if(bool === true){
      setcardnumber("*******")
      setfirstname("*******")
      setlastname("*******")
      setBalance("*******");
    setSortCode("*******");
    setaccountnumber("*******");
    setaccountname("*******");
    }
    else{
      setcardnumber(response2[1].maskedCardNumber)
    setfirstname(response2[1].embossing.firstName)
    setlastname(response2[1].embossing.lastName)
    setBalance(data.availableBalance)
    }

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
          <View style={{width: 50, height: 50, borderRadius: 25, backgroundColor: "lightgrey", borderColor: "black", alignSelf: "center", marginLeft: "2.5%"}}>
          <Text style={{alignSelf: "center", justifyContent: "center", alignItems: "center", textAlignVertical: "center", height: "100%"}}>{initials}</Text>
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
            £{transaction.amount.toFixed(2)}
          </Text>
          </View>
         </View>
        </Pressable>

        )
    })
}
showData()

  //CardFreezing
  const [cardFrozen, setFrozen] = useState(false)
  const toggleCard = () => {
    setFrozen(!cardFrozen)
  }

  return (
    <ScrollView>
    <View style={styles.mainContainer}>
        <View style={styles.titleTextRow}>
            <Text style={styles.titleText}>My Cards</Text>
        </View>

        <View style={{marginTop: 175, height: 1, width: "100%"}}/>
        <View style={{justifyContent: "center", alignItems: "center"}}>
        <Image style={styles.image} resizeMode="contain" source={require("../assets/cardLion.png")}/>
        {cardFrozen ?
                    <Image
                      style={[styles.image]}
                      source={require("../assets/cardFrozen.png")}
                    /> :
                    null}
        </View>
        <View style={{flexDirection: "row", alignItems: "space-between", justifyContent: "space-between", width: "45%", marginLeft: "27.5%", marginTop: 125}}>

        <Pressable
                    style={styles.wrapper}
                    onPress={() => toggleCard()}
                  >
                    <Image
                      style={styles.icon}
                      source={cardFrozen ? require("../assets/icon-unfreeze.png") : require("../assets/icon-freeze.png")}
                    />
                  </Pressable>

        <Pressable
                    style={styles.rectangleGroup}
                    onPress={() => navigation.navigate("CardSettings")}
                  >
                    <Image
                      style={styles.icon}
                      source={require("../assets/icon-settingsbutton.png")}
                    />
                  </Pressable>


                  <Pressable
                    style={styles.wrapper}
                    onPress={() => navigation.navigate("PinSetApp")}
                  >
                                <MaterialCommunityIcons 
            name="lock"
            size={25}
            color="blue"
            />
                  </Pressable>


        </View>

        {transactionList}
        {modalVisible ? modal() : null}

        <View style={{height: 50, width: "100%"}}/>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
mainContainer: {
        backgroundColor:  GlobalStyles.DivContainer.backgroundColor,
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
    image: {
    marginTop: 150,
    resizeMode: "contain",
    width: "50%",
    justifyContent: 'center',
        alignItems: 'center',
        marginLeft: "25%",
    height: 250,
    justifyContent: "center",
    position: "absolute"
    },

    icon: {
    height: 75,
    width: 75,
    },
    transactionBox: {
            width: "90%",
            marginLeft: "5%",
            borderRadius: 15,
            height: 80,
            marginTop: 10,
            top: 5,
            backgroundColor: "white",
          },

    modalView: {
        top: "40%",
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
          width: "90%",
          backgroundColor: "#D8EBF9"
        },
        buttonOpen: {
          backgroundColor: 'black',
        },
        buttonClose: {
          marginBottom: "5%"
        },
        buttonReport: {
          backgroundColor: 'black',
          marginBottom: "5%"
        },
        textStyle: {
          color: 'white',
          fontWeight: 'bold',
          textAlign: 'center',
        },
        modalText: {
          marginBottom: 15,
          textAlign: 'center',
        },
        rounded: {
          borderRadius: 15,
        },

});

export default MyCards;
