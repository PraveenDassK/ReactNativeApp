import * as React from "react";
import { Text, StyleSheet, View, Image, Pressable } from "react-native";
import Screen from "../components/Screen";
import GlobalStyles from "../../GlobalStyles";

const CardSettings = () => {
  

  return (
    <Screen>
    <View style={styles.cardSettings}>
    <Image
            style={[styles.arrowCircle, styles.arrowPosition]}
            resizeMode="cover"
            source={require("../assets/icon-featherarrowleft@3x.png")}
          />
      <View style={styles.helloParent}>
        <Text style={styles.hello}>Settings</Text>
        <Text style={styles.hello1}>Security</Text>
        <Pressable
          style={styles.rectangleParent}
          onPress={() => navigation.navigate("SpendingLimit")}
        >
          <View style={styles.groupChild} />
          <View
            style={[
              styles.spendingLimitSetMonthlySpeParent,
              styles.parentPosition,
            ]}
          >
            <Text
              style={[
                styles.spendingLimitSetMonthlySpe,
                styles.cardLayout,
                styles.replaceCardLostStolenNotPosition,
              ]}
            >
              <Text style={styles.spendingLimit}>
                <Text
                  style={[styles.spendingLimit1, styles.spendingLimit1Typo]}
                >
                  Spending limit
                </Text>
              </Text>
              <Text style={styles.spendingLimit}>
                <Text
                  style={[
                    styles.setMonthlySpending,
                    styles.setMonthlySpendingTypo,
                  ]}
                >
                  {"\n"}Set monthly spending amount
                </Text>
              </Text>
            </Text>
            <Image
              style={[styles.meter1Icon, styles.iconPosition]}
              resizeMode="cover"
              source={require("../assets/meter-1@3x.png")}
            />
          </View>
        </Pressable>
        <View style={styles.rectangleGroup}>
          <Pressable
            style={styles.groupChild}
            onPress={() => navigation.navigate("Plan")}
          />
          <View
            style={[
              styles.spendingLimitSetMonthlySpeParent,
              styles.parentPosition,
            ]}
          >
            <Text
              style={[
                styles.spendingLimitSetMonthlySpe,
                styles.cardLayout,
                styles.replaceCardLostStolenNotPosition,
              ]}
            >
              <Text style={styles.spendingLimit}>
                <Text
                  style={[styles.spendingLimit1, styles.spendingLimit1Typo]}
                >
                  Upgrade Card
                </Text>
              </Text>
              <Text style={styles.spendingLimit}>
                <Text
                  style={[
                    styles.setMonthlySpending,
                    styles.setMonthlySpendingTypo,
                  ]}
                >{`\nUpgrade my card plan `}</Text>
              </Text>
              <Text
                style={[
                  styles.setMonthlySpending,
                  styles.setMonthlySpendingTypo,
                ]}
              />
            </Text>
            <Image
              style={[styles.meter1Icon, styles.iconPosition]}
              resizeMode="cover"
              source={require("../assets/meter-1@3x.png")}
            />
          </View>
        </View>
        <View style={[styles.rectangleContainer, styles.groupInnerPosition]}>
          <View
            style={[
              styles.groupInner,
              styles.groupInnerLayout,
              styles.groupInnerPosition,
            ]}
          />
          <Pressable
            style={[
              styles.replaceCardLostStolenNotParent,
              styles.parentPosition,
            ]}
            onPress={() => navigation.navigate("ReplaceCard")}
          >
            <Text
              style={[
                styles.replaceCardLostStolenNot,
                styles.cardLayout,
                styles.replaceCardLostStolenNotPosition,
              ]}
            >
              <Text style={styles.spendingLimit}>
                <Text
                  style={[styles.spendingLimit1, styles.spendingLimit1Typo]}
                >
                  Replace card
                </Text>
              </Text>
              <Text style={styles.spendingLimit}>
                <Text
                  style={[
                    styles.setMonthlySpending,
                    styles.setMonthlySpendingTypo,
                  ]}
                >
                  {"\n"}Lost, stolen, not delivered
                </Text>
              </Text>
              <Text
                style={[
                  styles.setMonthlySpending,
                  styles.setMonthlySpendingTypo,
                ]}
              />
            </Text>
            <Image
              style={[styles.resetIcon, styles.iconPosition]}
              resizeMode="cover"
              source={require("../assets/reset@3x.png")}
            />
          </Pressable>
          <Pressable
            style={[
              styles.terminateCardTheCardWillBParent,
              styles.terminateCardPosition,
            ]}
            onPress={() => navigation.navigate("Terminate")}
          >
            <Text
              style={[
                styles.terminateCardTheCardWillB,
                styles.terminateCardPosition,
                styles.cardLayout,
              ]}
            >
              <Text style={styles.spendingLimit}>
                <Text
                  style={[styles.spendingLimit1, styles.spendingLimit1Typo]}
                >
                  Terminate card
                </Text>
              </Text>
              <Text style={styles.spendingLimit}>
                <Text
                  style={[
                    styles.setMonthlySpending,
                    styles.setMonthlySpendingTypo,
                  ]}
                >
                  {"\n"}The card will be permanently terminated
                </Text>
              </Text>
            </Text>
            <Image
              style={[styles.meter1Icon, styles.iconPosition]}
              resizeMode="cover"
              source={require("../assets/delete-6@3x.png")}
            />
          </Pressable>
        </View>
        <View style={[styles.groupView, styles.viewPosition]}>
          <View
            style={[
              styles.rectangleView,
              styles.viewPosition,
              styles.groupInnerLayout,
            ]}
          />
          <View style={styles.onlineTransactionsParent}>
            <Text
              style={[
                styles.onlineTransactions,
                styles.transactionsPosition,
                styles.spendingLimit1Typo,
                styles.cardLayout,
              ]}
            >
              Online transactions
            </Text>
            <Text
              style={[
                styles.internetBasedTransactionsAr,
                styles.transactionsPosition,
                styles.setMonthlySpendingTypo,
              ]}
            >
              <Text style={styles.spendingLimit}>
              {"\n"}Internet based transactions are generally
              </Text>
              <Text style={styles.spendingLimit}>
              {"\n"}high-risk. You can switch them off for extra
              </Text>
              <Text style={styles.spendingLimit}>
              {"\n"}security. Payments you make using mobile
              </Text>
              <Text style={styles.spendingLimit}>
              {"\n"}wallets like Apple Pay won’t be affected.
              </Text>
            </Text>
            <Image
              style={[styles.globeIcon, styles.iconPosition]}
              resizeMode="cover"
              source={require("../assets/globe@3x.png")}
            />
          </View>
          <View
            style={[
              styles.swipePaymentsSometimesCardsParent,
              styles.paymentsParentLayout,
            ]}
          >
            <Text
              style={[
                styles.swipePaymentsSometimesCards,
                styles.paymentsPosition,
              ]}
            >
              <Text style={styles.spendingLimit}>
                <Text
                  style={[styles.spendingLimit1, styles.spendingLimit1Typo]}
                >
                  Swipe payments
                </Text>
              </Text>
              <Text style={styles.spendingLimit}>
                <Text
                  style={[
                    styles.setMonthlySpending,
                    styles.setMonthlySpendingTypo,
                  ]}
                >
                 {"\n"}Sometimes cards can be cloned. Switch 
                 {"\n"}off the magnetic stripe for extra security.
                </Text>
              </Text>
            </Text>
            <Image
              style={[styles.swipeCardIcon, styles.iconPosition]}
              resizeMode="cover"
              source={require("../assets/swipecard@3x.png")}
            />
          </View>
          <View
            style={[
              styles.atmWithdrawalsSometimesCardParent,
              styles.paymentsParentLayout,
            ]}
          >
            <Text
              style={[
                styles.atmWithdrawalsSometimesCard,
                styles.paymentsPosition,
              ]}
            >
              <Text style={styles.spendingLimit}>
                <Text
                  style={[styles.spendingLimit1, styles.spendingLimit1Typo]}
                >
                  ATM withdrawals
                </Text>
              </Text>
              <Text style={styles.spendingLimit}>
                <Text
                  style={[
                    styles.setMonthlySpending,
                    styles.setMonthlySpendingTypo,
                  ]}
                >
                  {"\n"}Sometimes cards can be cloned. Switch 
                  {"\n"}off the magnetic stripe
                  for extra security.
                </Text>
              </Text>
            </Text>
            <Image
              style={[styles.atmIcon, styles.iconPosition]}
              resizeMode="cover"
              source={require("../assets/atm@3x.png")}
            />
          </View>
          <View
            style={[
              styles.contactlessPaymentsSometimesParent,
              styles.paymentsParentLayout,
            ]}
          >
            <Text
              style={[
                styles.contactlessPaymentsSometimes,
                styles.paymentsPosition,
              ]}
            >
              <Text style={styles.spendingLimit}>
                <Text
                  style={[styles.spendingLimit1, styles.spendingLimit1Typo]}
                >
                  Contactless payments
                </Text>
              </Text>
              <Text style={styles.spendingLimit}>
                <Text
                  style={[
                    styles.setMonthlySpending,
                    styles.setMonthlySpendingTypo,
                  ]}
                >{`\nSometimes cards can be cloned. Switch `}</Text>
              </Text>
              <Text style={styles.spendingLimit}>
                <Text
                  style={[
                    styles.setMonthlySpending,
                    styles.setMonthlySpendingTypo,
                  ]}
                >
                  {"\n"}off the magnetic stripe for extra security
                </Text>
                .
              </Text>
            </Text>
            <Image
              style={[styles.swipeCardIcon, styles.iconPosition]}
              resizeMode="cover"
              source={require("../assets/contactlesspayment-1@3x.png")}
            />
          </View>
          <View style={[styles.rectangleParent1, styles.rectangleParentLayout]}>
            <View style={styles.groupChild1} />
            <Image
              style={styles.ellipseIcon}
              resizeMode="cover"
              source={require("../assets/ellipse-350@3x.png")}
            />
          </View>
          <View style={[styles.rectangleParent2, styles.rectangleParentLayout]}>
            <View style={styles.groupChild1} />
            <Image
              style={styles.ellipseIcon}
              resizeMode="cover"
              source={require("../assets/ellipse-350@3x.png")}
            />
          </View>
          <View style={[styles.rectangleParent3, styles.rectangleParentLayout]}>
            <View style={styles.groupChild1} />
            <Image
              style={styles.ellipseIcon}
              resizeMode="cover"
              source={require("../assets/ellipse-350@3x.png")}
            />
          </View>
          <View style={[styles.rectangleParent4, styles.rectangleParentLayout]}>
            <View style={styles.groupChild1} />
            <Image
              style={styles.ellipseIcon}
              resizeMode="cover"
              source={require("../assets/ellipse-350@3x.png")}
            />
          </View>
        </View>
      </View>
    </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  parentPosition: {
    height: 27,
    right: 22,
    top: "50%",
    position: "absolute",
  },
  cardLayout: {
    lineHeight: 14,
    width: 257,
  },
  replaceCardLostStolenNotPosition: {
    marginTop: -13.5,
    lineHeight: 14,
    top: "50%",
    textAlign: "left",
    position: "absolute",
  },
  spendingLimit1Typo: {
    color: GlobalStyles.Color.gray_1400,
    fontSize: GlobalStyles.FontSize.size_base,
    fontWeight: "700",
  },
  setMonthlySpendingTypo: {
    fontSize: GlobalStyles.FontSize.size_3xs,
    color: GlobalStyles.Color.gray_800,
  },
  iconPosition: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  groupInnerPosition: {
    height: 119,
    right: 0,
    position: "absolute",
  },
  groupInnerLayout: {
    borderRadius: GlobalStyles.Border.br_5xl,
    backgroundColor: GlobalStyles.Color.white,
    left: 0,
  },
  terminateCardPosition: {
    left: 24,
    top: "50%",
    position: "absolute",
  },
  viewPosition: {
    height: 341,
    right: 0,
    top: "50%",
    position: "absolute",
  },
  transactionsPosition: {
    left: 28,
    // fontFamily: GlobalStyles.FontFamily.helvetica,
    textAlign: "left",
    position: "absolute",
  },
  paymentsParentLayout: {
    height: 41,
    position: "absolute",
  },
  paymentsPosition: {
    marginTop: -20.5,
    lineHeight: 14,
    top: "50%",
    textAlign: "left",
    position: "absolute",
  },
  rectangleParentLayout: {
    height: 26,
    width: 46,
    right: 22,
    position: "absolute",
  },
  hello: {
    fontSize: GlobalStyles.FontSize.size_8xl,
    // fontFamily: GlobalStyles.FontFamily.typoGrotesk,
    color: GlobalStyles.Color.indigo_100,
    textAlign: "left",
    fontWeight: "700",
    top: 0,
    left: 3,
    position: "absolute",
  },
  hello1: {
    top: 118,
    fontSize: GlobalStyles.FontSize.size_xs,
    color: GlobalStyles.Color.gray_800,
    // fontFamily: GlobalStyles.FontFamily.helvetica,
    textAlign: "left",
    fontWeight: "700",
    left: 3,
    position: "absolute",
  },
  groupChild: {
    marginTop: -31.5,
    borderRadius: GlobalStyles.Border.br_2xl,
    backgroundColor: GlobalStyles.Color.white,
    right: 0,
    top: "50%",
    height: 63,
    left: 0,
    position: "absolute",
  },
  spendingLimit1: {
    // fontFamily: GlobalStyles.FontFamily.helvetica,
  },
  spendingLimit: {
    margin: GlobalStyles.Margin.margin_8xs,
  },
  setMonthlySpending: {
    // fontFamily: GlobalStyles.FontFamily.helvetica,
  },
  spendingLimitSetMonthlySpe: {
    width: 257,
    left: 27,
  },
  meter1Icon: {
    width: 17,
    height: 17,
  },
  spendingLimitSetMonthlySpeParent: {
    marginTop: -11.5,
    left: 21,
  },
  rectangleParent: {
    right: 3,
    height: 63,
    left: 0,
    top: 36,
    position: "absolute",
  },
  rectangleGroup: {
    bottom: 0,
    right: 0,
    height: 63,
    left: 3,
    position: "absolute",
  },
  groupInner: {
    marginTop: -59.5,
    top: "50%",
  },
  replaceCardLostStolenNot: {
    left: 23,
    width: 257,
  },
  resetIcon: {
    width: 13,
    height: 14,
  },
  replaceCardLostStolenNotParent: {
    marginTop: -38.5,
    left: 25,
  },
  terminateCardTheCardWillB: {
    marginTop: -12.58,
    width: 257,
    textAlign: "left",
  },
  terminateCardTheCardWillBParent: {
    marginTop: 12.65,
    height: 29,
    right: 22,
  },
  rectangleContainer: {
    bottom: 75,
    left: 3,
  },
  rectangleView: {
    marginTop: -170.5,
  },
  onlineTransactions: {
    top: 1,
    width: 257,
  },
  internetBasedTransactionsAr: {
    lineHeight: 12,
    width: 192,
    bottom: 0,
  },
  globeIcon: {
    width: 18,
    height: 18,
  },
  onlineTransactionsParent: {
    top: 19,
    left: 20,
    height: 65,
    right: 22,
    position: "absolute",
  },
  swipePaymentsSometimesCards: {
    width: 183,
    left: 25,
  },
  swipeCardIcon: {
    width: 15,
    height: 15,
  },
  swipePaymentsSometimesCardsParent: {
    marginTop: -51.5,
    width: 207,
    left: 23,
    top: "50%",
  },
  atmWithdrawalsSometimesCard: {
    width: 182,
    left: 27,
  },
  atmIcon: {
    width: 16,
    height: 16,
  },
  atmWithdrawalsSometimesCardParent: {
    marginTop: 23.5,
    width: 208,
    left: 21,
    top: "50%",
  },
  contactlessPaymentsSometimes: {
    left: 25,
    width: 257,
  },
  contactlessPaymentsSometimesParent: {
    bottom: 31,
    left: 23,
    right: 22,
  },
  groupChild1: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: GlobalStyles.Border.br_sm,
    backgroundColor: GlobalStyles.Color.gray_600,
    position: "absolute",
    width: "100%",
  },
  ellipseIcon: {
    height: "76.92%",
    width: "43.48%",
    top: "11.54%",
    right: "50%",
    bottom: "11.54%",
    left: "6.52%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    position: "absolute",
  },
  rectangleParent1: {
    top: 36,
    height: 26,
    width: 46,
  },
  rectangleParent2: {
    marginTop: -48.5,
    top: "50%",
  },
  rectangleParent3: {
    marginTop: 26.5,
    top: "50%",
  },
  rectangleParent4: {
    bottom: 43,
  },
  groupView: {
    marginTop: -202.5,
    left: 3,
  },
  helloParent: {
    width: 329,
    height: 689,
  },
  arrowPosition: {
    top: "6%",
    position: "absolute",
  },
  arrowCircle: {
    marginTop: -10.11,
    marginRight: 303.54,
    width: 15,
    height: 15,
  },
  cardSettings: {
    backgroundColor: GlobalStyles.Color.gray_100,
    flex: 1,
    paddingLeft: GlobalStyles.Padding.padding_7xs,
    paddingTop: GlobalStyles.Padding.padding_xs,
    paddingRight: 21,
    width: "100%",
  },
});

export default CardSettings;
