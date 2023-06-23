// import React, { useContext, useEffect, useState } from "react";
// import {
//   Text,
//   StyleSheet,
//   Image,
//   View,
//   TouchableOpacity,
//   ScrollView,
//   Modal,
//   TouchableWithoutFeedback,
//   ActivityIndicator,
// } from "react-native";

// import GlobalStyles from "../../GlobalStyles";
// import {
//   horizontalScale,
//   verticalScale,
//   moderateScale,
// } from "../config/scaling";

// import api from "../api/api_list";
// import AuthContext from "../auth/context";
// import moment from "moment";
// import apiCall from "../api/api";
// import apiCall2 from "../api/apiCall";

// import AppText from "../components/Text";
// import cardYellow from "../assets/image-cardyellow.png";
// import cardYellowFrozen from "../assets/cardFrozen.png";
// import { MaterialCommunityIcons } from "@expo/vector-icons";
// import apiCard from "../api/cardDetails";

// const CARD_DATA = [];
// const MyCards = ({ navigation }) => {
//   const [isLoading, setIsLoading] = useState(false);
//   const [checked, setChecked] = useState(false);
//   const toggleChecked = () => setChecked((value) => !value);

//   //Transactions
//   const [transactionData, setTransactionData] = useState([]);
//   const [modalVisible, setModalVisible] = useState(false);
//   const [modalId, setModalId] = useState(false);
//   const [initials, setInitals] = useState(null);
//   const [cardnumber, setcardnumber] = useState(null);
//   const [firstname, setfirstname] = useState(null);
//   const [lastname, setlastname] = useState(null);
//   const [role, setRole] = useState(null);
//   const [type, setType] = useState(null);
//   const [cardId, setCardID] = useState(null);
//   const [cardIndex, setCardIndex] = useState(0);
//   const [cardData, setCardData] = useState(null);
//   const authContext = useContext(AuthContext);
//   const { settings, cardID, customerDetails, cardDetails } =
//     useContext(AuthContext);

//   useEffect(() => {
//     loadData();
//   }, []);

//   const loadData = async () => {
//     setIsLoading(true);
//     //Get the transaction data

//     console.log('here',authContext.accountID )
//     const response = await api.GetTransactions(authContext.accountID, 5);
//     console.log('response', response)

//     const transactions = response.data.details.content;
//     setTransactionData(transactions);

//     const cards = await apiCall.GetCardByAccount("686283112");
//     setCardData(cards);
//     console.log(cards);
//     const currentCard = cards[cardIndex];
//     currentCard.status != "CARD_OK" ? setFrozen(true) : setFrozen(false);

//     setRole(currentCard.cardRole);
//     setInitals(
//       currentCard.embossing.firstName[0] + currentCard.embossing.lastName[0]
//     );
//     setIsLoading(false);
//     setType(currentCard.productCode);

//     setcardnumber(cardDetails.number);
//     setfirstname("CVV " + cardDetails.cvv);
//     setlastname(cardDetails.name);
//     console.log(cardDetails);
//   };

//   let transactionList = [];
//   const showTransaction = (Id) => {
//     setModalVisible(true);
//     setModalId(Id);
//   };

//   const reportTransaction = () => {
//     console.log("Reported");
//   };
//   const shareTransaction = () => {
//     console.log("Shared");
//   };

//   const modal = (Id) => {
//     let transaction = transactionData[modalId];
//     console.log(transaction);

