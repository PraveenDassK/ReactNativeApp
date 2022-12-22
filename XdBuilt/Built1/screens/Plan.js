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

const Plan = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.plan}>
      <View style={styles.rectangleView} />
      <ScrollView
        style={[styles.scrollGroup30, styles.mt13]}
        contentContainerStyle={styles.scrollGroup30Content}
      >
        <View style={styles.component2376}>
          <Text style={styles.hello}>ESSENTIAL</Text>
          <Text style={styles.hello1}>£2</Text>
          <Text style={styles.hello2}>£10</Text>
          <Text style={styles.hello3}>£25</Text>
          <Text style={styles.hello4}>ADVANCE</Text>
          <Text style={styles.hello5}>ELITE</Text>
          <View style={styles.groupView}>
            <View style={styles.rectangleView1} />
            <Text style={styles.accountFeaturesMobileSet}>
              <Text style={styles.accountFeatures1}>
                <Text style={styles.accountFeatures}>Account Features:</Text>
              </Text>
              <Text style={styles.mobileSetUpAndSwitching}>
                <Text style={styles.mobileSetUp}>
                  • Mobile Set Up and Switching
                </Text>
              </Text>
              <Text style={styles.fSCSProtectedBankAccounts}>
                <Text style={styles.fSCSProtectedBank}>
                  • FSCS Protected Bank Accounts
                </Text>
              </Text>
              <Text style={styles.iBANSortCode}>
                <Text style={styles.text}>{`• `}</Text>(IBAN/Sort Code)
              </Text>
              <Text style={styles.userControl}>• User Control</Text>
              <Text
                style={styles.abilityToAdd}
              >{`• Ability to add additional accounts with `}</Text>
              <Text style={styles.samePhoneNumber}> same phone number</Text>
              <Text style={styles.advancedSecurity}>• Advanced Security</Text>
            </Text>
            <Text style={styles.cardsDebitAndVirtualCar}>
              <Text style={styles.cards1}>
                <Text style={styles.cards}>Cards:</Text>
              </Text>
              <Text style={styles.debitAndVirtualCard}>
                <Text style={styles.debitAndVirtual}>
                  • Debit and Virtual Card
                </Text>
              </Text>
              <Text style={styles.addedExpenseCardsWithSpend}>
                <Text
                  style={styles.addedExpenseCards}
                >{`• Added expense cards with spending   `}</Text>
              </Text>
              <Text style={styles.limits5PerCard}>
                <Text style={styles.limits5Per}> limits: £5 per card</Text>
              </Text>
              <Text style={styles.text1} />
            </Text>
            <Text style={styles.appSecurityPasswordProte}>
              <Text style={styles.appSecurity1}>
                <Text style={styles.appSecurity}>App Security:</Text>
              </Text>
              <Text style={styles.passwordProtection1}>
                <Text style={styles.passwordProtection}>
                  • Password Protection
                </Text>
              </Text>
              <Text style={styles.faceID1}>
                <Text style={styles.faceID}>• Face ID</Text>
              </Text>
              <Text style={styles.fingerPrint1}>
                <Text style={styles.fingerPrint}>• Finger Print</Text>
              </Text>
              <Text style={styles.freezeUnfreezeFromApp}>
                <Text style={styles.freezeUnfreezeFromAp}>
                  • Freeze/Unfreeze From Ap
                </Text>
                p
              </Text>
              <Text style={styles.turnOffATM}>
                • Turn Off ATM Withdrawals/Online/
              </Text>
              <Text
                style={styles.contactlessPayments}
              >{`  Contactless Payments `}</Text>
            </Text>
            <Text style={styles.paymentsTransferInout0}>
              <Text style={styles.payments1}>
                <Text style={styles.payments}>Payments:</Text>
              </Text>
              <Text style={styles.transferInout015transac1}>
                <Text style={styles.transferInout015transac}>
                  • Transfer in/out: 0.15£/transaction
                </Text>
              </Text>
              <Text style={styles.chapsBACSSEPAPayments1}>
                <Text
                  style={styles.chapsBACSSEPAPayments}
                >{`• Chaps/BACS /SEPA Payments `}</Text>
              </Text>
              <Text style={styles.mayBeAFeeSoFactorInPric}>
                <Text style={styles.mayBeA}>
                  {" "}
                  (may be a fee so factor in pricing)
                </Text>
              </Text>
              <Text style={styles.scheduledPayments}>
                <Text style={styles.scheduledPay}>• Scheduled Pay</Text>ments
              </Text>
              <Text style={styles.paymentNotifications}>
                • Payment Notifications
              </Text>
            </Text>
            <Text style={styles.accountingServicesBankFeed}>
              <Text style={styles.accountingServices1}>
                <Text style={styles.accountingServices}>
                  Accounting Services:
                </Text>
              </Text>
              <Text style={styles.bankFeed1}>
                <Text style={styles.bankFeed}>Bank Feed</Text>
              </Text>
              <Text style={styles.text2} />
            </Text>
            <Text style={styles.sageAndXeroIntegrationCo}>
              <Text style={styles.sageAndXeroIntegration}>
                <Text
                  style={styles.sageAndXero}
                >{`Sage and Xero integration `}</Text>
              </Text>
              <Text style={styles.comingSoon1}>
                <Text style={styles.comingSoon}>(Coming Soon)</Text>
              </Text>
            </Text>
            <Text style={styles.customerServiceOnline1}>
              <Text style={styles.customerServiceOnline}>
                <Text style={styles.customerService}>Customer Service:</Text>
                <Text style={styles.online}> Online</Text>
              </Text>
            </Text>
            <Text style={styles.customerServiceOnline3}>
              <Text style={styles.customerServiceOnline2}>
                <Text style={styles.customerService1}>Customer Service:</Text>
                <Text style={styles.online1}> Online</Text>
              </Text>
            </Text>
            <Text style={styles.carbonCalculator2}>
              <Text style={styles.carbonCalculator1}>
                <Text
                  style={styles.carbonCalculator}
                >{`Carbon Calculator `}</Text>
              </Text>
            </Text>
            <Text style={styles.carbonOffset}>{`Carbon Offset `}</Text>
            <Text style={styles.accessToGeniusMarketPlace}>
              Access to Genius Market Place
            </Text>
            <Text style={styles.manageSubscriptions}>Manage Subscriptions</Text>
            <Text style={styles.setSpendingLimitsPerCardO}>
              Set Spending Limits per card or Wallet
            </Text>
            <Text style={styles.realtimeOverviewOfAllSpend}>
              Realtime overview of all spending
            </Text>
            <Text style={styles.pDFAndCSVStatements}>
              PDF and CSV Statements
            </Text>
            <Text style={styles.cardPaymentsForeignEXFee}>
              Card Payments Foreign EX Fee: 2.48%
            </Text>
            <Text style={styles.invoicePaymentsForeignEXFe}>
              Invoice Payments Foreign EX Fee: 2.40%
            </Text>
            <Text style={styles.discountsAndPerksOnEnviro}>
              Discounts and Perks on Enviro Focuss Companies
            </Text>
            <Text style={styles.internationalPayments15}>
              <Text style={styles.internationalPayments1}>
                <Text
                  style={styles.internationalPayments}
                >{`International Payments:  `}</Text>
              </Text>
              <Text style={styles.transaction}>
                <Text style={styles.transacti}>£15/transacti</Text>on
              </Text>
            </Text>
            <Text style={styles.forexWalletGBPEUROUSD}>
              <Text style={styles.forexWalletGBP}>
                Forex Wallet (GBP/ EURO/USD)
              </Text>
            </Text>
            <Text style={styles.transactionFee1ForConver}>
              Transaction Fee (1% for conversion)
            </Text>
            <Text style={styles.applePayAndGooglePayCom}>
              <Text style={styles.applePayAndGooglePay}>
                <Text
                  style={styles.applePayAnd}
                >{`Apple Pay and Google Pay `}</Text>
              </Text>
              <Text style={styles.comingSoon3}>
                <Text style={styles.comingSoon2}>(Coming Soon)</Text>
              </Text>
            </Text>
            <Text style={styles.memberPerks1}>
              <Text style={styles.memberPerks}>Member Perks</Text>
            </Text>
            <Text style={styles.geniusMarketPlace1}>
              <Text style={styles.geniusMarketPlace}>Genius Market Place</Text>
            </Text>
            <Image
              style={styles.iconAwesomeCheckCircle}
              resizeMode="cover"
              source={require("../assets/icon-awesomecheckcircle4.png")}
            />
            <Image
              style={styles.iconAwesomeCheckCircle1}
              resizeMode="cover"
              source={require("../assets/icon-awesomecheckcircle4.png")}
            />
            <Image
              style={styles.iconAwesomeCheckCircle2}
              resizeMode="cover"
              source={require("../assets/icon-awesomecheckcircle4.png")}
            />
            <Image
              style={styles.iconAwesomeCheckCircle3}
              resizeMode="cover"
              source={require("../assets/icon-awesomecheckcircle4.png")}
            />
            <Image
              style={styles.iconAwesomeCheckCircle4}
              resizeMode="cover"
              source={require("../assets/icon-awesomecheckcircle4.png")}
            />
            <Image
              style={styles.iconAwesomeCheckCircle5}
              resizeMode="cover"
              source={require("../assets/icon-awesomecheckcircle4.png")}
            />
            <Image
              style={styles.iconAwesomeCheckCircle6}
              resizeMode="cover"
              source={require("../assets/icon-awesomecheckcircle4.png")}
            />
            <Image
              style={styles.iconAwesomeCheckCircle7}
              resizeMode="cover"
              source={require("../assets/icon-awesomecheckcircle4.png")}
            />
            <Image
              style={styles.iconAwesomeCheckCircle8}
              resizeMode="cover"
              source={require("../assets/icon-awesomecheckcircle4.png")}
            />
            <Image
              style={styles.iconAwesomeCheckCircle9}
              resizeMode="cover"
              source={require("../assets/icon-awesomecheckcircle4.png")}
            />
            <Image
              style={styles.iconAwesomeCheckCircle10}
              resizeMode="cover"
              source={require("../assets/icon-awesomecheckcircle4.png")}
            />
            <Image
              style={styles.iconAwesomeCheckCircle11}
              resizeMode="cover"
              source={require("../assets/icon-awesomecheckcircle4.png")}
            />
            <Image
              style={styles.iconAwesomeCheckCircle12}
              resizeMode="cover"
              source={require("../assets/icon-awesomecheckcircle4.png")}
            />
            <Image
              style={styles.iconAwesomeCheckCircle13}
              resizeMode="cover"
              source={require("../assets/icon-awesomecheckcircle4.png")}
            />
            <Image
              style={styles.iconAwesomeCheckCircle14}
              resizeMode="cover"
              source={require("../assets/icon-awesomecheckcircle4.png")}
            />
            <Image
              style={styles.iconAwesomeCheckCircle15}
              resizeMode="cover"
              source={require("../assets/icon-awesomecheckcircle4.png")}
            />
            <Image
              style={styles.iconAwesomeCheckCircle16}
              resizeMode="cover"
              source={require("../assets/icon-awesomecheckcircle4.png")}
            />
            <Image
              style={styles.iconAwesomeCheckCircle17}
              resizeMode="cover"
              source={require("../assets/icon-awesomecheckcircle4.png")}
            />
            <Image
              style={styles.iconAwesomeCheckCircle18}
              resizeMode="cover"
              source={require("../assets/icon-awesomecheckcircle4.png")}
            />
            <Image
              style={styles.iconAwesomeCheckCircle19}
              resizeMode="cover"
              source={require("../assets/icon-awesomecheckcircle4.png")}
            />
            <Image
              style={styles.iconAwesomeCheckCircle20}
              resizeMode="cover"
              source={require("../assets/icon-awesomecheckcircle4.png")}
            />
            <Image
              style={styles.iconAwesomeCheckCircle21}
              resizeMode="cover"
              source={require("../assets/icon-awesomecheckcircle4.png")}
            />
          </View>
          <View style={styles.groupView12}>
            <View style={styles.rectangleView2} />
            <View style={styles.groupView1}>
              <Text style={styles.allEssentialFeatures}>
                All Essential Features
              </Text>
            </View>
            <View style={styles.groupView2}>
              <Text style={styles.paymentsDomesticTransfer}>
                <Text style={styles.paymentsDomestic1}>
                  <Text style={styles.paymentsDomestic}>
                    Payments (domestic):
                  </Text>
                </Text>
                <Text style={styles.transferInoutNoFeeUpto2}>
                  <Text style={styles.transferInoutNo}>
                    Transfer in/out: No Fee Upto 20 Transactions
                  </Text>
                </Text>
                <Text style={styles.text3} />
              </Text>
            </View>
            <View style={styles.groupView3}>
              <Text style={styles.cardsAddedExpenseCardsWit}>
                <Text style={styles.cards3}>
                  <Text style={styles.cards2}>Cards:</Text>
                </Text>
                <Text style={styles.addedExpenseCardsWithSpend1}>
                  <Text style={styles.addedExpenseCards1}>
                    Added expense cards with spending limits:
                  </Text>
                </Text>
                <Text style={styles.freeExpenseCard}>
                  <Text style={styles.text4}>{`1 `}</Text>Free Expense Card
                </Text>
              </Text>
            </View>
            <View style={styles.groupView4}>
              <Text style={styles.accountingServicesInvoices}>
                <Text style={styles.accountingServices3}>
                  <Text style={styles.accountingServices2}>
                    Accounting Services:
                  </Text>
                </Text>
                <Text style={styles.invoices1}>
                  <Text style={styles.invoices}>Invoices</Text>
                </Text>
                <Text style={styles.digitalReceipts1}>
                  <Text style={styles.digitalReceipts}>Digital Receipts</Text>
                </Text>
                <Text style={styles.bankFeed3}>
                  <Text style={styles.bankFeed2}>Bank Feed</Text>
                </Text>
                <Text style={styles.trackExpenses1}>
                  <Text style={styles.trackExpenses}>Track Expenses</Text>
                </Text>
                <Text style={styles.text5} />
              </Text>
            </View>
            <View style={styles.groupView5}>
              <Text style={styles.slackIntegrationComingSoo}>
                <Text style={styles.slackIntegration1}>
                  <Text style={styles.slackIntegration}>Slack Integration</Text>
                </Text>
                <Text style={styles.comingSoon5}>
                  <Text style={styles.comingSoon4}> (Coming Soon)</Text>
                </Text>
                <Text style={styles.text6} />
              </Text>
            </View>
            <View style={styles.groupView6}>
              <Text style={styles.customerServicesOnlinePhon}>
                <Text style={styles.customerServices1}>
                  <Text style={styles.customerServices}>
                    Customer Services:
                  </Text>
                </Text>
                <Text style={styles.onlinePhone1}>
                  <Text style={styles.onlinePhone}>Online/Phone</Text>
                </Text>
                <Text style={styles.text7} />
              </Text>
            </View>
            <View style={styles.groupView7}>
              <Text style={styles.cashbackOnSavingsComingS}>
                <Text style={styles.cashbackOnSavings1}>
                  <Text style={styles.cashbackOnSavings}>
                    Cashback on savings
                  </Text>
                </Text>
                <Text style={styles.comingSoon6}>
                  <Text style={styles.comingSoo}> (Coming Soo</Text>n)
                </Text>
              </Text>
            </View>
            <View style={styles.groupView8}>
              <Text style={styles.categoriseAndTagSpending}>
                Categorise and Tag Spending
              </Text>
            </View>
            <View style={styles.groupView9}>
              <Text style={styles.cardPaymentsForeignEXFee1}>
                Card Payments Foreign EX Fee: 1.98%
              </Text>
            </View>
            <View style={styles.groupView10}>
              <Text style={styles.invoicePaymentsForeignEXFe1}>
                Invoice Payments Foreign EX Fee: 2.40%
              </Text>
            </View>
            <View style={styles.groupView11}>
              <Text style={styles.plant5TreesAMonth}>
                Plant 5 trees a month
              </Text>
            </View>
          </View>
          <View style={styles.groupView14}>
            <View style={styles.rectangleView3} />
            <Text style={styles.allAdvanceFeatures}>All Advance Features</Text>
            <Text style={styles.paymentsDomesticTransfer1}>
              <Text style={styles.paymentsDomestic3}>
                <Text style={styles.paymentsDomestic2}>
                  Payments (domestic):
                </Text>
              </Text>
              <Text style={styles.transferInoutNoFeeUpto5}>
                <Text style={styles.transferInoutNo1}>
                  Transfer in/out: No Fee Upto 50 Transactions
                </Text>
              </Text>
              <Text style={styles.text8} />
            </Text>
            <Text style={styles.cardsAddedExpenseCardsWit1}>
              <Text style={styles.cards5}>
                <Text style={styles.cards4}>Cards:</Text>
              </Text>
              <Text style={styles.addedExpenseCardsWithSpend2}>
                <Text
                  style={styles.addedExpenseCards2}
                >{`Added expense cards with spending limits: 2 `}</Text>
                Free Expense Card
              </Text>
            </Text>
            <Text style={styles.businessToolKitFreeLogoD}>
              <Text style={styles.businessToolKit1}>
                <Text style={styles.businessToolKit}>Business Tool Kit:</Text>
              </Text>
              <Text style={styles.freeLogoDesign1}>
                <Text style={styles.freeLogoDesign}>Free Logo Design</Text>
              </Text>
              <Text style={styles.tradeMarkRegistration1}>
                <Text style={styles.tradeMarkRegistration}>
                  Trade Mark Registration
                </Text>
              </Text>
              <Text style={styles.desktopSupport1}>
                <Text style={styles.desktopSupport}>Desktop Support</Text>
              </Text>
              <Text style={styles.text9} />
            </Text>
            <Text style={styles.customerServicesDedicatedA}>
              <Text style={styles.customerServices3}>
                <Text style={styles.customerServices2}>Customer Services:</Text>
              </Text>
              <Text style={styles.dedicatedAccountManager1}>
                <Text style={styles.dedicatedAccountManager}>
                  Dedicated Account Manager
                </Text>
              </Text>
              <Text style={styles.text10} />
            </Text>
            <Text style={styles.geniusTelecoms10GBSimOnly}>
              Genius Telecoms 10GB Sim Only
            </Text>
            <Text style={styles.plant10TreesAMonth}>
              Plant 10 trees a month
            </Text>
            <Text style={styles.simOnlyDataPlanWith4GBDat}>
              Sim Only DataPlan with 4GB Data
            </Text>
            <Text style={styles.openAPIAccess}>Open API Access</Text>
            <Text style={styles.multipleUserControl}>
              Multiple User Control
            </Text>
            <Text style={styles.automaticPayroll}>Automatic Payroll</Text>
            <Text style={styles.cardPaymentsForeignEXFee2}>
              Card Payments Foreign EX Fee: 1.98%
            </Text>
            <View style={styles.groupView13}>
              <Text style={styles.invoicePaymentsForeignEXFe2}>
                Invoice Payments Foreign EX Fee: 2.40%
              </Text>
            </View>
          </View>
          <View style={styles.card1}>
            <View style={styles.groupView18}>
              <View style={styles.groupView17}>
                <Image
                  style={styles.path33118Icon}
                  resizeMode="cover"
                  source={require("../assets/path-3311816.png")}
                />
                <View style={styles.groupView16}>
                  <Image
                    style={styles.groupIcon}
                    resizeMode="cover"
                    source={require("../assets/group-3175916.png")}
                  />
                  <Image
                    style={styles.groupIcon1}
                    resizeMode="cover"
                    source={require("../assets/group-3176016.png")}
                  />
                  <View style={styles.rectangleView4} />
                  <Image
                    style={styles.rectangleIcon}
                    resizeMode="cover"
                    source={require("../assets/rectangle-262042.png")}
                  />
                  <View style={styles.groupView15}>
                    <Text style={styles.b}>B</Text>
                  </View>
                  <Text style={styles.bUSINESS}>BUSINESS</Text>
                </View>
              </View>
              <Image
                style={styles.groupIcon2}
                resizeMode="cover"
                source={require("../assets/group-3176416.png")}
              />
              <Image
                style={styles.groupIcon3}
                resizeMode="cover"
                source={require("../assets/group-3176616.png")}
              />
              <Image
                style={styles.groupIcon4}
                resizeMode="cover"
                source={require("../assets/group-3176716.png")}
              />
            </View>
          </View>
          <View style={styles.card11}>
            <View style={styles.groupView22}>
              <View style={styles.groupView21}>
                <Image
                  style={styles.path33118Icon1}
                  resizeMode="cover"
                  source={require("../assets/path-3311814.png")}
                />
                <View style={styles.groupView20}>
                  <Image
                    style={styles.groupIcon5}
                    resizeMode="cover"
                    source={require("../assets/group-3175917.png")}
                  />
                  <Image
                    style={styles.groupIcon6}
                    resizeMode="cover"
                    source={require("../assets/group-3176017.png")}
                  />
                  <View style={styles.rectangleView5} />
                  <Image
                    style={styles.rectangleIcon1}
                    resizeMode="cover"
                    source={require("../assets/rectangle-262042.png")}
                  />
                  <View style={styles.groupView19}>
                    <Text style={styles.b1}>B</Text>
                  </View>
                  <Text style={styles.bUSINESS1}>BUSINESS</Text>
                </View>
              </View>
              <Image
                style={styles.groupIcon7}
                resizeMode="cover"
                source={require("../assets/group-3176416.png")}
              />
              <Image
                style={styles.groupIcon8}
                resizeMode="cover"
                source={require("../assets/group-3176616.png")}
              />
              <Image
                style={styles.groupIcon9}
                resizeMode="cover"
                source={require("../assets/group-3176717.png")}
              />
            </View>
          </View>
          <View style={styles.card12}>
            <View style={styles.groupView26}>
              <View style={styles.groupView25}>
                <Image
                  style={styles.path33118Icon2}
                  resizeMode="cover"
                  source={require("../assets/path-3311818.png")}
                />
                <View style={styles.groupView24}>
                  <Image
                    style={styles.groupIcon10}
                    resizeMode="cover"
                    source={require("../assets/group-3175918.png")}
                  />
                  <Image
                    style={styles.groupIcon11}
                    resizeMode="cover"
                    source={require("../assets/group-3176017.png")}
                  />
                  <View style={styles.rectangleView6} />
                  <Image
                    style={styles.rectangleIcon2}
                    resizeMode="cover"
                    source={require("../assets/rectangle-262042.png")}
                  />
                  <View style={styles.groupView23}>
                    <Text style={styles.b2}>B</Text>
                  </View>
                  <Text style={styles.bUSINESS2}>BUSINESS</Text>
                </View>
              </View>
              <Image
                style={styles.groupIcon12}
                resizeMode="cover"
                source={require("../assets/group-3176416.png")}
              />
              <Image
                style={styles.groupIcon13}
                resizeMode="cover"
                source={require("../assets/group-3176618.png")}
              />
              <Image
                style={styles.groupIcon14}
                resizeMode="cover"
                source={require("../assets/group-3176718.png")}
              />
            </View>
          </View>
          <Image
            style={styles.iconAwesomeCheckCircle22}
            resizeMode="cover"
            source={require("../assets/icon-awesomecheckcircle4.png")}
          />
          <Image
            style={styles.iconAwesomeCheckCircle23}
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
            style={styles.iconAwesomeCheckCircle33}
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
            style={styles.iconAwesomeCheckCircle43}
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
      </ScrollView>
      <Text style={[styles.hello6, styles.mt9, styles.ml30]}>
        My Plan Details
      </Text>
      <View style={[styles.statusBarBlack, styles.mt_2495]}>
        <View style={styles.rectangle} />
        <View style={styles.statusBar}>
          <View style={styles.time}>
            <Text style={styles.text11}>9:41</Text>
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
            <View style={styles.rectangleView7} />
            <View style={styles.rectangleView8} />
            <View style={styles.rectangleView9} />
            <View style={styles.rectangleView10} />
          </View>
        </View>
      </View>
      <Pressable
        style={[styles.groupPressable, styles.mt2]}
        onPress={() => navigation.navigate("Settings")}
      >
        <Image
          style={styles.iconFeatherArrowLeft}
          resizeMode="cover"
          source={require("../assets/icon-featherarrowleft.png")}
        />
      </Pressable>
      <View style={[styles.homeIndicator, styles.mt36, styles.ml121]} />
      <Pressable
        style={[styles.groupPressable1, styles.mt_1312, styles.ml25]}
        onPress={() => navigation.navigate("ChooseCardsStandard2")}
      >
        <View style={styles.component208148}>
          <View style={styles.groupView27}>
            <View style={styles.rectangleView11} />
            <View style={styles.maskGroup236} />
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
    marginTop: 13,
  },
  mt9: {
    marginTop: 9,
  },
  ml30: {
    marginLeft: 30,
  },
  mt_2495: {
    marginTop: -2495,
  },
  mt2: {
    marginTop: 2,
  },
  mt36: {
    marginTop: 36,
  },
  ml121: {
    marginLeft: 121,
  },
  mt_1312: {
    marginTop: -1312,
  },
  ml25: {
    marginLeft: 25,
  },
  rectangleView: {
    position: "relative",
    backgroundColor: "#f6f5f8",
    width: 375,
    height: 2495,
  },
  hello: {
    position: "absolute",
    marginTop: -580.52,
    top: "50%",
    left: 93,
    fontSize: 25,
    lineHeight: 20,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#0101fd",
    textAlign: "left",
  },
  hello1: {
    position: "absolute",
    marginTop: -550.52,
    top: "50%",
    left: 149,
    fontSize: 25,
    lineHeight: 20,
    fontFamily: "Helvetica",
    color: "#00003d",
    textAlign: "left",
  },
  hello2: {
    position: "absolute",
    marginTop: -550.52,
    top: "50%",
    left: 518,
    fontSize: 25,
    lineHeight: 20,
    fontFamily: "Helvetica",
    color: "#00003d",
    textAlign: "left",
  },
  hello3: {
    position: "absolute",
    marginTop: -550.52,
    top: "50%",
    left: 892,
    fontSize: 25,
    lineHeight: 20,
    fontFamily: "Helvetica",
    color: "#00003d",
    textAlign: "left",
  },
  hello4: {
    position: "absolute",
    marginTop: -580.52,
    top: "50%",
    left: 478,
    fontSize: 25,
    lineHeight: 20,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#0101fd",
    textAlign: "left",
  },
  hello5: {
    position: "absolute",
    marginTop: -580.52,
    top: "50%",
    left: 877,
    fontSize: 25,
    lineHeight: 20,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#0101fd",
    textAlign: "left",
  },
  rectangleView1: {
    position: "absolute",
    marginTop: -696.5,
    top: "50%",
    right: 0,
    left: 0,
    borderRadius: 21,
    backgroundColor: "#fff",
    shadowColor: "rgba(1, 1, 253, 0.1)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 20,
    elevation: 20,
    shadowOpacity: 1,
    height: 1393,
  },
  accountFeatures: {
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#00003d",
  },
  accountFeatures1: {
    margin: 0,
  },
  mobileSetUp: {
    fontFamily: "Helvetica",
    color: "#999",
  },
  mobileSetUpAndSwitching: {
    margin: 0,
  },
  fSCSProtectedBank: {
    fontFamily: "Helvetica",
    color: "#999",
  },
  fSCSProtectedBankAccounts: {
    margin: 0,
  },
  text: {
    fontFamily: "Helvetica",
    color: "#999",
  },
  iBANSortCode: {
    margin: 0,
  },
  userControl: {
    margin: 0,
  },
  abilityToAdd: {
    margin: 0,
  },
  samePhoneNumber: {
    margin: 0,
  },
  advancedSecurity: {
    margin: 0,
  },
  accountFeaturesMobileSet: {
    position: "absolute",
    marginTop: -668.5,
    top: "50%",
    left: 54,
    fontSize: 14,
    lineHeight: 20,
    whiteSpace: "pre-wrap",
    textAlign: "left",
    width: 267,
  },
  cards: {
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#00003d",
  },
  cards1: {
    margin: 0,
  },
  debitAndVirtual: {
    fontFamily: "Helvetica",
    color: "#999",
  },
  debitAndVirtualCard: {
    margin: 0,
  },
  addedExpenseCards: {
    fontFamily: "Helvetica",
    color: "#999",
  },
  addedExpenseCardsWithSpend: {
    margin: 0,
  },
  limits5Per: {
    fontFamily: "Helvetica",
    color: "#999",
  },
  limits5PerCard: {
    margin: 0,
  },
  text1: {
    fontFamily: "Helvetica",
    color: "#999",
  },
  cardsDebitAndVirtualCar: {
    position: "absolute",
    marginTop: -206.5,
    top: "50%",
    left: 53,
    fontSize: 14,
    lineHeight: 20,
    whiteSpace: "pre-wrap",
    textAlign: "left",
    width: 267,
  },
  appSecurity: {
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#00003d",
  },
  appSecurity1: {
    margin: 0,
  },
  passwordProtection: {
    fontFamily: "Helvetica",
    color: "#999",
  },
  passwordProtection1: {
    margin: 0,
  },
  faceID: {
    fontFamily: "Helvetica",
    color: "#999",
  },
  faceID1: {
    margin: 0,
  },
  fingerPrint: {
    fontFamily: "Helvetica",
    color: "#999",
  },
  fingerPrint1: {
    margin: 0,
  },
  freezeUnfreezeFromAp: {
    fontFamily: "Helvetica",
    color: "#999",
  },
  freezeUnfreezeFromApp: {
    margin: 0,
  },
  turnOffATM: {
    margin: 0,
  },
  contactlessPayments: {
    margin: 0,
  },
  appSecurityPasswordProte: {
    position: "absolute",
    top: 201,
    left: 54,
    fontSize: 14,
    lineHeight: 20,
    whiteSpace: "pre-wrap",
    textAlign: "left",
    width: 263,
    height: 155,
  },
  payments: {
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#00003d",
  },
  payments1: {
    margin: 0,
  },
  transferInout015transac: {
    fontFamily: "Helvetica",
    color: "#999",
  },
  transferInout015transac1: {
    margin: 0,
  },
  chapsBACSSEPAPayments: {
    fontFamily: "Helvetica",
    color: "#999",
  },
  chapsBACSSEPAPayments1: {
    margin: 0,
  },
  mayBeA: {
    fontFamily: "Helvetica",
    color: "#999",
  },
  mayBeAFeeSoFactorInPric: {
    margin: 0,
  },
  scheduledPay: {
    fontFamily: "Helvetica",
    color: "#999",
  },
  scheduledPayments: {
    margin: 0,
  },
  paymentNotifications: {
    margin: 0,
  },
  paymentsTransferInout0: {
    position: "absolute",
    bottom: 921,
    left: 54,
    fontSize: 14,
    lineHeight: 20,
    whiteSpace: "pre-wrap",
    textAlign: "left",
    width: 263,
  },
  accountingServices: {
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#00003d",
  },
  accountingServices1: {
    margin: 0,
  },
  bankFeed: {
    fontFamily: "Helvetica",
    color: "#999",
  },
  bankFeed1: {
    margin: 0,
  },
  text2: {
    fontFamily: "Helvetica",
    color: "#999",
  },
  accountingServicesBankFeed: {
    position: "absolute",
    marginTop: -59.5,
    top: "50%",
    left: 53,
    fontSize: 14,
    lineHeight: 20,
    textAlign: "left",
    width: 267,
  },
  sageAndXero: {
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#00003d",
  },
  sageAndXeroIntegration: {
    margin: 0,
  },
  comingSoon: {
    fontFamily: "Helvetica",
    color: "#999",
  },
  comingSoon1: {
    margin: 0,
  },
  sageAndXeroIntegrationCo: {
    position: "absolute",
    marginTop: -4.5,
    top: "50%",
    left: 53,
    fontSize: 14,
    lineHeight: 20,
    textAlign: "left",
    width: 267,
  },
  customerService: {
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#00003d",
  },
  online: {
    fontFamily: "Helvetica",
    color: "#999",
  },
  customerServiceOnline: {
    margin: 0,
  },
  customerServiceOnline1: {
    position: "absolute",
    marginTop: 257.5,
    top: "50%",
    left: 54,
    fontSize: 14,
    lineHeight: 20,
    textAlign: "left",
    width: 267,
  },
  customerService1: {
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#00003d",
  },
  online1: {
    fontFamily: "Helvetica",
    color: "#999",
  },
  customerServiceOnline2: {
    margin: 0,
  },
  customerServiceOnline3: {
    position: "absolute",
    marginTop: 257.5,
    top: "50%",
    left: 54,
    fontSize: 14,
    lineHeight: 20,
    textAlign: "left",
    width: 267,
  },
  carbonCalculator: {
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#00003d",
  },
  carbonCalculator1: {
    margin: 0,
  },
  carbonCalculator2: {
    position: "absolute",
    marginTop: 293.5,
    top: "50%",
    left: 54,
    fontSize: 14,
    lineHeight: 20,
    textAlign: "left",
    width: 267,
  },
  carbonOffset: {
    position: "absolute",
    marginTop: 326.5,
    top: "50%",
    left: 53,
    fontSize: 14,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#00003d",
    textAlign: "left",
    width: 267,
  },
  accessToGeniusMarketPlace: {
    position: "absolute",
    marginTop: 356.5,
    top: "50%",
    left: 53,
    fontSize: 14,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#00003d",
    textAlign: "left",
    width: 267,
  },
  manageSubscriptions: {
    position: "absolute",
    marginTop: 386.5,
    top: "50%",
    left: 54,
    fontSize: 14,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#00003d",
    textAlign: "left",
    width: 267,
  },
  setSpendingLimitsPerCardO: {
    position: "absolute",
    marginTop: 416.5,
    top: "50%",
    left: 53,
    fontSize: 14,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#00003d",
    textAlign: "left",
    width: 267,
  },
  realtimeOverviewOfAllSpend: {
    position: "absolute",
    marginTop: 446.5,
    top: "50%",
    left: 54,
    fontSize: 14,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#00003d",
    textAlign: "left",
    width: 267,
  },
  pDFAndCSVStatements: {
    position: "absolute",
    marginTop: 480.5,
    top: "50%",
    left: 53,
    fontSize: 14,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#00003d",
    textAlign: "left",
    width: 267,
  },
  cardPaymentsForeignEXFee: {
    position: "absolute",
    marginTop: 514.5,
    top: "50%",
    left: 53,
    fontSize: 14,
    lineHeight: 20,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#00003d",
    textAlign: "left",
    width: 253,
  },
  invoicePaymentsForeignEXFe: {
    position: "absolute",
    marginTop: 564.5,
    top: "50%",
    left: 52,
    fontSize: 14,
    lineHeight: 20,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#00003d",
    textAlign: "left",
    width: 267,
  },
  discountsAndPerksOnEnviro: {
    position: "absolute",
    marginTop: 617.5,
    top: "50%",
    left: 53,
    fontSize: 14,
    lineHeight: 20,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#00003d",
    textAlign: "left",
    width: 246,
  },
  internationalPayments: {
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#00003d",
  },
  internationalPayments1: {
    margin: 0,
  },
  transacti: {
    fontFamily: "Helvetica",
    color: "#999",
  },
  transaction: {
    margin: 0,
  },
  internationalPayments15: {
    position: "absolute",
    marginTop: 130.5,
    top: "50%",
    left: 53,
    fontSize: 14,
    lineHeight: 20,
    whiteSpace: "pre-wrap",
    textAlign: "left",
    width: 267,
  },
  forexWalletGBP: {
    margin: 0,
  },
  forexWalletGBPEUROUSD: {
    position: "absolute",
    marginTop: 182.5,
    top: "50%",
    left: 53,
    fontSize: 14,
    lineHeight: 20,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#00003d",
    textAlign: "left",
    width: 267,
  },
  transactionFee1ForConver: {
    position: "absolute",
    marginTop: 221.5,
    top: "50%",
    left: 54,
    fontSize: 14,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#00003d",
    textAlign: "left",
    width: 267,
  },
  applePayAnd: {
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#00003d",
  },
  applePayAndGooglePay: {
    margin: 0,
  },
  comingSoon2: {
    fontFamily: "Helvetica",
    color: "#999",
  },
  comingSoon3: {
    margin: 0,
  },
  applePayAndGooglePayCom: {
    position: "absolute",
    marginTop: -112.5,
    top: "50%",
    left: 54,
    fontSize: 14,
    lineHeight: 20,
    textAlign: "left",
    width: 267,
  },
  memberPerks: {
    margin: 0,
  },
  memberPerks1: {
    position: "absolute",
    marginTop: 50.5,
    top: "50%",
    left: 53,
    fontSize: 14,
    lineHeight: 20,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#00003d",
    textAlign: "left",
    width: 267,
  },
  geniusMarketPlace: {
    margin: 0,
  },
  geniusMarketPlace1: {
    position: "absolute",
    marginTop: 91.5,
    top: "50%",
    left: 53,
    fontSize: 14,
    lineHeight: 20,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#00003d",
    textAlign: "left",
    width: 267,
  },
  iconAwesomeCheckCircle: {
    position: "absolute",
    top: 30,
    left: 22,
    width: 15,
    height: 15,
  },
  iconAwesomeCheckCircle1: {
    position: "absolute",
    top: 201,
    left: 22,
    width: 15,
    height: 15,
  },
  iconAwesomeCheckCircle2: {
    position: "absolute",
    top: 356,
    left: 22,
    width: 15,
    height: 15,
  },
  iconAwesomeCheckCircle3: {
    position: "absolute",
    top: 490,
    left: 22,
    width: 15,
    height: 15,
  },
  iconAwesomeCheckCircle4: {
    position: "absolute",
    top: 634,
    left: 22,
    width: 15,
    height: 15,
  },
  iconAwesomeCheckCircle5: {
    position: "absolute",
    top: 693,
    left: 22,
    width: 15,
    height: 15,
  },
  iconAwesomeCheckCircle6: {
    position: "absolute",
    top: 747,
    left: 22,
    width: 15,
    height: 15,
  },
  iconAwesomeCheckCircle7: {
    position: "absolute",
    top: 788,
    left: 22,
    width: 15,
    height: 15,
  },
  iconAwesomeCheckCircle8: {
    position: "absolute",
    top: 828,
    left: 22,
    width: 15,
    height: 15,
  },
  iconAwesomeCheckCircle9: {
    position: "absolute",
    top: 879,
    left: 22,
    width: 15,
    height: 15,
  },
  iconAwesomeCheckCircle10: {
    position: "absolute",
    top: 919,
    left: 22,
    width: 15,
    height: 15,
  },
  iconAwesomeCheckCircle11: {
    position: "absolute",
    top: 954,
    left: 22,
    width: 15,
    height: 15,
  },
  iconAwesomeCheckCircle12: {
    position: "absolute",
    top: 989,
    left: 22,
    width: 15,
    height: 15,
  },
  iconAwesomeCheckCircle13: {
    position: "absolute",
    top: 1024,
    left: 22,
    width: 15,
    height: 15,
  },
  iconAwesomeCheckCircle14: {
    position: "absolute",
    top: 1054,
    left: 22,
    width: 15,
    height: 15,
  },
  iconAwesomeCheckCircle15: {
    position: "absolute",
    top: 1083,
    left: 22,
    width: 15,
    height: 15,
  },
  iconAwesomeCheckCircle16: {
    position: "absolute",
    top: 1113,
    left: 22,
    width: 15,
    height: 15,
  },
  iconAwesomeCheckCircle17: {
    position: "absolute",
    top: 1143,
    left: 22,
    width: 15,
    height: 15,
  },
  iconAwesomeCheckCircle18: {
    position: "absolute",
    top: 1178,
    left: 22,
    width: 15,
    height: 15,
  },
  iconAwesomeCheckCircle19: {
    position: "absolute",
    top: 1211,
    left: 22,
    width: 15,
    height: 15,
  },
  iconAwesomeCheckCircle20: {
    position: "absolute",
    top: 1261,
    left: 22,
    width: 15,
    height: 15,
  },
  iconAwesomeCheckCircle21: {
    position: "absolute",
    top: 1314,
    left: 22,
    width: 15,
    height: 15,
  },
  groupView: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: 326,
    height: 1393,
  },
  rectangleView2: {
    position: "absolute",
    marginTop: -342,
    top: "50%",
    right: 0,
    left: 0,
    borderRadius: 21,
    backgroundColor: "#fff",
    shadowColor: "rgba(1, 1, 253, 0.1)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 20,
    elevation: 20,
    shadowOpacity: 1,
    height: 684,
  },
  allEssentialFeatures: {
    position: "absolute",
    marginTop: -8,
    top: "50%",
    left: 0,
    fontSize: 14,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#00003d",
    textAlign: "left",
    width: 267,
  },
  groupView1: {
    position: "absolute",
    top: 20,
    right: 12,
    left: 48,
    height: 16,
  },
  paymentsDomestic: {
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#00003d",
  },
  paymentsDomestic1: {
    margin: 0,
  },
  transferInoutNo: {
    fontFamily: "Helvetica",
    color: "#999",
  },
  transferInoutNoFeeUpto2: {
    margin: 0,
  },
  text3: {
    fontFamily: "Helvetica",
    color: "#999",
  },
  paymentsDomesticTransfer: {
    position: "absolute",
    marginTop: -28,
    top: "50%",
    left: 0,
    fontSize: 14,
    lineHeight: 20,
    textAlign: "left",
    width: 267,
  },
  groupView2: {
    position: "absolute",
    top: 76,
    right: 12,
    left: 48,
    height: 56,
  },
  cards2: {
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#00003d",
  },
  cards3: {
    margin: 0,
  },
  addedExpenseCards1: {
    fontFamily: "Helvetica",
    color: "#999",
  },
  addedExpenseCardsWithSpend1: {
    margin: 0,
  },
  text4: {
    fontFamily: "Helvetica",
    color: "#999",
  },
  freeExpenseCard: {
    margin: 0,
  },
  cardsAddedExpenseCardsWit: {
    position: "absolute",
    marginTop: -28,
    top: "50%",
    left: 0,
    fontSize: 14,
    lineHeight: 20,
    textAlign: "left",
    width: 270,
  },
  groupView3: {
    position: "absolute",
    marginTop: -190,
    top: "50%",
    right: 9,
    left: 48,
    height: 56,
  },
  accountingServices2: {
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#00003d",
  },
  accountingServices3: {
    margin: 0,
  },
  invoices: {
    fontFamily: "Helvetica",
    color: "#999",
  },
  invoices1: {
    margin: 0,
  },
  digitalReceipts: {
    fontFamily: "Helvetica",
    color: "#999",
  },
  digitalReceipts1: {
    margin: 0,
  },
  bankFeed2: {
    fontFamily: "Helvetica",
    color: "#999",
  },
  bankFeed3: {
    margin: 0,
  },
  trackExpenses: {
    fontFamily: "Helvetica",
    color: "#999",
  },
  trackExpenses1: {
    margin: 0,
  },
  text5: {
    fontFamily: "Helvetica",
    color: "#999",
  },
  accountingServicesInvoices: {
    position: "absolute",
    marginTop: -48,
    top: "50%",
    left: 0,
    fontSize: 14,
    lineHeight: 20,
    textAlign: "left",
    width: 270,
  },
  groupView4: {
    position: "absolute",
    marginTop: -115,
    top: "50%",
    right: 9,
    left: 48,
    height: 96,
  },
  slackIntegration: {
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#00003d",
  },
  slackIntegration1: {
    margin: 0,
  },
  comingSoon4: {
    fontFamily: "Helvetica",
    color: "#999",
  },
  comingSoon5: {
    margin: 0,
  },
  text6: {
    fontFamily: "Helvetica",
    color: "#999",
  },
  slackIntegrationComingSoo: {
    position: "absolute",
    marginTop: -18,
    top: "50%",
    left: 0,
    fontSize: 14,
    lineHeight: 20,
    textAlign: "left",
    width: 270,
  },
  groupView5: {
    position: "absolute",
    marginTop: 1,
    top: "50%",
    right: 9,
    left: 48,
    height: 36,
  },
  customerServices: {
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#00003d",
  },
  customerServices1: {
    margin: 0,
  },
  onlinePhone: {
    fontFamily: "Helvetica",
    color: "#999",
  },
  onlinePhone1: {
    margin: 0,
  },
  text7: {
    fontFamily: "Helvetica",
    color: "#999",
  },
  customerServicesOnlinePhon: {
    position: "absolute",
    marginTop: -18,
    top: "50%",
    left: 0,
    fontSize: 14,
    lineHeight: 20,
    textAlign: "left",
    width: 270,
  },
  groupView6: {
    position: "absolute",
    marginTop: 57,
    top: "50%",
    right: 9,
    left: 48,
    height: 36,
  },
  cashbackOnSavings: {
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#00003d",
  },
  cashbackOnSavings1: {
    margin: 0,
  },
  comingSoo: {
    fontFamily: "Helvetica",
    color: "#999",
  },
  comingSoon6: {
    margin: 0,
  },
  cashbackOnSavingsComingS: {
    position: "absolute",
    marginTop: -18,
    top: "50%",
    left: 0,
    fontSize: 14,
    lineHeight: 20,
    textAlign: "left",
    width: 270,
  },
  groupView7: {
    position: "absolute",
    marginTop: 149,
    top: "50%",
    right: 9,
    left: 48,
    height: 36,
  },
  categoriseAndTagSpending: {
    position: "absolute",
    marginTop: -8,
    top: "50%",
    left: 0,
    fontSize: 14,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#00003d",
    textAlign: "left",
    width: 270,
  },
  groupView8: {
    position: "absolute",
    marginTop: 204,
    top: "50%",
    right: 9,
    left: 48,
    height: 16,
  },
  cardPaymentsForeignEXFee1: {
    position: "absolute",
    marginTop: -8,
    top: "50%",
    left: 0,
    fontSize: 14,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#00003d",
    textAlign: "left",
    width: 270,
  },
  groupView9: {
    position: "absolute",
    right: 9,
    bottom: 86,
    left: 48,
    height: 16,
  },
  invoicePaymentsForeignEXFe1: {
    position: "absolute",
    marginTop: -18,
    top: "50%",
    left: 0,
    fontSize: 14,
    lineHeight: 20,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#00003d",
    textAlign: "left",
    width: 270,
  },
  groupView10: {
    position: "absolute",
    right: 9,
    bottom: 30,
    left: 48,
    height: 36,
  },
  plant5TreesAMonth: {
    position: "absolute",
    marginTop: -8,
    top: "50%",
    left: 0,
    fontSize: 14,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#00003d",
    textAlign: "left",
    width: 270,
  },
  groupView11: {
    position: "absolute",
    marginTop: 113,
    top: "50%",
    right: 9,
    left: 48,
    height: 16,
  },
  groupView12: {
    position: "absolute",
    marginTop: -482.93,
    marginLeft: -161.5,
    top: "50%",
    left: "50%",
    width: 326,
    height: 684,
  },
  rectangleView3: {
    position: "absolute",
    marginTop: -342,
    top: "50%",
    right: 0,
    left: 0,
    borderRadius: 21,
    backgroundColor: "#fff",
    shadowColor: "rgba(1, 1, 253, 0.1)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 20,
    elevation: 20,
    shadowOpacity: 1,
    height: 684,
  },
  allAdvanceFeatures: {
    position: "absolute",
    marginTop: -322,
    top: "50%",
    left: 41,
    fontSize: 14,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#00003d",
    textAlign: "left",
    width: 267,
  },
  paymentsDomestic2: {
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#00003d",
  },
  paymentsDomestic3: {
    margin: 0,
  },
  transferInoutNo1: {
    fontFamily: "Helvetica",
    color: "#999",
  },
  transferInoutNoFeeUpto5: {
    margin: 0,
  },
  text8: {
    fontFamily: "Helvetica",
    color: "#999",
  },
  paymentsDomesticTransfer1: {
    position: "absolute",
    marginTop: -286,
    top: "50%",
    left: 41,
    fontSize: 14,
    lineHeight: 20,
    textAlign: "left",
    width: 263,
  },
  cards4: {
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#00003d",
  },
  cards5: {
    margin: 0,
  },
  addedExpenseCards2: {
    fontFamily: "Helvetica",
    color: "#999",
  },
  addedExpenseCardsWithSpend2: {
    margin: 0,
  },
  cardsAddedExpenseCardsWit1: {
    position: "absolute",
    marginTop: -210,
    top: "50%",
    left: 41,
    fontSize: 14,
    lineHeight: 20,
    textAlign: "left",
    width: 263,
  },
  businessToolKit: {
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#00003d",
  },
  businessToolKit1: {
    margin: 0,
  },
  freeLogoDesign: {
    fontFamily: "Helvetica",
    color: "#999",
  },
  freeLogoDesign1: {
    margin: 0,
  },
  tradeMarkRegistration: {
    fontFamily: "Helvetica",
    color: "#999",
  },
  tradeMarkRegistration1: {
    margin: 0,
  },
  desktopSupport: {
    fontFamily: "Helvetica",
    color: "#999",
  },
  desktopSupport1: {
    margin: 0,
  },
  text9: {
    fontFamily: "Helvetica",
    color: "#999",
  },
  businessToolKitFreeLogoD: {
    position: "absolute",
    marginTop: -133,
    top: "50%",
    left: 41,
    fontSize: 14,
    lineHeight: 20,
    textAlign: "left",
    width: 263,
  },
  customerServices2: {
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#00003d",
  },
  customerServices3: {
    margin: 0,
  },
  dedicatedAccountManager: {
    fontFamily: "Helvetica",
    color: "#999",
  },
  dedicatedAccountManager1: {
    margin: 0,
  },
  text10: {
    fontFamily: "Helvetica",
    color: "#999",
  },
  customerServicesDedicatedA: {
    position: "absolute",
    marginTop: 1,
    top: "50%",
    left: 41,
    fontSize: 14,
    lineHeight: 20,
    textAlign: "left",
    width: 263,
  },
  geniusTelecoms10GBSimOnly: {
    position: "absolute",
    marginTop: -37,
    top: "50%",
    left: 41,
    fontSize: 14,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#00003d",
    textAlign: "left",
    width: 263,
  },
  plant10TreesAMonth: {
    position: "absolute",
    marginTop: 57,
    top: "50%",
    left: 41,
    fontSize: 14,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#00003d",
    textAlign: "left",
    width: 263,
  },
  simOnlyDataPlanWith4GBDat: {
    position: "absolute",
    marginTop: 93,
    top: "50%",
    left: 41,
    fontSize: 14,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#00003d",
    textAlign: "left",
    width: 263,
  },
  openAPIAccess: {
    position: "absolute",
    marginTop: 129,
    top: "50%",
    left: 41,
    fontSize: 14,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#00003d",
    textAlign: "left",
    width: 263,
  },
  multipleUserControl: {
    position: "absolute",
    marginTop: 165,
    top: "50%",
    left: 41,
    fontSize: 14,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#00003d",
    textAlign: "left",
    width: 263,
  },
  automaticPayroll: {
    position: "absolute",
    marginTop: 202,
    top: "50%",
    left: 41,
    fontSize: 14,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#00003d",
    textAlign: "left",
    width: 263,
  },
  cardPaymentsForeignEXFee2: {
    position: "absolute",
    marginTop: 238,
    top: "50%",
    left: 41,
    fontSize: 14,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#00003d",
    textAlign: "left",
    width: 263,
  },
  invoicePaymentsForeignEXFe2: {
    position: "absolute",
    marginTop: -18,
    top: "50%",
    left: 0,
    fontSize: 14,
    lineHeight: 20,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#00003d",
    textAlign: "left",
    width: 263,
  },
  groupView13: {
    position: "absolute",
    right: 23,
    bottom: 32,
    left: 41,
    height: 36,
  },
  groupView14: {
    position: "absolute",
    marginTop: -482.93,
    top: "50%",
    right: 0,
    width: 326,
    height: 684,
  },
  path33118Icon: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  groupIcon: {
    position: "absolute",
    height: "6.35%",
    width: "49.25%",
    top: "-62.13%",
    right: "53.94%",
    bottom: "155.78%",
    left: "-3.18%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  groupIcon1: {
    position: "absolute",
    height: "10.54%",
    width: "81.73%",
    top: "35.59%",
    right: "9.14%",
    bottom: "53.87%",
    left: "9.14%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  rectangleView4: {
    position: "absolute",
    height: "33.14%",
    width: "108.22%",
    top: "68.51%",
    right: "-3.68%",
    bottom: "-1.65%",
    left: "-4.55%",
    backgroundColor: "#1a1a1a",
  },
  rectangleIcon: {
    position: "absolute",
    height: "13.04%",
    width: "21.19%",
    top: "101.17%",
    right: "-91.6%",
    bottom: "-14.22%",
    left: "170.41%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  b: {
    position: "absolute",
    top: "-2.08%",
    left: "-3.23%",
    fontSize: 86,
    letterSpacing: 5,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "rgba(0, 0, 0, 0)",
    textAlign: "left",
  },
  groupView15: {
    position: "absolute",
    height: "32.16%",
    width: "31.36%",
    top: "76.67%",
    right: "65.22%",
    bottom: "-8.83%",
    left: "3.42%",
    opacity: 0.4,
  },
  bUSINESS: {
    position: "absolute",
    top: "87.88%",
    left: "10.23%",
    fontSize: 13,
    letterSpacing: 0,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#fff",
    textAlign: "left",
  },
  groupView16: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  groupView17: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  groupIcon2: {
    position: "absolute",
    top: 17,
    right: 15,
    width: 28,
    height: 30,
  },
  groupIcon3: {
    position: "absolute",
    right: 16,
    bottom: 21,
    width: 48,
    height: 41,
  },
  groupIcon4: {
    position: "absolute",
    marginLeft: 30.69,
    top: 21,
    left: "50%",
    width: 17,
    height: 22,
  },
  groupView18: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  card1: {
    position: "absolute",
    top: 0,
    left: 64,
    width: 198,
    height: 299,
  },
  path33118Icon1: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  groupIcon5: {
    position: "absolute",
    height: "6.35%",
    width: "49.25%",
    top: "-62.13%",
    right: "53.94%",
    bottom: "155.78%",
    left: "-3.18%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  groupIcon6: {
    position: "absolute",
    height: "10.54%",
    width: "81.73%",
    top: "35.59%",
    right: "9.14%",
    bottom: "53.87%",
    left: "9.14%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  rectangleView5: {
    position: "absolute",
    height: "33.14%",
    width: "108.22%",
    top: "68.51%",
    right: "-3.68%",
    bottom: "-1.65%",
    left: "-4.55%",
    backgroundColor: "#1a1a1a",
  },
  rectangleIcon1: {
    position: "absolute",
    height: "13.04%",
    width: "21.19%",
    top: "101.17%",
    right: "-91.6%",
    bottom: "-14.22%",
    left: "170.41%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  b1: {
    position: "absolute",
    top: "-2.08%",
    left: "-3.23%",
    fontSize: 86,
    letterSpacing: 5,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "rgba(0, 0, 0, 0)",
    textAlign: "left",
  },
  groupView19: {
    position: "absolute",
    height: "32.16%",
    width: "31.36%",
    top: "76.67%",
    right: "65.22%",
    bottom: "-8.83%",
    left: "3.42%",
    opacity: 0.6,
  },
  bUSINESS1: {
    position: "absolute",
    top: "87.88%",
    left: "10.23%",
    fontSize: 13,
    letterSpacing: 0,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#fff",
    textAlign: "left",
  },
  groupView20: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  groupView21: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  groupIcon7: {
    position: "absolute",
    top: 17,
    right: 15,
    width: 28,
    height: 30,
  },
  groupIcon8: {
    position: "absolute",
    right: 16,
    bottom: 21,
    width: 48,
    height: 41,
  },
  groupIcon9: {
    position: "absolute",
    marginLeft: 30.69,
    top: 21,
    left: "50%",
    width: 17,
    height: 22,
  },
  groupView22: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  card11: {
    position: "absolute",
    marginLeft: -97.5,
    top: 0,
    left: "50%",
    width: 198,
    height: 299,
  },
  path33118Icon2: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  groupIcon10: {
    position: "absolute",
    height: "6.35%",
    width: "49.25%",
    top: "-62.13%",
    right: "53.94%",
    bottom: "155.78%",
    left: "-3.18%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  groupIcon11: {
    position: "absolute",
    height: "10.54%",
    width: "81.73%",
    top: "35.59%",
    right: "9.14%",
    bottom: "53.87%",
    left: "9.14%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  rectangleView6: {
    position: "absolute",
    height: "33.14%",
    width: "108.22%",
    top: "68.51%",
    right: "-3.68%",
    bottom: "-1.65%",
    left: "-4.55%",
    backgroundColor: "#1a1a1a",
  },
  rectangleIcon2: {
    position: "absolute",
    height: "13.04%",
    width: "21.19%",
    top: "101.17%",
    right: "-91.6%",
    bottom: "-14.22%",
    left: "170.41%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  b2: {
    position: "absolute",
    top: "-2.08%",
    left: "-3.23%",
    fontSize: 86,
    letterSpacing: 5,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "rgba(0, 0, 0, 0)",
    textAlign: "left",
  },
  groupView23: {
    position: "absolute",
    height: "32.16%",
    width: "31.36%",
    top: "76.67%",
    right: "65.22%",
    bottom: "-8.83%",
    left: "3.42%",
    opacity: 0.6,
  },
  bUSINESS2: {
    position: "absolute",
    top: "87.88%",
    left: "10.23%",
    fontSize: 13,
    letterSpacing: 0,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#fff",
    textAlign: "left",
  },
  groupView24: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  groupView25: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  groupIcon12: {
    position: "absolute",
    top: 17,
    right: 15,
    width: 28,
    height: 30,
  },
  groupIcon13: {
    position: "absolute",
    right: 16,
    bottom: 21,
    width: 48,
    height: 41,
  },
  groupIcon14: {
    position: "absolute",
    marginLeft: 30.69,
    top: 21,
    left: "50%",
    width: 17,
    height: 22,
  },
  groupView26: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  card12: {
    position: "absolute",
    top: 0,
    right: 64,
    width: 198,
    height: 299,
  },
  iconAwesomeCheckCircle22: {
    position: "absolute",
    top: 439,
    left: 395,
    width: 15,
    height: 15,
  },
  iconAwesomeCheckCircle23: {
    position: "absolute",
    top: 439,
    left: 766,
    width: 15,
    height: 15,
  },
  iconAwesomeCheckCircle24: {
    position: "absolute",
    top: 476,
    left: 766,
    width: 15,
    height: 15,
  },
  iconAwesomeCheckCircle25: {
    position: "absolute",
    top: 551,
    left: 766,
    width: 15,
    height: 15,
  },
  iconAwesomeCheckCircle26: {
    position: "absolute",
    top: 629,
    left: 766,
    width: 15,
    height: 15,
  },
  iconAwesomeCheckCircle27: {
    position: "absolute",
    top: 724,
    left: 766,
    width: 15,
    height: 15,
  },
  iconAwesomeCheckCircle28: {
    position: "absolute",
    top: 762,
    left: 766,
    width: 15,
    height: 15,
  },
  iconAwesomeCheckCircle29: {
    position: "absolute",
    top: 819,
    left: 766,
    width: 15,
    height: 15,
  },
  iconAwesomeCheckCircle30: {
    position: "absolute",
    top: 854,
    left: 766,
    width: 15,
    height: 15,
  },
  iconAwesomeCheckCircle31: {
    position: "absolute",
    top: 891,
    left: 766,
    width: 15,
    height: 15,
  },
  iconAwesomeCheckCircle32: {
    position: "absolute",
    top: 926,
    left: 766,
    width: 15,
    height: 15,
  },
  iconAwesomeCheckCircle33: {
    position: "absolute",
    top: 967,
    left: 766,
    width: 15,
    height: 15,
  },
  iconAwesomeCheckCircle34: {
    position: "absolute",
    top: 999,
    left: 766,
    width: 15,
    height: 15,
  },
  iconAwesomeCheckCircle35: {
    position: "absolute",
    top: 1035,
    left: 766,
    width: 15,
    height: 15,
  },
  iconAwesomeCheckCircle36: {
    position: "absolute",
    top: 494,
    left: 395,
    width: 15,
    height: 15,
  },
  iconAwesomeCheckCircle37: {
    position: "absolute",
    top: 571,
    left: 395,
    width: 15,
    height: 15,
  },
  iconAwesomeCheckCircle38: {
    position: "absolute",
    top: 648,
    left: 395,
    width: 15,
    height: 15,
  },
  iconAwesomeCheckCircle39: {
    position: "absolute",
    top: 764,
    left: 395,
    width: 15,
    height: 15,
  },
  iconAwesomeCheckCircle40: {
    position: "absolute",
    top: 816,
    left: 395,
    width: 15,
    height: 15,
  },
  iconAwesomeCheckCircle41: {
    position: "absolute",
    top: 873,
    left: 395,
    width: 15,
    height: 15,
  },
  iconAwesomeCheckCircle42: {
    position: "absolute",
    top: 910,
    left: 395,
    width: 15,
    height: 15,
  },
  iconAwesomeCheckCircle43: {
    position: "absolute",
    top: 967,
    left: 395,
    width: 15,
    height: 15,
  },
  iconAwesomeCheckCircle44: {
    position: "absolute",
    top: 1004,
    left: 395,
    width: 15,
    height: 15,
  },
  iconAwesomeCheckCircle45: {
    position: "absolute",
    top: 1038,
    left: 395,
    width: 15,
    height: 15,
  },
  component2376: {
    width: "308.02%",
    position: "relative",
    height: 1804,
  },
  scrollGroup30: {
    width: 374,
    height: 1867,
    maxWidth: 374,
    alignSelf: "center",
  },
  hello6: {
    position: "relative",
    fontSize: 26,
    fontWeight: "700",
    fontFamily: "Typo Grotesk",
    color: "#00003d",
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
  text11: {
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
  rectangleView7: {
    position: "absolute",
    bottom: 0,
    left: 0,
    borderRadius: 2,
    backgroundColor: "#272727",
    width: 3,
    height: 4,
  },
  rectangleView8: {
    position: "absolute",
    marginLeft: -3.5,
    bottom: 0,
    left: "50%",
    borderRadius: 2,
    backgroundColor: "#272727",
    width: 3,
    height: 6,
  },
  rectangleView9: {
    position: "absolute",
    marginLeft: 0.5,
    bottom: 0,
    left: "50%",
    borderRadius: 2,
    backgroundColor: "#272727",
    width: 3,
    height: 9,
  },
  rectangleView10: {
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
  iconFeatherArrowLeft: {
    position: "absolute",
    marginLeft: -0.5,
    bottom: 4,
    left: "50%",
    width: 17,
    height: 17,
  },
  groupPressable: {
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
  rectangleView11: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: 15,
    backgroundColor: "#0101fd",
    shadowColor: "rgba(1, 1, 253, 0.1)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 20,
    elevation: 20,
    shadowOpacity: 1,
  },
  maskGroup236: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 13,
    left: 0,
  },
  groupView27: {
    position: "absolute",
    marginTop: -30,
    top: "50%",
    right: 0,
    left: 0,
    height: 60,
  },
  component208148: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  hello7: {
    position: "absolute",
    top: "36.67%",
    left: "35.89%",
    fontSize: 15,
    lineHeight: 17,
    fontFamily: "Helvetica",
    color: "#fff",
    textAlign: "left",
  },
  groupPressable1: {
    position: "relative",
    width: 326,
    height: 60,
  },
  plan: {
    position: "relative",
    backgroundColor: "#4b4b4b",
    flex: 1,
    width: "100%",
    flexDirection: "column",
    alignItems: "flex-start",
  },
});

export default Plan;
