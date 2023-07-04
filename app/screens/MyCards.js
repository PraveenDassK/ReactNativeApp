import React, { useEffect, useState, useContext } from "react";

import { BlurView } from "expo-blur";
import {
  Animated,
  StyleSheet,
  Image,
  View,
  ScrollView,
  TouchableOpacity,
  Pressable,
  Dimensions,
} from "react-native";
// import moment from "moment";
import { MaterialCommunityIcons, Ionicons } from "react-native-vector-icons";
import FlipCard from "react-native-flip-card";

import Text from "../components/Text";
import AuthContext from "../auth/context";
import apiCall from "../api/api";

import colors from "../config/colors";
import formatCurrency from "../utility/formatCurrency";
import AppScreen from "../components/AppScreen";

import { TransactionContainer } from "../components/transHistory";
import apiTransaction from "../api/apiTransaction";
import Tagline from "../components/Tagline";
import PinModal from "../components/PinModal";

const OFFSET = 75;
const ITEM_WIDTH = Dimensions.get("window").width - OFFSET * 3;
const ITEM_HEIGHT = 350;

const cards = [
  {
    title: "Card 1",
    cardUrl: require("../assets/cardLion.png"),
    backCardUrl: require("../assets/cardFrozen.png"),
  },
  {
    title: "Card 2",
    cardUrl: require("../assets/cardLion.png"),
    backCardUrl: require("../assets/cardFrozen.png"),
  },
  {
    title: "Card 3",
    cardUrl: require("../assets/cardLion.png"),
    backCardUrl: require("../assets/cardFrozen.png"),
  },
  {
    title: "Card 4",
    cardUrl: require("../assets/cardLion.png"),
    backCardUrl: require("../assets/cardFrozen.png"),
  },
];

const transactionDisplayItems = [
  { id: 1, title: "All" },
  { id: 2, title: "Income" },
  { id: 3, title: "Expense" },
];
const numOfTransactions = 4;

export default function MyCards({ navigation }) {
  const { accountID } = useContext(AuthContext);

  const [isFrozen, setFrozen] = useState(false);
  const [transactions, setTransactions] = useState([]);
  const [filterTransactions, setFilterTransactions] = useState([
    ...transactions,
  ]);

  useEffect(() => {
    loadData();
  }, []);

  const getFullCardData = async () => {
    const cardObject = await api.GetCardFromID("714613712");
    const cards = await apiCall.GetCardByAccount("686283112");
    const obj = {
      cardName:
        cardDetail.embossing.firstName + " " + cardDetail.embossing.lastName,
      cardNumber: cardDetail.maskedCardNumber,
      cvv: "000",
      expiary: "00/00",
      isFrozen: cardDetail.status != "CARD_OK",
      isVirtual: cardDetail.template == "MC_VIRTUAL",
    };
    setCurrentCardDataShow(obj);
  };

  const loadData = async () => {
    const response = await apiCall.GetTransactions(
      accountID,
      numOfTransactions
    );
    // const userImpactReturn = await apiCall.GetUserImpact(customerDetails);
    const transactionRes = response.content;
    setTransactions(transactionRes);
    setFilterTransactions(transactionRes);
  };

  const handleTransactionFilter = (item) => {
    if (item == "income") {
      setFilterTransactions(
        transactions.filter(({ credit }) => credit !== false)
      );
    } else if (item == "expenses") {
      setFilterTransactions(
        transactions.filter(({ credit }) => credit === false)
      );
    } else {
      setFilterTransactions(transactions);
    }
  };

  return (
    <AppScreen>
      <ScrollView>
        <CardSelector onCardSelect={(card) => console.log(card)} />
        <View style={styles.settingsPositioning}>
          <Icon
            title={"settings"}
            onSettingsPress={() => navigation.navigate("CardSettings")}
          />
        </View>

        <CardCarousel
          cards={cards}
          onCardPress={() => console.log("pressed")}
        />

        <TapContainer />

        <View style={styles.settingsContainer}>
          <View>
            <Text>Current Balance</Text>
            <View style={{ flexDirection: "row" }}>
              <Text style={{ fontSize: 34, fontWeight: "900", color: "green" }}>
                {formatCurrency(transactions[0]?.account?.balance, "GBP", false)}
              </Text>
            </View>
            <Text style={{ lineHeight: 40 }}>
              Total 1220 Kg of carbon emissions produced
            </Text>
          </View>
          <Icon
            title={"freeze"}
            onSettingsPress={() => {
              console.log("freeze");
              setFrozen(!isFrozen);
            }}
            isFrozen={!isFrozen}
          />
        </View>
        <View style={{ marginTop: "5%" }}>
          <IncomeExpense />
        </View>

        <View style={{ flex: 1 }}>
          <TransactionContainer
            title="Transactions History"
            transactionDisplayItems={transactionDisplayItems}
            onTransaction={() => console.log("onTransaction")}
            transactions={filterTransactions}
            onTransactionFilter={(item) => handleTransactionFilter(item)}
          />
        </View>
        <Tagline />
      </ScrollView>
    </AppScreen>
  );
}