//     return (
//       <Modal
//         animationType="none"
//         transparent={true}
//         visible={modalVisible}
//         onRequestClose={() => {
//           Alert.alert("Modal has been closed.");
//           setModalVisible(!modalVisible);
//         }}
//       >
//         <TouchableOpacity
//           style={{ flex: 1 }}
//           onPress={() => {
//             setModalVisible(false);
//           }}
//         >
//           <View style={styles.centeredView}>
//             <View style={styles.modalView}>
//               <TouchableOpacity
//                 style={{ width: "100%", marginBottom: verticalScale(10) }}
//               >
//                 <MaterialCommunityIcons
//                   onPress={() => setModalVisible(!modalVisible)}
//                   name="close"
//                   size={25}
//                   color="black"
//                 />
//               </TouchableOpacity>
//               <AppText style={styles.modalText}>
//                 From: {transaction.account.customerName}
//               </AppText>
//               <AppText style={styles.modalText}>
//                 To: {transaction.description}
//               </AppText>
//               <AppText style={styles.modalText}>
//                 Amount: £{transaction.amount}
//               </AppText>
//               <AppText style={styles.modalText}>
//                 Date: {transaction.transactionDate}
//               </AppText>
//               <AppText style={styles.modalText}>ID: {transaction.id}</AppText>
//               <AppText style={styles.modalText}>
//                 Source ID: {transaction.sourceId}
//               </AppText>
//               <AppText style={styles.modalText}>
//                 Currency: {transaction.currency}
//               </AppText>

//               <TouchableOpacity
//                 style={[
//                   styles.button,
//                   styles.buttonReport,
//                   { marginTop: verticalScale(20) },
//                 ]}
//                 onPress={() => reportTransaction()}
//               >
//                 <AppText style={styles.textStyle}>Report</AppText>
//               </TouchableOpacity>
//               {settings.transactionSharing ? (
//                 <TouchableOpacity
//                   style={[styles.button, styles.buttonClose]}
//                   onPress={() => shareTransaction()}
//                 >
//                   <AppText style={styles.textStyle}>Share</AppText>
//                 </TouchableOpacity>
//               ) : null}

//               {/* <TouchableOpacity style={[styles.button, styles.buttonClose]} backgroundColor="red" onPress={() => setModalVisible(!modalVisible)}>
//               <AppText style={styles.textStyle}>Dismiss</AppText>
//             </TouchableOpacity> */}
//             </View>
//           </View>
//         </TouchableOpacity>
//       </Modal>
//     );
//   };

//   const showData = () => {
//     transactionData.forEach((transaction, i) => {
//       transactionList.push(
//         <TouchableOpacity
//           style={[styles.transactionBox, styles.rounded]}
//           key={i}
//           onPress={() => showTransaction(i)}
//         >
//           <View style={{ height: "100%", flexDirection: "row" }}>
//             <View
//               style={{
//                 width: 50,
//                 height: 50,
//                 borderRadius: 25,
//                 backgroundColor: "#F6F5F8",
//                 borderColor: "black",
//                 justifyContent: "center",
//                 alignItems: "center",
//                 alignSelf: "center",
//                 marginLeft: "2.5%",
//               }}
//             >
//               <AppText
//                 style={{ alignSelf: "center", textAlignVertical: "center" }}
//               >
//                 {transaction.account.customerName[0]}
//               </AppText>
//             </View>
//             <View
//               style={{
//                 flex: 3.5,
//                 alignSelf: "center",
//                 justifyContent: "space-evenly",
//                 marginLeft: "5%",
//               }}
//             >
//               <AppText style={{ fontSize: 14, fontWeight: "700" }}>
//                 {transaction.account.customerName}
//               </AppText>
//               <AppText style={{ opacity: 0.4 }}>
//                 {moment(transaction.transactionDate).format("MMM Do YY")}
//               </AppText>
//             </View>
//             <View
//               style={{
//                 flex: 5,
//                 justifyContent: "space-evenly",
//                 alignItems: "flex-end",
//                 marginRight: "2.5%",
//               }}
//             >
//               <AppText style={{ marginRight: "2.5%", fontWeight: "700" }}>
//                 £{transaction.amount.toFixed(2)}
//               </AppText>
//             </View>
//           </View>
//         </TouchableOpacity>
//       );
//     });
//   };
//   showData();

//   //CardFreezing
//   const [cardFrozen, setFrozen] = useState(false);

//   const toggleCard = async () => {
//     setFrozen(!cardFrozen);

//     if (cardData[cardIndex].status == "CARD_OK") {
//       const request = await apiCall2.FreezeCard(
//         cardData[cardIndex].id,
//         "CARD_BLOCKED"
//       );
//       console.log(request);
//     } else {
//       console.log("unfreeze");
//       const request = await apiCall2.FreezeCard(
//         cardData[cardIndex].id,
//         "CARD_OK"
//       );
//       console.log(request);
//     }
//     loadData();
//   };

