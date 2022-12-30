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
      <View style={[styles.statusBarBlack, styles.mt_1050]}>
        <View style={[styles.rectangle, styles.rectanglePosition]} />
        <View style={styles.statusBar}>
          <View style={styles.time}>
            <Text style={styles.text}>9:41</Text>
          </View>
          <Image
            style={styles.batteryIcon}
            resizeMode="cover"
            source={require("../assets/icon-awesomebatterythreequarters.png")}
          />
          <Image
            style={[styles.wifiIcon, styles.networkPosition]}
            resizeMode="cover"
            source={require("../assets/icon-awesomewifi.png")}
          />
          <View style={[styles.network, styles.networkPosition]}>
            <View style={[styles.networkChild, styles.networkLayout]} />
            <View style={[styles.networkItem, styles.networkLayout]} />
            <View style={[styles.networkInner, styles.networkLayout]} />
            <View style={[styles.rectangleView, styles.networkLayout]} />
          </View>
        </View>
      </View>
      <Pressable
        style={[styles.rectangleParent, styles.mt9, styles.ml25]}
        onPress={() => navigation.navigate("SpendingLimit")}
      >
        <View style={[styles.groupChild, styles.rectanglePosition]} />
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
            style={[styles.meter1Icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/meter-1.png")}
          />
        </View>
      </Pressable>
      <View style={[styles.rectangleParent, styles.mt12, styles.ml28]}>
        <Pressable
          style={[styles.groupChild, styles.rectanglePosition]}
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
            style={[styles.meter1Icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/meter-1.png")}
          />
        </View>
      </View>
      <View style={[styles.rectangleContainer, styles.mt12, styles.ml28]}>
        <View style={[styles.groupInner, styles.groupPosition]} />
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
            style={styles.resetIcon}
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
            style={[styles.meter1Icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/delete-6.png")}
          />
        </Pressable>
      </View>
      <View style={[styles.groupView, styles.mt12, styles.ml28]}>
        <View style={[styles.groupChild1, styles.groupPosition]} />
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
            style={styles.globeIcon}
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
            style={styles.swipeCardIcon}
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
            style={styles.atmIcon}
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
            style={styles.swipeCardIcon}
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
              styles.component2243Child,
              styles.childBg,
              styles.component2241Layout,
            ]}
          />
          <Image
            style={styles.component2243Item}
            resizeMode="cover"
            source={require("../assets/ellipse-350.png")}
          />
        </View>
        <View style={[styles.component2244, styles.componentPosition]}>
          <View
            style={[
              styles.component2243Child,
              styles.childBg,
              styles.component2241Layout,
            ]}
          />
          <Image
            style={styles.component2243Item}
            resizeMode="cover"
            source={require("../assets/ellipse-350.png")}
          />
        </View>
        <View style={[styles.component2245, styles.componentPosition]}>
          <View
            style={[
              styles.component2243Child,
              styles.childBg,
              styles.component2241Layout,
            ]}
          />
          <Image
            style={styles.component2243Item}
            resizeMode="cover"
            source={require("../assets/ellipse-350.png")}
          />
        </View>
      </View>
      <Pressable
        style={[styles.iconFeatherArrowLeftWrapper, styles.mt2]}
        onPress={() => navigation.navigate("MyCards")}
      >
        <Image
          style={[styles.iconFeatherArrowLeft, styles.iconLayout]}
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
    marginTop: GlobalStyles.Margin.margin_26xs,
  },
  ml28: {
    marginLeft: GlobalStyles.Margin.margin_3xs,
  },
  mt17: {
    marginTop: GlobalStyles.Margin.margin_16xs,
  },
  mt_1050: {
    marginTop: -1050,
  },
  mt9: {
    marginTop: GlobalStyles.Margin.margin_25xs,
  },
  ml25: {
    marginLeft: GlobalStyles.Margin.margin_7xs,
  },
  mt12: {
    marginTop: GlobalStyles.Margin.margin_22xs,
  },
  mt2: {
    marginTop: GlobalStyles.Margin.margin_31xs,
  },
  mt4: {
    marginTop: GlobalStyles.Margin.margin_29xs,
  },
  ml121: {
    marginLeft: GlobalStyles.Margin.margin_54xl,
  },
  rectanglePosition: {
    backgroundColor: GlobalStyles.Color.white,
    left: 0,
    right: 0,
    position: "absolute",
  },
  networkPosition: {
    width: 17,
    marginTop: -3,
    top: "50%",
    position: "absolute",
  },
  networkLayout: {
    width: 3,
    backgroundColor: GlobalStyles.Color.gray_1400,
    borderRadius: GlobalStyles.Border.br_7xs,
    bottom: 0,
    position: "absolute",
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
    color: GlobalStyles.Color.gray_1400,
    fontSize: GlobalStyles.FontSize.size_base,
    fontWeight: "700",
  },
  setMonthlySpendingTypo: {
    fontSize: GlobalStyles.FontSize.size_3xs,
    color: GlobalStyles.Color.gray_900,
  },
  iconLayout: {
    height: 17,
    width: 17,
    position: "absolute",
  },
  groupPosition: {
    borderRadius: GlobalStyles.Border.br_5xl,
    top: "50%",
    backgroundColor: GlobalStyles.Color.white,
    left: 0,
    right: 0,
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
    width: 46,
    height: 26,
  },
  childBg: {
    backgroundColor: GlobalStyles.Color.gray_700,
    borderRadius: GlobalStyles.Border.br_sm,
    position: "absolute",
  },
  componentPosition: {
    left: "79.14%",
    right: "6.75%",
    width: "14.11%",
    height: "7.62%",
    position: "absolute",
  },
  cardSettingsChild: {
    height: 1065,
    width: 375,
    backgroundColor: GlobalStyles.Color.gray_300,
  },
  hello: {
    fontSize: GlobalStyles.FontSize.size_8xl,
    fontFamily: GlobalStyles.FontFamily.typoGrotesk,
    color: GlobalStyles.Color.indigo,
    textAlign: "left",
    fontWeight: "700",
  },
  hello1: {
    fontSize: GlobalStyles.FontSize.size_xs,
    color: GlobalStyles.Color.gray_900,
    fontFamily: GlobalStyles.FontFamily.helvetica,
    textAlign: "left",
    fontWeight: "700",
  },
  rectangle: {
    shadowColor: "rgba(0, 0, 0, 0.05)",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 6,
    elevation: 6,
    shadowOpacity: 1,
    bottom: 0,
    top: 0,
  },
  text: {
    fontSize: GlobalStyles.FontSize.size_4xl,
    letterSpacing: 0,
    lineHeight: 24,
    fontWeight: "500",
    fontFamily: GlobalStyles.FontFamily.roboto,
    color: GlobalStyles.Color.gray_1900,
    left: 0,
    top: 0,
    position: "absolute",
    textAlign: "left",
  },
  time: {
    width: 40,
    left: 0,
    bottom: 0,
    top: 0,
    position: "absolute",
  },
  batteryIcon: {
    width: 22,
    height: 11,
    marginTop: -3,
    top: "50%",
    right: 0,
    position: "absolute",
  },
  wifiIcon: {
    right: 37,
    height: 12,
  },
  networkChild: {
    height: 4,
    left: 0,
  },
  networkItem: {
    marginLeft: -3.5,
    height: 6,
    left: "50%",
  },
  networkInner: {
    marginLeft: 0.5,
    height: 9,
    left: "50%",
  },
  rectangleView: {
    right: 0,
    backgroundColor: GlobalStyles.Color.gray_1400,
    borderRadius: GlobalStyles.Border.br_7xs,
    top: 0,
  },
  network: {
    right: 68,
    height: 11,
  },
  statusBar: {
    marginTop: -15,
    right: 16,
    left: 15,
    height: 26,
    top: "50%",
    position: "absolute",
  },
  statusBarBlack: {
    height: 44,
    width: 375,
  },
  groupChild: {
    marginTop: -31.5,
    borderRadius: GlobalStyles.Border.br_2xl,
    height: 63,
    top: "50%",
  },
  spendingLimit1: {
    fontFamily: GlobalStyles.FontFamily.helvetica,
  },
  spendingLimit: {
    margin: GlobalStyles.Margin.margin_33xs,
  },
  setMonthlySpending: {
    fontFamily: GlobalStyles.FontFamily.helvetica,
  },
  spendingLimitSetMonthlySpe: {
    width: 257,
    left: 27,
  },
  meter1Icon: {
    left: 0,
    top: 0,
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
    left: 0,
    top: 0,
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
  groupChild1: {
    marginTop: -170.5,
    height: 341,
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
    left: 0,
    top: 0,
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
    left: 0,
    top: 0,
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
    left: 0,
    top: 0,
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
  component2243Child: {
    left: 0,
    top: 0,
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
  homeIndicator: {
    borderRadius: GlobalStyles.Border.br_8xl,
    backgroundColor: GlobalStyles.Color.black,
    width: 134,
    height: 5,
  },
  cardSettings: {
    backgroundColor: GlobalStyles.Color.gray_1100,
    flex: 1,
    width: "100%",
  },
});

export default CardSettings;
