import * as React from "react";
import { Text, StyleSheet, View, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import GlobalStyles from "../GlobalStyles";

const Account = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.account}>
      <Text
        style={[styles.history, styles.mt66, styles.ml56, styles.historyTypo]}
      >
        Carbon Spending
      </Text>
      <View style={[styles.component3731, styles.mt16_11, styles.ml25]}>
        <View
          style={[
            styles.component3731Child,
            styles.vectorWrapperShadowBox,
            styles.sendMoneyParentShadowBox,
          ]}
        />
        <View style={styles.component3731Item} />
        <Image
          style={styles.component3731Inner}
          resizeMode="cover"
          source={require("../assets/group-30387.png")}
        />
        <Image
          style={[styles.rectangleIcon, styles.rectangleIconPosition]}
          resizeMode="cover"
          source={require("../assets/rectangle-6035.png")}
        />
        <Text style={[styles.hello, styles.helloTypo5]}>2400</Text>
        <Text style={[styles.hello1, styles.helloTypo4]}>Kg of CO2</Text>
        <Text style={[styles.hello2, styles.helloTypo4]}>Estimated</Text>
        <Image
          style={[styles.component3731Child1, styles.rectangleIconPosition]}
          resizeMode="cover"
          source={require("../assets/rectangle-6033.png")}
        />
        <View style={[styles.lineView, styles.lineViewPosition]} />
        <View style={[styles.component3731Child2, styles.lineViewPosition]} />
        <View style={[styles.groupParent, styles.statusBarPosition]}>
          <View style={[styles.helloParent, styles.groupParentPosition]}>
            <Text
              style={[styles.hello3, styles.helloTypo3, styles.helloPosition]}
            >{`Health & Beauty`}</Text>
            <View style={[styles.groupChild, styles.groupChildPosition]} />
            <View style={[styles.groupItem, styles.groupChildPosition]} />
            <Image
              style={[styles.iconFeatherHeart, styles.iconPosition2]}
              resizeMode="cover"
              source={require("../assets/icon-featherheart.png")}
            />
            <Text style={styles.hello4}>254</Text>
          </View>
          <View style={[styles.helloGroup, styles.groupParentPosition]}>
            <Text
              style={[styles.hello3, styles.helloTypo3, styles.helloPosition]}
            >{`Food & Beverages`}</Text>
            <View style={[styles.groupChild, styles.groupChildPosition]} />
            <View style={[styles.rectangleView, styles.groupChildPosition]} />
            <Text style={styles.hello4}>254</Text>
            <Image
              style={[styles.layer2Icon, styles.iconPosition2]}
              resizeMode="cover"
              source={require("../assets/layer-2.png")}
            />
          </View>
          <View style={[styles.helloContainer, styles.groupParentPosition]}>
            <Text
              style={[styles.hello3, styles.helloTypo3, styles.helloPosition]}
            >
              House
            </Text>
            <View style={[styles.groupChild, styles.groupChildPosition]} />
            <View style={[styles.groupChild2, styles.groupChildPosition]} />
            <Text style={styles.hello4}>254</Text>
            <Image
              style={[styles.house1Icon, styles.iconPosition1]}
              resizeMode="cover"
              source={require("../assets/house-1.png")}
            />
          </View>
          <View style={[styles.groupView, styles.groupParentPosition]}>
            <Text
              style={[styles.hello3, styles.helloTypo3, styles.helloPosition]}
            >
              Shopping
            </Text>
            <View style={[styles.groupChild, styles.groupChildPosition]} />
            <View style={[styles.groupChild4, styles.groupChildPosition]} />
            <Text style={styles.hello4}>254</Text>
            <Image
              style={[styles.shoppingIcon, styles.iconPosition1]}
              resizeMode="cover"
              source={require("../assets/shopping.png")}
            />
          </View>
          <View style={[styles.helloParent1, styles.groupParentPosition]}>
            <Text
              style={[styles.hello3, styles.helloTypo3, styles.helloPosition]}
            >
              Transport
            </Text>
            <View style={[styles.groupChild, styles.groupChildPosition]} />
            <View style={[styles.groupChild6, styles.groupChildPosition]} />
            <Text style={styles.hello4}>254</Text>
            <Image
              style={styles.transportationIcon}
              resizeMode="cover"
              source={require("../assets/transportation.png")}
            />
          </View>
        </View>
        <View style={styles.component3731Child3} />
        <View style={[styles.helloWrapper, styles.helloLayout]}>
          <Text
            style={[styles.hello13, styles.helloPosition, styles.helloTypo5]}
          >
            5
          </Text>
        </View>
        <View style={[styles.helloFrame, styles.helloLayout]}>
          <Text
            style={[styles.hello13, styles.helloPosition, styles.helloTypo5]}
          >
            2
          </Text>
        </View>
        <Text style={[styles.totalAssets, styles.totalAssetsPosition]}>
          <Text style={styles.total}>
            <Text style={styles.total1}>{`Total `}</Text>
          </Text>
          <Text style={styles.total}>
            <Text style={styles.assets1}>Assets</Text>
          </Text>
        </Text>
        <Text style={[styles.carbonyteToken, styles.totalAssetsPosition]}>
          <Text style={styles.total}>
            <Text style={styles.total1}>{`Carbonyte `}</Text>
          </Text>
          <Text style={styles.total}>
            <Text style={styles.assets1}>{`Token `}</Text>
          </Text>
        </Text>
        <View style={styles.component3731Child4} />
        <View style={styles.helloParent2}>
          <Text style={[styles.hello15, styles.helloTypo2]}>Assets</Text>
          <Text style={[styles.hello16, styles.helloTypo2]}>Token</Text>
          <Text
            style={[styles.drylandsProtectionKasigauW, styles.protectionTypo]}
          >
            <Text
              style={styles.drylandsProtectionKasigau}
            >{`Drylands Protection, Kasigau Wildlife Corridor `}</Text>
            <Text style={styles.assets1}>£19 / Tonne</Text>
          </Text>
          <Text
            style={[styles.tropicalForestProtectionKe, styles.protectionTypo]}
          >
            <Text
              style={styles.drylandsProtectionKasigau}
            >{`Tropical Forest Protection, Keo Seima `}</Text>
            <Text style={styles.assets1}>£14 / Tree</Text>
          </Text>
          <Text style={[styles.hello17, styles.helloTypo1]}>1</Text>
          <Text style={[styles.hello18, styles.helloTypo1]}>1</Text>
          <Text style={[styles.hello19, styles.helloTypo3]}>
            (1 Tonne = 1 CO2 Token)
          </Text>
        </View>
      </View>
      <Text
        style={[
          styles.history,
          styles.mt242_11,
          styles.ml68,
          styles.historyTypo,
        ]}
      >
        Carbon Assects
      </Text>
      <Image
        style={[styles.accountChild, styles.mt_22_89, styles.ml25]}
        resizeMode="cover"
        source={require("../assets/group-30403.png")}
      />
      <Pressable
        style={[
          styles.sendMoneyParent,
          styles.mt24_11,
          styles.ml110,
          styles.vectorWrapperShadowBox,
          styles.sendMoneyParentShadowBox,
        ]}
        onPress={() => navigation.navigate("SendMoney")}
      >
        <Text style={[styles.sendMoney, styles.myCardsPosition]}>
          Send Money
        </Text>
        <Image
          style={styles.send1Icon}
          resizeMode="cover"
          source={require("../assets/send-1.png")}
        />
      </Pressable>
      <View
        style={[
          styles.sendMoneyParent,
          styles.mt_89_89,
          styles.ml190,
          styles.vectorWrapperShadowBox,
          styles.sendMoneyParentShadowBox,
        ]}
      >
        <Text style={[styles.bankTransfer, styles.myCardsPosition]}>
          Bank Transfer
        </Text>
        <Image
          style={[styles.transfer1Icon, styles.iconPosition]}
          resizeMode="cover"
          source={require("../assets/transfer-1.png")}
        />
      </View>
      <Pressable
        style={[
          styles.sendMoneyParent,
          styles.mt_89_89,
          styles.ml271,
          styles.vectorWrapperShadowBox,
          styles.sendMoneyParentShadowBox,
        ]}
        onPress={() => navigation.navigate("MyCards")}
      >
        <Text style={[styles.myCards, styles.myCardsPosition]}>My Cards</Text>
      </Pressable>
      <Pressable
        style={[
          styles.sendMoneyParent,
          styles.mt_89_89,
          styles.ml30,
          styles.vectorWrapperShadowBox,
          styles.sendMoneyParentShadowBox,
        ]}
        onPress={() => navigation.navigate("AddFunds")}
      >
        <Text style={[styles.addFunds, styles.myCardsPosition]}>Add Funds</Text>
        <Image
          style={[styles.addIcon, styles.iconPosition]}
          resizeMode="cover"
          source={require("../assets/add.png")}
        />
      </Pressable>
      <View style={[styles.historyParent, styles.mt42_11, styles.ml35]}>
        <Text style={[styles.history2, styles.historyTypo]}>
          Recent Transactions
        </Text>
        <Image
          style={styles.path23663Icon}
          resizeMode="cover"
          source={require("../assets/path-23663.png")}
        />
        <View style={styles.component2201}>
          <View style={styles.groupContainer}>
            <View style={[styles.groupParent1, styles.groupParentShadowBox1]}>
              <View style={styles.lanceBogrolParent}>
                <Text style={styles.lanceBogrol}>Grocery Market</Text>
                <Text style={[styles.moneyTransfer, styles.helloTypo3]}>
                  <Text style={styles.total}>September 22, 2022</Text>
                  <Text style={styles.total}>12:06 PM</Text>
                </Text>
              </View>
              <Text style={[styles.text, styles.textTypo, styles.textColor]}>
                - £70.00
              </Text>
              <Image
                style={styles.maskGroup14}
                resizeMode="cover"
                source={require("../assets/mask-group-14.png")}
              />
            </View>
            <View style={[styles.groupParent2, styles.groupParentShadowBox]}>
              <View style={[styles.lanceBogrolGroup, styles.lancePosition]}>
                <Text style={styles.lanceBogrol}>Grocery Market</Text>
                <Text style={[styles.moneyTransfer, styles.helloTypo3]}>
                  <Text style={styles.total}>September 22, 2022</Text>
                  <Text style={styles.total}>12:06 PM</Text>
                </Text>
              </View>
              <Text style={[styles.text, styles.textTypo, styles.textColor]}>
                - £70.00
              </Text>
              <Image
                style={styles.maskGroup141}
                resizeMode="cover"
                source={require("../assets/mask-group-141.png")}
              />
            </View>
            <View style={[styles.groupParent3, styles.groupParentShadowBox1]}>
              <View style={[styles.lanceBogrolContainer, styles.lancePosition]}>
                <Text style={styles.lanceBogrol}>Grocery Market</Text>
                <Text style={[styles.moneyTransfer, styles.helloTypo3]}>
                  <Text style={styles.total}>September 22, 2022</Text>
                  <Text style={styles.total}>12:06 PM</Text>
                </Text>
              </View>
              <Text style={[styles.text2, styles.textTypo, styles.textColor]}>
                - £70.00
              </Text>
              <Image
                style={styles.maskGroup141}
                resizeMode="cover"
                source={require("../assets/mask-group-141.png")}
              />
            </View>
            <View style={[styles.groupParent4, styles.groupParentShadowBox]}>
              <View style={[styles.lanceBogrolParent1, styles.lancePosition]}>
                <Text style={styles.lanceBogrol}>Spotify Music</Text>
                <Text style={[styles.moneyTransfer, styles.helloTypo3]}>
                  <Text style={styles.total}>September 22, 2022</Text>
                  <Text style={styles.total}>12:06 PM</Text>
                </Text>
              </View>
              <Text style={[styles.text2, styles.textTypo, styles.textColor]}>
                - £50.00
              </Text>
              <Image
                style={[styles.maskGroup16, styles.groupPosition]}
                resizeMode="cover"
                source={require("../assets/mask-group-16.png")}
              />
            </View>
            <View style={[styles.groupParent5, styles.groupParentShadowBox]}>
              <View style={[styles.lanceBogrolParent1, styles.lancePosition]}>
                <Text style={styles.lanceBogrol}>Lance Bogrol</Text>
                <Text style={[styles.moneyTransfer, styles.helloTypo3]}>
                  <Text style={styles.total}>September 22, 2022</Text>
                  <Text style={styles.total}>12:06 PM</Text>
                </Text>
              </View>
              <Text style={[styles.text4, styles.textTypo]}>+ £350.00</Text>
              <Image
                style={[styles.groupChild7, styles.groupPosition]}
                resizeMode="cover"
                source={require("../assets/rectangle-502.png")}
              />
            </View>
          </View>
        </View>
      </View>
      <Image
        style={[styles.cardIcon, styles.mt_55_89, styles.ml299]}
        resizeMode="cover"
        source={require("../assets/card.png")}
      />
      <Image
        style={[styles.accountChild, styles.mt_20_89, styles.ml37]}
        resizeMode="cover"
        source={require("../assets/group-31984.png")}
      />
      <View style={[styles.homeIndicator, styles.mt_528_89, styles.ml120]} />
      <View
        style={[
          styles.helloParent3,
          styles.mt41_11,
          styles.helloParent3Layout,
          styles.helloParent3ShadowBox,
        ]}
      >
        <Text style={styles.hello20}>
          <Text style={styles.text5}>£</Text>
          <Text style={styles.text6}>0.00</Text>
        </Text>
        <Text style={styles.totalWalletBalance}>Total Wallet Balance</Text>
        <Text style={styles.july192022}>July 19, 2022</Text>
      </View>
      <View
        style={[
          styles.accountInner,
          styles.mt_2_8900000000000006,
          styles.ml10,
          styles.helloParent3ShadowBox,
        ]}
      />
      <View style={[styles.accountChild1, styles.mt8_11, styles.ml8]} />
      <Text
        style={[
          styles.business,
          styles.mt15_11,
          styles.ml244,
          styles.businessTypo,
        ]}
      >
        Business
      </Text>
      <Text
        style={[
          styles.personal,
          styles.mt_15_89,
          styles.ml66,
          styles.businessTypo,
        ]}
      >
        Personal
      </Text>
      <View
        style={[
          styles.accountChild2,
          styles.mt35_11,
          styles.rectangleShadowBox,
          styles.rectangleShadowBox1,
          styles.helloParent3Layout,
        ]}
      />
      <Text
        style={[
          styles.youAreAlmostReadyWithYour,
          styles.mt_61_89,
          styles.ml156,
        ]}
      >
        <Text
          style={styles.youAreAlmost}
        >{`You are almost ready with your account, Avail more benefits by choosing our card plans  `}</Text>
        <Text style={styles.text7}>
          <Text style={styles.drylandsProtectionKasigau} />
          <Text />
        </Text>
      </Text>
      <Text
        style={[styles.congratulations, styles.mt_107_89, styles.ml157]}
      >{`Congratulations! `}</Text>
      <Text
        style={[styles.applyNow, styles.mt13_11, styles.ml157]}
      >{`Apply Now > `}</Text>
      <View style={[styles.path33217Parent, styles.mt_15_89, styles.ml54]}>
        <Image
          style={[styles.path33217Icon, styles.groupIconLayout]}
          resizeMode="cover"
          source={require("../assets/path-33217.png")}
        />
        <Text style={[styles.text9, styles.historyTypo]}>70%</Text>
      </View>
      <View style={[styles.component21225, styles.mt34_11, styles.ml44]}>
        <Text style={[styles.history3, styles.history3Typo]}>Account</Text>
        <Pressable
          style={styles.history4}
          onPress={() => navigation.navigate("Analytics")}
        >
          <Text style={[styles.analysis, styles.history3Typo]}>Analysis</Text>
        </Pressable>
        <Pressable
          style={styles.history5}
          onPress={() => navigation.navigate("Carbon")}
        >
          <Text style={[styles.analysis, styles.history3Typo]}>Carbon</Text>
        </Pressable>
        <Pressable
          style={styles.history6}
          onPress={() => navigation.navigate("Settings")}
        >
          <Text style={[styles.analysis, styles.history3Typo]}>Profile</Text>
        </Pressable>
      </View>
      <View style={[styles.groupParent6, styles.mt37_11]}>
        <View
          style={[
            styles.vectorWrapper,
            styles.vectorPosition,
            styles.vectorWrapperShadowBox,
          ]}
        >
          <Image
            style={styles.polygonIcon}
            resizeMode="cover"
            source={require("../assets/polygon-5.png")}
          />
        </View>
        <View style={[styles.vectorContainer, styles.vectorPosition]}>
          <Image
            style={styles.polygonIcon}
            resizeMode="cover"
            source={require("../assets/polygon-5.png")}
          />
        </View>
        <Text style={[styles.referAndEarnCarbonTokens, styles.helloTypo]}>
          <Text style={styles.total}>
            <Text style={styles.assets1}>Refer and Earn</Text>
          </Text>
          <Text style={styles.total}>
            <Text style={styles.drylandsProtectionKasigau}>carbon Tokens</Text>
          </Text>
        </Text>
        <Text style={styles.referNow}>{`Refer Now >`}</Text>
        <Image
          style={[styles.groupIcon, styles.groupIconLayout]}
          resizeMode="cover"
          source={require("../assets/group-32017.png")}
        />
      </View>
      <Pressable
        style={[
          styles.groupPressable,
          styles.mt290_11,
          styles.rectangleShadowBox,
        ]}
        onPress={() => navigation.navigate("ChooseCardsStandard5")}
      >
        <Text style={[styles.hello21, styles.helloTypo, styles.historyTypo]}>
          Congratulations!
        </Text>
        <Text style={[styles.hello22, styles.helloTypo, styles.historyTypo]}>
          View more
        </Text>
        <Text style={styles.hello23}>
          <Text style={styles.total}>You have planted 5 trees</Text>
          <Text style={styles.total}>{`with Advance Card purchase  `}</Text>
        </Text>
        <Image
          style={[styles.groupChild9, styles.groupIconLayout]}
          resizeMode="cover"
          source={require("../assets/group-32066.png")}
        />
        <Image
          style={[styles.image88Icon, styles.groupIconLayout]}
          resizeMode="cover"
          source={require("../assets/image-88.png")}
        />
      </Pressable>
      <View style={[styles.statusBarBlack, styles.mt15_11]}>
        <View
          style={[
            styles.rectangle,
            styles.rectangleShadowBox,
            styles.rectangleShadowBox1,
          ]}
        />
        <View style={[styles.statusBar, styles.statusBarPosition]}>
          <View style={styles.groupContainer}>
            <Text style={[styles.text10, styles.helloTypo]}>9:41</Text>
            <Image
              style={styles.iconAwesomeBatteryThreeQua}
              resizeMode="cover"
              source={require("../assets/icon-awesomebatterythreequarters.png")}
            />
            <Image
              style={styles.iconAwesomeWifi}
              resizeMode="cover"
              source={require("../assets/icon-awesomewifi.png")}
            />
            <View style={[styles.groupChild10, styles.groupChildLayout]} />
            <View style={[styles.groupChild11, styles.groupChildLayout]} />
            <View style={[styles.groupChild12, styles.groupChildLayout]} />
            <View style={[styles.groupChild13, styles.groupChildLayout]} />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mt66: {
    marginTop: GlobalStyles.Margin.margin_30xl,
  },
  ml56: {
    marginLeft: GlobalStyles.Margin.margin_25xl,
  },
  mt16_11: {
    marginTop: 16.11,
  },
  ml25: {
    marginLeft: GlobalStyles.Margin.margin_7xs,
  },
  mt242_11: {
    marginTop: 242.11,
  },
  ml68: {
    marginLeft: GlobalStyles.Margin.margin_32xl,
  },
  mt_22_89: {
    marginTop: -22.89,
  },
  mt24_11: {
    marginTop: 24.11,
  },
  ml110: {
    marginLeft: GlobalStyles.Margin.margin_49xl,
  },
  mt_89_89: {
    marginTop: GlobalStyles.Margin.margin_72xs,
  },
  ml190: {
    marginLeft: 190,
  },
  ml271: {
    marginLeft: 271,
  },
  ml30: {
    marginLeft: GlobalStyles.Margin.margin_sm,
  },
  mt42_11: {
    marginTop: 42.11,
  },
  ml35: {
    marginLeft: GlobalStyles.Margin.margin_5xl,
  },
  mt_55_89: {
    marginTop: -55.89,
  },
  ml299: {
    marginLeft: 299,
  },
  mt_20_89: {
    marginTop: -20.89,
  },
  ml37: {
    marginLeft: GlobalStyles.Margin.margin_7xl,
  },
  mt_528_89: {
    marginTop: -528.89,
  },
  ml120: {
    marginLeft: GlobalStyles.Margin.margin_53xl,
  },
  mt41_11: {
    marginTop: 41.11,
  },
  mt_2_8900000000000006: {
    marginTop: -2.8900000000000006,
  },
  ml10: {
    marginLeft: GlobalStyles.Margin.margin_24xs,
  },
  mt8_11: {
    marginTop: 8.11,
  },
  ml8: {
    marginLeft: GlobalStyles.Margin.margin_26xs,
  },
  mt15_11: {
    marginTop: GlobalStyles.Margin.margin_19xs,
  },
  ml244: {
    marginLeft: GlobalStyles.Margin.margin_84xl,
  },
  mt_15_89: {
    marginTop: GlobalStyles.Margin.margin_42xs,
  },
  ml66: {
    marginLeft: GlobalStyles.Margin.margin_30xl,
  },
  mt35_11: {
    marginTop: 35.11,
  },
  mt_61_89: {
    marginTop: -61.89,
  },
  ml156: {
    marginLeft: 156,
  },
  mt_107_89: {
    marginTop: -107.89,
  },
  ml157: {
    marginLeft: GlobalStyles.Margin.margin_63xl,
  },
  mt13_11: {
    marginTop: 13.11,
  },
  ml54: {
    marginLeft: GlobalStyles.Margin.margin_23xl,
  },
  mt34_11: {
    marginTop: 34.11,
  },
  ml44: {
    marginLeft: GlobalStyles.Margin.margin_15xl,
  },
  mt37_11: {
    marginTop: 37.11,
  },
  mt290_11: {
    marginTop: 290.11,
  },
  historyTypo: {
    fontFamily: GlobalStyles.FontFamily.typoGrotesk,
    textAlign: "left",
    fontWeight: "700",
  },
  vectorWrapperShadowBox: {
    shadowOpacity: 1,
    elevation: 20,
    shadowRadius: 20,
    shadowOffset: {
      width: 0,
      height: 0,
    },
  },
  sendMoneyParentShadowBox: {
    shadowColor: "rgba(1, 1, 253, 0.1)",
    elevation: 20,
    shadowRadius: 20,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    backgroundColor: GlobalStyles.Color.white,
    borderRadius: GlobalStyles.Border.br_lg,
  },
  rectangleIconPosition: {
    opacity: 0.1,
    overflow: "hidden",
    maxWidth: "100%",
    left: 0,
    right: 0,
    top: 22,
    position: "absolute",
  },
  helloTypo5: {
    fontSize: GlobalStyles.FontSize.size_11xl,
    fontFamily: GlobalStyles.FontFamily.helvetica,
    position: "absolute",
    textAlign: "left",
    fontWeight: "700",
  },
  helloTypo4: {
    left: "33.01%",
    fontSize: GlobalStyles.FontSize.size_xs,
    fontFamily: GlobalStyles.FontFamily.helvetica,
    position: "absolute",
    textAlign: "left",
    color: GlobalStyles.Color.indigo,
  },
  lineViewPosition: {
    borderTopWidth: 1,
    borderColor: "#fff",
    borderStyle: "solid",
    left: 44,
    right: 45,
    height: 2,
    position: "absolute",
  },
  statusBarPosition: {
    right: 16,
    position: "absolute",
  },
  groupParentPosition: {
    height: 45,
    left: 0,
    right: 0,
    position: "absolute",
  },
  helloTypo3: {
    fontSize: GlobalStyles.FontSize.size_3xs,
    fontFamily: GlobalStyles.FontFamily.helvetica,
    position: "absolute",
    textAlign: "left",
  },
  helloPosition: {
    top: "0%",
    left: "0%",
  },
  groupChildPosition: {
    height: 30,
    borderRadius: GlobalStyles.Border.br_3xl,
    left: 0,
    bottom: 0,
    position: "absolute",
  },
  iconPosition2: {
    left: 13,
    top: "50%",
    position: "absolute",
  },
  iconPosition1: {
    height: 10,
    top: "50%",
    position: "absolute",
  },
  helloLayout: {
    height: 41,
    bottom: 183,
    width: 20,
    position: "absolute",
  },
  totalAssetsPosition: {
    bottom: 190,
    fontSize: GlobalStyles.FontSize.size_base,
    left: "50%",
    position: "absolute",
    textAlign: "left",
    color: GlobalStyles.Color.indigo,
  },
  helloTypo2: {
    lineHeight: 14,
    top: "0%",
    fontSize: GlobalStyles.FontSize.size_xs,
    fontFamily: GlobalStyles.FontFamily.helvetica,
    position: "absolute",
    textAlign: "left",
    color: GlobalStyles.Color.indigo,
    fontWeight: "700",
  },
  protectionTypo: {
    opacity: 0.77,
    fontSize: GlobalStyles.FontSize.size_xs,
    left: 0,
    position: "absolute",
    textAlign: "left",
    color: GlobalStyles.Color.indigo,
  },
  helloTypo1: {
    lineHeight: 15,
    fontSize: GlobalStyles.FontSize.size_sm,
    left: "97.32%",
    fontFamily: GlobalStyles.FontFamily.helvetica,
    position: "absolute",
    textAlign: "left",
    color: GlobalStyles.Color.indigo,
  },
  myCardsPosition: {
    marginTop: 16,
    top: "50%",
    fontSize: GlobalStyles.FontSize.size_3xs,
    fontFamily: GlobalStyles.FontFamily.helvetica,
    position: "absolute",
    textAlign: "left",
    color: GlobalStyles.Color.indigo,
  },
  iconPosition: {
    marginTop: -14,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  groupParentShadowBox1: {
    height: 66,
    borderRadius: GlobalStyles.Border.br_4xl,
    shadowOpacity: 1,
    elevation: 20,
    shadowRadius: 20,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(1, 1, 253, 0.1)",
    backgroundColor: GlobalStyles.Color.white,
    position: "absolute",
  },
  textTypo: {
    textAlign: "right",
    marginTop: -8,
    fontSize: GlobalStyles.FontSize.size_base,
    top: "50%",
    fontFamily: GlobalStyles.FontFamily.helvetica,
    position: "absolute",
    fontWeight: "700",
    letterSpacing: 1,
  },
  textColor: {
    color: GlobalStyles.Color.brown,
    textAlign: "right",
    marginTop: -8,
  },
  groupParentShadowBox: {
    height: 64,
    borderRadius: GlobalStyles.Border.br_4xl,
    shadowOpacity: 1,
    elevation: 20,
    shadowRadius: 20,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(1, 1, 253, 0.1)",
    backgroundColor: GlobalStyles.Color.white,
    left: 0,
    right: 0,
    position: "absolute",
  },
  lancePosition: {
    marginLeft: -96.5,
    width: 105,
    height: 37,
    left: "50%",
    position: "absolute",
  },
  groupPosition: {
    left: 14,
    height: 34,
    width: 34,
    top: "50%",
    position: "absolute",
  },
  helloParent3Layout: {
    width: 327,
    alignSelf: "center",
    borderRadius: GlobalStyles.Border.br_lg,
  },
  helloParent3ShadowBox: {
    shadowColor: "rgba(1, 1, 253, 0.05)",
    shadowOpacity: 1,
    elevation: 20,
    shadowRadius: 20,
    shadowOffset: {
      width: 0,
      height: 0,
    },
  },
  businessTypo: {
    textTransform: "capitalize",
    fontSize: GlobalStyles.FontSize.size_base,
    fontFamily: GlobalStyles.FontFamily.helvetica,
    textAlign: "left",
  },
  rectangleShadowBox: {
    elevation: 6,
    shadowRadius: 6,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
  },
  rectangleShadowBox1: {
    shadowColor: "rgba(0, 0, 0, 0.05)",
    shadowRadius: 6,
  },
  groupIconLayout: {
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  history3Typo: {
    color: GlobalStyles.Color.gray_800,
    fontSize: GlobalStyles.FontSize.size_xl,
    marginTop: -8.5,
    fontFamily: GlobalStyles.FontFamily.helvetica,
    textAlign: "left",
    letterSpacing: 1,
  },
  vectorPosition: {
    backgroundColor: GlobalStyles.Color.beige_100,
    right: 14,
    left: 14,
    borderRadius: GlobalStyles.Border.br_4xl,
    position: "absolute",
  },
  helloTypo: {
    fontSize: GlobalStyles.FontSize.size_4xl,
    position: "absolute",
  },
  groupChildLayout: {
    width: 3,
    backgroundColor: GlobalStyles.Color.gray_1400,
    borderRadius: GlobalStyles.Border.br_7xs,
    bottom: 5,
    position: "absolute",
  },
  history: {
    textAlign: "left",
    color: GlobalStyles.Color.indigo,
    letterSpacing: 1,
    fontSize: GlobalStyles.FontSize.size_2xl,
  },
  component3731Child: {
    left: 0,
    bottom: 0,
    right: 0,
    top: 22,
    shadowColor: "rgba(1, 1, 253, 0.1)",
    position: "absolute",
  },
  component3731Item: {
    shadowRadius: 10,
    elevation: 10,
    height: 84,
    borderRadius: GlobalStyles.Border.br_4xl,
    top: 0,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(1, 1, 253, 0.1)",
    backgroundColor: GlobalStyles.Color.white,
    left: 0,
    right: 0,
    position: "absolute",
  },
  component3731Inner: {
    right: 20,
    width: 50,
    height: 47,
    top: 15,
    position: "absolute",
  },
  rectangleIcon: {
    bottom: 319,
    maxHeight: "100%",
  },
  hello: {
    top: "3.12%",
    left: "4.62%",
    color: GlobalStyles.Color.blue,
    fontFamily: GlobalStyles.FontFamily.helvetica,
  },
  hello1: {
    top: "5.88%",
    fontSize: GlobalStyles.FontSize.size_xs,
    fontWeight: "700",
  },
  hello2: {
    top: "3.96%",
    fontSize: GlobalStyles.FontSize.size_xs,
  },
  component3731Child1: {
    height: 84,
  },
  lineView: {
    bottom: 178,
    height: 2,
  },
  component3731Child2: {
    bottom: 209,
    height: 2,
  },
  hello3: {
    color: GlobalStyles.Color.gray_900,
    left: "0%",
  },
  groupChild: {
    right: 0,
    backgroundColor: GlobalStyles.Color.gray_300,
  },
  groupItem: {
    backgroundColor: GlobalStyles.Color.orange_200,
    width: 213,
  },
  iconFeatherHeart: {
    marginTop: 2.95,
    width: 14,
    height: 13,
  },
  hello4: {
    top: "58.68%",
    left: "92.58%",
    fontSize: GlobalStyles.FontSize.size_9xs,
    color: GlobalStyles.Color.gray_1500,
    textAlign: "center",
    fontFamily: GlobalStyles.FontFamily.helvetica,
    position: "absolute",
  },
  helloParent: {
    top: 0,
  },
  rectangleView: {
    backgroundColor: GlobalStyles.Color.orange_100,
    width: 191,
  },
  layer2Icon: {
    marginTop: 1.8,
    width: 12,
    height: 12,
  },
  helloGroup: {
    marginTop: -79.6,
    top: "50%",
  },
  groupChild2: {
    backgroundColor: GlobalStyles.Color.violet_100,
    width: 125,
  },
  house1Icon: {
    marginTop: 2.98,
    width: 11,
    left: 12,
    height: 10,
  },
  helloContainer: {
    marginTop: -22.7,
    top: "50%",
  },
  groupChild4: {
    backgroundColor: GlobalStyles.Color.violet_200,
    width: 72,
  },
  shoppingIcon: {
    marginTop: 3.15,
    width: 10,
    left: 10,
  },
  groupView: {
    marginTop: 34.2,
    top: "50%",
  },
  groupChild6: {
    backgroundColor: GlobalStyles.Color.green_100,
    width: 47,
  },
  transportationIcon: {
    marginTop: 3.45,
    left: 11,
    height: 9,
    width: 11,
    top: "50%",
    position: "absolute",
  },
  helloParent1: {
    bottom: 0,
  },
  groupParent: {
    top: 123,
    width: 293,
    height: 273,
  },
  component3731Child3: {
    right: 21,
    bottom: 165,
    left: 17,
    borderRadius: GlobalStyles.Border.br_6xl,
    height: 77,
    position: "absolute",
    backgroundColor: GlobalStyles.Color.gray_300,
  },
  hello13: {
    left: "0%",
    fontFamily: GlobalStyles.FontFamily.helvetica,
    color: GlobalStyles.Color.indigo,
  },
  helloWrapper: {
    marginLeft: 20.66,
    left: "50%",
  },
  helloFrame: {
    left: 48,
  },
  total1: {
    fontWeight: "300",
    fontFamily: GlobalStyles.FontFamily.helvetica,
  },
  total: {
    margin: GlobalStyles.Margin.margin_33xs,
  },
  assets1: {
    fontFamily: GlobalStyles.FontFamily.helvetica,
    fontWeight: "700",
  },
  totalAssets: {
    marginLeft: 47.66,
    width: 53,
    fontSize: GlobalStyles.FontSize.size_base,
  },
  carbonyteToken: {
    marginLeft: -87.34,
    width: 68,
    fontSize: GlobalStyles.FontSize.size_base,
  },
  component3731Child4: {
    marginLeft: -0.84,
    bottom: 186,
    borderRightWidth: 1,
    width: 2,
    height: 37,
    borderColor: "#707070",
    left: "50%",
    borderStyle: "solid",
    position: "absolute",
  },
  hello15: {
    left: "0%",
  },
  hello16: {
    left: "86.97%",
  },
  drylandsProtectionKasigau: {
    fontFamily: GlobalStyles.FontFamily.helvetica,
  },
  drylandsProtectionKasigauW: {
    marginTop: -22.5,
    width: 167,
    top: "50%",
  },
  tropicalForestProtectionKe: {
    width: 161,
    bottom: 0,
  },
  hello17: {
    top: "29.36%",
  },
  hello18: {
    top: "74.31%",
  },
  hello19: {
    top: "0.92%",
    left: "16.86%",
    color: GlobalStyles.Color.indigo,
  },
  helloParent2: {
    right: 32,
    bottom: 30,
    left: 32,
    height: 109,
    position: "absolute",
  },
  component3731: {
    height: 715,
    width: 325,
  },
  accountChild: {
    width: 25,
    height: 19,
  },
  sendMoney: {
    left: 10,
  },
  send1Icon: {
    marginTop: -15.71,
    marginLeft: -8.5,
    height: 18,
    width: 18,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  sendMoneyParent: {
    width: 75,
    height: 90,
  },
  bankTransfer: {
    left: 7,
  },
  transfer1Icon: {
    marginLeft: -10.5,
    height: 14,
    width: 20,
    marginTop: -14,
  },
  myCards: {
    marginLeft: -21.5,
    left: "50%",
  },
  addFunds: {
    marginLeft: -23.5,
    left: "50%",
  },
  addIcon: {
    marginLeft: -7.5,
    width: 16,
    height: 16,
  },
  history2: {
    marginTop: -192.5,
    left: "9.54%",
    top: "50%",
    position: "absolute",
    textAlign: "left",
    color: GlobalStyles.Color.indigo,
    letterSpacing: 1,
    fontSize: GlobalStyles.FontSize.size_2xl,
  },
  path23663Icon: {
    top: 6,
    width: 19,
    height: 20,
    left: 0,
    position: "absolute",
  },
  lanceBogrol: {
    fontSize: GlobalStyles.FontSize.size_xs,
    fontFamily: GlobalStyles.FontFamily.helvetica,
    top: 0,
    left: 0,
    position: "absolute",
    textAlign: "left",
    color: GlobalStyles.Color.indigo,
    fontWeight: "700",
    letterSpacing: 1,
  },
  moneyTransfer: {
    color: GlobalStyles.Color.gray_1000,
    left: 0,
    bottom: 0,
    letterSpacing: 1,
  },
  lanceBogrolParent: {
    bottom: 14,
    left: 66,
    width: 105,
    top: 15,
    position: "absolute",
  },
  text: {
    marginLeft: 77.5,
    left: "50%",
  },
  maskGroup14: {
    top: 16,
    bottom: 16,
    width: 34,
    left: 12,
    maxHeight: "100%",
    position: "absolute",
  },
  groupParent1: {
    marginLeft: -162.5,
    left: "50%",
    bottom: 0,
    width: 325,
  },
  lanceBogrolGroup: {
    top: 14,
  },
  maskGroup141: {
    height: 34,
    marginTop: -17,
    width: 34,
    left: 12,
    top: "50%",
    position: "absolute",
  },
  groupParent2: {
    bottom: 72,
  },
  lanceBogrolContainer: {
    marginTop: -19,
    top: "50%",
  },
  text2: {
    right: 27,
  },
  groupParent3: {
    bottom: 141,
    left: 0,
    right: 0,
  },
  lanceBogrolParent1: {
    marginTop: -18,
    top: "50%",
  },
  maskGroup16: {
    marginTop: -17,
    left: 14,
  },
  groupParent4: {
    marginTop: -103.5,
    top: "50%",
  },
  text4: {
    right: 29,
    color: GlobalStyles.Color.turquoise,
    textAlign: "right",
    marginTop: -8,
  },
  groupChild7: {
    marginTop: -16,
    borderRadius: GlobalStyles.Border.br_xs,
  },
  groupParent5: {
    top: 0,
  },
  groupContainer: {
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    position: "absolute",
  },
  component2201: {
    top: 38,
    left: 0,
    bottom: 0,
    right: 0,
    position: "absolute",
  },
  historyParent: {
    height: 385,
    width: 325,
  },
  cardIcon: {
    height: 14,
    width: 18,
  },
  homeIndicator: {
    borderRadius: GlobalStyles.Border.br_8xl,
    backgroundColor: GlobalStyles.Color.black,
    width: 134,
    height: 5,
  },
  text5: {
    color: GlobalStyles.Color.gray_900,
  },
  text6: {
    color: GlobalStyles.Color.blue,
  },
  hello20: {
    marginTop: -18.5,
    left: 131,
    fontSize: GlobalStyles.FontSize.size_8xl,
    lineHeight: 26,
    top: "50%",
    fontFamily: GlobalStyles.FontFamily.helvetica,
    position: "absolute",
    textAlign: "left",
    fontWeight: "700",
  },
  totalWalletBalance: {
    marginTop: -39.5,
    marginLeft: -62.5,
    color: GlobalStyles.Color.black,
    fontSize: GlobalStyles.FontSize.size_base,
    left: "50%",
    top: "50%",
    fontFamily: GlobalStyles.FontFamily.helvetica,
    position: "absolute",
    textAlign: "left",
  },
  july192022: {
    marginTop: 20.5,
    marginLeft: -41.5,
    color: GlobalStyles.Color.black,
    fontSize: GlobalStyles.FontSize.size_base,
    left: "50%",
    top: "50%",
    fontFamily: GlobalStyles.FontFamily.helvetica,
    position: "absolute",
    textAlign: "left",
  },
  helloParent3: {
    height: 123,
    alignSelf: "center",
    backgroundColor: GlobalStyles.Color.white,
  },
  accountInner: {
    backgroundColor: GlobalStyles.Color.blue,
    width: 180,
    height: 2,
    borderRadius: GlobalStyles.Border.br_lg,
  },
  accountChild1: {
    borderTopWidth: 1.5,
    width: 357,
    height: 3,
    opacity: 0.3,
    borderColor: "#707070",
    borderStyle: "solid",
  },
  business: {
    color: GlobalStyles.Color.black,
  },
  personal: {
    color: GlobalStyles.Color.blue,
    fontWeight: "700",
  },
  accountChild2: {
    backgroundColor: "#e4e4ff",
    height: 132,
    alignSelf: "center",
  },
  youAreAlmost: {
    fontSize: GlobalStyles.FontSize.size_base,
    fontFamily: GlobalStyles.FontFamily.helvetica,
    fontWeight: "700",
  },
  text7: {
    fontSize: GlobalStyles.FontSize.size_xs,
  },
  youAreAlmostReadyWithYour: {
    width: 166,
    opacity: 0.8,
    color: GlobalStyles.Color.black,
    textAlign: "left",
  },
  congratulations: {
    fontSize: GlobalStyles.FontSize.size_base,
    fontFamily: GlobalStyles.FontFamily.helvetica,
    textAlign: "left",
    color: GlobalStyles.Color.indigo,
    fontWeight: "700",
  },
  applyNow: {
    fontSize: GlobalStyles.FontSize.size_xs,
    color: GlobalStyles.Color.blue,
    fontFamily: GlobalStyles.FontFamily.helvetica,
    textAlign: "left",
    fontWeight: "700",
  },
  path33217Icon: {
    maxHeight: "100%",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  text9: {
    marginTop: -10,
    marginLeft: -14,
    left: "50%",
    top: "50%",
    color: GlobalStyles.Color.blue,
    position: "absolute",
    textAlign: "left",
    fontSize: GlobalStyles.FontSize.size_2xl,
  },
  path33217Parent: {
    width: 84,
    height: 84,
  },
  history3: {
    top: "50%",
    left: "0%",
    position: "absolute",
    fontWeight: "700",
  },
  analysis: {
    opacity: 0.3,
  },
  history4: {
    left: "28.57%",
    top: "50%",
    position: "absolute",
  },
  history5: {
    left: "57.48%",
    top: "50%",
    position: "absolute",
  },
  history6: {
    left: "82.99%",
    top: "50%",
    position: "absolute",
  },
  component21225: {
    width: 294,
    height: 19,
  },
  polygonIcon: {
    marginLeft: -19.05,
    width: 107,
    left: "50%",
    height: 84,
    bottom: 0,
    position: "absolute",
  },
  vectorWrapper: {
    shadowColor: "rgba(1, 1, 253, 0.23)",
    bottom: 3,
    top: 0,
  },
  vectorContainer: {
    top: 3,
    bottom: 0,
  },
  referAndEarnCarbonTokens: {
    marginTop: -56.36,
    left: 49,
    lineHeight: 25,
    width: 208,
    textAlign: "center",
    top: "50%",
    color: GlobalStyles.Color.indigo,
  },
  referNow: {
    marginTop: 1.69,
    marginLeft: -70,
    width: 141,
    left: "50%",
    textAlign: "center",
    top: "50%",
    color: GlobalStyles.Color.blue,
    fontFamily: GlobalStyles.FontFamily.helvetica,
    position: "absolute",
    fontWeight: "700",
    fontSize: GlobalStyles.FontSize.size_2xl,
  },
  groupIcon: {
    height: 114,
    bottom: 3,
    left: 0,
    right: 0,
  },
  groupParent6: {
    width: 305,
    height: 196,
    alignSelf: "center",
  },
  hello21: {
    marginTop: 54,
    marginLeft: -76.5,
    left: "50%",
    top: "50%",
    textAlign: "left",
    color: GlobalStyles.Color.indigo,
  },
  hello22: {
    marginLeft: -49.5,
    bottom: 35,
    left: "50%",
    color: GlobalStyles.Color.blue,
    textAlign: "left",
  },
  hello23: {
    marginTop: 104,
    left: 43,
    whiteSpace: "pre-wrap",
    textAlign: "center",
    top: "50%",
    fontFamily: GlobalStyles.FontFamily.helvetica,
    position: "absolute",
    color: GlobalStyles.Color.indigo,
    fontSize: GlobalStyles.FontSize.size_2xl,
  },
  groupChild9: {
    marginTop: -22.55,
    right: 30,
    height: 149,
    top: "50%",
    left: 0,
  },
  image88Icon: {
    top: 13,
    right: 70,
    left: 70,
    height: 265,
  },
  groupPressable: {
    shadowColor: "rgba(0, 0, 0, 0.16)",
    height: 458,
    alignSelf: "center",
    backgroundColor: GlobalStyles.Color.white,
    borderRadius: GlobalStyles.Border.br_lg,
    width: 325,
  },
  rectangle: {
    top: 0,
    backgroundColor: GlobalStyles.Color.white,
    left: 0,
    bottom: 0,
    right: 0,
    position: "absolute",
  },
  text10: {
    letterSpacing: 0,
    lineHeight: 24,
    fontWeight: "500",
    fontFamily: GlobalStyles.FontFamily.roboto,
    color: GlobalStyles.Color.gray_1900,
    top: 0,
    left: 0,
    textAlign: "left",
  },
  iconAwesomeBatteryThreeQua: {
    width: 22,
    bottom: 5,
    top: 10,
    maxHeight: "100%",
    right: 0,
    position: "absolute",
  },
  iconAwesomeWifi: {
    right: 37,
    bottom: 4,
    width: 17,
    top: 10,
    maxHeight: "100%",
    position: "absolute",
  },
  groupChild10: {
    left: 259,
    height: 4,
  },
  groupChild11: {
    marginLeft: 91.81,
    height: 6,
    left: "50%",
  },
  groupChild12: {
    marginLeft: 95.81,
    left: "50%",
    height: 9,
  },
  groupChild13: {
    right: 68,
    top: 10,
  },
  statusBar: {
    marginTop: -15,
    left: 15,
    height: 26,
    top: "50%",
  },
  statusBarBlack: {
    width: 375,
    height: 44,
  },
  account: {
    flex: 1,
    width: "100%",
    backgroundColor: GlobalStyles.Color.gray_300,
  },
});

export default Account;