//   const cardType = (card) => {
//     switch (card) {
//       case "MC_VIRTUAL":
//         return "virtual";
//       case "MC_STANDARD":
//         return "standard";
//       case "MC_PREMIUM":
//         return "premium";
//       default:
//         return "carbonyte";
//     }
//   };

//   if (isLoading) {
//     return (
//       <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
//         <ActivityIndicator size={"large"} color="black" />
//       </View>
//     );
//   }

//   return (
//     <ScrollView>
//       <View style={styles.mainContainer}>
//         {/* <View style={styles.titleTextRow}>
//           <AppText style={styles.titleText}>My Cards</AppText>
//         </View> */}

//         <View style={{ alignItems: "center", marginTop: "5%", height: "auto" }}>
//           <AppText
//             style={{
//               fontSize: 20,
//               textTransform: "capitalize",
//               marginBottom: horizontalScale(10),
//             }}
//           >
//             {cardType(type) + " card"}
//           </AppText>
//           <Image
//             style={{ width: 200, resizeMode: "contain" }}
//             source={require("../assets/cardLion.png")}
//           />
//           {cardFrozen ? (
//             <Image
//               style={{
//                 width: 200,
//                 height: 320,
//                 bottom: 0,
//                 position: "absolute",
//                 borderRadius: 15,
//               }}
//               source={require("../assets/cardFrozen.png")}
//             />
//           ) : null}
//           <View
//             style={{
//               position: "absolute",
//               height: "100%",
//               width: 200,
//               justifyContent: "center",
//             }}
//           >
//             <View style={{ marginLeft: "5%", marginTop: "50%" }}>
//               <AppText
//                 style={[
//                   { color: "white", marginBottom: "3.5%" },
//                   styles.totalWalletBalanceText11,
//                 ]}
//               >
//                 {cardnumber}
//               </AppText>
//               <AppText
//                 style={[{ color: "white" }, styles.totalWalletBalanceText11]}
//               >
//                 {firstname} {lastname}
//               </AppText>
//             </View>
//           </View>
//         </View>
//         <View style={styles.roleConatainer}>
//           <AppText style={[styles.role, { textTransform: "lowercase" }]}>
//             {role}
//           </AppText>
//           <AppText style={styles.role}>{" card"}</AppText>
//         </View>

//         <View
//           style={{
//             flexDirection: "row",
//             width: "90%",
//             height: 75,
//             marginLeft: "5%",
//             alignItems: "center",
//           }}
//         >
//           <View style={{ flex: 3, alignItems: "flex-end" }}>
//             <TouchableOpacity
//               style={styles.boxShadow}
//               onPress={() => toggleCard()}
//             >
//               <Image
//                 style={styles.icon}
//                 source={
//                   cardFrozen
//                     ? require("../assets/icon-unfreeze.png")
//                     : require("../assets/icon-freeze.png")
//                 }
//               />
//             </TouchableOpacity>
//           </View>
//           <View
//             style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
//           >
//             <TouchableOpacity onPress={() => navigation.navigate("PinSet")}>
//               <MaterialCommunityIcons name="lock" size={35} color="blue" />
//             </TouchableOpacity>
//           </View>

//           <View style={{ flex: 3, alignItems: "flex-start" }}>
//             <TouchableOpacity
//               style={styles.boxShadow}
//               onPress={() => navigation.navigate("CardSettings")}
//             >
//               <Image
//                 style={styles.icon}
//                 source={require("../assets/icon-settingsbutton.png")}
//               />
//             </TouchableOpacity>
//           </View>
//         </View>
//         {transactionList}
//         {modalVisible ? modal() : null}

//         <View style={{ height: 50, width: "100%" }} />
//       </View>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   boxShadow: {},
//   mainContainer: {
//     backgroundColor: GlobalStyles.DivContainer.backgroundColor,
//     height: GlobalStyles.DivContainer.height,
//     width: "100%",
//     flex: GlobalStyles.DivContainer.flex,
//   },
//   roleConatainer: {
//     flexDirection: "row",
//     marginTop: verticalScale(10),
//     marginBottom: verticalScale(5),

