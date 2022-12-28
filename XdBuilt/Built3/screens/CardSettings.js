import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import GlobalStyles from "../GlobalStyles";

const CardSettings = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.cardSettings}>
      <View style={styles.cardSettingsChild} />
      <Text style={[styles.hello, styles.mt8, styles.ml28]}>Settings</Text>
      <Text style={[styles.hello1, styles.mt17, styles.ml28]}>Security</Text>
      <Pressable
        style={[styles.rectangleParent, styles.mt9, styles.ml25]}
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
              <Text style={[styles.spendingLimit1, styles.spendingLimit1Typo]}>
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
                Set monthly spending amount
              </Text>
            </Text>
          </Text>
          <Image
            style={[styles.iconLayout, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/meter-1.png")}
          />
        </View>
      </Pressable>
      <View style={[styles.rectangleParent, styles.mt12, styles.ml28]}>
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
              <Text style={[styles.spendingLimit1, styles.spendingLimit1Typo]}>
                Upgrade Card
              </Text>
            </Text>
            <Text style={styles.spendingLimit}>
              <Text
                style={[
                  styles.setMonthlySpending,
                  styles.setMonthlySpendingTypo,
                ]}
              >{`Upgrade my card plan `}</Text>
            </Text>
            <Text
              style={[styles.setMonthlySpending, styles.setMonthlySpendingTypo]}
            />
          </Text>
          <Image
            style={styles.iconPosition}
            resizeMode="cover"
            source={require("../assets/meter-1.png")}
          />
        </View>
      </View>
      <View style={[styles.rectangleContainer, styles.mt12, styles.ml28]}>
        <View style={[styles.groupInner, styles.groupInnerPosition]} />
        <Pressable
          style={[styles.replaceCardLostStolenNotParent, styles.parentPosition]}
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
              <Text style={[styles.spendingLimit1, styles.spendingLimit1Typo]}>
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
                Lost, stolen, not delivered
              </Text>
            </Text>
            <Text
              style={[styles.setMonthlySpending, styles.setMonthlySpendingTypo]}
            />
          </Text>
          <Image
            style={[styles.resetIcon, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/reset.png")}
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
              <Text style={[styles.spendingLimit1, styles.spendingLimit1Typo]}>
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
                The card will be permanently terminated
              </Text>
            </Text>
          </Text>
          <Image
            style={styles.iconPosition}
            resizeMode="cover"
            source={require("../assets/delete-6.png")}
          />
        </Pressable>
      </View>
      <View style={[styles.groupView, styles.mt12, styles.ml28]}>
        <View style={[styles.rectangleView, styles.groupInnerPosition]} />
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
              Internet based transactions are generally
            </Text>
            <Text style={styles.spendingLimit}>
              high-risk. You can switch them off for extra
            </Text>
            <Text style={styles.spendingLimit}>
              security. Payments you make using mobile
            </Text>
            <Text style={styles.spendingLimit}>
              wallets like Apple Pay won’t be affected.
            </Text>
          </Text>
          <Image
            style={[styles.globeIcon, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/globe.png")}
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
              <Text style={[styles.spendingLimit1, styles.spendingLimit1Typo]}>
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
                Sometimes cards can be cloned. Switch off the magnetic stripe
                for extra security.
              </Text>
            </Text>
          </Text>
          <Image
            style={[styles.swipeCardIcon, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/swipecard.png")}
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
              <Text style={[styles.spendingLimit1, styles.spendingLimit1Typo]}>
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
                Sometimes cards can be cloned. Switch off the magnetic stripe
                for extra security.
              </Text>
            </Text>
          </Text>
          <Image
            style={[styles.atmIcon, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/atm.png")}
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
              <Text style={[styles.spendingLimit1, styles.spendingLimit1Typo]}>
                Contactless payments
              </Text>
            </Text>
            <Text style={styles.spendingLimit}>
              <Text
                style={[
                  styles.setMonthlySpending,
                  styles.setMonthlySpendingTypo,
                ]}
              >{`Sometimes cards can be cloned. Switch `}</Text>
            </Text>
            <Text style={styles.spendingLimit}>
              <Text
                style={[
                  styles.setMonthlySpending,
                  styles.setMonthlySpendingTypo,
                ]}
              >
                off the magnetic stripe for extra security
              </Text>
              .
            </Text>
          </Text>
          <Image
            style={[styles.swipeCardIcon, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/contactlesspayment-1.png")}
          />
        </View>
        <View style={[styles.component2241, styles.component2241Layout]}>
          <View style={[styles.component2241Child, styles.childBg]} />
          <Image
            style={styles.component2241Item}
            resizeMode="cover"
            source={require("../assets/ellipse-350.png")}
          />
        </View>
        <View style={[styles.component2243, styles.componentPosition]}>
          <View
            style={[
              styles.childBg,
              styles.component2241Layout,
              styles.iconPosition,
            ]}
          />
          <Image
            style={styles.component2243Item}
            resizeMode="cover"
            source={require("../assets/ellipse-350.png")}
          />
        </View>
        <View style={[styles.component2244, styles.componentPosition]}>
          <View style={[styles.component2241Layout, styles.iconPosition]} />
          <Image
            style={styles.component2243Item}
            resizeMode="cover"
            source={require("../assets/ellipse-350.png")}
          />
        </View>
        <View style={[styles.component2245, styles.componentPosition]}>
          <View style={styles.iconPosition} />
          <Image
            style={styles.component2243Item}
            resizeMode="cover"
            source={require("../assets/ellipse-350.png")}
          />
        </View>
      </View>
      <Pressable
        style={[styles.iconFeatherArrowLeftWrapper, styles.mt_1004]}
        onPress={() => navigation.navigate("MyCards")}
      >
        <Image
          style={[styles.iconFeatherArrowLeft, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/icon-featherarrowleft.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  mt8: {
    marginTop: GlobalStyles.Margin.margin_19xs,
  },
  ml28: {
    marginLeft: GlobalStyles.Margin.margin_6xl,
  },
  mt17: {
    marginTop: GlobalStyles.Margin.margin_4xs,
  },
  mt9: {
    marginTop: GlobalStyles.Margin.margin_17xs,
  },
  ml25: {
    marginLeft: GlobalStyles.Margin.margin_3xl,
  },
  mt12: {
    marginTop: GlobalStyles.Margin.margin_13xs,
  },
  mt_1004: {
    marginTop: -1004,
  },
  parentPosition: {
    height: 29,
    right: 22,
    top: "50%",
    position: "absolute",
  },
  cardLayout: {
    lineHeight: 14,
    width: 257,
  },
  replaceCardLostStolenNotPosition: {
    marginTop: -14.5,
    lineHeight: 14,
    top: "50%",
    position: "absolute",
    textAlign: "left",
  },
  spendingLimit1Typo: {
    color: GlobalStyles.Color.gray_1300,
    fontSize: GlobalStyles.FontSize.size_sm,
    fontWeight: "700",
  },
  setMonthlySpendingTypo: {
    fontSize: GlobalStyles.FontSize.size_4xs,
    color: GlobalStyles.Color.gray_900,
  },
  iconPosition: {
    top: 0,
    left: 0,
  },
  groupInnerPosition: {
    borderRadius: GlobalStyles.Border.br_4xl,
    backgroundColor: GlobalStyles.Color.white,
    left: 0,
    right: 0,
    top: "50%",
    position: "absolute",
  },
  terminateCardPosition: {
    left: 24,
    position: "absolute",
  },
  transactionsPosition: {
    left: 28,
    position: "absolute",
    fontFamily: GlobalStyles.FontFamily.helvetica,
    textAlign: "left",
  },
  paymentsParentLayout: {
    height: 43,
    position: "absolute",
  },
  paymentsPosition: {
    marginTop: -21.5,
    lineHeight: 14,
    top: "50%",
    position: "absolute",
    textAlign: "left",
  },
  component2241Layout: {
    height: 26,
    width: 46,
  },
  childBg: {
    backgroundColor: GlobalStyles.Color.gray_700,
    borderRadius: GlobalStyles.Border.br_xs,
    position: "absolute",
  },
  componentPosition: {
    left: "79.14%",
    right: "6.75%",
    width: "14.11%",
    height: "7.62%",
    position: "absolute",
  },
  iconLayout: {
    height: 17,
    width: 17,
    position: "absolute",
  },
  cardSettingsChild: {
    width: 375,
    height: 1065,
    backgroundColor: GlobalStyles.Color.gray_300,
  },
  hello: {
    fontSize: GlobalStyles.FontSize.size_6xl,
    fontFamily: GlobalStyles.FontFamily.typoGrotesk,
    color: GlobalStyles.Color.indigo,
    textAlign: "left",
    fontWeight: "700",
  },
  hello1: {
    fontSize: GlobalStyles.FontSize.size_2xs,
    color: GlobalStyles.Color.gray_900,
    fontFamily: GlobalStyles.FontFamily.helvetica,
    textAlign: "left",
    fontWeight: "700",
  },
  groupChild: {
    marginTop: -31.5,
    borderRadius: GlobalStyles.Border.br_xl,
    backgroundColor: GlobalStyles.Color.white,
    left: 0,
    right: 0,
    top: "50%",
    position: "absolute",
    height: 63,
  },
  spendingLimit1: {
    fontFamily: GlobalStyles.FontFamily.helvetica,
  },
  spendingLimit: {
    margin: GlobalStyles.Margin.margin_25xs,
  },
  setMonthlySpending: {
    fontFamily: GlobalStyles.FontFamily.helvetica,
  },
  spendingLimitSetMonthlySpe: {
    width: 257,
    left: 27,
  },
  spendingLimitSetMonthlySpeParent: {
    marginTop: -11.5,
    left: 21,
  },
  rectangleParent: {
    height: 63,
    width: 326,
  },
  groupInner: {
    marginTop: -59.5,
    height: 119,
  },
  replaceCardLostStolenNot: {
    left: 23,
    width: 257,
  },
  resetIcon: {
    width: 13,
    height: 14,
    position: "absolute",
  },
  replaceCardLostStolenNotParent: {
    marginTop: -38.5,
    left: 25,
  },
  terminateCardTheCardWillB: {
    marginTop: -13.58,
    width: 257,
    top: "50%",
    textAlign: "left",
  },
  terminateCardTheCardWillBParent: {
    bottom: 16,
    height: 31,
    right: 22,
  },
  rectangleContainer: {
    height: 119,
    width: 326,
  },
  rectangleView: {
    marginTop: -170.5,
    height: 341,
  },
  onlineTransactions: {
    top: 1,
    width: 257,
  },
  internetBasedTransactionsAr: {
    bottom: 0,
    lineHeight: 12,
    width: 192,
  },
  globeIcon: {
    width: 18,
    height: 18,
    position: "absolute",
  },
  onlineTransactionsParent: {
    top: 19,
    left: 20,
    height: 66,
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
    position: "absolute",
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
    position: "absolute",
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
    bottom: 29,
    left: 23,
    right: 22,
  },
  component2241Child: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    width: "100%",
  },
  component2241Item: {
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
  component2241: {
    top: 36,
    right: 22,
    position: "absolute",
  },
  component2243Item: {
    top: 3,
    left: 3,
    width: 20,
    height: 20,
    position: "absolute",
  },
  component2243: {
    top: "35.78%",
    bottom: "56.6%",
  },
  component2244: {
    top: "57.77%",
    bottom: "34.6%",
  },
  component2245: {
    top: "79.77%",
    bottom: "12.61%",
  },
  groupView: {
    height: 341,
    width: 326,
  },
  iconFeatherArrowLeft: {
    marginLeft: -0.5,
    bottom: 4,
    left: "50%",
  },
  iconFeatherArrowLeftWrapper: {
    width: 55,
    height: 45,
    backgroundColor: GlobalStyles.Color.gray_300,
  },
  cardSettings: {
    backgroundColor: GlobalStyles.Color.gray_1100,
    flex: 1,
    width: "100%",
  },
});

export default CardSettings;
