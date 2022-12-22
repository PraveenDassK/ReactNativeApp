import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const ChooseCardsStandard = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.chooseCardsStandard}>
      <View style={[styles.groupView6, styles.ml_1956]}>
        <View style={styles.groupView1}>
          <View style={styles.rectangleView} />
          <Text style={styles.hello}>Additional features</Text>
          <View style={styles.groupView}>
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
              <Text style={styles.text} />
            </Text>
            <Image
              style={styles.iconAwesomeGift}
              resizeMode="cover"
              source={require("../assets/icon-awesomegift.png")}
            />
            <Image
              style={styles.iconAwesomeExchangeAlt}
              resizeMode="cover"
              source={require("../assets/icon-awesomeexchangealt4.png")}
            />
            <Image
              style={styles.iconAwesomeGlobe}
              resizeMode="cover"
              source={require("../assets/icon-awesomeglobe.png")}
            />
            <Image
              style={styles.groupIcon}
              resizeMode="cover"
              source={require("../assets/group-306242.png")}
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
              source={require("../assets/subtraction-122.png")}
            />
            <Image
              style={styles.union27Icon}
              resizeMode="cover"
              source={require("../assets/union-272.png")}
            />
            <Image
              style={styles.union28Icon}
              resizeMode="cover"
              source={require("../assets/union-272.png")}
            />
            <Image
              style={styles.iconSimpleReadthedocs}
              resizeMode="cover"
              source={require("../assets/icon-simplereadthedocs2.png")}
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
        <View style={styles.groupView3}>
          <View style={styles.rectangleView1} />
          <Text style={styles.hello1}>Additional features</Text>
          <View style={styles.groupView2}>
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
              <Text style={styles.text1} />
            </Text>
            <Image
              style={styles.iconAwesomeGift1}
              resizeMode="cover"
              source={require("../assets/icon-awesomegift.png")}
            />
            <Image
              style={styles.iconAwesomeExchangeAlt1}
              resizeMode="cover"
              source={require("../assets/icon-awesomeexchangealt4.png")}
            />
            <Image
              style={styles.iconAwesomeGlobe1}
              resizeMode="cover"
              source={require("../assets/icon-awesomeglobe.png")}
            />
            <Image
              style={styles.groupIcon1}
              resizeMode="cover"
              source={require("../assets/group-306243.png")}
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
              source={require("../assets/subtraction-122.png")}
            />
            <Image
              style={styles.union27Icon1}
              resizeMode="cover"
              source={require("../assets/union-272.png")}
            />
            <Image
              style={styles.union28Icon1}
              resizeMode="cover"
              source={require("../assets/union-272.png")}
            />
            <Image
              style={styles.iconSimpleReadthedocs1}
              resizeMode="cover"
              source={require("../assets/icon-simplereadthedocs2.png")}
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
        <View style={styles.groupView5}>
          <View style={styles.rectangleView2} />
          <Text style={styles.hello2}>Additional features</Text>
          <View style={styles.groupView4}>
            <Text style={styles.rewardsFreePaymentsToCarb2}>
              <Text style={styles.rewards5}>
                <Text style={styles.rewards4}>Rewards</Text>
              </Text>
              <Text style={styles.blankLine53}>
                <Text style={styles.blankLine52}> </Text>
              </Text>
              <Text style={styles.freePaymentsToCarbonyteAcc2}>
                <Text style={styles.freePaymentsTo2}>
                  Free payments to Carbonyte accounts
                </Text>
              </Text>
              <Text style={styles.blankLine55}>
                <Text style={styles.blankLine54}> </Text>
              </Text>
              <Text style={styles.iBANsForGlobalTransfers2}>
                <Text style={styles.iBANsForGlobal2}>
                  IBANs for global transfers
                </Text>
              </Text>
              <Text style={styles.blankLine57}>
                <Text style={styles.blankLine56}> </Text>
              </Text>
              <Text style={styles.localAccountsInGBPAndEUR2}>
                <Text style={styles.localAccountsIn2}>
                  Local accounts in GBP and EUR
                </Text>
              </Text>
              <Text style={styles.blankLine59}>
                <Text style={styles.blankLine58}> </Text>
              </Text>
              <Text style={styles.acceptPaymentsOnYourWebsit2}>
                <Text style={styles.acceptPaymentsOn2}>
                  Accept payments on your website
                </Text>
              </Text>
              <Text style={styles.blankLine61}>
                <Text style={styles.blankLine60}> </Text>
              </Text>
              <Text style={styles.paymentRequestsWithLinksAn2}>
                <Text style={styles.paymentRequestsWith2}>
                  Payment requests with links and QR codes
                </Text>
              </Text>
              <Text style={styles.blankLine63}>
                <Text style={styles.blankLine62}> </Text>
              </Text>
              <Text style={styles.manageRecurringPayments5}>
                <Text style={styles.manageRecurringPayments4}>
                  Manage recurring payments
                </Text>
              </Text>
              <Text style={styles.blankLine65}>
                <Text style={styles.blankLine64}> </Text>
              </Text>
              <Text style={styles.unlimitedTeamMembers5}>
                <Text style={styles.unlimitedTeamMembers4}>
                  Unlimited team members
                </Text>
              </Text>
              <Text style={styles.blankLine67}>
                <Text style={styles.blankLine66}> </Text>
              </Text>
              <Text style={styles.teamMemberPermissions5}>
                <Text style={styles.teamMemberPermissions4}>
                  Team member permissions
                </Text>
              </Text>
              <Text style={styles.blankLine69}>
                <Text style={styles.blankLine68}> </Text>
              </Text>
              <Text style={styles.expensesManagement5}>
                <Text style={styles.expensesManagement4}>
                  Expenses Management
                </Text>
              </Text>
              <Text style={styles.addMembersFor5PerMonth4}>
                <Text style={styles.addMembersFor4}>
                  Add members for £5 per month
                </Text>
              </Text>
              <Text style={styles.blankLine71}>
                <Text style={styles.blankLine70}> </Text>
              </Text>
              <Text style={styles.automatedPayroll5}>
                <Text style={styles.automatedPayroll4}>Automated payroll</Text>
              </Text>
              <Text style={styles.addMembersFor5PerMonth5}>
                <Text style={styles.addMembersFor5}>
                  Add members for £5 per month
                </Text>
              </Text>
              <Text style={styles.blankLine73}>
                <Text style={styles.blankLine72}> </Text>
              </Text>
              <Text style={styles.createAndTrackYourInvoices2}>
                <Text style={styles.createAndTrack2}>
                  Create and track your invoices
                </Text>
              </Text>
              <Text style={styles.blankLine75}>
                <Text style={styles.blankLine74}> </Text>
              </Text>
              <Text style={styles.connectYourCompanysApps2}>
                <Text style={styles.connectYourCompanys2}>
                  Connect your company's apps
                </Text>
              </Text>
              <Text style={styles.blankLine77}>
                <Text style={styles.blankLine76}> </Text>
              </Text>
              <Text style={styles.availableOnTheWebOrViaTh2}>
                <Text style={styles.availableOnThe2}>
                  Available on the web or via the app
                </Text>
              </Text>
              <Text style={styles.text2} />
            </Text>
            <Image
              style={styles.iconAwesomeGift2}
              resizeMode="cover"
              source={require("../assets/icon-awesomegift.png")}
            />
            <Image
              style={styles.iconAwesomeExchangeAlt2}
              resizeMode="cover"
              source={require("../assets/icon-awesomeexchangealt4.png")}
            />
            <Image
              style={styles.iconAwesomeGlobe2}
              resizeMode="cover"
              source={require("../assets/icon-awesomeglobe.png")}
            />
            <Image
              style={styles.groupIcon2}
              resizeMode="cover"
              source={require("../assets/group-306244.png")}
            />
            <Image
              style={styles.marketplaceFacebookSeeklogoIcon2}
              resizeMode="cover"
              source={require("../assets/marketplacefacebookseeklogocom.png")}
            />
            <Image
              style={styles.iconAwesomeCoins2}
              resizeMode="cover"
              source={require("../assets/icon-awesomecoins.png")}
            />
            <Image
              style={styles.subtraction12Icon2}
              resizeMode="cover"
              source={require("../assets/subtraction-122.png")}
            />
            <Image
              style={styles.union27Icon2}
              resizeMode="cover"
              source={require("../assets/union-272.png")}
            />
            <Image
              style={styles.union28Icon2}
              resizeMode="cover"
              source={require("../assets/union-272.png")}
            />
            <Image
              style={styles.iconSimpleReadthedocs2}
              resizeMode="cover"
              source={require("../assets/icon-simplereadthedocs2.png")}
            />
            <Image
              style={styles.iconMaterialAccountBalance2}
              resizeMode="cover"
              source={require("../assets/icon-materialaccountbalancewallet.png")}
            />
            <Image
              style={styles.iconMaterialUndo2}
              resizeMode="cover"
              source={require("../assets/icon-materialundo.png")}
            />
            <Image
              style={styles.iconOpenDocument2}
              resizeMode="cover"
              source={require("../assets/icon-opendocument.png")}
            />
            <Image
              style={styles.iconIonicMdApps2}
              resizeMode="cover"
              source={require("../assets/icon-ionicmdapps.png")}
            />
            <Image
              style={styles.iconAwesomeMobileAlt2}
              resizeMode="cover"
              source={require("../assets/icon-awesomemobilealt.png")}
            />
          </View>
        </View>
      </View>
      <Pressable
        style={[styles.component2373, styles.mt30, styles.ml25]}
        onPress={() => navigation.navigate("ChooseCardsPremium")}
      >
        <Text style={styles.hello3}>ESSENTIAL</Text>
        <Text style={styles.hello4}>£2</Text>
        <Text style={styles.hello5}>£10</Text>
        <Text style={styles.hello6}>£25</Text>
        <Text style={styles.hello7}>ADVANCE</Text>
        <Text style={styles.hello8}>ELITE</Text>
        <View style={styles.groupView7}>
          <View style={styles.rectangleView3} />
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
              <Text style={styles.text3}>{`• `}</Text>(IBAN/Sort Code)
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
            <Text style={styles.text4} />
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
            <Text style={styles.text5} />
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
        <View style={styles.groupView19}>
          <View style={styles.rectangleView4} />
          <View style={styles.groupView8}>
            <Text style={styles.allEssentialFeatures}>
              All Essential Features
            </Text>
          </View>
          <View style={styles.groupView9}>
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
              <Text style={styles.text6} />
            </Text>
          </View>
          <View style={styles.groupView10}>
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
                <Text style={styles.text7}>{`1 `}</Text>Free Expense Card
              </Text>
            </Text>
          </View>
          <View style={styles.groupView11}>
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
              <Text style={styles.text8} />
            </Text>
          </View>
          <View style={styles.groupView12}>
            <Text style={styles.slackIntegrationComingSoo}>
              <Text style={styles.slackIntegration1}>
                <Text style={styles.slackIntegration}>Slack Integration</Text>
              </Text>
              <Text style={styles.comingSoon5}>
                <Text style={styles.comingSoon4}> (Coming Soon)</Text>
              </Text>
              <Text style={styles.text9} />
            </Text>
          </View>
          <View style={styles.groupView13}>
            <Text style={styles.customerServicesOnlinePhon}>
              <Text style={styles.customerServices1}>
                <Text style={styles.customerServices}>Customer Services:</Text>
              </Text>
              <Text style={styles.onlinePhone1}>
                <Text style={styles.onlinePhone}>Online/Phone</Text>
              </Text>
              <Text style={styles.text10} />
            </Text>
          </View>
          <View style={styles.groupView14}>
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
          <View style={styles.groupView15}>
            <Text style={styles.categoriseAndTagSpending}>
              Categorise and Tag Spending
            </Text>
          </View>
          <View style={styles.groupView16}>
            <Text style={styles.cardPaymentsForeignEXFee1}>
              Card Payments Foreign EX Fee: 1.98%
            </Text>
          </View>
          <View style={styles.groupView17}>
            <Text style={styles.invoicePaymentsForeignEXFe1}>
              Invoice Payments Foreign EX Fee: 2.40%
            </Text>
          </View>
          <View style={styles.groupView18}>
            <Text style={styles.plant5TreesAMonth}>Plant 5 trees a month</Text>
          </View>
        </View>
        <View style={styles.groupView21}>
          <View style={styles.rectangleView5} />
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
            <Text style={styles.text11} />
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
            <Text style={styles.text12} />
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
            <Text style={styles.text13} />
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
          <View style={styles.groupView20}>
            <Text style={styles.invoicePaymentsForeignEXFe2}>
              Invoice Payments Foreign EX Fee: 2.40%
            </Text>
          </View>
        </View>
        <View style={styles.card1}>
          <View style={styles.groupView25}>
            <View style={styles.groupView24}>
              <Image
                style={styles.path33118Icon}
                resizeMode="cover"
                source={require("../assets/path-331185.png")}
              />
              <View style={styles.groupView23}>
                <Image
                  style={styles.groupIcon3}
                  resizeMode="cover"
                  source={require("../assets/group-317595.png")}
                />
                <Image
                  style={styles.groupIcon4}
                  resizeMode="cover"
                  source={require("../assets/group-317605.png")}
                />
                <View style={styles.rectangleView6} />
                <Image
                  style={styles.rectangleIcon}
                  resizeMode="cover"
                  source={require("../assets/rectangle-262042.png")}
                />
                <View style={styles.groupView22}>
                  <Text style={styles.b}>B</Text>
                </View>
                <Text style={styles.bUSINESS}>BUSINESS</Text>
              </View>
            </View>
            <Image
              style={styles.groupIcon5}
              resizeMode="cover"
              source={require("../assets/group-317645.png")}
            />
            <Image
              style={styles.groupIcon6}
              resizeMode="cover"
              source={require("../assets/group-317665.png")}
            />
            <Image
              style={styles.groupIcon7}
              resizeMode="cover"
              source={require("../assets/group-317675.png")}
            />
          </View>
        </View>
        <View style={styles.card11}>
          <View style={styles.groupView29}>
            <View style={styles.groupView28}>
              <Image
                style={styles.path33118Icon1}
                resizeMode="cover"
                source={require("../assets/path-331186.png")}
              />
              <View style={styles.groupView27}>
                <Image
                  style={styles.groupIcon8}
                  resizeMode="cover"
                  source={require("../assets/group-317595.png")}
                />
                <Image
                  style={styles.groupIcon9}
                  resizeMode="cover"
                  source={require("../assets/group-317605.png")}
                />
                <View style={styles.rectangleView7} />
                <Image
                  style={styles.rectangleIcon1}
                  resizeMode="cover"
                  source={require("../assets/rectangle-262042.png")}
                />
                <View style={styles.groupView26}>
                  <Text style={styles.b1}>B</Text>
                </View>
                <Text style={styles.bUSINESS1}>BUSINESS</Text>
              </View>
            </View>
            <Image
              style={styles.groupIcon10}
              resizeMode="cover"
              source={require("../assets/group-317645.png")}
            />
            <Image
              style={styles.groupIcon11}
              resizeMode="cover"
              source={require("../assets/group-317665.png")}
            />
            <Image
              style={styles.groupIcon12}
              resizeMode="cover"
              source={require("../assets/group-317675.png")}
            />
          </View>
        </View>
        <View style={styles.card12}>
          <View style={styles.groupView33}>
            <View style={styles.groupView32}>
              <Image
                style={styles.path33118Icon2}
                resizeMode="cover"
                source={require("../assets/path-331187.png")}
              />
              <View style={styles.groupView31}>
                <Image
                  style={styles.groupIcon13}
                  resizeMode="cover"
                  source={require("../assets/group-317595.png")}
                />
                <Image
                  style={styles.groupIcon14}
                  resizeMode="cover"
                  source={require("../assets/group-317605.png")}
                />
                <View style={styles.rectangleView8} />
                <Image
                  style={styles.rectangleIcon2}
                  resizeMode="cover"
                  source={require("../assets/rectangle-262042.png")}
                />
                <View style={styles.groupView30}>
                  <Text style={styles.b2}>B</Text>
                </View>
                <Text style={styles.bUSINESS2}>BUSINESS</Text>
              </View>
            </View>
            <Image
              style={styles.groupIcon15}
              resizeMode="cover"
              source={require("../assets/group-317645.png")}
            />
            <Image
              style={styles.groupIcon16}
              resizeMode="cover"
              source={require("../assets/group-317665.png")}
            />
            <Image
              style={styles.groupIcon17}
              resizeMode="cover"
              source={require("../assets/group-317675.png")}
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
      <View style={styles.rectangleView9} />
      <Pressable
        style={[styles.component2372, styles.mt_1804, styles.ml25]}
        onPress={() => navigation.navigate("ChooseCardsPremium")}
      >
        <Text style={styles.hello9}>ESSENTIAL</Text>
        <Text style={styles.hello10}>£2</Text>
        <Text style={styles.hello11}>£10</Text>
        <Text style={styles.hello12}>£25</Text>
        <Text style={styles.hello13}>ADVANCE</Text>
        <Text style={styles.hello14}>ELITE</Text>
        <View style={styles.groupView34}>
          <View style={styles.rectangleView10} />
          <Text style={styles.accountFeaturesMobileSet1}>
            <Text style={styles.accountFeatures3}>
              <Text style={styles.accountFeatures2}>Account Features:</Text>
            </Text>
            <Text style={styles.mobileSetUpAndSwitching1}>
              <Text style={styles.mobileSetUp1}>
                • Mobile Set Up and Switching
              </Text>
            </Text>
            <Text style={styles.fSCSProtectedBankAccounts1}>
              <Text style={styles.fSCSProtectedBank1}>
                • FSCS Protected Bank Accounts
              </Text>
            </Text>
            <Text style={styles.iBANSortCode1}>
              <Text style={styles.text14}>{`• `}</Text>(IBAN/Sort Code)
            </Text>
            <Text style={styles.userControl1}>• User Control</Text>
            <Text
              style={styles.abilityToAdd1}
            >{`• Ability to add additional accounts with `}</Text>
            <Text style={styles.samePhoneNumber1}> same phone number</Text>
            <Text style={styles.advancedSecurity1}>• Advanced Security</Text>
          </Text>
          <Text style={styles.cardsDebitAndVirtualCar1}>
            <Text style={styles.cards7}>
              <Text style={styles.cards6}>Cards:</Text>
            </Text>
            <Text style={styles.debitAndVirtualCard1}>
              <Text style={styles.debitAndVirtual1}>
                • Debit and Virtual Card
              </Text>
            </Text>
            <Text style={styles.addedExpenseCardsWithSpend3}>
              <Text
                style={styles.addedExpenseCards3}
              >{`• Added expense cards with spending   `}</Text>
            </Text>
            <Text style={styles.limits5PerCard1}>
              <Text style={styles.limits5Per1}> limits: £5 per card</Text>
            </Text>
            <Text style={styles.text15} />
          </Text>
          <Text style={styles.appSecurityPasswordProte1}>
            <Text style={styles.appSecurity3}>
              <Text style={styles.appSecurity2}>App Security:</Text>
            </Text>
            <Text style={styles.passwordProtection3}>
              <Text style={styles.passwordProtection2}>
                • Password Protection
              </Text>
            </Text>
            <Text style={styles.faceID3}>
              <Text style={styles.faceID2}>• Face ID</Text>
            </Text>
            <Text style={styles.fingerPrint3}>
              <Text style={styles.fingerPrint2}>• Finger Print</Text>
            </Text>
            <Text style={styles.freezeUnfreezeFromApp1}>
              <Text style={styles.freezeUnfreezeFromAp1}>
                • Freeze/Unfreeze From Ap
              </Text>
              p
            </Text>
            <Text style={styles.turnOffATM1}>
              • Turn Off ATM Withdrawals/Online/
            </Text>
            <Text
              style={styles.contactlessPayments1}
            >{`  Contactless Payments `}</Text>
          </Text>
          <Text style={styles.paymentsTransferInout01}>
            <Text style={styles.payments3}>
              <Text style={styles.payments2}>Payments:</Text>
            </Text>
            <Text style={styles.transferInout015transac3}>
              <Text style={styles.transferInout015transac2}>
                • Transfer in/out: 0.15£/transaction
              </Text>
            </Text>
            <Text style={styles.chapsBACSSEPAPayments3}>
              <Text
                style={styles.chapsBACSSEPAPayments2}
              >{`• Chaps/BACS /SEPA Payments `}</Text>
            </Text>
            <Text style={styles.mayBeAFeeSoFactorInPric1}>
              <Text style={styles.mayBeA1}>
                {" "}
                (may be a fee so factor in pricing)
              </Text>
            </Text>
            <Text style={styles.scheduledPayments1}>
              <Text style={styles.scheduledPay1}>• Scheduled Pay</Text>ments
            </Text>
            <Text style={styles.paymentNotifications1}>
              • Payment Notifications
            </Text>
          </Text>
          <Text style={styles.accountingServicesBankFeed1}>
            <Text style={styles.accountingServices5}>
              <Text style={styles.accountingServices4}>
                Accounting Services:
              </Text>
            </Text>
            <Text style={styles.bankFeed5}>
              <Text style={styles.bankFeed4}>Bank Feed</Text>
            </Text>
            <Text style={styles.text16} />
          </Text>
          <Text style={styles.sageAndXeroIntegrationCo1}>
            <Text style={styles.sageAndXeroIntegration1}>
              <Text
                style={styles.sageAndXero1}
              >{`Sage and Xero integration `}</Text>
            </Text>
            <Text style={styles.comingSoon8}>
              <Text style={styles.comingSoon7}>(Coming Soon)</Text>
            </Text>
          </Text>
          <Text style={styles.customerServiceOnline5}>
            <Text style={styles.customerServiceOnline4}>
              <Text style={styles.customerService2}>Customer Service:</Text>
              <Text style={styles.online2}> Online</Text>
            </Text>
          </Text>
          <Text style={styles.customerServiceOnline7}>
            <Text style={styles.customerServiceOnline6}>
              <Text style={styles.customerService3}>Customer Service:</Text>
              <Text style={styles.online3}> Online</Text>
            </Text>
          </Text>
          <Text style={styles.carbonCalculator5}>
            <Text style={styles.carbonCalculator4}>
              <Text
                style={styles.carbonCalculator3}
              >{`Carbon Calculator `}</Text>
            </Text>
          </Text>
          <Text style={styles.carbonOffset1}>{`Carbon Offset `}</Text>
          <Text style={styles.accessToGeniusMarketPlace1}>
            Access to Genius Market Place
          </Text>
          <Text style={styles.manageSubscriptions1}>Manage Subscriptions</Text>
          <Text style={styles.setSpendingLimitsPerCardO1}>
            Set Spending Limits per card or Wallet
          </Text>
          <Text style={styles.realtimeOverviewOfAllSpend1}>
            Realtime overview of all spending
          </Text>
          <Text style={styles.pDFAndCSVStatements1}>
            PDF and CSV Statements
          </Text>
          <Text style={styles.cardPaymentsForeignEXFee3}>
            Card Payments Foreign EX Fee: 2.48%
          </Text>
          <Text style={styles.invoicePaymentsForeignEXFe3}>
            Invoice Payments Foreign EX Fee: 2.40%
          </Text>
          <Text style={styles.discountsAndPerksOnEnviro1}>
            Discounts and Perks on Enviro Focuss Companies
          </Text>
          <Text style={styles.internationalPayments151}>
            <Text style={styles.internationalPayments3}>
              <Text
                style={styles.internationalPayments2}
              >{`International Payments:  `}</Text>
            </Text>
            <Text style={styles.transaction1}>
              <Text style={styles.transacti1}>£15/transacti</Text>on
            </Text>
          </Text>
          <Text style={styles.forexWalletGBPEUROUSD1}>
            <Text style={styles.forexWalletGBP1}>
              Forex Wallet (GBP/ EURO/USD)
            </Text>
          </Text>
          <Text style={styles.transactionFee1ForConver1}>
            Transaction Fee (1% for conversion)
          </Text>
          <Text style={styles.applePayAndGooglePayCom1}>
            <Text style={styles.applePayAndGooglePay1}>
              <Text
                style={styles.applePayAnd1}
              >{`Apple Pay and Google Pay `}</Text>
            </Text>
            <Text style={styles.comingSoon10}>
              <Text style={styles.comingSoon9}>(Coming Soon)</Text>
            </Text>
          </Text>
          <Text style={styles.memberPerks3}>
            <Text style={styles.memberPerks2}>Member Perks</Text>
          </Text>
          <Text style={styles.geniusMarketPlace3}>
            <Text style={styles.geniusMarketPlace2}>Genius Market Place</Text>
          </Text>
          <Image
            style={styles.iconAwesomeCheckCircle46}
            resizeMode="cover"
            source={require("../assets/icon-awesomecheckcircle4.png")}
          />
          <Image
            style={styles.iconAwesomeCheckCircle47}
            resizeMode="cover"
            source={require("../assets/icon-awesomecheckcircle4.png")}
          />
          <Image
            style={styles.iconAwesomeCheckCircle48}
            resizeMode="cover"
            source={require("../assets/icon-awesomecheckcircle4.png")}
          />
          <Image
            style={styles.iconAwesomeCheckCircle49}
            resizeMode="cover"
            source={require("../assets/icon-awesomecheckcircle4.png")}
          />
          <Image
            style={styles.iconAwesomeCheckCircle50}
            resizeMode="cover"
            source={require("../assets/icon-awesomecheckcircle4.png")}
          />
          <Image
            style={styles.iconAwesomeCheckCircle51}
            resizeMode="cover"
            source={require("../assets/icon-awesomecheckcircle4.png")}
          />
          <Image
            style={styles.iconAwesomeCheckCircle52}
            resizeMode="cover"
            source={require("../assets/icon-awesomecheckcircle4.png")}
          />
          <Image
            style={styles.iconAwesomeCheckCircle53}
            resizeMode="cover"
            source={require("../assets/icon-awesomecheckcircle4.png")}
          />
          <Image
            style={styles.iconAwesomeCheckCircle54}
            resizeMode="cover"
            source={require("../assets/icon-awesomecheckcircle4.png")}
          />
          <Image
            style={styles.iconAwesomeCheckCircle55}
            resizeMode="cover"
            source={require("../assets/icon-awesomecheckcircle4.png")}
          />
          <Image
            style={styles.iconAwesomeCheckCircle56}
            resizeMode="cover"
            source={require("../assets/icon-awesomecheckcircle4.png")}
          />
          <Image
            style={styles.iconAwesomeCheckCircle57}
            resizeMode="cover"
            source={require("../assets/icon-awesomecheckcircle4.png")}
          />
          <Image
            style={styles.iconAwesomeCheckCircle58}
            resizeMode="cover"
            source={require("../assets/icon-awesomecheckcircle4.png")}
          />
          <Image
            style={styles.iconAwesomeCheckCircle59}
            resizeMode="cover"
            source={require("../assets/icon-awesomecheckcircle4.png")}
          />
          <Image
            style={styles.iconAwesomeCheckCircle60}
            resizeMode="cover"
            source={require("../assets/icon-awesomecheckcircle4.png")}
          />
          <Image
            style={styles.iconAwesomeCheckCircle61}
            resizeMode="cover"
            source={require("../assets/icon-awesomecheckcircle4.png")}
          />
          <Image
            style={styles.iconAwesomeCheckCircle62}
            resizeMode="cover"
            source={require("../assets/icon-awesomecheckcircle4.png")}
          />
          <Image
            style={styles.iconAwesomeCheckCircle63}
            resizeMode="cover"
            source={require("../assets/icon-awesomecheckcircle4.png")}
          />
          <Image
            style={styles.iconAwesomeCheckCircle64}
            resizeMode="cover"
            source={require("../assets/icon-awesomecheckcircle4.png")}
          />
          <Image
            style={styles.iconAwesomeCheckCircle65}
            resizeMode="cover"
            source={require("../assets/icon-awesomecheckcircle4.png")}
          />
          <Image
            style={styles.iconAwesomeCheckCircle66}
            resizeMode="cover"
            source={require("../assets/icon-awesomecheckcircle4.png")}
          />
          <Image
            style={styles.iconAwesomeCheckCircle67}
            resizeMode="cover"
            source={require("../assets/icon-awesomecheckcircle4.png")}
          />
        </View>
        <View style={styles.groupView46}>
          <View style={styles.rectangleView11} />
          <View style={styles.groupView35}>
            <Text style={styles.allEssentialFeatures1}>
              All Essential Features
            </Text>
          </View>
          <View style={styles.groupView36}>
            <Text style={styles.paymentsDomesticTransfer2}>
              <Text style={styles.paymentsDomestic5}>
                <Text style={styles.paymentsDomestic4}>
                  Payments (domestic):
                </Text>
              </Text>
              <Text style={styles.transferInoutNoFeeUpto21}>
                <Text style={styles.transferInoutNo2}>
                  Transfer in/out: No Fee Upto 20 Transactions
                </Text>
              </Text>
              <Text style={styles.text17} />
            </Text>
          </View>
          <View style={styles.groupView37}>
            <Text style={styles.cardsAddedExpenseCardsWit2}>
              <Text style={styles.cards9}>
                <Text style={styles.cards8}>Cards:</Text>
              </Text>
              <Text style={styles.addedExpenseCardsWithSpend4}>
                <Text style={styles.addedExpenseCards4}>
                  Added expense cards with spending limits:
                </Text>
              </Text>
              <Text style={styles.freeExpenseCard1}>
                <Text style={styles.text18}>{`1 `}</Text>Free Expense Card
              </Text>
            </Text>
          </View>
          <View style={styles.groupView38}>
            <Text style={styles.accountingServicesInvoices1}>
              <Text style={styles.accountingServices7}>
                <Text style={styles.accountingServices6}>
                  Accounting Services:
                </Text>
              </Text>
              <Text style={styles.invoices3}>
                <Text style={styles.invoices2}>Invoices</Text>
              </Text>
              <Text style={styles.digitalReceipts3}>
                <Text style={styles.digitalReceipts2}>Digital Receipts</Text>
              </Text>
              <Text style={styles.bankFeed7}>
                <Text style={styles.bankFeed6}>Bank Feed</Text>
              </Text>
              <Text style={styles.trackExpenses3}>
                <Text style={styles.trackExpenses2}>Track Expenses</Text>
              </Text>
              <Text style={styles.text19} />
            </Text>
          </View>
          <View style={styles.groupView39}>
            <Text style={styles.slackIntegrationComingSoo1}>
              <Text style={styles.slackIntegration3}>
                <Text style={styles.slackIntegration2}>Slack Integration</Text>
              </Text>
              <Text style={styles.comingSoon12}>
                <Text style={styles.comingSoon11}> (Coming Soon)</Text>
              </Text>
              <Text style={styles.text20} />
            </Text>
          </View>
          <View style={styles.groupView40}>
            <Text style={styles.customerServicesOnlinePhon1}>
              <Text style={styles.customerServices5}>
                <Text style={styles.customerServices4}>Customer Services:</Text>
              </Text>
              <Text style={styles.onlinePhone3}>
                <Text style={styles.onlinePhone2}>Online/Phone</Text>
              </Text>
              <Text style={styles.text21} />
            </Text>
          </View>
          <View style={styles.groupView41}>
            <Text style={styles.cashbackOnSavingsComingS1}>
              <Text style={styles.cashbackOnSavings3}>
                <Text style={styles.cashbackOnSavings2}>
                  Cashback on savings
                </Text>
              </Text>
              <Text style={styles.comingSoon13}>
                <Text style={styles.comingSoo1}> (Coming Soo</Text>n)
              </Text>
            </Text>
          </View>
          <View style={styles.groupView42}>
            <Text style={styles.categoriseAndTagSpending1}>
              Categorise and Tag Spending
            </Text>
          </View>
          <View style={styles.groupView43}>
            <Text style={styles.cardPaymentsForeignEXFee4}>
              Card Payments Foreign EX Fee: 1.98%
            </Text>
          </View>
          <View style={styles.groupView44}>
            <Text style={styles.invoicePaymentsForeignEXFe4}>
              Invoice Payments Foreign EX Fee: 2.40%
            </Text>
          </View>
          <View style={styles.groupView45}>
            <Text style={styles.plant5TreesAMonth1}>Plant 5 trees a month</Text>
          </View>
        </View>
        <View style={styles.groupView48}>
          <View style={styles.rectangleView12} />
          <Text style={styles.allAdvanceFeatures1}>All Advance Features</Text>
          <Text style={styles.paymentsDomesticTransfer3}>
            <Text style={styles.paymentsDomestic7}>
              <Text style={styles.paymentsDomestic6}>Payments (domestic):</Text>
            </Text>
            <Text style={styles.transferInoutNoFeeUpto51}>
              <Text style={styles.transferInoutNo3}>
                Transfer in/out: No Fee Upto 50 Transactions
              </Text>
            </Text>
            <Text style={styles.text22} />
          </Text>
          <Text style={styles.cardsAddedExpenseCardsWit3}>
            <Text style={styles.cards11}>
              <Text style={styles.cards10}>Cards:</Text>
            </Text>
            <Text style={styles.addedExpenseCardsWithSpend5}>
              <Text
                style={styles.addedExpenseCards5}
              >{`Added expense cards with spending limits: 2 `}</Text>
              Free Expense Card
            </Text>
          </Text>
          <Text style={styles.businessToolKitFreeLogoD1}>
            <Text style={styles.businessToolKit3}>
              <Text style={styles.businessToolKit2}>Business Tool Kit:</Text>
            </Text>
            <Text style={styles.freeLogoDesign3}>
              <Text style={styles.freeLogoDesign2}>Free Logo Design</Text>
            </Text>
            <Text style={styles.tradeMarkRegistration3}>
              <Text style={styles.tradeMarkRegistration2}>
                Trade Mark Registration
              </Text>
            </Text>
            <Text style={styles.desktopSupport3}>
              <Text style={styles.desktopSupport2}>Desktop Support</Text>
            </Text>
            <Text style={styles.text23} />
          </Text>
          <Text style={styles.customerServicesDedicatedA1}>
            <Text style={styles.customerServices7}>
              <Text style={styles.customerServices6}>Customer Services:</Text>
            </Text>
            <Text style={styles.dedicatedAccountManager3}>
              <Text style={styles.dedicatedAccountManager2}>
                Dedicated Account Manager
              </Text>
            </Text>
            <Text style={styles.text24} />
          </Text>
          <Text style={styles.geniusTelecoms10GBSimOnly1}>
            Genius Telecoms 10GB Sim Only
          </Text>
          <Text style={styles.plant10TreesAMonth1}>Plant 10 trees a month</Text>
          <Text style={styles.simOnlyDataPlanWith4GBDat1}>
            Sim Only DataPlan with 4GB Data
          </Text>
          <Text style={styles.openAPIAccess1}>Open API Access</Text>
          <Text style={styles.multipleUserControl1}>Multiple User Control</Text>
          <Text style={styles.automaticPayroll1}>Automatic Payroll</Text>
          <Text style={styles.cardPaymentsForeignEXFee5}>
            Card Payments Foreign EX Fee: 1.98%
          </Text>
          <View style={styles.groupView47}>
            <Text style={styles.invoicePaymentsForeignEXFe5}>
              Invoice Payments Foreign EX Fee: 2.40%
            </Text>
          </View>
        </View>
        <View style={styles.card13}>
          <View style={styles.groupView52}>
            <View style={styles.groupView51}>
              <Image
                style={styles.path33118Icon3}
                resizeMode="cover"
                source={require("../assets/path-331185.png")}
              />
              <View style={styles.groupView50}>
                <Image
                  style={styles.groupIcon18}
                  resizeMode="cover"
                  source={require("../assets/group-317595.png")}
                />
                <Image
                  style={styles.groupIcon19}
                  resizeMode="cover"
                  source={require("../assets/group-317605.png")}
                />
                <View style={styles.rectangleView13} />
                <Image
                  style={styles.rectangleIcon3}
                  resizeMode="cover"
                  source={require("../assets/rectangle-262042.png")}
                />
                <View style={styles.groupView49}>
                  <Text style={styles.b3}>B</Text>
                </View>
                <Text style={styles.bUSINESS3}>BUSINESS</Text>
              </View>
            </View>
            <Image
              style={styles.groupIcon20}
              resizeMode="cover"
              source={require("../assets/group-317645.png")}
            />
            <Image
              style={styles.groupIcon21}
              resizeMode="cover"
              source={require("../assets/group-317665.png")}
            />
            <Image
              style={styles.groupIcon22}
              resizeMode="cover"
              source={require("../assets/group-317675.png")}
            />
          </View>
        </View>
        <View style={styles.card14}>
          <View style={styles.groupView56}>
            <View style={styles.groupView55}>
              <Image
                style={styles.path33118Icon4}
                resizeMode="cover"
                source={require("../assets/path-331186.png")}
              />
              <View style={styles.groupView54}>
                <Image
                  style={styles.groupIcon23}
                  resizeMode="cover"
                  source={require("../assets/group-317595.png")}
                />
                <Image
                  style={styles.groupIcon24}
                  resizeMode="cover"
                  source={require("../assets/group-317609.png")}
                />
                <View style={styles.rectangleView14} />
                <Image
                  style={styles.rectangleIcon4}
                  resizeMode="cover"
                  source={require("../assets/rectangle-262042.png")}
                />
                <View style={styles.groupView53}>
                  <Text style={styles.b4}>B</Text>
                </View>
                <Text style={styles.bUSINESS4}>BUSINESS</Text>
              </View>
            </View>
            <Image
              style={styles.groupIcon25}
              resizeMode="cover"
              source={require("../assets/group-317645.png")}
            />
            <Image
              style={styles.groupIcon26}
              resizeMode="cover"
              source={require("../assets/group-317665.png")}
            />
            <Image
              style={styles.groupIcon27}
              resizeMode="cover"
              source={require("../assets/group-317675.png")}
            />
          </View>
        </View>
        <View style={styles.card15}>
          <View style={styles.groupView60}>
            <View style={styles.groupView59}>
              <Image
                style={styles.path33118Icon5}
                resizeMode="cover"
                source={require("../assets/path-331187.png")}
              />
              <View style={styles.groupView58}>
                <Image
                  style={styles.groupIcon28}
                  resizeMode="cover"
                  source={require("../assets/group-317595.png")}
                />
                <Image
                  style={styles.groupIcon29}
                  resizeMode="cover"
                  source={require("../assets/group-317609.png")}
                />
                <View style={styles.rectangleView15} />
                <Image
                  style={styles.rectangleIcon5}
                  resizeMode="cover"
                  source={require("../assets/rectangle-262042.png")}
                />
                <View style={styles.groupView57}>
                  <Text style={styles.b5}>B</Text>
                </View>
                <Text style={styles.bUSINESS5}>BUSINESS</Text>
              </View>
            </View>
            <Image
              style={styles.groupIcon30}
              resizeMode="cover"
              source={require("../assets/group-317645.png")}
            />
            <Image
              style={styles.groupIcon31}
              resizeMode="cover"
              source={require("../assets/group-317665.png")}
            />
            <Image
              style={styles.groupIcon32}
              resizeMode="cover"
              source={require("../assets/group-317675.png")}
            />
          </View>
        </View>
        <Image
          style={styles.iconAwesomeCheckCircle68}
          resizeMode="cover"
          source={require("../assets/icon-awesomecheckcircle4.png")}
        />
        <Image
          style={styles.iconAwesomeCheckCircle69}
          resizeMode="cover"
          source={require("../assets/icon-awesomecheckcircle4.png")}
        />
        <Image
          style={styles.iconAwesomeCheckCircle70}
          resizeMode="cover"
          source={require("../assets/icon-awesomecheckcircle4.png")}
        />
        <Image
          style={styles.iconAwesomeCheckCircle71}
          resizeMode="cover"
          source={require("../assets/icon-awesomecheckcircle4.png")}
        />
        <Image
          style={styles.iconAwesomeCheckCircle72}
          resizeMode="cover"
          source={require("../assets/icon-awesomecheckcircle4.png")}
        />
        <Image
          style={styles.iconAwesomeCheckCircle73}
          resizeMode="cover"
          source={require("../assets/icon-awesomecheckcircle4.png")}
        />
        <Image
          style={styles.iconAwesomeCheckCircle74}
          resizeMode="cover"
          source={require("../assets/icon-awesomecheckcircle4.png")}
        />
        <Image
          style={styles.iconAwesomeCheckCircle75}
          resizeMode="cover"
          source={require("../assets/icon-awesomecheckcircle4.png")}
        />
        <Image
          style={styles.iconAwesomeCheckCircle76}
          resizeMode="cover"
          source={require("../assets/icon-awesomecheckcircle4.png")}
        />
        <Image
          style={styles.iconAwesomeCheckCircle77}
          resizeMode="cover"
          source={require("../assets/icon-awesomecheckcircle4.png")}
        />
        <Image
          style={styles.iconAwesomeCheckCircle78}
          resizeMode="cover"
          source={require("../assets/icon-awesomecheckcircle4.png")}
        />
        <Image
          style={styles.iconAwesomeCheckCircle79}
          resizeMode="cover"
          source={require("../assets/icon-awesomecheckcircle4.png")}
        />
        <Image
          style={styles.iconAwesomeCheckCircle80}
          resizeMode="cover"
          source={require("../assets/icon-awesomecheckcircle4.png")}
        />
        <Image
          style={styles.iconAwesomeCheckCircle81}
          resizeMode="cover"
          source={require("../assets/icon-awesomecheckcircle4.png")}
        />
        <Image
          style={styles.iconAwesomeCheckCircle82}
          resizeMode="cover"
          source={require("../assets/icon-awesomecheckcircle4.png")}
        />
        <Image
          style={styles.iconAwesomeCheckCircle83}
          resizeMode="cover"
          source={require("../assets/icon-awesomecheckcircle4.png")}
        />
        <Image
          style={styles.iconAwesomeCheckCircle84}
          resizeMode="cover"
          source={require("../assets/icon-awesomecheckcircle4.png")}
        />
        <Image
          style={styles.iconAwesomeCheckCircle85}
          resizeMode="cover"
          source={require("../assets/icon-awesomecheckcircle4.png")}
        />
        <Image
          style={styles.iconAwesomeCheckCircle86}
          resizeMode="cover"
          source={require("../assets/icon-awesomecheckcircle4.png")}
        />
        <Image
          style={styles.iconAwesomeCheckCircle87}
          resizeMode="cover"
          source={require("../assets/icon-awesomecheckcircle4.png")}
        />
        <Image
          style={styles.iconAwesomeCheckCircle88}
          resizeMode="cover"
          source={require("../assets/icon-awesomecheckcircle4.png")}
        />
        <Image
          style={styles.iconAwesomeCheckCircle89}
          resizeMode="cover"
          source={require("../assets/icon-awesomecheckcircle4.png")}
        />
        <Image
          style={styles.iconAwesomeCheckCircle90}
          resizeMode="cover"
          source={require("../assets/icon-awesomecheckcircle4.png")}
        />
        <Image
          style={styles.iconAwesomeCheckCircle91}
          resizeMode="cover"
          source={require("../assets/icon-awesomecheckcircle4.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.groupPressable, styles.mt_2739]}
        onPress={() => navigation.navigate("Great70")}
      >
        <Image
          style={styles.iconFeatherArrowLeft}
          resizeMode="cover"
          source={require("../assets/icon-featherarrowleft.png")}
        />
      </Pressable>
      <Text style={[styles.hello15, styles.mt10, styles.ml27]}>
        Choose Cards
      </Text>
      <View style={[styles.lineView, styles.mt15]} />
      <Pressable
        style={[styles.groupPressable1, styles.mt_1344, styles.ml25]}
        onPress={() => navigation.navigate("ChooseCurrency")}
      >
        <View style={styles.component20886}>
          <View style={styles.groupView61}>
            <View style={styles.rectangleView16} />
            <View style={styles.maskGroup236} />
          </View>
        </View>
        <Text style={styles.hello16}>Continue</Text>
      </Pressable>
      <View style={[styles.homeIndicator, styles.mt36, styles.ml121]} />
      <Pressable
        style={[styles.component2352, styles.mt39, styles.ml29]}
        onPress={() => navigation.navigate("ChooseCardsElite")}
      >
        <Text style={styles.hello17}>Standard</Text>
        <Pressable
          style={styles.hello18}
          onPress={() => navigation.navigate("ChooseCardsPremium")}
        >
          <Text style={styles.premium}>Premium</Text>
        </Pressable>
        <Text style={styles.hello19}>Elite</Text>
      </Pressable>
      <View style={[styles.statusBarBlack, styles.mt881]}>
        <View style={styles.rectangle} />
        <View style={styles.statusBar}>
          <View style={styles.time}>
            <Text style={styles.text25}>9:41</Text>
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
            <View style={styles.rectangleView17} />
            <View style={styles.rectangleView18} />
            <View style={styles.rectangleView19} />
            <View style={styles.rectangleView20} />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ml_1956: {
    marginLeft: -1956,
  },
  mt30: {
    marginTop: 30,
  },
  ml25: {
    marginLeft: 25,
  },
  mt_1804: {
    marginTop: -1804,
  },
  mt_2739: {
    marginTop: -2739,
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
  mt_1344: {
    marginTop: -1344,
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
  mt881: {
    marginTop: 881,
  },
  rectangleView: {
    position: "absolute",
    marginTop: -302.5,
    top: "50%",
    right: 0,
    left: 0,
    borderRadius: 21,
    backgroundColor: "#fff",
    height: 639,
  },
  hello: {
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
  text: {
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
  iconAwesomeExchangeAlt: {
    position: "absolute",
    marginTop: -177.08,
    top: "50%",
    left: 2,
    width: 15,
    height: 12,
  },
  iconAwesomeGlobe: {
    position: "absolute",
    top: 81,
    left: 1,
    width: 15,
    height: 15,
  },
  groupIcon: {
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
    marginTop: 139.22,
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
  groupView: {
    position: "absolute",
    top: 54,
    right: 22,
    bottom: 19,
    left: 19,
  },
  groupView1: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: 326,
    height: 673,
  },
  rectangleView1: {
    position: "absolute",
    marginTop: -302.5,
    top: "50%",
    right: 0,
    left: 0,
    borderRadius: 21,
    backgroundColor: "#fff",
    height: 639,
  },
  hello1: {
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
  text1: {
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
  iconAwesomeExchangeAlt1: {
    position: "absolute",
    marginTop: -177.08,
    top: "50%",
    left: 2,
    width: 15,
    height: 12,
  },
  iconAwesomeGlobe1: {
    position: "absolute",
    top: 81,
    left: 1,
    width: 15,
    height: 15,
  },
  groupIcon1: {
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
    marginTop: 139.22,
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
  groupView2: {
    position: "absolute",
    top: 54,
    right: 22,
    bottom: 19,
    left: 19,
  },
  groupView3: {
    position: "absolute",
    marginLeft: -163,
    top: 0,
    left: "50%",
    width: 326,
    height: 673,
  },
  rectangleView2: {
    position: "absolute",
    marginTop: -302.5,
    top: "50%",
    right: 0,
    left: 0,
    borderRadius: 21,
    backgroundColor: "#fff",
    height: 639,
  },
  hello2: {
    position: "absolute",
    marginTop: -336.5,
    top: "50%",
    left: 0,
    fontSize: 16,
    fontFamily: "Helvetica",
    color: "#00003d",
    textAlign: "left",
  },
  rewards4: {
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#00003d",
  },
  rewards5: {
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
  freePaymentsTo2: {
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#00003d",
  },
  freePaymentsToCarbonyteAcc2: {
    margin: 0,
  },
  blankLine54: {
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#00003d",
  },
  blankLine55: {
    margin: 0,
  },
  iBANsForGlobal2: {
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#00003d",
  },
  iBANsForGlobalTransfers2: {
    margin: 0,
  },
  blankLine56: {
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#00003d",
  },
  blankLine57: {
    margin: 0,
  },
  localAccountsIn2: {
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#00003d",
  },
  localAccountsInGBPAndEUR2: {
    margin: 0,
  },
  blankLine58: {
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#00003d",
  },
  blankLine59: {
    margin: 0,
  },
  acceptPaymentsOn2: {
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#00003d",
  },
  acceptPaymentsOnYourWebsit2: {
    margin: 0,
  },
  blankLine60: {
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#00003d",
  },
  blankLine61: {
    margin: 0,
  },
  paymentRequestsWith2: {
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#00003d",
  },
  paymentRequestsWithLinksAn2: {
    margin: 0,
  },
  blankLine62: {
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#00003d",
  },
  blankLine63: {
    margin: 0,
  },
  manageRecurringPayments4: {
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#00003d",
  },
  manageRecurringPayments5: {
    margin: 0,
  },
  blankLine64: {
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#00003d",
  },
  blankLine65: {
    margin: 0,
  },
  unlimitedTeamMembers4: {
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#00003d",
  },
  unlimitedTeamMembers5: {
    margin: 0,
  },
  blankLine66: {
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#00003d",
  },
  blankLine67: {
    margin: 0,
  },
  teamMemberPermissions4: {
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#00003d",
  },
  teamMemberPermissions5: {
    margin: 0,
  },
  blankLine68: {
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#00003d",
  },
  blankLine69: {
    margin: 0,
  },
  expensesManagement4: {
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#00003d",
  },
  expensesManagement5: {
    margin: 0,
  },
  addMembersFor4: {
    fontFamily: "Helvetica",
    color: "#999",
  },
  addMembersFor5PerMonth4: {
    margin: 0,
  },
  blankLine70: {
    fontFamily: "Helvetica",
    color: "#999",
  },
  blankLine71: {
    margin: 0,
  },
  automatedPayroll4: {
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#00003d",
  },
  automatedPayroll5: {
    margin: 0,
  },
  addMembersFor5: {
    fontFamily: "Helvetica",
    color: "#999",
  },
  addMembersFor5PerMonth5: {
    margin: 0,
  },
  blankLine72: {
    fontFamily: "Helvetica",
    color: "#999",
  },
  blankLine73: {
    margin: 0,
  },
  createAndTrack2: {
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#00003d",
  },
  createAndTrackYourInvoices2: {
    margin: 0,
  },
  blankLine74: {
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#00003d",
  },
  blankLine75: {
    margin: 0,
  },
  connectYourCompanys2: {
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#00003d",
  },
  connectYourCompanysApps2: {
    margin: 0,
  },
  blankLine76: {
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#00003d",
  },
  blankLine77: {
    margin: 0,
  },
  availableOnThe2: {
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#00003d",
  },
  availableOnTheWebOrViaTh2: {
    margin: 0,
  },
  text2: {
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#00003d",
  },
  rewardsFreePaymentsToCarb2: {
    position: "absolute",
    marginTop: -300.08,
    top: "50%",
    left: 29,
    fontSize: 14,
    lineHeight: 20,
    textAlign: "left",
    width: 257,
  },
  iconAwesomeGift2: {
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
  groupIcon2: {
    position: "absolute",
    marginTop: -258.08,
    marginLeft: -141,
    top: "50%",
    left: "50%",
    width: 13,
    height: 14,
  },
  marketplaceFacebookSeeklogoIcon2: {
    position: "absolute",
    marginTop: -138.42,
    top: "50%",
    left: 2,
    width: 13,
    height: 12,
  },
  iconAwesomeCoins2: {
    position: "absolute",
    marginTop: -97.9,
    top: "50%",
    left: 3,
    width: 14,
    height: 14,
  },
  subtraction12Icon2: {
    position: "absolute",
    marginTop: -40.36,
    top: "50%",
    left: 2,
    width: 13,
    height: 15,
  },
  union27Icon2: {
    position: "absolute",
    marginTop: -2.08,
    top: "50%",
    left: 0,
    width: 20,
    height: 14,
  },
  union28Icon2: {
    position: "absolute",
    marginTop: 37.92,
    top: "50%",
    left: 0,
    width: 20,
    height: 14,
  },
  iconSimpleReadthedocs2: {
    position: "absolute",
    marginTop: 77.92,
    top: "50%",
    left: 3,
    width: 13,
    height: 17,
  },
  iconMaterialAccountBalance2: {
    position: "absolute",
    marginTop: 141.05,
    top: "50%",
    left: 1,
    width: 14,
    height: 13,
  },
  iconMaterialUndo2: {
    position: "absolute",
    marginTop: 139.22,
    top: "50%",
    left: 15,
    width: 9,
    height: 17,
  },
  iconOpenDocument2: {
    position: "absolute",
    bottom: 85,
    left: 2,
    width: 15,
    height: 17,
  },
  iconIonicMdApps2: {
    position: "absolute",
    bottom: 42,
    left: 1,
    width: 16,
    height: 16,
  },
  iconAwesomeMobileAlt2: {
    position: "absolute",
    bottom: 0,
    left: 2,
    width: 12,
    height: 19,
  },
  groupView4: {
    position: "absolute",
    top: 54,
    right: 22,
    bottom: 19,
    left: 19,
  },
  groupView5: {
    position: "absolute",
    top: 0,
    right: 0,
    width: 326,
    height: 673,
  },
  groupView6: {
    position: "relative",
    width: 1072,
    height: 793,
  },
  hello3: {
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
  hello4: {
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
  hello5: {
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
  hello6: {
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
  hello7: {
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
  hello8: {
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
  rectangleView3: {
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
  text3: {
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
  text4: {
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
  text5: {
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
  groupView7: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: 326,
    height: 1393,
  },
  rectangleView4: {
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
  groupView8: {
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
  text6: {
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
  groupView9: {
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
  text7: {
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
  groupView10: {
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
  text8: {
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
  groupView11: {
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
  text9: {
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
  groupView12: {
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
  text10: {
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
  groupView13: {
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
  groupView14: {
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
  groupView15: {
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
  groupView16: {
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
  groupView17: {
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
  groupView18: {
    position: "absolute",
    marginTop: 113,
    top: "50%",
    right: 9,
    left: 48,
    height: 16,
  },
  groupView19: {
    position: "absolute",
    marginTop: -482.93,
    marginLeft: -161.5,
    top: "50%",
    left: "50%",
    width: 326,
    height: 684,
  },
  rectangleView5: {
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
  text11: {
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
  text12: {
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
  text13: {
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
  groupView20: {
    position: "absolute",
    right: 23,
    bottom: 32,
    left: 41,
    height: 36,
  },
  groupView21: {
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
  groupIcon3: {
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
  groupIcon4: {
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
  groupView22: {
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
  groupView23: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  groupView24: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  groupIcon5: {
    position: "absolute",
    top: 17,
    right: 15,
    width: 28,
    height: 30,
  },
  groupIcon6: {
    position: "absolute",
    right: 16,
    bottom: 21,
    width: 48,
    height: 41,
  },
  groupIcon7: {
    position: "absolute",
    marginLeft: 30.69,
    top: 21,
    left: "50%",
    width: 17,
    height: 22,
  },
  groupView25: {
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
  groupIcon8: {
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
  groupIcon9: {
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
  rectangleView7: {
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
  groupView26: {
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
  groupView27: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  groupView28: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  groupIcon10: {
    position: "absolute",
    top: 17,
    right: 15,
    width: 28,
    height: 30,
  },
  groupIcon11: {
    position: "absolute",
    right: 16,
    bottom: 21,
    width: 48,
    height: 41,
  },
  groupIcon12: {
    position: "absolute",
    marginLeft: 30.69,
    top: 21,
    left: "50%",
    width: 17,
    height: 22,
  },
  groupView29: {
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
  groupIcon13: {
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
  groupIcon14: {
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
  rectangleView8: {
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
  groupView30: {
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
  groupView31: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  groupView32: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  groupIcon15: {
    position: "absolute",
    top: 17,
    right: 15,
    width: 28,
    height: 30,
  },
  groupIcon16: {
    position: "absolute",
    right: 16,
    bottom: 21,
    width: 48,
    height: 41,
  },
  groupIcon17: {
    position: "absolute",
    marginLeft: 30.69,
    top: 21,
    left: "50%",
    width: 17,
    height: 22,
  },
  groupView33: {
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
  component2373: {
    position: "relative",
    width: 1075,
    height: 1804,
  },
  rectangleView9: {
    position: "relative",
    backgroundColor: "#f6f5f8",
    width: 375,
    height: 2741,
  },
  hello9: {
    position: "absolute",
    marginTop: -579.52,
    top: "50%",
    left: 95,
    fontSize: 24,
    lineHeight: 20,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#0101fd",
    textAlign: "left",
  },
  hello10: {
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
  hello11: {
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
  hello12: {
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
  hello13: {
    position: "absolute",
    marginTop: -579.52,
    top: "50%",
    left: 478,
    fontSize: 24,
    lineHeight: 20,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#0101fd",
    textAlign: "left",
  },
  hello14: {
    position: "absolute",
    marginTop: -579.52,
    top: "50%",
    left: 877,
    fontSize: 24,
    lineHeight: 20,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#0101fd",
    textAlign: "left",
  },
  rectangleView10: {
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
  accountFeatures2: {
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#00003d",
  },
  accountFeatures3: {
    margin: 0,
  },
  mobileSetUp1: {
    fontFamily: "Helvetica",
    color: "#999",
  },
  mobileSetUpAndSwitching1: {
    margin: 0,
  },
  fSCSProtectedBank1: {
    fontFamily: "Helvetica",
    color: "#999",
  },
  fSCSProtectedBankAccounts1: {
    margin: 0,
  },
  text14: {
    fontFamily: "Helvetica",
    color: "#999",
  },
  iBANSortCode1: {
    margin: 0,
  },
  userControl1: {
    margin: 0,
  },
  abilityToAdd1: {
    margin: 0,
  },
  samePhoneNumber1: {
    margin: 0,
  },
  advancedSecurity1: {
    margin: 0,
  },
  accountFeaturesMobileSet1: {
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
  cards6: {
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#00003d",
  },
  cards7: {
    margin: 0,
  },
  debitAndVirtual1: {
    fontFamily: "Helvetica",
    color: "#999",
  },
  debitAndVirtualCard1: {
    margin: 0,
  },
  addedExpenseCards3: {
    fontFamily: "Helvetica",
    color: "#999",
  },
  addedExpenseCardsWithSpend3: {
    margin: 0,
  },
  limits5Per1: {
    fontFamily: "Helvetica",
    color: "#999",
  },
  limits5PerCard1: {
    margin: 0,
  },
  text15: {
    fontFamily: "Helvetica",
    color: "#999",
  },
  cardsDebitAndVirtualCar1: {
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
  appSecurity2: {
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#00003d",
  },
  appSecurity3: {
    margin: 0,
  },
  passwordProtection2: {
    fontFamily: "Helvetica",
    color: "#999",
  },
  passwordProtection3: {
    margin: 0,
  },
  faceID2: {
    fontFamily: "Helvetica",
    color: "#999",
  },
  faceID3: {
    margin: 0,
  },
  fingerPrint2: {
    fontFamily: "Helvetica",
    color: "#999",
  },
  fingerPrint3: {
    margin: 0,
  },
  freezeUnfreezeFromAp1: {
    fontFamily: "Helvetica",
    color: "#999",
  },
  freezeUnfreezeFromApp1: {
    margin: 0,
  },
  turnOffATM1: {
    margin: 0,
  },
  contactlessPayments1: {
    margin: 0,
  },
  appSecurityPasswordProte1: {
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
  payments2: {
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#00003d",
  },
  payments3: {
    margin: 0,
  },
  transferInout015transac2: {
    fontFamily: "Helvetica",
    color: "#999",
  },
  transferInout015transac3: {
    margin: 0,
  },
  chapsBACSSEPAPayments2: {
    fontFamily: "Helvetica",
    color: "#999",
  },
  chapsBACSSEPAPayments3: {
    margin: 0,
  },
  mayBeA1: {
    fontFamily: "Helvetica",
    color: "#999",
  },
  mayBeAFeeSoFactorInPric1: {
    margin: 0,
  },
  scheduledPay1: {
    fontFamily: "Helvetica",
    color: "#999",
  },
  scheduledPayments1: {
    margin: 0,
  },
  paymentNotifications1: {
    margin: 0,
  },
  paymentsTransferInout01: {
    position: "absolute",
    bottom: 921,
    left: 54,
    fontSize: 14,
    lineHeight: 20,
    whiteSpace: "pre-wrap",
    textAlign: "left",
    width: 263,
  },
  accountingServices4: {
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#00003d",
  },
  accountingServices5: {
    margin: 0,
  },
  bankFeed4: {
    fontFamily: "Helvetica",
    color: "#999",
  },
  bankFeed5: {
    margin: 0,
  },
  text16: {
    fontFamily: "Helvetica",
    color: "#999",
  },
  accountingServicesBankFeed1: {
    position: "absolute",
    marginTop: -59.5,
    top: "50%",
    left: 53,
    fontSize: 14,
    lineHeight: 20,
    textAlign: "left",
    width: 267,
  },
  sageAndXero1: {
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#00003d",
  },
  sageAndXeroIntegration1: {
    margin: 0,
  },
  comingSoon7: {
    fontFamily: "Helvetica",
    color: "#999",
  },
  comingSoon8: {
    margin: 0,
  },
  sageAndXeroIntegrationCo1: {
    position: "absolute",
    marginTop: -4.5,
    top: "50%",
    left: 53,
    fontSize: 14,
    lineHeight: 20,
    textAlign: "left",
    width: 267,
  },
  customerService2: {
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#00003d",
  },
  online2: {
    fontFamily: "Helvetica",
    color: "#999",
  },
  customerServiceOnline4: {
    margin: 0,
  },
  customerServiceOnline5: {
    position: "absolute",
    marginTop: 257.5,
    top: "50%",
    left: 54,
    fontSize: 14,
    lineHeight: 20,
    textAlign: "left",
    width: 267,
  },
  customerService3: {
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#00003d",
  },
  online3: {
    fontFamily: "Helvetica",
    color: "#999",
  },
  customerServiceOnline6: {
    margin: 0,
  },
  customerServiceOnline7: {
    position: "absolute",
    marginTop: 257.5,
    top: "50%",
    left: 54,
    fontSize: 14,
    lineHeight: 20,
    textAlign: "left",
    width: 267,
  },
  carbonCalculator3: {
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#00003d",
  },
  carbonCalculator4: {
    margin: 0,
  },
  carbonCalculator5: {
    position: "absolute",
    marginTop: 293.5,
    top: "50%",
    left: 54,
    fontSize: 14,
    lineHeight: 20,
    textAlign: "left",
    width: 267,
  },
  carbonOffset1: {
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
  accessToGeniusMarketPlace1: {
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
  manageSubscriptions1: {
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
  setSpendingLimitsPerCardO1: {
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
  realtimeOverviewOfAllSpend1: {
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
  pDFAndCSVStatements1: {
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
  cardPaymentsForeignEXFee3: {
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
  invoicePaymentsForeignEXFe3: {
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
  discountsAndPerksOnEnviro1: {
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
  internationalPayments2: {
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#00003d",
  },
  internationalPayments3: {
    margin: 0,
  },
  transacti1: {
    fontFamily: "Helvetica",
    color: "#999",
  },
  transaction1: {
    margin: 0,
  },
  internationalPayments151: {
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
  forexWalletGBP1: {
    margin: 0,
  },
  forexWalletGBPEUROUSD1: {
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
  transactionFee1ForConver1: {
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
  applePayAnd1: {
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#00003d",
  },
  applePayAndGooglePay1: {
    margin: 0,
  },
  comingSoon9: {
    fontFamily: "Helvetica",
    color: "#999",
  },
  comingSoon10: {
    margin: 0,
  },
  applePayAndGooglePayCom1: {
    position: "absolute",
    marginTop: -112.5,
    top: "50%",
    left: 54,
    fontSize: 14,
    lineHeight: 20,
    textAlign: "left",
    width: 267,
  },
  memberPerks2: {
    margin: 0,
  },
  memberPerks3: {
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
  geniusMarketPlace2: {
    margin: 0,
  },
  geniusMarketPlace3: {
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
  iconAwesomeCheckCircle46: {
    position: "absolute",
    top: 30,
    left: 22,
    width: 15,
    height: 15,
  },
  iconAwesomeCheckCircle47: {
    position: "absolute",
    top: 201,
    left: 22,
    width: 15,
    height: 15,
  },
  iconAwesomeCheckCircle48: {
    position: "absolute",
    top: 356,
    left: 22,
    width: 15,
    height: 15,
  },
  iconAwesomeCheckCircle49: {
    position: "absolute",
    top: 490,
    left: 22,
    width: 15,
    height: 15,
  },
  iconAwesomeCheckCircle50: {
    position: "absolute",
    top: 634,
    left: 22,
    width: 15,
    height: 15,
  },
  iconAwesomeCheckCircle51: {
    position: "absolute",
    top: 693,
    left: 22,
    width: 15,
    height: 15,
  },
  iconAwesomeCheckCircle52: {
    position: "absolute",
    top: 747,
    left: 22,
    width: 15,
    height: 15,
  },
  iconAwesomeCheckCircle53: {
    position: "absolute",
    top: 788,
    left: 22,
    width: 15,
    height: 15,
  },
  iconAwesomeCheckCircle54: {
    position: "absolute",
    top: 828,
    left: 22,
    width: 15,
    height: 15,
  },
  iconAwesomeCheckCircle55: {
    position: "absolute",
    top: 879,
    left: 22,
    width: 15,
    height: 15,
  },
  iconAwesomeCheckCircle56: {
    position: "absolute",
    top: 919,
    left: 22,
    width: 15,
    height: 15,
  },
  iconAwesomeCheckCircle57: {
    position: "absolute",
    top: 954,
    left: 22,
    width: 15,
    height: 15,
  },
  iconAwesomeCheckCircle58: {
    position: "absolute",
    top: 989,
    left: 22,
    width: 15,
    height: 15,
  },
  iconAwesomeCheckCircle59: {
    position: "absolute",
    top: 1024,
    left: 22,
    width: 15,
    height: 15,
  },
  iconAwesomeCheckCircle60: {
    position: "absolute",
    top: 1054,
    left: 22,
    width: 15,
    height: 15,
  },
  iconAwesomeCheckCircle61: {
    position: "absolute",
    top: 1083,
    left: 22,
    width: 15,
    height: 15,
  },
  iconAwesomeCheckCircle62: {
    position: "absolute",
    top: 1113,
    left: 22,
    width: 15,
    height: 15,
  },
  iconAwesomeCheckCircle63: {
    position: "absolute",
    top: 1143,
    left: 22,
    width: 15,
    height: 15,
  },
  iconAwesomeCheckCircle64: {
    position: "absolute",
    top: 1178,
    left: 22,
    width: 15,
    height: 15,
  },
  iconAwesomeCheckCircle65: {
    position: "absolute",
    top: 1211,
    left: 22,
    width: 15,
    height: 15,
  },
  iconAwesomeCheckCircle66: {
    position: "absolute",
    top: 1261,
    left: 22,
    width: 15,
    height: 15,
  },
  iconAwesomeCheckCircle67: {
    position: "absolute",
    top: 1314,
    left: 22,
    width: 15,
    height: 15,
  },
  groupView34: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: 326,
    height: 1393,
  },
  rectangleView11: {
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
  allEssentialFeatures1: {
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
  groupView35: {
    position: "absolute",
    top: 20,
    right: 12,
    left: 48,
    height: 16,
  },
  paymentsDomestic4: {
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#00003d",
  },
  paymentsDomestic5: {
    margin: 0,
  },
  transferInoutNo2: {
    fontFamily: "Helvetica",
    color: "#999",
  },
  transferInoutNoFeeUpto21: {
    margin: 0,
  },
  text17: {
    fontFamily: "Helvetica",
    color: "#999",
  },
  paymentsDomesticTransfer2: {
    position: "absolute",
    marginTop: -28,
    top: "50%",
    left: 0,
    fontSize: 14,
    lineHeight: 20,
    textAlign: "left",
    width: 267,
  },
  groupView36: {
    position: "absolute",
    top: 76,
    right: 12,
    left: 48,
    height: 56,
  },
  cards8: {
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#00003d",
  },
  cards9: {
    margin: 0,
  },
  addedExpenseCards4: {
    fontFamily: "Helvetica",
    color: "#999",
  },
  addedExpenseCardsWithSpend4: {
    margin: 0,
  },
  text18: {
    fontFamily: "Helvetica",
    color: "#999",
  },
  freeExpenseCard1: {
    margin: 0,
  },
  cardsAddedExpenseCardsWit2: {
    position: "absolute",
    marginTop: -28,
    top: "50%",
    left: 0,
    fontSize: 14,
    lineHeight: 20,
    textAlign: "left",
    width: 270,
  },
  groupView37: {
    position: "absolute",
    marginTop: -190,
    top: "50%",
    right: 9,
    left: 48,
    height: 56,
  },
  accountingServices6: {
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#00003d",
  },
  accountingServices7: {
    margin: 0,
  },
  invoices2: {
    fontFamily: "Helvetica",
    color: "#999",
  },
  invoices3: {
    margin: 0,
  },
  digitalReceipts2: {
    fontFamily: "Helvetica",
    color: "#999",
  },
  digitalReceipts3: {
    margin: 0,
  },
  bankFeed6: {
    fontFamily: "Helvetica",
    color: "#999",
  },
  bankFeed7: {
    margin: 0,
  },
  trackExpenses2: {
    fontFamily: "Helvetica",
    color: "#999",
  },
  trackExpenses3: {
    margin: 0,
  },
  text19: {
    fontFamily: "Helvetica",
    color: "#999",
  },
  accountingServicesInvoices1: {
    position: "absolute",
    marginTop: -48,
    top: "50%",
    left: 0,
    fontSize: 14,
    lineHeight: 20,
    textAlign: "left",
    width: 270,
  },
  groupView38: {
    position: "absolute",
    marginTop: -115,
    top: "50%",
    right: 9,
    left: 48,
    height: 96,
  },
  slackIntegration2: {
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#00003d",
  },
  slackIntegration3: {
    margin: 0,
  },
  comingSoon11: {
    fontFamily: "Helvetica",
    color: "#999",
  },
  comingSoon12: {
    margin: 0,
  },
  text20: {
    fontFamily: "Helvetica",
    color: "#999",
  },
  slackIntegrationComingSoo1: {
    position: "absolute",
    marginTop: -18,
    top: "50%",
    left: 0,
    fontSize: 14,
    lineHeight: 20,
    textAlign: "left",
    width: 270,
  },
  groupView39: {
    position: "absolute",
    marginTop: 1,
    top: "50%",
    right: 9,
    left: 48,
    height: 36,
  },
  customerServices4: {
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#00003d",
  },
  customerServices5: {
    margin: 0,
  },
  onlinePhone2: {
    fontFamily: "Helvetica",
    color: "#999",
  },
  onlinePhone3: {
    margin: 0,
  },
  text21: {
    fontFamily: "Helvetica",
    color: "#999",
  },
  customerServicesOnlinePhon1: {
    position: "absolute",
    marginTop: -18,
    top: "50%",
    left: 0,
    fontSize: 14,
    lineHeight: 20,
    textAlign: "left",
    width: 270,
  },
  groupView40: {
    position: "absolute",
    marginTop: 57,
    top: "50%",
    right: 9,
    left: 48,
    height: 36,
  },
  cashbackOnSavings2: {
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#00003d",
  },
  cashbackOnSavings3: {
    margin: 0,
  },
  comingSoo1: {
    fontFamily: "Helvetica",
    color: "#999",
  },
  comingSoon13: {
    margin: 0,
  },
  cashbackOnSavingsComingS1: {
    position: "absolute",
    marginTop: -18,
    top: "50%",
    left: 0,
    fontSize: 14,
    lineHeight: 20,
    textAlign: "left",
    width: 270,
  },
  groupView41: {
    position: "absolute",
    marginTop: 149,
    top: "50%",
    right: 9,
    left: 48,
    height: 36,
  },
  categoriseAndTagSpending1: {
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
  groupView42: {
    position: "absolute",
    marginTop: 204,
    top: "50%",
    right: 9,
    left: 48,
    height: 16,
  },
  cardPaymentsForeignEXFee4: {
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
  groupView43: {
    position: "absolute",
    right: 9,
    bottom: 86,
    left: 48,
    height: 16,
  },
  invoicePaymentsForeignEXFe4: {
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
  groupView44: {
    position: "absolute",
    right: 9,
    bottom: 30,
    left: 48,
    height: 36,
  },
  plant5TreesAMonth1: {
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
  groupView45: {
    position: "absolute",
    marginTop: 113,
    top: "50%",
    right: 9,
    left: 48,
    height: 16,
  },
  groupView46: {
    position: "absolute",
    marginTop: -482.93,
    marginLeft: -161.5,
    top: "50%",
    left: "50%",
    width: 326,
    height: 684,
  },
  rectangleView12: {
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
  allAdvanceFeatures1: {
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
  paymentsDomestic6: {
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#00003d",
  },
  paymentsDomestic7: {
    margin: 0,
  },
  transferInoutNo3: {
    fontFamily: "Helvetica",
    color: "#999",
  },
  transferInoutNoFeeUpto51: {
    margin: 0,
  },
  text22: {
    fontFamily: "Helvetica",
    color: "#999",
  },
  paymentsDomesticTransfer3: {
    position: "absolute",
    marginTop: -286,
    top: "50%",
    left: 41,
    fontSize: 14,
    lineHeight: 20,
    textAlign: "left",
    width: 263,
  },
  cards10: {
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#00003d",
  },
  cards11: {
    margin: 0,
  },
  addedExpenseCards5: {
    fontFamily: "Helvetica",
    color: "#999",
  },
  addedExpenseCardsWithSpend5: {
    margin: 0,
  },
  cardsAddedExpenseCardsWit3: {
    position: "absolute",
    marginTop: -210,
    top: "50%",
    left: 41,
    fontSize: 14,
    lineHeight: 20,
    textAlign: "left",
    width: 263,
  },
  businessToolKit2: {
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#00003d",
  },
  businessToolKit3: {
    margin: 0,
  },
  freeLogoDesign2: {
    fontFamily: "Helvetica",
    color: "#999",
  },
  freeLogoDesign3: {
    margin: 0,
  },
  tradeMarkRegistration2: {
    fontFamily: "Helvetica",
    color: "#999",
  },
  tradeMarkRegistration3: {
    margin: 0,
  },
  desktopSupport2: {
    fontFamily: "Helvetica",
    color: "#999",
  },
  desktopSupport3: {
    margin: 0,
  },
  text23: {
    fontFamily: "Helvetica",
    color: "#999",
  },
  businessToolKitFreeLogoD1: {
    position: "absolute",
    marginTop: -133,
    top: "50%",
    left: 41,
    fontSize: 14,
    lineHeight: 20,
    textAlign: "left",
    width: 263,
  },
  customerServices6: {
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#00003d",
  },
  customerServices7: {
    margin: 0,
  },
  dedicatedAccountManager2: {
    fontFamily: "Helvetica",
    color: "#999",
  },
  dedicatedAccountManager3: {
    margin: 0,
  },
  text24: {
    fontFamily: "Helvetica",
    color: "#999",
  },
  customerServicesDedicatedA1: {
    position: "absolute",
    marginTop: 1,
    top: "50%",
    left: 41,
    fontSize: 14,
    lineHeight: 20,
    textAlign: "left",
    width: 263,
  },
  geniusTelecoms10GBSimOnly1: {
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
  plant10TreesAMonth1: {
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
  simOnlyDataPlanWith4GBDat1: {
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
  openAPIAccess1: {
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
  multipleUserControl1: {
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
  automaticPayroll1: {
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
  cardPaymentsForeignEXFee5: {
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
  invoicePaymentsForeignEXFe5: {
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
  groupView47: {
    position: "absolute",
    right: 23,
    bottom: 32,
    left: 41,
    height: 36,
  },
  groupView48: {
    position: "absolute",
    marginTop: -482.93,
    top: "50%",
    right: 0,
    width: 326,
    height: 684,
  },
  path33118Icon3: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  groupIcon18: {
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
  groupIcon19: {
    position: "absolute",
    height: "10.54%",
    width: "81.73%",
    top: "33.24%",
    right: "9.14%",
    bottom: "56.21%",
    left: "9.14%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  rectangleView13: {
    position: "absolute",
    height: "33.14%",
    width: "108.22%",
    top: "68.51%",
    right: "-3.68%",
    bottom: "-1.65%",
    left: "-4.55%",
    backgroundColor: "#1a1a1a",
  },
  rectangleIcon3: {
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
  b3: {
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
  groupView49: {
    position: "absolute",
    height: "32.16%",
    width: "31.36%",
    top: "76.67%",
    right: "65.22%",
    bottom: "-8.83%",
    left: "3.42%",
    opacity: 0.4,
  },
  bUSINESS3: {
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
  groupView50: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  groupView51: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  groupIcon20: {
    position: "absolute",
    top: 17,
    right: 15,
    width: 28,
    height: 30,
  },
  groupIcon21: {
    position: "absolute",
    right: 16,
    bottom: 21,
    width: 48,
    height: 41,
  },
  groupIcon22: {
    position: "absolute",
    marginLeft: 30.69,
    top: 21,
    left: "50%",
    width: 17,
    height: 22,
  },
  groupView52: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  card13: {
    position: "absolute",
    top: 0,
    left: 64,
    width: 198,
    height: 299,
  },
  path33118Icon4: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  groupIcon23: {
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
  groupIcon24: {
    position: "absolute",
    height: "10.54%",
    width: "81.73%",
    top: "33.24%",
    right: "9.14%",
    bottom: "56.21%",
    left: "9.14%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  rectangleView14: {
    position: "absolute",
    height: "33.14%",
    width: "108.22%",
    top: "68.51%",
    right: "-3.68%",
    bottom: "-1.65%",
    left: "-4.55%",
    backgroundColor: "#1a1a1a",
  },
  rectangleIcon4: {
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
  b4: {
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
  groupView53: {
    position: "absolute",
    height: "32.16%",
    width: "31.36%",
    top: "76.67%",
    right: "65.22%",
    bottom: "-8.83%",
    left: "3.42%",
    opacity: 0.6,
  },
  bUSINESS4: {
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
  groupView54: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  groupView55: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  groupIcon25: {
    position: "absolute",
    top: 17,
    right: 15,
    width: 28,
    height: 30,
  },
  groupIcon26: {
    position: "absolute",
    right: 16,
    bottom: 21,
    width: 48,
    height: 41,
  },
  groupIcon27: {
    position: "absolute",
    marginLeft: 30.69,
    top: 21,
    left: "50%",
    width: 17,
    height: 22,
  },
  groupView56: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  card14: {
    position: "absolute",
    marginLeft: -97.5,
    top: 0,
    left: "50%",
    width: 198,
    height: 299,
  },
  path33118Icon5: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  groupIcon28: {
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
  groupIcon29: {
    position: "absolute",
    height: "10.54%",
    width: "81.73%",
    top: "33.24%",
    right: "9.14%",
    bottom: "56.21%",
    left: "9.14%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  rectangleView15: {
    position: "absolute",
    height: "33.14%",
    width: "108.22%",
    top: "68.51%",
    right: "-3.68%",
    bottom: "-1.65%",
    left: "-4.55%",
    backgroundColor: "#1a1a1a",
  },
  rectangleIcon5: {
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
  b5: {
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
  groupView57: {
    position: "absolute",
    height: "32.16%",
    width: "31.36%",
    top: "76.67%",
    right: "65.22%",
    bottom: "-8.83%",
    left: "3.42%",
    opacity: 0.6,
  },
  bUSINESS5: {
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
  groupView58: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  groupView59: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  groupIcon30: {
    position: "absolute",
    top: 17,
    right: 15,
    width: 28,
    height: 30,
  },
  groupIcon31: {
    position: "absolute",
    right: 16,
    bottom: 21,
    width: 48,
    height: 41,
  },
  groupIcon32: {
    position: "absolute",
    marginLeft: 30.69,
    top: 21,
    left: "50%",
    width: 17,
    height: 22,
  },
  groupView60: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  card15: {
    position: "absolute",
    top: 0,
    right: 64,
    width: 198,
    height: 299,
  },
  iconAwesomeCheckCircle68: {
    position: "absolute",
    top: 439,
    left: 395,
    width: 15,
    height: 15,
  },
  iconAwesomeCheckCircle69: {
    position: "absolute",
    top: 439,
    left: 766,
    width: 15,
    height: 15,
  },
  iconAwesomeCheckCircle70: {
    position: "absolute",
    top: 476,
    left: 766,
    width: 15,
    height: 15,
  },
  iconAwesomeCheckCircle71: {
    position: "absolute",
    top: 551,
    left: 766,
    width: 15,
    height: 15,
  },
  iconAwesomeCheckCircle72: {
    position: "absolute",
    top: 629,
    left: 766,
    width: 15,
    height: 15,
  },
  iconAwesomeCheckCircle73: {
    position: "absolute",
    top: 724,
    left: 766,
    width: 15,
    height: 15,
  },
  iconAwesomeCheckCircle74: {
    position: "absolute",
    top: 762,
    left: 766,
    width: 15,
    height: 15,
  },
  iconAwesomeCheckCircle75: {
    position: "absolute",
    top: 819,
    left: 766,
    width: 15,
    height: 15,
  },
  iconAwesomeCheckCircle76: {
    position: "absolute",
    top: 854,
    left: 766,
    width: 15,
    height: 15,
  },
  iconAwesomeCheckCircle77: {
    position: "absolute",
    top: 891,
    left: 766,
    width: 15,
    height: 15,
  },
  iconAwesomeCheckCircle78: {
    position: "absolute",
    top: 926,
    left: 766,
    width: 15,
    height: 15,
  },
  iconAwesomeCheckCircle79: {
    position: "absolute",
    top: 967,
    left: 766,
    width: 15,
    height: 15,
  },
  iconAwesomeCheckCircle80: {
    position: "absolute",
    top: 999,
    left: 766,
    width: 15,
    height: 15,
  },
  iconAwesomeCheckCircle81: {
    position: "absolute",
    top: 1035,
    left: 766,
    width: 15,
    height: 15,
  },
  iconAwesomeCheckCircle82: {
    position: "absolute",
    top: 494,
    left: 395,
    width: 15,
    height: 15,
  },
  iconAwesomeCheckCircle83: {
    position: "absolute",
    top: 571,
    left: 395,
    width: 15,
    height: 15,
  },
  iconAwesomeCheckCircle84: {
    position: "absolute",
    top: 648,
    left: 395,
    width: 15,
    height: 15,
  },
  iconAwesomeCheckCircle85: {
    position: "absolute",
    top: 764,
    left: 395,
    width: 15,
    height: 15,
  },
  iconAwesomeCheckCircle86: {
    position: "absolute",
    top: 816,
    left: 395,
    width: 15,
    height: 15,
  },
  iconAwesomeCheckCircle87: {
    position: "absolute",
    top: 873,
    left: 395,
    width: 15,
    height: 15,
  },
  iconAwesomeCheckCircle88: {
    position: "absolute",
    top: 910,
    left: 395,
    width: 15,
    height: 15,
  },
  iconAwesomeCheckCircle89: {
    position: "absolute",
    top: 967,
    left: 395,
    width: 15,
    height: 15,
  },
  iconAwesomeCheckCircle90: {
    position: "absolute",
    top: 1004,
    left: 395,
    width: 15,
    height: 15,
  },
  iconAwesomeCheckCircle91: {
    position: "absolute",
    top: 1038,
    left: 395,
    width: 15,
    height: 15,
  },
  component2372: {
    position: "relative",
    width: 1075,
    height: 1804,
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
  hello15: {
    position: "relative",
    fontSize: 26,
    lineHeight: 30,
    fontWeight: "700",
    fontFamily: "Typo Grotesk",
    color: "#00003d",
    textAlign: "left",
  },
  lineView: {
    position: "relative",
    borderStyle: "solid",
    borderColor: "#fff",
    borderTopWidth: 1,
    width: 376,
    height: 2,
  },
  rectangleView16: {
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
  groupView61: {
    position: "absolute",
    marginTop: -30,
    top: "50%",
    right: 0,
    left: 0,
    height: 60,
  },
  component20886: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  hello16: {
    position: "absolute",
    top: "36.67%",
    left: "37.12%",
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
  homeIndicator: {
    position: "relative",
    borderRadius: 100,
    backgroundColor: "#000",
    width: 134,
    height: 5,
  },
  hello17: {
    position: "absolute",
    top: 1,
    left: 0,
    fontSize: 18,
    lineHeight: 20,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#0101fd",
    textAlign: "left",
  },
  premium: {
    marginLeft: -16.5,
    fontSize: 18,
    lineHeight: 20,
    fontFamily: "Helvetica",
    color: "#999",
    textAlign: "left",
  },
  hello18: {
    position: "absolute",
    left: "50%",
    top: 1,
  },
  hello19: {
    position: "absolute",
    top: 1,
    right: -1,
    fontSize: 18,
    lineHeight: 20,
    fontFamily: "Helvetica",
    color: "#999",
    textAlign: "left",
  },
  component2352: {
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
  text25: {
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
  rectangleView17: {
    position: "absolute",
    bottom: 0,
    left: 0,
    borderRadius: 2,
    backgroundColor: "#272727",
    width: 3,
    height: 4,
  },
  rectangleView18: {
    position: "absolute",
    marginLeft: -3.5,
    bottom: 0,
    left: "50%",
    borderRadius: 2,
    backgroundColor: "#272727",
    width: 3,
    height: 6,
  },
  rectangleView19: {
    position: "absolute",
    marginLeft: 0.5,
    bottom: 0,
    left: "50%",
    borderRadius: 2,
    backgroundColor: "#272727",
    width: 3,
    height: 9,
  },
  rectangleView20: {
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
  chooseCardsStandard: {
    position: "relative",
    backgroundColor: "#4b4b4b",
    flex: 1,
    width: "100%",
    flexDirection: "column",
    alignItems: "flex-start",
  },
});

export default ChooseCardsStandard;