//     justifyContent: "center",
//     alignItems: "center",
//   },
//   role: {
//     textAlign: "center",
//     fontSize: moderateScale(11.8),
//     fontWeight: "300",
//     color: "red",
//   },
//   titleTextRow: {
//     marginTop: GlobalStyles.Title.marginTop,
//     width: GlobalStyles.DivContainer.width,
//     marginLeft: GlobalStyles.DivContainer.marginLeft,
//   },
//   totalWalletBalanceText11: {
//     textAlign: "left",
//     fontSize: moderateScale(14),
//     color: "white",
//     textTransform: "uppercase",
//     fontWeight: "700",
//   },
//   titleText: {
//     fontSize: GlobalStyles.Title.fontSize,
//     fontWeight: GlobalStyles.Title.fontWeight,
//   },

//   subText: {
//     fontSize: GlobalStyles.RowText.fontSize,
//     fontWeight: GlobalStyles.RowText.fontWeight,
//   },

//   subTextRow: {
//     marginTop: GlobalStyles.RowText.marginTop,
//     width: GlobalStyles.DivContainer.width,
//     marginLeft: GlobalStyles.DivContainer.marginLeft,
//     fontColor: GlobalStyles.RowText.fontColor,
//   },
//   image: {
//     marginTop: 150,
//     resizeMode: "contain",
//     width: "50%",
//     justifyContent: "center",
//     alignItems: "center",
//     marginLeft: "25%",
//     height: 250,
//     justifyContent: "center",
//     position: "absolute",
//   },

//   icon: {
//     height: 75,
//     width: 75,
//   },
//   transactionBox: {
//     width: "90%",
//     marginLeft: "5%",
//     borderRadius: 15,
//     height: 80,
//     marginTop: 10,
//     top: 5,
//     backgroundColor: "white",
//   },

//   modalView: {
//     top: "40%",
//     margin: 20,
//     backgroundColor: "white",
//     borderRadius: 20,
//     padding: 35,
//     alignItems: "center",
//     shadowColor: "#000",
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 4,
//     elevation: 5,
//   },

//   button: {
//     borderRadius: 20,
//     padding: 10,
//     elevation: 2,
//     width: "90%",
//     backgroundColor: "#D8EBF9",
//   },
//   buttonOpen: {
//     backgroundColor: "black",
//   },
//   buttonClose: {
//     marginBottom: "5%",
//   },
//   buttonReport: {
//     backgroundColor: "black",
//     marginBottom: "5%",
//   },
//   textStyle: {
//     color: "white",
//     fontWeight: "bold",
//     textAlign: "center",
//   },
//   modalText: {
//     marginBottom: 15,
//     textAlign: "center",
//   },
//   rounded: {
//     borderRadius: 15,
//   },
// });

// export default MyCards;

import React, {
  Component,
  Fragment,
  useEffect,
  useState,
  useContext,
} from "react";
import {
<<<<<<< HEAD
  Animated,
=======
  Alert,
  Text,
  StyleSheet,
  Image,
>>>>>>> d49e293b41f9084fe3d44d130855f56ad01bff1f
  View,
  ScrollView,
  SafeAreaView,
  ImageBackground,
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  Pressable,
} from "react-native";
import moment from "moment";
import { MaterialCommunityIcons, Ionicons } from "react-native-vector-icons";

import AuthContext from "../auth/context";
import apiCall from "../api/api";
import apiCall2 from "../api/apiCall";

import colors from "../config/colors";
import GlobalStyles from "../../GlobalStyles";

const OFFSET = 40;
const ITEM_WIDTH = Dimensions.get("window").width - OFFSET * 3;
const ITEM_HEIGHT = 350;

<<<<<<< HEAD
const cards = [
  { title: "Movie 1", posterUrl: require("../assets/cards/Personal01.png") },
  { title: "Movie 2", posterUrl: require("../assets/cards//Personal02.png") },
  { title: "Movie 3", posterUrl: require("../assets/cards/Personal03.png") },
  { title: "Movie 4", posterUrl: require("../assets/cards/Business01.png") },
];

