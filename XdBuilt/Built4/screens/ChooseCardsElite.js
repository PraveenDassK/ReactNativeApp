import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import GlobalStyles from "../GlobalStyles";

const ChooseCardsElite = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.chooseCardsElite}>
      <View style={[styles.chooseCardsEliteChild, styles.mt_10]} />
      <View style={[styles.component2375, styles.mt30, styles.ml_724]}>
        <Text style={[styles.hello, styles.helloTypo4, styles.helloPosition2]}>
          ESSENTIAL
        </Text>
        <Text style={[styles.hello1, styles.helloPosition1]}>£2</Text>
        <Text style={[styles.hello2, styles.helloPosition1]}>£10</Text>
        <Text style={[styles.hello3, styles.helloPosition1]}>£25</Text>
        <Text style={[styles.hello4, styles.helloTypo4, styles.helloPosition2]}>
          ADVANCE
        </Text>
        <Text style={[styles.hello5, styles.helloTypo4, styles.helloPosition2]}>
          ELITE
        </Text>
        <View style={[styles.rectangleParent, styles.groupChildLayout]}>
          <View
            style={[
              styles.groupChild,
              styles.groupChildShadowBox,
              styles.groupChildShadowBox1,
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
              <Text style={[styles.accountFeatures1, styles.helloCardTypo]}>
                Account Features:
              </Text>
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
              <Text style={[styles.accountFeatures1, styles.helloCardTypo]}>
                Cards:
              </Text>
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
              <Text style={[styles.accountFeatures1, styles.helloCardTypo]}>
                App Security:
              </Text>
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
              <Text style={styles.mobileSetUp}>• Freeze/Unfreeze From Ap</Text>p
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
              <Text style={[styles.accountFeatures1, styles.helloCardTypo]}>
                Payments:
              </Text>
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
            <Text style={styles.accountFeatures}>• Payment Notifications</Text>
          </Text>
          <Text
            style={[
              styles.accountingServicesBankFeed,
              styles.perksCardPosition,
            ]}
          >
            <Text style={styles.accountFeatures}>
              <Text style={[styles.accountFeatures1, styles.helloCardTypo]}>
                Accounting Services:
              </Text>
            </Text>
            <Text style={styles.accountFeatures}>
              <Text style={styles.mobileSetUp}>Bank Feed</Text>
            </Text>
            <Text style={styles.mobileSetUp} />
          </Text>
          <Text
            style={[styles.sageAndXeroIntegrationCo, styles.perksCardPosition]}
          >
            <Text style={styles.accountFeatures}>
              <Text
                style={[styles.accountFeatures1, styles.helloCardTypo]}
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
              <Text style={[styles.accountFeatures1, styles.helloCardTypo]}>
                Customer Service:
              </Text>
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
              <Text style={[styles.accountFeatures1, styles.helloCardTypo]}>
                Customer Service:
              </Text>
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
                style={[styles.accountFeatures1, styles.helloCardTypo]}
              >{`Carbon Calculator `}</Text>
            </Text>
          </Text>
          <Text
            style={[
              styles.carbonOffset,
              styles.perksCardPosition,
              styles.helloCardTypo,
            ]}
          >{`Carbon Offset `}</Text>
          <Text
            style={[
              styles.accessToGeniusMarketPlace,
              styles.perksCardPosition,
              styles.helloCardTypo,
            ]}
          >
            Access to Genius Market Place
          </Text>
          <Text
            style={[
              styles.manageSubscriptions,
              styles.allTypo,
              styles.payPosition,
              styles.helloCardTypo,
            ]}
          >
            Manage Subscriptions
          </Text>
          <Text
            style={[
              styles.setSpendingLimitsPerCardO,
              styles.perksCardPosition,
              styles.helloCardTypo,
            ]}
          >
            Set Spending Limits per card or Wallet
          </Text>
          <Text
            style={[
              styles.realtimeOverviewOfAllSpend,
              styles.allTypo,
              styles.payPosition,
              styles.helloCardTypo,
            ]}
          >
            Realtime overview of all spending
          </Text>
          <Text
            style={[
              styles.pdfAndCsvStatements,
              styles.perksCardPosition,
              styles.helloCardTypo,
            ]}
          >
            PDF and CSV Statements
          </Text>
          <Text
            style={[
              styles.cardPaymentsForeignExFee,
              styles.perksCardPosition,
              styles.helloCardTypo,
            ]}
          >
            Card Payments Foreign EX Fee: 2.48%
          </Text>
          <Text
            style={[
              styles.invoicePaymentsForeignExFe,
              styles.allTypo,
              styles.helloCardTypo,
            ]}
          >
            Invoice Payments Foreign EX Fee: 2.40%
          </Text>
          <Text
            style={[
              styles.discountsAndPerksOnEnviro,
              styles.perksCardPosition,
              styles.helloCardTypo,
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
                style={[styles.accountFeatures1, styles.helloCardTypo]}
              >{`International Payments:  `}</Text>
            </Text>
            <Text style={styles.accountFeatures}>
              <Text style={styles.mobileSetUp}>£15/transacti</Text>on
            </Text>
          </Text>
          <Text
            style={[
              styles.forexWalletGbpEurousd,
              styles.perksCardPosition,
              styles.helloCardTypo,
            ]}
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
              styles.helloCardTypo,
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
                style={[styles.accountFeatures1, styles.helloCardTypo]}
              >{`Apple Pay and Google Pay `}</Text>
            </Text>
            <Text style={styles.accountFeatures}>
              <Text style={styles.mobileSetUp}>(Coming Soon)</Text>
            </Text>
          </Text>
          <Text
            style={[
              styles.memberPerks,
              styles.perksCardPosition,
              styles.helloCardTypo,
            ]}
          >
            <Text style={styles.accountFeatures}>Member Perks</Text>
          </Text>
          <Text
            style={[
              styles.geniusMarketPlace,
              styles.perksCardPosition,
              styles.helloCardTypo,
            ]}
          >
            <Text style={styles.accountFeatures}>Genius Market Place</Text>
          </Text>
          <Image
            style={[styles.iconAwesomeCheckCircle, styles.iconPosition4]}
            resizeMode="cover"
            source={require("../assets/icon-awesomecheckcircle4.png")}
          />
          <Image
            style={[styles.iconAwesomeCheckCircle1, styles.iconPosition4]}
            resizeMode="cover"
            source={require("../assets/icon-awesomecheckcircle4.png")}
          />
          <Image
            style={[styles.iconAwesomeCheckCircle2, styles.iconPosition4]}
            resizeMode="cover"
            source={require("../assets/icon-awesomecheckcircle4.png")}
          />
          <Image
            style={[styles.iconAwesomeCheckCircle3, styles.iconPosition4]}
            resizeMode="cover"
            source={require("../assets/icon-awesomecheckcircle4.png")}
          />
          <Image
            style={[styles.iconAwesomeCheckCircle4, styles.iconPosition4]}
            resizeMode="cover"
            source={require("../assets/icon-awesomecheckcircle4.png")}
          />
          <Image
            style={[styles.iconAwesomeCheckCircle5, styles.iconPosition4]}
            resizeMode="cover"
            source={require("../assets/icon-awesomecheckcircle4.png")}
          />
          <Image
            style={[styles.iconAwesomeCheckCircle6, styles.iconPosition4]}
            resizeMode="cover"
            source={require("../assets/icon-awesomecheckcircle4.png")}
          />
          <Image
            style={[styles.iconAwesomeCheckCircle7, styles.iconPosition4]}
            resizeMode="cover"
            source={require("../assets/icon-awesomecheckcircle4.png")}
          />
          <Image
            style={[styles.iconAwesomeCheckCircle8, styles.iconPosition4]}
            resizeMode="cover"
            source={require("../assets/icon-awesomecheckcircle4.png")}
          />
          <Image
            style={[styles.iconAwesomeCheckCircle9, styles.iconPosition4]}
            resizeMode="cover"
            source={require("../assets/icon-awesomecheckcircle4.png")}
          />
          <Image
            style={[styles.iconAwesomeCheckCircle10, styles.iconPosition4]}
            resizeMode="cover"
            source={require("../assets/icon-awesomecheckcircle4.png")}
          />
          <Image
            style={[styles.iconAwesomeCheckCircle11, styles.iconPosition4]}
            resizeMode="cover"
            source={require("../assets/icon-awesomecheckcircle4.png")}
          />
          <Image
            style={[styles.iconAwesomeCheckCircle12, styles.iconPosition4]}
            resizeMode="cover"
            source={require("../assets/icon-awesomecheckcircle4.png")}
          />
          <Image
            style={[styles.iconAwesomeCheckCircle13, styles.iconPosition4]}
            resizeMode="cover"
            source={require("../assets/icon-awesomecheckcircle4.png")}
          />
          <Image
            style={[styles.iconAwesomeCheckCircle14, styles.iconPosition4]}
            resizeMode="cover"
            source={require("../assets/icon-awesomecheckcircle4.png")}
          />
          <Image
            style={[styles.iconAwesomeCheckCircle15, styles.iconPosition4]}
            resizeMode="cover"
            source={require("../assets/icon-awesomecheckcircle4.png")}
          />
          <Image
            style={[styles.iconAwesomeCheckCircle16, styles.iconPosition4]}
            resizeMode="cover"
            source={require("../assets/icon-awesomecheckcircle4.png")}
          />
          <Image
            style={[styles.iconAwesomeCheckCircle17, styles.iconPosition4]}
            resizeMode="cover"
            source={require("../assets/icon-awesomecheckcircle4.png")}
          />
          <Image
            style={[styles.iconAwesomeCheckCircle18, styles.iconPosition4]}
            resizeMode="cover"
            source={require("../assets/icon-awesomecheckcircle4.png")}
          />
          <Image
            style={[styles.iconAwesomeCheckCircle19, styles.iconPosition4]}
            resizeMode="cover"
            source={require("../assets/icon-awesomecheckcircle4.png")}
          />
          <Image
            style={[styles.iconAwesomeCheckCircle20, styles.iconPosition4]}
            resizeMode="cover"
            source={require("../assets/icon-awesomecheckcircle4.png")}
          />
          <Image
            style={[styles.iconAwesomeCheckCircle21, styles.iconPosition4]}
            resizeMode="cover"
            source={require("../assets/icon-awesomecheckcircle4.png")}
          />
        </View>
        <View
          style={[
            styles.rectangleGroup,
            styles.groupPosition2,
            styles.rectangleLayout,
          ]}
        >
          <View
            style={[
              styles.groupItem,
              styles.groupPosition2,
              styles.groupChildShadowBox,
              styles.groupChildShadowBox1,
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
                styles.dedicatedTypo,
                styles.allTypo,
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
              style={[
                styles.paymentsDomesticTransfer,
                styles.paymentsSpaceBlock,
                styles.allTypo,
              ]}
            >
              <Text style={styles.accountFeatures}>
                <Text style={[styles.accountFeatures1, styles.helloCardTypo]}>
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
              style={[
                styles.cardsAddedExpenseCardsWit,
                styles.paymentsSpaceBlock,
                styles.allTypo,
              ]}
            >
              <Text style={styles.accountFeatures}>
                <Text style={[styles.accountFeatures1, styles.helloCardTypo]}>
                  Cards:
                </Text>
              </Text>
              <Text style={styles.accountFeatures}>
                <Text style={styles.mobileSetUp}>
                  Added expense cards with spending limits:
                </Text>
              </Text>
              <Text style={styles.accountFeatures}>
                <Text style={styles.mobileSetUp}>{`1 `}</Text>Free Expense Card
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
                <Text style={[styles.accountFeatures1, styles.helloCardTypo]}>
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
              style={[styles.slackIntegrationComingSoo, styles.invoicePosition]}
            >
              <Text style={styles.accountFeatures}>
                <Text style={[styles.accountFeatures1, styles.helloCardTypo]}>
                  Slack Integration
                </Text>
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
              style={[styles.slackIntegrationComingSoo, styles.invoicePosition]}
            >
              <Text style={styles.accountFeatures}>
                <Text style={[styles.accountFeatures1, styles.helloCardTypo]}>
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
              style={[styles.slackIntegrationComingSoo, styles.invoicePosition]}
            >
              <Text style={styles.accountFeatures}>
                <Text style={[styles.accountFeatures1, styles.helloCardTypo]}>
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
                styles.dedicatedTypo,
                styles.allTypo,
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
                styles.dedicatedTypo,
                styles.allTypo,
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
                styles.helloCardTypo,
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
                styles.dedicatedTypo,
                styles.allTypo,
              ]}
            >
              Plant 5 trees a month
            </Text>
          </View>
        </View>
        <View
          style={[
            styles.rectangleContainer,
            styles.groupPosition2,
            styles.rectangleLayout,
          ]}
        >
          <View
            style={[
              styles.groupItem,
              styles.groupPosition2,
              styles.groupChildShadowBox,
              styles.groupChildShadowBox1,
            ]}
          />
          <Text
            style={[
              styles.allAdvanceFeatures,
              styles.paymentsPosition,
              styles.allTypo,
              styles.helloCardTypo,
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
              <Text style={[styles.accountFeatures1, styles.helloCardTypo]}>
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
              <Text style={[styles.accountFeatures1, styles.helloCardTypo]}>
                Cards:
              </Text>
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
              <Text style={[styles.accountFeatures1, styles.helloCardTypo]}>
                Business Tool Kit:
              </Text>
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
              <Text style={[styles.accountFeatures1, styles.helloCardTypo]}>
                Customer Services:
              </Text>
            </Text>
            <Text style={styles.accountFeatures}>
              <Text style={styles.mobileSetUp}>Dedicated Account Manager</Text>
            </Text>
            <Text style={styles.mobileSetUp} />
          </Text>
          <Text
            style={[
              styles.geniusTelecoms10gbSimOnly,
              styles.paymentsPosition,
              styles.allTypo,
              styles.helloCardTypo,
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
              styles.helloCardTypo,
            ]}
          >
            Plant 10 trees a month
          </Text>
          <Text
            style={[
              styles.simOnlyDataplanWith4gbDat,
              styles.paymentsPosition,
              styles.allTypo,
              styles.helloCardTypo,
            ]}
          >
            Sim Only DataPlan with 4GB Data
          </Text>
          <Text
            style={[
              styles.openApiAccess,
              styles.paymentsPosition,
              styles.allTypo,
              styles.helloCardTypo,
            ]}
          >
            Open API Access
          </Text>
          <Text
            style={[
              styles.multipleUserControl,
              styles.paymentsPosition,
              styles.allTypo,
              styles.helloCardTypo,
            ]}
          >
            Multiple User Control
          </Text>
          <Text
            style={[
              styles.automaticPayroll,
              styles.paymentsPosition,
              styles.allTypo,
              styles.helloCardTypo,
            ]}
          >
            Automatic Payroll
          </Text>
          <Text
            style={[
              styles.cardPaymentsForeignExFee2,
              styles.paymentsPosition,
              styles.allTypo,
              styles.helloCardTypo,
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
                styles.helloCardTypo,
              ]}
            >
              Invoice Payments Foreign EX Fee: 2.40%
            </Text>
          </View>
        </View>
        <View style={[styles.card1, styles.cardLayout]}>
          <View style={styles.groupParent}>
            <View style={styles.groupParent}>
              <Image
                style={[styles.path33118Icon, styles.groupIconLayout]}
                resizeMode="cover"
                source={require("../assets/path-331182.png")}
              />
              <View style={styles.groupParent}>
                <Image
                  style={[styles.groupIcon, styles.groupIconLayout]}
                  resizeMode="cover"
                  source={require("../assets/group-317592.png")}
                />
                <Image
                  style={[styles.groupChild1, styles.groupIconLayout]}
                  resizeMode="cover"
                  source={require("../assets/group-317602.png")}
                />
                <View style={styles.rectangleView} />
                <Image
                  style={[styles.rectangleIcon, styles.groupIconLayout]}
                  resizeMode="cover"
                  source={require("../assets/rectangle-262042.png")}
                />
                <View style={[styles.bWrapper, styles.bWrapperPosition]}>
                  <Text style={[styles.b, styles.helloCardTypo]}>B</Text>
                </View>
                <Text style={styles.business}>BUSINESS</Text>
              </View>
            </View>
            <Image
              style={styles.groupChild2}
              resizeMode="cover"
              source={require("../assets/group-317642.png")}
            />
            <Image
              style={styles.groupChild3}
              resizeMode="cover"
              source={require("../assets/group-317662.png")}
            />
            <Image
              style={styles.groupChild4}
              resizeMode="cover"
              source={require("../assets/group-317672.png")}
            />
          </View>
        </View>
        <View style={[styles.card11, styles.cardLayout]}>
          <View style={styles.groupParent}>
            <View style={styles.groupParent}>
              <Image
                style={[styles.path33118Icon, styles.groupIconLayout]}
                resizeMode="cover"
                source={require("../assets/path-331183.png")}
              />
              <View style={styles.groupParent}>
                <Image
                  style={[styles.groupIcon, styles.groupIconLayout]}
                  resizeMode="cover"
                  source={require("../assets/group-317592.png")}
                />
                <Image
                  style={[styles.groupChild1, styles.groupIconLayout]}
                  resizeMode="cover"
                  source={require("../assets/group-317602.png")}
                />
                <View style={styles.rectangleView} />
                <Image
                  style={[styles.rectangleIcon, styles.groupIconLayout]}
                  resizeMode="cover"
                  source={require("../assets/rectangle-262042.png")}
                />
                <View style={[styles.bContainer, styles.bWrapperPosition]}>
                  <Text style={[styles.b, styles.helloCardTypo]}>B</Text>
                </View>
                <Text style={styles.business}>BUSINESS</Text>
              </View>
            </View>
            <Image
              style={styles.groupChild2}
              resizeMode="cover"
              source={require("../assets/group-317642.png")}
            />
            <Image
              style={styles.groupChild3}
              resizeMode="cover"
              source={require("../assets/group-317662.png")}
            />
            <Image
              style={styles.groupChild4}
              resizeMode="cover"
              source={require("../assets/group-317672.png")}
            />
          </View>
        </View>
        <View style={[styles.card12, styles.cardLayout]}>
          <View style={styles.groupParent}>
            <View style={styles.groupParent}>
              <Image
                style={[styles.path33118Icon, styles.groupIconLayout]}
                resizeMode="cover"
                source={require("../assets/path-331184.png")}
              />
              <View style={styles.groupParent}>
                <Image
                  style={[styles.groupIcon, styles.groupIconLayout]}
                  resizeMode="cover"
                  source={require("../assets/group-317592.png")}
                />
                <Image
                  style={[styles.groupChild1, styles.groupIconLayout]}
                  resizeMode="cover"
                  source={require("../assets/group-317602.png")}
                />
                <View style={styles.rectangleView} />
                <Image
                  style={[styles.rectangleIcon, styles.groupIconLayout]}
                  resizeMode="cover"
                  source={require("../assets/rectangle-262042.png")}
                />
                <View style={[styles.bContainer, styles.bWrapperPosition]}>
                  <Text style={[styles.b, styles.helloCardTypo]}>B</Text>
                </View>
                <Text style={styles.business}>BUSINESS</Text>
              </View>
            </View>
            <Image
              style={styles.groupChild2}
              resizeMode="cover"
              source={require("../assets/group-317642.png")}
            />
            <Image
              style={styles.groupChild3}
              resizeMode="cover"
              source={require("../assets/group-317662.png")}
            />
            <Image
              style={styles.groupChild4}
              resizeMode="cover"
              source={require("../assets/group-317672.png")}
            />
          </View>
        </View>
        <Image
          style={[styles.iconAwesomeCheckCircle22, styles.iconPosition3]}
          resizeMode="cover"
          source={require("../assets/icon-awesomecheckcircle4.png")}
        />
        <Image
          style={[styles.iconAwesomeCheckCircle23, styles.iconPosition3]}
          resizeMode="cover"
          source={require("../assets/icon-awesomecheckcircle4.png")}
        />
        <Image
          style={styles.iconAwesomeCheckCircle24}
          resizeMode="cover"
          source={require("../assets/icon-awesomecheckcircle4.png")}
        />
        <Image
          style={styles.iconAwesomeCheckCircle25}
          resizeMode="cover"
          source={require("../assets/icon-awesomecheckcircle4.png")}
        />
        <Image
          style={styles.iconAwesomeCheckCircle26}
          resizeMode="cover"
          source={require("../assets/icon-awesomecheckcircle4.png")}
        />
        <Image
          style={styles.iconAwesomeCheckCircle27}
          resizeMode="cover"
          source={require("../assets/icon-awesomecheckcircle4.png")}
        />
        <Image
          style={styles.iconAwesomeCheckCircle28}
          resizeMode="cover"
          source={require("../assets/icon-awesomecheckcircle4.png")}
        />
        <Image
          style={styles.iconAwesomeCheckCircle29}
          resizeMode="cover"
          source={require("../assets/icon-awesomecheckcircle4.png")}
        />
        <Image
          style={styles.iconAwesomeCheckCircle30}
          resizeMode="cover"
          source={require("../assets/icon-awesomecheckcircle4.png")}
        />
        <Image
          style={styles.iconAwesomeCheckCircle31}
          resizeMode="cover"
          source={require("../assets/icon-awesomecheckcircle4.png")}
        />
        <Image
          style={styles.iconAwesomeCheckCircle32}
          resizeMode="cover"
          source={require("../assets/icon-awesomecheckcircle4.png")}
        />
        <Image
          style={[styles.iconAwesomeCheckCircle33, styles.iconPosition2]}
          resizeMode="cover"
          source={require("../assets/icon-awesomecheckcircle4.png")}
        />
        <Image
          style={styles.iconAwesomeCheckCircle34}
          resizeMode="cover"
          source={require("../assets/icon-awesomecheckcircle4.png")}
        />
        <Image
          style={styles.iconAwesomeCheckCircle35}
          resizeMode="cover"
          source={require("../assets/icon-awesomecheckcircle4.png")}
        />
        <Image
          style={styles.iconAwesomeCheckCircle36}
          resizeMode="cover"
          source={require("../assets/icon-awesomecheckcircle4.png")}
        />
        <Image
          style={styles.iconAwesomeCheckCircle37}
          resizeMode="cover"
          source={require("../assets/icon-awesomecheckcircle4.png")}
        />
        <Image
          style={styles.iconAwesomeCheckCircle38}
          resizeMode="cover"
          source={require("../assets/icon-awesomecheckcircle4.png")}
        />
        <Image
          style={styles.iconAwesomeCheckCircle39}
          resizeMode="cover"
          source={require("../assets/icon-awesomecheckcircle4.png")}
        />
        <Image
          style={styles.iconAwesomeCheckCircle40}
          resizeMode="cover"
          source={require("../assets/icon-awesomecheckcircle4.png")}
        />
        <Image
          style={styles.iconAwesomeCheckCircle41}
          resizeMode="cover"
          source={require("../assets/icon-awesomecheckcircle4.png")}
        />
        <Image
          style={styles.iconAwesomeCheckCircle42}
          resizeMode="cover"
          source={require("../assets/icon-awesomecheckcircle4.png")}
        />
        <Image
          style={[styles.iconAwesomeCheckCircle43, styles.iconPosition2]}
          resizeMode="cover"
          source={require("../assets/icon-awesomecheckcircle4.png")}
        />
        <Image
          style={styles.iconAwesomeCheckCircle44}
          resizeMode="cover"
          source={require("../assets/icon-awesomecheckcircle4.png")}
        />
        <Image
          style={styles.iconAwesomeCheckCircle45}
          resizeMode="cover"
          source={require("../assets/icon-awesomecheckcircle4.png")}
        />
      </View>
      <View style={[styles.rectangleParent1, styles.mt288, styles.ml_2414]}>
        <View style={styles.groupChild19} />
        <View style={[styles.groupParent4, styles.groupParentPosition2]}>
          <View style={[styles.groupParent5, styles.groupParentPosition1]}>
            <Image
              style={[
                styles.groupChild20,
                styles.groupPosition,
                styles.groupPosition1,
              ]}
              resizeMode="cover"
              source={require("../assets/group-30429.png")}
            />
            <Image
              style={[styles.subtraction7Icon, styles.maskGroup238Position]}
              resizeMode="cover"
              source={require("../assets/subtraction-7.png")}
            />
            <Image
              style={[styles.path23806Icon, styles.groupPosition1]}
              resizeMode="cover"
              source={require("../assets/path-23806.png")}
            />
            <Text style={[styles.history, styles.historyTypo]}>debit</Text>
            <Text style={[styles.history1, styles.historyTypo]}>
              mastercard
            </Text>
            <LinearGradient
              style={styles.groupWrapper}
              locations={[0, 1]}
              colors={["#f7ebb3", "#ce9c20"]}
            >
              <Image
                style={[
                  styles.groupChild21,
                  styles.hello34Position,
                  styles.groupIconLayout,
                ]}
                resizeMode="cover"
                source={require("../assets/group-30436.png")}
              />
            </LinearGradient>
            <Text style={[styles.text11, styles.helloCardTypo]}>
              **** **** **** ****
            </Text>
            <Text style={[styles.text12, styles.textTypo]}>CVC</Text>
            <Text style={[styles.text13, styles.textTypo]}>***</Text>
            <Text style={[styles.text14, styles.textTypo]}>Exp Date **/**</Text>
            <Image
              style={[
                styles.maskGroup237,
                styles.groupPosition,
                styles.groupPosition1,
              ]}
              resizeMode="cover"
              source={require("../assets/mask-group-237.png")}
            />
            <Image
              style={[styles.groupChild22, styles.groupChild22Position]}
              resizeMode="cover"
              source={require("../assets/group-30596.png")}
            />
            <Image
              style={[styles.maskGroup238, styles.maskGroup238Position]}
              resizeMode="cover"
              source={require("../assets/mask-group-238.png")}
            />
            <Image
              style={[styles.iconFeatherWifi, styles.iconFeatherWifiPosition]}
              resizeMode="cover"
              source={require("../assets/icon-featherwifi.png")}
            />
            <Image
              style={[styles.layer12Icon, styles.groupIconLayout]}
              resizeMode="cover"
              source={require("../assets/layer-12.png")}
            />
            <Image
              style={[styles.path33118Icon, styles.groupIconLayout]}
              resizeMode="cover"
              source={require("../assets/rectangle-6071.png")}
            />
          </View>
          <Text
            style={[
              styles.hello6,
              styles.helloSpaceBlock2,
              styles.helloCardTypo,
            ]}
          >
            Elite
          </Text>
          <Text
            style={[
              styles.hello7,
              styles.helloTypo3,
              styles.helloSpaceBlock1,
              styles.helloCardTypo,
            ]}
          >
            £63.00
          </Text>
        </View>
        <View style={[styles.groupParent6, styles.groupParentPosition2]}>
          <View style={[styles.groupParent5, styles.groupParentPosition1]}>
            <Image
              style={[
                styles.groupChild20,
                styles.groupPosition,
                styles.groupPosition1,
              ]}
              resizeMode="cover"
              source={require("../assets/group-30429.png")}
            />
            <Image
              style={[styles.subtraction7Icon, styles.maskGroup238Position]}
              resizeMode="cover"
              source={require("../assets/subtraction-7.png")}
            />
            <Image
              style={[styles.path23806Icon, styles.groupPosition1]}
              resizeMode="cover"
              source={require("../assets/path-23806.png")}
            />
            <Text style={[styles.history, styles.historyTypo]}>debit</Text>
            <Text style={[styles.history1, styles.historyTypo]}>
              mastercard
            </Text>
            <LinearGradient
              style={styles.groupWrapper}
              locations={[0, 1]}
              colors={["#f7ebb3", "#ce9c20"]}
            >
              <Image
                style={[
                  styles.groupChild21,
                  styles.hello34Position,
                  styles.groupIconLayout,
                ]}
                resizeMode="cover"
                source={require("../assets/group-30436.png")}
              />
            </LinearGradient>
            <Text style={[styles.text11, styles.helloCardTypo]}>
              **** **** **** ****
            </Text>
            <Text style={[styles.text12, styles.textTypo]}>CVC</Text>
            <Text style={[styles.text13, styles.textTypo]}>***</Text>
            <Text style={[styles.text14, styles.textTypo]}>Exp Date **/**</Text>
            <Image
              style={[
                styles.maskGroup237,
                styles.groupPosition,
                styles.groupPosition1,
              ]}
              resizeMode="cover"
              source={require("../assets/mask-group-237.png")}
            />
            <Image
              style={[styles.groupChild22, styles.groupChild22Position]}
              resizeMode="cover"
              source={require("../assets/group-30596.png")}
            />
            <Image
              style={[styles.maskGroup238, styles.maskGroup238Position]}
              resizeMode="cover"
              source={require("../assets/mask-group-238.png")}
            />
            <Image
              style={[styles.iconFeatherWifi, styles.iconFeatherWifiPosition]}
              resizeMode="cover"
              source={require("../assets/icon-featherwifi.png")}
            />
            <Image
              style={[styles.layer12Icon, styles.groupIconLayout]}
              resizeMode="cover"
              source={require("../assets/layer-12.png")}
            />
            <Image
              style={[styles.path33118Icon, styles.groupIconLayout]}
              resizeMode="cover"
              source={require("../assets/rectangle-6071.png")}
            />
          </View>
          <Text
            style={[
              styles.hello8,
              styles.helloPosition,
              styles.helloSpaceBlock2,
            ]}
          >
            Premium
          </Text>
          <Text
            style={[
              styles.helloPosition,
              styles.helloTypo3,
              styles.helloSpaceBlock1,
            ]}
          >
            £63.00
          </Text>
        </View>
        <View style={styles.groupParent8}>
          <View style={[styles.groupParent9, styles.groupParentPosition1]}>
            <Image
              style={[styles.groupChild28, styles.groupIconLayout]}
              resizeMode="cover"
              source={require("../assets/group-304292.png")}
            />
            <Image
              style={[styles.subtraction7Icon, styles.maskGroup238Position]}
              resizeMode="cover"
              source={require("../assets/subtraction-7.png")}
            />
            <Image
              style={[styles.path23806Icon, styles.groupPosition1]}
              resizeMode="cover"
              source={require("../assets/path-23806.png")}
            />
            <Text style={[styles.history, styles.historyTypo]}>debit</Text>
            <Text style={[styles.history1, styles.historyTypo]}>
              mastercard
            </Text>
            <LinearGradient
              style={styles.groupWrapper}
              locations={[0, 1]}
              colors={["#f7ebb3", "#ce9c20"]}
            >
              <Image
                style={[
                  styles.groupChild21,
                  styles.hello34Position,
                  styles.groupIconLayout,
                ]}
                resizeMode="cover"
                source={require("../assets/group-30436.png")}
              />
            </LinearGradient>
            <Text style={[styles.text11, styles.helloCardTypo]}>
              **** **** **** ****
            </Text>
            <Text style={[styles.text12, styles.textTypo]}>CVC</Text>
            <Text style={[styles.text13, styles.textTypo]}>***</Text>
            <Text style={[styles.text14, styles.textTypo]}>Exp Date **/**</Text>
            <Image
              style={[
                styles.maskGroup237,
                styles.groupPosition,
                styles.groupPosition1,
              ]}
              resizeMode="cover"
              source={require("../assets/mask-group-237.png")}
            />
            <Image
              style={[styles.groupChild22, styles.groupChild22Position]}
              resizeMode="cover"
              source={require("../assets/group-30596.png")}
            />
            <Image
              style={[styles.maskGroup238, styles.maskGroup238Position]}
              resizeMode="cover"
              source={require("../assets/mask-group-238.png")}
            />
            <Image
              style={[styles.iconFeatherWifi, styles.iconFeatherWifiPosition]}
              resizeMode="cover"
              source={require("../assets/icon-featherwifi.png")}
            />
            <Image
              style={[styles.layer12Icon, styles.groupIconLayout]}
              resizeMode="cover"
              source={require("../assets/layer-12.png")}
            />
            <Image
              style={[styles.path33118Icon, styles.groupIconLayout]}
              resizeMode="cover"
              source={require("../assets/rectangle-6071.png")}
            />
          </View>
          <Text style={[styles.hello10, styles.helloTypo4]}>Standard</Text>
        </View>
        <Text style={[styles.hello11, styles.helloTypo3, styles.helloCardTypo]}>
          Free
        </Text>
        <View style={[styles.homeIndicatorWrapper, styles.homePosition]}>
          <View style={[styles.homeIndicator, styles.homeLayout]} />
        </View>
        <View style={[styles.homeIndicatorContainer, styles.homePosition]}>
          <View style={[styles.homeIndicator, styles.homeLayout]} />
        </View>
        <View style={[styles.homeIndicatorFrame, styles.homePosition]}>
          <View style={[styles.homeIndicator, styles.homeLayout]} />
        </View>
        <Text
          style={[styles.hello12, styles.helloTypo2, styles.helloSpaceBlock]}
        >
          Get started with the basic features
        </Text>
        <Text
          style={[styles.hello13, styles.helloTypo2, styles.helloSpaceBlock]}
        >
          Save 24% on the annual plan
        </Text>
        <Text
          style={[styles.hello14, styles.helloTypo1, styles.hello14Position]}
        >
          Choose Cards
        </Text>
        <View style={[styles.lineView, styles.lineViewLayout]} />
        <Text style={[styles.findAllFeesInTheBusiness, styles.findTypo]}>
          Find all fees in the Business Fees Page. If you downgrade or cancel
          your plan within 3 months of ordering your free Metal card a
          cancellation fee of £49 will apply.
        </Text>
        <Text style={[styles.findAllFeesInTheBusiness1, styles.findTypo]}>
          Find all fees in the Business Fees Page. If you downgrade or cancel
          your plan within 3 months of ordering your free Metal card a
          cancellation fee of £49 will apply.
        </Text>
        <Text style={[styles.findAllFeesInTheBusiness2, styles.findTypo]}>
          Find all fees in the Business Fees Page. If you downgrade or cancel
          your plan within 3 months of ordering your free Metal card a
          cancellation fee of £49 will apply.
        </Text>
        <View
          style={[
            styles.rectangleParentPosition2,
            styles.parentPosition2,
            styles.rectangleParentLayout1,
          ]}
        >
          <View
            style={[
              styles.groupChild32,
              styles.rectangleParentPosition2,
              styles.groupChildShadowBox,
              styles.groupChildShadowBox1,
            ]}
          />
          <View
            style={[
              styles.exchange50kAtTheInterbankParent,
              styles.parentPosition1,
              styles.parentPosition3,
            ]}
          >
            <Text
              style={[
                styles.exchange50kAtTheInterbank,
                styles.dedicatedPosition,
                styles.paymentsSpaceBlock,
              ]}
            >
              <Text style={styles.accountFeatures}>
                <Text style={[styles.accountFeatures1, styles.helloCardTypo]}>
                  Exchange £50k at the interbank rate
                </Text>
              </Text>
              <Text style={styles.accountFeatures}>
                <Text style={styles.mobileSetUp}>
                  A 0.4% markup applies for each FX outside of the free
                  allowance
                </Text>
              </Text>
            </Text>
            <Image
              style={[styles.iconAwesomeExchangeAlt, styles.iconPosition1]}
              resizeMode="cover"
              source={require("../assets/icon-awesomeexchangealt.png")}
            />
          </View>
          <View
            style={[
              styles.freeInternationalPaymentsAParent,
              styles.parentPosition1,
            ]}
          >
            <Text
              style={[
                styles.freeInternationalPaymentsA,
                styles.dedicatedPosition,
                styles.paymentsSpaceBlock,
              ]}
            >
              <Text style={styles.accountFeatures}>
                <Text style={[styles.accountFeatures1, styles.helloCardTypo]}>
                  50 free international payments
                </Text>
              </Text>
              <Text style={styles.accountFeatures}>
                <Text style={styles.mobileSetUp}>
                  A £3 fee applies per international payment outside of the free
                  allowance
                </Text>
              </Text>
            </Text>
            <Image
              style={styles.iconAwesomeGlobe}
              resizeMode="cover"
              source={require("../assets/icon-awesomeglobe.png")}
            />
          </View>
          <View style={[styles.paymentApprovalParent, styles.parentPosition1]}>
            <Text
              style={[
                styles.paymentApproval,
                styles.dedicatedPosition,
                styles.dedicatedTypo,
              ]}
            >
              Payment approval
            </Text>
            <Image
              style={[styles.iconOpenEye, styles.groupPosition]}
              resizeMode="cover"
              source={require("../assets/icon-openeye.png")}
            />
          </View>
        </View>
        <View
          style={[
            styles.rectangleParent3,
            styles.rectangleParentPosition2,
            styles.rectangleParentLayout1,
          ]}
        >
          <View
            style={[
              styles.groupChild32,
              styles.rectangleParentPosition2,
              styles.groupChildShadowBox,
              styles.groupChildShadowBox1,
            ]}
          />
          <View
            style={[
              styles.exchange50kAtTheInterbankParent,
              styles.parentPosition1,
              styles.parentPosition3,
            ]}
          >
            <Text
              style={[
                styles.exchange50kAtTheInterbank,
                styles.dedicatedPosition,
                styles.paymentsSpaceBlock,
              ]}
            >
              <Text style={styles.accountFeatures}>
                <Text style={[styles.accountFeatures1, styles.helloCardTypo]}>
                  Exchange £50k at the interbank rate
                </Text>
              </Text>
              <Text style={styles.accountFeatures}>
                <Text style={styles.mobileSetUp}>
                  A 0.4% markup applies for each FX outside of the free
                  allowance
                </Text>
              </Text>
            </Text>
            <Image
              style={[styles.iconAwesomeExchangeAlt, styles.iconPosition1]}
              resizeMode="cover"
              source={require("../assets/icon-awesomeexchangealt.png")}
            />
          </View>
          <View
            style={[
              styles.freeInternationalPaymentsAParent,
              styles.parentPosition1,
            ]}
          >
            <Text
              style={[
                styles.freeInternationalPaymentsA,
                styles.dedicatedPosition,
                styles.paymentsSpaceBlock,
              ]}
            >
              <Text style={styles.accountFeatures}>
                <Text style={[styles.accountFeatures1, styles.helloCardTypo]}>
                  50 free international payments
                </Text>
              </Text>
              <Text style={styles.accountFeatures}>
                <Text style={styles.mobileSetUp}>
                  A £3 fee applies per international payment outside of the free
                  allowance
                </Text>
              </Text>
            </Text>
            <Image
              style={styles.iconAwesomeGlobe}
              resizeMode="cover"
              source={require("../assets/icon-awesomeglobe.png")}
            />
          </View>
          <View style={[styles.paymentApprovalParent, styles.parentPosition1]}>
            <Text
              style={[
                styles.paymentApproval,
                styles.dedicatedPosition,
                styles.dedicatedTypo,
              ]}
            >
              Payment approval
            </Text>
            <Image
              style={[styles.iconOpenEye, styles.groupPosition]}
              resizeMode="cover"
              source={require("../assets/icon-openeye.png")}
            />
          </View>
        </View>
        <View
          style={[styles.rectangleParent4, styles.rectangleParentPosition1]}
        >
          <View style={[styles.groupChild34, styles.groupChildPosition1]} />
          <Text style={[styles.hello15, styles.helloTypo2]}>
            Upgrade to unlock
          </Text>
          <View
            style={[
              styles.dedicatedAccountManagerParent,
              styles.dedicatedParentPosition,
            ]}
          >
            <Text
              style={[
                styles.dedicatedAccountManager2,
                styles.dedicatedPosition,
                styles.dedicatedTypo,
              ]}
            >
              Dedicated account manager
            </Text>
            <Image
              style={styles.iconMaterialPerson}
              resizeMode="cover"
              source={require("../assets/icon-materialperson.png")}
            />
          </View>
        </View>
        <View style={[styles.rectangleParentPosition1, styles.parentPosition2]}>
          <View style={[styles.groupChild34, styles.groupChildPosition1]} />
          <Text style={[styles.hello15, styles.helloTypo2]}>
            Upgrade to unlock
          </Text>
          <View
            style={[
              styles.dedicatedAccountManagerParent,
              styles.dedicatedParentPosition,
            ]}
          >
            <Text
              style={[
                styles.dedicatedAccountManager2,
                styles.dedicatedPosition,
                styles.dedicatedTypo,
              ]}
            >
              Dedicated account manager
            </Text>
            <Image
              style={styles.iconMaterialPerson}
              resizeMode="cover"
              source={require("../assets/icon-materialperson.png")}
            />
          </View>
        </View>
        <View
          style={[styles.rectangleParent6, styles.rectangleParentPosition1]}
        >
          <View style={[styles.groupChild34, styles.groupChildPosition1]} />
          <Text style={[styles.hello15, styles.helloTypo2]}>
            Upgrade to unlock
          </Text>
          <View
            style={[
              styles.dedicatedAccountManagerParent,
              styles.dedicatedParentPosition,
            ]}
          >
            <Text
              style={[
                styles.dedicatedAccountManager2,
                styles.dedicatedPosition,
                styles.dedicatedTypo,
              ]}
            >
              Dedicated account manager
            </Text>
            <Image
              style={styles.iconMaterialPerson}
              resizeMode="cover"
              source={require("../assets/icon-materialperson.png")}
            />
          </View>
        </View>
        <View style={[styles.rectangleParent7, styles.rectangleParentPosition]}>
          <View style={[styles.groupChild34, styles.groupChildPosition1]} />
          <Text style={[styles.hello15, styles.helloTypo2]}>
            Upgrade to unlock
          </Text>
          <View
            style={[
              styles.dedicatedAccountManagerParent1,
              styles.dedicatedParentPosition,
            ]}
          >
            <Text
              style={[
                styles.dedicatedAccountManager5,
                styles.dedicatedPosition,
                styles.dedicatedTypo,
              ]}
            >
              Dedicated account manager
            </Text>
            <Image
              style={styles.iconMaterialPerson}
              resizeMode="cover"
              source={require("../assets/icon-materialperson3.png")}
            />
          </View>
        </View>
        <View style={[styles.rectangleParentPosition, styles.parentPosition2]}>
          <View style={[styles.groupChild34, styles.groupChildPosition1]} />
          <Text style={[styles.hello15, styles.helloTypo2]}>
            Upgrade to unlock
          </Text>
          <View
            style={[
              styles.dedicatedAccountManagerParent1,
              styles.dedicatedParentPosition,
            ]}
          >
            <Text
              style={[
                styles.dedicatedAccountManager5,
                styles.dedicatedPosition,
                styles.dedicatedTypo,
              ]}
            >
              Dedicated account manager
            </Text>
            <Image
              style={styles.iconMaterialPerson}
              resizeMode="cover"
              source={require("../assets/icon-materialperson3.png")}
            />
          </View>
        </View>
        <View style={[styles.rectangleParent9, styles.rectangleParentPosition]}>
          <View style={[styles.groupChild34, styles.groupChildPosition1]} />
          <Text style={[styles.hello15, styles.helloTypo2]}>
            Upgrade to unlock
          </Text>
          <View
            style={[
              styles.dedicatedAccountManagerParent1,
              styles.dedicatedParentPosition,
            ]}
          >
            <Text
              style={[
                styles.dedicatedAccountManager5,
                styles.dedicatedPosition,
                styles.dedicatedTypo,
              ]}
            >
              Dedicated account manager
            </Text>
            <Image
              style={styles.iconMaterialPerson}
              resizeMode="cover"
              source={require("../assets/icon-materialperson3.png")}
            />
          </View>
        </View>
        <View style={[styles.rectangleParent10, styles.rectangleParentLayout]}>
          <View style={[styles.groupChild40, styles.groupChildPosition1]} />
          <Text style={[styles.hello21, styles.helloTypo2]}>
            Additional features
          </Text>
        </View>
        <View style={[styles.rectangleParentLayout, styles.parentPosition2]}>
          <View style={[styles.groupChild40, styles.groupChildPosition1]} />
          <Text style={[styles.hello21, styles.helloTypo2]}>
            Additional features
          </Text>
          <View
            style={[
              styles.rewardsFreePaymentsToCarbParent,
              styles.groupChild22Position,
            ]}
          >
            <Text style={[styles.rewardsFreePaymentsToCarb, styles.allTypo]}>
              <Text style={styles.accountFeatures}>
                <Text style={[styles.accountFeatures1, styles.helloCardTypo]}>
                  Rewards
                </Text>
              </Text>
              <Text style={styles.accountFeatures}>
                <Text style={[styles.accountFeatures1, styles.helloCardTypo]}>
                  {" "}
                </Text>
              </Text>
              <Text style={styles.accountFeatures}>
                <Text style={[styles.accountFeatures1, styles.helloCardTypo]}>
                  Free payments to Carbonyte accounts
                </Text>
              </Text>
              <Text style={styles.accountFeatures}>
                <Text style={[styles.accountFeatures1, styles.helloCardTypo]}>
                  {" "}
                </Text>
              </Text>
              <Text style={styles.accountFeatures}>
                <Text style={[styles.accountFeatures1, styles.helloCardTypo]}>
                  IBANs for global transfers
                </Text>
              </Text>
              <Text style={styles.accountFeatures}>
                <Text style={[styles.accountFeatures1, styles.helloCardTypo]}>
                  {" "}
                </Text>
              </Text>
              <Text style={styles.accountFeatures}>
                <Text style={[styles.accountFeatures1, styles.helloCardTypo]}>
                  Local accounts in GBP and EUR
                </Text>
              </Text>
              <Text style={styles.accountFeatures}>
                <Text style={[styles.accountFeatures1, styles.helloCardTypo]}>
                  {" "}
                </Text>
              </Text>
              <Text style={styles.accountFeatures}>
                <Text style={[styles.accountFeatures1, styles.helloCardTypo]}>
                  Accept payments on your website
                </Text>
              </Text>
              <Text style={styles.accountFeatures}>
                <Text style={[styles.accountFeatures1, styles.helloCardTypo]}>
                  {" "}
                </Text>
              </Text>
              <Text style={styles.accountFeatures}>
                <Text style={[styles.accountFeatures1, styles.helloCardTypo]}>
                  Payment requests with links and QR codes
                </Text>
              </Text>
              <Text style={styles.accountFeatures}>
                <Text style={[styles.accountFeatures1, styles.helloCardTypo]}>
                  {" "}
                </Text>
              </Text>
              <Text style={styles.accountFeatures}>
                <Text style={[styles.accountFeatures1, styles.helloCardTypo]}>
                  Manage recurring payments
                </Text>
              </Text>
              <Text style={styles.accountFeatures}>
                <Text style={[styles.accountFeatures1, styles.helloCardTypo]}>
                  {" "}
                </Text>
              </Text>
              <Text style={styles.accountFeatures}>
                <Text style={[styles.accountFeatures1, styles.helloCardTypo]}>
                  Unlimited team members
                </Text>
              </Text>
              <Text style={styles.accountFeatures}>
                <Text style={[styles.accountFeatures1, styles.helloCardTypo]}>
                  {" "}
                </Text>
              </Text>
              <Text style={styles.accountFeatures}>
                <Text style={[styles.accountFeatures1, styles.helloCardTypo]}>
                  Team member permissions
                </Text>
              </Text>
              <Text style={styles.accountFeatures}>
                <Text style={[styles.accountFeatures1, styles.helloCardTypo]}>
                  {" "}
                </Text>
              </Text>
              <Text style={styles.accountFeatures}>
                <Text style={[styles.accountFeatures1, styles.helloCardTypo]}>
                  Expenses Management
                </Text>
              </Text>
              <Text style={styles.accountFeatures}>
                <Text style={styles.mobileSetUp}>
                  Add members for £5 per month
                </Text>
              </Text>
              <Text style={styles.accountFeatures}>
                <Text style={styles.mobileSetUp}> </Text>
              </Text>
              <Text style={styles.accountFeatures}>
                <Text style={[styles.accountFeatures1, styles.helloCardTypo]}>
                  Automated payroll
                </Text>
              </Text>
              <Text style={styles.accountFeatures}>
                <Text style={styles.mobileSetUp}>
                  Add members for £5 per month
                </Text>
              </Text>
              <Text style={styles.accountFeatures}>
                <Text style={styles.mobileSetUp}> </Text>
              </Text>
              <Text style={styles.accountFeatures}>
                <Text style={[styles.accountFeatures1, styles.helloCardTypo]}>
                  Create and track your invoices
                </Text>
              </Text>
              <Text style={styles.accountFeatures}>
                <Text style={[styles.accountFeatures1, styles.helloCardTypo]}>
                  {" "}
                </Text>
              </Text>
              <Text style={styles.accountFeatures}>
                <Text style={[styles.accountFeatures1, styles.helloCardTypo]}>
                  Connect your company's apps
                </Text>
              </Text>
              <Text style={styles.accountFeatures}>
                <Text style={[styles.accountFeatures1, styles.helloCardTypo]}>
                  {" "}
                </Text>
              </Text>
              <Text style={styles.accountFeatures}>
                <Text style={[styles.accountFeatures1, styles.helloCardTypo]}>
                  Available on the web or via the app
                </Text>
              </Text>
              <Text style={[styles.accountFeatures1, styles.helloCardTypo]} />
            </Text>
            <Image
              style={[styles.iconAwesomeGift, styles.groupChild42Layout]}
              resizeMode="cover"
              source={require("../assets/icon-awesomegift.png")}
            />
            <Image
              style={styles.iconAwesomeExchangeAlt2}
              resizeMode="cover"
              source={require("../assets/icon-awesomeexchangealt.png")}
            />
            <Image
              style={styles.iconAwesomeGlobe2}
              resizeMode="cover"
              source={require("../assets/icon-awesomeglobe.png")}
            />
            <Image
              style={[
                styles.groupChild42,
                styles.iconLayout1,
                styles.groupChild42Layout,
              ]}
              resizeMode="cover"
              source={require("../assets/group-306242.png")}
            />
            <Image
              style={[
                styles.marketplaceFacebookSeeklogoIcon,
                styles.iconLayout1,
              ]}
              resizeMode="cover"
              source={require("../assets/marketplacefacebookseeklogocom.png")}
            />
            <Image
              style={styles.iconAwesomeCoins}
              resizeMode="cover"
              source={require("../assets/icon-awesomecoins.png")}
            />
            <Image
              style={[styles.subtraction12Icon, styles.iconLayout1]}
              resizeMode="cover"
              source={require("../assets/subtraction-12.png")}
            />
            <Image
              style={[styles.union27Icon, styles.iconPosition]}
              resizeMode="cover"
              source={require("../assets/union-27.png")}
            />
            <Image
              style={[styles.union28Icon, styles.iconPosition]}
              resizeMode="cover"
              source={require("../assets/union-27.png")}
            />
            <Image
              style={[
                styles.iconSimpleReadthedocs,
                styles.groupChildPosition,
                styles.iconLayout1,
              ]}
              resizeMode="cover"
              source={require("../assets/icon-simplereadthedocs.png")}
            />
            <Image
              style={[styles.iconMaterialAccountBalance, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/icon-materialaccountbalancewallet.png")}
            />
            <Image
              style={[styles.iconMaterialUndo, styles.statusBarPosition]}
              resizeMode="cover"
              source={require("../assets/icon-materialundo.png")}
            />
            <Image
              style={styles.iconOpenDocument}
              resizeMode="cover"
              source={require("../assets/icon-opendocument.png")}
            />
            <Image
              style={styles.iconIonicMdApps}
              resizeMode="cover"
              source={require("../assets/icon-ionicmdapps.png")}
            />
            <Image
              style={styles.iconAwesomeMobileAlt}
              resizeMode="cover"
              source={require("../assets/icon-awesomemobilealt.png")}
            />
          </View>
        </View>
        <View style={[styles.rectangleParent12, styles.rectangleParentLayout]}>
          <View style={[styles.groupChild40, styles.groupChildPosition1]} />
          <Text style={[styles.hello21, styles.helloTypo2]}>
            Additional features
          </Text>
          <View
            style={[
              styles.rewardsFreePaymentsToCarbParent,
              styles.groupChild22Position,
            ]}
          >
            <Text style={[styles.rewardsFreePaymentsToCarb, styles.allTypo]}>
              <Text style={styles.accountFeatures}>
                <Text style={[styles.accountFeatures1, styles.helloCardTypo]}>
                  Rewards
                </Text>
              </Text>
              <Text style={styles.accountFeatures}>
                <Text style={[styles.accountFeatures1, styles.helloCardTypo]}>
                  {" "}
                </Text>
              </Text>
              <Text style={styles.accountFeatures}>
                <Text style={[styles.accountFeatures1, styles.helloCardTypo]}>
                  Free payments to Carbonyte accounts
                </Text>
              </Text>
              <Text style={styles.accountFeatures}>
                <Text style={[styles.accountFeatures1, styles.helloCardTypo]}>
                  {" "}
                </Text>
              </Text>
              <Text style={styles.accountFeatures}>
                <Text style={[styles.accountFeatures1, styles.helloCardTypo]}>
                  IBANs for global transfers
                </Text>
              </Text>
              <Text style={styles.accountFeatures}>
                <Text style={[styles.accountFeatures1, styles.helloCardTypo]}>
                  {" "}
                </Text>
              </Text>
              <Text style={styles.accountFeatures}>
                <Text style={[styles.accountFeatures1, styles.helloCardTypo]}>
                  Local accounts in GBP and EUR
                </Text>
              </Text>
              <Text style={styles.accountFeatures}>
                <Text style={[styles.accountFeatures1, styles.helloCardTypo]}>
                  {" "}
                </Text>
              </Text>
              <Text style={styles.accountFeatures}>
                <Text style={[styles.accountFeatures1, styles.helloCardTypo]}>
                  Accept payments on your website
                </Text>
              </Text>
              <Text style={styles.accountFeatures}>
                <Text style={[styles.accountFeatures1, styles.helloCardTypo]}>
                  {" "}
                </Text>
              </Text>
              <Text style={styles.accountFeatures}>
                <Text style={[styles.accountFeatures1, styles.helloCardTypo]}>
                  Payment requests with links and QR codes
                </Text>
              </Text>
              <Text style={styles.accountFeatures}>
                <Text style={[styles.accountFeatures1, styles.helloCardTypo]}>
                  {" "}
                </Text>
              </Text>
              <Text style={styles.accountFeatures}>
                <Text style={[styles.accountFeatures1, styles.helloCardTypo]}>
                  Manage recurring payments
                </Text>
              </Text>
              <Text style={styles.accountFeatures}>
                <Text style={[styles.accountFeatures1, styles.helloCardTypo]}>
                  {" "}
                </Text>
              </Text>
              <Text style={styles.accountFeatures}>
                <Text style={[styles.accountFeatures1, styles.helloCardTypo]}>
                  Unlimited team members
                </Text>
              </Text>
              <Text style={styles.accountFeatures}>
                <Text style={[styles.accountFeatures1, styles.helloCardTypo]}>
                  {" "}
                </Text>
              </Text>
              <Text style={styles.accountFeatures}>
                <Text style={[styles.accountFeatures1, styles.helloCardTypo]}>
                  Team member permissions
                </Text>
              </Text>
              <Text style={styles.accountFeatures}>
                <Text style={[styles.accountFeatures1, styles.helloCardTypo]}>
                  {" "}
                </Text>
              </Text>
              <Text style={styles.accountFeatures}>
                <Text style={[styles.accountFeatures1, styles.helloCardTypo]}>
                  Expenses Management
                </Text>
              </Text>
              <Text style={styles.accountFeatures}>
                <Text style={styles.mobileSetUp}>
                  Add members for £5 per month
                </Text>
              </Text>
              <Text style={styles.accountFeatures}>
                <Text style={styles.mobileSetUp}> </Text>
              </Text>
              <Text style={styles.accountFeatures}>
                <Text style={[styles.accountFeatures1, styles.helloCardTypo]}>
                  Automated payroll
                </Text>
              </Text>
              <Text style={styles.accountFeatures}>
                <Text style={styles.mobileSetUp}>
                  Add members for £5 per month
                </Text>
              </Text>
              <Text style={styles.accountFeatures}>
                <Text style={styles.mobileSetUp}> </Text>
              </Text>
              <Text style={styles.accountFeatures}>
                <Text style={[styles.accountFeatures1, styles.helloCardTypo]}>
                  Create and track your invoices
                </Text>
              </Text>
              <Text style={styles.accountFeatures}>
                <Text style={[styles.accountFeatures1, styles.helloCardTypo]}>
                  {" "}
                </Text>
              </Text>
              <Text style={styles.accountFeatures}>
                <Text style={[styles.accountFeatures1, styles.helloCardTypo]}>
                  Connect your company's apps
                </Text>
              </Text>
              <Text style={styles.accountFeatures}>
                <Text style={[styles.accountFeatures1, styles.helloCardTypo]}>
                  {" "}
                </Text>
              </Text>
              <Text style={styles.accountFeatures}>
                <Text style={[styles.accountFeatures1, styles.helloCardTypo]}>
                  Available on the web or via the app
                </Text>
              </Text>
              <Text style={[styles.accountFeatures1, styles.helloCardTypo]} />
            </Text>
            <Image
              style={[styles.iconAwesomeGift, styles.groupChild42Layout]}
              resizeMode="cover"
              source={require("../assets/icon-awesomegift.png")}
            />
            <Image
              style={styles.iconAwesomeExchangeAlt2}
              resizeMode="cover"
              source={require("../assets/icon-awesomeexchangealt.png")}
            />
            <Image
              style={styles.iconAwesomeGlobe2}
              resizeMode="cover"
              source={require("../assets/icon-awesomeglobe.png")}
            />
            <Image
              style={[
                styles.groupChild42,
                styles.iconLayout1,
                styles.groupChild42Layout,
              ]}
              resizeMode="cover"
              source={require("../assets/group-306242.png")}
            />
            <Image
              style={[
                styles.marketplaceFacebookSeeklogoIcon,
                styles.iconLayout1,
              ]}
              resizeMode="cover"
              source={require("../assets/marketplacefacebookseeklogocom.png")}
            />
            <Image
              style={styles.iconAwesomeCoins}
              resizeMode="cover"
              source={require("../assets/icon-awesomecoins.png")}
            />
            <Image
              style={[styles.subtraction12Icon, styles.iconLayout1]}
              resizeMode="cover"
              source={require("../assets/subtraction-12.png")}
            />
            <Image
              style={[styles.union27Icon, styles.iconPosition]}
              resizeMode="cover"
              source={require("../assets/union-27.png")}
            />
            <Image
              style={[styles.union28Icon, styles.iconPosition]}
              resizeMode="cover"
              source={require("../assets/union-27.png")}
            />
            <Image
              style={[
                styles.iconSimpleReadthedocs,
                styles.groupChildPosition,
                styles.iconLayout1,
              ]}
              resizeMode="cover"
              source={require("../assets/icon-simplereadthedocs.png")}
            />
            <Image
              style={[styles.iconMaterialAccountBalance, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/icon-materialaccountbalancewallet.png")}
            />
            <Image
              style={[styles.iconMaterialUndo, styles.statusBarPosition]}
              resizeMode="cover"
              source={require("../assets/icon-materialundo.png")}
            />
            <Image
              style={styles.iconOpenDocument}
              resizeMode="cover"
              source={require("../assets/icon-opendocument.png")}
            />
            <Image
              style={styles.iconIonicMdApps}
              resizeMode="cover"
              source={require("../assets/icon-ionicmdapps.png")}
            />
            <Image
              style={styles.iconAwesomeMobileAlt}
              resizeMode="cover"
              source={require("../assets/icon-awesomemobilealt.png")}
            />
          </View>
        </View>
        <View style={[styles.groupParent10, styles.groupParentPosition]}>
          <View style={styles.rectangleParent13}>
            <View
              style={[
                styles.groupChild45,
                styles.groupChildShadowBox,
                styles.groupChildShadowBox1,
              ]}
            />
            <View
              style={[
                styles.freeMetalCardsPlasticAndParent,
                styles.iconFeatherWifiPosition,
                styles.parentPosition3,
              ]}
            >
              <Text style={[styles.freeMetalCardsPlasticAnd, styles.allTypo]}>
                <Text style={styles.accountFeatures}>
                  <Text style={[styles.accountFeatures1, styles.helloCardTypo]}>
                    2 free Metal cards + plastic and virtual cards for every
                    member
                  </Text>
                </Text>
                <Text style={styles.accountFeatures}>
                  <Text style={styles.mobileSetUp}>
                    £49 per metal card outside of the free allowance
                  </Text>
                </Text>
                <Text style={styles.accountFeatures}>
                  <Text style={[styles.accountFeatures1, styles.helloCardTypo]}>
                    {" "}
                  </Text>
                </Text>
                <Text style={styles.accountFeatures}>
                  <Text style={[styles.accountFeatures1, styles.helloCardTypo]}>
                    50 free international payments
                  </Text>
                </Text>
                <Text style={styles.accountFeatures}>
                  <Text style={styles.a3FeeAppliesPerInternati3}>
                    <Text style={styles.a3Fee2}>
                      A £3 fee applies per international payment outside of the
                      free allowance
                    </Text>
                  </Text>
                </Text>
                <Text style={styles.accountFeatures}>
                  <Text style={styles.a3FeeAppliesPerInternati3}>
                    <Text style={[styles.blankLine56, styles.helloCardTypo]}>
                      {" "}
                    </Text>
                  </Text>
                </Text>
                <Text style={styles.accountFeatures}>
                  <Text style={[styles.blankLine56, styles.helloCardTypo]}>
                    <Text style={styles.freeLocalPayments2}>
                      1,000 free local payments
                    </Text>
                  </Text>
                </Text>
                <Text style={styles.accountFeatures}>
                  <Text style={styles.a3FeeAppliesPerInternati3}>
                    <Text style={styles.a3Fee2}>
                      A £0.20 fee applies per local payment outside of the free
                      allowance
                    </Text>
                  </Text>
                </Text>
                <Text style={styles.accountFeatures}>
                  <Text style={styles.a3FeeAppliesPerInternati3}>
                    <Text style={[styles.blankLine56, styles.helloCardTypo]}>
                      {" "}
                    </Text>
                  </Text>
                </Text>
                <Text style={styles.accountFeatures}>
                  <Text style={[styles.blankLine56, styles.helloCardTypo]}>
                    <Text style={styles.freeLocalPayments2}>
                      Exchange £50k at the interbank rate
                    </Text>
                  </Text>
                </Text>
                <Text style={styles.accountFeatures}>
                  <Text style={styles.a3FeeAppliesPerInternati3}>
                    <Text style={styles.a3Fee2}>
                      A 0.4% markup applies for each FX outside of the free
                      allowance
                    </Text>
                  </Text>
                </Text>
                <Text style={styles.accountFeatures}>
                  <Text style={styles.a3FeeAppliesPerInternati3}>
                    <Text style={[styles.blankLine56, styles.helloCardTypo]}>
                      {" "}
                    </Text>
                  </Text>
                </Text>
                <Text style={styles.accountFeatures}>
                  <Text style={[styles.blankLine56, styles.helloCardTypo]}>
                    <Text style={styles.freeLocalPayments2}>
                      Payment acceptance
                    </Text>
                  </Text>
                </Text>
                <Text style={styles.accountFeatures}>
                  <Text style={styles.mobileSetUp}>
                    Online card payments, card reader payments and more. Fees
                    from 0.8% + £0.02 apply
                  </Text>
                </Text>
                <Text style={styles.accountFeatures}>
                  <Text style={styles.mobileSetUp}></Text>
                  <Text>Crypto exchange</Text>
                </Text>
                <Text style={styles.accountFeatures}>
                  <Text style={styles.mobileSetUp}>
                    A 0.99% fee applies when buying and selling crypto
                  </Text>
                </Text>
                <Text style={styles.accountFeatures}>
                  <Text style={styles.mobileSetUp}> </Text>
                </Text>
                <Text style={styles.accountFeatures}>
                  <Text style={[styles.accountFeatures1, styles.helloCardTypo]}>
                    24/7 support
                  </Text>
                </Text>
              </Text>
              <Image
                style={[styles.iconIonicIosCard, styles.iconPosition1]}
                resizeMode="cover"
                source={require("../assets/icon-ionicioscard.png")}
              />
              <Image
                style={styles.iconAwesomeGlobe4}
                resizeMode="cover"
                source={require("../assets/icon-awesomeglobe4.png")}
              />
              <Image
                style={[styles.groupChild46, styles.groupChildPosition]}
                resizeMode="cover"
                source={require("../assets/icon-awesomeexchangealt.png")}
              />
              <Image
                style={[styles.groupChild47, styles.groupChildPosition]}
                resizeMode="cover"
                source={require("../assets/group-30982.png")}
              />
              <Image
                style={[styles.iconMaterialAccountBalance2, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/icon-materialaccountbalancewallet.png")}
              />
              <Image
                style={styles.groupChild48}
                resizeMode="cover"
                source={require("../assets/group-30988.png")}
              />
              <Image
                style={styles.union29Icon}
                resizeMode="cover"
                source={require("../assets/union-29.png")}
              />
            </View>
          </View>
          <Text style={[styles.hello24, styles.helloTypo2]}>
            Get more from your plan
          </Text>
        </View>
        <View style={[styles.groupParentPosition, styles.parentPosition2]}>
          <View style={styles.rectangleParent13}>
            <View
              style={[
                styles.groupChild45,
                styles.groupChildShadowBox,
                styles.groupChildShadowBox1,
              ]}
            />
            <View
              style={[
                styles.freeMetalCardsPlasticAndParent,
                styles.iconFeatherWifiPosition,
                styles.parentPosition3,
              ]}
            >
              <Text style={[styles.freeMetalCardsPlasticAnd, styles.allTypo]}>
                <Text style={styles.accountFeatures}>
                  <Text style={[styles.accountFeatures1, styles.helloCardTypo]}>
                    2 free Metal cards + plastic and virtual cards for every
                    member
                  </Text>
                </Text>
                <Text style={styles.accountFeatures}>
                  <Text style={styles.mobileSetUp}>
                    £49 per metal card outside of the free allowance
                  </Text>
                </Text>
                <Text style={styles.accountFeatures}>
                  <Text style={[styles.accountFeatures1, styles.helloCardTypo]}>
                    {" "}
                  </Text>
                </Text>
                <Text style={styles.accountFeatures}>
                  <Text style={[styles.accountFeatures1, styles.helloCardTypo]}>
                    50 free international payments
                  </Text>
                </Text>
                <Text style={styles.accountFeatures}>
                  <Text style={styles.a3FeeAppliesPerInternati3}>
                    <Text style={styles.a3Fee2}>
                      A £3 fee applies per international payment outside of the
                      free allowance
                    </Text>
                  </Text>
                </Text>
                <Text style={styles.accountFeatures}>
                  <Text style={styles.a3FeeAppliesPerInternati3}>
                    <Text style={[styles.blankLine56, styles.helloCardTypo]}>
                      {" "}
                    </Text>
                  </Text>
                </Text>
                <Text style={styles.accountFeatures}>
                  <Text style={[styles.blankLine56, styles.helloCardTypo]}>
                    <Text style={styles.freeLocalPayments2}>
                      1,000 free local payments
                    </Text>
                  </Text>
                </Text>
                <Text style={styles.accountFeatures}>
                  <Text style={styles.a3FeeAppliesPerInternati3}>
                    <Text style={styles.a3Fee2}>
                      A £0.20 fee applies per local payment outside of the free
                      allowance
                    </Text>
                  </Text>
                </Text>
                <Text style={styles.accountFeatures}>
                  <Text style={styles.a3FeeAppliesPerInternati3}>
                    <Text style={[styles.blankLine56, styles.helloCardTypo]}>
                      {" "}
                    </Text>
                  </Text>
                </Text>
                <Text style={styles.accountFeatures}>
                  <Text style={[styles.blankLine56, styles.helloCardTypo]}>
                    <Text style={styles.freeLocalPayments2}>
                      Exchange £50k at the interbank rate
                    </Text>
                  </Text>
                </Text>
                <Text style={styles.accountFeatures}>
                  <Text style={styles.a3FeeAppliesPerInternati3}>
                    <Text style={styles.a3Fee2}>
                      A 0.4% markup applies for each FX outside of the free
                      allowance
                    </Text>
                  </Text>
                </Text>
                <Text style={styles.accountFeatures}>
                  <Text style={styles.a3FeeAppliesPerInternati3}>
                    <Text style={[styles.blankLine56, styles.helloCardTypo]}>
                      {" "}
                    </Text>
                  </Text>
                </Text>
                <Text style={styles.accountFeatures}>
                  <Text style={[styles.blankLine56, styles.helloCardTypo]}>
                    <Text style={styles.freeLocalPayments2}>
                      Payment acceptance
                    </Text>
                  </Text>
                </Text>
                <Text style={styles.accountFeatures}>
                  <Text style={styles.mobileSetUp}>
                    Online card payments, card reader payments and more. Fees
                    from 0.8% + £0.02 apply
                  </Text>
                </Text>
                <Text style={styles.accountFeatures}>
                  <Text style={styles.mobileSetUp}></Text>
                  <Text>Crypto exchange</Text>
                </Text>
                <Text style={styles.accountFeatures}>
                  <Text style={styles.mobileSetUp}>
                    A 0.99% fee applies when buying and selling crypto
                  </Text>
                </Text>
                <Text style={styles.accountFeatures}>
                  <Text style={styles.mobileSetUp}> </Text>
                </Text>
                <Text style={styles.accountFeatures}>
                  <Text style={[styles.accountFeatures1, styles.helloCardTypo]}>
                    24/7 support
                  </Text>
                </Text>
              </Text>
              <Image
                style={[styles.iconIonicIosCard, styles.iconPosition1]}
                resizeMode="cover"
                source={require("../assets/icon-ionicioscard.png")}
              />
              <Image
                style={styles.iconAwesomeGlobe4}
                resizeMode="cover"
                source={require("../assets/icon-awesomeglobe4.png")}
              />
              <Image
                style={[styles.groupChild46, styles.groupChildPosition]}
                resizeMode="cover"
                source={require("../assets/icon-awesomeexchangealt.png")}
              />
              <Image
                style={[styles.groupChild47, styles.groupChildPosition]}
                resizeMode="cover"
                source={require("../assets/group-30982.png")}
              />
              <Image
                style={[styles.iconMaterialAccountBalance2, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/icon-materialaccountbalancewallet.png")}
              />
              <Image
                style={styles.groupChild48}
                resizeMode="cover"
                source={require("../assets/group-30988.png")}
              />
              <Image
                style={styles.union29Icon}
                resizeMode="cover"
                source={require("../assets/union-29.png")}
              />
            </View>
          </View>
          <Text style={[styles.hello24, styles.helloTypo2]}>
            Get more from your plan
          </Text>
        </View>
        <View style={[styles.groupParent12, styles.groupParentPosition]}>
          <View style={styles.rectangleParent13}>
            <View
              style={[
                styles.groupChild45,
                styles.groupChildShadowBox,
                styles.groupChildShadowBox1,
              ]}
            />
            <View
              style={[
                styles.freeMetalCardsPlasticAndParent,
                styles.iconFeatherWifiPosition,
                styles.parentPosition3,
              ]}
            >
              <Text style={[styles.freeMetalCardsPlasticAnd, styles.allTypo]}>
                <Text style={styles.accountFeatures}>
                  <Text style={[styles.accountFeatures1, styles.helloCardTypo]}>
                    2 free Metal cards + plastic and virtual cards for every
                    member
                  </Text>
                </Text>
                <Text style={styles.accountFeatures}>
                  <Text style={styles.mobileSetUp}>
                    £49 per metal card outside of the free allowance
                  </Text>
                </Text>
                <Text style={styles.accountFeatures}>
                  <Text style={[styles.accountFeatures1, styles.helloCardTypo]}>
                    {" "}
                  </Text>
                </Text>
                <Text style={styles.accountFeatures}>
                  <Text style={[styles.accountFeatures1, styles.helloCardTypo]}>
                    50 free international payments
                  </Text>
                </Text>
                <Text style={styles.accountFeatures}>
                  <Text style={styles.a3FeeAppliesPerInternati3}>
                    <Text style={styles.a3Fee2}>
                      A £3 fee applies per international payment outside of the
                      free allowance
                    </Text>
                  </Text>
                </Text>
                <Text style={styles.accountFeatures}>
                  <Text style={styles.a3FeeAppliesPerInternati3}>
                    <Text style={[styles.blankLine56, styles.helloCardTypo]}>
                      {" "}
                    </Text>
                  </Text>
                </Text>
                <Text style={styles.accountFeatures}>
                  <Text style={[styles.blankLine56, styles.helloCardTypo]}>
                    <Text style={styles.freeLocalPayments2}>
                      1,000 free local payments
                    </Text>
                  </Text>
                </Text>
                <Text style={styles.accountFeatures}>
                  <Text style={styles.a3FeeAppliesPerInternati3}>
                    <Text style={styles.a3Fee2}>
                      A £0.20 fee applies per local payment outside of the free
                      allowance
                    </Text>
                  </Text>
                </Text>
                <Text style={styles.accountFeatures}>
                  <Text style={styles.a3FeeAppliesPerInternati3}>
                    <Text style={[styles.blankLine56, styles.helloCardTypo]}>
                      {" "}
                    </Text>
                  </Text>
                </Text>
                <Text style={styles.accountFeatures}>
                  <Text style={[styles.blankLine56, styles.helloCardTypo]}>
                    <Text style={styles.freeLocalPayments2}>
                      Exchange £50k at the interbank rate
                    </Text>
                  </Text>
                </Text>
                <Text style={styles.accountFeatures}>
                  <Text style={styles.a3FeeAppliesPerInternati3}>
                    <Text style={styles.a3Fee2}>
                      A 0.4% markup applies for each FX outside of the free
                      allowance
                    </Text>
                  </Text>
                </Text>
                <Text style={styles.accountFeatures}>
                  <Text style={styles.a3FeeAppliesPerInternati3}>
                    <Text style={[styles.blankLine56, styles.helloCardTypo]}>
                      {" "}
                    </Text>
                  </Text>
                </Text>
                <Text style={styles.accountFeatures}>
                  <Text style={[styles.blankLine56, styles.helloCardTypo]}>
                    <Text style={styles.freeLocalPayments2}>
                      Payment acceptance
                    </Text>
                  </Text>
                </Text>
                <Text style={styles.accountFeatures}>
                  <Text style={styles.mobileSetUp}>
                    Online card payments, card reader payments and more. Fees
                    from 0.8% + £0.02 apply
                  </Text>
                </Text>
                <Text style={styles.accountFeatures}>
                  <Text style={styles.mobileSetUp}></Text>
                  <Text>Crypto exchange</Text>
                </Text>
                <Text style={styles.accountFeatures}>
                  <Text style={styles.mobileSetUp}>
                    A 0.99% fee applies when buying and selling crypto
                  </Text>
                </Text>
                <Text style={styles.accountFeatures}>
                  <Text style={styles.mobileSetUp}> </Text>
                </Text>
                <Text style={styles.accountFeatures}>
                  <Text style={[styles.accountFeatures1, styles.helloCardTypo]}>
                    24/7 support
                  </Text>
                </Text>
              </Text>
              <Image
                style={[styles.iconIonicIosCard, styles.iconPosition1]}
                resizeMode="cover"
                source={require("../assets/icon-ionicioscard.png")}
              />
              <Image
                style={styles.iconAwesomeGlobe4}
                resizeMode="cover"
                source={require("../assets/icon-awesomeglobe4.png")}
              />
              <Image
                style={[styles.groupChild46, styles.groupChildPosition]}
                resizeMode="cover"
                source={require("../assets/icon-awesomeexchangealt.png")}
              />
              <Image
                style={[styles.groupChild47, styles.groupChildPosition]}
                resizeMode="cover"
                source={require("../assets/group-30982.png")}
              />
              <Image
                style={[styles.iconMaterialAccountBalance2, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/icon-materialaccountbalancewallet.png")}
              />
              <Image
                style={styles.groupChild48}
                resizeMode="cover"
                source={require("../assets/group-30988.png")}
              />
              <Image
                style={styles.union29Icon}
                resizeMode="cover"
                source={require("../assets/union-29.png")}
              />
            </View>
          </View>
          <Text style={[styles.hello24, styles.helloTypo2]}>
            Get more from your plan
          </Text>
        </View>
        <View style={styles.component20891Parent}>
          <View style={styles.groupParent}>
            <View style={styles.rectangleParent16}>
              <View style={styles.groupChild57} />
              <View style={styles.maskGroup236} />
            </View>
          </View>
          <Text style={[styles.hello27, styles.helloTypo]}>Continue</Text>
        </View>
        <View style={[styles.parentPosition, styles.parentPosition2]}>
          <View style={styles.groupParent}>
            <View style={styles.rectangleParent16}>
              <View style={styles.groupChild57} />
              <View style={styles.maskGroup236} />
            </View>
          </View>
          <Text style={[styles.hello27, styles.helloTypo]}>Continue</Text>
        </View>
        <View style={[styles.component20893Parent, styles.parentPosition]}>
          <View style={styles.groupParent}>
            <View style={styles.rectangleParent16}>
              <View style={styles.groupChild57} />
              <View style={styles.maskGroup236} />
            </View>
          </View>
          <Text style={[styles.hello27, styles.helloTypo]}>Continue</Text>
        </View>
        <Image
          style={[styles.iconFeatherArrowLeft, styles.hello14Position]}
          resizeMode="cover"
          source={require("../assets/icon-featherarrowleft.png")}
        />
      </View>
      <Text
        style={[styles.hello30, styles.mt10, styles.ml27, styles.helloTypo1]}
      >
        Choose Cards
      </Text>
      <View style={[styles.lineViewLayout, styles.mt15]} />
      <View style={[styles.iconFeatherArrowLeftWrapper, styles.mt_2727]}>
        <Image
          style={styles.iconFeatherArrowLeft1}
          resizeMode="cover"
          source={require("../assets/icon-featherarrowleft.png")}
        />
      </View>
      <View style={[styles.component20894Parent, styles.mt_1344, styles.ml25]}>
        <View style={styles.groupParent}>
          <View style={styles.rectangleParent16}>
            <View style={styles.groupChild57} />
            <View style={styles.maskGroup236} />
          </View>
        </View>
        <Text style={[styles.hello31, styles.helloTypo]}>Continue</Text>
      </View>
      <View
        style={[
          styles.homeIndicator3,
          styles.mt36,
          styles.ml121,
          styles.homeLayout,
        ]}
      />
      <View style={[styles.component2354, styles.mt39, styles.ml29]}>
        <Text style={styles.hello32}>Standard</Text>
        <Pressable
          style={styles.hello33}
          onPress={() => navigation.navigate("ChooseCardsPremium")}
        >
          <Text style={styles.premium}>Premium</Text>
        </Pressable>
        <Text
          style={[styles.hello34, styles.hello34Position, styles.helloTypo4]}
        >
          Elite
        </Text>
      </View>
      <View style={[styles.statusBarBlack, styles.mt10]}>
        <View style={[styles.rectangle, styles.groupChildShadowBox]} />
        <View style={[styles.statusBar, styles.statusBarPosition]}>
          <View style={styles.time}>
            <Text style={styles.text28}>9:41</Text>
          </View>
          <Image
            style={[styles.batteryIcon, styles.networkPosition]}
            resizeMode="cover"
            source={require("../assets/icon-awesomebatterythreequarters.png")}
          />
          <Image
            style={styles.wifiIcon}
            resizeMode="cover"
            source={require("../assets/icon-awesomewifi.png")}
          />
          <View style={[styles.network, styles.networkPosition]}>
            <View style={[styles.networkChild, styles.networkChildLayout]} />
            <View style={[styles.networkItem, styles.networkChildLayout]} />
            <View style={[styles.networkInner, styles.networkChildLayout]} />
            <View style={[styles.networkChild1, styles.networkChildLayout]} />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mt_10: {
    marginTop: GlobalStyles.Margin.margin_38xs,
  },
  mt30: {
    marginTop: GlobalStyles.Margin.margin_sm,
  },
  ml_724: {
    marginLeft: -724,
  },
  mt288: {
    marginTop: GlobalStyles.Margin.margin_90xl,
  },
  ml_2414: {
    marginLeft: GlobalStyles.Margin.margin_96xs,
  },
  mt10: {
    marginTop: GlobalStyles.Margin.margin_24xs,
  },
  ml27: {
    marginLeft: GlobalStyles.Margin.margin_4xs,
  },
  mt15: {
    marginTop: GlobalStyles.Margin.margin_18xs,
  },
  mt_2727: {
    marginTop: -2727,
  },
  mt_1344: {
    marginTop: GlobalStyles.Margin.margin_94xs,
  },
  ml25: {
    marginLeft: GlobalStyles.Margin.margin_7xs,
  },
  mt36: {
    marginTop: GlobalStyles.Margin.margin_6xl,
  },
  ml121: {
    marginLeft: GlobalStyles.Margin.margin_54xl,
  },
  mt39: {
    marginTop: GlobalStyles.Margin.margin_9xl,
  },
  ml29: {
    marginLeft: GlobalStyles.Margin.margin_xs,
  },
  helloTypo4: {
    color: GlobalStyles.Color.blue,
    textAlign: "left",
    fontFamily: GlobalStyles.FontFamily.helvetica,
    fontWeight: "700",
    lineHeight: 20,
  },
  helloPosition2: {
    marginTop: -580.52,
    color: GlobalStyles.Color.blue,
    fontSize: GlobalStyles.FontSize.size_7xl,
    top: "50%",
    position: "absolute",
  },
  helloPosition1: {
    marginTop: -550.52,
    color: GlobalStyles.Color.indigo,
    textAlign: "left",
    fontFamily: GlobalStyles.FontFamily.helvetica,
    lineHeight: 20,
    fontSize: GlobalStyles.FontSize.size_7xl,
    top: "50%",
    position: "absolute",
  },
  groupChildLayout: {
    height: 1393,
    position: "absolute",
  },
  groupChildShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    right: 0,
    left: 0,
    backgroundColor: GlobalStyles.Color.white,
  },
  groupChildShadowBox1: {
    elevation: 20,
    shadowRadius: 20,
    shadowColor: "rgba(1, 1, 253, 0.1)",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    borderRadius: GlobalStyles.Border.br_5xl,
  },
  paymentsLayout: {
    whiteSpace: "pre-wrap",
    lineHeight: 20,
  },
  allTypo: {
    fontSize: GlobalStyles.FontSize.size_base,
    textAlign: "left",
  },
  payPosition: {
    left: 54,
    fontSize: GlobalStyles.FontSize.size_base,
    position: "absolute",
  },
  helloCardTypo: {
    fontWeight: "700",
    fontFamily: GlobalStyles.FontFamily.helvetica,
  },
  perksCardPosition: {
    left: 53,
    fontSize: GlobalStyles.FontSize.size_base,
    textAlign: "left",
    top: "50%",
    position: "absolute",
  },
  iconPosition4: {
    left: 22,
    height: 15,
    width: 15,
    position: "absolute",
  },
  groupPosition2: {
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
  dedicatedTypo: {
    marginTop: -8,
    fontFamily: GlobalStyles.FontFamily.helvetica,
    fontWeight: "700",
  },
  paymentsSpaceBlock: {
    marginTop: -28,
    lineHeight: 20,
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
    fontSize: GlobalStyles.FontSize.size_base,
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
  groupIconLayout: {
    overflow: "hidden",
    maxWidth: "100%",
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
  iconPosition3: {
    top: 439,
    height: 15,
    width: 15,
    position: "absolute",
  },
  iconPosition2: {
    top: 967,
    height: 15,
    width: 15,
    position: "absolute",
  },
  groupParentPosition2: {
    height: 403,
    width: 208,
    top: 132,
    left: "50%",
    position: "absolute",
  },
  groupParentPosition1: {
    top: 59,
    right: 0,
    left: 0,
    position: "absolute",
  },
  groupPosition: {
    bottom: 1,
    position: "absolute",
  },
  groupPosition1: {
    right: 1,
    left: 1,
    top: 1,
    overflow: "hidden",
    maxWidth: "100%",
  },
  maskGroup238Position: {
    bottom: -59,
    right: -59,
    left: 1,
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  historyTypo: {
    color: GlobalStyles.Color.purple,
    textAlign: "left",
    fontFamily: GlobalStyles.FontFamily.helvetica,
    top: "50%",
    position: "absolute",
  },
  hello34Position: {
    right: -1,
    top: 1,
    position: "absolute",
  },
  textTypo: {
    fontSize: GlobalStyles.FontSize.size_6xs,
    marginTop: 16.58,
    letterSpacing: 1,
    color: GlobalStyles.Color.gray_800,
    textAlign: "left",
    fontFamily: GlobalStyles.FontFamily.helvetica,
    fontWeight: "700",
    top: "50%",
    position: "absolute",
  },
  groupChild22Position: {
    bottom: 19,
    position: "absolute",
  },
  iconFeatherWifiPosition: {
    left: 17,
    position: "absolute",
  },
  helloSpaceBlock2: {
    marginTop: -201.5,
    fontSize: GlobalStyles.FontSize.size_2xl,
    color: GlobalStyles.Color.indigo,
  },
  helloTypo3: {
    fontSize: GlobalStyles.FontSize.size_6xl,
    color: GlobalStyles.Color.blue,
  },
  helloSpaceBlock1: {
    marginTop: 174.5,
    fontSize: GlobalStyles.FontSize.size_6xl,
  },
  helloPosition: {
    left: 68,
    textAlign: "left",
    fontFamily: GlobalStyles.FontFamily.helvetica,
    fontWeight: "700",
    lineHeight: 20,
    top: "50%",
    position: "absolute",
  },
  homePosition: {
    height: 5,
    marginTop: -615.5,
    width: 134,
    top: "50%",
    position: "absolute",
  },
  homeLayout: {
    backgroundColor: GlobalStyles.Color.black,
    borderRadius: GlobalStyles.Border.br_8xl,
    height: 5,
  },
  helloTypo2: {
    fontSize: GlobalStyles.FontSize.size_xl,
    color: GlobalStyles.Color.indigo,
    textAlign: "left",
    fontFamily: GlobalStyles.FontFamily.helvetica,
    top: "50%",
    position: "absolute",
  },
  helloSpaceBlock: {
    marginTop: -828.5,
    fontSize: GlobalStyles.FontSize.size_xl,
  },
  helloTypo1: {
    fontFamily: GlobalStyles.FontFamily.typoGrotesk,
    lineHeight: 30,
    color: GlobalStyles.Color.indigo,
    textAlign: "left",
    fontWeight: "700",
  },
  hello14Position: {
    left: 27,
    position: "absolute",
  },
  lineViewLayout: {
    height: 2,
    width: 376,
    borderTopWidth: 1,
    borderColor: "#fff",
    borderStyle: "solid",
  },
  findTypo: {
    width: 303,
    textAlign: "center",
    lineHeight: 12,
    fontSize: GlobalStyles.FontSize.size_3xs,
    bottom: 221,
    color: GlobalStyles.Color.gray_800,
    fontFamily: GlobalStyles.FontFamily.helvetica,
    position: "absolute",
  },
  parentPosition2: {
    marginLeft: -150.5,
    left: "50%",
  },
  rectangleParentLayout1: {
    marginTop: -770.5,
    height: 221,
    width: 326,
  },
  rectangleParentPosition2: {
    height: 221,
    top: "50%",
    position: "absolute",
  },
  parentPosition1: {
    left: 20,
    position: "absolute",
  },
  parentPosition3: {
    right: 12,
    top: 20,
  },
  dedicatedPosition: {
    left: 28,
    fontSize: GlobalStyles.FontSize.size_base,
    textAlign: "left",
    top: "50%",
    position: "absolute",
  },
  iconPosition1: {
    top: 4,
    height: 12,
    position: "absolute",
  },
  rectangleParentPosition1: {
    height: 89,
    marginTop: 147.5,
    width: 326,
    top: "50%",
    position: "absolute",
  },
  groupChildPosition1: {
    borderRadius: GlobalStyles.Border.br_5xl,
    right: 0,
    left: 0,
    top: "50%",
    position: "absolute",
    backgroundColor: GlobalStyles.Color.white,
  },
  dedicatedParentPosition: {
    marginTop: 9.5,
    left: 20,
    height: 16,
    top: "50%",
    position: "absolute",
  },
  rectangleParentPosition: {
    marginTop: 283.5,
    height: 89,
    width: 326,
    top: "50%",
    position: "absolute",
  },
  rectangleParentLayout: {
    height: 673,
    bottom: 278,
    width: 326,
    position: "absolute",
  },
  groupChild42Layout: {
    height: 14,
    position: "absolute",
  },
  iconLayout1: {
    width: 13,
    top: "50%",
  },
  iconPosition: {
    width: 20,
    height: 14,
    left: 0,
    top: "50%",
    position: "absolute",
  },
  groupChildPosition: {
    left: 3,
    position: "absolute",
  },
  iconLayout: {
    height: 13,
    width: 14,
    top: "50%",
    position: "absolute",
  },
  statusBarPosition: {
    left: 15,
    top: "50%",
    position: "absolute",
  },
  groupParentPosition: {
    height: 616,
    marginTop: -504.5,
    width: 326,
    top: "50%",
    position: "absolute",
  },
  helloTypo: {
    textTransform: "uppercase",
    lineHeight: 17,
    fontSize: GlobalStyles.FontSize.size_lg,
    left: "38.04%",
    top: "36.67%",
    textAlign: "left",
    fontFamily: GlobalStyles.FontFamily.helvetica,
    position: "absolute",
  },
  parentPosition: {
    marginTop: -611.5,
    height: 60,
    width: 326,
    top: "50%",
    position: "absolute",
  },
  networkPosition: {
    height: 11,
    marginTop: -3,
    top: "50%",
    position: "absolute",
  },
  networkChildLayout: {
    width: 3,
    backgroundColor: GlobalStyles.Color.gray_1400,
    borderRadius: GlobalStyles.Border.br_7xs,
    bottom: 0,
    position: "absolute",
  },
  chooseCardsEliteChild: {
    height: 2741,
    width: 375,
    backgroundColor: GlobalStyles.Color.gray_300,
  },
  hello: {
    left: 93,
    textAlign: "left",
    fontSize: GlobalStyles.FontSize.size_7xl,
    top: "50%",
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
    fontSize: GlobalStyles.FontSize.size_7xl,
    top: "50%",
  },
  hello5: {
    left: 877,
    textAlign: "left",
    fontSize: GlobalStyles.FontSize.size_7xl,
    top: "50%",
  },
  groupChild: {
    marginTop: -696.5,
    top: "50%",
  },
  accountFeatures1: {
    color: GlobalStyles.Color.indigo,
    fontFamily: GlobalStyles.FontFamily.helvetica,
  },
  accountFeatures: {
    margin: GlobalStyles.Margin.margin_33xs,
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
  },
  accessToGeniusMarketPlace: {
    marginTop: 356.5,
    width: 267,
    color: GlobalStyles.Color.indigo,
    fontFamily: GlobalStyles.FontFamily.helvetica,
  },
  manageSubscriptions: {
    marginTop: 386.5,
    width: 267,
    color: GlobalStyles.Color.indigo,
    fontFamily: GlobalStyles.FontFamily.helvetica,
    top: "50%",
  },
  setSpendingLimitsPerCardO: {
    marginTop: 416.5,
    width: 267,
    color: GlobalStyles.Color.indigo,
    fontFamily: GlobalStyles.FontFamily.helvetica,
  },
  realtimeOverviewOfAllSpend: {
    marginTop: 446.5,
    width: 267,
    color: GlobalStyles.Color.indigo,
    fontFamily: GlobalStyles.FontFamily.helvetica,
    top: "50%",
  },
  pdfAndCsvStatements: {
    marginTop: 480.5,
    width: 267,
    color: GlobalStyles.Color.indigo,
    fontFamily: GlobalStyles.FontFamily.helvetica,
  },
  cardPaymentsForeignExFee: {
    marginTop: 514.5,
    width: 253,
    color: GlobalStyles.Color.indigo,
    fontFamily: GlobalStyles.FontFamily.helvetica,
    lineHeight: 20,
  },
  invoicePaymentsForeignExFe: {
    marginTop: 564.5,
    left: 52,
    width: 267,
    color: GlobalStyles.Color.indigo,
    fontFamily: GlobalStyles.FontFamily.helvetica,
    lineHeight: 20,
    top: "50%",
    position: "absolute",
  },
  discountsAndPerksOnEnviro: {
    marginTop: 617.5,
    width: 246,
    color: GlobalStyles.Color.indigo,
    fontFamily: GlobalStyles.FontFamily.helvetica,
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
    lineHeight: 20,
  },
  transactionFee1ForConver: {
    marginTop: 221.5,
    width: 267,
    color: GlobalStyles.Color.indigo,
    fontFamily: GlobalStyles.FontFamily.helvetica,
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
    lineHeight: 20,
  },
  geniusMarketPlace: {
    marginTop: 91.5,
    width: 267,
    color: GlobalStyles.Color.indigo,
    fontFamily: GlobalStyles.FontFamily.helvetica,
    lineHeight: 20,
  },
  iconAwesomeCheckCircle: {
    top: 30,
    height: 15,
    width: 15,
  },
  iconAwesomeCheckCircle1: {
    height: 15,
    width: 15,
    top: 201,
  },
  iconAwesomeCheckCircle2: {
    top: 356,
    height: 15,
    width: 15,
  },
  iconAwesomeCheckCircle3: {
    top: 490,
    height: 15,
    width: 15,
  },
  iconAwesomeCheckCircle4: {
    top: 634,
    height: 15,
    width: 15,
  },
  iconAwesomeCheckCircle5: {
    top: 693,
    height: 15,
    width: 15,
  },
  iconAwesomeCheckCircle6: {
    top: 747,
    height: 15,
    width: 15,
  },
  iconAwesomeCheckCircle7: {
    top: 788,
    height: 15,
    width: 15,
  },
  iconAwesomeCheckCircle8: {
    top: 828,
    height: 15,
    width: 15,
  },
  iconAwesomeCheckCircle9: {
    top: 879,
    height: 15,
    width: 15,
  },
  iconAwesomeCheckCircle10: {
    top: 919,
    height: 15,
    width: 15,
  },
  iconAwesomeCheckCircle11: {
    top: 954,
    height: 15,
    width: 15,
  },
  iconAwesomeCheckCircle12: {
    top: 989,
    height: 15,
    width: 15,
  },
  iconAwesomeCheckCircle13: {
    top: 1024,
    height: 15,
    width: 15,
  },
  iconAwesomeCheckCircle14: {
    top: 1054,
    height: 15,
    width: 15,
  },
  iconAwesomeCheckCircle15: {
    top: 1083,
    height: 15,
    width: 15,
  },
  iconAwesomeCheckCircle16: {
    top: 1113,
    height: 15,
    width: 15,
  },
  iconAwesomeCheckCircle17: {
    top: 1143,
    height: 15,
    width: 15,
  },
  iconAwesomeCheckCircle18: {
    top: 1178,
    height: 15,
    width: 15,
  },
  iconAwesomeCheckCircle19: {
    top: 1211,
    height: 15,
    width: 15,
  },
  iconAwesomeCheckCircle20: {
    top: 1261,
    height: 15,
    width: 15,
  },
  iconAwesomeCheckCircle21: {
    top: 1314,
    height: 15,
    width: 15,
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
    left: 0,
    color: GlobalStyles.Color.indigo,
    top: "50%",
    position: "absolute",
  },
  allEssentialFeaturesWrapper: {
    height: 16,
    top: 20,
    left: 48,
  },
  paymentsDomesticTransfer: {
    width: 267,
    left: 0,
    top: "50%",
    position: "absolute",
  },
  paymentsDomesticTransferWrapper: {
    top: 76,
    height: 56,
  },
  cardsAddedExpenseCardsWit: {
    width: 270,
    left: 0,
    top: "50%",
    position: "absolute",
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
    left: 0,
    color: GlobalStyles.Color.indigo,
    top: "50%",
    position: "absolute",
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
    top: "50%",
  },
  plant10TreesAMonth: {
    width: 263,
    color: GlobalStyles.Color.indigo,
    fontFamily: GlobalStyles.FontFamily.helvetica,
  },
  simOnlyDataplanWith4gbDat: {
    marginTop: 93,
    width: 263,
    color: GlobalStyles.Color.indigo,
    fontFamily: GlobalStyles.FontFamily.helvetica,
    top: "50%",
  },
  openApiAccess: {
    marginTop: 129,
    width: 263,
    color: GlobalStyles.Color.indigo,
    fontFamily: GlobalStyles.FontFamily.helvetica,
    top: "50%",
  },
  multipleUserControl: {
    marginTop: 165,
    width: 263,
    color: GlobalStyles.Color.indigo,
    fontFamily: GlobalStyles.FontFamily.helvetica,
    top: "50%",
  },
  automaticPayroll: {
    marginTop: 202,
    width: 263,
    color: GlobalStyles.Color.indigo,
    fontFamily: GlobalStyles.FontFamily.helvetica,
    top: "50%",
  },
  cardPaymentsForeignExFee2: {
    marginTop: 238,
    width: 263,
    color: GlobalStyles.Color.indigo,
    fontFamily: GlobalStyles.FontFamily.helvetica,
    top: "50%",
  },
  invoicePaymentsForeignExFe2: {
    width: 263,
    color: GlobalStyles.Color.indigo,
    fontFamily: GlobalStyles.FontFamily.helvetica,
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
    maxHeight: "100%",
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    position: "absolute",
  },
  groupIcon: {
    height: "6.35%",
    width: "49.25%",
    top: "-62.13%",
    right: "53.94%",
    bottom: "155.78%",
    left: "-3.18%",
    maxHeight: "100%",
    position: "absolute",
  },
  groupChild1: {
    height: "10.54%",
    width: "81.73%",
    top: "35.59%",
    right: "9.14%",
    bottom: "53.87%",
    left: "9.14%",
    maxHeight: "100%",
    position: "absolute",
  },
  rectangleView: {
    height: "33.14%",
    width: "108.22%",
    top: "68.51%",
    right: "-3.68%",
    bottom: "-1.65%",
    left: "-4.55%",
    backgroundColor: GlobalStyles.Color.gray_1600,
    position: "absolute",
  },
  rectangleIcon: {
    height: "13.04%",
    width: "21.19%",
    top: "101.17%",
    right: "-91.6%",
    bottom: "-14.22%",
    left: "170.41%",
    maxHeight: "100%",
    position: "absolute",
  },
  b: {
    top: "-2.08%",
    left: "-3.23%",
    fontSize: GlobalStyles.FontSize.size_16xl,
    letterSpacing: 5,
    color: GlobalStyles.Color.gray_1700,
    textAlign: "left",
    fontFamily: GlobalStyles.FontFamily.helvetica,
    position: "absolute",
  },
  bWrapper: {
    opacity: 0.4,
  },
  business: {
    top: "87.88%",
    left: "10.24%",
    color: GlobalStyles.Color.white,
    letterSpacing: 0,
    fontSize: GlobalStyles.FontSize.size_sm,
    textAlign: "left",
    fontFamily: GlobalStyles.FontFamily.helvetica,
    fontWeight: "700",
    position: "absolute",
  },
  groupParent: {
    top: 0,
    right: 0,
    left: 0,
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
    width: 48,
    height: 41,
    bottom: 21,
    right: 16,
    position: "absolute",
  },
  groupChild4: {
    marginLeft: 30.69,
    top: 21,
    height: 22,
    width: 17,
    left: "50%",
    position: "absolute",
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
    height: 15,
    width: 15,
    position: "absolute",
  },
  iconAwesomeCheckCircle25: {
    top: 551,
    left: 766,
    height: 15,
    width: 15,
    position: "absolute",
  },
  iconAwesomeCheckCircle26: {
    top: 629,
    left: 766,
    height: 15,
    width: 15,
    position: "absolute",
  },
  iconAwesomeCheckCircle27: {
    top: 724,
    left: 766,
    height: 15,
    width: 15,
    position: "absolute",
  },
  iconAwesomeCheckCircle28: {
    top: 762,
    left: 766,
    height: 15,
    width: 15,
    position: "absolute",
  },
  iconAwesomeCheckCircle29: {
    top: 819,
    left: 766,
    height: 15,
    width: 15,
    position: "absolute",
  },
  iconAwesomeCheckCircle30: {
    top: 854,
    left: 766,
    height: 15,
    width: 15,
    position: "absolute",
  },
  iconAwesomeCheckCircle31: {
    top: 891,
    left: 766,
    height: 15,
    width: 15,
    position: "absolute",
  },
  iconAwesomeCheckCircle32: {
    top: 926,
    left: 766,
    height: 15,
    width: 15,
    position: "absolute",
  },
  iconAwesomeCheckCircle33: {
    left: 766,
  },
  iconAwesomeCheckCircle34: {
    top: 999,
    left: 766,
    height: 15,
    width: 15,
    position: "absolute",
  },
  iconAwesomeCheckCircle35: {
    top: 1035,
    left: 766,
    height: 15,
    width: 15,
    position: "absolute",
  },
  iconAwesomeCheckCircle36: {
    top: 494,
    left: 395,
    height: 15,
    width: 15,
    position: "absolute",
  },
  iconAwesomeCheckCircle37: {
    top: 571,
    left: 395,
    height: 15,
    width: 15,
    position: "absolute",
  },
  iconAwesomeCheckCircle38: {
    top: 648,
    left: 395,
    height: 15,
    width: 15,
    position: "absolute",
  },
  iconAwesomeCheckCircle39: {
    top: 764,
    left: 395,
    height: 15,
    width: 15,
    position: "absolute",
  },
  iconAwesomeCheckCircle40: {
    top: 816,
    left: 395,
    height: 15,
    width: 15,
    position: "absolute",
  },
  iconAwesomeCheckCircle41: {
    top: 873,
    left: 395,
    height: 15,
    width: 15,
    position: "absolute",
  },
  iconAwesomeCheckCircle42: {
    top: 910,
    left: 395,
    height: 15,
    width: 15,
    position: "absolute",
  },
  iconAwesomeCheckCircle43: {
    left: 395,
  },
  iconAwesomeCheckCircle44: {
    top: 1004,
    left: 395,
    height: 15,
    width: 15,
    position: "absolute",
  },
  iconAwesomeCheckCircle45: {
    top: 1038,
    left: 395,
    height: 15,
    width: 15,
    position: "absolute",
  },
  component2375: {
    width: 1075,
    height: 1804,
  },
  groupChild19: {
    top: 0,
    left: 0,
    bottom: 0,
    position: "absolute",
    width: 375,
    backgroundColor: GlobalStyles.Color.gray_300,
  },
  groupChild20: {
    left: 1,
    maxHeight: "100%",
  },
  subtraction7Icon: {
    height: 151,
    opacity: 0.7,
  },
  path23806Icon: {
    height: 188,
    opacity: 0.51,
    left: 1,
    position: "absolute",
  },
  history: {
    marginTop: 117.61,
    letterSpacing: 1,
    color: GlobalStyles.Color.purple,
    left: "8.31%",
    fontSize: GlobalStyles.FontSize.size_sm,
    fontWeight: "700",
  },
  history1: {
    marginTop: 131.99,
    left: "76.28%",
    fontSize: GlobalStyles.FontSize.size_11xs,
    letterSpacing: 0,
  },
  groupChild21: {
    bottom: -1,
    opacity: 0.23,
    maxHeight: "100%",
    left: 0,
  },
  groupWrapper: {
    top: 18,
    right: 19,
    borderRadius: GlobalStyles.Border.br_5xs,
    width: 24,
    height: 29,
    backgroundColor: "transparent",
    position: "absolute",
  },
  text11: {
    marginTop: -14.62,
    left: "5.31%",
    fontSize: GlobalStyles.FontSize.size_5xl,
    letterSpacing: 2,
    color: GlobalStyles.Color.gray_800,
    textAlign: "left",
    fontFamily: GlobalStyles.FontFamily.helvetica,
    top: "50%",
    position: "absolute",
  },
  text12: {
    left: "8.31%",
    fontSize: GlobalStyles.FontSize.size_6xs,
    marginTop: 16.58,
  },
  text13: {
    left: "20.98%",
  },
  text14: {
    left: "54.39%",
  },
  maskGroup237: {
    opacity: 0.5,
    left: 1,
    maxHeight: "100%",
  },
  groupChild22: {
    right: 21,
    width: 25,
    height: 16,
  },
  maskGroup238: {
    opacity: 0,
    top: 1,
    maxHeight: "100%",
  },
  iconFeatherWifi: {
    marginTop: -102.96,
    width: 30,
    height: 42,
    top: "50%",
  },
  layer12Icon: {
    marginTop: 69.6,
    right: 36,
    left: 44,
    height: 37,
    top: "50%",
    position: "absolute",
  },
  groupParent5: {
    bottom: 46,
  },
  hello6: {
    left: 87,
    fontSize: GlobalStyles.FontSize.size_2xl,
    textAlign: "left",
    fontFamily: GlobalStyles.FontFamily.helvetica,
    lineHeight: 20,
    top: "50%",
    position: "absolute",
  },
  hello7: {
    left: 77,
    textAlign: "left",
    fontFamily: GlobalStyles.FontFamily.helvetica,
    lineHeight: 20,
    top: "50%",
    position: "absolute",
  },
  groupParent4: {
    marginLeft: 113.5,
  },
  hello8: {
    fontSize: GlobalStyles.FontSize.size_2xl,
  },
  groupParent6: {
    marginLeft: -173.5,
  },
  groupChild28: {
    left: 1,
    top: 1,
    maxHeight: "100%",
    right: 0,
    bottom: 0,
    position: "absolute",
  },
  groupParent9: {
    bottom: 0,
  },
  hello10: {
    marginTop: -178.71,
    left: 74,
    fontSize: GlobalStyles.FontSize.size_2xl,
    textAlign: "left",
    top: "50%",
    position: "absolute",
  },
  groupParent8: {
    left: 75,
    height: 357,
    width: 208,
    top: 132,
    position: "absolute",
  },
  hello11: {
    marginTop: -862.5,
    left: 154,
    textAlign: "left",
    fontFamily: GlobalStyles.FontFamily.helvetica,
    lineHeight: 20,
    top: "50%",
    position: "absolute",
  },
  homeIndicator: {
    marginTop: -2.5,
    right: 0,
    left: 0,
    top: "50%",
    position: "absolute",
  },
  homeIndicatorWrapper: {
    left: 121,
  },
  homeIndicatorContainer: {
    marginLeft: -54.5,
    left: "50%",
  },
  homeIndicatorFrame: {
    right: 96,
  },
  hello12: {
    left: 65,
  },
  hello13: {
    left: 386,
  },
  hello14: {
    top: 58,
    fontSize: GlobalStyles.FontSize.size_7xl,
  },
  lineView: {
    top: 166,
    left: 0,
    position: "absolute",
  },
  findAllFeesInTheBusiness: {
    left: 37,
  },
  findAllFeesInTheBusiness1: {
    marginLeft: -138.5,
    left: "50%",
  },
  findAllFeesInTheBusiness2: {
    right: 11,
  },
  groupChild32: {
    marginTop: -110.5,
  },
  exchange50kAtTheInterbank: {
    width: 267,
  },
  iconAwesomeExchangeAlt: {
    height: 12,
    width: 15,
    left: 0,
  },
  exchange50kAtTheInterbankParent: {
    height: 56,
  },
  freeInternationalPaymentsA: {
    width: 263,
  },
  iconAwesomeGlobe: {
    top: 2,
    height: 15,
    width: 15,
    left: 0,
    position: "absolute",
  },
  freeInternationalPaymentsAParent: {
    marginTop: -8.5,
    right: 16,
    height: 56,
    top: "50%",
  },
  paymentApproval: {
    width: 204,
    color: GlobalStyles.Color.indigo,
  },
  iconOpenEye: {
    height: 12,
    width: 15,
    left: 0,
  },
  paymentApprovalParent: {
    width: 231,
    bottom: 21,
    height: 16,
  },
  rectangleParent3: {
    right: 0,
  },
  groupChild34: {
    marginTop: -10.5,
    height: 55,
  },
  hello15: {
    marginTop: -44.5,
    left: 0,
  },
  dedicatedAccountManager2: {
    width: 279,
    color: GlobalStyles.Color.indigo,
  },
  iconMaterialPerson: {
    top: 1,
    maxHeight: "100%",
    width: 15,
    left: 0,
    bottom: 0,
    position: "absolute",
  },
  dedicatedAccountManagerParent: {
    right: 0,
  },
  rectangleParent4: {
    left: 25,
  },
  rectangleParent6: {
    right: 0,
  },
  dedicatedAccountManager5: {
    width: 211,
    color: GlobalStyles.Color.gray_800,
  },
  dedicatedAccountManagerParent1: {
    width: 238,
  },
  rectangleParent7: {
    left: 25,
  },
  rectangleParent9: {
    right: 0,
  },
  groupChild40: {
    marginTop: -302.5,
    height: 639,
  },
  hello21: {
    marginTop: -336.5,
    left: 0,
  },
  rectangleParent10: {
    left: 25,
  },
  rewardsFreePaymentsToCarb: {
    marginTop: -300.08,
    left: 29,
    width: 257,
    lineHeight: 20,
    top: "50%",
    position: "absolute",
  },
  iconAwesomeGift: {
    width: 16,
    left: 1,
    top: 0,
  },
  iconAwesomeExchangeAlt2: {
    marginTop: -177.08,
    left: 2,
    height: 12,
    width: 15,
    top: "50%",
    position: "absolute",
  },
  iconAwesomeGlobe2: {
    top: 81,
    left: 1,
    height: 15,
    width: 15,
    position: "absolute",
  },
  groupChild42: {
    marginTop: -258.08,
    marginLeft: -141,
    left: "50%",
  },
  marketplaceFacebookSeeklogoIcon: {
    marginTop: -138.42,
    left: 2,
    height: 12,
    position: "absolute",
  },
  iconAwesomeCoins: {
    marginTop: -97.9,
    width: 14,
    left: 3,
    height: 14,
    top: "50%",
    position: "absolute",
  },
  subtraction12Icon: {
    marginTop: -40.36,
    left: 2,
    height: 15,
    position: "absolute",
  },
  union27Icon: {
    marginTop: -2.08,
  },
  union28Icon: {
    marginTop: 37.92,
  },
  iconSimpleReadthedocs: {
    marginTop: 77.92,
    height: 17,
  },
  iconMaterialAccountBalance: {
    marginTop: 141.05,
    left: 1,
  },
  iconMaterialUndo: {
    marginTop: 139.21,
    width: 9,
    height: 17,
  },
  iconOpenDocument: {
    bottom: 85,
    height: 17,
    left: 2,
    width: 15,
    position: "absolute",
  },
  iconIonicMdApps: {
    bottom: 42,
    width: 16,
    left: 1,
    height: 16,
    position: "absolute",
  },
  iconAwesomeMobileAlt: {
    width: 12,
    height: 19,
    left: 2,
    bottom: 0,
    position: "absolute",
  },
  rewardsFreePaymentsToCarbParent: {
    top: 54,
    right: 22,
    left: 19,
  },
  rectangleParent12: {
    right: 0,
  },
  groupChild45: {
    marginTop: -290.5,
    height: 581,
    top: "50%",
    position: "absolute",
  },
  a3Fee2: {
    fontFamily: GlobalStyles.FontFamily.helvetica,
  },
  a3FeeAppliesPerInternati3: {
    color: GlobalStyles.Color.gray_800,
  },
  blankLine56: {
    fontFamily: GlobalStyles.FontFamily.helvetica,
  },
  freeLocalPayments2: {
    color: GlobalStyles.Color.indigo,
  },
  freeMetalCardsPlasticAnd: {
    marginTop: -268,
    left: 31,
    width: 267,
    lineHeight: 20,
    top: "50%",
    position: "absolute",
  },
  iconIonicIosCard: {
    left: 2,
    height: 12,
    width: 17,
  },
  iconAwesomeGlobe4: {
    marginTop: -169.23,
    height: 17,
    left: 2,
    width: 17,
    top: "50%",
    position: "absolute",
  },
  groupChild46: {
    marginTop: 73.28,
    height: 12,
    width: 15,
    top: "50%",
  },
  groupChild47: {
    width: 16,
    height: 15,
    bottom: 0,
  },
  iconMaterialAccountBalance2: {
    marginTop: -85.87,
    left: 2,
  },
  groupChild48: {
    bottom: 79,
    height: 17,
    left: 2,
    width: 17,
    position: "absolute",
  },
  union29Icon: {
    marginTop: -8.28,
    height: 17,
    width: 17,
    left: 0,
    top: "50%",
    position: "absolute",
  },
  freeMetalCardsPlasticAndParent: {
    bottom: 25,
  },
  rectangleParent13: {
    top: 35,
    right: 0,
    left: 0,
    bottom: 0,
    position: "absolute",
  },
  hello24: {
    marginTop: -308,
    left: 0,
  },
  groupParent10: {
    left: 25,
  },
  groupParent12: {
    right: 0,
  },
  groupChild57: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: GlobalStyles.Border.br_lg,
    backgroundColor: GlobalStyles.Color.gray_500,
    position: "absolute",
    width: "100%",
  },
  maskGroup236: {
    bottom: 13,
    top: 0,
    right: 0,
    left: 0,
    position: "absolute",
  },
  rectangleParent16: {
    marginTop: -30,
    height: 60,
    right: 0,
    left: 0,
    top: "50%",
    position: "absolute",
  },
  hello27: {
    color: GlobalStyles.Color.white,
  },
  component20891Parent: {
    marginTop: -704.5,
    height: 60,
    left: 25,
    width: 326,
    top: "50%",
    position: "absolute",
  },
  component20893Parent: {
    right: 0,
  },
  iconFeatherArrowLeft: {
    top: 26,
    height: 17,
    width: 17,
  },
  rectangleParent1: {
    width: 1073,
    height: 2741,
  },
  hello30: {
    fontSize: GlobalStyles.FontSize.size_8xl,
  },
  iconFeatherArrowLeft1: {
    marginLeft: -0.5,
    bottom: 4,
    height: 17,
    width: 17,
    left: "50%",
    position: "absolute",
  },
  iconFeatherArrowLeftWrapper: {
    width: 55,
    height: 45,
    backgroundColor: GlobalStyles.Color.gray_300,
  },
  hello31: {
    color: GlobalStyles.Color.black,
  },
  component20894Parent: {
    height: 60,
    width: 326,
  },
  homeIndicator3: {
    width: 134,
    backgroundColor: GlobalStyles.Color.black,
    borderRadius: GlobalStyles.Border.br_8xl,
  },
  hello32: {
    fontSize: GlobalStyles.FontSize.size_2xl,
    top: 1,
    color: GlobalStyles.Color.gray_800,
    left: 0,
    textAlign: "left",
    fontFamily: GlobalStyles.FontFamily.helvetica,
    lineHeight: 20,
    position: "absolute",
  },
  premium: {
    marginLeft: -18,
    fontSize: GlobalStyles.FontSize.size_2xl,
    color: GlobalStyles.Color.gray_800,
    textAlign: "left",
    fontFamily: GlobalStyles.FontFamily.helvetica,
    lineHeight: 20,
  },
  hello33: {
    top: 1,
    left: "50%",
    position: "absolute",
  },
  hello34: {
    fontSize: GlobalStyles.FontSize.size_2xl,
    textAlign: "left",
  },
  component2354: {
    width: 322,
    height: 21,
  },
  rectangle: {
    shadowColor: "rgba(0, 0, 0, 0.05)",
    shadowRadius: 6,
    elevation: 6,
    top: 0,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    bottom: 0,
    position: "absolute",
  },
  text28: {
    fontSize: GlobalStyles.FontSize.size_4xl,
    lineHeight: 24,
    fontWeight: "500",
    fontFamily: GlobalStyles.FontFamily.roboto,
    color: GlobalStyles.Color.gray_1900,
    letterSpacing: 0,
    top: 0,
    left: 0,
    textAlign: "left",
    position: "absolute",
  },
  time: {
    width: 40,
    top: 0,
    left: 0,
    bottom: 0,
    position: "absolute",
  },
  batteryIcon: {
    width: 22,
    right: 0,
  },
  wifiIcon: {
    right: 37,
    marginTop: -3,
    height: 12,
    width: 17,
    top: "50%",
    position: "absolute",
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
  networkChild1: {
    top: 0,
    right: 0,
  },
  network: {
    right: 68,
    width: 17,
  },
  statusBar: {
    marginTop: -15,
    height: 26,
    right: 16,
  },
  statusBarBlack: {
    height: 44,
    width: 375,
  },
  chooseCardsElite: {
    flex: 1,
    width: "100%",
    backgroundColor: GlobalStyles.Color.white,
  },
});

export default ChooseCardsElite;
