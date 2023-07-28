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
  ActivityIndicator,
} from "react-native";
// import moment from "moment";
import { MaterialCommunityIcons, Ionicons } from "react-native-vector-icons";
import FlipCard from "react-native-flip-card";

import Text from "../components/Text";
import AuthContext from "../auth/context";
import apiCall from "../api/api";
import apiFreezeCall from "../api/apiCall";
import colors from "../config/colors";
import formatCurrency from "../utility/formatCurrency";
import AppScreen from "../components/AppScreen";
import GlobalStyles from "../../GlobalStyles";
import { TransactionContainer } from "../components/transHistory";
import apiTransaction from "../api/apiTransaction";
import Tagline from "../components/Tagline";
import PinModal from "../components/PinModal";
import { AntDesign } from "@expo/vector-icons";
import api_list from "../api/api_list";

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
  const { accountID, customerDetails } = useContext(AuthContext);
  const [isFrozen, setFrozen] = useState("");
  const [transactions, setTransactions] = useState([]);
  const [filterTransactions, setFilterTransactions] = useState([
    ...transactions,
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const [dataAbovecard, setDataAbovecard] = useState([]);
  const [cardData, setCardData] = useState([]);
  const [filteredCards, setFilteredCards] = useState([]);
  const [cardCategory, setCardCategory] = useState("");
  const [apiAccountId, setApiAccountId] = useState();
  const [apiCustomerid, setApiCustomerid] = useState();
  const [selectedCardforFreeze, setSelectedCardForFreeze] = useState();
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
    setIsLoading(true);
    //api to get enfuse account id
    console.log(customerDetails, "this is a customer");

    const responseforgettingAccountId =
      await api_list.GetCustomerDetailsForCard(customerDetails);
    const listedAccount =
      responseforgettingAccountId?.data?.details?.accountDetails;
    const filterAccount = await listedAccount.filter(
      (eachValue, index) => eachValue?.accountId === accountID
    );
    console.log(filterAccount, "this enfuse  ");
    let EnfuseAccountId = filterAccount[0]?.accountNo;
    console.log(EnfuseAccountId,"ID")
    setApiAccountId(EnfuseAccountId);
    //  setDataAbovecard()
    //api to get transaction
    const response = await apiCall.GetTransactions(
      accountID,
      numOfTransactions
    );
    // const userImpactReturn = await apiCall.GetUserImpact(customerDetails);
    const transactionRes = response.content;
    setTransactions(transactionRes);
    setFilterTransactions(transactionRes);
    // api to get card details using enfuse account ID

    const cards = await apiCall.GetCardByEnfuseAccountId(EnfuseAccountId);
    console.log(cards, "this is a test card");
    setCardData(cards);
    setIsLoading(false);

    // console.log(cards);
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
  };
  const filterCards = (type) => {
    const filterCardsByType = (type) => {
      console.log(cardData)
      return cardData?.filter((card) => {
        if (type === "physical") {
          // return card.productCode === "MC_PHYSICAL";
          //name changed for physical card
          return card.productCode === "MC_CARD";
        } else if (type === "virtual") {
          return card.productCode === "MC_VIRTUAL";
        } else {
          return false; // Invalid type, return an empty array
        }
      });
    };
    // card status close filtering
    let filterCardBytype = filterCardsByType(type);
    let cardStatusFilter = filterCardBytype.filter(
      (eachValue, index) => eachValue?.status != "CARD_CLOSED"
    );

    setFilteredCards(cardStatusFilter);
    console.log(cardStatusFilter, "this is filtered");

    setDataAbovecard(new Array(cardStatusFilter?.[0]));
    setCardCategory(type);
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

  if (isLoading) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <ActivityIndicator size={"large"} color="black" />
      </View>
    );
  }
  //function to find cardFreezed or not

  const cardFreezed = () => {
    const freezeCardData = filteredCards?.filter(
      (eachValue, index) => index === selectedCardforFreeze
    );
    const freezeCardId = freezeCardData?.[0]?.id;
    console.log(freezeCardData?.[0]?.status, "inside freeze");
    setDataAbovecard(freezeCardData);
    setFrozen(freezeCardData?.[0]?.status);
  };
  //function for freeze
  const handleFreeze = async () => {
    console.log(dataAbovecard, "this is data abovecard");
    let cardStatus;
    // const freezeCardData = filteredCards.filter(
    //   (eachValue, index) => index === selectedCardforFreeze
    // );
    // console.log(selectedCardforFreeze, "this is index");
    // console.log(freezeCardData, "data");
    // console.log(freezeCardData, "data");

    // console.log("freeze", freezeCardData?.[0]?.id);
    const freezeCardId = dataAbovecard?.[0]?.id;
    if (dataAbovecard?.[0]?.status === "CARD_OK") {
      cardStatus = "CARD_BLOCKED";
    } else {
      cardStatus = "CARD_OK";
    }

    console.log(cardStatus, freezeCardId, "this is status");
    const freezeApi = await apiFreezeCall.FreezeUpdateCard(
      freezeCardId,
      cardStatus
    );
    // setFrozen(!isFrozen);

    loadData();
    cardFreezed();
  };
  const requestObject = {
    accountID: accountID,
    cardID: dataAbovecard?.[0]?.id,
    EnfuseAccountId: dataAbovecard?.[0]?.accountId,
  };
  console.log(requestObject, dataAbovecard?.[0]?.accountId, "data above card");

  return (
    <AppScreen>
      <ScrollView>
        <CardSelector onCardSelect={(card) => filterCards(card)} />
        <View style={styles.settingsPositioning}>
          <Icon
            title={"settings"}
            onSettingsPress={() =>
              navigation.navigate("CardSettings", requestObject)
            }
          />
        </View>

        <CardCarousel
          cards={filteredCards}
          onCardPress={() => console.log("pressed")}
          onPress={() => navigation.navigate("AddNewCard", cardCategory)}
          onTopCard={(card) => {
            console.log("Card Carousel", card), cardFreezed();
          }}
          setSelectedCardForFreeze={setSelectedCardForFreeze}
          isFrozen={isFrozen}
          dataAbovecard={dataAbovecard}
        />

        <TapContainer />

        <View style={styles.settingsContainer}>
          <View>
            <Text style={styles.currentBalance}>Current Balance</Text>
            <View style={{ flexDirection: "row" }}>
              {transactions && (
                <Text
                  style={{
                    fontSize: 30,
                    fontFamily: "Montserrat",
                    color: "green",
                  }}
                >
                  {formatCurrency(
                    transactions[0]?.account?.balance,
                    "GBP",
                    false
                  )}
                </Text>
              )}
            </View>
            <Text
              style={{
                lineHeight: 40,
                fontFamily: "Montserrat-SemiBold",
                color: GlobalStyles.Color.black,
                fontSize: 12,
              }}
            >
              Total 1220 Kg of carbon emissions produced
            </Text>
          </View>
          <Icon
            title={"freeze"}
            onSettingsPress={handleFreeze}
            isFrozen={isFrozen}
            // filteredCards={filteredCards}
            // selectedCardforFreeze={selectedCardforFreeze}
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
        height: 35,
        width: 35,
        borderRadius: 17,
      }}
    >
      <MaterialCommunityIcons
        name={isIncome ? "arrow-bottom-left" : "arrow-top-right"}
        size={35}
        color={colors.white}
      />
    </View>

    <View style={{ marginLeft: "5%" }}>
      <Text style={styles.incomeText}>{isIncome ? "Income" : "Expenses"}</Text>
      <Text
        style={{
          color: isIncome ? "green" : "red",
          lineHeight: 18,
          fontFamily: "Montserrat-SemiBold",
          fontSize: 15,
        }}
      >
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

  useEffect(() => {
    handleCardSelect("physical");
  }, []);

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