const transactionDisplayItems = [
  { id: 1, title: "All" },
  { id: 2, title: "Income" },
  { id: 3, title: "Expense" },
];
const numOfTransactions = 4;
export default function MyCards({navigation}) {
  const { accountID } = useContext(AuthContext);

  const [isFrozen, setFrozen] = useState(false);
  const [transactions, setTransactions] = useState([]);
  const [filterTransactions, setFilterTransactions] = useState([
    ...transactions,
  ]);
=======
  //Remove
  const [initials, setInitals] = useState(null);
  const [cardnumber, setcardnumber] = useState(null);
  const [firstname, setfirstname] = useState(null);
  const [lastname, setlastname] = useState(null);
  const [role, setRole] = useState(null);
  const [type, setType] = useState(null);
  const [cardId, setCardID] = useState(null);
  const [cardIndex, setCardIndex] = useState(0);

  //Keep
  const [cardData, setCardData] = useState([]);
  const [currentCardDataShow, setCurrentCardDataShow] = useState({});
  const [transactionData, setTransactionData] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalId, setModalId] = useState(false);
  const authContext = useContext(AuthContext);

  const { settings, cardID, customerDetails, cardDetails } = useContext(AuthContext);
>>>>>>> d49e293b41f9084fe3d44d130855f56ad01bff1f

  useEffect(() => {
    loadData();
  }, []);


  const getFullCardData = async () => {
    const cardObject = await api.GetCardFromID("714613712");
    const cards = await apiCall.GetCardByAccount("686283112");
    const obj = {
      "cardName": cardDetail.embossing.firstName + " " + cardDetail.embossing.lastName,
      "cardNumber": cardDetail.maskedCardNumber,
      "cvv": "000",
      "expiary": "00/00",
      "isFrozen": cardDetail.status != "CARD_OK",
      "isVirtual": cardDetail.template == "MC_VIRTUAL"
    }
    setCurrentCardDataShow(obj)
  }


  const loadData = async () => {
<<<<<<< HEAD
    const response = await apiCall.GetTransactions(
      accountID,
      numOfTransactions
    );
    const transactionRes = response.content;
    console.log(transactionRes);
    setTransactions(transactionRes);
    setFilterTransactions(transactionRes);
=======
    setIsLoading(true);
    //Get the transaction data
    const response = await api.GetTransactions(authContext.accountID, 5);
    const transactions = response.data.details.content;
    setTransactionData(transactions);

    const cards = await apiCall.GetCardByAccount("686283112");

    const cardDetails = []
    cards.forEach(cardDetail => {
      console.log(cardDetail)
      const obj = {
        "cardName": cardDetail.embossing.firstName + " " + cardDetail.embossing.lastName,
        "cardNumber": cardDetail.maskedCardNumber,
        "cvv": "000",
        "expiary": "00/00",
        "isFrozen": cardDetail.status != "CARD_OK",
        "isVirtual": cardDetail.template == "MC_VIRTUAL"
      }
      cardDetails.push(obj)
    })
    console.log(cardDetails)
    setCardData(cardDetails)


    // setCardData(cards);
    // console.log(cards);
    // const currentCard = cards[cardIndex];
    // currentCard.status != "CARD_OK" ? setFrozen(true) : setFrozen(false);

    // setRole(currentCard.cardRole);
    // setInitals(
    //   currentCard.embossing.firstName[0] + currentCard.embossing.lastName[0]
    // );
    // setType(currentCard.productCode);

    // setcardnumber(cardDetails.number);
    // setfirstname("CVV " + cardDetails.cvv);
    // setlastname(cardDetails.name);
    // console.log(cardDetails);

    setIsLoading(false);
>>>>>>> d49e293b41f9084fe3d44d130855f56ad01bff1f
  };

  const handleTransactionFilter = (item) => {
    if (item == "Income") {
      setFilterTransactions(
        transactions.filter(({ credit }) => credit !== false)
      );
    } else if (item == "Expense") {
      setFilterTransactions(
        transactions.filter(({ credit }) => credit === false)
      );
    } else {
      setFilterTransactions(transactions);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <CardCarousel
        cards={cards}
        onCardPress={() => console.log("card pressed")}
      />
      <TapContainer />
      <View style={styles.settingsContainer}>
        <Icon
          title={"freeze"}
          onSettingsPress={() => {
            console.log("freeze");
            setFrozen(!isFrozen);
          }}
          isFrozen={!isFrozen}
        />
        <Icon
          title={"settings"}
          onSettingsPress={() => navigation.navigate("CardSettings")}
        />
      </View>

      <TransactionContainer
        title="Recent Transactions"
        transactionDisplayItems={transactionDisplayItems}
        onTransaction={() => console.log("onTransaction")}
        transactions={filterTransactions}
        onTransactionFilter={(item) => handleTransactionFilter(item)}
      />
    </SafeAreaView>
  );
}

