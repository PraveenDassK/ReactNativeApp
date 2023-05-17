import React, { useState} from 'react';
import { View, Text, StyleSheet, Image, TouchableWithoutFeedback} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Swiper from 'react-native-swiper';

import {
  horizontalScale,
  verticalScale,
  moderateScale,
} from "../config/scaling";
import AppText from './Text';

AppText

const CARD_DATA = [
  {
    name: 'Card 1',
    number: '**** **** **** 1234',
    image: require('../assets/cardLion.png'),
  },
  {
    name: 'Card 2',
    number: '**** **** **** 5678',
    image: require('../assets/cardLion.png'),
  },
  // add more card data as needed
];

const Card = ({ name, number, image, selected, onPress }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={[styles.card, selected && styles.selectedCard]}>
         <View style={styles.carbonyteCard}>
              <AppText style={[styles.totalWalletBalanceText11, {fontWeight: Platform.OS === "android" ? "normal" : "800",position: "absolute", top: verticalScale(15), left:horizontalScale(15) , fontSize: moderateScale(12), textTransform: "uppercase", width: horizontalScale(50)}]}>
                  <AppText style={{color: "white",fontWeight: Platform.OS === "android" ? "normal" : "300"}}>your</AppText> money <AppText style={{color: "white",fontWeight: Platform.OS === "android" ? "normal" : "300"}}>your</AppText> planet <AppText style={{color: "white",fontWeight: Platform.OS === "android" ? "normal" : "300"}}>your</AppText> choice
              </AppText>
              <Image 
                resizeMode="contain"
                  style={{position: "absolute", right: horizontalScale(20),height: verticalScale(30), width: horizontalScale(20),  top: verticalScale(20), transform: [{
                    rotate: "0deg"
                  }]}}
                  source={require("../assets/icon-contactless-reverse.png")}
                />

                <Image 
                  resizeMode="contain"
                  style={{ position: "absolute", right: horizontalScale(50), height: verticalScale(20), width: horizontalScale(30), top: verticalScale(25), transform: [{
                    rotate: "0deg"
                  }]}}
                  source={require("../assets/group-31764.png")}
                />

                <Image 
                  resizeMode="contain"
                  style={{ zIndex: -1, position: "absolute", right: horizontalScale(0),height: verticalScale(260), width: horizontalScale(160),  top: verticalScale(0), transform: [{
                    rotate: "0deg"
                  }]}}
                  source={require("../assets/tiger.png")}
                />



              <AppText style={[styles.totalWalletBalanceText11, {top:verticalScale(40), fontSize: moderateScale(16) ,fontWeight:'400'}]}>
                  {number}
              </AppText>
              <AppText style={[styles.totalWalletBalanceText11, {top: verticalScale(41.5) , fontSize: moderateScale(10), wordSpacing: 20}]}>
                {name}
              </AppText>

              <AppText style={[styles.totalWalletBalanceText11, {fontWeight: Platform.OS === "android" ? "normal" : "700",fontFamily: "Helvetica",position: "absolute", bottom: verticalScale(20), left:horizontalScale(15) , fontSize: moderateScale(16), textTransform: "lowercase"}]}>
                  Carbonyte
              </AppText>
              <Image 
                resizeMode="contain"
                style={{position: "absolute", bottom:verticalScale(10), right: horizontalScale(20),height: verticalScale(45), width: horizontalScale(45), }}
                  source={require("../assets/group-31766.png")}
              />

            </View>
        {/* <View style={styles.cardHeader}>
          <Icon name="credit-card" size={30} color="#fff" />
          <Text style={styles.cardHeaderText}>{name}</Text>
        </View>
        <View style={styles.cardBody}>
          <Text style={styles.cardBodyText}>{number}</Text>
          <Image source={image} style={styles.cardImage} />
          
        </View> */}
      </View>
    </TouchableWithoutFeedback>
  );
};

const CardSelection = () => {
  const [selectedCard, setSelectedCard] = useState(CARD_DATA[0]);

  const handleCardPress = (card) => {
    setSelectedCard(card);
  };

  return (
    <View style={{flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "red"}}>
    <View  style={styles.cardCarousel}>
      <Swiper
        style={{ paddingLeft: "25%", alignItems: "center", justifyContent: "center"}}
        
        showsPagination={false}
        loop={false}
        index={0}
      >
        {CARD_DATA.map((card) => (
          <Card
            key={card.name}
            {...card}
            selected={selectedCard.name === card.name}
            onPress={() => handleCardPress(card)}
          />
        ))}
      </Swiper>
       
      
    </View>
    <View style={{backgroundColor: "blue"}}>
        <Text>Selected card: {selectedCard.name}</Text>
      </View></View>
  );
};


const styles = StyleSheet.create({
  cardCarousel: {
    height: verticalScale(250),
  },
  card: {

    backgroundColor: '#fff',
    
    marginTop: "3.5%",
   
    height: verticalScale(250),
    width: horizontalScale(160),
    borderRadius: moderateScale(15),
    marginVertical: verticalScale(20), 
  },
  selectedCard: {
    borderWidth: 2,
    borderColor: '#1e90ff',
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardHeaderText: {
    color: '#fff',
    fontSize: 20,
    marginLeft: 10,
  },
  cardBody: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardBodyText: {
    fontSize: 16,
    color: '#999',
  },
  cardImage: {
    width: 80,
    height: 50,
    resizeMode: 'contain',
  },
    carbonyteCard: {
    backgroundColor: "black",
    height: verticalScale(250),
    width: horizontalScale(160),
    borderRadius: moderateScale(15),
    justifyContent: "center",
    padding: "5%",
 
    
  },
   totalWalletBalanceText11: {
    textAlign: "left",
    fontSize: moderateScale(14),
    color: "white",
    textTransform: "uppercase",
    fontWeight: "700"
  },
});



export default CardSelection
