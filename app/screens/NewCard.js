import React, { Component, Fragment, useState } from "react";
import {
  Animated,
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
import { MaterialCommunityIcons, Ionicons } from "react-native-vector-icons";
import colors from "../config/colors";
import GlobalStyles from "../../GlobalStyles";

const OFFSET = 40;
const ITEM_WIDTH = Dimensions.get("window").width - OFFSET * 3;
const ITEM_HEIGHT = 350;

const cards = [
  { title: "Movie 1", posterUrl: require("../assets/cards/Personal01.png") },
  { title: "Movie 2", posterUrl: require("../assets/cards//Personal02.png") },
  { title: "Movie 3", posterUrl: require("../assets/cards/Personal03.png") },
  { title: "Movie 4", posterUrl: require("../assets/cards/Business01.png") },
];

const transactionItems = [
  { id: 1, title: "All" },
  { id: 2, title: "Income" },
  { id: 3, title: "Expense" },
];

export default function NewCard() {
  const [isFrozen, setFrozen] = useState(false);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CardCarousel
        cards={cards}
        onCardPress={() => console.log("card pressed")}
      />
      <TapContainer />
      <View style={styles.settingsContainer}>
        <Icon
          title={"freeze"}
          onSettingsPress={() => {
            
            setFrozen(!isFrozen);
          }}
          isFrozen={!isFrozen}
        />
        <Icon
          title={"settings"}
          onSettingsPress={() => console.log("settings")}
        />
      </View>
      <TransactionContainer
        title="Recent Transactions"
        transactionItems={transactionItems}
        onTransaction={() => console.log("onTransaction")}
      />
    </SafeAreaView>
  );
}

const TransactionContainer = ({
  title = "Transactions",
  transactionItems,
  onTransaction,
}) => (
  <ScrollView style={styles.transactionContainer}>
    <Text style={[styles.bold, styles.header]}>{title}</Text>
    <View style={{ flexDirection: "row" }}>
      {transactionItems.map((items) => (
        <View key={items.id} style={{ marginRight: "2.5%", marginTop: "5%" }}>
          <TransactionSelector
            title={items.title}
            onSelect={() => console.log("selected", items.title)}
          />
        </View>
      ))}
    </View>
    <TransactionHeader />
    <Transaction onTransaction={onTransaction} />
  </ScrollView>
);

const TransactionHeader = ({ date = "Today" }) => (
  <View style={styles.transactionHeaderContainer}>
    <Text>{date}</Text>
  </View>
);

const Transaction = ({ onTransaction }) => {
  return (
    <Pressable
      onPress={onTransaction}
      style={{
        flexDirection: "row",
        padding: "5%",
        justifyContent: "space-between",
        backgroundColor: "white",
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
          <Text style={styles.bold}>Sent to card</Text>
          <Text style={styles.subText}>To Atul Utturkar</Text>
        </View>
      </View>
      <View>
        <Text style={[styles.bold, { textAlign: "right" }]}>- £240.00</Text>
        <Text style={[styles.subText, { textAlign: "right" }]}>23 Feb</Text>
      </View>
    </Pressable>
  );
};

const TransactionSelector = ({ title, onSelect }) => {
  return (
    <TouchableOpacity
      onPress={onSelect}
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
          <TouchableOpacity onPress={onCardPress}>
            <Animated.View
              key={idx}
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
    marginTop: 40,
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
  },
});
