import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const CardSettings = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.cardSettings}>
      <View style={styles.rectangleView} />
      <Text style={[styles.hello, styles.mt8, styles.ml28]}>Settings</Text>
      <Text style={[styles.hello1, styles.mt17, styles.ml28]}>Security</Text>
      <View style={[styles.statusBarBlack, styles.mt_1050]}>
        <View style={styles.rectangle} />
        <View style={styles.statusBar}>
          <View style={styles.time}>
            <Text style={styles.text}>9:41</Text>
          </View>
          <Image
            style={styles.batteryIcon}
            resizeMode="cover"
            source={require("../assets/battery.png")}
          />
          <Image
            style={styles.wifiIcon}
            resizeMode="cover"
            source={require("../assets/wifi.png")}
          />
          <View style={styles.network}>
            <View style={styles.rectangleView1} />
            <View style={styles.rectangleView2} />
            <View style={styles.rectangleView3} />
            <View style={styles.rectangleView4} />
          </View>
        </View>
      </View>
      <Pressable
        style={[styles.groupPressable, styles.mt9, styles.ml25]}
        onPress={() => navigation.navigate("SpendingLimit")}
      >
        <View style={styles.rectangleView5} />
        <View style={styles.groupView}>
          <Text style={styles.spendingLimitSetMonthlySpe}>
            <Text style={styles.spendingLimit1}>
              <Text style={styles.spendingLimit}>Spending limit</Text>
            </Text>
            <Text style={styles.setMonthlySpendingAmount}>
              <Text style={styles.setMonthlySpending}>
                Set monthly spending amount
              </Text>
            </Text>
          </Text>
          <Image
            style={styles.meter1Icon}
            resizeMode="cover"
            source={require("../assets/meter-1.png")}
          />
        </View>
      </Pressable>
      <View style={[styles.groupView2, styles.mt12, styles.ml28]}>
        <Pressable
          style={styles.rectanglePressable}
          onPress={() => navigation.navigate("Plan")}
        />
        <View style={styles.groupView1}>
          <Text style={styles.upgradeCardUpgradeMyCardP}>
            <Text style={styles.upgradeCard1}>
              <Text style={styles.upgradeCard}>Upgrade Card</Text>
            </Text>
            <Text style={styles.upgradeMyCardPlan}>
              <Text
                style={styles.upgradeMyCard}
              >{`Upgrade my card plan `}</Text>
            </Text>
            <Text style={styles.text1} />
          </Text>
          <Image
            style={styles.meter1Icon1}
            resizeMode="cover"
            source={require("../assets/meter-1.png")}
          />
        </View>
      </View>
      <View style={[styles.groupView3, styles.mt12, styles.ml28]}>
        <View style={styles.rectangleView6} />
        <Pressable
          style={styles.groupPressable1}
          onPress={() => navigation.navigate("ReplaceCard")}
        >
          <Text style={styles.replaceCardLostStolenNot}>
            <Text style={styles.replaceCard1}>
              <Text style={styles.replaceCard}>Replace card</Text>
            </Text>
            <Text style={styles.lostStolenNotDelivered}>
              <Text style={styles.lostStolenNot}>
                Lost, stolen, not delivered
              </Text>
            </Text>
            <Text style={styles.text2} />
          </Text>
          <Image
            style={styles.resetIcon}
            resizeMode="cover"
            source={require("../assets/reset.png")}
          />
        </Pressable>
        <Pressable
          style={styles.groupPressable2}
          onPress={() => navigation.navigate("Terminate")}
        >
          <Text style={styles.terminateCardTheCardWillB}>
            <Text style={styles.terminateCard1}>
              <Text style={styles.terminateCard}>Terminate card</Text>
            </Text>
            <Text style={styles.theCardWillBePermanentlyT}>
              <Text style={styles.theCardWill}>
                The card will be permanently terminated
              </Text>
            </Text>
          </Text>
          <Image
            style={styles.delete6Icon}
            resizeMode="cover"
            source={require("../assets/delete-6.png")}
          />
        </Pressable>
      </View>
      <View style={[styles.groupView8, styles.mt12, styles.ml28]}>
        <View style={styles.rectangleView7} />
        <View style={styles.groupView4}>
          <Text style={styles.onlineTransactions}>Online transactions</Text>
          <Text style={styles.internetBasedTransactionsAr}>
            <Text style={styles.internetBasedTransactions}>
              Internet based transactions are generally
            </Text>
            <Text style={styles.highRiskYouCan}>
              high-risk. You can switch them off for extra
            </Text>
            <Text style={styles.securityPaymentsYou}>
              security. Payments you make using mobile
            </Text>
            <Text style={styles.walletsLikeApple}>
              wallets like Apple Pay won’t be affected.
            </Text>
          </Text>
          <Image
            style={styles.globeIcon}
            resizeMode="cover"
            source={require("../assets/globe.png")}
          />
        </View>
        <View style={styles.groupView5}>
          <Text style={styles.swipePaymentsSometimesCards}>
            <Text style={styles.swipePayments1}>
              <Text style={styles.swipePayments}>Swipe payments</Text>
            </Text>
            <Text style={styles.sometimesCardsCanBeCloned}>
              <Text style={styles.sometimesCardsCan}>
                Sometimes cards can be cloned. Switch off the magnetic stripe
                for extra security.
              </Text>
            </Text>
          </Text>
          <Image
            style={styles.swipeCardIcon}
            resizeMode="cover"
            source={require("../assets/swipecard.png")}
          />
        </View>
        <View style={styles.groupView6}>
          <Text style={styles.aTMWithdrawalsSometimesCard}>
            <Text style={styles.aTMWithdrawals1}>
              <Text style={styles.aTMWithdrawals}>ATM withdrawals</Text>
            </Text>
            <Text style={styles.sometimesCardsCanBeCloned1}>
              <Text style={styles.sometimesCardsCan1}>
                Sometimes cards can be cloned. Switch off the magnetic stripe
                for extra security.
              </Text>
            </Text>
          </Text>
          <Image
            style={styles.atmIcon}
            resizeMode="cover"
            source={require("../assets/atm.png")}
          />
        </View>
        <View style={styles.groupView7}>
          <Text style={styles.contactlessPaymentsSometimes}>
            <Text style={styles.contactlessPayments1}>
              <Text style={styles.contactlessPayments}>
                Contactless payments
              </Text>
            </Text>
            <Text style={styles.sometimesCardsCanBeCloned2}>
              <Text
                style={styles.sometimesCardsCan2}
              >{`Sometimes cards can be cloned. Switch `}</Text>
            </Text>
            <Text style={styles.offTheMagneticStripeForEx}>
              <Text style={styles.offTheMagnetic}>
                off the magnetic stripe for extra security
              </Text>
              .
            </Text>
          </Text>
          <Image
            style={styles.contactlessPayment1Icon}
            resizeMode="cover"
            source={require("../assets/contactlesspayment-1.png")}
          />
        </View>
        <View style={styles.component2241}>
          <View style={styles.rectangleView8} />
          <Image
            style={styles.ellipseIcon}
            resizeMode="cover"
            source={require("../assets/ellipse-350.png")}
          />
        </View>
        <View style={styles.component2243}>
          <View style={styles.rectangleView9} />
          <Image
            style={styles.ellipseIcon1}
            resizeMode="cover"
            source={require("../assets/ellipse-350.png")}
          />
        </View>
        <View style={styles.component2244}>
          <View style={styles.rectangleView10} />
          <Image
            style={styles.ellipseIcon2}
            resizeMode="cover"
            source={require("../assets/ellipse-350.png")}
          />
        </View>
        <View style={styles.component2245}>
          <View style={styles.rectangleView11} />
          <Image
            style={styles.ellipseIcon3}
            resizeMode="cover"
            source={require("../assets/ellipse-350.png")}
          />
        </View>
      </View>
      <Pressable
        style={[styles.groupPressable3, styles.mt2]}
        onPress={() => navigation.navigate("MyCards")}
      >
        <Image
          style={styles.iconFeatherArrowLeft}
          resizeMode="cover"
          source={require("../assets/icon-featherarrowleft.png")}
        />
      </Pressable>
      <View style={[styles.homeIndicator, styles.mt4, styles.ml121]} />
    </View>
  );
};