const TransactionContainer = ({
  title = "Transactions",
  transactionDisplayItems,
  onTransaction,
  transactions,
  onTransactionFilter,
}) => (
  <ScrollView style={styles.transactionContainer}>
    <Text style={[styles.bold, styles.header]}>{title}</Text>
    <View style={{ flexDirection: "row" }}>
      {transactionDisplayItems.map((items) => (
        <View key={items.id} style={{ marginRight: "2.5%", marginTop: "5%" }}>
          <TransactionSelector
            title={items.title}
            onTransactionFilter={() => onTransactionFilter(items.title)}
          />
<<<<<<< HEAD
=======
          {cardFrozen ? (
            <Image
              style={{
                width: 200,
                height: 320,
                bottom: 0,
                position: "absolute",
                borderRadius: 15,
              }}
              source={require("../assets/cardFrozen.png")}
            />
          ) : null}
          <View
            style={{
              position: "absolute",
              height: "100%",
              width: 200,
              justifyContent: "center",
            }}
          >
            <View style={{ marginLeft: "5%", marginTop: "50%" }}>
              <AppText
                style={[
                  { color: "white", marginBottom: "3.5%" },
                  styles.totalWalletBalanceText11,
                ]}
              >
                {cardData[1]?.cardNumber}
              </AppText>
              <AppText
                style={[{ color: "white" }, styles.totalWalletBalanceText11]}
              >
                {cardData[1]?.cardName}
              </AppText>
            </View>
          </View>
        </View>
        <View style={styles.roleConatainer}>
          <AppText style={[styles.role, { textTransform: "lowercase" }]}>
            {role}
          </AppText>
          <AppText style={styles.role}>{" card"}</AppText>
>>>>>>> d49e293b41f9084fe3d44d130855f56ad01bff1f
        </View>
      ))}
    </View>
    <TransactionHeader />

    {transactions.map(
      ({ id, credit, description, transactionDate, amount }, index) => (
        <Transaction
          key={id}
          onTransaction={onTransaction}
          description={description}
          date={transactionDate}
          amount={amount}
          credit={credit}
          index={index}
        />
      )
    )}
  </ScrollView>
);

const TransactionHeader = ({ date = "Today" }) => (
  <View style={styles.transactionHeaderContainer}>
    <Text>{date}</Text>
  </View>
);

const Transaction = ({
  onTransaction,
  description,
  recipient,
  amount,
  date,
  credit,
  index
}) => {
  return (
    <Pressable
      onPress={onTransaction}
      style={{
        flexDirection: "row",
        paddingHorizontal: "5%",
        paddingVertical: "2.5%",
        justifyContent: "space-between",
        backgroundColor: "white",
        borderBottomLeftRadius: index == -1 ? 10 : 0
      }}
    >
      <View style={{ flexDirection: "row" }}>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginRight: "5%",
          }}
        >
          <MaterialCommunityIcons name="export-variant" size={24} />
        </View>
        <View>
          <Text style={styles.bold}>{description}</Text>
          <Text style={styles.subText}>To {recipient}</Text>
        </View>
      </View>
      <View>
        <Text style={[styles.bold, { textAlign: "right" }]}>
          {!credit ? "-" : "+"} £{amount.toFixed(2)}
        </Text>
        <Text style={[styles.subText, { textAlign: "right" }]}>
          {moment(date).format("D MMM")}
        </Text>
      </View>
    </Pressable>
  );
};

