import React, {
  Component,
  Fragment,
  useEffect,
  useState,
  useContext,
} from "react";
import {
  Animated,
  Alert,
  Text,
  StyleSheet,
  Image,
  View,
  ScrollView,
  SafeAreaView,
  ImageBackground,
  TouchableOpacity,
  Pressable,
  Dimensions,
} from "react-native";
import moment from "moment";
import { MaterialCommunityIcons, Ionicons } from "react-native-vector-icons";

// import AuthContext from "../auth/context";
// import apiCall from "../api/api";
// import apiCall2 from "../api/apiCall";

import colors from "../config/colors";
import GlobalStyles from "../../GlobalStyles";
import formatCurrency from "../utility/formatCurrency";

const OFFSET = 75;
const ITEM_WIDTH = Dimensions.get("window").width - OFFSET * 3;
const ITEM_HEIGHT = 350;

const cards = [
  { title: "Card 1", cardUrl: require("../assets/cardLion.png") },
  { title: "Card 2", cardUrl: require("../assets/cardLion.png") },
  { title: "Card 3", cardUrl: require("../assets/cardLion.png") },
  { title: "Card 4", cardUrl: require("../assets/cardLion.png") },
];

const transactionDisplayItems = [
  { id: 1, title: "All" },
  { id: 2, title: "Income" },
  { id: 3, title: "Expense" },
];
const numOfTransactions = 4;
export default function MyCards({ navigation }) {
  // const { accountID } = useContext(AuthContext);

  const [isFrozen, setFrozen] = useState(false);
  const [transactions, setTransactions] = useState([]);
  const [filterTransactions, setFilterTransactions] = useState([
    ...transactions,
  ]);

  // useEffect(() => {
  //   loadData();
  // }, []);

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

  // const loadData = async () => {
  //   const response = await apiCall.GetTransactions(
  //     accountID,
  //     numOfTransactions
  //   );
  //   const transactionRes = response.content;
  //   console.log(transactionRes);
  //   setTransactions(transactionRes);
  //   setFilterTransactions(transactionRes);
  // };

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
      <CardSelector />
      <View style={styles.settingsPositioning}>
        <Icon
          title={"settings"}
          onSettingsPress={() => navigation.navigate("CardSettings")}
        />
      </View>

      <CardCarousel
        cards={cards}
        onCardPress={() => console.log("card pressed")}
      />
      <TapContainer />
      <View style={styles.settingsContainer}>
        <View>
          <Text>Current Balance</Text>
          <Text>{formatCurrency(46569, "GBP", false)}</Text>
          <Text>Total 1220 Kg of carbon emissions produced</Text>
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

const CardSelector = () => (
  <View style={[styles.selectorContainer, styles.selectorPositioning]}>
    <View style={styles.selectorTextContainer}>
      <Text style={{ textAlign: "center" }}>Virtual</Text>
    </View>
    <View style={styles.selectorTextContainer}>
      <Text style={{ textAlign: "center" }}>Physical</Text>
    </View>
  </View>
);

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
  index,
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
        borderBottomLeftRadius: index == -1 ? 10 : 0,
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
        borderRadius: 7,
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
              <Image
                source={item.cardUrl}
                style={{
                  flex: 1,
                  marginLeft: "25%",

                  resizeMode: "contain",
                }}
                imageStyle={{ borderRadius: 6 }}
              ></Image>
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
    paddingBottom: "0%",
  },
  selectorContainer: {
    width: 200,
    borderRadius: 15,
    flexDirection: "row",
  },
  selectorPositioning: {
    zIndex: 1,
    position: "absolute",
    top: 150,
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
  settingsPositioning: { zIndex: 1, position: "absolute", top: 310, left: 15 },
});