const CardCarousel = ({
  cards,
  onCardPress,
  onPress,
  onTopCard,
  setSelectedCardForFreeze,
  isFrozen,
  dataAbovecard,
}) => {
  const scrollX = React.useRef(new Animated.Value(0)).current;
  const [showPinModal, setShowPinModal] = useState(false);
  const [flipped, setFlipped] = useState(false);
  const [showName, setShowName] = useState(true);
  console.log(dataAbovecard, "this is data above card");
  // const [frozen, setFrozen] = useState(false);
  let frozen = false;
  if (isFrozen === "CARD_BLOCKED") {
    frozen = true;
  } else {
    frozen = false;
  }

  const handleScroll = Animated.event(
    [{ nativeEvent: { contentOffset: { x: scrollX } } }],
    {
      useNativeDriver: false,
      listener: (event) => {
        const scrollPosition = event.nativeEvent.contentOffset.x;
        const topCardIdx = Math.floor(scrollPosition / ITEM_WIDTH);
        // console.log("Top Card Index:", topCardIdx);
        onTopCard(topCardIdx);
        console.log("Top Card Index:", topCardIdx);
        setSelectedCardForFreeze(topCardIdx);
        // You can use topCardIdx for any further processing or actions
      },
      // You can add more configuration options for the Animated.event if needed
    }
  );
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
              setShowPinModal(false);
            }}
          />
        ) : null}
      </View>
    );
  }
  return (
    <ScrollView
      horizontal={true}
      decelerationRate={"fast"}
      snapToInterval={ITEM_WIDTH}
      style={styles.cardsContainer}
      showsHorizontalScrollIndicator={false}
      bounces={false}
      disableIntervalMomentum
      onScroll={handleScroll}
      scrollEventThrottle={12}
    >
      {cards?.map((item, idx) => {
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
                onFlipStart={(value) => {
                  //Ask for pin to flip
                  console.log(value, "thsis onm flip");
                  // setShowPinModal(true)
                  setFlipped(false);
                  setShowName(value);
                }}
                onFlipEnd={(isFlipEnd) => {
                  console.log("isFlipEnd", isFlipEnd);
                }}
              >
                {/* Face Side */}
                <Image
                  source={require("../assets/cardLion.png")}
                  style={{
                    flex: 1,
                    // marginLeft: "25%",
                    resizeMode: "contain",
                  }}
                />

                {/* Back Side */}

                <CardBackSide />
              </FlipCard>
              {showName ? (
                <View
                  style={{
                    position: "absolute",
                    height: "93%",
                    width: ITEM_WIDTH,
                    top: "50%",
                    left: 15,
                  }}
                >
                  <Text
                    style={{ color: "white", fontSize: 16 }}
                  >{`Name on the card:  ${
                    dataAbovecard?.[0]?.embossing?.firstName
                      ? dataAbovecard?.[0]?.embossing?.firstName
                      : "Name"
                  }`}</Text>
                  <Text
                    style={{ color: "white", fontSize: 16 }}
                  >{`Card Number:   ****${
                    dataAbovecard?.[0]?.maskedCardNumber
                      ? dataAbovecard?.[0]?.maskedCardNumber.slice(-4)
                      : "4444"
                  }`}</Text>
                </View>
              ) : null}

              {frozen ? (
                <View
                  style={{
                    position: "absolute",
                    height: "93%",
                    width: ITEM_WIDTH,
                    top: 12,
                    left: 15,
                  }}
                >
                  <Image
                    source={require("../assets/cardFrozen.png")}
                    style={{
                      flex: 1,
                      // marginLeft: "25%",
                      resizeMode: "stretch",
                    }}
                  />
                </View>
              ) : null}
            </Animated.View>
          </TouchableOpacity>
        );
      })}
      <TouchableOpacity
        style={{
          width: ITEM_WIDTH + 30,
          height: ITEM_HEIGHT,
          marginLeft: OFFSET + 35,
          marginRight: OFFSET - 1,
          borderColor: GlobalStyles.Color.black,
          borderStyle: "dashed",
          borderWidth: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        onPress={onPress}
      >
        <AntDesign name="plus" size={44} color="black" />
        <Text
          style={{
            color: GlobalStyles.Color.black,
            fontSize: 20,
            fontFamily: "Montserrat",
          }}
        >
          Add New Card
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const CardBackSide = () => {
  const cardBackOBJ = {
    firstName: "Jack",
    lastName: "Huang",
    cardNumber: "1234123412341234",
    expiaryDate: "01/01",
    cvv: "000",
  };

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
          backgroundColor: GlobalStyles.Color.white,
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
    <MaterialCommunityIcons
      name="gesture-tap"
      size={18}
      color={GlobalStyles.Color.darkGray}
    />
    <Text
      style={{
        // opacity: 0.5,
        color: GlobalStyles.Color.darkGray,
        fontFamily: "Montserrat-Medium",
        fontSize: 12,
      }}
    >
      Tap the card to see card details
    </Text>
  </View>
);

const Icon = ({ title, isFrozen, onSettingsPress }) => {
  console.log(isFrozen, "this is frozen");
  // const [frozen, setFrozen] = useState(false);
  let frozen = false;
  if (isFrozen === "CARD_BLOCKED") {
    frozen = true;
  } else {
    frozen = false;
  }
  return (
    <TouchableOpacity
      onPress={onSettingsPress}
      style={{ justifyContent: "center", alignItems: "center" }}
    >
      <View
        style={{
          backgroundColor: frozen ? GlobalStyles.Color.black : colors.babyBlue,
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
            name={!frozen ? "snowflake" : "snowflake-off"}
            color={frozen ? colors.babyBlue : GlobalStyles.Color.black}
            size={30}
          />
        ) : (
          <Ionicons name="settings-sharp" size={30} />
        )}
      </View>
      {!frozen ? (
        <Text style={styles.settingTitle}>{title}</Text>
      ) : (
        <Text style={styles.settingTitle}>{`Un${title}`}</Text>
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
    backgroundColor: GlobalStyles.Color.black,
    // marginLeft: "25%",
    padding: "10%",
  },
  backCardHeader: {
    fontWeight: "700",
  },
  backCardText: {
    color: GlobalStyles.Color.white,
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
    backgroundColor: GlobalStyles.Color.lightGrey,
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
  settingTitle: {
    textTransform: "capitalize",
    fontFamily: "Montserrat-Medium",
    color: GlobalStyles.Color.black,
  },
  currentBalance: {
    color: GlobalStyles.Color.lightBlack,
    fontFamily: "Montserrat-Medium",
    fontSize: 14,
  },
  incomeText: {
    fontFamily: "Montserrat-Medium",
    fontSize: 12,
    color: GlobalStyles.Color.black,
  },
});