const TransactionSelector = ({ title, onTransactionFilter }) => {
  return (
    <TouchableOpacity
      onPress={onTransactionFilter}
      style={{
        backgroundColor: "white",
        paddingVertical: "1%",
        paddingHorizontal: "2%",
        borderRadius: "7%",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {(title == "Income" || title == "Expense") && (
        <View
          style={{
            backgroundColor: title == "Income" ? "green" : "red",
            height: 12,
            width: 12,
            borderRadius: 6,
            marginRight: 6,
          }}
        >
          <MaterialCommunityIcons
            name={title == "Income" ? "arrow-down-thin" : "arrow-up-thin"}
            color={colors.white}
          />
        </View>
      )}
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};

const CardCarousel = ({ cards, onCardPress }) => {
  const scrollX = React.useRef(new Animated.Value(0)).current;
  return (
    <ScrollView
      horizontal={true}
      decelerationRate={"normal"}
      snapToInterval={ITEM_WIDTH}
      style={styles.cardsContainer}
      showsHorizontalScrollIndicator={false}
      bounces={false}
      disableIntervalMomentum
      onScroll={Animated.event(
        [{ nativeEvent: { contentOffset: { x: scrollX } } }],
        { useNativeDriver: false }
      )}
      scrollEventThrottle={12}
    >
      {cards.map((item, idx) => {
        const inputRange = [
          (idx - 1) * ITEM_WIDTH,
          idx * ITEM_WIDTH,
          (idx + 1) * ITEM_WIDTH,
        ];

        const translate = scrollX.interpolate({
          inputRange,
          outputRange: [0.85, 1, 0.85],
        });

        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0.5, 1, 0.5],
        });

        return (
          <TouchableOpacity key={idx} onPress={onCardPress}>
            <Animated.View
              style={{
                width: ITEM_WIDTH,
                height: ITEM_HEIGHT,
                marginLeft: idx === 0 ? OFFSET : undefined,
                marginRight: idx === cards.length - 1 ? OFFSET : undefined,
                opacity: opacity,
                transform: [{ scale: translate }],
              }}
            >
              <ImageBackground
                source={item.posterUrl}
                style={{
                  flex: 1,
                  resizeMode: "cover",
                  justifyContent: "center",
                }}
                imageStyle={{ borderRadius: 6 }}
              ></ImageBackground>
            </Animated.View>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
};

const TapContainer = () => (
  <View style={styles.tapContainer}>
    <MaterialCommunityIcons name="gesture-tap" size={18} />
    <Text>Tap the card to see card details</Text>
  </View>
);

const Icon = ({ title, isFrozen, onSettingsPress }) => {
  return (
    <TouchableOpacity
      onPress={onSettingsPress}
      style={{ marginHorizontal: "2.5%" }}
    >
      <View
        style={{
          backgroundColor: isFrozen ? "black" : "white",
          height: 50,
          width: 50,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 10,
          marginBottom: "6.5%",
        }}
      >
        {title !== "settings" ? (
          <MaterialCommunityIcons
            name={!isFrozen ? "snowflake" : "snowflake-off"}
            color={isFrozen ? "white" : "black"}
            size={30}
          />
        ) : (
          <Ionicons name="settings-sharp" size={30} />
        )}
      </View>
      <Text style={{ textTransform: "capitalize" }}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardsContainer: {
    paddingHorizontal: 0,
    height: 0,
  },
  bold: { fontWeight: "700" },
  header: { fontSize: 20 },
  settingsContainer: {
    justifyContent: "center",
    flexDirection: "row",
  },
  subText: { opacity: 0.7, fontSize: 10, lineHeight: 15 },
  tapContainer: {
    justifyContent: "center",
    flexDirection: "row",
    marginVertical: "2.5%",
  },
  transactionContainer: {
    flex: 1,
    backgroundColor: GlobalStyles.DivContainer.backgroundColor,
    marginTop: "5%",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: "5%",
  },
  transactionHeaderContainer: {
    backgroundColor: "white",
    marginTop: "5%",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: "5%",
    paddingBottom: "0%"
  },
});
