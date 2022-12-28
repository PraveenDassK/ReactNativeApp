import * as React from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  Image,
  Pressable,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import GlobalStyles from "../GlobalStyles";

const Plan = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.plan}>
      <View style={styles.planChild} />
      <ScrollView
        style={[styles.scrollGroup30, styles.mt13]}
        contentContainerStyle={styles.scrollGroup30Content}
      >
        <View style={styles.component2376}>
          <Text style={[styles.hello, styles.helloTypo]}>ESSENTIAL</Text>
          <Text style={[styles.hello1, styles.helloPosition]}>£2</Text>
          <Text style={[styles.hello2, styles.helloPosition]}>£10</Text>
          <Text style={[styles.hello3, styles.helloPosition]}>£25</Text>
          <Text style={[styles.hello4, styles.helloTypo]}>ADVANCE</Text>
          <Text style={[styles.hello5, styles.helloTypo]}>ELITE</Text>
          <View style={[styles.rectangleParent, styles.groupChildLayout]}>
            <View
              style={[
                styles.groupChild,
                styles.groupShadowBox,
                styles.groupChildLayout,
              ]}
            />
            <Text
              style={[
                styles.accountFeaturesMobileSet,
                styles.paymentsLayout,
                styles.allTypo,
                styles.payPosition,
              ]}
            >
              <Text style={styles.accountFeatures}>
                <Text style={styles.accountFeatures1}>Account Features:</Text>
              </Text>
              <Text style={styles.accountFeatures}>
                <Text style={styles.mobileSetUp}>
                  • Mobile Set Up and Switching
                </Text>
              </Text>
              <Text style={styles.accountFeatures}>
                <Text style={styles.mobileSetUp}>
                  • FSCS Protected Bank Accounts
                </Text>
              </Text>
              <Text style={styles.accountFeatures}>
                <Text style={styles.mobileSetUp}>{`• `}</Text>(IBAN/Sort Code)
              </Text>
              <Text style={styles.accountFeatures}>• User Control</Text>
              <Text
                style={styles.accountFeatures}
              >{`• Ability to add additional accounts with `}</Text>
              <Text style={styles.accountFeatures}> same phone number</Text>
              <Text style={styles.accountFeatures}>• Advanced Security</Text>
            </Text>
            <Text
              style={[
                styles.cardsDebitAndVirtualCar,
                styles.perksCardPosition,
                styles.paymentsLayout,
              ]}
            >
              <Text style={styles.accountFeatures}>
                <Text style={styles.accountFeatures1}>Cards:</Text>
              </Text>
              <Text style={styles.accountFeatures}>
                <Text style={styles.mobileSetUp}>• Debit and Virtual Card</Text>
              </Text>
              <Text style={styles.accountFeatures}>
                <Text
                  style={styles.mobileSetUp}
                >{`• Added expense cards with spending   `}</Text>
              </Text>
              <Text style={styles.accountFeatures}>
                <Text style={styles.mobileSetUp}> limits: £5 per card</Text>
              </Text>
              <Text style={styles.mobileSetUp} />
            </Text>
            <Text
              style={[
                styles.appSecurityPasswordProte,
                styles.paymentsLayout,
                styles.allTypo,
                styles.payPosition,
              ]}
            >
              <Text style={styles.accountFeatures}>
                <Text style={styles.accountFeatures1}>App Security:</Text>
              </Text>
              <Text style={styles.accountFeatures}>
                <Text style={styles.mobileSetUp}>• Password Protection</Text>
              </Text>
              <Text style={styles.accountFeatures}>
                <Text style={styles.mobileSetUp}>• Face ID</Text>
              </Text>
              <Text style={styles.accountFeatures}>
                <Text style={styles.mobileSetUp}>• Finger Print</Text>
              </Text>
              <Text style={styles.accountFeatures}>
                <Text style={styles.mobileSetUp}>
                  • Freeze/Unfreeze From Ap
                </Text>
                p
              </Text>
              <Text style={styles.accountFeatures}>
                • Turn Off ATM Withdrawals/Online/
              </Text>
              <Text
                style={styles.accountFeatures}
              >{`  Contactless Payments `}</Text>
            </Text>
            <Text
              style={[
                styles.paymentsTransferInout0,
                styles.paymentsLayout,
                styles.allTypo,
                styles.payPosition,
              ]}
            >
              <Text style={styles.accountFeatures}>
                <Text style={styles.accountFeatures1}>Payments:</Text>
              </Text>
              <Text style={styles.accountFeatures}>
                <Text style={styles.mobileSetUp}>
                  • Transfer in/out: 0.15£/transaction
                </Text>
              </Text>
              <Text style={styles.accountFeatures}>
                <Text
                  style={styles.mobileSetUp}
                >{`• Chaps/BACS /SEPA Payments `}</Text>
              </Text>
              <Text style={styles.accountFeatures}>
                <Text style={styles.mobileSetUp}>
                  {" "}
                  (may be a fee so factor in pricing)
                </Text>
              </Text>
              <Text style={styles.accountFeatures}>
                <Text style={styles.mobileSetUp}>• Scheduled Pay</Text>ments
              </Text>
              <Text style={styles.accountFeatures}>
                • Payment Notifications
              </Text>
            </Text>
            <Text
              style={[
                styles.accountingServicesBankFeed,
                styles.perksCardPosition,
              ]}
            >
              <Text style={styles.accountFeatures}>
                <Text style={styles.accountFeatures1}>
                  Accounting Services:
                </Text>
              </Text>
              <Text style={styles.accountFeatures}>
                <Text style={styles.mobileSetUp}>Bank Feed</Text>
              </Text>
              <Text style={styles.mobileSetUp} />
            </Text>
            <Text
              style={[
                styles.sageAndXeroIntegrationCo,
                styles.perksCardPosition,
              ]}
            >
              <Text style={styles.accountFeatures}>
                <Text
                  style={styles.accountFeatures1}
                >{`Sage and Xero integration `}</Text>
              </Text>
              <Text style={styles.accountFeatures}>
                <Text style={styles.mobileSetUp}>(Coming Soon)</Text>
              </Text>
            </Text>
            <Text
              style={[
                styles.customerServiceOnline,
                styles.allTypo,
                styles.payPosition,
              ]}
            >
              <Text style={styles.accountFeatures}>
                <Text style={styles.accountFeatures1}>Customer Service:</Text>
                <Text> Online</Text>
              </Text>
            </Text>
            <Text
              style={[
                styles.customerServiceOnline,
                styles.allTypo,
                styles.payPosition,
              ]}
            >
              <Text style={styles.accountFeatures}>
                <Text style={styles.accountFeatures1}>Customer Service:</Text>
                <Text> Online</Text>
              </Text>
            </Text>
            <Text
              style={[
                styles.carbonCalculator,
                styles.allTypo,
                styles.payPosition,
              ]}
            >
              <Text style={styles.accountFeatures}>
                <Text
                  style={styles.accountFeatures1}
                >{`Carbon Calculator `}</Text>
              </Text>
            </Text>
            <Text
              style={[styles.carbonOffset, styles.perksCardPosition]}
            >{`Carbon Offset `}</Text>
            <Text
              style={[
                styles.accessToGeniusMarketPlace,
                styles.perksCardPosition,
              ]}
            >
              Access to Genius Market Place
            </Text>
            <Text
              style={[
                styles.manageSubscriptions,
                styles.allTypo,
                styles.payPosition,
              ]}
            >
              Manage Subscriptions
            </Text>
            <Text
              style={[
                styles.setSpendingLimitsPerCardO,
                styles.perksCardPosition,
              ]}
            >
              Set Spending Limits per card or Wallet
            </Text>
            <Text
              style={[
                styles.realtimeOverviewOfAllSpend,
                styles.allTypo,
                styles.payPosition,
              ]}
            >
              Realtime overview of all spending
            </Text>
            <Text
              style={[styles.pdfAndCsvStatements, styles.perksCardPosition]}
            >
              PDF and CSV Statements
            </Text>
            <Text
              style={[
                styles.cardPaymentsForeignExFee,
                styles.perksCardPosition,
              ]}
            >
              Card Payments Foreign EX Fee: 2.48%
            </Text>
            <Text style={[styles.invoicePaymentsForeignExFe, styles.allTypo]}>
              Invoice Payments Foreign EX Fee: 2.40%
            </Text>
            <Text
              style={[
                styles.discountsAndPerksOnEnviro,
                styles.perksCardPosition,
              ]}
            >
              Discounts and Perks on Enviro Focuss Companies
            </Text>
            <Text
              style={[
                styles.internationalPayments15,
                styles.perksCardPosition,
                styles.paymentsLayout,
              ]}
            >
              <Text style={styles.accountFeatures}>
                <Text
                  style={styles.accountFeatures1}
                >{`International Payments:  `}</Text>
              </Text>
              <Text style={styles.accountFeatures}>
                <Text style={styles.mobileSetUp}>£15/transacti</Text>on
              </Text>
            </Text>
            <Text
              style={[styles.forexWalletGbpEurousd, styles.perksCardPosition]}
            >
              <Text style={styles.accountFeatures}>
                Forex Wallet (GBP/ EURO/USD)
              </Text>
            </Text>
            <Text
              style={[
                styles.transactionFee1ForConver,
                styles.allTypo,
                styles.payPosition,
              ]}
            >
              Transaction Fee (1% for conversion)
            </Text>
            <Text
              style={[
                styles.applePayAndGooglePayCom,
                styles.allTypo,
                styles.payPosition,
              ]}
            >
              <Text style={styles.accountFeatures}>
                <Text
                  style={styles.accountFeatures1}
                >{`Apple Pay and Google Pay `}</Text>
              </Text>
              <Text style={styles.accountFeatures}>
                <Text style={styles.mobileSetUp}>(Coming Soon)</Text>
              </Text>
            </Text>
            <Text style={[styles.memberPerks, styles.perksCardPosition]}>
              <Text style={styles.accountFeatures}>Member Perks</Text>
            </Text>
            <Text style={[styles.geniusMarketPlace, styles.perksCardPosition]}>
              <Text style={styles.accountFeatures}>Genius Market Place</Text>
            </Text>
            <Image
              style={[
                styles.iconAwesomeCheckCircle,
                styles.iconLayout,
                styles.iconLayout1,
              ]}
              resizeMode="cover"
              source={require("../assets/icon-awesomecheckcircle4.png")}
            />
            <Image
              style={[
                styles.iconAwesomeCheckCircle1,
                styles.iconLayout,
                styles.iconLayout1,
              ]}
              resizeMode="cover"
              source={require("../assets/icon-awesomecheckcircle4.png")}
            />
            <Image
              style={[
                styles.iconAwesomeCheckCircle2,
                styles.iconLayout,
                styles.iconLayout1,
              ]}
              resizeMode="cover"
              source={require("../assets/icon-awesomecheckcircle4.png")}
            />
            <Image
              style={[
                styles.iconAwesomeCheckCircle3,
                styles.iconLayout,
                styles.iconLayout1,
              ]}
              resizeMode="cover"
              source={require("../assets/icon-awesomecheckcircle4.png")}
            />
            <Image
              style={[
                styles.iconAwesomeCheckCircle4,
                styles.iconLayout,
                styles.iconLayout1,
              ]}
              resizeMode="cover"
              source={require("../assets/icon-awesomecheckcircle4.png")}
            />
            <Image
              style={[
                styles.iconAwesomeCheckCircle5,
                styles.iconLayout,
                styles.iconLayout1,
              ]}
              resizeMode="cover"
              source={require("../assets/icon-awesomecheckcircle4.png")}
            />
            <Image
              style={[
                styles.iconAwesomeCheckCircle6,
                styles.iconLayout,
                styles.iconLayout1,
              ]}
              resizeMode="cover"
              source={require("../assets/icon-awesomecheckcircle4.png")}
            />
            <Image
              style={[
                styles.iconAwesomeCheckCircle7,
                styles.iconLayout,
                styles.iconLayout1,
              ]}
              resizeMode="cover"
              source={require("../assets/icon-awesomecheckcircle4.png")}
            />
            <Image
              style={[
                styles.iconAwesomeCheckCircle8,
                styles.iconLayout,
                styles.iconLayout1,
              ]}
              resizeMode="cover"
              source={require("../assets/icon-awesomecheckcircle4.png")}
            />
            <Image
              style={[
                styles.iconAwesomeCheckCircle9,
                styles.iconLayout,
                styles.iconLayout1,
              ]}
              resizeMode="cover"
              source={require("../assets/icon-awesomecheckcircle4.png")}
            />
            <Image
              style={[
                styles.iconAwesomeCheckCircle10,
                styles.iconLayout,
                styles.iconLayout1,
              ]}
              resizeMode="cover"
              source={require("../assets/icon-awesomecheckcircle4.png")}
            />
            <Image
              style={[
                styles.iconAwesomeCheckCircle11,
                styles.iconLayout,
                styles.iconLayout1,
              ]}
              resizeMode="cover"
              source={require("../assets/icon-awesomecheckcircle4.png")}
            />
            <Image
              style={[
                styles.iconAwesomeCheckCircle12,
                styles.iconLayout,
                styles.iconLayout1,
              ]}
              resizeMode="cover"
              source={require("../assets/icon-awesomecheckcircle4.png")}
            />
            <Image
              style={[
                styles.iconAwesomeCheckCircle13,
                styles.iconLayout,
                styles.iconLayout1,
              ]}
              resizeMode="cover"
              source={require("../assets/icon-awesomecheckcircle4.png")}
            />
            <Image
              style={[
                styles.iconAwesomeCheckCircle14,
                styles.iconLayout,
                styles.iconLayout1,
              ]}
              resizeMode="cover"
              source={require("../assets/icon-awesomecheckcircle4.png")}
            />
            <Image
              style={[
                styles.iconAwesomeCheckCircle15,
                styles.iconLayout,
                styles.iconLayout1,
              ]}
              resizeMode="cover"
              source={require("../assets/icon-awesomecheckcircle4.png")}
            />
            <Image
              style={[
                styles.iconAwesomeCheckCircle16,
                styles.iconLayout,
                styles.iconLayout1,
              ]}
              resizeMode="cover"
              source={require("../assets/icon-awesomecheckcircle4.png")}
            />
            <Image
              style={[
                styles.iconAwesomeCheckCircle17,
                styles.iconLayout,
                styles.iconLayout1,
              ]}
              resizeMode="cover"
              source={require("../assets/icon-awesomecheckcircle4.png")}
            />
            <Image
              style={[
                styles.iconAwesomeCheckCircle18,
                styles.iconLayout,
                styles.iconLayout1,
              ]}
              resizeMode="cover"
              source={require("../assets/icon-awesomecheckcircle4.png")}
            />
            <Image
              style={[
                styles.iconAwesomeCheckCircle19,
                styles.iconLayout,
                styles.iconLayout1,
              ]}
              resizeMode="cover"
              source={require("../assets/icon-awesomecheckcircle4.png")}
            />
            <Image
              style={[
                styles.iconAwesomeCheckCircle20,
                styles.iconLayout,
                styles.iconLayout1,
              ]}
              resizeMode="cover"
              source={require("../assets/icon-awesomecheckcircle4.png")}
            />
            <Image
              style={[
                styles.iconAwesomeCheckCircle21,
                styles.iconLayout,
                styles.iconLayout1,
              ]}
              resizeMode="cover"
              source={require("../assets/icon-awesomecheckcircle4.png")}
            />
          </View>
          <View
            style={[
              styles.rectangleGroup,
              styles.groupPosition1,
              styles.rectangleLayout,
            ]}
          >
            <View
              style={[
                styles.groupItem,
                styles.groupPosition1,
                styles.groupShadowBox,
              ]}
            />
            <View
              style={[
                styles.allEssentialFeaturesWrapper,
                styles.wrapperPosition1,
              ]}
            >
              <Text
                style={[
                  styles.allEssentialFeatures,
                  styles.allEssentialFeaturesPosition,
                ]}
              >
                All Essential Features
              </Text>
            </View>
            <View
              style={[
                styles.paymentsDomesticTransferWrapper,
                styles.wrapperPosition1,
              ]}
            >
              <Text
                style={[styles.paymentsDomesticTransfer, styles.cardsPosition]}
              >
                <Text style={styles.accountFeatures}>
                  <Text style={styles.accountFeatures1}>
                    Payments (domestic):
                  </Text>
                </Text>
                <Text style={styles.accountFeatures}>
                  <Text style={styles.mobileSetUp}>
                    Transfer in/out: No Fee Upto 20 Transactions
                  </Text>
                </Text>
                <Text style={styles.mobileSetUp} />
              </Text>
            </View>
            <View
              style={[
                styles.cardsAddedExpenseCardsWitWrapper,
                styles.wrapperPosition,
              ]}
            >
              <Text
                style={[styles.cardsAddedExpenseCardsWit, styles.cardsPosition]}
              >
                <Text style={styles.accountFeatures}>
                  <Text style={styles.accountFeatures1}>Cards:</Text>
                </Text>
                <Text style={styles.accountFeatures}>
                  <Text style={styles.mobileSetUp}>
                    Added expense cards with spending limits:
                  </Text>
                </Text>
                <Text style={styles.accountFeatures}>
                  <Text style={styles.mobileSetUp}>{`1 `}</Text>Free Expense
                  Card
                </Text>
              </Text>
            </View>
            <View
              style={[
                styles.accountingServicesInvoicesWrapper,
                styles.wrapperPosition,
              ]}
            >
              <Text style={[styles.accountingServicesInvoices, styles.allTypo]}>
                <Text style={styles.accountFeatures}>
                  <Text style={styles.accountFeatures1}>
                    Accounting Services:
                  </Text>
                </Text>
                <Text style={styles.accountFeatures}>
                  <Text style={styles.mobileSetUp}>Invoices</Text>
                </Text>
                <Text style={styles.accountFeatures}>
                  <Text style={styles.mobileSetUp}>Digital Receipts</Text>
                </Text>
                <Text style={styles.accountFeatures}>
                  <Text style={styles.mobileSetUp}>Bank Feed</Text>
                </Text>
                <Text style={styles.accountFeatures}>
                  <Text style={styles.mobileSetUp}>Track Expenses</Text>
                </Text>
                <Text style={styles.mobileSetUp} />
              </Text>
            </View>
            <View
              style={[
                styles.slackIntegrationComingSooWrapper,
                styles.customerServicesDedicatedAPosition,
                styles.wrapperPosition,
              ]}
            >
              <Text
                style={[
                  styles.slackIntegrationComingSoo,
                  styles.invoicePosition,
                ]}
              >
                <Text style={styles.accountFeatures}>
                  <Text style={styles.accountFeatures1}>Slack Integration</Text>
                </Text>
                <Text style={styles.accountFeatures}>
                  <Text style={styles.mobileSetUp}> (Coming Soon)</Text>
                </Text>
                <Text style={styles.mobileSetUp} />
              </Text>
            </View>
            <View
              style={[
                styles.customerServicesOnlinephonWrapper,
                styles.plant10TreesAMonthPosition,
                styles.wrapperPosition,
              ]}
            >
              <Text
                style={[
                  styles.slackIntegrationComingSoo,
                  styles.invoicePosition,
                ]}
              >
                <Text style={styles.accountFeatures}>
                  <Text style={styles.accountFeatures1}>
                    Customer Services:
                  </Text>
                </Text>
                <Text style={styles.accountFeatures}>
                  <Text style={styles.mobileSetUp}>Online/Phone</Text>
                </Text>
                <Text style={styles.mobileSetUp} />
              </Text>
            </View>
            <View
              style={[
                styles.cashbackOnSavingsComingSWrapper,
                styles.wrapperPosition,
              ]}
            >
              <Text
                style={[
                  styles.slackIntegrationComingSoo,
                  styles.invoicePosition,
                ]}
              >
                <Text style={styles.accountFeatures}>
                  <Text style={styles.accountFeatures1}>
                    Cashback on savings
                  </Text>
                </Text>
                <Text style={styles.accountFeatures}>
                  <Text style={styles.mobileSetUp}> (Coming Soo</Text>n)
                </Text>
              </Text>
            </View>
            <View
              style={[
                styles.categoriseAndTagSpendingWrapper,
                styles.wrapperPosition,
              ]}
            >
              <Text
                style={[
                  styles.categoriseAndTagSpending,
                  styles.allEssentialFeaturesPosition,
                ]}
              >
                Categorise and Tag Spending
              </Text>
            </View>
            <View
              style={[
                styles.cardPaymentsForeignExFeeWrapper,
                styles.wrapperPosition,
              ]}
            >
              <Text
                style={[
                  styles.categoriseAndTagSpending,
                  styles.allEssentialFeaturesPosition,
                ]}
              >
                Card Payments Foreign EX Fee: 1.98%
              </Text>
            </View>
            <View
              style={[
                styles.invoicePaymentsForeignExFeWrapper,
                styles.wrapperPosition,
              ]}
            >
              <Text
                style={[
                  styles.invoicePaymentsForeignExFe1,
                  styles.invoicePosition,
                ]}
              >
                Invoice Payments Foreign EX Fee: 2.40%
              </Text>
            </View>
            <View
              style={[styles.plant5TreesAMonthWrapper, styles.wrapperPosition]}
            >
              <Text
                style={[
                  styles.categoriseAndTagSpending,
                  styles.allEssentialFeaturesPosition,
                ]}
              >
                Plant 5 trees a month
              </Text>
            </View>
          </View>
          <View
            style={[
              styles.rectangleContainer,
              styles.groupPosition1,
              styles.rectangleLayout,
            ]}
          >
            <View
              style={[
                styles.groupItem,
                styles.groupPosition1,
                styles.groupShadowBox,
              ]}
            />
            <Text
              style={[
                styles.allAdvanceFeatures,
                styles.paymentsPosition,
                styles.allTypo,
              ]}
            >
              All Advance Features
            </Text>
            <Text
              style={[
                styles.paymentsDomesticTransfer1,
                styles.paymentsPosition,
                styles.allTypo,
              ]}
            >
              <Text style={styles.accountFeatures}>
                <Text style={styles.accountFeatures1}>
                  Payments (domestic):
                </Text>
              </Text>
              <Text style={styles.accountFeatures}>
                <Text style={styles.mobileSetUp}>
                  Transfer in/out: No Fee Upto 50 Transactions
                </Text>
              </Text>
              <Text style={styles.mobileSetUp} />
            </Text>
            <Text
              style={[
                styles.cardsAddedExpenseCardsWit1,
                styles.paymentsPosition,
                styles.allTypo,
              ]}
            >
              <Text style={styles.accountFeatures}>
                <Text style={styles.accountFeatures1}>Cards:</Text>
              </Text>
              <Text style={styles.accountFeatures}>
                <Text
                  style={styles.mobileSetUp}
                >{`Added expense cards with spending limits: 2 `}</Text>
                Free Expense Card
              </Text>
            </Text>
            <Text
              style={[
                styles.businessToolKitFreeLogoD,
                styles.paymentsPosition,
                styles.allTypo,
              ]}
            >
              <Text style={styles.accountFeatures}>
                <Text style={styles.accountFeatures1}>Business Tool Kit:</Text>
              </Text>
              <Text style={styles.accountFeatures}>
                <Text style={styles.mobileSetUp}>Free Logo Design</Text>
              </Text>
              <Text style={styles.accountFeatures}>
                <Text style={styles.mobileSetUp}>Trade Mark Registration</Text>
              </Text>
              <Text style={styles.accountFeatures}>
                <Text style={styles.mobileSetUp}>Desktop Support</Text>
              </Text>
              <Text style={styles.mobileSetUp} />
            </Text>
            <Text
              style={[
                styles.customerServicesDedicatedA,
                styles.paymentsPosition,
                styles.customerServicesDedicatedAPosition,
                styles.allTypo,
              ]}
            >
              <Text style={styles.accountFeatures}>
                <Text style={styles.accountFeatures1}>Customer Services:</Text>
              </Text>
              <Text style={styles.accountFeatures}>
                <Text style={styles.mobileSetUp}>
                  Dedicated Account Manager
                </Text>
              </Text>
              <Text style={styles.mobileSetUp} />
            </Text>
            <Text
              style={[
                styles.geniusTelecoms10gbSimOnly,
                styles.paymentsPosition,
                styles.allTypo,
              ]}
            >
              Genius Telecoms 10GB Sim Only
            </Text>
            <Text
              style={[
                styles.plant10TreesAMonth,
                styles.paymentsPosition,
                styles.plant10TreesAMonthPosition,
                styles.allTypo,
              ]}
            >
              Plant 10 trees a month
            </Text>
            <Text
              style={[
                styles.simOnlyDataplanWith4gbDat,
                styles.paymentsPosition,
                styles.allTypo,
              ]}
            >
              Sim Only DataPlan with 4GB Data
            </Text>
            <Text
              style={[
                styles.openApiAccess,
                styles.paymentsPosition,
                styles.allTypo,
              ]}
            >
              Open API Access
            </Text>
            <Text
              style={[
                styles.multipleUserControl,
                styles.paymentsPosition,
                styles.allTypo,
              ]}
            >
              Multiple User Control
            </Text>
            <Text
              style={[
                styles.automaticPayroll,
                styles.paymentsPosition,
                styles.allTypo,
              ]}
            >
              Automatic Payroll
            </Text>
            <Text
              style={[
                styles.cardPaymentsForeignExFee2,
                styles.paymentsPosition,
                styles.allTypo,
              ]}
            >
              Card Payments Foreign EX Fee: 1.98%
            </Text>
            <View
              style={[
                styles.invoicePaymentsForeignExFeContainer,
                styles.paymentsPosition,
              ]}
            >
              <Text
                style={[
                  styles.invoicePaymentsForeignExFe2,
                  styles.invoicePosition,
                ]}
              >
                Invoice Payments Foreign EX Fee: 2.40%
              </Text>
            </View>
          </View>
          <View style={[styles.card1, styles.cardLayout]}>
            <View style={[styles.groupParent, styles.groupPosition]}>
              <View style={[styles.groupParent, styles.groupPosition]}>
                <Image
                  style={[
                    styles.path33118Icon,
                    styles.groupIconLayout,
                    styles.groupPosition,
                  ]}
                  resizeMode="cover"
                  source={require("../assets/path-3311810.png")}
                />
                <View style={[styles.groupParent, styles.groupPosition]}>
                  <Image
                    style={[styles.groupIcon, styles.groupIconLayout]}
                    resizeMode="cover"
                    source={require("../assets/group-3175910.png")}
                  />
                  <Image
                    style={[styles.groupChild1, styles.groupIconLayout]}
                    resizeMode="cover"
                    source={require("../assets/group-3176010.png")}
                  />
                  <View style={styles.rectangleView} />
                  <Image
                    style={[styles.rectangleIcon, styles.groupIconLayout]}
                    resizeMode="cover"
                    source={require("../assets/rectangle-262042.png")}
                  />
                  <View style={[styles.bWrapper, styles.bWrapperPosition]}>
                    <Text style={styles.b}>B</Text>
                  </View>
                  <Text style={styles.business}>BUSINESS</Text>
                </View>
              </View>
              <Image
                style={styles.groupChild2}
                resizeMode="cover"
                source={require("../assets/group-3176410.png")}
              />
              <Image
                style={styles.groupChild3}
                resizeMode="cover"
                source={require("../assets/group-3176610.png")}
              />
              <Image
                style={[styles.groupChild4, styles.groupChild4Position]}
                resizeMode="cover"
                source={require("../assets/group-3176710.png")}
              />
            </View>
          </View>
          <View style={[styles.card11, styles.cardLayout]}>
            <View style={[styles.groupParent, styles.groupPosition]}>
              <View style={[styles.groupParent, styles.groupPosition]}>
                <Image
                  style={[
                    styles.path33118Icon,
                    styles.groupIconLayout,
                    styles.groupPosition,
                  ]}
                  resizeMode="cover"
                  source={require("../assets/path-331188.png")}
                />
                <View style={[styles.groupParent, styles.groupPosition]}>
                  <Image
                    style={[styles.groupIcon, styles.groupIconLayout]}
                    resizeMode="cover"
                    source={require("../assets/group-3175911.png")}
                  />
                  <Image
                    style={[styles.groupChild1, styles.groupIconLayout]}
                    resizeMode="cover"
                    source={require("../assets/group-3176011.png")}
                  />
                  <View style={styles.rectangleView} />
                  <Image
                    style={[styles.rectangleIcon, styles.groupIconLayout]}
                    resizeMode="cover"
                    source={require("../assets/rectangle-262042.png")}
                  />
                  <View style={[styles.bContainer, styles.bWrapperPosition]}>
                    <Text style={styles.b}>B</Text>
                  </View>
                  <Text style={styles.business}>BUSINESS</Text>
                </View>
              </View>
              <Image
                style={styles.groupChild2}
                resizeMode="cover"
                source={require("../assets/group-3176410.png")}
              />
              <Image
                style={styles.groupChild3}
                resizeMode="cover"
                source={require("../assets/group-3176610.png")}
              />
              <Image
                style={[styles.groupChild4, styles.groupChild4Position]}
                resizeMode="cover"
                source={require("../assets/group-3176711.png")}
              />
            </View>
          </View>
          <View style={[styles.card12, styles.cardLayout]}>
            <View style={[styles.groupParent, styles.groupPosition]}>
              <View style={[styles.groupParent, styles.groupPosition]}>
                <Image
                  style={[
                    styles.path33118Icon,
                    styles.groupIconLayout,
                    styles.groupPosition,
                  ]}
                  resizeMode="cover"
                  source={require("../assets/path-3311812.png")}
                />
                <View style={[styles.groupParent, styles.groupPosition]}>
                  <Image
                    style={[styles.groupIcon, styles.groupIconLayout]}
                    resizeMode="cover"
                    source={require("../assets/group-3175912.png")}
                  />
                  <Image
                    style={[styles.groupChild1, styles.groupIconLayout]}
                    resizeMode="cover"
                    source={require("../assets/group-3176011.png")}
                  />
                  <View style={styles.rectangleView} />
                  <Image
                    style={[styles.rectangleIcon, styles.groupIconLayout]}
                    resizeMode="cover"
                    source={require("../assets/rectangle-262042.png")}
                  />
                  <View style={[styles.bContainer, styles.bWrapperPosition]}>
                    <Text style={styles.b}>B</Text>
                  </View>
                  <Text style={styles.business}>BUSINESS</Text>
                </View>
              </View>
              <Image
                style={styles.groupChild2}
                resizeMode="cover"
                source={require("../assets/group-3176410.png")}
              />
              <Image
                style={styles.groupChild3}
                resizeMode="cover"
                source={require("../assets/group-3176612.png")}
              />
              <Image
                style={[styles.groupChild4, styles.groupChild4Position]}
                resizeMode="cover"
                source={require("../assets/group-3176712.png")}
              />
            </View>
          </View>
          <Image
            style={[styles.iconAwesomeCheckCircle22, styles.iconPosition1]}
            resizeMode="cover"
            source={require("../assets/icon-awesomecheckcircle4.png")}
          />
          <Image
            style={[styles.iconAwesomeCheckCircle23, styles.iconPosition1]}
            resizeMode="cover"
            source={require("../assets/icon-awesomecheckcircle4.png")}
          />
          <Image
            style={[styles.iconAwesomeCheckCircle24, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/icon-awesomecheckcircle4.png")}
          />
          <Image
            style={[styles.iconAwesomeCheckCircle25, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/icon-awesomecheckcircle4.png")}
          />
          <Image
            style={[styles.iconAwesomeCheckCircle26, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/icon-awesomecheckcircle4.png")}
          />
          <Image
            style={[styles.iconAwesomeCheckCircle27, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/icon-awesomecheckcircle4.png")}
          />
          <Image
            style={[styles.iconAwesomeCheckCircle28, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/icon-awesomecheckcircle4.png")}
          />
          <Image
            style={[styles.iconAwesomeCheckCircle29, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/icon-awesomecheckcircle4.png")}
          />
          <Image
            style={[styles.iconAwesomeCheckCircle30, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/icon-awesomecheckcircle4.png")}
          />
          <Image
            style={[styles.iconAwesomeCheckCircle31, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/icon-awesomecheckcircle4.png")}
          />
          <Image
            style={[styles.iconAwesomeCheckCircle32, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/icon-awesomecheckcircle4.png")}
          />
          <Image
            style={[styles.iconAwesomeCheckCircle33, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/icon-awesomecheckcircle4.png")}
          />
          <Image
            style={[styles.iconAwesomeCheckCircle34, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/icon-awesomecheckcircle4.png")}
          />
          <Image
            style={[styles.iconAwesomeCheckCircle35, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/icon-awesomecheckcircle4.png")}
          />
          <Image
            style={[styles.iconAwesomeCheckCircle36, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/icon-awesomecheckcircle4.png")}
          />
          <Image
            style={[styles.iconAwesomeCheckCircle37, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/icon-awesomecheckcircle4.png")}
          />
          <Image
            style={[styles.iconAwesomeCheckCircle38, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/icon-awesomecheckcircle4.png")}
          />
          <Image
            style={[styles.iconAwesomeCheckCircle39, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/icon-awesomecheckcircle4.png")}
          />
          <Image
            style={[styles.iconAwesomeCheckCircle40, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/icon-awesomecheckcircle4.png")}
          />
          <Image
            style={[styles.iconAwesomeCheckCircle41, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/icon-awesomecheckcircle4.png")}
          />
          <Image
            style={[styles.iconAwesomeCheckCircle42, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/icon-awesomecheckcircle4.png")}
          />
          <Image
            style={[styles.iconAwesomeCheckCircle43, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/icon-awesomecheckcircle4.png")}
          />
          <Image
            style={[styles.iconAwesomeCheckCircle44, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/icon-awesomecheckcircle4.png")}
          />
          <Image
            style={[styles.iconAwesomeCheckCircle45, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/icon-awesomecheckcircle4.png")}
          />
        </View>
      </ScrollView>
      <Text style={[styles.hello6, styles.mt9, styles.ml30]}>
        My Plan Details
      </Text>
      <Pressable
        style={[styles.iconFeatherArrowLeftWrapper, styles.mt_2449]}
        onPress={() => navigation.navigate("Settings")}
      >
        <Image
          style={[styles.iconFeatherArrowLeft, styles.groupChild4Position]}
          resizeMode="cover"
          source={require("../assets/icon-featherarrowleft.png")}
        />
      </Pressable>
      <View style={[styles.homeIndicator, styles.mt36, styles.ml121]} />
      <Pressable
        style={[styles.component208148Parent, styles.mt_1312, styles.ml25]}
        onPress={() => navigation.navigate("ChooseCardsStandard2")}
      >
        <View style={[styles.groupParent, styles.groupPosition]}>
          <View style={styles.rectangleParent1}>
            <View style={styles.groupChild19} />
            <View style={[styles.maskGroup236, styles.groupPosition]} />
          </View>
        </View>
        <Text style={styles.hello7}>Upgrade Plan</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollGroup30Content: {
    flexDirection: "column",
    paddingLeft: 25,
    paddingTop: 33,
    paddingBottom: 30,
  },
  mt13: {
    marginTop: GlobalStyles.Margin.margin_10xs,
  },
  mt9: {
    marginTop: GlobalStyles.Margin.margin_17xs,
  },
  ml30: {
    marginLeft: GlobalStyles.Margin.margin_8xl,
  },
  mt_2449: {
    marginTop: -2449,
  },
  mt36: {
    marginTop: GlobalStyles.Margin.margin_14xl,
  },
  ml121: {
    marginLeft: GlobalStyles.Margin.margin_46xl,
  },
  mt_1312: {
    marginTop: -1312,
  },
  ml25: {
    marginLeft: GlobalStyles.Margin.margin_3xl,
  },
  helloTypo: {
    color: GlobalStyles.Color.blue,
    fontSize: GlobalStyles.FontSize.size_5xl,
    marginTop: -580.52,
    textAlign: "left",
    fontFamily: GlobalStyles.FontFamily.helvetica,
    fontWeight: "700",
    lineHeight: 20,
    top: "50%",
    position: "absolute",
  },
  helloPosition: {
    marginTop: -550.52,
    color: GlobalStyles.Color.indigo,
    textAlign: "left",
    fontFamily: GlobalStyles.FontFamily.helvetica,
    lineHeight: 20,
    fontSize: GlobalStyles.FontSize.size_5xl,
    top: "50%",
    position: "absolute",
  },
  groupChildLayout: {
    height: 1393,
    position: "absolute",
  },
  groupShadowBox: {
    shadowOpacity: 1,
    elevation: 20,
    shadowRadius: 20,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(1, 1, 253, 0.1)",
    borderRadius: GlobalStyles.Border.br_4xl,
    right: 0,
    left: 0,
    backgroundColor: GlobalStyles.Color.white,
  },
  paymentsLayout: {
    whiteSpace: "pre-wrap",
    lineHeight: 20,
  },
  allTypo: {
    fontSize: GlobalStyles.FontSize.size_sm,
    textAlign: "left",
  },
  payPosition: {
    left: 54,
    fontSize: GlobalStyles.FontSize.size_sm,
    position: "absolute",
  },
  perksCardPosition: {
    left: 53,
    fontSize: GlobalStyles.FontSize.size_sm,
    textAlign: "left",
    top: "50%",
    position: "absolute",
  },
  iconLayout: {
    height: 15,
    width: 15,
    position: "absolute",
  },
  iconLayout1: {
    left: 22,
    height: 15,
    width: 15,
  },
  groupPosition1: {
    height: 684,
    top: "50%",
    position: "absolute",
  },
  rectangleLayout: {
    marginTop: -482.93,
    height: 684,
    width: 326,
  },
  wrapperPosition1: {
    left: 48,
    right: 12,
    position: "absolute",
  },
  allEssentialFeaturesPosition: {
    marginTop: -8,
    fontSize: GlobalStyles.FontSize.size_sm,
    left: 0,
    color: GlobalStyles.Color.indigo,
    textAlign: "left",
    fontFamily: GlobalStyles.FontFamily.helvetica,
    fontWeight: "700",
    top: "50%",
    position: "absolute",
  },
  cardsPosition: {
    marginTop: -28,
    fontSize: GlobalStyles.FontSize.size_sm,
    left: 0,
    textAlign: "left",
    lineHeight: 20,
    top: "50%",
    position: "absolute",
  },
  wrapperPosition: {
    right: 9,
    left: 48,
    position: "absolute",
  },
  customerServicesDedicatedAPosition: {
    marginTop: 1,
    top: "50%",
  },
  invoicePosition: {
    marginTop: -18,
    fontSize: GlobalStyles.FontSize.size_sm,
    left: 0,
    textAlign: "left",
    lineHeight: 20,
    top: "50%",
    position: "absolute",
  },
  plant10TreesAMonthPosition: {
    marginTop: 57,
    top: "50%",
  },
  paymentsPosition: {
    left: 41,
    position: "absolute",
  },
  cardLayout: {
    height: 299,
    width: 198,
    top: 0,
    position: "absolute",
  },
  groupPosition: {
    top: 0,
    right: 0,
    left: 0,
  },
  groupIconLayout: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  bWrapperPosition: {
    left: "3.42%",
    bottom: "-8.83%",
    right: "65.22%",
    top: "76.67%",
    width: "31.36%",
    height: "32.16%",
    position: "absolute",
  },
  groupChild4Position: {
    width: 17,
    left: "50%",
    position: "absolute",
  },
  iconPosition1: {
    top: 439,
    height: 15,
    width: 15,
    position: "absolute",
  },
  iconPosition: {
    top: 967,
    height: 15,
    width: 15,
    position: "absolute",
  },
  planChild: {
    width: 375,
    height: 2495,
    backgroundColor: GlobalStyles.Color.gray_300,
  },
  hello: {
    left: 93,
    textAlign: "left",
  },
  hello1: {
    left: 149,
    color: GlobalStyles.Color.indigo,
  },
  hello2: {
    left: 518,
    color: GlobalStyles.Color.indigo,
  },
  hello3: {
    left: 892,
    color: GlobalStyles.Color.indigo,
  },
  hello4: {
    left: 478,
    textAlign: "left",
  },
  hello5: {
    left: 877,
    textAlign: "left",
  },
  groupChild: {
    marginTop: -696.5,
    top: "50%",
  },
  accountFeatures1: {
    color: GlobalStyles.Color.indigo,
    fontFamily: GlobalStyles.FontFamily.helvetica,
    fontWeight: "700",
  },
  accountFeatures: {
    margin: GlobalStyles.Margin.margin_25xs,
  },
  mobileSetUp: {
    color: GlobalStyles.Color.gray_800,
    fontFamily: GlobalStyles.FontFamily.helvetica,
  },
  accountFeaturesMobileSet: {
    marginTop: -668.5,
    width: 267,
    top: "50%",
  },
  cardsDebitAndVirtualCar: {
    marginTop: -206.5,
    width: 267,
  },
  appSecurityPasswordProte: {
    height: 155,
    width: 263,
    top: 201,
  },
  paymentsTransferInout0: {
    bottom: 921,
    width: 263,
  },
  accountingServicesBankFeed: {
    marginTop: -59.5,
    width: 267,
    lineHeight: 20,
  },
  sageAndXeroIntegrationCo: {
    marginTop: -4.5,
    width: 267,
    lineHeight: 20,
  },
  customerServiceOnline: {
    marginTop: 257.5,
    width: 267,
    lineHeight: 20,
    top: "50%",
  },
  carbonCalculator: {
    marginTop: 293.5,
    width: 267,
    lineHeight: 20,
    top: "50%",
  },
  carbonOffset: {
    marginTop: 326.5,
    width: 267,
    color: GlobalStyles.Color.indigo,
    fontFamily: GlobalStyles.FontFamily.helvetica,
    fontWeight: "700",
  },
  accessToGeniusMarketPlace: {
    marginTop: 356.5,
    width: 267,
    color: GlobalStyles.Color.indigo,
    fontFamily: GlobalStyles.FontFamily.helvetica,
    fontWeight: "700",
  },
  manageSubscriptions: {
    marginTop: 386.5,
    width: 267,
    color: GlobalStyles.Color.indigo,
    fontFamily: GlobalStyles.FontFamily.helvetica,
    fontWeight: "700",
    top: "50%",
  },
  setSpendingLimitsPerCardO: {
    marginTop: 416.5,
    width: 267,
    color: GlobalStyles.Color.indigo,
    fontFamily: GlobalStyles.FontFamily.helvetica,
    fontWeight: "700",
  },
  realtimeOverviewOfAllSpend: {
    marginTop: 446.5,
    width: 267,
    color: GlobalStyles.Color.indigo,
    fontFamily: GlobalStyles.FontFamily.helvetica,
    fontWeight: "700",
    top: "50%",
  },
  pdfAndCsvStatements: {
    marginTop: 480.5,
    width: 267,
    color: GlobalStyles.Color.indigo,
    fontFamily: GlobalStyles.FontFamily.helvetica,
    fontWeight: "700",
  },
  cardPaymentsForeignExFee: {
    marginTop: 514.5,
    width: 253,
    color: GlobalStyles.Color.indigo,
    fontFamily: GlobalStyles.FontFamily.helvetica,
    fontWeight: "700",
    lineHeight: 20,
  },
  invoicePaymentsForeignExFe: {
    marginTop: 564.5,
    left: 52,
    width: 267,
    color: GlobalStyles.Color.indigo,
    fontFamily: GlobalStyles.FontFamily.helvetica,
    fontWeight: "700",
    lineHeight: 20,
    top: "50%",
    position: "absolute",
  },
  discountsAndPerksOnEnviro: {
    marginTop: 617.5,
    width: 246,
    color: GlobalStyles.Color.indigo,
    fontFamily: GlobalStyles.FontFamily.helvetica,
    fontWeight: "700",
    lineHeight: 20,
  },
  internationalPayments15: {
    marginTop: 130.5,
    width: 267,
  },
  forexWalletGbpEurousd: {
    marginTop: 182.5,
    width: 267,
    color: GlobalStyles.Color.indigo,
    fontFamily: GlobalStyles.FontFamily.helvetica,
    fontWeight: "700",
    lineHeight: 20,
  },
  transactionFee1ForConver: {
    marginTop: 221.5,
    width: 267,
    color: GlobalStyles.Color.indigo,
    fontFamily: GlobalStyles.FontFamily.helvetica,
    fontWeight: "700",
    top: "50%",
  },
  applePayAndGooglePayCom: {
    marginTop: -112.5,
    width: 267,
    lineHeight: 20,
    top: "50%",
  },
  memberPerks: {
    marginTop: 50.5,
    width: 267,
    color: GlobalStyles.Color.indigo,
    fontFamily: GlobalStyles.FontFamily.helvetica,
    fontWeight: "700",
    lineHeight: 20,
  },
  geniusMarketPlace: {
    marginTop: 91.5,
    width: 267,
    color: GlobalStyles.Color.indigo,
    fontFamily: GlobalStyles.FontFamily.helvetica,
    fontWeight: "700",
    lineHeight: 20,
  },
  iconAwesomeCheckCircle: {
    top: 30,
  },
  iconAwesomeCheckCircle1: {
    top: 201,
  },
  iconAwesomeCheckCircle2: {
    top: 356,
  },
  iconAwesomeCheckCircle3: {
    top: 490,
  },
  iconAwesomeCheckCircle4: {
    top: 634,
  },
  iconAwesomeCheckCircle5: {
    top: 693,
  },
  iconAwesomeCheckCircle6: {
    top: 747,
  },
  iconAwesomeCheckCircle7: {
    top: 788,
  },
  iconAwesomeCheckCircle8: {
    top: 828,
  },
  iconAwesomeCheckCircle9: {
    top: 879,
  },
  iconAwesomeCheckCircle10: {
    top: 919,
  },
  iconAwesomeCheckCircle11: {
    top: 954,
  },
  iconAwesomeCheckCircle12: {
    top: 989,
  },
  iconAwesomeCheckCircle13: {
    top: 1024,
  },
  iconAwesomeCheckCircle14: {
    top: 1054,
  },
  iconAwesomeCheckCircle15: {
    top: 1083,
  },
  iconAwesomeCheckCircle16: {
    top: 1113,
  },
  iconAwesomeCheckCircle17: {
    top: 1143,
  },
  iconAwesomeCheckCircle18: {
    top: 1178,
  },
  iconAwesomeCheckCircle19: {
    top: 1211,
  },
  iconAwesomeCheckCircle20: {
    top: 1261,
  },
  iconAwesomeCheckCircle21: {
    top: 1314,
  },
  rectangleParent: {
    width: 326,
    left: 0,
    bottom: 0,
  },
  groupItem: {
    marginTop: -342,
  },
  allEssentialFeatures: {
    width: 267,
  },
  allEssentialFeaturesWrapper: {
    top: 20,
    height: 16,
  },
  paymentsDomesticTransfer: {
    width: 267,
  },
  paymentsDomesticTransferWrapper: {
    top: 76,
    height: 56,
  },
  cardsAddedExpenseCardsWit: {
    width: 270,
  },
  cardsAddedExpenseCardsWitWrapper: {
    marginTop: -190,
    height: 56,
    top: "50%",
  },
  accountingServicesInvoices: {
    marginTop: -48,
    width: 270,
    left: 0,
    lineHeight: 20,
    top: "50%",
    position: "absolute",
  },
  accountingServicesInvoicesWrapper: {
    marginTop: -115,
    height: 96,
    top: "50%",
  },
  slackIntegrationComingSoo: {
    width: 270,
  },
  slackIntegrationComingSooWrapper: {
    height: 36,
  },
  customerServicesOnlinephonWrapper: {
    height: 36,
  },
  cashbackOnSavingsComingSWrapper: {
    marginTop: 149,
    height: 36,
    top: "50%",
  },
  categoriseAndTagSpending: {
    width: 270,
  },
  categoriseAndTagSpendingWrapper: {
    marginTop: 204,
    height: 16,
    top: "50%",
  },
  cardPaymentsForeignExFeeWrapper: {
    bottom: 86,
    height: 16,
  },
  invoicePaymentsForeignExFe1: {
    width: 270,
    color: GlobalStyles.Color.indigo,
    fontFamily: GlobalStyles.FontFamily.helvetica,
    fontWeight: "700",
  },
  invoicePaymentsForeignExFeWrapper: {
    bottom: 30,
    height: 36,
  },
  plant5TreesAMonthWrapper: {
    marginTop: 113,
    height: 16,
    top: "50%",
  },
  rectangleGroup: {
    marginLeft: -161.5,
    left: "50%",
  },
  allAdvanceFeatures: {
    marginTop: -322,
    width: 267,
    color: GlobalStyles.Color.indigo,
    fontFamily: GlobalStyles.FontFamily.helvetica,
    fontWeight: "700",
    top: "50%",
  },
  paymentsDomesticTransfer1: {
    marginTop: -286,
    width: 263,
    lineHeight: 20,
    top: "50%",
  },
  cardsAddedExpenseCardsWit1: {
    marginTop: -210,
    width: 263,
    lineHeight: 20,
    top: "50%",
  },
  businessToolKitFreeLogoD: {
    marginTop: -133,
    width: 263,
    lineHeight: 20,
    top: "50%",
  },
  customerServicesDedicatedA: {
    width: 263,
    lineHeight: 20,
  },
  geniusTelecoms10gbSimOnly: {
    marginTop: -37,
    width: 263,
    color: GlobalStyles.Color.indigo,
    fontFamily: GlobalStyles.FontFamily.helvetica,
    fontWeight: "700",
    top: "50%",
  },
  plant10TreesAMonth: {
    width: 263,
    color: GlobalStyles.Color.indigo,
    fontFamily: GlobalStyles.FontFamily.helvetica,
    fontWeight: "700",
  },
  simOnlyDataplanWith4gbDat: {
    marginTop: 93,
    width: 263,
    color: GlobalStyles.Color.indigo,
    fontFamily: GlobalStyles.FontFamily.helvetica,
    fontWeight: "700",
    top: "50%",
  },
  openApiAccess: {
    marginTop: 129,
    width: 263,
    color: GlobalStyles.Color.indigo,
    fontFamily: GlobalStyles.FontFamily.helvetica,
    fontWeight: "700",
    top: "50%",
  },
  multipleUserControl: {
    marginTop: 165,
    width: 263,
    color: GlobalStyles.Color.indigo,
    fontFamily: GlobalStyles.FontFamily.helvetica,
    fontWeight: "700",
    top: "50%",
  },
  automaticPayroll: {
    marginTop: 202,
    width: 263,
    color: GlobalStyles.Color.indigo,
    fontFamily: GlobalStyles.FontFamily.helvetica,
    fontWeight: "700",
    top: "50%",
  },
  cardPaymentsForeignExFee2: {
    marginTop: 238,
    width: 263,
    color: GlobalStyles.Color.indigo,
    fontFamily: GlobalStyles.FontFamily.helvetica,
    fontWeight: "700",
    top: "50%",
  },
  invoicePaymentsForeignExFe2: {
    width: 263,
    color: GlobalStyles.Color.indigo,
    fontFamily: GlobalStyles.FontFamily.helvetica,
    fontWeight: "700",
  },
  invoicePaymentsForeignExFeContainer: {
    right: 23,
    bottom: 32,
    height: 36,
  },
  rectangleContainer: {
    right: 0,
  },
  path33118Icon: {
    bottom: 0,
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
    top: "35.59%",
    right: "9.14%",
    bottom: "53.87%",
    left: "9.14%",
  },
  rectangleView: {
    height: "33.14%",
    width: "108.22%",
    top: "68.51%",
    right: "-3.68%",
    bottom: "-1.65%",
    left: "-4.55%",
    backgroundColor: GlobalStyles.Color.gray_1500,
    position: "absolute",
  },
  rectangleIcon: {
    height: "13.04%",
    width: "21.19%",
    top: "101.17%",
    right: "-91.6%",
    bottom: "-14.22%",
    left: "170.41%",
  },
  b: {
    top: "-2.08%",
    left: "-3.23%",
    fontSize: GlobalStyles.FontSize.size_12xl,
    letterSpacing: 5,
    color: GlobalStyles.Color.gray_1600,
    textAlign: "left",
    fontFamily: GlobalStyles.FontFamily.helvetica,
    fontWeight: "700",
    position: "absolute",
  },
  bWrapper: {
    opacity: 0.4,
  },
  business: {
    top: "87.88%",
    left: "10.23%",
    fontSize: GlobalStyles.FontSize.size_xs,
    letterSpacing: 0,
    color: GlobalStyles.Color.white,
    textAlign: "left",
    fontFamily: GlobalStyles.FontFamily.helvetica,
    fontWeight: "700",
    position: "absolute",
  },
  groupParent: {
    bottom: 0,
    position: "absolute",
  },
  groupChild2: {
    top: 17,
    right: 15,
    width: 28,
    height: 30,
    position: "absolute",
  },
  groupChild3: {
    right: 16,
    bottom: 21,
    width: 48,
    height: 41,
    position: "absolute",
  },
  groupChild4: {
    marginLeft: 30.69,
    top: 21,
    height: 22,
  },
  card1: {
    left: 64,
  },
  bContainer: {
    opacity: 0.6,
  },
  card11: {
    marginLeft: -97.5,
    left: "50%",
  },
  card12: {
    right: 64,
  },
  iconAwesomeCheckCircle22: {
    left: 395,
  },
  iconAwesomeCheckCircle23: {
    left: 766,
  },
  iconAwesomeCheckCircle24: {
    top: 476,
    left: 766,
  },
  iconAwesomeCheckCircle25: {
    top: 551,
    left: 766,
  },
  iconAwesomeCheckCircle26: {
    top: 629,
    left: 766,
  },
  iconAwesomeCheckCircle27: {
    top: 724,
    left: 766,
  },
  iconAwesomeCheckCircle28: {
    top: 762,
    left: 766,
  },
  iconAwesomeCheckCircle29: {
    top: 819,
    left: 766,
  },
  iconAwesomeCheckCircle30: {
    top: 854,
    left: 766,
  },
  iconAwesomeCheckCircle31: {
    top: 891,
    left: 766,
  },
  iconAwesomeCheckCircle32: {
    top: 926,
    left: 766,
  },
  iconAwesomeCheckCircle33: {
    left: 766,
  },
  iconAwesomeCheckCircle34: {
    top: 999,
    left: 766,
  },
  iconAwesomeCheckCircle35: {
    top: 1035,
    left: 766,
  },
  iconAwesomeCheckCircle36: {
    top: 494,
    left: 395,
  },
  iconAwesomeCheckCircle37: {
    top: 571,
    left: 395,
  },
  iconAwesomeCheckCircle38: {
    top: 648,
    left: 395,
  },
  iconAwesomeCheckCircle39: {
    top: 764,
    left: 395,
  },
  iconAwesomeCheckCircle40: {
    top: 816,
    left: 395,
  },
  iconAwesomeCheckCircle41: {
    top: 873,
    left: 395,
  },
  iconAwesomeCheckCircle42: {
    top: 910,
    left: 395,
  },
  iconAwesomeCheckCircle43: {
    left: 395,
  },
  iconAwesomeCheckCircle44: {
    top: 1004,
    left: 395,
  },
  iconAwesomeCheckCircle45: {
    top: 1038,
    left: 395,
  },
  component2376: {
    width: "308.02%",
    height: 1804,
  },
  scrollGroup30: {
    width: 374,
    height: 1867,
    maxWidth: 374,
    alignSelf: "center",
  },
  hello6: {
    fontSize: GlobalStyles.FontSize.size_6xl,
    fontFamily: GlobalStyles.FontFamily.typoGrotesk,
    color: GlobalStyles.Color.indigo,
    textAlign: "left",
    fontWeight: "700",
  },
  iconFeatherArrowLeft: {
    marginLeft: -0.5,
    bottom: 4,
    height: 17,
  },
  iconFeatherArrowLeftWrapper: {
    width: 55,
    height: 45,
    backgroundColor: GlobalStyles.Color.gray_300,
  },
  homeIndicator: {
    borderRadius: GlobalStyles.Border.br_7xl,
    backgroundColor: GlobalStyles.Color.black,
    width: 134,
    height: 5,
  },
  groupChild19: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: GlobalStyles.Border.br_md,
    backgroundColor: GlobalStyles.Color.gray_500,
    position: "absolute",
    width: "100%",
  },
  maskGroup236: {
    bottom: 13,
    position: "absolute",
  },
  rectangleParent1: {
    marginTop: -30,
    height: 60,
    right: 0,
    left: 0,
    top: "50%",
    position: "absolute",
  },
  hello7: {
    top: "36.67%",
    left: "35.89%",
    fontSize: GlobalStyles.FontSize.size_base,
    lineHeight: 17,
    color: GlobalStyles.Color.black,
    textAlign: "left",
    fontFamily: GlobalStyles.FontFamily.helvetica,
    position: "absolute",
  },
  component208148Parent: {
    height: 60,
    width: 326,
  },
  plan: {
    flex: 1,
    width: "100%",
    backgroundColor: GlobalStyles.Color.white,
  },
});

export default Plan;
