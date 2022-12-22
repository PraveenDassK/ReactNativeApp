import * as React from "react";
import { Text, StyleSheet, View, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Account3 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.account}>
      <Text style={[styles.history, styles.mt66, styles.ml56]}>
        Carbon Spending
      </Text>
      <View style={[styles.component3731, styles.mt16_11, styles.ml25]}>
        <View style={styles.rectangleView} />
        <View style={styles.rectangleView1} />
        <Image
          style={styles.groupIcon}
          resizeMode="cover"
          source={require("../assets/group-30387.png")}
        />
        <Image
          style={styles.rectangleIcon}
          resizeMode="cover"
          source={require("../assets/rectangle-6035.png")}
        />
        <Text style={styles.hello}>2400</Text>
        <Text style={styles.hello1}>Kg of CO2</Text>
        <Text style={styles.hello2}>Estimated</Text>
        <Image
          style={styles.rectangleIcon1}
          resizeMode="cover"
          source={require("../assets/rectangle-6033.png")}
        />
        <View style={styles.lineView} />
        <View style={styles.lineView1} />
        <View style={styles.groupView5}>
          <View style={styles.groupView}>
            <Text style={styles.hello3}>{`Health & Beauty`}</Text>
            <View style={styles.rectangleView2} />
            <View style={styles.rectangleView3} />
            <Image
              style={styles.iconFeatherHeart}
              resizeMode="cover"
              source={require("../assets/icon-featherheart.png")}
            />
            <Text style={styles.hello4}>254</Text>
          </View>
          <View style={styles.groupView1}>
            <Text style={styles.hello5}>{`Food & Beverages`}</Text>
            <View style={styles.rectangleView4} />
            <View style={styles.rectangleView5} />
            <Text style={styles.hello6}>254</Text>
            <Image
              style={styles.layer2Icon}
              resizeMode="cover"
              source={require("../assets/layer-21.png")}
            />
          </View>
          <View style={styles.groupView2}>
            <Text style={styles.hello7}>House</Text>
            <View style={styles.rectangleView6} />
            <View style={styles.rectangleView7} />
            <Text style={styles.hello8}>254</Text>
            <Image
              style={styles.house1Icon}
              resizeMode="cover"
              source={require("../assets/house-12.png")}
            />
          </View>
          <View style={styles.groupView3}>
            <Text style={styles.hello9}>Shopping</Text>
            <View style={styles.rectangleView8} />
            <View style={styles.rectangleView9} />
            <Text style={styles.hello10}>254</Text>
            <Image
              style={styles.shoppingIcon}
              resizeMode="cover"
              source={require("../assets/shopping1.png")}
            />
          </View>
          <View style={styles.groupView4}>
            <Text style={styles.hello11}>Transport</Text>
            <View style={styles.rectangleView10} />
            <View style={styles.rectangleView11} />
            <Text style={styles.hello12}>254</Text>
            <Image
              style={styles.transportationIcon}
              resizeMode="cover"
              source={require("../assets/transportation.png")}
            />
          </View>
        </View>
        <View style={styles.rectangleView12} />
        <View style={styles.groupView6}>
          <Text style={styles.hello13}>5</Text>
        </View>
        <View style={styles.groupView7}>
          <Text style={styles.hello14}>2</Text>
        </View>
        <Text style={styles.totalAssets}>
          <Text style={styles.total1}>
            <Text style={styles.total}>{`Total `}</Text>
          </Text>
          <Text style={styles.assets1}>
            <Text style={styles.assets}>Assets</Text>
          </Text>
        </Text>
        <Text style={styles.carbonyteToken}>
          <Text style={styles.carbonyte1}>
            <Text style={styles.carbonyte}>{`Carbonyte `}</Text>
          </Text>
          <Text style={styles.token1}>
            <Text style={styles.token}>{`Token `}</Text>
          </Text>
        </Text>
        <View style={styles.lineView2} />
        <View style={styles.groupView8}>
          <Text style={styles.hello15}>Assets</Text>
          <Text style={styles.hello16}>Token</Text>
          <Text style={styles.drylandsProtectionKasigauW}>
            <Text
              style={styles.drylandsProtectionKasigau}
            >{`Drylands Protection, Kasigau Wildlife Corridor `}</Text>
            <Text style={styles.tonne}>£19 / Tonne</Text>
          </Text>
          <Text style={styles.tropicalForestProtectionKe}>
            <Text
              style={styles.tropicalForestProtection}
            >{`Tropical Forest Protection, Keo Seima `}</Text>
            <Text style={styles.tree}>£14 / Tree</Text>
          </Text>
          <Text style={styles.hello17}>1</Text>
          <Text style={styles.hello18}>1</Text>
          <Text style={styles.hello19}>(1 Tonne = 1 CO2 Token)</Text>
        </View>
      </View>
      <Text style={[styles.history1, styles.mt242_11, styles.ml68]}>
        Carbon Assects
      </Text>
      <Image
        style={[styles.groupIcon1, styles.mt_22_89, styles.ml25]}
        resizeMode="cover"
        source={require("../assets/group-30403.png")}
      />
      <Pressable
        style={[styles.groupPressable, styles.mt24_11, styles.ml110]}
        onPress={() => navigation.navigate("SendMoney")}
      >
        <Text style={styles.sendMoney}>Send Money</Text>
        <Image
          style={styles.send1Icon}
          resizeMode="cover"
          source={require("../assets/send-1.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.groupPressable1, styles.mt_89_89, styles.ml190]}
      >
        <Text style={styles.bankTransfer}>Bank Transfer</Text>
        <Image
          style={styles.transfer1Icon}
          resizeMode="cover"
          source={require("../assets/transfer-1.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.groupPressable2, styles.mt_89_89, styles.ml271]}
        onPress={() => navigation.navigate("MyCards")}
      >
        <Text style={styles.myCards}>My Cards</Text>
      </Pressable>
      <Pressable
        style={[styles.groupPressable3, styles.mt_89_89, styles.ml30]}
        onPress={() => navigation.navigate("AddFunds")}
      >
        <Text style={styles.addFunds}>Add Funds</Text>
        <Image
          style={styles.addIcon}
          resizeMode="cover"
          source={require("../assets/add.png")}
        />
      </Pressable>
      <View style={[styles.groupView20, styles.mt42_11, styles.ml35]}>
        <Text style={styles.history2}>Recent Transactions</Text>
        <Image
          style={styles.path23663Icon}
          resizeMode="cover"
          source={require("../assets/path-23663.png")}
        />
        <View style={styles.component2201}>
          <View style={styles.groupView19}>
            <View style={styles.groupView10}>
              <View style={styles.groupView9}>
                <Text style={styles.lanceBogrol}>Grocery Market</Text>
                <Text style={styles.moneyTransfer}>
                  <Text style={styles.september222022}>September 22, 2022</Text>
                  <Text style={styles.pM}>12:06 PM</Text>
                </Text>
              </View>
              <Text style={styles.text}>- £70.00</Text>
              <Image
                style={styles.maskGroup14}
                resizeMode="cover"
                source={require("../assets/mask-group-14.png")}
              />
            </View>
            <View style={styles.groupView12}>
              <View style={styles.groupView11}>
                <Text style={styles.lanceBogrol1}>Grocery Market</Text>
                <Text style={styles.moneyTransfer1}>
                  <Text style={styles.september2220221}>
                    September 22, 2022
                  </Text>
                  <Text style={styles.pM1}>12:06 PM</Text>
                </Text>
              </View>
              <Text style={styles.text1}>- £70.00</Text>
              <Image
                style={styles.maskGroup141}
                resizeMode="cover"
                source={require("../assets/mask-group-1415.png")}
              />
            </View>
            <View style={styles.groupView14}>
              <View style={styles.groupView13}>
                <Text style={styles.lanceBogrol2}>Grocery Market</Text>
                <Text style={styles.moneyTransfer2}>
                  <Text style={styles.september2220222}>
                    September 22, 2022
                  </Text>
                  <Text style={styles.pM2}>12:06 PM</Text>
                </Text>
              </View>
              <Text style={styles.text2}>- £70.00</Text>
              <Image
                style={styles.maskGroup142}
                resizeMode="cover"
                source={require("../assets/mask-group-1415.png")}
              />
            </View>
            <View style={styles.groupView16}>
              <View style={styles.groupView15}>
                <Text style={styles.lanceBogrol3}>Spotify Music</Text>
                <Text style={styles.moneyTransfer3}>
                  <Text style={styles.september2220223}>
                    September 22, 2022
                  </Text>
                  <Text style={styles.pM3}>12:06 PM</Text>
                </Text>
              </View>
              <Text style={styles.text3}>- £50.00</Text>
              <Image
                style={styles.maskGroup16}
                resizeMode="cover"
                source={require("../assets/mask-group-16.png")}
              />
            </View>
            <View style={styles.groupView18}>
              <View style={styles.groupView17}>
                <Text style={styles.lanceBogrol4}>Lance Bogrol</Text>
                <Text style={styles.moneyTransfer4}>
                  <Text style={styles.september2220224}>
                    September 22, 2022
                  </Text>
                  <Text style={styles.pM4}>12:06 PM</Text>
                </Text>
              </View>
              <Text style={styles.text4}>+ £350.00</Text>
              <Image
                style={styles.rectangleIcon2}
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
        source={require("../assets/card4.png")}
      />
      <Image
        style={[styles.groupIcon2, styles.mt_20_89, styles.ml37]}
        resizeMode="cover"
        source={require("../assets/group-31984.png")}
      />
      <View style={[styles.homeIndicator, styles.mt_528_89, styles.ml120]} />
      <View
        style={[styles.groupView21, styles.mt41_11]}
        pointerEvents="box-none"
      >
        <Text style={styles.hello20}>
          <Text style={styles.text5}>£</Text>
          <Text style={styles.text6}>0.00</Text>
        </Text>
        <Text style={styles.totalWalletBalance}>Total Wallet Balance</Text>
        <Text style={styles.july192022}>July 19, 2022</Text>
      </View>
      <View
        style={[styles.groupView22, styles.mt_2_8900000000000006, styles.ml10]}
      />
      <View style={[styles.lineView3, styles.mt8_11, styles.ml8]} />
      <Text style={[styles.business, styles.mt15_11, styles.ml244]}>
        Business
      </Text>
      <Text style={[styles.personal, styles.mt_15_89, styles.ml66]}>
        Personal
      </Text>
      <View
        style={[styles.rectangleView13, styles.mt35_11]}
        pointerEvents="box-none"
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
        <Text style={styles.text9}>
          <Text style={styles.text7} />
          <Text style={styles.text8} />
        </Text>
      </Text>
      <Text
        style={[styles.congratulations, styles.mt_107_89, styles.ml157]}
      >{`Congratulations! `}</Text>
      <Text
        style={[styles.applyNow, styles.mt13_11, styles.ml157]}
      >{`Apply Now > `}</Text>
      <View style={[styles.groupView23, styles.mt_15_89, styles.ml54]}>
        <Image
          style={styles.path33217Icon}
          resizeMode="cover"
          source={require("../assets/path-33217.png")}
        />
        <Text style={styles.text10}>70%</Text>
      </View>
      <View style={[styles.component21225, styles.mt34_11, styles.ml44]}>
        <Text style={styles.history3}>Account</Text>
        <Pressable
          style={styles.history4}
          onPress={() => navigation.navigate("Analytics")}
        >
          <Text style={styles.analysis}>Analysis</Text>
        </Pressable>
        <Pressable
          style={styles.history5}
          onPress={() => navigation.navigate("Carbon")}
        >
          <Text style={styles.carbon}>Carbon</Text>
        </Pressable>
        <Pressable
          style={styles.history6}
          onPress={() => navigation.navigate("Settings")}
        >
          <Text style={styles.profile}>Profile</Text>
        </Pressable>
      </View>
      <View style={[styles.groupView26, styles.mt37_11]}>
        <View style={styles.groupView24}>
          <Image
            style={styles.polygonIcon}
            resizeMode="cover"
            source={require("../assets/polygon-5.png")}
          />
        </View>
        <View style={styles.groupView25}>
          <Image
            style={styles.polygonIcon1}
            resizeMode="cover"
            source={require("../assets/polygon-5.png")}
          />
        </View>
        <Text style={styles.referAndEarnCarbonTokens}>
          <Text style={styles.referAndEarn1}>
            <Text style={styles.referAndEarn}>Refer and Earn</Text>
          </Text>
          <Text style={styles.carbonTokens1}>
            <Text style={styles.carbonTokens}>carbon Tokens</Text>
          </Text>
        </Text>
        <Text style={styles.referNow}>{`Refer Now >`}</Text>
        <Image
          style={styles.groupIcon3}
          resizeMode="cover"
          source={require("../assets/group-32017.png")}
        />
      </View>
      <Pressable
        style={[styles.groupPressable4, styles.mt290_11]}
        onPress={() => navigation.navigate("ChooseCardsStandard5")}
      >
        <Text style={styles.hello21}>Congratulations!</Text>
        <Text style={styles.hello22}>View more</Text>
        <Text style={styles.hello23}>
          <Text style={styles.youHavePlanted}>You have planted 5 trees</Text>
          <Text
            style={styles.withAdvanceCard}
          >{`with Advance Card purchase  `}</Text>
        </Text>
        <Image
          style={styles.groupIcon4}
          resizeMode="cover"
          source={require("../assets/group-32066.png")}
        />
        <Image
          style={styles.image88Icon}
          resizeMode="cover"
          source={require("../assets/image-882.png")}
        />
      </Pressable>
      <View style={[styles.statusBarBlack, styles.mt15_11]}>
        <View style={styles.rectangle} />
        <View style={styles.statusBar}>
          <View style={styles.groupView27}>
            <Text style={styles.text11}>9:41</Text>
            <Image
              style={styles.iconAwesomeBatteryThreeQua}
              resizeMode="cover"
              source={require("../assets/battery.png")}
            />
            <Image
              style={styles.iconAwesomeWifi}
              resizeMode="cover"
              source={require("../assets/wifi.png")}
            />
            <View style={styles.rectangleView14} />
            <View style={styles.rectangleView15} />
            <View style={styles.rectangleView16} />
            <View style={styles.rectangleView17} />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mt66: {
    marginTop: 66,
  },
  ml56: {
    marginLeft: 56,
  },
  mt16_11: {
    marginTop: 16.11,
  },
  ml25: {
    marginLeft: 25,
  },
  mt242_11: {
    marginTop: 242.11,
  },
  ml68: {
    marginLeft: 68,
  },
  mt_22_89: {
    marginTop: -22.89,
  },
  mt24_11: {
    marginTop: 24.11,
  },
  ml110: {
    marginLeft: 110,
  },
  mt_89_89: {
    marginTop: -89.89,
  },
  ml190: {
    marginLeft: 190,
  },
  ml271: {
    marginLeft: 271,
  },
  ml30: {
    marginLeft: 30,
  },
  mt42_11: {
    marginTop: 42.11,
  },
  ml35: {
    marginLeft: 35,
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
    marginLeft: 37,
  },
  mt_528_89: {
    marginTop: -528.89,
  },
  ml120: {
    marginLeft: 120,
  },
  mt41_11: {
    marginTop: 41.11,
  },
  mt_2_8900000000000006: {
    marginTop: -2.8900000000000006,
  },
  ml10: {
    marginLeft: 10,
  },
  mt8_11: {
    marginTop: 8.11,
  },
  ml8: {
    marginLeft: 8,
  },
  mt15_11: {
    marginTop: 15.11,
  },
  ml244: {
    marginLeft: 244,
  },
  mt_15_89: {
    marginTop: -15.89,
  },
  ml66: {
    marginLeft: 66,
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
    marginLeft: 157,
  },
  mt13_11: {
    marginTop: 13.11,
  },
  ml54: {
    marginLeft: 54,
  },
  mt34_11: {
    marginTop: 34.11,
  },
  ml44: {
    marginLeft: 44,
  },
  mt37_11: {
    marginTop: 37.11,
  },
  mt290_11: {
    marginTop: 290.11,
  },
  history: {
    position: "relative",
    fontSize: 18,
    letterSpacing: 1,
    fontWeight: "700",
    fontFamily: "Typo Grotesk",
    color: "#00003d",
    textAlign: "left",
  },
  rectangleView: {
    position: "absolute",
    top: 22,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: 15,
    backgroundColor: "#fff",
    shadowColor: "rgba(1, 1, 253, 0.1)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 20,
    elevation: 20,
    shadowOpacity: 1,
  },
  rectangleView1: {
    position: "absolute",
    top: 0,
    right: 0,
    left: 0,
    borderRadius: 20,
    backgroundColor: "#fff",
    shadowColor: "rgba(1, 1, 253, 0.1)",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 10,
    elevation: 10,
    shadowOpacity: 1,
    height: 84,
  },
  groupIcon: {
    position: "absolute",
    top: 15,
    right: 20,
    width: 50,
    height: 47,
  },
  rectangleIcon: {
    position: "absolute",
    top: 22,
    right: 0,
    bottom: 319,
    left: 0,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    opacity: 0.1,
  },
  hello: {
    position: "absolute",
    top: "3.12%",
    left: "4.62%",
    fontSize: 36,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#0101fd",
    textAlign: "left",
  },
  hello1: {
    position: "absolute",
    top: "5.88%",
    left: "33.01%",
    fontSize: 12,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#00003d",
    textAlign: "left",
  },
  hello2: {
    position: "absolute",
    top: "3.96%",
    left: "33.01%",
    fontSize: 12,
    fontFamily: "Helvetica",
    color: "#00003d",
    textAlign: "left",
  },
  rectangleIcon1: {
    position: "absolute",
    top: 22,
    right: 0,
    left: 0,
    maxWidth: "100%",
    overflow: "hidden",
    height: 84,
    opacity: 0.1,
  },
  lineView: {
    position: "absolute",
    right: 45,
    bottom: 178,
    left: 44,
    borderStyle: "solid",
    borderColor: "#fff",
    borderTopWidth: 1,
    height: 2,
  },
  lineView1: {
    position: "absolute",
    right: 45,
    bottom: 209,
    left: 44,
    borderStyle: "solid",
    borderColor: "#fff",
    borderTopWidth: 1,
    height: 2,
  },
  hello3: {
    position: "absolute",
    top: "0%",
    left: "0%",
    fontSize: 10,
    fontFamily: "Helvetica",
    color: "#888",
    textAlign: "left",
  },
  rectangleView2: {
    position: "absolute",
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: 19,
    backgroundColor: "#f6f5f8",
    height: 30,
  },
  rectangleView3: {
    position: "absolute",
    bottom: 0,
    left: 0,
    borderRadius: 19,
    backgroundColor: "#e4732d",
    width: 213,
    height: 30,
  },
  iconFeatherHeart: {
    position: "absolute",
    marginTop: 2.95,
    top: "50%",
    left: 13,
    width: 14,
    height: 13,
  },
  hello4: {
    position: "absolute",
    top: "58.68%",
    left: "92.58%",
    fontSize: 6,
    fontFamily: "Helvetica",
    color: "#1f1f1f",
    textAlign: "center",
  },
  groupView: {
    position: "absolute",
    top: 0,
    right: 0,
    left: 0,
    height: 45,
  },
  hello5: {
    position: "absolute",
    top: "0%",
    left: "0%",
    fontSize: 10,
    fontFamily: "Helvetica",
    color: "#888",
    textAlign: "left",
  },
  rectangleView4: {
    position: "absolute",
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: 19,
    backgroundColor: "#f6f5f8",
    height: 30,
  },
  rectangleView5: {
    position: "absolute",
    bottom: 0,
    left: 0,
    borderRadius: 19,
    backgroundColor: "#f3b53f",
    width: 191,
    height: 30,
  },
  hello6: {
    position: "absolute",
    top: "58.68%",
    left: "92.58%",
    fontSize: 6,
    fontFamily: "Helvetica",
    color: "#1f1f1f",
    textAlign: "center",
  },
  layer2Icon: {
    position: "absolute",
    marginTop: 1.8,
    top: "50%",
    left: 13,
    width: 12,
    height: 12,
  },
  groupView1: {
    position: "absolute",
    marginTop: -79.6,
    top: "50%",
    right: 0,
    left: 0,
    height: 45,
  },
  hello7: {
    position: "absolute",
    top: "0%",
    left: "0%",
    fontSize: 10,
    fontFamily: "Helvetica",
    color: "#888",
    textAlign: "left",
  },
  rectangleView6: {
    position: "absolute",
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: 19,
    backgroundColor: "#f6f5f8",
    height: 30,
  },
  rectangleView7: {
    position: "absolute",
    bottom: 0,
    left: 0,
    borderRadius: 19,
    backgroundColor: "#dc85f5",
    width: 125,
    height: 30,
  },
  hello8: {
    position: "absolute",
    top: "58.68%",
    left: "92.58%",
    fontSize: 6,
    fontFamily: "Helvetica",
    color: "#1f1f1f",
    textAlign: "center",
  },
  house1Icon: {
    position: "absolute",
    marginTop: 2.98,
    top: "50%",
    left: 12,
    width: 11,
    height: 10,
  },
  groupView2: {
    position: "absolute",
    marginTop: -22.7,
    top: "50%",
    right: 0,
    left: 0,
    height: 45,
  },
  hello9: {
    position: "absolute",
    top: "0%",
    left: "0%",
    fontSize: 10,
    fontFamily: "Helvetica",
    color: "#888",
    textAlign: "left",
  },
  rectangleView8: {
    position: "absolute",
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: 19,
    backgroundColor: "#f6f5f8",
    height: 30,
  },
  rectangleView9: {
    position: "absolute",
    bottom: 0,
    left: 0,
    borderRadius: 19,
    backgroundColor: "#5888f5",
    width: 72,
    height: 30,
  },
  hello10: {
    position: "absolute",
    top: "58.68%",
    left: "92.58%",
    fontSize: 6,
    fontFamily: "Helvetica",
    color: "#1f1f1f",
    textAlign: "center",
  },
  shoppingIcon: {
    position: "absolute",
    marginTop: 3.15,
    top: "50%",
    left: 10,
    width: 10,
    height: 10,
  },
  groupView3: {
    position: "absolute",
    marginTop: 34.2,
    top: "50%",
    right: 0,
    left: 0,
    height: 45,
  },
  hello11: {
    position: "absolute",
    top: "0%",
    left: "0%",
    fontSize: 10,
    fontFamily: "Helvetica",
    color: "#888",
    textAlign: "left",
  },
  rectangleView10: {
    position: "absolute",
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: 19,
    backgroundColor: "#f6f5f8",
    height: 30,
  },
  rectangleView11: {
    position: "absolute",
    bottom: 0,
    left: 0,
    borderRadius: 19,
    backgroundColor: "#5ac661",
    width: 47,
    height: 30,
  },
  hello12: {
    position: "absolute",
    top: "58.68%",
    left: "92.58%",
    fontSize: 6,
    fontFamily: "Helvetica",
    color: "#1f1f1f",
    textAlign: "center",
  },
  transportationIcon: {
    position: "absolute",
    marginTop: 3.45,
    top: "50%",
    left: 11,
    width: 11,
    height: 9,
  },
  groupView4: {
    position: "absolute",
    right: 0,
    bottom: 0,
    left: 0,
    height: 45,
  },
  groupView5: {
    position: "absolute",
    top: 123,
    right: 16,
    width: 293,
    height: 273,
  },
  rectangleView12: {
    position: "absolute",
    right: 21,
    bottom: 165,
    left: 17,
    borderRadius: 30,
    backgroundColor: "#f6f5f8",
    height: 77,
  },
  hello13: {
    position: "absolute",
    top: "0%",
    left: "0%",
    fontSize: 36,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#00003d",
    textAlign: "left",
  },
  groupView6: {
    position: "absolute",
    marginLeft: 20.66,
    bottom: 183,
    left: "50%",
    width: 20,
    height: 41,
  },
  hello14: {
    position: "absolute",
    top: "0%",
    left: "0%",
    fontSize: 36,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#00003d",
    textAlign: "left",
  },
  groupView7: {
    position: "absolute",
    bottom: 183,
    left: 48,
    width: 20,
    height: 41,
  },
  total: {
    fontWeight: "300",
    fontFamily: "Helvetica",
  },
  total1: {
    margin: 0,
  },
  assets: {
    fontWeight: "700",
    fontFamily: "Helvetica",
  },
  assets1: {
    margin: 0,
  },
  totalAssets: {
    position: "absolute",
    marginLeft: 47.66,
    bottom: 190,
    left: "50%",
    fontSize: 14,
    color: "#00003d",
    textAlign: "left",
    width: 53,
  },
  carbonyte: {
    fontWeight: "300",
    fontFamily: "Helvetica",
  },
  carbonyte1: {
    margin: 0,
  },
  token: {
    fontWeight: "700",
    fontFamily: "Helvetica",
  },
  token1: {
    margin: 0,
  },
  carbonyteToken: {
    position: "absolute",
    marginLeft: -87.34,
    bottom: 190,
    left: "50%",
    fontSize: 14,
    color: "#00003d",
    textAlign: "left",
    width: 68,
  },
  lineView2: {
    position: "absolute",
    marginLeft: -0.84,
    bottom: 186,
    left: "50%",
    borderStyle: "solid",
    borderColor: "#707070",
    borderRightWidth: 1,
    width: 2,
    height: 37,
  },
  hello15: {
    position: "absolute",
    top: "0%",
    left: "0%",
    fontSize: 12,
    lineHeight: 14,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#00003d",
    textAlign: "left",
  },
  hello16: {
    position: "absolute",
    top: "0%",
    left: "86.97%",
    fontSize: 12,
    lineHeight: 14,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#00003d",
    textAlign: "left",
  },
  drylandsProtectionKasigau: {
    fontFamily: "Helvetica",
  },
  tonne: {
    fontWeight: "700",
    fontFamily: "Helvetica",
  },
  drylandsProtectionKasigauW: {
    position: "absolute",
    marginTop: -22.5,
    top: "50%",
    left: 0,
    fontSize: 12,
    color: "#00003d",
    textAlign: "left",
    width: 167,
    opacity: 0.77,
  },
  tropicalForestProtection: {
    fontFamily: "Helvetica",
  },
  tree: {
    fontWeight: "700",
    fontFamily: "Helvetica",
  },
  tropicalForestProtectionKe: {
    position: "absolute",
    bottom: 0,
    left: 0,
    fontSize: 12,
    color: "#00003d",
    textAlign: "left",
    width: 161,
    opacity: 0.77,
  },
  hello17: {
    position: "absolute",
    top: "29.36%",
    left: "97.32%",
    fontSize: 13,
    lineHeight: 15,
    fontFamily: "Helvetica",
    color: "#00003d",
    textAlign: "left",
  },
  hello18: {
    position: "absolute",
    top: "74.31%",
    left: "97.32%",
    fontSize: 13,
    lineHeight: 15,
    fontFamily: "Helvetica",
    color: "#00003d",
    textAlign: "left",
  },
  hello19: {
    position: "absolute",
    top: "0.92%",
    left: "16.86%",
    fontSize: 10,
    fontFamily: "Helvetica",
    color: "#00003d",
    textAlign: "left",
  },
  groupView8: {
    position: "absolute",
    right: 32,
    bottom: 30,
    left: 32,
    height: 109,
  },
  component3731: {
    position: "relative",
    width: 325,
    height: 715,
  },
  history1: {
    position: "relative",
    fontSize: 18,
    letterSpacing: 1,
    fontWeight: "700",
    fontFamily: "Typo Grotesk",
    color: "#00003d",
    textAlign: "left",
  },
  groupIcon1: {
    position: "relative",
    width: 25,
    height: 19,
  },
  sendMoney: {
    position: "absolute",
    marginTop: 16,
    top: "50%",
    left: 10,
    fontSize: 10,
    fontFamily: "Helvetica",
    color: "#00003d",
    textAlign: "left",
  },
  send1Icon: {
    position: "absolute",
    marginTop: -15.71,
    marginLeft: -8.5,
    top: "50%",
    left: "50%",
    width: 18,
    height: 18,
  },
  groupPressable: {
    position: "relative",
    borderRadius: 15,
    backgroundColor: "#fff",
    shadowColor: "rgba(1, 1, 253, 0.1)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 20,
    elevation: 20,
    shadowOpacity: 1,
    width: 75,
    height: 90,
  },
  bankTransfer: {
    position: "absolute",
    marginTop: 16,
    top: "50%",
    left: 7,
    fontSize: 10,
    fontFamily: "Helvetica",
    color: "#00003d",
    textAlign: "left",
  },
  transfer1Icon: {
    position: "absolute",
    marginTop: -14,
    marginLeft: -10.5,
    top: "50%",
    left: "50%",
    width: 20,
    height: 14,
  },
  groupPressable1: {
    position: "relative",
    borderRadius: 15,
    backgroundColor: "#fff",
    shadowColor: "rgba(1, 1, 253, 0.1)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 20,
    elevation: 20,
    shadowOpacity: 1,
    width: 75,
    height: 90,
  },
  myCards: {
    position: "absolute",
    marginTop: 16,
    marginLeft: -21.5,
    top: "50%",
    left: "50%",
    fontSize: 10,
    fontFamily: "Helvetica",
    color: "#00003d",
    textAlign: "left",
  },
  groupPressable2: {
    position: "relative",
    borderRadius: 15,
    backgroundColor: "#fff",
    shadowColor: "rgba(1, 1, 253, 0.1)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 20,
    elevation: 20,
    shadowOpacity: 1,
    width: 75,
    height: 90,
  },
  addFunds: {
    position: "absolute",
    marginTop: 16,
    marginLeft: -23.5,
    top: "50%",
    left: "50%",
    fontSize: 10,
    fontFamily: "Helvetica",
    color: "#00003d",
    textAlign: "left",
  },
  addIcon: {
    position: "absolute",
    marginTop: -14,
    marginLeft: -7.5,
    top: "50%",
    left: "50%",
    width: 16,
    height: 16,
  },
  groupPressable3: {
    position: "relative",
    borderRadius: 15,
    backgroundColor: "#fff",
    shadowColor: "rgba(1, 1, 253, 0.1)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 20,
    elevation: 20,
    shadowOpacity: 1,
    width: 75,
    height: 90,
  },
  history2: {
    position: "absolute",
    marginTop: -192.5,
    top: "50%",
    left: "9.54%",
    fontSize: 18,
    letterSpacing: 1,
    fontWeight: "700",
    fontFamily: "Typo Grotesk",
    color: "#00003d",
    textAlign: "left",
  },
  path23663Icon: {
    position: "absolute",
    top: 6,
    left: 0,
    width: 19,
    height: 20,
  },
  lanceBogrol: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 12,
    letterSpacing: 1,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#00003d",
    textAlign: "left",
  },
  september222022: {
    margin: 0,
  },
  pM: {
    margin: 0,
  },
  moneyTransfer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    fontSize: 10,
    letterSpacing: 1,
    fontFamily: "Helvetica",
    color: "#7c7c7c",
    textAlign: "left",
  },
  groupView9: {
    position: "absolute",
    top: 15,
    bottom: 14,
    left: 66,
    width: 105,
  },
  text: {
    position: "absolute",
    marginTop: -8,
    marginLeft: 77.5,
    top: "50%",
    left: "50%",
    fontSize: 14,
    letterSpacing: 1,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#ff4b4b",
    textAlign: "right",
  },
  maskGroup14: {
    position: "absolute",
    top: 16,
    bottom: 16,
    left: 12,
    maxHeight: "100%",
    width: 34,
  },
  groupView10: {
    position: "absolute",
    marginLeft: -162.5,
    bottom: 0,
    left: "50%",
    borderRadius: 20,
    backgroundColor: "#fff",
    shadowColor: "rgba(1, 1, 253, 0.1)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 20,
    elevation: 20,
    shadowOpacity: 1,
    width: 325,
    height: 66,
  },
  lanceBogrol1: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 12,
    letterSpacing: 1,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#00003d",
    textAlign: "left",
  },
  september2220221: {
    margin: 0,
  },
  pM1: {
    margin: 0,
  },
  moneyTransfer1: {
    position: "absolute",
    bottom: 0,
    left: 0,
    fontSize: 10,
    letterSpacing: 1,
    fontFamily: "Helvetica",
    color: "#7c7c7c",
    textAlign: "left",
  },
  groupView11: {
    position: "absolute",
    marginLeft: -96.5,
    top: 14,
    left: "50%",
    width: 105,
    height: 37,
  },
  text1: {
    position: "absolute",
    marginTop: -8,
    marginLeft: 77.5,
    top: "50%",
    left: "50%",
    fontSize: 14,
    letterSpacing: 1,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#ff4b4b",
    textAlign: "right",
  },
  maskGroup141: {
    position: "absolute",
    marginTop: -17,
    top: "50%",
    left: 12,
    width: 34,
    height: 34,
  },
  groupView12: {
    position: "absolute",
    right: 0,
    bottom: 72,
    left: 0,
    borderRadius: 20,
    backgroundColor: "#fff",
    shadowColor: "rgba(1, 1, 253, 0.1)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 20,
    elevation: 20,
    shadowOpacity: 1,
    height: 64,
  },
  lanceBogrol2: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 12,
    letterSpacing: 1,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#00003d",
    textAlign: "left",
  },
  september2220222: {
    margin: 0,
  },
  pM2: {
    margin: 0,
  },
  moneyTransfer2: {
    position: "absolute",
    bottom: 0,
    left: 0,
    fontSize: 10,
    letterSpacing: 1,
    fontFamily: "Helvetica",
    color: "#7c7c7c",
    textAlign: "left",
  },
  groupView13: {
    position: "absolute",
    marginTop: -19,
    marginLeft: -96.5,
    top: "50%",
    left: "50%",
    width: 105,
    height: 37,
  },
  text2: {
    position: "absolute",
    marginTop: -8,
    top: "50%",
    right: 27,
    fontSize: 14,
    letterSpacing: 1,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#ff4b4b",
    textAlign: "right",
  },
  maskGroup142: {
    position: "absolute",
    marginTop: -17,
    top: "50%",
    left: 12,
    width: 34,
    height: 34,
  },
  groupView14: {
    position: "absolute",
    right: 0,
    bottom: 141,
    left: 0,
    borderRadius: 20,
    backgroundColor: "#fff",
    shadowColor: "rgba(1, 1, 253, 0.1)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 20,
    elevation: 20,
    shadowOpacity: 1,
    height: 66,
  },
  lanceBogrol3: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 12,
    letterSpacing: 1,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#00003d",
    textAlign: "left",
  },
  september2220223: {
    margin: 0,
  },
  pM3: {
    margin: 0,
  },
  moneyTransfer3: {
    position: "absolute",
    bottom: 0,
    left: 0,
    fontSize: 10,
    letterSpacing: 1,
    fontFamily: "Helvetica",
    color: "#7c7c7c",
    textAlign: "left",
  },
  groupView15: {
    position: "absolute",
    marginTop: -18,
    marginLeft: -96.5,
    top: "50%",
    left: "50%",
    width: 105,
    height: 37,
  },
  text3: {
    position: "absolute",
    marginTop: -8,
    top: "50%",
    right: 27,
    fontSize: 14,
    letterSpacing: 1,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#ff4b4b",
    textAlign: "right",
  },
  maskGroup16: {
    position: "absolute",
    marginTop: -17,
    top: "50%",
    left: 14,
    width: 34,
    height: 34,
  },
  groupView16: {
    position: "absolute",
    marginTop: -103.5,
    top: "50%",
    right: 0,
    left: 0,
    borderRadius: 20,
    backgroundColor: "#fff",
    shadowColor: "rgba(1, 1, 253, 0.1)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 20,
    elevation: 20,
    shadowOpacity: 1,
    height: 64,
  },
  lanceBogrol4: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 12,
    letterSpacing: 1,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#00003d",
    textAlign: "left",
  },
  september2220224: {
    margin: 0,
  },
  pM4: {
    margin: 0,
  },
  moneyTransfer4: {
    position: "absolute",
    bottom: 0,
    left: 0,
    fontSize: 10,
    letterSpacing: 1,
    fontFamily: "Helvetica",
    color: "#7c7c7c",
    textAlign: "left",
  },
  groupView17: {
    position: "absolute",
    marginTop: -18,
    marginLeft: -96.5,
    top: "50%",
    left: "50%",
    width: 105,
    height: 37,
  },
  text4: {
    position: "absolute",
    marginTop: -8,
    top: "50%",
    right: 29,
    fontSize: 14,
    letterSpacing: 1,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#27af7c",
    textAlign: "right",
  },
  rectangleIcon2: {
    position: "absolute",
    marginTop: -16,
    top: "50%",
    left: 14,
    borderRadius: 11,
    width: 34,
    height: 34,
  },
  groupView18: {
    position: "absolute",
    top: 0,
    right: 0,
    left: 0,
    borderRadius: 20,
    backgroundColor: "#fff",
    shadowColor: "rgba(1, 1, 253, 0.1)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 20,
    elevation: 20,
    shadowOpacity: 1,
    height: 64,
  },
  groupView19: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  component2201: {
    position: "absolute",
    top: 38,
    right: 0,
    bottom: 0,
    left: 0,
  },
  groupView20: {
    position: "relative",
    width: 325,
    height: 385,
  },
  cardIcon: {
    position: "relative",
    width: 18,
    height: 14,
  },
  groupIcon2: {
    position: "relative",
    width: 25,
    height: 19,
  },
  homeIndicator: {
    position: "relative",
    borderRadius: 100,
    backgroundColor: "#000",
    width: 134,
    height: 5,
  },
  text5: {
    color: "#888",
  },
  text6: {
    color: "#0101fd",
  },
  hello20: {
    position: "absolute",
    marginTop: -18.5,
    top: "50%",
    left: 131,
    fontSize: 26,
    lineHeight: 26,
    fontWeight: "700",
    fontFamily: "Helvetica",
    textAlign: "left",
  },
  totalWalletBalance: {
    position: "absolute",
    marginTop: -39.5,
    marginLeft: -62.5,
    top: "50%",
    left: "50%",
    fontSize: 14,
    fontFamily: "Helvetica",
    color: "#000",
    textAlign: "left",
  },
  july192022: {
    position: "absolute",
    marginTop: 20.5,
    marginLeft: -41.5,
    top: "50%",
    left: "50%",
    fontSize: 14,
    fontFamily: "Helvetica",
    color: "#000",
    textAlign: "left",
  },
  groupView21: {
    position: "relative",
    borderRadius: 15,
    backgroundColor: "#fff",
    shadowColor: "rgba(1, 1, 253, 0.05)",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 20,
    elevation: 20,
    shadowOpacity: 1,
    width: 327,
    height: 123,
    alignSelf: "center",
  },
  groupView22: {
    position: "relative",
    borderRadius: 15,
    backgroundColor: "#0101fd",
    shadowColor: "rgba(1, 1, 253, 0.05)",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 20,
    elevation: 20,
    shadowOpacity: 1,
    width: 180,
    height: 2,
  },
  lineView3: {
    position: "relative",
    borderStyle: "solid",
    borderColor: "#707070",
    borderTopWidth: 1.5,
    width: 357,
    height: 3,
    opacity: 0.3,
  },
  business: {
    position: "relative",
    fontSize: 14,
    textTransform: "capitalize",
    fontFamily: "Helvetica",
    color: "#000",
    textAlign: "left",
  },
  personal: {
    position: "relative",
    fontSize: 14,
    textTransform: "capitalize",
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#0101fd",
    textAlign: "left",
  },
  rectangleView13: {
    position: "relative",
    borderRadius: 15,
    backgroundColor: "#e4e4ff",
    shadowColor: "rgba(0, 0, 0, 0.05)",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 6,
    elevation: 6,
    shadowOpacity: 1,
    width: 327,
    height: 132,
    alignSelf: "center",
  },
  youAreAlmost: {
    fontSize: 14,
    fontWeight: "700",
    fontFamily: "Helvetica",
  },
  text7: {
    fontFamily: "Helvetica",
  },
  text8: {
    fontWeight: "700",
    fontFamily: "Helvetica",
  },
  text9: {
    fontSize: 12,
  },
  youAreAlmostReadyWithYour: {
    position: "relative",
    color: "#000",
    textAlign: "left",
    width: 166,
    opacity: 0.8,
  },
  congratulations: {
    position: "relative",
    fontSize: 14,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#00003d",
    textAlign: "left",
  },
  applyNow: {
    position: "relative",
    fontSize: 12,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#0101fd",
    textAlign: "left",
  },
  path33217Icon: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  text10: {
    position: "absolute",
    marginTop: -10,
    marginLeft: -14,
    top: "50%",
    left: "50%",
    fontSize: 18,
    fontWeight: "700",
    fontFamily: "Typo Grotesk",
    color: "#0101fd",
    textAlign: "left",
  },
  groupView23: {
    position: "relative",
    width: 84,
    height: 84,
  },
  history3: {
    position: "absolute",
    marginTop: -8.5,
    top: "50%",
    left: "0%",
    fontSize: 16,
    letterSpacing: 1,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#999",
    textAlign: "left",
  },
  analysis: {
    marginTop: -8.5,
    fontSize: 16,
    letterSpacing: 1,
    fontFamily: "Helvetica",
    color: "#999",
    textAlign: "left",
    opacity: 0.3,
  },
  history4: {
    position: "absolute",
    left: "29.17%",
    top: "50%",
  },
  carbon: {
    marginTop: -8.5,
    fontSize: 16,
    letterSpacing: 1,
    fontFamily: "Helvetica",
    color: "#999",
    textAlign: "left",
    opacity: 0.3,
  },
  history5: {
    position: "absolute",
    left: "58.68%",
    top: "50%",
  },
  profile: {
    marginTop: -7.5,
    fontSize: 14,
    letterSpacing: 1,
    fontFamily: "Helvetica",
    color: "#999",
    textAlign: "left",
    opacity: 0.3,
  },
  history6: {
    position: "absolute",
    left: "84.72%",
    top: "50%",
  },
  component21225: {
    position: "relative",
    width: 288,
    height: 19,
  },
  polygonIcon: {
    position: "absolute",
    marginLeft: -19.05,
    bottom: 0,
    left: "50%",
    width: 107,
    height: 84,
  },
  groupView24: {
    position: "absolute",
    top: 0,
    right: 14,
    bottom: 3,
    left: 14,
    borderRadius: 20,
    backgroundColor: "#fff1d4",
    shadowColor: "rgba(1, 1, 253, 0.23)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 20,
    elevation: 20,
    shadowOpacity: 1,
  },
  polygonIcon1: {
    position: "absolute",
    marginLeft: -19.05,
    bottom: 0,
    left: "50%",
    width: 107,
    height: 84,
  },
  groupView25: {
    position: "absolute",
    top: 3,
    right: 14,
    bottom: 0,
    left: 14,
    borderRadius: 20,
    backgroundColor: "#fff1d4",
  },
  referAndEarn: {
    fontWeight: "700",
    fontFamily: "Helvetica",
  },
  referAndEarn1: {
    margin: 0,
  },
  carbonTokens: {
    fontFamily: "Helvetica",
  },
  carbonTokens1: {
    margin: 0,
  },
  referAndEarnCarbonTokens: {
    position: "absolute",
    marginTop: -56.36,
    top: "50%",
    left: 49,
    fontSize: 20,
    lineHeight: 25,
    color: "#00003d",
    textAlign: "center",
    width: 208,
  },
  referNow: {
    position: "absolute",
    marginTop: 1.69,
    marginLeft: -70,
    top: "50%",
    left: "50%",
    fontSize: 18,
    fontWeight: "700",
    fontFamily: "Helvetica",
    color: "#0101fd",
    textAlign: "center",
    width: 141,
  },
  groupIcon3: {
    position: "absolute",
    right: 0,
    bottom: 3,
    left: 0,
    maxWidth: "100%",
    overflow: "hidden",
    height: 114,
  },
  groupView26: {
    position: "relative",
    width: 305,
    height: 196,
    alignSelf: "center",
  },
  hello21: {
    position: "absolute",
    marginTop: 54,
    marginLeft: -76.5,
    top: "50%",
    left: "50%",
    fontSize: 20,
    fontWeight: "700",
    fontFamily: "Typo Grotesk",
    color: "#00003d",
    textAlign: "left",
  },
  hello22: {
    position: "absolute",
    marginLeft: -49.5,
    bottom: 35,
    left: "50%",
    fontSize: 20,
    fontWeight: "700",
    fontFamily: "Typo Grotesk",
    color: "#0101fd",
    textAlign: "left",
  },
  youHavePlanted: {
    margin: 0,
  },
  withAdvanceCard: {
    margin: 0,
  },
  hello23: {
    position: "absolute",
    marginTop: 104,
    top: "50%",
    left: 43,
    fontSize: 18,
    fontFamily: "Helvetica",
    color: "#00003d",
    whiteSpace: "pre-wrap",
    textAlign: "center",
  },
  groupIcon4: {
    position: "absolute",
    marginTop: -22.55,
    top: "50%",
    right: 30,
    left: 0,
    maxWidth: "100%",
    overflow: "hidden",
    height: 149,
  },
  image88Icon: {
    position: "absolute",
    top: 13,
    right: 70,
    left: 70,
    maxWidth: "100%",
    overflow: "hidden",
    height: 265,
  },
  groupPressable4: {
    position: "relative",
    borderRadius: 15,
    backgroundColor: "#fff",
    shadowColor: "rgba(0, 0, 0, 0.16)",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 6,
    elevation: 6,
    shadowOpacity: 1,
    width: 325,
    height: 458,
    alignSelf: "center",
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
  iconAwesomeBatteryThreeQua: {
    position: "absolute",
    top: 10,
    right: 0,
    bottom: 5,
    maxHeight: "100%",
    width: 22,
  },
  iconAwesomeWifi: {
    position: "absolute",
    top: 10,
    right: 37,
    bottom: 4,
    maxHeight: "100%",
    width: 17,
  },
  rectangleView14: {
    position: "absolute",
    bottom: 5,
    left: 259,
    borderRadius: 2,
    backgroundColor: "#272727",
    width: 3,
    height: 4,
  },
  rectangleView15: {
    position: "absolute",
    marginLeft: 91.81,
    bottom: 5,
    left: "50%",
    borderRadius: 2,
    backgroundColor: "#272727",
    width: 3,
    height: 6,
  },
  rectangleView16: {
    position: "absolute",
    marginLeft: 95.81,
    bottom: 5,
    left: "50%",
    borderRadius: 2,
    backgroundColor: "#272727",
    width: 3,
    height: 9,
  },
  rectangleView17: {
    position: "absolute",
    top: 10,
    right: 68,
    bottom: 5,
    borderRadius: 2,
    backgroundColor: "#272727",
    width: 3,
  },
  groupView27: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
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
  account: {
    position: "relative",
    backgroundColor: "#f6f5f8",
    flex: 1,
    width: "100%",
    flexDirection: "column",
    alignItems: "flex-start",
  },
});

export default Account3;
