import * as React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  Pressable,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import GlobalStyles from "../GlobalStyles";

const Analytics = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.analytics}>
      <View style={styles.analyticsChild} />
      <View
        style={[
          styles.groupParent,
          styles.mt22,
          styles.ml35,
          styles.groupShadowBox,
          styles.groupShadowBox1,
        ]}
      >
        <View style={styles.helloParent}>
          <Text style={[styles.hello, styles.helloLayout, styles.helloTypo2]}>
            Total Spend
          </Text>
          <Text
            style={[styles.hello1, styles.helloTypo1, styles.helloPosition]}
          >
            £ 1200.00
          </Text>
        </View>
        <Text style={styles.hello2}>
          <Text style={styles.noOf}>No. of</Text>
          <Text style={styles.noOf}>Payments</Text>
        </Text>
        <Text style={styles.hello3}>1000</Text>
        <Image
          style={[styles.groupChild, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/rectangle-6058.png")}
        />
      </View>
      <View
        style={[
          styles.groupParent,
          styles.mt_88,
          styles.ml203,
          styles.groupShadowBox,
          styles.groupShadowBox1,
        ]}
      >
        <View style={styles.helloGroup}>
          <Text style={[styles.hello4, styles.helloLayout, styles.helloTypo2]}>
            <Text style={styles.noOf}>Average Monthly</Text>
            <Text style={styles.noOf}>Spendings</Text>
          </Text>
          <Text
            style={[styles.hello5, styles.helloTypo1, styles.helloPosition]}
          >
            £ 500.00
          </Text>
        </View>
        <Image
          style={[styles.groupChild, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/rectangle-6058.png")}
        />
      </View>
      <View
        style={[
          styles.groupView,
          styles.mt12,
          styles.ml35,
          styles.groupShadowBox,
          styles.groupShadowBox1,
        ]}
      >
        <View style={styles.helloContainer}>
          <Text
            style={[
              styles.hello6,
              styles.hello6SpaceBlock,
              styles.helloLayout,
              styles.helloTypo2,
            ]}
          >
            Balance
          </Text>
          <Text style={[styles.hello7, styles.helloTypo1]}>£ 500.00</Text>
        </View>
        <Image
          style={[styles.groupChild, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/rectangle-60582.png")}
        />
      </View>
      <Text style={[styles.hello8, styles.mt27, styles.ml25, styles.lanceTypo]}>
        Analytics
      </Text>
      <View style={[styles.groupParent1, styles.mt37, styles.ml25]}>
        <View style={[styles.rectangleParent, styles.rectangleParentPosition]}>
          <View style={[styles.rectangle, styles.rectangleShadowBox]} />
          <View style={[styles.rectangle1, styles.rectanglePosition]} />
          <View
            style={[styles.lanceBogrolWrapper, styles.lanceWrapperPosition]}
          >
            <Text
              style={[
                styles.historyFlexBox,
                styles.lancePosition1,
                styles.lancePosition2,
              ]}
            >
              Shopping
            </Text>
          </View>
          <Text style={[styles.text, styles.textTypo4]}>£1458</Text>
          <Image
            style={styles.bagShoppingSolidIcon}
            resizeMode="cover"
            source={require("../assets/bagshoppingsolid.png")}
          />
          <Text style={[styles.text1, styles.textPosition, styles.textTypo3]}>
            <Text style={styles.kgCo}>7.2 kg CO</Text>
            <Text style={styles.text2}>2</Text>
          </Text>
        </View>
        <View style={[styles.text3Position, styles.rectangleParentPosition]}>
          <View style={[styles.rectangle, styles.rectangleShadowBox]} />
          <View style={[styles.rectangle3, styles.rectanglePosition]} />
          <View
            style={[styles.lanceBogrolContainer, styles.lanceWrapperPosition]}
          >
            <Text
              style={[styles.lancePosition1, styles.lancePosition2]}
            >{`Food & Beverages`}</Text>
          </View>
          <Image
            style={styles.groupIcon}
            resizeMode="cover"
            source={require("../assets/group-1804.png")}
          />
          <Text style={[styles.text3Position, styles.textTypo4]}>£1458</Text>
          <Text style={[styles.text4, styles.textPosition, styles.textTypo3]}>
            <Text style={styles.kgCo}>7.2 kg CO</Text>
            <Text style={styles.text2}>2</Text>
          </Text>
        </View>
        <View
          style={[styles.rectangleContainer, styles.rectangleParentPosition]}
        >
          <View style={[styles.rectangle, styles.rectangleShadowBox]} />
          <View style={[styles.rectangle5, styles.rectanglePosition]} />
          <View style={[styles.lanceBogrolFrame, styles.lanceWrapperPosition]}>
            <Text style={styles.lancePosition2}>Transport</Text>
          </View>
          <Image
            style={styles.iconAwesomeCar}
            resizeMode="cover"
            source={require("../assets/icon-awesomecar1.png")}
          />
          <Text style={styles.textTypo4}>£1458</Text>
          <Text style={[styles.text4, styles.textPosition, styles.textTypo3]}>
            <Text style={styles.kgCo}>7.2 kg CO</Text>
            <Text style={styles.text2}>2</Text>
          </Text>
        </View>
        <View style={[styles.rectangleParent1, styles.rectangleParentPosition]}>
          <View style={[styles.rectangle, styles.rectangleShadowBox]} />
          <View style={[styles.rectangle7, styles.rectanglePosition]} />
          <View
            style={[styles.lanceBogrolWrapper1, styles.lanceWrapperPosition]}
          >
            <Text style={styles.lancePosition2}>Health</Text>
          </View>
          <Image
            style={styles.groupChild1}
            resizeMode="cover"
            source={require("../assets/group-30299.png")}
          />
          <Text style={styles.textTypo4}>£1458</Text>
          <Text style={[styles.text4, styles.textPosition, styles.textTypo3]}>
            <Text style={styles.kgCo}>7.2 kg CO</Text>
            <Text style={styles.text2}>2</Text>
          </Text>
        </View>
        <View style={[styles.lanceBogrolParent, styles.lanceParentPosition]}>
          <Text
            style={[
              styles.lanceBogrol4,
              styles.historyFlexBox,
              styles.lanceTypo,
            ]}
          >
            Spendings
          </Text>
          <Image
            style={[styles.iconFeatherPieChart, styles.iconPosition1]}
            resizeMode="cover"
            source={require("../assets/icon-featherpiechart.png")}
          />
        </View>
      </View>
      <View style={[styles.analyticsInner, styles.mt28, styles.ml_2]}>
        <View style={styles.path23773Parent}>
          <Image
            style={[styles.path23773Icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/path-23773.png")}
          />
          <Image
            style={[styles.path23772Icon, styles.path23772IconPosition]}
            resizeMode="cover"
            source={require("../assets/path-23772.png")}
          />
          <Image
            style={[styles.path33379Icon, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/path-33379.png")}
          />
          <Image
            style={[styles.path33375Icon, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/path-33379.png")}
          />
          <Image
            style={[styles.path33377Icon, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/path-33379.png")}
          />
          <Image
            style={[styles.path33373Icon, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/path-33379.png")}
          />
          <Image
            style={[styles.path33378Icon, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/path-33379.png")}
          />
          <Image
            style={[styles.path33374Icon, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/path-33379.png")}
          />
          <Image
            style={[styles.path33376Icon, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/path-33379.png")}
          />
          <Image
            style={styles.path33371Icon}
            resizeMode="cover"
            source={require("../assets/path-33371.png")}
          />
          <ScrollView
            style={[styles.scrollGroup16, styles.path23772IconPosition]}
            contentContainerStyle={styles.scrollGroup16Content}
          >
            <Text style={styles.hello9}>Mar</Text>
            <Text style={[styles.hello9, styles.mt_14, styles.ml129]}>Jun</Text>
            <Text style={[styles.hello9, styles.mt_14, styles.ml43]}>Apr</Text>
            <Text
              style={[
                styles.hello12,
                styles.mt_14,
                styles.ml172,
                styles.helloTypo1,
              ]}
            >
              Jul
            </Text>
            <Text style={[styles.hello9, styles.mt_14, styles.ml84]}>May</Text>
            <Text style={[styles.hello9, styles.mt_14, styles.ml213]}>Aug</Text>
            <Text style={[styles.hello9, styles.mt_14, styles.ml256]}>
              Sept
            </Text>
            <Text style={[styles.hello9, styles.mt_14, styles.ml303]}>Oct</Text>
            <Text style={[styles.hello9, styles.mt_14, styles.ml344]}>Nov</Text>
            <Text style={[styles.hello9, styles.mt_14, styles.ml391]}>Dec</Text>
            <Text style={[styles.hello9, styles.mt_14, styles.ml434]}>Jan</Text>
            <Text style={[styles.hello9, styles.mt_14, styles.ml479]}>Feb</Text>
          </ScrollView>
          <View style={styles.lineView} />
          <Image
            style={styles.ellipseIcon}
            resizeMode="cover"
            source={require("../assets/ellipse-3200.png")}
          />
          <Image
            style={styles.groupChild2}
            resizeMode="cover"
            source={require("../assets/ellipse-3199.png")}
          />
          <View style={styles.union23Parent}>
            <Image
              style={[styles.union23Icon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/union-23.png")}
            />
            <Text style={styles.hello21}>£ 20.00</Text>
          </View>
          <View style={styles.homeIndicator} />
        </View>
      </View>
      <View style={[styles.groupParent2, styles.mt33, styles.ml25]}>
        <View style={[styles.groupParent3, styles.groupParentShadowBox]}>
          <View style={[styles.lanceBogrolGroup, styles.lancePosition]}>
            <Text
              style={[
                styles.lanceBogrol5,
                styles.historyFlexBox,
                styles.lancePosition1,
              ]}
            >
              Wallmart
            </Text>
            <Text style={[styles.moneyTransfer, styles.moneyTypo]}>
              <Text style={styles.noOf}>September 22, 2022</Text>
              <Text style={styles.noOf}>12:06 PM</Text>
            </Text>
          </View>
          <Image
            style={[styles.walmartIcon, styles.walmartIconPosition]}
            resizeMode="cover"
            source={require("../assets/walmarticon.png")}
          />
          <Text style={[styles.text12, styles.textTypo2]}>£1458</Text>
          <Text style={[styles.text13, styles.textTypo1]}>
            <Text style={styles.kgCo4}>7.2 kg CO</Text>
            <Text style={styles.text14}>2</Text>
          </Text>
        </View>
        <View style={[styles.groupParent4, styles.groupParentShadowBox]}>
          <View style={[styles.lanceBogrolGroup, styles.lancePosition]}>
            <Text
              style={[
                styles.lanceBogrol5,
                styles.historyFlexBox,
                styles.lancePosition1,
              ]}
            >
              Adidas
            </Text>
            <Text style={[styles.moneyTransfer, styles.moneyTypo]}>
              <Text style={styles.noOf}>September 22, 2022</Text>
              <Text style={styles.noOf}>12:06 PM</Text>
            </Text>
          </View>
          <Image
            style={[styles.walmartIcon, styles.walmartIconPosition]}
            resizeMode="cover"
            source={require("../assets/mask-group-163.png")}
          />
        </View>
        <View
          style={[
            styles.groupParent5,
            styles.parentLayout,
            styles.rectangleShadowBox,
          ]}
        >
          <View style={[styles.lanceBogrolParent2, styles.lancePosition]}>
            <Text
              style={[
                styles.lanceBogrol5,
                styles.historyFlexBox,
                styles.lancePosition1,
              ]}
            >
              Grocery Market
            </Text>
            <Text style={[styles.moneyTransfer, styles.moneyTypo]}>
              <Text style={styles.noOf}>September 22, 2022</Text>
              <Text style={styles.noOf}>12:06 PM</Text>
            </Text>
          </View>
          <Image
            style={[styles.maskGroup14, styles.walmartIconPosition]}
            resizeMode="cover"
            source={require("../assets/mask-group-149.png")}
          />
          <Image
            style={[styles.groupChild3, styles.groupChildPosition]}
            resizeMode="cover"
            source={require("../assets/group-30454.png")}
          />
          <Text style={[styles.text15, styles.textTypo2]}>£1458</Text>
          <Text style={[styles.text16, styles.textTypo1]}>
            <Text style={styles.kgCo4}>7.2 kg CO</Text>
            <Text style={styles.text14}>2</Text>
          </Text>
        </View>
        <Text style={[styles.history, styles.historyFlexBox, styles.lanceTypo]}>
          Recent Transactions
        </Text>
        <Image
          style={styles.transationsIcon}
          resizeMode="cover"
          source={require("../assets/path-23663.png")}
        />
        <Text style={[styles.text18, styles.textTypo2]}>£1458</Text>
        <Text style={[styles.text19, styles.textTypo1]}>
          <Text style={styles.kgCo4}>7.2 kg CO</Text>
          <Text style={styles.text14}>2</Text>
        </Text>
      </View>
      <View style={[styles.groupParent6, styles.mt52, styles.ml25]}>
        <View style={[styles.groupParent3, styles.groupParentShadowBox]}>
          <View
            style={[
              styles.lanceBogrolParent3,
              styles.groupParentPosition,
              styles.groupWrapperPosition,
            ]}
          >
            <Text
              style={[
                styles.lanceBogrol8,
                styles.historyFlexBox,
                styles.lancePosition1,
              ]}
            >
              House Rent
            </Text>
            <Text style={[styles.moneyTransfer3, styles.moneyTypo]}>
              Due Tomorrow
            </Text>
          </View>
          <Text style={[styles.text21, styles.textTypo]}>£350.00</Text>
          <Image
            style={[styles.walmartIcon, styles.walmartIconPosition]}
            resizeMode="cover"
            source={require("../assets/walmarticon1.png")}
          />
        </View>
        <View style={[styles.groupParent4, styles.groupParentShadowBox]}>
          <View
            style={[
              styles.groupWrapper,
              styles.groupParentPosition,
              styles.groupWrapperPosition,
            ]}
          >
            <View style={styles.path23773Parent}>
              <Text
                style={[
                  styles.lanceBogrol8,
                  styles.historyFlexBox,
                  styles.lancePosition1,
                ]}
              >
                Amazon Prime
              </Text>
              <Text style={[styles.moneyTransfer3, styles.moneyTypo]}>
                in 5 Days
              </Text>
            </View>
          </View>
          <Text style={[styles.text22, styles.textTypo]}>£50.00</Text>
          <Image
            style={[styles.walmartIcon, styles.walmartIconPosition]}
            resizeMode="cover"
            source={require("../assets/mask-group-164.png")}
          />
        </View>
        <View style={[styles.groupParent9, styles.groupParentShadowBox]}>
          <View style={[styles.groupParent10, styles.groupParentPosition]}>
            <View style={styles.lanceBogrolWrapper2}>
              <Text
                style={[
                  styles.lanceBogrol10,
                  styles.historyFlexBox,
                  styles.lancePosition1,
                  styles.lancePosition2,
                ]}
              >
                Netflix
              </Text>
            </View>
            <View style={styles.moneyTransferWrapper}>
              <Text style={[styles.moneyTransfer5, styles.moneyTypo]}>
                in a week
              </Text>
            </View>
          </View>
          <Text style={[styles.text22, styles.textTypo]}>£70.00</Text>
          <Image
            style={[styles.walmartIcon, styles.walmartIconPosition]}
            resizeMode="cover"
            source={require("../assets/mask-group-1410.png")}
          />
        </View>
        <View style={[styles.lanceBogrolParent5, styles.lanceParentPosition]}>
          <Text
            style={[
              styles.lanceBogrol11,
              styles.historyFlexBox,
              styles.lanceTypo,
            ]}
          >
            Upcoming Spendings
          </Text>
          <Image
            style={[styles.iconFeatherPieChart1, styles.iconPosition1]}
            resizeMode="cover"
            source={require("../assets/icon-featherpiechart.png")}
          />
        </View>
        <Image
          style={[styles.groupChild4, styles.groupChildPosition]}
          resizeMode="cover"
          source={require("../assets/group-30454.png")}
        />
      </View>
      <View style={[styles.statusBarBlack, styles.mt_1788]}>
        <View style={[styles.rectangle8, styles.groupShadowBox]} />
        <View style={[styles.statusBar, styles.groupParentPosition]}>
          <View style={styles.time}>
            <Text style={[styles.text24, styles.textPosition]}>9:41</Text>
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
      <View style={[styles.component2124, styles.mt11, styles.ml33]}>
        <Pressable
          style={styles.lancePosition1}
          onPress={() => navigation.navigate("Account")}
        >
          <Text
            style={[
              styles.account,
              styles.historyFlexBox,
              styles.hello6SpaceBlock,
            ]}
          >
            Account
          </Text>
        </Pressable>
        <Text
          style={[
            styles.history2,
            styles.historyFlexBox,
            styles.hello6SpaceBlock,
          ]}
        >
          Analysis
        </Text>
        <Pressable
          style={styles.history3}
          onPress={() => navigation.navigate("Carbon")}
        >
          <Text
            style={[
              styles.account,
              styles.historyFlexBox,
              styles.hello6SpaceBlock,
            ]}
          >
            Carbon
          </Text>
        </Pressable>
        <Pressable
          style={styles.history4}
          onPress={() => navigation.navigate("Settings")}
        >
          <Text
            style={[
              styles.account,
              styles.historyFlexBox,
              styles.hello6SpaceBlock,
            ]}
          >
            Profile
          </Text>
        </Pressable>
      </View>
      <View
        style={[
          styles.helloParent1,
          styles.mt39,
          styles.ml25,
          styles.parentLayout,
        ]}
      >
        <Text style={[styles.hello22, styles.helloLayout]}>Day</Text>
        <Text style={[styles.hello23, styles.helloTypo]}>Week</Text>
        <Text style={[styles.hello24, styles.helloTypo1, styles.helloLayout]}>
          Month
        </Text>
        <Text style={[styles.hello25, styles.helloTypo]}>Year</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mt_14: {
    marginTop: GlobalStyles.Margin.margin_40xs,
  },
  ml129: {
    marginLeft: 129,
  },
  ml43: {
    marginLeft: GlobalStyles.Margin.margin_14xl,
  },
  ml172: {
    marginLeft: GlobalStyles.Margin.margin_68xl,
  },
  ml84: {
    marginLeft: GlobalStyles.Margin.margin_42xl,
  },
  ml213: {
    marginLeft: GlobalStyles.Margin.margin_78xl,
  },
  ml256: {
    marginLeft: 256,
  },
  ml303: {
    marginLeft: GlobalStyles.Margin.margin_93xl,
  },
  ml344: {
    marginLeft: 344,
  },
  ml391: {
    marginLeft: 391,
  },
  ml434: {
    marginLeft: 434,
  },
  ml479: {
    marginLeft: 479,
  },
  scrollGroup16Content: {
    flexDirection: "column",
  },
  mt22: {
    marginTop: GlobalStyles.Margin.margin_10xs,
  },
  ml35: {
    marginLeft: GlobalStyles.Margin.margin_5xl,
  },
  mt_88: {
    marginTop: -88,
  },
  ml203: {
    marginLeft: GlobalStyles.Margin.margin_75xl,
  },
  mt12: {
    marginTop: GlobalStyles.Margin.margin_22xs,
  },
  mt27: {
    marginTop: GlobalStyles.Margin.margin_4xs,
  },
  ml25: {
    marginLeft: GlobalStyles.Margin.margin_7xs,
  },
  mt37: {
    marginTop: GlobalStyles.Margin.margin_7xl,
  },
  mt28: {
    marginTop: GlobalStyles.Margin.margin_3xs,
  },
  ml_2: {
    marginLeft: GlobalStyles.Margin.margin_35xs,
  },
  mt33: {
    marginTop: GlobalStyles.Margin.margin_2xl,
  },
  mt52: {
    marginTop: GlobalStyles.Margin.margin_21xl,
  },
  mt_1788: {
    marginTop: -1788,
  },
  mt11: {
    marginTop: GlobalStyles.Margin.margin_23xs,
  },
  ml33: {
    marginLeft: GlobalStyles.Margin.margin_2xl,
  },
  mt39: {
    marginTop: GlobalStyles.Margin.margin_9xl,
  },
  groupShadowBox: {
    shadowOpacity: 1,
    elevation: 6,
    shadowRadius: 6,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    backgroundColor: GlobalStyles.Color.white,
  },
  groupShadowBox1: {
    shadowColor: "rgba(1, 1, 253, 0.05)",
    borderRadius: GlobalStyles.Border.br_lg,
    elevation: 6,
    shadowRadius: 6,
    shadowOffset: {
      width: 0,
      height: 3,
    },
  },
  helloLayout: {
    lineHeight: 16,
    position: "absolute",
  },
  helloTypo2: {
    fontSize: GlobalStyles.FontSize.size_base,
    textAlign: "left",
    color: GlobalStyles.Color.indigo,
    lineHeight: 16,
    left: 0,
  },
  helloTypo1: {
    color: GlobalStyles.Color.blue,
    fontWeight: "700",
    textAlign: "left",
    fontFamily: GlobalStyles.FontFamily.helvetica,
  },
  helloPosition: {
    lineHeight: 14,
    color: GlobalStyles.Color.blue,
    bottom: 0,
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    left: 0,
    position: "absolute",
  },
  hello6SpaceBlock: {
    marginTop: -8.5,
    fontFamily: GlobalStyles.FontFamily.helvetica,
  },
  lanceTypo: {
    fontFamily: GlobalStyles.FontFamily.typoGrotesk,
    fontWeight: "700",
    color: GlobalStyles.Color.indigo,
  },
  rectangleParentPosition: {
    height: 33,
    right: 0,
    left: 0,
  },
  rectangleShadowBox: {
    elevation: 20,
    shadowRadius: 20,
    right: 0,
    bottom: 0,
    left: 0,
    position: "absolute",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowColor: "rgba(1, 1, 253, 0.05)",
  },
  rectanglePosition: {
    borderBottomLeftRadius: GlobalStyles.Border.br_3xl,
    borderTopLeftRadius: GlobalStyles.Border.br_3xl,
    bottom: 0,
    left: 0,
    top: 0,
    position: "absolute",
  },
  lanceWrapperPosition: {
    left: 44,
    marginTop: -7.5,
    height: 14,
    top: "50%",
    position: "absolute",
  },
  lancePosition1: {
    left: "0%",
    top: "50%",
    position: "absolute",
  },
  lancePosition2: {
    marginTop: -7,
    letterSpacing: 1,
    left: "0%",
    fontSize: GlobalStyles.FontSize.size_xs,
    color: GlobalStyles.Color.indigo,
    fontFamily: GlobalStyles.FontFamily.helvetica,
  },
  textTypo4: {
    textAlign: "right",
    left: "82.26%",
    letterSpacing: 1,
    color: GlobalStyles.Color.blue,
    fontWeight: "700",
    fontFamily: GlobalStyles.FontFamily.helvetica,
    fontSize: GlobalStyles.FontSize.size_base,
  },
  textPosition: {
    letterSpacing: 0,
    position: "absolute",
  },
  textTypo3: {
    right: 11,
    letterSpacing: 0,
    textAlign: "right",
    color: GlobalStyles.Color.gray_800,
    fontWeight: "700",
    fontFamily: GlobalStyles.FontFamily.helvetica,
  },
  lanceParentPosition: {
    height: 24,
    left: 0,
    top: 0,
    position: "absolute",
  },
  historyFlexBox: {
    letterSpacing: 1,
    textAlign: "left",
  },
  iconPosition1: {
    bottom: "-2.11%",
    top: "14.58%",
    height: "87.52%",
    left: "0%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  path23772IconPosition: {
    left: 21,
    position: "absolute",
  },
  iconPosition: {
    opacity: 0.03,
    height: 1,
    right: 9,
    left: 21,
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  groupParentShadowBox: {
    height: 64,
    borderRadius: GlobalStyles.Border.br_4xl,
    elevation: 20,
    shadowRadius: 20,
    right: 0,
    left: 0,
    position: "absolute",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowColor: "rgba(1, 1, 253, 0.05)",
    backgroundColor: GlobalStyles.Color.white,
  },
  lancePosition: {
    width: 105,
    marginLeft: -97.08,
    left: "50%",
    top: "50%",
    height: 37,
    position: "absolute",
  },
  moneyTypo: {
    color: GlobalStyles.Color.gray_1000,
    fontSize: GlobalStyles.FontSize.size_3xs,
    letterSpacing: 1,
    left: "0%",
    top: "50%",
    textAlign: "left",
    fontFamily: GlobalStyles.FontFamily.helvetica,
    position: "absolute",
  },
  walmartIconPosition: {
    width: 34,
    height: 34,
    left: 14,
    top: "50%",
    position: "absolute",
  },
  textTypo2: {
    fontSize: GlobalStyles.FontSize.size_5xl,
    left: "70.97%",
    textAlign: "right",
    letterSpacing: 1,
    top: "50%",
    color: GlobalStyles.Color.blue,
    fontWeight: "700",
    fontFamily: GlobalStyles.FontFamily.helvetica,
    position: "absolute",
  },
  textTypo1: {
    right: 24,
    textAlign: "right",
    letterSpacing: 1,
    color: GlobalStyles.Color.gray_800,
    fontWeight: "700",
    fontFamily: GlobalStyles.FontFamily.helvetica,
    position: "absolute",
  },
  parentLayout: {
    borderRadius: GlobalStyles.Border.br_4xl,
    backgroundColor: GlobalStyles.Color.white,
  },
  groupChildPosition: {
    height: 17,
    width: 18,
    left: "50%",
    bottom: 0,
    position: "absolute",
  },
  groupParentPosition: {
    height: 26,
    top: "50%",
    position: "absolute",
  },
  groupWrapperPosition: {
    marginLeft: -97,
    height: 26,
    marginTop: -12,
    left: "50%",
  },
  textTypo: {
    marginTop: -8,
    textAlign: "right",
    letterSpacing: 1,
    top: "50%",
    fontWeight: "700",
    color: GlobalStyles.Color.indigo,
    fontFamily: GlobalStyles.FontFamily.helvetica,
    fontSize: GlobalStyles.FontSize.size_base,
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
  helloTypo: {
    color: GlobalStyles.Color.gray_900,
    fontSize: GlobalStyles.FontSize.size_xl,
    textAlign: "left",
    fontFamily: GlobalStyles.FontFamily.helvetica,
    lineHeight: 16,
    position: "absolute",
  },
  analyticsChild: {
    backgroundColor: GlobalStyles.Color.gray_300,
    height: 1805,
    width: 375,
  },
  hello: {
    textAlign: "left",
    color: GlobalStyles.Color.indigo,
    fontFamily: GlobalStyles.FontFamily.helvetica,
    top: 0,
  },
  hello1: {
    fontSize: GlobalStyles.FontSize.size_2xl,
    left: 0,
  },
  helloParent: {
    width: 80,
    height: 37,
    left: 11,
    top: 10,
    position: "absolute",
  },
  noOf: {
    margin: GlobalStyles.Margin.margin_33xs,
  },
  hello2: {
    bottom: 6,
    lineHeight: 12,
    color: GlobalStyles.Color.gray_800,
    fontSize: GlobalStyles.FontSize.size_xs,
    textAlign: "left",
    fontFamily: GlobalStyles.FontFamily.helvetica,
    left: 11,
    position: "absolute",
  },
  hello3: {
    right: 14,
    fontSize: GlobalStyles.FontSize.size_xl,
    bottom: 10,
    color: GlobalStyles.Color.gray_800,
    lineHeight: 14,
    textAlign: "left",
    fontFamily: GlobalStyles.FontFamily.helvetica,
    position: "absolute",
  },
  groupChild: {
    opacity: 0.2,
    right: 0,
    bottom: 0,
    top: 0,
  },
  groupParent: {
    width: 142,
    height: 88,
  },
  hello4: {
    fontWeight: "700",
    textAlign: "left",
    color: GlobalStyles.Color.indigo,
    fontFamily: GlobalStyles.FontFamily.helvetica,
    top: 0,
  },
  hello5: {
    left: 6,
    fontSize: GlobalStyles.FontSize.size_xl,
  },
  helloGroup: {
    right: 15,
    height: 62,
    left: 15,
    top: 12,
    position: "absolute",
  },
  hello6: {
    top: "50%",
    fontWeight: "700",
    textAlign: "left",
    color: GlobalStyles.Color.indigo,
  },
  hello7: {
    right: -1,
    fontSize: 28,
    lineHeight: 25,
    top: 0,
    position: "absolute",
  },
  helloContainer: {
    marginTop: -16.5,
    right: 19,
    height: 31,
    top: "50%",
    left: 15,
    position: "absolute",
  },
  groupView: {
    width: 310,
    height: 65,
  },
  hello8: {
    fontSize: GlobalStyles.FontSize.size_8xl,
    textAlign: "left",
  },
  rectangle: {
    borderRadius: GlobalStyles.Border.br_3xl,
    top: 0,
    backgroundColor: GlobalStyles.Color.white,
  },
  rectangle1: {
    right: 255,
    backgroundColor: GlobalStyles.Color.violet_200,
  },
  lanceBogrolWrapper: {
    width: 57,
    height: 14,
  },
  text: {
    marginTop: -13.25,
    top: "50%",
    position: "absolute",
  },
  bagShoppingSolidIcon: {
    marginTop: -8.01,
    marginLeft: -145.26,
    width: 13,
    height: 15,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  kgCo: {
    fontSize: GlobalStyles.FontSize.size_4xs,
  },
  text2: {
    fontSize: GlobalStyles.FontSize.size_12xs,
    verticalAlign: "sub",
  },
  text1: {
    bottom: 2,
  },
  rectangleParent: {
    marginTop: -56.25,
    top: "50%",
    position: "absolute",
  },
  rectangle3: {
    right: 124,
    backgroundColor: GlobalStyles.Color.orange_100,
  },
  lanceBogrolContainer: {
    width: 112,
    height: 14,
  },
  groupIcon: {
    left: 13,
    width: 15,
    height: 13,
    top: 10,
    position: "absolute",
  },
  text3Position: {
    marginTop: -14.25,
    top: "50%",
    position: "absolute",
  },
  text4: {
    bottom: 3,
  },
  rectangle5: {
    right: 155,
    backgroundColor: GlobalStyles.Color.green_100,
  },
  lanceBogrolFrame: {
    width: 58,
    height: 14,
  },
  iconAwesomeCar: {
    right: 290,
    left: 14,
    top: 12,
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    bottom: 10,
    position: "absolute",
  },
  rectangleContainer: {
    marginTop: 27.75,
    top: "50%",
    position: "absolute",
  },
  rectangle7: {
    right: 196,
    backgroundColor: GlobalStyles.Color.orange_200,
  },
  lanceBogrolWrapper1: {
    width: 39,
    height: 14,
  },
  groupChild1: {
    marginTop: -3.53,
    width: 12,
    height: 11,
    top: "50%",
    left: 15,
    position: "absolute",
  },
  rectangleParent1: {
    bottom: 0,
    position: "absolute",
  },
  lanceBogrol4: {
    left: "22.22%",
    marginTop: -12,
    top: "50%",
    fontSize: GlobalStyles.FontSize.size_2xl,
    position: "absolute",
  },
  iconFeatherPieChart: {
    width: "16.68%",
    right: "83.32%",
  },
  lanceBogrolParent: {
    width: 126,
  },
  groupParent1: {
    height: 206,
    width: 320,
  },
  path23773Icon: {
    top: 16,
    bottom: 20,
    right: 0,
  },
  path23772Icon: {
    top: 8,
    height: 130,
    opacity: 0.4,
    right: 7,
    overflow: "hidden",
    maxWidth: "100%",
    left: 21,
  },
  path33379Icon: {
    marginTop: -12.33,
    top: "50%",
  },
  path33375Icon: {
    marginTop: -55.92,
    top: "50%",
  },
  path33377Icon: {
    marginTop: 31.25,
    top: "50%",
  },
  path33373Icon: {
    top: 15,
  },
  path33378Icon: {
    marginTop: 8.5,
    top: "50%",
  },
  path33374Icon: {
    marginTop: -35.08,
    top: "50%",
  },
  path33376Icon: {
    marginTop: 52.08,
    top: "50%",
  },
  path33371Icon: {
    bottom: 24,
    opacity: 0.27,
    height: 1,
    right: 9,
    left: 21,
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  hello9: {
    color: GlobalStyles.Color.gray_800,
    fontSize: GlobalStyles.FontSize.size_xs,
    textAlign: "left",
    fontFamily: GlobalStyles.FontFamily.helvetica,
  },
  hello12: {
    fontSize: GlobalStyles.FontSize.size_xs,
  },
  scrollGroup16: {
    right: 21,
    height: 14,
    bottom: 0,
  },
  lineView: {
    marginTop: -50,
    marginLeft: 42.94,
    borderStyle: "dashed",
    borderColor: "#707070",
    borderRadius: 0.001,
    borderRightWidth: 1,
    width: 2,
    height: 115,
    opacity: 0.51,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  ellipseIcon: {
    marginTop: -51,
    marginLeft: 32.94,
    height: 22,
    opacity: 0.45,
    width: 22,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  groupChild2: {
    marginTop: -45,
    marginLeft: 38.94,
    width: 10,
    height: 10,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  union23Icon: {
    right: -18,
    bottom: -18,
    top: 0,
  },
  hello21: {
    bottom: 13,
    fontSize: GlobalStyles.FontSize.size_3xs,
    left: 15,
    color: GlobalStyles.Color.blue,
    fontWeight: "700",
    textAlign: "left",
    fontFamily: GlobalStyles.FontFamily.helvetica,
    position: "absolute",
  },
  union23Parent: {
    marginLeft: 12.94,
    width: 63,
    height: 34,
    left: "50%",
    top: 0,
    position: "absolute",
  },
  homeIndicator: {
    marginTop: 38,
    right: 120,
    left: 123,
    borderRadius: GlobalStyles.Border.br_8xl,
    backgroundColor: GlobalStyles.Color.black,
    height: 5,
    top: "50%",
    position: "absolute",
  },
  path23773Parent: {
    right: 0,
    bottom: 0,
    left: 0,
    top: 0,
    position: "absolute",
  },
  analyticsInner: {
    width: 377,
    height: 188,
  },
  lanceBogrol5: {
    marginTop: -18.5,
    fontSize: GlobalStyles.FontSize.size_xs,
    fontWeight: "700",
    color: GlobalStyles.Color.indigo,
    fontFamily: GlobalStyles.FontFamily.helvetica,
  },
  moneyTransfer: {
    marginTop: -3.5,
  },
  lanceBogrolGroup: {
    marginTop: -18,
  },
  walmartIcon: {
    marginTop: -16,
  },
  text12: {
    marginTop: -18,
  },
  kgCo4: {
    fontSize: GlobalStyles.FontSize.size_xs,
  },
  text14: {
    fontSize: GlobalStyles.FontSize.size_8xs,
    verticalAlign: "sub",
  },
  text13: {
    bottom: 9,
  },
  groupParent3: {
    marginTop: -97.49,
    top: "50%",
  },
  groupParent4: {
    marginTop: -21.49,
    top: "50%",
  },
  lanceBogrolParent2: {
    marginTop: -29.49,
  },
  maskGroup14: {
    marginTop: -27.49,
  },
  groupChild3: {
    marginLeft: -8.2,
  },
  text15: {
    marginTop: -31.49,
  },
  text16: {
    marginTop: -6.02,
    top: "50%",
  },
  groupParent5: {
    height: 87,
  },
  history: {
    marginTop: -141.49,
    left: "11.29%",
    top: "50%",
    fontSize: GlobalStyles.FontSize.size_2xl,
    position: "absolute",
  },
  transationsIcon: {
    top: 6,
    left: 5,
    width: 19,
    height: 20,
    position: "absolute",
  },
  text18: {
    marginTop: -10.49,
  },
  text19: {
    marginTop: 14.98,
    top: "50%",
  },
  groupParent2: {
    height: 283,
    width: 320,
  },
  lanceBogrol8: {
    marginTop: -13,
    fontSize: GlobalStyles.FontSize.size_xs,
    fontWeight: "700",
    color: GlobalStyles.Color.indigo,
    fontFamily: GlobalStyles.FontFamily.helvetica,
  },
  moneyTransfer3: {
    marginTop: 2,
  },
  lanceBogrolParent3: {
    width: 74,
  },
  text21: {
    left: "74.06%",
  },
  groupWrapper: {
    width: 93,
  },
  text22: {
    left: "76.88%",
  },
  lanceBogrol10: {
    fontWeight: "700",
  },
  lanceBogrolWrapper2: {
    right: 7,
    height: 14,
    left: 0,
    top: 0,
    position: "absolute",
  },
  moneyTransfer5: {
    marginTop: -5.5,
  },
  moneyTransferWrapper: {
    height: 11,
    right: 0,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
  groupParent10: {
    marginLeft: -98,
    width: 49,
    marginTop: -12,
    left: "50%",
  },
  groupParent9: {
    bottom: 25,
  },
  lanceBogrol11: {
    left: "12.17%",
    marginTop: -12,
    top: "50%",
    fontSize: GlobalStyles.FontSize.size_2xl,
    position: "absolute",
  },
  iconFeatherPieChart1: {
    width: "9.14%",
    right: "90.86%",
  },
  lanceBogrolParent5: {
    width: 230,
  },
  groupChild4: {
    marginLeft: -8.19,
  },
  groupParent6: {
    height: 288,
    width: 320,
  },
  rectangle8: {
    shadowColor: "rgba(0, 0, 0, 0.05)",
    right: 0,
    bottom: 0,
    left: 0,
    top: 0,
    position: "absolute",
  },
  text24: {
    fontSize: GlobalStyles.FontSize.size_4xl,
    lineHeight: 24,
    fontWeight: "500",
    fontFamily: GlobalStyles.FontFamily.roboto,
    color: GlobalStyles.Color.gray_1900,
    textAlign: "left",
    left: 0,
    top: 0,
  },
  time: {
    width: 40,
    bottom: 0,
    left: 0,
    top: 0,
    position: "absolute",
  },
  batteryIcon: {
    marginTop: -3,
    width: 22,
    height: 11,
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
  },
  statusBarBlack: {
    height: 44,
    width: 375,
  },
  account: {
    opacity: 0.3,
    fontSize: GlobalStyles.FontSize.size_xl,
    color: GlobalStyles.Color.gray_800,
  },
  history2: {
    left: "28.57%",
    top: "50%",
    fontSize: GlobalStyles.FontSize.size_xl,
    color: GlobalStyles.Color.gray_800,
    fontWeight: "700",
    position: "absolute",
  },
  history3: {
    left: "57.48%",
    top: "50%",
    position: "absolute",
  },
  history4: {
    left: "82.99%",
    top: "50%",
    position: "absolute",
  },
  component2124: {
    width: 294,
    height: 19,
  },
  hello22: {
    left: 20,
    top: 9,
    fontSize: GlobalStyles.FontSize.size_xl,
    color: GlobalStyles.Color.gray_800,
    textAlign: "left",
    fontFamily: GlobalStyles.FontFamily.helvetica,
  },
  hello23: {
    left: 90,
    top: 9,
  },
  hello24: {
    left: 174,
    top: 9,
    fontSize: GlobalStyles.FontSize.size_xl,
  },
  hello25: {
    left: 261,
    top: 10,
  },
  helloParent1: {
    width: 323,
    height: 35,
  },
  analytics: {
    flex: 1,
    width: "100%",
    backgroundColor: GlobalStyles.Color.white,
  },
});

export default Analytics;
