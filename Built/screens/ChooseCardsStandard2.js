import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const ChooseCardsStandard2 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.chooseCardsStandard2}>
      <View style={styles.rectangleView} />
      <Pressable
        style={[styles.component23710, styles.mt30, styles.ml26]}
        onPress={() => navigation.navigate("ChooseCardsPremium")}
      >
        <Text style={styles.hello}>£10</Text>
        <Text style={styles.hello1}>£25</Text>
        <Text style={styles.hello2}>ADVANCE</Text>
        <Text style={styles.hello3}>ELITE</Text>
        <View style={styles.groupView11}>
          <View style={styles.rectangleView1} />
          <View style={styles.groupView}>
            <Text style={styles.allEssentialFeatures}>
              All Essential Features
            </Text>
          </View>
          <View style={styles.groupView1}>
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
              <Text style={styles.text} />
            </Text>
          </View>
          <View style={styles.groupView2}>
            <Text style={styles.cardsAddedExpenseCardsWit}>
              <Text style={styles.cards1}>
                <Text style={styles.cards}>Cards:</Text>
              </Text>
              <Text style={styles.addedExpenseCardsWithSpend}>
                <Text style={styles.addedExpenseCards}>
                  Added expense cards with spending limits:
                </Text>
              </Text>
              <Text style={styles.freeExpenseCard}>
                <Text style={styles.text1}>{`1 `}</Text>Free Expense Card
              </Text>
            </Text>
          </View>
          <View style={styles.groupView3}>
            <Text style={styles.accountingServicesInvoices}>
              <Text style={styles.accountingServices1}>
                <Text style={styles.accountingServices}>
                  Accounting Services:
                </Text>
              </Text>
              <Text style={styles.invoices1}>
                <Text style={styles.invoices}>Invoices</Text>
              </Text>
              <Text style={styles.digitalReceipts1}>
                <Text style={styles.digitalReceipts}>Digital Receipts</Text>
              </Text>
              <Text style={styles.bankFeed1}>
                <Text style={styles.bankFeed}>Bank Feed</Text>
              </Text>
              <Text style={styles.trackExpenses1}>
                <Text style={styles.trackExpenses}>Track Expenses</Text>
              </Text>
              <Text style={styles.text2} />
            </Text>
          </View>
          <View style={styles.groupView4}>
            <Text style={styles.slackIntegrationComingSoo}>
              <Text style={styles.slackIntegration1}>
                <Text style={styles.slackIntegration}>Slack Integration</Text>
              </Text>
              <Text style={styles.comingSoon1}>
                <Text style={styles.comingSoon}> (Coming Soon)</Text>
              </Text>
              <Text style={styles.text3} />
            </Text>
          </View>
          <View style={styles.groupView5}>
            <Text style={styles.customerServicesOnlinePhon}>
              <Text style={styles.customerServices1}>
                <Text style={styles.customerServices}>Customer Services:</Text>
              </Text>
              <Text style={styles.onlinePhone1}>
                <Text style={styles.onlinePhone}>Online/Phone</Text>
              </Text>
              <Text style={styles.text4} />
            </Text>
          </View>
          <View style={styles.groupView6}>
            <Text style={styles.cashbackOnSavingsComingS}>
              <Text style={styles.cashbackOnSavings1}>
                <Text style={styles.cashbackOnSavings}>
                  Cashback on savings
                </Text>
              </Text>
              <Text style={styles.comingSoon2}>
                <Text style={styles.comingSoo}> (Coming Soo</Text>n)
              </Text>
            </Text>
          </View>
          <View style={styles.groupView7}>
            <Text style={styles.categoriseAndTagSpending}>
              Categorise and Tag Spending
            </Text>
          </View>
          <View style={styles.groupView8}>
            <Text style={styles.cardPaymentsForeignEXFee}>
              Card Payments Foreign EX Fee: 1.98%
            </Text>
          </View>
          <View style={styles.groupView9}>
            <Text style={styles.invoicePaymentsForeignEXFe}>
              Invoice Payments Foreign EX Fee: 2.40%
            </Text>
          </View>
          <View style={styles.groupView10}>
            <Text style={styles.plant5TreesAMonth}>Plant 5 trees a month</Text>
          </View>
        </View>
        <View style={styles.groupView13}>
          <View style={styles.rectangleView2} />
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
            <Text style={styles.text5} />
          </Text>
          <Text style={styles.cardsAddedExpenseCardsWit1}>
            <Text style={styles.cards3}>
              <Text style={styles.cards2}>Cards:</Text>
            </Text>
            <Text style={styles.addedExpenseCardsWithSpend1}>
              <Text
                style={styles.addedExpenseCards1}
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
            <Text style={styles.text6} />
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
            <Text style={styles.text7} />
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
          <Text style={styles.cardPaymentsForeignEXFee1}>
            Card Payments Foreign EX Fee: 1.98%
          </Text>
          <View style={styles.groupView12}>
            <Text style={styles.invoicePaymentsForeignEXFe1}>
              Invoice Payments Foreign EX Fee: 2.40%
            </Text>
          </View>
        </View>
        <View style={styles.card1}>
          <View style={styles.groupView17}>
            <View style={styles.groupView16}>
              <Image
                style={styles.path33118Icon}
                resizeMode="cover"
                source={require("../assets/path-3311814.png")}
              />
              <View style={styles.groupView15}>
                <Image
                  style={styles.groupIcon}
                  resizeMode="cover"
                  source={require("../assets/group-3175914.png")}
                />
                <Image
                  style={styles.groupIcon1}
                  resizeMode="cover"
                  source={require("../assets/group-3176014.png")}
                />
                <View style={styles.rectangleView3} />
                <Image
                  style={styles.rectangleIcon}
                  resizeMode="cover"
                  source={require("../assets/rectangle-262042.png")}
                />
                <View style={styles.groupView14}>
                  <Text style={styles.b}>B</Text>
                </View>
                <Text style={styles.bUSINESS}>BUSINESS</Text>
              </View>
            </View>
            <Image
              style={styles.groupIcon2}
              resizeMode="cover"
              source={require("../assets/group-3176414.png")}
            />
            <Image
              style={styles.groupIcon3}
              resizeMode="cover"
              source={require("../assets/group-3176614.png")}
            />
            <Image
              style={styles.groupIcon4}
              resizeMode="cover"
              source={require("../assets/group-3176714.png")}
            />
          </View>
        </View>
        <View style={styles.card11}>
          <View style={styles.groupView21}>
            <View style={styles.groupView20}>
              <Image
                style={styles.path33118Icon1}
                resizeMode="cover"
                source={require("../assets/path-3311815.png")}
              />
              <View style={styles.groupView19}>
                <Image
                  style={styles.groupIcon5}
                  resizeMode="cover"
                  source={require("../assets/group-3175914.png")}
                />
                <Image
                  style={styles.groupIcon6}
                  resizeMode="cover"
                  source={require("../assets/group-3176015.png")}
                />
                <View style={styles.rectangleView4} />
                <Image
                  style={styles.rectangleIcon1}
                  resizeMode="cover"
                  source={require("../assets/rectangle-262042.png")}
                />
                <View style={styles.groupView18}>
                  <Text style={styles.b1}>B</Text>
                </View>
                <Text style={styles.bUSINESS1}>BUSINESS</Text>
              </View>
            </View>
            <Image
              style={styles.groupIcon7}
              resizeMode="cover"
              source={require("../assets/group-3176414.png")}
            />
            <Image
              style={styles.groupIcon8}
              resizeMode="cover"
              source={require("../assets/group-3176614.png")}
            />
            <Image
              style={styles.groupIcon9}
              resizeMode="cover"
              source={require("../assets/group-3176714.png")}
            />
          </View>
        </View>
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
      </Pressable>
      <Pressable
        style={[styles.groupPressable, styles.mt2]}
        onPress={() => navigation.navigate("Plan")}
      >
        <Image
          style={styles.iconFeatherArrowLeft}
          resizeMode="cover"
          source={require("../assets/icon-featherarrowleft.png")}
        />
      </Pressable>
      <Text style={[styles.hello4, styles.mt10, styles.ml27]}>
        Choose Cards
      </Text>
      <View style={[styles.lineView, styles.mt15]} />
      <Pressable
        style={[styles.groupPressable1, styles.mt_643, styles.ml25]}
        onPress={() => navigation.navigate("Settings")}
      >
        <View style={styles.component208154}>
          <View style={styles.groupView22}>
            <View style={styles.rectangleView5} />
            <View style={styles.maskGroup236} />
          </View>
        </View>
        <Text style={styles.hello5}>Continue</Text>
      </Pressable>
      <View style={[styles.homeIndicator, styles.mt36, styles.ml121]} />
      <Pressable
        style={[styles.component2356, styles.mt39, styles.ml29]}
        onPress={() => navigation.navigate("ChooseCardsElite")}
      >
        <Pressable
          style={styles.hello6}
          onPress={() => navigation.navigate("ChooseCardsStandard")}
        >
          <Text style={styles.standard}>Standard</Text>
        </Pressable>
        <Pressable
          style={styles.hello7}
          onPress={() => navigation.navigate("ChooseCardsPremium")}
        >
          <Text style={styles.premium}>Premium</Text>
        </Pressable>
        <Text style={styles.hello8}>Elite</Text>
      </Pressable>
      <View style={[styles.statusBarBlack, styles.mt_2741]}>
        <View style={styles.rectangle} />
        <View style={styles.statusBar}>
          <View style={styles.time}>
            <Text style={styles.text8}>9:41</Text>
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
            <View style={styles.rectangleView6} />
            <View style={styles.rectangleView7} />
            <View style={styles.rectangleView8} />
            <View style={styles.rectangleView9} />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mt30: {
    marginTop: 30,
  },
  ml26: {
    marginLeft: 26,
  },
  mt2: {
    marginTop: 2,
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
  mt_643: {
    marginTop: -643,
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
  mt_2741: {
    marginTop: -2741,
  },
  rectangleView: {
    position: "relative",
    backgroundColor: "#f6f5f8",
    width: 375,
    height: 2741,
  },
  hello: {
    position: "absolute",
    marginTop: -200.02,
    top: "50%",
    left: 142,
    fontSize: 25,
    lineHeight: 20,
    fontFamily: "Helvetica",
    color: "#00003d",
    textAlign: "left",
  },
  hello1: {
    position: "absolute",
    marginTop: -200.02,
    top: "50%",
    left: 516,
    fontSize: 25,
    lineHeight: 20,
    fontFamily: "Helvetica",
    color: "#00003d",
    textAlign: "left",
  },
  hello2: {
    position: "absolute",
    marginTop: -229.02,
    top: "50%",
    left: 102,
    fontSize: 24,
    lineHeight: 20,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#0101fd",
    textAlign: "left",
  },
  hello3: {
    position: "absolute",
    marginTop: -229.02,
    top: "50%",
    left: 501,
    fontSize: 24,
    lineHeight: 20,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#0101fd",
    textAlign: "left",
  },
  rectangleView1: {
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
  groupView: {
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
  text: {
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
  groupView1: {
    position: "absolute",
    top: 76,
    right: 12,
    left: 48,
    height: 56,
  },
  cards: {
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#00003d",
  },
  cards1: {
    margin: 0,
  },
  addedExpenseCards: {
    fontFamily: "Helvetica",
    color: "#999",
  },
  addedExpenseCardsWithSpend: {
    margin: 0,
  },
  text1: {
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
  groupView2: {
    position: "absolute",
    marginTop: -190,
    top: "50%",
    right: 9,
    left: 48,
    height: 56,
  },
  accountingServices: {
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#00003d",
  },
  accountingServices1: {
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
  bankFeed: {
    fontFamily: "Helvetica",
    color: "#999",
  },
  bankFeed1: {
    margin: 0,
  },
  trackExpenses: {
    fontFamily: "Helvetica",
    color: "#999",
  },
  trackExpenses1: {
    margin: 0,
  },
  text2: {
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
  groupView3: {
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
  comingSoon: {
    fontFamily: "Helvetica",
    color: "#999",
  },
  comingSoon1: {
    margin: 0,
  },
  text3: {
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
  groupView4: {
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
  text4: {
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
  groupView5: {
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
  comingSoon2: {
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
  groupView6: {
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
  groupView7: {
    position: "absolute",
    marginTop: 204,
    top: "50%",
    right: 9,
    left: 48,
    height: 16,
  },
  cardPaymentsForeignEXFee: {
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
    right: 9,
    bottom: 86,
    left: 48,
    height: 16,
  },
  invoicePaymentsForeignEXFe: {
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
  groupView9: {
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
  groupView10: {
    position: "absolute",
    marginTop: 113,
    top: "50%",
    right: 9,
    left: 48,
    height: 16,
  },
  groupView11: {
    position: "absolute",
    marginTop: -132.43,
    marginLeft: -349.5,
    top: "50%",
    left: "50%",
    width: 326,
    height: 684,
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
  text5: {
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
  text6: {
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
  text7: {
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
  cardPaymentsForeignEXFee1: {
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
    width: 263,
  },
  groupView12: {
    position: "absolute",
    right: 23,
    bottom: 32,
    left: 41,
    height: 36,
  },
  groupView13: {
    position: "absolute",
    marginTop: -132.43,
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
  rectangleView3: {
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
  groupView14: {
    position: "absolute",
    height: "32.16%",
    width: "31.36%",
    top: "76.67%",
    right: "65.22%",
    bottom: "-8.83%",
    left: "3.42%",
    opacity: 0.6,
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
  groupView15: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  groupView16: {
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
  groupView17: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  card1: {
    position: "absolute",
    marginLeft: -285.5,
    top: 0,
    left: "50%",
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
  groupView18: {
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
  groupView19: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  groupView20: {
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
  groupView21: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  card11: {
    position: "absolute",
    top: 0,
    right: 64,
    width: 198,
    height: 299,
  },
  iconAwesomeCheckCircle: {
    position: "absolute",
    top: 439,
    left: 19,
    width: 15,
    height: 15,
  },
  iconAwesomeCheckCircle1: {
    position: "absolute",
    top: 439,
    left: 390,
    width: 15,
    height: 15,
  },
  iconAwesomeCheckCircle2: {
    position: "absolute",
    top: 476,
    left: 390,
    width: 15,
    height: 15,
  },
  iconAwesomeCheckCircle3: {
    position: "absolute",
    top: 551,
    left: 390,
    width: 15,
    height: 15,
  },
  iconAwesomeCheckCircle4: {
    position: "absolute",
    top: 629,
    left: 390,
    width: 15,
    height: 15,
  },
  iconAwesomeCheckCircle5: {
    position: "absolute",
    top: 724,
    left: 390,
    width: 15,
    height: 15,
  },
  iconAwesomeCheckCircle6: {
    position: "absolute",
    top: 762,
    left: 390,
    width: 15,
    height: 15,
  },
  iconAwesomeCheckCircle7: {
    position: "absolute",
    top: 819,
    left: 390,
    width: 15,
    height: 15,
  },
  iconAwesomeCheckCircle8: {
    position: "absolute",
    top: 854,
    left: 390,
    width: 15,
    height: 15,
  },
  iconAwesomeCheckCircle9: {
    position: "absolute",
    top: 891,
    left: 390,
    width: 15,
    height: 15,
  },
  iconAwesomeCheckCircle10: {
    position: "absolute",
    top: 926,
    left: 390,
    width: 15,
    height: 15,
  },
  iconAwesomeCheckCircle11: {
    position: "absolute",
    top: 967,
    left: 390,
    width: 15,
    height: 15,
  },
  iconAwesomeCheckCircle12: {
    position: "absolute",
    top: 999,
    left: 390,
    width: 15,
    height: 15,
  },
  iconAwesomeCheckCircle13: {
    position: "absolute",
    top: 1035,
    left: 390,
    width: 15,
    height: 15,
  },
  iconAwesomeCheckCircle14: {
    position: "absolute",
    top: 494,
    left: 19,
    width: 15,
    height: 15,
  },
  iconAwesomeCheckCircle15: {
    position: "absolute",
    top: 571,
    left: 19,
    width: 15,
    height: 15,
  },
  iconAwesomeCheckCircle16: {
    position: "absolute",
    top: 648,
    left: 19,
    width: 15,
    height: 15,
  },
  iconAwesomeCheckCircle17: {
    position: "absolute",
    top: 764,
    left: 19,
    width: 15,
    height: 15,
  },
  iconAwesomeCheckCircle18: {
    position: "absolute",
    top: 816,
    left: 19,
    width: 15,
    height: 15,
  },
  iconAwesomeCheckCircle19: {
    position: "absolute",
    top: 873,
    left: 19,
    width: 15,
    height: 15,
  },
  iconAwesomeCheckCircle20: {
    position: "absolute",
    top: 910,
    left: 19,
    width: 15,
    height: 15,
  },
  iconAwesomeCheckCircle21: {
    position: "absolute",
    top: 967,
    left: 19,
    width: 15,
    height: 15,
  },
  iconAwesomeCheckCircle22: {
    position: "absolute",
    top: 1004,
    left: 19,
    width: 15,
    height: 15,
  },
  iconAwesomeCheckCircle23: {
    position: "absolute",
    top: 1038,
    left: 19,
    width: 15,
    height: 15,
  },
  component23710: {
    position: "relative",
    width: 699,
    height: 1103,
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
  hello4: {
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
  rectangleView5: {
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
  groupView22: {
    position: "absolute",
    marginTop: -30,
    top: "50%",
    right: 0,
    left: 0,
    height: 60,
  },
  component208154: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  hello5: {
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
  standard: {
    fontSize: 18,
    lineHeight: 20,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#0101fd",
    textAlign: "left",
  },
  hello6: {
    position: "absolute",
    left: 0,
    top: 1,
  },
  premium: {
    marginLeft: -16.5,
    fontSize: 18,
    lineHeight: 20,
    fontFamily: "Helvetica",
    color: "#999",
    textAlign: "left",
  },
  hello7: {
    position: "absolute",
    left: "50%",
    top: 1,
  },
  hello8: {
    position: "absolute",
    top: 1,
    right: -1,
    fontSize: 18,
    lineHeight: 20,
    fontFamily: "Helvetica",
    color: "#999",
    textAlign: "left",
  },
  component2356: {
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
  text8: {
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
  rectangleView6: {
    position: "absolute",
    bottom: 0,
    left: 0,
    borderRadius: 2,
    backgroundColor: "#272727",
    width: 3,
    height: 4,
  },
  rectangleView7: {
    position: "absolute",
    marginLeft: -3.5,
    bottom: 0,
    left: "50%",
    borderRadius: 2,
    backgroundColor: "#272727",
    width: 3,
    height: 6,
  },
  rectangleView8: {
    position: "absolute",
    marginLeft: 0.5,
    bottom: 0,
    left: "50%",
    borderRadius: 2,
    backgroundColor: "#272727",
    width: 3,
    height: 9,
  },
  rectangleView9: {
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
  chooseCardsStandard2: {
    position: "relative",
    backgroundColor: "#4b4b4b",
    flex: 1,
    width: "100%",
    flexDirection: "column",
    alignItems: "flex-start",
  },
});

export default ChooseCardsStandard2;
