import React, { useContext, useEffect, useState } from "react";
import { Text, StyleSheet, Image, View, Pressable, ScrollView } from "react-native";

import GlobalStyles from "../../GlobalStyles";
import {
  horizontalScale,
  verticalScale,
  moderateScale,
} from "../config/scaling";

import api from "../api/api_list"
import AuthContext from "../auth/context";
import moment from 'moment';

import cardYellow from "../assets/image-cardyellow.png";
import cardYellowFrozen from "../assets/cardFrozen.png";

const MyCards = ({ navigation }) => {
  const [checked, setChecked] = useState(false);
  const toggleChecked = () => setChecked((value) => !value);

  //Transactions
  const [recentTransactions, setRecent] = useState([])
  const authContext = useContext(AuthContext)

  useEffect(() => {
    loadData()
  },[])
  
  const loadData = async () => {
    const transactionCall = await api.GetTransactions()
    const transData = transactionCall.data.details
    for(let i = 0; i  < 4; i++){
      setRecent(oldArray => [...oldArray, transData.content[i]]);
    }
  }
  console.log(recentTransactions[0].account.name)
  console.log(recentTransactions[0].transactionDate)
  console.log(recentTransactions[0].amount)
  //CardFreezing
  const [cardFrozen, setFrozen] = useState(false)
  const toggleCard = () => {
    setFrozen(!cardFrozen)
  }

  return (
    <ScrollView>
      <View style={styles.myCards}>
        <View style={styles.groupParent}>
          <Pressable
            style={[styles.groupContainer, styles.groupShadowBox]}
          >
            <View style={styles.rectangleParent}>
              <View style={styles.groupChild} />
              <Image
                style={styles.iconIonicIosArrowForward}
                resizeMode="cover"
                source={require("../assets/icon-carbonytedownarrowlarge.png")}
              />
            </View>
            <Text style={[styles.myCards1, styles.historyTypo]}>My Cards</Text>
          </Pressable>
          <View style={styles.historyParent}>
            <Text style={[styles.history, styles.historyTypo]}>
              Recent Transactions
            </Text>

            <View style={[styles.groupView, styles.groupPosition1]}>
              {/* <View style={[styles.groupParent1, styles.groupParentShadowBox1]}>
                <View style={[styles.lanceBogrolParent, styles.lancePosition]}>
                  <Text style={[styles.lanceBogrol, styles.bTypo]}>
                    Grocery Market
                  </Text>
                  <Text style={[styles.moneyTransfer, styles.bTypo]}>
                    <Text style={styles.september222022}>
                      September 22, 2022
                    </Text>
                    <Text style={styles.september222022}>12:06 PM</Text>
                  </Text>
                </View>
                <Text style={[styles.text, styles.textTypo]}>- £7.00</Text>
                <Image
                  style={styles.maskGroup14}
                  resizeMode="contain"
                  source={require("../assets/icon-supermarketplaceholder.png")}
                />
              </View>
              <View style={[styles.groupParent2, styles.groupParentShadowBox]}>
                <View style={[styles.lanceBogrolParent, styles.lancePosition]}>
                  <Text style={[styles.lanceBogrol, styles.bTypo]}>
                    Grocery Market
                  </Text>
                  <Text style={[styles.moneyTransfer, styles.bTypo]}>
                    <Text style={styles.september222022}>
                      September 22, 2022
                    </Text>
                    <Text style={styles.september222022}>12:06 PM</Text>
                  </Text>
                </View>
                <Text style={[styles.text, styles.textTypo]}>- £70.00</Text>
                <Image
                  style={styles.maskGroup14}
                  resizeMode="contain"
                  source={require("../assets/icon-supermarketplaceholder.png")}
                />
              </View> */}
              <View style={[styles.groupParent3, styles.groupParentShadowBox1]}>
                <View
                  style={[styles.lanceBogrolContainer, styles.lancePosition]}
                >
                  <Text style={[styles.lanceBogrol, styles.bTypo]}>
                  {recentTransactions[2].account.name}
                  </Text>
                  <Text style={[styles.moneyTransfer, styles.bTypo]}>
                    <Text style={styles.september222022}>
                      {moment(recentTransactions[2].transactionDate).format('LL')}
                    </Text>
                    {/* <Text style={styles.september222022}>12:06 PM</Text> */}
                  </Text>
                </View>
                <Text style={[styles.text, styles.textTypo]}>- £{recentTransactions[2].amount}</Text>
                <Image
                  style={styles.maskGroup14}
                  resizeMode="contain"
                  source={require("../assets/icon-supermarketplaceholder.png")}
                />
              </View>
              <View style={[styles.groupParent4, styles.groupParentShadowBox]}>
                <View style={[styles.lanceBogrolParent, styles.lancePosition]}>
                  <Text style={[styles.lanceBogrol, styles.bTypo]}>
                  {recentTransactions[1].account.name}
                  </Text>
                  <Text style={[styles.moneyTransfer, styles.bTypo]}>
                    <Text style={styles.september222022}>
                    {moment(recentTransactions[1].transactionDate).format('LL')}
                    </Text>
                    {/* <Text style={styles.september222022}>12:06 PM</Text> */}
                  </Text>
                </View>
                <Text style={[styles.text, styles.textTypo]}>- £{recentTransactions[1].amount}</Text>
                <Image
                  style={[styles.maskGroup16, styles.groupPosition]}
                  resizeMode="contain"
                  source={require("../assets/icon-spotifyplaceholder.png")}
                />
              </View>
              <View style={[styles.groupParent5, styles.groupParentShadowBox]}>
                <View style={[styles.lanceBogrolParent, styles.lancePosition]}>
                  <Text style={[styles.lanceBogrol, styles.bTypo]}>
                  {recentTransactions[0].account.name}
                  </Text>
                  <Text style={[styles.moneyTransfer, styles.bTypo]}>
                    <Text style={styles.september222022}>
                    {moment(recentTransactions[0].transactionDate).format('LL')}
                    </Text>
                    {/* <Text style={styles.september222022}>12:06 PM</Text> */}
                  </Text>
                </View>
                <Text style={[styles.text4, styles.textTypo]}>+ £{recentTransactions[0].amount}</Text>
                <Image
                  style={[styles.groupItem, styles.groupPosition]}
                  resizeMode="contain"
                  source={require("../assets/image-person.png")}
                />
              </View>
            </View>
            <Image
              style={{
                width: horizontalScale(200),
                height: verticalScale(375),
                resizeMode: "contain",
                position: "absolute",
                top: verticalScale(-500),
                left: horizontalScale(60),
              }}
              source={require("../assets/image-cardyellow.png")}
            />
            {cardFrozen ?             
            <Image
              style={{
                width: horizontalScale(200),
                height: verticalScale(375),
                resizeMode: "contain",
                position: "absolute",
                top: verticalScale(-500),
                left: horizontalScale(60),
              }}
              source={require("../assets/cardFrozen.png")}
            /> : 
            null}

          </View>

          <Pressable
            style={styles.wrapper}
            onPress={() => toggleCard()}
          >
            <Image
              style={styles.icon}
              resizeMode="contain"
              source={require("../assets/icon-freeze.png")}
            />

          </Pressable>

          <Pressable
            style={styles.rectangleGroup}
            onPress={() => navigation.navigate("CardSettings")}
          >
            <Image
              style={[styles.settingsIcon, styles.iconLayout]}
              resizeMode="contain"
              source={require("../assets/icon-settings.png")}
            />
          </Pressable>
        </View>
              <View style={{top: "-48.5%", width: "100%", backgroundColor: "red"}}>
              <Text style={{position: "absolute", left: "24.5%", width: "19%", textAlign: "center"}}>Freeze</Text>
              <Text style={{position: "absolute", left: "55%", width: "19%", textAlign: "center"}}>Settings</Text>
              </View>
        </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  groupShadowBox: {
    shadowOpacity: 1,
    elevation: 20,
    shadowRadius: 20,
    shadowOffset: {
      width: horizontalScale(0),
      height: verticalScale(-3),
    },
    image: {
      width: 50,
      height: 50,
      left: "50%",
      resizeMode: "contain",
    }, settingsText: {
    top: "-50%",
    position: "absolute"
    },
    shadowColor: "rgba(1, 1, 253, 0.1)",
    backgroundColor: GlobalStyles.Color.white,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  historyTypo: {
    textAlign: "center",
    color: GlobalStyles.Color.indigo_100,
    fontWeight: "700",
    position: "absolute",
  },
  iconLayout: {
    height: verticalScale(20),
    position: "absolute",
  },
  groupPosition1: {
    right: horizontalScale(0),
    bottom: verticalScale(0),
    left: horizontalScale(0),
    position: "absolute",
  },
  groupParentShadowBox1: {
    height: verticalScale(66),
    borderRadius: GlobalStyles.Border.br_4xl,
    right: horizontalScale(0),
    left: horizontalScale(0),
    shadowOpacity: 1,
    elevation: 20,
    shadowRadius: 20,
    shadowOffset: {
      width: horizontalScale(0),
      height: verticalScale(-3),
    },
    shadowColor: "rgba(1, 1, 253, 0.1)",
    backgroundColor: GlobalStyles.Color.white,
    position: "absolute",
  },
  lancePosition: {
    height: verticalScale(36),
    width: horizontalScale(105),
    marginLeft: horizontalScale(-96.5),
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  bTypo: {
    //fontFamily: GlobalStyles.FontFamily.helvetica,
    textAlign: "left",
    position: "absolute",
  },
  textTypo: {
    textAlign: "right",
    fontSize: GlobalStyles.FontSize.size_base,
    marginTop: verticalScale(-6),
    //fontFamily: GlobalStyles.FontFamily.helvetica,
    letterSpacing: 1,
    fontWeight: "700",
    top: "50%",
    position: "absolute",
  },
  groupParentShadowBox: {
    height: verticalScale(64),
    borderRadius: GlobalStyles.Border.br_4xl,
    right: horizontalScale(0),
    left: horizontalScale(0),
    shadowOpacity: 1,
    elevation: 20,
    shadowRadius: 20,
    shadowOffset: {
      width: horizontalScale(0),
      height: verticalScale(-3),
    },
    shadowColor: "rgba(1, 1, 253, 0.1)",
    backgroundColor: GlobalStyles.Color.white,
    position: "absolute",
  },
  groupPosition: {
    left: horizontalScale(14),
    height: verticalScale(34),
    width: horizontalScale(34),
    top: "50%",
    position: "absolute",
  },
  maskPosition: {
    height: verticalScale(47),
    width: horizontalScale(60),
    marginTop: verticalScale(-54.5),
    top: "50%",
    position: "absolute",
  },
  helloTypo: {
    color: GlobalStyles.Color.gray_1700,
    textTransform: "uppercase",
    top: "51.47%",
    fontSize: GlobalStyles.FontSize.size_xs,
    backgroundColor: "yellow",
    width: "100%",

    position: "absolute",
  },
  groupIconLayout: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  bTypo1: {
    fontWeight: "700",
    // fontFamily: GlobalStyles.FontFamily.helvetica,
  },
  groupChild: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  iconIonicIosArrowForward: {
    marginTop: verticalScale(1.03),
    left: horizontalScale(6),
    width: horizontalScale(11),
    height: verticalScale(6),
    top: "50%",
    position: "absolute",
  },
  rectangleParent: {
    height: "2.98%",
    width: "88.8%",
    top: "1.19%",
    right: "5.6%",
    bottom: "95.84%",
    left: "5.6%",
    position: "absolute",
  },
  myCards1: {
    width: "100%",
    top: verticalScale(36),
    fontSize: GlobalStyles.FontSize.size_4xl,
    textAlign: "center",
  },
  groupContainer: {
    borderTopLeftRadius: GlobalStyles.Border.br_4xl,
    borderTopRightRadius: GlobalStyles.Border.br_4xl,
  },
  history: {
    marginTop: verticalScale(-191),
    left: "9.54%",
    fontSize: GlobalStyles.FontSize.size_2xl,
    letterSpacing: 1,
    top: "50%",
  },
  path23663Icon: {
    top: verticalScale(10),
    width: horizontalScale(20),
    height: verticalScale(20),
  },
  lanceBogrol: {
    fontSize: GlobalStyles.FontSize.size_xs,
    // fontFamily: GlobalStyles.FontFamily.helvetica,
    top: verticalScale(0),
    left: horizontalScale(0),
    letterSpacing: 1,
    color: GlobalStyles.Color.indigo_100,
    fontWeight: "700",
  },
  september222022: {
    margin: GlobalStyles.Margin.margin_8xs,
  },
  moneyTransfer: {
    fontSize: GlobalStyles.FontSize.size_3xs,
    color: GlobalStyles.Color.gray_900,
    bottom: verticalScale(-10),
    left: horizontalScale(0),
    letterSpacing: 1,
  },
  lanceBogrolParent: {
    marginTop: verticalScale(-16),
  },
  text: {
    right: horizontalScale(27),
    color: GlobalStyles.Color.brown,
  },
  maskGroup14: {
    left: horizontalScale(12),
    height: verticalScale(34),
    width: horizontalScale(34),
    marginTop: verticalScale(-17),
    top: "50%",
    position: "absolute",
  },
  groupParent1: {
    bottom: verticalScale(0),
  },
  groupParent2: {
    marginTop: verticalScale(37.5),
    top: "50%",
  },
  lanceBogrolContainer: {
    marginTop: verticalScale(-17),
  },
  groupParent3: {
    marginTop: verticalScale(-33.5),
    top: "50%",
  },
  maskGroup16: {
    marginTop: verticalScale(-17),
  },
  groupParent4: {
    marginTop: verticalScale(-103.5),
    top: "50%",
  },
  text4: {
    right: horizontalScale(29),
    color: GlobalStyles.Color.turquoise,
  },
  groupItem: {
    borderRadius: GlobalStyles.Border.br_xs,
    marginTop: verticalScale(-16),
  },
  groupParent5: {
    top: verticalScale(0),
  },
  groupView: {
    top: verticalScale(35),
    bottom: verticalScale(0),
  },
  historyParent: {
    right: horizontalScale(25),
    bottom: verticalScale(43),
    left: horizontalScale(25),
    height: verticalScale(382),
    position: "absolute",
  },
  maskGroup236: {
    top: verticalScale(0),
    bottom: verticalScale(0),
  },
  maskGroup236Wrapper: {
    left: horizontalScale(47),
  },
  maskGroup236Container: {
    marginLeft: horizontalScale(-29.5),
    left: "50%",
  },
  maskGroup236Frame: {
    right: horizontalScale(37),
  },
  icon: {
    marginLeft: horizontalScale(-114.5),
    marginTop: verticalScale(-80.5),
    height: "100%",
    width: "100%",
  },
  wrapper: {
    width: horizontalScale(110),
    height: verticalScale(110),
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  hello: {
    left: "50%",
    marginLeft: horizontalScale(-80.5),
  },
  groupInner: {
    borderRadius: GlobalStyles.Border.br_lg,
  },
  settingsIcon: {
    marginTop: verticalScale(-10),
    marginLeft: horizontalScale(-10),
    width: horizontalScale(20),
    left: "50%",
    top: "50%",
  },
  rectangleGroup: {
    marginLeft: horizontalScale(30.5),
    width: horizontalScale(50),
    height: verticalScale(50),
    marginTop: verticalScale(-49.5),
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  hello1: {
    width: "100%",
  },
  path33118Icon: {
    right: horizontalScale(-60),
    bottom: verticalScale(-60),
    top: verticalScale(0),
    left: horizontalScale(0),
    width: "100%",
    height: "100%",
  },
  groupIcon: {
    height: "6.35%",
    width: "49.25%",
    top: "-62.13%",
    right: "53.94%",
    bottom: "155.78%",
    left: "-3.18%",
  },
  groupChild1: {
    height: "10.54%",
    width: "81.73%",
    top: "34.63%",
    right: "9.14%",
    bottom: "54.83%",
    left: "9.14%",
  },
  rectangleView: {
    width: "10%",
  },
  rectangleIcon: {},
  b: {
    top: "-2.67%",
    left: "-3.7%",
    fontSize: GlobalStyles.FontSize.size_14xl,
    letterSpacing: 5,
    color: GlobalStyles.Color.gray_1900,
  },
  bWrapper: {},
  business: {
    top: "88.65%",
    left: "10.24%",
    fontSize: GlobalStyles.FontSize.size_2xs,
    letterSpacing: 0,
    color: GlobalStyles.Color.white,
  },
  groupChild2: {
    top: verticalScale(17),
    right: horizontalScale(15),
    width: horizontalScale(28),
    height: verticalScale(30),
    position: "absolute",
  },
  groupChild3: {
    right: horizontalScale(16),
    bottom: verticalScale(21),
    width: horizontalScale(48),
    height: verticalScale(41),
    position: "absolute",
  },
  groupChild4: {
    marginLeft: horizontalScale(25.31),
    top: verticalScale(21),
    width: horizontalScale(17),
    height: verticalScale(22),
    left: "50%",
    position: "absolute",
  },
  card1: {
    resizeMode: "contain",
    width: "50%",
    height: "50%",

    position: "absolute",
  },
  groupParent: {
    width: "100%",
    height: verticalScale(987),
  },
  myCards: {
    backgroundColor: GlobalStyles.Color.gray_1100,
    flex: 1,
    paddingTop: GlobalStyles.Padding.padding_md,
    width: "100%",
  },
});

export default MyCards;
