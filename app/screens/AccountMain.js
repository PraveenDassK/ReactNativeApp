import React,{ useEffect, useState,useContext } from "react";
import { Text, StyleSheet, Image, View, Pressable, ScrollView } from "react-native";
import Screen from "../components/Screen";
import GlobalStyles from "../../GlobalStyles";

import api from "../api/api_list"
import AuthContext from "../auth/context";
import Button from "../components/Button"

import moment from 'moment';

const AccountMain = ({navigation}) => {
  //Saves all the data from the API call
  const [data, setData] = useState(null)
  const [balance, setBalance] = useState(null)

  const [status, setStatus] = useState(null)
  const authContext = useContext(AuthContext)

  const [transactionData, setTransactionData] = useState(null)

  const date = moment().format('ll')

  //Calls the API once during load
  useEffect(() => {
    loadData()
  },[])
  
  //Gets the data for the user
  const loadData = async () => {
    const response = await api.GetAccount();
    const data = response.data.details

    setBalance(data.availableBalance)


    //Verified calculation 
    setStatus(data.status != "ACTIVE")

      //Load the data for transactions
      const transactionCall = await api.GetTransactions();
      const transactionData = transactionCall.data.details

      //Format the data for transactions
      const numberOfTransactions = transactionData.totalSize
      let transactionList = [];
      for(let i = 0; i < 4; i++){
        let dataHold = transactionData.content[i]
        transactionList.push(dataHold)
      }
      setTransactionData( {
        "numTransaction" : numberOfTransactions,
        "transactions" : transactionList
      })
  }

  let currency = (transactionData ? transactionData.transactions[0].amount : "£")
  console.log(currency)
  console.log(transactionData.transactions[0])
  
  /**
   * @dev Data needed for this page
   *      Verification status
   *      Wallet balance
   *      Recent transactios
   */
  return (
    <ScrollView>
    <Screen>
    <View style={styles.account}>
      <View style={styles.historyParent}>
        <Text
          style={[styles.history, styles.historyTypo1, styles.historyPosition]}
        >
          Carbon Spending
        </Text>
        <View style={[styles.component3731, styles.component3731Position]}>
          <View
            style={[styles.component3731Child, styles.vectorWrapperShadowBox]}
          />
          <View style={styles.component3731Item} />
          <Image
            style={styles.component3731Inner}
            resizeMode="cover"
            source={require("../assets/group-30387.png")}
          />
          <Image
            style={[styles.rectangleIcon, styles.rectangleIconPosition]}
            resizeMode="cover"
            source={require("../assets/rectangle-6035.png")}
          />
          <Text style={[styles.hello, styles.helloTypo4]}>2400</Text>
          <Text style={[styles.hello1, styles.helloTypo3]}>Kg of CO2</Text>
          <Text style={[styles.hello2, styles.helloTypo3]}>Estimated</Text>
          <Image
            style={[styles.component3731Child1, styles.rectangleIconPosition]}
            resizeMode="cover"
            source={require("../assets/rectangle-6033.png")}
          />
          <View style={[styles.lineView, styles.lineViewPosition]} />
          <View style={[styles.component3731Child2, styles.lineViewPosition]} />
          <View style={styles.groupParent}>
            <View style={[styles.helloParent, styles.groupParentPosition]}>
              <Text
                style={[styles.hello3, styles.helloTypo2, styles.helloPosition]}
              >{`Health & Beauty`}</Text>
              <View style={[styles.groupChild, styles.groupChildPosition]} />
              <View style={[styles.groupItem, styles.groupChildPosition]} />
              <Image
                style={[styles.iconFeatherHeart, styles.iconPosition2]}
                resizeMode="cover"
                source={require("../assets/icon-featherheart.png")}
              />
              <Text style={styles.hello4}>254</Text>
            </View>
            <View style={[styles.helloGroup, styles.groupParentPosition]}>
              <Text
                style={[styles.hello3, styles.helloTypo2, styles.helloPosition]}
              >{`Food & Beverages`}</Text>
              <View style={[styles.groupChild, styles.groupChildPosition]} />
              <View style={[styles.rectangleView, styles.groupChildPosition]} />
              <Text style={styles.hello4}>254</Text>
              <Image
                style={[styles.layer2Icon, styles.iconPosition2]}
                resizeMode="cover"
                source={require("../assets/layer-2.png")}
              />
            </View>
            <View style={[styles.helloContainer, styles.groupParentPosition]}>
              <Text
                style={[styles.hello3, styles.helloTypo2, styles.helloPosition]}
              >
                House
              </Text>
              <View style={[styles.groupChild, styles.groupChildPosition]} />
              <View style={[styles.groupChild2, styles.groupChildPosition]} />
              <Text style={styles.hello4}>254</Text>
              <Image
                style={[styles.house1Icon, styles.iconPosition1]}
                resizeMode="cover"
                source={require("../assets/house-12.png")}
              />
            </View>
            <View style={[styles.groupView, styles.groupParentPosition]}>
              <Text
                style={[styles.hello3, styles.helloTypo2, styles.helloPosition]}
              >
                Shopping
              </Text>
              <View style={[styles.groupChild, styles.groupChildPosition]} />
              <View style={[styles.groupChild4, styles.groupChildPosition]} />
              <Text style={styles.hello4}>254</Text>
              <Image
                style={[styles.shoppingIcon, styles.iconPosition1]}
                resizeMode="cover"
                source={require("../assets/shopping1.png")}
              />
            </View>
            <View style={[styles.helloParent1, styles.groupParentPosition]}>
              <Text
                style={[styles.hello3, styles.helloTypo2, styles.helloPosition]}
              >
                Transport
              </Text>
              <View style={[styles.groupChild, styles.groupChildPosition]} />
              <View style={[styles.groupChild6, styles.groupChildPosition]} />
              <Text style={styles.hello4}>254</Text>
              <Image
                style={styles.transportationIcon}
                resizeMode="cover"
                source={require("../assets/transportation.png")}
              />
            </View>
          </View>
          <View style={styles.component3731Child3} />
          <View style={[styles.helloWrapper, styles.helloLayout]}>
            <Text
              style={[styles.hello13, styles.helloPosition, styles.helloTypo4]}
            >
              5
            </Text>
          </View>
          <View style={[styles.helloFrame, styles.helloLayout]}>
            <Text
              style={[styles.hello13, styles.helloPosition, styles.helloTypo4]}
            >
              2
            </Text>
          </View>
          <Text style={[styles.totalAssets, styles.totalAssetsPosition]}>
            <Text style={styles.total}>
              <Text style={styles.total1}>{`Total `}</Text>
            </Text>
            <Text style={styles.total}>
              <Text style={styles.assets1}>Assets</Text>
            </Text>
          </Text>
          <Text style={[styles.carbonyteToken, styles.totalAssetsPosition]}>
            <Text style={styles.total}>
              <Text style={styles.total1}>{`Carbonyte `}</Text>
            </Text>
            <Text style={styles.total}>
              <Text style={styles.assets1}>{`Token `}</Text>
            </Text>
          </Text>
          <View style={[styles.component3731Child4, styles.childBorder]} />
          <View style={styles.helloParent2}>
            <Text style={[styles.hello15, styles.helloPosition]}>Assets</Text>
            <Text style={[styles.hello16, styles.helloPosition1]}>Token</Text>
            <Text
              style={[styles.drylandsProtectionKasigauW, styles.protectionTypo]}
            >
              <Text
                style={styles.drylandsProtectionKasigau}
              >{`Drylands Protection, Kasigau Wildlife Corridor `}</Text>
              <Text style={styles.assets1}>£19 / Tonne</Text>
            </Text>
            <Text
              style={[styles.tropicalForestProtectionKe, styles.protectionTypo]}
            >
              <Text
                style={styles.drylandsProtectionKasigau}
              >{`Tropical Forest Protection, Keo Seima `}</Text>
              <Text style={styles.assets1}>£14 / Tree</Text>
            </Text>
            <Text style={[styles.hello17, styles.helloTypo1]}>1</Text>
            <Text style={[styles.hello18, styles.helloTypo1]}>1</Text>
            <Text
              style={[styles.hello19, styles.helloTypo2, styles.helloPosition1]}
            >
              (1 Tonne = 1 CO2 Token)
            </Text>
          </View>
        </View>
        <Text
          style={[styles.history1, styles.historyTypo1, styles.historyPosition]}
        >
          Carbon Assets
        </Text>
        <Image
          style={[styles.groupIcon, styles.groupLayout]}
          resizeMode="cover"
          source={require("../assets/group-30403.png")}
        />
        <Pressable
          style={[styles.sendMoneyParent, styles.parentShadowBox]}
          onPress={() => navigation.navigate("SendMoney")}
        >
          <Text style={[styles.sendMoney, styles.myCardsPosition]}>
            Send Money
          </Text>
          <Image
            style={styles.send1Icon}
            resizeMode="cover"
            source={require("../assets/send-1.png")}
          />
        </Pressable>

        <View style={[styles.bankTransferParent, styles.parentShadowBox]}>

          <Text style={[styles.bankTransfer, styles.myCardsPosition]}>
            Bank Transfer
          </Text>
          <Pressable
          onPress={() => navigation.navigate("BankTransfer")}
          >

          </Pressable>
        </View>

        <Pressable
          style={[styles.myCardsWrapper, styles.parentShadowBox]}
          onPress={() => navigation.navigate("MyCards")}
        >
          <Text style={[styles.myCards, styles.myCardsPosition]}>My Cards</Text>
        </Pressable>
        <Pressable
          style={[styles.addFundsParent, styles.parentShadowBox]}
          onPress={() => navigation.navigate("AddFunds")}
        >
          <Text style={[styles.addFunds, styles.myCardsPosition]}>
            Add Funds
          </Text>
          <Image
            style={[styles.addIcon, styles.addIconLayout, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/add.png")}
          />
        </Pressable>
        <View style={[styles.historyGroup, styles.groupPosition1]}>
          <Text
            style={[
              styles.history2,
              styles.historyTypo1,
              styles.historyPosition,
            ]}
          >
            Recent Transactions
          </Text>
          <Image
            style={styles.path23663Icon}
            resizeMode="cover"
            source={require("../assets/cashwithdraw.png")}
          />
          <View style={styles.groupContainer}>
            <View style={[styles.groupParent1, styles.groupParentShadowBox1]}>
              <View style={[styles.lanceBogrolParent, styles.lancePosition]}>
                <Text style={styles.lanceBogrol}>{transactionData.transactions[4].account.customerName}</Text>
                <Text style={[styles.moneyTransfer, styles.helloTypo2]}>
                  <Text style={styles.total}>September 22, 2022</Text>
                  <Text style={styles.total}>12:06 PM</Text>
                </Text>
              </View>
              <Text style={[styles.text, styles.textTypo]}>{transactionData.transactions[4].amount}</Text>
              <Image
                style={styles.maskGroup14}
                resizeMode="cover"
                source={require("../assets/freshsupermarket.png")}
              />
            </View>
            <View style={[styles.groupParent2, styles.groupParentShadowBox]}>
              <View style={[styles.lanceBogrolParent, styles.lancePosition]}>
                <Text style={styles.lanceBogrol}>{transactionData.transactions[3].account.customerName}</Text>
                <Text style={[styles.moneyTransfer, styles.helloTypo2]}>
                  <Text style={styles.total}>September 22, 2022</Text>
                  <Text style={styles.total}>12:06 PM</Text>
                </Text>
              </View>
              <Text style={[styles.text, styles.textTypo]}>{transactionData.transactions[3].amount}</Text>
              <Image
                style={styles.maskGroup14}
                resizeMode="cover"
                source={require("../assets/freshsupermarket.png")}
              />
            </View>
            <View style={[styles.groupParent3, styles.groupParentShadowBox1]}>
              <View style={[styles.lanceBogrolContainer, styles.lancePosition]}>
                <Text style={styles.lanceBogrol}>{transactionData.transactions[2].account.customerName}</Text>
                <Text style={[styles.moneyTransfer, styles.helloTypo2]}>
                  <Text style={styles.total}>September 22, 2022</Text>
                  <Text style={styles.total}>12:06 PM</Text>
                </Text>
              </View>
              <Text style={[styles.text, styles.textTypo]}>{transactionData.transactions[2].amount}</Text>
              <Image
                style={styles.maskGroup14}
                resizeMode="cover"
                source={require("../assets/freshsupermarket.png")}
              />
            </View>
            <View style={[styles.groupParent4, styles.groupParentShadowBox]}>
              <View style={[styles.lanceBogrolParent, styles.lancePosition]}>
                <Text style={styles.lanceBogrol}>{transactionData.transactions[1].account.customerName}</Text>
                <Text style={[styles.moneyTransfer, styles.helloTypo2]}>
                  <Text style={styles.total}>September 22, 2022</Text>
                  <Text style={styles.total}>12:06 PM</Text>
                </Text>
              </View>
              <Text style={[styles.text, styles.textTypo]}>{transactionData.transactions[1].amount}</Text>
              <Image
                style={[styles.maskGroup16, styles.groupPosition]}
                resizeMode="cover"
                source={require("../assets/spotify-16.png")}
              />
            </View>
            <View style={[styles.groupParent5, styles.groupParentShadowBox]}>
              <View style={[styles.lanceBogrolParent, styles.lancePosition]}>
                <Text style={styles.lanceBogrol}>{transactionData.transactions[0].account.customerName}</Text>
                <Text style={[styles.moneyTransfer, styles.helloTypo2]}>
                  <Text style={styles.total}>{transactionData.transactions[0].transactionDate}</Text>
                  <Text style={styles.total}>12:06 PM</Text>
                </Text>
              </View>
              <Text style={[styles.text4, styles.textTypo]}>{transactionData.transactions[0].amount}</Text>
              <Image
                style={[styles.groupChild7, styles.groupPosition]}
                resizeMode="cover"
                source={require("../assets/image-person.png")}
              />
            </View>
          </View>
        </View>
        <Image
          style={[styles.cardIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/card.png")}
        />
        <Image
          style={[styles.groupChild8, styles.groupLayout]}
          resizeMode="cover"
          source={require("../assets/group-31984.png")}
        />
        <View
          style={[
            styles.helloParent3,
            styles.groupChild9ShadowBox,
            styles.helloParent3Position,
          ]}
        >
          <Text style={styles.hello20}>
            <Text style={styles.text5}>£</Text>
            <Text style={styles.text6}>{balance}</Text>
          </Text>
          <Text style={styles.totalWalletBalance}>Total Wallet Balance</Text>
          <Text style={styles.july192022}>{date}</Text>
        </View>

        {
          //Header tabs
        }
        <View style={[styles.groupChild9, styles.groupChild9ShadowBox]} />
        <View style={[styles.groupChild10, styles.childBorder]} />
          <Pressable
              onPress={() => navigation.navigate("AccountMainBusiness")}                      
            >
              <Text style={[styles.business, styles.businessTypo]}>
              Business
              </Text>
            </Pressable>
        <Text style={[styles.personal, styles.businessTypo]}>Personal</Text>

        <View
          style={[
            styles.groupChild11,
            styles.groupShadowBox,
            styles.helloParent3Position,
          ]}
        />
          <Text style={styles.youAreAlmostReadyWithYour}>
            <Text
              style={styles.youAreAlmost}
            >{`You are almost ready with your account, Avail more benefits by choosing our card plans  `}</Text>
            <Text style={styles.text7}>
              <Text style={styles.drylandsProtectionKasigau} />
              <Text />
            </Text>
          </Text>
          <Text
            style={[styles.congratulations, styles.applyNowPosition]}
          >{`\n `}Congratulations!</Text>
          <Text
            style={[styles.applyNow, styles.applyNowPosition]}
          >{`\n `}Apply Now {">"}</Text>
          <View style={styles.path33217Parent}>
            <Image
              style={[styles.path33217Icon, styles.iconGroupLayout]}
              resizeMode="cover"
              source={require("../assets/image-loadingcircleaccountmain.png")}
            />
            <Text
              style={[styles.text9, styles.historyTypo1, styles.historyPosition]}
            >
              70%
            </Text>
        </View>

        {
          //Top bar links
        }
        <View style={[styles.historyContainer, styles.addIconLayout]}>
          <Text style={[styles.history3, styles.historyTypo]}>
            <Pressable
              onPress={() => navigation.navigate("AccountMain")}                      
            >
              <Text>
                Account
              </Text>
            </Pressable>
          </Text>
          <Text style={[styles.history4, styles.historyTypo]}>
          <Pressable
              onPress={() => navigation.navigate("Analytics")}                      
            >
              <Text>
                Analysis
              </Text>
            </Pressable>
          </Text>
          <Text style={[styles.history5, styles.historyTypo]}>          
            <Pressable
              onPress={() => navigation.navigate("Carbon")}                      
            >
              <Text>
                Carbon
              </Text>
            </Pressable>
          </Text>
          <Text style={[styles.history6, styles.historyTypo]}>
            <Pressable
              onPress={() => navigation.navigate("Settings")}                      
            >
              <Text>
                Profile
              </Text>
            </Pressable>
          </Text>
        </View>


        <View style={[styles.groupParent6, styles.groupPosition1]}>
          <View
            style={[
              styles.vectorWrapper,
              styles.vectorPosition,
              styles.vectorWrapperShadowBox,
            ]}
          >
            <Image
              style={styles.polygonIcon}
              resizeMode="cover"
              source={require("../assets/polygon-5.png")}
            />
          </View>
          <View style={[styles.vectorContainer, styles.vectorPosition]}>
            <Image
              style={styles.polygonIcon}
              resizeMode="cover"
              source={require("../assets/polygon-5.png")}
            />
          </View>
          <Text style={[styles.referAndEarnCarbonTokens, styles.helloTypo]}>
            <Text style={styles.total}>
              <Text style={styles.assets1}>Refer and Earn</Text>
            </Text>
            <Text style={styles.total}>
              <Text style={styles.drylandsProtectionKasigau}>
                {"\n"}carbon Tokens
              </Text>
            </Text>
          </Text>
          <Text
            style={[styles.referNow, styles.historyPosition]}
          >{`Refer Now >`}</Text>
          <Image
            style={[styles.groupChild13, styles.iconGroupLayout]}
            resizeMode="cover"
            source={require("../assets/group-32017.png")}
          />
        </View>
        
        <Pressable
          style={[
            styles.groupPressable,
            styles.groupShadowBox,
            styles.component3731Position,
          ]}
          onPress={() => navigation.navigate("ChooseCardsStandard5")}
        >
          <Text style={[styles.hello21, styles.helloTypo, styles.historyTypo1]}>
            Congratulations!
          </Text>
          <Text style={[styles.hello22, styles.helloTypo, styles.historyTypo1]}>
            View more
          </Text>
          <Text style={[styles.hello23, styles.historyPosition]}>
            <Text style={styles.total}>You have planted 5 trees</Text>
            <Text style={styles.total}>{`\n  `}with Advance Card purchase</Text>
          </Text>

        </Pressable>
        
      </View>
    </View>
    </Screen>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  historyTypo1: {
    textAlign: "left",
    fontWeight: "700",
  },
  historyPosition: {
    fontSize: GlobalStyles.FontSize.size_2xl,
    top: "50%",
    position: "absolute",
  },
  component3731Position: {
    right: 15,
    top: "50%",
  },
  vectorWrapperShadowBox: {
    shadowOpacity: 1,
    elevation: 20,
    shadowRadius: 20,
    shadowOffset: {
      width: 0,
      height: 0,
    },
  },
  rectangleIconPosition: {
    opacity: 0.1,
    overflow: "hidden",
    maxWidth: "100%",
    left: 0,
    right: 0,
    top: 22,
    position: "absolute",
  },
  helloTypo4: {
    fontSize: GlobalStyles.FontSize.size_10xl,
    // fontFamily: GlobalStyles.FontFamily.helvetica,
    textAlign: "left",
    fontWeight: "700",
    position: "absolute",
  },
  helloTypo3: {
    left: "33.01%",
    fontSize: GlobalStyles.FontSize.size_xs,
    // fontFamily: GlobalStyles.FontFamily.helvetica,
    textAlign: "left",
    color: GlobalStyles.Color.indigo_100,
    position: "absolute",
  },
  lineViewPosition: {
    borderTopWidth: 1,
    borderColor: "#fff",
    borderStyle: "solid",
    right: 45,
    height: 2,
    left: 44,
    position: "absolute",
  },
  groupParentPosition: {
    height: 44,
    left: 0,
    right: 0,
    position: "absolute",
  },
  helloTypo2: {
    fontSize: GlobalStyles.FontSize.size_3xs,
    // fontFamily: GlobalStyles.FontFamily.helvetica,
    textAlign: "left",
    position: "absolute",
  },
  helloPosition: {
    left: "0%",
    top: "0%",
  },
  groupChildPosition: {
    height: 30,
    borderRadius: GlobalStyles.Border.br_3xl,
    left: 0,
    bottom: 0,
    position: "absolute",
  },
  iconPosition2: {
    left: 13,
    top: "50%",
    position: "absolute",
  },
  iconPosition1: {
    height: 10,
    top: "50%",
    position: "absolute",
  },
  helloLayout: {
    height: 36,
    bottom: 183,
    width: 20,
    position: "absolute",
  },
  totalAssetsPosition: {
    bottom: 191,
    fontSize: GlobalStyles.FontSize.size_base,
    left: "50%",
    textAlign: "left",
    color: GlobalStyles.Color.indigo_100,
    position: "absolute",
  },
  childBorder: {
    borderColor: "#707070",
    borderStyle: "solid",
    position: "absolute",
  },
  helloPosition1: {
    top: "0%",
    color: GlobalStyles.Color.indigo_100,
  },
  protectionTypo: {
    opacity: 0.77,
    fontSize: GlobalStyles.FontSize.size_xs,
    left: 0,
    textAlign: "left",
    color: GlobalStyles.Color.indigo_100,
    position: "absolute",
  },
  helloTypo1: {
    fontSize: GlobalStyles.FontSize.size_sm,
    left: "97.32%",
    // fontFamily: GlobalStyles.FontFamily.helvetica,
    textAlign: "left",
    color: GlobalStyles.Color.indigo_100,
    position: "absolute",
  },
  groupLayout: {
    height: 19,
    width: 25,
    top: "50%",
    position: "absolute",
  },
  parentShadowBox: {
    height: 90,
    width: 75,
    marginTop: -807.66,
    shadowOpacity: 1,
    elevation: 20,
    shadowRadius: 20,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(1, 1, 253, 0.1)",
    backgroundColor: GlobalStyles.Color.white,
    borderRadius: GlobalStyles.Border.br_lg,
    top: "50%",
    position: "absolute",
  },
  myCardsPosition: {
    marginTop: 17,
    fontSize: GlobalStyles.FontSize.size_3xs,
    // fontFamily: GlobalStyles.FontFamily.helvetica,
    textAlign: "left",
    color: GlobalStyles.Color.indigo_100,
    top: "50%",
    position: "absolute",
  },
  iconLayout: {
    height: 14,
    position: "absolute",
  },
  iconPosition: {
    marginTop: -14,
    left: "50%",
    top: "50%",
  },
  addIconLayout: {
    height: 16,
    position: "absolute",
  },
  groupPosition1: {
    left: 25,
    position: "absolute",
  },
  groupParentShadowBox1: {
    height: 66,
    borderRadius: GlobalStyles.Border.br_4xl,
    shadowOpacity: 1,
    elevation: 20,
    shadowRadius: 20,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(1, 1, 253, 0.1)",
    backgroundColor: GlobalStyles.Color.white,
    left: 0,
    right: 0,
    position: "absolute",
  },
  lancePosition: {
    width: 105,
    marginLeft: -96.5,
    height: 36,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  textTypo: {
    textAlign: "right",
    marginTop: -6,
    fontSize: GlobalStyles.FontSize.size_base,
    // fontFamily: GlobalStyles.FontFamily.helvetica,
    fontWeight: "700",
    letterSpacing: 1,
    top: "50%",
    position: "absolute",
  },
  groupParentShadowBox: {
    height: 64,
    borderRadius: GlobalStyles.Border.br_4xl,
    shadowOpacity: 1,
    elevation: 20,
    shadowRadius: 20,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(1, 1, 253, 0.1)",
    backgroundColor: GlobalStyles.Color.white,
    left: 0,
    right: 0,
    position: "absolute",
  },
  groupPosition: {
    left: 14,
    height: 34,
    width: 34,
    top: "50%",
    position: "absolute",
  },
  groupChild9ShadowBox: {
    shadowColor: "rgba(1, 1, 253, 0.05)", 
    shadowOpacity: 1,
    elevation: 20,
    shadowRadius: 20,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    borderRadius: GlobalStyles.Border.br_lg,
    position: "absolute",
  },
  helloParent3Position: {
    right: 14,
    left: 14,
  },
  businessTypo: {
    textTransform: "capitalize",
    fontSize: GlobalStyles.FontSize.size_base,
    left: "50%",
    // fontFamily: GlobalStyles.FontFamily.helvetica,
    top: 0,
    textAlign: "left",
    position: "absolute",
  },
  groupShadowBox: {
    elevation: 6,
    shadowRadius: 6,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    borderRadius: GlobalStyles.Border.br_lg,
    position: "absolute",
  },
  applyNowPosition: {
    marginLeft: -30.5,
    left: "50%",
    // fontFamily: GlobalStyles.FontFamily.helvetica,
    textAlign: "left",
    fontWeight: "700",
    position: "absolute",
  },
  iconGroupLayout: {
    overflow: "hidden",
    maxWidth: "100%",
  },
  historyTypo: {
    color: GlobalStyles.Color.gray_700,
    fontSize: GlobalStyles.FontSize.size_xl,
    // fontFamily: GlobalStyles.FontFamily.helvetica,
    top: 0,
    textAlign: "left",
    letterSpacing: 1,
    position: "absolute",
  },
  vectorPosition: {
    backgroundColor: GlobalStyles.Color.beige_100,
    right: 14,
    left: 14,
    borderRadius: GlobalStyles.Border.br_4xl,
    position: "absolute",
  },
  helloTypo: {
    fontSize: GlobalStyles.FontSize.size_4xl,
    position: "absolute",
  },
  history: {
    marginTop: -672.99,
    left: "13.08%",
    textAlign: "left",
    color: GlobalStyles.Color.indigo_100,
    letterSpacing: 1,
  },
  component3731Child: {
    shadowColor: "rgba(1, 1, 253, 0.1)",
    borderRadius: GlobalStyles.Border.br_lg,
    elevation: 20,
    shadowRadius: 20,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    backgroundColor: GlobalStyles.Color.white,
    left: 0,
    bottom: 0,
    right: 0,
    top: 22,
    position: "absolute",
  },
  component3731Item: {
    shadowRadius: 10,
    elevation: 10,
    height: 84,
    borderRadius: GlobalStyles.Border.br_4xl,
    top: 0,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(1, 1, 253, 0.1)",
    backgroundColor: GlobalStyles.Color.white,
    left: 0,
    right: 0,
    position: "absolute",
  },
  component3731Inner: {
    top: 15,
    right: 20,
    width: 50,
    height: 47,
    position: "absolute",
  },
  rectangleIcon: {
    bottom: 319,
    maxHeight: "100%",
  },
  hello: {
    top: "3.82%",
    left: "4.62%",
    color: GlobalStyles.Color.blue_100,
    // fontFamily: GlobalStyles.FontFamily.helvetica,
  },
  hello1: {
    top: "6.16%",
    fontSize: GlobalStyles.FontSize.size_xs,
    fontWeight: "700",
  },
  hello2: {
    top: "4.24%",
    fontSize: GlobalStyles.FontSize.size_xs,
  },
  component3731Child1: {
    height: 84,
  },
  lineView: {
    bottom: 178,
    height: 2,
  },
  component3731Child2: {
    bottom: 209,
    height: 2,
  },
  hello3: {
    color: GlobalStyles.Color.gray_800,
  },
  groupChild: {
    right: 0,
    backgroundColor: GlobalStyles.Color.gray_200,
  },
  groupItem: {
    backgroundColor: GlobalStyles.Color.orange_200,
    width: 213,
  },
  iconFeatherHeart: {
    marginTop: 2.45,
    width: 14,
    height: 13,
  },
  hello4: {
    top: "57.75%",
    left: "92.58%",
    fontSize: GlobalStyles.FontSize.size_7xs,
    color: GlobalStyles.Color.gray_1600,
    textAlign: "center",
    // fontFamily: GlobalStyles.FontFamily.helvetica,
    position: "absolute",
  },
  helloParent: {
    top: 0,
  },
  rectangleView: {
    backgroundColor: GlobalStyles.Color.orange_100,
    width: 191,
  },
  layer2Icon: {
    marginTop: 1.3,
    width: 12,
    height: 12,
  },
  helloGroup: {
    marginTop: -79.1,
    top: "50%",
  },
  groupChild2: {
    backgroundColor: GlobalStyles.Color.violet_100,
    width: 125,
  },
  house1Icon: {
    marginTop: 2.48,
    width: 11,
    left: 12,
    height: 10,
  },
  helloContainer: {
    marginTop: -22.2,
    top: "50%",
  },
  groupChild4: {
    backgroundColor: GlobalStyles.Color.violet_200,
    width: 72,
  },
  shoppingIcon: {
    marginTop: 2.65,
    width: 10,
    left: 10,
  },
  groupView: {
    marginTop: 34.7,
    top: "50%",
  },
  groupChild6: {
    backgroundColor: GlobalStyles.Color.green_100,
    width: 47,
  },
  transportationIcon: {
    marginTop: 2.95,
    left: 11,
    height: 9,
    width: 11,
    top: "50%",
    position: "absolute",
  },
  helloParent1: {
    bottom: 0,
  },
  groupParent: {
    top: 124,
    right: 16,
    width: 293,
    height: 272,
    position: "absolute",
  },
  component3731Child3: {
    right: 21,
    bottom: 165,
    left: 17,
    borderRadius: GlobalStyles.Border.br_6xl,
    height: 77,
    position: "absolute",
    backgroundColor: GlobalStyles.Color.gray_200,
  },
  hello13: {
    // fontFamily: GlobalStyles.FontFamily.helvetica,
    color: GlobalStyles.Color.indigo_100,
  },
  helloWrapper: {
    marginLeft: 20.66,
    left: "50%",
  },
  helloFrame: {
    left: 48,
  },
  total1: {
    fontWeight: "300",
    // fontFamily: GlobalStyles.FontFamily.helvetica,
  },
  total: {
    margin: GlobalStyles.Margin.margin_8xs,
  },
  assets1: {
    // fontFamily: GlobalStyles.FontFamily.helvetica,
    fontWeight: "700",
  },
  totalAssets: {
    marginLeft: 47.66,
    width: 53,
    fontSize: GlobalStyles.FontSize.size_base,
  },
  carbonyteToken: {
    marginLeft: -87.34,
    width: 68,
    fontSize: GlobalStyles.FontSize.size_base,
  },
  component3731Child4: {
    marginLeft: -0.84,
    bottom: 186,
    borderRightWidth: 1,
    width: 2,
    height: 37,
    left: "50%",
  },
  hello15: {
    fontSize: GlobalStyles.FontSize.size_xs,
    // fontFamily: GlobalStyles.FontFamily.helvetica,
    textAlign: "left",
    color: GlobalStyles.Color.indigo_100,
    fontWeight: "700",
    position: "absolute",
  },
  hello16: {
    left: "86.97%",
    fontSize: GlobalStyles.FontSize.size_xs,
    // fontFamily: GlobalStyles.FontFamily.helvetica,
    textAlign: "left",
    fontWeight: "700",
    position: "absolute",
  },
  drylandsProtectionKasigau: {
    // fontFamily: GlobalStyles.FontFamily.helvetica,
  },
  drylandsProtectionKasigauW: {
    marginTop: -22.5,
    width: 167,
    top: "50%",
  },
  tropicalForestProtectionKe: {
    width: 161,
    bottom: 0,
  },
  hello17: {
    top: "30.48%",
  },
  hello18: {
    top: "77.14%",
  },
  hello19: {
    left: "16.86%",
  },
  helloParent2: {
    right: 32,
    bottom: 32,
    left: 32,
    height: 105,
    position: "absolute",
  },
  component3731: {
    marginTop: -641.32,
    left: 16,
    height: 715,
    position: "absolute",
  },
  history1: {
    marginTop: -202.66,
    left: "16.52%",
    textAlign: "left",
    color: GlobalStyles.Color.indigo_100,
    letterSpacing: 1,
  },
  groupIcon: {
    marginTop: -677.19,
    left: 15,
  },
  sendMoney: {
    left: 10,
  },
  send1Icon: {
    marginTop: -15.71,
    marginLeft: -8.5,
    height: 18,
    width: 18,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  sendMoneyParent: {
    marginLeft: -77.5,
    left: "50%",
  },
  bankTransfer: {
    left: 7,
  },
  transfer1Icon: {
    marginLeft: -10.5,
    width: 20,
    height: 14,
    marginTop: -14,
  },
  bankTransferParent: {
    marginLeft: 2.5,
    left: "50%",
  },
  myCards: {
    marginLeft: -21.5,
    left: "50%",
  },
  myCardsWrapper: {
    right: 19,
  },
  addFunds: {
    marginLeft: -23.5,
    left: "50%",
  },
  addIcon: {
    marginLeft: -7.5,
    width: 16,
  },
  addFundsParent: {
    left: 20,
  },
  history2: {
    marginTop: -190,
    left: "9.54%",
    textAlign: "left",
    color: GlobalStyles.Color.indigo_100,
    letterSpacing: 1,
  },
  path23663Icon: {
    top: 1,
    width: 19,
    height: 20,
    left: 0,
    position: "absolute",
  },
  lanceBogrol: {
    fontSize: GlobalStyles.FontSize.size_xs,
    // fontFamily: GlobalStyles.FontFamily.helvetica,
    top: 0,
    left: 0,
    textAlign: "left",
    color: GlobalStyles.Color.indigo_100,
    fontWeight: "700",
    letterSpacing: 1,
    position: "absolute",
  },
  moneyTransfer: {
    color: GlobalStyles.Color.gray_900,
    left: 0,
    bottom: -10,
    width:200,
    letterSpacing: 1,
  },
  lanceBogrolParent: {
    marginTop: -16,
  },
  text: {
    right: 27,
    color: GlobalStyles.Color.brown,
  },
  maskGroup14: {
    height: 34,
    width: 34,
    marginTop: -17,
    left: 12,
    top: "50%",
    position: "absolute",
  },
  groupParent1: {
    bottom: 0,
  },
  groupParent2: {
    marginTop: 37.5,
    top: "50%",
  },
  lanceBogrolContainer: {
    marginTop: -17,
  },
  groupParent3: {
    marginTop: -33.5,
    top: "50%",
  },
  maskGroup16: {
    marginTop: -17,
  },
  groupParent4: {
    marginTop: -103.5,
    top: "50%",
  },
  text4: {
    right: 29,
    color: GlobalStyles.Color.turquoise,
  },
  groupChild7: {
    borderRadius: GlobalStyles.Border.br_xs,
    marginTop: -16,
  },
  groupParent5: {
    top: 0,
  },
  groupContainer: {
    top: 33,
    left: 0,
    bottom: 0,
    right: 0,
    position: "absolute",
  },
  historyGroup: {
    right: 5,
    bottom: 233,
    height: 380,
  },
  cardIcon: {
    top: 450,
    right: 48,
    width: 18,
  },
  groupChild8: {
    marginTop: -204.1,
    left: 27,
  },
  text5: {
    color: GlobalStyles.Color.gray_800,
  },
  text6: {
    color: GlobalStyles.Color.blue_100,
  },
  hello20: {
    marginTop: -14.5,
    left: 131,
    fontSize: GlobalStyles.FontSize.size_8xl,
    lineHeight: 26,
    // fontFamily: GlobalStyles.FontFamily.helvetica,
    textAlign: "left",
    fontWeight: "700",
    top: "50%",
    position: "absolute",
  },
  totalWalletBalance: {
    marginTop: -37.5,
    marginLeft: -62.5,
    color: GlobalStyles.Color.black,
    fontSize: GlobalStyles.FontSize.size_base,
    left: "50%",
    // fontFamily: GlobalStyles.FontFamily.helvetica,
    textAlign: "left",
    top: "50%",
    position: "absolute",
  },
  july192022: {
    marginTop: 22.5,
    marginLeft: -41.5,
    color: GlobalStyles.Color.black,
    fontSize: GlobalStyles.FontSize.size_base,
    left: "50%",
    // fontFamily: GlobalStyles.FontFamily.helvetica,
    textAlign: "left",
    top: "50%",
    position: "absolute",
  },
  helloParent3: {
    top: 269,
    height: 123,
    backgroundColor: GlobalStyles.Color.white,
  },
  groupChild9: {
    top: 23,
    backgroundColor: GlobalStyles.Color.blue_100,
    width: 180,
    height: 2,
    left: 0,
  },
  groupChild10: {
    left: -1,
    borderTopWidth: 1.5,
    height: 3,
    opacity: 0.3,
    right: 0,
    top: 22,
    borderColor: "#707070",
  },
  business: {
    marginLeft: 56.5,
    color: GlobalStyles.Color.black,
  },
  personal: {
    marginLeft: -122,
    color: GlobalStyles.Color.blue_100,
    fontWeight: "700",
  },
  groupChild11: {
    top: 113,
    backgroundColor: "#e4e4ff",
    shadowColor: "rgba(0, 0, 0, 0.05)",
    height: 132,
  },
  youAreAlmost: {
    fontSize: GlobalStyles.FontSize.size_base,
    // fontFamily: GlobalStyles.FontFamily.helvetica,
    fontWeight: "700",
  },
  text7: {
    fontSize: GlobalStyles.FontSize.size_xs,
  },
  youAreAlmostReadyWithYour: {
    top: 150,
    right: 40,
    width: 166,
    opacity: 0.8,
    color: GlobalStyles.Color.black,
    textAlign: "left",
    position: "absolute",
  },
  congratulations: {
    top: 119,
    fontSize: GlobalStyles.FontSize.size_base,
    color: GlobalStyles.Color.indigo_100,
  },
  applyNow: {
    top: 205,
    fontSize: GlobalStyles.FontSize.size_xs,
    color: GlobalStyles.Color.blue_100,
  },
  path33217Icon: {
    height:"100%",
    width:"100%",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  text9: {
    marginTop: -5,
    marginLeft: -14,
    left: "50%",
    color: GlobalStyles.Color.blue_100,
    textAlign: "left",
  },
  path33217Parent: {
    top: 137,
    width: 84,
    left: 44,
    height: 84,
    position: "absolute",
  },
  history3: {
    left: 0,
    fontWeight: "700",
  },
  history4: {
    marginLeft: -63.5,
    opacity: 0.3,
    left: "50%",
  },
  history5: {
    marginLeft: 21.5,
    opacity: 0.3,
    left: "50%",
  },
  history6: {
    right: -1,
    opacity: 0.3,
  },
  historyContainer: {
    top: 62,
    right: 26,
    left: 34,
  },
  polygonIcon: {
    marginLeft: -19.05,
    width: 107,
    left: "50%",
    height: 84,
    bottom: 0,
    position: "absolute",
  },
  vectorWrapper: {
    shadowColor: "rgba(1, 1, 253, 0.23)",
    bottom: 3,
    top: 0,
  },
  vectorContainer: {
    top: 3,
    bottom: 0,
  },
  referAndEarnCarbonTokens: {
    marginTop: -56.36,
    left: 49,
    lineHeight: 25,
    width: 208,
    textAlign: "center",
    color: GlobalStyles.Color.indigo_100,
    top: "50%",
  },
  referNow: {
    marginTop: 1.69,
    marginLeft: -70,
    width: 141,
    left: "50%",
    textAlign: "center",
    color: GlobalStyles.Color.blue_100,
    // fontFamily: GlobalStyles.FontFamily.helvetica,
    fontWeight: "700",
  },
  groupChild13: {
    height: 114,
    bottom: 3,
    left: 0,
    right: 0,
  },
  groupParent6: {
    right: 25,
    height: 196,
    bottom: 0,
  },
  hello21: {
    marginTop: 61,
    marginLeft: -76.5,
    left: "50%",
    textAlign: "left",
    color: GlobalStyles.Color.indigo_100,
    top: "50%",
  },
  hello22: {
    marginLeft: -49.5,
    bottom: 35,
    left: "50%",
    color: GlobalStyles.Color.blue_100,
    textAlign: "left",
  },
  hello23: {
    marginTop: 106,
    left: 43,
    whiteSpace: "pre-wrap",
    textAlign: "center",
    // fontFamily: GlobalStyles.FontFamily.helvetica,
    color: GlobalStyles.Color.indigo_100,
  },
  groupChild14: {
    marginTop: -22.55,
    right: 30,
    height: 149,
    left: 0,
    top: "50%",
  },
  image88Icon: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  groupPressable: {
    width:"95%",
    marginTop: 105.34,
    shadowColor: "rgba(0, 0, 0, 0.16)",
    height: 458,
    left: "2.5%",
    backgroundColor: GlobalStyles.Color.white,
  },
  historyParent: {
    width: "100%",
    height: 2447,
  },
  account: {
    flex: 1,
    width: "100%",
    paddingLeft: GlobalStyles.Padding.padding_11xs,
    paddingRight: GlobalStyles.Padding.padding_11xs,
    backgroundColor: GlobalStyles.Color.gray_200,
  },
});

export default AccountMain  ;
