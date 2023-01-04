import * as React from "react";
import { Text, StyleSheet, View, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import GlobalStyles from "../GlobalStyles";

const ChooseCardsStandard2 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.chooseCardsStandard2}>
      <View style={styles.component23710Parent}>
        <Pressable
          style={[styles.component23710, styles.groupParentPosition]}
          onPress={() => navigation.navigate("ChooseCardsPremium")}
        >
          <Text style={[styles.hello, styles.helloFlexBox, styles.helloTypo2]}>
            £10
          </Text>
          <Text style={[styles.hello1, styles.helloFlexBox, styles.helloTypo2]}>
            £25
          </Text>
          <Text style={[styles.hello2, styles.helloColor, styles.helloTypo1]}>
            ADVANCE
          </Text>
          <Text style={[styles.hello3, styles.helloColor, styles.helloTypo1]}>
            ELITE
          </Text>
          <View
            style={[
              styles.rectangleParent,
              styles.groupPosition,
              styles.rectangleLayout,
            ]}
          >
            <View style={[styles.groupChild, styles.groupPosition]} />
            <View
              style={[
                styles.allEssentialFeaturesWrapper,
                styles.wrapperLayout1,
                styles.wrapperPosition1,
              ]}
            >
              <Text
                style={[styles.allTypo, styles.allEssentialFeaturesPosition]}
              >
                All Essential Features
              </Text>
            </View>
            <View
              style={[
                styles.paymentsDomesticTransferWrapper,
                styles.wrapperLayout,
                styles.wrapperPosition1,
              ]}
            >
              <Text style={[styles.cardsPosition, styles.allTypo]}>
                <Text style={styles.paymentsDomestic}>
                  <Text style={styles.paymentsDomestic1}>
                    Payments (domestic):
                  </Text>
                </Text>
                <Text style={styles.paymentsDomestic}>
                  <Text style={styles.transferInoutNo}>
                    Transfer in/out: No Fee Upto 20 Transactions
                  </Text>
                </Text>
                <Text style={styles.transferInoutNo} />
              </Text>
            </View>
            <View
              style={[
                styles.cardsAddedExpenseCardsWitWrapper,
                styles.wrapperPosition,
                styles.wrapperLayout,
              ]}
            >
              <Text style={[styles.cardsTypo, styles.cardsPosition]}>
                <Text style={styles.paymentsDomestic}>
                  <Text style={styles.paymentsDomestic1}>Cards:</Text>
                </Text>
                <Text style={styles.paymentsDomestic}>
                  <Text style={styles.transferInoutNo}>
                    Added expense cards with spending limits:
                  </Text>
                </Text>
                <Text style={styles.paymentsDomestic}>
                  <Text style={styles.transferInoutNo}>{`1 `}</Text>Free Expense
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
              <Text
                style={[styles.accountingServicesInvoices, styles.cardsTypo]}
              >
                <Text style={styles.paymentsDomestic}>
                  <Text style={styles.paymentsDomestic1}>
                    Accounting Services:
                  </Text>
                </Text>
                <Text style={styles.paymentsDomestic}>
                  <Text style={styles.transferInoutNo}>Invoices</Text>
                </Text>
                <Text style={styles.paymentsDomestic}>
                  <Text style={styles.transferInoutNo}>Digital Receipts</Text>
                </Text>
                <Text style={styles.paymentsDomestic}>
                  <Text style={styles.transferInoutNo}>Bank Feed</Text>
                </Text>
                <Text style={styles.paymentsDomestic}>
                  <Text style={styles.transferInoutNo}>Track Expenses</Text>
                </Text>
                <Text style={styles.transferInoutNo} />
              </Text>
            </View>
            <View
              style={[
                styles.slackIntegrationComingSooWrapper,
                styles.comingWrapperLayout,
                styles.wrapperPosition,
              ]}
            >
              <Text style={[styles.invoicePosition, styles.cardsTypo]}>
                <Text style={styles.paymentsDomestic}>
                  <Text style={styles.paymentsDomestic1}>
                    Slack Integration
                  </Text>
                </Text>
                <Text style={styles.paymentsDomestic}>
                  <Text style={styles.transferInoutNo}> (Coming Soon)</Text>
                </Text>
                <Text style={styles.transferInoutNo} />
              </Text>
            </View>
            <View
              style={[
                styles.customerServicesOnlinephonWrapper,
                styles.comingWrapperLayout,
                styles.wrapperPosition,
              ]}
            >
              <Text style={styles.cardsTypo}>
                <Text style={styles.paymentsDomestic}>
                  <Text style={styles.paymentsDomestic1}>
                    Customer Services:
                  </Text>
                </Text>
                <Text style={styles.paymentsDomestic}>
                  <Text style={styles.transferInoutNo}>Online/Phone</Text>
                </Text>
                <Text style={styles.transferInoutNo} />
              </Text>
            </View>
            <View
              style={[
                styles.cashbackOnSavingsComingSWrapper,
                styles.comingWrapperLayout,
                styles.wrapperPosition,
              ]}
            >
              <Text style={styles.cardsTypo}>
                <Text style={styles.paymentsDomestic}>
                  <Text style={styles.paymentsDomestic1}>
                    Cashback on savings
                  </Text>
                </Text>
                <Text style={styles.paymentsDomestic}>
                  <Text style={styles.transferInoutNo}> (Coming Soo</Text>n)
                </Text>
              </Text>
            </View>
            <View
              style={[
                styles.categoriseAndTagSpendingWrapper,
                styles.wrapperPosition,
                styles.wrapperLayout1,
              ]}
            >
              <Text
                style={[styles.cardsTypo, styles.allEssentialFeaturesPosition]}
              >
                Categorise and Tag Spending
              </Text>
            </View>
            <View
              style={[
                styles.cardPaymentsForeignExFeeWrapper,
                styles.wrapperPosition,
                styles.wrapperLayout1,
              ]}
            >
              <Text style={styles.allEssentialFeaturesPosition}>
                Card Payments Foreign EX Fee: 1.98%
              </Text>
            </View>
            <View
              style={[
                styles.invoicePaymentsForeignExFeWrapper,
                styles.comingWrapperLayout,
                styles.wrapperPosition,
              ]}
            >
              <Text
                style={[
                  styles.invoicePaymentsForeignExFe,
                  styles.invoicePosition,
                  styles.cardsTypo,
                ]}
              >
                Invoice Payments Foreign EX Fee: 2.40%
              </Text>
            </View>
            <View
              style={[
                styles.plant5TreesAMonthWrapper,
                styles.wrapperPosition,
                styles.wrapperLayout1,
              ]}
            >
              <Text style={styles.allEssentialFeaturesPosition}>
                Plant 5 trees a month
              </Text>
            </View>
          </View>
          <View
            style={[
              styles.rectangleGroup,
              styles.groupPosition,
              styles.rectangleLayout,
            ]}
          >
            <View style={[styles.groupChild, styles.groupPosition]} />
            <Text style={[styles.allAdvanceFeatures, styles.allTypo]}>
              All Advance Features
            </Text>
            <Text
              style={[styles.paymentsDomesticTransfer1, styles.paymentsTypo]}
            >
              <Text style={styles.paymentsDomestic}>
                <Text style={styles.paymentsDomestic1}>
                  Payments (domestic):
                </Text>
              </Text>
              <Text style={styles.paymentsDomestic}>
                <Text style={styles.transferInoutNo}>
                  Transfer in/out: No Fee Upto 50 Transactions
                </Text>
              </Text>
              <Text style={styles.transferInoutNo} />
            </Text>
            <Text
              style={[styles.cardsAddedExpenseCardsWit1, styles.paymentsTypo]}
            >
              <Text style={styles.paymentsDomestic}>
                <Text style={styles.paymentsDomestic1}>Cards:</Text>
              </Text>
              <Text style={styles.paymentsDomestic}>
                <Text
                  style={styles.transferInoutNo}
                >{`Added expense cards with spending limits: 2 `}</Text>
                Free Expense Card
              </Text>
            </Text>
            <Text
              style={[styles.businessToolKitFreeLogoD, styles.paymentsTypo]}
            >
              <Text style={styles.paymentsDomestic}>
                <Text style={styles.paymentsDomestic1}>Business Tool Kit:</Text>
              </Text>
              <Text style={styles.paymentsDomestic}>
                <Text style={styles.transferInoutNo}>Free Logo Design</Text>
              </Text>
              <Text style={styles.paymentsDomestic}>
                <Text style={styles.transferInoutNo}>
                  Trade Mark Registration
                </Text>
              </Text>
              <Text style={styles.paymentsDomestic}>
                <Text style={styles.transferInoutNo}>Desktop Support</Text>
              </Text>
              <Text style={styles.transferInoutNo} />
            </Text>
            <Text
              style={[styles.customerServicesDedicatedA, styles.paymentsTypo]}
            >
              <Text style={styles.paymentsDomestic}>
                <Text style={styles.paymentsDomestic1}>Customer Services:</Text>
              </Text>
              <Text style={styles.paymentsDomestic}>
                <Text style={styles.transferInoutNo}>
                  Dedicated Account Manager
                </Text>
              </Text>
              <Text style={styles.transferInoutNo} />
            </Text>
            <Text
              style={[styles.geniusTelecoms10gbSimOnly, styles.paymentsTypo]}
            >
              Genius Telecoms 10GB Sim Only
            </Text>
            <Text style={[styles.plant10TreesAMonth, styles.paymentsTypo]}>
              Plant 10 trees a month
            </Text>
            <Text
              style={[styles.simOnlyDataplanWith4gbDat, styles.paymentsTypo]}
            >
              Sim Only DataPlan with 4GB Data
            </Text>
            <Text style={[styles.openApiAccess, styles.paymentsTypo]}>
              Open API Access
            </Text>
            <Text style={[styles.multipleUserControl, styles.paymentsTypo]}>
              Multiple User Control
            </Text>
            <Text style={[styles.automaticPayroll, styles.paymentsTypo]}>
              Automatic Payroll
            </Text>
            <Text
              style={[styles.cardPaymentsForeignExFee1, styles.paymentsTypo]}
            >
              Card Payments Foreign EX Fee: 1.98%
            </Text>
            <View
              style={[
                styles.invoicePaymentsForeignExFeContainer,
                styles.comingWrapperLayout,
              ]}
            >
              <Text
                style={[
                  styles.invoicePaymentsForeignExFe1,
                  styles.paymentsTypo,
                  styles.invoicePosition,
                ]}
              >
                Invoice Payments Foreign EX Fee: 2.40%
              </Text>
            </View>
          </View>
          <View style={[styles.card1, styles.cardLayout]}>
            <View style={[styles.groupParent, styles.groupParentPosition]}>
              <View style={[styles.groupParent, styles.groupParentPosition]}>
                <Image
                  style={[
                    styles.path33118Icon,
                    styles.groupIconLayout,
                    styles.groupParentPosition,
                  ]}
                  resizeMode="cover"
                  source={require("../assets/path-3311816.png")}
                />
                <View style={[styles.groupParent, styles.groupParentPosition]}>
                  <Image
                    style={[styles.groupInner, styles.groupIconLayout]}
                    resizeMode="cover"
                    source={require("../assets/group-3175918.png")}
                  />
                  <Image
                    style={[styles.groupIcon, styles.groupIconLayout]}
                    resizeMode="cover"
                    source={require("../assets/group-3176018.png")}
                  />
                  <View style={styles.rectangleView} />
                  <Image
                    style={[styles.rectangleIcon, styles.groupIconLayout]}
                    resizeMode="cover"
                    source={require("../assets/rectangle-26204.png")}
                  />
                  <View style={styles.bWrapper}>
                    <Text style={[styles.b, styles.helloFlexBox]}>B</Text>
                  </View>
                  <Text style={[styles.business, styles.helloFlexBox]}>
                    BUSINESS
                  </Text>
                </View>
              </View>
              <Image
                style={styles.groupChild1}
                resizeMode="cover"
                source={require("../assets/group-3176418.png")}
              />
              <Image
                style={styles.groupChild2}
                resizeMode="cover"
                source={require("../assets/group-3176618.png")}
              />
              <Image
                style={styles.groupChild3}
                resizeMode="cover"
                source={require("../assets/group-3176718.png")}
              />
            </View>
          </View>
          <View style={[styles.card11, styles.cardLayout]}>
            <View style={[styles.groupParent, styles.groupParentPosition]}>
              <View style={[styles.groupParent, styles.groupParentPosition]}>
                <Image
                  style={[
                    styles.path33118Icon,
                    styles.groupIconLayout,
                    styles.groupParentPosition,
                  ]}
                  resizeMode="cover"
                  source={require("../assets/path-3311819.png")}
                />
                <View style={[styles.groupParent, styles.groupParentPosition]}>
                  <Image
                    style={[styles.groupInner, styles.groupIconLayout]}
                    resizeMode="cover"
                    source={require("../assets/group-3175918.png")}
                  />
                  <Image
                    style={[styles.groupIcon, styles.groupIconLayout]}
                    resizeMode="cover"
                    source={require("../assets/group-3176019.png")}
                  />
                  <View style={styles.rectangleView} />
                  <Image
                    style={[styles.rectangleIcon, styles.groupIconLayout]}
                    resizeMode="cover"
                    source={require("../assets/rectangle-26204.png")}
                  />
                  <View style={styles.bWrapper}>
                    <Text style={[styles.b, styles.helloFlexBox]}>B</Text>
                  </View>
                  <Text style={[styles.business, styles.helloFlexBox]}>
                    BUSINESS
                  </Text>
                </View>
              </View>
              <Image
                style={styles.groupChild1}
                resizeMode="cover"
                source={require("../assets/group-3176418.png")}
              />
              <Image
                style={styles.groupChild2}
                resizeMode="cover"
                source={require("../assets/group-3176618.png")}
              />
              <Image
                style={styles.groupChild3}
                resizeMode="cover"
                source={require("../assets/group-3176718.png")}
              />
            </View>
          </View>
          <Image
            style={[
              styles.iconAwesomeCheckCircle,
              styles.iconLayout,
              styles.iconLayout1,
            ]}
            resizeMode="cover"
            source={require("../assets/icon-awesomecheckcircle.png")}
          />
          <Image
            style={[
              styles.iconAwesomeCheckCircle1,
              styles.iconLayout,
              styles.iconLayout1,
            ]}
            resizeMode="cover"
            source={require("../assets/icon-awesomecheckcircle.png")}
          />
          <Image
            style={[styles.iconAwesomeCheckCircle2, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/icon-awesomecheckcircle.png")}
          />
          <Image
            style={[styles.iconAwesomeCheckCircle3, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/icon-awesomecheckcircle.png")}
          />
          <Image
            style={[styles.iconAwesomeCheckCircle4, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/icon-awesomecheckcircle.png")}
          />
          <Image
            style={[styles.iconAwesomeCheckCircle5, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/icon-awesomecheckcircle.png")}
          />
          <Image
            style={[styles.iconAwesomeCheckCircle6, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/icon-awesomecheckcircle.png")}
          />
          <Image
            style={[styles.iconAwesomeCheckCircle7, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/icon-awesomecheckcircle.png")}
          />
          <Image
            style={[styles.iconAwesomeCheckCircle8, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/icon-awesomecheckcircle.png")}
          />
          <Image
            style={[styles.iconAwesomeCheckCircle9, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/icon-awesomecheckcircle.png")}
          />
          <Image
            style={[styles.iconAwesomeCheckCircle10, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/icon-awesomecheckcircle.png")}
          />
          <Image
            style={[styles.iconAwesomeCheckCircle11, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/icon-awesomecheckcircle.png")}
          />
          <Image
            style={[styles.iconAwesomeCheckCircle12, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/icon-awesomecheckcircle.png")}
          />
          <Image
            style={[styles.iconAwesomeCheckCircle13, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/icon-awesomecheckcircle.png")}
          />
          <Image
            style={[styles.iconAwesomeCheckCircle14, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/icon-awesomecheckcircle.png")}
          />
          <Image
            style={[styles.iconAwesomeCheckCircle15, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/icon-awesomecheckcircle.png")}
          />
          <Image
            style={[styles.iconAwesomeCheckCircle16, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/icon-awesomecheckcircle.png")}
          />
          <Image
            style={[styles.iconAwesomeCheckCircle17, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/icon-awesomecheckcircle.png")}
          />
          <Image
            style={[styles.iconAwesomeCheckCircle18, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/icon-awesomecheckcircle.png")}
          />
          <Image
            style={[styles.iconAwesomeCheckCircle19, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/icon-awesomecheckcircle.png")}
          />
          <Image
            style={[styles.iconAwesomeCheckCircle20, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/icon-awesomecheckcircle.png")}
          />
          <Image
            style={[styles.iconAwesomeCheckCircle21, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/icon-awesomecheckcircle.png")}
          />
          <Image
            style={[styles.iconAwesomeCheckCircle22, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/icon-awesomecheckcircle.png")}
          />
          <Image
            style={[styles.iconAwesomeCheckCircle23, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/icon-awesomecheckcircle.png")}
          />
        </Pressable>
        <Text style={[styles.hello4, styles.helloFlexBox]}>Choose Cards</Text>
        <View style={styles.lineView} />
        <Pressable
          style={styles.groupPressable}
          onPress={() => navigation.navigate("Settings")}
        >
          <View style={[styles.groupParent, styles.groupParentPosition]}>
            <View style={styles.groupChild11} />
            <View style={styles.maskGroup236} />
          </View>
          <Text style={[styles.hello5, styles.helloFlexBox]}>Continue</Text>
        </Pressable>
        <Pressable
          style={styles.component2356}
          onPress={() => navigation.navigate("ChooseCardsElite")}
        >
          <Text
            style={[
              styles.hello6,
              styles.helloTypo,
              styles.helloPosition,
              styles.helloColor,
            ]}
          >
            Standard
          </Text>
          <Pressable
            style={[styles.hello7, styles.helloPosition]}
            onPress={() => navigation.navigate("ChooseCardsPremium")}
          >
            <Text style={[styles.premium, styles.helloTypo]}>Premium</Text>
          </Pressable>
          <Text style={[styles.hello8, styles.helloTypo, styles.helloPosition]}>
            Elite
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupParentPosition: {
    bottom: 0,
    right: 0,
  },
  helloFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  helloTypo2: {
    fontSize: GlobalStyles.FontSize.size_7xl,
    marginTop: -196.02,
    textAlign: "left",
    color: GlobalStyles.Color.indigo_100,
    fontFamily: GlobalStyles.FontFamily.helvetica,
    lineHeight: 20,
    top: "50%",
  },
  helloColor: {
    color: GlobalStyles.Color.blue_100,
    fontWeight: "700",
  },
  helloTypo1: {
    fontSize: GlobalStyles.FontSize.size_6xl,
    marginTop: -225.02,
    color: GlobalStyles.Color.blue_100,
    textAlign: "left",
    fontFamily: GlobalStyles.FontFamily.helvetica,
    lineHeight: 20,
    top: "50%",
    position: "absolute",
  },
  groupPosition: {
    height: 684,
    top: "50%",
    position: "absolute",
  },
  rectangleLayout: {
    marginTop: -132.43,
    height: 684,
    width: 326,
  },
  wrapperLayout1: {
    height: 14,
    position: "absolute",
  },
  wrapperPosition1: {
    left: 48,
    right: 12,
  },
  allEssentialFeaturesPosition: {
    marginTop: -7,
    left: 0,
    fontWeight: "700",
    color: GlobalStyles.Color.indigo_100,
    fontFamily: GlobalStyles.FontFamily.helvetica,
  },
  wrapperLayout: {
    height: 54,
    position: "absolute",
  },
  allTypo: {
    width: 267,
    fontSize: GlobalStyles.FontSize.size_base,
    textAlign: "left",
    top: "50%",
    position: "absolute",
  },
  wrapperPosition: {
    right: 9,
    left: 48,
  },
  cardsPosition: {
    marginTop: -27,
    left: 0,
    lineHeight: 20,
  },
  cardsTypo: {
    width: 270,
    fontSize: GlobalStyles.FontSize.size_base,
    textAlign: "left",
    top: "50%",
    position: "absolute",
  },
  comingWrapperLayout: {
    height: 34,
    position: "absolute",
  },
  invoicePosition: {
    marginTop: -17,
    left: 0,
    lineHeight: 20,
  },
  paymentsTypo: {
    width: 263,
    fontSize: GlobalStyles.FontSize.size_base,
    textAlign: "left",
    top: "50%",
    position: "absolute",
  },
  cardLayout: {
    height: 299,
    width: 198,
    top: 0,
    position: "absolute",
  },
  groupIconLayout: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  iconLayout: {
    height: 15,
    width: 15,
    position: "absolute",
  },
  iconLayout1: {
    top: 439,
    height: 15,
    width: 15,
  },
  iconPosition: {
    top: 967,
    height: 15,
    width: 15,
    position: "absolute",
  },
  helloTypo: {
    fontSize: GlobalStyles.FontSize.size_2xl,
    textAlign: "left",
    fontFamily: GlobalStyles.FontFamily.helvetica,
  },
  helloPosition: {
    top: 3,
    position: "absolute",
  },
  hello: {
    left: 142,
    color: GlobalStyles.Color.indigo_100,
    fontFamily: GlobalStyles.FontFamily.helvetica,
    lineHeight: 20,
  },
  hello1: {
    left: 516,
    color: GlobalStyles.Color.indigo_100,
    fontFamily: GlobalStyles.FontFamily.helvetica,
    lineHeight: 20,
  },
  hello2: {
    left: 102,
  },
  hello3: {
    left: 501,
  },
  groupChild: {
    marginTop: -342,
    borderRadius: GlobalStyles.Border.br_5xl,
    shadowColor: "rgba(1, 1, 253, 0.1)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 20,
    elevation: 20,
    shadowOpacity: 1,
    left: 0,
    right: 0,
    backgroundColor: GlobalStyles.Color.white,
  },
  allEssentialFeaturesWrapper: {
    top: 20,
  },
  paymentsDomestic1: {
    fontWeight: "700",
    color: GlobalStyles.Color.indigo_100,
    fontFamily: GlobalStyles.FontFamily.helvetica,
  },
  paymentsDomestic: {
    margin: GlobalStyles.Margin.margin_8xs,
  },
  transferInoutNo: {
    color: GlobalStyles.Color.gray_700,
    fontFamily: GlobalStyles.FontFamily.helvetica,
  },
  paymentsDomesticTransferWrapper: {
    top: 76,
  },
  cardsAddedExpenseCardsWitWrapper: {
    marginTop: -190,
    top: "50%",
  },
  accountingServicesInvoices: {
    marginTop: -47,
    left: 0,
    lineHeight: 20,
  },
  accountingServicesInvoicesWrapper: {
    marginTop: -115,
    height: 94,
    top: "50%",
    position: "absolute",
  },
  slackIntegrationComingSooWrapper: {
    marginTop: 1,
    top: "50%",
  },
  customerServicesOnlinephonWrapper: {
    marginTop: 57,
    top: "50%",
  },
  cashbackOnSavingsComingSWrapper: {
    marginTop: 149,
    top: "50%",
  },
  categoriseAndTagSpendingWrapper: {
    marginTop: 204,
    top: "50%",
  },
  cardPaymentsForeignExFeeWrapper: {
    bottom: 88,
  },
  invoicePaymentsForeignExFe: {
    fontWeight: "700",
    color: GlobalStyles.Color.indigo_100,
    fontFamily: GlobalStyles.FontFamily.helvetica,
  },
  invoicePaymentsForeignExFeWrapper: {
    bottom: 32,
  },
  plant5TreesAMonthWrapper: {
    marginTop: 113,
    top: "50%",
  },
  rectangleParent: {
    marginLeft: -349.5,
    width: 326,
    left: "50%",
  },
  allAdvanceFeatures: {
    marginTop: -322,
    left: 41,
    fontWeight: "700",
    color: GlobalStyles.Color.indigo_100,
    fontFamily: GlobalStyles.FontFamily.helvetica,
  },
  paymentsDomesticTransfer1: {
    marginTop: -286,
    left: 41,
    lineHeight: 20,
  },
  cardsAddedExpenseCardsWit1: {
    marginTop: -210,
    left: 41,
    lineHeight: 20,
  },
  businessToolKitFreeLogoD: {
    marginTop: -133,
    left: 41,
    lineHeight: 20,
  },
  customerServicesDedicatedA: {
    left: 41,
    marginTop: 1,
    lineHeight: 20,
  },
  geniusTelecoms10gbSimOnly: {
    marginTop: -37,
    left: 41,
    fontWeight: "700",
    color: GlobalStyles.Color.indigo_100,
    fontFamily: GlobalStyles.FontFamily.helvetica,
  },
  plant10TreesAMonth: {
    left: 41,
    marginTop: 57,
    fontWeight: "700",
    color: GlobalStyles.Color.indigo_100,
    fontFamily: GlobalStyles.FontFamily.helvetica,
  },
  simOnlyDataplanWith4gbDat: {
    marginTop: 93,
    left: 41,
    fontWeight: "700",
    color: GlobalStyles.Color.indigo_100,
    fontFamily: GlobalStyles.FontFamily.helvetica,
  },
  openApiAccess: {
    marginTop: 129,
    left: 41,
    fontWeight: "700",
    color: GlobalStyles.Color.indigo_100,
    fontFamily: GlobalStyles.FontFamily.helvetica,
  },
  multipleUserControl: {
    marginTop: 165,
    left: 41,
    fontWeight: "700",
    color: GlobalStyles.Color.indigo_100,
    fontFamily: GlobalStyles.FontFamily.helvetica,
  },
  automaticPayroll: {
    marginTop: 202,
    left: 41,
    fontWeight: "700",
    color: GlobalStyles.Color.indigo_100,
    fontFamily: GlobalStyles.FontFamily.helvetica,
  },
  cardPaymentsForeignExFee1: {
    marginTop: 238,
    left: 41,
    fontWeight: "700",
    color: GlobalStyles.Color.indigo_100,
    fontFamily: GlobalStyles.FontFamily.helvetica,
  },
  invoicePaymentsForeignExFe1: {
    fontWeight: "700",
    color: GlobalStyles.Color.indigo_100,
    fontFamily: GlobalStyles.FontFamily.helvetica,
  },
  invoicePaymentsForeignExFeContainer: {
    right: 23,
    bottom: 34,
    left: 41,
  },
  rectangleGroup: {
    width: 326,
    right: 0,
  },
  path33118Icon: {
    top: 0,
    left: 0,
  },
  groupInner: {
    height: "6.35%",
    width: "49.25%",
    top: "-62.13%",
    right: "53.94%",
    bottom: "155.78%",
    left: "-3.18%",
  },
  groupIcon: {
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
    backgroundColor: GlobalStyles.Color.gray_1700,
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
    top: "-2.33%",
    left: "-3.23%",
    fontSize: GlobalStyles.FontSize.size_15xl,
    letterSpacing: 5,
    color: GlobalStyles.Color.gray_1900,
    fontWeight: "700",
    fontFamily: GlobalStyles.FontFamily.helvetica,
  },
  bWrapper: {
    height: "28.81%",
    width: "31.36%",
    top: "80.69%",
    right: "65.22%",
    bottom: "-9.5%",
    left: "3.42%",
    opacity: 0.6,
    position: "absolute",
  },
  business: {
    top: "88.55%",
    left: "10.24%",
    fontSize: GlobalStyles.FontSize.size_sm,
    letterSpacing: 0,
    color: GlobalStyles.Color.white,
    fontWeight: "700",
    fontFamily: GlobalStyles.FontFamily.helvetica,
  },
  groupParent: {
    top: 0,
    left: 0,
    position: "absolute",
  },
  groupChild1: {
    top: 17,
    right: 15,
    width: 28,
    height: 30,
    position: "absolute",
  },
  groupChild2: {
    right: 16,
    bottom: 21,
    width: 48,
    height: 41,
    position: "absolute",
  },
  groupChild3: {
    marginLeft: 30.69,
    top: 21,
    width: 17,
    height: 22,
    left: "50%",
    position: "absolute",
  },
  card1: {
    marginLeft: -285.5,
    left: "50%",
  },
  card11: {
    right: 64,
  },
  iconAwesomeCheckCircle: {
    left: 19,
  },
  iconAwesomeCheckCircle1: {
    left: 390,
  },
  iconAwesomeCheckCircle2: {
    top: 476,
    left: 390,
  },
  iconAwesomeCheckCircle3: {
    top: 551,
    left: 390,
  },
  iconAwesomeCheckCircle4: {
    top: 629,
    left: 390,
  },
  iconAwesomeCheckCircle5: {
    top: 724,
    left: 390,
  },
  iconAwesomeCheckCircle6: {
    top: 762,
    left: 390,
  },
  iconAwesomeCheckCircle7: {
    top: 819,
    left: 390,
  },
  iconAwesomeCheckCircle8: {
    top: 854,
    left: 390,
  },
  iconAwesomeCheckCircle9: {
    top: 891,
    left: 390,
  },
  iconAwesomeCheckCircle10: {
    top: 926,
    left: 390,
  },
  iconAwesomeCheckCircle11: {
    left: 390,
  },
  iconAwesomeCheckCircle12: {
    top: 999,
    left: 390,
  },
  iconAwesomeCheckCircle13: {
    top: 1035,
    left: 390,
  },
  iconAwesomeCheckCircle14: {
    top: 494,
    left: 19,
  },
  iconAwesomeCheckCircle15: {
    top: 571,
    left: 19,
  },
  iconAwesomeCheckCircle16: {
    top: 648,
    left: 19,
  },
  iconAwesomeCheckCircle17: {
    top: 764,
    left: 19,
  },
  iconAwesomeCheckCircle18: {
    top: 816,
    left: 19,
  },
  iconAwesomeCheckCircle19: {
    top: 873,
    left: 19,
  },
  iconAwesomeCheckCircle20: {
    top: 910,
    left: 19,
  },
  iconAwesomeCheckCircle21: {
    left: 19,
  },
  iconAwesomeCheckCircle22: {
    top: 1004,
    left: 19,
  },
  iconAwesomeCheckCircle23: {
    top: 1038,
    left: 19,
  },
  component23710: {
    top: 134,
    left: 26,
    position: "absolute",
  },
  hello4: {
    left: 27,
    fontSize: GlobalStyles.FontSize.size_8xl,
    fontFamily: GlobalStyles.FontFamily.typoGrotesk,
    top: 0,
    fontWeight: "700",
    color: GlobalStyles.Color.indigo_100,
  },
  lineView: {
    top: 102,
    left: -1,
    borderStyle: "solid",
    borderColor: "#fff",
    borderTopWidth: 1,
    width: 376,
    height: 2,
    position: "absolute",
  },
  groupChild11: {
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
    left: 0,
    right: 0,
    position: "absolute",
  },
  hello5: {
    top: "40%",
    left: "37.12%",
    fontSize: GlobalStyles.FontSize.size_lg,
    textTransform: "uppercase",
    color: GlobalStyles.Color.black,
    fontFamily: GlobalStyles.FontFamily.helvetica,
  },
  groupPressable: {
    marginTop: -24.32,
    left: 25,
    height: 60,
    width: 326,
    top: "50%",
    position: "absolute",
  },
  hello6: {
    left: 0,
  },
  premium: {
    marginLeft: -16.5,
    color: GlobalStyles.Color.gray_700,
  },
  hello7: {
    left: "50%",
  },
  hello8: {
    right: -1,
    color: GlobalStyles.Color.gray_700,
  },
  component2356: {
    top: 66,
    left: 29,
    width: 319,
    height: 21,
    position: "absolute",
  },
  component23710Parent: {
    width: 725,
    height: 1237,
  },
  chooseCardsStandard2: {
    flex: 1,
    paddingLeft: GlobalStyles.Padding.padding_12xs,
    paddingTop: GlobalStyles.Padding.padding_5xl,
    alignItems: "flex-end",
    width: "100%",
    backgroundColor: GlobalStyles.Color.white,
  },
});

export default ChooseCardsStandard2;