const styles = StyleSheet.create({
  mt8: {
    marginTop: 8,
  },
  ml28: {
    marginLeft: 28,
  },
  mt17: {
    marginTop: 17,
  },
  mt_1050: {
    marginTop: -1050,
  },
  mt9: {
    marginTop: 9,
  },
  ml25: {
    marginLeft: 25,
  },
  mt12: {
    marginTop: 12,
  },
  mt2: {
    marginTop: 2,
  },
  mt4: {
    marginTop: 4,
  },
  ml121: {
    marginLeft: 121,
  },
  rectangleView: {
    position: "relative",
    backgroundColor: "#f6f5f8",
    width: 375,
    height: 1065,
  },
  hello: {
    position: "relative",
    fontSize: 26,
    fontWeight: "700",
    fontFamily: "Typo Grotesk",
    color: "#00003d",
    textAlign: "left",
  },
  hello1: {
    position: "relative",
    fontSize: 12,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#888",
    textAlign: "left",
  },
  rectangle: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: "#fff",
    shadowColor: "rgba(0, 0, 0, 0.05)",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 6,
    elevation: 6,
    shadowOpacity: 1,
  },
  text: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 20,
    letterSpacing: 0,
    lineHeight: 24,
    fontWeight: "500",
    fontFamily: "Roboto",
    color: "rgba(0, 0, 0, 0.87)",
    textAlign: "left",
  },
  time: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    width: 40,
  },
  batteryIcon: {
    position: "absolute",
    marginTop: -3,
    top: "50%",
    right: 0,
    width: 22,
    height: 11,
  },
  wifiIcon: {
    position: "absolute",
    marginTop: -3,
    top: "50%",
    right: 37,
    width: 17,
    height: 12,
  },
  rectangleView1: {
    position: "absolute",
    bottom: 0,
    left: 0,
    borderRadius: 2,
    backgroundColor: "#272727",
    width: 3,
    height: 4,
  },
  rectangleView2: {
    position: "absolute",
    marginLeft: -3.5,
    bottom: 0,
    left: "50%",
    borderRadius: 2,
    backgroundColor: "#272727",
    width: 3,
    height: 6,
  },
  rectangleView3: {
    position: "absolute",
    marginLeft: 0.5,
    bottom: 0,
    left: "50%",
    borderRadius: 2,
    backgroundColor: "#272727",
    width: 3,
    height: 9,
  },
  rectangleView4: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    borderRadius: 2,
    backgroundColor: "#272727",
    width: 3,
  },
  network: {
    position: "absolute",
    marginTop: -3,
    top: "50%",
    right: 68,
    width: 17,
    height: 11,
  },
  statusBar: {
    position: "absolute",
    marginTop: -15,
    top: "50%",
    right: 16,
    left: 15,
    height: 26,
  },
  statusBarBlack: {
    position: "relative",
    width: 375,
    height: 44,
  },
  rectangleView5: {
    position: "absolute",
    marginTop: -31.5,
    top: "50%",
    right: 0,
    left: 0,
    borderRadius: 18,
    backgroundColor: "#fff",
    height: 63,
  },
  spendingLimit: {
    fontSize: 14,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#272727",
  },
  spendingLimit1: {
    margin: 0,
  },
  setMonthlySpending: {
    fontSize: 10,
    fontFamily: "Helvetica",
    color: "#888",
  },
  setMonthlySpendingAmount: {
    margin: 0,
  },
  spendingLimitSetMonthlySpe: {
    position: "absolute",
    marginTop: -14.5,
    top: "50%",
    left: 27,
    lineHeight: 14,
    textAlign: "left",
    width: 257,
  },
  meter1Icon: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 17,
    height: 17,
  },
  groupView: {
    position: "absolute",
    marginTop: -11.5,
    top: "50%",
    right: 22,
    left: 21,
    height: 29,
  },
  groupPressable: {
    position: "relative",
    width: 326,
    height: 63,
  },
  rectanglePressable: {
    position: "absolute",
    marginTop: -31.5,
    top: "50%",
    right: 0,
    left: 0,
    borderRadius: 18,
    backgroundColor: "#fff",
    height: 63,
  },
  upgradeCard: {
    fontSize: 14,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#272727",
  },
  upgradeCard1: {
    margin: 0,
  },
  upgradeMyCard: {
    fontSize: 10,
    fontFamily: "Helvetica",
    color: "#888",
  },
  upgradeMyCardPlan: {
    margin: 0,
  },
  text1: {
    fontSize: 10,
    fontFamily: "Helvetica",
    color: "#888",
  },
  upgradeCardUpgradeMyCardP: {
    position: "absolute",
    marginTop: -14.5,
    top: "50%",
    left: 27,
    lineHeight: 14,
    textAlign: "left",
    width: 257,
  },
  meter1Icon1: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 17,
    height: 17,
  },
  groupView1: {
    position: "absolute",
    marginTop: -11.5,
    top: "50%",
    right: 22,
    left: 21,
    height: 29,
  },
  groupView2: {
    position: "relative",
    width: 326,
    height: 63,
  },
  rectangleView6: {
    position: "absolute",
    marginTop: -59.5,
    top: "50%",
    right: 0,
    left: 0,
    borderRadius: 21,
    backgroundColor: "#fff",
    height: 119,
  },
  replaceCard: {
    fontSize: 14,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#272727",
  },
  replaceCard1: {
    margin: 0,
  },
  lostStolenNot: {
    fontSize: 10,
    fontFamily: "Helvetica",
    color: "#888",
  },
  lostStolenNotDelivered: {
    margin: 0,
  },
  text2: {
    fontSize: 10,
    fontFamily: "Helvetica",
    color: "#888",
  },
  replaceCardLostStolenNot: {
    position: "absolute",
    marginTop: -14.5,
    top: "50%",
    left: 23,
    lineHeight: 14,
    textAlign: "left",
    width: 257,
  },
  resetIcon: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 13,
    height: 14,
  },
  groupPressable1: {
    position: "absolute",
    marginTop: -38.5,
    top: "50%",
    right: 22,
    left: 25,
    height: 29,
  },
  terminateCard: {
    fontSize: 14,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#272727",
  },
  terminateCard1: {
    margin: 0,
  },
  theCardWill: {
    fontSize: 10,
    fontFamily: "Helvetica",
    color: "#888",
  },
  theCardWillBePermanentlyT: {
    margin: 0,
  },
  terminateCardTheCardWillB: {
    position: "absolute",
    marginTop: -13.58,
    top: "50%",
    left: 24,
    lineHeight: 14,
    textAlign: "left",
    width: 257,
  },
  delete6Icon: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 17,
    height: 17,
  },
  groupPressable2: {
    position: "absolute",
    right: 22,
    bottom: 16,
    left: 24,
    height: 31,
  },
  groupView3: {
    position: "relative",
    width: 326,
    height: 119,
  },
  rectangleView7: {
    position: "absolute",
    marginTop: -170.5,
    top: "50%",
    right: 0,
    left: 0,
    borderRadius: 21,
    backgroundColor: "#fff",
    height: 341,
  },
  onlineTransactions: {
    position: "absolute",
    top: 1,
    left: 28,
    fontSize: 14,
    lineHeight: 14,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#272727",
    textAlign: "left",
    width: 257,
  },
  internetBasedTransactions: {
    margin: 0,
  },
  highRiskYouCan: {
    margin: 0,
  },
  securityPaymentsYou: {
    margin: 0,
  },
  walletsLikeApple: {
    margin: 0,
  },
  internetBasedTransactionsAr: {
    position: "absolute",
    bottom: 0,
    left: 28,
    fontSize: 10,
    lineHeight: 12,
    fontFamily: "Helvetica",
    color: "#888",
    textAlign: "left",
    width: 192,
  },
  globeIcon: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 18,
    height: 18,
  },
  groupView4: {
    position: "absolute",
    top: 19,
    right: 22,
    left: 20,
    height: 66,
  },
  swipePayments: {
    fontSize: 14,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#272727",
  },
  swipePayments1: {
    margin: 0,
  },
  sometimesCardsCan: {
    fontSize: 10,
    fontFamily: "Helvetica",
    color: "#888",
  },
  sometimesCardsCanBeCloned: {
    margin: 0,
  },
  swipePaymentsSometimesCards: {
    position: "absolute",
    marginTop: -21.5,
    top: "50%",
    left: 25,
    lineHeight: 14,
    textAlign: "left",
    width: 183,
  },
  swipeCardIcon: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 15,
    height: 15,
  },
  groupView5: {
    position: "absolute",
    marginTop: -51.5,
    top: "50%",
    left: 23,
    width: 207,
    height: 43,
  },
  aTMWithdrawals: {
    fontSize: 14,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#272727",
  },
  aTMWithdrawals1: {
    margin: 0,
  },
  sometimesCardsCan1: {
    fontSize: 10,
    fontFamily: "Helvetica",
    color: "#888",
  },
  sometimesCardsCanBeCloned1: {
    margin: 0,
  },
  aTMWithdrawalsSometimesCard: {
    position: "absolute",
    marginTop: -21.5,
    top: "50%",
    left: 27,
    lineHeight: 14,
    textAlign: "left",
    width: 182,
  },
  atmIcon: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 16,
    height: 16,
  },
  groupView6: {
    position: "absolute",
    marginTop: 23.5,
    top: "50%",
    left: 21,
    width: 208,
    height: 43,
  },
  contactlessPayments: {
    fontSize: 14,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#272727",
  },
  contactlessPayments1: {
    margin: 0,
  },
  sometimesCardsCan2: {
    fontSize: 10,
    fontFamily: "Helvetica",
    color: "#888",
  },
  sometimesCardsCanBeCloned2: {
    margin: 0,
  },
  offTheMagnetic: {
    fontSize: 10,
    fontFamily: "Helvetica",
    color: "#888",
  },
  offTheMagneticStripeForEx: {
    margin: 0,
  },
  contactlessPaymentsSometimes: {
    position: "absolute",
    marginTop: -21.5,
    top: "50%",
    left: 25,
    lineHeight: 14,
    textAlign: "left",
    width: 257,
  },
  contactlessPayment1Icon: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 15,
    height: 15,
  },
  groupView7: {
    position: "absolute",
    right: 22,
    bottom: 29,
    left: 23,
    height: 43,
  },
  rectangleView8: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: 13,
    backgroundColor: "#d2d2d2",
  },
  ellipseIcon: {
    position: "absolute",
    height: "76.92%",
    width: "43.48%",
    top: "11.54%",
    right: "50%",
    bottom: "11.54%",
    left: "6.52%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  component2241: {
    position: "absolute",
    top: 36,
    right: 22,
    width: 46,
    height: 26,
  },
  rectangleView9: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 13,
    backgroundColor: "#d2d2d2",
    width: 46,
    height: 26,
  },
  ellipseIcon1: {
    position: "absolute",
    top: 3,
    left: 3,
    width: 20,
    height: 20,
  },
  component2243: {
    position: "absolute",
    height: "7.62%",
    width: "14.11%",
    top: "35.78%",
    right: "6.75%",
    bottom: "56.6%",
    left: "79.14%",
  },
  rectangleView10: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 13,
    backgroundColor: "#d2d2d2",
    width: 46,
    height: 26,
  },
  ellipseIcon2: {
    position: "absolute",
    top: 3,
    left: 3,
    width: 20,
    height: 20,
  },
  component2244: {
    position: "absolute",
    height: "7.62%",
    width: "14.11%",
    top: "57.77%",
    right: "6.75%",
    bottom: "34.6%",
    left: "79.14%",
  },
  rectangleView11: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 13,
    backgroundColor: "#d2d2d2",
    width: 46,
    height: 26,
  },
  ellipseIcon3: {
    position: "absolute",
    top: 3,
    left: 3,
    width: 20,
    height: 20,
  },
  component2245: {
    position: "absolute",
    height: "7.62%",
    width: "14.11%",
    top: "79.77%",
    right: "6.75%",
    bottom: "12.61%",
    left: "79.14%",
  },
  groupView8: {
    position: "relative",
    width: 326,
    height: 341,
  },
  iconFeatherArrowLeft: {
    position: "absolute",
    marginLeft: -0.5,
    bottom: 4,
    left: "50%",
    width: 17,
    height: 17,
  },
  groupPressable3: {
    position: "relative",
    backgroundColor: "#f6f5f8",
    width: 55,
    height: 45,
  },
  homeIndicator: {
    position: "relative",
    borderRadius: 100,
    backgroundColor: "#000",
    width: 134,
    height: 5,
  },
  cardSettings: {
    position: "relative",
    backgroundColor: "#4b4b4b",
    flex: 1,
    width: "100%",
    flexDirection: "column",
    alignItems: "flex-start",
  },
});

export default CardSettings;
