import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";

const ChooseCardsPremium = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.chooseCardsPremium}>
      <View style={[styles.rectangleView, styles.mt_10]} />
      <Pressable
        style={[styles.component2374, styles.mt30, styles.ml_350]}
        onPress={() => navigation.navigate("ChooseCardsElite")}
      >
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
          <Text style={styles.pDFAndCSVStatements}>PDF and CSV Statements</Text>
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
                <Text style={styles.customerServices}>Customer Services:</Text>
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
            <Text style={styles.plant5TreesAMonth}>Plant 5 trees a month</Text>
          </View>
        </View>
        <View style={styles.groupView14}>
          <View style={styles.rectangleView3} />
          <Text style={styles.allAdvanceFeatures}>All Advance Features</Text>
          <Text style={styles.paymentsDomesticTransfer1}>
            <Text style={styles.paymentsDomestic3}>
              <Text style={styles.paymentsDomestic2}>Payments (domestic):</Text>
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
          <Text style={styles.plant10TreesAMonth}>Plant 10 trees a month</Text>
          <Text style={styles.simOnlyDataPlanWith4GBDat}>
            Sim Only DataPlan with 4GB Data
          </Text>
          <Text style={styles.openAPIAccess}>Open API Access</Text>
          <Text style={styles.multipleUserControl}>Multiple User Control</Text>
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
                source={require("../assets/path-331182.png")}
              />
              <View style={styles.groupView16}>
                <Image
                  style={styles.groupIcon}
                  resizeMode="cover"
                  source={require("../assets/group-317592.png")}
                />
                <Image
                  style={styles.groupIcon1}
                  resizeMode="cover"
                  source={require("../assets/group-317602.png")}
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
              source={require("../assets/group-317642.png")}
            />
            <Image
              style={styles.groupIcon3}
              resizeMode="cover"
              source={require("../assets/group-317662.png")}
            />
            <Image
              style={styles.groupIcon4}
              resizeMode="cover"
              source={require("../assets/group-317672.png")}
            />
          </View>
        </View>
        <View style={styles.card11}>
          <View style={styles.groupView22}>
            <View style={styles.groupView21}>
              <Image
                style={styles.path33118Icon1}
                resizeMode="cover"
                source={require("../assets/path-331183.png")}
              />
              <View style={styles.groupView20}>
                <Image
                  style={styles.groupIcon5}
                  resizeMode="cover"
                  source={require("../assets/group-317592.png")}
                />
                <Image
                  style={styles.groupIcon6}
                  resizeMode="cover"
                  source={require("../assets/group-317602.png")}
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
              source={require("../assets/group-317642.png")}
            />
            <Image
              style={styles.groupIcon8}
              resizeMode="cover"
              source={require("../assets/group-317662.png")}
            />
            <Image
              style={styles.groupIcon9}
              resizeMode="cover"
              source={require("../assets/group-317672.png")}
            />
          </View>
        </View>
        <View style={styles.card12}>
          <View style={styles.groupView26}>
            <View style={styles.groupView25}>
              <Image
                style={styles.path33118Icon2}
                resizeMode="cover"
                source={require("../assets/path-331184.png")}
              />
              <View style={styles.groupView24}>
                <Image
                  style={styles.groupIcon10}
                  resizeMode="cover"
                  source={require("../assets/group-317594.png")}
                />
                <Image
                  style={styles.groupIcon11}
                  resizeMode="cover"
                  source={require("../assets/group-317602.png")}
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
              source={require("../assets/group-317642.png")}
            />
            <Image
              style={styles.groupIcon13}
              resizeMode="cover"
              source={require("../assets/group-317662.png")}
            />
            <Image
              style={styles.groupIcon14}
              resizeMode="cover"
              source={require("../assets/group-317672.png")}
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
      </Pressable>
      <View style={[styles.groupView76, styles.mt300, styles.ml_2414]}>
        <View style={styles.rectangleView7} />
        <View style={styles.groupView28}>
          <View style={styles.groupView27}>
            <Image
              style={styles.groupIcon15}
              resizeMode="cover"
              source={require("../assets/group-30429.png")}
            />
            <Image
              style={styles.subtraction7Icon}
              resizeMode="cover"
              source={require("../assets/subtraction-7.png")}
            />
            <Image
              style={styles.path23806Icon}
              resizeMode="cover"
              source={require("../assets/path-23806.png")}
            />
            <Text style={styles.history}>debit</Text>
            <Text style={styles.history1}>mastercard</Text>
            <LinearGradient
              style={styles.groupLinearGradient}
              locations={[0, 1]}
              colors={["#f7ebb3", "#ce9c20"]}
            >
              <Image
                style={styles.groupIcon16}
                resizeMode="cover"
                source={require("../assets/group-30436.png")}
              />
            </LinearGradient>
            <Text style={styles.text11}>**** **** **** ****</Text>
            <Text style={styles.text12}>CVC</Text>
            <Text style={styles.text13}>***</Text>
            <Text style={styles.text14}>Exp Date **/**</Text>
            <Image
              style={styles.maskGroup237}
              resizeMode="cover"
              source={require("../assets/mask-group-237.png")}
            />
            <Image
              style={styles.groupIcon17}
              resizeMode="cover"
              source={require("../assets/group-30596.png")}
            />
            <Image
              style={styles.maskGroup238}
              resizeMode="cover"
              source={require("../assets/mask-group-238.png")}
            />
            <Image
              style={styles.iconFeatherWifi}
              resizeMode="cover"
              source={require("../assets/icon-featherwifi.png")}
            />
            <Image
              style={styles.layer12Icon}
              resizeMode="cover"
              source={require("../assets/layer-123.png")}
            />
            <Image
              style={styles.rectangleIcon3}
              resizeMode="cover"
              source={require("../assets/rectangle-6071.png")}
            />
          </View>
          <Text style={styles.hello6}>Elite</Text>
          <Text style={styles.hello7}>£63.00</Text>
        </View>
        <View style={styles.groupView30}>
          <View style={styles.groupView29}>
            <Image
              style={styles.groupIcon18}
              resizeMode="cover"
              source={require("../assets/group-30429.png")}
            />
            <Image
              style={styles.subtraction7Icon1}
              resizeMode="cover"
              source={require("../assets/subtraction-7.png")}
            />
            <Image
              style={styles.path23806Icon1}
              resizeMode="cover"
              source={require("../assets/path-23806.png")}
            />
            <Text style={styles.history2}>debit</Text>
            <Text style={styles.history3}>mastercard</Text>
            <LinearGradient
              style={styles.groupLinearGradient1}
              locations={[0, 1]}
              colors={["#f7ebb3", "#ce9c20"]}
            >
              <Image
                style={styles.groupIcon19}
                resizeMode="cover"
                source={require("../assets/group-30436.png")}
              />
            </LinearGradient>
            <Text style={styles.text15}>**** **** **** ****</Text>
            <Text style={styles.text16}>CVC</Text>
            <Text style={styles.text17}>***</Text>
            <Text style={styles.text18}>Exp Date **/**</Text>
            <Image
              style={styles.maskGroup2371}
              resizeMode="cover"
              source={require("../assets/mask-group-237.png")}
            />
            <Image
              style={styles.groupIcon20}
              resizeMode="cover"
              source={require("../assets/group-30596.png")}
            />
            <Image
              style={styles.maskGroup2381}
              resizeMode="cover"
              source={require("../assets/mask-group-238.png")}
            />
            <Image
              style={styles.iconFeatherWifi1}
              resizeMode="cover"
              source={require("../assets/icon-featherwifi.png")}
            />
            <Image
              style={styles.layer12Icon1}
              resizeMode="cover"
              source={require("../assets/layer-123.png")}
            />
            <Image
              style={styles.rectangleIcon4}
              resizeMode="cover"
              source={require("../assets/rectangle-6071.png")}
            />
          </View>
          <Text style={styles.hello8}>Premium</Text>
          <Text style={styles.hello9}>£63.00</Text>
        </View>
        <View style={styles.groupView32}>
          <View style={styles.groupView31}>
            <Image
              style={styles.groupIcon21}
              resizeMode="cover"
              source={require("../assets/group-304292.png")}
            />
            <Image
              style={styles.subtraction7Icon2}
              resizeMode="cover"
              source={require("../assets/subtraction-7.png")}
            />
            <Image
              style={styles.path23806Icon2}
              resizeMode="cover"
              source={require("../assets/path-23806.png")}
            />
            <Text style={styles.history4}>debit</Text>
            <Text style={styles.history5}>mastercard</Text>
            <LinearGradient
              style={styles.groupLinearGradient2}
              locations={[0, 1]}
              colors={["#f7ebb3", "#ce9c20"]}
            >
              <Image
                style={styles.groupIcon22}
                resizeMode="cover"
                source={require("../assets/group-30436.png")}
              />
            </LinearGradient>
            <Text style={styles.text19}>**** **** **** ****</Text>
            <Text style={styles.text20}>CVC</Text>
            <Text style={styles.text21}>***</Text>
            <Text style={styles.text22}>Exp Date **/**</Text>
            <Image
              style={styles.maskGroup2372}
              resizeMode="cover"
              source={require("../assets/mask-group-237.png")}
            />
            <Image
              style={styles.groupIcon23}
              resizeMode="cover"
              source={require("../assets/group-30596.png")}
            />
            <Image
              style={styles.maskGroup2382}
              resizeMode="cover"
              source={require("../assets/mask-group-238.png")}
            />
            <Image
              style={styles.iconFeatherWifi2}
              resizeMode="cover"
              source={require("../assets/icon-featherwifi.png")}
            />
            <Image
              style={styles.layer12Icon2}
              resizeMode="cover"
              source={require("../assets/layer-123.png")}
            />
            <Image
              style={styles.rectangleIcon5}
              resizeMode="cover"
              source={require("../assets/rectangle-6071.png")}
            />
          </View>
          <Text style={styles.hello10}>Standard</Text>
        </View>
        <Text style={styles.hello11}>Free</Text>
        <View style={styles.groupView33}>
          <View style={styles.homeIndicator} />
        </View>
        <View style={styles.groupView34}>
          <View style={styles.homeIndicator1} />
        </View>
        <View style={styles.groupView35}>
          <View style={styles.homeIndicator2} />
        </View>
        <Text style={styles.hello12}>Get started with the basic features</Text>
        <Text style={styles.hello13}>Save 24% on the annual plan</Text>
        <Text style={styles.hello14}>Choose Cards</Text>
        <View style={styles.lineView} />
        <Text style={styles.findAllFeesInTheBusiness}>
          Find all fees in the Business Fees Page. If you downgrade or cancel
          your plan within 3 months of ordering your free Metal card a
          cancellation fee of £49 will apply.
        </Text>
        <Text style={styles.findAllFeesInTheBusiness1}>
          Find all fees in the Business Fees Page. If you downgrade or cancel
          your plan within 3 months of ordering your free Metal card a
          cancellation fee of £49 will apply.
        </Text>
        <Text style={styles.findAllFeesInTheBusiness2}>
          Find all fees in the Business Fees Page. If you downgrade or cancel
          your plan within 3 months of ordering your free Metal card a
          cancellation fee of £49 will apply.
        </Text>
        <View style={styles.groupView39}>
          <View style={styles.rectangleView8} />
          <View style={styles.groupView36}>
            <Text style={styles.exchange50kAtTheInterbank1}>
              <Text style={styles.exchange50kAtTheInterbank}>
                <Text style={styles.exchange50kAt}>
                  Exchange £50k at the interbank rate
                </Text>
              </Text>
              <Text style={styles.a04MarkupAppliesForEach}>
                <Text style={styles.a04Markup}>
                  A 0.4% markup applies for each FX outside of the free
                  allowance
                </Text>
              </Text>
            </Text>
            <Image
              style={styles.iconAwesomeExchangeAlt}
              resizeMode="cover"
              source={require("../assets/icon-awesomeexchangealt.png")}
            />
          </View>
          <View style={styles.groupView37}>
            <Text style={styles.freeInternationalPaymentsA}>
              <Text style={styles.freeInternationalPayments1}>
                <Text style={styles.freeInternationalPayments}>
                  50 free international payments
                </Text>
              </Text>
              <Text style={styles.a3FeeAppliesPerInternati}>
                <Text style={styles.a3Fee}>
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
          <View style={styles.groupView38}>
            <Text style={styles.paymentApproval}>Payment approval</Text>
            <Image
              style={styles.iconOpenEye}
              resizeMode="cover"
              source={require("../assets/icon-openeye.png")}
            />
          </View>
        </View>
        <View style={styles.groupView43}>
          <View style={styles.rectangleView9} />
          <View style={styles.groupView40}>
            <Text style={styles.exchange50kAtTheInterbank3}>
              <Text style={styles.exchange50kAtTheInterbank2}>
                <Text style={styles.exchange50kAt1}>
                  Exchange £50k at the interbank rate
                </Text>
              </Text>
              <Text style={styles.a04MarkupAppliesForEach1}>
                <Text style={styles.a04Markup1}>
                  A 0.4% markup applies for each FX outside of the free
                  allowance
                </Text>
              </Text>
            </Text>
            <Image
              style={styles.iconAwesomeExchangeAlt1}
              resizeMode="cover"
              source={require("../assets/icon-awesomeexchangealt.png")}
            />
          </View>
          <View style={styles.groupView41}>
            <Text style={styles.freeInternationalPaymentsA1}>
              <Text style={styles.freeInternationalPayments3}>
                <Text style={styles.freeInternationalPayments2}>
                  50 free international payments
                </Text>
              </Text>
              <Text style={styles.a3FeeAppliesPerInternati1}>
                <Text style={styles.a3Fee1}>
                  A £3 fee applies per international payment outside of the free
                  allowance
                </Text>
              </Text>
            </Text>
            <Image
              style={styles.iconAwesomeGlobe1}
              resizeMode="cover"
              source={require("../assets/icon-awesomeglobe.png")}
            />
          </View>
          <View style={styles.groupView42}>
            <Text style={styles.paymentApproval1}>Payment approval</Text>
            <Image
              style={styles.iconOpenEye1}
              resizeMode="cover"
              source={require("../assets/icon-openeye.png")}
            />
          </View>
        </View>
        <View style={styles.groupView45}>
          <View style={styles.rectangleView10} />
          <Text style={styles.hello15}>Upgrade to unlock</Text>
          <View style={styles.groupView44}>
            <Text style={styles.dedicatedAccountManager2}>
              Dedicated account manager
            </Text>
            <Image
              style={styles.iconMaterialPerson}
              resizeMode="cover"
              source={require("../assets/icon-materialperson.png")}
            />
          </View>
        </View>
        <View style={styles.groupView47}>
          <View style={styles.rectangleView11} />
          <Text style={styles.hello16}>Upgrade to unlock</Text>
          <View style={styles.groupView46}>
            <Text style={styles.dedicatedAccountManager3}>
              Dedicated account manager
            </Text>
            <Image
              style={styles.iconMaterialPerson1}
              resizeMode="cover"
              source={require("../assets/icon-materialperson.png")}
            />
          </View>
        </View>
        <View style={styles.groupView49}>
          <View style={styles.rectangleView12} />
          <Text style={styles.hello17}>Upgrade to unlock</Text>
          <View style={styles.groupView48}>
            <Text style={styles.dedicatedAccountManager4}>
              Dedicated account manager
            </Text>
            <Image
              style={styles.iconMaterialPerson2}
              resizeMode="cover"
              source={require("../assets/icon-materialperson.png")}
            />
          </View>
        </View>
        <View style={styles.groupView51}>
          <View style={styles.rectangleView13} />
          <Text style={styles.hello18}>Upgrade to unlock</Text>
          <View style={styles.groupView50}>
            <Text style={styles.dedicatedAccountManager5}>
              Dedicated account manager
            </Text>
            <Image
              style={styles.iconMaterialPerson3}
              resizeMode="cover"
              source={require("../assets/icon-materialperson3.png")}
            />
          </View>
        </View>
        <View style={styles.groupView53}>
          <View style={styles.rectangleView14} />
          <Text style={styles.hello19}>Upgrade to unlock</Text>
          <View style={styles.groupView52}>
            <Text style={styles.dedicatedAccountManager6}>
              Dedicated account manager
            </Text>
            <Image
              style={styles.iconMaterialPerson4}
              resizeMode="cover"
              source={require("../assets/icon-materialperson3.png")}
            />
          </View>
        </View>
        <View style={styles.groupView55}>
          <View style={styles.rectangleView15} />
          <Text style={styles.hello20}>Upgrade to unlock</Text>
          <View style={styles.groupView54}>
            <Text style={styles.dedicatedAccountManager7}>
              Dedicated account manager
            </Text>
            <Image
              style={styles.iconMaterialPerson5}
              resizeMode="cover"
              source={require("../assets/icon-materialperson3.png")}
            />
          </View>
        </View>
        <View style={styles.groupView56}>
          <View style={styles.rectangleView16} />
          <Text style={styles.hello21}>Additional features</Text>
        </View>
        <View style={styles.groupView58}>
          <View style={styles.rectangleView17} />
          <Text style={styles.hello22}>Additional features</Text>
          <View style={styles.groupView57}>
            <Text style={styles.rewardsFreePaymentsToCarb}>
              <Text style={styles.rewards1}>
                <Text style={styles.rewards}>Rewards</Text>
              </Text>
              <Text style={styles.blankLine1}>
                <Text style={styles.blankLine}> </Text>
              </Text>
              <Text style={styles.freePaymentsToCarbonyteAcc}>
                <Text style={styles.freePaymentsTo}>
                  Free payments to Carbonyte accounts
                </Text>
              </Text>
              <Text style={styles.blankLine3}>
                <Text style={styles.blankLine2}> </Text>
              </Text>
              <Text style={styles.iBANsForGlobalTransfers}>
                <Text style={styles.iBANsForGlobal}>
                  IBANs for global transfers
                </Text>
              </Text>
              <Text style={styles.blankLine5}>
                <Text style={styles.blankLine4}> </Text>
              </Text>
              <Text style={styles.localAccountsInGBPAndEUR}>
                <Text style={styles.localAccountsIn}>
                  Local accounts in GBP and EUR
                </Text>
              </Text>
              <Text style={styles.blankLine7}>
                <Text style={styles.blankLine6}> </Text>
              </Text>
              <Text style={styles.acceptPaymentsOnYourWebsit}>
                <Text style={styles.acceptPaymentsOn}>
                  Accept payments on your website
                </Text>
              </Text>
              <Text style={styles.blankLine9}>
                <Text style={styles.blankLine8}> </Text>
              </Text>
              <Text style={styles.paymentRequestsWithLinksAn}>
                <Text style={styles.paymentRequestsWith}>
                  Payment requests with links and QR codes
                </Text>
              </Text>
              <Text style={styles.blankLine11}>
                <Text style={styles.blankLine10}> </Text>
              </Text>
              <Text style={styles.manageRecurringPayments1}>
                <Text style={styles.manageRecurringPayments}>
                  Manage recurring payments
                </Text>
              </Text>
              <Text style={styles.blankLine13}>
                <Text style={styles.blankLine12}> </Text>
              </Text>
              <Text style={styles.unlimitedTeamMembers1}>
                <Text style={styles.unlimitedTeamMembers}>
                  Unlimited team members
                </Text>
              </Text>
              <Text style={styles.blankLine15}>
                <Text style={styles.blankLine14}> </Text>
              </Text>
              <Text style={styles.teamMemberPermissions1}>
                <Text style={styles.teamMemberPermissions}>
                  Team member permissions
                </Text>
              </Text>
              <Text style={styles.blankLine17}>
                <Text style={styles.blankLine16}> </Text>
              </Text>
              <Text style={styles.expensesManagement1}>
                <Text style={styles.expensesManagement}>
                  Expenses Management
                </Text>
              </Text>
              <Text style={styles.addMembersFor5PerMonth}>
                <Text style={styles.addMembersFor}>
                  Add members for £5 per month
                </Text>
              </Text>
              <Text style={styles.blankLine19}>
                <Text style={styles.blankLine18}> </Text>
              </Text>
              <Text style={styles.automatedPayroll1}>
                <Text style={styles.automatedPayroll}>Automated payroll</Text>
              </Text>
              <Text style={styles.addMembersFor5PerMonth1}>
                <Text style={styles.addMembersFor1}>
                  Add members for £5 per month
                </Text>
              </Text>
              <Text style={styles.blankLine21}>
                <Text style={styles.blankLine20}> </Text>
              </Text>
              <Text style={styles.createAndTrackYourInvoices}>
                <Text style={styles.createAndTrack}>
                  Create and track your invoices
                </Text>
              </Text>
              <Text style={styles.blankLine23}>
                <Text style={styles.blankLine22}> </Text>
              </Text>
              <Text style={styles.connectYourCompanysApps}>
                <Text style={styles.connectYourCompanys}>
                  Connect your company's apps
                </Text>
              </Text>
              <Text style={styles.blankLine25}>
                <Text style={styles.blankLine24}> </Text>
              </Text>
              <Text style={styles.availableOnTheWebOrViaTh}>
                <Text style={styles.availableOnThe}>
                  Available on the web or via the app
                </Text>
              </Text>
              <Text style={styles.text23} />
            </Text>
            <Image
              style={styles.iconAwesomeGift}
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
              style={styles.groupIcon24}
              resizeMode="cover"
              source={require("../assets/group-30624.png")}
            />
            <Image
              style={styles.marketplaceFacebookSeeklogoIcon}
              resizeMode="cover"
              source={require("../assets/marketplacefacebookseeklogocom.png")}
            />
            <Image
              style={styles.iconAwesomeCoins}
              resizeMode="cover"
              source={require("../assets/icon-awesomecoins.png")}
            />
            <Image
              style={styles.subtraction12Icon}
              resizeMode="cover"
              source={require("../assets/subtraction-12.png")}
            />
            <Image
              style={styles.union27Icon}
              resizeMode="cover"
              source={require("../assets/union-27.png")}
            />
            <Image
              style={styles.union28Icon}
              resizeMode="cover"
              source={require("../assets/union-27.png")}
            />
            <Image
              style={styles.iconSimpleReadthedocs}
              resizeMode="cover"
              source={require("../assets/icon-simplereadthedocs.png")}
            />
            <Image
              style={styles.iconMaterialAccountBalance}
              resizeMode="cover"
              source={require("../assets/icon-materialaccountbalancewallet.png")}
            />
            <Image
              style={styles.iconMaterialUndo}
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
        <View style={styles.groupView60}>
          <View style={styles.rectangleView18} />
          <Text style={styles.hello23}>Additional features</Text>
          <View style={styles.groupView59}>
            <Text style={styles.rewardsFreePaymentsToCarb1}>
              <Text style={styles.rewards3}>
                <Text style={styles.rewards2}>Rewards</Text>
              </Text>
              <Text style={styles.blankLine27}>
                <Text style={styles.blankLine26}> </Text>
              </Text>
              <Text style={styles.freePaymentsToCarbonyteAcc1}>
                <Text style={styles.freePaymentsTo1}>
                  Free payments to Carbonyte accounts
                </Text>
              </Text>
              <Text style={styles.blankLine29}>
                <Text style={styles.blankLine28}> </Text>
              </Text>
              <Text style={styles.iBANsForGlobalTransfers1}>
                <Text style={styles.iBANsForGlobal1}>
                  IBANs for global transfers
                </Text>
              </Text>
              <Text style={styles.blankLine31}>
                <Text style={styles.blankLine30}> </Text>
              </Text>
              <Text style={styles.localAccountsInGBPAndEUR1}>
                <Text style={styles.localAccountsIn1}>
                  Local accounts in GBP and EUR
                </Text>
              </Text>
              <Text style={styles.blankLine33}>
                <Text style={styles.blankLine32}> </Text>
              </Text>
              <Text style={styles.acceptPaymentsOnYourWebsit1}>
                <Text style={styles.acceptPaymentsOn1}>
                  Accept payments on your website
                </Text>
              </Text>
              <Text style={styles.blankLine35}>
                <Text style={styles.blankLine34}> </Text>
              </Text>
              <Text style={styles.paymentRequestsWithLinksAn1}>
                <Text style={styles.paymentRequestsWith1}>
                  Payment requests with links and QR codes
                </Text>
              </Text>
              <Text style={styles.blankLine37}>
                <Text style={styles.blankLine36}> </Text>
              </Text>
              <Text style={styles.manageRecurringPayments3}>
                <Text style={styles.manageRecurringPayments2}>
                  Manage recurring payments
                </Text>
              </Text>
              <Text style={styles.blankLine39}>
                <Text style={styles.blankLine38}> </Text>
              </Text>
              <Text style={styles.unlimitedTeamMembers3}>
                <Text style={styles.unlimitedTeamMembers2}>
                  Unlimited team members
                </Text>
              </Text>
              <Text style={styles.blankLine41}>
                <Text style={styles.blankLine40}> </Text>
              </Text>
              <Text style={styles.teamMemberPermissions3}>
                <Text style={styles.teamMemberPermissions2}>
                  Team member permissions
                </Text>
              </Text>
              <Text style={styles.blankLine43}>
                <Text style={styles.blankLine42}> </Text>
              </Text>
              <Text style={styles.expensesManagement3}>
                <Text style={styles.expensesManagement2}>
                  Expenses Management
                </Text>
              </Text>
              <Text style={styles.addMembersFor5PerMonth2}>
                <Text style={styles.addMembersFor2}>
                  Add members for £5 per month
                </Text>
              </Text>
              <Text style={styles.blankLine45}>
                <Text style={styles.blankLine44}> </Text>
              </Text>
              <Text style={styles.automatedPayroll3}>
                <Text style={styles.automatedPayroll2}>Automated payroll</Text>
              </Text>
              <Text style={styles.addMembersFor5PerMonth3}>
                <Text style={styles.addMembersFor3}>
                  Add members for £5 per month
                </Text>
              </Text>
              <Text style={styles.blankLine47}>
                <Text style={styles.blankLine46}> </Text>
              </Text>
              <Text style={styles.createAndTrackYourInvoices1}>
                <Text style={styles.createAndTrack1}>
                  Create and track your invoices
                </Text>
              </Text>
              <Text style={styles.blankLine49}>
                <Text style={styles.blankLine48}> </Text>
              </Text>
              <Text style={styles.connectYourCompanysApps1}>
                <Text style={styles.connectYourCompanys1}>
                  Connect your company's apps
                </Text>
              </Text>
              <Text style={styles.blankLine51}>
                <Text style={styles.blankLine50}> </Text>
              </Text>
              <Text style={styles.availableOnTheWebOrViaTh1}>
                <Text style={styles.availableOnThe1}>
                  Available on the web or via the app
                </Text>
              </Text>
              <Text style={styles.text24} />
            </Text>
            <Image
              style={styles.iconAwesomeGift1}
              resizeMode="cover"
              source={require("../assets/icon-awesomegift.png")}
            />
            <Image
              style={styles.iconAwesomeExchangeAlt3}
              resizeMode="cover"
              source={require("../assets/icon-awesomeexchangealt.png")}
            />
            <Image
              style={styles.iconAwesomeGlobe3}
              resizeMode="cover"
              source={require("../assets/icon-awesomeglobe.png")}
            />
            <Image
              style={styles.groupIcon25}
              resizeMode="cover"
              source={require("../assets/group-306241.png")}
            />
            <Image
              style={styles.marketplaceFacebookSeeklogoIcon1}
              resizeMode="cover"
              source={require("../assets/marketplacefacebookseeklogocom.png")}
            />
            <Image
              style={styles.iconAwesomeCoins1}
              resizeMode="cover"
              source={require("../assets/icon-awesomecoins.png")}
            />
            <Image
              style={styles.subtraction12Icon1}
              resizeMode="cover"
              source={require("../assets/subtraction-12.png")}
            />
            <Image
              style={styles.union27Icon1}
              resizeMode="cover"
              source={require("../assets/union-27.png")}
            />
            <Image
              style={styles.union28Icon1}
              resizeMode="cover"
              source={require("../assets/union-27.png")}
            />
            <Image
              style={styles.iconSimpleReadthedocs1}
              resizeMode="cover"
              source={require("../assets/icon-simplereadthedocs.png")}
            />
            <Image
              style={styles.iconMaterialAccountBalance1}
              resizeMode="cover"
              source={require("../assets/icon-materialaccountbalancewallet.png")}
            />
            <Image
              style={styles.iconMaterialUndo1}
              resizeMode="cover"
              source={require("../assets/icon-materialundo.png")}
            />
            <Image
              style={styles.iconOpenDocument1}
              resizeMode="cover"
              source={require("../assets/icon-opendocument.png")}
            />
            <Image
              style={styles.iconIonicMdApps1}
              resizeMode="cover"
              source={require("../assets/icon-ionicmdapps.png")}
            />
            <Image
              style={styles.iconAwesomeMobileAlt1}
              resizeMode="cover"
              source={require("../assets/icon-awesomemobilealt.png")}
            />
          </View>
        </View>
        <View style={styles.groupView63}>
          <View style={styles.groupView62}>
            <View style={styles.rectangleView19} />
            <View style={styles.groupView61}>
              <Text style={styles.freeMetalCardsPlasticAnd1}>
                <Text style={styles.freeMetalCardsPlasticAnd}>
                  <Text style={styles.freeMetalCards}>
                    2 free Metal cards + plastic and virtual cards for every
                    member
                  </Text>
                </Text>
                <Text style={styles.perMetalCardOutsideOfThe}>
                  <Text style={styles.perMetalCard}>
                    £49 per metal card outside of the free allowance
                  </Text>
                </Text>
                <Text style={styles.blankLine53}>
                  <Text style={styles.blankLine52}> </Text>
                </Text>
                <Text style={styles.freeInternationalPayments5}>
                  <Text style={styles.freeInternationalPayments4}>
                    50 free international payments
                  </Text>
                </Text>
                <Text style={styles.a3FeeAppliesPerInternati3}>
                  <Text style={styles.a3FeeAppliesPerInternati2}>
                    <Text style={styles.a3Fee2}>
                      A £3 fee applies per international payment outside of the
                      free allowance
                    </Text>
                  </Text>
                </Text>
                <Text style={styles.blankLine56}>
                  <Text style={styles.blankLine55}>
                    <Text style={styles.blankLine54}> </Text>
                  </Text>
                </Text>
                <Text style={styles.freeLocalPayments2}>
                  <Text style={styles.freeLocalPayments1}>
                    <Text style={styles.freeLocalPayments}>
                      1,000 free local payments
                    </Text>
                  </Text>
                </Text>
                <Text style={styles.a020FeeAppliesPerLocal1}>
                  <Text style={styles.a020FeeAppliesPerLocal}>
                    <Text style={styles.a020Fee}>
                      A £0.20 fee applies per local payment outside of the free
                      allowance
                    </Text>
                  </Text>
                </Text>
                <Text style={styles.blankLine59}>
                  <Text style={styles.blankLine58}>
                    <Text style={styles.blankLine57}> </Text>
                  </Text>
                </Text>
                <Text style={styles.exchange50kAtTheInterbank5}>
                  <Text style={styles.exchange50kAtTheInterbank4}>
                    <Text style={styles.exchange50kAt2}>
                      Exchange £50k at the interbank rate
                    </Text>
                  </Text>
                </Text>
                <Text style={styles.a04MarkupAppliesForEach3}>
                  <Text style={styles.a04MarkupAppliesForEach2}>
                    <Text style={styles.a04Markup2}>
                      A 0.4% markup applies for each FX outside of the free
                      allowance
                    </Text>
                  </Text>
                </Text>
                <Text style={styles.blankLine62}>
                  <Text style={styles.blankLine61}>
                    <Text style={styles.blankLine60}> </Text>
                  </Text>
                </Text>
                <Text style={styles.paymentAcceptance2}>
                  <Text style={styles.paymentAcceptance1}>
                    <Text style={styles.paymentAcceptance}>
                      Payment acceptance
                    </Text>
                  </Text>
                </Text>
                <Text style={styles.onlineCardPaymentsCardRea}>
                  <Text style={styles.onlineCardPayments}>
                    Online card payments, card reader payments and more. Fees
                    from 0.8% + £0.02 apply
                  </Text>
                </Text>
                <Text style={styles.cryptoExchange1}>
                  <Text style={styles.text25}></Text>
                  <Text style={styles.cryptoExchange}>Crypto exchange</Text>
                </Text>
                <Text style={styles.a099FeeAppliesWhenBuyin}>
                  <Text style={styles.a099Fee}>
                    A 0.99% fee applies when buying and selling crypto
                  </Text>
                </Text>
                <Text style={styles.blankLine64}>
                  <Text style={styles.blankLine63}> </Text>
                </Text>
                <Text style={styles.support1}>
                  <Text style={styles.support}>24/7 support</Text>
                </Text>
              </Text>
              <Image
                style={styles.iconIonicIosCard}
                resizeMode="cover"
                source={require("../assets/icon-ionicioscard.png")}
              />
              <Image
                style={styles.iconAwesomeGlobe4}
                resizeMode="cover"
                source={require("../assets/icon-awesomeglobe4.png")}
              />
              <Image
                style={styles.groupIcon26}
                resizeMode="cover"
                source={require("../assets/icon-awesomeexchangealt.png")}
              />
              <Image
                style={styles.groupIcon27}
                resizeMode="cover"
                source={require("../assets/group-30982.png")}
              />
              <Image
                style={styles.iconMaterialAccountBalance2}
                resizeMode="cover"
                source={require("../assets/icon-materialaccountbalancewallet.png")}
              />
              <Image
                style={styles.groupIcon28}
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
          <Text style={styles.hello24}>Get more from your plan</Text>
        </View>
        <View style={styles.groupView66}>
          <View style={styles.groupView65}>
            <View style={styles.rectangleView20} />
            <View style={styles.groupView64}>
              <Text style={styles.freeMetalCardsPlasticAnd3}>
                <Text style={styles.freeMetalCardsPlasticAnd2}>
                  <Text style={styles.freeMetalCards1}>
                    2 free Metal cards + plastic and virtual cards for every
                    member
                  </Text>
                </Text>
                <Text style={styles.perMetalCardOutsideOfThe1}>
                  <Text style={styles.perMetalCard1}>
                    £49 per metal card outside of the free allowance
                  </Text>
                </Text>
                <Text style={styles.blankLine66}>
                  <Text style={styles.blankLine65}> </Text>
                </Text>
                <Text style={styles.freeInternationalPayments7}>
                  <Text style={styles.freeInternationalPayments6}>
                    50 free international payments
                  </Text>
                </Text>
                <Text style={styles.a3FeeAppliesPerInternati5}>
                  <Text style={styles.a3FeeAppliesPerInternati4}>
                    <Text style={styles.a3Fee3}>
                      A £3 fee applies per international payment outside of the
                      free allowance
                    </Text>
                  </Text>
                </Text>
                <Text style={styles.blankLine69}>
                  <Text style={styles.blankLine68}>
                    <Text style={styles.blankLine67}> </Text>
                  </Text>
                </Text>
                <Text style={styles.freeLocalPayments5}>
                  <Text style={styles.freeLocalPayments4}>
                    <Text style={styles.freeLocalPayments3}>
                      1,000 free local payments
                    </Text>
                  </Text>
                </Text>
                <Text style={styles.a020FeeAppliesPerLocal3}>
                  <Text style={styles.a020FeeAppliesPerLocal2}>
                    <Text style={styles.a020Fee1}>
                      A £0.20 fee applies per local payment outside of the free
                      allowance
                    </Text>
                  </Text>
                </Text>
                <Text style={styles.blankLine72}>
                  <Text style={styles.blankLine71}>
                    <Text style={styles.blankLine70}> </Text>
                  </Text>
                </Text>
                <Text style={styles.exchange50kAtTheInterbank7}>
                  <Text style={styles.exchange50kAtTheInterbank6}>
                    <Text style={styles.exchange50kAt3}>
                      Exchange £50k at the interbank rate
                    </Text>
                  </Text>
                </Text>
                <Text style={styles.a04MarkupAppliesForEach5}>
                  <Text style={styles.a04MarkupAppliesForEach4}>
                    <Text style={styles.a04Markup3}>
                      A 0.4% markup applies for each FX outside of the free
                      allowance
                    </Text>
                  </Text>
                </Text>
                <Text style={styles.blankLine75}>
                  <Text style={styles.blankLine74}>
                    <Text style={styles.blankLine73}> </Text>
                  </Text>
                </Text>
                <Text style={styles.paymentAcceptance5}>
                  <Text style={styles.paymentAcceptance4}>
                    <Text style={styles.paymentAcceptance3}>
                      Payment acceptance
                    </Text>
                  </Text>
                </Text>
                <Text style={styles.onlineCardPaymentsCardRea1}>
                  <Text style={styles.onlineCardPayments1}>
                    Online card payments, card reader payments and more. Fees
                    from 0.8% + £0.02 apply
                  </Text>
                </Text>
                <Text style={styles.cryptoExchange3}>
                  <Text style={styles.text26}></Text>
                  <Text style={styles.cryptoExchange2}>Crypto exchange</Text>
                </Text>
                <Text style={styles.a099FeeAppliesWhenBuyin1}>
                  <Text style={styles.a099Fee1}>
                    A 0.99% fee applies when buying and selling crypto
                  </Text>
                </Text>
                <Text style={styles.blankLine77}>
                  <Text style={styles.blankLine76}> </Text>
                </Text>
                <Text style={styles.support3}>
                  <Text style={styles.support2}>24/7 support</Text>
                </Text>
              </Text>
              <Image
                style={styles.iconIonicIosCard1}
                resizeMode="cover"
                source={require("../assets/icon-ionicioscard.png")}
              />
              <Image
                style={styles.iconAwesomeGlobe5}
                resizeMode="cover"
                source={require("../assets/icon-awesomeglobe4.png")}
              />
              <Image
                style={styles.groupIcon29}
                resizeMode="cover"
                source={require("../assets/icon-awesomeexchangealt.png")}
              />
              <Image
                style={styles.groupIcon30}
                resizeMode="cover"
                source={require("../assets/group-30982.png")}
              />
              <Image
                style={styles.iconMaterialAccountBalance3}
                resizeMode="cover"
                source={require("../assets/icon-materialaccountbalancewallet.png")}
              />
              <Image
                style={styles.groupIcon31}
                resizeMode="cover"
                source={require("../assets/group-30988.png")}
              />
              <Image
                style={styles.union29Icon1}
                resizeMode="cover"
                source={require("../assets/union-29.png")}
              />
            </View>
          </View>
          <Text style={styles.hello25}>Get more from your plan</Text>
        </View>
        <View style={styles.groupView69}>
          <View style={styles.groupView68}>
            <View style={styles.rectangleView21} />
            <View style={styles.groupView67}>
              <Text style={styles.freeMetalCardsPlasticAnd5}>
                <Text style={styles.freeMetalCardsPlasticAnd4}>
                  <Text style={styles.freeMetalCards2}>
                    2 free Metal cards + plastic and virtual cards for every
                    member
                  </Text>
                </Text>
                <Text style={styles.perMetalCardOutsideOfThe2}>
                  <Text style={styles.perMetalCard2}>
                    £49 per metal card outside of the free allowance
                  </Text>
                </Text>
                <Text style={styles.blankLine79}>
                  <Text style={styles.blankLine78}> </Text>
                </Text>
                <Text style={styles.freeInternationalPayments9}>
                  <Text style={styles.freeInternationalPayments8}>
                    50 free international payments
                  </Text>
                </Text>
                <Text style={styles.a3FeeAppliesPerInternati7}>
                  <Text style={styles.a3FeeAppliesPerInternati6}>
                    <Text style={styles.a3Fee4}>
                      A £3 fee applies per international payment outside of the
                      free allowance
                    </Text>
                  </Text>
                </Text>
                <Text style={styles.blankLine82}>
                  <Text style={styles.blankLine81}>
                    <Text style={styles.blankLine80}> </Text>
                  </Text>
                </Text>
                <Text style={styles.freeLocalPayments8}>
                  <Text style={styles.freeLocalPayments7}>
                    <Text style={styles.freeLocalPayments6}>
                      1,000 free local payments
                    </Text>
                  </Text>
                </Text>
                <Text style={styles.a020FeeAppliesPerLocal5}>
                  <Text style={styles.a020FeeAppliesPerLocal4}>
                    <Text style={styles.a020Fee2}>
                      A £0.20 fee applies per local payment outside of the free
                      allowance
                    </Text>
                  </Text>
                </Text>
                <Text style={styles.blankLine85}>
                  <Text style={styles.blankLine84}>
                    <Text style={styles.blankLine83}> </Text>
                  </Text>
                </Text>
                <Text style={styles.exchange50kAtTheInterbank9}>
                  <Text style={styles.exchange50kAtTheInterbank8}>
                    <Text style={styles.exchange50kAt4}>
                      Exchange £50k at the interbank rate
                    </Text>
                  </Text>
                </Text>
                <Text style={styles.a04MarkupAppliesForEach7}>
                  <Text style={styles.a04MarkupAppliesForEach6}>
                    <Text style={styles.a04Markup4}>
                      A 0.4% markup applies for each FX outside of the free
                      allowance
                    </Text>
                  </Text>
                </Text>
                <Text style={styles.blankLine88}>
                  <Text style={styles.blankLine87}>
                    <Text style={styles.blankLine86}> </Text>
                  </Text>
                </Text>
                <Text style={styles.paymentAcceptance8}>
                  <Text style={styles.paymentAcceptance7}>
                    <Text style={styles.paymentAcceptance6}>
                      Payment acceptance
                    </Text>
                  </Text>
                </Text>
                <Text style={styles.onlineCardPaymentsCardRea2}>
                  <Text style={styles.onlineCardPayments2}>
                    Online card payments, card reader payments and more. Fees
                    from 0.8% + £0.02 apply
                  </Text>
                </Text>
                <Text style={styles.cryptoExchange5}>
                  <Text style={styles.text27}></Text>
                  <Text style={styles.cryptoExchange4}>Crypto exchange</Text>
                </Text>
                <Text style={styles.a099FeeAppliesWhenBuyin2}>
                  <Text style={styles.a099Fee2}>
                    A 0.99% fee applies when buying and selling crypto
                  </Text>
                </Text>
                <Text style={styles.blankLine90}>
                  <Text style={styles.blankLine89}> </Text>
                </Text>
                <Text style={styles.support5}>
                  <Text style={styles.support4}>24/7 support</Text>
                </Text>
              </Text>
              <Image
                style={styles.iconIonicIosCard2}
                resizeMode="cover"
                source={require("../assets/icon-ionicioscard.png")}
              />
              <Image
                style={styles.iconAwesomeGlobe6}
                resizeMode="cover"
                source={require("../assets/icon-awesomeglobe4.png")}
              />
              <Image
                style={styles.groupIcon32}
                resizeMode="cover"
                source={require("../assets/icon-awesomeexchangealt.png")}
              />
              <Image
                style={styles.groupIcon33}
                resizeMode="cover"
                source={require("../assets/group-30982.png")}
              />
              <Image
                style={styles.iconMaterialAccountBalance4}
                resizeMode="cover"
                source={require("../assets/icon-materialaccountbalancewallet.png")}
              />
              <Image
                style={styles.groupIcon34}
                resizeMode="cover"
                source={require("../assets/group-30988.png")}
              />
              <Image
                style={styles.union29Icon2}
                resizeMode="cover"
                source={require("../assets/union-29.png")}
              />
            </View>
          </View>
          <Text style={styles.hello26}>Get more from your plan</Text>
        </View>
        <View style={styles.groupView71}>
          <View style={styles.component20887}>
            <View style={styles.groupView70}>
              <View style={styles.rectangleView22} />
              <View style={styles.maskGroup236} />
            </View>
          </View>
          <Text style={styles.hello27}>Continue</Text>
        </View>
        <View style={styles.groupView73}>
          <View style={styles.component20888}>
            <View style={styles.groupView72}>
              <View style={styles.rectangleView23} />
              <View style={styles.maskGroup2361} />
            </View>
          </View>
          <Text style={styles.hello28}>Continue</Text>
        </View>
        <View style={styles.groupView75}>
          <View style={styles.component20889}>
            <View style={styles.groupView74}>
              <View style={styles.rectangleView24} />
              <View style={styles.maskGroup2362} />
            </View>
          </View>
          <Text style={styles.hello29}>Continue</Text>
        </View>
        <Image
          style={styles.iconFeatherArrowLeft}
          resizeMode="cover"
          source={require("../assets/icon-featherarrowleft.png")}
        />
      </View>
      <Text style={[styles.hello30, styles.mt10, styles.ml27]}>
        Choose Cards
      </Text>
      <View style={[styles.lineView1, styles.mt15]} />
      <Pressable
        style={[styles.groupPressable, styles.mt_1480]}
        onPress={() => navigation.navigate("Great70")}
      >
        <Image
          style={styles.iconFeatherArrowLeft1}
          resizeMode="cover"
          source={require("../assets/icon-featherarrowleft.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.groupPressable1, styles.mt_1344, styles.ml25]}
        onPress={() => navigation.navigate("ChooseCurrency")}
      >
        <View style={styles.component20890}>
          <View style={styles.groupView77}>
            <View style={styles.rectangleView25} />
            <View style={styles.maskGroup2363} />
          </View>
        </View>
        <Text style={styles.hello31}>Continue</Text>
      </Pressable>
      <View style={[styles.homeIndicator3, styles.mt36, styles.ml121]} />
      <Pressable
        style={[styles.component2353, styles.mt39, styles.ml29]}
        onPress={() => navigation.navigate("ChooseCardsElite")}
      >
        <Pressable
          style={styles.hello32}
          onPress={() => navigation.navigate("ChooseCardsStandard")}
        >
          <Text style={styles.standard}>Standard</Text>
        </Pressable>
        <Text style={styles.hello33}>Premium</Text>
        <Text style={styles.hello34}>Elite</Text>
      </Pressable>
      <View style={[styles.statusBarBlack, styles.mt10]}>
        <View style={styles.rectangle} />
        <View style={styles.statusBar}>
          <View style={styles.time}>
            <Text style={styles.text28}>9:41</Text>
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
            <View style={styles.rectangleView26} />
            <View style={styles.rectangleView27} />
            <View style={styles.rectangleView28} />
            <View style={styles.rectangleView29} />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mt_10: {
    marginTop: -10,
  },
  mt30: {
    marginTop: 30,
  },
  ml_350: {
    marginLeft: -350,
  },
  mt300: {
    marginTop: 300,
  },
  ml_2414: {
    marginLeft: -2414,
  },
  mt10: {
    marginTop: 10,
  },
  ml27: {
    marginLeft: 27,
  },
  mt15: {
    marginTop: 15,
  },
  mt_1480: {
    marginTop: -1480,
  },
  mt_1344: {
    marginTop: -1344,
  },
  ml25: {
    marginLeft: 25,
  },
  mt36: {
    marginTop: 36,
  },
  ml121: {
    marginLeft: 121,
  },
  mt39: {
    marginTop: 39,
  },
  ml29: {
    marginLeft: 29,
  },
  rectangleView: {
    position: "relative",
    backgroundColor: "#f6f5f8",
    width: 375,
    height: 1482,
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
    left: "10.24%",
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
    left: "10.24%",
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
    left: "10.24%",
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
  component2374: {
    position: "relative",
    width: 1075,
    height: 1804,
  },
  rectangleView7: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    backgroundColor: "#f6f5f8",
    width: 375,
  },
  groupIcon15: {
    position: "absolute",
    top: 1,
    right: 1,
    bottom: 1,
    left: 1,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  subtraction7Icon: {
    position: "absolute",
    right: -59,
    bottom: -59,
    left: 1,
    maxWidth: "100%",
    overflow: "hidden",
    height: 151,
    opacity: 0.7,
  },
  path23806Icon: {
    position: "absolute",
    top: 1,
    right: 1,
    left: 1,
    maxWidth: "100%",
    overflow: "hidden",
    height: 188,
    opacity: 0.51,
  },
  history: {
    position: "absolute",
    marginTop: 117.61,
    top: "50%",
    left: "8.31%",
    fontSize: 13,
    letterSpacing: 1,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#5f306b",
    textAlign: "left",
  },
  history1: {
    position: "absolute",
    marginTop: 131.99,
    top: "50%",
    left: "76.28%",
    fontSize: 4,
    letterSpacing: 0,
    fontFamily: "Helvetica",
    color: "#5f306b",
    textAlign: "left",
  },
  groupIcon16: {
    position: "absolute",
    top: 1,
    right: -1,
    bottom: -1,
    left: 0,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    opacity: 0.23,
  },
  groupLinearGradient: {
    position: "absolute",
    top: 18,
    right: 19,
    borderRadius: 5,
    width: 24,
    height: 29,
    backgroundColor: "transparent",
  },
  text11: {
    position: "absolute",
    marginTop: -14.62,
    top: "50%",
    left: "5.31%",
    fontSize: 21,
    letterSpacing: 2,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#999",
    textAlign: "left",
  },
  text12: {
    position: "absolute",
    marginTop: 16.58,
    top: "50%",
    left: "8.31%",
    fontSize: 7,
    letterSpacing: 1,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#999",
    textAlign: "left",
  },
  text13: {
    position: "absolute",
    marginTop: 16.58,
    top: "50%",
    left: "20.98%",
    fontSize: 7,
    letterSpacing: 1,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#999",
    textAlign: "left",
  },
  text14: {
    position: "absolute",
    marginTop: 16.58,
    top: "50%",
    left: "54.39%",
    fontSize: 7,
    letterSpacing: 1,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#999",
    textAlign: "left",
  },
  maskGroup237: {
    position: "absolute",
    top: 1,
    right: 1,
    bottom: 1,
    left: 1,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    opacity: 0.5,
  },
  groupIcon17: {
    position: "absolute",
    right: 21,
    bottom: 19,
    width: 25,
    height: 16,
  },
  maskGroup238: {
    position: "absolute",
    top: 1,
    right: -59,
    bottom: -59,
    left: 1,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    opacity: 0,
  },
  iconFeatherWifi: {
    position: "absolute",
    marginTop: -102.96,
    top: "50%",
    left: 17,
    width: 30,
    height: 42,
  },
  layer12Icon: {
    position: "absolute",
    marginTop: 69.6,
    top: "50%",
    right: 36,
    left: 44,
    maxWidth: "100%",
    overflow: "hidden",
    height: 37,
  },
  rectangleIcon3: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  groupView27: {
    position: "absolute",
    top: 59,
    right: 0,
    bottom: 46,
    left: 0,
  },
  hello6: {
    position: "absolute",
    marginTop: -201.5,
    top: "50%",
    left: 87,
    fontSize: 18,
    lineHeight: 20,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#00003d",
    textAlign: "left",
  },
  hello7: {
    position: "absolute",
    marginTop: 174.5,
    top: "50%",
    left: 77,
    fontSize: 24,
    lineHeight: 20,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#0101fd",
    textAlign: "left",
  },
  groupView28: {
    position: "absolute",
    marginLeft: 113.5,
    top: 132,
    left: "50%",
    width: 208,
    height: 403,
  },
  groupIcon18: {
    position: "absolute",
    top: 1,
    right: 1,
    bottom: 1,
    left: 1,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  subtraction7Icon1: {
    position: "absolute",
    right: -59,
    bottom: -59,
    left: 1,
    maxWidth: "100%",
    overflow: "hidden",
    height: 151,
    opacity: 0.7,
  },
  path23806Icon1: {
    position: "absolute",
    top: 1,
    right: 1,
    left: 1,
    maxWidth: "100%",
    overflow: "hidden",
    height: 188,
    opacity: 0.51,
  },
  history2: {
    position: "absolute",
    marginTop: 117.61,
    top: "50%",
    left: "8.31%",
    fontSize: 13,
    letterSpacing: 1,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#5f306b",
    textAlign: "left",
  },
  history3: {
    position: "absolute",
    marginTop: 131.99,
    top: "50%",
    left: "76.28%",
    fontSize: 4,
    letterSpacing: 0,
    fontFamily: "Helvetica",
    color: "#5f306b",
    textAlign: "left",
  },
  groupIcon19: {
    position: "absolute",
    top: 1,
    right: -1,
    bottom: -1,
    left: 0,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    opacity: 0.23,
  },
  groupLinearGradient1: {
    position: "absolute",
    top: 18,
    right: 19,
    borderRadius: 5,
    width: 24,
    height: 29,
    backgroundColor: "transparent",
  },
  text15: {
    position: "absolute",
    marginTop: -14.62,
    top: "50%",
    left: "5.31%",
    fontSize: 21,
    letterSpacing: 2,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#999",
    textAlign: "left",
  },
  text16: {
    position: "absolute",
    marginTop: 16.58,
    top: "50%",
    left: "8.31%",
    fontSize: 7,
    letterSpacing: 1,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#999",
    textAlign: "left",
  },
  text17: {
    position: "absolute",
    marginTop: 16.58,
    top: "50%",
    left: "20.98%",
    fontSize: 7,
    letterSpacing: 1,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#999",
    textAlign: "left",
  },
  text18: {
    position: "absolute",
    marginTop: 16.58,
    top: "50%",
    left: "54.39%",
    fontSize: 7,
    letterSpacing: 1,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#999",
    textAlign: "left",
  },
  maskGroup2371: {
    position: "absolute",
    top: 1,
    right: 1,
    bottom: 1,
    left: 1,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    opacity: 0.5,
  },
  groupIcon20: {
    position: "absolute",
    right: 21,
    bottom: 19,
    width: 25,
    height: 16,
  },
  maskGroup2381: {
    position: "absolute",
    top: 1,
    right: -59,
    bottom: -59,
    left: 1,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    opacity: 0,
  },
  iconFeatherWifi1: {
    position: "absolute",
    marginTop: -102.96,
    top: "50%",
    left: 17,
    width: 30,
    height: 42,
  },
  layer12Icon1: {
    position: "absolute",
    marginTop: 69.6,
    top: "50%",
    right: 36,
    left: 44,
    maxWidth: "100%",
    overflow: "hidden",
    height: 37,
  },
  rectangleIcon4: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  groupView29: {
    position: "absolute",
    top: 59,
    right: 0,
    bottom: 46,
    left: 0,
  },
  hello8: {
    position: "absolute",
    marginTop: -201.5,
    top: "50%",
    left: 68,
    fontSize: 18,
    lineHeight: 20,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#00003d",
    textAlign: "left",
  },
  hello9: {
    position: "absolute",
    marginTop: 174.5,
    top: "50%",
    left: 68,
    fontSize: 24,
    lineHeight: 20,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#0101fd",
    textAlign: "left",
  },
  groupView30: {
    position: "absolute",
    marginLeft: -173.5,
    top: 132,
    left: "50%",
    width: 208,
    height: 403,
  },
  groupIcon21: {
    position: "absolute",
    top: 1,
    right: 0,
    bottom: 0,
    left: 1,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  subtraction7Icon2: {
    position: "absolute",
    right: -59,
    bottom: -59,
    left: 1,
    maxWidth: "100%",
    overflow: "hidden",
    height: 151,
    opacity: 0.7,
  },
  path23806Icon2: {
    position: "absolute",
    top: 1,
    right: 1,
    left: 1,
    maxWidth: "100%",
    overflow: "hidden",
    height: 188,
    opacity: 0.51,
  },
  history4: {
    position: "absolute",
    marginTop: 117.61,
    top: "50%",
    left: "8.31%",
    fontSize: 13,
    letterSpacing: 1,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#5f306b",
    textAlign: "left",
  },
  history5: {
    position: "absolute",
    marginTop: 131.99,
    top: "50%",
    left: "76.28%",
    fontSize: 4,
    letterSpacing: 0,
    fontFamily: "Helvetica",
    color: "#5f306b",
    textAlign: "left",
  },
  groupIcon22: {
    position: "absolute",
    top: 1,
    right: -1,
    bottom: -1,
    left: 0,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    opacity: 0.23,
  },
  groupLinearGradient2: {
    position: "absolute",
    top: 18,
    right: 19,
    borderRadius: 5,
    width: 24,
    height: 29,
    backgroundColor: "transparent",
  },
  text19: {
    position: "absolute",
    marginTop: -14.62,
    top: "50%",
    left: "5.31%",
    fontSize: 21,
    letterSpacing: 2,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#999",
    textAlign: "left",
  },
  text20: {
    position: "absolute",
    marginTop: 16.58,
    top: "50%",
    left: "8.31%",
    fontSize: 7,
    letterSpacing: 1,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#999",
    textAlign: "left",
  },
  text21: {
    position: "absolute",
    marginTop: 16.58,
    top: "50%",
    left: "20.98%",
    fontSize: 7,
    letterSpacing: 1,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#999",
    textAlign: "left",
  },
  text22: {
    position: "absolute",
    marginTop: 16.58,
    top: "50%",
    left: "54.39%",
    fontSize: 7,
    letterSpacing: 1,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#999",
    textAlign: "left",
  },
  maskGroup2372: {
    position: "absolute",
    top: 1,
    right: 1,
    bottom: 1,
    left: 1,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    opacity: 0.5,
  },
  groupIcon23: {
    position: "absolute",
    right: 21,
    bottom: 19,
    width: 25,
    height: 16,
  },
  maskGroup2382: {
    position: "absolute",
    top: 1,
    right: -59,
    bottom: -59,
    left: 1,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    opacity: 0,
  },
  iconFeatherWifi2: {
    position: "absolute",
    marginTop: -102.96,
    top: "50%",
    left: 17,
    width: 30,
    height: 42,
  },
  layer12Icon2: {
    position: "absolute",
    marginTop: 69.6,
    top: "50%",
    right: 36,
    left: 44,
    maxWidth: "100%",
    overflow: "hidden",
    height: 37,
  },
  rectangleIcon5: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  groupView31: {
    position: "absolute",
    top: 59,
    right: 0,
    bottom: 0,
    left: 0,
  },
  hello10: {
    position: "absolute",
    marginTop: -178.71,
    top: "50%",
    left: 74,
    fontSize: 18,
    lineHeight: 20,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#0101fd",
    textAlign: "left",
  },
  groupView32: {
    position: "absolute",
    top: 132,
    left: 75,
    width: 208,
    height: 357,
  },
  hello11: {
    position: "absolute",
    marginTop: -862.5,
    top: "50%",
    left: 154,
    fontSize: 24,
    lineHeight: 20,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#0101fd",
    textAlign: "left",
  },
  homeIndicator: {
    position: "absolute",
    marginTop: -2.5,
    top: "50%",
    right: 0,
    left: 0,
    borderRadius: 100,
    backgroundColor: "#000",
    height: 5,
  },
  groupView33: {
    position: "absolute",
    marginTop: -615.5,
    top: "50%",
    left: 121,
    width: 134,
    height: 5,
  },
  homeIndicator1: {
    position: "absolute",
    marginTop: -2.5,
    top: "50%",
    right: 0,
    left: 0,
    borderRadius: 100,
    backgroundColor: "#000",
    height: 5,
  },
  groupView34: {
    position: "absolute",
    marginTop: -615.5,
    marginLeft: -54.5,
    top: "50%",
    left: "50%",
    width: 134,
    height: 5,
  },
  homeIndicator2: {
    position: "absolute",
    marginTop: -2.5,
    top: "50%",
    right: 0,
    left: 0,
    borderRadius: 100,
    backgroundColor: "#000",
    height: 5,
  },
  groupView35: {
    position: "absolute",
    marginTop: -615.5,
    top: "50%",
    right: 96,
    width: 134,
    height: 5,
  },
  hello12: {
    position: "absolute",
    marginTop: -828.5,
    top: "50%",
    left: 65,
    fontSize: 16,
    fontFamily: "Helvetica",
    color: "#00003d",
    textAlign: "left",
  },
  hello13: {
    position: "absolute",
    marginTop: -828.5,
    top: "50%",
    left: 386,
    fontSize: 16,
    fontFamily: "Helvetica",
    color: "#00003d",
    textAlign: "left",
  },
  hello14: {
    position: "absolute",
    top: 58,
    left: 27,
    fontSize: 25,
    lineHeight: 30,
    fontWeight: "700",
    fontFamily: "Typo Grotesk",
    color: "#00003d",
    textAlign: "left",
  },
  lineView: {
    position: "absolute",
    top: 166,
    left: 0,
    borderStyle: "solid",
    borderColor: "#fff",
    borderTopWidth: 1,
    width: 376,
    height: 2,
  },
  findAllFeesInTheBusiness: {
    position: "absolute",
    bottom: 221,
    left: 37,
    fontSize: 10,
    lineHeight: 12,
    fontFamily: "Helvetica",
    color: "#999",
    textAlign: "center",
    width: 303,
  },
  findAllFeesInTheBusiness1: {
    position: "absolute",
    marginLeft: -138.5,
    bottom: 221,
    left: "50%",
    fontSize: 10,
    lineHeight: 12,
    fontFamily: "Helvetica",
    color: "#999",
    textAlign: "center",
    width: 303,
  },
  findAllFeesInTheBusiness2: {
    position: "absolute",
    right: 11,
    bottom: 221,
    fontSize: 10,
    lineHeight: 12,
    fontFamily: "Helvetica",
    color: "#999",
    textAlign: "center",
    width: 303,
  },
  rectangleView8: {
    position: "absolute",
    marginTop: -110.5,
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
    height: 221,
  },
  exchange50kAt: {
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#00003d",
  },
  exchange50kAtTheInterbank: {
    margin: 0,
  },
  a04Markup: {
    fontFamily: "Helvetica",
    color: "#999",
  },
  a04MarkupAppliesForEach: {
    margin: 0,
  },
  exchange50kAtTheInterbank1: {
    position: "absolute",
    marginTop: -28,
    top: "50%",
    left: 28,
    fontSize: 14,
    lineHeight: 20,
    textAlign: "left",
    width: 267,
  },
  iconAwesomeExchangeAlt: {
    position: "absolute",
    top: 4,
    left: 0,
    width: 15,
    height: 12,
  },
  groupView36: {
    position: "absolute",
    top: 20,
    right: 12,
    left: 20,
    height: 56,
  },
  freeInternationalPayments: {
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#00003d",
  },
  freeInternationalPayments1: {
    margin: 0,
  },
  a3Fee: {
    fontFamily: "Helvetica",
    color: "#999",
  },
  a3FeeAppliesPerInternati: {
    margin: 0,
  },
  freeInternationalPaymentsA: {
    position: "absolute",
    marginTop: -28,
    top: "50%",
    left: 28,
    fontSize: 14,
    lineHeight: 20,
    textAlign: "left",
    width: 263,
  },
  iconAwesomeGlobe: {
    position: "absolute",
    top: 2,
    left: 0,
    width: 15,
    height: 15,
  },
  groupView37: {
    position: "absolute",
    marginTop: -8.5,
    top: "50%",
    right: 16,
    left: 20,
    height: 56,
  },
  paymentApproval: {
    position: "absolute",
    marginTop: -8,
    top: "50%",
    left: 28,
    fontSize: 14,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#00003d",
    textAlign: "left",
    width: 204,
  },
  iconOpenEye: {
    position: "absolute",
    bottom: 1,
    left: 0,
    width: 15,
    height: 12,
  },
  groupView38: {
    position: "absolute",
    bottom: 21,
    left: 20,
    width: 231,
    height: 16,
  },
  groupView39: {
    position: "absolute",
    marginTop: -770.5,
    marginLeft: -150.5,
    top: "50%",
    left: "50%",
    width: 326,
    height: 221,
  },
  rectangleView9: {
    position: "absolute",
    marginTop: -110.5,
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
    height: 221,
  },
  exchange50kAt1: {
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#00003d",
  },
  exchange50kAtTheInterbank2: {
    margin: 0,
  },
  a04Markup1: {
    fontFamily: "Helvetica",
    color: "#999",
  },
  a04MarkupAppliesForEach1: {
    margin: 0,
  },
  exchange50kAtTheInterbank3: {
    position: "absolute",
    marginTop: -28,
    top: "50%",
    left: 28,
    fontSize: 14,
    lineHeight: 20,
    textAlign: "left",
    width: 267,
  },
  iconAwesomeExchangeAlt1: {
    position: "absolute",
    top: 4,
    left: 0,
    width: 15,
    height: 12,
  },
  groupView40: {
    position: "absolute",
    top: 20,
    right: 12,
    left: 20,
    height: 56,
  },
  freeInternationalPayments2: {
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#00003d",
  },
  freeInternationalPayments3: {
    margin: 0,
  },
  a3Fee1: {
    fontFamily: "Helvetica",
    color: "#999",
  },
  a3FeeAppliesPerInternati1: {
    margin: 0,
  },
  freeInternationalPaymentsA1: {
    position: "absolute",
    marginTop: -28,
    top: "50%",
    left: 28,
    fontSize: 14,
    lineHeight: 20,
    textAlign: "left",
    width: 263,
  },
  iconAwesomeGlobe1: {
    position: "absolute",
    top: 2,
    left: 0,
    width: 15,
    height: 15,
  },
  groupView41: {
    position: "absolute",
    marginTop: -8.5,
    top: "50%",
    right: 16,
    left: 20,
    height: 56,
  },
  paymentApproval1: {
    position: "absolute",
    marginTop: -8,
    top: "50%",
    left: 28,
    fontSize: 14,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#00003d",
    textAlign: "left",
    width: 204,
  },
  iconOpenEye1: {
    position: "absolute",
    bottom: 1,
    left: 0,
    width: 15,
    height: 12,
  },
  groupView42: {
    position: "absolute",
    bottom: 21,
    left: 20,
    width: 231,
    height: 16,
  },
  groupView43: {
    position: "absolute",
    marginTop: -770.5,
    top: "50%",
    right: 0,
    width: 326,
    height: 221,
  },
  rectangleView10: {
    position: "absolute",
    marginTop: -10.5,
    top: "50%",
    right: 0,
    left: 0,
    borderRadius: 21,
    backgroundColor: "#fff",
    height: 55,
  },
  hello15: {
    position: "absolute",
    marginTop: -44.5,
    top: "50%",
    left: 0,
    fontSize: 16,
    fontFamily: "Helvetica",
    color: "#00003d",
    textAlign: "left",
  },
  dedicatedAccountManager2: {
    position: "absolute",
    marginTop: -8,
    top: "50%",
    left: 28,
    fontSize: 14,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#00003d",
    textAlign: "left",
    width: 279,
  },
  iconMaterialPerson: {
    position: "absolute",
    top: 1,
    bottom: 0,
    left: 0,
    maxHeight: "100%",
    width: 15,
  },
  groupView44: {
    position: "absolute",
    marginTop: 9.5,
    top: "50%",
    right: 0,
    left: 20,
    height: 16,
  },
  groupView45: {
    position: "absolute",
    marginTop: 147.5,
    top: "50%",
    left: 25,
    width: 326,
    height: 89,
  },
  rectangleView11: {
    position: "absolute",
    marginTop: -10.5,
    top: "50%",
    right: 0,
    left: 0,
    borderRadius: 21,
    backgroundColor: "#fff",
    height: 55,
  },
  hello16: {
    position: "absolute",
    marginTop: -44.5,
    top: "50%",
    left: 0,
    fontSize: 16,
    fontFamily: "Helvetica",
    color: "#00003d",
    textAlign: "left",
  },
  dedicatedAccountManager3: {
    position: "absolute",
    marginTop: -8,
    top: "50%",
    left: 28,
    fontSize: 14,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#00003d",
    textAlign: "left",
    width: 279,
  },
  iconMaterialPerson1: {
    position: "absolute",
    top: 1,
    bottom: 0,
    left: 0,
    maxHeight: "100%",
    width: 15,
  },
  groupView46: {
    position: "absolute",
    marginTop: 9.5,
    top: "50%",
    right: 0,
    left: 20,
    height: 16,
  },
  groupView47: {
    position: "absolute",
    marginTop: 147.5,
    marginLeft: -150.5,
    top: "50%",
    left: "50%",
    width: 326,
    height: 89,
  },
  rectangleView12: {
    position: "absolute",
    marginTop: -10.5,
    top: "50%",
    right: 0,
    left: 0,
    borderRadius: 21,
    backgroundColor: "#fff",
    height: 55,
  },
  hello17: {
    position: "absolute",
    marginTop: -44.5,
    top: "50%",
    left: 0,
    fontSize: 16,
    fontFamily: "Helvetica",
    color: "#00003d",
    textAlign: "left",
  },
  dedicatedAccountManager4: {
    position: "absolute",
    marginTop: -8,
    top: "50%",
    left: 28,
    fontSize: 14,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#00003d",
    textAlign: "left",
    width: 279,
  },
  iconMaterialPerson2: {
    position: "absolute",
    top: 1,
    bottom: 0,
    left: 0,
    maxHeight: "100%",
    width: 15,
  },
  groupView48: {
    position: "absolute",
    marginTop: 9.5,
    top: "50%",
    right: 0,
    left: 20,
    height: 16,
  },
  groupView49: {
    position: "absolute",
    marginTop: 147.5,
    top: "50%",
    right: 0,
    width: 326,
    height: 89,
  },
  rectangleView13: {
    position: "absolute",
    marginTop: -10.5,
    top: "50%",
    right: 0,
    left: 0,
    borderRadius: 21,
    backgroundColor: "#fff",
    height: 55,
  },
  hello18: {
    position: "absolute",
    marginTop: -44.5,
    top: "50%",
    left: 0,
    fontSize: 16,
    fontFamily: "Helvetica",
    color: "#00003d",
    textAlign: "left",
  },
  dedicatedAccountManager5: {
    position: "absolute",
    marginTop: -8,
    top: "50%",
    left: 28,
    fontSize: 14,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#999",
    textAlign: "left",
    width: 211,
  },
  iconMaterialPerson3: {
    position: "absolute",
    top: 1,
    bottom: 0,
    left: 0,
    maxHeight: "100%",
    width: 15,
  },
  groupView50: {
    position: "absolute",
    marginTop: 9.5,
    top: "50%",
    left: 20,
    width: 238,
    height: 16,
  },
  groupView51: {
    position: "absolute",
    marginTop: 283.5,
    top: "50%",
    left: 25,
    width: 326,
    height: 89,
  },
  rectangleView14: {
    position: "absolute",
    marginTop: -10.5,
    top: "50%",
    right: 0,
    left: 0,
    borderRadius: 21,
    backgroundColor: "#fff",
    height: 55,
  },
  hello19: {
    position: "absolute",
    marginTop: -44.5,
    top: "50%",
    left: 0,
    fontSize: 16,
    fontFamily: "Helvetica",
    color: "#00003d",
    textAlign: "left",
  },
  dedicatedAccountManager6: {
    position: "absolute",
    marginTop: -8,
    top: "50%",
    left: 28,
    fontSize: 14,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#999",
    textAlign: "left",
    width: 211,
  },
  iconMaterialPerson4: {
    position: "absolute",
    top: 1,
    bottom: 0,
    left: 0,
    maxHeight: "100%",
    width: 15,
  },
  groupView52: {
    position: "absolute",
    marginTop: 9.5,
    top: "50%",
    left: 20,
    width: 238,
    height: 16,
  },
  groupView53: {
    position: "absolute",
    marginTop: 283.5,
    marginLeft: -150.5,
    top: "50%",
    left: "50%",
    width: 326,
    height: 89,
  },
  rectangleView15: {
    position: "absolute",
    marginTop: -10.5,
    top: "50%",
    right: 0,
    left: 0,
    borderRadius: 21,
    backgroundColor: "#fff",
    height: 55,
  },
  hello20: {
    position: "absolute",
    marginTop: -44.5,
    top: "50%",
    left: 0,
    fontSize: 16,
    fontFamily: "Helvetica",
    color: "#00003d",
    textAlign: "left",
  },
  dedicatedAccountManager7: {
    position: "absolute",
    marginTop: -8,
    top: "50%",
    left: 28,
    fontSize: 14,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#999",
    textAlign: "left",
    width: 211,
  },
  iconMaterialPerson5: {
    position: "absolute",
    top: 1,
    bottom: 0,
    left: 0,
    maxHeight: "100%",
    width: 15,
  },
  groupView54: {
    position: "absolute",
    marginTop: 9.5,
    top: "50%",
    left: 20,
    width: 238,
    height: 16,
  },
  groupView55: {
    position: "absolute",
    marginTop: 283.5,
    top: "50%",
    right: 0,
    width: 326,
    height: 89,
  },
  rectangleView16: {
    position: "absolute",
    marginTop: -302.5,
    top: "50%",
    right: 0,
    left: 0,
    borderRadius: 21,
    backgroundColor: "#fff",
    height: 639,
  },
  hello21: {
    position: "absolute",
    marginTop: -336.5,
    top: "50%",
    left: 0,
    fontSize: 16,
    fontFamily: "Helvetica",
    color: "#00003d",
    textAlign: "left",
  },
  groupView56: {
    position: "absolute",
    bottom: 278,
    left: 25,
    width: 326,
    height: 673,
  },
  rectangleView17: {
    position: "absolute",
    marginTop: -302.5,
    top: "50%",
    right: 0,
    left: 0,
    borderRadius: 21,
    backgroundColor: "#fff",
    height: 639,
  },
  hello22: {
    position: "absolute",
    marginTop: -336.5,
    top: "50%",
    left: 0,
    fontSize: 16,
    fontFamily: "Helvetica",
    color: "#00003d",
    textAlign: "left",
  },
  rewards: {
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#00003d",
  },
  rewards1: {
    margin: 0,
  },
  blankLine: {
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#00003d",
  },
  blankLine1: {
    margin: 0,
  },
  freePaymentsTo: {
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#00003d",
  },
  freePaymentsToCarbonyteAcc: {
    margin: 0,
  },
  blankLine2: {
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#00003d",
  },
  blankLine3: {
    margin: 0,
  },
  iBANsForGlobal: {
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#00003d",
  },
  iBANsForGlobalTransfers: {
    margin: 0,
  },
  blankLine4: {
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#00003d",
  },
  blankLine5: {
    margin: 0,
  },
  localAccountsIn: {
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#00003d",
  },
  localAccountsInGBPAndEUR: {
    margin: 0,
  },
  blankLine6: {
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#00003d",
  },
  blankLine7: {
    margin: 0,
  },
  acceptPaymentsOn: {
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#00003d",
  },
  acceptPaymentsOnYourWebsit: {
    margin: 0,
  },
  blankLine8: {
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#00003d",
  },
  blankLine9: {
    margin: 0,
  },
  paymentRequestsWith: {
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#00003d",
  },
  paymentRequestsWithLinksAn: {
    margin: 0,
  },
  blankLine10: {
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#00003d",
  },
  blankLine11: {
    margin: 0,
  },
  manageRecurringPayments: {
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#00003d",
  },
  manageRecurringPayments1: {
    margin: 0,
  },
  blankLine12: {
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#00003d",
  },
  blankLine13: {
    margin: 0,
  },
  unlimitedTeamMembers: {
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#00003d",
  },
  unlimitedTeamMembers1: {
    margin: 0,
  },
  blankLine14: {
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#00003d",
  },
  blankLine15: {
    margin: 0,
  },
  teamMemberPermissions: {
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#00003d",
  },
  teamMemberPermissions1: {
    margin: 0,
  },
  blankLine16: {
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#00003d",
  },
  blankLine17: {
    margin: 0,
  },
  expensesManagement: {
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#00003d",
  },
  expensesManagement1: {
    margin: 0,
  },
  addMembersFor: {
    fontFamily: "Helvetica",
    color: "#999",
  },
  addMembersFor5PerMonth: {
    margin: 0,
  },
  blankLine18: {
    fontFamily: "Helvetica",
    color: "#999",
  },
  blankLine19: {
    margin: 0,
  },
  automatedPayroll: {
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#00003d",
  },
  automatedPayroll1: {
    margin: 0,
  },
  addMembersFor1: {
    fontFamily: "Helvetica",
    color: "#999",
  },
  addMembersFor5PerMonth1: {
    margin: 0,
  },
  blankLine20: {
    fontFamily: "Helvetica",
    color: "#999",
  },
  blankLine21: {
    margin: 0,
  },
  createAndTrack: {
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#00003d",
  },
  createAndTrackYourInvoices: {
    margin: 0,
  },
  blankLine22: {
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#00003d",
  },
  blankLine23: {
    margin: 0,
  },
  connectYourCompanys: {
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#00003d",
  },
  connectYourCompanysApps: {
    margin: 0,
  },
  blankLine24: {
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#00003d",
  },
  blankLine25: {
    margin: 0,
  },
  availableOnThe: {
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#00003d",
  },
  availableOnTheWebOrViaTh: {
    margin: 0,
  },
  text23: {
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#00003d",
  },
  rewardsFreePaymentsToCarb: {
    position: "absolute",
    marginTop: -300.08,
    top: "50%",
    left: 29,
    fontSize: 14,
    lineHeight: 20,
    textAlign: "left",
    width: 257,
  },
  iconAwesomeGift: {
    position: "absolute",
    top: 0,
    left: 1,
    width: 16,
    height: 14,
  },
  iconAwesomeExchangeAlt2: {
    position: "absolute",
    marginTop: -177.08,
    top: "50%",
    left: 2,
    width: 15,
    height: 12,
  },
  iconAwesomeGlobe2: {
    position: "absolute",
    top: 81,
    left: 1,
    width: 15,
    height: 15,
  },
  groupIcon24: {
    position: "absolute",
    marginTop: -258.08,
    marginLeft: -141,
    top: "50%",
    left: "50%",
    width: 13,
    height: 14,
  },
  marketplaceFacebookSeeklogoIcon: {
    position: "absolute",
    marginTop: -138.42,
    top: "50%",
    left: 2,
    width: 13,
    height: 12,
  },
  iconAwesomeCoins: {
    position: "absolute",
    marginTop: -97.9,
    top: "50%",
    left: 3,
    width: 14,
    height: 14,
  },
  subtraction12Icon: {
    position: "absolute",
    marginTop: -40.36,
    top: "50%",
    left: 2,
    width: 13,
    height: 15,
  },
  union27Icon: {
    position: "absolute",
    marginTop: -2.08,
    top: "50%",
    left: 0,
    width: 20,
    height: 14,
  },
  union28Icon: {
    position: "absolute",
    marginTop: 37.92,
    top: "50%",
    left: 0,
    width: 20,
    height: 14,
  },
  iconSimpleReadthedocs: {
    position: "absolute",
    marginTop: 77.92,
    top: "50%",
    left: 3,
    width: 13,
    height: 17,
  },
  iconMaterialAccountBalance: {
    position: "absolute",
    marginTop: 141.05,
    top: "50%",
    left: 1,
    width: 14,
    height: 13,
  },
  iconMaterialUndo: {
    position: "absolute",
    marginTop: 139.21,
    top: "50%",
    left: 15,
    width: 9,
    height: 17,
  },
  iconOpenDocument: {
    position: "absolute",
    bottom: 85,
    left: 2,
    width: 15,
    height: 17,
  },
  iconIonicMdApps: {
    position: "absolute",
    bottom: 42,
    left: 1,
    width: 16,
    height: 16,
  },
  iconAwesomeMobileAlt: {
    position: "absolute",
    bottom: 0,
    left: 2,
    width: 12,
    height: 19,
  },
  groupView57: {
    position: "absolute",
    top: 54,
    right: 22,
    bottom: 19,
    left: 19,
  },
  groupView58: {
    position: "absolute",
    marginLeft: -150.5,
    bottom: 278,
    left: "50%",
    width: 326,
    height: 673,
  },
  rectangleView18: {
    position: "absolute",
    marginTop: -302.5,
    top: "50%",
    right: 0,
    left: 0,
    borderRadius: 21,
    backgroundColor: "#fff",
    height: 639,
  },
  hello23: {
    position: "absolute",
    marginTop: -336.5,
    top: "50%",
    left: 0,
    fontSize: 16,
    fontFamily: "Helvetica",
    color: "#00003d",
    textAlign: "left",
  },
  rewards2: {
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#00003d",
  },
  rewards3: {
    margin: 0,
  },
  blankLine26: {
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#00003d",
  },
  blankLine27: {
    margin: 0,
  },
  freePaymentsTo1: {
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#00003d",
  },
  freePaymentsToCarbonyteAcc1: {
    margin: 0,
  },
  blankLine28: {
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#00003d",
  },
  blankLine29: {
    margin: 0,
  },
  iBANsForGlobal1: {
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#00003d",
  },
  iBANsForGlobalTransfers1: {
    margin: 0,
  },
  blankLine30: {
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#00003d",
  },
  blankLine31: {
    margin: 0,
  },
  localAccountsIn1: {
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#00003d",
  },
  localAccountsInGBPAndEUR1: {
    margin: 0,
  },
  blankLine32: {
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#00003d",
  },
  blankLine33: {
    margin: 0,
  },
  acceptPaymentsOn1: {
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#00003d",
  },
  acceptPaymentsOnYourWebsit1: {
    margin: 0,
  },
  blankLine34: {
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#00003d",
  },
  blankLine35: {
    margin: 0,
  },
  paymentRequestsWith1: {
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#00003d",
  },
  paymentRequestsWithLinksAn1: {
    margin: 0,
  },
  blankLine36: {
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#00003d",
  },
  blankLine37: {
    margin: 0,
  },
  manageRecurringPayments2: {
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#00003d",
  },
  manageRecurringPayments3: {
    margin: 0,
  },
  blankLine38: {
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#00003d",
  },
  blankLine39: {
    margin: 0,
  },
  unlimitedTeamMembers2: {
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#00003d",
  },
  unlimitedTeamMembers3: {
    margin: 0,
  },
  blankLine40: {
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#00003d",
  },
  blankLine41: {
    margin: 0,
  },
  teamMemberPermissions2: {
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#00003d",
  },
  teamMemberPermissions3: {
    margin: 0,
  },
  blankLine42: {
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#00003d",
  },
  blankLine43: {
    margin: 0,
  },
  expensesManagement2: {
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#00003d",
  },
  expensesManagement3: {
    margin: 0,
  },
  addMembersFor2: {
    fontFamily: "Helvetica",
    color: "#999",
  },
  addMembersFor5PerMonth2: {
    margin: 0,
  },
  blankLine44: {
    fontFamily: "Helvetica",
    color: "#999",
  },
  blankLine45: {
    margin: 0,
  },
  automatedPayroll2: {
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#00003d",
  },
  automatedPayroll3: {
    margin: 0,
  },
  addMembersFor3: {
    fontFamily: "Helvetica",
    color: "#999",
  },
  addMembersFor5PerMonth3: {
    margin: 0,
  },
  blankLine46: {
    fontFamily: "Helvetica",
    color: "#999",
  },
  blankLine47: {
    margin: 0,
  },
  createAndTrack1: {
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#00003d",
  },
  createAndTrackYourInvoices1: {
    margin: 0,
  },
  blankLine48: {
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#00003d",
  },
  blankLine49: {
    margin: 0,
  },
  connectYourCompanys1: {
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#00003d",
  },
  connectYourCompanysApps1: {
    margin: 0,
  },
  blankLine50: {
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#00003d",
  },
  blankLine51: {
    margin: 0,
  },
  availableOnThe1: {
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#00003d",
  },
  availableOnTheWebOrViaTh1: {
    margin: 0,
  },
  text24: {
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#00003d",
  },
  rewardsFreePaymentsToCarb1: {
    position: "absolute",
    marginTop: -300.08,
    top: "50%",
    left: 29,
    fontSize: 14,
    lineHeight: 20,
    textAlign: "left",
    width: 257,
  },
  iconAwesomeGift1: {
    position: "absolute",
    top: 0,
    left: 1,
    width: 16,
    height: 14,
  },
  iconAwesomeExchangeAlt3: {
    position: "absolute",
    marginTop: -177.08,
    top: "50%",
    left: 2,
    width: 15,
    height: 12,
  },
  iconAwesomeGlobe3: {
    position: "absolute",
    top: 81,
    left: 1,
    width: 15,
    height: 15,
  },
  groupIcon25: {
    position: "absolute",
    marginTop: -258.08,
    marginLeft: -141,
    top: "50%",
    left: "50%",
    width: 13,
    height: 14,
  },
  marketplaceFacebookSeeklogoIcon1: {
    position: "absolute",
    marginTop: -138.42,
    top: "50%",
    left: 2,
    width: 13,
    height: 12,
  },
  iconAwesomeCoins1: {
    position: "absolute",
    marginTop: -97.9,
    top: "50%",
    left: 3,
    width: 14,
    height: 14,
  },
  subtraction12Icon1: {
    position: "absolute",
    marginTop: -40.36,
    top: "50%",
    left: 2,
    width: 13,
    height: 15,
  },
  union27Icon1: {
    position: "absolute",
    marginTop: -2.08,
    top: "50%",
    left: 0,
    width: 20,
    height: 14,
  },
  union28Icon1: {
    position: "absolute",
    marginTop: 37.92,
    top: "50%",
    left: 0,
    width: 20,
    height: 14,
  },
  iconSimpleReadthedocs1: {
    position: "absolute",
    marginTop: 77.92,
    top: "50%",
    left: 3,
    width: 13,
    height: 17,
  },
  iconMaterialAccountBalance1: {
    position: "absolute",
    marginTop: 141.05,
    top: "50%",
    left: 1,
    width: 14,
    height: 13,
  },
  iconMaterialUndo1: {
    position: "absolute",
    marginTop: 139.21,
    top: "50%",
    left: 15,
    width: 9,
    height: 17,
  },
  iconOpenDocument1: {
    position: "absolute",
    bottom: 85,
    left: 2,
    width: 15,
    height: 17,
  },
  iconIonicMdApps1: {
    position: "absolute",
    bottom: 42,
    left: 1,
    width: 16,
    height: 16,
  },
  iconAwesomeMobileAlt1: {
    position: "absolute",
    bottom: 0,
    left: 2,
    width: 12,
    height: 19,
  },
  groupView59: {
    position: "absolute",
    top: 54,
    right: 22,
    bottom: 19,
    left: 19,
  },
  groupView60: {
    position: "absolute",
    right: 0,
    bottom: 278,
    width: 326,
    height: 673,
  },
  rectangleView19: {
    position: "absolute",
    marginTop: -290.5,
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
    height: 581,
  },
  freeMetalCards: {
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#00003d",
  },
  freeMetalCardsPlasticAnd: {
    margin: 0,
  },
  perMetalCard: {
    fontFamily: "Helvetica",
    color: "#999",
  },
  perMetalCardOutsideOfThe: {
    margin: 0,
  },
  blankLine52: {
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#00003d",
  },
  blankLine53: {
    margin: 0,
  },
  freeInternationalPayments4: {
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#00003d",
  },
  freeInternationalPayments5: {
    margin: 0,
  },
  a3Fee2: {
    fontFamily: "Helvetica",
  },
  a3FeeAppliesPerInternati2: {
    color: "#999",
  },
  a3FeeAppliesPerInternati3: {
    margin: 0,
  },
  blankLine54: {
    fontWeight: "700",
    fontFamily: "Helvetica",
  },
  blankLine55: {
    color: "#999",
  },
  blankLine56: {
    margin: 0,
  },
  freeLocalPayments: {
    color: "#00003d",
  },
  freeLocalPayments1: {
    fontWeight: "700",
    fontFamily: "Helvetica",
  },
  freeLocalPayments2: {
    margin: 0,
  },
  a020Fee: {
    fontFamily: "Helvetica",
  },
  a020FeeAppliesPerLocal: {
    color: "#999",
  },
  a020FeeAppliesPerLocal1: {
    margin: 0,
  },
  blankLine57: {
    fontWeight: "700",
    fontFamily: "Helvetica",
  },
  blankLine58: {
    color: "#999",
  },
  blankLine59: {
    margin: 0,
  },
  exchange50kAt2: {
    color: "#00003d",
  },
  exchange50kAtTheInterbank4: {
    fontWeight: "700",
    fontFamily: "Helvetica",
  },
  exchange50kAtTheInterbank5: {
    margin: 0,
  },
  a04Markup2: {
    fontFamily: "Helvetica",
  },
  a04MarkupAppliesForEach2: {
    color: "#999",
  },
  a04MarkupAppliesForEach3: {
    margin: 0,
  },
  blankLine60: {
    fontWeight: "700",
    fontFamily: "Helvetica",
  },
  blankLine61: {
    color: "#999",
  },
  blankLine62: {
    margin: 0,
  },
  paymentAcceptance: {
    color: "#00003d",
  },
  paymentAcceptance1: {
    fontWeight: "700",
    fontFamily: "Helvetica",
  },
  paymentAcceptance2: {
    margin: 0,
  },
  onlineCardPayments: {
    fontFamily: "Helvetica",
    color: "#999",
  },
  onlineCardPaymentsCardRea: {
    margin: 0,
  },
  text25: {
    fontFamily: "Helvetica",
    color: "#999",
  },
  cryptoExchange: {
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#00003d",
  },
  cryptoExchange1: {
    margin: 0,
  },
  a099Fee: {
    fontFamily: "Helvetica",
    color: "#999",
  },
  a099FeeAppliesWhenBuyin: {
    margin: 0,
  },
  blankLine63: {
    fontFamily: "Helvetica",
    color: "#999",
  },
  blankLine64: {
    margin: 0,
  },
  support: {
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#00003d",
  },
  support1: {
    margin: 0,
  },
  freeMetalCardsPlasticAnd1: {
    position: "absolute",
    marginTop: -268,
    top: "50%",
    left: 31,
    fontSize: 14,
    lineHeight: 20,
    textAlign: "left",
    width: 267,
  },
  iconIonicIosCard: {
    position: "absolute",
    top: 4,
    left: 2,
    width: 17,
    height: 12,
  },
  iconAwesomeGlobe4: {
    position: "absolute",
    marginTop: -169.23,
    top: "50%",
    left: 2,
    width: 17,
    height: 17,
  },
  groupIcon26: {
    position: "absolute",
    marginTop: 73.28,
    top: "50%",
    left: 3,
    width: 15,
    height: 12,
  },
  groupIcon27: {
    position: "absolute",
    bottom: 0,
    left: 3,
    width: 16,
    height: 15,
  },
  iconMaterialAccountBalance2: {
    position: "absolute",
    marginTop: -85.87,
    top: "50%",
    left: 2,
    width: 14,
    height: 13,
  },
  groupIcon28: {
    position: "absolute",
    bottom: 79,
    left: 2,
    width: 17,
    height: 17,
  },
  union29Icon: {
    position: "absolute",
    marginTop: -8.28,
    top: "50%",
    left: 0,
    width: 17,
    height: 17,
  },
  groupView61: {
    position: "absolute",
    top: 20,
    right: 12,
    bottom: 25,
    left: 17,
  },
  groupView62: {
    position: "absolute",
    top: 35,
    right: 0,
    bottom: 0,
    left: 0,
  },
  hello24: {
    position: "absolute",
    marginTop: -308,
    top: "50%",
    left: 0,
    fontSize: 16,
    fontFamily: "Helvetica",
    color: "#00003d",
    textAlign: "left",
  },
  groupView63: {
    position: "absolute",
    marginTop: -504.5,
    top: "50%",
    left: 25,
    width: 326,
    height: 616,
  },
  rectangleView20: {
    position: "absolute",
    marginTop: -290.5,
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
    height: 581,
  },
  freeMetalCards1: {
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#00003d",
  },
  freeMetalCardsPlasticAnd2: {
    margin: 0,
  },
  perMetalCard1: {
    fontFamily: "Helvetica",
    color: "#999",
  },
  perMetalCardOutsideOfThe1: {
    margin: 0,
  },
  blankLine65: {
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#00003d",
  },
  blankLine66: {
    margin: 0,
  },
  freeInternationalPayments6: {
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#00003d",
  },
  freeInternationalPayments7: {
    margin: 0,
  },
  a3Fee3: {
    fontFamily: "Helvetica",
  },
  a3FeeAppliesPerInternati4: {
    color: "#999",
  },
  a3FeeAppliesPerInternati5: {
    margin: 0,
  },
  blankLine67: {
    fontWeight: "700",
    fontFamily: "Helvetica",
  },
  blankLine68: {
    color: "#999",
  },
  blankLine69: {
    margin: 0,
  },
  freeLocalPayments3: {
    color: "#00003d",
  },
  freeLocalPayments4: {
    fontWeight: "700",
    fontFamily: "Helvetica",
  },
  freeLocalPayments5: {
    margin: 0,
  },
  a020Fee1: {
    fontFamily: "Helvetica",
  },
  a020FeeAppliesPerLocal2: {
    color: "#999",
  },
  a020FeeAppliesPerLocal3: {
    margin: 0,
  },
  blankLine70: {
    fontWeight: "700",
    fontFamily: "Helvetica",
  },
  blankLine71: {
    color: "#999",
  },
  blankLine72: {
    margin: 0,
  },
  exchange50kAt3: {
    color: "#00003d",
  },
  exchange50kAtTheInterbank6: {
    fontWeight: "700",
    fontFamily: "Helvetica",
  },
  exchange50kAtTheInterbank7: {
    margin: 0,
  },
  a04Markup3: {
    fontFamily: "Helvetica",
  },
  a04MarkupAppliesForEach4: {
    color: "#999",
  },
  a04MarkupAppliesForEach5: {
    margin: 0,
  },
  blankLine73: {
    fontWeight: "700",
    fontFamily: "Helvetica",
  },
  blankLine74: {
    color: "#999",
  },
  blankLine75: {
    margin: 0,
  },
  paymentAcceptance3: {
    color: "#00003d",
  },
  paymentAcceptance4: {
    fontWeight: "700",
    fontFamily: "Helvetica",
  },
  paymentAcceptance5: {
    margin: 0,
  },
  onlineCardPayments1: {
    fontFamily: "Helvetica",
    color: "#999",
  },
  onlineCardPaymentsCardRea1: {
    margin: 0,
  },
  text26: {
    fontFamily: "Helvetica",
    color: "#999",
  },
  cryptoExchange2: {
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#00003d",
  },
  cryptoExchange3: {
    margin: 0,
  },
  a099Fee1: {
    fontFamily: "Helvetica",
    color: "#999",
  },
  a099FeeAppliesWhenBuyin1: {
    margin: 0,
  },
  blankLine76: {
    fontFamily: "Helvetica",
    color: "#999",
  },
  blankLine77: {
    margin: 0,
  },
  support2: {
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#00003d",
  },
  support3: {
    margin: 0,
  },
  freeMetalCardsPlasticAnd3: {
    position: "absolute",
    marginTop: -268,
    top: "50%",
    left: 31,
    fontSize: 14,
    lineHeight: 20,
    textAlign: "left",
    width: 267,
  },
  iconIonicIosCard1: {
    position: "absolute",
    top: 4,
    left: 2,
    width: 17,
    height: 12,
  },
  iconAwesomeGlobe5: {
    position: "absolute",
    marginTop: -169.23,
    top: "50%",
    left: 2,
    width: 17,
    height: 17,
  },
  groupIcon29: {
    position: "absolute",
    marginTop: 73.28,
    top: "50%",
    left: 3,
    width: 15,
    height: 12,
  },
  groupIcon30: {
    position: "absolute",
    bottom: 0,
    left: 3,
    width: 16,
    height: 15,
  },
  iconMaterialAccountBalance3: {
    position: "absolute",
    marginTop: -85.87,
    top: "50%",
    left: 2,
    width: 14,
    height: 13,
  },
  groupIcon31: {
    position: "absolute",
    bottom: 79,
    left: 2,
    width: 17,
    height: 17,
  },
  union29Icon1: {
    position: "absolute",
    marginTop: -8.28,
    top: "50%",
    left: 0,
    width: 17,
    height: 17,
  },
  groupView64: {
    position: "absolute",
    top: 20,
    right: 12,
    bottom: 25,
    left: 17,
  },
  groupView65: {
    position: "absolute",
    top: 35,
    right: 0,
    bottom: 0,
    left: 0,
  },
  hello25: {
    position: "absolute",
    marginTop: -308,
    top: "50%",
    left: 0,
    fontSize: 16,
    fontFamily: "Helvetica",
    color: "#00003d",
    textAlign: "left",
  },
  groupView66: {
    position: "absolute",
    marginTop: -504.5,
    marginLeft: -150.5,
    top: "50%",
    left: "50%",
    width: 326,
    height: 616,
  },
  rectangleView21: {
    position: "absolute",
    marginTop: -290.5,
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
    height: 581,
  },
  freeMetalCards2: {
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#00003d",
  },
  freeMetalCardsPlasticAnd4: {
    margin: 0,
  },
  perMetalCard2: {
    fontFamily: "Helvetica",
    color: "#999",
  },
  perMetalCardOutsideOfThe2: {
    margin: 0,
  },
  blankLine78: {
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#00003d",
  },
  blankLine79: {
    margin: 0,
  },
  freeInternationalPayments8: {
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#00003d",
  },
  freeInternationalPayments9: {
    margin: 0,
  },
  a3Fee4: {
    fontFamily: "Helvetica",
  },
  a3FeeAppliesPerInternati6: {
    color: "#999",
  },
  a3FeeAppliesPerInternati7: {
    margin: 0,
  },
  blankLine80: {
    fontWeight: "700",
    fontFamily: "Helvetica",
  },
  blankLine81: {
    color: "#999",
  },
  blankLine82: {
    margin: 0,
  },
  freeLocalPayments6: {
    color: "#00003d",
  },
  freeLocalPayments7: {
    fontWeight: "700",
    fontFamily: "Helvetica",
  },
  freeLocalPayments8: {
    margin: 0,
  },
  a020Fee2: {
    fontFamily: "Helvetica",
  },
  a020FeeAppliesPerLocal4: {
    color: "#999",
  },
  a020FeeAppliesPerLocal5: {
    margin: 0,
  },
  blankLine83: {
    fontWeight: "700",
    fontFamily: "Helvetica",
  },
  blankLine84: {
    color: "#999",
  },
  blankLine85: {
    margin: 0,
  },
  exchange50kAt4: {
    color: "#00003d",
  },
  exchange50kAtTheInterbank8: {
    fontWeight: "700",
    fontFamily: "Helvetica",
  },
  exchange50kAtTheInterbank9: {
    margin: 0,
  },
  a04Markup4: {
    fontFamily: "Helvetica",
  },
  a04MarkupAppliesForEach6: {
    color: "#999",
  },
  a04MarkupAppliesForEach7: {
    margin: 0,
  },
  blankLine86: {
    fontWeight: "700",
    fontFamily: "Helvetica",
  },
  blankLine87: {
    color: "#999",
  },
  blankLine88: {
    margin: 0,
  },
  paymentAcceptance6: {
    color: "#00003d",
  },
  paymentAcceptance7: {
    fontWeight: "700",
    fontFamily: "Helvetica",
  },
  paymentAcceptance8: {
    margin: 0,
  },
  onlineCardPayments2: {
    fontFamily: "Helvetica",
    color: "#999",
  },
  onlineCardPaymentsCardRea2: {
    margin: 0,
  },
  text27: {
    fontFamily: "Helvetica",
    color: "#999",
  },
  cryptoExchange4: {
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#00003d",
  },
  cryptoExchange5: {
    margin: 0,
  },
  a099Fee2: {
    fontFamily: "Helvetica",
    color: "#999",
  },
  a099FeeAppliesWhenBuyin2: {
    margin: 0,
  },
  blankLine89: {
    fontFamily: "Helvetica",
    color: "#999",
  },
  blankLine90: {
    margin: 0,
  },
  support4: {
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#00003d",
  },
  support5: {
    margin: 0,
  },
  freeMetalCardsPlasticAnd5: {
    position: "absolute",
    marginTop: -268,
    top: "50%",
    left: 31,
    fontSize: 14,
    lineHeight: 20,
    textAlign: "left",
    width: 267,
  },
  iconIonicIosCard2: {
    position: "absolute",
    top: 4,
    left: 2,
    width: 17,
    height: 12,
  },
  iconAwesomeGlobe6: {
    position: "absolute",
    marginTop: -169.23,
    top: "50%",
    left: 2,
    width: 17,
    height: 17,
  },
  groupIcon32: {
    position: "absolute",
    marginTop: 73.28,
    top: "50%",
    left: 3,
    width: 15,
    height: 12,
  },
  groupIcon33: {
    position: "absolute",
    bottom: 0,
    left: 3,
    width: 16,
    height: 15,
  },
  iconMaterialAccountBalance4: {
    position: "absolute",
    marginTop: -85.87,
    top: "50%",
    left: 2,
    width: 14,
    height: 13,
  },
  groupIcon34: {
    position: "absolute",
    bottom: 79,
    left: 2,
    width: 17,
    height: 17,
  },
  union29Icon2: {
    position: "absolute",
    marginTop: -8.28,
    top: "50%",
    left: 0,
    width: 17,
    height: 17,
  },
  groupView67: {
    position: "absolute",
    top: 20,
    right: 12,
    bottom: 25,
    left: 17,
  },
  groupView68: {
    position: "absolute",
    top: 35,
    right: 0,
    bottom: 0,
    left: 0,
  },
  hello26: {
    position: "absolute",
    marginTop: -308,
    top: "50%",
    left: 0,
    fontSize: 16,
    fontFamily: "Helvetica",
    color: "#00003d",
    textAlign: "left",
  },
  groupView69: {
    position: "absolute",
    marginTop: -504.5,
    top: "50%",
    right: 0,
    width: 326,
    height: 616,
  },
  rectangleView22: {
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
  groupView70: {
    position: "absolute",
    marginTop: -30,
    top: "50%",
    right: 0,
    left: 0,
    height: 60,
  },
  component20887: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  hello27: {
    position: "absolute",
    top: "36.67%",
    left: "38.04%",
    fontSize: 15,
    lineHeight: 17,
    textTransform: "uppercase",
    fontFamily: "Helvetica",
    color: "#fff",
    textAlign: "left",
  },
  groupView71: {
    position: "absolute",
    marginTop: -704.5,
    top: "50%",
    left: 25,
    width: 326,
    height: 60,
  },
  rectangleView23: {
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
  maskGroup2361: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 13,
    left: 0,
  },
  groupView72: {
    position: "absolute",
    marginTop: -30,
    top: "50%",
    right: 0,
    left: 0,
    height: 60,
  },
  component20888: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  hello28: {
    position: "absolute",
    top: "36.67%",
    left: "38.04%",
    fontSize: 15,
    lineHeight: 17,
    textTransform: "uppercase",
    fontFamily: "Helvetica",
    color: "#fff",
    textAlign: "left",
  },
  groupView73: {
    position: "absolute",
    marginTop: -611.5,
    marginLeft: -150.5,
    top: "50%",
    left: "50%",
    width: 326,
    height: 60,
  },
  rectangleView24: {
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
  maskGroup2362: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 13,
    left: 0,
  },
  groupView74: {
    position: "absolute",
    marginTop: -30,
    top: "50%",
    right: 0,
    left: 0,
    height: 60,
  },
  component20889: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  hello29: {
    position: "absolute",
    top: "36.67%",
    left: "38.04%",
    fontSize: 15,
    lineHeight: 17,
    textTransform: "uppercase",
    fontFamily: "Helvetica",
    color: "#fff",
    textAlign: "left",
  },
  groupView75: {
    position: "absolute",
    marginTop: -611.5,
    top: "50%",
    right: 0,
    width: 326,
    height: 60,
  },
  iconFeatherArrowLeft: {
    position: "absolute",
    top: 26,
    left: 27,
    width: 17,
    height: 17,
  },
  groupView76: {
    position: "relative",
    width: 1073,
    height: 2741,
  },
  hello30: {
    position: "relative",
    fontSize: 26,
    lineHeight: 30,
    fontWeight: "700",
    fontFamily: "Typo Grotesk",
    color: "#00003d",
    textAlign: "left",
  },
  lineView1: {
    position: "relative",
    borderStyle: "solid",
    borderColor: "#fff",
    borderTopWidth: 1,
    width: 376,
    height: 2,
  },
  iconFeatherArrowLeft1: {
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
  rectangleView25: {
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
  maskGroup2363: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 13,
    left: 0,
  },
  groupView77: {
    position: "absolute",
    marginTop: -30,
    top: "50%",
    right: 0,
    left: 0,
    height: 60,
  },
  component20890: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  hello31: {
    position: "absolute",
    top: "36.67%",
    left: "38.04%",
    fontSize: 15,
    lineHeight: 17,
    textTransform: "uppercase",
    fontFamily: "Helvetica",
    color: "#fff",
    textAlign: "left",
  },
  groupPressable1: {
    position: "relative",
    width: 326,
    height: 60,
  },
  homeIndicator3: {
    position: "relative",
    borderRadius: 100,
    backgroundColor: "#000",
    width: 134,
    height: 5,
  },
  standard: {
    fontSize: 18,
    lineHeight: 20,
    fontFamily: "Helvetica",
    color: "#999",
    textAlign: "left",
  },
  hello32: {
    position: "absolute",
    left: 0,
    top: 1,
  },
  hello33: {
    position: "absolute",
    marginLeft: -16.5,
    top: 1,
    left: "50%",
    fontSize: 18,
    lineHeight: 20,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#0101fd",
    textAlign: "left",
  },
  hello34: {
    position: "absolute",
    top: 1,
    right: -1,
    fontSize: 18,
    lineHeight: 20,
    fontFamily: "Helvetica",
    color: "#999",
    textAlign: "left",
  },
  component2353: {
    position: "relative",
    width: 319,
    height: 21,
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
  text28: {
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
  rectangleView26: {
    position: "absolute",
    bottom: 0,
    left: 0,
    borderRadius: 2,
    backgroundColor: "#272727",
    width: 3,
    height: 4,
  },
  rectangleView27: {
    position: "absolute",
    marginLeft: -3.5,
    bottom: 0,
    left: "50%",
    borderRadius: 2,
    backgroundColor: "#272727",
    width: 3,
    height: 6,
  },
  rectangleView28: {
    position: "absolute",
    marginLeft: 0.5,
    bottom: 0,
    left: "50%",
    borderRadius: 2,
    backgroundColor: "#272727",
    width: 3,
    height: 9,
  },
  rectangleView29: {
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
  chooseCardsPremium: {
    position: "relative",
    backgroundColor: "#4b4b4b",
    flex: 1,
    width: "100%",
    flexDirection: "column",
    alignItems: "flex-start",
  },
});

export default ChooseCardsPremium;
