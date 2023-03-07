import React, { useContext, useEffect, useState } from "react";
import { Text, StyleSheet, Image, View, TouchableOpacity, ScrollView, Modal, TouchableWithoutFeedback, ActivityIndicator } from "react-native";

import GlobalStyles from "../../GlobalStyles";
import { horizontalScale, verticalScale, moderateScale } from "../config/scaling";

import api from "../api/api_list";
import AuthContext from "../auth/context";
import moment from "moment";
import apiCall from "../api/api";
import apiCall2 from "../api/apiCall";

import cardYellow from "../assets/image-cardyellow.png";
import cardYellowFrozen from "../assets/cardFrozen.png";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const MyCards = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(false)
  const [checked, setChecked] = useState(false);
  const toggleChecked = () => setChecked((value) => !value);

  //Transactions
  const [transactionData, setTransactionData] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalId, setModalId] = useState(false);
  const [initials, setInitals] = useState(null);
  const [cardnumber, setcardnumber] = useState(null);
  const [firstname, setfirstname] = useState(null);
  const [lastname, setlastname] = useState(null);
  const [cardId, setCardID] = useState(null);
  const [cardIndex, setCardIndex] = useState(0);
  const [cardData, setCardData] = useState(null);
  const authContext = useContext(AuthContext);
  const { settings } = useContext(AuthContext);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    setIsLoading(true)
    //Get the transaction data
    const response = await api.GetTransactions(authContext.accountID, 5);
    const transactions = response.data.details.content;
    setTransactionData(transactions);

    const cards = await apiCall.GetCardByAccount("686283112")
    setCardData(cards)
    const currentCard = cards[cardIndex]
    currentCard.status != "CARD_OK" ? setFrozen(true) : setFrozen(false);
    console.log(currentCard)
    setfirstname(currentCard.embossing.firstName)
    setlastname(currentCard.embossing.lastName)
    setcardnumber(currentCard.maskedCardNumber)
    setInitals(currentCard.embossing.firstName[0] + currentCard.embossing.lastName[0])
    setIsLoading(false)
  };

  const cardDetails = () => {
    console.log(cardData)
    cardData[cardIndex].status != "CARD_OK" ? setFrozen(true) : setFrozen(false);
    console.log(cardData[cardIndex].status)
  }

  let transactionList = [];
  const showTransaction = (Id) => {
    setModalVisible(true);
    setModalId(Id);
  };

  const reportTransaction = () => {
    console.log("Reported");
  };
  const shareTransaction = () => {
    console.log("Shared");
  };

  const modal = (Id) => {
    let transaction = transactionData[modalId];
    console.log(transaction);

   
    return (
      <Modal
      
        animationType="none"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <TouchableOpacity
      style={{flex:1}}
      onPress={() => {
        setModalVisible(false)
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

            <TouchableOpacity style={[styles.button, styles.buttonReport]} onPress={() => reportTransaction()}>
              <Text style={styles.textStyle}>Report</Text>
            </TouchableOpacity>
            {settings.transactionSharing ? (
              <TouchableOpacity style={[styles.button, styles.buttonClose]} onPress={() => shareTransaction()}>
                <Text style={styles.textStyle}>Share</Text>
              </TouchableOpacity>
            ) : null}

            <TouchableOpacity style={[styles.button, styles.buttonClose]} backgroundColor="red" onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Dismiss</Text>
            </TouchableOpacity>
          </View>
        </View>
        </TouchableOpacity>
      </Modal>
    );
  };

  const showData = () => {
    transactionData.forEach((transaction, i) => {
      transactionList.push(
        <TouchableOpacity style={[styles.transactionBox, styles.rounded, styles.shadow]} key={i} onPress={() => showTransaction(i)}>
          <View style={{ height: "100%", flexDirection: "row" }}>
            <View style={{ width: 50, height: 50, borderRadius: 25, backgroundColor: "#F6F5F8", borderColor: "black", justifyContent: "center", alignItems: "center", alignSelf: "center", marginLeft: "2.5%" }}>
              <Text style={{ alignSelf: "center", textAlignVertical: "center" }}>{transaction.account.customerName[0]}</Text>
            </View>
            <View style={{ flex: 3.5, alignSelf: "center", justifyContent: "space-evenly", marginLeft: "5%" }}>
              <Text style={{ fontSize: 14, fontWeight: "700" }}>{transaction.account.customerName}</Text>
              <Text style={{}}>{moment(transaction.transactionDate).format("MMM Do YY")}</Text>
            </View>
            <View style={{ flex: 5, justifyContent: "space-evenly", alignItems: "flex-end", marginRight: "2.5%" }}>
              <Text style={{ marginRight: "2.5%", fontWeight: "700" }}>£{transaction.amount.toFixed(2)}</Text>
            </View>
          </View>
        </TouchableOpacity>
      );
    });
  };
  showData();

  //CardFreezing
  const [cardFrozen, setFrozen] = useState(false);
  const toggleCard = async () => {
    setFrozen(!cardFrozen);
    console.log(cardData[cardIndex].status)
    if(cardData[cardIndex].status == "CARD_OK"){
      const request = await apiCall2.FreezeCard(cardData[cardIndex].id,"CARD_BLOCKED")
    }else{
      console.log("unfreeze")
      const request = await apiCall2.FreezeCard(cardData[cardIndex].id,"CARD_OK")
    }
    loadData()
  };

  if(isLoading) {
    return (
         <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
             <ActivityIndicator size={'large'} color="blue" />
         </View>
    )
   }

  return (
    <ScrollView>
      <View style={styles.mainContainer}>
        {/* <View style={styles.titleTextRow}>
          <Text style={styles.titleText}>My Cards</Text>
        </View> */}

        <View style={{ alignItems: "center", marginTop: "5%", height: "auto"}}>
          <Image style={{width: 200, resizeMode: "contain"}} source={require("../assets/cardLion.png")} />
          {cardFrozen ? <Image style={{width: 200, height: 320, bottom: 0, position: "absolute", borderRadius: 15}} source={require("../assets/cardFrozen.png")} /> : null}
          <View style={{position: "absolute", height: "100%", width: 200, justifyContent: "center" }}>
            <View style={{marginLeft: "5%", marginTop: "50%"}}>
              <Text style={{color: "white"}}>{cardnumber}</Text>
              <Text style={{color: "white"}}>{firstname} {lastname}
              </Text>
            </View>
          </View>
        </View>

        <View style={{ flexDirection: "row", width: "90%", height: 75, marginLeft: "5%", alignItems: "center" }}>
        <View style={{flex: 3, alignItems: "flex-end"}}>
          <TouchableOpacity onPress={() => toggleCard()}>
            <Image style={styles.icon} source={cardFrozen ? require("../assets/icon-unfreeze.png") : require("../assets/icon-freeze.png")} />
          </TouchableOpacity>
        </View>
        <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
          <TouchableOpacity onPress={() => navigation.navigate("PinSetApp")}>
            <MaterialCommunityIcons name="lock" size={35} color="blue" />
          </TouchableOpacity>
        </View>

        <View style={{flex: 3, alignItems: "flex-start"}}>
          <TouchableOpacity onPress={() => navigation.navigate("CardSettings")}>
            <Image style={styles.icon} source={require("../assets/icon-settingsbutton.png")} />
          </TouchableOpacity>
        </View>
        </View>
        {transactionList}
        {modalVisible ? modal() : null}

        <View style={{ height: 50, width: "100%" }} />
      </View>
    </ScrollView>
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
  image: {
    marginTop: 150,
    resizeMode: "contain",
    width: "50%",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "25%",
    height: 250,
    justifyContent: "center",
    position: "absolute",
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
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
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
    backgroundColor: "#D8EBF9",
  },
  buttonOpen: {
    backgroundColor: "black",
  },
  buttonClose: {
    marginBottom: "5%",
  },
  buttonReport: {
    backgroundColor: "black",
    marginBottom: "5%",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  rounded: {
    borderRadius: 15,
  },
});

export default MyCards;