const IncomeExpense = () => (
  <View
    style={{
      marginHorizontal: "5%",
      borderRadius: 20,
      overflow: "hidden",
      backgroundColor: "rgba(255, 255, 255, 0.5)",
    }}
  >
    <BlurView tint="light" intensity={20} style={styles.incomeExpenseContainer}>
      <IncomeExpenseItem />
      <IncomeExpenseItem isIncome={false} />
    </BlurView>
  </View>
);

const IncomeExpenseItem = ({ isIncome = true }) => (
  <View
    style={{
      flex: 1,
      flexDirection: "row",
      borderRadius: 20,
      paddingHorizontal: 20,
      paddingVertical: 10,
    }}
  >
    <View
      style={{
        backgroundColor: isIncome ? "green" : "red",
        height: 40,
        width: 40,
        borderRadius: 20,
      }}
    >
      <MaterialCommunityIcons
        name={isIncome ? "arrow-bottom-left" : "arrow-top-right"}
        size={40}
        color={colors.white}
      />
    </View>

    <View style={{ marginLeft: "5%" }}>
      <Text>{isIncome ? "Income" : "Expenses"}</Text>
      <Text style={{ color: isIncome ? "green" : "red", lineHeight: 18 }}>
        {isIncome ? "+" : ""}
        {formatCurrency(3280, "GBP", !isIncome)}
      </Text>
    </View>
  </View>
);

const CardSelector = ({ onCardSelect }) => {
  const cards = [
    { id: 1, name: "virtual" },
    { id: 2, name: "physical" },
  ];

  const [isSelected, setSelected] = useState("physical");

  const handleCardSelect = (card) => {
    setSelected(card);
    onCardSelect(card);
  };

  return (
    <View style={[styles.selectorContainer, styles.selectorPositioning]}>
      {cards.map((card) => (
        <Pressable
          key={card.id}
          onPress={() => handleCardSelect(card.name)}
          style={[
            styles.selectorTextContainer,
            {
              backgroundColor: card.name == isSelected ? colors.babyBlue : null,
            },
          ]}
        >
          <Text
            style={{
              textAlign: "center",
              textTransform: "capitalize",
              opacity: card.name == isSelected ? 1 : 0.5,
            }}
          >
            {card.name}
          </Text>
        </Pressable>
      ))}
    </View>
  );
};

const CardCarousel = ({ cards, onCardPress }) => {
  const scrollX = React.useRef(new Animated.Value(0)).current;
  const [showPinModal, setShowPinModal] = useState(false);
  const [flipped, setFlipped] = useState(false);

  if (showPinModal) {
    return (
      <View style={styles.mainContainer}>
        {/* <RecentTransactions
        amount={10}
      /> */}
        {showPinModal ? (
          <PinModal
            title="Enter your PIN"
            success={() => {
              setShowPinModal(false)
              
            }
          }
          />
        ) : null}
      </View>
    )
  }
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
                marginLeft: idx === 0 ? OFFSET + 35 : undefined,
                marginRight: idx === cards.length - 1 ? OFFSET : undefined,
                opacity: opacity,
                transform: [{ scale: translate }],
              }}
            >
              <FlipCard
                friction={2}
                perspective={1000}
                flipHorizontal={true}
                flipVertical={false}
                flip={flipped}
                clickable={true}
                onFlipStart={()=>{
                  //Ask for pin to flip
                  // setShowPinModal(true)
                  setFlipped(false)
                }}
                onFlipEnd={(isFlipEnd) => {
                  console.log("isFlipEnd", isFlipEnd);
                }}
              >
                {/* Face Side */}
                <Image
                  source={item.cardUrl}
                  style={{
                    flex: 1,
                    // marginLeft: "25%",
                    resizeMode: "contain",
                  }}
                />
                {/* Back Side */}

                <CardBackSide

                />
              </FlipCard>
            </Animated.View>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
};

const CardBackSide = () => {
  const cardBackOBJ = {
    "firstName": "Jack",
    "lastName": "Huang",
    "cardNumber": "1234123412341234",
    "expiaryDate":"01/01",
    "cvv": "000"
  }


  return (
    <View style={styles.backCardContainer}>
      <Text style={[styles.backCardText, styles.backCardHeader]}>BOB</Text>
      <Text style={[styles.backCardText, styles.backCardHeader]}>DYLAN</Text>
      <Text style={styles.backCardText} />
      <Text style={styles.backCardText} />
      <Text style={styles.backCardText}>4234</Text>
      <Text style={styles.backCardText}>1234</Text>
      <Text style={styles.backCardText}>1434</Text>
      <Text style={styles.backCardText}>4567</Text>
      <Text style={styles.backCardText} />
      <Text style={styles.backCardText} />
      <View
        style={[
          styles.itemRow,
          styles.backCardSmallTextContainer,
          { marginBottom: "2.5%" },
        ]}
      >
        <View>
          <Text style={[styles.backCardText, styles.backCardSmallText]}>
            EXP
          </Text>
          <Text style={[styles.backCardText, styles.backCardSmallText]}>
            DATE
          </Text>
        </View>
        <Text style={[styles.backCardText, styles.backCardSmallNumber]}>
          10/25
        </Text>
      </View>

      <View style={[styles.itemRow, styles.backCardSmallTextContainer]}>
        <View>
          <Text style={[styles.backCardText, styles.backCardSmallText]}>
            CVC
          </Text>
          <Text style={[styles.backCardText, styles.backCardSmallText]}>
            CODE
          </Text>
        </View>
        <Text style={[styles.backCardText, styles.backCardSmallNumber]}>
          123
        </Text>
      </View>
      <Text style={styles.backCardText} />
      <Text style={styles.backCardText} />
      <View
        style={{
          backgroundColor: "white",
          height: 30,
          width: "80%",
        }}
      />
      <Text style={styles.backCardText} />
      <Text style={[styles.backCardText, styles.backCardSmallText]}>
        24hrs customer service
      </Text>
      <Text style={[styles.backCardText, styles.backCardSmallText]}>
        ********************************************
      </Text>
    </View>
  );
};
const TapContainer = () => (
  <View style={styles.tapContainer}>
    <MaterialCommunityIcons name="gesture-tap" size={18} />
    <Text style={{ opacity: 0.5 }}>Tap the card to see card details</Text>
  </View>
);

const Icon = ({ title, isFrozen, onSettingsPress }) => {
  return (
    <TouchableOpacity
      onPress={onSettingsPress}
      style={{ justifyContent: "center", alignItems: "center" }}
    >
      <View
        style={{
          backgroundColor: isFrozen ? "black" : colors.babyBlue,
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
            color={isFrozen ? colors.babyBlue : "black"}
            size={30}
          />
        ) : (
          <Ionicons name="settings-sharp" size={30} />
        )}
      </View>
      {!isFrozen ? (
        <Text style={{ textTransform: "capitalize" }}>{title}</Text>
      ) : (
        <Text style={{ textTransform: "capitalize" }}>{`Un${title}`}</Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  backCardContainer: {
    marginTop: "10%",
    height: 320,
    width: 201,
    borderRadius: 10,
    backgroundColor: "black",
    // marginLeft: "25%",
    padding: "10%",
  },
  backCardHeader: {
    fontWeight: "700",
  },
  backCardText: {
    color: "white",
  },
  backCardSmallText: {
    fontSize: 6,
  },
  backCardSmallNumber: {
    fontSize: 8,
  },
  backCardSmallTextContainer: {
    width: "30%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  // blurView: {
  //   flexDirection: "row",
  //   justifyContent: "space-between",
  //   padding: "5%",
  //   paddingBottom: "0%",
  //   borderTopLeftRadius: 20,
  //   borderTopRightRadius: 20,
  // },
  cardsContainer: {
    paddingHorizontal: 0,
    height: 380,
  },
  bold: { fontWeight: "700" },
  footerContainer: {
    marginTop: "10%",
    marginBottom: "30%",
    justifyContent: "center",
    alignItems: "center",
  },
  header: { fontSize: 20 },
  settingsContainer: {
    justifyContent: "space-between",
    flexDirection: "row",
    paddingHorizontal: "5%",
    marginTop: "5%",
  },
  incomeExpenseContainer: {
    flexDirection: "row",
    paddingVertical: "1.5%",
  },
  itemRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  subText: { opacity: 0.5, fontSize: 10, lineHeight: 15 },
  tapContainer: {
    justifyContent: "center",
    flexDirection: "row",
    marginBottom: "5%",
  },
  // transactionContainer: {
  //   flex: 1,
  //   marginTop: "5%",
  //   padding: "5%",
  // },
  // transactionHeaderContainer: {
  //   marginTop: "5%",
  //   borderTopLeftRadius: 20,
  //   borderTopRightRadius: 20,
  //   overflow: "hidden",
  // },
  selectorContainer: {
    width: 200,
    borderRadius: 7,
    flexDirection: "row",
    backgroundColor: "lightgrey",
  },
  selectorPositioning: {
    zIndex: 1,
    position: "absolute",
    top: 110,
    left: -60,
    transform: [{ rotate: "-90deg" }],
  },
  selectorTextContainer: {
    flex: 1,
    justifyContent: "center",
    alighItems: "center",
    backgroundColor: colors.babyBlue,
    borderRadius: 7,
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  settingsPositioning: { zIndex: 1, position: "absolute", top: 270, left: 15 },
});
